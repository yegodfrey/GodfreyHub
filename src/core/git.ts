import { run, type RunResult } from "./proc.js";

// 一键同步: 与用户既有 sync_projects.py 契约一致
//   pull: git pull --rebase --autostash (不覆盖本地未提交改动)
//   push: add -u(仅已跟踪) -> 未跟踪拦截 -> commit -> pull --rebase --autostash -> push
//
// 失败恢复是硬契约: pull --rebase 失败(冲突/上游分歧)会把仓库留在 mid-rebase 状态,
// 工作区带冲突标记。这是一个自主工具——绝不允许把用户的仓库留在中间态然后继续后续
// 步骤(push 必然失败)或静默返回。任何 rebase 失败都尽力 `git rebase --abort` 恢复
// 原状, 再带着明确指引返回失败; 冲突的解决必须由人完成。

export interface GitResult { ok: boolean; skipped?: boolean; out: string; }

export interface GitDeps { runCommand?: typeof run; }

async function git(args: string[], repoRoot: string, signal: AbortSignal | undefined,
  runCommand: typeof run): Promise<RunResult> {
  return runCommand("git", args, { cwd: repoRoot, timeoutMs: 120000, signal });
}

/** 尽力撤销 mid-rebase 状态。不在 rebase 中时 git 会报 "No rebase in progress", 忽略即可。 */
async function abortRebaseIfAny(repoRoot: string, signal: AbortSignal | undefined,
  runCommand: typeof run): Promise<string> {
  const r = await git(["rebase", "--abort"], repoRoot, signal, runCommand);
  return r.code === 0 ? "" : r.out.trim();
}

export async function gitPull(repoRoot: string, signal?: AbortSignal, deps: GitDeps = {}): Promise<GitResult> {
  const runCommand = deps.runCommand ?? run;
  const r = await git(["pull", "--rebase", "--autostash"], repoRoot, signal, runCommand);
  if (r.code === 0) return { ok: true, out: r.out };
  const aborted = await abortRebaseIfAny(repoRoot, signal, runCommand);
  const restored = aborted !== ""
    ? "\n[rebase --abort 也失败, 仓库可能仍在 rebase 中态, 需人工检查]\n" + aborted
    : "\n[已执行 rebase --abort, 仓库恢复到 pull 前状态]";
  return {
    ok: false,
    out: r.out + restored +
      "\n[指引] rebase 失败通常是远程有分歧提交。请人工处理: git pull --rebase 解决冲突后 git rebase --continue; 自动工具不代替人解决冲突。",
  };
}

export async function gitPush(repoRoot: string, message: string, signal?: AbortSignal, deps: GitDeps = {}): Promise<GitResult> {
  const runCommand = deps.runCommand ?? run;
  const status = await runCommand("git", ["status", "--porcelain"], { cwd: repoRoot, timeoutMs: 30000, signal });
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
  const add = await runCommand("git", ["add", "-u"], { cwd: repoRoot, timeoutMs: 60000, signal });
  if (add.code !== 0) return { ok: false, out: out + "\n[FAIL] git add:\n" + add.out };
  const commit = await runCommand("git", ["commit", "-m", message], { cwd: repoRoot, timeoutMs: 60000, signal });
  out += "\n" + commit.out;
  if (commit.code !== 0) return { ok: false, out: out + "\n[FAIL] git commit" };
  // push 前先 rebase 远端, 避免双机/多机 push 被拒。
  // rebase 失败绝不再 push: 一是 push 必然被拒, 二是带着冲突标记推送会把冲突态发布出去。
  const pull = await git(["pull", "--rebase", "--autostash"], repoRoot, signal, runCommand);
  if (pull.code !== 0) {
    const aborted = await abortRebaseIfAny(repoRoot, signal, runCommand);
    const restored = aborted !== ""
      ? "\n[rebase --abort 也失败, 仓库可能仍在 rebase 中态, 需人工检查]\n" + aborted
      : "\n[已执行 rebase --abort, 仓库恢复到提交后状态; 本次提交仍在本地]";
    return {
      ok: false,
      out: out + "\n[FAIL] push 前的 pull --rebase 失败, 已中止 push:\n" + pull.out + restored +
        "\n[指引] 人工解决冲突: git pull --rebase -> 修复 -> git rebase --continue -> git push。注意 --autostash 的本地改动在冲突期间暂存于 stash, abort 后可用 git stash pop 找回(如有)。",
    };
  }
  out += "\n" + pull.out;
  const push = await runCommand("git", ["push"], { cwd: repoRoot, timeoutMs: 120000, signal });
  out += "\n" + push.out;
  if (push.code !== 0) return { ok: false, out: out + "\n[FAIL] git push" };
  return { ok: true, out: out + "\n已提交并推送: " + message };
}
