---
name: cangjie-references/cj-unittest_common_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.common / 结构体
---

# 结构体

#### struct KeyTags
    
    
    public struct KeyTags <: KeyFor<Array<String>> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 配置键值。

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop tags
    
    
    public static prop tags: KeyTags

功能：配置项的键值。

类型：KeyTags

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct OptionInfo
    
    
    public struct OptionInfo {
        public let description: ?String
        public let name: String
        public let types!: HashMap<String, ?String> = HashMap()
        public let userDefined: Bool
    }

功能：打印帮助页面时可以使用的选项的信息。

#### [h2]let description
    
    
    public let description: ?String

功能：选项描述信息。

类型：?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]let name
    
    
    public let name: String

功能：选项名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]let types
    
    
    public let types!: HashMap<String, ?String> = HashMap()

功能：从选项类型名称映射到值的含义。

类型： HashMap<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>

#### [h2]let userDefined
    
    
    public let userDefined: Bool

功能：选项是否已被定义。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)
