import fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { projectRootHint, curHarmonyRoot, resolveProject } from "./shared.js";
import {
  cppDiagnostics, workspaceSymbolsOffline, documentSymbolsOffline, findHarmonyProjectRoot, type LspPos,
} from "../core/lsp.js";
import { ideMcpCall, ideMcpResultText } from "../core/idemcp.js";
import { devEcoCliCheckArkts, runDevecoCli } from "../core/devecocli.js";
import { checkResourceRefs, checkNativeDecls } from "../core/static-inspect.js";
const NL = String.fromCharCode(10);
const reAnsi = new RegExp(String.fromCharCode(27) + "\[[0-9;]*m", "g");

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
    description: "ArkTS 静态检查: 首选官方 DevEco CLI `check arkts`(真实类型/语法诊断, 需 devecocli 在 PATH, 可用 GODFREYHUB_DEVECOCLI_PATH 指定); CLI 不可用时直接报错并附安装指引。结果按文件返回, backend/durationMs 字段标明后端与耗时。",
    inputSchema: {
      files: z.array(z.string()).describe("待检查文件绝对路径列表"),
      timeoutMs: z.number().optional().describe("总等待超时, 默认 120000"),
    },
    handler: async (args, ctx) => {
      if (args.files.length === 0) throw new Error("缺少 files 参数");
      // 首选官方 CLI(本机实证能出 ace-server 级类型诊断, 2026-09-20 注入错误闭环)
      try {
        const root = path.resolve(findHarmonyProjectRoot(path.resolve(args.files[0])) ?? projectRootHint(undefined) ?? path.dirname(path.resolve(args.files[0])));
        const cliResult = await devEcoCliCheckArkts(args.files, root, args.timeoutMs ?? 120000, ctx.signal);
        if (cliResult.available) {
          const out: Record<string, any[]> = {};
          let totalErr = 0;
          for (const f of args.files) {
            const item = cliResult.items[path.resolve(f).replace(/\\/g, "/").toLowerCase()];
            out[f] = item?.diagnostics ?? [];
            totalErr += (item?.diagnostics ?? []).filter((d) => d.severity === 1).length;
          }
          return { files: out, totalErrors: totalErr, backend: "devecocli", durationMs: cliResult.durationMs };
        }
      } catch (e) {
        if (ctx.signal?.aborted) throw e;
        // 指引放前面, 错误细节截断在后: 细节再长也不会把修复指引截在半句
        throw new Error("官方 CLI 检查失败(安装: npm i -g @deveco/deveco-cli, 或设 GODFREYHUB_DEVECOCLI_PATH): " + String(e).slice(0, 300));
      }
      throw new Error("devecocli 不可用(安装: npm i -g @deveco/deveco-cli, 或设 GODFREYHUB_DEVECOCLI_PATH)");
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
    name: "lsp_symbols",
    description: "符号查找: 给 query=全工程按名称搜索(IDE 开着用语义索引并标注 source:ide-index, 否则离线正则); 给 filePath=该文件符号表(struct/class/function 及行号)。",
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
        return documentSymbolsOffline(fs.readFileSync(path.resolve(fp), "utf8"));
      }
      const query = args.query ?? "";
      if (!query) throw new Error("query(全工程搜索) 与 filePath(文件符号表) 至少给一个");
      // 符号搜索最佳实践: IDE 开着且未显式指定 root 时用其语义索引(覆盖依赖/SDK),
      // 不可用退回离线正则。显式 root 可能与 IDE 打开的工程不一致, 不走 IDE。
      if (!args.root) {
        try {
          const cur = resolveProject(undefined);
          if (!("error" in cur)) {
            const ide = await ideMcpCall("search_symbol", { q: query, projectPath: cur.entry.harmonyRoot.split(path.sep).join("/"), ...(args.maxResults ? { limit: args.maxResults } : {}) }, 15000);
            const text = ideMcpResultText(ide);
            if (!ide.isError && text.trim()) return { source: "ide-index", result: text };
          }
        } catch { /* IDE 未运行/未启用: 走离线 */ }
      }
      const root = args.root || curHarmonyRoot();
      if (!root) throw new Error("缺少 root(或先 hub_set_project)");
      return workspaceSymbolsOffline(root, query, args.maxResults ?? 50);
    },
  }),

  defineTool({
    name: "dev_check_style",
    description: "codelinter 规范检查(TS/ArkTS 风格/安全/性能规则集, 与类型检查互补)。返回 Issues/Errors/Warnings/Suggestions 汇总与明细。需 devecocli。",
    inputSchema: {
      path: z.string().describe("待检查文件或目录"),
      project: z.string().optional().describe("工程名, 省略=当前项目(决定 cwd 与工程根)"),
    },
    handler: async (args, ctx) => {
      const entry = resolveProject(args.project || undefined);
      if ("error" in entry) throw new Error(entry.error);
      const cwd = entry.entry.harmonyRoot;
      const r = await runDevecoCli(["check", "lint", path.resolve(args.path)], { cwd, timeoutMs: 180000, signal: ctx.signal });
      const out = (r.stdout + NL + r.stderr).replace(reAnsi, "").trim();
      const summary = out.split(NL).find((l) => l.includes("Summary:")) ?? "";
      return { summary, report: out.slice(0, 8000) };
    },
  }),

  defineTool({
    name: "dev_check_compat",
    description: "SDK 目标版本兼容扫描: 检查源码从 source-version 升级到 target-version 的兼容性问题(API 弃用/删除/行为变更)。版本名可先用 dev_compat_versions 列出。需 devecocli。",
    inputSchema: {
      sourceVersion: z.string().describe("当前 SDK 版本名, 如 HarmonyOS_26.0.0(26)_Release"),
      targetVersion: z.string().describe("目标 SDK 版本名"),
      files: z.array(z.string()).optional().describe("限定文件级扫描; 省略=工程级; modules=true 时按模块"),
      modules: z.boolean().optional().describe("按模块扫描"),
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args, ctx) => {
      const entry = resolveProject(args.project || undefined);
      if ("error" in entry) throw new Error(entry.error);
      const cwd = entry.entry.harmonyRoot;
      const cliArgs = ["check", "compat", "--source-version", args.sourceVersion, "--target-version", args.targetVersion];
      if (args.modules) cliArgs.push("--modules");
      if (args.files?.length) cliArgs.push(...args.files.map((f) => path.resolve(f)));
      const r = await runDevecoCli(cliArgs, { cwd, timeoutMs: 300000, signal: ctx.signal });
      const out = (r.stdout + NL + r.stderr).replace(reAnsi, "").trim();
      return { status: r.status, report: out.slice(0, 12000) };
    },
  }),

  defineTool({
    name: "dev_compat_versions",
    description: "列出 compat 扫描可用的 SDK 版本名(HarmonyOS_x.y(api)_阶段)。需 devecocli。",
    inputSchema: {
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args, ctx) => {
      const entry = resolveProject(args.project || undefined);
      if ("error" in entry) throw new Error(entry.error);
      const r = await runDevecoCli(["check", "compat", "versions"], { cwd: entry.entry.harmonyRoot, timeoutMs: 60000, signal: ctx.signal });
      const out = (r.stdout + NL + r.stderr).replace(reAnsi, "").trim();
      return { versions: out.split(NL).filter(Boolean) };
    },
  }),

  defineTool({
    name: "dev_signature_generate",
    description: "自动生成应用签名材料并写入工程配置(build-profile 的 signingConfigs)。默认不覆盖已有材料。用于 hub_build 出包前的签名缺口。",
    inputSchema: {
      force: z.boolean().optional().describe("覆盖已有本地签名材料"),
      teamId: z.string().optional().describe("团队 ID"),
      product: z.string().optional().describe("product 名, 默认 default"),
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args, ctx) => {
      const entry = resolveProject(args.project || undefined);
      if ("error" in entry) throw new Error(entry.error);
      const cliArgs = ["signature", "generate"];
      if (args.force) cliArgs.push("--force");
      if (args.teamId) cliArgs.push("--team-id", args.teamId);
      if (args.product) cliArgs.push("--product", args.product);
      const r = await runDevecoCli(cliArgs, { cwd: entry.entry.harmonyRoot, timeoutMs: 120000, signal: ctx.signal });
      const out = (r.stdout + NL + r.stderr).replace(reAnsi, "").trim();
      return { status: r.status, report: out.slice(0, 6000) };
    },
  }),

  defineTool({
    name: "dev_check_refs",
    description: "资源引用模块严格视图检查(IDE 同款规则): $r('app.*') 引用必须能被引用方所属模块或 AppScope 解析, 跨模块引用(如 common 引用 entry 资源)会报错。纯文件分析, 不依赖 LSP。",
    inputSchema: {
      files: z.array(z.string()).optional().describe("待检查 .ets 文件; 省略=全工程扫描"),
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args) => {
      const entry = resolveProject(args.project || undefined);
      if ("error" in entry) throw new Error(entry.error);
      const root = entry.entry.harmonyRoot;
      const files: string[] = args.files ?? [];
      if (files.length === 0) {
        const walk = (dir: string, depth: number): void => {
          if (depth < 0) return;
          let es: fs.Dirent[] = [];
          try { es = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
          for (const e of es) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) { if (!["node_modules", "oh_modules", ".hvigor", "build", ".git", ".preview"].includes(e.name)) walk(p, depth - 1); }
            else if (e.name.endsWith(".ets")) files.push(p);
          }
        };
        walk(path.join(root, "entry", "src", "main", "ets"), 8);
      }
      const findings = checkResourceRefs(files, root);
      return { totalProblems: findings.length, findings };
    },
  }),

  defineTool({
    name: "dev_check_native",
    description: "原生声明符号校验(IDE ArkTSCheck 同款规则): cpp/types 下 d.ts 声明的 native 函数必须能在工程 .so 符表中找到, 缺 so 或缺符号都会在运行时 napi 调用失败。纯文件分析。",
    inputSchema: {
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args) => {
      const entry = resolveProject(args.project || undefined);
      if ("error" in entry) throw new Error(entry.error);
      const findings = checkNativeDecls(entry.entry.harmonyRoot);
      return { totalProblems: findings.length, findings };
    },
  }),
];
