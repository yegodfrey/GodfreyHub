---
name: cangjie-references/cj-unittest_common_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.common / 枚举
---

# 枚举

#### enum Color
    
    
    public enum Color <: Equatable<Color> {
        | RED
        | GREEN
        | YELLOW
        | BLUE
        | CYAN
        | MAGENTA
        | GRAY
        | DEFAULT_COLOR
    }

功能：指定颜色。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<Color>



示例：
    
    
    import std.unittest.common.*
    
    main(): Unit {
        let pp = PrettyText()
        pp.colored(Color.BLUE, "blue text!")
    }

#### [h2]RED
    
    
    RED

功能：红色。

#### [h2]GREEN
    
    
    GREEN

功能：绿色。

#### [h2]YELLOW
    
    
    YELLOW

功能：黄色。

#### [h2]BLUE
    
    
    BLUE

功能：蓝色。

#### [h2]CYAN
    
    
    CYAN

功能：青色。

#### [h2]MAGENTA
    
    
    MAGENTA

功能：品红色。

#### [h2]GRAY
    
    
    GRAY

功能：灰色。

#### [h2]DEFAULT_COLOR
    
    
    DEFAULT_COLOR

功能：默认色。

#### [h2]operator func ==(Color)
    
    
    public operator func ==(that: Color): Bool

功能：判断颜色是否相等。

参数：

  * that: Color \- 被对比的颜色。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 相等时返回 true ，否则返回 false 。



#### [h2]operator func !=(Color)
    
    
    public operator func !=(that: Color): Bool

功能：判断颜色是否不相等。

参数：

  * that: Color \- 被对比的颜色。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 不相等时返回 true ，否则返回 false 。



#### enum OptionValidity
    
    
    public enum OptionValidity {
        | UnknownOptionType
        | InvalidOption(String)
        | ValidOption(ConfigurationKey)
    }

功能：代表选项值验证的结果的枚举值。

#### [h2]UnknownOptionType
    
    
    UnknownOptionType

功能：未知状态，仅在验证出现内部错误时出现。

#### [h2]InvalidOption(String)
    
    
    InvalidOption(String)

功能：选项验证无效，包含无效的原因。

#### [h2]ValidOption(ConfigurationKey)
    
    
    ValidOption(ConfigurationKey)

功能：选项值有效，包含选项值在配置项中对应键值对的键名。
