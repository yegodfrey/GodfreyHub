import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

// 渲染侧溢出报警在设备执行器里的入账路径。这里之所以要**真的 dot-source 一次**而不是只
// 断言源码文本：PowerShell 类不给实例赋未声明属性，$result.TextTruncationAnchors = ...
// 这一行能解析、能在门禁里绿，然后在下一次真机跑到的那一秒抛 PropertyNotFound——
// "能解析"从来不是"会执行"的证据，本仓被这类形态绊过的次数已经足够多了。
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const runnerEntry = path.join(repoRoot, 'scripts', 'GfDeviceRunner.ps1');
const instrument = path.join(repoRoot, 'scripts', 'runner', 'SuiteInstrument.ps1');

const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'gf-truncation-'));
const scriptPath = path.join(workDir, 'probe.ps1');
fs.writeFileSync(scriptPath, [
  "$ErrorActionPreference = 'Stop'",
  `. '${runnerEntry.replace(/'/g, "''")}'`,
  '$r = [GfDeviceRunResult]::new()',
  "$r.TextTruncationAnchors = @('quiz.library.batch.count', 'clash.home.traffic')",
  '$anchors = @(Get-GfTextTruncationAnchors $r.TextTruncationAnchors[0])',
  '[pscustomobject]@{',
  "    declared = [bool]($r.PSObject.Properties.Name -contains 'TextTruncationAnchors')",
  '    stored = @($r.TextTruncationAnchors)',
  '    empty = @(Get-GfTextTruncationAnchors $null)',
  '    measured = @(Get-GfTextTruncationAnchors "I/A0FF00/GFTEXT: GF_TEXT_MEASURED:quiz.a:box=215:intrinsic=215:fp=14")',
  '    overflow = @(Get-GfTextTruncationAnchors "W/A0FF00/GFTEXT: GF_TEXT_OVERFLOW:quiz.a:txt")',
  '    multiLine = @(Get-GfTextTruncationAnchors "a`nGF_TEXT_OVERFLOW:x.y:z`nGF_TEXT_OVERFLOW:x.y:w`nGF_TEXT_OVERFLOW:q.r:v")',
  '    anchored = @($anchors)',
  '} | ConvertTo-Json -Compress',
].join('\r\n'), 'utf8');

const run = spawnSync('pwsh', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', scriptPath],
  { encoding: 'utf8' });
assert.equal(run.status, 0, `dot-source 设备执行器失败: ${run.stderr}`);
const probe = JSON.parse(run.stdout.trim());

test('GfDeviceRunResult 声明了溢出成员，且赋值真的能跑', () => {
  assert.equal(probe.declared, true, '类里没有 TextTruncationAnchors 成员：SuiteInstrument 的赋值会在运行时炸');
  assert.deepEqual([...probe.stored].sort(), ['clash.home.traffic', 'quiz.library.batch.count']);
});

test('溢出标记解析：正向、度量标记与多行去重各自如实', () => {
  assert.deepEqual(probe.empty, [], 'null 输入不得凭空产出锚点');
  assert.deepEqual(probe.measured, [], 'GF_TEXT_MEASURED 是正向证据，不是报警');
  assert.deepEqual(probe.overflow, ['quiz.a']);
  assert.deepEqual([...probe.multiLine].sort(), ['q.r', 'x.y'], '同一锚点重复报警要去重，不同锚点不得合并');
});

const instrumentSource = fs.readFileSync(instrument, 'utf8');

test('判据确实被执行器消费，且优先级排在环境阻塞之后、用例计数之前', () => {
  // 这一段只能做静态顺序核对：整条判定链在 Invoke-…Instrument 内部，没有设备就进不去。
  // 但它守的正是最容易静默失效的东西——分支先后次序。截断排到 "passed" 之后就是永不触发。
  assert.ok(instrumentSource.includes('Get-GfTextTruncationAnchors $outputText'),
    '执行器不再读取溢出报警：直跑车道会把截断读成通过');
  // 只在判定链本身内比较先后：整份文件里 "17000002" 也出现在前置探测里，全文 indexOf
  // 会把"链外的那一次出现"当成链首，次序断言于是变成随机红。
  const start = instrumentSource.indexOf('if ($markerError) {');
  const end = instrumentSource.indexOf('no test cases executed', start);
  assert.ok(start > 0 && end > start, '判定链形状变了（找不到链首或链尾），本断言的的前提已不成立');
  const chain = instrumentSource.slice(start, end);
  const at = (needle) => chain.indexOf(needle);
  const driver = at('UITest Driver unavailable');
  const truncation = at('$truncationAnchors.Count -gt 0');
  const scope = at('} elseif ($scopeFailures.Count -gt 0)');
  const failed = at('} elseif ($result.Failed -gt 0)');
  const passed = at('} elseif ($result.Passed -gt 0)');
  assert.ok(driver > 0 && truncation > driver, '截断判失败排在环境阻塞之前会把设备问题算成产品缺陷');
  assert.ok(truncation > 0 && truncation < scope, '截断分支排到了计数之后 = 永不触发');
  assert.ok(scope > 0 && scope < failed && failed < passed, '计数分支自身的先后也变了，需要重读这条链');
  assert.ok(chain.includes('$systemUiPrerequisiteDetail$truncationSuffix'),
    '被阻塞的运行不再附带报警文本：环境原因会顺手抹掉一条产品缺陷');
});
