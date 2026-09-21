import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import {
  defaultArtifactDir, pickTarget, resolveExplicitHdc, runHnScript, type HnScriptResult,
} from "./hn-skill.js";
import { toolchain } from "./paths.js";
import { tail } from "./proc.js";

// hn_ux_audit 的核心: 包装 harmony-next 技能包的 scripts/ux_audit_pipeline.py
// (DevEco 私有 UxTestService 引擎的非交互外壳, --json 输出)。本模块负责三件事:
// 1) 子命令 argv 构造(纯函数, buildUxPipelineArgs);
// 2) 子进程执行(复用 hn-skill.runHnScript: 根解析/解释器/超时/取消/JSON 提取);
// 3) 结果语义归一化(normalizeUxSummary): 把 UxTestService 的 test_state 数字与
//    UTS.xxxx 规则黑话折算成 agent 可直接分支的 overall/rules, 原始顶层 JSON 仍
//    完整保留在信封 raw 里, 不吞任何 failureCode/缺配置字段。

/** ux_audit_pipeline.py 依赖 cv2/numpy/scipy/skimage 等重包, 包装脚本本身只用标准库。 */
export const UX_PIPELINE_SCRIPT = "ux_audit_pipeline.py";

/** 单条规则的归一化判定。 */
export type UxVerdictState = "pass" | "issue" | "not_applicable" | "blocked" | "error";

export interface UxRuleVerdict {
  /** 规则码(ux_summary.json items[].code, 如 UTS.0306); 空缺时退回 subRuleName, 再退 "unknown"。 */
  ruleId: string;
  /** 脚本原始 test_state 数字; 缺失/不可解析为 null。 */
  testState: number | null;
  verdict: UxVerdictState;
  /** detail.Issues 命中数(仅 >0 时携带)。 */
  issues?: number;
  /** 特例归类原因(仅 UTS 覆写规则携带)。 */
  reason?: string;
  /** 特例归类的处置提示。 */
  hint?: string;
}

export interface UxVerdict {
  /** 最坏判定: 有 error→error, 否则有 blocked→blocked, 否则有 issue→issue, 否则 pass。 */
  overall: "pass" | "issue" | "blocked" | "error";
  rules: UxRuleVerdict[];
  /** verdict 为 not_applicable 的规则(含原生 test_state=2 与 UTS.0306 归类)。 */
  notApplicable: UxRuleVerdict[];
}

/** MCP 工具返回信封: agent 只消费 overall/rules, 排障时再看 raw。 */
export interface UxAuditEnvelope {
  action: "doctor" | "capture-audit" | "audit";
  artifactDir?: string;
  bundleName?: string;
  overall: UxVerdict["overall"];
  rules: UxRuleVerdict[];
  notApplicable?: UxRuleVerdict[];
  reportPath?: string;
  /** 脚本原始顶层 JSON(含 error/missingConfig/failureCode 等异常字段, 原样透传)。 */
  raw: unknown;
}

// test_state 映射(上游 summarize_ux_results 口径): 0=通过 1=问题 2=不适用
// 4=异常或场景不支持 5=执行错误。未知/缺失状态按 error 处理, 让 overall 取最坏以显式暴露。
function stateToVerdict(state: number | null): UxVerdictState {
  switch (state) {
    case 0: return "pass";
    case 1: return "issue";
    case 2: return "not_applicable";
    case 4: return "blocked";
    case 5: return "error";
    default: return "error";
  }
}

// 规则特例归类: 这两条规则的失败不代表产品缺陷, 按 ruleId 覆写 verdict
// (仅在原始判定非 pass 时生效——规则真实通过说明场景有效, 不做反向改判)。
const RULE_OVERRIDES: Record<string, { verdict: UxVerdictState; reason: string; hint?: string }> = {
  // dumpLayout 采集模式拿不到字体元数据, 该规则在离线审计下无从成立, 不是缺陷
  "UTS.0306": { verdict: "not_applicable", reason: "capture_mode_lacks_font_metadata" },
  // 前台状态失效导致本轮审计作废, 重跑前先把目标页拉到前台
  "UTS.0300": {
    verdict: "blocked",
    reason: "foreground_state_invalid",
    hint: "先 app_control start 使目标页前台再重试",
  },
};

function asString(v: unknown): string | undefined {
  return typeof v === "string" && v.length > 0 ? v : undefined;
}

function numOrNull(v: unknown): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && /^-?\d+$/.test(v.trim())) return Number(v.trim());
  return null;
}

// ux_summary.json 形如 { items: [...] }; 容错直接喂 ux_result.json 原始数组。
function summaryItems(summary: unknown): unknown[] {
  if (Array.isArray(summary)) return summary;
  if (summary && typeof summary === "object") {
    const items = (summary as Record<string, unknown>).items;
    if (Array.isArray(items)) return items;
  }
  return [];
}

function normalizeRule(item: unknown): UxRuleVerdict | null {
  if (!item || typeof item !== "object") return null;
  const rec = item as Record<string, unknown>;
  const detail = rec.detail && typeof rec.detail === "object"
    ? (rec.detail as Record<string, unknown>) : null;
  const ruleId = asString(rec.code) ?? asString(rec.subRuleName) ?? "unknown";
  const testState = numOrNull(rec.testState ?? rec.test_state);
  const rawVerdict = stateToVerdict(testState);
  const override = RULE_OVERRIDES[ruleId];
  const verdict = override && rawVerdict !== "pass" ? override.verdict : rawVerdict;
  const rule: UxRuleVerdict = { ruleId, testState, verdict };
  if (override && verdict === override.verdict) {
    rule.reason = override.reason;
    if (override.hint) rule.hint = override.hint;
  }
  const issues = typeof rec.issues === "number" ? rec.issues
    : Array.isArray(detail?.Issues) ? (detail.Issues as unknown[]).length : undefined;
  if (issues && issues > 0) rule.issues = issues;
  return rule;
}

function overallOf(verdicts: UxVerdictState[]): UxVerdict["overall"] {
  if (verdicts.includes("error")) return "error";
  if (verdicts.includes("blocked")) return "blocked";
  if (verdicts.includes("issue")) return "issue";
  return "pass";
}

/**
 * 语义归一化: 输入 ux_audit_pipeline 的 ux_summary.json(或 ux_result.json 原始数组),
 * 输出 overall/rules/notApplicable。纯函数, 不做 IO。
 */
export function normalizeUxSummary(summary: unknown): UxVerdict {
  const rules: UxRuleVerdict[] = [];
  for (const item of summaryItems(summary)) {
    const rule = normalizeRule(item);
    if (rule) rules.push(rule);
  }
  return {
    overall: overallOf(rules.map((r) => r.verdict)),
    rules,
    notApplicable: rules.filter((r) => r.verdict === "not_applicable"),
  };
}

/**
 * 顶层 payload.resultCounts(如 { "0": 3, "5": 1 })的最坏判定。仅在 ux_summary.json
 * 读取失败时作为 overall 兜底, 规则明细仍以 raw 为准。
 */
export function overallFromResultCounts(counts: unknown): UxVerdict["overall"] {
  const count = (state: string): number => {
    if (!counts || typeof counts !== "object") return 0;
    const v = (counts as Record<string, unknown>)[state];
    return typeof v === "number" ? v : 0;
  };
  if (count("5") > 0) return "error";
  if (count("4") > 0) return "blocked";
  if (count("1") > 0) return "issue";
  return "pass";
}

/** 传给 ux_audit_pipeline.py 的子命令参数(纯函数)。 */
export interface UxPipelineArgs {
  action: "doctor" | "capture-audit" | "audit";
  /** 仅 capture-audit 转发 --target(audit 子命令没有该 flag)。 */
  target?: string;
  artifactDir?: string;
  evidenceSummary?: string;
  layout?: string;
  screenshot?: string;
  bundle?: string;
  /** 透传重复的 --test-code。 */
  testCodes?: string[];
  language?: "zh" | "en";
  /** 已解析的 hdc 绝对路径(doctor/capture-audit 支持 --hdc, audit 不支持);
   *  显式规避上游 env:HDC 盲信目录导致的无 JSON 崩溃(见 hn-skill.explicitHdcArgs)。 */
  hdc?: string | null;
  /** 已解析的 UxTestService 目录(--ux-service-root, 三个子命令都接受)。 */
  uxServiceRoot?: string;
}

export function buildUxPipelineArgs(args: UxPipelineArgs): string[] {
  const argv = [args.action, "--json"];
  if (args.hdc) argv.push("--hdc", args.hdc);
  if (args.uxServiceRoot) argv.push("--ux-service-root", args.uxServiceRoot);
  if (args.action === "doctor") return argv;
  if (args.action === "capture-audit" && args.target) argv.push("--target", args.target);
  if (args.artifactDir) argv.push("--artifact-dir", args.artifactDir);
  if (args.bundle) argv.push("--bundle", args.bundle);
  for (const code of args.testCodes ?? []) argv.push("--test-code", code);
  argv.push("--language", args.language ?? "zh");
  if (args.action === "audit") {
    if (args.evidenceSummary) argv.push("--evidence-summary", args.evidenceSummary);
    else if (args.layout && args.screenshot) argv.push("--layout", args.layout, "--screenshot", args.screenshot);
  }
  return argv;
}

/** 运行接缝: interpreter/root 供测试注入 stub(node + 临时技能根), 信号由 MCP 请求层传入;
 *  hdc/deveco 供测试覆盖默认 toolchain 解析(null=不传对应 flag)。 */
export interface UxRunSeams {
  timeoutMs?: number;
  signal?: AbortSignal;
  interpreter?: string;
  root?: string;
  hdc?: string | null;
  deveco?: string | null;
}

/**
 * UxTestService 定位(两层设计, 对齐 hn-trace.traceStreamerArgs): 上游默认候选链是
 * macOS 视角(candidate_ux_services 只在 Darwin 下追加 /Applications/DevEco-Studio.app
 * 兜底, ux_audit_pipeline.py:144-145), Windows 必然落空; --ux-service-root 是
 * probe_ux_service 的首位捷径(行 160-162, 直接短路整条候选链), 期望形态是 UxTestService
 * 目录本身——内部须有 ux_detect.py 与 checkMethod/(行 149-157), 不做 Contents/tools 拼接
 * (那是 --deveco-app 的待遇, 行 121-125)。
 * 显式参数原样直传不校验(脚本探测给出可操作的 blocked 详情); 默认从 toolchain().deveco
 * 拼 <deveco>/tools/UxTestService, 目录存在才传。
 */
export function resolveUxServiceRoot(uxServiceRoot: string | undefined, deps: { deveco?: string | null } = {}): string | undefined {
  if (uxServiceRoot) return uxServiceRoot;
  const deveco = deps.deveco !== undefined ? deps.deveco : toolchain().deveco;
  if (!deveco) return undefined;
  const root = path.join(deveco, "tools", "UxTestService");
  return existsSync(root) ? root : undefined;
}

/** 直接执行一次流水线脚本(不解释结果), 供 argv 转发的 hermetic 回归使用。 */
export async function execUxPipeline(argv: string[], seams: UxRunSeams = {}): Promise<HnScriptResult> {
  return runHnScript(UX_PIPELINE_SCRIPT, argv, {
    timeoutMs: seams.timeoutMs ?? 300_000,
    signal: seams.signal,
    interpreter: seams.interpreter,
    root: seams.root,
  });
}

/** MCP 工具层参数(与 tools/hn-ux.ts 的 zod schema 一一对应)。 */
export interface UxToolRequest {
  action: "doctor" | "capture-audit" | "audit";
  target?: string;
  artifactDir?: string;
  evidenceSummary?: string;
  layout?: string;
  screenshot?: string;
  bundle?: string;
  testCodes?: string[];
  python?: string;
  /** UxTestService 目录路径(即 <DevEco>/tools/UxTestService), 显式传参优先于默认解析。 */
  uxServiceRoot?: string;
  language?: "zh" | "en";
  timeoutMs?: number;
}

function readJsonFile(pathStr: string): unknown {
  try {
    return JSON.parse(readFileSync(pathStr, "utf-8"));
  } catch {
    return null;
  }
}

// 规则明细不在顶层 stdout JSON 里, 落在 artifactDir 的 ux_summary.json:
// audit 顶层带 uxSummary 直达; capture-audit 顶层只有 auditSummary(指向 audit
// 阶段的 summary.json), 需两级跳转取其中的 uxSummary。读不到返回 null 由调用方兜底。
function readUxSummaryForPayload(p: Record<string, unknown>): unknown {
  const direct = asString(p.uxSummary);
  if (direct) return readJsonFile(direct);
  const auditSummary = asString(p.auditSummary);
  if (auditSummary) {
    const audit = readJsonFile(auditSummary);
    if (audit && typeof audit === "object") {
      const nested = asString((audit as Record<string, unknown>).uxSummary);
      if (nested) return readJsonFile(nested);
    }
  }
  return null;
}

/**
 * hn_ux_audit 工具主入口: 构造 argv → 执行 → 归一化为信封。
 * doctor/capture-audit/audit 分支见各段注释; 脚本 blocked payload(exit 2)原样透传不吞。
 */
export async function runUxPipeline(req: UxToolRequest, seams: UxRunSeams = {}): Promise<UxAuditEnvelope> {
  if (req.action === "audit" && !req.evidenceSummary && !(req.layout && req.screenshot)) {
    throw new Error("audit 需要 evidenceSummary 或 layout+screenshot 证据路径");
  }
  // 解释器优先级: 参数 python → GODFREYHUB_UX_PYTHON → runHnScript 内建
  // (GODFREYHUB_HN_PYTHON → "python"); ux 重依赖场景由维护者用专用 venv 注入。
  const interpreter = seams.interpreter ?? req.python ?? process.env.GODFREYHUB_UX_PYTHON ?? undefined;
  const timeoutMs = seams.timeoutMs ?? req.timeoutMs ?? 300_000;
  // --hdc 只在 doctor/capture-audit 透传(audit 子命令无该 flag), 默认从 toolchain 解析。
  const hdc = seams.hdc !== undefined ? seams.hdc : resolveExplicitHdc();
  // --ux-service-root 三个子命令都接受; 显式传参优先, 否则默认解析(存在才传)。
  const uxServiceRoot = resolveUxServiceRoot(req.uxServiceRoot, { deveco: seams.deveco });

  let argv: string[];
  if (req.action === "capture-audit") {
    const target = await pickTarget(req.target);
    argv = buildUxPipelineArgs({
      action: req.action,
      target,
      artifactDir: req.artifactDir ?? defaultArtifactDir("hn-ux"),
      bundle: req.bundle,
      testCodes: req.testCodes,
      language: req.language,
      hdc,
      uxServiceRoot,
    });
  } else if (req.action === "audit") {
    argv = buildUxPipelineArgs({
      action: "audit",
      artifactDir: req.artifactDir ?? defaultArtifactDir("hn-ux"),
      evidenceSummary: req.evidenceSummary,
      layout: req.layout,
      screenshot: req.screenshot,
      bundle: req.bundle,
      testCodes: req.testCodes,
      language: req.language,
      uxServiceRoot,
    });
  } else {
    argv = buildUxPipelineArgs({ action: "doctor", hdc, uxServiceRoot });
  }

  const r = await execUxPipeline(argv, { timeoutMs, signal: seams.signal, interpreter, root: seams.root });
  const payload = r.json;
  if (!payload || typeof payload !== "object") {
    throw new Error(`[${UX_PIPELINE_SCRIPT}] 未返回 JSON(exit ${r.code}):\n${tail(r.raw, 40)}`);
  }
  const p = payload as Record<string, unknown>;

  // doctor 无设备也不抛错: decision allowed/blocked 折算成 overall, JSON 透传。
  if (req.action === "doctor") {
    return { action: "doctor", overall: p.decision === "allowed" ? "pass" : "blocked", rules: [], raw: p };
  }
  // 脚本 exit 2 的 blocked payload(缺 UxTestService/依赖/证据等): 异常字段全在 raw, 不吞。
  if (p.decision === "blocked") {
    return {
      action: req.action,
      artifactDir: asString(p.artifactDir),
      bundleName: asString(p.bundleName),
      overall: "blocked",
      rules: [],
      raw: p,
    };
  }

  const summary = readUxSummaryForPayload(p);
  const verdict = summary !== null
    ? normalizeUxSummary(summary)
    : { overall: overallFromResultCounts(p.resultCounts), rules: [], notApplicable: [] as UxRuleVerdict[] };
  const envelope: UxAuditEnvelope = {
    action: req.action,
    artifactDir: asString(p.artifactDir),
    bundleName: asString(p.bundleName),
    overall: verdict.overall,
    rules: verdict.rules,
    reportPath: asString(p.report),
    raw: p,
  };
  if (verdict.notApplicable.length > 0) envelope.notApplicable = verdict.notApplicable;
  return envelope;
}
