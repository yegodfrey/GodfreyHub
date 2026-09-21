---
name: cangjie-references/cj-argopt_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-argopt_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.argopt / 枚举
---

# 枚举

#### enum ArgumentMode
    
    
    public enum ArgumentMode <: ToString & Equatable<ArgumentMode> {
        | NoValue
        | RequiredValue
        | OptionalValue
    }

功能：描述选项的参数模式。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ArgumentMode>



#### [h2]NoValue
    
    
    NoValue

功能：表示选项的值是不存在的。

#### [h2]OptionalValue
    
    
    OptionalValue

功能：表示选项的值是可选的。

#### [h2]RequiredValue
    
    
    RequiredValue

功能：表示选项的值是必须的。

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取参数模式字符串。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 参数模式字符串。



示例：
    
    
    import std.argopt.*
    
    main() {
        let mode = ArgumentMode.NoValue
        let str = mode.toString()
        println("ArgumentMode string: ${str}")
    }

运行结果：
    
    
    ArgumentMode string: NoValue

#### [h2]operator func ==(ArgumentMode)
    
    
    public operator func ==(other: ArgumentMode): Bool

功能：比较参数模式是否相同。

参数：

  * other: [ArgumentMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-argopt_package_enums#enum-argumentmode) \- 参数模式。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 相同时返回 true，否则返回 false。



示例：
    
    
    import std.argopt.*
    
    main() {
        let mode1 = ArgumentMode.NoValue
        let mode2 = ArgumentMode.NoValue
        let mode3 = ArgumentMode.RequiredValue
    
        let equal = (mode1 == mode2)
        let notEqual = (mode1 == mode3)
    
        println("mode1 == mode2: ${equal}")
        println("mode1 == mode3: ${notEqual}")
    }

运行结果：
    
    
    mode1 == mode2: true
    mode1 == mode3: false

#### enum ArgumentSpec
    
    
    public enum ArgumentSpec {
        | Short(Rune, ArgumentMode)
        | Short(Rune, ArgumentMode, (String) -> Unit)
        | Long(String, ArgumentMode)
        | Long(String, ArgumentMode, (String) -> Unit)
        | Full(String, Rune, ArgumentMode)
        | Full(String, Rune, ArgumentMode, (String) -> Unit)
        | NonOptions((Array<String>) -> Unit)
    }

功能：描述参数的规范。

#### [h2]Full(String, Rune, ArgumentMode)
    
    
    Full(String, Rune, ArgumentMode)

功能：表示同时存在长选项和短选项。

#### [h2]Full(String, Rune, ArgumentMode, (String) -> Unit)
    
    
    Full(String, Rune, ArgumentMode, (String) -> Unit)

功能：表示同时存在长选项和短选项，并持有一个 lambda 回调函数。

#### [h2]Long(String, ArgumentMode)
    
    
    Long(String, ArgumentMode)

功能：表示是一个长选项规格。

#### [h2]Long(String, ArgumentMode, (String) -> Unit)
    
    
    Long(String, ArgumentMode, (String) -> Unit)

功能：表示是一个长选项，同时持有一个 lambda 回调函数。

#### [h2]NonOptions((Array<String>) -> Unit)
    
    
    NonOptions((Array<String>) -> Unit)

功能：表示是一个非选项。

#### [h2]Short(Rune, ArgumentMode)
    
    
    Short(Rune, ArgumentMode)

功能：表示是一个短选项。

#### [h2]Short(Rune, ArgumentMode, (String) -> Unit)
    
    
    Short(Rune, ArgumentMode, (String) -> Unit)

功能：表示是一个短选项，同时持有一个 lambda 回调函数。
