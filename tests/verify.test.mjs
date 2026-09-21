import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";

// C-4.2: core/verify.ts 视觉模型循环的 hermetic 测试。verifyUi 的 VerifyUiDeps 注入缝
// (与 VisualCaptureDeps/proc.run 假原语同型)让全链路无设备无网络可测。
const verify = await import("../dist/core/verify.js");
const sync = await import("../dist/core/sync.js");

const TARGET = "127.0.0.1:55555";
const ENV = { baseUrl: "http://127.0.0.1:9", apiKey: "test-key", model: "test-model" };

function toolCall(action) {
  return {
    choices: [{
      message: {
        tool_calls: [{
          id: "call-" + Math.random().toString(36).slice(2),
          type: "function",
          function: { name: "ui_action", arguments: JSON.stringify(action) },
        }],
      },
    }],
  };
}

function noToolCallResponse() {
  return { choices: [{ message: { content: "我看到了登录页" } }] };
}

// 记录落盘在 os.tmpdir()/godfreyhub/verify/<id>/record.json; id 只在 record 里,
// 测试用唯一 testPlan 扫描定位(磁盘是权威, 顺带验证"finally 落盘"契约本身)。
function persistedRecord(testPlan) {
  const root = path.join(os.tmpdir(), "godfreyhub", "verify");
  if (!fs.existsSync(root)) return null;
  const hits = [];
  for (const entry of fs.readdirSync(root)) {
    const file = path.join(root, entry, "record.json");
    if (!fs.existsSync(file)) continue;
    try {
      const record = JSON.parse(fs.readFileSync(file, "utf8"));
      if (record.testPlan === testPlan) hits.push(record);
    } catch { /* 并发写入中的半截文件跳过 */ }
  }
  return hits.at(-1) ?? null;
}

// 全套假原语: chat 按脚本逐次出牌, 其余设备操作只记录调用。
function fakeDeps({ chatScript = [], chatCalls = [], uiCalls = [] } = {}) {
  let chatIndex = 0;
  return {
    env: ENV,
    chatCommand: async (env, body, signal) => {
      chatCalls.push({ env, messages: body.messages, signal });
      const next = chatScript[Math.min(chatIndex, chatScript.length - 1)];
      chatIndex += 1;
      if (typeof next === "function") return next(chatIndex);
      if (next instanceof Error) throw next;
      return next;
    },
    screenshotCommand: async (shot) => {
      fs.writeFileSync(shot, Buffer.from("fake-jpeg"));
      return "ok";
    },
    uiClickCommand: async (x, y) => { uiCalls.push(`click ${x},${y}`); return "ok"; },
    uiInputTextCommand: async (x, y, text) => { uiCalls.push(`input ${x},${y} ${text}`); return "ok"; },
    uiSwipeCommand: async () => { uiCalls.push("swipe"); return "ok"; },
    uiKeyCommand: async (keyCode) => { uiCalls.push(`key ${keyCode}`); return "ok"; },
    sleepCommand: async () => {},
  };
}

test("a mid-run model failure still persists the executed steps (record.json finally contract)", async () => {
  const testPlan = "record-contract-" + randomUUID();
  const chatCalls = [];
  const deps = fakeDeps({
    chatScript: [toolCall({ action: "click", x: 10, y: 20, observation: "首页卡片" }), new Error("模型网络炸了")],
    chatCalls,
  });
  await assert.rejects(
    () => verify.verifyUi({ bundleName: "com.example.app", target: TARGET, testPlan, maxSteps: 5 }, deps),
    /模型网络炸了/);
  assert.equal(chatCalls.length, 2);

  const record = persistedRecord(testPlan);
  assert.ok(record, "record.json must exist on disk after the run");
  assert.equal(record.steps.length, 1, "the step executed before the crash must be preserved");
  assert.equal(record.steps[0].action, "click | 首页卡片");
  assert.equal(record.steps[0].ok, true);
  assert.equal(record.finished, false);
  assert.match(record.failPart, /校验中止: 模型网络炸了/);
  assert.equal(record.error, "模型网络炸了");
});

test("an AbortSignal before the run aborts immediately without touching device or model", async () => {
  const controller = new AbortController();
  controller.abort();
  let modelCalled = false;
  const deps = fakeDeps({ chatScript: [() => { modelCalled = true; return noToolCallResponse(); }] });
  await assert.rejects(
    () => verify.verifyUi({
      bundleName: "com.example.app", target: TARGET,
      testPlan: "abort-" + randomUUID(), signal: controller.signal,
    }, deps),
    (error) => error.name === "AbortedError");
  assert.equal(modelCalled, false);
});

test("an abort mid-loop stops the loop, rethrows AbortedError, and still persists the record", async () => {
  const testPlan = "abort-midloop-" + randomUUID();
  const controller = new AbortController();
  const chatCalls = [];
  const deps = fakeDeps({ chatScript: [toolCall({ action: "click", x: 1, y: 2 })], chatCalls });
  deps.sleepCommand = async (_ms, signal) => {
    // 与真实 abortableSleep 等价的取消路径: 置位后抛 AbortedError。
    controller.abort(new Error("用户取消"));
    throw new sync.AbortedError();
  };
  await assert.rejects(
    () => verify.verifyUi({
      bundleName: "com.example.app", target: TARGET,
      testPlan, maxSteps: 5, signal: controller.signal,
    }, deps),
    (error) => error.name === "AbortedError");
  // 取消信号必须真正接到模型调用上(契约 2: 取消后不得继续打模型)。
  assert.equal(chatCalls.length, 1);
  assert.ok(chatCalls[0].signal instanceof AbortSignal);
  assert.equal(chatCalls[0].signal, controller.signal);

  const record = persistedRecord(testPlan);
  assert.ok(record);
  assert.equal(record.steps.length, 1);
  assert.equal(record.finished, false);
  assert.match(record.failPart, /校验中止/);
});

test("maxSteps caps the loop and records an explicit failure without a done verdict", async () => {
  const testPlan = "max-steps-" + randomUUID();
  const chatCalls = [];
  const uiCalls = [];
  const deps = fakeDeps({ chatScript: [toolCall({ action: "click", x: 5, y: 6 })], chatCalls, uiCalls });
  const record = await verify.verifyUi({
    bundleName: "com.example.app", target: TARGET, testPlan, maxSteps: 3,
  }, deps);
  assert.equal(chatCalls.length, 3);
  assert.equal(uiCalls.length, 3);
  assert.equal(record.steps.length, 3);
  assert.equal(record.finished, false, "no done verdict must not be recorded as finished");
  assert.equal(record.successPart, "");
  assert.match(record.failPart, /达到最大步数\(3\)未收到 done 判定/);
});

test("unparseable model arguments fail the run instead of synthesizing a done (no fake pass)", async () => {
  const testPlan = "bad-args-" + randomUUID();
  const chatCalls = [];
  const broken = {
    choices: [{ message: { tool_calls: [{ id: "call-x", type: "function",
      function: { name: "ui_action", arguments: "this is not json {" } }] } }],
  };
  const deps = fakeDeps({ chatScript: [broken], chatCalls });
  const record = await verify.verifyUi({
    bundleName: "com.example.app", target: TARGET, testPlan, maxSteps: 5,
  }, deps);
  assert.equal(chatCalls.length, 1, "the loop must terminate instead of continuing");
  assert.equal(record.finished, false);
  assert.equal(record.successPart, "", "a parse failure must never produce a success part");
  assert.match(record.failPart, /无法解析的 ui_action 参数，校验按失败终止/);
  assert.equal(record.steps[0].action, "invalid");
});

test("a model answer without a tool call fails the step instead of faking success", async () => {
  const testPlan = "no-toolcall-" + randomUUID();
  const deps = fakeDeps({ chatScript: [noToolCallResponse()] });
  const record = await verify.verifyUi({
    bundleName: "com.example.app", target: TARGET, testPlan, maxSteps: 5,
  }, deps);
  assert.equal(record.finished, false);
  assert.equal(record.successPart, "");
  assert.equal(record.failPart, "模型在第 1 步未返回操作");
});

test("a legitimate done verdict records the success part and finishes the run", async () => {
  const testPlan = "done-verdict-" + randomUUID();
  const deps = fakeDeps({ chatScript: [toolCall({ action: "done", result: "首页卡片颜色符合深色规范" })] });
  const record = await verify.verifyUi({
    bundleName: "com.example.app", target: TARGET, testPlan, maxSteps: 5,
  }, deps);
  assert.equal(record.finished, true);
  assert.equal(record.successPart, "首页卡片颜色符合深色规范");
  assert.equal(record.failPart, "");
  assert.equal(record.steps.at(-1).action, "done");
  assert.equal(record.steps.at(-1).ok, true);
});

test("verifyEnv reads the three UI_VERIFY variables and normalizes the base URL", () => {
  const saved = { ...process.env };
  try {
    delete process.env.UI_VERIFY_BASE_URL;
    delete process.env.UI_VERIFY_API_KEY;
    delete process.env.UI_VERIFY_MODEL_NAME;
    delete process.env.UI_VERIFY_MODEL;
    assert.equal(verify.verifyEnv(), null, "unconfigured env must be reported, not guessed");

    process.env.UI_VERIFY_BASE_URL = "http://127.0.0.1:1234/";
    process.env.UI_VERIFY_API_KEY = "k";
    process.env.UI_VERIFY_MODEL_NAME = "m";
    assert.deepEqual(verify.verifyEnv(), { baseUrl: "http://127.0.0.1:1234", apiKey: "k", model: "m" });

    delete process.env.UI_VERIFY_MODEL_NAME;
    process.env.UI_VERIFY_MODEL = "legacy-m";
    assert.equal(verify.verifyEnv().model, "legacy-m", "legacy UI_VERIFY_MODEL stays supported");
  } finally {
    process.env = saved;
  }
});
