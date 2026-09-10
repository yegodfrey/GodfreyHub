---
name: cangjie-references/cj-canvas-drawing-matrix2d
title: Matrix2D
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-matrix2d
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 画布绘制 / Matrix2D
---

# Matrix2D

矩阵对象，可以对矩阵进行缩放、旋转、平移等变换。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class Matrix2D
    
    
    public class Matrix2D {
        public init(unit!: ?LengthMetricsUnit = None)
    }

**功能：** 2D变换矩阵，支持对X轴和Y轴进行旋转、平移和缩放

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?LengthMetricsUnit)
    
    
    public init(unit!: ?LengthMetricsUnit = None)

**功能：** 创建Matrix2D类型的矩阵对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
unit | ?[LengthMetricsUnit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-lengthmetricsunit) | 否 | None | **命名参数。** 用来配置Matrix2D对象的单位模式，配置后无法动态更改，配置方法同[CanvasRenderingContext2D](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvasrenderingcontext2d#class-canvasrenderingcontext2d)。  
  
#### [h2]prop scaleX
    
    
    public mut prop scaleX: ?Float64

**功能：** 水平缩放。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop scaleY
    
    
    public mut prop scaleY: ?Float64

**功能：** 垂直缩放系数。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop rotateX
    
    
    public mut prop rotateX: ?Float64

**功能：** 水平倾斜系数。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop rotateY
    
    
    public mut prop rotateY: ?Float64

**功能：** 垂直倾斜系数。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop translateX
    
    
    public mut prop translateX: ?Float64

**功能：** 水平移动。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop translateY
    
    
    public mut prop translateY: ?Float64

**功能：** 垂直平移距离。默认单位：vp。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func identity()
    
    
    public func identity(): This

**功能：** 创建一个单位矩阵。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func invert()
    
    
    public func invert(): This

**功能：** 得到当前矩阵的逆矩阵。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func rotate(?Float64, ?Float64, ?Float64)
    
    
    public func rotate(degree: ?Float64, rx!: ?Float64 = None, ry!: ?Float64 = None): This

**功能：** 以旋转点为中心，对当前矩阵进行右乘旋转运算。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
degree | ?Float64 | 是 | - | 旋转角度。顺时针方向为正角度，可以通过 degree * Math.PI / 180 将角度转换为弧度值。默认单位：弧度。  
rx | ?Float64 | 否 | None | **命名参数。** 旋转点的水平方向坐标。默认单位：vp。  
ry | ?Float64 | 否 | None | **命名参数。** 旋转点的垂直方向坐标。默认单位：vp。  
  
#### [h2]func translate(?Float64, ?Float64)
    
    
    public func translate(tx!: ?Float64 = None, ty!: ?Float64 = None): This

**功能：** 对当前矩阵进行左乘平移运算。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
tx | ?Float64 | 否 | None | **命名参数。** 水平方向平移距离。默认单位：vp。  
ty | ?Float64 | 否 | None | **命名参数。** 垂直方向平移距离。默认单位：vp。  
  
#### [h2]func scale(?Float64, ?Float64)
    
    
    public func scale(sx!: ?Float64 = None, sy!: ?Float64 = None): This

**功能：** 对当前矩阵进行右乘缩放运算。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
sx | ?Float64 | 否 | None | **命名参数。** 水平缩放比例系数。  
sy | ?Float64 | 否 | None | **命名参数。** 垂直缩放比例系数。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        private let settings: RenderingContextSettings = RenderingContextSettings(antialias: true)
        private let context1: CanvasRenderingContext2D = CanvasRenderingContext2D(this.settings)
        private let matrix: Matrix2D = Matrix2D()
    
        func build() {
            Row {
                Canvas(this.context1)
                    .width(240.vp)
                    .height(180.vp)
                    .backgroundColor(0xffff00)
                    .onReady(
                        {
                            =>
                            this.context1.fillRect(100.0, 20.0, 50.0, 50.0)
                            this.matrix.scaleX = 1.0
                            this.matrix.scaleY = 1.0
                            this.matrix.rotateX = -0.5
                            this.matrix.rotateY = 0.5
                            this.matrix.translateX = 10.0
                            this.matrix.translateY = 10.0
                            this.context1.setTransform(this.matrix)
                            this.context1.fillRect(100.0, 20.0, 50.0, 50.0)
                        }
                    )
            }
                .height(100.percent)
                .width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/pTYccfSaTlqgy1f8CRZpMg/zh-cn_image_0000002701819580.png?HW-CC-KV=V1&HW-CC-Date=20260903T111643Z&HW-CC-Expire=86400&HW-CC-Sign=48D786BD7209EA67015C94DC22B513703921C96EB5519943831C7DF2EADD7B87)
