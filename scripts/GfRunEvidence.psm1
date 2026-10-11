Set-StrictMode -Version Latest

function Get-GfCanonicalBytes {
    # canonical 形式 = 去 UTF-8 BOM → CRLF 折 LF → 落单 CR 折 LF → 其余字节原样。
    # 只在字节层归一，不解码文本（0x0D 不可能出现在 UTF-8 续字节位置）。
    # 语义与本仓 scripts/content-identity.mjs canonicalBytes、调用方仓
    # family/text-eol.mjs canonicalBytes / GfText.psm1 Get-GfCanonicalBytes 逐字节等价
    # （交叉验证读数在席目录）：树身份由此从 EOL 敏感转 EOL 无关。
    [OutputType([byte[]])]
    param([AllowNull()][byte[]]$Bytes)

    if ($null -eq $Bytes -or $Bytes.Length -eq 0) { return , [byte[]]@() }
    $start = 0
    if ($Bytes.Length -ge 3 -and $Bytes[0] -eq 0xEF -and $Bytes[1] -eq 0xBB -and $Bytes[2] -eq 0xBF) { $start = 3 }
    $out = [Collections.Generic.List[byte]]::new($Bytes.Length - $start)
    for ($i = $start; $i -lt $Bytes.Length; $i++) {
        $b = $Bytes[$i]
        if ($b -eq 0x0D) {
            if ($i + 1 -lt $Bytes.Length -and $Bytes[$i + 1] -eq 0x0A) { $i++ }
            $out.Add([byte]0x0A)
        } else { $out.Add($b) }
    }
    # 逗号包裹：PowerShell 会对返回的数组做管道展开，不加逗号调用方拿到的是散装元素。
    return , $out.ToArray()
}

function Get-GfSharedFileHash([string]$file) {
    # 并行设备 lane 会对同一棵源码树同时哈希，另一条 lane 构建刚写出的文件
    # （如 cangjie 类型 .d.ts）会瞬时持有共享冲突；Stop 语境下一次冲突就让
    # worker 无 run summary 退出。短重试吸收瞬时占用，持续冲突仍然上抛。
    # 摘要走 canonical 字节（剥 BOM+折行尾）而非工作树原始字节：同一逻辑内容
    # 在不同 autocrlf 检出下必须判同一身份——判定不得依赖行尾。
    for ($attempt = 1; ; $attempt++) {
        try {
            $canonical = Get-GfCanonicalBytes ([IO.File]::ReadAllBytes($file))
            return [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($canonical))
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
