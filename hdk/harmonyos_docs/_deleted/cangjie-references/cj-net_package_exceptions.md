---
name: cangjie-references/cj-net_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.net / 异常类
---

# 异常类

#### class SocketException
    
    
    public class SocketException <: IOException {
        public init()
        public init(message: String)
    }

功能：提供套接字相关的异常处理。

父类型：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception)



#### [h2]init()
    
    
    public init()

功能：创建 [SocketException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_exceptions#class-socketexception) 实例。

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        try {
            throw SocketException()
        } catch (e: SocketException) {
            println("Caught SocketException: ${e.message}")
            println("Exception type: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught SocketException:
    Exception type: SocketException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [SocketException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_exceptions#class-socketexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        try {
            throw SocketException("Connection failed")
        } catch (e: SocketException) {
            println("Caught SocketException: ${e.message}")
            println("Exception type: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught SocketException: Connection failed
    Exception type: SocketException: Connection failed

#### class SocketTimeoutException
    
    
    public class SocketTimeoutException <: Exception {
        public init()
        public init(message: String)
    }

功能：提供套接字操作超时相关的异常处理。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [SocketTimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_exceptions#class-sockettimeoutexception) 实例。

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        try {
            throw SocketTimeoutException()
        } catch (e: SocketTimeoutException) {
            println("Caught SocketTimeoutException: ${e.message}")
            println("Exception type: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught SocketTimeoutException:
    Exception type: SocketTimeoutException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [SocketTimeoutException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_exceptions#class-sockettimeoutexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        try {
            throw SocketTimeoutException("Operation timed out")
        } catch (e: SocketTimeoutException) {
            println("Caught SocketTimeoutException: ${e.message}")
            println("Exception type: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught SocketTimeoutException: Operation timed out
    Exception type: SocketTimeoutException: Operation timed out
