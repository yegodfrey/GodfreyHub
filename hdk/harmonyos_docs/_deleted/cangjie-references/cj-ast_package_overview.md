---
name: cangjie-references/cj-ast_package_overview
title: std.ast
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.ast
---

# std.ast

#### 功能介绍

ast 包主要包含了仓颉源码的语法解析器和仓颉语法树节点，提供语法解析函数。可将仓颉源码的词法单元（[Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens)）解析为抽象语法树（Abstract Syntax Tree）节点对象。

对于 ios 平台运行的场景，本包仅支持在 ios 12 及以上系统运行。

仓颉 ast 包提供了 Macro With Context 的相关函数，用于在宏展开时获取展开过程中的上下文相关信息。在嵌套宏场景下，内层宏可以调用库函数 [assertParentContext(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-assertparentcontextstring) 来保证内层宏调用一定嵌套在特定的外层宏调用中。如果内层宏调用这个函数时没有嵌套在给定的外层宏调用中，该函数将抛出一个错误。同时，函数 [insideParentContext(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-insideparentcontextstring) 也用于检查内层宏调用是否嵌套在特定的外层宏调用中，但是返回一个布尔值。Macro With Context 的相关函数只能作为函数被直接调用，不能赋值给变量，不能作为实参或返回值使用。

Macro With Context 相关函数如下：

  * [assertParentContext(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-assertparentcontextstring)
  * [getChildMessages(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-getchildmessagesstring)
  * [insideParentContext(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-insideparentcontextstring)
  * [setItem(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-bool)
  * [setItem(String, Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-int64)
  * [setItem(String, String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-string)
  * [setItem(String, Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-tokens)



#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[assertParentContext(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-assertparentcontextstring) | 检查当前宏调用是否在特定的宏调用内。若检查不符合预期，编译器出现一个错误提示。  
[cangjieLex(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-cangjielexstring) | 将字符串转换为 Tokens 类型。  
[cangjieLex(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-cangjielexstring-bool) | 将字符串转换为 Tokens 类型。  
[compareTokens(Tokens, Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-comparetokenstokens-tokens) | 用于比较两个 Tokens 是否一致。  
[diagReport(DiagReportLevel, Tokens, String, String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-diagreportdiagreportlevel-tokens-string-string) | 报错接口，在编译过程的宏展开阶段输出错误提示信息，支持 WARNING 和 ERROR 两个等级的报错。  
[getChildMessages(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-getchildmessagesstring) | 获取特定内层宏发送的信息。  
[getTokenKind(UInt16)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-gettokenkinduint16) | 将词法单元种类序号转化为 TokenKind。  
[insideParentContext(String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-insideparentcontextstring) | 检查当前宏调用是否在特定的宏调用内，返回一个布尔值。  
[parseDecl(Tokens, String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parsedecltokens-string) | 用于解析一组词法单元，获取一个 Decl 类型的节点。  
[parseDeclFragment(Tokens, Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parsedeclfragmenttokens-int64) | 用于解析一组词法单元，获取一个 Decl 类型的节点和继续解析节点的索引。  
[parseExpr(Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parseexprtokens) | 用于解析一组词法单元，获取一个 Expr 类型的节点。  
[parseExprFragment(Tokens, Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parseexprfragmenttokens-int64) | 用于解析一组词法单元，获取一个 Expr 类型的节点和继续解析节点的索引。  
[parsePattern(Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parsepatterntokens) | 用于解析一组词法单元，获取一个 Pattern 类型的节点。  
[parsePatternFragment(Tokens, Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parsepatternfragmenttokens-int64) | 用于解析一组词法单元，获取一个 Pattern 类型的节点和继续解析节点的索引。  
[parseProgram(Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parseprogramtokens) | 用于解析单个仓颉文件的源码，获取一个 Program 类型的节点。  
[parseType(Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parsetypetokens) | 用于解析一组词法单元，获取一个 TypeNode 类型的节点。  
[parseTypeFragment(Tokens, Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-parsetypefragmenttokens-int64) | 用于解析一组词法单元，获取一个 TypeNode 类型的节点和继续解析节点的索引。  
[setItem(String, Bool)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-bool) | 内层宏通过该接口发送 Bool 类型的信息到外层宏。  
[setItem(String, Int64)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-int64) | 内层宏通过该接口发送 Int64 类型的信息到外层宏。  
[setItem(String, String)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-string) | 内层宏通过该接口发送 String 类型的信息到外层宏。  
[setItem(String, Tokens)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs#func-setitemstring-tokens) | 内层宏通过该接口发送 Tokens 类型的信息到外层宏。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[ToBytes](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_interfaces#interface-tobytes) | 提供对应类型的序列化功能。  
[ToTokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_interfaces#interface-totokens) | 实现对应类型的实例到 Tokens 类型转换的接口，作为支持 quote 插值操作必须实现的接口。  
  
#### [h2]类

类名 | 功能  
---|---  
[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-annotation) | 表示编译器内置的注解节点。  
[Argument](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-argument) | 表示函数调用的实参节点。  
[ArrayLiteral](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-arrayliteral) | 表示 Array 字面量节点。  
[AsExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-asexpr) | 表示一个类型检查表达式。  
[AssignExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-assignexpr) | 表示赋值表达式节点。  
[BinaryExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-binaryexpr) | 表示一个二元操作表达式节点。  
[Block](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-block) | 表示块节点。  
[Body](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-body) | 表示 Class 类型、 Struct 类型、 Interface 类型以及扩展中由 {} 和内部的一组声明节点组成的结构。  
[CallExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-callexpr) | 表示函数调用节点节点。  
[ClassDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-classdecl) | 类定义节点。  
[CommandTypePattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-commandtypepattern) | 表示一个带有类型注解的命令模式。  
[ConstPattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-constpattern) | 表示常量模式节点。  
[Constructor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-constructor) | 表示 enum 类型中的 Constructor 节点。  
[Decl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-decl) | 所有声明节点的父类，继承自 Node 节点，提供了所有声明节点的通用接口。  
[DoWhileExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-dowhileexpr) | 表示 do-while 表达式。  
[EnumDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-enumdecl) | 表示一个 Enum 定义节点。  
[EnumPattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-enumpattern) | 表示 enum 模式节点。  
[ExceptTypePattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-excepttypepattern) | 表示一个用于异常模式状态下的节点。  
[Expr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-expr) | 所有表达式节点的父类，继承自 Node 节点。  
[ExtendDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-extenddecl) | 表示一个扩展定义节点。  
[FeatureId](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-featureid) | 表示一个 feature id。  
[FeaturesDirective](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-featuresdirective) | feature directive 节点对象。  
[FeaturesSet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-featuresset) | 一组 features 名称。  
[ForInExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-forinexpr) | 表示 for-in 表达式。  
[FuncDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-funcdecl) | 表示一个函数定义节点。  
[FuncParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-funcparam) | 表示函数参数节点，包括非命名参数和命名参数。  
[FuncType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-functype) | 表示函数类型节点。  
[GenericConstraint](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-genericconstraint) | 表示一个泛型约束节点。  
[GenericParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-genericparam) | 表示一个类型形参节点。  
[Handler](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-handler) | 表示一个 handle 子句。  
[IfExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-ifexpr) | 表示条件表达式。  
[ImportContent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-importcontent) | 表示包导入节点中的导入项。  
[ImportList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-importlist) | 表示包导入节点。  
[IncOrDecExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-incordecexpr) | 表示包含自增操作符（++）或自减操作符（--）的表达式。  
[InterfaceDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-interfacedecl) | 表示接口定义节点。  
[IsExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-isexpr) | 表示一个类型检查表达式。  
[JumpExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-jumpexpr) | 表示循环表达式的循环体中的 break 和 continue。  
[LambdaExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-lambdaexpr) | 表示 Lambda 表达式，是一个匿名的函数。  
[LetPatternExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-letpatternexpr) | 表示 let 声明的解构匹配节点。  
[LitConstExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-litconstexpr) | 表示一个常量表达式节点。  
[MacroDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macrodecl) | 表示一个宏定义节点。  
[MacroExpandDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macroexpanddecl) | 表示宏调用节点。  
[MacroExpandExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macroexpandexpr) | 表示宏调用节点。  
[MacroExpandParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macroexpandparam) | 表示宏调用节点。  
[MacroMessage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-macromessage) | 记录内层宏发送的信息。  
[MainDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-maindecl) | 表示一个 main 函数定义节点。  
[MatchCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-matchcase) | 表示 match 表达式中的一个 case 节点。  
[MatchExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-matchexpr) | 表示模式匹配表达式实现模式匹配。  
[MemberAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-memberaccess) | 表示成员访问表达式。  
[Modifier](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-modifier) | 表示该定义具备某些特性，通常放在定义处的最前端。  
[Node](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-node) | 所有仓颉语法树节点的父类。  
[OptionalExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-optionalexpr) | 表示一个带有问号操作符的表达式节点。  
[PackageHeader](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-packageheader) | 表示包声明节点。  
[ParenExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-parenexpr) | 表示一个括号表达式节点，是指使用圆括号括起来的表达式。  
[ParenType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-parentype) | 表示括号类型节点。  
[Pattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-pattern) | 所有模式匹配节点的父类，继承自 Node 节点。  
[PerformExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-performexpr) | 表示一个 perform 表达式节点。  
[PrefixType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-prefixtype) | 表示带问号的前缀类型节点。  
[PrimaryCtorDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-primaryctordecl) | 表示一个主构造函数节点。  
[PrimitiveType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-primitivetype) | 表示一个基本类型节点。  
[PrimitiveTypeExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-primitivetypeexpr) | 表示基本类型表达式节点。  
[Program](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-program) | 表示一个仓颉源码文件节点。  
[PropDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-propdecl) | 表示一个属性定义节点。  
[QualifiedType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-qualifiedtype) | 表示一个用户自定义成员类型。  
[QuoteExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-quoteexpr) | 表示 quote 表达式节点。  
[QuoteToken](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-quotetoken) | 表示 quote 表达式节点内任意合法的 token。  
[RangeExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-rangeexpr) | 表示包含区间操作符的表达式。  
[RefExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-refexpr) | 表示一个使用自定义类型节点相关的表达式节点。  
[RefType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-reftype) | 表示一个用户自定义类型节点。  
[ResumeExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-resumeexpr) | 表示一个 resume 表达式节点。  
[ReturnExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-returnexpr) | 表示 return 表达式节点。  
[SpawnExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-spawnexpr) | 表示 Spawn 表达式。  
[StructDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-structdecl) | 表示一个 Struct 节点。  
[SubscriptExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-subscriptexpr) | 表示索引访问表达式。  
[SynchronizedExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-synchronizedexpr) | 表示 synchronized 表达式。  
[ThisType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-thistype) | 表示 This 类型节点。  
[ThrowExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-throwexpr) | 表示 throw 表达式节点。  
[Tokens](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokens) | 对 Token 序列进行封装的类型。  
[TokensIterator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tokensiterator) | 实现 Tokens 的迭代器功能。  
[TrailingClosureExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-trailingclosureexpr) | 表示尾随 Lambda 节点。  
[TryExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tryexpr) | 表示 try 表达式节点。  
[TupleLiteral](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tupleliteral) | 表示元组字面量节点。  
[TuplePattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tuplepattern) | 表示 Tuple 模式节点。  
[TupleType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-tupletype) | 表示元组类型节点。  
[TypeAliasDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typealiasdecl) | 表示类型别名节点。  
[TypeConvExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typeconvexpr) | 表示类型转换表达式。  
[TypeNode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typenode) | 所有类型节点的父类，继承自 Node。  
[TypePattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-typepattern) | 表示类型模式节点。  
[UnaryExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-unaryexpr) | 表示一个一元操作表达式节点。  
[VArrayExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-varrayexpr) | 表示 VArray 的实例节点。  
[VArrayType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-varraytype) | 表示 VArray 类型节点。  
[VarDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-vardecl) | 表示变量定义节点。  
[VarOrEnumPattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-varorenumpattern) | 表示当模式的标识符为 Enum 构造器时的节点。  
[VarPattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-varpattern) | 表示绑定模式节点。  
[Visitor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-visitor) | 一个抽象类，其内部默认定义了访问不同类型 AST 节点访问（visit）函数。  
[WhileExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-whileexpr) | 表示 while 表达式。  
[WildcardExpr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-wildcardexpr) | 表示通配符表达式节点。  
[WildcardPattern](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-wildcardpattern) | 表示通配符模式节点。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[DiagReportLevel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-diagreportlevel) | 表示报错接口的信息等级，支持 ERROR 和 WARNING 两种格式。  
[ImportKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-importkind) | 表示导入语句的类型，包括单导入、别名导入、全导入和多导入四种类型。  
[TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) | 表示仓颉编译内部所有的词法结构，包括符号、关键字、标识符、换行等。  
  
#### [h2]结构体

结构体名 | 功能  
---|---  
[Position](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-position) | 表示位置信息的数据结构，包含文件 ID、行号和列号。  
[Token](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs#struct-token) | 词法单元类型。  
  
#### [h2]异常类

异常类名 | 功能  
---|---  
[ASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-astexception) | ast 库的异常类，在 ast 库调用过程中发生异常时使用。  
[MacroContextException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-macrocontextexception) | ast 库的上下文宏异常类，在上下文宏的相关接口中发生异常时使用。  
[ParseASTException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions#class-parseastexception) | ast 库的解析异常类，在节点解析过程中发生异常时使用。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_funcs)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums)**  

  * **[结构体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_structs)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast-samples)**  



