---
name: cangjie-references/cj-regex_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.regex / 异常类
---

# 异常类

#### class RegexException
    
    
    public class RegexException <: Exception {
        public init()
        public init(message: String)
    }

功能：提供正则的异常处理。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) 实例。

示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 抛出一个 RegexException 实例
        try {
            throw RegexException()
        } catch (e: RegexException) {
            println("捕获到异常: ${e}")
        }
    }

运行结果：
    
    
    捕获到异常: RegexException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [RegexException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-regex_package_exceptions#class-regexexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.regex.*
    
    main(): Unit {
        // 抛出一个 RegexException 实例
        try {
            throw RegexException("正则表达式语法错误")
        } catch (e: RegexException) {
            println("捕获到异常: ${e}")
        }
    }

运行结果：
    
    
    捕获到异常: RegexException: 正则表达式语法错误
