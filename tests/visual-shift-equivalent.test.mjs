// M16 shift-verbose 双轨（GFSoftware BOARD §M·建议 M16，调度席代裁 2026-10-10）比较器侧钉。
//
// 判据真源 src/core/visual.ts（JUDGE_CRITERIA_VERSION=3）：baselineImage 轴的原始像素判距
// 仍是唯一主判据；仅当原始红已成立时跑窗口原点归一平移搜索（±N px 网格，同判距同
// ignoreRegions）。本套件把四条边界钉死：
//   ① 反向对照：actual == baseline ⇒ passed 且无 shift 字段——归一通道没有资格碰绿；
//   ② 能红双臂 a（位移夹具，合成图复制+平移 8px，禁真截图）⇒ 旧判红的新档
//      shift-equivalent + offset=(8,0)，归一比值回预算内，且**不是** passed；
//   ③ 能红双臂 b（内容差异夹具，改像素值不平移）⇒ 两通道都红：仍 baseline 红原样、
//      无 shift 字段；
//   ④ 红占优：位移被归一解释但同场另有内容断言红 ⇒ 整体仍 failed——shift-equivalent
//      issue 无权把别的红投成绿。
// GFSoftware 侧消费判定（driver 的 auto-repin proposal / pins 的新档欠账腿）由
// family/tests/shift-equivalent-consumption.test.mjs 对偶钉（两仓各一，注释互指）。
//
// 夹具全部程序合成（pngjs 现画）：纯色背景 + 纯色矩形，零抗锯齿，位移/改值的像素账
// 可手算（各 test 头注给出账本）。绝不读取任何真实设备截图。

import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { PNG } from "pngjs";

import { compareVisualSpec, JUDGE_CRITERIA_VERSION } from "../dist/core/visual.js";

const WIDTH = 80, HEIGHT = 50;
const BACKGROUND = { r: 240, g: 240, b: 240, a: 255 };
const SURFACE = { r: 30, g: 80, b: 140, a: 255 };
const REPAINT = { r: 200, g: 60, b: 60, a: 255 };

/** 在纯色背景上画一个 [left,right)×[top,bottom) 的纯色矩形（区域外全背景）。 */
function paint(image, left, top, right, bottom, color) {
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      const i = (y * image.width + x) * 4;
      const inside = x >= left && x < right && y >= top && y < bottom;
      const pixel = inside ? color : BACKGROUND;
      image.data[i] = pixel.r;
      image.data[i + 1] = pixel.g;
      image.data[i + 2] = pixel.b;
      image.data[i + 3] = pixel.a;
    }
  }
}

function rectImage(left, top, repaintLeftHalf = false) {
  const image = new PNG({ width: WIDTH, height: HEIGHT });
  paint(image, left, top, left + 40, top + 26, SURFACE);
  if (repaintLeftHalf) paint(image, left, top, left + 20, top + 26, REPAINT);
  return image;
}

function fixture(baselinePng, actualPng, specExtra = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-shift-"));
  const baseline = path.join(root, "baseline.png");
  const actual = path.join(root, "actual.png");
  fs.writeFileSync(baseline, PNG.sync.write(baselinePng));
  fs.writeFileSync(actual, PNG.sync.write(actualPng));
  const spec = path.join(root, "spec.json");
  fs.writeFileSync(spec, JSON.stringify({
    schemaVersion: 1,
    baselineImage: "baseline.png",
    tolerance: { pixelDelta: 0, maxMismatchRatio: 0.05, shiftSearchRadius: 8 },
    ignoreRegions: [],
    ...specExtra,
  }));
  return { root, baseline, actual, spec };
}

function run(f) {
  return compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, outputDir: path.join(f.root, "report"),
  });
}

test("criteria version 3 carries the shift-verbose dual-track semantics", () => {
  assert.equal(JUDGE_CRITERIA_VERSION, 3);
});

test("identical pair stays passed with no shift channel (normalization can never touch green)", () => {
  const f = fixture(rectImage(20, 12), rectImage(20, 12));
  const result = run(f);
  assert.equal(result.status, "passed", JSON.stringify(result.issues));
  assert.equal(result.summary.shift, undefined);
  assert.equal(result.summary.mismatchRatio, 0);
});

test("8px translated copy flips the old red into shift-equivalent with offset (8,0)", () => {
  // 像素账：矩形 [20,60)→[28,68)，raw 失配 = 新旧矩形各 8 列错位带 2×8×26=416 ⇒ 10.4% > 5%；
  // 在 (8,0) 处 actual(x,y) 与 baseline(x-8,y) 逐像素相等 ⇒ 归一比值 0 ≤ 5%。
  const f = fixture(rectImage(20, 12), rectImage(28, 12));
  const result = run(f);
  assert.equal(result.status, "shift-equivalent", JSON.stringify(result.issues));
  assert.notEqual(result.status, "passed", "shift-equivalent is a new tier, never a green");
  assert.equal(result.issues.length, 1);
  assert.equal(result.issues[0].id, "shift-equivalent");
  assert.match(result.issues[0].message, /offset \(8,0\)/);
  assert.match(result.issues[0].message, /repin is proposed/, "the message proposes a repin, applies none");
  const shift = result.summary.shift;
  assert.ok(shift, "shift-equivalent verdict must carry the shift reading");
  assert.equal(shift.offsetX, 8);
  assert.equal(shift.offsetY, 0);
  assert.equal(shift.normalizedRatio, 0);
  assert.ok(shift.rawMismatchRatio > 0.05, "raw channel stays the primary judge and stays red");
  assert.equal(shift.searchRadiusPx, 8);
  // 落盘的 report JSON 与返回值同档（消费方读的是盘上那份）。
  const persisted = JSON.parse(fs.readFileSync(path.join(f.root, "report", "visual-report.json"), "utf8"));
  assert.equal(persisted.status, "shift-equivalent");
  assert.equal(persisted.summary.shift.offsetX, 8);
});

test("vertical 4px translation resolves as shift-equivalent with offset (0,4)", () => {
  const f = fixture(rectImage(20, 12), rectImage(20, 16));
  const result = run(f);
  assert.equal(result.status, "shift-equivalent", JSON.stringify(result.issues));
  assert.equal(result.summary.shift.offsetX, 0);
  assert.equal(result.summary.shift.offsetY, 4);
});

test("repainted content (no translation) stays a hard red on both channels", () => {
  // 像素账：矩形位置不动，左半 20×26=520 像素改值 ⇒ 13% > 5%；任何 ±8px 平移都无法对齐
  // 内部改值，归一比值只会更差 ⇒ 仍 baseline 红，无 shift 字段。
  const f = fixture(rectImage(20, 12), rectImage(20, 12, true));
  const result = run(f);
  assert.equal(result.status, "failed");
  assert.equal(result.issues.length, 1);
  assert.equal(result.issues[0].id, "baseline");
  assert.match(result.issues[0].message, /mismatch ratio/);
  assert.equal(result.summary.shift, undefined);
});

test("a resolved shift cannot outvote an independent content red (red dominance)", () => {
  // 位移可归一 + 布局包含断言独立红 ⇒ 整体 failed；shift-equivalent issue 只代表自己。
  const layout = path.join("layout.json");
  const f = fixture(rectImage(20, 12), rectImage(28, 12));
  fs.writeFileSync(path.join(f.root, layout), JSON.stringify({
    attributes: { id: "root", bounds: "[0,0][80,50]" },
    children: [{ attributes: { id: "quiz.statistics.scope", bounds: "[70,10][90,40]" }, children: [] }],
  }));
  fs.writeFileSync(f.spec, JSON.stringify({
    schemaVersion: 1,
    baselineImage: "baseline.png",
    tolerance: { pixelDelta: 0, maxMismatchRatio: 0.05, shiftSearchRadius: 8 },
    ignoreRegions: [],
    layoutContainments: [{
      id: "scope-in-viewport",
      match: { id: "quiz.statistics.scope", exact: true },
    }],
  }));
  const result = compareVisualSpec({
    specPath: f.spec, actualPath: f.actual, layoutPath: path.join(f.root, layout),
    outputDir: path.join(f.root, "report"),
  });
  assert.equal(result.status, "failed");
  const ids = result.issues.map((issue) => issue.id).sort();
  // layout-containment 的 issue id 取规则声明的 id（比较器 String(rule.id ?? "layout-containment")）。
  assert.deepEqual(ids, ["scope-in-viewport", "shift-equivalent"]);
});
