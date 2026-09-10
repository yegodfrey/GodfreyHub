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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/PScf_sQ5TZSvgbkXnTOspQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090145Z&HW-CC-Expire=86400&HW-CC-Sign=799AA068643A6FCA39A4B5CA56F8EFA6DBD6A8038E97E2B3FA29B1F0E374186D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/QdKO8o5YTxSSYKeNfDlIMQ/zh-cn_image_0000002743077847.png?HW-CC-KV=V1&HW-CC-Date=20260908T090145Z&HW-CC-Expire=86400&HW-CC-Sign=5E3D5738884FD31BBBBFCFEC1D04606016227A51D2BEFF06BFC33B089088133E)
