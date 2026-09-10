---
name: cangjie-references/cj-regex_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.regex / 类
---

# 类

#### class Matcher (deprecated)
    
    
    public class Matcher {
        public init(regex: Regex, input: String)
    }

功能：正则匹配器，用于扫描输入序列并进行匹配。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/UMmxlsKOQNCGT4KC-4vhiA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=F2A0637BB149CEFC52866EC352138BDBA5A327ABD68CB0A35BE75FB99F5C5C18)

未来版本即将废弃，使用 Regex 替代。

#### [h2]init(Regex, String)
    
    
    public init(regex: Regex, input: String)

功能：使用传入的正则表达式和输入序列创建 Matcher 实例。

参数：

  * regex: [Regex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_classes#class-regex) \- 正则表达式。
  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 输入序列。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("hello")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    }

#### [h2]func allCount()
    
    
    public func allCount(): Int64

功能：获取正则表达式的匹配结果总数。

默认是从头到尾匹配的结果，使用了 setRegion 后只会在设置的范围内查找。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 匹配结果总数。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式(找到后面紧跟o的l)
        let regex = Regex("l(?=o)")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 获取匹配结果总数
        let count = matcher.allCount()
        println("匹配结果总数: ${count}")
    }

运行结果：
    
    
    匹配结果总数: 1

#### [h2]func find()
    
    
    public func find(): Option<MatchData>

功能：自当前字符串偏移位置起，查找第一个匹配到的子序列。

find 调用一次，当前偏移位置为最新一次匹配到的子序列后第一个字符位置，下次调用时，find 从当前位置开始匹配。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 匹配到结果返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>，如果匹配不到，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>.None。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式(找到后面紧跟o的l)
        let regex = Regex("l(?=o)")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 查找第一个匹配到的子序列
        let result = matcher.find()
        match (result) {
            case Some(matchData) => println("找到匹配")
            case None => println("未找到匹配")
        }
    }

运行结果：
    
    
    找到匹配

#### [h2]func find(Int64)
    
    
    public func find(index: Int64): Option<MatchData>

功能：重置该匹配器索引位置，从 index 对应的位置处开始对输入序列进行匹配，返回匹配到的子序列。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 匹配开始位置。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 匹配到结果返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>，如果匹配不到，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>.None。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 index 小于 0，或 index 大于等于输入序列的 size 时，抛出异常。
  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式(找到后面紧跟o的l)
        let regex = Regex("l(?=o)")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 从指定位置开始查找匹配到的子序列
        let result = matcher.find(5)
        match (result) {
            case Some(matchData) => println("找到匹配")
            case None => println("未找到匹配")
        }
    }

运行结果：
    
    
    未找到匹配

#### [h2]func findAll()
    
    
    public func findAll(): Option<Array<MatchData>>

功能：对整个输入序列进行匹配，查找所有匹配到的子序列。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>> \- 如果匹配到结果，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>>；如果匹配不到，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>>.None。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式(找到后面紧跟o的l)
        let regex = Regex("l(?=o)")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 查找所有匹配到的子序列
        let result = matcher.findAll()
        match (result) {
            case Some(matchDataArray) => println("找到 ${matchDataArray.size} 个匹配")
            case None => println("未找到匹配")
        }
    }

运行结果：
    
    
    找到 1 个匹配

#### [h2]func fullMatch()
    
    
    public func fullMatch(): Option<MatchData>

功能：对整个输入序列进行匹配。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 如果全部匹配成功，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>；否则返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>.None。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("hello world")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 对整个输入序列进行匹配
        let result = matcher.fullMatch()
        match (result) {
            case Some(matchData) => println("完全匹配成功")
            case None => println("完全匹配失败")
        }
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher01 = Matcher(regex, "hello worldd")
    
        // 对整个输入序列进行匹配
        let result01 = matcher01.fullMatch()
        match (result01) {
            case Some(matchData) => println("完全匹配成功")
            case None => println("完全匹配失败")
        }
    }

运行结果：
    
    
    完全匹配成功
    完全匹配失败

#### [h2]func getString()
    
    
    public func getString(): String

功能：获取匹配序列。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 匹配序列。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("hello")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 获取匹配序列
        let str = matcher.getString()
        println("匹配序列: ${str}")
    }

运行结果：
    
    
    匹配序列: hello world

#### [h2]func matchStart()
    
    
    public func matchStart(): Option<MatchData>

功能：对输入序列的头部进行匹配。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 如果匹配成功，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>；否则返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>.None。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("hello")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 对输入序列的头部进行匹配
        let result = matcher.matchStart()
        match (result) {
            case Some(matchData) => println("头部匹配成功")
            case None => println("头部匹配失败")
        }
    }

运行结果：
    
    
    头部匹配成功

#### [h2]func region()
    
    
    public func region(): Position

功能：返回匹配器的区域设置。

返回值：

  * [Position](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-position) \- 匹配器的区域设置。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("hello")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 返回匹配器的区域设置
        let position = matcher.region()
    }

#### [h2]func replace(String)
    
    
    public func replace(replacement: String): String

功能：自当前字符串偏移位置起，匹配到的第一个子序列替换为目标字符串，并将当前索引位置设置到匹配子序列的下一个位置。

参数：

  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后字符串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("world")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 将匹配到的第一个子序列替换为目标字符串
        let result = matcher.replace("there")
        println("替换后结果: ${result}")
    }

运行结果：
    
    
    替换后结果: hello there

#### [h2]func replace(String, Int64)
    
    
    public func replace(replacement: String, index: Int64): String

功能：从输入序列的 index 位置起匹配正则，将匹配到的第一个子序列替换为目标字符串。

参数：

  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。
  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 匹配开始位置。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后字符串。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 index 小于 0，或 index 大于等于输入序列的 size 时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式(找到后面紧跟o的l)
        let regex = Regex("l(?=o)")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 从指定位置开始匹配正则，将匹配到的第一个子序列替换为目标字符串
        let result = matcher.replace("x", 3)
        println("替换后结果: ${result}")
    }

运行结果：
    
    
    替换后结果: helxo world

#### [h2]func replaceAll(String)
    
    
    public func replaceAll(replacement: String): String

功能：将输入序列中所有与正则匹配的子序列替换为给定的目标字符串。

参数：

  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后的字符串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式(找到后面紧跟o的l)
        let regex = Regex("l(?=o)")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 将输入序列中所有与正则匹配的子序列替换为给定的目标字符串
        let result = matcher.replaceAll("x")
        println("替换后结果: ${result}")
    }

运行结果：
    
    
    替换后结果: helxo world

#### [h2]func replaceAll(String, Int64)
    
    
    public func replaceAll(replacement: String, limit: Int64): String

功能：将输入序列中与正则匹配的前 limit 个子序列替换为给定的替换字符串。

参数：

  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。
  * limit: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 替换次数。如果 limit 等于 0，返回原来的序列；如果 limit 为负数，将尽可能多次的替换。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后字符串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("l")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 将输入序列中与正则匹配的前 limit 个子序列替换为给定的替换字符串
        let result = matcher.replaceAll("x", 2)
        println("替换后结果: ${result}")
    }

运行结果：
    
    
    替换后结果: hexxo world

#### [h2]func resetRegion()
    
    
    public func resetRegion(): Matcher

功能：重置匹配器开始位置和结束位置。

返回值：

  * Matcher \- 匹配器自身。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("world")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world, cangjie, hello world")
    
        // 将匹配到的第一个子序列替换为目标字符串
        let result = matcher.replace("there")
        println("替换后结果: ${result}")
    
        // 重置匹配器，注释此行，结果改变
        matcher.resetRegion()
        let result01 = matcher.replace("there")
        println("替换后结果: ${result01}")
    }

运行结果：
    
    
    替换后结果: hello there, cangjie, hello world
    替换后结果: hello there, cangjie, hello world

#### [h2]func resetString(String)
    
    
    public func resetString(input: String): Matcher

功能：重设匹配序列，并重置匹配器。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 新的匹配序列。



返回值：

  * Matcher \- 匹配器自身。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("world")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        let result = matcher.replace("there")
        println("替换后结果: ${result}")
    
        // 重置匹配器
        let newMatcher = matcher.resetString("world! hello!")
        let result01 = newMatcher.replace("there")
        println("替换后结果: ${result01}")
    }

运行结果：
    
    
    替换后结果: hello there
    替换后结果: there! hello!

#### [h2]func setRegion(Int64, Int64)
    
    
    public func setRegion(beginIndex: Int64, endIndex: Int64): Matcher

功能：设置匹配器可搜索区域的位置信息，具体位置由指定的 begin 和 end 决定。

参数：

  * beginIndex: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 区域开始位置。
  * endIndex: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 区域结束位置。



返回值：

  * Matcher \- 匹配器自身。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 beginIndex 小于 0，或 beginIndex 大于输入序列的 size 时，抛出异常；当 endIndex 小于 0，或 endIndex 大于输入序列的 size 时，抛出异常；当 beginIndex 大于 endIndex 时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("l")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 设置匹配器可搜索区域的位置信息
        let newMatcher = matcher.setRegion(8, 10)
        // 仅在可搜索区域内进行匹配
        let result = newMatcher.replace("!!")
        println("替换后结果: ${result}")
    }

运行结果：
    
    
    替换后结果: hello wor!!d

#### [h2]func split()
    
    
    public func split(): Array<String>

功能：将给定的输入序列根据正则尽可能的分割成多个子序列。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 子序列数组。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("l")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 将给定的输入序列根据正则尽可能的分割成多个子序列
        let result = matcher.split()
        println("分割后的子序列数量: ${result.size}")
        for (i in 0..result.size) {
            println("子序列[${i}]: ${result[i]}")
        }
    }

运行结果：
    
    
    分割后的子序列数量: 4
    子序列[0]: he
    子序列[1]:
    子序列[2]: o wor
    子序列[3]: d

#### [h2]func split(Int64)
    
    
    public func split(limit: Int64): Array<String>

功能：将给定的输入序列根据正则尽可能的分割成多个子序列 (最多分割成 limit 个子串)。

参数：

  * limit: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最多分割的子串个数。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 如果 limit>0，返回最多 limit 个子串；如果 limit<=0，返回最大可分割数个子串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建正则表达式
        let regex = Regex("l")
    
        // 使用正则表达式和输入序列创建Matcher实例
        let matcher = Matcher(regex, "hello world")
    
        // 将给定的输入序列根据正则尽可能的分割成多个子序列 (最多分割成 limit 个子串)
        let result = matcher.split(3)
        println("分割后的子序列数量: ${result.size}")
        for (i in 0..result.size) {
            println("子序列[${i}]: ${result[i]}")
        }
    }

运行结果：
    
    
    分割后的子序列数量: 3
    子序列[0]: he
    子序列[1]:
    子序列[2]: o world

#### class Regex
    
    
    public class Regex {
        public init(pattern: String, flags: Array<RegexFlag>)
        public init(pattern: String, option: RegexOption)
    }

功能：用来指定编译类型并创建正则表达式实例。

正则匹配规则详见 [regex 规则集](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_overview#regex-规则集)。

#### [h2]init(String, Array<RegexFlag>)
    
    
    public init(pattern: String, flags: Array<RegexFlag>)

功能：创建 [Regex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_classes#class-regex) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/TmDe-n0nSTC73TBLt3S7wA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=054532229897AD4DF0BC5A0E7AE8EDB95E5E06A43CFDED2BDCC09807FF5D0A8A)

处理非 ASCII 字符时必须使用 [Unicode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_enums#unicode) 匹配模式。

参数：

  * pattern: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 正则表达式。
  * flags: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[RegexFlag](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_enums#enum-regexflag)> \- 正则匹配的模式列表。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当初始化失败时，抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 处理非 ASCII 字符并且没有指定 [Unicode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_enums#unicode) 匹配模式时，可能抛出该异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 使用指定的模式和标志创建一个 Regex 实例
        let regex = Regex("hello", [IgnoreCase])
    
        // 使用正则表达式进行匹配
        let result = regex.find("Hello World")
        match (result) {
            case Some(matchData) => println("匹配成功: ${matchData.matchString()}")
            case None => println("未找到匹配")
        }
    
        // 匹配非 ASCII 字符必须加 Unicode 标志，否则可能会报 UTF-8 错误
        let regex2 = Regex(#"[仓 - 颉]+"#, [Unicode])
        match (regex2.find("你好！仓颉")) {
            case Some(matchData) => println("匹配成功：${matchData.matchString()}")
            case None => println("未匹配")
        }
    }

运行结果：
    
    
    匹配成功: Hello
    匹配成功：仓颉

#### [h2]init(String, RegexOption) (deprecated)
    
    
    public init(pattern: String, option: RegexOption)

功能：使用指定的模式创建一个 [Regex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_classes#class-regex) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/oCcaA18ZSkies3gRrrSbHA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=027E76901F7CB56C9A39880731A6C1D03A1801CF565B2141550C4CA512334593)

未来版本即将废弃，使用 init(String, Array<RegexFlag>) 替代。

参数：

  * pattern: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 正则表达式。
  * option: RegexOption \- 正则匹配的模式。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当初始化失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 RegexOption 实例
        let option = RegexOption().ignoreCase()
    
        // 使用指定的模式和选项创建一个 Regex 实例
        let regex = Regex("hello", option)
    
        // 使用正则表达式进行匹配
        let result = regex.find("Hello World")
        match (result) {
            case Some(matchData) => println("匹配成功: ${matchData.matchString()}")
            case None => println("未找到匹配")
        }
    }

运行结果：
    
    
    匹配成功: Hello

#### [h2]func find(String, Bool)
    
    
    public func find(input: String, group!: Bool = false): Option<MatchData>

功能：查找第一个匹配到的子序列。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * group!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 指定是否开启捕获组的提取。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 匹配到结果返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>，如果匹配不到，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)>.None。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r1 = Regex("ab")
        let r2 = Regex("ab", IgnoreCase)
        match (r1.find("aB")) {
            case Some(r) => println(r.matchString())
            case None => println("None")
        }
        match (r2.find("aB")) {
            case Some(r) => println(r.matchString())
            case None => println("None")
        }
    }

运行结果：
    
    
    None
    aB

#### [h2]func findAll(String, Bool)
    
    
    public func findAll(input: String, group!: Bool = false): Array<MatchData>

功能：对整个输入序列进行匹配，查找所有匹配到的子序列。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * group!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 指定是否开启捕获组的提取。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 存储匹配结果的数组，如果未匹配到，数组为空。



异常：

  * [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) \- 当存在匹配但提取匹配信息失败时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex("ab")
        let arr = r.findAll("ababaaab")
        let iter = arr.iterator()
        println(arr.size)
        while (true) {
            match (iter.next()) {
                case Some(i) => println(i.matchString())
                case None => break
            }
        }
    }

运行结果：
    
    
    3
    ab
    ab
    ab

#### [h2]func getNamedGroups()
    
    
    public func getNamedGroups(): Map<String, Int64>

功能：获取命名捕获组的名称与索引映射。

返回值：

  * [Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapk-v)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string), [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)> \- 命名捕获组的名称与索引映射。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        let arr = r.findAll("2024-10-24&2025-01-01", group: true)
        for (md in arr) {
            println("found: `${md.matchString()}` and groupCount: ${md.groupCount()}")
            for ((name, index) in r.getNamedGroups()) {
                println("${name} => ${index}")
            }
        }
    }

运行结果：
    
    
    found: `2024-10-24` and groupCount: 3
    day => 3
    month => 2
    year => 1
    found: `2025-01-01` and groupCount: 3
    day => 3
    month => 2
    year => 1

#### [h2]func lazyFindAll(String, Bool)
    
    
    public func lazyFindAll(input: String, group!: Bool = false): Iterator<MatchData>

功能：对整个输入序列进行匹配，获取匹配的迭代器。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * group!: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 指定是否开启捕获组的提取。



返回值：

  * [Iterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort)<[MatchData](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_structs#struct-matchdata)> \- 匹配的迭代器。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        let iter = r.lazyFindAll("2024-10-24&2025-01-01", group: true)
        while (true) {
            match (iter.next()) {
                case Some(md) =>
                    println("found: `${md.matchString()}` and groupCount: ${md.groupCount()}")
                    for ((name, index) in r.getNamedGroups()) {
                        println("${name} => ${index}")
                    }
                case None => break
            }
        }
    }

运行结果：
    
    
    found: `2024-10-24` and groupCount: 3
    day => 3
    month => 2
    year => 1
    found: `2025-01-01` and groupCount: 3
    day => 3
    month => 2
    year => 1

#### [h2]func matcher(String) (deprecated)
    
    
    public func matcher(input: String): Matcher

功能：创建匹配器。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/EvCjvlQZQVS8He3T6sZ_yQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=654522A675B90887058B7B31580E96F2B4E03116892528A0B9AA0819864DA985)

未来版本即将废弃。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 要匹配的字符串。



返回值：

  * Matcher \- 创建的匹配器。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 Regex 实例
        let regex = Regex("hello")
    
        // 创建匹配器
        let matcher = regex.matcher("hello world")
    
        // 使用匹配器查找匹配项
        let result = matcher.find()
        match (result) {
            case Some(matchData) => println("匹配成功")
            case None => println("未找到匹配")
        }
    }

运行结果：
    
    
    匹配成功

#### [h2]func matches(String)
    
    
    public func matches(input: String): Bool

功能：判断入参 input 与正则表达式是否存在匹配。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 要匹配的字符串。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果存在匹配，返回 true，否则返回 false。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        println(r.matches("2024-10-24&2025-01-01"))
    }

运行结果：
    
    
    true

#### [h2]func replace(String, String)
    
    
    public func replace(input: String, replacement: String): String

功能：自当前字符串起始位置开始，匹配到的第一个子序列替换为目标字符串。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后字符串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        println(r.replace("2024-10-24&2025-01-01", "time"))
    }

运行结果：
    
    
    time&2025-01-01

#### [h2]func replace(String, String, Int64)
    
    
    public func replace(input: String, replacement: String, index: Int64): String

功能：从输入序列的 index 位置起匹配正则，将匹配到的第一个子序列替换为目标字符串。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。
  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 匹配开始位置。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后字符串。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 index 小于 0，或 index 大于等于输入序列的 size 时，抛出异常。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        println(r.replace("2024-10-24&2025-01-01", "time", 10))
    }

运行结果：
    
    
    2024-10-24&time

#### [h2]func replaceAll(String, String)
    
    
    public func replaceAll(input: String, replacement: String): String

功能：将输入序列中所有与正则匹配的子序列替换为给定的目标字符串。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后的字符串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        println(r.replaceAll("2024-10-24&2025-01-01", "time"))
    }

运行结果：
    
    
    time&time

#### [h2]func replaceAll(String, String, Int64)
    
    
    public func replaceAll(input: String, replacement: String, limit: Int64): String

功能：将输入序列中与正则匹配的前 limit 个子序列替换为给定的替换字符串。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * replacement: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定替换字符串。
  * limit: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 替换次数。如果 limit 等于 0，返回原来的序列；如果 limit 为负数，将尽可能多次的替换。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 替换后字符串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex(#"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})"#)
        println(r.replaceAll("2019-4-5&2024-10-24&2025-01-01", "time", 10))
    }

运行结果：
    
    
    2019-4-5&time&time

#### [h2]func split(String)
    
    
    public func split(input: String): Array<String>

功能：将给定的输入序列根据正则尽可能的分割成多个子序列。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 子序列数组。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        let r = Regex("&")
        for (subStr in r.split("2019-4-5&2024-10-24&2025-01-01")) {
            println(subStr)
        }
    }

运行结果：
    
    
    2019-4-5
    2024-10-24
    2025-01-01

#### [h2]func split(String, Int64)
    
    
    public func split(input: String, limit: Int64): Array<String>

功能：将给定的输入序列根据正则尽可能的分割成多个子序列 (最多分割成 limit 个子串)。

参数：

  * input: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待匹配序列。
  * limit: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最多分割的子串个数。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 如果 limit>0，返回最多 limit 个子串；如果 limit<=0，返回最大可分割数个子串。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 Regex 实例
        let regex = Regex("&")
    
        // 将给定的输入序列根据正则尽可能的分割成多个子序列 (最多分割成 limit 个子串)
        let result = regex.split("2019-4-5&2024-10-24&2025-01-01", 2)
    
        for (subStr in result) {
            println(subStr)
        }
    }

运行结果：
    
    
    2019-4-5
    2024-10-24&2025-01-01

#### [h2]func string()
    
    
    public func string(): String

功能：获取正则的输入序列。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 输入序列。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 Regex 实例
        let regex = Regex("hello")
    
        // 获取正则的输入序列
        let pattern = regex.string()
    
        println("正则表达式: ${pattern}")
    }

运行结果：
    
    
    正则表达式: hello

#### class RegexOption (deprecated)
    
    
    public class RegexOption <: ToString {
        public init()
    }

功能：用于指定正则匹配的模式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/9-dhoOGSQYav-irduf-ZtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=C7FF3599233D9BE110E0AC15137B82E7CC38990F9FCEB012B920F43469574507)

未来版本即将废弃，使用 [RegexFlag](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_enums#enum-regexflag) 替代。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]init()
    
    
    public init()

功能：创建一个 RegexOption 实例， 匹配模式为普通模式（NORMAL）。

示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 RegexOption 实例，匹配模式为普通模式（NORMAL）
        let regexOption = RegexOption()
    }

#### [h2]func ignoreCase()
    
    
    public func ignoreCase(): RegexOption

功能：修改 RegexOption，修改匹配模式为忽略大小写（IGNORECASE）。

返回值：

  * RegexOption \- 修改后的 RegexOption。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 RegexOption 实例
        let regexOption = RegexOption()
    
        // 修改匹配模式为忽略大小写（IGNORECASE）
        let newRegexOption = regexOption.ignoreCase()
    }

#### [h2]func multiLine()
    
    
    public func multiLine(): RegexOption

功能：修改 RegexOption，修改匹配模式为多行文本模式（MULTILINE）。

返回值：

  * RegexOption \- 修改后的 RegexOption。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 RegexOption 实例
        let regexOption = RegexOption()
    
        // 修改匹配模式为多行文本模式（MULTILINE）
        let newRegexOption = regexOption.multiLine()
    }

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取 RegexOption 当前表示的正则匹配模式。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 正则匹配模式。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 创建一个 RegexOption 实例
        let regexOption = RegexOption()
    
        // 获取 RegexOption 当前表示的正则匹配模式
        let mode = regexOption.toString()
    
        println("当前匹配模式: ${mode}")
    }

运行结果：
    
    
    当前匹配模式: NORMAL
