import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { run } from "./proc.js";
import { dumpUiTree } from "./uitest.js";
import { collectFaultlog } from "./hilog.js";
import { documentSymbolsOffline } from "./lsp.js";
import { devEcoCliCheckArkts } from "./devecocli.js";
import type { ProjectEntry } from "./registry.js";

// 深度联动(跨域串联, 原生能力的 1+1>2):
//   ui_locate_code    UI 节点(文本/id/坐标) -> ArkTS 声明位置 + 最近事件处理函数
//   crash_locate      崩溃堆栈 .ets 帧      -> 本地源码行 + 所在 struct/函数 + 上下文
//   hub_check         变更文件 LSP 诊断 + 最近构建日志错误 -> 合并修复清单

const SRC_SKIP = new Set(["node_modules", "oh_modules", ".git", ".hvigor", "build", ".preview", ".idea", "ohosTest"]);

function normSlashes(p: string): string { return p.replace(/\\/g, "/"); }

// 收集工程内全部 .ets/.ts 源文件(排除构建产物)
function indexSources(root: string, maxDepth = 8): string[] {
  const out: string[] = [];
  const walk = (dir: string, depth: number) => {
    if (depth < 0) return;
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { if (!SRC_SKIP.has(e.name)) walk(p, depth - 1); continue; }
      if (/\.(ets|ts)$/.test(e.name)) out.push(p);
    }
  };
  walk(path.resolve(root), maxDepth);
  return out;
}

// 字符串资源 value -> name 反查(UI 文案多来自 $r('app.string.x'))
function stringResourceMap(harmonyRoot: string): Map<string, string> {
  const map = new Map<string, string>();
  const walk = (dir: string, depth: number) => {
    if (depth < 0) return;
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.isDirectory()) { if (!SRC_SKIP.has(e.name)) walk(path.join(dir, e.name), depth - 1); continue; }
      if (e.name !== "string.json") continue;
      try {
        const parsed = JSON.parse(fs.readFileSync(path.join(dir, e.name), "utf8").replace(/^\uFEFF/, ""));
        const arr = Array.isArray(parsed) ? parsed : parsed?.string; // 官方格式 {"string":[...]}
        if (!Array.isArray(arr)) continue;
        for (const item of arr) {
          if (typeof item?.name === "string" && typeof item?.value === "string" && !map.has(item.value)) {
            map.set(item.value, item.name);
          }
        }
      } catch { /* 非法 json 跳过 */ }
    }
  };
  walk(path.resolve(harmonyRoot), 9); // 覆盖 <module>/src/main/resources/<locale>/element/string.json
  return map;
}

// 事件处理正则(.onClick( / .onChange( / .onSubmit( ...)
const HANDLER_RE = /\.(on[A-Z]\w*)\s*\(/;

function enclosingSymbol(symbols: Array<{ kind: string; name: string; line: number }>, line: number): string | null {
  let best: { kind: string; name: string; line: number } | null = null;
  for (const s of symbols) if (s.line <= line && (!best || s.line > best.line)) best = s;
  return best ? best.kind + " " + best.name : null;
}

// ---------------------------------------------------------------- ui_locate_code

interface NodeInfo {
  type: string; text: string; id: string;
  bounds?: { l: number; t: number; r: number; b: number };
  depth: number;
}

export interface UiLocateOpts {
  harmonyRoot: string;
  text?: string; id?: string;
  x?: number; y?: number;    // 坐标模式: 命中范围内最深节点
  target?: string;
}

export async function uiLocateCode(opts: UiLocateOpts) {
  if (!opts.text && !opts.id && (opts.x === undefined || opts.y === undefined)) {
    throw new Error("需提供 text/id 之一, 或 x+y 坐标");
  }
  const tree = await dumpUiTree({ target: opts.target });
  if (!tree.file) throw new Error("UI 树未保存到本地文件");
  const raw = JSON.parse(fs.readFileSync(tree.file, "utf8"));
  const roots = Array.isArray(raw) ? raw : [raw];

  const parseBounds = (s: unknown) => {
    if (typeof s !== "string") return undefined;
    const m = s.match(/\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]/);
    return m ? { l: +m[1], t: +m[2], r: +m[3], b: +m[4] } : undefined;
  };
  const nodes: NodeInfo[] = [];
  const walk = (n: any, depth: number) => {
    const a = n?.attributes ?? {};
    nodes.push({ type: String(a.type ?? ""), text: String(a.text ?? ""), id: String(a.id ?? a.identifier ?? ""), bounds: parseBounds(a.bounds), depth });
    for (const c of Array.isArray(n?.children) ? n.children : []) walk(c, depth + 1);
  };
  for (const r of roots) walk(r, 0);

  // 1. 定位节点
  let matched: NodeInfo[];
  if (opts.text || opts.id) {
    const t = (opts.text ?? "").toLowerCase(), i = (opts.id ?? "").toLowerCase();
    matched = nodes.filter((n) => (t && n.text.toLowerCase().includes(t)) || (i && n.id.toLowerCase().includes(i)));
  } else {
    const hits = nodes.filter((n) => n.bounds && opts.x! >= n.bounds.l && opts.x! <= n.bounds.r && opts.y! >= n.bounds.t && opts.y! <= n.bounds.b);
    if (hits.length === 0) throw new Error("坐标未命中任何控件(布局可能已变化, 先 ui_tree)");
    matched = [hits.sort((a, b) => b.depth - a.depth)[0]]; // 最深=最具体
  }
  if (matched.length === 0) throw new Error("未找到匹配控件(text/id 均未命中)");
  matched = matched.slice(0, 5);

  // 2. 构造检索线索: id / 文案字面量 / $r 资源引用
  const resMap = stringResourceMap(opts.harmonyRoot);
  const needles: Array<{ kind: string; needle: string }> = [];
  for (const n of matched) {
    if (n.id) needles.push({ kind: "id", needle: n.id });
    if (n.text) {
      needles.push({ kind: "text", needle: n.text });
      const rname = resMap.get(n.text);
      if (rname) needles.push({ kind: "resource", needle: "app.string." + rname });
    }
  }

  // 3. 源码反查: 命中行 + 所属 struct + 向下 15 行内最近的事件处理
  const files = indexSources(opts.harmonyRoot);
  const matches: Array<{ kind: string; file: string; line: number; snippet: string; struct: string | null; handler: string | null }> = [];
  for (const f of files) {
    if (matches.length >= 20) break;
    let lines: string[];
    try { lines = fs.readFileSync(f, "utf8").split("\n"); } catch { continue; }
    let symbols: Array<{ kind: string; name: string; line: number }> | null = null;
    for (let i = 0; i < lines.length && matches.length < 20; i++) {
      for (const { kind, needle } of needles) {
        if (!lines[i].includes(needle)) continue;
        if (!symbols) symbols = documentSymbolsOffline(lines.join("\n"));
        let handler: string | null = null;
        for (let j = i; j < Math.min(i + 15, lines.length); j++) {
          const h = lines[j].match(HANDLER_RE);
          if (h) { handler = h[1]; break; }
        }
        matches.push({ kind, file: f, line: i + 1, snippet: lines[i].trim().slice(0, 160), struct: enclosingSymbol(symbols ?? [], i + 1), handler });
        break; // 同一行多个线索只记一次
      }
    }
  }

  return {
    nodes: matched.map((n) => ({ type: n.type, text: n.text, id: n.id, bounds: n.bounds ?? null })),
    layoutFile: tree.file,
    matches,
  };
}

// ---------------------------------------------------------------- crash_locate

export interface CrashLocateOpts {
  harmonyRoot?: string;
  stack?: string;      // 原始堆栈/日志文本; 省略=从设备读 faultlog
  target?: string;
  maxFrames?: number;  // 默认 10
}

interface CrashFrame {
  fn: string;
  rawPath: string;
  file: string | null;  // 解析失败=null
  line: number;
  col: number;
  sourceLine: string | null;
  enclosing: string | null;
  stale: boolean;       // 行号超出当前文件(源码与崩溃版本不一致)
}

export async function crashLocate(opts: CrashLocateOpts) {
  const text = opts.stack && opts.stack.trim() ? opts.stack : await collectFaultlog({ target: opts.target });
  if (!text.trim()) throw new Error("无堆栈内容");

  const module = text.match(/^Module name:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const reason = text.match(/^Reason:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const errorName = text.match(/^Error name:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const errorMessage = text.match(/^Error message:\s*(.+)$/m)?.[1]?.trim() ?? null;
  const rawStack = text.includes("dump raw stack");

  // 帧格式(官方规格): at onPageShow entry (entry/src/main/ets/pages/Index.ets:7:13)
  const frameRe = /at\s+(.+?)\s*\(([^()]+?\.(?:ets|ts)):(\d+):(\d+)\)/g;
  const raws: Array<{ fn: string; rawPath: string; line: number; col: number }> = [];
  let m: RegExpExecArray | null;
  while ((m = frameRe.exec(text)) && raws.length < 40) {
    raws.push({ fn: m[1].trim(), rawPath: m[2].trim(), line: +m[3], col: +m[4] });
  }
  if (raws.length === 0) return { module, reason, errorName, errorMessage, rawStack, frames: [], unresolved: [], note: "未解析到 .ets/.ts 帧(可能是 CppCrash/系统栈, 或堆栈不完整)" };

  // 路径解析: 直接拼接 -> 最长路径后缀匹配(设备相对路径/安装路径均可命中)
  const index = opts.harmonyRoot ? indexSources(opts.harmonyRoot).map((f) => ({ f, parts: normSlashes(f).split("/") })) : [];
  const resolvePath = (rawPath: string): string | null => {
    if (!opts.harmonyRoot) return null;
    const direct = path.join(opts.harmonyRoot, rawPath.replace(/^\.\//, ""));
    if (fs.existsSync(direct)) return direct;
    const rp = normSlashes(rawPath).split("/");
    let best: { f: string; segs: number } | null = null;
    for (const { f, parts } of index) {
      let segs = 0;
      const max = Math.min(rp.length, parts.length);
      while (segs < max && rp[rp.length - 1 - segs] === parts[parts.length - 1 - segs]) segs++;
      if (segs >= 1 && (!best || segs > best.segs)) best = { f, segs };
    }
    return best ? best.f : null;
  };

  const maxFrames = opts.maxFrames ?? 10;
  const frames: CrashFrame[] = [];
  const unresolved: string[] = [];
  for (const r of raws.slice(0, maxFrames)) {
    const file = resolvePath(r.rawPath);
    if (!file) { unresolved.push(r.fn + " (" + r.rawPath + ")"); continue; }
    let lines: string[] = [];
    try { lines = fs.readFileSync(file, "utf8").split("\n"); } catch { /* 读失败留空 */ }
    const src = lines[r.line - 1]?.trim() ?? null;
    frames.push({
      fn: r.fn, rawPath: r.rawPath, file, line: r.line, col: r.col,
      sourceLine: src,
      enclosing: src ? enclosingSymbol(documentSymbolsOffline(lines.join("\n")), r.line) : null,
      stale: src === null,
    });
  }
  return { module, reason, errorName, errorMessage, rawStack, frames, unresolved: unresolved.slice(0, maxFrames) };
}

// ---------------------------------------------------------------- hub_check

export interface HubCheckOpts {
  entry: ProjectEntry;
  files?: string[];      // 省略=git 变更(HEAD diff + 未跟踪)中的 .ets
  timeoutMs?: number;
  signal?: AbortSignal;  // 请求级取消贯穿 CLI 批次执行
}

async function changedArktsFiles(entry: ProjectEntry): Promise<string[]> {
  // core.quotepath=off: 含中文/空格路径默认被转义成带引号的八进制串, .ets 过滤会失效。
  const [diff, untracked] = await Promise.all([
    run("git", ["-c", "core.quotepath=off", "diff", "--name-only", "HEAD"], { cwd: entry.repoRoot, timeoutMs: 30000 }),
    run("git", ["-c", "core.quotepath=off", "ls-files", "--others", "--exclude-standard"], { cwd: entry.repoRoot, timeoutMs: 30000 }),
  ]);
  const rel = new Set<string>();
  for (const out of [diff.out, untracked.out]) {
    for (const l of out.replace(/\r/g, "").split("\n")) {
      const t = l.trim().replace(/^"|"$/g, "");
      if (t && !t.startsWith("/") && /\.ets$/.test(t)) rel.add(t);
    }
  }
  return [...rel].map((r) => path.join(entry.repoRoot, r)).filter((f) => fs.existsSync(f));
}

// 解析 hvigor/ArkTS 编译错误行: File: <path>:<line>:<col>
// 路径组必须放行 Windows 盘符前缀(D:/ 或 D:\), 否则绝对路径日志永远解析不到,
// hub_check 的构建错误合并静默失效。
export function parseBuildLogErrors(logFile: string): Array<{ file: string; line: number; col: number; message: string }> {
  if (!fs.existsSync(logFile)) return [];
  const lines = fs.readFileSync(logFile, "utf8").replace(/\r/g, "").split("\n");
  const out = new Map<string, { file: string; line: number; col: number; message: string }>();
  // 路径组必须放行 Windows 盘符前缀(D:/ 或 D:\), 否则绝对路径日志永远解析不到,
  // hub_check 的构建错误合并静默失效。闭引号 ["']? 允许带引号路径("path.ets":12:7)。
  const fileRe = /File:\s*["']?((?:[A-Za-z]:[\\/])?[^:"'\n]+?\.(?:ets|ts))["']?:(\d+):(\d+)/;
  for (const l of lines.slice(-500)) {
    const m = l.match(fileRe);
    if (!m) continue;
    const key = normSlashes(m[1]).toLowerCase() + ":" + m[2] + ":" + m[3];
    if (!out.has(key)) out.set(key, { file: m[1], line: +m[2], col: +m[3], message: l.trim().slice(0, 300) });
  }
  return [...out.values()];
}

export async function hubCheck(opts: HubCheckOpts) {
  const files = (opts.files && opts.files.length > 0 ? opts.files.map((f) => path.resolve(f)) : await changedArktsFiles(opts.entry))
    .filter((f) => /\.ets$/.test(f) && fs.existsSync(f));

  const diagnostics: Array<{ file: string; line: number | null; severity: number; message: string; code: string | null }> = [];
  // 官方 CLI 批量诊断(真实类型/语法); CLI 不可用时文件全部计入 pending,
  // 绝不静默吞掉——冷/慢场景的 totalErrors=0 必须与真干净可区分。
  const pending: string[] = [];
  const cli = await devEcoCliCheckArkts(files, opts.entry.harmonyRoot, opts.timeoutMs ?? 120000, opts.signal);
  if (!cli.available) pending.push(...files);
  for (const f of files) {
    const item = cli.items[path.resolve(f).split(path.sep).join("/").toLowerCase()];
    if (!item) { pending.push(f); continue; }
    for (const d of item.diagnostics) {
      diagnostics.push({
        file: f,
        line: (d?.range?.start?.line ?? 0) + 1,
        severity: typeof d?.severity === "number" ? d.severity : 3,
        message: String(d?.message ?? "").slice(0, 500),
        code: d?.code != null ? String(d.code) : null,
      });
    }
  }

  const buildErrors = parseBuildLogErrors(path.join(os.tmpdir(), "godfreyhub", "logs", "build_" + opts.entry.name + ".log"));

  return {
    project: opts.entry.name,
    files,
    diagnostics,
    pending,
    buildErrors,
    totalErrors: diagnostics.filter((d) => d.severity === 1).length + buildErrors.length,
    note: files.length === 0 ? "无变更 .ets 文件(可显式传 files)" : undefined,
  };
}
