import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { captureEvidence, doctorEvidence, webviewDevtoolsEvidence } from "../core/hn-evidence.js";

// hn_evidence: harmony-next 技能包设备证据采集(单一工具按 action 分发)。
// doctor=环境自检(定位 hdc 并列出在线目标, 无设备不报错); capture=采集截图/布局/
// 应用状态/有界日志证据包; webview-devtools=诊断 ArkWeb DevTools socket。
// 脚本顶层 JSON 原样透传进返回信封(decision/failureCode/artifacts 等不吞)。

export const hnEvidenceTools: ToolDefinition[] = [
  defineTool({
    name: "hn_evidence",
    description:
      "设备证据采集(harmony-next 技能包): doctor=环境自检(定位 hdc 并列出在线目标, 不要求设备在线); " +
      "capture=采集截图/布局/应用状态/有界日志证据包到 artifactDir; " +
      "webview-devtools=诊断 ArkWeb DevTools socket(--remote-socket 可选, fport 转发 + HTTP 探测)。 " +
      "返回 { action, target?, artifactDir?, ...脚本顶层 JSON }(decision/failureCode/summary/artifacts 等原样透传)。",
    inputSchema: {
      action: z.enum(["doctor", "capture", "webview-devtools"]),
      target: z.string().optional().describe("设备目标(127.0.0.1:port), 省略=唯一在线设备"),
      artifactDir: z.string().optional().describe("证据产物目录(capture/webview-devtools 用), 省略=系统临时目录按时间戳隔离"),
      remoteSocket: z.string().optional().describe("webview-devtools: webview_devtools_remote_<pid> 或 localabstract:webview_devtools_remote_<pid>, 省略=自动枚举"),
      timeoutMs: z.number().optional().describe("脚本执行超时毫秒, 默认 120000"),
    },
    handler: async (args, ctx) => {
      if (args.action === "doctor") {
        return doctorEvidence({ timeoutMs: args.timeoutMs, signal: ctx.signal });
      }
      if (args.action === "capture") {
        return captureEvidence({
          target: args.target || undefined,
          artifactDir: args.artifactDir || undefined,
          timeoutMs: args.timeoutMs,
          signal: ctx.signal,
        });
      }
      return webviewDevtoolsEvidence({
        target: args.target || undefined,
        artifactDir: args.artifactDir || undefined,
        remoteSocket: args.remoteSocket || undefined,
        timeoutMs: args.timeoutMs,
        signal: ctx.signal,
      });
    },
  }),
];
