---
name: document/cn/SmartDevicePartner-References/set-prompt-message-visibility-0000001077436864
title: 设置提示信息是否可见
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/set-prompt-message-visibility-0000001077436864
---

# 设置提示信息是否可见

## 适用平台

Android、iOS

## 请求消息

当需要在页面中设置提示信息是否可见时，WEB中调用js方法如下：

```screen
hilink.setMessageVisible(
true, // URI,boolean, true，提示信息可见，false提示信息不可见
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将如下结果返回到resultStr中。

```screen
{
  "errcode": 0,
}
```

## 错误码

```screen
{
  "errcode": 11
}
```

错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077308408)。
