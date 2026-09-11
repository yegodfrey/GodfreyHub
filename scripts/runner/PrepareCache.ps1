# GfDeviceRunner 分块 1/5: 内环 prepare 复用(campaign 登记、源 hash、缓存读写、预备证据提取)。
# 由 GfDeviceRunner.ps1 按序 dot-source; 顺序: 2/5 设备清单 -> 3/5 预备与视觉 -> 4/5, 5/5 套件执行器。
function Get-GfInstrumentCampaignKey([string]$AppName, [string]$Serial,
    [string]$TestTarget) {
    return ('{0}|{1}|{2}' -f $AppName.Trim().ToUpperInvariant(),
        $Serial.Trim().ToUpperInvariant(), $TestTarget.Trim().ToUpperInvariant())
}

function Get-GfInstrumentCampaign([string]$AppName, [string]$Serial,
    [string]$TestTarget) {
    $key = Get-GfInstrumentCampaignKey $AppName $Serial $TestTarget
    if (-not $script:GfInstrumentCampaigns.ContainsKey($key)) {
        $script:GfInstrumentCampaigns[$key] = [pscustomobject]@{
            Key = $key
            Prepared = $false
            PreparationFailed = $false
            PreparationFailureMessage = ''
            PreparationFailureOutput = @()
            Preparation = $null
            PassedClasses = [Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
        }
    }
    return $script:GfInstrumentCampaigns[$key]
}

function Reset-GfInstrumentCampaigns {
    $script:GfInstrumentCampaigns = @{}
}

# ---- Opt-in inner-loop prepare reuse --------------------------------------
# hub_family_test -ReuseBuild turns on a content-hash guarded fast path for
# change/nightly iteration. When the exact bits were already built from zero and
# installed on this target and no build input changed, the clean build, the
# uninstall/reinstall and the already-proven setup classes are all skipped. The
# flag is gated off for release/candidate runs in test.ps1, so authoritative
# evidence (cacheHit=false on the campaign owner plus artifact sha256) is never
# weakened. The cache is only read and written while the flag is on.

function Test-GfReusePrepareEnabled {
    # StrictMode-safe: an unset global (a standalone dot-source or self-test that
    # never ran test.ps1) must read as disabled instead of throwing.
    return [bool](Get-Variable -Name 'GfReusePrepare' -Scope Global -ValueOnly -ErrorAction SilentlyContinue)
}

function Get-GfPrepareCachePath([string]$PlatformRoot, [string]$AppName,
    [string]$Serial, [string]$TestTarget) {
    $safeApp = $AppName -replace '[^A-Za-z0-9_.-]', '_'
    $safeSerial = $Serial -replace '[^A-Za-z0-9_.-]', '_'
    $dir = Join-Path $PlatformRoot 'Workspace/test-runs/.prepare-cache'
    return (Join-Path $dir ("$safeApp.$safeSerial.$TestTarget.json"))
}

function Get-GfPrepareSourceHash([string]$AppRoot, [string]$PlatformRoot) {
    # Metadata manifest (path|length|mtimeUtcTicks) over every build input. A real
    # edit always changes size or mtime, so an unchanged hash is strong evidence
    # that hvigor would reproduce byte-identical HAPs. Build outputs and caches
    # (build/, oh_modules/, .hvigor/, Workspace/, ...) are excluded so deploying or
    # recording artifacts never perturbs the hash and causes a needless rebuild.
    $roots = [Collections.Generic.List[string]]::new()
    if (-not [string]::IsNullOrWhiteSpace($AppRoot) -and (Test-Path -LiteralPath $AppRoot)) {
        $roots.Add([IO.Path]::GetFullPath($AppRoot))
    }
    foreach ($relative in @('gfkit', 'platform/core', 'adapters')) {
        $candidate = Join-Path $PlatformRoot $relative
        if (Test-Path -LiteralPath $candidate -PathType Container) {
            $roots.Add([IO.Path]::GetFullPath($candidate))
        }
    }
    foreach ($relative in @('build-profile.json5', 'oh-package.json5')) {
        $candidate = Join-Path $PlatformRoot $relative
        if (Test-Path -LiteralPath $candidate -PathType Leaf) {
            $roots.Add([IO.Path]::GetFullPath($candidate))
        }
    }
    $excludePattern = '\\(?:build|oh_modules|\.hvigor|\.test|\.cxx|node_modules|\.idea|Workspace|\.git)(?:\\|$)'
    $lines = [Collections.Generic.List[string]]::new()
    foreach ($root in @($roots | Sort-Object -Unique)) {
        if (Test-Path -LiteralPath $root -PathType Leaf) {
            $leaf = Get-Item -LiteralPath $root
            $lines.Add(('{0}|{1}|{2}' -f $leaf.FullName, $leaf.Length, $leaf.LastWriteTimeUtc.Ticks))
            continue
        }
        foreach ($file in @(Get-ChildItem -LiteralPath $root -Recurse -File -Force -ErrorAction SilentlyContinue)) {
            if ($file.FullName -match $excludePattern) { continue }
            $lines.Add(('{0}|{1}|{2}' -f $file.FullName, $file.Length, $file.LastWriteTimeUtc.Ticks))
        }
    }
    $manifest = ($lines | Sort-Object) -join "`n"
    $sha = [Security.Cryptography.SHA256]::Create()
    try {
        $hashBytes = $sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($manifest))
        return ([BitConverter]::ToString($hashBytes) -replace '-', '').ToLowerInvariant()
    } finally {
        $sha.Dispose()
    }
}

function Test-GfBundleInstalled([string]$Hdc, [string]$Serial, [string]$BundleName) {
    if ([string]::IsNullOrWhiteSpace($BundleName)) { return $false }
    $output = @(& $Hdc -t $Serial shell bm dump -n $BundleName 2>&1 | ForEach-Object { [string]$_ })
    if ($LASTEXITCODE -ne 0) { return $false }
    $text = ($output -join "`n")
    if ($text -match '(?i)\[Fail\]|\berror\b|does not exist|not installed|missing installed bundle') {
        return $false
    }
    return (-not [string]::IsNullOrWhiteSpace($text.Trim()))
}

function Get-GfPrepareArtifactSignature([AllowNull()][object]$Evidence) {
    return (@(Get-GfCollectionProperty -InputObject $Evidence -Name 'artifacts' |
        ForEach-Object { ([string]$_.sha256).ToLowerInvariant() }) | Sort-Object) -join ','
}

function Get-GfPrepareCacheReuse([string]$PlatformRoot, [string]$AppName, [string]$Serial,
    [string]$TestTarget, [string]$AppRoot, [string]$BundleName) {
    $cachePath = Get-GfPrepareCachePath -PlatformRoot $PlatformRoot -AppName $AppName `
        -Serial $Serial -TestTarget $TestTarget
    if (-not (Test-Path -LiteralPath $cachePath -PathType Leaf)) { return $null }
    try {
        $manifest = Get-Content -Raw -Encoding UTF8 -LiteralPath $cachePath | ConvertFrom-Json
        if ($null -eq $manifest) { return $null }
        if ([string]$manifest.testTarget -ne $TestTarget) { return $null }
        if ([string]$manifest.bundleName -ne $BundleName) { return $null }
        $recordedHash = [string]$manifest.sourceHash
        if ([string]::IsNullOrWhiteSpace($recordedHash)) { return $null }
        if ((Get-GfPrepareSourceHash -AppRoot $AppRoot -PlatformRoot $PlatformRoot) -ne $recordedHash) {
            return $null
        }
        # Verify every recorded artifact still exists with an identical sha256, so the
        # bits we would deploy are byte-for-byte the ones proven from zero earlier.
        $artifacts = @(Get-GfCollectionProperty -InputObject $manifest -Name 'artifacts')
        if ($artifacts.Count -lt 2) { return $null }
        $verified = [Collections.Generic.List[object]]::new()
        foreach ($artifact in $artifacts) {
            $artifactPath = [string]$artifact.path
            $recordedSha = ([string]$artifact.sha256).ToLowerInvariant()
            if ([string]::IsNullOrWhiteSpace($artifactPath) -or
                -not (Test-Path -LiteralPath $artifactPath -PathType Leaf)) { return $null }
            $actualSha = (Get-FileHash -Algorithm SHA256 -LiteralPath $artifactPath).Hash.ToLowerInvariant()
            if ($actualSha -ne $recordedSha) { return $null }
            $verified.Add([pscustomobject]@{ path = $artifactPath; sha256 = $actualSha })
        }
        # The target must still carry the installed App; reuse never re-installs.
        $hdc = Get-HdcPath
        if (-not $hdc) { return $null }
        if (-not (Test-GfBundleInstalled -Hdc $hdc -Serial $Serial -BundleName $BundleName)) { return $null }

        $originalDuration = 0
        if ($manifest.PSObject.Properties.Name -contains 'prepareDurationMs') {
            $originalDuration = [long]$manifest.prepareDurationMs
        }
        $evidence = [pscustomobject][ordered]@{
            cacheHit = $true
            durationMs = 0
            artifacts = @($verified)
            reused = [pscustomobject][ordered]@{
                source = 'prepare-cache'
                sourceHash = $recordedHash
                builtAtUtc = [string]$manifest.builtAtUtc
                originalDurationMs = $originalDuration
                cachePath = $cachePath
            }
        }
        $passedClasses = @(Get-GfCollectionProperty -InputObject $manifest -Name 'passedClasses' |
            ForEach-Object { [string]$_ } | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
        $passedText = if ($passedClasses.Count -gt 0) { $passedClasses -join ',' } else { '<none>' }
        return [pscustomobject]@{
            Evidence = $evidence
            PassedClasses = $passedClasses
            LogLines = @(
                '===== reused prepare-cache (sourceHash match; artifact sha256 verified; bundle installed) =====',
                "reused artifacts originally built at $([string]$manifest.builtAtUtc); skipping clean build, uninstall and reinstall",
                "reused passed setup classes: $passedText"
            )
        }
    } catch {
        # Any malformed or unverifiable cache is a miss; fall back to the clean build.
        return $null
    }
}

function Save-GfPrepareCache([string]$PlatformRoot, [string]$AppName, [string]$Serial,
    [string]$TestTarget, [string]$AppRoot, [string]$BundleName,
    [AllowNull()][object]$Evidence, [long]$DurationMs, [string[]]$PassedClasses = @()) {
    if (-not (Test-GfReusePrepareEnabled)) { return }
    if ([string]::IsNullOrWhiteSpace($PlatformRoot) -or
        [string]::IsNullOrWhiteSpace($BundleName) -or
        [string]::IsNullOrWhiteSpace($AppRoot) -or $null -eq $Evidence) { return }
    $artifacts = @(Get-GfCollectionProperty -InputObject $Evidence -Name 'artifacts')
    if ($artifacts.Count -lt 2) { return }
    try {
        $cachePath = Get-GfPrepareCachePath -PlatformRoot $PlatformRoot -AppName $AppName `
            -Serial $Serial -TestTarget $TestTarget
        $manifest = [ordered]@{
            app = $AppName
            serial = $Serial
            testTarget = $TestTarget
            bundleName = $BundleName
            sourceHash = (Get-GfPrepareSourceHash -AppRoot $AppRoot -PlatformRoot $PlatformRoot)
            builtAtUtc = (Get-Date).ToUniversalTime().ToString('o')
            prepareDurationMs = $DurationMs
            artifacts = @($artifacts | ForEach-Object {
                [ordered]@{ path = [string]$_.path; sha256 = ([string]$_.sha256).ToLowerInvariant() }
            })
            passedClasses = @($PassedClasses | ForEach-Object { [string]$_ } |
                Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique)
        }
        [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($cachePath)) | Out-Null
        [IO.File]::WriteAllText($cachePath, ($manifest | ConvertTo-Json -Depth 8),
            [Text.UTF8Encoding]::new($false))
    } catch {
        Write-Warning "GfDeviceRunner: failed to persist prepare cache for $AppName on ${Serial}: $($_.Exception.Message)"
    }
}

function Update-GfPrepareCachePassedClasses([string]$PlatformRoot, [string]$AppName,
    [string]$Serial, [string]$TestTarget, [string]$AppRoot, [string]$BundleName,
    [AllowNull()][object]$Evidence, [string[]]$PassedClasses) {
    if (-not (Test-GfReusePrepareEnabled)) { return }
    if ([string]::IsNullOrWhiteSpace($PlatformRoot) -or
        [string]::IsNullOrWhiteSpace($BundleName) -or
        [string]::IsNullOrWhiteSpace($AppRoot) -or $null -eq $Evidence) { return }
    if (@($PassedClasses).Count -eq 0) { return }
    $cachePath = Get-GfPrepareCachePath -PlatformRoot $PlatformRoot -AppName $AppName `
        -Serial $Serial -TestTarget $TestTarget
    if (-not (Test-Path -LiteralPath $cachePath -PathType Leaf)) { return }
    try {
        $manifest = Get-Content -Raw -Encoding UTF8 -LiteralPath $cachePath | ConvertFrom-Json
        if ($null -eq $manifest) { return }
        # Passed-class proofs are only valid against the exact artifacts this campaign
        # deployed. Refuse to attach them to a different recorded build.
        $recordedSignature = @(Get-GfCollectionProperty -InputObject $manifest -Name 'artifacts' |
            ForEach-Object { ([string]$_.sha256).ToLowerInvariant() } | Sort-Object) -join ','
        if ($recordedSignature -ne (Get-GfPrepareArtifactSignature $Evidence)) { return }
        $merged = @(Get-GfCollectionProperty -InputObject $manifest -Name 'passedClasses' |
            ForEach-Object { [string]$_ })
        $merged = @($merged + @($PassedClasses | ForEach-Object { [string]$_ }) |
            Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object -Unique)
        $manifest | Add-Member -NotePropertyName passedClasses -NotePropertyValue $merged -Force
        [IO.File]::WriteAllText($cachePath, ($manifest | ConvertTo-Json -Depth 8),
            [Text.UTF8Encoding]::new($false))
    } catch {
        Write-Warning "GfDeviceRunner: failed to update prepare-cache passed classes for $AppName on ${Serial}: $($_.Exception.Message)"
    }
}

function Get-GfPreparationEvidence([object[]]$Output, [bool]$CacheHit,
    [long]$DurationMs) {
    $evidence = [ordered]@{
        cacheHit = $CacheHit
        durationMs = $DurationMs
        artifacts = @()
    }
    if ($CacheHit) { return [pscustomobject]$evidence }

    $jsonLine = @($Output | ForEach-Object { [string]$_ } |
        Where-Object { $_.TrimStart().StartsWith('{') }) | Select-Object -Last 1
    if ([string]::IsNullOrWhiteSpace([string]$jsonLine)) {
        throw 'GfDeviceRunner: family preparation returned no artifact manifest JSON.'
    }
    try {
        $provider = [string]$jsonLine | ConvertFrom-Json
        $artifactPaths = [Collections.Generic.List[string]]::new()
        if ($provider.PSObject.Properties.Name -contains 'hap' -and
            -not [string]::IsNullOrWhiteSpace([string]$provider.hap)) {
            $artifactPaths.Add([string]$provider.hap)
        }
        foreach ($testHap in @(Get-GfCollectionProperty -InputObject $provider -Name 'testHaps')) {
            if ($testHap.PSObject.Properties.Name -contains 'hap' -and
                -not [string]::IsNullOrWhiteSpace([string]$testHap.hap)) {
                $artifactPaths.Add([string]$testHap.hap)
            }
        }
        if ($artifactPaths.Count -lt 2) {
            throw "expected production and ohosTest HAPs, found $($artifactPaths.Count) artifact(s)"
        }
        $evidence.artifacts = @($artifactPaths | ForEach-Object {
            $artifactPath = [IO.Path]::GetFullPath($_)
            if (-not (Test-Path -LiteralPath $artifactPath -PathType Leaf)) {
                throw "prepared artifact disappeared before evidence hashing: $artifactPath"
            }
            [pscustomobject]@{
                path = $artifactPath
                sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $artifactPath).Hash.ToLowerInvariant()
            }
        })
    } catch {
        throw "GfDeviceRunner: invalid family preparation artifact manifest: $($_.Exception.Message)"
    }
    return [pscustomobject]$evidence
}
