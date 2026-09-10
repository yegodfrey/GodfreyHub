---
name: cangjie-references/cj-reflect_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 函数
---

# 函数

#### func parseParameterTypes(String)
    
    
    public func parseParameterTypes(parameters: String): Array<TypeInfo>

功能：从字符串中解析出参数类型，并将其转换为类型数组，以便getStaticFunction等函数使用。

函数参数类型限定名称为函数类型的参数类型部分，不包含参数名、默认值，也不包含最外层的 ()。

因此对于下面的一个仓颉函数：
    
    
    import m1.p1.T1
    func f(a: Int64, b: T1, c!: Int64 = 0, d!: Int64 = 0): Int64 { ... }

其限定名称应该为"Int64, p1.T1, Int64, Int64"。对于无参函数的限定名称应该为 ""。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/Y8leiloTSLWC3V8g-FDjvQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=64EBB31F6E9E2296198FE4B265D2D37D002273CEF56C1CADD1E0EBDF94ECD7EE)

不支持平台：macOS、iOS。

参数：

  * parameters: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 函数参数类型限定名称。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 字符串对应的参数类型信息。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 字符串格式错误，则会抛出异常。
  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得参数中的类型信息，则会抛出异常。



示例：
    
    
    import std.reflect.*
    
    class A {}
    
    main(): Unit {
        let types = parseParameterTypes("Int64, String, default.A")
        for (t in types) {
            println(t)
        }
    }

运行结果：
    
    
    Int64
    String
    default.A
