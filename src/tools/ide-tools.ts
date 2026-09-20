import path from "node:path";
import { z } from "zod";
import { defineTool, type ToolDefinition } from "./types.js";
import { resolveProject } from "./shared.js";
import { ideMcpCall, ideMcpResultText } from "../core/idemcp.js";

// DevEco Studio 26 内置 MCP(IDE 进程内)桥接。只接 GodfreyHub/Agent 自身拿不到的
// 独有能力(用户打开的编辑器、在 IDE 里呈现文件); 符号搜索并入 lsp_symbols
// (IDE 语义索引优先、离线正则兜底), 文件读写/文本搜索与 Agent 内建工具重复, 刻意不接。

const fwd = (p: string) => p.split(path.sep).join("/");

function requireEntry(project: string | undefined) {
  const r = resolveProject(project || undefined);
  if ("error" in r) throw new Error(r.error);
  return r.entry;
}

export const ideTools: ToolDefinition[] = [
  defineTool({
    name: "ide_get_open_files",
    description: "列出用户在 DevEco IDE 里当前打开的编辑器文件(工程相对路径)。用于了解用户正在看什么, 别的渠道拿不到。需 IDE 运行且 MCP 服务器已启用。",
    inputSchema: {
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args) => {
      const entry = requireEntry(args.project);
      const r = await ideMcpCall("get_all_open_file_paths", { projectPath: fwd(entry.harmonyRoot) });
      return { openFiles: ideMcpResultText(r), isError: r.isError ?? false };
    },
  }),

  defineTool({
    name: "ide_open_in_editor",
    description: "把指定文件在 DevEco IDE 编辑器里打开呈现给用户(改完代码让用户接着看/编辑时用)。需 IDE 运行且 MCP 服务器已启用。",
    inputSchema: {
      filePath: z.string().describe("文件路径, 绝对路径或相对工程根"),
      project: z.string().optional().describe("工程名, 省略=当前项目"),
    },
    handler: async (args) => {
      const entry = requireEntry(args.project);
      const abs = path.resolve(args.filePath);
      const root = path.resolve(entry.harmonyRoot);
      const rel = abs.toLowerCase().startsWith(root.toLowerCase() + path.sep)
        ? path.relative(root, abs)
        : args.filePath;
      const r = await ideMcpCall("open_file_in_editor", { filePath: fwd(rel), projectPath: fwd(root) });
      return { opened: !r.isError, detail: ideMcpResultText(r) };
    },
  }),
];
