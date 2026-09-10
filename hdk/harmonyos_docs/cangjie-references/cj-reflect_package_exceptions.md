---
name: cangjie-references/cj-reflect_package_exceptions
title: 异常类
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.reflect / 异常类
---

# 异常类

#### class IllegalSetException
    
    
    public class IllegalSetException <: ReflectException {
        public init()
        public init(message: String)
    }

功能：[IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) 为对不可变类型进行更改异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/LLa5kWnRTFKgyNPZDjLMgQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=90B3B3599D9D47D6D502CA92541DC5B11B54A3926D121F13CE2ADB48F55A32B3)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/YNi6pB82Rc22fSr7cUZLxg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=ED9F726EE0190E009549C33B74839FAC700A0400E9421A8A35394FE3E2CA8BDC)

不支持平台：macOS、iOS。

示例：
    
    
    import std.reflect.IllegalSetException
    
    main(): Int64 {
        // 创建 IllegalSetException 实例
        let exception = IllegalSetException()
        return 0
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/gVFXGpyeR3StgTLA_GBtqQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=B31F0B359BEA1E27056084E941C0078B56456D8499FA2DC7B26CF24828F0BFEB)

不支持平台：macOS、iOS。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.reflect.IllegalSetException
    
    main(): Int64 {
        // 根据异常信息创建 IllegalSetException 实例
        let exception = IllegalSetException("更改异常")
        return 0
    }

#### class IllegalTypeException
    
    
    public class IllegalTypeException <: ReflectException {
        public init()
        public init(message: String)
    }

功能：[IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) 为类型不匹配异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/VmMBb0T8QNOMmKuBSlSKsw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=D4540B85483FC8E391CCA457002E0A9B31F5DA740739D2C39AE558BD6CF5F37C)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/_0Vo_j0iTL6jGlGg7SardA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=B2848470D7DABC39D78005BC4A297C252FE03E06D3260AC0F26102BA73153A8A)

不支持平台：macOS、iOS。

示例：
    
    
    import std.reflect.IllegalTypeException
    
    main(): Int64 {
        // 创建 IllegalTypeException 实例
        let exception = IllegalTypeException()
        return 0
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/TFKJ8hQiRLGDN2R_H7aI2A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=E0E1791C4CABA909FC94AC7D7418442CB2853394DD1577C074C690A291A046A8)

不支持平台：macOS、iOS。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.reflect.IllegalTypeException
    
    main(): Int64 {
        // 根据异常信息创建 IllegalTypeException 实例
        let exception = IllegalTypeException("类型不匹配")
        return 0
    }

#### class InfoNotFoundException
    
    
    public class InfoNotFoundException <: ReflectException {
        public init()
        public init(message: String)
    }

功能：[InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) 为无法找到对应信息异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/Vae7woBtSeCGdz86OdbeHA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=8313BD3C6EAC16ACB9A20BC3C4FC1832E77278B503849856C4F7AA8565790D77)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/m9n_kdrJTG2OIKc6orRItg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=E2CAD0C55E388B1C20643ECB289464C80E13AB6EBAD2F32F7379B0239A281D85)

不支持平台：macOS、iOS。

示例：
    
    
    import std.reflect.InfoNotFoundException
    
    main(): Int64 {
        // 创建 InfoNotFoundException 实例
        let exception = InfoNotFoundException()
        return 0
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/Mnucc73LQQ2d3lyLW_g92w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=DD838FB3E22AE8CD00D87B517C256DB1BBA310C00689105C15561CDAE8C9BABD)

不支持平台：macOS、iOS。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.reflect.InfoNotFoundException
    
    main(): Int64 {
        // 根据异常信息创建 InfoNotFoundException 实例
        let exception = InfoNotFoundException("未找到相关信息")
        return 0
    }

#### class InvocationTargetException
    
    
    public class InvocationTargetException <: ReflectException {
        public init()
        public init(message: String)
    }

功能：[InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) 为调用函数包装异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/2OsCAwHiQFmwno0NYncctg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=908BA90369D6F576E6C19FE5883EAD28EBCFB0B709BD1CD301C3DB0C6CF070E1)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/PWVahNVZSuW8w4hpM1hEzA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=89F915092B839941840FC4BCACEAFEEB8405888A8A9AD5C005371F3F995A689B)

不支持平台：macOS、iOS。

示例：
    
    
    import std.reflect.InvocationTargetException
    
    main(): Int64 {
        // 创建 InvocationTargetException 实例
        let exception = InvocationTargetException()
        return 0
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/k6riOr4DSWKfZJ3wQR26sQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=A34ECA3CA2C0C1CD4404BD65AE204412D08F7DFA9A277BB4764EE23A2814308F)

不支持平台：macOS、iOS。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.reflect.InvocationTargetException
    
    main(): Int64 {
        // 根据异常信息创建 InvocationTargetException 实例
        let exception = InvocationTargetException("调用目标异常")
        return 0
    }

#### class MisMatchException
    
    
    public class MisMatchException <: ReflectException {
        public init()
        public init(message: String)
    }

功能：[MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) 为调用对应函数抛出异常。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/iPaq3xjMQA-AzPFVMbLe3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=B2FD58B4748E2645161BD7160184D4D651C16B8AE9E800F4A1387C9114947791)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/rTM28fTaRAGfRTWN0I-Szw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=9D61417E60EEF7A5153F34DDD37652900BF6B658F1D5304151B0CF508E7792BB)

不支持平台：macOS、iOS。

示例：
    
    
    import std.reflect.MisMatchException
    
    main(): Int64 {
        // 创建 MisMatchException 实例
        let exception = MisMatchException()
        return 0
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/YsT6y7irQfSGRfPL-c7nrQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=69F32059A5771FF6A5A4087907CDCBE59A7BFEF6C38E88250F368377EEBE132D)

不支持平台：macOS、iOS。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.reflect.MisMatchException
    
    main(): Int64 {
        // 根据异常信息创建 MisMatchException 实例
        let exception = MisMatchException("函数调用不匹配")
        return 0
    }

#### class ReflectException
    
    
    public open class ReflectException <: Exception {
        public init()
        public init(message: String)
    }

功能：[ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) 为 Reflect 包的基异常类。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/db/v3/D_P-GjT0S9aYhTC4x5vHmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=10AF811ED52B110579294ABD08B0F8BD092F4F45EA0D15334B559050881578BB)

不支持平台：macOS、iOS。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/x7fyznN1SbCAy0blTr5cpQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=B7B2BAC32C8900406C8AD6E6E6C3A7FE37FC354F3D8FEBEE1BB557C053588F34)

不支持平台：macOS、iOS。

示例：
    
    
    import std.reflect.ReflectException
    
    main(): Int64 {
        // 创建 ReflectException 实例
        let exception = ReflectException()
        return 0
    }

#### [h2]init(String)
    
    
    public init(message: String)

功能：根据异常信息创建 [ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/ItnTe8R-THSQasw6i9QY8w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090210Z&HW-CC-Expire=86400&HW-CC-Sign=793B9484B729FE0B25A1D450EE6910C90A59272F970EFFDA8D849B2B2F40B9E7)

不支持平台：macOS、iOS。

参数：

  * message: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 异常信息。



示例：
    
    
    import std.reflect.ReflectException
    
    main(): Int64 {
        // 根据异常信息创建 ReflectException 实例
        let exception = ReflectException("反射操作异常")
        return 0
    }
