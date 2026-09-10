---
name: cangjie-references/cj-canvas-drawing-canvaspattern
title: CanvasPattern
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvaspattern
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 画布绘制 / CanvasPattern
---

# CanvasPattern

一个Object对象，使用createPattern方法创建，通过指定图像和重复方式创建图片填充的模板。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class CanvasPattern
    
    
    public class CanvasPattern {}

**功能：** 一个Object对象，使用createPattern方法创建，通过指定图像和重复方式创建图片填充的模板。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func setTransform(?Matrix2D)
    
    
    public func setTransform(transform: ?Matrix2D): Unit

**功能：** 使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
transform | ?[Matrix2D](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-matrix2d#class-matrix2d) | 是 | - | 2D 变换矩阵。
