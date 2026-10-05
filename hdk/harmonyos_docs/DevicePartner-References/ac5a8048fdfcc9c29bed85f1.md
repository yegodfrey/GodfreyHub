---
name: document/cn/DevicePartner-References/check-hota-firmware-version-0000001186088108
title: 检测设备Hota固件版本信息
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/check-hota-firmware-version-0000001186088108
source: portal
---

# 检测设备Hota固件版本信息

#### 接口描述

hilink.checkDeviceHota (String sn, String productId, final String callback)

检测设备Hota（即华为OTA）固件版本信息。当进入设备详情时，可以自动弹出固件新版本升级提示框，提示用户升级固件版本，并使用[跳转页面接口](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/redirect-to-page-0000001077597238)引导用户跳转到固件升级页面。

#### 适用平台

Android、iOS

#### 请求参数

参数 | 类型 | 描述  
---|---|---  
sn | String | 设备SN  
productId | String | 设备产品ID  
resultCallback | String | 回调函数名  
  
#### 响应参数

参数 | 类型 | 描述  
---|---|---  
checkVersionResult | String | 固件版本检测结果，取值范围如下：

  * true：有新版本。
  * false：无新版本。此时，newVersion和description两个响应参数都为空“”。

  
newVersion | String | 新固件版本号。  
description | String | 新固件版本升级描述。  
  
#### 错误码

错误码说明参见[通用错误码](https://device.harmonyos.com/cn/docs/devicepartner/DevicePartner-References/result-codes-0000001077308408)。
