---
name: cangjie-faqs/26-stringbuilder
title: 仓颉语言如何高效拼接字符串
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/26-stringbuilder
nodePath: FAQ / 标准库 / 仓颉语言如何高效拼接字符串
---

# 仓颉语言如何高效拼接字符串

仓颉语言的String是不可变类型，使用+运算符拼接字符串时会产生中间对象，在大量拼接场景下性能较差。推荐使用StringBuilder进行高效拼接。

#### 使用StringBuilder

大量拼接时使用StringBuilder避免产生大量中间对象：

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testStringBuilder(): Unit {
        let sb = StringBuilder()
        sb.append("Hello")
        sb.append(", ")
        sb.append("World!")
        let result = sb.toString()
        Hilog.info(0, "Cangjie Test", "result = ${result}")
    }

调用testStringBuilder，日志输出结果：
    
    
    result = Hello, World!

#### 使用String.join

拼接字符串数组时使用String.join：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testStringJoin(): Unit {
        let parts = ["I", "like", "Cangjie"]
        let s = String.join(parts, delimiter: " ")
        Hilog.info(0, "Cangjie Test", "joined = ${s}")
    }

调用testStringJoin，日志输出结果：
    
    
    joined = I like Cangjie

#### 性能对比
    
    
    import kit.PerformanceAnalysisKit.Hilog
    import std.time.*
    
    public func testStringBuilderPerformance(): Unit {
        let count = 1000
    
        let start1 = MonoTime.now()
        let sb = StringBuilder()
        for (i in 0..count) {
            sb.append("${i}")
        }
        let s1 = sb.toString()
        let end1 = MonoTime.now()
        Hilog.info(0, "Cangjie Test", "StringBuilder: ${(end1 - start1).toMilliseconds()}ms, length=${s1.size}")
    
        let start2 = MonoTime.now()
        var parts = [""]
        for (i in 0..count) {
            parts = parts.concat(["${i}"])
        }
        let s2 = String.join(parts, delimiter: "")
        let end2 = MonoTime.now()
        Hilog.info(0, "Cangjie Test", "String.join: ${(end2 - start2).toMilliseconds()}ms, length=${s2.size}")
    }

调用testStringBuilderPerformance，日志可能输出结果：
    
    
    StringBuilder: 1ms, length=2890
    String.join: 5ms, length=2890

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/1xcjSbxFR7mu0TSOiR8Mjg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120402Z&HW-CC-Expire=86400&HW-CC-Sign=A229A725131899E38F8FB7A4F2F896ED31D566B816F0FFA58490338C305AF3FE)

  1. StringBuilder的append方法支持String、数值类型等多种参数。
  2. String.join适合已有字符串数组的场景，StringBuilder适合逐步拼接的场景。



更多字符串操作的使用方法，详情请参见[std.core](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-stringbuilder)。
