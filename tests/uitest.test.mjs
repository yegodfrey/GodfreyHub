import test from "node:test";
import assert from "node:assert/strict";

const uitest = await import("../dist/core/uitest.js");

test("device shell arguments are quoted as inert POSIX strings", () => {
  assert.equal(typeof uitest.shellQuote, "function");
  assert.equal(uitest.shellQuote("hello world"), "'hello world'");
  assert.equal(uitest.shellQuote("a'b"), "'a'\\''b'");
  assert.equal(uitest.shellQuote("$(touch /data/local/tmp/pwned)"), "'$(touch /data/local/tmp/pwned)'");
});

test("application uninstall uses an explicit target and structured HDC arguments", () => {
  assert.deepEqual(uitest.buildUninstallArgs("com.example.app", "127.0.0.1:5555", false), [
    "-t", "127.0.0.1:5555", "uninstall", "-n", "com.example.app",
  ]);
  assert.deepEqual(uitest.buildUninstallArgs("com.example.app", undefined, true), [
    "uninstall", "-n", "com.example.app", "-k",
  ]);
});

test("UI artifacts normalize Windows drive paths before passing them to HDC", () => {
  assert.equal(typeof uitest.resolveLocalOutputPath, "function");
  assert.equal(
    uitest.resolveLocalOutputPath("D:/Project/Quiz/Workspace/ui-audit/layout.json"),
    "D:\\Project\\Quiz\\Workspace\\ui-audit\\layout.json",
  );
});

test("UI layout analysis detects the lock screen and display bounds", () => {
  assert.deepEqual(uitest.analyzeUiLayout({
    attributes: { bounds: "[0,0][1256,2760]" },
    children: [{
      attributes: { id: "ScreenLockRootComponent" },
      children: [],
    }],
  }), {
    locked: true,
    width: 1256,
    height: 2760,
  });
});

test("device unlock uses display-relative swipe coordinates and verifies the result", async () => {
  const probes = [
    { locked: true, width: 1000, height: 2000 },
    { locked: false, width: 1000, height: 2000 },
  ];
  const swipes = [];
  const result = await uitest.ensureDeviceUnlocked("127.0.0.1:5557", {
    probe: async () => probes.shift(),
    swipe: async (...args) => {
      swipes.push(args);
      return "ok";
    },
    wait: async () => undefined,
  });

  assert.deepEqual(swipes, [[500, 1600, 500, 400, 800, "127.0.0.1:5557"]]);
  assert.deepEqual(result, { wasLocked: true, unlocked: true, attempts: 1 });
});
