# device-worker plan / PowerShell-version regression self-test.
#
# Guards the root cause of the "no suites match the requested filters" device-worker failure:
# Windows PowerShell 5.1's ConvertFrom-Json enumerates a top-level JSON array as a single
# object, so the device-worker plan collapses to one bogus workerPair and selection yields 0.
# The family harness must (a) run under / spawn children on PowerShell 7 (pwsh) and (b) parse
# the plan as an array. This runs under pwsh (test-family-platform.ps1 uses pwsh) and asserts both.
$ErrorActionPreference = 'Stop'

if ($PSVersionTable.PSVersion.Major -lt 6) {
    throw 'GodfreyMCP device-worker self-test must run under PowerShell 7 (pwsh).'
}

$failures = [Collections.Generic.List[string]]::new()
function Assert([bool]$cond, [string]$msg) { if (-not $cond) { $failures.Add($msg) } }

# (1) Plan parsing: a representative device-worker plan must yield one workerPair per element.
$planJson = '[{"app":"Stargaze","suite":"business-journey"},{"app":"Stargaze","suite":"quality"},{"app":"Quiz","suite":"visual-matrix"}]'
$pairs = @($planJson | ConvertFrom-Json)
$set = [Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
foreach ($p in $pairs) { [void]$set.Add("$([string]$p.app)::$([string]$p.suite)") }
Assert ($set.Count -eq 3) "device-worker plan mis-parsed: got $($set.Count) unique pairs, expected 3 (PS 5.1 ConvertFrom-Json array-collapse regression)."
Assert ($set.Contains('Stargaze::business-journey')) 'plan pair key format changed (expected App::suite).'

# (2) Harness guards: test.ps1 must reject Windows PowerShell 5.1 and never fall back to powershell.exe.
$testScript = Get-Content -Raw -Encoding UTF8 -LiteralPath (Join-Path $PSScriptRoot 'test.ps1')
Assert ($testScript -match 'requires PowerShell 7') 'test.ps1 is missing the PowerShell 7 version guard.'
Assert ($testScript -match 'PSVersion\.Major -lt 6') 'test.ps1 must gate on PSVersion.Major < 6.'
Assert ($testScript -notmatch "Resolve-CommandPath\s+'powershell\.exe'") 'Resolve-PowerShellPath must not fall back to Windows PowerShell 5.1.'

if ($failures.Count -gt 0) {
    foreach ($f in $failures) { Write-Host "FAIL: $f" }
    throw "GodfreyMCP device-worker self-test failed ($($failures.Count) issue(s))."
}
Write-Host 'GodfreyMCP device-worker self-test PASS (plan array parsing + PS7 guard).'
