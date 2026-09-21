---
name: cangjie-references/cj-multi_output_stream
title: MultiOutputStream 示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-multi_output_stream
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.io / 示例教程 / MultiOutputStream 示例
---

# MultiOutputStream 示例

下面是 MultiOutputStream 向绑定的所有流中写入数据示例。
    
    
    import std.io.*
    
    main(): Unit {
        const size = 2
    
        /* 将两个 ByteBuffer 绑定到 MultiOutputStream */
        let streamArr = Array<OutputStream>(size, {_ => ByteBuffer()})
        let multiOutputStream = MultiOutputStream(streamArr)
    
        /* 往 MultiOutputStream 写入数据，会同时写入绑定的两个 ByteBuffer */
        multiOutputStream.write("test".toArray())
    
        /* 读取 ByteBuffer 中数据，验证结果 */
        for (i in 0..size) {
            match (streamArr[i]) {
                case v: ByteBuffer => println(String.fromUtf8(readToEnd(v)))
                case _ => throw Exception()
            }
        }
    }

运行结果：
    
    
    test
    test
