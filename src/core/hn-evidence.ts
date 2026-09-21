import { defaultArtifactDir, explicitHdcArgs, pickTarget, runHnScript, type HnScriptResult } from "./hn-skill.js";
import { tail } from "./proc.js";

// hn_evidence 核心: 调 harmony-next 技能包的 device_evidence_bundle.py
// (doctor / capture / webview-devtools 三个子命令), 统一 argv 构造、设备目标解析
// 与返回信封组装。flag 以脚本源码 argparse 为准(SKILL 文档是 macOS 视角):
// - 三个子命令均支持 --json 输出顶层 JSON; 失败时也常输出带 failureCode /
//   missingConfig 的 JSON 并以 exit 2 结束, 原样透传给调用方判定——runHnScript
//   只在"非零退出且无 JSON"时抛错。
// - doctor: 仅 --public(可选); 共享的 --deveco-app/--hdc/--timeout 均可选(hdc 候选
//   由脚本自行探测), 故不传 --deveco-app。不要求设备在线: 无设备时脚本输出
//   decision=blocked + missingConfig:["target"] 的 JSON(exit 2), 本层不抛错。
// - capture: --target --artifact-dir --json。
// - webview-devtools: --target --artifact-dir [--remote-socket] --json。

const SCRIPT = "device_evidence_bundle.py";

export type HnEvidenceAction = "doctor" | "capture" | "webview-devtools";

export interface HnEvidenceOpts {
  /** 设备目标(127.0.0.1:port), 省略=在线目标首个(pickTarget)。doctor 忽略。 */
  target?: string;
  /** 证据产物目录, 省略=defaultArtifactDir("hn-evidence")。doctor 忽略。 */
  artifactDir?: string;
  /** webview-devtools 透传: webview_devtools_remote_<pid> 或 localabstract: 前缀。 */
  remoteSocket?: string;
  /** 脚本执行超时毫秒, 省略由 runHnScript 落到默认 120000。 */
  timeoutMs?: number;
  /** MCP 请求级取消信号, 贯穿子进程。 */
  signal?: AbortSignal;
}

/** deps 注入保持 hermetic 可测: 测试换 stub runScript / onlineTargetList, 不碰设备。
 *  hdc 供测试覆盖默认 toolchain().hdc 解析(null=不传 --hdc)。 */
export interface HnEvidenceDeps {
  onlineTargetList?: () => Promise<string[]>;
  runScript?: typeof runHnScript;
  hdc?: string | null;
}

/**
 * 返回信封: action/target/artifactDir 为本工具补充字段(target/artifactDir 取
 * 本层解析后的值), 其余为脚本顶层 JSON 字段(decision/summary/artifacts/
 * layoutSummary/commandLedger/sockets/staleForwards/fportStatus/httpProbe/
 * failureCode... 以脚本实际输出为准)原样透传, failureCode 等失败信号不吞。
 */
export interface HnEvidenceEnvelope extends Record<string, unknown> {
  action: HnEvidenceAction;
  target?: string;
  artifactDir?: string;
}

// 脚本 exit 0 却没有顶层 JSON 对象: runHnScript 只拦"非零+无 JSON", 此处补上
// 上游契约破坏的最后一种形态, 同样 fail-loud 并带尾部输出。
function toEnvelope(
  action: HnEvidenceAction,
  r: HnScriptResult,
  extra: { target?: string; artifactDir?: string } = {},
): HnEvidenceEnvelope {
  if (r.json === null || typeof r.json !== "object" || Array.isArray(r.json)) {
    throw new Error(`[${SCRIPT}] 未返回顶层 JSON 对象(exit ${r.code}), 上游契约可能已变更:\n${tail(r.raw, 40)}`);
  }
  return { ...(r.json as Record<string, unknown>), ...extra, action };
}

/**
 * doctor: 环境自检(定位 hdc + 列出在线目标)。不要求设备在线, 无设备不抛错——
 * 脚本自身输出 decision=blocked 的 JSON(exit 2), 原样透传。
 */
export async function doctorEvidence(
  opts: Pick<HnEvidenceOpts, "timeoutMs" | "signal"> = {},
  deps: HnEvidenceDeps = {},
): Promise<HnEvidenceEnvelope> {
  const r = await (deps.runScript ?? runHnScript)(SCRIPT, ["doctor", "--json", ...explicitHdcArgs(deps.hdc)], {
    timeoutMs: opts.timeoutMs,
    signal: opts.signal,
  });
  return toEnvelope("doctor", r);
}

/** capture: 采集截图/布局/应用状态/有界日志证据包到 artifactDir。 */
export async function captureEvidence(
  opts: HnEvidenceOpts = {},
  deps: HnEvidenceDeps = {},
): Promise<HnEvidenceEnvelope> {
  const target = await pickTarget(opts.target, { onlineTargetList: deps.onlineTargetList });
  const artifactDir = opts.artifactDir ?? defaultArtifactDir("hn-evidence");
  const r = await (deps.runScript ?? runHnScript)(SCRIPT, [
    "capture", "--target", target, "--artifact-dir", artifactDir, "--json",
    ...explicitHdcArgs(deps.hdc),
  ], {
    timeoutMs: opts.timeoutMs,
    signal: opts.signal,
  });
  return toEnvelope("capture", r, { target, artifactDir });
}

/** webview-devtools: 诊断 ArkWeb DevTools socket(fport 转发 + /json HTTP 探测)。 */
export async function webviewDevtoolsEvidence(
  opts: HnEvidenceOpts = {},
  deps: HnEvidenceDeps = {},
): Promise<HnEvidenceEnvelope> {
  const target = await pickTarget(opts.target, { onlineTargetList: deps.onlineTargetList });
  const artifactDir = opts.artifactDir ?? defaultArtifactDir("hn-evidence");
  const args = ["webview-devtools", "--target", target, "--artifact-dir", artifactDir];
  if (opts.remoteSocket) args.push("--remote-socket", opts.remoteSocket);
  args.push("--json", ...explicitHdcArgs(deps.hdc));
  const r = await (deps.runScript ?? runHnScript)(SCRIPT, args, {
    timeoutMs: opts.timeoutMs,
    signal: opts.signal,
  });
  return toEnvelope("webview-devtools", r, { target, artifactDir });
}
