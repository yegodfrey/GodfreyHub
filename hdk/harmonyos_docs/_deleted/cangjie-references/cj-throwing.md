---
name: cangjie-references/cj-throwing
title: 抛出异常策略的示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-throwing
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.overflow / 示例教程 / 抛出异常策略的示例
---

# 抛出异常策略的示例

下面是抛出异常策略的示例，示例中尝试运算 Int64.Max + 1，发生溢出，抛出 OverflowException。
    
    
    import std.overflow.*
    import std.math.*
    
    main() {
        let a: Int64 = Int64.Max
        println(a.throwingAdd(1))
    }

运行结果：
    
    
    An exception has occurred:
    OverflowException: add
