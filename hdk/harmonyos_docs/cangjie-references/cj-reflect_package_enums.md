---
name: cangjie-references/cj-reflect_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 枚举
---

# 枚举

#### enum ModifierInfo
    
    
    public enum ModifierInfo <: Equatable<ModifierInfo> & Hashable & ToString {
        | Open
        | Override
        | Redef
        | Abstract
        | Sealed
        | Mut
        | Static
    }

功能：描述修饰符信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/bffCpsZUQnCJO2vDydYhVw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CF10E8F647A9B805B1D8C7EC821360D25921C4A9EE4E91CC9E344C08B718E29C)

  * 不支持平台：macOS、iOS。
  * 由于开发者通过反射功能获取到的类型信息均来自于 public 的类型，这些类型都必定拥有 public 的访问控制语义，因此修饰符信息并不包含任何访问控制相关的修饰符。



父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ModifierInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]Abstract
    
    
    Abstract

功能：表示 abstract 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/zCBtAywES6y_k0Q9iT89Zg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=CE8CDF20046466D5C41383C193B758A4B360225A1ECDABB9EE009EC5AAE95352)

不支持平台：macOS、iOS。

#### [h2]Mut
    
    
    Mut

功能：表示 mut 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/6pZhAaNqRCW6ATJqvI0ImQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=2F6543D4AD15594EBCB88B2D4DFF60EECEEAED23286832BBC13946A9FB72C618)

不支持平台：macOS、iOS。

#### [h2]Open
    
    
    Open

功能：表示 open 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/0yTcGlSZTPWOUrIHVpwbNA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=E7FC6E2F7E893018EB69026D2BE3BAEE4DB06A834E0006AA38126B20B5EE3807)

不支持平台：macOS、iOS。

#### [h2]Override
    
    
    Override

功能：表示 override 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a/v3/QuZ6rxk0RhqiCcuVDdee7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=04AA86C77690EE6946B3AED8C8F3DE799BEF0A6BC74D4F760D793B5B57D2D8E3)

不支持平台：macOS、iOS。

#### [h2]Redef
    
    
    Redef

功能：表示 redef 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/EqLBaSXMQXe6mYJkW5ZRYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=BBE47C47F3CD3CC5C6B795717B4953B52D8AA9033689FDD62C41FEEF9854427D)

不支持平台：macOS、iOS。

#### [h2]Sealed
    
    
    Sealed

功能：表示 sealed 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/DVbGDwQgQIqG_I8XTvH8Yg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0E730465366F722D7C57F904C9F992BBDF67A6385FB011BAAFA4BB18793F18D6)

不支持平台：macOS、iOS。

#### [h2]Static
    
    
    Static

功能：表示 static 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/wZsHe8-wTy-lYix60POlog/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0B4410DC9A99E700E590D61BACE5A05D1413D59D220467D9D37698E7D06ECDE7)

不支持平台：macOS、iOS。

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该修饰符信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/RASDoTuQRBCttiVLDdyiDQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=71A05AAB244DD049982996CBBA28C93A79F4D33F0F502BB7769F98506A5B3F73)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该修饰符信息的哈希值。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/EU3BPw8AT4aJB5zzlHrd3g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=2323A12EC69F2E338EEB4A787FAFCB3A688E3E3A9C80CB78901A87A8F223AC31)

内部实现为该修饰符关键字字符串的哈希值。

示例：
    
    
    import std.reflect.ModifierInfo
    
    main(): Int64 {
        // 创建一个 ModifierInfo 枚举值
        let modifier = ModifierInfo.Abstract
    
        // 获取该修饰符信息的哈希值
        let hash = modifier.hashCode()
        println("Abstract 修饰符的哈希值: ${hash}")
    
        return 0
    }

运行结果：
    
    
    Abstract 修饰符的哈希值: -3361106216383856704

#### [h2]func toString()
    
    
    public override func toString(): String

功能：获取字符串形式的该修饰符信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/PRDYAsmGRDmU_JRNQ6-1LA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=0A343B726C9AD204CE58AC3804E163E39F7BC9AFC39920D1D528B9EEB41A4A09)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该修饰符信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/R6YGItR5SLCRmFThov9dCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=EF5414D8045EF94748A79763E3E31267F22F6B88E41CCBA6951CCA6AB8F5ADD8)

字符串形式的修饰符信息即为修饰符关键字的标识符。

示例：
    
    
    import std.reflect.ModifierInfo
    
    main(): Int64 {
        // 创建一个 ModifierInfo 枚举值
        let modifier = ModifierInfo.Open
    
        // 获取字符串形式的该修饰符信息
        let str = modifier.toString()
        println("Open 修饰符的字符串形式: ${str}")
    
        return 0
    }

运行结果：
    
    
    Open 修饰符的字符串形式: open

#### [h2]operator func !=(ModifierInfo)
    
    
    public override operator func !=(other: ModifierInfo): Bool

功能：判断该修饰符信息与给定的另一个修饰符信息是否不等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/DjOlKujkQY-YUXu6zic05Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=6398CD081E8F6F0DCA797F583A1625CBFE7210C29D37EA9B8704BEB0B5D08D45)

  * 不支持平台：macOS、iOS。
  * 修饰符信息的相等性的语义等价于 enum 类型实例的相等性的语义。



参数：

  * other: [ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo) \- 被比较相等性的另一个修饰符信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该修饰符信息与另一个不等则返回 true，否则返回 false。



示例：
    
    
    import std.reflect.ModifierInfo
    
    main(): Int64 {
        // 创建两个不同的 ModifierInfo 枚举值
        let modifier1 = ModifierInfo.Open
        let modifier2 = ModifierInfo.Abstract
    
        // 判断两个修饰符信息是否不等
        let result = modifier1 != modifier2
        println("Open != Abstract: ${result}")
    
        // 创建两个相同的 ModifierInfo 枚举值
        let modifier3 = ModifierInfo.Open
        let modifier4 = ModifierInfo.Open
    
        // 判断两个相同的修饰符信息是否不等
        let result2 = modifier3 != modifier4
        println("Open != Open: ${result2}")
    
        return 0
    }

运行结果：
    
    
    Open != Abstract: true
    Open != Open: false

#### [h2]operator func ==(ModifierInfo)
    
    
    public override operator func ==(other: ModifierInfo): Bool

功能：判断该修饰符信息与给定的另一个修饰符信息是否相等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/tO7hbGNYTs62k8CG_Cu5xw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=D39C15CC9CC850811E2EA87F85B73731DB494B21BB6209E9C564239B1B905230)

不支持平台：macOS、iOS。

参数：

  * other: [ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo) \- 被比较相等性的另一个修饰符信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该修饰符信息与另一个相等则返回 true，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/A7r91q4cQ3SuX48uPlhfLQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090209Z&HW-CC-Expire=86400&HW-CC-Sign=126561F3BEA706995B638D9C1BF92728C80A1A1AC143D706D96592BA8217419C)

修饰符信息的相等性的语义等价于 enum 类型实例的相等性的语义。

示例：
    
    
    import std.reflect.ModifierInfo
    
    main(): Int64 {
        // 创建两个相同的 ModifierInfo 枚举值
        let modifier1 = ModifierInfo.Static
        let modifier2 = ModifierInfo.Static
    
        // 判断两个修饰符信息是否相等
        let result = modifier1 == modifier2
        println("Static == Static: ${result}")
    
        // 创建两个不同的 ModifierInfo 枚举值
        let modifier3 = ModifierInfo.Static
        let modifier4 = ModifierInfo.Override
    
        // 判断两个不同的修饰符信息是否相等
        let result2 = modifier3 == modifier4
        println("Static == Override: ${result2}")
    
        return 0
    }

运行结果：
    
    
    Static == Static: true
    Static == Override: false
