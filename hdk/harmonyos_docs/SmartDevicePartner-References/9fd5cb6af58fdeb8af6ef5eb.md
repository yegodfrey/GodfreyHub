---
name: document/cn/SmartDevicePartner-References/listen-for-found-new-devices-0000001090265835
title: 监听寻找到的新设备
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/listen-for-found-new-devices-0000001090265835
---

# 监听寻找到的新设备

## 适用平台

Android、iOS

## 接口描述

hilink.onBluetoothDeviceFound (CallbackName)

监听寻找到新设备的事件。
> 说明
>
> * 该方法可多次注册不同名称回调函数，已注册的全部回调函数，会在hilink.stopBluetoothDevicesDiscovery调用前生效。Hilink.stopBluetoothDevicesDiscovery后，会清除回调注册。
> * 该方法建议在hilink.startBluetoothDevicesDiscovery前调用，确保启动发现后每一次搜索到设备都能被准确回调。

## 返回参数

|参数|类型|描述|
|:------|:----|:----------------------------------------|
|devices|Array|android是Device数组，iOS是单个Device对象；Json字符串格式|

**Device参数说明：**

|参数|类型|描述|
|:-------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|deviceId|String|用于区分设备的 id，Android 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid。|
|RSSI|number|当前蓝牙设备的信号强度|
|advertisData|String|完整的广播数据（转换为16进制字符串输出）（Android将字符全转大写，ios默认不处理）|
|manufacturerData|String|当前蓝牙设备的广播数据段中的ManufacturerData数据段 （转换为16进制字符串输出）|
|advertisServiceUUIDs|array|当前蓝牙设备的广播数据段中的ServiceUUIDs数据段（UUID字符串数组）（Android为null） 示例：["0000ffe0-0000-1000-8000-00805f9b34fb", "0000ffe1-0000-1000-8000-00805f9b34fb", "0000ffe2-0000-1000-8000-00805f9b34fb"]|
|localName|string|当前蓝牙设备的广播数据段中的LocalName数据段|
|serviceData|string|当前蓝牙设备的广播数据段中的ServiceData数据段（转换为16进制字符串输出）|

