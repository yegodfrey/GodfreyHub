import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

export interface RunResult { code: number; out: string; timedOut: boolean; truncated: boolean; cancelled?: boolean; }

const DEFAULT_MAX_OUTPUT_BYTES = 8 * 1024 * 1024;

function quoteBatchArgument(value: string): string {
  return /^[A-Za-z0-9_./:=+-]+$/.test(value) ? value : '"' + value.replace(/"/g, '""') + '"';
}

export function terminateProcessTree(child: ReturnType<typeof spawn>): void {
  if (child.pid === undefined || child.exitCode !== null) return;
  if (process.platform === "win32") {
    const killer = spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      stdio: "ignore",
      windowsHide: true,
    });
    killer.on("error", () => { try { child.kill(); } catch { /* already exited */ } });
    return;
  }
  try { process.kill(-child.pid, "SIGTERM"); } catch { try { child.kill("SIGTERM"); } catch { /* already exited */ } }
  const force = setTimeout(() => {
    if (child.exitCode === null) {
      try { process.kill(-child.pid!, "SIGKILL"); } catch { try { child.kill("SIGKILL"); } catch { /* already exited */ } }
    }
  }, 2000);
  force.unref();
}

// 统一子进程执行: 合并 stdout/stderr 供错误分析, 可选超时, 可选外部取消(MCP 请求级 AbortSignal)
export function run(cmd: string, args: string[], opts: { cwd?: string; timeoutMs?: number; env?: Record<string, string>; maxOutputBytes?: number; signal?: AbortSignal } = {}): Promise<RunResult> {
  return new Promise((resolve) => {
    // cwd 不存在时 Node spawn 抛 ENOENT，错误消息只显示 `spawn <cmd> ENOENT`，
    // 极易误判为可执行文件缺失（实测踩坑：harmonyRoot 指向迁移后不存在的目录）。
    // 提前显式校验并给出可操作的错误信息。
    if (opts.cwd && !existsSync(opts.cwd)) {
      resolve({
        code: 1,
        out: `[spawn-error] 工作目录不存在: ${opts.cwd}\n[spawn-error] 无法执行: ${cmd}${args.length > 0 ? " " + args.join(" ") : ""}\n提示: 若这是工程根(harmonyRoot)，请检查项目是否迁移过目录结构，并用 hub_scan 重新发现或 hub_set_project 更新工程根路径`,
        timedOut: false,
        truncated: false,
      });
      return;
    }
    const maxOutputBytes = Number.isFinite(opts.maxOutputBytes) && opts.maxOutputBytes! > 0
      ? Math.floor(opts.maxOutputBytes!)
      : DEFAULT_MAX_OUTPUT_BYTES;
    const isWindowsBatch = process.platform === "win32" && /\.(?:bat|cmd)$/i.test(cmd);
    const spawnCommand = isWindowsBatch ? (process.env.ComSpec || "cmd.exe") : cmd;
    const batchCommandLine = isWindowsBatch
      ? '""' + cmd.replace(/"/g, '""') + '"' +
        (args.length > 0 ? " " + args.map(quoteBatchArgument).join(" ") : "") + '"'
      : "";
    const spawnArgs = isWindowsBatch ? ["/d", "/s", "/c", batchCommandLine] : args;
    const child = spawn(spawnCommand, spawnArgs, {
      cwd: opts.cwd,
      env: opts.env ? { ...process.env, ...opts.env } : process.env,
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
      windowsVerbatimArguments: isWindowsBatch,
      detached: process.platform !== "win32",
    });
    let output: Uint8Array = new Uint8Array();
    let truncated = false;
    let timedOut = false;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    // 外部取消(MCP 请求级 signal): 客户端取消/断连时终止整个子进程树。
    // 与内部超时互斥语义一致——谁先到谁先杀; 取消后仍等 close 收敛再 resolve。
    const onAbort = () => {
      cancelled = true;
      terminateProcessTree(child);
    };
    if (opts.signal) {
      if (opts.signal.aborted) onAbort();
      else opts.signal.addEventListener("abort", onAbort, { once: true });
    }
    const feed = (data: Buffer | string) => {
      const chunk = Buffer.isBuffer(data) ? data : Buffer.from(data, "utf8");
      if (chunk.length >= maxOutputBytes) {
        output = chunk.subarray(chunk.length - maxOutputBytes);
        truncated = true;
        return;
      }
      const nextLength = output.length + chunk.length;
      if (nextLength > maxOutputBytes) {
        output = Buffer.concat([output.subarray(nextLength - maxOutputBytes), chunk]);
        truncated = true;
      } else {
        output = Buffer.concat([output, chunk]);
      }
    };
    child.stdout.on("data", feed);
    child.stderr.on("data", feed);
    if (opts.timeoutMs) {
      timer = setTimeout(() => {
        timedOut = true;
        terminateProcessTree(child);
      }, opts.timeoutMs);
    }
    child.on("error", (e) => feed("\n[spawn-error] " + e.message));
    child.on("close", (code) => {
      if (timer) clearTimeout(timer);
      if (opts.signal) opts.signal.removeEventListener("abort", onAbort);
      const prefix = truncated ? "[output truncated; showing last " + maxOutputBytes + " bytes]\n" : "";
      const suffix = timedOut ? "\n[timeout after " + opts.timeoutMs + "ms]" : (cancelled ? "\n[cancelled]" : "");
      resolve({
        code: timedOut || cancelled ? 124 : (code ?? 1),
        out: prefix + Buffer.from(output).toString("utf8") + suffix,
        timedOut,
        truncated,
        ...(cancelled ? { cancelled: true } : {}),
      });
    });
  });
}

// 分离启动: 等待操作系统确认进程已创建后再释放句柄, 启动失败则显式拒绝。
export function runDetached(cmd: string, args: string[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { detached: true, stdio: "ignore", windowsHide: true });
    child.once("error", reject);
    child.once("spawn", () => {
      child.unref();
      resolve();
    });
  });
}

export function tail(s: string, maxLines = 60): string {
  const lines = s.replace(/\r/g, "").split("\n");
  return lines.slice(-maxLines).join("\n").trim();
}

export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
