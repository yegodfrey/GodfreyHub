---
name: cangjie-references/cj-core_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.core / 枚举
---

# 枚举

#### enum AnnotationKind
    
    
    public enum AnnotationKind {
        | Type
        | Parameter
        | Init
        | MemberProperty
        | MemberFunction
        | MemberVariable
        | EnumConstructor
        | GlobalFunction
        | GlobalVariable
        | Extension
        | ...
    }

功能：表示自定义注解希望支持的位置。

#### [h2]EnumConstructor
    
    
    EnumConstructor

功能：枚举构造器声明。

#### [h2]Extension
    
    
    Extension

功能：扩展声明。

#### [h2]GlobalFunction
    
    
    GlobalFunction

功能：全局函数声明。

#### [h2]GlobalVariable
    
    
    GlobalVariable

功能：全局变量声明。

#### [h2]Init
    
    
    Init

功能：构造函数声明。

#### [h2]MemberFunction
    
    
    MemberFunction

功能：成员函数声明。

#### [h2]MemberProperty
    
    
    MemberProperty

功能：成员属性声明。

#### [h2]MemberVariable
    
    
    MemberVariable

功能：成员变量声明。

#### [h2]Parameter
    
    
    Parameter

功能：成员函数/构造函数中的参数（不包括枚举构造器的参数）。

#### [h2]Type
    
    
    Type

功能：类型声明（class、struct、enum、interface）。

#### enum Endian
    
    
    public enum Endian {
        | Big
        | Little
    }

功能：枚举类型 [Endian](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-endian) 表示运行平台的端序，分为大端序和小端序。

#### [h2]Big
    
    
    Big

功能：表示大端序。

#### [h2]Little
    
    
    Little

功能：表示小端序。

#### [h2]static prop Platform
    
    
    public static prop Platform: Endian

功能：获取所在运行平台的端序。

类型：[Endian](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-endian)

异常：

  * [UnsupportedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-unsupportedexception) \- 当所运行平台返回的端序无法识别时，抛出异常。



示例：
    
    
    main() {
        let e = Endian.Platform
        match (e) {
            case Big => println("BigEndian")
            case Little => println("LittleEndian")
        }
    }

运行结果：
    
    
    LittleEndian

#### enum Option<T>
    
    
    public enum Option<T> {
        | Some(T)
        | None
    }

功能：[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 是对 T 类型的封装，表示可能有值也可能无值。

它包含两个构造器：Some 和 None。其中，Some 会携带一个参数，表示有值；None 不带参数，表示无值。当需要表示某个类型可能有值，也可能没有值的时候，可选择使用 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型。

[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型的另一种写法是在类型名前加 ?，即对于任意类型 Type，?Type 等价于 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<Type>。

#### [h2]None
    
    
    None

功能：构造一个不带参数的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例，表示无值。

#### [h2]Some(T)
    
    
    Some(T)

功能：构造一个携带参数的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例，表示有值。

#### [h2]func filter((T)->Bool)
    
    
    public func filter(predicate: (T) -> Bool): Option<T>

功能：提供 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型的“过滤”功能。

参数：

  * predicate: (T) -> [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 过滤函数。



返回值：

  * Option<T> \- 如果 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 值是 Some(v)，并且 v 满足 predicate(v) = true 时，返回 Some(v)， 否则返回 None。



示例：
    
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(5)
    
        // 使用filter过滤大于3的值
        var filtered1 = someValue.filter({x => x > 3})
        println("过滤大于3的值: ${filtered1}")
    
        // 使用filter过滤小于3的值
        var filtered2 = someValue.filter({x => x < 3})
        println("过滤小于3的值: ${filtered2}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 对None值使用filter
        var filtered3 = noneValue.filter({x => x > 3})
        println("对None值过滤: ${filtered3}")
    }

运行结果：
    
    
    过滤大于3的值: Some(5)
    过滤小于3的值: None
    对None值过滤: None

#### [h2]func flatMap<R>((T) -> Option<R>)
    
    
    public func flatMap<R>(transform: (T) -> Option<R>): Option<R>

功能：提供从 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 类型到 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<R> 类型的映射函数，如果当前实例值是 Some，执行 transform 函数，并且返回结果，否则返回 None。

参数：

  * transform: (T) -> [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<R> \- 映射函数。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<R> \- 如果当前实例值是 Some，执行 transform 函数并返回，否则返回 None。



示例：
    
    
    // 定义一个函数，将Int64转换为Option<String>
    func intToStringOption(x: Int64): Option<String> {
        if (x > 0) {
            return Some("Positive: ${x}")
        } else {
            return None
        }
    }
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(5)
    
        // 使用flatMap将Int64转换为String
        var flatMapped1 = someValue.flatMap(intToStringOption)
        println("对Some值使用flatMap: ${flatMapped1}")
    
        // 创建一个负数的Some值
        var someNegativeValue: Option<Int64> = Some(-3)
    
        // 使用flatMap处理负数
        var flatMapped2 = someNegativeValue.flatMap(intToStringOption)
        println("对负数Some值使用flatMap: ${flatMapped2}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 对None值使用flatMap
        var flatMapped3 = noneValue.flatMap(intToStringOption)
        println("对None值使用flatMap: ${flatMapped3}")
    }

运行结果：
    
    
    对Some值使用flatMap: Some(Positive: 5)
    对负数Some值使用flatMap: None
    对None值使用flatMap: None

#### [h2]func getOrDefault(() -> T)
    
    
    public func getOrDefault(other: () -> T): T

功能：获得值或返回默认值。如果 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 值是 Some，则返回类型为 T 的实例，如果 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 值是 None，则调用入参，返回类型 T 的值。

参数：

  * other: () -> T - 默认函数，如果当前实例的值是 None，调用该函数得到类型为 T 的实例，并将其返回。



返回值：

  * T - 如果当前实例的值是 Some<T>，则返回当前实例携带的类型为 T 的实例，如果 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 值是 None，调用入参指定的函数，得到类型为 T 的实例，并将其返回。



示例：
    
    
    main() {
        var value1: Option<Int64> = Some(2)
        println(value1.getOrDefault({=> 0}))
    
        var value2: Option<Int64> = None
        println(value2.getOrDefault({=> 0}))
    }

运行结果：
    
    
    2
    0

#### [h2]func getOrThrow(() -> Exception)
    
    
    public func getOrThrow(exception: ()->Exception): T

功能：获得值或抛出指定异常。

参数：

  * exception: () ->[Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 异常函数，如果当前实例值是 None，将执行该函数并将其返回值作为异常抛出。



返回值：

  * T - 如果当前实例值是 Some<T>，返回类型为 T 的实例。



异常：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception) \- 如果当前实例是 None，抛出异常函数返回的异常。



示例：
    
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(42)
    
        // 对Some值使用getOrThrow，应该返回值
        var value1 = someValue.getOrThrow({=> Exception("Value is None")})
        println("从Some值获取的值: ${value1}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 对None值使用getOrThrow，应该抛出异常
        try {
            noneValue.getOrThrow({=> Exception("Value is None")})
            println("这行不会被执行")
        } catch (e: Exception) {
            println("捕获到异常: ${e.message}")
        }
    }

运行结果：
    
    
    从Some值获取的值: 42
    捕获到异常: Value is None

#### [h2]func getOrThrow()
    
    
    public func getOrThrow(): T

功能：获得值或抛出异常。

返回值：

  * T - 如果当前实例值是 Some<T>，返回类型为 T 的实例。



异常：

  * [NoneValueException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-nonevalueexception) \- 如果当前实例是 None，抛出异常。



示例：
    
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(42)
    
        // 对Some值使用getOrThrow，应该返回值
        var value1 = someValue.getOrThrow()
        println("从Some值获取的值: ${value1}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 对None值使用getOrThrow，应该抛出NoneValueException
        try {
            noneValue.getOrThrow()
            println("这行不会被执行")
        } catch (e: NoneValueException) {
            println("捕获到NoneValueException异常")
        }
    }

运行结果：
    
    
    从Some值获取的值: 42
    捕获到NoneValueException异常

#### [h2]func isNone()
    
    
    public func isNone(): Bool

功能：判断当前实例值是否为 None。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果当前实例值是 None，则返回 true，否则返回 false。



示例：
    
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(42)
    
        // 检查是否为None
        println("Some(42) is None: ${someValue.isNone()}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 检查是否为None
        println("None is None: ${noneValue.isNone()}")
    }

运行结果：
    
    
    Some(42) is None: false
    None is None: true

#### [h2]func isSome()
    
    
    public func isSome(): Bool

功能：判断当前实例值是否为 Some。

返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果当前实例值是 Some，则返回 true，否则返回 false。



示例：
    
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(42)
    
        // 检查是否为Some
        println("Some(42) is Some: ${someValue.isSome()}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 检查是否为Some
        println("None is Some: ${noneValue.isSome()}")
    }

运行结果：
    
    
    Some(42) is Some: true
    None is Some: false

#### [h2]func map<R>((T)->R)
    
    
    public func map<R>(transform: (T)-> R): Option<R>

功能：提供从 Option<T> 类型到 Option<R> 类型的映射函数，如果当前实例值是 Some，执行 transform 函数，并且返回 Some 封装的结果，否则返回 None。

参数：

  * transform: (T)-> R - 映射函数。



返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<R> \- 如果当前实例值是 Some，执行 transform 函数，并且返回 Option<R> 类型的结果，否则返回 None。



示例：
    
    
    main() {
        // 创建一个Some值
        var someValue: Option<Int64> = Some(42)
    
        // 使用map将Int64转换为String
        var mapped1 = someValue.map({x => "Number: ${x}"})
        println("对Some值使用map: ${mapped1}")
    
        // 创建一个None值
        var noneValue: Option<Int64> = None
    
        // 对None值使用map
        var mapped2 = noneValue.map({x => "Number: ${x}"})
        println("对None值使用map: ${mapped2}")
    }

运行结果：
    
    
    对Some值使用map: Some(Number: 42)
    对None值使用map: None

#### [h2]extend<T> Option<Option<T>>
    
    
    extend<T> Option<Option<T>>

功能：为 Option<Option<T>> 类型扩展实现某些功能。

**func flatten()**
    
    
    public func flatten(): Option<T>

功能：将 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>> 类型展开，如果当前实例是 Some([Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>.Some(v)), 展开后的结果为 Some(v)。

返回值：

  * [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> \- [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>> 类型展开后的结果。



示例：
    
    
    main() {
        // 创建Option<Option<Int64>>类型的Some(Some(42))值
        var nestedSome: Option<Option<Int64>> = Some(Some(42))
    
        // 展开嵌套的Option
        var flattened1 = nestedSome.flatten()
        println("Some(Some(42))展开后: ${flattened1}")
    
        // 创建Option<Option<Int64>>类型的Some(None)值
        var someNone: Option<Option<Int64>> = Some(None)
    
        // 展开嵌套的Option
        var flattened2 = someNone.flatten()
        println("Some(None)展开后: ${flattened2}")
    
        // 创建Option<Option<Int64>>类型的None值
        var noneValue: Option<Option<Int64>> = None
    
        // 展开嵌套的Option
        var flattened3 = noneValue.flatten()
        println("None展开后: ${flattened3}")
    
        // 演示链式调用
        var chainedValue: Option<Option<Option<String>>> = Some(Some(Some("Hello")))
        var flattenedChained = chainedValue.flatten().flatten()
        println("链式展开Some(Some(Some(\"Hello\"))): ${flattenedChained}")
    }

运行结果：
    
    
    Some(Some(42))展开后: Some(42)
    Some(None)展开后: None
    None展开后: None
    链式展开Some(Some(Some("Hello"))): Some(Hello)

#### [h2]extend<T> Option<T> <: Equatable<Option<T>> where T <: Equatable<T>
    
    
    extend<T> Option<T> <: Equatable<Option<T>> where T <: Equatable<T>

功能：为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 枚举扩展 [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<[Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T>> 接口，支持判等操作。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<Option<T>>



**operator func !=(Option <T>)**
    
    
    public operator func !=(other: Option<T>): Bool

功能：判断当前实例与参数指向的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例是否不等。

参数：

  * other: [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> \- 待比较的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果不相等，则返回 true，否则返回 false。



示例：
    
    
    main() {
        // 创建相同的Some值
        var someValue1: Option<Int64> = Some(42)
        var someValue2: Option<Int64> = Some(42)
    
        // 比较两个相同的Some值
        println("Some(42) != Some(42): ${someValue1 != someValue2}")
    
        // 创建不同的Some值
        var someValue3: Option<Int64> = Some(42)
        var someValue4: Option<Int64> = Some(24)
    
        // 比较两个不同的Some值
        println("Some(42) != Some(24): ${someValue3 != someValue4}")
    
        // 创建一个Some值和一个None值
        var someValue5: Option<Int64> = Some(42)
        var noneValue1: Option<Int64> = None
    
        // 比较Some值和None值
        println("Some(42) != None: ${someValue5 != noneValue1}")
    
        // 创建两个None值
        var noneValue2: Option<Int64> = None
        var noneValue3: Option<Int64> = None
    
        // 比较两个None值
        println("None != None: ${noneValue2 != noneValue3}")
    }

运行结果：
    
    
    Some(42) != Some(42): false
    Some(42) != Some(24): true
    Some(42) != None: true
    None != None: false

**operator func ==(Option <T>)**
    
    
    public operator func ==(other: Option<T>): Bool

功能：判断当前实例与参数指向的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例是否相等。

如果两者同为 None，则相等；如果两者为 Some(v1) 和 Some(v2)，且 v1 和 v2 相等，则相等。

参数：

  * other: [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> \- 待比较的 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果相等，则返回 true，否则返回 false。



示例：
    
    
    main() {
        // 创建相同的Some值
        var someValue1: Option<Int64> = Some(42)
        var someValue2: Option<Int64> = Some(42)
    
        // 比较两个相同的Some值
        println("Some(42) == Some(42): ${someValue1 == someValue2}")
    
        // 创建不同的Some值
        var someValue3: Option<Int64> = Some(42)
        var someValue4: Option<Int64> = Some(24)
    
        // 比较两个不同的Some值
        println("Some(42) == Some(24): ${someValue3 == someValue4}")
    
        // 创建一个Some值和一个None值
        var someValue5: Option<Int64> = Some(42)
        var noneValue1: Option<Int64> = None
    
        // 比较Some值和None值
        println("Some(42) == None: ${someValue5 == noneValue1}")
    
        // 创建两个None值
        var noneValue2: Option<Int64> = None
        var noneValue3: Option<Int64> = None
    
        // 比较两个None值
        println("None == None: ${noneValue2 == noneValue3}")
    }

运行结果：
    
    
    Some(42) == Some(42): true
    Some(42) == Some(24): false
    Some(42) == None: false
    None == None: true

#### [h2]extend<T> Option<T> <: Hashable where T <: Hashable
    
    
    extend<T> Option<T> <: Hashable where T <: Hashable

功能：为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 类型扩展 [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable) 接口。

Some<T> 的哈希值等于 T 的值对应的哈希值，None 的哈希值等于 [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64)(0)。

父类型：

  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)



**func hashCode()**
    
    
    public func hashCode(): Int64

功能：获取哈希值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 哈希值。



示例：
    
    
    main() {
        // 创建Some值
        var someValue: Option<Int64> = Some(42)
    
        // 获取Some值的哈希码
        var someHashCode = someValue.hashCode()
        println("Some(42)的哈希码: ${someHashCode}")
    
        // 创建None值
        var noneValue: Option<Int64> = None
    
        // 获取None值的哈希码
        var noneHashCode = noneValue.hashCode()
        println("None的哈希码: ${noneHashCode}")
    
        // 比较两个相同的Some值的哈希码
        var someValue1: Option<Int64> = Some(42)
        var someValue2: Option<Int64> = Some(42)
    
        println("Some(42)和Some(42)的哈希码是否相等: ${someValue1.hashCode() == someValue2.hashCode()}")
    
        // 比较两个不同的Some值的哈希码
        var someValue3: Option<Int64> = Some(42)
        var someValue4: Option<Int64> = Some(24)
    
        println("Some(42)和Some(24)的哈希码是否相等: ${someValue3.hashCode() == someValue4.hashCode()}")
    }

运行结果：
    
    
    Some(42)的哈希码: 42
    None的哈希码: 0
    Some(42)和Some(42)的哈希码是否相等: true
    Some(42)和Some(24)的哈希码是否相等: false

#### [h2]extend<T> Option<T> <: ToString where T <: ToString
    
    
    extend<T> Option<T> <: ToString where T <: ToString

功能：为 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont)<T> 枚举实现 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 接口，支持转字符串操作。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



**func toString()**
    
    
    public func toString(): String

功能：将 [Option](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-optiont) 转换为可输出的字符串，字符串内容为 "Some(${T.toString()})" 或 "None"。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转化后的字符串。



示例：
    
    
    main() {
        // 创建Some值
        var someValue: Option<Int64> = Some(42)
    
        // 将Some值转换为字符串
        var someStr = someValue
        println("Some(42)转换为字符串: ${someStr}")
    
        // 创建None值
        var noneValue: Option<Int64> = None
    
        // 将None值转换为字符串
        var noneStr = noneValue
        println("None转换为字符串: ${noneStr}")
    
        // 创建字符串类型的Some值
        var someStringValue: Option<String> = Some("Hello")
    
        // 将字符串类型的Some值转换为字符串
        var someStringStr = someStringValue
        println("Some(\"Hello\")转换为字符串: ${someStringStr}")
    }

运行结果：
    
    
    Some(42)转换为字符串: Some(42)
    None转换为字符串: None
    Some("Hello")转换为字符串: Some(Hello)

#### enum Ordering
    
    
    public enum Ordering {
        | LT
        | GT
        | EQ
    }

功能：[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 表示比较大小的结果，它包含三种情况：小于，大于和等于。

#### [h2]EQ
    
    
    EQ

功能：构造一个 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实例，表示等于。

#### [h2]GT
    
    
    GT

功能：构造一个 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实例，表示大于。

#### [h2]LT
    
    
    LT

功能：构造一个 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实例，表示小于。

#### [h2]extend Ordering <: Comparable
    
    
    extend Ordering <: Comparable<Ordering>

功能：为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型其扩展 [Comparable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-comparablet)<[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering)> 接口，支持比较操作。

父类型：

  * [Comparable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-comparablet)<Ordering>



**func compare(Ordering)**
    
    
    public func compare(other: Ordering): Ordering

功能：判断当前 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实例与参数指定的 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实例的大小关系。

[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 枚举的大小关系为：GT > EQ > LT。

参数：

  * other: [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 待比较的 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 实例。



返回值：

  * [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) \- 如果大于，返回 GT；如果等于，返回 EQ；如果小于，返回 LT。



示例：
    
    
    main() {
        // 创建Ordering实例
        var gt: Ordering = GT
        var eq: Ordering = EQ
        var lt: Ordering = LT
    
        // 测试GT与EQ的比较
        var result1 = gt.compare(eq)
        println("GT.compare(EQ): ${result1}")
    
        // 测试EQ与LT的比较
        var result2 = eq.compare(lt)
        println("EQ.compare(LT): ${result2}")
    
        // 测试LT与GT的比较
        var result3 = lt.compare(gt)
        println("LT.compare(GT): ${result3}")
    
        // 测试相等的情况
        var result4 = gt.compare(gt)
        println("GT.compare(GT): ${result4}")
    }

运行结果：
    
    
    GT.compare(EQ): Ordering.GT
    EQ.compare(LT): Ordering.GT
    LT.compare(GT): Ordering.LT
    GT.compare(GT): Ordering.EQ

#### [h2]extend Ordering <: Hashable
    
    
    extend Ordering <: Hashable

功能：为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型其扩展 [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable) 接口，支持计算哈希值。

父类型：

  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)



**func hashCode()**
    
    
    public func hashCode(): Int64

功能：获取哈希值，GT 的哈希值是 3，EQ 的哈希值是 2，LT 的哈希值是 1。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 哈希值。



示例：
    
    
    main() {
        // 创建Ordering实例
        var gt: Ordering = GT
        var eq: Ordering = EQ
        var lt: Ordering = LT
    
        // 获取哈希值
        var gtHash = gt.hashCode()
        var eqHash = eq.hashCode()
        var ltHash = lt.hashCode()
    
        println("GT的哈希值: ${gtHash}")
        println("EQ的哈希值: ${eqHash}")
        println("LT的哈希值: ${ltHash}")
    }

运行结果：
    
    
    GT的哈希值: 3
    EQ的哈希值: 2
    LT的哈希值: 1

#### [h2]extend Ordering <: ToString
    
    
    extend Ordering <: ToString

功能：为 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 类型其扩展 [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring) 接口，支持转字符串操作。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



**func toString()**
    
    
    public func toString(): String

功能：将 [Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering) 转换为可输出的字符串。

转换结果如下：

  * GT: "[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).GT"。
  * LT: "[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).LT"。
  * EQ: "[Ordering](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-ordering).EQ"。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转化后的字符串。



示例：
    
    
    main() {
        // 创建Ordering实例
        var gt: Ordering = GT
        var eq: Ordering = EQ
        var lt: Ordering = LT
    
        // 转换为字符串
        var gtStr = gt.toString()
        var eqStr = eq.toString()
        var ltStr = lt.toString()
    
        println("GT转换为字符串: ${gtStr}")
        println("EQ转换为字符串: ${eqStr}")
        println("LT转换为字符串: ${ltStr}")
    }

运行结果：
    
    
    GT转换为字符串: Ordering.GT
    EQ转换为字符串: Ordering.EQ
    LT转换为字符串: Ordering.LT

#### enum ThreadState
    
    
    public enum ThreadState <: ToString {
        | Ready
        | Running
        | Pending
        | Terminated
        | ...
    }

功能：表示线程的状态。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]Pending
    
    
    Pending

功能：表示线程正被挂起。

#### [h2]Ready
    
    
    Ready

功能：表示线程刚创建或结束挂起，正在等待被调度执行。

#### [h2]Running
    
    
    Running

功能：表示线程正在执行。

#### [h2]Terminated
    
    
    Terminated

功能：表示线程已结束执行。

#### [h2]func toString()
    
    
    public func toString(): String

功能：将 [ThreadState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_enums#enum-threadstate) 转换为可输出的字符串。

转换结果如下：

  * Ready: "Ready"。
  * Running: "Running"。
  * Pending: "Pending"。
  * Terminated: "Terminated"。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转化后的字符串。



示例：
    
    
    main() {
        let t = ThreadState.Running
        println("Thread State: ${t}")
    }

运行结果：
    
    
    Thread State: Running
