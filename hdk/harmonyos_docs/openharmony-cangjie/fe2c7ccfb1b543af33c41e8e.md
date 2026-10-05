---
name: document/cn/openharmony-cangjie/convert_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/convert_package_interfaces
source: portal
---

接口 interface Parsable<T>
    
    public interface Parsable<T> {
        static func parse(value: String): T
        static func tryParse(value: String): Option<T>
    }

功能：本接口提供了统一的方法，以支持将字符串解析为特定类型。 本接口提供了 parse 和 tryParse 两套方法，parse 方法将在解析失败时抛出异常，tryParse 方法将返回值用 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont) 包裹，解析失败时将返回 None。 本包内已经为 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)，[Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune)，[Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)，[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 等基础类型实现该接口，可用于将字符串转换为这些类型。 [h2]static func parse(String)
    
    static func parse(value: String): T

功能：从字符串中解析特定类型。 参数：
    * value: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 待解析的字符串。
返回值：
    * T - 转换后的值。
[h2]static func tryParse(String)
    
    static func tryParse(value: String): Option<T>

功能：从字符串中解析特定类型。 参数：
    * value: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 待解析的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<T> \- 转换后值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<T>.None。
[h2]extend Bool <: Parsable<Bool>
    
    extend Bool <: Parsable<Bool>

功能：此扩展主要用于实现将 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 类型字面量的字符串转换为 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Bool

功能：将 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 类型字面量的字符串转换为 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 返回转换后 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空或转换失败时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Bool>

功能：将 [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool)>.None。
[h2]extend Float16 <: Parsable<Float16>
    
    extend Float16 <: Parsable<Float16>

功能：此扩展主要用于实现将 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 类型字面量的字符串转换为 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Float16

功能：将 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 类型字面量的字符串转换为 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) \- 返回转换后 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串不符合浮点数语法时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Float16>

功能：将 [Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float16)>.None。
[h2]extend Float32 <: Parsable<Float32>
    
    extend Float32 <: Parsable<Float32>

功能：此扩展主要用于实现将 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 类型字面量的字符串转换为 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Float32

功能：将 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 类型字面量的字符串转换为 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) \- 返回转换后 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串不符合浮点数语法时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Float32>

功能：将 [Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float32)>.None。
[h2]extend Float64 <: Parsable<Float64>
    
    extend Float64 <: Parsable<Float64>

功能：此扩展主要用于实现将 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型字面量的字符串转换为 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Float64

功能：将 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型字面量的字符串转换为 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) \- 返回转换后 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串不符合浮点数语法时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Float64>

功能：将 [Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Float64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#float64)>.None。
[h2]extend Int16 <: Parsable<Int16>
    
    extend Int16 <: Parsable<Int16>

功能：此扩展主要用于实现将 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 类型字面量的字符串转换为 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Int16

功能：将 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 类型字面量的字符串转换为 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) \- 返回转换后 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + ，转换失败，或转换后超出 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Int16>

功能：将 [Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int16)>.None。
[h2]extend Int32 <: Parsable<Int32>
    
    extend Int32 <: Parsable<Int32>

功能：此扩展主要用于实现将 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 类型字面量的字符串转换为 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Int32

功能：将 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 类型字面量的字符串转换为 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) \- 返回转换后 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + ，转换失败，或转换后超出 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Int32>

功能：将 [Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int32)>.None。
[h2]extend Int64 <: Parsable<Int64>
    
    extend Int64 <: Parsable<Int64>

功能：此扩展主要用于实现将 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型字面量的字符串转换为 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Int64

功能：将 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型字面量的字符串转换为 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 返回转换后 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + ，转换失败，或转换后超出 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Int64>

功能：将 [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64)>.None。
[h2]extend Int8 <: Parsable<Int8>
    
    extend Int8 <: Parsable<Int8>

功能：此扩展主要用于实现将 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 类型字面量的字符串转换为 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Int8

功能：将 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 类型字面量的字符串转换为 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) \- 返回转换后 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + ，转换失败，或转换后超出 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Int8>

功能：将 [Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Int8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int8)>.None。
[h2]extend Rune <: Parsable<Rune>
    
    extend Rune <: Parsable<Rune>

功能：此扩展主要用于实现将 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 类型字面量的字符串转换为 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): Rune

功能：将 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 类型字面量的字符串转换为 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) \- 返回转换后 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，或转换失败时，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<Rune>

功能：将 [Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[Rune](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#rune)>.None。
[h2]extend UInt16 <: Parsable<UInt16>
    
    extend UInt16 <: Parsable<UInt16>

功能：此扩展主要用于实现将 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 类型字面量的字符串转换为 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): UInt16

功能：将 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 类型字面量的字符串转换为 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) \- 返回转换后 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + 或 -，转换失败，或转换后超出 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<UInt16>

功能：将 [UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt16](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint16)>.None。
[h2]extend UInt32 <: Parsable<UInt32>
    
    extend UInt32 <: Parsable<UInt32>

功能：此扩展主要用于实现将 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 类型字面量的字符串转换为 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): UInt32

功能：将 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 类型字面量的字符串转换为 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) \- 返回转换后 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + 或 -，转换失败，或转换后超出 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<UInt32>

功能：将 [UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt32](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint32)>.None。
[h2]extend UInt64 <: Parsable<UInt64>
    
    extend UInt64 <: Parsable<UInt64>

功能：此扩展主要用于实现将 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 类型字面量的字符串转换为 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): UInt64

功能：将 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 类型字面量的字符串转换为 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) \- 返回转换后 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + 或 -，转换失败，或转换后超出 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<UInt64>

功能：将 [UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint64)>.None。
[h2]extend UInt8 <: Parsable<UInt8>
    
    extend UInt8 <: Parsable<UInt8>

功能：此扩展主要用于实现将 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 类型字面量的字符串转换为 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 值的相关操作函数。 **static func parse(String)**
    
    public static func parse(data: String): UInt8

功能：将 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 类型字面量的字符串转换为 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) \- 返回转换后 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 值。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当字符串为空，首位为 + 或 -，转换失败，或转换后超出 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 范围，或字符串中含有无效的 UTF-8 字符时，抛出异常。
**static func tryParse(String)**
    
    public static func tryParse(data: String): Option<UInt8>

功能：将 [UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8) 类型字面量的字符串转换为 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8)> 值。 参数：
    * data: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 要转换的字符串。
返回值：
    * [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8)> \- 返回转换后 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8)> 值，转换失败返回 [Option](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_enums#enum-optiont)<[UInt8](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#uint8)>.None。
