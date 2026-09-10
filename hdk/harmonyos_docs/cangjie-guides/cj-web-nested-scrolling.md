---
name: cangjie-guides/cj-web-nested-scrolling
title: Web组件嵌套滚动
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-web-nested-scrolling
nodePath: 应用框架 / ArkWeb（方舟Web） / 管理网页交互 / Web组件嵌套滚动
---

# Web组件嵌套滚动

Web组件嵌套滚动的典型应用场景为，在一个页面中，有多个独立的区域需要进行滚动，当用户滚动Web区域内容时，可带动其他滚动区域进行滚动，以达到上下滑动页面的用户体验。

内嵌在可滚动容器（[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)、[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)中的Web组件，接收到滑动手势事件，需要对接ArkUI框架的[NestedScrollMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-nestedscrollmode)枚举类型，使得Web组件可以嵌套ArkUI可滚动容器，进行嵌套滚动。开发者可以在Web组件创建时，使用[nestedScroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web#func-nestedscrollnestedscrollmode-nestedscrollmode)属性接口指定默认的嵌套滚动模式，也允许在过程中动态改变嵌套滚动的模式。

nestedScroll有两个入参，分别为scrollForward和scrollBackward，均为[NestedScrollMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-nestedscrollmode)枚举类型。

当Web组件被多个可滚动容器组件嵌套时，未被Web组件消费的与父组件方向一致的偏移量、速度值将被传递给距Web组件最近且方向一致的父组件，使得父组件可以继续滚动。一次手势滑动只能沿X轴或Y轴一个方向嵌套滚动，当手势斜向滑动时，滚动方向为偏移量或速度在X轴、Y轴绝对值较大的方向；当偏移量或速度绝对值在X轴、Y轴绝对值相同时，滚动方向为距Web组件最近的可滚动组件的方向。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/op56O7t5Rnu6Q1cj1BAXxw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090123Z&HW-CC-Expire=86400&HW-CC-Sign=0299D56097E04C159691B874DABD5427B646AE8BDB98973BE658EE3DBCC9DD9F)

  * 支持嵌套滚动的容器：[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)、[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)、[Swiper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-swiper)、[Tabs](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs)、[Refresh](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-refresh)、[bindSheet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition)。
  * 支持嵌套滚动的输入事件：使用手势、鼠标、触控板。


    
    
    // index.cj
    import ohos.arkui.state_macro_manage.*
    import ohos.web.webview.WebviewController
    import kit.ArkUI.*
    
    @Entry
    @Component
    class EntryView {
        var scrollerForScroll: Scroller = Scroller()
        let controller = WebviewController()
        let controller2 = WebviewController()
        // NestedScrollMode设置成SelfOnly时，Web网页滚动到页面边缘后，不与父组件联动，父组件仍无法滚动。
        @State
        var nestedScrollMode0: NestedScrollMode = NestedScrollMode.SelfOnly
        // NestedScrollMode设置成SelfFirst时，Web网页滚动到页面边缘后，父组件继续滚动。
        @State
        var nestedScrollMode1: NestedScrollMode = NestedScrollMode.SelfFirst
        // NestedScrollMode设置为ParentFirst时，父组件先滚动，滚动至边缘后通知Web继续滚动。
        @State
        var nestedScrollMode2: NestedScrollMode = NestedScrollMode.ParentFirst
        // NestedScrollMode设置为Parallel时，父组件与Web同时滚动。
        @State
        var nestedScrollMode3: NestedScrollMode = NestedScrollMode.Parallel
        @State
        var nestedScrollModeF: NestedScrollMode = NestedScrollMode.SelfFirst
        @State
        var nestedScrollModeB: NestedScrollMode = NestedScrollMode.SelfFirst
        // scroll竖向的滚动
        @State
        var scrollDirection: ScrollDirection = ScrollDirection.Vertical
    
        func build() {
            Flex() {
                Scroll(this.scrollerForScroll) {
                    Column(space: 5) {
                        Row() {
                            Text('切换前滚动模式').fontSize(5)
                            Button("SelfOnly").onClick ({ evt =>
                                this.nestedScrollModeF = this.nestedScrollMode0
                            }).fontSize(5)
                            Button("SelfFirst").onClick ({ evt =>
                                this.nestedScrollModeF = this.nestedScrollMode1
                            }).fontSize(5)
                            Button("ParentFirst").onClick ({ evt =>
                                this.nestedScrollModeF = this.nestedScrollMode2
                            }).fontSize(5)
                            Button("Parallel").onClick ({ evt =>
                                this.nestedScrollModeF = this.nestedScrollMode3
                            }).fontSize(5)
                        }
                        Row() {
                            Text('切换后滚动模式').fontSize(5)
                            Button("SelfOnly").onClick ({ evt =>
                                this.nestedScrollModeB = this.nestedScrollMode0
                            }).fontSize(5)
                            Button("SelfFirst").onClick ({ evt =>
                                this.nestedScrollModeB = this.nestedScrollMode1
                            }).fontSize(5)
                            Button("ParentFirst").onClick ({ evt =>
                                this.nestedScrollModeB = this.nestedScrollMode2
                            }).fontSize(5)
                            Button("Parallel").onClick ({ evt =>
                                this.nestedScrollModeB = this.nestedScrollMode3
                            }).fontSize(5)
                        }
                        Text('当前内嵌前滚动模式 scrollForward ---nestedScrollModeF').fontSize(10)
                        Text('当前内嵌后滚动模式  scrollBackward ---nestedScrollModeB').fontSize(10)
                        Text("Scroll Area")
                            .width(100.percent)
                            .height(10.percent)
                            .backgroundColor(0X330000FF)
                            .fontSize(16)
                            .textAlign(TextAlign.Center)
                        Text("Scroll Area")
                            .width(100.percent)
                            .height(10.percent)
                            .backgroundColor(0X330000FF)
                            .fontSize(16)
                            .textAlign(TextAlign.Center)
                        Text("Scroll Area")
                            .width(100.percent)
                            .height(10.percent)
                            .backgroundColor(0X330000FF)
                            .fontSize(16)
                            .textAlign(TextAlign.Center)
                        // src改为有效地址或者资源文件
                        Web(src: "www.example.com", controller: this.controller)
                            .nestedScroll(
                                scrollForward: this.nestedScrollModeF,
                                scrollBackward: this.nestedScrollModeB
                            )
                            .height(40.percent)
                            .width(100.percent)
    
                        Text("Scroll Area")
                            .width(100.percent)
                            .height(20.percent)
                            .backgroundColor(0X330000FF)
                            .fontSize(16)
                            .textAlign(TextAlign.Center)
                        Text("Scroll Area")
                            .width(100.percent)
                            .height(20.percent)
                            .backgroundColor(0X330000FF)
                            .fontSize(16)
                            .textAlign(TextAlign.Center)
                        // src改为有效地址或者资源文件
                        Web(src: "www.example.com", controller: this.controller2)
                            .nestedScroll(
                                scrollForward: this.nestedScrollModeF,
                                scrollBackward: this.nestedScrollModeB
                            )
                            .height(40.percent)
                            .width(90.percent)
                        Text("Scroll Area")
                            .width(100.percent)
                            .height(20.percent)
                            .backgroundColor(0X330000FF)
                            .fontSize(16)
                            .textAlign(TextAlign.Center)
                    }.width(95.percent).border( width: 5 )
                }.width(100.percent).height(120.percent).border(width: 5).scrollable(this.scrollDirection)
            }.width(100.percent).height(100.percent).backgroundColor(0xDCDCDC).padding(20)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/X2rbBguCTXGLvLtIQOlhpA/zh-cn_image_0000002713398842.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090123Z&HW-CC-Expire=86400&HW-CC-Sign=3EC8C43653C2927FF2211350D3F29782D34C122787E5764CABF24134FB6F8725)
