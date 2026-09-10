import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]


class SegmentPipelineTests(unittest.TestCase):
    """统一分词管线（indexer.segment_text）单测。

    与 Node 查询端 src/core/hdk.ts 的 segmentQuery 语义一致（同一词典/停用词/
    HMM=False），tests/hdk-segment.test.mjs 另有跨引擎一致性回归测试。
    """

    @classmethod
    def setUpClass(cls):
        sys.path.insert(0, str(PROJECT_ROOT))
        from indexer import segment_text

        cls._segment = staticmethod(segment_text)

    def test_userdict_terms_are_kept_whole(self):
        # 用户词典词不得被拆散
        for text, expect in [
            ("元服务碰一碰", ["元服务", "碰一碰"]),
            ("软总线", ["软总线"]),
            ("自由流转", ["自由流转"]),
            ("应用沙箱路径", ["应用", "沙箱路径"]),
            ("状态管理组件", ["状态管理", "组件"]),
            ("仓颉语言", ["仓颉语言"]),
            ("扫码卡顿丢帧", ["扫码", "卡顿", "丢帧"]),
            ("冻屏白屏闪退", ["冻屏", "白屏", "闪退"]),
            ("首帧长列表懒加载预加载", ["首帧", "长列表", "懒加载", "预加载"]),
        ]:
            self.assertEqual(self._segment(text, search=False), " ".join(expect), text)

    def test_english_and_case_are_preserved(self):
        tokens = self._segment("getStringSync调用EntryAbility", search=False).split(" ")
        self.assertEqual(tokens[0], "getStringSync")  # 英文串原样且保留大小写
        self.assertIn("调用", tokens)
        self.assertIn("EntryAbility", tokens)

    def test_camel_split_keeps_original_and_parts(self):
        tokens = self._segment("getStringSync API12", search=True).split(" ")
        self.assertIn("getStringSync", tokens)   # 原词保留
        self.assertIn("get", tokens)             # 驼峰拆词
        self.assertIn("String", tokens)
        self.assertIn("Sync", tokens)
        self.assertIn("API12", tokens)
        self.assertIn("API", tokens)
        self.assertIn("12", tokens)

    def test_stopwords_and_symbols_and_single_digits_are_filtered(self):
        tokens = self._segment("状态管理的使用。", search=False).split(" ")
        self.assertNotIn("的", tokens)      # 停用词
        self.assertNotIn("使用", tokens)    # 停用词（虚化动词）
        self.assertNotIn("。", tokens)      # 纯符号
        self.assertNotIn("1", self._segment("1 状态", search=False).split(" "))  # 纯数字单字
        self.assertIn("状态管理", tokens)   # 实词（用户词典整词）保留

    def test_index_search_mode_is_superset_of_query_mode(self):
        # cut_for_search 输出 ⊇ 精确 cut：索引端词元必覆盖查询端切出的所有词
        idx = set(self._segment("数据管理服务开发指南", search=True).split(" "))
        qry = set(self._segment("数据管理服务开发指南", search=False).split(" "))
        self.assertTrue(qry.issubset(idx), (qry - idx))

    def test_query_mode_dedups(self):
        tokens = self._segment("状态管理 状态管理", search=False).split(" ")
        self.assertEqual(len(tokens), len(set(tokens)))


class IndexerSchemaTests(unittest.TestCase):
    """tokenizer 版本检测：旧库触发全量重建。"""

    @classmethod
    def setUpClass(cls):
        sys.path.insert(0, str(PROJECT_ROOT))

    def test_rebuild_on_schema_mismatch(self):
        result = subprocess.run(
            [sys.executable, "-c",
             "import sys; sys.path.insert(0, '.'); "
             "import indexer; "
             "print(indexer.SCHEMA_TOKENIZER)"],
            cwd=PROJECT_ROOT, capture_output=True, text=True,
        )
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout.strip(), "3")

    def test_dict_signature_stable_and_content_sensitive(self):
        import indexer

        self.assertEqual(indexer._dict_signature(), indexer._dict_signature())
        orig = (indexer.DICT_FILE, indexer.STOPWORDS_FILE)
        try:
            with tempfile.TemporaryDirectory() as td:
                indexer.DICT_FILE = os.path.join(td, "dict.txt")
                indexer.STOPWORDS_FILE = os.path.join(td, "stopwords.txt")
                with open(indexer.DICT_FILE, "w", encoding="utf-8") as fh:
                    fh.write("词典 100000 nz\n")
                with open(indexer.STOPWORDS_FILE, "w", encoding="utf-8") as fh:
                    fh.write("的\n")
                base = indexer._dict_signature()
                with open(indexer.DICT_FILE, "a", encoding="utf-8") as fh:
                    fh.write("新词 100000 nz\n")   # 加词后签名必须变化
                self.assertNotEqual(indexer._dict_signature(), base)
        finally:
            indexer.DICT_FILE, indexer.STOPWORDS_FILE = orig

    def test_meta_value_reads_and_missing(self):
        import indexer
        import sqlite3

        conn = sqlite3.connect(":memory:")
        try:
            conn.execute("CREATE TABLE meta(key TEXT PRIMARY KEY, value TEXT)")
            conn.execute("INSERT INTO meta(key,value) VALUES('tokenizer','3')")
            self.assertEqual(indexer._meta_value(conn, "tokenizer"), "3")
            self.assertIsNone(indexer._meta_value(conn, "dict_hash"))   # 旧库无该键
            self.assertIsNone(indexer._meta_value(conn, "nope"))
        finally:
            conn.close()


if __name__ == "__main__":
    unittest.main()
