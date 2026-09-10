---
name: cangjie-references/cj-unittest_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest / 接口
---

# 接口

#### interface BenchInputProvider<T>
    
    
    public interface BenchInputProvider<T> <: BenchmarkInputMarker  {
        mut func reset(max: Int64)
        mut func get(idx: Int64): T
    }

功能：当某些代码需要在性能测试执行前执行，或当输入变化就需要重新执行一段代码时，可实现本接口。同时 [DataStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datastrategyt) 的实现类型应返回此接口的实现类型。

用户一般不需要自行实现该接口，可直接使用 [@Strategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#strategy-宏) 宏。

父类型：

  * BenchmarkInputMarker



#### [h2]func get(Int64)
    
    
    mut func get(idx: Int64): T

功能：获取元素。该函数的执行时间包含在基准测量中，然后作为框架开销计算的一部分从结果中排除。

参数：

  * idx: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 元素索引值。



返回值：

  * T - 元素值。



#### [h2]func reset(Int64)
    
    
    mut func reset(max: Int64)

功能：在基准测量之前调用。调用此函数后，后续的 get(i) 调用必须成功获取 [0, max) 中的 i 。

参数：

  * max: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最大值。



#### interface BenchmarkConfig
    
    
    public interface BenchmarkConfig {
        func batchSize(b: Int64): Unit
        func batchSize(x: Range<Int64>): Unit
        func warmup(x: Int64): Unit
        func warmup(x: Duration): Unit
        func minDuration(x: Duration): Unit
        func explicitGC(x: ExplicitGcType): Unit
        func minBatches(x: Int64): Unit
    }

功能：该接口提供为 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 宏配置性能测试相关信息的函数签名。

#### [h2]func batchSize(Int64)
    
    
    func batchSize(b: Int64): Unit

功能：可实现该函数，为 @Configuration 宏配置批次的大小。

参数：

  * b: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需配置的批次大小值。



#### [h2]func batchSize(Range<Int64>): Unit
    
    
    func batchSize(x: Range<Int64>): Unit

功能：可实现该函数，为 @Configuration 宏配置批次的大小。

参数：

  * x: [Range](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)> \- 需配置的批次大小范围值。



#### [h2]func explicitGC(ExplicitGcType)
    
    
    func explicitGC(x: ExplicitGcType): Unit

功能：可实现该函数，为 @Configuration 宏配置 GC 的类型。

参数：

  * x: [ExplicitGcType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-explicitgctype) \- 需配置的 GC 类型值。



#### [h2]func minBatches(Int64)
    
    
    func minBatches(x: Int64): Unit

功能：可实现该函数，为 @Configuration 宏配置最小批次个数。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需配置的最小批次个数。



#### [h2]func minDuration(Duration)
    
    
    func minDuration(x: Duration): Unit

功能：可实现该函数，为 @Configuration 宏配置性能测试最小执行时间。

参数：

  * x: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 需配置的性能测试最小执行时间。



#### [h2]func warmup(Int64)
    
    
    func warmup(x: Int64): Unit

功能：可实现该函数，为 @Configuration 宏配置预热期的执行次数。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 需配置的预热期的执行次数。



#### [h2]func warmup(Duration)
    
    
    func warmup(x: Duration): Unit

功能：可实现该函数，为 @Configuration 宏配置预热期的执行时间。

参数：

  * x: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 需配置的预热期的执行时间。



#### [h2]extend Configuration <: BenchmarkConfig
    
    
    extend Configuration <: BenchmarkConfig {}

功能：为 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 扩展 [BenchmarkConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchmarkconfig) 接口。

父类型：

  * [BenchmarkConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchmarkconfig)



**func batchSize(Int64)**
    
    
    public func batchSize(b: Int64)

功能：配置性能测试时一个批次的执行次数。

参数：

  * b: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 执行次数。



**func batchSize(Range <Int64>)**
    
    
    public func batchSize(x: Range<Int64>)

功能：配置性能测试时一个批次的执行次数范围。

参数：

  * x: [Range](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-ranget-where-t--countablet--comparablet--equatablet)<Int64> \- 执行次数范围。



**func explicitGC(ExplicitGcType)**
    
    
    public func explicitGC(x: ExplicitGcType)

功能：配置性能测试时执行 GC 的方式。

参数：

  * x: [ExplicitGcType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-explicitgctype) \- GC 执行的方式。



**func minBatches(Int64)**
    
    
    public func minBatches(x: Int64)

功能：配置性能测试时最少的批次数。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最少的批次数。



**func minDuration(Duration)**
    
    
    public func minDuration(x: Duration)

功能：配置性能测试时最短的执行时长。

参数：

  * x: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 最短的执行时长。



**func warmup(Int64)**
    
    
    public func warmup(x: Int64)

功能：配置性能测试时预热的秒数。

参数：

  * x: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 预热的秒数。



**func warmup(Duration)**
    
    
    public func warmup(x: Duration)

功能：配置性能测试时预热的时长。

参数：

  * x: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 预热的时长。



#### interface BenchmarkInputMarker
    
    
    public interface BenchmarkInputMarker {}

功能：当我们不知道 T 时，该接口能够检测 BenchInputProvider<T> 。

#### interface Measurement
    
    
    public interface Measurement {
        func setup(): Unit
        func measure(): Float64
        prop conversionTable: MeasurementUnitTable
        prop name: String
        prop textDescription: String
        prop info: MeasurementInfo
    }

功能：该接口指定如何在性能测试期间测量数据以及如何在报告中显示数据。

实现接口的实例可以作为宏 @Measure 的属性传递。

示例：
    
    
    import std.unittest.*
    import std.unittest.testmacro.*
    
    var fuel: Float64 = 0.0
    
    class FuelMeasurement <: Measurement {
        public func setup() {
            fuel = 0.0
        }
    
        public func measure(): Float64 {
            fuel
        }
    
        public prop name: String {
            get() {
                "Fuel"
            }
        }
    
        public prop textDescription: String {
            get() {
                "Measuring gallons of fuel spent"
            }
        }
    
        public prop conversionTable: MeasurementUnitTable {
            get() {
                [(1.0, "gallon")]
            }
        }
    }
    
    @Test
    @Measure[FuelMeasurement()]
    @Configure[
        minDuration: Duration.nanosecond,
        warmup: Duration.nanosecond,
        batchSize: 10
    ]
    class BenchClass {
        @Bench
        func foo() {
            fuel += 2.0
        }
    }

可能的运行结果：
    
    
    Starting the benchmark `BenchClass.foo()`.
        Warming up for 1.000 ns.
        Starting measurements of 10 batches. Measuring Fuel.
        Max batch size: 10, estimated execution time: 186.6 us.
    
    --------------------------------------------------------------------------------------------------
    TP: default, time elapsed: 400844 ns, RESULT:
        TCS: BenchClass, time elapsed: 395616 ns, RESULT:
        | Case   |       Median |       Err |   Err% |         Mean |
        |:-------|-------------:|----------:|-------:|-------------:|
        | foo    | 2.000 gallon | ±0 gallon |  ±0.0% | 2.000 gallon |
    Summary: TOTAL: 1
        PASSED: 1, SKIPPED: 0, ERROR: 0
        FAILED: 0
    --------------------------------------------------------------------------------------------------

#### [h2]prop conversionTable
    
    
    prop conversionTable: MeasurementUnitTable

功能：用于在性能测试报告中构建测量值的表示。

包含测量单位的边界对。

根据值的边界，使用最合适的单位。

对于 CSV 格式报告，始终选择下限以简化结果处理。

默认值为 [(1.0, "")]。

类型：[MeasurementUnitTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types#type-measurementunittable)

#### [h2]prop name
    
    
    prop name: String

功能：当前 Measurement 类型的唯一显示名称。

有助于区分报告表中的不同测量类型。

默认值为 Measurement。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop textDescription
    
    
    prop textDescription: String

功能：描述此测量的简单文本将显示在某些报告中。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]func measure()
    
    
    func measure(): Float64

功能：将用于统计分析的测量运行时间的方法。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 测量得到的数据。



#### [h2]func setup()
    
    
    func setup(): Unit

功能：此测量的初始化例程。在每个基准步骤之前调用。

#### [h2]prop info
    
    
    prop info: MeasurementInfo

功能：具体测量的汇总信息。

类型: [MeasurementInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-measurementinfo)

#### interface NearEquatable<CT, D>
    
    
    public interface NearEquatable<CT, D> {
        func isNear(obj: CT, delta!: D): Bool
    }

功能：判断某个对象是否基于这个 delta 近似相等。

示例：
    
    
    import std.math.*
    import std.unittest.*
    import std.unittest.common.*
    import std.unittest.testmacro.*
    
    struct ApproxArray<T> <: NearEquatable<ApproxArray<T>, Int64> {
        ApproxArray(let xs: Array<T>) {}
    
        public func isNear(obj: ApproxArray<T>, delta!: Int64): Bool {
            abs(this.xs.size - obj.xs.size) <= delta
        }
    }
    
    @Test
    func test() {
        @Assert(ApproxArray([1, 2]) == ApproxArray([1]), delta: 1)
    }

可能的运行结果：
    
    
    --------------------------------------------------------------------------------------------------
    TP: default, time elapsed: 184149 ns, RESULT:
        TCS: TestCase_test, time elapsed: 181208 ns, RESULT:
        [ PASSED ] CASE: test (74214 ns)
    Summary: TOTAL: 1
        PASSED: 1, SKIPPED: 0, ERROR: 0
        FAILED: 0
    --------------------------------------------------------------------------------------------------

#### [h2]func isNear(CT, D)
    
    
    func isNear(obj: CT, delta!: D): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: CT - 被比较的对象。
  * delta!: D - 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



#### [h2]extend Float16 <: NearEquatable<Float16, Float16>

功能：对类型 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 扩展接口 NearEquatable。

**func isNear(Float16, Float16)**
    
    
    public func isNear(obj: Float16, delta!: Float16): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 被比较的对象。
  * delta!: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- delta 值不能为负数，且不是 NaN, 否则将抛出该异常。



#### [h2]extend Float16 <: NearEquatable<Float16, RelativeDelta<Float16>>

功能：对类型 [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) 扩展接口 NearEquatable，且使用 [RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat) 做近似计算。

**func isNear(Float16, RelativeDelta <Float16>)**
    
    
    public func isNear(obj: Float16, delta!: RelativeDelta<Float16>): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: [Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16) \- 被比较的对象。
  * delta!: [RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat)<[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)> \- 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- delta 值不能为负数，且不是 NaN，否则将抛出该异常。



#### [h2]extend Float32 <: NearEquatable<Float32, Float32>

功能：对类型 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 扩展接口 NearEquatable。

**func isNear(Float32, Float32)**
    
    
    public func isNear(obj: Float32, delta!: Float32): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 被比较的对象。
  * delta!: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- delta 值不能为负数，且不是 NaN，否则将抛出该异常。



#### [h2]extend Float32 <: NearEquatable<Float32, RelativeDelta<Float32>>

功能：对类型 [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) 扩展接口 NearEquatable，且使用 [RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat) 做近似计算。

**func isNear(Float32, RelativeDelta <Float32>)**
    
    
    public func isNear(obj: Float32, delta!: RelativeDelta<Float32>): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: [Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32) \- 被比较的对象。
  * delta!: [RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat)<[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)> \- 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- delta 值不能为负数，且不是 NaN，否则将抛出该异常。



#### [h2]extend Float64 <: NearEquatable<Float64, Float64>

功能：对类型 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 扩展接口 NearEquatable。

**func isNear(Float64, Float64)**
    
    
    public func isNear(obj: Float64, delta!: Float64): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 被比较的对象。
  * delta!: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- delta 值不能为负数，且不是 NaN，否则将抛出该异常。



#### [h2]extend Float64 <: NearEquatable<Float64, RelativeDelta<Float64>>

功能：对类型 [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) 扩展接口 NearEquatable，且使用 [RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat) 做近似计算。

**func isNear(Float64, RelativeDelta <Float64>)**
    
    
    public func isNear(obj: Float64, delta!: RelativeDelta<Float64>): Bool

功能：判断某个对象是否基于这个 delta 近似相等。

参数：

  * obj: [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 被比较的对象。
  * delta!: [RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat)<[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)> \- 判断近似相等的 delta。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否近似相等。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- delta 值不能为负数，且不是 NaN，否则将抛出该异常。



#### interface Reporter<TReport, TReturn>
    
    
    sealed interface Reporter<TReport, TReturn> {}

功能：报告器基础接口。

#### interface TestClass
    
    
    public interface TestClass {
        func asTestSuite(): TestSuite
    }

功能：提供创建 [TestSuite](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testsuite) 的方法。

#### [h2]func asTestSuite()
    
    
    func asTestSuite(): TestSuite

功能：创建 [TestSuite](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testsuite) 的方法。

返回值：

  * [TestSuite](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testsuite) \- 测试套对象。


