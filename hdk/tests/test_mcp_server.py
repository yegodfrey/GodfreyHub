import json
import subprocess
import sys
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]


class MCPServerCompatibilityTests(unittest.TestCase):
    def test_server_imports_with_installed_mcp_sdk(self):
        result = subprocess.run(
            [sys.executable, "-c", "import mcp_server"],
            cwd=PROJECT_ROOT,
            capture_output=True,
            text=True,
        )

        self.assertEqual(result.returncode, 0, result.stderr)


class MCPServerSafetyTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        import mcp_server

        cls.server = mcp_server

    def test_search_limit_is_clamped_to_safe_range(self):
        self.assertEqual(self.server._normalize_limit(500), 100)
        self.assertEqual(self.server._normalize_limit(0), 1)
        self.assertEqual(self.server._normalize_limit("not-a-number"), 10)

    def test_document_path_cannot_escape_document_roots(self):
        self.assertIsNone(self.server._resolve_fp("../README.md"))

    def test_fts_query_quotes_each_token(self):
        self.assertEqual(
            self.server._fts_match_expression(["ArkUI", "C++"]),
            '"ArkUI" AND "C++"',
        )

    def test_relaxed_fts_query_allows_one_missing_token(self):
        self.assertEqual(
            self.server._relaxed_fts_match_expression(["状态管理", "异常", "排查"]),
            '("异常" AND "排查") OR ("状态管理" AND "排查") OR ("状态管理" AND "异常")',
        )

    def test_subtoken_expression_falls_back_to_search_subwords(self):
        # 查询整词"智慧屏"索引中无词元时, 退化为 cut_for_search 子词 OR("智慧")
        self.assertEqual(
            self.server._subtoken_fts_match_expression(["智慧屏"]),
            '("智慧")',
        )

    def test_subtoken_expression_keeps_non_single_other_tokens(self):
        # 其余词元只保留非单字; 单字"传/参"是噪声被丢弃, 整词"页面路由"替换为子词 OR
        expr = self.server._subtoken_fts_match_expression(["页面路由", "跳转", "传", "参"])
        self.assertIn('"页面"', expr)   # "页面路由" cut_for_search -> 页面/路由/页面路由
        self.assertIn('"路由"', expr)
        self.assertIn('"跳转"', expr)
        self.assertNotIn('"传"', expr)
        self.assertNotIn('"参"', expr)

    def test_subtoken_expression_none_without_subwords(self):
        # 无子词(连续英文串)或超长查询返回 None
        self.assertIsNone(self.server._subtoken_fts_match_expression(["getStringSync"]))
        self.assertIsNone(self.server._subtoken_fts_match_expression(["a"] * 9))

    def test_search_uses_existing_fts_index(self):
        results = json.loads(self.server.search_documents("ArkUI", 1))
        self.assertLessEqual(len(results), 1)


if __name__ == "__main__":
    unittest.main()
