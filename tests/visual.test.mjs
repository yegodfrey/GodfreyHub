import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { PNG } from "pngjs";

import { compareVisualSpec } from "../dist/core/visual.js";

function writePng(file, rounded) {
  const image = new PNG({ width: 80, height: 50 });
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const i = (y * image.width + x) * 4;
      const insideBox = x >= 10 && x < 70 && y >= 10 && y < 40;
      const cornerCenters = [[18, 18], [62, 18], [18, 32], [62, 32]];
      const cornerRegion = (x < 18 || x >= 62) && (y < 18 || y >= 32);
      const nearest = cornerCenters.reduce((best, point) => Math.min(best,
        Math.hypot(x - point[0], y - point[1])), Number.POSITIVE_INFINITY);
      const cornerCut = rounded && insideBox && cornerRegion && nearest > 8;
      const surface = insideBox && !cornerCut;
      image.data[i] = surface ? 30 : 240;
      image.data[i + 1] = surface ? 80 : 240;
      image.data[i + 2] = surface ? 140 : 240;
      image.data[i + 3] = 255;
    }
  }
  fs.writeFileSync(file, PNG.sync.write(image));
}

function fixture(rounded) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-visual-"));
  const actual = path.join(root, "actual.png");
  const layout = path.join(root, "layout.json");
  const spec = path.join(root, "spec.json");
  writePng(actual, rounded);
  fs.writeFileSync(layout, JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [{ attributes: { id: "quiz.statistics.scope", bounds: "[10,10][70,40]" }, children: [] }],
  }));
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    roundedRectangles: [{
      id: "radius", match: { id: "quiz.statistics.scope", exact: true },
      radiusRatio: 0.25, sampleInsetRatio: 0.025,
      minSurfaceDelta: 2, minCornerSeparation: 1, requiredCorners: 4,
    }],
  }));
  return { root, actual, layout, spec };
}

function writeOutlinePng(file, rounded) {
  const image = new PNG({ width: 80, height: 50 });
  const insideRounded = (x, y, left, top, right, bottom, radius) => {
    if (x < left || x >= right || y < top || y >= bottom) return false;
    const cx = Math.max(left + radius, Math.min(right - radius - 1, x));
    const cy = Math.max(top + radius, Math.min(bottom - radius - 1, y));
    return Math.hypot(x - cx, y - cy) <= radius;
  };
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const i = (y * image.width + x) * 4;
      const outer = rounded
        ? insideRounded(x, y, 10, 10, 70, 40, 8)
        : x >= 10 && x < 70 && y >= 10 && y < 40;
      const inner = rounded
        ? insideRounded(x, y, 12, 12, 68, 38, 6)
        : x >= 12 && x < 68 && y >= 12 && y < 38;
      const stroke = outer && !inner;
      image.data[i] = stroke ? 210 : 240;
      image.data[i + 1] = stroke ? 45 : 240;
      image.data[i + 2] = stroke ? 35 : 240;
      image.data[i + 3] = 255;
    }
  }
  fs.writeFileSync(file, PNG.sync.write(image));
}

function outlineFixture(rounded) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-visual-outline-"));
  const actual = path.join(root, "actual.png");
  const layout = path.join(root, "layout.json");
  const spec = path.join(root, "spec.json");
  writeOutlinePng(actual, rounded);
  fs.writeFileSync(layout, JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [{ attributes: { id: "button.outline", bounds: "[10,10][70,40]" }, children: [] }],
  }));
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    roundedOutlines: [{
      id: "outline-radius", match: { id: "button.outline", exact: true },
      radiusRatio: 0.25, strokeSearchRatio: 0.04, cornerClearRatio: 0.04,
      minStrokeDelta: 12, requiredEdges: 4, requiredCorners: 4,
    }],
  }));
  return { root, actual, layout, spec };
}

test("visual shape contract accepts four rendered rounded corners", () => {
  const f = fixture(true);
  const result = compareVisualSpec({ specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report") });
  assert.equal(result.status, "passed");
  assert.equal(result.summary.passed, 1);
  assert.ok(fs.existsSync(result.reportJson));
});

test("visual shape contract rejects a square rendering", () => {
  const f = fixture(false);
  const result = compareVisualSpec({ specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report") });
  assert.equal(result.status, "failed");
  assert.match(result.issues[0].message, /corners/);
});

test("outlined shape contract accepts visible edge strokes and four rounded arcs", () => {
  const f = outlineFixture(true);
  const result = compareVisualSpec({ specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report") });
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
});

test("outlined shape contract rejects a square outline", () => {
  const f = outlineFixture(false);
  const result = compareVisualSpec({ specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report") });
  assert.equal(result.status, "failed");
  assert.match(result.issues[0].message, /corners/);
});

test("baseline contract binds exact dimensions and mismatch budget", () => {
  const f = fixture(true);
  const baseline = path.join(f.root, "baseline.png");
  writePng(baseline, false);
  fs.writeFileSync(f.spec, JSON.stringify({
    schemaVersion: 1,
    baselineImage: "baseline.png",
    tolerance: { pixelDelta: 0, maxMismatchRatio: 0 },
    ignoreRegions: [],
  }));
  const result = compareVisualSpec({ specPath: f.spec, actualPath: f.actual, outputDir: path.join(f.root, "report") });
  assert.equal(result.status, "failed");
  assert.ok(result.summary.mismatchRatio > 0);
});

test("semantic color probe accepts an infrared-red surface", () => {
  const f = fixture(true);
  fs.writeFileSync(f.spec, JSON.stringify({
    schemaVersion: 1,
    colorProbes: [{
      id: "infrared", match: { id: "quiz.statistics.scope", exact: true },
      sample: { xRatio: 0.5, yRatio: 0.5, radiusRatio: 0.08 },
      dominantChannel: "red", minChannel: 20, minDominance: 10,
    }],
  }));
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "report"),
  });
  assert.equal(result.status, "failed", "the blue fixture must not satisfy a red night-vision probe");

  const image = PNG.sync.read(fs.readFileSync(f.actual));
  for (let y = 10; y < 40; y++) {
    for (let x = 10; x < 70; x++) {
      const i = (y * image.width + x) * 4;
      image.data[i] = 90;
      image.data[i + 1] = 12;
      image.data[i + 2] = 10;
    }
  }
  fs.writeFileSync(f.actual, PNG.sync.write(image));
  const infrared = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "infrared-report"),
  });
  assert.equal(infrared.status, "passed", JSON.stringify(infrared.issues));
});

test("layout containment rejects a semantic control that leaves the captured viewport", () => {
  const f = fixture(true);
  fs.writeFileSync(f.spec, JSON.stringify({
    schemaVersion: 1,
    layoutContainments: [{
      id: "search-in-viewport",
      match: { id: "quiz.statistics.scope", exact: true },
      minWidthRatio: 0.5,
    }],
  }));
  const inside = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "inside-report"),
  });
  assert.equal(inside.status, "passed", JSON.stringify(inside.issues));

  const layout = JSON.parse(fs.readFileSync(f.layout, "utf8"));
  layout.children[0].attributes.bounds = "[10,10][90,40]";
  fs.writeFileSync(f.layout, JSON.stringify(layout));
  const outside = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "outside-report"),
  });
  assert.equal(outside.status, "failed");
  assert.match(outside.issues[0].message, /leave viewport/);
});

test("layout separation rejects title and search bounds that overlap", () => {
  const f = fixture(true);
  fs.writeFileSync(f.layout, JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [
      { attributes: { id: "title", bounds: "[5,10][35,40]" }, children: [] },
      { attributes: { id: "search", bounds: "[40,10][75,40]" }, children: [] },
    ],
  }));
  fs.writeFileSync(f.spec, JSON.stringify({
    schemaVersion: 1,
    layoutSeparations: [{
      id: "title-search-gap",
      first: { id: "title", exact: true },
      second: { id: "search", exact: true },
      axis: "horizontal",
      minGap: 4,
    }],
  }));
  const separated = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "separated-report"),
  });
  assert.equal(separated.status, "passed", JSON.stringify(separated.issues));

  const layout = JSON.parse(fs.readFileSync(f.layout, "utf8"));
  layout.children[1].attributes.bounds = "[30,10][75,40]";
  fs.writeFileSync(f.layout, JSON.stringify(layout));
  const overlapping = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "overlap-report"),
  });
  assert.equal(overlapping.status, "failed");
  assert.match(overlapping.issues[0].message, /overlap/);
});

// ── C05 contrastProbes：正样本(高对比文字)过，负样本(低对比文字)红 ──────────────
function writeContrastPng(file, lowContrast) {
  const image = new PNG({ width: 80, height: 50 });
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const i = (y * image.width + x) * 4;
      const insideBox = x >= 10 && x < 70 && y >= 10 && y < 40;
      const textPixel = insideBox && y >= 22 && y < 28 && x >= 16 && x < 64;
      // 背景 240 灰；文字为深灰(高对比)或中灰(低对比)。
      const value = textPixel ? (lowContrast ? 200 : 20) : 240;
      image.data[i] = value;
      image.data[i + 1] = value;
      image.data[i + 2] = value;
      image.data[i + 3] = 255;
    }
  }
  fs.writeFileSync(file, PNG.sync.write(image));
}

test("contrast probes pass high-contrast text and reject low-contrast text", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-visual-contrast-"));
  const layout = path.join(root, "layout.json");
  const spec = path.join(root, "spec.json");
  fs.writeFileSync(layout, JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [{ attributes: { id: "home.title", bounds: "[10,10][70,40]" }, children: [] }],
  }));
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    contrastProbes: [{
      id: "title-contrast", match: { id: "home.title", exact: true },
      minRatio: 4.5,
    }],
  }));
  const good = path.join(root, "good.png");
  const bad = path.join(root, "bad.png");
  writeContrastPng(good, false);
  writeContrastPng(bad, true);
  const passing = compareVisualSpec({
    specPath: spec, actualPath: good, layoutPath: layout,
    outputDir: path.join(root, "good-report"),
  });
  assert.equal(passing.status, "passed", JSON.stringify(passing.issues));
  const failing = compareVisualSpec({
    specPath: spec, actualPath: bad, layoutPath: layout,
    outputDir: path.join(root, "bad-report"),
  });
  assert.equal(failing.status, "failed");
  assert.match(failing.issues[0].message, /contrast .* is below the required/);
});

// ── C09 darkRenderProbes：D-1 时序门——退役探针只测量不计分 ────────────────────
// 死规则②/vacuity gate 的比较器侧落地(2026-09-21): 没有 themeDeltas 不给主题维度计分。
// "这一屏平均偏黑"曾是深色契约的全部断言(空探针), C09 已迁至 themeDeltas(锚定成对+阈值);
// 本组钉住三件事: 只声明退役探针的 spec 封不出 passed / 探针测量值照记(scored=false) /
// 测量值绝不进 checks, 无论画面偏黑还是纯白都不改变 status。
function writeDarkPng(file, variant) {
  const image = new PNG({ width: 80, height: 50 });
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const i = (y * image.width + x) * 4;
      // 背景近黑；variant=empty 全黑无内容，variant=white 大面积纯白。
      let value = 8;
      if (variant === "content" && x >= 30 && x < 50 && y >= 20 && y < 30) value = 120;
      if (variant === "white") value = 255;
      image.data[i] = value;
      image.data[i + 1] = value;
      image.data[i + 2] = value;
      image.data[i + 3] = 255;
    }
  }
  fs.writeFileSync(file, PNG.sync.write(image));
}

test("a spec whose only declaration is the retired dark-render probe has no executable checks", () => {
  // 空探针封不出 passed: 退役探针不占检查位后, 只带它的 spec 没有任何可执行检查, 显式失败。
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-visual-dark-"));
  const spec = path.join(root, "spec.json");
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    darkRenderProbes: [{ id: "dark-non-empty" }],
  }));
  const actual = path.join(root, "content.png");
  writeDarkPng(actual, "content");
  assert.throws(() => compareVisualSpec({
    specPath: spec, actualPath: actual, outputDir: path.join(root, "report"),
  }), /no executable checks/);
});

test("retired dark-render probes report measurements without scoring", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-visual-dark-"));
  // 退役探针与一个真检查位(layoutContainments)同场: 测量值随报告出账但不进 checks,
  // 画面偏黑(content)与纯白(white)两种测量结果都不改变判定。
  const spec = path.join(root, "spec.json");
  const layout = path.join(root, "layout.json");
  fs.writeFileSync(layout, JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [{ attributes: { id: "quiz.statistics.scope", bounds: "[10,10][70,40]" }, children: [] }],
  }));
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    darkRenderProbes: [{ id: "dark-non-empty" }],
    layoutContainments: [{ id: "stay-in-frame", match: { id: "quiz.statistics.scope", exact: true } }],
  }));
  const run = (name, variant) => {
    const actual = path.join(root, `${name}.png`);
    writeDarkPng(actual, variant);
    return compareVisualSpec({
      specPath: spec, actualPath: actual, layoutPath: layout,
      outputDir: path.join(root, `${name}-report`),
    });
  };
  const content = run("content", "content");
  const white = run("white", "white");
  assert.equal(content.status, "passed", JSON.stringify(content.issues));
  assert.equal(white.status, "passed", JSON.stringify(white.issues),
    "纯白画面是离线判读的输入, 不再是比较器的红——主题计分只认 themeDeltas");
  assert.equal(content.summary.themeAxis, "notDeclared", "没声明 themeDeltas, 主题维度不参与计分");
  assert.equal(content.summary.checks, 1, "退役探针不占检查位, 只剩 layoutContainment 一个检查位");
  const measurement = content.measurements.find((entry) => entry.kind === "dark-render");
  assert.ok(measurement, "dark-render measurement must be reported");
  assert.equal(measurement.scored, false);
  assert.match(String(measurement.note), /退役/);
  assert.ok(measurement.values.medianLuma < 0.2,
    `dark content median luma must read dark, got ${measurement.values.medianLuma}`);
  const whiteMeasurement = white.measurements.find((entry) => entry.kind === "dark-render");
  assert.ok(whiteMeasurement.values.medianLuma > 0.9, "纯白画面的测量值必须与暗色内容可区分");
  assert.equal(content.summary.checks, white.summary.checks, "测量值差异不得改变计分");
});

// —— themeDeltas：主题位移判定（C09 的新牙，§E-7 时序门的生产侧）——
//
// 判据是"位移量"而不是绝对阈值：同一锚点在深色变体帧与同场浅色基线帧上各取中位色，
// 两帧一致（主题轴没动）必须红。变异样本按四个失败口各钉一条：位移不足、通道超限、
// 基线缺席（编排红）、锚点缺失（声明错误）。
function writeThemePng(file, surfaceRgb) {
  const image = new PNG({ width: 80, height: 50 });
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const i = (y * image.width + x) * 4;
      const insideBox = x >= 10 && x < 70 && y >= 10 && y < 40;
      const [r, g, b] = insideBox ? surfaceRgb : [128, 128, 128];
      image.data[i] = r;
      image.data[i + 1] = g;
      image.data[i + 2] = b;
      image.data[i + 3] = 255;
    }
  }
  fs.writeFileSync(file, PNG.sync.write(image));
}

function themeFixture(variantRgb, baselineRgb, themeDeltas) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-theme-"));
  const actual = path.join(root, "actual.png");
  const baseline = path.join(root, "baseline.png");
  const layout = path.join(root, "layout.json");
  const spec = path.join(root, "spec.json");
  writeThemePng(actual, variantRgb);
  writeThemePng(baseline, baselineRgb);
  fs.writeFileSync(layout, JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [{ attributes: { id: "quiz.statistics.scope", bounds: "[10,10][70,40]" }, children: [] }],
  }));
  fs.writeFileSync(spec, JSON.stringify({ schemaVersion: 1, themeDeltas }));
  return { root, actual, baseline, layout, spec };
}

const anchoredPair = (extra = {}) => [{
  id: "theme-shift", match: { id: "quiz.statistics.scope", exact: true },
  comparedTo: "quiz-statistics", ...extra,
}];

test("theme delta accepts an anchored pair whose luma moved at least the documented default", () => {
  const f = themeFixture([30, 80, 140], [240, 240, 240], anchoredPair());
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report"),
    themeBaselineActualPath: f.baseline,
  });
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
  assert.equal(result.summary.themeAxis, "scored", "配对在场, 主题维度真实计分");
  const measurement = result.measurements.find((entry) => entry.kind === "theme-delta");
  assert.ok(measurement, "theme-delta measurement must be reported");
  assert.equal(measurement.scored, true);
  assert.ok(Number(measurement.values.lumaShift) >= 0.06, `measured shift, got ${measurement.values.lumaShift}`);
  assert.match(String(measurement.values.baselineRgb), /^240,240,240$/);
});

test("theme delta rejects a variant whose anchor did not move against the light capture", () => {
  // 深色帧与浅色帧完全一致 = 主题轴没动这一锚点 = 正是"浅色注入下拍深色检查点"的假绿形态。
  const f = themeFixture([240, 240, 240], [240, 240, 240], anchoredPair());
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report"),
    themeBaselineActualPath: f.baseline,
  });
  assert.equal(result.status, "failed");
  assert.match(result.issues[0].message, /theme shift .* below the required/);
});

test("theme delta honors a per-pair maxChannelDelta sampling cap", () => {
  // 位移下限满足（luma 动了），但红绿通道差超过声明上限 = 锚点两侧不是同一内容在翻色。
  const f = themeFixture([30, 80, 140], [240, 240, 240],
    anchoredPair({ minMedianLumaShift: 0.01, maxChannelDelta: 100 }));
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report"),
    themeBaselineActualPath: f.baseline,
  });
  assert.equal(result.status, "failed");
  assert.match(result.issues[0].message, /exceeds the sampling cap/);
});

test("theme deltas without a same-campaign light capture fail as theme-baseline-missing", () => {
  const f = themeFixture([30, 80, 140], [240, 240, 240], anchoredPair());
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report"),
  });
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["theme-baseline-missing"]);
  assert.equal(result.summary.checks, 1, "声明的每一条配对都占一个检查位");
  assert.equal(result.summary.themeAxis, "unpaired", "声明了配对但没拿到基线, 主题维度没有计分资格");
  // "本轮判不了"不等于"什么都没量到": 变体侧锚点采样值照记(scored=false), 离线可评。
  const measurement = result.measurements.find((entry) => entry.kind === "theme-delta");
  assert.ok(measurement);
  assert.equal(measurement.scored, false);
  assert.equal(measurement.values.baselineRgb, undefined, "没拿到基线就不得伪造基线测量值");
  assert.match(String(measurement.values.variantRgb), /^30,80,140$/);
});

test("theme delta rejects a declared anchor that is missing from the layout", () => {
  const f = themeFixture([30, 80, 140], [240, 240, 240],
    anchoredPair().map((rule) => ({ ...rule, match: { id: "quiz.statistics.missing", exact: true } })));
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout, outputDir: path.join(f.root, "report"),
    themeBaselineActualPath: f.baseline,
  });
  assert.equal(result.status, "failed");
  assert.match(result.issues[0].message, /semantic node is missing or not unique/);
});

// —— C15 containmentProbes：整树包含扫描（R1 溢出窗口 + R2 溢出容器）——
//
// 判据真源在 GFSoftware family/ui-dump-diagnostics.mjs 的 R1/R2（src/core/visual.ts 的
// containmentScanCheck 是执行面副本，同步自该真源）。parity 钉：本组四个夹具的几何与期望
// 判定**逐字对齐** family/tests/ui-dump-diagnostics.test.mjs 的 R1/R2 hermetic 用例
// （1080×2400 视口；R2 正样本右溢 540；scroll-reachable 豁免；系统浮层窗口归属）——
// 两侧都 hermetic，任何一边改判据或改夹具几何，对应一侧的测试当场红。
function containmentFixture(layout) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-containment-"));
  const actual = path.join(root, "actual.png");
  const layoutPath = path.join(root, "layout.json");
  const spec = path.join(root, "spec.json");
  writePng(actual, true);
  fs.writeFileSync(layoutPath, JSON.stringify(layout));
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    containmentProbes: [{ id: "tree.containment" }],
  }));
  return { root, actual, layoutPath, spec };
}

function runContainment(layout) {
  const f = containmentFixture(layout);
  return compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layoutPath,
    outputDir: path.join(f.root, "report"),
  });
}

const viewportNode = () => ({ attributes: { id: "root", bounds: "[0,0][1080,2400]" } });

test("containment parity: overflow beyond a clip ancestor is red with node id and both bounds", () => {
  // 对齐 family R2 正样本：clip 祖先 [0,0][540,2400]，子节点 [0,0][1080,200] 右溢 540px；
  // 子节点对视口四边都在界内（1080 ≤ 1080）→ 只有容器红，没有窗口红。
  const layout = viewportNode();
  layout.children = [{
    attributes: { type: "Column", bounds: "[0,0][540,2400]", clip: "true" },
    children: [{ attributes: { type: "Image", bounds: "[0,0][1080,200]" } }],
  }];
  const result = runContainment(layout);
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["tree.containment.container"]);
  assert.match(result.issues[0].message,
    /node 'Image#2' bounds \[0,0\]\[1080,200\] exceed clip ancestor 'Column#1' bounds \[0,0\]\[540,2400\]/);
  assert.match(result.issues[0].message, /right=540px/);
});

test("containment parity: leaving the viewport is red even without a clip ancestor", () => {
  // 对齐 family R1 正样本：无任何 clip 祖先的节点 [1000,100][1200,200] 右越视口。
  const layout = viewportNode();
  layout.children = [{ attributes: { type: "Column", bounds: "[1000,100][1200,200]" } }];
  const result = runContainment(layout);
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["tree.containment.window"]);
  assert.match(result.issues[0].message,
    /node 'Column#1' bounds \[1000,100\]\[1200,200\] leave viewport \[0,0\]\[1080,2400\]/);
  assert.match(result.issues[0].message, /right=120px/);
});

test("containment parity: scroll-reachable exempts the container scan but not the window scan", () => {
  // 对齐 family R2 豁免样本：scrollable+clip 祖先 [0,0][540,2400]，子 [0,0][1080,3280] ——
  // 容器扫描被 scroll-reachable 豁免拦下（滚动即见），但 R1 对视口的下越界照红：
  // 窗口判据没有滚动豁免是**真源语义**，不是本仓的自由发挥。
  const layout = viewportNode();
  layout.children = [{
    attributes: { type: "Scroll", bounds: "[0,0][540,2400]", clip: "true", scrollable: "true" },
    children: [{ attributes: { type: "Column", bounds: "[0,0][1080,3280]" } }],
  }];
  const result = runContainment(layout);
  assert.equal(result.status, "failed");
  assert.deepEqual(result.issues.map((issue) => issue.id), ["tree.containment.window"]);
  assert.match(result.issues[0].message, /bottom=880px/);
});

test("containment parity: invisible nodes, foreign windows and unclipped parents are not facts", () => {
  // 对齐 family R1/R2 豁免样本 + "chip.right > popup.right" 形态：非 clip 的 popup 祖先
  // 对越出它的子节点不构成 R2 事实（R2 只判 clip 祖先）；invisible 与系统浮层窗口
  // （hostWindowId 按语义锚点最多的 '28' 归属为应用窗口，'99' 是浮层）全部豁免 → passed。
  const layout = viewportNode();
  layout.children = [
    { attributes: { type: "Column", bounds: "[100,100][400,200]", visible: "false" } },
    { attributes: { type: "Column", id: "app.a", bounds: "[100,100][400,200]", hostWindowId: "28" } },
    { attributes: { type: "Column", id: "app.b", bounds: "[100,100][400,200]", hostWindowId: "28" } },
    { attributes: { type: "Overlay", id: "system.ball", bounds: "[100,100][400,200]", hostWindowId: "99" } },
    { attributes: { type: "Popup", bounds: "[20,300][340,520]", clip: "false" },
      children: [{ attributes: { type: "Image", id: "popup.chip", bounds: "[300,480][380,540]" } }] },
  ];
  const result = runContainment(layout);
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
  assert.equal(result.summary.checks, 2, "一条声明 = 窗口扫描 + 容器扫描两个检查位");
});

test("checkpoints without containmentProbes gain no containment checks", () => {
  // 未声明即不启用（显式声明的转正纪律）：比较器对存量 spec 的行为逐字节不变。
  const f = fixture(true);
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: f.layout,
    outputDir: path.join(f.root, "report"),
  });
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
  assert.equal(result.summary.checks, 1);
});

test("containment scan fails loudly when the declared tree has no parsable viewport", () => {
  // 空探针纪律：声明了扫描而视口判据解析不了 = 显式失败，绝不静默当绿。
  const layout = viewportNode();
  layout.attributes.bounds = "not-a-rect";
  assert.throws(() => runContainment(layout), /invalid viewport bounds/);
});
