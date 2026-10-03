---
name: document/cn/harmonyos-guides/arkts-shadow-effect
title: 阴影
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-shadow-effect
---

# 阴影

阴影接口[shadow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#shadow)可以为当前组件添加阴影效果，该接口支持两种类型参数，开发者可配置[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect#shadowoptions对象说明)自定义阴影效果。ShadowOptions模式下，当color的透明度为0时，无阴影效果。
> 说明
>
> ShadowOptions的radius参数，在API版本26.0.0之前取值范围为[0, +∞)，设置的值为0时不绘制阴影(设置小于0的值时按值为0处理)；从API版本26.0.0开始取值范围变更为(-∞, +∞)，值小于0时不绘制阴影。

```TypeScript
@Entry
@Component
struct ShadowOptionDemo {
  build() {
    Row() {
      Column() {
        Column() {
          Text('shadowOption').fontSize(12)
        }
        .width(100)
        .aspectRatio(1)
        .margin(10)
        .justifyContent(FlexAlign.Center)
        .backgroundColor(Color.White)
        .borderRadius(20)
        .shadow({ radius: 10, color: Color.Gray })

        Column() {
          Text('shadowOption').fontSize(12)
        }
        .width(100)
        .aspectRatio(1)
        .margin(10)
        .justifyContent(FlexAlign.Center)
        .backgroundColor('#a8a888')
        .borderRadius(20)
        .shadow({
          radius: 10,
          color: Color.Gray,
          offsetX: 20,
          offsetY: 20
        })
      }
      .width('100%')
      .height('100%')
      .justifyContent(FlexAlign.Center)
    }
    .height('100%')
  }
}
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6/v3/lYyxZHppQwuEz27jvOeXHg/zh-cn_image_0000002779091525.png?HW-CC-KV=V1&HW-CC-Date=20260929T121655Z&HW-CC-Expire=31536000000&HW-CC-Sign=98061DCC4270D7078478BC259264CA94C7F85FF0C2861ACDCEBC54863FB1C8D5)

