import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { resolveClangdExecutable } from "../dist/core/paths.js";

function fakeExecutable(root, relativePath) {
  const file = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, "", "utf8");
  return file;
}

test("resolveClangdExecutable finds the current DevEco language-server layout", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-clangd-"));
  try {
    const expected = fakeExecutable(root, path.join("tools", "llvm", "server", "lsp", "win", "clangd.exe"));
    assert.equal(resolveClangdExecutable(root, true), expected);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClangdExecutable prefers DevEco's bundled language server over SDK compilers", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-clangd-"));
  try {
    const expected = fakeExecutable(root, path.join("tools", "llvm", "server", "lsp", "win", "clangd.exe"));
    fakeExecutable(root, path.join("sdk", "default", "openharmony", "native", "llvm", "bin", "clangd.exe"));
    assert.equal(resolveClangdExecutable(root, true), expected);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClangdExecutable reports absence instead of a false healthy state", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "godfreyhub-clangd-"));
  try {
    assert.equal(resolveClangdExecutable(root, true), null);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
