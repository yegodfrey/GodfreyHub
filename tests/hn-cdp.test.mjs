import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const hnCdp = await import("../dist/core/hn-cdp.js");
const hnCdpToolsMod = await import("../dist/tools/hn-cdp.js");

// hermetic 回归: eval 用内存 fake transport 回放合成 CDP 响应(不连网络);
// probe 用 runHnScript 的 interpreter 注入, 以 node 运行临时技能根里的 stub
// "device_evidence_bundle.py"(打印 argv JSON, 不依赖 python 与真实上游脚本)。

// ---------- 测试基建 ----------

function fakeTransport(respond) {
  const state = { url: null, sent: [], closed: false, emitMessage: null, emitClose: null };
  const factory = () => ({
    connect: async (url) => { state.url = url; },
    send: (text) => {
      state.sent.push(JSON.parse(text));
      if (respond) respond(state);
    },
    onMessage: (cb) => { state.emitMessage = cb; },
    onClose: (cb) => { state.emitClose = cb; },
    close: () => { state.closed = true; },
  });
  return { factory, state };
}

// 用实际发出的请求 id 构造响应(消息 id 全进程自增, 不硬编码)
function replyWith(payloadForId) {
  return (state) => state.emitMessage(JSON.stringify(payloadForId(state.sent[0].id)));
}

async function makeSkillRoot(stubCode) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "hn-cdp-test-"));
  await fs.mkdir(path.join(root, "scripts"), { recursive: true });
  await fs.writeFile(path.join(root, "SKILL.md"), "# stub skill root\n", "utf8");
  await fs.writeFile(path.join(root, "scripts", "device_evidence_bundle.py"), stubCode, "utf8");
  return root;
}

const ARGV_STUB = "console.log(JSON.stringify({ argv: process.argv.slice(2), decision: 'allowed', "
  + "operation: 'device.webview-devtools.diagnose', sockets: [], staleForwards: [], "
  + "fportStatus: { created: true, reused: false, kept: false, cleanupExitCode: 0 }, "
  + "httpProbe: [{ ok: true }], webSocketDebuggerUrl: 'ws://127.0.0.1:9222/devtools/page/1' }));";
const FAILURE_STUB = "console.log(JSON.stringify({ argv: process.argv.slice(2), failureCode: 'webview_socket_not_found' })); process.exit(2);";
const SILENT_STUB = "process.exit(1);";

// ---------- eval: 消息形状 / id 关联 / 参数透传 ----------

test("eval 发送的 CDP 消息形状与默认参数透传, 成功后干净关闭", async () => {
  const { factory, state } = fakeTransport(replyWith((id) => ({
    id, result: { result: { type: "string", value: "hello" } },
  })));
  const env = await hnCdp.hnCdpEval({
    webSocketUrl: "ws://127.0.0.1:9222/devtools/page/1",
    expression: "'hello'",
    transportFactory: factory,
  });
  assert.equal(state.url, "ws://127.0.0.1:9222/devtools/page/1");
  assert.equal(state.sent.length, 1);
  const msg = state.sent[0];
  assert.equal(typeof msg.id, "number");
  assert.equal(msg.method, "Runtime.evaluate");
  assert.deepEqual(msg.params, { expression: "'hello'", awaitPromise: true, returnByValue: true });
  assert.equal(env.action, "eval");
  assert.equal(env.webSocketUrl, "ws://127.0.0.1:9222/devtools/page/1");
  assert.equal(env.value, "hello");
  assert.equal(env.valueType, "string");
  assert.equal(env.truncated, undefined);
  assert.equal(state.closed, true, "成功路径必须关闭 WebSocket");
});

test("eval 透传 awaitPromise/returnByValue=false 并提取对象值与 description", async () => {
  const { factory, state } = fakeTransport(replyWith((id) => ({
    id, result: { result: { type: "object", className: "Object", description: "{a: 1}", value: { a: 1 } } },
  })));
  const env = await hnCdp.hnCdpEval({
    webSocketUrl: "ws://127.0.0.1:9222/devtools/page/2",
    expression: "({a: 1})",
    awaitPromise: false,
    returnByValue: false,
    transportFactory: factory,
  });
  assert.deepEqual(state.sent[0].params, { expression: "({a: 1})", awaitPromise: false, returnByValue: false });
  assert.deepEqual(env.value, { a: 1 });
  assert.equal(env.valueType, "object");
  assert.equal(env.valueDescription, "{a: 1}");
  assert.equal(env.truncated, undefined);
});

test("eval 按 id 关联响应: 忽略 CDP 事件与其它 id 的消息", async () => {
  const { factory, state } = fakeTransport((s) => {
    const id = s.sent[0].id;
    s.emitMessage(JSON.stringify({ method: "Runtime.consoleAPICalled", params: {} }));
    s.emitMessage(JSON.stringify({ id: id + 1000, result: { result: { type: "string", value: "wrong" } } }));
    s.emitMessage(JSON.stringify({ id, result: { result: { type: "string", value: "right" } } }));
  });
  const env = await hnCdp.hnCdpEval({
    webSocketUrl: "ws://127.0.0.1:9222/devtools/page/1",
    expression: "1",
    transportFactory: factory,
  });
  assert.equal(env.value, "right");
});

test("eval 的消息 id 跨调用自增", async () => {
  const respond = replyWith((id) => ({ id, result: { result: { type: "number", value: 1 } } }));
  const first = fakeTransport(respond);
  const second = fakeTransport(respond);
  await hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", transportFactory: first.factory });
  await hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", transportFactory: second.factory });
  assert.ok(second.state.sent[0].id > first.state.sent[0].id, "第二次 eval 的消息 id 应大于第一次");
});

test("eval 请求被 CDP 以 error 拒绝时报协议错误", async () => {
  const { factory } = fakeTransport(replyWith((id) => ({ id, error: { code: -32601, message: "'Runtime.evaluate' wasn't found" } })));
  await assert.rejects(
    hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", transportFactory: factory }),
    /CDP 协议错误: 'Runtime\.evaluate' wasn't found/,
  );
});

// ---------- eval: 异常 / 超时 / 关闭 / 截断 ----------

test("eval 完整提取 exceptionDetails(含 exception.description), 不返回 value", async () => {
  const { factory, state } = fakeTransport(replyWith((id) => ({
    id,
    result: {
      result: { type: "object", subtype: "error" },
      exceptionDetails: {
        text: "Uncaught",
        lineNumber: 0,
        exception: { type: "object", subtype: "error", description: "ReferenceError: x is not defined" },
      },
    },
  })));
  const env = await hnCdp.hnCdpEval({
    webSocketUrl: "ws://x", expression: "x", transportFactory: factory,
  });
  assert.equal(env.value, undefined);
  assert.equal(env.exceptionDetails.text, "Uncaught");
  assert.equal(env.exceptionDetails.exception.description, "ReferenceError: x is not defined");
  assert.equal(state.closed, true, "异常路径必须关闭 WebSocket");
});

test("eval 超时未收到对应 id 的响应时报错并关闭", async () => {
  const { factory, state } = fakeTransport(() => { /* 不回包 */ });
  await assert.rejects(
    hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", timeoutMs: 30, transportFactory: factory }),
    /CDP 响应超时\(30ms\)/,
  );
  assert.equal(state.closed, true, "超时路径必须关闭 WebSocket");
});

test("eval 连接在收到响应前被对端关闭时报错并关闭", async () => {
  const { factory, state } = fakeTransport((s) => s.emitClose());
  await assert.rejects(
    hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", transportFactory: factory }),
    /已关闭/,
  );
  assert.equal(state.closed, true);
});

test("eval 序列化超过 64KB 的结果被截断并加 truncated 标记(ASCII)", async () => {
  const big = "x".repeat(100_000);
  const { factory, state } = fakeTransport(replyWith((id) => ({ id, result: { result: { type: "string", value: big } } })));
  const env = await hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", transportFactory: factory });
  assert.equal(env.truncated, true);
  assert.equal(env.valueType, "string");
  assert.equal(typeof env.value, "string");
  assert.ok(Buffer.byteLength(env.value, "utf8") <= 64 * 1024, "截断后不得超过 64KB");
  assert.equal(state.closed, true);
});

test("eval 截断在多字节字符边界上回退, 不产生 replacement char", async () => {
  const big = "好".repeat(40_000);  // 120KB UTF-8
  const { factory } = fakeTransport(replyWith((id) => ({ id, result: { result: { type: "string", value: big } } })));
  const env = await hnCdp.hnCdpEval({ webSocketUrl: "ws://x", expression: "1", transportFactory: factory });
  assert.equal(env.truncated, true);
  assert.ok(Buffer.byteLength(env.value, "utf8") <= 64 * 1024);
  assert.ok(!env.value.includes("\uFFFD"), "截断不得劈开多字节字符");
});

// ---------- probe: argv 构造与结果透传(临时技能根 + node 解释器 stub) ----------

test("probe 构造 webview-devtools argv 并透传脚本顶层 JSON", async () => {
  let root = null;
  try {
    root = await makeSkillRoot(ARGV_STUB);
    const artifactDir = path.join(root, "artifacts");
    const env = await hnCdp.hnCdpProbe({
      root,
      interpreter: process.execPath,
      target: "127.0.0.1:5555",
      artifactDir,
      remoteSocket: "webview_devtools_remote_1234",
      onlineTargetList: async () => ["127.0.0.1:5555"],
      hdc: null, // 不带 --hdc: 显式注入 null, 断言与机器 toolchain 解析无关
    });
    assert.deepEqual(env.argv, [
      "webview-devtools",
      "--target", "127.0.0.1:5555",
      "--artifact-dir", artifactDir,
      "--json",
      "--remote-socket", "webview_devtools_remote_1234",
    ]);
    assert.equal(env.action, "probe");
    assert.equal(env.target, "127.0.0.1:5555");
    assert.equal(env.artifactDir, artifactDir);
    assert.equal(env.decision, "allowed");
    assert.deepEqual(env.sockets, []);
    assert.deepEqual(env.staleForwards, []);
    assert.deepEqual(env.fportStatus, { created: true, reused: false, kept: false, cleanupExitCode: 0 });
    assert.deepEqual(env.httpProbe, [{ ok: true }]);
    assert.equal(env.webSocketDebuggerUrl, "ws://127.0.0.1:9222/devtools/page/1");
  } finally {
    if (root) await fs.rm(root, { recursive: true, force: true });
  }
});

test("probe 省略 target 取首个在线设备, 省略 remoteSocket 则不带该 flag, artifactDir 默认隔离", async () => {
  let root = null;
  try {
    root = await makeSkillRoot(ARGV_STUB);
    const env = await hnCdp.hnCdpProbe({
      root,
      interpreter: process.execPath,
      onlineTargetList: async () => ["t1", "t2"],
      hdc: null,
    });
    assert.equal(env.target, "t1");
    assert.deepEqual(env.argv, ["webview-devtools", "--target", "t1", "--artifact-dir", env.artifactDir, "--json"]);
    assert.ok(path.basename(env.artifactDir).startsWith("hn-cdp-"), "默认 artifactDir 用 hn-cdp 前缀");
    assert.ok(env.artifactDir.includes(path.join(os.tmpdir(), "godfreyhub-hn")), "默认 artifactDir 落在系统临时目录");
  } finally {
    if (root) await fs.rm(root, { recursive: true, force: true });
  }
});

test("probe 显式 --hdc 透传: 存在的绝对路径附加, 不存在则交由上游自探测", async () => {
  let root = null;
  try {
    root = await makeSkillRoot(ARGV_STUB);
    const dir = await fs.mkdtemp(path.join(os.tmpdir(), "hn-cdp-hdc-"));
    const hdcFile = path.join(dir, "hdc.exe");
    await fs.writeFile(hdcFile, "", "utf8");
    try {
      const env = await hnCdp.hnCdpProbe({
        root,
        interpreter: process.execPath,
        target: "127.0.0.1:5555",
        artifactDir: path.join(root, "artifacts"),
        onlineTargetList: async () => ["127.0.0.1:5555"],
        hdc: hdcFile,
      });
      assert.deepEqual(env.argv.slice(-2), ["--hdc", hdcFile]);

      const missing = await hnCdp.hnCdpProbe({
        root,
        interpreter: process.execPath,
        target: "127.0.0.1:5555",
        artifactDir: path.join(root, "artifacts"),
        onlineTargetList: async () => ["127.0.0.1:5555"],
        hdc: "D:/definitely/missing/hdc.exe",
      });
      assert.ok(!missing.argv.includes("--hdc"));
    } finally {
      await fs.rm(dir, { recursive: true, force: true });
    }
  } finally {
    if (root) await fs.rm(root, { recursive: true, force: true });
  }
});

test("probe 透传上游失败结论(exit 2 + failureCode JSON), 不当工具错误抛出", async () => {
  let root = null;
  try {
    root = await makeSkillRoot(FAILURE_STUB);
    const env = await hnCdp.hnCdpProbe({
      root,
      interpreter: process.execPath,
      target: "127.0.0.1:5555",
      artifactDir: path.join(root, "artifacts"),
      onlineTargetList: async () => ["127.0.0.1:5555"],
    });
    assert.equal(env.failureCode, "webview_socket_not_found");
  } finally {
    if (root) await fs.rm(root, { recursive: true, force: true });
  }
});

test("probe 脚本无 JSON 输出且非零退出时报工具级错误", async () => {
  let root = null;
  try {
    root = await makeSkillRoot(SILENT_STUB);
    await assert.rejects(
      hnCdp.hnCdpProbe({
        root,
        interpreter: process.execPath,
        target: "127.0.0.1:5555",
        onlineTargetList: async () => ["127.0.0.1:5555"],
      }),
      /失败\(exit 1\)/,
    );
  } finally {
    if (root) await fs.rm(root, { recursive: true, force: true });
  }
});

// ---------- 工具注册: 名称 / schema / eval 参数校验 ----------

test("hn_cdp 工具按 defineTool 形状注册且描述含脱敏责任声明", () => {
  assert.equal(hnCdpToolsMod.hnCdpTools.length, 1);
  const def = hnCdpToolsMod.hnCdpTools[0];
  assert.equal(def.name, "hn_cdp");
  assert.ok(def.description.includes("脱敏"), "工具描述必须注明调用方负脱敏责任");
  for (const key of ["action", "target", "artifactDir", "remoteSocket", "webSocketUrl", "expression", "awaitPromise", "returnByValue", "timeoutMs"]) {
    assert.ok(def.inputSchema[key], `schema 缺少字段 ${key}`);
  }
});

test("eval 缺少必填参数或 URL 形态非法时在校验层报错(不触网)", async () => {
  const def = hnCdpToolsMod.hnCdpTools[0];
  const ctx = { signal: undefined };
  await assert.rejects(def.handler({ action: "eval" }, ctx), /webSocketUrl/);
  await assert.rejects(def.handler({ action: "eval", webSocketUrl: "ws://x" }, ctx), /expression/);
  await assert.rejects(
    def.handler({ action: "eval", webSocketUrl: "http://127.0.0.1:9222/devtools", expression: "1" }, ctx),
    /ws:\/\//,
  );
});
