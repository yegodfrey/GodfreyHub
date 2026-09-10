---
name: cangjie-references/cj-unittest_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest / 结构体
---

# 结构体

#### struct BatchInputProvider<T>
    
    
    public struct BatchInputProvider<T> <: BenchInputProvider<T> {
        public BatchInputProvider(let builder: () -> T)
    }

功能：输入提供程序，在执行之前在缓冲区中生成整个基准批次的输入。

父类型：

  * [BenchInputProvider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchinputprovidert)<T>



#### [h2]BatchInputProvider(() -> T)
    
    
    public BatchInputProvider(let builder: () -> T)

功能：BatchInputProvider 构造函数。

参数：

  * builder: () -> T - 用于生成基准测试输入的闭包。



#### [h2]func get(Int64)
    
    
    public mut func get(idx: Int64): T

功能：获取元素，该函数的执行时间包含在基准测量中，然后作为框架开销计算的一部分从结果中排除。

参数：

  * idx: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 元素索引值。



返回值：

  * T - 元素值。



#### [h2]func reset(Int64)
    
    
    public mut func reset(max: Int64)

功能：在基准测量之前调用。调用此函数后，后续的 get(i) 调用必须成功获取 [0, max) 中的 i 。

参数：

  * max: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最大值。



#### struct BatchSizeOneInputProvider<T>
    
    
    public struct BatchSizeOneInputProvider<T> <: BenchInputProvider<T>{
        public BatchSizeOneInputProvider(let builder: () -> T)
    }

功能：基准输入提供程序，在每次执行基准之前生成输入。

与 GenerateEachInputProvider 的区别在于，当批量大小为 1 时，我们可以测量。

每个基准测试调用都是独立的，因此输入生成永远不会包含在测量中。

如果 GenerateEachInputProvider 给出的结果质量较差，则应使用。 这种情况可能会发生，因为生成输入所需的时间比实际基准要多得多，或者如果输入生成的执行时间非常不稳定。

父类型：

  * [BenchInputProvider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchinputprovidert)<T>



#### [h2]BatchSizeOneInputProvider(() -> T)
    
    
    public BatchSizeOneInputProvider(let builder: () -> T)

功能：BatchSizeOneInputProvider 构造函数。

参数：

  * builder: () -> T - 用于生成基准测试输入的 lambda 。



#### [h2]func get(Int64)
    
    
    public mut func get(_: Int64): T

功能：获取元素，该函数的执行时间包含在基准测量中，然后作为框架开销计算的一部分从结果中排除。

参数：

  * _: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 元素索引值。



返回值：

  * T - 元素值。



#### [h2]func reset(Int64)
    
    
    public mut func reset(max: Int64)

功能：在基准测量之前调用。调用此函数后，后续的 get(i) 调用必须成功获取 [0, max) 中的 i 。

参数：

  * max: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最大值。



#### struct CpuCycles
    
    
    public struct CpuCycles <: Measurement {}

功能：使用本机 rdtscp 指令测量 CPU 周期数。仅适用于 x86 平台。

父类型：

  * [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement)



示例：
    
    
    import std.unittest.*
    import std.unittest.testmacro.*
    import std.time.*
    
    var counter: Float64 = 0.0
    
    @Test
    @Measure[CpuCycles()]
    class BenchClass {
        @BeforeEach
        func beforeEach() {
            counter = 0.0
        }
    
        @Bench
        func foo() {
            counter += 1.0
        }
    }

#### [h2]prop conversionTable
    
    
    public prop conversionTable: MeasurementUnitTable

功能：提供当前时间的单位换算表。

例如 [(1.0, "cycles")]。

类型：[MeasurementUnitTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types#type-measurementunittable)

#### [h2]prop name
    
    
    public prop name: String

功能：提供当前时间单位唯一的显示名称，例如：CpuCycles。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)。

#### [h2]prop textDescription
    
    
    public prop textDescription: String

功能：描述此测量的简单文本将显示在某些报告中。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)。

#### [h2]func measure()
    
    
    public func measure(): Float64

功能：返回执行了多少个 CPU 周期。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 计算得到的数据，用于统计分析。



#### [h2]func setup()
    
    
    public func setup()

功能：在测量前执行的配置动作。

#### struct GenerateEachInputProvider<T>
    
    
    public struct GenerateEachInputProvider<T> <: BenchInputProvider<T>{
        public GenerateEachInputProvider(let builder: () -> T)
    }

功能：基准输入提供程序，在每次执行基准之前生成输入。

生成时间包含在基准测量中，然后作为框架开销计算的一部分从最终结果中排除。

父类型：

  * [BenchInputProvider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchinputprovidert)<T>



#### [h2]GenerateEachInputProvider(() -> T)
    
    
    public GenerateEachInputProvider(let builder: () -> T)

功能：GenerateEachInputProvider 构造函数。

参数：

  * builder: () -> T - 用于生成基准测试输入的闭包。



#### [h2]func get(Int64)
    
    
    public mut func get(_: Int64): T

功能：获取元素，该函数的执行时间包含在基准测量中，然后作为框架开销计算的一部分从结果中排除。

参数：

  * _: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 元素索引值。



返回值：

  * T - 元素值。



#### [h2]func reset(Int64)
    
    
    public mut func reset(_: Int64)

功能：在基准测量之前调用。调用此函数后，后续的 get(i) 调用必须成功获取 [0, max) 中的 i 。

参数：

  * _: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 最大值。



#### struct ImmutableInputProvider<T>
    
    
    public struct ImmutableInputProvider<T> <: BenchInputProvider<T> {
        public ImmutableInputProvider(let data: T)
    }

功能：最简单的输入提供程序，只需为基准测试的每次调用复制数据。适用于基准测试不会改变输入的情况。它在框架内默认使用。

父类型：

  * [BenchInputProvider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchinputprovidert)<T>



#### [h2]ImmutableInputProvider(T)
    
    
    public ImmutableInputProvider(let data: T)

功能：ImmutableInputProvider 构造函数。

参数：

  * data: T - 基准测试的输入。



#### [h2]func get(Int64)
    
    
    public mut func get(_: Int64): T

功能：获取元素，该函数的执行时间包含在基准测量中，然后作为框架开销计算的一部分从结果中排除。

参数：

  * _: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 元素索引值。



返回值：

  * T - 元素值。



#### [h2]static func createOrExisting(T, Int64)
    
    
    public static func createOrExisting(arg: T, x!:Int64=0): ImmutableInputProvider<T>

功能：创建或获取一个 ImmutableInputProvider 对象。

参数：

  * arg: T - 提供器需复制的参数。
  * x!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 为实现重载而增加的参数。



返回值：

  * ImmutableInputProvider<T> \- 输入提供器。



#### [h2]static func createOrExisting<U>(U)
    
    
    public static func createOrExisting<U>(arg: U): U where U <: BenchInputProvider<T>

功能：创建或获取一个 BenchInputProvider 的子类型对象。

参数：

  * arg: T - 提供器需复制的参数。



返回值：

  * U - 输入提供器。



#### struct KeyBaseline
    
    
    public struct KeyBaseline <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

例如：
    
    
    func example() {
        let conf = Configuration()
        conf.set(KeyBaseline.baseline, "baseline")
    }

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop baseline
    
    
    public static prop baseline: KeyBaseline

功能：配置项的键值。

类型：KeyBaseline

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyBaselinePath
    
    
    public struct KeyBaselinePath <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop baselinePath
    
    
    public static prop baselinePath: KeyBaselinePath

功能：配置项的键值。

类型：KeyBaselinePath

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyBatchSize
    
    
    public struct KeyBatchSize <: KeyFor<Int64> & KeyFor<Range<Int64>> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>
  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[Range](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>>



#### [h2]prop batchSize
    
    
    public static prop batchSize: KeyBatchSize

功能：配置项的键值。

类型：KeyBatchSize

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyBench
    
    
    public struct KeyBench <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop bench
    
    
    public static prop bench: KeyBench

功能：配置项的键值。

类型：KeyBench

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCaptureOutput
    
    
    public struct KeyCaptureOutput <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop captureOutput
    
    
    public static prop captureOutput: KeyCaptureOutput

功能：配置项的键值。

类型：KeyCaptureOutput

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCoverageGuided
    
    
    public struct KeyCoverageGuided <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop coverageGuided
    
    
    public static prop coverageGuided: KeyCoverageGuided

功能：配置项的键值。

类型：KeyCoverageGuided

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCoverageGuidedBaselineScore
    
    
    public struct KeyCoverageGuidedBaselineScore <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop coverageGuidedBaselineScore
    
    
    public static prop coverageGuidedBaselineScore: KeyCoverageGuidedBaselineScore

功能：配置项的键值。

类型：KeyCoverageGuidedBaselineScore

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCoverageGuidedInitialSeeds
    
    
    public struct KeyCoverageGuidedInitialSeeds <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop coverageGuidedInitialSeeds
    
    
    public static prop coverageGuidedInitialSeeds: KeyCoverageGuidedInitialSeeds

功能：配置项的键值。

类型：KeyCoverageGuidedInitialSeeds

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCoverageGuidedMaxCandidates
    
    
    public struct KeyCoverageGuidedMaxCandidates <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop coverageGuidedMaxCandidates
    
    
    public static prop coverageGuidedMaxCandidates: KeyCoverageGuidedMaxCandidates

功能：配置项的键值。

类型：KeyCoverageGuidedMaxCandidates

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCoverageGuidedNewCoverageBonus
    
    
    public struct KeyCoverageGuidedNewCoverageBonus <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop coverageGuidedNewCoverageBonus
    
    
    public static prop coverageGuidedNewCoverageBonus: KeyCoverageGuidedNewCoverageBonus

功能：配置项的键值。

类型：KeyCoverageGuidedNewCoverageBonus

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyCoverageGuidedNewCoverageScore
    
    
    public struct KeyCoverageGuidedNewCoverageScore <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop coverageGuidedNewCoverageScore
    
    
    public static prop coverageGuidedNewCoverageScore: KeyCoverageGuidedNewCoverageScore

功能：配置项的键值。

类型：KeyCoverageGuidedNewCoverageScore

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyDeathAware
    
    
    public struct KeyDeathAware <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop deathAware
    
    
    public static prop deathAware: KeyDeathAware

功能：配置项的键值。

类型：KeyDeathAware

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyDryRun
    
    
    public struct KeyDryRun <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop dryRun
    
    
    public static prop dryRun: KeyDryRun

功能：配置项的键值。

类型：KeyDryRun

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyExcludeTags
    
    
    public struct KeyExcludeTags <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop excludeTags
    
    
    public static prop excludeTags: KeyExcludeTags

功能：配置项的键值。

类型：KeyExcludeTags

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyExplicitGC
    
    
    public struct KeyExplicitGC <: KeyFor<ExplicitGcType> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop explicitGC
    
    
    public static prop explicitGC: KeyExplicitGC

功能：配置项的键值。

类型：KeyExplicitGC

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyFilter
    
    
    public struct KeyFilter <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop filter
    
    
    public static prop filter: KeyFilter

功能：配置项的键值。

类型：KeyFilter

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyFromTopLevel
    
    
    public struct KeyFromTopLevel <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop fromTopLevel
    
    
    public static prop fromTopLevel: KeyFromTopLevel

功能：配置项的键值。

类型：KeyFromTopLevel

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyGenerationSteps
    
    
    public struct KeyGenerationSteps <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop generationSteps
    
    
    public static prop generationSteps: KeyGenerationSteps

功能：配置项的键值。

类型：KeyGenerationSteps

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyHelp
    
    
    public struct KeyHelp <: KeyFor<Bool> {}

功能：用于在配置信息中指定是否打印帮助信息。

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop help
    
    
    public static prop help: KeyHelp

功能：配置项的键值。

类型：KeyHelp

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyIncludeTags
    
    
    public struct KeyIncludeTags <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop includeTags
    
    
    public static prop includeTags: KeyIncludeTags

功能：配置项的键值。

类型：KeyIncludeTags

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyInternalTestrunnerInputPath
    
    
    public struct KeyInternalTestrunnerInputPath <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop internalTestrunnerInputPath
    
    
    public static prop internalTestrunnerInputPath: KeyInternalTestrunnerInputPath

功能：配置项的键值。

类型：KeyInternalTestrunnerInputPath

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyMeasurement
    
    
    public struct KeyMeasurement <: KeyFor<Measurement> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop measurement
    
    
    public static prop measurement: KeyMeasurement

功能：配置项的键值。

类型：KeyMeasurement

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyMeasurementInfo
    
    
    public struct KeyMeasurementInfo <: KeyFor<MeasurementInfo> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop measurementInfo
    
    
    public static prop measurementInfo: KeyMeasurementInfo

功能：配置项的键值。

类型：KeyMeasurementInfo

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyMinBatches
    
    
    public struct KeyMinBatches <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop minBatches
    
    
    public static prop minBatches: KeyMinBatches

功能：配置项的键值。

类型：KeyMinBatches

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyMinDuration
    
    
    public struct KeyMinDuration <: KeyFor<Duration> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop minDuration
    
    
    public static prop minDuration: KeyMinDuration

功能：配置项的键值。

类型：KeyMinDuration

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyNoCaptureOutput
    
    
    public struct KeyNoCaptureOutput <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop noCaptureOutput
    
    
    public static prop noCaptureOutput: KeyNoCaptureOutput

功能：配置项的键值。

类型：KeyNoCaptureOutput

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyNoColor
    
    
    public struct KeyNoColor <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop noColor
    
    
    public static prop noColor: KeyNoColor

功能：配置项的键值。

类型：KeyNoColor

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyOptimizeMocksForBench
    
    
    public struct KeyOptimizeMocksForBench <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop optimizeMocksForBench
    
    
    public static prop optimizeMocksForBench: KeyOptimizeMocksForBench

功能：配置项的键值。

类型：KeyOptimizeMocksForBench

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyParallel
    
    
    public struct KeyParallel <: KeyFor<Bool> & KeyFor<String> & KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)>
  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)>
  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>



#### [h2]prop parallel
    
    
    public static prop parallel: KeyParallel

功能：配置项的键值。

类型：KeyParallel

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyRandomSeed
    
    
    public struct KeyRandomSeed <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop randomSeed
    
    
    public static prop randomSeed: KeyRandomSeed

功能：配置项的键值。

类型：keyRandomSeed

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyReductionSteps
    
    
    public struct KeyReductionSteps <: KeyFor<Int64> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop reductionSteps
    
    
    public static prop reductionSteps: KeyReductionSteps

功能：配置项的键值。

类型：KeyReductionSteps

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyReportFormat
    
    
    public struct KeyReportFormat <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop reportFormat
    
    
    public static prop reportFormat: KeyReportFormat

功能：配置项的键值。

类型：KeyReportFormat

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyReportPath
    
    
    public struct KeyReportPath <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop reportPath
    
    
    public static prop reportPath: KeyReportPath

功能：配置项的键值。

类型：KeyReportPath

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyShowAllOutput
    
    
    public struct KeyShowAllOutput <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop showAllOutput
    
    
    public static prop showAllOutput: KeyShowAllOutput

功能：配置项的键值。

类型：KeyShowAllOutput

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyShowTags
    
    
    public struct KeyShowTags <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop showTags
    
    
    public static prop showTags: KeyShowTags

功能：配置项的键值。

类型：KeyShowTags

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeySkip
    
    
    public struct KeySkip <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop skip
    
    
    public static prop skip: KeySkip

功能：配置项的键值。

类型：KeySkip

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyTimeout
    
    
    public struct KeyTimeout <: KeyFor<Duration> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop timeout
    
    
    public static prop timeout: KeyTimeout

功能：配置项的键值。

类型：KeyTimeout

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyTimeoutEach
    
    
    public struct KeyTimeoutEach <: KeyFor<String> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop timeoutEach
    
    
    public static prop timeoutEach: KeyTimeoutEach

功能：配置项的键值。

类型：KeyTimeoutEach

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyTimeoutHandler
    
    
    public struct KeyTimeoutHandler <: KeyFor<(TestCaseInfo) -> Unit> {}

功能：支持在配置信息中指定超时处理的句柄。

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



示例：
    
    
    import std.unittest.*
    import std.unittest.testmacro.*
    
    @Test
    class Test {
        @TestCase
        @Timeout[Duration.second]
        func assertIsACancellationPoint() {
            sleep(Duration.second * 2)
            @Assert(false)
        }
    }
    
    main(): Unit {
        let config = Configuration()
        config.set(
            KeyTimeoutHandler.timeoutHandler,
            {info: TestCaseInfo => println("Timeout in ${info.suiteName}.${info.caseName}!")}
        )
        Test().asTestSuite().runTests(config).reportTo(ConsoleReporter())
    }

可能的运行结果：
    
    
    Timeout in Test.assertIsACancellationPoint!
    --------------------------------------------------------------------------------------------------
    TP: default, time elapsed: 2006440952 ns, RESULT:
        TCS: Test, time elapsed: 2006435848 ns, RESULT:
        [ FAILED ] CASE: assertIsACancellationPoint (2005625479 ns)
        Execution time exceeded specified timeout.
    Summary: TOTAL: 1
        PASSED: 0, SKIPPED: 0, ERROR: 0
        FAILED: 1, listed below:
                TCS: Test, CASE: assertIsACancellationPoint
    --------------------------------------------------------------------------------------------------

#### [h2]prop timeoutHandler
    
    
    public static prop timeoutHandler: KeyTimeoutHandler

功能：超时处理句柄。

类型：KeyTimeoutHandler

#### [h2]prop name
    
    
    public prop name: String

功能：超时处理句柄的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyVerbose
    
    
    public struct KeyVerbose <: KeyFor<Bool> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)



#### [h2]prop verbose
    
    
    public static prop verbose: KeyVerbose

功能：配置项的键值。

类型：KeyVerbose

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct KeyWarmup
    
    
    public struct KeyWarmup <: KeyFor<Int64> & KeyFor<Duration> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 中作为对应配置项的键值

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)>
  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration)>



#### [h2]prop warmup
    
    
    public static prop warmup: KeyWarmup

功能：配置项的键值。

类型：KeyWarmup

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct MeasurementInfo
    
    
    public struct MeasurementInfo {}

功能：存储测量信息的结构体。

#### struct Perf
    
    
    public struct Perf <: Measurement {
        public Perf(var counter: PerfCounter)
        public init()
    }

功能：使用 Linux 系统调用 perf_event_open 测量各种硬件和软件 CPU 计数器。仅在 Linux 上可用。

父类型：

  * [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement)



示例：

参见 [enum PerfCounter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-perfcounter)

#### [h2]prop conversionTable
    
    
    public prop conversionTable: MeasurementUnitTable

功能：提供对应 CPU 计数器的换算表。

类型：[MeasurementUnitTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types#type-measurementunittable)

#### [h2]prop name
    
    
    public prop name: String

功能：为当前 CPU 计数器提供唯一的显示名称，例如：Perf(cycles)。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop textDescription
    
    
    public prop textDescription: String

功能：描述此测量的简单文本将显示在某些报告中。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]init()
    
    
    public init()

功能：使用 CPU 周期计数器的默认构造函数。

#### [h2]Perf(PerfCounter)
    
    
    public Perf(var counter: PerfCounter)

功能：指定要测量的 CPU 计数器的构造函数。

参数：

  * counter: [PerfCounter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-perfcounter) \- 指定计数器。



#### [h2]func measure()
    
    
    public func measure(): Float64

功能：返回指定 CPU 计数器的值。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 计算得到的数据，用于统计分析。



#### [h2]func setup()
    
    
    public func setup()

功能：此 CPU 计数器的初始化例程。在每个基准步骤之前调用。

#### struct RelativeDelta<T>
    
    
    public struct RelativeDelta<T> {
        public RelativeDelta(let absolute!: T, let relative!: T) {}
    }

功能：对于浮点类型，提供相对的 delta 数据类型来做近似相等的计算。计算公式如下。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/1-y0x0bMRByNl967271BWw/zh-cn_formulaimage_0000002714317436.png?HW-CC-KV=V1&HW-CC-Date=20260908T090213Z&HW-CC-Expire=86400&HW-CC-Sign=284C7563B72AC56087B974C7CA37DAF96EAB8C32D54FC55CCB7BA5F2CBD5793E)

#### [h2]RelativeDelta(T, T)
    
    
    public RelativeDelta(let absolute!: T, let relative!: T)

功能：RelativeDelta 的主构造函数。

参数：

  * absolute!: T - 绝对比较部分的 delta 值。
  * relative!: T - 相对比较部分的 delta 值。



参考示例：[近似相等](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics)

#### struct TestCaseInfo
    
    
    public struct TestCaseInfo {
        public let groupName: String
        public let suiteName: String
        public let caseName: String
    }

功能：当前正在运行的测试用例的信息。通常在动态 API 的超时处理句柄中被使用。

参考示例：[KeyTimeoutHandler](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keytimeouthandler).

#### [h2]let caseName
    
    
    public let caseName: String

功能：用例名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]let groupName
    
    
    public let groupName: String

功能：用例的测试组名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]let suiteName
    
    
    public let suiteName: String

功能：用例的测试套名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct Runtime
    
    
    public struct Runtime <: Measurement {
        public Runtime(let variant: RuntimeInfo)
    }

功能：统计 Cangjie 运行时提供的指标值。

父类型：

  * [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement)



#### [h2]prop conversionTable
    
    
    public prop conversionTable: MeasurementUnitTable

功能：提供相应运行时指标的转换表。

类型：[MeasurementUnitTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types#type-measurementunittable)

#### [h2]prop name
    
    
    public prop name: String

功能：运行时指标的名字。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop textDescription
    
    
    public prop textDescription: String

功能：在某些报告中将显示的该测量结果的简要文字描述。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string).

#### [h2]Runtime(RuntimeInfo)
    
    
    public Runtime(let variant: RuntimeInfo)

功能：构造函数，用于指定要测量的运行时指标。

参数：

  * variant: [RuntimeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-runtimeinfo) \- 指定统计类型。



#### [h2]func measure()
    
    
    public func measure(): Float64

功能：返回指定运行时指标的值。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 用于统计分析的计算数据。



#### [h2]func setup()
    
    
    public func setup()

功能：此测量的初始化函数。在每个基准测试步骤之前调用。

#### struct TimeNow
    
    
    public struct TimeNow <: Measurement {
        public init(unit: ?TimeUnit)
        public init()
    }

功能：[Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement) 的实现，用于测量执行一个函数所花费的时间。

父类型：

  * [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement)



示例：
    
    
    import std.time.*
    
    @Test
    @Measure[TimeNow(Nanos)]
    public class Test_Residentsleeper {
        @Bench
        func case01(): Unit {
            sleep(0.95 * Duration.millisecond)
        }
    }

#### [h2]prop conversionTable
    
    
    public prop conversionTable: MeasurementUnitTable

功能：提供当前时间的单位换算表。

例如 [(1.0, "ns"), (1e3, "us"), (1e6, "ms"), (1e9, "s")]。

类型：[MeasurementUnitTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types#type-measurementunittable)

#### [h2]prop name
    
    
    public prop name: String

功能：提供当前时间单位唯一的显示名称，例如：Duration(ns) 或 Duration(s)。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]prop textDescription
    
    
    public prop textDescription: String

功能：描述此测量的简单文本将显示在某些报告中。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]init()
    
    
    public init()

功能：自动选择输出格式的默认构造函数。

#### [h2]init(?TimeUnit)
    
    
    public init(unit: ?TimeUnit)

功能： unit 参数用于指定打印结果时将使用的时间单位。

参数：

  * unit: ?[TimeUnit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-timeunit) \- 指定的时间单位。



#### [h2]func measure()
    
    
    public func measure(): Float64

功能：获取当前时间用于统计分析。

返回值：

  * [Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64) \- 计算得到的数据，用于统计分析。


