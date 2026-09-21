---
name: cangjie-references/cj-unittest_mock_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.mock / 异常类
---

# 异常类

#### class ExpectationFailedException
    
    
    public open class ExpectationFailedException <: PrettyException {}

功能：在测试执行期间违反了 mock 配置期间设置的一个或多个期望。

父类型：

  * PrettyException



#### class MockFrameworkException
    
    
    public class MockFrameworkException <: PrettyException {}

功能：框架异常信息，用户使用 API 不满足框架要求时，抛出该异常。

父类型：

  * PrettyException



#### class MockFrameworkInternalError
    
    
    public class MockFrameworkInternalError <: PrettyException {}

功能：框架异常信息，用户不应期望该异常被抛出。

父类型：

  * PrettyException



#### class PrettyException
    
    
    public abstract class PrettyException <: Exception & PrettyPrintable {}

功能：支持 [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable) 的异常类型，可以较好地打印异常信息。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)
  * [PrettyPrintable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_interfaces#interface-prettyprintable)



#### [h2]func pprint(PrettyPrinter)
    
    
    public func pprint(to: PrettyPrinter): PrettyPrinter

功能：支持较好地颜色打印、缩进格式打印异常信息。

参数：

  * to: [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 增加颜色和缩进的打印器。



返回值：

  * [PrettyPrinter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_common_package_classes#class-prettyprinter) \- 增加颜色和缩进的打印器。



#### class UnhandledCallException
    
    
    public class UnhandledCallException <: PrettyException {}

功能：提供的[桩](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#配置-api)均未处理该调用。

父类型：

  * PrettyException



#### class UnstubbedInvocationException
    
    
    public class UnstubbedInvocationException <: PrettyException {}

功能：未提供与此调用匹配的[桩](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#配置-api)。

父类型：

  * PrettyException



#### class VerificationFailedException
    
    
    public class VerificationFailedException <: PrettyException {}

功能：验证失败时，框架所抛出的异常。

父类型：

  * PrettyException


