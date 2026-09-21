---
name: document/cn/graphics-References/rasterizationstate-0000001397201533
title: RasterizationState
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/rasterizationstate-0000001397201533
---

# RasterizationState

|Struct Info|
|:------------------------------------|
|struct RasterizationState 管线的光栅化参数信息。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:----------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------|
|bool|depthClampEnable 是否截断近平面和远平面之外的像素到近平面和远平面上，默认关闭。|
|bool|rasterizerDiscardEnable 是否禁止一切片段输出到帧缓冲，默认关闭。|
|[FillMode](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/fillmode-0000001050188010)|polygonMode 指定几何图元的模式，默认值为FILL_MODE_FILL。|
|[CullMode](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/cullmode-0000001050430217)|cullmode 使用的表面剔除类型，默认值为CULL_MODE_BACK。|
|[FrontFace](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/frontface-0000001050295484)|frontFace 指定顺时针的顶点序是正面还是逆时针的顶点序是正面，默认值为FRONT_FACE_COUNTER_CLOCKWISE。|
|bool|depthBiasEnable 控制是否对片段深度值进行偏移，默认关闭。|
|[f32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906)|depthBiasConstantFactor 添加到每个片段深度值的偏移量，默认值为0.0f。|
|[f32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906)|depthBiasClamp 片段的最大深度值偏移，默认值为0.0f。|
|[f32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906)|depthBiasSlopeFactor 片段深度值斜率偏移因子，默认值为0.0f。|
|[f32](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/type-alias-summary-0000001050286906)|lineWidth 指定光栅化后的线段宽度，默认值为1.0f。|
|std::size_t|hash RasterizationState结构体的hash值，内部使用，不需要用户赋值。|

