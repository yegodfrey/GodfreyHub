---
name: cangjie-references/cj-ast_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.ast / 异常类
---

# 异常类

#### class ASTException
    
    
    public class ASTException <: Exception {
        public init()
        public init(message: String)
    }

功能：ast 库的异常类，在 ast 库调用过程中发生异常时使用。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [ASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-astexception) 对象。

示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 在 try 块中抛出异常
        try {
            throw ASTException()
        } catch (e: ASTException) {
            // 捕获并输出异常
            println(e)
        }
    }

运行结果：
    
    
    ASTException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [ASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-astexception) 对象。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 在 try 块中抛出异常
        try {
            throw ASTException("Exception in try block")
        } catch (e: ASTException) {
            // 捕获并输出异常
            println(e)
        }
    }

运行结果：
    
    
    ASTException: Exception in try block

#### class MacroContextException
    
    
    public class MacroContextException <: Exception {
        public init()
        public init(message: String)
    }

功能：ast 库的上下文宏异常类，在上下文宏的相关接口中发生异常时使用。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [MacroContextException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-macrocontextexception) 对象。

示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    import std.collection.ArrayList
    
    public macro inner(input: Tokens) {
        // 向外层宏发送 Int64 类型消息
        setItem("Int64FromInner", 100)
        return input
    }
    
    public macro outer(input: Tokens) {
        // 获取名为 inner 的内层宏所发送的全部消息
        let messages = getChildMessages("inner")
    
        // 判断内层宏是否发送了对应的消息
        let result = messages[0].hasItem("OtherMessage")
        if (!result) {
            throw MacroContextException()
        }
        return input
    }
    
    
    // 宏调用
    import M.*
    
    // 展开时报错
    @outer(@inner(var a = 1))
    
    main() {
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [MacroContextException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-macrocontextexception) 对象。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    import std.collection.ArrayList
    
    public macro inner(input: Tokens) {
        // 向外层宏发送 Int64 类型消息
        setItem("Int64FromInner", 100)
        return input
    }
    
    public macro outer(input: Tokens) {
        // 获取名为 inner 的内层宏所发送的全部消息
        let messages = getChildMessages("inner")
    
        // 判断内层宏是否发送了对应的消息
        let result = messages[0].hasItem("OtherMessage")
        if (!result) {
            throw MacroContextException("No such item")
        }
        return input
    }
    
    
    // 宏调用
    import M.*
    
    // 展开时报错
    @outer(@inner(var a = 1))
    
    main() {
    }

#### class ParseASTException
    
    
    public class ParseASTException <: Exception {
        public init()
        public init(message: String)
    }

功能：ast 库的解析异常类，在节点解析过程中发生异常时使用。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：构造一个默认的 [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) 对象。

示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 在 try 块中抛出异常
        try {
            throw ParseASTException()
        } catch (e: ParseASTException) {
            // 捕获并输出异常
            println(e)
        }
    }

运行结果：
    
    
    ParseASTException

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息构造一个 [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) 对象。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 在 try 块中抛出异常
        try {
            throw ParseASTException("Exception in try block")
        } catch (e: ParseASTException) {
            // 捕获并输出异常
            println(e)
        }
    }

运行结果：
    
    
    ParseASTException: Exception in try block
