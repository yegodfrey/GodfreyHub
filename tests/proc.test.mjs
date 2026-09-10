import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { run, runDetached } from "../dist/core/proc.js";

test("runDetached exposes an awaitable launch result", () => {
  const launch = runDetached(process.execPath, ["-e", "process.exit(0)"]);

  assert.equal(typeof launch?.then, "function");
});

test("run reports a timeout and returns promptly", async () => {
  const started = Date.now();
  const result = await run(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { timeoutMs: 100 });

  assert.equal(result.timedOut, true);
  assert.ok(Date.now() - started < 5_000, "timed-out process should not remain alive");
});

test("run terminates the process tree when the request-level signal aborts", async () => {
  const controller = new AbortController();
  const started = Date.now();
  const pending = run(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { signal: controller.signal });
  setTimeout(() => controller.abort(), 100);

  const result = await pending;
  assert.equal(result.cancelled, true);
  assert.equal(result.code, 124);
  assert.ok(Date.now() - started < 5_000, "aborted process should not remain alive");
});

test("run marks an already-aborted signal as cancelled", async () => {
  const controller = new AbortController();
  controller.abort();
  const result = await run(process.execPath, ["-e", "process.exit(0)"], { signal: controller.signal });

  assert.equal(result.cancelled, true);
  assert.equal(result.code, 124);
});

test("run bounds captured output while preserving the tail", async () => {
  const result = await run(process.execPath, ["-e", "process.stdout.write('A'.repeat(10000) + 'TAIL')"], {
    maxOutputBytes: 1_024,
  });

  assert.equal(result.code, 0);
  assert.equal(result.truncated, true);
  assert.match(result.out, /TAIL$/);
  assert.ok(Buffer.byteLength(result.out, "utf8") < 1_200);
});

test("run executes Windows batch tools discovered inside DevEco Studio", {
  skip: process.platform !== "win32",
}, async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-proc-test-"));
  const batch = path.join(root, "tool.bat");
  fs.writeFileSync(batch, "@echo off\r\necho BATCH_OK\r\n", "utf8");
  try {
    const result = await run(batch, []);
    assert.equal(result.code, 0);
    assert.match(result.out, /BATCH_OK/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
