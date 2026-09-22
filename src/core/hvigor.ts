import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { lock } from "proper-lockfile";
import { run, sleep, tail, terminateProcessTree, type RunResult } from "./proc.js";
import { resolvePwshPath } from "./pwsh.js";
import { abortableSleep, AbortedError } from "./sync.js";
import {
  buildLeaseMeta, deleteLeaseMetaIfToken, leaseFilePath, startHeartbeat, startLeaseWatchdog,
  registerActiveLease, unregisterActiveLease, writeLeaseMeta,
  type HeartbeatHandle, type HeartbeatStopReason,
} from "./lease-watchdog.js";
import { toolchain } from "./paths.js";
import { resolveTarget, isEmulatorTarget, isValidHdcPort, bundleListedInstalled, MIN_HDC_PORT, MAX_HDC_PORT } from "./emulator.js";
import { loadConfig, type ProjectEntry, type TestFramework } from "./registry.js";
import JSON5 from "json5";

// 构建+部署(移植自各项目 build.ps1, 契约保持一致):
//   ohpm install(全局锁串行) -> 可选 clean -> assembleHap(--no-daemon)
//   -> 按目标类型分流产物: 模拟器一律 unsigned(签名不阻塞); 真机必须 signed(仅 debug 产品)
//   -> 目标解析(同名实例/真机反推) -> 防污染校验 -> 安装/启动
// 退出码: 0=成功 1=构建/配置错误 2=安装/启动失败 3=设备未找到/不在线

// buildTests 的 framework 过滤值集中在此校验：MCP 工具入口与 CLI 入口共用，
// 否则 hub_build 原样透传未校验值，要到 hvigor 过滤阶段才静默落空。
export function resolveTestTarget(raw: string | undefined | null): TestFramework | undefined {
  if (raw === undefined || raw === null || raw === "") return undefined;
  if (raw !== "ArkTS" && raw !== "Cangjie") {
    throw new Error("testTarget must be ArkTS or Cangjie");
  }
  return raw;
}

export interface BuildOpts {
  product?: string;
  buildMode?: string;
  port?: number;
  device?: string;     // 真机序列号/无线 IP 显式指定(省略=已装包反推或唯一真机)
  clean?: boolean;
  noOhpm?: boolean;
  noDeploy?: boolean;
  skipStart?: boolean;
  buildTests?: boolean;  // 生产 HAP 之后按项目 testTargets 构建 ohosTest 测试包
  testTarget?: TestFramework;   // buildTests 时只构建指定 framework 的目标; 省略=全部
  freshInstall?: boolean; // 测试事务先卸载同 bundle，避免旧签名/旧测试模块污染本次结果
  otherBundles?: string[]; // 防污染校验: 其他在册项目的 bundle
  signal?: AbortSignal;  // MCP 请求级取消: 客户端取消/断连时终止 hvigor/ohpm 子进程树
}

export interface BuildResult {
  code: 0 | 1 | 2 | 3;
  hap?: string;
  testHaps?: { framework: string; module: string; hap: string }[];
  target?: string;
  targetType?: "emulator" | "device";
  unsignedFallback?: boolean;
  log: string;
}

const WORK_DIR = path.join(os.tmpdir(), "godfreyhub");
const PACKAGE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const DEVICE_LEASE_READY = "GF_DEVICE_LEASE_READY";
const DEVICE_LEASE_RELEASE = "GF_DEVICE_LEASE_RELEASE";

/**
 * Hold the same per-device Windows mutex used by the family Instrument runner.
 * Builds may proceed in parallel, but install/uninstall/start cannot replace an
 * application while an authoritative test or visual capture owns that target.
 *
 * 命名互斥体层之上叠加租约元数据层(q7): 活持锁者的互斥体获取/释放路径零变化; 元数据
 * 写入/心跳/看门狗全部是附加信息层, 任何失败都只降级为"回到纯互斥体模型", 不改变原行为。
 */
export async function withDeviceLease<T>(serial: string, signal: AbortSignal | undefined,
  body: () => Promise<T>): Promise<T> {
  // family/test.ps1 owns the lease across preparation, assertions and evidence.
  // Its child build provider inherits this exact serial marker, avoiding a
  // non-reentrant cross-process reacquire while preserving the outer lock.
  if ((process.env.GF_DEVICE_LEASE_HELD_SERIAL ?? "").trim().toUpperCase() ===
      serial.trim().toUpperCase()) return await body();
  if (process.platform !== "win32") return await body();
  const leaseScript = path.join(PACKAGE_ROOT, "scripts", "GfDeviceLeaseHost.ps1");
  if (!fs.existsSync(leaseScript)) {
    throw new Error("device lease host is missing: " + leaseScript);
  }
  // 孤儿租约看门狗随取锁路径懒启动(幂等/unref): 本请求等互斥体的同时就能回收前一个
  // Hub 崩溃留下的孤儿租约, 把"陈锁死等"压到 TTL+扫描周期量级。
  startLeaseWatchdog();
  const powershell = resolvePwshPath();
  // leaseToken 贯穿两层锁: Node 生成 -> 宿主 -LeaseToken 参数(READY 行回显握手) ->
  // 租约元数据; 释放/看门狗接管都必须 token 匹配。
  const leaseToken = randomUUID();
  const child = spawn(powershell, [
    "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
    "-File", leaseScript, "-Serial", serial, "-LeaseToken", leaseToken,
  ], { stdio: ["pipe", "pipe", "pipe"], windowsHide: true });
  let stdout = "";
  let stderr = "";
  let ready = false;
  let closed = false;
  let cancelled = false;
  let resolveClosed: (() => void) | undefined;
  const closedPromise = new Promise<void>((resolve) => { resolveClosed = resolve; });
  // MCP 请求级取消 -> AbortSignal -> 整树终止宿主(taskkill /T /F): 宿主死亡让命名互斥体
  // 走 ABANDONED 交接, 等待方即刻接管, 而不是等满 6 小时互斥体超时。
  const abort = () => {
    cancelled = true;
    if (!closed) terminateProcessTree(child);
  };
  if (signal?.aborted) abort();
  signal?.addEventListener("abort", abort, { once: true });
  child.on("error", () => {
    // spawn 失败(ENOENT 等): 'close' 随后触发并走标准失败路径, 这里只保证事件有监听,
    // 不让它升级成进程级 uncaughtException。
  });
  try {
    await new Promise<void>((resolve, reject) => {
      child.stdout.on("data", (chunk: Buffer) => {
        stdout += chunk.toString();
        if (!ready && stdout.includes(DEVICE_LEASE_READY)) {
          ready = true;
          resolve();
        }
      });
      child.stderr.on("data", (chunk: Buffer) => { stderr += chunk.toString(); });
      child.once("error", reject);
      child.once("close", (code) => {
        closed = true;
        resolveClosed?.();
        if (!ready) {
          reject(new Error(`Device lease host exited before acquisition (exit=${code}): ${stderr || stdout}`));
        }
      });
    });
    // READY 握手: 宿主回显 token 才能确认"持互斥体的宿主"与"元数据写入者"是同一对
    // 请求; 旧宿主(无 token)按 includes 判定兼容, 不拒绝。
    const readyLine = stdout.slice(stdout.indexOf(DEVICE_LEASE_READY)).split(/\r?\n/)[0];
    const echoedToken = readyLine.includes(":") ? readyLine.slice(readyLine.indexOf(":") + 1).trim() : "";
    if (echoedToken !== "" && echoedToken !== leaseToken) {
      throw new Error("device lease host echoed a mismatched lease token: " + echoedToken);
    }
    let heartbeat: HeartbeatHandle | null = null;
    let leaseLost: HeartbeatStopReason | null = null;
    try {
      // 租约元数据层(纯附加): 写失败/心跳构造失败只降级为纯互斥体模型, 绝不影响活持锁路径。
      const meta = await buildLeaseMeta({
        serial,
        leaseToken,
        transactionId: `tx-${process.pid}-${randomUUID().slice(0, 8)}`,
        holderPid: child.pid ?? 0,
        holderProcessName: path.basename(powershell, ".exe"),
      });
      writeLeaseMeta(leaseFilePath(serial), meta);
      registerActiveLease(serial);
      heartbeat = startHeartbeat(leaseFilePath(serial), leaseToken, meta.heartbeatIntervalMs);
      void heartbeat.stopped().then((reason) => {
        // 心跳侧停写 = 本租约已被接管/删除/连续写失败: 记录丢失状态, 释放路径跳过
        // 元数据删除(现场属于接管理者), 不反向掩盖 body() 的业务结果。
        if (reason !== "requested") leaseLost = reason;
      });
    } catch (e) {
      console.error("[device-lease] metadata layer unavailable, continuing on mutex-only path: " +
        (e as Error)?.message);
    }
    try {
      if (signal?.aborted) throw new Error("Device deployment cancelled while waiting for its target lease.");
      return await body();
    } finally {
      if (heartbeat) {
        try { heartbeat.stop(); } catch { /* 已 settle */ }
      }
      unregisterActiveLease(serial);
      if (!leaseLost) {
        try { deleteLeaseMetaIfToken(serial, leaseToken); } catch { /* best effort */ }
      }
    }
  } finally {
    signal?.removeEventListener("abort", abort);
    if (!closed) {
      if (cancelled) {
        terminateProcessTree(child);
      } else {
        try {
          if (!child.stdin.destroyed) child.stdin.end(DEVICE_LEASE_RELEASE + "\n");
        } catch { /* 已销毁的流: 直接 kill */ }
        await Promise.race([closedPromise, sleep(5000)]);
        if (!closed) terminateProcessTree(child);
      }
    }
  }
}

function readLocalProperty(file: string, key: string): string | null {
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return null;
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = fs.readFileSync(file, "utf8").match(new RegExp("^\\s*" + escapedKey + "\\s*=\\s*(.*?)\\s*$", "m"));
  if (!match?.[1]) return null;
  // Java properties 转义必须保守展开: 只解已知转义(\\\\, \\:, \\=), 其余反斜杠按字面
  // 保留。无条件 `\\(.) -> $1` 会把用户手写的 Windows 路径 `C:\\sdk\\cj` 毁成
  // `C:sdkcj`, 随后 cjpm.exe 探测失败**静默**回退旧 PATH 环境, 报出与根因无关的 DLL 错。
  return match[1].replace(/\\\\|\\:|\\=/g, (e) => e.slice(1));
}

export function createCangjieBuildEnv(
  harmonyRoot: string,
  inheritedEnv: NodeJS.ProcessEnv = process.env,
  isWindows = process.platform === "win32",
): Record<string, string> {
  if (!isWindows) return {};
  const configured = readLocalProperty(path.join(harmonyRoot, "local.properties"), "cangjie.sdk.dir");
  if (!configured) return {};
  const sdkRoot = path.isAbsolute(configured) ? configured : path.resolve(harmonyRoot, configured);
  const buildTools = path.join(sdkRoot, "build-tools");
  const cjpm = path.join(buildTools, "tools", "bin", "cjpm.exe");
  if (!fs.existsSync(cjpm)) return {};

  // cjpm.exe dynamically loads the compiler/runtime DLLs. An unrelated older
  // Cangjie installation earlier in PATH makes Windows terminate cjpm with
  // STATUS_ENTRYPOINT_NOT_FOUND (0xC0000139) before it can print diagnostics.
  // Mirror the SDK-owned envsetup.ps1 order so the project-recorded SDK is the
  // only source of those DLLs for every headless Hvigor invocation.
  const pathKey = Object.keys(inheritedEnv).find((name) => name.toLowerCase() === "path") ?? "Path";
  const sdkPaths = [
    path.join(buildTools, "tools", "lib"),
    path.join(buildTools, "tools", "bin"),
    path.join(buildTools, "bin"),
    path.join(buildTools, "lib", "windows_x86_64_cjnative"),
    path.join(buildTools, "runtime", "lib", "windows_x86_64_cjnative"),
  ];
  const inheritedPath = inheritedEnv[pathKey] ?? "";
  return {
    CANGJIE_HOME: buildTools,
    [pathKey]: [...sdkPaths, inheritedPath].filter((item) => item.length > 0).join(";"),
  };
}

export function createDevEcoBuildEnv(
  deveco: string | null,
  harmonyRoot?: string,
  inheritedEnv: NodeJS.ProcessEnv = process.env,
): Record<string, string> {
  return {
    ...(deveco ? { DEVECO_SDK_HOME: path.join(deveco, "sdk") } : {}),
    ...(harmonyRoot ? createCangjieBuildEnv(harmonyRoot, inheritedEnv) : {}),
  };
}

export function ohpmInstallInvocation(tool: { ohpm: string | null; node: string }): {
  command: string;
  args: string[];
} | null {
  if (!tool.ohpm) return null;
  if (/\.bat$/i.test(tool.ohpm)) {
    const cli = path.join(path.dirname(tool.ohpm), "pm-cli.js");
    if (fs.existsSync(cli)) {
      return { command: tool.node, args: [cli, "install"] };
    }
  }
  return { command: tool.ohpm, args: ["install"] };
}

function isLockBusyError(e: unknown): boolean {
  const code = (e as NodeJS.ErrnoException)?.code;
  return code === "ELOCKED" || code === "ESTALE";
}

// 项目构建锁: 长等待必须感知取消——客户端已放弃的请求继续排队 15 分钟再启动一次
// hvigor, 既浪费也违背调用方意图。每轮抢锁前检查 signal, 等待用 abortableSleep。
async function withLock(lockPath: string, signal: AbortSignal | undefined, body: () => Promise<number>): Promise<number> {
  fs.mkdirSync(path.dirname(lockPath), { recursive: true });
  fs.closeSync(fs.openSync(lockPath, "a"));
  const maxWaitMs = 15 * 60_000;
  const intervalMs = 2_000;
  const deadline = Date.now() + maxWaitMs;
  const acquire = async (): Promise<() => Promise<void>> => {
    while (true) {
      if (signal?.aborted) throw new AbortedError("构建在等待项目锁期间被取消");
      try {
        return await lock(lockPath, { retries: 0, realpath: false });
      } catch (e) {
        if (!isLockBusyError(e) || Date.now() >= deadline) throw e;
        await abortableSleep(intervalMs, signal);
      }
    }
  };
  const release = await acquire();
  try {
    return await body();
  } finally {
    try { await release(); } catch { /* 已释放 */ }
  }
}

// 解析模块 srcPath(相对 harmonyRoot): 测试 HAP 产物目录按模块目录拼接, 模块名与
// 目录名不一致的项目(如 features/shell)过去会"未找到 ohosTest 产物目录"。
function moduleSrcPath(harmonyRoot: string, moduleName: string): string {
  const file = path.join(harmonyRoot, "build-profile.json5");
  try {
    const profile = JSON5.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
    const mod = (Array.isArray(profile?.modules) ? profile.modules : [])
      .find((m: any) => m?.name === moduleName);
    if (mod && typeof mod.srcPath === "string" && mod.srcPath.trim()) {
      return path.normalize(mod.srcPath.trim().replace(/^\.\//, ""));
    }
  } catch { /* 解析失败退回模块名 */ }
  return moduleName;
}

// 定位 HAP 产物: 优先当前 product 构建目录, 同目录下 signed 优先(与 Select-Hap 一致)
export function isSignedHap(file: string): boolean {
  return /-signed\.hap$/.test(path.basename(file));
}

export function selectHapArtifact(harmonyRoot: string, modulePath: string, product: string, forceUnsigned: boolean): string | null {
  const buildDir = path.join(harmonyRoot, modulePath, "build");
  if (!fs.existsSync(buildDir)) return null;
  const cands: { file: string; mtime: number; dir: string }[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (/\.hap$/i.test(e.name) && !p.includes("ohosTest") && !p.includes(path.sep + "app" + path.sep)) {
        cands.push({ file: p, mtime: fs.statSync(p).mtimeMs, dir: d });
      }
    }
  };
  walk(buildDir);
  if (cands.length === 0) return null;
  const marker = path.sep + "build" + path.sep + product + path.sep;
  let pool = cands.filter((c) => c.file.includes(marker));
  if (pool.length === 0) pool = cands;
  const byNewest = (a: { mtime: number }, b: { mtime: number }) => b.mtime - a.mtime;
  if (forceUnsigned) {
    let u = pool.filter((c) => /-unsigned\.hap$/.test(path.basename(c.file)));
    if (u.length === 0) u = pool.filter((c) => !/-signed\.hap$/.test(path.basename(c.file)));
    if (u.length === 0) return null;
    u.sort(byNewest);
    return u[0].file;
  }
  pool.sort(byNewest);
  const newest = pool[0];
  const signed = pool.filter((c) => c.dir === newest.dir && /-signed\.hap$/.test(path.basename(c.file)));
  return signed.length > 0 ? signed.sort(byNewest)[0].file : newest.file;
}

export function selectTestHapArtifact(outDir: string, requireSigned: boolean, forceUnsigned: boolean): string | null {
  if (!fs.existsSync(outDir)) return null;
  const haps = fs.readdirSync(outDir)
    .filter((file) => /\.hap$/i.test(file))
    .map((file) => ({ file, mtime: fs.statSync(path.join(outDir, file)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  if (requireSigned) return haps.find((item) => /-signed\.hap$/i.test(item.file))?.file ?? null;
  if (forceUnsigned) {
    return haps.find((item) => /-unsigned\.hap$/i.test(item.file))?.file
      ?? haps.find((item) => !/-signed\.hap$/i.test(item.file))?.file
      ?? null;
  }
  return haps.find((item) => /-signed\.hap$/i.test(item.file))?.file ?? haps[0]?.file ?? null;
}

export function canReuseUnsignedHapAfterSigningFailure(
  buildOutput: string,
  unsignedHap: string,
  buildStart: number,
): boolean {
  if (!fs.existsSync(unsignedHap)) return false;
  const failedTasks = [...buildOutput.matchAll(/Failed\s+(:[^\r\n]*?@[A-Za-z0-9_]+)\.\.\./g)]
    .map((match) => match[1]);
  if (failedTasks.length === 0 || failedTasks.some((task) => !task.endsWith("@SignHap"))) return false;

  // A current mtime is direct evidence that this invocation produced the HAP.
  if (fs.statSync(unsignedHap).mtimeMs >= buildStart) return true;

  // Incremental Hvigor builds legitimately keep the previous mtime when the
  // exact PackageHap inputs are unchanged. Its UP-TO-DATE/Finished task state
  // is then the freshness proof; rejecting that artifact makes an otherwise
  // identical emulator test non-repeatable after a signing-only failure.
  return /(?:UP-TO-DATE|Finished)\s+:[^\r\n]*@PackageHap\.\.\./.test(buildOutput);
}

/**
 * DevEco's bundled Node can very occasionally abort while materializing its
 * own allowed-option alias table during CompileCangjie. This is a tool runtime
 * crash, not a compiler diagnostic. A single same-invocation retry lets Hvigor
 * resume from the clean task graph while keeping genuine source failures hard.
 */
export function isRetryableHvigorInfrastructureFailure(buildOutput: string): boolean {
  const nodeRuntimeCrash = /Cannot create a string longer than 0x[0-9a-f]+ characters/i.test(buildOutput) &&
    /getAliasesFromBinding \(node:internal\/options:/i.test(buildOutput) &&
    /process\.allowedNodeEnvironmentFlags|allowedNodeEnvironmentFlags|buildAllowedFlags/i.test(buildOutput);
  const transientBuildLogLock = /EBUSY: resource busy or locked, open ['"].*?\.hvigor[\\/]outputs[\\/]build-logs[\\/]build\.log['"]/i
    .test(buildOutput);
  return nodeRuntimeCrash || transientBuildLogLock;
}

export function isHdcCommandSuccessful(code: number, output: string): boolean {
  return code === 0 && !/(?:^\s*\[?fail(?:ed)?\]?\b|\berror\s*:|\bfailed\s+to\b|\bfailure\b)/im.test(output);
}

export function isRetryableHdcInfrastructureFailure(output: string): boolean {
  return /(?:failed to execute your command|device\s+(?:is\s+)?offline|connection\s+(?:was\s+)?(?:closed|reset|failed)|daemon\s+(?:is\s+)?not\s+running)/i
    .test(output);
}

export function isHdcBundleAbsent(output: string): boolean {
  return /(?:\bmissing\s+installed\s+bundle\b|\b(?:bundle|application)\b.*\b(?:does\s+not\s+exist|not\s+exists?|not\s+installed)\b)/i.test(output);
}

function listedHdcTargets(output: string): string[] {
  return output.split(/\r?\n/)
    .map((line) => line.trim().split(/\s+/)[0])
    .filter((target) => target.length > 0 && target !== "[Empty]" && target !== "Empty");
}

export async function ensureHdcTargetOnline(
  hdc: string,
  target: string,
  runCommand: typeof run = run,
  signal?: AbortSignal,
): Promise<{ online: boolean; reconnected: boolean; detail: string }> {
  const before = await runCommand(hdc, ["list", "targets"], { timeoutMs: 30000, signal });
  if (before.code === 0 && listedHdcTargets(before.out).includes(target)) {
    return { online: true, reconnected: false, detail: "target already online" };
  }

  // TCP targets (emulators and wireless devices) may age out while a clean
  // ArkTS/Cangjie build runs. Reconnect the exact preselected target; never
  // substitute another attached device after signing policy was chosen.
  if (target.includes(":")) {
    const connected = await runCommand(hdc, ["tconn", target], { timeoutMs: 30000, signal });
    const after = await runCommand(hdc, ["list", "targets"], { timeoutMs: 30000, signal });
    const online = connected.code === 0 && after.code === 0 && listedHdcTargets(after.out).includes(target);
    return {
      online,
      reconnected: online,
      detail: online
        ? "reconnected exact TCP target"
        : tail("tconn: " + connected.out + "\nlist targets: " + after.out, 8),
    };
  }

  return {
    online: false,
    reconnected: false,
    detail: tail("list targets: " + before.out, 8),
  };
}

export interface BuildAndDeployDeps {
  runCommand?: typeof run;
  resolveDevice?: typeof resolveTarget;
}

export async function buildAndDeploy(entry: ProjectEntry, opts: BuildOpts, deps: BuildAndDeployDeps = {}): Promise<BuildResult> {
  const tc = toolchain();
  const runCommand = deps.runCommand ?? run;
  const resolveDevice = deps.resolveDevice ?? resolveTarget;
  const buildEnv = createDevEcoBuildEnv(tc.deveco, entry.harmonyRoot);
  const product = opts.product ?? "debug";
  const buildMode = opts.buildMode ?? "debug";
  const logFile = path.join(WORK_DIR, "logs", "build_" + entry.name + ".log");
  // 日志 = 内存全量缓冲 + 每次全量落盘: 过去"步骤 0 锁外 append + 锁内 truncate"会让
  // 目标解析/签名策略日志被抹掉, 且并发构建交错 append。全量快照写幂等且并发可读。
  const logLines: string[] = [];
  const localTimestamp = () => {
    const n = new Date();
    const two = (v: number) => String(v).padStart(2, "0");
    return n.getFullYear() + "-" + two(n.getMonth() + 1) + "-" + two(n.getDate()) +
      " " + two(n.getHours()) + ":" + two(n.getMinutes()) + ":" + two(n.getSeconds());
  };
  const log = (m: string) => {
    logLines.push("[" + localTimestamp() + "] " + m);
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
    fs.writeFileSync(logFile, logLines.join("\n") + "\n", "utf8");
  };

  if (!tc.hvigorwJs) return { code: 1, log: "未找到 hvigorw.js, 请确认 DevEco Studio 已安装或设置 DEVECO_PATH" };
  if (opts.port !== undefined && !isValidHdcPort(opts.port)) {
    return { code: 1, log: "port 必须是 " + MIN_HDC_PORT + "-" + MAX_HDC_PORT + " 的整数(模拟器 hdc 端口官方范围)" };
  }
  // 工程根早检：harmonyRoot 不存在/缺 build-profile.json5 时，后续 ohpm/hvigor 的 spawn
  // 会因 cwd 无效报 `spawn ... ENOENT`，误导为工具链缺失。项目结构迁移后常见此坑。
  if (!fs.existsSync(path.join(entry.harmonyRoot, "build-profile.json5"))) {
    return {
      code: 1,
      log: "工程根无效: " + entry.harmonyRoot +
        " (缺少 build-profile.json5)。项目目录若已迁移/改名，请用 hub_scan 重新发现或 hub_set_project 重新指向工程根。",
    };
  }

  const buildStart = Date.now();
  let hapPath: string | undefined;
  let testHaps: { framework: string; module: string; hap: string }[] | undefined;
  let deployTarget: string | undefined;
  let targetType: "emulator" | "device" | undefined;
  let unsignedFallback = false;
  let forceUnsigned = false;
  let requireSigned = false;

  // 步骤 0: 构建前解析部署目标(noDeploy 跳过), 决定签名/产物策略
  if (!opts.noDeploy) {
    deployTarget = await resolveDevice({
      portArg: opts.port, device: opts.device, bundle: entry.bundle, instance: entry.instance || entry.name,
      cfgPort: entry.port, deviceInstances: loadConfig().deviceInstances, log, signal: opts.signal,
    });
    if (!deployTarget) {
      log("无法确定部署目标(设备名实例未在线且无在线真机); 可用 port/device 显式指定, 或以设备名启动/创建模拟器实例");
      return { code: 3, log: logLines.join("\n") };
    }
    targetType = isEmulatorTarget(deployTarget) ? "emulator" : "device";
    if (targetType === "emulator") {
      forceUnsigned = true;
      log("部署目标=模拟器 " + deployTarget + ": 使用 unsigned 产物(模拟器无需签名)");
    } else {
      requireSigned = true;
      if (product !== "debug") {
        log("错误: 真机部署仅支持 debug 产品(debug 自动测试签名), 当前 product=" + product + "; 请改用 product=debug");
        return { code: 1, log: logLines.join("\n") };
      }
      log("部署目标=真机 " + deployTarget + ": 使用 signed 产物(需 debug 自动签名, 签名缺失时构建报错而非回退)");
    }
  }

  const code = await withLock(path.join(WORK_DIR, ".locks", "build_" + entry.name + ".lock"), opts.signal, async () => {
    log("========== 构建 " + entry.name + " (product=" + product + " buildMode=" + buildMode + ") ==========");

    // 1. ohpm install(全局锁串行)
    const ohpmInstall = ohpmInstallInvocation(tc);
    if (!opts.noOhpm && ohpmInstall) {
      const ohpmCode = await withLock(path.join(WORK_DIR, ".locks", "ohpm.lock"), opts.signal, async () => {
        const r = await runCommand(ohpmInstall.command, ohpmInstall.args, {
          cwd: entry.harmonyRoot, timeoutMs: 15 * 60_000, env: buildEnv, signal: opts.signal,
        });
        log("> ohpm install (exit=" + r.code + ")");
        if (r.code !== 0) log(tail(r.out, 20));
        return r.code;
      });
      if (ohpmCode !== 0) { log("ohpm install 失败"); return 1; }
    } else {
      log("跳过 ohpm install");
    }

    const hvigorArgs = (task: string) => [
      tc.hvigorwJs!, "--mode", "module",
      "-p", "product=" + product, "-p", "buildMode=" + buildMode,
      "-p", "module=" + (entry.module || "entry") + "@" + (entry.target || "default"),
      task, "--no-daemon",
    ];
    // clean 必须工程级(不带 --mode module / -p module)。模块级 clean 只清 entry,
    // 仓颉等依赖模块的增量缓存(如 quizsdk 的 cj 产物)会残留, 使"clean"后仍复用旧 .so。
    const cleanArgs = [
      tc.hvigorwJs!,
      "-p", "product=" + product, "-p", "buildMode=" + buildMode,
      "clean", "--no-daemon",
    ];

    // 2. 可选 clean(工程级, 覆盖仓颉依赖模块)
    if (opts.clean) {
      const r = await runCommand(tc.node, cleanArgs, {
        cwd: entry.harmonyRoot, timeoutMs: 10 * 60_000, env: buildEnv, signal: opts.signal,
      });
      log("> hvigor clean[project] (exit=" + r.code + ")");
      // Windows 上输出目录被占用(杀软/索引服务/残留进程)是 clean 最常见的失败,
      // 静默继续会让 assembleHap 报出更晦涩的增量产物错误——升级为显式警告。
      if (r.code !== 0) {
        log("警告: clean 失败, 可能残留增量产物; 后续构建错误请先排查目录占用:\n" + tail(r.out, 10));
      }
    }

    // 3. 构建; 按目标策略处理签名失败:
    //    模拟器: SignHap 失败不阻塞(保留 unsigned 中间产物, forceUnsigned 取用)
    //    真机:   SignHap 失败即报错(真机装不上 unsigned)
    let r = await runCommand(tc.node, hvigorArgs("assembleHap"), {
      cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
    });
    log("> hvigor assembleHap (exit=" + r.code + ")");
    if (r.code !== 0 && isRetryableHvigorInfrastructureFailure(r.out)) {
      log("警告: Hvigor/Node 在 CompileCangjie 期间发生内部 options 崩溃; 保留干净任务图并重试一次");
      r = await runCommand(tc.node, hvigorArgs("assembleHap"), {
        cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
      });
      log("> hvigor assembleHap[tool-retry 1/1] (exit=" + r.code + ")");
    }
    if (r.code !== 0) {
      if (canReuseUnsignedHapAfterSigningFailure(
        r.out,
        selectHapArtifact(entry.harmonyRoot, entry.modulePath || entry.module || "entry", product, true) ?? "",
        buildStart,
      )) {
        if (requireSigned) {
          log("错误: 真机部署需要 signed HAP, 但签名失败(SignHap)。请在 DevEco Project Structure 配置 debug 自动签名后重试");
          return 1;
        }
        unsignedFallback = true;
        log("警告: SignHap 失败(签名材料不可用), 保留 unsigned 产物; 模拟器可直接安装, 真机部署需先配置 debug 签名");
      } else {
        log("构建失败:\n" + tail(r.out, 30));
        return 1;
      }
    }

    // 4. 定位产物: 模拟器强制 unsigned; 真机强制 signed(缺则报错)
    const hap = selectHapArtifact(entry.harmonyRoot, entry.modulePath || entry.module || "entry", product,
      forceUnsigned || unsignedFallback);
    if (!hap) { log(forceUnsigned || unsignedFallback ? "未找到 unsigned 产物(签名失败或产物缺失)" : "未找到构建产物 HAP"); return 1; }
    if (requireSigned && !isSignedHap(hap)) {
      log("错误: 真机部署需要 signed HAP, 但产物为 unsigned: " + hap + "; 请确认 debug 签名已配置并构建成功");
      return 1;
    }
    // 新鲜度校验对 signed 一视同仁: 增量构建可能"unsigned 刚生成、signed 还是上一轮
    // UP-TO-DATE 旧产物", 真机会装到过期 HAP 且无任何提示。
    if (fs.statSync(hap).mtimeMs < buildStart) {
      if (requireSigned) {
        log("警告: 选中的 signed 产物早于本次构建开始, 可能为上一轮旧产物; 若与源码不符请 clean 后重试");
      } else if (forceUnsigned || unsignedFallback) {
        log("警告: 选中的 unsigned 产物早于本次构建开始, 可能为旧产物");
      }
    }
    log("构建产物: " + hap);
    hapPath = hap;

    // 4.5 可选: 构建 ohosTest 测试包(门禁/设备测试用; 产物路径与 test-framework.txt
    //     stamp is consumed by the caller's device runners)
    if (opts.buildTests) {
      const configured = entry.testTargets ?? [{ module: entry.module, framework: "ArkTS" as const }];
      const picked = opts.testTarget ? configured.filter((t) => t.framework === opts.testTarget) : configured;
      if (picked.length === 0) {
        log("未找到 framework=" + opts.testTarget + " 的测试目标(项目 testTargets 配置)");
        return 1;
      }
      testHaps = [];
      for (const t of picked) {
        const testProduct = t.product ?? product;
        const testArgs = [
          tc.hvigorwJs!, "--mode", "module",
          "-p", "product=" + testProduct, "-p", "buildMode=" + buildMode,
          "-p", "module=" + t.module + "@ohosTest",
          "-p", "isOhosTest=true",
          ...(t.isCangjie ? ["-p", "isCangjie=true"] : []),
          "assembleHap", "--no-daemon",
        ];
        log("构建 " + t.framework + " ohosTest HAP (" + t.module + "@" + testProduct + ") ...");
        let tr = await runCommand(tc.node, testArgs, {
          cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
        });
        log("> hvigor assembleHap[" + t.module + "@ohosTest] (exit=" + tr.code + ")");
        if (tr.code !== 0 && isRetryableHvigorInfrastructureFailure(tr.out)) {
          log("警告: ohosTest 构建遇到瞬态 Hvigor 基础设施故障; 保留干净任务图并重试一次");
          tr = await runCommand(tc.node, testArgs, {
            cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
          });
          log("> hvigor assembleHap[" + t.module + "@ohosTest][tool-retry 1/1] (exit=" + tr.code + ")");
        }
        const outDir = path.join(entry.harmonyRoot, moduleSrcPath(entry.harmonyRoot, t.module), "build", testProduct, "outputs", "ohosTest");
        if (tr.code !== 0) {
          // SignHap 失败: 模拟器保留 unsigned 产物; 真机部署必须 signed, 失败即终止
          const unsignedHap = path.join(outDir, t.module + "-ohosTest-unsigned.hap");
          if (canReuseUnsignedHapAfterSigningFailure(tr.out, unsignedHap, buildStart)) {
            if (requireSigned) {
              log("错误: 真机部署需要 signed 测试 HAP, 但签名失败(SignHap)。请配置 debug 签名后重试");
              return 1;
            }
            log("警告: ohosTest 签名失败, 保留本次生成的 unsigned 测试 HAP");
          } else {
            log("ohosTest HAP 构建失败:\n" + tail(tr.out, 30));
            return 1;
          }
        }
        if (!fs.existsSync(outDir)) { log("未找到 ohosTest 产物目录: " + outDir); return 1; }
        const chosen = selectTestHapArtifact(outDir, requireSigned, forceUnsigned || unsignedFallback);
        if (!chosen) {
          log(requireSigned
            ? "错误: 真机部署需要 signed 测试 HAP, 但产物为 unsigned; 请确认 debug 签名已配置"
            : "错误: 模拟器部署需要与 unsigned 生产 HAP 匹配的 unsigned 测试 HAP");
          return 1;
        }
        // 门禁约定: outputs/ohosTest/test-framework.txt 记录 Runner 类型
        fs.writeFileSync(path.join(outDir, "test-framework.txt"), t.framework, "ascii");
        log("ohosTest 产物 (" + t.framework + "): " + path.join(outDir, chosen));
        testHaps.push({ framework: t.framework, module: t.module, hap: path.join(outDir, chosen) });
      }
    }

    // 5. 部署(目标已在步骤 0 解析)
    if (opts.noDeploy) { log("========== 构建完成(跳过部署) =========="); return 0; }
    const hdcTarget = deployTarget!;
    return await withDeviceLease(hdcTarget, opts.signal, async () => {
    const refreshedTarget = await ensureHdcTargetOnline(tc.hdc, hdcTarget, run, opts.signal);
    if (!refreshedTarget.online) {
      log("部署前目标已离线且无法恢复: " + hdcTarget + "; " + refreshedTarget.detail);
      return 3;
    }
    if (refreshedTarget.reconnected) log("部署前已重新连接目标: " + hdcTarget);
    const installHap = async (artifact: string) => {
      let result = await runCommand(
        tc.hdc,
        ["-t", hdcTarget, "install", "-r", artifact],
        { timeoutMs: 120000, signal: opts.signal },
      );
      if (!isHdcCommandSuccessful(result.code, result.out) &&
          isRetryableHdcInfrastructureFailure(result.out)) {
        const ready = await ensureHdcTargetOnline(tc.hdc, hdcTarget, run, opts.signal);
        if (ready.online) {
          log("设备安装服务发生瞬态故障; 保持精确目标并重试一次");
          await abortableSleep(3000, opts.signal);
          result = await runCommand(
            tc.hdc,
            ["-t", hdcTarget, "install", "-r", artifact],
            { timeoutMs: 120000, signal: opts.signal },
          );
        }
      }
      return result;
    };
    // 防污染校验: 目标装有其他在册项目应用则警告(确认目标确实是同名实例/预期真机)。
    // 用整串精确匹配: 子串包含会把 com.example.app 误报成装有 com.example.app2。
    if ((opts.otherBundles ?? []).length > 0) {
      const apps = await runCommand(tc.hdc, ["-t", hdcTarget, "shell", "bm", "dump", "-a"], { timeoutMs: 60000, signal: opts.signal });
      const conflict = (opts.otherBundles!).filter((b) => bundleListedInstalled(apps.out, b));
      if (conflict.length > 0) {
        log("警告: 目标 " + hdcTarget + " 已装有其他项目应用 (" + conflict.join(", ") + "), 请确认该目标正确");
      }
    }
    if (opts.freshInstall) {
      log("测试事务卸载旧 bundle: " + entry.bundle);
      const uninstall = await run(
        tc.hdc,
        ["-t", hdcTarget, "uninstall", "-n", entry.bundle],
        { timeoutMs: 120000, signal: opts.signal },
      );
      log(tail(uninstall.out, 5));
      const alreadyAbsent = isHdcBundleAbsent(uninstall.out);
      if (!isHdcCommandSuccessful(uninstall.code, uninstall.out) && !alreadyAbsent) {
        log("测试事务卸载旧 bundle 失败 (exit=" + uninstall.code + ")");
        return 2;
      }
    }
    log("安装到 " + hdcTarget + " ...");
    const inst = await installHap(hap);
    log(tail(inst.out, 5));
    if (!isHdcCommandSuccessful(inst.code, inst.out)) {
      log("安装失败 (exit=" + inst.code + "); 若设备刚启动可稍后重试, 或换 port");
      return 2;
    }
    log("生产 HAP 安装成功");
    // buildTests 的契约是“本次构建出的生产 HAP 与测试 HAP 一起部署到同一精确目标”。
    // 过去这里只返回测试产物路径，家族 runner 又维护了一套安装逻辑，导致签名、目标和重试
    // 规则分裂。测试 HAP 现在只在此处安装，所有上层入口共享同一实现。
    for (const testHap of testHaps ?? []) {
      log("安装 " + testHap.framework + " ohosTest HAP: " + testHap.hap);
      const testInstall = await installHap(testHap.hap);
      log(tail(testInstall.out, 5));
      if (!isHdcCommandSuccessful(testInstall.code, testInstall.out)) {
        log(testHap.framework + " ohosTest HAP 安装失败 (exit=" + testInstall.code + ")");
        return 2;
      }
    }
    if ((testHaps ?? []).length > 0) log("全部测试 HAP 安装成功");
    if (!opts.skipStart) {
      log("启动 " + entry.bundle + "/" + entry.ability + " ...");
      const st = await runCommand(tc.hdc, ["-t", hdcTarget, "shell", "aa", "start", "-b", entry.bundle, "-a", entry.ability], { timeoutMs: 60000, signal: opts.signal });
      if (!isHdcCommandSuccessful(st.code, st.out)) { log("启动失败 (exit=" + st.code + ")"); return 2; }
      log("启动成功");
    }
    log("========== " + entry.name + " 构建+部署完成 ==========");
    return 0;
    });
  });

  return { code: code as 0 | 1 | 2 | 3, hap: hapPath, testHaps, target: deployTarget, targetType, unsignedFallback, log: logLines.join("\n") };
}
