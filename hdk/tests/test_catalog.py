#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""catalog.py 离线单测：树解析、名称拼接、受限分类口径（不打网络）。"""
import os
import sys
import tempfile
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
        names = catalog.tree_names(marked)
        self.assertEqual(names, {
            "document/cn/harmonyos-guides/application-dev-guide",
            "document/cn/harmonyos-guides/development-fundamentals",
            "document/cn/harmonyos-guides/start-overview",
        })

    def test_container_without_relate_document_ignored(self):
        marked = make_tree()
        catalog._mark(marked[0], "harmonyos-guides")
        names = catalog.tree_names(marked)
        self.assertNotIn("document/cn/harmonyos-guides/", names)

    def test_fetch_category_error_shape(self):
        names, err = catalog.fetch_category("no-such-catalog-xyz")
        self.assertEqual(names, set())
        self.assertTrue(err)


class CategoriesTest(unittest.TestCase):
    def test_restricted_excluded_from_categories(self):
        with tempfile.TemporaryDirectory() as tmp:
            for d in ("harmonyos-guides", "cangjie-practices",
                      "cangjie-references"):
                os.makedirs(os.path.join(tmp, d))
            orig = catalog.OUT
            catalog.OUT = tmp
            try:
                self.assertEqual(catalog.categories(), ["harmonyos-guides"])
            finally:
                catalog.OUT = orig


class SelectCurrentTest(unittest.TestCase):
    def test_largest_suffix_wins(self):
        names = ["document/cn/app/x-0000001146511331",
                 "document/cn/app/x-0000002235826560"]
        self.assertEqual(catalog.select_current(names),
                         "document/cn/app/x-0000002235826560")

    def test_unsuffixed_canonical_wins(self):
        names = ["document/cn/app/x-0000002235826560",
                 "document/cn/app/x"]
        self.assertEqual(catalog.select_current(names), "document/cn/app/x")

    def test_stale_variant_groups_shape(self):
        groups = catalog.stale_variant_groups()
        # 清理后本机语料可能已无同词干多版组；有则校验形态
        for stem, members in groups.items():
            self.assertGreaterEqual(len(members), 2)
            for n in members:
                self.assertTrue(n.startswith(stem))


if __name__ == "__main__":
    unittest.main()
