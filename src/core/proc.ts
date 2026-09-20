import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

export interface RunResult { code: number; out: string; timedOut: boolean; truncated: boolean; cancelled?: boolean; }

const DEFAULT_MAX_OUTPUT_BYTES = 8 * 1024 * 1024;

function quoteBatchArgument(value: string): string {
  return /^[A-Za-z0-9_./:=+-]+$/.test(value) ? value : '"' + value.replace(/"/g, '""') + '"';
}

export function terminateProcessTree(child: ReturnType<typeof spawn>): void {
  // exitCode 与 signalCode 互斥: 被信号终止的进程 exitCode 为 null, 只查一个会漏判已死。
  if (child.pid === undefined || child.exitCode !== null || child.signalCode !== null) return;
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
    if (child.exitCode === null && child.signalCode === null) {
      try { process.kill(-child.pid!, "SIGKILL"); } catch { try { child.kill("SIGKILL"); } catch { /* already exited */ } }
    }
  }, 2000);
  force.unref();
}

/**
 * 命令失败即抛: 所有"必须成功"的便捷封装(hdc shell/文件推送/布局拉取)统一走这里,
 * 消灭"丢弃退出码把失败当成功"的整类问题。错误消息带可读输出尾部, 不再只给退出码。
 * cancelled/timedOut 单独点名——对调用方这是"设备/工具不可用"而不是"命令报错"。
 */
export function requireOk(label: string, r: RunResult, tailLines = 40): RunResult {
  if (r.cancelled) throw new Error(`[${label}] 已取消`);
  if (r.timedOut) throw new Error(`[${label}] 超时:\n${tail(r.out, tailLines)}`);
  if (r.code !== 0) throw new Error(`[${label}] 失败(exit ${r.code}):\n${tail(r.out, tailLines)}`);
  return r;
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
    // cmd /c 会把双引号内的 %VAR% 展开成环境变量值: 参数里的 % 会被静默改写,
    // 无法安全转义(/c 语境没有可靠转义)。当前所有调用方都绕开了 .bat 包装层
    // (ohpm 直接走 DevEco 随包 node + pm-cli.js), 这里保留批处理路由作为兜底,
    // 但对含 % 的参数显式拒绝(fail-loud), 绝不让 cmd 静默改写调用方参数。
    if (isWindowsBatch && args.some((a) => a.includes("%"))) {
      resolve({
        code: 1,
        out: `[spawn-error] 批处理参数不允许包含 % (cmd /c 语境会被环境变量展开): ${cmd} ${args.join(" ")}`,
        timedOut: false,
        truncated: false,
      });
      return;
    }
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
    // 分块累积 + 运行期滚动丢弃头部: 超限即丢最旧字节(保留尾部窗口), 内存恒有界
    // (≤ maxOutputBytes + 单 chunk)。hilog/hvigor 这类高频输出进程到达上限后不再
    // 无界吃内存; 只在超限批次做一次指针移动, 稳态零拷贝。close 时一次性拼接。
    let chunks: Buffer[] = [];
    let bufferedLength = 0;
    let headDrop = 0;   // chunks[0] 头部已逻辑丢弃的字节数
    let truncated = false;
    let timedOut = false;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onAbort = () => {
      cancelled = true;
      // spawn 是异步的: 若 abort 先于 'spawn' 事件到达, pid 尚未产生, 直接杀会空转。
      // 置位 cancelled 后在 spawn 事件里补杀, 两个时序都不会漏。
      terminateProcessTree(child);
    };
    if (opts.signal) {
      if (opts.signal.aborted) onAbort();
      else opts.signal.addEventListener("abort", onAbort, { once: true });
    }
    const feed = (data: Buffer | string) => {
      const chunk = Buffer.isBuffer(data) ? data : Buffer.from(data, "utf8");
      chunks.push(chunk);
      bufferedLength += chunk.length;
      if (bufferedLength > maxOutputBytes) {
        truncated = true;
        let excess = bufferedLength - maxOutputBytes;
        while (excess > 0 && chunks.length > 0) {
          const head = chunks[0];
          const releasable = head.length - headDrop;
          if (releasable <= excess) {
            excess -= releasable;
            bufferedLength -= releasable;
            chunks.shift();
            headDrop = 0;
          } else {
            headDrop += excess;
            bufferedLength -= excess;
            excess = 0;
          }
        }
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
    child.on("error", (e) => {
      // spawn 失败(ENOENT/EACCES)时 close 仍会随后触发并 resolve; 把原因并进输出,
      // 避免只看到裸退出码无从排查。
      feed("\n[spawn-error] " + e.message);
    });
    child.once("spawn", () => {
      // spawn 事件 = 进程已真正创建: 此刻 pid 有效, 补杀在 run() 入口就已 abort 的请求。
      if (cancelled) terminateProcessTree(child);
    });
    child.on("close", (code) => {
      if (timer) clearTimeout(timer);
      if (opts.signal) opts.signal.removeEventListener("abort", onAbort);
      // 头部已在运行期滚动丢弃, 这里只需剥掉首块的 headDrop 偏移再拼接
      const output = headDrop > 0 && chunks.length > 0
        ? Buffer.concat([chunks[0].subarray(headDrop), ...chunks.slice(1)])
        : Buffer.concat(chunks);
      const prefix = truncated ? "[output truncated; showing last " + maxOutputBytes + " bytes]\n" : "";
      const suffix = timedOut ? "\n[timeout after " + opts.timeoutMs + "ms]" : (cancelled ? "\n[cancelled]" : "");
      resolve({
        code: timedOut || cancelled ? 124 : (code ?? 1),
        out: prefix + output.toString("utf8") + suffix,
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
