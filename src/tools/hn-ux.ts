import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { runUxPipeline } from "../core/hn-ux.js";

// hn_ux_audit: harmony-next 技能包 ux_audit_pipeline.py 的 MCP 包装(DevEco 私有
// UxTestService 引擎)。三个子命令:
// - doctor: 环境自检(hdc/UxTestService/ux 专用 Python), 无设备不报错;
// - capture-audit: 设备采集 + 审计一站式(需在线设备);
// - audit: 对已有证据(layout+screenshot 或 evidence summary)离线重跑审计。
// 返回信封 { action, artifactDir, bundleName, overall, rules, notApplicable,
// reportPath, raw }: overall/rules 已语义归一(UTS 黑话折算为 pass/issue/
// not_applicable/blocked/error), agent 只看 overall 与 rules[].verdict 分支。

export const hnUxTools: ToolDefinition[] = [
  defineTool({
    name: "hn_ux_audit",
    description: "HarmonyOS UI/UX 规则审计(harmony-next ux_audit_pipeline 包装 DevEco UxTestService): doctor=环境自检(无设备不报错); capture-audit=设备采集+审计一站式(需在线设备); audit=对已有证据离线重跑。返回信封 { action, artifactDir, bundleName, overall, rules, notApplicable, reportPath, raw }: overall/rules 已语义归一(UTS.xxxx 折算为 pass/issue/not_applicable/blocked/error), agent 只看 overall 与 rules[].verdict; 脚本原始顶层 JSON(含 blocked 缺配置/异常字段)完整保留在 raw。",
    inputSchema: {
      action: z.enum(["doctor", "capture-audit", "audit"]).describe("doctor=环境自检; capture-audit=采集+审计(需设备); audit=离线审计已有证据"),
      target: z.string().optional().describe("设备目标(127.0.0.1:port), 仅 capture-audit 使用, 省略=唯一在线设备"),
      artifactDir: z.string().optional().describe("证据产物目录, 省略=系统临时目录 hn-ux-<时间戳>"),
      evidenceSummary: z.string().optional().describe("audit: device_evidence_bundle 的 summary.json 路径(内含 layout/screenshot artifacts), 给出后忽略 layout/screenshot"),
      layout: z.string().optional().describe("audit: 布局 JSON 路径(未给 evidenceSummary 时与 screenshot 一起必填)"),
      screenshot: z.string().optional().describe("audit: 截图 PNG 路径"),
      bundle: z.string().optional().describe("前台应用包名, 省略=从证据推断(推断失败时脚本会 blocked 并提示显式传入)"),
      uxServiceRoot: z.string().optional().describe("UxTestService 目录路径(内含 ux_detect.py 与 checkMethod/, 即 <DevEco>/tools/UxTestService); 显式传参原样直传, 省略=从 toolchain().deveco 默认解析(目录存在才传)"),
      testCodes: z.array(z.string()).optional().describe("UxTestService 规则码(逐个透传 --test-code), 省略=脚本默认 8 条"),
      python: z.string().optional().describe("包装脚本解释器覆盖(ux 依赖 cv2/numpy/scipy/skimage, 建议指向专用 venv); 优先级: 本参数 > GODFREYHUB_UX_PYTHON > GODFREYHUB_HN_PYTHON > python"),
      language: z.enum(["zh", "en"]).default("zh").describe("UxTestService 结果语言, 默认 zh; 注意 zh-CN 会在部分规则触发缺 message key 异常, 不要用"),
      timeoutMs: z.number().optional().describe("包装脚本进程超时, 默认 300000"),
    },
    handler: async (args, ctx) => runUxPipeline(args, { signal: ctx.signal }),
  }),
];
