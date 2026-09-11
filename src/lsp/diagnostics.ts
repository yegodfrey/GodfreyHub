import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { getArktsSession, ensureOpen, findProjectRoot, touchArktsSession, waitForSessionReady, ARKTS_INIT_READY_TIMEOUT_MS } from "./arkts-session.js";
import { ArktsLspError } from "./project-config.js";

// ArkTS 诊断收集: 批量并行等待, 共享一个截止时间, 未确认的文件标记 pending。
// "不伪造空诊断"是本模块的硬契约: pending 永远区别于已确认的零错误。

export interface LspDiagnosticsResult {
  diagnostics: any[];
  /** true = 等待超时仍未收到该文件的诊断（未确认干净，区别于已确认的零错误） */
  pending: boolean;
}

export { ARKTS_INIT_READY_TIMEOUT_MS };

/**
 * 批量诊断：一次会话内打开全部文件并并行等待诊断，共享一个截止时间。
 * 顺序逐文件等待会让首个文件的项目冷分析拖垮整个 MCP 请求（客户端超时先到，
 * 工具整体 -32001）。返回按文件的结果，未在截止前到达的文件标记 pending。
 */
export async function lspDiagnosticsMany(files: string[], opts: { projectRoot?: string; timeoutMs?: number; signal?: AbortSignal } = {}): Promise<Record<string, LspDiagnosticsResult>> {
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
  await waitForSessionReady(root, session, deadline, opts.signal);
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
  for (const f of missing) await ensureOpen(session, path.resolve(f), opts.signal);
  const waitFor = (f: string): Promise<LspDiagnosticsResult> => {
    const uri = pathToFileURL(path.resolve(f)).toString();
    const cached = session.diagnostics.get(uri);
    if (cached !== undefined) return Promise.resolve({ diagnostics: cached, pending: false });
    return new Promise((resolve) => {
      const remaining = deadline - Date.now();
      if (remaining <= 0) { resolve({ diagnostics: [], pending: true }); return; }
      session.diagnostics.wait(uri, remaining).then((arrived) => {
        const fresh = session.diagnostics.get(uri);
        resolve(fresh !== undefined
          ? { diagnostics: fresh, pending: false }
          : { diagnostics: arrived, pending: true });
      });
    });
  };
  const results = await Promise.all(missing.map(async (f) => [f, await waitFor(f)] as const));
  for (const [f, r] of results) out[f] = r;
  return out;
}
