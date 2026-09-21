---
name: document/cn/HMSCore-Guides/android-basic-sendtestmsg-0000001087842114
title: 发送测试消息
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-basic-sendtestmsg-0000001087842114
---

# 发送测试消息

## 场景介绍

当您成功获取了应用的Token后，可以通过[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)向您的设备测试发送消息。您也可以使用REST API来推送消息，详情请参见[发送下行消息](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-server-dev-0000001050040110)。
> 说明
>
> 将您的Android工程打包成APK安装到测试设备中请确保使用了正确的证书指纹（详情请参见[生成签名证书指纹](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-config-agc-0000001050170137#section193351110105114)）。

## 推送通知栏消息步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"开发与服务"，在项目列表中找到您的项目，通过"增长 > 推送服务 > 推送通知"，在"推送通知"页签下点击"添加推送通知"即可新建一个推送任务。
2. 在消息内容模块中填写消息名称、消息标题和内容，设置消息类型为**通知栏消息** ，其他字段内容请参见[场景介绍](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/msg-sending-introduction-0000001136453986)。
3. 点击"效果测试"，填入您的Push Token，最后点击"确定"即可。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250830105220.19475214212418952558736091282930:50001231000000:2800:98B9D634F444FFFACC648DC81D1B0B0FBBA7D49ABB26B272A27140762172E605.png "点击放大")

## 推送透传消息步骤

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击"开发与服务"，在项目列表中找到您的项目，通过"增长 > 推送服务 > 推送通知"，在"推送通知"页签下点击"添加推送通知"即可新建一个推送任务。
2. 在消息内容模块中填写消息名称，设置消息类型为**透传消息** ，根据自定义参数选择"键值对"或者"自定义参数"携带您的数据内容。
3. 在推送范围中选择您的应用，填入您的Push Token，最后点击右上角"提交"即可。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250830105220.14813937230720791860164533253638:50001231000000:2800:DDD923DDB4061C591FBDFA72F2C9EC607F768807ED431F68A441E61463D27847.png "点击放大")

> 说明
>
> Android应用如何获取携带的数据请参见[获取消息数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-basic-receivemsg-0000001087370610)。

