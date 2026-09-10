---
name: cangjie-references/cj-graphic-drawing-circle
title: Circle
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-circle
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 图形绘制 / Circle
---

# Circle

用于绘制圆形的组件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?Length, ?Length)
    
    
    public init(width!: ?Length = None, height!: ?Length = None)

**功能：** 绘制一个宽度为width，高度为height的圆形，宽高设置不一致时以短边为直径。异常值按照初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 宽度，取值范围≥0。初始值: 0.vp  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 高度，取值范围≥0。初始值: 0.vp  
  
#### 通用属性/通用事件

通用属性：除了支持通用属性外，还支持[图形绘制通用属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#组件属性)。

通用事件：全部支持。

#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 10) {
                // 绘制一个直径为150的圆
                Circle(width: 150, height: 150)
                // 绘制一个直径为150、线条为红色虚线的圆环（宽高设置不一致时以短边为直径）
                Circle()
                    .width(150)
                    .height(200)
                    .fillOpacity(0.0)
                    .strokeWidth(3)
                    .stroke(Color.Red)
                    .strokeDashArray([1, 2])
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/1hRvdUhuRC-f88gjXxem0g/zh-cn_image_0000002713398978.png?HW-CC-KV=V1&HW-CC-Date=20260908T090151Z&HW-CC-Expire=86400&HW-CC-Sign=49CDAB0376428584D582888408522566AF974CA6A36EACCEA0B29466FF255402)
