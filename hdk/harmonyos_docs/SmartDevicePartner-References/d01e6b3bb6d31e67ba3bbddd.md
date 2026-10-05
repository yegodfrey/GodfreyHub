---
name: document/cn/SmartDevicePartner-References/obtain-current-device-info-0000001077436854
title: 获取当前设备信息
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/obtain-current-device-info-0000001077436854
---

# 获取当前设备信息

## 适用平台

Android、iOS

## 请求消息

当需要获取当前设备信息时，WEB中调用js方法如下：

```screen
hilink.getDeviceInfo(
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将如下结果返回到resultStr中。

```screen
{
    "deviceId": "479******************************443",
    "devName": "摇控器(8)",
    "roomName": "null",
    "status": "online",
    "gatewayId": "a67******************************ec2",
    "nodeType": "ENDPOINT",
    "devInfo": {
        "sn": "@LH**************168",
        "manu": "021",
        "devType": "038",
        "model": "B910ZB",
        "mac": "00:***********:68",
        "hiv": "1.0.5",
        "fwv": "1.0.1",
        "hwv": "v01.3",
        "swv": "b00.2",
        "id": "1015",
        "prototype": "1"
    },
    "services": [
        {
            "sid": "keyEvent",
            "st": "keyEvent",
            "ts": "20171225T074217Z",
            "data": {
                "key": 0
            }
        },
        ....
    ]
}
```

## 错误码

```screen
{
  "errcode": 11
}
```

错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077308408)。
