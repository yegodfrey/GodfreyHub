import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const hnTrace = await import("../dist/core/hn-trace.js");
const tools = await import("../dist/tools/hn-trace.js");

const okRun = async () => ({ code: 0, out: "ok", timedOut: false, truncated: false });

function makeTempDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

// 临时技能根: SKILL.md + scripts/profiler_trace_audit.py 的 node stub(打印 JSON)。
// 使 audit/doctor 回归不读真实上游脚本、不依赖 python。
function makeStubSkillRoot({ exitCode = 0 } = {}) {
  const root = makeTempDir("hn-trace-skill-");
  fs.mkdirSync(path.join(root, "scripts"), { recursive: true });
  fs.writeFileSync(path.join(root, "SKILL.md"), "# stub\n");
  fs.writeFileSync(
    path.join(root, "scripts", "profiler_trace_audit.py"),
    [
      "const argv = process.argv.slice(2);",
      "console.log(JSON.stringify({ decision: 'stub', failureCode: 'E_STUB', argv }));",
      exitCode ? `process.exit(${exitCode});` : "",
    ].join("\n"),
  );
  return root;
}

function rmRf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

test("captureTrace runs hitrace, recv and rm in order and lands the trace in artifactDir", async () => {
  const dir = makeTempDir("hn-trace-out-");
  try {
    const calls = [];
    const result = await hnTrace.captureTrace({
      target: "127.0.0.1:5555",
      tags: "ability, ace", // 空格/逗号混排拆分
      durationSec: 2,
      bufferKb: 4096,
      artifactDir: dir,
    }, {
      run: async (_cmd, args) => {
        calls.push(args);
        if (args.includes("recv")) fs.writeFileSync(args.at(-1), "trace"); // 模拟设备文件落地
        return { code: 0, out: "ok", timedOut: false, truncated: false };
      },
    });

    assert.equal(calls.length, 3);
    // 1) hitrace: 单条 shell 命令串, tags 已拆分为空白分隔 token
    assert.deepEqual(calls[0].slice(0, 3), ["-t", "127.0.0.1:5555", "shell"]);
    const m = calls[0][3].match(/^hitrace --time 2 -b 4096 -o (\/data\/local\/tmp\/hn-trace-\d+\.trace) ability ace$/);
    assert.ok(m, calls[0][3]);
    const remote = m[1];
    // 2) recv: 远端路径与 hitrace -o 一致, 本地落在 artifactDir
    assert.deepEqual(calls[1].slice(0, 4), ["-t", "127.0.0.1:5555", "file", "recv"]);
    assert.equal(calls[1][4], remote);
    assert.equal(calls[1][5], path.join(dir, path.basename(remote)));
    // 3) rm: 最后尽力清理远端文件
    assert.deepEqual(calls[2].slice(0, 3), ["-t", "127.0.0.1:5555", "shell"]);
    assert.equal(calls[2][3], "rm -f " + remote);

    assert.deepEqual(result, {
      action: "capture",
      target: "127.0.0.1:5555",
      artifactDir: dir,
      traceFile: path.join(dir, path.basename(remote)),
    });
    assert.ok(fs.existsSync(result.traceFile));
  } finally {
    rmRf(dir);
  }
});

test("captureTrace rejects injection payloads in tags before touching the device", async () => {
  let runCalled = false;
  await assert.rejects(
    () => hnTrace.captureTrace({
      target: "127.0.0.1:5555",
      tags: "ability; rm -rf /data",
    }, {
      run: async () => {
        runCalled = true;
        return okRun();
      },
    }),
    /非法 tag token/,
  );
  assert.equal(runCalled, false);
});

test("captureTrace validates durationSec bounds without any device call", async () => {
  for (const bad of [0, 61, 2.5]) {
    let runCalled = false;
    await assert.rejects(
      () => hnTrace.captureTrace({ target: "t", durationSec: bad }, { run: async () => { runCalled = true; return okRun(); } }),
      /durationSec 必须是 1\.\.60 的整数/,
    );
    assert.equal(runCalled, false);
  }
});

test("captureTrace still cleans up the remote file when recv fails", async () => {
  const dir = makeTempDir("hn-trace-out-");
  try {
    const calls = [];
    await assert.rejects(
      () => hnTrace.captureTrace({
        target: "127.0.0.1:5555",
        durationSec: 1,
        artifactDir: dir,
      }, {
        run: async (_cmd, args) => {
          calls.push(args);
          if (args.includes("recv")) return { code: 1, out: "[Fail] recv file", timedOut: false, truncated: false };
          return okRun();
        },
      }),
      /hdc file recv/,
    );
    assert.equal(calls.length, 3);
    assert.match(calls[0][3], /^hitrace --time 1 /);
    assert.ok(calls[1].includes("recv"));
    assert.match(calls[2][3], /^rm -f \/data\/local\/tmp\/hn-trace-\d+\.trace$/);
    assert.equal(fs.readdirSync(dir).length, 0);
  } finally {
    rmRf(dir);
  }
});

test("auditTrace builds the upstream argv with thresholds, output dir and trace_streamer", async () => {
  const root = makeStubSkillRoot();
  const outDir = makeTempDir("hn-trace-audit-");
  try {
    const input = path.join(outDir, "device.trace");
    const result = await hnTrace.auditTrace({
      input,
      outputDir: outDir,
      thresholdMs: [16.67, 100],
    }, {
      root,
      interpreter: process.execPath,
      deveco: path.join("C:", "fake", "DevEco"),
    });

    const exe = process.platform === "win32" ? "trace_streamer.exe" : "trace_streamer";
    const expectedTraceStreamer = path.join(path.join("C:", "fake", "DevEco"), "tools", "profiler", "dic_server", exe);
    assert.deepEqual(result.argv, [
      "audit",
      "--input", input,
      "--json",
      "--output-dir", outDir,
      "--threshold-ms", "16.67", // repeated --threshold-ms 透传
      "--threshold-ms", "100",
      "--trace-streamer", expectedTraceStreamer,
    ]);
    assert.equal(result.action, "audit");
    assert.equal(result.exitCode, 0);
    assert.equal(result.decision, "stub");
  } finally {
    rmRf(root);
    rmRf(outDir);
  }
});

test("auditTrace passes script top-level fields (including failureCode) through verbatim", async () => {
  const root = makeStubSkillRoot({ exitCode: 2 }); // 上游 blocked: 非零码 + JSON
  try {
    const result = await hnTrace.auditTrace(
      { input: "x.trace" },
      { root, interpreter: process.execPath, deveco: null },
    );
    assert.equal(result.action, "audit");
    assert.equal(result.exitCode, 2);
    assert.equal(result.failureCode, "E_STUB");
    // deveco=null 时不注入 --trace-streamer, 定位权交还脚本自身候选链
    assert.deepEqual(result.argv, ["audit", "--input", "x.trace", "--json"]);
  } finally {
    rmRf(root);
  }
});

test("auditTrace only passes --force when explicitly requested (repeat audits of one outputDir)", async () => {
  const root = makeStubSkillRoot();
  const outDir = makeTempDir("hn-trace-audit-");
  try {
    const opts = { root, interpreter: process.execPath, deveco: null };
    const forced = await hnTrace.auditTrace({ input: "x.trace", outputDir: outDir, force: true }, opts);
    assert.ok(forced.argv.includes("--force"), JSON.stringify(forced.argv));
    // --force 紧跟 --output-dir 之后, 语义分组稳定
    assert.equal(forced.argv.indexOf("--force"), forced.argv.indexOf("--output-dir") + 2);

    const plain = await hnTrace.auditTrace({ input: "x.trace", outputDir: outDir }, opts);
    assert.ok(!plain.argv.includes("--force"), JSON.stringify(plain.argv));
  } finally {
    rmRf(root);
    rmRf(outDir);
  }
});

test("doctorTrace probes trace_streamer with --json only", async () => {
  const root = makeStubSkillRoot();
  try {
    const result = await hnTrace.doctorTrace({}, { root, interpreter: process.execPath, deveco: null });
    assert.equal(result.action, "doctor");
    assert.equal(result.exitCode, 0);
    assert.deepEqual(result.argv, ["doctor", "--json"]);
  } finally {
    rmRf(root);
  }
});

test("hn_trace tool registers a single action-dispatched definition", async () => {
  assert.equal(tools.hnTraceTools.length, 1);
  const tool = tools.hnTraceTools[0];
  assert.equal(tool.name, "hn_trace");
  assert.equal(typeof tool.handler, "function");
  for (const key of ["action", "target", "tags", "durationSec", "bufferKb", "artifactDir", "input", "outputDir", "thresholdMs", "timeoutMs"]) {
    assert.ok(key in tool.inputSchema, `schema 缺少 ${key}`);
  }
});
