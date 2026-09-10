---
name: cangjie-references/cj-sync_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.sync / 异常类
---

# 异常类

#### class IllegalSynchronizationStateException
    
    
    public class IllegalSynchronizationStateException <: Exception {
        public init()
        public init(message: String)
    }

功能：此类为非法同步状态异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建一个 [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) 实例。

示例：
    
    
    import std.sync.*
    
    main(): Unit {
        // 抛出一个 IllegalSynchronizationStateException 实例
        try {
            throw IllegalSynchronizationStateException()
        } catch (e: IllegalSynchronizationStateException) {
            println("捕获到异常: ${e}")
        }
    }

运行结果：
    
    
    捕获到异常: IllegalSynchronizationStateException

#### [h2]init(String)
    
    
    public init(message: String)

功能：创建一个 [IllegalSynchronizationStateException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-sync_package_exceptions#class-illegalsynchronizationstateexception) 实例，其信息由参数 message 指定。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预定义消息。



示例：
    
    
    import std.sync.*
    
    main(): Unit {
        // 抛出一个 IllegalSynchronizationStateException 实例
        try {
            throw IllegalSynchronizationStateException("非法同步状态异常")
        } catch (e: IllegalSynchronizationStateException) {
            println("捕获到异常: ${e}")
        }
    }

运行结果：
    
    
    捕获到异常: IllegalSynchronizationStateException: 非法同步状态异常
