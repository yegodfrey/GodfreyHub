---
name: cangjie-references/cj-env_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-env_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.env / 异常类
---

# 异常类

#### class EnvException
    
    
    public class EnvException <: Exception {
        public init(message: String)
    }

功能：env 包的异常类。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init(String)
    
    
    public init(message: String)

功能：创建 [EnvException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-process_package_exceptions#class-processexception) 实例。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常提示信息。



示例：
    
    
    import std.env.*
    
    main() {
        // 使用带消息的构造函数创建EnvException实例
        let exception = EnvException("自定义异常信息")
    }
