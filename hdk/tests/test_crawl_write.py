#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""crawl.write_doc 落盘契约单测（hermetic：临时语料根，不写真实仓库）。

锁定的三条不变量：
  1. 仓颉命名空间（cangjie-*）归浏览器路所有，匿名路一律不写盘——否则同一 name
     会出现两个文件（实测 1 例 cangjie-guides/cj-notice，两份内容还不同步）。
  2. 内容未变不落盘——上游排版零抖动时不得反复重写已跟踪语料（实测单轮 4977 件漂移）。
  3. frontmatter 值必须清洗不可打印字符——否则磁盘指纹与 API 指纹永远对不上，
     该文档每轮增量都被误判为 updated 无限重写。
"""
import os
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import crawl          # noqa: E402
import incremental    # noqa: E402


class WriteDocTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.orig = (crawl.OUT, incremental.OUT)
        # incremental 在 import 时复制了 crawl.OUT，必须一起改指，否则 disk_hash 会去读真实语料
        crawl.OUT = incremental.OUT = os.path.join(self.tmp.name, "harmonyos_docs")
        os.makedirs(os.path.join(crawl.OUT, "harmonyos-guides"), exist_ok=True)
        crawl._SCOPE_CACHE = None        # 改指语料根后必须重置采集范围缓存
        self.item = {"name": "document/cn/harmonyos-guides/start-with-ets-stage",
                     "title": "开发基础知识",
                     "uri": "https://developer.huawei.com/consumer/cn/doc/x",
                     "content": "# 开发基础知识\n\n正文。\n"}

    def tearDown(self):
        crawl.OUT, incremental.OUT = self.orig
        crawl._SCOPE_CACHE = None
        self.tmp.cleanup()

    def _path(self, name=None):
        cat, fname = crawl.doc_relpath(name or self.item["name"])
        return os.path.join(crawl.OUT, cat, fname)

    def test_writes_and_returns_path(self):
        fp = crawl.write_doc(self.item)
        self.assertEqual(fp, self._path())
        self.assertTrue(os.path.exists(fp))
        with open(fp, encoding="utf-8") as f:
            self.assertIn("name: document/cn/harmonyos-guides/start-with-ets-stage",
                          f.read())

    def test_missing_name_is_refused(self):
        self.assertIsNone(crawl.write_doc({"title": "无 name"}))

    def test_cangjie_namespace_is_refused(self):
        for n in ("document/cn/cangjie-guides/cj-notice",
                  "cangjie-references/api-1",
                  "document/cn/cangjie-faqs/faq-1"):
            self.assertIsNone(crawl.write_doc({"name": n, "title": "t", "content": "c"}), n)
        # 非仓颉分类不受影响
        self.assertTrue(crawl.write_doc({"name": "document/cn/harmonyos-guides/x",
                                         "title": "t", "content": "c"}))

    def test_unchanged_content_does_not_touch_disk(self):
        crawl.write_doc(self.item)
        mtime = os.stat(self._path()).st_mtime_ns
        os.utime(self._path(), ns=(mtime, mtime - 10 ** 7))   # 假装是很久以前写的
        stale = os.stat(self._path()).st_mtime_ns
        self.assertEqual(crawl.write_doc(self.item), self._path())
        self.assertEqual(os.stat(self._path()).st_mtime_ns, stale,
                         "内容未变仍重写了文件")
        # 内容真的变了就必须重写
        changed = dict(self.item, content="# 开发基础知识\n\n新正文。\n")
        crawl.write_doc(changed)
        self.assertNotEqual(os.stat(self._path()).st_mtime_ns, stale)

    def test_dirty_frontmatter_keeps_hashes_equal(self):
        """标题带换行/制表符时，磁盘指纹仍等于 API 指纹（否则每轮增量都判为已修改）。

        两边必须同源：落盘前走 crawl.frontmatter_value 清洗，算指纹时也走同一个函数。
        """
        for title in ("开发基础知识\r\n续行\t制表",
                      "HUAWEI Health数据平台，科学助力减脂塑形目标达\u2060成",   # 实测 4 篇的形状
                      "11.\u200b\u200b 个人信息保护合规性检测服务介绍",
                      "开发基础知识", None, ""):
            item = dict(self.item, name="document/cn/harmonyos-guides/t-%s"
                        % ("none" if title is None else abs(hash(title)) % 1000),
                        title=title if title is not None else "")
            crawl.write_doc(item)
            self.assertEqual(incremental.disk_hash(item["name"]),
                             incremental.doc_hash(item), title)

    def test_empty_content_keeps_hashes_equal(self):
        """空正文落盘为 "(empty)"，指纹也必须按落盘形状计算。"""
        item = dict(self.item, name="document/cn/harmonyos-guides/empty-one",
                    content="")
        crawl.write_doc(item)
        self.assertEqual(incremental.disk_hash(item["name"]),
                         incremental.doc_hash(item))

    def test_unadopted_category_is_refused_and_not_created(self):
        """未采纳的分类不得由发现通路静默建目录入库（扩采必须是显式决策）。"""
        self.assertIsNone(crawl.write_doc({"name": "document/cn/health-References/x",
                                           "title": "t", "content": "c"}))
        self.assertFalse(os.path.exists(os.path.join(crawl.OUT, "health-References")))
        self.assertIn("harmonyos-guides", crawl.scope_categories())

    def test_version_snapshot_names_are_rejected_at_the_entry(self):
        """norm_docname 与落盘同一口径：旧版快照在入口即被拒，不会进入发现集。"""
        for n in ("document/cn/harmonyos-guides-V14/push-faq-2-V14",
                  "document/cn/harmonyos-references-V5/js-apis-http",
                  "document/cn/harmonyos-guides/xxx-V2"):
            self.assertIsNone(crawl.norm_docname(n), n)
            self.assertTrue(crawl.is_version_snapshot(n), n)


if __name__ == "__main__":
    unittest.main()
