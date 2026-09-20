import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";
import { toolchain } from "../core/paths.js";
import { spawnFrameProcess } from "./frame.js";
import { findProjectRoot, ARKTS_INIT_READY_TIMEOUT_MS } from "./project-config.js";
import { ArktsLspError } from "./project-config.js";
import type { LspDiagnosticsResult } from "./project-config.js";

// C/C++ 静态检查: DevEco 内置 clangd, 自动发现 hvigor 生成的共享/模块级
// compile_commands.json。
// 与 ArkTS 诊断同契约: 未在截止前收到 publishDiagnostics 的文件标记 pending,
// 绝不把"根本没分析"伪装成"零错误"。
// URI 归一化: clangd 回显的 URI 与 pathToFileURL 生成的 URI 在盘符大小写/规范化上
// 可能不一致(Windows), 存取两端统一按本地路径归一化后再匹配。

function normalizedFile(file: string): string {
  const resolved = path.resolve(file).replace(/\\/g, "/");
  return process.platform === "win32" ? resolved.toLowerCase() : resolved;
}

function normalizedUriKey(uri: string): string {
  try {
    return normalizedFile(uri.startsWith("file://") ? fileURLToPath(uri) : uri);
  } catch {
    return uri.toLowerCase();
  }
}

function compileDatabasePaths(root: string): string[] {
  const candidates = new Set<string>();
  const add = (file: string) => {
    if (fs.existsSync(file)) candidates.add(path.resolve(file));
  };
  const collectInside = (dir: string, depth: number) => {
    // 深度上限: .cxx 树可能很深(且 Windows 目录联结成环会造成无限递归)
    if (depth < 0) return;
    let entries: fs.Dirent[];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const current = path.join(dir, entry.name);
      if (entry.isFile() && entry.name === "compile_commands.json") add(current);
      else if (entry.isDirectory()) collectInside(current, depth - 1);
    }
  };

  add(path.join(root, "compile_commands.json"));
  add(path.join(root, "entry", "compile_commands.json"));
  add(path.join(root, ".idea", ".deveco", "cxx", "compile_commands.json"));

  let modules: fs.Dirent[] = [];
  try { modules = fs.readdirSync(root, { withFileTypes: true }); } catch { return [...candidates]; }
  for (const module of modules) {
    if (!module.isDirectory() || module.name.startsWith(".")) continue;
    const cxxRoot = path.join(root, module.name, ".cxx");
    if (fs.existsSync(cxxRoot)) collectInside(cxxRoot, 6);
  }
  return [...candidates];
}

function databaseMatchCount(database: string, requested: Set<string>): number {
  let entries: any;
  try { entries = JSON.parse(fs.readFileSync(database, "utf8")); } catch { return 0; }
  if (!Array.isArray(entries)) return 0;
  const matched = new Set<string>();
  for (const entry of entries) {
    if (!entry || typeof entry.file !== "string") continue;
    const source = path.isAbsolute(entry.file)
      ? entry.file
      : path.resolve(typeof entry.directory === "string" ? entry.directory : path.dirname(database), entry.file);
    const normalized = normalizedFile(source);
    if (requested.has(normalized)) matched.add(normalized);
  }
  return matched.size;
}

export function resolveCompileCommandsDirectory(projectRoot: string, files: string[]): string | null {
  const root = path.resolve(projectRoot);
  const databases = compileDatabasePaths(root);
  if (databases.length === 0) return null;
  const requested = new Set(files.map(normalizedFile));
  const shared = path.resolve(root, ".idea", ".deveco", "cxx", "compile_commands.json");
  const ranked = databases.map((database) => {
    let modified = 0;
    try { modified = fs.statSync(database).mtimeMs; } catch { /* 不可 stat 的库排最后 */ }
    return {
      database,
      matches: databaseMatchCount(database, requested),
      shared: normalizedFile(database) === normalizedFile(shared),
      modified,
    };
  });
  ranked.sort((a, b) => b.matches - a.matches || Number(b.shared) - Number(a.shared) || b.modified - a.modified);
  return path.dirname(ranked[0].database);
}

export async function cppDiagnostics(files: string[], opts: { projectRoot?: string; timeoutMs?: number; signal?: AbortSignal } = {}): Promise<Record<string, LspDiagnosticsResult>> {
  const tc = toolchain();
  const clangd = tc.clangd;
  if (!clangd) throw new ArktsLspError("未找到 DevEco clangd; 确认 DevEco/OpenHarmony SDK 安装完整或设置 DEVECO_PATH");
  const first = path.resolve(files[0]);
  const root = findProjectRoot(opts.projectRoot ? path.resolve(opts.projectRoot, "x") : first) ?? path.dirname(first);
  const compileCommandsDir = resolveCompileCommandsDirectory(root, files);
  const { conn } = spawnFrameProcess(
    clangd,
    ["--background-index=false", "--compile-commands-dir=" + (compileCommandsDir ?? root), compileCommandsDir ? "" : "--resource-dir=" + path.join(tc.deveco!, "sdk", "default", "openharmony", "native", "sysroot").replace(/\\/g, "/")].filter(Boolean),
    "clangd",
    { cwd: root },
  );
  // 诊断按归一化本地路径为键: 与 clangd 回显 URI 的写法差异(盘符大小写等)解耦。
  const diagnostics = new Map<string, any[]>();
  const timeoutMs = opts.timeoutMs ?? ARKTS_INIT_READY_TIMEOUT_MS;
  conn.onNotification("textDocument/publishDiagnostics", (params: any) => {
    if (typeof params?.uri === "string") {
      diagnostics.set(normalizedUriKey(params.uri), Array.isArray(params.diagnostics) ? params.diagnostics : []);
    }
  });
  const deadline = Date.now() + timeoutMs;
  try {
    await conn.request("initialize", { processId: process.pid, rootUri: pathToFileURL(root).toString(), capabilities: {} }, 60000, opts.signal);
    conn.notify("initialized", {});
    const openedKeys = new Map<string, string>(); // 原始 uri -> 归一化键
    for (const f of files) {
      const fp = path.resolve(f);
      if (!fs.existsSync(fp)) continue;
      const uri = pathToFileURL(fp).toString();
      openedKeys.set(uri, normalizedFile(fp));
      conn.notify("textDocument/didOpen", { textDocument: { uri, languageId: path.extname(fp).slice(1), version: 1, text: fs.readFileSync(fp, "utf8") } });
    }
    // 收集窗口: 等每个已打开文件至少一次 publishDiagnostics 或超时/取消
    while (Date.now() < deadline) {
      if (opts.signal?.aborted) break;
      await new Promise((r) => setTimeout(r, 500));
      const wanted = [...openedKeys.values()];
      if (wanted.length > 0 && wanted.every((k) => diagnostics.has(k))) break;
    }
    const out: Record<string, LspDiagnosticsResult> = {};
    for (const f of files) {
      const fp = path.resolve(f);
      if (!fs.existsSync(fp)) continue;
      const key = normalizedFile(fp);
      const got = diagnostics.get(key);
      out[f] = got !== undefined
        ? { diagnostics: got, pending: false }
        : { diagnostics: [], pending: true };
    }
    return out;
  } finally {
    conn.kill();
  }
}
