import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import {
  buildDirectInstrumentShell,
  buildHvigorTestArgs,
  collectTestArtifacts,
  discoverInstrumentRunner,
  discoverInstrumentTestModules,
  discoverLocalTestModules,
  discoverTestModules,
  hdcServerPortCandidates,
  runHarmonyTests,
  withIsolatedHdcTarget,
} from "../dist/core/test-runner.js";

test("buildDirectInstrumentShell batches scopes without restarting the App and tears down only UI daemon", () => {
  const command = buildDirectInstrumentShell(
    { bundle: "com.example.app", ability: "EntryAbility" },
    { appModule: "entry", testModule: "entry_test", runner: "/ets/testrunner/OpenHarmonyTestRunner" },
    ["UiClosureContract#savePhrase", "VisualContract"],
  );
  assert.match(command, /aa test -b 'com\.example\.app' -m 'entry_test'/);
  assert.match(command, /-s class 'UiClosureContract#savePhrase,VisualContract'/);
  assert.doesNotMatch(command, /aa force-stop/,
    "direct Instrument must preserve the production App lifecycle across selected scopes");
  assert.match(command, /test_status=\$\?; killall -9 uitest[\s\S]*exit \$test_status$/);
  assert.doesNotMatch(command, /&;/, "background process separators must remain valid POSIX shell syntax");
});

test("buildHvigorTestArgs creates a scoped Local Test invocation", () => {
  assert.deepEqual(buildHvigorTestArgs("C:/DevEco/hvigorw.js", {
    mode: "local",
    modules: ["entry", "feature"],
    scopes: ["Suite#case", "OtherSuite"],
    coverage: false,
  }), [
    "C:/DevEco/hvigorw.js",
    "test",
    "-p", "module=entry,feature",
    "-p", "coverage=false",
    "-p", "scope=Suite#case,OtherSuite",
    "--no-daemon",
  ]);
});

test("buildHvigorTestArgs keeps official defaults implicit for Instrument Test", () => {
  assert.deepEqual(buildHvigorTestArgs("C:/DevEco/hvigorw.js", {
    mode: "instrument",
    modules: ["entry"],
    asan: true,
  }), [
    "C:/DevEco/hvigorw.js",
    "onDeviceTest",
    "-p", "module=entry",
    "-p", "ohos-debug-asan=true",
    "--no-daemon",
  ]);
});

test("buildHvigorTestArgs uses the API 26 canonical coverage property for Instrument Test", () => {
  assert.deepEqual(buildHvigorTestArgs("C:/DevEco/hvigorw.js", {
    mode: "instrument",
    modules: ["entry"],
    scopes: ["UiClosureContract"],
    coverage: false,
  }), [
    "C:/DevEco/hvigorw.js",
    "onDeviceTest",
    "-p", "module=entry",
    "-p", "coverage=false",
    "-p", "scope=UiClosureContract",
    "--no-daemon",
  ]);
});

test("buildHvigorTestArgs adds an API 26 incremental coverage patch", () => {
  const patchFile = path.resolve("change.patch");
  assert.deepEqual(buildHvigorTestArgs("C:/DevEco/hvigorw.js", {
    mode: "local",
    coverage: true,
    patch: patchFile,
  }), [
    "C:/DevEco/hvigorw.js",
    "test",
    "-p", "coverage=true",
    "-p", "patch=" + patchFile,
    "--no-daemon",
  ]);
  assert.throws(() => buildHvigorTestArgs("C:/DevEco/hvigorw.js", {
    mode: "local",
    patch: "relative.patch",
  }), /必须是绝对路径/);
});

test("discoverInstrumentRunner requires an explicit API 26 test runner", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-runner-"));
  try {
    assert.throws(() => discoverInstrumentRunner({ name: "entry", path: root }), /缺少显式测试配置/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("discoverTestModules honors build-profile srcPath mappings", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-modules-"));
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), `{
      modules: [
        { name: 'entry', srcPath: './modules/app' },
        { name: 'feature' },
      ],
    }`, "utf8");
    assert.deepEqual(discoverTestModules(root), [
      { name: "entry", path: path.join(root, "modules", "app") },
      { name: "feature", path: path.join(root, "feature") },
    ]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("discoverInstrumentTestModules keeps only modules declaring an ohosTest target", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-instrument-modules-"));
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), `{
      modules: [
        { name: 'entry', srcPath: './entry' },
        { name: 'skysdk', srcPath: './skysdk' },
      ],
    }`, "utf8");
    fs.mkdirSync(path.join(root, "entry"), { recursive: true });
    fs.mkdirSync(path.join(root, "skysdk"), { recursive: true });
    fs.writeFileSync(path.join(root, "entry", "build-profile.json5"),
      "{ targets: [{ name: 'default' }, { name: 'ohosTest' }] }", "utf8");
    fs.writeFileSync(path.join(root, "skysdk", "build-profile.json5"),
      "{ targets: [{ name: 'default' }] }", "utf8");

    assert.deepEqual(discoverInstrumentTestModules(root), [
      { name: "entry", path: path.join(root, "entry") },
    ]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("collectTestArtifacts returns Local Test results and coverage reports", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-results-"));
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), "{ modules: [{ name: 'entry', srcPath: './modules/app' }] }", "utf8");
    const base = path.join(root, "modules", "app", ".test", "default");
    const resultFile = path.join(base, "intermediates", "test", "coverage_data", "test_result.txt");
    const coverageHtml = path.join(base, "outputs", "test", "reports", "index.html");
    const coverageJson = path.join(base, "outputs", "test", "reports", "coverageReport.json");
    for (const file of [resultFile, coverageHtml, coverageJson]) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, "ok", "utf8");
    }

    assert.deepEqual(collectTestArtifacts(root, ["entry"], "local", true, false), {
      modules: ["entry"],
      reports: {
        entry: {
          testResultFile: resultFile,
          coverageHtml,
          coverageJson,
        },
      },
      collectedModules: ["entry"],
      missingModules: [],
    });
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("runHarmonyTests fails when hvigor succeeds but the test report contains errors", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-report-errors-"));
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), "{ modules: [{ name: 'entry' }] }", "utf8");
    const resultFile = path.join(
      root,
      "entry",
      ".test",
      "default",
      "intermediates",
      "test",
      "coverage_data",
      "test_result.txt",
    );
    const entry = {
      name: "ReportErrors",
      repoRoot: root,
      harmonyRoot: root,
      bundle: "com.example.reporterrors",
      ability: "EntryAbility",
      module: "entry",
      modulePath: "entry",
      target: "default",
      instance: "ReportErrors",
    };

    const result = await runHarmonyTests(entry, {
      mode: "local",
      modules: ["entry"],
      coverage: false,
    }, {
      toolchain: {
        node: process.execPath,
        hvigorwJs: "C:/DevEco/hvigorw.js",
        deveco: "C:/DevEco",
      },
      runCommand: async () => {
        fs.mkdirSync(path.dirname(resultFile), { recursive: true });
        fs.writeFileSync(resultFile, [
          "class=CoreFlow",
          "test=appLaunchAndPrivacy",
          "Error in appLaunchAndPrivacy, Driver.create() returned null",
          "result=Error",
          "Tests run: 4, Failure: 0, Error: 4, Pass: 0, Ignore: 0",
        ].join("\n"), "utf8");
        return { code: 0, out: "BUILD SUCCESSFUL", timedOut: false, truncated: false };
      },
    });

    assert.equal(result.success, false);
    assert.notEqual(result.code, 0);
    assert.match(result.log, /4 test errors/i);
    assert.equal(result.reports.entry.testResultFile, resultFile);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("runHarmonyTests fails when hvigor succeeds without a fresh test report", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-report-missing-"));
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), "{ modules: [{ name: 'entry' }] }", "utf8");
    const entry = {
      name: "MissingReport",
      repoRoot: root,
      harmonyRoot: root,
      bundle: "com.example.missingreport",
      ability: "EntryAbility",
      module: "entry",
      modulePath: "entry",
      target: "default",
      instance: "MissingReport",
    };
    const result = await runHarmonyTests(entry, {
      mode: "local",
      modules: ["entry"],
      coverage: false,
    }, {
      toolchain: {
        node: process.execPath,
        hvigorwJs: "C:/DevEco/hvigorw.js",
        deveco: "C:/DevEco",
      },
      runCommand: async () => ({ code: 0, out: "BUILD SUCCESSFUL", timedOut: false, truncated: false }),
    });

    assert.equal(result.success, false);
    assert.notEqual(result.code, 0);
    assert.match(result.log, /未生成.*测试报告/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("discoverLocalTestModules skips source modules without a local test entry", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-local-modules-"));
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), `{
      modules: [
        { name: 'entry', srcPath: './entry' },
        { name: 'nativeRuntime', srcPath: './nativeRuntime' },
        { name: 'sharedUi', srcPath: './sharedUi' },
        { name: 'cangjieLib', srcPath: './cangjieLib' },
      ],
    }`, "utf8");
    fs.mkdirSync(path.join(root, "entry", "src", "test"), { recursive: true });
    fs.writeFileSync(path.join(root, "entry", "src", "test", "List.test.ets"), "export default function testsuite() {}", "utf8");
    fs.mkdirSync(path.join(root, "nativeRuntime", "src", "main"), { recursive: true });
    fs.mkdirSync(path.join(root, "sharedUi", "src", "test"), { recursive: true });
    fs.writeFileSync(path.join(root, "sharedUi", "src", "test", "Helper.test.ets"), "", "utf8");
    fs.mkdirSync(path.join(root, "cangjieLib", "src", "test", "cangjie"), { recursive: true });
    fs.writeFileSync(path.join(root, "cangjieLib", "src", "test", "cangjie", "runtime_test.cj"), "", "utf8");

    assert.deepEqual(discoverLocalTestModules(root), [
      { name: "entry", path: path.join(root, "entry") },
      { name: "cangjieLib", path: path.join(root, "cangjieLib") },
    ]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("coverage-disabled Instrument Test deploys unsigned HAPs and preserves direct Hypium reports", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-direct-instrument-"));
  const events = [];
  const deployPorts = [];
  let isolatedListCalls = 0;
  let directSummary = "Tests run: 1, Failure: 0, Error: 0, Pass: 1, Ignore: 0";
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), "{ modules: [{ name: 'entry' }] }", "utf8");
    fs.mkdirSync(path.join(root, "entry", "src", "ohosTest"), { recursive: true });
    fs.writeFileSync(path.join(root, "entry", "src", "ohosTest", "module.json5"), `{
      module: { name: 'entry_test', testRunner: { name: 'OpenHarmonyTestRunner' } }
    }`, "utf8");
    const entry = {
      name: "DirectInstrument",
      repoRoot: root,
      harmonyRoot: root,
      bundle: "com.example.direct",
      ability: "EntryAbility",
      module: "entry",
      modulePath: "entry",
      target: "default",
      instance: "DirectInstrument",
    };
    const fakeRun = async (command, args, options = {}) => {
      const serverPort = options.env?.OHOS_HDC_SERVER_PORT;
      if (args.join(" ") === "list targets") {
        if (serverPort) isolatedListCalls++;
        return {
          code: 0,
          out: serverPort ? (isolatedListCalls > 1 ? "127.0.0.1:5557\n" : "") : "127.0.0.1:5557\n",
          timedOut: false,
          truncated: false,
        };
      }
      if (command === process.execPath) events.push("unexpected-hvigor");
      if (args[0] === "-t" && args[2] === "shell" && String(args[3]).includes("aa test")) {
        events.push("aa-test:" + serverPort);
        return {
          code: 0,
          out: directSummary,
          timedOut: false,
          truncated: false,
        };
      }
      return { code: 0, out: "", timedOut: false, truncated: false };
    };
    const result = await runHarmonyTests(entry, {
      mode: "instrument",
      modules: ["entry"],
      scopes: ["UiClosureContract#savePhrase", "VisualContract"],
      coverage: false,
    }, {
      toolchain: {
        node: process.execPath,
        hdc: "C:/DevEco/hdc.exe",
        hvigorwJs: "C:/DevEco/hvigorw.js",
        deveco: "C:/DevEco",
      },
      resolveDevice: async () => "127.0.0.1:5557",
      ensureUnlocked: async () => ({ wasLocked: false, unlocked: true, attempts: 0 }),
      buildDeploy: async (_entry, opts) => {
        deployPorts.push(opts.port);
        assert.equal(opts.clean, true, "direct Instrument must rebuild shared file: source modules");
        events.push("deploy:" + opts.buildTests + ":" + opts.freshInstall + ":" + opts.testTarget);
        return { code: 0, target: "127.0.0.1:5557", targetType: "emulator", log: "deployed unsigned" };
      },
      runCommand: fakeRun,
    });

    assert.equal(result.success, true);
    assert.deepEqual(deployPorts, [undefined]);
    assert.equal(events[0], "deploy:true:true:ArkTS");
    assert.match(events[1], /^aa-test:187\d{2}$/);
    assert.equal(events.filter((event) => event.startsWith("aa-test:")).length, 1,
      "all selected scopes must share one direct Instrument process");
    assert.match(fs.readFileSync(result.reports.entry.testResultFile, "utf8"), /Tests run: 1/);

    directSummary = "Tests run: 1, Failure: 0, Error: 1, Pass: 0, Ignore: 0";
    const failed = await runHarmonyTests(entry, {
      mode: "instrument",
      modules: ["entry"],
      scopes: ["UiClosureContract#reportsFailure"],
      coverage: false,
      port: 5557,
    }, {
      toolchain: {
        node: process.execPath,
        hdc: "C:/DevEco/hdc.exe",
        hvigorwJs: "C:/DevEco/hvigorw.js",
        deveco: "C:/DevEco",
      },
      resolveDevice: async () => "127.0.0.1:5557",
      ensureUnlocked: async () => ({ wasLocked: false, unlocked: true, attempts: 0 }),
      buildDeploy: async () => ({ code: 0, target: "127.0.0.1:5557", targetType: "emulator", log: "deployed unsigned" }),
      runCommand: fakeRun,
    });

    assert.equal(failed.success, false);
    assert.equal(failed.code, 2);
    assert.deepEqual(failed.missingModules, []);
    assert.match(failed.log, /1 test errors/i);
    assert.match(fs.readFileSync(failed.reports.entry.testResultFile, "utf8"), /Error: 1/);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("Instrument Test unlocks the selected device before isolating HDC", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-unlock-"));
  const events = [];
  let isolatedListCalls = 0;
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), "{ modules: [{ name: 'entry' }] }", "utf8");
    const resultFile = path.join(root, "entry", ".test", "default", "intermediates", "ohosTest", "coverage_data", "test_result.txt");
    const entry = {
      name: "UnlockTarget",
      repoRoot: root,
      harmonyRoot: root,
      bundle: "com.example.unlock",
      ability: "EntryAbility",
      module: "entry",
      modulePath: "entry",
      target: "default",
      instance: "UnlockTarget",
    };
    const fakeRun = async (command, args, options = {}) => {
      const serverPort = options.env?.OHOS_HDC_SERVER_PORT;
      if (args.join(" ") === "list targets") {
        if (serverPort) isolatedListCalls++;
        return {
          code: 0,
          out: serverPort
            ? (isolatedListCalls > 1 ? "127.0.0.1:5557\n" : "")
            : "127.0.0.1:5557\n",
          timedOut: false,
          truncated: false,
        };
      }
      if (command === process.execPath) {
        events.push("hvigor");
        fs.mkdirSync(path.dirname(resultFile), { recursive: true });
        fs.writeFileSync(resultFile, "Tests run: 1, Failure: 0, Error: 0, Pass: 1, Ignore: 0", "utf8");
      }
      return { code: 0, out: "BUILD SUCCESSFUL", timedOut: false, truncated: false };
    };

    const result = await runHarmonyTests(entry, {
      mode: "instrument",
      modules: ["entry"],
      coverage: true,
    }, {
      toolchain: {
        node: process.execPath,
        hdc: "C:/DevEco/hdc.exe",
        hvigorwJs: "C:/DevEco/hvigorw.js",
        deveco: "C:/DevEco",
      },
      resolveDevice: async () => "127.0.0.1:5557",
      ensureUnlocked: async (target) => {
        events.push("unlock:" + target);
        return { wasLocked: true, unlocked: true, attempts: 1 };
      },
      runCommand: fakeRun,
    });

    assert.equal(result.success, true);
    assert.deepEqual(events, ["unlock:127.0.0.1:5557", "hvigor"]);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("Instrument Test isolates the selected HDC target and restores all prior connections", async () => {
  const calls = [];
  let isolatedListCalls = 0;
  const fakeRun = async (_command, args, options = {}) => {
    const serverPort = options.env?.OHOS_HDC_SERVER_PORT;
    calls.push({ args: [...args], serverPort });
    if (args.join(" ") === "list targets") {
      if (serverPort) isolatedListCalls++;
      return {
        code: 0,
        out: serverPort
          ? (isolatedListCalls > 1 ? "127.0.0.1:5557\n" : "")
          : "127.0.0.1:5555\n127.0.0.1:5557\n",
        timedOut: false,
        truncated: false,
      };
    }
    return { code: 0, out: "", timedOut: false, truncated: false };
  };

  const value = await withIsolatedHdcTarget(
    "C:/DevEco/hdc.exe",
    "127.0.0.1:5557",
    async (env) => {
      calls.push({ args: ["hvigor"], serverPort: env.OHOS_HDC_SERVER_PORT });
      return 42;
    },
    { runCommand: fakeRun, serverPort: 18714, retryDelayMs: 0 },
  );

  assert.equal(value, 42);
  assert.deepEqual(calls, [
    { args: ["list", "targets"], serverPort: undefined },
    { args: ["kill"], serverPort: undefined },
    { args: ["start"], serverPort: "18714" },
    { args: ["tconn", "127.0.0.1:5557"], serverPort: "18714" },
    { args: ["list", "targets"], serverPort: "18714" },
    { args: ["tconn", "127.0.0.1:5557"], serverPort: "18714" },
    { args: ["list", "targets"], serverPort: "18714" },
    { args: ["hvigor"], serverPort: "18714" },
    { args: ["kill"], serverPort: "18714" },
    { args: ["start"], serverPort: undefined },
    { args: ["tconn", "127.0.0.1:5555"], serverPort: undefined },
    { args: ["tconn", "127.0.0.1:5557"], serverPort: undefined },
  ]);
});

test("HDC temporary port discovery rotates through a bounded dedicated pool without pre-binding", () => {
  const source = fs.readFileSync(new URL("../src/core/test-runner.ts", import.meta.url), "utf8");
  assert.doesNotMatch(source, /server\.listen\(port/,
    "closing a probe listener leaves the Windows port unavailable long enough for hdc start to fail silently");
  const ports = hdcServerPortCandidates(7);
  assert.equal(ports.length, 8);
  assert.equal(new Set(ports).size, ports.length);
  assert.equal(ports.every((port) => port >= 18710 && port <= 18799), true);
});

test("Instrument Test falls back when the first temporary HDC server port is unhealthy", async () => {
  const fakeRun = async (_command, args, options = {}) => {
    const serverPort = options.env?.OHOS_HDC_SERVER_PORT;
    if (args.join(" ") === "list targets") {
      return {
        code: 0,
        out: serverPort === "18711"
          ? "127.0.0.1:5557\n"
          : (serverPort ? "" : "127.0.0.1:5555\n127.0.0.1:5557\n"),
        timedOut: false,
        truncated: false,
      };
    }
    return { code: 0, out: "", timedOut: false, truncated: false };
  };

  const selectedPort = await withIsolatedHdcTarget(
    "C:/DevEco/hdc.exe",
    "127.0.0.1:5557",
    async (env) => env.OHOS_HDC_SERVER_PORT,
    { runCommand: fakeRun, serverPorts: [18710, 18711], retryDelayMs: 0 },
  );
  assert.equal(selectedPort, "18711");
});

test("Instrument Test captures a tagged HiLog snapshot before restoring the isolated HDC server", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-test-hilog-"));
  const hilogCommands = [];
  let isolatedListCalls = 0;
  try {
    fs.writeFileSync(path.join(root, "build-profile.json5"), "{ modules: [{ name: 'entry' }] }", "utf8");
    const resultFile = path.join(root, "entry", ".test", "default", "intermediates", "ohosTest", "coverage_data", "test_result.txt");
    const entry = {
      name: "TaggedDeviceLog",
      repoRoot: root,
      harmonyRoot: root,
      bundle: "com.example.taggedlog",
      ability: "EntryAbility",
      module: "entry",
      modulePath: "entry",
      target: "default",
      instance: "TaggedDeviceLog",
    };
    const fakeRun = async (command, args, options = {}) => {
      const serverPort = options.env?.OHOS_HDC_SERVER_PORT;
      if (args.join(" ") === "list targets") {
        if (serverPort) isolatedListCalls++;
        return {
          code: 0,
          out: serverPort
            ? (isolatedListCalls > 1 ? "127.0.0.1:5557\n" : "")
            : "127.0.0.1:5557\n",
          timedOut: false,
          truncated: false,
        };
      }
      if (command === process.execPath) {
        fs.mkdirSync(path.dirname(resultFile), { recursive: true });
        fs.writeFileSync(resultFile, "Tests run: 2, Failure: 0, Error: 0, Pass: 2, Ignore: 0", "utf8");
        return { code: 0, out: "BUILD SUCCESSFUL", timedOut: false, truncated: false };
      }
      const shellCommand = args[3];
      if (args[0] === "-t" && args[2] === "shell" && typeof shellCommand === "string") {
        hilogCommands.push({ command: shellCommand, serverPort });
        if (shellCommand === "hilog -g -t app") {
          return { code: 0, out: "Log type app buffer size is 1.0M", timedOut: false, truncated: false };
        }
        if (shellCommand.includes("hilog -x -v time -t app") && shellCommand.includes("StargazeTest")) {
          return {
            code: 0,
            out: "08-16 01:00:00.000 1 1 I A02300/StargazeTest: event=test.case.start\n08-16 01:00:01.000 1 1 I A02300/StargazeTest: event=test.case.pass\n",
            timedOut: false,
            truncated: false,
          };
        }
      }
      return { code: 0, out: "", timedOut: false, truncated: false };
    };

    const result = await runHarmonyTests(entry, {
      mode: "instrument",
      modules: ["entry"],
      coverage: true,
      deviceLogTag: "StargazeTest",
      deviceLogDomain: "0x2300",
    }, {
      toolchain: {
        node: process.execPath,
        hdc: "C:/DevEco/hdc.exe",
        hvigorwJs: "C:/DevEco/hvigorw.js",
        deveco: "C:/DevEco",
      },
      resolveDevice: async () => "127.0.0.1:5557",
      ensureUnlocked: async () => ({ wasLocked: false, unlocked: true, attempts: 0 }),
      runCommand: fakeRun,
    });

    assert.equal(result.success, true);
    assert.equal(result.deviceLog?.tag, "StargazeTest");
    assert.equal(result.deviceLog?.domain, "0x2300");
    assert.equal(result.deviceLog?.lineCount, 2);
    assert.match(fs.readFileSync(result.deviceLog.logFile, "utf8"), /test\.case\.start[\s\S]*test\.case\.pass/);
    assert.deepEqual(hilogCommands.map((call) => call.command), [
      "hilog -g -t app",
      "hilog -G 16M -t app",
      "hilog -r -t app",
      "hilog -x -v time -t app -D '0x2300' -T 'StargazeTest'",
      "hilog -G 1024K -t app",
    ]);
    assert.equal(hilogCommands.every((call) => typeof call.serverPort === "string"), true,
      "capture and restoration must happen before the isolated HDC server is torn down");
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
