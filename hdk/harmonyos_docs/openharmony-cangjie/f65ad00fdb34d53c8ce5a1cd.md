---
name: document/cn/openharmony-cangjie/sample_hashmap_get_put_contains
title: HashMap 的 get/put/contains 函数
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/sample_hashmap_get_put_contains
source: portal
---

HashMap 的 get/put/contains 函数 此用例展示了 HashMap 的基本使用方法。 代码如下：
    
    import std.collection.*
    main() {
        var map: HashMap<String, Int64> = HashMap<String, Int64>()
        map.put("a", 99) // map : [("a", 99)]
        map.put("b", 100) // map : [("a", 99), ("b", 100)]
        var a = map.get("a")
        var bool = map.contains("a")
        print("a=${a.getOrThrow()} ")
        print("bool=${bool.toString()}")
        return 0
    }

运行结果如下:
    
    a=99 bool=true
