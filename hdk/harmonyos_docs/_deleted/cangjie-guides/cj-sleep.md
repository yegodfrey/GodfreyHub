---
name: cangjie-guides/cj-sleep
title: 线程睡眠指定时长 sleep
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-sleep
nodePath: 基础入门 / 学习仓颉语言 / 并发编程 / 线程睡眠指定时长 sleep
---

# 线程睡眠指定时长 sleep

sleep 函数会阻塞当前运行的线程，该线程会主动睡眠一段时间，之后再恢复执行，其参数类型为 Duration 类型。函数原型为：
    
    
    func sleep(dur: Duration): Unit // Sleep for at least `dur`.

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/1ONgu7tqQd-OzqGOfbXzJA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111552Z&HW-CC-Expire=86400&HW-CC-Sign=9EF3D41EA410EE1994DD092197BE92B36D5F1388182DEAF8CE64994EB8A237E1)

如果 dur <= Duration.Zero, 那么当前线程只会让出执行资源，并不会进入睡眠。

以下是使用 sleep 的示例：
    
    
    main(): Int64 {
        println("Hello")
        sleep(Duration.second) // sleep for 1s.
        println("World")
        return 0
    }

输出结果如下：
    
    
    Hello
    World
