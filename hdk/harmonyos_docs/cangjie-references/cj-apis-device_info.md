---
name: cangjie-references/cj-apis-device_info
title: ohos.device_info（设备信息）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-device_info
nodePath: 系统 / 基础功能 / Basic Services Kit（基础服务） / 仓颉API / 设备管理 / ohos.device_info（设备信息）
---

# ohos.device_info（设备信息）

device_info模块提供终端设备信息查询，开发者不可配置。

#### 导入模块
    
    
    import kit.BasicServicesKit.*

#### 权限列表

ohos.permission.sec.ACCESS_UDID

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class DeviceInfo
    
    
    public class DeviceInfo {}

**功能：** 提供终端设备信息查询方法。

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop ODID
    
    
    public static prop ODID: String

**功能：** 开发者匿名设备标识符。例如“1234a567-XXXX-XXXX-XXXX-XXXXXXXXXXXX”。

ODID值会在以下场景重新生成：

  * 手机恢复出厂设置。

  * 同一设备上同一个开发者(developerId相同)的应用全部卸载后重新安装时。




ODID生成规则：

  * 根据签名信息里developerId解析出的groupId生成，developerId规则为groupId.developerId，若无groupId则取整个developerId作为groupId。

  * 同一设备上运行的同一个开发者(developerId相同)的应用，ODID相同。

  * 同一个设备上不同开发者(developerId不同)的应用，ODID不同。

  * 不同设备上同一个开发者(developerId相同)的应用，ODID不同。

  * 不同设备上不同开发者(developerId不同)的应用，ODID不同。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/_hhVdznMQU2AFwgdK1-eeg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090220Z&HW-CC-Expire=86400&HW-CC-Sign=482A8DECAB0BD71AD77FD3D664973E4F608F6CE41A713201D4A242F9E3BA085E)

数据长度为37字节。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop abiList
    
    
    public static prop abiList: String

**功能：** 应用二进制接口（Abi）。例如“arm64-v8a”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop bootloaderVersion
    
    
    public static prop bootloaderVersion: String

**功能：** Bootloader版本号。例如“bootloader”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop brand
    
    
    public static prop brand: String

**功能：** 设备品牌名称。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop buildHost
    
    
    public static prop buildHost: String

**功能：** 构建主机。例如“default”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop buildRootHash
    
    
    public static prop buildRootHash: String

**功能：** 构建版本Hash。例如“default”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop buildTime
    
    
    public static prop buildTime: String

**功能：** 构建时间。例如“default”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop buildType
    
    
    public static prop buildType: String

**功能：** 构建类型。例如“default”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop buildUser
    
    
    public static prop buildUser: String

**功能：** 构建用户。例如“default”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop buildVersion
    
    
    public static prop buildVersion: Int32

**功能：** Build版本号，标识编译构建的版本号，值为osFullName中的第四位数值，建议直接使用deviceInfo.buildVersion获取，可提升效率，不建议开发者自主解析osFullName获取。例如“1”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop deviceType
    
    
    public static prop deviceType: String

**功能：** 设备类型。详细请参考[deviceTypes标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#devicetypes标签)。例如“phone”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop displayVersion
    
    
    public static prop displayVersion: String

**功能：** 产品版本。例如“ALN-AL00 5.0.0.1(XXX)”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop distributionOSApiName
    
    
    public static prop distributionOSApiName: String

**功能：** 发行版系统api版本名称。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop distributionOSApiVersion
    
    
    public static prop distributionOSApiVersion: Int32

**功能：** 发行版系统api版本。例如“60001”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop distributionOSName
    
    
    public static prop distributionOSName: String

**功能：** 发行版系统名称。例如“HarmonyOS”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop distributionOSReleaseType
    
    
    public static prop distributionOSReleaseType: String

**功能：** 发行版系统类型。例如“Release”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop distributionOSVersion
    
    
    public static prop distributionOSVersion: String

**功能：** 发行版系统版本号。格式为x.x.x，x是数字。例如“6.0.0”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop featureVersion
    
    
    public static prop featureVersion: Int32

**功能：** Feature版本号，标识规划的新特性版本，值为osFullName中的第三位数值，建议直接使用deviceInfo.featureVersion获取，可提升效率，不建议开发者自主解析osFullName获取。例如“0”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop firstApiVersion
    
    
    public static prop firstApiVersion: Int32

**功能：** 首个版本系统软件API版本。例如“3”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop hardwareModel
    
    
    public static prop hardwareModel: String

**功能：** 硬件版本号。例如“HL1CMSM”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop incrementalVersion
    
    
    public static prop incrementalVersion: String

**功能：** 差异版本号。例如“default”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop majorVersion
    
    
    public static prop majorVersion: Int32

**功能：** Major版本号，随主版本更新增加，值为osFullName中的第一位数值，建议直接使用deviceInfo.majorVersion获取，可提升效率，不建议开发者解析osFullName获取。例如“5”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop manufacture
    
    
    public static prop manufacture: String

**功能：** 设备厂家名称。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop marketName
    
    
    public static prop marketName: String

**功能：** 外部产品系列。例如“HUAWEI Mate 60 Pro”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop osFullName
    
    
    public static prop osFullName: String

**功能：** 系统版本，版本格式HarmonyOS-x.x.x.x,x为数值。例如“HarmonyOS-6.0.2.126”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop osReleaseType
    
    
    public static prop osReleaseType: String

**功能：** 系统的发布类型，取值为：

Canary：面向特定开发者发布的早期预览版本，不承诺API稳定性。

Beta：面向开发者公开发布的Beta版本，不承诺API稳定性。

Release：面向开发者公开发布的正式版本，承诺API稳定性。

例如“Canary1/Beta2/Release”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop productModel
    
    
    public static prop productModel: String

**功能：** 认证型号。例如“ALN-AL00”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop productSeries
    
    
    public static prop productSeries: String

**功能：** 产品系列。例如“ALN”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop sdkApiVersion
    
    
    public static prop sdkApiVersion: Int32

**功能：** 系统软件API版本。例如“22”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop sdkMinorApiVersion
    
    
    public static prop sdkMinorApiVersion: Int32

**功能：** SDK Minor API版本号。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 26.0.0

#### [h2]static prop sdkPatchApiVersion
    
    
    public static prop sdkPatchApiVersion: Int32

**功能：** SDK Patch API版本号。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 26.0.0

#### [h2]static prop securityPatchTag
    
    
    public static prop securityPatchTag: String

**功能：** 安全补丁级别。例如“2024/1/1”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop seniorVersion
    
    
    public static prop seniorVersion: Int32

**功能：** Senior版本号，随局部架构、重大特性增加，值为osFullName中的第二位数值，建议直接使用deviceInfo.seniorVersion获取，可提升效率，不建议开发者自主解析osFullName获取。

例如“0”。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop serial
    
    
    public static prop serial: String

**功能：** 设备序列号SN(Serial Number)。序列号随设备差异。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/uhPBV1dZSGe78dzd0YTvwA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090220Z&HW-CC-Expire=86400&HW-CC-Sign=F40588E8CEF06804DEB65ACD3E3839C5C975FB43569F1A8E993AFAC94A531948)

可作为设备唯一识别码。

**类型：** String

**读写能力：** 只读

**需要权限：** ohos.permission.sec.ACCESS_UDID

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop softwareModel
    
    
    public static prop softwareModel: String

**功能：** 内部软件子型号。例如“ALN-AL00”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop udid
    
    
    public static prop udid: String

**功能：** 设备Udid。例如“9D6AABD147XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXE5536412”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/VhKLJsSIQ7u0woTH8jqhYQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090220Z&HW-CC-Expire=86400&HW-CC-Sign=BDCC0F2C221703D0A8007D820BEA6DC00BE52E0934BE196384D22EEC8AC45132)

数据长度为65字节。可作为设备唯一识别码。

**类型：** String

**读写能力：** 只读

**需要权限：** ohos.permission.sec.ACCESS_UDID

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

#### [h2]static prop versionId
    
    
    public static prop versionId: String

**功能：** 版本ID。由deviceType、manufacture、brand、productSeries、osFullName、productModel、softwareModel、sdkApiVersion、incrementalVersion、buildType拼接组成。例如“wearable/TAS/HarmonyOS-6.0.2.126/TAS-AL00/TAS-AL00/22/default/release:nolog”。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.BasicServicesKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let osFullName = DeviceInfo.osFullName
        Hilog.info(0, "deviceinfo", "the value of the osFullName is: :${osFullName}")
        let productModel = DeviceInfo.productModel
        Hilog.info(0, "deviceinfo", "the value of the productModelis : :${productModel}")
        let brand = DeviceInfo.brand
        Hilog.info(0, "deviceinfo", "the value of the brand is : :${brand}")
        let deviceType = DeviceInfo.deviceType
        Hilog.info(0, "deviceinfo", "the value of the deviceType is: :${deviceType}")
        let udid = DeviceInfo.udid
        Hilog.info(0, "deviceinfo", "the value of the udid is : :${udid}")
        let buildRootHash = DeviceInfo.buildRootHash
        Hilog.info(0, "deviceinfo", "the value of the buildRootHashis : :${buildRootHash}")
        let buildTime = DeviceInfo.buildTime
        Hilog.info(0, "deviceinfo", "the value of the buildTime is: :${buildTime}")
        let buildHost = DeviceInfo.buildHost
        Hilog.info(0, "deviceinfo", "the value of the buildHost is: :${buildHost}")
        let buildUser = DeviceInfo.buildUser
        Hilog.info(0, "deviceinfo", "the value of the buildUser is: :${buildUser}")
        let buildType = DeviceInfo.buildType
        Hilog.info(0, "deviceinfo", "the value of the buildType is: :${buildType}")
        let versionId = DeviceInfo.versionId
        Hilog.info(0, "deviceinfo", "the value of the versionId is: :${versionId}")
        let firstApiVersion = DeviceInfo.firstApiVersion
        Hilog.info(0, "deviceinfo", "the value of thefirstApiVersion is : :${firstApiVersion}")
        let sdkApiVersion = DeviceInfo.sdkApiVersion
        Hilog.info(0, "deviceinfo", "the value of the sdkApiVersionis : :${sdkApiVersion}")
        let buildVersion = DeviceInfo.buildVersion
        Hilog.info(0, "deviceinfo", "the value of the buildVersionis : :${buildVersion}")
        let majorVersion = DeviceInfo.majorVersion
        Hilog.info(0, "deviceinfo", "the value of the majorVersionis : :${majorVersion}")
        let displayVersion = DeviceInfo.displayVersion
        Hilog.info(0, "deviceinfo", "the value of thedisplayVersion is : :${displayVersion}")
        let serial = DeviceInfo.serial
        Hilog.info(0, "deviceinfo", "the value of the serial is : :${serial}")
        let osReleaseType = DeviceInfo.osReleaseType
        Hilog.info(0, "deviceinfo", "the value of the osReleaseTypeis : :${osReleaseType}")
        let incrementalVersion = DeviceInfo.incrementalVersion
        Hilog.info(0, "deviceinfo", "the value of theincrementalVersion is : :${incrementalVersion}")
        let securityPatchTag = DeviceInfo.securityPatchTag
        Hilog.info(0, "deviceinfo", "the value of thesecurityPatchTag is : :${securityPatchTag}")
        let abiList = DeviceInfo.abiList
        Hilog.info(0, "deviceinfo", "the value of the abiList is ::${abiList}")
        let bootloaderVersion = DeviceInfo.bootloaderVersion
        Hilog.info(0, "deviceinfo", "the value of thebootloaderVersion is : :${bootloaderVersion}")
        let hardwareModel = DeviceInfo.hardwareModel
        Hilog.info(0, "deviceinfo", "the value of the hardwareModelis : :${hardwareModel}")
        let softwareModel = DeviceInfo.softwareModel
        Hilog.info(0, "deviceinfo", "the value of the softwareModelis : :${softwareModel}")
        let productSeries = DeviceInfo.productSeries
        Hilog.info(0, "deviceinfo", "the value of the productSeriesis : :${productSeries}")
        let marketName = DeviceInfo.marketName
        Hilog.info(0, "deviceinfo", "the value of the marketName is: :${marketName}")
        let manufacture = DeviceInfo.manufacture
        Hilog.info(0, "deviceinfo", "the value of the manufactureis : :${manufacture}")
        let distributionOSName = DeviceInfo.distributionOSName
        Hilog.info(0, "deviceinfo", "the value of thedistributionOSName is : :${distributionOSName}")
        let distributionOSVersion = DeviceInfo.distributionOSVersion
        Hilog.info(0, "deviceinfo", "the value of the distributionOSVersion is : :${distributionOSVersion}")
        let distributionOSApiVersion = DeviceInfo.distributionOSApiVersion
        Hilog.info(0, "deviceinfo", "the value of the distributionOSApiVersion is : :${distributionOSApiVersion}")
        let distributionOSReleaseType = DeviceInfo.distributionOSReleaseType
        Hilog.info(0, "deviceinfo", "the value of the distributionOSReleaseType is : :${distributionOSReleaseType}")
    let sdkMinorApiVersion = DeviceInfo.sdkMinorApiVersion
        Hilog.info(0, "deviceinfo", "the value of the sdkMinorApiVersion is: :${sdkMinorApiVersion}")
        let sdkPatchApiVersion = DeviceInfo.sdkPatchApiVersion
        Hilog.info(0, "deviceinfo", "the value of the sdkPatchApiVersion is: :${sdkPatchApiVersion}")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### func apiAvailable(Int32)
    
    
    public func apiAvailable(version: Int32): Bool

**功能：** 检查指定的API版本在当前设备上是否可用。该函数提供跨不同HarmonyOS/发行版系统版本的兼容性检查，根据输入格式和API版本范围自动选择合适的版本检查方式。

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
version | Int32 | 是 | - | 要检查的API版本。接受数字格式（例如13），表示HarmonyOS SDK API版本（仅API 26-）。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果指定的API版本在当前设备上可用，返回true，否则返回false。  
  
**示例：**
    
    
    // index.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    let result = apiAvailable(13)
    Hilog.info(0, "deviceinfo", "apiAvailable(13) result: ${result}")

#### func apiAvailable(String)
    
    
    public func apiAvailable(version: String): Bool

**功能：** 检查指定的API版本在当前设备上是否可用。该函数提供跨不同HarmonyOS/发行版系统版本的兼容性检查，根据输入格式和API版本范围自动选择合适的版本检查方式。

**系统能力：** SystemCapability.Startup.SystemInfo

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
version | String | 是 | - | 要检查的API版本。接受字符串格式（例如"26.0.0"、"5.0.1"）：API 26+（version >= 26.0.0）表示HarmonyOS和发行版系统API版本；API 26-（version < 26.0.0）表示发行版系统API版本。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果指定的API版本在当前设备上可用，返回true，否则返回false。  
  
**示例：**
    
    
    // index.cj
    
    import kit.BasicServicesKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    let result = apiAvailable("26.0.0")
    Hilog.info(0, "deviceinfo", "apiAvailable(\"26.0.0\") result: ${result}")
