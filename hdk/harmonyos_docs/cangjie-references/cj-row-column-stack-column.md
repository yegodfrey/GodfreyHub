---
name: cangjie-references/cj-row-column-stack-column
title: Column
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 行列与堆叠 / Column
---

# Column

沿垂直方向布局的容器。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含子组件。

#### 创建组件

#### [h2]init(?Length, () -> Unit)
    
    
    public init(space!: ?Length = None, child!: () -> Unit = {=>})

**功能：** 创建一个纵向布局元素垂直方向间距为space且可以包含子组件的Column容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
space | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 纵向布局元素垂直方向间距。初始值: 0.vp space为负数或者justifyContent设置为FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly时不生效。  
child | () -> Unit | 否 | { => } | **命名参数。** Column 容器的子组件  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func alignItems(?HorizontalAlign)
    
    
    public func alignItems(value: ?HorizontalAlign): This

**功能：** 设置子组件在水平方向上的对齐格式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-horizontalalign) | 是 | - | 子组件在水平方向上的对齐格式。初始值: HorizontalAlign.Center  
  
#### [h2]func justifyContent(?FlexAlign)
    
    
    public func justifyContent(value: ?FlexAlign): This

**功能：** 设置子组件在垂直方向上的对齐格式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FlexAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-flexalign) | 是 | - | 设置子组件在垂直方向上的对齐格式。初始值: FlexAlign.Start  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Text("space")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                Column(space: 5) {
                    Column()
                        .width(100.percent)
                        .height(30)
                        .backgroundColor(0xAFEEEE)
                    Column()
                        .width(100.percent)
                        .height(30)
                        .backgroundColor(0x00FFFF)
                }
                    .width(90.percent)
                    .height(100)
                    .border(width: 1.vp)
    
                Text("alignItems(Start)")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                Column {
                    Column()
                        .width(50.percent)
                        .height(30)
                        .backgroundColor(0xAFEEEE)
                    Column()
                        .width(50.percent)
                        .height(30)
                        .backgroundColor(0x00FFFF)
                }
                    .alignItems(HorizontalAlign.Start)
                    .width(90.percent)
                    .border(width: 1.vp)
    
                Text("alignItems(End)")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                Column {
                    Column()
                        .width(50.percent)
                        .height(30)
                        .backgroundColor(0xAFEEEE)
                    Column()
                        .width(50.percent)
                        .height(30)
                        .backgroundColor(0x00FFFF)
                }
                    .alignItems(HorizontalAlign.End)
                    .width(90.percent)
                    .border(width: 1.vp)
    
                Text("justifyContent(Center)")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                Column {
                    Column()
                        .width(30.percent)
                        .height(30)
                        .backgroundColor(0xAFEEEE)
                    Column()
                        .width(30.percent)
                        .height(30)
                        .backgroundColor(0x00FFFF)
                }
                    .height(15.percent)
                    .border(width: 1.vp)
                    .justifyContent(FlexAlign.Center)
    
                Text("justifyContent(End)")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                Column {
                    Column()
                        .width(30.percent)
                        .height(30)
                        .backgroundColor(0xAFEEEE)
                    Column()
                        .width(30.percent)
                        .height(30)
                        .backgroundColor(0x00FFFF)
                }
                    .height(15.percent)
                    .border(width: 1.vp)
                    .justifyContent(FlexAlign.End)
            }
                .width(100.percent)
                .padding(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/sB0ruBASR92E4LhTvUpylQ/zh-cn_image_0000002743077859.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=BD84B4A55ED31BC85783AB4E6094698B3C88498080398E4ECD0B63761BE7BA0E)
