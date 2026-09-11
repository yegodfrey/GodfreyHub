import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { pathToFileURL } from "node:url";
import { toolchain } from "../core/paths.js";
import { abortableSleep, AbortedError } from "../core/sync.js";
import { FrameConnection, spawnFrameProcess } from "./frame.js";
import { DiagnosticCache } from "./diagnostics-cache.js";
import { ArktsLspError, loadDevEcoProjectModules } from "./project-config.js";

// ArkTS 会话: 每个工程根一个 ace-server 进程(DevEco 内置语言服务, 无头)。
// 生命周期是显式状态机: spawning -> initializing -> ready -> dying。
// 任何状态不满足的会话都不允许复用——垂死/死掉的会话当场重建, 绝不让请求
// 等在一个永远不会 ready 的僵尸上(过去初始化失败会留下僵尸, 所有后续调用
// 白等满超时, 真实错误还被吞掉)。

export interface Session {
  conn: FrameConnection;
  documents: Map<string, { text: string; version: number }>;
  /** ace editorFiles 语义: 当前会话打开的文件集合(原生路径)。 */
  openedPaths: Set<string>;
  diagnostics: DiagnosticCache;
  ready: boolean;
  dying: boolean;
  /** 串行化文档打开/变更: 多 MCP 会话共享同一 ace-server, 并发 didOpen/didChange 交错会破坏服务端文档状态 */
  openChain: Promise<unknown>;
  /** 最近一次使用时间戳: 空闲超时回收用(每个工程根一个 ace-server, 8GB 堆上限) */
  lastUsed: number;
}

const arktsSessions = new Map<string, Session>();

// ace-server 空闲回收: 会话按工程根常驻(冷启动 10-60s, 缓存是必要设计), 但
// 每个进程 --max-old-space-size=8192, 长驻 MCP + 多项目会累积进程只增不减。
// 回收必须主动驱动(unref 定时器), 不能等"下一次 LSP 调用"顺带收割——那样
// 访问过 N 个工程后, N 个 8GB 上限的语言服务会一直挂到进程退出。
const SESSION_IDLE_TIMEOUT_MS = 10 * 60 * 1000;
const REAP_INTERVAL_MS = 60 * 1000;
// 冷会话初始化(模块装载)上限, 与 dev_check_* 工具描述一致
export const ARKTS_INIT_READY_TIMEOUT_MS = 120000;

let reapTimer: NodeJS.Timeout | null = null;

function ensureReaper(): void {
  if (reapTimer) return;
  reapTimer = setInterval(() => {
    const now = Date.now();
    for (const [, s] of arktsSessions) {
      if (now - s.lastUsed > SESSION_IDLE_TIMEOUT_MS && !s.dying) {
        s.dying = true;
        s.conn.kill(); // onExit 自动从映射删除
      }
    }
  }, REAP_INTERVAL_MS);
  reapTimer.unref();
}

export function touchArktsSession(root: string): void {
  const s = arktsSessions.get(root);
  if (s) s.lastUsed = Date.now();
}

export function disposeArktsSessions(): void {
  for (const s of arktsSessions.values()) s.conn.kill();
  arktsSessions.clear();
}

export function findProjectRoot(start: string): string | null {
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

// ace-server 日志目录: 按天分目录, 启动会话时顺手清理 7 天前的旧目录。
// 过去每次冷启动新建 Date.now() 目录且永不清理, 磁盘慢性泄漏。
function prepareAceLogDir(): string {
  const base = path.join(os.tmpdir(), "godfreyhub", "ace-server");
  const day = new Date().toISOString().slice(0, 10);
  const dir = path.join(base, day, String(process.pid) + "-" + Date.now().toString(36));
  fs.mkdirSync(dir, { recursive: true });
  try {
    for (const e of fs.readdirSync(base, { withFileTypes: true })) {
      if (!e.isDirectory() || !/^\d{4}-\d{2}-\d{2}$/.test(e.name)) continue;
      const ageMs = Date.now() - Date.parse(e.name + "T00:00:00Z");
      if (ageMs > 7 * 24 * 3600 * 1000) {
        fs.rmSync(path.join(base, e.name), { recursive: true, force: true });
      }
    }
  } catch { /* 清理失败不影响功能 */ }
  return dir;
}

export function getArktsSession(projectRoot: string): Session {
  ensureReaper();
  const existing = arktsSessions.get(projectRoot);
  if (existing && !existing.dying && existing.conn.isAlive()) {
    existing.lastUsed = Date.now();
    return existing;
  }
  if (existing) {
    // 垂死/已死会话: 立即出清, 走全新启动(不等待 onExit 回调)。
    existing.dying = true;
    existing.conn.kill();
    arktsSessions.delete(projectRoot);
    existing.diagnostics.dispose();
  }

  const tc = toolchain();
  const acePath = aceServerPath();
  if (!tc.deveco || !acePath) throw new ArktsLspError("未找到 DevEco ace-server (plugins/openharmony/ace-server/out/index.js); 确认 DevEco 安装或设 DEVECO_PATH");
  // 纯同步的配置校验必须在 spawn 之前: project-config 缺失/无效是常见情况,
  // 后置校验会留下"已 spawn 但永不 initialize"的僵尸会话。
  const modules = loadDevEcoProjectModules(projectRoot);
  const logDir = prepareAceLogDir();

  const { conn } = spawnFrameProcess(tc.node, [
    "--max-old-space-size=8192", "--expose-gc", acePath, "--stdio",
    "--logger-path=" + logDir, "--logger-level=INFO",
  ], "ace-server", {
    cwd: projectRoot,
    env: { ...process.env, DEVECO_SDK_HOME: path.join(tc.deveco, "sdk", "default") },
  });

  const session: Session = {
    conn,
    documents: new Map(),
    openedPaths: new Set(),
    diagnostics: new DiagnosticCache(),
    ready: false,
    dying: false,
    openChain: Promise.resolve(),
    lastUsed: Date.now(),
  };
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
  session.conn.onExit(() => {
    session.dying = true;
    session.diagnostics.dispose();
    if (arktsSessions.get(projectRoot) === session) arktsSessions.delete(projectRoot);
  });
  arktsSessions.set(projectRoot, session);

  const rootUri = pathToFileURL(projectRoot).toString();
  // initialize 不 await 阻塞构造器之外 — 会话首用时完成；ready 以
  // aceProject/onModuleInitFinish 为准（模块装载完才能接收文件）。
  // 失败路径: 记录真实错误到 stderr(排障依据), 杀进程并出清映射——绝不留僵尸。
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
    if (session.dying) return;
    // initialized 通知的 params 承载 initializeOpenedFiles；editors 置空数组
    // 使打开文件即触发校验（与 DevEco 客户端空编辑器场景一致）。
    session.conn.notify("initialized", { initializeOpenedFiles: { editors: [] } });
    let done = false;
    const finish = () => { if (!done) { done = true; session.ready = true; } };
    session.conn.onNotification("aceProject/onModuleInitFinish", finish);
    // 兜底：模块装载通知缺失时按初始化响应 + 8s 视为就绪。
    setTimeout(finish, 8000).unref();
  }).catch((e) => {
    const detail = e instanceof Error ? e.message : String(e);
    process.stderr.write("[godfreyhub] ace-server 初始化失败(" + projectRoot + "): " + detail + "\n");
    session.dying = true;
    session.conn.kill();
    if (arktsSessions.get(projectRoot) === session) arktsSessions.delete(projectRoot);
    session.diagnostics.dispose();
  });
  return session;
}

async function awaitSessionReady(root: string, session: Session, deadline: number, signal: AbortSignal | undefined): Promise<void> {
  while (!session.ready) {
    if (signal?.aborted) throw new AbortedError("等待 ace-server 就绪期间被取消");
    if (session.dying || !arktsSessions.has(root) || !session.conn.isAlive()) {
      throw new ArktsLspError("ace-server 启动失败(详见进程 stderr 日志)");
    }
    if (Date.now() > deadline) throw new ArktsLspError("ace-server 初始化超时");
    await abortableSleep(200, signal);
  }
}

/** 就绪等待(供诊断收集等复用): 轮询至 ready, 垂死会话立即报错, 可取消。 */
export function waitForSessionReady(root: string, session: Session, deadline: number, signal?: AbortSignal): Promise<void> {
  return awaitSessionReady(root, session, deadline, signal);
}

export async function withArkts<T>(filePath: string, projectRootHint: string | undefined, signal: AbortSignal | undefined, fn: (s: Session, uri: string) => Promise<T>): Promise<T> {
  const resolved = path.resolve(filePath);
  if (!fs.existsSync(resolved)) throw new ArktsLspError("文件不存在: " + resolved);
  const root = findProjectRoot(projectRootHint ? path.resolve(projectRootHint, "x") : resolved) ?? findProjectRoot(resolved);
  if (!root) throw new ArktsLspError("未找到 ArkTS 工程根(缺少 build-profile.json5): " + path.dirname(resolved));
  const session = getArktsSession(root);
  // 等 initialize 完成(轮询, 可取消)
  await awaitSessionReady(root, session, Date.now() + ARKTS_INIT_READY_TIMEOUT_MS, signal);
  touchArktsSession(root);
  const uri = await ensureOpen(session, resolved, signal);
  return fn(session, uri);
}

/** 打开/变更文档(通知发往会话串行链, 保证并发请求不交错); 返回 uri */
export function ensureOpen(session: Session, filePath: string, signal?: AbortSignal): Promise<string> {
  const uri = pathToFileURL(filePath).toString();
  const task = session.openChain.then(() => {
    if (session.dying || !session.conn.isAlive()) {
      throw new ArktsLspError("ace-server 会话已退出, 请重试(会话将自动重建)");
    }
    const text = fs.readFileSync(filePath, "utf8");
    const opened = session.documents.get(uri);
    // editorFiles 必须声明"当前编辑器打开的全部文件"而非仅本次文件:
    // 每次只传当前文件等于宣告其他文件已关闭, 服务端会停发它们的诊断,
    // 而缓存里的旧诊断会被误当作新鲜结果返回。
    session.openedPaths.add(filePath);
    const editorFiles = [...session.openedPaths];
    if (!opened) {
      session.documents.set(uri, { text, version: 1 });
      session.diagnostics.clear(uri);
      // ace-server 不注册标准 textDocument/didOpen；文档打开必须走自定义
      // aceProject/onAsyncDidOpen 通知（envelope: { params: { textDocument },
      // requestId, editorFiles }）。
      session.conn.notify("aceProject/onAsyncDidOpen", {
        params: { textDocument: { uri, languageId: "arkts", version: 1, text } },
        requestId: -1,
        editorFiles,
      });
    } else if (opened.text !== text) {
      const next = { text, version: opened.version + 1 };
      session.documents.set(uri, next);
      session.diagnostics.clear(uri);
      session.conn.notify("aceProject/onAsyncDidChange", {
        params: { textDocument: { uri, version: next.version }, contentChanges: [{ text }] },
        requestId: -1,
        editorFiles,
      });
    }
    return uri;
  });
  // 断链保护: 单个文件读取失败不得阻塞后续打开
  session.openChain = task.catch(() => undefined);
  void signal; // 串行链任务本身不可中断; 取消在 withArkts 轮询层生效
  return task;
}
