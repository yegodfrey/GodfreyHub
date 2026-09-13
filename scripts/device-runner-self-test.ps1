[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'GfDeviceRunner.ps1')

function Assert-GfSelfTest([bool]$Condition, [string]$Message) {
    if (-not $Condition) { throw "GfDeviceRunner SelfTest: $Message" }
}

function Invoke-GfFakeHdc {
    param([Parameter(ValueFromRemainingArguments = $true)][object[]]$Arguments)
    $script:GfFakeHdcCommands.Add(($Arguments -join ' '))
    $global:LASTEXITCODE = 0
    if (($Arguments -join ' ') -match '\baa test\b') {
        $global:LASTEXITCODE = $script:GfFakeAaExit
        $classMatch = [regex]::Match(($Arguments -join ' '), "-s class '([^']+)'")
        $classes = @(if ($classMatch.Success) { $classMatch.Groups[1].Value -split ',' } else { 'AllTests' })
        $failedClasses = 0
        foreach ($testClass in $classes) {
            Write-Output "OHOS_REPORT_STATUS: class=$testClass"
            Write-Output 'OHOS_REPORT_STATUS_CODE: 1'
            if (-not [string]::IsNullOrWhiteSpace($script:GfFakeFailClass) -and
                $testClass -eq $script:GfFakeFailClass) {
                Write-Output 'OHOS_REPORT_STATUS_CODE: -1'
                $failedClasses++
            } else {
                Write-Output 'OHOS_REPORT_STATUS_CODE: 0'
            }
        }
        if (-not $script:GfFakeHdcOmitSummary) {
            Write-Output "Tests run: $($classes.Count), Failure: $failedClasses, Error: 0, Pass: $($classes.Count - $failedClasses), Ignore: 0"
        }
    }
}
$script:GfFakeHdcOmitSummary = $false
$script:GfFakeAaExit = 0
$script:GfFakeFailClass = ''
$script:GfFakeHdcCommands = [Collections.Generic.List[string]]::new()

$script:GfFlakyPowerCalls = 0
function Invoke-GfFlakyPowerHdc {
    param([Parameter(ValueFromRemainingArguments = $true)][object[]]$Arguments)
    $script:GfFlakyPowerCalls++
    if ($script:GfFlakyPowerCalls -eq 1) {
        $global:LASTEXITCODE = 1
        Write-Output '[Fail] transient emulator power service error'
    } else {
        $global:LASTEXITCODE = 0
        Write-Output 'success'
    }
}

function Invoke-GfInventoryHdc {
    param([Parameter(ValueFromRemainingArguments = $true)][object[]]$Arguments)
    $global:LASTEXITCODE = 0
    if (($Arguments -join ' ') -eq 'list targets') {
        Write-Output '127.0.0.1:5557'
        Write-Output '127.0.0.1:5559'
    }
}

function Invoke-GfSingleInventoryHdc {
    param([Parameter(ValueFromRemainingArguments = $true)][object[]]$Arguments)
    $global:LASTEXITCODE = 0
    if (($Arguments -join ' ') -eq 'list targets') {
        Write-Output '127.0.0.1:5559'
    }
}

function Invoke-GfEmptyInventoryHdc {
    param([Parameter(ValueFromRemainingArguments = $true)][object[]]$Arguments)
    $global:LASTEXITCODE = 0
    if (($Arguments -join ' ') -eq 'list targets') { Write-Output '[Empty]' }
}

function Get-HdcPath { return 'Invoke-GfFakeHdc' }
function Enable-GfDeviceScreenKeepOn([string]$Hdc, [string]$Serial) { }
function Restore-GfDeviceScreenKeepOn([string]$Hdc, [string]$Serial) { }
$script:GfPreparationShouldFail = $false
$script:GfPreparationCalls = 0
$script:GfSelfTestArtifactRoot = ''
function Invoke-GfInstrumentPreparation([string]$AppName, [string]$Serial, [string]$TestTarget) {
    $script:GfPreparationCalls++
    if ($script:GfPreparationShouldFail) {
        $failure = [InvalidOperationException]::new('synthetic preparation failure')
        $failure.Data['GfPreparationOutput'] = @('provider transcript line')
        throw $failure
    }
    [IO.Directory]::CreateDirectory($script:GfSelfTestArtifactRoot) | Out-Null
    $appHap = Join-Path $script:GfSelfTestArtifactRoot 'app.hap'
    $testHap = Join-Path $script:GfSelfTestArtifactRoot 'test.hap'
    [IO.File]::WriteAllText($appHap, 'app')
    [IO.File]::WriteAllText($testHap, 'test')
    return ([pscustomobject]@{
        code = 0
        hap = $appHap
        testHaps = @([pscustomobject]@{ framework = $TestTarget; module = 'entry'; hap = $testHap })
        target = $Serial
    } | ConvertTo-Json -Compress -Depth 5)
}
function Invoke-GfHdcChecked {
    param([Parameter(ValueFromRemainingArguments = $true)][object[]]$Arguments)
}
function Invoke-GfVisualCheckpoint {
    param(
        [string]$Hdc,
        [string]$Serial,
        [string]$PlatformRoot,
        [string]$ArtifactDir,
        [object]$Check
    )
    return [pscustomobject]@{
        name = [string]$Check.name
        status = 'passed'
        exitCode = 0
    }
}

$missing = [pscustomobject]@{}
$empty = [pscustomobject]@{ items = @() }
$single = [pscustomobject]@{ items = [pscustomobject]@{ id = 'one' } }
$many = [pscustomobject]@{
    items = @([pscustomobject]@{ id = 'one' }, [pscustomobject]@{ id = 'two' })
}
Assert-GfSelfTest (@(Get-GfCollectionProperty -InputObject $null -Name 'items').Count -eq 0) `
    'null input must produce an empty collection.'
Assert-GfSelfTest (@(Get-GfCollectionProperty -InputObject $missing -Name 'items').Count -eq 0) `
    'missing property must produce an empty collection.'
Assert-GfSelfTest (@(Get-GfCollectionProperty -InputObject $empty -Name 'items').Count -eq 0) `
    'empty property must remain an empty collection.'
Assert-GfSelfTest (@(Get-GfCollectionProperty -InputObject $single -Name 'items').Count -eq 1) `
    'single property value must remain a one-item collection.'
Assert-GfSelfTest (@(Get-GfCollectionProperty -InputObject $many -Name 'items').Count -eq 2) `
    'multi-value property must preserve every item.'

$classProbeText = @'
OHOS_REPORT_STATUS: class=AlphaContract
OHOS_REPORT_STATUS_CODE: 1
OHOS_REPORT_STATUS_CODE: 0
OHOS_REPORT_STATUS: class=BetaContract
OHOS_REPORT_STATUS_CODE: 1
OHOS_REPORT_STATUS_CODE: -1
'@
$classProbe = @(Get-GfInstrumentClassResults -OutputText $classProbeText `
    -TestClasses @('AlphaContract', 'BetaContract', 'MissingContract'))
Assert-GfSelfTest ($classProbe.Count -eq 3 -and
    [string]$classProbe[0].status -eq 'passed' -and
    [string]$classProbe[1].status -eq 'failed' -and
    [string]$classProbe[2].status -eq 'unknown') `
    'batched Instrument output must retain terminal results for each logical class.'

# [GF_TEST_BLOCKED] 能力标记必须按类归属并去重；落在任何类块之外的标记以空类返回，
# 由 campaign 如实上报给每个套件，绝不允许"能力没跑"静默算通过。
$blockedProbeText = @'
[GF_TEST_BLOCKED] capability=early-boot reason=no-class-yet
OHOS_REPORT_STATUS: class=AlphaContract
OHOS_REPORT_STATUS_CODE: 0
Info: some unrelated log line
[GF_TEST_BLOCKED] capability=landscape-rotation reason=portrait-only-device-class
[GF_TEST_BLOCKED] capability=landscape-rotation reason=portrait-only-device-class
OHOS_REPORT_STATUS: class=BetaContract
OHOS_REPORT_STATUS_CODE: 0
'@
$blockedProbe = @(Get-GfBlockedCapabilityEvidence -OutputText $blockedProbeText)
Assert-GfSelfTest (@($blockedProbe).Count -eq 2 -and
    [string]$blockedProbe[0].class -eq '' -and
    [string]$blockedProbe[0].capability -eq 'early-boot' -and
    [string]$blockedProbe[1].class -eq 'AlphaContract' -and
    [string]$blockedProbe[1].capability -eq 'landscape-rotation' -and
    [string]$blockedProbe[1].reason -eq 'portrait-only-device-class') `
    'blocked capability markers must be attributed to their emitting class and deduplicated.'
Assert-GfSelfTest ((Get-GfBlockedCapabilityDetail $blockedProbe) -eq
    'early-boot (no-class-yet), landscape-rotation (portrait-only-device-class)') `
    'blocked capability detail must name the capability and its reason.'

$targetLines = @(
    '[D][2026-08-31 05:00:00.000][abcd][client.cpp:1] diagnostic',
    '127.0.0.1:5555',
    'physical-device_serial-01',
    'Empty Set',
    ''
)
Assert-GfSelfTest ((@(ConvertFrom-GfHdcTargetLines -Lines $targetLines) -join ',') -eq
    '127.0.0.1:5555,physical-device_serial-01') `
    'target parsing must retain emulator and physical serials while rejecting HDC diagnostics.'

# UI 设备池：屏幕指纹归一化（旋转无关，短边x长边）+ profile 钉扎匹配。
$displayDump = @'
----------------------------------DisplayManagerService----------------------------------
Density:                      3.5
Bounds<L,T,W,H>:              0, 0, 1280, 2832,
PhyBounds<L,T,W,H>:           0, 0, 1280, 2832,
'@
$rotatedDisplayDump = $displayDump -replace '1280, 2832', '2832, 1280'
Assert-GfSelfTest ((Get-GfScreenFingerprint -HidumperText $displayDump) -eq '1280x2832' -and
    (Get-GfScreenFingerprint -HidumperText $rotatedDisplayDump) -eq '1280x2832' -and
    (Get-GfScreenFingerprint -HidumperText '') -eq 'unknown' -and
    (Get-GfScreenFingerprint -HidumperText 'no bounds here') -eq 'unknown') `
    'screen fingerprints must normalize rotation to minxmax and fail closed as unknown.'
$poolPhone = [GfDeviceInfo]::new()
$poolPhone.Serial = '127.0.0.1:5555'; $poolPhone.TestMode = $true; $poolPhone.IsEmulator = $true
$poolPhone.ProfileName = 'mate-80-pro'; $poolPhone.LandscapeSupported = $false
$poolFoldable = [GfDeviceInfo]::new()
$poolFoldable.Serial = '127.0.0.1:5557'; $poolFoldable.TestMode = $true; $poolFoldable.IsEmulator = $true
$poolFoldable.ProfileName = 'pura-x-view'; $poolFoldable.LandscapeSupported = $false
$poolPhoneReq = [GfDeviceRequirement]::new(); $poolPhoneReq.Profile = 'mate-80-pro'; $poolPhoneReq.TestMode = $true
$poolFoldableReq = Get-GfDeviceRequirement ([pscustomobject]@{
    id = 'universe-journey'; lane = 'semantic-contract'; layers = @('device')
    capabilities = [pscustomobject]@{ profile = 'pura-x-view'; testmode = $true }
})
$unpinnedReq = [GfDeviceRequirement]::new(); $unpinnedReq.TestMode = $true
Assert-GfSelfTest ((Test-GfDeviceMatches $poolPhone $poolPhoneReq) -and
    -not (Test-GfDeviceMatches $poolPhone $poolFoldableReq) -and
    (Test-GfDeviceMatches $poolFoldable $poolFoldableReq) -and
    (Test-GfDeviceMatches $poolPhone $unpinnedReq) -and
    (Test-GfDeviceMatches $poolFoldable $unpinnedReq)) `
    'UI pool pins must match exactly their named profile while unpinned requirements accept any device.'

$inventoryDevices = @(
    [pscustomobject]@{ Serial = '127.0.0.1:5555' },
    [pscustomobject]@{ Serial = '127.0.0.1:5557' },
    [pscustomobject]@{ Serial = '127.0.0.1:5559' }
)
Assert-GfSelfTest ((@(Get-GfConnectedDevices -Devices $inventoryDevices `
    -Hdc 'Invoke-GfInventoryHdc').Serial -join ',') -eq '127.0.0.1:5557,127.0.0.1:5559') `
    'live inventory reconciliation must remove a stale target without losing healthy peers.'
$singleConnectedInventory = @(
    if ('Invoke-GfSingleInventoryHdc') {
        Get-GfConnectedDevices -Devices $inventoryDevices -Hdc 'Invoke-GfSingleInventoryHdc'
    }
)
Assert-GfSelfTest ($singleConnectedInventory.Count -eq 1 -and
    [string]$singleConnectedInventory[0].Serial -eq '127.0.0.1:5559') `
    'one remaining live target must stay an array under StrictMode.'
$emptyConnectedInventory = @(Get-GfConnectedDevices -Devices $inventoryDevices `
    -Hdc 'Invoke-GfEmptyInventoryHdc')
$emptyConnectedSerials = @(Get-GfDeviceSerials -Devices $emptyConnectedInventory)
$allDisconnectedSerials = @(Get-GfDeviceSerials -Devices $inventoryDevices |
    Where-Object { $emptyConnectedSerials -notcontains $_ })
Assert-GfSelfTest ($emptyConnectedInventory.Count -eq 0 -and
    $allDisconnectedSerials.Count -eq 3) `
    'an empty live inventory must remain safe under StrictMode and retain every removed serial.'

$validBundleMetadata = 'prefix {"userInfo":[{"bundleUserInfo":{"userId":100}}]}'
$localizedCorruptionMetadata = @'
prefix {
  "applicationInfo": { "organization": broken-localized-value },
  "userInfo": [{ "bundleUserInfo": { "userId": 100 } }]
}
'@
$ambiguousBundleMetadata = '{"userInfo":[{"bundleUserInfo":{"userId":100}},' +
    '{"bundleUserInfo":{"userId":101}}]}'
Assert-GfSelfTest (@(Get-GfBundleUserIdsFromMetadata -Text $validBundleMetadata) -join ',' -eq '100') `
    'valid bundle metadata must yield its installed user.'
Assert-GfSelfTest (@(Get-GfBundleUserIdsFromMetadata -Text $localizedCorruptionMetadata) -join ',' -eq '100') `
    'localized metadata corruption must retain the exact ASCII userId fallback.'
Assert-GfSelfTest (@(Get-GfBundleUserIdsFromMetadata -Text $ambiguousBundleMetadata) -join ',' -eq '100,101') `
    'multiple installed users must remain visible for ambiguity rejection.'

$appDiedDetail = Get-GfMissingInstrumentSummaryDetail -TestClass 'SkyContract' `
    -ScopeText "TestFinished-ResultCode: -1`nTestFinished-ResultMsg: App died" -ScopeExit 0
$genericMissingDetail = Get-GfMissingInstrumentSummaryDetail -TestClass 'SkyContract' `
    -ScopeText 'aa test returned without a result' -ScopeExit 17
Assert-GfSelfTest ($appDiedDetail -eq
    'SkyContract: App died before authoritative Tests run summary (hdc exit=0)') `
    'App died must be reported explicitly instead of being hidden as a generic missing summary.'
Assert-GfSelfTest ($genericMissingDetail -eq
    'SkyContract: missing authoritative Tests run summary (hdc exit=17)') `
    'non-crash missing summaries must retain the generic diagnostic and the HDC exit code.'

$imeGuideLog = @'
bundleName=com.huawei.hmos.inputmethod
pagePath=pages/setting/KeyboardSelectGuidePage
'@
Assert-GfSelfTest ((Get-GfSystemUiPrerequisiteDetail -Text $imeGuideLog) -match
    'system input method setup is incomplete') `
    'the system keyboard-layout guide must be classified as a device prerequisite.'
$normalImeDetail = Get-GfSystemUiPrerequisiteDetail -Text `
    'com.huawei.hmos.inputmethod regular keyboard window'
Assert-GfSelfTest ($null -eq $normalImeDetail) `
    'a normal system keyboard window must not block application tests.'

$invalidPreparationRejected = $false
try { Get-GfPreparationEvidence -Output @('not-json') -CacheHit $false -DurationMs 1 | Out-Null }
catch { $invalidPreparationRejected = $true }
Assert-GfSelfTest $invalidPreparationRejected `
    'campaign reuse must reject preparation output without an artifact manifest.'

$structuredClosureLine = 'GF_UI_CLOSURE: {"kind":"interaction","posts":[{"anchor":"settings.ritual","expect":"state","passed":false,"observed":{"anchorId":"settings.ritual","text":"\u5148\u5b89\u9759\u547c\u5438\u4e00\u6b21\uff0c\u518d\u5f00\u59cb\u3002","description":"\u5f15\u53f7\uff1a\"\u793a\u4f8b\""}}],"passed":false}'
$structuredClosureMatch = [regex]::Match($structuredClosureLine,
    '(?m)GF_UI_CLOSURE:\s*(\{[^\r\n]+\})\s*$')
Assert-GfSelfTest $structuredClosureMatch.Success `
    'a structured closure marker with non-ASCII text and escaped quotes must be discoverable.'
$structuredClosure = $structuredClosureMatch.Groups[1].Value | ConvertFrom-Json
Assert-GfSelfTest ([string]$structuredClosure.posts[0].observed.text -eq '先安静呼吸一次，再开始。') `
    'structured observed snapshots must survive marker parsing without double-decoding.'
Assert-GfSelfTest ([string]$structuredClosure.posts[0].observed.description -eq '引号："示例"') `
    'structured observed snapshots must preserve embedded quotes.'

Invoke-GfDevicePowerCommand -Hdc 'Invoke-GfFlakyPowerHdc' -Serial 'self-test' `
    -Arguments @('timeout', '-r') -Operation 'self-test restore'
Assert-GfSelfTest ($script:GfFlakyPowerCalls -eq 2) `
    'transient power-shell failures must retry once and then succeed.'

function Restore-GfDeviceScreenKeepOn([string]$Hdc, [string]$Serial) {
    throw 'synthetic restore failure'
}
$syntheticPrimary = $null
try { throw 'synthetic primary failure' } catch { $syntheticPrimary = $_ }
try {
    Restore-GfDeviceScreenKeepOnPreservingFailure 'fake-hdc' 'self-test' $syntheticPrimary
} catch {
    throw 'GfDeviceRunner SelfTest: cleanup failure masked the primary failure.'
}
$restoreFailureSurfaced = $false
try {
    Restore-GfDeviceScreenKeepOnPreservingFailure 'fake-hdc' 'self-test' $null
} catch {
    $restoreFailureSurfaced = $true
}
Assert-GfSelfTest $restoreFailureSurfaced `
    'a restore failure must still fail an otherwise successful execution.'
$script:GfRestoreShouldFail = $false
function Restore-GfDeviceScreenKeepOn([string]$Hdc, [string]$Serial) {
    if ($script:GfRestoreShouldFail) { throw 'synthetic restore failure' }
}

$device = [GfDeviceInfo]::new()
$device.Serial = '127.0.0.1:5555'
$device.Arch = 'x86_64'
$device.TestMode = $true
$device.IsEmulator = $true
$device.Model = 'self-test'
$device.DeviceClass = 'phone'

$tempBase = [IO.Path]::GetFullPath([IO.Path]::GetTempPath())
$tempRoot = [IO.Path]::GetFullPath((Join-Path $tempBase ("gf-device-runner-" + [guid]::NewGuid().ToString('N'))))
if (-not $tempRoot.StartsWith($tempBase, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'GfDeviceRunner SelfTest: temporary directory escaped the system temp root.'
}
[IO.Directory]::CreateDirectory($tempRoot) | Out-Null
$script:GfSelfTestArtifactRoot = Join-Path $tempRoot 'prepared-artifacts'

try {
    Reset-GfInstrumentCampaigns
    foreach ($case in @(
        [pscustomobject]@{ name = 'none'; checks = $null; expected = 0 },
        [pscustomobject]@{
            name = 'single'
            checks = @([pscustomobject]@{ name = 'single-check'; afterClass = 'RunnerVisualContract' })
            expected = 1
        },
        [pscustomobject]@{
            name = 'many'
            checks = @(
                [pscustomobject]@{ name = 'first-check'; afterClass = 'RunnerVisualContract' },
                [pscustomobject]@{ name = 'second-check'; afterClass = 'RunnerVisualContract' }
            )
            expected = 2
        }
    )) {
        $executor = [ordered]@{ kind = 'godfreyhub'; mode = 'instrument' }
        if ($null -ne $case.checks) { $executor.visualChecks = @($case.checks) }
        $suite = [pscustomobject]@{
            id = "instrument-$($case.name)"
            lane = if ($case.expected -gt 0) { 'visual-contract' } else { 'semantic-contract' }
            layers = @('device', 'accessibility')
            capabilities = [pscustomobject]@{ testmode = $true }
            executor = [pscustomobject]$executor
        }
        $classNames = if ($case.expected -gt 0) {
            @('RunnerVisualContract')
        } else { @('RunnerNoVisualContract', 'RunnerSecondContract') }
        $artifactDir = Join-Path $tempRoot $case.name
        $result = Invoke-GfInstrumentSuite -SuiteKey "SelfTest.$($case.name)" -AppName 'SelfTest' `
            -Suite $suite -BundleName 'com.example.selftest' -TestClasses $classNames `
            -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactDir $artifactDir -Devices @($device)
        Assert-GfSelfTest ($result.Status -eq 'passed') `
            "$($case.name) Instrument run must pass, got '$($result.Status)': $($result.Detail)"
        Assert-GfSelfTest ($result.Passed -eq @($classNames).Count) `
            "$($case.name) Instrument run must preserve its authoritative test count."
        Assert-GfSelfTest (@($result.VisualEvidence).Count -eq $case.expected) `
            "$($case.name) Instrument run expected $($case.expected) visual result(s)."
        Assert-GfSelfTest (@($result.Preparation.artifacts).Count -eq 2 -and
            @($result.Preparation.artifacts | Where-Object { $_.sha256 -notmatch '^[a-f0-9]{64}$' }).Count -eq 0) `
            "$($case.name) Instrument run must retain verified hashes for production and test HAPs."
    }
    Assert-GfSelfTest ($script:GfPreparationCalls -eq 1) `
        'one App/device campaign must clean-build and install exactly once across suites.'
    Assert-GfSelfTest (@($script:GfFakeHdcCommands | Where-Object {
        $_ -match "-s class 'RunnerNoVisualContract,RunnerSecondContract'"
    }).Count -eq 1) `
        'ordered classes in one suite must execute through one aa-test class filter.'
    Assert-GfSelfTest (@($script:GfFakeHdcCommands | Where-Object {
        $_ -match '\baa force-stop\b'
    }).Count -eq 0) `
        'the host must not force-stop the production App between campaign classes or suites.'

    $batchSuiteA = [pscustomobject]@{
        id = 'logical-a'; lane = 'semantic-contract'; layers = @('device')
        capabilities = [pscustomobject]@{ testmode = $true }
        executor = [pscustomobject]@{
            kind = 'godfreyhub'; mode = 'instrument'; testClasses = @('BatchAlphaContract')
        }
    }
    $batchSuiteB = [pscustomobject]@{
        id = 'logical-b'; lane = 'visual-contract'; layers = @('device', 'accessibility')
        capabilities = [pscustomobject]@{ testmode = $true }
        executor = [pscustomobject]@{
            kind = 'godfreyhub'; mode = 'instrument'; testClasses = @('BatchBetaContract')
            visualChecks = @([pscustomobject]@{
                name = 'batch-visual'; afterClass = 'BatchBetaContract'
            })
        }
    }
    $batchCommandCount = @($script:GfFakeHdcCommands | Where-Object { $_ -match '\baa test\b' }).Count
    $batchPreparationCount = $script:GfPreparationCalls
    $batchResults = @(Invoke-GfInstrumentCampaign -AppName 'BatchSelfTest' `
        -Suites @($batchSuiteA, $batchSuiteB) -BundleName 'com.example.batch' `
        -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactRoot $tempRoot -Devices @($device))
    Assert-GfSelfTest ($batchResults.Count -eq 2 -and
        @($batchResults | Where-Object { $_.Status -ne 'passed' }).Count -eq 0) `
        'one physical Instrument campaign must preserve two passing logical suite results.'
    Assert-GfSelfTest ((@($script:GfFakeHdcCommands | Where-Object { $_ -match '\baa test\b' }).Count -
        $batchCommandCount) -eq 1) `
        'multiple logical Instrument suites must execute through exactly one aa-test command.'
    Assert-GfSelfTest ($script:GfPreparationCalls -eq ($batchPreparationCount + 1)) `
        'multiple logical Instrument suites must prepare exactly once.'
    Assert-GfSelfTest (-not [bool]$batchResults[0].Preparation.cacheHit -and
        [bool]$batchResults[1].Preparation.cacheHit) `
        'logical suite evidence must identify the single campaign preparation owner and reuse.'
    Assert-GfSelfTest (@($batchResults[1].VisualEvidence).Count -eq 1) `
        'batched visual evidence must be attributed to its logical suite.'

    $partialSuiteA = [pscustomobject]@{
        id = 'partial-pass'; lane = 'visual-contract'; layers = @('device', 'accessibility')
        capabilities = [pscustomobject]@{ testmode = $true }
        executor = [pscustomobject]@{
            kind = 'godfreyhub'; mode = 'instrument'; testClasses = @('PartialAlphaContract')
            visualChecks = @([pscustomobject]@{
                name = 'partial-visual'; afterClass = 'PartialAlphaContract'
            })
        }
    }
    $partialSuiteB = [pscustomobject]@{
        id = 'partial-fail'; lane = 'semantic-contract'; layers = @('device')
        capabilities = [pscustomobject]@{ testmode = $true }
        executor = [pscustomobject]@{
            kind = 'godfreyhub'; mode = 'instrument'; testClasses = @('PartialBetaContract')
        }
    }
    $script:GfFakeFailClass = 'PartialBetaContract'
    $partialResults = @(Invoke-GfInstrumentCampaign -AppName 'PartialSelfTest' `
        -Suites @($partialSuiteA, $partialSuiteB) -BundleName 'com.example.partial' `
        -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactRoot $tempRoot -Devices @($device))
    $script:GfFakeFailClass = ''
    Assert-GfSelfTest ($partialResults.Count -eq 2 -and
        [string]$partialResults[0].Status -eq 'passed' -and
        [string]$partialResults[1].Status -eq 'failed') `
        'one failed class must not rewrite an independently passed logical suite as failed.'
    Assert-GfSelfTest (@($partialResults[0].VisualEvidence).Count -eq 1) `
        'a passed producer class must retain its visual evidence when a later class fails.'

    Reset-GfInstrumentCampaigns
    $script:GfPreparationShouldFail = $true
    $preparationCallsBeforeFailure = $script:GfPreparationCalls
    $failureExecutor = [pscustomobject]@{
        kind = 'godfreyhub'; mode = 'instrument'; testClasses = @('RunnerFailureContract')
    }
    $failureSuite = [pscustomobject]@{
        id = 'instrument-preparation-failure'
        lane = 'semantic-contract'
        layers = @('device', 'accessibility')
        capabilities = [pscustomobject]@{ testmode = $true }
        executor = $failureExecutor
    }
    $secondFailureSuite = [pscustomobject]@{
        id = 'instrument-preparation-failure-second'
        lane = 'semantic-contract'
        layers = @('device', 'accessibility')
        capabilities = [pscustomobject]@{ testmode = $true }
        executor = [pscustomobject]@{
            kind = 'godfreyhub'; mode = 'instrument'; testClasses = @('RunnerSecondFailureContract')
        }
    }
    $failureResults = @(Invoke-GfInstrumentCampaign -AppName 'SelfTest' `
        -Suites @($failureSuite, $secondFailureSuite) -BundleName 'com.example.selftest' `
        -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactRoot $tempRoot -Devices @($device))
    $failureResult = $failureResults[0]
    Assert-GfSelfTest ($failureResults.Count -eq 2 -and
        @($failureResults | Where-Object { $_.Status -ne 'failed' -or $_.Failed -ne 1 }).Count -eq 0) `
        'an empty-class preparation failure must split into every logical suite without aborting the family loop.'
    Assert-GfSelfTest ((Get-Content -Raw -LiteralPath $failureResult.LogPath).Contains('provider transcript line')) `
        'the complete preparation provider transcript must remain in the failed suite log.'
    $script:GfPreparationShouldFail = $false
    $cachedFailureResult = Invoke-GfInstrumentSuite -SuiteKey 'SelfTest.preparation-failure-reused' -AppName 'SelfTest' `
        -Suite $failureSuite -BundleName 'com.example.selftest' -TestClasses @('RunnerSecondFailureContract') `
        -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactDir (Join-Path $tempRoot 'preparation-failure-reused') `
        -Devices @($device)
    Assert-GfSelfTest ($cachedFailureResult.Status -eq 'failed' -and
        $cachedFailureResult.Detail -match 'duplicate build suppressed') `
        'later suites in a failed campaign must fail immediately without repeating preparation.'
    Assert-GfSelfTest ($script:GfPreparationCalls -eq ($preparationCallsBeforeFailure + 1)) `
        'a failed App/device preparation must be attempted exactly once per campaign.'
    Assert-GfSelfTest ((Get-Content -Raw -LiteralPath $cachedFailureResult.LogPath).Contains('provider transcript line')) `
        'a cached preparation failure must preserve the original provider transcript.'

    Reset-GfInstrumentCampaigns
    $script:GfFakeAaExit = 9
    $nonZeroResult = Invoke-GfInstrumentSuite -SuiteKey 'SelfTest.nonzero-hdc' -AppName 'ExitEvidence' `
        -Suite $failureSuite -BundleName 'com.example.selftest' -TestClasses @('RunnerExitContract') `
        -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactDir (Join-Path $tempRoot 'nonzero-hdc') `
        -Devices @($device)
    Assert-GfSelfTest ($nonZeroResult.Status -eq 'failed' -and $nonZeroResult.Detail -match 'hdc exit=9') `
        'a non-zero HDC exit must fail even when Hypium emitted an otherwise passing summary.'
    $script:GfFakeAaExit = 0

    $script:GfRestoreShouldFail = $true
    $cleanupFailureDir = Join-Path $tempRoot 'cleanup-failure'
    $cleanupFailureResult = Invoke-GfInstrumentSuite -SuiteKey 'SelfTest.cleanup-failure' -AppName 'SelfTest' `
        -Suite $failureSuite -BundleName 'com.example.selftest' -TestClasses @('RunnerCleanupContract') `
        -AppRoot $tempRoot -PlatformRoot $tempRoot -ArtifactDir $cleanupFailureDir -Devices @($device)
    Assert-GfSelfTest ($cleanupFailureResult.Status -eq 'failed' -and $cleanupFailureResult.Failed -eq 1) `
        'an Instrument cleanup failure must become a suite result instead of aborting the family loop.'
    Assert-GfSelfTest ((Get-Content -Raw -LiteralPath $cleanupFailureResult.LogPath).Contains('cleanup failure')) `
        'an Instrument cleanup failure must remain visible in the per-suite log.'
    $script:GfRestoreShouldFail = $false

    $script:GfFakeHdcOmitSummary = $true
    $script:GfRestoreShouldFail = $true
    $scopeAndCleanupFailureDir = Join-Path $tempRoot 'scope-and-cleanup-failure'
    $scopeAndCleanupFailureResult = Invoke-GfInstrumentSuite `
        -SuiteKey 'SelfTest.scope-and-cleanup-failure' -AppName 'SelfTest' `
        -Suite $failureSuite -BundleName 'com.example.selftest' `
        -TestClasses @('RunnerScopeFailureContract') -AppRoot $tempRoot `
        -PlatformRoot $tempRoot -ArtifactDir $scopeAndCleanupFailureDir -Devices @($device)
    Assert-GfSelfTest ($scopeAndCleanupFailureResult.Status -eq 'failed' -and
        $scopeAndCleanupFailureResult.Detail -match 'missing authoritative Tests run summary') `
        'a test-summary failure must remain primary when screen restoration also fails.'
    Assert-GfSelfTest ($scopeAndCleanupFailureResult.Detail -notmatch 'restore') `
        'a secondary screen restoration failure must not replace the test-summary failure.'
    $script:GfFakeHdcOmitSummary = $false
    $script:GfRestoreShouldFail = $false

    # ---- prepare-cache reuse (opt-in inner-loop fast path) ----
    # Real source hash: deterministic sha256 that reacts to a content edit.
    $hashRoot = Join-Path $tempRoot 'hash-probe'
    [IO.Directory]::CreateDirectory($hashRoot) | Out-Null
    Set-Content -LiteralPath (Join-Path $hashRoot 'file.txt') -Value 'alpha' -Encoding UTF8
    $hashFirst = Get-GfPrepareSourceHash -AppRoot $hashRoot -PlatformRoot $hashRoot
    $hashSecond = Get-GfPrepareSourceHash -AppRoot $hashRoot -PlatformRoot $hashRoot
    Assert-GfSelfTest ($hashFirst -eq $hashSecond -and $hashFirst -match '^[a-f0-9]{64}$') `
        'the prepare source hash must be a deterministic sha256.'
    Set-Content -LiteralPath (Join-Path $hashRoot 'file.txt') -Value 'beta' -Encoding UTF8
    $hashThird = Get-GfPrepareSourceHash -AppRoot $hashRoot -PlatformRoot $hashRoot
    Assert-GfSelfTest ($hashThird -ne $hashFirst) `
        'a source content edit must change the prepare source hash.'

    # Controllable inputs for the reuse decision: source hash and device presence.
    $script:GfFakeSourceHash = 'sourcehash-a'
    $script:GfFakeBundleInstalled = $true
    function Get-GfPrepareSourceHash([string]$AppRoot, [string]$PlatformRoot) {
        return $script:GfFakeSourceHash
    }
    function Test-GfBundleInstalled([string]$Hdc, [string]$Serial, [string]$BundleName) {
        return [bool]$script:GfFakeBundleInstalled
    }
    $reuseRoot = Join-Path $tempRoot 'reuse'
    $reuseAppRoot = Join-Path $reuseRoot 'app'
    [IO.Directory]::CreateDirectory($reuseAppRoot) | Out-Null
    $script:GfSelfTestArtifactRoot = Join-Path $reuseRoot 'artifacts'
    $reuseCachePath = Get-GfPrepareCachePath -PlatformRoot $reuseRoot -AppName 'ReuseApp' `
        -Serial $device.Serial -TestTarget 'ArkTS'

    # 1) Flag off: authoritative clean build, provider runs, cache is never written.
    Reset-GfInstrumentCampaigns
    $Global:GfReusePrepare = $false
    $callsBefore = $script:GfPreparationCalls
    $offPrep = Ensure-GfInstrumentCampaignPreparation -AppName 'ReuseApp' -Serial $device.Serial `
        -TestTarget 'ArkTS' -PlatformRoot $reuseRoot -BundleName 'com.example.reuse' -AppRoot $reuseAppRoot
    Assert-GfSelfTest ($script:GfPreparationCalls -eq ($callsBefore + 1)) `
        'an unflagged run must clean-build exactly once.'
    Assert-GfSelfTest (-not [bool]$offPrep.Evidence.cacheHit) `
        'an unflagged run must keep cacheHit=false from-zero evidence.'
    Assert-GfSelfTest (-not (Test-Path -LiteralPath $reuseCachePath)) `
        'an unflagged run must not read or write the prepare cache.'

    # 2) Flag on, cold cache: clean build once, then persist the prepare cache.
    Reset-GfInstrumentCampaigns
    $Global:GfReusePrepare = $true
    $callsBefore = $script:GfPreparationCalls
    $missPrep = Ensure-GfInstrumentCampaignPreparation -AppName 'ReuseApp' -Serial $device.Serial `
        -TestTarget 'ArkTS' -PlatformRoot $reuseRoot -BundleName 'com.example.reuse' -AppRoot $reuseAppRoot
    Assert-GfSelfTest ($script:GfPreparationCalls -eq ($callsBefore + 1)) `
        'a flagged cold-cache run must clean-build once.'
    Assert-GfSelfTest (Test-Path -LiteralPath $reuseCachePath) `
        'a flagged clean build must persist the prepare cache for later reuse.'
    Update-GfPrepareCachePassedClasses -PlatformRoot $reuseRoot -AppName 'ReuseApp' `
        -Serial $device.Serial -TestTarget 'ArkTS' -AppRoot $reuseAppRoot `
        -BundleName 'com.example.reuse' -Evidence $missPrep.Evidence `
        -PassedClasses @('ReuseSetupAlpha', 'ReuseSetupBeta')

    # 3) Flag on, warm cache: no provider call, cacheHit=true, passed classes seeded.
    Reset-GfInstrumentCampaigns
    $callsBefore = $script:GfPreparationCalls
    $hitPrep = Ensure-GfInstrumentCampaignPreparation -AppName 'ReuseApp' -Serial $device.Serial `
        -TestTarget 'ArkTS' -PlatformRoot $reuseRoot -BundleName 'com.example.reuse' -AppRoot $reuseAppRoot
    Assert-GfSelfTest ($script:GfPreparationCalls -eq $callsBefore) `
        'a warm-cache hit must not invoke the clean build provider.'
    Assert-GfSelfTest ([bool]$hitPrep.Evidence.cacheHit -and $null -ne $hitPrep.Evidence.reused) `
        'a warm-cache hit must report cacheHit=true with reuse provenance.'
    Assert-GfSelfTest (@($hitPrep.Evidence.artifacts).Count -eq 2 -and
        @($hitPrep.Evidence.artifacts | Where-Object { $_.sha256 -notmatch '^[a-f0-9]{64}$' }).Count -eq 0) `
        'a warm-cache hit must carry the two verified artifact hashes.'
    Assert-GfSelfTest ($hitPrep.Campaign.PassedClasses.Contains('ReuseSetupAlpha') -and
        $hitPrep.Campaign.PassedClasses.Contains('ReuseSetupBeta')) `
        'a warm-cache hit must seed already-proven setup classes for cross-invocation reuse.'

    # 4) Source changed: hash mismatch forces an authoritative clean rebuild.
    Reset-GfInstrumentCampaigns
    $script:GfFakeSourceHash = 'sourcehash-b'
    $callsBefore = $script:GfPreparationCalls
    $changedPrep = Ensure-GfInstrumentCampaignPreparation -AppName 'ReuseApp' -Serial $device.Serial `
        -TestTarget 'ArkTS' -PlatformRoot $reuseRoot -BundleName 'com.example.reuse' -AppRoot $reuseAppRoot
    Assert-GfSelfTest ($script:GfPreparationCalls -eq ($callsBefore + 1)) `
        'a source hash change must force a clean rebuild instead of reusing stale bits.'
    Assert-GfSelfTest (-not [bool]$changedPrep.Evidence.cacheHit) `
        'a rebuilt campaign must report cacheHit=false.'

    # 5) Bundle absent on device: reuse refused even with a matching hash.
    Reset-GfInstrumentCampaigns
    $script:GfFakeBundleInstalled = $false
    $callsBefore = $script:GfPreparationCalls
    $absentPrep = Ensure-GfInstrumentCampaignPreparation -AppName 'ReuseApp' -Serial $device.Serial `
        -TestTarget 'ArkTS' -PlatformRoot $reuseRoot -BundleName 'com.example.reuse' -AppRoot $reuseAppRoot
    Assert-GfSelfTest ($script:GfPreparationCalls -eq ($callsBefore + 1)) `
        'a missing installed bundle must force a clean rebuild rather than reuse.'
    Assert-GfSelfTest (-not [bool]$absentPrep.Evidence.cacheHit) `
        'a bundle-absent run must report cacheHit=false.'

    $script:GfFakeBundleInstalled = $true
    $Global:GfReusePrepare = $false
} finally {
    if ((Test-Path -LiteralPath $tempRoot) -and
        $tempRoot.StartsWith($tempBase, [StringComparison]::OrdinalIgnoreCase)) {
        Remove-Item -LiteralPath $tempRoot -Recurse -Force
    }
}

Write-Output 'GfDeviceRunner SelfTest: PASS (inventory pruning + system prerequisites + collection shapes + Instrument visual and infrastructure isolation + prepare-cache reuse gating).'
