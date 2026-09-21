---
name: cangjie-faqs/15-generics
title: 仓颉语言如何使用泛型
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/15-generics
nodePath: FAQ / 语法 / 仓颉语言如何使用泛型
---

# 仓颉语言如何使用泛型

仓颉语言支持泛型函数、泛型类、泛型接口、泛型结构体和泛型枚举，通过类型参数实现代码复用。

#### 泛型函数

在函数名后使用<>括起一系列逗号分隔的标识符以声明类型参数，使用where关键字指定泛型约束：
    
    
    func genericPrint<T>(a: T): Unit where T <: ToString {
        Hilog.info(0, "Cangjie Test", "${a}")
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testGenericFunction(): Unit {
        genericPrint<Int64>(42)
        genericPrint<String>("hello")
        genericPrint<Float64>(3.14)
    }

调用testGenericFunction，日志输出结果：
    
    
    42
    hello
    3.140000

#### 泛型类

类可以有多个类型参数和约束：
    
    
    public class Pair<K, V> where K <: Hashable & Equatable<K> {
        public var key: Option<K> = Option<K>.None
        public var value: Option<V> = Option<V>.None
    
        public init(key: K, value: V) {
            this.key = Some(key)
            this.value = Some(value)
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testGenericClass(): Unit {
        let pair1 = Pair<String, Int64>("age", 25)
        let pair2 = Pair<String, String>("name", "Cangjie")
        Hilog.info(0, "Cangjie Test", "key=${pair1.key}, value=${pair1.value}")
        Hilog.info(0, "Cangjie Test", "key=${pair2.key}, value=${pair2.value}")
    }

调用testGenericClass，日志输出结果：
    
    
    key=Some(age), value=Some(25)
    key=Some(name), value=Some(Cangjie)

#### 泛型接口
    
    
    public interface Container<E> {
        func getSize(): Int64
        func getItem(index: Int64): E
    }

实现示例：
    
    
    class IntContainer <: Container<Int64> {
        private var items: ArrayList<Int64> = ArrayList<Int64>()
    
        public func getSize(): Int64 {
            items.size
        }
    
        public func getItem(index: Int64): Int64 {
            items[index]
        }
    
        public func add(item: Int64): Unit {
            this.items.add(item)
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testGenericInterface(): Unit {
        let container = IntContainer()
        container.add(10)
        container.add(20)
        container.add(30)
        Hilog.info(0, "Cangjie Test", "size=${container.getSize()}")
        Hilog.info(0, "Cangjie Test", "item[0]=${container.getItem(0)}")
        Hilog.info(0, "Cangjie Test", "item[1]=${container.getItem(1)}")
    }

调用testGenericInterface，日志输出结果：
    
    
    size=3
    item[0]=10
    item[1]=20

#### 泛型约束

使用where关键字约束类型参数须实现的接口或继承的类：
    
    
    func findMax<T>(arr: Array<T>): T where T <: Comparable<T> {
        var max = arr[0]
        for (i in 1..arr.size) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testGenericConstraint(): Unit {
        let arr: Array<Int64> = [3, 7, 1, 9, 4]
        let max = findMax<Int64>(arr)
        Hilog.info(0, "Cangjie Test", "max = ${max}")
    }

调用testGenericConstraint，日志输出结果：
    
    
    max = 9

更多泛型使用方法，详情请参见[泛型](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-generic)。
