---
name: cangjie-references/cj-ast_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.ast / 枚举
---

# 枚举

#### enum DiagReportLevel
    
    
    public enum DiagReportLevel {
        | ERROR
        | WARNING
    }

功能：表示报错接口的信息等级，支持 ERROR 和 WARNING 两种等级。

#### [h2]ERROR
    
    
    ERROR

功能：构造一个表示 ERROR 的枚举实例。

#### [h2]WARNING
    
    
    WARNING

功能：构造一个表示 WARNING 的枚举实例。

#### [h2]func level()
    
    
    public func level(): Int32

功能：返回枚举值对应的整型。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 枚举值对应的整型。ERROR 返回 0，WARNING 返回 1。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 创建 DiagReportLevel
        let levelError = DiagReportLevel.ERROR
        let levelWarning = DiagReportLevel.WARNING
    
        // 输出枚举值对应的整型值
        println("levelError.level(): ${levelError.level()}")
        println("levelWarning.level(): ${levelWarning.level()}")
    }

运行结果：
    
    
    levelError.level(): 0
    levelWarning.level(): 1

#### enum ImportKind
    
    
    public enum ImportKind <: ToString {
        | Single
        | Alias
        | All
        | Multi
    }

功能：表示导入语句的类型。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]Alias
    
    
    Alias

功能：表示别名导入，如 import a.b as c。

#### [h2]All
    
    
    All

功能：表示全导入，如 import a.b.*。

#### [h2]Multi
    
    
    Multi

功能：表示多导入，如 import a.{b, c, d}。

#### [h2]Single
    
    
    Single

功能：表示单导入，如 import a.b。

#### [h2]func toString()
    
    
    public func toString(): String

功能：将 [ImportKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-importkind) 类型转化为字符串类型表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- [ImportKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-importkind) 转换后的字符串值。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 创建 ImportKind
        let kind0 = ImportKind.Alias
        let kind1 = ImportKind.All
        let kind2 = ImportKind.Multi
        let kind3 = ImportKind.Single
    
        // 输出枚举值的字符串表示
        println("kind0.toString(): ${kind0.toString()}")
        println("kind1.toString(): ${kind1.toString()}")
        println("kind2.toString(): ${kind2.toString()}")
        println("kind3.toString(): ${kind3.toString()}")
    }

运行结果：
    
    
    kind0.toString(): Alias
    kind1.toString(): All
    kind2.toString(): Multi
    kind3.toString(): Single

#### enum TokenKind
    
    
    public enum TokenKind <: ToString {
        | DOT /*  "."           */
        | COMMA /*  ","           */
        | LPAREN /*  "("           */
        | RPAREN /*  ")"           */
        | LSQUARE /*  "["           */
        | RSQUARE /*  "]"           */
        | LCURL /*  "{"           */
        | RCURL /*  "}"           */
        | EXP /*  "**"          */
        | MUL /*  "*"           */
        | MOD /*  "%"           */
        | DIV /*  "/"           */
        | ADD /*  "+"           */
        | SUB /*  "-"           */
        | INCR /*  "++"          */
        | DECR /*  "--"          */
        | AND /*  "&&"          */
        | OR /*  "||"          */
        | COALESCING /*  "??"          */
        | PIPELINE /*  "|>"          */
        | COMPOSITION /*  "~>"          */
        | NOT /*  "!"           */
        | BITAND /*  "&"           */
        | BITOR /*  "|"           */
        | BITXOR /*  "^"           */
        | BITNOT /*  "~"           */
        | LSHIFT /*  "<<"          */
        | RSHIFT /*  ">>"          */
        | COLON /*  ":"           */
        | SEMI /*  ";"           */
        | ASSIGN /*  "="           */
        | ADD_ASSIGN /*  "+="          */
        | SUB_ASSIGN /*  "-="          */
        | MUL_ASSIGN /*  "*="          */
        | EXP_ASSIGN /*  "**="         */
        | DIV_ASSIGN /*  "/="          */
        | MOD_ASSIGN /*  "%="          */
        | AND_ASSIGN /*  "&&="         */
        | OR_ASSIGN /*  "||="         */
        | BITAND_ASSIGN /*  "&="          */
        | BITOR_ASSIGN /*  "|="          */
        | BITXOR_ASSIGN /*  "^="          */
        | LSHIFT_ASSIGN /*  "<<="         */
        | RSHIFT_ASSIGN /*  ">>="         */
        | ARROW /*  "->"          */
        | BACKARROW /*  "<-"          */
        | DOUBLE_ARROW /*  "=>"          */
        | RANGEOP /*  ".."          */
        | CLOSEDRANGEOP /*  "..="         */
        | ELLIPSIS /*  "..."         */
        | HASH /*  "#"           */
        | AT /*  "@"           */
        | QUEST /*  "?"           */
        | LT /*  "<"           */
        | GT /*  ">"           */
        | LE /*  "<="          */
        | GE /*  ">="          */
        | IS /*  "is"          */
        | AS /*  "as"          */
        | NOTEQ /*  "!="          */
        | EQUAL /*  "=="          */
        | WILDCARD /*  "_"           */
        | INT8 /*  "Int8"        */
        | INT16 /*  "Int16"       */
        | INT32 /*  "Int32"       */
        | INT64 /*  "Int64"       */
        | INTNATIVE /*  "IntNative"   */
        | UINT8 /*  "UInt8"       */
        | UINT16 /*  "UInt16"      */
        | UINT32 /*  "UInt32"      */
        | UINT64 /*  "UInt64"      */
        | UINTNATIVE /*  "UIntNative"  */
        | FLOAT16 /*  "Float16"     */
        | FLOAT32 /*  "Float32"     */
        | FLOAT64 /*  "Float64"     */
        | RUNE /*  "Rune"        */
        | BOOLEAN /*  "Bool"        */
        | NOTHING /*  "Nothing"     */
        | UNIT /*  "Unit"        */
        | STRUCT /*  "struct"      */
        | ENUM /*  "enum"        */
        | VARRAY /*  "VArray"      */
        | THISTYPE /*  "This"        */
        | PACKAGE /*  "package"     */
        | IMPORT /*  "import"      */
        | CLASS /*  "class"       */
        | INTERFACE /*  "interface"   */
        | FUNC /*  "func"        */
        | MACRO /*  "macro"       */
        | QUOTE /*  "quote"       */
        | DOLLAR /*  "$"           */
        | LET /*  "let"         */
        | VAR /*  "var"         */
        | CONST /*  "const"       */
        | TYPE /*  "type"        */
        | INIT /*  "init"        */
        | THIS /*  "this"        */
        | SUPER /*  "super"       */
        | IF /*  "if"          */
        | ELSE /*  "else"        */
        | CASE /*  "case"        */
        | TRY /*  "try"         */
        | CATCH /*  "catch"       */
        | FINALLY /*  "finally"     */
        | FOR /*  "for"         */
        | DO /*  "do"          */
        | WHILE /*  "while"       */
        | THROW /*  "throw"       */
        | RETURN /*  "return"      */
        | CONTINUE /*  "continue"    */
        | BREAK /*  "break"       */
        | IN /*  "in"          */
        | NOT_IN /*  "!in"         */
        | MATCH /*  "match"       */
        | WHERE /*  "where"       */
        | EXTEND /*  "extend"      */
        | WITH /*  "with"        */
        | PROP /*  "prop"        */
        | STATIC /*  "static"      */
        | PUBLIC /*  "public"      */
        | PRIVATE /*  "private"     */
        | INTERNAL /*  "internal"    */
        | PROTECTED /*  "protected"   */
        | OVERRIDE /*  "override"    */
        | REDEF /*  "redef"       */
        | ABSTRACT /*  "abstract"    */
        | SEALED /*  "sealed"      */
        | OPEN /*  "open"        */
        | FOREIGN /*  "foreign"     */
        | INOUT /*  "inout"       */
        | MUT /*  "mut"         */
        | UNSAFE /*  "unsafe"      */
        | OPERATOR /*  "operator"    */
        | SPAWN /*  "spawn"       */
        | SYNCHRONIZED /*  "synchronized" */
        | UPPERBOUND /*  "<:"          */
        | MAIN /*  "main"        */
        | IDENTIFIER /*  "x"           */
        | PACKAGE_IDENTIFIER /*  e.g. "x-y"    */
        | INTEGER_LITERAL /*  e.g. "1"      */
        | RUNE_BYTE_LITERAL /*  e.g. "b'x'"   */
        | FLOAT_LITERAL /*  e.g. "'1.0'"  */
        | COMMENT /*  e.g. "/*xx*/" */
        | NL /*  newline       */
        | END /*  end of file   */
        | SENTINEL /*  ";"           */
        | RUNE_LITERAL /*  e.g. "r'x'"   */
        | STRING_LITERAL /*  e.g. ""xx""   */
        | SINGLE_QUOTED_STRING_LITERAL /*  e.g. "'xx'"   */
        | JSTRING_LITERAL /*  e.g. "J"xx""  */
        | MULTILINE_STRING /*  e.g. """"aaa"""" */
        | MULTILINE_RAW_STRING /*  e.g. "#"aaa"#" */
        | BOOL_LITERAL /*  "true" or "false" */
        | UNIT_LITERAL /*  "()"          */
        | DOLLAR_IDENTIFIER /*  e.g. "$x"     */
        | ANNOTATION /*  e.g. "@When"  */
        | AT_EXCL /*  e.g. "@!"     */
        | ILLEGAL
        | COMMON /*  "common"       */
        | SPECIFIC /*  "specific"     */
        | HANDLE /*  "handle"      */
        | PERFORM /*  "perform"     */
        | RESUME /*  "resume"      */
        | THROWING /*  "throwing"    */
        | DOUBLE_COLON /*  "::"          */
        | FEATURES /*  "features"    */
        | ...
    }

功能：表示仓颉编译内部所有的词法结构，包括符号、关键字、标识符、换行等。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]ABSTRACT
    
    
    ABSTRACT

功能：构造一个表示 abstract 的枚举实例。

#### [h2]ADD
    
    
    ADD

功能：构造一个表示 + 的枚举实例。

#### [h2]ADD_ASSIGN
    
    
    ADD_ASSIGN

功能：构造一个表示 += 的枚举实例。

#### [h2]AND
    
    
    AND

功能：构造一个表示 && 的枚举实例。

#### [h2]AND_ASSIGN
    
    
    AND_ASSIGN

功能：构造一个表示 &&= 的枚举实例。

#### [h2]ANNOTATION
    
    
    ANNOTATION

功能：构造一个表示注解的枚举实例。

#### [h2]ARROW
    
    
    ARROW

功能：构造一个表示 -> 的枚举实例。

#### [h2]AS
    
    
    AS

功能：构造一个表示 as 的枚举实例。

#### [h2]ASSIGN
    
    
    ASSIGN

功能：构造一个表示 = 的枚举实例。

#### [h2]AT
    
    
    AT

功能：构造一个表示 @ 的枚举实例。

#### [h2]AT_EXCL
    
    
    AT_EXCL

功能：构造一个表示 @! 的枚举实例。

#### [h2]BACKARROW
    
    
    BACKARROW

功能：构造一个表示 <\- 的枚举实例。

#### [h2]BITAND
    
    
    BITAND

功能：构造一个表示 & 的枚举实例。

#### [h2]BITAND_ASSIGN
    
    
    BITAND_ASSIGN

功能：构造一个表示 &= 的枚举实例。

#### [h2]BITNOT
    
    
    BITNOT

功能：构造一个表示 ~ 的枚举实例。

#### [h2]BITOR
    
    
    BITOR

功能：构造一个表示 | 的枚举实例。

#### [h2]BITOR_ASSIGN
    
    
    BITOR_ASSIGN

功能：构造一个表示 |= 的枚举实例。

#### [h2]BITXOR
    
    
    BITXOR

功能：构造一个表示 ^ 的枚举实例。

#### [h2]BITXOR_ASSIGN
    
    
    BITXOR_ASSIGN

功能：构造一个表示 ^= 的枚举实例。

#### [h2]BOOL_LITERAL
    
    
    BOOL_LITERAL

功能：构造一个表示布尔类型字面量的枚举实例。

#### [h2]BOOLEAN
    
    
    BOOLEAN

功能：构造一个表示 bool 的枚举实例。

#### [h2]BREAK
    
    
    BREAK

功能：构造一个表示 break 的枚举实例。

#### [h2]CASE
    
    
    CASE

功能：构造一个表示 case 的枚举实例。

#### [h2]CATCH
    
    
    CATCH

功能：构造一个表示 catch 的枚举实例。

#### [h2]CLASS
    
    
    CLASS

功能：构造一个表示 class 的枚举实例。

#### [h2]CLOSEDRANGEOP
    
    
    CLOSEDRANGEOP

功能：构造一个表示 ..= 的枚举实例。

#### [h2]COALESCING
    
    
    COALESCING

功能：构造一个表示 ?? 的枚举实例。

#### [h2]COLON
    
    
    COLON

功能：构造一个表示 : 的枚举实例。

#### [h2]COMMA
    
    
    COMMA

功能：构造一个表示 , 的枚举实例。

#### [h2]COMMON
    
    
    COMMON

功能：构造一个表示 common 关键字的枚举实例。

#### [h2]COMMENT
    
    
    COMMENT

功能：构造一个表示注释的枚举实例。

#### [h2]COMPOSITION
    
    
    COMPOSITION

功能：构造一个表示 ~> 的枚举实例。

#### [h2]CONST
    
    
    CONST

功能：构造一个表示 const 的枚举实例。

#### [h2]CONTINUE
    
    
    CONTINUE

功能：构造一个表示 continue 的枚举实例。

#### [h2]DECR
    
    
    DECR

功能：构造一个表示 -- 的枚举实例。

#### [h2]DIV
    
    
    DIV

功能：构造一个表示 / 的枚举实例。

#### [h2]DIV_ASSIGN
    
    
    DIV_ASSIGN

功能：构造一个表示 /= 的枚举实例。

#### [h2]DO
    
    
    DO

功能：构造一个表示 do 的枚举实例。

#### [h2]DOLLAR
    
    
    DOLLAR

功能：构造一个表示 $ 的枚举实例。

#### [h2]DOLLAR_IDENTIFIER
    
    
    DOLLAR_IDENTIFIER

功能：构造一个表示插值字符串的枚举实例。

#### [h2]DOT
    
    
    DOT

功能：构造一个表示 . 的枚举实例。

#### [h2]DOUBLE_ARROW
    
    
    DOUBLE_ARROW

功能：构造一个表示 => 的枚举实例。

#### [h2]DOUBLE_COLON
    
    
    DOUBLE_COLON

功能：构造一个表示 :: 的枚举实例。

#### [h2]ELLIPSIS
    
    
    ELLIPSIS

功能：构造一个表示 ... 的枚举实例。

#### [h2]ELSE
    
    
    ELSE

功能：构造一个表示 else 的枚举实例。

#### [h2]END
    
    
    END

功能：构造一个表示 EOF 的枚举实例。

#### [h2]ENUM
    
    
    ENUM

功能：构造一个表示 enum 的枚举实例。

#### [h2]EQUAL
    
    
    EQUAL

功能：构造一个表示 == 的枚举实例。

#### [h2]EXP
    
    
    EXP

功能：构造一个表示 ** 的枚举实例。

#### [h2]EXP_ASSIGN
    
    
    EXP_ASSIGN

功能：构造一个表示 **= 的枚举实例。

#### [h2]EXTEND
    
    
    EXTEND

功能：构造一个表示 extend 的枚举实例。

#### [h2]FINALLY
    
    
    FINALLY

功能：构造一个表示 finally 的枚举实例。

#### [h2]FEATURES
    
    
    FEATURES

功能：构造一个表示 features 关键字的枚举实例。

#### [h2]FLOAT16
    
    
    FLOAT16

功能：构造一个表示 float16 的枚举实例。

#### [h2]FLOAT32
    
    
    FLOAT32

功能：构造一个表示 float32 的枚举实例。

#### [h2]FLOAT64
    
    
    FLOAT64

功能：构造一个表示 float64 的枚举实例。

#### [h2]FLOAT_LITERAL
    
    
    FLOAT_LITERAL

功能：构造一个表示浮点字面量的枚举实例。

#### [h2]FOR
    
    
    FOR

功能：构造一个表示 for 的枚举实例。

#### [h2]FOREIGN
    
    
    FOREIGN

功能：构造一个表示 foreign 的枚举实例。

#### [h2]FUNC
    
    
    FUNC

功能：构造一个表示 func 的枚举实例。

#### [h2]GE
    
    
    GE

功能：构造一个表示 >= 的枚举实例。

#### [h2]GT
    
    
    GT

功能：构造一个表示 > 的枚举实例。

#### [h2]HANDLE
    
    
    HANDLE

功能：构造一个表示 handle 的枚举实例。

#### [h2]HASH
    
    
    HASH

功能：构造一个表示 # 的枚举实例。

#### [h2]IDENTIFIER
    
    
    IDENTIFIER

功能：构造一个表示标识符的枚举实例。

#### [h2]IF
    
    
    IF

功能：构造一个表示 if 的枚举实例。

#### [h2]ILLEGAL
    
    
    ILLEGAL

功能：构造一个表示非法的枚举实例。

#### [h2]IMPORT
    
    
    IMPORT

功能：构造一个表示 import 的枚举实例。

#### [h2]IN
    
    
    IN

功能：构造一个表示 in 的枚举实例。

#### [h2]INCR
    
    
    INCR

功能：构造一个表示 ++ 的枚举实例。

#### [h2]INIT
    
    
    INIT

功能：构造一个表示 init 的枚举实例。

#### [h2]INOUT
    
    
    INOUT

功能：构造一个表示 inout 的枚举实例。

#### [h2]INT16
    
    
    INT16

功能：构造一个表示 int16 的枚举实例。

#### [h2]INT32
    
    
    INT32

功能：构造一个表示 int32 的枚举实例。

#### [h2]INT64
    
    
    INT64

功能：构造一个表示 int64 的枚举实例。

#### [h2]INT8
    
    
    INT8

功能：构造一个表示 int8 的枚举实例。

#### [h2]INTEGER_LITERAL
    
    
    INTEGER_LITERAL

功能：构造一个表示整型字面量的枚举实例。

#### [h2]INTERFACE
    
    
    INTERFACE

功能：构造一个表示 interface 的枚举实例。

#### [h2]INTERNAL
    
    
    INTERNAL

功能：构造一个表示 internal 的枚举实例。

#### [h2]INTNATIVE
    
    
    INTNATIVE

功能：构造一个表示 intnative 的枚举实例。

#### [h2]IS
    
    
    IS

功能：构造一个表示 is 的枚举实例。

#### [h2]JSTRING_LITERAL
    
    
    JSTRING_LITERAL

功能：构造一个表示 Java String 字面量的枚举实例。

#### [h2]LCURL
    
    
    LCURL

功能：构造一个表示 { 的枚举实例。

#### [h2]LE
    
    
    LE

功能：构造一个表示 <= 的枚举实例。

#### [h2]LET
    
    
    LET

功能：构造一个表示 let 的枚举实例。

#### [h2]LPAREN
    
    
    LPAREN

功能：构造一个表示 ( 的枚举实例。

#### [h2]LSHIFT
    
    
    LSHIFT

功能：构造一个表示 << 的枚举实例。

#### [h2]LSHIFT_ASSIGN
    
    
    LSHIFT_ASSIGN

功能：构造一个表示 <<= 的枚举实例。

#### [h2]LSQUARE
    
    
    LSQUARE

功能：构造一个表示 [ 的枚举实例。

#### [h2]LT
    
    
    LT

功能：构造一个表示 < 的枚举实例。

#### [h2]MACRO
    
    
    MACRO

功能：构造一个表示 macro 的枚举实例。

#### [h2]MAIN
    
    
    MAIN

功能：构造一个表示 main 的枚举实例。

#### [h2]MATCH
    
    
    MATCH

功能：构造一个表示 match 的枚举实例。

#### [h2]MOD
    
    
    MOD

功能：构造一个表示 % 的枚举实例。

#### [h2]MOD_ASSIGN
    
    
    MOD_ASSIGN

功能：构造一个表示 %= 的枚举实例。

#### [h2]MUL
    
    
    MUL

功能：构造一个表示 * 的枚举实例。

#### [h2]MUL_ASSIGN
    
    
    MUL_ASSIGN

功能：构造一个表示 *= 的枚举实例。

#### [h2]MULTILINE_RAW_STRING
    
    
    MULTILINE_RAW_STRING

功能：构造一个表示多行原始字符串字面量的枚举实例。

#### [h2]MULTILINE_STRING
    
    
    MULTILINE_STRING

功能：构造一个表示多行字符串字面量的枚举实例。

#### [h2]MUT
    
    
    MUT

功能：构造一个表示 mut 的枚举实例。

#### [h2]NL
    
    
    NL

功能：构造一个表示换行符的枚举实例。

#### [h2]NOT
    
    
    NOT

功能：构造一个表示 ! 的枚举实例。

#### [h2]NOT_IN
    
    
    NOT_IN

功能：构造一个表示 !in 的枚举实例。

#### [h2]NOTEQ
    
    
    NOTEQ

功能：构造一个表示 != 的枚举实例。

#### [h2]NOTHING
    
    
    NOTHING

功能：构造一个表示 nothing 的枚举实例。

#### [h2]OPEN
    
    
    OPEN

功能：构造一个表示 open 的枚举实例。

#### [h2]OPERATOR
    
    
    OPERATOR

功能：构造一个表示 operator 的枚举实例。

#### [h2]OR
    
    
    OR

功能：构造一个表示 || 的枚举实例。

#### [h2]OR_ASSIGN
    
    
    OR_ASSIGN

功能：构造一个表示 ||= 的枚举实例。

#### [h2]OVERRIDE
    
    
    OVERRIDE

功能：构造一个表示 override 的枚举实例。

#### [h2]PACKAGE
    
    
    PACKAGE

功能：构造一个表示 package 的枚举实例。

#### [h2]PACKAGE_IDENTIFIER
    
    
    PACKAGE_IDENTIFIER

功能：构造一个表示包标识符的枚举实例。

#### [h2]PERFORM
    
    
    PERFORM

功能：构造一个表示 perform 的枚举实例。

#### [h2]PIPELINE
    
    
    PIPELINE

功能：构造一个表示 |> 的枚举实例。

#### [h2]PRIVATE
    
    
    PRIVATE

功能：构造一个表示 private 的枚举实例。

#### [h2]PROP
    
    
    PROP

功能：构造一个表示 prop 的枚举实例。

#### [h2]PROTECTED
    
    
    PROTECTED

功能：构造一个表示 protected 的枚举实例。

#### [h2]PUBLIC
    
    
    PUBLIC

功能：构造一个表示 public 的枚举实例。

#### [h2]QUEST
    
    
    QUEST

功能：构造一个表示 ? 的枚举实例。

#### [h2]QUOTE
    
    
    QUOTE

功能：构造一个表示 quote 的枚举实例。

#### [h2]RANGEOP
    
    
    RANGEOP

功能：构造一个表示 .. 的枚举实例。

#### [h2]RCURL
    
    
    RCURL

功能：构造一个表示 } 的枚举实例。

#### [h2]REDEF
    
    
    REDEF

功能：构��一个表示 redef 的枚举实例。

#### [h2]RESUME
    
    
    RESUME

功能：构造一个表示 resume 的枚举实例。

#### [h2]RETURN
    
    
    RETURN

功能：构造一个表示 return 的枚举实例。

#### [h2]RPAREN
    
    
    RPAREN

功能：构造一个表示 ) 的枚举实例。

#### [h2]RSHIFT
    
    
    RSHIFT

功能：构造一个表示 >> 的枚举实例。

#### [h2]RSHIFT_ASSIGN
    
    
    RSHIFT_ASSIGN

功能：构造一个表示 >>= 的枚举实例。

#### [h2]RSQUARE
    
    
    RSQUARE

功能：构造一个表示 ] 的枚举实例。

#### [h2]RUNE
    
    
    RUNE

功能：构造一个表示 Rune 的枚举实例。

#### [h2]RUNE_BYTE_LITERAL
    
    
    RUNE_BYTE_LITERAL

功能：构造一个表示字符字节字面量的枚举实例。

#### [h2]RUNE_LITERAL
    
    
    RUNE_LITERAL

功能：构造一个表示字符字面量的枚举实例。

#### [h2]SEALED
    
    
    SEALED

功能：构造一个表示 sealed 的枚举实例。

#### [h2]SEMI
    
    
    SEMI

功能：构造一个表示 ; 的枚举实例。

#### [h2]SENTINEL
    
    
    SENTINEL

功能：构造一个表示 ; 的枚举实例。

#### [h2]SINGLE_QUOTED_STRING_LITERAL
    
    
    SINGLE_QUOTED_STRING_LITERAL

功能：构造一个表示单引号字符串字面量的枚举实例。

#### [h2]SPAWN
    
    
    SPAWN

功能：构造一个表示 spawn 的枚举实例。

#### [h2]STATIC
    
    
    STATIC

功能：构造一个表示 static 的枚举实例。

#### [h2]STRING_LITERAL
    
    
    STRING_LITERAL

功能：构造一个表示双引号字符串字面量的枚举实例。

#### [h2]STRUCT
    
    
    STRUCT

功能：构造一个表示 struct 的枚举实例。

#### [h2]SUB
    
    
    SUB

功能：构造一个表示 - 的枚举实例。

#### [h2]SUB_ASSIGN
    
    
    SUB_ASSIGN

功能：构造一个表示 -= 的枚举实例。

#### [h2]SUPER
    
    
    SUPER

功能：构造一个表示 super 的枚举实例。

#### [h2]SYNCHRONIZED
    
    
    SYNCHRONIZED

功能：构造一个表示 synchronized 的枚举实例。

#### [h2]SPECIFIC
    
    
    SPECIFIC

功能：构造一个表示 specific 的枚举实例。

#### [h2]THIS
    
    
    THIS

功能：构造一个表示 this 的枚举实例。

#### [h2]THISTYPE
    
    
    THISTYPE

功能：构造一个表示 This 的枚举实例。

#### [h2]THROW
    
    
    THROW

功能：构造一个表示 throw 的枚举实例。

#### [h2]THROWING
    
    
    THROWING

功能：构造一个表示 throwing 的枚举实例。

#### [h2]TRY
    
    
    TRY

功能：构造一个表示 try 的枚举实例。

#### [h2]TYPE
    
    
    TYPE

功能：构造一个表示 type 的枚举实例。

#### [h2]UINT16
    
    
    UINT16

功能：构造一个表示 uint16 的枚举实例。

#### [h2]UINT32
    
    
    UINT32

功能：构造一个表示 uint32 的枚举实例。

#### [h2]UINT64
    
    
    UINT64

功能：构造一个表示 uint64 的枚举实例。

#### [h2]UINT8
    
    
    UINT8

功能：构造一个表示 uint8 的枚举实例。

#### [h2]UINTNATIVE
    
    
    UINTNATIVE

功能：构造一个表示 uintnative 的枚举实例。

#### [h2]UNIT
    
    
    UNIT

功能：构造一个表示 unit 的枚举实例。

#### [h2]UNIT_LITERAL
    
    
    UNIT_LITERAL

功能：构造一个表示 unit 字面量的枚举实例。

#### [h2]UNSAFE
    
    
    UNSAFE

功能：构造一个表示 unsafe 的枚举实例。

#### [h2]UPPERBOUND
    
    
    UPPERBOUND

功能：构造一个表示 <: 的枚举实例。

#### [h2]VAR
    
    
    VAR

功能：构造一个表示 var 的枚举实例。

#### [h2]VARRAY
    
    
    VARRAY

功能：构造一个表示 varray 的枚举实例。

#### [h2]WHERE
    
    
    WHERE

功能：构造一个表示 where 的枚举实例。

#### [h2]WHILE
    
    
    WHILE

功能：构造一个表示 while 的枚举实例。

#### [h2]WILDCARD
    
    
    WILDCARD

功能：构造一个表示 _ 的枚举实例。

#### [h2]WITH
    
    
    WITH

功能：构造一个表示 with 的枚举实例。

#### [h2]operator func !=(TokenKind)
    
    
    public operator func !=(right: TokenKind): Bool

功能：重载不等号操作符，用于比较两个 [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) 是否相等。

参数：

  * right: [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) \- 待比较的枚举实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 布尔类型。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 创建 TokenKind
        let identifierKind = TokenKind.IDENTIFIER
        let atExclKind = TokenKind.AT_EXCL
    
        println("identifierKind != identifierKind: ${identifierKind != identifierKind}")
        println("identifierKind != atExclKind: ${identifierKind != atExclKind}")
    }

运行结果：
    
    
    identifierKind != identifierKind: false
    identifierKind != atExclKind: true

#### [h2]operator func ==(TokenKind)
    
    
    public operator func ==(right: TokenKind): Bool

功能：重载等号操作符，用于比较两个 [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) 是否相等。

参数：

  * right: [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) \- 待比较的枚举实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 布尔类型。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 创建 TokenKind
        let identifierKind = TokenKind.IDENTIFIER
        let atExclKind = TokenKind.AT_EXCL
    
        println("identifierKind == identifierKind: ${identifierKind == identifierKind}")
        println("identifierKind == atExclKind: ${identifierKind == atExclKind}")
    }

运行结果：
    
    
    identifierKind == identifierKind: true
    identifierKind == atExclKind: false

#### [h2]func toString()
    
    
    public func toString(): String

功能：将 [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) 类型转化为字符串类型表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- [TokenKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_enums#enum-tokenkind) 转换后的字符串值。



示例：
    
    
    import std.ast.*
    
    main(): Unit {
        // 创建 TokenKind
        let identifierKind = TokenKind.IDENTIFIER
        let atExclKind = TokenKind.AT_EXCL
    
        println("identifierKind.toString(): ${identifierKind.toString()}")
        println("atExclKind.toString(): ${atExclKind.toString()}")
    }

运行结果：
    
    
    identifierKind.toString(): IDENTIFIER
    atExclKind.toString(): AT_EXCLAMATION
