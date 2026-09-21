---
name: cangjie-references/cj-sample_arraylist_get_set
title: ArrayList 的 get/set 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_arraylist_get_set
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection / 示例教程 / ArrayList 的 get/set 函数
---

# ArrayList 的 get/set 函数

此示例展示了如何使用 get 方法获取 ArrayList 中对应索引的值，以及如何修改值。

示例：
    
    
    import std.collection.*
    
    main() {
        var list = ArrayList<Int64>([97, 100]) // list: [97, 100]
    
        // 修改值
        list[1] = 120 // list: [97, 120]
    
        // 获取值
        var b = list.get(1)
        print("b=${b.getOrThrow()}")
        return 0
    }

运行结果：
    
    
    b=120
