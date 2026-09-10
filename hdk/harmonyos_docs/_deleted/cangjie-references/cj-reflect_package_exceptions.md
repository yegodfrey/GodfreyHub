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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/6vCx1m8YShOHrE8GL2D7OQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=EDA9CFF5AB995C18076255DAFFA8D9FE102FB88009B2C068F31DE524B48AC936)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [IllegalSetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegalsetexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/ILy66iPiT8OCMwTKerB0MQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=F0410561FC499D8FB56A87A2256B561ACD1C1409C82259508369ED7B15F49F54)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/_o-aGtbkQ6mo7Bw9ua6SiA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=9595B4E992FF0CA37DD5638084072C3552A74BF7955D4B82A3AA1C00ABE74241)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/RCA1nGuCS92xZpx7AvgyeA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=A860094ADFB0FAD5783DFE44A1244F8D151E7D7DF9A90EDED82AF04763BEBD06)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [IllegalTypeException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-illegaltypeexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/WYrsPGslRVOQCEVyd_DfoA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=C6679FECC99FB0C4F87456AD9C788A47D66A0E1A7B26C6EF79A055895442CC86)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/LSdJ5W5YTfe1YTa4O2VNeg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=C6E9238AC6EB13D1993379E20E91B2A213A443D1274D145480952FB7BE9CA58E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/Uh-EksG0QlqUS-vaoCwW6Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=8142948C5B854F8A2AB1F5CB092905A0884129E8C5A6D3A5BE177D9CF2BAEC1E)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [InfoNotFoundException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-infonotfoundexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/0wAyp_obS_aPrW_e1K1eVA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=F511A190C3B8D0799CF0133F7BB42C65ABEA7AA80AB41E169BFBEDB8880A9101)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/07/v3/BfF2AG3cQdS9hGw-8lP57Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=3D20735E607CE26B4D0F46083669A47BBA80213BAAA38DA7EB3DE2BE60AFDB00)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/6Hg3_ro3RUekNw3NzIvmVQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=A1AEAB4F7181A1EE62A217C36CD195A63B2A97D400C59A8A01DCD792B3E47B61)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [InvocationTargetException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-invocationtargetexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/z4zT20w1QF-ryCUhMyA94w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=23C96A66140A940FD6F232FF448156A4E9EDC16D54096B5240127B94C12FA4A9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/qyICpibfS9GrT_Y-VQc4nA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=D9596B390CDF8F6FFE301CCBF37896981D2CE2F6EE9610FF9A3F9164311725E9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/Ka9djFG0Sm6yfO0c2BLjpA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=DF38729054C682CFD53526C9A96235578E1DBEFC8A55C302500A6042ABEE940B)

不支持平台：macOS、iOS。

父类型：

  * ReflectException



#### [h2]init()
    
    
    public init()

功能：创建 [MisMatchException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-mismatchexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/TWMefDtCTwGa8S8MhgX-mw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=8F5AE0DCF00A1C4244402D3AE129BD76D47262F1CE8DC32C945DECE780BEF6B6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/58/v3/uByD7dcPS3igDAhSGXabIw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=E62E0E7E8BA4CAA870BCEFD3E3DFD4AE0DEC1B9D51D3A8B5BF8C8DCEBFC2A724)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/73_0-LFpRgC2_qax6wc4KA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=FFA4CF7BC9E39A5EA416ED23F9FD9AAE87CA1695ABFD8C636D1CEC3DF6EF587F)

不支持平台：macOS、iOS。

父类型：

  * [Exception](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-exception)



#### [h2]init()
    
    
    public init()

功能：创建 [ReflectException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-reflect_package_exceptions#class-reflectexception) 实例。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/1Btk4bBAQa2eV4jTvwRp0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=081CD64F52607D419EE29FEBDE6A36BBCA2C94325A425465EA0284FF28B38D56)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/HOzyrcQfREGLTROmftQbYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111716Z&HW-CC-Expire=86400&HW-CC-Sign=CA593ABD464A5521D10D560BA95C53B524744791C0632F0290BA79F99FAF1966)

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
