#!/usr/bin/env node
// ui-monkey — L7 探索层原语: 随机游走 + 页面级不变量(seed 可复现, journal 可重放)。
//
// 广度是状态空间枚举, 深度是对每个状态的审讯强度; monkey 负责"找新 bug", 命中后
// 按公理结晶为 L1–L4 永久 spec 条目——探索层负责发现, 声明式契约负责记住。
//
// 每步: uitest dumpLayout -> 页面分类(身份锚点) -> 不变量断言 -> 伪随机动作
//       (优先带语义 id 的可点节点; 免疫清单禁止点击) -> journal 落盘。
// 不变量:
//   全局  被测进程存活(pidof; 覆盖 crash/白屏退出类)
//   页面  已声明页面必须有身份锚点(分类不出 = 白屏/未知页), 且注册锚点全部在场
// 可复现: 全部随机决策来自单一 mulberry32 PRNG; journal 逐步记录动作与抽取值,
//         --replay <journal.jsonl> 按记录动作原样重放(修复后复验)。
// 证据: 违例发生时保留当帧 layout + snapshot_display 截屏, 供晋升为永久契约。
//
// 用法:
//   node ui-monkey.mjs --pages Clash-pages.json --bundle com.clash.app \
//        --steps 120 --seed 1750000000000 --out artifacts/monkey
//   node ui-monkey.mjs --pages Clash-pages.json --bundle com.clash.app \
//        --replay artifacts/monkey/journal.jsonl --out artifacts/monkey-replay
// 退出码: 0 = 走完全程无违例; 1 = 不变量违例(证据在 --out); 2 = 用法/基建错误。

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------- 参数

export function parseArgs(argv) {
  const args = {
    pages: null, bundle: null, steps: 100, seed: null, out: null,
    target: null, replay: null, settleMs: 1200, maxUnknownSteps: 12,
    swipeProbability: 0.15, backProbability: 0.1,
  };
  for (let i = 0; i < argv.length; i++) {
    const value = argv[i + 1];
    switch (argv[i]) {
      case "--pages": args.pages = value; i++; break;
      case "--bundle": args.bundle = value; i++; break;
      case "--steps": args.steps = Number(value); i++; break;
      case "--seed": args.seed = Number(value); i++; break;
      case "--out": args.out = value; i++; break;
      case "--target": args.target = value; i++; break;
      case "--replay": args.replay = value; i++; break;
      case "--settle-ms": args.settleMs = Number(value); i++; break;
      case "--max-unknown-steps": args.maxUnknownSteps = Number(value); i++; break;
      default: throw new Error(`ui-monkey: unknown argument '${argv[i]}'`);
    }
  }
  if (!args.pages) throw new Error("ui-monkey: --pages <pages.json> 必填");
  if (!args.bundle) throw new Error("ui-monkey: --bundle <bundleName> 必填");
  if (!args.replay && (!Number.isInteger(args.steps) || args.steps <= 0)) {
    throw new Error("ui-monkey: --steps 必须是正整数");
  }
  if (args.seed === null) args.seed = Date.now();
  if (!Number.isFinite(args.seed)) throw new Error("ui-monkey: --seed 必须是数字");
  if (!args.out) {
    args.out = path.join(os.tmpdir(), "godfreyhub", "monkey", String(args.seed));
  }
  return args;
}

function resolveHdc() {
  const provided = process.env.GF_GODFREYHUB_HDC;
  if (provided && fs.existsSync(provided)) return provided;
  return "hdc";
}

// ---------------------------------------------------------------- 页面注册表

// 注册表即契约(与 gfParseUiInteractionRegistry 同口径): 解析器就是格式定义,
// 任何缺字段/坏形状在启动时失败, 不做静默容错。
export function loadPageRegistry(file) {
  const raw = JSON.parse(fs.readFileSync(file, "utf8"));
  if (raw.schemaVersion !== 1) {
    throw new Error(`ui-monkey: ${file} schemaVersion 必须是 1`);
  }
  if (typeof raw.app !== "string" || raw.app.length === 0) {
    throw new Error(`ui-monkey: ${file} 必须声明 app`);
  }
  const pages = raw.pages ?? [];
  if (!Array.isArray(pages) || pages.length === 0) {
    throw new Error(`ui-monkey: ${file} 必须声明非空 pages 数组`);
  }
  const seen = new Set();
  for (const page of pages) {
    if (typeof page.id !== "string" || page.id.length === 0) {
      throw new Error(`ui-monkey: ${file} 页面缺少 id: ${JSON.stringify(page)}`);
    }
    // 身份两种形态: identityAnchor(锚点在场即该页) 或
    // identitySelectedAnchor(锚点在场且 selected=true, 用于导航 tab 页)。
    const hasPresence = typeof page.identityAnchor === "string" && page.identityAnchor.length > 0;
    const hasSelected = typeof page.identitySelectedAnchor === "string" &&
      page.identitySelectedAnchor.length > 0;
    if (!hasPresence && !hasSelected) {
      throw new Error(`ui-monkey: ${file} 页面 '${page.id}' 缺少 identityAnchor/identitySelectedAnchor`);
    }
    if (seen.has(page.id)) throw new Error(`ui-monkey: ${file} 页面 id 重复: ${page.id}`);
    seen.add(page.id);
    if (page.anchors !== undefined && !Array.isArray(page.anchors)) {
      throw new Error(`ui-monkey: ${file} 页面 '${page.id}' 的 anchors 必须是数组`);
    }
  }
  const excluded = Array.isArray(raw.excludedAnchors) ? raw.excludedAnchors : [];
  return {
    app: String(raw.app),
    pages,
    excludedAnchors: new Set(excluded.filter((entry) => !entry.endsWith(".*"))),
    excludedPatterns: excluded.filter((entry) => entry.endsWith(".*")).map((entry) => entry.slice(0, -1)),
  };
}

// ---------------------------------------------------------------- PRNG

// mulberry32: 确定性 32bit PRNG; journal 逐步记录抽取值, replay 不依赖算法稳定性。
export function mulberry32(seed) {
  let state = seed >>> 0;
  return function next() {
    state = (state + 0x6D2B79F5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------- 设备访问

class Device {
  constructor(hdc, target) {
    this.hdc = hdc;
    this.target = target;
  }

  shell(cmd, timeoutMs = 30000) {
    const args = this.target ? ["-t", this.target, "shell", cmd] : ["shell", cmd];
    return execFileSync(this.hdc, args, { encoding: "utf8", timeout: timeoutMs, windowsHide: true });
  }

  shellLines(cmd, timeoutMs = 30000) {
    try {
      return this.shell(cmd, timeoutMs).split(/\r?\n/);
    } catch (error) {
      return [];
    }
  }

  dumpLayout(outFile) {
    // -a = 默认属性 + extraAttrs 超集(官方 arkxtest 文档); nav selected 是否
    // 随属性集输出无法离线确认, 取超集并配合 main 里的启动探测, 缺失即硬失败。
    let lastError = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const out = this.shell("uitest dumpLayout -a", 60000);
        const match = out.match(/(\/[\w/.-]*layout[\w/.-]*\.json)/i) ?? out.match(/(\/[\w/.-]+\.json)/i);
        if (!match) throw new Error("dumpLayout 未返回文件路径: " + out.trim());
        execFileSync(this.hdc, this.target ? ["-t", this.target, "file", "recv", match[1], outFile]
          : ["file", "recv", match[1], outFile], { encoding: "utf8", timeout: 30000, windowsHide: true });
        const raw = JSON.parse(fs.readFileSync(outFile, "utf8"));
        this.shell(`rm -f '${match[1]}'`, 15000);
        return raw;
      } catch (error) {
        lastError = error;
        // 动画/窗口切换期间的瞬时失败不值得终结整个探索: 有界重试后再判违例。
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 400 * attempt);
      }
    }
    throw lastError;
  }

  screenshot(outFile) {
    const remote = `/data/local/tmp/gfmonkey_${Date.now()}.jpeg`;
    this.shell(`snapshot_display -f ${remote}`, 30000);
    execFileSync(this.hdc, this.target ? ["-t", this.target, "file", "recv", remote, outFile]
      : ["file", "recv", remote, outFile], { encoding: "utf8", timeout: 30000, windowsHide: true });
    this.shell(`rm -f ${remote}`, 15000);
  }

  processAlive(bundle) {
    const out = this.shell(`pidof '${bundle.replace(/'/g, "'\\''")}'`, 15000).trim();
    return out.length > 0 && /\d/.test(out);
  }

  click(x, y) { this.shell(`uitest uiInput click ${Math.round(x)} ${Math.round(y)}`); }
  swipe(x1, y1, x2, y2, speed) {
    this.shell(`uitest uiInput swipe ${Math.round(x1)} ${Math.round(y1)} ${Math.round(x2)} ${Math.round(y2)} ${speed}`);
  }
  back() { this.shell("uitest uiInput keyEvent 2"); } // KEYCODE_BACK
}

// ---------------------------------------------------------------- 布局解析

export function parseBounds(text) {
  if (typeof text !== "string") return null;
  const match = text.match(/^\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]$/);
  if (!match) return null;
  const [l, t, r, b] = match.slice(1).map(Number);
  return { left: l, top: t, right: r, bottom: b };
}

function isTruthyFlag(value) {
  return value === true || value === "true" || value === 1 || value === "1";
}

// 收集可点节点(带语义 id 优先)、全部语义 id 及其 selected 状态、根 bundleName;
// bounds 以首现为准。
export function analyzeLayout(raw) {
  const clickables = [];
  const ids = new Set();
  const selectedById = new Map();
  const viewport = parseBounds(raw?.[0]?.attributes?.bounds ?? raw?.attributes?.bounds) ?? null;
  // 官方 FAQ: dumpLayout 根节点 attributes 携带 abilityName/bundleName/PagePath,
  // 可作为"前台是否仍是被测应用"的证据; 拿不到(旧镜像/格式差异)时该不变量退化跳过。
  const roots = Array.isArray(raw) ? raw : [raw];
  const foregroundBundle = typeof roots[0]?.attributes?.bundleName === "string"
    ? roots[0].attributes.bundleName.trim() : "";
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    const attrs = node.attributes ?? {};
    const id = typeof attrs.id === "string" && attrs.id.length > 0 ? attrs.id
      : (typeof attrs.identifier === "string" ? attrs.identifier : "");
    if (id.length > 0) {
      ids.add(id);
      if (!selectedById.has(id)) selectedById.set(id, isTruthyFlag(attrs.selected));
    }
    const bounds = parseBounds(attrs.bounds);
    if (isTruthyFlag(attrs.clickable) && bounds && bounds.right > bounds.left && bounds.bottom > bounds.top) {
      // 视口裁剪: 完全离屏的节点不可点, 不进入动作池。
      const onScreen = !viewport ||
        (bounds.bottom > viewport.top && bounds.top < viewport.bottom &&
          bounds.right > viewport.left && bounds.left < viewport.right);
      if (onScreen) {
        clickables.push({
          id, bounds,
          cx: (bounds.left + bounds.right) / 2,
          cy: (bounds.top + bounds.bottom) / 2,
          area: (bounds.right - bounds.left) * (bounds.bottom - bounds.top),
        });
      }
    }
    if (Array.isArray(node.children)) for (const child of node.children) visit(child);
  };
  for (const root of roots) visit(root);
  return { clickables, ids, selectedById, foregroundBundle, viewport };
}

// ---------------------------------------------------------------- 主流程

export function main(argv) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 2;
  }

  let registry;
  try {
    registry = loadPageRegistry(args.pages);
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 2;
  }

  const hdc = resolveHdc();
  let device;
  try {
    device = new Device(hdc, args.target);
  } catch (error) {
    process.stderr.write(`ui-monkey: ${error.message}\n`);
    return 2;
  }

  const outDir = path.resolve(args.out);
  fs.mkdirSync(outDir, { recursive: true });
  const journalPath = args.replay
    ? path.join(outDir, "replay-journal.jsonl")
    : path.join(outDir, "journal.jsonl");
  const violationsPath = path.join(outDir, "violations.json");
  const violations = [];
  const appendJournal = (entry) => fs.appendFileSync(journalPath, JSON.stringify(entry) + "\n");
  let replaySteps = null;
  if (args.replay) {
    replaySteps = fs.readFileSync(args.replay, "utf8").split(/\r?\n/)
      .filter((line) => line.trim().length > 0)
      .map((line) => JSON.parse(line))
      .filter((entry) => entry.kind === "action");
  }

  const rng = mulberry32(args.seed);
  let unknownSteps = 0;
  let pageCache = null;

  const classifyPage = (layout) => {
    const { ids, selectedById } = layout;
    for (const page of registry.pages) {
      if (page.identitySelectedAnchor !== undefined) {
        // tab 页身份: 锚点在场且 selected=true(与家族导航 selected 翻转契约同源)。
        if (ids.has(page.identitySelectedAnchor) && selectedById.get(page.identitySelectedAnchor) === true) {
          return page;
        }
      } else if (ids.has(page.identityAnchor)) {
        return page;
      }
    }
    return null;
  };

  const assertInvariants = (step, layout, layoutFile) => {
    const { ids } = layout;
    if (!device.processAlive(args.bundle)) {
      return `进程已退出(崩/退/被杀): pidof '${args.bundle}' 为空`;
    }
    // 前台身份(官方 FAQ: 根节点 attributes.bundleName): 走出被测应用(误触跳转/
    // 崩溃回桌面)不算"正常探索"; 根节点拿不到 bundleName 时该检查按不可用跳过。
    if (layout.foregroundBundle && layout.foregroundBundle !== args.bundle) {
      return `前台不是被测应用: 布局树根 bundleName='${layout.foregroundBundle}', 期望 '${args.bundle}'`;
    }
    const page = classifyPage(layout);
    pageCache = page;
    if (!page) {
      unknownSteps += 1;
      if (unknownSteps > args.maxUnknownSteps) {
        const registered = registry.pages
          .map((p) => p.identityAnchor !== undefined
            ? `${p.id}#${p.identityAnchor}`
            : `${p.id}#selected:${p.identitySelectedAnchor}`)
          .join(", ");
        return `连续 ${unknownSteps} 步无法按身份锚点分类页面(白屏/未注册页面/系统页): ` +
          `已注册身份锚点: ${registered}`;
      }
      return null;
    }
    unknownSteps = 0;
    const missing = (page.anchors ?? []).filter((anchor) => !ids.has(anchor));
    if (missing.length > 0) {
      return `页面 '${page.id}' 锚点缺失: ${missing.join(", ")}(布局树: ${layoutFile})`;
    }
    return null;
  };

  const recordViolation = (step, violation, layoutFile) => {
    const shot = path.join(outDir, `violation-${String(step).padStart(4, "0")}.jpeg`);
    try { device.screenshot(shot); } catch { /* 截图失败不掩盖违例本身 */ }
    violations.push({ step, violation, layout: layoutFile, screenshot: shot, seed: args.seed });
    appendJournal({ kind: "violation", step, violation, seed: args.seed });
  };

  fs.writeFileSync(journalPath, JSON.stringify({
    kind: "start", seed: args.seed, bundle: args.bundle, pages: args.pages,
    steps: replaySteps ? replaySteps.length : args.steps, replay: Boolean(args.replay),
    startedAt: new Date().toISOString(),
  }) + "\n");

  const totalSteps = replaySteps ? replaySteps.length : args.steps;
  let layoutFile = path.join(outDir, "layout.json");
  let selectedCapabilityChecked = false;
  for (let step = 1; step <= totalSteps; step++) {
    let layout;
    try {
      layout = analyzeLayout(device.dumpLayout(layoutFile));
    } catch (error) {
      recordViolation(step, `dumpLayout 失败: ${error.message}`, layoutFile);
      break;
    }

    // selected 能力探测(仅首步): 注册表声明了 nav selected 身份, 但本镜像的
    // dumpLayout 从不输出 selected=true 属性时, tab 页永远无法分类——与其每晚
    // "无法分类"假违例, 不如启动即硬失败并给出可操作出路。首屏未必稳定: 首启
    // 浮层收起的过渡帧或应用冷启动首帧都可能尚未渲染导航选中态, 因此允许一次
    // 有界重探, 仍无 selected=true 才定性为镜像能力缺失。
    if (!selectedCapabilityChecked) {
      selectedCapabilityChecked = true;
      const needsSelected = registry.pages.some((page) => page.identitySelectedAnchor !== undefined);
      let sawSelectedTrue = [...layout.selectedById.values()].includes(true);
      if (needsSelected && !sawSelectedTrue) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, Math.max(args.settleMs, 1500));
        try {
          const retried = analyzeLayout(device.dumpLayout(layoutFile));
          sawSelectedTrue = [...retried.selectedById.values()].includes(true);
        } catch { /* 重探失败按无 selected 定性 */ }
      }
      if (needsSelected && !sawSelectedTrue) {
        process.stderr.write(
          "ui-monkey: 注册表声明了 identitySelectedAnchor, 但本镜像 dumpLayout 首屏(含一次重探)未输出任何 selected=true 属性\n" +
          "  (确认已用 dumpLayout -a; 若镜像不导出 selected, 改用 identityAnchor 内容身份)。\n");
        return 2;
      }
    }

    const violation = assertInvariants(step, layout, layoutFile);
    if (violation) {
      recordViolation(step, violation, layoutFile);
      break;
    }

    // ---- 动作决策(确定性: 全部抽取值来自 rng 并逐步入 journal)
    let action;
    if (replaySteps) {
      action = replaySteps[step - 1].action;
    } else {
      const roll = rng();
      if (roll < args.backProbability) {
        action = { type: "back" };
      } else if (roll < args.backProbability + args.swipeProbability) {
        const view = layout.viewport ?? { left: 0, top: 0, right: 1080, bottom: 2400 };
        const w = view.right - view.left;
        const h = view.bottom - view.top;
        const vertical = rng() < 0.7;
        action = vertical
          ? { type: "swipe", x1: view.left + w / 2, y1: view.top + h * 0.7, x2: view.left + w / 2, y2: view.top + h * 0.3, speed: 600 }
          : { type: "swipe", x1: view.left + w * 0.8, y1: view.top + h / 2, x2: view.left + w * 0.2, y2: view.top + h / 2, speed: 600 };
      } else {
        // 免疫匹配: 精确 id + '.*' 前缀模式(与交互注册表的动态条目语义一致)。
        const isExcluded = (id) => {
          if (registry.excludedAnchors.has(id)) return true;
          for (const prefix of registry.excludedPatterns) {
            if (id.startsWith(prefix)) return true;
          }
          return false;
        };
        const eligible = layout.clickables.filter((node) =>
          !isExcluded(node.id) &&
          (node.bounds.bottom - node.bounds.top) * (node.bounds.right - node.bounds.left) >= 16);
        const withId = eligible.filter((node) => node.id.length > 0);
        // 70% 优先带语义 id 的契约节点; 30% 在全部可点节点里探索(含无 id 节点)。
        const pool = (rng() < 0.7 && withId.length > 0) ? withId : eligible;
        if (pool.length === 0) {
          action = { type: "noop" };
        } else {
          const node = pool[Math.floor(rng() * pool.length) % pool.length];
          action = { type: "click", x: node.cx, y: node.cy, id: node.id };
        }
      }
    }

    appendJournal({ kind: "action", step, page: pageCache ? pageCache.id : null, action });

    try {
      if (action.type === "click") device.click(action.x, action.y);
      else if (action.type === "swipe") device.swipe(action.x1, action.y1, action.x2, action.y2, action.speed ?? 600);
      else if (action.type === "back") device.back();
    } catch (error) {
      recordViolation(step, `动作执行失败: ${error.message}`, layoutFile);
      break;
    }
    // 同步循环内的可中断等待(SharedArrayBuffer + Atomics), 等界面稳定后再采下一帧。
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, args.settleMs);
  }

  fs.writeFileSync(violationsPath, JSON.stringify({
    seed: args.seed, bundle: args.bundle, steps: totalSteps,
    violations, journal: journalPath,
    promotion: "每个违例按公理结晶为一条 L1–L4 永久 spec 条目后, 用 --replay journal.jsonl 复验。",
  }, null, 2) + "\n");

  const summary = `ui-monkey: seed=${args.seed} steps=${totalSteps} violations=${violations.length} ` +
    `journal=${journalPath}`;
  process.stdout.write(summary + "\n");
  return violations.length > 0 ? 1 : 0;
}

const invokedDirectly = process.argv[1] !== undefined &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (invokedDirectly) {
  process.exit(main(process.argv.slice(2)));
}
