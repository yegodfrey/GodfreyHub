import test from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import { PassThrough } from "node:stream";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { FrameConnection } from "../dist/core/lsp.js";
import * as lsp from "../dist/core/lsp.js";

class FakeChild extends EventEmitter {
  constructor() {
    super();
    this.stdout = new PassThrough();
    this.stderr = new PassThrough();
    this.stdin = new PassThrough();
    this.exitCode = null;
  }

  kill() {
    this.exitCode = 0;
    this.emit("exit", 0);
    return true;
  }
}

function frame(message) {
  const body = Buffer.from(JSON.stringify(message), "utf8");
  return Buffer.concat([
    Buffer.from(`Content-Length: ${body.length}\r\n\r\n`, "ascii"),
    body,
  ]);
}

function parseFrames(buffer) {
  const messages = [];
  let rest = buffer;
  while (rest.length > 0) {
    const headerEnd = rest.indexOf("\r\n\r\n");
    if (headerEnd < 0) break;
    const header = rest.subarray(0, headerEnd).toString("ascii");
    const length = Number(header.match(/Content-Length:\s*(\d+)/i)?.[1]);
    const bodyStart = headerEnd + 4;
    if (!Number.isFinite(length) || rest.length < bodyStart + length) break;
    messages.push(JSON.parse(rest.subarray(bodyStart, bodyStart + length).toString("utf8")));
    rest = rest.subarray(bodyStart + length);
  }
  return messages;
}

test("LSP framing honors UTF-8 byte length for Chinese responses", async () => {
  const child = new FakeChild();
  const conn = new FrameConnection(child, "test");
  const response = conn.request("textDocument/hover", {}, 100);

  child.stdout.write(frame({
    jsonrpc: "2.0",
    id: 1,
    result: { contents: "中文诊断：类型不匹配" },
  }));

  assert.deepEqual(await response, { contents: "中文诊断：类型不匹配" });
  conn.kill();
});

test("LSP client answers workspace/configuration server requests", async () => {
  const child = new FakeChild();
  const conn = new FrameConnection(child, "test");
  const written = [];
  child.stdin.on("data", (chunk) => written.push(Buffer.from(chunk)));

  child.stdout.write(frame({
    jsonrpc: "2.0",
    id: 77,
    method: "workspace/configuration",
    params: { items: [{ section: "typescript" }, { section: "arkts" }] },
  }));
  await new Promise((resolve) => setTimeout(resolve, 10));

  assert.deepEqual(parseFrames(Buffer.concat(written)), [{
    jsonrpc: "2.0",
    id: 77,
    result: [null, null],
  }]);
  conn.kill();
});

test("LSP pending requests reject immediately when the language server exits", async () => {
  const child = new FakeChild();
  const conn = new FrameConnection(child, "test");
  const response = conn.request("textDocument/definition", {}, 2_000);

  child.exitCode = 1;
  child.emit("exit", 1);

  await assert.rejects(response, /语言服务已退出.*code=1/);
});

test("empty diagnostics are cached and invalidated when a document changes", async () => {
  assert.equal(typeof lsp.DiagnosticCache, "function");
  const cache = new lsp.DiagnosticCache();
  const waiting = cache.wait("file:///Index.ets", 100);

  cache.publish("file:///Index.ets", []);
  assert.deepEqual(await waiting, []);
  assert.deepEqual(cache.get("file:///Index.ets"), []);

  cache.clear("file:///Index.ets");
  assert.equal(cache.get("file:///Index.ets"), undefined);
});

test("a diagnostic timeout resolves empty but does NOT poison the cache", async () => {
  const cache = new lsp.DiagnosticCache();
  assert.deepEqual(await cache.wait("file:///Silent.ets", 5), []);
  // 超时未确认: 不得写入缓存, 否则调用方 fresh=get(uri) 恒非 undefined,
  // 会把"超时未确认"误报成"已确认零错误"(pending 语义失效)。
  assert.equal(cache.get("file:///Silent.ets"), undefined);
  // 迟到的真实诊断仍可正常发布并被后续等待拿到
  cache.publish("file:///Silent.ets", [{ message: "late" }]);
  assert.deepEqual(cache.get("file:///Silent.ets"), [{ message: "late" }]);
  assert.deepEqual(await cache.wait("file:///Silent.ets", 5), [{ message: "late" }]);
});

function makeSession(child) {
  return {
    conn: new FrameConnection(child, "test"),
    documents: new Map(),
    openedPaths: new Set(),
    diagnostics: new lsp.DiagnosticCache(),
    ready: true,
    dying: false,
    openChain: Promise.resolve(),
    lastUsed: Date.now(),
  };
}

test("concurrent ensureOpen opens the same file exactly once", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-open-"));
  try {
    const file = path.join(root, "Index.ets");
    fs.writeFileSync(file, "export struct A {}\n");
    const child = new FakeChild();
    const session = makeSession(child);
    const written = [];
    child.stdin.on("data", (chunk) => written.push(Buffer.from(chunk)));

    // 多 agent 并发请求共享同一 ace-server 会话: 两次并发打开同一文件
    // 必须只发一次 didOpen, 否则服务端文档状态错乱。
    await Promise.all([lsp.ensureOpen(session, file), lsp.ensureOpen(session, file)]);

    const opens = parseFrames(Buffer.concat(written)).filter((m) => m.method === "aceProject/onAsyncDidOpen");
    assert.equal(opens.length, 1);
    assert.equal(opens[0].params.params.textDocument.uri, pathToFileURL(file).toString());
    child.kill();
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("concurrent ensureOpen preserves serial order across different files", async () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-open-"));
  try {
    const fileA = path.join(root, "A.ets");
    const fileB = path.join(root, "B.ets");
    fs.writeFileSync(fileA, "export struct A {}\n");
    fs.writeFileSync(fileB, "export struct B {}\n");
    const child = new FakeChild();
    const session = makeSession(child);
    const written = [];
    child.stdin.on("data", (chunk) => written.push(Buffer.from(chunk)));

    // 串行链保证并发打开按调用顺序落盘, 不做并发交错
    const pA = lsp.ensureOpen(session, fileA);
    const pB = lsp.ensureOpen(session, fileB);
    await Promise.all([pA, pB]);

    const opens = parseFrames(Buffer.concat(written))
      .filter((m) => m.method === "aceProject/onAsyncDidOpen")
      .map((m) => m.params.params.textDocument.uri);
    assert.deepEqual(opens, [pathToFileURL(fileA).toString(), pathToFileURL(fileB).toString()]);
    child.kill();
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("C++ diagnostics select the compilation database containing the requested source", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-compile-db-"));
  try {
    const requested = path.join(root, "skysdk", "src", "main", "cpp", "render.cpp");
    const unrelated = path.join(root, "entry", "src", "main", "cpp", "bridge.cpp");
    const requestedDbDir = path.join(root, "skysdk", ".cxx", "debug", "default", "debug", "x86_64");
    const unrelatedDbDir = path.join(root, "entry", ".cxx", "debug", "default", "debug", "x86_64");

    fs.mkdirSync(path.dirname(requested), { recursive: true });
    fs.writeFileSync(requested, "void render() {}\n");
    for (const [directory, source] of [[requestedDbDir, requested], [unrelatedDbDir, unrelated]]) {
      fs.mkdirSync(directory, { recursive: true });
      fs.writeFileSync(path.join(directory, "compile_commands.json"), JSON.stringify([{
        directory: root,
        file: source,
        command: `clang++ -c ${source}`,
      }]));
    }

    assert.equal(lsp.resolveCompileCommandsDirectory(root, [requested]), requestedDbDir);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("C++ diagnostics fall back to DevEco's shared compilation database", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-compile-db-"));
  try {
    const source = path.join(root, "entry", "src", "main", "cpp", "bridge.cpp");
    const databaseDir = path.join(root, ".idea", ".deveco", "cxx");
    fs.mkdirSync(databaseDir, { recursive: true });
    fs.writeFileSync(path.join(databaseDir, "compile_commands.json"), "[]");

    assert.equal(lsp.resolveCompileCommandsDirectory(root, [source]), databaseDir);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
