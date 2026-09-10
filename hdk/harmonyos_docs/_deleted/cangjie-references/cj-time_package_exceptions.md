---
name: cangjie-references/cj-time_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.time / 异常类
---

# 异常类

#### class InvalidDataException
    
    
    public class InvalidDataException <: Exception {
        public init()
        public init(message: String)
    }

功能：[InvalidDataException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions#class-invaliddataexception) 表示加载时区时的异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造一个 [InvalidDataException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions#class-invaliddataexception) 实例。

示例：
    
    
    import std.time.*
    
    main(): Unit {
        // 抛出一个 InvalidDataException 实例
        try {
            throw InvalidDataException()
        } catch (e: InvalidDataException) {
            println("捕获到异常: ${e}")
        }
    }

运行结果：
    
    
    捕获到异常: InvalidDataException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据参数 message 指定的异常信息，构造一个 [InvalidDataException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions#class-invaliddataexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预定义消息。



示例：
    
    
    import std.time.*
    
    main(): Unit {
        // 抛出一个带有消息的 InvalidDataException 实例
        try {
            throw InvalidDataException("时区数据无效")
        } catch (e: InvalidDataException) {
            println("捕获到异常: ${e}")
            println("异常消息: ${e.message}")
        }
    }

运行结果：
    
    
    捕获到异常: InvalidDataException: 时区数据无效
    异常消息: 时区数据无效

#### class TimeParseException
    
    
    public class TimeParseException <: Exception {
        public init()
        public init(message: String)
    }

功能：[TimeParseException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions#class-timeparseexception) 表示解析时间字符串时的异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造一个 [TimeParseException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions#class-timeparseexception) 实例。

示例：
    
    
    import std.time.*
    
    main(): Unit {
        // 抛出一个 TimeParseException 实例
        try {
            throw TimeParseException()
        } catch (e: TimeParseException) {
            println("捕获到异常: ${e}")
        }
    }

运行结果：
    
    
    捕获到异常: TimeParseException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据参数 message 指定的异常信息，构造一个 [TimeParseException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-time_package_exceptions#class-timeparseexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 预定义消息。



示例：
    
    
    import std.time.*
    
    main(): Unit {
        // 抛出一个带有消息的 TimeParseException 实例
        try {
            throw TimeParseException("时间解析失败")
        } catch (e: TimeParseException) {
            println("捕获到异常: ${e}")
            println("异常消息: ${e.message}")
        }
    }

运行结果：
    
    
    捕获到异常: TimeParseException: 时间解析失败
    异常消息: 时间解析失败
