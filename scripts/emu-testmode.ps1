# emu-testmode - emu 置备通路的 UITest testmode 前置写入(机制缺口: testmode 是引导期读取)。
#
# 背景: persist.ace.testmode.enabled 是引导期读取——值不在 boot 前写入, 该次 boot 的 uitest
# 引导形态就不是 testmode, 新置备模拟器第一次跑 UITest 必须人工补设。本文件是修法的
# scripts 侧实现, 供 win_launch_emulator.ps1(emu_create -start 与 emu_start 每次必经的
# boot 钩子)在其 watcher 循环里逐 tick 驱动。
#
# 置备通路调研结论(2026-09-21, 按 Hub 真实机制定案):
#   1. cfg 参数通路不存在: Emulator.exe 二进制全文件 0 处出现 persist.ace/testmode,
#      实例 config.ini 的 hw.* 是宿主模拟器参数, 不向 guest 透传 param——往 config.ini
#      造一个 testmode 键是假通路, 不做。
#   2. 全新实例首次 boot 前无 hdc 通道, "boot 前 hdc shell param 写入"物理不可能。
#   3. 可行形态: persist param 本身跨重启持久。在每次 emu boot 最早在线时刻幂等确保
#      param=1: 首次在线即写入, 从该实例第二个 boot 起(含全部暖/冷启动)"boot 前已写入"
#      成立, 人工补设步骤被消除。
#
# 纪律:
#   - best-effort: 钩子任何失败不得破坏 boot 路径(调用方逐 tick try/catch, 本文件不 throw)。
#   - 严格端口归属: 只对 Emulator.exe -list -details 中本实例名对应的 hw.hdc.port 写;
#     归属不到就不写——打错设备比不写严重(与 enableUiTest 多目标拒写同原则)。
#   - 关停开关: GF_EMU_TESTMODE_DISABLE=1 时调用方整体跳过, 不碰任何设备。
#   - param 对子与 src enableUiTest 同源: testmode=1 + suspend_manager=0, 写后 param get
#     读回验证(部分镜像 shell 对 persist.ace.* 假成功, 读回不通就如实报 verified=false)。

# hdc 可执行文件定位: GF_GODFREYHUB_HDC 优先, PATH 兜底(与 DeviceInventory Get-HdcPath 同源)。
function Get-GfEmuHdcExecutable {
    $providerHdc = [string]$env:GF_GODFREYHUB_HDC
    if (-not [string]::IsNullOrWhiteSpace($providerHdc) -and (Test-Path -LiteralPath $providerHdc -PathType Leaf)) {
        return [IO.Path]::GetFullPath($providerHdc)
    }
    $hdc = Get-Command hdc -ErrorAction SilentlyContinue
    if ($null -ne $hdc) { return $hdc.Source }
    return ''
}

# `hdc list targets` 输出 → 仅 127.0.0.1:<port> 在线模拟器目标; [Fail]/诊断行不得混入。
function Get-GfEmuOnlineTargets {
    param([AllowEmptyString()][string]$ListTargetsText)

    $targets = @()
    foreach ($line in ($ListTargetsText -split '\r?\n')) {
        $candidate = $line.Trim()
        if ($candidate -match '^127\.0\.0\.1:(\d+)$') { $targets += $candidate }
    }
    return @($targets)
}

# `Emulator.exe -list -details` 输出 → 本实例的 hw.hdc.port。
# CLI 可能先打 banner 再输出 JSON: 截首个 '[' 到最后一个 ']' 再解析(与 src
# parseJsonArrayPrefix 同口径); 端口只收纯数字("notset"=未分配 → $null 继续等)。
function Get-GfEmuInstancePort {
    param(
        [AllowEmptyString()][string]$DetailsText,
        [Parameter(Mandatory = $true)][string]$InstanceName
    )

    $start = $DetailsText.IndexOf('[')
    $end = $DetailsText.LastIndexOf(']')
    if ($start -lt 0 -or $end -le $start) { return $null }
    $parsed = $null
    try { $parsed = $DetailsText.Substring($start, $end - $start + 1) | ConvertFrom-Json } catch { return $null }
    if ($null -eq $parsed) { return $null }
    foreach ($entry in @($parsed)) {
        if ([string]$entry.name -ne $InstanceName) { continue }
        $port = [string]$entry.'hw.hdc.port'
        if ($port -match '^\d+$') { return $port }
        return $null
    }
    return $null
}

# param get 读回 → 下一步动作: '1'=已使能跳过; 其余(0/空/1002 假成功垃圾)都写。
function Get-GfEmuTestmodeAction {
    param([AllowEmptyString()][string]$Readback)

    if ($Readback.Trim() -eq '1') { return 'skip' }
    return 'write'
}

# 建置备状态: 每次调用产出一份独立状态, 由 Update-GfEmuTestmodeState 逐 tick 推进。
# -HdcExecutable/-TimeoutSec 显式注入供自测; 省略时 hdc 走 Get-GfEmuHdcExecutable,
# 预算默认 210s(< win_launch_emulator watcher 的 4 分钟生命周期)。
function New-GfEmuTestmodeState {
    param(
        [Parameter(Mandatory = $true)][string]$EmulatorExecutable,
        [Parameter(Mandatory = $true)][string]$InstanceName,
        [string]$HdcExecutable = '',
        [int]$TimeoutSec = 210
    )

    if ([string]::IsNullOrEmpty($HdcExecutable)) { $HdcExecutable = Get-GfEmuHdcExecutable }
    return [pscustomobject]@{
        EmulatorExecutable = $EmulatorExecutable
        InstanceName       = $InstanceName
        HdcExecutable      = $HdcExecutable
        Deadline           = (Get-Date).AddSeconds($TimeoutSec)
        Finished           = $false
        Port               = $null      # 已归属到的 hw.hdc.port(纯数字串), 未归属为 $null
        Target             = ''         # 写入目标(127.0.0.1:<port>)
        Action             = ''         # skip / write / timeout / skipped
        Verified           = $false     # param get 读回 == '1'
        Detail             = ''         # 人读的收尾说明
        Ticks              = 0
    }
}

function Stop-GfEmuTestmodeState {
    param($State, [string]$Action, [string]$Detail)

    $State.Action = $Action
    $State.Detail = $Detail
    $State.Finished = $true
}

# 推进一个 tick。返回 $true 表示已收尾(Finished), 调用方可停止驱动。
# 每个 tick 至多一步: 归属端口 → 等在线 → param 读回/写入/验证, 命中即收尾。
# hdc/Emulator 的任何失败都按"本 tick 未命中"吞掉, 到 deadline 才收尾, 中途绝不 throw。
function Update-GfEmuTestmodeState {
    param([Parameter(Mandatory = $true)]$State)

    if ($State.Finished) { return $true }
    $State.Ticks++
    if ((Get-Date) -ge $State.Deadline) {
        $seen = if ($State.Target) { $State.Target } elseif ($State.Port) { "127.0.0.1:$($State.Port)" } else { '目标未归属' }
        Stop-GfEmuTestmodeState $State 'timeout' "预算内未完成($($State.Ticks) ticks, 已见 $seen)"
        return $true
    }
    try {
        # 步骤 1: 端口归属(-list -details 每次启动中都会重试, 直到拿到纯数字端口)。
        if (-not $State.Port) {
            if (-not (Test-Path -LiteralPath $State.EmulatorExecutable -PathType Leaf)) {
                Stop-GfEmuTestmodeState $State 'skipped' "Emulator.exe 不存在: $($State.EmulatorExecutable)"
                return $true
            }
            $details = (& $State.EmulatorExecutable '-list' '-details' 2>$null | Out-String)
            $port = Get-GfEmuInstancePort -DetailsText $details -InstanceName $State.InstanceName
            if ($port) { $State.Port = $port }
            return $false
        }
        # 步骤 2: 等本实例目标在 hdc 上线(端口严格归属, 其他设备在线不写)。
        if (-not $State.Target) {
            if ([string]::IsNullOrEmpty($State.HdcExecutable) -or
                -not (Test-Path -LiteralPath $State.HdcExecutable -PathType Leaf)) {
                Stop-GfEmuTestmodeState $State 'skipped' 'hdc 不可用(GF_GODFREYHUB_HDC/PATH 均未命中)'
                return $true
            }
            $targetsText = (& $State.HdcExecutable 'list' 'targets' 2>$null | Out-String)
            $expected = "127.0.0.1:$($State.Port)"
            if ((Get-GfEmuOnlineTargets -ListTargetsText $targetsText) -contains $expected) {
                $State.Target = $expected
            }
            return $false
        }
        # 步骤 3: param 读回 → 幂等写入对子 → 读回验证(一 tick 内完成, 单次约百毫秒级)。
        $readback = (& $State.HdcExecutable '-t' $State.Target 'shell' 'param get persist.ace.testmode.enabled' 2>$null | Out-String)
        $action = Get-GfEmuTestmodeAction -Readback $readback
        if ($action -eq 'skip') {
            $State.Verified = $true
            Stop-GfEmuTestmodeState $State 'skip' "目标 $($State.Target) testmode 已使能"
            return $true
        }
        [void](& $State.HdcExecutable '-t' $State.Target 'shell' 'param set persist.ace.testmode.enabled 1' 2>$null | Out-String)
        [void](& $State.HdcExecutable '-t' $State.Target 'shell' 'param set persist.sys.suspend_manager_enabled 0' 2>$null | Out-String)
        $afterWrite = (& $State.HdcExecutable '-t' $State.Target 'shell' 'param get persist.ace.testmode.enabled' 2>$null | Out-String)
        $State.Verified = ($afterWrite.Trim() -eq '1')
        $verdict = if ($State.Verified) { '已写入并读回验证' } else { '已写入但读回未确认(镜像对 persist.ace.* 假成功, 以 Driver 套件实测为准)' }
        Stop-GfEmuTestmodeState $State 'write' "目标 $($State.Target) testmode 前置写入: $verdict"
        return $true
    } catch {
        # 本 tick 失败不收尾也不 throw: boot 早期 hdc/Emulator CLI 抖动是常态, 留给下个 tick。
        return $false
    }
}
