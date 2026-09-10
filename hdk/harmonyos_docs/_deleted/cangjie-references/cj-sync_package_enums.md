---
name: cangjie-references/cj-sync_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sync / 枚举
---

# 枚举

#### enum CatchupStyle
    
    
    public enum CatchupStyle {
        | Delay
        | Burst
        | Skip
    }

功能：表示不同的重复性任务定时器需要使用的追平策略。

当任务执行时间过长时，后续任务执行时间点可能发生延迟，不同的追平策略适用于不同的场景：

  * Delay 适用于不关心任务开始的时间点，需要两次任务执行之间的时间间隔固定的场景。
  * Burst 适用于定时任务之间有先后关系，需要依次执行任务的场景。
  * Skip 适用于定时任务之间没有先后关系，可以忽略中间任务的场景。



示例：

该示例创建了一个 Timer，该 Timer 会执行 3 次任务，从创建开始 1 秒后开始执行，每间隔 1 秒执行下一次任务，追平策略采用 Delay。
    
    
    import std.sync.{Timer, CatchupStyle}
    import std.time.MonoTime
    
    main() {
        let start = MonoTime.now()
        Timer.repeatTimes(3, Duration.second, Duration.second, {
            => println("Tick at: ${MonoTime.now() - start}")
        }, style: Delay)
    
        sleep(Duration.second * 4)
        0
    }

可能的运行结果：
    
    
    Tick at: 1s2ms855us251ns
    Tick at: 2s5ms390us18ns
    Tick at: 3s7ms935us552ns

#### [h2]Burst
    
    
    Burst

功能：该策略下，每个任务的开始时间间隔固定，当任务执行时间大于设定的任务触发间隔时间时，依次执行错过的时间点上的任务，直到追平。

#### [h2]Delay
    
    
    Delay

功能：该策略下，上一次任务结束与下一次任务开始的时间间隔总是固定的，即下一次任务的开始时间 = 上一次任务的结束时间 + 设定的任务触发间隔时间。

#### [h2]Skip
    
    
    Skip

功能：该策略下，每个任务的开始时间间隔固定，当任务执行时间大于设定的任务触发间隔时间时，将跳过后面错过的时间点，以尽快追平。

#### enum MemoryOrder (deprecated)
    
    
    public enum MemoryOrder {
        | SeqCst
    }

功能：内存顺序类型枚举。

内存顺序主要是指内存的读（load）写（store）操作的顺序，出于性能优化考虑编译器或 CPU 可能对指令进行重新排序，内存顺序枚举用来表示排序策略。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/jlawjqi1R4yqpYQbl-9GpQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=9F061C31A0118130586995A65B1E1AAEFF6C4770DD07ADE9E7B295664D0C2692)

未来版本即将废弃。

#### [h2]SeqCst
    
    
    SeqCst

功能：用于表示顺序一致的顺序，即禁止了指令重排，确保该原子操作之前的所有原子操作都先于该操作之后的原子操作完成。

#### enum ReadWriteMutexMode (deprecated)
    
    
    public enum ReadWriteMutexMode {
        | Unfair
        | Fair
    }

功能：读写锁公平模式枚举。

锁的公平性是指，当同时有多个线程在等待同一把锁时，是否按照等待顺序依次获得锁。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/3ocplVj6SE2_ITOKy5oG3A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111717Z&HW-CC-Expire=86400&HW-CC-Sign=48ECB3E1D25DB4B064EFC3E0167A4CA331753C7492EF889C1690D7264AB529C4)

未来版本即将废弃。

#### [h2]Fair
    
    
    Fair

功能：用于表示读写锁公平模式，当锁被释放时，最早等待锁的线程先获得锁。

#### [h2]Unfair
    
    
    Unfair

功能：用于表示读写锁非公平模式，当锁被释放时，任一等待中的线程可能获得锁。
