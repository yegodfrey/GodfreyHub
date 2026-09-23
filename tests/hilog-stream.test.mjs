import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { pwshSkip } from './env-guard.mjs';

// 流式 GF 标记采集通道（SuiteInstrument）的纯函数形状测试。背景：hilog 环形缓冲全域共享，
// 整场收尾才 'hilog -x' 整缓冲重读的长战役会把手势结束发射的 GF_PERFORMANCE_METRICS 冲出
// 缓冲（Stargaze sky-interaction 五格 nightly 红，"无证据"而非"超预算"）。根修是 3d1aeeaa9
// GFTEXT 流式先例的移植：'hilog -e GF_' follow 落 sidecar，收工停流后按 hilog 时间戳
// **归位插排**进尾部 dump（整行去重）。这里用假 hilog 流逐条钉死归并契约——尤其
// "尾追加会倒置末位标记语义"（family 侧 0923b 实测同形事故：fs320 四锚被误报溢出）。
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runnerEntry = path.join(repoRoot, 'scripts', 'GfDeviceRunner.ps1');
const instrument = path.join(repoRoot, 'scripts', 'runner', 'SuiteInstrument.ps1');

const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-hilog-stream-'));

// 假 hilog 行必须长成真 hilog 的样子：MM-DD HH:MM:SS.mmm 前缀 + tag: 正文。
const PERF_EARLY = '09-23 09:58:12.400 1234 5678 I A02300/StargazeRender: event=render.interaction.metrics | GF_PERFORMANCE_METRICS: {"kind":"skyInteraction","presentedFrames":700,"withinBudget":true}';
const PERF_LATE = '09-23 10:00:01.100 1234 5678 I A02300/StargazeRender: GF_PERFORMANCE_METRICS: {"kind":"skyInteraction","presentedFrames":900,"withinBudget":false}';
const CLOSURE_DUMP_ONLY = '09-23 09:59:00.000 1234 5678 I A0ff00/GFTEST: GF_UI_CLOSURE: {"id":"w"}';
const CLOSURE_STREAM_ONLY = '09-23 10:00:02.100 1234 5678 I A0ff00/GFTEST: GF_UI_CLOSURE: {"id":"x"}';

// sidecar = 流通道活抓的三行（早期 perf 标记已被冲出缓冲，dump 里没有）；
// dump = 收尾 'hilog -x' 的两行（晚期 perf 标记还在缓冲里，与 sidecar 第二行重复）。
const sidecarPath = path.join(workDir, 'hilog-stream-test.log');
fs.writeFileSync(sidecarPath, [
  PERF_EARLY,
  PERF_LATE,
  CLOSURE_STREAM_ONLY,
].join('\n') + '\n', 'utf8');
const dumpLines = [
  CLOSURE_DUMP_ONLY,
  PERF_LATE,
];

const scriptPath = path.join(workDir, 'probe.ps1');
fs.writeFileSync(scriptPath, [
  "$ErrorActionPreference = 'Stop'",
  `. '${runnerEntry.replace(/'/g, "''")}'`,
  `$dump = @('${CLOSURE_DUMP_ONLY.replace(/'/g, "''")}', '${PERF_LATE.replace(/'/g, "''")}')`,
  `$merged = Merge-GfHilogMarkerStream -StreamPath '${sidecarPath.replace(/'/g, "''")}' -HilogLines $dump`,
  '$joined = @($merged.Lines) -join "`n"',
  // 与 SuiteInstrument 收尾同一条 marker 正则："文件序最后一条 complete 标记生效"。
  `$ms = [regex]::Matches($joined, '(?m)GF_PERFORMANCE_METRICS:\\s*(\\{[^\\r\\n]+\\})\\s*$')`,
  `$lastPerf = $ms[$ms.Count - 1].Groups[1].Value | ConvertFrom-Json`,
  `$noop = Merge-GfHilogMarkerStream -StreamPath (Join-Path $env:TEMP 'gf-hilog-stream-missing.log') -HilogLines $dump`,
  `$empty = Merge-GfHilogMarkerStream -StreamPath '' -HilogLines $dump`,
  // 停流三形状：null / 已退出 / 在跑（起一个真 pwsh 睡眠进程再停）。
  `$stopNull = Stop-GfHilogMarkerStream -StreamProcess $null`,
  `$exitProc = Start-Process pwsh -ArgumentList '-NoProfile','-Command','exit 0' -PassThru -WindowStyle Hidden`,
  `[void]$exitProc.WaitForExit()`,
  `$stopExited = Stop-GfHilogMarkerStream -StreamProcess $exitProc`,
  `$runProc = Start-Process pwsh -ArgumentList '-NoProfile','-Command','Start-Sleep 60' -PassThru -WindowStyle Hidden`,
  `$stopRun = Stop-GfHilogMarkerStream -StreamProcess $runProc`,
  `$runGone = $runProc.HasExited`,
  // hdc 不存在时启流必须退回 $null（dump-only 兜底），不得抛。
  `$startBogus = Start-GfHilogMarkerStream -Hdc (Join-Path $env:TEMP 'gf-no-such-hdc.exe') -Serial 'test' -StreamPath '${path.join(workDir, 'bogus.log').replace(/'/g, "''")}'`,
  '[pscustomobject]@{',
  '    mergedCount = $merged.MergedCount',
  '    lines = @($merged.Lines)',
  '    lastWithinBudget = [bool]$lastPerf.withinBudget',
  '    lastPresentedFrames = [int]$lastPerf.presentedFrames',
  '    firstLine = $merged.Lines[0]',
  '    closureWCount = @($merged.Lines | Where-Object { $_ -like \'*"id":"w"*\' }).Count',
  '    noopCount = $noop.MergedCount',
  '    noopLineCount = @($noop.Lines).Count',
  '    emptyCount = $empty.MergedCount',
  '    stopNull = $stopNull',
  '    stopExited = $stopExited',
  '    stopRun = $stopRun',
  '    runGone = [bool]$runGone',
  '    startBogusNull = ($null -eq $startBogus)',
  '} | ConvertTo-Json -Compress -Depth 4',
].join('\r\n'), 'utf8');

const pwshGuard = pwshSkip();
let probe = null;
if (!pwshGuard) {
  const run = spawnSync('pwsh', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', scriptPath],
    { encoding: 'utf8', timeout: 120000 });
  assert.equal(run.status, 0, `dot-source 设备执行器失败: ${run.stderr}`);
  probe = JSON.parse(run.stdout.trim());
}

test('归位插排：流式早抓的标记按时间戳回到 dump 之前，而不是尾追加', { skip: pwshGuard }, () => {
  // 尾追加会把 09:58 的早期标记排到 10:00 的 dump 标记之后——"末条生效"读数被倒置。
  assert.equal(probe.firstLine, PERF_EARLY,
    '流通道早抓的行必须按 hilog 时间戳插进 dump 前面，尾追加即倒置末位语义');
});

test('末位标记语义：归并后 "最后一条 complete 标记" 是时间序最新的那条', { skip: pwshGuard }, () => {
  assert.equal(probe.lastWithinBudget, false,
    '晚期 withinBudget=false 必须胜出；取到早期 true 就是 0923b 同形倒置');
  assert.equal(probe.lastPresentedFrames, 900);
});

test('整行去重：同一条 hilog 行在两条路径里只入账一次', { skip: pwshGuard }, () => {
  assert.equal(probe.mergedCount, 2,
    'sidecar 三行里只有两条是 fresh（晚期 perf 标记与 dump 完全同键，不重复）');
  assert.equal(probe.lines.length, 4, '2 dump + 2 fresh = 4 行');
  const perfLines = probe.lines.filter((line) => line.includes('GF_PERFORMANCE_METRICS'));
  assert.equal(perfLines.length, 2, '早晚两条 perf 标记各一次，不因双路重复');
  assert.equal(probe.closureWCount, 1, 'closure w 只在 dump 里，出现一次');
});

test('sidecar 缺席/空路径是无害 no-op，dump 原样返回', { skip: pwshGuard }, () => {
  assert.equal(probe.noopCount, 0);
  assert.equal(probe.noopLineCount, 2);
  assert.equal(probe.emptyCount, 0);
});

test('停流三形状：not-started / stream-exited-early / stopped', { skip: pwshGuard }, () => {
  assert.equal(probe.stopNull, 'not-started');
  assert.equal(probe.stopExited, 'stream-exited-early');
  assert.equal(probe.stopRun, 'stopped');
  assert.equal(probe.runGone, true, '在跑的流进程必须被真的终止');
});

test('启流失败退回 dump-only：返回 $null 而不是抛', { skip: pwshGuard }, () => {
  assert.equal(probe.startBogusNull, true);
});

// 静态接线断言：守"通道真的被 executor 调用、收尾真的在判定链之前停流归并"。
// 函数存在但没人调用，与"能解析不等于会执行"是同一类静默失效。
const instrumentSource = fs.readFileSync(instrument, 'utf8');

test('executor 真实接线：启流在 hilog -r 之后，停流归并在判定链之前', () => {
  assert.ok(instrumentSource.includes("'-t', $Serial, 'shell', 'hilog -e GF_'"),
    '流通道必须以 hilog -e GF_（follow 模式）启动：GF_ 是家族标记词汇前缀，与发射方 tag 无关');
  const startAt = instrumentSource.indexOf('Start-GfHilogMarkerStream -Hdc $hdc');
  const clearAt = instrumentSource.indexOf('shell hilog -r');
  assert.ok(clearAt > 0 && startAt > clearAt, '启流必须紧随 hilog -r（清缓冲 = 窗口起点）');
  assert.ok(instrumentSource.includes('& $hdc -t $device.Serial shell hilog -x'),
    '尾部 dump 兜底必须原样保留：流通道失败时退回今天的形状');
  const mergeAt = instrumentSource.indexOf('Merge-GfHilogMarkerStream -StreamPath $hilogStreamPath');
  const judgeAt = instrumentSource.indexOf('if ($null -ne $primaryExecutionError) {');
  assert.ok(mergeAt > 0 && judgeAt > mergeAt,
    '停流归并必须在 outputText 组装与判定链之前，否则 marker 解析吃不到并回的行');
  assert.ok(instrumentSource.includes('===== hilog stream:'),
    '启停/归并哨兵必须入账套件日志，采集通道发生过什么要能直接对账');
});
