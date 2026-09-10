---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-20
title: 编译报错“please check deviceType or distroFilter/distributionFilter of the module”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-20
---

# 编译报错"please check deviceType or distroFilter/distributionFilter of the module"

问题现象

HarmonyOS DevEco Studio编译时出现错误，提示如下之一：

* Module: (xxx) and Module: (xxx) are entry, please check deviceType or distroFilter of the module. ![](https://media:101782454424503544)

* Module: (xxx) and Module: (xxx) have the same moduleName, please check deviceType or distroFilter of the module. ![](https://media:101782454424532545)

* Module: (xxx) and Module: (xxx) have the same packageName, please check deviceType or distroFilter of the module. ![](https://media:101782454424562546)

* Module: (xxx) and Module: (xxx) have the same ability name. ![](https://media:101782454424653547)

解决措施

* 可能是打包时工程未满足HAP唯一性校验逻辑，请参考[HAP唯一性校验逻辑](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-verification-rule)修改工程配置，满足校验逻辑即可正常打包。
* 如果工程中仅有一种设备类型，请确保工程级build-profile.json5文件中，同一模块的不同目标target的applyToProducts字段对应的product不相同。 ![](https://media:101782454424678548)

