import { spawn, type ChildProcess } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";
import { toolchain } from "./paths.js";

// 原生 LSP 客户端(零依赖, 手写 JSON-RPC Content-Length 帧协议):
//   ArkTS 会话 = 每个工程根一个 ace-server 进程(DevEco 内置语言服务, 无头)
//   C++ 会话   = 每个工程根一个 clangd 进程(DevEco 内置 llvm)
// 诊断走 publishDiagnostics 通知; 导航走标准 LSP 请求; hover 私有 payload 归一化为 Markdown

// ---------------- JSON-RPC 帧协议 ----------------

interface RpcMsg { jsonrpc: string; id?: number | string; method?: string; params?: any; result?: any; error?: any; }

export class FrameConnection {
  private nextId = 1;
  private buf = Buffer.alloc(0);
  private handlers = new Map<number | string, (m: RpcMsg) => void>();
  private notificationHandlers = new Map<string, (params: any) => void>();
  private exitHandlers: Array<(code: number | null) => void> = [];

  constructor(private child: ChildProcess, label: string) {
    child.stdout!.on("data", (d: Buffer | string) => this.feed(Buffer.isBuffer(d) ? d : Buffer.from(d, "utf8")));
    child.stderr?.on("data", (d: Buffer) => {
      const s = d.toString().trim();
      if (s && !s.includes("heartbeat")) process.stderr.write("[" + label + "] " + s + "\n");
    });
    child.on("exit", (code) => {
      for (const [id, handler] of this.handlers) {
        handler({ jsonrpc: "2.0", id, error: { message: "语言服务已退出 (code=" + (code ?? "null") + ")" } });
      }
      this.handlers.clear();
      for (const h of this.exitHandlers) h(code);
    });
  }

  private feed(chunk: Buffer): void {
    this.buf = Buffer.concat([this.buf, chunk]);
    for (;;) {
      const headerEnd = this.buf.indexOf("\r\n\r\n");
      if (headerEnd < 0) return;
      const header = this.buf.subarray(0, headerEnd).toString("ascii");
      const m = header.match(/Content-Length:\s*(\d+)/i);
      if (!m) { this.buf = this.buf.subarray(headerEnd + 4); continue; }
      const len = Number(m[1]);
      if (this.buf.length < headerEnd + 4 + len) return; // 帧未完整
      const body = this.buf.subarray(headerEnd + 4, headerEnd + 4 + len).toString("utf8");
      this.buf = this.buf.subarray(headerEnd + 4 + len);
      let msg: RpcMsg;
      try { msg = JSON.parse(body); } catch { continue; }
      if (msg.id !== undefined && !msg.method && (msg.result !== undefined || msg.error !== undefined)) {
        const h = this.handlers.get(msg.id);
        if (h) { this.handlers.delete(msg.id); h(msg); }
      } else if (msg.id !== undefined && msg.method) {
        this.answerServerRequest(msg);
      } else if (msg.method) {
        const nh = this.notificationHandlers.get(msg.method);
        if (nh) nh(msg.params);
      }
    }
  }

  private answerServerRequest(msg: RpcMsg): void {
    const result = msg.method === "workspace/configuration"
      ? (Array.isArray(msg.params?.items) ? msg.params.items.map(() => null) : [])
      : null;
    this.send({ jsonrpc: "2.0", id: msg.id, result });
  }

  request(method: string, params: any, timeoutMs = 60000): Promise<any> {
    return new Promise((resolve, reject) => {
      const id = this.nextId++;
      const timer = setTimeout(() => { this.handlers.delete(id); reject(new Error("LSP 请求超时: " + method)); }, timeoutMs);
      this.handlers.set(id, (msg) => { clearTimeout(timer); msg.error ? reject(new Error(method + ": " + JSON.stringify(msg.error))) : resolve(msg.result); });
      this.send({ jsonrpc: "2.0", id, method, params });
    });
  }

  notify(method: string, params: any): void {
    this.send({ jsonrpc: "2.0", method, params });
  }

  private send(msg: RpcMsg): void {
    const body = JSON.stringify(msg);
    this.child.stdin!.write("Content-Length: " + Buffer.byteLength(body, "utf8") + "\r\n\r\n" + body);
  }

  onNotification(method: string, handler: (params: any) => void): void {
    this.notificationHandlers.set(method, handler);
  }

  onExit(handler: (code: number | null) => void): void {
    this.exitHandlers.push(handler);
  }

  kill(): void {
    if (this.child.exitCode === null) this.child.kill();
  }
}

// ---------------- 会话管理 ----------------

export class DiagnosticCache {
  private values = new Map<string, any[]>();
  private waiters = new Map<string, Set<(diagnostics: any[]) => void>>();

  get(uri: string): any[] | undefined {
    return this.values.get(uri);
  }

  clear(uri: string): void {
    this.values.delete(uri);
  }

  publish(uri: string, diagnostics: any[]): void {
    this.values.set(uri, diagnostics);
    const pending = this.waiters.get(uri);
    if (!pending) return;
    this.waiters.delete(uri);
    for (const resolve of pending) resolve(diagnostics);
  }

  wait(uri: string, timeoutMs: number): Promise<any[]> {
    const cached = this.values.get(uri);
    if (cached !== undefined) return Promise.resolve(cached);
    return new Promise((resolve) => {
      const pending = this.waiters.get(uri) ?? new Set<(diagnostics: any[]) => void>();
      const finish = (diagnostics: any[]) => {
        clearTimeout(timer);
        pending.delete(finish);
        if (pending.size === 0) this.waiters.delete(uri);
        resolve(diagnostics);
      };
      // 超时: 只 resolve 等待者(空数组=未确认), 绝不写入 values 缓存——
      // 否则调用方 wait 返回后 fresh=get(uri) 恒非 undefined, 会把"超时未确认"
      // 误报成"已确认零错误"("不伪造空诊断"的承诺就破了)。
      const timer = setTimeout(() => finish([]), timeoutMs);
      pending.add(finish);
      this.waiters.set(uri, pending);
    });
  }
}

interface Session {
  conn: FrameConnection;
  documents: Map<string, { text: string; version: number }>;
  diagnostics: DiagnosticCache;
  ready: boolean;
  /** 串行化文档打开/变更: 多 MCP 会话共享同一 ace-server, 并发 didOpen/didChange 交错会破坏服务端文档状态 */
  openChain: Promise<unknown>;
  /** 最近一次使用时间戳: 空闲超时回收用(每个工程根一个 ace-server, 8GB 堆上限) */
  lastUsed: number;
}

function findProjectRoot(start: string): string | null {
  let dir = path.resolve(start);
  if (fs.existsSync(path.join(dir, "build-profile.json5"))) return dir;
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory() === false) dir = path.dirname(dir);
  for (;;) {
    if (fs.existsSync(path.join(dir, "build-profile.json5"))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) return null;
    dir = parent;
  }
}

function aceServerPath(): string | null {
  const tc = toolchain();
  if (!tc.deveco) return null;
  const p = path.join(tc.deveco, "plugins", "openharmony", "ace-server", "out", "index.js");
  return fs.existsSync(p) ? p : null;
}

// ---------------------------------------------------------------------------
// ace-server 初始化选项：从 .hvigor/cache/project-config.json 还原模块表。
//
// ace-server 的 checkInitializeParams 要求 initializationOptions 含
// rootUri / lspServerWorkspacePath / modules（缺任一即 "Initialization Options
// invalid"，语言服务直接停服、不发任何诊断）。模块表与 DevEco 客户端同源：
// 枚举 allModulePaths（或回退 modulePath），读取各模块 manifest 的 deviceTypes，
// SDK 路径由 etsLoaderPath 推导。字段名以 ace-server 6.1.1.300 实测为准。
// ---------------------------------------------------------------------------

const DEVICE_TYPES: Record<string, number> = {
  liteWearable: 1, wearable: 2, tv: 3, car: 4, phone: 5,
  smartVision: 6, tablet: 7, router: 8, "2in1": 10,
};

interface ProjectConfig {
  modulePath?: string;
  allModulePaths?: string[];
  entryModuleName?: string;
  targetName?: string;
  etsLoaderPath?: string;
  sdkInfo?: string;
  compileSdkVersion?: number | string;
  compatibleSdkVersion?: number | string;
  originCompatibleSdkVersion?: string | number;
  runtimeOS?: string;
  packageManagerType?: string;
  deviceTypes?: string[];
  isFaMode?: boolean;
  useNormalizedOHMUrl?: boolean;
  skipOhModulesLint?: boolean;
  enableStrictCheckOHModule?: boolean;
  disableSendableCheckRules?: unknown[];
  reExportCheckMode?: string;
  projectModel?: Record<string, { moduleName?: string }>;
  [key: string]: unknown;
}

function requireSdkLevel(value: unknown, field: string): string {
  const raw = String(value ?? "").trim();
  const legacyLevel = raw.match(/\((\d+)\)$/)?.[1];
  const unifiedLevel = raw.match(/^(\d+)(?:\.\d+\.\d+)?$/)?.[1];
  const level = legacyLevel ?? unifiedLevel;
  if (!level) {
    throw new ArktsLspError("project-config.json 缺少有效的 " + field + "，请使用当前 API 构建重新生成缓存");
  }
  return level;
}

function readModuleManifest(modulePath: string): { deviceTypes?: string[] } {
  const f = path.join(modulePath, "src", "main", "module.json5");
  if (!fs.existsSync(f)) return {};
  const txt = fs.readFileSync(f, "utf8");
  const d = txt.match(/["']deviceTypes["']\s*:\s*\[([^\]]*)\]/);
  return d ? { deviceTypes: Array.from(d[1].matchAll(/["'](\w+)["']/g)).map((m) => m[1]) } : {};
}

export function loadDevEcoProjectModules(projectRoot: string): any[] {
  const sourcePath = path.join(projectRoot, ".hvigor", "cache", "project-config.json");
  if (!fs.existsSync(sourcePath)) {
    throw new ArktsLspError(
      "缺少 " + sourcePath + "；先在 DevEco Studio 打开/构建项目（或 hub_build 一次）生成 hvigor 缓存");
  }
  const config: ProjectConfig = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  const etsLoaderPath = config.etsLoaderPath;
  if (!etsLoaderPath) throw new ArktsLspError("project-config.json 缺少 etsLoaderPath");
  const etsRoot = path.dirname(path.dirname(etsLoaderPath));
  const sdkJsPath = path.join(etsRoot, "api");
  const hmsSdkPath = path.join(path.dirname(path.dirname(etsRoot)), "hms");
  const hosSdkPath = fs.existsSync(hmsSdkPath) ? hmsSdkPath : undefined;
  const sdkInfo = String(config.sdkInfo ?? "");
  const sdkVer = sdkInfo.split(":").find((t) => /^\d+\.\d+\.\d+(\.\d+)?$/.test(t));
  const compileSdkVersion = sdkVer || String(config.compileSdkVersion ?? "");
  const compatibleSdkVersion = String(config.originCompatibleSdkVersion ?? config.compatibleSdkVersion ?? "");
  const compileSdkLevel = requireSdkLevel(config.compileSdkVersion ?? compileSdkVersion, "compileSdkVersion");
  const compatibleSdkLevel = requireSdkLevel(
    config.originCompatibleSdkVersion ?? config.compatibleSdkVersion,
    "compatibleSdkVersion",
  );
  const modulePaths = (Array.isArray(config.allModulePaths) && config.allModulePaths.length
    ? config.allModulePaths
    : [config.modulePath]).filter((p): p is string => Boolean(p));
  if (modulePaths.length === 0) throw new ArktsLspError("project-config.json 未枚举任何模块");
  return modulePaths.map((modulePath) => {
    const manifest = readModuleManifest(modulePath);
    const model = config.projectModel ? config.projectModel[modulePath] : undefined;
    const moduleName = model?.moduleName
      || (modulePath === config.modulePath ? config.entryModuleName : undefined)
      || config.targetName || "entry";
    const deviceTypes = manifest.deviceTypes || config.deviceTypes || ["phone"];
    return {
      moduleName,
      modulePath: modulePath.replace(/\\/g, "/"),
      deviceType: Array.from(new Set(deviceTypes.map((t) => DEVICE_TYPES[t] || 5))),
      aceLoaderPath: etsLoaderPath,
      jsComponentType: "declarative",
      sdkJsPath,
      hosSdkPath,
      compileSdkLevel,
      compileSdkVersion,
      compatibleSdkLevel,
      compatibleSdkVersion,
      apiType: config.isFaMode ? "faMode" : "stageMode",
      runtimeOs: config.runtimeOS,
      packageManagerType: config.packageManagerType,
      buildProfileParam: {
        useNormalizedOHMUrl: Boolean(config.useNormalizedOHMUrl),
        skipOhModulesLint: Boolean(config.skipOhModulesLint),
        enableStrictCheckOHModule: Boolean(config.enableStrictCheckOHModule),
        disableSendableCheckRules: config.disableSendableCheckRules || [],
        reExportCheckMode: config.reExportCheckMode,
      },
    };
  });
}

const arktsSessions = new Map<string, Session>();

export class ArktsLspError extends Error {}

// ace-server 空闲回收: 会话按工程根常驻(冷启动 10-60s, 缓存是必要设计), 但
// 每个进程 --max-old-space-size=8192, 长驻 MCP + 多项目会累积进程只增不减。
// 超过该时长无请求即 kill(连接 onExit 自动从映射删除), 下次调用重新冷启动。
const SESSION_IDLE_TIMEOUT_MS = 10 * 60 * 1000;
// 冷会话初始化(模块装载)上限, 与 dev_check_* 工具描述一致
const ARKTS_INIT_READY_TIMEOUT_MS = 120000;

function reapIdleArktsSessions(): void {
  const now = Date.now();
  for (const [root, s] of arktsSessions) {
    if (now - s.lastUsed > SESSION_IDLE_TIMEOUT_MS) s.conn.kill(); // onExit 自动删除映射
  }
}

function touchArktsSession(root: string): void {
  const s = arktsSessions.get(root);
  if (s) s.lastUsed = Date.now();
}

function getArktsSession(projectRoot: string): Session {
  reapIdleArktsSessions();
  const existing = arktsSessions.get(projectRoot);
  if (existing) {
    existing.lastUsed = Date.now();
    return existing;
  }
  const tc = toolchain();
  const acePath = aceServerPath();
  if (!tc.deveco || !acePath) throw new ArktsLspError("未找到 DevEco ace-server (plugins/openharmony/ace-server/out/index.js); 确认 DevEco 安装或设 DEVECO_PATH");
  const logDir = path.join(os.tmpdir(), "godfreyhub", "ace-server", String(Date.now()));
  fs.mkdirSync(logDir, { recursive: true });
  const child = spawn(tc.node, [
    "--max-old-space-size=8192", "--expose-gc", acePath, "--stdio",
    "--logger-path=" + logDir, "--logger-level=INFO",
  ], { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, cwd: projectRoot, env: { ...process.env, DEVECO_SDK_HOME: path.join(tc.deveco, "sdk", "default") } });

  const session: Session = { conn: new FrameConnection(child, "ace-server"), documents: new Map(), diagnostics: new DiagnosticCache(), ready: false, openChain: Promise.resolve(), lastUsed: Date.now() };
  session.conn.onNotification("textDocument/publishDiagnostics", (params: any) => {
    if (typeof params?.uri !== "string") return;
    const diags = Array.isArray(params.diagnostics) ? params.diagnostics : [];
    session.diagnostics.publish(params.uri, diags);
  });
  // ace-server 的校验结果按自定义通知 aceProject/doValidateDocument 回传
  // （result = { version, uri, diagnostics }），不是标准 publishDiagnostics。
  session.conn.onNotification("aceProject/doValidateDocument", (params: any) => {
    if (typeof params?.uri !== "string") return;
    const diags = Array.isArray(params.diagnostics) ? params.diagnostics : [];
    session.diagnostics.publish(params.uri, diags);
  });
  session.conn.onExit(() => arktsSessions.delete(projectRoot));
  arktsSessions.set(projectRoot, session);

  const rootUri = pathToFileURL(projectRoot).toString();
  const modules = loadDevEcoProjectModules(projectRoot);
  // initialize 不 await 阻塞构造器之外 — 会话首用时完成；ready 以
  // aceProject/onModuleInitFinish 为准（模块装载完才能接收文件）。
  session.conn.request("initialize", {
    processId: process.pid,
    rootUri,
    workspaceFolders: [{ uri: rootUri, name: path.basename(projectRoot) }],
    initializationOptions: {
      rootUri,
      lspServerWorkspacePath: projectRoot,
      modules,
      completionSortSetting: { enableIndexModuleRootDirEtsFile: false },
    },
    capabilities: { textDocument: { hover: { contentFormat: ["markdown", "plaintext"] }, publishDiagnostics: { relatedInformation: true } } },
  }, 120000).then(() => {
    // initialized 通知的 params 承载 initializeOpenedFiles；editors 置空数组
    // 使打开文件即触发校验（与 DevEco 客户端空编辑器场景一致）。
    session.conn.notify("initialized", { initializeOpenedFiles: { editors: [] } });
    let done = false;
    const finish = () => { if (!done) { done = true; session.ready = true; } };
    session.conn.onNotification("aceProject/onModuleInitFinish", finish);
    // 兜底：模块装载通知缺失时按初始化响应 + 8s 视为就绪。
    setTimeout(finish, 8000);
  }).catch((e) => { session.conn.kill(); arktsSessions.delete(projectRoot); });
  return session;
}

async function withArkts<T>(filePath: string, projectRootHint: string | undefined, fn: (s: Session, uri: string) => Promise<T>): Promise<T> {
  const resolved = path.resolve(filePath);
  if (!fs.existsSync(resolved)) throw new ArktsLspError("文件不存在: " + resolved);
  const root = findProjectRoot(projectRootHint ? path.resolve(projectRootHint, "x") : resolved) ?? findProjectRoot(resolved);
  if (!root) throw new ArktsLspError("未找到 ArkTS 工程根(缺少 build-profile.json5): " + path.dirname(resolved));
  const session = getArktsSession(root);
  // 等 initialize 完成(轮询 ARKTS_INIT_READY_TIMEOUT_MS)
  const deadline = Date.now() + ARKTS_INIT_READY_TIMEOUT_MS;
  while (!session.ready) {
    if (!arktsSessions.has(root)) throw new ArktsLspError("ace-server 启动失败(见 stderr)");
    if (Date.now() > deadline) throw new ArktsLspError("ace-server 初始化超时");
    await new Promise((r) => setTimeout(r, 200));
  }
  touchArktsSession(root);
  const uri = await ensureOpen(session, resolved);
  return fn(session, uri);
}

/** 打开/变更文档(通知发往会话串行链, 保证并发请求不交错); 返回 uri */
export function ensureOpen(session: Session, filePath: string): Promise<string> {
  const uri = pathToFileURL(filePath).toString();
  const task = session.openChain.then(() => {
    const text = fs.readFileSync(filePath, "utf8");
    const opened = session.documents.get(uri);
    if (!opened) {
      session.documents.set(uri, { text, version: 1 });
      session.diagnostics.clear(uri);
      // ace-server 不注册标准 textDocument/didOpen；文档打开必须走自定义
      // aceProject/onAsyncDidOpen 通知（envelope: { params: { textDocument },
      // requestId, editorFiles }），editorFiles 声明当前编辑器文件集合。
      session.conn.notify("aceProject/onAsyncDidOpen", {
        params: { textDocument: { uri, languageId: "arkts", version: 1, text } },
        requestId: -1,
        editorFiles: [filePath],
      });
    } else if (opened.text !== text) {
      const next = { text, version: opened.version + 1 };
      session.documents.set(uri, next);
      session.diagnostics.clear(uri);
      session.conn.notify("aceProject/onAsyncDidChange", {
        params: { textDocument: { uri, version: next.version }, contentChanges: [{ text }] },
        requestId: -1,
        editorFiles: [filePath],
      });
    }
    return uri;
  });
  // 断链保护: 单个文件读取失败不得阻塞后续打开
  session.openChain = task.catch(() => undefined);
  return task;
}

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

// ---------------- 公开 API ----------------

export interface LspPos { line: number; character: number; }

export function lspHover(filePath: string, pos: LspPos, projectRoot?: string) {
  return withArkts(filePath, projectRoot, async (s, uri) =>
    normalizeHover(await s.conn.request("textDocument/hover", { textDocument: { uri }, position: pos })));
}

export function lspDefinition(filePath: string, pos: LspPos, projectRoot?: string) {
  return withArkts(filePath, projectRoot, (s, uri) =>
    s.conn.request("textDocument/definition", { textDocument: { uri }, position: pos }));
}

export function lspReferences(filePath: string, pos: LspPos, projectRoot?: string) {
  return withArkts(filePath, projectRoot, (s, uri) =>
    s.conn.request("textDocument/references", { textDocument: { uri }, position: pos, context: { includeDeclaration: true } }));
}

export function lspSignatureHelp(filePath: string, pos: LspPos, projectRoot?: string) {
  return withArkts(filePath, projectRoot, (s, ui) =>
    s.conn.request("textDocument/signatureHelp", { textDocument: { uri: ui }, position: pos }));
}

export function lspDocumentSymbols(filePath: string, projectRoot?: string) {
  return withArkts(filePath, projectRoot, (s, uri) =>
    s.conn.request("textDocument/documentSymbol", { textDocument: { uri } }, 30000).catch(() => null));
}

export interface LspDiagnosticsResult {
  diagnostics: any[];
  /** true = 等待超时仍未收到该文件的诊断（未确认干净，区别于已确认的零错误） */
  pending: boolean;
}

export async function lspDiagnostics(filePath: string, opts: { projectRoot?: string; timeoutMs?: number } = {}): Promise<LspDiagnosticsResult> {
  const timeoutMs = opts.timeoutMs ?? 30000;
  return withArkts(filePath, opts.projectRoot, async (session, uri) => {
    const existing = session.diagnostics.get(uri);
    if (existing !== undefined) return { diagnostics: existing, pending: false };
    const arrived = await session.diagnostics.wait(uri, timeoutMs);
    const fresh = session.diagnostics.get(uri);
    return fresh !== undefined
      ? { diagnostics: fresh, pending: false }
      : { diagnostics: arrived, pending: true };
  });
}

/**
 * 批量诊断：一次会话内打开全部文件并并行等待诊断，共享一个截止时间。
 * 与 cppDiagnostics 同构——顺序逐文件等待会让首个文件的项目冷分析拖垮
 * 整个 MCP 请求（客户端超时先到，工具整体 -32001）。
 * 返回按文件的结果，未在截止前到达的文件标记 pending（绝不伪造空诊断）。
 */
export async function lspDiagnosticsMany(files: string[], opts: { projectRoot?: string; timeoutMs?: number } = {}): Promise<Record<string, LspDiagnosticsResult>> {
  const resolved = files.filter((f) => fs.existsSync(f));
  if (resolved.length === 0) return {};
  const timeoutMs = opts.timeoutMs ?? ARKTS_INIT_READY_TIMEOUT_MS;
  const first = path.resolve(resolved[0]);
  const root = findProjectRoot(opts.projectRoot ? path.resolve(opts.projectRoot, "x") : first) ?? findProjectRoot(first);
  if (!root) throw new ArktsLspError("未找到 ArkTS 工程根(缺少 build-profile.json5): " + path.dirname(first));
  const session = getArktsSession(root);
  // 就绪等待与诊断收集共享同一预算(timeoutMs): 冷会话首次调用需完成模块装载,
  // 该阶段耗时计入总等待(与工具描述"批量诊断总等待超时"一致)。
  const deadline = Date.now() + timeoutMs;
  while (!session.ready) {
    if (!arktsSessions.has(root)) throw new ArktsLspError("ace-server 启动失败(见 stderr)");
    if (Date.now() > deadline) throw new ArktsLspError("ace-server 初始化超时(就绪等待超过 " + timeoutMs + "ms)");
    await new Promise((r) => setTimeout(r, 200));
  }
  touchArktsSession(root);
  // 已缓存的文件直接取；未缓存的并行打开。
  const missing: string[] = [];
  const out: Record<string, LspDiagnosticsResult> = {};
  for (const f of resolved) {
    const uri = pathToFileURL(path.resolve(f)).toString();
    const cached = session.diagnostics.get(uri);
    if (cached !== undefined) {
      out[f] = { diagnostics: cached, pending: false };
    } else {
      missing.push(f);
    }
  }
  if (missing.length === 0) return out;
  for (const f of missing) await ensureOpen(session, path.resolve(f));
  const waitDeadline = deadline; // 诊断收集沿用就绪等待的同一截止时间
  const waitFor = (f: string): Promise<LspDiagnosticsResult> => {
    const uri = pathToFileURL(path.resolve(f)).toString();
    const cached = session.diagnostics.get(uri);
    if (cached !== undefined) return Promise.resolve({ diagnostics: cached, pending: false });
    return new Promise((resolve) => {
      const remaining = waitDeadline - Date.now();
      if (remaining <= 0) { resolve({ diagnostics: [], pending: true }); return; }
      session.diagnostics.wait(uri, remaining).then((arrived) => {
        const fresh = session.diagnostics.get(uri);
        resolve(fresh !== undefined
          ? { diagnostics: fresh, pending: false }
          : { diagnostics: arrived, pending: true });
      });
    });
  };
  // 并行等待结果直接写回 out(早先的"等完再逐个重取"是双等待冗余, 且第二循环
  // 是唯一写 out 的路径——删除会丢全部未缓存文件的结果)。
  const results = await Promise.all(missing.map(async (f) => [f, await waitFor(f)] as const));
  for (const [f, r] of results) out[f] = r;
  return out;
}

export function disposeArktsSessions(): void {
  for (const s of arktsSessions.values()) s.conn.kill();
  arktsSessions.clear();
}

// ---------------- 离线符号(轻量正则, 不依赖 LSP) ----------------

const SYMBOL_RE = /(?:export\s+)?(?:abstract\s+)?(struct|class|interface|enum|function|type)\s+([A-Za-z_$][\w$]*)/g;

export function documentSymbolsOffline(text: string): Array<{ kind: string; name: string; line: number }> {
  const out: Array<{ kind: string; name: string; line: number }> = [];
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    SYMBOL_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = SYMBOL_RE.exec(lines[i]))) {
      out.push({ kind: m[1], name: m[2], line: i + 1 });
    }
  }
  return out;
}

const WS_SKIP = new Set(["node_modules", "oh_modules", ".git", ".hvigor", "build", ".preview", ".idea", "entry/build"]);

export function workspaceSymbolsOffline(root: string, query: string, maxResults = 50): Array<{ name: string; kind: string; file: string; line: number }> {
  const out: Array<{ name: string; kind: string; file: string; line: number }> = [];
  const q = query.toLowerCase();
  const walk = (dir: string, depth: number) => {
    if (depth < 0 || out.length >= maxResults) return;
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (out.length >= maxResults) return;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) { if (!WS_SKIP.has(e.name)) walk(p, depth - 1); continue; }
      if (!/\.(ets|ts)$/.test(e.name)) continue;
      let text: string;
      try { text = fs.readFileSync(p, "utf8"); } catch { continue; }
      for (const sym of documentSymbolsOffline(text)) {
        if (q && !sym.name.toLowerCase().includes(q)) continue;
        out.push({ name: sym.name, kind: sym.kind, file: p, line: sym.line });
        if (out.length >= maxResults) return;
      }
    }
  };
  walk(path.resolve(root), 6);
  return out;
}

// ---------------- C++ (clangd) ----------------

function compileDatabasePaths(root: string): string[] {
  const candidates = new Set<string>();
  const add = (file: string) => {
    if (fs.existsSync(file)) candidates.add(path.resolve(file));
  };
  const collectInside = (dir: string) => {
    let entries: fs.Dirent[];
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const current = path.join(dir, entry.name);
      if (entry.isFile() && entry.name === "compile_commands.json") add(current);
      else if (entry.isDirectory()) collectInside(current);
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
    if (fs.existsSync(cxxRoot)) collectInside(cxxRoot);
  }
  return [...candidates];
}

function normalizedFile(file: string): string {
  const resolved = path.resolve(file).replace(/\\/g, "/");
  return process.platform === "win32" ? resolved.toLowerCase() : resolved;
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
  const ranked = databases.map((database) => ({
    database,
    matches: databaseMatchCount(database, requested),
    shared: normalizedFile(database) === normalizedFile(shared),
    modified: fs.statSync(database).mtimeMs,
  })).sort((a, b) => b.matches - a.matches || Number(b.shared) - Number(a.shared) || b.modified - a.modified);
  return path.dirname(ranked[0].database);
}

export async function cppDiagnostics(files: string[], opts: { projectRoot?: string; timeoutMs?: number } = {}): Promise<Record<string, any[]>> {
  const tc = toolchain();
  const clangd = tc.clangd;
  if (!clangd) throw new ArktsLspError("未找到 DevEco clangd; 确认 DevEco/OpenHarmony SDK 安装完整或设置 DEVECO_PATH");
  const first = path.resolve(files[0]);
  const root = findProjectRoot(opts.projectRoot ? path.resolve(opts.projectRoot, "x") : first) ?? path.dirname(first);
  const compileCommandsDir = resolveCompileCommandsDirectory(root, files);
  const child = spawn(clangd, ["--background-index=false", "--compile-commands-dir=" + (compileCommandsDir ?? root), compileCommandsDir ? "" : "--resource-dir=" + path.join(tc.deveco!, "sdk", "default", "openharmony", "native", "sysroot").replace(/\\/g, "/")].filter(Boolean), { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, cwd: root });
  const conn = new FrameConnection(child, "clangd");
  const diagnostics = new Map<string, any[]>();
  const timeoutMs = opts.timeoutMs ?? 120000;
  conn.onNotification("textDocument/publishDiagnostics", (params: any) => {
    if (typeof params?.uri === "string") diagnostics.set(params.uri, Array.isArray(params.diagnostics) ? params.diagnostics : []);
  });
  const deadline = Date.now() + timeoutMs;
  try {
    await conn.request("initialize", { processId: process.pid, rootUri: pathToFileURL(root).toString(), capabilities: {} }, 60000);
    conn.notify("initialized", {});
    for (const f of files) {
      const fp = path.resolve(f);
      if (!fs.existsSync(fp)) continue;
      conn.notify("textDocument/didOpen", { textDocument: { uri: pathToFileURL(fp).toString(), languageId: path.extname(fp).slice(1), version: 1, text: fs.readFileSync(fp, "utf8") } });
    }
    // 收集窗口: 等每个文件至少一次 publishDiagnostics 或超时
    while (Date.now() < deadline) {
      await new Promise((r) => setTimeout(r, 500));
      const wanted = files.filter((f) => fs.existsSync(path.resolve(f))).map((f) => pathToFileURL(path.resolve(f)).toString());
      if (wanted.length > 0 && wanted.every((u) => diagnostics.has(u))) break;
    }
  } finally {
    conn.kill();
  }
  const out: Record<string, any[]> = {};
  for (const f of files) {
    const u = pathToFileURL(path.resolve(f)).toString();
    out[f] = diagnostics.get(u) ?? [];
  }
  return out;
}

// uri -> 本地路径(结果转换用)
export function uriToPath(uri: string): string {
  return uri.startsWith("file://") ? fileURLToPath(uri) : uri;
}
