---
name: cangjie-references/cj-monotime_test
title: 利用 MonoTime 作计时
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-monotime_test
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.time / 示例教程 / 利用 MonoTime 作计时
---

# 利用 MonoTime 作计时

该示例演示了如何通过 MonoTime 类型进行计时。
    
    
    import std.time.*
    
    const count = 10000
    
    main() {
        let start = MonoTime.now()
        for (_ in 0..count) {
            DateTime.now()
        }
        let end = MonoTime.now()
        let result = end - start
        println("total cost: ${result.toNanoseconds()}ns")
    }

运行结果（以实际结果为准）
    
    
    total cost: 951159ns
