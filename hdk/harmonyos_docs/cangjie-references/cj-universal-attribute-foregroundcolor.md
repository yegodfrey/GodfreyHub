---
name: cangjie-references/cj-universal-attribute-foregroundcolor
title: 前景色设置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-foregroundcolor
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 前景色设置
---

# 前景色设置

设置组件的前景色。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func foregroundColor(?ColoringStrategy)
    
    
    func foregroundColor(value: ?ColoringStrategy): T

**功能：** 设置组件的前景色。当组件未设置前景色，默认继承父组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ColoringStrategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-coloringstrategy) | 是 | - | 设置组件的前景颜色或者根据智能取色策略设置前景颜色。不支持属性动画。  初始值：Color.Transparent。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回当前组件。  
  
#### func foregroundColor(?ResourceColor)
    
    
    func foregroundColor(value: ?ResourceColor): T

**功能：** 设置组件的前景色。当组件未设置前景色，默认继承父组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 设置组件的前景颜色或者根据智能取色策略设置前景颜色。不支持属性动画。  初始值：Color.Transparent。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回当前组件。  
  
#### 示例代码

#### [h2]示例1（使用前景色设置）

该示例主要演示通过foregroundColor设置前景色。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 100) {
                Button("ORANGE")
                    .width(50.percent)
                    .height(80)
                    .fontSize(20)
                    .foregroundColor(0xED6F21)
                    .margin(top: 200)
                    .backgroundColor(0xD1D1D6)
                Button("GREEN")
                    .width(50.percent)
                    .height(80)
                    .fontSize(20)
                    .foregroundColor(0x64BB5C)
                    .backgroundColor(0xD1D1D6)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/0SnJnFzNSX-hMeXk-Uo-PQ/zh-cn_image_0000002713398924.png?HW-CC-KV=V1&HW-CC-Date=20260908T090145Z&HW-CC-Expire=86400&HW-CC-Sign=A90FBB571F5D0D20BD227B7473F9ADE9C1C40B644F8F4336B5FDCCDA9E2F7CDD)

#### [h2]示例2（设置前景色为组件背景色反色）

该示例通过INVERT将前景色设置为背景色反色。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 100) {
                Circle()
                    .width(60)
                    .height(80)
                    .margin(top: 100)
                Circle()
                    .width(60)
                    .height(80)
                    .backgroundColor(Color.Black)
                    .foregroundColor(ColoringStrategy.Invert)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/fhiG5ZR-TS6dR4KEGC2VNQ/zh-cn_image_0000002743077855.png?HW-CC-KV=V1&HW-CC-Date=20260908T090145Z&HW-CC-Expire=86400&HW-CC-Sign=FD1AD26ACDEE05C1C474C0C456CC76BBF356F2DE59CE576E58CF598F69A5B31C)

#### [h2]示例3（前景色未继承父组件）

该示例主要演示组件同时设置前景色和背景色与只设置背景色的效果对比。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 100) {
                Button("设置前景色为蓝色")
                    .width(100.percent)
                    .height(80)
                    .fontSize(20)
                    .backgroundColor(Color.Gray)
                    .foregroundColor(Color.Blue)
    
                Button("未设置前景色继承自父组件")
                    .width(100.percent)
                    .height(80)
                    .fontSize(20)
                    .backgroundColor(Color.Gray)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/a8LjlUJwRL2kEHAoJb797A/zh-cn_image_0000002713558894.png?HW-CC-KV=V1&HW-CC-Date=20260908T090145Z&HW-CC-Expire=86400&HW-CC-Sign=DFB356523FE91EAAA44F2389D9DEC170F20F9E04596821C05B3AC758BCE67459)
