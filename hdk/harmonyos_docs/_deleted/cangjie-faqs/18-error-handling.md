---
name: cangjie-faqs/18-error-handling
title: 仓颉语言如何进行异常处理
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/18-error-handling
nodePath: FAQ / 语法 / 仓颉语言如何进行异常处理
---

# 仓颉语言如何进行异常处理

仓颉语言提供try/catch/finally和throw关键字进行异常处理，同时支持try-with-resources自动资源管理。

#### 异常体系

仓颉语言的异常分为两类：

  * **Error** ：内部系统错误或资源耗尽错误，应用程序不应抛出或继承
  * **Exception** ：逻辑错误、IO错误等，开发者可以继承Exception创建自定义异常



#### throw与try-catch-finally

使用throw抛出异常，try-catch-finally捕获处理：
    
    
    class MyException <: Exception {
        public init(message: String) {
            super(message)
        }
    }

调用示例：
    
    
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testErrorHandlingTryCatch(): Unit {
        try {
            throw MyException("something went wrong")
        } catch (e: MyException) {
            Hilog.info(0, "Cangjie Test", "Caught: ${e.message}")
        } catch (e: IllegalArgumentException | ArithmeticException) {
            Hilog.info(0, "Cangjie Test", "Other exception: ${e}")
        } catch (_) {
            Hilog.info(0, "Cangjie Test", "Unknown exception")
        } finally {
            Hilog.info(0, "Cangjie Test", "finally block")
        }
    }

调用testErrorHandlingTryCatch，日志输出结果：
    
    
    Caught: something went wrong
    finally block

更多异常处理的使用方法，详情请参见[异常处理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-exception)。
