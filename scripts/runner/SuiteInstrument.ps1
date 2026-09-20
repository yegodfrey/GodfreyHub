# GfDeviceRunner 分块 5/5: ArkTS instrument 套件/campaign 与 Hypium 业务旅程执行器。

function Get-GfInstrumentCampaignBudget {
    <#
      campaign 总截止的预算来源（Docs/OPEN_ITEMS_LEDGER.md §E-3 裁决 A：声明即预算）。
      旧实现只看类数 min(14400, 600 + 180 × 类数)，于是注册表里逐家写的 timeoutSec
      在执行面上什么都不买——§E-3 记的正是这条背离（六家声明之和普遍是被授予预算的
      1.1~7.4 倍，"调了但不生效"）。裁决 A 把预算改为由**递进来的声明**决定：

          granted = min(CAP, BASE + Σ timeoutSec(带声明的套件) + 180 × 未声明套件的类数)

      一条声明都没带时退回旧公式（逐项相等，含"整场实际跑了多少类"这个口径），这是
      本函数的正对照契约；部分套件带声明时，未声明的那些仍按旧的 180s/类计价，但
      哪些套件走了兜底必须被点名（FallbackSuiteKeys）——静默兜底就是下一个 §E-3。
      声明之和撞上 CAP 时 CapApplied 为真：多写的秒数确实不生效。家族侧
      family/validate-family-tests.ps1 拒绝这种清单，但它的判据不是"声明 ≤ 实获"——
      实获额现在由声明派生，"声明 ≤ min(CAP, BASE + Σ 声明)" 对任何非负声明恒真，是
      条空判据（写它就是在造下一个 §E-3 的假牙）。可强制的两条是：一场 App 的声明之和
      减去 BASE 必须留在 CAP 之内（超出部分被 min() 砍掉，即"调了但不生效"），且没有
      任何套件能声明超过其测量需求的秒数。
      三个常量与 Docs/OPEN_ITEMS_LEDGER.md §E-3 同口径；GFSoftware 侧的等额判据在
      family/validate-family-tests.ps1，两者由 family/tests/campaign-budget.test.mjs
      逐字对账，任一侧改了常数不通知另一侧就红。
    #>
    [CmdletBinding()]
    param(
        [object[]]$Suites = @(),
        [int]$RunClassCount = 0
    )

    $capSec = 14400
    $baseSec = 600
    $fallbackPerClassSec = 180

    $declaredSec = 0
    $fallbackKeys = [Collections.Generic.List[string]]::new()
    $fallbackClassCount = 0
    foreach ($suite in @($Suites)) {
        if ($null -eq $suite) { continue }
        $declaredValues = @(Get-GfCollectionProperty -InputObject $suite -Name 'timeoutSec')
        $declared = 0
        if ($declaredValues.Count -gt 0) { $declared = [int]$declaredValues[0] }
        if ($declared -gt 0) {
            $declaredSec += $declared
            continue
        }
        $idValues = @(Get-GfCollectionProperty -InputObject $suite -Name 'id')
        $fallbackKeys.Add($(if ($idValues.Count -gt 0) { [string]$idValues[0] } else { '(unnamed suite)' }))
        $executor = @(Get-GfCollectionProperty -InputObject $suite -Name 'executor') | Select-Object -First 1
        # 未声明的套件按它自己带来的类数收旧价：兜底不是免费的，它正是 §E-3 里
        # "声明与真约束系统性背离"的那半边。
        $fallbackClassCount += [Math]::Max(1, @(Get-GfCollectionProperty -InputObject $executor -Name 'testClasses').Count)
    }

    $chargedFallbackClasses = 0
    if ($declaredSec -eq 0) {
        if (@($Suites).Count -eq 0) { $fallbackKeys.Add('(no suites handed to the run)') }
        $chargedFallbackClasses = [Math]::Max(1, $(if ($RunClassCount -gt 0) { $RunClassCount } else { $fallbackClassCount }))
    } elseif ($fallbackKeys.Count -gt 0) {
        $chargedFallbackClasses = $fallbackClassCount
    }

    $fallbackSec = $fallbackPerClassSec * $chargedFallbackClasses
    $uncappedSec = $baseSec + $declaredSec + $fallbackSec
    [pscustomobject]@{
        CapSec            = $capSec
        BaseSec           = $baseSec
        PerClassFallbackSec = $fallbackPerClassSec
        DeclaredSec       = $declaredSec
        FallbackSec       = $fallbackSec
        FallbackSuiteKeys = @($fallbackKeys)
        UncappedSec       = $uncappedSec
        CapApplied        = $uncappedSec -gt $capSec
        BudgetSec         = [Math]::Min($capSec, $uncappedSec)
    }
}

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
        [string]$UiAuditScript = '',
        # 聚合 campaign 把它的成员套件原样递进来：campaign 只有一条合成套件
        # （'instrument-campaign'），它自己没有 timeoutSec，预算必须由成员声明之和决定。
        [object[]]$FundingSuites = @()
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
        # 失败证据暂存域：与视觉采集同一 SELinux 约束，独立目录避免与视觉 sweep
        # 互相清理。任何断言层（不止视觉）的失败都可能在本次 campaign 内发射证据。
        Invoke-GfHdcChecked $hdc $device.Serial @('shell',
            'rm -rf /data/local/tmp/gfevidence && mkdir -p /data/local/tmp/gfevidence') `
            'failure-evidence staging directory reset' | Out-Null

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
            # -b/-m 与下面的 aa start 同等待遇走 POSIX 单引号转义: 这两个值来自外部配置
            # (家族 harness/应用清单), 裸插值含单引号即破坏命令、可注入设备 shell。
            # classFilter 有白名单校验, bundle/module 也必须同等约束。
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
                ' -b ' + (ConvertTo-GfShellLiteral $BundleName) +
                ' -m ' + (ConvertTo-GfShellLiteral $ModuleName) +
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
            # campaign 总截止: 设备掉线/USB 卡死会让 aa test 永不退出, 过去轮询无限
            # 自旋且一直持有设备租约, 其他等锁方要熬满互斥体超时(6 小时)。
            # 预算 = 递进来的 timeoutSec 声明之和（§E-3 裁决 A：声明即预算）；没带声明的
            # 套件才退回旧的 类数 × 单类上限(-s timeout 120000)+ 启动/部署余量，上限 4 小时。
            $campaignTimedOut = $false
            $budgetSuites = @($FundingSuites)
            if ($budgetSuites.Count -eq 0) { $budgetSuites = @($Suite) }
            $campaignBudget = Get-GfInstrumentCampaignBudget -Suites $budgetSuites `
                -RunClassCount $runClasses.Count
            $budgetLine = "campaign budget: granted=$($campaignBudget.BudgetSec)s of cap $($campaignBudget.CapSec)s " +
                "(base $($campaignBudget.BaseSec)s + declared $($campaignBudget.DeclaredSec)s " +
                "+ per-class fallback $($campaignBudget.FallbackSec)s)"
            Write-Host "  BUDGET    $SuiteKey - $budgetLine"
            $testOutput.Add("===== $budgetLine =====")
            if (@($campaignBudget.FallbackSuiteKeys).Count -gt 0) {
                # 兜底必须吵：静默按类数计价就是 §E-3 的复发形态。
                $fallbackDetail = @($campaignBudget.FallbackSuiteKeys) -join ', '
                Write-Warning "  BUDGET FALLBACK $SuiteKey - suite(s) declare no timeoutSec, charged $($campaignBudget.PerClassFallbackSec)s/class instead: $fallbackDetail"
                $testOutput.Add("===== BUDGET FALLBACK (declared budget not used): $fallbackDetail " +
                    "charged $($campaignBudget.PerClassFallbackSec)s x classes = $($campaignBudget.FallbackSec)s =====")
            }
            if ($campaignBudget.CapApplied) {
                # 声明之和超出上限：多出来的秒数确实不生效（"调了但不生效"），点名它。
                Write-Warning "  BUDGET CAP $SuiteKey - declared budget needs $($campaignBudget.UncappedSec)s but the ceiling is $($campaignBudget.CapSec)s; $($campaignBudget.UncappedSec - $campaignBudget.CapSec)s of declarations are NOT granted"
                $testOutput.Add("===== BUDGET CAP APPLIED: needs $($campaignBudget.UncappedSec)s, granted $($campaignBudget.BudgetSec)s =====")
            }
            $campaignDeadline = (Get-Date).AddSeconds($campaignBudget.BudgetSec)
            $visualCaptures = @{}
            $evidenceCaptures = @{}
            if ($null -ne $scopeProc) {
                while (-not $scopeProc.HasExited) {
                    if ((Get-Date) -gt $campaignDeadline) {
                        $campaignTimedOut = $true
                        # 整树终止(hdc + 设备端 shell); Kill(bool) 在 PS5.1/.NET Framework
                        # 不存在, taskkill 是两代 PowerShell 都可靠的整树终止手段。
                        & taskkill.exe /PID $scopeProc.Id /T /F 2>$null | Out-Null
                        break
                    }
                    Start-Sleep -Milliseconds 400
                    Invoke-GfVisualMarkerSweep -Hdc $hdc -Serial $device.Serial -ArtifactDir $ArtifactDir `
                        -Captures $visualCaptures -Sink $testOutput
                    Invoke-GfEvidenceMarkerSweep -Hdc $hdc -Serial $device.Serial -ArtifactDir $ArtifactDir `
                        -Captures $evidenceCaptures -Sink $testOutput
                }
                $scopeProc.WaitForExit()
                Invoke-GfVisualMarkerSweep -Hdc $hdc -Serial $device.Serial -ArtifactDir $ArtifactDir `
                    -Captures $visualCaptures -Sink $testOutput
                Invoke-GfEvidenceMarkerSweep -Hdc $hdc -Serial $device.Serial -ArtifactDir $ArtifactDir `
                    -Captures $evidenceCaptures -Sink $testOutput
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
            if ($evidenceCaptures.Count -gt 0) {
                if ($null -eq $script:GfEvidenceBySerial) { $script:GfEvidenceBySerial = @{} }
                $existingEvidence = @()
                if ($script:GfEvidenceBySerial.Contains($device.Serial)) {
                    $existingEvidence = @($script:GfEvidenceBySerial[$device.Serial])
                }
                $script:GfEvidenceBySerial[$device.Serial] = @($existingEvidence + @($evidenceCaptures.Values))
            }
            $scopeText = $scopeOutput -join "`n"
            $testOutput.Add("===== class campaign $classFilter (hdc exit=$scopeExit) =====")
            foreach ($line in $scopeOutput) { $testOutput.Add([string]$line) }
            if ($campaignTimedOut) {
                # 超时即失败: 记入 scopeFailures 使本次不通过、复用证据不落盘。
                $scopeFailures.Add("${classFilter}: campaign exceeded total time budget and was killed")
            }
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
                if ($scopeExit -eq 0 -and $scopeFailures.Count -eq 0 -and -not $campaignTimedOut) {
                    # 只持久化"有 terminal passed 证据"的类: 零用例类(filter 拼错/为空)
                    # 若搭车持久化, 后续 -ReuseBuild 永久静默跳过它——证据被污染一次,
                    # 之后每轮都假绿。
                    foreach ($testClass in $runClasses) {
                        $classEvidence = @($result.ClassResults | Where-Object { [string]$_.name -eq $testClass })
                        if ($classEvidence.Count -gt 0 -and [string]$classEvidence[0].status -eq 'passed') {
                            [void]$campaign.PassedClasses.Add($testClass)
                        }
                    }
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
        # 设备密度(px per vp)取自 uiDevicePool 的 profile 声明, 供结构性差分把 px 容差换算成 vp。
        $visualDensity = 0
        $visualPoolEntry = @($UiDevicePool | Where-Object { [string]$_.profile -eq [string]$device.ProfileName })
        if ($visualPoolEntry.Count -eq 1) { $visualDensity = [double]$visualPoolEntry[0].densityPixels }
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
                    -PlatformRoot $PlatformRoot -ArtifactDir $ArtifactDir -Check $visualCheck `
                    -DensityPixels $visualDensity
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

        # 失败证据包随套件结果出账：每个条目自带 png/layout/failure.json 路径与
        # 来源/摘要，报告层不重新解析设备日志即可链接到"当时那一帧"。
        if ($null -ne $script:GfEvidenceBySerial -and $script:GfEvidenceBySerial.Contains($device.Serial)) {
            $result.FailureEvidence = @($script:GfEvidenceBySerial[$device.Serial])
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

    # 渲染侧探针报警：一次运行哪怕用例全绿，只要屏幕上量出"这一行放不下"就是不成立的交付。
    # 它必须在 Hub 执行器这一层也判得动——否则从 hub_test 直跑的车道会把截断读成通过。
    $truncationAnchors = @(Get-GfTextTruncationAnchors $outputText)
    $result.TextTruncationAnchors = @($truncationAnchors)
    $truncationSuffix = ''
    if ($truncationAnchors.Count -gt 0) {
        $truncationSuffix = " [text truncated per rendering-side probe: $($truncationAnchors -join ', ')]"
    }

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
        $result.Detail = "$systemUiPrerequisiteDetail$truncationSuffix"
        $result.Failed = 0
} elseif ($outputText -match 'Driver is unavailable|17000002') {
    # Device prerequisite (testmode/UITest daemon) is not effective: the Driver is
    # unavailable, so every class-level "failed" after it is untrustworthy. Record
    # blocked per the family rule (device prerequisite missing) - never let environment
    # noise masquerade as assertion failures and pollute the release zero-failure gate.
    $result.Status = 'blocked'
    $result.Detail = "device testmode prerequisite not effective: UITest Driver unavailable (17000002)$truncationSuffix"
    $result.Failed = 0
    } elseif ($truncationAnchors.Count -gt 0) {
        # 环境没有被阻塞、标记却是设备真测出来的：这就是产品缺陷，优先级排在用例计数之前。
        $result.Status = 'failed'
        $result.Detail = "text truncated per rendering-side probe: $($truncationAnchors -join ', ')"
        $result.Failed = [Math]::Max($result.Failed, 1)
    } elseif ($scopeFailures.Count -gt 0) {
        $result.Status = 'failed'
        $result.Detail = $scopeFailures -join '; '
        $result.Failed = [Math]::Max($result.Failed, 1)
    } elseif ($result.Failed -gt 0) {
        $result.Status = 'failed'
        $result.Detail = "pass=$($result.Passed) fail=$($result.Failed) skip=$($result.Skipped)"
    } elseif ($result.Passed -gt 0) {
        $result.Status = 'passed'
        $result.Detail = "pass=$($result.Passed) fail=0 skip=$($result.Skipped)"
    } else {
        $result.Status = 'failed'
        $result.Detail = 'no test cases executed (check log)'
    }

    # 能力缺口只如实标注在结果里：不改 Status，也不动框架的权威计数（用例被框架算作
    # 通过就是它的事实）。是否据此判定本次运行不完整，由调用方按设备池覆盖与清单
    # 声明的豁免决定。
    if (@($blockedCapabilities).Count -gt 0) {
        $result.Detail = "$($result.Detail) [capability not exercised: " +
            "$(Get-GfBlockedCapabilityDetail $blockedCapabilities)]"
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
        # 能力即属性：campaign 的设备要求取成员套件中第一个声明 capabilities 的。
        capabilities = ($capSuite = @($Suites | Where-Object { $_.PSObject.Properties.Name -contains "capabilities" }) | Select-Object -First 1).capabilities
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
        -AnchorRulePath $AnchorRulePath -UiAuditScript $UiAuditScript -ColdStart:$campaignCold `
        -FundingSuites @($Suites)

    $failedClassNames = @($aggregate.ClassResults | Where-Object { [string]$_.status -eq 'failed' } |
        ForEach-Object { [string]$_.name })
    $failedVisualNames = @($aggregate.VisualEvidence | Where-Object {
        [string]$_.status -ne 'passed' -or [int]$_.exitCode -ne 0
    } | ForEach-Object { [string]$_.name })
    $hasAttributedFailure = $failedClassNames.Count -gt 0 -or $failedVisualNames.Count -gt 0
    # 词边界匹配: "frame" 是 "framework"/"workflow" 的子串, 任何失败 Detail 里出现
    # "framework died"都会被误判为性能失败, 进而把无关错误追加到所有 performance 层套件。
    $performanceFailure = [string]$aggregate.Detail -match '(?i)\bperformance\b|\bbudget\b|\bpresentedFrames\b|\bframe\b'
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
        $child.FailureEvidence = @($aggregate.FailureEvidence)
        $requestedClasses = @($suite.executor.testClasses | ForEach-Object { [string]$_ })
        $child.ExecutedClasses = @($requestedClasses)
        # 暖缓存复用的类不产生 ClassResults(本次未执行, 无 OHOS_REPORT 行), 但它们在
        # 上次同一制品位已 terminal passed。必须合成 terminal passed 条目, 否则下方
        # "no terminal class result"校验会把上一次全绿的整体打红——聚合层报 pass、
        # 子结果报 failed 的自相矛盾分裂(纯 semantic-contract 套件全军覆没)。
        $reusedPassed = @($aggregate.ReusedClasses | ForEach-Object { [string]$_ })
        $childClassResults = [Collections.Generic.List[object]]::new()
        $childClassResults.AddRange(@($aggregate.ClassResults | Where-Object {
            $requestedClasses -contains [string]$_.name
        }))
        foreach ($testClass in $requestedClasses) {
            $alreadyListed = @($childClassResults | Where-Object { [string]$_.name -eq $testClass })
            if ($alreadyListed.Count -eq 0 -and $reusedPassed -contains $testClass) {
                $childClassResults.Add([pscustomobject][ordered]@{
                    name = $testClass; passed = 0; failed = 0; ignored = 0
                    status = 'passed'; reused = $true
                })
            }
        }
        $child.ClassResults = @($childClassResults)
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
        } else {
            $reusedInSuite = @($requestedClasses | Where-Object { $reusedPassed -contains $_ }).Count
            $reusedNote = if ($reusedInSuite -gt 0) { " reused=$reusedInSuite" } else { '' }
            $child.Status = 'passed'
            $child.Detail = "pass=$($child.Passed) fail=0 skip=$($child.Skipped)$reusedNote (shared App campaign)"
        }
        if (@($childBlocked).Count -gt 0) {
            $child.Detail = "$($child.Detail) [capability not exercised: " +
                "$(Get-GfBlockedCapabilityDetail $childBlocked)]"
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

    # 设备拓扑类能力缺失：journey 出账 [GF_TEST_BLOCKED] 时按 blocked 归档，
    # 不归咎应用、也不伪装通过——与 instrument 路径的 blocked-capability 同一口径。
    $labCapabilityBlocked = [regex]::Match($outputText,
        '\[GF_TEST_BLOCKED\]\s+capability=(?<capability>[A-Za-z0-9._-]+)(?:\s+reason=(?<reason>[^\r\n]+))?')
    if ($labCapabilityBlocked.Success) {
        $capability = $labCapabilityBlocked.Groups['capability'].Value
        $reason = $labCapabilityBlocked.Groups['reason'].Value.Trim()
        $result.Status = 'blocked'
        $result.Failed = 0
        $result.Detail = "capability not exercised: $capability$(if ($reason) { " ($reason)" })"
        Write-Host "  BLOCKED   $($result.SuiteKey) - $($result.Detail)"
        return $result
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
