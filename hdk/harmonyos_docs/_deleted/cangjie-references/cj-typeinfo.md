---
name: cangjie-references/cj-typeinfo
title: TypeInfo 的使用
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-typeinfo
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 示例教程 / TypeInfo 的使用
---

# TypeInfo 的使用
    
    
    package Demo
    
    import std.reflect.*
    
    public class Foo {
        public let item = 0
    
        public func f() {}
    }
    
    main() {
        let a = Foo()
        let ty: TypeInfo = TypeInfo.of(a)
        println(ty.name)
        println(ty.qualifiedName)
        println(ty.instanceFunctions.size)
    }

运行结果：
    
    
    Foo
    Demo.Foo
    1
