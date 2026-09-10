---
name: cangjie-references/cj-deriving_package_overview
title: std.deriving
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.deriving
---

# std.deriving

std.deriving 提供了一种根据类、结构体和枚举类型的字段、属性等自动生成接口实现的方法。

当前支持自动生成以下接口的实现：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)
  * [Comparable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-comparablet)



更多示例详见 [Deriving 用户手册](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide)。

#### API 列表

#### [h2]宏

宏名 | 功能  
---|---  
[Derive](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#derive-宏) | Derive 是一个核心宏，其仅可修饰结构体、类或枚举等声明，对被修饰的声明[自动扩展接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide)。  
[DeriveExclude](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#deriveexclude-宏) | DeriveExclude 可为已被 [@Derive 宏](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#derive-宏)修饰的声明[排除不需要处理的字段](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#包含和排除)，字段默认被 Deriving 处理。  
[DeriveInclude](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#deriveinclude-宏) | DeriveInclude 可为已被 [@Derive 宏](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#derive-宏)修饰的声明[增加需要处理的属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#包含和排除)，属性默认情况不会被 Deriving 处理。  
[DeriveOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#deriveorder-宏) | DeriveOrder 可为已被 [@Derive 宏](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#derive-宏)修饰的声明[指定处理字段和属性的顺序](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#变更顺序)，通常对 Comparable 接口有意义。  
  
  * **[宏](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving-samples)**  



