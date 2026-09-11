import test, { after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import * as registry from "../dist/core/registry.js";

const repo = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-registry-test-"));
const harmony = path.join(repo, "harmony");
const gfkitRoot = path.join(repo, "GFKit");
fs.mkdirSync(path.join(harmony, "AppScope"), { recursive: true });
fs.mkdirSync(path.join(harmony, "features", "shell", "src", "main"), { recursive: true });
fs.writeFileSync(path.join(harmony, "AppScope", "app.json5"), `{ app: { bundleName: "com.example.modular" } }`, "utf8");
fs.writeFileSync(path.join(harmony, "build-profile.json5"), `{
  modules: [{
    name: "shell",
    srcPath: "./features/shell",
    targets: [{ name: "phone" }]
  }]
}`, "utf8");
fs.writeFileSync(path.join(harmony, "features", "shell", "src", "main", "module.json5"), `{
  module: { abilities: [{ name: "ShellAbility" }] }
}`, "utf8");
fs.mkdirSync(path.join(gfkitRoot, "AppScope"), { recursive: true });
fs.mkdirSync(path.join(gfkitRoot, "gallery", "src", "main"), { recursive: true });
fs.writeFileSync(path.join(gfkitRoot, "AppScope", "app.json5"), `{ app: { bundleName: "com.godfrey.gfkit" } }`, "utf8");
fs.writeFileSync(path.join(gfkitRoot, "build-profile.json5"), `{
  modules: [
    { name: "gfkit", srcPath: "./gfkit", targets: [{ name: "default" }] },
    { name: "gallery", srcPath: "./gallery", targets: [{ name: "default" }] }
  ]
}`, "utf8");
fs.writeFileSync(path.join(gfkitRoot, "gallery", "src", "main", "module.json5"), `{
  module: { abilities: [{ name: "EntryAbility" }] }
}`, "utf8");

after(() => fs.rmSync(repo, { recursive: true, force: true }));

test("project discovery preserves non-entry module path and target", async () => {
  assert.equal(typeof registry.inspectProject, "function");
  const entry = await registry.inspectProject(harmony);

  assert.equal(entry.name, "harmony");
  assert.equal(entry.module, "shell");
  assert.equal(entry.modulePath, path.join("features", "shell"));
  assert.equal(entry.target, "phone");
  assert.equal(entry.ability, "ShellAbility");
});

// 产品知识（哪个 bundle 用哪个入口模块/注册名）属于调用方配置（scanOverrides），
// 通用扫描器不得硬编码任何产品清单：无覆盖时走通用回退，有覆盖时按 bundle 生效。
test("scan override declaratively pins the runnable module and project name", async () => {
  const withoutOverride = await registry.inspectProject(gfkitRoot);
  assert.equal(withoutOverride.name, "GFKit",
    "without an override the name falls back to the harmony root basename");
  assert.equal(withoutOverride.module, "gfkit",
    "without an override the module falls back to 'entry' then the first module");

  const override = {
    bundle: "com.godfrey.gfkit",
    entryModule: "gallery",
    projectName: "GFKitGallery",
  };
  const entry = await registry.inspectProject(gfkitRoot, [override]);

  assert.equal(entry.name, "GFKitGallery");
  assert.equal(entry.module, "gallery");
  assert.equal(entry.modulePath, "gallery");
  assert.equal(entry.ability, "EntryAbility");

  const unaffected = await registry.inspectProject(harmony, [override]);
  assert.equal(unaffected.name, "harmony",
    "an override for one bundle must not leak into other projects");
});

// BLK-17 regression: config loading must separate three states and never let a bogus
// empty baseline overwrite the real registry. Each scenario uses its own temp config dir
// (GODFREYHUB_CONFIG_DIR env seam) so the on-disk production registry is never touched.
function withConfigDir(body) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-config-"));
  const previous = process.env.GODFREYHUB_CONFIG_DIR;
  process.env.GODFREYHUB_CONFIG_DIR = dir;
  try {
    return { dir, value: body(dir) };
  } finally {
    if (previous === undefined) delete process.env.GODFREYHUB_CONFIG_DIR;
    else process.env.GODFREYHUB_CONFIG_DIR = previous;
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const sampleConfig = {
  scanRoots: ["D:\\Harmony"],
  deviceInstances: ["Mate 80 Pro"],
  lastProject: "Quiz",
  projects: {
    Quiz: {
      name: "Quiz", repoRoot: "D:/Harmony/apps/Quiz", harmonyRoot: "D:/Harmony/apps/Quiz",
      bundle: "com.example.quiz", ability: "EntryAbility", module: "entry",
      modulePath: "entry", target: "default", instance: "Mate 80 Pro",
      testTargets: [{ module: "cangjie_test", framework: "Cangjie", isCangjie: true }],
    },
  },
};

test("corrupt config rejects both reads and writes (fail-loud, no empty-baseline overwrite)", () => {
  withConfigDir((dir) => {
    const file = path.join(dir, "local.config.json");
    fs.writeFileSync(file, "{ this is not valid json ", "utf8");
    assert.throws(() => registry.loadConfig(), /解析失败|配置/, "read must fail loud");
    assert.throws(() => registry.saveConfig(sampleConfig), /未成功加载|拒绝落盘/,
      "write must be refused while the config never loaded");
    // The corrupt file must be untouched: no silent overwrite with an empty baseline.
    assert.equal(fs.readFileSync(file, "utf8"), "{ this is not valid json ",
      "corrupt file must not be overwritten");
  });
});

test("missing config is a usable empty registry and becomes writable after load", () => {
  withConfigDir((dir) => {
    const cfg = registry.loadConfig();
    assert.deepEqual(cfg.projects, {});
    assert.deepEqual(cfg.scanRoots, []);
    assert.equal(fs.existsSync(path.join(dir, "local.config.json")), false,
      "first use must not create the file until a write happens");
    // A successful load establishes the trusted baseline, so saveConfig is now allowed.
    registry.saveConfig(sampleConfig);
    assert.equal(fs.existsSync(path.join(dir, "local.config.json")), true);
    assert.equal(fs.existsSync(path.join(dir, "local.config.json.bak")), false,
      "the first write has no previous version to back up");
  });
});

test("saveConfig keeps a single overwrite-style .bak of the previous version", () => {
  withConfigDir((dir) => {
    const file = path.join(dir, "local.config.json");
    const bak = file + ".bak";
    registry.loadConfig();               // missing -> empty baseline
    registry.saveConfig(sampleConfig);   // v1 written, no prior file -> no backup yet
    const v1 = fs.readFileSync(file, "utf8");

    const second = { ...sampleConfig, lastProject: "Stargaze" };
    registry.saveConfig(second);         // v2 written, v1 backed up
    assert.equal(fs.readFileSync(bak, "utf8"), v1, "backup must hold the immediately prior version");
    assert.equal(fs.existsSync(bak), true);

    const third = { ...sampleConfig, lastProject: "Clash" };
    registry.saveConfig(third);          // v3 written, backup overwritten with v2 (single copy)
    assert.equal(fs.readFileSync(bak, "utf8"), JSON.stringify(second, null, 2) + "\n",
      "backup is single, overwrite-style, never accumulating history");
    assert.equal(fs.readFileSync(file, "utf8"), JSON.stringify(third, null, 2) + "\n");
    assert.equal(fs.readdirSync(dir).filter((n) => n.endsWith(".bak")).length, 1);
  });
});
