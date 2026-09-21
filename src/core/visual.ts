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

export interface VisualCompareResult {
  status: "passed" | "failed";
  summary: {
    checks: number;
    passed: number;
    failed: number;
    mismatchRatio?: number;
  };
  issues: VisualIssue[];
  reportJson: string;
  reportMarkdown: string;
}

function readJson(file: string): any {
  return JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
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

function roundedRectangleCheck(image: PNG, layout: any, rule: any): string | null {
  const match = rule?.match ?? {};
  const node = findLayoutNode(layout, String(match.id ?? ""), match.exact !== false);
  if (!node) return "semantic node is missing or not unique: " + String(match.id ?? "");
  const bounds = parseBounds(node?.attributes?.bounds ?? node?.bounds);
  if (!bounds) return "semantic node has invalid bounds: " + String(match.id ?? "");
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  if (width < 4 || height < 4) return "semantic node is too small for a rendered shape check";
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
  const interior = medianPixel([
    pixelAt(image, bounds.left + width * 0.18, bounds.top + height * 0.50),
    pixelAt(image, bounds.left + width * 0.82, bounds.top + height * 0.50),
    pixelAt(image, bounds.left + width * 0.35, bounds.top + height * 0.28),
    pixelAt(image, bounds.left + width * 0.65, bounds.top + height * 0.72),
  ]);
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

function percentileLuma(sorted: number[], fraction: number): number {
  const index = Math.max(0, Math.min(sorted.length - 1, Math.round(sorted.length * fraction)));
  return sorted[index];
}

/**
 * C05 文字对比度探针：在锚点 bounds 内按亮度分位取文本/背景两极，
 * 以 WCAG 相对亮度比断言最低对比度（正文 4.5:1，大字 3:1）。
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
  const lumas = sampledLumas(image,
    Math.floor(bounds.left + inset), Math.floor(bounds.top + inset),
    Math.ceil(bounds.right - inset), Math.ceil(bounds.bottom - inset), 4000);
  if (lumas.length < 16) return "contrast probe sampled too few pixels";
  lumas.sort((a, b) => a - b);
  const dark = percentileLuma(lumas, 0.05);
  const light = percentileLuma(lumas, 0.95);
  const ratio = (light + 0.05) / (dark + 0.05);
  const minRatio = Number(rule.minRatio ?? 4.5);
  return ratio >= minRatio ? null
    : `contrast ${ratio.toFixed(2)}:1 is below the required ${minRatio}:1 (p95 luma ${light.toFixed(3)}, p05 luma ${dark.toFixed(3)})`;
}

/**
 * C09 暗色非空渲染探针（已退役的主题轴断言，见 GFSoftware visual-spec.schema.json 的
 * darkRenderProbes 注记）：暗色变体必须真的是暗色、有渲染内容、且没有大面积纯白异常块。
 * 整屏取样、不锚定、不与浅色捕获成对——结构上不可能失败，因此不再被任何维度消费；
 * 主题轴证据由 themeDeltaCheck（themeDeltas）承载。
 */
function darkRenderProbeCheck(image: PNG, rule: any): string | null {
  const maxDarkMedianLuma = Number(rule.maxDarkMedianLuma ?? 0.2);
  const minContentFraction = Number(rule.minContentFraction ?? 0.005);
  const maxPureWhiteFraction = Number(rule.maxPureWhiteFraction ?? 0.02);
  const pureWhiteLuma = Number(rule.pureWhiteLuma ?? 0.92);
  const contentLumaDelta = Number(rule.contentLumaDelta ?? 0.06);
  const lumas = sampledLumas(image, 0, 0, image.width - 1, image.height - 1, 20000);
  if (lumas.length < 64) return "dark-render probe sampled too few pixels";
  const sorted = [...lumas].sort((a, b) => a - b);
  const median = percentileLuma(sorted, 0.5);
  if (median > maxDarkMedianLuma) {
    return `median luma ${median.toFixed(3)} exceeds the dark threshold ${maxDarkMedianLuma}`;
  }
  const content = lumas.filter((luma) => Math.abs(luma - median) > contentLumaDelta).length / lumas.length;
  if (content < minContentFraction) {
    return `only ${(content * 100).toFixed(2)}% of pixels carry content; the dark render looks empty`;
  }
  const pureWhite = lumas.filter((luma) => luma > pureWhiteLuma).length / lumas.length;
  if (pureWhite > maxPureWhiteFraction) {
    return `${(pureWhite * 100).toFixed(2)}% of pixels are near-white (limit ${maxPureWhiteFraction * 100}%); check the dark variant`;
  }
  return null;
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
      x <= Math.min(image.height - 1, Math.ceil(centerX + radius)); x++) {
      samples.push(pixelAt(image, x, y));
    }
  }
  return medianPixel(samples);
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
 */
function themeDeltaCheck(variant: PNG, baseline: PNG, variantLayout: any, baselineLayout: any,
  rule: any): string | null {
  const match = rule?.match ?? {};
  const nodeId = String(match.id ?? "");
  const variantNode = findLayoutNode(variantLayout, nodeId, match.exact !== false);
  if (!variantNode) return "semantic node is missing or not unique: " + nodeId;
  const variantBounds = parseBounds(variantNode?.attributes?.bounds ?? variantNode?.bounds);
  if (!variantBounds) return "semantic node has invalid bounds: " + nodeId;

  // 浅色基线的锚点定位：基线布局树在场就分别定位（锚点两侧各用自己的几何），
  // 缺席则复用变体 bounds——那是 spec 声明 structuralEquivalentTo.geometryInvariant
  // 时由结构差分另行背书的前提，这里不重复强制。
  let baselineBounds = variantBounds;
  if (baselineLayout) {
    const baselineNode = findLayoutNode(baselineLayout, nodeId, match.exact !== false);
    if (!baselineNode) {
      return `theme anchor '${nodeId}' is missing or not unique in the baseline layout`;
    }
    const parsed = parseBounds(baselineNode?.attributes?.bounds ?? baselineNode?.bounds);
    if (!parsed) return `theme anchor '${nodeId}' has invalid bounds in the baseline layout`;
    baselineBounds = parsed;
  }

  const sample = rule?.sample ?? {};
  const variantColor = medianColorAt(variant, variantBounds, sample);
  const baselineColor = medianColorAt(baseline, baselineBounds, sample);

  const minShift = Number(rule.minMedianLumaShift ?? 0.06);
  const variantLuma = linearizedLuma(variantColor);
  const baselineLuma = linearizedLuma(baselineColor);
  const shift = Math.abs(variantLuma - baselineLuma);
  if (shift < minShift) {
    return `theme shift ${shift.toFixed(4)} is below the required ${minShift} ` +
      `(variant rgb ${variantColor.r},${variantColor.g},${variantColor.b} vs baseline rgb ` +
      `${baselineColor.r},${baselineColor.g},${baselineColor.b}) — the theme axis did not move this anchor`;
  }
  const maxChannelDelta = rule.maxChannelDelta;
  if (maxChannelDelta !== undefined && maxChannelDelta !== null) {
    const cap = Number(maxChannelDelta);
    const deltas: [string, number][] = [
      ["red", Math.abs(variantColor.r - baselineColor.r)],
      ["green", Math.abs(variantColor.g - baselineColor.g)],
      ["blue", Math.abs(variantColor.b - baselineColor.b)],
    ];
    for (const [channel, delta] of deltas) {
      if (delta > cap) {
        return `channel delta ${delta} on ${channel} exceeds the sampling cap ${cap} ` +
          `(variant rgb ${variantColor.r},${variantColor.g},${variantColor.b} vs baseline rgb ` +
          `${baselineColor.r},${baselineColor.g},${baselineColor.b}) — the anchored area is not the same content`;
      }
    }
  }
  return null;
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
  const actual = PNG.sync.read(fs.readFileSync(actualPath));
  const issues: VisualIssue[] = [];
  let checks = 0;
  let mismatchRatio: number | undefined;

  if (spec.baselineImage) {
    checks++;
    const baselinePath = path.resolve(path.dirname(specPath), String(spec.baselineImage));
    const baseline = PNG.sync.read(fs.readFileSync(baselinePath));
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
  for (const rule of darkRenderRules) {
    checks++;
    const message = darkRenderProbeCheck(actual, rule);
    if (message) issues.push({ id: String(rule.id ?? "dark-render-probe"), message });
  }
  // 主题位移判定（themeDeltas）：同场浅色基线帧必须由调用方提供。声明了成对却拿不到
  // 基线捕获是编排缺口 —— 显式 theme-baseline-missing 红，与 structural-baseline-missing
  // 同一条纪律；基线布局树若随结构性差分一起提供了，浅色锚点就按它自己的几何定位。
  if (themeDeltaRules.length > 0) {
    if (!opts.themeBaselineActualPath) {
      checks += themeDeltaRules.length;
      issues.push({ id: "theme-baseline-missing",
        message: `spec declares ${themeDeltaRules.length} themeDeltas pair(s) but this run provided no ` +
          "same-campaign light capture (--baseline-actual); paired theme evidence cannot be judged" });
    } else {
      const baselinePng = PNG.sync.read(fs.readFileSync(path.resolve(opts.themeBaselineActualPath)));
      const baselineLayout = opts.structuralBaselineLayoutPath
        ? readJson(path.resolve(opts.structuralBaselineLayoutPath))
        : null;
      for (const rule of themeDeltaRules) {
        checks++;
        const message = themeDeltaCheck(actual, baselinePng, layout!, baselineLayout, rule);
        if (message) issues.push({ id: String(rule.id ?? "theme-delta"), message });
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
      }
    }
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const reportJson = path.join(outputDir, "visual-report.json");
  const reportMarkdown = path.join(outputDir, "visual-report.md");
  const result: VisualCompareResult = {
    status: issues.length === 0 ? "passed" : "failed",
    summary: { checks, passed: checks - issues.length, failed: issues.length, ...(mismatchRatio === undefined ? {} : { mismatchRatio }) },
    issues,
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
    ...(mismatchRatio === undefined ? [] : [`- Mismatch ratio: ${mismatchRatio}`]),
    "",
    ...(issues.length === 0 ? ["No issues."] : issues.map((issue) => `- ${issue.id}: ${issue.message}`)),
    "",
  ].join("\n");
  fs.writeFileSync(reportMarkdown, markdown, "utf8");
  return result;
}
