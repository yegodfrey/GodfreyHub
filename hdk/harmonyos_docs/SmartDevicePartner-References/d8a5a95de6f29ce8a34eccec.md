---
name: document/cn/SmartDevicePartner-References/obtain-user-info-0000001090660607
title: 获取用户信息
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/obtain-user-info-0000001090660607
---

# 获取用户信息

## 适用平台

Android

## 接口描述

hilink.getUserInfo (String CallbackName)

获取当前用户的个人信息。

## 返回参数

|参数|类型|描述|
|:---------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------|
|resultCode|String|处理结果码|
|data|String|0表示成功。返回其他值表示失败，参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077437634)。|

响应示例：

```screen
{
    "resultCode": 0,
    "data": {
        "id": xxx,
        "unitType": 0,
        "height": 170,
        "weight": 65,
        "gender": 1,
        "age": 25,
        "modifyTime": 1487726051000
    }
}
```

