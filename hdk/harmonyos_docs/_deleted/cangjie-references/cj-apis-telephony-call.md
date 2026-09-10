---
name: cangjie-references/cj-apis-telephony-call
title: ohos.telephony.call（拨打电话）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-telephony-call
nodePath: 系统 / 硬件 / Telephony Kit / 仓颉API / ohos.telephony.call（拨打电话）
---

# ohos.telephony.call（拨打电话）  
  
call模块提供呼叫管理功能，包括拨打电话、跳转到拨号界面、获取通话状态、格式化电话号码等。

#### 导入模块
    
    
    import kit.TelephonyKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class Call
    
    
    public class Call {}

**功能：** 拨打电话类，提供呼叫管理功能，包括拨打电话、跳转到拨号界面、获取通话状态、格式化电话号码等接口。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]static func formatPhoneNumber(String, NumberFormatOptions)
    
    
    public static func formatPhoneNumber(
        phoneNumber: String,
        options!: NumberFormatOptions = NumberFormatOptions()
    ): String

**功能：** 格式化电话号码，可设置格式化参数。

电话号码格式化后为标准数字字符串，例如：“138 xxxx xxxx”、“0755 xxxx xxxx”。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
phoneNumber | String | 是 | - | 电话号码。  
options | NumberFormatOptions | 否 | NumberFormatOptions() | **命名参数。** 格式化参数，如国家码。  
  
**返回值：**

类型 | 说明  
---|---  
String | 返回格式化电话号码的结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[电话子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-telephony)。

错误码ID | 错误信息  
---|---  
8300001 | The input parameter value is out of range.  
8300002 | Service connection failed.  
8300003 | System internal error.  
8300999 | Internal error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let result = Call.formatPhoneNumber("138xxxxxxxx", options: NumberFormatOptions(countryCode: "CN"))
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func formatPhoneNumberToE164(String, String)
    
    
    public static func formatPhoneNumberToE164(phoneNumber: String, countryCode: String): String

**功能：** 将电话号码格式化为E.164表示形式。

待格式化的电话号码需要与传入的国家码相匹配，如中国电话号码需要传入国家码CN，否则格式化后的电话号码为""。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
phoneNumber | String | 是 | - | 电话号码。  
countryCode | String | 是 | - | 国家码，支持所有国家码，如：中国（CN）。  
  
**返回值：**

类型 | 说明  
---|---  
String | 返回将电话号码格式化为E.164表示形式的结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[电话子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-telephony)。

错误码ID | 错误信息  
---|---  
8300001 | The input parameter value is out of range.  
8300002 | Service connection failed.  
8300003 | System internal error.  
8300999 | Internal error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let result = Call.formatPhoneNumberToE164("138xxxxxxxx", "CN")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func getCallState()
    
    
    public static func getCallState(): CallState

**功能：** 获取当前通话状态。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
CallState | 返回获取到的通话状态。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[电话子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-telephony)。

错误码ID | 错误信息  
---|---  
8300001 | The input parameter value is out of range.  
  



**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let result: CallState = Call.getCallState()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func hasCall()
    
    
    public static func hasCall(): Bool

**功能：** 判断是否存在通话。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 返回判断是否存在通话。返回true表示当前存在通话，false表示当前不存在通话。  
  
**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let result: Bool = Call.hasCall()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func hasVoiceCapability()
    
    
    public static func hasVoiceCapability(): Bool

**功能：** 检查当前设备是否具备语音通话能力。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 返回true表示设备具备语音通话能力，返回false表示设备不具备语音通话能力。  
  
**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let result: Bool = Call.hasVoiceCapability()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func isEmergencyPhoneNumber(String, EmergencyNumberOptions)
    
    
    public static func isEmergencyPhoneNumber(phoneNumber: String, options!: EmergencyNumberOptions = EmergencyNumberOptions(slotId: 0)): Bool

**功能：** 根据电话号码参数，判断是否是紧急电话号码。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
phoneNumber | String | 是 | - | 电话号码。  
options | EmergencyNumberOptions | 否 | EmergencyNumberOptions(slotId: 0) | **命名参数。** 电话号码参数。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 返回判断是否是紧急电话号码的结果。返回true表示是紧急电话号码，返回false表示不是紧急电话号码。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[电话子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-telephony)。

错误码ID | 错误信息  
---|---  
8300001 | The input parameter value is out of range.  
8300002 | Service connection failed.  
8300003 | System internal error.  
8300999 | Internal error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let result = Call.isEmergencyPhoneNumber("138xxxxxxxx", options: EmergencyNumberOptions(slotId: 1))
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func makeCall(String)
    
    
    public static func makeCall(phoneNumber: String): Unit

**功能：** 跳转到拨号界面，并显示待拨出的号码。后台调用需要申请ohos.permission.START_ABILITIES_FROM_BACKGROUND权限。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/aXcrlYszQa25S8h2WuNNSw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111738Z&HW-CC-Expire=86400&HW-CC-Sign=3D94F60E0F0BED001E13434DFB0D5C24A6A087913764ACA256A85D4859CBBB5F)

该接口为预埋接口，当前功能受限，推荐使用双参接口makeCall。

**系统能力：** SystemCapability.Applications.Contacts

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
phoneNumber | String | 是 | - | 电话号码。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[电话子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-telephony)。

错误码ID | 错误信息  
---|---  
8300001 | The input parameter value is out of range.  
8300002 | Service connection failed.  
8300003 | System internal error.  
8300999 | Internal error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        Call.makeCall("138xxxxxxxx")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func makeCall(UIAbilityContext, String)
    
    
    public static func makeCall(context: UIAbilityContext, phoneNumber: String): Unit

**功能：** 跳转到拨号界面，并显示待拨出的号码。后台调用需要申请ohos.permission.START_ABILITIES_FROM_BACKGROUND权限。

**系统能力：** SystemCapability.Applications.Contacts

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | [UIAbilityContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiabilitycontext) | 是 | - | 应用上下文Context。  
phoneNumber | String | 是 | - | 电话号码。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
8300001 | The input parameter value is out of range.  
8300002 | Service connection failed.  
8300003 | System internal error.  
8300999 | Internal error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.app.ability.ui_ability.UIAbilityContext
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        Call.makeCall(Global.abilityContext, "138xxxxxxxx")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class EmergencyNumberOptions
    
    
    public class EmergencyNumberOptions {
        public var slotId: Int32
        public init(slotId!: Int32 = 0)
    }

**功能：** 判断是否是紧急电话号码的可选参数。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]var slotId
    
    
    public var slotId: Int32

**功能：** 卡槽ID：

  * 卡槽1：0。

  * 卡槽2：1。




**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]init(Int32)
    
    
    public init(slotId!: Int32 = 0)

**功能：** EmergencyNumberOptions构造器。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
slotId | Int32 | 否 | 0 | **命名参数。** 卡槽ID。  
  
#### class NumberFormatOptions
    
    
    public class NumberFormatOptions {
        public var countryCode: String
        public init(countryCode!: String = "CN")
    }

**功能：** 格式化号码的可选参数。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]var countryCode
    
    
    public var countryCode: String

**功能：** 国家码，支持所有国家的国家码，如：CN（中国）。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]init(String)
    
    
    public init(countryCode!: String = "CN")

**功能：** 用于创建NumberFormatOptions实例的构造函数。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
countryCode | String | 否 | "CN" | **命名参数。** 国家码，支持所有国家的国家码，如：CN（中国）。默认为："CN"。  
  
**示例：**
    
    
    // index.cj
    
    import kit.TelephonyKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let op = NumberFormatOptions(countryCode: "CN")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### enum CallState
    
    
    public enum CallState <: Equatable<CallState> & ToString {
        | CallStateUnknown
        | CallStateIdle
        | CallStateRinging
        | CallStateOffhook
        | CallStateAnswered
        | ...
    }

**功能：** 通话状态码。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**父类型：**

  * Equatable<CallState>
  * ToString



#### [h2]CallStateAnswered
    
    
    CallStateAnswered

**功能：** 表示来电已经接听。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]CallStateIdle
    
    
    CallStateIdle

**功能：** 表示没有正在进行的呼叫。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]CallStateOffhook
    
    
    CallStateOffhook

**功能：** 表示至少有一个呼叫处于拨号、通话中或呼叫保持状态，并且没有新的来电振铃或等待。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]CallStateRinging
    
    
    CallStateRinging

**功能：** 表示来电正在振铃或等待。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]CallStateUnknown
    
    
    CallStateUnknown

**功能：** 无效状态，当获取呼叫状态失败时返回。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

#### [h2]func !=(CallState)
    
    
    public operator func !=(other: CallState): Bool

**功能：** 判断两个枚举值是否不相等。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CallState | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值不相等返回true，否则返回false。  
  
#### [h2]func ==(CallState)
    
    
    public operator func ==(other: CallState): Bool

**功能：** 判断两个枚举值是否相等。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CallState | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 两个枚举值相等返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 获取枚举的值。

**系统能力：** SystemCapability.Telephony.CallManager

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举的说明。
