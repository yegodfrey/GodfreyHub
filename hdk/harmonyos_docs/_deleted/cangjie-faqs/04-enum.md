---
name: cangjie-faqs/04-enum
title: 仓颉语言中枚举类型enum的变量如何判等
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/04-enum
nodePath: FAQ / 语法 / 仓颉语言中枚举类型enum的变量如何判等
---

# 仓颉语言中枚举类型enum的变量如何判等

#### 问题描述

仓颉的enum类型支持定义有参构造器，相比于某些语言中仅支持无参标签的enum类型具有更强的表达力，但同时也不存在通用的方式使编译器自动为enum实现==和!=操作符。

例如，如下代码在编译时会报：invalid binary operator '==' on type 'Enum-RGBColor' and 'Enum-RGBColor'
    
    
    enum RGBColor {
        | Red(UInt8)
        | Green(UInt8)
        | Blue(UInt8)
    }
    
    func testEnumValue(): Unit {
        let color = Red(100)
    
        if (color == Red(100)) { // 报错位置
            Hilog.info(0, "Cangjie Test", "n is Red(100)")
        }
    }

#### 解决措施

仓颉提供多种方式来对enum类型的变量进行判等或判不等操作，例如用[match表达式](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-match)匹配枚举值、用[let pattern的if表达式](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-expression#涉及-let-pattern-的条件示例)匹配枚举值、为enum类型实现[Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)接口，特别地，可以使用[@Derive](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-deriving_package_macros#derive-宏)宏为enum类型自动实现Equatable接口。

以下是上述几种判等方式的示例代码。

#### [h2]方式一：使用match表达式
    
    
    enum RGBColor {
        | Red(UInt8)
        | Green(UInt8)
        | Blue(UInt8)
    }
    
    public func FAQ09Test1(): Unit {
        let color = Red(100)
        match (color) {
            case Red(r) => Hilog.info(0, "Cangjie Test", "color is Red, value is ${r}")
            case Green(g) => Hilog.info(0, "Cangjie Test", "color is Green, value is ${g}")
            case Blue(b) => Hilog.info(0, "Cangjie Test", "color is Blue, value is ${b}")
            case _ => Hilog.info(0, "Cangjie Test", "Invalid RGB color")
        }
    }

调用FAQ09Test1，日志输出结果：
    
    
    Color is Red, value is 100.

#### [h2]方式二：使用let pattern的if表达式
    
    
    enum RGBColor {
        | Red(UInt8)
        | Green(UInt8)
        | Blue(UInt8)
    }
    
    public func FAQ09Test2(): Unit {
        let color = Red(100)
        if (let Red(x) <- color) {
            Hilog.info(0, "Cangjie Test", "Color is Red, value is ${x}.")
        } else {
            Hilog.info(0, "Cangjie Test", "Color is not Red.")
        }
    }

调用FAQ09Test2，日志输出结果：
    
    
    Color is Red, value is 100.

#### [h2]方式三：手动实现Equatable接口
    
    
    enum Status {
        | PENDING
        | PAID
        | SHIPPED
        | COMPLETED
        | CANCELLED
    
        public operator func ==(s: Status): Bool {
            match ((this, s)) {
                case (PENDING, PENDING) => true
                case (PAID, PAID) => true
                case (SHIPPED, SHIPPED) => true
                case (COMPLETED, COMPLETED) => true
                case (CANCELLED, CANCELLED) => true
                case _ => false
            }
        }
    }
    
    public func FAQ09Test3(): Unit {
        let status = Status.COMPLETED
        if (status == COMPLETED) {
            Hilog.info(0, "Cangjie Test", "Status is COMPLETED.")
        } else {
            Hilog.info(0, "Cangjie Test", "Status is not COMPLETED.")
        }
    }

调用FAQ09Test3，日志输出结果：
    
    
    Status is COMPLETED.

#### [h2]方式四：使用@Derive宏自动实现Equatable接口

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/DBWp_5njS4q3gijOfX47eQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120343Z&HW-CC-Expire=86400&HW-CC-Sign=D3751DAE44458E6FFE6B4AAF6FF7392C89ADB702BE882E08479F9D4475E71F4A)

通过@Derive宏为enum类型自动实现Equatable接口时，如果枚举项有参数，需要保证参数类型也实现了Equatable类型，否则会出现编译报错。

示例：
    
    
    @Derive[Equatable]
    enum Direction {
        | NORTH
        | SOUTH
        | EAST
        | WEST
    }
    
    public func FAQ09Test4(): Unit {
        let status = Direction.NORTH
        if (status == NORTH) {
            Hilog.info(0, "Cangjie Test", "Direction is NORTH.")
        } else {
            Hilog.info(0, "Cangjie Test", "Direction is not NORTH.")
        }
    }

调用FAQ09Test4，日志输出结果：
    
    
    Direction is NORTH.
