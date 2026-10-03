---
name: document/cn/harmonyos-faqs/faqs-arkui-575
title: ImageSpan使用场景
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-575
---

# ImageSpan使用场景

## 问题现象

如何实现下图中的追加评论效果？

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/q-rZSLXGR0-dZgSnfG2Tpg/zh-cn_image_0000002658791437.png?HW-CC-KV=V1&HW-CC-Date=20260929T074338Z&HW-CC-Expire=31536000000&HW-CC-Sign=9667FA27DD7EE24CA1D7A1EBF1662DB557E1FC37CBFF14F36A608BE2F08FA628 "点击放大")

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/GdwJ2MLkSPaoVqW41lMWew/zh-cn_image_0000002628552050.gif?HW-CC-KV=V1&HW-CC-Date=20260929T074338Z&HW-CC-Expire=31536000000&HW-CC-Sign=D967787BD5DAFABFC3B333B2506F489F149E921FC4DDA21E7088FDD157A275EF "点击放大")

## 背景知识

* [Span](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-span)：作为Text、ContainerSpan组件的子组件，用于显示行内文本的组件。
* [ImageSpan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-imagespan)：Text、ContainerSpan组件的子组件，用于显示行内图片。

## 解决方案

将图片换成镂空图，ImageSpan使用margin属性调整位置。

```screen
@Entry
@Component
struct ImageSpanExample {
  content: string = '到了绿湖底部，面上神色一动。';

  build() {
    Column() {
      Text() {
        Span("\n" + this.content)
          .fontSize(20)
        Span('  11  ')
        ImageSpan($r('app.media.startIcon'))  // 需开发者换成镂空的图
          .width('26vp')
          .height('26vp')
          .margin({ left: -27, bottom: -2 })
      }
    }
    .width('100%')
    .height('100%')
  }
}
```

