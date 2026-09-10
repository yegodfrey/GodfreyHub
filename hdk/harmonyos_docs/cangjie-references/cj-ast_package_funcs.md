---
name: cangjie-references/cj-ast_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.ast / 函数
---

# 函数

#### func assertParentContext(String)
    
    
    public func assertParentContext(parentMacroName: String): Unit

功能：检查当前宏调用是否在特定的宏调用内。若检查不符合预期，编译器出现一个错误提示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/aF7AV773S3qm3TkerCbmUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=F104F386DAFECEC238751FBF7063A38D5284020C41F0A9C8F6EF91E71857AB11)

该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * parentMacroName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待检查的外层宏调用的名字。



示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    
    public macro outer(input: Tokens): Tokens {
        return input
    }
    
    public macro inner(input: Tokens): Tokens {
        assertParentContext("NotOuter")
        return input
    }
    
    
    // 宏调用
    import M.*
    
    // 展开时报错
    @outer(@inner(var a = 1))
    
    main() {
    }

#### func cangjieLex(String)
    
    
    public func cangjieLex(code: String): Tokens

功能：将字符串转换为 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 对象。

参数：

  * code: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待词法解析的字符串。



返回值：

  * [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 词法解析得到的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)。



异常：

  * [IllegalMemoryException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalmemoryexception) \- 当申请内存失败时，抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当输入的 code 无法被正确的解析为 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 时，抛出异常。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 用 cangjieLex 将输入字符串转化为 Tokens
        let tokens = cangjieLex("let x = 10")
    
        // 输出得到的 Tokens
        println("tokens.size: ${tokens.size}")
        println("tokens.toString(): ${tokens.toString()}")
    }

运行结果：
    
    
    tokens.size: 4
    tokens.toString(): let x = 10

#### func cangjieLex(String, Bool)
    
    
    public func cangjieLex(code: String, truncated: Bool): Tokens

功能：将字符串转换为 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 对象。

参数：

  * code: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待词法解析的字符串。
  * truncated: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 是否删减解析后 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 中的 Token([END](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#end))。



返回值：

  * [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 词法解析得到的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)。



异常：

  * [IllegalMemoryException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalmemoryexception) \- 当申请内存失败时，抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当输入的 code 无法被正确的解析为 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 时，抛出异常。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 用 cangjieLex 将输入字符串转化为 Tokens
        let tokens = cangjieLex("let x = 10", false)
    
        // 输出得到的 Tokens
        // 末尾相较于传入 true 得到的 Tokens 多了一个 Token(END)
        println("tokens.size: ${tokens.size}")
        println("tokens.toString(): ${tokens.toString()}")
    }

运行结果：
    
    
    tokens.size: 5
    tokens.toString(): let x = 10

#### func compareTokens(Tokens, Tokens)
    
    
    public func compareTokens(tokens1: Tokens, tokens2: Tokens): Bool

功能：用于比较两个[Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)是否一致。

参数：

  * tokens1: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 需要比较的第一个 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)。
  * tokens2: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 需要比较的第二个 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果两个 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 内容相同（除了换行符、结束符和位置信息）则返回 true。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 创建 Tokens
        let tokens0 = quote(let x = 10)
        let tokens1 = quote(let x = 10)
        let tokens2 = quote(let x = 20)
    
        println("compareTokens(tokens0, tokens1): ${compareTokens(tokens0, tokens1)}")
        println("compareTokens(tokens0, tokens2): ${compareTokens(tokens0, tokens2)}")
    }

运行结果：
    
    
    compareTokens(tokens0, tokens1): true
    compareTokens(tokens0, tokens2): false

#### func diagReport(DiagReportLevel, Tokens, String, String)
    
    
    public func diagReport(level: DiagReportLevel, tokens: Tokens, message: String, hint: String): Unit

功能：报错接口，在编译过程的宏展开阶段输出错误提示信息，支持 WARNING 和 ERROR 两个等级的报错。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/1BYuo4cYThmXglaPItgLgw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=05F04F5547FFDF19C0894717663852D8403F590D4EC932EDAE17583357083078)

  * 该接口在 错误等级为 ERROR 时会终止编译过程，但不会终止宏展开过程，建议用户调用接口后直接 return 或者抛出异常来终止宏展开过程。
  * 该接口会按照 cjc 标准报错的接口，将传入的 tokens 所在行的代码列出，并对 tokens 的内容用波浪线进行标注， message 信息将展示在首行， hint 信息将紧跟波浪线进行展示。
  * 报错引用的源码内容目前仅依据第一个 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 的开始位置和最后一个 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 的结束位置确定，不校验中间 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 位置信息的一致性。
  * 该接口在非宏展开过程中调用无效，参见[示例代码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-report#非宏展开过程中调用示例)。



参数：

  * level: [DiagReportLevel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-diagreportlevel) \- 报错信息等级。
  * tokens: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 报错信息中所引用源码内容对应的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)。
  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 报错的主信息。
  * hint: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 辅助提示信息。



异常：

  * [ASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-astexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 存在以下错误时，抛出异常。

    * 输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 为空；
    * 输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 中的 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 来自于不同的源文件；
    * 输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 中首位 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 位置早于末位 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 位置；
    * 输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 中的 [Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) 位置范围超出了宏调用的位置范围。



示例：
    
    
    // 宏定义
    macro package macro_definition
    
    import std.ast.*
    
    public macro testDef(input: Tokens): Tokens {
        for (i in 0..input.size) {
            if (input[i].kind == IDENTIFIER) {
                diagReport(DiagReportLevel.ERROR, input[i..(i + 1)], "This expression is not allowed to contain identifier",
                    "Here is the illegal identifier")
            }
        }
        return input
    }
    
    
    // 宏调用
    package macro_calling
    
    import std.ast.*
    import macro_definition.*
    
    main(): Int64 {
        let a = @testDef(1)
        let b = @testDef(a)
        let c = @testDef(1 + a)
        return 0
    }

#### func getChildMessages(String)
    
    
    public func getChildMessages(children:String): ArrayList<MacroMessage>

功能：获取特定内层宏发送的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/TmDJXwgUQKe2uEnKqBH_Sw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=50B2B515F2221A937F7F8CF5589A3F9B4B700F9EA6A2A39996FF94C5A06A8158)

该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * children: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待接收信息的内层宏名称。



返回值：

  * [ArrayList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_class#class-arraylistt)<[MacroMessage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macromessage)> \- 返回一组 [MacroMessage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macromessage) 的对象。



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
    
        // 获取内层宏发送的 Int64 消息
        let msg = messages[0].getInt64("Int64FromInner")
    
        // 输出 Int64 类型消息
        println("Message from inner-macro: ${msg}")
        return input
    }
    
    
    // 宏调用
    import M.*
    
    @outer(@inner(var a = 1))
    
    main() {
    }

运行结果：
    
    
    Message from inner-macro: 100

#### func getTokenKind(UInt16)
    
    
    public func getTokenKind(no: UInt16): TokenKind

功能：将词法单元种类序号转化为 [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind)。

参数：

  * no: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 需要转换的序号。



返回值：

  * [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) \- 词法单元种类序号对应的 [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind)。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/X1_6oNjzQTa5CvqCn6XrMQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=DED896A9181A492A3FD6D8BE931317387C8D395E02AEFD90BBF155CA27BB1A46)

当前 [SINGLE_QUOTED_STRING_LITERAL](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#single_quoted_string_literal) 和 [STRING_LITERAL](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#string_literal) 共用序号 147，输入序号 147 只能获得 [STRING_LITERAL](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#string_literal)，其他 [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) 无共用序号情况。

示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 获取 TokenKind
        let kind = getTokenKind(21)
    
        println("kind.toString(): ${kind.toString()}")
    }

运行结果：
    
    
    kind.toString(): NOT

#### func insideParentContext(String)
    
    
    public func insideParentContext(parentMacroName: String): Bool

功能：检查当前宏调用是否在特定的宏调用内，返回一个布尔值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/-hnESc4xQ4qT7QAFhpUtPQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=6BE4F78B854A7D282E571D1A1A87C5008AC53AC2DF9A4D3C9DBCB9FEC2C66217)

  * 在嵌套宏场景下，内层宏也可以通过发送键/值对的方式与外层宏通信。当内层宏执行时，通过调用标准库函数 [setItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-bool) 向外层宏发送信息；随后，当外层宏执行时，调用标准库函数 [getChildMessages](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-getchildmessagesstring) 接收每一个内层宏发送的信息（一组键/值对映射）。
  * 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。



参数：

  * parentMacroName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待检查的外层宏调用的名字。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 若当前宏嵌套在特定的宏调用内，返回 true。



示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    
    public macro inner(input: Tokens) {
        println("insideParentContext(\"outer\"): ${insideParentContext("outer")}")
        return input
    }
    
    public macro outer(input: Tokens) {
        return input
    }
    
    
    // 宏调用
    import M.*
    
    @outer(@inner(var a = 1))
    
    main() {
    }

运行结果：
    
    
    insideParentContext("outer"): true

#### func parseDecl(Tokens, String)
    
    
    public func parseDecl(input: Tokens, astKind!: String = ""): Decl

功能：用于解析一组词法单元，获取一个 [Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) 类型的节点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/ldiX8GMfSJ2dCDho03Fuag/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=56FCD44067DDEB9EC5F5EBD6E8BB1C2540575A9910EF198005F287C74AC961A4)

该函数不支持解析 [FuncParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-funcparam) 类型。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。
  * astKind!: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 用于指定解析特定的节点类型，有效支持的值为：PrimaryCtorDecl 和 PropMemberDecl。
    * PrimaryCtorDecl: 解析主构造函数。
    * PropMemberDecl: 解析 prop 声明的 getter 和 setter 函数。



返回值：

  * [Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) \- 一个 [Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) 类型的节点。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) 节点时，抛出异常，异常中包含报错提示信息。



示例：

  1. 以下代码展示 astKind 设为 PropMemberDecl 的案例。在这个参数下，可以使用 parseDecl 解析 prop 的 getter 和 setter 函数，解析结果为 FuncDecl 类型（如果不设置astKind，则会因为没有 func 关键字而无法解析）。


    
    
    import std.ast.*
    
    main() {
        let getter = quote( get() { _val } )
        let setter = quote( set(v) { _val = v })
        let getterDecl = parseDecl(getter, astKind: "PropMemberDecl")
        let setterDecl = parseDecl(setter, astKind: "PropMemberDecl")
        println((getterDecl as FuncDecl).getOrThrow().block.toTokens())
        println((setterDecl as FuncDecl).getOrThrow().block.toTokens())
    }

运行结果：
    
    
    {
        _val
    }
    
    {
        _val = v
    }

  1. 以下代码展示 astKind 设为 PrimaryCtorDecl 的案例。在这个参数下，可以使用 parseDecl 解析主构造函数节点，解析结果为 PrimaryCtorDecl 类型（如果不设置 astKind，则会因为没有 func 关键字而无法解析）。


    
    
    import std.ast.*
    
    main() {
        let ctor = quote(
            Point(var x: Int32, var y: Int32) {}
        )
        let ctorDecl = parseDecl(ctor, astKind: "PrimaryCtorDecl")
        println(ctorDecl is PrimaryCtorDecl)
        println(ctorDecl.toTokens())
    }

运行结果：
    
    
    true
    Point(var x: Int32, var y: Int32) {
    }

#### func parseDeclFragment(Tokens, Int64)
    
    
    public func parseDeclFragment(input: Tokens, startFrom!: Int64 = 0): (Decl, Int64)

功能：用于解析一组词法单元，获取一个 [Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) 类型的节点和继续解析节点的索引。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/rv3gSJQ1SoOUyaQAbJyAkA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=3FBAA17E7269C8AE11DE49F9C4C2CA728CCE95E9B816875078AECE8D92504789)

该函数不支持解析 [FuncParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-funcparam)、 [PropDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-propdecl)、[PrimaryCtorDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-primaryctordecl) 类型。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。
  * startFrom!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 起始位置。



返回值：

  * ([Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl), [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)) - 语法树节点，继续解析的位置。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) 节点时，抛出异常，异常中包含报错提示信息。



示例：
    
    
    import std.ast.*
    
    main() {
        let tokens = quote(
            func f0(x: Int64) { return x + 1 }
            func f1(x: Int64) { return x + 2 }
        )
        let (funcDecl0, mid) = parseDeclFragment(tokens)
    
        // 从第一个 FuncDecl 后继续
        let (funcDecl1, _) = parseDeclFragment(tokens, startFrom: mid)
    
        // 输出两次 parse 的结果
        println("funcDecl0.toTokens(): ${funcDecl0.toTokens()}")
        println("funcDecl1.toTokens(): ${funcDecl1.toTokens()}")
    }

运行结果：
    
    
    funcDecl0.toTokens(): func f0(x: Int64) {
        return x + 1
    }
    
    funcDecl1.toTokens(): func f1(x: Int64) {
        return x + 2
    }

#### func parseExpr(Tokens)
    
    
    public func parseExpr(input: Tokens): Expr

功能：用于解析一组词法单元，获取一个 [Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) 类型的节点。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。



返回值：

  * [Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) \- 一个 [Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) 类型的节点。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) 节点时，抛出异常，异常中包含报错提示信息。



示例：
    
    
    import std.ast.*
    
    main() {
        let expr = parseExpr(quote(a + b))
    
        // 输出 parse 的结果
        println("expr is BinaryExpr: ${expr is BinaryExpr}")
        println("expr.toTokens(): ${expr.toTokens()}")
    }

运行结果：
    
    
    expr is BinaryExpr: true
    expr.toTokens(): a + b

#### func parseExprFragment(Tokens, Int64)
    
    
    public func parseExprFragment(input: Tokens, startFrom!: Int64 = 0): (Expr, Int64)

功能：用于解析一组词法单元，获取一个 [Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) 类型的节点和继续解析节点的索引。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。
  * startFrom!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 起始位置。



返回值：

  * ([Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr), [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)) - 语法树节点，继续解析的位置。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) 节点时，抛出异常，异常中包含报错提示信息。



示例：
    
    
    import std.ast.*
    
    main() {
        let tokens = quote(a + b, c + d)
        let (binaryExpr0, mid) = parseExprFragment(tokens)
    
        // 跳过逗号
        let (binaryExpr1, _) = parseExprFragment(tokens, startFrom: mid + 1)
    
        // 输出两次 parse 的结果
        println("binaryExpr0.toTokens(): ${binaryExpr0.toTokens()}")
        println("binaryExpr1.toTokens(): ${binaryExpr1.toTokens()}")
    }

运行结果：
    
    
    binaryExpr0.toTokens(): a + b
    binaryExpr1.toTokens(): c + d

#### func parsePattern(Tokens)
    
    
    public func parsePattern(input: Tokens): Pattern

功能：用于解析一组词法单元，获取一个 [Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) 类型的节点。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。



返回值：

  * [Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) \- 一个 [Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) 类型的节点。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) 节点时，抛出异常，异常中包含报错提示信息。



示例：
    
    
    import std.ast.*
    
    main() {
        let pattern = parsePattern(quote((A(a), B(b))))
    
        // 输出 parse 的结果
        println("pattern is TuplePattern: ${pattern is TuplePattern}")
        println("pattern.toTokens(): ${pattern.toTokens()}")
    }

运行结果：
    
    
    pattern is TuplePattern: true
    pattern.toTokens(): (A(a), B(b))

#### func parsePatternFragment(Tokens, Int64)
    
    
    public func parsePatternFragment(input: Tokens, startFrom!: Int64 = 0): (Pattern, Int64)

功能：用于解析一组词法单元，获取一个 [Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) 类型的节点和继续解析节点的索引。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。
  * startFrom!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 起始位置。



返回值：

  * ([Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern), [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)) - 语法树节点，继续解析的位置。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) 节点时，抛出异常，异常中包含报错提示信息。



示例：
    
    
    import std.ast.*
    
    main() {
        let tokens = quote(case A(a) => println(a))
        let (enumPattern, mid) = parsePatternFragment(tokens, startFrom: 1)
    
        // 输出 parse 的结果
        println("enumPattern is EnumPattern: ${enumPattern is EnumPattern}")
        println("enumPattern.toTokens(): ${enumPattern.toTokens()}")
        println("mid: ${mid}")
    }

运行结果：
    
    
    enumPattern is EnumPattern: true
    enumPattern.toTokens(): A(a)
    mid: 5

#### func parseProgram(Tokens)
    
    
    public func parseProgram(input: Tokens): Program

功能：用于解析单个仓颉文件的源码，获取一个 [Program](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-program) 类型的节点。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/hA4bvgZ3Rc-G4P11z1Q0UQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=1858ADF7578187910680F92CCAF1D4FB24D2D3AD4A62E92502A6A20938425472)

仓颉宏展开后的代码不允许出现包的声明和包导入语句。使用该函数时，若输入的源码中包含包声明或包导入语句，输出的 [Program](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-program) 节点中也会包含(在 [packageHeader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#prop-packageheader) 和 [importLists](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#prop-importlists) 属性中)，因此不能在宏函数中直接将该节点返回为 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。



返回值：

  * [Program](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-program) \- 一个 [Program](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-program) 类型的节点。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [Program](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-program) 节点时，抛出异常，异常中包含报错提示信息。



示例：
    
    
    import std.ast.*
    
    main() {
        // 利用将一个 Program 转化为 Tokens
        let tokens = quote(
            macro package m
    
            internal import std.ast.*
            internal import base as mybase
    
            public macro M(input: Tokens) {
                return input
            }
        )
        let program = parseProgram(tokens)
        let importLists = program.importLists
    
        // 输出 parse 的结果
        println("importLists.size: ${importLists.size}")
        println("program.toTokens(): ${program.toTokens()}")
    }

运行结果：
    
    
    importLists.size: 2
    program.toTokens(): macro package m
    internal import std.ast.*
    internal import base as mybase
    public macro M(input: Tokens) {
        return input
    }

#### func parseType(Tokens)
    
    
    public func parseType(input: Tokens): TypeNode

功能：用于解析一组词法单元，获取一个 [TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) 类型的节点。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。



返回值：

  * [TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) \- 一个 [TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) 类型的节点。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) 节点时，抛出异常。



示例：
    
    
    import std.ast.*
    
    main() {
        let refType = parseType(quote(MyClass))
    
        // 输出 parse 的结果
        println("refType is RefType: ${refType is RefType}")
        println("refType.toTokens(): ${refType.toTokens()}")
    }

运行结果：
    
    
    refType is RefType: true
    refType.toTokens(): MyClass

#### func parseTypeFragment(Tokens, Int64)
    
    
    public func parseTypeFragment(input: Tokens, startFrom!: Int64 = 0): (TypeNode, Int64)

功能：用于解析一组词法单元，获取一个 [TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) 类型的节点和继续解析节点的索引。

参数：

  * input: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 待解析源码的词法单元。
  * startFrom!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 起始位置。



返回值：

  * ([TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode), [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)) - 语法树节点，继续解析的位置。



异常：

  * [ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) \- 当输入的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型无法构造为 [TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) 节点时，抛出异常。



示例：
    
    
    import std.ast.*
    
    main() {
        let tokens = quote(a is Int64)
        let (primitiveType, mid) = parseTypeFragment(tokens, startFrom: 2)
    
        // 输出 parse 的结果
        println("primitiveType is PrimitiveType: ${primitiveType is PrimitiveType}")
        println("primitiveType.toTokens(): ${primitiveType.toTokens()}")
        println("mid: ${mid}")
    }

运行结果：
    
    
    primitiveType is PrimitiveType: true
    primitiveType.toTokens(): Int64
    mid: 3

#### func setItem(String, Bool)
    
    
    public func setItem(key: String, value: Bool): Unit

功能：内层宏通过该接口发送 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的信息到外层宏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/QSHpyUi2TNyYtc-xynEcZA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=D0761A1CFE6C7DD3078ABE965BF2268A827530471D31AC46EBD7C3FF13303D6C)

该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 发送的关键字，用于检索信息。
  * value: [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 要发送的 [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) 类型的信息。



示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    import std.collection.ArrayList
    
    public macro inner(input: Tokens) {
        // 向外层宏发送 Bool 类型消息
        setItem("TrueFromInner", true)
        setItem("FalseFromInner", false)
        return input
    }
    
    public macro outer(input: Tokens) {
        // 获取名为 inner 的内层宏所发送的全部消息
        let messages = getChildMessages("inner")
    
        // 获取内层宏发送的 Bool 消息
        let msg0 = messages[0].getBool("TrueFromInner")
        let msg1 = messages[0].getBool("FalseFromInner")
    
        // 输出两个 Bool 类型消息
        println("Message 0 from inner-macro: ${msg0}")
        println("Message 1 from inner-macro: ${msg1}")
        return input
    }
    
    
    // 宏调用
    import M.*
    
    @outer(@inner(var a = 1))
    
    main() {
    }

运行结果：
    
    
    Message 0 from inner-macro: true
    Message 1 from inner-macro: false

#### func setItem(String, Int64)
    
    
    public func setItem(key: String, value: Int64): Unit

功能：内层宏通过该接口发送 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的信息到外层宏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/UIoAmIMVTU2N1M6Y1-zICA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=E75A4CD3C9DFBB4659B1E0B7EC975606A22A9D56C8FC0AE308937531ABA4B3F8)

该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 发送的关键字，用于检索信息。
  * value: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 要发送的 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) 类型的信息。



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
    
        // 获取内层宏发送的 Int64 消息
        let msg = messages[0].getInt64("Int64FromInner")
    
        // 输出 Int64 类型消息
        println("Message from inner-macro: ${msg}")
        return input
    }
    
    
    // 宏调用
    import M.*
    
    @outer(@inner(var a = 1))
    
    main() {
    }

运行结果：
    
    
    Message from inner-macro: 100

#### func setItem(String, String)
    
    
    public func setItem(key: String, value: String): Unit

功能：内层宏通过该接口发送 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 类型的信息到外层宏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/3W2jcBQITyqT5kvJNoCIVw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=01AA48D9A546F324F42EACF8B7CB6DB4D4C448FC6984CC4F9B39243A7A0EA46A)

该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 发送的关键字，用于检索信息。
  * value: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 要发送的 [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) 类型的信息。



示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    import std.collection.ArrayList
    
    public macro inner(input: Tokens) {
        // 向外层宏发送 String 类型消息
        setItem("StringFromInner", "message")
        return input
    }
    
    public macro outer(input: Tokens) {
        // 获取名为 inner 的内层宏所发送的全部消息
        let messages = getChildMessages("inner")
    
        // 获取内层宏发送的 String 消息
        let msg = messages[0].getString("StringFromInner")
    
        // 输出 String 类型消息
        println("Message from inner-macro: ${msg}")
        return input
    }
    
    
    // 宏调用
    import M.*
    
    @outer(@inner(var a = 1))
    
    main() {
    }

运行结果：
    
    
    Message from inner-macro: message

#### func setItem(String, Tokens)
    
    
    public func setItem(key: String, value: Tokens): Unit

功能：内层宏通过该接口发送 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型的信息到外层宏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/nC5sSA_TQVyfx5_WyPECDA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090158Z&HW-CC-Expire=86400&HW-CC-Sign=11B42A3345EDDE399322BDDDB020649D4A2FF63DD8BC4A15D0866A60C624AD20)

该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 发送的关键字，用于检索信息。
  * value: [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) \- 要发送的 [Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) 类型的信息。



示例：
    
    
    // 宏定义
    macro package M
    
    import std.ast.*
    import std.collection.ArrayList
    
    public macro inner(input: Tokens) {
        // 向外层宏发送 Tokens 类型消息
        setItem("TokensFromInner", quote(1 + 1))
        return input
    }
    
    public macro outer(input: Tokens) {
        // 获取名为 inner 的内层宏所发送的全部消息
        let messages = getChildMessages("inner")
    
        // 获取内层宏发送的 Tokens 消息
        let msg = messages[0].getTokens("TokensFromInner")
    
        // 输出 Tokens 类型消息
        println("Message from inner-macro: ${msg}")
        return input
    }
    
    
    // 宏调用
    import M.*
    
    @outer(@inner(var a = 1))
    
    main() {
    }

运行结果：
    
    
    Message from inner-macro: 1 + 1
