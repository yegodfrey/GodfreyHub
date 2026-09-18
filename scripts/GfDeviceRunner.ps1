# GfDeviceRunner - hdc device discovery, routing, instrument execution and result collection.
#
# 设备池分流（FAMILY_TEST_ARCHITECTURE §5）：
#   - testmode 设备：运行 GFTest 结构契约（semantic-contract lane）与 Hypium 业务旅程
#     （business-flow lane）；模拟器与真机等价，不做环境区分；
#   - arch 要求是 ABI 事实（如 Clash 内核产物架构），不是设备形态偏好；
#   - UI 设备池（family-tests.json uiDevicePool）：视觉契约套件在池内每个在线
#     profile 上各跑一份。屏幕物理分辨率（Portrait 归一化 短边x长边）是池内设备
#     的身份指纹——所有模拟器 const.product.model 都报 emulator。orientation=
#     landscape 的视觉检查点只在池内声明了 landscape 的 profile 上采集；runner
#     通过应用缓存目录 gf-visual-orientation.json 把该能力下发给设备端采集层，
#     portrait-only 设备上的旋转类用例在设备侧直接空转。
# 不支持 testmode 必须标记 blocked，不得把 Hypium 成功换算成锚点成功。

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# 每台设备本次 run 的视觉采集登记（marker 名 → 采集结果），供 campaign 结束后的
# 视觉比较消费；StrictMode 要求先初始化。
$script:GfVisualCapturesBySerial = @{}
# 失败证据登记（serial → 证据条目数组）；无证据捕获的 run（如 'none' instrument）
# 不进入懒初始化分支，StrictMode 下延迟创建会在读取处抛「变量不存在」。
$script:GfEvidenceBySerial = @{}

. (Join-Path $PSScriptRoot 'GfBuildMutex.ps1')

class GfDeviceInfo {
    [string]$Serial
    [string]$Arch          # arm64 | arm | x86_64 | unknown
    [bool]$TestMode        # persist.ace.testmode.enabled = 1
    [bool]$IsEmulator      # ro.kernel.qemu / hardware goldfish
    [string]$Model
    [string]$OsVersion
    [string]$DeviceClass   # phone | tablet | 2in1 | unknown
    [string]$Screen = 'unknown'        # 归一化物理分辨率 短边x长边，如 1280x2832
    [string]$ProfileName = ''          # uiDevicePool 命中项；空串表示池外设备
    [string]$Orientations = ''         # 命中 profile 声明的方向矩阵，逗号分隔
    [bool]$LandscapeSupported = $true  # 池内按声明；池外设备保持旧行为（允许旋转）
}

class GfDeviceRequirement {
    [string]$Arch = 'any'       # arm64 | any
    [bool]$TestMode = $false    # requires testmode-capable device
    [string]$Profile = ''       # requires one named uiDevicePool profile
}

class GfDeviceRunResult {
    [string]$SuiteKey
    [string]$Status            # passed | failed | blocked | skipped
    [string]$DeviceSerial
    [string]$Detail
    [string]$LogPath
    [int]$Passed = 0
    [int]$Failed = 0
    [int]$Skipped = 0
    [string]$Arch
    [bool]$TestMode = $false
    [bool]$IsEmulator = $false
    [string]$DeviceClass
    [string]$DeviceProfile = ''
    [bool]$LandscapeSupported = $true
    [bool]$MutationOrFaultProof = $false
    [object]$MatrixCoverage
    [object]$PerformanceMetrics
    [object]$StabilityMetrics
    [object[]]$ClosureEvidence = @()
    [object[]]$BlockedCapabilityEvidence = @()
    # 渲染侧探针在本设备上量出的溢出锚点（GF_TEXT_OVERFLOW）。必须显式声明成类型成员：
    # PowerShell 类拒绝给实例赋未声明属性，SuiteInstrument 里那一行赋值只在跑到时才炸。
    [string[]]$TextTruncationAnchors = @()
    [object[]]$VisualEvidence = @()
    [object[]]$FailureEvidence = @()
    [object[]]$ClassResults = @()
    [string[]]$ExecutedClasses = @()
    [string[]]$ReusedClasses = @()
    [object]$Preparation
    [object]$Timings
}

# A family test invocation is an application campaign, not a sequence of unrelated
# cold launches. The state is deliberately process-local: a worker owns exactly one
# device lane, so reuse cannot escape the command that selected the source tree,
# target and ordered suite list.
$script:GfInstrumentCampaigns = @{}

# ---- 分块加载(顺序即依赖顺序: 清单 -> 预备/视觉 -> 套件执行器) ----
# 拆分仅为维护性; dot-source 语义与单文件完全一致, 函数与类仍定义在调用方作用域。
. (Join-Path $PSScriptRoot 'runner/PrepareCache.ps1')
. (Join-Path $PSScriptRoot 'runner/DeviceInventory.ps1')
. (Join-Path $PSScriptRoot 'runner/PreparationVisual.ps1')
. (Join-Path $PSScriptRoot 'runner/SuiteCangjieMonkey.ps1')
. (Join-Path $PSScriptRoot 'runner/SuiteInstrument.ps1')
