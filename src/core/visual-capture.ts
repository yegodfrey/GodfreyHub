import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import type { ChildProcess } from "node:child_process";
import readline from "node:readline";
import { toolchain } from "./paths.js";
import { run, terminateProcessTree, tail } from "./proc.js";
import { shell, shellQuote, resolveLocalOutputPath, firstTarget } from "./uitest.js";

// 宿主侧视觉检查点抓取原语(领域无关):
//   设备端 instrument class 调用 gfCaptureVisualCheckpoint 后, 向 HiLog 写入
//   [GFVISUAL_CHECKPOINT] <JSON> marker(含检查点名与锚点清单)并保持界面静止一个
//   捕获窗口(默认 4s); 本原语监听 HiLog, 在窗口内用官方 uitest CLI
//   (screenCap + dumpLayout -a, 只允许落盘 /data/local/tmp)采集 PNG 与完整布局树,
//   file recv 回收本地, 并按 marker 锚点清单对布局树校验界面未漂移。
// 约束: 必须与正在运行的视觉 instrument class 配套使用; class 期间不得并发
// 第二个 uitest 客户端; uitest CLI 不自建父目录, 暂存目录必须先 mkdir。

export const DEFAULT_VISUAL_MARKER = "GFVISUAL_CHECKPOINT";
export const DEFAULT_VISUAL_STAGING_DIR = "/data/local/tmp/gfvisual";

export interface VisualMarkerPayload {
  name: string;
  anchors: string[];
}

// 设备端对检查点名有同款约束(test-platform/gftest-device GfVisualCheckpoint.ets)
const CHECKPOINT_NAME_PATTERN = /^[a-z0-9][a-z0-9-]{1,79}$/;

export function parseVisualMarkerLine(line: string,
  marker: string = DEFAULT_VISUAL_MARKER): VisualMarkerPayload | null {
  const at = line.indexOf(marker);
  if (at < 0) return null;
  const start = line.indexOf("{", at + marker.length);
  if (start < 0) throw new Error("marker 行缺少 JSON 载荷: " + line.trim());
  const end = line.lastIndexOf("}");
  if (end <= start) throw new Error("marker 行 JSON 载荷不完整: " + line.trim());
  let payload: any;
  try {
    payload = JSON.parse(line.slice(start, end + 1));
  } catch (error) {
    throw new Error("marker JSON 解析失败(" + (error instanceof Error ? error.message : String(error)) + "): " + line.trim());
  }
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  if (!CHECKPOINT_NAME_PATTERN.test(name)) {
    throw new Error("marker 检查点名无效: '" + name + "'");
  }
  const anchors = Array.isArray(payload?.anchors)
    ? payload.anchors.filter((a: unknown): a is string => typeof a === "string" && a.trim().length > 0)
    : [];
  if (anchors.length === 0) {
    throw new Error("marker '" + name + "' 携带的锚点清单为空");
  }
  return { name, anchors };
}

export function collectLayoutIds(raw: any): Set<string> {
  const ids = new Set<string>();
  const roots = Array.isArray(raw) ? raw : [raw];
  const visit = (node: any): void => {
    if (!node || typeof node !== "object") return;
    const attrs = node.attributes ?? {};
    for (const key of ["id", "identifier"]) {
      const value = attrs[key];
      if (typeof value === "string" && value.length > 0) ids.add(value);
    }
    for (const child of (Array.isArray(node.children) ? node.children : [])) visit(child);
  };
  for (const root of roots) visit(root);
  return ids;
}

export function missingAnchors(raw: any, anchors: string[]): string[] {
  const ids = collectLayoutIds(raw);
  return anchors.filter((anchor) => !ids.has(anchor));
}

// ---------------------------------------------------------------- 流式行读取

export interface LineStream {
  onLine(callback: (line: string) => void): void;
  onEnd(callback: () => void): void;
  close(): void;
}

function hdcLineStream(hdc: string, target: string | undefined, logArgs: string[]): LineStream {
  const args = target ? ["-t", target, ...logArgs] : [...logArgs];
  const child: ChildProcess = spawn(hdc, args, { stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
  const stderrChunks: string[] = [];
  child.stderr?.on("data", (chunk: Buffer) => {
    if (stderrChunks.length < 20) stderrChunks.push(chunk.toString("utf8"));
  });
  return {
    onLine(callback: (line: string) => void): void {
      child.stdout?.setEncoding("utf8");
      const reader = readline.createInterface({ input: child.stdout!, crlfDelay: Infinity });
      reader.on("line", callback);
    },
    onEnd(callback: () => void): void {
      child.on("close", () => callback());
      child.on("error", () => callback());
    },
    close(): void {
      terminateProcessTree(child);
    },
  };
}

interface StreamDeps {
  stderrTail?: string[];
  lines: string[];           // 依序投递; 空 = 不再产出(流结束)
  closeDelayMs?: number;     // close() 调用后延迟抛错, 保证不依赖 close 生效
}

function fakeLineStream(deps: StreamDeps): LineStream {
  let lineCallback: ((line: string) => void) | null = null;
  let endCallback: (() => void) | null = null;
  let closed = false;
  const pump = (): void => {
    for (const line of deps.lines) lineCallback?.(line);
    endCallback?.();
  };
  if (deps.lines.length > 0) setImmediate(pump);
  else setImmediate(() => endCallback?.());
  return {
    onLine(callback: (line: string) => void): void { lineCallback = callback; },
    onEnd(callback: () => void): void { endCallback = callback; },
    close(): void {
      closed = true;
      if (deps.closeDelayMs) {
        setTimeout(() => { if (!closed) throw new Error("stream 未被有效关闭"); }, deps.closeDelayMs).unref();
      }
    },
  };
}

// ---------------------------------------------------------------- 抓取编排

export interface VisualGoldenCapture {
  name: string;
  anchors: string[];
  missingAnchors: string[];
  png: string;
  layout: string;
}

export interface VisualGoldenResult {
  target: string;
  marker: string;
  stagingDir: string;
  outDir: string;
  captures: VisualGoldenCapture[];
  timedOut: boolean;
}

export interface VisualCaptureOptions {
  target?: string;
  marker?: string;
  stagingDir?: string;
  outDir?: string;
  count?: number;          // 抓到 N 个 marker 后停止; 省略=等到 timeoutMs
  timeoutMs?: number;      // 总等待上限, 默认 120000
  verifyAnchors?: boolean; // 默认 true
}

export interface VisualCaptureDeps {
  shellCommand?: typeof shell;
  runCommand?: typeof run;
  streamCommand?: (cmd: string, args: string[]) => LineStream;
  streamDeps?: StreamDeps;  // streamCommand 省略时, 用合成流按序投递
}

export async function captureVisualGolden(opts: VisualCaptureOptions = {},
  deps: VisualCaptureDeps = {}): Promise<VisualGoldenResult> {
  const marker = opts.marker?.trim() || DEFAULT_VISUAL_MARKER;
  const stagingDir = opts.stagingDir?.trim() || DEFAULT_VISUAL_STAGING_DIR;
  const outDir = resolveLocalOutputPath(opts.outDir?.trim()
    || path.join(os.tmpdir(), "godfreyhub", "visual-golden"));
  const count = opts.count !== undefined ? Math.max(1, Math.floor(opts.count)) : Infinity;
  const timeoutMs = opts.timeoutMs !== undefined ? Math.max(1000, Math.floor(opts.timeoutMs)) : 120_000;
  const verifyAnchors = opts.verifyAnchors !== false;

  const shellCommand = deps.shellCommand ?? shell;
  const runCommand = deps.runCommand ?? run;
  const streamCommand = deps.streamCommand ?? ((cmd: string, args: string[]) => {
    if (deps.streamDeps) return fakeLineStream(deps.streamDeps);
    return hdcLineStream(cmd, undefined, args);
  });

  const target = opts.target ?? await firstTarget();
  if (!target) throw new Error("没有在线设备");

  // uitest CLI 不自建父目录, 暂存目录必须先就位
  await shellCommand(target, "mkdir -p " + shellQuote(stagingDir), 30000);
  fs.mkdirSync(outDir, { recursive: true });

  const hdc = toolchain().hdc;
  const stream = streamCommand(hdc, target ? ["-t", target, "shell", "hilog"] : ["shell", "hilog"]);
  const captures: VisualGoldenCapture[] = [];
  let failure: Error | null = null;
  let finished = false;
  let inFlight = 0;
  let streamEnded = false;

  const finish = (): void => {
    if (finished) return;
    finished = true;
    clearTimeout(timer);
    stream.close();
  };

  const captureOne = async (payload: VisualMarkerPayload): Promise<void> => {
    inFlight += 1;
    try {
      const remotePng = stagingDir + "/" + payload.name + ".png";
      const remoteJson = stagingDir + "/" + payload.name + ".json";
      const localPng = resolveLocalOutputPath(path.join(outDir, payload.name + ".png"));
      const localJson = resolveLocalOutputPath(path.join(outDir, payload.name + ".json"));

      await shellCommand(target, "uitest screenCap -p " + shellQuote(remotePng), 30000);
      await shellCommand(target, "uitest dumpLayout -p " + shellQuote(remoteJson) + " -a", 60000);

      for (const [remote, local] of [[remotePng, localPng], [remoteJson, localJson]] as const) {
        const recv = await runCommand(hdc, ["-t", target, "file", "recv", remote, local], { timeoutMs: 30000 });
        if (!fs.existsSync(local)) {
          throw new Error("回收 " + remote + " 失败: " + recv.out.trim());
        }
      }

      let missing: string[] = [];
      if (verifyAnchors) {
        const raw = JSON.parse(fs.readFileSync(localJson, "utf8"));
        missing = missingAnchors(raw, payload.anchors);
      }
      captures.push({
        name: payload.name,
        anchors: [...payload.anchors],
        missingAnchors: missing,
        png: localPng,
        layout: localJson,
      });

      await shellCommand(target, "rm -f " + shellQuote(remotePng) + " " + shellQuote(remoteJson), 15000);
    } finally {
      inFlight -= 1;
    }
  };

  let timer: ReturnType<typeof setTimeout>;
  const result = await new Promise<VisualGoldenResult>((resolve, reject) => {
    timer = setTimeout(() => {
      failure = failure ?? new Error("超时未捕获到任何 " + marker + " marker(" + timeoutMs + "ms)");
      finish();
    }, timeoutMs);

    const settle = (): void => {
      if (captures.length >= count || (streamEnded && inFlight === 0)) finish();
      if (!finished) return;
      if (failure) {
        if (captures.length === 0) reject(failure);
        else resolve({ target, marker, stagingDir, outDir, captures, timedOut: true });
        return;
      }
      if (captures.length === 0) {
        reject(new Error("HiLog 流已结束且未捕获到任何 " + marker + " marker"));
        return;
      }
      resolve({ target, marker, stagingDir, outDir, captures, timedOut: false });
    };

    stream.onLine((line) => {
      if (finished) return;
      let payload: VisualMarkerPayload | null;
      try {
        payload = parseVisualMarkerLine(line, marker);
      } catch (error) {
        failure = error instanceof Error ? error : new Error(String(error));
        finish();
        settle();
        return;
      }
      if (!payload || captures.length >= count) return;
      captureOne(payload)
        .catch((error) => { failure = error instanceof Error ? error : new Error(String(error)); })
        .finally(() => settle());
    });

    stream.onEnd(() => {
      streamEnded = true;
      settle();
    });
  });

  if (result.captures.some((capture) => capture.missingAnchors.length > 0)) {
    const drifted = result.captures.filter((capture) => capture.missingAnchors.length > 0)
      .map((capture) => capture.name + " 缺锚点 " + capture.missingAnchors.join(",")).join("; ");
    throw new Error("捕获窗口内界面已漂移(布局树校验失败): " + drifted + "；产物: " + outDir);
  }
  return result;
}

export { tail };
