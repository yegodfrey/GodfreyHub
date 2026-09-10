---
name: cangjie-faqs/27-channel
title: 仓颉语言如何使用Channel进行线程间通信
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/27-channel
nodePath: FAQ / 标准库 / 仓颉语言如何使用Channel进行线程间通信
---

# 仓颉语言如何使用Channel进行线程间通信

仓颉语言通过std.sync包提供线程间通信能力，开发者可以使用ArrayBlockingQueue等并发集合实现生产者-消费者模式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/9AimEe6vTUmg13nPqlZDoA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120402Z&HW-CC-Expire=86400&HW-CC-Sign=A9FDDB0CAC79B628E61391D0AFB63968E9F15A6E6BC951C0E3BDF2D70A75C24A)

仓颉语言标准库当前未提供独立的Channel类型。开发者可以使用以下替代方案实现线程间通信：

#### 替代方案：ArrayBlockingQueue

使用std.collection.concurrent包中的ArrayBlockingQueue实现线程间安全数据传递：

调用示例：
    
    
    import std.collection.concurrent.*
    import std.sync.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testBlockingQueue(): Unit {
        let queue = ArrayBlockingQueue<Int64>(10)
        let done = SyncCounter(2)
    
        // 生产者
        spawn {
            for (i in 0..5) {
                queue.add(i)
                Hilog.info(0, "Cangjie Test", "produced: ${i}")
            }
            done.dec()
        }
    
        // 消费者（使用tryRemove非阻塞出队）
        spawn {
            for (_ in 0..5) {
                match (queue.tryRemove()) {
                    case Some(v) => Hilog.info(0, "Cangjie Test", "consumed: ${v}")
                    case None => Hilog.info(0, "Cangjie Test", "queue empty")
                }
            }
            done.dec()
        }
    
        done.waitUntilZero()
    }

调用testBlockingQueue，日志可能输出结果：
    
    
    produced: 0
    consumed: 0
    produced: 1
    consumed: 1
    produced: 2
    consumed: 2
    produced: 3
    consumed: 3
    produced: 4
    consumed: 4

更多并发同步的使用方法，详情请参见[同步机制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-sync)和[std.collection.concurrent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_concurrent_package_overview)。
