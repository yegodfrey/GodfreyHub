---
name: cangjie-references/cj-sync_package_interfaces
title: 接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sync / 接口
---

# 接口

#### interface Condition
    
    
    public interface Condition {
        func wait(): Unit
        func wait(timeout!: Duration): Bool
        func waitUntil(predicate: () -> Bool): Unit
        func waitUntil(predicate: () -> Bool, timeout!: Duration): Bool
        func notify(): Unit
        func notifyAll(): Unit
    }

功能：提供使线程阻塞并等待来自另一个线程的信号以恢复执行的功能的接口。

这是一种利用共享变量进行线程同步的机制，当一些线程因等待共享变量的某个条件成立而挂起时，另一些线程改变共享的变量，使条件成立，

然后执行唤醒操作。这使得挂起的线程被唤醒后可以继续执行。

#### [h2]func notify()
    
    
    func notify(): Unit

功能：唤醒一个等待在关联互斥体上的线程。

异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### [h2]func notifyAll()
    
    
    func notifyAll(): Unit

功能：唤醒所有等待在关联互斥体上的线程。

异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### [h2]func wait()
    
    
    func wait(): Unit

功能：当前线程挂起，直到对应的 notify 函数被调用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/GJNQPubcQjGnv8mlgH7dqg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=26A7329AC6184A067D4FAB256E53EC8AA56B1EBA4258AA0D4A6754A3616D0A29)

线程在进入等待时会释放对应的互斥锁，被唤醒后再次持有互斥锁。

异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### [h2]func wait(Duration)
    
    
    func wait(timeout!: Duration): Bool

功能：当前线程挂起，直到对应的 notify 函数被调用，或者挂起时间超过 timeout。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/k6bCZMM6SZewwz4HX2e1Dw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=DE09AB9491CF97AB9B4569EECF6DA093D4D8187D6352F177DD8D564CFFF6F0EE)

线程在进入等待时会释放对应的互斥锁，被唤醒后再次持有互斥锁。

参数：

  * timeout!: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 挂起时间，其默认值为 [Duration.Max](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#static-const-max)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果 [Monitor (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-monitor-deprecated) 被其他线程唤醒，返回 true；如果超时，则返回 false。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 timeout 小于等于 [Duration.Zero](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#static-const-zero)，抛出异常。
  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### [h2]func waitUntil(() -> Bool)
    
    
    func waitUntil(predicate: () -> Bool): Unit

功能：当前线程挂起，直到对应的 notify 函数被调用且 predicate 结果为 true。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/RSbReeclTLSQjRti_a0HSA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=6CA830731D4453CF279992B7D95AA07AF84999FDC089452899C657711CC11E9F)

  * 线程在进入等待时会释放对应的互斥锁，被唤醒后再次持有互斥锁。
  * 此方法会先判断 predicate 结果是否为 true，若是则直接返回，否则将当前线程挂起。



参数：

  * predicate: () -> [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 等待为真的条件。



异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### [h2]func waitUntil(()->Bool,Duration)
    
    
    func waitUntil(predicate: () -> Bool, timeout!: Duration): Bool

功能：当前线程挂起，直到对应的 notify 函数被调用且 predicate 结果为 true，或者挂起时间超过 timeout。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/Q0-YuodmT32EToiM5SNRlw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=BE9F8450A3E483EB7514EB67F4A4FC14685E9ACB21E81073117C178A0EA04F62)

  * 线程在进入等待时会释放对应的互斥锁，被唤醒后再次持有互斥锁。
  * 此方法会先判断 predicate 结果是否为 true，若是则直接返回 true，否则将当前线程挂起。



参数：

  * predicate: () -> [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 等待为真的条件。
  * timeout!: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 挂起时间，其默认值为 [Duration.Max](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#static-const-max)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果 [Monitor (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-monitor-deprecated) 被其他线程唤醒且 predicate 结果为 true，返回 true；如果超时，则返回 false。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 timeout 小于等于 [Duration.Zero](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#static-const-zero)，抛出异常。
  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### interface IReentrantMutex (deprecated)
    
    
    public interface IReentrantMutex {
        func lock(): Unit
        func tryLock(): Bool
        func unlock(): Unit
    }

功能：提供实现可重入互斥锁的接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/5hAIIkXJQFiL2pW0qmqhfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=BA7D10571A92F8A1FE2A3BA6A2DA21CF1F1114EEB363D78488649ABF2D335046)

  * 未来版本即将废弃，使用 Lock 替代。
  * 开发者在实现该接口时需要保证底层互斥锁确实支持嵌套锁，否则在嵌套使用时，将会产生死锁问题。



#### [h2]func lock()
    
    
    func lock(): Unit

功能：锁定互斥体。

如果互斥体已被锁定，则阻塞当前线程。

#### [h2]func tryLock()
    
    
    func tryLock(): Bool

功能：尝试锁定互斥体。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果互斥体已被锁定，则返回 false；反之，则锁定互斥体并返回 true。



#### [h2]func unlock()
    
    
    func unlock(): Unit

功能：解锁互斥体。

如果互斥体被重复加锁了 N 次，那么需要调用 N 次该函数来完全解锁。一旦互斥体被完全解锁，如果有其他线程阻塞在此锁上，则唤醒其中一个线程。

异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### interface Lock
    
    
    public interface Lock {
        func lock(): Unit
        func tryLock(): Bool
        func unlock(): Unit
    }

功能：提供实现可重入互斥锁的接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/VrZ75a1YTrqVY-l16psCxg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=A700BB0710F63EFD1866EDBEE9B9F3BA94BF246F1CC83408DB280054F8AEF52E)

开发者在实现该接口时需要保证底层互斥锁确实支持嵌套锁，否则在嵌套使用时，将会产生死锁问题。

#### [h2]func lock()
    
    
    func lock(): Unit

功能：锁定互斥体。

如果互斥体已被锁定，则阻塞当前线程。

#### [h2]func tryLock()
    
    
    func tryLock(): Bool

功能：尝试锁定互斥体。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果互斥体已被锁定，则返回 false；反之，则锁定互斥体并返回 true。



#### [h2]func unlock()
    
    
    func unlock(): Unit

功能：解锁互斥体。

如果互斥体被重复加锁了 N 次，那么需要调用 N 次该函数来完全解锁。一旦互斥体被完全解锁，如果有其他线程阻塞在此锁上，则唤醒其中一个线程。

异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。



#### interface UniqueLock
    
    
    public interface UniqueLock <: Lock {
        func condition(): Condition
    }

功能：提供实现独占锁的接口。

父类型：

  * Lock



#### [h2]func condition()
    
    
    func condition(): Condition

功能：创建一个与该 Lock 相关的 Condition。

可能被用来实现 “单 Lock 多等待队列” 的并发原语。

返回值：

  * Condition \- 创建的与该 Lock 相关的 Condition 实例。



异常：

  * [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) \- 如果当前线程没有持有该互斥体，抛出异常。


