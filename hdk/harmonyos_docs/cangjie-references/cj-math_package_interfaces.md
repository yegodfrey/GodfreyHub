---
name: cangjie-references/cj-math_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math / 接口
---

# 接口

#### interface FloatingPoint<T>
    
    
    public interface FloatingPoint<T> <: Number<T> {
        static func getPI(): T
        static func getE(): T
        static func getNaN(): T
        static func getInf(): T
        static func getMinDenormal(): T
        static func getMinNormal(): T
        func isInf(): Bool
        func isNaN(): Bool
        func isNormal(): Bool
    }

功能：本接口提供了浮点数相关的方法。

父类型：

  * Number<T>



#### [h2]static func getE()
    
    
    static func getE(): T

功能：获取 T 类型的自然常数。

返回值：

  * T - 类型 T 的自然常数。



#### [h2]static func getInf()
    
    
    static func getInf(): T

功能：获取浮点数的无穷数。

返回值：

  * T - 类型 T 的无穷数。



#### [h2]static func getMinDenormal()
    
    
    static func getMinDenormal(): T

功能：获取单精度浮点数的最小次正规数。

返回值：

  * T - 类型 T 的最小次正规数。



#### [h2]static func getMinNormal()
    
    
    static func getMinNormal(): T

功能：获取单精度浮点数的最小正规数。

返回值：

  * T - 类型 T 的最小正规数。



#### [h2]static func getNaN()
    
    
    static func getNaN(): T

功能：获取浮点数的非数。

返回值：

  * T - 类型 T 的非数。



#### [h2]static func getPI()
    
    
    static func getPI(): T

功能：获取 T 类型的圆周率常数。

返回值：

  * T - 类型 T 的圆周率常数。



#### [h2]func isInf()
    
    
    func isInf(): Bool

功能：判断浮点数是否为无穷数值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果浮点数的值正无穷大或负无穷大，则返回 true；否则，返回 false。



#### [h2]func isNaN()
    
    
    func isNaN(): Bool

功能：判断浮点数是否为非数值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果浮点数的值为非数值，则返回 true；否则，返回 false。



#### [h2]func isNormal()
    
    
    func isNormal(): Bool

功能：判断浮点数是否为常规数值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是正常的浮点数，返回 true；否则，返回 false。



#### [h2]extend Float16 <: FloatingPoint<Float16>
    
    
    extend Float16 <: FloatingPoint<Float16>

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型扩展 FloatingPoint<Float16> 接口。

父类型：

  * FloatingPoint<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**static func getE()**
    
    
    public static func getE(): Float16

功能：获取半精度浮点数类型的自然常数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的自然常数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数类型的自然常数 */
        let e = Float16.getE()
    
        /* 打印自然常数 */
        println("Float16的自然常数E: ${e}")
    }

运行结果：
    
    
    Float16的自然常数E: 2.718750

**static func getInf()**
    
    
    public static func getInf(): Float16

功能：获取半精度浮点数类型的无穷数值。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的无穷数值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数类型的无穷数值 */
        let inf = Float16.getInf()
    
        /* 打印无穷数值 */
        println("Float16的无穷大值: ${inf}")
    }

运行结果：
    
    
    Float16的无穷大值: inf

**static func getMinDenormal()**
    
    
    public static func getMinDenormal(): Float16

功能：获取半精度浮点数类型的最小次正规数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的最小次正规数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数类型的最小次正规数 */
        let minDenormal = Float16.getMinDenormal()
    
        /* 打印最小次正规数 */
        println("Float16的最小次正规数: ${minDenormal}")
    }

运行结果：
    
    
    Float16的最小次正规数: 0.000000

**static func getMinNormal()**
    
    
    public static func getMinNormal(): Float16

功能：获取半精度浮点数类型的最小正规数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的最小正规数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数类型的最小正规数 */
        let minNormal = Float16.getMinNormal()
    
        /* 打印最小正规数 */
        println("Float16的最小正规数: ${minNormal}")
    }

运行结果：
    
    
    Float16的最小正规数: 0.000061

**static func getNaN()**
    
    
    public static func getNaN(): Float16

功能：获取半精度浮点数类型的非数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的非数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数类型的非数 */
        let nan = Float16.getNaN()
    
        /* 打印非数 */
        println("Float16的非数: ${nan}")
    
        /* 检查是否为非数 */
        println("是否为非数: ${nan.isNaN()}")
    }

运行结果：
    
    
    Float16的非数: nan
    是否为非数: true

**static func getPI()**
    
    
    public static func getPI(): Float16

功能：获取半精度浮点数类型的圆周率常数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的圆周率常数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数类型的圆周率常数 */
        let pi = Float16.getPI()
    
        /* 打印圆周率 */
        println("Float16的圆周率PI: ${pi}")
    }

运行结果：
    
    
    Float16的圆周率PI: 3.140625

#### [h2]extend Float32 <: FloatingPoint<Float32>
    
    
    extend Float32 <: FloatingPoint<Float32>

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型扩展 FloatingPoint<Float32> 接口。

父类型：

  * FloatingPoint<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**static func getE()**
    
    
    public static func getE(): Float32

功能：获取单精度浮点数类型的自然常数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的自然常数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数类型的自然常数 */
        let e = Float32.getE()
    
        /* 打印自然常数 */
        println("Float32的自然常数E: ${e}")
    }

运行结果：
    
    
    Float32的自然常数E: 2.718282

**static func getInf()**
    
    
    public static func getInf(): Float32

功能：获取单精度浮点数类型的无穷数值。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的无穷数值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数类型的无穷数值 */
        let inf = Float32.getInf()
    
        /* 打印无穷数值 */
        println("Float32的无穷大值: ${inf}")
    }

运行结果：
    
    
    Float32的无穷大值: inf

**static func getMinDenormal()**
    
    
    public static func getMinDenormal(): Float32

功能：获取单精度浮点数类型的最小次正规数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的最小次正规数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数类型的最小次正规数 */
        let minDenormal = Float32.getMinDenormal()
    
        /* 打印最小次正规数 */
        println("Float32的最小次正规数: ${minDenormal}")
    }

运行结果：
    
    
    Float32的最小次正规数: 0.000000

**static func getMinNormal()**
    
    
    public static func getMinNormal(): Float32

功能：获取单精度浮点数类型的最小正规数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的最小正规数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数类型的最小正规数 */
        let minNormal = Float32.getMinNormal()
    
        /* 打印最小正规数 */
        println("Float32的最小正规数: ${minNormal}")
    }

运行结果：
    
    
    Float32的最小正规数: 0.000000

**static func getNaN()**
    
    
    public static func getNaN(): Float32

功能：获取单精度浮点数类型的非数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的非数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数类型的非数 */
        let nan = Float32.getNaN()
    
        /* 打印非数 */
        println("Float32的非数: ${nan}")
    
        /* 检查是否为非数 */
        println("是否为非数: ${nan.isNaN()}")
    }

运行结果：
    
    
    Float32的非数: nan
    是否为非数: true

**static func getPI()**
    
    
    public static func getPI(): Float32

功能：获取单精度浮点数类型的圆周率常数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的圆周率常数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数类型的圆周率常数 */
        let pi = Float32.getPI()
    
        /* 打印圆周率 */
        println("Float32的圆周率PI: ${pi}")
    }

运行结果：
    
    
    Float32的圆周率PI: 3.141593

#### [h2]extend Float64 <: FloatingPoint<Float64>
    
    
    extend Float64 <: FloatingPoint<Float64>

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型扩展 FloatingPoint<Float64> 接口。

父类型：

  * FloatingPoint<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**static func getE()**
    
    
    public static func getE(): Float64

功能：获取双精度浮点数类型的自然常数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的自然常数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数类型的自然常数 */
        let e = Float64.getE()
    
        /* 打印自然常数 */
        println("Float64的自然常数E: ${e}")
    }

运行结果：
    
    
    Float64的自然常数E: 2.718282

**static func getInf()**
    
    
    public static func getInf(): Float64

功能：获取双精度浮点数类型的无穷数值。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的无穷数值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数类型的无穷数值 */
        let inf = Float64.getInf()
    
        /* 打印无穷数值 */
        println("Float64的无穷大值: ${inf}")
    }

运行结果：
    
    
    Float64的无穷大值: inf

**static func getMinDenormal()**
    
    
    public static func getMinDenormal(): Float64

功能：获取双精度浮点数类型的最小次正规数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的最小次正规数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数类型的最小次正规数 */
        let minDenormal = Float64.getMinDenormal()
    
        /* 打印最小次正规数 */
        println("Float64的最小次正规数: ${minDenormal}")
    }

运行结果：
    
    
    Float64的最小次正规数: 0.000000

**static func getMinNormal()**
    
    
    public static func getMinNormal(): Float64

功能：获取双精度浮点数类型的最小正规数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的最小正规数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数类型的最小正规数 */
        let minNormal = Float64.getMinNormal()
    
        /* 打印最小正规数 */
        println("Float64的最小正规数: ${minNormal}")
    }

运行结果：
    
    
    Float64的最小正规数: 0.000000

**static func getNaN()**
    
    
    public static func getNaN(): Float64

功能：获取双精度浮点数类型的非数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的非数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数类型的非数 */
        let nan = Float64.getNaN()
    
        /* 打印非数 */
        println("Float64的非数: ${nan}")
    
        /* 检查是否为非数 */
        println("是否为非数: ${nan.isNaN()}")
    }

运行结果：
    
    
    Float64的非数: nan
    是否为非数: true

**static func getPI()**
    
    
    public static func getPI(): Float64

功能：获取双精度浮点数类型的圆周率常数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的圆周率常数。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数类型的圆周率常数 */
        let pi = Float64.getPI()
    
        /* 打印圆周率 */
        println("Float64的圆周率PI: ${pi}")
    }

运行结果：
    
    
    Float64的圆周率PI: 3.141593

#### interface Integer<T>
    
    
    public interface Integer<T> <: Number<T> {
        static func isSigned(): Bool
        operator func %(other: T): T
        operator func &(other: T): T
        operator func |(other: T): T
        operator func ^(other: T): T
        operator func !(): T
        operator func >>(n: Int64): T
        operator func <<(n: Int64): T
    }

功能：本接口提供了整数类型相关的方法。

父类型：

  * Number<T>



#### [h2]static func isSigned()
    
    
    static func isSigned(): Bool

功能：判断类型是否是有符号的。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果类型是有符号的，返回 true；否则返回 false。



#### [h2]operator func !()
    
    
    operator func !(): T

功能：位运算符，按位取反。

返回值：

  * T - 计算所得结果。



#### [h2]operator func %(T)
    
    
    operator func %(other: T): T

功能：算术运算符，计算余数。

参数：

  * other: T - 运算符右边的数，表示除数。



返回值：

  * T - 计算所得余数。



#### [h2]operator func &(T)
    
    
    operator func &(other: T): T

功能：位运算符，按位与。

参数：

  * other: T - 运算符右边的数。



返回值：

  * T - 计算所得结果。



#### [h2]operator func <<(Int64)
    
    
    operator func <<(n: Int64): T

功能：位运算符，按位左移。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 运算符右边的数，表示左移的位数。



返回值：

  * T - 计算所得结果。



#### [h2]operator func >>(Int64)
    
    
    operator func >>(n: Int64): T

功能：位运算符，按位右移。

参数：

  * n: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 运算符右边的数，表示右移的位数。



返回值：

  * T - 计算所得结果。



#### [h2]operator func ^(T)
    
    
    operator func ^(other: T): T

功能：位运算符，按位异或。

参数：

  * other: T - 运算符右边的数。



返回值：

  * T - 计算所得结果。



#### [h2]operator func |(T)
    
    
    operator func |(other: T): T

功能：位运算符，按位或。

参数：

  * other: T - 运算符右边的数。



返回值：

  * T - 计算所得结果。



#### [h2]extend Int16 <: Integer<Int16>
    
    
    extend Int16 <: Integer<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 true。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 Int16 类型是否是有符号类型 */
        let signed = Int16.isSigned()
    
        /* 打印结果 */
        println("Int16 是有符号类型: ${signed}")
    }

运行结果：
    
    
    Int16 是有符号类型: true

#### [h2]extend Int32 <: Integer<Int32>
    
    
    extend Int32 <: Integer<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 true。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 Int32 类型是否是有符号类型 */
        let signed = Int32.isSigned()
    
        /* 打印结果 */
        println("Int32 是有符号类型: ${signed}")
    }

运行结果：
    
    
    Int32 是有符号类型: true

#### [h2]extend Int64 <: Integer<Int64>
    
    
    extend Int64 <: Integer<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 true。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 Int64 类型是否是有符号类型 */
        let signed = Int64.isSigned()
    
        /* 打印结果 */
        println("Int64 是有符号类型: ${signed}")
    }

运行结果：
    
    
    Int64 是有符号类型: true

#### [h2]extend Int8 <: Integer<Int8>
    
    
    extend Int8 <: Integer<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 true。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 Int8 类型是否是有符号类型 */
        let signed = Int8.isSigned()
    
        /* 打印结果 */
        println("Int8 是有符号类型: ${signed}")
    }

运行结果：
    
    
    Int8 是有符号类型: true

#### [h2]extend IntNative <: Integer<IntNative>
    
    
    extend IntNative <: Integer<IntNative>

功能：为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 true。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 IntNative 类型是否是有符号类型 */
        let signed = IntNative.isSigned()
    
        /* 打印结果 */
        println("IntNative 是有符号类型: ${signed}")
    }

运行结果：
    
    
    IntNative 是有符号类型: true

#### [h2]extend UInt16 <: Integer<UInt16>
    
    
    extend UInt16 <: Integer<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 false。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 UInt16 类型是否是有符号类型 */
        let signed = UInt16.isSigned()
    
        /* 打印结果 */
        println("UInt16 是有符号类型: ${signed}")
    }

运行结果：
    
    
    UInt16 是有符号类型: false

#### [h2]extend UInt32 <: Integer<UInt32>
    
    
    extend UInt32 <: Integer<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 false。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 UInt32 类型是否是有符号类型 */
        let signed = UInt32.isSigned()
    
        /* 打印结果 */
        println("UInt32 是有符号类型: ${signed}")
    }

运行结果：
    
    
    UInt32 是有符号类型: false

#### [h2]extend UInt64 <: Integer<UInt64>
    
    
    extend UInt64 <: Integer<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 false。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 UInt64 类型是否是有符号类型 */
        let signed = UInt64.isSigned()
    
        /* 打印结果 */
        println("UInt64 是有符号类型: ${signed}")
    }

运行结果：
    
    
    UInt64 是有符号类型: false

#### [h2]extend UInt8 <: Integer<UInt8>
    
    
    extend UInt8 <: Integer<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 false。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 UInt8 类型是否是有符号类型 */
        let signed = UInt8.isSigned()
    
        /* 打印结果 */
        println("UInt8 是有符号类型: ${signed}")
    }

运行结果：
    
    
    UInt8 是有符号类型: false

#### [h2]extend UIntNative <: Integer<UIntNative>
    
    
    extend UIntNative <: Integer<UIntNative>

功能：为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型扩展 Integer<T> 接口。

父类型：

  * Integer<[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative)>



**static func isSigned()**
    
    
    public static func isSigned(): Bool

功能：判断 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型是否是有符号类型。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 总是返回 false。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 判断 UIntNative 类型是否是有符号类型 */
        let signed = UIntNative.isSigned()
    
        /* 打印结果 */
        println("UIntNative 是有符号类型: ${signed}")
    }

运行结果：
    
    
    UIntNative 是有符号类型: false

#### interface MathExtension<T> (deprecated)
    
    
    public interface MathExtension<T> {
        static func GetPI(): T
        static func GetE(): T
    }

功能：本接口提供了统一的方法获取一些数学常数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/-3bDoggHSqmFFKCYNwb-5A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090205Z&HW-CC-Expire=86400&HW-CC-Sign=ABA7AF624F0A769A15EB57005E072772A16A500FBCDB8D1EB0AEE88DAB2A1C62)

未来版本即将废弃，使用 FloatingPoint<T> 替代。

#### [h2]static func GetE()
    
    
    static func GetE(): T

功能：获取 T 类型的自然常数。

返回值：

  * T - 类型 T 的自然常数。



#### [h2]static func GetPI()
    
    
    static func GetPI(): T

功能：获取 T 类型的圆周率常数。

返回值：

  * T - 类型 T 的圆周率常数。



#### [h2]extend Float16 <: MathExtension<Float16>
    
    
    extend Float16 <: MathExtension<Float16>

功能：拓展半精度浮点数以支持一些数学常数。

父类型：

  * MathExtension (deprecated)<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**static func GetE()**
    
    
    public static func GetE(): Float16

功能：获取半精度浮点数的自然常数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 类型的自然常数



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数的自然常数 */
        let e = Float16.GetE()
    
        /* 打印自然常数 */
        println("Float16的自然常数: ${e}")
    }

运行结果：
    
    
    Float16的自然常数: 2.718750

**static func GetPI()**
    
    
    public static func GetPI(): Float16

功能：获取半精度浮点数的圆周率常数。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 类型的圆周率常数



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取半精度浮点数的圆周率常数 */
        let pi = Float16.GetPI()
    
        /* 打印圆周率 */
        println("Float16的圆周率: ${pi}")
    }

运行结果：
    
    
    Float16的圆周率: 3.140625

#### [h2]extend Float32 <: MathExtension<Float32>
    
    
    extend Float32 <: MathExtension<Float32>

功能：拓展单精度浮点数以支持一些数学常数。

父类型：

  * MathExtension (deprecated)<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**static func GetE()**
    
    
    public static func GetE(): Float32

功能：获取单精度浮点数的自然常数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 类型的自然常数



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数的自然常数 */
        let e = Float32.GetE()
    
        /* 打印自然常数 */
        println("Float32的自然常数: ${e}")
    }

运行结果：
    
    
    Float32的自然常数: 2.718282

**static func GetPI()**
    
    
    public static func GetPI(): Float32

功能：获取单精度浮点数的圆周率常数。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 类型的圆周率常数



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取单精度浮点数的圆周率常数 */
        let pi = Float32.GetPI()
    
        /* 打印圆周率 */
        println("Float32的圆周率: ${pi}")
    }

运行结果：
    
    
    Float32的圆周率: 3.141593

#### [h2]extend Float64 <: MathExtension<Float64>
    
    
    extend Float64 <: MathExtension<Float64>

功能：拓展双精度浮点数以支持一些数学常数。

父类型：

  * MathExtension (deprecated)<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**static func GetE()**
    
    
    public static func GetE(): Float64

功能：获取双精度浮点数的自然常数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 类型的自然常数



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数的自然常数 */
        let e = Float64.GetE()
    
        /* 打印自然常数 */
        println("Float64的自然常数: ${e}")
    }

运行结果：
    
    
    Float64的自然常数: 2.718282

**static func GetPI()**
    
    
    public static func GetPI(): Float64

功能：获取双精度浮点数的圆周率常数。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 类型的圆周率常数



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取双精度浮点数的圆周率常数 */
        let pi = Float64.GetPI()
    
        /* 打印圆周率 */
        println("Float64的圆周率: ${pi}")
    }

运行结果：
    
    
    Float64的圆周率: 3.141593

#### interface MaxMinValue<T>
    
    
    public interface MaxMinValue<T> {
        static func getMax(): T
        static func getMin(): T
    }

功能：提供获取最大值和最小值的方法。

#### [h2]static func getMax()
    
    
    static func getMax(): T

功能：获取最大值。

返回值：

  * T - 最大值。



#### [h2]static func getMin()
    
    
    static func getMin(): T

功能：获取最小值。

返回值：

  * T - 最小值。



#### [h2]extend Float16 <: MaxMinValue<Float16>
    
    
    extend Float16 <: MaxMinValue<Float16>

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**static func getMax()**
    
    
    public static func getMax(): Float16

功能：获取 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的最大值。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Float16 类型的最大值 */
        let max = Float16.getMax()
    
        /* 打印最大值 */
        println("Float16的最大值: ${max}")
    }

运行结果：
    
    
    Float16的最大值: 65504.000000

**static func getMin()**
    
    
    public static func getMin(): Float16

功能：获取 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的最小值。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 半精度浮点数类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Float16 类型的最小值 */
        let min = Float16.getMin()
    
        /* 打印最小值 */
        println("Float16的最小值: ${min}")
    }

运行结果：
    
    
    Float16的最小值: -65504.000000

#### [h2]extend Float32 <: MaxMinValue<Float32>
    
    
    extend Float32 <: MaxMinValue<Float32>

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**static func getMax()**
    
    
    public static func getMax(): Float32

功能：获取 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的最大值。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Float32 类型的最大值 */
        let max = Float32.getMax()
    
        /* 打印最大值 */
        println("Float32的最大值: ${max}")
    }

运行结果：
    
    
    Float32的最大值: 340282346638528859811704183484516925440.000000

**static func getMin()**
    
    
    public static func getMin(): Float32

功能：获取 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的最小值。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 单精度浮点数类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Float32 类型的最小值 */
        let min = Float32.getMin()
    
        /* 打印最小值 */
        println("Float32的最小值: ${min}")
    }

运行结果：
    
    
    Float32的最小值: -340282346638528859811704183484516925440.000000

#### [h2]extend Float64 <: MaxMinValue<Float64>
    
    
    extend Float64 <: MaxMinValue<Float64>

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**static func getMax()**
    
    
    public static func getMax(): Float64

功能：获取 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的最大值。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Float64 类型的最大值 */
        let max = Float64.getMax()
    
        /* 打印最大值 */
        println("Float64的最大值: ${max}")
    }

运行结果：
    
    
    Float64的最大值: 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000

**static func getMin()**
    
    
    public static func getMin(): Float64

功能：获取 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的最小值。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 双精度浮点数类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Float64 类型的最小值 */
        let min = Float64.getMin()
    
        /* 打印最小值 */
        println("Float64的最小值: ${min}")
    }

运行结果：
    
    
    Float64的最小值: -179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000

#### [h2]extend Int16 <: MaxMinValue<Int16>
    
    
    extend Int16 <: MaxMinValue<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**static func getMax()**
    
    
    public static func getMax(): Int16

功能：获取 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的最大值。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int16 类型的最大值 */
        let max = Int16.getMax()
    
        /* 打印最大值 */
        println("Int16的最大值: ${max}")
    }

运行结果：
    
    
    Int16的最大值: 32767

**static func getMin()**
    
    
    public static func getMin(): Int16

功能：获取 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的最小值。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int16 类型的最小值 */
        let min = Int16.getMin()
    
        /* 打印最小值 */
        println("Int16的最小值: ${min}")
    }

运行结果：
    
    
    Int16的最小值: -32768

#### [h2]extend Int32 <: MaxMinValue<Int32>
    
    
    extend Int32 <: MaxMinValue<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**static func getMax()**
    
    
    public static func getMax(): Int32

功能：获取 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的最大值。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int32 类型的最大值 */
        let max = Int32.getMax()
    
        /* 打印最大值 */
        println("Int32的最大值: ${max}")
    }

运行结果：
    
    
    Int32的最大值: 2147483647

**static func getMin()**
    
    
    public static func getMin(): Int32

功能：获取 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的最小值。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int32 类型的最小值 */
        let min = Int32.getMin()
    
        /* 打印最小值 */
        println("Int32的最小值: ${min}")
    }

运行结果：
    
    
    Int32的最小值: -2147483648

#### [h2]extend Int64 <: MaxMinValue<Int64>
    
    
    extend Int64 <: MaxMinValue<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**static func getMax()**
    
    
    public static func getMax(): Int64

功能：获取 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的最大值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int64 类型的最大值 */
        let max = Int64.getMax()
    
        /* 打印最大值 */
        println("Int64的最大值: ${max}")
    }

运行结果：
    
    
    Int64的最大值: 9223372036854775807

**static func getMin()**
    
    
    public static func getMin(): Int64

功能：获取 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的最小值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int64 类型的最小值 */
        let min = Int64.getMin()
    
        /* 打印最小值 */
        println("Int64的最小值: ${min}")
    }

运行结果：
    
    
    Int64的最小值: -9223372036854775808

#### [h2]extend Int8 <: MaxMinValue<Int8>
    
    
    extend Int8 <: MaxMinValue<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**static func getMax()**
    
    
    public static func getMax(): Int8

功能：获取 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的最大值。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int8 类型的最大值 */
        let max = Int8.getMax()
    
        /* 打印最大值 */
        println("Int8的最大值: ${max}")
    }

运行结果：
    
    
    Int8的最大值: 127

**static func getMin()**
    
    
    public static func getMin(): Int8

功能：获取 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的最小值。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 Int8 类型的最小值 */
        let min = Int8.getMin()
    
        /* 打印最小值 */
        println("Int8的最小值: ${min}")
    }

运行结果：
    
    
    Int8的最小值: -128

#### [h2]extend IntNative <: MaxMinValue<IntNative>
    
    
    extend IntNative <: MaxMinValue<IntNative>

功能：为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative)>



**static func getMax()**
    
    
    public static func getMax(): IntNative

功能：获取 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的最大值。

返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 IntNative 类型的最大值 */
        let max = IntNative.getMax()
    
        /* 打印最大值 */
        println("IntNative的最大值: ${max}")
    }

可能的运行结果：
    
    
    IntNative的最大值: 9223372036854775807

**static func getMin()**
    
    
    public static func getMin(): IntNative

功能：获取 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的最小值。

返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 IntNative 类型的最小值 */
        let min = IntNative.getMin()
    
        /* 打印最小值 */
        println("IntNative的最小值: ${min}")
    }

可能的运行结果：
    
    
    IntNative的最小值: -9223372036854775808

#### [h2]extend UInt16 <: MaxMinValue<UInt16>
    
    
    extend UInt16 <: MaxMinValue<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**static func getMax()**
    
    
    public static func getMax(): UInt16

功能：获取 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的最大值。

返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt16 类型的最大值 */
        let max = UInt16.getMax()
    
        /* 打印最大值 */
        println("UInt16的最大值: ${max}")
    }

运行结果：
    
    
    UInt16的最大值: 65535

**static func getMin()**
    
    
    public static func getMin(): UInt16

功能：获取 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的最小值。

返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt16 类型的最小值 */
        let min = UInt16.getMin()
    
        /* 打印最小值 */
        println("UInt16的最小值: ${min}")
    }

运行结果：
    
    
    UInt16的最小值: 0

#### [h2]extend UInt32 <: MaxMinValue<UInt32>
    
    
    extend UInt32 <: MaxMinValue<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**static func getMax()**
    
    
    public static func getMax(): UInt32

功能：获取 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的最大值。

返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt32 类型的最大值 */
        let max = UInt32.getMax()
    
        /* 打印最大值 */
        println("UInt32的最大值: ${max}")
    }

运行结果：
    
    
    UInt32的最大值: 4294967295

**static func getMin()**
    
    
    public static func getMin(): UInt32

功能：获取 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的最小值。

返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt32 类型的最小值 */
        let min = UInt32.getMin()
    
        /* 打印最小值 */
        println("UInt32的最小值: ${min}")
    }

运行结果：
    
    
    UInt32的最小值: 0

#### [h2]extend UInt64 <: MaxMinValue<UInt64>
    
    
    extend UInt64 <: MaxMinValue<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**static func getMax()**
    
    
    public static func getMax(): UInt64

功能：获取 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的最大值。

返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt64 类型的最大值 */
        let max = UInt64.getMax()
    
        /* 打印最大值 */
        println("UInt64的最大值: ${max}")
    }

运行结果：
    
    
    UInt64的最大值: 18446744073709551615

**static func getMin()**
    
    
    public static func getMin(): UInt64

功能：获取 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的最小值。

返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt64 类型的最小值 */
        let min = UInt64.getMin()
    
        /* 打印最小值 */
        println("UInt64的最小值: ${min}")
    }

运行结果：
    
    
    UInt64的最小值: 0

#### [h2]extend UInt8 <: MaxMinValue<UInt8>
    
    
    extend UInt8 <: MaxMinValue<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**static func getMax()**
    
    
    public static func getMax(): UInt8

功能：获取 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的最大值。

返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt8 类型的最大值 */
        let max = UInt8.getMax()
    
        /* 打印最大值 */
        println("UInt8的最大值: ${max}")
    }

运行结果：
    
    
    UInt8的最大值: 255

**static func getMin()**
    
    
    public static func getMin(): UInt8

功能：获取 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的最小值。

返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UInt8 类型的最小值 */
        let min = UInt8.getMin()
    
        /* 打印最小值 */
        println("UInt8的最小值: ${min}")
    }

运行结果：
    
    
    UInt8的最小值: 0

#### [h2]extend UIntNative <: MaxMinValue<UIntNative>
    
    
    extend UIntNative <: MaxMinValue<UIntNative>

功能：为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型扩展 MaxMinValue 接口。

父类型：

  * MaxMinValue<[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative)>



**static func getMax()**
    
    
    public static func getMax(): UIntNative

功能：获取 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的最大值。

返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的最大值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UIntNative 类型的最大值 */
        let max = UIntNative.getMax()
    
        /* 打印最大值 */
        println("UIntNative的最大值: ${max}")
    }

运行结果：
    
    
    UIntNative的最大值: 18446744073709551615

**static func getMin()**
    
    
    public static func getMin(): UIntNative

功能：获取 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的最小值。

返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的最小值。



示例：
    
    
    import std.math.*
    
    main(): Unit {
        /* 获取 UIntNative 类型的最小值 */
        let min = UIntNative.getMin()
    
        /* 打印最小值 */
        println("UIntNative的最小值: ${min}")
    }

运行结果：
    
    
    UIntNative的最小值: 0

#### interface Number<T>
    
    
    public interface Number<T> {
        operator func +(other: T): T
        operator func -(other: T): T
        operator func *(other: T): T
        operator func /(other: T): T
        operator func -(): T
    }

功能：提供数值类型相关的方法。

#### [h2]operator func *(T)
    
    
    operator func *(other: T): T

功能：算术运算符，计算乘法。

参数：

  * other: T - 运算符右边的数，表示另一个乘数。



返回值：

  * T - 计算所得积。



#### [h2]operator func +(T)
    
    
    operator func +(other: T): T

功能：算术运算符，计算加法。

参数：

  * other: T - 运算符右边的数，表示另一个加数。



返回值：

  * T - 计算所得和。



#### [h2]operator func -()
    
    
    operator func -(): T

功能：算术运算符，计算取负的值。

返回值：

  * T - 取负的值。



#### [h2]operator func -(T)
    
    
    operator func -(other: T): T

功能：算术运算符，计算减法。

参数：

  * other: T - 运算符右边的数，表示减数。



返回值：

  * T - 计算所得差。



#### [h2]operator func /(T)
    
    
    operator func /(other: T): T

功能：算术运算符，计算除法。

参数：

  * other: T - 运算符右边的数，表示除数。



返回值：

  * T - 计算所得商。



#### [h2]extend Float16 <: Number<Float16>
    
    
    extend Float16 <: Number<Float16> {}

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



#### [h2]extend Float32 <: Number<Float32>
    
    
    extend Float32 <: Number<Float32> {}

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



#### [h2]extend Float64 <: Number<Float64>
    
    
    extend Float64 <: Number<Float64> {}

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



#### [h2]extend Int16 <: Number<Int16>
    
    
    extend Int16 <: Number<Int16> {}

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



#### [h2]extend Int32 <: Number<Int32>
    
    
    extend Int32 <: Number<Int32> {}

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



#### [h2]extend Int64 <: Number<Int64>
    
    
    extend Int64 <: Number<Int64> {}

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



#### [h2]extend Int8 <: Number<Int8>
    
    
    extend Int8 <: Number<Int8> {}

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型扩展 Number<T> 接口。

父类型：

  * Number<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



#### [h2]extend IntNative <: Number<IntNative>
    
    
    extend IntNative <: Number<IntNative> {}

功能：为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型扩展 Number<T> 接口。

父类型：

  * Number<[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative)>



#### [h2]extend UInt16 <: Number<UInt16>
    
    
    extend UInt16 <: Number<UInt16> {}

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型扩展 Number<T> 接口。

父类型：

  * Number<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



#### [h2]extend UInt32 <: Number<UInt32>
    
    
    extend UInt32 <: Number<UInt32> {}

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型扩展 Number<T> 接口。

父类型：

  * Number<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



#### [h2]extend UInt64 <: Number<UInt64>
    
    
    extend UInt64 <: Number<UInt64> {}

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型扩展 Number<T> 接口。

父类型：

  * Number<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



#### [h2]extend UInt8 <: Number<UInt8>
    
    
    extend UInt8 <: Number<UInt8> {}

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型扩展 Number<T> 接口。

父类型：

  * Number<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



#### [h2]extend UIntNative <: Number<UIntNative>
    
    
    extend UIntNative <: Number<UIntNative> {}

功能：为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型扩展 Number<T> 接口。

父类型：

  * Number<[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative)>


