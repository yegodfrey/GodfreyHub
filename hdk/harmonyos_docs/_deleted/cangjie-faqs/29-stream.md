---
name: cangjie-faqs/29-stream
title: 仓颉语言如何使用流式IO
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/29-stream
nodePath: FAQ / 标准库 / 仓颉语言如何使用流式IO
---

# 仓颉语言如何使用流式IO

仓颉语言通过std.io包提供流式IO模型，以InputStream和OutputStream为核心接口，支持缓冲流、字符串流等多种处理流。

#### ByteBuffer内存流

ByteBuffer是可同时读写的内存缓冲区：

调用示例：
    
    
    import std.io.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testByteBuffer(): Unit {
        let buf = ByteBuffer()
        buf.write("Hello Cangjie".toArray())
    
        buf.seek(SeekPosition.Begin(0))
        let all = readToEnd(buf)
        Hilog.info(0, "Cangjie Test", "content = ${String.fromUtf8(all)}")
    }

调用testByteBuffer，日志输出结果：
    
    
    content = Hello Cangjie

#### 缓冲流

BufferedInputStream和BufferedOutputStream用内部缓冲区减少IO频率：
    
    
    import std.io.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testBufferedStream(): Unit {
        let source = ByteBuffer()
        source.write("Hello World".toArray())
    
        let bis = BufferedInputStream(source)
        let arr = Array<Byte>(20, repeat: 0)
        let n = bis.read(arr)
        Hilog.info(0, "Cangjie Test", "read ${n} bytes: ${String.fromUtf8(arr[..n])}")
    }

调用testBufferedStream，日志输出结果：
    
    
    read 11 bytes: Hello World

#### 字符串流

StringReader和StringWriter在字节流上添加UTF-8字符串读写能力：
    
    
    import std.io.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testStringStream(): Unit {
        let buf = ByteBuffer()
        buf.write("Line1\nLine2\nLine3".toArray())
    
        let reader = StringReader(buf)
        let line1 = reader.readln() ?? ""
        Hilog.info(0, "Cangjie Test", "line1 = ${line1}")
    
        let rest = reader.readToEnd()
        Hilog.info(0, "Cangjie Test", "rest = ${rest}")
    }

调用testStringStream，日志输出结果：
    
    
    line1 = Line1
    rest = Line2
    Line3

#### 流工具函数

函数 | 说明  
---|---  
copy(from, to!) | 流到流数据拷贝  
readToEnd(from) | 读取全部剩余数据为字节数组  
readString(from) | 读取全部数据为UTF-8字符串  
  
更多流式IO的使用方法，详情请参见[std.io](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_overview)。
