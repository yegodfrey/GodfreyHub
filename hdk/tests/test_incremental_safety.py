#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""incremental.py 删除路径安全性单测（hermetic：临时目录合成语料，不读任何真实语料/状态）。

锁定的缺陷（2026-10-05 实测确认）：
  crawl.py 已把「HTTP 200 + 错误 JSON（无 resultList）」当作限流/降级并重试（L447-452），
  但 incremental.py 的 fetch_batch 与 confirm_gone 直接 data.get("resultList", [])，
  空列表既被当成「整批文档官方已消失」进删除候选，又让 confirm_gone 判定为「已删除」，
  于是一次持续降级即可物理删除整本语料（历史单轮删除量级 1624/2071 条）。
"""
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import crawl          # noqa: E402
import catalog        # noqa: E402  （incremental._run 内函数级 import，补丁必须打在模块对象上）
import incremental    # noqa: E402

# 限流/降级的真实形状：HTTP 200、JSON 合法、没有 resultList
DEGRADED = {"code": 10700012, "message": "too many requests, please retry later"}
# 官方明确不返回该文档（结构合法）
GONE = {"code": 0, "message": "success", "resultList": []}


class FakeMCP:
    """替代 crawl.MCP：按脚本回放响应，并记录调用次数。"""
    payload = DEGRADED
    calls = 0

    def __init__(self):
        type(self).calls += 1

    def call_tool(self, name, args):
        return {"result": {"content": [{"text": json.dumps(self.payload,
                                                            ensure_ascii=False)}]}}


class IncSafetyTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = self.tmp.name
        self.out = os.path.join(self.root, "corpus")
        os.makedirs(self.out)
        # 两个模块的语料根都要指到临时目录（incremental.delete_doc/disk_hash 走 crawl.doc_relpath）
        self._orig = (crawl.OUT, incremental.OUT, incremental.INC_STATE,
                      incremental.CRAWL_STATE, crawl.QUERIES, crawl.MCP,
                      crawl.acquire_lock, crawl.release_lock, catalog.names)
        self.name = "document/cn/guide/topic-0000001234567890"
        cat, fname = crawl.doc_relpath(self.name)
        self.fp = os.path.join(self.out, cat, fname)
        os.makedirs(os.path.join(self.out, cat), exist_ok=True)   # 分类先存在 = 已采纳
        with open(self.fp, "w", encoding="utf-8") as f:
            f.write("---\nname: %s\ntitle: 主题\nuri: u\n---\n\n原始正文\n" % self.name)

        crawl.OUT = self.out
        incremental.OUT = self.out
        crawl._SCOPE_CACHE = None            # 改指语料根后重置采集范围缓存
        incremental.INC_STATE = os.path.join(self.root, "inc_state.json")
        incremental.CRAWL_STATE = os.path.join(self.root, "crawl_state.json")
        with open(incremental.CRAWL_STATE, "w", encoding="utf-8") as f:
            json.dump({"discovered": [], "fetched": [], "failed": []}, f)
        h = incremental.disk_hash(self.name)
        self.assertIsNotNone(h, "前置条件：磁盘指纹须可计算")
        with open(incremental.INC_STATE, "w", encoding="utf-8") as f:
            json.dump({"discovered": [self.name], "fetched": [self.name],
                       "hashes": {self.name: h}, "deleted": []}, f)
        crawl.QUERIES = []                       # 不发搜索请求
        FakeMCP.payload = DEGRADED
        FakeMCP.calls = 0
        crawl.MCP = FakeMCP
        crawl.acquire_lock = lambda: None        # 不在真实仓库留锁
        crawl.release_lock = lambda: None
        catalog.names = lambda: set()            # 不读真实清单
        # 退避睡眠置 0：不验证退避时长，只验证降级响应不删文件（否则本套要真等几十秒）
        self.addCleanup(setattr, incremental, "RETRY_SLEEP", incremental.RETRY_SLEEP)
        incremental.RETRY_SLEEP = 0

    def tearDown(self):
        (crawl.OUT, incremental.OUT, incremental.INC_STATE,
         incremental.CRAWL_STATE, crawl.QUERIES, crawl.MCP,
         crawl.acquire_lock, crawl.release_lock, catalog.names) = self._orig
        crawl._SCOPE_CACHE = None
        self.tmp.cleanup()

    def _run_once(self):
        incremental._run(no_recheck=False, skip_delete=False, limit=0,
                         skip_portal=True)      # 本用例只验删除通路，不走门户补齐
        with open(incremental.INC_STATE, encoding="utf-8") as f:
            return json.load(f)

    def test_degraded_response_must_not_delete_corpus(self):
        """降级响应（200 无 resultList）一个字都不许删，且不落删除留痕。"""
        s = self._run_once()
        self.assertTrue(os.path.exists(self.fp), "降级响应导致语料被物理删除")
        self.assertEqual([], s["deleted"], "降级响应写出了删除记录")
        self.assertIn(self.name, s["fetched"], "降级响应把已抓文档从状态里踢出")

    def test_confirm_gone_requires_valid_structure(self):
        """confirm_gone：结构不合法 => 不确定 => 保留（False）。"""
        self.assertFalse(incremental.confirm_gone(self.name, lambda: FakeMCP()),
                         "降级响应被 confirm_gone 判成已删除")

    def test_confirm_gone_accepts_explicit_empty_resultlist(self):
        """结构合法且明确不含该 name => 判定已删除（设计意图，必须保留这条通路）。"""
        FakeMCP.payload = GONE
        self.assertTrue(incremental.confirm_gone(self.name, lambda: FakeMCP()))

    def test_degraded_batch_is_not_persisted_as_failed(self):
        """降级批次只能当瞬时失败：不得写进 crawl_state.failed 永久拉黑。"""
        self._run_once()
        with open(incremental.CRAWL_STATE, encoding="utf-8") as f:
            cs = json.load(f)
        self.assertNotIn(self.name, cs.get("failed", []),
                         "降级响应被当成死链永久拉黑")


if __name__ == "__main__":
    unittest.main()
