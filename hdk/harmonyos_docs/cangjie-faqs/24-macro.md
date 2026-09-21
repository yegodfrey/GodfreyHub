---
name: cangjie-faqs/24-macro
title: 仓颉语言如何使用宏进行元编程
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/24-macro
nodePath: FAQ / 语法 / 仓颉语言如何使用宏进行元编程
---

# 仓颉语言如何使用宏进行元编程

仓颉语言提供宏（Macro）机制，允许开发者在编译时对程序代码进行变换和生成，实现元编程能力。宏须声明在专用的宏包（macro package）中，且宏定义和调用须在不同包中。

#### 宏的基本概念

宏是特殊的函数，输入和输出均为程序片段（Tokens），在编译时执行并将结果替换到调用处：

  * 使用@前缀调用宏
  * 宏接收Tokens输入，转换后返回新的Tokens
  * 宏须在macro package中定义，定义时通常需要import std.ast.*
  * 宏定义和调用须在不同包中



#### 属性宏示例

属性宏接收两个Tokens参数（属性内容和输入内容）：
    
    
    // my_macros 包（单独的宏包）
    macro package my_macros
    
    import std.ast.*
    
    public macro Log(attrTokens: Tokens, inputTokens: Tokens): Tokens {
        let level = attrTokens.toString().trimAscii()
        let funcDecl = FuncDecl(inputTokens)
        let funcName = funcDecl.identifier.value
        
        let logStmt = quote(Hilog.info(0, "Macro", "[${level}] entering ${funcName}"))
        funcDecl
            .block
            .nodes
            .insert(0, parseExpr(logStmt))
    
        return funcDecl.toTokens()
    }

调用处（在另一个包中）：
    
    
    // main 包
    import my_macros.Log
    import kit.PerformanceAnalysisKit.Hilog
    
    @Log[DEBUG]
    public func compute(x: Int64): Int64 {
        x * 2
    }
    
    public func testMacroBasic(): Unit {
        let result = compute(5)
        Hilog.info(0, "Cangjie Test", "result = ${result}")
    }

宏展开后compute函数变为：
    
    
    public func compute(x: Int64): Int64 {
        Hilog.info(0, "Macro", "[DEBUG] entering compute")
        x * 2
    }

调用testMacroBasic，日志输出结果：
    
    
    [DEBUG] entering compute
    result = 10

#### quote表达式与插值

quote(...)将代码模板转换为Tokens，$(expr)在quote中插值。插值的表达式须实现ToTokens接口。

#### 宏包编译配置

宏包须先编译，在宏模块的cjpm.toml中设置：
    
    
    [package]
      name = "my_macros"
      version = "1.0.0"
    
    [target]
      [target.aarch64-linux-ohos]
        compile-option = "--compile-macro"

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/1XCtvKa4SPqv2o1BoPYtUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085433Z&HW-CC-Expire=86400&HW-CC-Sign=F3832D73B7C73DA99B029FA465F59187D479E26B49DCC9A8FC4D9AA113C48C44)

  1. 宏展开后须为合法的仓颉代码。
  2. 展开代码不能包含包声明或导入语句。
  3. 避免在宏中使用全局可变状态，因为宏可能并行展开。
  4. 所有宏实现须import std.ast.*。
  5. 属性宏调用时，属性内容在[]中，如@Log[DEBUG]。



更多宏的使用方法，详情请参见[宏](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro)。
