// 扫描面/输出面卫生回归（hubig 席 2026-10-11）:
//   1) smoke findEts 的 skip 集两臂——沙箱(.skeleton-smoke)与 Workspace 跳过 + 真实目标仍达;
//   2) static-inspect SKIP_DIRS 同型两臂;
//   3) static-rules 时长输出单位显式钉——单规则行 rule=<n>ms 与套件汇总行 wall=<n>s
//      token 级可区分。
// 全部 hermetic: 断言只用临时目录合成树, 不读任何外部仓库真实数据。
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { findEts, SMOKE_SKIP_DIRS } from "../scripts/smoke.mjs";
import { checkNativeDecls } from "../dist/core/static-inspect.js";
import { clearFileListCache, main } from "../scripts/static-rules.mjs";

function makeTempTree(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

// smoke.mjs 修前形状的独立复刻(仅作差分红臂: 证明夹具布局下修前遍历必然首选命中沙箱,
// 从而下面的行为断言有牙——skip 集回退即红)。
function legacyFindEts(root, skipNames) {
  const skip = new Set(skipNames);
  const walk = (dir, depth) => {
    if (depth < 0) return null;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && skip.has(entry.name)) continue;
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = walk(file, depth - 1);
        if (found) return found;
      } else if (entry.name.endsWith(".ets")) {
        return file;
      }
    }
    return null;
  };
  try { return walk(root, 8); } catch { return null; }
}

const LEGACY_SMOKE_SKIP = ["node_modules", "oh_modules", ".git", ".hvigor", "build", "ohosTest"];

test("smoke findEts: sandbox+Workspace skipped, real target still reached (both arms)", () => {
  const root = makeTempTree("gf-smoke-findets-");
  try {
    // 布局镜像真实家族仓根: 字母序 .skeleton-smoke < Workspace < apps，
    // 修前遍历必先入沙箱(红臂), 修后两处都不可入且 apps 仍可达(反向对照)。
    const sandboxEts = path.join(root, ".skeleton-smoke", "SkeletonSmoke-20261011-041412",
      "entry", "src", "main", "ets", "pages", "Sandbox.ets");
    fs.mkdirSync(path.dirname(sandboxEts), { recursive: true });
    fs.writeFileSync(sandboxEts, "@Entry\nstruct Sandbox {}\n");
    const wsEts = path.join(root, "Workspace", "tmp", "scratch.ets");
    fs.mkdirSync(path.dirname(wsEts), { recursive: true });
    fs.writeFileSync(wsEts, "// workspace scratch\n");
    const staleSkipEts = path.join(root, "node_modules", "stale.ets");
    fs.mkdirSync(path.dirname(staleSkipEts), { recursive: true });
    fs.writeFileSync(staleSkipEts, "// dependency noise\n");
    const realEts = path.join(root, "apps", "EchoBridge", "entry", "src", "main", "ets", "pages", "Index.ets");
    fs.mkdirSync(path.dirname(realEts), { recursive: true });
    fs.writeFileSync(realEts, "@Entry\nstruct Index {}\n");

    // 红臂(差分): 修前 skip 集在同一棵树上首选命中沙箱。
    const legacyHit = legacyFindEts(root, LEGACY_SMOKE_SKIP);
    assert.ok(legacyHit && legacyHit.includes(`${path.sep}.skeleton-smoke${path.sep}`),
      "fixture must be laid out so the pre-fix walker hits the sandbox first");

    // 臂1+臂2: 沙箱与 Workspace 跳过, 真实目标仍达且在盘。
    const hit = findEts(root);
    assert.ok(hit, "a real target must be found");
    assert.ok(!hit.includes(`${path.sep}.skeleton-smoke${path.sep}`),
      "rotated sandbox must be excluded from the smoke walk");
    assert.ok(!hit.includes(`${path.sep}Workspace${path.sep}`),
      "Workspace must be excluded from the smoke walk");
    assert.equal(hit, realEts, "the real app source file must still be reachable");
    assert.ok(fs.existsSync(hit), "returned target must exist on disk");

    // skip 集具名钉(双条目在场, 防静默摘除)。
    assert.ok(SMOKE_SKIP_DIRS.includes(".skeleton-smoke") && SMOKE_SKIP_DIRS.includes("Workspace"),
      "SMOKE_SKIP_DIRS must name both entries");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("static-inspect: sandbox+Workspace skipped, real module still checked (both arms)", () => {
  const root = makeTempTree("gf-static-inspect-");
  try {
    // 真实模块: 一个实现在 so 的声明 + 一个未实现(真违规)的声明。
    const realDts = path.join(root, "entry", "cpp", "types", "libdemo.d.ts");
    fs.mkdirSync(path.dirname(realDts), { recursive: true });
    fs.writeFileSync(realDts,
      "export declare function gfRealSync(): void;\nexport declare function gfGhost(): void;\n");
    const soFile = path.join(root, "entry", "libs", "arm64-v8a", "libdemo.so");
    fs.mkdirSync(path.dirname(soFile), { recursive: true });
    fs.writeFileSync(soFile, Buffer.from("ELF-stub gfRealSync\0"));

    // 噪音声明: 沙箱与 Workspace 各一条未实现声明——若 SKIP_DIRS 回退, 二者必入 findings(红)。
    const sandboxDts = path.join(root, ".skeleton-smoke", "SkeletonSmoke-20261011-041412",
      "entry", "cpp", "types", "libdemo.d.ts");
    fs.mkdirSync(path.dirname(sandboxDts), { recursive: true });
    fs.writeFileSync(sandboxDts, "export declare function gfSandbox(): void;\n");
    const wsDts = path.join(root, "Workspace", "tmp", "cpp", "types", "libws.d.ts");
    fs.mkdirSync(path.dirname(wsDts), { recursive: true });
    fs.writeFileSync(wsDts, "export declare function gfWorkspace(): void;\n");

    // 夹具有效性: 两条噪音声明满足 cpp/types 过滤且在盘——排除它们的唯一原因必须是 SKIP_DIRS。
    const inScanShape = (f) => f.includes(`${path.sep}cpp${path.sep}types${path.sep}`);
    assert.ok(fs.existsSync(sandboxDts) && inScanShape(sandboxDts),
      "sandbox decl must satisfy the native decl filter (red arm validity)");
    assert.ok(fs.existsSync(wsDts) && inScanShape(wsDts),
      "Workspace decl must satisfy the native decl filter (red arm validity)");

    const findings = checkNativeDecls(root);
    // 臂1: 沙箱与 Workspace 声明不入 findings。
    assert.equal(
      findings.filter((f) => /[\\/]\.skeleton-smoke[\\/]|[\\/]Workspace[\\/]/.test(f.file)).length, 0,
      "sandbox/Workspace declarations must be excluded from the scan surface");
    // 臂2: 真实模块仍被检查——唯一 finding 是真模块的未实现声明 gfGhost。
    assert.equal(findings.length, 1,
      "exactly the real module's unimplemented declaration must be reported");
    assert.equal(findings[0].function, "gfGhost");
    assert.ok(findings[0].file.endsWith(path.join("entry", "cpp", "types", "libdemo.d.ts")),
      "the finding must come from the real module");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

function captureStdout(fn) {
  const captured = [];
  const orig = process.stdout.write;
  process.stdout.write = (chunk) => { captured.push(String(chunk)); return true; };
  try {
    return { value: fn(), text: captured.join("") };
  } finally {
    process.stdout.write = orig;
  }
}

function writeTwoRuleTree(root) {
  fs.mkdirSync(path.join(root, "src"), { recursive: true });
  fs.writeFileSync(path.join(root, "src", "a.ets"), "GfButton\n");
  const rulesPath = path.join(root, "rules.json");
  fs.writeFileSync(rulesPath, JSON.stringify({
    schemaVersion: 1,
    rules: [
      { id: "shape.one", title: "t1", severity: "error",
        checks: [{ expect: "match", file: "src/**/*.ets", pattern: "GfButton" }] },
      { id: "shape.two", title: "t2", severity: "error",
        checks: [{ expect: "no-match", file: "src/**/*.ets", pattern: "NeverPresent" }] },
    ],
  }));
  return rulesPath;
}

test("static-rules text output pins unit-explicit tokens: per-rule rule=<n>ms vs summary wall=<n>s", () => {
  const root = makeTempTree("gf-static-rules-shape-");
  try {
    const rulesPath = writeTwoRuleTree(root);
    clearFileListCache();
    const { value: code, text } = captureStdout(() =>
      main(["--repo", root, "--rules", rulesPath]));
    assert.equal(code, 0);

    // 单规则行: 每条规则行恰带一个 rule=<n>ms token(毫秒单位显式)。
    const ruleTokens = text.match(/rule=\d+(?:\.\d+)?ms/g) ?? [];
    assert.equal(ruleTokens.length, 2, "each rule line must carry exactly one rule=<n>ms token");
    assert.ok(/  PASS  shape\.one rule=\d+(?:\.\d+)?ms\n/.test(text),
      "PASS line shape: '  PASS  <id> rule=<n>ms'");

    // 套件汇总行: wall=<n>s(秒单位显式), 且与 rule token 级可区分。
    const summaryLine = text.trimEnd().split("\n").pop();
    assert.ok(summaryLine.startsWith("static-rules:"),
      "summary line must stay the static-rules: prefix line");
    assert.match(summaryLine, /, wall=\d+(?:\.\d+)?s$/,
      "summary must end with an explicit wall=<n>s token");
    assert.ok(!/wall=\d+(?:\.\d+)?ms/.test(text),
      "the wall token must never render in milliseconds");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("static-rules --json exposes wallMs and per-rule durationMs", () => {
  const root = makeTempTree("gf-static-rules-json-");
  try {
    const rulesPath = writeTwoRuleTree(root);
    clearFileListCache();
    const { value: code, text } = captureStdout(() =>
      main(["--repo", root, "--rules", rulesPath, "--json"]));
    assert.equal(code, 0);
    const parsed = JSON.parse(text);
    assert.equal(typeof parsed.wallMs, "number");
    assert.ok(parsed.wallMs >= 0, "wallMs must be present");
    assert.equal(parsed.results.length, 2);
    for (const result of parsed.results) {
      assert.equal(typeof result.durationMs, "number",
        "each json result must carry durationMs");
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
