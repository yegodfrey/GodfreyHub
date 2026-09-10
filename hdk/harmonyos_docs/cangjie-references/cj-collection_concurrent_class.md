---
name: cangjie-references/cj-collection_concurrent_class
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection.concurrent / 类
---

# 类

#### class ArrayBlockingQueue<E>
    
    
    public class ArrayBlockingQueue<E> {
        public let capacity: Int64
        public init(capacity: Int64)
        public init(capacity: Int64, elements: Collection<E>)
    }

功能：基于数组实现的 Blocking Queue 数据结构及相关操作函数。

[ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee) 是带阻塞机制且需要用户指定容量上界的并发队列。

#### [h2]let capacity
    
    
    public let capacity: Int64

功能：此 [ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee) 的容量。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let capacity: Int64 = 5
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(capacity)
        println("队列容量: ${blockArr.capacity}")
    
        // 尝试添加元素
        for (i in 1..6) {
            if (i <= blockArr.capacity) {
                blockArr.add(i)
                println("添加元素 ${i}，当前大小: ${blockArr.size}")
            }
        }
        println("最终队列容量: ${blockArr.capacity}")
    }

运行结果：
    
    
    队列容量: 5
    添加元素 1，当前大小: 1
    添加元素 2，当前大小: 2
    添加元素 3，当前大小: 3
    添加元素 4，当前大小: 4
    添加元素 5，当前大小: 5
    最终队列容量: 5

#### [h2]prop size
    
    
    public prop size: Int64

功能：返回此 [ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee) 的元素个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/84Pb7zNXQjOak4W52GQpSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=5719BE7B73CCC023CFD5F60A397E23E91CE1A3C26BE3DB6AF26E921D5D3AFAE5)

此方法不保证并发场景下的原子性，建议在环境中没有其他线程并发地修改 [ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee) 时调用。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(3)
        blockArr.add(1)
        blockArr.add(2)
        println("队列大小: ${blockArr.size}")
    
        blockArr.add(3)
        println("队列大小: ${blockArr.size}")
    }

运行结果：
    
    
    队列大小: 2
    队列大小: 3

#### [h2]init(Int64)
    
    
    public init(capacity: Int64)

功能：构造一个带有传入容量大小的 [ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee)。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化容量大小。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 capacity 小于等于 0 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 正常创建队列
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(3)
        println("成功创建容量为3的队列")
        println("队列容量: ${blockArr.capacity}")
    
        // 尝试创建容量为0的队列（会抛出异常）
        try {
            let invalidQueue: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(0)
        } catch (e: IllegalArgumentException) {
            println("捕获到异常: ${e.message}")
        }
    
        // 尝试创建容量为负数的队列（会抛出异常）
        try {
            let negativeQueue: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(-1)
        } catch (e: IllegalArgumentException) {
            println("捕获到异常: ${e.message}")
        }
    }

运行结果：
    
    
    成功创建容量为3的队列
    队列容量: 3
    捕获到异常: Invalid size of ArrayBlockingQueue: 0.
    捕获到异常: Invalid size of ArrayBlockingQueue: -1.

#### [h2]init(Int64, Collection<E>) (deprecated)
    
    
    public init(capacity: Int64, elements: Collection<E>)

功能：构造一个带有传入容量大小，并带有传入迭代器的 [ArrayBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-arrayblockingqueuee)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/pyvUWe8GS_SXohhNPKeIjA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=30567B4B67DB86EE94FAAD46B65E561969FED1208EFF132C5312BD238DD2563C)

未来版本即将废弃，同等功能替代写法为：创建空队列，再将 elements 中元素依次添加到队列中。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化容量大小。
  * elements: [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<E> \- 初始化迭代器元素。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 capacity 小于等于 0 或小于迭代器元素 elements 的 size 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    import std.collection.*
    
    main() {
        // 创建一个数组列表作为集合元素
        let elements = ArrayList<Int64>()
        elements.add(1)
        elements.add(2)
        elements.add(3)
    
        // 使用deprecated的构造函数创建队列
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(5, elements)
        println("队列大小: ${blockArr.size}")
        println("队列容量: ${blockArr.capacity}")
    
        // 尝试取出元素验证
        let first = blockArr.peek()
        println("队首元素: ${first}")
    }

运行结果：
    
    
    队列大小: 3
    队列容量: 5
    队首元素: Some(1)

#### [h2]func add(E)
    
    
    public func add(element: E): Unit

功能：阻塞的入队操作，将元素添加到队列尾部。如果队列已满，则阻塞等待。

参数：

  * element: E - 要添加的元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        var blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
        blockArr.add(10)
        println(blockArr.peek())
    }

运行结果：
    
    
    Some(10)

#### [h2]func add(E, Duration)
    
    
    public func add(element: E, timeout: Duration): Bool

功能：阻塞的入队操作，将元素添加到队列尾部，如果队列满了，将等待指定的时间。如果 timeout 为负，则会立即执行入队操作并且返回操作结果。

参数：

  * element: E - 要添加的元素。
  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加元素返回 true，超出等待时间还未成功添加元素返回 false。



示例：
    
    
    import std.collection.concurrent.*
    import std.sync.*
    import std.time.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
    
        /* 创建新线程，填满阻塞队列，休眠 1 秒后移除阻塞队列队首元素 */
        spawn {
            =>
                blockArr.add(0)
                blockArr.add(1)
                sleep(1000 * Duration.millisecond)
                println("New thread moves out of blocked queue head element.")
                blockArr.remove()
        }
    
        /* 主线程立即让出执行权，唤醒后阻塞的添加 */
        sleep(-1 * Duration.millisecond)
        println("The main thread is woken up.")
        let isSuccess: Bool = blockArr.add(2, 2000 * Duration.millisecond)
        println(isSuccess)
    }

运行结果：
    
    
    The main thread is woken up.
    New thread moves out of blocked queue head element.
    true

#### [h2]func dequeue() (deprecated)
    
    
    public func dequeue(): E

功能：阻塞的出队操作，获得队首元素并删除。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/2PXI4DK7R--VLTFXId1Mpg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=C072DA5A42496A48CDA880083AA43ABB7A205BD0CFC714C63D13C0E919F52BCB)

未来版本即将废弃，使用 remove() 替代。

返回值：

  * E - 返回队首元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(3)
        blockArr.add(10)
        blockArr.add(20)
    
        // 使用deprecated的dequeue方法
        let element = blockArr.dequeue()
        println("出队元素: ${element}")
        println("队列剩余大小: ${blockArr.size}")
    }

运行结果：
    
    
    出队元素: 10
    队列剩余大小: 1

#### [h2]func dequeue(Duration) (deprecated)
    
    
    public func dequeue(timeout: Duration): Option<E>

功能：阻塞的出队操作，获得队首元素并删除，如果队列为空，将等待指定的时间。如果 timeout 为负，则会立即执行出队操作并且返回操作结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/AvnIDuABS0CgfhJdFDqTlg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=4D7F848B9E8FAB535F398D08A8A869669F63CC792EEF61B11C5EFE00D5F311E0)

未来版本即将废弃，使用 remove(Duration) 替代。

参数：

  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素。如果超出等待时间还未成功获取队首元素，则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    import std.time.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(3)
    
        // 使用deprecated的dequeue方法，设置超时时间
        let result = blockArr.dequeue(1000 * Duration.millisecond)
        println("出队结果: ${result}")
    
        // 添加元素后再尝试出队
        blockArr.add(42)
        let result2 = blockArr.dequeue(1000 * Duration.millisecond)
        println("出队结果: ${result2}")
    }

运行结果：
    
    
    出队结果: None
    出队结果: Some(42)

#### [h2]func enqueue(E) (deprecated)
    
    
    public func enqueue(element: E): Unit

功能：阻塞的入队操作，将元素添加到队列尾部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/ttpG63dUQFC0mfSragC63w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=5929FA39BCDE2DDEACC9C645014576ED568C588B8A2C5BF0BB309F1DCDA82E6A)

未来版本即将废弃，使用 add(E) 替代。

参数：

  * element: E - 要添加的元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
    
        // 使用deprecated的enqueue方法添加元素
        blockArr.enqueue(100)
        blockArr.enqueue(200)
    
        println("队列大小: ${blockArr.size}")
        let first = blockArr.peek()
        println("队首元素: ${first}")
    }

运行结果：
    
    
    队列大小: 2
    队首元素: Some(100)

#### [h2]func enqueue(E, Duration) (deprecated)
    
    
    public func enqueue(element: E, timeout: Duration): Bool

功能：阻塞的入队操作，将元素添加到队列尾部，如果队列满了，将等待指定的时间。如果 timeout 为负，则会立即执行入队操作并且返回操作结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/pcGFnekZSzyeEIV0VWOhgg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=7A2B86188EBAD2112447400C459EF6B7DA90B6479162A8C8F0098FC0ADA5AD41)

未来版本即将废弃，使用 add(E, Duration) 替代。

参数：

  * element: E - 要添加的元素。
  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加元素返回 true，超出等待时间还未成功添加元素返回 false。



示例：
    
    
    import std.collection.concurrent.*
    import std.time.*
    
    main() {
        // 创建一个容量为2的队列
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
    
        // 填满队列
        blockArr.add(1)
        blockArr.add(2)
    
        // 使用deprecated的enqueue方法尝试添加元素，设置超时时间
        let result = blockArr.enqueue(3, 1000 * Duration.millisecond)
        println("入队结果: ${result}")
    
        // 移除一个元素后再尝试添加
        let removed = blockArr.remove()
        println("移除元素: ${removed}")
    
        let result2 = blockArr.enqueue(3, 1000 * Duration.millisecond)
        println("入队结果: ${result2}")
    }

运行结果：
    
    
    入队结果: false
    移除元素: 1
    入队结果: true

#### [h2]func head() (deprecated)
    
    
    public func head(): Option<E>

功能：获取队首元素。

该函数是非阻塞的。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/93HGp9ikQLaha2vjan-aYw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=F1AF1BF6CC0AA94AA76EC4CEB147CCBA0D97B713BC94C8926BC25E5B2B7B4971)

未来版本即将废弃，使用 peek() 替代。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(3)
    
        // 使用deprecated的head方法获取队首元素（队列为空）
        let emptyHead = blockArr.head()
        println("空队列head结果: ${emptyHead}")
    
        // 添加元素后再次获取
        blockArr.add(55)
        blockArr.add(66)
        let head = blockArr.head()
        println("队列head结果: ${head}")
    
        // 验证head方法不会移除元素
        println("队列大小: ${blockArr.size}")
    }

运行结果：
    
    
    空队列head结果: None
    队列head结果: Some(55)
    队列大小: 2

#### [h2]func peek()
    
    
    public func peek(): Option<E>

功能：非阻塞的获取队首元素。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
        blockArr.add(2)
        blockArr.add(3)
        println(blockArr.peek())
    }

运行结果：
    
    
    Some(2)

#### [h2]func remove()
    
    
    public func remove(): E

功能：阻塞的出队操作，获得队首元素并删除。如果队列为空，则阻塞等待。

返回值：

  * E - 返回队首元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
        blockArr.add(2)
        blockArr.add(3)
        println(blockArr.remove())
        println(blockArr.size)
    }

运行结果：
    
    
    2
    1

#### [h2]func remove(Duration)
    
    
    public func remove(timeout: Duration): Option<E>

功能：阻塞的出队操作，获得队首元素并删除，如果队列为空，将等待指定的时间。如果 timeout 为负，则会立即执行出队操作并且返回操作结果。

参数：

  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素。如果超出等待时间还未成功获取队首元素，则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    import std.sync.*
    import std.time.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
    
        /* 创建新线程，休眠 1 秒后向队列添加元素 */
        spawn {
            =>
                sleep(1000 * Duration.millisecond)
                println("This new thread adds new elements to the queue.")
                blockArr.add(3)
        }
    
        /* 主线程立即让出执行权，唤醒后阻塞的取出队首元素 */
        sleep(-1 * Duration.millisecond)
        println("The main thread is woken up.")
        let num: Option<Int64> = blockArr.remove(2000 * Duration.millisecond)
        println(num)
    }

运行结果：
    
    
    The main thread is woken up.
    This new thread adds new elements to the queue.
    Some(3)

#### [h2]func tryAdd(E)
    
    
    public func tryAdd(element: E): Bool

功能：非阻塞的入队操作，将元素添加到队列尾部。

参数：

  * element: E - 要添加的元素。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加返回 true；如果队列满了，添加失败返回 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
        blockArr.tryAdd(2)
        blockArr.tryAdd(3)
        println(blockArr.size)
    }

运行结果：
    
    
    2

#### [h2]func tryDequeue() (deprecated)
    
    
    public func tryDequeue(): Option<E>

功能：非阻塞的出队操作，获得队首元素并删除。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/UclmwxumRRGNZyatAY-KiA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=5AFF23E7B0CE625101ADCC94CFD9452037EC359CB5E5DF720D59410136F24706)

未来版本即将废弃，使用 tryRemove() 替代。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(3)
    
        // 使用deprecated的tryDequeue方法（队列为空）
        let emptyResult = blockArr.tryDequeue()
        println("空队列tryDequeue结果: ${emptyResult}")
    
        // 添加元素后再次尝试
        blockArr.add(77)
        blockArr.add(88)
        let result = blockArr.tryDequeue()
        println("tryDequeue结果: ${result}")
        println("队列剩余大小: ${blockArr.size}")
    }

运行结果：
    
    
    空队列tryDequeue结果: None
    tryDequeue结果: Some(77)
    队列剩余大小: 1

#### [h2]func tryEnqueue(E) (deprecated)
    
    
    public func tryEnqueue(element: E): Bool

功能：非阻塞的入队操作，将元素添加到队列尾部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/MF_hQ_3pSXm_70aZ5E8q4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=5CBF82EDF92156FBC6C3C10856F01459F89E6C48D1A50EED0CCDE4A65023AAF7)

未来版本即将废弃，使用 tryAdd(E) 替代。

参数：

  * element: E - 要添加的元素。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加返回 true；如果队列满了，添加失败返回 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 创建一个容量为2的队列
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
    
        // 使用deprecated的tryEnqueue方法添加元素
        let result1 = blockArr.tryEnqueue(111)
        println("第一次tryEnqueue结果: ${result1}")
    
        blockArr.tryEnqueue(222)
        let result2 = blockArr.tryEnqueue(333) // 队列已满
        println("第二次tryEnqueue结果: ${result2}")
    
        println("队列大小: ${blockArr.size}")
    }

运行结果：
    
    
    第一次tryEnqueue结果: true
    第二次tryEnqueue结果: false
    队列大小: 2

#### [h2]func tryRemove()
    
    
    public func tryRemove(): Option<E>

功能：非阻塞的出队操作，获得队首元素并删除。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: ArrayBlockingQueue<Int64> = ArrayBlockingQueue<Int64>(2)
        blockArr.tryAdd(2)
        println(blockArr.tryRemove())
        println(blockArr.tryRemove())
    }

运行结果：
    
    
    Some(2)
    None

#### class ConcurrentHashMap<K, V> where K <: Hashable & Equatable<K>
    
    
    public class ConcurrentHashMap<K, V> <: ConcurrentMap<K, V> & Collection<(K, V)> where K <: Hashable & Equatable<K> {
        public init(concurrencyLevel!: Int64 = 16)
        public init(capacity: Int64, concurrencyLevel!: Int64 = 16)
        public init(elements: Collection<(K, V)>, concurrencyLevel!: Int64 = 16)
        public init(size: Int64, initElement: (Int64) -> (K, V), concurrencyLevel!: Int64 = 16)
    }

功能：此类用于实现并发场景下线程安全的哈希表 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 数据结构及相关操作函数。

**提示：**

[ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 会在容量不足时进行自动扩容。

构造函数中的参数 concurrencyLevel 表示“并发度”，即：最多允许多少个线程并发修改 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)。查询键值对的操作是非阻塞的，不受所指定的并发度 concurrencyLevel 的限制。参数 concurrencyLevel 默认等于 16。它只影响 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 在并发场景下的性能，不影响功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/nuk7KgA2RJSVf_UhRQlTlg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=F66D6D4724CDAAE5F456083A50D77325EC9B9031526C0AA7FE5BD14E35F3DA4C)

如果用户传入的 concurrencyLevel 小于 16，则并发度会被设置为 16。

concurrencyLevel 并非越大越好，更大的 concurrencyLevel 会导致更大的内存开销（甚至可能导致 out of memory 异常），用户需要在内存开销和运行效率之间进行平衡。

父类型：

  * [ConcurrentMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_interface#interface-concurrentmapk-v)<K, V>
  * [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<(K, V)>



使用示例见 [ConcurrentHashMap 使用示例](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_concurrenthashmap)。

#### [h2]prop size
    
    
    public prop size: Int64

功能：返回键值的个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/zUbgpUTeS8ONp-WgDnmlWg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=D2F8B6D366FED2C5174EBE3713E540165FAA57C6274D0A81685A2F51E8378C96)

此方法不保证并发场景下的原子性，建议在环境中没有其他线程并发地修改 ConcurrentHashMap 时调用。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 检查空ConcurrentHashMap的大小
        println("空ConcurrentHashMap的大小: ${map.size}")
    
        // 添加一些元素
        map[1] = "One"
        map[2] = "Two"
        map[3] = "Three"
    
        // 检查添加元素后的大小
        println("添加元素后ConcurrentHashMap的大小: ${map.size}")
    
        // 删除一个元素
        map.remove(2)
    
        // 检查删除元素后的大小
        println("删除元素后ConcurrentHashMap的大小: ${map.size}")
    }

运行结果：
    
    
    空ConcurrentHashMap的大小: 0
    添加元素后ConcurrentHashMap的大小: 3
    删除元素后ConcurrentHashMap的大小: 2

#### [h2]init(Collection<(K, V)>, Int64)
    
    
    public init(elements: Collection<(K, V)>, concurrencyLevel!: Int64 = 16)

功能：构造一个带有传入迭代器和指定并发度的 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)。该构造函数根据传入迭代器元素 elements 的 size 设置 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 的容量。

参数：

  * elements: [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<(K, V)> \- 初始化迭代器元素。
  * concurrencyLevel!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 用户指定的并发度。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 创建一个包含键值对的数组
        let pairs = [(1, "One"), (2, "Two"), (3, "Three")]
    
        // 使用Collection初始化ConcurrentHashMap
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>(pairs, concurrencyLevel: 8)
    
        println("ConcurrentHashMap大小: ${map.size}")
    
        // 验证元素是否正确添加
        let iter = map.iterator()
        while (true) {
            match (iter.next()) {
                case Some(pair) => println("Key: ${pair[0]}, Value: ${pair[1]}")
                case None => break
            }
        }
    }

运行结果：
    
    
    ConcurrentHashMap大小: 3
    Key: 1, Value: One
    Key: 2, Value: Two
    Key: 3, Value: Three

#### [h2]init(Int64)
    
    
    public init(concurrencyLevel!: Int64 = 16)

功能：构造一个具有默认初始容量（16）和指定并发度（默认等于 16）的 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)。

参数：

  * concurrencyLevel!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 用户指定的并发度。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 使用默认并发度创建ConcurrentHashMap
        let map1: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
        println("默认并发度创建的ConcurrentHashMap容量: ${map1.size}")
    
        // 使用指定并发度创建ConcurrentHashMap
        let map2: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>(32)
        println("指定并发度32创建的ConcurrentHashMap容量: ${map2.size}")
    
        // 添加一些元素
        map2[1] = "One"
        map2[2] = "Two"
        println("添加元素后容量: ${map2.size}")
    }

运行结果：
    
    
    默认并发度创建的ConcurrentHashMap容量: 0
    指定并发度32创建的ConcurrentHashMap容量: 0
    添加元素后容量: 2

#### [h2]init(Int64, (Int64) -> (K, V), Int64)
    
    
    public init(size: Int64, initElement: (Int64) -> (K, V), concurrencyLevel!: Int64 = 16)

功能：构造具有传入大小和初始化函数元素以及指定并发度的 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)。该构造函数根据参数 size 设置 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 的容量。

参数：

  * size: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化函数元素的大小。
  * initElement: ([Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)) -> (K, V) - 初始化函数元素。
  * concurrencyLevel!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 用户指定并发度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 size 小于 0 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 使用初始化函数创建ConcurrentHashMap
        let map = ConcurrentHashMap<Int64, String>(3, {
            i => (i + 1, match (i) {
                    case 0 => "One"
                    case 1 => "Two"
                    case 2 => "Three"
                    case _ => ""
                })
        }, concurrencyLevel: 8)
    
        println("ConcurrentHashMap大小: ${map.size}")
    
        // 验证元素是否正确添加
        let iter = map.iterator()
        while (true) {
            match (iter.next()) {
                case Some(pair) => println("Key: ${pair[0]}, Value: ${pair[1]}")
                case None => break
            }
        }
    }

运行结果：
    
    
    ConcurrentHashMap大小: 3
    Key: 1, Value: One
    Key: 2, Value: Two
    Key: 3, Value: Three

#### [h2]init(Int64, Int64)
    
    
    public init(capacity: Int64, concurrencyLevel!: Int64 = 16)

功能：构造一个带有传入容量大小和指定并发度（默认等于 16）的 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化容量大小。
  * concurrencyLevel!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 用户指定的并发度。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 capacity 小于 0 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 使用指定容量和并发度创建ConcurrentHashMap
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>(10, concurrencyLevel: 8)
        println("初始大小: ${map.size}")
    
        // 添加一些元素
        map[1] = "One"
        map[2] = "Two"
        println("添加元素后大小: ${map.size}")
    }

运行结果：
    
    
    初始大小: 0
    添加元素后大小: 2

#### [h2]func add(K, V)
    
    
    public func add(key: K, value: V): ?V

功能：将指定的值 value 与此 ConcurrentHashMap中指定的键 key 关联。如果 ConcurrentHashMap 中已经包含键 key 的关联，则旧值将被替换；如果 ConcurrentHashMap 中不包含键 key 的关联，则添加键 key 与值 value 的关联。

参数：

  * key: K - 要放置的键。
  * value: V - 要关联的值。



返回值：

  * ?V - 如果赋值之前 key 存在，则返回旧的值 Some(V)；当赋值前 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        let oldValue = map.add(2, 3)
        println(oldValue)
        let newValue = map.add(3, 3)
        println(newValue)
        let iter = ConcurrentHashMapIterator<Int64, Int64>(map)
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    Some(2)
    None
    (0,0)
    (1,1)
    (2,3)
    (3,3)

#### [h2]func addIfAbsent(K, V)
    
    
    public func addIfAbsent(key: K, value: V): ?V

功能：当此 ConcurrentHashMap中不存在键 key 时，在 ConcurrentHashMap 中添加指定的值 value 与指定的键 key 的关联。如果 ConcurrentHashMap 已经包含键 key，则不执行赋值操作。

参数：

  * key: K - 要放置的键。
  * value: V - 要分配的值。



返回值：

  * ?V - 如果赋值之前 key 存在，则返回当前 key 对应的值 Some(V)，且不执行赋值操作；当赋值前 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        let oldValue = map.addIfAbsent(2, 3)
        println(oldValue)
        let newValue = map.addIfAbsent(3, 3)
        println(newValue)
        let iter = ConcurrentHashMapIterator<Int64, Int64>(map)
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    Some(2)
    None
    (0,0)
    (1,1)
    (2,2)
    (3,3)

#### [h2]func contains(K)
    
    
    public func contains(key: K): Bool

功能：判断此映射中是否包含指定键的映射。

参数：

  * key: K - 传递要判断的 key。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否包含指定键的映射，包含为 true，不包含为 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        map.add(3, 3)
        println(map.contains(3))
        println(map.contains(6))
    }

运行结果：
    
    
    true
    false

#### [h2]func entryView(K, (MapEntryView<K, V>) -> Unit)
    
    
    public func entryView(key: K, fn: (MapEntryView<K, V>) -> Unit): ?V

功能：根据指定键 key 获取当前映射中相应的键值对视图 entryView，并调用函数 fn 对该键值对进行增、删、改操作，并返回最终映射中键 key 对应的值。

如果当前映射中不包含键 key，则将获取一个空视图 entryView，如果将其 value 置为非 None 值，则将在当前映射中增加 key-value 键值对。

如果当前映射中包含键 key，则将获取 key-value 的视图，如果将 value 置为 None，则相当于从当前映射中删除该键值对；如果将 value 置为新的非 None 值，则相当于修改当前映射中键 key 对应的值。

注意参数 fn 中不能并发调用函数 entryView、remove、replace，如：
    
    
    map.entryView(1) { _ =>
        let f = spawn {
            map.entryView(17) { _ => () }
        }
        f.get()
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/WtdIV_W0TJeh1dNxbZvB0g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=97E151756253DA5B33329FA1B5990378A6BABEBDBBA67C3B8CA6FFD52CAF105C)

  * 该操作具有原子性。

  * 回调 fn 调用过程中对 key-value 键值对的修改不会即时更新到当前映射中，等到 entryView 函数调用结束再将修改整体更新到当前映射中。




参数：

  * key: K - 待获取其相应视图的键。
  * fn: ([MapEntryView](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapentryviewk-v)<K, V>) -> [Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit) \- 对指定视图进行的自定义操作，可用于对映射中键值对进行增、删、改操作。



返回值：

  * ?V - 函数 fn 调用结束后当前映射中键 key 对应的值，如果 key 不存在，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(2, {value => (value, value)})
        map.add(2, 2)
    
        /* 当前映射不包含 key 为 3 的键值对，对 entryView.value 设置新值 7，等价于添加新的键值对 (3,7) */
        let num1 = map.entryView(3, {view => view.value = 7})
        println(num1)
    
        /* 当前映射包含 key 为 2 的键值对，对 entryView.value 设置新值 6，等价更新 key 为 1 的值为 6 */
        let num2 = map.entryView(1, {view => view.value = 6})
        println(num2)
    
        /* 当前映射包含 key 为 0 的键值对，对 entryView.value 设置新值 None，等价删除 key 为 0 的键值对 */
        let num3 = map.entryView(0, {view => view.value = None})
        println(num3)
    
        let iter = ConcurrentHashMapIterator<Int64, Int64>(map)
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    Some(7)
    Some(6)
    None
    (1,6)
    (2,2)
    (3,7)

#### [h2]func get(K)
    
    
    public func get(key: K): ?V

功能：返回此映射中键 key 所关联的值。

参数：

  * key: K - 传递 key，获取 value。



返回值：

  * ?V - 此映射中键 key 所关联的值。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
        map[1] = "One"
        map[2] = "Two"
    
        // 获取存在的键值
        match (map.get(1)) {
            case Some(value) => println("Key 1对应的值: ${value}")
            case None => println("Key 1不存在")
        }
    
        // 获取不存在的键值
        match (map.get(3)) {
            case Some(value) => println("Key 3对应的值: ${value}")
            case None => println("Key 3不存在")
        }
    }

运行结果：
    
    
    Key 1对应的值: One
    Key 3不存在

#### [h2]func isEmpty()
    
    
    public func isEmpty(): Bool

功能：判断 ConcurrentHashMap 是否为空。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/ZS_G2AoiQT2tM18sz_7hUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=DA5EE76151157774A88F472C21EA3D9602CA79676A2A416E57243E864278EC48)

此方法不保证并发场景下的原子性，建议在环境中没有其他线程并发地修改 ConcurrentHashMap 时调用。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，则返回 true，否则，返回 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 检查空map
        println("空map是否为空: ${map.isEmpty()}")
    
        // 添加元素后检查
        map[1] = "One"
        println("添加元素后是否为空: ${map.isEmpty()}")
    
        // 删除元素后检查
        map.remove(1)
        println("删除元素后是否为空: ${map.isEmpty()}")
    }

运行结果：
    
    
    空map是否为空: true
    添加元素后是否为空: false
    删除元素后是否为空: true

#### [h2]func iterator()
    
    
    public func iterator(): ConcurrentHashMapIterator<K, V>

功能：获取 ConcurrentHashMap 的迭代器。

返回值：

  * [ConcurrentHashMapIterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapiteratork-v-where-k--hashable--equatablek)<K, V> \- ConcurrentHashMap 的迭代器



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        let iter = map.iterator()
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    (0,0)
    (1,1)
    (2,2)

#### [h2]func put(K, V) (deprecated)
    
    
    public func put(key: K, value: V): ?V

功能：将指定的值 value 与此 ConcurrentHashMap中指定的键 key 关联。如果 ConcurrentHashMap 中已经包含键 key 的关联，则旧值将被替换；如果 ConcurrentHashMap 中不包含键 key 的关联，则添加键 key 与值 value 的关联。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/HcSEKWk7Q8yqpBVna4uNlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=9F823445D292F3AECCD0E00759DCE6F3FEB1B6DBB17A75C328E859FE8CF6C069)

未来版本即将废弃，使用 add(K, V) 替代。

参数：

  * key: K - 要放置的键。
  * value: V - 要关联的值。



返回值：

  * ?V - 如果赋值之前 key 存在，则返回旧的值 Some(V)；当赋值前 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 使用deprecated的put方法添加新的键值对
        let result1 = map.put(1, "One")
        println("添加新键值对结果: ${result1}")
    
        // 使用deprecated的put方法覆盖已存在的键值对
        let result2 = map.put(1, "First")
        println("覆盖键值对结果: ${result2}")
    
        // 验证值是否正确
        let value = map.get(1)
        println("键1对应的值: ${value}")
    }

运行结果：
    
    
    添加新键值对结果: None
    覆盖键值对结果: Some(One)
    键1对应的值: Some(First)

#### [h2]func putIfAbsent(K, V) (deprecated)
    
    
    public func putIfAbsent(key: K, value: V): ?V

功能：当此 ConcurrentHashMap中不存在键 key 时，在 ConcurrentHashMap 中添加指定的值 value 与指定的键 key 的关联。如果 ConcurrentHashMap 已经包含键 key，则不执行赋值操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/VvVSZTZvThGJrBNWJr24Wg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=57154A6A2B0404EC85F2C454A24FC2CCCE3800EAA551B8CF3FB9B512D6A00B91)

未来版本即将废弃，使用 addIfAbsent(K, V) 替代。

参数：

  * key: K - 要放置的键。
  * value: V - 要分配的值。



返回值：

  * ?V - 如果赋值之前 key 存在，则返回当前 key 对应的值 Some(V)，且不执行赋值操作；当赋值前 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 添加一个初始键值对
        map[1] = "One"
    
        // 使用deprecated的putIfAbsent方法尝试添加已存在的键
        let result1 = map.putIfAbsent(1, "First")
        println("对已存在键使用putIfAbsent结果: ${result1}")
    
        // 使用deprecated的putIfAbsent方法添加新键值对
        let result2 = map.putIfAbsent(2, "Two")
        println("对新键使用putIfAbsent结果: ${result2}")
    
        // 验证值是否正确
        let value1 = map.get(1)
        let value2 = map.get(2)
        println("键1对应的值: ${value1}")
        println("键2对应的值: ${value2}")
    }

运行结果：
    
    
    对已存在键使用putIfAbsent结果: Some(One)
    对新键使用putIfAbsent结果: None
    键1对应的值: Some(One)
    键2对应的值: Some(Two)

#### [h2]func remove(K)
    
    
    public func remove(key: K): ?V

功能：从此映射中删除指定键 key 的映射（如果存在）。

参数：

  * key: K - 传入要删除的 key。



返回值：

  * ?V - 如果移除之前 key 存在，则返回 key 对应的值 Some(V)；当移除时 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        let num = map.remove(0)
        println(num)
        let iter = map.iterator()
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    Some(0)
    (1,1)
    (2,2)

#### [h2]func remove(K, (V) -> Bool) (deprecated)
    
    
    public func remove(key: K, predicate: (V) -> Bool): ?V

功能：如果此映射中存在键 key 且 key 所映射的值 v 满足条件 predicate，则从此映射中删除 key 的映射。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/OvYu6LvPQEy_DEXFJumFWw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=619E69BDA1AE958AFAD8E2220DD62991D240C0DE7D8F07186E05DE167FAEF9EE)

未来版本即将废弃，使用 entryView(K, (MapEntryView<K, V>) -> Unit) 替代。

参数：

  * key: K - 传入要删除的 key。
  * predicate: (V) -> [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 传递一个 lambda 表达式进行判断。



返回值：

  * ?V - 如果映射中存在 key，则返回 key 对应的旧值；当映射中不存在 key 时，或者 key 关联的值不满足 predicate 时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 添加一些初始键值对
        map[1] = "One"
        map[2] = "Two"
        map[3] = "Three"
    
        // 使用deprecated的remove方法和predicate删除满足条件的键值对
        let result1 = map.remove(2, {value => value == "Two"})
        println("删除满足条件的键2结果: ${result1}")
    
        // 尝试删除不满足条件的键值对
        let result2 = map.remove(3, {value => value == "Two"})
        println("删除不满足条件的键3结果: ${result2}")
    
        // 尝试删除不存在的键
        let result3 = map.remove(4, {value => value == "Four"})
        println("删除不存在的键4结果: ${result3}")
    
        // 验证剩余的键值对
        let value1 = map.get(1)
        let value2 = map.get(2)
        let value3 = map.get(3)
        println("键1对应的值: ${value1}")
        println("键2对应的值: ${value2}")
        println("键3对应的值: ${value3}")
    }

运行结果：
    
    
    删除满足条件的键2结果: Some(Two)
    删除不满足条件的键3结果: None
    删除不存在的键4结果: None
    键1对应的值: Some(One)
    键2对应的值: None
    键3对应的值: Some(Three)

#### [h2]func replace(K, (V) -> Bool, (V) -> V) (deprecated)
    
    
    public func replace(key: K, predicate: (V) -> Bool, eval: (V) -> V): ?V

功能：如果 ConcurrentHashMap 中存在键 key（假设其关联的值为 v），且 v 满足条件 predicate，则将 ConcurrentHashMap 中键 key 关联的值替换为 eval(v) 的计算结果；如果 ConcurrentHashMap 中不存在键 key，或者存在键 key 但关联的值不满足 predicate，则不对 ConcurrentHashMap 做任何修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/KA-UAqMaTFysHFpdI_pgdg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=775966B68915CBD40ED57AE0C54B168F998FDCC40AEA024651842FA35B5C0212)

未来版本即将废弃，使用 entryView(K, (MapEntryView<K, V>) -> Unit) 替代。

参数：

  * key: K - 传入要替换所关联值的键。
  * predicate: (V) ->[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 传递一个 lambda 表达式进行判断。
  * eval: (V) ->V - 传入计算用于替换的新值的函数。



返回值：

  * ?V - 如果 key 存在，则返回 key 对应的旧值 Some(V)；当 key 不存在时，或者 key 关联的值不满足 predicate 时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 添加一些初始键值对
        map[1] = "One"
        map[2] = "Two"
        map[3] = "Three"
    
        // 使用deprecated的replace方法和predicate替换满足条件的键值对
        let result1 = map.replace(2, {value => value == "Two"}, {_ => "Second"})
        println("替换满足条件的键2结果: ${result1}")
    
        // 尝试替换不满足条件的键值对
        let result2 = map.replace(3, {value => value == "Two"}, {_ => "Third"})
        println("替换不满足条件的键3结果: ${result2}")
    
        // 尝试替换不存在的键
        let result3 = map.replace(4, {value => value == "Four"}, {_ => "Fourth"})
        println("替换不存在的键4结果: ${result3}")
    
        // 验证最终的键值对
        let value1 = map.get(1)
        let value2 = map.get(2)
        let value3 = map.get(3)
        println("键1对应的值: ${value1}")
        println("键2对应的值: ${value2}")
        println("键3对应的值: ${value3}")
    }

运行结果：
    
    
    替换满足条件的键2结果: Some(Two)
    替换不满足条件的键3结果: None
    替换不存在的键4结果: None
    键1对应的值: Some(One)
    键2对应的值: Some(Second)
    键3对应的值: Some(Three)

#### [h2]func replace(K, (V) -> V) (deprecated)
    
    
    public func replace(key: K, eval: (V) -> V): ?V

功能：如果 ConcurrentHashMap 中存在键 key（假设其关联的值为 v），则将 ConcurrentHashMap 中键 key 关联的值替换为 eval(v) 的计算结果；如果 ConcurrentHashMap中不存在键 key，则不对 ConcurrentHashMap 做任何修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/GA3Gw4u7RmSG3NhGpxul5g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=E394CB039F63F862555B81D33371FD1976CB57A0468E0E0CBABD3E94D1BFB09A)

未来版本即将废弃，使用 entryView(K, (MapEntryView<K, V>) -> Unit) 替代。

参数：

  * key: K - 传入要替换所关联值的键。
  * eval: (V) ->V - 传入计算用于替换的新值的函数。



返回值：

  * ?V - 如果 key 存在，则返回 key 对应的旧值 Some(V)；当 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 添加一些初始键值对
        map[1] = "One"
        map[2] = "Two"
    
        // 使用deprecated的replace方法替换存在的键值对
        let result1 = map.replace(2, {_ => "Second"})
        println("替换存在的键2结果: ${result1}")
    
        // 尝试替换不存在的键
        let result2 = map.replace(3, {_ => "Third"})
        println("替换不存在的键3结果: ${result2}")
    
        // 验证最终的键值对
        let value1 = map.get(1)
        let value2 = map.get(2)
        let value3 = map.get(3)
        println("键1对应的值: ${value1}")
        println("键2对应的值: ${value2}")
        println("键3对应的值: ${value3}")
    }

运行结果：
    
    
    替换存在的键2结果: Some(Two)
    替换不存在的键3结果: None
    键1对应的值: Some(One)
    键2对应的值: Some(Second)
    键3对应的值: None

#### [h2]func replace(K, V)
    
    
    public func replace(key: K, value: V): ?V

功能：如果 ConcurrentHashMap 中存在 key，则将 ConcurrentHashMap 中键 key 关联的值替换为 value；如果 ConcurrentHashMap 中不存在 key，则不对 ConcurrentHashMap 做任何修改。

参数：

  * key: K - 传入要替换所关联值的键。
  * value: V - 传入要替换成的新值。



返回值：

  * ?V - 如果 key 存在，则返回 key 对应的旧值 Some(V)；当 key 不存在时，返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        let num = map.replace(0, 2)
        println(num)
        let iter = map.iterator()
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    Some(0)
    (0,2)
    (1,1)
    (2,2)

#### [h2]operator func [](K)
    
    
    public operator func [](key: K): V

功能：运算符重载集合，如果键存在，返回键对应的值；如果不存在，抛出异常。

参数：

  * key: K - 传递值进行判断。



返回值：

  * V - 与键对应的值。



异常：

  * [NoneValueException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-nonevalueexception) \- 关联中不存在键 key。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
        map[1] = "One"
        map[2] = "Two"
    
        // 获取存在的键值
        println("Key 1对应的值: ${map[1]}")
    
        // 尝试获取不存在的键值（会抛出异常）
        try {
            let value = map[3]
            println("Key 3对应的值: ${value}")
        } catch (e: NoneValueException) {
            println("捕获到异常: 键3不存在")
        }
    }

运行结果：
    
    
    Key 1对应的值: One
    捕获到异常: 键3不存在

#### [h2]operator func [](K, V)
    
    
    public operator func [](key: K, value!: V): Unit

功能：运算符重载集合，如果键 key 存在，新 value 覆盖旧 value；如果键不存在，添加此键值对。

参数：

  * key: K - 传递值进行判断。
  * value!: V - 传递要设置的值。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
    
        // 添加新的键值对
        map[1] = "One"
        println("添加键值对后大小: ${map.size}")
    
        // 覆盖已存在的键值对
        map[1] = "First"
        println("覆盖键值对后大小: ${map.size}")
    
        // 验证值是否正确更新
        let iter = map.iterator()
        while (true) {
            match (iter.next()) {
                case Some(pair) => println("Key: ${pair[0]}, Value: ${pair[1]}")
                case None => break
            }
        }
    }

运行结果：
    
    
    添加键值对后大小: 1
    覆盖键值对后大小: 1
    Key: 1, Value: First

#### class ConcurrentHashMapIterator<K, V> where K <: Hashable & Equatable<K>
    
    
    public class ConcurrentHashMapIterator<K, V> <: Iterator<(K, V)> where K <: Hashable & Equatable<K> {
        public init(cmap: ConcurrentHashMap<K, V>)
    }

功能：此类主要实现 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 的迭代器功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/U17d1nMCReq7ERWLB25QDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=0A858B1F292389D097971E22BD347C9C05D30AE823AFBEFA500C4B8A772BD0A1)

这里定义的 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 迭代器：

  1. 不保证迭代结果为并发 [HashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapk-v-where-k--hashable--equatablek) 某一时刻的 “快照”，建议在环境中没有其他线程并发地修改 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 时调用；
  2. 迭代器在迭代过程中，不保证可以感知环境线程对目标 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek) 的修改。



父类型：

  * [Iterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort)<(K, V)>



#### [h2]init(ConcurrentHashMap<K, V>)
    
    
    public init(cmap: ConcurrentHashMap<K, V>)

功能：创建 [ConcurrentHashMapIterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapiteratork-v-where-k--hashable--equatablek)<K, V> 实例。

参数：

  * cmap: [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)<K, V> \- 待获取其迭代器的 [ConcurrentHashMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrenthashmapk-v-where-k--hashable--equatablek)<K, V> 实例。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 创建一个ConcurrentHashMap并添加一些元素
        let map: ConcurrentHashMap<Int64, String> = ConcurrentHashMap<Int64, String>()
        map[1] = "One"
        map[2] = "Two"
        map[3] = "Three"
    
        // 使用构造函数创建ConcurrentHashMapIterator
        let iterator = ConcurrentHashMapIterator<Int64, String>(map)
    
        // 使用迭代器遍历元素
        println("遍历ConcurrentHashMap:")
        while (true) {
            match (iterator.next()) {
                case Some(pair) => println("Key: ${pair[0]}, Value: ${pair[1]}")
                case None => break
            }
        }
    }

运行结果：
    
    
    遍历ConcurrentHashMap:
    Key: 1, Value: One
    Key: 2, Value: Two
    Key: 3, Value: Three

#### [h2]func next()
    
    
    public func next(): Option<(K, V)>

功能：返回迭代中的下一个元素。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<(K, V)> \- [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<(K,V)> 类型。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let map: ConcurrentHashMap<Int64, Int64> = ConcurrentHashMap<Int64, Int64>(3, {value => (value, value)})
        let iter = ConcurrentHashMapIterator<Int64, Int64>(map)
        while (true) {
            match (iter.next()) {
                case Some(i) => println("(${i[0]},${i[1]})")
                case None => break
            }
        }
    }

运行结果：
    
    
    (0,0)
    (1,1)
    (2,2)

#### class ConcurrentLinkedQueue<E>
    
    
    public class ConcurrentLinkedQueue<E> <: Collection<E> {
        public init()
        public init(elements: Collection<E>)
    }

功能：提供一个线程安全的队列，可以在多线程环境下安全地进行元素的添加和删除操作。

非阻塞队列的目的是为了解决多线程环境下的同步问题，使得多个线程可以并发地进行队列的操作，而不会出现数据冲突或者死锁的问题。

非阻塞队列在多线程编程中非常常见，它可以用于任何需要线程安全队列的场景，例如生产者消费者模型、任务调度、线程池等。

父类型：

  * [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<E>



使用示例见 [ConcurrentLinkedQueue 使用示例](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sample_concurrent_linked_queue)。

#### [h2]prop size
    
    
    public prop size: Int64

功能：获取此 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee) 的元素个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/R6jOZ4hNTbCHnY-x9bVjdw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=18B1D4509892C5FE691B6D3E84CB3068EB47406270BF2C1A2EB0583344785905)

此方法不保证并发场景下的原子性，建议在环境中没有其他线程并发地修改 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee) 时调用。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<Int64> = ConcurrentLinkedQueue<Int64>()
    
        // 检查空队列的大小
        println("空队列的大小: ${queue.size}")
    
        // 添加一些元素
        queue.add(1)
        queue.add(2)
        queue.add(3)
    
        // 检查添加元素后的大小
        println("添加元素后队列的大小: ${queue.size}")
    
        // 删除一个元素
        queue.remove()
    
        // 检查删除元素后的大小
        println("删除元素后队列的大小: ${queue.size}")
    }

运行结果：
    
    
    空队列的大小: 0
    添加元素后队列的大小: 3
    删除元素后队列的大小: 2

#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee) 实例。

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 使用默认构造函数创建ConcurrentLinkedQueue
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        println("新创建的队列大小: ${queue.size}")
    
        // 添加一些元素
        queue.add("First")
        queue.add("Second")
    
        println("添加元素后队列大小: ${queue.size}")
    
        // 验证队列是否为空
        println("队列是否为空: ${queue.isEmpty()}")
    }

运行结果：
    
    
    新创建的队列大小: 0
    添加元素后队列大小: 2
    队列是否为空: false

#### [h2]init(Collection<E>) (deprecated)
    
    
    public init(elements: Collection<E>)

功能：根据 [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<E> 实例构造一个 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/-5IAwx3_SaKg9RZ3CEECsg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=9FE7C2D397253588F60EC4788CFEB144818F91E68710DC9B77CB828CB103AC73)

未来版本即将废弃，如需实现等效功能，可先创建空队列，再依次将 [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont) 中元素添加到队列中。

参数：

  * elements: [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<E> \- 将该容器中元素放入新构造的 [ConcurrentLinkedQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-concurrentlinkedqueuee)



示例：
    
    
    import std.collection.concurrent.*
    import std.collection.*
    
    main() {
        // 创建一个ArrayList作为Collection元素
        let elements = ArrayList<String>()
        elements.add("First")
        elements.add("Second")
        elements.add("Third")
    
        // 使用deprecated的构造函数创建队列
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>(elements)
    
        println("队列大小: ${queue.size}")
    
        var index = 0
        for (element in queue) {
            println("元素 ${index}: ${element}")
            index = index + 1
        }
    }

运行结果：
    
    
    队列大小: 3
    元素 0: First
    元素 1: Second
    元素 2: Third

#### [h2]func add(E)
    
    
    public func add(element: E): Bool

功能：非阻塞的入队操作，将元素添加到队列尾部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/jnQSUEbdSteppgRqkPwdmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=8F51C93AD728F40F5ACD09E46792D7BE82F19266E234EE36D9A484F6D0C841AD)

该函数不会返回 false。

参数：

  * element: E - 要添加的元素。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加元素则返回 true。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 添加元素到队列
        let result1 = queue.add("First")
        let result2 = queue.add("Second")
        let result3 = queue.add("Third")
    
        println("添加第一个元素结果: ${result1}")
        println("添加第二个元素结果: ${result2}")
        println("添加第三个元素结果: ${result3}")
        println("队列大小: ${queue.size}")
    
        // 查看队列中的元素
        let iter = queue.iterator()
        var index = 0
        while (true) {
            match (iter.next()) {
                case Some(element) => println("元素 ${index}: ${element}")
                case None => break
            }
            index = index + 1
        }
    }

运行结果：
    
    
    添加第一个元素结果: true
    添加第二个元素结果: true
    添加第三个元素结果: true
    队列大小: 3
    元素 0: First
    元素 1: Second
    元素 2: Third

#### [h2]func dequeue() (deprecated)
    
    
    public func dequeue(): Option<E>

功能：获取并删除队首元素。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/6SHlwKHMS9W8slRtuC-5Qw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=F78177CFF1AD8331519A966E44BE4DEC2A0E637C42B07D117BB6980910BB9060)

未来版本即将废弃，使用 remove() 替代。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 成功删除则返回队首元素，队列为空则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 测试空队列的dequeue方法
        let emptyResult = queue.dequeue()
        println("空队列dequeue结果: ${emptyResult}")
    
        // 添加元素后测试dequeue方法
        queue.add("First")
        queue.add("Second")
        let result1 = queue.dequeue()
        println("非空队列dequeue结果: ${result1}")
    
        // 再次尝试dequeue
        let result2 = queue.dequeue()
        println("再次dequeue结果: ${result2}")
    
        // 检查队列大小
        println("队列剩余大小: ${queue.size}")
    }

运行结果：
    
    
    空队列dequeue结果: None
    非空队列dequeue结果: Some(First)
    再次dequeue结果: Some(Second)
    队列剩余大小: 0

#### [h2]func enqueue(E) (deprecated)
    
    
    public func enqueue(element: E): Bool

功能：非阻塞的入队操作，将元素添加到队列尾部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/4wHK1D-RRNCqlozGqYjNng/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=FF55FA755905F3F106428A50FB76D72DBB705121B0F54D215898B38593B1A45A)

  * 该函数不会返回 false。
  * 未来版本即将废弃，使用 add(E) 替代。



参数：

  * element: E - 要添加的元素。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加元素则返回 true。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 测试空队列的enqueue方法
        let result1 = queue.enqueue("First")
        println("enqueue第一个元素结果: ${result1}")
    
        let result2 = queue.enqueue("Second")
        println("enqueue第二个元素结果: ${result2}")
    
        // 检查队列大小
        println("队列大小: ${queue.size}")
    
        // 查看队列中的元素
        var index = 0
        for (element in queue) {
            println("元素 ${index}: ${element}")
            index = index + 1
        }
    }

运行结果：
    
    
    enqueue第一个元素结果: true
    enqueue第二个元素结果: true
    队列大小: 2
    元素 0: First
    元素 1: Second

#### [h2]func head() (deprecated)
    
    
    public func head(): Option<E>

功能：获取队首元素，不会删除该元素。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/lb9HpgJWRJ29uSwb88T_gA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=9CF279D0BA3D228E99171F165C2A1475388806F9D4BD7537415E41C7A09777A3)

未来版本即将废弃，使用 peek() 替代。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 成功获取则返回队首元素，队列为空则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 测试空队列的head方法
        let emptyResult = queue.head()
        println("空队列head结果: ${emptyResult}")
    
        // 添加元素后测试head方法
        queue.add("First")
        queue.add("Second")
        let result1 = queue.head()
        println("非空队列head结果: ${result1}")
    
        // 再次尝试head，应该还是同一个元素
        let result2 = queue.head()
        println("再次head结果: ${result2}")
    
        // 检查队列大小（应该不变，因为head不删除元素）
        println("队列大小: ${queue.size}")
    }

运行结果：
    
    
    空队列head结果: None
    非空队列head结果: Some(First)
    再次head结果: Some(First)
    队列大小: 2

#### [h2]func isEmpty()
    
    
    public func isEmpty(): Bool

功能：判断当前队列是否为空。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当前队列为空返回 true，否则返回 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<Int64> = ConcurrentLinkedQueue<Int64>()
    
        // 检查空队列
        println("空队列是否为空: ${queue.isEmpty()}")
    
        // 添加元素后检查
        queue.add(1)
        println("添加元素后是否为空: ${queue.isEmpty()}")
    
        // 删除所有元素后检查
        queue.remove()
        println("删除元素后是否为空: ${queue.isEmpty()}")
    }

运行结果：
    
    
    空队列是否为空: true
    添加元素后是否为空: false
    删除元素后是否为空: true

#### [h2]func iterator()
    
    
    public func iterator(): Iterator<E>

功能：获取当前队列的迭代器，用于遍历当前队列。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/3YUvCToaRhGqg0MfUkVOXQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=D69E31AB940ED758C7DA7A4D7C917079D3B52DB60CEE955FDBD246386096F6FA)

遍历操作不会删除队列中的元素。

遍历操作不保证原子性，如果有其他线程并发修改当前队列，不保证遍历得到的元素是当前队列某一时刻的静态切片。

返回值：

  * [Iterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-iteratort)<E> \- 当前队列的迭代器。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 添加一些元素
        queue.add("First")
        queue.add("Second")
        queue.add("Third")
    
        println("队列大小: ${queue.size}")
    
        // 使用迭代器遍历队列
        let iter = queue.iterator()
        var index = 0
        while (true) {
            match (iter.next()) {
                case Some(element) => println("元素 ${index}: ${element}")
                case None => break
            }
            index = index + 1
        }
    }

运行结果：
    
    
    队列大小: 3
    元素 0: First
    元素 1: Second
    元素 2: Third

#### [h2]func peek()
    
    
    public func peek(): Option<E>

功能：获取队首元素，不会删除该元素。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 成功获取则返回队首元素，队列为空则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 尝试peek空队列
        match (queue.peek()) {
            case Some(element) => println("队首元素: ${element}")
            case None => println("队列为空，无法获取队首元素")
        }
    
        // 添加元素
        queue.add("First")
        queue.add("Second")
    
        // peek队首元素（不删除）
        match (queue.peek()) {
            case Some(element) => println("队首元素: ${element}")
            case None => println("队列为空，无法获取队首元素")
        }
    
        println("添加元素后队列大小: ${queue.size}")
    
        // 再次peek，应该还是同一个元素
        match (queue.peek()) {
            case Some(element) => println("再次peek队首元素: ${element}")
            case None => println("队列为空，无法获取队首元素")
        }
    }

运行结果：
    
    
    队列为空，无法获取队首元素
    队首元素: First
    添加元素后队列大小: 2
    再次peek队首元素: First

#### [h2]func remove()
    
    
    public func remove(): Option<E>

功能：获取并删除队首元素。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 成功删除则返回队首元素，队列为空则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<String> = ConcurrentLinkedQueue<String>()
    
        // 尝试从空队列删除元素
        match (queue.remove()) {
            case Some(element) => println("删除的元素: ${element}")
            case None => println("队列为空，无法删除元素")
        }
    
        // 添加元素
        queue.add("First")
        queue.add("Second")
        queue.add("Third")
    
        println("添加元素后队列大小: ${queue.size}")
    
        // 删除队首元素
        match (queue.remove()) {
            case Some(element) => println("删除的元素: ${element}")
            case None => println("队列为空，无法删除元素")
        }
    
        println("删除元素后队列大小: ${queue.size}")
    
        // 再次删除队首元素
        match (queue.remove()) {
            case Some(element) => println("再次删除的元素: ${element}")
            case None => println("队列为空，无法删除元素")
        }
    
        println("再次删除元素后队列大小: ${queue.size}")
    }

运行结果：
    
    
    队列为空，无法删除元素
    添加元素后队列大小: 3
    删除的元素: First
    删除元素后队列大小: 2
    再次删除的元素: Second
    再次删除元素后队列大小: 1

#### [h2]func toArray()
    
    
    public func toArray(): Array<E>

功能：将当前队列中所有元素按顺序存入数组，先入队的元素在数组下标较小的位置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/N9oLLCvoRHaMqPBqL2v6Fw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=591C41D54DB87A281E654D9E0A47625592ED57FFE806810409A38AE9EDF19235)

该操作不会删除队列中的元素。

该操作不保证原子性，如果有其他线程并发修改当前队列，不保证该操作得到的数组是当前队列某一时刻的静态切片。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<E> \- 得到的数组，里面的元素为当前队列中的元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: ConcurrentLinkedQueue<Int64> = ConcurrentLinkedQueue<Int64>()
    
        // 将空队列转换为数组
        let emptyArray = queue.toArray()
        println("空队列转换为数组的长度: ${emptyArray.size}")
    
        // 添加元素
        queue.add(1)
        queue.add(2)
        queue.add(3)
    
        // 将队列转换为数组
        let array = queue.toArray()
        println("队列转换为数组的长度: ${array.size}")
    
        // 打印数组中的元素
        for (i in 0..array.size) {
            println("数组元素 ${i}: ${array[i]}")
        }
    }

运行结果：
    
    
    空队列转换为数组的长度: 0
    队列转换为数组的长度: 3
    数组元素 0: 1
    数组元素 1: 2
    数组元素 2: 3

#### class LinkedBlockingQueue<E>
    
    
    public class LinkedBlockingQueue<E> {
        public let capacity: Int64
        public init(capacity: Int64)
        public init()
        public init(capacity: Int64, elements: Array<E>)
        public init(capacity: Int64, elements: Collection<E>)
    }

功能：实现是带阻塞机制并支持用户指定容量上界的并发队列。

阻塞队列的特点是，当队列满时，尝试向队列中添加元素的线程会被阻塞，直到队列有空余位置；当队列空时，尝试从队列中获取元素的线程会被阻塞，直到队列有可取元素。

#### [h2]let capacity
    
    
    public let capacity: Int64

功能：返回此 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee) 的容量。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(5)
        println("队列容量: ${queue.capacity}")
    }

运行结果：
    
    
    队列容量: 5

#### [h2]prop size
    
    
    public prop size: Int64

功能：返回此 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee) 的元素个数。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/StcmqnNFTeisnPTEIxMFkw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=B3B24FBEB9D7BEC0C46589BAB62FD538C415B0A979888BD3CFA4E80F71699BC9)

此方法不保证并发场景下的原子性，建议在环境中没有其他线程并发地修改 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee) 时调用。

类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(3)
        println("初始队列大小: ${queue.size}")
    
        queue.add(1)
        queue.add(2)
        println("添加元素后队列大小: ${queue.size}")
    }

运行结果：
    
    
    初始队列大小: 0
    添加元素后队列大小: 2

#### [h2]init()
    
    
    public init()

功能：构造一个具有默认初始容量（[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64).Max）的 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)。

示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>()
        println("默认容量队列创建成功，容量: ${queue.capacity}")
    }

运行结果：
    
    
    默认容量队列创建成功，容量: 9223372036854775807

#### [h2]init(Int64)
    
    
    public init(capacity: Int64)

功能：构造一个带有传入容量大小的 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化容量大小。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 capacity 小于等于 0 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 正常创建队列
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(3)
        println("成功创建容量为3的队列")
        println("队列容量: ${queue.capacity}")
    
        // 尝试创建容量为0的队列（会抛出异常）
        try {
            let invalidQueue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(0)
        } catch (e: IllegalArgumentException) {
            println("捕获到异常: ${e.message}")
        }
    
        // 尝试创建容量为负数的队列（会抛出异常）
        try {
            let negativeQueue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(-1)
        } catch (e: IllegalArgumentException) {
            println("捕获到异常: ${e.message}")
        }
    }

运行结果：
    
    
    成功创建容量为3的队列
    队列容量: 3
    捕获到异常: Invalid size of BlockingQueue: 0.
    捕获到异常: Invalid size of BlockingQueue: -1.

#### [h2]init(Int64, Array<E>) (deprecated)
    
    
    public init(capacity: Int64, elements: Array<E>)

功能：构造一个带有传入容量大小，并带有传入数组元素的 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/Ks3HFIYjT0in1C1DiqjIeQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=AEAE7D148D8F7EC68F9478748E9EB39332887F18800B495BFE6683797D15E76E)

未来版本即将废弃，如需实现等效功能，可先创建空队列，再依次将数组中的元素添加到队列中。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化容量大小。
  * elements: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<E> \- 初始化数组元素。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 capacity 小于等于 0 或小于数组元素 elements 的 size 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 创建一个数组作为初始元素
        let elements = [1, 2, 3]
    
        // 使用deprecated的构造函数创建队列
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(5, elements)
        println("队列容量: ${queue.capacity}")
        println("队列大小: ${queue.size}")
    
        // 验证元素已正确添加
        let first = queue.peek()
        println("队首元素: ${first}")
    }

运行结果：
    
    
    队列容量: 5
    队列大小: 3
    队首元素: Some(1)

#### [h2]init(Int64, Collection<E>) (deprecated)
    
    
    public init(capacity: Int64, elements: Collection<E>)

功能：构造一个带有传入容量大小，并带有传入迭代器的 [LinkedBlockingQueue](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_class#class-linkedblockingqueuee)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/Lo0z3V11S9WbxMcDmrB5lw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=466A710AAEB5B202EBBE1E7D39F07577EDF74134CCBEFAC0C1D66B55C6526FA4)

未来版本即将废弃，如需实现等效功能，可先创建空队列，再依次将 [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont) 中的元素添加到队列中。

参数：

  * capacity: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 初始化容量大小。
  * elements: [Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<E> \- 初始化迭代器元素。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 capacity 小于等于 0 或小于迭代器元素 elements 的 size 则抛出异常。



示例：
    
    
    import std.collection.concurrent.*
    import std.collection.*
    
    main() {
        // 创建一个ArrayList作为Collection元素
        let elements = ArrayList<Int64>()
        elements.add(10)
        elements.add(20)
        elements.add(30)
    
        // 使用deprecated的构造函数创建队列
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(5, elements)
        println("队列容量: ${queue.capacity}")
        println("队列大小: ${queue.size}")
    
        // 验证元素已正确添加
        let first = queue.peek()
        println("队首元素: ${first}")
    }

运行结果：
    
    
    队列容量: 5
    队列大小: 3
    队首元素: Some(10)

#### [h2]func add(E)
    
    
    public func add(element: E): Unit

功能：阻塞的入队操作，将元素添加到队列尾部。如果队列已满，则阻塞等待。

参数：

  * element: E - 要添加的元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        var blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
        blockArr.add(10)
        println(blockArr.peek())
    }

运行结果：
    
    
    Some(10)

#### [h2]func add(E, Duration)
    
    
    public func add(element: E, timeout: Duration): Bool

功能：阻塞的入队操作，将元素添加到队列尾部，如果队列满了，将等待指定的时间。如果 timeout 为负，则会立即执行入队操作并且返回操作结果。

参数：

  * element: E - 要添加的元素。
  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加元素返回 true。超出等待时间还未成功添加元素返回 false。



示例：
    
    
    import std.collection.concurrent.*
    import std.sync.*
    import std.time.*
    
    main() {
        let blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
    
        /* 创建新线程，填满阻塞队列，休眠 1 秒后移除阻塞队列队首元素 */
        spawn {
            =>
                blockArr.add(0)
                blockArr.add(1)
                sleep(1000 * Duration.millisecond)
                println("New thread moves out of blocked queue head element.")
                blockArr.remove()
        }
    
        /* 主线程立即让出执行权，唤醒后阻塞的添加 */
        sleep(-1 * Duration.millisecond)
        println("The main thread is woken up.")
        let isSuccess: Bool = blockArr.add(2, 2000 * Duration.millisecond)
        println(isSuccess)
    }

运行结果：
    
    
    The main thread is woken up.
    New thread moves out of blocked queue head element.
    true

#### [h2]func dequeue() (deprecated)
    
    
    public func dequeue(): E

功能：阻塞的出队操作，获得队首元素并删除。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/Nx4dHe26QCW2moAoD-3mRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=50BA2A497EA63619FD707B7E4DACDA5BB34902B24A817BB961DDE4EC671B1618)

未来版本即将废弃，使用 remove() 替代。

返回值：

  * E - 返回队首元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(3)
        queue.add(100)
        queue.add(200)
    
        // 使用deprecated的dequeue方法
        let element = queue.dequeue()
        println("出队元素: ${element}")
        println("队列剩余大小: ${queue.size}")
    }

运行结果：
    
    
    出队元素: 100
    队列剩余大小: 1

#### [h2]func dequeue(Duration) (deprecated)
    
    
    public func dequeue(timeout: Duration): Option<E>

功能：阻塞的出队操作，获得队首元素并删除。如果队列为空，将等待指定的时间。如果 timeout 为负，则会立即执行出队操作并且返回操作结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/5ZFcFixOQYynBvutAnZDkw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=5074B961E948E50F33277E54891951972D98B36A64930C9A7777FCFEA4D4D05D)

未来版本即将废弃，使用 remove(Duration) 替代。

参数：

  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素。如果超出等待时间还未成功获取队首元素，则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    import std.time.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(3)
    
        // 使用deprecated的dequeue方法，设置超时时间
        let result = queue.dequeue(1000 * Duration.millisecond)
        println("空队列出队结果: ${result}")
    
        // 添加元素后再尝试出队
        queue.add(42)
        let result2 = queue.dequeue(1000 * Duration.millisecond)
        println("有元素出队结果: ${result2}")
    }

运行结果：
    
    
    空队列出队结果: None
    有元素出队结果: Some(42)

#### [h2]func enqueue(E) (deprecated)
    
    
    public func enqueue(element: E): Unit

功能：阻塞的入队操作，将元素添加到队列尾部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/TnhAcbsRQ164m13jdDXSIA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=9798DA1F4A3894076E17B74D1654FF73DC57013A7CBE772BFB0341CB4CA1AF45)

未来版本即将废弃，使用 add(E) 替代。

参数：

  * element: E - 要添加的元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
    
        // 使用deprecated的enqueue方法添加元素
        queue.enqueue(100)
        queue.enqueue(200)
    
        println("队列大小: ${queue.size}")
        let first = queue.peek()
        println("队首元素: ${first}")
    }

运行结果：
    
    
    队列大小: 2
    队首元素: Some(100)

#### [h2]func enqueue(E, Duration) (deprecated)
    
    
    public func enqueue(element: E, timeout: Duration): Bool

功能：阻塞的入队操作，将元素添加到队列尾部，如果队列满了，将等待指定的时间。如果 timeout 为负，则会立即执行入队操作并且返回操作结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/tD7XRcAHSOi1RROfZf4FXw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=02F6469CFA03522DE727420478996B4F3BCDFD4CEABF5162A7B8BAC1902C42F2)

未来版本即将废弃，使用 add(E, Duration) 替代。

参数：

  * element: E - 要添加的元素。
  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加元素返回 true。超出等待时间还未成功添加元素返回 false。



示例：
    
    
    import std.collection.concurrent.*
    import std.time.*
    
    main() {
        // 创建一个容量为2的队列
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
    
        // 填满队列
        queue.add(1)
        queue.add(2)
    
        // 使用deprecated的enqueue方法尝试添加元素，设置超时时间
        let result = queue.enqueue(3, 1000 * Duration.millisecond)
        println("入队结果: ${result}")
    
        // 移除一个元素后再尝试添加
        let removed = queue.remove()
        println("移除元素: ${removed}")
    
        let result2 = queue.enqueue(3, 1000 * Duration.millisecond)
        println("入队结果: ${result2}")
    }

运行结果：
    
    
    入队结果: false
    移除元素: 1
    入队结果: true

#### [h2]func head() (deprecated)
    
    
    public func head(): Option<E>

功能：获取队首元素。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/TpJukFOJQCaVezYUoqk5Iw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=1A42CFA16E5C4913F1D8440E4BA1B251FF8F4A4AD64B9661307C7114E828B6DC)

  * 该函数是非阻塞的。
  * 未来版本即将废弃，使用 peek() 替代。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(3)
    
        // 测试空队列的head方法
        let emptyHead = queue.head()
        println("空队列head结果: ${emptyHead}")
    
        // 添加元素后测试head方法
        queue.add(42)
        queue.add(84)
        let headResult = queue.head()
        println("非空队列head结果: ${headResult}")
    }

运行结果：
    
    
    空队列head结果: None
    非空队列head结果: Some(42)

#### [h2]func peek()
    
    
    public func peek(): Option<E>

功能：获取队首元素。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/Juj6UQWfTAmJCX59h608sQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=D3D4FA08FF16C68CB824BA196CA7FB1273A00411445856D6009D0563EBD02974)

该函数是非阻塞的。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
        blockArr.add(2)
        blockArr.add(3)
        println(blockArr.peek())
    }

运行结果：
    
    
    Some(2)

#### [h2]func remove()
    
    
    public func remove(): E

功能：阻塞的出队操作，获得队首元素并删除。

返回值：

  * E - 返回队首元素。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
        blockArr.add(2)
        blockArr.add(3)
        println(blockArr.remove())
        println(blockArr.size)
    }

运行结果：
    
    
    2
    1

#### [h2]func remove(Duration)
    
    
    public func remove(timeout: Duration): Option<E>

功能：阻塞的出队操作，获得队首元素并删除。如果队列为空，将等待指定的时间。如果 timeout 为负，则会立即执行出队操作并且返回操作结果。

参数：

  * timeout: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 等待时间。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素。如果超出等待时间还未成功获取队首元素，则返回 None。



示例：
    
    
    import std.collection.concurrent.*
    import std.sync.*
    import std.time.*
    
    main() {
        let blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
    
        /* 创建新线程，休眠 1 秒后向队列添加元素 */
        spawn {
            =>
                sleep(1000 * Duration.millisecond)
                println("This new thread adds new elements to the queue.")
                blockArr.add(3)
        }
    
        /* 主线程立即让出执行权，唤醒后阻塞的取出队首元素 */
        sleep(-1 * Duration.millisecond)
        println("The main thread is woken up.")
        let num: Option<Int64> = blockArr.remove(2000 * Duration.millisecond)
        println(num)
    }

运行结果：
    
    
    The main thread is woken up.
    This new thread adds new elements to the queue.
    Some(3)

#### [h2]func tryAdd(E)
    
    
    public func tryAdd(element: E): Bool

功能：非阻塞的入队操作，将元素添加到队列尾部。

参数：

  * element: E - 要添加的元素。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加返回 true；如果队列满了，添加失败返回 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
        blockArr.tryAdd(2)
        blockArr.tryAdd(3)
        println(blockArr.size)
    }

运行结果：
    
    
    2

#### [h2]func tryDequeue() (deprecated)
    
    
    public func tryDequeue(): Option<E>

功能：非阻塞的出队操作，获得队首元素并删除。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/BidJnwmGQISBX2nplVWClw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=C22041CCF827A610F74D3A1AD508C586857818BDB2BA3BF004EF78D51E84C6A8)

未来版本即将废弃，使用 tryRemove() 替代。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(3)
    
        // 测试空队列的tryDequeue方法
        let emptyResult = queue.tryDequeue()
        println("空队列tryDequeue结果: ${emptyResult}")
    
        // 添加元素后测试tryDequeue方法
        queue.add(42)
        queue.add(84)
        let result1 = queue.tryDequeue()
        println("非空队列tryDequeue结果: ${result1}")
    
        // 再次尝试出队
        let result2 = queue.tryDequeue()
        println("再次tryDequeue结果: ${result2}")
    
        // 检查队列大小
        println("队列剩余大小: ${queue.size}")
    }

运行结果：
    
    
    空队列tryDequeue结果: None
    非空队列tryDequeue结果: Some(42)
    再次tryDequeue结果: Some(84)
    队列剩余大小: 0

#### [h2]func tryEnqueue(E) (deprecated)
    
    
    public func tryEnqueue(element: E): Bool

功能：非阻塞的入队操作，将元素添加到队列尾部。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/PUc2b8iRQaqhB0vNEeemsQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090201Z&HW-CC-Expire=86400&HW-CC-Sign=4CAD1768C9FE84844684F896A4FA3004F0144D3F10D8CD72E62C59D8CF7293B0)

未来版本即将废弃，使用 tryAdd(E) 替代。

参数：

  * element: E - 要添加的元素。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 成功添加返回 true；如果队列满了，添加失败返回 false。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        // 创建一个容量为2的队列
        let queue: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
    
        // 填满队列
        queue.add(1)
        queue.add(2)
    
        // 使用deprecated的tryEnqueue方法尝试添加元素到已满队列
        let result1 = queue.tryEnqueue(3)
        println("队列满时tryEnqueue结果: ${result1}")
    
        // 移除一个元素后再尝试添加
        let removed = queue.remove()
        println("移除元素: ${removed}")
    
        let result2 = queue.tryEnqueue(3)
        println("队列未满时tryEnqueue结果: ${result2}")
    
        // 检查队列大小
        println("队列最终大小: ${queue.size}")
    }

运行结果：
    
    
    队列满时tryEnqueue结果: false
    移除元素: 1
    队列未满时tryEnqueue结果: true
    队列最终大小: 2

#### [h2]func tryRemove()
    
    
    public func tryRemove(): Option<E>

功能：非阻塞的出队操作，获得队首元素并删除。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<E> \- 返回队首元素，队列为空时返回 None。



示例：
    
    
    import std.collection.concurrent.*
    
    main() {
        let blockArr: LinkedBlockingQueue<Int64> = LinkedBlockingQueue<Int64>(2)
        blockArr.tryAdd(3)
        println(blockArr.tryRemove())
        println(blockArr.tryRemove())
    }

运行结果：
    
    
    Some(3)
    None
