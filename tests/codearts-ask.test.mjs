import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { z } from "zod";

const mod = await import("../dist/core/codearts-ask.js");
const toolsMod = await import("../dist/tools/codearts-ask.js");

// hermetic: 子进程一律经注入的 stub runFn / readCredential, 不碰真实 codearts.exe、
// 不读真实 HKCU\Environment 凭据、不依赖 PowerShell。仅两个端到端用例走真实 proc.run
// + 假 CLI(.cmd/.sh 冒充), 覆盖 spawn/超时杀树/redact 全链路, 同样不碰真实凭据。

const AK = "AKTEST-ak-value-0123456789abcdef";
const SK = "SKTEST-sk-secret-9876543210fedcba";
const DEFAULT_MODEL = mod.DEFAULT_CODEARTS_MODEL;

function stubRun(result) {
  const calls = [];
  const runFn = async (cmd, args, opts) => {
    calls.push({ cmd, args, opts });
    return { code: result.code ?? 0, out: result.out ?? "", timedOut: !!result.timedOut, truncated: false };
  };
  return { calls, runFn };
}
const stubCreds = () => async (name) => (name === "CODEARTS_CLI_AK" ? AK : SK);
const credMustNotBeCalled = () => async () => { throw new Error("readCredential 不应在此时被调用"); };

function makeTempDir(t, prefix) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}

/** 造一个"存在的"占位文件供 CODEARTS_CLI_EXE 指向(核心只做存在性检查)。 */
function placeholderExe(t) {
  const dir = makeTempDir(t, "codearts-ask-stub-");
  const exe = path.join(dir, "codearts.exe");
  fs.writeFileSync(exe, "stub", "utf8");
  return exe;
}

// ---------- codeartsAsk: argv/env/超时/凭据封入 ----------

test("codeartsAsk 默认参数: argv 形状/凭据注入/XDG 隔离/超时透传, 返回值不含凭据", async (t) => {
  const exe = placeholderExe(t);
  const repo = makeTempDir(t, "codearts-ask-repo-");
  const srcFile = path.join(repo, "entry", "a.ets");
  fs.mkdirSync(path.dirname(srcFile), { recursive: true });
  fs.writeFileSync(srcFile, "// code", "utf8");

  const signal = new AbortController().signal;
  const { calls, runFn } = stubRun({ out: "答: ArkTS 用 struct 入口。" });
  const r = await mod.codeartsAsk(
    { question: "  如何写 Ability?  ", files: [srcFile], timeoutSec: 42, rootDir: repo, signal },
    { runFn, readCredential: stubCreds(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
  );

  assert.equal(calls.length, 1);
  const call = calls[0];
  assert.equal(call.cmd, exe);
  assert.deepEqual(call.args, [
    "run", "-m", DEFAULT_MODEL, "--thinking", "-f", srcFile, "如何写 Ability?",
  ]);
  // 凭据封入: 注入子进程 env(经 stub runFn 收到), 但绝不进返回值
  assert.equal(call.opts.env.CODEARTS_CLI_AK, AK);
  assert.equal(call.opts.env.CODEARTS_CLI_SK, SK);
  assert.equal(call.opts.env.XDG_DATA_HOME, path.join("/home/u", ".codeartsdoer", "data"));
  assert.equal(call.opts.timeoutMs, 42000);
  assert.equal(call.opts.cwd, repo);
  assert.equal(call.opts.signal, signal);

  assert.equal(r.answer, "答: ArkTS 用 struct 入口。");
  assert.equal(r.model, DEFAULT_MODEL);
  assert.equal(r.thinking, true);
  assert.deepEqual(r.files, [srcFile]);
  assert.equal(r.exitCode, 0);
  assert.ok(r.durationMs >= 0);
  assert.equal(r.cliExe, exe);
  const serialized = JSON.stringify(r);
  assert.ok(!serialized.includes(SK) && !serialized.includes(AK), "返回值严禁含凭据值");
  assert.ok(!serialized.includes("CODEARTS_CLI_AK"), "返回值不暴露凭据注入细节");
});

test("codeartsAsk: thinking=false 去掉 --thinking, 自定义 model, 多文件逐个 -f", async (t) => {
  const exe = placeholderExe(t);
  const repo = makeTempDir(t, "codearts-ask-repo2-");
  const f1 = path.join(repo, "a.ets");
  const f2 = path.join(repo, "b.ets");
  fs.writeFileSync(f1, "1", "utf8");
  fs.writeFileSync(f2, "2", "utf8");

  const { calls, runFn } = stubRun({ out: "ok" });
  await mod.codeartsAsk(
    { question: "q", files: [f1, f2], thinking: false, model: "prov/other-model" },
    { runFn, readCredential: stubCreds(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
  );
  assert.deepEqual(calls[0].args, [
    "run", "-m", "prov/other-model", "-f", f1, "-f", f2, "q",
  ]);
});

test("codeartsAsk: 相对路径文件按 rootDir 解析; 无 rootDir 时可操作报错", async (t) => {
  const exe = placeholderExe(t);
  const repo = makeTempDir(t, "codearts-ask-repo3-");
  const rel = path.join("entry", "src", "x.ets");
  fs.mkdirSync(path.dirname(path.join(repo, rel)), { recursive: true });
  fs.writeFileSync(path.join(repo, rel), "x", "utf8");

  const { calls, runFn } = stubRun({ out: "ok" });
  await mod.codeartsAsk(
    { question: "q", files: [rel], rootDir: repo },
    { runFn, readCredential: stubCreds(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
  );
  assert.deepEqual(calls[0].args.slice(-3, -1), ["-f", path.join(repo, rel)]);

  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q", files: [rel] },
      { runFn, readCredential: credMustNotBeCalled(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    /无法确定仓库根/,
  );
});

test("codeartsAsk: 文件不存在 fail-loud, 且发生在读凭据之前", async (t) => {
  const exe = placeholderExe(t);
  const { calls, runFn } = stubRun({ out: "ok" });
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q", files: ["nope.ets"], rootDir: os.tmpdir() },
      { runFn, readCredential: credMustNotBeCalled(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    /文件不存在/,
  );
  assert.equal(calls.length, 0, "文件校验失败时绝不 spawn 子进程");
});

test("codeartsAsk: CLI 缺失报错点名 CODEARTS_CLI_EXE, 同样在读凭据之前", async (t) => {
  const { calls, runFn } = stubRun({ out: "ok" });
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q" },
      {
        runFn, readCredential: credMustNotBeCalled(),
        env: { CODEARTS_CLI_EXE: path.join(os.tmpdir(), "definitely-missing-codearts.exe") },
        home: "/home/u",
      },
    ),
    /codearts CLI 不存在.*CODEARTS_CLI_EXE/s,
  );
  assert.equal(calls.length, 0);
});

test("resolveCodeartsCli: CODEARTS_CLI_EXE 覆盖优先, 否则拼 %USERPROFILE% 默认路径", () => {
  assert.equal(
    mod.resolveCodeartsCli({ CODEARTS_CLI_EXE: "D:/x/codearts.exe" }, "/home/u"),
    path.normalize("D:/x/codearts.exe"),
  );
  assert.equal(
    mod.resolveCodeartsCli({}, "/home/u"),
    path.join("/home/u", ".codeartsdoer", "installers", "bin", "codearts.exe"),
  );
  assert.equal(
    mod.resolveCodeartsCli({ USERPROFILE: "C:/Users/u" }, undefined),
    path.join("C:/Users/u", ".codeartsdoer", "installers", "bin", "codearts.exe"),
  );
});

test("codeartsAsk: AK/SK 缺失 → 明确报『凭据未配置（用户环境变量 CODEARTS_CLI_AK/SK）』, 子进程不启动", async (t) => {
  const exe = placeholderExe(t);
  const { calls, runFn } = stubRun({ out: "ok" });
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q" },
      { runFn, readCredential: async () => null, env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    /凭据未配置（用户环境变量 CODEARTS_CLI_AK\/SK）.*CODEARTS_CLI_AK/s,
  );
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q" },
      { runFn, readCredential: async (n) => (n === "CODEARTS_CLI_AK" ? AK : null), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    /凭据未配置（用户环境变量 CODEARTS_CLI_AK\/SK）.*CODEARTS_CLI_SK/s,
  );
  assert.equal(calls.length, 0, "凭据缺失时绝不 spawn 子进程");
});

test("codeartsAsk: 超时 fail-loud 且错误消息里 SK 已 redact", async (t) => {
  const exe = placeholderExe(t);
  const { runFn } = stubRun({ code: 124, out: "partial answer " + SK, timedOut: true });
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q", timeoutSec: 9 },
      { runFn, readCredential: stubCreds(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    (e) => {
      assert.match(e.message, /超时\(9s/);
      assert.ok(!e.message.includes(SK), "错误消息严禁含 SK 原文");
      assert.match(e.message, /\[REDACTED\]/);
      return true;
    },
  );
});

test("codeartsAsk: 非零退出 fail-loud 且错误消息里 SK 已 redact", async (t) => {
  const exe = placeholderExe(t);
  const { runFn } = stubRun({ code: 3, out: "boom\n" + SK });
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q" },
      { runFn, readCredential: stubCreds(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    (e) => {
      assert.match(e.message, /exit 3/);
      assert.ok(!e.message.includes(SK), "错误消息严禁含 SK 原文");
      assert.match(e.message, /\[REDACTED\]/);
      return true;
    },
  );
});

test("codeartsAsk: question 空白拒绝", async (t) => {
  const exe = placeholderExe(t);
  const { runFn } = stubRun({ out: "ok" });
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "   " },
      { runFn, readCredential: stubCreds(), env: { CODEARTS_CLI_EXE: exe }, home: "/home/u" },
    ),
    /question 不能为空/,
  );
});

// ---------- 端到端: 真实 proc.run + 假 CLI(不碰真实凭据/真实 codearts.exe) ----------

function writeFakeCli(dir, body) {
  const script = path.join(dir, "fake-codearts.mjs");
  fs.writeFileSync(script, body, "utf8");
  if (process.platform === "win32") {
    const exe = path.join(dir, "codearts.cmd");
    fs.writeFileSync(exe, `@node "${script}" %*\r\n`, "utf8");
    return exe;
  }
  const exe = path.join(dir, "codearts.sh");
  fs.writeFileSync(exe, `#!/bin/sh\nexec "${process.execPath}" "${script}" "$@"\n`, "utf8");
  fs.chmodSync(exe, 0o755);
  return exe;
}

test("端到端: 假 CLI 回显 env 泄漏 SK → 输出被 redact, argv/XDG 经真实 spawn 正确传递", async (t) => {
  const dir = makeTempDir(t, "codearts-ask-e2e-");
  const repo = path.join(dir, "repo");
  fs.mkdirSync(repo, { recursive: true });
  const srcFile = path.join(repo, "a.ets");
  fs.writeFileSync(srcFile, "// code", "utf8");
  const exe = writeFakeCli(dir, [
    'console.log("ARGV " + JSON.stringify(process.argv.slice(2)));',
    'console.log("XDG " + (process.env.XDG_DATA_HOME ?? ""));',
    'console.log("LEAK " + (process.env.CODEARTS_CLI_SK ?? ""));',
    'console.log("answer-ok");',
  ].join("\n"));

  const r = await mod.codeartsAsk(
    { question: "q with spaces", files: ["a.ets"], rootDir: repo },
    {
      env: { CODEARTS_CLI_EXE: exe, USERPROFILE: dir },
      readCredential: stubCreds(),
    },
  );
  assert.match(r.answer, /answer-ok/);
  assert.ok(r.answer.includes("LEAK [REDACTED]"), "泄漏的 SK 必须被替换: " + JSON.stringify(r.answer));
  assert.ok(!r.answer.includes(SK), "answer 严禁含 SK 原文");
  // 假 CLI 收到的 env: XDG_DATA_HOME 钉到独立数据目录
  assert.ok(r.answer.includes("XDG " + path.join(dir, ".codeartsdoer", "data")));
  // argv 全链路(.cmd 引号路由)无损: run/-m/--thinking/-f <绝对路径>/question 收尾
  const m = r.answer.match(/^ARGV (\[.*\])$/m);
  assert.ok(m, "ARGV 回显行缺失");
  assert.deepEqual(JSON.parse(m[1]), [
    "run", "-m", DEFAULT_MODEL, "--thinking", "-f", srcFile, "q with spaces",
  ]);
});

test("端到端: 假 CLI 挂起 → timeoutSec 真实杀进程树并报超时", async (t) => {
  const dir = makeTempDir(t, "codearts-ask-e2e-to-");
  const exe = writeFakeCli(dir, 'setTimeout(() => { console.log("late"); }, 60000);');
  await assert.rejects(
    () => mod.codeartsAsk(
      { question: "q", timeoutSec: 1 },
      { env: { CODEARTS_CLI_EXE: exe, USERPROFILE: dir }, readCredential: stubCreds() },
    ),
    /超时\(1s.*已杀进程树/s,
  );
});

// ---------- 凭据读取桥的纯解析层 ----------

test("parseCredentialStdout: base64 协议往返/空值/无前缀/噪声容忍", () => {
  const round = (v) => mod.parseCredentialStdout("CODEARTS_CRED_B64:" + Buffer.from(v, "utf8").toString("base64"));
  assert.equal(round("s3cret"), "s3cret");
  // 值可含空格/引号/换行(CRLF), base64 无损
  assert.equal(round('a "b"\nc\rd'), 'a "b"\nc\rd');
  // 空值(变量为空串) → null
  assert.equal(mod.parseCredentialStdout("CODEARTS_CRED_B64:"), null);
  // 无前缀行(变量未配置时 PowerShell 无输出) → null
  assert.equal(mod.parseCredentialStdout(""), null);
  assert.equal(mod.parseCredentialStdout("some noise\nmore noise"), null);
  // 噪声行在前也能取到前缀行
  assert.equal(mod.parseCredentialStdout("noise\nCODEARTS_CRED_B64:" + Buffer.from("v", "utf8").toString("base64")), "v");
});

test("redactSecrets: 全量替换/短值跳过/null 安全", () => {
  assert.equal(mod.redactSecrets("a SKTEST-sk-secret-9876543210fedcba b SKTEST-sk-secret-9876543210fedcba", [SK]), "a [REDACTED] b [REDACTED]");
  assert.equal(mod.redactSecrets("keep abc", ["abc"]), "keep abc", "短于阈值(4)的值不替换, 防误伤");
  assert.equal(mod.redactSecrets("x", [null, undefined, ""]), "x");
});

// ---------- 工具层: schema 无凭据 + repoRoot 接线 ----------

test("codearts_ask 工具 schema: 只暴露五个参数, thinking 默认 true, 无任何凭据字段", () => {
  const def = toolsMod.codeartsAskTools[0];
  assert.equal(def.name, "codearts_ask");
  const props = Object.keys(z.toJSONSchema(z.object(def.inputSchema)).properties).sort();
  assert.deepEqual(props, ["files", "model", "question", "thinking", "timeoutSec"]);
  const schemaText = JSON.stringify(z.toJSONSchema(z.object(def.inputSchema)));
  assert.ok(!/CODEARTS_CLI_(AK|SK)/.test(schemaText), "schema 严禁出现凭据变量名/字段");
  assert.match(schemaText, /default['"]?\s*:\s*true/s, "thinking 默认 true 必须体现在客户端可见 schema");
  assert.ok(schemaText.includes(DEFAULT_MODEL), "默认模型写进描述供客户端发现");
});

test("codearts_ask handler: 经在册项目 repoRoot 解析仓库相对路径(错误信息带解析后绝对路径)", async (t) => {
  const dir = makeTempDir(t, "codearts-ask-handler-");
  const configDir = path.join(dir, "cfg");
  fs.mkdirSync(configDir, { recursive: true });
  fs.writeFileSync(path.join(configDir, "local.config.json"), JSON.stringify({
    scanRoots: [],
    projects: {
      demo: {
        name: "demo", repoRoot: dir, harmonyRoot: dir, bundle: "com.demo",
        ability: "EntryAbility", module: "entry", modulePath: "entry", target: "default", instance: "demo",
      },
    },
    lastProject: "demo",
  }, null, 2));
  const exe = placeholderExe(t);
  const prevConfig = process.env.GODFREYHUB_CONFIG_DIR;
  const prevExe = process.env.CODEARTS_CLI_EXE;
  process.env.GODFREYHUB_CONFIG_DIR = configDir;
  process.env.CODEARTS_CLI_EXE = exe; // 只做存在性检查; 文件校验先于读凭据, 不会触 PowerShell/真实 CLI
  try {
    const def = toolsMod.codeartsAskTools[0];
    await assert.rejects(
      () => def.handler({ question: "q", files: ["src/missing.ets"], thinking: true }, { signal: undefined }),
      (e) => {
        assert.match(e.message, /文件不存在/);
        assert.match(e.message, /src[/\\]missing\.ets/);
        assert.ok(e.message.includes(dir), "报错必须给出 repoRoot 解析后的绝对路径");
        return true;
      },
    );
  } finally {
    if (prevConfig === undefined) delete process.env.GODFREYHUB_CONFIG_DIR; else process.env.GODFREYHUB_CONFIG_DIR = prevConfig;
    if (prevExe === undefined) delete process.env.CODEARTS_CLI_EXE; else process.env.CODEARTS_CLI_EXE = prevExe;
  }
});
