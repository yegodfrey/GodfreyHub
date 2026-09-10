[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$Serial,
    [ValidateRange(1, 86400)][int]$TimeoutSeconds = 21600
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')
# Node-based MCP deployment uses this tiny host so it participates in the same
# Windows named mutex as PowerShell family tests. The lease remains owned until
# the parent writes the release marker; a closed pipe also releases it through
# Invoke-GfWithDeviceMutex's finally block.
Invoke-GfWithDeviceMutex -Serial $Serial -Timeout ([TimeSpan]::FromSeconds($TimeoutSeconds)) -Body {
    [Console]::Out.WriteLine('GF_DEVICE_LEASE_READY')
    [Console]::Out.Flush()
    $release = [Console]::In.ReadLine()
    if ($release -ne 'GF_DEVICE_LEASE_RELEASE') {
        throw 'Device lease parent exited before the release marker.'
    }
}
