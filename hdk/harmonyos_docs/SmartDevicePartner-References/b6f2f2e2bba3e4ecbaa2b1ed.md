---
name: document/cn/SmartDevicePartner-References/obtain-auto-scenes-number-0000001090263481
title: 获取设备为触发条件的智能场景数量
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/obtain-auto-scenes-number-0000001090263481
---

# 获取设备为触发条件的智能场景数量

## 适用平台

Android、iOS

## 请求消息

用于获取当前设备为触发条件的智能场景数量，WEB中调用js方法如下：

```screen
hilink.getAutoRuleSize(
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将对应的结果字符串返回到resultStr中。

```screen
{
  "1"
}
```

## 错误码

```screen
{
  "errcode": 11
}
```

错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077308408)。
