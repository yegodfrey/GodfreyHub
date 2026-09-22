import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { loadConfig } from "../core/registry.js";
import { codeartsAsk, DEFAULT_CODEARTS_MODEL, DEFAULT_CODEARTS_TIMEOUT_SEC } from "../core/codearts-ask.js";

// codearts_ask: 向 CodeArts GLM 模型(GLM-5.2-ArkTS-SPARK)提问的家族工具。
// 凭据(CODEARTS_CLI_AK/SK)刻意不在 schema——由 core 层从 HKCU\Environment 读取后
// 直接注入子进程 env, 调用方永远不经手; 数据目录与超时也全部封在 core 内部钉死。

export const codeartsAskTools: ToolDefinition[] = [
  defineTool({
    name: "codearts_ask",
    description:
      "向 CodeArts GLM 模型(GLM-5.2-ArkTS-SPARK, " + DEFAULT_CODEARTS_MODEL + ")提问 ArkTS/HarmonyOS 问题, " +
      "可附源码文件作为上下文(逐个以 -f 注入)。凭据(CODEARTS_CLI_AK/SK)由工具内部从用户环境变量读取注入, " +
      "调用方不经手; CLI 数据目录钉到 %USERPROFILE%\\.codeartsdoer\\data 独立隔离; " +
      "超时(默认 " + DEFAULT_CODEARTS_TIMEOUT_SEC + "s)自动杀进程树; 返回值中的任何凭据回显均已 [REDACTED]。 " +
      "返回 { model, thinking, files, answer, exitCode, durationMs, cliExe, dataDir }。",
    inputSchema: {
      question: z.string().min(1).describe("要问的问题; 建议给出明确的 ArkTS/HarmonyOS 语境(版本/API/期望行为)"),
      files: z.array(z.string().min(1)).max(20).optional()
        .describe("随问题附上的源码文件: 仓库相对路径数组(相对当前在册项目 repoRoot; 也接受绝对路径), 逐个校验存在"),
      thinking: z.boolean().default(true).describe("启用思考模式(--thinking), 默认 true"),
      model: z.string().optional().describe("模型(provider/id), 默认 " + DEFAULT_CODEARTS_MODEL),
      timeoutSec: z.number().int().positive().max(3600).optional()
        .describe("超时秒数, 默认 " + DEFAULT_CODEARTS_TIMEOUT_SEC + "; 超时自动杀进程树"),
    },
    handler: async (args, ctx) => {
      // 仓库相对路径的解析基准: 当前在册项目的 repoRoot(未注册时不设基准,
      // 相对路径会得到可操作的报错提示)。
      const cfg = loadConfig();
      const rootDir = cfg.lastProject ? cfg.projects[cfg.lastProject]?.repoRoot : undefined;
      return codeartsAsk({
        question: args.question,
        files: args.files,
        thinking: args.thinking,
        model: args.model,
        timeoutSec: args.timeoutSec,
        rootDir,
        signal: ctx.signal,
      });
    },
  }),
];
