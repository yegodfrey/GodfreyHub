---
name: cangjie-references/cj-math_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math / 函数
---

# 函数

#### func abs(Float16)
    
    
    public func abs(x: Float16): Float16

功能：求一个半精度浮点数的绝对值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的绝对值。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Float16 = -23.0
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23.000000

#### func abs(Float32)
    
    
    public func abs(x: Float32): Float32

功能：求一个单精度浮点数的绝对值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的绝对值。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Float32 = -23.0
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23.000000

#### func abs(Float64)
    
    
    public func abs(x: Float64): Float64

功能：求一个双精度浮点数的绝对值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的绝对值。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Float64 = -23.0
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23.000000

#### func abs(Int16)
    
    
    public func abs(x: Int16): Int16

功能：求一个 16 位有符号整数的绝对值。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的 16 位有符号整数。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 返回传入参数的绝对值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当输入参数是有符号整数的最小值，抛出异常。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Int16 = -23
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23

示例：
    
    
    import std.math.abs
    
    main(): Unit {
        try {
            let n = Int16(-2 ** 15)
            let abs: Int16 = abs(n)
            println(abs)
        } catch (e: OverflowException) {
            println("异常：输入参数是有符号整数的最小值")
        }
    }

运行结果：
    
    
    异常：输入参数是有符号整数的最小值

#### func abs(Int32)
    
    
    public func abs(x: Int32): Int32

功能：求一个 32 位有符号整数的绝对值。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的 32 位有符号整数。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回传入参数的绝对值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当输入参数是有符号整数的最小值，抛出异常。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Int32 = -23
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23

#### func abs(Int64)
    
    
    public func abs(x: Int64): Int64

功能：求一个 64 位有符号整数的绝对值。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的 64 位有符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的绝对值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当输入参数是有符号整数的最小值，抛出异常。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Int64 = -23
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23

#### func abs(Int8)
    
    
    public func abs(x: Int8): Int8

功能：求一个 8 位有符号整数的绝对值。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的 8 位有符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的绝对值。



异常：

  * [OverflowException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-overflowexception) \- 当输入参数是有符号整数的最小值，抛出异常。



示例：
    
    
    import std.math.abs
    
    main() {
        let n: Int8 = -23
        let abs = abs(n)
        println(abs)
    }

运行结果：
    
    
    23

#### func acos(Float16)
    
    
    public func acos(x: Float16): Float16

功能：计算半精度浮点数的反余弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。-1.0 <= x <= 1.0。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的反余弦函数值，单位为弧度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于 1.0 或小于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.acos
    
    main() {
        let n: Float16 = 1.0
        let acos = acos(n)
        println(acos)
    }

运行结果：
    
    
    0.000000

以下示例将抛出异常：
    
    
    import std.math.acos
    
    main(): Unit {
        let n = -1.5
        let acos = acos(n)
        println(acos)
    }

#### func acos(Float32)
    
    
    public func acos(x: Float32): Float32

功能：计算单精度浮点数的反余弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。-1.0 <= x <= 1.0。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的反余弦函数值，单位为弧度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于 1.0 或小于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.acos
    
    main() {
        let n: Float32 = 1.0
        let acos = acos(n)
        println(acos)
    }

运行结果：
    
    
    0.000000

#### func acos(Float64)
    
    
    public func acos(x: Float64): Float64

功能：计算双精度浮点数的反余弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。-1.0 <= x <= 1.0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的反余弦函数值，单位为弧度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于 1.0 或小于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.acos
    
    main() {
        let n: Float64 = 1.0
        let acos = acos(n)
        println(acos)
    }

运行结果：
    
    
    0.000000

#### func acosh(Float16)
    
    
    public func acosh(x: Float16): Float16

功能：计算半精度浮点数的反双曲余弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的反双曲余弦函数值。x >= 1.0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 小于 1.0 时，抛出异常。



示例：
    
    
    import std.math.acosh
    
    main() {
        let n: Float16 = 1.0
        let acosh = acosh(n)
        println(acosh)
    }

运行结果：
    
    
    0.000000

以下示例将抛出异常：
    
    
    import std.math.acosh
    
    main(): Unit {
        let n = 0.4
        let acosh = acosh(n)
        println(acosh)
    }

#### func acosh(Float32)
    
    
    public func acosh(x: Float32): Float32

功能：计算单精度浮点数的反双曲余弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。x >= 1.0。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的反双曲余弦函数值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 小于 1.0 时，抛出异常。



示例：
    
    
    import std.math.acosh
    
    main() {
        let n: Float32 = 1.0
        let acosh = acosh(n)
        println(acosh)
    }

运行结果：
    
    
    0.000000

#### func acosh(Float64)
    
    
    public func acosh(x: Float64): Float64

功能：计算双精度浮点数的反双曲余弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。x >= 1.0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的反双曲余弦函数值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 小于 1.0 时，抛出异常。



示例：
    
    
    import std.math.acosh
    
    main() {
        let n: Float64 = 1.0
        let acosh = acosh(n)
        println(acosh)
    }

运行结果：
    
    
    0.000000

#### func asin(Float16)
    
    
    public func asin(x: Float16): Float16

功能：计算半精度浮点数的反正弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。-1.0 <= x <= 1.0。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的反正弦函数值，单位为弧度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于 1.0 或小于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.asin
    
    main() {
        let n: Float16 = 0.0
        let asin = asin(n)
        println(asin)
    }

运行结果：
    
    
    0.000000

以下示例将抛出异常：
    
    
    import std.math.asin
    
    main(): Unit {
        let n = 1.4
        let asin = asin(n)
        println(asin)
    }

#### func asin(Float32)
    
    
    public func asin(x: Float32): Float32

功能：计算单精度浮点数的反正弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。-1.0 <= x <= 1.0。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的反正弦函数值，单位为弧度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于 1.0 或小于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.asin
    
    main() {
        let n: Float32 = 0.0
        let asin = asin(n)
        println(asin)
    }

运行结果：
    
    
    0.000000

#### func asin(Float64)
    
    
    public func asin(x: Float64): Float64

功能：计算双精度浮点数的反正弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。-1.0 <= x <= 1.0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的反正弦函数值，单位为弧度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于 1.0 或小于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.asin
    
    main() {
        let n: Float64 = 0.0
        let asin = asin(n)
        println(asin)
    }

运行结果：
    
    
    0.000000

#### func asinh(Float16)
    
    
    public func asinh(x: Float16): Float16

功能：计算半精度浮点数的反双曲正弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的反双曲正弦函数值。



示例：
    
    
    import std.math.asinh
    
    main() {
        let n: Float16 = 0.0
        let asinh = asinh(n)
        println(asinh)
    }

运行结果：
    
    
    0.000000

#### func asinh(Float32)
    
    
    public func asinh(x: Float32): Float32

功能：计算单精度浮点数的反双曲正弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的反双曲正弦函数值。



示例：
    
    
    import std.math.asinh
    
    main() {
        let n: Float32 = 0.0
        let asinh = asinh(n)
        println(asinh)
    }

运行结果：
    
    
    0.000000

#### func asinh(Float64)
    
    
    public func asinh(x: Float64): Float64

功能：计算双精度浮点数的反双曲正弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的反双曲正弦函数值。



示例：
    
    
    import std.math.asinh
    
    main() {
        let n: Float64 = 0.0
        let asinh = asinh(n)
        println(asinh)
    }

运行结果：
    
    
    0.000000

#### func atan(Float16)
    
    
    public func atan(x: Float16): Float16

功能：计算半精度浮点数的反正切函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的反正切函数值，单位为弧度。



示例：
    
    
    import std.math.atan
    
    main() {
        let n: Float16 = 0.0
        let atan = atan(n)
        println(atan)
    }

运行结果：
    
    
    0.000000

#### func atan(Float32)
    
    
    public func atan(x: Float32): Float32

功能：计算单精度浮点数的反正切函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的反正切函数值，单位为弧度。



示例：
    
    
    import std.math.atan
    
    main() {
        let n: Float32 = 0.0
        let atan = atan(n)
        println(atan)
    }

运行结果：
    
    
    0.000000

#### func atan(Float64)
    
    
    public func atan(x: Float64): Float64

功能：计算双精度浮点数的反正切函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的反正切函数值，单位为弧度。



示例：
    
    
    import std.math.atan
    
    main() {
        let n: Float64 = 0.0
        let atan = atan(n)
        println(atan)
    }

运行结果：
    
    
    0.000000

#### func atan2(Float16, Float16)
    
    
    public func atan2(y: Float16, x: Float16): Float16

功能：计算两个半精度浮点数 y/x 的反正切函数值，单位为弧度。

参数：

  * y: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。
  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回 y/x 的反正切函数值，单位为弧度。



示例：
    
    
    import std.math.*
    import std.convert.Formattable
    
    main() {
        let y: Float16 = 1.0
        let x: Float16 = 1.0
        let atan2 = atan2(y, x) / Float16.getPI() * 180.0 // 将弧度值转为角度值打印
        println("${atan2.format(".1")}°")
    }

运行结果：
    
    
    45.0°

#### func atan2(Float32, Float32)
    
    
    public func atan2(y: Float32, x: Float32): Float32

功能：计算两个单精度浮点数 y/x 的反正切函数值，单位为弧度。

参数：

  * y: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。
  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回 y/x 的反正切函数值，单位为弧度。



示例：
    
    
    import std.math.*
    import std.convert.Formattable
    
    main() {
        let y: Float32 = 1.0
        let x: Float32 = 1.0
        let atan2 = atan2(y, x) / Float32.getPI() * 180.0 // 将弧度值转为角度值打印
        println("${atan2.format(".1")}°")
    }

运行结果：
    
    
    45.0°

#### func atan2(Float64, Float64)
    
    
    public func atan2(y: Float64, x: Float64): Float64

功能：计算两个双精度浮点数 y/x 的反正切函数值，单位为弧度。

参数：

  * y: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。
  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回 y/x 的反正切函数值，单位为弧度。



示例：
    
    
    import std.math.*
    import std.convert.Formattable
    
    main() {
        let y: Float64 = 1.0
        let x: Float64 = 1.0
        let atan2 = atan2(y, x) / Float64.getPI() * 180.0 // 将弧度值转为角度值打印
        println("${atan2.format(".1")}°")
    }

运行结果：
    
    
    45.0°

#### func atanh(Float16)
    
    
    public func atanh(x: Float16): Float16

功能：计算半精度浮点数的反双曲正切函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。-1.0 < x < 1.0。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的反双曲正切函数值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于等于 1.0 或小于等于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.atanh
    
    main() {
        let n: Float16 = 0.0
        let atanh = atanh(n)
        println(atanh)
    }

运行结果：
    
    
    0.000000

以下示例将抛出异常：
    
    
    import std.math.atanh
    
    main(): Unit {
        let n = -1.4
        let atanh = atanh(n)
        println(atanh)
    }

#### func atanh(Float32)
    
    
    public func atanh(x: Float32): Float32

功能：计算单精度浮点数的反双曲正切函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。-1.0 < x < 1.0。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的反双曲正切函数值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于等于 1.0 或小于等于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.atanh
    
    main() {
        let n: Float32 = 0.0
        let atanh = atanh(n)
        println(atanh)
    }

运行结果：
    
    
    0.000000

#### func atanh(Float64)
    
    
    public func atanh(x: Float64): Float64

功能：计算双精度浮点数的反双曲正切函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。-1.0 < x < 1.0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的反双曲正切函数值。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 x 大于等于 1.0 或小于等于 -1.0 时，抛出异常。



示例：
    
    
    import std.math.atanh
    
    main() {
        let n: Float64 = 0.0
        let atanh = atanh(n)
        println(atanh)
    }

运行结果：
    
    
    0.000000

#### func cbrt(Float16)
    
    
    public func cbrt(x: Float16): Float16

功能：求半精度浮点数的立方根。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的立方根。



示例：
    
    
    import std.math.cbrt
    
    main() {
        let n: Float16 = -1000.0
        let cbrt = cbrt(n)
        println(cbrt)
    }

运行结果：
    
    
    -10.000000

#### func cbrt(Float32)
    
    
    public func cbrt(x: Float32): Float32

功能：求单精度浮点数的立方根。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的立方根。



示例：
    
    
    import std.math.cbrt
    
    main() {
        let n: Float32 = -1000.0
        let cbrt = cbrt(n)
        println(cbrt)
    }

运行结果：
    
    
    -10.000000

#### func cbrt(Float64)
    
    
    public func cbrt(x: Float64): Float64

功能：求双精度浮点数的立方根。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的立方根。



示例：
    
    
    import std.math.cbrt
    
    main() {
        let n: Float64 = -1000.0
        let cbrt = cbrt(n)
        println(cbrt)
    }

运行结果：
    
    
    -10.000000

#### func ceil(Float16)
    
    
    public func ceil(x: Float16): Float16

功能：求半精度浮点数的向上取整值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的向上取整值。



示例：
    
    
    import std.math.ceil
    
    main() {
        let n: Float16 = 0.7
        let ceil = ceil(n)
        println(ceil)
    }

运行结果：
    
    
    1.000000

#### func ceil(Float32)
    
    
    public func ceil(x: Float32): Float32

功能：求单精度浮点数的向上取整值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的向上取整值。



示例：
    
    
    import std.math.ceil
    
    main() {
        let n: Float32 = 0.7
        let ceil = ceil(n)
        println(ceil)
    }

运行结果：
    
    
    1.000000

#### func ceil(Float64)
    
    
    public func ceil(x: Float64): Float64

功能：求双精度浮点数的向上取整值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的向上取整值。



示例：
    
    
    import std.math.ceil
    
    main() {
        let n: Float64 = 0.7
        let ceil = ceil(n)
        println(ceil)
    }

运行结果：
    
    
    1.000000

#### func checkedAbs(Int16)
    
    
    public func checkedAbs(x: Int16): Option<Int16>

功能：求一个 16 位有符号整数的绝对值。如果入参是 16 位有符号整数的最小值，函数返回 [None](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#none)；否则，返回 [Some](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#somet)(abs(x))。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的 16 位有符号整数。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)> \- 返回传入参数的绝对值的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型。



示例：
    
    
    import std.math.checkedAbs
    
    main() {
        let n: Int16 = -23
        let checkedAbs = checkedAbs(n)
        println(checkedAbs)
    }

运行结果：
    
    
    Some(23)

#### func checkedAbs(Int32)
    
    
    public func checkedAbs(x: Int32): Option<Int32>

功能：求一个 32 位有符号整数的绝对值。如果入参是 32 位有符号整数的最小值，函数返回 [None](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#none)；否则，返回 [Some](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#somet)(abs(x))。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的 32 位有符号整数。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)> \- 返回传入参数的绝对值的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型。



示例：
    
    
    import std.math.checkedAbs
    
    main() {
        let n: Int32 = -23
        let checkedAbs = checkedAbs(n)
        println(checkedAbs)
    }

运行结果：
    
    
    Some(23)

#### func checkedAbs(Int64)
    
    
    public func checkedAbs(x: Int64): Option<Int64>

功能：求一个 64 位有符号整数的绝对值。如果入参是 64 位有符号整数的最小值，函数返回 [None](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#none)；否则，返回 [Some](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#somet)(abs(x))。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的 64 位有符号整数。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)> \- 返回传入参数的绝对值的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型。



示例：
    
    
    import std.math.checkedAbs
    
    main() {
        let n: Int64 = -23
        let checkedAbs = checkedAbs(n)
        println(checkedAbs)
    }

运行结果：
    
    
    Some(23)

#### func checkedAbs(Int8)
    
    
    public func checkedAbs(x: Int8): Option<Int8>

功能：求一个 8 位有符号整数的绝对值。如果入参是 8 位有符号整数的最小值，函数返回 [None](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#none)；否则，返回 [Some](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#somet)(abs(x))。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的 8 位有符号整数。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)> \- 返回传入参数的绝对值的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型。



示例：
    
    
    import std.math.checkedAbs
    
    main() {
        let n: Int8 = -23
        let checkedAbs = checkedAbs(n)
        println(checkedAbs)
    }

运行结果：
    
    
    Some(23)

#### func clamp(Float16, Float16, Float16)
    
    
    public func clamp(v: Float16, min: Float16, max: Float16): Float16

功能：求浮点数的范围区间数。如果此浮点数在该范围区间则返回此浮点数；如果此浮点数小于这个范围区间，则返回该范围区间的最小值；如果此浮点数大于这个范围区间，则返回该范围区间的最大值；如果是 NaN 则返回 NaN。

参数：

  * v: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入一个浮点数。
  * min: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 指定的最小值。
  * max: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 指定的最大值。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 如果 v 在 min 与 max 之间则返回 v；如果 v 小于等于 min 则返回 min；如果 v 大于等于 max，则返回 max；如果是 NaN 则返回 NaN。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 min 大于参数 max 或者 min 和 max 是 NaN 时，抛出异常。



示例：
    
    
    import std.math.clamp
    
    main() {
        let n: Float16 = -23.0
        let clamp = clamp(n, -100.0, 100.0)
        println(clamp)
    }

运行结果：
    
    
    -23.000000

#### func clamp(Float32, Float32, Float32)
    
    
    public func clamp(v: Float32, min: Float32, max: Float32): Float32

功能：求浮点数的范围区间数。如果此浮点数在该范围区间则返回此浮点数；如果此浮点数小于这个范围区间，则返回该范围区间的最小值；如果此浮点数大于这个范围区间，则返回该范围区间的最大值；如果是 NaN 则返回 NaN。

参数：

  * v: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入一个浮点数。
  * min: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 指定的最小值。
  * max: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 指定的最大值。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 如果 v 在 min 与 max 之间则返回 v；如果 v 小于等于 min 则返回 min；如果 v 大于等于 max，则返回 max；如果是 NaN 则返回 NaN。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 min 大于参数 max 或者 min 和 max 是 NaN 时，抛出异常。



示例：
    
    
    import std.math.clamp
    
    main() {
        var m: Float32 = -23.0
        var clamp1 = clamp(m, -100.0, 100.0)
        println(clamp1)
    
        var n: Float32 = -123.0
        var clamp2 = clamp(n, -100.0, 100.0)
        println(clamp2)
    
        var p: Float32 = 123.0
        var clamp3 = clamp(p, -100.0, 100.0)
        println(clamp3)
    }

运行结果：
    
    
    -23.000000
    -100.000000
    100.000000

#### func clamp(Float64, Float64, Float64)
    
    
    public func clamp(v: Float64, min: Float64, max: Float64): Float64

功能：求浮点数的范围区间数。如果此浮点数在该范围区间则返回此浮点数；如果此浮点数小于这个范围区间，则返回该范围区间的最小值；如果此浮点数大于这个范围区间，则返回该范围区间的最大值；如果是 NaN 则返回 NaN。

参数：

  * v: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入一个浮点数。
  * min: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 指定的最小值。
  * max: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 指定的最大值。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 如果 v 在 min 与 max 之间则返回 v；如果 v 小于等于 min 则返回 min；如果 v 大于等于 max，则返回 max；如果是 NaN 则返回 NaN。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数 min 大于参数 max 或者 min 和 max 是 NaN 时，抛出异常。



示例：
    
    
    import std.math.clamp
    
    main() {
        let n: Float64 = -23.0
        let clamp = clamp(n, -100.0, 100.0)
        println(clamp)
    }

运行结果：
    
    
    -23.000000

#### func cos(Float16)
    
    
    public func cos(x: Float16): Float16

功能：计算半精度浮点数的余弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数，入参单位为弧度。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的余弦函数值。



示例：
    
    
    import std.math.cos
    
    main() {
        let n: Float16 = 3.14159265
        let cos = cos(n)
        println(cos)
    }

运行结果：
    
    
    -1.000000

#### func cos(Float32)
    
    
    public func cos(x: Float32): Float32

功能：计算单精度浮点数的余弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数，入参单位为弧度。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的余弦函数值。



示例：
    
    
    import std.math.cos
    
    main() {
        let n: Float32 = 3.14159265
        let cos = cos(n)
        println(cos)
    }

运行结果：
    
    
    -1.000000

#### func cos(Float64)
    
    
    public func cos(x: Float64): Float64

功能：计算双精度浮点数的余弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数，入参单位为弧度。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的余弦函数值。



示例：
    
    
    import std.math.cos
    
    main() {
        let n: Float64 = 3.14159265
        let cos = cos(n)
        println(cos)
    }

运行结果：
    
    
    -1.000000

#### func cosh(Float16)
    
    
    public func cosh(x: Float16): Float16

功能：计算半精度浮点数的双曲余弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的双曲余弦函数值。



示例：
    
    
    import std.math.cosh
    
    main() {
        let n: Float16 = 0.0
        let cosh = cosh(n)
        println(cosh)
    }

运行结果：
    
    
    1.000000

#### func cosh(Float32)
    
    
    public func cosh(x: Float32): Float32

功能：计算单精度浮点数的双曲余弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的双曲余弦函数值。



示例：
    
    
    import std.math.cosh
    
    main() {
        let n: Float32 = 0.0
        let cosh = cosh(n)
        println(cosh)
    }

运行结果：
    
    
    1.000000

#### func cosh(Float64)
    
    
    public func cosh(x: Float64): Float64

功能：计算双精度浮点数的双曲余弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的双曲余弦函数值。



示例：
    
    
    import std.math.cosh
    
    main() {
        let n: Float64 = 0.0
        let cosh = cosh(n)
        println(cosh)
    }

运行结果：
    
    
    1.000000

#### func countOne(Int16) (deprecated)
    
    
    public func countOne(x: Int16): Int8

功能：求 16 位整型的二进制表达中 1 的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/_rrG2P4rR32BADqPqel1tQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=DEABF52E62ACBB91C9CE81886440BBED4077BCA7E4FCBB88C14C432A19DBA7BF)

未来版本即将废弃，使用 countOnes(Int16) 替代。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的 16 位有符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: Int16 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(Int32) (deprecated)
    
    
    public func countOne(x: Int32): Int8

功能：求 32 位整型的二进制表达中 1 的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/oxbB-FVORN2fjXbltim45A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=F4A8282A6C5E33565230FF35607635C4D67A13A5959319CC0CCACC20E732FD9C)

未来版本即将废弃，使用 countOnes(Int32) 替代。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的 32 位有符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: Int32 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(Int64) (deprecated)
    
    
    public func countOne(x: Int64): Int8

功能：求 64 位整型的二进制表达中 1 的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/szdHhWwQQSmOkh3s2PJ12A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=AEE18BABCA2F19925F2C818D415533A3D1BB39902F87AED033A9404513985371)

未来版本即将废弃，使用 countOnes(Int64) 替代。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的 64 位有符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: Int64 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(Int8) (deprecated)
    
    
    public func countOne(x: Int8): Int8

功能：求 8 位整型的二进制表达中 1 的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/zbNonFgCTi2-zyVCAbjecg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=32DA2F9C90BB4642B65BDE4C574117228C27782B1D10D1DC45264AC52B5C591B)

未来版本即将废弃，使用 countOnes(Int8) 替代。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的 8 位有符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: Int8 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(UInt16) (deprecated)
    
    
    public func countOne(x: UInt16): Int8

功能：求 16 位无符号整型的二进制表达中的 1 的位的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/Xd3T4SFpT1iXAuL71FZy4Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=57086C82A3A14A4E8A297FCDE069B5C1E1F851BAB8CDD17123A70BF4EB1F3086)

未来版本即将废弃，使用 countOnes(UInt16) 替代。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入的 16 位无符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: UInt16 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(UInt32) (deprecated)
    
    
    public func countOne(x: UInt32): Int8

功能：求 32 位无符号整型的二进制表达中的 1 的位的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/ercuHDS1TJ693LCe_U9Iug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=523B5C45DE2CE99C079EDA2BEA2A7E96312145D98D632F77E5784773BF4E1BF1)

未来版本即将废弃，使用 countOnes(UInt32) 替代。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入的 32 位无符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: UInt32 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(UInt64) (deprecated)
    
    
    public func countOne(x: UInt64): Int8

功能：求 64 位无符号整型的二进制表达中的 1 的位的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/tDbxtu-_Qz-jWVK2E4vdCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=45485DEA60E138B7FE344FD1122E52411555F07A11B88EF756A2F9F9FC780E72)

未来版本即将废弃，使用 countOnes(UInt64) 替代。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入的 64 位无符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: UInt64 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOne(UInt8) (deprecated)
    
    
    public func countOne(x: UInt8): Int8

功能：求 8 位无符号整型的二进制表达中的 1 的位的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/vuKh_QsTRr-WisdE_QrtwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=36EDEE9977AEF472CB3A00E7F95B1F173EBD73AAA46488AE733E0F51EE6E92B0)

未来版本即将废弃，使用 countOnes(UInt8) 替代。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入的 8 位无符号整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOne
    
    main() {
        let n: UInt8 = 15
        let countOne = countOne(n)
        println(countOne)
    }

运行结果：
    
    
    4

#### func countOnes(Int16)
    
    
    public func countOnes(x: Int16): Int64

功能：求 16 位整型的二进制表达中 1 的个数。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的 16 位有符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: Int16 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(Int32)
    
    
    public func countOnes(x: Int32): Int64

功能：求 32 位整型的二进制表达中 1 的个数。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的 32 位有符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: Int32 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(Int64)
    
    
    public func countOnes(x: Int64): Int64

功能：求 64 位整型的二进制表达中 1 的个数。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的 64 位有符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: Int64 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(Int8)
    
    
    public func countOnes(x: Int8): Int64

功能：求 8 位整型的二进制表达中 1 的个数。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的 8 位有符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: Int8 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(UInt16)
    
    
    public func countOnes(x: UInt16): Int64

功能：求 16 位无符号整型的二进制表达中的 1 的位的个数。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入的 16 位无符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: UInt16 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(UInt32)
    
    
    public func countOnes(x: UInt32): Int64

功能：求 32 位无符号整型的二进制表达中的 1 的位的个数。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入的 32 位无符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: UInt32 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(UInt64)
    
    
    public func countOnes(x: UInt64): Int64

功能：求 64 位无符号整型的二进制表达中的 1 的位的个数。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入的 64 位无符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: UInt64 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func countOnes(UInt8)
    
    
    public func countOnes(x: UInt8): Int64

功能：求 8 位无符号整型的二进制表达中的 1 的位的个数。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入的 8 位无符号整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回传入参数的二进制表达中的 1 的位的个数。



示例：
    
    
    import std.math.countOnes
    
    main() {
        let n: UInt8 = 15
        let countOnes = countOnes(n)
        println(countOnes)
    }

运行结果：
    
    
    4

#### func erf(Float16)
    
    
    public func erf(x: Float16): Float16

功能：求半精度浮点数的误差值。相关定义是：![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/Ha2yp9NTSomBPnqxN8c9Eg/zh-cn_formulaimage_0000002714316702.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=4BF73AD2DE9E6F654CA35FA085DAC7C14B9853CBF1CE544950F5F6CD95FB9DC2)。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的半精度浮点数的误差值。



示例：
    
    
    import std.math.erf
    
    main() {
        let n: Float16 = 5.0
        let erf = erf(n)
        println(erf)
    }

运行结果：
    
    
    1.000000

#### func erf(Float32)
    
    
    public func erf(x: Float32): Float32

功能：求单精度浮点数的误差值。相关定义是：![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/I_AH0L6STnq0lyS9ED2qwQ/zh-cn_formulaimage_0000002714157082.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=70CFE419E910CE492F577ACDBD01915ECBDD2D9219983A6FE08D6A55149131E8)。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的单精度浮点数的误差值。



示例：
    
    
    import std.math.erf
    
    main() {
        let n: Float32 = 5.0
        let erf = erf(n)
        println(erf)
    }

运行结果：
    
    
    1.000000

#### func erf(Float64)
    
    
    public func erf(x: Float64): Float64

功能：求双精度浮点数的误差值。相关定义是：![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/wKLyvkTkTIqR4Z83P1t4lg/zh-cn_formulaimage_0000002714317200.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=16E94F6371F487939B39FB91346596C868008633001BA3738CC7735267F1D068)。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的双精度浮点数的误差值。



示例：
    
    
    import std.math.erf
    
    main() {
        let n: Float64 = 5.0
        let erf = erf(n)
        println(erf)
    }

运行结果：
    
    
    1.000000

#### func exp(Float16)
    
    
    public func exp(x: Float16): Float16

功能：求自然常数 e 的 x 次幂。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数指数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回自然常数 e 的 x 次幂。



示例：
    
    
    import std.math.exp
    
    main() {
        let n: Float16 = 1.0
        let exp = exp(n)
        println(exp)
    }

运行结果：
    
    
    2.718750

#### func exp(Float32)
    
    
    public func exp(x: Float32): Float32

功能：求自然常数 e 的 x 次幂。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数指数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回自然常数 e 的 x 次幂。



示例：
    
    
    import std.math.exp
    
    main() {
        let n: Float32 = 1.0
        let exp = exp(n)
        println(exp)
    }

运行结果：
    
    
    2.718282

#### func exp(Float64)
    
    
    public func exp(x: Float64): Float64

功能：求自然常数 e 的 x 次幂。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数指数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回自然常数 e 的 x 次幂。



示例：
    
    
    import std.math.exp
    
    main() {
        let n: Float64 = 1.0
        let exp = exp(n)
        println(exp)
    }

运行结果：
    
    
    2.718282

#### func exp2(Float16)
    
    
    public func exp2(x: Float16): Float16

功能：求 2 的 x 次幂。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数指数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回 2 的 x 次幂。



示例：
    
    
    import std.math.exp2
    
    main() {
        let n: Float16 = 10.0
        let exp2 = exp2(n)
        println(exp2)
    }

运行结果：
    
    
    1024.000000

#### func exp2(Float32)
    
    
    public func exp2(x: Float32): Float32

功能：求 2 的 x 次幂。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数指数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回 2 的 x 次幂。



示例：
    
    
    import std.math.exp2
    
    main() {
        let n: Float32 = 10.0
        let exp2 = exp2(n)
        println(exp2)
    }

运行结果：
    
    
    1024.000000

#### func exp2(Float64)
    
    
    public func exp2(x: Float64): Float64

功能：求 2 的 x 次幂。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数指数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回 2 的 x 次幂。



示例：
    
    
    import std.math.exp2
    
    main() {
        let n: Float64 = 10.0
        let exp = exp2(n)
        println(exp)
    }

运行结果：
    
    
    1024.000000

#### func floor(Float16)
    
    
    public func floor(x: Float16): Float16

功能：求浮点数的向下取整值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的需要向下取整的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入浮点数的向下取整值。



示例：
    
    
    import std.math.floor
    
    main() {
        let n: Float16 = 10.5
        let floor = floor(n)
        println(floor)
    }

运行结果：
    
    
    10.000000

#### func floor(Float32)
    
    
    public func floor(x: Float32): Float32

功能：求浮点数的向下取整值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的需要向下取整的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入浮点数的向下取整值。



示例：
    
    
    import std.math.floor
    
    main() {
        let n: Float32 = 10.5
        let floor = floor(n)
        println(floor)
    }

运行结果：
    
    
    10.000000

#### func floor(Float64)
    
    
    public func floor(x: Float64): Float64

功能：求浮点数的向下取整值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的需要向下取整的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入浮点数的向下取整值。



示例：
    
    
    import std.math.floor
    
    main() {
        let n: Float64 = 10.5
        let floor = floor(n)
        println(floor)
    }

运行结果：
    
    
    10.000000

#### func fmod(Float16, Float16)
    
    
    public func fmod(x: Float16, y: Float16): Float16

功能：求两个半精度浮点数 x/y 的余数。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的被除数。
  * y: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的除数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回 x/y 的余数, 当 x 或 y 为 NaN 时 返回 NaN。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 x 为 Inf 或 y 为 0 时，抛出异常。



示例：
    
    
    import std.math.fmod
    import std.convert.Formattable
    
    main() {
        let x: Float16 = 3.3
        let y: Float16 = 2.2
        let fmod = fmod(x, y)
        println(fmod.format(".1"))
    }

运行结果：
    
    
    1.1

#### func fmod(Float32, Float32)
    
    
    public func fmod(x: Float32, y: Float32): Float32

功能：求两个单精度浮点数 x/y 的余数。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的被除数。
  * y: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的除数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回 x/y 的余数, 当 x 或 y 为 NaN 时 返回 NaN。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 x 为 Inf 或 y 为 0 时，抛出异常。



示例：
    
    
    import std.math.fmod
    import std.convert.Formattable
    
    main() {
        let x: Float32 = 3.3
        let y: Float32 = 2.2
        let fmod = fmod(x, y)
        println(fmod.format(".1"))
    }

运行结果：
    
    
    1.1

#### func fmod(Float64, Float64)
    
    
    public func fmod(x: Float64, y: Float64): Float64

功能：求两个双精度浮点数 x/y 的余数。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的被除数。
  * y: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的除数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回 x/y 的余数, 当 x 或 y 为 NaN 时 返回 NaN。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 x 为 Inf 或 y 为 0 时，抛出异常。



示例：
    
    
    import std.math.fmod
    import std.convert.Formattable
    
    main() {
        let x: Float64 = 3.3
        let y: Float64 = 2.2
        let fmod = fmod(x, y)
        println(fmod.format(".1"))
    }

运行结果：
    
    
    1.1

#### func gamma(Float16)
    
    
    public func gamma(x: Float16): Float16

功能：求浮点数的伽马函数值，该函数是阶乘概念在实数上的推广，其求值公式为：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/IyBMq0_USPGXlXILt9f7ow/zh-cn_formulaimage_0000002714157256.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=93D10B4A2343550D31BA52F16803C2BEC124E070EED367B684F1387DA62FBEA0)

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的需要求伽马函数值的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入浮点数的伽马函数值。



示例：
    
    
    import std.math.gamma
    
    main() {
        let n: Float16 = -1.1
        let gamma = gamma(n)
        println(gamma)
    }

运行结果：
    
    
    9.750000

#### func gamma(Float32)
    
    
    public func gamma(x: Float32): Float32

功能：求浮点数的伽马函数值，该函数是阶乘概念在实数上的推广。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的需要求伽马函数值的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入浮点数的伽马函数值。



示例：
    
    
    import std.math.gamma
    
    main() {
        let n: Float32 = -1.1
        let gamma = gamma(n)
        println(gamma)
    }

运行结果：
    
    
    9.714804

#### func gamma(Float64)
    
    
    public func gamma(x: Float64): Float64

功能：求浮点数的伽马函数值，该函数是阶乘概念在实数上的推广。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的需要求伽马函数值的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入浮点数的伽马函数值。



示例：
    
    
    import std.math.gamma
    
    main() {
        let n: Float64 = -1.1
        let gamma = gamma(n)
        println(gamma)
    }

运行结果：
    
    
    9.714806

#### func gcd(Int16, Int16)
    
    
    public func gcd(x: Int16, y: Int16): Int16

功能：求两个 16 位有符号整数的最大公约数。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的需要计算最大公约数的第一个整数。
  * y: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 返回两个整数的最大公约数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当两参数都为有符号整数最小值，或一个参数为有符号整数的最小值且另一个参数为 0 时，抛出异常。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: Int16 = 15
        let y: Int16 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(Int32, Int32)
    
    
    public func gcd(x: Int32, y: Int32): Int32

功能：求两个 32 位有符号整数的最大公约数。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的需要计算最大公约数的第一个整数。
  * y: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回两个整数的最大公约数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当两参数都为有符号整数最小值，或一个参数为有符号整数的最小值且另一个参数为 0 时，抛出异常。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: Int32 = 15
        let y: Int32 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(Int64, Int64)
    
    
    public func gcd(x: Int64, y: Int64): Int64

功能：求两个 64 位有符号整数的最大公约数。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的需要计算最大公约数的第一个整数。
  * y: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回两个整数的最大公约数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当两参数都为有符号整数最小值，或一个参数为有符号整数的最小值且另一个参数为 0 时，抛出异常。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: Int64 = 15
        let y: Int64 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(Int8, Int8)
    
    
    public func gcd(x: Int8, y: Int8): Int8

功能：求两个 8 位有符号整数的最大公约数。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的需要计算最大公约数的第一个整数。
  * y: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回两个整数的最大公约数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当两参数都为有符号整数最小值，或一个参数为有符号整数的最小值且另一个参数为 0 时，抛出异常。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: Int8 = 15
        let y: Int8 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(UInt16, UInt16)
    
    
    public func gcd(x: UInt16, y: UInt16): UInt16

功能：求两个 16 位无符号整数的最大公约数。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入的需要计算最大公约数的第一个整数。
  * y: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 返回两个整数的最大公约数。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: UInt16 = 15
        let y: UInt16 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(UInt32, UInt32)
    
    
    public func gcd(x: UInt32, y: UInt32): UInt32

功能：求两个 32 位无符号整数的最大公约数。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入的需要计算最大公约数的第一个整数。
  * y: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 返回两个整数的最大公约数。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: UInt32 = 15
        let y: UInt32 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(UInt64, UInt64)
    
    
    public func gcd(x: UInt64, y: UInt64): UInt64

功能：求两个 64 位无符号整数的最大公约数。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入的需要计算最大公约数的第一个整数。
  * y: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 返回两个整数的最大公约数。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: UInt64 = 15
        let y: UInt64 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func gcd(UInt8, UInt8)
    
    
    public func gcd(x: UInt8, y: UInt8): UInt8

功能：求两个 8 位无符号整数的最大公约数。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入的需要计算最大公约数的第一个整数。
  * y: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入的需要计算最大公约数的第二个整数。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 返回两个整数的最大公约数。



示例：
    
    
    import std.math.gcd
    
    main() {
        let x: UInt8 = 15
        let y: UInt8 = 9
        let gcd = gcd(x, y)
        println(gcd)
    }

运行结果：
    
    
    3

#### func lcm(Int16, Int16)
    
    
    public func lcm(x: Int16, y: Int16): Int16

功能：求两个 16 位有符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 16 位有符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: Int16 = -15
        let y: Int16 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(Int32, Int32)
    
    
    public func lcm(x: Int32, y: Int32): Int32

功能：求两个 32 位有符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 32 位有符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: Int32 = -15
        let y: Int32 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(Int64, Int64)
    
    
    public func lcm(x: Int64, y: Int64): Int64

功能：求两个 64 位有符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 64 位有符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: Int64 = 15
        let y: Int64 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(Int8, Int8)
    
    
    public func lcm(x: Int8, y: Int8): Int8

功能：求两个 8 位有符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 8 位有符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: Int8 = 15
        let y: Int8 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(UInt16, UInt16)
    
    
    public func lcm(x: UInt16, y: UInt16): UInt16

功能：求两个 16 位无符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 16 位无符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: UInt16 = 15
        let y: UInt16 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(UInt32, UInt32)
    
    
    public func lcm(x: UInt32, y: UInt32): UInt32

功能：求两个 32 位无符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 32 位无符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: UInt32 = 15
        let y: UInt32 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(UInt64, UInt64)
    
    
    public func lcm(x: UInt64, y: UInt64): UInt64

功能：求两个 64 位无符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 64 位无符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: UInt64 = 15
        let y: UInt64 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func lcm(UInt8, UInt8)
    
    
    public func lcm(x: UInt8, y: UInt8): UInt8

功能：求两个 8 位无符号整数的最小的非负的公倍数，当入参有 0 时才返回 0。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入的需要计算最小公倍数的第一个整数。
  * y: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入的需要计算最小公倍数的第二个整数。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 返回两个整数的最小的非负的公倍数，当入参有 0 时才返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当返回值超出 8 位无符号整数的最大值时抛出异常。



示例：
    
    
    import std.math.lcm
    
    main() {
        let x: UInt8 = 15
        let y: UInt8 = 9
        let lcm = lcm(x, y)
        println(lcm)
    }

运行结果：
    
    
    45

#### func leadingZeros(Int16)
    
    
    public func leadingZeros(x: Int16): Int64

功能：求 16 位有符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: Int16 = 512
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    6

#### func leadingZeros(Int32)
    
    
    public func leadingZeros(x: Int32): Int64

功能：求 32 位有符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: Int32 = 512
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    22

#### func leadingZeros(Int64)
    
    
    public func leadingZeros(x: Int64): Int64

功能：求 64 位有符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: Int64 = 512
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    54

#### func leadingZeros(Int8)
    
    
    public func leadingZeros(x: Int8): Int64

功能：求 8 位有符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: Int8 = 4
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    5

#### func leadingZeros(UInt16)
    
    
    public func leadingZeros(x: UInt16): Int64

功能：求 16 位无符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: UInt16 = 512
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    6

#### func leadingZeros(UInt32)
    
    
    public func leadingZeros(x: UInt32): Int64

功能：求 32 位无符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: UInt32 = 512
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    22

#### func leadingZeros(UInt64)
    
    
    public func leadingZeros(x: UInt64): Int64

功能：求 64 位无符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: UInt64 = 512
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    54

#### func leadingZeros(UInt8)
    
    
    public func leadingZeros(x: UInt8): Int64

功能：求 8 位无符号整数的二进制表达中的从最高位算起，连续位为 0 的个数。如果最高位不是 0，则返回 0。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 需要求前导 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回前导 0 的位数。



示例：
    
    
    import std.math.leadingZeros
    
    main() {
        let x: UInt8 = 64
        let leadingZeros = leadingZeros(x)
        println(leadingZeros)
    }

运行结果：
    
    
    1

#### func log(Float16)
    
    
    public func log(x: Float16): Float16

功能：求以 e 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/5lxhWLbGSXefhTOp8RYJ6A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=A05AD6F7217D507130B0F437C291112A7B5DE7668AC1A1D0CDA6DD0A52A47F69)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 真数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回以 e 为底 x 的对数。



示例：
    
    
    import std.math.log
    
    main() {
        let x: Float16 = 2.718282
        let log1 = log(x)
        let log2 = log(-x)
        let log3 = log(0.0)
    
        println(log1)
        println(log2)
        println(log3)
    
        let log4 = -log3
        println(log4)
    }

运行结果：
    
    
    1.000000
    nan
    -inf
    inf

#### func log(Float32)
    
    
    public func log(x: Float32): Float32

功能：求以 e 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/KH9bgK9MRcu-18QZeuktew/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=C47D6B4BF4E5370B84042D508D3ACF8421EBFA62004370AB2277E7017BA9A33E)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 真数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回以 e 为底 x 的对数。



示例：
    
    
    import std.math.log
    
    main() {
        let x: Float32 = 2.718282
        let log = log(x)
        println(log)
    }

运行结果：
    
    
    1.000000

#### func log(Float64)
    
    
    public func log(x: Float64): Float64

功能：求以 e 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/tG9xTbQPTQe7DMGk19RKDg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=4B6F879973CEE40B2377400DB76A974335468052FA5B59296220EF0AC9E7FA0A)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 真数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回以 e 为底 x 的对数。



示例：
    
    
    import std.math.log
    
    main() {
        let x: Float64 = 2.718282
        let log = log(x)
        println(log)
    }

运行结果：
    
    
    1.000000

#### func log10(Float16)
    
    
    public func log10(x: Float16): Float16

功能：求以 10 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/5hGUZrFtS-mD72Eu6l9v0g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=A0D72F7102A08F92B8A67E28BD9606DDA65297ABCF3BEBB7A8C0F1E5CF8FB377)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 真数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回以 10 为底 x 的对数。



示例：
    
    
    import std.math.log10
    
    main() {
        let x: Float16 = 1000.0
        let log10 = log10(x)
        println(log10)
    }

运行结果：
    
    
    3.000000

#### func log10(Float32)
    
    
    public func log10(x: Float32): Float32

功能：求以 10 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/7klwB9nGRS254R9SoHiYFg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=D57914948A467826A62ADDC6FFBB5174C1A53F22C8A90BCBCC994479A0DEF3AD)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 真数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回以 10 为底 x 的对数。



示例：
    
    
    import std.math.log10
    
    main() {
        let x: Float32 = 1000.0
        let log10 = log10(x)
        println(log10)
    }

运行结果：
    
    
    3.000000

#### func log10(Float64)
    
    
    public func log10(x: Float64): Float64

功能：求以 10 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/_jovzKYDSm-1za8GiHOF7Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=1805644223D4891381D7790B3ACE71BF867BB899BB0E073E958CE88E94D0CBF5)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 真数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回以 10 为底 x 的对数。



示例：
    
    
    import std.math.log10
    
    main() {
        let x: Float64 = 1000.0
        let log10 = log10(x)
        println(log10)
    }

运行结果：
    
    
    3.000000

#### func log2(Float16)
    
    
    public func log2(x: Float16): Float16

功能：求以 2 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/pHzA5X1jRZSwashcv32aPA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=8B266A87E476CEE19ACCAC1E3DA69D42AC308AB581D1CBEB32E060B347DEE1CE)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 真数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回以 2 为底 x 的对数。



示例：
    
    
    import std.math.log2
    
    main() {
        let x: Float16 = 1024.0
        let log2 = log2(x)
        println(log2)
    }

运行结果：
    
    
    10.000000

#### func log2(Float32)
    
    
    public func log2(x: Float32): Float32

功能：求以 2 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/2aNYyQFzQ-asEjiQZHIiQA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=F59A2E9485443822A224648756AAF3B4656A212FDF313709EFB5DB25990545E3)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 真数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回以 2 为底 x 的对数。



示例：
    
    
    import std.math.log2
    
    main() {
        let x: Float32 = 1024.0
        let log2 = log2(x)
        println(log2)
    }

运行结果：
    
    
    10.000000

#### func log2(Float64)
    
    
    public func log2(x: Float64): Float64

功能：求以 2 为底 x 的对数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/jkFsPc5iTiiOQBscaX7qZQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=3FD9CAED7D034BD821FBD48AA8B64E20E3D01F1E03FEA1F8E63A802C649D6E09)

返回值存在如下特殊场景：

  * 如果传入 x 小于 0 或为 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [NaN](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 等于 0，返回 -[Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。
  * 如果传入 x 为 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)，返回 [Inf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics)。



参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 真数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回以 2 为底 x 的对数。



示例：
    
    
    import std.math.log2
    
    main() {
        let x: Float64 = 1024.0
        let log2 = log2(x)
        println(log2)
    }

运行结果：
    
    
    10.000000

#### func logBase(Float16, Float16)
    
    
    public func logBase(x: Float16, base: Float16): Float16

功能：求以 base 为底 x 的对数。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 真数。真数需要大于 0。
  * base: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 底数。底数需要大于 0，且不能为 1。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回以 base 为底 x 的对数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当真数或底数不为正，或底数为 1 时，抛出异常。



示例：
    
    
    import std.math.logBase
    
    main() {
        let x: Float16 = 512.0
        let base: Float16 = 2.0
        let logBase = logBase(x, base)
        println(logBase)
    }

运行结果：
    
    
    9.000000

示例：
    
    
    import std.math.logBase
    
    main() {
        let x: Float16 = 512.0
        let base: Float16 = -2.0
    
        // 示例1：底数为负数
        try {
            let logBase1 = logBase(x, base)
            println(logBase1)
        } catch (e: IllegalArgumentException) {
            println("异常1：底数为负数")
        }
    
        // 示例2：真数为负数
        try {
            let logBase2 = logBase(-x, base)
            println(logBase2)
        } catch (e: IllegalArgumentException) {
            println("异常2：真数为负数")
        }
    
        // 示例3：底数为1
        try {
            let logBase3 = logBase(x, 1.0)
            println(logBase3)
        } catch (e: IllegalArgumentException) {
            println("异常3：底数为1")
        }
    }

运行结果：
    
    
    异常1：底数为负数
    异常2：真数为负数
    异常3：底数为1

#### func logBase(Float32, Float32)
    
    
    public func logBase(x: Float32, base: Float32): Float32

功能：求以 base 为底 x 的对数。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 真数。真数需要大于 0。
  * base: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 底数。底数需要大于 0，且不能为 1。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回以 base 为底 x 的对数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当真数或底数不为正，或底数为 1 时，抛出异常。



示例：
    
    
    import std.math.logBase
    
    main() {
        let x: Float32 = 1024.0
        let base: Float32 = 2.0
        let logBase = logBase(x, base)
        println(logBase)
    }

运行结果：
    
    
    10.000000

#### func logBase(Float64, Float64)
    
    
    public func logBase(x: Float64, base: Float64): Float64

功能：求以 base 为底 x 的对数。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 真数。真数需要大于 0。
  * base: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 底数。底数需要大于 0，且不能为 1。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回以 base 为底 x 的对数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当真数或底数不为正，或底数为 1 时，抛出异常。



示例：
    
    
    import std.math.logBase
    
    main() {
        let x: Float64 = 1024.0
        let base: Float64 = 2.0
        let logBase = logBase(x, base)
        println(logBase)
    }

运行结果：
    
    
    10.000000

#### func pow(Float32, Float32)
    
    
    public func pow(base: Float32, exponent: Float32): Float32

功能：求浮点数 base 的 exponent 次幂。

参数：

  * base: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 底数。
  * exponent: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 指数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入浮点数 base 的 exponent 次幂。如果值不存在，则返回 nan。



示例：
    
    
    import std.math.pow
    
    main() {
        let base: Float32 = -1.0
        let exponent: Float32 = 0.5
        let pow = pow(base, exponent)
        println(pow)
    }

运行结果：
    
    
    nan

#### func pow(Float32, Int32)
    
    
    public func pow(base: Float32, exponent: Int32): Float32

功能：求浮点数 base 的 exponent 次幂。

参数：

  * base: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 底数。
  * exponent: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 指数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入浮点数 base 的 exponent 次幂。



示例：
    
    
    import std.math.pow
    
    main() {
        let base: Float32 = -1.0
        let exponent: Int32 = 2
        let pow = pow(base, exponent)
        println(pow)
    }

运行结果：
    
    
    1.000000

#### func pow(Float64, Float64)
    
    
    public func pow(base: Float64, exponent: Float64): Float64

功能：求浮点数 base 的 exponent 次幂。

参数：

  * base: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 底数。
  * exponent: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 指数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入浮点数 base 的 exponent 次幂。如果值不存在，则返回 nan。



示例：
    
    
    import std.math.pow
    
    main() {
        let base: Float64 = -1.0
        let exponent: Float64 = 0.5
        let pow = pow(base, exponent)
        println(pow)
    }

运行结果：
    
    
    nan

#### func pow(Float64, Int64)
    
    
    public func pow(base: Float64, exponent: Int64): Float64

功能：求浮点数 base 的 exponent 次幂。

参数：

  * base: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 底数。
  * exponent: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 指数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入浮点数 base 的 exponent 次幂。



示例：
    
    
    import std.math.pow
    
    main() {
        let base: Float64 = -1.0
        let exponent: Int64 = 2
        let pow = pow(base, exponent)
        println(pow)
    }

运行结果：
    
    
    1.000000

#### func reverse(UInt16)
    
    
    public func reverse(x: UInt16): UInt16

功能：求无符号整数按位反转后的数。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 需要进行反转的无符号整数。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 返回反转后的无符号数。



示例：
    
    
    import std.math.reverse
    
    main() {
        let n: UInt16 = 0x8000
        let reverse = reverse(n)
        println(reverse)
    }

运行结果：
    
    
    1

#### func reverse(UInt32)
    
    
    public func reverse(x: UInt32): UInt32

功能：求无符号整数按位反转后的数。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 需要进行反转的无符号整数。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 返回反转后的无符号数。



示例：
    
    
    import std.math.reverse
    
    main() {
        let n: UInt32 = 0x8000_0000
        let reverse = reverse(n)
        println(reverse)
    }

运行结果：
    
    
    1

#### func reverse(UInt64)
    
    
    public func reverse(x: UInt64): UInt64

功能：求无符号整数按位反转后的数。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 需要进行反转的无符号整数。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 返回反转后的无符号数。



示例：
    
    
    import std.math.reverse
    
    main() {
        let n: UInt64 = 0x8000_0000_0000_0000
        let reverse = reverse(n)
        println(reverse)
    }

运行结果：
    
    
    1

#### func reverse(UInt8)
    
    
    public func reverse(x: UInt8): UInt8

功能：求无符号整数按位反转后的数。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 需要进行反转的无符号整数。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 返回反转后的无符号数。



示例：
    
    
    import std.math.reverse
    
    main() {
        let n: UInt8 = 0x80
        let reverse = reverse(n)
        println(reverse)
    }

运行结果：
    
    
    1

#### func rotate(Int16, Int8)
    
    
    public func rotate(num: Int16, d: Int8): Int16

功能：求整数的按位旋转后的结果。

参数：

  * num: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: Int16 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(Int32, Int8)
    
    
    public func rotate(num: Int32, d: Int8): Int32

功能：求整数的按位旋转后的结果。

参数：

  * num: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: Int32 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(Int64, Int8)
    
    
    public func rotate(num: Int64, d: Int8): Int64

功能：求整数的按位旋转后的结果。

参数：

  * num: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: Int64 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(Int8, Int8)
    
    
    public func rotate(num: Int8, d: Int8): Int8

功能：求整数的按位旋转后的结果。

参数：

  * num: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: Int8 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(UInt16, Int8)
    
    
    public func rotate(num: UInt16, d: Int8): UInt16

功能：求整数的按位旋转后的结果。

参数：

  * num: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: UInt16 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(UInt32, Int8)
    
    
    public func rotate(num: UInt32, d: Int8): UInt32

功能：求整数的按位旋转后的结果。

参数：

  * num: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: UInt32 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(UInt64, Int8)
    
    
    public func rotate(num: UInt64, d: Int8): UInt64

功能：求整数的按位旋转后的结果。

参数：

  * num: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: UInt64 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func rotate(UInt8, Int8)
    
    
    public func rotate(num: UInt8, d: Int8): UInt8

功能：求整数的按位旋转后的结果。

参数：

  * num: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 传入一个整数。
  * d: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 旋转位数，负数右移，正数左移。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 返回旋转后的整数。



示例：
    
    
    import std.math.rotate
    
    main() {
        let n: UInt8 = 1
        let rotate = rotate(n, 2)
        println(rotate)
    }

运行结果：
    
    
    4

#### func round(Float16)
    
    
    public func round(x: Float16): Float16

功能：此函数采用 IEEE-754 的向最近舍入规则，计算浮点数的舍入值。如果该浮点数有两个最近整数，则向偶数舍入。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 需要计算舍入值的浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回浮点数向最近整数方向的舍入值。如果该浮点数有两个最近整数，则返回向偶数舍入值。



示例：
    
    
    import std.math.round
    
    main() {
        let n: Float16 = 1.5
        let round = round(n)
        println(round)
    }

运行结果：
    
    
    2.000000

#### func round(Float32)
    
    
    public func round(x: Float32): Float32

功能：此函数采用 IEEE-754 的向最近舍入规则，计算浮点数的舍入值。如果该浮点数有两个最近整数，则向偶数舍入。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 需要计算舍入值的浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回浮点数向最近整数方向的舍入值。如果该浮点数有两个最近整数，则返回向偶数舍入值。



示例：
    
    
    import std.math.round
    
    main() {
        let n: Float32 = 1.5
        let round = round(n)
        println(round)
    }

运行结果：
    
    
    2.000000

#### func round(Float64)
    
    
    public func round(x: Float64): Float64

功能：此函数采用 IEEE-754 的向最近舍入规则，计算浮点数的舍入值。如果该浮点数有两个最近整数，则向偶数舍入。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 需要计算舍入值的浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回浮点数向最近整数方向的舍入值。如果该浮点数有两个最近整数，则返回向偶数舍入值。



示例：
    
    
    import std.math.round
    
    main() {
        let n: Float64 = 1.5
        let round = round(n)
        println(round)
    }

运行结果：
    
    
    2.000000

#### func sin(Float16)
    
    
    public func sin(x: Float16): Float16

功能：计算半精度浮点数的正弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数，入参单位为弧度。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的正弦函数值。



示例：
    
    
    import std.math.sin
    
    main() {
        let n: Float16 = 3.1415926 / 2.0
        let sin = sin(n)
        println(sin)
    }

运行结果：
    
    
    1.000000

#### func sin(Float32)
    
    
    public func sin(x: Float32): Float32

功能：计算单精度浮点数的正弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数，入参单位为弧度。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的正弦函数值。



示例：
    
    
    import std.math.sin
    
    main() {
        let n: Float32 = 3.1415926 / 2.0
        let sin = sin(n)
        println(sin)
    }

运行结果：
    
    
    1.000000

#### func sin(Float64)
    
    
    public func sin(x: Float64): Float64

功能：计算双精度浮点数的正弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数，入参单位为弧度。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的正弦函数值。



示例：
    
    
    import std.math.sin
    
    main() {
        let n: Float64 = 3.1415926 / 2.0
        let sin = sin(n)
        println(sin)
    }

运行结果：
    
    
    1.000000

#### func sinh(Float16)
    
    
    public func sinh(x: Float16): Float16

功能：计算半精度浮点数的双曲正弦函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的双曲正弦函数值。



示例：
    
    
    import std.math.sinh
    
    main() {
        let n: Float16 = 0.0
        let sinh = sinh(n)
        println(sinh)
    }

运行结果：
    
    
    0.000000

#### func sinh(Float32)
    
    
    public func sinh(x: Float32): Float32

功能：计算单精度浮点数的双曲正弦函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的双曲正弦函数值。



示例：
    
    
    import std.math.sinh
    
    main() {
        let n: Float32 = 0.0
        let sinh = sinh(n)
        println(sinh)
    }

运行结果：
    
    
    0.000000

#### func sinh(Float64)
    
    
    public func sinh(x: Float64): Float64

功能：计算双精度浮点数的双曲正弦函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的双曲正弦函数值。



示例：
    
    
    import std.math.sinh
    
    main() {
        let n: Float64 = 0.0
        let sinh = sinh(n)
        println(sinh)
    }

运行结果：
    
    
    0.000000

#### func sqrt(Float16)
    
    
    public func sqrt(x: Float16): Float16

功能：求浮点数的算术平方根。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 需要计算算数平方根的浮点数。x 需要大于等于 0。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入的浮点数的算术平方根。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数为负数时，抛出异常。



示例：
    
    
    import std.math.sqrt
    
    main() {
        let n: Float16 = 16.0
        let sqrt = sqrt(n)
        println(sqrt)
    }

运行结果：
    
    
    4.000000

#### func sqrt(Float32)
    
    
    public func sqrt(x: Float32): Float32

功能：求浮点数的算术平方根。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 需要计算算数平方根的浮点数。x 需要大于等于 0。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入的浮点数的算术平方根。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数为负数时，抛出异常。



示例：
    
    
    import std.math.sqrt
    
    main() {
        let n: Float32 = 16.0
        let sqrt = sqrt(n)
        println(sqrt)
    }

运行结果：
    
    
    4.000000

#### func sqrt(Float64)
    
    
    public func sqrt(x: Float64): Float64

功能：求浮点数的算术平方根。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 需要计算算数平方根的浮点数。x 需要大于等于 0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入的浮点数的算术平方根。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当参数为负数时，抛出异常。



示例：
    
    
    import std.math.sqrt
    
    main() {
        let n: Float64 = 16.0
        let sqrt = sqrt(n)
        println(sqrt)
    }

运行结果：
    
    
    4.000000

#### func tan(Float16)
    
    
    public func tan(x: Float16): Float16

功能：计算半精度浮点数的正切函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数，入参单位为弧度。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的正切函数值。



示例：
    
    
    import std.math.tan
    
    main() {
        let n: Float16 = 0.0
        let tan = tan(n)
        println(tan)
    }

运行结果：
    
    
    0.000000

#### func tan(Float32)
    
    
    public func tan(x: Float32): Float32

功能：计算单精度浮点数的正切函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数，入参单位为弧度。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的正切函数值。



示例：
    
    
    import std.math.tan
    
    main() {
        let n: Float32 = 0.0
        let tan = tan(n)
        println(tan)
    }

运行结果：
    
    
    0.000000

#### func tan(Float64)
    
    
    public func tan(x: Float64): Float64

功能：计算双精度浮点数的正切函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数，入参单位为弧度。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的正切函数值。



示例：
    
    
    import std.math.tan
    
    main() {
        let n: Float64 = 0.0
        let tan = tan(n)
        println(tan)
    }

运行结果：
    
    
    0.000000

#### func tanh(Float16)
    
    
    public func tanh(x: Float16): Float16

功能：计算半精度浮点数的双曲正切函数值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 传入的半精度浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入参数的双曲正切函数值。



示例：
    
    
    import std.math.tanh
    
    main() {
        let n: Float16 = 0.0
        let tanh = tanh(n)
        println(tanh)
    }

运行结果：
    
    
    0.000000

#### func tanh(Float32)
    
    
    public func tanh(x: Float32): Float32

功能：计算单精度浮点数的双曲正切函数值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 传入的单精度浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入参数的双曲正切函数值。



示例：
    
    
    import std.math.tanh
    
    main() {
        let n: Float32 = 0.0
        let tanh = tanh(n)
        println(tanh)
    }

运行结果：
    
    
    0.000000

#### func tanh(Float64)
    
    
    public func tanh(x: Float64): Float64

功能：计算双精度浮点数的双曲正切函数值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 传入的双精度浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入参数的双曲正切函数值。



示例：
    
    
    import std.math.tanh
    
    main() {
        let n: Float64 = 0.0
        let tanh = tanh(n)
        println(tanh)
    }

运行结果：
    
    
    0.000000

#### func trailingZeros(Int16)
    
    
    public func trailingZeros(x: Int16): Int64

功能：求 16 位有符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: Int16 = 512
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    9

#### func trailingZeros(Int32)
    
    
    public func trailingZeros(x: Int32): Int64

功能：求 32 位有符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: Int32 = 512
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    9

#### func trailingZeros(Int64)
    
    
    public func trailingZeros(x: Int64): Int64

功能：求 64 位有符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: Int64 = 512
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    9

#### func trailingZeros(Int8)
    
    
    public func trailingZeros(x: Int8): Int64

功能：求 16 位有符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: Int8 = 64
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    6

#### func trailingZeros(UInt16)
    
    
    public func trailingZeros(x: UInt16): Int64

功能：求 16 位无符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: UInt16 = 512
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    9

#### func trailingZeros(UInt32)
    
    
    public func trailingZeros(x: UInt32): Int64

功能：求 32 位无符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: UInt32 = 512
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    9

#### func trailingZeros(UInt64)
    
    
    public func trailingZeros(x: UInt64): Int64

功能：求 64 位无符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: UInt64 = 512
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    9

#### func trailingZeros(UInt8)
    
    
    public func trailingZeros(x: UInt8): Int64

功能：求 8 位无符号整数的二进制表达中的从最低位算起，连续位为 0 的个数。如果最低位不是 0，则返回 0。

参数：

  * x: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 需要求后置 0 的整数。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 后置 0 的位数。



示例：
    
    
    import std.math.trailingZeros
    
    main() {
        let x: UInt8 = 64
        let trailingZeros = trailingZeros(x)
        println(trailingZeros)
    }

运行结果：
    
    
    6

#### func trunc(Float16)
    
    
    public func trunc(x: Float16): Float16

功能：求浮点数的截断取整值。

参数：

  * x: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 需要截断取整的浮点数。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 返回传入浮点数截断取整后的值。



示例：
    
    
    import std.math.trunc
    
    main() {
        let x: Float16 = 64.555566
        let trunc = trunc(x)
        println(trunc)
    }

运行结果：
    
    
    64.000000

#### func trunc(Float32)
    
    
    public func trunc(x: Float32): Float32

功能：求浮点数的截断取整值。

参数：

  * x: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 需要截断取整的浮点数。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 返回传入浮点数截断取整后的值。



示例：
    
    
    import std.math.trunc
    
    main() {
        let x: Float32 = 64.555566
        let trunc = trunc(x)
        println(trunc)
    }

运行结果：
    
    
    64.000000

#### func trunc(Float64)
    
    
    public func trunc(x: Float64): Float64

功能：求浮点数的截断取整值。

参数：

  * x: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 需要截断取整的浮点数。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 返回传入浮点数截断取整后的值。



示例：
    
    
    import std.math.trunc
    
    main() {
        let x: Float64 = 64.555566
        let trunc = trunc(x)
        println(trunc)
    }

运行结果：
    
    
    64.000000
