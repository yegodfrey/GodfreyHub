---
name: cangjie-references/cj-reflect_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 类
---

# 类

#### class ClassTypeInfo
    
    
    public class ClassTypeInfo <: TypeInfo {}

功能：描述 class 类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/LG1w8k_MRYiR73nTJ7QHPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9CC28C59CB433B26E72025524265BB64ABCAECBEAA34F8D88AC066D743AD86A5)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop constructors
    
    
    public prop constructors: Collection<ConstructorInfo>

功能：获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 的所有 public 构造函数信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/HasoD6j1RzewenIsQQmDWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A674694051F2C0D4686DE69AF68692EB224E4010EDC54977C2F58251AF685654)

  * 不支持平台：macOS、iOS。
  * 如果该 class 类型无任何 public 构造函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var myName = ""
        public init() {}
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
        // 获取 constructors
        for (i in ty.constructors) {
            println(i)
        }
        return
    }

运行结果：
    
    
    init()
    init(String)

#### [h2]prop instanceVariables
    
    
    public prop instanceVariables: Collection<InstanceVariableInfo>

功能：获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 的所有 public 实例成员变量信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/ApagOfkuQ6-ir1MFPHXApw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A47A4C4DF11499DCEA4CA8C668DEC1125229D2E62A6CD93D9AE37537199EE3B4)

  * 不支持平台：macOS、iOS。
  * 如果该 class 类型无任何 public 实例成员变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 该集合不包含任何继承而来的 public 实例成员变量。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
        public init() {}
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
        // 获取 instanceVariables
        for (i in ty.instanceVariables) {
            println(i)
        }
        return
    }

运行结果：
    
    
    length: Int64
    width: Int64
    myName: String

#### [h2]prop sealedSubclasses
    
    
    public prop sealedSubclasses: Collection<ClassTypeInfo>

功能：如果该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型拥有 sealed 语义，则获取该 class 类型所在包内的所有子类的类型信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/XYKbc9pLR_2ZLji-KqTrCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=54B8D9D2F2618CBF574BD8E755FC9377666FA44799A947209555B5538E85F5D4)

  * 不支持平台：macOS、iOS。
  * 如果该 class 类型不拥有 sealed 语义，则返回空集合。
  * 如果该 class 类型拥有 sealed 语义，那么获得的集合必不可能是空集合，因为该 class 类型本身就是自己的子类。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    sealed abstract class Shape {}
    
    public class Circle <: Shape {}
    
    public class Rectangle <: Shape {}
    
    main(): Unit {
        // 获取 Shape 类型信息
        let ty = ClassTypeInfo.get("test.Shape")
    
        // 获取 sealed 子类
        for (subclass in ty.sealedSubclasses) {
            println(subclass)
        }
    
        return
    }

运行结果：
    
    
    test.Shape
    test.Circle
    test.Rectangle

#### [h2]prop staticVariables
    
    
    public prop staticVariables: Collection<StaticVariableInfo>

功能：获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 的所有 public 静态成员变量信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/j37aToS_Sqe2S6s2MXq4vA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0101FE60919F67E549523A5DC5230325E67199BA9F28749769E41F5F4A59AADF)

  * 不支持平台：macOS、iOS。
  * 如果该 class 类型无任何 public 静态成员变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 该集合不包含任何继承而来的 public 静态成员变量。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static var count: Int64 = 0
        public static var name: String = "Rectangle"
        public var length: Int64 = 0
        public var width: Int64 = 0
    
        public init() {
            Rectangular.count += 1
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态成员变量
        for (variable in ty.staticVariables) {
            println(variable)
        }
    
        return
    }

运行结果：
    
    
    static count: Int64
    static name: String

#### [h2]prop superClass
    
    
    public prop superClass: Option<ClassTypeInfo>

功能：获取该 class 类型信息所对应的 class 类型的直接父类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/4DFQZjibT3SPz4WT-GU1Ww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E7A99E8C3219D91E6B48910C95DE4A0244470F59B52D3ABB3ED1221A67A3D8FA)

  * 不支持平台：macOS、iOS。
  * 理论上只有 class [Object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-object) 没有直接父类。



类型：[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public open class Animal {
        public var name: String = ""
        public init() {}
    }
    
    public class Dog <: Animal {
        public init() {
            super()
        }
    }
    
    main(): Unit {
        // 获取 Dog 类型信息
        let ty = ClassTypeInfo.get("test.Dog")
    
        // 获取父类信息
        if (ty.superClass.isSome()) {
            // Dog 有父类
            println("Dog 有父类")
        } else {
            println("Dog 没有父类")
        }
    
        // 同时也获取 Object 类型信息作为对比
        let objTy = ClassTypeInfo.get("std.core.Object")
        if (objTy.superClass.isNone()) {
            println("Object 没有父类")
        }
    
        return
    }

运行结果：
    
    
    Dog 有父类
    Object 没有父类

#### [h2]static func get(String)
    
    
    public redef static func get(qualifiedName: String): ClassTypeInfo

功能：获取给定限定名称所对应类型的 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/5LGumR48T_-yuvsOn6Gatg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=834DDB176D03C69DB91BC3909FE7D87C1F37D26C3D2ECFCCC1BA2D97A3CC1EE0)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) \- 类型的限定名称 qualifiedName 所对应的类型的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获取与给定类型的限定名称 qualifiedName 匹配的类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        let ty = ClassTypeInfo.get("default.Rectangular")
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]static func of(Any)
    
    
    public redef static func of(a: Any): ClassTypeInfo

功能：获取给定的任意类型的实例的运行时类型所对应的类型信息。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/lHZDhV2zRUaUWBnAC3SBTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=08CF0AE1F5C68BE14BE674137DC54E32C34EB0003062F007EC89B9F4668DAFF3)

不支持平台：macOS、iOS。

参数：

  * a: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 任意类型的实例。



返回值：

  * [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) \- 实例 a 的运行时类型所对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)， 则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        var r = Rectangular()
        let ty = ClassTypeInfo.of(r)
        println(ty)
        return
    }

运行结果：
    
    
    test.Rectangular

#### [h2]static func of(Object)
    
    
    public static func of(a: Object): ClassTypeInfo

功能：获取给定的 class 类型的实例的运行时类型所对应的 class 类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/8eOlo8vUT3m6rMKkMcNRNw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5BA0EA03C12CD6A1760C412306ABF4CFD9CE7D1EA704B8C96E32CA454533586E)

不支持平台：macOS、iOS。

参数：

  * a: [Object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-object) \- class 类型的实例。



返回值：

  * [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) \- class 类型的实例 a 的运行时类型所对应的 class 类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的 class 类型信息，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        var r = Rectangular()
        let ty = ClassTypeInfo.of(r)
        println(ty)
        return
    }

运行结果：
    
    
    test.Rectangular

#### [h2]static func of<T>()
    
    
    public redef static func of<T>(): ClassTypeInfo

功能：获取给定类型 T 对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/0mai4a8tSPy2Jlw94mBW8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CC271742367F004B3ABC2DD5802CB41DE5F7B79E44A69B0FD1CBAE5756865945)

不支持平台：macOS、iOS。

返回值：

  * [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) \- T 类型对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得类型 T 所对应的类型信息，抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        let ty = ClassTypeInfo.of<Rectangular>()
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]func construct(Array<Any>)
    
    
    public func construct(args: Array<Any>): Any

功能：在该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型中根据实参列表搜索匹配的构造函数并调用，传入实参列表，返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/2xEL2L8tSJm8El9YMIIqUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=3F6DDCE1BD23FA8B8F8B48AFEB7BCDCEFD23763305F488A5B513ABE85C3577B7)

不支持平台：macOS、iOS。

参数：

  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该 class 类型的实例。



异常：

  * [MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) \- 如果入参未能成功匹配任何该 class 类型的可见性为 public 的构造函数，则抛出异常。
  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 在被调用的构造函数内部抛出的任何异常均将被封装为 [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
        public init() {}
        public init(name: String) {
            myName = name
        }
        public init(name: String, length: Int64, width: Int64) {
            myName = name
            this.length = length
            this.width = width
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 通过不同入参构造实例
        ty.construct()
        ty.construct("Small rectangular")
        ty.construct("Big rectangular", 1, 1)
        return
    }

#### [h2]func getConstructor(Array<TypeInfo>)
    
    
    public func getConstructor(parameterTypes: Array<TypeInfo>): ConstructorInfo

功能：尝试在该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型中获取与给定形参类型信息列表匹配的 public 构造函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/Y8hjGGarRJys7scawY__9w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A8F3C91255CBE1A932C99ED42C270704AB7A809B44A0C66780F1BDC12B78A4EA)

不支持平台：macOS、iOS。

参数：

  * parameterTypes: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 形参类型信息列表。



返回值：

  * [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) \- 如果成功匹配则返回该 public 构造函数的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 构造函数，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
        public init() {}
        public init(name: String) {
            myName = name
        }
        public init(name: String, length: Int64, width: Int64) {
            myName = name
            this.length = length
            this.width = width
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取指定构造函数信息
        let ci01 = ty.getConstructor(StructTypeInfo.get("String"))
        println(ci01)
    
        // 获取指定构造函数信息
        let ci02 = ty.getConstructor(StructTypeInfo.get("String"), PrimitiveTypeInfo.get("Int64"),
            PrimitiveTypeInfo.get("Int64"))
        println(ci02)
        return
    }

运行结果：
    
    
    init(String)
    init(String, Int64, Int64)

#### [h2]func getInstanceVariable(String)
    
    
    public func getInstanceVariable(name: String): InstanceVariableInfo

功能：给定变量名称，尝试获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 所对应的 class 类型中匹配的实例成员变量的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/8eRvRYbUQ_y5fgN5M9RsQA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4BF68F757C380370628FA1BE2F70CF98F6E33E2267D88675F6CC5F5C10578984)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 变量名称。



返回值：

  * [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) \- 如果成功匹配则返回该实例成员变量的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应实例成员变量，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
        public init() {}
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取类实例成员信息
        let ivi = ty.getInstanceVariable("myName")
        println(ivi)
        return
    }

运行结果：
    
    
    myName: String

#### [h2]func getStaticVariable(String)
    
    
    public func getStaticVariable(name: String): StaticVariableInfo

功能：给定变量名称，尝试获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 所对应的 class 类型中匹配的静态成员变量的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/ZUKS4dHbQ2OyuCBpgC1bJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E9317D07FB3426C0B88D2119DEC3EFBEFAB64DD805E2E250DC8CBC25F3536119)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 变量名称。



返回值：

  * [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) \- 如果成功匹配则返回该静态成员变量的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应静态成员变量，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static var area: Int64 = 10
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态变量
        let sv = ty.getStaticVariable("area")
        println(sv)
        return
    }

运行结果：
    
    
    static area: Int64

#### [h2]func isAbstract()
    
    
    public func isAbstract(): Bool

功能：判断该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型是否是抽象类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/NRAQk33UTouVNb3mgMXlTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A0C54734F246EC213144C5D2BB40CD888D816EE7C65F72792FD8D352F55F8147)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型是抽象类则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public abstract class Shape {
        public init() {}
    }
    
    public class Circle <: Shape {
        public init() {
            super()
        }
    }
    
    main(): Unit {
        // 获取 Shape 类型信息
        let shapeTy = ClassTypeInfo.get("test.Shape")
        println("Shape 是抽象类: ${shapeTy.isAbstract()}")
    
        // 获取 Circle 类型信息
        let circleTy = ClassTypeInfo.get("test.Circle")
        println("Circle 是抽象类: ${circleTy.isAbstract()}")
    
        return
    }

运行结果：
    
    
    Shape 是抽象类: true
    Circle 是抽象类: false

#### [h2]func isOpen()
    
    
    public func isOpen(): Bool

功能：判断该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型是否拥有 open 语义。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/apTYmvB1Q--hm3EfMBNU1w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=52E16AFB13CB83346F2DF1AD91AD2785E266B6EE8B2364D610537DA8CE0C4187)

  * 不支持平台：macOS、iOS。
  * 并不是只有被 open 修饰符所修饰的 class 类型定义才拥有 open 语义，如: abstract class 无论是否被 open 修饰符修饰都会拥有 open 语义。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型拥有 open 语义则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public open class OpenClass {
        public init() {}
    }
    
    public class RegularClass {
        public init() {}
    }
    
    main(): Unit {
        // 获取 OpenClass 类型信息
        let openTy = ClassTypeInfo.get("test.OpenClass")
        println("OpenClass 拥有 open 语义: ${openTy.isOpen()}")
    
        // 获取 RegularClass 类型信息
        let regularTy = ClassTypeInfo.get("test.RegularClass")
        println("RegularClass 拥有 open 语义: ${regularTy.isOpen()}")
    
        return
    }

运行结果：
    
    
    OpenClass 拥有 open 语义: true
    RegularClass 拥有 open 语义: false

#### [h2]func isSealed()
    
    
    public func isSealed(): Bool

功能：判断该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型是否拥有 sealed 语义。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/y_0LqIsrS9yzXg6v1bQApQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0E230D463DAD6A124BF3FEC4594663FB8C181762C6CE9899EB505D0569813758)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 类型拥有 sealed 语义则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    sealed abstract class SealedClass {
        public init() {}
    }
    
    public class RegularClass {
        public init() {}
    }
    
    main(): Unit {
        // 获取 SealedClass 类型信息
        let sealedTy = ClassTypeInfo.get("test.SealedClass")
        println("SealedClass 拥有 sealed 语义: ${sealedTy.isSealed()}")
    
        // 获取 RegularClass 类型信息
        let regularTy = ClassTypeInfo.get("test.RegularClass")
        println("RegularClass 拥有 sealed 语义: ${regularTy.isSealed()}")
    
        return
    }

运行结果：
    
    
    SealedClass 拥有 sealed 语义: true
    RegularClass 拥有 sealed 语义: false

#### class ConstructorInfo
    
    
    public class ConstructorInfo <: Equatable<ConstructorInfo> & Hashable & ToString {}

功能：描述构造函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/w6AN1FwmTq2Ntt5rtVxj6Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=03117FD1B3F7EE711E62C7CE6AD9E128DE0DC8A544D1FB953E1D3557FA7D2B4A)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ConstructorInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) 对应的构造函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/dYoh_OzZTSCmQmpB4yStCQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=FCB7D290274412A208B02E56709C09AE88ADBADB57A4B9673BDD7D4060D5135D)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该构造函数信息所对应的构造函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ast_package_classes#class-annotation)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    @Annotation
    public class MyAnnotation {
        public let data: String
        public const init() {
            this.data = "MyAnnotation's data"
        }
    }
    
    @MyAnnotation
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        @MyAnnotation
        public init() {}
    
        @MyAnnotation
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历所有构造函数
        for (constructor in ty.constructors) {
            // 获取构造函数上的注解
            let annotations = constructor.annotations
            for (annotation in annotations) {
                let myAnnotation = (annotation as MyAnnotation).getOrThrow()
                println("构造函数 ${constructor} 上的注解数据: ${myAnnotation.data}")
            }
        }
        return
    }

运行结果：
    
    
    构造函数 init() 上的注解数据: MyAnnotation's data
    构造函数 init(String) 上的注解数据: MyAnnotation's data

#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<ParameterInfo>

功能：获取该 [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) 所对应的构造函数的参数类型列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/HiUq6SO9S3-B3mwuzKqfqg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=80236CA4E06137AD24D2971CB99E557B972637F9C2204996890810509F8A7F23)

  * 不支持平台：macOS、iOS。
  * 不保证参数顺序，可根据 ParameterInfo的 index 属性确定参数实际位置。



类型：[ReadOnlyList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt)<[ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
        public init() {}
        public init(name: String) {
            myName = name
        }
        public init(name: String, length: Int64, width: Int64) {
            myName = name
            this.length = length
            this.width = width
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
        // 获取 constructors
        for (i in ty.constructors) {
            // 获取 parameters
            for (j in i.parameters) {
                println("${i} 的入参有 ${j}")
            }
        }
        return
    }

运行结果：
    
    
    init(String) 的入参有 String
    init(String, Int64, Int64) 的入参有 String
    init(String, Int64, Int64) 的入参有 Int64
    init(String, Int64, Int64) 的入参有 Int64

#### [h2]func apply(Array<Any>)
    
    
    public func apply(args: Array<Any>): Any

功能：调用该 [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) 对应的构造函数，传入实参列表，并返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/WWC2yt1gR_mt5cLvhP9FSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C967A47A0E8A0C010EFE5E0659773BCD1FA064542767975F548DD08147E89C70)

不支持平台：macOS、iOS。

参数：

  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 由该构造函数构造得到的类型实例。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果该构造函数信息所对应的构造函数所属的类型是抽象类，则会抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该构造函数信息所对应的构造函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中的任何一个实参的运行时类型不是该构造函数信息所对应的构造函数的对应形参的声明类型的子类型，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的构造函数信息所对应的构造函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        public init() {
            println("调用了无参构造函数")
        }
    
        public init(name: String) {
            println("调用了有参构造函数")
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历构造函数
        for (constructor in ty.constructors) {
            // 找到无参构造函数
            if (constructor.parameters.size == 0) {
                // 创建空参数数组
                let args: Array<Any> = []
    
                // 调用构造函数
                let instance = constructor.apply(args)
                // 将实例转换为 Rectangular 类型
                let rect = (instance as Rectangular).getOrThrow()
                println("无参构造实例的长度是: ${rect.length}, 宽度是: ${rect.width}, 名称是: ${rect.myName}")
            }
            // 找到有参构造函数
            if (constructor.parameters.size == 1) {
                // 创建有参数数组
                let args: Array<Any> = ["MyRectangular"]
    
                // 调用构造函数
                let instance = constructor.apply(args)
                // 将实例转换为 Rectangular 类型
                let rect = (instance as Rectangular).getOrThrow()
                println("有参构造实例的长度是: ${rect.length}, 宽度是: ${rect.width}, 名称是: ${rect.myName}")
            }
        }
    
        return
    }

运行结果：
    
    
    调用了无参构造函数
    无参构造实例的长度是: 4, 宽度是: 5, 名称是:
    调用了有参构造函数
    有参构造实例的长度是: 4, 宽度是: 5, 名称是: MyRectangular

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/9BlMRh6TQGaigRipTBXK8A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=78F28FA50D14872D52BA7B88D93A326E6EF2D3D6F7E60632605918ED7C695D50)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @Annotation
    public class MyAnnotation01 {
        public let data: String
        public const init() {
            this.data = "MyAnnotation01's data"
        }
    }
    
    @Annotation
    public class MyAnnotation02 {
        public let data: String
        public const init() {
            this.data = "MyAnnotation02's data"
        }
    }
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        @MyAnnotation01
        @MyAnnotation02
        public init() {}
    
        @MyAnnotation01
        @MyAnnotation01
        @MyAnnotation02
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历所有构造函数
        for (constructor in ty.constructors) {
            // 获取构造函数上所有 MyAnnotation01 注解
            let annotations = constructor.findAllAnnotations<MyAnnotation01>()
            for (myAnnotation in annotations) {
                println("构造函数 ${constructor} 上的注解数据: ${myAnnotation.data}")
            }
        }
        return
    }

运行结果：
    
    
    构造函数 init() 上的注解数据: MyAnnotation01's data
    构造函数 init(String) 上的注解数据: MyAnnotation01's data
    构造函数 init(String) 上的注解数据: MyAnnotation01's data

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/XeUknkTJTG6xO0AUXOksmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C92E0145E6183A9F55C660E82571F83B1314A3803500868BA4D1179D4A557886)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @Annotation
    public class MyAnnotation01 {
        public let data: String
        public const init() {
            this.data = "MyAnnotation01's data"
        }
    }
    
    @Annotation
    public class MyAnnotation02 {
        public let data: String
        public const init() {
            this.data = "MyAnnotation02's data"
        }
    }
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        @MyAnnotation01
        @MyAnnotation02
        public init() {}
    
        @MyAnnotation01
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历所有构造函数
        for (constructor in ty.constructors) {
            // 尝试获取构造函数上 MyAnnotation01 注解
            let annotation = constructor.findAnnotation<MyAnnotation01>().getOrThrow()
            println("构造函数 ${constructor} 上的注解数据: ${annotation.data}")
        }
        return
    }

运行结果：
    
    
    构造函数 init() 上的注解数据: MyAnnotation01's data
    构造函数 init(String) 上的注解数据: MyAnnotation01's data

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该构造函数的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/sy6s9MUORJWRO-McatxcvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6186BEE5A099639D01F85B0272BDF0F8A6BB39F54FEAD1E9BA72D061A26031D2)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @Annotation
    public class MyAnnotation01 {
        public let data: String
        public const init() {
            this.data = "MyAnnotation01's data"
        }
    }
    
    @Annotation
    public class MyAnnotation02 {
        public let data: String
        public const init() {
            this.data = "MyAnnotation02's data"
        }
    }
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        @MyAnnotation01
        @MyAnnotation02
        public init() {}
    
        @MyAnnotation01
        @MyAnnotation02
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历所有构造函数
        for (constructor in ty.constructors) {
            // 尝试获取构造函数上所有注解
            let annotations = constructor.getAllAnnotations()
            for (annotation in annotations) {
                if (annotation is MyAnnotation01) {
                    let myAnnotation = (annotation as MyAnnotation01).getOrThrow()
                    println("构造函数 ${constructor} 上的注解数据: ${myAnnotation.data}")
                } else if (annotation is MyAnnotation02) {
                    let myAnnotation = (annotation as MyAnnotation02).getOrThrow()
                    println("构造函数 ${constructor} 上的注解数据: ${myAnnotation.data}")
                }
            }
        }
        return
    }

运行结果：
    
    
    构造函数 init() 上的注解数据: MyAnnotation01's data
    构造函数 init() 上的注解数据: MyAnnotation02's data
    构造函数 init(String) 上的注解数据: MyAnnotation01's data
    构造函数 init(String) 上的注解数据: MyAnnotation02's data

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该构造器信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/ZYQqScfMRi-nAzqdAcXnYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7599A0813B58D0D1B5EF7C14C00ED96408F19A8136C132B30E91F4B733DDB17D)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该构造器信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        public init() {}
    
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历所有构造函数并获取哈希值
        for (constructor in ty.constructors) {
            let hash = constructor.hashCode()
            println("构造函数 ${constructor} 的哈希值: ${hash}")
        }
    
        return
    }

可能的运行结果：
    
    
    构造函数 init() 的哈希值: 93932258392112
    构造函数 init(String) 的哈希值: 93932258392208

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该构造函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/lwhgatt8SQegMYJiEpCrow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=BAEA64CB9DB4CFB696900F5B2B60D4E0C8E05E33925EAE4BC71FA8D7C046E1B1)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该构造函数信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        public init() {}
    
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 遍历所有构造函数并获取字符串表示
        for (constructor in ty.constructors) {
            let str = constructor.toString()
            println("构造函数的字符串表示: ${str}")
        }
    
        return
    }

运行结果：
    
    
    构造函数的字符串表示: init()
    构造函数的字符串表示: init(String)

#### [h2]operator func !=(ConstructorInfo)
    
    
    public operator func !=(other: ConstructorInfo): Bool

功能：判断该构造器信息与给定的另一个构造器信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/pSq4HzsOSsm7wh6MUXfsiw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=92EABE2336D6C781C05D593DFCDE20589E6A0FB69D21CA7CFF1D9424E1CCBDC2)

不支持平台：macOS、iOS。

参数：

  * other: [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) \- 被比较相等性的另一个构造器信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该构造器信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        public init() {}
    
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取所有构造函数
        let constructors = ty.constructors.toArray()
    
        // 收集两个构造函数
        let firstConstructor: ConstructorInfo = constructors[0]
        let secondConstructor: ConstructorInfo = constructors[1]
    
        // 比较不同的构造函数
        let result = firstConstructor != secondConstructor
        println("两个不同构造函数不等: ${result}")
    
        // 比较相同的构造函数
        let firstConstructor1: ConstructorInfo = ClassTypeInfo.get("test.Rectangular").constructors.toArray()[0]
        let result2 = firstConstructor != firstConstructor1
        println("相同构造函数不等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同构造函数不等: true
    相同构造函数不等: false

#### [h2]operator func ==(ConstructorInfo)
    
    
    public operator func ==(other: ConstructorInfo): Bool

功能：判断该构造器信息与给定的另一个构造器信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/wVJoWmW_QhK6L3YOAzaCtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=330B85E41576E308489CDEA0828CF2F5A565CD932C86987887106B96482A938E)

不支持平台：macOS、iOS。

参数：

  * other: [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) \- 被比较相等性的另一个构造器信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该构造器信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
    
        public init() {}
    
        public init(name: String) {
            myName = name
        }
    }
    
    main(): Unit {
        // 获取 Rectangular 类型信息
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取所有构造函数
        let constructors = ty.constructors.toArray()
    
        // 收集两个构造函数
        let firstConstructor: ConstructorInfo = constructors[0]
        let secondConstructor: ConstructorInfo = constructors[1]
    
        // 比较不同的构造函数
        let result = firstConstructor == secondConstructor
        println("两个不同构造函数相等: ${result}")
    
        // 比较相同的构造函数
        let firstConstructor1: ConstructorInfo = ClassTypeInfo.get("test.Rectangular").constructors.toArray()[0]
        let result2 = firstConstructor == firstConstructor1
        println("相同构造函数相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同构造函数相等: false
    相同构造函数相等: true

#### class EnumTypeInfo
    
    
    public class EnumTypeInfo <: TypeInfo {}

功能：Enum 类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/n33OR_iSSq2rv1QkaHYxIg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0DDD09AF1EB7D698690B1912E25F6B7D2D4011F45A08C19063B2C728AC29D3C0)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop constructors
    
    
    public prop constructors: Collection<EnumConstructorInfo>

功能：获取该 EnumTypeInfo 对应的所有枚举构造器信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/yBIGJgG1T9u8zI1HilmUCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B22FA0A66BD802595D3B87C01B199128F2F00636FB3AC3F6C32020C8EF2AE02D)

不支持平台：macOS、iOS。

类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<EnumConstructorInfo>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
        | M2(Int64)
    }
    
    main(): Unit {
        let e = EnumTypeInfo.get("test.E")
        let ctors = e.constructors.toArray()
        println(ctors.size)
        return
    }

运行结果：
    
    
    2

#### [h2]static func get(String)
    
    
    public static redef func get(qualifiedName: String): EnumTypeInfo

功能：获取给定限定名称所对应类型的 EnumTypeInfo。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/62_8hB_FS-eYoo1y8kbiHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A38AD2A5CEFAF4CE39B13EBA9E8E5BF8AABC2F38F2D6241C4AB83016C9E5913E)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * EnumTypeInfo \- 与 qualifiedName 对应的枚举类型信息。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是枚举类型或者 qualifiedName 对应的定义不存在，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
        | M2(Int64)
    }
    
    main(): Unit {
        let e1 = EnumTypeInfo.get("test.E")
        println(e1.qualifiedName)
        return
    }

运行结果：
    
    
    test.E

#### [h2]static func of(Any)
    
    
    public static redef func of(instance: Any): EnumTypeInfo

功能：获取给定实例所属枚举类型的 EnumTypeInfo。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/iX8B0iNhRTayAR4vuy_IEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=22EA1081166F4B39728586D9A03C2DDFF2AB9FAA3657E9F3FE4DE44EE5BE81D1)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 枚举实例。



返回值：

  * EnumTypeInfo \- 入参实例所属枚举类型的类型信息。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例不是枚举类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
    }
    
    main(): Unit {
        let info = EnumTypeInfo.of(E.M1)
        println(info.qualifiedName)
        return
    }

运行结果：
    
    
    test.E

#### [h2]static func of<T>()
    
    
    public static redef func of<T>(): EnumTypeInfo

功能：获取给定类型 T 所属枚举类型的 EnumTypeInfo。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/SKn4xh2dQEK3PpuTuHZZtw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E457B1C74DE57A2EE56085713A88F57CFAD7F4E2F0D2129DCBD4B6AC6C016DCB)

不支持平台：macOS、iOS。

返回值：

  * EnumTypeInfo \- T 所属枚举类型的类型信息。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果 T 不是任何枚举类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
    }
    
    main(): Unit {
        let info = EnumTypeInfo.of<E>()
        println(info.name)
        return
    }

运行结果：
    
    
    E

#### [h2]func construct(String, Array<Any>)
    
    
    public func construct(constructor: String, args: Array<Any>): Any

功能：根据构造器签名和实参列表构造该枚举的实例并返回。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/qMkzuls8Sl2NOI6BkKHZzw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=3A6E0BF8EEEDD7052772B37166D5D73939A2F43F6163729CC1C0B105B5606F3C)

不支持平台：macOS、iOS。

参数：

  * constructor: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 构造器签名。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 构造器实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 构造出的枚举实例。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果构造器实参列表的数量或类型与构造器参数不匹配或者指定的构造器不存在，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
        | M3(Int64, String)
    }
    
    main(): Unit {
        let e = EnumTypeInfo.get("test.E")
        let inst = (e.construct("M3<Int64, String>", [42, "abc"]) as E).getOrThrow()
        match (inst) {
            case E.M3(v1, v2) => println("${v1}, ${v2}")
            case _ => println("unexpected")
        }
        return
    }

运行结果：
    
    
    42, abc

#### [h2]func destruct(Any)
    
    
    public func destruct(instance: Any): (EnumConstructorInfo, ReadOnlyList<Any>)

功能：拆解给定枚举实例，返回其构造器信息和关联值列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/G_ymGL-7RWmPVn_iE8vs0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=24AC40172DEDA07D64A465A32C42CB03BAC154E7A265F3CD34F3741033AAA97A)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 枚举实例。



返回值：

  * (EnumConstructorInfo, [ReadOnlyList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)>) - 构造器信息与关联值列表。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例不是枚举类型实例，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
        | M2(Int64)
    }
    
    main(): Unit {
        let e = EnumTypeInfo.get("test.E")
        let (ctor, values) = e.destruct(E.M2(7))
        println(ctor.qualifiedName)
        println(values.size)
        println(values[0] as Int64)
        return
    }

运行结果：
    
    
    test.E.M2<Int64>
    1
    Some(7)

#### [h2]func getConstructor(String, Int64)
    
    
    public func getConstructor(constructor: String, argsCount!: Int64 = 0): EnumConstructorInfo

功能：按构造器名与参数个数查询构造器信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/ViduXrQhS-KKOY2YbI7xLA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A831A012F166A10CA3B3098C58B6A253E34C1FF9D64CA714D0742FF89C80D1C7)

不支持平台：macOS、iOS。

参数：

  * constructor: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 构造器名（不含参数签名），例如 M2。
  * argsCount!: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 参数个数；为 0 时不限制参数个数。



返回值：

  * EnumConstructorInfo \- 匹配到的构造器信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果未找到匹配的构造器，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public enum E {
        | M1
        | M2(Int64)
        | M2(Int64, Int64)
    }
    
    main(): Unit {
        let e = EnumTypeInfo.get("test.E")
        println(e.getConstructor("M1").qualifiedName)
        println(e.getConstructor("M2", argsCount: 1).qualifiedName)
        println(e.getConstructor("M2", argsCount: 2).qualifiedName)
        return
    }

运行结果：
    
    
    test.E.M1
    test.E.M2<Int64>
    test.E.M2<Int64, Int64>

#### class FunctionTypeInfo
    
    
    public class FunctionTypeInfo <: TypeInfo {}

功能：描述函数类型（函数值/闭包）的类型信息，可用于获取参数与返回值的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/w4dtU0J0TIKxrWPCd7YEJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B6E9E18AA8E4C636B5572DB06603350A5EFDE2A0AEA88F44287C2FE63F3BD61B)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<TypeInfo>

功能：获取该函数类型的参数类型列表，按声明顺序返回。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/Q7vQq_yCROekZbVLjXJSjQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EB47940BF2A0AB9007542F0F8B370908985C07E312AF45DB9BCAFB65AC1D2E1D)

不支持平台：macOS、iOS。

类型：[ReadOnlyList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt)<TypeInfo>

示例：
    
    
    package test
    
    import std.reflect.*
    
    main(): Unit {
        let f = {x: Int64, y: UInt8 => x + Int64(y)}
        let info = FunctionTypeInfo.of(f)
        println(info.parameters.size)
        println(info.parameters[0].name)
        println(info.parameters[1].name)
        return
    }

运行结果：
    
    
    2
    Int64
    UInt8

#### [h2]prop returnType
    
    
    public prop returnType: TypeInfo

功能：获取该函数类型的返回值类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/W3iSXxqnQRK6hgHb-Mc9fw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D8675B7CD85A8AE22822CCBD449662E8F8AF8AFE834EBC072068491706DD7BEA)

不支持平台：macOS、iOS。

类型：TypeInfo

示例：
    
    
    package test
    
    import std.reflect.*
    
    main(): Unit {
        let f = {x: Int64, y: Int64 => x + y}
        let info = FunctionTypeInfo.of(f)
        println(info.returnType.name)
        return
    }

运行结果：
    
    
    Int64

#### [h2]static func of(Any)
    
    
    public static redef func of(instance: Any): FunctionTypeInfo

功能：获取给定实例的运行时类型所对应的 FunctionTypeInfo。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/bgMVnKxPQtCGADpNqR8e-Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=17F03ABF67A1D3471F4A02B192E50E5BD6B747DF37C467684254EFB6980948ED)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 运行时类型为函数类型的实例。



返回值：

  * FunctionTypeInfo \- 入参实例运行时类型所对应的类型信息。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是函数类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    func add(a: Int64, b: Int64): Int64 {
        a + b
    }
    
    main(): Unit {
        let f: (Int64, Int64) -> Int64 = add
        let info = FunctionTypeInfo.of(f)
        println(info.parameters.size)
        println(info.returnType.name)
        return
    }

运行结果：
    
    
    2
    Int64

#### [h2]static func of<T>()
    
    
    public static redef func of<T>(): FunctionTypeInfo

功能：获取给定类型 T 对应的 FunctionTypeInfo。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/QNiWe__-Qp6Xam9Ezf6nbA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=77F8826E99CDE7A14CFAC30415624BF1DD290D9AFB412E10E944ACB1D0B8C260)

不支持平台：macOS、iOS。

返回值：

  * FunctionTypeInfo \- T 类型对应的函数类型信息。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是函数类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    main(): Unit {
        let info = FunctionTypeInfo.of<(Int64, String) -> Bool>()
        println(info.parameters.size)
        println(info.parameters[1].name)
        println(info.returnType.name)
        return
    }

运行结果：
    
    
    2
    String
    Bool

#### [h2]func apply(Any, Array<Any>)
    
    
    public func apply(instance: Any, args: Array<Any>): Any

功能：按函数参数顺序传入实参列表，对函数进行调用并返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/f869B8rERHiHnKaShydfBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A5F503476CFEA8196A907AE853F338D5CCD28A9EC75301656C556B3434C5485B)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 函数实例。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 调用结果。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表的数量与函数参数个数不一致，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中任一元素类型与对应函数参数类型不匹配，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    func add(a: Int64, b: Int64): Int64 {
        a + b
    }
    
    main(): Unit {
        let f: (Int64, Int64) -> Int64 = add
        let info = FunctionTypeInfo.of(f)
        let res = (info.apply(f, [1, 2]) as Int64).getOrThrow()
        println(res)
        return
    }

运行结果：
    
    
    3

#### class GenericTypeInfo
    
    
    public class GenericTypeInfo <: TypeInfo & Equatable<GenericTypeInfo> {}

功能：描述泛型类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/ipBAjFLVSPqXh2Wd-1NZmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=04C9A8F8D4F9EF954EFA51E54F35574749D6234A4877BCEC5BD7A36CAB9AA0E7)

不支持平台：macOS、iOS。

父类型：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo)>



#### [h2]operator func ==(GenericTypeInfo)
    
    
    public operator func ==(other: GenericTypeInfo): Bool

功能：判断该泛型类型信息与给定的另一个泛型类型信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/aCuB6mPiTfiIXjaMyxWofg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=3D25ED92D49F272B11E4BD07441C8D103491D9D5F1D76BF34181B59CD6DEECC7)

不支持平台：macOS、iOS。

参数：

  * other: [GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo) \- 被比较相等性的另一个泛型类型信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该泛型类型信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public func myFunc<T>(str: String, toStr: T): Unit where T <: ToString {
        println("${str}: ${toStr}")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数的泛型参数信息
        let genericTypeInfo = globalFunctionInfo.genericParams.toArray()[0]
    
        // 用另一种方式获取泛型参数信息
        let arr: Array<TypeInfo> = [TypeInfo.get("std.core.String"), genericTypeInfo]
        let globalFunctionInfoOtherWay = ty.getFunction("myFunc", arr)
        let genericTypeInfoOtherWay = globalFunctionInfoOtherWay.genericParams.toArray()[0]
        println("泛型类型信息是否相等: ${genericTypeInfo == genericTypeInfoOtherWay}")
        return
    }

运行结果：
    
    
    泛型类型信息是否相等: true

#### class GlobalFunctionInfo
    
    
    public class GlobalFunctionInfo <: Equatable<GlobalFunctionInfo> & Hashable & ToString {}

功能：描述全局函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/vKvWixAjRoWBagas_D-5FA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B38869CD7095039F4C203D0C650D9BC753C6DC110D8D4C87854B094E663986F2)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<GlobalFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有[GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/B1wkHo5TRCq-2ffusHn2Dg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A4EA56F8A6A11BD51EFE87FE937B17413A7C8F9B36AEE4DFCB14E656D6D3170A)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该全局函数信息所对应全局函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public func myFunc<T>(str: String, toStr: T): Unit where T <: ToString {
        println("${str}: ${toStr}")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数的注解信息
        let annotations = globalFunctionInfo.annotations
    
        // 遍历注解信息
        for (annotation in annotations) {
            let anno = (annotation as MyAnnotation).getOrThrow()
            println("Annotation: ${anno.data}")
        }
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public let data: String
        public const init() {
            this.data = "MyAnnotation's data"
        }
    }

运行结果：
    
    
    Annotation: MyAnnotation's data

#### [h2]prop genericParams
    
    
    public prop genericParams: Collection<GenericTypeInfo>

功能：获取该 [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的泛型参数信息列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/8VmQZfQyTdqm3zFu3kChBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=30D887825BDF07256757817F055074359962C213FEF7EBEF38FC4BFB6F0E08C7)

不支持平台：macOS、iOS。

类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo)>

异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 没有泛型参数时抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带泛型参数的全局函数
    public func genericFunc<T>(value: T): T {
        return value
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数的泛型参数信息
        let genericParams = globalFunctionInfo.genericParams
        println("泛型参数数量: ${genericParams.size}")
    
        // 遍历泛型参数
        for (param in genericParams) {
            println("泛型参数名称: ${param.name}")
        }
    
        return
    }

运行结果：
    
    
    泛型参数数量: 1
    泛型参数名称: T

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/hM5KsMQHTBmszL4nqTBr3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0168C239784F35B1085289C6FB96152EFCCC52C1B8D06EA2B1702D1D7254C88E)

  * 不支持平台：macOS、iOS。
  * 构成重载的所有全局函数将拥有相同的名称。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个全局函数
    public func myFunction(value: Int64): Int64 {
        return value + 1
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数的名称
        let name = globalFunctionInfo.name
        println("全局函数名称: ${name}")
    
        return
    }

运行结果：
    
    
    全局函数名称: myFunction

#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<ParameterInfo>

功能：获取该 [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的参数信息列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/pl55wHGXQVO_yFPbG6UoSA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=891047FBA3CBA089CF6A217DA701B665588B8F9E9E0E10F1993CD8FAE498939D)

  * 不支持平台：macOS、iOS。
  * 不保证参数顺序，可根据 ParameterInfo的 index 属性确定参数实际位置。



类型：[ReadOnlyList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt)<[ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带多个参数的全局函数
    public func myFunction(str: String, num: Int64): Unit {
        println("String: ${str}, Int64: ${num}")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数的参数信息列表
        let parameters = globalFunctionInfo.parameters
        println("参数数量: ${parameters.size}")
    
        // 遍历参数信息
        for (param in parameters) {
            println("参数名称: ${param.name}")
        }
    
        return
    }

运行结果：
    
    
    参数数量: 2
    参数名称: str
    参数名称: num

#### [h2]prop returnType
    
    
    public prop returnType: TypeInfo

功能：获取该 [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的返回类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/u03wqgWBQpiNeBdAgldivg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=2C4DDD8DD4B75B305B600C5C149B382B21911E7C4ED46EA0D36F753837D23C81)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个有返回值的全局函数
    public func myFunction(value: Int64): String {
        return "Value is ${value}"
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数的返回类型信息
        let returnType = globalFunctionInfo.returnType
        println("返回类型名称: ${returnType.name}")
    
        return
    }

运行结果：
    
    
    返回类型名称: String

#### [h2]func apply(Array<Any>)
    
    
    public func apply(args: Array<Any>): Any

功能：调用该 [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数，传入实参列表，返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/Jvz7zaw_TR6P6SSslNs4Jg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=24E66B9FB97B4A4CF1C84A3DDB5E1AE65ACF39AA267F982287334B68BA3087A4)

  * 不支持平台：macOS、iOS。
  * 实参列表的类型确保和函数入参类型完全一致，否则会导致参数检查失败。



参数：

  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该全局函数的调用结果。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果存在泛型参数的函数调用了该方法，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该全局函数信息 GlobalFunctionInfo 所对应的全局函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中的任何一个实参的运行时类型不是该全局函数信息所对应的全局函数的对应形参的声明类型的子类型，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的全局函数信息所对应全局函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个简单的全局函数
    public func add(a: Int64, b: Int64): Int64 {
        return a + b
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 准备参数
        let args: Array<Any> = [10, 20]
    
        // 调用全局函数
        let result = globalFunctionInfo.apply(args)
    
        // 将结果转换为 Int64 类型
        let intResult = result as Int64
        println("调用结果: ${intResult}")
    
        return
    }

运行结果：
    
    
    调用结果: Some(30)

#### [h2]func apply(Array<TypeInfo>, Array<Any>)
    
    
    public func apply(genericTypeArgs: Array<TypeInfo>, args: Array<Any>): Any

功能：调用该 [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局泛型函数，传入泛型参数类型列表和实参列表，返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/XrtN2oCkSqWBUbuK2HaZaw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4ACFF79EC0A92CF8C586BC265751309D87949A499F36F47C7E3FA1D0A14B4529)

  * 不支持平台：macOS、iOS。
  * 实参列表的类型确保和函数入参类型完全一致，否则会导致参数检查失败。



参数：

  * genericTypeArgs: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 泛型参数类型列表。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该全局函数的调用结果。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果非泛型函数调用了该方法，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该全局函数信息 GlobalFunctionInfo 所对应的全局函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果函数泛型参数列表 genericTypeArgs 中的参数数目与该全局函数信息所对应的全局函数的泛型参数列表 genericParams 中的参数数目不等，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中的任何一个实参的运行时类型不是该全局函数信息所对应的全局函数的对应形参的声明类型的子类型，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果传入的实参列表和泛型参数类型列表 genericTypeArgs 不满足该全局函数信息所对应的全局函数的参数的类型约束，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的全局函数信息所对应全局函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个泛型全局函数
    public func genericFunc<T>(value: T): T {
        return value
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 准备泛型参数类型列表
        let genericTypeArgs: Array<TypeInfo> = [PrimitiveTypeInfo.get("Int64")]
    
        // 准备参数
        let args: Array<Any> = [42]
    
        // 调用泛型全局函数
        let result = globalFunctionInfo.apply(genericTypeArgs, args)
    
        // 将结果转换为 Int64 类型
        let intResult = result as Int64
        println("调用结果: ${intResult}")
    
        return
    }

运行结果：
    
    
    调用结果: Some(42)

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/L07RgBikSJ-VtWj-82vYlg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=399A82C8DB43E0EB209BE19405930C0088128BCD77FD767FD5A7770983DF129C)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public func myFunction(): Unit {
        println("Hello, World!")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 查找所有 MyAnnotation 类型的注解
        let annotations = globalFunctionInfo.findAllAnnotations<MyAnnotation>()
        println("找到的注解数量: ${annotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    找到的注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/akRfFLEKSFGlbDFFPmUGWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0F11B86A1C97F437768062975BE3C90ACA89EB9B89BA007BF51C70B0D4719F57)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public func myFunction(): Unit {
        println("Hello, World!")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 查找 MyAnnotation 类型的注解
        let annotation = globalFunctionInfo.findAnnotation<MyAnnotation>()
    
        // 检查是否找到了注解
        if (annotation.isSome()) {
            println("找到了 MyAnnotation 注解")
        } else {
            println("未找到 MyAnnotation 注解")
        }
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    找到了 MyAnnotation 注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该全局函数的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/mYcMTrFOThOntn-qYLniHw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4559CF87C699657B5C0D90B4DDBBDECB45734F54E93E73F64685B8E7DCEB4D70)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public func myFunction(): Unit {
        println("Hello, World!")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取所有注解
        let allAnnotations = globalFunctionInfo.getAllAnnotations()
        println("注解总数: ${allAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    注解总数: 1

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该全局函数信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/chQfG3jYTLW7n0NFwd1G9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6993616238CFDEA48B65E536B7F106DA4EA04E1CEAEB66A7022D3073EA79CD63)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该全局函数信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public func myFunction(): Unit {
        println("Hello, World!")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数信息的哈希值
        let hashCode = globalFunctionInfo.hashCode()
        println("哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    哈希值: 93955636542272

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该全局函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/_cp_YecTT66_3S_6Tv2kDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=21B81817ACC7C54835BF1DE718E7F94C0F67B1EF12A73976BB632C231F981267)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该全局函数信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public func myFunction(): Unit {
        println("Hello, World!")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的第一个全局函数信息
        let globalFunctionInfo = ty.functions.toArray()[0]
    
        // 获取全局函数信息的字符串表示
        let str = globalFunctionInfo.toString()
        println("字符串表示: ${str}")
    
        return
    }

运行结果：
    
    
    字符串表示: func myFunction(): Unit

#### [h2]operator func !=(GlobalFunctionInfo)
    
    
    public operator func !=(other: GlobalFunctionInfo): Bool

功能：判断该全局函数信息与给定的另一个全局函数信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/3P6ZCXznT26dbEjvj0daUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=AC6A4F50E5250230355B90608E3203E905B13DA00E04DB2AD02BE643D83F8041)

不支持平台：macOS、iOS。

参数：

  * other: [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) \- 被比较相等性的另一个全局函数信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该全局函数信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public func function1(): Unit {
        println("Function 1")
    }
    
    public func function2(): Unit {
        println("Function 2")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的前两个全局函数信息
        let globalFunctionInfos = ty.functions.toArray()
        let function1Info = globalFunctionInfos[0]
        let function2Info = globalFunctionInfos[1]
    
        // 比较两个不同的全局函数信息
        let result = function1Info != function2Info
        println("两个不同的全局函数信息不相等: ${result}")
    
        // 比较相同的全局函数信息
        let result2 = function1Info != function1Info
        println("相同的全局函数信息不相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的全局函数信息不相等: true
    相同的全局函数信息不相等: false

#### [h2]operator func ==(GlobalFunctionInfo)
    
    
    public operator func ==(other: GlobalFunctionInfo): Bool

功能：判断该全局函数信息与给定的另一个全局函数信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/cjY-zQ2oQNuA3ACtyJTRpg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=64767FB61563870B5929822125D2C1BA9614D968ACD611178A0DB15B9B5B3C64)

不支持平台：macOS、iOS。

参数：

  * other: [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) \- 被比较相等性的另一个全局函数信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该全局函数信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public func function1(): Unit {
        println("Function 1")
    }
    
    public func function2(): Unit {
        println("Function 2")
    }
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的前两个全局函数信息
        let globalFunctionInfos = ty.functions.toArray()
        let function1Info = globalFunctionInfos[0]
        let function2Info = globalFunctionInfos[1]
    
        // 比较两个不同的全局函数信息
        let result = function1Info == function2Info
        println("两个不同的全局函数信息相等: ${result}")
    
        // 比较相同的全局函数信息
        let result2 = function1Info == function1Info
        println("相同的全局函数信息相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的全局函数信息相等: false
    相同的全局函数信息相等: true

#### class GlobalVariableInfo
    
    
    public class GlobalVariableInfo <: Equatable<GlobalVariableInfo> & Hashable & ToString {}

功能：描述全局变量信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/T5hDzQ1QRZe8yP4WhbIOWQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B2E824E3054366403B2639FBA0C7E4D2C8F9EB7C34F1A528CC0A29AB64626BD4)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<GlobalVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/6AgOl1G5Tpe2TH_rfeEpKA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=03C9B62F80DF9C3222DB6C18B9BB9283ADD35F06751FD0EBC5CD846BCAE0BA71)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该全局变量信息所对应的全局变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量的注解信息
        let annotations = globalVariableInfo.annotations
        println("注解数量: ${annotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    全局变量数量: 1
    注解数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/evzEr8q1TW6w6HdeKsc0Xg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CFC283787B66F72F06C72D2BFCFCFE83102850998F3E157B47EA6C05A2CAA135)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量的名称
        let name = globalVariableInfo.name
        println("全局变量名称: ${name}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 1
    全局变量名称: myGlobalVar

#### [h2]prop typeInfo
    
    
    public prop typeInfo: TypeInfo

功能：获取该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的声明类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/2q3xtl-iTnW2ZYujEoMKmQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EB6B8E1AEF196B47F4ABAD460E5248EDA0D289B18C22BB27AEEC2534389CA388)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    package test
    
    import std.reflect.*
    
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量的类型信息
        let typeInfo = globalVariableInfo.typeInfo
        println("全局变量类型名称: ${typeInfo.name}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 1
    全局变量类型名称: Int64

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/FrjuTEN7SuGjZXfAsgdC3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A03D55059F313EE5E2F46E0E29696EF2438368077083B42186EA1ECE76594633)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 查找所有 MyAnnotation 类型的注解
        let annotations = globalVariableInfo.findAllAnnotations<MyAnnotation>()
        println("找到的注解数量: ${annotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    全局变量数量: 1
    找到的注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/Y3UrolirTeCdu9PeeausbQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EDBCBE8537D103D643BFD6CA7DFF0ECFC81C250DE029828383489BB4BB40EB29)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 查找 MyAnnotation 类型的注解
        let annotation = globalVariableInfo.findAnnotation<MyAnnotation>()
    
        // 检查是否找到了注解
        if (annotation.isSome()) {
            println("找到了 MyAnnotation 注解")
        } else {
            println("未找到 MyAnnotation 注解")
        }
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    全局变量数量: 1
    找到了 MyAnnotation 注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/kI40ATDAScKZdz0oU3aa3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=42F1B3796AA3356BF564E34513D7CEC418D594AA91CB4D93A93393168E0349A6)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    @MyAnnotation
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取所有注解
        let allAnnotations = globalVariableInfo.getAllAnnotations()
        println("注解总数: ${allAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    全局变量数量: 1
    注解总数: 1

#### [h2]func getValue()
    
    
    public func getValue(): Any

功能：获取该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/E4LSm-qSSfqrkwdGWTy-qg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B6BBC3B9F15EE7F9A0E1C56CD3AE21CFD6F017B96E3CEB1A1A6F8506CA9CA469)

不支持平台：macOS、iOS。

返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该全局变量的值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量的值
        let value = globalVariableInfo.getValue()
    
        // 将值转换为 Int64 类型
        let intValue = value as Int64
        println("全局变量的值: ${intValue}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 1
    全局变量的值: Some(42)

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该全局变量信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/9bj1gOYHS-6c6ChERedKfA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=86F1A34BDB861559F07A4F9FF3869C11569B0C62B55E661AE915095E5C0B31FB)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该全局变量信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量信息的哈希值
        let hashCode = globalVariableInfo.hashCode()
        println("哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    全局变量数量: 1
    哈希值: 94726377908864

#### [h2]func isMutable()
    
    
    public func isMutable(): Bool

功能：判断该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量是否可修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/xXFP_U5BQOeTfxoZcdnZqw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=87B036036B9641006C75F7CD0287F5BB9A227458A409A5B9F80EBA464FB74C6F)

  * 不支持平台：macOS、iOS。
  * 如果实例成员变量被 var 修饰符所修饰，则该全局变量可被修改。
  * 如果实例成员变量被 let 修饰符所修饰，则该全局变量不可被修改。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该全局变量可被修改则返回 true ，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var mutableVar: Int64 = 42
    public let immutableVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取全局变量信息
        let globalVariableInfos = globalVariables.toArray()
        let mutableVarInfo = globalVariableInfos[0]
        let immutableVarInfo = globalVariableInfos[1]
    
        // 检查全局变量是否可变
        let isMutable1 = mutableVarInfo.isMutable()
        println("mutableVar 是否可变: ${isMutable1}")
    
        let isMutable2 = immutableVarInfo.isMutable()
        println("immutableVar 是否可变: ${isMutable2}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 2
    mutableVar 是否可变: true
    immutableVar 是否可变: false

#### [h2]func setValue(Any)
    
    
    public func setValue(newValue: Any): Unit

功能：设置该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/65Wr8VhcQduYldCRx_U96g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9D8170D6BB4A5734FDCCC22E3E870E317EC36BC5DCA8D129D7CC4951330AA5CD)

不支持平台：macOS、iOS。

参数：

  * newValue: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 新的值。



异常：

  * [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) \- 如果该全局变量信息所对应的全局变量不可修改，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果新值 newValue 的运行时类型不是全局变量信息所对应的全局变量的声明类型的子类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量的当前值
        let currentValue = globalVariableInfo.getValue() as Int64
        println("全局变量的当前值: ${currentValue}")
    
        // 设置全局变量的新值
        globalVariableInfo.setValue(100)
    
        // 获取全局变量的新值
        let newValue = globalVariableInfo.getValue() as Int64
        println("全局变量的新值: ${newValue}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 1
    全局变量的当前值: Some(42)
    全局变量的新值: Some(100)

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该全局变量信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/rKmP1RCMSiy9JhnzTgp8sQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=77385DE861EE7329A0CB5FEFF73C461C125188DCB7F90DA9A164297B3F4606BC)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该全局变量信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var myGlobalVar: Int64 = 42
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取第一个全局变量信息
        let globalVariableInfo = globalVariables.toArray()[0]
    
        // 获取全局变量信息的字符串表示
        let str = globalVariableInfo.toString()
        println("字符串表示: ${str}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 1
    字符串表示: myGlobalVar: Int64

#### [h2]operator func !=(GlobalVariableInfo)
    
    
    public operator func !=(other: GlobalVariableInfo): Bool

功能：判断该全局变量信息与给定的另一个全局变量信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/VFkUMELqRXWG5XDjYH5o0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F072B4A6F2C641DEB57A331BC319A4BB5F7466F0FD73E6ABE0867CA42297D8DD)

不支持平台：macOS、iOS。

参数：

  * other: [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) \- 被比较相等性的另一个全局变量信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该全局变量信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var globalVar1: Int64 = 42
    public var globalVar2: Int64 = 100
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取全局变量信息
        let globalVariableInfos = globalVariables.toArray()
        let var1Info = globalVariableInfos[0]
        let var2Info = globalVariableInfos[1]
    
        // 比较两个不同的全局变量信息
        let result = var1Info != var2Info
        println("两个不同的全局变量信息不相等: ${result}")
    
        // 比较相同的全局变量信息
        let result2 = var1Info != var1Info
        println("相同的全局变量信息不相等: ${result2}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 2
    两个不同的全局变量信息不相等: true
    相同的全局变量信息不相等: false

#### [h2]operator func ==(GlobalVariableInfo)
    
    
    public operator func ==(other: GlobalVariableInfo): Bool

功能：判断该全局变量信息与给定的另一个全局变量信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/uxpRUFE9Sly7y95U5DRSTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=87020CB9A674FF62707723AFEFE6517E88818A1DC57FA0B52BB1E5620D6BEC5A)

不支持平台：macOS、iOS。

参数：

  * other: [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) \- 被比较相等性的另一个全局变量信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该全局变量信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public var globalVar1: Int64 = 42
    public var globalVar2: Int64 = 100
    
    main(): Unit {
        // 获取 test 包的信息
        let ty = PackageInfo.get("test")
    
        // 获取包中的全局变量信息
        let globalVariables = ty.variables
        println("全局变量数量: ${globalVariables.size}")
    
        // 获取全局变量信息
        let globalVariableInfos = globalVariables.toArray()
        let var1Info = globalVariableInfos[0]
        let var2Info = globalVariableInfos[1]
    
        // 比较两个不同的全局变量信息
        let result = var1Info == var2Info
        println("两个不同的全局变量信息相等: ${result}")
    
        // 比较相同的全局变量信息
        let result2 = var1Info == var1Info
        println("相同的全局变量信息相等: ${result2}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 2
    两个不同的全局变量信息相等: false
    相同的全局变量信息相等: true

#### class InstanceFunctionInfo
    
    
    public class InstanceFunctionInfo <: Equatable<InstanceFunctionInfo> & Hashable & ToString {}

功能：描述实例成员函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/9BHHYKhSRNixBGxYCxdjSA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0942D2F3370F751E34C336D81F07969A097A43CA709CFFE05E8186AF3C2BF9D2)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstanceFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/l3cjQsroQuCIYarSsG9uzA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EE0DD7DD13FF83F5F21717C5C03DBC789A05E68D35B1AD8B6F5D8CDF940CFBB1)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该实例成员函数信息所对应的实例成员函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        @MyAnnotation
        public func myMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("myMethod")
    
        // 获取注解信息
        let annotations = instanceFunctionInfo.annotations
        println("注解数量: ${annotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }

运行结果：
    
    
    注解数量: 1

#### [h2]prop genericParams
    
    
    public prop genericParams: Collection<GenericTypeInfo>

功能：获取该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的泛型参数信息列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/aH2qYaXOTEiRQI5CehPpSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D82CD649BF62B5FEF7169ECCAF17AD678A9E08267967D158FAD67B54A65AD30E)

不支持平台：macOS、iOS。

类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo)>

异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 没有泛型参数时抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func genericMethod<T>(value: T): T {
            return value
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取所有实例成员函数信息
        let functions = classInfo.instanceFunctions
        println("实例成员函数数量: ${functions.size}")
    
        // 遍历所有实例成员函数
        for (funcInfo in functions) {
            println("函数名称: ${funcInfo.name}")
            // 尝试获取泛型参数信息
            try {
                let genericParams = funcInfo.genericParams
                println("泛型参数数量: ${genericParams.size}")
    
                // 遍历泛型参数
                for (param in genericParams) {
                    println("泛型参数名称: ${param.name}")
                }
            } catch (e: InfoNotFoundException) {
                println("该函数没有泛型参数")
            }
        }
    
        return
    }

运行结果：
    
    
    实例成员函数数量: 1
    函数名称: genericMethod
    泛型参数数量: 1
    泛型参数名称: T

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数所拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/1u_pi3F_Qam3KaOTXQabww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B7106F05D12A1F26FD0862470238E64CC7F9D98EC210303D0EA68F17D7F1BD50)

  * 不支持平台：macOS、iOS。
  * 如果该实例成员函数无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 即便未被某修饰符修饰，如果拥有该修饰符的语义，该修饰符信息也将被包括在该集合中。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public open class MyClass {
        public open func publicMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("publicMethod")
    
        // 获取修饰符信息
        let modifiers = instanceFunctionInfo.modifiers
        println("修饰符数量: ${modifiers.size}")
    
        return
    }

运行结果：
    
    
    修饰符数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/QI4vchGZRTulmx699OwTFw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=48B75BF0E632DF34A7FF8CA57F902640581B86A01221B5F489216571555A790E)

  * 不支持平台：macOS、iOS。
  * 构成重载的所有实例成员函数将拥有相同的名称。
  * 操作符重载函数的名称就是该操作符本身的符号内容，如"+"，"*"，"[]"。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func myMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("myMethod")
    
        // 获取函数名称
        let name = instanceFunctionInfo.name
        println("函数名称: ${name}")
    
        return
    }

运行结果：
    
    
    函数名称: myMethod

#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<ParameterInfo>

功能：获取该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的参数信息列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/iVO5E7C7S5-fwnk2vyeXeA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F602FE9843AFCC904FFF1D7C24602E5FE967237E760CA7172983D394934D4B84)

不支持平台：macOS、iOS。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/l6V8lWjGQxGHckSfIq3kCg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=77A2E4FC3C30AA3F1DFF37714E13DFDB73165228B2A9D31314F8873A5C2AA863)

不保证参数顺序，可根据 ParameterInfo的 index 属性确定参数实际位置。

类型：[ReadOnlyList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt)<[ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func myMethod(a: Int64, b: String): Int64 {
            return a
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取所有实例成员函数
        let functions = classInfo.instanceFunctions
        println("实例成员函数数量: ${functions.size}")
    
        // 遍历所有实例成员函数
        for (funcInfo in functions) {
            println("函数名称: ${funcInfo.name}")
    
            // 获取参数信息
            let parameters = funcInfo.parameters
            println("参数数量: ${parameters.size}")
    
            // 遍历参数
            for (param in parameters) {
                println("参数名称: ${param.name}")
            }
        }
    
        return
    }

运行结果：
    
    
    实例成员函数数量: 1
    函数名称: myMethod
    参数数量: 2
    参数名称: a
    参数名称: b

#### [h2]prop returnType
    
    
    public prop returnType: TypeInfo

功能：获取该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的返回值类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/b92EQ0fFT1-3G1tT9H7mSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=010AE1F33B79E9062B5ACA7B82CE891AAC43068A0B0457A8E8666543E63548AB)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func myMethod(a: Int64, b: String): Int64 {
            return a
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取所有实例成员函数
        let functions = classInfo.instanceFunctions
        println("实例成员函数数量: ${functions.size}")
    
        // 遍历所有实例成员函数
        for (funcInfo in functions) {
            println("函数名称: ${funcInfo.name}")
    
            // 获取返回值类型信息
            let returnType = funcInfo.returnType
            println("返回值类型: ${returnType.name}")
        }
    
        return
    }

运行结果：
    
    
    实例成员函数数量: 1
    函数名称: myMethod
    返回值类型: Int64

#### [h2]func apply(Any, Array<Any>)
    
    
    public func apply(instance: Any, args: Array<Any>): Any

功能：调用该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应实例成员函数，指定实例并传入实参列表，返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/pSKRXvHzSbGO_7tKYUm6zQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=16A72B8199EA37B70524C1AB713D71AB2A475C1B771C73E25C5BE2B31AC665BF)

  * 不支持平台：macOS、iOS。
  * 实参列表的类型确保和函数入参类型完全一致。



参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 实例。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该实例成员函数的调用结果。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果存在泛型参数的函数调用了该方法，则抛出异常。
  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果该实例成员函数信息所对应的实例成员函数是抽象的，或不存在相应的函数实现，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该实例成员函数信息所对应的实例成员函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例运行时类型与该实例成员函数信息所对应的实例成员函数所属的类型不相同，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中的任何一个实参的运行时类型不是该实例成员函数信息所对应的实例成员函数的对应形参的声明类型的子类型，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的实例成员函数信息所对应的实例成员函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public var value: Int64 = 0
    
        public func setValue(newValue: Int64): Unit {
            this.value = newValue
        }
    
        public func getValue(): Int64 {
            return this.value
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 创建实例
        let instance = MyClass()
    
        // 获取实例成员函数
        let setValueFunc = classInfo.getInstanceFunction("setValue", [PrimitiveTypeInfo.get("Int64")])
        let getValueFunc = classInfo.getInstanceFunction("getValue", [])
    
        // 准备参数
        let args: Array<Any> = [42]
    
        // 调用 setValue 函数
        setValueFunc.apply(instance, args)
        println("setValue 函数调用成功")
    
        // 调用 getValue 函数
        let result = getValueFunc.apply(instance, [])
    
        // 将结果转换为 Int64 类型
        let intResult = result as Int64
        println("getValue 函数调用结果: ${intResult}")
    
        return
    }

运行结果：
    
    
    setValue 函数调用成功
    getValue 函数调用结果: Some(42)

#### [h2]func apply(Any, Array<TypeInfo>, Array<Any>)
    
    
    public func apply(instance: Any, genericTypeArgs: Array<TypeInfo>, args: Array<Any>): Any

功能：调用该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应泛型成员函数，指定实例并传入泛型参数的类型列表和参数列表，返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/ikliww69TAScggzVNgK6-w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6FB9A3DFA9DD563464C630C22D4BA166B1ABBB14E6F58B34C3C59FE506852A7B)

  * 不支持平台：macOS、iOS。
  * 泛型参数列表的类型确保和函数入参类型完全一致。



参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 实例。
  * genericTypeArgs: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 泛型参数类型信息列表。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 泛型参数列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该实例泛型函数的调用结果。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果该函数信息对应的成员函数是 abstract 或不存在函数体，则会抛出异常。
  * [InvacationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果非泛型函数调用了此方法，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例运行时类型与该成员函数信息所对应的成员函数所属的类型不相同，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该成员函数信息所对应的成员函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果函数泛型参数列表 genericTypeArgs 中的参数数目与该成员函数信息所对应的成员函数的泛型参数列表 genericParams 中的参数数目不等，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果参数列表中的任何一个参数的运行时类型不是该实例成员函数信息所对应的实例成员函数的对应形参的声明类型的子类型，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果传入的参数列表和泛型参数类型列表 genericTypeArgs 不满足该成员函数信息所对应的成员函数的参数的类型约束，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的实例成员函数信息所对应的实例成员函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func genericMethod<T>(value: T): T {
            return value
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 创建实例
        let instance = MyClass()
    
        // 获取所有实例成员函数
        let functions = classInfo.instanceFunctions
    
        // 查找 genericMethod 函数
        var genericFuncOpt: Option<InstanceFunctionInfo> = None
    
        for (funcInfo in functions) {
            if (funcInfo.name == "genericMethod") {
                genericFuncOpt = Some(funcInfo)
            }
        }
    
        // 准备泛型参数类型列表
        let genericTypeArgs: Array<TypeInfo> = [PrimitiveTypeInfo.get("Int64")]
    
        // 准备参数
        let args: Array<Any> = [42]
    
        // 调用 genericMethod 函数
        if (let Some(genericFunc) <- genericFuncOpt) {
            let result = genericFunc.apply(instance, genericTypeArgs, args)
    
            // 将结果转换为 Int64 类型
            let intResult = result as Int64
            println("genericMethod 函数调用结果: ${intResult}")
        }
    
        return
    }

运行结果：
    
    
    genericMethod 函数调用结果: Some(42)

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/u1dgUHG8Rv2nqyY5OFrfZQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D011D0EAD5414430F28E5D000844ABEA6F209C59641F6A7499741503CD2B443C)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        @MyAnnotation
        @AnotherAnnotation
        public func myMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("myMethod")
    
        // 查找所有 MyAnnotation 注解
        let myAnnotations = instanceFunctionInfo.findAllAnnotations<MyAnnotation>()
        println("MyAnnotation 注解数量: ${myAnnotations.size}")
    
        // 查找所有 AnotherAnnotation 注解
        let anotherAnnotations = instanceFunctionInfo.findAllAnnotations<AnotherAnnotation>()
        println("AnotherAnnotation 注解数量: ${anotherAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }

运行结果：
    
    
    MyAnnotation 注解数量: 1
    AnotherAnnotation 注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/co1iBJLMRG-GhkTl5mwXRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=159E8BE2D6B102399971A125EB13B859392BEA195BF1BDFEAC4B062D34CCD9A9)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        @MyAnnotation
        public func myMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("myMethod")
    
        // 查找 MyAnnotation 注解
        let myAnnotation = instanceFunctionInfo.findAnnotation<MyAnnotation>()
    
        match (myAnnotation) {
            case Some(annotation) => println("找到了 MyAnnotation 注解")
            case None => println("未找到 MyAnnotation 注解")
        }
    
        // 尝试查找不存在的注解
        let anotherAnnotation = instanceFunctionInfo.findAnnotation<AnotherAnnotation>()
    
        match (anotherAnnotation) {
            case Some(annotation) => println("找到了 AnotherAnnotation 注解")
            case None => println("未找到 AnotherAnnotation 注解")
        }
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }

运行结果：
    
    
    找到了 MyAnnotation 注解
    未找到 AnotherAnnotation 注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/jqn3GRRTSSOKBq5B6k0KmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=28281DE51C22624690BDEC221945557AAA3DFA78C33F2897878F79B1B9C11926)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        @MyAnnotation
        @AnotherAnnotation
        public func myMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("myMethod")
    
        // 获取所有注解
        let allAnnotations = instanceFunctionInfo.getAllAnnotations()
        println("注解总数: ${allAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }

运行结果：
    
    
    注解总数: 2

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该实例成员函数信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/pPZUBbUoTuOJm-8yA6P2Vw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0DCEDECDD3487CBEE27B0B89C10D30F750A7EC37D16C86776CAF3FB9AB564E26)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该实例成员函数信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func myMethod(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取实例成员函数信息
        let instanceFunctionInfo = classInfo.getInstanceFunction("myMethod")
    
        // 获取哈希值
        let hashCode = instanceFunctionInfo.hashCode()
        println("哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    哈希值: 93832974760528

#### [h2]func isAbstract()
    
    
    public func isAbstract(): Bool

功能：判断 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 所对应的实例成员函数是否拥有 abstract 语义。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/cdIfhrb5Q1K8DJnk0sow7Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9158CAD662A8A468FCE8603078C428BE16693A074BB0FA5A1934DB8BBFD47941)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员函数拥有 abstract 语义则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public abstract class MyClass {
        public func method1(): Int64 {
            return 42
        }
    
        public func method2(): Int64
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取方法信息
        let func1 = classInfo.getInstanceFunction("method1")
        let func2 = classInfo.getInstanceFunction("method2")
    
        // 检查是否为抽象方法
        let isAbstract1 = func1.isAbstract()
        let isAbstract2 = func2.isAbstract()
    
        println("method1 是否为抽象方法: ${isAbstract1}")
        println("method2 是否为抽象方法: ${isAbstract2}")
    
        return
    }

运行结果：
    
    
    method1 是否为抽象方法: false
    method2 是否为抽象方法: true

#### [h2]func isOpen()
    
    
    public func isOpen(): Bool

功能：判断该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数是否拥有 open 语义。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/gM0HJC5pQM2iz30GD1HC0w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=48AD12E468EC6DC326DBEA409F5D36C9DE9DC7A05375E0F92D982868557597FE)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员函数拥有 open 语义则返回 true，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/n96h-w9PT1qYHbS-ICN-NA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6019C35B284E20152CBAFBA1081E3560607DC84D3896F2BB9FA5AFB912902702)

interface 类型中的实例成员函数默认均拥有 open 语义。

示例：
    
    
    package test
    
    import std.reflect.*
    
    public open class MyClass {
        public func method1(): Int64 {
            return 42
        }
    
        public open func method2(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取方法信息
        let methodFunc1 = classInfo.getInstanceFunction("method1")
        let methodFunc2 = classInfo.getInstanceFunction("method2")
    
        // 检查是否为开放方法
        let isOpen1 = methodFunc1.isOpen()
        let isOpen2 = methodFunc2.isOpen()
    
        println("method1 是否为开放方法: ${isOpen1}")
        println("method2 是否为开放方法: ${isOpen2}")
    
        return
    }

运行结果：
    
    
    method1 是否为开放方法: false
    method2 是否为开放方法: true

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该实例成员函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/__AmJJzUQYWE7TuoOpf1cg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DFF4430661AC89E63B61E3956A84AAE3C02083A5214254EE22399FD2CE10D583)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该实例成员函数信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func myMethod(a: Int64, b: String): Int64 {
            return a
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取所有实例成员函数
        let functions = classInfo.instanceFunctions
    
        // 遍历所有实例成员函数
        for (funcInfo in functions) {
            println("函数名称: ${funcInfo.name}")
    
            // 获取字符串表示
            let str = funcInfo.toString()
            println("字符串表示: ${str}")
        }
    
        return
    }

运行结果：
    
    
    函数名称: myMethod
    字符串表示: func myMethod(Int64, String): Int64

#### [h2]operator func !=(InstanceFunctionInfo)
    
    
    public operator func !=(other: InstanceFunctionInfo): Bool

功能：判断该实例成员函数信息与给定的另一个实例成员函数信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/keBkIjQ8QsmUVGHZxXdRbg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=685DABDC0EF2759DD74872A6D7F1744D08281ACA4DEDA1BAC68538A8CA256E86)

不支持平台：macOS、iOS。

参数：

  * other: [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) \- 被比较相等性的另一个实例成员函数信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员函数信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func method1(): Int64 {
            return 42
        }
    
        public func method2(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取所有实例成员函数
        let functions = classInfo.instanceFunctions
        let funcArray = functions.toArray()
    
        // 获取两个不同的函数信息
        let func1 = funcArray[0]
        let func2 = funcArray[1]
    
        // 比较两个不同的函数信息
        let result1 = func1 != func2
        println("两个不同的函数信息不相等: ${result1}")
    
        // 比较相同的函数信息
        let result2 = func1 != func1
        println("相同的函数信息不相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的函数信息不相等: true
    相同的函数信息不相等: false

#### [h2]operator func ==(InstanceFunctionInfo)
    
    
    public operator func ==(other: InstanceFunctionInfo): Bool

功能：判断该实例成员函数信息与给定的另一个实例成员函数信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/PXVJ9ixKQUK9x_HdscL18A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6A23FF9AD0C8EA43543F5374B99A32717C1D7BDA3801BE41F27790C6A19B7BCB)

不支持平台：macOS、iOS。

参数：

  * other: [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) \- 被比较相等性的另一个实例成员函数信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员函数信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public func method1(): Int64 {
            return 42
        }
    
        public func method2(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("test.MyClass")
    
        // 获取所有实例成员函数
        let functions = classInfo.instanceFunctions
        let funcArray = functions.toArray()
    
        // 获取两个不同的函数信息
        let func1 = funcArray[0]
        let func2 = funcArray[1]
    
        // 比较两个不同的函数信息
        let result1 = func1 == func2
        println("两个不同的函数信息相等: ${result1}")
    
        // 比较相同的函数信息
        let result2 = func1 == func1
        println("相同的函数信息相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的函数信息相等: false
    相同的函数信息相等: true

#### class InstancePropertyInfo
    
    
    public class InstancePropertyInfo <: Equatable<InstancePropertyInfo> & Hashable & ToString {}

功能：描述实例成员属性信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/Gt5afb0gQs6uq-DPdq0TlQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E822FC2113D909B85585CA671D6D7B8BF561FB15E14D1B7BB92E142CF6B7CDCD)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstancePropertyInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/KaV3dQU3Swudau82-94Fmw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6610A5972ABD1E9FE32B30A283280ED6F333046AD5F05659EC439CC28E1FACF7)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该实例成员属性信息所对应的实例成员属性，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    import std.reflect.*
    
    public class MyTestClass {
        @MyCustomAnnotation
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 MyTestClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyTestClass")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取注解信息
        let annotations = propertyInfo.annotations
        println("注解数量: ${annotations.size}")
    
        return
    }
    
    @Annotation
    public class MyCustomAnnotation {
        public const init() {}
    }

运行结果：
    
    
    注解数量: 1

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性所拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/-9iwSboTTqG2vrF-JdDQQQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=78C73A1B2DE257C2653E4BCC44564A864ECE8E1BD227C36A68F4B9D8415E4607)

  * 不支持平台：macOS、iOS。
  * 如果该实例成员属性无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 即便未被某修饰符修饰，如果拥有该修饰符的语义，该修饰符信息也将被包括在该集合中。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    import std.reflect.*
    
    public open class MyTestClass {
        public open prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 MyTestClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyTestClass")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取修饰符信息
        let modifiers = propertyInfo.modifiers
        println("修饰符数量: ${modifiers.size}")
    
        return
    }

运行结果：
    
    
    修饰符数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/vtFUspIzRo-8y3Nnn1UStw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=10808F1F6D0834C55ACB73C1DA7C8E49278193984631624A56615EF52A0A70AB)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    import std.reflect.*
    
    public class MyTestClass {
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 MyTestClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyTestClass")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取属性名称
        let name = propertyInfo.name
        println("属性名称: ${name}")
    
        return
    }

运行结果：
    
    
    属性名称: myProperty

#### [h2]prop typeInfo
    
    
    public prop typeInfo: TypeInfo

功能：获取该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性的声明类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/rDRQqoGLQgeMDFG7O3h2eQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=99163E417A796D597FD7C3C5CC29F392A45C8D37DF0FD4807D6EB343EBDBE995)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    import std.reflect.*
    
    public class MyTestClass {
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 MyTestClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyTestClass")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取类型信息
        let typeInfo = propertyInfo.typeInfo
        println("属性类型: ${typeInfo.name}")
    
        return
    }

运行结果：
    
    
    属性类型: Int64

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/2YpQkMd1Q4ia6MjIkShOcA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7A3AC7A68362944092A27139AECBEC6FD2EE0ABA4DA3F236D5540ADE9555BD39)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    import std.reflect.*
    
    public class MyTestClass {
        @MyCustomAnnotation
        @AnotherAnnotation
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 MyTestClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyTestClass")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 查找所有 MyCustomAnnotation 注解
        let myAnnotations = propertyInfo.findAllAnnotations<MyCustomAnnotation>()
        println("MyCustomAnnotation 注解数量: ${myAnnotations.size}")
    
        // 查找所有 AnotherAnnotation 注解
        let anotherAnnotations = propertyInfo.findAllAnnotations<AnotherAnnotation>()
        println("AnotherAnnotation 注解数量: ${anotherAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class MyCustomAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }

运行结果：
    
    
    MyCustomAnnotation 注解数量: 1
    AnotherAnnotation 注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/ze-_CMsNTNCbrmdZee0FQQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F491113F15AB15F62074D4B8FC3A9EF04A09F956E217951C2F1AFC62273A361D)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    import std.reflect.*
    
    public class TestClassB {
        @CustomAnnotationA
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 TestClassB 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassB")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 查找 CustomAnnotationA 注解
        let myAnnotation = propertyInfo.findAnnotation<CustomAnnotationA>()
    
        match (myAnnotation) {
            case Some(_) => println("找到了 CustomAnnotationA 注解")
            case None => println("未找到 CustomAnnotationA 注解")
        }
    
        // 尝试查找不存在的注解
        let anotherAnnotation = propertyInfo.findAnnotation<CustomAnnotationB>()
    
        match (anotherAnnotation) {
            case Some(_) => println("找到了 CustomAnnotationB 注解")
            case None => println("未找到 CustomAnnotationB 注解")
        }
    
        return
    }
    
    @Annotation
    public class CustomAnnotationA {
        public const init() {}
    }
    
    @Annotation
    public class CustomAnnotationB {
        public const init() {}
    }

运行结果：
    
    
    找到了 CustomAnnotationA 注解
    未找到 CustomAnnotationB 注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/jCJQFyUOQeOPrZLupk-5rg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=03634F5B5C84BA39EDDA96C70B1FE9E0C3151E634EFC3E480BA801C0E4C5CC64)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    import std.reflect.*
    
    public class TestClassC {
        @CustomAnnotationA
        @CustomAnnotationB
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 TestClassC 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassC")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取所有注解
        let allAnnotations = propertyInfo.getAllAnnotations()
        println("注解总数: ${allAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class CustomAnnotationA {
        public const init() {}
    }
    
    @Annotation
    public class CustomAnnotationB {
        public const init() {}
    }

运行结果：
    
    
    注解总数: 2

#### [h2]func getValue(Any)
    
    
    public func getValue(instance: Any): Any

功能：获取该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性在给定实例中的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/vV2Ks14FQo6wOrKCF0yS0A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7276C98194C4DD9280C8DEA321CB14A0AFE35DC806730ABC56B5456125526DA6)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 实例。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该实例成员属性在入参实例中的值。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例运行时类型与该实例成员属性信息所对应的实例成员属性所属的类型不严格相同，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public prop width: Int64 {
            get() {
                5
            }
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("default.Rectangular")
        // 获取 InstancePropertyInfo
        var gip = ty.getInstanceProperty("width")
    
        // 获取实例值
        var r = Rectangular()
        var result = gip.getValue(r) as Int64
        println(result)
        return
    }

运行结果：
    
    
    Some(5)

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该实例成员属性信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/YFpuPu4HQxuBUQjc0vyjyg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C4A8127625CF697FE6BA17D94BF5C1574DA85A527E85E072AE75C6240D7F06D4)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该实例成员属性信息的哈希值。



示例：
    
    
    import std.reflect.*
    
    public class MyTestClass {
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 MyTestClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyTestClass")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取哈希值
        let hashCode = propertyInfo.hashCode()
        println("哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    哈希值: 94842408817472

#### [h2]func isAbstract()
    
    
    public func isAbstract(): Bool

功能：判断该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性是否是抽象的。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/EZ_NMJdJSxCurupzNE3uYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7982DDA376608DA8DC5BBC940AE640987F6201E9BFDACBD417C4438D99CA7A8B)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性是抽象的，则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public abstract class TestClassD {
        public prop property1: Int64 {
            get() {
                42
            }
        }
        public prop property2: Int64
    }
    
    main(): Unit {
        // 获取 TestClassD 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassD")
    
        // 获取属性信息
        let prop1 = classInfo.getInstanceProperty("property1")
        let prop2 = classInfo.getInstanceProperty("property2")
    
        // 检查是否为抽象属性
        let isAbstract1 = prop1.isAbstract()
        let isAbstract2 = prop2.isAbstract()
    
        println("property1 是否为抽象属性: ${isAbstract1}")
        println("property2 是否为抽象属性: ${isAbstract2}")
    
        return
    }

运行结果：
    
    
    property1 是否为抽象属性: false
    property2 是否为抽象属性: true

#### [h2]func isMutable()
    
    
    public func isMutable(): Bool

功能：判断该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性是否可修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/ReaWllyUS7SGlR4pxl87Zg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=13CD6745CFECB480B28790A966C7A82AC1C78789600BA28CB07574DB3C69DC3F)

  * 不支持平台：macOS、iOS。
  * 如果实例成员属性被 mut 修饰符所修饰，则该实例成员属性可被修改，否则不可被修改。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员属性信息所对应的实例成员属性可被修改则返回 true ，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public class TestClassE {
        public prop myProperty1: Int64 {
            get() {
                42
            }
        }
        public mut prop myProperty2: Int64 {
            get() {
                42
            }
            set(v) {}
        }
    }
    
    main(): Unit {
        // 获取 TestClassE 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassE")
    
        // 获取属性信息
        let myProp1 = classInfo.getInstanceProperty("myProperty1")
        let myProp2 = classInfo.getInstanceProperty("myProperty2")
    
        // 检查是否可修改
        let isMutable1 = myProp1.isMutable()
        let isMutable2 = myProp2.isMutable()
    
        println("myProperty1 是否可修改: ${isMutable1}")
        println("myProperty2 是否可修改: ${isMutable2}")
    
        return
    }

运行结果：
    
    
    myProperty1 是否可修改: false
    myProperty2 是否可修改: true

#### [h2]func isOpen()
    
    
    public func isOpen(): Bool

功能：判断该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性是否拥有 open 语义。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/aoxApXLJT02dhhbLLZ8XIA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A697A854C1311B67BC61DA12D38D88E25598EF2965177BA1C35366088023C860)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性拥有 open 语义则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public open class TestClassF {
        public prop property1: Int64 {
            get() {
                42
            }
        }
    
        public open prop property2: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 TestClassF 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassF")
    
        // 获取属性信息
        let prop1 = classInfo.getInstanceProperty("property1")
        let prop2 = classInfo.getInstanceProperty("property2")
    
        // 检查是否为开放属性
        let isOpen1 = prop1.isOpen()
        let isOpen2 = prop2.isOpen()
    
        println("property1 是否为开放属性: ${isOpen1}")
        println("property2 是否为开放属性: ${isOpen2}")
    
        return
    }

运行结果：
    
    
    property1 是否为开放属性: false
    property2 是否为开放属性: true

#### [h2]func setValue(Any, Any)
    
    
    public func setValue(instance: Any, newValue: Any): Unit

功能：设置该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性在给定实例中的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/fc7mWmUGS3yc5Is3sd_0IA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=089961EEB7A8BB27C0264ECF0117D7B2C83DC9D13BAD36F7588BD91668042D89)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 实例。
  * newValue: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 新值。



异常：

  * [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) \- 如果该实例成员属性信息所对应的实例成员属性不可修改，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例运行时类型与该实例成员属性信息所对应的实例成员属性所属的类型不严格相同，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果新值 newValue 的运行时类型不是该实例成员属性信息所对应的实例成员属性的声明类型的子类型，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class TestClassG {
        private var _myProperty: Int64 = 0
        public mut prop myProperty: Int64 {
            get() {
                _myProperty
            }
            set(v) {
                _myProperty = v
            }
        }
    }
    
    main(): Unit {
        // 创建实例
        let instance = TestClassG()
    
        // 获取 TestClassG 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassG")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 设置新值
        propertyInfo.setValue(instance, 100)
    
        // 验证值是否设置成功
        let currentValue = propertyInfo.getValue(instance) as Int64
        println("当前值: ${currentValue}")
    
        return
    }

运行结果：
    
    
    当前值: Some(100)

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该实例成员属性信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/Hf-MHvF5Tnu727HNhSYBVQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9A978B94D383FF9F568FCAFA6D789CE4FB3BFFA97FE5EC32FCF3563E4F04C727)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该实例成员属性信息。



示例：
    
    
    import std.reflect.*
    
    public class TestClassH {
        public prop myProperty: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 TestClassH 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassH")
    
        // 获取实例成员属性信息
        let propertyInfo = classInfo.getInstanceProperty("myProperty")
    
        // 获取字符串表示
        let str = propertyInfo.toString()
        println("字符串表示: ${str}")
    
        return
    }

运行结果：
    
    
    字符串表示: prop myProperty: Int64

#### [h2]operator func !=(InstancePropertyInfo)
    
    
    public operator func !=(other: InstancePropertyInfo): Bool

功能：判断该实例成员属性信息与给定的另一个实例成员属性信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/YKk0IFc5Qs-3wUSyxTAhEg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=61B10F5C4BC41D67C93A1C125CA0E45C1F4884D5B32526A8F5BAAC1075A7AB06)

不支持平台：macOS、iOS。

参数：

  * other: [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) \- 被比较相等性的另一个实例成员属性信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员属性信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public class TestClassI {
        public prop property1: Int64 {
            get() {
                42
            }
        }
    
        public prop property2: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 TestClassI 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassI")
    
        // 获取实例成员属性信息
        let prop1 = classInfo.getInstanceProperty("property1")
        let prop2 = classInfo.getInstanceProperty("property2")
    
        // 比较两个不同的属性信息
        let result1 = prop1 != prop2
        println("两个不同的属性信息不相等: ${result1}")
    
        // 比较相同的属性信息
        let result2 = prop1 != prop1
        println("相同的属性信息不相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的属性信息不相等: true
    相同的属性信息不相等: false

#### [h2]operator func ==(InstancePropertyInfo)
    
    
    public operator func ==(other: InstancePropertyInfo): Bool

功能：判断该实例成员属性信息与给定的另一个实例成员属性信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/ufI40VXPR-uM7kFhOK2_YQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=1CDE629282D329368D4EB6FFE0A0BA9599BB6BD513FAB325B60AF1A0FFB9E1D0)

不支持平台：macOS、iOS。

参数：

  * other: [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) \- 被比较相等性的另一个实例成员属性信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员属性信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public class TestClassJ {
        public prop property1: Int64 {
            get() {
                42
            }
        }
    
        public prop property2: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取 TestClassJ 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassJ")
    
        // 获取实例成员属性信息
        let prop1 = classInfo.getInstanceProperty("property1")
        let prop2 = classInfo.getInstanceProperty("property2")
    
        // 比较两个不同的属性信息
        let result1 = prop1 == prop2
        println("两个不同的属性信息相等: ${result1}")
    
        // 比较相同的属性信息
        let result2 = prop1 == prop1
        println("相同的属性信息相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的属性信息相等: false
    相同的属性信息相等: true

#### class InstanceVariableInfo
    
    
    public class InstanceVariableInfo <: Equatable<InstanceVariableInfo> & Hashable & ToString {}

功能：描述实例成员变量信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/Gwm-fHLuSQa-FCae8lG10w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6D440BFE5ECAC20E28A55E515CFC0B4D3BAFAC7AFD9D8D3F099AAABDD46F72BE)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstanceVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/mF5heXGhTN2Bf7ekljrhQA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C533B6F552048C8C8200EF0F43423511BF04C383E23445FFF71CF76582DF7CE7)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该实例成员变量信息所对应的实例成员变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    import std.reflect.*
    
    public class MyClass {
        @MyCustomAnnotation
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyClass")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取注解信息
        let annotations = variableInfo.annotations
        println("注解数量: ${annotations.size}")
    
        return
    }
    
    @Annotation
    public class MyCustomAnnotation {
        public const init() {}
    }

运行结果：
    
    
    注解数量: 1

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量所拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/R4UaK3NlTrytEIAIhGYtpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D1FAC6566A291BC23A1AE5C4ECD305C293D59468B1FAEA032A672B32432924C1)

  * 不支持平台：macOS、iOS。
  * 如果该实例成员变量无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 即便未被某修饰符修饰，如果拥有该修饰符的语义，该修饰符信息也将被包括在该集合中。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    import std.reflect.*
    
    public class MyClass {
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyClass")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取修饰符信息
        let modifiers = variableInfo.modifiers
        println("修饰符数量: ${modifiers.size}")
    
        return
    }

运行结果：
    
    
    修饰符数量: 0

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/DDOshcsuRNiYKvrxNCp2Og/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=093F693D9D8B1DE33C05A12219EEC548669DF654A8967AC59F971498FAAFC5E8)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    import std.reflect.*
    
    public class MyClass {
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyClass")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取变量名称
        let name = variableInfo.name
        println("变量名称: ${name}")
    
        return
    }

运行结果：
    
    
    变量名称: myVariable

#### [h2]prop typeInfo
    
    
    public prop typeInfo: TypeInfo

功能：获取该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量的声明类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/9dQdPnDbRICF7au2zo-I9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7B661D953324786E0A3CD1A0789FA460B4AB3442CFF0C9971905157F448D4446)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    import std.reflect.*
    
    public class MyClass {
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 MyClass 类型信息
        let classInfo = ClassTypeInfo.get("default.MyClass")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取类型信息
        let typeInfo = variableInfo.typeInfo
        println("变量类型: ${typeInfo.name}")
    
        return
    }

运行结果：
    
    
    变量类型: Int64

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/tq2-YvYCSkG-PyI1V_RrnA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0E45872842A0C6421F7A0E63A033239D04EAD4FB1D313F716AB90344B8D0D555)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    import std.reflect.*
    
    public class TestClassA {
        @CustomAnnotationA
        @CustomAnnotationB
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassA 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassA")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 查找所有 CustomAnnotationA 注解
        let annotationsA = variableInfo.findAllAnnotations<CustomAnnotationA>()
        println("CustomAnnotationA 注解数量: ${annotationsA.size}")
    
        // 查找所有 CustomAnnotationB 注解
        let annotationsB = variableInfo.findAllAnnotations<CustomAnnotationB>()
        println("CustomAnnotationB 注解数量: ${annotationsB.size}")
    
        return
    }
    
    @Annotation
    public class CustomAnnotationA {
        public const init() {}
    }
    
    @Annotation
    public class CustomAnnotationB {
        public const init() {}
    }

运行结果：
    
    
    CustomAnnotationA 注解数量: 1
    CustomAnnotationB 注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/EJxluv70QAWqWbTY_Zu7DA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8F1DEC06DFFB0F54FE9B7BC568F660A9846DD236D3B92E9F285B8DEC2C5A953D)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    import std.reflect.*
    
    public class TestClassB {
        @AnnotationX
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassB 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassB")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 查找 AnnotationX 注解
        let annotationX = variableInfo.findAnnotation<AnnotationX>()
    
        match (annotationX) {
            case Some(_) => println("找到了 AnnotationX 注解")
            case None => println("未找到 AnnotationX 注解")
        }
    
        // 尝试查找不存在的注解
        let annotationY = variableInfo.findAnnotation<AnnotationY>()
    
        match (annotationY) {
            case Some(_) => println("找到了 AnnotationY 注解")
            case None => println("未找到 AnnotationY 注解")
        }
    
        return
    }
    
    @Annotation
    public class AnnotationX {
        public const init() {}
    }
    
    @Annotation
    public class AnnotationY {
        public const init() {}
    }

运行结果：
    
    
    找到了 AnnotationX 注解
    未找到 AnnotationY 注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/3vGj7MkaQxSsVNYFfvs12Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F3208DB2EBB5644518816418119F86EC542189D5069B0CB28B5672F63DC5B395)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    import std.reflect.*
    
    public class TestClassC {
        @AnnotationX
        @AnnotationY
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassC 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassC")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取所有注解
        let allAnnotations = variableInfo.getAllAnnotations()
        println("注解总数: ${allAnnotations.size}")
    
        return
    }
    
    @Annotation
    public class AnnotationX {
        public const init() {}
    }
    
    @Annotation
    public class AnnotationY {
        public const init() {}
    }

运行结果：
    
    
    注解总数: 2

#### [h2]func getValue(Any)
    
    
    public func getValue(instance: Any): Any

功能：获取该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量在给定实例中的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/jR2c0LMHRbGAY_R-jGPJuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CDE64114BC191A242691CC349649DA548C1A3E9E8DBE12118CA48D74BA142E6A)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 实例。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该实例成员变量在入参实例中的值。



异常：

  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例运行时类型与该实例成员变量信息所对应的实例成员变量所属的类型不严格相同，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class TestClassGetValue {
        public var myVariable: Int64 = 42
        public let immutableVar: String = "Hello"
    }
    
    main(): Unit {
        // 创建实例
        let instance = TestClassGetValue()
    
        // 获取 TestClassGetValue 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassGetValue")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
        let immutableVarInfo = classInfo.getInstanceVariable("immutableVar")
    
        // 获取变量值
        let value = variableInfo.getValue(instance) as Int64
        let immutableValue = immutableVarInfo.getValue(instance) as String
    
        println("myVariable 的值: ${value}")
        println("immutableVar 的值: ${immutableValue}")
    
        return
    }

运行结果：
    
    
    myVariable 的值: Some(42)
    immutableVar 的值: Some(Hello)

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该实例成员变量信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/AL82ugs8RgyE98vFfl0Qyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8D6F059D9E8CF36D5860FB525EA70020CC0F68EEBABCDC16BAC5E96D3DF17A3E)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该实例成员变量信息的哈希值。



示例：
    
    
    import std.reflect.*
    
    public class TestClassD {
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassD 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassD")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取哈希值
        let hashCode = variableInfo.hashCode()
        println("哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    哈希值: 94484935947016

#### [h2]func isMutable()
    
    
    public func isMutable(): Bool

功能：判断该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量是否可修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/xXwv8xd3RnmBHhVvExFyGA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5251DCEF71D8E0722C8989335C3B38DFD715C0900B909233B099ED0A563878B2)

  * 不支持平台：macOS、iOS。
  * 如果实例成员变量被 var 修饰符所修饰，则该实例成员变量可被修改。
  * 如果实例成员变量被 let 修饰符所修饰，则该实例成员变量不可被修改。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员变量信息所对应的实例成员变量可被修改则返回 true ，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public class TestClassE {
        public var mutableVariable: Int64 = 42
        public let immutableVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassE 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassE")
    
        // 获取变量信息
        let mutableVar = classInfo.getInstanceVariable("mutableVariable")
        let immutableVar = classInfo.getInstanceVariable("immutableVariable")
    
        // 检查是否可修改
        let isMutable1 = mutableVar.isMutable()
        let isMutable2 = immutableVar.isMutable()
    
        println("mutableVariable 是否可修改: ${isMutable1}")
        println("immutableVariable 是否可修改: ${isMutable2}")
    
        return
    }

运行结果：
    
    
    mutableVariable 是否可修改: true
    immutableVariable 是否可修改: false

#### [h2]func setValue(Any, Any)
    
    
    public func setValue(instance: Any, newValue: Any): Unit

功能：设置该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量在给定实例中的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/LNmMewGUQrmAWLH1vK2Cpw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=84B463A1091D56D6D07916637C03B612B667B183F39CC32216FE0251E5CC3BDF)

不支持平台：macOS、iOS。

参数：

  * instance: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 实例。
  * newValue: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 新值。



异常：

  * [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) \- 如果该实例成员变量信息所对应的实例成员变量不可修改，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果入参实例运行时类型与该实例成员变量信息所对应的实例成员变量所属的类型不严格相同，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果新值 newValue 的运行时类型不是该实例成员变量信息所对应的实例成员变量的声明类型的子类型，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class TestClassF {
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 创建实例
        let instance = TestClassF()
    
        // 获取 TestClassF 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassF")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 设置新值
        variableInfo.setValue(instance, 100)
    
        // 验证值是否设置成功
        let currentValue = variableInfo.getValue(instance) as Int64
        println("当前值: ${currentValue}")
    
        return
    }

运行结果：
    
    
    当前值: Some(100)

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该实例成员变量信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/JqJYn3_6S8e6SR1FK8OybQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C94F963D4CC13225873E673208B3399EB65870A3C90F46F72EDA7AEEECD059EE)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该实例成员变量信息。



示例：
    
    
    import std.reflect.*
    
    public class TestClassG {
        public var myVariable: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassG 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassG")
    
        // 获取实例成员变量信息
        let variableInfo = classInfo.getInstanceVariable("myVariable")
    
        // 获取字符串表示
        let str = variableInfo.toString()
        println("字符串表示: ${str}")
    
        return
    }

运行结果：
    
    
    字符串表示: myVariable: Int64

#### [h2]operator func !=(InstanceVariableInfo)
    
    
    public operator func !=(other: InstanceVariableInfo): Bool

功能：判断该实例成员变量信息与给定的另一个实例成员变量信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/30EP8rU3SHSkKPJoQGommQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=82FCD76289CEBA9A2A0A9750D18C74331F24A40DB91CB767A4B5193660F5B743)

不支持平台：macOS、iOS。

参数：

  * other: [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) \- 被比较相等性的另一个实例成员变量信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员变量信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public class TestClassH {
        public var variable1: Int64 = 42
        public var variable2: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassH 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassH")
    
        // 获取实例成员变量信息
        let var1 = classInfo.getInstanceVariable("variable1")
        let var2 = classInfo.getInstanceVariable("variable2")
    
        // 比较两个不同的变量信息
        let result1 = var1 != var2
        println("两个不同的变量信息不相等: ${result1}")
    
        // 比较相同的变量信息
        let result2 = var1 != var1
        println("相同的变量信息不相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的变量信息不相等: true
    相同的变量信息不相等: false

#### [h2]operator func ==(InstanceVariableInfo)
    
    
    public operator func ==(other: InstanceVariableInfo): Bool

功能：判断该实例成员变量信息与给定的另一个实例成员变量信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/prF_Ls2lRIef6V710Wfdfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F3037998CFB37F9A03B03142F60A770ACC0C13DDE2DF7B466DEC2D9BA20293EE)

不支持平台：macOS、iOS。

参数：

  * other: [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) \- 被比较相等性的另一个实例成员变量信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员变量信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    public class TestClassI {
        public var variable1: Int64 = 42
        public var variable2: Int64 = 42
    }
    
    main(): Unit {
        // 获取 TestClassI 类型信息
        let classInfo = ClassTypeInfo.get("default.TestClassI")
    
        // 获取实例成员变量信息
        let var1 = classInfo.getInstanceVariable("variable1")
        let var2 = classInfo.getInstanceVariable("variable2")
    
        // 比较两个不同的变量信息
        let result1 = var1 == var2
        println("两个不同的变量信息相等: ${result1}")
    
        // 比较相同的变量信息
        let result2 = var1 == var1
        println("相同的变量信息相等: ${result2}")
    
        return
    }

运行结果：
    
    
    两个不同的变量信息相等: false
    相同的变量信息相等: true

#### class InterfaceTypeInfo
    
    
    public class InterfaceTypeInfo <: TypeInfo {}

功能：interface 类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/ZJS24YK6TAi-dYXEhf4vmQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B0B98FB96478A2B7FDFFC40AE23F37389FBC0531067978AFB27131A130CD47CA)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop sealedSubtypes
    
    
    public prop sealedSubtypes: Collection<TypeInfo>

功能：如果该 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) 所对应的 interface 类型拥有 sealed 语义，则获取该 interface 类型所在包内的所有子类型的类型信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/9waWScJXSia-lgedFWa7Ww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=06AA6C26EBBDB7C47F68418850B3C63D03364242D66408AA3BAD4A0642A15CD9)

  * 不支持平台：macOS、iOS。
  * 如果该 interface 类型不拥有 sealed 语义，则返回空集合。
  * 如果该 interface 类型拥有 sealed 语义，那么获得的集合必不可能是空集合，因为该 interface 类型本身就是自己的子类型。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)>

示例：
    
    
    import std.reflect.*
    
    // 创建一个sealed接口
    sealed interface Shape {}
    
    // 创建实现该接口的类
    public class Circle <: Shape {
        public var radius: Int64 = 5
    }
    
    public class Square <: Shape {
        public var side: Int64 = 4
    }
    
    main(): Unit {
        // 获取接口类型信息
        let shapeType = InterfaceTypeInfo.get("default.Shape")
    
        // 获取sealed子类型信息
        let subtypes = shapeType.sealedSubtypes
        println("sealed子类型数量: ${subtypes.size}")
    
        // 遍历并打印所有sealed子类型
        for (subtype in subtypes) {
            println("子类型: ${subtype.name}")
        }
    
        return
    }

运行结果：
    
    
    sealed子类型数量: 3
    子类型: Shape
    子类型: Circle
    子类型: Square

#### [h2]static func get(String)
    
    
    public redef static func get(qualifiedName: String): InterfaceTypeInfo

功能：获取给定 qualifiedName 所对应的类型的 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/QXXMOmMJTXeSprlOQ8ixkg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9A96A7E5C9E7EFF9A83CA923C552FFB7CCC1B2A0DD1A14A0EC2353592EF3AD79)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) \- 类型的限定名称 qualifiedName 所对应的 Interface 类型的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获取与给定类型的限定名称 qualifiedName 匹配的类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public interface Rectangular {}
    
    main(): Unit {
        let ty = InterfaceTypeInfo.get("default.Rectangular")
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]static func of(Any)
    
    
    public redef static func of(a: Any): InterfaceTypeInfo

功能：获取给定的任意类型实例的运行时类型所对应的类型信息。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/muAMdceVRgyc0V41Jbeykg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=90B68B4C1CB468D261FE039C8E01F80847AFDBAA0F0E6B78C00F3EEE8615786A)

不支持平台：macOS、iOS。

参数：

  * a: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 任意类型的实例。



返回值：

  * [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) \- 实例 a 的运行时类型所对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public open class Drawable {}
    
    public class Point <: Drawable {
        public var x: Int64 = 0
        public var y: Int64 = 0
    }
    
    main(): Unit {
        // 创建实例
        let point: Drawable = Point()
    
        // 获取实例的运行时类型信息
        let runtimeType = InterfaceTypeInfo.of(point)
        println("运行时类型: ${runtimeType.name}")
    
        return
    }

运行结果：
    
    
    运行时类型: Point

#### [h2]static func of<T>()
    
    
    public redef static func of<T>(): InterfaceTypeInfo

功能：获取给定 T 类型对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/0_So7Wp6Qpu2cRdsY3zetw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9A70E5E489D33138340D20332003A61C5378F79D5315D84BF8856438CB5113E7)

不支持平台：macOS、iOS。

返回值：

  * [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) \- T 类型对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得类型 T 所对应的类型信息，抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public interface Drawable {}
    
    main(): Unit {
        // 通过泛型获取接口类型信息
        let drawableType = InterfaceTypeInfo.of<Drawable>()
        println("Drawable接口的类型信息: ${drawableType.name}")
    
        return
    }

运行结果：
    
    
    Drawable接口的类型信息: Drawable

#### [h2]func isSealed()
    
    
    public func isSealed(): Bool

功能：判断该 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) 所对应的 interface 类型是否拥有 sealed 语义。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/yyPYsXs8Qw-43snX0f0J3Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9E3885A35CCDDAE33B76DEAE37EEF7CE9D2F8778743015D224E47A5CE839AB60)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 interface 类型拥有 sealed 语义则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    // 创建一个sealed接口
    sealed interface Shape {}
    
    main(): Unit {
        // 获取接口类型信息
        let shapeType = InterfaceTypeInfo.get("default.Shape")
    
        // 检查是否为sealed接口
        let isSealed = shapeType.isSealed()
        println("Shape接口是否为sealed: ${isSealed}")
    
        return
    }

运行结果：
    
    
    Shape接口是否为sealed: true

#### class PackageInfo
    
    
    public class PackageInfo <: Equatable<PackageInfo> & Hashable & ToString {}

功能：描述包信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/3MxkBaVdQh6_OoVaSv8hIA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=1EF73D5B9645154627B3E4A1880DD84875C006BD7F1BE99D73B00681F4279BD0)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<PackageInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop functions
    
    
    public prop functions: Collection<GlobalFunctionInfo>

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中所有 public 全局函数的信息所组成的列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/YmK-HH9aT1e9mKnAXfoc2g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9C5733AF3F420EA46F78CF973535E7314175A20DDC8508EACE9894F2D21F3971)

不支持平台：macOS、iOS。

类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo)>

示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    // 定义一些公开全局函数用于演示
    public func testFunction1(): String {
        return "Hello from testFunction1"
    }
    
    public func testFunction2(x: Int64): Int64 {
        return x * 2
    }
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取包中的全局函数信息
        let functions = packageInfo.functions
        println("全局函数数量: ${functions.size}")
    
        return
    }

运行结果：
    
    
    全局函数数量: 2

#### [h2]prop name
    
    
    public prop name: String

功能：获取该包信息所对应的包的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/sVuRok8uQwmGfqZPiZCBwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5139DA4BF63403367A2D023166F56820969FB5521B5F271256008AA48E2706D2)

  * 不支持平台：macOS、iOS。
  * 包的名称不包含其所在的模块名称和其父包的名称，例如限定名称为 a/b.c.d 的包的名称是 d 。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取包名称
        let name = packageInfo.name
        println("包名称: ${name}")
    
        return
    }

运行结果：
    
    
    包名称: test

#### [h2]prop organizationName
    
    
    public prop organizationName: String

功能：获取该包信息所对应的包的组织名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/A_ypJhHaQCeX6yCXtyy-Ow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=78C6B6EDB4290CD6AB87D24EC0540CCDBEE3E5015F99396BC370659CCF88DDB4)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取包的组织名称
        let orgName = packageInfo.organizationName
        println("组织名称: '${orgName}'")
    
        return
    }

运行结果：
    
    
    组织名称: ''

#### [h2]prop parentPackage
    
    
    public prop parentPackage: PackageInfo

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的父包的 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/8CKKosoBT-6hsp0wep1Eyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=698B6C62994B58F50921A38B4E4613DA0BE3904C7CA2F91B2147BE88D1CAC4BC)

不支持平台：macOS、iOS。

类型：[PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo)

异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果父包未被加载，则会抛出异常。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("default")
    
        // 获取父包信息
        let parentPackage = packageInfo.parentPackage
        println("父包名称: ${parentPackage.name}")
    
        return
    }

运行结果：
    
    
    父包名称: default

#### [h2]prop qualifiedName
    
    
    public prop qualifiedName: String

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包的限定名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/D4POsiJdRAuz5Ae8EG_35A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7DA45FA4A0598FD79F670420094C718E42414AA552DC3F208D2D3180A9F7BDF1)

  * 不支持平台：macOS、iOS。
  * 包的限定名称的格式是 (module_name/)?(default|package_name)(.package_name)*，例如限定名称为 a/b.c.d 的包位于模块 a 下的 b 包里的 c 包里。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取包限定名称
        let qualifiedName = packageInfo.qualifiedName
        println("包限定名称: ${qualifiedName}")
    
        return
    }

运行结果：
    
    
    包限定名称: abc.test

#### [h2]prop rootPackage
    
    
    public prop rootPackage: PackageInfo

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的 root 包的 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/piyTFw12Sw-HK_HShJOo_Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=162A0D7F53B3A8A9009300232FFF26A262FFFE710229E9F8508625E1E4894300)

  * 不支持平台：macOS、iOS。
  * 如果包本身就是 root 包，那么其 rootPackage 属性返回的是其本身。例如，限定名称为 a.b.c 的包，rootPackage 返回的是 a; 限定名称为 a 的包，rootpackage 返回的是 a。



类型：[PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo)

异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果 root 包未被加载，则会抛出异常。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("default")
    
        // 获取根包信息
        let rootPackage = packageInfo.rootPackage
        println("根包名称: ${rootPackage.name}")
    
        return
    }

运行结果：
    
    
    根包名称: default

#### [h2]prop subPackages
    
    
    public prop subPackages: Collection<PackageInfo>

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的所有子包的 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/UihXRUXWQWawM1qat7qOzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=15FA19CB042D185FD2A381B2EB79AA40AFF43DDA56A3E75A27F8D7E36E8CC0A7)

  * 不支持平台：macOS、iOS。
  * 该属性只会返回已被加载的子包。
  * 不保证返回结果的顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo)>

示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("default")
    
        // 获取子包信息
        let subPackages = packageInfo.subPackages
        println("子包数量: ${subPackages.size}")
    
        return
    }

运行结果：
    
    
    子包数量: 0

#### [h2]prop typeInfos
    
    
    public prop typeInfos: Collection<TypeInfo>

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中所有全局定义的 public 类型的类型信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/F9sxW-ACS1uwlFk3tbszmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=1258958EE2F53A159B4F1A834A907934A33C8CC6DA35EA78E8EF62C96B22B826)

  * 不支持平台：macOS、iOS。
  * 目前该列表不包含所有反射尚未支持的类型。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)>

示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    public class A {}
    
    public interface B {}
    
    public struct C {}
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取类型信息
        let typeInfos = packageInfo.typeInfos
        println("类型数量: ${typeInfos.size}")
    
        return
    }

运行结果：
    
    
    类型数量: 3

#### [h2]prop variables
    
    
    public prop variables: Collection<GlobalVariableInfo>

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中所有 public 全局变量的信息所组成的列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/UL1rYhvaRCyE6_sOKHd7MQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EDF0F4D06654F98271D04A47331D0C1810C2F04D964D482C033E70B97B28B4AF)

不支持平台：macOS、iOS。

类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo)>

示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    // 定义一些公开全局变量用于演示
    public var testVariable1: Int64 = 42
    public var testVariable2: String = "Hello"
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取包中的全局变量信息
        let variables = packageInfo.variables
        println("全局变量数量: ${variables.size}")
    
        return
    }

运行结果：
    
    
    全局变量数量: 2

#### [h2]prop version
    
    
    public prop version: String

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包的版本号。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/zidXMQivSv24iIDtZONU_Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=867F9EC2D50DC032C62DB9678674309D9C8E4A4A386E36FDCD68C4D30D1C8BBC)

  * 不支持平台：macOS、iOS。
  * 由于目前动态库中尚无版本信息，获取到的版本号总是空字符串。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("default")
    
        // 获取版本信息
        let version = packageInfo.version
        println("版本: '${version}'")
    
        return
    }

运行结果：
    
    
    版本: ''

#### [h2]static func get(String)
    
    
    public static func get(qualifiedName: String): PackageInfo

功能：获取给定 qualifiedName 所对应的 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/Kng0znpEQImztntHK1WZ4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A4A34664F0AC6EE79A5DA7F68F3AFDB78D4839BE33EACFA5AA649385E9179CEA)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) \- 类型的限定名称 qualifiedName 所对应的包信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获取与给定类型的限定名称 qualifiedName 所对应的类型信息，则抛出异常。



示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
        println("包名称: ${packageInfo.name}")
        println("包限定名称: ${packageInfo.qualifiedName}")
    
        return
    }

运行结果：
    
    
    包名称: test
    包限定名称: abc.test

#### [h2]static func load(String)
    
    
    public static func load(path: String): PackageInfo

功能：运行时动态加载指定路径下的一个仓颉动态库模块并获得该模块的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/snaUDVLpQ6e3sBaCB0Fy4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=026DB373D0DDCC141DAEEDAEE9E927D45DE3616548C0BF0BEF2380123241764E)

  * 不支持平台：macOS、iOS。
  * 为了提升兼容性，路径 path 中的共享库文件名不需要后缀名（如 .so 和 .dll 等）。
  * 如果某个 package 通过静态加载方式（如：import）已经导入过，那么动态加载该 package 会抛出异常。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 共享库文件的绝对路径或相对路径。



返回值：

  * [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) \- 指定仓颉动态库的包信息。



异常：

  * [ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) \- 如果共享库加载失败，则会抛出异常。
  * [ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) \- 如果具有相同包名称或相同文件名的共享库被重复加载，则会抛出异常。
  * [ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) \- 如果动态库内部存在多个 Package，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当路径不合法时，抛出异常。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 注意：load方法需要一个有效的动态库路径
        try {
            let packageInfo = PackageInfo.load("/path/to/library")
            println("加载的包名称: ${packageInfo.name}")
        } catch (e: IllegalArgumentException) {
            println("加载失败: ${e.message}")
        }
    
        println("这里仅展示使用方法")
        return
    }

运行结果：
    
    
    加载失败: Failed to load `/path/to/library` because of illegal path.
    这里仅展示使用方法

#### [h2]func getFunction(String, Array<TypeInfo>)
    
    
    public func getFunction(name: String, parameterTypes: Array<TypeInfo>): GlobalFunctionInfo

功能：尝试在该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中获取拥有给定函数名称且与给定形参类型信息列表匹配的 public 全局函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/O052scVESqO2rQDl6K3-aA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5745F4BAB27295D4814BB4ED949DFEE99BFBC758AD5058F82BEFF30F91CFA426)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 全局函数的名称。
  * parameterTypes: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 形参类型信息列表。



返回值：

  * [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) \- 如果成功匹配则返回该全局定义的 public 类型的函数信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应全局定义的 public 全局函数，则抛出异常。



示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    public func addNumbers(a: Int64, b: Int64): Int64 {
        return a + b
    }
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        let intType: TypeInfo = PrimitiveTypeInfo.get("Int64")
        let paramTypes = [intType, intType]
        let functionInfo = packageInfo.getFunction("addNumbers", paramTypes)
        println("函数: ${functionInfo}")
    
        return
    }

运行结果：
    
    
    函数: func addNumbers(Int64, Int64): Int64

#### [h2]func getFunctions(String)
    
    
    public func getFunctions(name: String): Array<GlobalFunctionInfo>

功能：尝试在该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中获取拥有给定函数名称的所有 public 全局函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/kcfzddAUQ8um8sm1IAcjGw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4531B1525AFF1F267EBADEDA66675FB899436293FAC65E4B6B7E3064B82F3483)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 全局函数的名称。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo)> \- 拥有给定函数名称的所有 public 全局函数的信息数组。



示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    // 定义一些同名但参数不同的函数用于演示
    public func process(x: Int64): Int64 {
        return x * 2
    }
    
    public func process(x: String): String {
        return "Processed: ${x}"
    }
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取所有名为process的函数
        let functions = packageInfo.getFunctions("process")
        println("名为process的函数数量: ${functions.size}")
    
        return
    }

运行结果：
    
    
    名为process的函数数量: 2

#### [h2]func getSubPackage(String)
    
    
    public func getSubPackage(qualifiedName: String): PackageInfo

功能：尝试获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应限定名称为 qualifiedName 的子包的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/b30C1JYJTWyWcKsqrz0TYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8EB3084DB4E1AB9BEF99BD4E258CBA33E9DF1E1165909B052988FA56C60C6616)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 子包的限定名称。



返回值：

  * [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) \- 该子包的包信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果该子包不存在或者未加载，则会抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 qualifiedName 不符合规范，则抛出异常。



示例：
    
    
    package abc.parent
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.parent")
    
        // 尝试获取子包（这里会抛出异常，因为我们没有创建子包）
        try {
            let subPackage = packageInfo.getSubPackage("child")
            println("子包名称: ${subPackage.name}")
        } catch (e: InfoNotFoundException) {
            println("子包未找到")
        }
    
        return
    }

运行结果：
    
    
    子包未找到

#### [h2]func getTypeInfo(String)
    
    
    public func getTypeInfo(qualifiedTypeName: String): TypeInfo

功能：尝试在该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中获取拥有给定类型名称的全局定义的 public 类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/VPJ61AqPQ_Ol-F9Zay0yfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B740E6DE60595248B7A54771B82FFD76E03028196CF4373F04CB605B2E8BD6E5)

不支持平台：macOS、iOS。

参数：

  * qualifiedTypeName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称



返回值：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 如果成功匹配则返回该全局定义的 public 类型的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应全局定义的 public 类型，则抛出异常。



示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    // 定义一个类用于演示
    public class TestClass {
        public var value: Int64 = 0
    }
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取类型信息
        let typeInfo = packageInfo.getTypeInfo("abc.test.TestClass")
        println("类型名称: ${typeInfo.name}")
    
        return
    }

运行结果：
    
    
    类型名称: TestClass

#### [h2]func getVariable(String)
    
    
    public func getVariable(name: String): GlobalVariableInfo

功能：尝试在该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中获取拥有给定变量名称的 public 全局变量的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/CT_LtuivQ_GQhfLPNanjTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=78A8BB0BE09C574497EBB7DD24E97D0C1CC814A5DBE43DBFD51E919DA826FB85)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 全局变量的名称。



返回值：

  * [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) \- 如果成功匹配则返回该全局定义的 public 类型的变量信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应全局定义的 public 全局变量，则抛出异常。



示例：
    
    
    package abc.test
    
    import std.reflect.*
    
    // 定义一些公开全局变量用于演示
    public var testVariable: Int64 = 42
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("abc.test")
    
        // 获取特定变量的信息
        let variableInfo = packageInfo.getVariable("testVariable")
        println("变量名称: ${variableInfo.name}")
    
        return
    }

运行结果：
    
    
    变量名称: testVariable

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该包信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/VpM2mNMBSVO7zvyi0sZCBA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=49D0C376E0B3C379793437110718B87FEDA560FDCA665DBB455A87867D7FDF1B)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该包信息的哈希值。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("default")
    
        // 获取包信息的哈希值
        let hashCode = packageInfo.hashCode()
        println("包信息的哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    包信息的哈希值: 94165683034880

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该包信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/GilZ31lyQcu6DSEbbW7N4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F34BC9DEAFD38BF4A56B63A63511B3EA804F3D896EC0EA2F5BE3C1DB889FA93B)

  * 不支持平台：macOS、iOS。
  * 内部实现为该包信息的限定名称字符串。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该包信息。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo = PackageInfo.get("default")
    
        // 获取包信息的字符串表示
        let str = packageInfo.toString()
        println("包信息的字符串表示: ${str}")
    
        return
    }

运行结果：
    
    
    包信息的字符串表示: default

#### [h2]operator func !=(PackageInfo)
    
    
    public operator func !=(other: PackageInfo): Bool

功能：判断该包信息与给定的另一个包信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/7n8iLIpjTsmyyUuKQ4m1GQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EBC7C8A09F1E1C120791949715DFFF26618E7AA862DD33A3E102A6F71A2249E5)

  * 不支持平台：macOS、iOS。
  * 内部实现为比较两个包信息的限定名称是否相等。



参数：

  * other: [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) \- 被比较相等性的另一个包信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该包信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo1 = PackageInfo.get("default")
        let packageInfo2 = PackageInfo.get("default")
    
        // 比较两个包信息是否不等
        let result = packageInfo1 != packageInfo2
        println("两个包信息不等: ${result}")
    
        return
    }

运行结果：
    
    
    两个包信息不等: false

#### [h2]operator func ==(PackageInfo)
    
    
    public operator func ==(other: PackageInfo): Bool

功能：判断该包信息与给定的另一个包信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/OfvLIi4URbebqo6BgXsHUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D32E4359BE5E5D8220D9BE39BC8FF11202FFD00A2C921741A39B53C387EBA456)

  * 不支持平台：macOS、iOS。
  * 内部实现为比较两个包信息的限定名称是否相等。



参数：

  * other: [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) \- 被比较相等性的另一个包信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该包信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        // 获取当前包的信息
        let packageInfo1 = PackageInfo.get("default")
        let packageInfo2 = PackageInfo.get("default")
    
        // 比较两个包信息是否相等
        let result = packageInfo1 == packageInfo2
        println("两个包信息相等: ${result}")
    
        return
    }

运行结果：
    
    
    两个包信息相等: true

#### class ParameterInfo
    
    
    public class ParameterInfo <: Equatable<ParameterInfo> & Hashable & ToString {}

功能：描述函数形参信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/oAQAiSoHSASKJE7-hmx0SQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9A749430BFC8F37EF99748ABC684E7D458AF0D874A19041224A5057BE32B5FE5)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ParameterInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) 对应的函数形参的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/MDFJkthrSQq3Ee-UtfTCWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DB05648DA1369FA616CF15BE0B2AC0ED38F7841E943E86DEB0D1B28CEAC72A41)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该函数形参信息所对应的函数形参，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的函数用于演示
    public func testFunction(@MyAnnotation param: Int64): Int64 {
        return param * 2
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("testFunction")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let paramInfo = parameters[0]
                let annotations = paramInfo.annotations
                println("参数注解数量: ${annotations.size}")
            }
        }
    
        return
    }

运行结果：
    
    
    参数注解数量: 1

#### [h2]prop index
    
    
    public prop index: Int64

功能：获知该 [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) 对应的形参是其所在函数的第几个形参。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/G4px5D0dTGOUaS5H3-dqOQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E612CFE87CE490BC2EF44DE881601033B877849C2E3B73E960B7754320E41A61)

  * 不支持平台：macOS、iOS。
  * index 从 0 开始计数。



类型：[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)

示例：
    
    
    import std.reflect.*
    
    // 定义一个带多个参数的函数用于演示
    public func testFunction(first: Int64, second: String, third: Bool): Int64 {
        return first
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("testFunction")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            for (param in parameters) {
                println("参数名称: ${param.name}, 索引: ${param.index}")
            }
        }
    
        return
    }

运行结果：
    
    
    参数名称: first, 索引: 0
    参数名称: second, 索引: 1
    参数名称: third, 索引: 2

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) 对应的形参的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/lvNAqqZxR8WZhYpL0npBag/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E335619B5F863FD735BD6E0EED3DCF8A793264FCD8A6A76A44FB25ABDA281C0B)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    import std.reflect.*
    
    // 定义一个带参数的函数用于演示
    public func calculateSum(x: Int64, y: Int64): Int64 {
        return x + y
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("calculateSum")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            for (param in parameters) {
                println("参数名称: ${param.name}")
            }
        }
    
        return
    }

运行结果：
    
    
    参数名称: x
    参数名称: y

#### [h2]prop typeInfo
    
    
    public prop typeInfo: TypeInfo

功能：获取该 [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) 对应的函数形参的声明类型所对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/V-F2FSgvQD-tXR-m02CK9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=975E99CF59127C2CC9B756B18DBA3A2512753BB8304328087A57DDC7F98FE1FB)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    import std.reflect.*
    
    // 定义一个带不同类型的参数的函数用于演示
    public func processData(count: Int64, name: String, isActive: Bool): Int64 {
        return count
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("processData")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            for (param in parameters) {
                println("参数名称: ${param.name}, 类型: ${param.typeInfo.name}")
            }
        }
    
        return
    }

运行结果：
    
    
    参数名称: count, 类型: Int64
    参数名称: name, 类型: String
    参数名称: isActive, 类型: Bool

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/bwvd-zNoRNe10ZRH2M2Qkw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=60E265D043DD0CAB8F93402A3905309FD73A284AA09715A468FEAAE1D0D91D29)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class FirstAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class SecondAnnotation {
        public const init() {}
    }
    
    // 定义一个带多个注解的函数参数用于演示
    public func testFunction(
        @FirstAnnotation
        @SecondAnnotation
        value: Int64
    ): Int64 {
        return value
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("testFunction")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let paramInfo = parameters[0]
                let firstAnnotations = paramInfo.findAllAnnotations<FirstAnnotation>()
                let secondAnnotations = paramInfo.findAllAnnotations<SecondAnnotation>()
    
                println("FirstAnnotation注解数量: ${firstAnnotations.size}")
                println("SecondAnnotation注解数量: ${secondAnnotations.size}")
            }
        }
    
        return
    }

运行结果：
    
    
    FirstAnnotation注解数量: 1
    SecondAnnotation注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/7suWH8PKTNyASbhEzgHFCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=1248135DAC705FED11C2276970BAE31C5FC6C3210459402EA835CDF3D2D0B463)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的函数参数用于演示
    public func testFunction(@MyAnnotation value: Int64): Int64 {
        return value
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("testFunction")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let paramInfo = parameters[0]
                let annotation = paramInfo.findAnnotation<MyAnnotation>()
    
                match (annotation) {
                    case Some(_) => println("找到了MyAnnotation注解")
                    case None => println("未找到MyAnnotation注解")
                }
            }
        }
    
        return
    }

运行结果：
    
    
    找到了MyAnnotation注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/Lr-BxH-ORiSsmtSW98z67A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=684669B4316F5377D9A9911E351864073B73AB8F234E3DDFAB21BCF5F855BA8D)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class FirstAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class SecondAnnotation {
        public const init() {}
    }
    
    // 定义一个带多个注解的函数参数用于演示
    public func testFunction(
        @FirstAnnotation
        @SecondAnnotation
        value: Int64
    ): Int64 {
        return value
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("testFunction")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let paramInfo = parameters[0]
                let allAnnotations = paramInfo.getAllAnnotations()
    
                println("总注解数量: ${allAnnotations.size}")
                println("成功获取所有注解")
            }
        }
    
        return
    }

运行结果：
    
    
    总注解数量: 2
    成功获取所有注解

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该函数形参信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/MrDpTDztRnCLU-j45rZe9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5DB9B7D85C5C9A41864A3D8C81F5EF3504A29E759E631ECBD213B0F423D82C97)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该函数形参信息的哈希值。



示例：
    
    
    import std.reflect.*
    
    // 定义一个函数用于演示
    public func calculate(x: Int64): Int64 {
        return x * 2
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("calculate")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let paramInfo = parameters[0]
                let hashCode = paramInfo.hashCode()
    
                println("参数信息的哈希值: ${hashCode}")
            }
        }
    
        return
    }

可能的运行结果：
    
    
    参数信息的哈希值: 93836504484944

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该函数形参信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/G45oNIrCScqwC_sNZFyzmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C694B267C70DCE55F0F3B6D2A8BF3E0942D4B3EA2C78BF0FDE9EAF7D43EDB3D9)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该函数形参信息。



示例：
    
    
    import std.reflect.*
    
    // 定义一个函数用于演示
    public func calculate(x: Int64): Int64 {
        return x * 2
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("calculate")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let paramInfo = parameters[0]
                let str = paramInfo.toString()
    
                println("参数信息的字符串表示: ${str}")
            }
        }
    
        return
    }

运行结果：
    
    
    参数信息的字符串表示: Int64

#### [h2]operator func !=(ParameterInfo)
    
    
    public operator func !=(other: ParameterInfo): Bool

功能：判断该函数形参信息与给定的另一个函数形参信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/JE_uWvl4TmyGvDn5Buom8w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=FE3FAD64D49199C3AC6B7832A9449E7FC3B7513A3A246D61D4A9C9A33ABB02A0)

不支持平台：macOS、iOS。

参数：

  * other: [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) \- 被比较相等性的另一个函数形参信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该函数形参信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    // 定义一个函数用于演示
    public func calculate(x: Int64, y: Int64): Int64 {
        return x + y
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("calculate")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size >= 2) {
                let param1 = parameters[0]
                let param2 = parameters[1]
                let result = param1 != param2
    
                println("两个参数不等: ${result}")
            }
        }
    
        return
    }

运行结果：
    
    
    两个参数不等: true

#### [h2]operator func ==(ParameterInfo)
    
    
    public operator func ==(other: ParameterInfo): Bool

功能：判断该函数形参信息与给定的另一个函数形参信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/hmfrKi_tRdKit1a2b5PpcA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=48C7B4B898271B10A2F7D5D5541559C1776742C4520F7DD42D15E0585AE4832B)

不支持平台：macOS、iOS。

参数：

  * other: [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) \- 被比较相等性的另一个函数形参信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该函数形参信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.*
    
    // 定义一个函数用于演示
    public func calculate(x: Int64): Int64 {
        return x * 2
    }
    
    main(): Unit {
        // 获取函数信息
        let packageInfo = PackageInfo.get("default")
        let functions = packageInfo.getFunctions("calculate")
    
        if (functions.size > 0) {
            let functionInfo = functions[0]
            let parameters = functionInfo.parameters
    
            if (parameters.size > 0) {
                let param1 = parameters[0]
                let param2 = parameters[0]
                let result = param1 == param2
    
                println("两个参数相等: ${result}")
            }
        }
    
        return
    }

运行结果：
    
    
    两个参数相等: true

#### class PrimitiveTypeInfo
    
    
    public class PrimitiveTypeInfo <: TypeInfo {}

功能：描述原始数据类型的类型信息。

原始数据类型包括无类型（Nothing）、单元类型（[Unit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#unit)）、字符类型（[Rune](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#rune)）、布尔类型（[Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool)），整形类型（[Int8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int8)，[Int16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int16)，[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)，[Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)，[IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative)，[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)，[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)，[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)，[UInt64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint64)，[UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative)）和浮点类型（[Float16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float16)，[Float32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float32)，[Float64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#float64)）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/r6u2Ajd_RPuCRbV2A_YKwg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=BEE32AD38BB1526C4A2622DE8F835A2852BF50DC5FEECB38AAA6DA47656C779D)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]static func get(String)
    
    
    public static redef func get(qualifiedName: String): PrimitiveTypeInfo

功能：获取给定的类型的限定名称所对应类型的 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/EU9_FQtYSqOE8hrOeryZtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=29F3853CC2F0F125A03FC59EA82EE96FA69DD71ADAA35BC203503797B5F270DB)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo) \- 类型的限定名称 qualifiedName 所对应的类型的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获取与给定类型的限定名称 qualifiedName 匹配的类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        var pti = PrimitiveTypeInfo.get("Int64")
        println(pti)
        return
    }

运行结果：
    
    
    Int64

#### [h2]static func of(Any)
    
    
    public static redef func of(a: Any): PrimitiveTypeInfo

功能：获取给定的任意类型实例的运行时类型所对应的类型信息。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/QGZC4456SvaiHNB8qW3oFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5E8B0D5039401AEA5316CD03C7F28B6286B8AC8317851F6A4A0868912AEC656E)

不支持平台：macOS、iOS。

参数：

  * a: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 任意类型的实例。



返回值：

  * [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo) \- 实例 a 的运行时类型所对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        var a = 10
        var pti = PrimitiveTypeInfo.of(a)
        println(pti)
        return
    }

运行结果：
    
    
    Int64

#### [h2]static func of<T>()
    
    
    public static redef func of<T>(): PrimitiveTypeInfo

功能：获取给定 T 类型对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/kMR2VeC8Tby-JiD8Uid5Yw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D27B2D7E56888199ABD0314D3BF061BD793637835AB7301138E98279A8AEB983)

不支持平台：macOS、iOS。

返回值：

  * [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo) \- T 类型对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得类型 T 所对应的类型信息，抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    main(): Unit {
        var pti = PrimitiveTypeInfo.of<Int64>()
        println(pti)
        return
    }

运行结果：
    
    
    Int64

#### class StaticFunctionInfo
    
    
    public class StaticFunctionInfo <: Equatable<StaticFunctionInfo> & Hashable & ToString {}

功能：描述静态成员函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/xo8YyObMSLmau7NnTTNe6A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=792B4E5FCA9DCBF5D661DE6112364CCC18B87BEDD2AAE0639A2A9315A2638A75)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/09kL6lDnTwm-jHm1MPYfmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=896027C06599287E8238060FE31F3555B1E001C1D922ED062DA0B83F4A600901)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态函数用于演示
    public class TestClass {
        @MyAnnotation
        public static func testFunction(): String {
            return "Hello from test function"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            let annotations = staticFunction.annotations
            println("静态函数注解数量: ${annotations.size}")
        }
    
        return
    }

运行结果：
    
    
    静态函数注解数量: 1

#### [h2]prop genericParams
    
    
    public prop genericParams: Collection<GenericTypeInfo>

功能：获取该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的实例成员函数的泛型参数信息列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/HF0sZ72XRieAeLd1EPc-fQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=94B11CE4E244C1E1FB90478C4298FDF381CEFA016130BBB39DEF69E91B15EB67)

不支持平台：macOS、iOS。

类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo)>

异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- [GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 没有泛型参数时抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带泛型参数的类和静态函数用于演示
    public class TestClass {
        public static func genericFunction<T>(value: T): T {
            return value
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "genericFunction") {
                try {
                    let genericParams = staticFunction.genericParams
                    println("泛型参数数量: ${genericParams.size}")
                } catch (e: InfoNotFoundException) {
                    println("该函数没有泛型参数")
                }
                break
            }
        }
    
        return
    }

运行结果：
    
    
    泛型参数数量: 1

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数所拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/zG79EBV-SpamI2JPYSpLOA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5970E8F1C3DF3D5A40B548DC12C2F0EC574DF0F08A8C618201B6B995C369E1F2)

  * 不支持平台：macOS、iOS。
  * 如果该静态成员函数无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 即便未被某修饰符修饰，如果拥有该修饰符的语义，该修饰符信息也将被包括在该集合中。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带修饰符的类和静态函数用于演示
    public class TestClass {
        public static func publicFunction(): String {
            return "This is a public function"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "publicFunction") {
                let modifiers = staticFunction.modifiers
                println("函数修饰符数量: ${modifiers.size}")
                break
            }
        }
    
        return
    }

运行结果：
    
    
    函数修饰符数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/ylR5M0_4QT6MuA67SyPSQA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=27B740F9928F31DA2D6654BBB0EC040A5805619C2D1873FC9ED294753DD8B1D6)

  * 不支持平台：macOS、iOS。
  * 构成重载的所有静态成员函数将拥有相同的名称。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态函数用于演示
    public class TestClass {
        public static func calculateSum(x: Int64, y: Int64): Int64 {
            return x + y
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            println("静态函数名称: ${staticFunction.name}")
        }
    
        return
    }

运行结果：
    
    
    静态函数名称: calculateSum

#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<ParameterInfo>

功能：获取该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数的参数信息列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/1bXWbwsFSLydQSRR5BQloQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=419447159D67DFDDCC30CEC15323210F12C947650BACC180A0D87E9B9D55622F)

  * 不支持平台：macOS、iOS。
  * 不保证参数顺序，可根据 ParameterInfo的 index 属性确定参数实际位置。



类型：[ReadOnlyList](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-collection_package_interface#interface-readonlylistt)<[ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带参数的类和静态函数用于演示
    public class TestClass {
        public static func processData(name: String, age: Int64): String {
            return "Name: ${name}, Age: ${age}"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "processData") {
                let parameters = staticFunction.parameters
                println("参数数量: ${parameters.size}")
    
                for (param in parameters) {
                    println("参数名称: ${param.name}, 类型: ${param.typeInfo.name}")
                }
                break
            }
        }
    
        return
    }

运行结果：
    
    
    参数数量: 2
    参数名称: name, 类型: String
    参数名称: age, 类型: Int64

#### [h2]prop returnType
    
    
    public prop returnType: TypeInfo

功能：获取该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数的返回值类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/R-LYKtiITUG4EpgaR5sf3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F8F16849CB1931F51FE3B04A4C31E7326F50D32F67455B3312BEFD5EBBE80789)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带返回类型的类和静态函数用于演示
    public class TestClass {
        public static func getString(): String {
            return "Hello"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "getString") {
                let returnType = staticFunction.returnType
                println("返回类型: ${returnType.name}")
                break
            }
        }
    
        return
    }

运行结果：
    
    
    返回类型: String

#### [h2]func apply(TypeInfo, Array<Any>)
    
    
    public func apply(thisType: TypeInfo, args: Array<Any>): Any

功能：调用该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应静态成员函数，传入方法所属的类型信息和实参列表并返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/xOK_ow_DRoesXilECK9hgQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=88627BBC27FD9F3605A965DB8117C0BFAED50808533025DCF297EE343DFCE72B)

  * 不支持平台：macOS、iOS。
  * 实参列表的类型确保和函数入参类型完全一致，否则会导致参数检查失败。



参数：

  * thisType: [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 该方法所属的类。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该静态成员函数的调用结果。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果该函数信息对应的静态成员函数存在泛型参数，则会抛出异常。
  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果该函数信息对应的静态成员函数的函数体未实现，则会抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该静态成员函数信息所对应的静态成员函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 thisType 和该静态函数的函数签名不一致，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中的任何一个实参的运行时类型不是该静态成员函数信息所对应的静态成员函数的对应形参的声明类型的子类型，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的静态成员函数信息所对应的静态成员函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static func myName(): String {
            "my name is Rectangular"
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态函数
        let sf = ty.getStaticFunction("myName")
    
        let result = sf.apply(ty) as String
        println(result)
        return
    }

运行结果：
    
    
    Some(my name is Rectangular)

#### [h2]func apply(TypeInfo, Array<TypeInfo>, Array<Any>)
    
    
    public func apply(thisType: TypeInfo, genericTypeArgs: Array<TypeInfo>, args: Array<Any>): Any

功能：调用该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应静态成员函数，传入方法所属的类型信息和实参列表并返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/WthNXar0Q76Ii64XSILbDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4A22214F1B98663620E394684DE9EAACE5C3CDFCD2C3076EBCC08CC5593183BB)

  * 不支持平台：macOS、iOS。
  * 实参列表的类型确保和函数入参类型完全一致，否则会导致参数检查失败。



参数：

  * thisType: [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 该方法所属的类。
  * genericTypeArgs: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 泛型参数类型列表。
  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该静态成员函数的调用结果。



异常：

  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 如果该函数信息对应的静态成员函数是非泛型函数，则抛出异常。
  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果该函数信息对应的静态成员函数的函数体未实现，则会抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的实参的数目与该静态成员函数信息所对应的静态成员函数的形参列表中的形参的数目不等，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果实参列表中的泛型参数的数目与该静态成员函数信息所对应的泛型参数的数目不等，则抛出异常。
  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果 thisType 和该静态函数的函数签名不一致，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果实参列表中的任何一个实参的运行时类型不是该静态成员函数信息所对应的静态成员函数的对应形参的声明类型的子类型，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果传入的实参列表和泛型参数类型列表 genericTypeArgs 不满足该静态成员函数信息所对应的静态成员函数的参数的类型约束，则抛出异常。
  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果被调用的静态成员函数信息所对应的静态成员函数内部抛出异常，则该异常将被封装为 [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) 异常并抛出。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class GenericClass {
        public static func process<T>(value: T): T {
            return value
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.GenericClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        var staticFunction: ?StaticFunctionInfo = None
    
        for (sf in staticFunctions) {
            if (sf.name == "process") {
                staticFunction = sf
                break
            }
        }
    
        // 准备参数
        let stringTypeInfo = TypeInfo.get("std.core.String")
    
        // 调用带有泛型参数的函数
        try {
            let genericClass = GenericClass()
            let sf = staticFunction.getOrThrow()
            let result = sf.apply(classInfo, [stringTypeInfo], ["Hello World"]) as String
            println("调用结果: ${result}")
        } catch (e: Exception) {
            println("调用失败: ${e.message}")
        }
    
        return
    }

运行结果：
    
    
    调用结果: Some(Hello World)

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/6Um-KKvkTPuiv5ypXmv2RQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DA11B566E6C921BF6A483CA4A5EC58D10B53D47C21457AAA330418DA2F9954D7)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义另一个注解用于演示
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态函数用于演示
    public class TestClass {
        @MyAnnotation
        @AnotherAnnotation
        public static func annotatedFunction(): String {
            return "This function has annotations"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "annotatedFunction") {
                let myAnnotations = staticFunction.findAllAnnotations<MyAnnotation>()
                println("MyAnnotation注解数量: ${myAnnotations.size}")
                break
            }
        }
    
        return
    }

运行结果：
    
    
    MyAnnotation注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/dZUu-lWdTJS_l-C78xdLuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F63A7295A5BDAFAE20175FA6D37B8B6EFB9C70705223F6AA7B773AB0FE30C9D3)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态函数用于演示
    public class TestClass {
        @MyAnnotation
        public static func annotatedFunction(): String {
            return "This function has annotations"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "annotatedFunction") {
                let annotation = staticFunction.findAnnotation<MyAnnotation>()
                if (annotation.isSome()) {
                    println("找到了MyAnnotation注解")
                } else {
                    println("未找到MyAnnotation注解")
                }
                break
            }
        }
    
        return
    }

运行结果：
    
    
    找到了MyAnnotation注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/rEGJCzaHSyaNGUwpkhrDuA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=67821DBDC03F46AFA2F8E9F100C892046949399728B19F281DBB8CA5609EA6F4)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义另一个注解用于演示
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态函数用于演示
    public class TestClass {
        @MyAnnotation
        @AnotherAnnotation
        public static func annotatedFunction(): String {
            return "This function has annotations"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "annotatedFunction") {
                let allAnnotations = staticFunction.getAllAnnotations()
                println("总注解数量: ${allAnnotations.size}")
                break
            }
        }
    
        return
    }

运行结果：
    
    
    总注解数量: 2

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该静态成员函数信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/_CpZ9nUETMeaRZoPwb4HaQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=41555AA9E749B1CFDCB0481F16D36C92E0EF55FE3ADF9D8A7B4F533098E1202F)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该静态成员函数信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态函数用于演示
    public class TestClass {
        public static func processData(): String {
            return "Processing data"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "processData") {
                let hash = staticFunction.hashCode()
                println("静态函数哈希值: ${hash}")
                break
            }
        }
    
        return
    }

可能的运行结果：
    
    
    静态函数哈希值: 94660305794880

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该静态成员函数信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/zesYT3UVQlmFkmtYOZTFUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=9A81D71ECD42BB09956256234CEAD306DE46B2EC9A7BA7D3C92CA177145A97B6)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该静态成员函数信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态函数用于演示
    public class TestClass {
        public static func processData(): String {
            return "Processing data"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions
        for (staticFunction in staticFunctions) {
            if (staticFunction.name == "processData") {
                let str = staticFunction.toString()
                println("静态函数字符串表示: ${str}")
                break
            }
        }
    
        return
    }

运行结果：
    
    
    静态函数字符串表示: static func processData(): String

#### [h2]operator func !=(StaticFunctionInfo)
    
    
    public operator func !=(other: StaticFunctionInfo): Bool

功能：判断该静态成员函数信息与给定的另一个静态成员函数信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/PCZrp0cCR-mmJXbKMFLSAg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8D116421B32549B4EFFFDF4258A1761FB4A2F40D65A9F1E5DDF887B64F103CA7)

不支持平台：macOS、iOS。

参数：

  * other: [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) \- 被比较相等性的另一个静态成员函数信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员函数信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态函数用于演示
    public class TestClass {
        public static func func1(): String {
            return "Function 1"
        }
    
        public static func func2(): Int64 {
            return 42
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions.toArray()
    
        println("两个StaticFunctionInfo对象不相等: ${staticFunctions[0] != staticFunctions[1]}")
    
        return
    }

运行结果：
    
    
    两个StaticFunctionInfo对象不相等: true

#### [h2]operator func ==(StaticFunctionInfo)
    
    
    public operator func ==(other: StaticFunctionInfo): Bool

功能：判断该静态成员函数信息与给定的另一个静态成员函数信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/-RfOwePvQ723XCYNO1OO-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=30A0E59BB9536D01B4D80F010DACAD62101899C05F81870B2A5BCDF20FC057FF)

不支持平台：macOS、iOS。

参数：

  * other: [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) \- 被比较相等性的另一个静态成员函数信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员函数信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态函数用于演示
    public class TestClass {
        public static func processData(): String {
            return "Processing data"
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态函数信息
        let staticFunctions = classInfo.staticFunctions.toArray()
    
        println("两个StaticFunctionInfo对象相等: ${staticFunctions[0] == staticFunctions[0]}")
    
        return
    }

运行结果：
    
    
    两个StaticFunctionInfo对象相等: true

#### class StaticPropertyInfo
    
    
    public class StaticPropertyInfo <: Equatable<StaticPropertyInfo> & Hashable & ToString {}

功能：描述静态成员属性信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/ewhVOWYlTFWEmOdJuzYLeg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7D7C48E048E70E2A46649C999C3C48F816EAA18CCE99B3D16E20D963E4AD0245)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticPropertyInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 所对应的静态成员属性的注解所组成的集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/y4qTG0s-T9eSOMaNT0u2SA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=721735CE4EF5F1ADF2E142E9ACE7486480CF2B6F347752542CB5BFDA46FF0B42)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该静态成员属性信息所对应的静态成员属性，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态属性用于演示
    public class TestClass {
        @MyAnnotation
        public static prop testProperty: String {
            get() {
                "test value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("testProperty")
    
        // 获取注解数量
        let annotations = staticProperty.annotations
        println("静态属性注解数量: ${annotations.size}")
    
        return
    }

运行结果：
    
    
    静态属性注解数量: 1

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 对应的静态成员属性所拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/zzM42kykSpuGp9HpD2BiFw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F05EEC20DC2CE9FBA074778685E0950819264C713FAFBC979CE705C85483DE5E)

  * 不支持平台：macOS、iOS。
  * 如果该静态成员属性无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 目前获取到的修饰符集合内容较为混乱，尚未统一。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带修饰符的类和静态属性用于演示
    public class TestClass {
        public static prop publicProperty: String {
            get() {
                "public value"
            }
        }
    
        private static prop privateProperty: String {
            get() {
                "private value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("publicProperty")
    
        // 获取修饰符数量
        let modifiers = staticProperty.modifiers
        println("公开静态属性修饰符数量: ${modifiers.size}")
    
        return
    }

运行结果：
    
    
    公开静态属性修饰符数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 对应的静态成员属性的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/jMIIsjgdTBK3SaSbHYciyQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6D527DF017AF8DF849964E255240871EED12B548F7FA0854EED4C454433B79F5)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop propertyName: String {
            get() {
                "property value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("propertyName")
    
        // 获取属性名称
        println("静态属性名称: ${staticProperty.name}")
    
        return
    }

运行结果：
    
    
    静态属性名称: propertyName

#### [h2]prop typeInfo
    
    
    public prop typeInfo: TypeInfo

功能：获取该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 对应的静态成员属性的声明类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/7gmhqvaXRae6BE3rxRUYfw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EBA3DD63571B91A4338C966A05EE30E60909836333521E880489289DB669BCD8)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop stringValue: String {
            get() {
                "string value"
            }
        }
    
        public static prop intValue: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("stringValue")
    
        // 获取属性类型信息
        let typeInfo = staticProperty.typeInfo
        println("静态属性类型: ${typeInfo.name}")
    
        return
    }

运行结果：
    
    
    静态属性类型: String

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/mitNAJXJR6K3aOVtbGz6PA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C6CF07F924CB067689B407518A1F9D9845A6B7F75091B6C4871AA7CCC5A1C3A6)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态属性用于演示
    public class TestClass {
        @MyAnnotation
        @AnotherAnnotation
        public static prop annotatedProperty: String {
            get() {
                "annotated value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("annotatedProperty")
    
        // 查找所有指定类型的注解
        let myAnnotations = staticProperty.findAllAnnotations<MyAnnotation>()
        println("MyAnnotation注解数量: ${myAnnotations.size}")
    
        return
    }

运行结果：
    
    
    MyAnnotation注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/WA0Gi5veRBq3ywO-9_1qCw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=19E99A00F9B7300B4E00DDF87EDD04E529230F17391091EA9852F2121730E575)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态属性用于演示
    public class TestClass {
        @MyAnnotation
        public static prop annotatedProperty: String {
            get() {
                "annotated value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("annotatedProperty")
    
        // 查找指定类型的注解
        let annotation = staticProperty.findAnnotation<MyAnnotation>()
        if (annotation.isSome()) {
            println("找到了MyAnnotation注解")
        } else {
            println("未找到MyAnnotation注解")
        }
    
        return
    }

运行结果：
    
    
    找到了MyAnnotation注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/4ZpjBXtwRy6CxKHcDF7MBg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B1FF24DEF70B6787790E81D8BD0CBC9B7EDA7317A9685BF83526B8116A9CF981)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态属性用于演示
    public class TestClass {
        @MyAnnotation
        @AnotherAnnotation
        public static prop annotatedProperty: String {
            get() {
                "annotated value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("annotatedProperty")
    
        // 获取所有注解
        let allAnnotations = staticProperty.getAllAnnotations()
        println("总注解数量: ${allAnnotations.size}")
    
        return
    }

运行结果：
    
    
    总注解数量: 2

#### [h2]func getValue()
    
    
    public func getValue(): Any

功能：获取该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 对应的静态成员属性的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/7ksvKEBTSsKxFzfTZfUjaw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DC4EB48BF7FD08DBBB2B425E1A43609816620DD3F8E33A21A42AFFF215539843)

  * 不支持平台：macOS、iOS。
  * 如果该静态成员属性缺少合法实现，如 interface 类型中的抽象静态成员属性，则应抛出 [UnsupportedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-unsupportedexception) 异常，但由于后端尚未支持，故尚未实现。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该静态成员属性的值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static prop sides: Int64 {
            get() {
                4
            }
        }
        public static prop angles: Int64 {
            get() {
                4
            }
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态属性
        let sp = ty.getStaticProperty("sides")
    
        let result = sp.getValue() as Int64
        println(result)
        return
    }

运行结果：
    
    
    Some(4)

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该静态成员属性信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/163CqeovTl2qYW1mluwI0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=3971535DE46949AF50F6FCA445C9B9628F04BB57F5DB6D7345906F7E0D870D9C)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该静态成员属性信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop testProperty: String {
            get() {
                "test value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("testProperty")
    
        // 获取哈希值
        let hash = staticProperty.hashCode()
        println("静态属性哈希值: ${hash}")
    
        return
    }

可能的运行结果：
    
    
    静态属性哈希值: 94756514624640

#### [h2]func isMutable()
    
    
    public func isMutable(): Bool

功能：判断该静态成员属性信息所对应的静态成员属性是否可修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/wz-r4qt_TZqnkgq3Bdhh3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5D1C547C844BFEC4712C3E413804F8A27C769722430A31E7EF7317C40C461084)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员属性信息所对应的静态成员属性可被修改则返回 true ，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/yCsDRxU-SJCrWGlJkQaD4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=99DBA8D8F75E77BA909EFB9FA0141CE100256160DDA19488CF4106FA1FD799CD)

如果静态成员属性被 mut 修饰符所修饰，则该静态成员属性可被修改，否则不可被修改。

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop immutableProperty: String {
            get() {
                "immutable value"
            }
        }
    
        public static mut prop mutableProperty: String {
            get() {
                "mutable value"
            }
            set(v) {}
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取不可变静态属性信息
        let immutableProperty = classInfo.getStaticProperty("immutableProperty")
        let isImmutableMutable = immutableProperty.isMutable()
        println("不可变属性是否可修改: ${isImmutableMutable}")
    
        // 获取可变静态属性信息
        let mutableProperty = classInfo.getStaticProperty("mutableProperty")
        let isMutableMutable = mutableProperty.isMutable()
        println("可变属性是否可修改: ${isMutableMutable}")
    
        return
    }

运行结果：
    
    
    不可变属性是否可修改: false
    可变属性是否可修改: true

#### [h2]func setValue(Any)
    
    
    public func setValue(newValue: Any): Unit

功能：设置该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 对应的静态成员属性的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/F0ndH7KeRZ-GknAejguQXw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D5C995850BBE808D8E911FBB6580A36B4FE2251AA89E8AED52698866ABF9F8A6)

  * 不支持平台：macOS、iOS。
  * 如果该静态成员属性缺少合法实现，如 interface 类型中的抽象静态成员属性，则应抛出 [UnsupportedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-unsupportedexception) 异常，但由于后端尚未支持，故尚未实现。



参数：

  * newValue: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 新值。



异常：

  * [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) \- 如果该静态成员属性信息所对应的静态成员属性不可修改，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果新值 newValue 的运行时类型不是该静态成员属性信息所对应的静态成员属性的声明类型的子类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        private static var valueArea = 0
        public static mut prop area: Int64 {
            get() {
                valueArea
            }
            set(v) {
                valueArea = v
            }
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态属性
        let sp = ty.getStaticProperty("area")
    
        // 设置静态成员属性的值
        sp.setValue(10)
        let result = sp.getValue() as Int64
        println(result)
        return
    }

运行结果：
    
    
    Some(10)

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该静态成员属性信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/eLyCr4GbTBWHiX-rTxesFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E16107A98D4392FFAF483066A8F482453C6D0F13957828D1BB5F210B3933CC57)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该静态成员属性信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop testProperty: String {
            get() {
                "test value"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let staticProperty = classInfo.getStaticProperty("testProperty")
    
        // 获取字符串表示
        let str = staticProperty.toString()
        println("静态属性字符串表示: ${str}")
    
        return
    }

运行结果：
    
    
    静态属性字符串表示: static prop testProperty: String

#### [h2]operator func !=(StaticPropertyInfo)
    
    
    public operator func !=(other: StaticPropertyInfo): Bool

功能：判断该静态成员属性信息与给定的另一个静态成员属性信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/bVRLG-0DTEKYn9ZWjr3mqw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6DED40613EB69FBC47BA4F93CF91B6BC11DAB48FD00367C11AB6483B698EAB8C)

不支持平台：macOS、iOS。

参数：

  * other: [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) \- 被比较相等性的另一个静态成员属性信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员属性信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop property1: String {
            get() {
                "value1"
            }
        }
    
        public static prop property2: Int64 {
            get() {
                42
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let property1 = classInfo.getStaticProperty("property1")
        let property2 = classInfo.getStaticProperty("property2")
    
        // 比较两个静态属性信息是否不相等
        let result = property1 != property2
        println("两个静态属性不相等: ${result}")
    
        return
    }

运行结果：
    
    
    两个静态属性不相等: true

#### [h2]operator func ==(StaticPropertyInfo)
    
    
    public operator func ==(other: StaticPropertyInfo): Bool

功能：判断该静态成员属性信息与给定的另一个静态成员属性信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/ofBurMGhS96UzVJapWingg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=579E74DE367D2711E118BD37D13797B5DDC47EFFFC8D351602903C43B9336E24)

不支持平台：macOS、iOS。

参数：

  * other: [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) \- 被比较相等性的另一个静态成员属性信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员属性信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态属性用于演示
    public class TestClass {
        public static prop property1: String {
            get() {
                "value1"
            }
        }
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态属性信息
        let property1 = classInfo.getStaticProperty("property1")
    
        // 比较两个静态属性信息是否相等
        let result = property1 == property1
        println("同一个静态属性相等: ${result}")
    
        return
    }

运行结果：
    
    
    同一个静态属性相等: true

#### class StaticVariableInfo
    
    
    public class StaticVariableInfo <: Equatable<StaticVariableInfo> & Hashable & ToString {}

功能：描述静态成员变量信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/4DOts6T_QlqU5uOdSyHJJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=96367F33DEA382E2656756752E291C0833D03CBCE966FF0E770F1EA70DA0F5B9)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/9sD4_3uvRnCIONLjfBK9Pw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0C62B24D26D509BD208C4A6E3D97E2C71AAE60E556304DF7929F969E2B42A09D)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态变量用于演示
    public class TestClass {
        @MyAnnotation
        public static var testVariable: String = "test value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("testVariable")
    
        // 获取注解数量
        let annotations = staticVariable.annotations
        println("静态变量注解数量: ${annotations.size}")
    
        return
    }

运行结果：
    
    
    静态变量注解数量: 1

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量所拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/77yYvRVkQUaWX0jy0ECWFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D903FAA7BD716B55024042371562CCCA9AE9861DBCFE4F8E86BC5D7B7D389BE0)

  * 不支持平台：macOS、iOS。
  * 如果该静态成员变量无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 目前获取到的修饰符集合内容较为混乱，尚未统一。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个带修饰符的类和静态变量用于演示
    public class TestClass {
        public static var publicVariable: String = "public value"
    
        private static var privateVariable: String = "private value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("publicVariable")
    
        // 获取修饰符数量
        let modifiers = staticVariable.modifiers
        println("公开静态变量修饰符数量: ${modifiers.size}")
    
        return
    }

运行结果：
    
    
    公开静态变量修饰符数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/2aPSvKucR4quPKfFgzTnSw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C26594627829826B9AB10A4867CC8E080D31174A0388975C3444DA9349EBF02D)

不支持平台：macOS、iOS。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var variableName: String = "variable value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("variableName")
    
        // 获取变量名称
        println("静态变量名称: ${staticVariable.name}")
    
        return
    }

运行结果：
    
    
    静态变量名称: variableName

#### [h2]prop typeInfo
    
    
    public prop typeInfo: TypeInfo

功能：获取该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的声明类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/TwE2uRYkQDCrbN03UzZBvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7B1B2831189D2DBCF024F68321039563DD9373A1A1CB897C422CA9C554B034E7)

不支持平台：macOS、iOS。

类型：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var stringValue: String = "string value"
    
        public static var intValue: Int64 = 42
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("stringValue")
    
        // 获取变量类型信息
        let typeInfo = staticVariable.typeInfo
        println("静态变量类型: ${typeInfo.name}")
    
        return
    }

运行结果：
    
    
    静态变量类型: String

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/P5ez6BYtTrSV1dBqpMM8qg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6DEC120BDC37804ABE87AEAD3564DAFC6E8704B8AC264DE190E219500055BA36)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态变量用于演示
    public class TestClass {
        @MyAnnotation
        @AnotherAnnotation
        public static var annotatedVariable: String = "annotated value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("annotatedVariable")
    
        // 查找所有指定类型的注解
        let myAnnotations = staticVariable.findAllAnnotations<MyAnnotation>()
        println("MyAnnotation注解数量: ${myAnnotations.size}")
    
        return
    }

运行结果：
    
    
    MyAnnotation注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/P7sMRNbiQkS8lmI4gDLFcQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=FD9ADD91234E65B6497062B960F5BDA3D7DC963F175F70ABD5BA3ACB10FD7071)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态变量用于演示
    public class TestClass {
        @MyAnnotation
        public static var annotatedVariable: String = "annotated value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("annotatedVariable")
    
        // 查找指定类型的注解
        let annotation = staticVariable.findAnnotation<MyAnnotation>()
        match (annotation) {
            case Some(_) => println("找到了MyAnnotation注解")
            case None => println("未找到MyAnnotation注解")
        }
    
        return
    }

运行结果：
    
    
    找到了MyAnnotation注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/fzvwhmvoT6qxsJcg4-FJpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=4AD0A997DA9AD1807F234EE5D12F5BB62D8C5FD6E867D7EDF53182692D590C3B)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解用于演示
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类和静态变量用于演示
    public class TestClass {
        @MyAnnotation
        @AnotherAnnotation
        public static var annotatedVariable: String = "annotated value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("annotatedVariable")
    
        // 获取所有注解
        let allAnnotations = staticVariable.getAllAnnotations()
        println("所有注解数量: ${allAnnotations.size}")
    
        return
    }

运行结果：
    
    
    所有注解数量: 2

#### [h2]func getValue()
    
    
    public func getValue(): Any

功能：获取该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/Ffd3hfBoSEuxlBiUp4OgUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C3B068D94254429C75488AC11C1EDFC3F141E4C35F262B8A2B62F91C370BF02D)

不支持平台：macOS、iOS。

返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该静态成员变量的值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static var area: Int64 = 10
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态变量
        let sv = ty.getStaticVariable("area")
        // 获取值
        println(sv.getValue() as Int64)
        return
    }

运行结果：
    
    
    Some(10)

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该静态成员变量信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/wvh8dPRfRzCH0R1GE2nP1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6135A4A7793E107DFFFB367A5815CDB4EAF4CDA84AD73522BA8220E81ABC4CDB)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该静态成员变量信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var testVariable: String = "test value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("testVariable")
    
        // 获取哈希值
        let hashValue = staticVariable.hashCode()
        println("静态变量信息的哈希值: ${hashValue}")
    
        return
    }

可能的运行结果：
    
    
    静态变量信息的哈希值: 94532229551216

#### [h2]func isMutable()
    
    
    public func isMutable(): Bool

功能：判断该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量是否可修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/ps39kpJGSFSbT89lSQ7kjw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=993D8830D693D3EAD87D9144CC6D455B95765CC42632AA7F1E007F2CB7A87BF4)

  * 不支持平台：macOS、iOS。
  * 如果静态成员变量被 var 修饰符所修饰，则该静态成员变量可被修改。
  * 如果静态成员变量被 let 修饰符所修饰，则该静态成员变量不可被修改。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员变量信息所对应的静态成员变量可被修改则返回 true ，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var mutableVariable: String = "mutable value"
    
        public static let immutableVariable: String = "immutable value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取可变静态变量信息
        let mutableStaticVariable = classInfo.getStaticVariable("mutableVariable")
        let isMutable = mutableStaticVariable.isMutable()
        println("可变静态变量: ${isMutable}")
    
        // 获取不可变静态变量信息
        let immutableStaticVariable = classInfo.getStaticVariable("immutableVariable")
        let isImmutableMutable = immutableStaticVariable.isMutable()
        println("不可变静态变量: ${isImmutableMutable}")
    
        return
    }

运行结果：
    
    
    可变静态变量: true
    不可变静态变量: false

#### [h2]func setValue(Any)
    
    
    public func setValue(newValue: Any): Unit

功能：设置该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/BZh_JeAJQ9yUiRChypDXiQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=52F8DC93FB53FA6CAD906F366DB0B010AF0AB474BF3F38D7BCC6C33C7B034287)

不支持平台：macOS、iOS。

参数：

  * newValue: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 新值。



异常：

  * [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) \- 如果该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量不可修改，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果新值 newValue 的运行时类型不是该静态成员变量信息所对应的静态成员变量的声明类型的子类型，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static var area: Int64 = 10
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取静态变量
        let sv = ty.getStaticVariable("area")
    
        // 设置值
        sv.setValue(20)
        println(sv.getValue() as Int64)
        return
    }

运行结果：
    
    
    Some(20)

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该静态成员变量信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/9AykgWF2RPadPhSPriSwdw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8DCB9B7310D8F5BBE7E5D60D65F04B8F9A1FD4B12E129F61C3E611B2DCB52731)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该静态成员变量信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var testVariable: String = "test value"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable = classInfo.getStaticVariable("testVariable")
    
        // 获取字符串表示
        let strRepresentation = staticVariable.toString()
        println("静态变量信息的字符串表示: ${strRepresentation}")
    
        return
    }

运行结果：
    
    
    静态变量信息的字符串表示: static testVariable: String

#### [h2]operator func !=(StaticVariableInfo)
    
    
    public operator func !=(other: StaticVariableInfo): Bool

功能：判断该静态成员变量信息与给定的另一个静态成员变量信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/ZTv0ofhjS2Cp8LBEV3hQew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E06359355EAAD666FE928391647C1BBB5E3EA2F7AB3FF91690F9E0A663E63DA6)

不支持平台：macOS、iOS。

参数：

  * other: [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) \- 被比较相等性的另一个静态成员变量信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员变量信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var variable1: String = "value1"
    
        public static var variable2: String = "value2"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable1 = classInfo.getStaticVariable("variable1")
        let staticVariable2 = classInfo.getStaticVariable("variable2")
    
        // 比较两个静态变量信息是否不等
        let result = staticVariable1 != staticVariable2
        println("两个静态变量不相等: ${result}")
    
        // 比较同一个静态变量信息
        let sameResult = staticVariable1 != staticVariable1
        println("同一个静态变量不相等: ${sameResult}")
    
        return
    }

运行结果：
    
    
    两个静态变量不相等: true
    同一个静态变量不相等: false

#### [h2]operator func ==(StaticVariableInfo)
    
    
    public operator func ==(other: StaticVariableInfo): Bool

功能：判断该静态成员变量信息与给定的另一个静态成员变量信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/IbpwXzmQT42Gu67MNlPvHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DB9319CDFD186AB2A0087F9374AEDA3CEDD7335677114E1CDCDE8B626A4C8FC5)

不支持平台：macOS、iOS。

参数：

  * other: [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) \- 被比较相等性的另一个静态成员变量信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员变量信息与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个类和静态变量用于演示
    public class TestClass {
        public static var variable1: String = "value1"
    
        public static var variable2: String = "value2"
    }
    
    main(): Unit {
        // 获取类信息
        let classInfo = ClassTypeInfo.get("test.TestClass")
    
        // 获取静态变量信息
        let staticVariable1 = classInfo.getStaticVariable("variable1")
        let staticVariable2 = classInfo.getStaticVariable("variable2")
    
        // 比较两个静态变量信息是否相等
        let result = staticVariable1 == staticVariable2
        println("两个静态变量相等: ${result}")
    
        // 比较同一个静态变量信息
        let sameResult = staticVariable1 == staticVariable1
        println("同一个静态变量相等: ${sameResult}")
    
        return
    }

运行结果：
    
    
    两个静态变量相等: false
    同一个静态变量相等: true

#### class StructTypeInfo
    
    
    public class StructTypeInfo <: TypeInfo {}

功能：描述 struct 类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/MKPA13EGQ-Gv6w92B2arJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6EF728612C333D0200F98FFA3373852BF72A7145CF12F7827C7A32479B08CA59)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



由于实现限制，目前 Struct 类型的变量/属性修改需要参考如下代码手动 box/unbox。

示例：
    
    
    import std.reflect.*
    
    public struct SA {
        public var v1 = 11
    }
    
    main() {
        var sa = SA()
    
        // 通过这行先包装成Any，否则无法修改v1的值
        let saObj: Any = sa
        StructTypeInfo.of<SA>().getInstanceVariable("v1").setValue(saObj, 22)
        sa = (saObj as SA).getOrThrow()
        println(sa.v1) // should be 22
    }

#### [h2]prop constructors
    
    
    public prop constructors: Collection<ConstructorInfo>

功能：获取该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 的所有 public 构造函数信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/QMH_aaMASfebwqsOLxrJBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=1EA87100792734B1C9F456B50EC64BF2A60F8C14C8FB8992A063253B4561B4B9)

  * 不支持平台：macOS、iOS。
  * 如果该 struct 类型无任何 public 构造函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public struct TestStruct {
        public var value: Int64 = 0
    
        public init() {}
    
        public init(value: Int64) {
            this.value = value
        }
    }
    
    main(): Unit {
        // 获取结构体类型信息
        let structTypeInfo = StructTypeInfo.of<TestStruct>()
    
        // 获取构造函数信息
        let constructors = structTypeInfo.constructors
        println("构造函数数量: ${constructors.size}")
    
        return
    }

运行结果：
    
    
    构造函数数量: 2

#### [h2]prop instanceVariables
    
    
    public prop instanceVariables: Collection<InstanceVariableInfo>

功能：获取该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 的所有 public 实例成员变量信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/ua45BdeHRqC6SrwRKjekEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7FCB02FA16D51546942A3F4EA028B44B538545E62C99F933D5412E6DF2D83666)

  * 不支持平台：macOS、iOS。
  * 如果该 struct 类型无任何 public 实例成员变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public struct TestStruct {
        public var publicVar: Int64 = 0
        var privateVar: Int64 = 1
        public let publicLet: String = "public"
    }
    
    main(): Unit {
        // 获取结构体类型信息
        let structTypeInfo = StructTypeInfo.of<TestStruct>()
    
        // 获取实例成员变量信息
        let instanceVariables = structTypeInfo.instanceVariables
        println("实例成员变量数量: ${instanceVariables.size}")
    
        return
    }

运行结果：
    
    
    实例成员变量数量: 2

#### [h2]prop staticVariables
    
    
    public prop staticVariables: Collection<StaticVariableInfo>

功能：获取该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 的所有 public 静态成员变量信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/TKq_yay9R4GcictQ61mGyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=7199FF5B0DF59DA07F48D80C5F67CD890CEE532ADF0B58DC10521C9780F2D1E5)

  * 不支持平台：macOS、iOS。
  * 如果该 struct 类型无任何 public 静态成员变量，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public struct TestStruct {
        public static var staticVar: Int64 = 10
        public static let staticLet: String = "static"
        var instanceVar: Int64 = 5
    }
    
    main(): Unit {
        // 获取结构体类型信息
        let structTypeInfo = StructTypeInfo.of<TestStruct>()
    
        // 获取静态成员变量信息
        let staticVariables = structTypeInfo.staticVariables
        println("静态成员变量数量: ${staticVariables.size}")
    
        return
    }

运行结果：
    
    
    静态成员变量数量: 2

#### [h2]static func get(String)
    
    
    public static redef func get(qualifiedName: String): StructTypeInfo

功能：获取给定 qualifiedName 所对应的类型的 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/ydYc0FOeTfiAzJNiebYnSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=BEACF279636DE76DE6FAB81F1BDAFD58FA80CD5F10E4B509E4BB9B2AE632B38F)

不支持平台：macOS、iOS。

参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) \- 类型的限定名称 qualifiedName 所对应的 Struct 类型的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获取与给定类型的限定名称 qualifiedName 匹配的类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public struct Rectangular {}
    
    main(): Unit {
        let ty = StructTypeInfo.get("default.Rectangular")
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]static func of(Any)
    
    
    public static redef func of(a: Any): StructTypeInfo

功能：获取给定的任意类型实例的运行时类型所对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/jdkPnt_UQICitAhhgIxh2A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=59CC46C23C03A6B03141307ABE8E8F77E016F1C703BF81C67C92C1543544EA64)

不支持平台：macOS、iOS。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

参数：

  * a: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 任意类型的实例。



返回值：

  * [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) \- 实例 a 的运行时类型所对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的类型信息，则抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)， 则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public struct Rectangular {}
    
    main(): Unit {
        var r = Rectangular()
        let ty = StructTypeInfo.of(r)
        println(ty)
        return
    }

运行结果：
    
    
    test.Rectangular

#### [h2]static func of<T>()
    
    
    public static redef func of<T>(): StructTypeInfo

功能：获取给定 T 类型对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/nXUi4XopTlWAChm3rVicfA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=445766061240D71F1FFBEFD1EDE909866AA4C92A20963C2A4EC66AE8523F93BA)

不支持平台：macOS、iOS。

返回值：

  * [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) \- T 类型对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得类型 T 所对应的类型信息，抛出异常。
  * [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) \- 如果获取到的类型信息不是 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)， 则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public struct Rectangular {}
    
    main(): Unit {
        let ty = StructTypeInfo.of<Rectangular>()
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]func construct(Array<Any>)
    
    
    public func construct(args: Array<Any>): Any

功能：在该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 类型中根据实参列表搜索匹配的构造函数并调用，传入实参列表，返回调用结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/JTFo7P-FSK2ntGlWWtqpuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DA6008646745CEF8FAB5B9AFD7201C4F04384588137556D07353073981841F63)

不支持平台：macOS、iOS。

参数：

  * args: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any)> \- 实参列表。



返回值：

  * [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 该 struct 类型的实例。



异常：

  * [MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) \- 如果实参列表未能成功匹配任何该 struct 类型的 public 构造函数，则抛出异常
  * [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) \- 在被调用的构造函数内部抛出的任何异常均将被封装为 [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) 异常并抛出。



示例：
    
    
    import std.reflect.*
    
    public struct Rectangular {
        public var length = 4
        public var width = 5
        public init() {}
        public init(length: Int64, width: Int64) {
            this.length = length
            this.width = width
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 StructTypeInfo，也可以通过实例获取 StructTypeInfo
        let ty = StructTypeInfo.get("default.Rectangular")
        // 匹配构造函数并调用
        let v = ty.construct(2, 3) as Rectangular
        println(v.getOrThrow().length)
        return
    }

运行结果：
    
    
    2

#### [h2]func getConstructor(Array<TypeInfo>)
    
    
    public func getConstructor(parameterTypes: Array<TypeInfo>): ConstructorInfo

功能：尝试在该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 类型中获取与给定形参类型信息列表匹配的 public 构造函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/nxVsi3kGTRiepBkBQN2jrg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=DEF9231C4114E9D044C0437B8675EFE0EC07DE00AF27B5474B39354EBABE03E1)

不支持平台：macOS、iOS。

参数：

  * parameterTypes: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 形参类型信息列表。



返回值：

  * [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) \- 如果成功匹配则返回该 public 构造函数的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 构造函数，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public struct TestStruct {
        public var value: Int64 = 0
    
        public init() {}
    
        public init(value: Int64) {
            this.value = value
        }
    }
    
    main(): Unit {
        // 获取结构体类型信息
        let structTypeInfo = StructTypeInfo.of<TestStruct>()
    
        // 获取构造函数信息
        let int64TypeInfo = PrimitiveTypeInfo.get("Int64")
        let constructor = structTypeInfo.getConstructor([int64TypeInfo])
        println(constructor)
    
        return
    }

运行结果：
    
    
    init(Int64)

#### [h2]func getInstanceVariable(String)
    
    
    public func getInstanceVariable(name: String): InstanceVariableInfo

功能：给定变量名称，尝试获取该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 类型中匹配的实例成员变量的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/4g67zc3pRVaqnWFVDDMdgg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=5AC829F50A8334A75F918B3C0FC6BC57C245CDF6B1BFC69F99DA2441B4CF8C5A)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 变量名称。



返回值：

  * [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) \- 如果成功匹配则返回该实例成员变量的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 实例成员变量，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public var myName = ""
        public init() {}
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 ClassTypeInfo，也可以通过实例获取 ClassTypeInfo
        let ty = ClassTypeInfo.get("test.Rectangular")
    
        // 获取结构实例成员变量信息
        let ivi = ty.getInstanceVariable("myName")
        println(ivi)
        return
    }

运行结果：
    
    
    myName: String

#### [h2]func getStaticVariable(String)
    
    
    public func getStaticVariable(name: String): StaticVariableInfo

功能：给定变量名称，尝试获取该 [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) 对应的 struct 类型中匹配的静态成员变量的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/QL1P5VG-TeyKWiNDLdndYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6AAEFD26937ECCE34315801A963E1F4D0E763AB0AE63AC0E35402A93AEDACB1F)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 变量名称。



返回值：

  * [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) \- 如果成功匹配则返回该静态成员变量的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 静态成员变量，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public struct Rectangular {
        public static var area: Int64 = 10
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 StructTypeInfo，也可以通过实例获取 StructTypeInfo
        let ty = StructTypeInfo.get("test.Rectangular")
    
        // 获取静态变量
        let sv = ty.getStaticVariable("area")
        println(sv)
        return
    }

运行结果：
    
    
    static area: Int64

#### class TypeInfo
    
    
    sealed abstract class TypeInfo <: Equatable<TypeInfo> & Hashable & ToString

功能：[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 提供了所有数据类型通用的操作接口。开发者通常无需向下转型为更具体的数据类型，如 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 等，就能进行反射操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/SHVtUL3ZRhqUy3Kr86e8bA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A60909893FBC6F6C9324AABA38726F76FF41A62F540593F652EF8CA1DF52FBDF)

不支持平台：macOS、iOS。

[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 的子类包括 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)、[StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)、[ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 和 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)，分别对应基本数据类型，struct 数据类型，class 数据类型和 interface 数据类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/44gVvhsZQ2WGfUNztO_ZPg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=08F52365AD5F442F568237FE5B5DF30D60F4234CA74EBDBC9FFDFCBAF1A549E1)

类型的限定名称为(module_name/)?(default|package_name)(.package_name)*.(type_name)。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TypeInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/8Hd5iSLZSKKkB9d-i77UPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=8B66D0E2BC30FCE66D8F24EE05A43A7DD0EB2100D624AA8BF7CDF53B2119FDC5)

  * 不支持平台：macOS、iOS。
  * 如果无任何注解作用于该类型信息所对应的类型，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义一个注解
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类
    @MyAnnotation
    public class TestClass {}
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取注解信息
        let annotations = typeInfo.annotations
        println("注解数量: ${annotations.size}")
    
        return
    }

运行结果：
    
    
    注解数量: 1

#### [h2]prop instanceFunctions
    
    
    public prop instanceFunctions: Collection<InstanceFunctionInfo>

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应类型的所有 public 实例成员函数信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/JgBSKQigTFC9azjbG4RQyg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6548E41B85E21D02EEA624D9F64908966C611F4D7B56CD73EFC937675E7DFB7C)

  * 不支持平台：macOS、iOS。
  * 如果该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型无任何 public 实例成员函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 如果该类型信息所对应的类型是 struct 或 class 类型，则该集合不包含继承而来的实例成员函数的信息。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public func publicMethod(): Int64 {
            return 42
        }
    
        private func privateMethod(): Int64 {
            return 24
        }
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取实例函数信息
        let instanceFunctions = typeInfo.instanceFunctions
        println("公开实例函数数量: ${instanceFunctions.size}")
    
        return
    }

运行结果：
    
    
    公开实例函数数量: 1

#### [h2]prop instanceProperties
    
    
    public prop instanceProperties: Collection<InstancePropertyInfo>

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应类型的所有 public 实例成员属性信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/60LrI6a6Tx6NwLbohgU7pQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=2A2B14C8F44C9B10E26E09D1241F1C7367609E9C2AEC79DE5616654E7F36031C)

  * 不支持平台：macOS、iOS。
  * 如果该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型无任何 public 实例成员属性，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 如果该类型信息所对应的类型是 struct 或 class 类型，则该集合不包含继承而来的实例成员属性的信息。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public var publicVar: Int64 = 10
        public prop publicProp: Int64 {
            get() {
                20
            }
        }
    
        private var privateVar: Int64 = 30
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取实例属性信息
        let instanceProperties = typeInfo.instanceProperties
        println("公开实例属性数量: ${instanceProperties.size}")
    
        return
    }

运行结果：
    
    
    公开实例属性数量: 1

#### [h2]prop modifiers
    
    
    public prop modifiers: Collection<ModifierInfo>

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型拥有的所有修饰符的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/eeY6yxZHTIa_gFte7Lq2tg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=17784C8B1918CFCFEA1B70578805593EF644A7B2899682FC215853E7C4AF0DCA)

  * 不支持平台：macOS、iOS。
  * 如果该类型无任何修饰符，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * interface 类型默认拥有 open 语义，故返回的集合总是包含 open 修饰符。
  * 由于反射功能只能对所有被 public 访问控制修饰符所修饰的类型进行操作，故将忽略所有访问控制修饰符。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public open class TestClass {
        public var publicVar: Int64 = 10
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取修饰符信息
        let modifiers = typeInfo.modifiers
        println("修饰符数量: ${modifiers.size}")
    
        return
    }

运行结果：
    
    
    修饰符数量: 1

#### [h2]prop name
    
    
    public prop name: String

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/Nb1MsgV8Qnqe80Umai62_Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=28FED34ED5A075C540F2A823B15052033C0B30930C651DE4DBC5A57741ED908D)

  * 不支持平台：macOS、iOS。
  * 该名称不包含任何模块名和包名前缀。
  * 类型别名的类型信息就是实际类型其本身的类型信息，所以该函数并不会返回类型别名本身的名称而是实际类型的名称，如类型别名 [Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte) 的类型信息的名称是 [UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8) 而不是 [Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public var publicVar: Int64 = 10
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取类型名称
        let name = typeInfo.name
        println("类型名称: ${name}")
    
        return
    }

运行结果：
    
    
    类型名称: TestClass

#### [h2]prop qualifiedName
    
    
    public prop qualifiedName: String

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型的限定名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/6J1OYuv7RhG9vIwdcKtUoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=2D40038571A2BDEC5DDB2DE72A4B88F004E80B65CFCFB996DFFA55A6844795F8)

  * 不支持平台：macOS、iOS。
  * 限定名称包含模块名和包名前缀。
  * 特别的，仓颉内置数据类型，以及位于 std 模块 core 包下的所有类型的限定名称都是不带有任何模块名和包名前缀的。
  * 在缺省模块名和包名的上下文中定义的所有类型，均无模块名前缀，但拥有包名前缀"default"，如："default.MyType"。



类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public var publicVar: Int64 = 10
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取限定名称
        let qualifiedName = typeInfo.qualifiedName
        println("限定名称: ${qualifiedName}")
    
        return
    }

运行结果：
    
    
    限定名称: test.TestClass

#### [h2]prop staticFunctions
    
    
    public prop staticFunctions: Collection<StaticFunctionInfo>

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应类型的所有 public 静态成员函数信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/NSPp-KGjRgutq68S6_4Ppg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C26D951543688D2CD37FD2ECEBEBEB00FD80939339332C9A4677F3130F941108)

  * 不支持平台：macOS、iOS。
  * 如果该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型无任何 public 静态成员函数，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 如果该类型信息所对应的类型是 struct 、class 或 interface 类型，则该集合不包含继承而来的静态成员函数的信息。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public static func publicStaticMethod(): Int64 {
            return 42
        }
    
        private static func privateStaticMethod(): Int64 {
            return 24
        }
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取静态函数信息
        let staticFunctions = typeInfo.staticFunctions
        println("公开静态函数数量: ${staticFunctions.size}")
    
        return
    }

运行结果：
    
    
    公开静态函数数量: 1

#### [h2]prop staticProperties
    
    
    public prop staticProperties: Collection<StaticPropertyInfo>

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应类型的所有 public 静态成员属性信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/Tnhs3D2UQs-hNbcd2m83XQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C25848D2F5519FA6B437A4133938DB8E2FBDF1F6F55D24C962C7BD8AAFDAE85F)

  * 不支持平台：macOS、iOS。
  * 如果该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型无任何 public 静态成员属性，则返回空集合。
  * 该集合遍历顺序取决于定义顺序。
  * 如果该类型信息所对应的类型是 struct 、class 或 interface 类型，则该集合不包含继承而来的静态成员属性的信息。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public static var publicStaticVar: Int64 = 10
        public static prop publicStaticProp: Int64 {
            get() {
                20
            }
        }
    
        private static var privateStaticVar: Int64 = 30
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取静态属性信息
        let staticProperties = typeInfo.staticProperties
        println("公开静态属性数量: ${staticProperties.size}")
    
        return
    }

运行结果：
    
    
    公开静态属性数量: 1

#### [h2]prop superInterfaces
    
    
    public prop superInterfaces: Collection<InterfaceTypeInfo>

功能：获取该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型直接实现的所有 interface 类型的信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/EycYvVx6TLCzKSJoL5H22A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D9D77FCEEFF031FAA26EC647DCEEA449AAE1E0BE9FCA7A7DA1EC074E183AB8E1)

  * 不支持平台：macOS、iOS。
  * 所有类型均默认直接实现 interface [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) 类型。
  * 该集合遍历顺序取决于定义顺序。
  * 目前， struct 类型只支持获取到 interface [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) 类型。



类型：[Collection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-collectiont)<[InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)>

示例：
    
    
    package test
    
    import std.reflect.*
    
    public interface MyInterface {}
    
    public class TestClass <: MyInterface {}
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取父接口信息
        let superInterfaces = typeInfo.superInterfaces.toArray()
        for (superInterface in superInterfaces) {
            println("父接口名称: ${superInterface.name}")
        }
        return
    }

运行结果：
    
    
    父接口名称: MyInterface
    父接口名称: Any

#### [h2]static func get(String)
    
    
    public static func get(qualifiedName: String): TypeInfo

功能：获取给定 qualifiedName 所对应的类型的 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/zkjmZNs0TtiWci6MrfsBoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A94BAEAB7A7A2BE850F301392AB9B4885C84EF7BFFF01C9191B90765E040E691)

  * 不支持平台：macOS、iOS。
  * 目前，对于 Tuple 类型，仅当 qualifiedName 对应的元组已被实例化时，该接口才可用。



参数：

  * qualifiedName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 类型的限定名称。



返回值：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 类型的限定名称 qualifiedName 所对应的类型的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获取与给定类型的限定名称 qualifiedName 匹配的类型所对应的类型信息，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        let ty = TypeInfo.get("default.Rectangular")
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]static func of(Any)
    
    
    public static func of(a: Any): TypeInfo

功能：获取给定的任意类型实例的运行时类型所对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/ksBARw4pSZKQFXrEG2YMzw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=2BADF4C5B5F2E8710BC71FD43AC5550053D41F31D22EEC6DBD80C30F07C7B43A)

不支持平台：macOS、iOS。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

参数：

  * a: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 任意类型的实例。



返回值：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 实例 a 的运行时类型所对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的类型信息，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        var r: Any = Rectangular()
        let ty = TypeInfo.of(r)
        println(ty)
        return
    }

运行结果：
    
    
    test.Rectangular

#### [h2]static func of(Object) (deprecated)
    
    
    public static func of(a: Object): ClassTypeInfo

功能：获取给定的 class 类型的实例的运行时类型所对应的 class 类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/XDHwoftaTYS1Us8EOQEliQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=575520FAB8B7AEBACC316D3ADB1FFD17B135C807447696B7F1603C4047BA1C9E)

  * 不支持平台：macOS、iOS。
  * 未来版本即将废弃，使用 ClassTypeInfo 的 static func of(Object) 函数替代。



参数：

  * a: [Object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_classes#class-object) \- class 类型的实例。



返回值：

  * [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) \- class 类型的实例 a 的运行时类型所对应的 class 类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得实例 a 的运行时类型所对应的 class 类型信息，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        var r: Object = Rectangular()
        let ty = TypeInfo.of(r)
        println(ty)
        return
    }

运行结果：
    
    
    test.Rectangular

#### [h2]static func of<T>()
    
    
    public static func of<T>(): TypeInfo

功能：获取给定 T 类型对应的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/kBWWRS0tQxiQ8hhCptBX-g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=F389E482B700956A654BA94FF0A41E0FFB97706FCFC203CC4436EAD80C68E628)

  * 不支持平台：macOS、iOS。
  * T 支持传入类型别名，包括内置类型别名（如 [Int](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-int)、[UInt](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-uint) 和 Rune 等）与用户自定义类型别名。



返回值：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- T 类型对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无法获得类型 T 所对应的类型信息，抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {}
    
    main(): Unit {
        let ty = TypeInfo.of<Rectangular>()
        println(ty)
        return
    }

运行结果：
    
    
    default.Rectangular

#### [h2]func findAllAnnotations<T>() where T <: Annotation
    
    
    public func findAllAnnotations<T>(): Array<T> where T <: Annotation

功能：获取所有指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/Csq359u9Tl6WjirHi7jU9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=A73DC6F2545DDC62FD0329744AD6600F11E0BDA52E761110464CCB3298F9A008)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<T> \- 若无指定 T 类型的注解时，返回空数组；若有相关注解时，将所有该类型注解对象构成的数组返回。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类
    @MyAnnotation
    @AnotherAnnotation
    public class TestClass {}
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 查找所有指定类型的注解
        let myAnnotations = typeInfo.findAllAnnotations<MyAnnotation>()
        println("MyAnnotation注解数量: ${myAnnotations.size}")
    
        return
    }

运行结果：
    
    
    MyAnnotation注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/d45poIUaRp67a2etctfxUA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C7E20D937F255C4087142FDC4568DA0B0587DD8FFD6DA0EB902F0B35BAC3D21D)

不支持平台：macOS、iOS。

返回值：

  * ?T - 如果成功匹配则返回该注解，重复标注或者无法匹配时返回 None。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类
    @MyAnnotation
    public class TestClass {}
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 查找指定类型的注解
        let annotation: ?MyAnnotation = typeInfo.findAnnotation<MyAnnotation>()
        match (annotation) {
            case Some(_) => println("找到了MyAnnotation注解")
            case None => println("未找到MyAnnotation注解")
        }
    
        return
    }

运行结果：
    
    
    找到了MyAnnotation注解

#### [h2]func getAllAnnotations()
    
    
    public func getAllAnnotations(): Array<Annotation>

功能：获取作用于该对象的所有自定义注解。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/Oz1N9gNqR1Wz18feB_5qdQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=B32CA867DEE71B9680662A7641542A44AEF5FF5DDE3828D04E843D67907C49DC)

不支持平台：macOS、iOS。

返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Annotation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_types#type-annotation--object)> \- 作用于该对象的所有注解。



示例：
    
    
    package test
    
    import std.reflect.*
    
    // 定义注解
    @Annotation
    public class MyAnnotation {
        public const init() {}
    }
    
    @Annotation
    public class AnotherAnnotation {
        public const init() {}
    }
    
    // 定义一个带注解的类
    @MyAnnotation
    @AnotherAnnotation
    public class TestClass {}
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取所有注解
        let allAnnotations = typeInfo.getAllAnnotations()
        println("所有注解数量: ${allAnnotations.size}")
    
        return
    }

运行结果：
    
    
    所有注解数量: 2

#### [h2]func getInstanceFunction(String, Array<TypeInfo>)
    
    
    public func getInstanceFunction(name: String, parameterTypes: Array<TypeInfo>): InstanceFunctionInfo

功能：给定函数名称与函数形参类型列表所对应的类型信息列表，尝试获取该类型中匹配的实例成员函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/0o2RuCnER4SM4oowBT9hBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=329C1DF8F57562159AA7B0375E330BD1688EE7A46BD7CFDED43162755DE4F523)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 函数名称。
  * parameterTypes: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 函数形参类型列表所对应的类型信息列表。



返回值：

  * [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) \- 如果成功匹配则返回该实例成员函数的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 实例成员函数，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public func area(): Int64 {
            return length * width
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 TypeInfo，也可以通过实例获取 TypeInfo
        let ty = TypeInfo.get("default.Rectangular")
        // 获取 InstanceFunctionInfo
        var gif = ty.getInstanceFunction("area")
    
        println(gif)
        return
    }

运行结果：
    
    
    func area(): Int64

#### [h2]func getInstanceFunctions(String)
    
    
    public func getInstanceFunctions(name: String): Array<InstanceFunctionInfo>

功能：给定函数名称，尝试获取该类型中所有匹配的实例成员函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/jviB755SSbSm7aWpRRih1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=46162296083F44F4F5E1A3DEAF6F5810A2D8B76ED441C8425FFC40F485F47480)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 函数名称。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo)> \- 如果成功匹配则返回所有匹配到的实例成员函数信息。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public var width = 5
        public func area(): Int64 {
            return length * width
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 TypeInfo，也可以通过实例获取 TypeInfo
        let ty = TypeInfo.get("default.Rectangular")
        // 获取 InstanceFunctionInfo
        var gif = ty.getInstanceFunctions("area")
    
        println(gif)
        return
    }

运行结果：
    
    
    [func area(): Int64]

#### [h2]func getInstanceProperty(String)
    
    
    public func getInstanceProperty(name: String): InstancePropertyInfo

功能：尝试获取该类型中与给定属性名称匹配的实例成员属性的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/3hBxQij9SA2244UJe2Kaug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=075C0B1D25BEF4866BF2C24B725AE581166F4CE8DFDF71004C9CA5AD7376530D)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 属性名称。



返回值：

  * [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) \- 如果成功匹配则返回该实例成员属性的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 实例成员属性，则抛出异常。



示例：
    
    
    import std.reflect.*
    
    public class Rectangular {
        public var length = 4
        public prop width: Int64 {
            get() {
                5
            }
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 TypeInfo，也可以通过实例获取 TypeInfo
        let ty = TypeInfo.get("default.Rectangular")
        // 获取 InstancePropertyInfo
        var gip = ty.getInstanceProperty("width")
    
        println(gip)
        return
    }

运行结果：
    
    
    prop width: Int64

#### [h2]func getStaticFunction(String, Array<TypeInfo>)
    
    
    public func getStaticFunction(name: String, parameterTypes: Array<TypeInfo>): StaticFunctionInfo

功能：通过给定函数名称与函数形参类型列表所对应的类型信息列表，尝试获取该类型中匹配的静态成员函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/ctm7IehHTouIYnlQHHdIzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=401CDDF976A5F16350D610772CECC7BEB63623024A4810A28E3AC76AA47AB5BF)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 函数名称。
  * parameterTypes: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)> \- 函数形参类型列表所对应的类型信息列表。



返回值：

  * [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) \- 如果成功匹配则返回该静态成员函数的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 静态成员函数，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class MyClass {
        public static func myFunc(): String {
            "Hello World"
        }
    
        public static func myFuncWithParam(value: Int64): String {
            "Hello ${value}"
        }
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.get("test.MyClass")
    
        // 获取带参数静态函数信息
        // 通过已有函数的参数类型来获取类型信息
        let function = typeInfo.getStaticFunction("myFuncWithParam", [PrimitiveTypeInfo.get("Int64")])
        println(function)
        return
    }

运行结果：
    
    
    static func myFuncWithParam(Int64): String

#### [h2]func getStaticFunctions(String)
    
    
    public func getStaticFunctions(name: String): Array<StaticFunctionInfo>

功能：给定函数名称，尝试获取该类型中所有匹配的静态成员函数的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/GNyULvATS1WB0wu2msPOHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CD730F29C6F180FFF5E21F0EB362A8A5882C9B17A6390690D51E0E63355616E4)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 函数名称。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo)> \- 如果成功匹配则返回所有匹配到的静态成员函数信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        public static func myName(): String {
            ""
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 TypeInfo，也可以通过实例获取 TypeInfo
        let ty = TypeInfo.get("test.Rectangular")
    
        // 获取静态函数
        let sf = ty.getStaticFunctions("myName")
    
        println(sf)
        return
    }

运行结果：
    
    
    [static func myName(): String]

#### [h2]func getStaticProperty(String)
    
    
    public func getStaticProperty(name: String): StaticPropertyInfo

功能：尝试获取该类型中与给定属性名称匹配的静态成员属性的信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/K8Lb426hRGC4Kp9qcb05cA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=20471588F86C8FD104E9239005698E8C4ED7889C1731E3B8A03E79AC2590FC40)

不支持平台：macOS、iOS。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 属性名称。



返回值：

  * [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) \- 如果成功匹配则返回该静态成员属性的信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果没找到对应 public 静态成员属性，则抛出异常。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class Rectangular {
        private static var valueArea = 0
        public static mut prop area: Int64 {
            get() {
                valueArea
            }
            set(v) {
                valueArea = v
            }
        }
    }
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 TypeInfo，也可以通过实例获取 TypeInfo
        let ty = TypeInfo.get("test.Rectangular")
    
        // 获取静态属性
        let sp = ty.getStaticProperty("area")
    
        println(sp)
        return
    }

运行结果：
    
    
    static mut prop area: Int64

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该类型信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/FuriL9llQQOBoTL1oYfu3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=BB1AB75C843814BB5D90A64025934CE48CA5D64EB99962D282DAA73E95632079)

  * 不支持平台：macOS、iOS。
  * 内部实现为该类型信息的限定名称字符串的哈希值。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该类型信息的哈希值。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public var publicVar: Int64 = 10
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取哈希值
        let hashCode = typeInfo.hashCode()
        println("哈希值: ${hashCode}")
    
        return
    }

可能的运行结果：
    
    
    哈希值: 93845398479248

#### [h2]func isSubtypeOf(TypeInfo)
    
    
    public func isSubtypeOf(supertype: TypeInfo): Bool

功能：判断当前 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 实例对应的类型是否是参数中指定的 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 实例表示的类型的子类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/sW1k98IHQDylShqddpE_dg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=C687FB1DDEA754CE7884341F76DFA887858C9876B7A96BED28210CBBD9C549BE)

不支持平台：macOS、iOS。

参数：

  * supertype: [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 目标类型的类型信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型是 supertype 所对应的类型的子类型则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public abstract class Rectangular {}
    
    public class Square <: Rectangular {}
    
    main(): Unit {
        // 此处是通过 Rectangular 的类型的限定名称获取 TypeInfo，也可以通过实例获取 TypeInfo
        let tyr = ClassTypeInfo.get("test.Rectangular")
        let tys = ClassTypeInfo.get("test.Square")
        println(tys.isSubtypeOf(tyr))
        return
    }

运行结果：
    
    
    true

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取字符串形式的该类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/imGsSzv2RlCzqMficHbFeQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E7E465018D578E529F9F1EAFC8D29F78AFBCCB065385FD14F7819B9DA4A43558)

  * 不支持平台：macOS、iOS。
  * 内部实现为该类型信息的限定名称字符串。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该类型信息。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass {
        public var publicVar: Int64 = 10
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo = TypeInfo.of<TestClass>()
    
        // 获取字符串表示
        let strRepresentation = typeInfo.toString()
        println("字符串表示: ${strRepresentation}")
    
        return
    }

运行结果：
    
    
    字符串表示: test.TestClass

#### [h2]operator func !=(TypeInfo)
    
    
    public operator func !=(other: TypeInfo): Bool

功能：判断该类型信息与给定的另一个类型信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/hjJzskYlSn-rYpL5P9YinA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=3A8BB6C924BBE87B921E1C79482E2ECBD01878FED014ECFC231883B73D24AC3D)

不支持平台：macOS、iOS。

参数：

  * other: [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 被比较相等性的另一个类型信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型信息的限定名称与另一个不等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass1 {
        public var publicVar: Int64 = 10
    }
    
    public class TestClass2 {
        public var publicVar: Int64 = 20
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo1 = TypeInfo.of<TestClass1>()
        let typeInfo2 = TypeInfo.of<TestClass2>()
    
        // 比较两个类型信息是否不等
        let result = typeInfo1 != typeInfo2
        println("两个类型信息不等: ${result}")
    
        // 比较同一个类型信息
        let sameResult = typeInfo1 != typeInfo1
        println("同一个类型信息不等: ${sameResult}")
    
        return
    }

运行结果：
    
    
    两个类型信息不等: true
    同一个类型信息不等: false

#### [h2]operator func ==(TypeInfo)
    
    
    public operator func ==(other: TypeInfo): Bool

功能：判断该类型信息与给定的另一个类型信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/gnXoSs0ITteQJjwxtJUo7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D7BE00DE97F84AE2EC1D8D7847256FAC160F2EAA0F046849FA0A617A55611920)

不支持平台：macOS、iOS。

参数：

  * other: [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) \- 被比较相等性的另一个类型信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该类型信息的限定名称与另一个相等则返回 true，否则返回 false。



示例：
    
    
    package test
    
    import std.reflect.*
    
    public class TestClass1 {
        public var publicVar: Int64 = 10
    }
    
    public class TestClass2 {
        public var publicVar: Int64 = 20
    }
    
    main(): Unit {
        // 获取类型信息
        let typeInfo1 = TypeInfo.of<TestClass1>()
        let typeInfo2 = TypeInfo.of<TestClass2>()
    
        // 比较两个类型信息是否相等
        let result = typeInfo1 == typeInfo2
        println("两个类型信息相等: ${result}")
    
        // 比较同一个类型信息
        let sameResult = typeInfo1 == typeInfo1
        println("同一个类型信息相等: ${sameResult}")
    
        return
    }

运行结果：
    
    
    两个类型信息相等: false
    同一个类型信息相等: true
