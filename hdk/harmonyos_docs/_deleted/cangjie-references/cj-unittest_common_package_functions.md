---
name: cangjie-references/cj-unittest_common_package_functions
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_functions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.common / 函数
---

# 函数

#### func registerOptionValidator(String, (Any) -> OptionValidity)
    
    
    public func registerOptionValidator(name: String, validator: (Any) -> OptionValidity): Unit

功能：用于注册自定义选项验证器。大多数情况下，用户应该使用 [@UnittestOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#unittestoption-宏) 宏，而不是直接使用这个函数。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 选项名称。
  * validator: ([Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)) -> [OptionValidity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_enums#enum-optionvalidity) \- 检查选项是否合法的函数。



#### func setOptionInfo(String, Array<String>, ?String)
    
    
    public func setOptionInfo(
        name: String,
        types: Array<String>,
        description!: ?String = None
    ): Unit

功能：用于设置选项的描述的函数。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 选项名称。
  * types: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 可以表示的选项值的有效类型
  * description!: ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 选项描述。



#### func setOrUpdateOptionInfo(String, ?String, String, String)
    
    
    public func setOrUpdateOptionInfo(
        name: String,
        description: ?String,
        ty: String,
        typeDescription: String
    ): Unit

功能：用于设置具体类型的选项的描述。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 选项名称。
  * description: ?[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 选项的描述。如果值不为 None ，则覆盖先前的值。
  * ty: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的字符串形式。
  * typeDescription: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 选项的类型描述。


