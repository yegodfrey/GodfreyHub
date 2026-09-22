#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
  type Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import type { ZodObject, ZodRawShape } from "zod";
import { closeHdk } from "./core/hdk.js";
import { loadConfig } from "./core/registry.js";
import { VERSION } from "./version.js";
import type { ToolDefinition } from "./tools/types.js";
import { hubTools } from "./tools/hub.js";
import { emulatorTools } from "./tools/emulator.js";
import { devTools } from "./tools/dev.js";
import { deviceUiTools } from "./tools/device-ui.js";
import { docsTools } from "./tools/docs.js";
import { linkageTools } from "./tools/linkage-tools.js";
import { ideTools } from "./tools/ide-tools.js";
import { hnEvidenceTools } from "./tools/hn-evidence.js";
import { hnTraceTools } from "./tools/hn-trace.js";
import { hnUxTools } from "./tools/hn-ux.js";
import { hnCdpTools } from "./tools/hn-cdp.js";
import { codeartsAskTools } from "./tools/codearts-ask.js";

// GodfreyHub — 自包含 HarmonyOS 超级 MCP(全原生, 零子服务代理)
//   hub_*  项目/git 一键同步/构建+同名实例部署   emu_* 模拟器生命周期+窗口命名
//   dev_*  ArkTS/C++ 静态检查(DevEco 语言服务无头)  lsp_* 语义导航(符号查找, IDE 索引并入)
//   ui_*   设备 UI 自动化(hdc uitest)             hilog_* 日志/崩溃采集
//   hdk_*  离线文档库 FTS5 检索(直查本地索引)      verify 视觉模型 UI 自动化校验
//   ide_*  DevEco 26 内置 MCP 桥接(IDE 打开文件/打开的编辑器; 符号搜索并入 lsp_symbols)
//   hn_*   harmony-next 技能包接入(证据采集/hitrace 采集审计/UX 规则审计/WebView CDP)
//   codearts_ask  问 CodeArts GLM 模型(ArkTS/HarmonyOS 问答, 凭据封入工具内部)
//   深度联动: ui_locate_code(UI→源码) hilog_locate_crash(崩溃→源码) hub_check(诊断+构建错误合并)
//
// 工具注册表按域拆分在 src/tools/, 每个工具 = zod schema + 类型化 handler。
// 参数校验在分发层统一执行(zod), 客户端传错类型会得到可读错误而不是 NaN/undefined
// 静默传播; AbortSignal(ctx.signal)贯穿所有长任务。

const ALL_TOOLS: ToolDefinition[] = [
  ...hubTools,
  ...emulatorTools,
  ...devTools,
  ...deviceUiTools,
  ...docsTools,
  ...linkageTools,
  ...ideTools,
  ...hnEvidenceTools,
  ...hnTraceTools,
  ...hnUxTools,
  ...hnCdpTools,
  ...codeartsAskTools,
];

// 名称唯一性在启动时强制: 注册表拆成多文件后, 拼写冲突必须在进程启动瞬间暴露。
const seenNames = new Set<string>();
for (const tool of ALL_TOOLS) {
  if (seenNames.has(tool.name)) throw new Error("工具重名: " + tool.name);
  seenNames.add(tool.name);
}

const server = new Server(
  { name: "godfreyhub-mcp", version: VERSION },
  { capabilities: { tools: {} } },
);

// 按需裁剪: config.disabledTools 支持通配(如 "hdk_*"), 命中的工具不进清单
function toolDisabled(name: string, patterns: string[] | undefined): boolean {
  if (!patterns || patterns.length === 0) return false;
  const re = new RegExp("^" + patterns.map((p) => p.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")).join("$|^") + "$");
  return re.test(name);
}

function toMcpTool(def: ToolDefinition): Tool {
  return {
    name: def.name,
    description: def.description,
    inputSchema: z.toJSONSchema(z.object(def.inputSchema)) as Tool["inputSchema"],
  };
}

server.setRequestHandler(ListToolsRequestSchema, async () => {
  const disabled = loadConfig().disabledTools;
  return { tools: ALL_TOOLS.filter((t) => !toolDisabled(t.name, disabled)).map(toMcpTool) };
});

function okText(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}
function okMarkdown(md: string) {
  return { content: [{ type: "text" as const, text: md }] };
}
function errText(msg: string) {
  return { content: [{ type: "text" as const, text: msg }], isError: true as const };
}

server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
  const name = request.params.name;
  const rawArgs = (request.params.arguments ?? {}) as Record<string, unknown>;
  const def = ALL_TOOLS.find((t) => t.name === name);
  if (!def) return errText("未知工具: " + name);
  try {
    // zod 统一校验/剥离: 客户端参数不可信, 校验错误原文回传(带字段路径)。
    const schema: ZodObject<ZodRawShape> = z.object(def.inputSchema);
    const parsed = schema.parse(rawArgs);
    const data = await def.handler(parsed as never, { signal: extra.signal });
    return def.markdown ? okMarkdown(data as string) : okText(data);
  } catch (e) {
    if (e instanceof z.ZodError) {
      const issues = e.issues.map((i) => i.path.join(".") + ": " + i.message).join("; ");
      return errText("[" + name + "] 参数校验失败: " + issues);
    }
    return errText("[" + name + "] " + (e instanceof Error ? e.message : String(e)));
  }
});

// ---------- 启动 ----------

process.on("uncaughtException", (e) => console.error("[godfreyhub] uncaught:", e));
process.on("unhandledRejection", (e) => console.error("[godfreyhub] unhandled:", e));
// 退出清理顺序关键: 必须先 closeHdk() 再退出。better-sqlite3 的 Statement 在
// 进程退出清理阶段(DisposeIsolate)析构时会调用 node::RemoveEnvironmentCleanupHook,
// 若 env 已销毁则原生断言崩溃(Assertion failed: (env) != nullptr, 2026-08-18 实证,
// 崩溃栈 Statement::scalar deleting destructor)。多 agent 并发 hdk 查询使退出瞬间
// 存活 Statement 数量激增, 大幅提高崩溃概率。db.close() 在 C++ 层同步释放全部
// Statement, 之后再退出即干净关闭(客户端可正常重启连接而非 failed 卡死)。
process.on("exit", () => {
  try { closeHdk(); } catch { /* 已关闭 */ }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[godfreyhub] MCP server ready (stdio, native, " + ALL_TOOLS.length + " tools)");
}
main().catch((e) => { console.error(e); process.exit(1); });
