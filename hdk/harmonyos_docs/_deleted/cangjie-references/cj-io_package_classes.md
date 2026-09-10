---
name: cangjie-references/cj-io_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.io / 类
---

# 类

#### class BufferedInputStream<T> where T <: InputStream
    
    
    public class BufferedInputStream<T> <: InputStream where T <: InputStream {
        public init(input: T)
        public init(input: T, capacity: Int64)
        public init(input: T, buffer: Array<Byte>)
    }

功能：提供带缓冲区的输入流。

可将其他 [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream) 类型的输入流（如 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer)）绑定到 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 实例，从该实例读取数据时，先把数据从被绑定的流读入缓冲区暂存，再从缓冲区读取用户需要的数据。

父类型：

  * [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)



#### [h2]init(T)
    
    
    public init(input: T)

功能：创建 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 实例，缓冲区容量取默认值 4096。

参数：

  * input: T - 绑定指定输入流。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedInputStream
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let inputStream = ByteBuffer(inputData)
        /* 绑定指定输入流 */
        let bufferedStream = BufferedInputStream(inputStream)
    
        /* 从输入流中读取数据 */
        let data = Array<Byte>(inputData.size, repeat: 0)
        bufferedStream.read(data)
        println(String.fromUtf8(data))
    }

运行结果：
    
    
    Hello World

#### [h2]init(T, Array<Byte>)
    
    
    public init(input: T, buffer: Array<Byte>)

功能：创建 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 实例。

其内部使用的缓存区由入参决定，在注重性能的场景下，通过复用传入的 buffer，可以减少内存分配次数，提高性能。

参数：

  * input: T - 绑定一个输入流。
  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 使用的内部缓存区。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 大小等于 0 时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedInputStream
    
    main(): Unit {
        let inputStream = ByteBuffer()
    
        /* 使用合法的内部缓冲区创建 BufferedInputStream 实例，不会抛出异常 */
        try {
            let buffer = Array<Byte>(1024, repeat: 0)
            let bufferedStream = BufferedInputStream(inputStream, buffer)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    
        /* 内部缓冲区大小被定义为 0 的情况 */
        try {
            let invalidBuffer = Array<Byte>()
            let bufferedStream = BufferedInputStream(inputStream, invalidBuffer)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    Error: The buffer cannot be empty.

#### [h2]init(T, Int64)
    
    
    public init(input: T, capacity: Int64)

功能：创建 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 实例。

参数：

  * input: T - 绑定指定输入流。
  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 内部缓冲区容量。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 capacity 小于等于 0 时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedInputStream
    
    main(): Unit {
        let data = "Hello Capacity".toArray()
        let input = ByteBuffer(data)
    
        /* 使用指定 capacity 创建 BufferedInputStream */
        let buffered = BufferedInputStream(input, 8)
    
        /* 从 buffered 中读取全部数据并输出 */
        let out = Array<Byte>(data.size, repeat: 0)
        buffered.read(out)
        println(String.fromUtf8(out))
    }

运行结果：
    
    
    Hello Capacity

#### [h2]func read(Array<Byte>)
    
    
    public func read(buffer: Array<Byte>): Int64

功能：从绑定的输入流读出数据到 buffer 中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 存放读取的数据的缓冲区。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 读取数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 为空时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedInputStream
    
    main(): Unit {
        let inputStream = ByteBuffer()
    
        /* 使用合法的内部缓冲区容量创建 BufferedInputStream 实例，不会抛出异常 */
        try {
            let capacity = 2048
            let bufferedStream = BufferedInputStream(inputStream, capacity)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    
        /* 当内部缓冲区被设置成 0 时，抛出异常 */
        try {
            let zeroCapacity = 0
            let bufferedStream = BufferedInputStream(inputStream, zeroCapacity)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    
        /* 当内部缓冲区被设置成负数时，抛出异常 */
        try {
            let negativeCapacity = -1024
            let bufferedStream = BufferedInputStream(inputStream, negativeCapacity)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    Error: Invalid capacity size: capacity = 0.
    Error: Invalid capacity size: capacity = -1024.

#### [h2]func readByte()
    
    
    public func readByte(): ?Byte

功能：从输入流中读取一个字节。

返回值：

  * ?[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) \- 读取到的数据。读取失败时会返回 None。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedInputStream
    
    main(): Unit {
        /* 创建输入流并写入数据 */
        let inputStream = ByteBuffer()
        let sourceData = "abc".toArray()
        inputStream.write(sourceData)
        let bufferedStream = BufferedInputStream(inputStream)
    
        /* 依次读取所有字节 */
        while (true) {
            let byte = bufferedStream.readByte()
            if (byte == None) {
                break
            }
            println(String.fromUtf8(byte.getOrThrow()))
        }
    }

运行结果：
    
    
    a
    b
    c

#### [h2]func reset(T)
    
    
    public func reset(input: T): Unit

功能：绑定新的输入流，重置状态，但不重置 capacity。

参数：

  * input: T - 待绑定的输入流。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedInputStream
    import std.io.IOException
    
    main(): Unit {
        /* 创建第一个输入流并写入数据 */
        let inputStream1 = ByteBuffer()
        let sourceData1 = "First message: Hello".toArray()
        inputStream1.write(sourceData1)
    
        /* 创建第二个输入流并写入数据 */
        let inputStream2 = ByteBuffer()
        let sourceData2 = "Second message: World".toArray()
        inputStream2.write(sourceData2)
    
        /* 使用 BufferedInputStream 包装第一个输入流 */
        let bufferedStream = BufferedInputStream(inputStream1)
    
        /* 读取第一个输入流的部分数据 */
        var result1 = ""
        for (_ in 0..sourceData1.size) {
            let byte = bufferedStream.readByte()
            if (byte == None) {
                break
            }
            result1 += String.fromUtf8(byte.getOrThrow())
        }
        println(result1)
    
        /* 重置输入流为第二个输入流 */
        bufferedStream.reset(inputStream2)
        var result2 = ""
        for (_ in 0..sourceData2.size) {
            let byte = bufferedStream.readByte()
            if (byte == None) {
                break
            }
            result2 += String.fromUtf8(byte.getOrThrow())
        }
        println(result2)
    }

运行结果：
    
    
    First message: Hello
    Second message: World

#### [h2]extend<T> BufferedInputStream<T> <: Resource where T <: Resource
    
    
    extend<T> BufferedInputStream<T> <: Resource where T <: Resource

功能：为 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 实现 [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource) 接口，该类型对象可在 try-with-resource 语法上下文中实现自动资源释放。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



**func close()**
    
    
    public func close(): Unit

功能：关闭当前流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/V_pmEH3_QSGmoZZaj819bg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=2FCD04DCC05396A5D504766545222547859595EFA27A13F9661068D7126B25CB)

调用此方法后不可再调用 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 的其他接口，否则会造成非预期现象。

示例：
    
    
    import std.io.BufferedInputStream
    import std.io.InputStream
    import std.io.ByteBuffer
    
    /**
     * 自定义实现 InputStream 和 Resource 接口的类
     */
    public class TestStream <: InputStream & Resource {
        private var closed: Bool = false
    
        public func read(buffer: Array<Byte>): Int64 {
            if (this.closed) {
                return 0
            }
            let data = "Hello World".toArray()
            let inputStream = ByteBuffer(data)
            return inputStream.read(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Stream is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedInputStream(testStream)
    
        // 检查流是否关闭
        println("Is closed before close(): ${bufferedStream.isClosed()}")
    
        // 关闭流
        bufferedStream.close()
    
        // 检查流是否关闭
        println("Is closed after close(): ${bufferedStream.isClosed()}")
    }

运行结果：
    
    
    Is closed before close(): false
    Stream is closed
    Is closed after close(): true

**func isClosed()**
    
    
    public func isClosed(): Bool

功能：判断当前流是否关闭。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果当前流已经被关闭，返回 true，否则返回 false。



示例：
    
    
    import std.io.BufferedInputStream
    import std.io.InputStream
    import std.io.ByteBuffer
    
    /**
     * 自定义实现 InputStream 和 Resource 接口的类 A
     */
    public class A <: InputStream & Resource {
        private var closed: Bool = false
    
        public func read(buffer: Array<Byte>): Int64 {
            let inputData = "Hello World".toArray()
            let inputStream = ByteBuffer(inputData)
            let num = inputStream.read(buffer)
            return num
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Resource is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let bufferedStream = BufferedInputStream(A())
    
        /* 使用 try-with-resource 语法获取资源 */
        try (r = bufferedStream) {
            println("Get the resource")
            let data = Array<Byte>(11, repeat: 0)
            r.read(data)
            println(r.isClosed())
            println(String.fromUtf8(data))
        }
    
        /* 自动调用 close() 函数释放资源 */
        println(bufferedStream.isClosed())
    }

运行结果：
    
    
    Get the resource
    false
    Hello World
    Resource is closed
    true

#### [h2]extend<T> BufferedInputStream<T> <: Seekable where T <: Seekable
    
    
    extend<T> BufferedInputStream<T> <: Seekable where T <: Seekable

功能：为 [BufferedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedinputstreamt-where-t--inputstream) 实现 [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable) 接口，支持查询数据长度，移动光标等操作。

父类型：

  * [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable)



**prop length**
    
    
    public prop length: Int64

功能：返回当前流中的总数据量（以字节为单位）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.BufferedInputStream
    import std.io.InputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    
    /**
     * 自定义实现 InputStream 和 Seekable 接口的类
     */
    public class TestStream <: InputStream & Seekable {
        private var inputStream: ByteBuffer = ByteBuffer("Hello World".toArray())
    
        public func read(buffer: Array<Byte>): Int64 {
            return this.inputStream.read(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.inputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedInputStream(testStream)
    
        // 输出流的总长度
        println("Length: ${bufferedStream.length}")
    }

运行结果：
    
    
    Length: 11

**prop position**
    
    
    public prop position: Int64

功能：返回当前光标位置。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.BufferedInputStream
    import std.io.InputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    
    /**
     * 自定义实现 InputStream 和 Seekable 接口的类
     */
    public class TestStream <: InputStream & Seekable {
        private var inputStream: ByteBuffer = ByteBuffer("Hello World".toArray())
    
        public func read(buffer: Array<Byte>): Int64 {
            return this.inputStream.read(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.inputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedInputStream(testStream)
    
        // 读取一些数据
        let buffer = Array<Byte>(5, repeat: 0)
        bufferedStream.read(buffer)
    
        // 输出当前光标位置
        println("Position: ${bufferedStream.position}")
    }

运行结果：
    
    
    Position: 11

**prop remainLength**
    
    
    public prop remainLength: Int64

功能：返回当前流中未读的数据量（以字节为单位，不包含缓冲区中的数据）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.BufferedInputStream
    import std.io.InputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    
    /**
     * 自定义实现 InputStream 和 Seekable 接口的类
     */
    public class TestStream <: InputStream & Seekable {
        private var inputStream: ByteBuffer = ByteBuffer("Hello World".toArray())
    
        public func read(buffer: Array<Byte>): Int64 {
            return this.inputStream.read(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.inputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedInputStream(testStream)
    
        // 输出初始未读数据量
        println("Initial Remain Length: ${bufferedStream.remainLength}")
    
        // 读取一些数据
        let buffer = Array<Byte>(5, repeat: 0)
        bufferedStream.read(buffer)
    
        // 输出读取后的未读数据量
        println("Remain Length after reading 5 bytes: ${bufferedStream.remainLength}")
    }

运行结果：
    
    
    Initial Remain Length: 11
    Remain Length after reading 5 bytes: 0

**func seek(SeekPosition)**
    
    
    public func seek(sp: SeekPosition): Int64

功能：移动光标到指定的位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/GnVpS15xTs-dDvESgh3STg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=6670AEBD0C482F7CAC5B97975A9CAAB0DF97BFAADD28E0808B223DE5AD7ADDA4)

  * 指定的位置不能位于流中数据头部之前。
  * 指定位置可以超过流中数据末尾。
  * 调用该函数会先清空缓存区，再移动光标的位置。



参数：

  * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums#enum-seekposition) \- 指定光标移动后的位置。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回流中数据的起点到移动后位置的偏移量（以字节为单位）。



异常：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) \- 当指定的位置位于流中数据头部之前时，抛出异常。



示例：
    
    
    import std.io.BufferedInputStream
    import std.io.InputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    import std.io.IOException
    import std.io.readToEnd
    
    /**
     * 自定义实现 InputStream 和 Seekable 接口的类 A
     */
    public class A <: InputStream & Seekable {
        public var inputStream: ByteBuffer = ByteBuffer()
    
        public func read(buffer: Array<Byte>): Int64 {
            let inputData = "Hello World".toArray()
            inputStream = ByteBuffer(inputData)
            let num = inputStream.read(buffer)
            return num
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return inputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let seekableStream = A()
        let bufferedStream = BufferedInputStream(seekableStream)
        let buffer = Array<Byte>(11, repeat: 0)
        bufferedStream.read(buffer)
    
        /* 输出当前流中总数据量，当前光标位置，当前流中未读的数据量 */
        println("Length : ${bufferedStream.length}")
        println("Position : ${bufferedStream.position}")
        println("Remain Length : ${bufferedStream.remainLength}")
    
        /* 移动光标到指定位置，虽然超过了流中数据末尾但是合法的 */
        println("Position after seek() : ${bufferedStream.seek(SeekPosition.Current(11))}")
    
        /* 尝试移动到数据头部之前，抛出异常 */
        try {
            bufferedStream.seek(SeekPosition.Begin(-1))
        } catch (e: IOException) {
            println("Error: " + e.message)
        }
    
        /* 将光标移动到第一个单词之后，读取后续的数据 */
        bufferedStream.seek(SeekPosition.Begin(6))
        println(String.fromUtf8(readToEnd(seekableStream.inputStream)))
    }

运行结果：
    
    
    Length : 11
    Position : 11
    Remain Length : 0
    Position after seek() : 22
    Error: Can't move the position before the beginning of the stream.
    World

#### class BufferedOutputStream<T> where T <: OutputStream
    
    
    public class BufferedOutputStream<T> <: OutputStream where T <: OutputStream {
        public init(output: T)
        public init(output: T, buffer: Array<Byte>)
        public init(output: T, capacity: Int64)
    }

功能：提供带缓冲区的输出流。

可将其他 [OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream) 类型的输出流（如 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer)）绑定到 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 实例，从该实例写入数据时，先把数据写入缓冲区暂存，再从缓冲区写入数据到流中。

父类型：

  * [OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)



#### [h2]init(T)
    
    
    public init(output: T)

功能：创建 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 实例，缓冲区容量取默认值 4096。

参数：

  * output: T - 绑定指定输出流。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    import std.io.readToEnd
    
    main(): Unit {
        let outputStream = ByteBuffer()
        /* 绑定指定输出流 */
        let bufferedStream = BufferedOutputStream(outputStream)
    
        /* 将输出数据写入缓冲流 bufferedStream 并刷新内部绑定的输出流 outputStream */
        let outputData = "Hello World".toArray()
        bufferedStream.write(outputData)
        bufferedStream.flush()
        println(String.fromUtf8(readToEnd(outputStream)))
    }

运行结果：
    
    
    Hello World

#### [h2]init(T, Array<Byte>)
    
    
    public init(output: T, buffer: Array<Byte>)

功能：创建 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 实例。

其内部使用的缓存区由入参决定，在注重性能的场景下，通过复用传入的 buffer，可以减少内存分配次数，提高性能。

参数：

  * output: T - 绑定一个输出流。
  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 使用的内部缓存区。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 大小等于 0 时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    
    main(): Unit {
        let outputStream = ByteBuffer()
    
        /* 使用合法的内部缓冲区创建 BufferedOutputStream 实例，不会抛出异常 */
        try {
            let buffer = Array<Byte>(1024, repeat: 0)
            let bufferedStream = BufferedOutputStream(outputStream, buffer)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    
        /* 内部缓冲区大小被定义为 0 的情况 */
        try {
            let invalidBuffer = Array<Byte>()
            let bufferedStream = BufferedOutputStream(outputStream, invalidBuffer)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    Error: The buffer cannot be empty.

#### [h2]init(T, Int64)
    
    
    public init(output: T, capacity: Int64)

功能：创建 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 实例。

参数：

  * output: T - 绑定指定输出流。
  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 内部缓冲区容量。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 capacity 小于等于 0 时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    
    main(): Unit {
        let outputStream = ByteBuffer()
    
        /* 使用合法的内部缓冲区容量创建 BufferedoutputStream 实例，不会抛出异常 */
        try {
            let capacity = 2048
            let bufferedStream = BufferedOutputStream(outputStream, capacity)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    
        /* 当内部缓冲区被设置成 0 时，抛出异常 */
        try {
            let zeroCapacity = 0
            let bufferedStream = BufferedOutputStream(outputStream, zeroCapacity)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    
        /* 当内部缓冲区被设置成负数时，抛出异常 */
        try {
            let negativeCapacity = -1024
            let bufferedStream = BufferedOutputStream(outputStream, negativeCapacity)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    Error: Invalid capacity size: capacity = 0.
    Error: Invalid capacity size: capacity = -1024.

#### [h2]func flush()
    
    
    public func flush(): Unit

功能：刷新 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream)：将内部缓冲区的剩余数据写入绑定的输出流，并刷新 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream)。

示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    import std.io.readToEnd
    
    main(): Unit {
        let outputStream = ByteBuffer()
        /* 绑定指定输出流 */
        let bufferedStream = BufferedOutputStream(outputStream)
    
        /* 将输出数据写入缓冲流 bufferedStream 并刷新内部绑定的输出流 outputStream */
        let outputData = "Hello World".toArray()
        bufferedStream.write(outputData)
        bufferedStream.flush()
        println(String.fromUtf8(readToEnd(outputStream)))
    }

运行结果：
    
    
    Hello World

#### [h2]func reset(T)
    
    
    public func reset(output: T): Unit

功能：绑定新的输出流，重置状态，但不重置 capacity。

参数：

  * output: T - 待绑定的输出流。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    import std.io.IOException
    import std.io.readToEnd
    
    main(): Unit {
        /* 创建第一个输出流 */
        let outputStream1 = ByteBuffer()
        let sourceData1 = "First message: Hello".toArray()
    
        /* 创建第二个输出流 */
        let outputStream2 = ByteBuffer()
        let sourceData2 = "Second message: World".toArray()
    
        /* 使用 BufferedOutputStream 包装第一个输出流 */
        let bufferedStream = BufferedOutputStream(outputStream1)
    
        /* 将第一个源数据写入到绑定的第一个输出流中并刷新 */
        bufferedStream.write(sourceData1)
        bufferedStream.flush()
        println(String.fromUtf8(readToEnd(outputStream1)))
    
        /* 重置输出流为第二个输出流，将第二个源数据写入到绑定的第二个输出流中并刷新 */
        bufferedStream.reset(outputStream2)
        bufferedStream.write(sourceData2)
        bufferedStream.flush()
        println(String.fromUtf8(readToEnd(outputStream2)))
    }

运行结果：
    
    
    First message: Hello
    Second message: World

#### [h2]func write(Array<Byte>)
    
    
    public func write(buffer: Array<Byte>): Unit

功能：将 buffer 中的数据写入到绑定的输出流中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待写入数据的缓冲区。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    import std.io.readToEnd
    
    main(): Unit {
        let outputStream = ByteBuffer()
        /* 绑定指定输出流 */
        let bufferedStream = BufferedOutputStream(outputStream)
    
        /* 将输出数据写入缓冲流 bufferedStream 并刷新内部绑定的输出流 outputStream */
        let outputData = "Hello World".toArray()
        bufferedStream.write(outputData)
        bufferedStream.flush()
        println(String.fromUtf8(readToEnd(outputStream)))
    }

运行结果：
    
    
    Hello World

#### [h2]func writeByte(Byte)
    
    
    public func writeByte(v: Byte): Unit

功能：写入一个字节到绑定的输出流中。

参数：

  * v: [Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) \- 待写入的字节。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.BufferedOutputStream
    import std.io.readToEnd
    
    main(): Unit {
        let outputStream = ByteBuffer()
        /* 绑定指定输出流 */
        let bufferedStream = BufferedOutputStream(outputStream)
    
        /* 将输出数据逐个写入缓冲流 bufferedStream 并刷新内部绑定的输出流 outputStream */
        let outputData = "Hello World".toArray()
        for (byte in outputData) {
            bufferedStream.writeByte(byte)
        }
        bufferedStream.flush()
        println(String.fromUtf8(readToEnd(outputStream)))
    }

运行结果：
    
    
    Hello World

#### [h2]extend<T> BufferedOutputStream<T> <: Resource where T <: Resource
    
    
    extend<T> BufferedOutputStream<T> <: Resource where T <: Resource

功能：为 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 实现 [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource) 接口，该类型对象可在 try-with-resource 语法上下文中实现自动资源释放。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



**func close()**
    
    
    public func close(): Unit

功能：关闭当前流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/A5tIPLEIQ66Y2bubw22DsA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=06F817E9BC74B2F228F27D916736C4FF494230AE4310F0817D7A3ACC6A4AFD92)

调用此方法后不可再调用 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 的其他接口，否则会造成非预期现象。

示例：
    
    
    import std.io.BufferedOutputStream
    import std.io.OutputStream
    import std.io.ByteBuffer
    
    /**
     * 自定义实现 OutputStream 和 Resource 接口的类
     */
    public class TestStream <: OutputStream & Resource {
        private var closed: Bool = false
        private var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            if (this.closed) {
                return
            }
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Stream is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedOutputStream(testStream)
    
        // 检查流是否关闭
        println("Is closed before close(): ${bufferedStream.isClosed()}")
    
        // 关闭流
        bufferedStream.close()
    
        // 检查流是否关闭
        println("Is closed after close(): ${bufferedStream.isClosed()}")
    }

运行结果：
    
    
    Is closed before close(): false
    Stream is closed
    Is closed after close(): true

**func isClosed()**
    
    
    public func isClosed(): Bool

功能：判断当前流是否关闭。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果当前流已经被关闭，返回 true，否则返回 false。



示例：
    
    
    import std.io.BufferedOutputStream
    import std.io.OutputStream
    import std.io.ByteBuffer
    import std.io.readToEnd
    
    /**
     * 自定义实现 OutputStream 和 Resource 接口的类 A
     */
    public class A <: OutputStream & Resource {
        private var closed: Bool = false
        public var outputStream = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Resource is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let resourceStream = A()
        let bufferedStream = BufferedOutputStream(resourceStream)
    
        /* 使用 try-with-resource 语法获取资源 */
        try (r = bufferedStream) {
            println("Get the resource")
            let data = "Hello World".toArray()
            r.write(data)
            r.flush()
            println(r.isClosed())
            println(String.fromUtf8(readToEnd(resourceStream.outputStream)))
        }
    
        /* 自动调用 close() 函数释放资源 */
        println(bufferedStream.isClosed())
    }

运行结果：
    
    
    Get the resource
    false
    Hello World
    Resource is closed
    true

#### [h2]extend<T> BufferedOutputStream<T> <: Seekable where T <: Seekable
    
    
    extend<T> BufferedOutputStream<T> <: Seekable where T <: Seekable

功能：为 [BufferedOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bufferedoutputstreamt-where-t--outputstream) 实现 [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable) 接口，支持查询数据长度，移动光标等操作。

父类型：

  * [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable)



**prop length**
    
    
    public prop length: Int64

功能：返回当前流中的总数据量（以字节为单位）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.BufferedOutputStream
    import std.io.OutputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    
    /**
     * 自定义实现 OutputStream 和 Seekable 接口的类
     */
    public class TestStream <: OutputStream & Seekable {
        private var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.outputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedOutputStream(testStream)
    
        // 写入一些数据
        let data = "Hello World".toArray()
        bufferedStream.write(data)
        bufferedStream.flush()
    
        // 输出流的总长度
        println("Length: ${bufferedStream.length}")
    }

运行结果：
    
    
    Length: 11

**prop position**
    
    
    public prop position: Int64

功能：返回当前光标位置。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.BufferedOutputStream
    import std.io.OutputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    
    /**
     * 自定义实现 OutputStream 和 Seekable 接口的类
     */
    public class TestStream <: OutputStream & Seekable {
        private var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.outputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedOutputStream(testStream)
    
        // 写入一些数据
        let data = "Hello World".toArray()
        bufferedStream.write(data)
        bufferedStream.flush()
    
        // 输出当前光标位置
        println("Position: ${bufferedStream.position}")
    }

运行结果：
    
    
    Position: 0

**prop remainLength**
    
    
    public prop remainLength: Int64

功能：返回当前流中未读的数据量（以字节为单位）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.BufferedOutputStream
    import std.io.OutputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    
    /**
     * 自定义实现 OutputStream 和 Seekable 接口的类
     */
    public class TestStream <: OutputStream & Seekable {
        private var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.outputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let bufferedStream = BufferedOutputStream(testStream)
    
        // 写入一些数据
        let data = "Hello World".toArray()
        bufferedStream.write(data)
        bufferedStream.flush()
    
        // 输出流中未读的数据量
        println("Remain Length: ${bufferedStream.remainLength}")
    }

运行结果：
    
    
    Remain Length: 11

**func seek(SeekPosition)**
    
    
    public func seek(sp: SeekPosition): Int64

功能：移动光标到指定的位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/6XxqPGHDTyeUGeqKkkw87A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=D028B20EF988C7D62EDB919FFDD95B15F3657ABD55CC9D8F496F898FC3A3D6E1)

  * 指定的位置不能位于流中数据头部之前。
  * 指定位置可以超过流中数据末尾。
  * 调用该函数会先将缓存区内的数据写到绑定的输出流里，再移动光标的位置。



参数：

  * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums#enum-seekposition) \- 指定光标移动后的位置。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回流中数据的起点到移动后位置的偏移量（以字节为单位）。



异常：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) \- 当指定的位置位于流中数据头部之前时，抛出异常。



示例：
    
    
    import std.io.BufferedOutputStream
    import std.io.OutputStream
    import std.io.ByteBuffer
    import std.io.Seekable
    import std.io.SeekPosition
    import std.io.IOException
    import std.io.readToEnd
    
    /**
     * 自定义实现 OutputStream 和 Seekable 接口的类 A
     */
    public class A <: OutputStream & Seekable {
        public var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return outputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let seekableStream = A()
        let bufferedStream = BufferedOutputStream(seekableStream)
        let data = "Hello World".toArray()
        bufferedStream.write(data)
        bufferedStream.flush()
    
        /* 输出当前流中总数据量，当前光标位置，当前流中未读的数据量 */
        println("Length : ${bufferedStream.length}")
        println("Position : ${bufferedStream.position}")
        println("Remain Length : ${bufferedStream.remainLength}")
    
        /* 移动光标到指定位置，虽然超过了流中数据末尾但是合法的 */
        println("Position after seek() : ${bufferedStream.seek(SeekPosition.Current(11))}")
    
        /* 尝试移动到数据头部之前，抛出异常 */
        try {
            bufferedStream.seek(SeekPosition.Begin(-1))
        } catch (e: IOException) {
            println("Error: " + e.message)
        }
    
        /* 将光标移动到第一个单词之后，读取后续的数据 */
        bufferedStream.seek(SeekPosition.Begin(6))
        println(String.fromUtf8(readToEnd(seekableStream.outputStream)))
    }

运行结果：
    
    
    Length : 11
    Position : 0
    Remain Length : 11
    Position after seek() : 11
    Error: Can't move the position before the beginning of the stream.
    World

#### class ByteBuffer
    
    
    public class ByteBuffer <: IOStream & Seekable {
        public init()
        public init(capacity: Int64)
        public init(source: Array<Byte>)
    }

功能：基于 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> 数据类型，提供对字节流的写入、读取等操作。

父类型：

  * [IOStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-iostream)
  * [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable)



#### [h2]prop capacity
    
    
    public prop capacity: Int64

功能：获取当前缓冲区容量。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer()
        println("Default capacity: ${buffer.capacity}")
    
        let buffer2 = ByteBuffer(1024)
        println("Custom capacity: ${buffer2.capacity}")
    }

运行结果：
    
    
    Default capacity: 32
    Custom capacity: 1024

#### [h2]init()
    
    
    public init()

功能：创建 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 实例，默认的初始容量是 32。

示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer()
        println(buffer.capacity)
    }

运行结果：
    
    
    32

#### [h2]init(Array<Byte>)
    
    
    public init(source: Array<Byte>)

功能：根据传入的数组构造 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 实例。

参数：

  * source: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 传入的数组。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let buffer = ByteBuffer(inputData)
        println(buffer.capacity)
    
        /* 从缓冲区中读取数据 */
        println(String.fromUtf8(buffer.bytes()))
    }

运行结果：
    
    
    11
    Hello World

#### [h2]init(Int64)
    
    
    public init(capacity: Int64)

功能：创建 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 实例。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 指定的初始容量。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 capacity 小于 0 时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer(1024)
        println(buffer.capacity)
    
        try {
            let errorBuffer = ByteBuffer(-1024)
            println(errorBuffer.capacity)
        } catch (e: Exception) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    1024
    Error: The capacity must be greater than or equal to 0: -1024.

#### [h2]func bytes()
    
    
    public func bytes(): Array<Byte>

功能：获取当前 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 中未被读取的数据的切片。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/ieMNF0o7Q6O749lX8k8-Rw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=F04F3B46E44EFC793DDD2016AC8E527E06B4283D5702B01E3136066B80C7D756)

  * 缓冲区进行读取，写入或重置等修改操作会导致这个切片失效。
  * 对切片的修改会影响缓冲区的内容。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 当前流中未被读取的数据的切片。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let buffer = ByteBuffer(inputData)
    
        /* 从缓冲区中读取数据 */
        println(String.fromUtf8(buffer.bytes()))
    }

运行结果：
    
    
    Hello World

#### [h2]func clear()
    
    
    public func clear(): Unit

功能：清除当前 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 中所有数据。

示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let buffer = ByteBuffer(inputData)
        println(buffer.capacity)
    
        /* 读取原始数据 */
        println(String.fromUtf8(buffer.bytes()))
    
        /* 清除缓冲区 */
        buffer.clear()
    
        /* 读取清除后的缓冲区 */
        println("buffer after clear: " + String.fromUtf8(buffer.bytes()))
        println("capacity after clear: ${buffer.capacity}")
    }

运行结果：
    
    
    11
    Hello World
    buffer after clear:
    capacity after clear: 11

#### [h2]func clone()
    
    
    public func clone(): ByteBuffer

功能：用当前 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 中的数据来构造一个新的 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer)。

返回值：

  * [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) \- 新构造的 [ByteBuffer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-bytebuffer) 对象。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let originalBuffer = ByteBuffer(inputData)
    
        /* 克隆原始缓冲区 */
        let clonedBuffer = originalBuffer.clone()
    
        println("originalBuffer: " + String.fromUtf8(originalBuffer.bytes()))
        println("clonedBuffer: " + String.fromUtf8(clonedBuffer.bytes()))
    
        /* 修改原始缓冲区的数据 */
        originalBuffer.write(" New Data".toArray())
    
        println("originalBuffer: " + String.fromUtf8(originalBuffer.bytes()))
        println("clonedBuffer: " + String.fromUtf8(clonedBuffer.bytes()))
    }

运行结果：
    
    
    originalBuffer: Hello World
    clonedBuffer: Hello World
    originalBuffer: Hello World New Data
    clonedBuffer: Hello World

#### [h2]func read(Array<Byte>)
    
    
    public func read(buffer: Array<Byte>): Int64

功能：从输入流中读取数据放到 buffer 中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 存放读取的数据的缓冲区。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 读取数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 为空时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let buffer = ByteBuffer(inputData)
    
        /* 创建一个目标缓冲区，读取数据到目标缓冲区 */
        let targetBuffer = Array<Byte>(5, repeat: 0)
        buffer.read(targetBuffer)
        println(String.fromUtf8(targetBuffer))
    
        /* 尝试读取空缓冲区 */
        try {
            let emptyBuffer = Array<Byte>()
            buffer.read(emptyBuffer)
        } catch (e: IllegalArgumentException) {
            println("Error: " + e.message)
        }
    }

运行结果：
    
    
    Hello
    Error: The buffer is empty.

#### [h2]func readByte()
    
    
    public func readByte(): ?Byte

功能：从输入流中读取一个字节。

返回值：

  * ?[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) \- 读取到的数据。读取失败时会返回 None。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let inputData = "Hello World".toArray()
        let buffer = ByteBuffer(inputData)
    
        for (_ in 0..inputData.size) {
            print(String.fromUtf8(buffer.readByte().getOrThrow()))
        }
        println()
    
        /* 尝试读取下一个不存在的字节 */
        let nextByte = buffer.readByte()
        match (nextByte) {
            case None => println("nextByte: None")
            case _ => println("nextByte: ${nextByte.getOrThrow()}")
        }
    }

运行结果：
    
    
    Hello World
    nextByte: None

#### [h2]func reserve(Int64)
    
    
    public func reserve(additional: Int64): Unit

功能：以指定大小扩容缓冲区。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/EllKNKqPQOSkxVC9wy3Ufg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=7893929EE7004A2375C451435A6459785F7873DB0B27111A686C85D449BEE262)

  * 若入参 additional ≤ 0，不执行任何扩容操作。
  * 若当前剩余容量 ≥ additional，不进行扩容，直接返回。
  * 若当前剩余容量 < additional，则按以下两者计算最大者执行扩容：
    * 1.原始容量的 1.5 倍（结果向下取整）
    * 2.已使用容量 + additional。



参数：

  * additional: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 将要扩容的大小。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 additional 小于 0 时，抛出异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当扩容后的缓冲区大小超过 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 的最大值时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer(11)
        println("initial capacity: ${buffer.capacity}")
        buffer.write("Hello World".toArray())
    
        /* 尝试扩容，需要增加的容量大于剩余空间，发生扩容 */
        buffer.reserve(5)
        println("reserve 5: ${buffer.capacity}")
    
        /* 尝试扩容，需要增加的容量小于剩余空间，不发生扩容 */
        buffer.reserve(2)
        println("reserve 2: ${buffer.capacity}")
    
        /* 尝试扩容，additional 为负数 */
        try {
            buffer.reserve(-1)
        } catch (e: IllegalArgumentException) {
            println("Error: " + e.message)
        }
    
        /* 尝试扩容，导致容量超过 Int64 最大值 */
        try {
            buffer.reserve(Int64.Max - buffer.capacity + 1)
        } catch (e: OverflowException) {
            println("Error: " + e.message)
        }
    }

运行结果：
    
    
    initial capacity: 11
    reserve 5: 16
    reserve 2: 16
    Error: The additional must be greater than or equal to 0.
    Error: The maximum value for capacity expansion cannot exceed the maximum value of Int64.

#### [h2]func seek(SeekPosition)
    
    
    public func seek(sp: SeekPosition): Int64

功能：将光标跳转到指定位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/IGhzovMBQQeSrK3-1Kt-bg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=57AF9B2906A78CD7D10170054E4B619C005088C585892407FF8886DD6E192439)

  * 指定的位置不能位于流中数据头部之前。
  * 指定位置可以超过流中数据末尾。



参数：

  * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums#enum-seekposition) \- 指定光标跳转后的位置。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 流中数据的头部到跳转后位置的偏移量（以字节为单位）。



异常：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) \- 当指定的位置位于流中数据头部之前时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    import std.io.SeekPosition
    import std.io.IOException
    
    main(): Unit {
        let buffer = ByteBuffer("Hello World".toArray())
        println("initial position: ${buffer.position}")
    
        /* 移动到当前位置之后 6 个字节 */
        buffer.seek(SeekPosition.Current(6))
        println(String.fromUtf8(buffer.bytes()))
    
        /* 移动位置超过流中数据末尾，为合法操作 */
        println(buffer.seek(SeekPosition.End(1)))
    
        /* 尝试移动到数据头部之前，抛出异常 */
        try {
            buffer.seek(SeekPosition.Begin(-1))
        } catch (e: IOException) {
            println("Error: " + e.message)
        }
    }

运行结果：
    
    
    initial position: 0
    World
    12
    Error: Can't move the position before the beginning of the stream.

#### [h2]func setLength(Int64)
    
    
    public func setLength(length: Int64): Unit

功能：将当前数据修改为指定长度。该操作不会改变 seek 的偏移。

参数：

  * length: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 要修改的长度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 length 小于 0 时，抛此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当 length 过大导致扩容后的缓冲区大小超过 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 的最大值时，抛出异常。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer("Hello World".toArray())
        println("initial length: ${buffer.length}")
    
        /* 设置长度为 5，并读取缓冲区中所有的内容 */
        buffer.setLength(5)
        println("set length to 5: " + String.fromUtf8(buffer.bytes()))
    
        /* 尝试设置扩容后的缓冲区大小超过 Int64 的最大值时，抛出异常 */
        try {
            buffer.setLength(Int64.Max + 1)
        } catch (e: OverflowException) {
            println("Error: " + e.message)
        }
    
        /* 尝试设置长度为-1，抛出异常 */
        try {
            buffer.setLength(-1)
        } catch (e: IllegalArgumentException) {
            println("Error: " + e.message)
        }
    }

运行结果：
    
    
    initial length: 11
    set length to 5: Hello
    Error: add
    Error: The length must be greater than or equal to 0.

#### [h2]func write(Array<Byte>)
    
    
    public func write(buffer: Array<Byte>): Unit

功能：将 buffer 中的数据写入到输出流中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待写入数据的缓冲区。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer()
        let dataToWrite = "Hello World".toArray()
    
        /* 写入数据 */
        buffer.write(dataToWrite)
        println(String.fromUtf8(buffer.bytes()))
    }

运行结果：
    
    
    Hello World

#### [h2]func writeByte(Byte)
    
    
    public func writeByte(v: Byte): Unit

功能：将一个字节写入到输出流中。

参数：

  * v: [Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) \- 待写入的字节。



示例：
    
    
    import std.io.ByteBuffer
    
    main(): Unit {
        let buffer = ByteBuffer()
        let dataToWrite: Array<Byte> = "Hello World".toArray()
    
        /* 每次写入单个字节 */
        for (i in 0..dataToWrite.size) {
            buffer.writeByte(dataToWrite[i])
        }
    
        println(String.fromUtf8(buffer.bytes()))
    }

运行结果：
    
    
    Hello World

#### class ChainedInputStream<T> where T <: InputStream
    
    
    public class ChainedInputStream<T> <: InputStream where T <: InputStream {
        public init(input: Array<T>)
    }

功能：提供顺序从 [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream) 数组中读取数据的能力。

父类型：

  * [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream)



#### [h2]init(Array<T>)
    
    
    public init(input: Array<T>)

功能：创建 [ChainedInputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-chainedinputstreamt-where-t--inputstream) 实例。

参数：

  * input: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 绑定指定输入流数组。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 input 为空时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建多个 ByteBuffer 作为输入流
        let buffer1 = ByteBuffer("Hello ".toArray())
        let buffer2 = ByteBuffer("World".toArray())
    
        // 使用 init 创建 ChainedInputStream
        let inputStreams = [buffer1, buffer2]
        let chainedStream = ChainedInputStream(inputStreams)
        println("ChainedInputStream created successfully")
    
        // 测试空数组异常情况
        try {
            let emptyStreams = Array<ByteBuffer>()
            let emptyChainedStream = ChainedInputStream(emptyStreams)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    ChainedInputStream created successfully
    Error: The array of input streams cannot be empty!

#### [h2]func read(Array<Byte>)
    
    
    public func read(buffer: Array<Byte>): Int64

功能：依次从绑定 [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream) 数组中读出数据到 buffer 中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 存储读出数据的缓冲区。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 读取字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 为空时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建多个 ByteBuffer 作为输入流
        let buffer1 = ByteBuffer("Hello ".toArray())
        let buffer2 = ByteBuffer("World".toArray())
        let buffer3 = ByteBuffer("!".toArray())
    
        // 创建 ChainedInputStream
        let inputStreams = [buffer1, buffer2, buffer3]
        let chainedStream = ChainedInputStream(inputStreams)
    
        // 读取所有数据
        var result = ""
        var totalBytesRead = 0
        while (true) {
            let buffer = Array<Byte>(10, repeat: 0)
            let bytesRead = chainedStream.read(buffer)
            if (bytesRead == 0) {
                break
            }
            totalBytesRead += bytesRead
            result += String.fromUtf8(buffer.slice(0, bytesRead))
        }
        println("Total bytes read: ${totalBytesRead}")
        println("Result: " + result)
    }

运行结果：
    
    
    Total bytes read: 12
    Result: Hello World!

#### class MultiOutputStream<T> where T <: OutputStream
    
    
    public class MultiOutputStream<T> <: OutputStream where T <: OutputStream {
        public init(output: Array<T>)
    }

功能：提供将数据同时写入到 [OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream) 数组中每个输出流中的能力。

父类型：

  * [OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream)



#### [h2]init(Array<T>)
    
    
    public init(output: Array<T>)

功能：创建 [MultiOutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-multioutputstreamt-where-t--outputstream) 实例。

参数：

  * output: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 绑定指定输出流数组。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 output 为空时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建多个 ByteBuffer 作为输出流
        let buffer1 = ByteBuffer()
        let buffer2 = ByteBuffer()
    
        // 使用 init 创建 MultiOutputStream
        let outputStreams = [buffer1, buffer2]
        let multiStream = MultiOutputStream(outputStreams)
        println("MultiOutputStream created successfully")
    
        // 测试空数组异常情况
        try {
            let emptyStreams = Array<ByteBuffer>()
            let emptyMultiStream = MultiOutputStream(emptyStreams)
        } catch (e: IllegalArgumentException) {
            println("Error: ${e.message}")
        }
    }

运行结果：
    
    
    MultiOutputStream created successfully
    Error: The array of output streams cannot be empty!

#### [h2]func flush()
    
    
    public func flush(): Unit

功能：刷新绑定的输出流数组里的每个输出流。

示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建多个 ByteBuffer 作为输出流
        let buffer1 = ByteBuffer()
        let buffer2 = ByteBuffer()
    
        // 创建 MultiOutputStream
        let outputStreams = [buffer1, buffer2]
        let multiStream = MultiOutputStream(outputStreams)
    
        // 写入一些数据
        let data = "Hello World".toArray()
        multiStream.write(data)
    
        // 刷新所有输出流
        multiStream.flush()
    
        // 验证数据已写入
        println("Buffer1 content: " + String.fromUtf8(buffer1.bytes()))
        println("Buffer2 content: " + String.fromUtf8(buffer2.bytes()))
    }

运行结果：
    
    
    Buffer1 content: Hello World
    Buffer2 content: Hello World

#### [h2]func write(Array<Byte>)
    
    
    public func write(buffer: Array<Byte>): Unit

功能：将 buffer 同时写入到绑定的 [OutputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-outputstream) 数组里的每个输出流中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 存储待写入数据的缓冲区。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建多个 ByteBuffer 作为输出流
        let buffer1 = ByteBuffer()
        let buffer2 = ByteBuffer()
        let buffer3 = ByteBuffer()
    
        // 创建 MultiOutputStream
        let outputStreams = [buffer1, buffer2, buffer3]
        let multiStream = MultiOutputStream(outputStreams)
    
        // 写入数据到所有输出流
        let data = "Hello MultiOutputStream".toArray()
        multiStream.write(data)
        multiStream.flush()
    
        // 验证所有输出流都包含了相同的数据
        println("Buffer1: " + String.fromUtf8(buffer1.bytes()))
        println("Buffer2: " + String.fromUtf8(buffer2.bytes()))
        println("Buffer3: " + String.fromUtf8(buffer3.bytes()))
    }

运行结果：
    
    
    Buffer1: Hello MultiOutputStream
    Buffer2: Hello MultiOutputStream
    Buffer3: Hello MultiOutputStream

#### class StringReader<T> where T <: InputStream
    
    
    public class StringReader<T> where T <: InputStream {
        public init(input: T)
    }

功能：提供从 [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream) 输入流中读出数据并转换成字符或字符串的能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/-I-Bub9lTLOoZaGNU-15CQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=C7FEE75E47ADF3762B45C9972A3028BEAA7AFF3649FD1BCBD5C3C97CE6D15DE8)

  * [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 内部默认有缓冲区，缓冲区容量 4096 个字节。
  * [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 目前仅支持 UTF-8 编码，暂不支持 UTF-16、UTF-32。



#### [h2]init(T)
    
    
    public init(input: T)

功能：创建 [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 实例。

参数：

  * input: T - 待读取数据的输入流。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello World".toArray())
    
        // 使用 init 创建 StringReader
        let stringReader = StringReader(buffer)
    }

#### [h2]func lines()
    
    
    public func lines(): Iterator<String>

功能：获得 [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 的行迭代器。

相当于循环调用 func readln()，内部遇到非法字符时也会抛出异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/otpEjztRSEutVHJjpoJqew/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=19C9C12B64EFDB34EAC84ED44F4136E484D2B386DEC872E5D49807EF4CBFF983)

  * 每行都由换行符进行分隔。
  * 换行符是 \n \r \r\n 之一。
  * 每行不包括换行符。



返回值：

  * [Iterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 字符串的行迭代器。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当for-in或者调用next()方法时读取到非法字符，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个包含多行文本的 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello\nWorld\nCangjie".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 lines() 方法读取所有行
        let lineIterator = stringReader.lines()
        for (line in lineIterator) {
            println(line)
        }
    }

运行结果：
    
    
    Hello
    World
    Cangjie

#### [h2]func read()
    
    
    public func read(): ?Rune

功能：按字符读取流中的数据。

返回值：

  * ?[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 读取成功，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune)>.Some(c)，c 为该次读出的字符；否则返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune)>.None。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当读取到非法字符时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 read() 方法逐个读取字符
        while (true) {
            let char = stringReader.read()
            if (char == None) {
                break
            }
            print(char.getOrThrow())
        }
    }

运行结果：
    
    
    Hello

#### [h2]func readln()
    
    
    public func readln(): Option<String>

功能：按行读取流中的数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/xU532pXsQt-DzCFDriN-ew/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=C0BB255D710392EE5A0ED6B7BC326174276B06A4EDD26C258DF6EBA8410746D2)

  * 读取的数据会去掉原换行符。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 读取成功，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>.Some(str)，str 为该次读出的字符串；否则返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>.None。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当读取到非法字符时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个包含多行文本的 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello\nWorld\nCangjie".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 readln() 方法逐行读取
        while (true) {
            let line = stringReader.readln()
            if (line == None) {
                break
            }
            println(line.getOrThrow())
        }
    }

运行结果：
    
    
    Hello
    World
    Cangjie

#### [h2]func readToEnd()
    
    
    public func readToEnd(): String

功能：读取流中所有剩余数据。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 流中所有剩余数据。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当读取到非法字符时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello World".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 readToEnd() 方法读取所有剩余数据
        let content = stringReader.readToEnd()
        println(content)
    }

运行结果：
    
    
    Hello World

#### [h2]func readUntil((Rune) -> Bool)
    
    
    public func readUntil(predicate: (Rune) -> Bool): Option<String>

功能：从流内读取到使 predicate 返回 true 的字符位置（包含这个字符）或者流结束位置的数据。

参数：

  * predicate: ([Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune))->Bool - 满足一定条件返回 true 的表达式。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 读取成功，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>.Some(str)，str 为该次读出的字符串；否则返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>.None。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当读取到非法字符时，抛出异常。

示例：



    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello World".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 readUntil() 方法读取到空格字符
        let result = stringReader.readUntil({rune => rune == r' '})
        println(result.getOrThrow())
    }

运行结果：
    
    
    Hello

#### [h2]func readUntil(Rune)
    
    
    public func readUntil(v: Rune): Option<String>

功能：从流内读取到指定字符（包含指定字符）或者流结束位置的数据。

参数：

  * v: [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 指定字符。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)> \- 读取成功，返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>.Some(str)，str 为该次读出的字符串；否则返回 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>.None。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当读取到非法字符时，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello,World".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 readUntil() 方法读取到逗号字符
        let result = stringReader.readUntil(r',')
        println(result.getOrThrow())
    }

运行结果：
    
    
    Hello,

#### [h2]func runes()
    
    
    public func runes(): Iterator<Rune>

功能：获得 [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 的 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 迭代器。

返回值：

  * [Iterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort)<[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune)> \- 字符串的 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 迭代器。



异常：

  * [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) \- 当for-in或者调用next()方法时读取到非法字符，抛出异常。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        // 创建一个 ByteBuffer 作为输入流
        let buffer = ByteBuffer("Hello".toArray())
    
        // 创建 StringReader
        let stringReader = StringReader(buffer)
    
        // 使用 runes() 方法获取字符迭代器
        let runeIterator = stringReader.runes()
        for (rune in runeIterator) {
            print(rune)
            print(" ")
        }
        println()
    }

运行结果：
    
    
    H e l l o

#### [h2]extend<T> StringReader<T> <: Resource where T <: Resource
    
    
    extend<T> StringReader<T> <: Resource where T <: Resource

功能：为 [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 实现 [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource) 接口，该类型对象可在 try-with-resource 语法上下文中实现自动资源释放。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



**func close()**
    
    
    public func close(): Unit

功能：关闭当前流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/3_zyv4eUTRK98LbBh8xZ8A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=E8CD989A84B20407DFD23A178FE7782B2A550D7E98940AF8518452C0B28A1DFF)

调用此方法后不可再调用 [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 的其他接口，否则会造成非预期现象。

示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 InputStream 和 Resource 接口的类
     */
    public class TestStream <: InputStream & Resource {
        private var closed: Bool = false
    
        public func read(buffer: Array<Byte>): Int64 {
            if (this.closed) {
                return 0
            }
            let data = "Hello World".toArray()
            let inputStream = ByteBuffer(data)
            return inputStream.read(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Stream is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let stringReader = StringReader(testStream)
    
        // 检查流是否关闭
        println("Is closed before close(): ${stringReader.isClosed()}")
    
        // 关闭流
        stringReader.close()
    
        // 检查流是否关闭
        println("Is closed after close(): ${stringReader.isClosed()}")
    }

运行结果：
    
    
    Is closed before close(): false
    Stream is closed
    Is closed after close(): true

**func isClosed()**
    
    
    public func isClosed(): Bool

功能：判断当前流是否关闭。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果当前流已经被关闭，返回 true，否则返回 false。



示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 InputStream 和 Resource 接口的类
     */
    public class TestStream <: InputStream & Resource {
        private var closed: Bool = false
    
        public func read(buffer: Array<Byte>): Int64 {
            if (this.closed) {
                return 0
            }
            let data = "Hello World".toArray()
            let inputStream = ByteBuffer(data)
            return inputStream.read(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Stream is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let stringReader = StringReader(testStream)
    
        // 检查流是否关闭
        println("Is closed before close(): ${stringReader.isClosed()}")
    
        // 关闭流
        stringReader.close()
    
        // 检查流是否关闭
        println("Is closed after close(): ${stringReader.isClosed()}")
    }

运行结果：
    
    
    Is closed before close(): false
    Stream is closed
    Is closed after close(): true

#### [h2]extend<T> StringReader<T> <: Seekable where T <: Seekable
    
    
    extend<T> StringReader<T> <: Seekable where T <: Seekable

功能：为 [StringReader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringreadert-where-t--inputstream) 实现 [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable) 接口，支持查询数据长度，移动光标等操作。

父类型：

  * [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable)



**prop position**
    
    
    public prop position: Int64

功能：返回当前光标位置。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 InputStream 和 Seekable 接口的类
     */
    public class TestStream <: InputStream & Seekable {
        private var inputStream: ByteBuffer = ByteBuffer("Hello World".toArray())
    
        public func read(buffer: Array<Byte>): Int64 {
            return this.inputStream.read(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.inputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let stringReader = StringReader(testStream)
    
        // 读取一些数据
        stringReader.read()
    
        // 输出当前光标位置
        println("Position: ${stringReader.position}")
    }

运行结果：
    
    
    Position: 1

**func seek(SeekPosition)**
    
    
    public func seek(sp: SeekPosition): Int64

功能：移动光标到指定的位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/_NdgYCWUSaqLw_DC--PxEw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=667C6471D0050178BFD6A74754EE77EF8EC9743439B82E630BEFAF834A733583)

  * 指定的位置不能位于流中数据头部之前。
  * 指定位置可以超过流中数据末尾。



参数：

  * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums#enum-seekposition) \- 指定光标移动后的位置。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回流中数据的起点到移动后位置的偏移量（以字节为单位）。



异常：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) \- 当指定的位置位于流中数据头部之前时，抛出异常。



示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 InputStream 和 Seekable 接口的类
     */
    public class TestStream <: InputStream & Seekable {
        public var inputStream: ByteBuffer = ByteBuffer("Hello World".toArray())
    
        public func read(buffer: Array<Byte>): Int64 {
            return this.inputStream.read(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return this.inputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let seekableStream = TestStream()
        let stringReader = StringReader(seekableStream)
        stringReader.read()
    
        /* 输出当前光标位置，当前流中总数据量，当前流中未读的数据量 */
        println("Position : ${stringReader.position}")
        println("Length : ${stringReader.length}")
        println("Remain Length : ${stringReader.remainLength}")
    
        /* 移动光标到指定位置，虽然超过了流中数据末尾但是合法的 */
        println("Position after seek() : ${stringReader.seek(SeekPosition.Current(11))}")
    
        /* 尝试移动到数据头部之前，抛出异常 */
        try {
            stringReader.seek(SeekPosition.Begin(-1))
        } catch (e: IOException) {
            println("Error: " + e.message)
        }
    
        /* 将光标移动到第一个单词之后，读取后续的数据 */
        stringReader.seek(SeekPosition.Begin(6))
        println(String.fromUtf8(readToEnd(seekableStream.inputStream)))
    }

运行结果：
    
    
    Position : 1
    Length : 11
    Remain Length : 10
    Position after seek() : 12
    Error: Can't move the position before the beginning of the stream.
    World

#### class StringWriter<T> where T <: OutputStream
    
    
    public class StringWriter<T> where T <: OutputStream {
        public init(output: T)
    }

功能：提供将 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 以及一些 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 类型转换成指定编码格式和字节序配置的字符串并写入到输出流的能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/XKG1g5jbQ8mY1-5twUqgKw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=2FB6FDAED90939D02D6D6C9E67AD99D24EDD6DB5A37AF7E5A7261EC1A822959D)

  * [StringWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringwritert-where-t--outputstream) 内部默认有缓冲区，缓冲区容量 4096 个字节。
  * [StringWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringwritert-where-t--outputstream) 目前仅支持 UTF-8 编码，暂不支持 UTF-16、UTF-32。



#### [h2]init(T)
    
    
    public init(output: T)

功能：创建 [StringWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringwritert-where-t--outputstream) 实例。

参数：

  * output: T - 待写入数据的输出流。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    }

#### [h2]func flush()
    
    
    public func flush(): Unit

功能：刷新内部缓冲区，将缓冲区数据写入 output 中，并刷新 output。

示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入数据 */
        stringWriter.write("Hello, flush!")
    
        /* 刷新缓冲区，确保数据写入到输出流 */
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    Hello, flush!

#### [h2]func write(Bool)
    
    
    public func write(v: Bool): Unit

功能：写入 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型。

参数：

  * v: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Bool 值 */
        stringWriter.write(true)
        stringWriter.write(false)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    truefalse

#### [h2]func write(Float16)
    
    
    public func write(v: Float16): Unit

功能：写入 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型。

参数：

  * v: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Float16 值 */
        stringWriter.write(3.14f16)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    3.140625

#### [h2]func write(Float32)
    
    
    public func write(v: Float32): Unit

功能：写入 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型。

参数：

  * v: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Float32 值 */
        stringWriter.write(3.14159f32)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    3.141590

#### [h2]func write(Float64)
    
    
    public func write(v: Float64): Unit

功能：写入 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型。

参数：

  * v: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Float64 值 */
        stringWriter.write(3.141592653589793)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    3.141593

#### [h2]func write(Int16)
    
    
    public func write(v: Int16): Unit

功能：写入 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型。

参数：

  * v: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int16 值 */
        stringWriter.write(100i16)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func write(Int32)
    
    
    public func write(v: Int32): Unit

功能：写入 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型。

参数：

  * v: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int32 值 */
        stringWriter.write(100000i32)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100000

#### [h2]func write(Int64)
    
    
    public func write(v: Int64): Unit

功能：写入 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型。

参数：

  * v: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int64 值 */
        stringWriter.write(10000000000)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    10000000000

#### [h2]func write(Int8)
    
    
    public func write(v: Int8): Unit

功能：写入 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型。

参数：

  * v: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int8 值 */
        stringWriter.write(100i8)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func write(Rune)
    
    
    public func write(v: Rune): Unit

功能：写入 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型。

参数：

  * v: [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Rune 值 */
        stringWriter.write(r'A')
        stringWriter.write(r'中')
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    A中

#### [h2]func write(String)
    
    
    public func write(v: String): Unit

功能：写入字符串。

参数：

  * v: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待写入的字符串。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入字符串 */
        stringWriter.write("Hello, World!")
        stringWriter.write(" 你好，世界！")
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    Hello, World! 你好，世界！

#### [h2]func write(UInt16)
    
    
    public func write(v: UInt16): Unit

功能：写入 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型。

参数：

  * v: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt16 值 */
        stringWriter.write(100u16)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func write(UInt32)
    
    
    public func write(v: UInt32): Unit

功能：写入 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型。

参数：

  * v: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt32 值 */
        stringWriter.write(100000u32)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100000

#### [h2]func write(UInt64)
    
    
    public func write(v: UInt64): Unit

功能：写入 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型。

参数：

  * v: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt64 值 */
        stringWriter.write(10000000000u64)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    10000000000

#### [h2]func write(UInt8)
    
    
    public func write(v: UInt8): Unit

功能：写入 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型。

参数：

  * v: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt8 值 */
        stringWriter.write(100u8)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func write<T>(T) where T <: ToString
    
    
    public func write<T>(v: T): Unit where T <: ToString

功能：写入 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 类型。

参数：

  * v: T - [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 ToString 类型的值 */
        stringWriter.write(123.456)
        stringWriter.write(true)
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    123.456000true

#### [h2]func writeln()
    
    
    public func writeln(): Unit

功能：写入换行符。

示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入字符串 */
        stringWriter.write("Hello")
    
        /* 写入换行符 */
        stringWriter.writeln()
    
        /* 再写入字符串 */
        stringWriter.write("World!")
    
        stringWriter.flush()
    
        /* 读取写入的数据 */
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    Hello
    World!

#### [h2]func writeln(Bool)
    
    
    public func writeln(v: Bool): Unit

功能：写入 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型 + 换行符。

参数：

  * v: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Bool 值并换行 */
        stringWriter.writeln(true)
        stringWriter.writeln(false)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    true
    false

#### [h2]func writeln(Float16)
    
    
    public func writeln(v: Float16): Unit

功能：写入 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型 + 换行符。

参数：

  * v: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Float16 值并换行 */
        stringWriter.writeln(3.14f16)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    3.140625

#### [h2]func writeln(Float32)
    
    
    public func writeln(v: Float32): Unit

功能：写入 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型 + 换行符。

参数：

  * v: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Float32 值并换行 */
        stringWriter.writeln(3.14159f32)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    3.141590

#### [h2]func writeln(Float64)
    
    
    public func writeln(v: Float64): Unit

功能：写入 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型 + 换行符。

参数：

  * v: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Float64 值并换行 */
        stringWriter.writeln(3.141592653589793)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    3.141593

#### [h2]func writeln(Int16)
    
    
    public func writeln(v: Int16): Unit

功能：写入 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型 + 换行符。

参数：

  * v: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int16 值并换行 */
        stringWriter.writeln(100i16)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func writeln(Int32)
    
    
    public func writeln(v: Int32): Unit

功能：写入 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型 + 换行符。

参数：

  * v: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int32 值并换行 */
        stringWriter.writeln(100000i32)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100000

#### [h2]func writeln(Int64)
    
    
    public func writeln(v: Int64): Unit

功能：写入 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型 + 换行符。

参数：

  * v: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int64 值并换行 */
        stringWriter.writeln(10000000000)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    10000000000

#### [h2]func writeln(Int8)
    
    
    public func writeln(v: Int8): Unit

功能：写入 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型 + 换行符。

参数：

  * v: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Int8 值并换行 */
        stringWriter.writeln(100i8)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func writeln(Rune)
    
    
    public func writeln(v: Rune): Unit

功能：写入 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型 + 换行符。

参数：

  * v: [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 Rune 值并换行 */
        stringWriter.writeln(r'A')
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    A

#### [h2]func writeln(String)
    
    
    public func writeln(v: String): Unit

功能：写入字符串 + 换行符。

参数：

  * v: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待写入的字符串。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入字符串并换行 */
        stringWriter.writeln("Hello, World!")
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    Hello, World!

#### [h2]func writeln(UInt16)
    
    
    public func writeln(v: UInt16): Unit

功能：写入 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型 + 换行符。

参数：

  * v: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt16 值并换行 */
        stringWriter.writeln(100u16)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func writeln(UInt32)
    
    
    public func writeln(v: UInt32): Unit

功能：写入 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型 + 换行符。

参数：

  * v: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt32 值并换行 */
        stringWriter.writeln(100000u32)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100000

#### [h2]func writeln(UInt64)
    
    
    public func writeln(v: UInt64): Unit

功能：写入 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型 + 换行符。

参数：

  * v: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt64 值并换行 */
        stringWriter.writeln(10000000000u64)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    10000000000

#### [h2]func writeln(UInt8)
    
    
    public func writeln(v: UInt8): Unit

功能：写入 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型 + 换行符。

参数：

  * v: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 UInt8 值并换行 */
        stringWriter.writeln(100u8)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    100

#### [h2]func writeln<T>(T) where T <: ToString
    
    
    public func writeln<T>(v: T): Unit where T <: ToString

功能：写入 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 类型 + 换行符。

参数：

  * v: T - [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 类型的实例。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        let byteBuffer = ByteBuffer()
        let stringWriter = StringWriter(byteBuffer)
    
        /* 写入 ToString 类型的值并换行 */
        stringWriter.writeln(123.456)
    
        stringWriter.flush()
    
        println(String.fromUtf8(readToEnd(byteBuffer)))
    }

运行结果：
    
    
    123.456000

#### [h2]extend<T> StringWriter<T> <: Resource where T <: Resource
    
    
    extend<T> StringWriter<T> <: Resource where T <: Resource

功能：为 [StringWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringwritert-where-t--outputstream) 实现 [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource) 接口，该类型对象可在 try-with-resource 语法上下文中实现自动资源释放。

父类型：

  * [Resource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-resource)



**func close()**
    
    
    public func close(): Unit

功能：关闭当前流。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/5I0Kki51TJyDXPiiZuPp8Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=54A2799A65A7D450A30C89F31CC5BF049E38942E9FB186EC52F259434A6A9729)

调用此方法后不可再调用 [StringWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringwritert-where-t--outputstream) 的其他接口，否则会造成非预期现象。

示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 OutputStream 和 Resource 接口的类
     */
    public class TestStream <: OutputStream & Resource {
        private var closed: Bool = false
        private var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            if (this.closed) {
                return
            }
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Stream is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let stringWriter = StringWriter(testStream)
    
        // 检查流是否关闭
        println("Is closed before close(): ${stringWriter.isClosed()}")
    
        // 关闭流
        stringWriter.close()
    
        // 检查流是否关闭
        println("Is closed after close(): ${stringWriter.isClosed()}")
    }

运行结果：
    
    
    Is closed before close(): false
    Stream is closed
    Is closed after close(): true

**func isClosed()**
    
    
    public func isClosed(): Bool

功能：判断当前流是否关闭。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果当前流已经被关闭，返回 true，否则返回 false。



示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 OutputStream 和 Resource 接口的类
     */
    public class TestStream <: OutputStream & Resource {
        private var closed: Bool = false
        public var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            if (this.closed) {
                return
            }
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func isClosed(): Bool {
            return closed
        }
    
        public func close(): Unit {
            println("Stream is closed")
            closed = true
        }
    }
    
    main(): Unit {
        let testStream = TestStream()
        let stringWriter = StringWriter(testStream)
    
        /* 使用 try-with-resource 语法获取资源 */
        try (r = stringWriter) {
            println("Get the resource")
            let data = "Hello World".toArray()
            r.write(data)
            r.flush()
            println(r.isClosed())
            println(String.fromUtf8(readToEnd(testStream.outputStream)))
        }
    
        /* 自动调用 close() 函数释放资源 */
        println(stringWriter.isClosed())
    }

运行结果：
    
    
    Get the resource
    false
    [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
    Stream is closed
    true

#### [h2]extend<T> StringWriter<T> <: Seekable where T <: Seekable
    
    
    extend<T> StringWriter<T> <: Seekable where T <: Seekable

功能：为 [StringWriter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_classes#class-stringwritert-where-t--outputstream) 实现 [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable) 接口，支持查询数据长度，移动光标等操作。

父类型：

  * [Seekable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-seekable)



**func seek(SeekPosition)**
    
    
    public func seek(sp: SeekPosition): Int64

功能：移动光标到指定的位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/6_xVrhwER0yqfKUX0HjwCg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111705Z&HW-CC-Expire=86400&HW-CC-Sign=5A8DF0C16E4159D98AF3746DF0A270717849692DE141FF56898B3032268860DF)

  * 指定的位置不能位于流中数据头部之前。
  * 指定位置可以超过流中数据末尾。



参数：

  * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums#enum-seekposition) \- 指定光标移动后的位置。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回流中数据的起点到移动后位置的偏移量（以字节为单位）。



异常：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) \- 当指定的位置位于流中数据头部之前时，抛出异常。



示例：
    
    
    import std.io.*
    
    /**
     * 自定义实现 OutputStream 和 Seekable 接口的类 A
     */
    public class A <: OutputStream & Seekable {
        public var outputStream: ByteBuffer = ByteBuffer()
    
        public func write(buffer: Array<Byte>): Unit {
            this.outputStream = ByteBuffer(buffer)
        }
    
        public func seek(sp: SeekPosition): Int64 {
            return outputStream.seek(sp)
        }
    }
    
    main(): Unit {
        let seekableStream = A()
        let stringWriter = StringWriter(seekableStream)
        let data = "Hello World".toArray()
        stringWriter.write(data)
        stringWriter.flush()
    
        /* 移动光标到指定位置，虽然超过了流中数据末尾但是合法的 */
        println("Position after seek() : ${stringWriter.seek(SeekPosition.Current(11))}")
    
        /* 尝试移动到数据头部之前，抛出异常 */
        try {
            stringWriter.seek(SeekPosition.Begin(-1))
        } catch (e: IOException) {
            println("Error: " + e.message)
        }
    
        /* 将光标移动到第一个单词之后，读取后续的数据（输入流已经作为 String 进入） */
        stringWriter.seek(SeekPosition.Begin(29))
        println(String.fromUtf8(readToEnd(seekableStream.outputStream)))
    }

运行结果：
    
    
    Position after seek() : 11
    Error: Can't move the position before the beginning of the stream.
    87, 111, 114, 108, 100]
