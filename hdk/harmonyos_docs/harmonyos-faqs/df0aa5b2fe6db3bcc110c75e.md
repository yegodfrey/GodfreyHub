---
name: document/cn/harmonyos-faqs/faqs-app-running-28
title: 在应用中如何区分真机和模拟器
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-28
---

# 在应用中如何区分真机和模拟器

**问题现象**

在调试应用代码时，需要判断当前运行的设备是真机还是模拟器，可以通过检查特定的系统属性或环境变量来实现区分。

**解决措施**

在应用中，使用[@ohos.deviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-device-info)模块的productModel属性来区分真机和模拟器。模拟器上，productModel的值为emulator。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/7t1rOryJTbmAkovkv6IopQ/zh-cn_image_0000002624478762.png?HW-CC-KV=V1&HW-CC-Date=20261008T152736Z&HW-CC-Expire=31536000000&HW-CC-Sign=058F36BAE20A0C3EB41FD62C602145C1F56EF5C6E01AB70D1A9CA5EDC957B9F2 "点击放大")

