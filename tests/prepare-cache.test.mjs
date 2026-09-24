// 构建一次、分发多机(run 作用域 prepare 缓存)的单测:
//   1. prepare-cache meta 的解析与字节门(sha256 复核/归属/路径逃逸);
//   2. buildAndDeploy 的 prebuilt 直通分支(mock runCommand/resolveDevice)——
//      跳过 ohpm/hvigor、保持签名分类/freshInstall/otherBundles 语义。
import test, { after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createHash } from "node:crypto";

import * as prepareCache from "../dist/core/prepare-cache.js";
import * as hvigor from "../dist/core/hvigor.js";
import * as paths from "../dist/core/paths.js";

const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-prepare-cache-test-"));
after(() => fs.rmSync(root, { recursive: true, force: true }));

const sha256 = (content) => createHash("sha256").update(content).digest("hex");

// ---- 1. meta 解析与字节门 --------------------------------------------------

function writeCacheEntry(options = {}) {
  const entryDir = path.join(root, "cache", options.key ?? "CacheApp-ArkTS");
  fs.mkdirSync(path.join(entryDir, "haps"), { recursive: true });
  const hapRel = "haps/entry-phone-unsigned.hap";
  const testRel = "haps/entry-ohosTest-unsigned.hap";
  const hapContent = options.hapContent ?? "app-bytes";
  const testContent = options.testContent ?? "test-bytes";
  const recordedHapContent = options.recordedHapContent ?? hapContent;
  fs.writeFileSync(path.join(entryDir, hapRel), hapContent, "utf8");
  fs.writeFileSync(path.join(entryDir, testRel), testContent, "utf8");
  const meta = {
    version: 1,
    app: options.app ?? "CacheApp",
    testTarget: options.testTarget ?? "ArkTS",
    cacheKey: options.key ?? "CacheApp-ArkTS",
    builtAtUtc: "2026-09-23T00:00:00.000Z",
    source: "authoritative-clean-build",
    inputsHash: "a".repeat(64),
    hap: options.hapRel ?? hapRel,
    testHaps: [{ framework: "ArkTS", module: "entry", hap: testRel }],
    artifacts: [
      { file: hapRel, sha256: sha256(recordedHapContent) },
      { file: testRel, sha256: sha256(testContent) },
    ],
    buildTranscript: { sha256: "b".repeat(64), lineCount: 2, tail: ["line1", "line2"] },
  };
  if (options.dropArtifacts) delete meta.artifacts;
  if (options.mutate) options.mutate(meta);
  fs.writeFileSync(path.join(entryDir, "meta.json"), JSON.stringify(meta), "utf8");
  fs.writeFileSync(path.join(entryDir, "DONE"), meta.cacheKey, "utf8");
  return { entryDir, metaPath: path.join(entryDir, "meta.json") };
}

test("loadRunPrepareCacheMeta resolves relative artifacts and passes the byte gate", () => {
  const { metaPath, entryDir } = writeCacheEntry();
  const resolved = prepareCache.loadRunPrepareCacheMeta(metaPath, { app: "CacheApp", testTarget: "ArkTS" });
  assert.equal(resolved.hap, path.join(entryDir, "haps", "entry-phone-unsigned.hap"));
  assert.equal(resolved.testHaps.length, 1);
  assert.equal(resolved.testHaps[0].module, "entry");
  assert.equal(resolved.meta.buildTranscript.sha256, "b".repeat(64));
});

test("loadRunPrepareCacheMeta rejects a tampered byte, a missing artifact, ownership drift and traversal", () => {
  const tampered = writeCacheEntry({ recordedHapContent: "original-bytes", hapContent: "tampered" });
  assert.throws(() => prepareCache.loadRunPrepareCacheMeta(tampered.metaPath, { app: "CacheApp" }),
    /字节校验失败/);

  const missing = writeCacheEntry({ key: "MissingArtifact-ArkTS" });
  fs.rmSync(path.join(missing.entryDir, "haps", "entry-phone-unsigned.hap"));
  assert.throws(() => prepareCache.loadRunPrepareCacheMeta(missing.metaPath, { app: "CacheApp" }),
    /产物缺失/);

  const drift = writeCacheEntry({ key: "Drift-ArkTS" });
  assert.throws(() => prepareCache.loadRunPrepareCacheMeta(drift.metaPath, { app: "OtherApp" }),
    /归属不符/);

  const escaped = writeCacheEntry({ key: "Escape-ArkTS", mutate: (meta) => { meta.hap = "../../outside.hap"; } });
  assert.throws(() => prepareCache.loadRunPrepareCacheMeta(escaped.metaPath, { app: "CacheApp" }),
    /逃逸出缓存条目/);

  const unhashed = writeCacheEntry({ key: "Unhashed-ArkTS", dropArtifacts: true });
  assert.throws(() => prepareCache.loadRunPrepareCacheMeta(unhashed.metaPath, { app: "CacheApp" }),
    /无法核验字节|未登记/);
});

// ---- 2. buildAndDeploy 的 prebuilt 直通分支 ---------------------------------

const canRunDeploy = paths.toolchain().hvigorwJs ? false : "skip: 本机无 DevEco/hvigorw, 工具链依赖缺失";

function makeEntry() {
  // 工程根早检只需要 build-profile.json5 在场; prebuilt 路径不跑任何构建命令。
  fs.writeFileSync(path.join(root, "build-profile.json5"), "{}", "utf8");
  return {
    name: "PrepareCacheApp",
    repoRoot: root,
    harmonyRoot: root,
    bundle: "com.example.preparecache",
    ability: "EntryAbility",
    module: "entry",
    modulePath: "entry",
    target: "default",
    instance: "",
  };
}

function writePrebuiltArtifacts(suffix = "") {
  const dir = path.join(root, "prebuilt" + suffix);
  fs.mkdirSync(dir, { recursive: true });
  const hap = path.join(dir, "entry-phone-unsigned.hap");
  const testHap = path.join(dir, "entry-ohosTest-unsigned.hap");
  fs.writeFileSync(hap, "app" + suffix, "utf8");
  fs.writeFileSync(testHap, "test" + suffix, "utf8");
  return { hap, testHap };
}

function mockDeploy(target) {
  const calls = [];
  return {
    calls,
    deps: {
      runCommand: async (cmd, args) => {
        const joined = [cmd, ...args].join(" ");
        calls.push(joined);
        if (args[0] === "list" && args[1] === "targets") return { code: 0, out: `${target}\n` };
        return { code: 0, out: "[Success] ok\n" };
      },
      resolveDevice: async () => target,
    },
  };
}

test("prebuilt deploys cached bytes without running ohpm or hvigor, keeping freshInstall and otherBundles", {
  skip: canRunDeploy,
  timeout: 60_000,
}, async () => {
  const entry = makeEntry();
  const { hap, testHap } = writePrebuiltArtifacts();
  const { calls, deps } = mockDeploy("127.0.0.1:15309");
  const result = await hvigor.buildAndDeploy(entry, {
    product: "debug",
    buildMode: "debug",
    device: "127.0.0.1:15309",
    buildTests: true,
    freshInstall: true,
    skipStart: true,
    otherBundles: ["com.example.other"],
    prebuilt: {
      hap,
      testHaps: [{ framework: "ArkTS", module: "entry", hap: testHap }],
      provenance: { transcriptSha256: "c".repeat(64), builtAtUtc: "2026-09-23T00:00:00.000Z" },
    },
  }, deps);
  assert.equal(result.code, 0, result.log);
  assert.equal(result.prebuilt, true);
  assert.equal(result.hap, hap);
  assert.deepEqual(result.testHaps, [{ framework: "ArkTS", module: "entry", hap: testHap }]);
  // 构建面零触碰: 没有任何 ohpm/hvigor 命令, 只剩 hdc 安装事务。
  assert.equal(calls.filter((c) => /ohpm|hvigorw|assembleHap/.test(c)).length, 0, calls.join("\n"));
  // 安装事务语义保持: 防污染/卸载重装/按精确路径安装缓存字节。
  assert.ok(calls.some((c) => c.includes("bm dump -a")), calls.join("\n"));
  assert.ok(calls.some((c) => c.includes(`uninstall -n ${entry.bundle}`)), calls.join("\n"));
  assert.ok(calls.some((c) => c.includes(`install -r ${hap}`)), calls.join("\n"));
  assert.ok(calls.some((c) => c.includes(`install -r ${testHap}`)), calls.join("\n"));
  // 转录携带来源与字节摘要, 供 prepare.log 与缓存 meta 对账。
  assert.match(result.log, /prebuilt 缓存分发/);
  assert.match(result.log, new RegExp(`sha256=${sha256("app")}`));
  assert.match(result.log, /构建转录sha256=/);
});

test("prebuilt on a real device enforces the signed-only gate exactly like a build", {
  skip: canRunDeploy,
  timeout: 60_000,
}, async () => {
  const entry = makeEntry();
  const unsigned = writePrebuiltArtifacts("-device-unsigned");
  const { calls, deps } = mockDeploy("7f2a3f9e");
  const rejected = await hvigor.buildAndDeploy(entry, {
    device: "7f2a3f9e",
    freshInstall: true,
    skipStart: true,
    prebuilt: {
      hap: unsigned.hap,
      testHaps: [{ framework: "ArkTS", module: "entry", hap: unsigned.testHap }],
    },
  }, deps);
  assert.equal(rejected.code, 1);
  assert.match(rejected.log, /真机部署需要 signed HAP/);
  assert.equal(calls.filter((c) => c.includes("install -r")).length, 0, "unsigned bytes must never reach a device");

  // 签名齐全的缓存字节照常安装(与构建路径同一签名分类)。
  const dir = path.join(root, "prebuilt-device-signed");
  fs.mkdirSync(dir, { recursive: true });
  const signedHap = path.join(dir, "entry-phone-signed.hap");
  const signedTestHap = path.join(dir, "entry-ohosTest-signed.hap");
  fs.writeFileSync(signedHap, "app-signed", "utf8");
  fs.writeFileSync(signedTestHap, "test-signed", "utf8");
  const accepted = await hvigor.buildAndDeploy(entry, {
    device: "7f2a3f9e",
    freshInstall: true,
    skipStart: true,
    prebuilt: {
      hap: signedHap,
      testHaps: [{ framework: "ArkTS", module: "entry", hap: signedTestHap }],
    },
  }, deps);
  assert.equal(accepted.code, 0, accepted.log);
  assert.equal(accepted.hap, signedHap);
  assert.ok(calls.some((c) => c.includes(`install -r ${signedHap}`)), calls.join("\n"));
});

test("prebuilt with a missing artifact fails fast before any device transaction", {
  skip: canRunDeploy,
  timeout: 60_000,
}, async () => {
  const entry = makeEntry();
  const { deps } = mockDeploy("127.0.0.1:15309");
  const result = await hvigor.buildAndDeploy(entry, {
    device: "127.0.0.1:15309",
    skipStart: true,
    prebuilt: {
      hap: path.join(root, "does-not-exist.hap"),
      testHaps: [{ framework: "ArkTS", module: "entry", hap: path.join(root, "also-missing.hap") }],
    },
  }, deps);
  assert.equal(result.code, 1);
  assert.match(result.log, /prebuilt 产物缺失/);
});
