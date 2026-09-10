import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { lock } from "proper-lockfile";
import { run, sleep, tail } from "./proc.js";
import { toolchain } from "./paths.js";
import { resolveTarget, isEmulatorTarget, isValidHdcPort, MIN_HDC_PORT, MAX_HDC_PORT } from "./emulator.js";
import { loadConfig, type ProjectEntry, type TestFramework } from "./registry.js";

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
  const powershell = process.env.GF_POWERSHELL_PATH?.trim() || "powershell.exe";
  const child = spawn(powershell, [
    "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
    "-File", leaseScript, "-Serial", serial,
  ], { stdio: ["pipe", "pipe", "pipe"], windowsHide: true });
  let stdout = "";
  let stderr = "";
  let ready = false;
  let closed = false;
  let resolveClosed: (() => void) | undefined;
  const closedPromise = new Promise<void>((resolve) => { resolveClosed = resolve; });
  const abort = () => { if (!closed) child.kill(); };
  if (signal?.aborted) abort();
  signal?.addEventListener("abort", abort, { once: true });
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
    if (signal?.aborted) throw new Error("Device deployment cancelled while waiting for its target lease.");
    return await body();
  } finally {
    signal?.removeEventListener("abort", abort);
    if (!closed) {
      child.stdin.end(DEVICE_LEASE_RELEASE + "\n");
      await Promise.race([closedPromise, sleep(5000)]);
      if (!closed) child.kill();
    }
  }
}

function readLocalProperty(file: string, key: string): string | null {
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return null;
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = fs.readFileSync(file, "utf8").match(new RegExp("^\\s*" + escapedKey + "\\s*=\\s*(.*?)\\s*$", "m"));
  if (!match?.[1]) return null;
  // local.properties follows Java property escaping. The recorded family paths
  // currently use forward slashes, while this also accepts escaped ':'/'\\'.
  return match[1].replace(/\\(.)/g, "$1");
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

async function withLock(lockPath: string, body: () => Promise<number>): Promise<number> {
  fs.mkdirSync(path.dirname(lockPath), { recursive: true });
  fs.closeSync(fs.openSync(lockPath, "a"));
  const release = await lock(lockPath, { retries: { retries: 450, factor: 1, minTimeout: 2000, maxTimeout: 2000 } });
  try {
    return await body();
  } finally {
    try { await release(); } catch { /* 已释放 */ }
  }
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

export async function buildAndDeploy(entry: ProjectEntry, opts: BuildOpts): Promise<BuildResult> {
  const tc = toolchain();
  const buildEnv = createDevEcoBuildEnv(tc.deveco, entry.harmonyRoot);
  const product = opts.product ?? "debug";
  const buildMode = opts.buildMode ?? "debug";
  const logLines: string[] = [];
  const logFile = path.join(WORK_DIR, "logs", "build_" + entry.name + ".log");
  const log = (m: string) => {
    const line = "[" + new Date().toISOString().replace("T", " ").slice(0, 19) + "] " + m;
    logLines.push(line);
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
    fs.appendFileSync(logFile, line + "\n", "utf8");
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
    deployTarget = await resolveTarget({
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

  const code = await withLock(path.join(WORK_DIR, ".locks", "build_" + entry.name + ".lock"), async () => {
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
    fs.writeFileSync(logFile, "", "utf8");
    log("========== 构建 " + entry.name + " (product=" + product + " buildMode=" + buildMode + ") ==========");

    // 1. ohpm install(全局锁串行)
    const ohpmInstall = ohpmInstallInvocation(tc);
    if (!opts.noOhpm && ohpmInstall) {
      const ohpmCode = await withLock(path.join(WORK_DIR, ".locks", "ohpm.lock"), async () => {
        const r = await run(ohpmInstall.command, ohpmInstall.args, {
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
      const r = await run(tc.node, cleanArgs, {
        cwd: entry.harmonyRoot, timeoutMs: 10 * 60_000, env: buildEnv, signal: opts.signal,
      });
      log("> hvigor clean[project] (exit=" + r.code + ")");
    }

    // 3. 构建; 按目标策略处理签名失败:
    //    模拟器: SignHap 失败不阻塞(保留 unsigned 中间产物, forceUnsigned 取用)
    //    真机:   SignHap 失败即报错(真机装不上 unsigned)
    let r = await run(tc.node, hvigorArgs("assembleHap"), {
      cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
    });
    log("> hvigor assembleHap (exit=" + r.code + ")");
    if (r.code !== 0 && isRetryableHvigorInfrastructureFailure(r.out)) {
      log("警告: Hvigor/Node 在 CompileCangjie 期间发生内部 options 崩溃; 保留干净任务图并重试一次");
      r = await run(tc.node, hvigorArgs("assembleHap"), {
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
    if ((forceUnsigned || unsignedFallback) && fs.statSync(hap).mtimeMs < buildStart) {
      log("警告: 选中的 unsigned 产物早于本次构建开始, 可能为旧产物");
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
        let tr = await run(tc.node, testArgs, {
          cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
        });
        log("> hvigor assembleHap[" + t.module + "@ohosTest] (exit=" + tr.code + ")");
        if (tr.code !== 0 && isRetryableHvigorInfrastructureFailure(tr.out)) {
          log("警告: ohosTest 构建遇到瞬态 Hvigor 基础设施故障; 保留干净任务图并重试一次");
          tr = await run(tc.node, testArgs, {
            cwd: entry.harmonyRoot, timeoutMs: 30 * 60_000, env: buildEnv, signal: opts.signal,
          });
          log("> hvigor assembleHap[" + t.module + "@ohosTest][tool-retry 1/1] (exit=" + tr.code + ")");
        }
        const outDir = path.join(entry.harmonyRoot, t.module, "build", testProduct, "outputs", "ohosTest");
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
      let result = await run(
        tc.hdc,
        ["-t", hdcTarget, "install", "-r", artifact],
        { timeoutMs: 120000, signal: opts.signal },
      );
      if (!isHdcCommandSuccessful(result.code, result.out) &&
          isRetryableHdcInfrastructureFailure(result.out)) {
        const ready = await ensureHdcTargetOnline(tc.hdc, hdcTarget, run, opts.signal);
        if (ready.online) {
          log("设备安装服务发生瞬态故障; 保持精确目标并重试一次");
          await sleep(3000);
          result = await run(
            tc.hdc,
            ["-t", hdcTarget, "install", "-r", artifact],
            { timeoutMs: 120000, signal: opts.signal },
          );
        }
      }
      return result;
    };
    // 防污染校验: 目标装有其他在册项目应用则警告(确认目标确实是同名实例/预期真机)
    if ((opts.otherBundles ?? []).length > 0) {
      const apps = await run(tc.hdc, ["-t", hdcTarget, "shell", "bm", "dump", "-a"], { timeoutMs: 60000, signal: opts.signal });
      const conflict = (opts.otherBundles!).filter((b) => apps.out.includes(b));
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
      const st = await run(tc.hdc, ["-t", hdcTarget, "shell", "aa", "start", "-b", entry.bundle, "-a", entry.ability], { timeoutMs: 60000, signal: opts.signal });
      if (!isHdcCommandSuccessful(st.code, st.out)) { log("启动失败 (exit=" + st.code + ")"); return 2; }
      log("启动成功");
    }
    log("========== " + entry.name + " 构建+部署完成 ==========");
    return 0;
    });
  });

  return { code: code as 0 | 1 | 2 | 3, hap: hapPath, testHaps, target: deployTarget, targetType, unsignedFallback, log: logLines.join("\n") };
}
