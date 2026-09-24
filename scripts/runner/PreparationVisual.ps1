# GfDeviceRunner 分块 3/5: 构建/安装预备事务与视觉/失败证据采集(campaign 准备、marker sweep、检查点、矩阵维度)。
# ---- run 作用域 prepare 缓存(构建一次、分发多机) ----------------------------
# GF_GODFREYHUB_PREPARE_CACHE_DIR 非空时启用: 键=<App>-<TestTarget>(无设备维度),
# 条目 = <cacheDir>/<key>/{haps/, meta.json, DONE}。同一次运行内, 首个进入全局构建
# 互斥锁的车道照旧做权威 from-zero 干净构建, 成功后以「临时目录→原子重命名」发布;
# 其余车道命中后经 provider --from-cache 只做安装事务。跨设备字节一致性由双重
# sha256 结构性保证: 发布方逐文件摘要写入 meta, 消费方(CLI)安装前逐文件复核, 任一
# 不符即退回一次权威构建。变量未设时本节零介入, 行为与今天完全一致。
function Get-GfRunPrepareCacheDir {
    # 未设置/空串按"缓存停用"处理; StrictMode 下读不存在的 env 变量返回 $null 不抛。
    $dir = [string]$env:GF_GODFREYHUB_PREPARE_CACHE_DIR
    if ([string]::IsNullOrWhiteSpace($dir)) { return '' }
    return $dir.Trim()
}

function Get-GfRunPrepareCacheKey([string]$AppName, [string]$TestTarget) {
    $safeApp = $AppName -replace '[^A-Za-z0-9_.-]', '_'
    return "$safeApp-$TestTarget"
}

function Get-GfRunPrepareCacheEntry([string]$CacheDir, [string]$AppName, [string]$TestTarget) {
    # 命中 = DONE 标记在场 + meta 可解析且归属匹配 + 产物文件在场。这里只做廉价门槛;
    # 字节级 sha256 复核由 CLI --from-cache 在安装前执行, 截断/篡改条目在那一步被拒。
    $key = Get-GfRunPrepareCacheKey -AppName $AppName -TestTarget $TestTarget
    $entryDir = Join-Path $CacheDir $key
    try {
        if (-not (Test-Path -LiteralPath (Join-Path $entryDir 'DONE') -PathType Leaf)) { return $null }
        $metaPath = Join-Path $entryDir 'meta.json'
        if (-not (Test-Path -LiteralPath $metaPath -PathType Leaf)) { return $null }
        $meta = Get-Content -Raw -Encoding UTF8 -LiteralPath $metaPath | ConvertFrom-Json
        if ($null -eq $meta -or [int]$meta.version -ne 1) { return $null }
        if ([string]$meta.app -ne $AppName -or [string]$meta.testTarget -ne $TestTarget) { return $null }
        foreach ($artifact in @($meta.artifacts)) {
            $relative = [string]$artifact.file
            if ([string]::IsNullOrWhiteSpace($relative)) { return $null }
            if (-not (Test-Path -LiteralPath (Join-Path $entryDir $relative) -PathType Leaf)) { return $null }
        }
        return [pscustomobject]@{ Key = $key; EntryDir = $entryDir; MetaPath = $metaPath; Meta = $meta }
    } catch {
        # 任何畸形条目一律按未命中处理, 回落权威构建。
        return $null
    }
}

function Publish-GfRunPrepareCache([string]$CacheDir, [string]$AppName, [string]$TestTarget,
    [string[]]$ProviderOutput) {
    # 从 provider 成功输出的 JSON 清单(hap/testHaps/log)取产物, 连同 meta(逐文件 sha256
    # + inputsHash + 构建转录摘要)与 DONE 标记写入临时目录后整体原子重命名。发布失败只
    # 警告不抛: 缓存是加速面, 绝不能把一次成功的权威构建变成车道失败。
    $key = Get-GfRunPrepareCacheKey -AppName $AppName -TestTarget $TestTarget
    $entryDir = Join-Path $CacheDir $key
    if (Test-Path -LiteralPath $entryDir) {
        return "prepare-cache publish skipped: key already published ($key)"
    }
    $jsonLine = @($ProviderOutput | Where-Object { $_.TrimStart().StartsWith('{') }) | Select-Object -Last 1
    if ([string]::IsNullOrWhiteSpace([string]$jsonLine)) {
        return 'prepare-cache publish skipped: provider returned no JSON manifest'
    }
    $tempDir = Join-Path $CacheDir ("$key.tmp-" + [guid]::NewGuid().ToString('N'))
    try {
        $provider = [string]$jsonLine | ConvertFrom-Json
        $artifactPaths = [Collections.Generic.List[string]]::new()
        if (-not [string]::IsNullOrWhiteSpace([string]$provider.hap)) {
            $artifactPaths.Add([IO.Path]::GetFullPath([string]$provider.hap))
        }
        foreach ($testHap in @(Get-GfCollectionProperty -InputObject $provider -Name 'testHaps')) {
            $p = [string]$testHap.hap
            if (-not [string]::IsNullOrWhiteSpace($p)) { $artifactPaths.Add([IO.Path]::GetFullPath($p)) }
        }
        if ($artifactPaths.Count -lt 2) {
            return "prepare-cache publish skipped: expected production and ohosTest HAPs, found $($artifactPaths.Count)"
        }
        # 构建转录摘要: 把分发字节与权威构建转录结构性关联(sha256/行数/尾行)。
        $transcriptText = [string]$provider.log
        $transcriptSha = ''
        $transcriptLines = 0
        $transcriptTail = @()
        if (-not [string]::IsNullOrWhiteSpace($transcriptText)) {
            $transcriptSplit = @($transcriptText -split "`n")
            $transcriptLines = $transcriptSplit.Count
            $transcriptTail = @($transcriptSplit | Select-Object -Last 10)
            $sha = [Security.Cryptography.SHA256]::Create()
            try {
                $transcriptSha = ([BitConverter]::ToString(
                    $sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($transcriptText))) -replace '-', '').ToLowerInvariant()
            } finally { $sha.Dispose() }
        }
        [IO.Directory]::CreateDirectory($tempDir) | Out-Null
        [IO.Directory]::CreateDirectory((Join-Path $tempDir 'haps')) | Out-Null
        $artifacts = @()
        $relativeBySource = @{}
        foreach ($artifactPath in $artifactPaths) {
            if (-not (Test-Path -LiteralPath $artifactPath -PathType Leaf)) {
                throw "prepared artifact disappeared before cache publish: $artifactPath"
            }
            $identity = $artifactPath.ToLowerInvariant()
            if ($relativeBySource.ContainsKey($identity)) { continue }
            $relative = 'haps/' + [IO.Path]::GetFileName($artifactPath)
            if ($relativeBySource.ContainsValue($relative)) {
                # 同名不同源(理论形状): 保险丝——放弃发布, 权威构建路径不受影响。
                throw "artifact basename collision in cache staging: $relative"
            }
            [IO.File]::Copy($artifactPath, (Join-Path $tempDir ('haps\' + [IO.Path]::GetFileName($artifactPath))), $true)
            $artifactSha = (Get-FileHash -Algorithm SHA256 -LiteralPath $artifactPath).Hash.ToLowerInvariant()
            $artifacts += [pscustomobject]@{ file = $relative; sha256 = $artifactSha }
            $relativeBySource[$identity] = $relative
        }
        $hapRelative = $relativeBySource[[IO.Path]::GetFullPath([string]$provider.hap).ToLowerInvariant()]
        $testHapRecords = @(Get-GfCollectionProperty -InputObject $provider -Name 'testHaps' | ForEach-Object {
            [pscustomobject]@{
                framework = [string]$_.framework
                module = [string]$_.module
                hap = $relativeBySource[[IO.Path]::GetFullPath([string]$_.hap).ToLowerInvariant()]
            }
        })
        # inputsHash = 条目内容身份摘要(app/testTarget/产物 sha256 集合派生)。
        $identityText = 'v1|' + $AppName + '|' + $TestTarget + '|' +
            ((@($artifacts) | ForEach-Object { $_.sha256 } | Sort-Object) -join ',')
        $identitySha = [Security.Cryptography.SHA256]::Create()
        try {
            $inputsHash = ([BitConverter]::ToString(
                $identitySha.ComputeHash([Text.Encoding]::UTF8.GetBytes($identityText))) -replace '-', '').ToLowerInvariant()
        } finally { $identitySha.Dispose() }
        $meta = [ordered]@{
            version = 1
            app = $AppName
            testTarget = $TestTarget
            cacheKey = $key
            builtAtUtc = (Get-Date).ToUniversalTime().ToString('o')
            source = 'authoritative-clean-build'
            inputsHash = $inputsHash
            hap = $hapRelative
            testHaps = $testHapRecords
            artifacts = $artifacts
            buildTranscript = [ordered]@{
                sha256 = $transcriptSha
                lineCount = $transcriptLines
                tail = $transcriptTail
            }
        }
        [IO.File]::WriteAllText((Join-Path $tempDir 'meta.json'), ($meta | ConvertTo-Json -Depth 8),
            [Text.UTF8Encoding]::new($false))
        # DONE 最后写: 命中判定只认「DONE + meta + 字节」齐整的条目; 同卷目录重命名保证
        # 其他车道永远看不到半写状态。
        [IO.File]::WriteAllText((Join-Path $tempDir 'DONE'), $key, [Text.UTF8Encoding]::new($false))
        [IO.Directory]::Move($tempDir, $entryDir)
        return "prepare-cache published: key=$key artifacts=$($artifacts.Count) inputsHash=$inputsHash"
    } catch {
        Write-Warning "GfDeviceRunner: prepare-cache publish failed for $AppName/${TestTarget}: $($_.Exception.Message)"
        return "prepare-cache publish failed: $($_.Exception.Message)"
    } finally {
        if (Test-Path -LiteralPath $tempDir) {
            try { [IO.Directory]::Delete($tempDir, $true) } catch { Write-Warning "prepare-cache temp staging residue: $tempDir" }
        }
    }
}

function Invoke-GfInstrumentPreparation([string]$AppName, [string]$Serial,
    [ValidateSet('ArkTS', 'Cangjie')][string]$TestTarget) {
    $node = [string]$env:GF_GODFREYHUB_NODE
    $provider = [string]$env:GF_GODFREYHUB_DEVICE_PREPARE
    if ([string]::IsNullOrWhiteSpace($node) -or
        -not (Test-Path -LiteralPath $node -PathType Leaf) -or
        [string]::IsNullOrWhiteSpace($provider) -or
        -not (Test-Path -LiteralPath $provider -PathType Leaf)) {
        throw 'GfDeviceRunner: Instrument execution requires a clean build/deploy provider; the caller must inject one.'
    }
    # run 缓存判定在互斥锁外做快照, 发布/命中事务全部在既有构建互斥锁内完成: 全局
    # 构建互斥锁(GODFREYHUB_BUILD_MUTEX_NAME)串行化了"检查-构建-发布/消费"的整个
    # 临界区, 这正是"每 (App, TestTarget) 每次运行只构建一次"的单飞来源。
    $cacheDir = Get-GfRunPrepareCacheDir
    $cacheEntry = $null
    if ($cacheDir -ne '') {
        $cacheEntry = Get-GfRunPrepareCacheEntry -CacheDir $cacheDir -AppName $AppName -TestTarget $TestTarget
    }
    # Device lanes may execute concurrently, but build preparation runs inside one
    # cross-process mutex so a single writer owns the shared build outputs. The
    # caller names the serial domain (GODFREYHUB_BUILD_MUTEX_NAME); this runner only
    # guarantees one writer at a time within it.
    $preparation = Invoke-GfWithBuildMutex -Body {
        $previousLeaseSerial = [Environment]::GetEnvironmentVariable('GF_DEVICE_LEASE_HELD_SERIAL', 'Process')
        try {
            $env:GF_DEVICE_LEASE_HELD_SERIAL = $Serial
            $source = 'authoritative-clean-build'
            $publishNote = ''
            $lines = $null
            if ($null -ne $cacheEntry) {
                $lines = @(& $node $provider --app $AppName --target $Serial --test-target $TestTarget `
                    --from-cache $cacheEntry.MetaPath 2>&1)
                if ($LASTEXITCODE -ne 0) {
                    # 失败安全: 缓存命中后的安装事务失败 → 退回**一次**完整 provider 构建
                    # (绕过缓存, 不再发布、不再回到缓存路径), 失败即按既有路径上抛。绝不循环。
                    $source = 'cache-hit-fallback-clean-build'
                    $failedTranscript = @($lines | ForEach-Object { [string]$_ })
                    $lines = @(
                        '===== prepare-cache install failed; falling back to one authoritative clean build (cache bypassed, no retry) =====',
                        '----- failed cache-hit transcript -----'
                        $failedTranscript
                        '----- fallback authoritative clean-build transcript -----'
                    ) + @(& $node $provider --app $AppName --target $Serial --test-target $TestTarget 2>&1)
                } else {
                    $source = 'run-cache'
                }
            } else {
                $lines = @(& $node $provider --app $AppName --target $Serial --test-target $TestTarget 2>&1)
                if ($LASTEXITCODE -eq 0 -and $cacheDir -ne '') {
                    $publishNote = [string](Publish-GfRunPrepareCache -CacheDir $cacheDir `
                        -AppName $AppName -TestTarget $TestTarget -ProviderOutput @($lines | ForEach-Object { [string]$_ }))
                }
            }
            $key = Get-GfRunPrepareCacheKey -AppName $AppName -TestTarget $TestTarget
            $header = if ($source -eq 'run-cache') {
                "===== preparation source: run-cache (installed bytes distributed from this run's cache; key=$key) ====="
            } elseif ($source -eq 'cache-hit-fallback-clean-build') {
                "===== preparation source: cache-hit-fallback-clean-build (authoritative from-zero rebuild after a failed cache install; key=$key) ====="
            } elseif ($cacheDir -ne '') {
                "===== preparation source: authoritative-clean-build (cache miss; key=$key; $publishNote) ====="
            } else {
                "===== preparation source: authoritative-clean-build (run prepare cache not configured) ====="
            }
            [pscustomobject]@{
                Output = @(@([string]$header) + @($lines | ForEach-Object { [string]$_ }))
                ExitCode = $LASTEXITCODE
            }
        } finally {
            if ($null -eq $previousLeaseSerial) {
                [Environment]::SetEnvironmentVariable('GF_DEVICE_LEASE_HELD_SERIAL', $null, 'Process')
            } else {
                $env:GF_DEVICE_LEASE_HELD_SERIAL = $previousLeaseSerial
            }
        }
    }
    $output = @($preparation.Output)
    $exitCode = [int]$preparation.ExitCode
    if ($exitCode -ne 0) {
        # Keep the aggregate error concise while carrying the complete provider
        # transcript into the per-suite log. Throwing the JSON transcript as the
        # exception message aborts the family loop and can leave stale summaries.
        $failure = [InvalidOperationException]::new(
            "GfDeviceRunner: clean build/deploy failed for $AppName on $Serial (exit=$exitCode).")
        $failure.Data['GfPreparationOutput'] = @($output | ForEach-Object { [string]$_ })
        throw $failure
    }
    return @($output | ForEach-Object { [string]$_ })
}

function Ensure-GfInstrumentCampaignPreparation([string]$AppName, [string]$Serial,
    [ValidateSet('ArkTS', 'Cangjie')][string]$TestTarget,
    [string]$PlatformRoot = '', [string]$BundleName = '', [string]$AppRoot = '') {
    $campaign = Get-GfInstrumentCampaign -AppName $AppName -Serial $Serial -TestTarget $TestTarget
    if ([bool]$campaign.PreparationFailed) {
        $cachedFailure = [InvalidOperationException]::new(
            "GfDeviceRunner: campaign preparation previously failed for $AppName on $Serial; duplicate build suppressed. Original failure: $($campaign.PreparationFailureMessage)")
        $cachedFailure.Data['GfPreparationOutput'] = @($campaign.PreparationFailureOutput)
        throw $cachedFailure
    }
    # Opt-in inner-loop reuse: skip the clean build, the uninstall/reinstall and the
    # already-proven setup classes only when the exact bits are still installed and no
    # build input changed. Authoritative nightly (flag off) and release/candidate runs
    # never enter this branch and keep the from-zero cacheHit=false evidence.
    if (-not [bool]$campaign.Prepared -and (Test-GfReusePrepareEnabled) -and
        -not [string]::IsNullOrWhiteSpace($PlatformRoot) -and
        -not [string]::IsNullOrWhiteSpace($BundleName) -and
        -not [string]::IsNullOrWhiteSpace($AppRoot)) {
        $reuse = Get-GfPrepareCacheReuse -PlatformRoot $PlatformRoot -AppName $AppName `
            -Serial $Serial -TestTarget $TestTarget -AppRoot $AppRoot -BundleName $BundleName
        if ($null -ne $reuse) {
            $campaign.Prepared = $true
            $campaign.Preparation = $reuse.Evidence
            foreach ($passedClass in @($reuse.PassedClasses)) {
                [void]$campaign.PassedClasses.Add([string]$passedClass)
            }
            return [pscustomobject]@{
                Campaign = $campaign
                Evidence = $reuse.Evidence
                LogLines = @($reuse.LogLines)
            }
        }
    }
    if (-not [bool]$campaign.Prepared) {
        try {
            $prepareWatch = [Diagnostics.Stopwatch]::StartNew()
            $prepareOutput = @(Invoke-GfInstrumentPreparation -AppName $AppName `
                -Serial $Serial -TestTarget $TestTarget)
            $prepareWatch.Stop()
            $campaign.Preparation = Get-GfPreparationEvidence -Output $prepareOutput `
                -CacheHit $false -DurationMs $prepareWatch.ElapsedMilliseconds
            $campaign.Prepared = $true
            # Record the from-zero artifacts so a later opt-in run can reuse them.
            # No-op unless -ReuseBuild is active, keeping authoritative runs untouched.
            Save-GfPrepareCache -PlatformRoot $PlatformRoot -AppName $AppName -Serial $Serial `
                -TestTarget $TestTarget -AppRoot $AppRoot -BundleName $BundleName `
                -Evidence $campaign.Preparation -DurationMs $prepareWatch.ElapsedMilliseconds `
                -PassedClasses @()
        } catch {
            $campaign.PreparationFailed = $true
            $campaign.PreparationFailureMessage = $_.Exception.Message
            $campaign.PreparationFailureOutput = if ($_.Exception.Data.Contains('GfPreparationOutput')) {
                @($_.Exception.Data['GfPreparationOutput'] | ForEach-Object { [string]$_ })
            } else { @() }
            throw
        }
        return [pscustomobject]@{
            Campaign = $campaign
            Evidence = $campaign.Preparation
            LogLines = @('===== clean build and transaction deploy (campaign miss) =====') +
                @($prepareOutput | ForEach-Object { [string]$_ })
        }
    }

    $cachedEvidence = [pscustomobject][ordered]@{
        cacheHit = $true
        durationMs = 0
        artifacts = @($campaign.Preparation.artifacts)
    }
    return [pscustomobject]@{
        Campaign = $campaign
        Evidence = $cachedEvidence
        LogLines = @('===== clean build and transaction deploy (campaign hit; reused exact installed artifacts) =====')
    }
}

function Invoke-GfHdcChecked([string]$Hdc, [string]$Serial, [string[]]$Arguments, [string]$Phase) {
    $output = @(& $Hdc -t $Serial @Arguments 2>&1 | ForEach-Object { [string]$_ })
    if ($LASTEXITCODE -ne 0 -or @($output | Where-Object { $_ -match '^\[Fail\]' }).Count -gt 0) {
        throw "GfDeviceRunner: hdc $Phase failed on ${Serial}: $($output -join ' ')"
    }
    return $output
}

function Test-GfPngComplete([string]$Path) {
    # PNG 完整性 = 8 字节签名 + 末尾 IEND 块（'IEND' + 固定 CRC 共收尾 12 字节）。
    # 截断帧的 pngjs 崩溃（"read requests waitng on finished stream"）只能事后归因，
    # 这里在 recv 之后就地把完整性证完。读不到/不足 60 字节一律按不完整。
    try {
        $info = Get-Item -LiteralPath $Path -ErrorAction Stop
        if ($info.Length -lt 60) { return $false }
        $bytes = [IO.File]::ReadAllBytes($Path)
        $sig = [byte[]](0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A)
        for ($i = 0; $i -lt 8; $i++) {
            if ($bytes[$i] -ne $sig[$i]) { return $false }
        }
        $tailText = [Text.Encoding]::ASCII.GetString($bytes[($bytes.Length - 12)..($bytes.Length - 1)])
        return $tailText -like '*IEND*'
    } catch {
        return $false
    }
}

# 捕获窗口里的 `uitest screenCap` / `uitest dumpLayout` 走的是应用内 uitest daemon；
# 它会在长租约中途死掉，此后每一步都立刻 [Fail]：实测一场 56 检查点的 campaign 里，
# 一个真红就能把其余全部检查点落成"零捕获尸体"（归因修复 29c2ace 只是不让尸体撤销
# 真收据，并不 repair 现场）。文档化的恢复手段是重新拉起 daemon，因此这里在记录
# $capture.error 之前给它**一次**机会：$Capture.daemonRestart 是每次捕获的闸门，
# 非空即表示那一次已经用掉 —— 绝不成环，因为无界重试会掩盖死车道并烧掉整场租约。
# 三态就是家族侧要的事实：''=首试即成、'repaired'=重启后拿到的捕获、
# 'failed'=重启并用尽后仍然失败（=确认死车道，与尸体同级但已被证明不是"没试")。
# 只重试失败的那一步：dumpLayout 挂掉时不重拍已成功的 screenCap，避免覆盖好帧。
function Invoke-GfUitestCaptureStep {
    param(
        [string]$Hdc,
        [string]$Serial,
        [string[]]$Arguments,
        [string]$Phase,
        [pscustomobject]$Capture
    )
    try {
        Invoke-GfHdcChecked $Hdc $Serial $Arguments $Phase | Out-Null
        return
    } catch {
        $firstError = $_.Exception.Message
        if ([string]$Capture.daemonRestart -ne '') {
            $Capture.daemonRestart = 'failed'
            throw [InvalidOperationException]::new(
                "GfDeviceRunner: hdc $Phase failed on ${Serial} after this capture's single " +
                "uitest daemon restart was already spent: $firstError")
        }
        try {
            # 与 SuiteInstrument.ps1 / visual-campaign-driver.ps1 的 aa 前置同形状：daemon
            # 常驻，必须后台化并吞掉 stdout，否则 hdc shell 阻塞到超时。
            Invoke-GfHdcChecked $Hdc $Serial @('shell', 'uitest start-daemon default 2>/dev/null &') `
                'uitest start-daemon recovery' | Out-Null
            Invoke-GfHdcChecked $Hdc $Serial $Arguments "$Phase (retry after uitest daemon restart)" | Out-Null
            $Capture.daemonRestart = 'repaired'
            return
        } catch {
            $Capture.daemonRestart = 'failed'
            throw [InvalidOperationException]::new(
                "GfDeviceRunner: hdc $Phase failed on ${Serial} and the single documented uitest " +
                "daemon restart did not recover it: $firstError || retry: $($_.Exception.Message)")
        }
    }
}

function Get-GfBundleUserIdsFromMetadata([string]$Text) {
    $jsonStart = $Text.IndexOf('{')
    if ($jsonStart -lt 0) { return }
    $json = $Text.Substring($jsonStart)
    try {
        $bundle = $json | ConvertFrom-Json -AsHashtable
        foreach ($user in @($bundle['userInfo'])) {
            $value = $user['bundleUserInfo']['userId']
            if ($null -ne $value -and [int]$value -ge 0) { [int]$value }
        }
        return
    } catch {
        # Some HDC/PowerShell combinations can corrupt a localized non-ASCII field in the
        # otherwise JSON-formatted bm dump. userId itself is an ASCII integer, so recover
        # only that exact property; the caller still rejects missing or ambiguous results.
        foreach ($match in [regex]::Matches($json, '"userId"\s*:\s*(?<id>\d+)')) {
            [int]$match.Groups['id'].Value
        }
    }
}

function Get-GfVisualCheckpointDir([string]$ArtifactDir, [string]$Serial, [string]$Name) {
    # 同一 RunId 内多设备并发跑同一 campaign：证据目录必须带设备维度，
    # 否则后跑设备覆盖先跑设备的 actual.png/layout.json/report。
    $serialToken = ($Serial -replace '[^A-Za-z0-9_.-]', '_')
    return Join-Path (Join-Path $ArtifactDir "visual\$serialToken") $Name
}

function Invoke-GfVisualMarkerSweep {
    param(
        [string]$Hdc,
        [string]$Serial,
        [string]$ArtifactDir,
        [hashtable]$Captures,
        [Collections.Generic.List[string]]$Sink
    )
    # marker 经 console.info 进 hilog（JSAPP tag）；只扫该 tag 控制流量。
    $markerPrefix = '[GFVISUAL_CHECKPOINT] '
    $lines = @()
    try { $lines = @(& $Hdc -t $Serial shell hilog -x -T JSAPP 2>$null) } catch { }
    foreach ($line in $lines) {
        $text = [string]$line
        $idx = $text.IndexOf($markerPrefix)
        if ($idx -lt 0) { continue }
        $parsed = $null
        try { $parsed = $text.Substring($idx + $markerPrefix.Length).Trim() | ConvertFrom-Json } catch { continue }
        if ($null -eq $parsed) { continue }
        $name = [string]$parsed.name
        if ([string]::IsNullOrWhiteSpace($name)) { continue }
        if ($Captures.Contains($name)) {
            # first-marker-wins 的确定性化（2026-09-21 接线）：同名 marker 的后续到达不再静默
            # 丢弃。首捕获照旧入账（判定消费面 $Captures[$name] 单份不变），但每次重复到达都
            # 落 duplicate-marker 哨兵，并把重复到达声明的锚集与首捕获登记的锚集对账——两个
            # 发射点声明的锚一致（同一检查点被重复发射同一态）则放行，捕获语义与到达顺序无关；
            # 锚集互异（Quiz-settings-dark 实证形状：matrix 版等 range 锚、variants 版只等 scope
            # 锚）则"入账帧来自哪个源"不可证明，在 capture 上记 sourceConflict，由判定相显式
            # 判红。裁决本身是集合比较（全序、对称），先到谁后到谁不改变结论——顺序翻转结果
            # 不变。属性一律索引器读、Add-Member -Force 写：StrictMode 下缺属性访问是抛的，
            # 而"想补一句实话"绝不该把 sweep 打死。
            $capture = $Captures[$name]
            $arrivalAnchors = @(@($parsed.anchors) | ForEach-Object { [string]$_ } | Sort-Object)
            $arrivalsProperty = $capture.PSObject.Properties['markerArrivals']
            $arrivals = if ($null -ne $arrivalsProperty) { [int]$arrivalsProperty.Value + 1 } else { 2 }
            $capture | Add-Member -MemberType NoteProperty -Name markerArrivals -Value $arrivals -Force
            $Sink.Add("duplicate-marker $name (arrival #$arrivals; anchors [$($arrivalAnchors -join ',')])")
            if ([string](Get-GfCollectionProperty -InputObject $capture -Name 'sourceConflict') -eq '') {
                $declaredProperty = $capture.PSObject.Properties['declaredAnchors']
                if ($null -ne $declaredProperty) {
                    $declaredAnchors = @($declaredProperty.Value)
                    if ((@($arrivalAnchors) -join ',') -ne (@($declaredAnchors) -join ',')) {
                        $conflict = "arrival #$arrivals declares anchors [$($arrivalAnchors -join ',')] " +
                            "but the first capture recorded [$($declaredAnchors -join ',')]; which emitter " +
                            'produced the banked capture cannot be proven, so the checkpoint is judged red ' +
                            'instead of silently keeping the first frame'
                        $capture | Add-Member -MemberType NoteProperty -Name sourceConflict -Value $conflict -Force
                        $Sink.Add("duplicate-marker-conflict $name (arrival #$arrivals)")
                    }
                }
            }
            continue
        }
        # 官方 uitest CLI 只支持落盘 /data/local/tmp（HDK arkxtest 指南），由 uitest 进程
        # 写入、host 可直接 recv；-a 保留颜色/字号属性，供后续对比度类检查使用。
        $remotePng = "/data/local/tmp/gfvisual/$name.png"
        $remoteJson = "/data/local/tmp/gfvisual/$name.json"
        $checkpointDir = Get-GfVisualCheckpointDir -ArtifactDir $ArtifactDir -Serial $Serial -Name $name
        [IO.Directory]::CreateDirectory($checkpointDir) | Out-Null
        $capture = [pscustomobject]@{
            name = $name; status = 'captured'; drift = ''; error = ''; daemonRestart = ''
            png = (Join-Path $checkpointDir 'actual.png'); layout = (Join-Path $checkpointDir 'layout.json')
            # 首捕获登记 marker 声明的锚集（排序后）与到达计数：重复到达时的对账基准
            # （见上面的 duplicate-marker 分支）。判定只消费 png/layout/status 等既有键，
            # 多出的登记字段不进任何判定面。
            declaredAnchors = @(@($parsed.anchors) | ForEach-Object { [string]$_ } | Sort-Object)
            markerArrivals = 1
            sourceConflict = ''
        }
        try {
            Invoke-GfHdcChecked $Hdc $Serial @('shell', 'rm', '-f', $remotePng, $remoteJson) `
                "stale visual staging for $name" | Out-Null
            Invoke-GfUitestCaptureStep -Hdc $Hdc -Serial $Serial -Capture $capture `
                -Arguments @('shell', 'uitest', 'screenCap', '-p', $remotePng) `
                -Phase "uitest screenCap for $name"
            Invoke-GfUitestCaptureStep -Hdc $Hdc -Serial $Serial -Capture $capture `
                -Arguments @('shell', 'uitest', 'dumpLayout', '-p', $remoteJson, '-a') `
                -Phase "uitest dumpLayout for $name"
            Invoke-GfHdcChecked $Hdc $Serial @('file', 'recv', $remotePng, $capture.png) `
                "screen receive for $name" | Out-Null
            if (-not (Test-GfPngComplete -Path $capture.png)) {
                # 截断/空帧（uitest screenCap 静默失败或仍在写时 recv 已返回）单次重采：
                # night-0923 实测 clash-home-dark@5563 落成 0 字节 png、视觉比较器在 pngjs
                # 崩出裸 exit=1。重做 screenCap + 重 recv 一次；仍不完整按基础设施失败出账，
                # 绝不把半帧/空帧 PNG 送进视觉比较器。
                Start-Sleep -Milliseconds 500
                Invoke-GfUitestCaptureStep -Hdc $Hdc -Serial $Serial -Capture $capture `
                    -Arguments @('shell', 'uitest', 'screenCap', '-p', $remotePng) `
                    -Phase "uitest screenCap retry for $name (first pull was an incomplete PNG)"
                Invoke-GfHdcChecked $Hdc $Serial @('file', 'recv', $remotePng, $capture.png) `
                    "screen re-receive for $name" | Out-Null
                if (-not (Test-GfPngComplete -Path $capture.png)) {
                    throw "incomplete PNG capture for $name (signature/IEND trailer missing after retry)"
                }
            }
            Invoke-GfHdcChecked $Hdc $Serial @('file', 'recv', $remoteJson, $capture.layout) `
                "layout receive for $name" | Out-Null
            $layoutText = [IO.File]::ReadAllText($capture.layout)
            foreach ($anchor in @($parsed.anchors)) {
                if ($layoutText -notmatch ('"id"\s*:\s*"' + [regex]::Escape([string]$anchor) + '"')) {
                    $capture.drift = "anchor missing from captured layout: $anchor"
                }
            }
        } catch {
            $capture.error = $_.Exception.Message
            $capture.status = 'infrastructure'
        }
        $Captures[$name] = $capture
        $Sink.Add("===== visual capture $name (status=$($capture.status); drift=$($capture.drift); " +
            "daemonRestart=$($capture.daemonRestart); error=$($capture.error)) =====")
    }
}

# 失败证据包 sweep：设备端断言引擎（gfAssertUiAnchor/gfAuditUiCheckpoint/
# gfClickAndAssertUiTransition/gfExecuteContractEntry 等）在真实失败路径上发出
# [GFTEST_EVIDENCE] marker 并保持界面静止一个捕获窗口；本函数在窗口内用官方
# uitest CLI 采集 png + layout.json(-a)，recv 到 evidence/<serial>/<name>/ 并按
# marker 锚点清单校验界面未漂移。语义/几何/交互层的失败由此获得与视觉层同级的
# 证据——失败归因从"读日志猜"变成"看图定案"。
function Invoke-GfEvidenceMarkerSweep {
    param(
        [string]$Hdc,
        [string]$Serial,
        [string]$ArtifactDir,
        [hashtable]$Captures,
        [Collections.Generic.List[string]]$Sink
    )
    $markerPrefix = '[GFTEST_EVIDENCE] '
    $lines = @()
    try { $lines = @(& $Hdc -t $Serial shell hilog -x -T JSAPP 2>$null) } catch { }
    foreach ($line in $lines) {
        $text = [string]$line
        $idx = $text.IndexOf($markerPrefix)
        if ($idx -lt 0) { continue }
        $parsed = $null
        try { $parsed = $text.Substring($idx + $markerPrefix.Length).Trim() | ConvertFrom-Json } catch { continue }
        if ($null -eq $parsed) { continue }
        $name = [string]$parsed.name
        if ([string]::IsNullOrWhiteSpace($name) -or $Captures.Contains($name)) { continue }
        $remotePng = "/data/local/tmp/gfevidence/$name.png"
        $remoteJson = "/data/local/tmp/gfevidence/$name.json"
        $evidenceDir = Join-Path (Join-Path $ArtifactDir "evidence\$($Serial -replace '[^A-Za-z0-9_.-]', '_')") $name
        [IO.Directory]::CreateDirectory($evidenceDir) | Out-Null
        $capture = [pscustomobject][ordered]@{
            name = $name; source = [string]$parsed.source; app = [string]$parsed.app
            detail = [string]$parsed.detail
            anchors = @($parsed.anchors | ForEach-Object { [string]$_ })
            capturedAt = [string]$parsed.capturedAt
            status = 'captured'; drift = ''; error = ''; daemonRestart = ''
            png = (Join-Path $evidenceDir 'failure.png'); layout = (Join-Path $evidenceDir 'layout.json')
            failureJson = (Join-Path $evidenceDir 'failure.json')
        }
        try {
            Invoke-GfHdcChecked $Hdc $Serial @('shell', 'rm', '-f', $remotePng, $remoteJson) `
                "stale evidence staging for $name" | Out-Null
            # 失败证据与视觉检查点共用同一个应用内 uitest daemon，因此共用同一条
            # 一次性恢复通道：真红的现场不能因为 daemon 先死而退化成零证据。
            Invoke-GfUitestCaptureStep -Hdc $Hdc -Serial $Serial -Capture $capture `
                -Arguments @('shell', 'uitest', 'screenCap', '-p', $remotePng) `
                -Phase "uitest screenCap for evidence $name"
            Invoke-GfUitestCaptureStep -Hdc $Hdc -Serial $Serial -Capture $capture `
                -Arguments @('shell', 'uitest', 'dumpLayout', '-p', $remoteJson, '-a') `
                -Phase "uitest dumpLayout for evidence $name"
            Invoke-GfHdcChecked $Hdc $Serial @('file', 'recv', $remotePng, $capture.png) `
                "evidence screen receive for $name" | Out-Null
            Invoke-GfHdcChecked $Hdc $Serial @('file', 'recv', $remoteJson, $capture.layout) `
                "evidence layout receive for $name" | Out-Null
            # 失败时刻与采集时刻之间界面不得漂移：锚点清单必须都能在布局树里对上。
            # 布局树缺席锚点本身也可能正是失败原因（锚点不存在/不在场），此时记录
            # drift 事实但不算采集失败——"布局树里没有它"就是最重要的证据。
            $layoutText = [IO.File]::ReadAllText($capture.layout)
            $missingAnchors = [Collections.Generic.List[string]]::new()
            foreach ($anchor in $capture.anchors) {
                if ($layoutText -notmatch ('"id"\s*:\s*"' + [regex]::Escape($anchor) + '"')) {
                    $missingAnchors.Add($anchor)
                }
            }
            if ($missingAnchors.Count -gt 0) {
                $capture.drift = "anchors absent from captured layout: $($missingAnchors -join ', ')"
            }
            $capture | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $capture.failureJson -Encoding UTF8
        } catch {
            $capture.error = $_.Exception.Message
            $capture.status = 'infrastructure'
        }
        $Captures[$name] = $capture
        $Sink.Add("===== failure evidence $name (source=$($capture.source); status=$($capture.status); " +
            "drift=$($capture.drift); daemonRestart=$($capture.daemonRestart); error=$($capture.error)) =====")
    }
}

function Invoke-GfVisualCheckpoint {
    param(
        [string]$Hdc,
        [string]$Serial,
        [string]$PlatformRoot,
        [string]$ArtifactDir,
        [object]$Check,
        [double]$DensityPixels = 0
    )
    $name = [string]$Check.name
    if ($name -notmatch '^[a-z0-9][a-z0-9-]{1,79}$') {
        throw "GfDeviceRunner: invalid visual checkpoint name '$name'."
    }
    $platformPrefix = [IO.Path]::GetFullPath($PlatformRoot).TrimEnd('\', '/') + [IO.Path]::DirectorySeparatorChar
    $specPath = [IO.Path]::GetFullPath((Join-Path $PlatformRoot ([string]$Check.spec)))
    if (-not $specPath.StartsWith($platformPrefix, [StringComparison]::OrdinalIgnoreCase) -or
        -not (Test-Path -LiteralPath $specPath -PathType Leaf)) {
        throw "GfDeviceRunner: visual spec is outside GFKit or missing: $specPath"
    }
    $node = [string]$env:GF_GODFREYHUB_NODE
    $provider = [string]$env:GF_GODFREYHUB_VISUAL_COMPARE
    if ([string]::IsNullOrWhiteSpace($node) -or -not (Test-Path -LiteralPath $node -PathType Leaf) -or
        [string]::IsNullOrWhiteSpace($provider) -or -not (Test-Path -LiteralPath $provider -PathType Leaf)) {
        throw 'GfDeviceRunner: visual execution requires the GodfreyHub visual compare provider; use hub_family_test.'
    }

    # 采集已在捕获窗口内由 Invoke-GfVisualMarkerSweep 完成；此处只消费产物。
    $captures = $null
    if ($null -ne $script:GfVisualCapturesBySerial) { $captures = $script:GfVisualCapturesBySerial[$Serial] }
    $capture = $null
    if ($null -ne $captures -and $captures.Contains($name)) { $capture = $captures[$name] }
    if ($null -eq $capture) {
        throw "GfDeviceRunner: no visual capture for '$name'; the device-side checkpoint marker never appeared during the campaign."
    }
    if ([string]$capture.error -ne '') {
        throw "GfDeviceRunner: visual capture '$name' infrastructure failure: $($capture.error)"
    }
    if ([string]$capture.drift -ne '') {
        throw "GfDeviceRunner: visual capture '$name' does not contain its declared anchors: $($capture.drift)"
    }
    $checkpointDir = Get-GfVisualCheckpointDir -ArtifactDir $ArtifactDir -Serial $Serial -Name $name
    $screenshotPath = [string]$capture.png
    $layoutPath = [string]$capture.layout
    $reportDir = Join-Path $checkpointDir 'report'

    # 结构性差分：变体 spec 声明 structuralEquivalentTo 时，从同一设备同一 campaign
    # 里已完成的基线检查点取 spec 与布局树传给比较器。基线未先执行/未捕获是编排
    # 错误——显式失败，绝不静默退化为"只跑变体自身检查"。
    $providerArguments = @('--spec', $specPath, '--actual', $screenshotPath,
        '--layout', $layoutPath, '--output', $reportDir)
    $specText = [IO.File]::ReadAllText($specPath)
    try { $specJson = $specText | ConvertFrom-Json } catch { $specJson = $null }
    if ($null -ne $specJson -and
        ($specJson.PSObject.Properties.Name -contains 'structuralEquivalentTo')) {
        $baselineName = [string]$specJson.structuralEquivalentTo.spec
        if ([string]::IsNullOrWhiteSpace($baselineName)) {
            throw "GfDeviceRunner: visual checkpoint '$name' declares structuralEquivalentTo without a baseline spec name."
        }
        $baselineCapture = $null
        if ($null -ne $captures -and $captures.Contains($baselineName)) {
            $baselineCapture = $captures[$baselineName]
        }
        $baselineLayoutPath = $null
        if ($null -ne $baselineCapture) { $baselineLayoutPath = [string]$baselineCapture.layout }
        if ([string]::IsNullOrWhiteSpace($baselineLayoutPath) -or
            -not (Test-Path -LiteralPath $baselineLayoutPath -PathType Leaf)) {
            # 单套件路径(campaign 之外)里基线属于兄弟套件的产物目录: 从运行根
            # (ArtifactDir 的父目录)按 设备/检查点名 兜底检索本次运行的基线布局。
            $serialToken = ($Serial -replace '[^A-Za-z0-9_.-]', '_')
            $baselineLayoutPath = @(Get-ChildItem -Path (Join-Path (Split-Path -Parent $ArtifactDir) '*') `
                -Recurse -Filter 'layout.json' -ErrorAction SilentlyContinue |
                Where-Object { $_.FullName -match ('[\\/]' + [regex]::Escape($baselineName) + '[\\/]layout\.json$') -and
                    $_.FullName -match ('[\\/]' + [regex]::Escape($serialToken) + '[\\/]') } |
                Select-Object -First 1 -ExpandProperty FullName)
        }
        if ([string]::IsNullOrWhiteSpace($baselineLayoutPath) -or
            -not (Test-Path -LiteralPath $baselineLayoutPath -PathType Leaf)) {
            throw "GfDeviceRunner: visual checkpoint '$name' declares structuralEquivalentTo '$baselineName', but that baseline checkpoint has no captured layout on device '$Serial'. Baseline classes must run before variant classes in the same run."
        }
        # 基线 spec 与变体 spec 同目录(visual-spec.schema/validator 保证同 App 注册)。
        $baselineSpecPath = Join-Path (Split-Path -Parent $specPath) "$baselineName.json"
        if (-not (Test-Path -LiteralPath $baselineSpecPath -PathType Leaf)) {
            throw "GfDeviceRunner: visual checkpoint '$name' structural baseline spec is missing: $baselineSpecPath"
        }
        $providerArguments += @('--baseline-spec', $baselineSpecPath, '--baseline-layout', $baselineLayoutPath)
        if ($DensityPixels -gt 0) {
            $providerArguments += @('--density', "$DensityPixels")
        }
    }

    # 主题位移判定（themeDeltas）的配对通路（D-1 牙的编排侧接线，2026-09-21）：spec 声明
    # themeDeltas 时，从**同一战役**的捕获表里取 comparedTo 指向的浅色基线检查点的 actual
    # 帧传给比较器（--baseline-actual）。映射不靠 X-dark ↔ X-baseline 命名惯例猜：
    # themeDelta.comparedTo 是 visual-spec.schema 的必填显式声明，读它就是全部约定。
    # 配对帧缺席不是错误输入（单套件只跑 dark 轴就是这种形状），此时不传参数，比较器
    # 以 theme-baseline-missing 显式红收场——绝不静默跳过，也绝不拿跨战役的旧帧顶数
    # （主题差分吃的是像素证据，陈旧浅色帧会把"同一构建的两帧翻色"变成"两份构建的差"）。
    if ($null -ne $specJson -and
        ($specJson.PSObject.Properties.Name -contains 'themeDeltas')) {
        $themeBaselineNames = @(@($specJson.themeDeltas) |
            ForEach-Object { [string]$_.PSObject.Properties['comparedTo'].Value } |
            Where-Object { $_ } | Sort-Object -Unique)
        if ($themeBaselineNames.Count -ne 1) {
            throw "GfDeviceRunner: visual checkpoint '$name' declares themeDeltas with " +
                "$($themeBaselineNames.Count) distinct comparedTo baselines; one checkpoint pairs " +
                'with exactly one light baseline (declare one comparedTo per spec).'
        }
        $themeCapture = $null
        if ($null -ne $captures -and $captures.Contains($themeBaselineNames[0])) {
            $themeCapture = $captures[$themeBaselineNames[0]]
        }
        $themeBaselinePng = ''
        if ($null -ne $themeCapture) {
            $candidate = [string]$themeCapture.png
            if (-not [string]::IsNullOrWhiteSpace($candidate) -and
                (Test-Path -LiteralPath $candidate -PathType Leaf)) {
                $themeBaselinePng = $candidate
            }
        }
        if ($themeBaselinePng -ne '') {
            $providerArguments += @('--baseline-actual', $themeBaselinePng)
            # 浅色锚点几何：themeDeltaCheck 读比较器的 structuralBaselineLayoutPath 通道定位
            # 浅色帧里的锚。若结构差分已经传了 --baseline-layout（comparedTo 通常就是
            # structuralEquivalentTo.spec 指向的同一基线），不重复传——CLI 按首个出现的参数
            # 取值，重复传只会让两个消费方读到不可预测的一份。spec 未声明结构差分时传这个
            # 参数没有副作用：结构检查只由 spec 的 structuralEquivalentTo 声明触发。
            if (-not (@($providerArguments) -contains '--baseline-layout')) {
                $themeBaselineLayout = [string]$themeCapture.layout
                if (-not [string]::IsNullOrWhiteSpace($themeBaselineLayout) -and
                    (Test-Path -LiteralPath $themeBaselineLayout -PathType Leaf)) {
                    $providerArguments += @('--baseline-layout', $themeBaselineLayout)
                }
            }
        }
    }

    $providerOutput = @(& $node $provider @providerArguments 2>&1 | ForEach-Object { [string]$_ })
    $providerExit = $LASTEXITCODE
    $jsonLine = @($providerOutput | Where-Object { $_.TrimStart().StartsWith('{') }) | Select-Object -Last 1
    if ([string]::IsNullOrWhiteSpace([string]$jsonLine)) {
        throw "GfDeviceRunner: visual provider returned no JSON for $name (exit=$providerExit): $($providerOutput -join ' ')"
    }
    try { $report = [string]$jsonLine | ConvertFrom-Json }
    catch { throw "GfDeviceRunner: visual provider returned invalid JSON for ${name}: $($_.Exception.Message)" }
    return [pscustomobject]@{
        name = $name
        afterClass = [string]$Check.afterClass
        status = [string]$report.status
        screenshot = $screenshotPath
        layout = $layoutPath
        reportJson = [string]$report.reportJson
        reportMarkdown = [string]$report.reportMarkdown
        summary = $report.summary
        issues = @($report.issues)
        exitCode = $providerExit
    }
}

# A visual spec's free-form `states` already record which theme/locale/window
# class/data state the checkpoint exercised. Translating only the labels that map
# onto declared matrix dimensions turns those executed states into machine-readable
# coverage evidence. Domain render modes (infrared-night), gesture and orientation
# labels (landscape, single-finger-pan) and purely layout-specific labels are
# deliberately NOT translated, so they never masquerade as matrix coverage.
function ConvertTo-GfVisualMatrixDimensions {
    param([string[]]$States)
    $dims = @{}
    foreach ($state in @($States)) {
        $dimension = $null
        $value = $null
        switch -Regex ([string]$state) {
            '^day-theme$'          { $dimension = 'themes';        $value = 'light' }
            '^dark-theme$'         { $dimension = 'themes';        $value = 'dark' }
            '^en-us-locale$'       { $dimension = 'locales';       $value = 'en-US' }
            '^narrow-viewport$'    { $dimension = 'windowClasses'; $value = 'compact' }
            '^compact-viewport$'   { $dimension = 'windowClasses'; $value = 'compact' }
            '^wide-viewport$'      { $dimension = 'windowClasses'; $value = 'expanded' }
            '^fresh-(home|today)$' { $dimension = 'dataStates';    $value = 'empty' }
            '^seeded-'             { $dimension = 'dataStates';    $value = 'typical' }
            '^fs085-'              { $dimension = 'fontScale';     $value = '0.85' }
            '^fs100-'              { $dimension = 'fontScale';     $value = '1.0' }
            '^fs130-'              { $dimension = 'fontScale';     $value = '1.3' }
            '^fs175-'              { $dimension = 'fontScale';     $value = '1.75' }
            '^fs200-'              { $dimension = 'fontScale';     $value = '2.0' }
            '^fs320-'              { $dimension = 'fontScale';     $value = '3.2' }
        }
        if ($dimension) {
            if (-not $dims.ContainsKey($dimension)) {
                $dims[$dimension] = [Collections.Generic.List[string]]::new()
            }
            if (-not $dims[$dimension].Contains($value)) { $dims[$dimension].Add($value) }
        }
    }
    # A visual spec that does not declare en-us-locale renders in the default
    # (zh-CN) resource set; treat that as proven zh-CN coverage.
    $locales = @($dims.Keys | Where-Object { $_ -eq 'locales' })
    $hasEnUs = $false
    if ($dims.ContainsKey('locales')) {
        $hasEnUs = @($dims['locales'] | Where-Object { $_ -eq 'en-US' }).Count -gt 0
    }
    if (-not $hasEnUs) {
        $dims['locales'] = [Collections.Generic.List[string]]::new()
        if (-not $dims['locales'].Contains('zh-CN')) { $dims['locales'].Add('zh-CN') }
    }
    return $dims
}

# Merge any mix of matrixCoverage PSCustomObjects (from suite markers) and
# dimension hashtables (from visual spec states) into one normalized object with
# sorted, de-duplicated per-dimension string arrays across all six dimensions.
function Merge-GfMatrixDimensions {
    param([object[]]$Sources)
    $dimensions = @('deviceClasses', 'windowClasses',
        'themes', 'locales', 'networks', 'dataStates', 'fontScale')
    $all = [ordered]@{}
    foreach ($dimension in $dimensions) {
        $all[$dimension] = [Collections.Generic.List[string]]::new()
    }
    foreach ($source in @($Sources)) {
        if ($null -eq $source) { continue }
        $pairs = @()
        if ($source -is [System.Collections.IDictionary]) {
            foreach ($key in $source.Keys) { $pairs += ,@([string]$key, $source[$key]) }
        } else {
            foreach ($property in $source.PSObject.Properties) { $pairs += ,@($property.Name, $property.Value) }
        }
        foreach ($pair in $pairs) {
            $dimension = [string]$pair[0]
            if (-not $all.Contains($dimension)) { continue }
            foreach ($value in @($pair[1])) {
                $text = [string]$value
                if (-not [string]::IsNullOrWhiteSpace($text) -and -not $all[$dimension].Contains($text)) {
                    $all[$dimension].Add($text)
                }
            }
        }
    }
    foreach ($dimension in $dimensions) {
        $all[$dimension] = @($all[$dimension] | Sort-Object)
    }
    return [pscustomobject]$all
}

function Get-GfDeviceRequirement([object]$Suite) {
    $req = [GfDeviceRequirement]::new()
    # 能力即属性（支柱 2）：设备路由只求解 suite.capabilities，旧 device 块已删除。
    if ($Suite.PSObject.Properties.Name -contains 'capabilities') {
        $caps = $Suite.capabilities
            if ($caps.PSObject.Properties.Name -contains 'testmode') { $req.TestMode = [bool]$caps.testmode }
        if ($caps.PSObject.Properties.Name -contains 'profile') { $req.Profile = [string]$caps.profile }
    }
    # lane 默认路由：semantic-contract / visual-contract 需要 testmode 设备
    if ($Suite.lane -in @('semantic-contract', 'visual-contract')) { $req.TestMode = $true }
    return $req
}
