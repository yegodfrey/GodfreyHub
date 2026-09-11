[CmdletBinding()]
param(
    [switch]$Worker,
    [string]$MutexName,
    [string]$MarkerPath,
    [string]$StatusPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')

if ($Worker) {
    # 结果以状态文件为权威: PS 5.1 的 Start-Process -PassThru 在重定向场景下
    # ExitCode 有 null 竞态, 退出码不是可靠的回传通道。
    try {
        Invoke-GfWithBuildMutex -Name $MutexName -Timeout ([TimeSpan]::FromSeconds(15)) -Body {
            if (Test-Path -LiteralPath $MarkerPath) {
                throw 'build mutex admitted two writers'
            }
            Set-Content -LiteralPath $MarkerPath -Value $PID -Encoding ASCII
            Start-Sleep -Milliseconds 600
            Remove-Item -LiteralPath $MarkerPath -Force
        }
        Set-Content -LiteralPath $StatusPath -Value 'ok' -Encoding ASCII
    } catch {
        Set-Content -LiteralPath $StatusPath -Value ('fail: ' + $_.Exception.Message) -Encoding ASCII
        exit 1
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
            '-Worker', '-MutexName', $name, '-MarkerPath', $marker,
            '-StatusPath', (Join-Path $tempRoot "worker-$index.status")
        ) -RedirectStandardOutput (Join-Path $tempRoot "worker-$index.out") `
          -RedirectStandardError (Join-Path $tempRoot "worker-$index.err")
    }
    foreach ($process in $workers) {
        $process.WaitForExit()
    }
    foreach ($index in 1..2) {
        $statusFile = Join-Path $tempRoot "worker-$index.status"
        $status = if (Test-Path -LiteralPath $statusFile) {
            (Get-Content -LiteralPath $statusFile -Raw).Trim()
        } else {
            'missing'
        }
        if ($status -ne 'ok') {
            throw "Build mutex SelfTest worker $index did not pass: $status"
        }
    }
    if (Test-Path -LiteralPath $marker) {
        throw 'Build mutex SelfTest left an ownership marker behind.'
    }
    Write-Output 'Build mutex SelfTest PASS.'
} finally {
    foreach ($process in $workers) {
        if (-not $process.HasExited) {
            # Process.Kill(bool)(整树终止)在 PS5.1/.NET Framework 不存在;
            # taskkill /T /F 是两代 PowerShell 都可靠的整树终止手段。
            & taskkill.exe /PID $process.Id /T /F 2>$null | Out-Null
        }
        $process.Dispose()
    }
    if (Test-Path -LiteralPath $tempRoot -PathType Container) {
        Remove-Item -LiteralPath $tempRoot -Recurse -Force
    }
}
