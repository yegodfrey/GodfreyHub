# GodfreyHub-owned HDC selection and bounded retry policy.
Set-StrictMode -Version Latest

# Connect-key/target ids are alphanumeric with . _ : - (same grammar the TS
# side enforces in src/core/emulator.ts); anything else — notably "[Fail]" —
# is diagnostic output, never a target.
$script:GfHdcTargetTokenPattern = '^[A-Za-z0-9][A-Za-z0-9._:-]*$'

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
        $hdcExit = $LASTEXITCODE
        $outputText = ($lines -join "`n")
        # Transport-failure output (exit code or classifier hit) must never be
        # mined for targets: retry instead, so "[Fail] ... connected" cannot
        # masquerade as an online device and short-circuit the bounded retry.
        if ($hdcExit -eq 0 -and -not (Test-HdcTransportFailure -OutputText $outputText)) {
            $targets = @(
                $lines |
                    Where-Object { $_ -match "\bConnected\b" } |
                    ForEach-Object { ($_ -split "\s+")[0].Trim() } |
                    Where-Object { $_ -and ($_ -match $script:GfHdcTargetTokenPattern) } |
                    Select-Object -Unique
            )
            if ($targets.Count -gt 0) {
                return $targets
            }
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
