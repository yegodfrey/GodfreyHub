---
name: cangjie-guides/cj-layout-development-create-looping
title: 创建轮播（Swiper）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-looping
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 创建轮播（Swiper）
---

# 创建轮播（Swiper）

[Swiper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper)组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。通常，在一些应用首页显示推荐的内容时，需要用到轮播显示的能力。

针对复杂页面场景，可以使用 Swiper 组件的预加载机制，利用主线程的空闲时间来提前构建和布局绘制组件，优化滑动体验。

#### 布局与约束

Swiper作为一个容器组件，如果设置了自身尺寸属性，则在轮播显示过程中均以该尺寸生效。如果自身尺寸属性未被设置，则分两种情况：如果设置了prevMargin或者nextMargin属性，则Swiper自身尺寸会跟随其父组件；如果未设置prevMargin或者nextMargin属性，则会自动根据子组件的大小设置自身的尺寸。

#### 循环播放

通过loop属性控制是否循环播放，该属性默认值为true。

当loop为true时，在显示第一页或最后一页时，可以继续往前切换到前一页或者往后切换到后一页。如果loop为false，则在第一页或最后一页时，无法继续向前或者向后切换页面。

  * loop为true
        
        Swiper() {
        Text('0')
          .width(90.percent)
          .height(100.percent)
          .backgroundColor(Color.Gray)
          .textAlign(TextAlign.Center)
          .fontSize(30)
        
        Text('1')
          .width(90.percent)
          .height(100.percent)
          .backgroundColor(Color.Green)
          .textAlign(TextAlign.Center)
          .fontSize(30)
        
        Text('2')
          .width(90.percent)
          .height(100.percent)
          .backgroundColor(0xFEC0CD)
          .textAlign(TextAlign.Center)
          .fontSize(30)
        }
        .width(100.percent)
        .height(30.percent)
        .loop(true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/9qQZtf8EQBiF_snPVnvxnw/zh-cn_image_0000002731378647.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=BCDA2D3085D116B9ECC0EA7F2E39FF8171C9636AF0B4C3314C2DBFC41B6E7AE6)

  * loop为false
        
        Swiper() {
          // ...
        }
        .width(100.percent)
        .height(30.percent)
        .loop(false)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/VquGS18tQPyxGBs_iqYlsA/zh-cn_image_0000002701819344.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=AE5A8519CE9B932698CC5532BBA37D2DA55C33AE17DC3AE6B22FDF30031A5EC5)




#### 自动轮播

Swiper通过设置autoPlay属性，控制是否自动轮播子组件。该属性默认值为false。

autoPlay为true时，会自动切换播放子组件，子组件与子组件之间的播放间隔通过interval属性设置。interval属性默认值为3000，单位毫秒。
    
    
    Swiper() {
      // ...
    }
    .loop(true)
    .autoPlay(true)
    .interval(1000)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/rEi8vu_5QcG18BQ2tRT2Jg/zh-cn_image_0000002731538625.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=718C44B492604E10D7B0BC297A440F955467889070701751C25906E07BC1FFD8)

#### 导航点样式

Swiper提供了默认的导航点样式和导航点箭头样式，导航点默认显示在Swiper下方居中位置，开发者也可以通过indicator属性自定义导航点的位置和样式，导航点箭头默认不显示。

通过indicator属性，开发者可以设置导航点相对于Swiper组件上下左右四个方位的位置，同时也可以设置每个导航点的尺寸、颜色、蒙层和被选中导航点的颜色。

  * 导航点使用默认样式
        
        Swiper() {
            Text('0')
            .width(90.percent)
            .height(100.percent)
            .backgroundColor(Color.Gray)
            .textAlign(TextAlign.Center)
            .fontSize(30)
        
            Text('1')
            .width(90.percent)
            .height(100.percent)
            .backgroundColor(Color.Green)
            .textAlign(TextAlign.Center)
            .fontSize(30)
        
            Text('2')
            .width(90.percent)
            .height(100.percent)
            .backgroundColor(0xFEC0CD)
            .textAlign(TextAlign.Center)
            .fontSize(30)
            }
            .width(100.percent)
            .height(30.percent)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/KuGJAReUSfKx0diVAWhsyQ/zh-cn_image_0000002701659434.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=FDB06B4C9E9A3E95EBBA963D53CB9E6805D4717DCC040D927FE5317AF62480D7)

  * 自定义导航点样式

导航点直径设为30.vp，左边距为0，导航点颜色设为红色。
        
        Swiper() {
          // ...
        }
        .width(100.percent)
        .height(30.percent)
        .indicator(
          Indicator.dot()
            .left(0)
            .itemWidth(13)
            .itemHeight(13)
            .selectedItemWidth(16)
            .selectedItemHeight(13)
            .color(0xED6F21)
            .selectedColor(0X007fff)
        )

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/02/v3/qHRQ4iZHT6uuUWCnnhqk1w/zh-cn_image_0000002731378649.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=26B0AE51009E9F66DB2B555CC53408A3F09AD0D2027DB72869C8112C6BFDB31F)




#### 页面切换方式

Swiper支持手指滑动和点击导航点两种方式切换页面，以下示例展示通过控制器切换页面的方法。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        private var swiperBackgroundColors: Array<Color> = [Color.Blue, Color.Black, Color.Gray, Color.Green, Color.White,
            Color.Red]
        private var swiperController: SwiperController = SwiperController();
        @State
        var animationModeStr: Bool = false
        @State
        var targetIndex: Int64 = 0
        func build() {
            Column(space: 5) {
                Swiper(controller: this.swiperController) {
                    ForEach(
                        this.swiperBackgroundColors,
                        itemGeneratorFunc: {
                            item: Color, index: Int64 => Text(index.toString())
                                .width(250)
                                .height(250)
                                .backgroundColor(item)
                                .textAlign(TextAlign.Center)
                                .fontSize(30)
                        }
                    )
                }.indicator(true)
    
                Row(space: 12) {
                    Button('showNext').onClick({
                        evt => this
                            .swiperController
                            .showNext(); // 通过controller切换到后一页
                    })
                    Button('showPrevious').onClick({
                        evt => this
                            .swiperController
                            .showPrevious(); // 通过controller切换到前一页
                    })
                }.margin(5)
                Row(space: 12) {
                    Text('Index:')
                    Button(this.targetIndex.toString()).onClick(
                        {
                            evt => this.targetIndex = (this.targetIndex + 1) % this.swiperBackgroundColors.toArray().size
                        })
                }
                .margin(5)
                Row(space:12) {
                    Text('AnimationMode:')
                    Button(this.animationModeStr.toString()).onClick(
                        {
                            evt => if (this.animationModeStr == false) {
                                this.animationModeStr = true
                            } else {
                                this.animationModeStr = false
                            }
                        })
                }
                .margin(5)
            }
                .width(100.percent)
                .margin(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/Mlej_NBLQw2GBxmrMl7RLw/zh-cn_image_0000002701819346.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=4FD2585368B384936FCDE7B415016EEB20E10B8396662938783C726841B75C35)

#### 轮播方向

Swiper支持水平和垂直方向上进行轮播，主要通过vertical属性控制。

当vertical为true时，表示在垂直方向上进行轮播；为false时，表示在水平方向上进行轮播。vertical默认值为false。

  * 设置水平方向上轮播。
        
        Swiper() {
          // ...
        }
        .indicator(true)
        .vertical(false)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/IUuN-XDXQqCXlhM0G-U0Iw/zh-cn_image_0000002731538627.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=3040873BBC6D24B85A5A93B55A6BF02BD77879E07B34D70BAB7BB5D3EBDF0032)

  * 设置垂直方向轮播。
        
        Swiper() {
          // ...
        }
        .indicator(true)
        .vertical(true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/nbFH6kTLTK26kQK3DdG9JQ/zh-cn_image_0000002701659436.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=0F9B600457D133D6FCA710263A86F69CF3D661C1FA19BDF6984A73CC6440AD83)




#### 每页显示多个子页面

Swiper支持在一个页面内同时显示多个子组件，通过[displayCount](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper#func-displaycountint32-bool)属性设置。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 5) {
                Swiper() {
                    Text('0')
                        .width(250)
                        .height(250)
                        .backgroundColor(Color.Gray)
                        .textAlign(TextAlign.Center)
                        .fontSize(30)
                    Text('1')
                        .width(250)
                        .height(250)
                        .backgroundColor(Color.Green)
                        .textAlign(TextAlign.Center)
                        .fontSize(30)
                    Text('2')
                        .width(250)
                        .height(250)
                        .backgroundColor(0xFEC0CD)
                        .textAlign(TextAlign.Center)
                        .fontSize(30)
                    Text('3')
                        .width(250)
                        .height(250)
                        .backgroundColor(Color.Blue)
                        .textAlign(TextAlign.Center)
                        .fontSize(30)
                }
                    .indicator(true)
                    .displayCount(2)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/XXQ42NJWTXeHs12dZz9Fow/zh-cn_image_0000002731378651.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=458372A8FB49C080BB7E6A4D5B2B3754ADC365955BA8457B5F141FAFED026AE5)
