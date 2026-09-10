import test, { after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import Database from "better-sqlite3";

const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-hdk-test-"));
const dbDir = path.join(root, ".mcp_cache");
fs.mkdirSync(dbDir, { recursive: true });
fs.mkdirSync(path.join(root, "harmonyos_docs"), { recursive: true });
fs.mkdirSync(path.join(root, "harmonyos_docs_evil"), { recursive: true });
fs.writeFileSync(path.join(root, "harmonyos_docs_evil", "secret.md"), "TOP SECRET", "utf8");
fs.mkdirSync(path.join(root, "harmonyos_docs", "guide"), { recursive: true });
fs.writeFileSync(
  path.join(root, "harmonyos_docs", "guide", "long.md"),
  "---\ntitle: Long Guide\nuri: https://example.test/long\n---\n" + "A".repeat(3_000),
  "utf8",
);
fs.writeFileSync(
  path.join(root, "harmonyos_docs", "guide", "state-troubleshooting.md"),
  "---\nname: state-troubleshooting\ntitle: 状态管理故障处理\nuri: https://example.test/state\n---\n" +
    "当状态管理异常时，先检查状态变量的初始化和更新路径。",
  "utf8",
);

const db = new Database(path.join(dbDir, "harmonyos_docs.fts5.db"));
db.exec(`
  CREATE VIRTUAL TABLE fts USING fts5(
    relpath UNINDEXED,
    name UNINDEXED,
    title,
    category UNINDEXED,
    uri UNINDEXED,
    body,
    tokenize='unicode61'
  );
`);
const insert = db.prepare("INSERT INTO fts(relpath, name, title, category, uri, body) VALUES (?, ?, ?, ?, ?, ?)");
const seed = db.transaction(() => {
  for (let i = 0; i < 110; i++) {
    // 词元索引: 与真实索引同款预处理(含驼峰拆词), 查询 "HarmonyOS" 的词元
    // HarmonyOS/Harmony/OS 均须在库内
    insert.run(`guide/${i}.md`, `doc-${i}`, `HarmonyOS Harmony OS guide ${i}`, "guide", "", "HarmonyOS Harmony OS ArkUI reference");
  }
  insert.run(
    "guide/state-troubleshooting.md",
    "state-troubleshooting",
    "状态管理 故障 处理",
    "guide",
    "https://example.test/state",
    "状态管理 异常 检查 状态变量 初始化 更新 路径",
  );
  // 仅含"智慧"子词、不含整词"智慧屏"词元的文档: 验证子词兜底
  insert.run(
    "guide/smart-screen.md",
    "smart-screen",
    "智慧 屏幕 开发",
    "guide",
    "https://example.test/smart",
    "智慧 屏幕 显示 开发",
  );
});
seed();
db.exec("CREATE TABLE meta(key TEXT PRIMARY KEY, value TEXT)");
db.prepare("INSERT INTO meta(key, value) VALUES (?, ?)").run("tokenizer", "3");
db.prepare("INSERT INTO meta(key, value) VALUES (?, ?)").run("doc_count", "112");
db.close();

process.env.GODFREYHUB_HDK_ROOT = root;
const { searchDocuments, getDocument, hdkStatus, closeHdk } = await import("../dist/core/hdk.js");

after(() => {
  closeHdk();
  fs.rmSync(root, { recursive: true, force: true });
});

test("HDK search clamps oversized limits to 100", () => {
  assert.equal(searchDocuments("HarmonyOS", 1_000).length, 100);
});

test("HDK search clamps non-positive limits to 1", () => {
  assert.equal(searchDocuments("HarmonyOS", 0).length, 1);
});

test("HDK snippets highlight overlapping identifier tokens only once", () => {
  const [result] = searchDocuments("HarmonyOS", 1);
  assert.match(result?.snippet ?? "", /\*\*HarmonyOS\*\*/);
  assert.doesNotMatch(result?.snippet ?? "", /\*{4}/);
});

test("HDK search relaxes one missing query term and renders raw readable text", () => {
  const [result] = searchDocuments("状态管理 异常排查", 5);
  assert.equal(result?.id, "state-troubleshooting");
  assert.equal(result?.title, "状态管理故障处理");
  assert.match(result?.snippet ?? "", /\*\*状态管理异常\*\*时/);
  assert.doesNotMatch(result?.snippet ?? "", /\*{4}/);
  assert.doesNotMatch(result?.snippet ?? "", /状态 管理/);
});

test("HDK search drops single-char noise tokens before relaxing", () => {
  // strict AND(状态管理/故障/传/参) 无命中; 第 2 层去单字"传/参"后 AND(状态管理, 故障) 命中
  const [result] = searchDocuments("状态管理 故障 传 参", 5);
  assert.equal(result?.id, "state-troubleshooting");
});

test("HDK search falls back to search-mode subwords for whole-word queries", () => {
  // "智慧屏" 整词在索引中无词元; 第 4 层 cut_for_search 子词"智慧"兜底命中 smart-screen
  const [result] = searchDocuments("智慧屏", 5);
  assert.equal(result?.id, "smart-screen");
});

test("HDK document paths cannot escape through a sibling prefix", () => {
  const result = getDocument("../harmonyos_docs_evil/secret");
  assert.match(result, /^未找到文档:/);
  assert.doesNotMatch(result, /TOP SECRET/);
});

test("HDK documents are paged to keep MCP responses bounded", () => {
  const first = getDocument("guide/long", 0, 1_000);
  assert.match(first, /^# Long Guide/);
  assert.match(first, /文档片段 offset=0 chars=1000 total=3000/);
  assert.match(first, /nextOffset=1000/);
  assert.ok(first.length < 1_300);

  const last = getDocument("guide/long", 2_500, 1_000);
  assert.match(last, /文档片段 offset=2500 chars=500 total=3000/);
  assert.doesNotMatch(last, /nextOffset=/);
});

test("HDK rejects an index built with a stale tokenizer schema", () => {
  closeHdk();
  const dbPath = path.join(dbDir, "harmonyos_docs.fts5.db");
  const writable = new Database(dbPath);
  writable.prepare("UPDATE meta SET value = ? WHERE key = ?").run("2", "tokenizer");
  writable.close();
  try {
    const status = hdkStatus();
    assert.equal(status.ok, false);
    assert.match(status.error ?? "", /tokenizer=2/);
    assert.throws(() => searchDocuments("HarmonyOS", 1), /运行 npm run hdk:index/);
  } finally {
    closeHdk();
    const restore = new Database(dbPath);
    restore.prepare("UPDATE meta SET value = ? WHERE key = ?").run("3", "tokenizer");
    restore.close();
  }
});

test("closeHdk is idempotent and re-opens cleanly afterwards", () => {
  // 进程退出清理必须先释放全部 better-sqlite3 Statement(防 RemoveEnvironmentCleanupHook
  // env null 原生断言崩溃); closeHdk 需可重复调用, 且调用后查询可自动重开连接。
  assert.doesNotThrow(() => closeHdk());
  assert.doesNotThrow(() => closeHdk());
  assert.equal(searchDocuments("HarmonyOS", 1).length, 1);
  assert.doesNotThrow(() => closeHdk());
});
