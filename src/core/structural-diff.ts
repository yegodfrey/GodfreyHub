// 结构性差分(领域无关): 同一页面跨配置(主题/语言/窗口类别)的布局树结构对比。
// 零像素成本, 专抓"深色模式丢了一个按钮/换了一个结构"这类最常见的主题回归。
//
// 声明方式(视觉 spec 数据, 不是测试代码): 变体 spec 声明
//   "structuralEquivalentTo": {
//     "spec": "clash-home-layout.json",       // 基线检查点名(spec name)
//     "ignoreAnchors": ["a.b"],               // 允许缺席/多出的锚点(显式豁免)
//     "geometryInvariant": true,              // 锚点几何是否必须不变(默认 false)
//     "geometryToleranceVp": 1                // 几何容差(默认 1vp)
//   }
// 语义(按轴适用性): 锚点集合相等 + 相对顺序相等对 theme/locale/字号轴都成立;
// 几何不变只对 theme/字号成立——locale 必然改变文本度量, 禁止跨语言断言几何。

export interface StructuralRect { left: number; top: number; right: number; bottom: number }

export interface StructuralIssue {
  id: string;
  message: string;
}

export interface StructuralDiffOptions {
  /** 参与对比的声明锚点; 缺省时对比两棵树的全部语义 id(全集, 噪声更大)。 */
  declaredAnchors?: string[];
  ignoreAnchors?: string[];
  geometryInvariant?: boolean;
  geometryToleranceVp?: number;
  densityPixels?: number;    // 几何不变断言必须提供(px per vp); 缺失时几何断言报配置错误。
  // 注意: 这是 px→vp 换算输入, 不是判等键 —— 收据/构建的等价类判等键是
  // (vp 视口带, 字级档, HAP 摘要), 定义在 GFSoftware family/visual-equivalence.mjs;
  // 同一等价类内 density 差异合法, 只作记录字段。
  baselineName?: string;     // 仅用于 issue 文案
  variantName?: string;
}

export interface StructuralDiffResult {
  status: "passed" | "failed";
  comparedAnchors: number;
  issues: StructuralIssue[];
  summaryText: string;
}

interface LayoutEntry { order: number; bounds: StructuralRect | undefined }

function parseBounds(text: unknown): StructuralRect | undefined {
  if (typeof text !== "string") return undefined;
  const match = text.match(/^\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]$/);
  if (!match) return undefined;
  const [left, top, right, bottom] = match.slice(1).map(Number);
  return { left, top, right, bottom };
}

/** 先序遍历提取带顺序与几何的语义锚点; 同一 anchor 以首个出现为准。 */
export function extractOrderedAnchors(raw: unknown): Map<string, LayoutEntry> {
  const entries = new Map<string, LayoutEntry>();
  let order = 0;
  const visit = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    const attrs = (node as { attributes?: Record<string, unknown> }).attributes ?? {};
    for (const key of ["id", "identifier"]) {
      const value = attrs[key];
      if (typeof value === "string" && value.length > 0 && !entries.has(value)) {
        entries.set(value, { order: order++, bounds: parseBounds(attrs.bounds) });
      }
    }
    const children = (node as { children?: unknown }).children;
    if (Array.isArray(children)) for (const child of children) visit(child);
  };
  const roots = Array.isArray(raw) ? raw : [raw];
  for (const root of roots) visit(root);
  return entries;
}

function relativeOrder(reference: Map<string, LayoutEntry>, anchors: string[]): string {
  return anchors
    .map((anchor) => reference.get(anchor)?.order ?? -1)
    .filter((order) => order >= 0)
    .join(",");
}

function boundsDeltaVp(a: StructuralRect, b: StructuralRect, densityPixels: number): number {
  const scale = densityPixels > 0 ? densityPixels : 1;
  const delta = Math.max(
    Math.abs(a.left - b.left), Math.abs(a.top - b.top),
    Math.abs(a.right - b.right), Math.abs(a.bottom - b.bottom),
  );
  return delta / scale;
}

/**
 * 提取一个视觉 spec 里所有被契约声明引用的语义锚点(match.id / first.id / second.id)。
 * 结构性差分只对这些"有人管"的锚点做跨配置对比, 不拿布局树全集当对比对象——
 * 树里的系统节点/瞬态节点会让门禁变成噪声源。
 */
export function declaredSpecAnchors(spec: unknown): string[] {
  const anchors = new Set<string>();
  if (!spec || typeof spec !== "object") return [];
  const record = spec as Record<string, unknown>;
  const collectMatch = (match: unknown): void => {
    if (!match || typeof match !== "object") return;
    const id = (match as Record<string, unknown>).id;
    if (typeof id === "string" && id.length > 0) anchors.add(id);
  };
  const collectArray = (key: string, fn: (item: unknown) => void): void => {
    const value = record[key];
    if (Array.isArray(value)) for (const item of value) fn(item);
  };
  for (const key of ["roundedRectangles", "roundedOutlines", "colorProbes", "contrastProbes", "layoutContainments"]) {
    collectArray(key, (rule) => collectMatch((rule as Record<string, unknown> | undefined)?.match));
  }
  collectArray("layoutSeparations", (rule) => {
    const recordRule = rule as Record<string, unknown> | undefined;
    collectMatch(recordRule?.first);
    collectMatch(recordRule?.second);
  });
  return [...anchors].sort();
}

/**
 * 对比两棵布局树的声明锚点结构。基线与变体都取自 dumpLayout -a 的原始 JSON。
 * 对比锚点集 = 声明锚点(declaredAnchors, 推荐: 两个 spec 的 declaredSpecAnchors 并集)
 * 减 ignoreAnchors; 未声明 declaredAnchors 时退化为两棵树的语义 id 全集。
 */
export function diffStructuralLayout(baselineRaw: unknown, variantRaw: unknown,
  options: StructuralDiffOptions = {}): StructuralDiffResult {
  const baselineName = options.baselineName ?? "baseline";
  const variantName = options.variantName ?? "variant";
  const baselineAll = extractOrderedAnchors(baselineRaw);
  const variantAll = extractOrderedAnchors(variantRaw);
  const ignore = new Set(options.ignoreAnchors ?? []);
  const declared = options.declaredAnchors !== undefined
    ? options.declaredAnchors.filter((anchor) => !ignore.has(anchor))
    : [...new Set([...baselineAll.keys(), ...variantAll.keys()])].filter((anchor) => !ignore.has(anchor));

  const baseline = new Map([...baselineAll].filter(([anchor]) => declared.includes(anchor)));
  const variant = new Map([...variantAll].filter(([anchor]) => declared.includes(anchor)));

  const allAnchors = [...new Set([...declared, ...baseline.keys(), ...variant.keys()])].sort();
  const issues: StructuralIssue[] = [];

  const missing = allAnchors.filter((anchor) => !variant.has(anchor));
  const extra = allAnchors.filter((anchor) => !baseline.has(anchor));
  for (const anchor of missing) {
    issues.push({ id: "structural-missing-anchor",
      message: `${variantName} 缺少基线(${baselineName})锚点 '${anchor}'(深色/变体丢控件类回归)` });
  }
  for (const anchor of extra) {
    issues.push({ id: "structural-extra-anchor",
      message: `${variantName} 出现基线(${baselineName})没有的锚点 '${anchor}'(结构漂移, 若合法请在 ignoreAnchors 显式声明)` });
  }

  const shared = allAnchors.filter((anchor) => baseline.has(anchor) && variant.has(anchor));
  const baselineOrder = relativeOrder(baseline, shared);
  const variantOrder = relativeOrder(variant, shared);
  if (baselineOrder !== variantOrder) {
    issues.push({ id: "structural-order-changed",
      message: `锚点相对顺序改变: 基线[${baselineOrder}] 变体[${variantOrder}]` });
  }

  if (options.geometryInvariant === true) {
    if (!(options.densityPixels !== undefined && options.densityPixels > 0)) {
      issues.push({ id: "structural-config",
        message: "geometryInvariant 需要提供 densityPixels(px per vp) 才能把 px 容差换算成 vp" });
    } else {
      const toleranceVp = options.geometryToleranceVp ?? 1;
      for (const anchor of shared) {
        const baselineBounds = baseline.get(anchor)!.bounds;
        const variantBounds = variant.get(anchor)!.bounds;
        if (!baselineBounds || !variantBounds) {
          issues.push({ id: "structural-geometry-unavailable",
            message: `锚点 '${anchor}' 缺少可解析的 bounds, 无法做几何不变断言` });
          continue;
        }
        const deltaVp = boundsDeltaVp(baselineBounds, variantBounds, options.densityPixels);
        if (deltaVp > toleranceVp) {
          issues.push({ id: "structural-geometry-drift",
            message: `锚点 '${anchor}' 几何漂移 ${deltaVp.toFixed(2)}vp 超过容差 ${toleranceVp}vp: ` +
              `基线[${baselineBounds.left},${baselineBounds.top},${baselineBounds.right},${baselineBounds.bottom}] ` +
              `变体[${variantBounds.left},${variantBounds.top},${variantBounds.right},${variantBounds.bottom}]` });
        }
      }
    }
  }

  return {
    status: issues.length === 0 ? "passed" : "failed",
    comparedAnchors: shared.length,
    issues,
    summaryText: `structural-diff vs ${baselineName}: anchors=${shared.length}, ` +
      `issues=${issues.length}${issues.length > 0 ? " (" + issues.map((i) => i.id).join(",") + ")" : ""}`,
  };
}

/** 解析视觉 spec 的 structuralEquivalentTo 声明; 未声明返回 null。 */
export function parseStructuralEquivalence(spec: unknown): StructuralDiffOptions | null {
  if (!spec || typeof spec !== "object") return null;
  const declaration = (spec as { structuralEquivalentTo?: unknown }).structuralEquivalentTo;
  if (!declaration || typeof declaration !== "object") return null;
  const record = declaration as Record<string, unknown>;
  const baselineSpec = typeof record.spec === "string" ? record.spec.trim() : "";
  if (baselineSpec.length === 0) {
    throw new Error("structuralEquivalentTo.spec 必须命名基线检查点(spec name)");
  }
  return {
    baselineName: baselineSpec,
    ignoreAnchors: Array.isArray(record.ignoreAnchors)
      ? record.ignoreAnchors.filter((a): a is string => typeof a === "string")
      : [],
    geometryInvariant: record.geometryInvariant === true,
    geometryToleranceVp: typeof record.geometryToleranceVp === "number"
      ? record.geometryToleranceVp
      : undefined,
  };
}
