Set-StrictMode -Version Latest

function Get-GfLocalTestEvidence {
    param([string]$ModuleRoot, [datetime]$StartedAt)
    $reports = @(Get-ChildItem -LiteralPath (Join-Path $ModuleRoot '.test') -Recurse `
        -Filter 'test_result.txt' -File -ErrorAction SilentlyContinue |
        Where-Object { $_.LastWriteTimeUtc -ge $StartedAt.ToUniversalTime() })
    if ($reports.Count -ne 1) { throw "Expected one fresh local test report for $ModuleRoot, found $($reports.Count)." }
    $text = Get-Content -LiteralPath $reports[0].FullName -Raw -Encoding UTF8
    $summary = [regex]::Matches($text,
        'Tests run:\s*(\d+),\s*Failure:\s*(\d+),\s*Error:\s*(\d+),\s*Pass:\s*(\d+),\s*Ignore:\s*(\d+)')
    if ($summary.Count -ne 1) { throw 'Missing or ambiguous local test summary.' }
    $counts = @($summary[0].Groups | Select-Object -Skip 1 | ForEach-Object { [int]$_.Value })
    if ($counts[0] -le 0 -or $counts[0] -ne ($counts[1] + $counts[2] + $counts[3] + $counts[4])) {
        throw 'Local test summary counts do not close or no cases ran.'
    }
    if ($counts[1] -gt 0 -or $counts[2] -gt 0 -or $counts[4] -gt 0) {
        throw "Local tests not green: failure=$($counts[1]) error=$($counts[2]) ignored=$($counts[4])."
    }
    return [pscustomobject]@{ passed = $counts[3]; failed = $counts[1] + $counts[2]; ignored = $counts[4]
        report = $reports[0].FullName; sha256 = (Get-FileHash -LiteralPath $reports[0].FullName -Algorithm SHA256).Hash }
}

Export-ModuleMember -Function Get-GfLocalTestEvidence
