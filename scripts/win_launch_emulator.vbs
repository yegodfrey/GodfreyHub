Option Explicit

Function QuoteArgument(value)
  QuoteArgument = Chr(34) & Replace(CStr(value), Chr(34), Chr(34) & Chr(34)) & Chr(34)
End Function

Dim arguments, command, index, shell, launchCode, fileSystem, launcher
Set arguments = WScript.Arguments

If arguments.Count < 5 Then
  WScript.Echo "Usage: win_launch_emulator.vbs <Emulator.exe> <window-title> <status-file> -start <instance> [options]"
  WScript.Quit 2
End If

Set fileSystem = CreateObject("Scripting.FileSystemObject")
launcher = fileSystem.BuildPath(fileSystem.GetParentFolderName(WScript.ScriptFullName), "win_launch_emulator.ps1")
command = "powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File " & QuoteArgument(launcher) & " " & QuoteArgument(arguments.Item(0))
For index = 1 To arguments.Count - 1
  command = command & " " & QuoteArgument(arguments.Item(index))
Next

Set shell = CreateObject("WScript.Shell")
' The hidden wrapper owns Emulator.exe and keeps its exact-PID window title
' corrected throughout boot. Dispatch it asynchronously so HDC waiting can run
' concurrently in GodfreyMCP.
launchCode = shell.Run(command, 0, False)
If launchCode <> 0 Then
  WScript.Echo "WScript emulator launch failed: " & CStr(launchCode)
  WScript.Quit launchCode
End If

WScript.Echo "Emulator launch dispatched"
WScript.Quit 0
