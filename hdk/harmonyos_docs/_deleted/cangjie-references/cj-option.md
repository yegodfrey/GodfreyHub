---
name: cangjie-references/cj-option
title: 返回 Option 策略的示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-option
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.overflow / 示例教程 / 返回 Option 策略的示例
---

# 返回 Option 策略的示例

下面是返回 Option 策略的示例，示例中尝试运算 Int64.Max 的平方，发生溢出，返回 None。
    
    
    import std.overflow.*
    import std.math.*
    
    main() {
        let a: Int64 = Int64.Max
        println(a.checkedPow(UInt64(2)))
    }

运行结果：
    
    
    None
