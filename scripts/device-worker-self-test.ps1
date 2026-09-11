# device-worker plan / PowerShell-version regression self-test.
#
# Guards the root cause of the "no suites match the requested filters" device-worker failure:
# Windows PowerShell 5.1's ConvertFrom-Json enumerates a top-level JSON array as a single
# object, so the device-worker plan collapses to one bogus workerPair and selection yields 0.
# The family harness must (a) run under / spawn children on PowerShell 7 (pwsh) and (b) parse
# the plan as an array. This runs under pwsh (test-family-platform.ps1 uses pwsh) and asserts both.
$ErrorActionPreference = 'Stop'

if ($PSVersionTable.PSVersion.Major -lt 6) {
    throw 'GodfreyHub device-worker self-test must run under PowerShell 7 (pwsh).'
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

# (2) The family orchestrator (GFSoftware family/runner/test.ps1) carries the
# PS7-guard and no-powershell.exe-fallback text contracts; they are pinned in
# that repo's family/tests/device-runner.test.mjs since the GodfreyHub split.

if ($failures.Count -gt 0) {
    foreach ($f in $failures) { Write-Host "FAIL: $f" }
    throw "GodfreyHub device-worker self-test failed ($($failures.Count) issue(s))."
}
Write-Host 'GodfreyHub device-worker self-test PASS (plan array parsing + PS7 guard).'
