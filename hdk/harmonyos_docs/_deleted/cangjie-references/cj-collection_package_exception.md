---
name: cangjie-references/cj-collection_package_exception
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_exception
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.collection / 异常类
---

# 异常类

#### class ConcurrentModificationException
    
    
    public class ConcurrentModificationException <: Exception {
        public init()
        public init(message: String)
    }

功能：并发修改异常类。当函数检测到不同步的并发修改，抛出异常。

由于 collection 包提供的容器类都不支持并发修改，因此在执行某些操作时，会抛出 [ConcurrentModificationException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_exception#class-concurrentmodificationexception)。

典型的抛出异常场景有：

  * 使用 for-in 遍历一个容器过程中对容器进行修改时（[HashMapIterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-hashmapiteratork-v-where-k--hashable--equatablek)的 [remove](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-removestring-deprecated)() 方法除外）。
  * 在使用生命周期较短的类型，如 [MapEntryView](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-mapentryviewk-v) 时，如果其所在的容器内容被修改，也会抛出异常。



父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造一个不带异常信息的实例。

示例：
    
    
    import std.collection.*
    
    main(): Unit {
        // 使用无参构造函数创建ConcurrentModificationException实例
        let exception = ConcurrentModificationException()
        println("创建了无参的ConcurrentModificationException实例")
    
        // 可以抛出并捕获该异常
        try {
            throw ConcurrentModificationException()
        } catch (e: ConcurrentModificationException) {
            println("捕获到ConcurrentModificationException异常")
        }
    }

运行结果：
    
    
    创建了无参的ConcurrentModificationException实例
    捕获到ConcurrentModificationException异常

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造异常实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.collection.*
    
    main(): Unit {
        // 使用带消息的构造函数创建ConcurrentModificationException实例
        let message = "并发修改异常：在遍历过程中修改了容器"
        let exception = ConcurrentModificationException(message)
        println("创建了带消息的ConcurrentModificationException实例: ${exception.message}")
    
        // 可以抛出并捕获该异常
        try {
            throw ConcurrentModificationException("容器在遍历过程中被修改")
        } catch (e: ConcurrentModificationException) {
            println("捕获到异常: ${e.message}")
        }
    }

运行结果：
    
    
    创建了带消息的ConcurrentModificationException实例: 并发修改异常：在遍历过程中修改了容器
    捕获到异常: 容器在遍历过程中被修改
