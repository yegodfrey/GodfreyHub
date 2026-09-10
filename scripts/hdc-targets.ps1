# GodfreyMCP-owned HDC selection and bounded retry policy.
Set-StrictMode -Version Latest

function Get-ConnectedHdcTargets {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $true)]
        [string]$Hdc,
        [ValidateRange(1, 10)]
        [int]$Attempts = 4,
        [ValidateRange(0, 5000)]
        [int]$InitialDelayMs = 750
    )

    for ($attempt = 1; $attempt -le $Attempts; $attempt++) {
        $lines = @(& $Hdc list targets -v 2>&1)
        $targets = @(
            $lines |
                Where-Object { $_ -match "\bConnected\b" } |
                ForEach-Object { ($_ -split "\s+")[0].Trim() } |
                Where-Object { $_ } |
                Select-Object -Unique
        )
        if ($targets.Count -gt 0) {
            return $targets
        }
        if ($attempt -lt $Attempts) {
            Start-Sleep -Milliseconds ($InitialDelayMs * $attempt)
        }
    }
    return @()
}

function Test-HdcTransportFailure {
    [CmdletBinding()]
    param([AllowEmptyString()][string]$OutputText)

    return $OutputText -match '(?im)(\[Fail\].*(?:target|device|connect-key)|' +
        'Device not found or connected|Not match target founded|' +
        'ExecuteCommand need connect-key|E001005)'
}
