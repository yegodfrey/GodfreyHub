import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

import * as emulator from "../dist/core/emulator.js";

test("emulator enforces the DevEco HDC port range", () => {
  assert.equal(emulator.MIN_HDC_PORT, 10000);
  assert.equal(emulator.MAX_HDC_PORT, 16555);
  assert.equal(emulator.isValidHdcPort(9999), false);
  assert.equal(emulator.isValidHdcPort(10000), true);
  assert.equal(emulator.isValidHdcPort(16555), true);
  assert.equal(emulator.isValidHdcPort(16556), false);
});

test("emulator exposes only the official boot modes", () => {
  assert.equal(emulator.isValidEmulatorBootMode("coldboot"), true);
  assert.equal(emulator.isValidEmulatorBootMode("snapshot"), true);
  assert.equal(emulator.isValidEmulatorBootMode("reset"), true);
  assert.equal(emulator.isValidEmulatorBootMode("wipe"), false);
});

test("emulator defaults to a multi-instance-safe 3 GB guest with validated overrides", () => {
  const tools = fs.readFileSync(new URL("../src/tools/emulator.ts", import.meta.url), "utf8");
  const source = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");

  assert.equal(emulator.DEFAULT_EMULATOR_MEMORY_GB, 3);
  assert.equal(emulator.isValidEmulatorMemory(2), true);
  assert.equal(emulator.isValidEmulatorMemory(3), true);
  assert.equal(emulator.isValidEmulatorMemory(32), true);
  assert.equal(emulator.isValidEmulatorMemory(1), false);
  assert.equal(emulator.isValidEmulatorMemory(3.5), false);
  assert.match(source, /opts\.memory \?\? DEFAULT_EMULATOR_MEMORY_GB/);
  assert.match(source, /args\.push\("-memory", String\(memory\)\)/);
  assert.match(tools, /内存 GB, 默认 3；适合双模拟器并行测试/);
});

test("emulator crash diagnosis distinguishes GPU bridge failure and host memory pressure", () => {
  assert.deepEqual(emulator.classifyEmulatorCrashLogs(
    "[Critical] QemuManager.cpp(CheckGPUThread:388)",
    "GL import failed: 0x502\nreal share context is NULL",
    "memory is low, freeMem: 1906",
  ), ["GPU 渲染桥或宿主 OpenGL 驱动失效", "宿主机可用内存过低"]);
  assert.deepEqual(emulator.classifyEmulatorCrashLogs("normal", "normal", "normal"), []);
});

test("emulator startup reports a fresh native crash before the ordinary online timeout", async () => {
  const result = await emulator.waitInstanceStart(
    "Quiz",
    ["127.0.0.1:11000"],
    undefined,
    100,
    1000,
    undefined,
    async () => ["127.0.0.1:11000"],
    () => ({ path: "crash_report.zip", mtimeMs: 101 }),
    0,
  );
  assert.deepEqual(result, { target: "", crashReport: "crash_report.zip" });
});

test("emulator startup still selects a new HDC target when no crash occurs", async () => {
  const result = await emulator.waitInstanceStart(
    "Quiz",
    ["127.0.0.1:11000"],
    undefined,
    100,
    1000,
    undefined,
    async () => ["127.0.0.1:11000", "127.0.0.1:11001"],
    () => undefined,
    0,
  );
  assert.deepEqual(result, { target: "127.0.0.1:11001" });
});

test("emulator startup reports an exact launched process exit without waiting for timeout", async () => {
  const result = await emulator.waitInstanceStart(
    "Quiz",
    ["127.0.0.1:11000"],
    undefined,
    100,
    1000,
    undefined,
    async () => ["127.0.0.1:11000"],
    () => undefined,
    0,
    43210,
    () => false,
  );
  assert.deepEqual(result, {
    target: "",
    launchFailure: "Emulator.exe 进程已退出 (PID 43210)",
  });
});

test("emu_start exposes data-preserving cold boot recovery", () => {
  const tools = fs.readFileSync(new URL("../src/tools/emulator.ts", import.meta.url), "utf8");
  const source = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");

  assert.match(tools,
    /bootMode: z\.enum\(\["coldboot", "snapshot", "reset"\]\)/);
  assert.match(source,
    /args\.push\("-bootmode", bootMode\)[\s\S]*?args\.push\("-hdcPort", String\(port\)\)/,
    "boot mode must stay adjacent to the instance name before transport options");
  assert.match(source, /coldboot、snapshot 或 reset/);
});

test("emu_start acknowledges in-window boots and keeps slow boots alive in the background", async () => {
  const tools = fs.readFileSync(new URL("../src/tools/emulator.ts", import.meta.url), "utf8");

  // 启动作业不得绑请求 signal：客户端断开(/超时)不得把正常启动误报成失败
  // （2026-10-01 事故：18s 客户端超时 → ctx.signal 中止等待 → 抛"等待上线超时(240s)"假失败，
  //   而模拟器实际在几分钟后正常上线）。
  assert.match(tools, /startInstanceAcked\(args\.name, args\.port, args\.bootMode\)/);
  assert.doesNotMatch(tools, /startInstanceAcked\([^)]*ctx\.signal/);
  assert.match(tools, /await startInstanceAcked/);
  // 确认窗外返回结构化 booting（可收割），而不是把 240s 阻塞在请求里被客户端掐断。
  assert.match(tools, /status: "booting"/);
  assert.match(tools, /BOOT_ACK_WINDOW_MS/);
  assert.equal(emulator.BOOT_ACK_WINDOW_MS, 15000);
  assert.equal(emulator.bootOutcome("no-such-instance"), undefined);
  // 同实例在途作业幂等：二次调用收割同一启动，不重复拉起。
  assert.match(emulator.startInstanceAcked.toString(), /bootJobs\.get\(name\)/);
  // emu_list 暴露 booting 位供轮询方区分"已停"与"正在启动"。
  assert.match(tools, /bootOutcome\(i\.name\)\?\.status === "booting"/);
});

test("emulator target classification: 127.0.0.1 ports are emulators, serials are real devices", () => {
  assert.equal(emulator.isEmulatorTarget("127.0.0.1:5555"), true);
  assert.equal(emulator.isEmulatorTarget("127.0.0.1:16552"), true);
  assert.equal(emulator.isEmulatorTarget("localhost:10000"), true);
  assert.equal(emulator.isEmulatorTarget("2NP0224C05006087"), false);
  assert.equal(emulator.isEmulatorTarget("HBN-AL00"), false);
  assert.equal(emulator.isEmulatorTarget("192.168.1.10:8888"), false);
});

test("online device classification keeps wireless/serial real devices visible next to emulators", () => {
  assert.deepEqual(emulator.classifyOnlineTargets([
    "127.0.0.1:5555",
    "127.0.0.1:65500",
    "192.168.3.131:38367",
    "HBN-AL00",
    "localhost:10000",
  ]), {
    emulators: ["127.0.0.1:5555"],
    realDevices: ["192.168.3.131:38367", "HBN-AL00"],
  });
  assert.deepEqual(emulator.classifyOnlineTargets([]), { emulators: [], realDevices: [] });
});

test("device-facing selectors default to every online target so a lone real device is usable", () => {
  const hubTools = fs.readFileSync(new URL("../src/tools/hub.ts", import.meta.url), "utf8");
  const emulatorSource = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");
  const uitest = fs.readFileSync(new URL("../src/core/uitest.ts", import.meta.url), "utf8");
  const hilog = fs.readFileSync(new URL("../src/core/hilog.ts", import.meta.url), "utf8");
  const verify = fs.readFileSync(new URL("../src/core/verify.ts", import.meta.url), "utf8");

  // hub_status/emu_list must report the classified breakdown, not the emulator-only list.
  assert.match(hubTools, /onlineDevicesClassified\(\)/);
  assert.match(hubTools, /realDevices: online\.realDevices/);
  assert.doesNotMatch(hubTools, /listInstanceDetails\(\), onlineTargets\(\)/);
  // enableUiTest must enable testmode on a real device when no emulator is online.
  assert.match(emulatorSource, /const targets = await onlineAllTargets\(\);/);
  // UI automation, HiLog and visual verify must default to every online target.
  assert.match(uitest, /const list = await onlineAllTargets\(\);/);
  assert.match(hilog, /deps\.onlineTargetList \?\? onlineAllTargets/);
  assert.match(hilog, /\(await onlineAllTargets\(\)\)\[0\]/);
  // verifyUi 走 VerifyUiDeps 注入缝, 但缺省仍回落全量在线设备(与 hilog 同款形状)。
  assert.match(verify, /deps\.onlineTargetsCommand \?\? onlineAllTargets/);
  assert.match(verify, /\(await \(deps\.onlineTargetsCommand \?\? onlineAllTargets\)\(\)\)\[0\]/);
});

test("emulator target parsing rejects every empty and diagnostic marker", () => {
  assert.deepEqual(emulator.parseHdcTargets([
    "[Empty]",
    "Empty Set",
    "[Fail]Connect failed",
    "[D][2026-09-03 17:00:00.000][abcd][client.cpp:1] diagnostic",
    "127.0.0.1:5555",
    "physical-device_serial-01",
    "127.0.0.1:5555",
  ].join("\n")), ["127.0.0.1:5555", "physical-device_serial-01"]);
});

test("emulator discovery accepts DevEco's auto-assigned legacy port without allowing it explicitly", () => {
  assert.equal(emulator.isValidHdcPort(5555), false);
  assert.equal(emulator.isDiscoverableHdcPort(5555), true);
  assert.equal(emulator.isDiscoverableHdcPort(10000), true);
  assert.equal(emulator.isDiscoverableHdcPort(16556), false);
});

test("emulator snapshots online targets before launching a new instance", async () => {
  assert.equal(typeof emulator.launchAndWaitForNewTarget, "function");

  const events = [];
  const target = await emulator.launchAndWaitForNewTarget(
    async () => {
      events.push("launch");
    },
    async () => {
      events.push("snapshot");
      return ["127.0.0.1:10000"];
    },
    async (before) => {
      events.push("wait:" + before.join(","));
      return "127.0.0.1:10002";
    },
  );

  assert.equal(target, "127.0.0.1:10002");
  assert.deepEqual(events, ["snapshot", "launch", "wait:127.0.0.1:10000"]);
});

test("emulator startup binds window naming to the exact launched process", () => {
  const source = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");
  const launcher = fs.readFileSync(new URL("../scripts/win_launch_emulator.ps1", import.meta.url), "utf8");
  assert.match(source, /launcher, executable, instanceName, statusPath, \.\.\.args/);
  assert.doesNotMatch(source, /WaitSec",\s*"90"/,
    "new instances must not fall back to a global post-launch window scan");
  assert.match(launcher, /Set-ExactProcessWindowTitle/);
  assert.match(launcher, /TargetProcessId \(\[uint32\]\$process\.Id\)/);
  assert.ok(launcher.indexOf("Add-Type -TypeDefinition") <
    launcher.indexOf("[System.Diagnostics.Process]::Start($startInfo)"),
  "the exact-PID watcher must be ready before Emulator.exe is created");
  assert.ok(launcher.indexOf("[System.Diagnostics.Process]::Start($startInfo)") <
    launcher.indexOf("Write-LaunchStatus @{ state = 'started'"),
  "the handshake must report only an actually created emulator PID");
  assert.match(launcher, /AddMinutes\(4\)/,
    "the title watcher must survive a full API 26 cold boot and late Qt title reset");
});

test("Windows emulator startup escapes the MCP process lifetime", () => {
  const source = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");
  const launcher = fileURLToPath(new URL("../scripts/win_launch_emulator.vbs", import.meta.url));
  const processLauncher = fileURLToPath(new URL("../scripts/win_launch_emulator.ps1", import.meta.url));
  assert.equal(fs.existsSync(launcher), true, "the WScript launcher must be packaged with GodfreyHub");
  assert.equal(fs.existsSync(processLauncher), true, "the no-console process launcher must be packaged with GodfreyHub");
  assert.match(source, /launchEmulatorProcess/);
  assert.doesNotMatch(source, /runDetached\(tc\.emulator/,
    "Node detached children can still be killed when the one-shot MCP process exits on Windows");
});

test("Windows emulator startup suppresses only its console window", () => {
  const dispatcher = fs.readFileSync(new URL("../scripts/win_launch_emulator.vbs", import.meta.url), "utf8");
  const launcher = fs.readFileSync(new URL("../scripts/win_launch_emulator.ps1", import.meta.url), "utf8");

  assert.match(dispatcher, /win_launch_emulator\.ps1/);
  assert.match(dispatcher, /shell\.Run\(command, 0, False\)/,
    "HDC readiness must run concurrently with the hidden exact-PID title watcher");
  assert.match(launcher, /UseShellExecute\s*=\s*\$false/);
  assert.match(launcher, /CreateNoWindow\s*=\s*\$true/,
    "Emulator.exe must start without a visible terminal while retaining its GUI");
  assert.match(launcher, /GodfreyEmulatorWindow/);
  assert.match(launcher, /GetWindowThreadProcessId/);
});

test("process-owned emulator ports are intersected with online HDC targets", () => {
  assert.equal(typeof emulator.matchOnlineInstanceTargets, "function");
  assert.deepEqual(emulator.matchOnlineInstanceTargets(
    "noise\n127.0.0.1:5557\n127.0.0.1:5557\n127.0.0.1:65500\n",
    ["127.0.0.1:5555", "127.0.0.1:5557"],
  ), ["127.0.0.1:5557"]);
});

test("Windows instance lookup derives the HDC port from the named emulator process", () => {
  const helper = fs.readFileSync(new URL("../scripts/win_windows.ps1", import.meta.url), "utf8");
  const source = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");
  assert.match(helper, /ValidateSet\([^)]*'ports'/);
  assert.match(helper, /Get-NetTCPConnection[\s\S]*OwningProcess/);
  assert.match(source, /runningInstanceTarget\(name\)/,
    "emu_start must return an already-running named instance instead of waiting for a new target");
  assert.match(source, /runningInstanceTarget\(o\.instance\)/,
    "build/test target resolution must work before the app bundle is installed");
});

test("Windows emulator command-line parser accepts quoted start switches", {
  skip: process.platform !== "win32",
}, () => {
  const helper = fs.readFileSync(new URL("../scripts/win_windows.ps1", import.meta.url), "utf8");
  const parser = helper.match(/\$p\.CommandLine -match '([^']+)'/);
  assert.ok(parser, "win_windows.ps1 must expose its instance-name regex");

  const parse = (commandLine) => {
    const result = spawnSync("powershell", ["-NoProfile", "-Command",
      "$line=$env:GODFREY_TEST_COMMAND; $pattern=$env:GODFREY_TEST_PATTERN; " +
      "if($line -match $pattern){if($Matches[1]){$Matches[1]}else{$Matches[2]}}"], {
      encoding: "utf8",
      env: {
        ...process.env,
        GODFREY_TEST_COMMAND: commandLine,
        GODFREY_TEST_PATTERN: parser[1],
      },
    });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };

  assert.equal(parse('Emulator.exe -start Quiz'), "Quiz");
  assert.equal(parse('Emulator.exe "-start" "Stargaze"'), "Stargaze");
});

test("emu_enable_uitest follows the official set-reboot-verify sequence", () => {
  const source = fs.readFileSync(new URL("../src/core/emulator.ts", import.meta.url), "utf8");
  // 官方语义(hdk cj-apis-ui_test 准备工作): param set persist.ace.testmode.enabled 1
  // 之后必须重启设备, ace 使能才落地。2026-10-01 rS12e 二发实测: 只 set 不重启,
  // dumpLayout 服务级探针仍过, 但 in-app Driver.create() 解析 null(14 条 unavailable)。
  const fnStart = source.indexOf("export async function enableUiTest");
  const fnEnd = source.indexOf("export async function renameWindows", fnStart);
  const fn = source.slice(fnStart, fnEnd);
  const setIdx = fn.indexOf("param set persist.ace.testmode.enabled 1");
  const rebootIdx = fn.indexOf('"shell", "reboot"');
  const waitIdx = fn.indexOf("await waitOnline(t)");
  const rereadIdx = fn.indexOf("const verified = (await readParam()) === ");
  assert.ok(setIdx >= 0, "the set step must exist");
  assert.ok(rebootIdx > setIdx, "reboot must follow the set step (official sequence)");
  assert.ok(waitIdx > rebootIdx, "wait-for-online must follow the reboot");
  assert.ok(rereadIdx > waitIdx, "param re-read must follow the reboot");
  assert.match(source, /rebooted: boolean/, "the result must report whether a reboot ran");
  // 幂等路径不重启: 参数已为 1 时直接返回且 rebooted=false。
  const idem = fn.slice(fn.indexOf("(await readParam()) === \"1\""), fn.indexOf("(await readParam()) === \"1\"") + 400);
  assert.match(idem, /rebooted: false/, "the already-enabled path must not reboot");
});
