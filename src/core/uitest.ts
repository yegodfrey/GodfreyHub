import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { toolchain } from "./paths.js";
import { run, requireOk, sleep } from "./proc.js";
import { onlineTargets, onlineAllTargets } from "./emulator.js";
export { onlineTargets, onlineAllTargets };

// 设备 UI 自动化: hdc shell uitest 封装
//   dumpLayout  -> 设备生成 JSON 布局树, recv 回本地解析
//   uiInput     -> click / inputText / swipe / keyEvent
//   snapshot_display -> 截屏
//
// 错误契约: hdc 便捷封装绝不吞退出码。宿主侧失败(设备离线/超时/取消)由 requireOk
// 统一抛错; 设备侧失败(uitest 输出 [Fail] 标记)同样抛错——verify 视觉校验循环依赖
// "失败即异常"才能把该步判为 failed, 任何"失败当成功"都会让校验基于错误观察继续。

function hdcArgs(target: string | undefined, shellCmd: string): string[] {
  return target ? ["-t", target, "shell", shellCmd] : ["shell", shellCmd];
}

export function shellQuote(value: string): string {
  return "'" + value.replace(/'/g, "'\\''") + "'";
}

export function resolveLocalOutputPath(value: string): string {
  const candidate = value.trim();
  if (!candidate) throw new Error("本地输出路径不能为空");
  return /^[A-Za-z]:[\\/]/.test(candidate)
    ? path.win32.normalize(candidate)
    : path.resolve(candidate);
}

/**
 * 解析操作目标: 显式指定优先; 未指定时唯一在线设备自动选中, 多台在线则拒绝——
 * UI 自动化打错设备比报错严重得多(误点击/误输入到无关设备)。与 uninstallApp
 * 的多设备显式 target 契约一致。
 */
export async function resolveTarget(explicit: string | undefined): Promise<string> {
  if (explicit) return explicit;
  const targets = await onlineAllTargets();
  if (targets.length === 0) throw new Error("没有在线设备");
  if (targets.length > 1) {
    throw new Error("多台设备在线(" + targets.join(", ") + "), 必须显式指定 target");
  }
  return targets[0];
}

/** 历史兼容别名: 第一台在线设备(仅限调用方已确认"任意设备皆可"的场景)。 */
export async function firstTarget(): Promise<string | undefined> {
  const list = await onlineAllTargets();
  return list[0];
}

// uitest/hdc 的设备侧失败标记: 输出含 [Fail] 即命令未生效, 与宿主侧退出码互补。
function assertNoDeviceFailure(out: string): void {
  if (/\[Fail\]/i.test(out)) throw new Error("设备侧命令失败: " + out.trim().slice(0, 300));
}

export async function shell(target: string | undefined, cmd: string, timeoutMs = 30000): Promise<string> {
  const tc = toolchain();
  const r = requireOk(cmd.split(/\s+/)[0] + " shell", await run(tc.hdc, hdcArgs(target, cmd), { timeoutMs }));
  assertNoDeviceFailure(r.out);
  return r.out.trim();
}

// ---------------------------------------------------------------- UI 树

export interface UiLayoutState {
  locked: boolean;
  width: number;
  height: number;
}

export function analyzeUiLayout(raw: any): UiLayoutState {
  const roots = Array.isArray(raw) ? raw : [raw];
  let locked = false;
  const visit = (node: any): void => {
    const attrs = node?.attributes ?? {};
    if (attrs.id === "ScreenLockRootComponent" || attrs.key === "ScreenLockRootComponent") locked = true;
    for (const child of (Array.isArray(node?.children) ? node.children : [])) visit(child);
  };
  for (const root of roots) visit(root);

  const bounds = String(roots[0]?.attributes?.bounds ?? "");
  const match = bounds.match(/^\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]$/);
  return {
    locked,
    width: match ? Math.max(0, Number(match[3]) - Number(match[1])) : 0,
    height: match ? Math.max(0, Number(match[4]) - Number(match[2])) : 0,
  };
}

export async function dumpUiTree(opts: { target?: string; mode?: "simple" | "full"; saveTo?: string } = {}): Promise<{ file?: string; summary: string; nodes: number; locked: boolean; width: number; height: number }> {
  const target = await resolveTarget(opts.target);
  const out = await shell(target, "uitest dumpLayout", 60000);
  // 输出形如: "The layout has been dumped to /data/local/tmp/layout_<hash>.json" 或 dump 路径
  const m = out.match(/(\/[\w\/.-]*layout[\w\/.-]*\.json)/i) ?? out.match(/(\/[\w\/.-]+\.json)/i);
  if (!m) throw new Error("dumpLayout 未返回文件路径: " + out);
  const remote = m[1];
  const local = resolveLocalOutputPath(
    opts.saveTo ?? path.join(os.tmpdir(), "godfreyhub", path.basename(remote)),
  );
  fs.mkdirSync(path.dirname(local), { recursive: true });
  const tc = toolchain();
  const recv = requireOk("hdc file recv", await run(tc.hdc, ["-t", target, "file", "recv", remote, local], { timeoutMs: 30000 }));
  if (!fs.existsSync(local)) throw new Error("接收布局文件失败: " + recv.out);
  // 设备端临时布局文件用后即删: 每次 dump 上百 KB, 累积会占满 /data/local/tmp。
  await shell(target, "rm -f " + shellQuote(remote)).catch(() => { /* 清理失败不影响结果 */ });
  const raw = JSON.parse(fs.readFileSync(local, "utf8"));
  const count = (n: any): number => Array.isArray(n?.children) ? 1 + n.children.reduce((a: number, c: any) => a + count(c), 0) : 1;
  const attrs = (n: any): string => {
    const key = n.attributes ?? {};
    return [key.type, key.text, key.id ?? key.identifier].filter(Boolean).join(" ");
  };
  const lines: string[] = [];
  const walk = (n: any, depth: number) => {
    if (lines.length >= 300) return;
    lines.push("  ".repeat(depth) + attrs(n));
    for (const c of (Array.isArray(n.children) ? n.children : [])) walk(c, depth + 1);
  };
  const roots = Array.isArray(raw) ? raw : [raw];
  for (const root of roots) walk(root, 0);
  const state = analyzeUiLayout(raw);
  return { file: local, summary: lines.join("\n"), nodes: roots.reduce((a: number, r: any) => a + count(r), 0), ...state };
}

// ---------------------------------------------------------------- UI 操作

export async function uiClick(x: number, y: number, target?: string): Promise<string> {
  return shell(await resolveTarget(target), `uitest uiInput click ${x} ${y}`);
}

export async function uiInputText(x: number, y: number, text: string, target?: string): Promise<string> {
  return shell(await resolveTarget(target), `uitest uiInput inputText ${x} ${y} ${shellQuote(text)}`);
}

export async function uiSwipe(x1: number, y1: number, x2: number, y2: number, speed = 1000, target?: string): Promise<string> {
  return shell(await resolveTarget(target), `uitest uiInput swipe ${x1} ${y1} ${x2} ${y2} ${speed}`);
}

export async function uiKey(keyCode: number, target?: string): Promise<string> {
  return shell(await resolveTarget(target), `uitest uiInput keyEvent ${keyCode}`);
}

export interface DeviceUnlockResult {
  wasLocked: boolean;
  unlocked: boolean;
  attempts: number;
}

interface DeviceUnlockDeps {
  probe?: (target: string) => Promise<UiLayoutState>;
  swipe?: typeof uiSwipe;
  wait?: (milliseconds: number) => Promise<void>;
  maxAttempts?: number;
}

export async function ensureDeviceUnlocked(target: string, deps: DeviceUnlockDeps = {}): Promise<DeviceUnlockResult> {
  const probe = deps.probe ?? (async (selected: string): Promise<UiLayoutState> => {
    const tree = await dumpUiTree({ target: selected });
    return { locked: tree.locked, width: tree.width, height: tree.height };
  });
  const swipe = deps.swipe ?? uiSwipe;
  const wait = deps.wait ?? sleep;
  let state = await probe(target);
  if (!state.locked) return { wasLocked: false, unlocked: true, attempts: 0 };

  const attempts = deps.maxAttempts ?? 2;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const width = state.width > 0 ? state.width : 1080;
    const height = state.height > 0 ? state.height : 1920;
    const x = Math.round(width * 0.5);
    await swipe(x, Math.round(height * 0.8), x, Math.round(height * 0.2), 800, target);
    await wait(1000);
    state = await probe(target);
    if (!state.locked) return { wasLocked: true, unlocked: true, attempts: attempt };
  }
  throw new Error("设备仍处于锁屏状态，无法运行 Instrument Test: " + target);
}

// ---------------------------------------------------------------- 截屏

export async function screenshot(savePath: string, target?: string): Promise<string> {
  const t = await resolveTarget(target);
  const local = resolveLocalOutputPath(savePath);
  const remote = "/data/local/tmp/gh_shot_" + Date.now() + ".jpeg";
  await shell(t, `snapshot_display -f ${remote}`, 30000);
  const tc = toolchain();
  fs.mkdirSync(path.dirname(local), { recursive: true });
  const recv = requireOk("hdc file recv", await run(tc.hdc, ["-t", t, "file", "recv", remote, local], { timeoutMs: 30000 }));
  await shell(t, `rm -f ${remote}`).catch(() => { /* 清理失败不影响结果 */ });
  if (!fs.existsSync(local)) throw new Error("截屏接收失败: " + recv.out);
  return local;
}

// ---------------------------------------------------------------- 应用启停

export async function startAbility(bundle: string, ability: string, target?: string): Promise<string> {
  return shell(await resolveTarget(target), `aa start -b ${shellQuote(bundle)} -a ${shellQuote(ability)}`, 60000);
}

export async function stopAbility(bundle: string, target?: string): Promise<string> {
  return shell(await resolveTarget(target), `aa force-stop ${shellQuote(bundle)}`, 30000);
}

export function buildUninstallArgs(bundle: string, target?: string, keepData = false): string[] {
  const args = target ? ["-t", target] : [];
  args.push("uninstall", "-n", bundle);
  if (keepData) args.push("-k");
  return args;
}

export async function uninstallApp(
  bundle: string,
  target?: string,
  keepData = false,
): Promise<{ ok: boolean; target: string; out: string }> {
  if (!bundle.trim()) throw new Error("bundle 不能为空");
  const selected = await resolveTarget(target);
  const tc = toolchain();
  const result = requireOk("hdc uninstall", await run(tc.hdc, buildUninstallArgs(bundle.trim(), selected, keepData), { timeoutMs: 120000 }));
  return { ok: true, target: selected, out: result.out.trim() };
}
