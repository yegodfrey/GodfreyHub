---
name: cangjie-references/cj-unittest_prop_test_package_functions
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_functions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.prop_test / 函数
---

# 函数

#### func emptyIterable<T>()
    
    
    public func emptyIterable<T>(): Iterable<T>

功能：创建一个空的迭代器。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 空迭代器。



#### func random<T>() where T <: Arbitrary<T>
    
    
    public func random<T>(): RandomDataStrategy<T> where T <: Arbitrary<T>

功能：该函数生成 T 类型的随机数据，其中 T 必须实现接口 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt)<T> 。该函数的返回值是参数化测试的一种参数源。

返回值：

  * [RandomDataStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdatastrategyt)<T> \- 使用随机数据生成的 RandomDataStrategy 接口的实例。



#### func randomInRange<T>(Option<T>, Option<T>)
    
    
    public func randomInRange<T>(min!: Option<T> = None, max!: Option<T> = None): RandomDataStrategyRange<T> where T <: ArbitraryRange<T>

功能：创建一个 [RandomDataStrategyRange<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdatastrategyranget)

参数：

  * min!: [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> \- 最小值（包含）。
  * max!: [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> \- 最大值（不包含）。



返回值：

  * [RandomDataStrategyRange<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdatastrategyranget) \- 随机数据策略器。


