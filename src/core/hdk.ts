import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";
import { Jieba } from "@node-rs/jieba";
import { loadConfig } from "./registry.js";

// HDK 离线文档库原生检索: 只读直查 FTS5 索引(与 Python 索引器共享同一 db, 无需子进程)
// 分词方案(schema tokenizer=3): 单张 unicode61 词元表。
//   索引端(Python indexer)   : jieba cut_for_search(HMM=False) + 驼峰拆词 + 过滤
//   查询端(本模块)           : jieba cut(HMM=False) + 同款拆词/过滤
//   两端加载同一份 hdk/dict/dict.txt 与 stopwords.txt; cut_for_search 输出 ⊇ cut,
//   故查询词必在索引词元集合内。先全 token AND MATCH，不足时允许缺一个词元，
//   再用 BM25 + 原始标题加权排序；标题/摘要从 Markdown 原文渲染。

interface HdkDoc { id: string; file: string; title: string; uri: string; category: string; snippet: string; }

const CANGJIE_PREFIX = "cangjie/";
const INDEX_SCHEMA_TOKENIZER = "3";

// ---------------- 统一分词(与 hdk/indexer.py 的 segment_text 逐字一致) ----------------

let jieba: Jieba | null = null;
let stopwords: Set<string> | null = null;

/** 共享词典/停用词路径: 随包分发的 hdk/dict/ 下, 与 Python 索引端同一文件 */
function dictFiles(): { dict: string; stopwords: string } | null {
  const bundled = fileURLToPath(new URL("../../hdk", import.meta.url));
  for (const root of [process.env.GODFREYHUB_HDK_ROOT, bundled, loadConfig().hdkRoot]) {
    if (!root) continue;
    const dict = path.join(root, "dict", "dict.txt");
    const stopwords = path.join(root, "dict", "stopwords.txt");
    if (fs.existsSync(dict)) return { dict, stopwords: fs.existsSync(stopwords) ? stopwords : "" };
  }
  return null;
}

function getJieba(): Jieba {
  if (!jieba) {
    const files = dictFiles();
    if (!files) throw new Error("HDK 词典缺失: hdk/dict/dict.txt 不存在");
    jieba = Jieba.withDict(fs.readFileSync(files.dict));
  }
  return jieba;
}

function getStopwords(): Set<string> {
  if (!stopwords) {
    stopwords = new Set();
    const files = dictFiles();
    if (files?.stopwords) {
      for (const line of fs.readFileSync(files.stopwords, "utf8").split(/\r?\n/)) {
        const t = line.trim();
        if (t && !t.startsWith("#")) stopwords.add(t);
      }
    }
  }
  return stopwords;
}

// 驼峰/数字/下划线边界拆词: 与 indexer.py 的 CAMEL_RE 完全一致
const CAMEL_RE = /(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])|(?<=[a-zA-Z])(?=[0-9])|(?<=[0-9])(?=[a-zA-Z])/g;

export function camelParts(token: string): string[] {
  const parts: string[] = [];
  for (const seg of token.split("_")) {
    const s = seg.trim();
    if (!s) continue;
    for (const p of s.split(CAMEL_RE)) if (p) parts.push(p);
  }
  return parts.length > 1 ? parts : [];
}

function keep(token: string): boolean {
  if (!/[A-Za-z0-9\u3400-\u9fff]/.test(token)) return false; // 纯符号
  if (/^\d$/.test(token)) return false; // 纯数字单字符
  if (getStopwords().has(token)) return false;
  return true;
}

/**
 * 查询端分词(等价 indexer.segment_text(text, search=False)):
 * jieba 精确 cut(HMM=False) -> 过滤 -> 驼峰拆词追加 -> 去重, 返回词元数组。
 */
export function segmentQuery(text: string): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const tok of getJieba().cut(text || "", false)) {
    const t = tok.trim();
    if (!keep(t) || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
    for (const part of camelParts(t)) {
      if (!keep(part) || seen.has(part)) continue;
      seen.add(part);
      out.push(part);
    }
  }
  return out;
}

// 语料根解析: 环境变量 > 包内 hdk/(随仓库分发的完整语料+脚本) > config.hdkRoot(外部语料回退)
function resolveRoot(): string | null {
  const bundled = fileURLToPath(new URL("../../hdk", import.meta.url));
  for (const root of [process.env.GODFREYHUB_HDK_ROOT, bundled, loadConfig().hdkRoot]) {
    if (root && fs.existsSync(path.join(root, ".mcp_cache"))) return root;
  }
  return null;
}

interface RootDb { root: string; harmonyos: string; cangjie: string; }

// 连接缓存带"代次"(db 文件 mtime+size): Python 端全量重建是 rename 换文件, 长驻进程
// 持有的旧句柄在 POSIX 上永远读旧 inode、Windows 上 rename 失败留旧库——两端殊途同归:
// 重建后本进程仍供旧索引且永不报错。每次查询前 stat 一次(纳秒级), 代次变化即换新连接。
interface RootConn { db: Database.Database; mtimeMs: number; size: number; }

const conns = new Map<string, RootConn>();

/** 词典签名: 与 Python indexer._dict_signature() 逐字节一致(文件名 + 内容 sha256)。 */
function currentDictHash(): string {
  const files = dictFiles();
  if (!files) return "";
  const h = createHash("sha256");
  const names = ["dict.txt", "stopwords.txt"];
  const paths = [files.dict, files.stopwords];
  for (let i = 0; i < names.length; i++) {
    h.update(names[i]);
    if (paths[i]) {
      try { h.update(fs.readFileSync(paths[i])); } catch { /* 与 Python 侧一致: 读失败仅计入文件名 */ }
    }
  }
  return h.digest("hex");
}

/**
 * 激活待生效索引: 若存在与当前词典/schema 匹配的完整 tmp 新库, 原子替换
 * (旧库改名 .old -> tmp 就位 -> 删 .old)。与 Python 端 ensure_index 同款逻辑
 * ——谁先打开库谁先激活, 服务重启后自动完成词典变更迁移; 被占用则保持旧库
 * 下次再试。必须在打开 db 之前调用, 否则本进程会占住旧库句柄。
 */
function tryActivatePendingIndex(name: "harmonyos" | "cangjie", dbDir: string): void {
  const dbPath = path.join(dbDir, name + "_docs.fts5.db");
  const tmpPath = dbPath + ".tmp";
  if (!fs.existsSync(tmpPath)) return;
  let ok = false;
  try {
    const tdb = new Database(tmpPath, { readonly: true, timeout: 5000 });
    try {
      const rows = tdb.prepare("SELECT key, value FROM meta").all() as { key: string; value: string }[];
      const meta = new Map(rows.map((r) => [r.key, r.value]));
      ok = meta.get("tokenizer") === INDEX_SCHEMA_TOKENIZER && meta.get("dict_hash") === currentDictHash();
    } finally {
      tdb.close();
    }
  } catch { ok = false; }
  if (!ok) return;
  try {
    const stale = dbPath + ".old";
    if (fs.existsSync(stale)) fs.rmSync(stale, { force: true });
    if (fs.existsSync(dbPath)) fs.renameSync(dbPath, stale);
    fs.renameSync(tmpPath, dbPath);
    if (fs.existsSync(stale)) fs.rmSync(stale, { force: true });
  } catch { /* 被占用: 保持旧库, 下次 openRoot 再试 */ }
}

function dbFileGeneration(dbPath: string): { mtimeMs: number; size: number } | null {
  try {
    const st = fs.statSync(dbPath);
    return { mtimeMs: st.mtimeMs, size: st.size };
  } catch {
    return null;
  }
}

function openRoot(name: "harmonyos" | "cangjie", dbDir: string): Database.Database | null {
  const dbPath = path.join(dbDir, name + "_docs.fts5.db");
  const cached = conns.get(name);
  if (cached) {
    const now = dbFileGeneration(dbPath);
    if (now && now.mtimeMs === cached.mtimeMs && now.size === cached.size) return cached.db;
    // 索引文件已被重建端替换: 丢弃旧句柄, 走下方重新打开。
    try { cached.db.close(); } catch { /* 已关闭 */ }
    conns.delete(name);
  }
  // 打开前激活待生效索引(词典变更迁移), 否则本进程打开后句柄占用无法替换
  tryActivatePendingIndex(name, dbDir);
  if (!fs.existsSync(dbPath)) return null;
  const generation = dbFileGeneration(dbPath);
  // timeout 15s: Python 端增量写库(行级 delta, 秒级)期间等锁, 而不是把 SQLITE_BUSY
  // 直接抛给检索方; 与 Python 端 busy_timeout=30s 配套。
  const db = new Database(dbPath, { readonly: true, timeout: 15000 });
  let meta: Map<string, string>;
  try {
    const rows = db.prepare("SELECT key, value FROM meta").all() as { key: string; value: string }[];
    meta = new Map(rows.map((r) => [r.key, r.value]));
  } catch { /* 旧索引无 meta 表 */ meta = new Map(); }
  const tokenizer = meta.get("tokenizer") ?? null;
  if (tokenizer !== INDEX_SCHEMA_TOKENIZER) {
    db.close();
    throw new Error(
      `HDK 索引版本不匹配: ${name} tokenizer=${tokenizer ?? "missing"}, ` +
      `需要 ${INDEX_SCHEMA_TOKENIZER}；运行 npm run hdk:index 重建索引`,
    );
  }
  // 词典签名校验: 分词词典与索引不一致时, 查询词元可能不在索引词元集合内, AND MATCH
  // 会静默零结果——这是最阴险的漂移(无任何报错)。
  //   有签名且不匹配 -> 硬错误(必须重建);
  //   无签名(老索引) -> 无法判定, stderr 警告后放行(兼容未签名的存量索引)。
  const dictHash = meta.get("dict_hash") ?? null;
  const currentHash = currentDictHash();
  if (dictHash === null) {
    console.error(`[godfreyhub] HDK ${name} 索引无 dict_hash 签名(老索引), 无法校验词典一致性; 建议运行 npm run hdk:index`);
  } else if (dictHash !== currentHash) {
    db.close();
    throw new Error(
      `HDK 词典签名不匹配: ${name} 索引 dict_hash=${dictHash.slice(0, 12)}…, ` +
      `当前词典=${currentHash.slice(0, 12)}…; 查询词可能搜不到已索引内容。` +
      `运行 npm run hdk:index 按当前词典重建索引`,
    );
  }
  db.pragma("cache_size = -8192"); // 与 Python 侧一致: 防大索引整本进内存
  if (generation) conns.set(name, { db, mtimeMs: generation.mtimeMs, size: generation.size });
  return db;
}

/** 把底层 SQLite 错误翻译成可操作的指引, 而不是裸 SQLITE_BUSY/READONLY 代码。 */
function friendlyFtsError(name: string, e: unknown): Error {
  const msg = String((e as Error)?.message ?? e);
  if (/database is locked|sqlite_busy/i.test(msg)) {
    return new Error(`HDK 索引正被写入(${name}, Python 端重建/增量中), 请稍后重试: ${msg}`);
  }
  if (/readonly|recovery|hot journal|disk i\/o error/i.test(msg)) {
    return new Error(`HDK 索引(${name})需要恢复(写入端可能异常中断), 请运行 npm run hdk:index 修复: ${msg}`);
  }
  return new Error(`FTS 查询失败(${name}): ${msg}`);
}

export function hdkStatus(): { ok: boolean; roots: string[]; docs: number; error?: string } {
  const root = resolveRoot();
  if (!root) return { ok: false, roots: [], docs: 0, error: "HDK 索引缺失: 语料已随包分发(hdk/), 运行 npm run hdk:index 重建 FTS 索引" };
  const dbDir = path.join(root, ".mcp_cache");
  const roots: string[] = [];
  let docs = 0;
  for (const name of ["harmonyos", "cangjie"] as const) {
    try {
      const db = openRoot(name, dbDir);
      if (!db) continue;
      roots.push(name);
      const row = db.prepare("SELECT value FROM meta WHERE key='doc_count'").get() as any;
      docs += Number(row?.value ?? 0);
    } catch (e) {
      return { ok: false, roots, docs, error: e instanceof Error ? e.message : String(e) };
    }
  }
  return { ok: roots.length > 0, roots, docs };
}

function makeSnippet(body: string, tokens: string[], window = 90): string {
  const low = body.toLowerCase();
  let best: { i: number; t: string } | null = null;
  for (const t of tokens) {
    const i = low.indexOf(t.toLowerCase());
    if (i !== -1 && (best === null || i < best.i)) best = { i, t };
  }
  let snip: string;
  if (best === null) {
    snip = body.slice(0, window * 2);
    return snip + (body.length > window * 2 ? "…" : "");
  }
  const start = Math.max(0, best.i - window);
  const end = Math.min(body.length, best.i + best.t.length + window);
  snip = body.slice(start, end);
  if (start > 0) snip = "…" + snip;
  if (end < body.length) snip = snip + "…";
  const pattern = [...new Set(tokens.filter(Boolean))]
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  if (pattern) {
    try { snip = snip.replace(new RegExp("(?:(?:" + pattern + "))+", "gi"), (m) => "**" + m + "**"); } catch { /* skip */ }
  }
  return snip;
}

interface Row {
  relpath: string;
  name: string;
  title: string;
  category: string;
  uri: string;
  indexedBody: string;
  rank: number;
}

interface Candidate extends Row {
  root: string;
  score: number;
}

function quoteFtsToken(token: string): string {
  return '"' + token.replace(/"/g, '""') + '"';
}

function strictMatchExpression(tokens: string[]): string {
  return tokens.map(quoteFtsToken).join(" AND ");
}

/** 仅在严格 AND 结果不足时允许缺一个词元，兼顾自然问法容错与结果精度。 */
function relaxedMatchExpression(tokens: string[]): string | null {
  if (tokens.length < 2 || tokens.length > 8) return null;
  if (tokens.length === 2) return tokens.map(quoteFtsToken).join(" OR ");
  return tokens.map((_, omitted) =>
    "(" + tokens.filter((__, i) => i !== omitted).map(quoteFtsToken).join(" AND ") + ")"
  ).join(" OR ");
}

/**
 * 整词无命中时的子词兜底表达式(与 Python 查询端 _subtoken_fts_match_expression 同款)。
 * 查询端精确 cut 会把词典整词原样切出(如"智慧屏")，但索引端 cut_for_search
 * 会额外产出子词("智慧")；若某文档只含子词而无整词词元，strict/relaxed 都
 * 匹配不到。此函数把每个含子词的整词替换为子词 OR 重试(子词必在索引词元
 * 集合内: cut_for_search 输出 ⊇ cut 且索引端保留子词)。其余词元只保留非单字词
 * (长问句切出的"传/参"是噪声)；单 token 查询退化为纯子词 OR，覆盖
 * "智慧屏"→"智慧"这类漏召回。
 */
function subtokenMatchExpression(tokens: string[], maxTokens = 8): string | null {
  if (tokens.length === 0 || tokens.length > maxTokens) return null;
  const alts = new Map<number, string[]>();
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const subs = new Set<string>();
    for (const raw of getJieba().cutForSearch(t, false)) {
      const st = raw.trim();
      if (!st || st === t || !keep(st)) continue;
      subs.add(st);
      for (const part of camelParts(st)) if (keep(part)) subs.add(part);
    }
    if (subs.size > 0) alts.set(i, [...subs]);
  }
  if (alts.size === 0) return null;
  const keepers = tokens.map((t, i) => ({ t, i })).filter(({ t }) => t.length > 1);
  const exprs: string[] = [];
  for (const [i, subs] of alts) {
    const subOr = subs.map(quoteFtsToken).join(" OR ");
    const others = keepers.filter((k) => k.i !== i).map((k) => quoteFtsToken(k.t));
    exprs.push(others.length > 0 ? `(${others.join(" AND ")} AND (${subOr}))` : `(${subOr})`);
  }
  return exprs.join(" OR ");
}

function rawSearchDocument(relpath: string, root: string): { title: string; uri: string; body: string } | null {
  const fp = resolveDocFile(relpath, root);
  if (!fp) return null;
  try {
    const { fm, body } = parseFrontmatter(fs.readFileSync(fp, "utf8"));
    return { title: fm.title || relpath, uri: fm.uri || "", body };
  } catch {
    return null;
  }
}

export function searchDocuments(query: string, limit = 10, category = ""): HdkDoc[] {
  const root = resolveRoot();
  if (!root) throw new Error("HDK 未配置: config.json 设 hdkRoot");
  // 查询端统一分词: 先全 token AND MATCH，不足时允许缺一个词元。
  const tokens = segmentQuery(query);
  if (tokens.length === 0) return [];
  const safeLimit = Math.min(100, Math.max(1, Number.isFinite(limit) ? Math.trunc(limit) : 10));
  const cap = Math.max(safeLimit * 5, 50);
  const candidates = new Map<string, Candidate>();

  const collect = (expr: string, tier: number): void => {
    for (const name of ["harmonyos", "cangjie"] as const) {
      const db = openRoot(name, path.join(root, ".mcp_cache"));
      if (!db) continue;
      const catCond = category ? " AND category = ?" : "";
      const catParams = category ? [category] : [];
      let rows: Row[] = [];
      try {
        rows = db.prepare(
          `SELECT relpath, name, title, category, uri, substr(body, 1, 2000) AS indexedBody, ` +
          `bm25(fts, 3.0, 1.0) AS rank FROM fts WHERE fts MATCH ?${catCond} ` +
          `ORDER BY rank LIMIT ?`
        ).all(expr, ...catParams, cap) as Row[];
      } catch (e: any) {
        throw friendlyFtsError(name, e);
      }
      for (const r of rows) {
        const key = name + "\0" + r.relpath;
        if (candidates.has(key)) continue;
        const tl = r.title.toLowerCase();
        const titleHits = tokens.reduce((n, t) => n + Number(tl.includes(t.toLowerCase())), 0);
        candidates.set(key, { ...r, root, score: tier + titleHits * 100 - r.rank });
      }
    }
  };

  collect(strictMatchExpression(tokens), 10_000);
  if (candidates.size < safeLimit) {
    // 第 2 层: 去掉单字噪声词元后重试 AND(长问句切出的"传/参"等)
    const noSingle = tokens.filter((t) => t.length > 1);
    if (noSingle.length > 0 && noSingle.length !== tokens.length) {
      collect(strictMatchExpression(noSingle), 0);
    }
  }
  if (candidates.size < safeLimit) {
    // 第 3 层: 允许缺一个词元
    const relaxed = relaxedMatchExpression(tokens);
    if (relaxed) collect(relaxed, 0);
  }
  if (candidates.size < safeLimit) {
    // 第 4 层: 整词替换为 cut_for_search 子词兜底(子词必在索引词元集合内)
    const subtok = subtokenMatchExpression(tokens);
    if (subtok) collect(subtok, 0);
  }

  const queryLower = query.trim().toLowerCase();
  const renderCap = Math.max(safeLimit * 3, 30);
  const rendered = [...candidates.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, renderCap)
    .map((candidate) => {
      const raw = rawSearchDocument(candidate.relpath, candidate.root);
      const title = raw?.title ?? candidate.title;
      const body = raw?.body ?? candidate.indexedBody;
      const titleLower = title.toLowerCase();
      let score = candidate.score;
      if (queryLower && titleLower.includes(queryLower)) score += 2_000;
      for (const token of tokens) if (titleLower.includes(token.toLowerCase())) score += 200;
      return {
        id: candidate.name,
        file: candidate.relpath,
        title,
        uri: raw?.uri || candidate.uri,
        category: candidate.category,
        snippet: makeSnippet(body, tokens),
        score,
      };
    });

  rendered.sort((a, b) => b.score - a.score);
  return rendered.slice(0, safeLimit).map(({ score: _score, ...doc }) => doc);
}

function isWithin(base: string, candidate: string): boolean {
  const rel = path.relative(path.resolve(base), path.resolve(candidate));
  return rel === "" || (!rel.startsWith(".." + path.sep) && rel !== ".." && !path.isAbsolute(rel));
}

function resolveDocFile(relpath: string, root: string): string | null {
  const rp = relpath.replace(/\\/g, "/");
  const isCangjie = rp.startsWith(CANGJIE_PREFIX);
  const rel = isCangjie ? rp.slice(CANGJIE_PREFIX.length) : rp;
  const base = isCangjie ? path.join(root, "cangjie_docs") : path.join(root, "harmonyos_docs");
  const fp = path.resolve(base, rel.endsWith(".md") ? rel : rel + ".md");
  if (isWithin(base, fp) && fs.existsSync(fp)) return fp;
  // 未带前缀的仓颉 relpath 也尝试 cangjie 根
  if (!isCangjie) {
    const cfp = path.resolve(path.join(root, "cangjie_docs"), rel.endsWith(".md") ? rel : rel + ".md");
    if (isWithin(path.join(root, "cangjie_docs"), cfp) && fs.existsSync(cfp)) return cfp;
  }
  return null;
}

function parseFrontmatter(text: string): { fm: Record<string, string>; body: string } {
  const m = text.match(/^---\s*\r?\n(.*?)\r?\n---\s*(\r?\n|$)/s);
  if (!m) return { fm: {}, body: text };
  const fm: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { fm, body: text.slice(m[0].length) };
}

export function getDocument(docId: string, offset = 0, maxChars = 20_000): string {
  const root = resolveRoot();
  if (!root) throw new Error("HDK 未配置: config.json 设 hdkRoot");
  docId = (docId || "").trim();
  if (!docId) return "空文档 id";
  // 1) 按 name 精确反查(docnames 索引表)
  for (const name of ["harmonyos", "cangjie"] as const) {
    const db = openRoot(name, path.join(root, ".mcp_cache"));
    if (!db) continue;
    try {
      const row = db.prepare("SELECT relpath FROM docnames WHERE name = ?").get(docId) as any;
      if (row) {
        const fp = resolveDocFile(row.relpath, root);
        if (fp) return renderDoc(fp, row.relpath, offset, maxChars);
      }
    } catch (e) {
      // 旧库无 docnames 表时静默走 relpath 回退; 其余(BUSY/损坏)给可操作错误。
      if (!/no such table/i.test(String((e as Error)?.message ?? e))) throw friendlyFtsError(name, e);
    }
  }
  // 2) 直接当作 relpath
  const fp = resolveDocFile(docId, root);
  if (fp) return renderDoc(fp, docId, offset, maxChars);
  return "未找到文档: " + docId;
}

function renderDoc(fp: string, relpath: string, offset: number, maxChars: number): string {
  const { fm, body } = parseFrontmatter(fs.readFileSync(fp, "utf8"));
  const safeOffset = Math.min(body.length, Math.max(0, Number.isFinite(offset) ? Math.trunc(offset) : 0));
  const safeMax = Math.min(50_000, Math.max(1_000, Number.isFinite(maxChars) ? Math.trunc(maxChars) : 20_000));
  const chunk = body.slice(safeOffset, safeOffset + safeMax);
  const nextOffset = safeOffset + chunk.length;
  let out = "# " + (fm.title || relpath) + "\n\n";
  if (fm.uri) out += "来源: " + fm.uri + "\n\n";
  out += chunk;
  out += "\n\n---\n文档片段 offset=" + safeOffset + " chars=" + chunk.length + " total=" + body.length;
  if (nextOffset < body.length) out += " nextOffset=" + nextOffset;
  return out;
}

export function listCategories(): Array<{ category: string; count: number }> {
  const root = resolveRoot();
  if (!root) throw new Error("HDK 未配置: config.json 设 hdkRoot");
  const out: Array<{ category: string; count: number }> = [];
  for (const name of ["harmonyos", "cangjie"] as const) {
    const db = openRoot(name, path.join(root, ".mcp_cache"));
    if (!db) continue;
    try {
      const rows = db.prepare("SELECT COALESCE(category, '_none') AS c, count(*) AS n FROM docmap GROUP BY category ORDER BY n DESC").all() as any[];
      out.push(...rows.map((r) => ({ category: r.c, count: r.n })));
    } catch { /* 旧库 */ }
  }
  return out.sort((a, b) => b.count - a.count);
}

export function closeHdk(): void {
  for (const conn of conns.values()) {
    try { conn.db.close(); } catch { /* 已关闭 */ }
  }
  conns.clear();
}
