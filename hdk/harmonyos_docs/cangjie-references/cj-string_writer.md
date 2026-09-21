---
name: cangjie-references/cj-string_writer
title: StringWriter 示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-string_writer
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.io / 示例教程 / StringWriter 示例
---

# StringWriter 示例

下面是 StringWriter 向流中写入数据示例。
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入字符串 */
        stringWriter.write("number")
    
        /* 写入字符串并自动转行 */
        stringWriter.writeln(" is:")
    
        /* 写入数字 */
        stringWriter.write(100.0f32)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    number is:
    100.000000
