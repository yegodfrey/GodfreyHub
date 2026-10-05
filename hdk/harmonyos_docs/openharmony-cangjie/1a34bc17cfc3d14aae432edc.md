---
name: document/cn/openharmony-cangjie/bigint_basic_prop
title: BigInt 基本属性示例
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/bigint_basic_prop
source: portal
---

BigInt 基本属性示例 以下为初始化 BigInt 对象的，并查询对象的基本属性的示例：
    
    import std.math.numeric.*
    
    main() {
        let int = BigInt("-123456")
        println("BigInt: ${int}")
        println("BigInt sign: ${int.sign}")
        println("BigInt bitLen: ${int.bitLen}")
        return 0
    }

运行结果:
    
    BigInt: -123456
    BigInt sign: -1
    BigInt bitLen: 18
