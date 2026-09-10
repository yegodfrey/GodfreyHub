import test, { after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { run } from "../dist/core/proc.js";
import { gitPush } from "../dist/core/git.js";

// 真实 git 集成测试: 验证 hub_push 的未跟踪拦截——
// 存在未跟踪文件(如 .env/密钥/临时产物)时必须中止, 不得 add -A 一并提交推送。
const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-git-guard-"));
const work = path.join(root, "work");
const remote = path.join(root, "remote.git");

function git(cwd, args) {
  return run("git", args, { cwd });
}

// 初始化本地裸远端 + 工作仓库, 建立 origin 跟踪
await run("git", ["init", "--bare", remote], { cwd: root });
await run("git", ["init", work], { cwd: root });
await git(work, ["config", "user.email", "godfreyhub-test@example.com"]);
await git(work, ["config", "user.name", "GodfreyHub Test"]);
await git(work, ["config", "commit.gpgsign", "false"]);
fs.writeFileSync(path.join(work, "tracked.txt"), "v1\n", "utf8");
await git(work, ["add", "tracked.txt"]);
await git(work, ["commit", "-m", "initial"]);
await git(work, ["remote", "add", "origin", remote]);
await git(work, ["push", "-u", "origin", "HEAD"]);

after(() => fs.rmSync(root, { recursive: true, force: true }));

test("gitPush commits and pushes tracked modifications", async () => {
  fs.writeFileSync(path.join(work, "tracked.txt"), "v2\n", "utf8");
  const res = await gitPush(work, "test: tracked change");

  assert.equal(res.ok, true);
  assert.match(res.out, /已提交并推送/);
  const remoteLog = await git(remote, ["log", "--oneline", "-1"]);
  assert.equal(remoteLog.code, 0);
  assert.match(remoteLog.out, /test: tracked change/);
});

test("gitPush aborts on untracked files instead of sweeping them in with add -A", async () => {
  fs.writeFileSync(path.join(work, "tracked.txt"), "v3\n", "utf8");
  fs.writeFileSync(path.join(work, "secret.env"), "TOKEN=abc\n", "utf8");
  const before = await git(work, ["rev-list", "--count", "HEAD"]);
  const remoteBefore = await git(remote, ["rev-list", "--count", "HEAD"]);
  const res = await gitPush(work, "should not commit");

  assert.equal(res.ok, false);
  assert.match(res.out, /未跟踪/);
  // 未产生任何提交
  const after = await git(work, ["rev-list", "--count", "HEAD"]);
  assert.equal(after.out.trim(), before.out.trim(), "未跟踪文件存在时不得产生提交");
  // 远端也未收到新提交
  const remoteAfter = await git(remote, ["rev-list", "--count", "HEAD"]);
  assert.equal(remoteAfter.out.trim(), remoteBefore.out.trim());
  // 未跟踪文件原样保留
  assert.equal(fs.existsSync(path.join(work, "secret.env")), true);
});
