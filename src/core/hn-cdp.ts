import { explicitHdcArgs, runHnScript, pickTarget, defaultArtifactDir } from "./hn-skill.js";
import { tail } from "./proc.js";

// hn_cdp 底座: ArkWeb/WebView Chrome DevTools Protocol 通道。
// probe 借上游 harmony-next 技能包 device_evidence_bundle.py 的 webview-devtools
// 子命令(socket 枚举/陈旧 fport 分类/有界 fport/HTTP 探测), 本模块只做 argv 构造
// 与结果信封封装; eval 用 Node 22+ 的全局 WebSocket 客户端直连 CDP 端点执行
// Runtime.evaluate, 零新依赖。上游仓无 LICENSE, 不收编源码, 仅子进程调用。

// ---------- probe: 上游 webview-devtools 诊断 ----------

export interface HnCdpProbeOptions {
  /** 设备目标(127.0.0.1:port), 省略取全量在线目标首个。 */
  target?: string;
  /** 证据产物目录, 省略=系统临时目录 hn-cdp 前缀隔离。 */
  artifactDir?: string;
  /** 指定 WebView socket(webview_devtools_remote_<pid>, 可带 localabstract: 前缀); 多 WebView 在线时必填。 */
  remoteSocket?: string;
  /** 上游脚本单命令超时上限, 默认 120000ms。 */
  timeoutMs?: number;
  /** 以下仅测试注入: 技能根/解释器/在线目标列表, 生产路径不传。
   *  hdc 供测试覆盖默认 toolchain().hdc 解析(null=不传 --hdc)。 */
  root?: string;
  interpreter?: string;
  onlineTargetList?: () => Promise<string[]>;
  hdc?: string | null;
}

export interface HnCdpProbeEnvelope {
  action: "probe";
  target: string;
  artifactDir: string;
  /** 上游脚本顶层 JSON 原样展开: sockets/staleForwards/fportStatus/httpProbe/failureCode 等。 */
  [key: string]: unknown;
}

/**
 * 执行 webview-devtools 诊断并返回信封。上游失败(exit 2)也会输出带 failureCode
 * 的 JSON——那是诊断结论而非工具错误, 原样透传给调用方自行判定;
 * 只有 stdout 提取不出 JSON 对象才算工具级失败(fail-loud)。
 */
export async function hnCdpProbe(opts: HnCdpProbeOptions = {}): Promise<HnCdpProbeEnvelope> {
  const target = await pickTarget(opts.target, { onlineTargetList: opts.onlineTargetList });
  const artifactDir = opts.artifactDir ?? defaultArtifactDir("hn-cdp");
  // flag 名以脚本 argparse 为准(device_evidence_bundle.py build_parser):
  // --target / --artifact-dir / --remote-socket / --json。
  const args = ["webview-devtools", "--target", target, "--artifact-dir", artifactDir, "--json"];
  if (opts.remoteSocket) args.push("--remote-socket", opts.remoteSocket);
  // 显式 --hdc: 规避上游 env:HDC 盲信目录导致的无 JSON 崩溃(见 hn-skill.explicitHdcArgs)。
  args.push(...explicitHdcArgs(opts.hdc));
  const r = await runHnScript("device_evidence_bundle.py", args, {
    timeoutMs: opts.timeoutMs ?? 120_000,
    root: opts.root,
    interpreter: opts.interpreter,
  });
  if (r.json === null || typeof r.json !== "object" || Array.isArray(r.json)) {
    throw new Error(`[device_evidence_bundle.py webview-devtools] 未返回 JSON 对象(exit ${r.code}):\n${tail(r.raw, 40)}`);
  }
  return { action: "probe", ...(r.json as Record<string, unknown>), target, artifactDir };
}

// ---------- eval: CDP Runtime.evaluate ----------

/**
 * WebSocket 客户端最小接口(传输层注入点): 生产用原生 WebSocket 实现,
 * 测试用内存 fake 回放合成 CDP 响应, 核心逻辑不碰任何网络。
 * 回调须在 connect() 之前注册(原生实现建连时才挂监听), 注册顺序由 eval 流程保证。
 */
export interface CdpTransport {
  connect(url: string): Promise<void>;
  send(text: string): void;
  onMessage(cb: (text: string) => void): void;
  onClose(cb: () => void): void;
  close(): void;
}

// Node 22+ 运行时有全局 WebSocket(undici), 但 @types/node@20 未声明该全局类型:
// 用最小结构接口经 globalThis 取构造器, 运行时缺失时报可操作错误。
interface NativeWebSocketLike {
  addEventListener(type: "open", cb: () => void): void;
  addEventListener(type: "message", cb: (ev: { data: unknown }) => void): void;
  addEventListener(type: "close", cb: () => void): void;
  addEventListener(type: "error", cb: () => void): void;
  send(data: string): void;
  close(): void;
}

type NativeWebSocketCtor = new (url: string) => NativeWebSocketLike;

function nativeWebSocketCtor(): NativeWebSocketCtor {
  const ctor = (globalThis as { WebSocket?: NativeWebSocketCtor }).WebSocket;
  if (!ctor) throw new Error("当前 Node 运行时没有全局 WebSocket(需要 Node >= 22), hn_cdp eval 不可用");
  return ctor;
}

/** 默认传输层: 全局 WebSocket 客户端。connect 在 open 时落地, error/提前 close 时拒绝。 */
export function createNativeTransport(): CdpTransport {
  let ws: NativeWebSocketLike | null = null;
  let messageCb: ((text: string) => void) | null = null;
  let closeCb: (() => void) | null = null;
  let closeNotified = false;
  return {
    connect(url: string): Promise<void> {
      const Ctor = nativeWebSocketCtor();
      return new Promise<void>((resolve, reject) => {
        let socket: NativeWebSocketLike;
        try {
          socket = new Ctor(url);
        } catch (e) {
          reject(new Error(`WebSocket 连接失败: ${url} (${e instanceof Error ? e.message : String(e)})`));
          return;
        }
        ws = socket;
        let settled = false;
        socket.addEventListener("open", () => {
          if (settled) return;
          settled = true;
          resolve();
        });
        socket.addEventListener("error", () => {
          if (settled) return;
          settled = true;
          reject(new Error(`WebSocket 连接失败: ${url}`));
        });
        socket.addEventListener("close", () => {
          if (!settled) {
            // open 之前就 close: 让 connect 以失败收场而不是永远挂起
            settled = true;
            reject(new Error(`WebSocket 连接失败(握手前即关闭): ${url}`));
          }
          if (!closeNotified) {
            closeNotified = true;
            closeCb?.();
          }
        });
        socket.addEventListener("message", (ev) => {
          // CDP 帧是文本; 二进制帧强转字符串后 JSON.parse 失败, 由上层忽略
          messageCb?.(typeof ev.data === "string" ? ev.data : String(ev.data));
        });
      });
    },
    send(text: string): void {
      if (!ws) throw new Error("WebSocket 尚未连接");
      ws.send(text);
    },
    onMessage(cb: (text: string) => void): void {
      messageCb = cb;
    },
    onClose(cb: () => void): void {
      closeCb = cb;
    },
    close(): void {
      if (!ws) return;
      const socket = ws;
      ws = null;
      try { socket.close(); } catch { /* 已关闭 */ }
    },
  };
}

export interface CdpEvalOptions {
  /** CDP 端点(ws://...), 来自 hn_cdp probe 结果的 webSocketDebuggerUrl。 */
  webSocketUrl: string;
  /** 页面内执行的 JS 表达式。 */
  expression: string;
  /** 等待 Promise 结果, 默认 true。 */
  awaitPromise?: boolean;
  /** 按值返回(可 JSON 化), 默认 true。 */
  returnByValue?: boolean;
  /** 等待对应 id 响应的上限, 默认 15000ms, 超时报错并关闭连接。 */
  timeoutMs?: number;
  /** 传输层工厂注入点: 测试传内存 fake, 生产省略用原生 WebSocket。 */
  transportFactory?: () => CdpTransport;
}

export interface CdpEvalEnvelope {
  action: "eval";
  webSocketUrl: string;
  /** RemoteObject 的值(returnByValue=true 时为可 JSON 化结果; 截断时变为截断后的序列化字符串)。 */
  value?: unknown;
  /** RemoteObject.type("string"/"number"/"object"/"undefined" 等)。 */
  valueType?: string;
  /** RemoteObject.description(对象/异常的摘要描述)。 */
  valueDescription?: string;
  /** 序列化后超 64KB 被截断时为 true, 此时 value 是截断后的 JSON 文本。 */
  truncated?: boolean;
  /** 页面异常细节(原样透传, 含 exception.description), 出现时不返回 value。 */
  exceptionDetails?: unknown;
}

// eval 结果上限: 序列化后按 UTF-8 字节计, 超限截断并加 truncated 标记。
const MAX_RESULT_BYTES = 64 * 1024;

// 消息 id 全进程自增: 同进程多次 eval 不会撞 id(单连接单消息, 防御性设计)。
let nextMessageId = 1;

function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

/** 按 UTF-8 字节上限截断字符串, 回退到字符边界(不劈开多字节序列)。 */
function truncateUtf8ToBytes(s: string, maxBytes: number): string {
  const buf = Buffer.from(s, "utf8");
  if (buf.length <= maxBytes) return s;
  let end = maxBytes;
  // buf[end] 是续字节(10xxxxxx)说明该字符被劈开: 逐字节回退到其首字节。
  // 停在首字节(或 ASCII/越界)时 [0, end) 已完整排除被劈开的字符, 即为安全边界,
  // 不能再多剥——多剥一位反而切掉前一个字符的尾字节, 产生 replacement char。
  while (end > 0 && (buf[end] & 0xc0) === 0x80) end--;
  return buf.subarray(0, end).toString("utf8");
}

/**
 * 结果钳制: JSON.stringify 后超 64KB 则把 value 替换为截断后的序列化文本并置 truncated。
 * (信封本身要能被 MCP 层再序列化, 所以截断产物保持字符串形态而非残缺 JSON。)
 */
function clampResultValue(value: unknown): { value: unknown; truncated: boolean } {
  let text: string | undefined;
  try { text = JSON.stringify(value); } catch { text = undefined; }  // BigInt/循环引用等不可序列化
  if (text === undefined) return { value, truncated: false };
  if (Buffer.byteLength(text, "utf8") <= MAX_RESULT_BYTES) return { value, truncated: false };
  return { value: truncateUtf8ToBytes(text, MAX_RESULT_BYTES), truncated: true };
}

/**
 * 对指定 webSocketDebuggerUrl 执行 Runtime.evaluate:
 * id 自增构造请求 → 按 id 关联响应(忽略 CDP 事件与其它 id) → 提取
 * result.result.{type,value,description} 或 exceptionDetails → 超限截断。
 * 任何路径(成功/异常/超时/提前关闭/发送失败)都经 finally 干净关闭 WebSocket。
 */
export async function hnCdpEval(opts: CdpEvalOptions): Promise<CdpEvalEnvelope> {
  const factory = opts.transportFactory ?? createNativeTransport;
  const id = nextMessageId++;
  const request = JSON.stringify({
    id,
    method: "Runtime.evaluate",
    params: {
      expression: opts.expression,
      awaitPromise: opts.awaitPromise ?? true,
      returnByValue: opts.returnByValue ?? true,
    },
  });
  const transport = factory();
  try {
    await transport.connect(opts.webSocketUrl);
    return await new Promise<CdpEvalEnvelope>((resolve, reject) => {
      let settled = false;
      const timer = setTimeout(() => {
        settle(() => reject(new Error(`CDP 响应超时(${opts.timeoutMs ?? 15_000}ms): 未收到 id=${id} 的 Runtime.evaluate 结果`)));
      }, opts.timeoutMs ?? 15_000);
      const settle = (fn: () => void) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        fn();
      };
      transport.onClose(() => settle(() => reject(new Error("WebSocket 在收到 CDP 响应前已关闭"))));
      transport.onMessage((text) => {
        let msg: unknown;
        try { msg = JSON.parse(text); } catch { return; }  // 非 JSON 帧忽略
        if (!isRecord(msg) || msg["id"] !== id) return;    // CDP 事件或其它 id 的响应
        if (msg["error"] !== undefined) {
          const err = isRecord(msg["error"]) ? msg["error"] : {};
          const message = typeof err["message"] === "string" ? err["message"] : text.slice(0, 500);
          settle(() => reject(new Error(`CDP 协议错误: ${message}`)));
          return;
        }
        const result = isRecord(msg["result"]) ? msg["result"] : {};
        const exception = result["exceptionDetails"];
        if (exception !== undefined && exception !== null) {
          const clamped = clampResultValue(exception);
          settle(() => resolve({
            action: "eval",
            webSocketUrl: opts.webSocketUrl,
            exceptionDetails: clamped.value,
            ...(clamped.truncated ? { truncated: true } : {}),
          }));
          return;
        }
        const remote = isRecord(result["result"]) ? result["result"] : {};
        const valueType = typeof remote["type"] === "string" ? remote["type"] : undefined;
        const valueDescription = typeof remote["description"] === "string" ? remote["description"] : undefined;
        const clamped = clampResultValue(remote["value"]);
        settle(() => resolve({
          action: "eval",
          webSocketUrl: opts.webSocketUrl,
          ...(clamped.value !== undefined ? { value: clamped.value } : {}),
          ...(valueType !== undefined ? { valueType } : {}),
          ...(valueDescription !== undefined ? { valueDescription } : {}),
          ...(clamped.truncated ? { truncated: true } : {}),
        }));
      });
      try {
        transport.send(request);
      } catch (e) {
        settle(() => reject(e instanceof Error ? e : new Error(String(e))));
      }
    });
  } finally {
    transport.close();
  }
}
