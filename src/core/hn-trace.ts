import fs from "node:fs";
import path from "node:path";
import { toolchain } from "./paths.js";
import { run, requireOk, tail } from "./proc.js";
import { runHnScript, pickTarget, defaultArtifactDir } from "./hn-skill.js";

// hn_trace 核心: 设备端 hitrace 采集 + 离线审计(包装上游 profiler_trace_audit.py)。
// 采集为本仓自实现——上游脚本只做 trace_streamer 转换/审计, 没有采集能力;
// 审计与 doctor 纯子进程包装上游脚本(上游无 LICENSE, 不收编源码)。
// 已验证的采集命令形态(2026-09-21, 无 root 模拟器 shell 用户实测, 1 秒落盘 8KB):
//   hdc -t <target> shell hitrace --time <N> -b <4096> -o /data/local/tmp/<name>.trace ability

const AUDIT_SCRIPT = "profiler_trace_audit.py";

/** capture: hitrace 采集参数。tags 按空格/逗号拆分, 默认 "ability"。 */
export interface TraceCaptureOpts {
  target?: string;
  tags?: string;
  /** 采集秒数, 1..60, 默认 5(hitrace --time 按 N 秒阻塞)。 */
  durationSec?: number;
  /** 环形缓冲区 KB, 默认 4096。 */
  bufferKb?: number;
  /** trace 落地目录, 省略=defaultArtifactDir("hn-trace")。 */
  artifactDir?: string;
  /** MCP 请求级取消信号。 */
  signal?: AbortSignal;
}

/** 测试注入: run 来自 proc.ts, 假实现记录调用序列即可断言 hitrace→recv→rm 顺序。 */
export interface TraceCaptureDeps {
  run?: typeof run;
}

export interface TraceCaptureResult {
  action: "capture";
  target: string;
  artifactDir: string;
  traceFile: string;
}

/** audit/doctor 注入: 技能包根与解释器供测试 stub, deveco 覆盖默认 toolchain()。 */
export interface HnScriptDeps {
  root?: string;
  interpreter?: string;
  deveco?: string | null;
}

export interface TraceAuditOpts {
  /** 输入 trace 文件(.ftrace/.htrace/bytrace/rawtrace)。 */
  input: string;
  /** 审计产物目录(--output-dir), 省略=脚本默认 .hvigor/outputs/profiler-trace-audit-*。 */
  outputDir?: string;
  /** 慢 span 阈值 ms, 可多个(上游 repeated --threshold-ms), 省略=脚本默认 16.67/33.34。 */
  thresholdMs?: number[];
  /** 覆盖 outputDir 下已存在的 trace.db(上游 --force), 无人值守重复审计同一目录时必开。 */
  force?: boolean;
  /** 上游脚本超时 ms, 默认 600000(trace_streamer 转换属长任务)。 */
  timeoutMs?: number;
  signal?: AbortSignal;
}

export interface TraceDoctorOpts {
  timeoutMs?: number;
  signal?: AbortSignal;
}

/** doctor/audit 返回信封: action + 退出码 + 脚本顶层 JSON 字段原样展开(decision/
 *  summary/outputDir/counts/traceRange/topCallstack/thresholds/failureCode 等以脚本实际输出为准)。 */
export interface HnScriptEnvelope {
  action: "doctor" | "audit";
  exitCode: number;
  [field: string]: unknown;
}

/** 整数参数校验: 越界/非整数一律 fail-loud, 不做静默钳制。 */
function requireInt(name: string, value: number | undefined, fallback: number, min: number, max: number): number {
  const v = value ?? fallback;
  if (!Number.isInteger(v) || v < min || v > max) {
    throw new Error(`${name} 必须是 ${min}..${max} 的整数, 收到 ${v}`);
  }
  return v;
}

/** tags 拆分 + token 白名单校验: token 直接拼进 hdc shell 命令串, 必须杜绝注入。 */
function parseTags(tags: string | undefined): string[] {
  const tokens = (tags ?? "ability").split(/[\s,]+/).filter(Boolean);
  if (tokens.length === 0) throw new Error("tags 不能为空");
  for (const t of tokens) {
    if (!/^[A-Za-z0-9_-]+$/.test(t)) {
      throw new Error(`非法 tag token: ${t}(仅允许 [A-Za-z0-9_-], 按空格/逗号分隔)`);
    }
  }
  return tokens;
}

/**
 * 设备端 hitrace 采集: hitrace 落盘 /data/local/tmp → file recv 到本地 → rm 清理远端。
 * 任何一步失败都先尽力清理远端文件再抛错(错误带输出尾部); rm 本身尽力而为不影响结果。
 */
export async function captureTrace(opts: TraceCaptureOpts = {}, deps: TraceCaptureDeps = {}): Promise<TraceCaptureResult> {
  const durationSec = requireInt("durationSec", opts.durationSec, 5, 1, 60);
  const bufferKb = requireInt("bufferKb", opts.bufferKb, 4096, 1, 1_048_576);
  const tokens = parseTags(opts.tags);
  const target = await pickTarget(opts.target);
  const runCommand = deps.run ?? run;
  const hdc = toolchain().hdc;
  const remotePath = `/data/local/tmp/hn-trace-${Date.now()}.trace`;
  const artifactDir = opts.artifactDir ?? defaultArtifactDir("hn-trace");
  fs.mkdirSync(artifactDir, { recursive: true });
  const localTrace = path.join(artifactDir, path.basename(remotePath));

  // 尽力清理远端 trace 文件: 成功后与失败路径都要执行。
  const cleanup = async (): Promise<void> => {
    try {
      await runCommand(hdc, ["-t", target, "shell", "rm -f " + remotePath], { timeoutMs: 15_000, signal: opts.signal });
    } catch { /* 清理失败不影响结果 */ }
  };

  try {
    // hitrace --time N 阻塞 N 秒后自动停止并落盘, 超时给 30s 余量。
    requireOk("hitrace 采集", await runCommand(
      hdc,
      ["-t", target, "shell", `hitrace --time ${durationSec} -b ${bufferKb} -o ${remotePath} ${tokens.join(" ")}`],
      { timeoutMs: durationSec * 1000 + 30_000, signal: opts.signal },
    ));
    requireOk("hdc file recv", await runCommand(
      hdc,
      ["-t", target, "file", "recv", remotePath, localTrace],
      { timeoutMs: 60_000, signal: opts.signal },
    ));
    if (!fs.existsSync(localTrace)) throw new Error("接收 trace 文件失败: 本地文件未生成");
  } catch (e) {
    await cleanup();
    throw e;
  }
  await cleanup();
  return { action: "capture", target, artifactDir, traceFile: localTrace };
}

/**
 * trace_streamer 定位: 上游脚本默认探测是 macOS 视角(/Applications/DevEco-Studio.app、
 * /opt/*), Windows 默认候选必然落空。显式 --trace-streamer 是其候选链首位, 因此由本仓
 * 从 toolchain().deveco 解析后直传: Windows 为 <deveco>\tools\profiler\dic_server\
 * trace_streamer.exe, macOS 下 paths.ts 的 deveco 根已含 Contents, 拼接后同为官方布局。
 */
function traceStreamerArgs(deps: HnScriptDeps): string[] {
  const deveco = deps.deveco !== undefined ? deps.deveco : toolchain().deveco;
  if (!deveco) return [];
  const exe = process.platform === "win32" ? "trace_streamer.exe" : "trace_streamer";
  return ["--trace-streamer", path.join(deveco, "tools", "profiler", "dic_server", exe)];
}

// doctor/audit 公共出口: 执行脚本 → 校验 JSON 对象 → 组装信封。脚本在 blocked 时
// 以非零码输出 JSON(runHnScript 不抛), 退出码进信封由调用方判定。
async function runProfilerScript(
  action: "doctor" | "audit",
  args: string[],
  opts: { timeoutMs?: number; signal?: AbortSignal },
  deps: HnScriptDeps,
): Promise<HnScriptEnvelope> {
  const res = await runHnScript<Record<string, unknown>>(AUDIT_SCRIPT, args, {
    timeoutMs: opts.timeoutMs,
    signal: opts.signal,
    root: deps.root,
    interpreter: deps.interpreter,
  });
  if (res.json === null || typeof res.json !== "object" || Array.isArray(res.json)) {
    throw new Error(`[${AUDIT_SCRIPT} ${action}] 未返回 JSON 对象(exit ${res.code}):\n${tail(res.raw, 40)}`);
  }
  return { action, exitCode: res.code, ...res.json };
}

/** 离线审计: trace → trace_streamer → SQLite → 性能证据 JSON(summary/counts/spans 等)。 */
export async function auditTrace(opts: TraceAuditOpts, deps: HnScriptDeps = {}): Promise<HnScriptEnvelope> {
  if (!opts.input || !opts.input.trim()) throw new Error("audit 需要 input(trace 文件路径)");
  const args = ["audit", "--input", opts.input, "--json"];
  if (opts.outputDir) args.push("--output-dir", opts.outputDir);
  if (opts.force) args.push("--force");
  for (const t of opts.thresholdMs ?? []) {
    if (!Number.isFinite(t)) throw new Error(`thresholdMs 必须是有限数字, 收到 ${t}`);
    args.push("--threshold-ms", String(t));
  }
  args.push(...traceStreamerArgs(deps));
  return runProfilerScript("audit", args, { timeoutMs: opts.timeoutMs ?? 600_000, signal: opts.signal }, deps);
}

/** 探测 trace_streamer 可用性(存在/可执行/版本), 不做转换。 */
export async function doctorTrace(opts: TraceDoctorOpts = {}, deps: HnScriptDeps = {}): Promise<HnScriptEnvelope> {
  return runProfilerScript("doctor", ["doctor", "--json", ...traceStreamerArgs(deps)], opts, deps);
}
