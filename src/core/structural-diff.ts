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
// 语义(按轴适用性): 锚点集合相等 + 同父兄弟相对次序相等对 theme/locale/字号轴都成立;
// 几何不变只对 theme/字号成立——locale 必然改变文本度量, 禁止跨语言断言几何。
//
// 顺序契约的精确形状(2026-09-21 拍板项三裁决, 本文件是语义真源):
//   只比较"同一父节点下"(兄弟集合内)锚点对的左右次序; 同父下 A 在 B 前/后的关系
//   不变即不红。三个由此派生的不判红形态, 各有更合适的把守者:
//     - 绝对先序序号整体漂移(Goread v2 深色树前置新增 id 节点): 相对次序未变, 不红;
//     - 非同父锚点对(不同子树)的先后翻转(整棵子树换位): 不属本契约, 不红;
//     - 兄弟集合成员变化(容器拆分/合并使 A、B 在一棵树同父另一棵不同父): 该对不判,
//       由 missing/extra-anchor 与几何断言各自把守。

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
  /** 测量值(离线可评, 不参与判定): 共同锚点在双方树中的出现序列与同父判定对数。 */
  baselineOrder: string;
  variantOrder: string;
  siblingPairs: number;
  /** 测量值(离线可评, 不参与判定): 共同锚点双方原始 bounds 字符串(解析不出则缺该侧)。 */
  sharedAnchorBounds: { anchor: string; baseline?: string; variant?: string }[];
}

export interface LayoutEntry { order: number; parentPath: string; bounds: StructuralRect | undefined }

function parseBounds(text: unknown): StructuralRect | undefined {
  if (typeof text !== "string") return undefined;
  const match = text.match(/^\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]$/);
  if (!match) return undefined;
  const [left, top, right, bottom] = match.slice(1).map(Number);
  return { left, top, right, bottom };
}

/**
 * 先序遍历提取带顺序/父路径/几何的语义锚点; 同一 anchor 以首个出现为准。
 * parentPath 是**父节点**的结构路径(子索引串): 同一父节点下的锚点(兄弟集合)共享同一条;
 * 不同窗口根各配一个独立虚父, 跨窗口锚点不同父。路径字面量只在一棵树内部做相等比较,
 * 从不跨树比较——上方插入节点会平移路径, 但"这两枚锚点是否同父"的树内判定不受影响。
 */
export function extractOrderedAnchors(raw: unknown): Map<string, LayoutEntry> {
  const entries = new Map<string, LayoutEntry>();
  let order = 0;
  const visit = (node: unknown, ownPath: string, parentPath: string): void => {
    if (!node || typeof node !== "object") return;
    const attrs = (node as { attributes?: Record<string, unknown> }).attributes ?? {};
    for (const key of ["id", "identifier"]) {
      const value = attrs[key];
      if (typeof value === "string" && value.length > 0 && !entries.has(value)) {
        entries.set(value, { order: order++, parentPath, bounds: parseBounds(attrs.bounds) });
      }
    }
    const children = (node as { children?: unknown }).children;
    if (Array.isArray(children)) {
      children.forEach((child, index) => visit(child, `${ownPath}.${index}`, ownPath));
    }
  };
  const roots = Array.isArray(raw) ? raw : [raw];
  roots.forEach((root, windowIndex) => visit(root, `w${windowIndex}`, `r${windowIndex}`));
  return entries;
}

/**
 * siblingOrderPairs 语义(2026-09-21 拍板项三裁决, 最终形状):
 * 只登记"同一父节点下"(兄弟集合内)锚点对的左右次序, 不比较绝对先序序号。
 * 历史: 原实现按绝对序号判等, Goread v2 改名(HAP 20c556d0→41b3b711)后深色布局树
 * 多出 6-8 个带 id 节点把所有锚点绝对序号整体后移, "顺序未变"被误判为 changed,
 * 撤销一条合法 passed 收据; 第一轮修复(8ed29f053)改为比较共同锚点的全树出现序列,
 * 解决了绝对漂移但仍是全树序——跨子树先后(整棵子树换位)会被误红。
 * 最终语义(见文件头): 同父下 A 在 B 前/后的关系不变即不红。返回
 * key="字典序小id|字典序大id", value=字典序小的锚点在该树中是否先出现;
 * 调用方保证 anchors 均存在于 reference。判定: 某对在两树都登记为同父且方向相反
 * 才红; 只在一棵树同父的对(容器拆分/合并)不判, 交给 missing/extra/几何把守。
 */
function siblingOrderPairs(reference: Map<string, LayoutEntry>,
  anchors: string[]): Map<string, boolean> {
  const byParent = new Map<string, string[]>();
  for (const anchor of anchors) {
    const entry = reference.get(anchor);
    if (!entry) continue;
    const group = byParent.get(entry.parentPath) ?? [];
    group.push(anchor);
    byParent.set(entry.parentPath, group);
  }
  const pairs = new Map<string, boolean>();
  for (const group of byParent.values()) {
    const ordered = [...group].sort((a, b) => reference.get(a)!.order - reference.get(b)!.order);
    for (let i = 0; i < ordered.length; i++) {
      for (let j = i + 1; j < ordered.length; j++) {
        const first = ordered[i]!, second = ordered[j]!;
        const [lesser, greater] = first < second ? [first, second] : [second, first];
        pairs.set(`${lesser}|${greater}`, first === lesser);
      }
    }
  }
  return pairs;
}

/** bounds 测量值原文(离线可评), 与布局树 attributes.bounds 同一形状。 */
function rectText(rect: StructuralRect): string {
  return `[${rect.left},${rect.top}][${rect.right},${rect.bottom}]`;
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
  // 顺序判定(见文件头与 siblingOrderPairs 注): 只红"两树都同父且方向相反"的对。
  const baselinePairs = siblingOrderPairs(baseline, shared);
  const variantPairs = siblingOrderPairs(variant, shared);
  const flipped: string[] = [];
  for (const [pairKey, baselineLesserFirst] of baselinePairs) {
    const variantLesserFirst = variantPairs.get(pairKey);
    if (variantLesserFirst === undefined || variantLesserFirst === baselineLesserFirst) continue;
    const [lesser, greater] = pairKey.split("|");
    const baselineOrder = baselineLesserFirst ? `${lesser},${greater}` : `${greater},${lesser}`;
    const variantOrder = baselineLesserFirst ? `${greater},${lesser}` : `${lesser},${greater}`;
    flipped.push(`'${pairKey.replace("|", "'/'")}' 基线[${baselineOrder}] 变体[${variantOrder}]`);
  }
  if (flipped.length > 0) {
    issues.push({ id: "structural-order-changed",
      message: `锚点相对顺序改变(同父兄弟序): ${flipped.join("; ")}` });
  }

  // 测量值(离线可评, 不参与判定): 出现序列 / 同父对数 / 双方 bounds 原文。
  const anchorOrderBy = (tree: Map<string, LayoutEntry>): string =>
    [...shared].sort((a, b) => tree.get(a)!.order - tree.get(b)!.order).join(",");
  const baselineMeasuredOrder = anchorOrderBy(baseline);
  const variantMeasuredOrder = anchorOrderBy(variant);
  const sharedAnchorBounds = shared.map((anchor) => ({
    anchor,
    ...(baseline.get(anchor)!.bounds
      ? { baseline: rectText(baseline.get(anchor)!.bounds!) } : {}),
    ...(variant.get(anchor)!.bounds
      ? { variant: rectText(variant.get(anchor)!.bounds!) } : {}),
  }));

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
      `siblingPairs=${baselinePairs.size}, ` +
      `issues=${issues.length}${issues.length > 0 ? " (" + issues.map((i) => i.id).join(",") + ")" : ""}`,
    baselineOrder: baselineMeasuredOrder,
    variantOrder: variantMeasuredOrder,
    siblingPairs: baselinePairs.size,
    sharedAnchorBounds,
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
