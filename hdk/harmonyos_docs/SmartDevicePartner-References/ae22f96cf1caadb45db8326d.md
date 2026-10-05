---
name: document/cn/SmartDevicePartner-References/obtain-device-router-connection-0000001090419759
title: 网页获取设备与路由的连接关系
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/obtain-device-router-connection-0000001090419759
---

# 网页获取设备与路由的连接关系

## 适用平台

Android、iOS

## 请求消息

用于获取设备与路由的连接关系，WEB中调用js方法如下：

```screen
hilink.getHilinkConnection(
"deviceId" // string，需要获取的设备的deviceId
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将对应的结果字符串返回到resultStr中。

```screen
{
  True:设备挂在路由下 false：设备不是挂在路由下
}
```

## 错误码

```screen
{
  "errcode": 11
}
```

错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077308408)。
