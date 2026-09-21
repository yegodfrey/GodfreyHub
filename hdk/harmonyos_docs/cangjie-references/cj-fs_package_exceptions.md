---
name: cangjie-references/cj-fs_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-fs_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.fs / 异常类
---

# 异常类

#### class FSException
    
    
    public class FSException <: IOException {
        public init()
        public init(message: String)
    }

功能：文件流异常类，继承了 IO 流异常类。

父类型：

  * [IOException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_exceptions#class-ioexception)



#### [h2]init()
    
    
    public init()

功能：构造一个文件异常实例，无异常提示信息。

示例：
    
    
    import std.fs.*
    
    main() {
        // 使用默认的构造函数创建FSException实例
        let exception = FSException()
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：构造一个文件异常实例，有异常提示信息。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 错误信息。



示例：
    
    
    import std.fs.*
    
    main() {
        // 使用带消息的构造函数创建FSException实例
        let exception = FSException("自定义异常信息")
    }
