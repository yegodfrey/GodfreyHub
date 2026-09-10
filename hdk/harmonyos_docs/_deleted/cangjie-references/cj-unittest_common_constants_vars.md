---
name: cangjie-references/cj-unittest_common_constants_vars
title: 常量&变量
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_constants_vars
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.common / 常量&变量
---

# 常量&变量

#### let optionsInfo
    
    
    public let optionsInfo: HashMap<String, OptionInfo> = HashMap()

功能：保存有关单元测试选项的信息的注册表。仅在框架内使用，不建议用户使用。

类型：[HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [OptionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_structs#struct-optioninfo)>

#### var unittestOptionsRegistryClosed
    
    
    public var unittestOptionsRegistryClosed = false

功能：用于标记选项是否可以注册的内部标志。仅在框架内使用，不建议用户使用。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)
