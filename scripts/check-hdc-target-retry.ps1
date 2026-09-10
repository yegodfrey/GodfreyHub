# Contract self-test for the GodfreyMCP HDC retry helper.
$ErrorActionPreference = "Stop"

$helper = Join-Path $PSScriptRoot "hdc-targets.ps1"
if (-not (Test-Path -LiteralPath $helper)) {
    throw "Missing shared HDC target helper: $helper"
}
$helperText = Get-Content -LiteralPath $helper -Raw
if ($helperText -notmatch 'function\s+Get-ConnectedHdcTargets' -or
    $helperText -notmatch 'function\s+Test-HdcTransportFailure' -or
    $helperText -notmatch 'for\s*\(\$attempt\s*=\s*1' -or
    $helperText -notmatch 'Start-Sleep\s+-Milliseconds') {
    throw "HDC target helper must retain bounded retry behavior."
}

$consumers = @('cangjie-device.ps1')
foreach ($consumer in $consumers) {
    $path = Join-Path $PSScriptRoot $consumer
    $text = Get-Content -LiteralPath $path -Raw
    if ($text -notmatch 'hdc-targets\.ps1' -or
        $text -notmatch 'Get-ConnectedHdcTargets') {
        throw "$consumer must use the shared retrying HDC target discovery helper."
    }
}

foreach ($runner in @('cangjie-device.ps1')) {
    $text = Get-Content -LiteralPath (Join-Path $PSScriptRoot $runner) -Raw
    if ($text -notmatch 'Test-HdcTransportFailure' -or
        $text -notmatch 'IsPathRooted\(\$ArtifactDir\)' -or
        $text -notmatch 'GetFullPath') {
        throw "$runner must retry HDC transport failures and normalize a relative ArtifactDir."
    }
}

Write-Host "HDC target retry checks passed."
