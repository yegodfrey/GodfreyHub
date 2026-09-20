import { existsSync } from "node:fs";
import path from "node:path";
import { run } from "./proc.js";
import { toolchain } from "./paths.js";
import type { LspDiagnosticsResult } from "../lsp/project-config.js";

// DevEco CLI (@deveco/deveco-cli) 的 `check arkts` 是官方 ArkTS 静态检查通路:
// 在本机实测能产出 ace-server 级类型诊断(2026-09-20 注入错误闭环), 而直连
// ace-server stdio 的长会话在本机会被门 2 静默吞掉诊断。诊断后端首选这里。

export interface DevEcoCliCheckItem extends LspDiagnosticsResult {
  /** CLI 原始行文本 */
  rawLines: string[];
}

export interface DevEcoCliCheckResult {
  available: boolean;
  /** 不可用时给出原因(未安装/执行失败), 供调用方回退 LSP 路径 */
  unavailableReason?: string;
  items: Record<string, DevEcoCliCheckItem>;
  totalErrors: number;
  durationMs: number;
}

const ANSI_RE = /\x1B\[[0-9;]*m/g;
// 形如 `entry\src\main\ets\pages\X.ets:37:7 - error: Type 'string' is not assignable...`
const DIAG_LINE_RE = /^(.+?):(\d+):(\d+)\s+-\s+(error|warning|suggestion):\s+(.+)$/;
const SEVERITY: Record<string, number> = { error: 1, warning: 2, suggestion: 3 };

export function parseArktsCheckOutput(stdout: string, projectRoot: string, files: string[]): {
  items: Record<string, DevEcoCliCheckItem>;
  totalErrors: number;
} {
  const byKey = new Map<string, DevEcoCliCheckItem>();
  const norm = (p: string) => path.resolve(projectRoot, p.trim()).replace(/\\/g, "/").toLowerCase();
  for (const f of files) byKey.set(norm(f), { diagnostics: [], pending: false, rawLines: [] });
  for (const rawLine of stdout.split(/\r?\n/)) {
    const line = rawLine.replace(ANSI_RE, "").trim();
    const m = line.match(DIAG_LINE_RE);
    if (!m) continue;
    const abs = norm(m[1]);
    const item = byKey.get(abs);
    if (!item) continue;
    item.diagnostics.push({
      range: { start: { line: Number(m[2]) - 1, character: Number(m[3]) - 1 } },
      severity: SEVERITY[m[4]] ?? 3,
      message: m[5].slice(0, 500),
      code: null,
    });
    item.rawLines.push(line);
  }
  const byKeyObj: Record<string, DevEcoCliCheckItem> = {};
  for (const [k, v] of byKey) byKeyObj[k] = v;
  let totalErrors = 0;
  for (const item of byKey.values()) totalErrors += item.diagnostics.filter((d) => (d as any).severity === 1).length;
  return { items: byKeyObj, totalErrors };
}

// devecocli 发现: 环境变量优先, 其次 PATH 手动扫描。
// 必须手动解析而非常规 spawn("devecocli"): Windows 下 npm 全局包实际是 devecocli.cmd
// 批处理垫片, 无 shell 的 spawn 只找 .exe 会 ENOENT; 而 shell:true 又是空格断词/注入面。
// 解析出真实垫片路径后交给 proc.ts run(): .cmd 走 cmd /s /c + 逐参数引号, % 参数 fail-loud。
let cachedCli: string | null | undefined;

function candidateNames(): string[] {
  return process.platform === "win32"
    ? ["devecocli.cmd", "devecocli.exe", "devecocli.bat", "devecocli"]
    : ["devecocli"];
}

function searchPath(exe: string): string | null {
  for (const dir of (process.env.PATH ?? "").split(path.delimiter)) {
    if (!dir) continue;
    const full = path.join(dir, exe);
    if (existsSync(full)) return full;
  }
  return null;
}

export async function findDevecoCli(): Promise<string | null> {
  if (process.env.GODFREYHUB_DEVECOCLI_PATH) return process.env.GODFREYHUB_DEVECOCLI_PATH;
  if (cachedCli !== undefined) return cachedCli;
  let resolved: string | null = null;
  for (const name of candidateNames()) {
    resolved = searchPath(name);
    if (resolved) break;
  }
  if (!resolved) {
    cachedCli = null;
    return null;
  }
  // 版本探针实测可执行(对齐 toolchain() 的永久缓存策略, 避免每次 dev_* 调用都探测数百 ms)
  const probe = await run(resolved, ["--version"], { timeoutMs: 15000 });
  cachedCli = probe.code === 0 ? resolved : null;
  return cachedCli;
}

/** 通用 devecocli 命令执行(异步, 不冻结事件循环; 带 Studio 路径环境与 ANSI 剥离)。 */
export async function runDevecoCli(cliArgs: string[], opts: { cwd?: string; timeoutMs?: number; signal?: AbortSignal; maxOutputBytes?: number } = {}): Promise<{ status: number; stdout: string; stderr: string }> {
  const cli = await findDevecoCli();
  if (!cli) throw new Error("devecocli 不在 PATH(安装: npm i -g @deveco/deveco-cli, 或设 GODFREYHUB_DEVECOCLI_PATH)");
  const env = { DEVECO_CLI_STUDIO_PATH: process.env.DEVECO_CLI_STUDIO_PATH ?? toolchain().deveco ?? "", NO_COLOR: "1" };
  // run() 合并 stdout/stderr: stderr 并进 stdout 返回, stderr 置空(调用方原本就两侧一起解析)
  const r = await run(cli, cliArgs, { cwd: opts.cwd, timeoutMs: opts.timeoutMs ?? 120000, env, signal: opts.signal, maxOutputBytes: opts.maxOutputBytes });
  if (r.cancelled) throw new Error("已取消");
  return { status: r.code, stdout: r.out, stderr: "" };
}

export async function devEcoCliCheckArkts(
  files: string[],
  projectRoot: string,
  timeoutMs = 120000,
  signal?: AbortSignal
): Promise<DevEcoCliCheckResult> {
  const started = Date.now();
  const cli = await findDevecoCli();
  if (!cli) {
    return { available: false, unavailableReason: "devecocli 不在 PATH(或设 GODFREYHUB_DEVECOCLI_PATH)", items: {}, totalErrors: 0, durationMs: 0 };
  }
  // CLI 对路径形式敏感: 统一原生化(Windows 反斜杠绝对路径)
  projectRoot = path.resolve(projectRoot);
  files = files.map((f) => path.resolve(f));
  const env = { DEVECO_CLI_STUDIO_PATH: process.env.DEVECO_CLI_STUDIO_PATH ?? toolchain().deveco ?? "", NO_COLOR: "1" };
  // Windows 命令行长度上限: 文件用相对路径 + 每批 20 个; 批次输出必须含摘要行,
  // 否则视为该批执行失败(文件标 pending, 绝不伪造零错误)。
  // 异步 run(): 事件循环不冻结(其他工具请求可并发), ctx.signal 取消即时生效。
  const BATCH = 20;
  const items: Record<string, DevEcoCliCheckItem> = {};
  let totalErrors = 0;
  const rel = (f: string) => path.relative(projectRoot, f).split(path.sep).join("/");
  for (let i = 0; i < files.length; i += BATCH) {
    if (signal?.aborted) throw new Error("已取消");
    const batch = files.slice(i, i + BATCH);
    const args = ["check", "arkts", "--project", projectRoot, ...batch.map((f) => rel(f))];
    const exec = await run(cli, args, { cwd: projectRoot, timeoutMs, env, signal });
    if (exec.cancelled) throw new Error("已取消");
    // spawn 失败(ENOENT/EACCES)时 run() 把原因以 [spawn-error] 并入输出, 与执行失败区分
    if (/\[spawn-error\]/.test(exec.out)) {
      return { available: false, unavailableReason: "执行失败: " + exec.out.slice(0, 120), items: {}, totalErrors: 0, durationMs: Date.now() - started };
    }
    const stdout = exec.out;
    if (process.env.GODFREYHUB_LSP_TRACE) process.stderr.write("[godfreyhub] cli-raw batch=" + (i / BATCH) + " status=" + exec.code + " out=" + JSON.stringify(stdout.slice(0, 300)) + "\n");
    const hasSummary = /ArkTS check found|No errors found/.test(stdout);
    const parsed = parseArktsCheckOutput(stdout, projectRoot, batch);
    for (const [k, v] of Object.entries(parsed.items)) items[k] = v;
    totalErrors += parsed.totalErrors;
    if (!hasSummary) {
      const reason = exec.timedOut ? "批次超时" : "批次执行失败(status=" + exec.code + ")";
      for (const f of batch) {
        const k = normKey(f);
        const existing = items[k];
        if (existing) existing.pending = true;
        else items[k] = { diagnostics: [], pending: true, rawLines: [reason] };
      }
    }
  }
  return { available: true, items, totalErrors, durationMs: Date.now() - started };
}

function normKey(f: string): string {
  return path.resolve(f).split(path.sep).join("/").toLowerCase();
}
