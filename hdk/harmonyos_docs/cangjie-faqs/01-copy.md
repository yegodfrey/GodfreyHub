---
name: cangjie-faqs/01-copy
title: 仓颉语言中赋值和深/浅拷贝的关系
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-copy
nodePath: FAQ / 语法 / 仓颉语言中赋值和深/浅拷贝的关系
---

# 仓颉语言中赋值和深/浅拷贝的关系

仓颉语言规约中并未引入深拷贝与浅拷贝的概念，所以本文也不会引入相关的概念，仅对仓颉语言的两种赋值情况举例说明，希望开发者能通过本文更好的理解仓颉语言的赋值。

仓颉语言支持引用类型变量和值类型变量，针对两种类型的赋值我们分别讨论：

#### 引用类型变量和值类型变量的区别

从编译器实现层面看，任何变量总会关联一个值（一般是通过内存地址/寄存器关联），只是在使用时，对有些变量，将直接取用这个值本身，这被称为值类型变量，而对另一些变量，将这个值作为索引、取用这个索引指示的数据，这被称为引用类型变量。值类型变量通常在线程栈上分配，每个变量都有自己的数据副本；引用类型变量通常在进程堆中分配，多个变量可引用同一数据对象，对一个变量执行的操作可能会影响其他变量。

#### 引用类型变量赋值
    
    
    public class Rectangle {
        public var length = 4
        public var width = 5
        public func area(): Int64 {
            return length * width
        }
    }
    
    public func FAQ06Test1(): Unit {
        let r1 = Rectangle()
        Hilog.info(0, "Cangjie Test", "Before Assignment: r1.width: ${r1.width}")
        let r2 = r1 // r1 r2 共享同一实例对象
        r2.width = 6 // 通过 r2 修改了 r1 r2 共享的实例对象
        Hilog.info(0, "Cangjie Test", "After Assignment: r1.width: ${r1.width}")
    }

调用FAQ06Test1，日志输出结果：
    
    
    Before Assignment: r1.width: 5
    After Assignment: r1.width: 6

可以从上述案例中看出，r1与r2持有的是相同的对象，对r2变量的修改会影响到r1变量。

#### 值类型变量赋值
    
    
    struct Point <: ToString {
        public var x = 0
        public var y = 0
        public func toString(): String {
            return "x: ${this.x}, y: ${this.y}"
        }
    }
    
    public func FAQ06Test2(): Unit {
        var point1 = Point()
        var point2 = point1 // 复制 point1 的实例对象
        point2.x = 3
        Hilog.info(0, "Cangjie Test", "point1: ${point1}")
        Hilog.info(0, "Cangjie Test", "point2: ${point2}")
    }

调用FAQ06Test2，日志输出结果：
    
    
    point1: x: 0, y: 0
    point2: x: 3, y: 0

可以从上述案例中看出，point1与point2持有的是不同的对象，对point2变量的修改不会影响到point1变量。

更多仓颉语言引用类型和值类型的内容，详情请参见[程序结构](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-program_structure#值类型和引用类型变量)。
