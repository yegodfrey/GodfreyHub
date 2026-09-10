---
name: cangjie-faqs/21-string-operation
title: 仓颉语言如何进行字符串常用操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/21-string-operation
nodePath: FAQ / 标准库 / 仓颉语言如何进行字符串常用操作
---

# 仓颉语言如何进行字符串常用操作

仓颉语言的String类型是std.core中的struct类型，无需导入即可使用，提供丰富的字符串操作方法。

#### 字符串搜索
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    func searchString(): Unit {
        let s = "Hello World"
        let contains = s.contains("World")
        let starts = s.startsWith("Hello")
        let ends = s.endsWith("World")
        Hilog.info(0, "Cangjie Test", "contains=${contains}, starts=${starts}, ends=${ends}")
    }

调用searchString，日志输出结果：
    
    
    contains=true, starts=true, ends=true

#### 字符串分割与拼接
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    func splitJoinString(): Unit {
        let parts = "a,b,c".split(",")
        let parts2 = "a,,b,c".split(",", removeEmpty: true)
        let joined = String.join(parts, delimiter: "-")
        Hilog.info(0, "Cangjie Test", "parts=${parts.size}, joined=${joined}")
    }

调用splitJoinString，日志输出结果：
    
    
    parts=3, joined=a-b-c

#### 字符串替换与裁剪
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    func replaceTrimString(): Unit {
        let replaced = "aabbcc".replace("bb", "XX")
        let trimmed = "  hello  ".trimAscii()
        let removedPrefix = "HelloWorld".removePrefix("Hello")
        let removedSuffix = "HelloWorld".removeSuffix("World")
        Hilog.info(0, "Cangjie Test", "replaced=${replaced}, trimmed=${trimmed}")
    }

调用replaceTrimString，日志输出结果：
    
    
    replaced=aaXXcc, trimmed=hello

#### 大小写转换
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    func convertCase(): Unit {
        let lower = "Hello World".toAsciiLower()
        let upper = "Hello World".toAsciiUpper()
        let title = "hello world".toAsciiTitle()
        Hilog.info(0, "Cangjie Test", "lower=${lower}, upper=${upper}, title=${title}")
    }

调用convertCase，日志输出结果：
    
    
    lower=hello world, upper=HELLO WORLD, title=Hello World

#### 字符串与字节数组互转
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    func stringBytesConvert(): Unit {
        let bytes = "Hello".toArray()
        let str = String.fromUtf8(bytes)
        Hilog.info(0, "Cangjie Test", "bytes size=${bytes.size}, str=${str}")
    }

调用stringBytesConvert，日志输出结果：
    
    
    bytes size=5, str=Hello

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/BO86GNzhQxaqbUMD8Ih1cw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120359Z&HW-CC-Expire=86400&HW-CC-Sign=1B62A578CF314BF00D2CBF0D2713364926087498B1952C07C3D10231152A7F9B)

String.size返回的是UTF-8编码字节长度，不是字符数。若要获取字符数，使用String.toRuneArray().size。

更多字符串操作的使用方法，详情请参见[std.core](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)。
