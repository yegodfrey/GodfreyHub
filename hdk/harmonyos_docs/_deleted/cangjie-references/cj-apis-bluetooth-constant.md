---
name: cangjie-references/cj-apis-bluetooth-constant
title: ohos.bluetooth.constant（蓝牙constant模块）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-bluetooth-constant
nodePath: 系统 / 网络 / Connectivity Kit（短距通信服务） / 仓颉API / ohos.bluetooth.constant（蓝牙constant模块）
---

# ohos.bluetooth.constant（蓝牙constant模块）  
  
constant模块提供了蓝牙中常量的定义。

#### 导入模块
    
    
    import kit.ConnectivityKit.*

#### enum ProfileConnectionState
    
    
    public enum ProfileConnectionState <: Equatable<ProfileConnectionState> & ToString {
        | StateDisconnected
        | StateConnecting
        | StateConnected
        | StateDisconnecting
        | ...
    }

**功能：** 蓝牙设备的 profile 连接状态。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**父类型：**

  * Equatable<ProfileConnectionState>
  * ToString



#### [h2]StateConnected
    
    
    StateConnected

**功能：** 表示profile已连接。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]StateConnecting
    
    
    StateConnecting

**功能：** 表示profile正在连接。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]StateDisconnected
    
    
    StateDisconnected

**功能：** 表示profile已断连。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]StateDisconnecting
    
    
    StateDisconnecting

**功能：** 表示profile正在断开连接。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

#### [h2]func !=(ProfileConnectionState)
    
    
    public operator func !=(other: ProfileConnectionState): Bool

**功能：** 对蓝牙设备的 profile 连接状态判不等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ProfileConnectionState | 是 | - | 蓝牙设备的 profile 连接状态。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙设备的 profile 连接状态不同返回 true，否则返回 false。  
  
#### [h2]func ==(ProfileConnectionState)
    
    
    public operator func ==(other: ProfileConnectionState): Bool

**功能：** 对蓝牙设备的 profile 连接状态进行判等。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ProfileConnectionState | 是 | - | 蓝牙设备的 profile 连接状态。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果蓝牙设备的 profile 连接状态相同返回 true，否则返回 false。  
  
#### [h2]func toString()
    
    
    public func toString(): String

**功能：** 返回蓝牙设备的 profile 连接状态的字符串表示。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 蓝牙设备的 profile 连接状态的字符串表示。
