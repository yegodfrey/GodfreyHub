---
name: cangjie-references/cj-apis-ark_interop_macro
title: ohos.ark_interop_macro（ArkTS互操作宏）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-ark_interop_macro
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉与ArkTS互操作库 / 互操作API / ohos.ark_interop_macro（ArkTS互操作宏）
---

# ohos.ark_interop_macro（ArkTS互操作宏）

提供仓颉与ArkTS之间的声明式互操作宏，用于自动生成ArkTS声明文件及互操作层代码，简化跨语言调用的开发工作。

#### 导入模块
    
    
    import ohos.ark_interop_macro.*

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/sMNj3U_BShOJyJTYnAgZDw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111723Z&HW-CC-Expire=86400&HW-CC-Sign=5CF2C72B7FE2C10873D9593EC5DC72F00377E1598FA3912489CA83FB191802B2)

当前暂不支持Kit化的导入方式，预计在下个版本支持。

#### @Interop 宏
    
    
    public macro Interop(attrTokens: Tokens, input: Tokens): Tokens

**功能：** 自动生成 ArkTS 声明文件及互操作层代码，详见[仓颉-ArkTS 声明式互操作宏](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-interoperability_macro)。

**示例：**
    
    
    import ohos.ark_interop_macro.*
    import ohos.ark_interop.*
    
    @Interop[ArkTS]
    public class MyCustomClass {
        public let name: String   // String 实现了 JSInteropType<String>，可以用在这里。
        public let age: Int64     // Int64 实现了 JSInteropType<Int64>，可以用在这里。
    
        public init(name: String, age: Int64) {
            this.name = name
            this.age = age
        }
    }
