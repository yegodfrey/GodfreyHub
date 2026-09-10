---
name: cangjie-references/cj-universal-attribute-overlay
title: 浮层
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-overlay
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 浮层
---

# 浮层

设置组件的遮罩文本。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func overlay(?String, ?Alignment, ?OverlayOffset)
    
    
    func overlay(value!: ?String, align!: ?Alignment,
        offset!: ?OverlayOffset): T

**功能：** 在当前组件上，增加遮罩文本作为该组件的浮层。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?String | 是 | - | **命名参数。** 遮罩文本内容。  
align | ?[Alignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-alignment) | 是 | - | **命名参数。** 浮层相对于组件的方位。初始值：Alignment.Center  
offset | ?[OverlayOffset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-overlayoffset) | 是 | - | **命名参数。** 浮层基于自身左上角的偏移量。浮层默认处于组件左上角。初始值：OverlayOffset(x: 0.0, y: 0.0)  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/3lWglr8pQIySECsi4HxPew/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=62C55F4E7FE1BA237AC6786ED2C16D1AD148457E7DAA98B8448FA0FC3981EEBF)

align和offset都设置时，效果重叠，浮层相对于组件方位定位后，再基于当前位置的左上角进行偏移。

**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### 示例代码

#### [h2]示例1（浮层效果）

该示例演示了如何使用overlay方法为组件添加浮层文本。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Text("默认居中浮层")
                    .width(200)
                    .height(100)
                    .backgroundColor(0xf48899)
                    .align(Alignment.Top)
                    .overlay(value: "Overlay Text")
    
                Text("左上角浮层")
                    .width(200)
                    .height(100)
                    .backgroundColor(0xf7b0bb)
                    .overlay(value: "Top Left", align: Alignment.TopStart)
    
                Text("带偏移的浮层")
                    .width(200)
                    .height(100)
                    .backgroundColor(0xfbd7dd)
                    .overlay(
                        value: "Offset Text",
                        align: Alignment.BottomEnd,
                        offset: OverlayOffset(x: -20.0, y: -20.0)
                    )
            }
                .width(100.percent)
                .height(100.percent)
                .justifyContent(FlexAlign.Center)
                .alignItems(HorizontalAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/X7UFfF7HTxigcpRfjst95w/zh-cn_image_0000002701659608.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=C355FCA22A9297075C29D247C16668DB08452F76AD3D2C76C9A7F035E0D3CB75)
