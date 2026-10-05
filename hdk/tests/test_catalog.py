#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""catalog.py 离线单测：官方分类全集解析、树遍历、清单新鲜度门、对账分桶、逐字重复扫描。

全部用临时目录 + 伪造响应，不打网络，也不读任何真实语料/状态文件。
"""
import json
import os
import sys
import tempfile
import time
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import catalog  # noqa: E402


def make_tree():
    return [{
        "nodeId": "root", "nodeName": "应用开发", "relateDocument": "",
        "children": [
            {"nodeId": "a", "nodeName": "应用开发概述", "isLeaf": True,
             "relateDocument": "application-dev-guide", "children": []},
            {"nodeId": "b", "nodeName": "开发基础", "isLeaf": False,
             "relateDocument": "development-fundamentals", "children": [
                 {"nodeId": "b1", "nodeName": "准备", "isLeaf": True,
                  "relateDocument": "start-overview", "children": []}]},
            {"nodeId": "c", "nodeName": "纯目录节点", "isLeaf": False,
             "relateDocument": "", "children": []},
        ]}]


class TreeNamesTest(unittest.TestCase):
    def test_mark_and_collect(self):
        marked = make_tree()
        catalog._mark(marked[0], "harmonyos-guides")
        self.assertEqual(catalog.tree_names(marked), {
            "document/cn/harmonyos-guides/application-dev-guide",
            "document/cn/harmonyos-guides/development-fundamentals",
            "document/cn/harmonyos-guides/start-overview",
        })

    def test_container_without_relate_document_ignored(self):
        marked = make_tree()
        catalog._mark(marked[0], "harmonyos-guides")
        self.assertNotIn("document/cn/harmonyos-guides/",
                         catalog.tree_names(marked))

    def test_fetch_category_error_shape(self):
        """分类不可枚举时返回 (空集, 原因)，绝不静默当成「该分类没有文档」。"""
        orig = catalog._tree
        try:
            catalog._tree = lambda cat, timeout=30: (
                False, "restricted catalog, need login to view")
            names, err = catalog.fetch_category("cangjie-references")
        finally:
            catalog._tree = orig
        self.assertEqual(names, set())
        self.assertTrue(err)


class OfficialCategoriesTest(unittest.TestCase):
    """官方分类全集：去重、剔除 -V<数字> 历史快照、异常形状必须抛错。"""

    def test_dedup_and_versioned_excluded(self):
        orig = catalog._post
        try:
            catalog._post = lambda url, body, timeout=30: {
                "code": "00000",
                "catalogList": [
                    {"catalogName": "harmonyos-guides"},
                    {"catalogName": "harmonyos-guides"},          # 官方返回含重复
                    {"catalogName": "harmonyos-guides-V14"},      # 历史快照 => 丢弃
                    {"catalogName": "doc-references-V2"},
                    {"catalogName": "HMSCore-Guides"},
                    {"catalogName": ""},
                ]}
            self.assertEqual(catalog.official_categories(),
                             ["HMSCore-Guides", "harmonyos-guides"])
        finally:
            catalog._post = orig

    def test_bad_shape_raises(self):
        orig = catalog._post
        try:
            catalog._post = lambda url, body, timeout=30: {"code": "92511002"}
            with self.assertRaises(RuntimeError):
                catalog.official_categories()
        finally:
            catalog._post = orig


class ScopeTest(unittest.TestCase):
    def test_pseudo_dirs_and_restricted_excluded(self):
        with tempfile.TemporaryDirectory() as tmp:
            for d in ("harmonyos-guides", "cangjie-practices", ".cache", "_deleted"):
                os.makedirs(os.path.join(tmp, d))
            orig = catalog.OUT
            try:
                catalog.OUT = tmp
                self.assertEqual(catalog.scope_categories(), ["harmonyos-guides"])
            finally:
                catalog.OUT = orig


class InventoryAgeTest(unittest.TestCase):
    def with_inventory(self, payload):
        """把 INVENTORY 指到临时文件并写入 payload，返回该临时路径。"""
        fd, p = tempfile.mkstemp(suffix=".json")
        os.close(fd)
        self.addCleanup(os.remove, p)
        orig = catalog.INVENTORY
        catalog.INVENTORY = p
        self.addCleanup(setattr, catalog, "INVENTORY", orig)
        with open(p, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False)
        return p

    def test_missing_inventory_reports_none_and_warns(self):
        orig = catalog.INVENTORY
        catalog.INVENTORY = os.path.join(tempfile.gettempdir(),
                                         "hdk-no-such-inventory.json")
        self.addCleanup(setattr, catalog, "INVENTORY", orig)
        self.assertIsNone(catalog.inventory_age_days())
        self.assertIn("无目录清单", catalog.check_age())

    def test_stale_inventory_warns(self):
        old = time.strftime("%Y-%m-%dT%H:%M:%S",
                            time.localtime(time.time() - 14 * 86400))
        self.with_inventory({"builtAt": old, "names": []})
        self.assertGreater(catalog.inventory_age_days(), 13)
        self.assertIn(str(catalog.INVENTORY_MAX_AGE_DAYS), catalog.check_age())

    def test_fresh_inventory_is_silent(self):
        now = time.strftime("%Y-%m-%dT%H:%M:%S")
        self.with_inventory({"builtAt": now, "names": ["document/cn/a/b"]})
        self.assertIsNone(catalog.check_age())
        self.assertEqual(catalog.names(), {"document/cn/a/b"})


def write_doc(root, rel, name, title, body):
    p = os.path.join(root, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w", encoding="utf-8") as f:
        f.write("---\nname: %s\ntitle: %s\nuri: u\n---\n\n%s" % (name, title, body))
    return p


class CorpusScanTest(unittest.TestCase):
    """逐字重复扫描与对账分桶：合成小语料，验证「同文不删只报」与分桶口径。"""

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.corpus = os.path.join(self.tmp.name, "harmonyos_docs")
        os.makedirs(self.corpus)
        self._orig = (catalog.OUT, catalog.INVENTORY)
        catalog.OUT = self.corpus
        catalog.INVENTORY = os.path.join(self.tmp.name, "catalog_inventory.json")
        # 清单里两篇：a 已入库、b 未入库
        with open(catalog.INVENTORY, "w", encoding="utf-8") as f:
            json.dump({"builtAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
                       "names": ["document/cn/guide/a", "document/cn/guide/b"],
                       "unadoptedCategories": [{"category": "HiCar-Guides", "docs": 369}]},
                      f, ensure_ascii=False)
        write_doc(self.corpus, "guide/a.md", "document/cn/guide/a", "同文页", "正文 X")
        # 与 a 逐字相同、不同 name（官方按 Kit 复制模板的形状）
        write_doc(self.corpus, "guide/a-copy.md", "document/cn/guide/a-copy", "同文页", "正文 X")
        # 同词干新旧两版，但内容不同 => 是不同文档，不可当成旧版删掉
        write_doc(self.corpus, "guide/overview-0000001.md",
                  "document/cn/guide/overview-0000001", "Overview", "广告请求监听")
        write_doc(self.corpus, "guide/overview-0000002.md",
                  "document/cn/guide/overview-0000002", "Overview", "Consent SDK 枚举")
        # 浏览器路 name 缺 document/cn/ 前缀
        write_doc(self.corpus, "cangjie-guides/n.md", "cangjie-guides/notice", "须知", "正文")
        self.addCleanup(lambda: (setattr(catalog, "OUT", self._orig[0]),
                                 setattr(catalog, "INVENTORY", self._orig[1]),
                                 self.tmp.cleanup()))

    def test_same_stem_different_content_is_not_a_duplicate(self):
        """purge-stale 的假前提回归护栏：同词干但内容不同 = 不同 Kit 的文档，不得判重。"""
        dup, collide = catalog.scan_duplicates()
        names = {n for v in dup.values() for n in v}
        self.assertNotIn("document/cn/guide/overview-0000002", names)
        self.assertNotIn("document/cn/guide/overview-0000001", names)
        self.assertEqual(collide, {}, "同一 name 不得有两个文件")

    def test_byte_identical_copy_is_reported(self):
        dup, _ = catalog.scan_duplicates()
        groups = [v for v in dup.values()
                  if "document/cn/guide/a" in v and "document/cn/guide/a-copy" in v]
        self.assertEqual(len(groups), 1)
        self.assertEqual(sorted(groups[0]),
                         ["document/cn/guide/a", "document/cn/guide/a-copy"])

    def test_diff_buckets_splits_unservable_and_browser_owned(self):
        import crawl
        import incremental
        # a 被知识 MCP 永久拉黑 => 归入「不供给」，不算真漏
        crawl_state = os.path.join(self.tmp.name, "crawl_state.json")
        with open(crawl_state, "w", encoding="utf-8") as f:
            json.dump({"discovered": [], "fetched": [],
                       "failed": ["document/cn/guide/b"]}, f)
        inc_state = os.path.join(self.tmp.name, "incremental_state.json")
        with open(inc_state, "w", encoding="utf-8") as f:
            json.dump({"discovered": [], "fetched": [], "hashes": {},
                       "deleted": [], "unreachable": []}, f)
        orig = (crawl.STATE, incremental.INC_STATE)
        try:
            crawl.STATE = crawl_state
            incremental.INC_STATE = inc_state
            b = catalog.diff_buckets()
        finally:
            crawl.STATE, incremental.INC_STATE = orig
        self.assertEqual(b["missing"], 1)                 # 只有 b
        self.assertEqual(b["unservable"], 1)              # b 属"不供给"桶
        self.assertEqual(b["true_missing"], 0)
        self.assertEqual(b["browser_owned"], 1)           # cangjie-guides/notice
        self.assertEqual(b["extra"], 4)                   # a-copy + 两个 overview + 仓颉
        self.assertEqual(b["true_extra"], 3)              # 同文副本 + 两个同词干异文页
        self.assertEqual(b["unadopted_categories"], 1)
        self.assertEqual(b["unadopted_docs"], 369)

    def test_disk_names_are_normalized_for_comparison(self):
        d = catalog.disk_names()
        self.assertIn("cangjie-guides/notice", d)
        missing, extra = catalog.diff(d)
        # 归一后仓颉 name 也算清单外，但不算真多余（分桶已验证）
        self.assertIn("document/cn/cangjie-guides/notice", extra)


class CleanExtraTest(unittest.TestCase):
    """clean-extra 三态判删：absent 物理删 / present 保留（清单枚举洞）/ uncertain 保留。

    全程临时目录 + 注入 fetch，不打网络。"""

    def setUp(self):
        import portal
        self.portal = portal
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.orig_out, self.orig_names = catalog.OUT, catalog.names
        catalog.OUT = self.tmp.name
        # 清单不含 aaa/bbb/ccc —— 三者才是「盘上有、清单无」的真多余候选
        catalog.names = lambda: {"document/cn/guides/other"}
        self.addCleanup(setattr, catalog, "OUT", self.orig_out)
        self.addCleanup(setattr, catalog, "names", self.orig_names)
        self._write("guides", "a.md", "document/cn/guides/aaa")
        self._write("guides", "b.md", "document/cn/guides/bbb")
        self._write("guides", "c.md", "document/cn/guides/ccc")
        # 缺 document/cn/ 前缀的 name：归一后命中清单 → 不进候选
        self._write("guides", "d.md", "guides/bbb")
        # 浏览器路仓颉语料：清单外但不算真多余
        self._write("cangjie-guides", "n.md", "document/cn/cangjie-guides/notice")

    def _write(self, sub, fn, name):
        d = os.path.join(self.tmp.name, sub)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, fn), "w", encoding="utf-8") as f:
            f.write("---\nname: %s\ntitle: t\ncategory: guides\n---\n\nbody\n" % name)

    def _p(self, sub, fn):
        return os.path.join(self.tmp.name, sub, fn)

    def test_three_verdicts(self):
        def fetch(name):
            if name.endswith("/aaa"):
                return None                                  # 官方明确无正文
            if name.endswith("/bbb"):
                return {"value": {"content": {}}}            # 官方仍在
            raise self.portal.PortalTransient("throttled")   # 不确定

        r = catalog.clean_extra(dry_run=True, fetch=fetch, sleep=0)
        self.assertEqual(r["removed"], ["document/cn/guides/aaa"])
        self.assertTrue(os.path.exists(self._p("guides", "a.md")), "dry run 不得落删")
        self.assertEqual(r["present"], ["document/cn/guides/bbb"])
        self.assertEqual(r["uncertain"], ["document/cn/guides/ccc"])

        r = catalog.clean_extra(dry_run=False, fetch=fetch, sleep=0)
        self.assertEqual(r["removed"], ["document/cn/guides/aaa"])
        self.assertFalse(os.path.exists(self._p("guides", "a.md")))
        self.assertTrue(os.path.exists(self._p("guides", "b.md")))
        self.assertTrue(os.path.exists(self._p("guides", "c.md")))
        self.assertTrue(os.path.exists(self._p("guides", "d.md")),
                        "归一后命中清单的 name 不得进候选")
        self.assertTrue(os.path.exists(self._p("cangjie-guides", "n.md")),
                        "浏览器路仓颉语料不算真多余")

    def test_fetch_exception_is_uncertain_never_deleted(self):
        def fetch(name):
            raise RuntimeError("boom")

        r = catalog.clean_extra(dry_run=False, fetch=fetch, sleep=0)
        self.assertEqual(r["removed"], [])
        self.assertEqual(r["uncertain"], ["document/cn/guides/aaa",
                                          "document/cn/guides/bbb",
                                          "document/cn/guides/ccc"])
        self.assertTrue(os.path.exists(self._p("guides", "a.md")))


if __name__ == "__main__":
    unittest.main()
