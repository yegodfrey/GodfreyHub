import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { inspectPsFile, collectRepoPowerShell, gateFiles } from '../scripts/check-ps-encoding.mjs';

const checker = fileURLToPath(new URL('../scripts/check-ps-encoding.mjs', import.meta.url));

test('byte gate rejects literal newline residue and BOM-less non-ASCII', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-ps-enc-'));
  try {
    const residue = path.join(root, 'BadResidue.ps1');
    fs.writeFileSync(residue, '# comment\nfoo = )' + String.fromCharCode(92) + 'n+\n', 'utf8');
    assert.deepEqual(inspectPsFile(residue).length, 1,
      'literal \\n residue must be detected');

    const bomLess = path.join(root, 'BomLess.ps1');
    fs.writeFileSync(bomLess, '# 中文注释无 BOM\nvalue = 1\n', 'utf8');
    assert.match(inspectPsFile(bomLess).join('; '), /无 UTF-8 BOM/,
      'non-ASCII without BOM must be detected');

    const withBom = path.join(root, 'WithBom.ps1');
    fs.writeFileSync(withBom, Buffer.concat([
      Buffer.from([0xEF, 0xBB, 0xBF]), Buffer.from('# 中文注释有 BOM\nvalue = 1\n', 'utf8'),
    ]));
    assert.deepEqual(inspectPsFile(withBom), [], 'BOM-marked UTF-8 must pass');

    const pureAscii = path.join(root, 'PureAscii.ps1');
    fs.writeFileSync(pureAscii, 'Write-Output "ok"\n', 'utf8');
    assert.deepEqual(inspectPsFile(pureAscii), [], 'pure ASCII must pass without BOM');
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('parse gate reports PowerShell syntax errors and coverage guards fire', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-ps-gate-'));
  try {
    fs.mkdirSync(path.join(root, 'harness'));
    fs.writeFileSync(path.join(root, 'Broken.ps1'),
      'function Broken {\n  foreach ($x in 1..3 {\n}\n', 'utf8');
    fs.writeFileSync(path.join(root, 'harness', 'Real.ps1'), 'Write-Output ok\n', 'utf8');

    const broken = gateFiles({
      repoRoot: root,
      files: [path.join(root, 'Broken.ps1'), path.join(root, 'harness', 'Real.ps1')],
      requireDirs: ['harness'], minFiles: 1,
    });
    assert.equal(broken.files, 2);
    assert.ok(broken.violations.some((v) => /Broken\.ps1/.test(v)),
      `syntax error must be reported, saw: ${broken.violations.join('; ')}`);

    const uncovered = gateFiles({
      repoRoot: root,
      files: [path.join(root, 'Broken.ps1'), path.join(root, 'harness', 'Real.ps1')],
      requireDirs: ['missing-dir'], minFiles: 1,
    });
    assert.ok(uncovered.violations.some((v) => /missing-dir/.test(v)),
      'uncovered require-dir must fail the gate');

    const tiny = gateFiles({
      repoRoot: root,
      files: [path.join(root, 'harness', 'Real.ps1')],
      requireDirs: [], minFiles: 100,
    });
    assert.ok(tiny.violations.some((v) => /inventory too small/.test(v)),
      'min-files guard must fire on a tiny inventory');
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('this repository passes its own integrity gate', () => {
  const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const files = collectRepoPowerShell(repoRoot);
  assert.ok(files.length >= 10, 'the Hub PowerShell inventory should be covered');
  const { violations } = gateFiles({ repoRoot, files, requireDirs: ['scripts'], minFiles: 10 });
  assert.deepEqual(violations, [], violations.join('\n'));
});
