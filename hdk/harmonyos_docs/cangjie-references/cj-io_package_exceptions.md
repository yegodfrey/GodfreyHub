---
name: cangjie-references/cj-io_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.io / 异常类
---

# 异常类

#### class ContentFormatException
    
    
    public class ContentFormatException <: Exception {
        public init()
        public init(message: String)
    }

功能：提供字符格式相关的异常处理。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) 实例。

示例：
    
    
    import std.io.*
    
    main(): Unit {
        try {
            throw ContentFormatException()
        } catch (e: ContentFormatException) {
            println("捕获异常: ${e.message}")
        }
    }

运行结果：
    
    
    捕获异常:

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [ContentFormatException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-contentformatexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        try {
            throw ContentFormatException("数据格式不正确")
        } catch (e: ContentFormatException) {
            println("捕获异常: ${e.message}")
        }
    }

运行结果：
    
    
    捕获异常: 数据格式不正确

#### class IOException
    
    
    public open class IOException <: Exception {
        public init()
        public init(message: String)
    }

功能：提供 IO 流相关的异常处理。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) 实例。

示例：
    
    
    import std.io.*
    
    main(): Unit {
        try {
            throw IOException()
        } catch (e: IOException) {
            println("捕获异常: ${e.message}")
        }
    }

运行结果：
    
    
    捕获异常:

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.io.*
    
    main(): Unit {
        try {
            throw IOException("文件读取失败")
        } catch (e: IOException) {
            println("捕获异常: ${e.message}")
        }
    }

运行结果：
    
    
    捕获异常: 文件读取失败
