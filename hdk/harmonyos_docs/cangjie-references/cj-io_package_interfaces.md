---
name: cangjie-references/cj-io_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.io / 接口
---

# 接口

#### interface InputStream
    
    
    public interface InputStream {
        func read(buffer: Array<Byte>): Int64
    }

功能：输入流接口。

#### [h2]func read(Array<Byte>)
    
    
    func read(buffer: Array<Byte>): Int64

功能：从输入流中读取数据放到 buffer 中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放从输入流中读取的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 读取的数据的字节数。



#### interface IOStream
    
    
    public interface IOStream <: InputStream & OutputStream {}

功能：输入输出流接口。

父类型：

  * InputStream
  * OutputStream



#### interface OutputStream
    
    
    public interface OutputStream {
        func write(buffer: Array<Byte>): Unit
        func flush(): Unit
    }

功能：输出流接口。

#### [h2]func flush()
    
    
    func flush(): Unit

功能：清空缓存区。该函数的默认实现为空。

#### [h2]func write(Array<Byte>)
    
    
    func write(buffer: Array<Byte>): Unit

功能：将 buffer 中的数据写入到输出流中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入输出流的数据。



#### interface Seekable
    
    
    public interface Seekable {
        func seek(sp: SeekPosition): Int64
        prop position: Int64
        prop remainLength: Int64
        prop length: Int64
    }

功能：移动光标接口。

#### [h2]prop length
    
    
    prop length: Int64

功能：返回当前流中的总数据量（以字节为单位）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop position
    
    
    prop position: Int64

功能：返回当前光标位置。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]prop remainLength
    
    
    prop remainLength: Int64

功能：返回当前流中未读的数据量（以字节为单位）。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

#### [h2]func seek(SeekPosition)
    
    
    func seek(sp: SeekPosition): Int64

功能：移动光标到指定的位置。

参数：

  * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_enums#enum-seekposition) \- 指定光标移动后的位置。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回流中数据的起点到移动后位置的偏移量（以字节为单位）。


