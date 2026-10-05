---
name: document/cn/SmartDevicePartner-References/obtain-app-version-number-0000001090263491
title: 获取App版本号
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/obtain-app-version-number-0000001090263491
---

# 获取App版本号

## 适用平台

Android、iOS

## 请求消息

用于获取App版本号，WEB中调用js方法如下：

```screen
hilink.getAppVersionCode(
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将对应的结果JSON字符串返回到resultStr中。

```screen
{
  "2001105102" // app版本号
}
```

## 错误码

```screen
{
  "errcode": 11
}
```

错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077308408)。
