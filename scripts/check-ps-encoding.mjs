#!/usr/bin/env node
// Shared PowerShell source-integrity gate (parse + bytes), consumed by BOTH
// the GodfreyHub repo (its own scripts) and the GFSoftware family repo (its
// first-party PowerShell inventory) so the policy has exactly one
// implementation.
//
// What it enforces, and why each class exists:
//   1. Every versioned .ps1/.psm1 entrypoint must parse (Parser::ParseFile).
//   2. Byte-level checks the parser cannot see:
//      - non-ASCII source without a UTF-8 BOM is silently mis-decoded by
//        Windows PowerShell 5.1 (ANSI fallback);
//      - a BOM claiming UTF-8 over mojibake body means the file was
//        transcoded wrongly at some point;
//      - trailing literal `\n` / `\r` escapes are script-rewrite residue that
//        PowerShell swallows as extra dot-source arguments.
//   3. Coverage guards: the inventory must exceed --min-files and every
//      --require-dir must contribute at least one file, so a renamed or moved
//      harness directory cannot silently drop out of the gate.
//
// Usage:
//   node check-ps-encoding.mjs --repo <root> [--require-dir <rel>]... [--min-files N]
// Exit codes: 0 clean, 1 violations found, 2 usage/environment error.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function collectRepoPowerShell(repoRoot) {
  const out = spawnSync('git',
    ['ls-files', '--cached', '--others', '--exclude-standard', '--', '*.ps1', '*.psm1'],
    { cwd: repoRoot, encoding: 'utf8' });
  if (out.status !== 0) throw new Error(`git ls-files failed: ${out.stderr}`);
  return out.stdout.split('\n').map((f) => f.trim()).filter(Boolean)
    .map((f) => path.join(repoRoot, f))
    .filter((f) => fs.existsSync(f));
}

export function inspectPsFile(absPath) {
  const buf = fs.readFileSync(absPath);
  const hasBOM = buf.length >= 3 && buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF;
  const body = hasBOM ? buf.subarray(3) : buf;
  const problems = [];
  let nonAscii = 0;
  for (const byte of body) if (byte > 0x7f) nonAscii++;
  if (nonAscii && !hasBOM) problems.push(`含 ${nonAscii} 个非 ASCII 字节却无 UTF-8 BOM`);
  if (hasBOM && nonAscii &&
      Buffer.compare(Buffer.from(body.toString('utf8'), 'utf8'), body) !== 0) {
    problems.push('BOM 声明 UTF-8 但正文非合法 UTF-8（疑似 mojibake）');
  }
  const text = body.toString('utf8');
  // 字面残渣 = 行尾落单的反斜杠转义（脚本重写残留，如 ')\n+'）。行中的反斜杠
  // 是合法内容（Windows 路径、正则 \r?\n），不算残渣；\r?$ 兼容 CRLF 行尾。
  const residue = text.match(/(?:\\[nr])[+*\t ]*\r?$/gm);
  if (residue) problems.push(`含行尾字面 \\n/\\r 残渣 ${residue.length} 处（脚本重写残留）`);
  return problems;
}

export function parsePowerShellFiles(repoRoot, files) {
  // 清单经 stdin 管道进入 pwsh（$input）。不落临时清单文件，也不把路径作为 -Command
  // 的尾随参数传递：多行命令下 PowerShell 会按 ShellExecute 执行那个文档路径（拉起
  // .txt 的关联程序），且文件被外部进程占用后临时目录删不掉。
  const result = spawnSync('pwsh', ['-NoProfile', '-Command', `
      $ErrorActionPreference = 'Stop'
      $failures = @()
      $input | ForEach-Object {
        if (-not $_) { return }
        $tokens = $null; $parseErrors = $null
        $null = [System.Management.Automation.Language.Parser]::ParseFile($_, [ref]$tokens, [ref]$parseErrors)
        foreach ($parseError in $parseErrors) { $failures += "$_ : $($parseError.Message)" }
      }
      if ($failures.Count -gt 0) { [Console]::Error.WriteLine($failures -join "\n"); exit 1 }
    `], { cwd: repoRoot, encoding: 'utf8', input: files.join('\n') });
  if (result.status !== 0) {
    return [result.stderr.trim() || `pwsh parse gate exited ${result.status}`];
  }
  return [];
}

export function gateFiles({ repoRoot, files, requireDirs = [], minFiles = 1 }) {
  const violations = [];
  if (files.length < minFiles) {
    violations.push(`inventory too small: ${files.length} files (expected >= ${minFiles}); ` +
      'the gate is not covering the repo');
  }
  for (const dir of requireDirs) {
    const abs = path.join(repoRoot, dir);
    const covered = files.some((file) => file.startsWith(abs + path.sep));
    if (!covered) violations.push(`required directory not covered by the gate: ${dir}`);
  }
  for (const file of files) {
    const problems = inspectPsFile(file);
    if (problems.length) violations.push(`${path.relative(repoRoot, file)}: ${problems.join('; ')}`);
  }
  violations.push(...parsePowerShellFiles(repoRoot, files));
  return { files: files.length, violations };
}

export function checkRepo({ repoRoot, requireDirs = [], minFiles = 1 }) {
  return gateFiles({ repoRoot, files: collectRepoPowerShell(repoRoot), requireDirs, minFiles });
}

function main(argv) {
  const args = argv.slice(2);
  const readOpt = (name) => {
    const idx = args.indexOf(name);
    return idx >= 0 ? args[idx + 1] : undefined;
  };
  const repo = readOpt('--repo');
  if (!repo) {
    console.error('usage: check-ps-encoding.mjs --repo <root> [--require-dir <rel>]... [--min-files N]');
    return 2;
  }
  const repoRoot = path.resolve(repo);
  if (!fs.existsSync(repoRoot)) {
    console.error(`repo root not found: ${repoRoot}`);
    return 2;
  }
  const requireDirs = [];
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === '--require-dir') requireDirs.push(args[i + 1]);
  }
  const minFiles = Number(readOpt('--min-files') ?? '1');
  const { files, violations } = checkRepo({
    repoRoot, requireDirs, minFiles: Number.isFinite(minFiles) ? minFiles : 1,
  });
  if (violations.length) {
    console.log(`PowerShell integrity gate FAILED (${files} files):\n${violations.join('\n')}`);
    return 1;
  }
  console.log(`PowerShell integrity gate OK: ${files} files parse clean, bytes intact.`);
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exit(main(process.argv));
}
