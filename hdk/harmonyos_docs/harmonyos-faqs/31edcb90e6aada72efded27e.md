---
name: document/cn/harmonyos-faqs/faqs-arkui-575
title: ImageSpan使用场景
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-575
---

# ImageSpan使用场景

## 问题现象

如何实现下图中的追加评论效果？

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/q-rZSLXGR0-dZgSnfG2Tpg/zh-cn_image_0000002658791437.png?HW-CC-KV=V1&HW-CC-Date=20260920T114741Z&HW-CC-Expire=31536000000&HW-CC-Sign=7A499A8C7D0BB75DD1B328D33BB99DC02ABEC5D97BA847154B2A1E35D412B440 "点击放大")

## 效果预览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/GdwJ2MLkSPaoVqW41lMWew/zh-cn_image_0000002628552050.gif?HW-CC-KV=V1&HW-CC-Date=20260920T114741Z&HW-CC-Expire=31536000000&HW-CC-Sign=5F38A4C41F79B15C73BA504AD283F557CF8617C835A45BC1177CF8FFD33BB774 "点击放大")

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

