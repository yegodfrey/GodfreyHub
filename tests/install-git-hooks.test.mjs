import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { pwshSkip } from './env-guard.mjs';

const installer = fileURLToPath(new URL('../scripts/install-git-hooks.ps1', import.meta.url));

function runInstaller(args, cwd) {
  return spawnSync('pwsh', ['-NoProfile', '-File', installer, ...args],
    { cwd, encoding: 'utf8' });
}

function initRepo(root) {
  const init = spawnSync('git', ['init', '-q', root], { encoding: 'utf8' });
  assert.equal(init.status, 0, `git init failed: ${init.stderr}`);
  return root;
}

function writeTemplate(root, name, body) {
  const dir = path.join(root, 'hooks-templates');
  fs.mkdirSync(dir, { recursive: true });
  // CRLF on purpose: sh rejects CR, so the installer must normalize it away.
  fs.writeFileSync(path.join(dir, name), body.replace(/\n/g, '\r\n'), 'utf8');
  return dir;
}

const TEMPLATE = '#!/bin/sh\ncd "__GF_REPO_ROOT__" || exit 1\nnpm test\n';

test('installer resolves a relative -RepoRoot into an absolute hook path', { skip: pwshSkip() }, () => {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-'));
  try {
    const repo = initRepo(path.join(parent, 'repo'));
    const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
    // Push-relative invocation: the caller passes only the directory name.
    const first = runInstaller(['-RepoRoot', 'repo', '-TemplateDir',
      path.join('repo', 'hooks-templates').replaceAll('\\', '/')], parent);
    assert.equal(first.status, 0, first.stdout + first.stderr);
    assert.match(first.stdout, /installed: pre-push/, first.stdout);

    const hook = path.join(repo, '.git', 'hooks', 'pre-push');
    const installed = fs.readFileSync(hook, 'utf8');
    // 断言语义 = 「钩子 cd 进的是这个仓库的绝对路径」：两侧都走 realpath 归一——
    // 干净 runner 上 os.tmpdir() 可能给出 8.3 短名/不同大小写形态, 安装器(Resolve-Path)
    // 与 Node(path.join) 对同一目录会产生字面不同的合法绝对路径, 字面比较会假红
    // (run 37074198235 实测)。语义不变: 绝对性 + 归一后指向同一目录。
    const cdLine = installed.split('\n').find((line) => line.startsWith('cd '));
    const hookRoot = cdLine?.match(/^cd "(.+)" \|\| exit 1$/)?.[1] ?? null;
    assert.ok(hookRoot && path.isAbsolute(hookRoot),
      `hook must carry an absolute repo root, got: ${JSON.stringify(installed)}`);
    assert.equal(fs.realpathSync.native(hookRoot), fs.realpathSync.native(repo),
      `hook must cd into the repo itself\nhookRoot=${JSON.stringify(hookRoot)}\nrepo=${JSON.stringify(repo)}`);
    assert.ok(!installed.includes('__GF_REPO_ROOT__'), 'placeholder must be substituted');
    assert.ok(!installed.includes('\r'), 'installed sh hook must be free of CR');

    // Content-compared re-run is a no-op, so gate self-heal stays cheap.
    const again = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent);
    assert.equal(again.status, 0, again.stdout + again.stderr);
    assert.match(again.stdout, /unchanged: pre-push/, again.stdout);
  } finally {
    fs.rmSync(parent, { recursive: true, force: true });
  }
});

test('installer refuses to dead-end when core.hooksPath redirects hooks', { skip: pwshSkip() }, () => {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-path-'));
  try {
    const repo = initRepo(path.join(parent, 'repo'));
    const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
    const configured = spawnSync('git', ['-C', repo, 'config', 'core.hooksPath',
      path.join(parent, 'somewhere-else').replaceAll('\\', '/')], { encoding: 'utf8' });
    assert.equal(configured.status, 0, configured.stderr);

    const run = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent);
    assert.equal(run.status, 1, run.stdout + run.stderr);
    assert.match(run.stdout, /core\.hooksPath/, run.stdout);
    assert.ok(!fs.existsSync(path.join(repo, '.git', 'hooks', 'pre-push')),
      'nothing may be installed where git will not look for it');
  } finally {
    fs.rmSync(parent, { recursive: true, force: true });
  }
});

test('installer rejects a repository without a git directory', { skip: pwshSkip() }, () => {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-nogit-'));
  try {
    const templates = writeTemplate(parent, 'pre-push', TEMPLATE);
    const run = runInstaller(['-RepoRoot', parent, '-TemplateDir', templates], parent);
    assert.notEqual(run.status, 0, run.stdout + run.stderr);
    assert.match((run.stdout + run.stderr), /not a git worktree/, run.stdout + run.stderr);
  } finally {
    fs.rmSync(parent, { recursive: true, force: true });
  }
});
