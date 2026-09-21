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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/LG1w8k_MRYiR73nTJ7QHPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8FB40722F6FBF41402D97559AC4FDB98F73CE82F1F9B5DA9E303952747D0117B)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop constructors
    
    
    public prop constructors: Collection<ConstructorInfo>

功能：获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 的所有 public 构造函数信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/HasoD6j1RzewenIsQQmDWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BEB99992DFEB05BF3E1A6CB2244DB95295150C16216A08BC00D61F983408E07F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/ApagOfkuQ6-ir1MFPHXApw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=43F38C3A65349C7A60D232AA2E4273A17C27D6F738EA33D50CDBF80640F82BE2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/XYKbc9pLR_2ZLji-KqTrCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=364947AE47AB5406543217FEA70FD8CF911BCAE8BE46D386499485E8E77BB560)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/j37aToS_Sqe2S6s2MXq4vA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9DFCA113E85552D224BD27335FA72EF32005D4C213A7E5D8AB08629CAA04ED3E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/4DFQZjibT3SPz4WT-GU1Ww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8372960EA58F73E5A5E562C955CA53210D60BC137B14EA37BBD603584E0EE260)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/5LGumR48T_-yuvsOn6Gatg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9C4AD6C6AFEF1E31E4457FD3DB02805AB20B9754F874B903DEBDD56B8FCE206F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/lHZDhV2zRUaUWBnAC3SBTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A852714A583ED9A2E0F524D63A04CF7EACE5F78D370F6F7A6833D17169A35F93)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/8eOlo8vUT3m6rMKkMcNRNw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=37D9EA67F304AC072112571C174B66E560C3B49466905AE7C06BE926F02F20F2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/0mai4a8tSPy2Jlw94mBW8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C3F1F3B7D0EAA25E46406D0405CC9D3A339932443B059CF548EB468B0EF825E0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/2xEL2L8tSJm8El9YMIIqUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=25F9C425529CE93BEFFD94D009522BEFC28192A774CB35964254361E67AEE858)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/Y8hjGGarRJys7scawY__9w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=248B513D99B64000F897AD4AC72366FFE528BC3E140DD8ED36A71A417BBF07F9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/8eRvRYbUQ_y5fgN5M9RsQA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C3B9B8ED45EBD0472524317D836CC2CB5AC929221D5064D0FD459CD86A82790D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/ZUKS4dHbQ2OyuCBpgC1bJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=94EA14DC7D11B367305D8DDCB5B5851BB364F78A7215693AEDB43D5251541C90)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/NRAQk33UTouVNb3mgMXlTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B20AB1CF9C09F036D67FFBC12F079276A658D4BB57962342DB6C0149AA735CF7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/apTYmvB1Q--hm3EfMBNU1w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EB3ADE645B6A444ACF710F09A3CBF70774AD7AE257649435650571F7BE8DB0CB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/y_0LqIsrS9yzXg6v1bQApQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B3D0AFCFAA180D84AFFAA6D5FC9E2DF4E710D6CDDD2CB6775ACA586B4E6CEFE6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/w6AN1FwmTq2Ntt5rtVxj6Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=25E422F1A98B5E896C86CD2DC85A2CBCA1091FAAD1446268726BDBB2B46AE7DC)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ConstructorInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) 对应的构造函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/dYoh_OzZTSCmQmpB4yStCQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4A15626D885906BFCE74ABE208BF87185DF54198F8D912B519F9AA7E19F34BFC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/HiUq6SO9S3-B3mwuzKqfqg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=2EA13338C251202A456FA49E8B029EAAB1C919DB36BAC26C6F931094527E00E2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/WWC2yt1gR_mt5cLvhP9FSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=632AE5A752CB9DE6395532C8F8ACF02C4D98AC918C527EF65D9AD6CA5F99852D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/9BlMRh6TQGaigRipTBXK8A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=FE8FFFA50B02B9593430224F61A487E8C4BED3E9697FAE979A55E1931FA7FF59)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/XeUknkTJTG6xO0AUXOksmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A8E62E5D9DB9918A73FCDA0D40B5C0C50BFCDD785D1201FE3CBDB341AD22AF9D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/sy6s9MUORJWRO-McatxcvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=98CE790A84A84B17DC1FE8C00DE700CC79F6A51D4BC91166804B0B3A31984D80)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/ZYQqScfMRi-nAzqdAcXnYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=14E8C2F03AC7068124F0517B56A853A701C01DDC6C477C1E4AA81BD9042F140E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/lwhgatt8SQegMYJiEpCrow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=301740E16F1554F972A3E00E957F415F4B8EB146998F7B0DCE73DABE9756D19B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/pSq4HzsOSsm7wh6MUXfsiw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EC9C20A8192F5DE78DEEA6DA153F3BC9A83C3BC6A8DB75384C6E6E9E5130861D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/wVJoWmW_QhK6L3YOAzaCtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EF4E5274BF7BD206DD75BA93BDCFB95D86BC5A59F6BBFDCBED41ED272023DF72)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/n33OR_iSSq2rv1QkaHYxIg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DE14BC608C8FF798C92DC043B69BA3F1C632165C79FE97BCB886196E8FE922CF)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop constructors
    
    
    public prop constructors: Collection<EnumConstructorInfo>

功能：获取该 EnumTypeInfo 对应的所有枚举构造器信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/yBIGJgG1T9u8zI1HilmUCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B1B369967A891BB77C0DF5353D363EB11ADE112B1629FF4937AD8969EFC36E9E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/62_8hB_FS-eYoo1y8kbiHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BA809AD08E061EF56C5AD5939E008266751CEBE08191D7C21DD4FDB05FF80F70)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/iX8B0iNhRTayAR4vuy_IEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=41DE2ADFAA16CF36FED0BC7B94002BBE5B28C46A4FECDD848FF5FEE11FDD153A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/SKn4xh2dQEK3PpuTuHZZtw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9CC2A20DB059FFE82348F9E09F5FE673B63E429E941509E76FE8F47AF6A8DA0B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/qMkzuls8Sl2NOI6BkKHZzw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0384F2B1C829B947688C23647F76951811D757BAC54044D6CFD015537729FD07)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/G_ymGL-7RWmPVn_iE8vs0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=FE8BAE2CCBBB46A44DA527E9DB6F23C99D8D95B3AA66CA121C66797058AA5143)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/ViduXrQhS-KKOY2YbI7xLA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=21F3489B56D5D528541CDB3AD50E2794C4BD6D7E09149D16D8A4C57EE99AC22F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/w4dtU0J0TIKxrWPCd7YEJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BD744D6BDD051EEAB628275ABB2C1AD536147B64A5B031A16BB0AE00445A530D)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<TypeInfo>

功能：获取该函数类型的参数类型列表，按声明顺序返回。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/Q7vQq_yCROekZbVLjXJSjQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=07F689C2457ABFDEFE57DF9FBDB925ED5AF40CBB3F908889FF8872409598F35D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/W3iSXxqnQRK6hgHb-Mc9fw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=575EBC55476E0374688E65B8D8A226E51E313087BA84D247725353F943FC8CEC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/bgMVnKxPQtCGADpNqR8e-Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=25F1A602D0318CFD439210E9934DBD14C76490F22FB1FCE538385C759E6AB859)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/QNiWe__-Qp6Xam9Ezf6nbA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CB904ACD79EF20C80BD44934D7DA57617BB5A6927C8487505D9F15FEB510420F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/f869B8rERHiHnKaShydfBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=E9A61E838FB4790F932BAEDF21D55068950B48C59B5CBE97D566D6507AA92622)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/ipBAjFLVSPqXh2Wd-1NZmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BA3E9358BF5ECA15BB586CE2FE3BAA15BCF600CE6E1BC9B59F8B0838339F7963)

不支持平台：macOS、iOS。

父类型：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo)>



#### [h2]operator func ==(GenericTypeInfo)
    
    
    public operator func ==(other: GenericTypeInfo): Bool

功能：判断该泛型类型信息与给定的另一个泛型类型信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/aCuB6mPiTfiIXjaMyxWofg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6CF24CDAD02185EE1FF9F420BDB90F27E6F6530DBCB572AB92307BC85E65B740)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/vKvWixAjRoWBagas_D-5FA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=5DB206825496D396B6F574646907E1BB3E300A31A91BCC6E0901BB4CF5D4D78F)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<GlobalFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有[GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/B1wkHo5TRCq-2ffusHn2Dg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4C0801B688C81ED1A7A7071CE6426854575104F4B8E0AC21D6C7EF937642E280)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/8VmQZfQyTdqm3zFu3kChBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3C918FF80D80B8C472E206F9AB8096F396D9420DA303EE2C177E7DF525EAFEC6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/hM5KsMQHTBmszL4nqTBr3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=128960739AECAA8C04C38FB0BCDAC1D4C134B1B27CC75991048B3377FBB10065)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/pl55wHGXQVO_yFPbG6UoSA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8183319C3882026F42226393854E7276439E728AB53CA1374D04B6417A9487E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/u03wqgWBQpiNeBdAgldivg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A40C9EEF26C236B0E984787D9026045F4ABCDEC5F806CF0EB3FBCC7FA5703B56)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/Jvz7zaw_TR6P6SSslNs4Jg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=7A16F644C573018121FD42A47B4E019C2F09007B549884EF7ABA7A086DFC93C5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/XrtN2oCkSqWBUbuK2HaZaw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=7FA24E962F2D71C5BA3E377745985FAF3F45BA0F38AFDBA91955166F072489D1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/L07RgBikSJ-VtWj-82vYlg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EB9038EE1F887A4956915F3F116DE16429763B23CC2C7D191D15619995A69466)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/akRfFLEKSFGlbDFFPmUGWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BDB10C02FE6732ECB5B6F1E432BAE9584362A65BBA2F7FA4A15717DFBC9899DD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/mYcMTrFOThOntn-qYLniHw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DBC8DE95BBB2D072AC43D889292AD3F02605C803E8F828D1396216588A5DF4A9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/chQfG3jYTLW7n0NFwd1G9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C5CE56C3CD612129F1A207F7C4D68F6411B1FD15DAE9878C422026AE0A016BD1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/_cp_YecTT66_3S_6Tv2kDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=771F5CF19C30B8FA385F26B6609944FDA9B24C453EE9DCA1C99F94379A854C31)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/3P6ZCXznT26dbEjvj0daUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F35314E20C6FDD91AC664943BE1477C4022FA612B152C18D67353200D9607449)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/cjY-zQ2oQNuA3ACtyJTRpg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8CADCD985661B954E18E7B33D16310306834EE3F8D0B2BBAB05CF27D6EDB83C8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/T5hDzQ1QRZe8yP4WhbIOWQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BFF837465660E0A3EC5B2320417FC528CD16911D01DB4A7C294679565190CE71)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<GlobalVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/6AgOl1G5Tpe2TH_rfeEpKA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B2F51324AAEACD3A0820D5434CB03923CC5B7804BDD2B9DAF55789D8067F2DE5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/evzEr8q1TW6w6HdeKsc0Xg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D8FA49D05753C1703862B97836CD70A713073BBBE0BF391705955C6D320E9FC9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/2q3xtl-iTnW2ZYujEoMKmQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4C7D003596B6B62A3B642AC40E6988452613EB947CB2BC45DA47AAA4566D59F2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/FrjuTEN7SuGjZXfAsgdC3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3FFF7F9BA8A7EB0357BEF72FD2873B90FE8BFEFC46FBA7B23E4F676806FA740A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/Y3UrolirTeCdu9PeeausbQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=859907026BE137A6A349C0AD4B737AEDC52BFAD49581525115D38E5063C8B231)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/kI40ATDAScKZdz0oU3aa3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=81C3CACFC2402ADE5B737E106AE98DE171A4F8CCA383C8254C203901A875C1AE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/E4LSm-qSSfqrkwdGWTy-qg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=564188854F51CC20441E6568733DB493943B3C560EB90BC3F8B4AE4C7BD960AC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/9bj1gOYHS-6c6ChERedKfA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3013A8CA8C2620511EB73ACB34BECAF44563B346F102C988A10BA9C4139EA063)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/xXFP_U5BQOeTfxoZcdnZqw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1F0256FA26C00AF99A8E276F8EBA8BE0479A7034099769FC67540361800739CF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/65Wr8VhcQduYldCRx_U96g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1C45DADA854CFAE957B7F6D05C0C357BF008ED3DB2EFA6891A207D95DA397384)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/rKmP1RCMSiy9JhnzTgp8sQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D66A5861424CAA12D3267FE51645BD2B3521067AF12EF7E6B9698CE0F3C22BDB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/VFkUMELqRXWG5XDjYH5o0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=76AF9248B13CBA232CBA8DD80F004EC8FA0FC691D26F3523F861468BB2AEBA35)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/uxpRUFE9Sly7y95U5DRSTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=7AAD42DB3FA820AD673ED1DA6121E997A297A216ABF04D267368D76D60AF7D2C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/9BHHYKhSRNixBGxYCxdjSA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=AD293206217D59E91AE447CBE9AD5DB17D733C2251F99D13104CE7B66AAD3416)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstanceFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/l3cjQsroQuCIYarSsG9uzA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B1E27285F8725FF91BB10E3B45C3A0887C61FB61063C6F9012EFC2C02160FC0B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/aH2qYaXOTEiRQI5CehPpSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B0FE2951A39A53FF3F3066CAE7066615DC53A07473801925E22773DDE41EAE95)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/1u_pi3F_Qam3KaOTXQabww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=197AB30F54379C3151A8878AC57D9639A09EC0E12CC33A83AEC8FFB5477DCFDF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/QI4vchGZRTulmx699OwTFw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=81D99F7E25911570077CC6C032D087348E91481A2C58C48B705B2670536E648C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/iVO5E7C7S5-fwnk2vyeXeA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EBD73B69E3D1DAE793E3907BDBBD0E775E87686E4A9C3B1F42796D27F5074547)

不支持平台：macOS、iOS。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/l6V8lWjGQxGHckSfIq3kCg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6143E092842AA860F95FCEB47BAAEB3460EB23D700E70290D92A92037029E916)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/b92EQ0fFT1-3G1tT9H7mSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=14821DAB7EF7BCCF55DE36780AF84118F6123E65811747F3C8089523F25508A0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/pSKRXvHzSbGO_7tKYUm6zQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=901B4B8EB08C54C07926E20B3F28C18A13C4EBE515C88A308A671252580C2702)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/ikliww69TAScggzVNgK6-w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BE5A73C076E6168B4CB6A494C417FAEE5F3BAE25F8AF6D8B3AD78B8E465677B8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/u1dgUHG8Rv2nqyY5OFrfZQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B3D1BA64EF4C5BA8736C7CE324B2081FBB6C2D60982739FAAEA6FC67036AC032)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/co1iBJLMRG-GhkTl5mwXRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1CAEC481FAF202D897D8718740A4CE486D37A1166977A89EC307FA34F2F9C3AA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/jqn3GRRTSSOKBq5B6k0KmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B1BAC23B73B1AFFC6500590087FB9D18336119B4F5C117C88DA3A14EDBEA3B0E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/pPZUBbUoTuOJm-8yA6P2Vw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8B57304EAB1648AA16061FBF38468890E3C3865D868D52ED640A2F1ABC9E3C83)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/cdIfhrb5Q1K8DJnk0sow7Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0BF913D8B73FDB72E984787C33DFB408C2BA533F03BE6964266E4DBD2AC231E2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/gM0HJC5pQM2iz30GD1HC0w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BBB0F42282C146198FBA33CAEE1CE424AE568231A27AA890D8EA4AA44FBA998E)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员函数拥有 open 语义则返回 true，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/n96h-w9PT1qYHbS-ICN-NA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=63A04AAFDABB593182D17B49F963156070600EDCAB3EAEDA0B35B8EFA41A7B44)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/__AmJJzUQYWE7TuoOpf1cg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=446486EAAC2A61F00F7E71770F6838D0A1EBA36EA9D578E4EA6AC016B4722DD0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/keBkIjQ8QsmUVGHZxXdRbg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3446AF1E0D87F5668832F719DDCF1BB314C7712D952EDF053B58AC08FB764C3F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/PXVJ9ixKQUK9x_HdscL18A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DCD02315BDACBEA8FA5A21DD91E8802B110357E70C19889C0324E417DA1701C3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/Gt5afb0gQs6uq-DPdq0TlQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CEEFCBF5B01A43C2F069E09C9D14E2193D48ED77B20DDCBB6676C77B498E92C8)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstancePropertyInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/KaV3dQU3Swudau82-94Fmw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=66DEE40F2D28DFEC98ABA6F43E79D5C3487D79A9295977110F2FD1884FEB5D01)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/-9iwSboTTqG2vrF-JdDQQQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3887F2656AA79CCBB67D7921EBA55AA4006DFECEC7F379FA7CB80CAAB4D10311)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/vtFUspIzRo-8y3Nnn1UStw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8BD5431AB65BB26CE695246DB5D85C19E3208934E1E12629ACAFB4B51AF35A28)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/rDRQqoGLQgeMDFG7O3h2eQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9A4CA85863D9223188479D8D148EB2348D63696217377B5E9A648ACFF13448D8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/2YpQkMd1Q4ia6MjIkShOcA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4934560B122A726172948764792439A15FF66C081D2DD3462B43B5FABC692748)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/ze-_CMsNTNCbrmdZee0FQQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=96BE4CE69E930671DBFF7954AC929648C8B54F1FFF834298E3E6863E23ECE914)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/jCJQFyUOQeOPrZLupk-5rg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D5680E92E8339E4684EEC6456AB80725A47D974AB694ACDCB0B1CF4267AE004A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/vV2Ks14FQo6wOrKCF0yS0A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=43C80413100177CF8E240CA6F5C2EFD3B013D1188034629282889CBD6F04B0CA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/YFpuPu4HQxuBUQjc0vyjyg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9C69FF5BC8F1D5612AD490C126BA2C8FCB9388ED5093826A7970C4731815C546)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/EZ_NMJdJSxCurupzNE3uYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=140C143FC6F0F7215680D8164D3D5E79D284C19575EFED1EF5263EF2A3FA7A06)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/ReaWllyUS7SGlR4pxl87Zg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0CE8CFB4F7BF77AB7AC2F500A80F21A8E6E7BF510366F296C2AD9EAE1562DA90)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/aoxApXLJT02dhhbLLZ8XIA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0831AE538C9222A4ED8229F4EF84B162C4B713E3560C4C3206D3DAAA8814B184)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/fc7mWmUGS3yc5Is3sd_0IA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3C8ABDF4E2AF6D7EF8D1101BA5FA995DDE11E14885367DFD2C7D32D4001F9592)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/Hf-MHvF5Tnu727HNhSYBVQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=5042AA8BC4F4C40A7F860BED9121B099D1F19C0D6C99491FCE1069F4996D15FB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/YKk0IFc5Qs-3wUSyxTAhEg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=E6892286A7149FF0FB685E99C9D2A8A0C683C23B34B9FEC89BB5E0C9FFD82280)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/ufI40VXPR-uM7kFhOK2_YQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BF0121F7873470B5711ACCD15768A2B7D266E34AD2B0E1B699640246AFF4EC47)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/Gwm-fHLuSQa-FCae8lG10w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=72DEFA3753EB85DB6868776C373B08EF7424CF32E2879E198B4772011847B4AD)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstanceVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/mF5heXGhTN2Bf7ekljrhQA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A136F7E30AA9A068BE17BA082230433CCBD16A01CC7D16A7C6FE70D94ECF7966)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/R4UaK3NlTrytEIAIhGYtpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F568BC6A8D1E2DE0451BC14F6A3C425F612E188689AD81367E7F2CB47798E56B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/DDOshcsuRNiYKvrxNCp2Og/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0207685765BF6D402C9D7B3C921F40E994C4B652FCE4515BE1E080CD9CCCEFD4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/9dQdPnDbRICF7au2zo-I9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=AC691386A58109609ECD0E2DA3923065347F507EF772AE4E8232BA8ABB49D312)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/tq2-YvYCSkG-PyI1V_RrnA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=5F429706A3F9A462BF5C1D79199C5100D126237A5AFE29D6FD9215A6FB5CAB6A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/EJxluv70QAWqWbTY_Zu7DA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4800A6555E7ED6247C6D04AD6C7DAA280819E0CC4D20F135E6409E4284CF8561)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/3vGj7MkaQxSsVNYFfvs12Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9A9FDDFD2BC7AB50D004EF32155535CBBC721909BA774001976CA89CE826E40D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/jR2c0LMHRbGAY_R-jGPJuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=04EBB65FDB3506D47F3BE15E76369625F3395929A45F8A0CAC74D3A80A5865DE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/AL82ugs8RgyE98vFfl0Qyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9AD0F54104FE328E458B161555AD6ED2EC31907FD8A11C6B4719AB3E1778F540)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/xXwv8xd3RnmBHhVvExFyGA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CE9EC0D2B27ACC911E931E7747CD6E098236D5F35A8F4CF298A5368896059624)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/LNmMewGUQrmAWLH1vK2Cpw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=FF203ABC8C3D682761163FADBDF40182E3A53B3CCE346AAE7C0A3F45588C6E88)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/JqJYn3_6S8e6SR1FK8OybQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=2B4BE3A37E2B806E1EA08D48D22327D53CD0D09DFF7978CFA913A9D708959967)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/30EP8rU3SHSkKPJoQGommQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=426598BD07262F7D0681B559044A7F0B64B8CBC151B2FDEBFC37142C9C00AB8B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/prF_Ls2lRIef6V710Wfdfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=19D9AE3B2899720B0B3C356C50CFA8096B8C2FA9774A15AD587FC04307FF27F8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/ZJS24YK6TAi-dYXEhf4vmQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B714F6D62087E3BBADC9B357BA23299D5BAA819153934607CF7FF6C5046B995E)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop sealedSubtypes
    
    
    public prop sealedSubtypes: Collection<TypeInfo>

功能：如果该 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) 所对应的 interface 类型拥有 sealed 语义，则获取该 interface 类型所在包内的所有子类型的类型信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/9waWScJXSia-lgedFWa7Ww/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=2D43BDAD61960EE9EB8609BCC812332DD1E6C4D3E97BB465C7CB1D16F8DFE14D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/QXXMOmMJTXeSprlOQ8ixkg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=7D69DD4EE3988B2F09EEADDA4039F10D8B23356C8B3022A6D0CE4058C1179468)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/muAMdceVRgyc0V41Jbeykg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B03A9C0B79583EC9E301EE429D765ACCD42A0EDD0C6935C70A043093BF0E39E3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/0_So7Wp6Qpu2cRdsY3zetw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EBC6F7EAF2BB78BC16F2FC4DD6D7665214588F5B7045F8712FAA99F1B67C9B49)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/yyPYsXs8Qw-43snX0f0J3Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C5F8D44DD61FCBC7FB4BE7DF0C520AC9CDFC42F4D27A236E5980BE7D64C215BA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/3MxkBaVdQh6_OoVaSv8hIA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=298680B637FF50EB474531E6090FF7157F32F179BC5EF3185ED9BD2D47880F43)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<PackageInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop functions
    
    
    public prop functions: Collection<GlobalFunctionInfo>

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中所有 public 全局函数的信息所组成的列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/YmK-HH9aT1e9mKnAXfoc2g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=871668D75EE297B019AF5252DF6B37380B049DCC47A624A4E467FB838A5C175C)

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
    
        // 获取包中的全��函数信息
        let functions = packageInfo.functions
        println("全局函数数量: ${functions.size}")
    
        return
    }

运行结果：
    
    
    全局函数数量: 2

#### [h2]prop name
    
    
    public prop name: String

功能：获取该包信息所对应的包的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4/v3/sVuRok8uQwmGfqZPiZCBwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=90BE6194D95163FEE6E5354755DD2867C24E4173400ADEAF2850CA031940D015)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/A_ypJhHaQCeX6yCXtyy-Ow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4A84179B12F49595C0BF04285512C7390965C4DE00B7A6D39871BD4ED4F57BF9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/8CKKosoBT-6hsp0wep1Eyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=267B4B4AC64A875D8265825183319617F1F55886BFA4C7FAEDAB011BDFCF239D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/D4POsiJdRAuz5Ae8EG_35A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9FABAE874D55B71E50BBE4A05AF79103A98D19DF4531D9D0F6874C37472E9662)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/piyTFw12Sw-HK_HShJOo_Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C3E883AF5977F3C1A8CA1AB2F65BA0DF2F48A471AA907D5B264FAD04F56B6225)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/UihXRUXWQWawM1qat7qOzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=62A5A98379BDE379859E5F93CEF306AB34B2E57B8D9A70F889F48D3EBB8E1C12)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/F9sxW-ACS1uwlFk3tbszmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=79EC8ADE9CAE5FC2854A131FD2B5EDA6D38EF5E624CD3E03B09915753F84FBD9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/UL1rYhvaRCyE6_sOKHd7MQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0C5132DFA4DD2C14B2B48E75771230222EE9E6A54ECBC512C81770BE36D1CD7B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/zidXMQivSv24iIDtZONU_Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CA5D9A8262E2911F26F7E08ADA8F15AC896030EDCE170C440029F301D78FD883)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/Kng0znpEQImztntHK1WZ4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D4533607B7F3DA6595E7028B87CCB5296B59CE94BA858D5DB3003013C8583B75)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/snaUDVLpQ6e3sBaCB0Fy4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CA558A8989785E152FFACEA00E65536FEB6AEFF0D0631A41154BEDC1AB8FA303)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/O052scVESqO2rQDl6K3-aA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=E574E5B48B3CAEBD61CE292A5E59FF6E5A2B0380E3CECBAB0F43D66A38FF98B5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/kcfzddAUQ8um8sm1IAcjGw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3EE18A0EB330C72FDBA291453CACCDE1756625DF9DA51CCB8A0F75C579F178D1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/b30C1JYJTWyWcKsqrz0TYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C481C07FA6A4990A9713B445FDEA78589406F5895985E7D0096F269500E2465F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/VPJ61AqPQ_Ol-F9Zay0yfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B9FE5DAC0424672260B18E2BC987784F34D7D4747F2BFAC31CAD0F2F47C195CA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/CT_LtuivQ_GQhfLPNanjTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8EF71D481A424E3BB325E3F3B7D4CA58266AFE025D7511F594D50D2008453140)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/VpM2mNMBSVO7zvyi0sZCBA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=50477ED69894F1C39843544E32CA3425FBF485124660B73244680550506B7C85)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/GilZ31lyQcu6DSEbbW7N4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=65A00EFEFA6657A60AB26495FCF1679625AF52FB0F3129AE243BDC0DC311605E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/7n8iLIpjTsmyyUuKQ4m1GQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DC3D985ADCF79CA8741AB4051507EE9C138E0D236D72F2362DDC1E72495F6E0C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/OfvLIi4URbebqo6BgXsHUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1C699F1C422117B11F4F9075099582E483C8C006FD3172DB8D21CC480AA2AC88)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/oAQAiSoHSASKJE7-hmx0SQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F56C2D233357EBC2B388EB1F295F88C233B035C6A8C14DE1E690D22247461C8D)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ParameterInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) 对应的函数形参的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/MDFJkthrSQq3Ee-UtfTCWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=156DFE295F8E6DB24D2F8CCCBF5A0CBDAED322D9234DE89F322EB6A9B3974923)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/G4px5D0dTGOUaS5H3-dqOQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=24933D82A5F1B53E3AF41B7D94D6C2A83A62F44E0A85895B714E57F633F6535D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/lvNAqqZxR8WZhYpL0npBag/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=98A5E9B76353A4E9AE25DF6526D78E488EEB5AC928178541C7DC488319326171)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/V-F2FSgvQD-tXR-m02CK9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F37378697D4E1C7B82E9359D609ACD2408C6FBCC2DF456BC04A0C79FA28211FA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/bwvd-zNoRNe10ZRH2M2Qkw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D93810ED220B1DEB3F2BD81B2C1812331366AE6E49F08B43E3BE47F2F4FF3EA6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/7suWH8PKTNyASbhEzgHFCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8004985F50A39E28FE7B1EADF6ED2A1A119E4AFAE079F00371DE041528B3AFDD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/Lr-BxH-ORiSsmtSW98z67A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=27A3EA05F0248281A3B864068329EA11CFEACE8BF8212295413E97D0DB9FA9D4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/MrDpTDztRnCLU-j45rZe9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=2502D3BE94E0805316D4C6BA682AC2E03618600A5E2CC61838F7270E522158AE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/G45oNIrCScqwC_sNZFyzmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F2500EF980A1A6605A2DB105A33307A433C7841CEA2CBD270079E53167B377C8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/JE_uWvl4TmyGvDn5Buom8w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=466B5205F36014072298F0666ACB01049D2CC47DB89893824F01F6141518B77C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/hmfrKi_tRdKit1a2b5PpcA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EA091877EEDED8FAE7ECE7333C9CAC5612FFDECB11D9C65FF36CBB17C5D08D6C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/r6u2Ajd_RPuCRbV2A_YKwg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C2DBB5BB8F891BFD4B991978032A88B54857416153850C386A7BA51DD78FCE1A)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]static func get(String)
    
    
    public static redef func get(qualifiedName: String): PrimitiveTypeInfo

功能：获取给定的类型的限定名称所对应类型的 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/EU9_FQtYSqOE8hrOeryZtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=7ECF2B817066293BBEB0FE9F944A1ABF838C695248466CACB3564B90EDD9F525)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/QGZC4456SvaiHNB8qW3oFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=7CA58928077F5318DBA5837043DD234AC949576804C9E7D88CF09F0D998EDA2B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/kMR2VeC8Tby-JiD8Uid5Yw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B1DDEDF6EB118CE49F5E7CBADBA7001922EB4FEE4CA95BE9C134D51A1110951B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/xo8YyObMSLmau7NnTTNe6A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EDD03187E5888BC265C33D9F1C3AE8C35C3978F0873FCB39336A7ABCF0BA7754)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/09kL6lDnTwm-jHm1MPYfmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=897E32DA224A536503EB6E5B4063FFBCAB9CF8301DBD1E7719536ABB788EF32B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/HF0sZ72XRieAeLd1EPc-fQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0B1AC2AA5773FC258557F103C358E7D6490351808A672EAC1555ADFE19826428)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/zG79EBV-SpamI2JPYSpLOA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=61697173DCED6D9AB1C4DF3E3B157E3D026AC34704B3C15A8D00CD4A21A2EA77)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/ylR5M0_4QT6MuA67SyPSQA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=2E0E8B7F5AB2475E7FDF592274AE37C3ACE52E5E7688570B9F0A113635C8A703)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/1bXWbwsFSLydQSRR5BQloQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=0B92F689E69A2CD655B1D194D9635F71C1ECEAA6CDEFAD30E708C39C020A7711)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/R-LYKtiITUG4EpgaR5sf3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=345A02ECD03D8F9FC56051B441B544E29E6D98682D84937DFC62E3E192D0AFEE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/xOK_ow_DRoesXilECK9hgQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DEF74534A889BD67E9132EB61F5E77CCD84E2887C7B5F2306E2B3C04E75243C8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/WthNXar0Q76Ii64XSILbDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=293A5B96BA7A0C1014F26108CC8461EBB4D5BF236E18F843DFCD0804E9232BF7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/6Um-KKvkTPuiv5ypXmv2RQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=528B7DF82F3757792CFBB3B4ABF5173C7CA65DE1729C0DBD0A0D69A8CC92F8E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/dZUu-lWdTJS_l-C78xdLuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=89A445D065BC21D6E2F3E0456A3DC2907B6DC29AE5C19F71045E74319079A642)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/rEGJCzaHSyaNGUwpkhrDuA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=20790099A2DB85EDBF36F6D71FF4F06A2A73D081E90CC3B79979167E2AC3F473)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/_CpZ9nUETMeaRZoPwb4HaQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D56D4FA0C2F67CE9544C8678A21631A3FC861E339CC39D8409798C37AFEF1829)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/zesYT3UVQlmFkmtYOZTFUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=974DFF02117A500B4C59530615E3CAA377C5469E2EDF57649911414618A08FC4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/PCZrp0cCR-mmJXbKMFLSAg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=73F13CA9D314C425B0F859E76BE765C00FC5E2C453F41863CF6FD85227970DB3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bf/v3/-RfOwePvQ723XCYNO1OO-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6ABBF2E631D157F599073AF0CDA6F3599E6887827C14F475D94003944D2DF835)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/ewhVOWYlTFWEmOdJuzYLeg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=046814FAAD78AF8854270728D2D151A113007F9674960ABA85472A3305E811DE)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticPropertyInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 所对应的静态成员属性的注解所组成的集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/y4qTG0s-T9eSOMaNT0u2SA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4CC78C881E47B7A765526F034C8EB44DB0F02AB74438F0D5F979022C64199D4B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/zzM42kykSpuGp9HpD2BiFw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6A9BC507898370079F935037FE2C864FB61FD08EAF5676C9F6FE909CAC7CDCA4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/jMIIsjgdTBK3SaSbHYciyQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EBAA56688F0E951EBAB16A68380133FA0D91E04B2A3EE598CB03CDEEFD625B9E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/7gmhqvaXRae6BE3rxRUYfw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A8C1D42FC2DF2EE4A507DAB0388E28B8A450CBF72A921A45E93574EC2DD5CD8F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/mitNAJXJR6K3aOVtbGz6PA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A4E8B5E43B7A97C05F51C7A5B4BF495C688D0D551C2EC0FBFE94C7CFA77D2B4B)

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

运行���果：
    
    
    MyAnnotation注解数量: 1

#### [h2]func findAnnotation<T>() where T <: Annotation
    
    
    public func findAnnotation<T>(): ?T where T <: Annotation

功能：尝试获取指定注解名称的自定义注解（通过泛型筛选）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/WA0Gi5veRBq3ywO-9_1qCw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BBB58AE44571B6A4C8673461805A2686D1BF7373C5095E579A970A9A6308C243)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/4ZpjBXtwRy6CxKHcDF7MBg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=E8639DFEF62BE60BCD5A41E04EC7EDFCC63FF0F29D99BDC3878523EC328D3FFC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/7ksvKEBTSsKxFzfTZfUjaw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BA4D53A7ADCB4E9275BB323E918FAF0CEA716404BD3DE86EDE408CEFACF864B4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/163CqeovTl2qYW1mluwI0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=92D2CE1CFB90B223408A792BEF2141E38C748255FC0C27E53876A97F77B6D993)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/wz-r4qt_TZqnkgq3Bdhh3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6B46D674C283462EBAAD309E74F0AB2C66D732B7922ED124CD2561C0B8E67994)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员属性信息所对应的静态成员属性可被修改则返回 true ，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/yCsDRxU-SJCrWGlJkQaD4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EFD2C8A5C53F19F5E751F26F93CC3EFE9D325CD5AC655DD20685C240E3BC3FC5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/F0ndH7KeRZ-GknAejguQXw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EE4E0A5F9356654C37A6DEA669B35151157EADA721131BE8442B98B7291D5BB1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/eLyCr4GbTBWHiX-rTxesFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=99170BE1F76ED03BB8D71BFE9D217429241C232DF2AEAB99CBE6740142000906)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/bVRLG-0DTEKYn9ZWjr3mqw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=FEEFE4375D8444E6C518AADDDB5E26B920165D656FAD7B31A88D3B6D20B040C0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/ofBurMGhS96UzVJapWingg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A9309A8966F941CD7570CCB62DF12D39A4D4193A16D25B0F1D74B897153632CA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/4DOts6T_QlqU5uOdSyHJJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B810FF42A3C65DD09B33B71FBE24BB8DBE1BB5D55A6CC1317EF12805ABD47DFB)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/9sD4_3uvRnCIONLjfBK9Pw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C4A63174DD1082E812BBEBB7937F4403022EE1966636C6BBBB66FE786E4FD387)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/06/v3/77yYvRVkQUaWX0jy0ECWFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=A34D058A5E761F62355A95482D198356E3B8D60561040E686EA83BFE0DA416B5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/2aPSvKucR4quPKfFgzTnSw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DBDA976CF5DCE0E9BED133EF26E8E097E76315F4FB244F27A428E45F9B918A71)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/TwE2uRYkQDCrbN03UzZBvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6DD60CDDF50067004E25D9A6A62E8487E843692FB50F2855DD6596B59B772206)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/P5ez6BYtTrSV1dBqpMM8qg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=5343BFAFEA5F3FFFED13C84B7F26A296421D16F5298CD036A3CB10872B230064)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/P7sMRNbiQkS8lmI4gDLFcQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1C722D329694244E96776AADFD717A3ED5E2F5CD9067968EF8128029D86D94A4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/fzvwhmvoT6qxsJcg4-FJpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=E3BBCB153EA7CB33626C78C47D9B7072AC5EA9814F79933962CD577563EF3B59)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/Ffd3hfBoSEuxlBiUp4OgUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=B2BA43C53970BDC9851C0E68E999DA06F62A32D2AFC7CF4C5EB23E8DD58DF5D9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/wvh8dPRfRzCH0R1GE2nP1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D9A2621B1492C9A0B1CEDB1A2AB1BEA9A29BFC864B3E78D6F1A23B353F7937D4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/ps39kpJGSFSbT89lSQ7kjw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=15B2D9C151E461643709B5858F50438B0AC153257A0754E78617D5CDD9B0F8C9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/BZh_JeAJQ9yUiRChypDXiQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F116AE490ECEC68DAA194E4E9FDACD63705046E38B47EBEB76E9314CD623605C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/9AykgWF2RPadPhSPriSwdw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C87BD4DD1BE05138605AE0431C53AA485DC950542CDC65DE5EAFC80FD8484EF2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/ZTv0ofhjS2Cp8LBEV3hQew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C3063612ACAE6BA38D8EA51ADD0A060D11FA3F2037E294D2975069592BD95FE2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/IbpwXzmQT42Gu67MNlPvHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CF43680A4F97E0586C9CE60654F9804E33CCE65BE1B48776EAF81F3D79033929)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/MKPA13EGQ-Gv6w92B2arJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3070772B3C326462280106FD51E49EF3AF3246632DAF9E78155FCFFFC384F60A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/QMH_aaMASfebwqsOLxrJBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6E7DC57B57160ACC8A4C324AD329CBB7BD5CD3D172DB7A5EF0BADE2DCB19B502)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/ua45BdeHRqC6SrwRKjekEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9EEF52E382D09966B017F041A54705029E9AAEA1B68724CB8B3D61BDD65CA4BC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/TKq_yay9R4GcictQ61mGyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=FAE88ED1B0E470039774527F87417EE0FCF00630337686CAF921DB94CF0535A1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/ydYc0FOeTfiAzJNiebYnSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=BBC20C4A25730B30A6B013744D49A42D9A82A683ECC29B720B39472EE2FCE07E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/jdkPnt_UQICitAhhgIxh2A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=E457DC37C94AB067128563B83951D7D76CE0973C9DF3415D24371A20F14EB6C5)

不支持平台：macOS、iOS。

运行时类型是指在程序运行时，通过动态绑定确定的类型，运行时类型与实例对象相绑定。在继承等场景下运行时类型和静态类型可能不一致。

参数：

  * a: [Any](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-any) \- 任意类型的实例。



返回值：

  * [StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo) \- 实例 a 的运行时类型所对应的类型信息。



异常：

  * [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) \- 如果无��获得实例 a 的运行时类型所对���的类型信息，则抛出异常。
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/nXUi4XopTlWAChm3rVicfA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D7737DC84A567DEEFF2DBC0BBC6AF93CBE509E3B911515D2CA38EBD653A2BB78)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/JTFo7P-FSK2ntGlWWtqpuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DD85340CC184A1060F0A6A9C2C15F6290A0889138D7A9E324E349AB29D7B7D1B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/nxVsi3kGTRiepBkBQN2jrg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=FA59F9D43575FAFF8708B28D9D6F7483BD7284AB6F7631444CC6D23A8C64A19F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/4g67zc3pRVaqnWFVDDMdgg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F5B634BB6AAC9A9E3E513891126B0E9D346EE514D216C1539A5CD3D905427EB2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/QL1P5VG-TeyKWiNDLdndYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DF54E4BE4AED2D6585CBC8E31BCAF4371EEC149B8724F2A3835E1D07CE31BA06)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/SHVtUL3ZRhqUy3Kr86e8bA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1D51A8A9E6575520D9A3A36509C28CCF9CFD41F19242D9D94D0B2F0A59B99290)

不支持平台：macOS、iOS。

[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 的子类包括 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)、[StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)、[ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 和 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)，分别对应基本数据类型，struct 数据类型，class 数据类型和 interface 数据类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/44gVvhsZQ2WGfUNztO_ZPg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F06809F914FC55ABAFC960E6145720C5122EDFC89032311DEA765081A48A1BEC)

类型的限定名称为(module_name/)?(default|package_name)(.package_name)*.(type_name)。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TypeInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/8Hd5iSLZSKKkB9d-i77UPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=4043C5434FB6AF2FDAC1F0F217E5D9572394A98CF2053CCC9B7108DD3C46DFBE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/JgBSKQigTFC9azjbG4RQyg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=CE9637A9CA038122AC0ED60D09DAAAAC4F5FCF96CED2455B7DBDE21161FCF863)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/60LrI6a6Tx6NwLbohgU7pQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=1E912334C876AF829317B3E73A9DE293D7E128113301DE625E2E7807360A3E70)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/eeY6yxZHTIa_gFte7Lq2tg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=6EA9B892544D26D319C0681D096D49F533EA28C1B94E9D01CC325249717A51A8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/Nb1MsgV8Qnqe80Umai62_Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8CE0EF9212EE93B694FA01608432DC54EFF9AB87B6E42098001BB4DD92E3D2E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/6J1OYuv7RhG9vIwdcKtUoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=518ECB6689318DBE7D1DEC7052A4733EE9A0A5221FF8A52873C417EA6E94FD87)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/NSPp-KGjRgutq68S6_4Ppg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=92EF18452C89984DC330B41F0326C8F44F79F90566CAED0DD13C5C4F99488485)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/Tnhs3D2UQs-hNbcd2m83XQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=94C57164203F9BAB2451518422CC1C0312DC477FF0D85CA01CB238F0EDFB7ACD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/EycYvVx6TLCzKSJoL5H22A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C6DA057D33897CEF0E07A70DFBC8EA4947B045FBA8393D05D74EA0DA62E12477)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/zkjmZNs0TtiWci6MrfsBoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=751B027A73DD8DE6FE1D96981EA9177E5C2344CCAE4EB1A6D706FDD3979FC177)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/ksBARw4pSZKQFXrEG2YMzw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=5AC6678CDDC900966B547AB8C5BC8A8BC44162591E8BA10874D450A9C81F593A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/XDHwoftaTYS1Us8EOQEliQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=42B2E3E36E9FB655B7C21C8CE9ACDF7DD922155E1D898F70A7A284415FC01D90)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/kBWWRS0tQxiQ8hhCptBX-g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DC35D24D618C8D251E3993626694CD802EEF7816AE0E27B94699C8BA8DCBDDC2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/Csq359u9Tl6WjirHi7jU9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=D79E3031BD80716FF095AC41A2FEFFE9BDEE16281E7F2B12025340A6D75123BA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/d45poIUaRp67a2etctfxUA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=931D00F2868EBEC42D470EDEAF9C1A4136ADA89FF4D8DD6DDBF0A692FA571223)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/Oz1N9gNqR1Wz18feB_5qdQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=8B488B02C1E4787F149157CCACE47C4112E8A1E32855D831671128F2346F4566)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/0o2RuCnER4SM4oowBT9hBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F2CDA96BE15D1FCFF3AE848CCF05C5A5A529C81F196F9E999B51DD547FCEF025)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/jviB755SSbSm7aWpRRih1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=EF6F23C020074A93F42F59CE729927589801711E663C36AE967E7A7D4E8316BA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/3hBxQij9SA2244UJe2Kaug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=024ADEE9DE6B9992637FFB1FC251A5272E0898BFF7716A6D0D9A709A4BF4407E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/ctm7IehHTouIYnlQHHdIzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=88BAAD8F589265EA74A89B5B1ACEF57F694E2DFDC9380FF9A255835ED498B64C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/GNyULvATS1WB0wu2msPOHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=5C9D0A34C063B4714BD7CE8F9C372438FFE8283F4E0093AC40069C851C77B40A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/K8Lb426hRGC4Kp9qcb05cA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=C8860DA7529E352132767029FC709E0448DD904A95FB2E605A9980209711BB23)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/FuriL9llQQOBoTL1oYfu3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=9DD2121F07D23B972317BB55DC923E108E429D55FCEEE9F6074E8B91E7F0AFCD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/sW1k98IHQDylShqddpE_dg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=80F4F1EF8DD3515BF6CDD5C9D4BFE7736A1F65B737739B805F74B2093056B0AD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/imGsSzv2RlCzqMficHbFeQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=F2B8BAD16E816BD5BD3C76B74B2E8015B93FB76D2525EA9DBDE5B7B7A963DBE6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/hjJzskYlSn-rYpL5P9YinA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=3CD6EF382B214770ED516B0945D52982FE1E6726E57FB0CE9156D2A81A441B77)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/gnXoSs0ITteQJjwxtJUo7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111105Z&HW-CC-Expire=86400&HW-CC-Sign=DF7BF8AADEE5D0E3F515C0A4287E18B71E57BD1895FA46A2836B4FF06280837F)

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
