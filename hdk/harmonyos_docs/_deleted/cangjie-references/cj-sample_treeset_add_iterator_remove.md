---
name: cangjie-references/cj-sample_treeset_add_iterator_remove
title: TreeSet 的 add/iterator/remove 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_treeset_add_iterator_remove
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection / 示例教程 / TreeSet 的 add/iterator/remove 函数
---

# TreeSet 的 add/iterator/remove 函数

此示例展示了 TreeSet 的基本使用方法。

示例：
    
    
    import std.collection.*
    /* 测试 */
    main() {
        var set: TreeSet<String> = TreeSet<String>()
        set.add("peach")
        set.add("banana")
        set.add("apple")
        set.add("orange")
    
        var itset = set.iterator()
        for (e in itset) {
            println(e)
        }
    
        set.remove("banana")
        println(set)
        return 0
    }

运行结果：
    
    
    apple
    banana
    orange
    peach
    [apple, orange, peach]
