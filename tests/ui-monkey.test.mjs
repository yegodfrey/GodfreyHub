import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// ui-monkey.mjs 以 import.meta.url 判定是否直接执行, 测试导入不会触发设备访问。
const monkey = await import("../scripts/ui-monkey.mjs");

test("parseArgs applies documented defaults and rejects missing required args", () => {
  const args = monkey.parseArgs(["--pages", "p.json", "--bundle", "com.x"]);
  assert.equal(args.steps, 100);
  assert.equal(args.settleMs, 1200);
  assert.equal(args.maxUnknownSteps, 12);
  assert.ok(Number.isFinite(args.seed), "缺省 seed 由时间生成且为有限数");
  assert.throws(() => monkey.parseArgs(["--bundle", "com.x"]), /--pages/);
  assert.throws(() => monkey.parseArgs(["--pages", "p.json", "--bundle", "com.x", "--steps", "0"]), /--steps/);
  assert.throws(() => monkey.parseArgs(["--frobnicate"]), /unknown argument/);
});

function writeRegistry(dir, doc) {
  const file = path.join(dir, "pages.json");
  fs.writeFileSync(file, JSON.stringify(doc));
  return file;
}

test("loadPageRegistry enforces the declarative page contract strictly", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "monkey-registry-"));
  const valid = {
    schemaVersion: 1,
    app: "Clash",
    pages: [{ id: "home", identityAnchor: "clash.home.power", anchors: ["clash.home.power"] }],
    excludedAnchors: ["clash.window.close"],
  };
  const registry = monkey.loadPageRegistry(writeRegistry(dir, valid));
  assert.equal(registry.app, "Clash");
  assert.equal(registry.pages.length, 1);
  assert.ok(registry.excludedAnchors.has("clash.window.close"));

  assert.throws(() => monkey.loadPageRegistry(writeRegistry(dir, { ...valid, schemaVersion: 2 })), /schemaVersion/);
  assert.throws(() => monkey.loadPageRegistry(writeRegistry(dir, { schemaVersion: 1, app: "X", pages: [] })), /pages/);
  assert.throws(() => monkey.loadPageRegistry(writeRegistry(dir, {
    schemaVersion: 1, app: "X",
    pages: [{ identityAnchor: "a.b" }],
  })), /缺少 id/);
  assert.throws(() => monkey.loadPageRegistry(writeRegistry(dir, {
    schemaVersion: 1, app: "X",
    pages: [{ id: "home", identityAnchor: "a" }, { id: "home", identityAnchor: "b" }],
  })), /重复/);
});

test("mulberry32 is deterministic for a given seed", () => {
  const a = monkey.mulberry32(42);
  const b = monkey.mulberry32(42);
  const seqA = [a(), a(), a()];
  const seqB = [b(), b(), b()];
  assert.deepEqual(seqA, seqB);
  assert.ok(new Set(seqA).size > 1);
  assert.notDeepEqual(seqA, [monkey.mulberry32(43)(), 0, 0]);
});

test("analyzeLayout collects on-screen clickable nodes and semantic ids", () => {
  const raw = [{
    attributes: { bounds: "[0,0][1080,2400]" },
    children: [
      { attributes: { id: "a.card", bounds: "[0,0][1080,400]", clickable: "true" }, children: [] },
      { attributes: { id: "a.offscreen", bounds: "[0,3000][1080,3400]", clickable: "true" }, children: [] },
      { attributes: { id: "a.text", bounds: "[0,500][1080,600]" }, children: [] },
      { attributes: { bounds: "[10,700][200,760]", clickable: true }, children: [] },
    ],
  }];
  const layout = monkey.analyzeLayout(raw);
  assert.deepEqual([...layout.ids].sort(), ["a.card", "a.offscreen", "a.text"]);
  const ids = layout.clickables.map((node) => node.id).sort();
  // 离屏节点被视口裁剪; 无 id 的可点节点保留用于无目标探索。
  assert.deepEqual(ids, ["", "a.card"]);
  const card = layout.clickables.find((node) => node.id === "a.card");
  assert.equal(card.cx, 540);
  assert.equal(card.cy, 200);
});

test("pages may declare a selected-nav identity; exclusions support .* patterns", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "monkey-registry-"));
  const registry = monkey.loadPageRegistry(writeRegistry(dir, {
    schemaVersion: 1,
    app: "Stargaze",
    pages: [
      { id: "sky", identitySelectedAnchor: "stargaze.nav.tonight", anchors: [] },
      { id: "detail", identityAnchor: "stargaze.detail.close", anchors: ["stargaze.detail.close"] },
    ],
    excludedAnchors: ["stargaze.sky.gesturelayer"],
  }));
  assert.equal(registry.pages[0].identitySelectedAnchor, "stargaze.nav.tonight");
  assert.ok(registry.excludedAnchors.has("stargaze.sky.gesturelayer"));
  assert.deepEqual(registry.excludedPatterns, []);

  const withPatterns = monkey.loadPageRegistry(writeRegistry(dir, {
    schemaVersion: 1,
    app: "Quiz",
    pages: [{ id: "home", identitySelectedAnchor: "quiz.nav.home", anchors: [] }],
    excludedAnchors: ["quiz.library.taggroup.menu.*", "quiz.privacy.decline"],
  }));
  assert.deepEqual(withPatterns.excludedPatterns, ["quiz.library.taggroup.menu."]);
  assert.ok(withPatterns.excludedAnchors.has("quiz.privacy.decline"));

  // 两种身份形态都没有 -> 契约失败。
  assert.throws(() => monkey.loadPageRegistry(writeRegistry(dir, {
    schemaVersion: 1, app: "X", pages: [{ id: "p", anchors: [] }],
  })), /identityAnchor\/identitySelectedAnchor/);
});

test("main writes a violation and exits nonzero when the device is unreachable", () => {
  // 无设备环境下 dumpLayout 失败按违例出账——探索层不许静默消失。
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "monkey-run-"));
  const registry = writeRegistry(dir, {
    schemaVersion: 1,
    app: "Clash",
    pages: [{ id: "home", identityAnchor: "clash.home.power", anchors: [] }],
  });
  const code = monkey.main([
    "--pages", registry, "--bundle", "com.clash.app",
    "--steps", "1", "--seed", "7", "--out", path.join(dir, "out"),
  ]);
  assert.equal(code, 1);
  const violations = JSON.parse(fs.readFileSync(path.join(dir, "out", "violations.json"), "utf8"));
  assert.equal(violations.seed, 7);
  assert.ok(violations.violations.length > 0);
  const journal = fs.readFileSync(path.join(dir, "out", "journal.jsonl"), "utf8").trim().split("\n");
  assert.equal(JSON.parse(journal[0]).kind, "start");
  assert.equal(JSON.parse(journal[0]).seed, 7);
});
