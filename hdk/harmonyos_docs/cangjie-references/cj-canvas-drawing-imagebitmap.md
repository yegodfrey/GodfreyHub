---
name: cangjie-references/cj-canvas-drawing-imagebitmap
title: ImageBitmap
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-imagebitmap
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 画布绘制 / ImageBitmap
---

# ImageBitmap  
  
ImageBitmap对象可以存储canvas渲染的像素数据。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class ImageBitmap
    
    
    public class ImageBitmap {
        public init(src: ?String)
    }

**功能：** ImageBitmap对象可以存储canvas渲染的像素数据。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop width
    
    
    public prop width: Float64

**功能：** ImageBitmap的像素宽度。默认单位为vp。

**类型：** Float64

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]prop height
    
    
    public prop height: Float64

**功能：** ImageBitmap的像素高度。默认单位为vp。

**类型：** Float64

**读写能力：** 只读

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?String)
    
    
    public init(src: ?String)

**功能：** 构造一个ImageBitmap类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | ?String | 是 | - | 图像对象的路径。
