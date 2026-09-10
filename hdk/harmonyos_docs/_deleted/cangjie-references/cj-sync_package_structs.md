---
name: cangjie-references/cj-sync_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sync / 结构体
---

# 结构体

#### struct ConditionID (deprecated)
    
    
    public struct ConditionID {}

功能：用于表示互斥锁的条件变量，详见 [MultiConditionMonitor (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_classes#class-multiconditionmonitor-deprecated)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/vEJPUEZiS-KG0eoDNNPvNQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111718Z&HW-CC-Expire=86400&HW-CC-Sign=822848B47711BBA064448C4126BA8A25BB01C5B7BDDE2C2222926173E8CF55C0)

未来版本即将废弃，使用 [Condition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_interfaces#interface-condition) 替代。

示例：
    
    
    import std.sync.*
    
    var monitor = MultiConditionMonitor()
    var flag: Bool = true
    
    main(): Int64 {
        // 创建一个互斥锁的条件变量
        monitor.lock()
        let conditionID = monitor.newCondition()
        monitor.unlock()
    
        let fut = spawn {
            monitor.lock()
            while (flag) {
                println("New thread: before wait")
                monitor.wait(conditionID)
                println("New thread: after wait")
            }
            monitor.unlock()
        }
    
        /* 睡眠 10 毫秒，以确保新线程可以执行 */
        sleep(10 * Duration.millisecond)
    
        monitor.lock()
        println("Main thread: set flag")
        flag = false
        monitor.unlock()
    
        println("Main thread: notify")
        monitor.lock()
        monitor.notify(conditionID) // 唤醒指定条件变量上的一个线程
        monitor.unlock()
    
        /* 等待新线程完成 */
        fut.get()
        return 0
    }

运行结果：
    
    
    New thread: before wait
    Main thread: set flag
    Main thread: notify
    New thread: after wait
