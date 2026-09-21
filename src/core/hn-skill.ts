import { existsSync } from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { run, tail } from "./proc.js";
import { onlineAllTargets } from "./emulator.js";
import { toolchain } from "./paths.js";

// harmony-next 技能包(linhay/harmony-next.skills)脚本执行底座, 供 hn_* 工具复用。
// 该上游仓库无 LICENSE, MIT 的本仓不收编其源码、不入 git——以外部钉定 commit 的
// clone + env seam 注入(对齐 DEVECO_PATH/GODFREYHUB_HDK_ROOT 模式); 默认探测本包
// 同级目录的维护克隆(harmony-next.skills/harmony-next)。
// 上游脚本契约: 全部子命令非交互、--json 输出到 stdout。本模块统一负责根解析、
// 解释器选择、子进程执行(超时/有界输出/取消)与 stdout JSON 提取。

/** 解析技能包根(harmony-next/ 目录, 含 SKILL.md)。未找到返回 null。 */
export function hnSkillRoot(env: NodeJS.ProcessEnv = process.env): string | null {
  const candidates = [
    env.GODFREYHUB_HN_SKILL_ROOT,
    path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "..", "..", "..", "harmony-next.skills", "harmony-next"),
  ].filter((x): x is string => !!x);
  for (const c of candidates) {
    if (existsSync(path.join(c, "SKILL.md"))) return path.normalize(c);
  }
  return null;
}

/** 技能包内 scripts/<script> 的绝对路径; 根缺失或脚本不存在时给出可操作的错误。 */
export function hnScriptPath(script: string, root?: string): string {
  const base = root ?? hnSkillRoot();
  if (!base) {
    throw new Error("harmony-next 技能包未找到: 设 GODFREYHUB_HN_SKILL_ROOT 指向 harmony-next/ 目录(含 SKILL.md), 或在本包同级放置 harmony-next.skills 的钉定克隆");
  }
  const p = path.join(base, "scripts", script);
  if (!existsSync(p)) throw new Error(`harmony-next 脚本不存在: ${p}`);
  return p;
}

// 从合并输出中提取脚本 JSON: 依次尝试 1) 全文 2) 首个以 { 或 [ 开头的行起
// 3) 首个 {/[ 到末个 }/] 的切片。全失败返回 null, 由调用方决定 fail-loud 与否。
export function extractJson<T = unknown>(output: string): T | null {
  const s = output.trim();
  if (!s) return null;
  const candidates = [s];
  const lineStart = s.search(/^[{[]/m);
  if (lineStart > 0) candidates.push(s.slice(lineStart));
  const first = s.search(/[{[]/);
  const lastBrace = Math.max(s.lastIndexOf("}"), s.lastIndexOf("]"));
  if (first >= 0 && lastBrace > first) candidates.push(s.slice(first, lastBrace + 1));
  for (const c of candidates) {
    try { return JSON.parse(c) as T; } catch { /* 尝试下一形态 */ }
  }
  return null;
}

export interface HnScriptResult<T = unknown> {
  /** 进程退出码; 非零不在此抛——上游脚本常在失败时也输出带 failureCode 的 JSON, 判定权在调用方。 */
  code: number;
  /** stdout 提取的 JSON; 提取失败为 null。 */
  json: T | null;
  /** 合并原始输出(有界, proc.run 滚动窗口), JSON 提取失败时供报错展示。 */
  raw: string;
}

/**
 * 执行技能包脚本并提取 JSON。解释器默认 python(可 env GODFREYHUB_HN_PYTHON 覆盖,
 * ux 审计等重依赖场景指向专用 venv); interpreter+scriptPath 分离使测试可注入
 * node+stub 脚本做 hermetic 回归。timeout 默认 120s(trace 转换等长任务自行放宽)。
 */
export async function runHnScript<T = unknown>(
  script: string,
  args: string[],
  opts: {
    timeoutMs?: number;
    signal?: AbortSignal;
    cwd?: string;
    root?: string;
    interpreter?: string;
  } = {},
): Promise<HnScriptResult<T>> {
  const interpreter = opts.interpreter ?? process.env.GODFREYHUB_HN_PYTHON ?? "python";
  const scriptPath = hnScriptPath(script, opts.root);
  const r = await run(interpreter, [scriptPath, ...args], {
    timeoutMs: opts.timeoutMs ?? 120_000,
    signal: opts.signal,
    cwd: opts.cwd,
  });
  const json = extractJson<T>(r.out);
  if (json === null && r.code !== 0) {
    throw new Error(`[${script}] 失败(exit ${r.code}${r.timedOut ? ", 超时" : ""}):\n${tail(r.out, 40)}`);
  }
  return { code: r.code, json, raw: r.out };
}

// 与 hilog/ui 同款设备面默认选择: 显式 target 优先, 否则取全量在线目标首个。
export async function pickTarget(
  target: string | undefined,
  deps: { onlineTargetList?: () => Promise<string[]> } = {},
): Promise<string> {
  const t = target ?? (await (deps.onlineTargetList ?? onlineAllTargets)())[0];
  if (!t) throw new Error("没有在线设备");
  return t;
}

/** 证据产物默认落点: 系统临时目录下按工具前缀+时间戳隔离, 调用方可用 artifactDir 覆盖。 */
export function defaultArtifactDir(prefix: string): string {
  return path.join(tmpdir(), "godfreyhub-hn", `${prefix}-${Date.now()}`);
}

/**
 * device_evidence_bundle.py 的显式 --hdc 透传(doctor/capture/webview-devtools 共用)。
 * 上游候选链会盲信 env:HDC 指向的目录: Windows 对目录 os.access(X_OK) 为真, 探测
 * 阶段吞掉 PermissionError, 但后续 list_targets 的 run_command 不吞 → 整个脚本
 * exit 1 崩溃而非输出结构化 JSON(2026-09-21 实机实证, 本机 HDC 恰指向 toolchains 目录)。
 * 因此本仓从 toolchain() 解析出绝对且存在的 hdc 时直传 --hdc 覆盖上游候选链
 * (对齐 hn_trace 显式传 --trace-streamer 的先例); 解析不到(非绝对/不存在)或调用方
 * 显式传 null(测试注入)时返回 [], 交由上游自行探测。
 */
export function explicitHdcArgs(hdc?: string | null): string[] {
  const resolved = resolveExplicitHdc(hdc);
  return resolved ? ["--hdc", resolved] : [];
}

/** explicitHdcArgs 的路径形态: 解析到存在的绝对 hdc 路径返回之, 否则 null。 */
export function resolveExplicitHdc(hdc?: string | null): string | null {
  const resolved = hdc !== undefined ? hdc : toolchain().hdc;
  if (resolved && path.isAbsolute(resolved) && existsSync(resolved)) return resolved;
  return null;
}
