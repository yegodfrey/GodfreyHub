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

test("relative order is compared across differently nested trees", () => {
  const baseline = tree3([["a.first"], ["a.second"]]);
  const swapped = tree3([["a.second"], ["a.first"]]);
  assert.equal(structural.diffStructuralLayout(baseline, swapped).status, "failed");
  assert.equal(structural.diffStructuralLayout(baseline, tree3([["a.first"], ["a.second"]])).status, "passed");
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
