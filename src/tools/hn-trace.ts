import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { captureTrace, auditTrace, doctorTrace } from "../core/hn-trace.js";

// hn_trace: HarmonyOS hitrace 采集与离线审计(依赖 harmony-next 技能包的
// profiler_trace_audit.py 做 trace_streamer 转换, 采集为本仓自实现)。

const targetProp = z.string().optional().describe("设备目标(127.0.0.1:port), 省略=唯一在线设备");

export const hnTraceTools: ToolDefinition[] = [
  defineTool({
    name: "hn_trace",
    description: "hitrace 采集与离线审计: doctor=检查 trace_streamer 可用性 / capture=设备端 hitrace 采集 trace 落地本地 / audit=profiler_trace_audit.py 将 trace 转为 SQLite 并产出性能证据 JSON(重复审计同一 outputDir 传 force=true)。",
    inputSchema: {
      action: z.enum(["doctor", "capture", "audit"]).describe("doctor=检查 trace_streamer; capture=设备端采集; audit=离线转换审计"),
      target: targetProp,
      tags: z.string().optional().describe("capture: hitrace tag, 空格/逗号分隔, 默认 ability; 每个 token 仅允许 [A-Za-z0-9_-]"),
      durationSec: z.number().optional().describe("capture: 采集秒数(1..60), 默认 5"),
      bufferKb: z.number().optional().describe("capture: 环形缓冲区 KB, 默认 4096"),
      artifactDir: z.string().optional().describe("capture: trace 落地目录, 省略=系统临时目录 godfreyhub-hn/hn-trace-<时间戳>"),
      input: z.string().optional().describe("audit: 输入 trace 文件路径(.ftrace/.htrace/bytrace/rawtrace)"),
      outputDir: z.string().optional().describe("audit: 审计产物目录, 省略=脚本默认 .hvigor/outputs/profiler-trace-audit-*"),
      thresholdMs: z.number().array().optional().describe("audit: 慢 span 阈值(ms), 可多个, 省略=脚本默认 16.67/33.34"),
      force: z.boolean().optional().describe("audit: 覆盖 outputDir 下已存在的 trace.db; 缺省时重复审计同一目录会被脚本 blocked(database already exists)"),
      timeoutMs: z.number().optional().describe("audit: 上游脚本超时 ms, 默认 600000"),
    },
    handler: async (args, ctx) => {
      if (args.action === "capture") {
        return captureTrace({
          target: args.target || undefined,
          tags: args.tags || undefined,
          durationSec: args.durationSec,
          bufferKb: args.bufferKb,
          artifactDir: args.artifactDir || undefined,
          signal: ctx.signal,
        });
      }
      if (args.action === "doctor") {
        return doctorTrace({ timeoutMs: args.timeoutMs, signal: ctx.signal });
      }
      if (!args.input) throw new Error("audit 需要 input(trace 文件路径)");
      return auditTrace({
        input: args.input,
        outputDir: args.outputDir || undefined,
        thresholdMs: args.thresholdMs,
        force: args.force,
        timeoutMs: args.timeoutMs,
        signal: ctx.signal,
      });
    },
  }),
];
