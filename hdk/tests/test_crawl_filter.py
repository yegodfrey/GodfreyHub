import sys
import unittest
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]


class VersionSnapshotFilterTests(unittest.TestCase):
    """旧版快照过滤：分类段带 -V<数字> 的 URL/文档名一律不得进入抓取队列。

    华为文档站按 API 版本在线保留整套历史文档（harmonyos-guides-V14 等），
    正文链接与搜索结果都会引到它们；此前 BFS 会把整套旧版抓回语料库
    （约占语料三分之一）。norm_docname 是 crawl.py 与 incremental.py
    共同的唯一入口，在此拒绝即可覆盖种子/搜索/正文链接/状态继承全路径。
    """

    @classmethod
    def setUpClass(cls):
        sys.path.insert(0, str(PROJECT_ROOT))
        import crawl
        cls.crawl = crawl

    def test_current_names_pass(self):
        cases = [
            "document/cn/harmonyos-guides/uiability-lifecycle",
            "document/cn/harmonyos-references/js-apis-http",
            "document/cn/cangjie-guides/xxx",
        ]
        for n in cases:
            self.assertEqual(self.crawl.norm_docname(n), n, n)

    def test_versioned_category_rejected(self):
        cases = [
            "document/cn/harmonyos-guides-V14/push-faq-2-V14",
            "document/cn/harmonyos-references-V5/js-apis-http",
            "document/cn/design-guides-V1/overview",
            "document/cn/atomic-guides-V13/xxx",
            # 版本段在第二段的三段式路径（HMS 文档）
            "document/cn/development/HMSCore-Guides-V5/faq-0000001050042183-V5",
        ]
        for n in cases:
            self.assertIsNone(self.crawl.norm_docname(n), n)
            self.assertTrue(self.crawl.is_version_snapshot(n), n)

    def test_versioned_url_form_rejected(self):
        # to_parent 是正文链接发现的入口，必须与文档名同一判定
        url = "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V14/push-faq-2-V14"
        self.assertIsNone(self.crawl.to_parent(url))

    def test_catalog_version_query_stripped_not_rejected(self):
        # ?catalogVersion=V13 只是链接形态差异，去掉 query 后是现行版文档
        n = self.crawl.to_parent(
            "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-faq?catalogVersion=V13")
        self.assertEqual(n, "document/cn/harmonyos-guides/push-faq")

    def test_v_slug_rejected_any_segment(self):
        # 华为旧版 URL 的分类段与 slug 段成对携带版本后缀；全语料扫描确认现行
        # 文档没有任何段以 -V<数字> 结尾，因此按"任一段"判定不会误杀现行文档
        n = "document/cn/harmonyos-guides/xxx-V2"
        self.assertIsNone(self.crawl.norm_docname(n), n)
        self.assertTrue(self.crawl.is_version_snapshot(n), n)

    def test_load_state_purges_legacy_snapshots(self):
        import json
        import tempfile
        state = {
            "discovered": ["document/cn/harmonyos-guides/push-faq",
                           "document/cn/harmonyos-guides-V14/push-faq-2-V14"],
            "fetched": ["document/cn/harmonyos-references-V5/js-apis-http",
                        "document/cn/harmonyos-references/js-apis-http"],
            "failed": [],
        }
        with tempfile.TemporaryDirectory() as td:
            old = self.crawl.STATE
            try:
                self.crawl.STATE = str(Path(td) / "crawl_state.json")
                with open(self.crawl.STATE, "w", encoding="utf-8") as f:
                    json.dump(state, f)
                s = self.crawl.load_state()
            finally:
                self.crawl.STATE = old
        self.assertEqual(s["discovered"], ["document/cn/harmonyos-guides/push-faq"])
        self.assertEqual(s["fetched"], ["document/cn/harmonyos-references/js-apis-http"])


if __name__ == "__main__":
    unittest.main()
