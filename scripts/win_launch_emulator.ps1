param(
  [Parameter(Mandatory = $true, Position = 0)]
  [string]$Executable,

  [Parameter(Mandatory = $true, Position = 1)]
  [string]$InstanceName,

  [Parameter(Mandatory = $true, Position = 2)]
  [string]$LaunchStatusPath,

  [Parameter(Position = 3, ValueFromRemainingArguments = $true)]
  [string[]]$LaunchArguments
)

$ErrorActionPreference = 'Stop'

# UITest testmode pre-boot write for the emu provisioning path (emu-testmode.ps1):
# this launcher is the boot hook every emu_create -start / emu_start goes through,
# and the watcher loop below drives the "earliest-online-moment idempotent write".
# Best-effort: a load/state failure only drops this feature, never boot or window
# naming. GF_EMU_TESTMODE_DISABLE=1 turns the whole thing off (touches no device).
$script:gfEmuTestmode = $null
try {
    if ($env:GF_EMU_TESTMODE_DISABLE -ne '1') {
        . (Join-Path $PSScriptRoot 'emu-testmode.ps1')
        $script:gfEmuTestmode = New-GfEmuTestmodeState -EmulatorExecutable $Executable -InstanceName $InstanceName
    }
} catch {
    $script:gfEmuTestmode = $null
}

function ConvertTo-NativeArgument {
  param([AllowEmptyString()][string]$Value)

  if ($Value -notmatch '[\s"]' -and $Value.Length -gt 0) {
    return $Value
  }

  $escaped = [regex]::Replace($Value, '(\\*)"', '$1$1\"')
  $escaped = [regex]::Replace($escaped, '(\\+)$', '$1$1')
  return '"' + $escaped + '"'
}

function Write-LaunchStatus {
  param([hashtable]$Status)

  $temporaryPath = $LaunchStatusPath + '.' + $PID + '.tmp'
  $json = $Status | ConvertTo-Json -Compress
  [System.IO.File]::WriteAllText($temporaryPath, $json, [System.Text.UTF8Encoding]::new($false))
  Move-Item -LiteralPath $temporaryPath -Destination $LaunchStatusPath -Force
}

try {
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
using System.Text;
public static class GodfreyEmulatorWindow {
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
    [DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc callback, IntPtr lParam);
    [DllImport("user32.dll")] public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint processId);
    [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern bool SetWindowText(IntPtr hWnd, string text);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int maxCount);
}
"@

function Set-ExactProcessWindowTitle {
  param([uint32]$TargetProcessId, [string]$Title)

  $script:targetProcessId = $TargetProcessId
  $script:targetTitle = $Title
  $script:visibleWindowCount = 0
  $callback = {
    param([IntPtr]$windowHandle, [IntPtr]$state)
    $windowProcessId = 0
    [void][GodfreyEmulatorWindow]::GetWindowThreadProcessId($windowHandle, [ref]$windowProcessId)
    if ($windowProcessId -eq $script:targetProcessId -and
        [GodfreyEmulatorWindow]::IsWindowVisible($windowHandle)) {
      $script:visibleWindowCount++
      $currentTitle = [Text.StringBuilder]::new(512)
      [void][GodfreyEmulatorWindow]::GetWindowText($windowHandle, $currentTitle, $currentTitle.Capacity)
      if ($currentTitle.ToString() -ne $script:targetTitle) {
        [void][GodfreyEmulatorWindow]::SetWindowText($windowHandle, $script:targetTitle)
      }
    }
    return $true
  }
  [void][GodfreyEmulatorWindow]::EnumWindows($callback, [IntPtr]::Zero)
  return $script:visibleWindowCount
}

  # Complete every watcher prerequisite before creating Emulator.exe. Once the
  # started handshake is visible, the caller may rely on this exact PID being
  # actively monitored and renamed.
  $startInfo = [System.Diagnostics.ProcessStartInfo]::new()
  $startInfo.FileName = $Executable
  $startInfo.WorkingDirectory = [System.IO.Path]::GetDirectoryName($Executable)
  $startInfo.UseShellExecute = $false
  $startInfo.CreateNoWindow = $true
  $startInfo.Arguments = (($LaunchArguments | ForEach-Object { ConvertTo-NativeArgument $_ }) -join ' ')

  $process = [System.Diagnostics.Process]::Start($startInfo)
  if ($null -eq $process) {
    throw 'Process.Start returned no emulator process.'
  }
  Write-LaunchStatus @{ state = 'started'; pid = $process.Id }

# Keep ownership in the process wrapper instead of scanning every emulator by
# title. Cold boot can reset the Qt title late in startup, so continue enforcing
# it for four minutes; the hidden watcher is tiny and exits early with the VM.
  $deadline = (Get-Date).AddMinutes(4)
  while ((Get-Date) -lt $deadline) {
    if ($process.HasExited) { exit $process.ExitCode }
    if ($null -ne $script:gfEmuTestmode -and -not $script:gfEmuTestmode.Finished) {
      # One step per tick (port attribution / wait-online / param write); any error
      # drops the feature and never touches the boot path.
      try { [void](Update-GfEmuTestmodeState -State $script:gfEmuTestmode) } catch { $script:gfEmuTestmode.Finished = $true }
    }
    Set-ExactProcessWindowTitle -TargetProcessId ([uint32]$process.Id) -Title $InstanceName | Out-Null
    Start-Sleep -Seconds 2
    $process.Refresh()
  }
} catch {
  try { Write-LaunchStatus @{ state = 'error'; message = $_.Exception.Message } } catch { }
  exit 1
}
