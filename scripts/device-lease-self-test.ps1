[CmdletBinding()]
param()

# DeviceLease SelfTest: 设备租约孤儿事务回收(q7 方案)的全链路自测。
# 覆盖 q7 仲裁表六组合中可本机模拟的全部组合 + leaseToken 两层锁贯穿 + CAS 单胜 + 留痕。
# 隔离硬约束:
#   * 租约元数据全部落在临时锁根(GF_DEVICE_LEASE_ROOT 重定向), 不碰真实锁根;
#   * 命名互斥体用 Local\ 前缀 + GUID 隔离(GODFREYHUB_DEVICE_MUTEX_PREFIX), 不进真实锁域;
#   * 只操作本脚本自己拉起的测试子进程(假持有者/驱动), 不碰任何设备/模拟器/在跑会话。
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$script:powerShell = (Get-Process -Id $PID).Path
$distWatchdog = Join-Path $repoRoot 'dist\core\lease-watchdog.js'
$tsc = Join-Path $repoRoot 'node_modules\typescript\lib\tsc.js'

if (-not (Test-Path -LiteralPath $distWatchdog)) {
    # npm test 的 build 步骤产物缺失时现场补编译(纯 tsc, 不触碰 version stamp)。
    if (-not (Test-Path -LiteralPath $tsc)) {
        throw 'DeviceLease SelfTest: 缺少 dist 编译产物且本地无 typescript 依赖, 请先 npm run build。'
    }
    & node $tsc '-p' $repoRoot
    if ($LASTEXITCODE -ne 0) { throw 'DeviceLease SelfTest: tsc 编译失败。' }
}
if (-not (Test-Path -LiteralPath $distWatchdog)) {
    throw 'DeviceLease SelfTest: dist\core\lease-watchdog.js 仍缺失。'
}
if ($null -eq (Get-Command node -ErrorAction SilentlyContinue)) {
    throw 'DeviceLease SelfTest: node 不在 PATH(租约看门狗是 Hub 进程内的 TypeScript 模块)。'
}

# ---- 临时锁根与 driver(驱动 .mjs 是纯 ASCII, 由本脚本落盘) ----
$tempBase = [IO.Path]::GetFullPath([IO.Path]::GetTempPath())
$tempRoot = [IO.Path]::GetFullPath((Join-Path $tempBase ('gf-device-lease-selftest-' + [Guid]::NewGuid().ToString('N'))))
if (-not $tempRoot.StartsWith($tempBase, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'DeviceLease SelfTest: 临时根逃出系统临时目录。'
}
$script:leaseRoot = Join-Path $tempRoot 'leases'
[IO.Directory]::CreateDirectory($script:leaseRoot) | Out-Null
$script:driverPath = Join-Path $tempRoot 'lease-driver.mjs'

$driverSource = @'
// DeviceLease SelfTest 驱动: 以一次性 node 进程驱动 dist/core/lease-watchdog.js。
// stdout 最后一行固定是本命令的 JSON 结论, 供 PowerShell 断言。
import fs from "node:fs";
import { pathToFileURL } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const modulePath = process.env.LEASE_MODULE_PATH;
if (!modulePath) throw new Error("LEASE_MODULE_PATH not set");
const lw = await import(pathToFileURL(modulePath).href);

const [command, ...rest] = process.argv.slice(2);
function emit(value) { console.log(JSON.stringify(value)); }

if (command === "key") {
  emit({ key: lw.leaseKeyFor(rest[0]) });
} else if (command === "write-lease") {
  const serial = rest[0];
  const meta = JSON.parse(fs.readFileSync(rest[1], "utf8"));
  meta.serial = serial;
  meta.serialKey = lw.leaseKeyFor(serial);
  const file = lw.leaseFilePath(serial);
  lw.writeLeaseMeta(file, meta);
  emit({ file });
} else if (command === "write-and-scan") {
  // 挂死/Hub 崩溃组合: 写租约与扫描必须在同一驱动进程——hub='self' 时 hubPid=本驱动
  // 进程, 扫描侧按定义存活; 写与扫描分进程会让 hub 变成已退出的死 PID, 行串扰。
  const [serial, token, holderPid, holderStartMs, ttlMs, heartbeatAgeMs, hubMode] = rest;
  const now = Date.now();
  const hubPid = hubMode === "self" ? process.pid : Number(hubMode);
  const hubTimes = await lw.queryProcessStartTimes([hubPid]);
  const meta = {
    version: 1, schemaVersion: 1, kind: "gf-device-lease", serial,
    serialKey: lw.leaseKeyFor(serial), leaseToken: token, transactionId: "device-lease-selftest",
    holderPid: Number(holderPid), holderProcessName: "pwsh",
    holderProcessStartTimeUnixMs: Number(holderStartMs),
    hubPid, hubProcessStartTimeUnixMs: hubTimes.get(hubPid) ?? 0,
    acquiredAt: new Date(now - 1000).toISOString(), acquiredAtUnixMs: now - 1000,
    lastHeartbeatUnixMs: now - Number(heartbeatAgeMs),
    heartbeatIntervalMs: 30000, ttlMs: Number(ttlMs), maxLeaseDurationMs: 3600000,
    status: "active",
  };
  lw.writeLeaseMeta(lw.leaseFilePath(serial), meta);
  emit(await lw.scanLeasesOnce());
} else if (command === "scan-once") {
  emit(await lw.scanLeasesOnce());
} else if (command === "reclaim") {
  const [serial, token, reason] = rest;
  const meta = lw.readLeaseMeta(lw.leaseFilePath(serial));
  if (!meta) {
    emit({ won: false, missing: true });
  } else {
    meta.leaseToken = token; // token 不匹配用例传错 token; CAS 竞争用例传真 token
    emit({ won: await lw.reclaimLease(serial, meta, reason) });
  }
} else if (command === "heartbeat-run") {
  const [serial, token, intervalMs, holdMs] = rest;
  const file = lw.leaseFilePath(serial);
  const before = lw.readLeaseMeta(file);
  if (!before) throw new Error("lease file missing: " + file);
  const handle = lw.startHeartbeat(file, token, Number(intervalMs));
  await delay(Number(holdMs));
  const mid = lw.readLeaseMeta(file);
  const advancedMs = mid ? mid.lastHeartbeatUnixMs - before.lastHeartbeatUnixMs : -1;
  fs.renameSync(file, file + ".gone"); // 模拟租约被接管/删除后心跳必须立即停写
  const reason = await handle.stopped();
  handle.stop();
  emit({ advancedMs, reason });
} else {
  throw new Error("unknown command: " + command);
}
'@
[IO.File]::WriteAllText($script:driverPath, $driverSource, [Text.UTF8Encoding]::new($false))

# ---- 环境隔离: 租约根重定向到临时目录, 互斥体前缀检查完再隔离 ----
$script:previousLeaseRoot = $env:GF_DEVICE_LEASE_ROOT
$script:previousMutexPrefix = $env:GODFREYHUB_DEVICE_MUTEX_PREFIX
$script:previousModulePath = $env:LEASE_MODULE_PATH
$env:GF_DEVICE_LEASE_ROOT = $script:leaseRoot
$env:LEASE_MODULE_PATH = $distWatchdog
$script:liveHolders = @()

function Invoke-LeaseDriver {
    # 驱动一次, 返回 stdout 最后一个非空行(driver 的 JSON 结论)。
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$DriverArguments)
    $stamp = [Guid]::NewGuid().ToString('N')
    $outFile = Join-Path $script:tempRoot ("driver-$stamp.out")
    $errFile = Join-Path $script:tempRoot ("driver-$stamp.err")
    $proc = Start-Process -FilePath 'node' -ArgumentList (@($script:driverPath) + @($DriverArguments)) `
        -PassThru -WindowStyle Hidden -RedirectStandardOutput $outFile -RedirectStandardError $errFile
    if (-not $proc.WaitForExit(60000)) {
        & taskkill.exe /PID $proc.Id /T /F 2>$null | Out-Null
        throw "DeviceLease SelfTest: driver 超时($($DriverArguments -join ' '))。"
    }
    $out = @()
    if (Test-Path -LiteralPath $outFile) {
        $out = @(Get-Content -LiteralPath $outFile | ForEach-Object { "$_".Trim() } | Where-Object { $_ -ne '' })
    }
    if ($out.Count -eq 0) {
        $err = ''
        if (Test-Path -LiteralPath $errFile) { $err = Get-Content -LiteralPath $errFile -Raw }
        throw "DeviceLease SelfTest: driver 失败/无输出(exit=$($proc.ExitCode)) ($($DriverArguments -join ' ')): $err"
    }
    return $out[-1]
}

$script:checkNames = [Collections.Generic.List[string]]::new()
function Assert-Check([string]$Name, [bool]$Condition, [string]$Detail) {
    if (-not $Condition) { throw "DeviceLease SelfTest: 检查 '$Name' 失败: $Detail" }
    $script:checkNames.Add($Name)
    Write-Host ("PASS {0} -- {1}" -f $Name, $Detail)
}

function Get-LeaseKey([string]$Serial) {
    return [string](Invoke-LeaseDriver 'key' $Serial | ConvertFrom-Json).key
}

function Get-LeasePath([string]$Serial) {
    return Join-Path $script:leaseRoot ((Get-LeaseKey $Serial) + '.lease.json')
}

function New-DeadPid {
    # 自己拉起又等退出的短命进程: 返回 PID + 真实创建时间戳(防 PID 复用把死判活)。
    $p = Start-Process -FilePath $script:powerShell -ArgumentList '-NoProfile', '-Command', 'Start-Sleep -Milliseconds 300' `
        -PassThru -WindowStyle Hidden
    $startMs = [long][Math]::Floor((Get-Process -Id $p.Id).StartTime.ToFileTimeUtc() / 10000)
    Wait-Process -Id $p.Id -ErrorAction SilentlyContinue
    Start-Sleep -Milliseconds 150
    return [pscustomobject]@{ Pid = $p.Id; StartMs = $startMs }
}

function New-LiveHolder {
    # 挂死用例的假持有者: 长睡子进程(脚本自始至终只杀自己拉起的进程)。
    $p = Start-Process -FilePath $script:powerShell -ArgumentList '-NoProfile', '-Command', 'Start-Sleep -Seconds 180' `
        -PassThru -WindowStyle Hidden
    $script:liveHolders += $p.Id
    Start-Sleep -Milliseconds 600   # 等 StartTime 稳定可读
    $startMs = [long][Math]::Floor((Get-Process -Id $p.Id).StartTime.ToFileTimeUtc() / 10000)
    return [pscustomobject]@{ Process = $p; Pid = $p.Id; StartMs = $startMs }
}

function New-LeaseFile {
    # PS 侧组租约元数据 -> 驱动经 writeLeaseMeta 原子落盘。
    param(
        [Parameter(Mandatory = $true)][string]$Serial,
        [Parameter(Mandatory = $true)][string]$Token,
        [Parameter(Mandatory = $true)][int]$HolderPid,
        [Parameter(Mandatory = $true)][long]$HolderStartMs,
        [Parameter(Mandatory = $true)][int]$HubPid,
        [Parameter(Mandatory = $true)][long]$HubStartMs,
        [Parameter(Mandatory = $true)][long]$LastHeartbeatMs,
        [long]$AcquiredAtMs = [datetimeoffset]::UtcNow.ToUnixTimeMilliseconds(),
        [long]$TtlMs = 3000,
        [long]$MaxLeaseDurationMs = 3600000
    )
    $meta = [ordered]@{
        version = 1
        schemaVersion = 1
        kind = 'gf-device-lease'
        serial = $Serial
        leaseToken = $Token
        transactionId = 'device-lease-selftest'
        holderPid = $HolderPid
        holderProcessName = 'pwsh'
        holderProcessStartTimeUnixMs = $HolderStartMs
        hubPid = $HubPid
        hubProcessStartTimeUnixMs = $HubStartMs
        acquiredAt = [datetimeoffset]::FromUnixTimeMilliseconds($AcquiredAtMs).UtcDateTime.ToString('o')
        acquiredAtUnixMs = $AcquiredAtMs
        lastHeartbeatUnixMs = $LastHeartbeatMs
        heartbeatIntervalMs = 30000
        ttlMs = $TtlMs
        maxLeaseDurationMs = $MaxLeaseDurationMs
        status = 'active'
    }
    $jsonFile = Join-Path $tempRoot ("lease-$Serial.json")
    $meta | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath $jsonFile -Encoding ASCII
    [void](Invoke-LeaseDriver 'write-lease' $Serial $jsonFile)
    return Get-LeasePath $Serial
}

function ConvertFrom-DriverJson([string]$Line) {
    # PS5.1 的 ConvertFrom-Json 把顶层数组包成 {value=[...]}, PS7 直接返回数组——归一。
    $parsed = $Line | ConvertFrom-Json
    if ($parsed -is [Array]) { return @($parsed) }
    $valueProperty = $parsed.PSObject.Properties['value']
    if ($null -ne $valueProperty -and $valueProperty.Value -is [Array]) { return @($valueProperty.Value) }
    return $parsed
}

function Get-ScanEntry($Scan, [string]$LeasePath) {
    $leaf = [IO.Path]::GetFileName($LeasePath)
    return @($Scan | Where-Object { "$($_.file)" -eq $leaf })
}

function Get-TakeoverJournal([string]$LeasePath) {
    $journalPath = "$LeasePath.journal.ndjson"
    if (-not (Test-Path -LiteralPath $journalPath)) { return @() }
    return @(Get-Content -LiteralPath $journalPath | ForEach-Object { $_ | ConvertFrom-Json })
}

$nowMs = { [datetimeoffset]::UtcNow.ToUnixTimeMilliseconds() }

try {
    # ---- 检查 1: 两层锁同 key 关联(命名互斥体名十六进制 == 租约文件键) ----
    . (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')
    $paritySerial = 'parity-' + [Guid]::NewGuid().ToString('N')
    $mutexName = Get-GfDeviceMutexName -Serial $paritySerial
    $mutexHex = ($mutexName -split '_')[-1]
    $driverKey = Get-LeaseKey $paritySerial
    Assert-Check 'lease-key-parity-mutex' ([string]::Equals($mutexHex, $driverKey, [StringComparison]::OrdinalIgnoreCase)) `
        "Get-GfDeviceMutexName 尾十六进制($($mutexHex.Substring(0, 8))...) 与租约键一致, 两层锁经同一 sha256(serial) 关联"

    # ---- 检查 2: q7 行1 心跳活+未超硬顶 -> 健康, 不回收(零 PID 探测) ----
    $deadA = New-DeadPid
    $deadB = New-DeadPid
    $c2Serial = 'fresh-' + [Guid]::NewGuid().ToString('N')
    $c2Path = New-LeaseFile -Serial $c2Serial -Token 'tok-fresh' -HolderPid $deadA.Pid -HolderStartMs $deadA.StartMs `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs (& $nowMs) -TtlMs 3000
    $scan2 = @(ConvertFrom-DriverJson (Invoke-LeaseDriver 'scan-once'))
    $entry2 = @(Get-ScanEntry $scan2 $c2Path)
    Assert-Check 'fresh-lease-kept' ($entry2.Count -eq 1 -and "$($entry2[0].action)" -eq 'keep') `
        "心跳新鲜(ttl 3s 内)的租约判定 keep, 不回收不探测: $(if ($entry2.Count -gt 0) { $entry2[0].action } else { 'missing' })"

    # ---- 检查 3: q7 行2 心跳断+holder死+hub死 -> 直接接管(ABANDONED) + journal/档案留痕 ----
    $c3Serial = 'alldead-' + [Guid]::NewGuid().ToString('N')
    $c3Path = New-LeaseFile -Serial $c3Serial -Token 'tok-alldead' -HolderPid $deadA.Pid -HolderStartMs $deadA.StartMs `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs ((& $nowMs) - 5000) -TtlMs 3000
    $scan3 = @(ConvertFrom-DriverJson (Invoke-LeaseDriver 'scan-once'))
    $entry3 = @(Get-ScanEntry $scan3 $c3Path)
    $journal3 = @(Get-TakeoverJournal $c3Path)
    $archive3 = @(Get-ChildItem -LiteralPath (Join-Path $script:leaseRoot 'reclaimed') -Filter ((Get-LeaseKey $c3Serial) + '.*.json') -ErrorAction SilentlyContinue)
    $archived3 = if ($archive3.Count -eq 1) { Get-Content -LiteralPath $archive3[0].FullName -Raw | ConvertFrom-Json } else { $null }
    Assert-Check 'heartbeat-ttl-takeover-journaled' (
        ($entry3.Count -eq 1 -and "$($entry3[0].action)" -eq 'takeover' -and "$($entry3[0].reason)" -eq 'holder_and_hub_dead') -and
        ($journal3.Count -eq 1 -and "$($journal3[0].event)" -eq 'takeover' -and "$($journal3[0].detail.reason)" -eq 'holder_and_hub_dead') -and
        ($journal3[0].detail.tookOverFrom.pid -eq $deadA.Pid) -and
        ($null -ne $archived3 -and "$($archived3.status)" -eq 'reclaimed' -and $null -ne $archived3.tookOverFrom -and "$($archived3.reclaimReason)" -eq 'holder_and_hub_dead') -and
        (-not (Test-Path -LiteralPath $c3Path))
    ) "心跳断+双 PID 死 -> takeover(holder_and_hub_dead), journal event=takeover 带 tookOverFrom, 档案 status=reclaimed 后活动文件移除"

    # ---- 检查 4: q7 行6 心跳活+超静态硬顶(缩短系数注入) -> 硬顶回收 ----
    $c4Serial = 'hardcap-' + [Guid]::NewGuid().ToString('N')
    $c4Path = New-LeaseFile -Serial $c4Serial -Token 'tok-hardcap' -HolderPid $deadA.Pid -HolderStartMs $deadA.StartMs `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs (& $nowMs) `
        -AcquiredAtMs ((& $nowMs) - 4000) -MaxLeaseDurationMs 3000
    $scan4 = @(ConvertFrom-DriverJson (Invoke-LeaseDriver 'scan-once'))
    $entry4 = @(Get-ScanEntry $scan4 $c4Path)
    $journal4 = @(Get-TakeoverJournal $c4Path)
    Assert-Check 'max-duration-cap-injected' (
        ($entry4.Count -eq 1 -and "$($entry4[0].reason)" -eq 'max_duration_exceeded') -and
        ($journal4.Count -eq 1 -and "$($journal4[0].detail.reason)" -eq 'max_duration_exceeded')
    ) "心跳仍活但 acquiredAt+3s(注入硬顶)已过 -> 无条件接管(max_duration_exceeded), 防僵尸心跳永生"

    # ---- 检查 5: leaseToken 不匹配 -> 拒绝接管(CAS 过滤), 现场一字不动 ----
    $c5Serial = 'wrongtok-' + [Guid]::NewGuid().ToString('N')
    $c5Path = New-LeaseFile -Serial $c5Serial -Token 'tok-real' -HolderPid $deadA.Pid -HolderStartMs $deadA.StartMs `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs (& $nowMs)
    $before5 = Get-Content -LiteralPath $c5Path -Raw
    $reclaim5 = (Invoke-LeaseDriver 'reclaim' $c5Serial 'tok-WRONG' 'should_not_win') | ConvertFrom-Json
    $after5 = Get-Content -LiteralPath $c5Path -Raw
    $journal5 = @(Get-TakeoverJournal $c5Path)
    Assert-Check 'token-mismatch-refused' (
        ("$($reclaim5.won)" -eq 'False') -and ($before5 -eq $after5) -and ($journal5.Count -eq 0)
    ) "错 token 的 reclaim 输掉 CAS(won=false), 租约文件逐字节不变, 无 journal 留痕"

    # ---- 检查 6: CAS 竞争单胜(两个并发接管进程, 恰好一方 rename 认领成功) ----
    $c6Serial = 'race-' + [Guid]::NewGuid().ToString('N')
    [void](New-LeaseFile -Serial $c6Serial -Token 'tok-race' -HolderPid $deadA.Pid -HolderStartMs $deadA.StartMs `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs ((& $nowMs) - 5000) -TtlMs 3000)
    $raceOut = @('race-a', 'race-b') | ForEach-Object {
        $tag = $_
        $outFile = Join-Path $tempRoot ("race-$tag.out")
        $errFile = Join-Path $tempRoot ("race-$tag.err")
        $p = Start-Process -FilePath 'node' -ArgumentList @($script:driverPath, 'reclaim', $c6Serial, 'tok-race', "race-$tag") `
            -PassThru -WindowStyle Hidden -RedirectStandardOutput $outFile -RedirectStandardError $errFile
        [pscustomobject]@{ Proc = $p; Tag = $tag; OutFile = $outFile; ErrFile = $errFile }
    }
    foreach ($racer in $raceOut) { if (-not $racer.Proc.WaitForExit(60000)) { & taskkill.exe /PID $racer.Proc.Id /T /F 2>$null | Out-Null; throw "DeviceLease SelfTest: race driver $($racer.Tag) 超时。" } }
    $wins = @()
    foreach ($racer in $raceOut) {
        $line = @(Get-Content -LiteralPath $racer.OutFile | ForEach-Object { "$_".Trim() } | Where-Object { $_ -ne '' })[-1]
        $won = ($line | ConvertFrom-Json).won
        if ($won) { $wins += $won }
    }
    $journal6 = @(Get-TakeoverJournal (Get-LeasePath $c6Serial))
    Assert-Check 'cas-race-single-winner' ($wins.Count -eq 1 -and $journal6.Count -eq 1) `
        "并发双接管者竞争同一租约: 恰好一方 won=true, 恰好一条 takeover journal(rename 原子认领)"

    # ---- 检查 7: q7 行2 变体 PID 复用消歧(holder PID 活但创建时间戳对不上 -> 判死, 绝不误杀) ----
    $c7Serial = 'reuse-' + [Guid]::NewGuid().ToString('N')
    $bogusStart = (& $nowMs) - ([long]3 * 365 * 24 * 3600 * 1000)   # 三年前 = 必然对不上
    $c7Path = New-LeaseFile -Serial $c7Serial -Token 'tok-reuse' -HolderPid $PID -HolderStartMs $bogusStart `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs ((& $nowMs) - 5000) -TtlMs 3000
    $scan7 = @(ConvertFrom-DriverJson (Invoke-LeaseDriver 'scan-once'))
    $entry7 = @(Get-ScanEntry $scan7 $c7Path)
    $journal7 = @(Get-TakeoverJournal $c7Path)
    $selfAlive = $null -ne (Get-Process -Id $PID -ErrorAction SilentlyContinue)
    Assert-Check 'pid-reuse-disambiguation-no-kill' (
        ($entry7.Count -eq 1 -and "$($entry7[0].reason)" -eq 'holder_and_hub_dead') -and
        ($journal7.Count -eq 1 -and (-not $journal7[0].detail.holderKilled)) -and
        $selfAlive
    ) "holder PID 在场但创建时间戳对不上(三年前) -> 判原持有者已死并接管, holderKilled=false(时间戳闸门拒绝 taskkill 复用后的活进程)"

    # ---- 检查 8: q7 行4 心跳断+holder活+hub活 -> 挂死, 杀进程树后接管 ----
    $c8Serial = 'hung-' + [Guid]::NewGuid().ToString('N')
    $holder8 = New-LiveHolder
    $c8Path = Get-LeasePath $c8Serial
    $scan8 = @(ConvertFrom-DriverJson (Invoke-LeaseDriver 'write-and-scan' $c8Serial 'tok-hung' "$($holder8.Pid)" "$($holder8.StartMs)" '3000' '5000' 'self'))
    $entry8 = @(Get-ScanEntry $scan8 $c8Path)
    $null = Wait-Process -Id $holder8.Pid -Timeout 15 -ErrorAction SilentlyContinue
    $holder8Gone = $null -eq (Get-Process -Id $holder8.Pid -ErrorAction SilentlyContinue)
    $journal8 = @(Get-TakeoverJournal $c8Path)
    $diag8 = "scan8=$(($scan8 | ConvertTo-Json -Compress -Depth 5)) holder8Gone=$holder8Gone journal8=$(($journal8 | ConvertTo-Json -Compress -Depth 5))"
    Assert-Check 'hung-holder-tree-killed' (
        ($entry8.Count -eq 1 -and "$($entry8[0].reason)" -eq 'heartbeat_stalled_processes_alive') -and
        $holder8Gone -and
        ($journal8.Count -eq 1 -and $journal8[0].detail.holderKilled)
    ) "双进程都活但心跳断(挂死) -> heartbeat_stalled_processes_alive, taskkill /T /F 树杀假持有者, journal holderKilled=true (诊断: $diag8)"

    # ---- 检查 9: q7 行5 心跳断+holder活+hub死 -> Hub 崩溃, 杀 Host 后接管 ----
    $c9Serial = 'hubdead-' + [Guid]::NewGuid().ToString('N')
    $holder9 = New-LiveHolder
    $c9Path = Get-LeasePath $c9Serial
    $scan9 = @(ConvertFrom-DriverJson (Invoke-LeaseDriver 'write-and-scan' $c9Serial 'tok-hubdead' "$($holder9.Pid)" "$($holder9.StartMs)" '3000' '5000' "$($deadB.Pid)"))
    $entry9 = @(Get-ScanEntry $scan9 $c9Path)
    $null = Wait-Process -Id $holder9.Pid -Timeout 15 -ErrorAction SilentlyContinue
    $holder9Gone = $null -eq (Get-Process -Id $holder9.Pid -ErrorAction SilentlyContinue)
    $journal9 = @(Get-TakeoverJournal $c9Path)
    Assert-Check 'hub-dead-holder-killed' (
        ($entry9.Count -eq 1 -and "$($entry9[0].reason)" -eq 'hub_dead_holder_alive') -and
        $holder9Gone -and
        ($journal9.Count -eq 1 -and $journal9[0].detail.holderKilled -and $journal9[0].detail.hubPid -eq $deadB.Pid)
    ) "hub PID 已死而 holder 活 -> hub_dead_holder_alive, 杀 Host 树后接管(journal 记录死 hub PID)"

    # ---- 检查 10: GfDeviceLeaseHost 握手: -LeaseToken 回显 READY:token, RELEASE 干净退出 ----
    $env:GODFREYHUB_DEVICE_MUTEX_PREFIX = 'Local\GfLeaseSelfTest_'
    $releaseFile = Join-Path $tempRoot 'host-release.txt'
    Set-Content -LiteralPath $releaseFile -Value 'GF_DEVICE_LEASE_RELEASE' -Encoding ASCII
    $handshakeSerial = "handshake-$([Guid]::NewGuid().ToString('N'))"
    $hostOut = Join-Path $tempRoot 'host.out'
    $hostErr = Join-Path $tempRoot 'host.err'
    $hostProc = Start-Process -FilePath $script:powerShell -ArgumentList @(
        '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', (Join-Path $PSScriptRoot 'GfDeviceLeaseHost.ps1'),
        '-Serial', $handshakeSerial, '-TimeoutSeconds', '10', '-LeaseToken', 'token-abc-123'
    ) -PassThru -WindowStyle Hidden -RedirectStandardInput $releaseFile -RedirectStandardOutput $hostOut -RedirectStandardError $hostErr
    if (-not $hostProc.WaitForExit(20000)) {
        & taskkill.exe /PID $hostProc.Id /T /F 2>$null | Out-Null
        throw 'DeviceLease SelfTest: 租约宿主握手超时。'
    }
    $hostLines = @(Get-Content -LiteralPath $hostOut -ErrorAction SilentlyContinue | ForEach-Object { "$_".Trim() } | Where-Object { $_ -ne '' })
    $readyLine = @($hostLines | Where-Object { $_ -like 'GF_DEVICE_LEASE_READY*' })[0]
    $hostErrText = ''
    if (Test-Path -LiteralPath $hostErr) { $hostErrText = (Get-Content -LiteralPath $hostErr -Raw) }
    Assert-Check 'host-lease-token-handshake' (
        ("$readyLine" -eq 'GF_DEVICE_LEASE_READY:token-abc-123') -and
        ("$readyLine".StartsWith('GF_DEVICE_LEASE_READY', [StringComparison]::Ordinal)) -and
        ([string]::IsNullOrWhiteSpace($hostErrText))
    ) "宿主带 -LeaseToken 获取命名互斥体后回显 'GF_DEVICE_LEASE_READY:token-abc-123'(前缀形状兼容 includes 解析), RELEASE 后干净退出无 stderr"
    $env:GODFREYHUB_DEVICE_MUTEX_PREFIX = $script:previousMutexPrefix

    # ---- 检查 11: 旧调用方兼容: 不传 -LeaseToken 输出与历史逐字节一致(活持锁路径零变化) ----
    $legacySerial = "legacy-$([Guid]::NewGuid().ToString('N'))"
    $legacyOut = Join-Path $tempRoot 'legacy.out'
    $legacyErr = Join-Path $tempRoot 'legacy.err'
    $legacyProc = Start-Process -FilePath $script:powerShell -ArgumentList @(
        '-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', (Join-Path $PSScriptRoot 'GfDeviceLeaseHost.ps1'),
        '-Serial', $legacySerial, '-TimeoutSeconds', '10'
    ) -PassThru -WindowStyle Hidden -RedirectStandardInput $releaseFile -RedirectStandardOutput $legacyOut -RedirectStandardError $legacyErr
    if (-not $legacyProc.WaitForExit(20000)) {
        & taskkill.exe /PID $legacyProc.Id /T /F 2>$null | Out-Null
        throw 'DeviceLease SelfTest: 旧形宿主超时。'
    }
    $legacyLines = @(Get-Content -LiteralPath $legacyOut -ErrorAction SilentlyContinue | ForEach-Object { "$_".Trim() } | Where-Object { $_ -ne '' })
    $legacyErrText = ''
    if (Test-Path -LiteralPath $legacyErr) { $legacyErrText = (Get-Content -LiteralPath $legacyErr -Raw) }
    Assert-Check 'host-legacy-ready-line' (
        ($legacyLines.Count -eq 1 -and $legacyLines[0] -eq 'GF_DEVICE_LEASE_READY') -and
        ([string]::IsNullOrWhiteSpace($legacyErrText))
    ) "不传 -LeaseToken 的旧调用方仍得到裸 'GF_DEVICE_LEASE_READY' 单行 + 干净释放, 行为与改造前一致"

    # ---- 检查 12: 层1 心跳续租: 独立线程按注入间隔续写, 租约被搬走立即停写 ----
    $c12Serial = 'hb-' + [Guid]::NewGuid().ToString('N')
    [void](New-LeaseFile -Serial $c12Serial -Token 'tok-hb' -HolderPid $deadA.Pid -HolderStartMs $deadA.StartMs `
        -HubPid $deadB.Pid -HubStartMs $deadB.StartMs -LastHeartbeatMs ((& $nowMs) - 200) -TtlMs 90000)
    $hb = (Invoke-LeaseDriver 'heartbeat-run' $c12Serial 'tok-hb' '200' '900') | ConvertFrom-Json
    Assert-Check 'heartbeat-worker-renews-and-stops' (
        ($hb.advancedMs -ge 300) -and ("$($hb.reason)" -eq 'lease_file_deleted')
    ) "独立线程心跳 200ms 注入间隔内推进 lastHeartbeat ($($hb.advancedMs)ms >= 300ms), 租约被接管/删除后立即停写(lease_file_deleted, 不覆盖新现场)"
} finally {
    foreach ($holderPid in $script:liveHolders) {
        $stillThere = Get-Process -Id $holderPid -ErrorAction SilentlyContinue
        if ($null -ne $stillThere) {
            & taskkill.exe /PID $holderPid /T /F 2>$null | Out-Null
        }
    }
    if ($null -eq $script:previousLeaseRoot) {
        Remove-Item Env:GF_DEVICE_LEASE_ROOT -ErrorAction SilentlyContinue
    } else {
        $env:GF_DEVICE_LEASE_ROOT = $script:previousLeaseRoot
    }
    if ($null -eq $script:previousMutexPrefix) {
        Remove-Item Env:GODFREYHUB_DEVICE_MUTEX_PREFIX -ErrorAction SilentlyContinue
    } else {
        $env:GODFREYHUB_DEVICE_MUTEX_PREFIX = $script:previousMutexPrefix
    }
    if ($null -eq $script:previousModulePath) {
        Remove-Item Env:LEASE_MODULE_PATH -ErrorAction SilentlyContinue
    } else {
        $env:LEASE_MODULE_PATH = $script:previousModulePath
    }
    if (Test-Path -LiteralPath $tempRoot -PathType Container) {
        Remove-Item -LiteralPath $tempRoot -Recurse -Force
    }
}

Write-Output ("DeviceLease SelfTest: PASS ({0} checks: {1})" -f $script:checkNames.Count, ($script:checkNames -join ' + '))
