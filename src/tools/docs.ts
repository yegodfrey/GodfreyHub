import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { searchDocuments, getDocument } from "../core/hdk.js";
import { verifyUi, recordLog, saveScreenshots, verifyEnv } from "../core/verify.js";
import { resolveProject } from "./shared.js";

// hdk_* 离线文档 + verify 视觉校验(3 个工具)

export const docsTools: ToolDefinition[] = [
  defineTool({
    name: "hdk_search_documents",
    description: "HarmonyOS + 仓颉离线文档全文检索(本地 FTS5, 无需外网)。中文按词元分词匹配(与索引同款词典, 支持 1-2 字词与术语整词), 英文 token 支持驼峰/数字边界拆词(如 'String' 可命中 getStringSync)。返回 id/file/title/category/snippet。",
    inputSchema: {
      query: z.string().describe("关键词(中英文, 词元匹配)"),
      limit: z.number().optional().describe("默认 10"),
      category: z.string().optional().describe("如 harmonyos-guides / harmonyos-references"),
    },
    handler: async (args) => searchDocuments(args.query, args.limit ?? 10, args.category ?? ""),
  }),

  defineTool({
    name: "hdk_get_document",
    description: "按 id 分页读取离线文档 Markdown 正文(id 来自 hdk_search_documents)。结果含 nextOffset 时继续翻页。",
    inputSchema: {
      docId: z.string(),
      offset: z.number().optional().describe("起始偏移, 默认 0"),
      maxChars: z.number().optional().describe("默认 20000"),
    },
    handler: async (args) => getDocument(args.docId, args.offset, args.maxChars),
    markdown: true,
  }),

  defineTool({
    name: "verify",
    description: "视觉模型 UI 校验: action=run 用自然语言测试计划驱动 click/swipe/input 并判定 / log 取任务日志 / screenshots 导出每步截图。run 需 UI_VERIFY_* 环境变量。",
    inputSchema: {
      action: z.enum(["run", "log", "screenshots"]),
      testPlan: z.string().optional().describe("run: 测试步骤与预期(中文)"),
      bundleName: z.string().optional().describe("run: 被测包名, 省略=当前项目"),
      ability: z.string().optional().describe("run: 启动 Ability"),
      freshStart: z.boolean().optional().describe("run: 先强停再启动"),
      maxSteps: z.number().optional().describe("run: 最大步数, 默认 15"),
      id: z.string().optional().describe("log/screenshots: 任务 id"),
      dirname: z.string().optional().describe("screenshots: 保存目录"),
    },
    handler: async (args, ctx) => {
      if (args.action === "log") {
        if (!args.id) throw new Error("log 需要 id");
        return recordLog(args.id);
      }
      if (args.action === "screenshots") {
        if (!args.id || !args.dirname) throw new Error("screenshots 需要 id 与 dirname");
        return { files: saveScreenshots(args.id, args.dirname) };
      }
      // run
      if (!verifyEnv()) throw new Error("verify_ui 未配置: 需环境变量 UI_VERIFY_BASE_URL / UI_VERIFY_API_KEY / UI_VERIFY_MODEL_NAME(OpenAI 兼容视觉模型)");
      if (!args.testPlan) throw new Error("run 需要 testPlan");
      let bundle = args.bundleName ?? "";
      let ability = args.ability ?? "";
      if (!bundle) {
        const r = resolveProject();
        if ("error" in r) throw new Error(r.error);
        bundle = r.entry.bundle;
        ability = ability || r.entry.ability;
      }
      const rec = await verifyUi({
        bundleName: bundle,
        ability: ability || undefined,
        testPlan: args.testPlan,
        freshStart: args.freshStart,
        maxSteps: args.maxSteps,
        signal: ctx.signal,
      });
      return { id: rec.id, successPart: rec.successPart, failPart: rec.failPart, finished: rec.finished, steps: rec.steps.length };
    },
  }),
];
