---
name: cangjie-references/cj-reflect_package_types
title: 类型别名
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 类型别名
---

# 类型别名

#### type Annotation = Object
    
    
    public type Annotation = Object

功能：[Object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-object) 的别名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/IjPZiFECTAmHr4oxqMZXvA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8CF2B32041D3E750B5C7D9CE8B4B2E1FD1A53C8262B2130D7C39690B1EF003F6)

该类型别名用于表达“反射返回的注解实例”的语义，类型上等价于 Object。

它与 @Annotation 语言内置元注解无关，使用 @Annotation 不需要导入 std.reflect。

示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        println(Annotation() is Object)
        println(Annotation() is Annotation)
        println(Object() is Object)
        println(Object() is Annotation)
    }

运行结果：
    
    
    true
    true
    true
    true
