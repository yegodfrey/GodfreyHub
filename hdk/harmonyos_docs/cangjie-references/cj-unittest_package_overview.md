---
name: cangjie-references/cj-unittest_package_overview
title: std.unittest
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest
---

# std.unittest

#### 功能介绍

unittest 包用于编写仓颉项目单元测试代码，提供包括代码编写、运行和调测在内的基本功能，并为有经验的用户提供的一些高级功能。

仓颉单元测试支持 cjc 编译器（单包编译模式）和 cjpm 项目管理器（ 多包模式）。

用户可通过[快速入门](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_getting_started)写出第一个单元测试程序。同时文档对于一些[基础概念及用法](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics)做了说明并附有示例代码，另外，对于一些高阶特性例如[参数化测试](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_parameterized_tests#参数化测试入门)等做了进一步说明。

如下 API 从其他包中重导出，因此用户亦可以只导入 unittest 即可使用。

#### [h2]从 unittest.common 包中重导出

**接口**

接口名 | 功能  
---|---  
[DataProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-dataprovidert) | DataStrategy 的组件，用于提供测试数据， T 指定提供者提供的数据类型。  
[DataShrinker](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datashrinkert) | DataStrategy 的组件，用于在测试期间缩减数据，T 指定该收缩器处理的数据类型。  
[DataStrategy<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datastrategyt) | 为参数化测试提供数据的策略，T 指定该策略操作的数据类型。  
  
**类**

类名 | 功能  
---|---  
[Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) | 存储 @Configure 宏生成的 unittest 配置数据的对象。Configuration 是一个类似 HashMap 的类，但它的键不是键和值类型，而是 String 类型，和任何给定类型的值。  
[ConfigurationKey](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configurationkey) | 配置项的键值对象。提供判等及 hashCode 方法。  
  
**结构体**

结构体名 | 功能  
---|---  
[KeyTags](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_structs#struct-keytags) | 用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 配置键值。  
  
#### [h2]从 unittest.prop_test 包中重导出

**函数**

函数名 | 功能  
---|---  
[random<T>()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_functions#func-randomt-where-t--arbitraryt) | 该函数生成 T 类型的随机数据，其中 T 必须实现接口 Arbitrary<T> 。该函数的返回值是参数化测试的一种参数源。  
  
**接口**

接口名 | 功能  
---|---  
[Arbitrary<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) | 生成 T 类型随机值的接口。  
[Shrink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-shrinkt) | 将 T 类型的值缩减到多个“更小”的值。  
  
#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[assertCaughtUnexpectedE(String, String, String, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-assertcaughtunexpectedestring-string-string-assertionctx) | 捕获的异常不符合预期，记录信息，抛出异常。  
[assertEqual<T>(String, String, T, T, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-assertequaltstring-string-t-t-assertionctx) | 比较 expected 和 actual 值是否相等。若不等，直接抛出异常。  
[assertEqual<T>(String, String, T, T, Bool, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-assertequaltstring-string-t-t-bool-assertionctx) | 比较 expected 和 actual 值是否相等。若不等，直接抛出异常。  
[defaultConfiguration()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-defaultconfiguration) | 生成默认的配置信息。  
[entryMain(TestPackage)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-entrymaintestpackage) | 提供给 cjc --test 使用，框架执行测试用例的入口函数。  
[expectCaughtUnexpectedE(String,String,String, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-assertcaughtunexpectedestring-string-string-assertionctx) | 捕获的异常不符合预期，记录信息，不抛出异常。  
[expectEqual(String, String, T, T, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-assertequaltstring-string-t-t-assertionctx) | 比较 expected 和 actual 值是否相等。记录比较结果，不抛出异常。  
[expectEqual(String, String, T, T, Bool, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-expectequaltstring-string-t-t-bool-assertionctx) | 比较 expected 和 actual 值是否相等。记录比较结果，不抛出异常。  
[fail(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-failstring) | 使该用例失败，直接抛出异常。  
[failExpect(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-failexpectstring) | 使该用例失败，记录信息，不抛出异常。  
[invokeCustomAssert<T>(Array<String>, String, (AssertionCtx) -> T, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-invokecustomasserttarraystring-string-assertionctx---t-assertionctx) | 运行在 [@Test](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#test-宏), [@TestCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#testcase-宏), 或 [@CustomAssertion](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#customassertion-宏) 宏中使用的 [@Assert[caller](passerArgs)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏) 指定的用户定义断言函数。  
[invokeCustomExpect<T>(Array<String>, String, (AssertionCtx) -> Any, ?AssertionCtx)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-invokecustomexpectarraystring-string-assertionctx---any-assertionctx) | 运行在 [@Test](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#test-宏), [@TestCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#testcase-宏), 或 [@CustomAssertion](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#customassertion-宏) 宏中使用的 [@Expect[caller](passerArgs)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) 指定的用户定义断言函数。  
[isNearExpansion<CT, D>(CT, CT, D, String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-isnearexpansionct-dct-ct-d-string) | 判断近似相等。  
[isNearExpansion<CT, D>(CT, CT, D, String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions#func-isnearexpansionct-dct-ct-d-string-bool) | 判断近似相等。  
  
#### [h2]类型别名

类型别名 | 功能  
---|---  
[MeasurementUnitTable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types#type-measurementunittable) | 用于为性能测试指定 [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement) 实例。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[BenchInputProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchinputprovidert) | 用于处理性能测试的接口，其中需要在每次性能测试调用之前执行一些代码或者性能测试的输入发生了变化，并且每次都必须从头开始生成。  
[BenchmarkConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchmarkconfig) | 空接口，区分部分 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 函数为性能相关配置。  
[BenchmarkInputMarker](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-benchmarkinputmarker) | 当我们不知道 T 时，该接口能够检测 BenchInputProvider<T> 。  
[Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement) | 在性能测试过程中可以收集和分析各种数据的接口。性能测试期间使用的 Measurement 的具体实例在 @Measure 宏中指定（例如在类声明中）。  
[NearEquatable<CT, D>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-nearequatablect-d) | 判断某个对象是否基于这个 delta 近似相等。  
[Reporter<TReport, TReturn>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-reportertreport-treturn) | 报告器基础接口。  
[TestClass](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-testclass) | 提供创建 [TestSuite](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testsuite) 的方法。  
  
#### [h2]类

类名 | 功能  
---|---  
[AssertionCtx](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-assertionctx) | 存储用户定义的断言的状态。提供用于编写​​用户定义断言的方法。  
[Benchmark](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-benchmark) | 该类提供创建和运行单个性能测试用例的方法。  
[BenchReport](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-benchreport) | 提供性能用例执行结果报告处理能力。  
[CartesianProductProcessor<T0,T1>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-cartesianproductprocessort0t1) | 笛卡尔积处理器。  
[ConsoleReporter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-consolereporter) | 打印单元测试用例结果或者性能测试用例结果到控制台。  
[CsvReporter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-csvreporter) | 打印性能测试用例结果数据到 CSV 文件上。  
[CsvRawReporter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-csvrawreporter) | 打印性能测试用例结果数据，该数据只有批次的原始测量值，到 CSV 文件上。  
[DataStrategyProcessor<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-datastrategyprocessort) | 所有 [DataStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datastrategyt) 组件的基类。该类的实例由 [@Strategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#strategy-宏) 宏或成员函数创建。  
[FlatMapProcessor<T, R>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-flatmapprocessort-r) | 对参数数据进行 [FlatMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-flatmapt-rt---iterabler) 的处理器。  
[FlatMapStrategyProcessor<T, R>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-flatmapstrategyprocessort-r) | 对参数数据进行 [FlatMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-flatmapt-rt---iterabler) 的处理器。  
[InputParameter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-inputparameter) | 入参对象类型。  
[LazyCyclicNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-lazycyclicnode) | 用于在一个循环中一个接一个地推进类型擦除的内部惰性迭代器。  
[MapProcessor<T, R>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-mapprocessort-r) | 对参数数据进行 [Map](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_function#func-mapt-rt---r) 的处理器。  
[PowerAssertDiagramBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-powerassertdiagrambuilder) | [PowerAssert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#powerassert-宏) 输出结果构造器。  
[RawStatsReporter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-rawstatsreporter) | 未处理的性能测试数据报告器。仅给框架内部使用。  
[Report](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-report) | 打印测试用例结果报告的基类。  
[SimpleProcessor<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-simpleprocessort) | 简单的数据策略处理器。对 [DataStrategyProcessor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-datastrategyprocessort) 的一种实现。  
[TestGroup](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testgroup) | 提供构建和运行测试组合方法的类。  
[TestGroupBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testgroupbuilder) | 提供配置测试组合的方法的构造器。  
[TestPackage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testpackage) | 用例包对象。  
[TestReport](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testreport) | 单元测试执行结果报告。  
[TestSuite](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testsuite) | 提供构建和执行测试套方法的类。  
[TestSuiteBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-testsuitebuilder) | 提供配置测试套方法的测试套构造器。  
[TextReporter<PP>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-textreporterpp) | 将单元测试用例结果或性能测试结果打印到 [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) 的子类。  
[UnitTestCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-unittestcase) | 提供创建和执行单元测试用例的方法的类。  
[XmlPerPackageReporter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-xmlperpackagereporter) | 打印单元测试用例结果数据到 Xml 文件上。  
[XmlReporter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes#class-xmlreporter) | 打印单元测试用例结果数据到 Xml 文件上。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[ExplicitGcType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-explicitgctype) | 用于指定 @Configure 宏的 explicitGC 配置参数。表示 GC 执行的三种不同方式。  
[TimeUnit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-timeunit) | 可以在 TimeNow 类构造函数中使用的时间单位。  
[PerfCounter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums#enum-perfcounter) | 枚举 [Perf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-perf) 构造器支持的 CPU 计数器。  
  
#### [h2]结构体

结构体名 | 功能  
---|---  
[BatchInputProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-batchinputprovidert) | 输入提供程序，在执行之前在缓冲区中生成整个基准批次的输入。  
[BatchSizeOneInputProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-batchsizeoneinputprovidert) | 基准输入提供程序，在每次执行基准之前生成输入。  
[CpuCycles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-cpucycles) | 使用本机 rdtscp 指令测量 CPU 周期数。仅适用于 x86 平台。  
[GenerateEachInputProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-generateeachinputprovidert) | 基准输入提供程序，在每次执行基准之前生成输入。  
[ImmutableInputProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-immutableinputprovidert) | 最简单的输入提供程序，只需为基准测试的每次调用复制数据。适用于基准测试不会改变输入的情况。它在框架内默认使用。  
[KeyBaseline](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keybaseline) | 作为在配置信息中配置值的键值。  
[KeyBaselinePath](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keybaselinepath) | 作为在配置信息中配置值的键值。  
[KeyBatchSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keybatchsize) | 作为在配置信息中配置值的键值。  
[KeyBench](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keybench) | 作为在配置信息中配置值的键值。  
[KeyCaptureOutput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycaptureoutput) | 作为在配置信息中配置值的键值。  
[KeyCoverageGuided](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycoverageguided) | 作为在配置信息中配置值的键值。  
[KeyCoverageGuidedBaselineScore](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycoverageguidedbaselinescore) | 作为在配置信息中配置值的键值。  
[KeyCoverageGuidedInitialSeeds](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycoverageguidedinitialseeds) | 作为在配置信息中配置值的键值。  
[KeyCoverageGuidedMaxCandidates](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycoverageguidedmaxcandidates) | 作为在配置信息中配置值的键值。  
[KeyCoverageGuidedNewCoverageBonus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycoverageguidednewcoveragebonus) | 作为在配置信息中配置值的键值。  
[KeyCoverageGuidedNewCoverageScore](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keycoverageguidednewcoveragescore) | 作为在配置信息中配置值的键值。  
[KeyDeathAware](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keydeathaware) | 作为在配置信息中配置值的键值。  
[KeyDryRun](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keydryrun) | 作为在配置信息中配置值的键值。  
[KeyExcludeTags](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyexcludetags) | 作为在配置信息中配置值的键值。  
[KeyExplicitGC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyexplicitgc) | 作为在配置信息中配置值的键值。  
[KeyFilter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyfilter) | 作为在配置信息中配置值的键值。  
[KeyFromTopLevel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyfromtoplevel) | 作为在配置信息中配置值的键值。  
[KeyGenerationSteps](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keygenerationsteps) | 作为在配置信息中配置值的键值。  
[KeyHelp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyhelp) | 作为在配置信息中配置值的键值。  
[KeyIncludeTags](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyincludetags) | 作为在配置信息中配置值的键值。  
[KeyInternalTestrunnerInputPath](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyinternaltestrunnerinputpath) | 作为在配置信息中配置值的键值。  
[KeyMeasurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keymeasurement) | 作为在配置信息中配置值的键值。  
[KeyMeasurementInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keymeasurementinfo) | 作为在配置信息中配置值的键值。  
[KeyMinBatches](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyminbatches) | 作为在配置信息中配置值的键值。  
[KeyMinDuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyminduration) | 作为在配置信息中配置值的键值。  
[KeyNoCaptureOutput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keynocaptureoutput) | 作为在配置信息中配置值的键值。  
[KeyNoColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keynocolor) | 作为在配置信息中配置值的键值。  
[KeyOptimizeMocksForBench](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyoptimizemocksforbench) | 作为在配置信息中配置值的键值。  
[KeyParallel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyparallel) | 作为在配置信息中配置值的键值。  
[KeyRandomSeed](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyrandomseed) | 作为在配置信息中配置值的键值。  
[KeyReductionSteps](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyrandomseed) | 作为在配置信息中配置值的键值。  
[KeyReportFormat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyreportformat) | 作为在配置信息中配置值的键值。  
[KeyReportPath](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyreportpath) | 作为在配置信息中配置值的键值。  
[KeyShowAllOutput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyshowalloutput) | 作为在配置信息中配置值的键值。  
[KeyShowTags](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyshowtags) | 作为在配置信息中配置值的键值。  
[KeySkip](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyskip) | 作为在配置信息中配置值的键值。  
[KeyTimeout](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keytimeout) | 作为在配置信息中配置值的键值。  
[KeyTimeoutEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keytimeouteach) | 作为在配置信息中配置值的键值。  
[KeyTimeoutHandler](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keytimeouthandler) | 支持在配置信息中指定超时处理的句柄。  
[KeyVerbose](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keyverbose) | 作为在配置信息中配置值的键值。  
[KeyWarmup](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-keywarmup) | 作为在配置信息中配置值的键值。  
[MeasurementInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-measurementinfo) | 存储测量信息的结构体。  
[Perf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-perf) | 使用 linux 系统调用 perf_event_open 测量各种硬件和软件 CPU 计数器。仅在 Linux 上可用。  
[RelativeDelta](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-relativedeltat) | 对于浮点类型，提供相对的 delta 数据类型来做近似相等的计算。  
[TestCaseInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-testcaseinfo) | 当前正在运行的测试用例的信息。通常在动态 API 的超时处理句柄中被使用。  
[TimeNow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs#struct-timenow) | [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement) 的实现，用于测量执行一个函数所花费的时间。  
  
#### [h2]异常类

异常名 | 功能  
---|---  
[AssertException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions#class-assertexception) | [@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) / [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏) 检查失败时所抛出的异常。  
[AssertIntermediateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions#class-assertintermediateexception) | [@PowerAssert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#powerassert-宏) 检查失败时所抛出的异常。  
[UnittestCliOptionsFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions#class-unittestclioptionsformatexception) | 控制台选项格式错误抛出的异常。  
[UnittestException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions#class-unittestexception) | 框架通用异常。  
[UnittestTimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions#class-unittesttimeoutexception) | 此异常用于在超时时中止测试用例的执行。不建议用户直接使用。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_functions)**  

  * **[类型别名](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_types)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_enums)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_structs)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest-samples)**  



