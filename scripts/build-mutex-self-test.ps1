[CmdletBinding()]
param(
    [switch]$Worker,
    [string]$MutexName,
    [string]$MarkerPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')

if ($Worker) {
    Invoke-GfWithBuildMutex -Name $MutexName -Timeout ([TimeSpan]::FromSeconds(15)) -Body {
        if (Test-Path -LiteralPath $MarkerPath) {
            throw 'build mutex admitted two writers'
        }
        Set-Content -LiteralPath $MarkerPath -Value $PID -Encoding ASCII
        Start-Sleep -Milliseconds 600
        Remove-Item -LiteralPath $MarkerPath -Force
    }
    exit 0
}

$tempBase = [IO.Path]::GetFullPath([IO.Path]::GetTempPath())
$tempRoot = [IO.Path]::GetFullPath((Join-Path $tempBase ('gf-build-mutex-' + [Guid]::NewGuid().ToString('N'))))
if (-not $tempRoot.StartsWith($tempBase, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'Build mutex SelfTest temporary root escaped system temp.'
}
[IO.Directory]::CreateDirectory($tempRoot) | Out-Null
$marker = Join-Path $tempRoot 'writer.marker'
$name = 'Local\GodfreyHubBuildSelfTest' + [Guid]::NewGuid().ToString('N')
$powerShell = (Get-Process -Id $PID).Path
$workers = @()
try {
    foreach ($index in 1..2) {
        $workers += Start-Process -FilePath $powerShell -PassThru -WindowStyle Hidden -ArgumentList @(
            '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', $PSCommandPath,
            '-Worker', '-MutexName', $name, '-MarkerPath', $marker
        ) -RedirectStandardOutput (Join-Path $tempRoot "worker-$index.out") `
          -RedirectStandardError (Join-Path $tempRoot "worker-$index.err")
    }
    foreach ($process in $workers) {
        $process.WaitForExit()
        if ($process.ExitCode -ne 0) {
            throw "Build mutex SelfTest worker failed with exit=$($process.ExitCode)."
        }
    }
    if (Test-Path -LiteralPath $marker) {
        throw 'Build mutex SelfTest left an ownership marker behind.'
    }
    Write-Output 'Build mutex SelfTest PASS.'
} finally {
    foreach ($process in $workers) {
        if (-not $process.HasExited) { $process.Kill($true) }
        $process.Dispose()
    }
    if (Test-Path -LiteralPath $tempRoot -PathType Container) {
        Remove-Item -LiteralPath $tempRoot -Recurse -Force
    }
}
