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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/ZLK1dfPbRSalpKY-bZvauA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5D5E2772A25562CF807518E28C87BA447BC005E5F188BCDEC2AF06B5C33A413E)

  * 不支持平台：macOS、iOS。
  * 由于开发者通过反射功能获取到的类型信息均来自于 public 的类型，这些类型都必定拥有 public 的访问控制语义，因此修饰符信息并不包含任何访问控制相关的修饰符。



父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ModifierInfo>
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)



#### [h2]Abstract
    
    
    Abstract

功能：表示 abstract 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/mrwxfkDMTsies5O4PaYi0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=03FF5FD82A7F419BA19D1C4CFA6420740E4F1AA516C8532CA71E9DE403890215)

不支持平台：macOS、iOS。

#### [h2]Mut
    
    
    Mut

功能：表示 mut 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/L3E9eJp3R82bg59LU9S_eA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F7C707497C0FBDAB966A73441124EA63984439D81B299D81875C992A847E93F0)

不支持平台：macOS、iOS。

#### [h2]Open
    
    
    Open

功能：表示 open 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/J6jrX1T-R72Qlt5_fx6u-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=8F1F8CCADFBEB0D9ACFCD0A21561EFC9B3B189ED43E2C91AD9D4C1A21977C931)

不支持平台：macOS、iOS。

#### [h2]Override
    
    
    Override

功能：表示 override 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/pgPXG7NKQq-I9tLwgsqX-Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=5EA1C5F274DCDCEAA48CB7D40744BD7AAAC89540A89F322E0280C806B8A68C16)

不支持平台：macOS、iOS。

#### [h2]Redef
    
    
    Redef

功能：表示 redef 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/0l4INt8zSYiBldm4t3897Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=DD1FF7C239B80EC16D4047B79A68A1060E8C02C2D86F4940B26791A1624CEB09)

不支持平台：macOS、iOS。

#### [h2]Sealed
    
    
    Sealed

功能：表示 sealed 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/tpTI1IwBRZaoY3MV8IhByw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CC3932DEC890AB089F18FF0B2E98C9CDEE5A0D981125EFC41EE1304C71EBF7F3)

不支持平台：macOS、iOS。

#### [h2]Static
    
    
    Static

功能：表示 static 修饰符。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/hZainM3uSyS6ZESJmIxAIQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=C24C054A96F755DEAF69568870F0D1F9DCBF72DA1BEA35A068CB2D915FAF39A2)

不支持平台：macOS、iOS。

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：获取该修饰符信息的哈希值。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/WU5daIxCSKmtKdUCP5Y6yg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=F6C19955E6004F25DB4F508BC7C7D79EC24F7F5EE4A3B32FB1599BBDB419A04D)

不支持平台：macOS、iOS。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 该修饰符信息的哈希值。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/7_x7DbfiQEWHuNAOZZKw0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=4031F5AC950A33AD5E89B94AABEE652319D227852133F0FA05299F5D66DDA22B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/mnUPI7ixSG2a7V3nq5pTYQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FEA9E4ADF792CC0B64AF1CD2E65CDB437CA6951ABF3A180B7D2D7A32B5EAC0BD)

不支持平台：macOS、iOS。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串形式的该修饰符信息。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/GabXGCoIQsqBT-kTmQqYkQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FEE5949E1A6A53425EF2CF925DC435858A455EDEBAE5F5097F5A89790FA9916B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/dTKG8ORXQCW_cahzvy6woA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=FEEE8056C300241CC6294757F8003C2BB2789D14C4DD57A706C5DE1DAAB6A073)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/5ZIUo415SPChiRex1GjDbQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=2237376B1A42540FD676B67F490CBC21DB3904AFEEBAACE4234E59FFE25F3450)

不支持平台：macOS、iOS。

参数：

  * other: [ModifierInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_enums#enum-modifierinfo) \- 被比较相等性的另一个修饰符信息。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果该修饰符信息与另一个相等则返回 true，否则返回 false。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/-onKRoJ0Sye5hl0-LfXwfA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111714Z&HW-CC-Expire=86400&HW-CC-Sign=CCA42A22A52578DB3988CC315489C10303A6850054F123CD3A0002A863AFC1D2)

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
