---
name: document/cn/SmartDevicePartner-References/deliver-command-press-and-hold-0000001077756432
title: 下发命令到设备（长按控制）
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/deliver-command-press-and-hold-0000001077756432
---

# 下发命令到设备（长按控制）

## 适用平台

Android、iOS

## 请求消息

当需要将下发命令给设备，且配置长按控制时，WEB中调用js方法如下。一般用在接收到用户对设备的操作指令时。

```screen
hilink.setLongPressDeviceInfo(
"{devid}", // devid,string,设备id，若取"0"，表示当前设备
"json_body", // body,string,控制设备的命令，见下描述
"resultCallback", // resultCallback，成功或失败时，将调用传入resultStr返回结果
"isLongPressInProgress", // boolean，true：长按命令开始执行，false：长按命令结束
);
```

json_body中列举出需要设置的设备characteristicName以及要设置的value。

```screen
{
    // sid为该设备的的service id，取值参见Profile定义。
    "sid1":{
        "characteristicName1": "value1",
        "characteristicName2": "value2"
    },
    "sid2":{
        "characteristicName1": "value1",
        "characteristicName2": "value2"
    }
}
```

Body不能为空，否则将失败。

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将如下结果返回到resultStr中。

```screen
{
  "errcode": 0
}
```

## 错误码

```screen
{
  "errcode": 11
}
```

错误码说明参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/SmartDevicePartner-References/result-codes-0000001077308408)。
