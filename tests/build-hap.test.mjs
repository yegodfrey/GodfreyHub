import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import * as cli from "../dist/cli/build-hap.js";
import * as hub from "../dist/tools/hub.js";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("parseBuildHapArgs: 默认纯构建, 旗标/取值/端口逐一映射", () => {
  const args = cli.parseBuildHapArgs([
    "--root", "D:/proj/app", "--deploy", "--product", "debug", "--build-mode", "debug",
    "--clean", "--no-ohpm", "--skip-start", "--fresh-install", "--build-tests",
    "--test-target", "Cangjie", "--port", "12345", "--device", "serial-x",
    "--module", "entry", "--module-path", "entry", "--target", "default",
    "--bundle", "com.x.app", "--instance", "app", "--name", "app", "--repo-root", "D:/proj",
  ]);
  assert.equal(args.root, "D:/proj/app");
  assert.equal(args.deploy, true);
  assert.equal(args.product, "debug");
  assert.equal(args.clean, true);
  assert.equal(args.noOhpm, true);
  assert.equal(args.skipStart, true);
  assert.equal(args.freshInstall, true);
  assert.equal(args.buildTests, true);
  assert.equal(args.testTarget, "Cangjie");
  assert.equal(args.device, "serial-x");
  assert.equal(args.module, "entry");
  assert.equal(args.bundle, "com.x.app");
  assert.equal(args.repoRoot, "D:/proj");
  const plain = cli.parseBuildHapArgs(["--root", "X"]);
  assert.equal(plain.deploy, false, "缺省必须是纯构建(不碰设备)");
  assert.equal(plain.port, undefined);
  assert.equal(plain.clean, false);
});

test("parseBuildHapArgs: 缺 --root 与非整数 --port 都要用法错", () => {
  assert.throws(() => cli.parseBuildHapArgs([]), /--root/);
  assert.throws(() => cli.parseBuildHapArgs(["--root", "X", "--port", "abc"]), /整数/);
});

test("hapPath 直通与构建段参数在 MCP 边界互斥(具名拒绝; 内部缓存分发通路不受影响)", () => {
  for (const poison of [
    { clean: true }, { noOhpm: true }, { buildTests: true }, { noDeploy: true },
  ]) {
    assert.throws(
      () => hub.assertHapPathCompatible({ hapPath: "x.hap", ...poison }),
      /互斥/,
      JSON.stringify(poison),
    );
  }
  // 无毒组合放行; 不带 hapPath 时任何构建参数照常(构建路径语义零变化)。
  hub.assertHapPathCompatible({ hapPath: "x.hap" });
  hub.assertHapPathCompatible({ clean: true, buildTests: true });
});

test("CLI 子进程: 非法工程根退出码 1 且给具名诊断(不冒充工具链缺失)", () => {
  const empty = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-build-hap-"));
  try {
    const r = spawnSync(process.execPath,
      [path.join(packageRoot, "dist", "cli", "build-hap.js"), "--root", empty],
      { encoding: "utf8", timeout: 60_000 });
    assert.equal(r.status, 1);
    assert.match(r.stderr, /build-profile\.json5/);
  } finally {
    fs.rmSync(empty, { recursive: true, force: true });
  }
});
