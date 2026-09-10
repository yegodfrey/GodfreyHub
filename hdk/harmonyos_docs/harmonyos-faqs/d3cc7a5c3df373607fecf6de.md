---
name: document/cn/harmonyos-faqs/faqs-arkui-1192
title: 如何解决linearGradient渐变到透明时出现黑色的问题
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-1192
---

# 如何解决linearGradient渐变到透明时出现黑色的问题

#### 问题现象

使用linearGradient实现渐变色，颜色渐变成透明，但不符合预期，比如中间会出现黑色，问题代码如下：

```
@Entry
@Component
struct LinearGradientDemo {
  build() {
    Column({ space: 5 }) {
      Row()
        .width('calc(100% - 32vp)')
        .height(150)
        .margin({
          left: 16,
          right: 16
        })
        .linearGradient({
          direction: GradientDirection.Bottom,
          colors: [['#0A59F7', 0], [Color.Transparent, 1]]
        })
    }
    .width('100%')
    .height('100%')
  }
}
```

问题现象如下：

![](https://media:101782461606419066 "点击放大")  

#### 背景知识

[linearGradient](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-gradient-color#lineargradient)：设置组件的颜色线性渐变效果。

[Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-appendix-enums#color)：颜色枚举说明，其中Transparent的值为rgba(0,0,0,0)，'#00FFFFFF'表示全透明白色。  

#### 解决方案

Color.Transparent的值为rgba(0,0,0,0)，相当于完全透明的黑色，颜色从'#0A59F7'到Color.Transparent，过程中趋近黑色，所以渐变到透明的中间有黑色，将渐变颜色改成值为'#00FFFFFF'的全透明白色即可，实现代码如下：

```
@Entry
@Component
struct LinearGradientDemo {
  build() {
    Column({ space: 5 }) {
      Row()
        .width('calc(100% - 32vp)')
        .height(150)
        .margin({
          left: 16,
          right: 16
        })
        .linearGradient({
          direction: GradientDirection.Bottom,
          colors: [['#0A59F7', 0], [Color.Transparent, 1]]
        })
      Row()
        .width('calc(100% - 32vp)')
        .height(150)
        .margin({
          left: 16,
          right: 16
        })
        .linearGradient({
          direction: GradientDirection.Bottom,
          colors: [['#0A59F7', 0], ['#00FFFFFF', 1]]
        })
    }
    .width('100%')
    .height('100%')
  }
}
```

效果图如下，第二个渐变色中间无黑色。

![](https://media:101782461606509067 "点击放大")  

#### 常见FAQ

Q：使用linearGradient设置渐变颜色时，若渐变颜色设置为白色，如colors: \[\['#194B63FF', 0\], \['#FFFFFF', 1\]\]，颜色由浅变深最后渐变成白色，不符合预期。

A：将白色设置透明度，可避免颜色由浅变深最后渐变成白色的情况，如colors: \[\['#194B63FF', 0\], \['#00FFFFFF', 1\]\]。  
