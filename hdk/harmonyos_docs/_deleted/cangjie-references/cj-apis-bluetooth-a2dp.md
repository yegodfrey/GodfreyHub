---
name: cangjie-references/cj-apis-bluetooth-a2dp
title: ohos.bluetooth.a2dp（蓝牙a2dp模块）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-a2dp
nodePath: 系统 / 网络 / Connectivity Kit（短距通信服务） / 仓颉API / ohos.bluetooth.a2dp（蓝牙a2dp模块）
---

# ohos.bluetooth.a2dp（蓝牙a2dp模块）

a2dp模块提供了访问蓝牙音频接口的方法。

#### 导入模块
    
    
    import kit.ConnectivityKit.*

#### 权限列表

ohos.permission.ACCESS_BLUETOOTH

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func createA2dpSrcProfile()
    
    
    public func createA2dpSrcProfile(): A2dpSourceProfile

**功能：** 创建蓝牙媒体A2DP Source实例。通过该实例可使用本端作为A2DP Source设备的方法，如：获取和其他设备间的蓝牙媒体音频播放状态。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
A2dpSourceProfile | 返回该profile的实例。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.*
    
    try {
        let a2dpProfile = createA2dpSrcProfile()
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### class A2dpSourceProfile
    
    
    public class A2dpSourceProfile <: BaseProfile {}

**功能：** 使用A2dpSourceProfile方法之前需要创建该类的实例进行操作，通过createA2dpSrcProfile()方法构造此实例。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * [BaseProfile](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#interface-baseprofile)



#### [h2]func getConnectedDevices()
    
    
    public func getConnectedDevices(): Array<String>

**功能：** 获取已连接设备列表。

**需要权限：** ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<String> | 返回当前已连接设备的地址。基于信息安全考虑，此处获取的设备地址为随机MAC地址。配对成功后，该地址不会变更；已配对设备取消配对后重新扫描或蓝牙服务下电时，该随机地址会变更。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[蓝牙服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-bluetooth_manager)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
2900001 | Service stopped.  
2900003 | Bluetooth disabled.  
2900004 | Profile not supported.  
2900099 | Operation failed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.*
    
    try {
        let a2dpSrc = createA2dpSrcProfile()
        let retArray = a2dpSrc.getConnectedDevices()
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func getConnectionState(String)
    
    
    public func getConnectionState(deviceId: String): ProfileConnectionState

**功能：** 获取设备profile的连接状态。

**需要权限：** ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
deviceId | String | 是 | - | 远端设备地址。  
  
**返回值：**

类型 | 说明  
---|---  
[ProfileConnectionState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-constant#enum-profileconnectionstate) | 返回profile的连接状态。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[蓝牙服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-bluetooth_manager)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
2900001 | Service stopped.  
2900003 | Bluetooth disabled.  
2900004 | Profile not supported.  
2900099 | Operation failed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.*
    
    try {
        let a2dpSrc = createA2dpSrcProfile()
        let retArray = a2dpSrc.getConnectionState("XX:XX:XX:XX:XX:XX")
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func getPlayingState(String)
    
    
    public func getPlayingState(deviceId: String): PlayingState

**功能：** 获取设备的播放状态。

**需要权限：** ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
deviceId | String | 是 | - | 远端设备地址。  
  
**返回值：**

类型 | 说明  
---|---  
PlayingState | 远端设备的播放状态。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)和[蓝牙服务子系统错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-bluetooth_manager)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
2900001 | Service stopped.  
2900003 | Bluetooth disabled.  
2900004 | Profile not supported.  
2900099 | Operation failed.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.*
    
    try {
        let a2dpSrc = createA2dpSrcProfile()
        let state = a2dpSrc.getPlayingState("XX:XX:XX:XX:XX:XX")
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func off(ProfileCallbackType, CallbackObject)
    
    
    public func off(eventType: ProfileCallbackType, callback: CallbackObject): Unit

**功能：** 取消所有订阅连接状态变化事件。

**需要权限：** ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
eventType | [ProfileCallbackType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#enum-profilecallbacktype) | 是 | - | 回调事件类型。  
callback | [CallbackObject](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callbackobject) | 是 | - | 回调事件。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    
    // 此处定义所需要的依赖项等
    class StateChangeCallback <: Callback1Argument<StateChangeParam> {
        public func invoke(err: ?BusinessException, arg: StateChangeParam): Unit {
            let connectionState = arg.state.toString()
            Hilog.info(0, "Bluetooth", "profile connection state has change to ${connectionState}")
        }
    }
    
    let a2dp = createA2dpSrcProfile()
    let changeCallBack = StateChangeCallback()
    try {
        a2dp.on(ProfileCallbackType.ConnectionStateChange, changeCallBack)
        a2dp.off(ProfileCallbackType.ConnectionStateChange)
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func off(ProfileCallbackType)
    
    
    public func off(eventType: ProfileCallbackType): Unit

**功能：** 取消所有订阅连接状态变化事件。

**需要权限：** ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
eventType | [ProfileCallbackType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#enum-profilecallbacktype) | 是 | - | 回调事件类型。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    
    // 此处定义所需要的依赖项等
    class StateChangeCallback <: Callback1Argument<StateChangeParam> {
        public func invoke(err: ?BusinessException, arg: StateChangeParam): Unit {
            let connectionState = arg.state.toString()
            Hilog.info(0, "Bluetooth", "profile connection state has change to ${connectionState}")
        }
    }
    
    let a2dp = createA2dpSrcProfile()
    let changeCallBack = StateChangeCallback()
    try {
        a2dp.on(ProfileCallbackType.ConnectionStateChange, changeCallBack)
        a2dp.off(ProfileCallbackType.ConnectionStateChange)
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func on(ProfileCallbackType, Callback1Argument<StateChangeParam>)
    
    
    public func on(eventType: ProfileCallbackType, callback: Callback1Argument<StateChangeParam>): Unit

**功能：** 订阅连接状态变化事件。

**需要权限：** ohos.permission.ACCESS_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
eventType | [ProfileCallbackType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#enum-profilecallbacktype) | 是 | - | 传入[ConnectionStateChange](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#connectionstatechange)，表示连接状态变化事件类型。  
callback | Callback1Argument<[StateChangeParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#class-statechangeparam)> | 是 | - | 表示回调函数的入参。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
  



**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    
    // 此处定义所需要的依赖项等
    class StateChangeCallback <: Callback1Argument<StateChangeParam> {
        public func invoke(err: ?BusinessException, arg: StateChangeParam): Unit {
            let connectionState = arg.state.toString()
            Hilog.info(0, "Bluetooth", "profile connection state has change to ${connectionState}")
        }
    }
    
    let a2dp = createA2dpSrcProfile()
    let changeCallBack = StateChangeCallback()
    try {
        a2dp.on(ProfileCallbackType.ConnectionStateChange, changeCallBack)
        a2dp.off(ProfileCallbackType.ConnectionStateChange)
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### class CodecInfo
    
    
    public class CodecInfo {
        public var codecType: CodecType
        public var codecBitsPerSample: CodecBitsPerSample
        public var codecChannelMode: CodecChannelMode
        public var codecSampleRate: CodecSampleRate
    }

**功能：** 编码器信息。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]var codecBitsPerSample
    
    
    public var codecBitsPerSample: CodecBitsPerSample

**功能：** 表示每个采样点的位数，初始值为CodecBitsPerSampleNone。

**类型：** CodecBitsPerSample

**读写能力：** 可读写

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]var codecChannelMode
    
    
    public var codecChannelMode: CodecChannelMode

**功能：** 表示编码器的声道模式，初始值为CodecChannelModeNone。

**类型：** CodecChannelMode

**读写能力：** 可读写

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]var codecSampleRate
    
    
    public var codecSampleRate: CodecSampleRate

**功能：** 表示编码器的采样率，初始值为CodecSampleRateNone。

**类型：** CodecSampleRate

**读写能力：** 可读写

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]var codecType
    
    
    public var codecType: CodecType

**功能：** 表示编码器类型，初始值为CodecTypeSbc。

**类型：** CodecType

**读写能力：** 可读写

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### enum CodecBitsPerSample
    
    
    public enum CodecBitsPerSample <: Equatable<CodecBitsPerSample> & ToString {
        | CodecBitsPerSampleNone
        | CodecBitsPerSample16
        | CodecBitsPerSample24
        | CodecBitsPerSample32
        | ...
    }

**功能：** 蓝牙编码器每个采样点的位数。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * Equatable<CodecBitsPerSample>
  * ToString



#### [h2]CodecBitsPerSample16
    
    
    CodecBitsPerSample16

**功能：** 16位采样点的位数。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecBitsPerSample24
    
    
    CodecBitsPerSample24

**功能：** 24位采样点的位数。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecBitsPerSample32
    
    
    CodecBitsPerSample32

**功能：** 32位采样点的位数。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecBitsPerSampleNone
    
    
    CodecBitsPerSampleNone

**功能：** 未知采样点的位数。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]func !=(CodecBitsPerSample)
    
    
    public operator func !=(other: CodecBitsPerSample): Bool

**功能：** 对蓝牙编码器每个采样点的位数进行判不等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecBitsPerSample | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器每个采样点的位数不同，返回true，否则返回false。  
  
#### [h2]func ==(CodecBitsPerSample)
    
    
    public operator func ==(other: CodecBitsPerSample): Bool

**功能：** 对蓝牙编码器每个采样点的位数进行判等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecBitsPerSample | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器每个采样点的位数相同，返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回枚举值的字符串表示。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举值的字符串表示。  
  
#### enum CodecChannelMode
    
    
    public enum CodecChannelMode <: Equatable<CodecChannelMode> & ToString {
        | CodecChannelModeNone
        | CodecChannelModeMono
        | CodecChannelModeStereo
        | ...
    }

**功能：** 蓝牙编码器的声道模式。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * Equatable<CodecChannelMode>
  * ToString



#### [h2]CodecChannelModeMono
    
    
    CodecChannelModeMono

**功能：** 单声道。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecChannelModeNone
    
    
    CodecChannelModeNone

**功能：** 未知声道。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecChannelModeStereo
    
    
    CodecChannelModeStereo

**功能：** 双声道。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]func !=(CodecChannelMode)
    
    
    public operator func !=(other: CodecChannelMode): Bool

**功能：** 对蓝牙编码器的声道模式判不等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecChannelMode | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器的声道模式不同，返回true，否则返回false。  
  
#### [h2]func ==(CodecChannelMode)
    
    
    public operator func ==(other: CodecChannelMode): Bool

**功能：** 对蓝牙编码器的声道模式判等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecChannelMode | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器的声道模式相同，返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回枚举值的字符串表示。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举值的字符串表示。  
  
#### enum CodecSampleRate
    
    
    public enum CodecSampleRate <: Equatable<CodecSampleRate> & ToString {
        | CodecSampleRateNone
        | CodecSampleRate44100
        | CodecSampleRate48000
        | CodecSampleRate88200
        | CodecSampleRate96000
        | CodecSampleRate176400
        | CodecSampleRate192000
        | ...
    }

**功能：** 蓝牙编码器的采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * Equatable<CodecSampleRate>
  * ToString



#### [h2]CodecSampleRate176400
    
    
    CodecSampleRate176400

**功能：** 176.4k采样率

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecSampleRate192000
    
    
    CodecSampleRate192000

**功能：** 192k采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecSampleRate44100
    
    
    CodecSampleRate44100

**功能：** 44.1k采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecSampleRate48000
    
    
    CodecSampleRate48000

**功能：** 48k采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecSampleRate88200
    
    
    CodecSampleRate88200

**功能：** 88.2k采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecSampleRate96000
    
    
    CodecSampleRate96000

**功能：** 96k采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecSampleRateNone
    
    
    CodecSampleRateNone

**功能：** 未知采样率。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]func !=(CodecSampleRate)
    
    
    public operator func !=(other: CodecSampleRate): Bool

**功能：** 对蓝牙编码器的采样率进行判不等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecSampleRate | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器的采样率不同，返回true，否则返回false。  
  
#### [h2]func ==(CodecSampleRate)
    
    
    public operator func ==(other: CodecSampleRate): Bool

**功能：** 对蓝牙编码器的采样率进行判等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecSampleRate | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器的采样率相同，返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回枚举值的字符串表示。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举值的字符串表示。  
  
#### enum CodecType
    
    
    public enum CodecType <: Equatable<CodecType> & ToString {
        | CodecTypeInvalid
        | CodecTypeSbc
        | CodecTypeAac
        | CodecTypeL2hc
        | ...
    }

**功能：** 蓝牙编码器类型。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * Equatable<CodecType>
  * ToString



#### [h2]CodecTypeAac
    
    
    CodecTypeAac

**功能：** AAC。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecTypeInvalid
    
    
    CodecTypeInvalid

**功能：** 未知编码类型。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecTypeL2hc
    
    
    CodecTypeL2hc

**功能：** L2HC。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]CodecTypeSbc
    
    
    CodecTypeSbc

**功能：** SBC。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]func !=(CodecType)
    
    
    public operator func !=(other: CodecType): Bool

**功能：** 对蓝牙编码器类型进行判不等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器类型不同，返回true，否则返回false。  
  
#### [h2]func ==(CodecType)
    
    
    public operator func ==(other: CodecType): Bool

**功能：** 对蓝牙编码器类型进行判等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | CodecType | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙编码器类型相同，返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回枚举值的字符串表示。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举值的字符串表示。  
  
#### enum PlayingState
    
    
    public enum PlayingState <: Equatable<PlayingState> & ToString {
        | StateNotPlaying
        | StatePlaying
        | ...
    }

**功能：** 蓝牙A2DP播放状态。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * Equatable<PlayingState>
  * ToString



#### [h2]StateNotPlaying
    
    
    StateNotPlaying

**功能：** 表示未播放。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]StatePlaying
    
    
    StatePlaying

**功能：** 表示正在播放。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]func !=(PlayingState)
    
    
    public operator func !=(other: PlayingState): Bool

**功能：** 对蓝牙A2DP播放状态进行判不等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PlayingState | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙A2DP播放状态不同，返回true，否则返回false。  
  
#### [h2]func ==(PlayingState)
    
    
    public operator func ==(other: PlayingState): Bool

**功能：** 对蓝牙A2DP播放状态进行判等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | PlayingState | 是 | - | 另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙A2DP播放状态相同，返回true，否则返回false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回枚举值的字符串表示。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 枚举值的字符串表示。
