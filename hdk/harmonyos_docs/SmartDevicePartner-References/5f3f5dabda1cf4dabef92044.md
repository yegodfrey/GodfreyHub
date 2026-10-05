---
name: document/cn/SmartDevicePartner-References/one-click-device-registration-0000001090419755
title: 设备一键注册
uri: https://developer.huawei.com/consumer/cn/doc/SmartDevicePartner-References/one-click-device-registration-0000001090419755
---

# 设备一键注册

## 适用平台

Android、iOS，平台差异如下：

* Android平台：函数名为"registerInfraredHubDevice"，本节以Android平台为例进行介绍。
* iOS平台：函数名为"regiterInfraredHubDevice"。

## 请求消息

将设备信息下发到app native，通知在IOT云端**注册** **此** **设备**。

用于App代理将设备注册到云侧。

```screen
hilink.registerInfraredHubDevice(
"json_body", // body,string,见下描述
"resultCallback" // resultCallback，成功或失败时，将调用传入resultStr返回结果
);
```

其中json填入参数：

```screen
{
    "devInfo": {
        "sn": "string",
        "model": "string",
        "devType": "string",
        "manu": "string",
        "prodId": "string",
        "hiv": "string",
        "mac": "string",
        "fwv": "string",
        "hwv": "string",
        "swv": "string"
    }
}
```

## 响应消息

当调用成功时，JSSDK将调用success对应的回调函数，将结果返回到resultStr中。resultStr的实例如下：

```screen
{
"errcode": "200",
"devId": "string", //成功后可返回注册的devId：
}
```

## 错误码

```screen
400： Bad Request
401： auth Failed, device or home not found
500： Internal Service Error
```

