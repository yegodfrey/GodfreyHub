# OneClickPush.ps1 - popup commit-message input, writes UTF-8 msg file
# Called by OneClickPush.bat. Empty message or Cancel => exit 1 (no sync).
Add-Type -AssemblyName Microsoft.VisualBasic
$msg = [Microsoft.VisualBasic.Interaction]::InputBox('请输入提交说明（留空或取消则不同步）：', 'OneClickPush - 提交并推送到远程', '')
if ([string]::IsNullOrWhiteSpace($msg)) {
    exit 1
}
$target = Join-Path $env:TEMP 'OneClickPush_commit_msg.txt'
[System.IO.File]::WriteAllText($target, $msg, (New-Object System.Text.UTF8Encoding($false)))
