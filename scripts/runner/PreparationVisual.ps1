# GfDeviceRunner 分块 3/5: 构建/安装预备事务与视觉/失败证据采集(campaign 准备、marker sweep、检查点、矩阵维度)。
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
    # Device lanes may execute concurrently, but build preparation runs inside one
    # cross-process mutex so a single writer owns the shared build outputs. The
    # caller names the serial domain (GODFREYHUB_BUILD_MUTEX_NAME); this runner only
    # guarantees one writer at a time within it.
    $preparation = Invoke-GfWithBuildMutex -Body {
        $previousLeaseSerial = [Environment]::GetEnvironmentVariable('GF_DEVICE_LEASE_HELD_SERIAL', 'Process')
        try {
            $env:GF_DEVICE_LEASE_HELD_SERIAL = $Serial
            $lines = @(& $node $provider --app $AppName --target $Serial --test-target $TestTarget 2>&1)
            [pscustomobject]@{
                Output = @($lines | ForEach-Object { [string]$_ })
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
