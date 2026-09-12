Set-StrictMode -Version Latest

function Get-GfSharedFileHash([string]$file) {
    # 并行设备 lane 会对同一棵源码树同时哈希，另一条 lane 构建刚写出的文件
    # （如 cangjie 类型 .d.ts）会瞬时持有共享冲突；Stop 语境下一次冲突就让
    # worker 无 run summary 退出。短重试吸收瞬时占用，持续冲突仍然上抛。
    for ($attempt = 1; ; $attempt++) {
        try {
            return (Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash
        } catch [System.IO.IOException] {
            if ($attempt -ge 5) { throw }
            Start-Sleep -Milliseconds (150 * $attempt)
        }
    }
}

function Get-GfSourceIdentity([string]$RepoRoot) {
    $paths = @(& git -C $RepoRoot -c core.quotepath=false ls-files --cached --others --exclude-standard)
    if ($LASTEXITCODE -ne 0) { throw 'Cannot enumerate source inputs.' }
    $lines = [Collections.Generic.List[string]]::new()
    foreach ($relative in @($paths | Sort-Object -Unique)) {
        if ($relative -match '(^|/)(Workspace|build|oh_modules|node_modules|\.test|\.hvigor|dist)/') { continue }
        $file = Join-Path $RepoRoot $relative
        $hash = if (Test-Path -LiteralPath $file -PathType Leaf) {
            Get-GfSharedFileHash $file
        } else { 'deleted' }
        $lines.Add("$relative|$hash")
    }
    return [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData(
        [Text.Encoding]::UTF8.GetBytes(($lines -join "`n"))))
}

function Assert-GfRunIdentity {
    param([object]$Run, [string]$Profile, [int]$Epoch, [string]$CandidateId,
        [string]$SourceHash, [datetime]$Now = [datetime]::UtcNow)
    foreach ($key in @('runId', 'profile', 'platformEpoch', 'candidateId', 'sourceHash', 'timestamp')) {
        if ($Run.PSObject.Properties.Name -notcontains $key) { throw "Run identity is missing $key." }
    }
    if ([string]$Run.runId -notmatch '^[A-Za-z0-9][A-Za-z0-9._-]+$') { throw 'Invalid runId.' }
    if ([string]$Run.profile -ne $Profile -or [int]$Run.platformEpoch -ne $Epoch -or
        [string]$Run.candidateId -cne $CandidateId -or [string]$Run.sourceHash -cne $SourceHash) {
        throw 'Run profile, epoch, candidate or source hash does not match the requested evidence.'
    }
    $time = [datetime]::MinValue
    if (-not [datetime]::TryParse([string]$Run.timestamp, [ref]$time) -or
        $time.ToUniversalTime() -gt $Now.AddMinutes(1) -or $time.ToUniversalTime() -lt $Now.AddHours(-24)) {
        throw 'Run timestamp is stale or in the future.'
    }
}

Export-ModuleMember -Function Get-GfSourceIdentity, Assert-GfRunIdentity
