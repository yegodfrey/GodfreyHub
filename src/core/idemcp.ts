import http from "node:http";

// DevEco Studio 26 内置 MCP 服务器(IDE 进程内, JetBrains 系): 设置→工具→MCP服务器
// 启用后监听 127.0.0.1:<port>(默认 64342), streamable HTTP, 会话经 mcp-session-id 头。
// 工具操作"IDE 当前打开的工程", 路径相对该工程根; IDE 未运行时全部工具快速报错。

export interface IdeMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
}

export interface IdeMcpCallResult {
  content: Array<{ type: string; text?: string }>;
  isError?: boolean;
}

interface Session {
  id: string;
  created: number;
}

let cachedSession: Session | null = null;
let cachedPort = 0;

function idePort(): number {
  const fromEnv = Number(process.env.GODFREYHUB_IDE_MCP_PORT);
  if (Number.isFinite(fromEnv) && fromEnv > 0) return fromEnv;
  return 64342;
}

function post(port: number, sessionId: string | null, body: unknown, timeoutMs: number): Promise<{ status: number; headers: http.IncomingHttpHeaders; text: string }> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = http.request({
      host: "127.0.0.1",
      port,
      method: "POST",
      path: "/stream",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/event-stream",
        ...(sessionId ? { "mcp-session-id": sessionId } : {}),
        "Content-Length": Buffer.byteLength(payload),
      },
      timeout: timeoutMs,
    }, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.push(c));
      res.on("end", () => resolve({ status: res.statusCode ?? 0, headers: res.headers, text: Buffer.concat(chunks).toString("utf8") }));
    });
    req.on("timeout", () => { req.destroy(new Error("IDE MCP 请求超时")); });
    req.on("error", reject);
    req.end(payload);
  });
}

function parseBody(text: string): any {
  const trimmed = text.trim();
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    try { return JSON.parse(trimmed); } catch { /* fallthrough */ }
  }
  // SSE 帧: 取最后一个 data: 行
  const lines = trimmed.split(/\r?\n/).filter((l) => l.startsWith("data:"));
  for (let i = lines.length - 1; i >= 0; i--) {
    try { return JSON.parse(lines[i].slice(5).trim()); } catch { /* 继续向前找 */ }
  }
  throw new Error("IDE MCP 响应不可解析: " + trimmed.slice(0, 120));
}

async function ensureSession(): Promise<Session> {
  const port = idePort();
  if (cachedSession && cachedPort === port && Date.now() - cachedSession.created < 10 * 60 * 1000) {
    return cachedSession;
  }
  const init = await post(port, null, {
    jsonrpc: "2.0", id: 1, method: "initialize",
    params: { protocolVersion: "2025-03-26", capabilities: {}, clientInfo: { name: "godfreyhub", version: "0.4.0" } },
  }, 5000);
  if (init.status !== 200) throw new Error("IDE MCP initialize 失败 HTTP " + init.status);
  const sessionId = init.headers["mcp-session-id"];
  if (typeof sessionId !== "string") throw new Error("IDE MCP 未返回会话 id");
  await post(port, sessionId, { jsonrpc: "2.0", method: "notifications/initialized" }, 5000).catch(() => undefined);
  cachedSession = { id: sessionId, created: Date.now() };
  cachedPort = port;
  return cachedSession;
}

async function rpc(method: string, params: unknown, id: number, timeoutMs: number): Promise<any> {
  const port = idePort();
  let session: Session;
  try {
    session = await ensureSession();
  } catch (e) {
    throw new Error("DevEco IDE MCP 不可达(需 IDE 运行且设置→工具→MCP服务器 已启用, 端口 " + port + "): " + String(e).slice(0, 120));
  }
  const res = await post(port, session.id, { jsonrpc: "2.0", id, method, params }, timeoutMs);
  if (res.status === 404 || res.status === 400) {
    // 会话失效: 重建一次
    cachedSession = null;
    const fresh = await ensureSession();
    const retry = await post(port, fresh.id, { jsonrpc: "2.0", id, method, params }, timeoutMs);
    return parseBody(retry.text);
  }
  return parseBody(res.text);
}

export async function ideMcpListTools(): Promise<IdeMcpTool[]> {
  const r = await rpc("tools/list", {}, 2, 8000);
  return (r?.result?.tools ?? []) as IdeMcpTool[];
}

export async function ideMcpCall(name: string, args: Record<string, unknown>, timeoutMs = 30000): Promise<IdeMcpCallResult> {
  const r = await rpc("tools/call", { name, arguments: args }, 3, timeoutMs);
  if (r?.error) throw new Error("IDE MCP 工具错误: " + JSON.stringify(r.error).slice(0, 200));
  return (r?.result ?? { content: [] }) as IdeMcpCallResult;
}

export function ideMcpResultText(result: IdeMcpCallResult): string {
  return (result.content || []).map((c) => (typeof c?.text === "string" ? c.text : "")).join("\n");
}
