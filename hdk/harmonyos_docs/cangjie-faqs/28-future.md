---
name: cangjie-faqs/28-future
title: 仓颉语言如何使用Future获取异步线程结果
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/28-future
nodePath: FAQ / 标准库 / 仓颉语言如何使用Future获取异步线程结果
---

# 仓颉语言如何使用Future获取异步线程结果

仓颉语言通过spawn关键字创建轻量级线程，spawn表达式返回Future<T>类型，开发者可以通过Future.get()阻塞等待并获取线程执行结果。

#### 基本用法

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testFutureBasic(): Unit {
        let future: Future<Int64> = spawn {
            var sum = 0
            for (i in 1..=100) {
                sum += i
            }
            sum
        }
    
        let result = future.get()
        Hilog.info(0, "Cangjie Test", "sum = ${result}")
    }

调用testFutureBasic，日志输出结果：
    
    
    sum = 5050

#### 等待多个Future
    
    
    import kit.PerformanceAnalysisKit.Hilog
    import std.collection.*
    
    public func testFutureMultiple(): Unit {
        let futures = ArrayList<Future<Int64>>()
        for (i in 0..5) {
            let f = spawn {
                i * i
            }
            futures.add(f)
        }
    
        var total = 0
        for (f in futures) {
            total += f.get()
        }
        Hilog.info(0, "Cangjie Test", "total = ${total}")
    }

调用testFutureMultiple，日志输出结果：
    
    
    total = 30

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/3iztwWH_SnWZuP7AAzpMkA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085439Z&HW-CC-Expire=86400&HW-CC-Sign=F44DF0942696732523D34F0CAE1569F55AC9CA24D40C1E480EAE14A06BD100FC)

  1. Future.get()会阻塞当前线程直到结果就绪。
  2. spawn创建的是轻量用户态线程，由仓颉运行时调度。
  3. 多个Future可以通过循环调用get()依次等待。



更多并发编程的使用方法，详情请参见[并发编程](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-concurrency)。
