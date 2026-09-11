import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { withArkts } from "./arkts-session.js";

// LSP 语义导航 + hover 私有 payload 归一化 + 离线符号搜索(不依赖 LSP 的回退路径)。

export interface LspPos { line: number; character: number; }

// ---------------- hover 私有 payload 归一化(ace-server 返回 {code,data[]}) ----------------

function decodeHtmlEntities(s: string): string {
  return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
}

function hoverTagText(tag: any): string | null {
  if (!tag || typeof tag !== "object") return null;
  const name = typeof tag.name === "string" ? tag.name : "";
  const text = typeof tag.text === "string" ? tag.text : "";
  if (name) return "@" + name + (text ? " " + text : "");
  return text ? text : null;
}

export function normalizeHover(result: any): any {
  const raw = typeof result?.contents === "string" ? result.contents
    : typeof result?.contents?.value === "string" ? result.contents.value
    : null;
  if (!raw || !raw.trim().startsWith("{") || !raw.trim().endsWith("}")) return result;
  let payload: any;
  try { payload = JSON.parse(raw); } catch { return result; }
  if (typeof payload !== "object" || payload === null || (!payload.code && !("data" in payload))) return result;
  const parts: string[] = [];
  if (typeof payload.code?.value === "string" && payload.code.value.trim()) {
    const lang = typeof payload.code?.language === "string" ? payload.code.language : "ts";
    parts.push("```" + lang + "\n" + decodeHtmlEntities(payload.code.value).trim() + "\n```");
  }
  for (const item of Array.isArray(payload.data) ? payload.data : [payload.data]) {
    if (item && typeof item === "object" && typeof item.document === "string") {
      const doc = decodeHtmlEntities(item.document).trim();
      if (doc) parts.push(doc);
    }
    for (const tag of Array.isArray(item?.tags) ? item.tags : []) {
      const t = hoverTagText(tag);
      if (t) parts.push(t);
    }
  }
  return parts.length ? { contents: { kind: "markdown", value: parts.join("\n\n") }, range: result?.range } : result;
}

// ---------------- 导航请求(全部支持请求级取消) ----------------

export function lspHover(filePath: string, pos: LspPos, projectRoot?: string, signal?: AbortSignal) {
  return withArkts(filePath, projectRoot, signal, async (s, uri) =>
    normalizeHover(await s.conn.request("textDocument/hover", { textDocument: { uri }, position: pos }, 60000, signal)));
}

export function lspDefinition(filePath: string, pos: LspPos, projectRoot?: string, signal?: AbortSignal) {
  return withArkts(filePath, projectRoot, signal, (s, uri) =>
    s.conn.request("textDocument/definition", { textDocument: { uri }, position: pos }, 60000, signal));
}

export function lspReferences(filePath: string, pos: LspPos, projectRoot?: string, signal?: AbortSignal) {
  return withArkts(filePath, projectRoot, signal, (s, uri) =>
    s.conn.request("textDocument/references", { textDocument: { uri }, position: pos, context: { includeDeclaration: true } }, 60000, signal));
}

export function lspSignatureHelp(filePath: string, pos: LspPos, projectRoot?: string, signal?: AbortSignal) {
  return withArkts(filePath, projectRoot, signal, (s, uri) =>
    s.conn.request("textDocument/signatureHelp", { textDocument: { uri }, position: pos }, 60000, signal));
}

/** 文件符号表: LSP 不可用/失败时返回 null, 由调用方退回离线正则(与 lsp_symbols 工具契约一致)。 */
export function lspDocumentSymbols(filePath: string, projectRoot?: string, signal?: AbortSignal) {
  return withArkts(filePath, projectRoot, signal, (s, uri) =>
    s.conn.request("textDocument/documentSymbol", { textDocument: { uri } }, 30000, signal).catch(() => null));
}

// ---------------- 离线符号(轻量正则, 不依赖 LSP) ----------------

// 左侧词边界: 防止 "myclass Foo" 命中 "class Foo"。行级注释/字符串不做 AST 级剔除
// (离线回退路径刻意保持轻量), 误报由调用方按需人工确认。
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
