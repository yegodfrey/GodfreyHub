---
name: cangjie-references/cj-unittest_prop_test_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.prop_test / 类
---

# 类

#### class Generators
    
    
    public class Generators {}

功能：包含辅助函数的类，可帮助开发人员编写自己的生成器。

#### [h2]static func generate<T>(T, T, (T, T) -> T)
    
    
    public static func generate<T>(l: T, r: T, body: (T, T) -> T): Generator<T>

功能：通过重复调用函数生成值的生成器，范围为 [l, r]。

参数：

  * l: T - 最小值。
  * r: T - 最大值。
  * body: (T, T) -> T - 被调用的生成器闭包。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]static func generate<T>(() -> T)
    
    
    public static func generate<T>(body: () -> T): Generator<T>

功能：通过重复调用函数生成值的生成器。

参数：

  * body: () -> T - 被调用的生成器闭包。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]static func iterable<T>(RandomSource, Array<T>)
    
    
    public static func iterable<T>(random: RandomSource, collection: Array<T>): Generator<T>

功能：通过从数组中随机选取来生成值的生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * collection: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 被选取数字的数组。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]static func lookup<T>(RandomSource)
    
    
    public static func lookup<T>(random: RandomSource): Generator<T> where T <: Arbitrary<T>

功能：通过 T 的 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实例提供的生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]static func mapped<T, R>(RandomSource,(T) -> R)
    
    
    public static func mapped<T, R>(random: RandomSource, body: (T) -> R): Generator<R> where T <: Arbitrary<T>

功能：获取 T 的 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * body: (T) -> R - 生成 R 类型的值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<R> \- 生成器。



#### [h2]static func mapped<T1, T2, R>(RandomSource, (T1, T2) -> R)
    
    
    public static func mapped<T1, T2, R>(random: RandomSource, body: (T1, T2) -> R): Generator<R> where T1 <: Arbitrary<T1>, T2 <: Arbitrary<T2>

功能：获取 T1，T2 的 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * body: (T1, T2) -> R - 生成 R 类型的值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<R> \- 生成器。



#### [h2]static func mapped<T1, T2, T3, R>(RandomSource, (T1, T2, T3) -> R)
    
    
    public static func mapped<T1, T2, T3, R>(random: RandomSource, body: (T1, T2, T3) -> R): Generator<R>
                where T1 <: Arbitrary<T1>, T2 <: Arbitrary<T2>, T3 <: Arbitrary<T3>

功能：获取 T1,T2,T3 的 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * body: (T1, T2,T3) -> R - 生成 R 类型的值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<R> \- 生成器。



#### [h2]static func mapped<T1, T2, T3, T4, R>(RandomSource, (T1, T2, T3, T4) -> R)
    
    
    public static func mapped<T1, T2, T3, T4, R>(random: RandomSource, body: (T1, T2, T3, T4) -> R): Generator<R>
                where T1 <: Arbitrary<T1>, T2 <: Arbitrary<T2>, T3 <: Arbitrary<T3>, T4 <: Arbitrary<T4>

功能：获取 T1,T2,T3,T4 的 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实例提供的生成器，并使用函数体生成 R 类型的值。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * body: (T1, T2,T3,T4) -> R - 生成 R 类型的值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<R> \- 生成器。



#### [h2]static func pick<T>(RandomSource, Array<Generator<T>>)
    
    
    public static func pick<T>(random: RandomSource, variants: Array<Generator<T>>): Generator<T>

功能：通过从生成器数组中随机选取来生成值的生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * variants: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T>> \- 生成器数组。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]static func single<T>(T)
    
    
    public static func single<T>(value: T): Generator<T>

功能：生成器始终返回同一个值。

参数：

  * value: T - 生成器返回的值。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### [h2]static func weighted<T>(RandomSource, Array<(UInt64, Generator<T>)>)
    
    
    public static func weighted<T>(random: RandomSource, variants: Array<(UInt64, Generator<T>)>): Generator<T>

功能：通过从成对数组（权重、生成器）中随机选取来生成值的生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机数。
  * variants: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<(UInt64, Generator<T>)> \- 数组（权重、生成器）。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<T> \- 生成器。



#### class RandomDataProvider<T>
    
    
    public class RandomDataProvider<T> <: DataProvider<T> where T <: Arbitrary<T> {
        public RandomDataProvider(private let configuration: Configuration)
    }

功能：使用随机数据生成的 [DataProvider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-dataprovidert) 接口的实现。

父类型：

  * [DataProvider](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-dataprovidert)<T>



#### [h2]RandomDataProvider(Configuration)
    
    
    public RandomDataProvider(private let configuration: Configuration)

功能：构造一个随机数据提供者 RandomDataProvider 的对象。

参数：

  * configuration: [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) \- 配置对象，必须包含一个随机生成器，名称为 random ，类型为 random.[Random](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-random_package_classes#class-random)。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当 configuration 不包含 random 实例时，抛出异常。



#### [h2]func provide()
    
    
    public override func provide(): Iterable<T>

功能：提供随机化生成的数据。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 从 T 的任意实例创建的无限迭代器。



#### class RandomDataProviderRange<T>
    
    
    public class RandomDataProviderRange<T> <: DataProvider<T> where T <: ArbitraryRange<T> {
        public RandomDataProviderRange(private let configuration: Configuration, private let min: T, private let max: T)
    }

功能：可按照给定范围生成的数据提供器。

父类型：

  * [DataProvider<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-dataprovidert)



#### [h2]RandomDataProviderRange(Configuration, T, T)
    
    
    public RandomDataProviderRange(private let configuration: Configuration, private let min: T, private let max: T)

功能：构造器。

参数：

  * configuration: [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) \- 参数配置信息。
  * min: T - 最小值（包含）。
  * max: T - 最大值（不包含）。



#### [h2]func provide()
    
    
    public override func provide(): Iterable<T>

功能：提供随机化生成的数据。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 数据迭代器。



#### class RandomDataShrinker<T>
    
    
    public class RandomDataShrinker<T> <: DataShrinker<T> {}

功能：使用随机数据生成的 [DataShrinker](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datashrinkert) 接口的实现。

父类型：

  * [DataShrinker](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datashrinkert)<T>



#### [h2]func shrink(T)
    
    
    public override func shrink(value: T): Iterable<T>

功能：获取值的缩减器。

参数：

  * value: T - 参数值。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 如果参数实现了 [Shrink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-shrinkt) 接口，则返回缩减后的迭代器，如果未实现，则返回空的数组。



#### class RandomDataShrinkerRange<T>
    
    
    public class RandomDataShrinkerRange<T> <: DataShrinker<T> where T <: Comparable<T> {}

功能：可按照给定范围生成的数据缩减器。

父类型：

  * [DataShrinker<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datashrinkert)



#### [h2]func shrink(T)
    
    
    public override func shrink(value: T): Iterable<T>

功能：将该值缩小为一组可能的“较小”值。

参数：

  * value: T - 将被缩减的值。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 数据迭代器。



#### class RandomDataStrategy<T>
    
    
    public class RandomDataStrategy<T> <: DataStrategy<T> where T <: Arbitrary<T> {}

功能：使用随机数据生成的 [DataStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datastrategyt) 接口的实现。

父类型：

  * [DataStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datastrategyt)<T>



#### [h2]prop isInfinite
    
    
    public override prop isInfinite: Bool

功能：当该策略为无穷尽时，值为 true, 否则为 false。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

#### [h2]func provider(Configuration)
    
    
    public override func provider(configuration: Configuration): RandomDataProvider<T>

功能：获取随机数据的提供者。

参数：

  * configuration: [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) \- 参数配置信息。



返回值：

  * RandomDataProvider<T> \- 随机数提供者。



#### [h2]func shrinker(Configuration)
    
    
    public override func shrinker(_: Configuration): RandomDataShrinker<T>

功能：获取随机数据的缩减器。

参数：

  * _: [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) \- 参数配置信息。



返回值：

  * RandomDataShrinker<T> \- 随机数据的缩减器。



#### class RandomDataStrategyRange<T>
    
    
    public class RandomDataStrategyRange<T> <: DataStrategy<T> where T <: ArbitraryRange<T> {}

功能：可按照给定范围生成的数据策略器。

父类型：

  * [DataStrategy<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-datastrategyt)



#### [h2]func provider(Configuration)
    
    
    public override func provider(configuration: Configuration): RandomDataProviderRange<T>

功能：获取随机数据的提供者。

参数：

  * configuration: [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) \- 参数配置信息。



返回值：

  * [RandomDataProviderRange](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_classes#class-randomdataproviderranget)<T> \- 随机数提供者。



#### [h2]func shrinker(Configuration)
    
    
    public override func shrinker(_: Configuration): RandomDataShrinkerRange<T>

功能：获取随机数据的缩减器。

参数：

  * _: [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) \- 参数配置信息。



返回值：

  * RandomDataShrinkerRange<T> \- 随机数据的缩减器。



#### [h2]prop isInfinite
    
    
    public override prop isInfinite: Bool

功能：当该策略为无穷尽时，值为 true, 否则为 false。

类型：[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)

#### class LazySeq<T>
    
    
    public class LazySeq<T> <: Iterable<T> {
        public init(element: T)
        public init()
    }

功能：延迟计算的 T 类型值序列。用于在迭代时计算和记忆值。

这是完全不可变的，每次操作都会产生一个新的序列。

父类型：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T>



#### [h2]init()
    
    
    public init()

功能：构造器。

#### [h2]init(T)
    
    
    public init(element: T)

功能：构造器。

参数：

  * element: T - 初始元素。



#### [h2]func append(T)
    
    
    public func append(element: T): LazySeq<T>

功能：增加一个元素。

参数：

  * element: T - 被增加的元素。



返回值：

  * LazySeq<T> \- 增加元素后的序列。



#### [h2]func concat(LazySeq<T>)
    
    
    public func concat(other: LazySeq<T>): LazySeq<T>

功能：增加一个序列到此序列中。复杂度为 O(1) 。

参数：

  * other: LazySeq<T> \- 被增加的序列。



返回值：

  * LazySeq<T> \- 增加元素后的序列。



#### [h2]func iterator()
    
    
    public func iterator(): Iterator<T>

功能：实现序列的迭代器。

返回值：

  * [Iterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort)<T> \- 序列迭代器。



#### [h2]func map<U>((T) -> U)
    
    
    public func map<U>(body: (T) -> U): LazySeq<U>

功能：对序列中的每个元素执行闭包处理。

参数：

  * body: (T) -> U - 对每个元素执行的闭包。



返回值：

  * LazySeq<U> \- 处理后的序列。



#### [h2]func mixWith(LazySeq<T>)
    
    
    public func mixWith(other: LazySeq<T>): LazySeq<T>

功能：将新序列穿插进原序列中。

例如：{1,2,3,4}.mixWith({5,6,7}) -> {1,5,2,6,3,7,4}

参数：

  * other: LazySeq<T> \- 待插入的序列。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]func prepend(T)
    
    
    public func prepend(element: T): LazySeq<T>

功能：将新序列插进原序列的开头。

参数：

  * element: T - 待插入的序列。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]static func mix(LazySeq<T>, LazySeq<T>)
    
    
    public static func mix(l1: LazySeq<T>, l2: LazySeq<T>): LazySeq<T>

功能：两个序列穿插混合成一个。

例如：mix({1,2,3,4}, {5,6,7}) -> {1,5,2,6,3,7,4}

参数：

  * l1: LazySeq<T> \- 待穿插的序列。
  * l2: LazySeq<T> \- 待穿插的序列。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]static func mix(LazySeq<T>, LazySeq<T>, LazySeq<T>)
    
    
    public static func mix(l1: LazySeq<T>, l2: LazySeq<T>, l3: LazySeq<T>): LazySeq<T>

功能：三个序列穿插混合成一个。

参数：

  * l1: LazySeq<T> \- 待穿插的序列。
  * l2: LazySeq<T> \- 待穿插的序列。
  * l3: LazySeq<T> \- 待穿插的序列。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]static func mix(LazySeq<T>, LazySeq<T>, LazySeq<T>, LazySeq<T>)
    
    
    public static func mix(l1: LazySeq<T>, l2: LazySeq<T>, l3: LazySeq<T>, l4: LazySeq<T>): LazySeq<T>

功能：四个序列穿插混合成一个。

参数：

  * l1: LazySeq<T> \- 待穿插的序列。
  * l2: LazySeq<T> \- 待穿插的序列。
  * l3: LazySeq<T> \- 待穿插的序列。
  * l4: LazySeq<T> \- 待穿插的序列。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]static func mix(LazySeq<T>, LazySeq<T>, LazySeq<T>, LazySeq<T>, LazySeq<T>)
    
    
    public static func mix(l1: LazySeq<T>, l2: LazySeq<T>, l3: LazySeq<T>, l4: LazySeq<T>, l5: LazySeq<T>): LazySeq<T> 

功能：五个序列穿插混合成一个。

参数：

  * l1: LazySeq<T> \- 待穿插的序列。
  * l2: LazySeq<T> \- 待穿插的序列。
  * l3: LazySeq<T> \- 待穿插的序列。
  * l4: LazySeq<T> \- 待穿插的序列。
  * l5: LazySeq<T> \- 待穿插的序列。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]static func of(Iterable<T>)
    
    
    public static func of(iterable: Iterable<T>): LazySeq<T>

功能：从迭代器构造一个序列。

参数：

  * iterable: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 待处理的迭代器。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### [h2]static func of(Array<T>)
    
    
    public static func of(array: Array<T>): LazySeq<T>

功能：从数组构造一个序列。

参数：

  * array: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 待处理的数组。



返回值：

  * LazySeq<T> \- 处理后的序列。



#### class ShrinkHelpers
    
    
    public class ShrinkHelpers {}

功能：提供对元组实现缩减迭代器的方法。

#### [h2]static func shrinkTuple<T0, T1>((T0, T1),Iterable<T0>,Iterable<T1>)
    
    
    public static func shrinkTuple<T0, T1>(
        tuple: (T0, T1),
        t0: Iterable<T0>,
        t1: Iterable<T1>
    ): Iterable<(T0, T1)>

功能：实现元组的缩减迭代器。

参数：

  * tuple: (T0, T1) - 被缩减的元组。
  * t0: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T0> \- 第一个元组成员的缩减迭代器。
  * t1: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T1> \- 第二个元组成员的缩减迭代器。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<(T0, T1)> \- 元组缩减迭代器。



#### [h2]static func shrinkTuple<T0, T1, T2>((T0, T1, T2),Iterable<T0>,Iterable<T1>,Iterable<T2>)
    
    
    public static func shrinkTuple<T0, T1, T2>(
        tuple: (T0, T1, T2),
        t0: Iterable<T0>,
        t1: Iterable<T1>,
        t2: Iterable<T2>
    ): Iterable<(T0, T1, T2)>

功能：实现元组的缩减迭代器。

参数：

  * tuple: (T0, T1, T2) - 被缩减的元组。
  * t0: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T0> \- 第一个元组成员的缩减迭代器。
  * t1: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T1> \- 第二个元组成员的缩减迭代器。
  * t2: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T2> \- 第三个元组成员的缩减迭代器。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<(T0, T1, T2)> \- 元组缩减迭代器。



#### [h2]static func shrinkTuple<T0, T1, T2, T3>((T0, T1, T2, T3),Iterable<T0>,Iterable<T1>,Iterable<T2>,Iterable<T3>)
    
    
    public static func shrinkTuple<T0, T1, T2, T3>(
        tuple: (T0, T1, T2, T3),
        t0: Iterable<T0>,
        t1: Iterable<T1>,
        t2: Iterable<T2>,
        t3: Iterable<T3>
    ): Iterable<(T0, T1, T2, T3)>

功能：实现元组的缩减迭代器。

参数：

  * tuple: (T0, T1, T2, T3) - 被缩减的元组。
  * t0: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T0> \- 第一个元组成员的缩减迭代器。
  * t1: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T1> \- 第二个元组成员的缩减迭代器。
  * t2: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T2> \- 第三个元组成员的缩减迭代器。
  * t3: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T3> \- 第四个元组成员的缩减迭代器。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<(T0, T1, T2,T3)> \- 元组缩减迭代器。



#### [h2]static func shrinkTuple<T0, T1, T2, T3, T4>((T0, T1, T2, T3, T4),Iterable<T0>,Iterable<T1>,Iterable<T2>,Iterable<T3>,Iterable<T4>)
    
    
    public static func shrinkTuple<T0, T1, T2, T3, T4>(
        tuple: (T0, T1, T2, T3, T4),
        t0: Iterable<T0>,
        t1: Iterable<T1>,
        t2: Iterable<T2>,
        t3: Iterable<T3>,
        t4: Iterable<T4>
    ): Iterable<(T0, T1, T2, T3, T4)>

功能：实现元组的缩减迭代器。

参数：

  * tuple: (T0, T1, T2, T3, T4) - 被缩减的元组。
  * t0: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T0> \- 第一个元组成员的缩减迭代器。
  * t1: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T1> \- 第二个元组成员的缩减迭代器。
  * t2: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T2> \- 第三个元组成员的缩减迭代器。
  * t3: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T3> \- 第四个元组成员的缩减迭代器。
  * t4: [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T4> \- 第五个元组成员的缩减迭代器。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<(T0, T1, T2,T3,T4)> \- 元组缩减迭代器。



#### [h2]static func mix<T>(Array<Iterable<T>>)
    
    
    public static func mix<T>(iterables: Array<Iterable<T>>): Iterable<T>

功能：将迭代器列表混合为一个迭代器。

参数：

  * iterables: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T>> \- 待混合的列表。



返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<T> \- 混合后的迭代器。


