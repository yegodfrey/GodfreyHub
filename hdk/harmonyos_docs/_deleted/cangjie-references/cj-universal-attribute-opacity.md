---
name: cangjie-references/cj-universal-attribute-opacity
title: 透明度设置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-opacity
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 透明度设置
---

# 透明度设置

设置组件的透明度。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func opacity(?Float64)
    
    
    func opacity(value: ?Float64): T

**功能：** 设置组件的透明度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Float64 | 是 | - | 透明度。取值范围为0.0到1.0，0.0表示完全透明，1.0表示完全不透明。初始值：1.0  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### 示例代码

该示例主要展示通过opacity设置组件的不透明度。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 5) {
                Text("opacity(1)")
                    .fontSize(9)
                    .width(90.percent)
                    .fontColor(0xCCCCCC)
                Text("")
                    .width(90.percent)
                    .height(50)
                    .opacity(1.0)
                    .backgroundColor(0xAFEEEE)
                Text("opacity(0.7)")
                    .fontSize(9)
                    .width(90.percent)
                    .fontColor(0xCCCCCC)
                Text("")
                    .width(90.percent)
                    .height(50)
                    .opacity(0.7)
                    .backgroundColor(0xAFEEEE)
                Text("opacity(0.4)")
                    .fontSize(9)
                    .width(90.percent)
                    .fontColor(0xCCCCCC)
                Text("")
                    .width(90.percent)
                    .height(50)
                    .opacity(0.4)
                    .backgroundColor(0xAFEEEE)
                Text("opacity(0.1)")
                    .fontSize(9)
                    .width(90.percent)
                    .fontColor(0xCCCCCC)
                Text("")
                    .width(90.percent)
                    .height(50)
                    .opacity(0.1)
                    .backgroundColor(0xAFEEEE)
                Text("opacity(0)")
                    .fontSize(9)
                    .width(90.percent)
                    .fontColor(0xCCCCCC)
                Text("")
                    .width(90.percent)
                    .height(50)
                    .opacity(0.0)
                    .backgroundColor(0xAFEEEE)
            }
                .width(100.percent)
                .padding(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/ME90qhbNQ3eMXlCoJZ2hYw/zh-cn_image_0000002731538799.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=89E3E3BBF6BA541F8AAC88B090151EDD3B5647408B37E5A37C3569DB2C635E2B)
