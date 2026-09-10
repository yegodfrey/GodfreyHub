import os from "node:os";
import path from "node:path";
import fs from "node:fs";
import { toolchain } from "./paths.js";
import { run, type RunResult } from "./proc.js";
import { shell, shellQuote, onlineAllTargets } from "./uitest.js";

// HiLog 采集: 快照式(一次性读 buffer 并过滤), 崩溃走 faultlog 目录

export interface HilogOpts {
  target?: string;
  lines?: number;          // 取最近 N 行(默认 200)
  level?: "D" | "I" | "W" | "E" | "F";
  tag?: string;
  domain?: string;         // 十六进制 domain, 如 0xD002800
  keyword?: string;        // 正则/子串过滤
}

export interface AppHilogOpts extends HilogOpts {
  bundleName: string;
  ability?: string;
  restart?: boolean;
  clearBeforeRestart?: boolean;
  waitMs?: number;
  save?: boolean;
}

export interface AppHilogResult {
  target: string;
  bundleName: string;
  pid: number;
  restarted: boolean;
  lineCount: number;
  logFile: string | null;
  log: string;
}

export interface FilteredHilogOpts extends HilogOpts {
  save?: boolean;
}

export interface FilteredHilogResult {
  target: string;
  lineCount: number;
  logFile: string | null;
  log: string;
}

interface HilogDeps {
  hdc?: string;
  onlineTargetList?: typeof onlineAllTargets;
  shellCommand?: typeof shell;
  runCommand?: (command: string, args: string[], opts: { timeoutMs: number }) => Promise<RunResult>;
  delay?: (milliseconds: number) => Promise<void>;
}

function normalizedLineLimit(lines: number | undefined): number {
  if (lines === undefined) return 200;
  if (!Number.isFinite(lines) || lines <= 0) throw new Error("lines 必须是正数");
  return Math.min(Math.floor(lines), 10_000);
}

function filterHilogOutput(output: string, opts: HilogOpts): string {
  let lines = output.replace(/\r/g, "").split("\n").filter(Boolean);
  if (opts.keyword) {
    try {
      const re = new RegExp(opts.keyword, "i");
      lines = lines.filter((line) => re.test(line));
    } catch {
      const keyword = opts.keyword.toLowerCase();
      lines = lines.filter((line) => line.toLowerCase().includes(keyword));
    }
  }
  return lines.slice(-normalizedLineLimit(opts.lines)).join("\n");
}

function buildHilogCommand(opts: HilogOpts, pid?: number): string {
  let command = "hilog -x -v time";
  if (opts.level) command += " -L " + opts.level;
  if (opts.tag) command += " -T " + shellQuote(opts.tag);
  if (opts.domain) command += " -D " + shellQuote(opts.domain);
  if (pid !== undefined) command += " --pid=" + pid;
  return command;
}

async function requireBundlePid(
  target: string,
  bundleName: string,
  shellCommand: typeof shell,
): Promise<number> {
  const pidOut = await shellCommand(target, `pidof ${shellQuote(bundleName)}`);
  const pid = pidOut.trim().split(/\s+/).find((value) => /^\d+$/.test(value));
  if (!pid) throw new Error(`App ${bundleName} 未运行，无法按 PID 获取日志`);
  return Number(pid);
}

async function collectForPid(
  target: string,
  pid: number | undefined,
  opts: HilogOpts,
  deps: HilogDeps,
): Promise<string> {
  const hdc = deps.hdc ?? toolchain().hdc;
  const runCommand = deps.runCommand ?? run;
  const result = await runCommand(
    hdc,
    ["-t", target, "shell", buildHilogCommand(opts, pid)],
    { timeoutMs: 60000 },
  );
  if (result.code !== 0) throw new Error("HiLog 采集失败: " + result.out.trim());
  return filterHilogOutput(result.out, opts);
}

export async function collectFilteredHilog(
  opts: FilteredHilogOpts,
  deps: HilogDeps = {},
): Promise<FilteredHilogResult> {
  const tag = opts.tag?.trim();
  const domain = opts.domain?.trim();
  const keyword = opts.keyword?.trim();
  if (!tag && !domain && !keyword) {
    throw new Error("tag、domain、keyword 必须至少提供一项，禁止无过滤采集整机日志");
  }
  const onlineTargetList = deps.onlineTargetList ?? onlineAllTargets;
  const target = opts.target ?? (await onlineTargetList())[0];
  if (!target) throw new Error("没有在线设备");
  const filteredOpts: HilogOpts = {
    ...opts,
    tag: tag || undefined,
    domain: domain || undefined,
    keyword: keyword || undefined,
  };
  const log = await collectForPid(target, undefined, filteredOpts, deps);
  const lineCount = log ? log.split("\n").length : 0;
  const logFile = opts.save === false
    ? null
    : saveLog(`filtered_${Date.now()}.log`, log);
  return { target, lineCount, logFile, log };
}

export async function collectAppHilog(
  opts: AppHilogOpts,
  deps: HilogDeps = {},
): Promise<AppHilogResult> {
  const bundleName = opts.bundleName.trim();
  if (!bundleName) throw new Error("bundleName 不能为空");
  const onlineTargetList = deps.onlineTargetList ?? onlineAllTargets;
  const target = opts.target ?? (await onlineTargetList())[0];
  if (!target) throw new Error("没有在线设备");
  const shellCommand = deps.shellCommand ?? shell;
  const restarted = opts.restart ?? false;

  if (restarted) {
    const ability = opts.ability?.trim();
    if (!ability) throw new Error("restart=true 时必须提供 ability（或通过已注册项目解析）");
    if (opts.clearBeforeRestart ?? true) await shellCommand(target, "hilog -r");
    await shellCommand(target, `aa force-stop ${shellQuote(bundleName)}`);
    const startOut = await shellCommand(
      target,
      `aa start -b ${shellQuote(bundleName)} -a ${shellQuote(ability)}`,
      60000,
    );
    if (/fail|error/i.test(startOut) && !/success/i.test(startOut)) {
      throw new Error("App 启动失败: " + startOut.trim());
    }
    const waitMs = opts.waitMs ?? 2000;
    if (!Number.isFinite(waitMs) || waitMs < 0 || waitMs > 30_000) {
      throw new Error("waitMs 必须在 0-30000 之间");
    }
    const delay = deps.delay ?? ((milliseconds: number) => new Promise<void>((resolve) => {
      setTimeout(resolve, milliseconds);
    }));
    await delay(waitMs);
  }

  const pid = await requireBundlePid(target, bundleName, shellCommand);
  const log = await collectForPid(target, pid, opts, deps);
  const lineCount = log ? log.split("\n").length : 0;
  const safeBundle = bundleName.replace(/[^A-Za-z0-9_.-]+/g, "_");
  const logFile = opts.save === false
    ? null
    : saveLog(`app_${safeBundle}_${Date.now()}.log`, log);
  return { target, bundleName, pid, restarted, lineCount, logFile, log };
}

export async function collectFaultlog(opts: { target?: string; bundleName?: string } = {}): Promise<string> {
  const target = opts.target ?? (await onlineAllTargets())[0];
  if (!target) throw new Error("没有在线设备");
  const listOut = await shell(target, "ls -t /data/log/faultlog/temp/ 2>/dev/null | head -5");
  const files = listOut.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (files.length === 0) return "(无 faultlog)";
  const parts: string[] = [];
  for (const f of files.slice(0, 3)) {
    const content = await shell(target, `head -100 ${shellQuote("/data/log/faultlog/temp/" + f)}`, 30000);
    parts.push("===== " + f + " =====\n" + content);
  }
  return parts.join("\n\n");
}

export function hilogDefaultSaveDir(): string {
  return path.join(os.tmpdir(), "godfreyhub", "hilog");
}

export function saveLog(name: string, content: string): string {
  const dir = hilogDefaultSaveDir();
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, name);
  fs.writeFileSync(file, content, "utf8");
  return file;
}
