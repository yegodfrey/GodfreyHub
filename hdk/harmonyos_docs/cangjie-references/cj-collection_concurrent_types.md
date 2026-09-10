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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/mNehi_PYTSOJEd9cVubuKA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=9A72853BB755270FB3E9E5B16932B55BEEBFCFACCFA81B2DD3E4025862942E26)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/2dKIXlZnQ3-aZ7xpZ5W8YQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=E661B22BC489991B0820584935B29CB0C32A7EB002C6A4EC433B061B6124BB7D)

未来版本即将废弃，使用 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee)<E> 替代。

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let nbq: NonBlockingQueue<Int64> = NonBlockingQueue<Int64>()
        println("队列size: ${nbq.size}")
    }

运行结果：
    
    
    队列size: 0
