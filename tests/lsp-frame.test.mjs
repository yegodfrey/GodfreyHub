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
