---
name: cangjie-references/cj-sample_hashmap_get_add_contains
title: HashMap 的 get/add/contains 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_hashmap_get_add_contains
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection / 示例教程 / HashMap 的 get/add/contains 函数
---

# HashMap 的 get/add/contains 函数

此示例展示了 HashMap 的基本使用方法。

示例：
    
    
    import std.collection.*
    
    main() {
        var map: HashMap<String, Int64> = HashMap<String, Int64>()
        map.add("a", 99) // map : [("a", 99)]
        map.add("b", 100) // map : [("a", 99), ("b", 100)]
        var a = map.get("a")
        var bool = map.contains("a")
        print("a=${a.getOrThrow()} ")
        print("bool=${bool}")
        return 0
    }

运行结果：
    
    
    a=99 bool=true
