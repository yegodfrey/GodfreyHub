import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import { run, runDetached, sleep, tail } from "./proc.js";
import { resolvePwshPath } from "./pwsh.js";
import { toolchain } from "./paths.js";
import { KeyedMutex } from "./sync.js";

export const MIN_HDC_PORT = 10000;
export const MAX_HDC_PORT = 16555;
const MIN_AUTO_ASSIGNED_HDC_PORT = 5555;
export const DEFAULT_EMULATOR_MEMORY_GB = 3;
export const MIN_EMULATOR_MEMORY_GB = 2;
export const MAX_EMULATOR_MEMORY_GB = 32;

// 启停等待节奏统一收敛: 上线等待/停止确认/目标探测共用这些常量, 消灭散落的魔法数字。
export const BOOT_WAIT_TIMEOUT_MS = 240_000;   // 官方冷启动实测上限(含镜像首次解压)
const BOOT_POLL_INTERVAL_MS = 3_000;
const STOP_CONFIRM_TIMEOUT_MS = 60_000;
const STOP_CONFIRM_INTERVAL_MS = 2_000;

export function isValidHdcPort(port: number): boolean {
  return Number.isInteger(port) && port >= MIN_HDC_PORT && port <= MAX_HDC_PORT;
}

export function isDiscoverableHdcPort(port: number): boolean {
  return Number.isInteger(port) && port >= MIN_AUTO_ASSIGNED_HDC_PORT && port <= MAX_HDC_PORT;
}

export function isValidEmulatorMemory(memory: number): boolean {
  return Number.isInteger(memory) && memory >= MIN_EMULATOR_MEMORY_GB && memory <= MAX_EMULATOR_MEMORY_GB;
}

export function classifyEmulatorCrashLogs(emulatorLog: string, qemuLog: string,
  crashServerLog: string): string[] {
  const findings: string[] = [];
  if (/CheckGPUThread|GL import failed|real share context is NULL|nvoglv64\.dll/i.test(emulatorLog + "\n" + qemuLog)) {
    findings.push("GPU 渲染桥或宿主 OpenGL 驱动失效");
  }
  if (/memory is low|HOST_FREE_MEMORY/i.test(crashServerLog)) {
    findings.push("宿主机可用内存过低");
  }
  return findings;
}

// 模拟器实例是单宿主资源: 同一实例的启动/停止/删除/建后启动必须互斥, 否则两个并发
// emu_start 的 check-then-act 会双双判定"未运行"并各自拉起 Emulator.exe(第二个撞实例
// 锁失败或留下僵尸进程)。KeyedMutex 保证同实例串行、异实例并行。
const instanceMutex = new KeyedMutex();

export interface InstanceInfo { name: string; running: boolean; port: number | null; }

export interface EmulatorStartWaitResult {
  target: string;
  crashReport?: string;
  launchFailure?: string;
}

export interface EmulatorLaunchHandle { pid?: number; }

function pkgRoot(): string {
  // dist/core/emulator.js -> 包根
  return path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
}

function emulatorInstanceRoot(name: string, localAppData = process.env.LOCALAPPDATA): string {
  if (!localAppData || path.basename(name) !== name) return "";
  return path.join(localAppData, "Huawei", "Emulator", "deployed", name);
}

export function latestEmulatorCrashReport(name: string,
  localAppData = process.env.LOCALAPPDATA): { path: string; mtimeMs: number } | undefined {
  const instanceRoot = emulatorInstanceRoot(name, localAppData);
  if (!instanceRoot) return undefined;
  const reportRoot = path.join(instanceRoot, "Log", "crash_report");
  try {
    return fs.readdirSync(reportRoot, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".zip"))
      .map((entry) => {
        const reportPath = path.join(reportRoot, entry.name);
        return { path: reportPath, mtimeMs: fs.statSync(reportPath).mtimeMs };
      })
      .sort((a, b) => b.mtimeMs - a.mtimeMs)[0];
  } catch {
    return undefined;
  }
}

function readFileTail(filePath: string, maxBytes = 512 * 1024): string {
  try {
    const size = fs.statSync(filePath).size;
    const length = Math.min(size, maxBytes);
    const buffer = Buffer.alloc(length);
    const descriptor = fs.openSync(filePath, "r");
    try {
      fs.readSync(descriptor, buffer, 0, length, Math.max(0, size - length));
    } finally {
      fs.closeSync(descriptor);
    }
    return buffer.toString("utf8");
  } catch {
    return "";
  }
}

function emulatorCrashDiagnostic(name: string): string {
  const instanceRoot = emulatorInstanceRoot(name);
  if (!instanceRoot) return "";
  const logRoot = path.join(instanceRoot, "Log");
  return classifyEmulatorCrashLogs(
    readFileTail(path.join(logRoot, "Emulator.log")),
    readFileTail(path.join(logRoot, "qemu.log")),
    readFileTail(path.join(logRoot, "crash_server.log")),
  ).join("；");
}

function ps1(args: string[]): Promise<{ code: number; out: string }> {
  const file = path.join(pkgRoot(), "scripts", "win_windows.ps1");
  return run(resolvePwshPath(), ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", file, ...args], { timeoutMs: 300000 });
}

interface WindowsEmulatorLaunchStatus {
  state?: string;
  pid?: number;
  message?: string;
}

function readWindowsEmulatorLaunchStatus(statusPath: string): WindowsEmulatorLaunchStatus | undefined {
  try {
    const raw = fs.readFileSync(statusPath, "utf8").replace(/^\uFEFF/, "");
    return JSON.parse(raw) as WindowsEmulatorLaunchStatus;
  } catch {
    return undefined;
  }
}

export function isEmulatorProcessAlive(pid: number): boolean {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return (error as NodeJS.ErrnoException).code === "EPERM";
  }
}

export async function launchEmulatorProcess(executable: string, args: string[]): Promise<EmulatorLaunchHandle> {
  if (process.platform !== "win32") {
    await runDetached(executable, args);
    return {};
  }
  const startIndex = args.findIndex((arg) => arg === "-start" || arg === "-hvd");
  const instanceName = startIndex >= 0 ? args[startIndex + 1] : "";
  if (!instanceName) throw new Error("Windows 模拟器启动缺少实例名");
  const launcher = path.join(pkgRoot(), "scripts", "win_launch_emulator.vbs");
  const statusPath = path.join(os.tmpdir(), "godfreyhub-emulator-launch-" + randomUUID() + ".json");
  // The native process wrapper owns both Emulator.exe creation and exact-PID
  // window naming. The VBS dispatcher returns immediately, then a status-file
  // handshake proves that Emulator.exe itself was created and returns its PID.
  const result = await run("cscript.exe", ["//nologo", launcher, executable, instanceName, statusPath, ...args], { timeoutMs: 30000 });
  if (result.code !== 0) throw new Error("Windows 模拟器独立启动失败: " + tail(result.out, 10));
  const deadline = Date.now() + 10000;
  try {
    while (Date.now() < deadline) {
      const status = readWindowsEmulatorLaunchStatus(statusPath);
      if (status?.state === "started" && Number.isInteger(status.pid) && status.pid! > 0) {
        return { pid: status.pid };
      }
      if (status?.state === "error") {
        throw new Error("Windows 模拟器进程创建失败: " + (status.message || "未知错误"));
      }
      await sleep(100);
    }
    throw new Error("Windows 模拟器启动器未在 10 秒内返回进程握手");
  } finally {
    try { fs.unlinkSync(statusPath); } catch { /* status may not have been created */ }
  }
}

// ---------- 实例枚举 ----------

// -details 是权威来源(含 isRunning/hw.hdc.port); 但 CLI 可能先打 banner 再输出 JSON,
// 直接 JSON.parse 会整体失败并把在册实例误判为"不存在"。截取首个 '[' 到最后一个 ']' 再解析。
function parseJsonArrayPrefix(output: string): any[] | null {
  const start = output.indexOf("[");
  const end = output.lastIndexOf("]");
  if (start < 0 || end <= start) return null;
  try {
    const parsed = JSON.parse(output.slice(start, end + 1));
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export async function listInstanceNames(): Promise<string[]> {
  const details = await listInstanceDetails();
  if (details.length > 0) return details.map((d) => d.name).filter(Boolean);
  // -details 不可用时退回 -list 文本: 过滤已知 banner 行与明显非实例名行(含空白的
  // 说明行/版本行), 实例名本身可以含空格(设备名实例如 "Mate 80 Pro"), 不能按 token 校验。
  const emu = toolchain().emulator;
  if (!emu) return [];
  const r = await run(emu, ["-list"], { timeoutMs: 30000 });
  if (r.code !== 0) return [];
  return r.out.split(/\r?\n/).map((s) => s.trim())
    .filter((s) => s && !s.startsWith("These are common"))
    .filter((s) => !/^Emulator\b|version|usage|option/i.test(s) || /^["']/.test(s));
}

export async function listInstanceDetails(): Promise<InstanceInfo[]> {
  const emu = toolchain().emulator;
  if (!emu) return [];
  const r = await run(emu, ["-list", "-details"], { timeoutMs: 30000 });
  if (r.code !== 0) return [];
  const arr = parseJsonArrayPrefix(r.out);
  if (!arr) return [];
  return arr.map((e) => {
    const p = String(e["hw.hdc.port"] ?? "");
    return {
      name: String(e.name ?? ""),
      running: String(e.isRunning) === "true",
      port: /^\d+$/.test(p) ? Number(p) : null,
    };
  });
}

/** 按实例名归属 HDC 端口(-details 权威)。返回 undefined = 未运行或端口未知。 */
async function attributedInstancePort(name: string): Promise<string | undefined> {
  const info = (await listInstanceDetails()).find((i) => i.name === name);
  return info?.running && info.port ? "127.0.0.1:" + info.port : undefined;
}

// ---------- 在线设备 ----------

/** 模拟器目标判定: hdc 本地端口(127.0.0.1:port)一律视为模拟器; 其余(真机序列号/无线 IP)为真机。 */
export function isEmulatorTarget(target: string): boolean {
  return /^127\.0\.0\.1:\d+$/.test(target) || /^localhost:\d+$/i.test(target);
}

/** Parse only HDC target tokens; reject empty markers and diagnostic/error lines. */
export function parseHdcTargets(output: string): string[] {
  return [...new Set(output.split(/\r?\n/).map((line) => line.trim()).filter((target) =>
    /^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(target),
  ))];
}

/** 仅在线模拟器目标(127.0.0.1 的可发现端口)。设备面默认选择器(ui/hilog/verify/uitest)
 *  必须用 onlineAllTargets(), 否则纯真机在线时会误判"无在线设备"。本函数只服务于模拟器
 *  启动探测(waitInstanceStart/waitNewDevice/runningInstanceTarget/resolveTarget)。 */
export async function onlineTargets(): Promise<string[]> {
  const hdc = toolchain().hdc;
  const r = await run(hdc, ["list", "targets"], { timeoutMs: 30000 });
  if (r.code !== 0) return [];
  return parseHdcTargets(r.out).filter((t) => {
    const m = t.match(/^127\.0\.0\.1:(\d+)$/);
    if (!m) return false;
    const p = Number(m[1]);
    return isDiscoverableHdcPort(p);
  });
}

/** 全量在线目标(模拟器 127.0.0.1:port + 真机序列号/无线 IP)。 */
export async function onlineAllTargets(): Promise<string[]> {
  const hdc = toolchain().hdc;
  const r = await run(hdc, ["list", "targets"], { timeoutMs: 30000 });
  if (r.code !== 0) return [];
  return parseHdcTargets(r.out);
}

export interface OnlineDeviceClassification { emulators: string[]; realDevices: string[]; }

/** 把在线目标拆成模拟器(127.0.0.1 可发现端口)与真机(序列号/无线 IP)。非可发现端口的
 *  本地回环目标(如诊断残留)按模拟器语义丢弃, 与 onlineTargets 保持一致。 */
export function classifyOnlineTargets(targets: string[]): OnlineDeviceClassification {
  const emulators: string[] = [];
  const realDevices: string[] = [];
  for (const target of targets) {
    const local = target.match(/^127\.0\.0\.1:(\d+)$/);
    if (local) {
      if (isDiscoverableHdcPort(Number(local[1]))) emulators.push(target);
      continue;
    }
    if (!isEmulatorTarget(target)) realDevices.push(target);
  }
  return { emulators, realDevices };
}

/** 报告层用: 全量在线设备, 按模拟器/真机分类(hub_status/emu_list)。 */
export async function onlineDevicesClassified(): Promise<OnlineDeviceClassification> {
  return classifyOnlineTargets(await onlineAllTargets());
}

export async function waitInstanceStart(
  name: string,
  before: string[],
  expectedTarget: string | undefined,
  crashBaselineMs: number,
  timeoutMs = BOOT_WAIT_TIMEOUT_MS,
  signal?: AbortSignal,
  listOnline: () => Promise<string[]> = onlineTargets,
  findCrash: (instanceName: string) => { path: string; mtimeMs: number } | undefined = latestEmulatorCrashReport,
  pollIntervalMs = BOOT_POLL_INTERVAL_MS,
  launchedPid?: number,
  isAlive: (pid: number) => boolean = isEmulatorProcessAlive,
  lookupInstancePort?: () => Promise<string | undefined>,
): Promise<EmulatorStartWaitResult> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (signal?.aborted) return { target: "" };
    const now = await listOnline();
    // 端口归属优先: 未显式给端口时, "任意新增目标"会把别的 agent 并发启动的实例
    // 认领成本次结果, 部署因此打到错误设备。-details 按实例名归属的端口是权威来源;
    // 仅当归属查询不可用(-details 解析失败/非 Windows)时才退回新增目标启发式。
    let target = "";
    if (expectedTarget) {
      target = now.includes(expectedTarget) ? expectedTarget : "";
    } else {
      const attributed = await lookupInstancePort?.();
      if (attributed && now.includes(attributed)) target = attributed;
      if (!target) target = now.find((candidate) => !before.includes(candidate)) ?? "";
    }
    if (target) return { target };
    if (launchedPid && !isAlive(launchedPid)) {
      return { target: "", launchFailure: "Emulator.exe 进程已退出 (PID " + launchedPid + ")" };
    }
    const crash = findCrash(name);
    if (crash && crash.mtimeMs > crashBaselineMs) {
      return { target: "", crashReport: crash.path };
    }
    await sleep(pollIntervalMs);
  }
  return { target: "" };
}

export function matchOnlineInstanceTargets(output: string, online: string[]): string[] {
  const candidates = new Set(
    [...output.matchAll(/127\.0\.0\.1:(\d+)/g)]
      .filter((match) => isDiscoverableHdcPort(Number(match[1])))
      .map((match) => match[0]),
  );
  return [...new Set(online.filter((target) => candidates.has(target)))];
}

async function runningInstanceTarget(name: string): Promise<string> {
  if (process.platform !== "win32") return "";
  const result = await ps1(["-Mode", "ports", "-Name", name]);
  if (result.code !== 0) return "";
  const matches = matchOnlineInstanceTargets(result.out, await onlineTargets());
  return matches.length === 1 ? matches[0] : "";
}

export async function waitOnline(target: string, timeoutMs = BOOT_WAIT_TIMEOUT_MS, signal?: AbortSignal): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (signal?.aborted) return false; // MCP 请求取消: 中止等待
    if ((await onlineAllTargets()).includes(target)) return true;
    await sleep(BOOT_POLL_INTERVAL_MS);
  }
  return false;
}

export async function waitNewDevice(before: string[], timeoutMs = BOOT_WAIT_TIMEOUT_MS, signal?: AbortSignal): Promise<string> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (signal?.aborted) return ""; // MCP 请求取消: 中止等待
    const now = await onlineTargets();
    const fresh = now.filter((t) => !before.includes(t));
    if (fresh.length > 0) return fresh[0];
    await sleep(BOOT_POLL_INTERVAL_MS);
  }
  return "";
}

export async function launchAndWaitForNewTarget(
  launch: () => Promise<void>,
  listOnline: () => Promise<string[]> = onlineTargets,
  waitForNew: (before: string[], timeoutMs?: number, signal?: AbortSignal) => Promise<string> = waitNewDevice,
  signal?: AbortSignal,
): Promise<string> {
  const before = await listOnline();
  await launch();
  return waitForNew(before, BOOT_WAIT_TIMEOUT_MS, signal);
}

// ---------- 镜像与实例创建/删除 ----------

export interface ImageInfo { osVersion: string; deviceType: string; releaseType?: string; }

export async function listImages(downloadedOnly = true): Promise<ImageInfo[]> {
  const emu = toolchain().emulator;
  if (!emu) return [];
  const args = ["-imageList"];
  if (downloadedOnly) args.push("-downloaded", "true");
  const r = await run(emu, args, { timeoutMs: 60000 });
  if (r.code !== 0) return [];
  const arr = parseJsonArrayPrefix(r.out);
  if (!arr) return [];
  return arr.map((e) => ({
    osVersion: String(e.osVersion ?? ""),
    deviceType: String(e.deviceType ?? ""),
    releaseType: e.releaseType ? String(e.releaseType) : undefined,
  }));
}

export interface CreateOpts {
  name: string;
  deviceType?: string;  // Phone/Tablet/Foldable/2in1/Wearable/TV..., 省略=已下载镜像中的 phone
  osVersion?: string;   // 如 "HarmonyOS 26.0.0(26)", 省略=已下载镜像自动选
  screenProfile?: string; // 如 "Mate 70", 省略=deviceType 默认型号
  storage?: number;     // GB (2~1023, 默认 6)
  memory?: number;      // GB (2~32, 默认 3；为双模拟器并行保留宿主内存余量)
  start?: boolean;      // 创建成功后立即启动并等上线
  signal?: AbortSignal; // MCP 请求级取消: start 时中止上线等待
}

export interface CreateResult { ok: boolean; created: boolean; deviceType?: string; osVersion?: string; target?: string; out: string; }

async function createInstanceCore(opts: CreateOpts): Promise<CreateResult> {
  const emu = toolchain().emulator;
  if (!emu) throw new Error("未找到 Emulator.exe (DevEco Studio 未安装或路径未配置)");
  const memory = opts.memory ?? DEFAULT_EMULATOR_MEMORY_GB;
  if (!isValidEmulatorMemory(memory)) {
    throw new Error("模拟器内存必须是 " + MIN_EMULATOR_MEMORY_GB + "-" + MAX_EMULATOR_MEMORY_GB + " GB 的整数");
  }
  if (await listInstanceNames().then((n) => n.includes(opts.name))) {
    return { ok: true, created: false, out: "实例已存在(未重复创建): " + opts.name };
  }
  let deviceType = opts.deviceType;
  let osVersion = opts.osVersion;
  if (!deviceType || !osVersion) {
    const images = await listImages(true);
    if (images.length === 0) {
      return { ok: false, created: false, out: "本机无已下载模拟器镜像; 先在 DevEco Studio Device Manager 下载, 或 Emulator.exe -install -deviceType Phone -osVersion <版本>" };
    }
    const want = (deviceType ?? "phone").toLowerCase();
    const pool = images.filter((i) => i.deviceType.toLowerCase() === want);
    const src = pool.length > 0 ? pool : images;
    deviceType = deviceType ?? src[0].deviceType;
    osVersion = osVersion ?? src[0].osVersion;
  }
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1); // imageList 小写 -> create 参数首字母大写
  const args = ["-create", opts.name, "-deviceType", cap(deviceType), "-osVersion", osVersion];
  if (opts.screenProfile) args.push("-screenProfile", opts.screenProfile);
  if (opts.storage) args.push("-storage", String(opts.storage));
  // DevEco's 4 GB default leaves too little host headroom for two GUI emulators
  // plus Hvigor on a 32 GB workstation. 3 GB still covers the observed API 26
  // guest peak while avoiding the low-memory GPU-driver failure mode.
  args.push("-memory", String(memory));
  const r = await run(emu, args, { timeoutMs: 300000 });
  if (r.code !== 0) {
    const hint = /license|agreement/i.test(r.out) ? " (需先接受协议: Emulator.exe -license accept)" : "";
    return { ok: false, created: false, deviceType, osVersion, out: tail(r.out, 15) + hint };
  }
  let target: string | undefined;
  let startFailure: string | undefined;
  if (opts.start) {
    // 启动失败不得掩盖"实例已创建"的事实: 调用方重试整个 emu_create 会命中"已存在",
    // 丢失崩溃/超时的结构化诊断。捕获并如实上报 created=true + 失败原因。
    try {
      target = await startInstanceCore(opts.name, undefined, opts.signal) || undefined;
      if (!target) startFailure = "实例已创建但启动等待超时(可稍后 emu_start)";
    } catch (e) {
      startFailure = "实例已创建但启动失败: " + (e instanceof Error ? e.message : String(e));
    }
  }
  if (startFailure) {
    return { ok: false, created: true, deviceType, osVersion, target, out: tail(r.out, 10) + "\n" + startFailure };
  }
  return { ok: true, created: true, deviceType, osVersion, target, out: tail(r.out, 10) };
}

export function createInstance(opts: CreateOpts): Promise<CreateResult> {
  return instanceMutex.run("emu:" + opts.name, () => createInstanceCore(opts));
}

export async function deleteInstance(name: string, force = true): Promise<{ ok: boolean; out: string }> {
  return instanceMutex.run("emu:" + name, async () => {
    const emu = toolchain().emulator;
    if (!emu) throw new Error("未找到 Emulator.exe");
    const args = ["-delete", name];
    if (force) args.push("-force");
    const r = await run(emu, args, { timeoutMs: 120000 });
    return { ok: r.code === 0, out: tail(r.out, 10) };
  });
}

// ---------- 启停 ----------

export type EmulatorBootMode = "coldboot" | "snapshot" | "reset";

export function isValidEmulatorBootMode(value: string): value is EmulatorBootMode {
  return value === "coldboot" || value === "snapshot" || value === "reset";
}

async function startInstanceCore(name: string, port?: number, signal?: AbortSignal,
  bootMode?: string): Promise<string> {
  const tc = toolchain();
  if (!tc.emulator) throw new Error("未找到 Emulator.exe (DevEco Studio 未安装或路径未配置)");
  if (port !== undefined && !isValidHdcPort(port)) {
    throw new Error("hdc 端口必须是 " + MIN_HDC_PORT + "-" + MAX_HDC_PORT + " 的整数");
  }
  if (bootMode !== undefined && !isValidEmulatorBootMode(bootMode)) {
    throw new Error("bootMode 必须是 coldboot、snapshot 或 reset");
  }
  const existing = await runningInstanceTarget(name);
  if (existing) {
    if (port && existing !== "127.0.0.1:" + port) {
      throw new Error("实例 '" + name + "' 已在线于 " + existing + ", 与请求端口 " + port + " 不一致");
    }
    await ps1(["-Mode", "rename", "-Name", name]);
    return existing;
  }
  const args = ["-start", name];
  // DevEco parses boot mode as a start option. Keep it adjacent to the
  // instance name; later transport options must not cause Quick Boot to win.
  if (bootMode) args.push("-bootmode", bootMode);
  if (port && port > 0) args.push("-hdcPort", String(port));
  const before = await onlineTargets();
  const crashBaselineMs = latestEmulatorCrashReport(name)?.mtimeMs ?? 0;
  const launch = await launchEmulatorProcess(tc.emulator, args);
  // 同时等待 HDC 与宿主崩溃报告。过去 GPU 驱动崩溃会被误报为四分钟的
  // “上线超时”，既掩盖根因也拖慢冷启动恢复。
  const startResult = await waitInstanceStart(
    name,
    before,
    port ? "127.0.0.1:" + port : undefined,
    crashBaselineMs,
    BOOT_WAIT_TIMEOUT_MS,
    signal,
    onlineTargets,
    latestEmulatorCrashReport,
    BOOT_POLL_INTERVAL_MS,
    launch.pid,
    isEmulatorProcessAlive,
    () => attributedInstancePort(name),
  );
  if (startResult.launchFailure) {
    throw new Error("模拟器 '" + name + "' 启动失败：" + startResult.launchFailure +
      "。请检查实例日志，或先执行 coldboot 修复失效的快照。");
  }
  if (startResult.crashReport) {
    const diagnosis = emulatorCrashDiagnostic(name);
    const detail = diagnosis ? "；诊断: " + diagnosis : "";
    throw new Error("模拟器 '" + name + "' 在启动期间崩溃" + detail +
      "；报告: " + startResult.crashReport +
      "。多模拟器测试实例建议使用 3 GB 内存并 coldboot，避免继承失效的图形上下文。");
  }
  const target = startResult.target;
  // Window naming is already bound to the exact launched PID by the native
  // process wrapper; no second global window scan is needed here.
  return target;
}

export function startInstance(name: string, port?: number, signal?: AbortSignal,
  bootMode?: string): Promise<string> {
  return instanceMutex.run("emu:" + name, () => startInstanceCore(name, port, signal, bootMode));
}

async function stopInstanceCore(name: string): Promise<{ ok: boolean; out: string }> {
  const tc = toolchain();
  if (!tc.emulator) return { ok: false, out: "未找到 Emulator.exe (DevEco Studio 未安装或路径未配置)" };
  // 官方 -stop 只停指定实例且完整退出 VM 子进程; Stop-Process/taskkill 单杀主进程
  // 会残留 VM 占住实例锁, 导致随后的 -start 超时
  const r = await run(tc.emulator, ["-stop", name], { timeoutMs: 120000 });
  if (r.code !== 0) return { ok: false, out: tail(r.out, 10) };
  // -stop 异步生效: 等实例真正退出(isRunning=false)再返回,
  // 否则紧接着的 -start 会与未释放的实例锁冲突(实测起不来)
  const deadline = Date.now() + STOP_CONFIRM_TIMEOUT_MS;
  while (Date.now() < deadline) {
    const inst = (await listInstanceDetails()).find((d) => d.name === name);
    if (!inst || !inst.running) return { ok: true, out: tail(r.out, 10) };
    await sleep(STOP_CONFIRM_INTERVAL_MS);
  }
  return { ok: true, out: tail(r.out, 10) + "\n警告: 60s 内实例仍显示运行中, 随后的 -start 可能冲突" };
}

export function stopInstance(name: string): Promise<{ ok: boolean; out: string }> {
  return instanceMutex.run("emu:" + name, () => stopInstanceCore(name));
}

export interface UiTestEnableResult {
  ok: boolean;
  alreadyEnabled: boolean;
  verified: boolean;
  target?: string;
  out: string;
}

// 使能 UITest testmode(官方 Instrument Test/Driver 套件的一次性前置设置)。
// 幂等: 已为 1 直接返回。注意: 部分商业模拟器镜像上 shell 域对 persist.ace.*
// 无读写权限(param set 假成功, param get 返回 1002), 此时无法真正使能,
// 返回 verified=false 如实报告, 由调用方用 Driver 套件实测确认。
export async function enableUiTest(target?: string): Promise<UiTestEnableResult> {
  const tc = toolchain();
  const targets = await onlineAllTargets();
  // 多台在线且未显式指定时拒绝: testmode 是设备级持久设置, 打错设备比报错严重。
  const t = target ?? (targets.length === 1 ? targets[0] : undefined);
  if (!t) {
    return {
      ok: false, alreadyEnabled: false, verified: false,
      out: targets.length === 0
        ? "无在线设备"
        : "多台设备在线(" + targets.join(", ") + "), 必须显式指定 target",
    };
  }
  const readParam = async (): Promise<string> => {
    const r = await run(tc.hdc, ["-t", t, "shell", "param get persist.ace.testmode.enabled"], { timeoutMs: 30000 });
    return r.out.trim();
  };
  if ((await readParam()) === "1") {
    return { ok: true, alreadyEnabled: true, verified: true, target: t, out: "testmode 已使能" };
  }
  const setRes = await run(tc.hdc, ["-t", t, "shell",
    "param set persist.ace.testmode.enabled 1; param set persist.sys.suspend_manager_enabled 0"],
    { timeoutMs: 30000 });
  const verified = (await readParam()) === "1";
  const note = verified
    ? "使能成功(suspend_manager 已置 0); 部分镜像需重启目标后生效"
    : "param set 已执行但无法读回确认: 该镜像 shell 可能对 persist.ace.* 无读写权限(set 假成功/get 1002), testmode 可能未真正使能。请用 Driver 套件实测确认; 若 Driver.create() 返回 null 即未使能, 需换调试镜像或在设备端完成 UITest 首次设置";
  return { ok: verified, alreadyEnabled: false, verified, target: t, out: tail(setRes.out, 5) + "\n" + note };
}

export async function renameWindows(name?: string): Promise<{ ok: boolean; out: string }> {
  if (process.platform !== "win32") return { ok: false, out: "窗口改名仅支持 Windows" };
  const args = ["-Mode", "rename"];
  if (name) args.push("-Name", name);
  const r = await ps1(args);
  return { ok: r.code === 0, out: r.out };
}

export async function taskbarNeverCombine(): Promise<{ ok: boolean; out: string }> {
  if (process.platform !== "win32") return { ok: false, out: "任务栏设置仅支持 Windows" };
  const r = await ps1(["-Mode", "taskbar"]);
  return { ok: r.code === 0, out: r.out };
}

// ---------- 部署目标解析(设备名实例契约, 移植自项目 build.ps1) ----------
//
// 实例约定已从"项目同名实例"改为"设备名实例"(如 Mate 80 Pro / Pura X View):
//   - 设备名实例(UI 设备池)在线优先; 未运行则按设备名启动已存在实例, 绝不自动创建;
//   - 项目同名实例仅作历史兼容: 只有"已在线"才会被选中, 不再自动创建/拉起。

export interface ResolveOpts {
  portArg?: number;
  device?: string;   // 真机序列号/无线 IP 显式指定(省略=按已装包反推或唯一真机)
  bundle: string;
  instance: string;
  cfgPort?: number;
  deviceInstances?: string[]; // 设备名实例清单(如 ["Mate 80 Pro", "Pura X View"]), 空=未配置
  log: (msg: string) => void;
  signal?: AbortSignal; // MCP 请求级取消: 中止自动启动实例的上线等待
}

// bm dump -a 的输出随版本在 JSON 数组与逐行清单之间变化: 统一经"整串精确匹配"判定,
// 子串包含会把 com.example.app 误判成装有 com.example.app2(防乱装校验因此失效)。
export function bundleListedInstalled(output: string, bundle: string): boolean {
  const parsed = parseJsonArrayPrefix(output);
  if (parsed) {
    return parsed.some((e) => String(e) === bundle || e?.name === bundle);
  }
  // 提取所有 bundle 形态 token(引号内或行级), 精确相等比较。
  const tokens = new Set<string>();
  for (const m of output.matchAll(/["']?([A-Za-z0-9][A-Za-z0-9._]*)["']?/g)) tokens.add(m[1]);
  return tokens.has(bundle);
}

// 设备名实例解析: 在线优先(配置顺序), 否则启动第一个已存在的设备名实例并等上线。
// 绝不自动创建——设备实例是刻意置备的实验室资产。返回空串=无法解析(原因已写入日志)。
async function resolveDeviceInstanceTarget(o: ResolveOpts): Promise<string> {
  const names = (o.deviceInstances ?? []).map((n) => n.trim()).filter((n) => n.length > 0);
  if (names.length === 0) return "";
  const infos = await listInstanceDetails();
  const byName = new Map(infos.map((i) => [i.name, i] as const));
  for (const name of names) {
    const info = byName.get(name);
    if (!info?.running) continue;
    const target = info.port ? "127.0.0.1:" + info.port : await runningInstanceTarget(name);
    if (target && (await onlineTargets()).includes(target)) {
      o.log("设备实例 '" + name + "' 在线于 " + target + " (设备名实例契约)");
      return target;
    }
  }
  const startName = names.find((n) => byName.has(n));
  if (!startName) {
    o.log("错误: 配置的设备实例 [" + names.join(", ") + "] 均不存在; 请用 emu_create 以设备名创建后重试");
    return "";
  }
  const tc = toolchain();
  if (!tc.emulator) { o.log("错误: 未找到 Emulator.exe, 无法启动设备实例 '" + startName + "'"); return ""; }
  const before = await onlineTargets();
  const crashBaselineMs = latestEmulatorCrashReport(startName)?.mtimeMs ?? 0;
  o.log("设备实例 '" + startName + "' 未运行, 按设备名契约启动并等待新设备上线 ...");
  const launch = await launchEmulatorProcess(tc.emulator, ["-start", startName]);
  const startResult = await waitInstanceStart(
    startName,
    before,
    undefined,
    crashBaselineMs,
    BOOT_WAIT_TIMEOUT_MS,
    o.signal,
    onlineTargets,
    latestEmulatorCrashReport,
    BOOT_POLL_INTERVAL_MS,
    launch.pid,
    isEmulatorProcessAlive,
    () => attributedInstancePort(startName),
  );
  if (startResult.launchFailure) {
    o.log("错误: 设备实例 '" + startName + "' 启动失败: " + startResult.launchFailure);
    return "";
  }
  if (startResult.crashReport) {
    const diagnosis = emulatorCrashDiagnostic(startName);
    o.log("错误: 设备实例 '" + startName + "' 启动期间崩溃" +
      (diagnosis ? "；诊断: " + diagnosis : "") + "；报告: " + startResult.crashReport);
    return "";
  }
  const target = startResult.target;
  if (!target) { o.log("错误: 等待设备实例 '" + startName + "' 上线超时"); return ""; }
  o.log("设备实例 '" + startName + "' 已上线 (" + target + ")");
  return target;
}

export async function resolveTarget(o: ResolveOpts): Promise<string> {
  const tc = toolchain();
  if (o.portArg !== undefined && !isValidHdcPort(o.portArg)) {
    o.log("错误: hdc 端口必须是 " + MIN_HDC_PORT + "-" + MAX_HDC_PORT + " 的整数");
    return "";
  }
  // 1. 显式端口 -> 模拟器
  if (o.portArg) return "127.0.0.1:" + o.portArg;
  // 2. 显式真机(序列号/无线 IP)
  if (o.device) {
    const all = await onlineAllTargets();
    if (!all.includes(o.device)) {
      o.log("错误: 指定的真机 '" + o.device + "' 不在线(hdc list targets 无此目标)");
      return "";
    }
    o.log("真机目标(显式): " + o.device);
    return o.device;
  }
  if (o.instance) {
    const infos = await listInstanceDetails();
    const info = infos.find((i) => i.name === o.instance);
    // 3. 项目同名实例仅在线时兼容选中(已不再自动创建/拉起同名实例)
    if (info?.running && info.port) {
      o.log("实例 '" + o.instance + "' hdc 端口: " + info.port + " (Emulator -list -details)");
      return "127.0.0.1:" + info.port;
    }
    const processTarget = await runningInstanceTarget(o.instance);
    if (processTarget) {
      o.log("实例 '" + o.instance + "' 在线于进程归属端口 " + processTarget);
      return processTarget;
    }
    // 4. 约定端口已在线
    if (o.cfgPort && o.cfgPort > 0 && (await onlineTargets()).includes("127.0.0.1:" + o.cfgPort)) {
      o.log("实例 '" + o.instance + "' 在线于约定端口 " + o.cfgPort);
      return "127.0.0.1:" + o.cfgPort;
    }
    // 5. 运行中但端口未知(外部启动): 用已装本应用包的在线设备反推同名实例(模拟器+真机, 防乱装)
    if (info?.running) {
      o.log("实例 '" + o.instance + "' 运行中但端口未分配(外部启动), 用已装 " + o.bundle + " 的在线设备反推");
      const hits: string[] = [];
      for (const t of await onlineAllTargets()) {
        const r = await run(tc.hdc, ["-t", t, "shell", "bm", "dump", "-a"], { timeoutMs: 60000 });
        if (bundleListedInstalled(r.out, o.bundle)) hits.push(t);
      }
      if (hits.length === 1) { o.log("反推成功: " + hits[0]); return hits[0]; }
      if (hits.length > 1) {
        o.log("错误: 多台在线设备装有 " + o.bundle + " (" + hits.join(", ") + "), 疑似历史乱部署污染; 请 port/device 指定或清理");
        return "";
      }
      o.log("错误: 实例运行中但无在线设备装有 " + o.bundle + " (首装无法反推); 请 port/device 指定目标");
      return "";
    }
    // 6. 真机反推: 在线真机已装本应用包(历史部署过) -> 部署真机; 唯一真机(首装) -> 部署真机
    const allTargets = await onlineAllTargets();
    const realDevices = allTargets.filter((t) => !isEmulatorTarget(t));
    if (realDevices.length > 0) {
      const installed: string[] = [];
      for (const t of realDevices) {
        const r = await run(tc.hdc, ["-t", t, "shell", "bm", "dump", "-a"], { timeoutMs: 60000 });
        if (bundleListedInstalled(r.out, o.bundle)) installed.push(t);
      }
      if (installed.length === 1) { o.log("真机已装本应用, 部署到 " + installed[0]); return installed[0]; }
      if (installed.length > 1) {
        o.log("错误: 多台真机装有 " + o.bundle + " (" + installed.join(", ") + "); 请 device 指定");
        return "";
      }
      if (realDevices.length === 1) {
        o.log("唯一在线真机 " + realDevices[0] + ", 作为部署目标(首次部署)");
        return realDevices[0];
      }
      o.log("多台在线真机且均未装 " + o.bundle + " (" + realDevices.join(", ") + "); 请 device 指定目标");
      return "";
    }
    // 7. 设备名实例契约: 拉起设备名模拟器(在线优先, 只启动已存在实例, 绝不创建)。
    //    项目同名实例的自动创建/拉起契约已删除。
    if ((o.deviceInstances ?? []).length > 0) {
      return await resolveDeviceInstanceTarget(o);
    }
    o.log("错误: 项目同名实例 '" + o.instance + "' 未运行且未配置设备名实例(deviceInstances); " +
      "同名实例自动创建/拉起契约已删除, 请按设备名置备实例或 port/device 显式指定");
    return "";
  }
  // 8. 无实例名: 仍可按设备名实例契约解析, 否则拒绝(不允许乱部署)
  if ((o.deviceInstances ?? []).length > 0) {
    return await resolveDeviceInstanceTarget(o);
  }
  o.log("错误: 未提供实例名且未配置设备名实例(deviceInstances), 拒绝部署");
  return "";
}
