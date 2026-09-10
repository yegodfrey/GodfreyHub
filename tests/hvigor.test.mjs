import test, { after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

import * as hvigor from "../dist/core/hvigor.js";
import * as paths from "../dist/core/paths.js";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-hvigor-test-"));
const output = path.join(root, "features", "shell", "build", "debug", "outputs", "phone");
fs.mkdirSync(output, { recursive: true });
const unsigned = path.join(output, "shell-phone-unsigned.hap");
const signed = path.join(output, "shell-phone-signed.hap");
fs.writeFileSync(unsigned, "unsigned", "utf8");
fs.writeFileSync(signed, "signed", "utf8");

after(() => fs.rmSync(root, { recursive: true, force: true }));

test("HAP discovery follows the registered module path instead of assuming entry", () => {
  assert.equal(typeof hvigor.selectHapArtifact, "function");
  assert.equal(hvigor.selectHapArtifact(root, path.join("features", "shell"), "debug", false), signed);
  assert.equal(hvigor.selectHapArtifact(root, path.join("features", "shell"), "debug", true), unsigned);
});

test("signed artifact classification drives real-device deployment policy", () => {
  assert.equal(typeof hvigor.isSignedHap, "function");
  assert.equal(hvigor.isSignedHap(signed), true);
  assert.equal(hvigor.isSignedHap(unsigned), false);
  assert.equal(hvigor.isSignedHap(path.join(output, "shell-phone.hap")), false);
});

test("test HAP selection keeps emulator production and test signatures compatible", () => {
  assert.equal(typeof hvigor.selectTestHapArtifact, "function");
  const testOutput = path.join(root, "test-haps");
  fs.mkdirSync(testOutput, { recursive: true });
  const unsignedTest = path.join(testOutput, "entry-ohosTest-unsigned.hap");
  const signedTest = path.join(testOutput, "entry-ohosTest-signed.hap");
  fs.writeFileSync(unsignedTest, "unsigned", "utf8");
  fs.writeFileSync(signedTest, "signed", "utf8");
  assert.equal(hvigor.selectTestHapArtifact(testOutput, false, true), path.basename(unsignedTest));
  assert.equal(hvigor.selectTestHapArtifact(testOutput, true, false), path.basename(signedTest));
});

test("hub deployment and injected Instrument preparation share one same-device lease", {
  skip: process.platform !== "win32",
  timeout: 60_000,
}, async () => {
  const serial = `lease-probe-${process.pid}-${Date.now()}`;
  const mutexScript = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..",
    "scripts", "GfBuildMutex.ps1");
  const spawnMutexProbe = (timeoutArgument, marker) => new Promise((resolve, reject) => {
    const command = `. '${mutexScript.replaceAll("'", "''")}'; ` +
      `Invoke-GfWithDeviceMutex -Serial '${serial}'${timeoutArgument} -Body { Write-Output '${marker}' }`;
    const child = spawn("pwsh", ["-NoProfile", "-Command", command], {
      cwd: packageRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });
    child.once("error", reject);
    child.once("close", (code) => resolve({ code, stdout, stderr }));
  });
  let secondCompletion;
  await hvigor.withDeviceLease(serial, undefined, async () => {
    // 负断言事件驱动（无 sleep 赌时间窗）：探针子进程自带 5s 锁超时。
    // 租约有效 → 子进程以 "Timed out waiting" 失败收尾；租约失效 → 立即拿锁打印 BYPASSED。
    const probe = await spawnMutexProbe(" -Timeout ([TimeSpan]::FromSeconds(5))", "LEASE_BYPASSED");
    assert.doesNotMatch(probe.stdout, /LEASE_BYPASSED/,
      `a family suite bypassed the hub deployment lease: ${probe.stdout}\n${probe.stderr}`);
    assert.match(probe.stderr, /Timed out waiting/,
      `lease probe exited unexpectedly: code=${probe.code}\n${probe.stdout}\n${probe.stderr}`);
    // 正断言：默认长超时的第二进程在父租约释放后必须拿锁执行。
    secondCompletion = spawnMutexProbe("", "SECOND_ACQUIRED");
  });
  const result = await secondCompletion;
  assert.equal(result.code, 0, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /SECOND_ACQUIRED/);
});

test("a family preparation child does not reacquire its inherited device lease", async () => {
  const serial = `nested-lease-${process.pid}`;
  const previous = process.env.GF_DEVICE_LEASE_HELD_SERIAL;
  let executed = false;
  try {
    process.env.GF_DEVICE_LEASE_HELD_SERIAL = serial.toUpperCase();
    await hvigor.withDeviceLease(serial, undefined, async () => { executed = true; });
  } finally {
    if (previous === undefined) delete process.env.GF_DEVICE_LEASE_HELD_SERIAL;
    else process.env.GF_DEVICE_LEASE_HELD_SERIAL = previous;
  }
  assert.equal(executed, true);
});

test("signing-only failures reuse an unchanged unsigned HAP from an up-to-date package task", () => {
  const reused = path.join(root, "incremental", "entry-ohosTest-unsigned.hap");
  fs.mkdirSync(path.dirname(reused), { recursive: true });
  fs.writeFileSync(reused, "unchanged", "utf8");
  const old = new Date(Date.now() - 60_000);
  fs.utimesSync(reused, old, old);
  const buildStart = Date.now();
  const signingOnly = [
    "> hvigor UP-TO-DATE :entry:ohosTest@PackageHap...",
    "> hvigor ERROR: Failed :entry:ohosTest@SignHap...",
  ].join("\n");

  assert.equal(hvigor.canReuseUnsignedHapAfterSigningFailure(signingOnly, reused, buildStart), true);
  assert.equal(hvigor.canReuseUnsignedHapAfterSigningFailure(
    signingOnly + "\n> hvigor ERROR: Failed :entry:ohosTest@CompileArkTS...",
    reused,
    buildStart,
  ), false);
  assert.equal(hvigor.canReuseUnsignedHapAfterSigningFailure(signingOnly, reused + ".missing", buildStart), false);
});

test("only observed Hvigor runtime and build-log lock failures are eligible for one infrastructure retry", () => {
  const runtimeCrash = [
    "> hvigor ERROR: Error: Cannot create a string longer than 0x1fffffe8 characters",
    "    at getAliasesFromBinding (node:internal/options:27:32)",
    "    at Object.buildAllowedFlags (node:internal/process/per_thread:282:20)",
    "    at process.get [as allowedNodeEnvironmentFlags] (node:internal/bootstrap/node:260:34)",
    "> hvigor ERROR: Failed :entry:default@CompileCangjie...",
  ].join("\n");

  assert.equal(hvigor.isRetryableHvigorInfrastructureFailure(runtimeCrash), true);
  assert.equal(hvigor.isRetryableHvigorInfrastructureFailure(
    "> hvigor ERROR: Failed :entry:default@CompileCangjie...\nsource error: unresolved symbol",
  ), false);
  assert.equal(hvigor.isRetryableHvigorInfrastructureFailure(
    "RangeError: Cannot create a string longer than 0x1fffffe8 characters\napplication stack",
  ), false);
  assert.equal(hvigor.isRetryableHvigorInfrastructureFailure([
    "Execution failed for task 'default@BuildNativeWithNinja'.",
    String.raw`EBUSY: resource busy or locked, open 'D:\Harmony\apps\Stargaze\.hvigor\outputs\build-logs\build.log'`,
    "> hvigor ERROR: Failed :skysdk:default@CompileCangjie...",
  ].join("\n")), true);
  assert.equal(hvigor.isRetryableHvigorInfrastructureFailure(
    "EBUSY: resource busy or locked, open 'D:\\\\Harmony\\\\source.ets'",
  ), false, "unrelated locked source files must not be treated as retryable compiler infrastructure");
});

test("HDC success classification rejects zero-exit textual failures", () => {
  assert.equal(hvigor.isHdcCommandSuccessful(0, "msg:install bundle successfully."), true);
  assert.equal(hvigor.isHdcCommandSuccessful(0, "error: failed to install bundle. code:9568332"), false);
  assert.equal(hvigor.isHdcCommandSuccessful(1, ""), false);
});

test("only transient HDC transport or service failures are eligible for an install retry", () => {
  assert.equal(hvigor.isRetryableHdcInfrastructureFailure("error: failed to execute your command."), true);
  assert.equal(hvigor.isRetryableHdcInfrastructureFailure("[Fail] device is offline"), true);
  assert.equal(hvigor.isRetryableHdcInfrastructureFailure("connection was reset"), true);
  assert.equal(hvigor.isRetryableHdcInfrastructureFailure(
    "error: install failed due to incompatible native architecture",
  ), false);
  assert.equal(hvigor.isRetryableHdcInfrastructureFailure(
    "error: signature verification failed",
  ), false);
});

test("fresh uninstall treats every observed missing-bundle form as idempotent", () => {
  assert.equal(hvigor.isHdcBundleAbsent("error: uninstall missing installed bundle."), true);
  assert.equal(hvigor.isHdcBundleAbsent("bundle com.example.app does not exist"), true);
  assert.equal(hvigor.isHdcBundleAbsent("application is not installed"), true);
  assert.equal(hvigor.isHdcBundleAbsent("error: permission denied"), false);
});

test("deployment refresh reconnects the exact TCP target after a long build", async () => {
  const calls = [];
  let listCount = 0;
  const fakeRun = async (_command, args) => {
    calls.push(args.join(" "));
    if (args.join(" ") === "list targets") {
      listCount++;
      return {
        code: 0,
        out: listCount === 1 ? "[Empty]\n" : "127.0.0.1:15555\n",
        timedOut: false,
        truncated: false,
      };
    }
    return { code: 0, out: "Connect OK", timedOut: false, truncated: false };
  };

  const result = await hvigor.ensureHdcTargetOnline("hdc", "127.0.0.1:15555", fakeRun);
  assert.deepEqual(result, {
    online: true,
    reconnected: true,
    detail: "reconnected exact TCP target",
  });
  assert.deepEqual(calls, ["list targets", "tconn 127.0.0.1:15555", "list targets"]);
});

test("deployment refresh never substitutes or reconnects an absent USB serial", async () => {
  const calls = [];
  const fakeRun = async (_command, args) => {
    calls.push(args.join(" "));
    return { code: 0, out: "other-device\n", timedOut: false, truncated: false };
  };

  const result = await hvigor.ensureHdcTargetOnline("hdc", "wanted-usb-serial", fakeRun);
  assert.equal(result.online, false);
  assert.deepEqual(calls, ["list targets"]);
});

test("DevEco build environment always points hvigor at the detected SDK root", () => {
  assert.equal(typeof hvigor.createDevEcoBuildEnv, "function");
  assert.deepEqual(hvigor.createDevEcoBuildEnv("C:\\DevEco Studio"), {
    DEVECO_SDK_HOME: path.join("C:\\DevEco Studio", "sdk"),
  });
});

test("headless Windows builds prefer the project-recorded Cangjie runtime DLLs", () => {
  const project = path.join(root, "cangjie-project");
  const sdk = path.join(root, "cangjie-sdk", "cangjie");
  const buildTools = path.join(sdk, "build-tools");
  fs.mkdirSync(path.join(buildTools, "tools", "bin"), { recursive: true });
  fs.writeFileSync(path.join(buildTools, "tools", "bin", "cjpm.exe"), "fixture", "utf8");
  fs.mkdirSync(project, { recursive: true });
  fs.writeFileSync(
    path.join(project, "local.properties"),
    "cangjie.sdk.dir=" + sdk.replaceAll("\\", "/") + "\n",
    "utf8",
  );

  const env = hvigor.createCangjieBuildEnv(project, { Path: "C:\\legacy-cangjie\\bin" }, true);
  assert.equal(env.CANGJIE_HOME, buildTools);
  assert.equal(
    env.Path.split(";")[0],
    path.join(buildTools, "tools", "lib"),
    "the matching DLL directory must precede every inherited installation",
  );
  assert.equal(env.Path.split(";").at(-1), "C:\\legacy-cangjie\\bin");
});

test("Windows ohpm discovery includes the bin directory used by DevEco Studio", () => {
  const deveco = path.join(root, "DevEco Studio");
  const executable = path.join(deveco, "tools", "ohpm", "bin", "ohpm.bat");
  fs.mkdirSync(path.dirname(executable), { recursive: true });
  fs.writeFileSync(executable, "", "utf8");

  assert.equal(typeof paths.resolveOhpmExecutable, "function");
  assert.equal(paths.resolveOhpmExecutable(deveco, true), executable);
});

test("Windows ohpm install bypasses the batch wrapper and runs pm-cli with bundled Node", () => {
  const bin = path.join(root, "DevEco Studio", "tools", "ohpm", "bin");
  const batch = path.join(bin, "ohpm.bat");
  const cli = path.join(bin, "pm-cli.js");
  const node = path.join(root, "DevEco Studio", "tools", "node", "node.exe");
  fs.mkdirSync(bin, { recursive: true });
  fs.writeFileSync(batch, "@echo off\r\n", "utf8");
  fs.writeFileSync(cli, "", "utf8");

  assert.equal(typeof hvigor.ohpmInstallInvocation, "function");
  assert.deepEqual(hvigor.ohpmInstallInvocation({ ohpm: batch, node }), {
    command: node,
    args: [cli, "install"],
  });
});
