---
name: cangjie-references/cj-bigint_basic_prop
title: BigInt 基本属性示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-bigint_basic_prop
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math.numeric / 示例教程 / BigInt 基本属性示例
---

# BigInt 基本属性示例

以下为初始化 BigInt 对象的，并查询对象的基本属性的示例：
    
    
    import std.math.numeric.*
    
    main() {
        let int = BigInt.parse("-123456")
        println("BigInt: ${int}")
        println("BigInt sign: ${int.sign}")
        println("BigInt bitLen: ${int.bitLen}")
        return 0
    }

运行结果：
    
    
    BigInt: -123456
    BigInt sign: -1
    BigInt bitLen: 18
