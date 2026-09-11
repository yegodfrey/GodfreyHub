import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import JSON5 from "json5";
import { run, sleep, tail, type RunResult } from "./proc.js";
import { toolchain, type Toolchain } from "./paths.js";
import { buildAndDeploy, createDevEcoBuildEnv, type BuildOpts, type BuildResult } from "./hvigor.js";
import { resolveTarget } from "./emulator.js";
import { ensureDeviceUnlocked, shellQuote, type DeviceUnlockResult } from "./uitest.js";
import { loadConfig, type ProjectEntry } from "./registry.js";
import { KeyedMutex } from "./sync.js";
import lockfile from "proper-lockfile";

export type HarmonyTestMode = "local" | "instrument";

export interface HarmonyTestOpts {
  mode: HarmonyTestMode;
  modules?: string[];
  scopes?: string[];
  coverage?: boolean;
  patch?: string;
  asan?: boolean;
  timeoutMs?: number;
  port?: number;
  deviceLogTag?: string;
  deviceLogDomain?: string;
  signal?: AbortSignal; // MCP 请求级取消: 客户端取消/断连时终止 hvigor/hdc 子进程
}

export interface TestModule {
  name: string;
  path: string;
}

export interface TestReport {
  testResultFile: string | null;
  coverageHtml?: string | null;
  coverageJson?: string | null;
  cppCoverageHtml?: string | null;
  asanLogDir?: string | null;
}

export interface TestArtifacts {
  modules: string[];
  reports: Record<string, TestReport>;
  collectedModules: string[];
  missingModules: string[];
}

export interface HarmonyTestResult extends TestArtifacts {
  success: boolean;
  partial: boolean;
  code: number;
  mode: HarmonyTestMode;
  target?: string;
  logFile: string;
  log: string;
  deviceLog?: DeviceTestLog;
}

export interface DeviceTestLog {
  tag?: string;
  domain?: string;
  lineCount: number;
  logFile: string | null;
  tail: string;
  error?: string;
}

interface TestRunnerDeps {
  toolchain?: Toolchain;
  runCommand?: typeof run;
  resolveDevice?: typeof resolveTarget;
  ensureUnlocked?: (target: string) => Promise<DeviceUnlockResult>;
  buildDeploy?: (entry: ProjectEntry, opts: BuildOpts) => Promise<BuildResult>;
}

function readBuildProfile(harmonyRoot: string): any {
  const file = path.join(harmonyRoot, "build-profile.json5");
  if (!fs.existsSync(file)) throw new Error("未找到 build-profile.json5: " + file);
  return JSON5.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
}

export function discoverTestModules(harmonyRoot: string): TestModule[] {
  const profile = readBuildProfile(harmonyRoot);
  return (Array.isArray(profile?.modules) ? profile.modules : [])
    .filter((module: any) => typeof module?.name === "string" && module.name.trim())
    .map((module: any) => ({
      name: module.name.trim(),
      path: path.resolve(harmonyRoot, typeof module.srcPath === "string" && module.srcPath.trim()
        ? module.srcPath
        : module.name),
    }));
}

export function discoverInstrumentTestModules(harmonyRoot: string): TestModule[] {
  return discoverTestModules(harmonyRoot).filter((module) => {
    const profileFile = path.join(module.path, "build-profile.json5");
    if (!fs.existsSync(profileFile)) return false;
    try {
      const profile = JSON5.parse(fs.readFileSync(profileFile, "utf8").replace(/^\uFEFF/, ""));
      return (Array.isArray(profile?.targets) ? profile.targets : [])
        .some((target: any) => target?.name === "ohosTest");
    } catch {
      return false;
    }
  });
}

function cleanList(values: string[] | undefined): string[] {
  return (values ?? []).map((value) => value.trim()).filter(Boolean);
}

export function discoverLocalTestModules(harmonyRoot: string): TestModule[] {
  return discoverTestModules(harmonyRoot).filter((module) => {
    const arkTsSuite = path.join(module.path, "src", "test", "List.test.ets");
    if (fs.existsSync(arkTsSuite)) return true;

    const cangjieTests = path.join(module.path, "src", "test", "cangjie");
    try {
      return fs.readdirSync(cangjieTests, { withFileTypes: true })
        .some((entry) => entry.isFile() && entry.name.endsWith(".cj"));
    } catch {
      return false;
    }
  });
}

interface InstrumentRunner {
  appModule: string;
  testModule: string;
  runner: string;
}

export function discoverInstrumentRunner(module: TestModule): InstrumentRunner {
  const moduleFile = path.join(module.path, "src", "ohosTest", "module.json5");
  if (!fs.existsSync(moduleFile)) {
    throw new Error("Instrument Test 缺少显式测试配置: " + moduleFile);
  }
  try {
    const profile = JSON5.parse(fs.readFileSync(moduleFile, "utf8").replace(/^\uFEFF/, ""));
    const testModule = String(profile?.module?.name ?? "").trim();
    const runnerName = String(profile?.module?.testRunner?.name ?? "").trim();
    if (!testModule || !runnerName) {
      throw new Error("module.name 和 module.testRunner.name 均为必填项");
    }
    return {
      appModule: module.name,
      testModule,
      runner: "/ets/testrunner/" + runnerName,
    };
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error("Instrument Test 配置无效: " + moduleFile + ": " + detail);
  }
}

function assertInstrumentIdentifier(value: string, label: string, allowScope = false): void {
  const pattern = allowScope
    ? /^[A-Za-z_][A-Za-z0-9_.-]*(?:#[A-Za-z_][A-Za-z0-9_.-]*)?$/
    : /^[A-Za-z_][A-Za-z0-9_.-]*$/;
  if (!pattern.test(value)) throw new Error(label + " 格式无效: " + value);
}

export function buildDirectInstrumentShell(
  entry: Pick<ProjectEntry, "bundle" | "ability">,
  runner: InstrumentRunner,
  scopes: string[] | undefined,
  timeoutMs = 120_000,
): string {
  assertInstrumentIdentifier(runner.appModule, "应用模块");
  assertInstrumentIdentifier(runner.testModule, "测试模块");
  const selectedScopes = [...new Set(cleanList(scopes))];
  for (const scope of selectedScopes) assertInstrumentIdentifier(scope, "测试范围", true);
  if (!/^\/ets\/testrunner\/[A-Za-z_][A-Za-z0-9_.-]*$/.test(runner.runner)) {
    throw new Error("测试 runner 格式无效: " + runner.runner);
  }
  const testArgs = [
    "aa test",
    "-b " + shellQuote(entry.bundle),
    "-m " + shellQuote(runner.testModule),
    "-s unittest " + shellQuote(runner.runner),
    "-s page '@ohos/hypium'",
    ...(selectedScopes.length > 0 ? ["-s class " + shellQuote(selectedScopes.join(","))] : []),
    "-s timeout " + Math.max(1, Math.round(timeoutMs)),
  ].join(" ");
  return [
    "killall -9 uitest 2>/dev/null || true",
    "for i in 1 2 3 4 5; do pidof uitest >/dev/null || break; sleep 1; done",
    "pidof uitest >/dev/null && exit 70 || true",
    "param set persist.ace.testmode.enabled 1 || exit 73",
    "aa start -b " + shellQuote(entry.bundle) + " -a " + shellQuote(entry.ability) +
      " -m " + shellQuote(runner.appModule) + " || exit 74",
    "sleep 1",
    "uitest start-daemon default 2>/dev/null & daemon_pid=$!",
    "for i in 1 2 3 4 5; do pidof uitest >/dev/null && break; sleep 1; done",
    "pidof uitest >/dev/null || exit 71",
    testArgs,
    "test_status=$?",
    "killall -9 uitest 2>/dev/null || true",
    "exit $test_status",
  ].join("; ");
}

function persistDirectInstrumentReport(module: TestModule, output: string): string {
  const report = path.join(
    module.path,
    ".test", "default", "intermediates", "ohosTest", "coverage_data", "test_result.txt",
  );
  fs.mkdirSync(path.dirname(report), { recursive: true });
  fs.writeFileSync(report, output, "utf8");
  return report;
}

// 通过门禁: run>0 且 Failure/Error 全零且 Pass>0 才算通过。
// Pass 必须显式大于零: "Tests run: 5 ... Pass: 0, Ignore: 5"(整批被 Ignore)不是一次
// 通过的运行——按 0 Failure 放行会让"类过滤器写错导致零用例"伪装成绿。
function hasPassingInstrumentSummary(output: string): boolean {
  const summaries = [...output.matchAll(
    /Tests run:\s*(\d+)\s*,\s*Failure:\s*(\d+)\s*,\s*Error:\s*(\d+)\s*,\s*Pass:\s*(\d+)\s*,\s*Ignore:\s*(\d+)/gi,
  )];
  if (summaries.length === 0) return false;
  const summary = summaries[summaries.length - 1];
  return Number(summary[1]) > 0 && Number(summary[2]) === 0 && Number(summary[3]) === 0
    && Number(summary[4]) > 0;
}

// 全量目标 token(含无线 IP:port 与真机序列号): 恢复阶段需要对无线目标 tconn 回连,
// 只认 127.0.0.1 会让重启默认 server 后的无线真机静默掉线。
function connectedTargets(output: string): string[] {
  return output.split(/\r?\n/)
    .map((line) => line.trim().split(/\s+/)[0])
    .filter((target) => /^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(target));
}

export function hdcServerPortCandidates(seed = process.pid + Math.floor(Date.now() / 1000)): number[] {
  const poolSize = 90;
  const start = ((seed % poolSize) + poolSize) % poolSize;
  return Array.from({ length: 8 }, (_, index) => 18710 + ((start + index) % poolSize));
}

// ---------- 共享 hdc server 的隔离互斥 ----------
// withIsolatedHdcTarget 会 kill 掉**所有 agent 共享的默认 hdc server**, 换到隔离端口跑,
// 再恢复。这期间其他 agent 的任何 hdc 命令(部署/日志/emu 轮询)都会失败; 两个并发隔离
// 会话还会互相踩 kill/tconn 序列, 产生不可预测的 server 归属。因此整个 kill->隔离->
// 恢复窗口必须互斥: 进程内用 KeyedMutex; 跨进程(多开 IDE 各起一个 MCP server)用
// proper-lockfile(持锁续期, 崩溃后 60s 可接管, 抢锁总窗约 4 分钟后显式失败)。
const hdcServerMutex = new KeyedMutex();
const HDC_SERVER_LOCK = path.join(os.tmpdir(), "godfreyhub", "locks", "hdc-server.lock");

async function withHdcServerExclusive<T>(fn: () => Promise<T>): Promise<T> {
  return hdcServerMutex.run("hdc-server", async () => {
    const lockDir = path.dirname(HDC_SERVER_LOCK);
    fs.mkdirSync(lockDir, { recursive: true });
    const release = await lockfile.lock(HDC_SERVER_LOCK, {
      update: 30_000,    // 每 30s 续期(ms): 活的持有者不会被误判为陈锁
      stale: 60_000,     // 持有者崩溃(不再续期)后 60s, 其他进程可安全接管
      realpath: false,
      retries: { retries: 24, factor: 1.5, minTimeout: 1_000, maxTimeout: 10_000 },
    });
    try {
      return await fn();
    } finally {
      await release();
    }
  });
}

export function withIsolatedHdcTarget<T>(
  hdc: string,
  target: string,
  operation: (env: Record<string, string>) => Promise<T>,
  deps: { runCommand?: typeof run; serverPort?: number; serverPorts?: number[]; retryDelayMs?: number; signal?: AbortSignal } = {},
): Promise<T> {
  return withHdcServerExclusive(() => withIsolatedHdcTargetExclusive(hdc, target, operation, deps));
}

async function withIsolatedHdcTargetExclusive<T>(
  hdc: string,
  target: string,
  operation: (env: Record<string, string>) => Promise<T>,
  deps: { runCommand?: typeof run; serverPort?: number; serverPorts?: number[]; retryDelayMs?: number; signal?: AbortSignal } = {},
): Promise<T> {
  const runCommand = deps.runCommand ?? run;
  const signal = deps.signal;
  const before = await runCommand(hdc, ["list", "targets"], { timeoutMs: 30000, signal });
  if (before.code !== 0) throw new Error("读取 HDC 目标失败: " + tail(before.out, 10));
  const previousTargets = connectedTargets(before.out);
  const serverPorts = deps.serverPorts ?? (deps.serverPort !== undefined
    ? [deps.serverPort]
    : hdcServerPortCandidates());
  if (serverPorts.length === 0 || serverPorts.some((port) => !Number.isInteger(port) || port < 1 || port > 65535)) {
    throw new Error("临时 HDC 服务端口无效: " + serverPorts.join(","));
  }
  let defaultStopped = false;
  let activeEnv: Record<string, string> | null = null;
  const portDiagnostics: string[] = [];
  try {
    const stopped = await runCommand(hdc, ["kill"], { timeoutMs: 30000, signal });
    if (stopped.code !== 0) throw new Error("停止默认 HDC 服务失败: " + tail(stopped.out, 10));
    defaultStopped = true;
    for (const serverPort of serverPorts) {
      const isolatedEnv = { OHOS_HDC_SERVER_PORT: String(serverPort) };
      const started = await runCommand(hdc, ["start"], { timeoutMs: 10000, env: isolatedEnv, signal });
      if (started.code !== 0) {
        portDiagnostics.push("port " + serverPort + " start=" + started.code + " out=" + tail(started.out, 3));
        continue;
      }
      activeEnv = isolatedEnv;
      const attempts: string[] = [];
      let ready = false;
      for (let attempt = 1; attempt <= 3; attempt++) {
        const connected = await runCommand(hdc, ["tconn", target], { timeoutMs: 10000, env: isolatedEnv, signal });
        const isolated = await runCommand(hdc, ["list", "targets"], { timeoutMs: 10000, env: isolatedEnv, signal });
        const isolatedTargets = connectedTargets(isolated.out);
        attempts.push("attempt " + attempt + " tconn=" + connected.code + " list=" + isolated.code + " targets=" + isolatedTargets.join(",") + " out=" + tail(connected.out + "\n" + isolated.out, 3));
        if (connected.code === 0 && isolated.code === 0 && isolatedTargets.length === 1 && isolatedTargets[0] === target) {
          ready = true;
          break;
        }
        if (attempt < 3) await sleep(deps.retryDelayMs ?? 1000);
      }
      if (ready) return await operation(isolatedEnv);
      portDiagnostics.push("port " + serverPort + ":\n" + attempts.join("\n"));
      await runCommand(hdc, ["kill"], { timeoutMs: 10000, env: isolatedEnv, signal });
      activeEnv = null;
    }
    throw new Error("临时 HDC 服务未唯一连接目标 " + target + ":\n" + portDiagnostics.join("\n"));
  } finally {
    if (activeEnv) {
      await runCommand(hdc, ["kill"], { timeoutMs: 30000, env: activeEnv, signal });
    }
    if (defaultStopped) {
      await runCommand(hdc, ["start"], { timeoutMs: 30000, signal });
      for (const previousTarget of previousTargets) {
        // 只有带 ":端口" 形态的目标需要 tconn 回连(无线/回环); USB 序列号由重启的
        // server 自动重枚举, 对其 tconn 只会报错。
        if (!previousTarget.includes(":")) continue;
        await runCommand(hdc, ["tconn", previousTarget], { timeoutMs: 30000, signal });
      }
    }
  }
}

export function buildHvigorTestArgs(hvigorwJs: string, opts: HarmonyTestOpts): string[] {
  if (opts.asan && opts.mode !== "instrument") throw new Error("ASan 仅适用于 Instrument Test");
  const modules = cleanList(opts.modules);
  const scopes = cleanList(opts.scopes);
  const args = [hvigorwJs, opts.mode === "local" ? "test" : "onDeviceTest"];
  if (modules.length > 0) args.push("-p", "module=" + modules.join(","));
  if (opts.coverage !== undefined) {
    args.push("-p", "coverage=" + String(opts.coverage));
  }
  if (scopes.length > 0) args.push("-p", "scope=" + scopes.join(","));
  if (opts.patch !== undefined) {
    const patchFile = opts.patch.trim();
    if (!path.isAbsolute(patchFile) || !/\.(?:patch|diff)$/i.test(patchFile)) {
      throw new Error("API 26 增量覆盖率 patch 必须是绝对路径，且扩展名为 .patch 或 .diff");
    }
    args.push("-p", "patch=" + patchFile);
  }
  if (opts.asan) args.push("-p", "ohos-debug-asan=true");
  args.push("--no-daemon");
  return args;
}

function existingFile(file: string, notBeforeMs?: number): string | null {
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return null;
  if (notBeforeMs !== undefined && fs.statSync(file).mtimeMs < notBeforeMs) return null;
  return file;
}

export function collectTestArtifacts(
  harmonyRoot: string,
  moduleNames: string[],
  mode: HarmonyTestMode,
  coverage: boolean,
  asan: boolean,
  notBeforeMs?: number,
): TestArtifacts {
  const pathsByName = new Map(discoverTestModules(harmonyRoot).map((module) => [module.name, module.path]));
  const reports: Record<string, TestReport> = {};
  const collectedModules: string[] = [];
  const category = mode === "local" ? "test" : "ohosTest";

  for (const moduleName of moduleNames) {
    const modulePath = pathsByName.get(moduleName) ?? path.join(harmonyRoot, moduleName);
    const base = path.join(modulePath, ".test", "default");
    if (!fs.existsSync(base)) continue;
    const testResultFile = existingFile(path.join(base, "intermediates", category, "coverage_data", "test_result.txt"), notBeforeMs);
    const report: TestReport = { testResultFile };
    if (coverage) {
      report.coverageHtml = existingFile(path.join(base, "outputs", category, "reports", "index.html"), notBeforeMs);
      report.coverageJson = existingFile(path.join(base, "outputs", category, "reports", "coverageReport.json"), notBeforeMs);
      if (mode === "instrument") {
        report.cppCoverageHtml = existingFile(path.join(base, "outputs", category, "cpp_reports", "index.html"), notBeforeMs);
      }
    }
    if (mode === "instrument" && asan) {
      const asanDir = path.join(base, "intermediates", category, "coverage_data");
      report.asanLogDir = fs.existsSync(asanDir) && fs.statSync(asanDir).isDirectory() ? asanDir : null;
    }
    reports[moduleName] = report;
    if (testResultFile) collectedModules.push(moduleName);
  }

  return {
    modules: moduleNames,
    reports,
    collectedModules,
    missingModules: moduleNames.filter((module) => !collectedModules.includes(module)),
  };
}

function emptyArtifacts(modules: string[]): TestArtifacts {
  return { modules, reports: {}, collectedModules: [], missingModules: modules };
}

// 每次运行唯一的日志名: 固定文件名是"最后写者胜", 同项目并发运行会互相覆盖证据。
function runLogSuffix(): string {
  return new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14) + "_" + process.pid;
}

function writeTestLog(entry: ProjectEntry, mode: HarmonyTestMode, output: string): string {
  const logDir = path.join(os.tmpdir(), "godfreyhub", "logs");
  fs.mkdirSync(logDir, { recursive: true });
  const safeName = entry.name.replace(/[^A-Za-z0-9_.-]+/g, "_");
  const file = path.join(logDir, "test_" + safeName + "_" + mode + "_" + runLogSuffix() + ".log");
  fs.writeFileSync(file, output, "utf8");
  return file;
}

function writeDeviceTestLog(entry: ProjectEntry, tag: string, output: string): string {
  const logDir = path.join(os.tmpdir(), "godfreyhub", "logs");
  fs.mkdirSync(logDir, { recursive: true });
  const safeName = entry.name.replace(/[^A-Za-z0-9_.-]+/g, "_");
  const safeTag = tag.replace(/[^A-Za-z0-9_.-]+/g, "_");
  const file = path.join(logDir, "test_" + safeName + "_instrument_" + safeTag + "_hilog_" + runLogSuffix() + ".log");
  fs.writeFileSync(file, output, "utf8");
  return file;
}

function parseAppHilogBufferBytes(output: string): number | undefined {
  const match = output.match(/app buffer size is\s+(\d+(?:\.\d+)?)\s*([KMG])(?:i?B)?/i);
  if (!match) return undefined;
  const multiplier = match[2].toUpperCase() === "G"
    ? 1024 * 1024 * 1024
    : (match[2].toUpperCase() === "M" ? 1024 * 1024 : 1024);
  return Math.round(Number(match[1]) * multiplier);
}

function appHilogBufferArgument(bytes: number): string {
  return Math.max(64, Math.round(bytes / 1024)) + "K";
}

function countNonEmptyLines(output: string): number {
  return output.replace(/\r/g, "").split("\n").filter(Boolean).length;
}

interface FailedTestReport {
  module: string;
  failures: number;
  errors: number;
}

function failedTestReports(artifacts: TestArtifacts): FailedTestReport[] {
  const failed: FailedTestReport[] = [];
  for (const [module, report] of Object.entries(artifacts.reports)) {
    if (!report.testResultFile) continue;
    let content: string;
    try {
      content = fs.readFileSync(report.testResultFile, "utf8");
    } catch {
      // 报告在 collect 与 parse 之间被清理/占用: 视为无数据。整体通过性仍由
      // 退出码 + hasPassingInstrumentSummary 把关, 这里不虚构失败也不放行失败。
      continue;
    }
    const summaries = [...content.matchAll(/Tests run:\s*(\d+)\s*,\s*Failure:\s*(\d+)\s*,\s*Error:\s*(\d+)/gi)];
    let failures = 0;
    let errors = 0;
    if (summaries.length > 0) {
      const summary = summaries[summaries.length - 1];
      failures = Number(summary[2]);
      errors = Number(summary[3]);
    } else {
      failures = (content.match(/^result=Failure\s*$/gim) ?? []).length;
      errors = (content.match(/^result=Error\s*$/gim) ?? []).length;
    }
    if (failures > 0 || errors > 0) failed.push({ module, failures, errors });
  }
  return failed;
}

// 同项目的测试运行串行化: 直接写盘的产物(test_result.txt 固定路径是收集契约)与
// notBeforeMs 新鲜度过滤都按"单运行"假设设计, 并发运行同一项目会互相践踏证据。
// 异项目仍并行。跨进程的构建互斥由 hvigor 层的设备租约/GfBuildMutex 负责。
const testRunMutex = new KeyedMutex();

export function runHarmonyTests(
  entry: ProjectEntry,
  opts: HarmonyTestOpts,
  deps: TestRunnerDeps = {},
): Promise<HarmonyTestResult> {
  return testRunMutex.run("test:" + entry.name, () => runHarmonyTestsExclusive(entry, opts, deps));
}

async function runHarmonyTestsExclusive(
  entry: ProjectEntry,
  opts: HarmonyTestOpts,
  deps: TestRunnerDeps = {},
): Promise<HarmonyTestResult> {
  const tc = deps.toolchain ?? toolchain();
  const runCommand = deps.runCommand ?? run;
  const selectedModules = cleanList(opts.modules);
  const discoveredModules = opts.mode === "instrument"
    ? discoverInstrumentTestModules(entry.harmonyRoot)
    : discoverLocalTestModules(entry.harmonyRoot);
  const eligibleModuleNames = discoveredModules.map((module) => module.name);
  const modules = selectedModules.length > 0 ? selectedModules : eligibleModuleNames;
  const emptyLogFile = writeTestLog(entry, opts.mode, "");
  if (modules.length === 0) {
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, logFile: emptyLogFile, log: "工程未声明可测试模块" };
  }
  if (!tc.hvigorwJs) {
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, logFile: emptyLogFile, log: "未找到 hvigorw.js, 请确认 DevEco Studio 已安装或设置 DEVECO_PATH" };
  }
  if (opts.timeoutMs !== undefined && (!Number.isFinite(opts.timeoutMs) || opts.timeoutMs <= 0)) {
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, logFile: emptyLogFile, log: "timeoutMs 必须是正数" };
  }
  const deviceLogTag = opts.deviceLogTag?.trim();
  const deviceLogDomain = opts.deviceLogDomain?.trim();
  if ((deviceLogTag || deviceLogDomain) && opts.mode !== "instrument") {
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, logFile: emptyLogFile, log: "设备 HiLog 采集仅适用于 Instrument Test" };
  }
  if (deviceLogTag && !/^[A-Za-z0-9_.-]{1,31}$/.test(deviceLogTag)) {
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, logFile: emptyLogFile, log: "deviceLogTag 必须是 1-31 位 ASCII 字母、数字、点、下划线或连字符" };
  }
  if (deviceLogDomain && !/^(?:0x)?[0-9A-Fa-f]{1,8}$/.test(deviceLogDomain)) {
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, logFile: emptyLogFile, log: "deviceLogDomain 必须是 1-8 位十六进制 domain，可带 0x 前缀" };
  }

  let target: string | undefined;
  if (opts.mode === "instrument") {
    const resolveDevice = deps.resolveDevice ?? resolveTarget;
    target = await resolveDevice({
      portArg: opts.port,
      bundle: entry.bundle,
      instance: entry.instance || entry.name,
      cfgPort: entry.port,
      deviceInstances: loadConfig().deviceInstances,
      log: () => undefined,
      signal: opts.signal,
    }) ?? undefined;
    if (!target) {
      const message = "无法确定 Instrument Test 目标设备（要求设备名模拟器实例在线，或 port 显式指定）";
      fs.writeFileSync(emptyLogFile, message, "utf8");
      return { ...emptyArtifacts(modules), success: false, partial: false, code: 3, mode: opts.mode, logFile: emptyLogFile, log: message };
    }
    try {
      await (deps.ensureUnlocked ?? ensureDeviceUnlocked)(target);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      fs.writeFileSync(emptyLogFile, message, "utf8");
      return { ...emptyArtifacts(modules), success: false, partial: false, code: 4, mode: opts.mode, target, logFile: emptyLogFile, log: message };
    }
  }

  const startedAt = Date.now();
  let result: RunResult;
  let deviceLog: DeviceTestLog | undefined;
  try {
    const directInstrument = opts.mode === "instrument" && opts.coverage === false && !opts.asan;
    let deploymentLog = "";
    if (directInstrument) {
      const deployed = await (deps.buildDeploy ?? buildAndDeploy)(entry, {
        product: "debug",
        buildMode: "debug",
        // `target` may have been auto-discovered from a running DevEco instance.
        // Do not turn that discovered endpoint back into a user-supplied port:
        // legacy/current emulator instances can legitimately expose endpoints
        // outside the constrained manual-port allocation range. The deployer
        // resolves the same named instance and the equality check below keeps
        // the test transaction pinned to the original target.
        port: opts.port,
        // Direct Instrument is an authoritative source test. HarmonyOS hvigor
        // does not reliably invalidate file: source modules outside the app
        // root, so an incremental graph can silently reuse a stale ohosTest HAP.
        clean: true,
        skipStart: true,
        buildTests: true,
        testTarget: "ArkTS",
        freshInstall: true,
        signal: opts.signal,
      });
      deploymentLog = deployed.log;
      if (deployed.code !== 0 || deployed.target !== target) {
        const mismatch = deployed.code === 0
          ? "\n[GodfreyHub] 测试事务部署目标不一致: expected=" + target + " actual=" + (deployed.target ?? "<none>")
          : "";
        const output = deploymentLog + mismatch;
        const logFile = writeTestLog(entry, opts.mode, output);
        return { ...emptyArtifacts(modules), success: false, partial: false, code: deployed.code || 3, mode: opts.mode, target, logFile, log: tail(output, 120) };
      }
    }
    const executeHvigor = (hdcEnv: Record<string, string> = {}) => runCommand(
      tc.node,
      buildHvigorTestArgs(tc.hvigorwJs!, { ...opts, modules }),
      {
        cwd: entry.harmonyRoot,
        timeoutMs: opts.timeoutMs ?? 5 * 60_000,
        env: { ...createDevEcoBuildEnv(tc.deveco), ...hdcEnv },
        maxOutputBytes: 16 * 1024 * 1024,
        signal: opts.signal,
      },
    );
    const executeDirectInstrument = async (hdcEnv: Record<string, string>): Promise<RunResult> => {
      const moduleByName = new Map(discoverTestModules(entry.harmonyRoot).map((module) => [module.name, module]));
      const selectedScopes = cleanList(opts.scopes);
      const output: string[] = [];
      let code = 0;
      for (const moduleName of modules) {
        const module = moduleByName.get(moduleName);
        if (!module) {
          output.push("[GodfreyHub] 未找到测试模块: " + moduleName);
          code = 1;
          break;
        }
        const runner = discoverInstrumentRunner(module);
        const moduleOutput: string[] = [];
        const command = buildDirectInstrumentShell(entry, runner,
          selectedScopes.length > 0 ? selectedScopes : undefined,
          Math.min(opts.timeoutMs ?? 120_000, 120_000));
        const runResult = await runCommand(
          tc.hdc,
          ["-t", target!, "shell", command],
          { timeoutMs: opts.timeoutMs ?? 5 * 60_000, env: hdcEnv, maxOutputBytes: 16 * 1024 * 1024, signal: opts.signal },
        );
        const label = selectedScopes.length > 0 ? selectedScopes.join(",") : "<all>";
        moduleOutput.push("===== " + moduleName + ":" + label + " (hdc exit=" + runResult.code + ") =====\n" + runResult.out);
        if (runResult.code !== 0 || !hasPassingInstrumentSummary(runResult.out)) {
          code = runResult.code || 2;
        }
        const moduleText = moduleOutput.join("\n");
        persistDirectInstrumentReport(module, moduleText);
        output.push(moduleText);
        if (code !== 0) break;
      }
      return { code, out: deploymentLog + "\n" + output.join("\n"), timedOut: false, truncated: false };
    };
    const executeInstrument = async (hdcEnv: Record<string, string>): Promise<RunResult> => {
      const executeTest = directInstrument ? executeDirectInstrument : executeHvigor;
      if (!deviceLogTag && !deviceLogDomain) return executeTest(hdcEnv);
      const diagnostics: string[] = [];
      let originalBufferBytes: number | undefined;
      let expandedBuffer = false;
      const hdcShell = (command: string, timeoutMs = 60_000) => runCommand(
        tc.hdc,
        ["-t", target!, "shell", command],
        { timeoutMs, env: hdcEnv, maxOutputBytes: 16 * 1024 * 1024, signal: opts.signal },
      );
      const query = await hdcShell("hilog -g -t app");
      if (query.code === 0) {
        originalBufferBytes = parseAppHilogBufferBytes(query.out);
      } else {
        diagnostics.push("读取 app HiLog 缓冲区大小失败: " + tail(query.out, 3));
      }
      if (originalBufferBytes !== undefined && originalBufferBytes < 16 * 1024 * 1024) {
        const expanded = await hdcShell("hilog -G 16M -t app");
        if (expanded.code === 0) expandedBuffer = true;
        else diagnostics.push("扩大 app HiLog 缓冲区失败: " + tail(expanded.out, 3));
      }
      const cleared = await hdcShell("hilog -r -t app");
      if (cleared.code !== 0) diagnostics.push("清理 app HiLog 缓冲区失败: " + tail(cleared.out, 3));

      let hvigorResult: RunResult | undefined;
      try {
        hvigorResult = await executeTest(hdcEnv);
      } finally {
        let captureCommand = "hilog -x -v time -t app";
        if (deviceLogDomain) captureCommand += " -D " + shellQuote(deviceLogDomain);
        if (deviceLogTag) captureCommand += " -T " + shellQuote(deviceLogTag);
        const captured = await hdcShell(captureCommand);
        const filterLabel = [deviceLogDomain, deviceLogTag].filter(Boolean).join("_");
        if (captured.code === 0) {
          const log = captured.out.replace(/\r/g, "").trim();
          deviceLog = {
            tag: deviceLogTag || undefined,
            domain: deviceLogDomain || undefined,
            lineCount: countNonEmptyLines(log),
            logFile: writeDeviceTestLog(entry, filterLabel, log),
            tail: tail(log, 200),
          };
        } else {
          diagnostics.push("采集设备 HiLog 失败: " + tail(captured.out, 5));
          deviceLog = {
            tag: deviceLogTag || undefined,
            domain: deviceLogDomain || undefined,
            lineCount: 0,
            logFile: null,
            tail: "",
          };
        }
        if (expandedBuffer && originalBufferBytes !== undefined) {
          const restored = await hdcShell(
            "hilog -G " + appHilogBufferArgument(originalBufferBytes) + " -t app",
          );
          if (restored.code !== 0) diagnostics.push("恢复 app HiLog 缓冲区失败: " + tail(restored.out, 3));
        }
        if (diagnostics.length > 0 && deviceLog) deviceLog.error = diagnostics.join("; ");
      }
      if (!hvigorResult) throw new Error("Instrument Test 未返回执行结果");
      return hvigorResult;
    };
    result = opts.mode === "instrument"
      ? await withIsolatedHdcTarget(tc.hdc, target!, executeInstrument, { runCommand, signal: opts.signal })
      : await executeHvigor();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    fs.writeFileSync(emptyLogFile, message, "utf8");
    return { ...emptyArtifacts(modules), success: false, partial: false, code: 1, mode: opts.mode, target, logFile: emptyLogFile, log: message, deviceLog };
  }
  const coverage = opts.coverage ?? true;
  // A failed Hypium run still produces the most useful diagnostic artifact. In
  // direct Instrument mode we persist the device summary ourselves, and Hvigor
  // also commonly writes a report before returning a non-zero status. Always
  // collect those fresh artifacts instead of hiding them behind the exit code.
  const artifacts = collectTestArtifacts(entry.harmonyRoot, modules, opts.mode, coverage, opts.asan ?? false, startedAt);
  const failedReports = failedTestReports(artifacts);
  const missingRequiredReports = selectedModules.length > 0 && artifacts.missingModules.length > 0;
  const reportFailureLog = failedReports.length > 0
    ? "\n[GodfreyHub] Test report failures: " + failedReports
      .map((report) => report.module + ": " + report.failures + " failures, " + report.errors + " test errors")
      .join("; ")
    : "";
  const missingReportLog = missingRequiredReports
    ? "\n[GodfreyHub] 未生成新鲜测试报告: " + artifacts.missingModules.join(", ")
    : "";
  const output = result.out + reportFailureLog + missingReportLog;
  const logFile = writeTestLog(entry, opts.mode, output);
  const success = result.code === 0 && failedReports.length === 0 && !missingRequiredReports;
  return {
    ...artifacts,
    success,
    partial: success && artifacts.missingModules.length > 0,
    code: result.code === 0 && failedReports.length > 0 ? 2 : (result.code === 0 && missingRequiredReports ? 5 : result.code),
    mode: opts.mode,
    target,
    logFile,
    log: tail(output, 120),
    deviceLog,
  };
}
