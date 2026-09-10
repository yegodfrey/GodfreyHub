---
name: cangjie-faqs/01-multithreading-synchronized
title: 仓颉语言能否实现类似Java synchronized的同步机制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-multithreading-synchronized
nodePath: FAQ / 标准库 / 仓颉语言能否实现类似Java synchronized的同步机制
---

# 仓颉语言能否实现类似Java synchronized的同步机制

仓颉语言支持使用synchronized关键字，可以实现在其后跟随的作用域内自动进行加锁解锁操作，用来解决类似的问题。详情请参见[同步机制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-sync)。

示例代码：
    
    
    var count: Int64 = 0
    let mtx = Mutex()
    
    public func FAQ17Test() {
        let futures = ArrayList<Future<Unit>>()
        for (i in 0..1000) {
            let f = spawn {
                sleep(Duration.millisecond * 10)
                synchronized(mtx) {
                    count++
                }
            }
            futures.add(f)
        }
        for (f in futures) {
            f.get()
        }
        Hilog.info(0, "Cangjie Test", "count = ${count}")
    }

调用FAQ17Test，日志输出结果：
    
    
    count = 1000
