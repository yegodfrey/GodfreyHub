---
name: cangjie-references/cj-canvas-drawing-canvas
title: Canvas
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvas
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 画布绘制 / Canvas
---

# Canvas

提供画布组件，用于自定义绘制图形。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

不支持子组件。

#### 创建组件

#### [h2]init(?CanvasRenderingContext2D)
    
    
    public init(context: ?CanvasRenderingContext2D)

**功能：** 构造一个Canvas组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
context | ?[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvasrenderingcontext2d#class-canvasrenderingcontext2d) | 是 | - | Canvas上下文对象。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件事件

#### [h2]func onReady(?() -> Unit)
    
    
    public func onReady(callback: ?() -> Unit): This

**功能：** Canvas组件构造完成后的事件通知。此时可以开始绘制Canvas。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?() -> Unit | 是 | - | 事件回调。 初始值：{ => }。  
  
#### 基础类型定义

#### [h2]class RenderingContextSettings
    
    
    public class RenderingContextSettings {
        public var antialias: ?Bool
        public init(antialias!: ?Bool = None)
    }

**功能：** 用于创建渲染上下文时设置相关属性的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var antialias**
    
    
    public var antialias: ?Bool

**功能：** 表示Canvas是否启用抗锯齿功能，默认值为false。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Bool)**
    
    
    public init(antialias!: ?Bool = None)

**功能：** 根据抗锯齿参数创建一个RenderingContextSettings对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
antialias | ?Bool | 否 | None | **命名参数。** 是否启用抗锯齿。  
  
#### [h2]class TextMetrics
    
    
    public class TextMetrics {
        public let width: Float64
        public let height: Float64
    }

**功能：** 文本的尺寸信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**let width**
    
    
    public let width: Float64

**功能：** 字符串的宽度，类型为double。

**类型：** Float64

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**let height**
    
    
    public let height: Float64

**功能：** 字符串的高度，类型为double。

**类型：** Float64

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]class CanvasGradient
    
    
    public class CanvasGradient {}

**功能：** 描述渐变的不透明对象，由createLinearGradient()或createRadialGradient()创建。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func addColorStop(Float64, ?ResourceColor)**
    
    
    public func addColorStop(offset: Float64, color: ?ResourceColor): Unit

**功能：** 向渐变中添加由偏移量和颜色定义的断点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
offset | Float64 | 是 | - | 0到1之间的值，超出范围会抛出INDEX_SIZE_ERR错误。  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 设置渐变颜色。  
  
#### 示例代码

#### [h2]示例1（使用CanvasRenderingContext2D中的方法）

该示例实现了如何在Canvas组件使用CanvasRenderingContext2D中的方法进行绘制。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        var settings: RenderingContextSettings = RenderingContextSettings(antialias: true)
        var context: CanvasRenderingContext2D = CanvasRenderingContext2D(this.settings)
    
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Center,
                justifyContent: FlexAlign.Center) {
                Canvas(this.context).width(100.percent).height(100.percent).backgroundColor(0xffff00).onReady(
                    {
                    => this.context.fillRect(0.0, 30.0, 100.0, 100.0)
                })
            }.width(100.percent).height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/c_jnGKPxTfSA_WcH1Th_7w/zh-cn_image_0000002743077907.png?HW-CC-KV=V1&HW-CC-Date=20260908T090151Z&HW-CC-Expire=86400&HW-CC-Sign=AFFBA9603F7F98E9572E7138925141903329E6EC5B7918417F0CC2D178511DFA)
