---
name: cangjie-references/cj-sample_iterator
title: 迭代器操作函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_iterator
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection / 示例教程 / 迭代器操作函数
---

# 迭代器操作函数

此示例展示了迭代器操作函数结合 pipeline 表达式的使用方法。

示例：
    
    
    import std.collection.*
    
    main() {
        let arr = [-1, 2, 3, 4, 5, 6, 7, 8, 9]
        arr |> filter {a: Int64 => a > 0} |> // filter -1
            step<Int64>(2) |> // [2, 4, 6, 8]
            skip<Int64>(2) |> // [6, 8]
            forEach<Int64>(println)
    
        let str = arr |> filter {a: Int64 => a % 2 == 1} |> collectString<Int64>(delimiter: ">")
        println(str)
        println(arr |> contains(6_i64))
        return 0
    }

运行结果：
    
    
    6
    8
    3>5>7>9
    true
