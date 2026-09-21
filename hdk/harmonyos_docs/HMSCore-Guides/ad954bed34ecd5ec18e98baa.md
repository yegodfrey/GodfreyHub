---
name: document/cn/HMSCore-Guides/web-dev-guides-0000001080547778
title: 应用开发
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-dev-guides-0000001080547778
---

# 应用开发

## 工程配置

将[Web推送配置](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/web-app-preparations-0000001080835864#ZH-CN_TOPIC_0000001700850797__li4996135718136)中的代码段，复制到您的项目工程中，并在您项目工程的根目录下创建 **hms-messaging-sw.js** 文件（用来注册Service Worker），该文件内容可以为空。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240719093414.57472746340000928588552685593403:50001231000000:2800:4D79B83C30D8C1E6218B19566CDF27663EEDF3F6509CB2D3BBD8BA49163CB134.png?needInitFileName=true?needInitFileName=true "点击放大")

> 说明
>
> "hms"为推送服务定义的对象。

## 申请token

调用[getToken](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/web-app-client-api-inter-msg-0000001632559421#section177483432414)方法申请Token。

示例代码：

```screen
messaging.getToken().then((currentToken) => {
    if (currentToken) {
        console.log('Get current token');
    } else {
        console.log('No Instance ID token available. Request permission to generate one.');
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});
```

## 推送消息

请参见[下行消息](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/https-send-api-0000001050986197)API进行消息推送。如果是透传消息，则接收消息中字段orignData为透传消息内容。

示例报文：

```screen
{
    "validate_only": false,
    "message": {
        "notification": {
            "title": "Big News",
            "body": "This is a Big News!"
        },
        "data": "this is data",
        "webpush": {
            "headers": {
                "ttl": "990",
                "urgency": "NORMAL",
                "topic": "12313"
            },
            "notification": {
                "title": "notification string",
                "body": "web push body",
                "actions": [
                    {
                        "action": "",
                        "icon": "",
                        "title": "string"
                    }
                ],
                "badge": "string",
                "dir": "auto",
                "icon": "string",
                "image": "string",
                "lang": "string",
                "renotify": true,
                "require_interaction": true,
                "silent": true,
                "tag": "string",
                "timestamp": 1545201266,
                "vibrate": [100,200,300]
            },
            "hms_options": {
                "link": "https://example.com"
            }
        },
        "token": [
            "your token1",
            "your token2"
        ]
    }
}
```

## 前台接收消息

当浏览器在前台运行时需要实现[onMessage](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/web-app-client-api-inter-msg-0000001632559421#section3111134910165)回调函数来接收处理消息。

示例代码：

```screen
messaging.onMessage((payload) => {
    console.log('Message received.', payload);
});
```

