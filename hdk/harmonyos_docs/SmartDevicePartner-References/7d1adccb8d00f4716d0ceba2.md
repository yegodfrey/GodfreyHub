---
name: document/cn/SmartDevicePartner-References/clear-local-caches-0000001090422119
title: 清除本地全部缓存
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/clear-local-caches-0000001090422119
---

# 清除本地全部缓存

## 适用平台

Android、iOS

## 接口描述

hilink.clearStorageSync()

清除同一用户同一类型设备的全部缓存数据。
> 说明
>
> 缓存数据是保存在APP内部存储空间的，所以清除APP数据后，存储数据会被全部清除。如果特定数据需要持续保存，可以考虑将数据保存在智能家居云端（需定义产品的Profile）。

## 返回参数

|参数|类型|描述|
|:------|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|retCode|Number|错误码：0, 90001 错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077437634)。|

