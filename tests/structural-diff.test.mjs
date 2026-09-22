import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { PNG } from "pngjs";

const structural = await import("../dist/core/structural-diff.js");
const visual = await import("../dist/core/visual.js");

function writePng(file, width = 8, height = 8) {
  const png = new PNG({ width, height });
  for (let index = 0; index < png.data.length; index += 4) {
    png.data[index] = 200; png.data[index + 1] = 30; png.data[index + 2] = 30; png.data[index + 3] = 255;
  }
  fs.writeFileSync(file, PNG.sync.write(png));
}

function layout(pairs) {
  // pairs: [id, bounds?] 先序展开成一棵两层布局树
  return [{
    attributes: { bounds: "[0,0][100,200]" },
    children: pairs.map(([id, bounds]) => ({
      attributes: { id, ...(bounds ? { bounds } : {}) },
      children: [],
    })),
  }];
}

function tree3(pairs) {
  // 三层树: 根 -> 两个子树, 每个子树挂一个锚点
  return [{
    attributes: { bounds: "[0,0][100,200]" },
    children: [
      { attributes: { bounds: "[0,0][100,100]" }, children: pairs.slice(0, 1).map(([id]) => ({ attributes: { id }, children: [] })) },
      { attributes: { bounds: "[0,100][100,200]" }, children: pairs.slice(1).map(([id]) => ({ attributes: { id }, children: [] })) },
    ],
  }];
}

test("identical structures pass with shared anchor accounting", () => {
  const result = structural.diffStructuralLayout(
    layout([["a.home.card", "[0,0][100,50]"], ["a.home.power", "[0,60][100,100]"]]),
    layout([["a.home.card", "[0,0][100,50]"], ["a.home.power", "[0,60][100,100]"]]),
    { geometryInvariant: true, densityPixels: 3 },
  );
  assert.equal(result.status, "passed");
  assert.equal(result.comparedAnchors, 2);
  assert.equal(result.issues.length, 0);
});

test("a missing anchor in the variant is the dark-mode dropped-control failure", () => {
  const result = structural.diffStructuralLayout(
    layout([["a.home.card"], ["a.home.power"]]),
    layout([["a.home.card"]]),
    { declaredAnchors: ["a.home.card", "a.home.power"] },
  );
  assert.equal(result.status, "failed");
  assert.equal(result.issues.length, 1);
  assert.equal(result.issues[0].id, "structural-missing-anchor");
  assert.match(result.issues[0].message, /a\.home\.power/);
});

test("declaredAnchors restrict comparison to contracted anchors, not the whole tree", () => {
  const baseline = layout([["a.home.card"], ["a.home.power"], ["system.transient.node"]]);
  const variant = layout([["a.home.card"], ["a.home.power"]]);
  // system.transient.node 不在任何声明里 -> 不产生 missing; 全集模式才会报。
  const declared = structural.diffStructuralLayout(baseline, variant,
    { declaredAnchors: ["a.home.card", "a.home.power"] });
  assert.equal(declared.status, "passed");
  const fullSet = structural.diffStructuralLayout(baseline, variant);
  assert.equal(fullSet.status, "failed");
});

test("an extra anchor is a structural drift that demands an explicit exemption", () => {
  const result = structural.diffStructuralLayout(
    layout([["a.home.card"]]),
    layout([["a.home.card"], ["a.home.banner"]]),
    { declaredAnchors: ["a.home.card", "a.home.banner"] },
  );
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["structural-extra-anchor"]);
  assert.equal(
    structural.diffStructuralLayout(
      layout([["a.home.card"]]),
      layout([["a.home.card"], ["a.home.banner"]]),
      { declaredAnchors: ["a.home.card", "a.home.banner"], ignoreAnchors: ["a.home.banner"] },
    ).status,
    "passed",
  );
});

test("order contract is scoped to sibling sets: cross-subtree swaps are outside it", () => {
  // 拍板项三裁决(2026-09-21): 顺序契约只看同父兄弟序。a.first/a.second 分属两棵子树
  // (不同父), 整棵子树换位使它们的跨子树先后翻转——不属本契约, 不判红。
  // (旧实现按全树出现序列比较, 会把这种形状误红。)
  const baseline = tree3([["a.first"], ["a.second"]]);
  const swapped = tree3([["a.second"], ["a.first"]]);
  const result = structural.diffStructuralLayout(baseline, swapped);
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
  assert.ok(!result.issues.some((issue) => issue.id === "structural-order-changed"));
});

test("a same-parent swap inside a nested subtree is still an order change", () => {
  // 同父判定跟深度无关: 两个锚点在同一子树容器下互为兄弟, 左右互换必须红。
  const nested = (first, second) => [{
    attributes: { bounds: "[0,0][100,200]" },
    children: [{
      attributes: { bounds: "[0,0][100,100]" },
      children: [{ attributes: { id: first }, children: [] }, { attributes: { id: second }, children: [] }],
    }],
  }];
  const result = structural.diffStructuralLayout(
    nested("a.first", "a.second"), nested("a.second", "a.first"));
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["structural-order-changed"]);
});

test("sibling-membership change (container split) is not an order issue", () => {
  // 基线里 a.home.card 与 a.home.power 同父; 变体把 a.home.power 挪进一个新容器
  // (不再同父)。该对只在一边同父 => 不判顺序; 两锚点双边都在 => 也没有 missing/extra。
  const baseline = layout([["a.home.card"], ["a.home.power"]]);
  const split = [{
    attributes: { bounds: "[0,0][100,200]" },
    children: [
      { attributes: { id: "a.home.card" }, children: [] },
      { attributes: { bounds: "[0,60][100,100]" },
        children: [{ attributes: { id: "a.home.power" }, children: [] }] },
    ],
  }];
  const result = structural.diffStructuralLayout(baseline, split,
    { declaredAnchors: ["a.home.card", "a.home.power"] });
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
});

test("absolute pre-order shift from new leading nodes stays relative-order equivalent (Goread navigator-dark)", () => {
  // Goread v2 改名回归事实链: 变体深色布局树在契约锚点之前多出 8 个带 id 节点,
  // 所有契约锚点的绝对先序序号整体后移, 但相对次序未变 -> 不得判 structural-order-changed。
  const declared = ["a.home.card", "a.home.power"];
  const baseline = layout([["chrome.tab.1"], ["chrome.tab.2"], ["a.home.card"], ["a.home.power"]]);
  const shifted = layout([
    "v2.splash.logo", "v2.nav.rail", "v2.banner.slot", "v2.pill.1",
    "v2.pill.2", "v2.pill.3", "v2.pill.4", "v2.pill.5",
    "a.home.card", "a.home.power",
  ].map((id) => [id]));
  const result = structural.diffStructuralLayout(baseline, shifted, { declaredAnchors: declared });
  assert.equal(result.status, "passed");
  assert.equal(result.comparedAnchors, 2);
  assert.ok(!result.issues.some((issue) => issue.id === "structural-order-changed"),
    "an absolute pre-order shift must not be reported as an order change");
});

test("a real reordering of shared anchors is still a structural failure", () => {
  // 三个锚点都是根的兄弟: power/footer 换位 = 同父兄弟序翻转, 必须红;
  // 报文按对给出双方该对的次序, 可诊断性与旧全树序列报文等价。
  const result = structural.diffStructuralLayout(
    layout([["a.home.card"], ["a.home.power"], ["a.home.footer"]]),
    layout([["a.home.card"], ["a.home.footer"], ["a.home.power"]]),
  );
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["structural-order-changed"]);
  assert.match(result.issues[0].message, /锚点相对顺序改变/);
  assert.match(result.issues[0].message, /基线\[a\.home\.power,a\.home\.footer\]/);
  assert.match(result.issues[0].message, /变体\[a\.home\.footer,a\.home\.power\]/);
});

test("a new node inserted mid-tree does not disturb the relative order of the surviving pairs", () => {
  // 变体在 a.home.card 与 a.home.power 之间插入新节点: 契约锚点两两先后关系不变 -> 通过。
  const declared = ["a.home.card", "a.home.power"];
  const baseline = layout([["a.home.card"], ["a.home.power"]]);
  const midInsert = layout([["a.home.card"], ["v2.new.section"], ["a.home.power"]]);
  const exempt = structural.diffStructuralLayout(baseline, midInsert,
    { declaredAnchors: declared });
  assert.equal(exempt.status, "passed");
  // 同一插入若被纳入对比集合: 只按"多出锚点"显式失败, 不得顺带报顺序改变。
  const contracted = structural.diffStructuralLayout(baseline, midInsert,
    { declaredAnchors: [...declared, "v2.new.section"] });
  assert.deepEqual(contracted.issues.map((issue) => issue.id), ["structural-extra-anchor"]);
});

test("extractOrderedAnchors records parent paths that scope the sibling sets", () => {
  // 同父判定的底座: 根锚点与子树锚点、不同窗口根下的锚点各自不同父。
  // 路径字面量是树内实现细节, 契约只承诺"相等 ⟺ 同父"。
  const entries = structural.extractOrderedAnchors([{
    attributes: { id: "win.root" },
    children: [
      { attributes: { id: "a.direct" }, children: [] },
      { attributes: { bounds: "[0,0][10,10]" },
        children: [{ attributes: { id: "a.nested" }, children: [] }] },
    ],
  }, {
    attributes: { id: "win.second" },
    children: [{ attributes: { id: "a.other.window" }, children: [] }],
  }]);
  const parentOf = (id) => entries.get(id).parentPath;
  assert.notEqual(parentOf("a.direct"), parentOf("a.nested"), "深度不同的两枚锚点不同父");
  assert.notEqual(parentOf("win.root"), parentOf("a.direct"), "父与子不同父");
  assert.notEqual(parentOf("a.direct"), parentOf("a.other.window"), "不同窗口根下的锚点不同父");
  assert.equal(typeof parentOf("a.direct"), "string");
});

test("diff result carries measured orders and bounds for offline evaluation", () => {
  // 测量值(不参与判定): 出现序列 / 同父对数 / 双方 bounds 原文, 供判定相离线复评。
  const result = structural.diffStructuralLayout(
    layout([["a.home.card", "[0,0][100,50]"], ["a.home.power", "[0,60][100,100]"]]),
    layout([["v2.new"], ["a.home.card", "[0,0][100,50]"], ["a.home.power", "[0,60][100,100]"]]),
    { declaredAnchors: ["a.home.card", "a.home.power"] },
  );
  assert.equal(result.status, "passed");
  assert.equal(result.comparedAnchors, 2);
  assert.equal(result.siblingPairs, 1, "共同锚点里只有 card/power 一对同父");
  assert.equal(result.baselineOrder, "a.home.card,a.home.power");
  assert.equal(result.variantOrder, "a.home.card,a.home.power");
  assert.deepEqual(result.sharedAnchorBounds, [
    { anchor: "a.home.card", baseline: "[0,0][100,50]", variant: "[0,0][100,50]" },
    { anchor: "a.home.power", baseline: "[0,60][100,100]", variant: "[0,60][100,100]" },
  ]);
});

test("geometry drift is measured in vp against densityPixels and honors tolerance", () => {
  const baseline = layout([["a.card", "[0,0][300,150]"]]);
  const drifted = layout([["a.card", "[0,4][300,154]"]]); // 4px = 1.33vp @3x
  const strict = structural.diffStructuralLayout(baseline, drifted,
    { geometryInvariant: true, densityPixels: 3, geometryToleranceVp: 1 });
  assert.equal(strict.status, "failed");
  assert.equal(strict.issues[0].id, "structural-geometry-drift");
  assert.match(strict.issues[0].message, /1\.33vp/);
  const lenient = structural.diffStructuralLayout(baseline, drifted,
    { geometryInvariant: true, densityPixels: 3, geometryToleranceVp: 1.5 });
  assert.equal(lenient.status, "passed");
});

test("geometryInvariant without densityPixels is a configuration error, not a silent pass", () => {
  const result = structural.diffStructuralLayout(
    layout([["a.card"]]), layout([["a.card"]]), { geometryInvariant: true });
  assert.equal(result.status, "failed");
  assert.equal(result.issues[0].id, "structural-config");
});

test("declaredSpecAnchors collects match ids from every rule family", () => {
  const anchors = structural.declaredSpecAnchors({
    roundedRectangles: [{ match: { id: "a.card" } }],
    colorProbes: [{ match: { id: "a.badge" } }],
    layoutContainments: [{ match: { id: "a.card" } }, { match: { id: "a.footer" } }],
    layoutSeparations: [{ first: { id: "a.card" }, second: { id: "a.footer" } }],
  });
  assert.deepEqual(anchors, ["a.badge", "a.card", "a.footer"]);
  assert.deepEqual(structural.declaredSpecAnchors({}), []);
});

test("compareVisualSpec merges structural issues into the visual report", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "structural-diff-"));
  const variantLayoutFile = path.join(dir, "variant.json");
  const baselineLayoutFile = path.join(dir, "baseline.json");
  const spec = {
    schemaVersion: 1,
    name: "clash-home-dark",
    version: 1,
    components: ["GfStatusCard"],
    states: ["dark-theme", "fresh-home"],
    layoutContainments: [{
      id: "variant-containment",
      match: { id: "a.home.card", exact: true },
    }],
    structuralEquivalentTo: { spec: "clash-home-layout", geometryInvariant: true },
  };
  const baselineSpec = {
    schemaVersion: 1,
    name: "clash-home-layout",
    version: 1,
    components: ["GfStatusCard"],
    states: ["fresh-home"],
    layoutSeparations: [{
      id: "baseline-separation",
      first: { id: "a.home.card", exact: true },
      second: { id: "a.home.extra", exact: true },
      axis: "vertical",
      minGap: 8,
    }],
  };
  const specPath = path.join(dir, "clash-home-dark.json");
  fs.writeFileSync(specPath, JSON.stringify(spec));
  const baselineSpecPath = path.join(dir, "clash-home-layout.json");
  fs.writeFileSync(baselineSpecPath, JSON.stringify(baselineSpec));
  const actualPath = path.join(dir, "actual.png");
  writePng(actualPath);
  // 声明锚点并集 = {a.home.card, a.home.extra}。基线两颗都在且几何确定。
  fs.writeFileSync(baselineLayoutFile, JSON.stringify(
    layout([["a.home.card", "[0,0][300,150]"], ["a.home.extra", "[0,158][300,200]"]])));

  // 变体两颗都在且几何一致 -> 无结构性 issue(containment 对 [0,0][100,200] 视口会报
  // 非结构性 issue, 不影响本断言)。
  fs.writeFileSync(variantLayoutFile, JSON.stringify(
    layout([["a.home.card", "[0,0][300,150]"], ["a.home.extra", "[0,158][300,200]"]])));
  const passed = visual.compareVisualSpec({
    specPath, actualPath,
    layoutPath: variantLayoutFile,
    outputDir: path.join(dir, "out-pass"),
    structuralBaselineSpecPath: baselineSpecPath,
    structuralBaselineLayoutPath: baselineLayoutFile,
    structuralDensityPixels: 3,
  });
  assert.ok(!passed.issues.some((issue) => issue.id.startsWith("structural-")),
    "equal structures on declared anchors must not raise structural issues");
  // 结构测量值随报告出账(离线可评): 出现序列与双方 bounds 都在, 即使判定为 passed。
  const structuralMeasurement = passed.measurements.find((m) => m.kind === "structural-equivalence");
  assert.ok(structuralMeasurement, "structural-equivalence measurement must be reported");
  assert.equal(structuralMeasurement.scored, true);
  assert.equal(structuralMeasurement.id, "clash-home-layout");
  assert.equal(structuralMeasurement.values.siblingPairs, 1);
  assert.equal(structuralMeasurement.values.baselineOrder, "a.home.card,a.home.extra");
  assert.equal(structuralMeasurement.values.variantOrder, "a.home.card,a.home.extra");
  assert.match(String(structuralMeasurement.values.anchorBounds), /a\.home\.card baseline=\[0,0\]\[300,150\] variant=\[0,0\]\[300,150\]/);

  // 变体丢了 a.home.extra -> 深色模式丢控件类回归被结构性差分钉住。
  fs.writeFileSync(variantLayoutFile, JSON.stringify(layout([["a.home.card", "[0,0][300,150]"]])));
  const failed = visual.compareVisualSpec({
    specPath, actualPath,
    layoutPath: variantLayoutFile,
    outputDir: path.join(dir, "out-fail"),
    structuralBaselineSpecPath: baselineSpecPath,
    structuralBaselineLayoutPath: baselineLayoutFile,
    structuralDensityPixels: 3,
  });
  assert.equal(failed.status, "failed");
  assert.ok(failed.issues.some((issue) => issue.id === "structural-missing-anchor"));
  const report = JSON.parse(fs.readFileSync(path.join(dir, "out-fail", "visual-report.json"), "utf8"));
  assert.ok(report.issues.some((issue) => issue.id === "structural-missing-anchor"));

  // 声明了等价却不给基线: 编排错误, 显式失败而非静默跳过。
  const missingBaseline = visual.compareVisualSpec({
    specPath, actualPath,
    layoutPath: variantLayoutFile,
    outputDir: path.join(dir, "out-nobaseline"),
  });
  assert.ok(missingBaseline.issues.some((issue) => issue.id === "structural-baseline-missing"));
});

test("parseStructuralEquivalence rejects a declaration without a baseline spec", () => {
  assert.throws(() => structural.parseStructuralEquivalence({ structuralEquivalentTo: {} }),
    /spec/);
  assert.equal(structural.parseStructuralEquivalence({}), null);
  const parsed = structural.parseStructuralEquivalence({
    structuralEquivalentTo: { spec: "clash-home-layout", geometryInvariant: true },
  });
  assert.equal(parsed.baselineName, "clash-home-layout");
  assert.equal(parsed.geometryInvariant, true);
});
