---
name: document/cn/DevicePartner-References/obtain-bluetooth-status-0000001077309158
title: 查询蓝牙状态
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/obtain-bluetooth-status-0000001077309158
source: portal
---

# 查询蓝牙状态

#### 适用平台

Android、iOS

#### 接口描述

hilink.getBluetoothAdapterState (CallbackName)

查询本机蓝牙模块状态。

#### 返回参数

参数 | 类型 | 描述  
---|---|---  
discovering | Boolean | 是否正在搜索设备。  
available | Boolean | 蓝牙适配器是否可用  
errCode | Number | 错误码：0, 90001 错误码说明参见[通用错误码](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/result-codes-0000001077437634)。
