# emu-testmode SelfTest - 离线自测, 不碰任何真实设备。
# 用假 Emulator.cmd/假 hdc.cmd(状态文件驱动时序)验证: 端口归属解析、目标过滤、param
# 幂等写读回、已使能跳过、错误归属不写、hdc 缺席收尾、launcher 挂钩完整性。
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$helper = Join-Path $PSScriptRoot 'emu-testmode.ps1'
if (-not (Test-Path -LiteralPath $helper -PathType Leaf)) {
    throw "Missing emu-testmode helper: $helper"
}
. $helper

$tempRoot = [IO.Path]::GetTempPath()
$checks = [Collections.Generic.List[object]]::new()
function Add-Check {
    param([string]$Name, [bool]$Pass, [string]$Detail)
    $script:checks.Add([pscustomobject]@{ check = $Name; pass = $Pass; detail = $Detail })
    Write-Host ("{0} {1} -- {2}" -f ($(if ($Pass) { 'PASS' } else { 'FAIL' })), $Name, $Detail)
}

# ---- 单元: Get-GfEmuTestmodeAction ----
Add-Check 'action-already-enabled' ((Get-GfEmuTestmodeAction -Readback "1`n") -eq 'skip') '读回 1 → skip(幂等)'
Add-Check 'action-zero-writes' ((Get-GfEmuTestmodeAction -Readback "0`n") -eq 'write') '读回 0 → write'
Add-Check 'action-empty-writes' ((Get-GfEmuTestmodeAction -Readback '') -eq 'write') '读回空 → write'
Add-Check 'action-garbage-writes' ((Get-GfEmuTestmodeAction -Readback "1002`n") -eq 'write') '读回 1002 垃圾 → write'

# ---- 单元: Get-GfEmuOnlineTargets ----
$targets = Get-GfEmuOnlineTargets -ListTargetsText "127.0.0.1:5555`r`n[Fail](E001005) need connect-key`r`n127.0.0.1:5556`r`nemulator-5557`r`n"
Add-Check 'targets-filter-loopback-only' (($targets -join ',') -eq '127.0.0.1:5555,127.0.0.1:5556') "只收 127.0.0.1:port, [Fail]/真机序列号拒收 → $($targets -join ',')"

# ---- 单元: Get-GfEmuInstancePort ----
$detailsFixture = @'
Emulator version 26.0.0 Beta
[{"name":"Test Emu","isRunning":true,"hw.hdc.port":"5555"},
 {"name":"Other","isRunning":false,"hw.hdc.port":"notset"}]
trailing banner noise
'@
$port = Get-GfEmuInstancePort -DetailsText $detailsFixture -InstanceName 'Test Emu'
Add-Check 'port-attribute-banner-tolerant' ($port -eq '5555') "banner+尾噪声夹 JSON, 实例名含空格 → $port"
$portNotset = Get-GfEmuInstancePort -DetailsText $detailsFixture -InstanceName 'Other'
Add-Check 'port-notset-keeps-waiting' ($null -eq $portNotset) 'notset 端口 → $null(继续等分配)'
$portMissing = Get-GfEmuInstancePort -DetailsText $detailsFixture -InstanceName 'Ghost'
Add-Check 'port-missing-instance-null' ($null -eq $portMissing) '实例不存在 → $null'
$portMalformed = Get-GfEmuInstancePort -DetailsText 'no json here' -InstanceName 'Test Emu'
Add-Check 'port-malformed-null' ($null -eq $portMalformed) '无 JSON → $null'

# ---- 假可执行文件基座 ----
function New-FakeRoot {
    $root = Join-Path $tempRoot ("gf-emu-testmode-" + [guid]::NewGuid().ToString('N'))
    [IO.Directory]::CreateDirectory($root) | Out-Null
    return $root
}

# 假 Emulator.cmd: -list -details → type %GF_EMU_FAKE_DETAILS%
function New-FakeEmulator {
    param([string]$Root)
    $fake = Join-Path $Root 'fake-emulator.cmd'
    @'
@echo off
if "%~1"=="-list" if "%~2"=="-details" (
  if exist "%GF_EMU_FAKE_DETAILS%" type "%GF_EMU_FAKE_DETAILS%"
  exit /b 0
)
echo unknown emulator command
exit /b 1
'@ | Set-Content -LiteralPath $fake -Encoding Ascii
    return $fake
}

# 假 hdc.cmd: list targets → %GF_EMU_FAKE_TARGETS%; -t shell param get → %GF_EMU_FAKE_PARAM%;
# -t shell param set ... → 写 '1' 入 %GF_EMU_FAKE_PARAM%; 每条设备命令追加 %GF_EMU_FAKE_JOURNAL%。
function New-FakeHdc {
    param([string]$Root)
    $fake = Join-Path $Root 'fake-hdc.cmd'
    @'
@echo off
if "%~1"=="list" if "%~2"=="targets" (
  if exist "%GF_EMU_FAKE_TARGETS%" type "%GF_EMU_FAKE_TARGETS%"
  exit /b 0
)
if "%~1"=="-t" goto device
echo [Fail] unknown hdc command
exit /b 1
:device
>> "%GF_EMU_FAKE_JOURNAL%" echo %~2 %~4
if "%~4"=="param get persist.ace.testmode.enabled" (
  if exist "%GF_EMU_FAKE_PARAM%" type "%GF_EMU_FAKE_PARAM%"
  exit /b 0
)
if "%~4"=="param set persist.ace.testmode.enabled 1" (
  > "%GF_EMU_FAKE_PARAM%" echo 1
  echo Set parameter persist.ace.testmode.enabled 1 success
  exit /b 0
)
if "%~4"=="param set persist.sys.suspend_manager_enabled 0" (
  echo Set parameter persist.sys.suspend_manager_enabled 0 success
  exit /b 0
)
echo [Fail] unknown shell command
exit /b 1
'@ | Set-Content -LiteralPath $fake -Encoding Ascii
    return $fake
}

function Drive-ToFinish {
    # MaxTicks 240: Windows 上每 tick 至少拉起一个 cmd.exe(约 30-100ms), 240 ticks ≥ 7s,
    # 必须盖过行为 C 的 2s deadline 竞速窗——tick 预算只防状态机死循环, 不参与 deadline 竞速。
    param($State, [int]$MaxTicks = 240)
    $ticks = 0
    while (-not (Update-GfEmuTestmodeState -State $State)) {
        $ticks++
        if ($ticks -gt $MaxTicks) { throw 'Drive-ToFinish: tick 预算耗尽, 状态机未收尾' }
    }
}

function Set-FakeEnv {
    param([string]$Details, [string]$Targets, [string]$Param, [string]$Journal)
    $env:GF_EMU_FAKE_DETAILS = $Details
    $env:GF_EMU_FAKE_TARGETS = $Targets
    $env:GF_EMU_FAKE_PARAM = $Param
    $env:GF_EMU_FAKE_JOURNAL = $Journal
}

$emu = New-FakeEmulator $tempRoot
$hdc = New-FakeHdc $tempRoot

# ---- 行为 A: 全新实例 happy path —— 归属 5555 → 等在线 → param 0→写→读回 1 ----
$rootA = New-FakeRoot
$detailsA = Join-Path $rootA 'details.json'
$targetsA = Join-Path $rootA 'targets.txt'
$paramA = Join-Path $rootA 'param.txt'
$journalA = Join-Path $rootA 'journal.txt'
Set-Content -LiteralPath $detailsA -Value $detailsFixture -Encoding Ascii
Set-Content -LiteralPath $targetsA -Value '' -Encoding Ascii
Set-Content -LiteralPath $paramA -Value '0' -Encoding Ascii
Set-FakeEnv -Details $detailsA -Targets $targetsA -Param $paramA -Journal $journalA
$stateA = New-GfEmuTestmodeState -EmulatorExecutable $emu -InstanceName 'Test Emu' -HdcExecutable $hdc -TimeoutSec 60
$doneA1 = Update-GfEmuTestmodeState -State $stateA
Add-Check 'happy-tick1-port-attr-only' (-not $doneA1 -and $stateA.Port -eq '5555' -and -not $stateA.Target) 'tick1 只归属端口(5555), 不等在线不写'
Set-Content -LiteralPath $targetsA -Value "127.0.0.1:6666`r`n127.0.0.1:5555`r`n" -Encoding Ascii
Drive-ToFinish -State $stateA
Add-Check 'happy-final-verified' ($stateA.Finished -and $stateA.Action -eq 'write' -and $stateA.Verified -and $stateA.Target -eq '127.0.0.1:5555') "收尾 write+verified, 多目标在线时严格按归属端口选 5555 → $($stateA.Detail)"
Add-Check 'happy-param-flipped' ((Get-Content -LiteralPath $paramA -Raw).Trim() -eq '1') '假设备 param 落盘为 1'
Add-Check 'happy-both-params-written' (((Get-Content -LiteralPath $journalA) -join "`n") -match 'suspend_manager_enabled 0') 'suspend_manager 对子同写(与 enableUiTest 同源)'

# ---- 行为 B: 已使能幂等跳过 ----
$rootB = New-FakeRoot
$detailsB = Join-Path $rootB 'details.json'
$targetsB = Join-Path $rootB 'targets.txt'
$paramB = Join-Path $rootB 'param.txt'
$journalB = Join-Path $rootB 'journal.txt'
Set-Content -LiteralPath $detailsB -Value $detailsFixture -Encoding Ascii
Set-Content -LiteralPath $targetsB -Value '127.0.0.1:5555' -Encoding Ascii
Set-Content -LiteralPath $paramB -Value '1' -Encoding Ascii
Set-FakeEnv -Details $detailsB -Targets $targetsB -Param $paramB -Journal $journalB
$stateB = New-GfEmuTestmodeState -EmulatorExecutable $emu -InstanceName 'Test Emu' -HdcExecutable $hdc -TimeoutSec 60
Drive-ToFinish -State $stateB
Add-Check 'already-enabled-idempotent-skip' ($stateB.Action -eq 'skip' -and $stateB.Verified) "读回 1 → skip 不重写 → $($stateB.Detail)"
$journalBLines = if (Test-Path -LiteralPath $journalB) { @(Get-Content -LiteralPath $journalB) } else { @() }
Add-Check 'already-enabled-no-writes' (@($journalBLines | Where-Object { $_ -match 'param set' }).Count -eq 0) "skip 路径零写入(journal 至多含 param get: $($journalBLines -join ' | '))"

# ---- 行为 C: 归属端口不在线 → 永不写错设备, 到期超时收尾 ----
$rootC = New-FakeRoot
$detailsC = Join-Path $rootC 'details.json'
$targetsC = Join-Path $rootC 'targets.txt'
$paramC = Join-Path $rootC 'param.txt'
$journalC = Join-Path $rootC 'journal.txt'
Set-Content -LiteralPath $detailsC -Value $detailsFixture -Encoding Ascii
Set-Content -LiteralPath $targetsC -Value '127.0.0.1:6666' -Encoding Ascii
Set-Content -LiteralPath $paramC -Value '0' -Encoding Ascii
Set-FakeEnv -Details $detailsC -Targets $targetsC -Param $paramC -Journal $journalC
$stateC = New-GfEmuTestmodeState -EmulatorExecutable $emu -InstanceName 'Test Emu' -HdcExecutable $hdc -TimeoutSec 2
Drive-ToFinish -State $stateC
Add-Check 'wrong-attribution-never-writes' ($stateC.Action -eq 'timeout' -and -not (Test-Path -LiteralPath $journalC)) "归属 5555 不在线, 6666 在线不写; 超时收尾 → $($stateC.Detail)"
Add-Check 'wrong-attribution-param-untouched' ((Get-Content -LiteralPath $paramC -Raw).Trim() -eq '0') 'param 保持 0'

# ---- 行为 D: hdc 不可用 → skipped 收尾, 不 throw ----
$rootD = New-FakeRoot
$detailsD = Join-Path $rootD 'details.json'
$targetsD = Join-Path $rootD 'targets.txt'
$paramD = Join-Path $rootD 'param.txt'
$journalD = Join-Path $rootD 'journal.txt'
Set-Content -LiteralPath $detailsD -Value $detailsFixture -Encoding Ascii
Set-Content -LiteralPath $targetsD -Value '127.0.0.1:5555' -Encoding Ascii
Set-Content -LiteralPath $paramD -Value '0' -Encoding Ascii
Set-FakeEnv -Details $detailsD -Targets $targetsD -Param $paramD -Journal $journalD
$stateD = New-GfEmuTestmodeState -EmulatorExecutable $emu -InstanceName 'Test Emu' -HdcExecutable (Join-Path $rootD 'no-such-hdc.exe') -TimeoutSec 60
Drive-ToFinish -State $stateD
Add-Check 'hdc-missing-skips-cleanly' ($stateD.Action -eq 'skipped' -and $stateD.Finished) "hdc 缺席 → skipped(boot 路径不受累) → $($stateD.Detail)"

# ---- 行为 E: Emulator.exe 缺席 → skipped 收尾 ----
$rootE = New-FakeRoot
Set-FakeEnv -Details (Join-Path $rootE 'none.json') -Targets '' -Param '' -Journal ''
$stateE = New-GfEmuTestmodeState -EmulatorExecutable (Join-Path $rootE 'no-such-emulator.exe') -InstanceName 'Test Emu' -HdcExecutable $hdc -TimeoutSec 60
Drive-ToFinish -State $stateE
Add-Check 'emulator-missing-skips-cleanly' ($stateE.Action -eq 'skipped' -and $stateE.Finished) 'Emulator.exe 缺席 → skipped'

# ---- 行为 F: GF_EMU_TESTMODE_DISABLE 关停语义(调用方层) —— 这里只验证 launcher 文本挂钩 ----
$launcher = Join-Path $PSScriptRoot 'win_launch_emulator.ps1'
$launcherText = Get-Content -LiteralPath $launcher -Raw
Add-Check 'launcher-hooked' ($launcherText -match 'emu-testmode\.ps1' -and $launcherText -match 'GF_EMU_TESTMODE_DISABLE') 'win_launch_emulator.ps1 已挂 testmode 钩子与关停开关'
$tokens = $null
$errors = $null
[System.Management.Automation.Language.Parser]::ParseFile($launcher, [ref]$tokens, [ref]$errors) | Out-Null
Add-Check 'launcher-parses-clean' (@($errors).Count -eq 0) "launcher 语法解析零错误($(@($errors).Count) errors)"

foreach ($staleFile in @($emu, $hdc)) { Remove-Item -LiteralPath $staleFile -Force -ErrorAction SilentlyContinue }

$failed = @($checks | Where-Object { -not $_.pass })
if ($failed.Count -eq 0) {
    Write-Host "emu-testmode SelfTest: PASS ($($checks.Count) checks: action x4 / targets x1 / port x4 / happy x4 / idempotent x2 / wrong-attribution x2 / missing-tool x2 / launcher x2)"
    exit 0
}
$failedNames = (@($failed | ForEach-Object { $_.check })) -join ', '
Write-Host "emu-testmode SelfTest: FAIL ($($failed.Count)/$($checks.Count) checks failed: $failedNames)"
exit 1
