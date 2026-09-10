---
name: cangjie-references/cj-bigint_compare_opration
title: BigInt 大小比较示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-bigint_compare_opration
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.math.numeric / 示例教程 / BigInt 大小比较示例
---

# BigInt 大小比较示例

以下为初始化多个 BigInt 对象，相互之间大小比较的示例：
    
    
    import std.math.numeric.*
    
    main() {
        let int1 = BigInt.parse("123456789")
        let int2 = BigInt.parse("987654321")
        println("${int1} > ${int2} = ${int1 > int2}")
        println("${int1} < ${int2} = ${int1 < int2}")
        println("${int1} == ${int2} = ${int1 == int2}")
        println("${int1} != ${int2} = ${int1 != int2}")
        println("${int1} <= ${int2} = ${int1 <= int2}")
        println("${int1} >= ${int2} = ${int1 >= int2}")
        println("${int1}.compare(${int2}) = ${int1.compare(int2)}")
        return 0
    }

运行结果：
    
    
    123456789 > 987654321 = false
    123456789 < 987654321 = true
    123456789 == 987654321 = false
    123456789 != 987654321 = true
    123456789 <= 987654321 = true
    123456789 >= 987654321 = false
    123456789.compare(987654321) = Ordering.LT
