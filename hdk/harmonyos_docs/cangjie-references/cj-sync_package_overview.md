---
name: cangjie-references/cj-sync_package_overview
title: std.sync
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sync
---

# std.sync

#### 功能介绍

sync 包提供并发编程相关的能力。

随着越来越多的计算机开始使用多核处理器，要充分发挥多核的优势，并发编程也变得越来越重要。

不同编程语言会以不同的方式实现线程。一些编程语言通过调用操作系统 API 来创建线程，意味着每个语言线程对应一个操作系统线程，一般称之为 1:1 的线程模型；也有一些编程语言提供特殊的线程实现，允许多个语言线程在不同数量的操作系统线程的上下文中切换执行，这种也被称为 M:N 的线程模型，即 M 个语言线程在 N 个操作系统线程上调度执行，其中 M 和 N 不一定相等。

仓颉编程语言希望给开发者提供一个友好、高效、统一的并发编程界面，让开发者无需关心操作系统线程、用户态线程等概念上的差异，同时屏蔽底层实现细节，因此我们只提供一个仓颉线程的概念。仓颉线程采用的是 M:N 线程模型的实现，因此本质上它是一种用户态的轻量级线程，支持抢占，且相比操作系统线程内存资源占用更小。

当开发者希望并发执行某一段代码时，只需创建一个仓颉线程即可。

要创建一个新的仓颉线程，可以使用关键字 spawn 并传递一个无形参的 lambda 表达式，该 lambda 表达式即为我们想在新线程中执行的代码。

示例：

通过 spawn 关键字创建一个仓颉线程：
    
    
    main() {
        spawn {
            // 在新线程中执行
            println("Thread: ${Thread.currentThread.id}")
        }
        // 在主线程中执行
        println("Thread: ${Thread.currentThread.id}")
        sleep(Duration.second)
        0
    }

可能的运行结果：
    
    
    Thread: 1
    Thread: 2

sync 包主要提供了不同类型的原子操作，可重入互斥锁及其接口，利用共享变量的线程同步机制以及定时器的功能。

原子操作提供了包括整数类型、Bool 类型和引用类型的原子操作。

其中整数类型包括：Int8、Int16、Int32、Int64、UInt8、UInt16、UInt32、UInt64。

整数类型的原子操作支持基本的读(load)写(store)、交换(swap/compareAndSwap)以及算术运算(fetchAdd/fetchSub)等操作，需要注意的是：

  * 交换操作和算术操作的返回值是修改前的值。

  * compareAndSwap 是判断当前原子变量的值是否等于指定值，如果等于，则使用另一值替换；否则不替换。




Bool 类型和引用类型的原子操作只提供读写和交换操作，需要注意的是：

引用类型原子操作只对引用类型有效。

互斥锁 [Lock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-lock) 在使用的时候存在诸多不便，比如稍不注意会忘了解锁，或者在持有互斥锁的情况下抛出异常不能自动释放持有的锁等。因此，仓颉编程语言提供 synchronized 关键字，搭配 [Lock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-lock) 一起使用，来解决类似的问题。

通过在 synchronized 后面加上一个互斥锁实例，对其后面修饰的代码块进行保护，可以使得任意时刻最多只有一个线程可以执行被保护的代码：

  * 一个线程在进入 synchronized 修饰的代码块之前，会自动获取 Lock 实例对应的锁，如果无法获取锁，则当前线程被阻塞。
  * 一个线程在退出 synchronized 修饰的代码块之前（包括在代码块中使用 break、continue、return、throw 等控制转移表达式），会自动释放该 Lock 实例的锁。



示例：

在每个 for 循环的线程进入 synchronized 代码块前，会自动获取 mtx 实例对应的锁，在退出代码块前，会释放 mtx 实例对应的锁。
    
    
    import std.sync.Mutex
    
    main() {
        let mtx = Mutex()
        let cnt = Box<Int64>(0)
    
        for (_ in 0..5) {
            spawn {
                synchronized(mtx) {
                    cnt.value++
                    println("count: ${cnt.value}")
                }
            }
        }
        sleep(Duration.second)
        0
    }

可能的运行结果：
    
    
    count: 1
    count: 2
    count: 3
    count: 4
    count: 5

#### API 列表

#### [h2]常量&变量

常量&变量名 | 功能  
---|---  
[DefaultMemoryOrder (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_constants_vars#let-defaultmemoryorder-deprecated) | 默认内存顺序，详见枚举 [MemoryOrder (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums#enum-memoryorder-deprecated)。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[Condition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-condition) | 提供使线程阻塞并等待来自另一个线程的信号以恢复执行的功能的接口。  
[IReentrantMutex (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-ireentrantmutex-deprecated) | 提供可重入互斥锁接口。  
[Lock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-lock) | 提供实现可重入互斥锁的接口。  
[UniqueLock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-uniquelock) | 提供实现独占锁的接口。  
  
#### [h2]类

类名 | 功能  
---|---  
[AtomicBool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicbool) | 提供 Bool 类型的原子操作相关函数。  
[AtomicInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicint16) | 提供 Int16 类型的原子操作相关函数。  
[AtomicInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicint32) | 提供 Int32 类型的原子操作相关函数。  
[AtomicInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicint64) | 提供 Int64 类型的原子操作相关函数。  
[AtomicInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicint8) | 提供 Int8 类型的原子操作相关函数。  
[AtomicOptionReference](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicoptionreferencet-where-t--object) | 提供引用类型原子操作相关函数。  
[AtomicReference](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicreferencet-where-t--object) | 引用类型原子操作相关函数。  
[AtomicUInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicuint16) | 提供 UInt16 类型的原子操作相关函数。  
[AtomicUInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicuint32) | 提供 UInt32 类型的原子操作相关函数。  
[AtomicUInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicuint64) | 提供 UInt64 类型的原子操作相关函数。  
[AtomicUInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-atomicuint8) | 提供 UInt8 类型的原子操作相关函数。  
[Barrier](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-barrier) | 提供协调多个线程一起执行到某一个程序点的功能。  
[Monitor (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-monitor-deprecated) | 提供使线程阻塞并等待来自另一个线程的信号以恢复执行的功能。  
[MultiConditionMonitor (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-multiconditionmonitor-deprecated) | 提供对同一个互斥锁绑定多个条件变量的功能。  
[Mutex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-mutex) | 提供可重入锁相关功能。  
[ReadWriteLock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-readwritelock) | 提供可重入读写锁相关功能。  
[ReentrantMutex (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-reentrantmutex-deprecated) | 提供可重入锁相关功能。  
[ReentrantReadMutex (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-reentrantreadmutex-deprecated) | 提供可重入读写锁中的读锁类型。  
[ReentrantReadWriteMutex (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-reentrantreadwritemutex-deprecated) | 提供可重入读写锁相关功能。  
[ReentrantWriteMutex (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-reentrantwritemutex-deprecated) | 提供可重入读写锁中的写锁类型。  
[Semaphore](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-semaphore) | 提供信号量相关功能。  
[SyncCounter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-synccounter) | 提供倒数计数器功能。  
[Timer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-timer) | 提供定时器功能。  
  
#### [h2]枚举

枚举类型 | 功能  
---|---  
[MemoryOrder (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums#enum-memoryorder-deprecated) | 内存顺序类型枚举。  
[ReadWriteMutexMode (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums#enum-readwritemutexmode-deprecated) | 读写锁公平模式枚举。  
[CatchupStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums#enum-catchupstyle) | 重复性任务定时器需要使用的追平策略枚举。  
  
#### [h2]结构体

结构体 | 功能  
---|---  
[ConditionID (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_structs#struct-conditionid-deprecated) | 用于表示互斥锁的条件变量，详见 [MultiConditionMonitor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-multiconditionmonitor-deprecated)。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) | 此类为非法同步状态异常。  
  
  * **[常量&变量](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_constants_vars)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_structs)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-std-sync-samples)**  



