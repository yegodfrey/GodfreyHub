# GfDeviceRunner 分块 2/5: 设备清单与契约(hdc 定位/目标解析/类结果解析/屏幕指纹/屏幕常亮/shell 转义)。
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
