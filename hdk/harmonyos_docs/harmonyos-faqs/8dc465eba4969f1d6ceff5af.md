---
name: document/cn/harmonyos-faqs/faqs-development-environment-15
title: DevEco Studio中如何设置超长日志自动换行
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-environment-15
---

# DevEco Studio中如何设置超长日志自动换行

启用Soft-Wrap功能以实现日志消息的自动换行。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/DZoThWgHRMyAWarxCczjKA/zh-cn_image_0000002624638320.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=DDB36A02C192F6D2B516BE57AD837B123CA908F6A83B2AE13B7935405FFF4F43 "点击放大")

日志单条打印的最大长度为4096个字符。建议在应用的日志框架中，对日志长度进行判断，若超过该长度则分段打印，以避免日志丢失。

