---
name: document/cn/doc-references/drawing__brush_8h-0000001410245061
title: drawing_brush.h
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/drawing__brush_8h-0000001410245061
source: portal
---

# drawing_brush.h  
  
#### 概述

文件中定义了与画刷相关的功能函数。

**起始版本：**

8

**相关模块：**

[Drawing](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457)

#### 汇总

#### [h2]函数

函数名称 | 描述  
---|---  
[OH_Drawing_BrushCreate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga75e2193d23cf75878c7b2c78d6b23b35) (void) | 函数用于创建一个画刷对象  
[OH_Drawing_BrushDestroy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga9dc1d4aa465d06f2d847feddae1558b5) ([OH_Drawing_Brush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga178c83de4a084d35c30e4681319ea711) *) | 函数用于销毁画刷对象并回收该对象占有的内存。  
[OH_Drawing_BrushIsAntiAlias](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga4c861e23b8c0a3fb84d906d81bea5335) (const [OH_Drawing_Brush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga178c83de4a084d35c30e4681319ea711) *) | 函数用于获取画刷是否设置抗锯齿属性，如果为真则说明画刷会启用抗锯齿功能，在绘制图形时会对图形的边缘像素进行半透明的模糊处理  
[OH_Drawing_BrushSetAntiAlias](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga41735fc7a2776fbe41c77b3f4637e1c5) ([OH_Drawing_Brush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga178c83de4a084d35c30e4681319ea711) *, bool) | 函数用于设置画刷的抗锯齿属性，设置为真则画刷在绘制图形时会对图形的边缘像素进行半透明的模糊处理  
[OH_Drawing_BrushGetColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga29dc1e2442cea7e958a5e037c4cc9f59) (const [OH_Drawing_Brush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga178c83de4a084d35c30e4681319ea711) *) | 函数用于获取画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示  
[OH_Drawing_BrushSetColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga4b62aa574623c1a75e14f612a831531b) ([OH_Drawing_Brush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga178c83de4a084d35c30e4681319ea711) *, uint32_t color) | 函数用于设置画刷的颜色属性，颜色属性描述了画刷填充图形时使用的颜色，用一个32位（ARGB）的变量表示
