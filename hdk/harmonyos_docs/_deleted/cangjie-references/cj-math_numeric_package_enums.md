---
name: cangjie-references/cj-math_numeric_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math.numeric / 枚举
---

# 枚举

#### enum OverflowStrategy
    
    
    public enum OverflowStrategy <: Equatable<OverflowStrategy> & ToString {
        | Saturating
        | Throwing
        | Wrapping
    }

功能：溢出策略枚举类，共包含 3 种溢出策略。[BigInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-bigint) 类型、[Decimal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_numeric_package_structs#struct-decimal) 类型转换为整数类型时，允许指定不同的溢出处理策略。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<OverflowStrategy>
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]Saturating
    
    
    Saturating

功能：出现溢出，当前值大于目标类型的 MAX 值，返回目标类型 MAX 值；当前值小于目标类型的 MIN 值，返回目标类型 MIN 值。

#### [h2]Throwing
    
    
    Throwing

功能：出现溢出，抛出异常。

#### [h2]Wrapping
    
    
    Wrapping

功能：出现溢出，高位截断。

#### [h2]func toString()
    
    
    public func toString(): String

功能：生成溢出策略名称字符串。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 溢出策略名称字符串。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let e = OverflowStrategy.Saturating
        let str = e.toString()
        println("enum string: ${str}")
    }

运行结果：
    
    
    enum string: Saturating

#### [h2]operator func ==(OverflowStrategy)
    
    
    public operator func ==(other: OverflowStrategy): Bool

功能：判等。

参数：

  * other: OverflowStrategy \- 被比较的溢出策略。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 溢出策略相同，返回 true；否则，返回 false。



示例：
    
    
    import std.math.numeric.*
    
    main() {
        let e1 = OverflowStrategy.Saturating
        let e2 = OverflowStrategy.Saturating
        let e3 = OverflowStrategy.Throwing
    
        let equal = (e1 == e2)
        let notEqual = (e1 == e3)
    
        println("e1 == e2: ${equal}")
        println("e1 == e3: ${notEqual}")
    }

运行结果：
    
    
    e1 == e2: true
    e1 == e3: false
