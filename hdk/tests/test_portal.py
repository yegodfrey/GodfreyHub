#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""portal 补齐通路单测（hermetic：临时语料根 + 伪造响应，绝不打网络）。

锁定的契约：
  1. `documentPortal/getDocumentById` 的响应转成与知识 MCP 同形状的 item
     （value.content 是 {type:'html', content:'…'} 字典，正文必须是转换后的 Markdown）。
  2. 失败三分类：传输/结构不合法 = PortalTransient（不确定，绝不判删）；
     code=0 但无正文 = None（可判不可得）；否则 item。
  3. 门户路入库的文档带 `source: portal` 标量，增量重查不把它们放进知识 MCP 队列，
     判删确认走 portal 自己——否则「MCP 永不返回」会被当成官方已删除而误删整批。
"""
import json
import os
import re
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import crawl          # noqa: E402
import catalog        # noqa: E402
import incremental    # noqa: E402
import portal         # noqa: E402


def ok_response(slug="topic-0000001234567890", catalog_name="guide", title="主题"):
    return {"code": 0, "message": "success", "value": {
        "title": title, "catalogName": catalog_name, "fileName": slug,
        "content": {"type": "html",
                    "content": "<html><head></head><body><h1>%s</h1><p>正文</p>"
                               "</body></html>" % title}}}


class ShapeTest(unittest.TestCase):
    def test_split_name(self):
        self.assertEqual(portal.split_name("document/cn/guide/x-0000001"),
                         ("guide", "x-0000001"))
        self.assertEqual(portal.split_name("document/cn/guide"), (None, None))
        self.assertEqual(portal.split_name(""), (None, None))

    def test_to_item_markdown_and_source_marker(self):
        it = portal.to_item("document/cn/guide/x", ok_response())
        self.assertEqual(it["name"], "document/cn/guide/x")
        self.assertEqual(it["source"], "portal")
        self.assertEqual(it["title"], "主题")
        self.assertIn("正文", it["content"])
        self.assertNotIn("<html", it["content"])          # 必须已转 Markdown
        # uri 取接口回的 catalogName/fileName（不取 name 的 slug），与官方地址一致
        self.assertTrue(it["uri"].endswith("/guide/topic-0000001234567890"), it["uri"])

    def test_to_item_accepts_plain_string_content(self):
        r = ok_response()
        r["value"]["content"] = "<html><body><p>纯字符串</p></body></html>"
        self.assertIn("纯字符串", portal.to_item("document/cn/guide/x", r)["content"])

    def test_business_code_is_transient_not_absent(self):
        with self.assertRaises(portal.PortalTransient):
            portal.to_item("document/cn/guide/x",
                           {"code": 92520001, "message": "restricted"})

    def test_not_found_code_is_classified_absent(self):
        """not-found 单独分类：可停放，但仍是 transient 的子类（不是结论）。"""
        with self.assertRaises(portal.PortalAbsent) as cm:
            portal.to_item("document/cn/guide/x",
                           {"code": 92531031, "message": "document not found"})
        self.assertIsInstance(cm.exception, portal.PortalTransient)

    def test_absent_is_reasked_exactly_once(self):
        """负载下 not-found 会假报，所以重问一次；但不能像真降级那样退避 3 次。"""
        calls = []
        orig_req, orig_sleep = portal._request, portal.ABSENT_SLEEP
        try:
            def notfound(c, s):
                calls.append((c, s))
                return {"code": 92531031, "message": "document not found"}
            portal._request = notfound
            portal.ABSENT_SLEEP = 0
            with self.assertRaises(portal.PortalAbsent):
                portal.fetch_item("document/cn/guide/x")
        finally:
            portal._request, portal.ABSENT_SLEEP = orig_req, orig_sleep
        self.assertEqual(len(calls), 2, "not-found 应只重问一次")

    def test_empty_content_is_definitively_absent(self):
        r = ok_response()
        r["value"]["content"] = {"type": "html", "content": "   "}
        self.assertIsNone(portal.to_item("document/cn/guide/x", r))

    def test_bad_json_shape_is_transient(self):
        orig = portal._request
        try:
            portal._request = lambda c, s: "not-a-dict"
            with self.assertRaises(portal.PortalTransient):
                portal.fetch_item("document/cn/guide/x")
        finally:
            portal._request = orig


class ConfirmTest(unittest.TestCase):
    def test_absent_never_confirms_deletion(self):
        """not-found 在负载下会假报：绝不能当成「官方已删除」的依据。"""
        orig = portal.fetch_item
        try:
            def absent(name):
                raise portal.PortalAbsent("code=92531031")
            portal.fetch_item = absent
            self.assertFalse(portal.confirm_absent("document/cn/guide/x"))
        finally:
            portal.fetch_item = orig

    def test_transient_never_confirms_deletion(self):
        orig = portal.fetch_item
        try:
            def boom(name):
                raise portal.PortalTransient("http 503")
            portal.fetch_item = boom
            self.assertFalse(portal.confirm_absent("document/cn/guide/x"))
        finally:
            portal.fetch_item = orig

    def test_explicit_empty_body_confirms(self):
        orig = portal.fetch_item
        try:
            portal.fetch_item = lambda name: None
            self.assertTrue(portal.confirm_absent("document/cn/guide/x"))
        finally:
            portal.fetch_item = orig


class EmptyMCP:
    """结构合法但什么都不返回的知识 MCP 响应（=官方不供给/已消失）。"""

    def __init__(self):
        pass

    def call_tool(self, name, args):
        return {"result": {"content": [{"text": json.dumps(
            {"code": 0, "message": "success", "resultList": []})}]}}


class PortalFillTest(unittest.TestCase):
    """增量与门户路的联动：补齐、不重查、不误删。"""

    NAME = "document/cn/guide/topic-0000001234567890"

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self._orig = (crawl.OUT, incremental.OUT, incremental.INC_STATE,
                      incremental.CRAWL_STATE, crawl.QUERIES, crawl.MCP,
                      crawl.acquire_lock, crawl.release_lock, catalog.names,
                      portal.fetch_item)
        crawl.OUT = incremental.OUT = os.path.join(self.tmp.name, "corpus")
        os.makedirs(os.path.join(crawl.OUT, "guide"))   # 分类先存在 = 已采纳进范围
        crawl._SCOPE_CACHE = None
        incremental.INC_STATE = os.path.join(self.tmp.name, "inc.json")
        incremental.CRAWL_STATE = os.path.join(self.tmp.name, "crawl.json")
        with open(incremental.CRAWL_STATE, "w", encoding="utf-8") as f:
            json.dump({"discovered": [], "fetched": [], "failed": []}, f)
        crawl.QUERIES = []
        crawl.MCP = EmptyMCP
        crawl.acquire_lock = lambda: None
        crawl.release_lock = lambda: None
        catalog.names = lambda: set()
        portal.fetch_item = lambda name: portal.to_item(name, ok_response())

    def tearDown(self):
        (crawl.OUT, incremental.OUT, incremental.INC_STATE,
         incremental.CRAWL_STATE, crawl.QUERIES, crawl.MCP,
         crawl.acquire_lock, crawl.release_lock, catalog.names,
         portal.fetch_item) = self._orig
        crawl._SCOPE_CACHE = None
        self.tmp.cleanup()

    def _state(self):
        with open(incremental.INC_STATE, encoding="utf-8") as f:
            return json.load(f)

    def _seed(self, disc, fetched, portal_names=(), hashes=None):
        with open(incremental.INC_STATE, "w", encoding="utf-8") as f:
            json.dump({"discovered": sorted(disc), "fetched": sorted(fetched),
                       "hashes": hashes or {}, "deleted": [],
                       "unreachable": [], "portal": sorted(portal_names),
                       "inventoryBuiltAt": ""}, f)

    def _path(self, name=None):
        cat, fn = crawl.doc_relpath(name or self.NAME)
        return os.path.join(crawl.OUT, cat, fn)

    def test_pending_unservable_doc_is_filled_via_portal(self):
        self._seed(disc=[self.NAME], fetched=[])
        incremental._run(no_recheck=True, skip_delete=False, limit=0)
        p = self._path()
        self.assertTrue(os.path.exists(p), "门户路没把不供给文档补进语料")
        with open(p, encoding="utf-8") as fh:
            head = fh.read(400)
        self.assertIn("source: portal", head)
        s = self._state()
        self.assertEqual(s["portal"], [self.NAME])
        self.assertEqual(s["unreachable"], [], "入库后仍留在不可达名单")
        self.assertIn(self.NAME, s["fetched"])
        # 指纹与磁盘同源：门户转换出的 Markdown 再算一次必须等于状态里的值
        self.assertEqual(s["hashes"][self.NAME], incremental.disk_hash(self.NAME))

    def test_portal_docs_are_excluded_from_mcp_recheck(self):
        """已入库的门户文档不得进知识 MCP 重查队列（它们永不被返回 -> 会被判删）。"""
        p = self._path()
        crawl.write_doc(portal.to_item(self.NAME, ok_response()))
        self._seed(disc=[self.NAME], fetched=[self.NAME], portal_names=[self.NAME],
                   hashes={self.NAME: incremental.disk_hash(self.NAME)})
        incremental._run(no_recheck=False, skip_delete=False, limit=0)
        self.assertTrue(os.path.exists(p), "门户文档被增量误删")
        s = self._state()
        self.assertEqual(s["deleted"], [])
        self.assertIn(self.NAME, s["fetched"])
        self.assertEqual(s["portal"], [self.NAME])

    def test_portal_doc_removal_is_confirmed_via_portal_not_mcp(self):
        """清单说它消失时，确认手段必须是门户；门户不确定（transient）就保留。"""
        crawl.write_doc(portal.to_item(self.NAME, ok_response()))
        self._seed(disc=[self.NAME], fetched=[self.NAME], portal_names=[self.NAME],
                   hashes={self.NAME: incremental.disk_hash(self.NAME)})
        other = "document/cn/guide/other"
        catalog.names = lambda: {other}          # 清单里没有 NAME => NAME 进删除候选

        def uncertain(name):
            raise portal.PortalTransient("http 503")
        portal.fetch_item = uncertain            # 门户不确定 => 绝不判删
        incremental._run(no_recheck=False, skip_delete=False, limit=0)
        self.assertTrue(os.path.exists(self._path()), "门户不确定却仍删除了文档")

    def test_state_rebuild_from_disk_markers(self):
        """状态里丢了 portal 名单时，从磁盘 source: portal 标记自愈重建。"""
        crawl.write_doc(portal.to_item(self.NAME, ok_response()))
        found = incremental.portal_names_from_disk()
        self.assertEqual(found, {self.NAME})

    def test_not_found_names_are_parked_not_retried_forever(self):
        """not-found 的名字进 portalAbsent：不写文件、不计为不确定、不反复重问。"""
        self._seed(disc=[self.NAME], fetched=[])
        orig = portal.fetch_item
        try:
            def absent(name):
                raise portal.PortalAbsent("code=92531031")
            portal.fetch_item = absent
            incremental._run(no_recheck=True, skip_delete=False, limit=0)
        finally:
            portal.fetch_item = orig
        self.assertFalse(os.path.exists(self._path()))
        s = self._state()
        self.assertEqual(s["portalAbsent"], [self.NAME])
        self.assertEqual(s["portal"], [])
        # 停放后下一轮不再排队（除非清单换代释放）
        self._seed(disc=[self.NAME], fetched=[], portal_names=(),
                   hashes={})
        with open(incremental.INC_STATE, "r", encoding="utf-8") as f:
            st = json.load(f)
        st["portalAbsent"] = [self.NAME]
        st["unreachable"] = [self.NAME]
        st["inventoryBuiltAt"] = catalog.inventory_built_at() or "x"   # 不让释放逻辑触发
        with open(incremental.INC_STATE, "w", encoding="utf-8") as f:
            json.dump(st, f)
        called = []
        try:
            def spy(name):
                called.append(name)
                raise portal.PortalTransient("http 503")
            portal.fetch_item = spy
            incremental._run(no_recheck=True, skip_delete=False, limit=0)
        finally:
            portal.fetch_item = orig
        self.assertEqual(called, [], "已停放的 not-found 名字又被重问了")


if __name__ == "__main__":
    unittest.main()
