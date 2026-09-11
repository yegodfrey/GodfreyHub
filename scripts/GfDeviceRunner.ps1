# GfDeviceRunner - hdc device discovery, routing, instrument execution and result collection.
#
# 设备池分流（FAMILY_TEST_ARCHITECTURE §5）：
#   - testmode 设备：运行 GFTest 结构契约（semantic-contract lane）与 Hypium 业务旅程
#     （business-flow lane）；模拟器与真机等价，不做环境区分；
#   - arch 要求是 ABI 事实（如 Clash 内核产物架构），不是设备形态偏好；
#   - UI 设备池（family-tests.json uiDevicePool）：视觉契约套件在池内每个在线
#     profile 上各跑一份。屏幕物理分辨率（Portrait 归一化 短边x长边）是池内设备
#     的身份指纹——所有模拟器 const.product.model 都报 emulator。orientation=
#     landscape 的视觉检查点只在池内声明了 landscape 的 profile 上采集；runner
#     通过应用缓存目录 gf-visual-orientation.json 把该能力下发给设备端采集层，
#     portrait-only 设备上的旋转类用例在设备侧直接空转。
# 不支持 testmode 必须标记 blocked，不得把 Hypium 成功换算成锚点成功。

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# 每台设备本次 run 的视觉采集登记（marker 名 → 采集结果），供 campaign 结束后的
# 视觉比较消费；StrictMode 要求先初始化。
$script:GfVisualCapturesBySerial = @{}

. (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')

class GfDeviceInfo {
    [string]$Serial
    [string]$Arch          # arm64 | arm | x86_64 | unknown
    [bool]$TestMode        # persist.ace.testmode.enabled = 1
    [bool]$IsEmulator      # ro.kernel.qemu / hardware goldfish
    [string]$Model
    [string]$OsVersion
    [string]$DeviceClass   # phone | tablet | 2in1 | unknown
    [string]$Screen = 'unknown'        # 归一化物理分辨率 短边x长边，如 1280x2832
    [string]$ProfileName = ''          # uiDevicePool 命中项；空串表示池外设备
    [string]$Orientations = ''         # 命中 profile 声明的方向矩阵，逗号分隔
    [bool]$LandscapeSupported = $true  # 池内按声明；池外设备保持旧行为（允许旋转）
}

class GfDeviceRequirement {
    [string]$Arch = 'any'       # arm64 | any
    [bool]$TestMode = $false    # requires testmode-capable device
    [string]$Profile = ''       # requires one named uiDevicePool profile
}

class GfDeviceRunResult {
    [string]$SuiteKey
    [string]$Status            # passed | failed | blocked | skipped
    [string]$DeviceSerial
    [string]$Detail
    [string]$LogPath
    [int]$Passed = 0
    [int]$Failed = 0
    [int]$Skipped = 0
    [string]$Arch
    [bool]$TestMode = $false
    [bool]$IsEmulator = $false
    [string]$DeviceClass
    [string]$DeviceProfile = ''
    [bool]$LandscapeSupported = $true
    [bool]$MutationOrFaultProof = $false
    [object]$MatrixCoverage
    [object]$PerformanceMetrics
    [object]$StabilityMetrics
    [object[]]$ClosureEvidence = @()
    [object[]]$BlockedCapabilityEvidence = @()
    [object[]]$VisualEvidence = @()
    [object[]]$ClassResults = @()
    [string[]]$ExecutedClasses = @()
    [string[]]$ReusedClasses = @()
    [object]$Preparation
    [object]$Timings
}

# A family test invocation is an application campaign, not a sequence of unrelated
# cold launches. The state is deliberately process-local: a worker owns exactly one
# device lane, so reuse cannot escape the command that selected the source tree,
# target and ordered suite list.
$script:GfInstrumentCampaigns = @{}

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

function Get-GfCollectionProperty {
    param(
        [AllowNull()][object]$InputObject,
        [Parameter(Mandatory = $true)][string]$Name
    )

    if ($null -eq $InputObject) { return }
    $property = $InputObject.PSObject.Properties[$Name]
    if ($null -eq $property -or $null -eq $property.Value) { return }
    foreach ($item in @($property.Value)) {
        if ($null -ne $item) { $item }
    }
}

function Get-GfSystemUiPrerequisiteDetail {
    param([AllowNull()][string]$Text)

    if ([string]::IsNullOrWhiteSpace($Text)) { return $null }
    if ($Text -match 'com\.huawei\.hmos\.inputmethod' -and
        $Text -match 'pages/setting/KeyboardSelectGuidePage') {
        return 'system input method setup is incomplete; finish the keyboard-layout guide on the selected device, then rerun the suite'
    }
    return $null
}

function Get-HdcPath {
    $providerHdc = [string]$env:GF_GODFREYHUB_HDC
    if (-not [string]::IsNullOrWhiteSpace($providerHdc)) {
        if (Test-Path -LiteralPath $providerHdc -PathType Leaf) {
            return [IO.Path]::GetFullPath($providerHdc)
        }
        $providerCommand = Get-Command $providerHdc -ErrorAction SilentlyContinue
        if ($null -ne $providerCommand) { return $providerCommand.Source }
    }
    $hdc = Get-Command hdc -ErrorAction SilentlyContinue
    if ($null -ne $hdc) { return $hdc.Source }
    return $null
}

function ConvertFrom-GfHdcTargetLines {
    param([AllowEmptyCollection()][object[]]$Lines = @())

    foreach ($line in @($Lines)) {
        $candidate = ([string]$line).Trim()
        if ([string]::IsNullOrWhiteSpace($candidate) -or $candidate -eq 'Empty Set') { continue }
        # HDC may emit its payload on stderr when hosted below an MCP stdio process. Capture
        # both streams, then accept only a single serial token so diagnostic log lines can
        # never be mistaken for devices.
        if ($candidate -match '^[A-Za-z0-9][A-Za-z0-9._:-]*$') { $candidate }
    }
}

function Get-GfMissingInstrumentSummaryDetail(
    [string]$TestClass,
    [string]$ScopeText,
    [int]$ScopeExit
) {
    if ($ScopeText -match '(?im)^\s*TestFinished-ResultMsg:\s*App died\s*$') {
        return "${TestClass}: App died before authoritative Tests run summary (hdc exit=$ScopeExit)"
    }
    return "${TestClass}: missing authoritative Tests run summary (hdc exit=$ScopeExit)"
}

function Get-GfInstrumentClassResults([string]$OutputText, [string[]]$TestClasses) {
    $states = [ordered]@{}
    foreach ($testClass in @($TestClasses)) {
        $states[$testClass] = [ordered]@{ name = $testClass; passed = 0; failed = 0; ignored = 0; status = 'unknown' }
    }
    $currentClass = ''
    foreach ($line in @($OutputText -split '\r?\n')) {
        $classMatch = [regex]::Match($line, '^OHOS_REPORT_STATUS:\s*class=(?<class>[A-Za-z_][A-Za-z0-9_.-]*)\s*$')
        if ($classMatch.Success) {
            $candidate = $classMatch.Groups['class'].Value
            $currentClass = if ($states.Contains($candidate)) { $candidate } else { '' }
            continue
        }
        if ([string]::IsNullOrWhiteSpace($currentClass)) { continue }
        $codeMatch = [regex]::Match($line, '^OHOS_REPORT_STATUS_CODE:\s*(?<code>-?\d+)\s*$')
        if (-not $codeMatch.Success) { continue }
        $code = [int]$codeMatch.Groups['code'].Value
        if ($code -eq 0) {
            $states[$currentClass].passed = [int]$states[$currentClass].passed + 1
        } elseif ($code -eq -3) {
            $states[$currentClass].ignored = [int]$states[$currentClass].ignored + 1
        } elseif ($code -lt 0) {
            $states[$currentClass].failed = [int]$states[$currentClass].failed + 1
        }
    }
    return @($states.Values | ForEach-Object {
        if ([int]$_.failed -gt 0 -or [int]$_.ignored -gt 0) { $_.status = 'failed' }
        elseif ([int]$_.passed -gt 0) { $_.status = 'passed' }
        [pscustomobject]$_
    })
}

# 设备侧能力缺失标记（[GF_TEST_BLOCKED] capability=... reason=...）按 OHOS_REPORT_STATUS
# 的 class 边界归属到发出它的测试类；class 为空表示落在任何类边界之外。编排器据此把
# 该用例记 blocked，"本设备跑不了"不得退化成静默通过。
function Get-GfBlockedCapabilityEvidence([string]$OutputText) {
    $entries = [Collections.Generic.List[object]]::new()
    $currentClass = ''
    foreach ($line in @($OutputText -split '\r?\n')) {
        $classMatch = [regex]::Match($line, '^OHOS_REPORT_STATUS:\s*class=(?<class>[A-Za-z_][A-Za-z0-9_.-]*)\s*$')
        if ($classMatch.Success) {
            $currentClass = $classMatch.Groups['class'].Value
            continue
        }
        $blockedMatch = [regex]::Match($line,
            '\[GF_TEST_BLOCKED\]\s+capability=(?<capability>[A-Za-z0-9._-]+)(?:\s+reason=(?<reason>[^\s]+))?')
        if (-not $blockedMatch.Success) { continue }
        $entries.Add([pscustomobject]@{
            class = $currentClass
            capability = $blockedMatch.Groups['capability'].Value
            reason = $blockedMatch.Groups['reason'].Value
        })
    }
    return @($entries | Sort-Object class, capability, reason -Unique)
}

function Get-GfBlockedCapabilityDetail([object[]]$Entries) {
    return @($Entries | ForEach-Object {
        if ([string]::IsNullOrWhiteSpace([string]$_.reason)) { [string]$_.capability }
        else { "$($_.capability) ($($_.reason))" }
    }) -join ', '
}

function Get-GfHdcTargetSerials([string]$Hdc) {
    for ($attempt = 1; $attempt -le 3; $attempt++) {
        $raw = @(& $Hdc list targets 2>&1)
        $serials = @(ConvertFrom-GfHdcTargetLines -Lines $raw | Select-Object -Unique)
        if ($serials.Count -gt 0) { return $serials }
        if ($attempt -lt 3) { Start-Sleep -Milliseconds (500 * $attempt) }
    }
    return @()
}

# 屏幕物理分辨率指纹：取 DisplayManagerService 输出的第一块屏幕 PhyBounds（不随
# 当前旋转变化），归一化为 短边x长边。这是 uiDevicePool 的设备身份；解析失败返回
# unknown，池匹配按无命中处理而不是猜测。
function Get-GfScreenFingerprint([string]$HidumperText) {
    if ([string]::IsNullOrWhiteSpace($HidumperText)) { return 'unknown' }
    $boundsMatch = [regex]::Match($HidumperText,
        'PhyBounds<L,T,W,H>:\s*\d+,\s*\d+,\s*(?<w>\d+),\s*(?<h>\d+)')
    if (-not $boundsMatch.Success) {
        $boundsMatch = [regex]::Match($HidumperText,
            'Bounds<L,T,W,H>:\s*\d+,\s*\d+,\s*(?<w>\d+),\s*(?<h>\d+)')
    }
    if (-not $boundsMatch.Success) { return 'unknown' }
    $width = [long]$boundsMatch.Groups['w'].Value
    $height = [long]$boundsMatch.Groups['h'].Value
    return "$([Math]::Min($width, $height))x$([Math]::Max($width, $height))"
}

function Get-GfDeviceList {
    param([AllowEmptyCollection()][object[]]$UiDevicePool = @())
    $hdc = Get-HdcPath
    if (-not $hdc) {
        Write-Warning 'GfDeviceRunner: hdc not found; device suites will be blocked.'
        return @()
    }
    $serials = @(Get-GfHdcTargetSerials -Hdc $hdc)
    $devices = [Collections.Generic.List[GfDeviceInfo]]::new()
    foreach ($serial in $serials) {
        $dev = [GfDeviceInfo]::new()
        $dev.Serial = $serial
        # 架构
        $archRaw = (& $hdc -t $serial shell uname -m 2>$null | Out-String).Trim()
        $dev.Arch = switch -Regex ($archRaw) {
            'aarch64|arm64' { 'arm64' }
            'armv|armhf' { 'arm' }
            'x86_64|amd64' { 'x86_64' }
            default { 'unknown' }
        }
        # testmode capability is proved through the same primitive used by a real run. Some
        # images deny `param get` to the shell domain even though the immediately following
        # TestKit session can consume `param set`; therefore read-back is not evidence.
        $probeShell = 'param set persist.ace.testmode.enabled 1; ' +
            'uitest start-daemon default 2>/dev/null & sleep 1; pidof uitest'
        $probeRaw = (& $hdc -t $serial shell $probeShell 2>$null | Out-String).Trim()
        # Re-probing an already enabled target may briefly expose more than one
        # uitest PID while the old daemon exits. One or more numeric PIDs all
        # prove that the target can host the session.
        $dev.TestMode = ($probeRaw -match 'Set parameter persist\.ace\.testmode\.enabled 1 success' -and
            $probeRaw -match '(?m)^\d+(?:\s+\d+)*\s*$')
        # 模拟器判定
        $hwRaw = (& $hdc -t $serial shell param get const.product.hardwareversion 2>$null | Out-String).Trim()
        $deviceTypeRaw = (& $hdc -t $serial shell param get const.product.devicetype 2>$null | Out-String).Trim()
        $simulationRaw = (& $hdc -t $serial shell param get const.boot.simulation 2>$null | Out-String).Trim()
        $dev.IsEmulator = ($serial -match '^(127\.0\.0\.1|localhost):' -or
            $hwRaw -match 'goldfish|ranchu|emulator' -or
            $deviceTypeRaw -match 'emulator' -or $simulationRaw -eq '1')
        $dev.DeviceClass = switch -Regex ($deviceTypeRaw) {
            '2in1|pc' { '2in1' }
            'tablet' { 'tablet' }
            'phone' { 'phone' }
            default { 'unknown' }
        }
        # 型号/版本/屏幕指纹
        $dev.Model = (& $hdc -t $serial shell param get const.product.model 2>$null | Out-String).Trim()
        $dev.OsVersion = (& $hdc -t $serial shell param get const.ohos.apiversion 2>$null | Out-String).Trim()
        $displayRaw = (& $hdc -t $serial shell "hidumper -s DisplayManagerService -a '-a'" 2>$null | Out-String)
        $dev.Screen = Get-GfScreenFingerprint -HidumperText $displayRaw
        foreach ($poolEntry in @($UiDevicePool)) {
            if (-not ($poolEntry.PSObject.Properties.Name -contains 'profile') -or
                -not ($poolEntry.PSObject.Properties.Name -contains 'match') -or
                $null -eq $poolEntry.match -or
                -not ($poolEntry.match.PSObject.Properties.Name -contains 'screen')) { continue }
            if ([string]$poolEntry.match.screen -ne $dev.Screen) { continue }
            $dev.ProfileName = [string]$poolEntry.profile
            $poolOrientations = @($poolEntry.orientations | ForEach-Object { [string]$_ })
            $dev.Orientations = ($poolOrientations -join ',')
            $dev.LandscapeSupported = ($poolOrientations -contains 'landscape')
            break
        }
        $devices.Add($dev)
    }
    return @($devices)
}

function Test-GfDeviceMatches([GfDeviceInfo]$Device, [GfDeviceRequirement]$Req) {
    if ($Req.Arch -ne 'any' -and $Device.Arch -ne $Req.Arch) { return $false }
    if ($Req.TestMode -and -not $Device.TestMode) { return $false }
    if (-not [string]::IsNullOrWhiteSpace($Req.Profile) -and
        $Device.ProfileName -ne $Req.Profile) { return $false }
    return $true
}

function Get-GfConnectedDevices {
    param(
        [AllowEmptyCollection()][object[]]$Devices = @(),
        [Parameter(Mandatory = $true)][string]$Hdc
    )

    $connectedSerials = @(Get-GfHdcTargetSerials -Hdc $Hdc)
    if ($connectedSerials.Count -eq 0) { return }
    foreach ($device in @($Devices)) {
        if ($null -eq $device -or
            -not ($device.PSObject.Properties.Name -contains 'Serial')) {
            continue
        }
        if ($connectedSerials -contains [string]$device.Serial) {
            $device
        }
    }
}

function Get-GfDeviceSerials {
    param([AllowEmptyCollection()][object[]]$Devices = @())

    foreach ($device in @($Devices)) {
        if ($null -eq $device -or
            -not ($device.PSObject.Properties.Name -contains 'Serial')) {
            continue
        }
        $serial = [string]$device.Serial
        if (-not [string]::IsNullOrWhiteSpace($serial)) { $serial }
    }
}

# Screen keep-on contract: HDK power-shell is the only supported mechanism.
# Every device run overrides the timeout up front and restores it in finally.
# Set $Global:GfKeepScreenOn = $false before invoking to disable (hub_family_test keepScreenOn=false).
# Longest frozen stability budget is Clash=60 min; leave teardown headroom.
$script:GfScreenKeepOnTimeoutMs = 2 * 60 * 60 * 1000
$script:GfPowerCommandMaxAttempts = 3

function Test-GfKeepScreenOnEnabled() {
    if ($null -eq $Global:GfKeepScreenOn) { return $true }
    return [bool]$Global:GfKeepScreenOn
}

function Invoke-GfDevicePowerCommand([string]$Hdc, [string]$Serial,
    [string[]]$Arguments, [string]$Operation) {
    for ($attempt = 1; $attempt -le $script:GfPowerCommandMaxAttempts; $attempt++) {
        $output = @(& $Hdc -t $Serial shell power-shell @Arguments 2>&1)
        $failed = $LASTEXITCODE -ne 0 -or
            @($output | Where-Object { $_ -match '^\s*\[Fail\]' }).Count -gt 0
        if (-not $failed) { return }
        if ($attempt -lt $script:GfPowerCommandMaxAttempts) {
            Start-Sleep -Milliseconds (200 * $attempt)
        }
    }
    throw "GfDeviceRunner: power-shell $Operation failed on $Serial after $script:GfPowerCommandMaxAttempts attempts."
}

function Enable-GfDeviceScreenKeepOn([string]$Hdc, [string]$Serial) {
    if (-not (Test-GfKeepScreenOnEnabled)) { return }
    Invoke-GfDevicePowerCommand -Hdc $Hdc -Serial $Serial -Arguments @('wakeup') -Operation 'wakeup'
    Invoke-GfDevicePowerCommand -Hdc $Hdc -Serial $Serial `
        -Arguments @('timeout', '-o', [string]$script:GfScreenKeepOnTimeoutMs) -Operation 'timeout override'
}

function Restore-GfDeviceScreenKeepOn([string]$Hdc, [string]$Serial) {
    if (-not (Test-GfKeepScreenOnEnabled)) { return }
    Invoke-GfDevicePowerCommand -Hdc $Hdc -Serial $Serial `
        -Arguments @('timeout', '-r') -Operation 'timeout restore'
}

function Restore-GfDeviceScreenKeepOnPreservingFailure([string]$Hdc, [string]$Serial,
    [AllowNull()][object]$PrimaryError) {
    try {
        Restore-GfDeviceScreenKeepOn $Hdc $Serial
    } catch {
        if ($null -eq $PrimaryError) { throw }
        Write-Warning "GfDeviceRunner: screen timeout restore also failed on $Serial; preserving primary failure: $($_.Exception.Message)"
    }
}

function ConvertTo-GfShellLiteral([string]$Value) {
    return "'" + $Value.Replace("'", "'\''") + "'"
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
        if ([string]::IsNullOrWhiteSpace($name) -or $Captures.Contains($name)) { continue }
        # 官方 uitest CLI 只支持落盘 /data/local/tmp（HDK arkxtest 指南），由 uitest 进程
        # 写入、host 可直接 recv；-a 保留颜色/字号属性，供后续对比度类检查使用。
        $remotePng = "/data/local/tmp/gfvisual/$name.png"
        $remoteJson = "/data/local/tmp/gfvisual/$name.json"
        $checkpointDir = Get-GfVisualCheckpointDir -ArtifactDir $ArtifactDir -Serial $Serial -Name $name
        [IO.Directory]::CreateDirectory($checkpointDir) | Out-Null
        $capture = [pscustomobject]@{
            name = $name; status = 'captured'; drift = ''; error = ''
            png = (Join-Path $checkpointDir 'actual.png'); layout = (Join-Path $checkpointDir 'layout.json')
        }
        try {
            Invoke-GfHdcChecked $Hdc $Serial @('shell', 'rm', '-f', $remotePng, $remoteJson) `
                "stale visual staging for $name" | Out-Null
            Invoke-GfHdcChecked $Hdc $Serial @('shell', 'uitest', 'screenCap', '-p', $remotePng) `
                "uitest screenCap for $name" | Out-Null
            Invoke-GfHdcChecked $Hdc $Serial @('shell', 'uitest', 'dumpLayout', '-p', $remoteJson, '-a') `
                "uitest dumpLayout for $name" | Out-Null
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
        $Sink.Add("===== visual capture $name (status=$($capture.status); drift=$($capture.drift); error=$($capture.error)) =====")
    }
}

function Invoke-GfVisualCheckpoint {
    param(
        [string]$Hdc,
        [string]$Serial,
        [string]$PlatformRoot,
        [string]$ArtifactDir,
        [object]$Check
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

    $providerOutput = @(& $node $provider --spec $specPath --actual $screenshotPath `
        --layout $layoutPath --output $reportDir 2>&1 | ForEach-Object { [string]$_ })
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
        'themes', 'locales', 'networks', 'dataStates')
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
    # 从 suite.device 读取显式要求
    if ($Suite.PSObject.Properties.Name -contains 'device') {
        $d = $Suite.device
        if ($d.PSObject.Properties.Name -contains 'profile') { $req.Profile = [string]$d.profile }
        if ($d.PSObject.Properties.Name -contains 'arch') { $req.Arch = [string]$d.arch }
        if ($d.PSObject.Properties.Name -contains 'testmode') { $req.TestMode = [bool]$d.testmode }
    }
    # lane 默认路由：semantic-contract / visual-contract 需要 testmode 设备
    if ($Suite.lane -in @('semantic-contract', 'visual-contract')) { $req.TestMode = $true }
    return $req
}

function Invoke-GfCangjieDeviceSuite {
    param(
        [string]$SuiteKey,
        [string]$AppName,
        [object]$Suite,
        [string]$AppRoot,
        [string]$PlatformRoot,
        [string]$ArtifactDir,
        [object[]]$Devices
    )

    $result = [GfDeviceRunResult]::new()
    $result.SuiteKey = $SuiteKey
    $req = Get-GfDeviceRequirement $Suite
    $matching = @($Devices | Where-Object { Test-GfDeviceMatches $_ $req })
    if ($matching.Count -eq 0) {
        $result.Status = 'blocked'
        $result.Detail = "no matching Cangjie device (arch=$($req.Arch), profile=$($req.Profile))"
        Write-Warning "  BLOCKED   $SuiteKey - $($result.Detail)"
        return $result
    }

    $device = $matching[0]
    $result.DeviceSerial = $device.Serial
    $result.Arch = $device.Arch
    $result.TestMode = $device.TestMode
    $result.IsEmulator = $device.IsEmulator
    $result.DeviceClass = $device.DeviceClass
    $result.DeviceProfile = $device.ProfileName
    $result.LandscapeSupported = $device.LandscapeSupported
    [IO.Directory]::CreateDirectory($ArtifactDir) | Out-Null
    $result.LogPath = Join-Path $ArtifactDir 'godfrey-cangjie-device.log'
    # The Cangjie device runner is app-owned (apps/<App>/scripts/cangjie-device.ps1);
    # the family declares the pass anchors in its suite executor, the Hub only
    # launches and relays them.
    $script = Join-Path $AppRoot 'scripts/cangjie-device.ps1'
    if (-not (Test-Path -LiteralPath $script -PathType Leaf)) {
        throw "App-owned Cangjie device runner is missing: $script"
    }
    $executor = $Suite.executor
    foreach ($anchor in @('expectedSuites', 'expectedTests')) {
        if (-not ($executor.PSObject.Properties.Name -contains $anchor) -or
            [int]$executor.$anchor -le 0) {
            throw "GfDeviceRunner: suite '$SuiteKey' executor must declare a positive $anchor in family-tests.json (pass anchors are family-owned)."
        }
    }

    Write-Host "  RUN       $SuiteKey on device=$($device.Serial) via app-owned Cangjie runner"
    try {
        $prepareOutput = @(Invoke-GfInstrumentPreparation $AppName $device.Serial 'Cangjie')
        $powerShell = (Get-Process -Id $PID).Path
        $runOutput = @(& $powerShell -NoProfile -ExecutionPolicy Bypass -File $script `
            -RepoRoot $PlatformRoot -AppRoot $AppRoot -Target $device.Serial `
            -ArtifactDir $ArtifactDir `
            -ExpectedSuites ([int]$executor.expectedSuites) -ExpectedTests ([int]$executor.expectedTests) `
            2>&1 | ForEach-Object { [string]$_ })
        $exitCode = $LASTEXITCODE
        @($prepareOutput + $runOutput) | Set-Content -LiteralPath $result.LogPath -Encoding UTF8
        if ($exitCode -ne 0) {
            throw "Cangjie runner exited with $exitCode."
        }
        # 计数派生自运行器自己的权威汇总行，不信注册表里的魔数；该脚本在任一声明类
        # 未执行或零用例时本身就会失败。
        $summaryLine = @($runOutput | Where-Object { $_ -match '^PASS:\s*(\d+)\s*suites?,\s*(\d+)\s+tests?' }) |
            Select-Object -Last 1
        if ($null -eq $summaryLine -or $summaryLine -notmatch '^PASS:\s*(\d+)\s*suites?,\s*(\d+)\s+tests?') {
            # 与 Instrument 路径同一口径：没有权威汇总就没有证据，不得凭退出码 0 造数。
            throw 'Cangjie runner exited 0 without an authoritative "PASS: N suites, M tests" summary.'
        }
        $result.Status = 'passed'
        $result.Passed = [int]$Matches[2]
        $result.Detail = ("Cangjie clean build/deploy and device contracts passed " +
            "(suites=$($Matches[1]), tests=$($Matches[2])).")
    } catch {
        $_ | Out-String | Add-Content -LiteralPath $result.LogPath -Encoding UTF8
        $result.Status = 'failed'
        $result.Failed = 1
        $result.Detail = $_.Exception.Message
    }
    return $result
}

<#
  在匹配设备上执行 instrument 测试并回收结果。
  返回 GfDeviceRunResult。
#>
function Invoke-GfInstrumentSuite {
    param(
        [string]$SuiteKey,
        [string]$AppName,
        [object]$Suite,
        [string]$BundleName,
        [string]$AbilityName = 'EntryAbility',
        [string]$AppModuleName = 'entry',
        [string]$ModuleName = 'entry_test',
        [string[]]$TestClasses,
        [string]$AppRoot,
        [string]$PlatformRoot,
        [string]$ArtifactDir,
        [object[]]$Devices,
        [string]$DeviceProfile = '',
        [string]$CandidateId = '',
        [object[]]$UiDevicePool = @(),
        [switch]$ColdStart,
        [string]$AnchorRulePath = '',
        [string]$UiAuditScript = ''
    )

    $suiteWatch = [Diagnostics.Stopwatch]::StartNew()
    $result = [GfDeviceRunResult]::new()
    $result.SuiteKey = $SuiteKey

    $req = Get-GfDeviceRequirement $Suite
    if (-not [string]::IsNullOrWhiteSpace($DeviceProfile)) { $req.Profile = $DeviceProfile }
    $matching = @($Devices | Where-Object { Test-GfDeviceMatches $_ $req })

    if ($matching.Count -eq 0) {
        $reason = "no matching device (arch=$($req.Arch), testmode=$($req.TestMode), profile=$($req.Profile)); connected=$($Devices.Count)"
        if (-not [string]::IsNullOrWhiteSpace($req.Profile)) {
            $reason = "UI device pool profile '$($req.Profile)' has no connected device (arch=$($req.Arch), testmode=$($req.TestMode)); connected=$($Devices.Count)"
        }
        $result.Status = 'blocked'
        $result.Detail = $reason
        $suiteWatch.Stop()
        $result.Timings = [pscustomobject]@{ totalMs = $suiteWatch.ElapsedMilliseconds }
        Write-Warning "  BLOCKED   $SuiteKey - $reason"
        return $result
    }

    $device = $matching[0]
    $result.DeviceSerial = $device.Serial
    $result.Arch = $device.Arch
    $result.TestMode = $device.TestMode
    $result.IsEmulator = $device.IsEmulator
    $result.DeviceClass = $device.DeviceClass
    $result.DeviceProfile = $device.ProfileName
    $result.LandscapeSupported = $device.LandscapeSupported
    $hdc = Get-HdcPath

    $classes = @($TestClasses | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
    if ($classes.Count -eq 0) {
        throw "GfDeviceRunner: $SuiteKey must declare at least one testClasses entry."
    }
    foreach ($testClass in $classes) {
        if ($testClass -notmatch '^[A-Za-z_][A-Za-z0-9_.-]*$') {
            throw "GfDeviceRunner: invalid aa test class '$testClass' in $SuiteKey."
        }
    }
    $visualChecks = @(Get-GfCollectionProperty -InputObject $Suite.executor -Name 'visualChecks')
    foreach ($visualCheck in $visualChecks) {
        if (-not ($classes -contains [string]$visualCheck.afterClass)) {
            throw "GfDeviceRunner: $SuiteKey visualChecks.afterClass must name an ordered testClasses entry."
        }
    }

    if (-not (Test-Path -LiteralPath $ArtifactDir)) {
        [IO.Directory]::CreateDirectory($ArtifactDir) | Out-Null
    }
    $safeSerial = $device.Serial -replace '[^A-Za-z0-9_.-]', '_'
    $logPath = Join-Path $ArtifactDir "$($SuiteKey -replace '\.', '_')-$safeSerial.log"
    $result.LogPath = $logPath

    Write-Host "  RUN       $SuiteKey on device=$($device.Serial) arch=$($device.Arch) testmode=$($device.TestMode)"

    # 清理旧 hilog，执行测试，收集日志
    $previousErrorPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    $screenGuardEnabled = $false
    $primaryExecutionError = $null
    $testOutput = [Collections.Generic.List[string]]::new()
    $scopeFailures = [Collections.Generic.List[string]]::new()
    $hilog = @()
    try {
        Enable-GfDeviceScreenKeepOn $hdc $device.Serial
        $screenGuardEnabled = $true
        try {
            & $hdc -t $device.Serial shell hilog -r 2>$null | Out-Null
        } catch { }

        # The first suite in an App/device campaign performs the authoritative
        # clean build + fresh install. Later suites consume the exact installed
        # artifacts and their hashes. This preserves from-zero evidence without
        # rebuilding and reinstalling the same bits for every visual contract.
        $preparation = Ensure-GfInstrumentCampaignPreparation -AppName $AppName `
            -Serial $device.Serial -TestTarget 'ArkTS' -PlatformRoot $PlatformRoot `
            -BundleName $BundleName -AppRoot $AppRoot
        $campaign = $preparation.Campaign
        $result.Preparation = $preparation.Evidence
        foreach ($line in @($preparation.LogLines)) { $testOutput.Add([string]$line) }
        if ($ColdStart) {
            # 冷态战役：清应用数据，让首跑门禁/空态/引导分支真实执行。
            # 脏态设备永远走不到这些分支——Clash 代理 tab 与 Quiz 头像的空态
            # 崩溃正是因此逃过检测。
            $testOutput.Add("===== coldStart: wiping app data for $BundleName =====")
            Invoke-GfHdcChecked $hdc $device.Serial @('shell', 'aa', 'force-stop', $BundleName) `
                'force-stop before cold wipe' | Out-Null
            Invoke-GfHdcChecked $hdc $device.Serial @('shell', 'bm', 'clean', '-n', $BundleName, '-d') `
                'cold wipe app data' | Out-Null
        }
        if ($visualChecks.Count -gt 0) {
            # 视觉暂存域：shell 自有目录。Enforcing SELinux 下 host 对应用缓存目录
            # （app 数据标签）读写均被拒，产物改由 uitest daemon 落在 /data/local/tmp/gfvisual，
            # host 凭 checkpoint marker 的绝对路径 recv。横屏能力改经 aa test -s 下发，
            # portrait-only 设备上的旋转类用例在设备侧直接空转，保证 Mate 80 Pro 只测竖屏。
            Invoke-GfHdcChecked $hdc $device.Serial @('shell',
                'rm -rf /data/local/tmp/gfvisual && mkdir -p /data/local/tmp/gfvisual') `
                'visual staging directory reset' | Out-Null
        }

        $visualClasses = [Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
        foreach ($visualCheck in $visualChecks) { [void]$visualClasses.Add([string]$visualCheck.afterClass) }
        $runClasses = [Collections.Generic.List[string]]::new()
        $reusedClasses = [Collections.Generic.List[string]]::new()
        foreach ($testClass in $classes) {
            # A visual producer always executes because its files are suite-local.
            # Other already-passed setup/fixture classes are safe campaign evidence
            # and must not replay onboarding from the beginning.
            if (-not $ColdStart -and
                $campaign.PassedClasses.Contains($testClass) -and
                -not $visualClasses.Contains($testClass)) {
                $reusedClasses.Add($testClass)
            } else {
                $runClasses.Add($testClass)
            }
        }
        $result.ExecutedClasses = @($runClasses)
        $result.ReusedClasses = @($reusedClasses)
        foreach ($testClass in $reusedClasses) {
            $testOutput.Add("===== reused passed class $testClass from current campaign =====")
        }

        if ($runClasses.Count -gt 0) {
            # API 26 aa-test supports an ordered comma-separated class filter. One
            # shell owns one default UITest daemon and the entire suite selection;
            # the production App is brought to the foreground without force-stop,
            # preserving its process and navigation state across suite boundaries.
            $classFilter = @($runClasses) -join ','
            $aaShell = 'killall -9 uitest 2>/dev/null || true; ' +
                'for i in 1 2 3 4 5; do pidof uitest >/dev/null || break; sleep 1; done; ' +
                'pidof uitest >/dev/null && exit 70 || true; ' +
                'param set persist.ace.testmode.enabled 1 || exit 73; ' +
                'aa start -b ' + (ConvertTo-GfShellLiteral $BundleName) +
                ' -a ' + (ConvertTo-GfShellLiteral $AbilityName) +
                ' -m ' + (ConvertTo-GfShellLiteral $AppModuleName) + ' || exit 74; ' +
                'sleep 1; ' +
                'uitest start-daemon default 2>/dev/null & daemon_pid=$!; ' +
                'for i in 1 2 3 4 5; do pidof uitest >/dev/null && break; sleep 1; done; ' +
                'pidof uitest >/dev/null || exit 71; aa test' +
                " -b '$BundleName' -m '$ModuleName'" +
                " -s unittest /ets/testrunner/OpenHarmonyTestRunner" +
                " -s page '@ohos/hypium' -s class '$classFilter' -s timeout 120000" +
                " -s gfVisualLandscape $(if ($device.LandscapeSupported) { 'true' } else { 'false' })"
            $serialToken = ($device.Serial -replace '[^A-Za-z0-9_.-]', '_')
            $scopeLogPath = Join-Path $ArtifactDir "campaign-$serialToken.log"
            $scopeErrPath = Join-Path $ArtifactDir "campaign-$serialToken.err.log"
            # campaign 异步执行：设备端 marker 经 hilog 发出后用例静止一个捕获窗口，
            # host 必须在窗口内用官方 uitest CLI 采集 /data/local/tmp 产物。
            $scopeProc = $null
            try {
                $scopeProc = Start-Process -FilePath $hdc `
                    -ArgumentList @('-t', $device.Serial, 'shell', $aaShell) `
                    -PassThru -NoNewWindow -RedirectStandardOutput $scopeLogPath -RedirectStandardError $scopeErrPath
            } catch { $scopeProc = $null }
            $visualCaptures = @{}
            if ($null -ne $scopeProc) {
                while (-not $scopeProc.HasExited) {
                    Start-Sleep -Milliseconds 400
                    Invoke-GfVisualMarkerSweep -Hdc $hdc -Serial $device.Serial -ArtifactDir $ArtifactDir `
                        -Captures $visualCaptures -Sink $testOutput
                }
                $scopeProc.WaitForExit()
                Invoke-GfVisualMarkerSweep -Hdc $hdc -Serial $device.Serial -ArtifactDir $ArtifactDir `
                    -Captures $visualCaptures -Sink $testOutput
                $scopeOutput = @(Get-Content -LiteralPath $scopeLogPath -ErrorAction SilentlyContinue |
                    ForEach-Object { [string]$_ })
                $scopeExit = $scopeProc.ExitCode
            } else {
                # hdc 不可作为独立进程启动（自检桩）：退回同步执行，无捕获窗口轮询。
                $scopeOutput = @(& $hdc -t $device.Serial shell $aaShell 2>&1)
                $scopeExit = $LASTEXITCODE
            }
            if ($null -eq $script:GfVisualCapturesBySerial) { $script:GfVisualCapturesBySerial = @{} }
            $script:GfVisualCapturesBySerial[$device.Serial] = $visualCaptures
            $scopeText = $scopeOutput -join "`n"
            $testOutput.Add("===== class campaign $classFilter (hdc exit=$scopeExit) =====")
            foreach ($line in $scopeOutput) { $testOutput.Add([string]$line) }
            $result.ClassResults = @(Get-GfInstrumentClassResults -OutputText $scopeText `
                -TestClasses @($runClasses))

            $summaries = [regex]::Matches($scopeText,
                'Tests run:\s*(\d+)\s*,\s*Failure:\s*(\d+)\s*,\s*Error:\s*(\d+)\s*,\s*Pass:\s*(\d+)\s*,\s*Ignore:\s*(\d+)',
                [Text.RegularExpressions.RegexOptions]::IgnoreCase)
            if ($summaries.Count -eq 0) {
                $scopeFailures.Add((Get-GfMissingInstrumentSummaryDetail `
                    -TestClass $classFilter -ScopeText $scopeText -ScopeExit $scopeExit))
            } else {
                $summary = $summaries[$summaries.Count - 1]
                $run = [int]$summary.Groups[1].Value
                $failure = [int]$summary.Groups[2].Value
                $errorCount = [int]$summary.Groups[3].Value
                $pass = [int]$summary.Groups[4].Value
                $ignore = [int]$summary.Groups[5].Value
                $result.Passed += $pass
                $result.Failed += $failure + $errorCount
                $result.Skipped += $ignore
                if ($scopeExit -ne 0) {
                    $scopeFailures.Add("${classFilter}: hdc exit=$scopeExit")
                } elseif ($run -le 0) {
                    $scopeFailures.Add("${classFilter}: zero tests executed")
                } elseif ($run -ne ($pass + $failure + $errorCount + $ignore)) {
                    $scopeFailures.Add("${classFilter}: non-closing test summary run=$run accounted=$($pass + $failure + $errorCount + $ignore)")
                } elseif ($failure -gt 0 -or $errorCount -gt 0) {
                    $scopeFailures.Add("${classFilter}: Failure=$failure Error=$errorCount")
                } elseif ($ignore -gt 0) {
                    $scopeFailures.Add("${classFilter}: Ignore=$ignore exceeds the zero-ignore contract")
                }
                if ($scopeExit -eq 0 -and $scopeFailures.Count -eq 0) {
                    foreach ($testClass in $runClasses) { [void]$campaign.PassedClasses.Add($testClass) }
                    # Persist the proven setup classes against the exact deployed
                    # artifacts so the next opt-in run can skip the shared prefix.
                    Update-GfPrepareCachePassedClasses -PlatformRoot $PlatformRoot -AppName $AppName `
                        -Serial $device.Serial -TestTarget 'ArkTS' -AppRoot $AppRoot `
                        -BundleName $BundleName -Evidence $result.Preparation `
                        -PassedClasses @($campaign.PassedClasses)
                }
            }
        } elseif ($reusedClasses.Count -gt 0) {
            # Every requested class has already passed against the same installed
            # artifacts in this process. Retain an explicit non-zero proof count.
            $result.Passed = $reusedClasses.Count
        }

        $visualMatrixSources = @()
        $deviceClassesValue = if ([string]::IsNullOrWhiteSpace($result.DeviceClass)) { 'phone' } else { $result.DeviceClass }
        foreach ($visualCheck in $visualChecks) {
            $checkOrientation = if ($visualCheck.PSObject.Properties.Name -contains 'orientation') {
                [string]$visualCheck.orientation
            } else { 'portrait' }
            if ($checkOrientation -eq 'landscape' -and -not $device.LandscapeSupported) {
                $testOutput.Add("===== visual $([string]$visualCheck.name) skipped: device profile '$($device.ProfileName)' covers portrait only =====")
                continue
            }
            $testClass = [string]$visualCheck.afterClass
            $classTerminal = @($result.ClassResults | Where-Object { [string]$_.name -eq $testClass })
            if ($classTerminal.Count -eq 0 -or [string]$classTerminal[0].status -ne 'passed') {
                $testOutput.Add("===== visual $([string]$visualCheck.name) skipped: producer class $testClass did not pass =====")
                continue
            }
            try {
                $visualEvidence = Invoke-GfVisualCheckpoint -Hdc $hdc -Serial $device.Serial `
                    -PlatformRoot $PlatformRoot -ArtifactDir $ArtifactDir -Check $visualCheck
                $result.VisualEvidence = @($result.VisualEvidence) + @($visualEvidence)
                $testOutput.Add("===== visual $([string]$visualCheck.name) (status=$([string]$visualEvidence.status)) =====")
                $testOutput.Add(($visualEvidence | ConvertTo-Json -Compress -Depth 20))
                if ([string]$visualEvidence.status -ne 'passed' -or [int]$visualEvidence.exitCode -ne 0) {
                    $scopeFailures.Add("${testClass}: visual checkpoint '$([string]$visualCheck.name)' failed")
                } else {
                    # A passed visual checkpoint turns the spec's declared states into
                    # matrix coverage so executed theme/locale/window/data variants are
                    # recorded as evidence rather than silently dropped. `spec` is
                    # optional (the registry only requires afterClass), so guard it
                    # instead of touching a missing property under StrictMode.
                    $hasSpec = $visualCheck.PSObject.Properties.Name -contains 'spec' -and
                        -not [string]::IsNullOrWhiteSpace([string]$visualCheck.spec)
                    if ($hasSpec) {
                        $specFullPath = [IO.Path]::GetFullPath((Join-Path $PlatformRoot ([string]$visualCheck.spec)))
                        if (Test-Path -LiteralPath $specFullPath -PathType Leaf) {
                            try {
                                $specObj = Get-Content -Raw -Encoding UTF8 -LiteralPath $specFullPath | ConvertFrom-Json
                                $stateDims = ConvertTo-GfVisualMatrixDimensions -States @($specObj.states)
                                $stateDims['deviceClasses'] = @($deviceClassesValue)
                                $visualMatrixSources += $stateDims
                            } catch {
                                $scopeFailures.Add("${testClass}: visual spec states for '$([string]$visualCheck.name)' could not be parsed: $($_.Exception.Message)")
                            }
                        }
                    }
                }
            } catch {
                $scopeFailures.Add("${testClass}: visual checkpoint '$([string]$visualCheck.name)' infrastructure failure: $($_.Exception.Message)")
            }
        }

        # 必需锚点审计是编排方注入的能力：本 runner 只负责在设备现场执行，规则文件与
        # 审计入口都由调用方传入，不假设任何仓库布局；任一未注入即跳过该步骤。
        # 仪器战役结束后应用停留在末个用例的界面，先 force-stop 再 -Launch 回到
        # 首屏，保证锚点审计的屏幕确定；DeviceToken 防止同 Run 多设备互相覆盖。
        if (-not [string]::IsNullOrWhiteSpace($AnchorRulePath) -and
            -not [string]::IsNullOrWhiteSpace($UiAuditScript) -and
            (Test-Path -LiteralPath $AnchorRulePath -PathType Leaf) -and
            -not [string]::IsNullOrWhiteSpace($CandidateId)) {
            $auditSerialToken = ($device.Serial -replace '[^A-Za-z0-9_.-]', '_')
            $poolEntry = @($UiDevicePool | Where-Object { [string]$_.profile -eq [string]$device.ProfileName })
            $auditDensity = if ($poolEntry.Count -eq 1) { [double]$poolEntry[0].densityPixels } else { 0 }
            $testOutput.Add("===== ui-audit $AppName required-ui-anchors (device=$auditSerialToken) =====")
            try {
                Invoke-GfHdcChecked $hdc $device.Serial @('shell', 'aa', 'force-stop', $BundleName) `
                    'force-stop before required-anchor audit' | Out-Null
            } catch {
                $testOutput.Add("ui-audit force-stop warning: $($_.Exception.Message)")
            }
            $auditOutput = @(& $UiAuditScript -RepoRoot $PlatformRoot -App $AppName -CandidateId $CandidateId `
                -DeviceToken $auditSerialToken -RulePath $AnchorRulePath -BundleName $BundleName `
                -Target $device.Serial -HdcPath $hdc -DensityPixels $auditDensity -Launch 2>&1 |
                ForEach-Object { [string]$_ })
            $auditExit = $LASTEXITCODE
            foreach ($line in $auditOutput) { $testOutput.Add($line) }
            if ($auditExit -ne 0) {
                $scopeFailures.Add("$AppName required-ui-anchors audit failed on $auditSerialToken (exit=$auditExit)")
            }
        }

        # 收集 hilog（Hypium 输出在 hilog 中）
        try {
            $hilog = @(& $hdc -t $device.Serial shell hilog -x 2>$null)
        } catch { }
    } catch {
        $primaryExecutionError = $_
        $testOutput.Add("===== infrastructure failure =====")
        $testOutput.Add($_.Exception.Message)
        if ($_.Exception.Data.Contains('GfPreparationOutput')) {
            foreach ($line in @($_.Exception.Data['GfPreparationOutput'])) {
                $testOutput.Add([string]$line)
            }
        }
        try {
            $hilog = @(& $hdc -t $device.Serial shell hilog -x 2>$null)
        } catch { }
    } finally {
        try {
            if ($screenGuardEnabled) {
                try {
                    # A missing/failed authoritative test summary is already the primary
                    # suite failure even though it is accumulated rather than thrown. If
                    # the target disappears at the same time, preserve that root failure
                    # instead of replacing it with the inevitable timeout-restore error.
                    $cleanupPrimaryError = $primaryExecutionError
                    if ($null -eq $cleanupPrimaryError -and $scopeFailures.Count -gt 0) {
                        $cleanupPrimaryError = [InvalidOperationException]::new($scopeFailures -join '; ')
                    }
                    Restore-GfDeviceScreenKeepOnPreservingFailure $hdc $device.Serial $cleanupPrimaryError
                } catch {
                    # A teardown failure is authoritative infrastructure evidence, but it
                    # must remain a suite result so the family loop can finish and emit its
                    # complete report. Never let cleanup mask or abort the aggregate run.
                    if ($null -eq $primaryExecutionError) {
                        $primaryExecutionError = $_
                        $testOutput.Add("===== cleanup failure =====")
                        $testOutput.Add($_.Exception.Message)
                    }
                }
            }
        } finally {
            $ErrorActionPreference = $previousErrorPreference
        }
    }

    if ($null -ne $primaryExecutionError) {
        $suiteWatch.Stop()
        $result.Timings = [pscustomobject]@{ totalMs = $suiteWatch.ElapsedMilliseconds }
        $outputText = (@($testOutput) + @($hilog)) -join "`n"
        [IO.File]::WriteAllText($logPath, $outputText, [Text.UTF8Encoding]::new($false))
        $result.Status = 'failed'
        $result.Failed = 1
        $result.Detail = $primaryExecutionError.Exception.Message
        Write-Host "  FAIL $($result.SuiteKey) - $($result.Detail)"
        return $result
    }

    $allOutput = @($testOutput) + @($hilog)
    $outputText = $allOutput -join "`n"
    [IO.File]::WriteAllText($logPath, $outputText, [Text.UTF8Encoding]::new($false))
    $systemUiPrerequisiteDetail = Get-GfSystemUiPrerequisiteDetail -Text $outputText

    # 业务变异/故障、质量数值与矩阵覆盖必须由套件明确输出；编排器不得根据
    # “测试进程退出 0”自行推断。Marker 的 JSON 必须单行，便于保留原始日志证据。
    $markerError = ''
    foreach ($marker in @(
        @{ Name = 'GF_JOURNEY_PROOF'; Target = 'journey' },
        @{ Name = 'GF_MATRIX_COVERAGE'; Target = 'matrix' },
        @{ Name = 'GF_PERFORMANCE_METRICS'; Target = 'performance' },
        @{ Name = 'GF_STABILITY_METRICS'; Target = 'stability' }
    )) {
        $matches = [regex]::Matches($outputText, "(?m)$($marker.Name):\s*(\{[^\r\n]+\})\s*$")
        if ($matches.Count -eq 0) { continue }
        # Long-running and sharded suites may emit several samples. The last
        # complete marker describes the final requested interaction/window.
        $match = $matches[$matches.Count - 1]
        try {
            $value = $match.Groups[1].Value | ConvertFrom-Json
            switch ($marker.Target) {
                'journey' {
                    if ($value.PSObject.Properties.Name -contains 'mutationOrFaultProof') {
                        $result.MutationOrFaultProof = [bool]$value.mutationOrFaultProof
                    }
                }
                'matrix' { $result.MatrixCoverage = $value }
                'performance' { $result.PerformanceMetrics = $value }
                'stability' { $result.StabilityMetrics = $value }
            }
        } catch {
            $markerError = "$($marker.Name) contains invalid JSON: $($_.Exception.Message)"
            break
        }
    }

    # Fold visual-checkpoint-derived coverage (executed theme/locale/window/data
    # states plus device class and execution environment) into the suite matrix,
    # merging with any GF_MATRIX_COVERAGE marker so neither source is dropped.
    if ($null -ne $visualMatrixSources -and @($visualMatrixSources).Count -gt 0) {
        $result.MatrixCoverage = Merge-GfMatrixDimensions -Sources (
            @($result.MatrixCoverage) + @($visualMatrixSources))
    }

    # A suite that advertises the performance layer must carry measured
    # evidence. Instrument/native render probes may also publish an explicit
    # budget verdict; a successful aa-test exit code is not performance proof.
    if (@($Suite.layers) -contains 'performance') {
        if ($null -eq $result.PerformanceMetrics) {
            $markerError = 'performance layer did not emit GF_PERFORMANCE_METRICS'
        } elseif ($result.PerformanceMetrics.PSObject.Properties.Name -contains 'withinBudget' -and
            -not [bool]$result.PerformanceMetrics.withinBudget) {
            $markerError = 'measured interaction performance exceeded its declared budget'
        }
    }

    # 逐锚点闭环证据（交互执行 + clickable 枚举）：每条一个单行 marker。
    $closureEntries = [Collections.Generic.List[object]]::new()
    foreach ($closureMatch in [regex]::Matches($outputText, '(?m)GF_UI_CLOSURE:\s*(\{[^\r\n]+\})\s*$')) {
        try {
            $closureEntries.Add(($closureMatch.Groups[1].Value | ConvertFrom-Json))
        } catch {
            $markerError = "GF_UI_CLOSURE contains invalid JSON: $($_.Exception.Message)"
            break
        }
    }
    $result.ClosureEvidence = @($closureEntries)

    # 能力缺失标记：本设备无法执行的能力（如 portrait-only 上的横屏旋转）必须显式
    # 记 blocked，不能因为"用例自己跳过了"就算通过。
    $blockedCapabilities = @(Get-GfBlockedCapabilityEvidence $outputText)
    $result.BlockedCapabilityEvidence = @($blockedCapabilities)

    # aa test 的退出码、Tests run 汇总与 Failure/Error 是 instrument 的权威结果。
    # 测试 Ability 正常结束也会产生 HandleAppDied；不得把进程生命周期收尾误报为崩溃。
    if ($markerError) {
        $result.Status = 'failed'
        $result.Detail = $markerError
        $result.Failed = [Math]::Max($result.Failed, 1)
    } elseif ($systemUiPrerequisiteDetail -and
        ($scopeFailures.Count -gt 0 -or $result.Failed -gt 0 -or $result.Passed -le 0)) {
        # A first-run system IME guide owns the focused window and makes an application
        # interaction contract unobservable. Keep this as an actionable device prerequisite;
        # never blame the app or silently accept system onboarding on the user's behalf.
        $result.Status = 'blocked'
        $result.Detail = $systemUiPrerequisiteDetail
        $result.Failed = 0
    } elseif ($scopeFailures.Count -gt 0) {
        $result.Status = 'failed'
        $result.Detail = $scopeFailures -join '; '
        $result.Failed = [Math]::Max($result.Failed, 1)
    } elseif ($result.Failed -gt 0) {
        $result.Status = 'failed'
        $result.Detail = "pass=$($result.Passed) fail=$($result.Failed) skip=$($result.Skipped)"
    } elseif ($blockedCapabilities.Count -gt 0) {
        $result.Status = 'blocked'
        $result.Detail = "capability unavailable: $(Get-GfBlockedCapabilityDetail $blockedCapabilities)"
    } elseif ($result.Passed -gt 0) {
        $result.Status = 'passed'
        $result.Detail = "pass=$($result.Passed) fail=0 skip=$($result.Skipped)"
    } else {
        $result.Status = 'failed'
        $result.Detail = 'no test cases executed (check log)'
    }

    $mark = if ($result.Status -eq 'passed') { 'PASS' } elseif ($result.Status -eq 'blocked') { 'BLOCKED' } else { 'FAIL' }
    $suiteWatch.Stop()
    $result.Timings = [pscustomobject]@{ totalMs = $suiteWatch.ElapsedMilliseconds }
    Write-Host "  $mark $($result.SuiteKey) - $($result.Detail)"
    return $result
}

function Invoke-GfInstrumentCampaign {
    param(
        [string]$AppName,
        [object[]]$Suites,
        [string]$BundleName,
        [string]$AppRoot,
        [string]$PlatformRoot,
        [string]$ArtifactRoot,
        [object[]]$Devices,
        [string]$DeviceProfile = '',
        [string]$CandidateId = '',
        [object[]]$UiDevicePool = @(),
        [string]$AnchorRulePath = '',
        [string]$UiAuditScript = ''
    )
    if (@($Suites).Count -eq 0) { return @() }

    $classNames = [Collections.Generic.List[string]]::new()
    $seenClasses = [Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
    $visualChecks = [Collections.Generic.List[object]]::new()
    $layers = [Collections.Generic.List[string]]::new()
    $seenLayers = [Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
    foreach ($suite in @($Suites)) {
        foreach ($testClass in @($suite.executor.testClasses | ForEach-Object { [string]$_ })) {
            if ($seenClasses.Add($testClass)) { $classNames.Add($testClass) }
        }
        foreach ($visualCheck in @(Get-GfCollectionProperty -InputObject $suite.executor -Name 'visualChecks')) {
            $visualChecks.Add($visualCheck)
        }
        foreach ($layer in @($suite.layers | ForEach-Object { [string]$_ })) {
            if ($seenLayers.Add($layer)) { $layers.Add($layer) }
        }
    }

    $firstSuite = @($Suites)[0]
    $campaignSuite = [pscustomobject]@{
        id = 'instrument-campaign'
        lane = 'semantic-contract'
        layers = @($layers)
        device = $firstSuite.device
        executor = [pscustomobject]@{
            kind = 'godfreyhub'
            mode = 'instrument'
            visualChecks = @($visualChecks)
        }
    }
    $campaignKey = "$AppName.instrument-campaign"
    $campaignArtifactDir = Join-Path $ArtifactRoot $campaignKey
    $campaignCold = @($Suites | Where-Object {
        $_.executor.PSObject.Properties.Name -contains 'coldStart' -and [bool]$_.executor.coldStart
    }).Count -gt 0
    $aggregate = Invoke-GfInstrumentSuite -SuiteKey $campaignKey -AppName $AppName `
        -Suite $campaignSuite -BundleName $BundleName -TestClasses @($classNames) `
        -AppRoot $AppRoot -PlatformRoot $PlatformRoot -ArtifactDir $campaignArtifactDir -Devices $Devices `
        -DeviceProfile $DeviceProfile -CandidateId $CandidateId -UiDevicePool $UiDevicePool `
        -AnchorRulePath $AnchorRulePath -UiAuditScript $UiAuditScript -ColdStart:$campaignCold

    $failedClassNames = @($aggregate.ClassResults | Where-Object { [string]$_.status -eq 'failed' } |
        ForEach-Object { [string]$_.name })
    $failedVisualNames = @($aggregate.VisualEvidence | Where-Object {
        [string]$_.status -ne 'passed' -or [int]$_.exitCode -ne 0
    } | ForEach-Object { [string]$_.name })
    $hasAttributedFailure = $failedClassNames.Count -gt 0 -or $failedVisualNames.Count -gt 0
    $performanceFailure = [string]$aggregate.Detail -match '(?i)performance|budget|presentedFrames|frame'
    $results = [Collections.Generic.List[GfDeviceRunResult]]::new()
    $suiteIndex = 0
    foreach ($suite in @($Suites)) {
        $child = [GfDeviceRunResult]::new()
        $child.SuiteKey = "$AppName.$([string]$suite.id)"
        $child.DeviceSerial = $aggregate.DeviceSerial
        $child.LogPath = $aggregate.LogPath
        $child.Arch = $aggregate.Arch
        $child.TestMode = $aggregate.TestMode
        $child.IsEmulator = $aggregate.IsEmulator
        $child.DeviceClass = $aggregate.DeviceClass
        $child.DeviceProfile = $aggregate.DeviceProfile
        $child.LandscapeSupported = $aggregate.LandscapeSupported
        $child.MutationOrFaultProof = $aggregate.MutationOrFaultProof
        $child.MatrixCoverage = $aggregate.MatrixCoverage
        $child.PerformanceMetrics = $aggregate.PerformanceMetrics
        $child.StabilityMetrics = $aggregate.StabilityMetrics
        $child.ClosureEvidence = @($aggregate.ClosureEvidence)
        $requestedClasses = @($suite.executor.testClasses | ForEach-Object { [string]$_ })
        $child.ExecutedClasses = @($requestedClasses)
        $child.ClassResults = @($aggregate.ClassResults | Where-Object {
            $requestedClasses -contains [string]$_.name
        })
        $expectedVisualNames = @(Get-GfCollectionProperty -InputObject $suite.executor -Name 'visualChecks' |
            ForEach-Object { [string]$_.name })
        $child.VisualEvidence = @($aggregate.VisualEvidence | Where-Object {
            $expectedVisualNames -contains [string]$_.name
        })
        if ($null -ne $aggregate.Preparation) {
            if ($suiteIndex -eq 0) {
                $child.Preparation = $aggregate.Preparation
            } else {
                $child.Preparation = [pscustomobject][ordered]@{
                    cacheHit = $true
                    durationMs = 0
                    artifacts = @($aggregate.Preparation.artifacts)
                }
            }
        }
        $child.Timings = [pscustomobject][ordered]@{
            totalMs = if ($null -ne $aggregate.Timings) { [long]$aggregate.Timings.totalMs } else { 0 }
            sharedCampaign = $true
            logicalSuiteCount = @($Suites).Count
        }

        if ([string]$aggregate.Status -eq 'blocked') {
            $child.Status = 'blocked'
            $child.Detail = $aggregate.Detail
            $results.Add($child)
            $suiteIndex++
            continue
        }

        $failures = [Collections.Generic.List[string]]::new()
        foreach ($testClass in $requestedClasses) {
            $classResult = @($child.ClassResults | Where-Object { [string]$_.name -eq $testClass })
            if ($classResult.Count -eq 0 -or [string]$classResult[0].status -eq 'unknown') {
                $failures.Add("${testClass}: no terminal class result")
            } elseif ([string]$classResult[0].status -eq 'failed') {
                $failures.Add("${testClass}: failed")
            }
        }
        foreach ($visualName in $expectedVisualNames) {
            # portrait-only 设备上，orientation=landscape 的检查点在采集层就被跳过，
            # 不产生证据也不算失败；其余检查点仍要求完整证据链。
            $expectedCheck = @(@($suite.executor.visualChecks) |
                Where-Object { [string]$_.name -eq $visualName })
            $checkOrientation = 'portrait'
            if ($expectedCheck.Count -gt 0 -and
                ($expectedCheck[0].PSObject.Properties.Name -contains 'orientation')) {
                $checkOrientation = [string]$expectedCheck[0].orientation
            }
            if ($checkOrientation -eq 'landscape' -and -not $aggregate.LandscapeSupported) {
                continue
            }
            $visualResult = @($child.VisualEvidence | Where-Object { [string]$_.name -eq $visualName })
            if ($visualResult.Count -eq 0) {
                $failures.Add("visual checkpoint '$visualName' produced no evidence")
            } elseif ([string]$visualResult[0].status -ne 'passed' -or [int]$visualResult[0].exitCode -ne 0) {
                $failures.Add("visual checkpoint '$visualName' failed")
            }
        }
        if ($performanceFailure -and @($suite.layers) -contains 'performance') {
            $failures.Add([string]$aggregate.Detail)
        } elseif ([string]$aggregate.Status -eq 'failed' -and -not $hasAttributedFailure -and
            -not $performanceFailure) {
            $failures.Add([string]$aggregate.Detail)
        }

        # A preparation/infrastructure failure legitimately has no class terminal
        # records. Sum explicitly so an empty collection remains zero under
        # StrictMode instead of throwing while we split the campaign result.
        $passedCount = 0
        $failedCount = 0
        $ignoredCount = 0
        foreach ($classResult in @($child.ClassResults)) {
            $passedCount += [int]$classResult.passed
            $failedCount += [int]$classResult.failed
            if ($classResult.PSObject.Properties.Name -contains 'ignored') {
                $ignoredCount += [int]$classResult.ignored
            }
        }
        $child.Passed = $passedCount
        $child.Failed = $failedCount
        $child.Skipped = $ignoredCount
        # 归属到本套件的类；类边界之外的标记无法定责，campaign 内每个套件都如实上报。
        $childBlocked = @($aggregate.BlockedCapabilityEvidence | Where-Object {
            [string]::IsNullOrWhiteSpace([string]$_.class) -or
                ($requestedClasses -contains [string]$_.class)
        })
        $child.BlockedCapabilityEvidence = @($childBlocked)
        if ($failures.Count -gt 0) {
            $child.Status = 'failed'
            $child.Failed = [Math]::Max(1, $child.Failed)
            $child.Detail = $failures -join '; '
        } elseif (@($childBlocked).Count -gt 0) {
            $child.Status = 'blocked'
            $child.Detail = "capability unavailable: $(Get-GfBlockedCapabilityDetail $childBlocked)"
        } else {
            $child.Status = 'passed'
            $child.Detail = "pass=$($child.Passed) fail=0 skip=$($child.Skipped) (shared App campaign)"
        }
        $results.Add($child)
        $suiteIndex++
    }
    return @($results)
}

function Invoke-GfHypiumSuite {
    param(
        [string]$SuiteKey,
        [string]$AppName,
        [object]$Suite,
        [string]$AppRoot,
        [string]$PlatformRoot,
        [string]$ArtifactDir,
        [object[]]$Devices,
        [string]$DeviceProfile = ''
    )

    $result = [GfDeviceRunResult]::new()
    $result.SuiteKey = $SuiteKey
    $req = Get-GfDeviceRequirement $Suite
    if (-not [string]::IsNullOrWhiteSpace($DeviceProfile)) { $req.Profile = $DeviceProfile }
    $matching = @($Devices | Where-Object { Test-GfDeviceMatches $_ $req })
    if ($matching.Count -eq 0) {
        $result.Status = 'blocked'
        $result.Detail = "no matching device (arch=$($req.Arch), testmode=$($req.TestMode), profile=$($req.Profile)); connected=$($Devices.Count)"
        Write-Warning "  BLOCKED   $SuiteKey - $($result.Detail)"
        return $result
    }

    if ($Suite.executor.PSObject.Properties.Name -contains 'requiredEnvironment') {
        $missingEnvironment = @($Suite.executor.requiredEnvironment | Where-Object {
            [string]::IsNullOrWhiteSpace([Environment]::GetEnvironmentVariable([string]$_))
        })
        if ($missingEnvironment.Count -gt 0) {
            $result.Status = 'blocked'
            $result.Detail = "missing lab environment: $($missingEnvironment -join ', ')"
            Write-Warning "  BLOCKED   $SuiteKey - $($result.Detail)"
            return $result
        }
    }

    $device = $matching[0]
    $result.DeviceSerial = $device.Serial
    $result.Arch = $device.Arch
    $result.TestMode = $device.TestMode
    $result.IsEmulator = $device.IsEmulator
    $result.DeviceClass = $device.DeviceClass
    $result.DeviceProfile = $device.ProfileName
    $result.LandscapeSupported = $device.LandscapeSupported
    if (-not (Test-Path -LiteralPath $ArtifactDir)) {
        [IO.Directory]::CreateDirectory($ArtifactDir) | Out-Null
    }

    $workingDirectory = [IO.Path]::GetFullPath((Join-Path $AppRoot ([string]$Suite.executor.workingDirectory)))
    $configPath = [IO.Path]::GetFullPath((Join-Path $workingDirectory ([string]$Suite.executor.entrypoint)))
    $testcasePath = Join-Path $workingDirectory 'testcases'
    foreach ($requiredPath in @($workingDirectory, $configPath, $testcasePath)) {
        if (-not (Test-Path -LiteralPath $requiredPath)) {
            $result.Status = 'failed'
            $result.Detail = "Hypium path not found: $requiredPath"
            $result.Failed = 1
            return $result
        }
    }

    $python = Get-Command python.exe -ErrorAction SilentlyContinue
    if ($null -eq $python) { $python = Get-Command python -ErrorAction SilentlyContinue }
    if ($null -eq $python) {
        $result.Status = 'blocked'
        $result.Detail = 'Python was not found for Hypium execution'
        return $result
    }
    & $python.Source -c 'import hypium, xdevice' 2>$null
    if ($LASTEXITCODE -ne 0) {
        $result.Status = 'blocked'
        $result.Detail = 'Python hypium/xdevice packages are not installed'
        return $result
    }

    $stamp = (Get-Date).ToUniversalTime().ToString('yyyyMMddTHHmmssfffZ')
    $runDir = Join-Path $ArtifactDir "hypium-$stamp"
    $reportDir = Join-Path $runDir 'report'
    [IO.Directory]::CreateDirectory($runDir) | Out-Null
    $evidencePath = Join-Path $runDir 'hypium-evidence.json'
    $logPath = Join-Path $runDir 'hypium-run.log'
    $result.LogPath = $logPath
    $cases = @($Suite.executor.arguments | ForEach-Object { [string]$_ })
    if ($cases.Count -eq 0) {
        $result.Status = 'failed'
        $result.Detail = 'Hypium executor has no testcase names'
        $result.Failed = 1
        return $result
    }

    $previousEvidence = $env:GF_HYPIUM_EVIDENCE
    $previousArtifact = $env:GF_HYPIUM_ARTIFACT_DIR
    $previousPythonPath = $env:PYTHONPATH
    $env:GF_HYPIUM_EVIDENCE = $evidencePath
    $env:GF_HYPIUM_ARTIFACT_DIR = $runDir
    $hypiumPlatform = Join-Path $PlatformRoot 'test-platform\hypium'
    $env:PYTHONPATH = if ([string]::IsNullOrWhiteSpace($previousPythonPath)) {
        $hypiumPlatform
    } else { "$hypiumPlatform$([IO.Path]::PathSeparator)$previousPythonPath" }

    $hdc = Get-HdcPath
    Write-Host "  RUN       $SuiteKey via Python Hypium on device=$($device.Serial) arch=$($device.Arch) testmode=$($device.TestMode)"
    $screenGuardEnabled = $false
    $primaryExecutionError = $null
    $hypiumOutput = @()
    $hypiumExit = -1
    try {
        Enable-GfDeviceScreenKeepOn $hdc $device.Serial
        $screenGuardEnabled = $true
        # Business-flow suites consume the same installed App session as
        # Instrument. When a filtered run starts directly at Hypium, this is the
        # single authoritative preparation; otherwise it is a zero-build cache hit.
        $hypiumBundleName = if ($Suite.executor.PSObject.Properties.Name -contains 'bundleName') {
            [string]$Suite.executor.bundleName
        } else { '' }
        $preparation = Ensure-GfInstrumentCampaignPreparation -AppName $AppName `
            -Serial $device.Serial -TestTarget 'ArkTS' -PlatformRoot $PlatformRoot `
            -BundleName $hypiumBundleName -AppRoot $AppRoot
        $result.Preparation = $preparation.Evidence
        $hypiumOutput += @($preparation.LogLines | ForEach-Object { [string]$_ })
        Push-Location $workingDirectory
        try {
            $ErrorActionPreference = 'Continue'
            $hypiumOutput += @(& $python.Source -m xdevice run -c $configPath `
                -l ($cases -join ';') -sn $device.Serial -tcpath $testcasePath `
                -ta 'screenshot:true' -rp $reportDir 2>&1)
            $hypiumExit = $LASTEXITCODE
        } finally {
            $ErrorActionPreference = 'Stop'
            Pop-Location
        }
    } catch {
        $primaryExecutionError = $_
        $hypiumOutput += @("===== infrastructure failure =====", $_.Exception.Message)
        if ($_.Exception.Data.Contains('GfPreparationOutput')) {
            $hypiumOutput += @($_.Exception.Data['GfPreparationOutput'] |
                ForEach-Object { [string]$_ })
        }
    } finally {
        try {
            if ($screenGuardEnabled) {
                try {
                    Restore-GfDeviceScreenKeepOnPreservingFailure $hdc $device.Serial $primaryExecutionError
                } catch {
                    if ($null -eq $primaryExecutionError) {
                        $primaryExecutionError = $_
                        $hypiumOutput = @($hypiumOutput) +
                            @("===== cleanup failure =====", $_.Exception.Message)
                    }
                }
            }
        } finally {
            $env:GF_HYPIUM_EVIDENCE = $previousEvidence
            $env:GF_HYPIUM_ARTIFACT_DIR = $previousArtifact
            $env:PYTHONPATH = $previousPythonPath
        }
    }

    if ($null -ne $primaryExecutionError) {
        [IO.File]::WriteAllText($logPath, (@($hypiumOutput) -join "`n"),
            [Text.UTF8Encoding]::new($false))
        $result.Status = 'failed'
        $result.Failed = 1
        $result.Detail = $primaryExecutionError.Exception.Message
        Write-Host "  FAIL $($result.SuiteKey) - $($result.Detail)"
        return $result
    }

    $reportLogs = @()
    if (Test-Path -LiteralPath $reportDir) {
        foreach ($file in @(Get-ChildItem -Path $reportDir -Recurse -File -Include '*.log','*.txt' -ErrorAction SilentlyContinue)) {
            try { $reportLogs += Get-Content -Raw -Encoding UTF8 -LiteralPath $file.FullName } catch { }
        }
    }
    $outputText = (@($hypiumOutput) + @($reportLogs)) -join "`n"
    [IO.File]::WriteAllText($logPath, $outputText, [Text.UTF8Encoding]::new($false))

    $summaryPath = Join-Path $reportDir 'summary_report.xml'
    if (Test-Path -LiteralPath $summaryPath -PathType Leaf) {
        try {
            [xml]$summary = Get-Content -Raw -Encoding UTF8 -LiteralPath $summaryPath
            $result.Failed = [int]$summary.testsuites.failures + [int]$summary.testsuites.errors
            $result.Skipped = [int]$summary.testsuites.ignored + [int]$summary.testsuites.disabled
            $result.Passed = [int]$summary.testsuites.tests - $result.Failed - $result.Skipped
            if ($result.Passed -lt 0 -or $result.Failed -lt 0 -or $result.Skipped -lt 0) {
                throw 'Hypium summary counts do not close.'
            }
        } catch {
            $result.Failed = 1
            $result.Detail = "invalid Hypium summary XML: $($_.Exception.Message)"
        }
    }

    $coverage = [ordered]@{
        deviceClasses = @($device.DeviceClass | Where-Object { $_ -ne 'unknown' })
        windowClasses = @(); themes = @(); locales = @(); networks = @(); dataStates = @()
    }
    if (Test-Path -LiteralPath $evidencePath -PathType Leaf) {
        try {
            $evidence = Get-Content -Raw -Encoding UTF8 -LiteralPath $evidencePath | ConvertFrom-Json
            $validProofs = @(Get-GfCollectionProperty -InputObject $evidence -Name 'journeyProofs' |
                Where-Object {
                    [string]$_.app -eq $AppName -and
                    (([string]$_.kind -eq 'mutation' -and $_.before -ne $_.after) -or
                     ([string]$_.kind -eq 'fault-recovery' -and $_.faultState -ne $_.recoveredState))
                })
            $result.MutationOrFaultProof = $validProofs.Count -gt 0
            $matrixEntries = @(Get-GfCollectionProperty -InputObject $evidence -Name 'matrixCoverage')
            foreach ($entry in $matrixEntries) {
                foreach ($dimension in @($coverage.Keys)) {
                    if (-not ($entry.PSObject.Properties.Name -contains $dimension)) { continue }
                    $coverage[$dimension] = @($coverage[$dimension]) + @($entry.$dimension)
                }
            }
            $performanceEntries = @(Get-GfCollectionProperty -InputObject $evidence -Name 'performanceMetrics' |
                Where-Object {
                    [string]$_.app -eq $AppName -and $null -ne $_.metrics
                })
            if ($performanceEntries.Count -gt 0) {
                $result.PerformanceMetrics = $performanceEntries[-1].metrics
            }
            $stabilityEntries = @(Get-GfCollectionProperty -InputObject $evidence -Name 'stabilityMetrics' |
                Where-Object {
                    [string]$_.app -eq $AppName -and $null -ne $_.metrics
                })
            if ($stabilityEntries.Count -gt 0) {
                $result.StabilityMetrics = $stabilityEntries[-1].metrics
            }
            $closureEntries = @(Get-GfCollectionProperty -InputObject $evidence -Name 'closureEvidence' |
                Where-Object { [string]$_.app -eq $AppName })
            $result.ClosureEvidence = @($closureEntries)
        } catch {
            $result.Failed = [Math]::Max($result.Failed, 1)
            $result.Detail = "invalid Hypium evidence: $($_.Exception.Message)"
        }
    }
    foreach ($dimension in @($coverage.Keys)) {
        $coverage[$dimension] = @($coverage[$dimension] | Where-Object {
            -not [string]::IsNullOrWhiteSpace([string]$_)
        } | Sort-Object -Unique)
    }
    $result.MatrixCoverage = [pscustomobject]$coverage

    if (@($Suite.layers) -contains 'performance' -and $null -eq $result.PerformanceMetrics) {
        $result.Failed = [Math]::Max($result.Failed, 1)
        $result.Detail = 'Hypium quality suite did not emit measured performance metrics'
    }
    if (@($Suite.layers) -contains 'stability' -and $null -eq $result.StabilityMetrics) {
        $result.Failed = [Math]::Max($result.Failed, 1)
        $result.Detail = 'Hypium quality suite did not emit measured stability metrics'
    }

    $crash = $outputText -match 'appDied|ApplicationCrash|FATAL EXCEPTION|signal\s+\d+'
    if ($result.Detail -match '^invalid ') {
        $result.Status = 'failed'
    } elseif ($hypiumExit -ne 0 -and $result.Passed -eq 0 -and $result.Failed -eq 0) {
        $result.Status = 'failed'; $result.Detail = "xdevice exit=$hypiumExit; no test results parsed"
    } elseif ($crash) {
        $result.Status = 'failed'; $result.Detail = 'app crash/died during Hypium run'
        $result.Failed = [Math]::Max($result.Failed, 1)
    } elseif ($result.Failed -gt 0 -or $result.Skipped -gt 0 -or $hypiumExit -ne 0) {
        $result.Status = 'failed'; $result.Detail = "pass=$($result.Passed) fail=$($result.Failed) skip=$($result.Skipped)"
    } elseif ($result.Passed -gt 0) {
        $result.Status = 'passed'; $result.Detail = "pass=$($result.Passed) fail=0 skip=$($result.Skipped)"
    } else {
        $result.Status = 'failed'; $result.Detail = 'no Hypium test cases executed'
    }
    $mark = if ($result.Status -eq 'passed') { 'PASS' } else { 'FAIL' }
    Write-Host "  $mark $SuiteKey - $($result.Detail)"
    return $result
}
