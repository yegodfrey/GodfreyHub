// 设备租约孤儿事务回收: 心跳续租 + TTL/硬顶看门狗 + CAS 接管(码道 q7 方案落地)。
//
// 问题: MCP 客户端取消/Hub 崩溃后, GfDeviceLeaseHost.ps1 持有的 Windows 命名互斥体
// 成为孤儿——后续 hub_build/hub_test 要么死锁要么等满 6 小时互斥体超时。
// 方案(q7): 在既有"单宿主持锁"模型之上叠加租约元数据层,
//   层1 心跳: 独立线程每 30s 续写 <锁根>/<sha256(serial)>.lease.json 的 lastHeartbeatUnixMs;
//   层2 TTL: 看门狗周期扫描, 心跳停写超 TTL 或总时长超静态硬顶(默认 60min)即进入仲裁;
//   层3 PID: 心跳断后按 holder/hub 进程存活(带创建时间戳消歧)决定直接接管还是杀树后接管。
// 仲裁六组合(q7 3.4, verdictFor 一一对应):
//   心跳活 + 未超硬顶            -> 健康, 不回收
//   心跳断 + holder死 + hub死    -> 直接接管(ABANDONED 语义)
//   心跳断 + holder死 + hub活    -> Host 崩溃, 接管(杀残留为 no-op)
//   心跳断 + holder活 + hub死    -> Hub 崩溃, 杀 Host 后接管
//   心跳断 + holder活 + hub活    -> 挂死, 杀进程树后 CAS 接管
//   心跳活 + 超过硬顶            -> 超时硬顶, 杀进程树后 CAS 接管
//
// 关键安全性质:
//   * 活持锁者路径零变化——本模块只读写 .leases/ 元数据与孤儿分支, 命名互斥体层
//     (GfBuildMutex.ps1 / GfDeviceLeaseHost.ps1)的获取/释放语义保持不动;
//   * leaseToken 贯穿两层锁——Node 生成 token 传给宿主(READY 行回显握手), 再写进
//     租约元数据; 释放/接管都必须 token 匹配, 防止过期持有者误删新现场;
//   * CAS 接管单胜——status=active + token 双校验 + rename 原子替换, 并发看门狗/正常
//     释放竞争时恰好一方胜出;
//   * PID 复用消歧——判活同时比对进程创建时间戳(lease-watchdog-verify.ps1 已证可用),
//     杀树前再验一次时间戳, 绝不 taskkill 复用 PID 的无辜新进程;
//   * 接管留痕——journal/<key>.journal.ndjson(event=takeover)与 reclaimed/ 档案的
//     tookOverFrom/reclaimReason, 内容 schema 对齐 GFSoftware DeviceMutex.psm1
//     (kind/schemaVersion/acquiredAt/acquiredAtUnixMs/tookOverFrom), 但落在
//     GodfreyHub 自己的锁根(os.tmpdir()/godfreyhub/.leases, 可 env 覆盖), 不共享外部仓库。
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";
import { execFile } from "node:child_process";
import { Worker } from "node:worker_threads";
import { sleep } from "./proc.js";
import { resolvePwshPath } from "./pwsh.js";

export interface LeaseMeta {
  /** q7 元数据版本。 */
  version: number;
  /** 锁内容 schema 版本(对齐 DeviceMutex.psm1 风格)。 */
  schemaVersion: number;
  kind: "gf-device-lease";
  serial: string;
  /** 与命名互斥体同源的 sha256(serial.trim().toUpperCase()) 大写十六进制, 两层锁的关联键。 */
  serialKey: string;
  leaseToken: string;
  transactionId: string;
  holderPid: number;
  holderProcessName: string;
  holderProcessStartTimeUnixMs: number;
  hubPid: number;
  hubProcessStartTimeUnixMs: number;
  /** 人类可读取得时间(ISO, 展示用; 机器判据一律用 acquiredAtUnixMs)。 */
  acquiredAt: string;
  acquiredAtUnixMs: number;
  lastHeartbeatUnixMs: number;
  heartbeatIntervalMs: number;
  /** 心跳滑动 TTL: now-lastHeartbeat >= ttlMs 即心跳断。 */
  ttlMs: number;
  /** 静态硬顶: now-acquiredAt >= maxLeaseDurationMs 无条件回收(防僵尸心跳永生)。 */
  maxLeaseDurationMs: number;
  status: "active" | "reclaimed";
  // 以下字段由 CAS 胜出的接管者写入(留痕):
  tookOverFrom?: { pid: number; acquiredAt: string; ageSec: number };
  reclaimReason?: string;
  reclaimedAtUnixMs?: number;
  reclaimedByPid?: number;
}

export type TakeoverReason =
  | "max_duration_exceeded"
  | "holder_and_hub_dead"
  | "holder_dead_hub_alive"
  | "hub_dead_holder_alive"
  | "heartbeat_stalled_processes_alive";

export type HeartbeatStopReason =
  | "requested"
  | "lease_file_deleted"
  | "token_mismatch"
  | "max_failures"
  | "worker_error";

export interface LeaseConfig {
  heartbeatIntervalMs: number;
  ttlMs: number;
  maxLeaseDurationMs: number;
  watchdogIntervalMs: number;
}

function numEnv(name: string, def: number): number {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === "") return def;
  const value = Number(raw);
  return Number.isFinite(value) && value > 0 ? value : def;
}

// 注入口: 自测/实验用 env 缩短系数, 生产默认 = 30s 心跳 / 90s TTL / 60min 硬顶 / 10s 扫描。
export function leaseConfig(): LeaseConfig {
  return {
    heartbeatIntervalMs: numEnv("GF_DEVICE_LEASE_HEARTBEAT_MS", 30_000),
    ttlMs: numEnv("GF_DEVICE_LEASE_TTL_MS", 90_000),
    maxLeaseDurationMs: numEnv("GF_DEVICE_LEASE_MAX_DURATION_MS", 60 * 60_000),
    watchdogIntervalMs: numEnv("GF_DEVICE_LEASE_WATCHDOG_MS", 10_000),
  };
}

/** 租约根: GodfreyHub 自己的锁根(tmpdir/godfreyhub/.leases), env 可整体重定向(自测隔离)。 */
export function leaseRoot(): string {
  const override = process.env.GF_DEVICE_LEASE_ROOT?.trim();
  return override ? path.resolve(override) : path.join(os.tmpdir(), "godfreyhub", ".leases");
}

/**
 * 与 GfBuildMutex.ps1 Get-GfDeviceMutexName 完全同源的键: Trim+大写归一后 SHA256
 * 十六进制大写。互斥体名 Global\<prefix><key> 与租约文件 <key>.lease.json 由此一一对应。
 */
export function leaseKeyFor(serial: string): string {
  return createHash("sha256")
    .update(Buffer.from(serial.trim().toUpperCase(), "utf8"))
    .digest("hex")
    .toUpperCase();
}

export function leaseFilePath(serial: string): string {
  return path.join(leaseRoot(), leaseKeyFor(serial) + ".lease.json");
}

function journalPathFor(serial: string): string {
  return leaseFilePath(serial) + ".journal.ndjson";
}

export function debugLog(message: string): void {
  if ((process.env.GF_DEVICE_LEASE_DEBUG ?? "").trim() !== "") {
    console.error("[device-lease] " + message);
  }
}

function atomicWriteJson(file: string, value: unknown): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.tmp.${process.pid}.${randomUUID()}`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2) + "\n", "utf8");
  // Node 的 fs.rename 在 Windows 上走 MoveFileExW(MOVEFILE_REPLACE_EXISTING), 原子替换。
  fs.renameSync(tmp, file);
}

export function writeLeaseMeta(file: string, meta: LeaseMeta): void {
  atomicWriteJson(file, meta);
}

/** 读租约元数据; 缺失/半份/异构内容一律 null(绝不把读不出当"无人持有")。 */
export function readLeaseMeta(file: string): LeaseMeta | null {
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8")) as LeaseMeta;
    return normalizeLease(parsed);
  } catch {
    return null;
  }
}

function normalizeLease(raw: LeaseMeta): LeaseMeta | null {
  if (!raw || typeof raw.leaseToken !== "string" || raw.leaseToken === "") return null;
  const cfg = leaseConfig();
  const int = (v: unknown): number => (typeof v === "number" && Number.isFinite(v) ? v : 0);
  const pos = (v: unknown, def: number): number => (typeof v === "number" && Number.isFinite(v) && v > 0 ? v : def);
  const acquiredAtUnixMs = pos(raw.acquiredAtUnixMs, Date.now());
  return {
    ...raw,
    holderPid: int(raw.holderPid),
    hubPid: int(raw.hubPid),
    holderProcessStartTimeUnixMs: int(raw.holderProcessStartTimeUnixMs),
    hubProcessStartTimeUnixMs: int(raw.hubProcessStartTimeUnixMs),
    acquiredAtUnixMs,
    lastHeartbeatUnixMs: pos(raw.lastHeartbeatUnixMs, acquiredAtUnixMs),
    heartbeatIntervalMs: pos(raw.heartbeatIntervalMs, cfg.heartbeatIntervalMs),
    ttlMs: pos(raw.ttlMs, cfg.ttlMs),
    maxLeaseDurationMs: pos(raw.maxLeaseDurationMs, cfg.maxLeaseDurationMs),
    status: raw.status === "reclaimed" ? "reclaimed" : "active",
  };
}

/**
 * 仲裁纯函数: q7 3.4 六组合表。硬顶优先于心跳(心跳再活也吃硬顶), 心跳活压过一切 PID 状态。
 */
export function verdictFor(
  lease: Pick<LeaseMeta, "acquiredAtUnixMs" | "lastHeartbeatUnixMs" | "ttlMs" | "maxLeaseDurationMs">,
  nowMs: number,
  liveness: { holder: boolean; hub: boolean },
): { action: "keep" } | { action: "takeover"; reason: TakeoverReason } {
  if (nowMs - lease.acquiredAtUnixMs >= lease.maxLeaseDurationMs) {
    return { action: "takeover", reason: "max_duration_exceeded" };
  }
  if (nowMs - lease.lastHeartbeatUnixMs < lease.ttlMs) return { action: "keep" };
  if (!liveness.holder && !liveness.hub) return { action: "takeover", reason: "holder_and_hub_dead" };
  if (!liveness.holder && liveness.hub) return { action: "takeover", reason: "holder_dead_hub_alive" };
  if (liveness.holder && !liveness.hub) return { action: "takeover", reason: "hub_dead_holder_alive" };
  return { action: "takeover", reason: "heartbeat_stalled_processes_alive" };
}

// ---- PID 存活探测(创建时间戳消歧) ----

const PID_START_TOLERANCE_MS = 2000; // lease-watchdog-verify.ps1 T2 同款容差(两 API 源精度差以内)
const PROBE_CACHE_TTL_MS = 2000;
const probeCache = new Map<number, { startMs: number; probedAt: number }>();

function powershellExe(): string {
  return resolvePwshPath();
}

/**
 * 一次 PowerShell 批量探测 pid -> 进程创建时间(Unix 毫秒)。Get-Process 拿不到的 PID
 * 不在结果里 = 进程已死。只读进程列表, 不触碰任何设备/模拟器。
 */
export function queryProcessStartTimes(pids: number[]): Promise<Map<number, number>> {
  const unique = [...new Set(pids.filter((p) => Number.isInteger(p) && p > 0))];
  const result = new Map<number, number>();
  if (unique.length === 0) return Promise.resolve(result);
  const cachedKeys = unique.filter((pid) => {
    const hit = probeCache.get(pid);
    return hit !== undefined && Date.now() - hit.probedAt < PROBE_CACHE_TTL_MS;
  });
  for (const pid of cachedKeys) {
    const hit = probeCache.get(pid)!;
    result.set(pid, hit.startMs);
  }
  const missing = unique.filter((pid) => !cachedKeys.includes(pid));
  if (missing.length === 0) return Promise.resolve(result);
  return new Promise((resolve) => {
    const script = "$ErrorActionPreference='SilentlyContinue'; " +
      `Get-Process -Id @(${missing.join(",")}) | ForEach-Object { "{0}:{1}" -f $_.Id, $_.StartTime.ToFileTimeUtc() }`;
    execFile(powershellExe(), ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", script],
      { timeout: 15_000, windowsHide: true }, (err, stdout) => {
        // stdout 是唯一事实源: 批里混有已消失的 PID 时, PowerShell 即使 SilentlyContinue 也以
        // 退出码 1 结束, 但活 PID 的行照常输出——按 err 门丢弃会把活进程误判成死进程。
        // 退出码只影响留痕: 一条都没解析到才算探测通道异常, 记入 debug 日志。
        let parsed = 0;
        for (const line of String(stdout).split(/\r?\n/)) {
          const m = line.trim().match(/^(\d+):(\d+)$/);
          if (m) {
            const pid = Number(m[1]);
            const startMs = Math.floor(Number(m[2]) / 10000); // FILETIME 100ns -> Unix 毫秒
            result.set(pid, startMs);
            probeCache.set(pid, { startMs, probedAt: Date.now() });
            parsed++;
          }
        }
        if (parsed === 0) {
          debugLog(`process probe returned no entries for [${missing.join(",")}]: ` +
            `${err ? err.message : "empty stdout"}`);
        }
        resolve(result);
      });
  });
}

/**
 * PID 复用消歧判活: PID 在场且创建时间戳与记录一致(或记录缺失退化为纯 PID 判活)才算原进程仍活。
 */
export async function isProcessAliveWithStart(pid: number, expectedStartUnixMs: number): Promise<boolean> {
  if (pid === process.pid) return true;
  if (!(pid > 0)) return false;
  const times = await queryProcessStartTimes([pid]);
  const actual = times.get(pid);
  if (actual === undefined) return false;
  if (expectedStartUnixMs <= 0) return true;
  return Math.abs(actual - expectedStartUnixMs) <= PID_START_TOLERANCE_MS;
}

// ---- 接管(CAS + 受控杀树 + 留痕) ----

function killEnabled(): boolean {
  return (process.env.GF_DEVICE_LEASE_KILL ?? "").trim() !== "0";
}

/** 杀树前的复用消歧闸门: 创建时间戳对不上(或进程已死)绝不发 taskkill。 */
async function killHolderTreeIfSameProcess(pid: number, expectedStartUnixMs: number): Promise<boolean> {
  const times = await queryProcessStartTimes([pid]);
  const actual = times.get(pid);
  if (actual === undefined) return false;
  if (expectedStartUnixMs > 0 && Math.abs(actual - expectedStartUnixMs) > PID_START_TOLERANCE_MS) return false;
  if (expectedStartUnixMs <= 0) {
    // 时间戳缺失时按 q7 保守语义仍接管, 但不杀无法验明正身的进程。
    debugLog(`holder pid ${pid} has no recorded start time; takeover proceeds without kill`);
    return false;
  }
  return await new Promise<boolean>((resolve) => {
    execFile("taskkill", ["/pid", String(pid), "/t", "/f"], { timeout: 15_000, windowsHide: true },
      () => resolve(true));
  });
}

export interface ReclaimOptions {
  /** 自测/纯 CAS 演练可关杀树; 生产默认开。 */
  kill?: boolean;
  nowMs?: number;
}

/**
 * CAS 接管单胜: 过滤(active+token 双校验)之后, 用"rename 原子搬运进 reclaimed/"做认领——
 * 源文件消失即输, 并发看门狗/正常释放之间恰好一方胜出; 输家/迟到者一律 false。胜出后在
 * 档案上补全 tookOverFrom/reclaimReason 留痕, 再按创建时间戳闸门杀持有者进程树 + journal。
 */
export async function reclaimLease(
  serial: string,
  lease: LeaseMeta,
  reason: string,
  opts: ReclaimOptions = {},
): Promise<boolean> {
  return await reclaimLeaseAt(leaseFilePath(serial), lease, reason, opts);
}

export async function reclaimLeaseAt(
  file: string,
  lease: LeaseMeta,
  reason: string,
  opts: ReclaimOptions = {},
): Promise<boolean> {
  const now = opts.nowMs ?? Date.now();
  // CAS 过滤: 只信盘上最新内容——token 不匹配(已被接管)或 status != active(已释放)直接输。
  const current = readLeaseMeta(file);
  if (!current || current.status !== "active" || current.leaseToken !== lease.leaseToken) return false;
  const ageSec = Math.max(0, Math.round((now - current.acquiredAtUnixMs) / 1000));
  // CAS 认领: rename 到本不存在的档案路径是原子的; 源文件已被并发者搬走时 ENOENT 即认输。
  const key = path.basename(file, ".lease.json");
  const token8 = (current.leaseToken ?? "unknown").replace(/[^A-Za-z0-9-]/g, "").slice(0, 8) || "unknown";
  const archiveDir = path.join(path.dirname(file), "reclaimed");
  const archivePath = path.join(archiveDir, `${key}.${token8}.${now}.${randomUUID().slice(0, 8)}.json`);
  try {
    fs.mkdirSync(archiveDir, { recursive: true });
    fs.renameSync(file, archivePath);
  } catch {
    return false; // 源已易主/已删除: CAS 输, 不接管
  }
  const reclaimed: LeaseMeta = {
    ...current,
    status: "reclaimed",
    reclaimReason: reason,
    reclaimedAtUnixMs: now,
    reclaimedByPid: process.pid,
    tookOverFrom: { pid: current.holderPid, acquiredAt: current.acquiredAt, ageSec },
  };
  try {
    atomicWriteJson(archivePath, reclaimed); // 档案已锁死现场, 补写留痕失败不影响接管结论
  } catch (e) {
    debugLog(`reclaimed archive rewrite failed on ${archivePath}: ${(e as Error)?.message}`);
  }
  let holderKilled = false;
  if ((opts.kill ?? killEnabled()) && current.holderPid > 0 && current.holderPid !== process.pid) {
    try {
      holderKilled = await killHolderTreeIfSameProcess(current.holderPid, current.holderProcessStartTimeUnixMs);
    } catch (e) {
      debugLog(`holder tree kill failed for pid ${current.holderPid}: ${(e as Error)?.message}`);
    }
  }
  await writeTakeoverJournal(file, reason, current, now, holderKilled);
  return true;
}

/** DeviceMutex.psm1 同款 journal 风格: {at,pid,host,event,detail}, ndjson 追加, 冲突重试 3 次。 */
async function writeTakeoverJournal(
  leaseFile: string,
  reason: string,
  prior: LeaseMeta,
  nowMs: number,
  holderKilled: boolean,
): Promise<void> {
  const record = {
    at: new Date(nowMs).toISOString(),
    pid: process.pid,
    host: os.hostname(),
    event: "takeover",
    detail: {
      kind: "gf-device-lease",
      schemaVersion: 1,
      serial: prior.serial,
      leaseToken: prior.leaseToken,
      reason,
      holderKilled,
      holderPid: prior.holderPid,
      hubPid: prior.hubPid,
      tookOverFrom: {
        pid: prior.holderPid,
        acquiredAt: prior.acquiredAt,
        ageSec: Math.max(0, Math.round((nowMs - prior.acquiredAtUnixMs) / 1000)),
      },
    },
  };
  const journalFile = leaseFile + ".journal.ndjson";
  const line = JSON.stringify(record) + "\n";
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      fs.appendFileSync(journalFile, line, "utf8");
      return;
    } catch (e) {
      if (attempt === 3) {
        debugLog(`无法写入租约接管 journal '${journalFile}'(事件 '${reason}' 留痕丢失): ${(e as Error)?.message}`);
        return;
      }
      await sleep(50 * attempt);
    }
  }
}

/** token 校验删除: 被看门狗接管(token 已易主)后绝不误删接管理现场。 */
export function deleteLeaseMetaIfToken(serial: string, leaseToken: string): boolean {
  const file = leaseFilePath(serial);
  const current = readLeaseMeta(file);
  if (!current || current.leaseToken !== leaseToken) return false;
  try {
    fs.rmSync(file, { force: true });
    return true;
  } catch {
    return false;
  }
}

/** 组装租约元数据: holder/hub 创建时间戳一次批量探测(时间戳消歧的写入侧)。 */
export async function buildLeaseMeta(params: {
  serial: string;
  leaseToken: string;
  transactionId: string;
  holderPid: number;
  holderProcessName: string;
}): Promise<LeaseMeta> {
  const cfg = leaseConfig();
  const now = Date.now();
  const times = await queryProcessStartTimes([params.holderPid, process.pid]);
  return {
    version: 1,
    schemaVersion: 1,
    kind: "gf-device-lease",
    serial: params.serial,
    serialKey: leaseKeyFor(params.serial),
    leaseToken: params.leaseToken,
    transactionId: params.transactionId,
    holderPid: params.holderPid,
    holderProcessName: params.holderProcessName,
    holderProcessStartTimeUnixMs: times.get(params.holderPid) ?? 0,
    hubPid: process.pid,
    hubProcessStartTimeUnixMs: times.get(process.pid) ?? 0,
    acquiredAt: new Date(now).toISOString(),
    acquiredAtUnixMs: now,
    lastHeartbeatUnixMs: now,
    heartbeatIntervalMs: cfg.heartbeatIntervalMs,
    ttlMs: cfg.ttlMs,
    maxLeaseDurationMs: cfg.maxLeaseDurationMs,
    status: "active",
  };
}

// ---- 心跳续租(层 1) ----

export interface HeartbeatHandle {
  /** 请求停止; settled 后幂等。 */
  stop(): void;
  /** 首个停止原因(主动 stop -> 'requested'); Promise 永不 reject。 */
  stopped(): Promise<HeartbeatStopReason>;
}

/**
 * 单次心跳写: 只更新 lastHeartbeatUnixMs, 其余字段原样保留; token 不匹配/文件已被删
 * (已释放或被接管)立即返回停止原因, 绝不覆盖新持有者的现场(q7 1.1 坑 4)。
 */
export function heartbeatTickOnce(leaseFile: string, leaseToken: string):
  "ok" | "lease_file_deleted" | "token_mismatch" | "error" {
  try {
    const current = JSON.parse(fs.readFileSync(leaseFile, "utf8")) as LeaseMeta;
    if (current?.leaseToken !== leaseToken) return "token_mismatch";
    current.lastHeartbeatUnixMs = Date.now();
    const tmp = `${leaseFile}.hb.${process.pid}`;
    fs.writeFileSync(tmp, JSON.stringify(current, null, 2) + "\n", "utf8");
    fs.renameSync(tmp, leaseFile);
    return "ok";
  } catch (e) {
    if ((e as NodeJS.ErrnoException)?.code === "ENOENT") return "lease_file_deleted";
    debugLog(`heartbeat write failed on ${leaseFile}: ${(e as Error)?.message}`);
    return "error";
  }
}

function heartbeatIntervalOf(intervalMs: number): number {
  return Math.max(50, intervalMs);
}

function startMainThreadHeartbeat(leaseFile: string, leaseToken: string, intervalMs: number, maxFailures: number): HeartbeatHandle {
  let running = true;
  let settled = false;
  let failures = 0;
  let resolveStopped!: (reason: HeartbeatStopReason) => void;
  const stoppedPromise = new Promise<HeartbeatStopReason>((resolve) => { resolveStopped = resolve; });
  const settle = (reason: HeartbeatStopReason) => {
    if (!settled) { settled = true; resolveStopped(reason); }
  };
  const timer = setInterval(() => {
    if (!running) { clearInterval(timer); return; }
    const outcome = heartbeatTickOnce(leaseFile, leaseToken);
    if (outcome === "ok") { failures = 0; return; }
    if (outcome === "error") {
      // 连续写失败达到阈值主动停写并上报, 由持有方决定释放(q7 1.1 坑 2: 不许静默分裂)。
      failures += 1;
      if (failures >= maxFailures) {
        running = false;
        clearInterval(timer);
        settle("max_failures");
      }
      return;
    }
    running = false;
    clearInterval(timer);
    settle(outcome);
  }, heartbeatIntervalOf(intervalMs));
  timer.unref(); // 兜底线程绝不反过来吊住 Hub 进程生命周期
  return {
    stop() {
      if (!running) { settle("requested"); return; }
      running = false;
      clearInterval(timer);
      settle("requested");
    },
    stopped: () => stoppedPromise,
  };
}

function startWorkerHeartbeat(leaseFile: string, leaseToken: string, intervalMs: number, maxFailures: number): HeartbeatHandle | null {
  if ((process.env.GF_DEVICE_LEASE_HEARTBEAT_WORKER ?? "").trim() === "0") return null;
  try {
    const worker = new Worker(new URL("./lease-heartbeat-worker.js", import.meta.url), {
      workerData: { leaseFile, leaseToken, intervalMs: heartbeatIntervalOf(intervalMs), maxFailures },
    });
    let settled = false;
    let resolveStopped!: (reason: HeartbeatStopReason) => void;
    const stoppedPromise = new Promise<HeartbeatStopReason>((resolve) => { resolveStopped = resolve; });
    const settle = (reason: HeartbeatStopReason) => {
      if (!settled) { settled = true; resolveStopped(reason); }
    };
    worker.on("message", (msg: { type?: string; reason?: HeartbeatStopReason }) => {
      if (msg?.type === "stopped" && msg.reason) settle(msg.reason);
    });
    worker.on("error", () => settle("worker_error"));
    worker.on("exit", () => settle("worker_error")); // 正常路径已被 message/stop 抢先 settle
    return {
      stop() {
        settle("requested");
        try { worker.postMessage("stop"); } catch { /* 已终止 */ }
        worker.terminate();
      },
      stopped: () => stoppedPromise,
    };
  } catch (e) {
    debugLog("worker heartbeat unavailable, falling back to main thread: " + (e as Error)?.message);
    return null;
  }
}

/**
 * 启动租约心跳。优先 worker_threads 独立线程(主线程事件循环被同步段阻塞时心跳不脱拍,
 * q7 1.1); 构造失败或 GF_DEVICE_LEASE_HEARTBEAT_WORKER=0 时退回主线程 setInterval。
 */
export function startHeartbeat(leaseFile: string, leaseToken: string, intervalMs: number): HeartbeatHandle {
  const maxFailures = 3;
  return startWorkerHeartbeat(leaseFile, leaseToken, intervalMs, maxFailures)
    ?? startMainThreadHeartbeat(leaseFile, leaseToken, intervalMs, maxFailures);
}

// ---- 看门狗(层 2/3) ----

/** 本进程在管的活跃租约键: 看门狗跳过(心跳证明活, 且接管窗口期元数据刚写)。 */
const activeLeaseKeys = new Set<string>();

export function registerActiveLease(serial: string): void {
  activeLeaseKeys.add(leaseKeyFor(serial));
}

export function unregisterActiveLease(serial: string): void {
  activeLeaseKeys.delete(leaseKeyFor(serial));
}

export interface ScanOutcome {
  file: string;
  action: "keep" | "takeover" | "skip" | "invalid";
  reason?: TakeoverReason;
}

/**
 * 一轮扫描: 心跳活且未超硬顶的租约零探测直接 keep(稳态零 spawn); 只有心跳断/超硬顶的
 * 候选才做一次批量 PID 探测进仲裁。hubPid 是本进程时 hub 存活按定义成立, 免探测。
 */
export async function scanLeasesOnce(nowMs: number = Date.now()): Promise<ScanOutcome[]> {
  const root = leaseRoot();
  let files: string[] = [];
  try {
    files = fs.readdirSync(root).filter((f) => f.endsWith(".lease.json"));
  } catch {
    return [];
  }
  const out: ScanOutcome[] = [];
  const candidates: { file: string; path: string; lease: LeaseMeta }[] = [];
  for (const file of files) {
    const full = path.join(root, file);
    const lease = readLeaseMeta(full);
    if (!lease || lease.status !== "active") {
      out.push({ file, action: "invalid" });
      continue;
    }
    const key = path.basename(file).replace(/\.lease\.json$/, "");
    if (activeLeaseKeys.has(key)) {
      out.push({ file, action: "skip" });
      continue;
    }
    const quick = verdictFor(lease, nowMs, { holder: true, hub: true });
    if (quick.action === "keep") {
      out.push({ file, action: "keep" });
      continue;
    }
    candidates.push({ file, path: full, lease });
  }
  if (candidates.length === 0) return out;

  const pids: number[] = [];
  for (const c of candidates) {
    if (c.lease.holderPid > 0 && c.lease.holderPid !== process.pid) pids.push(c.lease.holderPid);
    if (c.lease.hubPid > 0 && c.lease.hubPid !== process.pid) pids.push(c.lease.hubPid);
  }
  const times = await queryProcessStartTimes(pids);
  const aliveOf = (pid: number, expectedStart: number): boolean => {
    if (pid === process.pid) return true;
    const actual = times.get(pid);
    if (actual === undefined) return false;
    if (expectedStart <= 0) return true;
    return Math.abs(actual - expectedStart) <= PID_START_TOLERANCE_MS;
  };
  for (const c of candidates) {
    // 复核时间点取当下: 探测窗口内心跳可能已恢复(候选退回健康)。
    const verdict = verdictFor(c.lease, Date.now(), {
      holder: aliveOf(c.lease.holderPid, c.lease.holderProcessStartTimeUnixMs),
      hub: aliveOf(c.lease.hubPid, c.lease.hubProcessStartTimeUnixMs),
    });
    if (verdict.action === "keep") {
      out.push({ file: c.file, action: "keep" });
      continue;
    }
    const won = await reclaimLeaseAt(c.path, c.lease, verdict.reason);
    out.push({ file: c.file, action: won ? "takeover" : "skip", reason: verdict.reason });
  }
  return out;
}

let watchdogTimer: ReturnType<typeof setInterval> | null = null;
let scanning = false;

/** 懒启动幂等看门狗: 定时扫描孤儿租约; unref 不吊住进程; 上一轮未完不重入。 */
export function startLeaseWatchdog(intervalMs: number = leaseConfig().watchdogIntervalMs): void {
  if (watchdogTimer) return;
  watchdogTimer = setInterval(() => {
    if (scanning) return;
    scanning = true;
    scanLeasesOnce()
      .catch((e) => debugLog("watchdog scan failed: " + (e as Error)?.message))
      .finally(() => { scanning = false; });
  }, Math.max(1000, intervalMs));
  watchdogTimer.unref();
}
