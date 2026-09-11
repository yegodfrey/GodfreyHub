# Behavioral self-test for the shared HDC target helper: bounded retry must
# converge past transport failures, return an empty list when attempts are
# exhausted, the failure classifier must not flag healthy output, and
# transport-failure text that merely CONTAINS "connected" must never be
# parsed into a target.
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$helper = Join-Path $PSScriptRoot 'hdc-targets.ps1'
if (-not (Test-Path -LiteralPath $helper -PathType Leaf)) {
    throw "Missing shared HDC target helper: $helper"
}
. $helper

$tempRoot = [IO.Path]::GetTempPath()
$statePath = Join-Path $tempRoot ("gf-hdc-fake-" + [guid]::NewGuid().ToString('N') + ".txt")
$fakeHdc = Join-Path $tempRoot ("gf-hdc-fake-" + [guid]::NewGuid().ToString('N') + ".cmd")
$fakeHdcAlwaysFailText = Join-Path $tempRoot ("gf-hdc-fake-" + [guid]::NewGuid().ToString('N') + ".cmd")
$fakeHdcFailTextOkExit = Join-Path $tempRoot ("gf-hdc-fake-" + [guid]::NewGuid().ToString('N') + ".cmd")
Set-Content -LiteralPath $statePath -Value '0' -Encoding Ascii
# Fails with a transport error on the first two invocations, then reports a
# healthy target. The state file counts invocations across calls. Goto-style
# control flow keeps cmd from treating the parens in the error text as a
# block terminator.
@'
@echo off
set /p n=<"%GF_HDC_FAKE_STATE%" 2>nul || set n=0
set /a n+=1
> "%GF_HDC_FAKE_STATE%" echo %n%
if %n% LSS 3 goto fail
echo 127.0.0.1:5555 Connected emulator
exit /b 0
:fail
echo [Fail](E001005) ExecuteCommand need connect-key
exit /b 1
'@ | Set-Content -LiteralPath $fakeHdc -Encoding Ascii
# Always fails with classifier-listed text that contains the word "connected";
# the first column of that line is "[Fail]" and must never be returned as a
# target, with either exit code. Both count invocations so the test can prove
# the bounded retry kept running instead of "succeeding" on the first failure.
@'
@echo off
set /p n=<"%GF_HDC_FAKE_STATE%" 2>nul || set n=0
set /a n+=1
> "%GF_HDC_FAKE_STATE%" echo %n%
echo [Fail](E001005) Device not found or connected
exit /b 1
'@ | Set-Content -LiteralPath $fakeHdcAlwaysFailText -Encoding Ascii
@'
@echo off
set /p n=<"%GF_HDC_FAKE_STATE%" 2>nul || set n=0
set /a n+=1
> "%GF_HDC_FAKE_STATE%" echo %n%
echo [Fail](E001005) Device not found or connected
exit /b 0
'@ | Set-Content -LiteralPath $fakeHdcFailTextOkExit -Encoding Ascii

try {
    $env:GF_HDC_FAKE_STATE = $statePath
    try {
        $targets = @(Get-ConnectedHdcTargets -Hdc $fakeHdc -Attempts 5 -InitialDelayMs 10)
        if ($targets.Count -ne 1 -or $targets[0] -ne '127.0.0.1:5555') {
            throw "bounded retry did not converge to the healthy target: $($targets -join ',')"
        }
        $attempts = [int](Get-Content -LiteralPath $statePath)
        if ($attempts -ne 3) {
            throw "expected success on the 3rd hdc invocation, saw $attempts"
        }

        Set-Content -LiteralPath $statePath -Value '0' -Encoding Ascii
        $exhausted = @(Get-ConnectedHdcTargets -Hdc $fakeHdc -Attempts 2 -InitialDelayMs 10)
        if ($exhausted.Count -ne 0) {
            throw "exhausted attempts must return an empty target list: $($exhausted -join ',')"
        }

        if (-not (Test-HdcTransportFailure -OutputText '[Fail](E001005) ExecuteCommand need connect-key')) {
            throw 'transport failure classifier missed the E001005 pattern'
        }
        if (Test-HdcTransportFailure -OutputText '127.0.0.1:5555	Connected	emulator') {
            throw 'transport failure classifier flagged healthy output'
        }

        foreach ($failingFake in @($fakeHdcAlwaysFailText, $fakeHdcFailTextOkExit)) {
            Set-Content -LiteralPath $statePath -Value '0' -Encoding Ascii
            $misread = @(Get-ConnectedHdcTargets -Hdc $failingFake -Attempts 3 -InitialDelayMs 10)
            if ($misread.Count -ne 0) {
                throw "'[Fail] ... connected' output was parsed into a target: $($misread -join ',')"
            }
            $used = [int](Get-Content -LiteralPath $statePath)
            if ($used -ne 3) {
                throw "expected all 3 attempts to run against the failing fake, saw $used"
            }
        }

        Write-Host 'HDC target helper self-test: PASS (bounded retry + transport classifier + failure-text guard).'
    } finally {
        Remove-Item Env:GF_HDC_FAKE_STATE -ErrorAction SilentlyContinue
    }
} finally {
    Remove-Item -LiteralPath $fakeHdc -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $fakeHdcAlwaysFailText -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $fakeHdcFailTextOkExit -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $statePath -Force -ErrorAction SilentlyContinue
}
