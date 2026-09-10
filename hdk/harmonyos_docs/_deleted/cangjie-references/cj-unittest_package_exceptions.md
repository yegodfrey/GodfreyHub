---
name: cangjie-references/cj-unittest_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest / 异常类
---

# 异常类

#### class AssertException
    
    
    public class AssertException <: Exception {
        public init()
        public init(message: String)
    }

功能：[@Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) / [@Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏) 检查失败时所抛出的异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造函数。

#### [h2]init(String)
    
    
    public init(message: String)

功能：构造函数。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 指定的异常信息。



#### class AssertIntermediateException
    
    
    public class AssertIntermediateException <: Exception {
        public let expression: String
        public let originalException: Exception
    }

功能：[@PowerAssert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#powerassert-宏) 检查失败时所抛出的异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]let expression
    
    
    public let expression: String

功能：检查的表达式。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

#### [h2]let originalException
    
    
    public let originalException: Exception

功能：原始的类型信息。

类型：[Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)

#### [h2]func getOriginalStackTrace()
    
    
    public func getOriginalStackTrace(): String

功能：获取原始的栈信息。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 栈信息。



#### class UnittestCliOptionsFormatException
    
    
    public class UnittestCliOptionsFormatException <: UnittestException {}

功能：控制台选项格式错误抛出的异常。

父类型：

  * UnittestException



#### class UnittestException
    
    
    public open class UnittestException <: Exception {}

功能：框架通用异常。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]func getClassName()
    
    
    protected open override func getClassName(): String

功能：获得类名。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类名字符串。



#### class UnittestTimeoutException
    
    
    public class UnittestTimeoutException <: Exception {}

功能：运行超时时抛出的异常。仅可被框架使用。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)


