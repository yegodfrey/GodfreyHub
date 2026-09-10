---
name: document/cn/graphics-References/blendfactor-0000001050188016
title: BlendFactor
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/blendfactor-0000001050188016
---

# BlendFactor

|Enum Info|
|:--------|
|混合因子类型枚举。|

#### Enum Value Summary

|Enum Value and Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|BLEND_ZERO RGB通道混合因子为（0，0，0），Alpha通道系数为0。|
|BLEND_ONE RGB通道混合因子为（1，1，1），Alpha通道系数为1。|
|BLEND_SRC_COLOR RGB通道混合因子为（片段着色器第一个颜色输出的R通道值，片段着色器第一个颜色输出的G通道值，片段着色器第一个颜色输出的B通道值），Alpha通道混合因子为片段着色器第一个颜色输出的Alpha通道值。|
|BLEND_ONE_MINUS_SRC_COLOR RGB通道混合因子为（1,1,1）-（片段着色器第一个颜色输出的R通道值，片段着色器第一个颜色输出的G通道值，片段着色器第一个颜色输出的B通道值），Alpha通道混合因子为 1-片段着色器第一个颜色输出的Alpha通道值。|
|BLEND_DST_COLOR RGB通道混合因子为（目标颜色的R通道值，目标颜色的G通道值，目标颜色的B通道值），Alpha通道混合因子为目标颜色的Alpha通道值。|
|BLEND_ONE_MINUS_DST_COLOR RGB通道混合因子为（1,1,1）-（目标颜色的R通道值，目标颜色的G通道值，目标颜色的B通道值），Alpha通道混合因子为 1-目标颜色的Alpha通道值。|
|BLEND_SRC_ALPHA RGB通道混合因子为（片段着色器第一个颜色输出的Alpha通道值，片段着色器第一个颜色输出的Alpha通道值，片段着色器第一个颜色输出的Alpha通道值），Alpha通道混合因子为片段着色器第一个颜色输出的Alpha通道值。|
|BLEND_ONE_MINUS_SRC_ALPHA RGB通道混合因子为（1,1,1）-（片段着色器第一个颜色输出的Alpha通道值，片段着色器第一个颜色输出的Alpha通道值，片段着色器第一个颜色输出的Alpha通道值），Alpha通道混合因子为 1-片段着色器第一个颜色输出的Alpha通道值。|
|BLEND_DST_ALPHA RGB通道混合因子为（目标颜色的Alpha通道值，目标颜色的Alpha通道值，目标颜色的Alpha通道值），Alpha通道混合因子为目标颜色的Alpha通道值。|
|BLEND_ONE_MINUS_DST_ALPHA RGB通道混合因子为（1,1,1）-（目标颜色的Alpha通道值，目标颜色的Alpha通道值，目标颜色的Alpha通道值），Alpha通道混合因子为1-目标颜色的Alpha通道值。|
|BLEND_CONSTANT_COLOR RGB通道混合因子为（常量R通道值，常量G通道值，常量B通道值），Alpha通道混合因子为常量Alpha通道值。|
|BLEND_ONE_MINUS_CONSTANT_COLOR RGB通道混合因子为（1,1,1）-（常量R通道值，常量G通道值，常量B通道值），Alpha通道混合因子为1-常量Alpha通道值。|
|BLEND_CONSTANT_ALPHA RGB通道混合因子为（常量Alpha通道值，常量Alpha通道值，常量Alpha通道值），Alpha通道混合因子为常量Alpha通道值。|
|BLEND_ONE_MINUS_CONSTANT_ALPHA RGB通道混合因子为（1,1,1）-（常量Alpha通道值，常量Alpha通道值，常量Alpha通道值），Alpha通道混合因子为1-常量Alpha通道值。|

