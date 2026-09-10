import test from "node:test";
import assert from "node:assert/strict";

const hilog = await import("../dist/core/hilog.js");

test("collectAppHilog returns only the requested running app PID logs", async () => {
  assert.equal(typeof hilog.collectAppHilog, "function");
  let runArgs = [];
  const result = await hilog.collectAppHilog({
    target: "127.0.0.1:5555",
    bundleName: "com.example.app",
    lines: 2,
    save: false,
  }, {
    hdc: "hdc",
    shellCommand: async (_target, command) => {
      assert.equal(command, "pidof 'com.example.app'");
      return "4321";
    },
    runCommand: async (_command, args) => {
      runArgs = args;
      return {
        code: 0,
        out: "old line\napp line one\napp line two\n",
        timedOut: false,
        truncated: false,
      };
    },
  });

  assert.match(runArgs.at(-1), /hilog .*--pid=4321/);
  assert.deepEqual(result, {
    target: "127.0.0.1:5555",
    bundleName: "com.example.app",
    pid: 4321,
    restarted: false,
    lineCount: 2,
    logFile: null,
    log: "app line one\napp line two",
  });
});

test("collectAppHilog never falls back to unfiltered device logs when the app is stopped", async () => {
  let runCalled = false;
  await assert.rejects(() => hilog.collectAppHilog({
    target: "127.0.0.1:5555",
    bundleName: "com.example.stopped",
    save: false,
  }, {
    hdc: "hdc",
    shellCommand: async () => "",
    runCommand: async () => {
      runCalled = true;
      return { code: 0, out: "must not be returned", timedOut: false, truncated: false };
    },
  }), /com\.example\.stopped.*未运行/);
  assert.equal(runCalled, false);
});

test("collectFilteredHilog queries tagged device logs without requiring a live PID", async () => {
  assert.equal(typeof hilog.collectFilteredHilog, "function");
  let runArgs = [];
  const result = await hilog.collectFilteredHilog({
    target: "127.0.0.1:5555",
    tag: "StargazeTest",
    keyword: "GetRootByWindow",
    lines: 2,
    save: false,
  }, {
    hdc: "hdc",
    runCommand: async (_command, args) => {
      runArgs = args;
      return {
        code: 0,
        out: "ignored line\nGetRootByWindow first\nGetRootByWindow second\n",
        timedOut: false,
        truncated: false,
      };
    },
  });

  assert.match(runArgs.at(-1), /hilog .* -T 'StargazeTest'/);
  assert.doesNotMatch(runArgs.at(-1), /--pid=/);
  assert.deepEqual(result, {
    target: "127.0.0.1:5555",
    lineCount: 2,
    logFile: null,
    log: "GetRootByWindow first\nGetRootByWindow second",
  });
});

test("collectFilteredHilog rejects an unfiltered whole-device dump", async () => {
  let runCalled = false;
  await assert.rejects(() => hilog.collectFilteredHilog({
    target: "127.0.0.1:5555",
    save: false,
  }, {
    hdc: "hdc",
    runCommand: async () => {
      runCalled = true;
      return { code: 0, out: "must not be returned", timedOut: false, truncated: false };
    },
  }), /tag、domain、keyword.*至少提供一项/);
  assert.equal(runCalled, false);
});
