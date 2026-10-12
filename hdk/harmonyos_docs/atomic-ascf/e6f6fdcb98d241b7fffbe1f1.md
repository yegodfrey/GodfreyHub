---
name: document/cn/atomic-ascf/faqs-appjson-pages-change
title: app.json配置pages字段重复报错
uri: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/faqs-appjson-pages-change
---

# app.json配置pages字段重复报错

**问题现象：**

工具链1.0.13版本开始，针对app.json配置中的pages字段加了重复性校验。如果pages字段有重复的元素，编译会报错，错误会提示具体哪两项重复。

编译报错如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/Vm0fstSQTLGSPTplEY4A2w/zh-cn_image_0000002733493628.png?HW-CC-KV=V1&HW-CC-Date=20261008T151636Z&HW-CC-Expire=31536000000&HW-CC-Sign=B18DB5C4D56C363ED37A7715A4654201A16DF00DF0C78D0F6E7C3200DDAEAAAA "点击放大")

**解决措施：**

根据错误提示找到重复的项，去掉重新编译即可。

