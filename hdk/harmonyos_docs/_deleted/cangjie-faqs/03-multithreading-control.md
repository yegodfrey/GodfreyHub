---
name: cangjie-faqs/03-multithreading-control
title: 仓颉语言是否支持开发者自行管理线程数量
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-multithreading-control
nodePath: FAQ / 标准库 / 仓颉语言是否支持开发者自行管理线程数量
---

# 仓颉语言是否支持开发者自行管理线程数量

因为仓颉语言采用了轻量化用户态的线程模型，在仓颉语言程序运行时仓颉线程不等同于物理线程，下面分情况讨论：

#### 管理物理线程

在开发HarmonyOS应用时，仓颉语言的工程不支持开发者自行配置物理线程的最大并发数，工程已经设定最大的物理线程为8。

#### 管理仓颉线程

在开发HarmonyOS应用时，仓颉语言的工程不支持开发者自行配置仓颉线程的最大并发数，但是开发者可以通过信号量等方式来管理仓颉线程的最大并发数。
    
    
    let semphone = Semaphore(3)
    
    public func FAQ19Test(): Unit {
        let futures = ArrayList<Future<Unit>>()
        for (i in 0..10) {
            let f = spawn {
                semphone.acquire()
                Hilog.info(0, "Cangjie Test", "this is task ${i}")
                sleep(Duration.second * 1)
                semphone.release()
            }
            futures.add(f)
        }
        for (f in futures) {
            f.get()
        }
    }

调用FAQ19Test，日志输出结果（并发输出具有随机性，具体以复现结果为准）：
    
    
    This is task 0.
    This is task 1.
    This is task 2.
    This is task 9.
    This is task 3.
    This is task 6.
    This is task 7.
    This is task 5.
    This is task 4.
    This is task 8.
