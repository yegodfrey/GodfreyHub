import { spawn, type ChildProcess } from "node:child_process";

// JSON-RPC Content-Length 帧协议(零依赖, 手写)。
// 这是全包唯一与字节流打交道的地方, 严谨性优先:
//   - 响应判定以"id 存在且无 method"为准: 协议允许 result 缺省的 void 响应,
//     按"必须带 result/error"判定会让这类响应永远无人认领, 请求挂到超时;
//   - 子进程 'error'(spawn ENOENT 等)与 stdin EPIPE 必须有监听: 否则升级成
//     进程级 uncaughtException, 依赖全局兜底吞掉真实错误;
//   - Content-Length 带上限: 畸形/恶意帧不得撑爆内存;
//   - kill 后清理流, 避免排队写入已销毁的 stdin 触发 EPIPE。

export interface RpcMsg { jsonrpc: string; id?: number | string; method?: string; params?: any; result?: any; error?: any; }

const MAX_FRAME_BYTES = 64 * 1024 * 1024;

export class FrameConnection {
  private nextId = 1;
  private buf: Buffer = Buffer.alloc(0);
  private handlers = new Map<number | string, (m: RpcMsg) => void>();
  private notificationHandlers = new Map<string, (params: any) => void>();
  private exitHandlers: Array<(code: number | null) => void> = [];
  private killed = false;

  constructor(private child: ChildProcess, label: string) {
    child.stdout!.on("data", (d: Buffer | string) => this.feed(Buffer.isBuffer(d) ? d : Buffer.from(d, "utf8")));
    child.stderr?.on("data", (d: Buffer) => {
      const s = d.toString().trim();
      if (s && !s.includes("heartbeat")) process.stderr.write("[" + label + "] " + s + "\n");
    });
    // spawn 失败(ENOENT/EACCES)只发 'error' 不发 'exit': 必须同样清空 pending。
    child.on("error", () => {
      this.failAllPending(new Error("语言服务子进程错误(spawn 失败或管道断裂): " + label));
      for (const h of this.exitHandlers) h(null);
      this.exitHandlers = [];
    });
    child.on("exit", (code) => {
      this.failAllPending(new Error("语言服务已退出 (code=" + (code ?? "null") + ")"));
      for (const h of this.exitHandlers) h(code);
      this.exitHandlers = [];
    });
    // kill 之后排队的写入会触发 EPIPE: 吞掉管道错误, 请求方由 pending 清理负责。
    child.stdin?.on("error", () => { /* 由 exit/error 路径处理 */ });
  }

  private failAllPending(error: Error): void {
    for (const [id, handler] of this.handlers) {
      handler({ jsonrpc: "2.0", id, error: { message: error.message } });
    }
    this.handlers.clear();
  }

  private feed(chunk: Buffer): void {
    // 每个数据事件只做一次拼接(不是每帧一次); 解析后残留区用 subarray 丢弃已消费前缀。
    this.buf = this.buf.length === 0 ? chunk : Buffer.concat([this.buf, chunk]);
    for (;;) {
      const headerEnd = this.buf.indexOf("\r\n\r\n");
      if (headerEnd < 0) {
        // 防御: 头部区无限增长(无分隔的垃圾流)不得超过上限
        if (this.buf.length > MAX_FRAME_BYTES) this.buf = Buffer.alloc(0);
        return;
      }
      const header = this.buf.subarray(0, headerEnd).toString("ascii");
      const m = header.match(/Content-Length:\s*(\d+)/i);
      if (!m) { this.buf = Buffer.from(this.buf.subarray(headerEnd + 4)); continue; }
      const len = Number(m[1]);
      if (!Number.isFinite(len) || len < 0 || len > MAX_FRAME_BYTES) {
        this.buf = Buffer.alloc(0); // 畸形帧: 丢弃整个缓冲区, 无法安全重新同步
        return;
      }
      if (this.buf.length < headerEnd + 4 + len) return; // 帧未完整
      const body = this.buf.subarray(headerEnd + 4, headerEnd + 4 + len).toString("utf8");
      this.buf = Buffer.from(this.buf.subarray(headerEnd + 4 + len));
      let msg: RpcMsg;
      try { msg = JSON.parse(body); } catch { continue; }
      if (msg.id !== undefined && !msg.method) {
        // 响应(含 result 缺省的 void 响应): 认领给等待者
        const h = this.handlers.get(msg.id);
        if (h) { this.handlers.delete(msg.id); h(msg); }
      } else if (msg.id !== undefined && msg.method) {
        this.answerServerRequest(msg);
      } else if (msg.method) {
        const nh = this.notificationHandlers.get(msg.method);
        if (nh) nh(msg.params);
        else if (process.env.GODFREYHUB_LSP_TRACE) process.stderr.write("[godfreyhub] unhandled-note " + msg.method + "\n");
      }
    }
  }

  private answerServerRequest(msg: RpcMsg): void {
    // 未知服务端请求一律回 null: 至少不让服务端挂在等待上。语义化应答按需扩展。
    // 服务端请求很稀有且 historically 携带过校验结果, 必须留痕。
    process.stderr.write("[godfreyhub] srv-req " + msg.method + "\n");
    const result = msg.method === "workspace/configuration"
      ? (Array.isArray(msg.params?.items) ? msg.params.items.map(() => null) : [])
      : null;
    this.send({ jsonrpc: "2.0", id: msg.id, result });
  }

  request(method: string, params: any, timeoutMs = 60000, signal?: AbortSignal): Promise<any> {
    return new Promise((resolve, reject) => {
      if (signal?.aborted) { reject(new Error("请求已取消: " + method)); return; }
      const id = this.nextId++;
      let settled = false;
      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        this.handlers.delete(id);
        reject(new Error("LSP 请求超时: " + method));
      }, timeoutMs);
      const onAbort = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        this.handlers.delete(id);
        reject(new Error("请求已取消: " + method));
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      this.handlers.set(id, (msg) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        signal?.removeEventListener("abort", onAbort);
        msg.error ? reject(new Error(method + ": " + JSON.stringify(msg.error))) : resolve(msg.result);
      });
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

  /** 进程仍存活且未被主动终止(垂死会话不允许复用)。 */
  isAlive(): boolean {
    // signalCode 用宽松判空: 运行中为 null, fake/未启动的子进程可能为 undefined。
    return !this.killed && this.child.exitCode == null && !this.child.signalCode;
  }

  kill(): void {
    this.killed = true;
    if (this.child.exitCode == null && !this.child.signalCode) this.child.kill();
    // 尽快释放管道: 防止后续 notify() 排队写入已死进程的 stdin。
    try { this.child.stdin?.end(); } catch { /* 已销毁 */ }
  }
}

/** 便捷封装: 以 label 命名子进程并建立帧连接。 */
export function spawnFrameProcess(command: string, args: string[], label: string, opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): { child: ChildProcess; conn: FrameConnection } {
  const child = spawn(command, args, { stdio: ["pipe", "pipe", "pipe"], windowsHide: true, ...opts });
  return { child, conn: new FrameConnection(child, label) };
}
