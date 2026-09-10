---
name: cangjie-references/cj-unittest_prop_test_package_overview
title: std.unittest.prop_test
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.prop_test
---

# std.unittest.prop_test

#### 功能介绍

unittest.prop_test 为单元测试框架提供了参数化测试所需的类型和方法。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[emptyIterable<T>()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_functions#func-emptyiterablet) | 创建一个空的迭代器。  
[random<T>()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_functions#func-randomt-where-t--arbitraryt) | 该函数生成 T 类型的随机数据，其中 T 必须实现接口 Arbitrary<T> 。该函数的返回值是参数化测试的一种参数源。  
[randomInRange<T>(Option<T>, Option<T>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_functions#func-randominrangetoptiont-optiont) | 创建一个 [RandomDataStrategyRange<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdatastrategyranget)  
  
#### [h2]接口

接口名 | 功能  
---|---  
[ArbitraryRange<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryranget) | 接口为不同类型提供可以在一定范围内生成值的方法。  
[Arbitrary<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) | 生成 T 类型随机值的接口。  
[Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort) | 生成器生成 T 类型的值。  
[IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess) | 通过索引访问元组元素的实用程序接口。  
[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) | 提供 [Arbitrary<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 所需的随机生成基础类型数据的能力。  
[Shrink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-shrinkt) | 将 T 类型的值缩减到多个“更小”的值。  
  
#### [h2]类

类名 | 功能  
---|---  
[Generators](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-generators) | 包含辅助函数的类，可帮助开发人员编写自己的生成器。  
[RandomDataProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdataprovidert) | 使用随机数据生成的 DataProvider 接口的实现。  
[RandomDataShrinker<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdatashrinkert) | 使用随机数据生成的 DataShrinker 接口的实现。  
[RandomDataStrategy<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdatastrategyt) | 使用随机数据生成的 DataStrategy 接口的实现。  
[LazySeq<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-lazyseqt) | 延迟计算的 T 类型值序列。用于在迭代时计算和记忆值。  
[ShrinkHelpers](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-shrinkhelpers) | 提供对元组实现缩减迭代器的方法。  
  
#### [h2]结构体

结构体名 | 功能  
---|---  
[Function0Wrapper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-function0wrapperr) | 将闭包封装为结构体。  
[KeyRandom](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-keyrandom) | 用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 创建键值。  
[TupleWrapper2](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-tuplewrapper2t0-t1) | 将闭包封装为结构体。闭包带两个参数。  
[TupleWrapper3](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-tuplewrapper3t0-t1-t2) | 将闭包封装为结构体。闭包带三个参数。  
[TupleWrapper4](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-tuplewrapper4t0-t1-t2-t3) | 将闭包封装为结构体。闭包带四个参数。  
[TupleWrapper5](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-tuplewrapper5t0-t1-t2-t3-t4) | 将闭包封装为结构体。闭包带五个参数。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_functions)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs)**  



