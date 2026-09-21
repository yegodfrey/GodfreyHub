---
name: cangjie-references/cj-math_numeric_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math.numeric / 结构体
---

# 结构体

#### struct BigInt
    
    
    public struct BigInt <: Comparable<BigInt> & Hashable & ToString {
        public init(bytes: Array<Byte>)
        public init(sign: Bool, magnitude: Array<Byte>)
        public init(n: Int8)
        public init(n: Int16)
        public init(n: Int32)
        public init(n: Int64)
        public init(n: UInt8)
        public init(n: UInt16)
        public init(n: UInt32)
        public init(n: UInt64)
        public init(n: UIntNative)
        public init(n: IntNative)
        public init(n: Float16)
        public init(n: Float32)
        public init(n: Float64)
        public init(sign: Bool, bitLen: Int64, rand!: Random = Random())
        public init(s: String, base!: Int64 = 10)
    }

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 定义为任意精度（二进制）的有符号整数。仓颉的 struct [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 用于任意精度有符号整数的计算，类型转换等。

父类型：

  * [Comparable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-comparablet)<BigInt>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop bitLen
    
    
    public prop bitLen: Int64

功能：获取此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的最短 bit 长度。如 -3 (101) 返回 3，-1 (11) 返回 2，0 (0) 返回 1。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt1 = BigInt(-3)
        let bitLen1 = bigInt1.bitLen
        println(bitLen1)
    
        let bigInt2 = BigInt(-1)
        let bitLen2 = bigInt2.bitLen
        println(bitLen2)
    
        let bigInt3 = BigInt(0)
        let bitLen3 = bigInt3.bitLen
        println(bitLen3)
    }

运行结果：
    
    
    3
    2
    1

#### [h2]prop sign
    
    
    public prop sign: Int64

功能：获取此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的符号。正数返回 1；0 返回 0；负数返回 -1。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt1 = BigInt(-3)
        let sign1 = bigInt1.sign
        println(sign1)
    
        let bigInt2 = BigInt(3)
        let sign2 = bigInt2.sign
        println(sign2)
    
        let bigInt3 = BigInt(0)
        let sign3 = bigInt3.sign
        println(sign3)
    }

运行结果：
    
    
    -1
    1
    0

#### [h2]init(Array<Byte>)
    
    
    public init(bytes: Array<Byte>)

功能：通过大端的 [Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) 数组以补码形式构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/JuKesIQ2SHyW83NzP3qllA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=605C44B9A41555A237D179762FD484054849F8502FBA101F8BD0E66A1B9E31A8)

数据存储方法有以下两种：

  * 大端存储方式：高位字节存放在低位地址。
  * 小端存储方式：将数据的低位字节存放在内存的高位地址。



参数：

  * bytes: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 大端二进制补码数组，数组长度不能为空。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当传入空数组时，抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt([1, 2, 3])
        println(bigInt)
    }

运行结果：
    
    
    66051

#### [h2]init(Bool, Array<Byte>)
    
    
    public init(sign: Bool, magnitude: Array<Byte>)

功能：通过符号位和真值的绝对值构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。视空数组为 0。

参数：

  * sign: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 符号。true 表示非负数，false 表示负数。
  * magnitude: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 真值绝对值的二进制原码。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 sign 为 false 且传入的数组为 0 时，抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(false, [1, 2, 3])
        println(bigInt)
    }

运行结果：
    
    
    -66051

#### [h2]init(Bool, Int64, Random)
    
    
    public init(sign: Bool, bitLen: Int64, rand!: Random = Random())

功能：通过指定正负、bit 长度和随机数种子构建一个随机的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。bit 长度需要大于 0。

参数：

  * sign: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 指定随机 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的正负。
  * bitLen: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 指定随机 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的 bit 长度上限。
  * rand!: [Random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_classes#class-random) \- 指定的随机数种子。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果指定的 bit 长度小于等于 0，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.random.*
    
    main() {
        let random = Random(2)
        let bigInt = BigInt(false, 3, rand: random)
        println(bigInt)
    }

运行结果：
    
    
    -4

#### [h2]init(Float16)
    
    
    public init(n: Float16)

功能：通过半精度浮点数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

将丢弃浮点数的小数部分，即向零取整。

参数：

  * n: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 n 为 Inf 或 NaN，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let float16: Float16 = 24.8
        let bigInt = BigInt(float16)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(Float32)
    
    
    public init(n: Float32)

功能：通过单精度浮点数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

将丢弃浮点数的小数部分，即向零取整。

参数：

  * n: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 n 为 Inf 或 NaN，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let float32: Float32 = 24.8
        let bigInt = BigInt(float32)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(Float64)
    
    
    public init(n: Float64)

功能：通过双精度浮点数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

将丢弃浮点数的小数部分，即向零取整。

参数：

  * n: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 单精度浮点数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 n 为 Inf 或 NaN，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let float64: Float64 = 24.8
        let bigInt = BigInt(float64)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(Int16)
    
    
    public init(n: Int16)

功能：通过 16 位有符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 16 位有符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let int16: Int16 = 24
        let bigInt = BigInt(int16)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(Int32)
    
    
    public init(n: Int32)

功能：通过 32 位有符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 32 位有符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let int32: Int32 = 24
        let bigInt = BigInt(int32)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(Int64)
    
    
    public init(n: Int64)

功能：通过 64 位有符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 64 位有符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let int64: Int64 = 24
        let bigInt = BigInt(int64)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(Int8)
    
    
    public init(n: Int8)

功能：通过 8 位有符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 8 位有符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let int8: Int8 = 24
        let bigInt = BigInt(int8)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(IntNative)
    
    
    public init(n: IntNative)

功能：通过平台相关有符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 平台相关有符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let intNative: IntNative = 24
        let bigInt = BigInt(intNative)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(String, Int64) (deprecated)
    
    
    public init(s: String, base!: Int64 = 10)

功能：通过字符串和进制构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体，支持 2 进制到 36 进制。

字符串的规则如下，即开头是可选的符号（正号或负号），接一串字符串表示的数字：

IntegerString : (SignString)? ValueString

  * SignString : + | -

  * ValueString : Digits

    * Digits: Digit | Digit Digits

      * Digit : '0' ~ '9' | 'A' ~ 'Z' | 'a' ~ 'z'

        * 如果 Digit 在 '0' ~ '9' 内， 需要满足 (Digit - '0') < base；

        * 如果 Digit 在 'A' ~ 'Z' 内， 需要满足 (Digit - 'A') + 10 < base；

        * 如果 Digit 在 'a' ~ 'z' 内， 需要满足 (Digit - 'A') + 10 < base。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/Z0H0p2PhTD2K16ufdhmJjg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=AD42495D291038B27C51E87CEDECC38A5BBF8112F91573C479B7D6531FF07269)

未来版本即将废弃，使用 parse(String, Int64) 替代。

参数：

  * s: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 用于构建 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体的字符串。字符串规则为，开头可选一个正号（+）或者负号（-）。接下来必选非空阿拉伯数字或大小写拉丁字母的字符序列，大小写字符含义一样，'a' 和 'A' 的大小等于十进制的 10，'b' 和 'B' 的大小等于十进制的 11，以此类推。序列中的字符大小不得大于等于进制大小。
  * base!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 进制。字符串所表示的进制，范围为 [2, 36]。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串 s 不符合上述规则，或 base 表示的进制不在 [2, 36] 区间内，抛此异常。



示例：
    
    
    import std.math.numeric.*
    
    main(): Unit {
        /* 通过字符串和进制构建一个 BigInt 结构体 */
        let bigInt = BigInt("1010", base: 2)
        println(bigInt)
    }

运行结果：
    
    
    10

#### [h2]init(UInt16)
    
    
    public init(n: UInt16)

功能：通过 16 位无符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 16 位无符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let uint16: UInt16 = 24
        let bigInt = BigInt(uint16)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(UInt32)
    
    
    public init(n: UInt32)

功能：通过 32 位无符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 32 位无符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let uint32: UInt32 = 24
        let bigInt = BigInt(uint32)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(UInt64)
    
    
    public init(n: UInt64)

功能：通过 64 位无符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 64 位无符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let uint64: UInt64 = 24
        let bigInt = BigInt(uint64)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(UInt8)
    
    
    public init(n: UInt8)

功能：通过 8 位无符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 8 位无符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let uint8: UInt8 = 24
        let bigInt = BigInt(uint8)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]init(UIntNative)
    
    
    public init(n: UIntNative)

功能：通过平台相关无符号整数构建一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

参数：

  * n: [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 平台相关无符号整数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let uintnative: UIntNative = 24
        let bigInt = BigInt(uintnative)
        println(bigInt)
    }

运行结果：
    
    
    24

#### [h2]static func randomProbablePrime(Int64, UInt64, Random)
    
    
    public static func randomProbablePrime(bitLen: Int64, certainty: UInt64, rand!: Random = Random()): BigInt

功能：通过可选的随机数种子构建一个随机的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 素数，素数的 bit 长度不超过入参 bitLen。

显然，素数必定是大于等于 2 的整数，因此 bitLen 必须大于等于 2。素数检测使用 Miller-Rabin 素数测试算法。Miller-Rabin 测试会有概率将一个合数判定为素数，其出错概率随着入参 certainty 的增加而减少。

参数：

  * bitLen: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 所要生成的随机素数的 bit 长度的上限。
  * certainty: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 生成的随机素数通过 Miller-Rabin 素数测试算法的次数，通过的次数越多，将合数误判为素数的概率越低。
  * rand!: [Random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_classes#class-random) \- 指定的随机数种子。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回生成的随机素数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果指定的 bit 长度小于等于 1，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let randomProbablePrime = BigInt.randomProbablePrime(6, 3)
        println(randomProbablePrime)
    }

#### [h2]func clearBit(Int64)
    
    
    public func clearBit(index: Int64): BigInt

功能：通过将指定索引位置的 bit 修改为 0 来构造一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需要设置的 bit 位置的索引。index 需要大于等于 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是将原 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的 index 处的 bit 改为 0 的产物。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果入参 index 小于 0，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1024)
        let clearBit = bigInt.clearBit(10)
        println(clearBit)
    }

运行结果：
    
    
    0

#### [h2]func compare(BigInt)
    
    
    public func compare(other: BigInt): Ordering

功能：判断 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的大小关系。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的大小关系。如果等于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ；如果小于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).LT；如果大于，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).GT。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1024)
        let that1 = BigInt(512)
        let that2 = BigInt(2048)
        let that3 = BigInt(1024)
    
        let compare1 = bigInt.compare(that1)
        println(compare1)
    
        let compare2 = bigInt.compare(that2)
        println(compare2)
    
        let compare3 = bigInt.compare(that3)
        println(compare3)
    }

运行结果：
    
    
    Ordering.GT
    Ordering.LT
    Ordering.EQ

#### [h2]func divAndMod(BigInt)
    
    
    public func divAndMod(other: BigInt): (BigInt, BigInt)

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的除法运算。

与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除，返回商和模。此除法运算的行为与基础类型保持一致，即商向靠近 0 的方向取整，模的符号与被除数保持一致。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数。除数不得为 0。



返回值：

  * ([BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint), [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)) - 商和模。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1025)
        let that = BigInt(512)
        let (div, mod) = bigInt.divAndMod(that)
        println(div)
        println(mod)
    }

运行结果：
    
    
    2
    1

#### [h2]func flipBit(Int64)
    
    
    public func flipBit(index: Int64): BigInt

功能：通过翻转指定索引位置的 bit 来构造一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需要翻转的 bit 位置的索引。index 需要大于等于 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是将原 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) index 处的 bit 翻转后的产物。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果入参 index 小于 0，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1024)
        let flipBit = bigInt.flipBit(10)
        println(flipBit)
    }

运行结果：
    
    
    0

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：计算并返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的哈希值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的哈希值。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1024)
        let hashCode = bigInt.hashCode()
        println(hashCode)
    }

运行结果：
    
    
    1024

#### [h2]func isProbablePrime(UInt64)
    
    
    public func isProbablePrime(certainty: UInt64): Bool

功能：判断一个数是不是素数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/acHR4mNsRyaNJs2nIdTsRA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=D01EFB73CE8DBF503DBA34BB03115C3888129178B08AAEAB27116289BB7AAF74)

该函数使用了 Miller-Rabin 测试算法，此算法的准确率会随着 certainty 参数的增加而增加。如果该数是素数，那么 Miller-Rabin 测试必定返回 true；如果该数是合数（期待返回 false），那么会有低于 1/4certainty 概率返回 true。素数只对大于等于 2 的正整数有意义，即负数，0，1 都不是素数。

参数：

  * certainty: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 需要执行 Miller-Rabin 测试的次数。注意，如果测试次数为 0，表示不测试，那么总是返回 true（即不是素数的数也必定返回 true）。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果使用此函数测定了一个数为素数，则返回 true；不为素数，则返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1024)
        let isProbablePrime = bigInt.isProbablePrime(10)
        println(isProbablePrime)
    }

运行结果：
    
    
    false

#### [h2]func lowestOneBit() (deprecated)
    
    
    public func lowestOneBit(): Int64

功能：判断为 1 的最低位的 bit 的位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/kYLRz7rsR2a-spFxli2Kkg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=23BDCFF0C9090A988CCA6EC6AA7FFA11B6FD1F51F0087E9FBC86C5B781F6E4AC)

未来版本即将废弃，使用 [trailingZeros(BigInt)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_funcs#func-trailingzerosbigint) 替代。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回为 1 的最低位的 bit 的位置。如果 bit 全为 0，则返回 -1。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(-1)
        let lowestOneBit = bigInt.lowestOneBit()
        println(lowestOneBit)
    }

运行结果：
    
    
    0

#### [h2]func modInverse(BigInt)
    
    
    public func modInverse(other: BigInt): BigInt

功能：计算当前数值的模逆元。

针对入参的模数，返回满足 (当前数值 × 逆元) % 模数 = 1 的整数逆元；该逆元仅在当前数值与模数互质（最大公约数为 1）时存在。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 模运算的模数（即计算逆元的基准值）。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 满足模逆元定义的整数结果；若模数为 ±1，返回值固定为 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当底数与模数不互质、或模数为 0 时抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1025)
        let that = BigInt(512)
        let modInverse = bigInt.modInverse(that)
        println(modInverse)
    }

运行结果：
    
    
    1

#### [h2]func modPow(BigInt, ?BigInt)
    
    
    public func modPow(n: BigInt, m!: ?BigInt = None): BigInt

功能：计算此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的 n 次幂模 m 的结果，并返回。

模的规则与基础类型一致，即模的符号与被除数保持一致。

参数：

  * n: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 指数，必须为非负数。
  * m!: ?[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数，此入参不得为 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 乘方后取模的运算结果。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 指数为负数时抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(2)
        let n = BigInt(10)
        let modPow = bigInt.modPow(n)
        println(modPow)
    }

运行结果：
    
    
    1024

#### [h2]func quo(BigInt) (deprecated)
    
    
    public func quo(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的除法运算。

与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除，返回结果。此除法运算的行为与运算符重载函数区别于，如果被除数为负数，此函数的结果向着远离 0 的方向取整，保证余数大于等于 0。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/s8wRYn6_Qo-wCBc9IRS_Dg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=69CF2CEE64DDDEAAA691780C9634D8B0962297C3F69A9E3C3D0DBB28CD0BF515)

未来版本即将废弃。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数。除数不得为 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除后的结果



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1025)
        let that = BigInt(512)
        let quo = bigInt.quo(that)
        println(quo)
    }

运行结果：
    
    
    2

#### [h2]func quoAndRem(BigInt) (deprecated)
    
    
    public func quoAndRem(other: BigInt): (BigInt, BigInt)

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的除法运算。

与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除，返回商和余数。此除法运算的行为与 divAndMod 函数区别于，如果被除数为负数，此函数的结果向着远离 0 的方向取整，保证余数总是大于等于 0。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/6hVpUNqBT5ehXqZF_7Wekw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=F9B42A324980566CAC29548CC9CD51C423EC60C701824ABE92D9DFD57F922726)

未来版本即将废弃。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数。除数不得为 0。



返回值：

  * ([BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint), [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)) - 商和余数。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1025)
        let that = BigInt(512)
        let (quo, rem) = bigInt.quoAndRem(that)
        println(quo)
        println(rem)
    }

运行结果：
    
    
    2
    1

#### [h2]func rem(BigInt) (deprecated)
    
    
    public func rem(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的模运算。

与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除，返回余数。余数的结果总是大于等于 0。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/8rgKzFhSRFybM8pYy_kHRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=4397079463A9C5B40596202E95FD3BB52CE6BDDA213B22776D83E2A568489E6C)

未来版本即将废弃。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数。除数不得为 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除后的余数。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(1025)
        let that = BigInt(512)
        let rem = bigInt.rem(that)
        println(rem)
    }

运行结果：
    
    
    1

#### [h2]func setBit(Int64)
    
    
    public func setBit(index: Int64): BigInt

功能：通过将指定索引位置的 bit 修改为 1 来构造一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需要设置的 bit 位置的索引。index 需要大于等于 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是将原 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) index 处的 bit 改为 1 的产物。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果入参 index 小于 0，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(0)
        let setBit = bigInt.setBit(10)
        println(setBit)
    }

运行结果：
    
    
    1024

#### [h2]func testBit(Int64)
    
    
    public func testBit(index: Int64): Bool

功能：判断指定位置的 bit 信息，如果指定位置的 bit 为 0，则返回 false；为 1，则返回 true。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需要知道的 bit 的索引。index 需要大于等于 0。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 指定位置的 bit 信息。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果入参 index 小于 0，则抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(-1)
        let testBit = bigInt.testBit(100)
        println(testBit)
    }

运行结果：
    
    
    true

#### [h2]func toBytes()
    
    
    public func toBytes(): Array<Byte>

功能：计算并返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的大端补码字节数组。

字节数组最低索引的最低位为符号位，如 128 返回 [0, 128]（符号位为 0），-128 返回 [128]（符号位为 1）。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的大端补码字节数组。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(0x400)
        let toBytes = bigInt.toBytes()
        println(toBytes)
    }

运行结果：
    
    
    [4, 0]

#### [h2]func toFloat16()
    
    
    public func toFloat16(): Float16

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 转换后的 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值，溢出时，当前值为正数，返回 inf，当前值为负数，返回 -inf。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(32)
        let toFloat16 = bigInt.toFloat16()
        println(toFloat16)
    }

运行结果：
    
    
    32.000000

#### [h2]func toFloat32()
    
    
    public func toFloat32(): Float32

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 转换后的 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值，溢出时，当前值为正数，返回 inf，当前值为负数，返回 -inf。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(32)
        let toFloat32 = bigInt.toFloat32()
        println(toFloat32)
    }

运行结果：
    
    
    32.000000

#### [h2]func toFloat64()
    
    
    public func toFloat64(): Float64

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 转换后的 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值，溢出时，当前值为正数，返回 inf，当前值为负数，返回 -inf。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(32)
        let toFloat64 = bigInt.toFloat64()
        println(toFloat64)
    }

运行结果：
    
    
    32.000000

#### [h2]func toInt16(OverflowStrategy)
    
    
    public func toInt16(overflowHandling!: OverflowStrategy = Throwing): Int16

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 返回转换后的 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt(0x8000_0000_0000)
        let toInt16 = bigInt.toInt16(overflowHandling: Saturating)
        println(toInt16)
    }

运行结果：
    
    
    32767

#### [h2]func toInt32(OverflowStrategy)
    
    
    public func toInt32(overflowHandling!: OverflowStrategy = Throwing): Int32

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回转换后的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt(0x8000_0000_00FF)
        let toInt32 = bigInt.toInt32(overflowHandling: Wrapping)
        println(toInt32)
    }

运行结果：
    
    
    255

#### [h2]func toInt64(OverflowStrategy)
    
    
    public func toInt64(overflowHandling!: OverflowStrategy = Throwing): Int64

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回转换后的 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("800000000000000000", radix: 16)
        let toInt64 = bigInt.toInt64(overflowHandling: Wrapping)
        println(toInt64)
    }

运行结果：
    
    
    0

#### [h2]func toInt8(OverflowStrategy)
    
    
    public func toInt8(overflowHandling!: OverflowStrategy = Throwing): Int8

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回转换后的 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt(1024)
        let toInt8 = bigInt.toInt8(overflowHandling: Saturating)
        println(toInt8)
    }

运行结果：
    
    
    127

#### [h2]func toIntNative(OverflowStrategy)
    
    
    public func toIntNative(overflowHandling!: OverflowStrategy = Throwing): IntNative

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 返回转换后的 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("800000000000000000", radix: 16)
        let toIntNative = bigInt.toIntNative(overflowHandling: Wrapping)
        println(toIntNative)
    }

运行结果：
    
    
    0

#### [h2]func toString()
    
    
    public func toString(): String

功能：计算并返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的十进制字符串表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的十进制字符串。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(0x400)
        let toString = bigInt.toString()
        println(toString)
    }

运行结果：
    
    
    1024

#### [h2]func toUInt16(OverflowStrategy)
    
    
    public func toUInt16(overflowHandling!: OverflowStrategy = Throwing): UInt16

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 返回转换后的 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("800000000000000000", radix: 16)
        let toUInt16 = bigInt.toUInt16(overflowHandling: Wrapping)
        println(toUInt16)
    }

运行结果：
    
    
    0

#### [h2]func toUInt32(OverflowStrategy)
    
    
    public func toUInt32(overflowHandling!: OverflowStrategy = Throwing): UInt32

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 返回转换后的 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("800000000000000000", radix: 16)
        let toUInt32 = bigInt.toUInt32(overflowHandling: Wrapping)
        println(toUInt32)
    }

运行结果：
    
    
    0

#### [h2]func toUInt64(OverflowStrategy)
    
    
    public func toUInt64(overflowHandling!: OverflowStrategy = Throwing): UInt64

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 返回转换后的 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("-800000000000000000", radix: 16)
        let toUInt64 = bigInt.toUInt64(overflowHandling: Saturating)
        println(toUInt64)
    }

运行结果：
    
    
    0

#### [h2]func toUInt8(OverflowStrategy)
    
    
    public func toUInt8(overflowHandling!: OverflowStrategy = Throwing): UInt8

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 返回转换后的 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("800000000000000000", radix: 16)
        try {
            bigInt.toUInt8(overflowHandling: Throwing)
        } catch (e: OverflowException) {
            println(e.message)
        }
        return
    }

运行结果：
    
    
    Out of range of the UInt8.

#### [h2]func toUIntNative(OverflowStrategy)
    
    
    public func toUIntNative(overflowHandling!: OverflowStrategy = Throwing): UIntNative

功能：将当前 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 对象转化为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 返回转换后的 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.OverflowStrategy
    
    main() {
        let bigInt = BigInt.parse("-800000000000000000", radix: 16)
        let toUIntNative = bigInt.toUIntNative(overflowHandling: Saturating)
        println(toUIntNative)
    }

运行结果：
    
    
    0

#### [h2]operator func !()
    
    
    public operator func !(): BigInt

功能：按位非。将操作数中的二进制位 0 变 1，1 变 0。

返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 按位非的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let no = !bigInt
        println(no)
    }

运行结果：
    
    
    0

#### [h2]operator func !=(BigInt)
    
    
    public operator func !=(other: BigInt): Bool

功能：判不等运算。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 判不等运算的另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 判不等的结果。不等返回 true，相等返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-2")
        println(bigInt != that)
    }

运行结果：
    
    
    true

#### [h2]operator func %(BigInt)
    
    
    public operator func %(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的模运算。

取模运算的行为与基础类型保持一致，即符号与被除数保持一致。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数。除数不得为 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相模后的结果。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-23456789123456789")
        let that = BigInt.parse("-23456789123456789")
        let mod = bigInt % that
        println(mod)
    }

运行结果：
    
    
    0

#### [h2]operator func &(BigInt)
    
    
    public operator func &(other: BigInt): BigInt

功能：按位与。其功能是参与运算的两数各对应的二进位相与。只有对应的两个二进位都为 1 时，结果位才为 1。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 按位与运算的另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的按位与的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("8")
        let that = BigInt.parse("7")
        let and = bigInt & that
        println(and)
    }

运行结果：
    
    
    0

#### [h2]operator func *(BigInt)
    
    
    public operator func *(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 乘法。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 乘数。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相乘后的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-23456789123456789")
        let mul = bigInt * that
        println(mul)
    }

运行结果：
    
    
    23456789123456789

#### [h2]operator func **(UInt64)
    
    
    public operator func **(n: UInt64): BigInt

功能：求 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的 n 次幂。

参数：

  * n: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 指数。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 幂运算结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-2")
        let power = bigInt ** 64
        println(power.toString(radix: 16))
    }

运行结果：
    
    
    10000000000000000

#### [h2]operator func +(BigInt)
    
    
    public operator func +(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 加法。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 加数。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相加后的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("123456789123456789")
        let that = BigInt.parse("-23456789123456789")
        let plus = bigInt + that
        println(plus)
    }

运行结果：
    
    
    100000000000000000

#### [h2]operator func -()
    
    
    public operator func -(): BigInt

功能：求 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的相反数。

返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的相反数。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-23456789123456789")
        let opposite = -bigInt
        println(opposite)
    }

运行结果：
    
    
    23456789123456789

#### [h2]operator func -(BigInt)
    
    
    public operator func -(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 减法。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 减数。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相减后的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("100000000000000000")
        let that = BigInt.parse("-23456789123456789")
        let sub = bigInt - that
        println(sub)
    }

运行结果：
    
    
    123456789123456789

#### [h2]operator func <(BigInt)
    
    
    public operator func <(other: BigInt): Bool

功能：小于比较运算。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 小于比较运算的另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 比较的结果。小于返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-2")
        println(bigInt < that)
    }

运行结果：
    
    
    false

#### [h2]operator func <<(Int64)
    
    
    public operator func <<(n: Int64): BigInt

功能：左移运算。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 左移 n 位，n 需要大于等于 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 左移 n 位的结果。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 入参小于 0 时抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let leftShift = bigInt << 64
        println(leftShift.toString(radix: 16))
    }

运行结果：
    
    
    -10000000000000000

#### [h2]operator func <=(BigInt)
    
    
    public operator func <=(other: BigInt): Bool

功能：小于等于比较运算。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 小于等于比较运算的另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 比较的结果。小于等于返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-2")
        println(bigInt <= that)
    }

运行结果：
    
    
    false

#### [h2]operator func ==(BigInt)
    
    
    public operator func ==(other: BigInt): Bool

功能：判等运算。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 判等运算的另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 判等的结果。相等返回 true，不等返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-2")
        println(bigInt == that)
    }

运行结果：
    
    
    false

#### [h2]operator func >(BigInt)
    
    
    public operator func >(other: BigInt): Bool

功能：大于比较运算。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 大于比较运算的另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 比较的结果。大于返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-2")
        println(bigInt > that)
    }

运行结果：
    
    
    true

#### [h2]operator func >=(BigInt)
    
    
    public operator func >=(other: BigInt): Bool

功能：大于等于比较运算。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 大于等于比较运算的另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 比较的结果。大于等于返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("-2")
        println(bigInt >= that)
    }

运行结果：
    
    
    true

#### [h2]operator func >>(Int64)
    
    
    public operator func >>(n: Int64): BigInt

功能：右移运算。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 右移 n 位，n 需要大于等于 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 右移 n 位的结果。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 入参小于 0 时抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let rightShift = bigInt >> 10000
        println(rightShift)
    }

运行结果：
    
    
    -1

#### [h2]operator func /(BigInt)
    
    
    public operator func /(other: BigInt): BigInt

功能：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 除法。

除法运算的行为与基础类型保持一致，即结果向靠近 0 的方向取整。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 除数。除数不得为 0。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 一个新 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)，它是此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 与另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 相除后的结果。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 除数为 0 抛此异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-23456789123456789")
        let that = BigInt.parse("-23456789123456789")
        let div = bigInt / that
        println(div)
    }

运行结果：
    
    
    1

#### [h2]operator func ^(BigInt)
    
    
    public operator func ^(other: BigInt): BigInt

功能：按位异或。其功能是参与运算的两数各对应的二进位相异或。二进制位结果不相同时，异或结果为 1；二进制位结果相同时，异或结果为 0。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 按位异或运算的另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的按位异或的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("-1")
        let that = BigInt.parse("7")
        let xor = bigInt ^ that
        println(xor)
    }

运行结果：
    
    
    -8

#### [h2]operator func |(BigInt)
    
    
    public operator func |(other: BigInt): BigInt

功能：按位或。其功能是参与运算的两数各对应的二进位相或。只有对应的两个二进位都为 0 时，结果位才为 0。

参数：

  * other: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 按位或运算的另外一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 返回与另一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的按位或的结果。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt.parse("8")
        let that = BigInt.parse("7")
        let or = bigInt | that
        println(or)
    }

运行结果：
    
    
    15

#### [h2]extend BigInt <: Formattable
    
    
    extend BigInt <: Formattable

功能：为 BigInt 扩展 [Formattable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-formattable) 接口，以实现将 BigInt 实例转换为格式化字符串。

父类型：

  * [Formattable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-formattable)



**func format(String)**
    
    
    public func format(fmt: String): String

功能：根据格式化参数将当前 BigInt 类型实例格式化为对应格式的字符串。

参数：

  * fmt: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 格式化参数。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 将当前 BigInt 类型实例格式化后得到的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 fmt 不合法时抛出异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 根据格式化参数将 BigInt 实例格式化为对应格式的字符串 */
        let bigInt = BigInt(12345)
        let formatted = bigInt.format("x")
        println(formatted)
    }

运行结果：
    
    
    3039

#### [h2]extend BigInt <: Integer<BigInt>
    
    
    extend BigInt <: Integer<BigInt>

功能：为 BigInt 类型扩展 [Integer<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces#interface-integert) 接口。

父类型：

  * [Integer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces#interface-integert)<BigInt>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 BigInt 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 true。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 判断 BigInt 类型是否是有符号类型 */
        let signed = BigInt.isSigned()
        println(signed)
    }

运行结果：
    
    
    true

#### [h2]extend BigInt <: Number<BigInt>
    
    
    extend BigInt <: Number<BigInt> {}

功能：为 BigInt 类型扩展 [Number<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces#interface-numbert) 接口。

父类型：

  * [Number](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces#interface-numbert)<BigInt>



#### [h2]extend BigInt <: Parsable<BigInt>
    
    
    extend BigInt <: Parsable<BigInt>

功能：此扩展主要用于实现将 BigInt 类型字面量的字符串转换为 BigInt 结构体的相关操作函数。

父类型：

  * [Parsable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-parsablet)<BigInt>



**static func parse(String)**
    
    
    public static func parse(value: String): BigInt

功能：将字符串解析成一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

字符串的规则如下，即开头是可选的符号（正号或负号），接进制前缀，再接一串字符串表示的数字：

IntegerString : SignString? BaseString? ValueString

  * SignString : + | -

  * BaseString : "0b" | "0B" | "0o" | "0O" | "0x" | "0X" | ""

  * ValueString : Digits

    * Digits: Digit | Digit Digits

      * Digit : '0' ~ '9' | 'A' ~ 'Z' | 'a' ~ 'z'

        * 如果进制前缀是 "0b" 或 "0B"，则 Digit 取值范围应为 '0' ~ '1'；

        * 如果进制前缀是 "0o" 或 "0O"，则 Digit 取值范围应为 '0' ~ '7'；

        * 如果进制前缀是 "0x" 或 "0X"，则 Digit 取值范围应为 '0' ~ '9'、'a' ~ 'z' 或 'A' ~ 'Z'；

        * 如果进制前缀是空，则 Digit 取值范围应为 '0' ~ '9'。




参数：

  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 用于构建 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体的字符串。字符串规则为，开头可选一个正号（+）或者负号（-）。接下来可选的进制前缀，默认为十进制，使用 "0b" 或 "0B" 表示二进制，使用 "0o" 或 "0O" 表示八进制，使用 "0x" 或 "0X" 表示十六进制。再接下来必选非空阿拉伯数字或大小写拉丁字母的字符序列，大小写字符含义一样，'a' 和 'A' 的大小等于十进制的 10，'b' 和 'B' 的大小等于十进制的 11，以此类推。序列中的字符应符合相应进制的字符集要求。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 解析出的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串 value 不符合上述规则，抛此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 将字符串解析成一个 BigInt 结构体 */
        let bigInt = BigInt.parse("12345")
        println(bigInt)
    
        /* 使用十六进制前缀解析 */
        let hexBigInt = BigInt.parse("0x1000")
        println(hexBigInt)
    }

运行结果：
    
    
    12345
    4096

**static func tryParse(String)**
    
    
    public static func tryParse(value: String): ?BigInt

功能：尝试将字符串解析成一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。

字符串的规则如下，即开头是可选的符号（正号或负号），接进制前缀，再接一串字符串表示的数字：

IntegerString : SignString? BaseString? ValueString

  * SignString : + | -

  * BaseString : "0b" | "0B" | "0o" | "0O" | "0x" | "0X" | ""

  * ValueString : Digits

    * Digits: Digit | Digit Digits

      * Digit : '0' ~ '9' | 'A' ~ 'Z' | 'a' ~ 'z'

        * 如果进制前缀是 "0b" 或 "0B"，则 Digit 取值范围应为 '0' ~ '1'；

        * 如果进制前缀是 "0o" 或 "0O"，则 Digit 取值范围应为 '0' ~ '7'；

        * 如果进制前缀是 "0x" 或 "0X"，则 Digit 取值范围应为 '0' ~ '9'、'a' ~ 'z' 或 'A' ~ 'Z'；

        * 如果进制前缀是空，则 Digit 取值范围应为 '0' ~ '9'。




参数：

  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 用于构建 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体的字符串。字符串规则为，开头可选一个正号（+）或者负号（-）。接下来可选的进制前缀，默认为十进制，使用 "0b" 或 "0B" 表示二进制，使用 "0o" 或 "0O" 表示八进制，使用 "0x" 或 "0X" 表示十六进制。再接下来必选非空阿拉伯数字或大小写拉丁字母的字符序列，大小写字符含义一样，'a' 和 'A' 的大小等于十进制的 10，'b' 和 'B' 的大小等于十进制的 11，以此类推。序列中的字符应符合相应进制的字符集要求。



返回值：

  * ?[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 解析出的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体，解析失败则返回 None。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 尝试将字符串解析成一个 BigInt 结构体 */
        let bigInt = BigInt.tryParse("12345")
        println(bigInt)
    
        /* 尝试解析无效字符串 */
        let invalid = BigInt.tryParse("invalid")
        println(invalid)
    }

运行结果：
    
    
    Some(12345)
    None

#### [h2]extend BigInt <: RadixConvertible<BigInt>
    
    
    extend BigInt <: RadixConvertible<BigInt>

功能：此扩展主要用于实现将 BigInt 类型字面量的字符串转换为 BigInt 结构体的相关操作函数。

父类型：

  * [RadixConvertible](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-radixconvertiblet)<BigInt>



**static func parse(String, Int64)**
    
    
    public static func parse(value: String, radix!: Int64): BigInt

功能：根据指定进制将字符串解析成一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体，支持 2 进制到 36 进制。

字符串的规则如下，即开头是可选的符号（正号或负号），接一串字符串表示的数字：

IntegerString : SignString? ValueString

  * SignString : + | -

  * ValueString : Digits

    * Digits: Digit | Digit Digits

      * Digit : '0' ~ '9' | 'A' ~ 'Z' | 'a' ~ 'z'

        * 如果 Digit 在 '0' ~ '9' 内， 需要满足 (Digit - '0') < radix；

        * 如果 Digit 在 'A' ~ 'Z' 内， 需要满足 (Digit - 'A') + 10 < radix；

        * 如果 Digit 在 'a' ~ 'z' 内， 需要满足 (Digit - 'A') + 10 < radix。




参数：

  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 用于构建 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体的字符串。字符串规则为，开头可选一个正号（+）或者负号（-）。接下来必选非空阿拉伯数字或大小写拉丁字母的字符序列，大小写字符含义一样，'a' 和 'A' 的大小等于十进制的 10，'b' 和 'B' 的大小等于十进制的 11，以此类推。序列中的字符大小不得大于等于进制大小。
  * radix!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 进制。字符串所表示的进制，范围为 [2, 36]。



返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 解析出的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果字符串 value 不符合上述规则，或 radix 表示的进制不在 [2, 36] 区间内，抛此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 根据指定进制将字符串解析成一个 BigInt 结构体 */
        let bigInt = BigInt.parse("1010", radix: 2)
        println(bigInt)
    }

运行结果：
    
    
    10

**static func tryParse(String, Int64)**
    
    
    public static func tryParse(value: String, radix!: Int64): ?BigInt

功能：尝试根据指定进制将字符串解析成一个 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体，支持 2 进制到 36 进制。

字符串的规则如下，即开头是可选的符号（正号或负号），接一串字符串表示的数字：

IntegerString : SignString? ValueString

  * SignString : + | -

  * ValueString : Digits

    * Digits: Digit | Digit Digits

      * Digit : '0' ~ '9' | 'A' ~ 'Z' | 'a' ~ 'z'

        * 如果 Digit 在 '0' ~ '9' 内， 需要满足 (Digit - '0') < radix；

        * 如果 Digit 在 'A' ~ 'Z' 内， 需要满足 (Digit - 'A') + 10 < radix；

        * 如果 Digit 在 'a' ~ 'z' 内， 需要满足 (Digit - 'A') + 10 < radix。




参数：

  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 用于构建 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体的字符串。字符串规则为，开头可选一个正号（+）或者负号（-）。接下来必选非空阿拉伯数字或大小写拉丁字母的字符序列，大小写字符含义一样，'a' 和 'A' 的大小等于十进制的 10，'b' 和 'B' 的大小等于十进制的 11，以此类推。序列中的字符大小不得大于等于进制大小。
  * radix!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 进制。字符串所表示的进制，范围为 [2, 36]。



返回值：

  * ?[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 解析出的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 结构体，解析失败时返回 None。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 尝试根据指定进制将字符串解析成一个 BigInt 结构体 */
        let bigInt = BigInt.tryParse("1010", radix: 2)
        println(bigInt)
    
        /* 尝试解析无效字符串 */
        let invalid = BigInt.tryParse("invalid", radix: 2)
        println(invalid)
    }

运行结果：
    
    
    Some(10)
    None

**func toString(Int64)**
    
    
    public func toString(radix!: Int64): String

功能：计算并返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的任意进制字符串表示。

参数：

  * radix!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 进制。字符串所表示的进制，范围为 [2, 36]。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 返回此 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 的 radix 进制字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参 radix 不在 [2, 36] 范围内时，抛出异常。



示例：
    
    
    import std.math.numeric.BigInt
    
    main() {
        let bigInt = BigInt(0x400)
        let toString = bigInt.toString(radix: 2)
        println(toString)
    }

运行结果：
    
    
    10000000000

#### struct Decimal
    
    
    public struct Decimal <: Comparable<Decimal> & Hashable & ToString {
        public init(val: String)
        public init(val: BigInt, scale: Int32)
        public init(val: BigInt)
        public init(val: Int8)
        public init(val: Int16)
        public init(val: Int32)
        public init(val: IntNative)
        public init(val: Int64)
        public init(val: UInt8)
        public init(val: UInt16)
        public init(val: UInt32)
        public init(val: UIntNative)
        public init(val: UInt64)
        public init(val: Float16)
        public init(val: Float32)
        public init(val: Float64)
    }

功能：[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 用于表示任意精度的有符号的十进制数。允许操作过程指定结果精度及舍入规则。提供基础类型 (Int、UInt、[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)、Float 等) 与 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 类型互相转换能力，支持 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象基本属性查询等能力，支持基础数学运算操作，提供对象比较、hash、字符串打印等基础能力。

父类型：

  * [Comparable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-comparablet)<Decimal>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop precision
    
    
    public prop precision: Int64

功能：获取 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 精度值，即无标度整数部分十进制有效数字位数，非负数。如果精度值为 0，表示无精度限制。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 创建一个 Decimal 对象并获取其精度值 */
        let decimal = Decimal(123.456)
        let precision = decimal.precision
        println(precision)
    }

运行结果：
    
    
    49

#### [h2]prop scale
    
    
    public prop scale: Int32

功能：获取 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 标度值。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 创建一个 Decimal 对象并获取其标度值 */
        let decimal = Decimal(123.456)
        let scale = decimal.scale
        println(scale)
    }

运行结果：
    
    
    46

#### [h2]prop sign
    
    
    public prop sign: Int64

功能：获取 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 实例符号值。

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 值大于 0，返回 1；
  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 值等于 0，返回 0；
  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 值小于 0，返回 -1。



类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 创建一个正数 Decimal 对象并获取其符号值 */
        let positiveDecimal = Decimal(123.456)
        let positiveSign = positiveDecimal.sign
        println(positiveSign)
    
        /* 创建一个负数 Decimal 对象并获取其符号值 */
        let negativeDecimal = Decimal(-123.456)
        let negativeSign = negativeDecimal.sign
        println(negativeSign)
    
        /* 创建一个零 Decimal 对象并获取其符号值 */
        let zeroDecimal = Decimal(0)
        let zeroSign = zeroDecimal.sign
        println(zeroSign)
    }

运行结果：
    
    
    1
    -1
    0

#### [h2]prop value
    
    
    public prop value: BigInt

功能：获取 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 无标度整数值，[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 承载。

类型：[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint)

示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 创建一个 Decimal 对象并获取其无标度整数值 */
        let decimal = Decimal(123.456)
        let value = decimal.value
        println(value)
    }

运行结果：
    
    
    1234560000000000030695446184836328029632568359375

#### [h2]init(BigInt)
    
    
    public init(val: BigInt)

功能：通过有符号大整数 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 构建 Deciaml 结构体。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 有符号大整数值。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.Decimal
    
    main() {
        let bigInt = BigInt(24)
        let decimal = Decimal(bigInt)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(BigInt, Int32)
    
    
    public init(val: BigInt, scale: Int32)

功能：通过有符号大整数 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 和标度值构建 Deciaml 结构体。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 有符号大整数值。
  * scale: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 标度值。



示例：
    
    
    import std.math.numeric.BigInt
    import std.math.numeric.Decimal
    
    main() {
        let bigInt = BigInt(24)
        let decimal = Decimal(bigInt, 4)
        println(decimal)
    }

运行结果：
    
    
    0.0024

#### [h2]init(Float16)
    
    
    public init(val: Float16)

功能：通过 16 位有符号浮点数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/ZcbOivaYTH-ldMc29OzPLw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=56C2711944F4CBDB81DD8E99ED7C9C45B9CF919DE4195866AB213B9F95E13BA9)

由于部分十进制小数无法通过二进制浮点数精确表示，此构造函数以精确值构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，传入浮点数值可能与最终构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象字符串打印值不一致。

参数：

  * val: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 16 位有符号二进制浮点数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参为 inf、-inf 或 nan 时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let float16: Float16 = 0.8
        let decimal = Decimal(float16)
        println(decimal)
    }

运行结果：
    
    
    0.7998046875

#### [h2]init(Float32)
    
    
    public init(val: Float32)

功能：通过 32 位有符号浮点数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/BxYT_YpGQ1yp_Hwx5k5vkg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=032BBAE3BA62D38504876A68D45D4CEC98836C86483380A97F4C9D32644F7A8E)

由于部分十进制小数无法通过二进制浮点数精确表示，此构造函数以精确值构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，传入浮点数值可能与最终构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象字符串打印值不一致。

参数：

  * val: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 32 位有符号二进制浮点数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参为 inf、-inf 或 nan 时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let float32: Float32 = 0.8
        let decimal = Decimal(float32)
        println(decimal)
    }

运行结果：
    
    
    0.800000011920928955078125

#### [h2]init(Float64)
    
    
    public init(val: Float64)

功能：通过 64 位有符号浮点数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/rykB9213TMm1YfuM5GIf_w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=C82CEA930AC0519216A41A231AE81A7941829E4E773CB97F90465AAB56C978E4)

由于部分十进制小数无法通过二进制浮点数精确表示，此构造函数以精确值构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，传入浮点数值可能与最终构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象字符串打印值不一致。

参数：

  * val: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 64 位有符号二进制浮点数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参为 inf、-inf 或 nan 时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let float64: Float64 = 0.8
        let decimal = Decimal(float64)
        println(decimal)
    }

运行结果：
    
    
    0.8000000000000000444089209850062616169452667236328125

#### [h2]init(Int16)
    
    
    public init(val: Int16)

功能：通过 16 位有符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 16 位有符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let int16: Int16 = 24
        let decimal = Decimal(int16)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(Int32)
    
    
    public init(val: Int32)

功能：通过 32 位有符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 32 位有符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let int32: Int32 = 24
        let decimal = Decimal(int32)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(Int64)
    
    
    public init(val: Int64)

功能：通过 64 位有符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 64 位有符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let int64: Int64 = 24
        let decimal = Decimal(int64)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(Int8)
    
    
    public init(val: Int8)

功能：通过 8 位有符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 8 位有符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let int8: Int8 = 24
        let decimal = Decimal(int8)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(IntNative)
    
    
    public init(val: IntNative)

功能：通过 32 位或 64 位 (具体长度与平台相关) 有符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 32 位或 64 位有符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let intnative: IntNative = 24
        let decimal = Decimal(intnative)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(String) (deprecated)
    
    
    public init(val: String)

功能：通过规定格式字符串构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体。默认采用精度值为 0，即无限精度进行构建。字符串需满足如下格式，即开头可选的符号（正号或负号），接 ValueString 字符串，再接可选的 ExponentString 字符串：

[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 字符串: (SignString)? ValueString (ExponentString)?

  * SignString: + | -

  * ValueString: IntegerPart.(FractionPart)? | .FractionPart | IntegerPart

    * IntegerPart：Digits

    * FractionPart：Digits

    * Digits: Digit | Digit Digits

      * Digit：'0' ~ '9'
  * ExponentString: ExponentIndicator (SignString)? IntegerPart

    * ExponentIndicator：e | E



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/6vW6OdIjSPq0iCPQtu2IHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=1BCBE5A2C119B822A110E931136F6ED91397B329C1B0632BEEE91B927B09FA82)

未来版本即将废弃，使用 parse(String) 替代。

参数：

  * val: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 规定格式字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参字符串不满足规定格式时，抛此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当构建值标度溢出时，抛此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        /* 使用字符串构造函数创建 Decimal 对象 */
        let decimal = Decimal("-123.456e2")
        println(decimal)
    }

运行结果：
    
    
    -12345.6

#### [h2]init(UInt16)
    
    
    public init(val: UInt16)

功能：通过 16 位无符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 16 位无符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let uint16: UInt16 = 24
        let decimal = Decimal(uint16)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(UInt32)
    
    
    public init(val: UInt32)

功能：通过 32 位无符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 32 位无符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let uint32: UInt32 = 24
        let decimal = Decimal(uint32)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(UInt64)
    
    
    public init(val: UInt64)

功能：通过 64 位无符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 64 位无符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let uint64: UInt64 = 24
        let decimal = Decimal(uint64)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(UInt8)
    
    
    public init(val: UInt8)

功能：通过 8 位无符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 8 位无符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let uint8: UInt8 = 24
        let decimal = Decimal(uint8)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]init(UIntNative)
    
    
    public init(val: UIntNative)

功能：通过 32 位或 64 位 (具体长度与平台相关) 无符号整数构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。默认采用精度值为 0，即无限精度进行构建。

参数：

  * val: [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 32 位或 64 位无符号整数。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let uintnative: UIntNative = 24
        let decimal = Decimal(uintnative)
        println(decimal)
    }

运行结果：
    
    
    24

#### [h2]func compare(Decimal)
    
    
    public func compare(d: Decimal): Ordering

功能：比较当前对象与入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象。



返回值：

  * [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 返回比较结果，当前对象小于入参时，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).LT，大于入参时，返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).GT，否则返回 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(-5)
        let B = Decimal(3)
    
        let C = A.compare(B)
        println(C)
    }

运行结果：
    
    
    Ordering.LT

#### [h2]func divAndMod(Decimal)
    
    
    public func divAndMod(d: Decimal): (BigInt, Decimal)

功能：除法取商和余数运算，除以入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回整数商值和余数值。结果保留实际精度值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 除数对象。



返回值：

  * ([BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint), [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal)) - 生成一个元组对象，分别用于存储整数商值结果和余数结果值。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 当除数为 0 时，抛出此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当除法结果值范围超过 [-(maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)), maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)] 时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main(): Unit {
        let A = Decimal(10)
        let B = Decimal(3)
        let result = A.divAndMod(B)
        println("商: ${result[0]}, 余数: ${result[1]}")
    }

运行结果：
    
    
    商: 3, 余数: 1

#### [h2]func divAndRem(Decimal) (deprecated)
    
    
    public func divAndRem(d: Decimal): (BigInt, Decimal)

功能：除法取商和余数运算，除以入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回整数商值和余数值。结果保留实际精度值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/18fFuhUuTJSreMgXVZgnAA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=6ED64B52676BC7F53BFFA623011356EA1F0EDDC39E23F4554E26AA4F9D53FC25)

未来版本即将废弃，使用 divAndMod(Decimal) 替代。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 除数对象。



返回值：

  * ([BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint), [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal)) - 生成一个元组对象，分别用于存储整数商值结果和余数结果值。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 当除数为 0 时，抛出此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当除法结果值范围超过 [-(maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)), maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)] 时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main(): Unit {
        let A = Decimal(10)
        let B = Decimal(3)
        let result = A.divAndRem(B)
        println("商: ${result[0]}, 余数: ${result[1]}")
    }

运行结果：
    
    
    商: 3, 余数: 1

#### [h2]func divWithPrecision(Decimal, Int64, RoundingMode)
    
    
    public func divWithPrecision(d: Decimal, precision: Int64, roundingMode!: RoundingMode = HalfEven): Decimal

功能：除法运算，支持自定义运算精度和舍入方式，除以入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回结果值，如果结果精度超过 precision 指定精度，则根据指定的精度对除法运算结果进行舍入。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 除数对象。
  * precision: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 精度值。
  * roundingMode!: [RoundingMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_enums#enum-roundingmode) \- 舍入规则。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储除法运算结果值。



异常：

  * [ArithmeticException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-arithmeticexception) \- 当除数为 0 时，抛出此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当除法结果值范围超过 [-(maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)), maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)] 时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(2)
        let B = Decimal(3)
        let C = A.divWithPrecision(B, 0)
        println("C = ${C}")
    }

运行结果：
    
    
    C = 0.6666666666666666666666666666666667

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取当前对象哈希值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回当前对象哈希值。



示例：
    
    
    import std.math.numeric.Decimal
    
    main() {
        let decimal = Decimal(24)
        let hashcode = decimal.hashCode()
        println(hashcode)
    }

运行结果：
    
    
    744

#### [h2]func isInteger()
    
    
    public func isInteger(): Bool

功能：判断当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象是否为整数。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回当前对象是否为整数判断结果。当前对象为整数时返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(100)
        println("${A}.isInteger() = ${A.isInteger()}")
    }

运行结果：
    
    
    100.isInteger() = true

#### [h2]func powWithPrecision(Int64, Int64, RoundingMode)
    
    
    public func powWithPrecision(n: Int64, precision: Int64, roundingMode!: RoundingMode = RoundingMode.HalfEven): Decimal

功能：乘方运算，支持自定义运算精度和舍入方式，获取当前对象为底数，入参 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 为指数的乘方运算结果，如果运算结果超过 precision 指定的精度，则根据指定的精度对乘方结果进行舍入。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 乘方运算的指数值。
  * precision: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 精度值。
  * roundingMode!: [RoundingMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_enums#enum-roundingmode) \- 舍入规则。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储乘方运算结果值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当乘方运算结果标度值溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    import std.math.*
    
    main(): Unit {
        let A = Decimal(2.5)
        println("A.powWithPrecision(3, 0) = ${A.powWithPrecision(3, 0, roundingMode: HalfEven)}")
    }

运行结果：
    
    
    A.powWithPrecision(3, 0) = 15.625

#### [h2]func removeTrailingZeros()
    
    
    public func removeTrailingZeros(): Decimal

功能：对当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象移除尾部零，不改变对象数值。

返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 新的无尾部零的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(1.00)
        println("A.removeTrailingZeros() = ${A.removeTrailingZeros()}")
    }

运行结果：
    
    
    A.removeTrailingZeros() = 1

#### [h2]func reScale(Int32, RoundingMode)
    
    
    public func reScale(newScale: Int32, roundingMode!: RoundingMode = HalfEven): Decimal

功能：调整 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象标度值，允许指定舍入规则，返回标度调整后新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。

参数：

  * newScale: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 新的标度值。
  * roundingMode!: [RoundingMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_enums#enum-roundingmode) \- 舍入规则。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 新的标度值的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(1.234568)
        println("A.reScale(3) = ${A.reScale(3)}")
    }

运行结果：
    
    
    A.reScale(3) = 1.235

#### [h2]func roundWithPrecision(Int64, RoundingMode)
    
    
    public func roundWithPrecision(precision: Int64, roundingMode!: RoundingMode = RoundingMode.HalfEven): Decimal

功能：按照指定舍入精度和舍入规则对当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象进行舍入操作。

参数：

  * precision: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 精度值。
  * roundingMode!: [RoundingMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_enums#enum-roundingmode) \- 舍入规则。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 舍入操作生成的新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当舍入操作结果标度值溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    import std.math.*
    
    main(): Unit {
        let A = Decimal(1.0)
        println("A.roundWithPrecision(1.0) = ${A.roundWithPrecision(0, roundingMode: HalfEven)}")
        let B = Decimal(0.1f16).roundWithPrecision(5, roundingMode: Up)
        println("B = ${B}")
    }

运行结果：
    
    
    A.roundWithPrecision(1.0) = 1
    B = 0.099976

#### [h2]func scaleUnit()
    
    
    public func scaleUnit(): Decimal

功能：对当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象返回标度单位，即数值为 1 ，标度值与当前对象相等的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。

返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 标度单位 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(100)
        println("A.scaleUnit() = ${A.scaleUnit()}")
    }

运行结果：
    
    
    A.scaleUnit() = 1

#### [h2]func shiftPoint(Int32)
    
    
    public func shiftPoint(n: Int32): Decimal

功能：移动当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象小数点 abs(n) 位返回结果对象，当 n 为正数时，左移小数点，n 为负数时，右移小数点，n 为零时，返回当前对象。

参数：

  * n: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 指定小数点移动位数及方向。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 对当前对象小数点移动指定位数后生成新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(25)
        println("A.shiftPoint(1) = ${A.shiftPoint(1)}")
    }

运行结果：
    
    
    A.shiftPoint(1) = 2.5

#### [h2]func sqrtWithPrecision(Int64, RoundingMode)
    
    
    public func sqrtWithPrecision(precision: Int64, roundingMode!: RoundingMode = RoundingMode.HalfEven): Decimal

功能：开方运算，支持自定义运算精度和结果舍入方式，获取当前对象开方结果，如果运算结果超过 presision 指定的精度，则根据指定的精度对开方结果进行舍入。

参数：

  * precision: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 精度值。
  * roundingMode!: [RoundingMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_enums#enum-roundingmode) \- 舍入规则。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 返回入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 的算术平方根，根据输入精度和舍入方式进行取整。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果被计算平方根的对象为负数，则抛此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当计算平方根操作结果标度值溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let n: Decimal = Decimal.parse("2")
        let s = n.sqrtWithPrecision(2)
        println(s)
    }

运行结果：
    
    
    1.4

#### [h2]func toBigInt()
    
    
    public func toBigInt(): BigInt

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 类型。

返回值：

  * [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) \- 转换后的 [BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 值。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123.456)
        let bigInt = decimal.toBigInt()
        println(bigInt)
    }

运行结果：
    
    
    123

#### [h2]func toEngString()
    
    
    public func toEngString(): String

功能：以工程计数法的形式打印输出 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，指数为 3 的倍数, 当值小于 0 时以 “-” 开头后跟十进制数字，大于等于 0 时，直接打印输出数字，不额外添加 “+”。指数小于 0 时同样遵循以上规则。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 工程计数法形式的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 字符串。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123456.789)
        let engString = decimal.toEngString()
        println(engString)
    }

运行结果：
    
    
    123.456789000000004307366907596588134765625E3

#### [h2]func toFloat16()
    
    
    public func toFloat16(): Float16

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 转换后的 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 值，溢出时，当前值为正数，返回 inf，当前值为负数，返回 -inf。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(3.14159)
        let float16 = decimal.toFloat16()
        println(float16)
    }

运行结果：
    
    
    3.140625

#### [h2]func toFloat32()
    
    
    public func toFloat32(): Float32

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 转换后的 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 值，溢出时，当前值为正数，返回 inf，当前值为负数，返回 -inf。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(3.141592653589793)
        let float32 = decimal.toFloat32()
        println(float32)
    }

运行结果：
    
    
    3.141593

#### [h2]func toFloat64()
    
    
    public func toFloat64(): Float64

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 转换后的 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 值，溢出时，当前值为正数，返回 inf，当前值为负数，返回 -inf。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(3.141592653589793)
        let float64 = decimal.toFloat64()
        println(float64)
    }

运行结果：
    
    
    3.141593

#### [h2]func toInt16(OverflowStrategy)
    
    
    public func toInt16(overflowHandling!: OverflowStrategy = Throwing): Int16

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 转换后的 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123.456)
        let int16Value = decimal.toInt16(overflowHandling: Saturating)
        println(int16Value)
    }

运行结果：
    
    
    123

#### [h2]func toInt32(OverflowStrategy)
    
    
    public func toInt32(overflowHandling!: OverflowStrategy = Throwing): Int32

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 转换后的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123456.789)
        let int32Value = decimal.toInt32(overflowHandling: Saturating)
        println(int32Value)
    }

运行结果：
    
    
    123456

#### [h2]func toInt64(OverflowStrategy)
    
    
    public func toInt64(overflowHandling!: OverflowStrategy = Throwing): Int64

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 转换后的 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123456789.987)
        let int64Value = decimal.toInt64(overflowHandling: Wrapping)
        println(int64Value)
    }

运行结果：
    
    
    123456789

#### [h2]func toInt8(OverflowStrategy)
    
    
    public func toInt8(overflowHandling!: OverflowStrategy = Throwing): Int8

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 转换后的 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123.456)
        let int8Value = decimal.toInt8(overflowHandling: Throwing)
        println(int8Value)
    }

运行结果：
    
    
    123

#### [h2]func toIntNative(OverflowStrategy)
    
    
    public func toIntNative(overflowHandling!: OverflowStrategy = Throwing): IntNative

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 转换后的 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(12345.6789)
        let intNativeValue = decimal.toIntNative(overflowHandling: Saturating)
        println(intNativeValue)
    }

运行结果：
    
    
    12345

示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(6.25)
        println("A.toInt8() = ${A.toInt8()}")
        println("A.toInt16() = ${A.toInt16()}")
        println("A.toInt32() = ${A.toInt32()}")
        println("A.toInt64() = ${A.toInt64()}")
        println("A.toIntNative() = ${A.toIntNative()}")
    }

运行结果：
    
    
    A.toInt8() = 6
    A.toInt16() = 6
    A.toInt32() = 6
    A.toInt64() = 6
    A.toIntNative() = 6

#### [h2]func toSciString()
    
    
    public func toSciString(): String

功能：以科学计数法的形式打印输出 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，当值小于 0 时以 “-” 开头后跟十进制数字，大于等于 0 时，直接打印输出数字，不额外添加 “+”。指数小于 0 时同样遵循以上规则。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 科学计数法形式的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 字符串。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(6.25)
        println("A.toFloat16() = ${A.toFloat16()}")
        println("A.toFloat32() = ${A.toFloat32()}")
        println("A.toFloat64() = ${A.toFloat64()}")
        println("A.toBigInt() = ${A.toBigInt()}")
        println("A.toEngString() = ${A.toEngString()}")
        println("A.toSciString() = ${A.toSciString()}")
    }

运行结果：
    
    
    A.toFloat16() = 6.250000
    A.toFloat32() = 6.250000
    A.toFloat64() = 6.250000
    A.toBigInt() = 6
    A.toEngString() = 6.25E0
    A.toSciString() = 6.25E0

#### [h2]func toString()
    
    
    public func toString(): String

功能：以不带指数形式打印输出 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，小于 0 时以 “-” 开头后跟十进制数字，大于等于 0 时，直接打印输出数字，不额外添加 “+”。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 不带指数形式的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 字符串。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(-5)
        let B = Decimal(3 ** 5)
    
        println("A.hashCode() = ${A.hashCode()}")
        println("B.toString() = ${B.toString()}")
    }

运行结果：
    
    
    A.hashCode() = 155
    B.toString() = 243

#### [h2]func toUInt16(OverflowStrategy)
    
    
    public func toUInt16(overflowHandling!: OverflowStrategy = Throwing): UInt16

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 转换后的 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(12345.6789)
        let uint16Value = decimal.toUInt16(overflowHandling: Saturating)
        println(uint16Value)
    }

运行结果：
    
    
    12345

#### [h2]func toUInt32(OverflowStrategy)
    
    
    public func toUInt32(overflowHandling!: OverflowStrategy = Throwing): UInt32

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 转换后的 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123456789.987)
        let uint32Value = decimal.toUInt32(overflowHandling: Wrapping)
        println(uint32Value)
    }

运行结果：
    
    
    123456789

#### [h2]func toUInt64(OverflowStrategy)
    
    
    public func toUInt64(overflowHandling!: OverflowStrategy = Throwing): UInt64

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 转换后的 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123456789012345.6789)
        let uint64Value = decimal.toUInt64(overflowHandling: Throwing)
        println(uint64Value)
    }

运行结果：
    
    
    123456789012345

#### [h2]func toUInt8(OverflowStrategy)
    
    
    public func toUInt8(overflowHandling!: OverflowStrategy = Throwing): UInt8

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 转换后的 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123.456)
        let uint8Value = decimal.toUInt8(overflowHandling: Saturating)
        println(uint8Value)
    }

运行结果：
    
    
    123

#### [h2]func toUIntNative(OverflowStrategy)
    
    
    public func toUIntNative(overflowHandling!: OverflowStrategy = Throwing): UIntNative

功能：将当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象转化为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型，支持自定义溢出策略。

参数：

  * overflowHandling!: [OverflowStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums#enum-overflowstrategy) \- 转换溢出策略。



返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 转换后的 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当不指定溢出策略或溢出策略为 throwing 转换溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(12345.6789)
        let uintNativeValue = decimal.toUIntNative(overflowHandling: Wrapping)
        println(uintNativeValue)
    }

运行结果：
    
    
    12345

#### [h2]operator func !=(Decimal)
    
    
    public operator func !=(d: Decimal): Bool

功能：不等比较运算，不等运算符重载，判断入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象与当前对象是否不相等，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回不等比较运算结果。当前对象不等于入参时，返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(-5)
        let B = Decimal(3)
    
        println("-A = ${-A}")
        println("A <= B = ${A <= B}")
        println("A != B = ${A != B}")
    }

运行结果：
    
    
    -A = 5
    A <= B = true
    A != B = true

#### [h2]operator func *(Decimal)
    
    
    public operator func *(d: Decimal): Decimal

功能：乘法运算，乘法运算符重载，乘以入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回结果值。保留乘法运算结果实际精度值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 乘数对象。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储乘法运算结果值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当两个乘数标度值相加溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(2)
        let B = Decimal(3)
        let C = A * B
        println("C = ${C}")
    }

运行结果：
    
    
    C = 6

#### [h2]operator func **(Int64)
    
    
    public operator func **(n: Int64): Decimal

功能：乘方运算，乘方运算符重载，获取当前对象为底数，入参 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 为指数的乘方运算结果，其中指数为入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象的整数部分。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/CxbWpBuUTaCdY0TPe43U7w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=64EDB94B5FB7ECA061EB9AE24987D241837E7B649BC36F2FE66F45FBAB98C825)

指数为负值且结果为无限小数场景时，默认采用 IEEE 754-2019 decimal128 对结果进行舍入。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 乘方运算的指数值。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储乘方运算结果值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当乘方运算结果标度值溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(2.5)
        println("A ** 3 = ${A ** 3}")
    }

运行结果：
    
    
    A ** 3 = 15.625

#### [h2]operator func +(Decimal)
    
    
    public operator func +(d: Decimal): Decimal

功能：加法运算，加法运算符重载，加上入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回结果值。结果保留实际精度值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 加数对象。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储加法结果值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当两个加数标度值相减溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(2)
        let B = Decimal(3)
        let C = A + B
        println("C = ${C}")
    }

运行结果：
    
    
    C = 5

#### [h2]operator func -()
    
    
    public operator func -(): Decimal

功能：取反运算，一元负数运算符重载，对当前 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象取反，返回结果值。保留取反运算结果实际精度值。

返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储取反结果值。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123.456)
        let negated = -decimal
        println(negated)
    }

运行结果：
    
    
    -123.4560000000000030695446184836328029632568359375

#### [h2]operator func -(Decimal)
    
    
    public operator func -(d: Decimal): Decimal

功能：减法运算，减法运算符重载，减去入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回结果值。保留减法运算结果实际精度值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 减数对象。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储减法运算结果值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当被减数与减数标度值相减溢出时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(2)
        let B = Decimal(3)
        let C = A - B
        println("C = ${C}")
    }

运行结果：
    
    
    C = -1

#### [h2]operator func <(Decimal)
    
    
    public operator func <(d: Decimal): Bool

功能：小于比较运算，小于运算符重载，判断入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象是否小于当前对象，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回小于比较运算结果。当前对象小于入参时，返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal1 = Decimal(123.456)
        let decimal2 = Decimal(789.123)
        let result = decimal1 < decimal2
        println(result)
    }

运行结果：
    
    
    true

#### [h2]operator func <=(Decimal)
    
    
    public operator func <=(d: Decimal): Bool

功能：小于等于比较运算，小于等于运算符重载，判断入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象是否小于等于当前对象，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回小于等于比较运算结果。当前对象小于等于入参时，返回 true，否则返回 false



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal1 = Decimal(123.456)
        let decimal2 = Decimal(123.456)
        let result = decimal1 <= decimal2
        println(result)
    }

运行结果：
    
    
    true

#### [h2]operator func ==(Decimal)
    
    
    public operator func ==(d: Decimal): Bool

功能：等于比较运算，等于运算符重载，判断入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象与当前对象是否相等，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回等于比较运算结果。当前对象等于入参时，返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal1 = Decimal(123.456)
        let decimal2 = Decimal(123.456)
        let result = decimal1 == decimal2
        println(result)
    }

运行结果：
    
    
    true

#### [h2]operator func >(Decimal)
    
    
    public operator func >(d: Decimal): Bool

功能：大于比较运算，大于运算符重载，判断入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象是否大于当前对象，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回大于比较运算结果。当前对象大于入参时，返回 true，否则返回 false



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal1 = Decimal(789.123)
        let decimal2 = Decimal(123.456)
        let result = decimal1 > decimal2
        println(result)
    }

运行结果：
    
    
    true

#### [h2]operator func >=(Decimal)
    
    
    public operator func >=(d: Decimal): Bool

功能：大于等于比较运算，大于等于运算符重载，判断入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象是否大于等于当前对象，返回比较结果值。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 待比较对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 返回大于等于比较运算结果。当前对象大于等于入参时，返回 true，否则返回 false。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal1 = Decimal(789.123)
        let decimal2 = Decimal(789.123)
        let result = decimal1 >= decimal2
        println(result)
    }

运行结果：
    
    
    true

#### [h2]operator func /(Decimal)
    
    
    public operator func /(d: Decimal): Decimal

功能：除法运算，除法运算符重载，除以入参 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，返回结果值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/xvMmwCVUR823ATkVx7Ijow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111102Z&HW-CC-Expire=86400&HW-CC-Sign=330CD3D1D0C0C0BA154878D8BD20D8B84EEDF0238E6749835FF1EE4C0406EA40)

结果为无限小数场景时，默认采用 IEEE 754-2019 decimal128 对结果进行舍入。

参数：

  * d: [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 除数对象。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 生成一个新的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 对象，用于存储除法运算结果值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当除数为 0 时，抛出此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当除法结果值范围超过 [-(maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)), maxValue(precision) * (10 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).MAX)] 时，抛出此异常。



示例：
    
    
    import std.math.numeric.Decimal
    
    main(): Unit {
        let A = Decimal(2)
        let B = Decimal(3)
        let C = A / B
        println("C = ${C}")
    }

运行结果：
    
    
    C = 0.6666666666666666666666666666666667

#### [h2]extend Decimal <: Formattable
    
    
    extend Decimal <: Formattable

功能：为 Decimal 扩展 [Formattable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-formattable) 接口，以实现将 Decimal 实例转换为格式化字符串。

父类型：

  * [Formattable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-formattable)



**func format(String)**
    
    
    public func format(fmt: String): String

功能：根据格式化参数将当前 Decimal 类型实例格式化为对应格式的字符串。

参数：

  * fmt: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 格式化参数。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 将当前 Decimal 类型实例格式化后得到的字符串。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 fmt 不合法时抛出异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimal = Decimal(123.456)
        // 使用 format 函数格式化 Decimal
        let formatted = decimal.format("e")
        println(formatted)
    }

运行结果：
    
    
    1.234560e+02

#### [h2]extend Decimal <: Number<Decimal>
    
    
    extend Decimal <: Number<Decimal> {}

功能：为 Decimal 类型扩展 [Number<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces#interface-numbert) 接口。

父类型：

  * [Number](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces#interface-numbert)<Decimal>



#### [h2]extend Decimal <: Parsable<Decimal>
    
    
    extend Decimal <: Parsable<Decimal>

功能：此扩展主要用于实现将 Decimal 类型字面量的字符串转换为 Decimal 结构体的相关操作函数。

父类型：

  * [Parsable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-convert_package_interfaces#interface-parsablet)<Decimal>



**static func parse(String)**
    
    
    public static func parse(value: String): Decimal

功能：通过规定格式字符串构�� [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体。默认采用精度值为 0，即无限精度进行构建。字符串需满足如下格式，即开头可选的符号（正号或负号），接 ValueString 字符串，再接可选的 ExponentString 字符串：

[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 字符串: SignString? ValueString ExponentString?

  * SignString: + | -

  * ValueString: IntegerPart.(FractionPart)? | .FractionPart | IntegerPart

    * IntegerPart：Digits

    * FractionPart：Digits

    * Digits: Digit | Digit Digits

      * Digit：'0' ~ '9'
  * ExponentString: ExponentIndicator (SignString)? IntegerPart

    * ExponentIndicator：e | E



参数：

  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 规定格式字符串。



返回值：

  * [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 解析出的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当入参字符串不满足规定格式时，抛此异常。
  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当构建值标度溢出时，抛此异常。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimalString = "123.456e2"
        let decimal = Decimal.parse(decimalString)
        println(decimal)
    }

运行结果：
    
    
    12345.6

**static func tryParse(String)**
    
    
    public static func tryParse(value: String): ?Decimal

功能：尝试通过规定格式字符串构建 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体。默认采用精度值为 0，即无限精度进行构建。字符串需满足如下格式，即开头可选的符号（正号或负号），接 ValueString 字符串，再接可选的 ExponentString 字符串：

[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 字符串: SignString? ValueString ExponentString?

  * SignString: + | -

  * ValueString: IntegerPart.(FractionPart)? | .FractionPart | IntegerPart

    * IntegerPart：Digits

    * FractionPart：Digits

    * Digits: Digit | Digit Digits

      * Digit：'0' ~ '9'
  * ExponentString: ExponentIndicator (SignString)? IntegerPart

    * ExponentIndicator：e | E



参数：

  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 规定格式字符串。



返回值：

  * ?[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) \- 解析出的 [Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 结构体，解析失败则返回 None。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let decimalString = "123.456e2"
        let decimal = Decimal.tryParse(decimalString)
        match (decimal) {
            case Some(d) => println(d)
            case None => println("Failed to parse the string")
        }
    }

运行结果：
    
    
    12345.6
