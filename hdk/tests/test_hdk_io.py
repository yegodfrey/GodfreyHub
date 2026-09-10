import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

PROJECT_ROOT = Path(__file__).resolve().parents[1]


class HdkIoAtomicWriteTests(unittest.TestCase):
    """hdk_io 原子写 + 瞬时 OSError(22) 退避重试的回归测试。

    复现并锁定实测的 Windows 落盘 bug：杀软/索引器抢在 truncate 前打开刚写完的多 MB
    状态文件，令就地 open(path,'w') 偶发 OSError(22) 打断长跑。hdk_io 改为“临时文件 +
    原子 os.replace + 退避重试”，本测试用注入的瞬时失败验证重试后仍成功、且不留残档。
    """

    @classmethod
    def setUpClass(cls):
        sys.path.insert(0, str(PROJECT_ROOT))
        import hdk_io
        cls.io = hdk_io

    def setUp(self):
        self.dir = tempfile.mkdtemp()

    def _leftover_tmp(self):
        return [f for f in os.listdir(self.dir) if ".tmp." in f]

    def test_atomic_write_json_roundtrip_and_no_tmp(self):
        p = os.path.join(self.dir, "s.json")
        self.io.atomic_write_json(p, {"b": 2, "a": [3, 2, 1]},
                                  ensure_ascii=False, separators=(",", ":"))
        import json
        self.assertEqual(json.load(open(p, encoding="utf-8")), {"b": 2, "a": [3, 2, 1]})
        self.assertEqual(self._leftover_tmp(), [])

    def test_atomic_write_text_utf8(self):
        p = os.path.join(self.dir, "d.md")
        self.io.atomic_write_text(p, "# 标题\n正文\n")
        self.assertEqual(open(p, encoding="utf-8").read(), "# 标题\n正文\n")
        self.assertEqual(self._leftover_tmp(), [])

    def test_retries_transient_oserror_then_succeeds(self):
        p = os.path.join(self.dir, "retry.json")
        real_replace = os.replace
        state = {"calls": 0}

        def flaky_replace(src, dst):
            state["calls"] += 1
            if state["calls"] <= 2:               # 前两次模拟杀软/索引器抢锁
                raise OSError(22, "Invalid argument")
            return real_replace(src, dst)

        import json
        with mock.patch("os.replace", side_effect=flaky_replace), \
             mock.patch("time.sleep"):            # 免退避实等待
            self.io.atomic_write_json(p, {"k": "v"}, ensure_ascii=False,
                                      separators=(",", ":"))
        self.assertGreaterEqual(state["calls"], 3)
        self.assertEqual(json.load(open(p, encoding="utf-8")), {"k": "v"})
        self.assertEqual(self._leftover_tmp(), [])

    def test_raises_after_exhausting_retries(self):
        p = os.path.join(self.dir, "hard.json")

        def always_fail(src, dst):
            raise OSError(22, "Invalid argument")

        with mock.patch("os.replace", side_effect=always_fail), \
             mock.patch("time.sleep"):
            with self.assertRaises(OSError):
                self.io.atomic_write_json(p, {"k": "v"}, tries=3)
        # 失败的临时文件须被清理，不留残档
        self.assertEqual(self._leftover_tmp(), [])
        self.assertFalse(os.path.exists(p))


if __name__ == "__main__":
    unittest.main()
