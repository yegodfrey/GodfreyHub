Set-StrictMode -Version Latest

# 互斥体名可经 env 覆盖: 调用方需要与其它实例隔离串行域时自行命名, 默认值不绑定任何仓库。
#
# 命名空间必须用 Global\: Local\ 互斥体只在同一登录会话内可见, 跑在服务/SSH/不同 RDP
# 会话里的 MCP 实例会各自拿到锁, "跨进程串行构建/设备租约"的承诺静默失效且不报任何错。
# Global\ 对同会话重入与跨会话互斥都成立, 是唯一正确的默认。Node 侧的 hvigor 文件锁
# 本来就是跨会话的, 两层锁覆盖面自此一致。
$script:GfBuildMutexName = if ($env:GODFREYHUB_BUILD_MUTEX_NAME) {
    $env:GODFREYHUB_BUILD_MUTEX_NAME } else { 'Global\GodfreyHubSerialBuild' }
$script:GfDeviceMutexPrefix = if ($env:GODFREYHUB_DEVICE_MUTEX_PREFIX) {
    $env:GODFREYHUB_DEVICE_MUTEX_PREFIX } else { 'Global\GodfreyHubDeviceLease_' }

function Get-GfDeviceMutexName {
    [CmdletBinding()]
    param([Parameter(Mandatory = $true)][string]$Serial)

    $normalizedSerial = $Serial.Trim().ToUpperInvariant()
    if ([string]::IsNullOrWhiteSpace($normalizedSerial)) {
        throw 'Device mutex requires a non-empty device serial.'
    }
    $sha256 = [Security.Cryptography.SHA256]::Create()
    try {
        $serialBytes = [Text.Encoding]::UTF8.GetBytes($normalizedSerial)
        $serialHash = $sha256.ComputeHash($serialBytes)
        $serialKey = ([BitConverter]::ToString($serialHash)).Replace('-', '')
        return "$($script:GfDeviceMutexPrefix)$serialKey"
    } finally {
        $sha256.Dispose()
    }
}

function Invoke-GfWithNamedMutex {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $true)][scriptblock]$Body,
        [Parameter(Mandatory = $true)][string]$Name,
        [TimeSpan]$Timeout = ([TimeSpan]::FromHours(6)),
        [string]$Purpose = 'Harmony operation'
    )

    $mutex = [Threading.Mutex]::new($false, $Name)
    $ownsMutex = $false
    try {
        try {
            $ownsMutex = $mutex.WaitOne($Timeout)
        } catch [Threading.AbandonedMutexException] {
            # The previous owner died while holding the lease. Windows transfers
            # ownership to this process so the interrupted operation can recover.
            $ownsMutex = $true
        }
        if (-not $ownsMutex) {
            throw "Timed out waiting for $Purpose mutex '$Name'."
        }
        & $Body
    } finally {
        if ($ownsMutex) { $mutex.ReleaseMutex() }
        $mutex.Dispose()
    }
}

function Invoke-GfWithBuildMutex {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $true)][scriptblock]$Body,
        [TimeSpan]$Timeout = ([TimeSpan]::FromHours(6)),
        [string]$Name = $script:GfBuildMutexName
    )

    Invoke-GfWithNamedMutex -Body $Body -Timeout $Timeout -Name $Name `
        -Purpose 'the serial build'
}

function Invoke-GfWithDeviceMutex {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory = $true)][string]$Serial,
        [Parameter(Mandatory = $true)][scriptblock]$Body,
        [TimeSpan]$Timeout = ([TimeSpan]::FromHours(6))
    )

    $name = Get-GfDeviceMutexName -Serial $Serial
    Invoke-GfWithNamedMutex -Body $Body -Timeout $Timeout -Name $name `
        -Purpose "the Harmony device '$Serial' execution"
}
