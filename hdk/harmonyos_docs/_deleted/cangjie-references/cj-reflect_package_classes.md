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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/pR3P-fbSRPuAOL8jNpXqtw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3DFEA9F61715740E632D9D2355007D317855B7B2C672A13E6501FA6027D8B586)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop constructors
    
    
    public prop constructors: Collection<ConstructorInfo>

功能：获取该 [ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 对应的 class 的所有 public 构造函数信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/LVPE5zdgQkW3YPpadTlgZA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=67AA4BEBBBE639215EE869C49B1EC2C986F423D952D3CC34DE85CDB3930A2E36)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/qiZgrua_SN2PYD3n51WcYw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4528E843EB2255163277745B4FFE255899373FB40982C6ABAEFDCBD087566658)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/G0YCN8gUSa2McvNEzNaocA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4961AAE5545F00A464AC81A7F626DA956323D9D77CD6F47529A91855D0F92F9D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/VnXE-i-HRxGg_SWkWWGGOQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8F6FDFD0B19A811D8AF9ECD16EB9E9E2CE1F44AFE7B6D6D8D83F6ECEA288F94F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/o6kGHtZtTsWQWlYIXavrwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A3F888EEE72C63E571EE00ADFB20FDDE75F4BE7E8FBC8F5EAB5EB9B0D5C53E4C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/fvl0NnF3Q9umTkEbfSXpnA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AD051CDF6293F9F9BBC903525B832793BE893419FF6B6FC0964A1441074CB97C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/C1_fQnpWR-KrxHXQZPSQZA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0A17382522719B02EBBE8DDD65E32F7FAE099995BC79250E384C669C278EA0EB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/4U7FeTixSDmxoQq9foZItQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C9F50005864824BF7B22AA8F8C34414C851E446DD883EB99972E7E7F5B77792D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/GRbGHEdGSDCnd4T42p6MVA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=57513CBE894B6559CC5E43B3F875AF1BFDE1B9A4B51658E5E7BABA40437F0E55)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/gBjNGS4zTcSBAFGfmOZQog/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=424FB0FD8F8BA67267CE9031F404658ECA59D839F0DF2CB57C2697232F2ADD24)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/y7amMUnJS4yNL3kcA2kSUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=03125BBA21947208194F980BEE7682251298C76C6E407A021ED86AFC7788F693)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/Ip7nzWkERLqHuPYVurygpw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=509FA4B42A13B4C21AD6FFB70986753B050D1D7EBF42BF1222F3D3A90A09CEFB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/jNdlfDeBRRKEqsbgvknbtg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=EED4C749668CC489AAA1A1B75959850B80F62B4898757CFEBB9B082487485C51)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/ANq_b0chR2CRH1MMivfXHA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DE32439BFD3CC529C2AEC345D92F3E78997E707796E219B7F451A68E3D15B582)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/4slJFGhcRHyzyBJ7Yb01rw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=02A6B0E32A6B02D337E8237E354573A1CB01B623302D907328A8DD4CA0DA0B0A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/MOXtwyrzR1i8Wg5DOpb7Kw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6F71AA4E976EC27033B35898353AA2C440A3DF6C4CB9C71D3ACFB1BF4AE8D319)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/7uy4S0-PTGGtoRrcT754xQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1AD16EE875381EC138C76A78F2760BC8A75949CBE3CDADF2B1FC970EDB28EA8B)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ConstructorInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [ConstructorInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-constructorinfo) 对应的构造函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/o20uDdlYQumqt037el7FAQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0733B085C7F3F7FBF1CFD00654199B592DDE78D5B24BF3148A530D2C7C7778E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/lvHB-BgYQxSwjIOGTKpC3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F347868AE59C26F958C83A944B9783801F91842BA335BADC35006C09BDC04B01)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/c8oHyKtjQA2V_5I3u8Recg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F9AB4C3FE5545AE65426B3D8A84E152C16A5D12406CB24C35D7E4E47432885C6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/beybF5zyRIiu9NnFkDvGoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=811684A1F5E5308E96FEB483502814573B8D842E403D5FE4DFF9EC72C263B310)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/kySffbURSuCnwY-GyNRfxw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3374F30C01020B47AC606D4A4AA6B0E8A747BD36508F227CC7A7CC79C19E5405)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/8IBv4FpMS0meq0U2gzhKNw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1009C391478BDD9AD39A4710C66BEE17FFEE10B7BCC7EE558D984EF166446AD4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/i6_bYHhXQB-BYExyOXjnvQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2C2AAA44A335E9CAC0ED7782402028FD3BF516D3CEA0D385678CE5BCF53B350C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/PnXCc8KYTFu0wZIAeS12-w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4E2B09F5D4814C969F1D208E60B7E52B8CF20194EC7FE454FCFCAFB0AF515F05)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/XQcI4-H8RbCZP7ZRLB5TMw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=448F95A9CFF54C44F3F46B78B03526C679244203901A3F6F7E22E67AA5510F8E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/TP--69IFTZeJ23-W7KaRfA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=50E97D9867FA751CCF49A89CB290735FE65D24C118A36B3852F5E2EE25D202DD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/NObMCGYgSPW39ObZQrS0Cw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=407BEE74A3F0ED4DF38AB4E554C5696F371283C7B2913208F67CABCB3DD8D059)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop constructors
    
    
    public prop constructors: Collection<EnumConstructorInfo>

功能：获取该 EnumTypeInfo 对应的所有枚举构造器信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/G1mQJloUSI6cB1aueNET8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9CE3BF43372001A1313A6929D30E5EB1D077AB97F6DC359B2DFAD77BC21BAAD5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/Q6S8NsnPSpGNf6X0r9MViQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BE3736C78096DE197CE5CB90008E651D014F4F25F4B83FF7537CA6A8B47B982D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/aZNNc0aEQKy6B38pLa1tlA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=991F0DE75F54E9F63A94026A47BB648E7C4DEBCC057BDE5788EA90F951E020CC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/LBsZrqWWSC-PmbmdA3QWQw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3A288120A83FE81C20C3DE3B572F693C8AC44417427165851F61B80032740560)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/V6jP14APTriH19GcbaqU3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0E21713F13FA69BC188F8AFB881E1D4F86BD901CB44CF4BCEC067B9371BDAA5C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/k5_cnu6ASyW-2-jPbi4nxQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=84E7B1B67662110097D8B3DFFA6667EAD927B285A1AF49304B9AEE98C2455125)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/B7fwB-7kSrqzbLUSJ3oVUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E188AA28618512E805A506056F7C9C32CF2EBA34E937B6C729F56A4DC7E315B0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/BPVmTS2uQFOIyVNkcG3sAA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=53F9B6188DA752A3F73F7FCEFA2E561F12CEB15DB4852CD4B19199A8C8D041D1)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop parameters
    
    
    public prop parameters: ReadOnlyList<TypeInfo>

功能：获取该函数类型的参数类型列表，按声明顺序返回。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/IcN_nv9IRrmBv4UJF8QnwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CD296A20B7B720E84FA422854F346C34036411F8C020F5B6896964AD61579AA7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/HzIZvGRXRUWwO5st5BR_Hw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=557B827967ACB0EC2FD51268F6A862FC0C9CC0A4C0B409EB29AE70E05713B6C4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/BUSspyFoSBmW0piz2p3QBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=47E01B04BEE5280C0B88F6284322B95DBE4F8CC89628E0D0F2184D9D15BD2B4C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/ktHn1U1qS3yL8ggFCKeMtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=09654ABB777C5E79C60AD930F094AE46560B5F52ED973DDCBDA6BE511523A2DF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/INv2ts7IRgyUCvoI9wo0bQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A40884F4349BB5ECCB4D400E0E7A48D551D3E3D6F84CB778CC069035E318DD51)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7/v3/51x2qXyuSFy4N7leqzPsUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9814137D7692363D5A0FAF157431D03DB92021328DE58079E0C7771A8B74F1CD)

不支持平台：macOS、iOS。

父类型：

  * [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<[GenericTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-generictypeinfo)>



#### [h2]operator func ==(GenericTypeInfo)
    
    
    public operator func ==(other: GenericTypeInfo): Bool

功能：判断该泛型类型信息与给定的另一个泛型类型信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/vG90TfD4SHaiBEtqH1dsDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BCEE7A1DB0D3DEE8A83BDCB7A25701A506B0473330AA05A400E732168F1E88F3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/be2FyTu6TkauwfGdxuSzVQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DD1FC8F6ED3D3DD01C1838978C2BD8DCB03F2CD13A214357C8131D10B44A7616)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<GlobalFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有[GlobalFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalfunctioninfo) 对应的全局函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/14B1iCTZRHOqZ_NP4Tmf8Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=07674D969AC51C3B1EEBDCA8DBE39057C396034ABDD426B2262ADD0516B236BB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/L6UwwPDTTcqIzG7wQimBpw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=231690F701989830C282EA0BD59EFEE4D4EDA9671F1B69347FB38B94DABD6E95)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/kwOx50LLR6GR6u1AtZRAbQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4DD201A103B21E8D0B3D4C2AFCC0DF466699F13AEC6504934C1C4B24BC3E3CA6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/0KsEPoUYS1WQLqzs6WtHTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E4E72EBDCDCBBE52C460F2C8C2E6825EAAA66AED3B90B74A6977B962F2ACF571)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/geawHyqfSXi6C2FPhgvKzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6B1E1E56980C22454A4296BB9F3265C4980875A7EAC4383C7754EAE7700700B4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/7IAhEiJKQDmZX2rvdvBbXw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CF4FF63676F0F1BEE99F4EEF73C8CCCBAD50CF864899D247F26E24CB549D0E17)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/8rWdiZHkRHiNPJ2hgNsYCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AF04F727B448ACA362C91FF4D9FABD47A1091FD6D50181CD6391BB12E54575D0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/WgXTuKV8TTmdepqTckYmnQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=146CEB56F02EC0F371F819856F472C3D656D5A7D10B531A2CF425D626260199A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/kI9iGKkHQt6pFa61nUqCgQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5AEFD107491AF65F29CAB1096910DBBDFA99574E62172EF8495C98D9B367C6C8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/v_ljodB2RUG1h5z5syoMnQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CC55FB0C9CBBCB7FFCBC2A80069AACFB831FBC0B354B2101ED8546970352A9C7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/NA4DgCTIQ1GHtuPIQPbC8A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A7543C9E77B9987F399A5B9B2CBD82173206A778C9BB3E0C4AE225165140C571)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/Jrf87miHRC6aOo4CYismTw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=853D3F02AF86D584F2D8886E9B020E2738AEC6EFD1EEBAA91B2E3AD1FDF1A215)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/jV5LVsbsR-W_siDs6Z1_EA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1673814EAC6A2BC51EEB603B3711ED6642C77FCA647DCEC3C8CD0DBEF1E2E20A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/5XxtocTsS3WK4Kf2OErUEA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=365F1F04782798B0B285861127B39D0A6973D9828A329C36AF72FD163EF4E4D0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/9GU3BDEkRiubxmSCryWMyQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3F07DF00A28CB3A37B969FB0F434B3F4805A6D32AB995AC2C09733BB54D7072C)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<GlobalVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [GlobalVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-globalvariableinfo) 对应的全局变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/P4QdqP3lRM2NuAt5CUGgGQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=29BEB3FAAC4FAD34B05859689D172FAE1CBF3C6F6324EED9F4FB7F70879A841F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/HeSP4tKPR9msolv2S23lGw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BB6E56E621EE24D20B81FDB31900C59C7A220AA0EAF5E5F72B1B4A77A8CE411A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/43QmzFmQQnGAuvea2G12MA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=27A2B0913B7F65CE7F401A80D452CFB7D9B72A9123A77F8049073A704ADCB0B3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/qr87u0J9SvyLDnnsUwTNoQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5C47FBE2C8C617A9178D3881970FB29BDA95B5EBA0904A42284AF93A146B4303)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/dpbinMXXQ5Cjdcmd_1k31A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0E04A839AAD924F1C8A06EF78CC1B705C6EEA296B96663CD6F5B33C324F53A1C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/0lRUQuN6SYWQu-VmYy4q8A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FADB18A17F477DFD51E433763BAE989FEB541B3555CA79DC68E0C1B357943388)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/Mo2thPtZTJ-7mFt9Lvrq6Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=98CCF3D14111893EB1654D8F2A2116E9F397B6BAEB55AD4C0AD5FC7BE5475A18)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/035yolsHSMO3-uXtB9nDqA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F02EE6D9CEDAEBD4638453237D242A285E685B0F65DD4177730B15FFA2DD5773)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/DreVNv4nTuKhpfHqWs55Ew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8F812451D90B2D256885323F466FDB6D4B4D59A6B28D286D1596416A06DE9A66)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/hp7poLVJQX-hRcqWIRtVFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9776AA3739E912EAFF17DFF413E6EDDCE94A79847D1D203FB0A7DF817EC0DFA5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/rzz5Gy6XTay26cRzxSdeag/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=075C8B5D558ACFBD110FC9B133672131FB94E1265547B3F94E0553CB6F8F4CCC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/P-aZS9cgR2qIKg-kFAZUxA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1DD774628738A2E093DC50ACC4D09E5BCE03E9DA84DDA61E3B3781E2246E6FBA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/2y-vDiK7SZmFHnpSG-FfpQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=46B5403462E8BE4A00FE64C7B32142EE6D567F26A42304A06BBD165967E10A27)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/RNZPq3RcTtOwFu1DBnaOMg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=66D135E3771734289B58AC76135622B88FF48C6DF876B1A571DA6B151771218A)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstanceFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstanceFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancefunctioninfo) 对应的实例成员函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/u8sDleTuSFmXc9xI0j_f6g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0F532E70D29B3C4072715205A455ADE07F2F5016D65E189DA84ADA1F425C0AE4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/xFGzYAdrTT6jHUOtndQ_uQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0153F200D3A99187FB559EE569286A6B363A9703EE30B0AD62269CBDAF0720C9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/0J2qFmxqSiOgHsvHBNz--w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=47F3CE82C91D91AF89378616CE1FB34387D33AB8425A14296CF7904B6E4C2095)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/HDg1iJsmTAmIVKvxV36K0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=85D3C725A99BEA0F2D89DD8F653D4CCC34A16B38BF58FDF9CC74233BDF72E8E6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/VVRY3y1FSY64_1U_56qSLw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7D2497B00D6F0585AE2D4AA06F8096D256B0C263F4B975208E03C76FE39DB3AF)

不支持平台：macOS、iOS。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/7KbiEEk0RGGLlWZOJOsN_Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=310337068B7EA1667E7C6C3BFB6270917E7CF27A396E2F60B3C38FE8251631E2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/Sxo0Y_8lQBCiq786R47Nwg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=85B79863D792B5ADDFE582325C7884F37BBEA5BC4BD1EA844D31CE5ABFA08E90)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/Asc5rmAhSzGm7yhSC4h3Dw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1B7EDE16E9B3ADF45E105293E04133F755B2742ADA3D5D68E317B0C8F99B951C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/OCYNjLMmRpmNdws4A8LL1w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C53742971223D602CFC0ED736EE0559D47CE132F0EC070D49308F28C99804957)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/NjSEi5OvTGmtzdwk5iyyqg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=63428245D15836E9F0C15076E39E60C51FDE90EFA3A4B53BE4FEA98A08C62A73)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/BFYlJm1CRYKvIa_9_QOjuA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DCD74D843DEEA15AA00EEEAFE5F4452EF6AD841F4EEABD2A973A2597B584F06F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/QjguCmruST-TU7gB03PsYw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B1B384389196F447BEB1AE5717D13B36FEBE07EBB713FC0FF896978AB9F6FBE5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/dtCGdFvARfGE8h2hN63CDA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0C95B4730AA8A42E97DF1CF74542C5DA5549204EF8B7861F49F456B80EC38E1D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/BDgbZ_78SBmd3ZyVTr6Qtw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7A6E7BB464C8D98AA9F0943C95559BC1364C24C79FB722CE6DB0D2D1BBF0FF18)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/ARXG5dhjRkukXZpD_UUiXg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AFB526D50C793745498A734592D35C196F045EF560B8B00C5E77CBB4E9AEE17A)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该实例成员函数拥有 open 语义则返回 true，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/Xpbg3J-IRPKW7nV6hTiLCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2F55EB414AE2FAE37904F2B793FF506A6EA3616899F75D8555EC24FDD54B1C1E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/DBbL3UJLTVG95lLKYeJHmw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0100594C9FD1501CDF8CD42D6D85B582FA10B12FB8F8FA700D88DB369AD55742)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/kb4Om1u7Q6GATq79MZ91Xw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=867975EED0063ACE3C2D824B36CC5EBECB2EE5FA4CB81F2F909CE6ACE2751F00)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/V8c-gsz1QXqwv3jm21kcsQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7DD1491911A7F2C70F21A729F1C3169C7330B91F8363ABC66CBFA2FCBEC0BC17)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/NmVy0NbNS5Cb6SL2X1CQ9w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D53DE80D2B99EB5B150220DB89E9E448C05D6F6751D6FF5F42C616087223BE62)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstancePropertyInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstancePropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancepropertyinfo) 对应的实例成员属性的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/t0rYZ9ZmSSq3CuePdLS-fA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F059EE20ABB0D99818AD8D45071705422C8183872462746425DD5829349F6472)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/CxlaVJuxTyGZPidqO9alEg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D96FEFF14F253549635380FDB61C7D6592BDB21F9A7A62C4C90C256B99588193)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/VMFuKvhrRc6tCNBFGUPxmA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0A87EB977B1FBBD58F9076D4F719CF350320C24FB44A378E25F24C231D875BBD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/pUm71NPISp2hyklYu8TU4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A176AC9B61F3390BCF73C41FC3E5F4B4F30729BCE0F72A86A6EB659871FCF039)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/E1GPtC-9TzybBaCmEZshSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=EDC036798137ED93DCEC3C8836472D1085FA331F82ADF3DB2CA79352E29B411A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/YcK7FErDSy2B2V4SVRsgbw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3FC2DA372D5610A14CBEF9DF85D3D8ACD6E703B1D40E514186863B5C013D0B04)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/5COUwmLeTMuLIZEClVziXQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B506973FA05852F73C1F89FC25838EFD38C328E075157CCCC4B634BB2F2A877D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/1Y7fSKBRTUeH6pNXxFJEog/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=067B9DB22C5CA7FBA729A94FD0941D8D480443793506C6291DC68CFEF4E49EA8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/33CMYKQ1TgSfGVr93FLm-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5F479229AB8FE5B47BBF23C587B5A9C2F3A99C22E30D877A2E5741F1A3C0D2F0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/G3egZWTrT7-TKQgnj0w-vQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D8299E8727CA001C6DD4D4BE659E21F9F6B820DCE7F89397D68E171B18A5C679)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/1tRpskk_SJqufmoEFES2TA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6FBE940ED11BA715B4D0AD01BB0E3ED3599E292A588262E0DC939B040C6B6613)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/N2AXN1zURWGm7vXihJlH6g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9DE55EF33C7C473887833E34539A94D8AD4502E15FAAE8334ECA2493FDE9E0A5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/XPBzb0lZSx-1c4VK2Uk2KA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BC0EF2C516B7D65D3D94AE384D11D4B7A1332FADC3006083E4464E5C5731F649)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/2fD721qqQsuLr6uNSpqa-g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2BE46C975455912E47F1F39FE2132898002A1CCF2375DFDB17AFFDA11E0F5F30)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/GTJ3tVkoTRy5jbLZW-ijNg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1B18A3737CCB25A5E92FD71A62FABE8FB098FC1008A1A35E9C8C927CA3CB1C73)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/R4czEl1eRJSs8uwr6QYxKQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=61256258A49E5E3C502F469451A5FF71C7313EE27C8C42D3042999F14A9EC85F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/o7sro3_5ShGFU4tXH_k3NQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B8A349934BD162366C91C175E2328200A62BB1C615A04716C3E1BF8DC5909BA4)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<InstanceVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [InstanceVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-instancevariableinfo) 对应的实例成员变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/fNX30_g2QfS71eRqMzH3AQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=79F1C3C54A4647A0CDC278F83F40F0F94FD782C6597D1DF0C07913387E674516)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/0BOir8m8SHi8tYvemhn_hA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D9BF9D695458B7775DA073555FC096FE9C0A9762AC08BD6D06D68221AF0711A5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/5rFTvrnUT-y6_dBuZGtK-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=940488397AFF236E466D5B083EF400BAC7E183DAB9F3918677FBCC07FFB79321)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/qdMIA466TmqpgPWE7P76DA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7D1CA41C5E952A5743B76E91D1B534307341799D1F6A4EBE20334A4AEBE6B05F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/q_nYZ6YBQBuLHSsbKi2Otw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=62C154A88EBE818C65A0AEB3F76AFF960DD432051E183603191DE1B6A59C9C83)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/k3YSxwhpS2-b8KGIYVIH4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8468786DC844DD8E9E8EEAFFC42C9349653BF90DB50B03D5CB436A00D22B04F1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/4bMrEgt9TgSpkdPhmqd82w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CA55DF0C8DFD13BBB25AD7199FFB2C3067D8D8716CF8C04628946C6C73792EC0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/tvWwtVylSdK9l5VlGshXQw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AEEE0C17DC03D4B0C6BB4DD75C07B042A43031408078A08EDC9EE74BBDABA1E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/0EUmVlWIRtK-8CX9Ho8MVQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=41200A095DD698B257C66B2B61A7DDA3E2AF53097DED8C62AF961E6703B6D5BB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/FdRrkFOZT2S0Pnbhg5WTnw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DAAEFF98E5347FD3AA588F08C5731EF23FBE06E99747BB874067BB5259B51D63)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/SF6NVTCoRZe28PnwCpMksA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0C8554D8CCD5F137D0108C70BBCF588B2704724F4C5785FF5283EBCE0539F911)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/ln3O6iKnRSOrf07WNyysFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FDAE978DC024B10FBC0E57C61F91A99C75D7022AB58DF7FA1019A01DAB4DE8C4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/GWckbvlRR4OOuphnnP2q7A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C40A2D99B1F8FDE8E6FD3D55E4DD88DD692A8B1BFB3C7381244316BFB760313F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/RDYDfWTDQ36zeZRI_0txWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E148D8115915F3975F5652A82A54030A289835B7BF252AFB39CA2150105D1ED1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/mtbv2Ub2Sl2ztLu821xmsQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9E8613D7EBB341BB1995E1DFBE0616B30AB0384F01EA4672F4EEA02D4A15AC20)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]prop sealedSubtypes
    
    
    public prop sealedSubtypes: Collection<TypeInfo>

功能：如果该 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo) 所对应的 interface 类型拥有 sealed 语义，则获取该 interface 类型所在包内的所有子类型的类型信息，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/2MAQQnF8Stu1-JsBuLCOSQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BA7F2763FD06491F4323389746B09C3E5151532855F3E9425112DA32D99E381B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/m5fsyBPjT0yQw-zpBz_jxA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=56724378CABEFAADEF89D53161B7045ADEE9A907363B5465D0E2CDA8ECCB73FE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/ZkiyBulWSkemzk0s9V5l_A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B81FCAB688BE59BFFC96DED575664C48BFF3D7A641B6BA464406880860A4EE24)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/I6XDQB8yRl6eBe9zV4qSlQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=985FEA6B4D73D9AA86AC641F75596CEA282AB171BD58FC9FFF204757074AA5A2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/nJ5RZkFVTgiu8b28X5TaBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E359AC7F8A65FA78F458833F6CB9C556BBE0FC581DEC755EFB6894D50E368B2F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/W_X7xrdBQJ2bGlFLd1kP2g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=07BE09972236C2F5F83D42D85A4C566687D684D511B39F210B549B88AAA051CB)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<PackageInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop functions
    
    
    public prop functions: Collection<GlobalFunctionInfo>

功能：获取该 [PackageInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-packageinfo) 对应的包中所有 public 全局函数的信息所组成的列表。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/SUFuiBh5SguDsrTmA2g-9g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9DC5FE753007E4BC936DA5353F597E7FB00B9A8425431DFE845C7EAEEC9B994A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/65u93ldRRcOhOj2qYDCDNA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BD53D78764386BB5CC12D813D45E09E470656BD691C0AD5D082130A83D81437F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/YO3jmxFYTWqS5w9kJKWueQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DB1EF9D1E57048D003D74AF0C7D5BE5F2AFC508328A33BD205C79B3518B19F32)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/bbFhrjf1ReCVPoIKcF9HsA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5C33B212424A7CDAAD95E192623FD08878DC9A59782606F7AAC9DB3F2B069BE8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/zXo5f81lSQWjk_dcdyZkyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6C104187C188A8DB25856B2CBEB738D152165051E7D53CBD126AC9DBC759D774)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/E7NK19E1Q8qUPfBiUGPfYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0AB05F66D814B47EF0C58CD4B53647B0E6EB91CA40E725F54AC42CADB5E110E0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/Yd_iW7hpQw2Xogp5hs3WKQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A8DDD2A25110B9A484F68605F083D54105DC7F97BA8923D66024F66851DA4419)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/zkV9v9zIQCGp7CuJEB6sqw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=79F7875231FEE5B17EADA6FE782CC233C54D5948C24143BC666BD7704C30E982)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/g-u7DhFKRJq10e1XPOuEIQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C486861EFDD84728EB2E35AF8738643BAEDB12A3C20D799B56ADDFEE850377B2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/xg26PT6cTBGZMJhtsxYEeA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7234CE180EA6EE3A8EB9566665A53FAF7D3DBD9BB84329DDB15493960972C03C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/vzniqfqmR5aOQTtOWuGg3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A33D9B1078E86325633BFFD29E8712E67C6B34BB20CCA275774AEFFA9BEC644A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/IQ2-1wLpQUi68n0TPNz7zQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A7CACEC40F43802278004AB3859F9F1829F865E8AA5A6D9B5F85FF26C4660736)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/pj702_GFSsq8Imca1D9kLA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=919CAF56B7FEFBF76C82B498B7BF8FC208CBC35DC1BCC09BE282FE38851D7C83)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/DiiaIG-oQC6EDfRzVw5Zkg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=42BC0B6CD54C5356F249EBBA4A0E77D85554DFB6572D0D79CF5AD4D66F6BFDC4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/9MXPhx7rSHmuX6F24LQNyg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=01BEAD2C9A375A706C903CE070CC114C604C265375546D6FCA5CDDD845B4475F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/sc_47TC8QM20YZpoo2wFCg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DF5C24B4D116D6108E1146371D3ECE19FD3FE095BEA83EBF9593E3D5625EB47E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/MWy_THmLQKaxWe62KeTYtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8FB91384AF5E4E6B1E75546C2F48377117BDC8CB46FF29EE4496CB97D113A2B7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/tmnZyv-FS2iD5GD02NqnTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=658BA9F142CBDB846A40E62DD97FD986E9D7C7116186C13F3E00E998A3F0D09F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/VvYZUTF6RS-aQmohj6QUUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=992A082A9E07D8DE9901AA89E1760A491E9AEE57F2B320E981E0D95972993AD1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/QJWus5QiR1G7vftyNYrywA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CB4CBF89A0D920EB4C0DD6E94FE32D8BA98392AFFEF4BAA037C3213081BFEFC7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/Q2-0nILeRTqqzBpw1ahfdA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FCAA8E3687C8A6FD3FFDB62359AE3A5CD890F77D784E0FC96B9D8043515A3224)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/2JD1r114Qq6a0cSlvIYLeA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CF5B54AFFC04427D2E5F0C0AF9CAA2109D80B4ACE5B0507047E78CA6F3D661BB)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ParameterInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [ParameterInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-parameterinfo) 对应的函数形参的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/HNZPaT4UQaS6lYbUrt5uEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8E2328D978DF1922715222C8E81BECC05EA3FDBCB2636055B2550BA9A4B06B31)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/6M0ILldaRFexUOr-WsVUAw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6FD6E921D79DBC100C69AC9A6A029775D4DAF90D6518ED5BF5BD8A51DBEFFDF0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/57Kf6w4GQwaT47slIuXFMQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4C8E28D5C5140DAE94E445170066A8D3806DAA11511E355EFCDE65667BC39135)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/_UYRbq7YRl2KduYcVojEuw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AE924CAC798CB9933A89B9AA757FEEEBB69B8B8B9262978D5BAA2DE1F3A80FEF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/iUU7jUe3RheD-5CmuPrAiw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BD2E93FA9339AD4ED596FAEF824FA2D6C73FED49AA8B16511D963F2E26420BEB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/ldjomuqnQ4yeAUSRRGDH3A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C3395C9E39101B508402459C38216C35BCA47ACB5C42D1C5CCB90964BB4356ED)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/COBArcK5RZuXxkSJwOx4FQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F77413715FF6669869C0ED671845755BF3EF8FE64A8EC4760C3D56DB87C16C05)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/WhBZQa3rTl-djAxuAbPVlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=361BF88FE424804F219DCF078F53C032D8F95695D6F3E7601034D054FB5A6A9B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/WS9_NdjPRjGdfaXUwMKSYg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=11BE0F6F97712B212D5E63FE8D390890C9D1851A9056391F46F4E9C0C6F6DC15)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/AaB8oLTrQpaSHWHTdCsY-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7270FD51ACA06DED042A188ED304156931E6509E57699C7295C4A5BC11DC2909)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/X_pb8ZBHTzeFdJygxtPRlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3FE29DECF2A5354C8D7EB155715B243C46A20FA95509F08BA64D6ACC8374F5A9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/QkUzk85yTfmxh4esXaZJPA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CF6D5791E5FF69AF77325EE2A77B4E071EC9A8F36BC5FC0B5D699482A4F6141D)

不支持平台：macOS、iOS。

父类型：

  * TypeInfo



#### [h2]static func get(String)
    
    
    public static redef func get(qualifiedName: String): PrimitiveTypeInfo

功能：获取给定的类型的限定名称所对应类型的 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/VHCzXAelQSeXwfOFq-tBGA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B63BA2FBEE7229734EE1F3E7853E4E141FA81F48C8A190F7D80C9BF1C3D89BD0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/pzjZ9cNbRa27m7fpdM_Uew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5B11EC6239D7959E57ABCB224A35C217CD0CA07AEBF30929B5C1FE9B47778E4A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/yn-KHNwXRJevxZtymrEofg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3C4732D5ACB38DECE2DD6C51E63F6D1571683CB53FD2E5A7D19B0584DA288317)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/wic7-782SZOAFZr2T-CPvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5A66AA3EED7979C63E0F829F14385828F70AA55723173F5F7FAEFAF459747E73)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticFunctionInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticFunctionInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticfunctioninfo) 对应的静态成员函数的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/mMWC4xcGR5CfpX_OlJKVvw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=75625072081733D3D82D8D9B907005437A42B0989A5D87FF83393999B7498A2A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/MipvLVW2Ssy0p2TG0c27pQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8F02632F3451C8CFD512573936A9D4EA9A511CE3F0FF36E1B20A4C10E8A3BD95)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/QqflyVi_SeOmeTkasigUvQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2CADA54B7C9B7FA136ADEE674EB4474C311F7094C0DBD5DF0B51AC623FCA6A8B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/lREfyNqlSYissvIj_CDw4A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=EABB8689BD93760C2A6A9405D5967A1C1734EC307986C83AC2ECE8B487E8A6AE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/XhxruS-KS0mvIOvMnB3_cw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A22E16409A79392468C86D3C35271F5E6E3D03D203D2F64F3B6ABB32AAB84A6D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/TM8gxt0wQ62AMa8TrK0fMQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F704675052A9D83DF8B3B8052EAC94AD050643CC14F538B52BCD16D734806796)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/dR4_GwzKSdeJMkaBLQmvdA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=810C7AFE9996C5D4EEEC828B6289A03274A5938153A5B4620E967ED803211500)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/BThkmADpTseujFlOYGj0bg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=57BB64E5D2C3881BF62FB87A60D6645A6314D950A3BEB245F39F9F3068296A20)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/SslKImfJRYGIoDnlBFIwcQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AF4676B8746196195FB35996DA9A44F0AC0B383453051FDEC1BFBB1788C986AC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/GnVjoTuqStmiUfaL56qSHQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D05F103E2FAA3BE26CC923CA55094A490374CC4CE2D750AE7F83E3C597865400)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/6pjIt6dETwmj2luLkqPjvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F0A3CB92132240936D563ADEF8C6639D7E95C9B087EFF2648C646095947402EB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/BLuHV849Tvmk9U2YltPqOA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=188D24B767B32A4B784538B2C34442E2DE2D51A592C48A246F8108EF1FB97FEA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/BSnfWIOETFaV24zMu544ug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0D17C48F77566515C070E36E1B0CB0E503201280750A7B58BD61D34C54CBFBC4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/I3xFI5ZBQ1abwvDPJtdMpg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3BFFC0E6B38CC7A37A2B046AA568CC3CF17E55E952FE1B08D1FCC7F7EE11F210)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/dIKm4_A9Q0GgKZwg-i-jrg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0E9004481AC2E5B2F54B53A5AEEF42EE3A0F49F4E23108C25D2D8F27316DB219)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/3bS7UIxmTNaWYcNW88xsxQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=362D7D4D9873074B5D13B4003AC013932367EEC301A8A11D3D7C566290CAE6B6)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticPropertyInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticPropertyInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticpropertyinfo) 所对应的静态成员属性的注解所组成的集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/fZR-LNr0RPedVGpjgs3lrw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FE3A41D9C324467256E790FD98125C00CB71883FF8D5B04F59DBA5B5E580E5A6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/6IKYy1EeS7-8lNKQ1xSbNQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3D82BBE9471721944B08CEEBA7922A76B52E1E366C3388279A73943A5154A996)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/dDdGmwEBQYSaHiR4Qcdtiw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A82B5429063C20AB3307EF9EEEE371750E780A28BB8CE73784ADC191074E22DE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/GUorrnvJTda0-jAO0F_28w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=95CA94182DB266FC91856E20698ECF460A1E730DECC93C33FF47929EC3AAE368)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/llP-XHqrTvis7a_IMmj1sQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=33FD286C2E99D599DD0A759C86D39C987E4DEBF34707BFEDCC54DF43166072CC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/_q-o68S7S_2plgnA-106pQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A2A78BD31841516C77E0A12B413BC2F069E834C4BD1AB04AD1A3FDA2BD853E72)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/M4Tiq5hNTlqCXahHJUkuAA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C523441119F6886F6BBE2D086820B6BCC5486CA98056419AA47CB17150B575B9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/LjyEKChLQ2GiUSZ24UHhSA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=ADD881ACB2B65D57A7D050F0E1A50BA891FF44973531E1B611C79B913B7DFD7F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/izWyon5LRQWckyH-qQ8ARw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D90ACE64ACDED948BE9FE7FCFDF4FE57A34FC8F2CCC2AD59969844ED3171C69D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/_J6f3KnkR5GqygDL35CzwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=31A6B77C4DCEE048F363A9A9E7836F5029B4014FBC871C655B9AAB3FC5C6F261)

不支持平台：macOS、iOS。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该静态成员属性信息所对应的静态成员属性可被修改则返回 true ，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/L5qllYWgTRuesKR8-6n0_g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=74D8800FB4008ED702452991E4CCBE399A3DE29EB7EB6858F99716EFA9E7BE9E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/eRhjXOtOTeaFRd1IBLf1Ow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1340F4EC39124C7AFE851DD9456351F189E4FE9557C8D7B45E93492E83B17AE3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/GM-sKjJtR3KPbzSkMXAZsA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A1FDDB0FE9485C10765C50EBAEC9CB0EE53A74648E82520373AAD75368E19E12)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/jJIMlzKXTY2HCSxEPlgo8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8B4213ED89B61057DCCD550C5537412914CAC8B39C9F38E5ACA08296A797095B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/G6hugWl3S9exfKlcNNuTsg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=665A53CE8E9315B8F6D514DF9AEB5E28B004F1AD89055A671ECC11635A559573)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/lZN2oPJKQXylDQbOwO9mmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=EF0198445E42BE254BC5754FB9420C8ED171B86D25B0F68B538067B9367EA518)

不支持平台：macOS、iOS。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<StaticVariableInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [StaticVariableInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-staticvariableinfo) 对应的静态成员变量的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/K6CNsbCFQkaizpL38kOlFA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AE040F263FCDD4D86EA8748D58436F5A885A423AEDD48A2747912662D3FCE7E1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/YDEI-W7ATciR5brSZb51PQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C915EFD49621EFDA09B157BF0C4E1B034751753E173F3787DCA9620E9F78C75D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/zLjplHDORsaey7JSxf-HDw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4DF39994FD8E06CFF0C35B4937C11CC7672A0A7B0A811E5ABD296D701F2C5B66)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/siNRDHF2Qfeq2XhqYIalUQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D19903AB88B88D04A2677DAE7845782B7A37E352ABFC6A4F1060D4EF1FFCE87B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/6CohS-58R5GLu0BI-8hzcg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1CCEA0CF3446263F90F06AACF00C171ED0021FD21526DCC93322F8CF5D5C336B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/BwGLfPh-TGCN3fyVWrxPAQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=1A8A53578C02FE70C1829B2AD48EC515A0C7A21EA12C2801ED0C909964252155)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/BKh2QRuZTz2JoY5cvS-u4w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5F33A539AF549ABF48A579174D687392547A15830CAE1973F06FAB5D2333558F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/D9PGQ1vDT5yA6ldO9RjMUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=ECFAAD5A54E9BC32D217322281AF357BB12D5BB9F8E80DF5145552B015340C98)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/t3WNuh9oT-W1_RtfADgVhg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6EE1E3957579273E2D88A41777D464143E6E342DCB4FF83832AF32FAE16FA94E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/Pev3PhcmT2W3pBqJpkpc6Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FDE680A678DA6CA549185EF90A4AC91DA920FE7301FA158E0990394C044DBB1D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/dML3ROypQkOfhDUzgDigHw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2DAB7CEFA46A0997C1637B05B9F5164FD814487EBEA57F4DB81ABF3908FEAA1A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/mQmAMfTyQ6SjxjU_FGMB8w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=0BC8D00398A88187EE5ACDFADC6D044C04082D798FA1583F422ABF5E57A2DC2E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/MyInn8RpQU-rshuXFNFXag/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=6F37422FAC56DDEC33899F11BDEAC165134A55BFD9D0D5F35FBD0F8D1A4C2C2E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/riAGg6s_SpuQDosu32ZSnw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=384A27D81ED182224EEEFFAEBFFF1BDA01D2FF13A49814EEC32BD32EDE7CF848)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/CCgwjjcKRi2XBDKHBzw22g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2ABC9274564F56209D20DF3B271174DCEA0CE43DDE778262DC06D8F6B50E914E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/9mYB1VGLRg27OgBSLW0k8Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D8E920435CF910E126B95F25E5999033EF2127A62B4BD965173E977629158051)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/SschwBkXSWeItXUURVa1nQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=195A4A5C68D611C6178877B1E75652AC211C4E05868FE8A1625F04ADB8F221E8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/UCjhS6BGSGOKIb5t_Nl4sA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CE2E88201430DDF92729BF1A4829E255F3A5CAB1A8B54F2A69EF110E2F517F11)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/yLcMsWFaQkeX25kKw4DfLA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=95A552ABAC72D444785BB1CB34E2C574677D73A26D3FE89D165D5FCFD4361AD6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/YWnx7bU5TcyLS9yQDsgOBA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8ADF3A90A6AADBAA2537A70E8B64BBA98118A6011CEB8EFCB9F00BE6296D9C2D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/FY6Hn9LLTnqWKiK0q4vFlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=566E985FACA0255E8FC4221EA6DA69B293655960DF3DB53E3F4E411FE026BCA2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/gryVZG7eTzeSMwVDTewRyg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=57DFE379A373A3A820A68D75E31CFDAF0C3897E3713E13D69772CEED0193083A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/CSGzovzpTneR9brQIXM65Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E246F3B54298D1A5C18F08425B93AFDB8ECC49E2228840242E7F92F8505A0CC8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/aV-fQeOgRW2TXF3DJccnZw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E8EF51FCD45E500080D05E28492812F478C6EB13131D12CEFFD366544601452C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/sjPjK2R2SUKZJ5ZRtvPC2g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A6844BC4D07D3C8376DA607D689C04C647EF3E5BBD1557EFCC6E0C54A67EC1DF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/XejFmZo8T66-RWi08yfzNA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=B399930CA1C6C00A01421F9CAC239704D9C75C1DFA0C5688D9431A66D207D676)

不支持平台：macOS、iOS。

[TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 的子类包括 [PrimitiveTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-primitivetypeinfo)、[StructTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-structtypeinfo)、[ClassTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-classtypeinfo) 和 [InterfaceTypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-interfacetypeinfo)，分别对应基本数据类型，struct 数据类型，class 数据类型和 interface 数据类型的类型信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/dL7ACXZJRNCuL52N_k-fog/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=72128484448E83F63344962C305582D2CA56C1DB674F474D85A51B9400E7ED2F)

类型的限定名称为(module_name/)?(default|package_name)(.package_name)*.(type_name)。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<TypeInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]prop annotations
    
    
    public prop annotations: Collection<Annotation>

功能：获取所有作用于该 [TypeInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_classes#class-typeinfo) 对应的类型的自定义注解，返回对应集合。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/yXyBQfpZTvOW2mjPRBoqhA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E0CC64D4F9AA432CB59CFF753DC0BB13B96330ED1E1A10CB79EBD5637117E00C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/M6pZFDFYT06tiU6lz4GGFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=83BC76D492FD34FDA4327696C8F0761A68E5A6385196D30D9C11D29788A63DC6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/l2t9xwOgTBaZkGED9z_wig/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=96E36D1AA2DB8D02C8EAE9D7889C92333C2F049CC63413A17B6BF6BB9D59C5A8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/fdhyrA7pRhm0KfCQDD_iDg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8A43E4F13BAB648D43A78B034ADF693C6D3C8772736B8746834E17B2746BF509)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/Llhq1hbxQouvlzokYt1TWw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A80E85FB3623020A75145D404F781DDAA356A4FC316E744370C5DFB35ED1D09E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/Hr7FQ-4HRYm44-MHd9QutA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3418C95FC07F48C84F7CE26292B61744BAF64E5E8E2A6585021361486BB37D2C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/Ps3HgZFJRtCfVF-FDtLBpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DE60B6340E489C8F9D4A3866FA20AF2EEA43FEAA90D48BDD9C0DE70B7E9E2C4A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/BFesqGzpSTuTwn8bTA4Dlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C8855EA32EDD3ADD9E5B78174CEB7EFA4BEEECE8BFBF82AC722BBD578E386157)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/wvCDvWscSpCvbpBH9EdX2g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=93400619112AEB24CC2FACDAADBBC4263FDC0587C6C1113F40C3DA9B86A6921B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/xpN-osjzRySwlhAhS_ZyqQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CC470B7C0BE8BF0C181219B84EB920E9AB3450E28EC90457AF2710A484013DB1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/xFKrUZlmSwKOXTG5KecnpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9D35F864DFD907EE2D2A386C228179D66795FDA58C1330E7FB486A5A6BF02D76)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/Vooecd7nSwqOoko_mHVLGQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=AE9278A0DE64374EACBB6058049AEB823920ABDA5BBA0E6227897D24EA311043)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/tK4MaYoxQ5CuPr09SaDq7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=A59AF0CC07CD993D3AA5E5E01C2A550059E5D6AEA4EE9BC36FCEAA022F21CF92)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/0oIHP0x0SDmH2nnvkYgURA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=D9E17834699832FCD47D6DAF9B087C0D5C14E78C34C54B3B15C521B512EB5B07)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/LK42QMkgQOKzpRWCTeaiRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=7E3178C2E164A140117551998382D9B5A9E8D7E80EE3F8287C78D81A38457DE7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/HbbwFeDORMuNsilkr2hFbw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=301887A24C000DECA97FDA79BC3E47DC29FCF185D613152534E5C9412AB40526)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/sIDadq5hQrmF2OZXwr3KnQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=3AE59DDD92DAB02315E608C3E982187C7F5584E6E0DD5692114875AA2EB3DC6C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/Jbo0jpXgSl6SWOscPbzwiw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=BE1DF59B7BC7F693B59B71B5361F14C9E822738BADE2815887DF3740F77CD7B0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/hb1xZHt4Tha6R18sA9Z_OQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E38128F4747DCCBD400393BF340DFAF3CE04CEEC44E36F3B619178AC9B45D940)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/D7RTAkJ4QVeljrlJ6b-Edw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=22DDBAEA321B00329AC45BC9955AF1239429509DEC4AD03BEE9308E19D80A4F2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/QLhoTZZkRtCczd4kXAbMyA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=9F1912A99DD1F05A1931202CC2E055583367923059092C8E8EC59570AA3C8CD7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/_S2Q36FAQi-g2OiEB-EyPg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E81F04B8897D9374740DE085F21FFF9CB8DFF2FF6E17BE077A6AEC0CA14374E4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/mCZcQDE4RTKtXBERLGmfVw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=E3AB5CE510E6277768B4F79EC6BA393EE1B962D6459A6B290B82AA546C13A899)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/GAuCCDVoSXWrzPSjWFPltg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=312B9BC88818C3DEB566F600D3002C64D0BDA2A537644E233A955AE92593EA6B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/AfQxNOJqRQ-IQVQx4sHR-w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=52DA33DAE69B9D3307BAEB49C4F859F88138643510252A08E6F84A2A210F2288)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/3511cyLXQueg4VeGMUqOYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=76B71D9A10CF195E82F055AD0F99789075DA78AAB5AD9421FB66E3566DC77D8A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/CLrbbrG4QZOZUOlyrBJ5jA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CB744FCC55A72E8AF8497A936320DB7DF5DAF0A13FF557363B840DE933898CE6)

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
