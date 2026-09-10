---
name: cangjie-references/cj-unicode_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unicode / 接口
---

# 接口

#### interface UnicodeRuneExtension
    
    
    public interface UnicodeRuneExtension {
        func isLetter(): Bool
        func isNumber(): Bool
        func isLowerCase(): Bool
        func isUpperCase(): Bool
        func isTitleCase(): Bool
        func isWhiteSpace(): Bool
        func toUpperCase(): Rune
        func toLowerCase(): Rune
        func toTitleCase(): Rune
        func toUpperCase(opt: CasingOption): Rune
        func toLowerCase(opt: CasingOption): Rune
        func toTitleCase(opt: CasingOption): Rune
    }

功能：Unicode 字符集相关扩展的接口。

可用于为 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型增加一系列与 Unicode 字符集相关的扩展函数，包括字符类型判断，字符大小写转换，删除空白字符等。

#### [h2]func isLetter()
    
    
    func isLetter(): Bool

功能：判断该类型否是 Unicode 字母字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型是 Unicode 字母字符，返回 true，否则返回 false。



#### [h2]func isLowerCase()
    
    
    func isLowerCase(): Bool

功能：判断该类型是否是 Unicode 小写字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型是 Unicode 小写字符，返回 true，否则返回 false。



#### [h2]func isNumber()
    
    
    func isNumber(): Bool

功能：判断类型是否是 Unicode 数字字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型是 Unicode 数字字符，返回 true，否则返回 false。



#### [h2]func isTitleCase()
    
    
    func isTitleCase(): Bool

功能：判断该类型是否是 Unicode 标题化字符。

Unicode 中的标题化字符指的是一种特殊的字母形式，它们在某些语言中用于表示标题中每个单词的首字母大写的形式。这些字母由特殊的字符表示，例如 U+01C5（ǅ）和 U+01F1（Ǳ）。这些字符通常用于一些东欧语言，如克罗地亚语和塞尔维亚语。

标题化字符包括：0x01C5、0x01C8、0x01CB、0x01F2、0x1F88 - 0x1F8F、0x1F98 - 0x1F9F、0x1F98 - 0x1F9F、0x1FA8 - 0x1FAF、0x1FBC、0x1FCC、0x1FFC

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型是 Unicode 标题大写字符，返回 true，否则返回 false。



#### [h2]func isUpperCase()
    
    
    func isUpperCase(): Bool

功能：判断该类型是否是 Unicode 大写字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型是 Unicode 大写字符，返回 true，否则返回 false。



#### [h2]func isWhiteSpace()
    
    
    func isWhiteSpace(): Bool

功能：判断该类型是否是 Unicode 空白字符。

空白字符包括 0x0009、0x000A、0x000B、0x000C、0x000D、0x0020、0x0085、0x00A0、0x1680、0x2000、0x2001、0x2002、0x2003、0x2004、0x2005、0x2006、0x2007、0x2008、0x2009、0x200A、0x2028、0x2029、0x202F、0x205F、0x3000。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型是 Unicode 空白字符，返回 true，否则返回 false。



#### [h2]func toLowerCase()
    
    
    func toLowerCase(): Rune

功能：获取该类型对应的 Unicode 小写字符。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前类型对应的小写字符。



#### [h2]func toLowerCase(CasingOption)
    
    
    func toLowerCase(opt: CasingOption): Rune

功能：获取该类型对应的 Unicode 小写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前类型对应的小写字符。



#### [h2]func toTitleCase()
    
    
    func toTitleCase(): Rune

功能：获取该类型对应的 Unicode 标题大写字符。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前类型对应的标题大写字符。



#### [h2]func toTitleCase(CasingOption)
    
    
    func toTitleCase(opt: CasingOption): Rune

功能：获取该类型对应的 Unicode 标题大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前类型对应的标题大写字符。



#### [h2]func toUpperCase()
    
    
    func toUpperCase(): Rune

功能：获取该类型对应的 Unicode 大写字符。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前类型对应的小写字符。



#### [h2]func toUpperCase(CasingOption)
    
    
    func toUpperCase(opt: CasingOption): Rune

功能：获取该类型对应的 Unicode 大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前类型对应的小写字符。



#### [h2]extend Rune <: UnicodeRuneExtension
    
    
    extend Rune <: UnicodeRuneExtension

功能：为 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型扩展 [UnicodeRuneExtension](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces#interface-unicoderuneextension) 接口，支持字符集相关的操作。

父类型：

  * UnicodeRuneExtension



**func isLetter()**
    
    
    public func isLetter(): Bool

功能：判断字符是否是 Unicode 字母字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该字符是 Unicode 字母字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.isLetter())
        println(r'1'.isLetter())
    }

运行结果：
    
    
    true
    false

**func isLowerCase()**
    
    
    public func isLowerCase(): Bool

功能：判断字符是否是 Unicode 小写字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该字符是 Unicode 小写字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.isLowerCase())
        println(r'A'.isLowerCase())
    }

运行结果：
    
    
    true
    false

**func isNumber()**
    
    
    public func isNumber(): Bool

功能：判断字符是否是 Unicode 数字字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该字符是 Unicode 数字字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.isNumber())
        println(r'1'.isNumber())
    }

运行结果：
    
    
    false
    true

**func isTitleCase()**
    
    
    public func isTitleCase(): Bool

功能：判断字符是否是 Unicode 标题化字符。

Unicode 中的标题化字符指的是一种特殊的字母形式，它们在某些语言中用于表示标题中每个单词的首字母大写的形式。这些字母由特殊的字符表示，例如 U+01C5（ǅ）和 U+01F1（Ǳ）。这些字符通常用于一些东欧语言，如克罗地亚语和塞尔维亚语。

标题化字符包括：0x01C5、0x01C8、0x01CB、0x01F2、0x1F88 - 0x1F8F、0x1F98 - 0x1F9F、0x1F98 - 0x1F9F、0x1FA8 - 0x1FAF、0x1FBC、0x1FCC、0x1FFC

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该字符是 Unicode 标题大写字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'ǅ'.isTitleCase())
    }

运行结果：
    
    
    true

**func isUpperCase()**
    
    
    public func isUpperCase(): Bool

功能：判断字符是否是 Unicode 大写字符。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该字符是 Unicode 大写字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.isUpperCase())
        println(r'A'.isUpperCase())
    }

运行结果：
    
    
    false
    true

**func isWhiteSpace()**
    
    
    public func isWhiteSpace(): Bool

功能：判断字符是否是 Unicode 空白字符。

空白字符包括 0x0009、0x000A、0x000B、0x000C、0x000D、0x0020、0x0085、0x00A0、0x1680、0x2000、0x2001、0x2002、0x2003、0x2004、0x2005、0x2006、0x2007、0x2008、0x2009、0x200A、0x2028、0x2029、0x202F、0x205F、0x3000。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该字符是 Unicode 空白字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r' '.isWhiteSpace())
    }

运行结果：
    
    
    true

**func toLowerCase()**
    
    
    public func toLowerCase(): Rune

功能：获取该字符对应的 Unicode 小写字符。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前字符对应的小写字符。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'A'.toLowerCase())
    }

运行结果：
    
    
    a

**func toLowerCase(CasingOption)**
    
    
    public func toLowerCase(opt: CasingOption): Rune

功能：获取该字符对应的 Unicode 小写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前字符对应的小写字符。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'A'.toLowerCase(CasingOption.Other))
    }

运行结果：
    
    
    a

**func toTitleCase()**
    
    
    public func toTitleCase(): Rune

功能：获取该字符对应的 Unicode 标题大写字符。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前字符对应的标题大写字符。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.toTitleCase())
    }

运行结果：
    
    
    A

**func toTitleCase(CasingOption)**
    
    
    public func toTitleCase(opt: CasingOption): Rune

功能：获取该字符对应的 Unicode 标题大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前字符对应的标题大写字符。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.toTitleCase(CasingOption.Other))
    }

运行结果：
    
    
    A

**func toUpperCase()**
    
    
    public func toUpperCase(): Rune

功能：获取该字符对应的 Unicode 大写字符。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前字符对应的小写字符。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.toUpperCase())
    }

运行结果：
    
    
    A

**func toUpperCase(CasingOption)**
    
    
    public func toUpperCase(opt: CasingOption): Rune

功能：获取该字符对应的 Unicode 大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 当前字符对应的小写字符。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(r'a'.toUpperCase(CasingOption.Other))
    }

运行结果：
    
    
    A

#### interface UnicodeStringExtension
    
    
    public interface UnicodeStringExtension {
        func isBlank(): Bool
        func toLower(): String
        func toLower(opt: CasingOption): String
        func toTitle(): String
        func toTitle(opt: CasingOption): String
        func toUpper(): String
        func toUpper(opt: CasingOption): String
        func trim(): String
        func trimRight(): String
        func trimLeft(): String
        func trimStart(): String
        func trimEnd(): String
    }

功能：Unicode 字符集相关扩展的接口。

可用于为 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 类型增加一系列与 Unicode 字符集相关的扩展函数，包括字符类型判断，字符大小写转换，删除空白字符等。

#### [h2]func isBlank()
    
    
    func isBlank(): Bool

功能：判断当前字符串是否为空，或仅包含 Unicode 字符集中的空字符。

空白字符包括 0x0009、0x000A、0x000B、0x000C、0x000D、0x0020、0x0085、0x00A0、0x1680、0x2000、0x2001、0x2002、0x2003、0x2004、0x2005、0x2006、0x2007、0x2008、0x2009、0x200A、0x2028、0x2029、0x202F、0x205F、0x3000。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果字符串为空，或仅包含空字符，返回 true，否则返回 false。



#### [h2]func toLower()
    
    
    func toLower(): String

功能：将当前字符串中所有 Unicode 字符集范围内的大写字符转化为小写字符。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全小写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



#### [h2]func toLower(CasingOption)
    
    
    func toLower(opt: CasingOption): String

功能：将当前字符串中所有 Unicode 字符集范围内的大写字符转化为小写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全小写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



#### [h2]func toTitle()
    
    
    func toTitle(): String

功能：将当前字符串中 Unicode 字符集范围内可以转换为标题大写字符的转换为标题大写字符。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的标题大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



#### [h2]func toTitle(CasingOption)
    
    
    func toTitle(opt: CasingOption): String

功能：将当前字符串中 Unicode 字符集范围内可以转换为标题大写字符的转换为标题大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的标题大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



#### [h2]func toUpper()
    
    
    func toUpper(): String

功能：将当前字符串中所有 Unicode 字符集范围内的小写字符转化为大写字符。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



#### [h2]func toUpper(CasingOption)
    
    
    func toUpper(opt: CasingOption): String

功能：将当前字符串中所有 Unicode 字符集范围内的小写字符转化为大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



#### [h2]func trim()
    
    
    func trim(): String

功能：去除字符串开头结尾的空字符串，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除首尾空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



#### [h2]func trimEnd()
    
    
    func trimEnd(): String

功能：去除字符串结尾的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除结尾空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



#### [h2]func trimLeft() (deprecated)
    
    
    func trimLeft(): String

功能：去除字符串开头的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/E50Hn5odQFiEg7TIAuORAQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111719Z&HW-CC-Expire=86400&HW-CC-Sign=698D66BE0CB121B86B41E0AAE364F847987599F3116B5EDF633B4FEAFF621153)

未来版本即将废弃，使用 [trimStart](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces#func-trimstart) 替代。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除开头空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



#### [h2]func trimRight() (deprecated)
    
    
    func trimRight(): String

功能：去除字符串结尾的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/ga0_r_YLT7yTeKD2281yjg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111719Z&HW-CC-Expire=86400&HW-CC-Sign=FCBF4E6F693FECFF327B45A7D632F5675456666EDE52F1BE815058D3C19AE413)

未来版本即将废弃，使用 [trimEnd](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces#func-trimend) 替代。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除结尾空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



#### [h2]func trimStart()
    
    
    func trimStart(): String

功能：去除字符串开头的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除开头空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



#### [h2]extend String <: UnicodeStringExtension
    
    
    extend String <: UnicodeStringExtension

功能：为 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 类型扩展 [UnicodeRuneExtension](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces#interface-unicoderuneextension) 接口，支持字符集相关的操作。

父类型：

  * UnicodeStringExtension



**func isBlank()**
    
    
    public func isBlank(): Bool

功能：判断当前字符串是否为空，或仅包含 Unicode 字符集中的空字符。

空白字符包括 0x0009、0x000A、0x000B、0x000C、0x000D、0x0020、0x0085、0x00A0、0x1680、0x2000、0x2001、0x2002、0x2003、0x2004、0x2005、0x2006、0x2007、0x2008、0x2009、0x200A、0x2028、0x2029、0x202F、0x205F、0x3000。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果字符串为空，或仅包含空字符，返回 true，否则返回 false。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println(" \t\n\r".isBlank())
    }

运行结果：
    
    
    true

**func toLower()**
    
    
    public func toLower(): String

功能：将当前字符串中所有 Unicode 字符集范围内的大写字符转化为小写字符。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全小写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println("AbcDEF".toLower())
    }

运行结果：
    
    
    abcdef

**func toLower(CasingOption)**
    
    
    public func toLower(opt: CasingOption): String

功能：将当前字符串中所有 Unicode 字符集范围内的大写字符转化为小写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全小写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println("AbcDEF".toLower(CasingOption.Other))
    }

运行结果：
    
    
    abcdef

**func toTitle()**
    
    
    public func toTitle(): String

功能：将当前字符串中 Unicode 字符集范围内可以转换为标题大写字符的转换为标题大写字符。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的标题大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println("AbcDEF".toTitle())
    }

运行结果：
    
    
    ABCDEF

**func toTitle(CasingOption)**
    
    
    public func toTitle(opt: CasingOption): String

功能：将当前字符串中 Unicode 字符集范围内可以转换为标题大写字符的转换为标题大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的标题大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println("AbcDEF".toTitle(CasingOption.Other))
    }

运行结果：
    
    
    ABCDEF

**func toUpper()**
    
    
    public func toUpper(): String

功能：将当前字符串中所有 Unicode 字符集范围内的小写字符转化为大写字符。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println("AbcDEF".toUpper())
    }

运行结果：
    
    
    ABCDEF

**func toUpper(CasingOption)**
    
    
    public func toUpper(opt: CasingOption): String

功能：将当前字符串中所有 Unicode 字符集范围内的小写字符转化为大写字符。

参数：

  * opt: [CasingOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_enums#enum-casingoption) \- 传入的语言枚举。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的全大写字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中存在无效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        println("AbcDEF".toUpper(CasingOption.Other))
    }

运行结果：
    
    
    ABCDEF

**func trim()**
    
    
    public func trim(): String

功能：去除字符串开头结尾的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除首尾空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        let str = "  x  "
        println("\"${str.trim()}\"")
    }

运行结果：
    
    
    "x"

**func trimEnd()**
    
    
    public func trimEnd(): String

功能：去除字符串结尾的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除结尾空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        let str = "  x  "
        println("\"${str.trimEnd()}\"")
    }

运行结果：
    
    
    "  x"

**func trimLeft()(deprecated)**
    
    
    public func trimLeft(): String

功能：去除字符串开头的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/_s6ufV3uRT2293d846UgBg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111719Z&HW-CC-Expire=86400&HW-CC-Sign=96C191D4698A2AAEB8F669618A06898302FCE284701F1B35B0C88C05F36DE7CD)

未来版本即将废弃，使用 [trimStart](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces#func-trimend) 替代。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除开头空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        let str = "  x  "
        println("\"${str.trimLeft()}\"")
    }

运行结果：
    
    
    "x  "

**func trimRight()(deprecated)**
    
    
    public func trimRight(): String

功能：去除字符串结尾的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/--seF-n_RCyD1Qt-5qoS1A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111719Z&HW-CC-Expire=86400&HW-CC-Sign=CFA29C9E97DE8DD8FD56CD16BCD12E5C68C7C888CA95E1033B30CF5B52868405)

未来版本即将废弃，使用 [trimEnd](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unicode_package_interfaces#func-trimend) 替代。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除结尾空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        let str = "  x  "
        println("\"${str.trimRight()}\"")
    }

运行结果：
    
    
    "  x"

**func trimStart()**
    
    
    public func trimStart(): String

功能：去除字符串开头的空字符，空字符定义见 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的扩展函数 isWhiteSpace。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 去除开头空字符后的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串中不存在有效的 UTF-8 编码，抛出异常。



示例：
    
    
    import std.unicode.*
    
    main(): Unit {
        let str = "  x  "
        println("\"${str.trimStart()}\"")
    }

运行结果：
    
    
    "x  "
