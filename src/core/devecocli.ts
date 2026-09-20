import { spawnSync } from "node:child_process";
import path from "node:path";
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

export function findDevecoCli(): string | null {
  if (process.env.GODFREYHUB_DEVECOCLI_PATH) return process.env.GODFREYHUB_DEVECOCLI_PATH;
  const probe = spawnSync("devecocli", ["--version"], { shell: true, timeout: 15000, encoding: "utf8" });
  return probe.status === 0 ? "devecocli" : null;
}

/** 通用 devecocli 命令执行(带 Studio 路径环境与 ANSI 剥离)。 */
export function runDevecoCli(cliArgs: string[], opts: { cwd?: string; timeoutMs?: number } = {}): { status: number; stdout: string; stderr: string } {
  const cli = findDevecoCli();
  if (!cli) throw new Error("devecocli 不在 PATH(安装: npm i -g @deveco/deveco-cli, 或设 GODFREYHUB_DEVECOCLI_PATH)");
  const env = { ...process.env, DEVECO_CLI_STUDIO_PATH: process.env.DEVECO_CLI_STUDIO_PATH ?? toolchain().deveco ?? "", NO_COLOR: "1" };
  const exec = spawnSync(cli, cliArgs, { shell: true, encoding: "utf8", timeout: opts.timeoutMs ?? 120000, env, cwd: opts.cwd });
  return { status: exec.status ?? 1, stdout: exec.stdout ?? "", stderr: exec.stderr ?? "" };
}

export async function devEcoCliCheckArkts(
  files: string[],
  projectRoot: string,
  timeoutMs = 120000,
  signal?: AbortSignal
): Promise<DevEcoCliCheckResult> {
  const started = Date.now();
  const cli = findDevecoCli();
  if (!cli) {
    return { available: false, unavailableReason: "devecocli 不在 PATH(或设 GODFREYHUB_DEVECOCLI_PATH)", items: {}, totalErrors: 0, durationMs: 0 };
  }
  // CLI 对路径形式敏感: 统一原生化(Windows 反斜杠绝对路径)
  projectRoot = path.resolve(projectRoot);
  files = files.map((f) => path.resolve(f));
  const env = { ...process.env, DEVECO_CLI_STUDIO_PATH: process.env.DEVECO_CLI_STUDIO_PATH ?? toolchain().deveco ?? "", NO_COLOR: "1" };
  // Windows 命令行长度上限: 文件用相对路径 + 每批 20 个; 批次输出必须含摘要行,
  // 否则视为该批执行失败(文件标 pending, 绝不伪造零错误)。
  const BATCH = 20;
  const items: Record<string, DevEcoCliCheckItem> = {};
  let totalErrors = 0;
  const rel = (f: string) => path.relative(projectRoot, f).split(path.sep).join("/");
  for (let i = 0; i < files.length; i += BATCH) {
    if (signal?.aborted) throw new Error("已取消");
    const batch = files.slice(i, i + BATCH);
    const args = ["check", "arkts", "--project", projectRoot, ...batch.map((f) => rel(f))];
    const exec = spawnSync(cli, args, { shell: true, encoding: "utf8", timeout: timeoutMs, env, cwd: projectRoot });
    if (exec.error) {
      return { available: false, unavailableReason: "执行失败: " + String(exec.error).slice(0, 120), items: {}, totalErrors: 0, durationMs: Date.now() - started };
    }
    const stdout = (exec.stdout ?? "") + "\n" + (exec.stderr ?? "");
    if (process.env.GODFREYHUB_LSP_TRACE) process.stderr.write("[godfreyhub] cli-raw batch=" + (i / BATCH) + " status=" + exec.status + " out=" + JSON.stringify(stdout.slice(0, 300)) + "\n");
    const hasSummary = /ArkTS check found|No errors found/.test(stdout);
    const parsed = parseArktsCheckOutput(stdout, projectRoot, batch);
    for (const [k, v] of Object.entries(parsed.items)) items[k] = v;
    totalErrors += parsed.totalErrors;
    if (!hasSummary) {
      for (const f of batch) {
        const k = normKey(f);
        const existing = items[k];
        if (existing) existing.pending = true;
        else items[k] = { diagnostics: [], pending: true, rawLines: ["批次执行失败(status=" + exec.status + ")"] };
      }
    }
  }
  return { available: true, items, totalErrors, durationMs: Date.now() - started };
}

function normKey(f: string): string {
  return path.resolve(f).split(path.sep).join("/").toLowerCase();
}
