---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-161
title: 编译报错“Duplicate 'routerMap' object names detected.”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-161
---

# 编译报错"Duplicate 'routerMap' object names detected."

错误描述

routerMap配置中存在重复名称。

可能原因

当前模块的router_map.json文件中存在name重复的routerMap配置，或者当前模块与依赖模块之间存在name重复的routerMap配置。

![](https://media:101782454459598109)

解决措施

修改router_map.json文件中的name字段，确保其值唯一。  
