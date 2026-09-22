import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const mod = await import("../dist/core/pwsh.js");

const SRC_ROOT = fileURLToPath(new URL("../src", import.meta.url));

// 家族纪律: PowerShell 一律 pwsh 7, 禁 powershell.exe 5.1 (GFSoftware
// device-runner.test.mjs "永不回退 powershell.exe" 守卫在 Hub 侧的镜像)。
// 源码层守卫: 任何以 "powershell"/"powershell.exe" 为整体内容的字符串字面量
// (即按名 spawn 5.1 的后门)出现即红; 注释提及不受限。

function listTsFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listTsFiles(full));
    else if (entry.name.endsWith(".ts")) out.push(full);
  }
  return out;
}

test("src 源码无 powershell 5.1 字面量 spawn 后门", () => {
  const offenders = [];
  const literal = /(['"])powershell(\.exe)?\1/g;
  for (const file of listTsFiles(SRC_ROOT)) {
    const text = fs.readFileSync(file, "utf8");
    if (literal.test(text)) offenders.push(path.relative(SRC_ROOT, file));
    literal.lastIndex = 0;
  }
  assert.deepEqual(offenders, [],
    "发现按名 spawn powershell 5.1 的字面量(应改走 core/pwsh resolvePwshPath()): " +
    offenders.join(", "));
});

test("resolvePwshPath: env 覆盖生效且校验在盘", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "gf-pwsh-"));
  try {
    mod.resetPwshResolveCache();
    const fake = path.join(tmp, process.platform === "win32" ? "pwsh.exe" : "pwsh");
    fs.writeFileSync(fake, "");
    process.env.GF_POWERSHELL_PATH = fake;
    assert.equal(mod.resolvePwshPath(), fake);

    mod.resetPwshResolveCache();
    process.env.GF_POWERSHELL_PATH = path.join(tmp, "missing-pwsh.exe");
    assert.throws(() => mod.resolvePwshPath(), /GF_POWERSHELL_PATH 指向的执行体不存在/);
  } finally {
    delete process.env.GF_POWERSHELL_PATH;
    mod.resetPwshResolveCache();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

test("resolvePwshPath: PATH 拨空后落默认安装位或守卫拒跑, 两条路都不碰 5.1", () => {
  mod.resetPwshResolveCache();
  const savedPath = process.env.PATH;
  try {
    process.env.PATH = os.tmpdir(); // 无 pwsh 的目录
    const resolved = mod.resolvePwshPath();
    // 本机装有 pwsh 7: 落默认安装位探测。只认文件名收尾 pwsh.exe——
    // 默认安装目录名含 "PowerShell" 字样, 不能对全路径做 /powershell/i 反断言;
    // 5.1 的 powershell.exe 不可能匹配 /pwsh(\.exe)?$/。
    assert.match(resolved, /pwsh(\.exe)?$/);
  } catch (err) {
    // 本机连默认安装位都没有 pwsh: 必须是具名守卫错误, 而不是静默回退 5.1。
    assert.match(String(err), /禁用 powershell\.exe 5\.1, 不回退/);
  } finally {
    process.env.PATH = savedPath;
    mod.resetPwshResolveCache();
  }
});
