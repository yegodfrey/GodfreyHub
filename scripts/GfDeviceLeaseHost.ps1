[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$Serial,
    [ValidateRange(1, 86400)][int]$TimeoutSeconds = 21600,
    # Lease token minted by the Node parent (q7 lease model): the parent binds the
    # mutex holder to its lease metadata through this value. Echoed on the ready
    # line as a handshake; legacy callers omit it and get the historical line.
    [string]$LeaseToken = ''
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

. (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')
# Node-based MCP deployment uses this tiny host so it participates in the same
# Windows named mutex as PowerShell family tests. The lease remains owned until
# the parent writes the release marker; a closed pipe also releases it through
# Invoke-GfWithDeviceMutex's finally block.
Invoke-GfWithDeviceMutex -Serial $Serial -Timeout ([TimeSpan]::FromSeconds($TimeoutSeconds)) -Body {
    if ([string]::IsNullOrEmpty($LeaseToken)) {
        [Console]::Out.WriteLine('GF_DEVICE_LEASE_READY')
    } else {
        [Console]::Out.WriteLine('GF_DEVICE_LEASE_READY:' + $LeaseToken)
    }
    [Console]::Out.Flush()
    $release = [Console]::In.ReadLine()
    if ($release -ne 'GF_DEVICE_LEASE_RELEASE') {
        throw 'Device lease parent exited before the release marker.'
    }
}
