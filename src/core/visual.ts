import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import { diffStructuralLayout, declaredSpecAnchors, parseStructuralEquivalence } from "./structural-diff.js";

interface Bounds { left: number; top: number; right: number; bottom: number }
interface Pixel { r: number; g: number; b: number; a: number }

interface VisualIssue {
  id: string;
  message: string;
}

/**
 * 测量值上报(D-1/拍板项三的配套面, 2026-09-21): 比较器对每一份声明的证据记下
 * "量到了什么", 无论该证据本轮是否参与计分——为判定相的离线可评铺路
 * (变体"基线必须同场采到"的机制目前只覆盖布局树与主题配对, 字体等轴先有测量值可查)。
 * scored=false 的条目不进 checks/passed, 绝不以"量过"冒充"判过"。
 */
export interface VisualMeasurement {
  id: string;
  kind: "dark-render" | "theme-delta" | "structural-equivalence";
  /** true = 该条证据以成对事实进入了位移判定计分; false = 仅测量(退役探针/未配对或
   *  采样失败的锚), 绝不以"量过"冒充"判过"。 */
  scored: boolean;
  values: Record<string, number | string>;
  note?: string;
}

export interface VisualCompareResult {
  status: "passed" | "failed";
  summary: {
    checks: number;
    passed: number;
    failed: number;
    mismatchRatio?: number;
    /**
     * D-1 dark 轴时序门(2026-09-21, OPEN_ITEMS_LEDGER §E-7/死规则② 的比较器侧落地):
     * 主题维度计分的显式状态。scored=themeDeltas 已声明且同场浅色基线在场, 位移判定
     * 真跑了; unpaired=声明了 themeDeltas 但没拿到基线(theme-baseline-missing 红);
     * notDeclared=spec 未声明 themeDeltas, 主题维度本轮**不参与计分**——宁可明说
     * "没判", 不拿退役探针/无阈值身份重记一遍假绿。
     */
    themeAxis: "scored" | "unpaired" | "notDeclared";
  };
  issues: VisualIssue[];
  measurements: VisualMeasurement[];
  reportJson: string;
  reportMarkdown: string;
}

function readJson(file: string): any {
  return JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
}

/**
 * 读取并解析比较用 PNG。截断/损坏的采集帧（典型： uitest 仍在写时 host 已 recv，
 * nightly 实测 "There are some read requests waitng on finished stream"）此前以
 * pngjs 内部栈崩出，编排侧只能看到裸 exit=1；这里换成可归因的具名错误。
 */
function readPngFile(file: string): PNG {
  const buffer = fs.readFileSync(file);
  try {
    return PNG.sync.read(buffer);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`visual capture unreadable (truncated or corrupt PNG): ${file}: ${detail}`);
  }
}

function parseBounds(value: unknown): Bounds | null {
  if (typeof value !== "string") return null;
  const match = value.match(/^\[(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)\]\[(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)\]$/);
  if (!match) return null;
  return { left: Number(match[1]), top: Number(match[2]), right: Number(match[3]), bottom: Number(match[4]) };
}

function walkNodes(node: any, out: any[]): void {
  if (!node || typeof node !== "object") return;
  out.push(node);
  const children = Array.isArray(node.children) ? node.children : [];
  for (const child of children) walkNodes(child, out);
}

function findLayoutNode(layout: any, id: string, exact: boolean): any | null {
  const nodes: any[] = [];
  walkNodes(layout, nodes);
  const matches = nodes.filter((node) => {
    const value = String(node?.attributes?.id ?? node?.id ?? "");
    return exact ? value === id : value.includes(id);
  });
  if (matches.length !== 1) return null;
  return matches[0];
}

function layoutContainmentCheck(layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const nodeId = String(match.id ?? "");
  const node = findLayoutNode(layout, nodeId, match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + nodeId;
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + nodeId;
  const viewport = parseBounds(layout?.attributes?.bounds ?? layout?.bounds);
  if (!viewport) return "visual checkpoint has invalid viewport bounds";

  const inset = Math.max(0, Number(rule.inset ?? 0));
  const tolerance = Math.max(0, Number(rule.tolerance ?? 0));
  const contained = bounds.left >= viewport.left + inset - tolerance &&
    bounds.top >= viewport.top + inset - tolerance &&
    bounds.right <= viewport.right - inset + tolerance &&
    bounds.bottom <= viewport.bottom - inset + tolerance;
  if (!contained) {
    return `bounds [${bounds.left},${bounds.top}][${bounds.right},${bounds.bottom}] leave viewport ` +
      `[${viewport.left},${viewport.top}][${viewport.right},${viewport.bottom}] (inset ${inset})`;
  }

  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const viewportWidth = viewport.right - viewport.left;
  const viewportHeight = viewport.bottom - viewport.top;
  const minWidth = Math.max(Number(rule.minWidth ?? 0), viewportWidth * Number(rule.minWidthRatio ?? 0));
  const minHeight = Math.max(Number(rule.minHeight ?? 0), viewportHeight * Number(rule.minHeightRatio ?? 0));
  if (width < minWidth) return `width ${width} is below required ${minWidth}`;
  if (height < minHeight) return `height ${height} is below required ${minHeight}`;
  return null;
}

/**
 * C15 整树包含探针（containmentProbes）——判据真源在 GFSoftware
 * `family/ui-dump-diagnostics.mjs` 的 R1（溢出窗口）/R2（溢出容器），与
 * family/runner/ui-audit.ps1 的 B04/B05 同解；本处是**执行面副本，同步自该真源**
 * （Hub 测试必须 hermetic，跨仓 import 不可行，见 AGENTS.md；两仓各配 hermetic 钉防漂移：
 * GFSoftware 侧 family/tests/ui-dump-diagnostics.test.mjs 的 R1/R2 合成树夹具，本仓
 * tests/visual.test.mjs 的 containment 夹具几何与期望判定逐字对齐它，注释互指——单边改判据
 * 或改夹具即红）。判据语义（照抄真源，不自创第三份）：
 *   R1  溢出窗口：非根节点的 bounds 任一边越出根视口（B04）。
 *   R2  溢出容器：bounds 越出 **clip 祖先**的边界（B05）；溢出方向落在该祖先自身或它与
 *       节点之间的 scrollable 祖先链上时内容滚动即见（scroll-reachable），不算被裁丢。
 * 硬豁免（同真源具名类别）：根节点、bounds 缺失/非正面积（ArkUI 未挂载占位不构成被裁内容）、
 * visible=false、应用窗口之外的系统浮层（hostWindowId 按语义锚点最多的窗口归属）。
 * 事实判据零估宽误差："7天 chip 在 360vp 带：chip.right > popup.right"——直接比 bounds。
 */
interface ContainmentNode {
  index: number;
  parent: ContainmentNode | null;
  type: string;
  id: string;
  key: string;
  bounds: Bounds | null;
  boundsRaw: string;
  scrollable: boolean;
  clip: boolean;
  visible: boolean;
  windowId: string;
}

function containmentAsBool(value: unknown): boolean {
  return value === true || value === "true";
}

/** 真源 asBool 语义：只有 false/"false" 判不可见；"" / 缺失 = 未声明，不豁免。 */
function containmentExplicitlyInvisible(value: unknown): boolean {
  return value === false || value === "false";
}

function collectContainmentNodes(value: any, parent: ContainmentNode | null,
  out: ContainmentNode[]): void {
  if (!value || typeof value !== "object" || Array.isArray(value)) return;
  const attrs = (value.attributes !== null && typeof value.attributes === "object" &&
    !Array.isArray(value.attributes)) ? value.attributes : value;
  const node: ContainmentNode = {
    index: out.length,
    parent,
    type: String(attrs?.type ?? ""),
    id: String(attrs?.id ?? ""),
    key: String(attrs?.key ?? ""),
    bounds: parseBounds(attrs?.bounds ?? ""),
    boundsRaw: typeof attrs?.bounds === "string" ? attrs.bounds : "",
    scrollable: containmentAsBool(attrs?.scrollable),
    clip: containmentAsBool(attrs?.clip),
    visible: !containmentExplicitlyInvisible(attrs?.visible),
    windowId: String(attrs?.hostWindowId ?? ""),
  };
  out.push(node);
  const children = Array.isArray(value.children) ? value.children : [];
  for (const child of children) collectContainmentNodes(child, node, out);
}

function containmentLabel(node: ContainmentNode): string {
  const anchor = node.id !== "" ? node.id : node.key;
  return anchor !== "" ? anchor : `${node.type !== "" ? node.type : "node"}#${node.index}`;
}

/** 应用窗口归属：语义锚点最多的 hostWindowId 即应用窗口（ui-dump-diagnostics 同解）。 */
function deriveAppWindowId(nodes: ContainmentNode[]): string {
  const groups = new Map<string, { total: number; anchored: number }>();
  for (const node of nodes) {
    if (node.windowId === "") continue;
    const entry = groups.get(node.windowId) ?? { total: 0, anchored: 0 };
    entry.total += 1;
    if (node.id !== "" || node.key !== "") entry.anchored += 1;
    groups.set(node.windowId, entry);
  }
  let best = "";
  let bestKey: [number, number, string] | null = null;
  for (const [windowId, entry] of groups) {
    const key: [number, number, string] = [entry.anchored, entry.total, windowId];
    if (bestKey === null ||
        key[0] > bestKey[0] || (key[0] === bestKey[0] && key[1] > bestKey[1]) ||
        (key[0] === bestKey[0] && key[1] === bestKey[1] && key[2] < bestKey[2])) {
      best = windowId;
      bestKey = key;
    }
  }
  return best;
}

function containmentOverflows(node: Bounds, box: Bounds): [string, number][] {
  const sides: [string, number][] = [];
  if (node.left < box.left) sides.push(["left", box.left - node.left]);
  if (node.top < box.top) sides.push(["top", box.top - node.top]);
  if (node.right > box.right) sides.push(["right", node.right - box.right]);
  if (node.bottom > box.bottom) sides.push(["bottom", node.bottom - box.bottom]);
  return sides;
}

/** 溢出方向落在祖先自身或它与节点之间的 scrollable 链上时内容滚动即见（真源同解）。 */
function scrollReachable(node: ContainmentNode, ancestor: ContainmentNode): boolean {
  if (ancestor.scrollable) return true;
  for (let cursor: ContainmentNode | null = node.parent;
    cursor !== null && cursor !== ancestor; cursor = cursor.parent) {
    if (cursor.scrollable) return true;
  }
  return false;
}

/**
 * 整树包含扫描。返回 windowIssues（R1 溢出窗口）与 containerIssues（R2 溢出容器），
 * 每个元素一条 issue（message 带越界节点 id 与双方 bounds）；空数组 = 该扫描无可反驳的
 * 越界事实。声明了 containmentProbes 而根视口解析不了时抛错（与 layoutContainmentCheck
 * 的 "invalid viewport bounds" 同型）：静默跳过就是空探针封 passed 的形状。
 */
function containmentScanCheck(layout: any): { windowIssues: VisualIssue[]; containerIssues: VisualIssue[] } {
  const nodes: ContainmentNode[] = [];
  collectContainmentNodes(layout, null, nodes);
  if (nodes.length === 0) return { windowIssues: [], containerIssues: [] };
  const viewport = nodes[0]!.bounds;
  if (!viewport) throw new Error("visual checkpoint has invalid viewport bounds");
  const appWindowId = deriveAppWindowId(nodes);
  const inApp = (node: ContainmentNode): boolean =>
    node.windowId === "" || node.windowId === appWindowId;
  const windowIssues: VisualIssue[] = [];
  const containerIssues: VisualIssue[] = [];
  const rendered = (node: ContainmentNode): boolean =>
    node.bounds !== null && (node.bounds.right - node.bounds.left) > 0 &&
    (node.bounds.bottom - node.bounds.top) > 0 && node.visible;
  for (const node of nodes) {
    if (node.index === 0 || !rendered(node) || !inApp(node)) continue;
    const bounds = node.bounds!;
    const sides = containmentOverflows(bounds, viewport);
    if (sides.length > 0) {
      windowIssues.push({
        id: "",
        message: `node '${containmentLabel(node)}' bounds ${node.boundsRaw} leave viewport ` +
          `[${viewport.left},${viewport.top}][${viewport.right},${viewport.bottom}] ` +
          `(sides: ${sides.map(([side, px]) => `${side}=${px}px`).join(", ")})`,
      });
    }
    for (let cursor = node.parent; cursor !== null; cursor = cursor.parent) {
      if (!cursor.clip || cursor.bounds === null) continue;
      const overflows = containmentOverflows(bounds, cursor.bounds);
      if (overflows.length === 0) continue;
      if (scrollReachable(node, cursor)) continue;
      containerIssues.push({
        id: "",
        message: `node '${containmentLabel(node)}' bounds ${node.boundsRaw} exceed clip ancestor ` +
          `'${containmentLabel(cursor)}' bounds [${cursor.bounds.left},${cursor.bounds.top}]` +
          `[${cursor.bounds.right},${cursor.bounds.bottom}] ` +
          `(sides: ${overflows.map(([side, px]) => `${side}=${px}px`).join(", ")})`,
      });
    }
  }
  return { windowIssues, containerIssues };
}

function layoutSeparationCheck(layout: any, rule: any): string | null {
  const firstMatch = rule?.first ?? {};
  const secondMatch = rule?.second ?? {};
  const firstId = String(firstMatch.id ?? ""), secondId = String(secondMatch.id ?? "");
  const first = findLayoutNode(layout, firstId, firstMatch.exact !== false);
  const second = findLayoutNode(layout, secondId, secondMatch.exact !== false);
  if (!first) return "semantic node is missing or not unique: " + firstId;
  if (!second) return "semantic node is missing or not unique: " + secondId;
  const firstBounds = parseBounds(first?.attributes?.bounds ?? first?.bounds);
  const secondBounds = parseBounds(second?.attributes?.bounds ?? second?.bounds);
  if (!firstBounds) return "semantic node has invalid bounds: " + firstId;
  if (!secondBounds) return "semantic node has invalid bounds: " + secondId;

  const gap = Math.max(0, Number(rule.minGap ?? 0));
  const axis = String(rule.axis ?? "horizontal");
  const separated = axis === "vertical"
    ? firstBounds.bottom + gap <= secondBounds.top || secondBounds.bottom + gap <= firstBounds.top
    : firstBounds.right + gap <= secondBounds.left || secondBounds.right + gap <= firstBounds.left;
  if (axis !== "horizontal" && axis !== "vertical") return "axis must be horizontal or vertical";
  return separated ? null : `${firstId} and ${secondId} overlap on the ${axis} axis (required gap ${gap})`;
}

function pixelAt(image: PNG, x: number, y: number): Pixel {
  const safeX = Math.max(0, Math.min(image.width - 1, Math.round(x)));
  const safeY = Math.max(0, Math.min(image.height - 1, Math.round(y)));
  const offset = (safeY * image.width + safeX) * 4;
  return { r: image.data[offset], g: image.data[offset + 1], b: image.data[offset + 2], a: image.data[offset + 3] };
}

function distance(a: Pixel, b: Pixel): number {
  const dr = a.r - b.r, dg = a.g - b.g, db = a.b - b.b, da = a.a - b.a;
  return Math.sqrt(dr * dr + dg * dg + db * db + da * da);
}

function medianPixel(samples: Pixel[]): Pixel {
  const median = (values: number[]) => values.sort((a, b) => a - b)[Math.floor(values.length / 2)];
  return {
    r: median(samples.map((sample) => sample.r)),
    g: median(samples.map((sample) => sample.g)),
    b: median(samples.map((sample) => sample.b)),
    a: median(samples.map((sample) => sample.a)),
  };
}

function maxDistanceInRect(image: PNG, reference: Pixel, left: number, top: number, right: number, bottom: number): number {
  let maximum = 0;
  const x0 = Math.max(0, Math.floor(left)), y0 = Math.max(0, Math.floor(top));
  const x1 = Math.min(image.width - 1, Math.ceil(right)), y1 = Math.min(image.height - 1, Math.ceil(bottom));
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) maximum = Math.max(maximum, distance(pixelAt(image, x, y), reference));
  }
  return maximum;
}

/** 界框内四个偏心点的中位色（roundedOutlineCheck 的既有采样法，圆角取证共用）：容忍
 * 单点踩上前景内容——4 点中位后 1 个离群值不改变结果。 */
function interiorReference(image: PNG, bounds: Bounds): Pixel {
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  return medianPixel([
    pixelAt(image, bounds.left + width * 0.18, bounds.top + height * 0.50),
    pixelAt(image, bounds.left + width * 0.82, bounds.top + height * 0.50),
    pixelAt(image, bounds.left + width * 0.35, bounds.top + height * 0.28),
    pixelAt(image, bounds.left + width * 0.65, bounds.top + height * 0.72),
  ]);
}

/** (cx,cy) 处 3×3 邻域的中位色（边界钳制），抗单像素抗锯齿抖动。 */
function patchMedian(image: PNG, cx: number, cy: number): Pixel {
  return medianPixel([
    pixelAt(image, cx - 1, cy - 1), pixelAt(image, cx, cy - 1), pixelAt(image, cx + 1, cy - 1),
    pixelAt(image, cx - 1, cy), pixelAt(image, cx, cy), pixelAt(image, cx + 1, cy),
    pixelAt(image, cx - 1, cy + 1), pixelAt(image, cx, cy + 1), pixelAt(image, cx + 1, cy + 1),
  ]);
}

/**
 * 旧版圆角探针（按界框尺寸的固定比例取角点/内点样本），保留给**未声明半径**的存量
 * 断言：行为逐字节不变（含 radiusRatio 缺省 0.25 的旧缺省），见向后兼容注记。
 */
function legacyRoundedRectangleCheck(image: PNG, bounds: Bounds, rule: any): string | null {
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const size = Math.min(width, height);
  const radius = Math.max(2, size * Number(rule.radiusRatio ?? 0.25));
  const inset = Math.max(1, size * Number(rule.sampleInsetRatio ?? 0.025));
  const inner = Math.max(inset + 1, radius * 0.82);
  const minDelta = Number(rule.minSurfaceDelta ?? 2);
  const minCornerSeparation = Number(rule.minCornerSeparation ?? 1);
  const samples = [
    [[bounds.left + inset, bounds.top + inset], [bounds.left + inner, bounds.top + inner]],
    [[bounds.right - inset, bounds.top + inset], [bounds.right - inner, bounds.top + inner]],
    [[bounds.left + inset, bounds.bottom - inset], [bounds.left + inner, bounds.bottom - inner]],
    [[bounds.right - inset, bounds.bottom - inset], [bounds.right - inner, bounds.bottom - inner]],
  ];
  const center = pixelAt(image, (bounds.left + bounds.right) / 2, (bounds.top + bounds.bottom) / 2);
  let separated = 0;
  for (const [cornerPoint, innerPoint] of samples) {
    const corner = pixelAt(image, cornerPoint[0], cornerPoint[1]);
    const inside = pixelAt(image, innerPoint[0], innerPoint[1]);
    if (distance(corner, inside) >= minDelta && distance(corner, center) >= minCornerSeparation) separated++;
  }
  const required = Number(rule.requiredCorners ?? 4);
  return separated >= required ? null : `only ${separated}/${required} corners retain a distinct rounded cut-out`;
}

/**
 * C07 圆角矩形探针（2026-09-23 起对声明了半径的断言为"声明半径包络 + 双点取证"语义）。
 *
 * 旧实现对**所有**断言都按界框尺寸的固定比例（sampleInsetRatio，典型 1.5%/2.5%）在对角线
 * 上取一个角点样本，与圆弧切口的存在性无关：圆弧切口对角深度 = (√2−1)×绘制半径（nightly
 * 实测各设备绘制半径 37-63px 随密度缩放，echobridge-manual-dialog 卡片上取样点已落进圆弧
 * 内侧的白色卡面），探针于是误判"无圆角"（manual-dialog-card-radius，3/5 设备红，目检圆角
 * 实际已渲染）。取样比例与圆角几何没有关系，是探针缺陷不是产品缺陷。
 *
 * 新语义（spec 声明了 radiusRatio 时）：半径从声明推导（radiusRatio × min(宽,高)，px 与
 * 布局界框同单位；声明若以 vp 计需先乘密度换算成 px），切口深度包络随之确定：
 *   - 对角切口深度上界 D = (√2−1)×r（圆角切口的几何极值）；
 *   - 沿角部对角线在 [d0, d1]（d0 = max(1, D/4)，d1 = D + max(2, r×15%)，后项为抗锯齿余量）
 *     做 3×3 中位采样扫描，每角取证两点：
 *       A. 切口证据——包络内存在与卡面参考色距离 ≥ 阈值的背景样本（切口背景探进包络，
 *          直角没有：直角的整条包络都是卡面）；
 *       B. 卡面证据——预期弧线内侧参考色（四偏心点中位，与 roundedOutlineCheck 同法）
 *          与角外 2px 背景参考色距离 ≥ 阈值（该角真的渲染出了表面，不是整块背景）。
 *   - 卡面参考不取中心单像素（会踩内容），取既有四偏心点中位；样本用 3×3 中位抗 AA。
 * 判定方向与旧语义一致：A 失败 = 直角（该角没有圆角），B 失败 = 表面未渲染；两者都过
 * 才算该角"retain a distinct rounded cut-out"。声明半径只用来圈定取证包络，不要求绘制
 * 半径与声明相等——已渲染圆角不因半径误差误红：绘制半径比声明更大时切口更深，A 在包络内
 * 照常命中背景、B 用独立的内部参考不受影响；绘制半径更小时切口更浅，扫描起点贴近角部，
 * A 照样命中切口内的背景段。
 *
 * 向后兼容：spec 未声明半径（radiusRatio 字段缺席）的旧断言走 legacyRoundedRectangleCheck，
 * 行为逐字节不变。现有 family spec 的 roundedRectangles 全部声明了 radiusRatio，全部走新语义。
 */
function roundedRectangleCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  if (width < 4 || height < 4) return "semantic node is too small for a rendered shape check";

  // 未声明半径的存量断言保持旧探针行为（radiusRatio 缺省 0.25 的旧缺省也在旧路径里）。
  if (rule.radiusRatio === undefined || rule.radiusRatio === null) {
    return legacyRoundedRectangleCheck(image, bounds, rule);
  }

  const size = Math.min(width, height);
  const declaredRadius = Math.max(1, size * Number(rule.radiusRatio));
  const notchDepth = (Math.SQRT2 - 1) * declaredRadius;
  const scanStart = Math.max(1, notchDepth * 0.25);
  const scanEnd = notchDepth + Math.max(2, declaredRadius * 0.15);
  const deltaFloor = Math.max(Number(rule.minSurfaceDelta ?? 2), Number(rule.minCornerSeparation ?? 1));
  const face = interiorReference(image, bounds);
  const corners = [
    { sx: 1, sy: 1, x: bounds.left, y: bounds.top },
    { sx: -1, sy: 1, x: bounds.right, y: bounds.top },
    { sx: 1, sy: -1, x: bounds.left, y: bounds.bottom },
    { sx: -1, sy: -1, x: bounds.right, y: bounds.bottom },
  ];
  let separated = 0;
  for (const corner of corners) {
    // A. 切口证据：声明半径包络内的对角扫描里必须出现背景（与卡面参考距离足够远的样本）。
    let notchSeen = false;
    for (let d = Math.ceil(scanStart); d <= Math.floor(scanEnd); d++) {
      const sample = patchMedian(image,
        corner.x + corner.sx * (d / Math.SQRT2), corner.y + corner.sy * (d / Math.SQRT2));
      if (distance(sample, face) >= deltaFloor) { notchSeen = true; break; }
    }
    // B. 卡面证据：弧线内侧参考色与角外 2px 背景参考色可分 = 表面真的渲染出来了。
    const outside = patchMedian(image, corner.x - corner.sx * 2, corner.y - corner.sy * 2);
    if (notchSeen && distance(face, outside) >= deltaFloor) separated++;
  }
  const required = Number(rule.requiredCorners ?? 4);
  return separated >= required ? null
    : `only ${separated}/${required} corners show a background notch inside the declared radius ` +
      `envelope with a rendered surface inside the arc`;
}

function roundedOutlineCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left, height = bounds.bottom - bounds.top;
  if (width < 8 || height < 8) return "semantic node is too small for a rendered outline check";
  const size = Math.min(width, height);
  const radius = Math.max(4, size * Number(rule.radiusRatio ?? 0.25));
  const band = Math.max(2, size * Number(rule.strokeSearchRatio ?? 0.025));
  const clearDepth = Math.max(2, size * Number(rule.cornerClearRatio ?? 0.025));
  const minStrokeDelta = Number(rule.minStrokeDelta ?? 12);
  const interior = interiorReference(image, bounds);
  const edgeSpan = Math.max(4, Math.min(width, height) * 0.20);
  const edgeDeltas = [
    maxDistanceInRect(image, interior, (bounds.left + bounds.right) / 2 - edgeSpan, bounds.top - band,
      (bounds.left + bounds.right) / 2 + edgeSpan, bounds.top + band),
    maxDistanceInRect(image, interior, (bounds.left + bounds.right) / 2 - edgeSpan, bounds.bottom - band,
      (bounds.left + bounds.right) / 2 + edgeSpan, bounds.bottom + band),
    maxDistanceInRect(image, interior, bounds.left - band, (bounds.top + bounds.bottom) / 2 - edgeSpan,
      bounds.left + band, (bounds.top + bounds.bottom) / 2 + edgeSpan),
    maxDistanceInRect(image, interior, bounds.right - band, (bounds.top + bounds.bottom) / 2 - edgeSpan,
      bounds.right + band, (bounds.top + bounds.bottom) / 2 + edgeSpan),
  ];
  const requiredEdges = Number(rule.requiredEdges ?? 4);
  const renderedEdges = edgeDeltas.filter((delta) => delta >= minStrokeDelta).length;
  if (renderedEdges < requiredEdges) return `only ${renderedEdges}/${requiredEdges} outline edges are visibly rendered`;

  const corners = [
    { sx: 1, sy: 1, x: bounds.left, y: bounds.top },
    { sx: -1, sy: 1, x: bounds.right, y: bounds.top },
    { sx: 1, sy: -1, x: bounds.left, y: bounds.bottom },
    { sx: -1, sy: -1, x: bounds.right, y: bounds.bottom },
  ];
  let rounded = 0;
  for (const corner of corners) {
    const sharpLeft = corner.sx > 0 ? corner.x - 1 : corner.x - clearDepth;
    const sharpRight = corner.sx > 0 ? corner.x + clearDepth : corner.x + 1;
    const sharpTop = corner.sy > 0 ? corner.y - 1 : corner.y - clearDepth;
    const sharpBottom = corner.sy > 0 ? corner.y + clearDepth : corner.y + 1;
    const sharpDelta = maxDistanceInRect(image, interior, sharpLeft, sharpTop, sharpRight, sharpBottom);
    let arcDelta = 0;
    const centerX = corner.x + corner.sx * radius, centerY = corner.y + corner.sy * radius;
    const start = Math.max(clearDepth, radius * 0.12), end = radius * 0.65;
    const x0 = corner.sx > 0 ? corner.x + start : corner.x - end;
    const x1 = corner.sx > 0 ? corner.x + end : corner.x - start;
    const y0 = corner.sy > 0 ? corner.y + start : corner.y - end;
    const y1 = corner.sy > 0 ? corner.y + end : corner.y - start;
    for (let y = Math.max(0, Math.floor(y0)); y <= Math.min(image.height - 1, Math.ceil(y1)); y++) {
      for (let x = Math.max(0, Math.floor(x0)); x <= Math.min(image.width - 1, Math.ceil(x1)); x++) {
        if (Math.abs(Math.hypot(x - centerX, y - centerY) - radius) <= band) {
          arcDelta = Math.max(arcDelta, distance(pixelAt(image, x, y), interior));
        }
      }
    }
    if (sharpDelta < minStrokeDelta && arcDelta >= minStrokeDelta) rounded++;
  }
  const requiredCorners = Number(rule.requiredCorners ?? 4);
  return rounded >= requiredCorners ? null
    : `only ${rounded}/${requiredCorners} corners have a clear tip and a visible rounded outline arc`;
}

function linearizedLuma(pixel: Pixel): number {
  const channel = (value: number): number => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(pixel.r) + 0.7152 * channel(pixel.g) + 0.0722 * channel(pixel.b);
}

function sampledLumas(image: PNG, left: number, top: number, right: number, bottom: number,
  cap: number): number[] {
  const width = Math.max(1, right - left);
  const height = Math.max(1, bottom - top);
  const step = Math.max(1, Math.floor(Math.sqrt((width * height) / cap)));
  const lumas: number[] = [];
  for (let y = top; y <= bottom; y += step) {
    for (let x = left; x <= right; x += step) {
      lumas.push(linearizedLuma(pixelAt(image, x, y)));
    }
  }
  return lumas;
}

/** 与 sampledLumas 同一网格采样, 但保留像素本体(对比度探针聚簇需要 luma 之外的原始色)。 */
function sampledColors(image: PNG, left: number, top: number, right: number, bottom: number,
  cap: number): Pixel[] {
  const width = Math.max(1, right - left);
  const height = Math.max(1, bottom - top);
  const step = Math.max(1, Math.floor(Math.sqrt((width * height) / cap)));
  const samples: Pixel[] = [];
  for (let y = top; y <= bottom; y += step) {
    for (let x = left; x <= right; x += step) {
      samples.push(pixelAt(image, x, y));
    }
  }
  return samples;
}

function percentileLuma(sorted: number[], fraction: number): number {
  const index = Math.max(0, Math.min(sorted.length - 1, Math.round(sorted.length * fraction)));
  return sorted[index];
}

/**
 * C05 文字对比度探针（2026-09-23 起为"双簇分离"语义）。
 *
 * 旧实现取采样区亮度的 p95/p05 分位算对比度。分位线锚死在占比上：墨水占比低于 5% 分位
 * 覆盖时 p95=p05=背景色，真实对比度被压成 1.00:1 假红（2026-09-23 nightly 实测反例：
 * EchoBridge 取消按钮 98.5% 纯白底 + 深色"取消"标签，真实 WCAG ≈17:1，探针判 1.00:1，
 * 5/5 设备确定性复现；home-download-label 的墨水占比 3.8%-6.4% 跨着 5% 线，红绿完全由
 * 占比决定）。占比分位与"文字是否可读"没有几何关系，是探针缺陷不是产品缺陷。
 *
 * 新语义：在锚点采样区内聚出**背景主簇**与**墨水簇**（最远离背景的簇），以两簇均值算
 * WCAG 对比度；墨水占比只需 > 0 且有最低样本数下限（minInkSamples，防单点噪声冒充墨水）。
 *   1. 背景主簇：64 桶 luma 直方图取峰值桶 ±1 的均值——占比最大的那一团就是背景；
 *   2. 墨水种子：背景两侧（luma 低于/高于 bg±inkSeparation）取极值距离更远的一侧均值；
 *   3. Lloyd 精化：全体样本按最近心重归属、重算两心（固定轮数，确定性）——抗锯齿过渡带
 *      被就近拆开，不会把背景渐变误并进墨水，也不会把墨水稀释进背景；
 *   4. 精化后两心分离不足 inkSeparation 或墨水样本数低于下限 = 无可辨文字 = 显式红
 *      （文字没渲染与低对比同罪，绝不因"分不出簇"而放行）。
 * 聚簇只用 luma：WCAG 对比度由相对亮度定义，同亮度异色相的文字对比度本来就是 1:1，
 * luma 聚不出分离即判红，恰是正确判定，无需色距参与判决。
 * 真正的低对比文字（浅灰字压白底）两簇照样分离、比值照样低于阈值——判红语义不变。
 * spec 断言面不变：锚点、minRatio、sampleInsetRatio 照旧；新增字段全部可选带默认。
 */
function contrastProbeCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  if (width < 4 || height < 4) return "semantic node is too small for a contrast check";
  const inset = Math.max(1, Math.min(width, height) * Number(rule.sampleInsetRatio ?? 0.06));
  const samples = sampledColors(image,
    Math.floor(bounds.left + inset), Math.floor(bounds.top + inset),
    Math.ceil(bounds.right - inset), Math.ceil(bounds.bottom - inset), 4000);
  if (samples.length < 16) return "contrast probe sampled too few pixels";
  const lumas = samples.map(linearizedLuma);

  // 1. 背景主簇 = luma 直方图峰值桶 ±1 的均值。
  const bins = 64;
  const histogram = new Array<number>(bins).fill(0);
  for (const luma of lumas) histogram[Math.min(bins - 1, Math.max(0, Math.floor(luma * bins)))]++;
  let peak = 0;
  for (let i = 1; i < bins; i++) if (histogram[i] > histogram[peak]) peak = i;
  let bgSum = 0, bgCount = 0;
  for (let i = 0; i < samples.length; i++) {
    const bin = Math.min(bins - 1, Math.max(0, Math.floor(lumas[i] * bins)));
    if (bin >= peak - 1 && bin <= peak + 1) { bgSum += lumas[i]; bgCount++; }
  }
  let background = bgCount > 0 ? bgSum / bgCount : percentileLuma([...lumas].sort((a, b) => a - b), 0.5);

  // 2. 墨水种子 = 最远离背景的那一侧（低侧/高侧）超出分离带的样本均值。
  const inkSeparation = Number(rule.inkSeparation ?? 0.06);
  let inkLowSum = 0, inkLowCount = 0, inkHighSum = 0, inkHighCount = 0;
  let lowExtreme = 0, highExtreme = 0;
  for (const luma of lumas) {
    if (luma < background - inkSeparation) { inkLowSum += luma; inkLowCount++; }
    if (luma > background + inkSeparation) { inkHighSum += luma; inkHighCount++; }
    if (luma < lowExtreme) lowExtreme = luma;
    if (luma > highExtreme) highExtreme = luma;
  }
  const lowDistance = inkLowCount > 0 ? background - lowExtreme : -1;
  const highDistance = inkHighCount > 0 ? highExtreme - background : -1;
  const pickLow = lowDistance >= highDistance;
  let ink = pickLow
    ? (inkLowCount > 0 ? inkLowSum / inkLowCount : background)
    : (inkHighCount > 0 ? inkHighSum / inkHighCount : background);

  // 3. Lloyd 精化（固定轮数）：全体样本就近归属后重算两心。
  for (let round = 0; round < 4; round++) {
    let bgSum2 = 0, bgCount2 = 0, inkSum2 = 0, inkCount2 = 0;
    for (const luma of lumas) {
      if (Math.abs(luma - background) <= Math.abs(luma - ink)) { bgSum2 += luma; bgCount2++; }
      else { inkSum2 += luma; inkCount2++; }
    }
    if (bgCount2 === 0 || inkCount2 === 0) break;
    background = bgSum2 / bgCount2;
    ink = inkSum2 / inkCount2;
  }

  // 4. 判定：墨水簇必须有足够样本且与背景真的分离，否则按对比度不足红。
  const minRatio = Number(rule.minRatio ?? 4.5);
  const minInkSamples = Math.max(1, Number(rule.minInkSamples ?? 4));
  const inkCount = lumas.filter((luma) => Math.abs(luma - ink) < Math.abs(luma - background)).length;
  const unresolvable = inkCount < minInkSamples || Math.abs(background - ink) < inkSeparation;
  const ratio = (Math.max(background, ink) + 0.05) / (Math.min(background, ink) + 0.05);
  if (ratio >= minRatio && !unresolvable) return null;
  const effectiveRatio = unresolvable ? 1 : ratio;
  const inkNote = unresolvable
    ? `; no distinct ink cluster rendered (ink samples ${inkCount}/${lumas.length})`
    : ` (background luma ${background.toFixed(3)}, ink luma ${ink.toFixed(3)}, ink samples ${inkCount}/${lumas.length})`;
  return `contrast ${effectiveRatio.toFixed(2)}:1 is below the required ${minRatio}:1${inkNote}`;
}

/**
 * C09 暗色非空渲染测量（已退役的主题轴断言，见 GFSoftware visual-spec.schema.json 的
 * darkRenderProbes 注记）：暗色变体必须真的是暗色、有渲染内容、且没有大面积纯白异常块。
 * 整屏取样、不锚定、不与浅色捕获成对——"这一屏平均偏黑"曾是深色契约的全部断言（死规则②
 * 的空探针形态），C09 已迁至 themeDeltaCheck（themeDeltas，锚定成对+阈值判定）。
 *
 * D-1 dark 轴时序门（2026-09-21 裁决，本函数是门的落点）：**没有 themeDeltas 不给主题
 * 维度计分**。本探针不再执行阈值判定、不再占 checks 检查位（compareVisualSpec 的
 * darkRenderProbes 分支只调本函数记测量值）；spec 未声明 themeDeltas 的检查点，主题维度
 * 不参与计分——绝不拿"median luma 偏黑"这类无阈值身份把深色契约重记一遍假绿。
 * 测量值照记（scored=false），判定相离线可评；历史上在此判定的三个阈值
 * （median≤0.2、content≥0.005、pureWhite≤0.02）随退役一并移交离线判读，不再有任何计分语义。
 */
function measureDarkRender(image: PNG, rule: any): Record<string, number> {
  const pureWhiteLuma = Number(rule.pureWhiteLuma ?? 0.92);
  const contentLumaDelta = Number(rule.contentLumaDelta ?? 0.06);
  const lumas = sampledLumas(image, 0, 0, image.width - 1, image.height - 1, 20000);
  if (lumas.length < 64) {
    return { sampledPixels: lumas.length, sampleError: 1 };
  }
  const sorted = [...lumas].sort((a, b) => a - b);
  const median = percentileLuma(sorted, 0.5);
  const content = lumas.filter((luma) => Math.abs(luma - median) > contentLumaDelta).length / lumas.length;
  const pureWhite = lumas.filter((luma) => luma > pureWhiteLuma).length / lumas.length;
  return {
    sampledPixels: lumas.length,
    medianLuma: Number(median.toFixed(4)),
    contentFraction: Number(content.toFixed(4)),
    pureWhiteFraction: Number(pureWhite.toFixed(4)),
  };
}

/** 锚点界框内按 sample 比例取圆盘区域的中位色（与 colorDominanceCheck 同一采样语义）。 */
function medianColorAt(image: PNG, bounds: Bounds, sample: any): Pixel {
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const xRatio = Math.max(0, Math.min(1, Number(sample?.xRatio ?? 0.5)));
  const yRatio = Math.max(0, Math.min(1, Number(sample?.yRatio ?? 0.5)));
  const radius = Math.max(1, Math.min(width, height) * Number(sample?.radiusRatio ?? 0.04));
  const centerX = bounds.left + width * xRatio, centerY = bounds.top + height * yRatio;
  const samples: Pixel[] = [];
  for (let y = Math.max(0, Math.floor(centerY - radius));
    y <= Math.min(image.height - 1, Math.ceil(centerY + radius)); y++) {
    for (let x = Math.max(0, Math.floor(centerX - radius));
      x <= Math.min(image.width - 1, Math.ceil(centerX + radius)); x++) {
      samples.push(pixelAt(image, x, y));
    }
  }
  return medianPixel(samples);
}

/** 锚点定位(只读布局树): 返回界框与其原文; 采样失败返回 error 文案供判定与测量共用。 */
function locateThemeAnchor(layout: any, rule: any):
  { bounds: Bounds; boundsText: string } | { error: string } {
  const match = rule?.match ?? {};
  const nodeId = String(match.id ?? "");
  const node = findLayoutNode(layout, nodeId, match.exact !== false);
  if (!node) return { error: "semantic node is missing or not unique: " + nodeId };
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return { error: "semantic node has invalid bounds: " + nodeId };
  return { bounds, boundsText: `[${bounds.left},${bounds.top}][${bounds.right},${bounds.bottom}]` };
}

function isThemeAnchorError(value: ReturnType<typeof locateThemeAnchor>): value is { error: string } {
  return (value as { error?: string }).error !== undefined;
}

/** 在指定帧的指定界框上取圆盘中位色采样(定位与采样分离, 两侧各用各的帧)。 */
function sampleAnchorAt(image: PNG, bounds: Bounds, rule: any): { rgb: Pixel; luma: number } {
  const rgb = medianColorAt(image, bounds, rule?.sample ?? {});
  return { rgb, luma: linearizedLuma(rgb) };
}

/** 主题位移判定的测量值字段（判定与出账共用，见 VisualMeasurement）。 */
function themeDeltaMeasurement(id: string, variant: {
  rgb: { r: number; g: number; b: number }; luma: number; boundsText: string;
}, baseline: { rgb: { r: number; g: number; b: number }; luma: number; boundsText: string } | null): VisualMeasurement {
  const values: Record<string, number | string> = {
    variantRgb: `${variant.rgb.r},${variant.rgb.g},${variant.rgb.b}`,
    variantLuma: Number(variant.luma.toFixed(4)),
    variantBounds: variant.boundsText,
  };
  if (baseline !== null) {
    values.baselineRgb = `${baseline.rgb.r},${baseline.rgb.g},${baseline.rgb.b}`;
    values.baselineLuma = Number(baseline.luma.toFixed(4));
    values.baselineBounds = baseline.boundsText;
    values.lumaShift = Number(Math.abs(variant.luma - baseline.luma).toFixed(4));
  }
  return { id, kind: "theme-delta", scored: baseline !== null, values };
}

/**
 * C09 主题位移判定（themeDeltas，主题轴证据的唯一承载）：
 * 锚定成对的浅色/深色采样对——同一锚点在深色变体帧与同场浅色基线帧上各取中位色，
 * 判据是两帧之间的**位移量**（可反驳：两帧一致即红），不是绝对阈值。
 *
 * 阈值策略：比较器带文档化默认值，spec 可逐对覆盖。
 *   - minMedianLumaShift 默认 0.06（线性 luma）。依据家族现有像素容差惯例：与退役探针
 *     darkRenderProbeCheck.contentLumaDelta 的默认（0.06，"内容检出"级，同一线性域）同源，
 *     对应 sRGB 中灰域约 15-20 个通道级，与描边检出 roundedOutlineCheck.minStrokeDelta
 *     默认（12）同一量级——低于这个幅度的"位移"分不清是主题翻转还是采样噪声。
 *   - maxChannelDelta 默认不启用（undefined）：深浅两侧走不同色板 token 的合法翻色
 *     （如强调色换轴）逐通道位移可以很大；上限是可选的采样有效性加强，由 spec 声明。
 *   - minChannelShifts 默认不启用（undefined）：可选的方向性逐通道位移判据（等亮度色相
 *     旋转轴的承载门，见分支内注记）。启用时通道判据独占判定，上两个阈值让位。
 *
 * 返回判定文案（null=通过）与测量值；测量值无论判定结果如何都随报告出账。
 */
function themeDeltaCheck(variant: PNG, baseline: PNG, variantLayout: any, baselineLayout: any,
  rule: any): { message: string | null; measurement: VisualMeasurement } {
  const match = rule?.match ?? {};
  const nodeId = String(match.id ?? "");
  const variantLocated = locateThemeAnchor(variantLayout, rule);
  if (isThemeAnchorError(variantLocated)) {
    return {
      message: variantLocated.error,
      measurement: { id: nodeId, kind: "theme-delta", scored: false,
        values: { variantSampleError: variantLocated.error } },
    };
  }
  const variantSide = {
    ...sampleAnchorAt(variant, variantLocated.bounds, rule),
    boundsText: variantLocated.boundsText,
  };

  // 浅色基线的锚点定位：基线布局树在场就分别定位（锚点两侧各用自己的几何），
  // 缺席则复用变体 bounds——那是 spec 声明 structuralEquivalentTo.geometryInvariant
  // 时由结构差分另行背书的前提，这里不重复强制；bounds 复用, 帧仍是基线帧。
  let baselineLocated: ReturnType<typeof locateThemeAnchor> = variantLocated;
  if (baselineLayout) {
    baselineLocated = locateThemeAnchor(baselineLayout, rule);
    if (isThemeAnchorError(baselineLocated)) {
      // 基线侧定位失败与变体侧措辞区分开: 编排/声明错误各说各的, 不共用一句含混文案。
      const reason = baselineLocated.error.includes("invalid bounds")
        ? "has invalid bounds in the baseline layout"
        : "is missing or not unique in the baseline layout";
      return {
        message: `theme anchor '${nodeId}' ${reason}`,
        measurement: themeDeltaMeasurement(nodeId, variantSide, null),
      };
    }
  }
  const baselineSide = {
    ...sampleAnchorAt(baseline, baselineLocated.bounds, rule),
    boundsText: baselineLocated.boundsText,
  };

  const measurement = themeDeltaMeasurement(nodeId, variantSide, baselineSide);
  // 方向性逐通道位移（可选，spec 逐对声明 minChannelShifts）：夜轴若走"等亮度色相旋转"
  // （如 Stargaze 夜面蓝暗→红外红，S20 实测圆盘中位 luma 位移全网格 ≤0.0115，阈值 0.06
  // 在任何采样点都不可达），luma 门对该轴恒假红。声明本字段时判定由通道判据承载、luma 门
  // 让位（不叠加；maxChannelDelta 采样帽同批不参与——通道地板与通道帽同用自相矛盾）。
  // 语义：shift=variant−baseline（带方向），required<0 要求 shift<=required（该通道至少
  // 变暗 |required| 级）、required>0 要求 shift>=required（至少变亮 required 级）——即
  // |Δchannel| 下限，符号钉方向；**全部**声明通道各自达标才过（AND），任一不达标即红
  // （fail-closed：通道是维度非复本，假绿是不可见错误形态）。只认 red/green/
  // blue 三个键；未声明（缺省/空对象）不进入本分支，判定路径与测量值逐字节同旧。
  const minChannelShifts = rule.minChannelShifts as Record<string, number> | undefined | null;
  const declaredFloor = minChannelShifts !== undefined && minChannelShifts !== null &&
    typeof minChannelShifts === "object" ? minChannelShifts : {};
  const declaredChannels = ([["red", "r"], ["green", "g"], ["blue", "b"]] as const)
    .filter(([channel]) => declaredFloor[channel] !== undefined && declaredFloor[channel] !== null);
  if (declaredChannels.length > 0) {
    const channelShifts = declaredChannels.map(([channel, key]) => {
      const required = Number(declaredFloor[channel]);
      const actual = variantSide.rgb[key] - baselineSide.rgb[key];
      const margin = required < 0 ? required - actual : actual - required;
      return { channel, actual, required, margin };
    });
    measurement.values.channelShifts = channelShifts.map(({ channel, actual }) =>
      `${channel}:${actual >= 0 ? "+" : ""}${actual}`).join(" ");
    // margin = 达标裕量（≥0 即该通道达标）；AND：全通道达标才过，报裕量最差（最小）的通道。
    const worst = channelShifts.reduce((a, b) => (b.margin < a.margin ? b : a));
    if (worst.margin < 0) {
      return { message: `channel shift ${worst.actual} on ${worst.channel} does not reach the required ` +
        `${worst.required} (variant rgb ${variantSide.rgb.r},${variantSide.rgb.g},${variantSide.rgb.b} ` +
        `vs baseline rgb ${baselineSide.rgb.r},${baselineSide.rgb.g},${baselineSide.rgb.b}) — ` +
        `the theme axis did not move this anchor`, measurement };
    }
    return { message: null, measurement };
  }
  const minShift = Number(rule.minMedianLumaShift ?? 0.06);
  const shift = Math.abs(variantSide.luma - baselineSide.luma);
  if (shift < minShift) {
    return { message: `theme shift ${shift.toFixed(4)} is below the required ${minShift} ` +
      `(variant rgb ${variantSide.rgb.r},${variantSide.rgb.g},${variantSide.rgb.b} vs baseline rgb ` +
      `${baselineSide.rgb.r},${baselineSide.rgb.g},${baselineSide.rgb.b}) — the theme axis did not move this anchor`,
      measurement };
  }
  const maxChannelDelta = rule.maxChannelDelta;
  if (maxChannelDelta !== undefined && maxChannelDelta !== null) {
    const cap = Number(maxChannelDelta);
    const deltas: [string, number][] = [
      ["red", Math.abs(variantSide.rgb.r - baselineSide.rgb.r)],
      ["green", Math.abs(variantSide.rgb.g - baselineSide.rgb.g)],
      ["blue", Math.abs(variantSide.rgb.b - baselineSide.rgb.b)],
    ];
    for (const [channel, delta] of deltas) {
      if (delta > cap) {
        return { message: `channel delta ${delta} on ${channel} exceeds the sampling cap ${cap} ` +
          `(variant rgb ${variantSide.rgb.r},${variantSide.rgb.g},${variantSide.rgb.b} vs baseline rgb ` +
          `${baselineSide.rgb.r},${baselineSide.rgb.g},${baselineSide.rgb.b}) — the anchored area is not the same content`,
          measurement };
      }
    }
  }
  return { message: null, measurement };
}

function colorDominanceCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left, height = bounds.bottom - bounds.top;
  if (width < 4 || height < 4) return "semantic node is too small for a color probe";

  const dominantChannel = String(rule.dominantChannel ?? "");
  if (!(["red", "green", "blue"] as string[]).includes(dominantChannel)) {
    return "dominantChannel must be red, green, or blue";
  }
  const channelKey: "r" | "g" | "b" = dominantChannel === "red" ? "r" :
    (dominantChannel === "green" ? "g" : "b");
  const sample = rule?.sample ?? {};
  const xRatio = Math.max(0, Math.min(1, Number(sample.xRatio ?? 0.5)));
  const yRatio = Math.max(0, Math.min(1, Number(sample.yRatio ?? 0.5)));
  const radius = Math.max(1, Math.min(width, height) * Number(sample.radiusRatio ?? 0.04));
  const centerX = bounds.left + width * xRatio, centerY = bounds.top + height * yRatio;
  const samples: Pixel[] = [];
  for (let y = Math.max(0, Math.floor(centerY - radius));
    y <= Math.min(image.height - 1, Math.ceil(centerY + radius)); y++) {
    for (let x = Math.max(0, Math.floor(centerX - radius));
      x <= Math.min(image.width - 1, Math.ceil(centerX + radius)); x++) {
      samples.push(pixelAt(image, x, y));
    }
  }
  if (samples.length === 0) return "color probe produced no samples";
  const color = medianPixel(samples);
  const dominant = color[channelKey];
  const competitors = channelKey === "r" ? [color.g, color.b] :
    (channelKey === "g" ? [color.r, color.b] : [color.r, color.g]);
  const minChannel = Number(rule.minChannel ?? 0);
  const minDominance = Number(rule.minDominance ?? 0);
  if (dominant < minChannel) {
    return `${dominantChannel} median ${dominant} is below required ${minChannel} (rgb ${color.r},${color.g},${color.b})`;
  }
  const dominance = dominant - Math.max(...competitors);
  return dominance >= minDominance ? null :
    `${dominantChannel} dominance ${dominance} is below required ${minDominance} (rgb ${color.r},${color.g},${color.b})`;
}

function inIgnoredRegion(x: number, y: number, regions: any[]): boolean {
  return regions.some((region) => x >= Number(region.x) && y >= Number(region.y) &&
    x < Number(region.x) + Number(region.width) && y < Number(region.y) + Number(region.height));
}

function baselineMismatch(actual: PNG, baseline: PNG, tolerance: any, ignored: any[]): number {
  if (actual.width !== baseline.width || actual.height !== baseline.height) return 1;
  const delta = Number(tolerance?.pixelDelta ?? 0);
  let compared = 0, mismatched = 0;
  for (let y = 0; y < actual.height; y++) {
    for (let x = 0; x < actual.width; x++) {
      if (inIgnoredRegion(x, y, ignored)) continue;
      compared++;
      const a = pixelAt(actual, x, y), b = pixelAt(baseline, x, y);
      if (Math.max(Math.abs(a.r - b.r), Math.abs(a.g - b.g), Math.abs(a.b - b.b), Math.abs(a.a - b.a)) > delta) {
        mismatched++;
      }
    }
  }
  return compared === 0 ? 0 : mismatched / compared;
}

export function compareVisualSpec(opts: {
  specPath: string;
  actualPath: string;
  layoutPath?: string;
  outputDir: string;
  /** 结构性差分: 变体 spec 声明 structuralEquivalentTo 时由调用方提供基线 spec 与布局树。 */
  structuralBaselineSpecPath?: string;
  structuralBaselineLayoutPath?: string;
  structuralDensityPixels?: number;
  /**
   * 主题位移判定: spec 声明 themeDeltas 时由调用方提供**同场已捕获的浅色基线帧**
   * （comparedTo 指向的那个检查点的 actual.png）。声明了配对却拿不到对方是编排缺口,
   * 以 theme-baseline-missing 显式红 —— 绝不静默退化成"只看深色帧自己"。
   */
  themeBaselineActualPath?: string;
}): VisualCompareResult {
  const specPath = path.resolve(opts.specPath);
  const actualPath = path.resolve(opts.actualPath);
  const outputDir = path.resolve(opts.outputDir);
  const spec = readJson(specPath);
  if (spec?.schemaVersion !== 1) throw new Error("visual spec schemaVersion must be 1");
  const actual = readPngFile(actualPath);
  const issues: VisualIssue[] = [];
  const measurements: VisualMeasurement[] = [];
  let themeAxis: "scored" | "unpaired" | "notDeclared" = "notDeclared";
  let checks = 0;
  let mismatchRatio: number | undefined;

  if (spec.baselineImage) {
    checks++;
    const baselinePath = path.resolve(path.dirname(specPath), String(spec.baselineImage));
    const baseline = readPngFile(baselinePath);
    mismatchRatio = baselineMismatch(actual, baseline, spec.tolerance ?? {}, spec.ignoreRegions ?? []);
    const maxRatio = Number(spec?.tolerance?.maxMismatchRatio ?? 0);
    if (mismatchRatio > maxRatio) {
      issues.push({ id: "baseline", message: `mismatch ratio ${mismatchRatio} exceeds ${maxRatio}` });
    }
  }

  const roundedRules = Array.isArray(spec.roundedRectangles) ? spec.roundedRectangles : [];
  const roundedOutlineRules = Array.isArray(spec.roundedOutlines) ? spec.roundedOutlines : [];
  const colorProbeRules = Array.isArray(spec.colorProbes) ? spec.colorProbes : [];
  const contrastProbeRules = Array.isArray(spec.contrastProbes) ? spec.contrastProbes : [];
  const darkRenderRules = Array.isArray(spec.darkRenderProbes) ? spec.darkRenderProbes : [];
  const themeDeltaRules = Array.isArray(spec.themeDeltas) ? spec.themeDeltas : [];
  const containmentScanRules = Array.isArray(spec.containmentProbes) ? spec.containmentProbes : [];
  const layoutContainmentRules = Array.isArray(spec.layoutContainments) ? spec.layoutContainments : [];
  const separationRules = Array.isArray(spec.layoutSeparations) ? spec.layoutSeparations : [];
  const needsLayout = roundedRules.length > 0 || roundedOutlineRules.length > 0 ||
    colorProbeRules.length > 0 || contrastProbeRules.length > 0 ||
    themeDeltaRules.length > 0 || containmentScanRules.length > 0 ||
    layoutContainmentRules.length > 0 || separationRules.length > 0;
  if (needsLayout && !opts.layoutPath) {
    throw new Error("rendered shape, color, and layout checks require layoutPath");
  }
  const layout = needsLayout ? readJson(path.resolve(opts.layoutPath!)) : null;
  for (const rule of roundedRules) {
    checks++;
    const message = roundedRectangleCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "rounded-rectangle"), message });
  }
  for (const rule of roundedOutlineRules) {
    checks++;
    const message = roundedOutlineCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "rounded-outline"), message });
  }
  for (const rule of colorProbeRules) {
    checks++;
    const message = colorDominanceCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "color-probe"), message });
  }
  for (const rule of contrastProbeRules) {
    checks++;
    const message = contrastProbeCheck(actual, layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "contrast-probe"), message });
  }
  // D-1 dark 轴时序门（见 measureDarkRender 头注）：退役探针只记测量值, 不占检查位。
  // spec 未声明 themeDeltas 时主题维度就此不参与计分(themeAxis=notDeclared);
  // 一份只声明 darkRenderProbes 的 spec 将没有任何可执行检查位, 会在下方
  // "no executable checks" 处显式失败——空探针封不出 passed, 正是死规则②要的形状。
  for (const rule of darkRenderRules) {
    measurements.push({
      id: String(rule.id ?? "dark-render-probe"),
      kind: "dark-render",
      scored: false,
      values: measureDarkRender(actual, rule),
      note: "已退役的主题轴探针(死规则②空探针): 只测量不计分, 主题轴证据由 themeDeltas 承载",
    });
  }
  // 主题位移判定（themeDeltas）：同场浅色基线帧必须由调用方提供。声明了成对却拿不到
  // 基线捕获是编排缺口 —— 显式 theme-baseline-missing 红，与 structural-baseline-missing
  // 同一条纪律；基线布局树若随结构性差分一起提供了，浅色锚点就按它自己的几何定位。
  // 未配对时变体侧锚点采样值照记（scored=false）——"本轮判不了"与"什么都没量到"
  // 是两句话，报告里都要说出口（离线可评的最低要求）。
  if (themeDeltaRules.length > 0) {
    if (!opts.themeBaselineActualPath) {
      themeAxis = "unpaired";
      checks += themeDeltaRules.length;
      issues.push({ id: "theme-baseline-missing",
        message: `spec declares ${themeDeltaRules.length} themeDeltas pair(s) but this run provided no ` +
          "same-campaign light capture (--baseline-actual); paired theme evidence cannot be judged" });
      for (const rule of themeDeltaRules) {
        const located = locateThemeAnchor(layout, rule);
        measurements.push(isThemeAnchorError(located)
          ? { id: String(rule.id ?? "theme-delta"), kind: "theme-delta", scored: false,
            values: { variantSampleError: located.error } }
          : themeDeltaMeasurement(String(rule.id ?? "theme-delta"),
            { ...sampleAnchorAt(actual, located.bounds, rule), boundsText: located.boundsText }, null));
      }
    } else {
      themeAxis = "scored";
      const baselinePng = readPngFile(path.resolve(opts.themeBaselineActualPath));
      const baselineLayout = opts.structuralBaselineLayoutPath
        ? readJson(path.resolve(opts.structuralBaselineLayoutPath))
        : null;
      for (const rule of themeDeltaRules) {
        checks++;
        const outcome = themeDeltaCheck(actual, baselinePng, layout!, baselineLayout, rule);
        if (outcome.message) issues.push({ id: String(rule.id ?? "theme-delta"), message: outcome.message });
        measurements.push(outcome.measurement);
      }
    }
  }
  // C15 整树包含扫描（containmentProbes，显式声明才启用）：一条声明 = R1 窗口扫描 +
  // R2 容器扫描两个检查位，每个越界事实再各占一个检查位（与结构差分 comparedAnchors 同一
  // 记账法，保证 passed = checks - issues 不为负）。issue id 用声明的探针 id 作前缀：
  // `<id>.window` / `<id>.container` —— 它们是内容断言，不是编排缺口的形状。
  for (const rule of containmentScanRules) {
    checks += 2;
    const probeId = String(rule.id ?? "containment");
    const scan = containmentScanCheck(layout);
    for (const issue of scan.windowIssues) {
      checks++;
      issues.push({ id: `${probeId}.window`, message: issue.message });
    }
    for (const issue of scan.containerIssues) {
      checks++;
      issues.push({ id: `${probeId}.container`, message: issue.message });
    }
  }
  for (const rule of layoutContainmentRules) {
    checks++;
    const message = layoutContainmentCheck(layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "layout-containment"), message });
  }
  for (const rule of separationRules) {
    checks++;
    const message = layoutSeparationCheck(layout, rule);
    if (message) issues.push({ id: String(rule.id ?? "layout-separation"), message });
  }
  if (checks === 0) throw new Error("visual spec contains no executable checks");

  // 结构性差分: spec 声明 structuralEquivalentTo 时, 与基线检查点的布局树在
  // "两个 spec 声明的锚点并集"上对比锚点存在性/相对顺序(及可选几何不变)。
  // 基线 spec 与布局由调用方提供; 声明了等价却拿不到基线产物是编排错误,
  // 显式失败而非静默跳过。
  const structural = parseStructuralEquivalence(spec);
  if (structural) {
    if (!opts.structuralBaselineLayoutPath || !opts.structuralBaselineSpecPath) {
      issues.push({ id: "structural-baseline-missing",
        message: `spec 声明 structuralEquivalentTo('${structural.baselineName}') 但本次运行未提供基线 spec/布局树; ` +
          "基线检查点必须先于变体检查点执行" });
      checks++;
    } else if (!opts.layoutPath) {
      issues.push({ id: "structural-config",
        message: "structuralEquivalentTo 需要变体检查点自身的布局树(--layout)" });
      checks++;
    } else if (structural.geometryInvariant === true &&
        !(opts.structuralDensityPixels !== undefined && opts.structuralDensityPixels > 0)) {
      issues.push({ id: "structural-config",
        message: "structuralEquivalentTo.geometryInvariant 需要调用方提供 densityPixels(px per vp)" });
      checks++;
    } else {
      const baselineSpec = readJson(path.resolve(opts.structuralBaselineSpecPath));
      const declaredAnchors = [
        ...new Set([...declaredSpecAnchors(baselineSpec), ...declaredSpecAnchors(spec)]),
      ];
      if (declaredAnchors.length === 0) {
        issues.push({ id: "structural-config",
          message: "结构性差分需要至少一个被契约声明的锚点(基线/变体 spec 的 match 引用)" });
        checks++;
      } else {
        const baselineLayout = readJson(path.resolve(opts.structuralBaselineLayoutPath));
        const variantLayout = readJson(path.resolve(opts.layoutPath));
        const diff = diffStructuralLayout(baselineLayout, variantLayout, {
          ...structural,
          declaredAnchors,
          densityPixels: opts.structuralDensityPixels,
        });
        checks += 1 + diff.comparedAnchors;
        for (const issue of diff.issues) {
          issues.push({ id: issue.id, message: issue.message });
        }
        // 测量值(离线可评): 布局树轴之外, 字体/locale 轴的变体spec也走这份声明;
        // 出现序列与双方 bounds 原文随报告出账, 供判定相离线复评(不新增判定语义)。
        measurements.push({
          id: structural.baselineName ?? "baseline",
          kind: "structural-equivalence",
          scored: true,
          values: {
            comparedAnchors: diff.comparedAnchors,
            siblingPairs: diff.siblingPairs,
            baselineOrder: diff.baselineOrder,
            variantOrder: diff.variantOrder,
            ...(diff.sharedAnchorBounds.length > 0
              ? { anchorBounds: diff.sharedAnchorBounds.map((entry) =>
                `${entry.anchor} baseline=${entry.baseline ?? "n/a"} variant=${entry.variant ?? "n/a"}`).join("; ") }
              : {}),
          },
        });
      }
    }
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const reportJson = path.join(outputDir, "visual-report.json");
  const reportMarkdown = path.join(outputDir, "visual-report.md");
  const result: VisualCompareResult = {
    status: issues.length === 0 ? "passed" : "failed",
    summary: {
      checks,
      passed: checks - issues.length,
      failed: issues.length,
      themeAxis,
      ...(mismatchRatio === undefined ? {} : { mismatchRatio }),
    },
    issues,
    measurements,
    reportJson,
    reportMarkdown,
  };
  fs.writeFileSync(reportJson, JSON.stringify(result, null, 2) + "\n", "utf8");
  const markdown = [
    "# Visual contract report",
    "",
    `- Status: ${result.status}`,
    `- Checks: ${checks}`,
    `- Failed: ${issues.length}`,
    `- Theme axis: ${themeAxis}`,
    ...(mismatchRatio === undefined ? [] : [`- Mismatch ratio: ${mismatchRatio}`]),
    "",
    ...(issues.length === 0 ? ["No issues."] : issues.map((issue) => `- ${issue.id}: ${issue.message}`)),
    ...(measurements.length === 0 ? [] : [
      "",
      "## Measurements",
      ...measurements.map((measurement) => `- [${measurement.kind}] ${measurement.id}` +
        ` (scored=${measurement.scored}): ` + JSON.stringify(measurement.values)),
    ]),
    "",
  ].join("\n");
  fs.writeFileSync(reportMarkdown, markdown, "utf8");
  return result;
}
