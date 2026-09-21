---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-161
title: 编译报错“Duplicate 'routerMap' object names detected.”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-161
---

# 编译报错"Duplicate 'routerMap' object names detected."

**错误描述**

routerMap配置中存在重复名称。

**可能原因**

当前模块的router_map.json文件中存在name重复的routerMap配置，或者当前模块与依赖模块之间存在name重复的routerMap配置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/lYs2YYQZSU2eVoQRFMXfAg/zh-cn_image_0000002624478642.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=0C97013A025590C715F4BCA1A4A705F66F1AEC1B152898BB1B17C79CF5E8AD6B)

**解决措施**

修改router_map.json文件中的name字段，确保其值唯一。

