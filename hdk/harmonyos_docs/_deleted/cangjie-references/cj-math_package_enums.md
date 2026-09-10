---
name: cangjie-references/cj-math_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-math_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math / 枚举
---

# 枚举

#### enum RoundingMode
    
    
    public enum RoundingMode <: Equatable<RoundingMode> & ToString {
        | Ceiling
        | Down
        | Floor
        | HalfEven
        | HalfUp
        | Up
    }

功能：舍入规则枚举类，共包含 6 种舍入规则。除包含 IEEE 754 浮点数规定约定的 5 种舍入规则外，提供使用较多的 “四舍五入” 舍入规则。

十进制数 | Up | Down | Ceiling | Floor | HalfUp | HalfEven  
---|---|---|---|---|---|---  
7.5 | 8 | 7 | 8 | 7 | 8 | 8  
4.5 | 5 | 4 | 5 | 4 | 5 | 4  
-1.1 | -2 | -1 | -1 | -2 | -1 | -1  
-4.5 | -5 | -4 | -4 | -5 | -5 | -4  
-7.5 | -8 | -7 | -7 | -8 | -8 | -8  
  
父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<RoundingMode>
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]Ceiling
    
    
    Ceiling

功能：向正无穷方向舍入。

#### [h2]Down
    
    
    Down

功能：向靠近零的方向舍入。

#### [h2]Floor
    
    
    Floor

功能：向负无穷方向舍入。

#### [h2]HalfEven
    
    
    HalfEven

功能：四舍六入五取偶，又称 “银行家舍入”。

#### [h2]HalfUp
    
    
    HalfUp

功能：四舍五入。

#### [h2]Up
    
    
    Up

功能：向远离零的方向舍入。

#### [h2]func toString()
    
    
    public func toString(): String

功能：生成舍入规则名称字符串。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 舍入规则名称字符串。



示例：
    
    
    import std.math.*
    
    main() {
        let mode = RoundingMode.Ceiling
        let str = mode.toString()
        println("RoundingMode string: ${str}")
    }

运行结果：
    
    
    RoundingMode string: Ceiling

#### [h2]operator func ==(RoundingMode)
    
    
    public operator func ==(other: RoundingMode): Bool

功能：判等。

参数：

  * other: RoundingMode \- 被比较的舍入规则。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 若舍入规则相同，返回 true；否则，返回 false。



示例：
    
    
    import std.math.*
    
    main() {
        let mode1 = RoundingMode.Ceiling
        let mode2 = RoundingMode.Ceiling
        let mode3 = RoundingMode.Down
    
        let equal = (mode1 == mode2)
        let notEqual = (mode1 == mode3)
    
        println("mode1 == mode2: ${equal}")
        println("mode1 == mode3: ${notEqual}")
    }

运行结果：
    
    
    mode1 == mode2: true
    mode1 == mode3: false
