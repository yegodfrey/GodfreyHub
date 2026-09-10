import { run } from "./proc.js";

// 一键同步: 与用户既有 sync_projects.py 契约一致
//   pull: git pull --rebase --autostash (不覆盖本地未提交改动)
//   push: add -u(仅已跟踪) -> 未跟踪拦截 -> commit -> pull --rebase --autostash -> push
export interface GitResult { ok: boolean; skipped?: boolean; out: string; }

export async function gitPull(repoRoot: string, signal?: AbortSignal): Promise<GitResult> {
  const r = await run("git", ["pull", "--rebase", "--autostash"], { cwd: repoRoot, timeoutMs: 120000, signal });
  return { ok: r.code === 0, out: r.out };
}

export async function gitPush(repoRoot: string, message: string, signal?: AbortSignal): Promise<GitResult> {
  const status = await run("git", ["status", "--porcelain"], { cwd: repoRoot, timeoutMs: 30000, signal });
  if (status.code !== 0) return { ok: false, out: "git status 失败:\n" + status.out };
  if (!status.out.trim()) return { ok: true, skipped: true, out: "无改动，跳过。" };

  // 未跟踪文件拦截: 不默认 add -A(MCP 工具可能被任意 Agent 调用, add -A 会把
  // .env/密钥/临时产物等未跟踪文件一并提交推送)。只暂存已跟踪文件的修改;
  // 存在未跟踪文件时中止, 由调用方显式 git add 纳入或加入 .gitignore 后重试。
  const untracked = status.out.split(/\r?\n/).filter((l) => l.startsWith("??"));
  if (untracked.length > 0) {
    return {
      ok: false,
      out: "检测到 " + untracked.length + " 个未跟踪文件(如 '" + untracked[0].slice(3).trim() + "'), 已中止提交。"
        + "默认不暂存未跟踪文件; 请先 git add 显式纳入要提交的文件, 或将不需要的文件加入 .gitignore 后重试。",
    };
  }

  let out = status.out;
  const add = await run("git", ["add", "-u"], { cwd: repoRoot, timeoutMs: 60000, signal });
  if (add.code !== 0) return { ok: false, out: out + "\n[FAIL] git add:\n" + add.out };
  const commit = await run("git", ["commit", "-m", message], { cwd: repoRoot, timeoutMs: 60000, signal });
  out += "\n" + commit.out;
  if (commit.code !== 0) return { ok: false, out: out + "\n[FAIL] git commit" };
  // push 前先 rebase 远端, 避免双机/多机 push 被拒
  const pull = await run("git", ["pull", "--rebase", "--autostash"], { cwd: repoRoot, timeoutMs: 120000, signal });
  if (pull.code !== 0) out += "\n[WARN] pull --rebase:\n" + pull.out;
  const push = await run("git", ["push"], { cwd: repoRoot, timeoutMs: 120000, signal });
  out += "\n" + push.out;
  if (push.code !== 0) return { ok: false, out: out + "\n[FAIL] git push" };
  return { ok: true, out: out + "\n已提交并推送: " + message };
}