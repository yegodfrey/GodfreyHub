---
name: cangjie-references/cj-deriving_package_macros
title: 宏
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.deriving / 宏
---

# 宏

#### @Derive 宏

功能：Derive 是一个核心宏，其仅可修饰结构体、类或枚举等声明，对被修饰的声明[自动扩展接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide)。

示例：

参考 [Deriving 示例](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide)

#### @DeriveExclude 宏

功能：DeriveExclude 可为已被 @Derive 宏修饰的声明[排除不需要处理的字段](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#包含和排除)，字段默认被 Deriving 处理。

示例：

参考[包含和排除](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#包含和排除)

#### @DeriveInclude 宏

功能：DeriveInclude 可为已被 @Derive 宏修饰的声明[增加需要处理的属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#包含和排除)，属性默认情况不会被 Deriving 处理。

示例：

参考[包含和排除](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#包含和排除)

#### @DeriveOrder 宏

功能：DeriveOrder 可为已被 @Derive 宏修饰的声明[指定处理字段和属性的顺序](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#变更顺序)，通常对 Comparable 接口有意义。

示例：

参考[变更顺序](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_user_guide#变更顺序)
