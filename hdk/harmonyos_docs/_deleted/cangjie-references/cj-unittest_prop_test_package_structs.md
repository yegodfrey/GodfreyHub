---
name: cangjie-references/cj-unittest_prop_test_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.prop_test / 结构体
---

# 结构体

#### struct Function0Wrapper<R>
    
    
    public struct Function0Wrapper<R> {
        public Function0Wrapper(public let function: () -> R)
    }

功能：将闭包封装为结构体。

#### [h2]Function0Wrapper(() -> R)
    
    
    public Function0Wrapper(public let function: () -> R)

功能：Function0Wrapper 构造器。

参数：

  * function: () -> R - 被封装的闭包。



#### [h2]let function
    
    
    public let function: () -> R

功能：函数对象自身。

类型：()->R

#### [h2]operator func ()()
    
    
    public operator func () (): R

功能：调用操作符函数。将闭包转换为结构体的调用操作符函数。

返回值：

  * R - 同闭包的返回值。



#### [h2]extend<R> Function0Wrapper<R> <: Arbitrary<Function0Wrapper<R>> where R <: Arbitrary<R>
    
    
    extend<R> Function0Wrapper<R> <: Arbitrary<Function0Wrapper<R>> where R <: Arbitrary<R>

功能：为 Function0Wrapper 扩展 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实现。

父类型：

  * [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt)<Function0Wrapper<R>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<Function0Wrapper<R>>

功能：获取生成 Function0Wrapper<R> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机值生成种子。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<[Function0Wrapper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_structs#struct-function0wrapperr)<R>> \- 生成器。



#### struct KeyRandom
    
    
    public struct KeyRandom <: KeyFor<RandomSource> {}

功能：用于在 [Configuration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-configuration) 创建键值。

父类型：

  * [KeyFor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-keyfort)<[RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource)>



#### [h2]prop random
    
    
    public static prop random: KeyRandom

功能：配置项的键值。

类型：KeyRandom

#### [h2]prop name
    
    
    public prop name: String

功能：配置项的键值的名称。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### struct TupleWrapper2<T0, T1>
    
    
    public struct TupleWrapper2<T0, T1> {
        public TupleWrapper2(public let tuple: (T0, T1))
    }

功能：将闭包封装为结构体。闭包带两个参数。

#### [h2]TupleWrapper2((T0, T1))
    
    
    public TupleWrapper2(public let tuple: (T0, T1))

功能：TupleWrapper2 构造器。

参数：

  * tuple: (T0, T1) - 闭包的两个入参。



#### [h2]let tuple
    
    
    public let tuple: (T0, T1)

功能：元组自身。

类型：(T0, T1)

#### [h2]func apply<R>((T0, T1) -> R)
    
    
    public func apply<R>(f: (T0, T1) -> R): R

功能：执行闭包函数。

参数：

  * f: (T0, T1) -> R - 待执行的闭包。



返回值：

  * R - 闭包的执行结果。



#### [h2]extend<T0, T1> TupleWrapper2<T0, T1> <: ToString
    
    
    extend<T0, T1> TupleWrapper2<T0, T1> <: ToString

功能：为 TupleWrapper2 扩展 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 实现。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



**func toString()**
    
    
    public func toString()

功能：TupleWrapper2 的字符串表达。

#### [h2]extend<T0, T1> TupleWrapper2<T0, T1> <: Equatable<TupleWrapper2<T0, T1>>
    
    
    extend<T0, T1> TupleWrapper2<T0, T1> <: Equatable<TupleWrapper2<T0, T1>>

功能：为 TupleWrapper2 扩展 [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet) 实现。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TupleWrapper2<T0, T1>>



**operator func ==(TupleWrapper2 <T0, T1>)**
    
    
    public operator func ==(other: TupleWrapper2<T0, T1>): Bool

功能：比较两个二元元组。

参数：

  * other: TupleWrapper2<T0, T1> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 相等时返回 true ，否则返回 false 。



**operator func !=(TupleWrapper2 <T0, T1>)**
    
    
    public operator func !=(other: TupleWrapper2<T0, T1>): Bool

功能：比较两个二元元组。

参数：

  * other: TupleWrapper2<T0, T1> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 不相等时返回 true ，否则返回 false 。



#### [h2]extend<T0, T1> TupleWrapper2<T0, T1> <: IndexAccess
    
    
    extend<T0, T1> TupleWrapper2<T0, T1> <: IndexAccess

功能：为 TupleWrapper2 扩展 [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess) 实现。

父类型：

  * [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess)



**func getElementAsAny(Int64)**
    
    
    public func getElementAsAny(index: Int64): ?Any

功能：按索引获取元组内的值。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 索引值。



返回值：

  * ?[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 获取到的元组内的值。索引不合法时返回 None 。



#### [h2]extend<T0, T1> TupleWrapper2<T0, T1> <: Arbitrary<TupleWrapper2<T0, T1>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>
    
    
    extend<T0, T1> TupleWrapper2<T0, T1> <: Arbitrary<TupleWrapper2<T0, T1>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>

功能：为 TupleWrapper2 扩展 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实现。

父类型：

  * [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt)<TupleWrapper2<T0, T1>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<TupleWrapper2<T0, T1>>

功能：获取生成 TupleWrapper2<T0, T1> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机值生成种子。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<TupleWrapper2<T0, T1>> \- 生成器。



#### [h2]extend<T0, T1> TupleWrapper2<T0, T1> <: Shrink<TupleWrapper2<T0, T1>> where T0 <: Shrink<T0>,T1 <: Shrink<T1>
    
    
    extend<T0, T1> TupleWrapper2<T0, T1> <: Shrink<TupleWrapper2<T0, T1>>
            where T0 <: Shrink<T0>,
                  T1 <: Shrink<T1> {
        public func shrink(): Iterable<TupleWrapper2<T0, T1>>
    }

**func shrink()**
    
    
    public func shrink(): Iterable<TupleWrapper2<T0, T1>>

功能：缩减元组。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<TupleWrapper2<T0, T1>> \- 数据迭代器。



#### struct TupleWrapper3<T0, T1, T2>
    
    
    public struct TupleWrapper3<T0, T1, T2> {
        public TupleWrapper3(public let tuple: (T0, T1,T2))
    }

功能：将闭包封装为结构体。闭包带三个参数。

#### [h2]TupleWrapper3((T0, T1, T2))
    
    
    public TupleWrapper3(public let tuple: (T0, T1, T2))

功能：TupleWrapper3 构造器。

参数：

  * tuple: (T0, T1, T2) - 闭包的三个入参。



#### [h2]let tuple
    
    
    public let tuple: (T0, T1, T2)

功能：元组自身。

类型：(T0, T1, T2)

#### [h2]func apply<R>((T0, T1, T2) -> R)
    
    
    public func apply<R>(f: (T0, T1,T2) -> R): R

功能：执行闭包函数。

参数：

  * f: (T0, T1,T2) -> R - 待执行的闭包。



返回值：

  * R - 闭包的执行结果。



#### [h2]extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: ToString
    
    
    extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: ToString

功能：为 TupleWrapper3 扩展 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 实现。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



**func toString()**
    
    
    public func toString()

功能：TupleWrapper3 的字符串表达。

#### [h2]extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: Equatable<TupleWrapper3<T0, T1, T2>>
    
    
    extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: Equatable<TupleWrapper3<T0, T1, T2>>

功能：为 TupleWrapper3 扩展 [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet) 实现。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TupleWrapper3<T0, T1, T2>>



**operator func ==(TupleWrapper3 <T0, T1, T2>)**
    
    
    public operator func ==(other: TupleWrapper3<T0, T1, T2>): Bool

功能：比较两个元组。

参数：

  * other: TupleWrapper3<T0, T1, T2> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 相等时返回 true ，否则返回 false 。



**operator func !=(TupleWrapper3 <T0, T1, T2>)**
    
    
    public operator func !=(other: TupleWrapper3<T0, T1, T2>): Bool

功能：比较两个元组。

参数：

  * other: TupleWrapper3<T0, T1, T2> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 不相等时返回 true ，否则返回 false 。



#### [h2]extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: IndexAccess
    
    
    extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: IndexAccess

功能：为 TupleWrapper3 扩展 [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess) 实现。

父类型：

  * [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess)



**func getElementAsAny(Int64)**
    
    
    public func getElementAsAny(index: Int64): ?Any

功能：按索引获取元组内的值。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 索引值。



返回值：

  * ?[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 获取到的元组内的值。索引不合法时返回 None 。



#### [h2]extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: Arbitrary<TupleWrapper3<T0, T1, T2>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>,T2 <: Arbitrary<T2>
    
    
    extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: Arbitrary<TupleWrapper3<T0, T1, T2>>  where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>,T2 <: Arbitrary<T2>

功能：为 TupleWrapper3 扩展 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实现。

父类型：

  * [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt)<TupleWrapper3<T0, T1, T2>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<TupleWrapper3<T0, T1, T2>>

功能：获取生成 TupleWrapper3<T0, T1, T2> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机值生成种子。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<TupleWrapper3<T0, T1, T2>> \- 生成器。



#### [h2]extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: Shrink<TupleWrapper3<T0, T1, T2>> where T0 <: Shrink<T0>,T1 <: Shrink<T1>,T2 <: Shrink<T2>
    
    
    extend<T0, T1, T2> TupleWrapper3<T0, T1, T2> <: Shrink<TupleWrapper3<T0, T1, T2>>
            where T0 <: Shrink<T0>,
                  T1 <: Shrink<T1>,
                  T2 <: Shrink<T2> {
        public func shrink(): Iterable<TupleWrapper3<T0, T1, T2>>
    }

#### [h2]func shrink()
    
    
    public func shrink(): Iterable<TupleWrapper3<T0, T1, T2>>

功能：缩减元组。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<TupleWrapper3<T0, T1, T2>> \- 数据迭代器。



#### struct TupleWrapper4<T0, T1, T2, T3>
    
    
    public struct TupleWrapper4<T0, T1, T2, T3> {
        public TupleWrapper4(public let tuple: (T0, T1, T2, T3))
    }

功能：将闭包封装为结构体。闭包带四个参数。

#### [h2]TupleWrapper4((T0, T1, T2, T3))
    
    
    public TupleWrapper4(public let tuple: (T0, T1, T2, T3))

功能：TupleWrapper4 构造器。

参数：

  * tuple: (T0, T1, T2, T3) - 闭包的 4 个入参。



#### [h2]let tuple
    
    
    public let tuple: (T0, T1, T2, T3)

功能：元组自身。

类型：(T0, T1, T2, T3)

#### [h2]func apply<R>((T0, T1, T2, T3) -> R)
    
    
    public func apply<R>(f: (T0, T1, T2, T3) -> R): R

功能：执行闭包函数。

参数：

  * f: (T0, T1, T2, T3) -> R - 待执行的闭包。



返回值：

  * R - 闭包的执行结果。



#### [h2]extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: ToString
    
    
    extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: ToString

功能：为 TupleWrapper4 扩展 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 实现。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



**func toString()**
    
    
    public func toString()

功能：TupleWrapper4 的字符串表达。

#### [h2]extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: Equatable<TupleWrapper4<T0, T1, T2, T3>>
    
    
    extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: Equatable<TupleWrapper4<T0, T1, T2, T3>>

功能：为 TupleWrapper4 扩展 [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet) 实现。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TupleWrapper4<T0, T1, T2, T3>>



**operator func ==(TupleWrapper4 <T0, T1, T2, T3>)**
    
    
    public operator func ==(other: TupleWrapper4<T0, T1, T2, T3>): Bool

功能：比较两个元组。

参数：

  * other: TupleWrapper4<T0, T1, T2, T3> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 相等时返回 true ，否则返回 false 。



**operator func !=(TupleWrapper4 <T0, T1, T2, T3>)**
    
    
    public operator func !=(other: TupleWrapper4<T0, T1, T2, T3>): Bool

功能：比较两个元组。

参数：

  * other: TupleWrapper4<T0, T1, T2, T3> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 不相等时返回 true ，否则返回 false 。



#### [h2]extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: IndexAccess
    
    
    extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: IndexAccess

功能：为 TupleWrapper4 扩展 [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess) 实现。

父类型：

  * [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess)



**func getElementAsAny(Int64)**
    
    
    public func getElementAsAny(index: Int64): ?Any

功能：按索引获取元组内的值。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 索引值。



返回值：

  * ?[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 获取到的元组内的值。索引不合法时返回 None 。



#### [h2]extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3><: Arbitrary<TupleWrapper4<T0, T1, T2, T3>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>,T2 <: Arbitrary<T2>,T3 <: Arbitrary<T3>
    
    
    extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3><: Arbitrary<TupleWrapper4<T0, T1, T2, T3>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>,T2 <: Arbitrary<T2>,T3 <: Arbitrary<T3>

功能：为 TupleWrapper4 扩展 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实现。

父类型：

  * [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt)<TupleWrapper4<T0, T1, T2, T3>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<TupleWrapper4<T0, T1, T2, T3>>

功能：获取生成 TupleWrapper4<T0, T1, T2, T3> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机值生成种子。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<TupleWrapper4<T0, T1, T2, T3>> \- 生成器。



#### [h2]extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: Shrink<TupleWrapper4<T0, T1, T2, T3>> where T0 <: Shrink<T0>,T1 <: Shrink<T1>,T2 <: Shrink<T2>, T3 <: Shrink<T3>
    
    
    extend<T0, T1, T2, T3> TupleWrapper4<T0, T1, T2, T3> <: Shrink<TupleWrapper4<T0, T1, T2, T3>>
            where T0 <: Shrink<T0>,
                  T1 <: Shrink<T1>,
                  T2 <: Shrink<T2>,
                  T3 <: Shrink<T3> {
        public func shrink(): Iterable<TupleWrapper4<T0, T1, T2, T3>>
    }

#### [h2]func shrink()
    
    
    public func shrink(): Iterable<TupleWrapper4<T0, T1, T2, T3>>

功能：缩减元组。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<TupleWrapper4<T0, T1, T2, T3>> \- 数据迭代器。



#### struct TupleWrapper5<T0, T1, T2, T3, T4>
    
    
    public struct TupleWrapper5<T0, T1, T2, T3, T4> {
        public TupleWrapper5(public let tuple: (T0, T1, T2, T3, T4))
    }

功能：将闭包封装为结构体。闭包带五个参数。

#### [h2]TupleWrapper5((T0, T1, T2, T3, T4))
    
    
    public TupleWrapper5(public let tuple: (T0, T1, T2, T3, T4))

功能：TupleWrapper5 构造器。

参数：

  * tuple: (T0, T1, T2, T3, T4) - 闭包的 5 个入参。



#### [h2]let tuple
    
    
    public let tuple: (T0, T1, T2, T3, T4)

功能：元组自身。

类型：(T0, T1, T2, T3, T4)

#### [h2]func apply<R>((T0, T1, T2, T3, T4) -> R)
    
    
    public func apply<R>(f: (T0, T1, T2, T3, T4) -> R): R

功能：执行闭包函数。

参数：

  * f: (T0, T1, T2, T3, T4) -> R - 待执行的闭包。



返回值：

  * R - 闭包的执行结果。



#### [h2]extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: ToString
    
    
    extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: ToString

功能：为 TupleWrapper5 扩展 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 实现。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



**func toString()**
    
    
    public func toString()

功能：TupleWrapper5 的字符串表达。

#### [h2]extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: Equatable<TupleWrapper5<T0, T1, T2, T3, T4>>
    
    
    extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: Equatable<TupleWrapper5<T0, T1, T2, T3, T4>>

功能：为 TupleWrapper5 扩展 [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet) 实现。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TupleWrapper5<T0, T1, T2, T3, T4>>



**operator func ==(TupleWrapper5 <T0, T1, T2, T3, T4>)**
    
    
    public operator func ==(other: TupleWrapper5<T0, T1, T2, T3, T4>): Bool

功能：比较两个二元元组。

参数：

  * other: TupleWrapper5<T0, T1, T2, T3> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 相等时返回 true ，否则返回 false 。



**operator func !=(TupleWrapper5 <T0, T1, T2, T3, T4>)**
    
    
    public operator func !=(other: TupleWrapper5<T0, T1, T2, T3, T4>): Bool

功能：比较两个元组。

参数：

  * other: TupleWrapper5<T0, T1, T2, T3, T4> \- 待比较的元组。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 不相等时返回 true ，否则返回 false 。



#### [h2]extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: IndexAccess
    
    
    extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: IndexAccess

功能：为 TupleWrapper5 扩展 [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess) 实现。

父类型：

  * [IndexAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-indexaccess)



**func getElementAsAny(Int64)**
    
    
    public func getElementAsAny(index: Int64): ?Any

功能：按索引获取元组内的值。

参数：

  * index: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 索引值。



返回值：

  * ?[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 获取到的元组内的值。索引不合法时返回 None 。



#### [h2]extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: Arbitrary<TupleWrapper5<T0, T1, T2, T3, T4>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>,T2 <: Arbitrary<T2>,T3 <: Arbitrary<T3>,T4 <: Arbitrary<T4>
    
    
    extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: Arbitrary<TupleWrapper5<T0, T1, T2, T3, T4>> where T0 <: Arbitrary<T0>,T1 <: Arbitrary<T1>,T2 <: Arbitrary<T2>,T3 <: Arbitrary<T3>,T4 <: Arbitrary<T4>

功能：为 TupleWrapper5 扩展 [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt) 实现。

父类型：

  * [Arbitrary](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-arbitraryt)<TupleWrapper5<T0, T1, T2, T3, T4>>



**static func arbitrary(RandomSource)**
    
    
    public static func arbitrary(random: RandomSource): Generator<TupleWrapper5<T0, T1, T2, T3, T4>>

功能：获取生成 TupleWrapper5<T0, T1, T2, T3, T4> 类型随机值生成器。

参数：

  * random: [RandomSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-randomsource) \- 随机值生成种子。



返回值：

  * [Generator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_prop_test_package_interfaces#interface-generatort)<TupleWrapper5<T0, T1, T2, T3, T4>> \- 生成器。



#### [h2]extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: Shrink<TupleWrapper5<T0, T1, T2, T3, T4>> where T0 <: Shrink<T0>,T1 <: Shrink<T1>,T2 <: Shrink<T2>, T3 <: Shrink<T3>, T4 <: Shrink<T4>
    
    
    extend<T0, T1, T2, T3, T4> TupleWrapper5<T0, T1, T2, T3, T4> <: Shrink<TupleWrapper5<T0, T1, T2, T3, T4>>
            where T0 <: Shrink<T0>,
                  T1 <: Shrink<T1>,
                  T2 <: Shrink<T2>,
                  T3 <: Shrink<T3>,
                  T4 <: Shrink<T4> {
        public func shrink(): Iterable<TupleWrapper5<T0, T1, T2, T3, T4>>
    }

#### [h2]func shrink()
    
    
    public func shrink(): Iterable<TupleWrapper5<T0, T1, T2, T3, T4>>

功能：缩减元组。

返回值：

  * [Iterable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-iterablee)<TupleWrapper5<T0, T1, T2, T3, T4>> \- 数据迭代器。


