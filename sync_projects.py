#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
sync_projects.py — 单仓库 git 同步工具（自定位，单用户双机）

只处理本脚本所在的 git 仓库（git rev-parse 自动定位）。把脚本放到哪个仓库根目录，
它就同步哪个仓库。适用于单人维护、两台相同电脑协作的场景。

用法：
  1) commit 模式（agent 改完代码后运行）：
        python sync_projects.py commit "提交说明"
     对本仓库执行： add -A -> commit -> pull --rebase -> push
     每次 push 前自动 pull --rebase，避免双机间 push 被拒。

  2) pull 模式（双击 OneClickPull.bat）：
        python sync_projects.py pull
     对本仓库执行： pull --rebase

  3) commit-file 模式（双击 OneClickPush.bat）：
        python sync_projects.py commit-file <消息文件>
     从 UTF-8 文本文件读入提交说明，然后执行与 commit 相同的流程。
"""

import os
import subprocess
import sys

# Windows 下 stdout 被重定向(管道/文件)时 Python 回退 locale 编码(GBK),
# commit 消息含 emoji/非 GBK 字符会让 print 在 push 前抛 UnicodeEncodeError
# (commit 已生成但未推送)。统一用 UTF-8 + replace 兜底。
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")


def run(cmd, cwd):
    try:
        proc = subprocess.run(
            cmd, cwd=cwd,
            capture_output=True, text=True, encoding="utf-8", errors="replace",
        )
        return proc.returncode, (proc.stdout or "") + (proc.stderr or "")
    except Exception as e:
        return 1, str(e)


def repo_root():
    d = os.path.dirname(os.path.abspath(__file__))
    rc, out = run(["git", "rev-parse", "--show-toplevel"], d)
    return out.strip() if rc == 0 else None


def commit_mode(message):
    repo = repo_root()
    if not repo:
        print("[错误] 当前目录不是 git 仓库。"); return 1
    print(f"仓库：{os.path.basename(repo)}")
    rc, out = run(["git", "status", "--porcelain"], repo)
    if rc != 0: print(f"[FAIL] status: {out}"); return 1
    if not out.strip():
        print("  无改动，跳过。"); return 0
    for line in out.splitlines()[:15]:
        print("  " + line)
    if len(out.splitlines()) > 15:
        print(f"  ...（共 {len(out.splitlines())} 条）")

    if run(["git", "add", "-A"], repo)[0] != 0:
        print("[FAIL] git add"); return 1
    if run(["git", "commit", "-m", message], repo)[0] != 0:
        print("[FAIL] git commit"); return 1
    print(f"  已提交：{message}")
    # push 前先 rebase 远端，避免双机间 push 被拒
    rc, out = run(["git", "pull", "--rebase", "--autostash"], repo)
    if rc != 0: print(f"[WARN] pull: {out}")
    if run(["git", "push"], repo)[0] != 0:
        print("[FAIL] git push"); return 1
    print("  已推送。")
    return 0


def pull_mode():
    repo = repo_root()
    if not repo:
        print("[错误] 当前目录不是 git 仓库。"); return 1
    print(f"仓库：{os.path.basename(repo)}")
    rc, out = run(["git", "pull", "--rebase", "--autostash"], repo)
    if rc != 0:
        print(f"[失败] pull ({out})"); return 1
    print("  已是最新。")
    return 0


def main():
    args = sys.argv[1:]
    if args and args[0] == "commit":
        if len(args) < 2:
            print('用法：python sync_projects.py commit "提交说明"'); return 1
        return commit_mode(args[1])
    if args and args[0] == "commit-file":
        if len(args) < 2:
            print('用法：python sync_projects.py commit-file <消息文件>'); return 1
        try:
            with open(args[1], "r", encoding="utf-8") as f:
                msg = f.read().strip()
        except OSError as e:
            print(f"[错误] 读取提交说明文件失败: {e}"); return 1
        if not msg:
            print("[错误] 提交说明为空。"); return 1
        return commit_mode(msg)
    if args and args[0] == "pull":
        return pull_mode()
    if args:
        print("未知参数。用法：commit \"说明\" 或 pull"); return 1
    return pull_mode()


if __name__ == "__main__":
    sys.exit(main())
