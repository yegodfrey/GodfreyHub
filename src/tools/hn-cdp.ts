import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { hnCdpProbe, hnCdpEval } from "../core/hn-cdp.js";

// hn_cdp: ArkWeb/WebView Chrome DevTools Protocol 通道(probe=诊断枚举, eval=页面内执行)。
// 安全边界: expression 在 WebView 页面内执行, 返回内容可能携带页面数据(cookie/DOM/表单等),
// 调用方(上层 agent)对落地产物负脱敏责任——本工具只做通道, 不做内容审计。

export const hnCdpTools: ToolDefinition[] = [
  defineTool({
    name: "hn_cdp",
    description:
      "ArkWeb/WebView CDP 通道: probe=枚举 WebView DevTools socket、分类陈旧 fport、有界端口转发与 HTTP 探测, 成功时给出 webSocketDebuggerUrl; eval=对该 URL 执行 Runtime.evaluate(页内 JS)。" +
      "安全提示: expression 在页面内执行, 返回内容可能含页面数据, 调用方(上层 agent)对落地产物负脱敏责任。",
    inputSchema: {
      action: z.enum(["probe", "eval"]),
      // probe 参数
      target: z.string().optional().describe("probe: 设备目标(127.0.0.1:port), 省略=唯一在线设备"),
      artifactDir: z.string().optional().describe("probe: 证据产物目录, 省略=系统临时目录 hn-cdp 前缀隔离"),
      remoteSocket: z.string().optional().describe("probe: 指定 webview_devtools_remote_<pid>(多 WebView 时必填, 可带 localabstract: 前缀)"),
      // eval 参数
      webSocketUrl: z.string().optional().describe("eval: probe 结果里的 webSocketDebuggerUrl(ws://...)"),
      expression: z.string().optional().describe("eval: 页面内执行的 JS 表达式"),
      awaitPromise: z.boolean().optional().describe("eval: 等待 Promise 结果, 默认 true"),
      returnByValue: z.boolean().optional().describe("eval: 按值返回(可 JSON 化), 默认 true"),
      timeoutMs: z.number().optional().describe("probe 默认 120000 / eval 默认 15000"),
    },
    handler: async (args) => {
      if (args.action === "probe") {
        return hnCdpProbe({
          target: args.target || undefined,
          artifactDir: args.artifactDir || undefined,
          remoteSocket: args.remoteSocket || undefined,
          timeoutMs: args.timeoutMs,
        });
      }
      if (!args.webSocketUrl) throw new Error("action=eval 需要 webSocketUrl(hn_cdp probe 结果中的 webSocketDebuggerUrl)");
      if (!args.expression) throw new Error("action=eval 需要 expression");
      if (!/^wss?:\/\//i.test(args.webSocketUrl)) throw new Error(`webSocketUrl 必须以 ws:// 或 wss:// 开头: ${args.webSocketUrl}`);
      return hnCdpEval({
        webSocketUrl: args.webSocketUrl,
        expression: args.expression,
        awaitPromise: args.awaitPromise,
        returnByValue: args.returnByValue,
        timeoutMs: args.timeoutMs,
      });
    },
  }),
];
