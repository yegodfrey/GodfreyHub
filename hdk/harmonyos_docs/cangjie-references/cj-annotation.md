---
name: cangjie-references/cj-annotation
title: 注解的使用
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-annotation
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 示例教程 / 注解的使用
---

# 注解的使用

通过反射获取实例上注解的值。

示例：
    
    
    import std.reflect.*
    
    main() {
        let ti = TypeInfo.of(Test())
        let annotation = ti.findAnnotation<A>()
        if (let Some(a) <- annotation) {
            println(a.name)
        }
    }
    
    @A["Annotation"]
    public class Test {}
    
    @Annotation
    public class A {
        const A(let name: String) {}
    }

运行结果：
    
    
    Annotation
