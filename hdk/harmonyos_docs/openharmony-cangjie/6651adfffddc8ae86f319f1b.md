---
name: document/cn/openharmony-cangjie/ast_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions
source: portal
---

异常类 class ASTException
    
    public class ASTException <: Exception {
        public init()
        public init(message: String)
    }

功能：ast 库的异常类，在 ast 库调用过程中发生异常时使用。 [h2]init()
    
    public init()

功能：构造一个默认的 [ASTException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions#class-astexception) 对象。 [h2]init(String)
    
    public init(message: String)

功能：根据异常信息构造一个 [ASTException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions#class-astexception) 对象。 参数：
    * message: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 异常信息。
class MacroContextException
    
    public class MacroContextException <: Exception {
        public init()
        public init(message: String)
    }

功能：ast库的上下文宏异常类，在上下文宏的相关接口中发生异常时使用。 [h2]init()
    
    public init()

功能：构造一个默认的 [MacroContextException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions#class-macrocontextexception) 对象。 [h2]init(String)
    
    public init(message: String)

功能：根据异常信息构造一个 [MacroContextException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions#class-macrocontextexception) 对象。 参数：
    * message: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 异常信息
class ParseASTException
    
    public class ParseASTException <: Exception {
        public init()
        public init(message: String)
    }

功能：ast库的解析异常类，在节点解析过程中发生异常时使用。 [h2]init()
    
    public init()

功能：构造一个默认的 [ParseASTException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions#class-parseastexception) 对象。 [h2]init(String)
    
    public init(message: String)

功能：根据异常信息构造一个 [ParseASTException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/ast_package_exceptions#class-parseastexception) 对象。 参数：
    * message: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 异常信息。
