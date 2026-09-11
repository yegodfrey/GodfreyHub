import test, { after, before } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { requireOk } from "../dist/core/proc.js";
import { KeyedMutex, abortableSleep, AbortedError } from "../dist/core/sync.js";
import { gitPull, gitPush } from "../dist/core/git.js";
import { bundleListedInstalled } from "../dist/core/emulator.js";
import { parseBuildLogErrors } from "../dist/core/linkage.js";

// 本文件锁定 2026-09 架构重构修复的行为契约:
//   1. requireOk 不再吞退出码(uitest shell "失败当成功" 整类问题的根);
//   2. KeyedMutex 同 key 串行 / 异 key 并行 / 失败不阻塞后续;
//   3. git push 在 pull --rebase 失败时 abort 并拒绝 push(不再留 mid-rebase);
//   4. bm dump -a 的 bundle 判定为整串精确匹配(防 com.a.b 误报 com.a.bc);
//   5. 构建日志错误解析支持 Windows 盘符绝对路径。

// ---------------------------------------------------------------- requireOk

test("requireOk throws with output tail on non-zero exit and cancelled runs", () => {
  assert.throws(() => requireOk("hdc shell", { code: 1, out: "line1\nline2", timedOut: false, truncated: false }),
    /失败\(exit 1\)[\s\S]*line2/);
  assert.throws(() => requireOk("op", { code: 124, out: "", timedOut: true, truncated: false }), /超时/);
  assert.throws(() => requireOk("op", { code: 124, out: "", timedOut: false, truncated: false, cancelled: true }), /已取消/);
  const ok = requireOk("op", { code: 0, out: "fine", timedOut: false, truncated: false });
  assert.equal(ok.out, "fine");
});

// ---------------------------------------------------------------- KeyedMutex

test("KeyedMutex serializes same-key critical sections and propagates results", async () => {
  const mutex = new KeyedMutex();
  const events = [];
  const order = [mutex.run("a", async () => {
    events.push("a1-start");
    await new Promise((r) => setTimeout(r, 30));
    events.push("a1-end");
    return 1;
  }), mutex.run("a", async () => {
    events.push("a2-start");
    return 2;
  })];
  const [r1, r2] = await Promise.all(order);
  assert.equal(r1, 1);
  assert.equal(r2, 2);
  assert.deepEqual(events, ["a1-start", "a1-end", "a2-start"], "same key must not interleave");
});

test("KeyedMutex keeps different keys parallel and failures do not block successors", async () => {
  const mutex = new KeyedMutex();
  let releaseA = () => {};
  const gateA = new Promise((r) => { releaseA = r; });
  let aFinished = false;
  const a = mutex.run("a", async () => { await gateA; aFinished = true; });
  const b = mutex.run("b", async () => "b-done");
  await new Promise((r) => setTimeout(r, 10));
  assert.equal(aFinished, false, "A holds key a");
  assert.equal(await b, "b-done", "key b must not wait for key a");
  releaseA();
  await a;

  await assert.rejects(mutex.run("c", async () => { throw new Error("boom-c"); }), /boom-c/);
  assert.equal(await mutex.run("c", () => "after-failure"), "after-failure",
    "a failed critical section must not poison the key");
});

test("abortableSleep resolves on time and rejects AbortedError on cancel", async () => {
  await abortableSleep(10);
  const controller = new AbortController();
  const pending = abortableSleep(10_000, controller.signal);
  setTimeout(() => controller.abort(), 10);
  await assert.rejects(pending, AbortedError);
});

// ---------------------------------------------------------------- git 同步

function fakeGit(script) {
  return async (_command, args) => script(args) ?? { code: 0, out: "" };
}

test("gitPush aborts the rebase and refuses to push when pull --rebase fails", async () => {
  const calls = [];
  const runCommand = fakeGit((args) => {
    calls.push(args);
    if (args[0] === "status") return { code: 0, out: "M  src/a.ets\n" };
    if (args[0] === "pull") return { code: 1, out: "CONFLICT (content): Merge conflict in src/a.ets" };
    if (args[0] === "rebase") return { code: 0, out: "" }; // --abort 成功
    if (args[0] === "push") return { code: 0, out: "SHOULD NOT RUN" };
    return { code: 0, out: "" };
  });
  const result = await gitPush("C:/repo", "msg", undefined, { runCommand });
  assert.equal(result.ok, false);
  assert.match(result.out, /已中止 push/);
  assert.match(result.out, /rebase --abort/);
  assert.ok(!calls.some((c) => c[0] === "push"), "push must not run after a failed rebase");
  assert.ok(calls.some((c) => c[0] === "rebase" && c[1] === "--abort"), "must attempt rebase --abort");
});

test("gitPull reports failure and restores the repo instead of leaving mid-rebase", async () => {
  const calls = [];
  const runCommand = fakeGit((args) => {
    calls.push(args);
    if (args[0] === "pull") return { code: 128, out: "error: could not apply abc123" };
    return { code: 0, out: "" };
  });
  const result = await gitPull("C:/repo", undefined, { runCommand });
  assert.equal(result.ok, false);
  assert.match(result.out, /rebase --abort/);
  assert.ok(calls.some((c) => c[0] === "rebase" && c[1] === "--abort"));
});

// ---------------------------------------------------------------- bm dump 精确匹配

test("bundleListedInstalled matches exact bundle names only", () => {
  const json = JSON.stringify(["com.example.app", "com.example.app2"]);
  assert.equal(bundleListedInstalled(json, "com.example.app"), true);
  assert.equal(bundleListedInstalled(json, "com.example.ap"), false,
    "substring must not count as installed");
  assert.equal(bundleListedInstalled(json, "com.example.app2"), true);

  const lines = "com.example.app\ncom.other.pkg\n";
  assert.equal(bundleListedInstalled(lines, "com.example.app"), true);
  assert.equal(bundleListedInstalled(lines, "com.example.app.extra"), false);

  assert.equal(bundleListedInstalled("no bundles here", "com.example.app"), false);
});

// ---------------------------------------------------------------- 构建日志盘符路径

test("parseBuildLogErrors resolves Windows drive-letter absolute paths", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-buildlog-"));
  try {
    const log = path.join(dir, "build.log");
    fs.writeFileSync(log, [
      "hvigor: FINISHED",
      `File: D:\\Projects\\Quiz\\entry\\src\\main\\ets\\pages\\Index.ets:5:3 Unknown component 'Foo'`,
      `File: "C:/repo/features/shell/src/main/ets/Main.ets":12:7 Missing required property`,
      "File: relative/src/app.ets:2:1 legacy relative form",
    ].join("\n"), "utf8");
    const errors = parseBuildLogErrors(log);
    assert.equal(errors.length, 3, "absolute (backslash + forward slash) and relative forms must parse");
    assert.match(errors[0].file, /^D:\\Projects/);
    assert.equal(errors[0].line, 5);
    assert.match(errors[1].file, /^C:\//);
    assert.equal(errors[1].col, 7);
    assert.equal(errors[2].file, "relative/src/app.ets");
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
