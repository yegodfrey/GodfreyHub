import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  buildUxPipelineArgs, execUxPipeline, normalizeUxSummary, resolveUxServiceRoot, runUxPipeline,
} from "../dist/core/hn-ux.js";
import { hnUxTools } from "../dist/tools/hn-ux.js";

// hn_ux_audit 回归: 全部 hermetic——归一化用内联 fixture, 脚本执行用 node stub +
// 临时技能根(经 opts.interpreter/root 注入), 不碰设备、不读真实上游脚本、不依赖 python。

// ux_summary.json 口径: summarize_ux_results 的 items[{code, subRuleName, testState, issues...}]。
test("normalizeUxSummary maps the five test_state values and takes the worst for overall", () => {
  const verdict = normalizeUxSummary({
    counts: { "0": 1, "1": 1, "2": 1, "4": 1, "5": 1 },
    items: [
      { code: "UTS.0101", subRuleName: "字重", testState: 0 },
      { code: "UTS.0201", subRuleName: "间距", testState: 1, issues: 2 },
      { code: "UTS.0305", testState: 2 },
      { code: "UTS.0310", testState: 4 },
      { code: "UTS.0311", testState: 5 },
    ],
  });

  assert.equal(verdict.overall, "error");
  assert.deepEqual(verdict.rules.map((r) => r.verdict),
    ["pass", "issue", "not_applicable", "blocked", "error"]);
  assert.deepEqual(verdict.rules.map((r) => r.testState), [0, 1, 2, 4, 5]);
  assert.deepEqual(verdict.rules.map((r) => r.ruleId),
    ["UTS.0101", "UTS.0201", "UTS.0305", "UTS.0310", "UTS.0311"]);
  assert.equal(verdict.rules[1].issues, 2);
  assert.deepEqual(verdict.notApplicable, [verdict.rules[2]]);
});

test("overall degrades stepwise: blocked, then issue, then pass with not_applicable only", () => {
  const blocked = normalizeUxSummary({ items: [{ code: "A", testState: 0 }, { code: "B", testState: 4 }] });
  const issue = normalizeUxSummary({ items: [{ code: "A", testState: 2 }, { code: "B", testState: 1 }] });
  const pass = normalizeUxSummary({ items: [{ code: "A", testState: 0 }, { code: "B", testState: 2 }] });

  assert.equal(blocked.overall, "blocked");
  assert.equal(issue.overall, "issue");
  assert.equal(pass.overall, "pass");
  assert.deepEqual(pass.notApplicable.map((r) => r.ruleId), ["B"]);
});

test("UTS.0306/UTS.0300 get reclassified, but genuine passes stay untouched", () => {
  const reclassified = normalizeUxSummary({
    items: [
      { code: "UTS.0306", testState: 4 },
      { code: "UTS.0300", testState: 1, issues: 3 },
    ],
  });

  assert.deepEqual(reclassified.rules[0], {
    ruleId: "UTS.0306", testState: 4, verdict: "not_applicable",
    reason: "capture_mode_lacks_font_metadata",
  });
  assert.deepEqual(reclassified.rules[1], {
    ruleId: "UTS.0300", testState: 1, verdict: "blocked", issues: 3,
    reason: "foreground_state_invalid",
    hint: "先 app_control start 使目标页前台再重试",
  });
  // 归类吞掉了原始 test_state 的 issue/blocked, 0306 不再把 overall 拖下水
  assert.deepEqual(reclassified.notApplicable, [reclassified.rules[0]]);
  assert.equal(normalizeUxSummary({ items: [{ code: "UTS.0306", testState: 4 }] }).overall, "pass");
  assert.equal(normalizeUxSummary({ items: [{ code: "UTS.0300", testState: 1 }] }).overall, "blocked");

  // 引擎真实报 pass 说明前台/场景有效, 特例不做反向改判
  const passed = normalizeUxSummary({ items: [{ code: "UTS.0306", testState: 0 }, { code: "UTS.0300", testState: 0 }] });
  assert.deepEqual(passed.rules.map((r) => [r.ruleId, r.verdict]),
    [["UTS.0306", "pass"], ["UTS.0300", "pass"]]);
  assert.equal(passed.rules[0].reason, undefined);
});

test("normalizeUxSummary also accepts the raw ux_result.json array shape", () => {
  const verdict = normalizeUxSummary([
    { code: "UTS.0501", test_state: 1, detail: { Issues: [{}, {}] } },
    { code: "UTS.0502", test_state: 0, detail: {} },
  ]);

  assert.equal(verdict.overall, "issue");
  assert.equal(verdict.rules[0].testState, 1);
  assert.equal(verdict.rules[0].issues, 2);
  assert.equal(verdict.rules[1].issues, undefined);
});

test("pipeline argv builders forward the real script flags per subcommand", () => {
  assert.deepEqual(buildUxPipelineArgs({ action: "doctor" }), ["doctor", "--json"]);
  // doctor/capture-audit 支持 --hdc(显式规避上游 env:HDC 候选链缺陷), audit 不支持
  assert.deepEqual(buildUxPipelineArgs({ action: "doctor", hdc: "C:/h/hdc.exe" }),
    ["doctor", "--json", "--hdc", "C:/h/hdc.exe"]);
  assert.deepEqual(buildUxPipelineArgs({ action: "doctor", hdc: null }), ["doctor", "--json"]);
  // --ux-service-root 是公共参数(源码 add_common_arguments), doctor 提前返回也要带上
  assert.deepEqual(buildUxPipelineArgs({ action: "doctor", uxServiceRoot: "D:/ux/uts" }),
    ["doctor", "--json", "--ux-service-root", "D:/ux/uts"]);

  assert.deepEqual(buildUxPipelineArgs({
    action: "capture-audit",
    target: "127.0.0.1:10001",
    artifactDir: "D:/tmp/ux",
    bundle: "com.example.app",
    testCodes: ["7.1.1.2.1", "7.1.2.6.1"],
    language: "en",
    uxServiceRoot: "D:/ux/uts",
  }), [
    "capture-audit", "--json",
    "--ux-service-root", "D:/ux/uts",
    "--target", "127.0.0.1:10001",
    "--artifact-dir", "D:/tmp/ux",
    "--bundle", "com.example.app",
    "--test-code", "7.1.1.2.1",
    "--test-code", "7.1.2.6.1",
    "--language", "en",
  ]);

  assert.deepEqual(buildUxPipelineArgs({
    action: "audit",
    target: "127.0.0.1:10001", // audit 子命令没有 --target, 不转发
    artifactDir: "D:/tmp/ux",
    evidenceSummary: "D:/tmp/ux/summary.json",
    language: "zh",
    uxServiceRoot: "D:/ux/uts",
  }), [
    "audit", "--json",
    "--ux-service-root", "D:/ux/uts",
    "--artifact-dir", "D:/tmp/ux",
    "--language", "zh",
    "--evidence-summary", "D:/tmp/ux/summary.json",
  ]);

  assert.deepEqual(buildUxPipelineArgs({
    action: "audit",
    artifactDir: "D:/tmp/ux",
    layout: "D:/tmp/layout.json",
    screenshot: "D:/tmp/screen.png",
  }), [
    "audit", "--json",
    "--artifact-dir", "D:/tmp/ux",
    "--language", "zh",
    "--layout", "D:/tmp/layout.json",
    "--screenshot", "D:/tmp/screen.png",
  ]);
});

// 临时技能根: SKILL.md + scripts/ux_audit_pipeline.py(node stub, 临时目录无 package.json 走 CJS)。
// stub 按子命令分派: doctor 回 allowed; audit 在 --bundle=com.blocked.case 时回 blocked(exit 2),
// 否则写 ux_summary.json(含 UTS.0300 特例与 testState=5, 故意让 resultCounts 与规则明细不一致,
// 以证明 overall 取自 ux_summary.json 而非顶层 counts 兜底)并回 audited payload。
const STUB = `
const fs = require("node:fs");
const path = require("node:path");
const argv = process.argv.slice(2);
const cmd = argv[0];
const flag = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : undefined; };
if (cmd === "doctor") {
  // 回显 argv: execUxPipeline 转发契约用断言收口(经注入解释器→进程 argv 全程核对)。
  process.stdout.write(JSON.stringify({ decision: "allowed", operation: "ux.capture-audit.doctor", argv }));
  process.exit(0);
}
if (cmd === "audit") {
  if (flag("--bundle") === "com.blocked.case") {
    process.stdout.write(JSON.stringify({
      decision: "blocked",
      error: "layout JSON is required for UX audit",
      missingConfig: ["layout"],
    }));
    process.exit(2);
  }
  const dir = flag("--artifact-dir");
  fs.mkdirSync(dir, { recursive: true });
  const summaryPath = path.join(dir, "ux_summary.json");
  fs.writeFileSync(summaryPath, JSON.stringify({
    counts: { "0": 1, "4": 1, "5": 1 },
    items: [
      { code: "UTS.0401", testState: 0 },
      { code: "UTS.0300", testState: 4, issues: 1 },
      { code: "UTS.0402", testState: 5 },
    ],
  }));
  process.stdout.write(JSON.stringify({
    decision: "audited",
    artifactDir: dir,
    bundleName: "com.example.app",
    uxSummary: summaryPath,
    report: path.join(dir, "report.md"),
    resultCounts: { "0": 1, "4": 1 },
    argv,
  }));
  process.exit(0);
}
process.stderr.write("unknown command: " + cmd);
process.exit(2);
`;

function makeStubRoot() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-hn-ux-"));
  fs.writeFileSync(path.join(root, "SKILL.md"), "# stub skill root\n");
  fs.mkdirSync(path.join(root, "scripts"));
  fs.writeFileSync(path.join(root, "scripts", "ux_audit_pipeline.py"), STUB);
  return root;
}

// 临时 DevEco 根: withService=false 时缺 tools/UxTestService, 模拟默认解析落空。
function makeStubDeveco(withService) {
  const deveco = fs.mkdtempSync(path.join(os.tmpdir(), "godfrey-hn-deveco-"));
  const service = path.join(deveco, "tools", "UxTestService");
  fs.mkdirSync(service, { recursive: true });
  if (!withService) fs.rmSync(service, { recursive: true, force: true });
  return deveco;
}

test("resolveUxServiceRoot: explicit wins unvalidated, default only when the directory exists", () => {
  const deveco = makeStubDeveco(true);
  const bareDeveco = makeStubDeveco(false);
  try {
    // 显式传参优先, 且不做存在性校验(交由上游探测给出 blocked 详情)
    assert.equal(resolveUxServiceRoot("D:/my/ux", { deveco }), "D:/my/ux");
    // 默认解析: <deveco>/tools/UxTestService 存在才传
    assert.equal(resolveUxServiceRoot(undefined, { deveco }), path.join(deveco, "tools", "UxTestService"));
    // 目录缺失 → undefined(不传 flag)
    assert.equal(resolveUxServiceRoot(undefined, { deveco: bareDeveco }), undefined);
    // deveco=null → 明确跳过默认解析
    assert.equal(resolveUxServiceRoot(undefined, { deveco: null }), undefined);
  } finally {
    fs.rmSync(deveco, { recursive: true, force: true });
    fs.rmSync(bareDeveco, { recursive: true, force: true });
  }
});

test("runUxPipeline doctor injects the default UxTestService root only when it resolves", async () => {
  const root = makeStubRoot();
  const deveco = makeStubDeveco(true);
  const bareDeveco = makeStubDeveco(false);
  try {
    const withDefault = await runUxPipeline({ action: "doctor" },
      { interpreter: process.execPath, root, hdc: null, deveco });
    assert.deepEqual(withDefault.raw.argv,
      ["doctor", "--json", "--ux-service-root", path.join(deveco, "tools", "UxTestService")]);

    const withoutDefault = await runUxPipeline({ action: "doctor" },
      { interpreter: process.execPath, root, hdc: null, deveco: bareDeveco });
    assert.ok(!withoutDefault.raw.argv.includes("--ux-service-root"),
      "目录不存在时不应注入 --ux-service-root");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
    fs.rmSync(deveco, { recursive: true, force: true });
    fs.rmSync(bareDeveco, { recursive: true, force: true });
  }
});

test("explicit uxServiceRoot overrides the default resolution on the audit path", async () => {
  const root = makeStubRoot();
  const deveco = makeStubDeveco(true);
  try {
    const envelope = await runUxPipeline({
      action: "audit",
      artifactDir: path.join(root, "out-ux-root"),
      evidenceSummary: "ignored-by-stub.json",
      uxServiceRoot: "D:/explicit/ux-service",
    }, { interpreter: process.execPath, root, hdc: null, deveco });

    const i = envelope.raw.argv.indexOf("--ux-service-root");
    assert.ok(i >= 0, "audit 路径应转发 --ux-service-root");
    assert.equal(envelope.raw.argv[i + 1], "D:/explicit/ux-service");
    // 显式优先: 默认解析出的 deveco 路径不允许混进 argv
    assert.ok(!envelope.raw.argv.includes(path.join(deveco, "tools", "UxTestService")));
    assert.equal(envelope.overall, "error"); // stub 审计流不受影响, 归一化照常
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
    fs.rmSync(deveco, { recursive: true, force: true });
  }
});

test("execUxPipeline forwards argv through the injected interpreter and temp skill root", async () => {
  const root = makeStubRoot();
  try {
    const r = await execUxPipeline(["doctor", "--json", "--ux-timeout", "180"], {
      interpreter: process.execPath,
      root,
    });
    assert.equal(r.code, 0);
    assert.deepEqual(r.json.argv, ["doctor", "--json", "--ux-timeout", "180"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("runUxPipeline doctor folds decision into overall without needing a device", async () => {
  const root = makeStubRoot();
  try {
    const envelope = await runUxPipeline({ action: "doctor" }, { interpreter: process.execPath, root, hdc: null });
    assert.equal(envelope.action, "doctor");
    assert.equal(envelope.overall, "pass");
    assert.deepEqual(envelope.rules, []);
    assert.equal(envelope.raw.decision, "allowed");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("runUxPipeline audit normalizes ux_summary.json into the envelope", async () => {
  const root = makeStubRoot();
  try {
    const envelope = await runUxPipeline({
      action: "audit",
      artifactDir: path.join(root, "out"),
      evidenceSummary: "ignored-by-stub.json",
      language: "zh",
    }, { interpreter: process.execPath, root, hdc: null });

    assert.equal(envelope.action, "audit");
    assert.equal(envelope.bundleName, "com.example.app");
    assert.equal(envelope.artifactDir, path.join(root, "out"));
    assert.ok(envelope.reportPath.endsWith("report.md"));
    // UTS.0402 testState=5 → error, 压过 resultCounts({0:1,4:1})暗示的 blocked
    assert.equal(envelope.overall, "error");
    assert.deepEqual(envelope.rules.map((r) => [r.ruleId, r.verdict]), [
      ["UTS.0401", "pass"],
      ["UTS.0300", "blocked"],
      ["UTS.0402", "error"],
    ]);
    assert.equal(envelope.rules[1].reason, "foreground_state_invalid");
    assert.equal(envelope.rules[1].issues, 1);
    assert.equal(envelope.notApplicable, undefined);
    assert.equal(envelope.raw.decision, "audited");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("runUxPipeline passes the script's blocked payload through untouched", async () => {
  const root = makeStubRoot();
  try {
    const envelope = await runUxPipeline({
      action: "audit",
      artifactDir: path.join(root, "out-blocked"),
      evidenceSummary: "missing.json",
      bundle: "com.blocked.case",
    }, { interpreter: process.execPath, root, hdc: null });

    assert.equal(envelope.overall, "blocked");
    assert.deepEqual(envelope.rules, []);
    assert.equal(envelope.raw.decision, "blocked");
    assert.equal(envelope.raw.error, "layout JSON is required for UX audit");
    assert.deepEqual(envelope.raw.missingConfig, ["layout"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("audit without evidence paths rejects before spawning any interpreter", async () => {
  const root = makeStubRoot();
  try {
    await assert.rejects(
      () => runUxPipeline({ action: "audit" }, { interpreter: process.execPath, root, hdc: null }),
      /evidenceSummary 或 layout/,
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("hn_ux_audit registers with the documented schema and zh default", () => {
  assert.equal(hnUxTools.length, 1);
  const tool = hnUxTools[0];
  assert.equal(tool.name, "hn_ux_audit");
  assert.deepEqual(Object.keys(tool.inputSchema).sort(), [
    "action", "artifactDir", "bundle", "evidenceSummary", "language",
    "layout", "python", "screenshot", "target", "testCodes", "timeoutMs", "uxServiceRoot",
  ]);
  assert.deepEqual(tool.inputSchema.action.safeParse("audit"), { success: true, data: "audit" });
  assert.equal(tool.inputSchema.action.safeParse("reset").success, false);
  assert.equal(tool.inputSchema.language.parse(undefined), "zh");
});
