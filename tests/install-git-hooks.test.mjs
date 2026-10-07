import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { pwshSkip } from './env-guard.mjs';

const installer = fileURLToPath(new URL('../scripts/install-git-hooks.ps1', import.meta.url));

const TEMPLATE = '#!/bin/sh\ncd "__GF_REPO_ROOT__" || exit 1\nnpm test\n';

// 夹具的每一次 git 调用都必须只碰夹具自己。两个已实测的逃逸形状
// （复现读数：GFSoftware/Workspace/tmp/triple-closeout-20261006/_h1/PROOF.md）：
//   G1 —— 被继承的【绝对】GIT_DIR（git 执行钩子、GUI 客户端就是这么注 env 的）让
//        `git -C <夹具> config` 无视 -C 的仓库发现，把值写进「被继承的那个仓」的
//        .git/config，而且 exit=0，夹具仓自己的值反而没写上；
//   E1 —— 夹具目录存在但不是 git 仓时，-C 向上发现外层仓，同样 exit=0 落进外层仓。
// 对策是显式 --git-dir=<夹具>/.git：E5 实测它在夹具没有 .git 时 fail-closed
// （fatal: --local can only be used inside a git repository），既不向上发现也不被
// 继承的 GIT_DIR 劫持。GIT_CEILING_DIRECTORIES 单独不解决问题（PROOF.md E6 实测）。
function fixtureGitEnv(extra) {
  const env = { ...process.env };
  for (const key of ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_CONFIG',
    'GIT_CONFIG_GLOBAL', 'GIT_CONFIG_SYSTEM', 'GIT_NAMESPACE', 'GIT_OBJECT_DIRECTORY',
    'GIT_ALTERNATE_OBJECT_DIRECTORIES', 'GIT_SSH_COMMAND']) delete env[key];
  return Object.assign(env, extra || {});
}

function runInstaller(args, cwd, extraEnv) {
  return spawnSync('pwsh', ['-NoProfile', '-File', installer, ...args],
    { cwd, encoding: 'utf8', env: fixtureGitEnv(extraEnv) });
}

function initRepo(root) {
  const init = spawnSync('git', ['init', '-q', root], { encoding: 'utf8', env: fixtureGitEnv() });
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

// 写夹具自己的 local config，并把「值确实落在夹具自己的 .git/config 上」当场验证掉：
// 逃逸一旦发生就是夹具坏了，必须立刻具名红，而不是把一个临时 hooksPath 留给宿主仓。
function fixtureLocalSet(repo, key, value) {
  const gitDir = path.join(repo, '.git');
  const write = spawnSync('git', ['-C', repo, '--git-dir', gitDir, 'config', '--local', key, value],
    { encoding: 'utf8', env: fixtureGitEnv() });
  assert.equal(write.status, 0,
    `pinned fixture config write must not fail closed: ${write.stdout}${write.stderr}`);
  const probe = spawnSync('git', ['-C', repo, '--git-dir', gitDir, 'config', '--local',
    '--show-origin', '--get', key], { encoding: 'utf8', env: fixtureGitEnv() });
  assert.equal(probe.status, 0, `fixture config read-back failed: ${probe.stdout}${probe.stderr}`);
  const [originField, valueField] = String(probe.stdout).split('\t');
  assert.equal((valueField ?? '').trim(), value,
    `fixture must read back exactly what it wrote, got ${JSON.stringify(probe.stdout)}`);
  // git C-quotes the origin path when it needs it (Windows absolute paths arrive as "C:\\...").
  const originFile = (originField || '').replace(/^file:/, '').replace(/^"(.*)"$/, '$1');
  const resolved = path.isAbsolute(originFile) ? originFile : path.join(repo, originFile);
  assert.equal(fs.realpathSync.native(resolved), fs.realpathSync.native(path.join(gitDir, 'config')),
    `config write escaped the fixture; origin=${JSON.stringify(originField)}`);
}

function gitConfig(repo, key, args, extraEnv) {
  const gitDir = path.join(repo, '.git');
  const r = spawnSync('git', ['-C', repo, '--git-dir', gitDir, 'config', ...(args || []),
    '--get', key], { encoding: 'utf8', env: fixtureGitEnv(extraEnv) });
  return r.status === 0 ? String(r.stdout).trim() : '';
}

const localHooksPath = (repo, extraEnv) => gitConfig(repo, 'core.hooksPath', ['--local'], extraEnv);
const effectiveHooksPath = (repo, extraEnv) => gitConfig(repo, 'core.hooksPath', [], extraEnv);

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
    assert.match(again.stdout, /unchanged: pre-push/, again.stdout +
      '\nhook=' + JSON.stringify(fs.readFileSync(hook, 'utf8')));
  } finally {
    fs.rmSync(parent, { recursive: true, force: true });
  }
});

// 判据保留：指向【存在】目录的 core.hooksPath 是真调用方的决定，安装器不许把 hook
// 装进 git 不会看的地方，也不许动那份配置。
test('installer refuses to dead-end when core.hooksPath redirects to a real directory',
  { skip: pwshSkip() }, () => {
    const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-path-'));
    try {
      const repo = initRepo(path.join(parent, 'repo'));
      const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
      const redirected = path.join(parent, 'somewhere-else');
      fs.mkdirSync(redirected, { recursive: true });
      const value = redirected.replaceAll('\\', '/');
      fixtureLocalSet(repo, 'core.hooksPath', value);

      const run = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent);
      assert.equal(run.status, 1, run.stdout + run.stderr);
      assert.match(run.stdout, /core\.hooksPath/, run.stdout);
      assert.ok(!fs.existsSync(path.join(repo, '.git', 'hooks', 'pre-push')),
        'nothing may be installed where git will not look for it');
      assert.equal(localHooksPath(repo), value,
        'a working redirection is a caller decision and must survive verbatim');
    } finally {
      fs.rmSync(parent, { recursive: true, force: true });
    }
  });

// 自愈：指向【不存在】目录的 hooksPath 恒为误配（钩子永远找不到），清掉是修复。
// 必须打印 before/after 和人类可一键执行的那条具名命令。
test('installer clears a dangling core.hooksPath and names the command it ran',
  { skip: pwshSkip() }, () => {
    const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-dangling-'));
    try {
      const repo = initRepo(path.join(parent, 'repo'));
      const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
      const value = path.join(parent, 'somewhere-else').replaceAll('\\', '/');
      assert.ok(!fs.existsSync(value), 'the fixture value must point at a missing directory');
      fixtureLocalSet(repo, 'core.hooksPath', value);

      const run = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent);
      assert.equal(run.status, 0, run.stdout + run.stderr);
      assert.match(run.stdout, /before:\s+core\.hooksPath = /, run.stdout);
      assert.match(run.stdout, new RegExp(`before:\\s+core\\.hooksPath = ${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`),
        run.stdout);
      assert.match(run.stdout, /after:\s+core\.hooksPath = <unset>/, run.stdout);
      assert.match(run.stdout, /git -C ".*" config --local --unset core\.hooksPath/, run.stdout);
      assert.equal(effectiveHooksPath(repo), '', run.stdout);
      assert.ok(fs.existsSync(path.join(repo, '.git', 'hooks', 'pre-push')),
        'after clearing the misconfiguration the hook must actually be installed');

      // 幂等：第二次跑不再报清配置，只报 unchanged。
      const again = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent);
      assert.equal(again.status, 0, again.stdout + again.stderr);
      assert.match(again.stdout, /unchanged: pre-push/, again.stdout);
      assert.ok(!/before:\s+core\.hooksPath =/.test(again.stdout), again.stdout);
    } finally {
      fs.rmSync(parent, { recursive: true, force: true });
    }
  });

// 具名出路：值来自 global/system scope 时安装器不越权改机器级配置，只报出人类命令。
test('installer will not rewrite machine-wide config for a global-scope dangling hooksPath',
  { skip: pwshSkip() }, () => {
    const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-global-'));
    try {
      const repo = initRepo(path.join(parent, 'repo'));
      const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
      const fakeGlobal = path.join(parent, 'gitconfig');
      const dangling = path.join(parent, 'gone-elsewhere').replaceAll('\\', '/');
      fs.writeFileSync(fakeGlobal, `[core]\n\thooksPath = ${dangling}\n`, 'utf8');

      const run = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent,
        { GIT_CONFIG_GLOBAL: fakeGlobal });
      assert.equal(run.status, 1, run.stdout + run.stderr);
      assert.match(run.stdout, /core\.hooksPath/, run.stdout);
      assert.match(run.stdout, /git config --global --unset core\.hooksPath/, run.stdout);
      assert.ok(!fs.existsSync(path.join(repo, '.git', 'hooks', 'pre-push')), run.stdout);
      assert.equal(localHooksPath(repo), '', 'the repository owns no such setting; nothing may be unset there');
      assert.match(fs.readFileSync(fakeGlobal, 'utf8'), /hooksPath = /,
        'the global config must be left for the human command the message names');
    } finally {
      fs.rmSync(parent, { recursive: true, force: true });
    }
  });

// —— 对偶件：跑完整条用例后，外层仓的 core.hooksPath 逐字未变 ——
// 外层仓是沙箱里合成的（hermetic），断言的是 after==before 这条关系，不钉任何真仓快照。
// 旧形（`git -C <夹具> config` + 继承的绝对 GIT_DIR）在这条臂上必红：G1 实测那次写入
// 的 exit=0、值直接落进外层仓的 .git/config，夹具自己的反而没写上。
function redirectedHooksFixtureCase(env) {
  const parent = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-path-'));
  try {
    const repo = initRepo(path.join(parent, 'repo'));
    const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
    const redirected = path.join(parent, 'somewhere-else');
    fs.mkdirSync(redirected, { recursive: true });
    const value = redirected.replaceAll('\\', '/');
    fixtureLocalSet(repo, 'core.hooksPath', value);
    assert.equal(localHooksPath(repo, env), value,
      'the fixture value must live in the fixture repository');
    const run = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], parent, env);
    return { parent, repo, value, run };
  } catch (e) {
    fs.rmSync(parent, { recursive: true, force: true });
    throw e;
  }
}

test('the redirected-hooksPath case cannot touch an enclosing repository config',
  { skip: pwshSkip() }, () => {
    const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-hermetic-'));
    const savedTempVars = ['TMPDIR', 'TEMP', 'TMP'].map((k) => [k, process.env[k]]);
    try {
      // 外层仓（模型 = 被污染的那个真仓）：本测试给它种一个自己的哨兵值，
      // 并把夹具目录建在它的工作树里，再以钩子上下文的形状（绝对 GIT_DIR 继承）跑用例。
      const outer = initRepo(path.join(sandbox, 'outer'));
      const sentinel = path.join(outer, 'outer-hooks').replaceAll('\\', '/');
      fixtureLocalSet(outer, 'core.hooksPath', sentinel);
      const inherited = { GIT_DIR: path.join(outer, '.git'), GIT_WORK_TREE: outer };
      const before = localHooksPath(outer, inherited);
      assert.equal(before, sentinel, 'fixture setup must plant the sentinel in the outer repo');

      // 夹具目录嵌套在外层仓工作树内（E1 的地理形状），并且把继承的绝对 GIT_DIR 真的
      // 放进进程环境（G1 的钩子/GUI 形状）——夹具必须在两种形状下都关得住。
      const nested = path.join(outer, 'Workspace', 'tmp');
      fs.mkdirSync(nested, { recursive: true });
      for (const key of ['TMPDIR', 'TEMP', 'TMP']) process.env[key] = nested;
      const savedGitVars = [['GIT_DIR', process.env.GIT_DIR], ['GIT_WORK_TREE', process.env.GIT_WORK_TREE]];
      for (const [key, value] of Object.entries(inherited)) process.env[key] = value;
      let outcome;
      try {
        outcome = redirectedHooksFixtureCase(inherited);
      } finally {
        for (const [key, value] of savedGitVars) {
          if (value === undefined) delete process.env[key]; else process.env[key] = value;
        }
      }

      assert.equal(outcome.run.status, 1, outcome.run.stdout + outcome.run.stderr);
      assert.match(outcome.run.stdout, /core\.hooksPath/, outcome.run.stdout);
      assert.equal(localHooksPath(outer, inherited), before,
        "an enclosing repository's core.hooksPath must stay verbatim while the case runs");
      assert.equal(localHooksPath(outcome.repo, inherited), outcome.value,
        'the redirection must be carried by the fixture repository itself');
      assert.ok(!fs.existsSync(path.join(outcome.repo, '.git', 'hooks', 'pre-push')),
        'nothing may be installed where git will not look for it');
      fs.rmSync(outcome.parent, { recursive: true, force: true });
    } finally {
      for (const [key, value] of savedTempVars) {
        if (value === undefined) delete process.env[key]; else process.env[key] = value;
      }
      fs.rmSync(sandbox, { recursive: true, force: true });
    }
  });

// 自愈写侧的对偶件：安装器只清它被指到的那个仓，绝不顺着继承的 GIT_DIR 清邻居。
test('installer self-heal clears only the repository it was pointed at',
  { skip: pwshSkip() }, () => {
    const sandbox = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hooks-heal-scope-'));
    try {
      const outer = initRepo(path.join(sandbox, 'outer'));
      const sentinel = path.join(outer, 'outer-hooks').replaceAll('\\', '/');
      fixtureLocalSet(outer, 'core.hooksPath', sentinel);
      const inherited = { GIT_DIR: path.join(outer, '.git'), GIT_WORK_TREE: outer };

      const repo = initRepo(path.join(sandbox, 'outer', 'Workspace', 'tmp', 'repo'));
      const templates = writeTemplate(repo, 'pre-push', TEMPLATE);
      const dangling = path.join(sandbox, 'gone', 'hooks').replaceAll('\\', '/');
      fixtureLocalSet(repo, 'core.hooksPath', dangling);

      const run = runInstaller(['-RepoRoot', repo, '-TemplateDir', templates], sandbox, inherited);
      assert.equal(run.status, 0, run.stdout + run.stderr);
      assert.match(run.stdout, /after:\s+core\.hooksPath = <unset>/, run.stdout);
      assert.ok(fs.existsSync(path.join(repo, '.git', 'hooks', 'pre-push')),
        'the repository asked about must end up with its hook installed');
      assert.equal(localHooksPath(repo, inherited), '', 'the fixture misconfiguration must be cleared');
      assert.equal(localHooksPath(outer, inherited), sentinel,
        'the inherited repository must keep its own core.hooksPath verbatim');
    } finally {
      fs.rmSync(sandbox, { recursive: true, force: true });
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
