---
name: cangjie-references/cj-sample_hashset_add_iterator_remove
title: HashSet 的 add/iterator/remove 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_hashset_add_iterator_remove
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection / 示例教程 / HashSet 的 add/iterator/remove 函数
---

# HashSet 的 add/iterator/remove 函数

此示例展示了 HashSet 的基本使用方法。

示例：
    
    
    import std.collection.*
    /* 测试 */
    main() {
        var set: HashSet<String> = HashSet<String>() // set: []
        set.add("apple") // set: ["apple"]
        set.add("banana") // set: ["apple", "banana"], not in order
        set.add("orange") // set: ["apple", "banana", "orange"], not in order
        set.add("peach") // set: ["apple", "banana", "orange", "peach"], not in order
        var itset = set.iterator()
        while (true) {
            var value = itset.next()
            match (value) {
                case Some(v) =>
                    if (!set.contains(v)) {
                        print("Operation failed")
                        return 1
                    } else {
                        println(v)
                    }
                case None => break
            }
        }
        set.remove("apple") // set: ["banana", "orange", "peach"], not in order
        println(set)
        return 0
    }

由于 Set 中的顺序不是固定的，因此运行结果可能如下：
    
    
    apple
    banana
    orange
    peach
    [banana, orange, peach]
