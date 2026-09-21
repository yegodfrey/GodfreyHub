import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const evidence = await import("../dist/core/hn-evidence.js");
const hnSkill = await import("../dist/core/hn-skill.js");

// hermetic: 设备交互一律经 stub runScript / onlineTargetList 注入, 不碰设备;
// runHnScript 端到端路径用临时技能根 + interpreter 注入 process.execPath,
// 不读真实上游脚本、不依赖 python。

// stub 脚本: 先打一行噪声再输出 JSON, 同时覆盖 argv 回显与噪声容忍的 JSON 提取。
const STUB_SCRIPT = [
  "console.log('boot');",
  "console.log(JSON.stringify({ ok: true, argv: process.argv.slice(1) }));",
].join("\n");

function makeTempSkillRoot(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "hn-evidence-test-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(path.join(root, "SKILL.md"), "# stub\n", "utf8");
  fs.mkdirSync(path.join(root, "scripts"), { recursive: true });
  fs.writeFileSync(path.join(root, "scripts", "device_evidence_bundle.py"), STUB_SCRIPT, "utf8");
  return root;
}

function stubRun(result) {
  const calls = [];
  const runScript = async (script, args, opts) => {
    calls.push({ script, args, opts });
    return { code: result.code ?? 0, json: result.json ?? null, raw: result.raw ?? "" };
  };
  return { calls, runScript };
}

test("captureEvidence builds capture argv and forwards timeout/signal via injected runScript", async () => {
  const signal = new AbortController().signal;
  const { calls, runScript } = stubRun({
    json: { decision: "collected", artifacts: ["a"], failureCode: "keep_me" },
  });
  const r = await evidence.captureEvidence(
    { target: "127.0.0.1:5555", artifactDir: "D:/tmp/ev", timeoutMs: 5000, signal },
    {
      runScript,
      hdc: null, // 不带 --hdc: 显式注入 null, 断言保持与机器 toolchain 解析无关
      // 显式 target 下不应探测在线设备
      onlineTargetList: async () => { throw new Error("不应调用 onlineTargetList"); },
    },
  );
  assert.equal(calls.length, 1);
  assert.equal(calls[0].script, "device_evidence_bundle.py");
  assert.deepEqual(calls[0].args, ["capture", "--target", "127.0.0.1:5555", "--artifact-dir", "D:/tmp/ev", "--json"]);
  assert.equal(calls[0].opts.timeoutMs, 5000);
  assert.equal(calls[0].opts.signal, signal);
  assert.deepEqual(r, {
    decision: "collected",
    artifacts: ["a"],
    failureCode: "keep_me",
    action: "capture",
    target: "127.0.0.1:5555",
    artifactDir: "D:/tmp/ev",
  });
});

test("captureEvidence falls back to the first online target and the default artifact dir", async () => {
  const { calls, runScript } = stubRun({ json: { decision: "collected" } });
  const r = await evidence.captureEvidence({}, {
    runScript,
    hdc: null,
    onlineTargetList: async () => ["127.0.0.1:10100", "127.0.0.1:10200"],
  });
  assert.deepEqual(calls[0].args.slice(0, 3), ["capture", "--target", "127.0.0.1:10100"]);
  assert.equal(r.target, "127.0.0.1:10100");
  assert.match(String(r.artifactDir), /hn-evidence-/);
});

test("captureEvidence fails loud when no device is online", async () => {
  const { runScript } = stubRun({ json: { decision: "collected" } });
  await assert.rejects(() => evidence.captureEvidence({}, {
    runScript,
    onlineTargetList: async () => [],
  }), /没有在线设备/);
});

test("webviewDevtoolsEvidence forwards --remote-socket only when provided", async () => {
  const withSocket = stubRun({ json: { decision: "allowed", localPort: 7777 } });
  await evidence.webviewDevtoolsEvidence(
    { target: "127.0.0.1:5555", artifactDir: "ev", remoteSocket: "webview_devtools_remote_1234" },
    { runScript: withSocket.runScript, hdc: null },
  );
  assert.deepEqual(withSocket.calls[0].args, [
    "webview-devtools", "--target", "127.0.0.1:5555", "--artifact-dir", "ev",
    "--remote-socket", "webview_devtools_remote_1234", "--json",
  ]);

  const noSocket = stubRun({ json: { decision: "blocked", failureCode: "webview_socket_not_found" } });
  const r = await evidence.webviewDevtoolsEvidence(
    { target: "127.0.0.1:5555", artifactDir: "ev" },
    { runScript: noSocket.runScript, hdc: null },
  );
  assert.deepEqual(noSocket.calls[0].args, [
    "webview-devtools", "--target", "127.0.0.1:5555", "--artifact-dir", "ev", "--json",
  ]);
  assert.equal(r.failureCode, "webview_socket_not_found");
});

test("capture/doctor/webview append explicit --hdc when deps resolve to an existing absolute path", async (t) => {
  const hdcFile = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "hn-hdc-")), "hdc.exe");
  fs.writeFileSync(hdcFile, "", "utf8");
  t.after(() => fs.rmSync(path.dirname(hdcFile), { recursive: true, force: true }));

  const { calls, runScript } = stubRun({ json: { decision: "collected" } });
  await evidence.captureEvidence(
    { target: "t", artifactDir: "out" },
    { runScript, hdc: hdcFile },
  );
  assert.ok(calls[0].args.includes("--hdc"), "存在的绝对路径必须透传 --hdc");
  assert.deepEqual(calls[0].args.slice(-2), ["--hdc", hdcFile]);

  // 不存在的路径不透传, 交由上游候选链自行探测
  const missing = stubRun({ json: { decision: "collected" } });
  await evidence.captureEvidence(
    { target: "t", artifactDir: "out" },
    { runScript: missing.runScript, hdc: "D:/definitely/missing/hdc.exe" },
  );
  assert.ok(!missing.calls[0].args.includes("--hdc"));
});

test("doctorEvidence passes blocked JSON through without throwing when no device", async () => {
  const { calls, runScript } = stubRun({
    code: 2,
    json: { decision: "blocked", missingConfig: ["target"], issues: ["no connected HDC target found"] },
    raw: "irrelevant",
  });
  const r = await evidence.doctorEvidence({}, { runScript, hdc: null });
  assert.deepEqual(calls[0].args, ["doctor", "--json"]);
  assert.equal(calls[0].opts.timeoutMs, undefined); // runHnScript 内部落默认 120000
  assert.deepEqual(r, {
    decision: "blocked",
    missingConfig: ["target"],
    issues: ["no connected HDC target found"],
    action: "doctor",
  });
});

test("runHnScript forwards argv to the injected interpreter and extracts JSON from noisy stdout", async (t) => {
  const root = makeTempSkillRoot(t);
  const r = await hnSkill.runHnScript("device_evidence_bundle.py", ["capture", "--json"], {
    root,
    interpreter: process.execPath,
  });
  assert.equal(r.code, 0);
  assert.equal(r.json.ok, true);
  assert.deepEqual(r.json.argv, [
    path.join(root, "scripts", "device_evidence_bundle.py"),
    "capture",
    "--json",
  ]);
});

test("runHnScript throws with tail output on nonzero exit without JSON", async (t) => {
  const root = makeTempSkillRoot(t);
  fs.writeFileSync(path.join(root, "scripts", "device_evidence_bundle.py"),
    "console.error('boom');\nprocess.exit(2);\n", "utf8");
  await assert.rejects(
    () => hnSkill.runHnScript("device_evidence_bundle.py", ["--json"], { root, interpreter: process.execPath }),
    /device_evidence_bundle\.py.*失败\(exit 2\)/s,
  );
});
