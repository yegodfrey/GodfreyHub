---
name: document/cn/harmonyos-faqs/faqs-development-environment-15
title: DevEco Studio中如何设置超长日志自动换行
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-15
---

# DevEco Studio中如何设置超长日志自动换行

启用Soft-Wrap功能以实现日志消息的自动换行。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/DZoThWgHRMyAWarxCczjKA/zh-cn_image_0000002624638320.png?HW-CC-KV=V1&HW-CC-Date=20261008T190357Z&HW-CC-Expire=31536000000&HW-CC-Sign=03BB514BCAEE376AA83B1ABF6A1FAF37CA4A9FEE27DF08649B45BF85FCD1DA25 "点击放大")

日志单条打印的最大长度为4096个字符。建议在应用的日志框架中，对日志长度进行判断，若超过该长度则分段打印，以避免日志丢失。

