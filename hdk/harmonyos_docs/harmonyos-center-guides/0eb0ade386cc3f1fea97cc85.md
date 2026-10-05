---
name: document/cn/harmonyos-center-guides/faqs-compiling-and-building-155-0000002165829217
title: 编译报错“Cannot depend on HAP modules outside of this project”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-compiling-and-building-155-0000002165829217
source: portal
---

编译报错“Cannot depend on HAP modules outside of this project” **错误描述** 不要依赖项目外部的HAP模块。 **可能原因** 项目根目录下的build-profile.json5文件中，srcPath字段引用了项目外部的 HAP 模块。 **解决措施** 使用HSP或HAR模块来替代项目外的HAP模块。
