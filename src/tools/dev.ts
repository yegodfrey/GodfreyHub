import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { projectRootHint, curHarmonyRoot } from "./shared.js";
import {
  lspHover, lspDefinition, lspReferences, lspSignatureHelp, lspDocumentSymbols,
  lspDiagnosticsMany, cppDiagnostics, workspaceSymbolsOffline, documentSymbolsOffline,
  type LspPos,
} from "../core/lsp.js";

// dev_* / lsp_*: DevEco 同源静态检查与语义导航(6 个工具)
// 全部支持请求级取消(signal 贯穿 LSP 请求与就绪轮询)。

const posProps = {
  filePath: z.string().describe("ArkTS(.ets/.ts) 文件绝对路径"),
  line: z.number().describe("行号(0 基)"),
  character: z.number().describe("列号(0 基)"),
  projectRoot: z.string().optional().describe("工程根(省略=自动向上找 build-profile.json5)"),
};

function requirePos(args: { line: number; character: number }): LspPos {
  return { line: args.line, character: args.character };
}

export const devTools: ToolDefinition[] = [
  defineTool({
    name: "dev_check_ets_files",
    description: "ArkTS 静态检查: 对 .ets/.ts 文件返回 DevEco 同源语言服务(ace-server 无头)的诊断(语法/类型错误)。初始化选项从 .hvigor/cache/project-config.json 还原模块表(需先 DevEco 打开或 hub_build 生成缓存)；冷会话首次调用需完成模块装载(约 10-60s)，文件批量并行等待，未在超时前出结果的文件列入 pending(不伪造空诊断)；已出结果的按文件缓存，重跑秒回。timeoutMs 为就绪等待与批量诊断的总等待超时。",
    inputSchema: {
      files: z.array(z.string()).describe("待检查文件绝对路径列表"),
      timeoutMs: z.number().optional().describe("就绪等待+批量诊断总超时, 默认 120000"),
    },
    handler: async (args, ctx) => {
      if (args.files.length === 0) throw new Error("缺少 files 参数");
      const results = await lspDiagnosticsMany(args.files, {
        projectRoot: projectRootHint(undefined),
        timeoutMs: args.timeoutMs,
        signal: ctx.signal,
      });
      const out: Record<string, any[]> = {};
      const pending: string[] = [];
      let totalErr = 0;
      for (const f of args.files) {
        const r = results[f];
        if (!r) { pending.push(f); continue; }
        out[f] = r.diagnostics;
        if (r.pending) pending.push(f);
        totalErr += r.diagnostics.filter((x: any) => x.severity === 1).length;
      }
      return { files: out, totalErrors: totalErr, pending: pending.length ? pending : undefined };
    },
  }),

  defineTool({
    name: "dev_check_cpp_files",
    description: "C/C++ 静态检查: 用 DevEco 内置 clangd 返回诊断，自动发现 hvigor 生成的共享或模块级 compile_commands.json。未在超时前分析的文件列入 pending(不伪造空诊断)。",
    inputSchema: {
      files: z.array(z.string()).describe("待检查 C/C++ 文件绝对路径列表"),
      timeoutMs: z.number().optional().describe("诊断等待超时, 默认 120000"),
    },
    handler: async (args, ctx) => {
      if (args.files.length === 0) throw new Error("缺少 files 参数");
      const results = await cppDiagnostics(args.files, {
        projectRoot: projectRootHint(undefined),
        timeoutMs: args.timeoutMs,
        signal: ctx.signal,
      });
      const out: Record<string, any[]> = {};
      const pending: string[] = [];
      let totalErr = 0;
      for (const f of args.files) {
        const r = results[f];
        if (!r) { pending.push(f); continue; }
        out[f] = r.diagnostics;
        if (r.pending) pending.push(f);
        totalErr += r.diagnostics.filter((x: any) => x.severity === 1).length;
      }
      return { files: out, totalErrors: totalErr, pending: pending.length ? pending : undefined };
    },
  }),

  defineTool({
    name: "lsp_hover",
    description: "光标处悬停信息: 符号类型/文档, 调用处附带给定参数列表签名帮助。",
    inputSchema: posProps,
    handler: async (args, ctx) => {
      const pos = requirePos(args);
      const root = projectRootHint(args.projectRoot);
      const [hover, signature] = await Promise.all([
        lspHover(args.filePath, pos, root, ctx.signal),
        lspSignatureHelp(args.filePath, pos, root, ctx.signal).catch(() => null),
      ]);
      return { hover, signature };
    },
  }),

  defineTool({
    name: "lsp_definition",
    description: "跳转定义: 返回符号定义位置(文件+行号)。",
    inputSchema: posProps,
    handler: async (args, ctx) =>
      lspDefinition(args.filePath, requirePos(args), projectRootHint(args.projectRoot), ctx.signal),
  }),

  defineTool({
    name: "lsp_references",
    description: "查找引用: 返回符号全部引用位置(含声明)。",
    inputSchema: posProps,
    handler: async (args, ctx) =>
      lspReferences(args.filePath, requirePos(args), projectRootHint(args.projectRoot), ctx.signal),
  }),

  defineTool({
    name: "lsp_symbols",
    description: "符号查找: 给 query=全工程按名称搜索(离线); 给 filePath=该文件符号表(struct/class/function 及行号)。",
    inputSchema: {
      query: z.string().optional().describe("符号名子串(全工程搜索)"),
      filePath: z.string().optional().describe("文件路径(文件符号表模式)"),
      root: z.string().optional().describe("工程根, 省略=当前项目"),
      maxResults: z.number().optional().describe("默认 50"),
      projectRoot: z.string().optional(),
    },
    handler: async (args) => {
      const fp = args.filePath ?? "";
      if (fp) {
        const viaLsp = await lspDocumentSymbols(fp, projectRootHint(args.projectRoot || undefined));
        if (Array.isArray(viaLsp) && viaLsp.length > 0) return viaLsp;
        // LSP 不可用/空结果时退回离线正则
        return documentSymbolsOffline(fs.readFileSync(path.resolve(fp), "utf8"));
      }
      const query = args.query ?? "";
      if (!query) throw new Error("query(全工程搜索) 与 filePath(文件符号表) 至少给一个");
      const root = args.root || curHarmonyRoot();
      if (!root) throw new Error("缺少 root(或先 hub_set_project)");
      return workspaceSymbolsOffline(root, query, args.maxResults ?? 50);
    },
  }),
];
