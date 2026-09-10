---
name: cangjie-references/cj-apis-resource_manager
title: ohos.resource_manager（资源管理）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-resource_manager
nodePath: 应用框架 / Localization Kit（本地化开发服务） / 仓颉API / ohos.resource_manager（资源管理）
---

# ohos.resource_manager（资源管理）

resource_manager模块提供资源获取能力。根据当前的Configuration配置提供获取应用资源对象读取接口。

Configuration配置包括语言、区域、横竖屏、Mcc（移动国家码）和Mnc（移动网络码）、Device capability（设备类型）、Density（分辨率）。

#### 导入模块
    
    
    import kit.LocalizationKit.AppResource

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class Configuration
    
    
    public class Configuration {
        public var direction: Direction
        public var locale: String
        public var deviceType: DeviceType
        public var screenDensity: ScreenDensity
        public var colorMode: ColorMode
        public var mcc: UInt32
        public var mnc: UInt32
    }

**功能：** 表示当前设备的状态。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var colorMode
    
    
    public var colorMode: ColorMode

**功能：** 颜色模式。

**类型：** ColorMode

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var deviceType
    
    
    public var deviceType: DeviceType

**功能：** 设备类型。

**类型：** DeviceType

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var direction
    
    
    public var direction: Direction

**功能：** 屏幕方向。

**类型：** Direction

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var locale
    
    
    public var locale: String

**功能：** 语言文字国家地区。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var mcc
    
    
    public var mcc: UInt32

**功能：** 移动国家码。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var mnc
    
    
    public var mnc: UInt32

**功能：** 移动网络码。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var screenDensity
    
    
    public var screenDensity: ScreenDensity

**功能：** 屏幕密度。

**类型：** ScreenDensity

**读写能力：** 可读写

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### class DeviceCapability
    
    
    public class DeviceCapability {
        public var screenDensity: ScreenDensity
        public var deviceType: DeviceType
    }

**功能：** 表示设备支持的能力。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var deviceType
    
    
    public var deviceType: DeviceType

**功能：** 当前设备类型。

**类型：** DeviceType

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]var screenDensity
    
    
    public var screenDensity: ScreenDensity

**功能：** 当前设备屏幕密度。

**类型：** ScreenDensity

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### class ResourceManager
    
    
    public class ResourceManager {}

**功能：** 提供访问应用资源和系统资源的能力。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]func addResource(String)
    
    
    public func addResource(path: String): Unit

**功能：** 应用运行时加载指定的资源路径，实现资源覆盖。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/dxgrflS9Tm-GE5HA3-3pNw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=6A5DC5C8892E8E1553B016CB9CE75134AB7AF3761D273EA263846CDEE30A7804)

rawfile和resfile目录不支持资源覆盖。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 资源路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001010 | Invalid overlay path.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let path = "/data/storage/el2/base/haps/entry/files/library-default-unsigned.hsp"
        resourceManager.addResource(path)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func closeRawFd(String)
    
    
    public func closeRawFd(path: String): Unit

**功能：** 关闭resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd）。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | rawfile文件路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001005 | Invalid relative path.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let rawfd = resourceManager.closeRawFd("test.txt")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getBoolean(UInt32)
    
    
    public func getBoolean(resId: UInt32): Bool

**功能：** 获取指定资源ID值对应的布尔值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 资源ID值对应的布尔值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.boolean.test)
        let result = resourceManager.getBoolean(res.id)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getBooleanByName(String)
    
    
    public func getBooleanByName(resName: String): Bool

**功能：** 获取指定资源名称对应的布尔值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 资源名称对应的布尔值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let result = resourceManager.getBooleanByName("test")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getColor(UInt32)
    
    
    public func getColor(resId: UInt32): UInt32

**功能：** 获取指定资源ID对应的颜色值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
  
**返回值：**

类型 | 说明  
---|---  
UInt32 | 返回资源ID值对应的颜色值（十进制）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.color.test)
        let result = resourceManager.getColor(res.id)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getColorByName(String)
    
    
    public func getColorByName(resName: String): UInt32

**功能：** 获取指定资源名称对应的颜色值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
  
**返回值：**

类型 | 说明  
---|---  
UInt32 | 返回资源名称对应的颜色值（十进制）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let result = resourceManager.getColorByName("test")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getConfiguration()
    
    
    public func getConfiguration(): Configuration

**功能：** 获取设备的Configuration。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Configuration | 设备的Configuration。  
  
**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let configuration = resourceManager.getConfiguration()
        Hilog.info(0, "test", configuration.locale, "")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getDeviceCapability()
    
    
    public func getDeviceCapability(): DeviceCapability

**功能：** 获取设备的DeviceCapability。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
DeviceCapability | 设备的DeviceCapability。  
  
**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let deviceCapability = resourceManager.getDeviceCapability()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getLocales(Bool)
    
    
    public func getLocales(includeSystem!: Bool = false): Array<String>

**功能：** 获取应用的语言列表。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
includeSystem | Bool | 否 | false |  **命名参数。** 是否包含系统资源，默认值为false。 \- false：表示仅获取应用资源的语言列表。 \- true：表示获取系统资源和应用资源的语言列表。 当使用系统资源管理对象获取语言列表时，includeSystem值无效，始终返回系统资源语言列表。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | 返回获取的语言列表，列表中的字符串由语言、脚本（可选）、地区（可选），按照顺序使用中划线“-”连接组成。  
  
**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        resourceManager.getLocales()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getMediaBase64ByName(String, ?ScreenDensity)
    
    
    public func getMediaBase64ByName(resName: String, density!: ?ScreenDensity = None): String

**功能：** 获取指定资源名称对应的默认或指定的屏幕密度图片资源Base64编码。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源ID。  
density | ?ScreenDensity | 否 | None | **命名参数。** 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。  
  
**返回值：**

类型 | 说明  
---|---  
String | 资源名称对应的图片资源Base64编码。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let code = resourceManager.getMediaBase64ByName("test")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getMediaByName(String, ?ScreenDensity)
    
    
    public func getMediaByName(resName: String, density!: ?ScreenDensity = None): Array<UInt8>

**功能：** 获取指定资源名称对应的默认或指定的屏幕密度媒体文件内容。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
density | ?ScreenDensity | 否 | None | **命名参数。** 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。  
  
**返回值：**

类型 | 说明  
---|---  
Array<UInt8> | 资源名称对应的媒体文件内容。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,ScreenDensity}
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        resourceManager.getMediaByName("test", density: ScreenMdpi)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getMediaContent(UInt32, ?ScreenDensity)
    
    
    public func getMediaContent(resId: UInt32, density!: ?ScreenDensity = None): Array<UInt8>

**功能：** 获取指定资源ID对应的默认或指定的屏幕密度媒体文件内容。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
density | ?ScreenDensity | 否 | None | **命名参数。** 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。  
  
**返回值：**

类型 | 说明  
---|---  
Array<UInt8> | 资源ID对应的媒体文件内容。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,ScreenDensity,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.media.test)
        resourceManager.getMediaContent(res.id, density: ScreenSdpi)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getMediaContentBase64(UInt32, ?ScreenDensity)
    
    
    public func getMediaContentBase64(resId: UInt32, density!: ?ScreenDensity = None): String

**功能：** 获取指定资源ID对应的默认或指定的屏幕密度图片资源Base64编码。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
density | ?ScreenDensity | 否 | None | **命名参数。** 资源获取需要的屏幕密度，0或缺省表示默认屏幕密度。  
  
**返回值：**

类型 | 说明  
---|---  
String | 资源ID对应的图片资源Base64编码。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.media.test)
        let code = resourceManager.getMediaContentBase64(res.id)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getNumber(UInt32)
    
    
    public func getNumber(resId: UInt32): NumberValueType

**功能：** 获取指定资源ID对应的Int32数值或者Float32数值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID。  
  
**返回值：**

类型 | 说明  
---|---  
NumberValueType |  资源ID值对应的数值。 Int32对应的是原数值，Float32不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值，具体参考示例代码。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import kit.PerformanceAnalysisKit.*
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.integer.test)
        let number = resourceManager.getNumber(res.id)
        match (number) {
            case Int32Value(v) => Hilog.info(0, "test", v.toString(), "")
            case Float32Value(v) => Hilog.info(0, "test", v.toString(), "")
            case _ => throw IllegalArgumentException("The type is not supported.")
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getNumberByName(String)
    
    
    public func getNumberByName(resName: String): NumberValueType

**功能：** 获取指定资源名称对应的Int32数值或者Float32数值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
  
**返回值：**

类型 | 说明  
---|---  
NumberValueType |  资源名称对应的数值。 Int32对应的是原数值，Float32不带单位时对应的是原数值，带"vp","fp"单位时对应的是px值。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import kit.PerformanceAnalysisKit.*
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let number = resourceManager.getNumberByName("test")
        match (number) {
            case Int32Value(v) => Hilog.info(0, "test", v.toString(), "")
            case Float32Value(v) => Hilog.info(0, "test", v.toString(), "")
            case _ => throw IllegalArgumentException("The type is not supported.")
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getPluralStringByName(String, Int64)
    
    
    public func getPluralStringByName(resName: String, num: Int64): String

**功能：** 获取指定资源名称，指定资源数量的单复数字符串。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/upkfCoblTVaSrOdLYDzZvg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=5BCCF4EFBBE8CB0D1D733F0AB9832B83A4C8277049122B88725F35537D766C35)

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
num | Int64 | 是 | - | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。  
  
**返回值：**

类型 | 说明  
---|---  
String | 根据指定数量获取指定资源名称表示的单复数字符串。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let result = resourceManager.getPluralStringByName("test", 1)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getPluralStringValue(UInt32, Int64)
    
    
    public func getPluralStringValue(resId: UInt32, num: Int64): String

**功能：** 获取指定资源ID，指定资源数量的单复数字符串。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/yYIx_k1dTnKI2udFP2ZO6g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=E799236EFE5F05A05D625876C7E3BF2CDB01287F8E21EA789DB30BCE09C95946)

中文环境下，字符串不区分单复数；其他语言环境下，字符串区分单复数，具体规则参考[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
num | Int64 | 是 | - | 数量值。根据当前语言的复数规则获取该数量值对应的字符串数字，语言的复数规则参见[语言单复数规则](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html)。  
  
**返回值：**

类型 | 说明  
---|---  
String | 根据指定数量获取指定ID字符串表示的单复数字符串。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.plural.test)
        let result = resourceManager.getPluralStringValue(res.id, 1)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getRawFd(String)
    
    
    public func getRawFd(path: String): RawFileDescriptor

**功能：** 获取resources/rawfile目录下rawfile文件所在HAP的文件描述符（fd）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/T3Dg5HsFSvCM3Ffurc2e9w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=B5F38CBA813711E089147E11C19C7D2B85B85F3075E9A0F49822321262AEA314)

文件描述符（fd）使用完毕后需调用closeRawFd关闭fd，避免资源泄露。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | rawfile文件路径。  
  
**返回值：**

类型 | 说明  
---|---  
[RawFileDescriptor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-raw_file_descriptor#class-rawfiledescriptor) | rawfile文件所在HAP的文件描述符（fd）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001005 | Invalid relative path.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import kit.PerformanceAnalysisKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let rawfd = resourceManager.getRawFd("test.txt")
        Hilog.info(0, "test", "${rawfd.fd} ${rawfd.offset} ${rawfd.length}", "")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getRawFileContent(String)
    
    
    public func getRawFileContent(path: String): Array<UInt8>

**功能：** 获取resources/rawfile目录下对应的rawfile文件内容。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | rawfile文件路径。  
  
**返回值：**

类型 | 说明  
---|---  
Array<UInt8> | 返回获取的rawfile文件内容。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001005 | Invalid relative path.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        resourceManager.getRawFileContent("test.txt")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getRawFileList(String)
    
    
    public func getRawFileList(path: String): Array<String>

**功能：** 获取resources/rawfile目录下文件夹及文件列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/DZKQScKuTcu5ZGSfGO98IA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=8901B7586478940E4C404CE0D34873C597E05A65872BD29078AFCB33B7179443)

若文件夹中无文件，则抛出异常；若文件夹中有文件，则返回文件夹及文件列表。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | rawfile文件夹路径。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | rawfile文件目录下的文件夹及文件列表。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001005 | Invalid relative path.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        resourceManager.getRawFileList("")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getString(UInt32, Array<ArgsValueType>)
    
    
    public func getString(resId: UInt32, args: Array<ArgsValueType>): String

**功能：** 获取指定资源ID对应的字符串，并根据args参数对字符串进行格式化。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
args | Array<ArgsValueType> | 是 | - |  格式化字符串资源参数。 支持参数类型：%d、%f、%s、%%、。 说明：%%转义为%。 举例：%%d格式化后为%d字符串。  
  
**返回值：**

类型 | 说明  
---|---  
String | 资源ID值对应的格式化字符串。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
9001006 | The resource is referenced cyclically.  
9001007 | Failed to format the resource obtained based on the resource ID.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let resource = @r(app.string.test)
        let result = resourceManager.getString(resource.id)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getStringArrayByName(String)
    
    
    public func getStringArrayByName(resName: String): Array<String>

**功能：** 获取指定资源名称对应的字符串数组。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | 对应资源名称的字符串数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        resourceManager.getStringArrayByName("test")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getStringArrayValue(UInt32)
    
    
    public func getStringArrayValue(resId: UInt32): Array<String>

**功能：** 获取指定资源ID对应的字符串数组。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resId | UInt32 | 是 | - | 资源ID值。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | 资源ID值对应的字符串数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001001 | Invalid resource ID.  
9001002 | No matching resource is found based on the resource ID.  
9001006 | The resource is referenced cyclically.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__}
    import ohos.arkui.state_macro_manage.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let res = @r(app.strarray.test)
        let result = resourceManager.getStringArrayValue(res.id)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func getStringByName(String, Array<ArgsValueType>)
    
    
    public func getStringByName(resName: String, args: Array<ArgsValueType>): String

**功能：** 获取指定资源名称对应的字符串，并根据args参数对字符串进行格式化。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resName | String | 是 | - | 资源名称。  
args | Array<ArgsValueType> | 是 | - |  格式化字符串资源参数。 支持参数类型：%d、%f、%s、%%。 说明：%%转义为%。 举例：%%d格式化后为%d字符串。  
  
**返回值：**

类型 | 说明  
---|---  
String | 资源名对应的格式化字符串。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001003 | Invalid resource name.  
9001004 | No matching resource is found based on the resource name.  
9001006 | The resource is referenced cyclically.  
9001007 | Failed to format the resource obtained based on the resource ID.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.{AppResource,__GenerateResource__,ArgsValueType}
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let result = resourceManager.getStringByName("test", ArgsValueType.StringValue("format string"), ArgsValueType.Int32Value(10), ArgsValueType.Float32Value(98.78))
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func removeResource(String)
    
    
    public func removeResource(path: String): Unit

**功能：** 应用运行时移除指定的资源路径，还原被覆盖前的资源。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/DVdgCPtIR2iXEvYU9qdMTA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090218Z&HW-CC-Expire=86400&HW-CC-Sign=D444DF4D9FEC1F4B16AC287E1FBBA05E5412C8A27A2DEADD459AEA9849047B18)

rawfile和resfile目录不支持资源覆盖。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 资源路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[资源管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-resource-manager)。

错误码ID | 错误信息  
---|---  
9001010 | Invalid overlay path.  
  



**示例：**
    
    
    // index.cj
    
    import kit.LocalizationKit.AppResource
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let resourceManager = Global.abilityContext.resourceManager
        let path = "/data/storage/el2/base/haps/entry/files/library-default-unsigned.hsp"
        resourceManager.removeResource(path)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### enum ArgsValueType
    
    
    public enum ArgsValueType {
        | Int32Value(Int32)
        | Float32Value(Float32)
        | StringValue(String)
        | ...
    }

**功能：** 格式化字符串资源参数枚举类型。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]Float32Value(Float32)
    
    
    Float32Value(Float32)

**功能：** Float32类型的格式化字符串资源参数枚举值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]Int32Value(Int32)
    
    
    Int32Value(Int32)

**功能：** Int32类型的格式化字符串资源参数枚举值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]StringValue(String)
    
    
    StringValue(String)

**功能：** String类型的格式化字符串资源参数枚举值。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### enum ColorMode
    
    
    public enum ColorMode {
        | Dark
        | Light
        | ...
    }

**功能：** 用于表示当前设备颜色模式。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]Dark
    
    
    Dark

**功能：** 深色模式。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]Light
    
    
    Light

**功能：** 浅色模式。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### enum DeviceType
    
    
    public enum DeviceType {
        | DeviceTypePhone
        | DeviceTypeTablet
        | DeviceTypeCar
        | DeviceTypePc
        | DeviceTypeTv
        | DeviceTypeWearable
        | DeviceType2In1
        | ...
    }

**功能：** 用于表示当前设备类型。目前仓颉仅支持手机（Phone），平板（Tablet）。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceType2In1
    
    
    DeviceType2In1

**功能：** 2in1设备。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceTypeCar
    
    
    DeviceTypeCar

**功能：** 汽车。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceTypePc
    
    
    DeviceTypePc

**功能：** 电脑。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceTypePhone
    
    
    DeviceTypePhone

**功能：** 手机。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceTypeTv
    
    
    DeviceTypeTv

**功能：** 电视。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceTypeTablet
    
    
    DeviceTypeTablet

**功能：** 平板。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DeviceTypeWearable
    
    
    DeviceTypeWearable

**功能：** 穿戴。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### enum Direction
    
    
    public enum Direction {
        | DirectionVertical
        | DirectionHorizontal
        | ...
    }

**功能：** 用于表示设备屏幕方向。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DirectionHorizontal
    
    
    DirectionHorizontal

**功能：** 横屏。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]DirectionVertical
    
    
    DirectionVertical

**功能：** 竖屏。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### enum NumberValueType
    
    
    public enum NumberValueType {
        | Int32Value(Int32)
        | Float32Value(Float32)
        | ...
    }

**功能：** 表示从资源中获取到的数字类型。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]Float32Value(Float32)
    
    
    Float32Value(Float32)

**功能：** 存储Float32类型值的Number类型。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]Int32Value(Int32)
    
    
    Int32Value(Int32)

**功能：** 存储Int32类型值的Number类型。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### enum ScreenDensity
    
    
    public enum ScreenDensity {
        | ScreenSdpi
        | ScreenMdpi
        | ScreenLdpi
        | ScreenXldpi
        | ScreenXxldpi
        | ScreenXxxldpi
        | ...
    }

**功能：** 用于表示当前设备屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]ScreenLdpi
    
    
    ScreenLdpi

**功能：** 高屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]ScreenMdpi
    
    
    ScreenMdpi

**功能：** 中屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]ScreenSdpi
    
    
    ScreenSdpi

**功能：** 低屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]ScreenXldpi
    
    
    ScreenXldpi

**功能：** 特高屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]ScreenXxldpi
    
    
    ScreenXxldpi

**功能：** 超高屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22

#### [h2]ScreenXxxldpi
    
    
    ScreenXxxldpi

**功能：** 超特高屏幕密度。

**系统能力：** SystemCapability.Global.ResourceManager

**起始版本：** 22
