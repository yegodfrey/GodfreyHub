import { existsSync, statSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { run, tail } from "./proc.js";
import { resolvePwshPath } from "./pwsh.js";

// codearts_ask 核心: 把"问 CodeArts GLM 模型"封装成可注入、可 redact 的子进程调用。
// 调用链(已实证可用): %USERPROFILE%\.codeartsdoer\installers\bin\codearts.exe
//   run -m huaweicloud-maas/glm-5.2-sft-harmony [--thinking] -f <file...> "<question>"
// 两个已知坑在本层钉死:
//   1) opencode 系 CLI 共享数据目录(~/.local/share/opencode)的 DB 迁移会和其它
//      opencode 系工具互踩("table workspace already exists")——子进程 XDG_DATA_HOME
//      钉到独立的 %USERPROFILE%\.codeartsdoer\data(首启自动迁移已实证通过);
//   2) AK/SK 是敏感凭据: 只在本层从 HKCU\Environment(PowerShell 'User' 作用域)读取
//      并注入子进程 env, 调用方永远不经手; CLI 输出/错误尾部里的任何凭据回显一律过
//      redactSecrets——凭据值严禁出现在日志/错误消息/返回值。

export const DEFAULT_CODEARTS_MODEL = "huaweicloud-maas/glm-5.2-sft-harmony";
export const DEFAULT_CODEARTS_TIMEOUT_SEC = 600;
const CRED_READ_TIMEOUT_MS = 15_000;
// 凭据值 redact 的最小长度阈值: AK/SK 都远长于 4, 避免误伤短词。
const REDACT_MIN_LEN = 4;

export interface CodeartsAskParams {
  /** 要问的问题(必填, 非空)。 */
  question: string;
  /** 随问题附上的源码文件; 相对路径相对 rootDir(仓库根)解析, 绝对路径原样使用。 */
  files?: string[];
  /** 思考模式(--thinking), 默认 true。 */
  thinking?: boolean;
  /** 模型(provider/id), 默认 DEFAULT_CODEARTS_MODEL。 */
  model?: string;
  /** 超时秒数, 默认 600; 超时杀进程树(proc.run 内建 taskkill /t /f)。 */
  timeoutSec?: number;
  /** 仓库根: 相对路径 files 的解析基准, 也是子进程 cwd。 */
  rootDir?: string;
  /** MCP 请求级取消信号, 贯穿子进程。 */
  signal?: AbortSignal;
}

/** deps 注入保持 hermetic 可测: 测试换 stub runFn / readCredential / env / home,
 *  不碰真实 CLI、不读真实注册表凭据、不依赖 PowerShell。 */
export interface CodeartsAskDeps {
  runFn?: typeof run;
  readCredential?: (name: string) => Promise<string | null>;
  /** 覆盖 process.env(读 CODEARTS_CLI_EXE / USERPROFILE / HOME)。 */
  env?: NodeJS.ProcessEnv;
  /** 覆盖用户主目录(默认 home 的推导基准)。 */
  home?: string;
}

export interface CodeartsAskResult {
  model: string;
  thinking: boolean;
  /** 解析后的绝对路径文件列表(实际传给 -f 的值)。 */
  files: string[];
  /** 模型应答(stdout, 已 redact; stderr 并入, opencode 系 CLI 偶发整段走 stderr)。 */
  answer: string;
  exitCode: number;
  durationMs: number;
  cliExe: string;
  dataDir: string;
}

/** codearts.exe 路径解析: env CODEARTS_CLI_EXE 优先, 否则 %USERPROFILE%\.codeartsdoer\installers\bin\codearts.exe。 */
export function resolveCodeartsCli(env: NodeJS.ProcessEnv = process.env, home?: string): string {
  const override = env.CODEARTS_CLI_EXE?.trim();
  if (override) return path.normalize(override);
  return path.join(resolveHome(env, home), ".codeartsdoer", "installers", "bin", "codearts.exe");
}

function resolveHome(env: NodeJS.ProcessEnv, home?: string): string {
  return home ?? env.USERPROFILE ?? env.HOME ?? os.homedir();
}

// ---------- 凭据读取(HKCU\Environment 桥) ----------

// PowerShell 输出协议: 值 base64 编码后带前缀单行输出——值本身含任意字符(引号/
// 换行/空格)都能无损往返, 且不会被控制台编码问题改写。
const CRED_PREFIX = "CODEARTS_CRED_B64:";

/** 解析 readUserEnvCredential 的 PowerShell 输出; 无前缀行/空值 → null。 */
export function parseCredentialStdout(out: string): string | null {
  for (const line of out.split(/\r?\n/)) {
    const t = line.trim();
    if (!t.startsWith(CRED_PREFIX)) continue;
    const b64 = t.slice(CRED_PREFIX.length).trim();
    if (!b64) return null;
    const v = Buffer.from(b64, "base64").toString("utf8");
    return v.length > 0 ? v : null;
  }
  return null;
}

/**
 * 读单个用户级环境变量(HKCU\Environment, PowerShell 'User' 作用域)。
 * 缺失/空 → null。失败路径绝不透传原始输出(可能含凭据密文), 只给退出码。
 */
export async function readUserEnvCredential(name: string): Promise<string | null> {
  const ps = resolvePwshPath();
  const script =
    "$v=[Environment]::GetEnvironmentVariable('" + name + "','User'); " +
    "if($null -ne $v -and $v.Length -gt 0){ " +
    "[Console]::Out.WriteLine('" + CRED_PREFIX + "' + [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($v))) }";
  const r = await run(ps, ["-NoProfile", "-NonInteractive", "-Command", script], {
    timeoutMs: CRED_READ_TIMEOUT_MS,
  });
  if (r.code !== 0) {
    throw new Error(
      `codearts_ask: 读取用户环境变量 ${name} 失败(exit ${r.code}${r.timedOut ? ", 超时" : ""})。` +
      "请检查 PowerShell 可用性; 输出已按凭据处理不予透传");
  }
  return parseCredentialStdout(r.out);
}

// ---------- redaction ----------

/** 把所有敏感值(长度 >= 4)从文本中替换为 [REDACTED]。空串/短串跳过, 避免误伤。 */
export function redactSecrets(text: string, secrets: Array<string | null | undefined>): string {
  let out = text;
  for (const s of secrets) {
    if (s && s.length >= REDACT_MIN_LEN) out = out.split(s).join("[REDACTED]");
  }
  return out;
}

// ---------- 文件解析与校验 ----------

function resolveInputFile(f: string, rootDir: string | undefined): string {
  const abs = path.isAbsolute(f)
    ? path.normalize(f)
    : rootDir ? path.resolve(rootDir, f) : null;
  if (!abs) {
    throw new Error(
      `codearts_ask: 文件是相对路径但无法确定仓库根(当前未在册项目): ${f}。` +
      "请先 hub_scan/hub_set_project 注册项目, 或改用绝对路径");
  }
  let st: ReturnType<typeof statSync> | null = null;
  try { st = statSync(abs); } catch { /* existsSync 与 stat 之间被删: 按不存在处理 */ }
  if (!st || !st.isFile()) {
    throw new Error(`codearts_ask: 文件不存在或不是常规文件: ${abs}` + (path.isAbsolute(f) ? "" : ` (仓库相对: ${f})`));
  }
  return abs;
}

/**
 * 向 CodeArts GLM 模型提问。
 * 流程: 解析 CLI exe → 解析校验 files → 从 HKCU\Environment 读凭据注入子进程 env →
 * spawn `run -m <model> [--thinking] -f <file>... "<question>"` → redact 后返回应答。
 * 超时/非零退出 fail-loud(错误消息已 redact)。
 */
export async function codeartsAsk(params: CodeartsAskParams, deps: CodeartsAskDeps = {}): Promise<CodeartsAskResult> {
  const env = deps.env ?? process.env;
  const home = resolveHome(env, deps.home);
  const runFn = deps.runFn ?? run;
  const readCred = deps.readCredential ?? readUserEnvCredential;

  const question = params.question?.trim() ?? "";
  if (!question) throw new Error("codearts_ask: question 不能为空");

  const cliExe = resolveCodeartsCli(env, home);
  if (!existsSync(cliExe)) {
    throw new Error(`codearts_ask: codearts CLI 不存在: ${cliExe}(可用环境变量 CODEARTS_CLI_EXE 覆盖)`);
  }

  const files = (params.files ?? []).map((f) => resolveInputFile(f, params.rootDir));

  // 凭据封入: 只在本层从用户环境变量读取, 调用方永远不经手。
  const ak = await readCred("CODEARTS_CLI_AK");
  if (!ak) {
    throw new Error("codearts_ask: 凭据未配置（用户环境变量 CODEARTS_CLI_AK/SK）: 缺少 CODEARTS_CLI_AK。" +
      "请 setx CODEARTS_CLI_AK <ak> 后重启 Hub 生效");
  }
  const sk = await readCred("CODEARTS_CLI_SK");
  if (!sk) {
    throw new Error("codearts_ask: 凭据未配置（用户环境变量 CODEARTS_CLI_AK/SK）: 缺少 CODEARTS_CLI_SK。" +
      "请 setx CODEARTS_CLI_SK <sk> 后重启 Hub 生效");
  }

  const model = params.model?.trim() || DEFAULT_CODEARTS_MODEL;
  const thinking = params.thinking ?? true;
  const timeoutSec = params.timeoutSec ?? DEFAULT_CODEARTS_TIMEOUT_SEC;
  // 数据目录隔离: 独立 XDG_DATA_HOME, 绕开 opencode 系共享 DB 的迁移互踩。
  const dataDir = path.join(home, ".codeartsdoer", "data");

  // -f 逐个重复而非 variadic 尾随: 避免多文件形态吞掉末尾的 question 定位歧义。
  const args: string[] = ["run", "-m", model];
  if (thinking) args.push("--thinking");
  for (const f of files) args.push("-f", f);
  args.push(question);

  const started = Date.now();
  const r = await runFn(cliExe, args, {
    cwd: params.rootDir ?? home,
    timeoutMs: timeoutSec * 1000,
    signal: params.signal,
    // proc.run 会把 opts.env 并在 process.env 之上: AK/SK 只经此注入子进程,
    // 不写回本进程 env, 不进任何返回值。
    env: { XDG_DATA_HOME: dataDir, CODEARTS_CLI_AK: ak, CODEARTS_CLI_SK: sk },
  });
  const durationMs = Date.now() - started;
  const output = redactSecrets(r.out, [ak, sk]);

  if (r.cancelled) throw new Error("codearts_ask: 已取消");
  if (r.timedOut) {
    throw new Error(`codearts_ask: 超时(${timeoutSec}s, 已杀进程树)。可加大 timeoutSec 重试:\n${tail(output, 40)}`);
  }
  if (r.code !== 0) {
    throw new Error(`codearts_ask: codearts run 失败(exit ${r.code}):\n${tail(output, 40)}`);
  }
  return { model, thinking, files, answer: output, exitCode: r.code, durationMs, cliExe, dataDir };
}
