---
name: cangjie-references/cj-collection_concurrent_types
title: 类型别名
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_types
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection.concurrent / 类型别名
---

# 类型别名

#### type BlockingQueue<E> (deprecated)
    
    
    public type BlockingQueue<E> = LinkedBlockingQueue<E>

功能：[LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)<E> 的别名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/nQW6zD5qRZqU9Uq6V3yRlg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111701Z&HW-CC-Expire=86400&HW-CC-Sign=00F0782F18E8F1A35B214B1A0C1EACE2752C36044D22C8290EC0C5E400E4F277)

未来版本即将废弃，使用 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)<E> 替代。

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let bq: BlockingQueue<Int64> = BlockingQueue<Int64>(5)
        println("队列容量: ${bq.capacity}")
    }

运行结果：
    
    
    队列容量: 5

#### type NonBlockingQueue<E> (deprecated)
    
    
    public type NonBlockingQueue<E> = ConcurrentLinkedQueue<E>

功能：[ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee)<E> 的别名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/Kk0naOEiR8uAl-4Ir81dcw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111701Z&HW-CC-Expire=86400&HW-CC-Sign=AC9484304F14831906D7FD0669C64E2C576FA71F59060E83A22246B0D8C8DF0E)

未来版本即将废弃，使用 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee)<E> 替代。

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let nbq: NonBlockingQueue<Int64> = NonBlockingQueue<Int64>()
        println("队列size: ${nbq.size}")
    }

运行结果：
    
    
    队列size: 0
