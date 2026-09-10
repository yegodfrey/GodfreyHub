---
name: cangjie-references/cj-graphic-drawing-rect
title: Rect
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-rect
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 图形绘制 / Rect
---

# Rect

矩形绘制组件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?Length, ?Length)
    
    
    public init(width!: ?Length = None, height!: ?Length = None)

**功能：** 绘制一个宽度为width，高度为height的矩形。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 矩形宽度，取值范围≥0。初始值：0。默认单位：vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 矩形高度，取值范围≥0。初始值：0。默认单位：vp。  
  
#### 通用属性/通用事件

通用属性：除了支持通用属性外，还支持[图形绘制通用属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#组件属性)。

通用事件：全部支持。

#### 组件属性

#### [h2]func radiusWidth(?Length)
    
    
    public func radiusWidth(value: ?Length): This

**功能：** 设置圆角的宽度，仅设置宽时宽高一致。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 圆角的宽度。初始值：0.vp  
  
#### [h2]func radiusHeight(?Length)
    
    
    public func radiusHeight(value: ?Length): This

**功能：** 设置圆角的高度，仅设置高时宽高一致。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 设置圆角的高度。初始值：0.vp。  
  
#### [h2]func radius(?Length)
    
    
    public func radius(value: ?Length): This

**功能：** 设置圆角半径大小，取值范围≥0。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 圆角半径大小。初始值：0.vp。  
  
#### [h2]func radius(?Array<Length>)
    
    
    public func radius(value: ?Array<Length>): This

**功能：** 设置圆角半径大小，取值范围≥0。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Array<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 是 | - | 左上、右上、右下、左下圆角半径大小。 初始值：0.vp。  
  
#### [h2]func radius(?Array<(Length, Length)>)
    
    
    public func radius(value: ?Array<(Length, Length)>): This

**功能：** 设置圆角半径大小，取值范围≥0。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Array<([Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length), [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length))> | 是 | - | 左上、右上、右下、左下圆角宽、高大小。 初始值：0。 默认单位：vp。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 10) {
                Text("normal")
                    .fontSize(11)
                    .fontColor(0xCCCCCC)
                    .width(90.percent)
                // 绘制90% * 50的矩形
                Column(space: 5) {
                    Text("normal")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 绘制90% * 50矩形
                    Rect()
                        .width(90.percent)
                        .height(50)
                        .fill(Color.Green)
                    // 绘制90% * 50的矩形框
                    Rect()
                        .width(90.percent)
                        .height(50)
                        .fillOpacity(0.0)
                        .stroke(Color.Red)
                        .strokeWidth(3)
    
                    Text("with rounded corners")
                        .fontSize(11)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 绘制90% * 80的矩形, 圆角宽高分别为40、20
                    Rect()
                        .width(90.percent)
                        .height(50)
                        .radiusHeight(20)
                        .radiusWidth(40)
                        .fill(Color.Green)
                    // 绘制90% * 80的矩形, 圆角宽高为20
                    Rect()
                        .width(90.percent)
                        .height(80)
                        .radius(20)
                        .fill(Color.Green)
                        .stroke(Color.Transparent)
                }
                    .width(100.percent)
                    .margin(top: 10)
                // 绘制90% * 50矩形, 左上圆角宽高40,右上圆角宽高20,右下圆角宽高40,左下圆角宽高20
                Rect()
                    .width(90.percent)
                    .height(80)
                    .radius([(40, 40), (20, 20), (40, 40), (20, 20)])
                    .fill(Color.Green)
            }
                .width(100.percent)
                .margin(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/1Km1pXF9Qx2zOQsN0r3aRw/zh-cn_image_0000002731378887.png?HW-CC-KV=V1&HW-CC-Date=20260903T111644Z&HW-CC-Expire=86400&HW-CC-Sign=2DEFC69741FC5F131E69F449073B7C38DF6750B003211AA907661F61C5D858FC)
