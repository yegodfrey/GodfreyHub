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

// ── C09 darkRenderProbes：暗色非空过，纯黑洞(无内容)与大面积纯白都红 ────────────
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

test("dark render probes accept dark content and reject void or white-flash renders", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-visual-dark-"));
  const spec = path.join(root, "spec.json");
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    darkRenderProbes: [{ id: "dark-non-empty" }],
  }));
  const run = (name, variant) => compareVisualSpec({
    specPath: spec, actualPath: path.join(root, `${name}.png`),
    outputDir: path.join(root, `${name}-report`),
  });
  fs.writeFileSync(path.join(root, "content.png"), (() => {
    const image = new PNG({ width: 80, height: 50 });
    writeDarkPng(path.join(root, "content.png"), "content");
    return fs.readFileSync(path.join(root, "content.png"));
  })());
  const content = run("content");
  assert.equal(content.status, "passed", JSON.stringify(content.issues));

  fs.writeFileSync(path.join(root, "void.png"), (() => {
    writeDarkPng(path.join(root, "void.png"), "empty");
    return fs.readFileSync(path.join(root, "void.png"));
  })());
  const voided = run("void");
  assert.equal(voided.status, "failed");
  assert.match(voided.issues[0].message, /looks empty/);

  fs.writeFileSync(path.join(root, "white.png"), (() => {
    writeDarkPng(path.join(root, "white.png"), "white");
    return fs.readFileSync(path.join(root, "white.png"));
  })());
  const white = run("white");
  assert.equal(white.status, "failed");
  assert.match(white.issues[0].message, /median luma|near-white/);
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
