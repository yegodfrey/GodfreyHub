---
name: cangjie-references/cj-apis-bluetooth-hfp
title: ohos.bluetooth.hfp（蓝牙hfp模块）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-hfp
nodePath: 系统 / 网络 / Connectivity Kit（短距通信服务） / 仓颉API / ohos.bluetooth.hfp（蓝牙hfp模块）
---

# ohos.bluetooth.hfp（蓝牙hfp模块）

hfp模块提供了访问蓝牙呼叫接口的方法。

#### 导入模块
    
    
    import kit.ConnectivityKit.*

#### 权限列表

ohos.permission.ACCESS_BLUETOOTH

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### func createHfpAgProfile()
    
    
    public func createHfpAgProfile(): HandsFreeAudioGatewayProfile

**功能：** 创建hfp profile实例。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
HandsFreeAudioGatewayProfile | 返回该profile的实例。  
  
**示例：**
    
    
    // index.cj
    
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import ohos.business_exception.BusinessException
    
    try {
        let hdfProfile = createHfpAgProfile()
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### class HandsFreeAudioGatewayProfile
    
    
    public class HandsFreeAudioGatewayProfile <: BaseProfile {}

**功能：** 使用HandsFreeAudioGatewayProfile方法之前需要创建该类的实例进行操作，通过createHfpAgProfile()方法构造此实例。

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
    import ohos.business_exception.BusinessException
    
    try {
        let hdfProfile = createHfpAgProfile()
        let retArray = hdfProfile.getConnectedDevices()
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
    import ohos.business_exception.BusinessException
    
    try {
        let hdfProfile = createHfpAgProfile()
        let ret = hdfProfile.getConnectionState("XX:XX:XX:XX:XX:XX")  // 请替换您的 deviceId。
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func off(ProfileCallbackType, CallbackObject)
    
    
    public func off(eventType: ProfileCallbackType, callback: CallbackObject): Unit

**功能：** 取消订阅连接状态变化事件。

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
    
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处定义所需要的依赖项等
    class StateChangeCallback <: Callback1Argument<StateChangeParam> {
        public func invoke(err: ?BusinessException, arg: StateChangeParam): Unit {
            let connectionState = arg.state.toString()
            Hilog.info(0, "Bluetooth", "profile connection state has change to ${connectionState}")
        }
    }
    
    let changeCallBack = StateChangeCallback()
    let hdfProfile = createHfpAgProfile()
    try {
        hdfProfile.on(ProfileCallbackType.ConnectionStateChange, changeCallBack)
        hdfProfile.off(ProfileCallbackType.ConnectionStateChange)
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }

#### [h2]func off(ProfileCallbackType)
    
    
    public func off(eventType: ProfileCallbackType): Unit

**功能：** 取消订阅连接状态变化事件。

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
    
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处定义所需要的依赖项等
    class StateChangeCallback <: Callback1Argument<StateChangeParam> {
        public func invoke(err: ?BusinessException, arg: StateChangeParam): Unit {
            let connectionState = arg.state.toString()
            Hilog.info(0, "Bluetooth", "profile connection state has change to ${connectionState}")
        }
    }
    
    let changeCallBack = StateChangeCallback()
    let hdfProfile = createHfpAgProfile()
    try {
        hdfProfile.on(ProfileCallbackType.ConnectionStateChange, changeCallBack)
        hdfProfile.off(ProfileCallbackType.ConnectionStateChange)
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
eventType | [ProfileCallbackType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#enum-profilecallbacktype) | 是 | - | 填写ConnectionStateChange，表示连接状态变化事件类型。  
callback | [Callback1Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-callback_invoke#class-callback1argumenta)<[StateChangeParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-base_profile#class-statechangeparam)> | 是 | - | 表示回调函数的入参。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码ID | 错误信息  
---|---  
201 | Permission denied.  
801 | Capability not supported.  
  



**示例：**
    
    
    // index.cj
    
    import ohos.callback_invoke.*
    import ohos.business_exception.*
    import kit.ConnectivityKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    // 此处定义所需要的依赖项等
    class StateChangeCallback <: Callback1Argument<StateChangeParam> {
        public func invoke(err: ?BusinessException, arg: StateChangeParam): Unit {
            let connectionState = arg.state.toString()
            Hilog.info(0, "Bluetooth", "profile connection state has change to ${connectionState}")
        }
    }
    
    let changeCallBack = StateChangeCallback()
    let hdfProfile = createHfpAgProfile()
    try {
        hdfProfile.on(ProfileCallbackType.ConnectionStateChange, changeCallBack)
    } catch (e: BusinessException) {
        Hilog.info(0, "Bluetooth", "errCode: ${e.code}, errMessage: ${e.message}")
    }
