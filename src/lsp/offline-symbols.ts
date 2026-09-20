import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 离线符号(轻量正则, 不依赖任何语言服务器)。ace-server stdio 路径退役后,
// 这里是 lsp_symbols / hub_check 符号定位的常驻实现。

// 左侧词边界: 防止 "myclass Foo" 命中 "class Foo"。行级注释/字符串不做 AST 级剔除
// (离线路径刻意保持轻量), 误报由调用方按需人工确认。
const SYMBOL_RE = /(?:export\s+)?(?:abstract\s+)?(struct|class|interface|enum|function|type)\s+([A-Za-z_$][\w$]*)/g;

export function documentSymbolsOffline(text: string): Array<{ kind: string; name: string; line: number }> {
  const out: Array<{ kind: string; name: string; line: number }> = [];
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const stripped = stripLineComment(lines[i]);
    SYMBOL_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = SYMBOL_RE.exec(stripped))) {
      out.push({ kind: m[1], name: m[2], line: i + 1 });
    }
  }
  return out;
}

/** 只剔除行注释(//)与其后内容: 粗暴但能消掉大部分注释误报; 字符串内容保持原样。 */
function stripLineComment(line: string): string {
  const idx = line.indexOf("//");
  return idx >= 0 ? line.slice(0, idx) : line;
}

const WS_SKIP = new Set(["node_modules", "oh_modules", ".git", ".hvigor", "build", ".preview", ".idea", "dist", "target"]);

/**
 * 全工程离线符号搜索。异步 + 定期让出事件循环: 单进程 stdio 服务器里, 同步全树
 * 扫描会卡住所有并发工具请求数百毫秒到秒级。
 */
export async function workspaceSymbolsOffline(root: string, query: string, maxResults = 50): Promise<Array<{ name: string; kind: string; file: string; line: number }>> {
  const out: Array<{ name: string; kind: string; file: string; line: number }> = [];
  const q = query.toLowerCase();
  let scanned = 0;
  const walk = async (dir: string, depth: number): Promise<void> => {
    if (depth < 0 || out.length >= maxResults) return;
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (out.length >= maxResults) return;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { if (!WS_SKIP.has(e.name)) await walk(p, depth - 1); continue; }
      if (!/\.(ets|ts)$/.test(e.name)) continue;
      let text: string;
      try { text = fs.readFileSync(p, "utf8"); } catch { continue; }
      for (const sym of documentSymbolsOffline(text)) {
        if (q && !sym.name.toLowerCase().includes(q)) continue;
        out.push({ name: sym.name, kind: sym.kind, file: p, line: sym.line });
        if (out.length >= maxResults) return;
      }
      // 每 40 个文件让出一次事件循环
      if (++scanned % 40 === 0) await new Promise<void>((r) => setImmediate(r));
    }
  };
  await walk(path.resolve(root), 6);
  return out;
}

/** uri -> 本地路径(结果转换用) */
export function uriToPath(uri: string): string {
  return uri.startsWith("file://") ? fileURLToPath(uri) : uri;
}

/** 位置(0 基行/列) */
export interface LspPos { line: number; character: number; }
