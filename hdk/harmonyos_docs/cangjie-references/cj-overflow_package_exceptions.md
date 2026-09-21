---
name: cangjie-references/cj-overflow_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.overflow / 异常类
---

# 异常类

#### class OvershiftException
    
    
    public class OvershiftException <: Exception {
        public init()
        public init(message: String)
    }

功能：移位运算中，当移位位数超过操作数位数时抛出的异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [OvershiftException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions#class-overshiftexception) 实例。

示例：
    
    
    import std.overflow.*
    
    main(): Int64 {
        try {
            // 抛出OvershiftException异常
            throw OvershiftException()
        } catch (e: OvershiftException) {
            println("Caught Exception: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught Exception: OvershiftException

#### [h2]init(String)
    
    
    public init(message: String)

功能：创建带有异常信息 message 的 [OvershiftException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions#class-overshiftexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.overflow.*
    
    main(): Int64 {
        try {
            // 抛出带消息的OvershiftException异常
            throw OvershiftException("Shift count exceeds the number of bits in the operand")
        } catch (e: OvershiftException) {
            println("Caught OvershiftException: ${e}")
            println("Exception message: ${e.message}")
        }
        return 0
    }

运行结果：
    
    
    Caught OvershiftException: OvershiftException: Shift count exceeds the number of bits in the operand
    Exception message: Shift count exceeds the number of bits in the operand

#### class UndershiftException
    
    
    public class UndershiftException <: Exception {
        public init()
        public init(message: String)
    }

功能：移位运算中，当移位位数小于 0 时抛出的异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [UndershiftException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions#class-undershiftexception) 实例。

示例：
    
    
    import std.overflow.*
    
    main(): Int64 {
        try {
            // 抛出UndershiftException异常
            throw UndershiftException()
        } catch (e: UndershiftException) {
            println("Caught UndershiftException: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught UndershiftException: UndershiftException

#### [h2]init(String)
    
    
    public init(message: String)

功能：创建带有异常信息 message 的 [UndershiftException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-overflow_package_exceptions#class-undershiftexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.overflow.*
    
    main(): Int64 {
        try {
            // 抛出带消息的UndershiftException异常
            throw UndershiftException("Shift count is negative")
        } catch (e: UndershiftException) {
            println("Caught UndershiftException: ${e}")
            println("Exception message: ${e.message}")
        }
        return 0
    }

运行结果：
    
    
    Caught UndershiftException: UndershiftException: Shift count is negative
    Exception message: Shift count is negative
