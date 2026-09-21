---
name: document/cn/HMSCore-Guides/android-fgrd-show-0000001050040126
title: 前台应用的通知处理
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-fgrd-show-0000001050040126
---

# 前台应用的通知处理

您可以设置"[message.android.notification.foreground_show](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197#ZH-CN_TOPIC_0000001700731289__p163211583235)"字段控制前台应用的通知栏消息是否通过[NC](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/terminology-0000001091633260#section11655114412387)展示。

* 设置为"true"时，应用在前台时由NC展示通知栏消息。
* 设置为"false"时，应用在前台时，通知栏消息将不会展示，消息内容会通过[onMessageReceived](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hmsmessageservice-0000001050173839#section2394629102116)([RemoteMessage](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/remotemessage-0000001050171874) message)方法传递给应用，可参见[获取消息数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-basic-receivemsg-0000001087370610#section129902001015)获取消息字段。这种情况下，推送服务不会校验消息字段的合法性。

> 说明
>
> 该功能要求EMUI 9.1.0及以上版本，Push SDK 4.0及以上版本。

消息体示例：

```screen
{
    "message": {
        "notification": {
            "title": "message title",
            "body": "message body"
        },
        "android": {
            "notification": {
                "foreground_show": false,
                "click_action": {
                    "type": 1,
                    "action": "com.huawei.codelabpush.intent.action.test"
                }
            }
        },
        "token": [
            "pushtoken1"
        ]
    }
}
```

