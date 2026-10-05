---
name: document/cn/SmartDevicePartner-References/listen-for-characteristic-value-changes-0000001077757206
title: 监听特征值变化
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/listen-for-characteristic-value-changes-0000001077757206
---

# 监听特征值变化

## 适用平台

Android、iOS

## 接口描述

hilink.onBLECharacteristicValueChange (CallbackName)

监听低功耗蓝牙设备的特征值变化。
> 说明
>
> 该方法可多次注册不同名称回调函数。已注册的全部回调函数，会在hilink.closeBLEConnection调用前生效。hilink.closeBLEConnection后，会清除回调注册。

## 返回参数

|参数|类型|描述|
|:---------------|:-----|:---------------------------|
|deviceId|String|蓝牙设备Id（Android没有返回）|
|serviceId|String|蓝牙特征值对应服务的 uuid（Android没有返回）|
|characteristicId|String|蓝牙特征值的 uuid|
|data|String|特征值最新的值，以16进制字符串方式构造。|

