---
name: cangjie-references/cj-operate
title: 操作 AST 对象示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-operate
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.ast / 示例教程 / 操作 AST 对象示例
---

# 操作 AST 对象示例

获取 [ClassDecl](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-classdecl) 类型的节点后，可以对该节点进行增、删、改、查等操作。代码如下所示：
    
    
    import std.ast.*
    
    main() {
        let input: Tokens = quote(
            class Data {
                var a: Int32
                init(a_: Int32) {
                    a = a_
                }
            }
        )
        let decl = parseDecl(input) // 获取一个 Decl 声明节点
        var classDecl = match (decl as ClassDecl) { // decl 的具体类型为 ClassDecl, 将其进行类型转化。
            case Some(v) => v
            case None => throw Exception()
        }
        var identifier = classDecl.identifier
        // 为该节点增加一个成员函数用于获取a的值
        var funcdecl = FuncDecl(quote(func getValue() {a}))
        classDecl.body.decls.add(funcdecl)
        println("Identifier value is ${identifier.value}")
        println("ClassDecl body size is ${classDecl.body.decls.size}")
        0
    }

运行结果：
    
    
    Identifier value is Data
    ClassDecl body size is 3
