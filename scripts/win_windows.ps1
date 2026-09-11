# ============================================================
# GodfreyHub Windows 辅助脚本(随包分发, 不依赖用户本地任何脚本)
# Mode:
#   rename  - 把运行中模拟器窗口标题改为实例名(-Name 可选: 只改指定实例;
#             -WaitSec >0 时循环等待窗口出现并持续纠正, 用于刚启动的场景)
#   ports   - 输出指定实例进程拥有的本机监听端口
#   taskbar - 任务栏按钮从不合并(重启资源管理器生效)
# (停止实例请用官方 Emulator.exe -stop <name>)
# 依赖: PowerShell 5.1+, DevEco Studio 模拟器
# ============================================================
param(
    [ValidateSet('rename','ports','taskbar')][string]$Mode,
    [string]$Name = '',
    [int]$WaitSec = 0
)

# Node 端按 UTF-8 解码子进程输出: PS 5.1 管道默认走控制台 OEM 代码页(zh-CN 为 GBK),
# 不显式切 UTF-8 则所有中文消息在 MCP 返回的 out 字段里必然乱码。
[Console]::OutputEncoding = [Text.Encoding]::UTF8

Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
using System.Text;
public class EmuWinApi {
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
    [DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc cb, IntPtr lParam);
    [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint pid);
    [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
    [DllImport("user32.dll")] public static extern bool SetWindowText(IntPtr hWnd, string text);
    [DllImport("user32.dll")] public static extern int GetWindowText(IntPtr hWnd, StringBuilder sb, int max);
}
"@

function Get-VisibleWindowHandles {
    param([uint32]$ProcessId)
    $script:handles = New-Object System.Collections.Generic.List[IntPtr]
    $script:targetPid = $ProcessId
    $cb = {
        param($h, $l)
        $wpid = 0
        [void][EmuWinApi]::GetWindowThreadProcessId($h, [ref]$wpid)
        if ($wpid -eq $script:targetPid -and [EmuWinApi]::IsWindowVisible($h)) {
            $script:handles.Add($h)
        }
        return $true
    }
    [void][EmuWinApi]::EnumWindows($cb, [IntPtr]::Zero)
    return $script:handles.ToArray()
}

function Get-WindowTitle {
    param([IntPtr]$Hwnd)
    if ($Hwnd -eq [IntPtr]::Zero) { return '' }
    $sb = New-Object System.Text.StringBuilder 256
    [void][EmuWinApi]::GetWindowText($Hwnd, $sb, 256)
    return $sb.ToString()
}

# 运行中的模拟器: PID / 实例名(从进程命令行 -start/-hvd 解析) / 可见窗口句柄
function Get-RunningEmulatorInfo {
    $procs = Get-CimInstance Win32_Process -Filter "Name='Emulator.exe'" -ErrorAction SilentlyContinue
    $result = @()
    foreach ($p in $procs) {
        $iname = $null
        if ($p.CommandLine -match '"?-(?:hvd|start)"?\s+(?:"([^"]+)"|([^\s]+))') {
            $iname = if ($Matches[1]) { $Matches[1] } else { $Matches[2] }
        }
        $result += [PSCustomObject]@{
            Pid          = [uint32]$p.ProcessId
            InstanceName = $iname
            Hwnds        = @(Get-VisibleWindowHandles -ProcessId ([uint32]$p.ProcessId))
        }
    }
    return $result
}

function Rename-Infos {
    param($Infos)
    # 日志行走 Write-Host(不进管道), 返回值只保留计数:
    # 过去日志行与返回值混在同一个输出流, 调用方的 "$changed" 实际是"日志行+数字"数组。
    $changed = 0
    foreach ($info in $Infos) {
        if (-not $info.InstanceName) { continue }
        foreach ($h in @($info.Hwnds)) {
            $old = Get-WindowTitle -Hwnd $h
            if ($old -eq $info.InstanceName) { continue }
            if ([EmuWinApi]::SetWindowText($h, $info.InstanceName)) {
                Write-Host "[$($info.InstanceName)] [$old] -> [$($info.InstanceName)] (PID $($info.Pid))"
                $changed++
            }
        }
    }
    return [int]$changed
}

switch ($Mode) {
    'ports' {
        $infos = @(Get-RunningEmulatorInfo)
        if ($Name) { $infos = @($infos | Where-Object { $_.InstanceName -eq $Name }) }
        foreach ($info in $infos) {
            $listeners = @(Get-NetTCPConnection -State Listen -OwningProcess ([int]$info.Pid) -ErrorAction SilentlyContinue |
                Where-Object { $_.LocalAddress -eq '127.0.0.1' -and $_.LocalPort -ge 5555 -and $_.LocalPort -le 16555 } |
                Sort-Object LocalPort -Unique)
            foreach ($listener in $listeners) {
                Write-Output "127.0.0.1:$($listener.LocalPort)"
            }
        }
    }
    'rename' {
        $deadline = if ($WaitSec -gt 0) { (Get-Date).AddSeconds($WaitSec) } else { $null }
        while ($true) {
            $infos = @(Get-RunningEmulatorInfo)
            if ($Name) { $infos = @($infos | Where-Object { $_.InstanceName -eq $Name }) }
            $changed = Rename-Infos -Infos $infos
            if (-not $deadline) { Write-Output "完成, 共修改 $changed 个窗口。"; break }
            # 等待模式: 目标实例已出现且已改名 -> 再保持纠正 10 秒(防模拟器改回默认标题)后退出
            $seen = ($infos | Where-Object { $_.Hwnds.Count -gt 0 }).Count -gt 0
            if ($seen -and $changed -eq 0) {
                Start-Sleep -Seconds 10
                Rename-Infos -Infos $infos | Out-Null
                Write-Output "[$Name] 窗口已命名并保持。"
                break
            }
            if ((Get-Date) -gt $deadline) {
                # 等待超时 = 任务失败: 必须以非零退出, 否则调用方(以 exit code 判定
                # 的 Node 端)会把"窗口始终未出现/未改名"当成成功。
                Write-Output "等待超时(${WaitSec}s), 未见 [$Name] 可见窗口。"
                exit 1
            }
            Start-Sleep -Seconds 3
        }
    }
    'taskbar' {
        $keyPath = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced'
        if (-not (Test-Path $keyPath)) { New-Item -Path $keyPath -Force | Out-Null }
        Set-ItemProperty -Path $keyPath -Name 'TaskbarGlomLevel' -Value 2 -Type DWord
        $cur = (Get-ItemProperty -Path $keyPath -Name 'TaskbarGlomLevel').TaskbarGlomLevel
        if ($cur -eq 2) {
            Write-Output '已设置 TaskbarGlomLevel=2(从不合并), 重启资源管理器生效...'
            Stop-Process -Name explorer -Force -ErrorAction SilentlyContinue
            Start-Sleep -Seconds 2
            Start-Process explorer.exe
            Write-Output '完成。'
        } else {
            Write-Output '注册表写入失败, 请检查权限。'
            exit 1
        }
    }
}
