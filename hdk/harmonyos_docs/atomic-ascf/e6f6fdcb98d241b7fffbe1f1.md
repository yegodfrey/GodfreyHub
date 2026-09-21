---
name: document/cn/atomic-ascf/faqs-appjson-pages-change
title: app.json配置pages字段重复报错
uri: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/faqs-appjson-pages-change
---

# app.json配置pages字段重复报错

**问题现象：**

工具链1.0.13版本开始，针对app.json配置中的pages字段加了重复性校验。如果pages字段有重复的元素，编译会报错，错误会提示具体哪两项重复。

编译报错如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/Vm0fstSQTLGSPTplEY4A2w/zh-cn_image_0000002733493628.png?HW-CC-KV=V1&HW-CC-Date=20260917T065900Z&HW-CC-Expire=31536000000&HW-CC-Sign=19B332CDC95E31D75030861A7A0F16E1C33318AC3D01DB4CBDAC6CC8754258C6 "点击放大")

**解决措施：**

根据错误提示找到重复的项，去掉重新编译即可。

