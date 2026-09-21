---
name: cangjie-practices/multipleimage
title: 使用Swiper组件实现轮播图
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/multipleimage
nodePath: 实践 / 使用Swiper组件实现轮播图
---

# 使用Swiper组件实现轮播图

#### 概述

在各类应用和网站中，轮播图的使用非常广泛，它在信息展示和用户交互方面扮演着重要角色。轮播图不仅能在有限的屏幕区域内展示更多内容，还能有效地将关键的信息传递给用户。在开发应用或网站时，可以通过轮播图优先展示重要内容，次要内容则随后呈现，从而提升用户体验。

本文将通过以下场景介绍如何使用Swiper组件实现轮播效果。

使用Swiper实现图文作品合集：图文作品合集由图片和文字组合而成，通过Swiper组件来动态展示图片，实现图片的轮播效果。

#### 使用Swiper实现图文作品合集

#### [h2]场景描述

在一些短视频平台上，经常能看到由图片和文字组合而成的作品集。这些作品集通常由多张图片构成，支持自动轮播。当作品自动播放时，图片会每隔几秒自动切换到下一张，且下方的进度条进度与每张图片的停留时间相匹配。效果如图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/umsNlskqTzCpRvqWTdtxgQ/zh-cn_image_0000002669680999.gif?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=ABD4D15B4E5186FCBECEE27734BE547ED699932B785EAE683045D967509EE4FD)

#### [h2]实现原理

图文作品轮播可以通过Swiper组件及其指示器的联动效果来实现。由于Swiper组件的指示器不可自定义，因此需要分开实现。

图片区域需要使用[Swiper](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-looping)组件来实现。将图片合集的数据传入Swiper组件后，需要对Swiper组件设置一些属性，来完成图片自动轮播效果。

  1. 通过设置[loop](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper#func-loopbool)属性控制是否循环播放，该属性默认值为true。当loop为true时，在显示第一页或最后一页时，可以继续往前切换到前一页或者往后切换到后一页。如果loop为false，则在第一页或最后一页时，无法继续向前或者向后切换页面。

  2. 通过设置[autoPlay](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper#func-autoplaybool)属性，控制是否自动轮播子组件。该属性默认值为false。autoPlay为true时，会自动切换播放子组件。

  3. 通过设置[interval](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper#func-intervaluint32)属性，控制子组件与子组件之间的播放间隔。interval属性默认值为3000，单位毫秒。

  4. 通过设置[indicator](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper#func-indicatorbool)属性为false，来关闭Swiper组件自带的导航点指示器样式。




底部导航点（进度条）有三种样式：未完成状态的样式、已完成状态的样式和正在进行进度增长的样式。

  1. 进度条布局：开发者可以使用[层叠布局 (Stack)](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-stack-layout)，配合Row容器来实现进度条的布局。
  2. 图文播放时间与进度条匹配：要实现进度条缓慢增长至完成状态且用时与图片播放时间相匹配的效果，可以给Row容器组件添加[属性动画 (animation)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-animation)，设置duration（动画持续时间）与图片播放时间匹配即可。
  3. 进度条状态切换：通过比较当前图片的currentIndex与进度条的index，当currentIndex大于index时，应将进度条样式设置为已完成状态；反之，则设置为未完成状态。可以通过将进度条的背景颜色设置为Color.White或Color.Grey来实现这两种状态的切换。



#### [h2]开发步骤

  1. 为Swiper组件设置loop、autoPlay、interval和indicator属性。图片每3秒会进行一次切换，并且自动进行轮播。
         
         Swiper(controller: this.swiperController) {
             LazyForEach(this.data, itemGeneratorFunc: {
                 item: PhotoData, index: Int64 => Image(item.imageResource)
                     .width(CommonConstants.FULL_PERCENT)
                     .height(CommonConstants.FULL_PERCENT)
             })
         }
             .loop(true)
             .autoPlay(true)
             .interval(3000)
             .indicator(false)

示意效果如下图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/4qjBjGP6RDitUMzFc1PDOw/zh-cn_image_0000002669560887.gif?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=F29FDB33F5CF553514B842ABF857C98B4002D8016E91EF9FC26C85ACAC945B93)

  2. 创建进度条自定义组件progressComponent。代码中，this.progressData为图片集合的数组，this.currentIndex为当前播放的图片在图片集合数组中的索引，index为进度条对应的图片在图片集合数组中的索引。当this.currentIndex > index时，表示图片集合数组中索引0-index的进度条都是已完成状态。
         
         @Builder
         func progressComponent() {
             Row(space: 5) {
                 ForEach(this.progressData, itemGeneratorFunc: {
                     item: PhotoData, index: Int64 => Stack(alignContent: Alignment.Start) {
                         // Use the cascading component to stack progress bars of different styles together
                         Row()
                             .zIndex(CommonConstants.Z_INDEX_0)
                             .width(CommonConstants.FULL_PERCENT)
                             .height(2)
                             .borderRadius(@r(app.float.row_borderRadius))
                             .backgroundColor(Color.Gray)
         
                         Row()
                             .zIndex(CommonConstants.Z_INDEX_1)
                             .width(if (this.currentIndex == index) {
                                 CommonConstants.FULL_PERCENT
                             } else {
                                 CommonConstants.NONE_PERCENT
                             })
                             .height(2)
                             .borderRadius(2)
                             .backgroundColor(Color.White)
                             // Add a growth animation to the progress bar
                             .animationStart(
                                 AnimateParam(duration: if (this.currentIndex == index) {
                                         this.duration
                                     } else {
                                         0
                                     }, curve: Curve.Linear, iterations: 1, playMode: PlayMode.Normal))
         
                         Row()
                             .zIndex(CommonConstants.Z_INDEX_2)
                             .width(if (this.currentIndex > index) {
                                 CommonConstants.FULL_PERCENT
                             } else {
                                 CommonConstants.NONE_PERCENT
                             })
                             .height(2)
                             .borderRadius(@r(app.float.row_borderRadius))
                             .backgroundColor(Color.White)
                     }.layoutWeight(1)
                 })
             }
                 .width(CommonConstants.FULL_PERCENT)
                 .height(50)
         }

示意效果如下图所示。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/GizL5nMnT5qsq6J8LKfJGQ/zh-cn_image_0000002639680938.gif?HW-CC-KV=V1&HW-CC-Date=20260921T085428Z&HW-CC-Expire=86400&HW-CC-Sign=1E64702AA36D9DD9883F066F7C02D191E77123C130D16FACD4B3066AFCD3D2A0)




#### 示例代码

[使用Swiper组件实现轮播图示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183054.61281472229706968767429344437648:20260922165428:2800:B4CD5936AF9D9D4FF4056F327AF7FC78BE7EED1A8908CC022AC5ECC525757015.zip?needInitFileName=true)
