---
name: cangjie-references/cj-unittest_prop_test_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.prop_test / 接口
---

# 接口

#### interface ArbitraryRange<T>
    
    
    public interface ArbitraryRange<T> where T <: Arbitrary<T> & Comparable<T> {
        static func min(): T
        static func max(): T
        static func arbitraryRange(random: RandomSource, min: T, max: T): Generator<T>
    }

功能：接口为不同类型提供可以在一定范围内生成值的方法。

#### [h2]func arbitraryRange(RandomSource, T, T)
    
    
    static func arbitraryRange(random: RandomSource, min: T, max: T): Generator<T>

功能：返回在范围内生成的值。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: T - 可生成范围的最小值。
  * max: T - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]func max()
    
    
    static func max(): T

功能：返回最大值。

返回值：

  * T - 最大值。



#### [h2]func min()
    
    
    static func min(): T

功能：返回最小值。

返回值：

  * T - 最小值。



#### [h2]extend Float16 <: ArbitraryRange<Float16>
    
    
    extend Float16 <: ArbitraryRange<Float16> {
        public static func min(): Float16
        public static func max(): Float16
        public static func arbitraryRange(random: RandomSource, min: Float16, max: Float16): Generator<Float16>
    }

功能：为 Float16 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Float16, Float16)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Float16, max: Float16): Generator<Float16>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Float16 - 可生成范围的最小值。
  * max: Float16 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Float16> \- 生成器。



**func max()**
    
    
    public static func max(): Float16

功能：返回最大值。

返回值：

  * Float16 - 最大值。



**func min()**
    
    
    public static func min(): Float16

功能：返回最小值。

返回值：

  * Float16 - 最小值。



#### [h2]extend Float32 <: ArbitraryRange<Float32>
    
    
    extend Float32 <: ArbitraryRange<Float32> {
        public static func min(): Float32
        public static func max(): Float32
        public static func arbitraryRange(random: RandomSource, min: Float32, max: Float32): Generator<Float32> 
    }

功能：为 Float32 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Float32, Float32)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Float32, max: Float32): Generator<Float32>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Float32 - 可生成范围的最小值。
  * max: Float32 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Float32> \- 生成器。



**func max()**
    
    
    public static func max(): Float32

功能：返回最大值。

返回值：

  * Float32 - 最大值。



**func min()**
    
    
    public static func min(): Float32

功能：返回最小值。

返回值：

  * Float32 - 最小值。



#### [h2]extend Float64 <: ArbitraryRange<Float64>
    
    
    extend Float64 <: ArbitraryRange<Float64> {
        public static func min(): Float64
        public static func max(): Float64
        public static func arbitraryRange(random: RandomSource, min: Float64, max: Float64): Generator<Float64> 
    }

功能：为 Float64 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Float64, Float64)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Float64, max: Float64): Generator<Float64>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Float64 - 可生成范围的最小值。
  * max: Float64 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Float64> \- 生成器。



**func max()**
    
    
    public static func max(): Float64

功能：返回最大值。

返回值：

  * Float64 - 最大值。



**func min()**
    
    
    public static func min(): Float64

功能：返回最小值。

返回值：

  * Float64 - 最小值。



#### [h2]extend Int16 <: ArbitraryRange<Int16>
    
    
    extend Int16 <: ArbitraryRange<Int16> {
        public static func min(): Int16
        public static func max(): Int16
        public static func arbitraryRange(random: RandomSource, min: Int16, max: Int16): Generator<Int16> 
    }

功能：为 Int16 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Int16, Int16)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Int16, max: Int16): Generator<Int16>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Int16 - 可生成范围的最小值。
  * max: Int16 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int16> \- 生成器。



**func max()**
    
    
    public static func max(): Int16

功能：返回最大值。

返回值：

  * Int16 - 最大值。



**func min()**
    
    
    public static func min(): Int16

功能：返回最小值。

返回值：

  * Int16 - 最小值。



#### [h2]extend Int32 <: ArbitraryRange<Int32>
    
    
    extend Int32 <: ArbitraryRange<Int32> {
        public static func min(): Int32
        public static func max(): Int32
        public static func arbitraryRange(random: RandomSource, min: Int32, max: Int32): Generator<Int32> 
    }

功能：为 Int32 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Int32, Int32)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Int32, max: Int32): Generator<Int32>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Int32 - 可生成范围的最小值。
  * max: Int32 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int32> \- 生成器。



**func max()**
    
    
    public static func max(): Int32

功能：返回最大值。

返回值：

  * Int32 - 最大值。



**func min()**
    
    
    public static func min(): Int32

功能：返回最小值。

返回值：

  * Int32 - 最小值。



#### [h2]extend Int64 <: ArbitraryRange<Int64>
    
    
    extend Int64 <: ArbitraryRange<Int64> {
        public static func min(): Int64
        public static func max(): Int64
        public static func arbitraryRange(random: RandomSource, min: Int64, max: Int64): Generator<Int64> 
    }

功能：为 Int64 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Int64, Int64)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Int64, max: Int64): Generator<Int64>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Int64 - 可生成范围的最小值。
  * max: Int64 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int64> \- 生成器。



**func max()**
    
    
    public staticfunc max(): Int64

功能：返回最大值。

返回值：

  * Int64 - 最大值。



**func min()**
    
    
    public staticfunc min(): Int64

功能：返回最小值。

返回值：

  * Int64 - 最小值。



#### [h2]extend Int8 <: ArbitraryRange<Int8>
    
    
    extend Int8 <: ArbitraryRange<Int8> {
        public static func min(): Int8
        public static func max(): Int8
        public static func arbitraryRange(random: RandomSource, min: Int8, max: Int8): Generator<Int8> 
    }

功能：为 Int8 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, Int8, Int8)**
    
    
    public static func arbitraryRange(random: RandomSource, min: Int8, max: Int8): Generator<Int8>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: Int8 - 可生成范围的最小值。
  * max: Int8 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int8> \- 生成器。



**func max()**
    
    
    public staticfunc max(): Int8

功能：返回最大值。

返回值：

  * Int8 - 最大值。



**func min()**
    
    
    public staticfunc min(): Int8

功能：返回最小值。

返回值：

  * Int8 - 最小值。



#### [h2]extend IntNative <: ArbitraryRange<IntNative>
    
    
    extend IntNative <: ArbitraryRange<IntNative> {
        public static func min(): IntNative
        public static func max(): IntNative
        public static func arbitraryRange(random: RandomSource, min: IntNative, max: IntNative): Generator<IntNative> 
    }

功能：为 IntNative 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, IntNative, IntNative)**
    
    
    public static func arbitraryRange(random: RandomSource, min: IntNative, max: IntNative): Generator<IntNative>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: IntNative - 可生成范围的最小值。
  * max: IntNative - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<IntNative> \- 生成器。



**func max()**
    
    
    public staticfunc max(): IntNative

功能：返回最大值。

返回值：

  * IntNative - 最大值。



**func min()**
    
    
    public staticfunc min(): IntNative

功能：返回最小值。

返回值：

  * IntNative - 最小值。



#### [h2]extend UInt16 <: ArbitraryRange<UInt16>
    
    
    extend UInt16 <: ArbitraryRange<UInt16> {
        public static func min(): UInt16
        public static func max(): UInt16
        public static func arbitraryRange(random: RandomSource, min: UInt16, max: UInt16): Generator<UInt16> 
    }

功能：为 UInt16 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, UInt16, UInt16)**
    
    
    public static func arbitraryRange(random: RandomSource, min: UInt16, max: UInt16): Generator<UInt16>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: UInt16 - 可生成范围的最小值。
  * max: UInt16 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt16> \- 生成器。



**func max()**
    
    
    public staticfunc max(): UInt16

功能：返回最大值。

返回值：

  * UInt16 - 最大值。



**func min()**
    
    
    public staticfunc min(): UInt16

功能：返回最小值。

返回值：

  * UInt16 - 最小值。



#### [h2]extend UInt32 <: ArbitraryRange<UInt32>
    
    
    extend UInt32 <: ArbitraryRange<UInt32> {
        public static func min(): UInt32
        public static func max(): UInt32
        public static func arbitraryRange(random: RandomSource, min: UInt32, max: UInt32): Generator<UInt32> 
    }

功能：为 UInt32 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, UInt32, UInt32)**
    
    
    public static func arbitraryRange(random: RandomSource, min: UInt32, max: UInt32): Generator<UInt32>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: UInt32 - 可生成范围的最小值。
  * max: UInt32 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt32> \- 生成器。



**func max()**
    
    
    public staticfunc max(): UInt32

功能：返回最大值。

返回值：

  * UInt32 - 最大值。



**func min()**
    
    
    public staticfunc min(): UInt32

功能：返回最小值。

返回值：

  * UInt32 - 最小值。



#### [h2]extend UInt64 <: ArbitraryRange<UInt64>
    
    
    extend UInt64 <: ArbitraryRange<UInt64> {
        public static func min(): UInt64
        public static func max(): UInt64
        public static func arbitraryRange(random: RandomSource, min: UInt64, max: UInt64): Generator<UInt64> 
    }

功能：为 UInt64 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, UInt64, UInt64)**
    
    
    public static func arbitraryRange(random: RandomSource, min: UInt64, max: UInt64): Generator<UInt64>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: UInt64 - 可生成范围的最小值。
  * max: UInt64 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt64> \- 生成器。



**func max()**
    
    
    public staticfunc max(): UInt64

功能：返回最大值。

返回值：

  * UInt64 - 最大值。



**func min()**
    
    
    public staticfunc min(): UInt64

功能：返回最小值。

返回值：

  * UInt64 - 最小值。



#### [h2]extend UInt8 <: ArbitraryRange<UInt8>
    
    
    extend UInt8 <: ArbitraryRange<UInt8> {
        public static func min(): UInt8
        public static func max(): UInt8
        public static func arbitraryRange(random: RandomSource, min: UInt8, max: UInt8): Generator<UInt8> 
    }

功能：为 UInt8 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, UInt8, UInt8)**
    
    
    public static func arbitraryRange(random: RandomSource, min: UInt8, max: UInt8): Generator<UInt8>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: UInt8 - 可生成范围的最小值。
  * max: UInt8 - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt8> \- 生成器。



**func max()**
    
    
    public staticfunc max(): UInt8

功能：返回最大值。

返回值：

  * UInt8 - 最大值。



**func min()**
    
    
    public staticfunc min(): UInt8

功能：返回最小值。

返回值：

  * UInt8 - 最小值。



#### [h2]extend UIntNative <: ArbitraryRange<UIntNative>
    
    
    extend UIntNative <: ArbitraryRange<UIntNative> {
        public static func min(): UIntNative
        public static func max(): UIntNative
        public static func arbitraryRange(random: RandomSource, min: UIntNative, max: UIntNative): Generator<UIntNative> 
    }

功能：为 UIntNative 类型实现的可以在一定范围内生成值的方法。

**func arbitraryRange(RandomSource, UIntNative, UIntNative)**
    
    
    public static func arbitraryRange(random: RandomSource, min: UIntNative, max: UIntNative): Generator<UIntNative>

功能：返回在范围内生成的值。

参数：

  * random:[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数源。
  * min: UIntNative - 可生成范围的最小值。
  * max: UIntNative - 可生成范围的最大值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UIntNative> \- 生成器。



**func max()**
    
    
    public staticfunc max(): UIntNative

功能：返回最大值。

返回值：

  * UIntNative - 最大值。



**func min()**
    
    
    public staticfunc min(): UIntNative

功能：返回最小值。

返回值：

  * UIntNative - 最小值。



#### interface Arbitrary<T>
    
    
    public interface Arbitrary<T> {
        static func arbitrary(random: RandomSource): Generator<T>
    }

功能：生成 T 类型随机值的接口。

#### [h2]static func arbitrary(RandomSource)
    
    
    static func arbitrary(random: RandomSource): Generator<T>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成 T 类型随机值生成器。



#### [h2]extend Bool <: Arbitrary<Bool>
    
    
    extend Bool <: Arbitrary<Bool>

功能：为 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Bool>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Bool> \- 生成 Bool 类型随机值生成器。



#### [h2]extend Float16 <: Arbitrary<Float16>
    
    
    extend Float16 <: Arbitrary<Float16>

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Float16>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Float16> \- 生成 Float16 类型随机值生成器。



#### [h2]extend Float32 <: Arbitrary<Float32>
    
    
    extend Float32 <: Arbitrary<Float32>

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Float32>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Float32> \- 生成 Float32 类型随机值生成器。



#### [h2]extend Float64 <: Arbitrary<Float64>
    
    
    extend Float64 <: Arbitrary<Float64>

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Float64>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Float64> \- 生成 Float64 类型随机值生成器。



#### [h2]extend Int16 <: Arbitrary<Int16>
    
    
    extend Int16 <: Arbitrary<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Int16>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int16> \- 生成 Int16 类型随机值生成器。



#### [h2]extend Int32 <: Arbitrary<Int32>
    
    
    extend Int32 <: Arbitrary<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Int32>

功能：获取生成 T 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int32> \- 生成 Int32 类型随机值生成器。



#### [h2]extend Int64 <: Arbitrary<Int64>
    
    
    extend Int64 <: Arbitrary<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Int64>

功能：获取生成 Int64 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int64> \- 生成 Int64 类型随机值生成器。



#### [h2]extend Int8 <: Arbitrary<Int8>
    
    
    extend Int8 <: Arbitrary<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Int8>

功能：获取生成 Int8 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Int8> \- 生成 Int8 类型随机值生成器。



#### [h2]extend IntNative <: Arbitrary<IntNative>
    
    
    extend IntNative <: Arbitrary<IntNative>

功能：为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<IntNative>

功能：获取生成 IntNative 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<IntNative> \- 生成 IntNative 类型随机值生成器。



#### [h2]extend Ordering <: Arbitrary<Ordering>
    
    
    extend Ordering <: Arbitrary<Ordering>

功能：为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Ordering>

功能：获取生成 Ordering 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Ordering> \- 生成 Ordering 类型随机值生成器。



#### [h2]extend Rune <: Arbitrary<Rune>
    
    
    extend Rune <: Arbitrary<Rune>

功能：为 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Rune>

功能：获取生成 Rune 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Rune> \- 生成 Rune 类型随机值生成器。



#### [h2]extend String <: Arbitrary<String>
    
    
    extend String <: Arbitrary<String>

功能：为 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<String>

功能：获取生成 String 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<String> \- 生成 String 类型随机值生成器。



#### [h2]extend UInt16 <: Arbitrary<UInt16>
    
    
    extend UInt16 <: Arbitrary<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<UInt16>

功能：获取生成 UInt16 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt16> \- 生成 UInt16 类型随机值生成器。



#### [h2]extend UInt32 <: Arbitrary<UInt32>
    
    
    extend UInt32 <: Arbitrary<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<UInt32>

功能：获取生成 UInt32 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt32> \- 生成 UInt32 类型随机值生成器。



#### [h2]extend UInt64 <: Arbitrary<UInt64>
    
    
    extend UInt64 <: Arbitrary<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<UInt64>

功能：获取生成 UInt64 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt64> \- 生成 UInt64 类型随机值生成器。



#### [h2]extend UInt8 <: Arbitrary<UInt8>
    
    
    extend UInt8 <: Arbitrary<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<UInt8>

功能：获取生成 UInt8 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UInt8> \- 生成 UInt8 类型随机值生成器。



#### [h2]extend UIntNative <: Arbitrary<UIntNative>
    
    
    extend UIntNative <: Arbitrary<UIntNative>

功能：为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<UIntNative>

功能：获取生成 UIntNative 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<UIntNative> \- 生成 UIntNative 类型随机值生成器。



#### [h2]extend Unit <: Arbitrary<Unit>
    
    
    extend Unit <: Arbitrary<Unit>

功能：为 [Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) 实现了 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit)>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(_: RandomSource): Generator<Unit>

功能：获取生成 Unit 类型随机值生成器。

参数：

  * _: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Unit> \- 生成 Unit 类型随机值生成器。



#### [h2]extend<T> Array<T> <: Arbitrary<Array<T>> where T <: Arbitrary<T>
    
    
    extend<T> Array<T> <: Arbitrary<Array<T>> where T <: Arbitrary<T>

功能：为 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> 实现了 Arbitrary<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T>> 接口，且 T 需实现 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Array<T>>

功能：获取生成 Array<T> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Array<T>> \- 生成 Array<T> 类型随机值生成器。



#### [h2]extend<T> Option<T> <: Arbitrary<Option<T>> where T <: Arbitrary<T>
    
    
    extend<T> option<T> <: Arbitrary<Option<T>> where T <: Arbitrary<T>

功能：为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实现了 Arbitrary<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>> 接口，且 T 需实现 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Option<T>>

功能：获取生成 option<T> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<Option<T>> \- 生成 option<T> 类型随机值生成器。



#### [h2]extend<T> ArrayList<T> <: Arbitrary<ArrayList<T>> where T <: Arbitrary<T>
    
    
    extend<T> ArrayList<T> <: Arbitrary<ArrayList<T>> where T <: Arbitrary<T> 

功能：为 [ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)<T> 实现了 Arbitrary 接口，且 T 需实现 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)<T>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<ArrayList<T>>

功能：获取生成 ArrayList<T> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<ArrayList<T>> \- 生成 ArrayList<T> 类型随机值生成器。



#### [h2]extend<T> HashSet<T> <: Arbitrary<HashSet<T>> where T <: Arbitrary<T>
    
    
    extend<T> HashSet<T> <: Arbitrary<HashSet<T>> where T <: Arbitrary<T>

功能：为 [HashSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet)<T> 实现了 Arbitrary 接口，且 T 需实现 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[HashSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet)<T>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<HashSet<T>>

功能：获取生成 HashSet<T> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<HashSet<T>> \- 生成 HashSet<T> 类型随机值生成器。



#### [h2]extend<K, V> HashMap<K, V> <: Arbitrary<HashMap<K, V>> where K <: Arbitrary<K>, V <: Arbitrary<V>
    
    
    extend<K, V> HashMap<K, V> <: Arbitrary<HashMap<K, V>> where K <: Arbitrary<K>, V <: Arbitrary<V>

功能：为 [HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<T> 实现了 Arbitrary 接口，且 T 需实现 Arbitrary<T> 接口。

父类型：

  * Arbitrary<[HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<K, V>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<HashMap<K, V>>

功能：获取生成 HashMap<K, V> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<HashMap<K, V>> \- 生成 HashMap<K, V> 类型随机值生成器。



#### interface Generator<T>
    
    
    public interface Generator<T> {
        func next(): T
    }

功能：生成器生成 T 类型的值。

#### [h2]func next()
    
    
    func next(): T

功能：获取生成出来的 T 类型的值。

返回值：

  * T - 生成的 T 类型的值。



#### interface IndexAccess
    
    
    public interface IndexAccess {
        func getElementAsAny(index: Int64): ?Any
    }

功能：通过索引访问元组元素的实用程序接口。

#### [h2]func getElementAsAny(Int64)
    
    
    func getElementAsAny(index: Int64): ?Any

功能：通过索引访问元组元素。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 索引值。



返回值：

  * ?[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 元素值。若未获取到则为 None 。



#### interface RandomSource
    
    
    public interface RandomSource {
        func nextBool(): Bool
        func nextInt8(): Int8
        func nextInt16(): Int16
        func nextInt32(): Int32
        func nextInt64(): Int64
        func nextInt8(max: Int8): Int8
        func nextInt16(max: Int16): Int16
        func nextInt32(max: Int32): Int32
        func nextInt64(max: Int64): Int64
        func nextUInt8(): UInt8
        func nextUInt16(): UInt16
        func nextUInt32(): UInt32
        func nextUInt64(): UInt64
        func nextUInt8(max: UInt8): UInt8
        func nextUInt16(max: UInt16): UInt16
        func nextUInt32(max: UInt32): UInt32
        func nextUInt64(max: UInt64): UInt64
        func nextFloat16(): Float16
        func nextFloat32(): Float32
        func nextFloat64(): Float64
        func nextGaussianFloat64(mean!: Float64, sigma!: Float64): Float64
        func nextIntNative(): IntNative
        func nextUIntNative(): UIntNative
    
        func suggestUInt8(): UInt8
        func suggestUInt16(): UInt16
        func suggestUInt32(): UInt32
        func suggestUInt64(): UInt64
        func suggestUIntNative(): UIntNative
        func suggestInt8(): Int8
        func suggestInt16(): Int16
        func suggestInt32(): Int32
        func suggestInt64(): Int64
        func suggestIntNative(): IntNative
        func suggestFloat16(): Float16
        func suggestFloat32(): Float32
        func suggestFloat64(): Float64
        func suggestBool(): Bool
        func suggestRune(): Rune
    
        func suggestInt64(l: Int64, r: Int64): Int64
        func suggestUInt64(l: UInt64, r: UInt64): UInt64
        func suggestInt32(l: Int32, r: Int32): Int32
        func suggestUInt32(l: UInt32, r: UInt32): UInt32
        func suggestInt16(l: Int16, r: Int16): Int16
        func suggestUInt16(l: UInt16, r: UInt16): UInt16
        func suggestInt8(l: Int8, r: Int8): Int8
        func suggestUInt8(l: UInt8, r: UInt8): UInt8
        func suggestIntNative(l: IntNative, r: IntNative): IntNative
        func suggestUIntNative(l: UIntNative, r: UIntNative): UIntNative
        func suggestFloat64(l: Float64, r: Float64): Float64
        func suggestFloat32(l: Float32, r: Float32): Float32
        func suggestFloat16(l: Float16, r: Float16): Float16
    }

功能：提供 Arbitrary 所需的随机生成基础类型数据的能力。

#### [h2]func nextBool()
    
    
    func nextBool(): Bool

功能：获取一个布尔类型的伪随机值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 一个 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的伪随机数。



#### [h2]func nextFloat16()
    
    
    func nextFloat16(): Float16

功能：获取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。



#### [h2]func nextFloat32()
    
    
    func nextFloat32(): Float32

功能：获取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。



#### [h2]func nextFloat64()
    
    
    func nextFloat64(): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。



#### [h2]func nextGaussianFloat64(Float64, Float64)
    
    
    func nextGaussianFloat64(mean!: Float64, sigma!: Float64): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的符合指定均值与标准差的高斯分布的随机数。

默认获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型且符合均值为 0.0 标准差为 1.0 的高斯分布的随机数。其中均值是期望值，可解释为位置参数，决定了分布的位置，标准差可解释为尺度参数，决定了分布的幅度。此函数调用了函数 nextGaussianFloat64Implement 得到返回值，所以当子类继承 [Random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_classes#class-random) 并覆写 nextGaussianFloat64Implement 函数时，调用子类的该函数将会返回覆写的函数的返回值。

参数：

  * mean!: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 均值，默认值 0.0。
  * sigma!: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 标准差，默认值 1.0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的随机数。



#### [h2]func nextInt16()
    
    
    func nextInt16(): Int16

功能：获取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



#### [h2]func nextInt16(Int16)
    
    
    func nextInt16(max: Int16): Int16

功能：获取一个范围在 [0, max) 的 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

参数：

  * max: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 表示生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16).Max]。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



#### [h2]func nextInt32()
    
    
    func nextInt32(): Int32

功能：获取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



#### [h2]func nextInt32(Int32)
    
    
    func nextInt32(max: Int32): Int32

功能：获取一个范围在 [0, max) 的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

参数：

  * max: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 表示生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).Max]。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



#### [h2]func nextInt64()
    
    
    func nextInt64(): Int64

功能：获取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



#### [h2]func nextInt64(Int64)
    
    
    func nextInt64(max: Int64): Int64

功能：获取一个范围在 [0, max) 的 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

参数：

  * max: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64).Max]。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



#### [h2]func nextInt8()
    
    
    func nextInt8(): Int8

功能：获取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



#### [h2]func nextInt8(Int8)
    
    
    func nextInt8(max: Int8): Int8

功能：获取一个范围在 [0, max) 的 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

参数：

  * max: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8).Max]。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



#### [h2]func nextIntNative()
    
    
    func nextIntNative(): IntNative

功能：获取一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。

返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。



#### [h2]func nextUInt16()
    
    
    func nextUInt16(): UInt16

功能：获取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。

返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。



#### [h2]func nextUInt16(UInt16)
    
    
    func nextUInt16(max: UInt16): UInt16

功能：获取一个范围在 [0, max) 的 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。

参数：

  * max: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16).Max]。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 等于 0，抛出异常。



#### [h2]func nextUInt32()
    
    
    func nextUInt32(): UInt32

功能：获取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。

返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。



#### [h2]func nextUInt32(UInt32)
    
    
    func nextUInt32(max: UInt32): UInt32

功能：获取一个范围在 [0, max) 的 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。

参数：

  * max: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32).Max]。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 等于 0，抛出异常。



#### [h2]func nextUInt64()
    
    
    func nextUInt64(): UInt64

功能：获取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。

返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。



#### [h2]func nextUInt64(UInt64)
    
    
    func nextUInt64(max: UInt64): UInt64

功能：获取一个范围在 [0, max) 的 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。

参数：

  * max: [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64).Max]。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 等于 0，抛出异常。



#### [h2]func nextUInt8()
    
    
    func nextUInt8(): UInt8

功能：获取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。

返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。



#### [h2]func nextUInt8(UInt8)
    
    
    func nextUInt8(max: UInt8): UInt8

功能：获取一个范围在 [0, max) 的 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。

参数：

  * max: [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8).Max]。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 等于 0，抛出异常。



#### [h2]func nextUIntNative()
    
    
    func nextUIntNative(): UIntNative

功能：获取一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。

返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。



#### [h2]func suggestBool()
    
    
    func suggestBool(): Bool

功能：获取一个布尔类型的伪随机值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 一个 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的伪随机数。



#### [h2]func suggestRune()
    
    
    func suggestRune(): Rune

功能：获取一个 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的伪随机值。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 一个 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的伪随机数。



#### [h2]func suggestFloat16()
    
    
    func suggestFloat16(): Float16

功能：获取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。



#### [h2]func suggestFloat32()
    
    
    func suggestFloat32(): Float32

功能：获取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。



#### [h2]func suggestFloat64()
    
    
    func suggestFloat64(): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。



#### [h2]func suggestInt16()
    
    
    func suggestInt16(): Int16

功能：获取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



#### [h2]func suggestInt32()
    
    
    func suggestInt32(): Int32

功能：获取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



#### [h2]func suggestInt64()
    
    
    func suggestInt64(): Int64

功能：获取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



#### [h2]func suggestInt8()
    
    
    func suggestInt8(): Int8

功能：获取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



#### [h2]func suggestIntNative()
    
    
    func suggestIntNative(): IntNative

功能：获取一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。

返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。



#### [h2]func suggestUInt16()
    
    
    func suggestUInt16(): UInt16

功能：获取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。

返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。



#### [h2]func suggestUInt32()
    
    
    func suggestUInt32(): UInt32

功能：获取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。

返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。



#### [h2]func suggestUInt64()
    
    
    func suggestUInt64(): UInt64

功能：获取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。

返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。



#### [h2]func suggestUInt8()
    
    
    func suggestUInt8(): UInt8

功能：获取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。

返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。



#### [h2]func suggestUIntNative()
    
    
    func suggestUIntNative(): UIntNative

功能：获取一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。

返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。



#### [h2]func suggestInt64(Int64, Int64)
    
    
    func suggestInt64(l: Int64, r: Int64): Int64

功能：获取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

参数：

  * l: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 可生成范围的最小值。
  * r: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 可生成范围的最大值。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



#### [h2]func suggestUInt64(UInt64, UInt64)
    
    
    func suggestUInt64(l: UInt64, r: UInt64): UInt64

功能：获取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。

参数：

  * l: UInt64 - 可生成范围的最小值。
  * r: UInt64 - 可生成范围的最大值。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。



#### [h2]func suggestInt32(Int32, Int32)
    
    
    func suggestInt32(l: Int32, r: Int32): Int32

功能：获取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

参数：

  * l: Int32 - 可生成范围的最小值。
  * r: Int32 - 可生成范围的最大值。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



#### [h2]func suggestUInt32(UInt32, UInt32)
    
    
    func suggestUInt32(l: UInt32, r: UInt32): UInt32

功能：获取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。

参数：

  * l: UInt32 - 可生成范围的最小值。
  * r: UInt32 - 可生成范围的最大值。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。



#### [h2]func suggestInt16(Int16, Int16)
    
    
    func suggestInt16(l: Int16, r: Int16): Int16

功能：获取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

参数：

  * l: Int16 - 可生成范围的最小值。
  * r: Int16 - 可生成范围的最大值。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



#### [h2]func suggestUInt16(UInt16, UInt16)
    
    
    func suggestUInt16(l: UInt16, r: UInt16): UInt16

功能：获取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。

参数：

  * l: UInt16 - 可生成范围的最小值。
  * r: UInt16 - 可生成范围的最大值。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。



#### [h2]func suggestInt8(Int8, Int8)
    
    
    func suggestInt8(l: Int8, r: Int8): Int8

功能：获取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

参数：

  * l: Int8 - 可生成范围的最小值。
  * r: Int8 - 可生成范围的最大值。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



#### [h2]func suggestUInt8(UInt8, UInt8)
    
    
    func suggestUInt8(l: UInt8, r: UInt8): UInt8

功能：获取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。

参数：

  * l: UInt8 - 可生成范围的最小值。
  * r: UInt8 - 可生成范围的最大值。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。



#### [h2]func suggestIntNative(IntNative, IntNative)
    
    
    func suggestIntNative(l: IntNative, r: IntNative): IntNative

功能：获取一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。

参数：

  * l: IntNative - 可生成范围的最小值。
  * r: IntNative - 可生成范围的最大值。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。



#### [h2]func suggestUIntNative(UIntNative, UIntNative)
    
    
    func suggestUIntNative(l: UIntNative, r: UIntNative): UIntNative

功能：获取一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。

参数：

  * l: UIntNative - 可生成范围的最小值。
  * r: UIntNative - 可生成范围的最大值。



返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。



#### [h2]func suggestFloat64(Float64, Float64)
    
    
    func suggestFloat64(l: Float64, r: Float64): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。

参数：

  * l: Float64 - 可生成范围的最小值。
  * r: Float64 - 可生成范围的最大值。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。



#### [h2]func suggestFloat32(Float32, Float32)
    
    
    func suggestFloat32(l: Float32, r: Float32): Float32

功能：获取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。

参数：

  * l: Float32 - 可生成范围的最小值。
  * r: Float32 - 可生成范围的最大值。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。



#### [h2]func suggestFloat16(Float16, Float16)
    
    
    func suggestFloat16(l: Float16, r: Float16): Float16

功能：获取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。

参数：

  * l: Float16 - 可生成范围的最小值。
  * r: Float16 - 可生成范围的最大值。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。



#### [h2]extend Random
    
    
    extend Random <: RandomSource

功能：对 Random 类型扩展 RandomSource 接口。

**func nextBool()**
    
    
    public func nextBool(): Bool

功能：获取一个布尔类型的伪随机值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 一个 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的伪随机数。



**func nextFloat16()**
    
    
    public func nextFloat16(): Float16

功能：获取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。



**func nextFloat32()**
    
    
    public func nextFloat32(): Float32

功能：获取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。



**func nextFloat64()**
    
    
    public func nextFloat64(): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。



**func nextGaussianFloat64(Float64, Float64)**
    
    
    public func nextGaussianFloat64(mean!: Float64 = 0.0, sigma!: Float64 = 1.0): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的符合指定均值与标准差的高斯分布的随机数。

默认获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型且符合均值为 0.0 标准差为 1.0 的高斯分布的随机数。其中均值是期望值，可解释为位置参数，决定了分布的位置，标准差可解释为尺度参数，决定了分布的幅度。此函数调用了函数 nextGaussianFloat64Implement 得到返回值，所以当子类继承 [Random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_classes#class-random) 并覆写 nextGaussianFloat64Implement 函数时，调用子类的该函数将会返回覆写的函数的返回值。

参数：

  * mean!: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 均值，默认值 0.0。
  * sigma!: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 标准差，默认值 1.0。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的随机数。



**func nextInt16()**
    
    
    public func nextInt16(): Int16

功能：获取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



**func nextInt16(Int16)**
    
    
    public func nextInt16(max: Int16): Int16

功能：获取一个范围在 [0, max) 的 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

参数：

  * max: [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 表示生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16).Max]。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



**func nextInt32()**
    
    
    public func nextInt32(): Int32

功能：获取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



**func nextInt32(Int32)**
    
    
    public func nextInt32(max: Int32): Int32

功能：获取一个范围在 [0, max) 的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

参数：

  * max: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 表示生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32).Max]。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



**func nextInt64()**
    
    
    public func nextInt64(): Int64

功能：获取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



**func nextInt64(Int64)**
    
    
    public func nextInt64(max: Int64): Int64

功能：获取一个范围在 [0, max) 的 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

参数：

  * max: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64).Max]。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



**func nextInt8()**
    
    
    public func nextInt8(): Int8

功能：获取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



**func nextInt8(Int8)**
    
    
    public func nextInt8(max: Int8): Int8

功能：获取一个范围在 [0, max) 的 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

参数：

  * max: [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 生成的伪随机数范围上界（不包括 max），取值范围 (0, [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8).Max]。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 max 小于等于 0，抛出异常。



**func nextIntNative()**
    
    
    public func nextIntNative(): IntNative

功能：获取一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。

返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。



**func nextUIntNative()**
    
    
    public func nextUIntNative(): UIntNative

功能：获取一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。

返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。



**func suggestBool()**
    
    
    public func suggestBool(): Bool

功能：获取一个布尔类型的伪随机值。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 一个 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的伪随机数。



**func suggestRune()**
    
    
    public func suggestRune(): Rune

功能：获取一个 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的伪随机值。

返回值：

  * [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) \- 一个 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 类型的伪随机数。



**func suggestFloat16()**
    
    
    public func suggestFloat16(): Float16

功能：获取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。



**func suggestFloat32()**
    
    
    public func suggestFloat32(): Float32

功能：获取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。



**func suggestFloat64()**
    
    
    public func suggestFloat64(): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数，其范围为 [0.0, 1.0)。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。



**func suggestInt16()**
    
    
    public func suggestInt16(): Int16

功能：获取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



**func suggestInt32()**
    
    
    public func suggestInt32(): Int32

功能：获取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



**func suggestInt64()**
    
    
    public func suggestInt64(): Int64

功能：获取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



**func suggestInt8()**
    
    
    public func suggestInt8(): Int8

功能：获取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



**func suggestIntNative()**
    
    
    public func suggestIntNative(): IntNative

功能：获取一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。

返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。



**func suggestUInt16()**
    
    
    public func suggestUInt16(): UInt16

功能：获取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。

返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。



**func suggestUInt32()**
    
    
    public func suggestUInt32(): UInt32

功能：获取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。

返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。



**func suggestUInt64()**
    
    
    public func suggestUInt64(): UInt64

功能：获取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。

返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。



**func suggestUInt8()**
    
    
    public func suggestUInt8(): UInt8

功能：获取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。

返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。



**func suggestUIntNative()**
    
    
    public func suggestUIntNative(): UIntNative

功能：获取一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。

返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。



**func suggestInt64(Int64, Int64)**
    
    
    public func suggestInt64(l: Int64, r: Int64): Int64

功能：获取一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。

参数：

  * l: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 可生成范围的最小值。
  * r: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 可生成范围的最大值。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 一个 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的伪随机数。



**func suggestUInt64(UInt64, UInt64)**
    
    
    public func suggestUInt64(l: UInt64, r: UInt64): UInt64

功能：获取一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。

参数：

  * l: UInt64 - 可生成范围的最小值。
  * r: UInt64 - 可生成范围的最大值。



返回值：

  * [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) \- 一个 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 类型的伪随机数。



**func suggestInt32(Int32, Int32)**
    
    
    public func suggestInt32(l: Int32, r: Int32): Int32

功能：获取一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。

参数：

  * l: Int32 - 可生成范围的最小值。
  * r: Int32 - 可生成范围的最大值。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 一个 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 类型的伪随机数。



**func suggestUInt32(UInt32, UInt32)**
    
    
    public func suggestUInt32(l: UInt32, r: UInt32): UInt32

功能：获取一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。

参数：

  * l: UInt32 - 可生成范围的最小值。
  * r: UInt32 - 可生成范围的最大值。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 一个 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 类型的伪随机数。



**func suggestInt16(Int16, Int16)**
    
    
    public func suggestInt16(l: Int16, r: Int16): Int16

功能：获取一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。

参数：

  * l: Int16 - 可生成范围的最小值。
  * r: Int16 - 可生成范围的最大值。



返回值：

  * [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) \- 一个 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 类型的伪随机数。



**func suggestUInt16(UInt16, UInt16)**
    
    
    public func suggestUInt16(l: UInt16, r: UInt16): UInt16

功能：获取一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。

参数：

  * l: UInt16 - 可生成范围的最小值。
  * r: UInt16 - 可生成范围的最大值。



返回值：

  * [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 一个 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 类型的伪随机数。



**func suggestInt8(Int8, Int8)**
    
    
    public func suggestInt8(l: Int8, r: Int8): Int8

功能：获取一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。

参数：

  * l: Int8 - 可生成范围的最小值。
  * r: Int8 - 可生成范围的最大值。



返回值：

  * [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) \- 一个 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 类型的伪随机数。



**func suggestUInt8(UInt8, UInt8)**
    
    
    public func suggestUInt8(l: UInt8, r: UInt8): UInt8

功能：获取一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。

参数：

  * l: UInt8 - 可生成范围的最小值。
  * r: UInt8 - 可生成范围的最大值。



返回值：

  * [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) \- 一个 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 类型的伪随机数。



**func suggestIntNative(IntNative, IntNative)**
    
    
    public func suggestIntNative(l: IntNative, r: IntNative): IntNative

功能：获取一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。

参数：

  * l: IntNative - 可生成范围的最小值。
  * r: IntNative - 可生成范围的最大值。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 一个 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 类型的伪随机数。



**func suggestUIntNative(UIntNative, UIntNative)**
    
    
    public func suggestUIntNative(l: UIntNative, r: UIntNative): UIntNative

功能：获取一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。

参数：

  * l: UIntNative - 可生成范围的最小值。
  * l: UIntNative - 可生成范围的最大值。



返回值：

  * [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 一个 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 类型的伪随机数。



**func suggestFloat64(Float64, Float64)**
    
    
    public func suggestFloat64(l: Float64, r: Float64): Float64

功能：获取一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。

参数：

  * l: Float64 - 可生成范围的最小值。
  * r: Float64 - 可生成范围的最大值。



返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 一个 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 类型的伪随机数。



**func suggestFloat32(Float32, Float32)**
    
    
    public func suggestFloat32(l: Float32, r: Float32): Float32

功能：获取一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。

参数：

  * l: Float32 - 可生成范围的最小值。
  * l: Float32 - 可生成范围的最大值。



返回值：

  * [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 一个 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 类型的伪随机数。



**func suggestFloat16(Float16, Float16)**
    
    
    public func suggestFloat16(l: Float16, r: Float16): Float16

功能：获取一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。

参数：

  * l: Float16 - 可生成范围的最小值。
  * l: Float16 - 可生成范围的最大值。



返回值：

  * [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 一个 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 类型的伪随机数。



#### interface Shrink<T>
    
    
    public interface Shrink<T> {
        func shrink(): Iterable<T>
    }

功能：将 T 类型的值缩减到多个“更小”的值。

#### [h2]func shrink()
    
    
    func shrink(): Iterable<T>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Bool <: Shrink<Bool>
    
    
    extend Bool <: Shrink<Bool>

功能：为 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)>



**func shrink()**
    
    
    public func shrink(): Iterable<Bool>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Bool> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Int16 <: Shrink<Int16>
    
    
    extend Int16 <: Shrink<Int16>

功能：为 [Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)>



**func shrink()**
    
    
    public func shrink(): Iterable<Int16>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Int16> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Int32 <: Shrink<Int32>
    
    
    extend Int32 <: Shrink<Int32>

功能：为 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)>



**func shrink()**
    
    
    public func shrink(): Iterable<Int32>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Int32> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Int64 <: Shrink<Int64>
    
    
    extend Int64 <: Shrink<Int64>

功能：为 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



**func shrink()**
    
    
    public func shrink(): Iterable<Int64>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Int64> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Int8 <: Shrink<Int8>
    
    
    extend Int8 <: Shrink<Int8>

功能：为 [Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)>



**func shrink()**
    
    
    public func shrink(): Iterable<Int8>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Int8> \- 一组可能的“较小”值的迭代器。



#### [h2]extend IntNative <: Shrink<IntNative>
    
    
    extend IntNative <: Shrink<IntNative>

功能：为 [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative)>



**func shrink()**
    
    
    public func shrink(): Iterable<IntNative>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<IntNative> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Rune <: Shrink<Rune>
    
    
    extend Rune <: Shrink<Rune>

功能：为 [Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune)>



**func shrink()**
    
    
    public func shrink(): Iterable<Rune>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Rune> \- 一组可能的“较小”值的迭代器。



#### [h2]extend String <: Shrink<String>
    
    
    extend String <: Shrink<String>

功能：为 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>



**func shrink()**
    
    
    public func shrink(): Iterable<String>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<String> \- 一组可能的“较小”值的迭代器。



#### [h2]extend UInt16 <: Shrink<UInt16>
    
    
    extend UInt16 <: Shrink<UInt16>

功能：为 [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)>



**func shrink()**
    
    
    public func shrink(): Iterable<UInt16>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<UInt16> \- 一组可能的“较小”值的迭代器。



#### [h2]extend UInt32 <: Shrink<UInt32>
    
    
    extend UInt32 <: Shrink<UInt32>

功能：为 [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)>



**func shrink()**
    
    
    public func shrink(): Iterable<UInt32>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<UInt32> \- 一组可能的“较小”值的迭代器。



#### [h2]extend UInt64 <: Shrink<UInt64>
    
    
    extend UInt64 <: Shrink<UInt64>

功能：为 [UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)>



**func shrink()**
    
    
    public func shrink(): Iterable<UInt64>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<UInt64> \- 一组可能的“较小”值的迭代器。



#### [h2]extend UInt8 <: Shrink<UInt8>
    
    
    extend UInt8 <: Shrink<UInt8>

功能：为 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)>



**func shrink()**
    
    
    public func shrink(): Iterable<UInt8>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<UInt8> \- 一组可能的“较小”值的迭代器。



#### [h2]extend UIntNative <: Shrink<UIntNative>
    
    
    extend UIntNative <: Shrink<UIntNative>

功能：为 [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative)>



**func shrink()**
    
    
    public func shrink(): Iterable<UIntNative>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<UIntNative> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Unit <: Shrink<Unit>
    
    
    extend Unit <: Shrink<Unit>

功能：为 [Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit)>



**func shrink()**
    
    
    public func shrink(): Iterable<Unit>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Unit> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Float16 <: Shrink<Float16>
    
    
    extend Float16 <: Shrink<Float16>

功能：为 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)>



**func shrink()**
    
    
    public func shrink(): Iterable<Float16>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Float16> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Float32 <: Shrink<Float32>
    
    
    extend Float32 <: Shrink<Float32>

功能：为 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)>



**func shrink()**
    
    
    public func shrink(): Iterable<Float32>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Float32> \- 一组可能的“较小”值的迭代器。



#### [h2]extend Float64 <: Shrink<Float64>
    
    
    extend Float64 <: Shrink<Float64>

功能：为 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 实现了 Shrink<T> 接口。

父类型：

  * Shrink<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)>



**func shrink()**
    
    
    public func shrink(): Iterable<Float64>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Float64> \- 一组可能的“较小”值的迭代器。



#### [h2]extend<T> Array<T> <: Shrink<Array<T>>
    
    
    extend<T> Array<T> <: Shrink<Array<T>>

功能：为 [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> 实现了 Shrink<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T>> 接口。

父类型：

  * Shrink<[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T>>



**func shrink()**
    
    
    public func shrink(): Iterable<Array<T>>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Array<T>> \- 一组可能的“较小”值的迭代器。



#### [h2]extend<T> Option<T> <: Shrink<Option<T>>
    
    
    extend<T> Option<T> <: Shrink<Option<T>>

功能：为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实现了 Shrink<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>> 接口。

父类型：

  * Shrink<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>>



**func shrink()**
    
    
    public func shrink(): Iterable<Option<T>>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<Option<T>> \- 一组可能的“较小”值的迭代器。



#### [h2]extend<T> ArrayList<T> <: Shrink<ArrayList<T>>
    
    
    extend<T> ArrayList<T> <: Shrink<ArrayList<T>>

功能：为 [ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)<T> 实现了 Shrink<[ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)<T>> 接口。

父类型：

  * Shrink<[ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)<T>>



**func shrink()**
    
    
    public func shrink(): Iterable<ArrayList<T>>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<ArrayList<T>> \- 一组可能的“较小”值的迭代器。



#### [h2]extend<T> HashSet<T> <: Shrink<HashSet<T>>
    
    
    extend<T> HashSet<T> <: Shrink<HashSet<T>>

功能：为 [HashSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet)<T> 实现了 Shrink<[HashSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet)<T>> 接口。

父类型：

  * Shrink<[HashSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashsett-where-t--hashable--equatablet)<T>>



**func shrink()**
    
    
    public func shrink(): Iterable<HashSet<T>>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<HashSet<T>> \- 一组可能的“较小”值的迭代器。



#### [h2]extend<K, V> HashMap<K, V> <: Shrink<HashMap<K, V>>
    
    
    extend<K, V> HashMap<K, V> <: Shrink<HashMap<K, V>>

功能：为 [HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<T> 实现了 Shrink<[HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<T>> 接口。

父类型：

  * Shrink<[HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek)<T>>



**func shrink()**
    
    
    public func shrink(): Iterable<HashMap<K, V>>

功能：将该值缩小为一组可能的“较小”值。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<HashMap<K, V>> \- 一组可能的“较小”值的迭代器。


