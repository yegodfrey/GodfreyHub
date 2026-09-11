# Behavioral self-test for the shared HDC target helper: bounded retry must
# converge past transport failures, return an empty list when attempts are
# exhausted, and the failure classifier must not flag healthy output.
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
        Write-Host 'HDC target helper self-test: PASS (bounded retry + transport classifier).'
    } finally {
        Remove-Item Env:GF_HDC_FAKE_STATE -ErrorAction SilentlyContinue
    }
} finally {
    Remove-Item -LiteralPath $fakeHdc -Force -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath $statePath -Force -ErrorAction SilentlyContinue
}
