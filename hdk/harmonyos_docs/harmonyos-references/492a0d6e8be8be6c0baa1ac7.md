---
name: document/cn/harmonyos-references/js-components-svg-circle
title: circle
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-circle
---

# circle

> phone 12+ | 2in1 13+ | tablet 12+ | tv 19+ | wearable 18+

> 说明
>
> 该组件从API version 7开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

圆形形状。

## 权限列表

无

## 子组件

支持[animate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animate)、[animateMotion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatemotion)、[animateTransform](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-animatetransform)。

## 属性

支持Svg组件[通用属性](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-svg-common-attributes)和以下属性。

|名称|类型|默认值|必填|描述|
|:-|:--------------------|:--|:-|:----------------|
|id|string|-|否|组件的唯一标识。|
|cx|<length>|<percentage>|0|否|设置圆心的x轴坐标。支持属性动画。|
|cy|<length>|<percentage>|0|否|设置圆心的y轴坐标。支持属性动画。|
|r|<length>|<percentage>|0|否|设置圆的半径。支持属性动画。|

## 示例

```html
<!-- xxx.hml -->
<div class="container">
  <svg fill="white" width="400" height="400">
    <circle cx="60" cy="200" r="50" stroke-width="4" fill="red" stroke="blue"></circle>
    <circle cx="180" cy="200" r="50" stroke-width="10" stroke="red" stroke-dasharray="10 5" stroke-dashoffset="3"></circle>
  </svg>
</div>
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/xufJp1tFTCCZ8GU7MSa3tg/zh-cn_image_0000002749495248.png?HW-CC-KV=V1&HW-CC-Date=20260929T121737Z&HW-CC-Expire=31536000000&HW-CC-Sign=C66F5785DBB1D2C0B26DF068BF6BE669A2DDF492808DD12A5F33464A36DCFCAA)

