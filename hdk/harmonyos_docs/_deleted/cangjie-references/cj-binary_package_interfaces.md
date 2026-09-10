---
name: cangjie-references/cj-binary_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.binary / 接口
---

# 接口

#### interface BigEndianOrder<T>
    
    
    public interface BigEndianOrder<T> {
        func writeBigEndian(buffer: Array<Byte>): Int64
        static func readBigEndian(buffer: Array<Byte>): T
    }

功能：大端序字节序列转换接口。

#### [h2]static func readBigEndian(Array<Byte>)
    
    
    static func readBigEndian(buffer: Array<Byte>): T

功能：从字节数组中以大端序的方式读取一个 T 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * T - T 值。



#### [h2]func writeBigEndian(Array<Byte>)
    
    
    func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 T 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



#### [h2]extend Bool <: BigEndianOrder<Bool>
    
    
    extend Bool <: BigEndianOrder<Bool>

功能：为 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Bool

功能：从字节数组中以大端序的方式读取一个 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    
    main() {
        let buffer: Array<Byte> = [0x1]
        let n = Bool.readBigEndian(buffer)
        println(n)
    }

运行结果：
    
    
    true

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以存储 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = true.writeBigEndian(buffer)
        println(n == 1)
        println(buffer[0] == 0x01u8)
    }

运行结果：
    
    
    true
    true

#### [h2]extend Float16 <: BigEndianOrder<Float16>
    
    
    extend Float16 <: BigEndianOrder<Float16>

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Float16

功能：从字节数组中以大端序的方式读取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    
    main() {
        /* 12.5的IEEE 754表示为0x4A40 */
        let buffer: Array<Byte> = [0x4A, 0x40]
        let n = Float16.readBigEndian(buffer)
        println(n == 12.5)
    }

运行结果：
    
    
    true

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let len = 12.5f16.writeBigEndian(buffer)
        println(len)
    
        /* 0x4A的十进制表示为74,0x40的十进制表示为64 */
        println(buffer[0..len])
    }

运行结果：
    
    
    2
    [74, 64]

#### [h2]extend Float32 <: BigEndianOrder<Float32>
    
    
    extend Float32 <: BigEndianOrder<Float32>

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Float32

功能：从字节数组中以大端序的方式读取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    
    main() {
        let buffer: Array<Byte> = [0x41, 0x48, 0x00, 0x00]
        let n = Float32.readBigEndian(buffer)
        println(n)
    }

运行结果：
    
    
    12.500000

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let len = 12.5f32.writeBigEndian(buffer)
        println(len)
    
        /* 12.5的IEEE 754的单精度浮点表示为 0x4148 ,0x41的十进制表示为65，0x48的十进制表示为72 */
        println(buffer[0..len])
    }

运行结果：
    
    
    4
    [65, 72, 0, 0]

#### [h2]extend Float64 <: BigEndianOrder<Float64>
    
    
    extend Float64 <: BigEndianOrder<Float64>

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Float64

功能：从字节数组中以大端序的方式读取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x40, 0x29, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
        let n = Float64.readBigEndian(buffer)
        @Assert(n, 12.5)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 12.5f64.writeBigEndian(buffer)
        @Assert(n, 8)
        @Assert(buffer[..n] == [0x40, 0x29, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
    }

#### [h2]extend Int16 <: BigEndianOrder<Int16>
    
    
    extend Int16 <: BigEndianOrder<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Int16

功能：从字节数组中以大端序的方式读取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12, 0x34]
        let n = Int16.readBigEndian(buffer)
        @Assert(n, 0x1234)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234i16.writeBigEndian(buffer)
        @Assert(n, 2)
        @Assert(buffer[..n] == [0x12, 0x34])
    }

#### [h2]extend Int32 <: BigEndianOrder<Int32>
    
    
    extend Int32 <: BigEndianOrder<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Int32

功能：从字节数组中以大端序的方式读取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12, 0x34, 0x56, 0x78]
        let n = Int32.readBigEndian(buffer)
        @Assert(n, 0x12345678)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        var buffer: Array<Byte> = Array<Byte>(8, repeat: 0)
        let n = 0x12345678i32.writeBigEndian(buffer)
        @Assert(n, 4)
        @Assert(buffer[..n] == [0x12u8, 0x34u8, 0x56u8, 0x78u8])
    }

#### [h2]extend Int64 <: BigEndianOrder<Int64>
    
    
    extend Int64 <: BigEndianOrder<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Int64

功能：从字节数组中以大端序的方式读取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12, 0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56]
        let n = Int64.readBigEndian(buffer)
        @Assert(n, 0x1234567890123456)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234567890123456i64.writeBigEndian(buffer)
        @Assert(n, 8)
        @Assert(buffer[..n] == [0x12, 0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56])
    }

#### [h2]extend Int8 <: BigEndianOrder<Int8>
    
    
    extend Int8 <: BigEndianOrder<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): Int8

功能：从字节数组中以大端序的方式读取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12]
        let n = Int8.readBigEndian(buffer)
        @Assert(n, 0x12)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以存储 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12i8.writeBigEndian(buffer)
        @Assert(n, 1)
        @Assert(buffer[..n] == [0x12])
    }

#### [h2]extend UInt16 <: BigEndianOrder<UInt16>
    
    
    extend UInt16 <: BigEndianOrder<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): UInt16

功能：从字节数组中以大端序的方式读取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12, 0x34]
        let n = UInt16.readBigEndian(buffer)
        @Assert(n, 0x1234)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234u16.writeBigEndian(buffer)
        @Assert(n, 2)
        @Assert(buffer[..n] == [0x12, 0x34])
    }

#### [h2]extend UInt32 <: BigEndianOrder<UInt32>
    
    
    extend UInt32 <: BigEndianOrder<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): UInt32

功能：从字节数组中以大端序的方式读取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12, 0x34, 0x56, 0x78]
        let n = UInt32.readBigEndian(buffer)
        @Assert(n, 0x12345678)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12345678u32.writeBigEndian(buffer)
        @Assert(n, 4)
        @Assert(buffer[..n] == [0x12, 0x34, 0x56, 0x78])
    }

#### [h2]extend UInt64 <: BigEndianOrder<UInt64>
    
    
    extend UInt64 <: BigEndianOrder<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): UInt64

功能：从字节数组中以大端序的方式读取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12, 0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56]
        let n = UInt64.readBigEndian(buffer)
        @Assert(n, 0x1234567890123456)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234567890123456u64.writeBigEndian(buffer)
        @Assert(n, 8)
        @Assert(buffer[..n] == [0x12, 0x34, 0x56, 0x78, 0x90, 0x12, 0x34, 0x56])
    }

#### [h2]extend UInt8 <: BigEndianOrder<UInt8>
    
    
    extend UInt8 <: BigEndianOrder<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 扩展 [BigEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-bigendianordert) 接口，以实现将 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值和大端序字节序列的转换。

父类型：

  * BigEndianOrder<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**static func readBigEndian(Array <Byte>)**
    
    
    public static func readBigEndian(buffer: Array<Byte>): UInt8

功能：从字节数组中以大端序的方式读取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12]
        let n = UInt8.readBigEndian(buffer)
        @Assert(n, 0x12)
    }

**func writeBigEndian(Array <Byte>)**
    
    
    public func writeBigEndian(buffer: Array<Byte>): Int64

功能：将 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以存储 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12u8.writeBigEndian(buffer)
        @Assert(n, 1)
        @Assert(buffer[..n] == [0x12])
    }

#### interface LittleEndianOrder<T>
    
    
    public interface LittleEndianOrder<T> {
        func writeLittleEndian(buffer: Array<Byte>): Int64
        static func readLittleEndian(buffer: Array<Byte>): T
    }

功能：小端序字节序列转换接口。

#### [h2]static func readLittleEndian(Array<Byte>)
    
    
    static func readLittleEndian(buffer: Array<Byte>): T

功能：从字节数组中以小端序的方式读取一个 T 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * T - T 值。



#### [h2]func writeLittleEndian(Array<Byte>)
    
    
    func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 T 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



#### [h2]extend Bool <: LittleEndianOrder<Bool>
    
    
    extend Bool <: LittleEndianOrder<Bool>

功能：为 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Bool

功能：从字节数组中以小端序的方式读取一个 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x1]
        let n = Bool.readLittleEndian(buffer)
        @Assert(n, true)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以存储 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = true.writeLittleEndian(buffer)
        @Assert(n, 1)
        @Assert(buffer[..n] == [0x01])
    }

#### [h2]extend Float16 <: LittleEndianOrder<Float16>
    
    
    extend Float16 <: LittleEndianOrder<Float16>

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Float16

功能：从字节数组中以小端序的方式读取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x40, 0x4A]
        let n = Float16.readLittleEndian(buffer)
        @Assert(n, 12.5)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 12.5f16.writeLittleEndian(buffer)
        @Assert(n, 2)
        @Assert(buffer[..n] == [0x40, 0x4A])
    }

#### [h2]extend Float32 <: LittleEndianOrder<Float32>
    
    
    extend Float32  <: LittleEndianOrder<Float32>

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Float32

功能：从字节数组中以小端序的方式读取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x00, 0x00, 0x48, 0x41]
        let n = Float32.readLittleEndian(buffer)
        @Assert(n, 12.5)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 12.5f32.writeLittleEndian(buffer)
        @Assert(n, 4)
        @Assert(buffer[..n] == [0x00, 0x00, 0x48, 0x41])
    }

#### [h2]extend Float64 <: LittleEndianOrder<Float64>
    
    
    extend Float64 <: LittleEndianOrder<Float64>

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Float64

功能：从字节数组中以小端序的方式读取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x29, 0x40]
        let n = Float64.readLittleEndian(buffer)
        @Assert(n, 12.5)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 12.5f64.writeLittleEndian(buffer)
        @Assert(n, 8)
        @Assert(buffer[..n] == [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x29, 0x40])
    }

#### [h2]extend Int16 <: LittleEndianOrder<Int16>
    
    
    extend Int16 <: LittleEndianOrder<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Int16

功能：从字节数组中以小端序的方式读取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x34, 0x12]
        let n = Int16.readLittleEndian(buffer)
        @Assert(n, 0x1234i16)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234i16.writeLittleEndian(buffer)
        @Assert(n, 2)
        @Assert(buffer[..n] == [0x34, 0x12])
    }

#### [h2]extend Int32 <: LittleEndianOrder<Int32>
    
    
    extend Int32 <: LittleEndianOrder<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Int32

功能：从字节数组中以小端序的方式读取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x78, 0x56, 0x34, 0x12]
        let n = Int32.readLittleEndian(buffer)
        @Assert(n, 0x12345678)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12345678i32.writeLittleEndian(buffer)
        @Assert(n, 4)
        @Assert(buffer[..n] == [0x78, 0x56, 0x34, 0x12])
    }

#### [h2]extend Int64 <: LittleEndianOrder<Int64>
    
    
    extend Int64 <: LittleEndianOrder<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Int64

功能：从字节数组中以小端序的方式读取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x56, 0x34, 0x12, 0x90, 0x78, 0x56, 0x34, 0x12]
        let n = Int64.readLittleEndian(buffer)
        @Assert(n, 0x1234567890123456)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234567890123456i64.writeLittleEndian(buffer)
        @Assert(n, 8)
        @Assert(buffer[..n] == [0x56, 0x34, 0x12, 0x90, 0x78, 0x56, 0x34, 0x12])
    }

#### [h2]extend Int8 <: LittleEndianOrder<Int8>
    
    
    extend Int8 <: LittleEndianOrder<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): Int8

功能：从字节数组中以小端序的方式读取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12]
        let n = Int8.readLittleEndian(buffer)
        @Assert(n, 0x12)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以存储 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12i8.writeLittleEndian(buffer)
        @Assert(n, 1)
        @Assert(buffer[..n] == [0x12])
    }

#### [h2]extend UInt16 <: LittleEndianOrder<UInt16>
    
    
    extend UInt16 <: LittleEndianOrder<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): UInt16

功能：从字节数组中以小端序的方式读取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x34, 0x12]
        let n = UInt16.readLittleEndian(buffer)
        @Assert(n, 0x1234u16)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234u16.writeLittleEndian(buffer)
        @Assert(n, 2)
        @Assert(buffer[..n] == [0x34, 0x12])
    }

#### [h2]extend UInt32 <: LittleEndianOrder<UInt32>
    
    
    extend UInt32 <: LittleEndianOrder<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): UInt32

功能：从字节数组中以小端序的方式读取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x78, 0x56, 0x34, 0x12]
        let n = UInt32.readLittleEndian(buffer)
        @Assert(n, 0x12345678)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12345678u32.writeLittleEndian(buffer)
        @Assert(n, 4)
        @Assert(buffer[..n] == [0x78, 0x56, 0x34, 0x12])
    }

#### [h2]extend UInt64 <: LittleEndianOrder<UInt64>
    
    
    extend UInt64 <: LittleEndianOrder<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): UInt64

功能：从字节数组中以小端序的方式读取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以读出 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x56, 0x34, 0x12, 0x90, 0x78, 0x56, 0x34, 0x12]
        let n = UInt64.readLittleEndian(buffer)
        @Assert(n, 0x1234567890123456)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IndexOutOfBoundsException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-indexoutofboundsexception) \- 当 buffer 太小，不足以存储 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x1234567890123456u64.writeLittleEndian(buffer)
        @Assert(n, 8)
        @Assert(buffer[..n] == [0x56, 0x34, 0x12, 0x90, 0x78, 0x56, 0x34, 0x12])
    }

#### [h2]extend UInt8 <: LittleEndianOrder<UInt8>
    
    
    extend UInt8 <: LittleEndianOrder<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 扩展 [LittleEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-littleendianordert) 接口，以实现将 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值和小端序字节序列的转换。

父类型：

  * LittleEndianOrder<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**static func readLittleEndian(Array <Byte>)**
    
    
    public static func readLittleEndian(buffer: Array<Byte>): UInt8

功能：从字节数组中以小端序的方式读取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待读取的数据。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer: Array<Byte> = [0x12]
        let n = UInt8.readLittleEndian(buffer)
        @Assert(n, 0x12)
    }

**func writeLittleEndian(Array <Byte>)**
    
    
    public func writeLittleEndian(buffer: Array<Byte>): Int64

功能：将 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值以小端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 缓冲区，用于存放待写入的数据。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 写入的数据的字节数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 buffer 太小，不足以存储 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值时，抛出异常。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let buffer = Array<Byte>(8, repeat: 0)
        let n = 0x12u8.writeLittleEndian(buffer)
        @Assert(n, 1)
        @Assert(buffer[..n] == [0x12])
    }

#### interface SwapEndianOrder<T>
    
    
    public interface SwapEndianOrder<T> {
        func swapBytes(): T
    }

功能：反转字节顺序接口。

#### [h2]func swapBytes()
    
    
    func swapBytes(): T

功能：反转 T 值的字节顺序。

返回值：

  * T - T 值。



#### [h2]extend Int16 <: SwapEndianOrder<Int16>
    
    
    extend Int16 <: SwapEndianOrder<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**func swapBytes()**
    
    
    public func swapBytes(): Int16

功能：反转 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值的字节顺序。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x1234i16
        let m = n.swapBytes()
        @Assert(m, 0x3412)
    }

#### [h2]extend Int32 <: SwapEndianOrder<Int32>
    
    
    extend Int32 <: SwapEndianOrder<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**func swapBytes()**
    
    
    public func swapBytes(): Int32

功能：反转 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值的字节顺序。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x12345678i32
        let m = n.swapBytes()
        @Assert(m, 0x78563412)
    }

#### [h2]extend Int64 <: SwapEndianOrder<Int64>
    
    
    extend Int64 <: SwapEndianOrder<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**func swapBytes()**
    
    
    public func swapBytes(): Int64

功能：反转 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值的字节顺序。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x1234567890123456i64
        let m = n.swapBytes()
        @Assert(m, 0x5634129078563412)
    }

#### [h2]extend Int8 <: SwapEndianOrder<Int8>
    
    
    extend Int8 <: SwapEndianOrder<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**func swapBytes()**
    
    
    public func swapBytes(): Int8

功能：反转 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值的字节顺序。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x12i8
        let m = n.swapBytes()
        @Assert(m, 0x12)
    }

#### [h2]extend UInt16 <: SwapEndianOrder<UInt16>
    
    
    extend UInt16 <: SwapEndianOrder<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**func swapBytes()**
    
    
    public func swapBytes(): UInt16

功能：反转 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值的字节顺序。

返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x1234u16
        let m = n.swapBytes()
        @Assert(m, 0x3412)
    }

#### [h2]extend UInt32 <: SwapEndianOrder<UInt32>
    
    
    extend UInt32 <: SwapEndianOrder<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**func swapBytes()**
    
    
    public func swapBytes(): UInt32

功能：反转 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值的字节顺序。

返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x12345678u32
        let m = n.swapBytes()
        @Assert(m, 0x78563412)
    }

#### [h2]extend UInt64 <: SwapEndianOrder<UInt64>
    
    
    extend UInt64 <: SwapEndianOrder<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**func swapBytes()**
    
    
    public func swapBytes(): UInt64

功能：反转 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值的字节顺序。

返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x1234567890123456u64
        let m = n.swapBytes()
        @Assert(m, 0x5634129078563412)
    }

#### [h2]extend UInt8 <: SwapEndianOrder<UInt8>
    
    
    extend UInt8 <: SwapEndianOrder<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 扩展 [SwapEndianOrder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-binary_package_interfaces#interface-swapendianordert) 接口，以实现将 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值的字节顺序反转。

父类型：

  * SwapEndianOrder<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**func swapBytes()**
    
    
    public func swapBytes(): UInt8

功能：反转 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值的字节顺序。

返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。



示例：
    
    
    import std.binary.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main() {
        let n = 0x12u8
        let m = n.swapBytes()
        @Assert(m, 0x12)
    }
