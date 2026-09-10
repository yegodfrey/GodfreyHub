---
name: cangjie-references/cj-process_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.process / 异常类
---

# 异常类

#### class ProcessException
    
    
    public class ProcessException <: IOException {
        public init(message: String)
    }

功能：process 包的异常类。

父类型：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception)



#### [h2]init(String)
    
    
    public init(message: String)

功能：创建 [ProcessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.process.*
    
    main(): Int64 {
        try {
            throw ProcessException("Process failed to start")
        } catch (e: ProcessException) {
            println("Caught ProcessException: ${e.message}")
            println("Exception type: ${e}")
        }
        return 0
    }

运行结果：
    
    
    Caught ProcessException: Process failed to start
    Exception type: ProcessException: Process failed to start
