# GfDeviceRunner 分块 4/5: 仓颉设备套件与 ui-monkey 探索套件执行器。
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
        # 与 SuiteInstrument 同一口径：预备事务失败的 provider 完整转写必须落盘，
        # 否则部署链路故障（hvigor/签名/hdc）无法归因，只剩一行 exit=1。
        if ($_.Exception.Data.Contains('GfPreparationOutput')) {
            Add-Content -LiteralPath $result.LogPath -Encoding UTF8 -Value '===== provider transcript ====='
            foreach ($line in @($_.Exception.Data['GfPreparationOutput'])) {
                Add-Content -LiteralPath $result.LogPath -Encoding UTF8 -Value ([string]$line)
            }
        }
        $result.Status = 'failed'
        $result.Failed = 1
        $result.Detail = $_.Exception.Message
    }
    return $result
}

<#
  L7 探索套件：ui-monkey 随机游走 + 页面不变量（seed 可复现，journal 可重放）。
  复用 instrument 的 clean build/deploy 事务（同 app+serial 的 campaign 缓存直接命中，
  不重复构建安装），在已安装制品上执行探索；命中违例按公理结晶为 L1–L4 永久契约后，
  经 GF_MONKEY_REPLAY_JOURNAL 指向 journal.jsonl 原样重放复验。
  返回 GfDeviceRunResult。
#>
function Invoke-GfMonkeySuite {
    param(
        [string]$SuiteKey,
        [string]$AppName,
        [object]$Suite,
        [string]$BundleName,
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
        $result.Detail = "no matching device for monkey exploration (arch=$($req.Arch), testmode=$($req.TestMode), profile=$($req.Profile)); connected=$($Devices.Count)"
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

    $node = [string]$env:GF_GODFREYHUB_NODE
    $hubRoot = [string]$env:GODFREYHUB_ROOT
    $monkeyScript = if (-not [string]::IsNullOrWhiteSpace($hubRoot)) {
        Join-Path $hubRoot 'scripts/ui-monkey.mjs'
    } else { '' }
    if ([string]::IsNullOrWhiteSpace($node) -or -not (Test-Path -LiteralPath $node -PathType Leaf) -or
        [string]::IsNullOrWhiteSpace($monkeyScript) -or -not (Test-Path -LiteralPath $monkeyScript -PathType Leaf)) {
        throw "GfDeviceRunner: monkey execution requires the GodfreyHub ui-monkey provider; use hub_family_test (missing: $monkeyScript)."
    }
    # 页面注册表即契约：身份锚点/必在场锚点/免疫清单的数据真源，缺失即刻失败，
    # 不允许"没有注册表就整晚瞎点"。
    $pagesRegistry = Join-Path $PlatformRoot "family/quality/monkey/$AppName-pages.json"
    if (-not (Test-Path -LiteralPath $pagesRegistry -PathType Leaf)) {
        throw "GfDeviceRunner: monkey suite requires the app pages registry: $pagesRegistry"
    }

    [IO.Directory]::CreateDirectory($ArtifactDir) | Out-Null
    $serialToken = ($device.Serial -replace '[^A-Za-z0-9_.-]', '_')
    $result.LogPath = Join-Path $ArtifactDir "exploration-monkey-$serialToken.log"
    $monkeyOut = Join-Path $ArtifactDir 'monkey'
    Write-Host "  RUN       $SuiteKey on device=$($device.Serial) via GodfreyHub ui-monkey"

    $hdc = Get-HdcPath
    $screenGuardEnabled = $false
    $previousErrorPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        try {
            Enable-GfDeviceScreenKeepOn $hdc $device.Serial
            $screenGuardEnabled = $true
        } catch { }

        # 与 instrument 同一构建/安装事务：campaign 缓存命中时不重建不重装，
        # monkey 在与契约证据完全相同的制品位上探索。
        $prepareOutput = @(Invoke-GfInstrumentPreparation $AppName $device.Serial 'ArkTS')

        # preparation 只保证构建/安装, 不保证应用在前台运行; monkey 的 pidof/
        # 前台不变量要求进程活着且自己就是前台。与 instrument 协议同口径:
        # 无条件 aa start 拉回前台(不 force-stop, 进程与导航状态保留)——只在
        # pidof 为空时拉起会漏掉"进程活着但被其他应用浮层盖住"的态, 探索就会
        # 在别家界面上空转。ability 与 instrument 同默认 EntryAbility; 仍起不
        # 来按失败出账而不是空跑第一步就违例。
        $launchProbe = (& $hdc -t $device.Serial shell "pidof '$BundleName'" 2>$null | Out-String).Trim()
        $monkeyLaunchLog = [Collections.Generic.List[string]]::new()
        $monkeyLaunchLog.Add("===== monkey launch: aa start $BundleName (always foreground) =====")
        try {
            Invoke-GfHdcChecked $hdc $device.Serial @('shell', 'aa', 'start', '-b', $BundleName,
                '-a', 'EntryAbility') "monkey app launch" | Out-Null
            $launchDeadline = [datetime]::UtcNow.AddSeconds(20)
            do {
                Start-Sleep -Milliseconds 800
                $launchProbe = (& $hdc -t $device.Serial shell "pidof '$BundleName'" 2>$null | Out-String).Trim()
            } while ($launchProbe -notmatch '\d' -and [datetime]::UtcNow -lt $launchDeadline)
        } catch {
            $monkeyLaunchLog.Add("monkey launch warning: $($_.Exception.Message)")
        }
        foreach ($launchLine in $monkeyLaunchLog) { $prepareOutput += $launchLine }
        if ($launchProbe -notmatch '\d') {
            throw "GfDeviceRunner: monkey exploration requires a running app; '$BundleName' did not come up after aa start (pidof empty)."
        }

        $monkeyArguments = @($monkeyScript,
            '--bundle', $BundleName,
            '--pages', $pagesRegistry,
            '--target', $device.Serial,
            '--out', $monkeyOut)
        foreach ($declared in @($Suite.executor.arguments | ForEach-Object { [string]$_ })) {
            $monkeyArguments += $declared
        }
        # 修复复验通道：GF_MONKEY_REPLAY_JOURNAL 指向某次命中的 journal.jsonl 时，
        # 按记录动作原样重放——探索发现修复后的复现证据。
        if (-not [string]::IsNullOrWhiteSpace([string]$env:GF_MONKEY_REPLAY_JOURNAL)) {
            $monkeyArguments += @('--replay', [string]$env:GF_MONKEY_REPLAY_JOURNAL)
        }
        if (-not [string]::IsNullOrWhiteSpace([string]$env:GF_MONKEY_SEED)) {
            $monkeyArguments += @('--seed', [string]$env:GF_MONKEY_SEED)
        }

        $runOutput = @(& $node @monkeyArguments 2>&1 | ForEach-Object { [string]$_ })
        $exitCode = $LASTEXITCODE
        @($prepareOutput + $runOutput) | Set-Content -LiteralPath $result.LogPath -Encoding UTF8
        # 汇总行用权威正则全量匹配后再取末条：stderr 诊断行也以 'ui-monkey:' 开头，
        # 且部分宿主把 stderr 合并到输出末尾，-like 预过滤 + Last 1 会取到诊断行
        # 导致 seed/steps 丢失。Where-Object 脚本块内的 $Matches 不会外溢，末次
        # -match 在当前作用域重放。
        $summaryLine = @($runOutput | Where-Object {
                $_ -match '^ui-monkey:\s*seed=\S+\s+steps=\d+\s+violations=\d+'
            }) | Select-Object -Last 1
        $hasSummary = ($null -ne $summaryLine -and
            [string]$summaryLine -match '^ui-monkey:\s*seed=(?<seed>\S+)\s+steps=(?<steps>\d+)\s+violations=(?<violations>\d+)')
        if ($exitCode -eq 0) {
            if (-not $hasSummary) {
                # 与 instrument 同一口径：没有权威汇总行就没有证据，不得凭退出码 0 造数。
                throw 'ui-monkey exited 0 without an authoritative "ui-monkey: seed=... steps=... violations=..." summary.'
            }
            $result.Status = 'passed'
            $result.Passed = [int]$Matches[2]
            $result.Detail = ("monkey exploration clean: seed=$($Matches[1]), steps=$($Matches[2]), " +
                "violations=0; journal under $monkeyOut")
        } elseif ($exitCode -eq 1) {
            # 探索命中不是噪音：按公理二，每个命中必须结晶为一条 L1–L4 永久契约，
            # 或在 triage 中显式处置；修复后用 GF_MONKEY_REPLAY_JOURNAL 重放复验。
            $result.Status = 'failed'
            $result.Failed = 1
            # seed 兜底链：汇总行 → 运行参数 → violations.json（权威复现凭据本身带 seed）。
            $seedText = if ($hasSummary) { $Matches[1] } else { [string]$env:GF_MONKEY_SEED }
            if (-not $hasSummary) {
                $violationsPath = Join-Path $monkeyOut 'violations.json'
                if (Test-Path -LiteralPath $violationsPath -PathType Leaf) {
                    try {
                        $seedText = [string]((Get-Content -Raw -LiteralPath $violationsPath |
                            ConvertFrom-Json).seed)
                    } catch { }
                }
            }
            $firstViolation = ''
            $violationsPath = Join-Path $monkeyOut 'violations.json'
            if (Test-Path -LiteralPath $violationsPath -PathType Leaf) {
                try {
                    $entries = @((Get-Content -Raw -LiteralPath $violationsPath |
                        ConvertFrom-Json).violations)
                    if ($entries.Count -gt 0) {
                        $firstViolation = [string]$entries[0].violation
                    }
                } catch { }
            }
            $violationText = if ([string]::IsNullOrWhiteSpace($firstViolation)) {
                ''
            } else { "; 首个违例: $firstViolation" }
            $result.Detail = ("monkey invariant violation (seed=$seedText): evidence under $monkeyOut " +
                '(violations.json + 当帧截图/布局树)' + $violationText +
                '; 结晶为 L1–L4 spec 后用 ' +
                'GF_MONKEY_REPLAY_JOURNAL=<journal.jsonl> 重放复验.')
        } else {
            throw "ui-monkey runner exited $exitCode (infrastructure failure)."
        }
    } catch {
        $_ | Out-String | Add-Content -LiteralPath $result.LogPath -Encoding UTF8 -ErrorAction SilentlyContinue
        $result.Status = 'failed'
        $result.Failed = $result.Failed + 1
        $result.Detail = $_.Exception.Message
    } finally {
        $ErrorActionPreference = $previousErrorPreference
        if ($screenGuardEnabled) {
            $cleanupPrimaryError = $null
            if ([string]$result.Status -eq 'failed') {
                $cleanupPrimaryError = [InvalidOperationException]::new($result.Detail)
            }
            try {
                Restore-GfDeviceScreenKeepOnPreservingFailure $hdc $device.Serial $cleanupPrimaryError
            } catch {
                if ([string]$result.Status -ne 'failed') {
                    $result.Status = 'failed'
                    $result.Failed = $result.Failed + 1
                    $result.Detail = "screen guard restore failed: $($_.Exception.Message)"
                }
            }
        }
    }
    return $result
}

<#
  在匹配设备上执行 instrument 测试并回收结果。
  返回 GfDeviceRunResult。
#>
