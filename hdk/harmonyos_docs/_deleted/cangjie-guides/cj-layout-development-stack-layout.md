---
name: cangjie-guides/cj-layout-development-stack-layout
title: 层叠布局（Stack）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-stack-layout
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 层叠布局（Stack）
---

# 层叠布局（Stack）

#### 概述

层叠布局（StackLayout）用于在屏幕上预留一块区域来显示组件中的元素，提供元素可以重叠的布局。层叠布局通过[Stack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-stack)容器组件实现位置的固定定位与层叠，容器中的子元素依次入栈，后一个子元素覆盖前一个子元素，子元素可以叠加，也可以设置位置。

层叠布局具有较强的页面层叠、位置定位能力，其使用场景有广告、卡片层叠效果等。

如图1，Stack作为容器，容器内的子元素的顺序为Item1->Item2->Item3。

**图1** 层叠布局

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/Fwtz4qY_SpWY_rgSbi7KRQ/zh-cn_image_0000002731378603.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=D1070A38E6EDE64521BB9C7AB2A835CE4796EFF38B554C4D09C7590F27D9859F)

#### 开发布局

Stack组件为容器组件，容器内可包含各种子元素。其中子元素默认进行居中堆叠。子元素被约束在Stack下，进行样式定义以及排列。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Stack() {
                    Column() {}
                        .width(90.percent)
                        .height(100.percent)
                        .backgroundColor(0xC7C7CC)
                    Text('text')
                        .width(60.percent)
                        .height(60.percent)
                        .backgroundColor(0xD1D1D6)
                    Button('button')
                        .width(30.percent)
                        .height(30.percent)
                        .backgroundColor(0x0A9F7)
                        .fontColor(0x000)
                }
                    .width(100.percent)
                    .height(150)
                    .margin(top: 50)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/XaKYAGlSRQae9ALLy-1uEQ/zh-cn_image_0000002701819300.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=BB454277D7FFE046C5CD597AE69E78623B4275B290F54429BA1BD232B93FE11F)

#### 对齐方式

Stack组件通过[alignContent参数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-stack#func-aligncontentalignment)实现位置的相对移动。如图2所示，支持九种对齐方式。

**图2** Stack容器内元素的对齐方式

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/fR87QumKS0GB_B-E666RRw/zh-cn_image_0000002731538581.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=A63247EE02F795D1E692316318DF2CBED16D33191BD65F549EF14C9FF3EA4A3A)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Stack(alignContent: Alignment.TopStart) {
                Text('Stack')
                    .width(90.percent)
                    .height(100.percent)
                    .backgroundColor(0xe1dede)
                    .align(Alignment.BottomEnd)
                Text('Item 1')
                    .width(70.percent)
                    .height(80.percent)
                    .backgroundColor(0xd2cab3)
                    .align(Alignment.BottomEnd)
                Text('Item 2')
                    .width(50.percent)
                    .height(60.percent)
                    .backgroundColor(0xc1cbac)
                    .align(Alignment.BottomEnd)
            }
                .width(100.percent)
                .height(150)
                .margin(top: 5)
        }
    }

#### Z序控制

Stack容器中兄弟组件显示层级关系可以通过[Z序控制](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-zorder)的zIndex属性改变。zIndex值越大，显示层级越高，即zIndex值大的组件会覆盖在zIndex值小的组件上方。

在层叠布局中，如果后面子元素尺寸大于前面子元素尺寸，则前面子元素完全隐藏。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Stack(alignContent: Alignment.BottomStart) {
                Column() {
                    Text('Stack子元素1')
                        .textAlign(TextAlign.End)
                        .fontSize(20)
                }
                    .width(100)
                    .height(100)
                    .backgroundColor(0xffd306)
    
                Column() {
                    Text('Stack子元素2').fontSize(20)
                }
                    .width(150)
                    .height(150)
                    .backgroundColor(0xFEC0CD)
    
                Column() {
                    Text('Stack子元素3').fontSize(20)
                }
                    .width(200)
                    .height(200)
                    .backgroundColor(Color.Gray)
            }
                .width(350)
                .height(350)
                .backgroundColor(0xe0e0e0)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/4cUZbcbsTWOWzUlOskPQFA/zh-cn_image_0000002701659390.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2E27AF3928F90D1BE6B16FBCE67C23D869F9A85EBECBF393D0DFC29193C15175)

上图中，最后的子元素3的尺寸大于前面的所有子元素，所以，前面两个元素完全隐藏。改变子元素1，子元素2的zIndex属性后，可以将元素展示出来。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Stack(alignContent: Alignment.BottomStart) {
                Column() {
                    Text('Stack子元素1').fontSize(20)
                }
                    .width(100)
                    .height(100)
                    .backgroundColor(0xffd306)
                    .zIndex(2)
                Column() {
                    Text('Stack子元素2').fontSize(20)
                }
                    .width(150)
                    .height(150)
                    .backgroundColor(0xFEC0CD)
                    .zIndex(1)
                Column() {
                    Text('Stack子元素3').fontSize(20)
                }
                    .width(200)
                    .height(200)
                    .backgroundColor(Color.Gray)
            }
                .width(350)
                .height(350)
                .backgroundColor(0xe0e0e0)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/TcCJPwYdRZKko4nyuqlqWA/zh-cn_image_0000002731378605.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=ECC06C8E4806AB772E815A40EA018264735B3F62B6817BB87B46E8D81CA065E8)

#### 场景示例

使用层叠布局快速搭建页面。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        private var arr: Array<String> = ['APP1', 'APP2', 'APP3', 'APP4', 'APP5', 'APP6', 'APP7', 'APP8'];
        func build() {
            Stack(alignContent: Alignment.Bottom) {
                Flex(wrap: FlexWrap.Wrap) {
                    ForEach(
                        this.arr,
                        itemGeneratorFunc: {
                            item: String, idx: Int64 => Text(item)
                                .width(100)
                                .height(100)
                                .fontSize(16)
                                .margin(10)
                                .textAlign(TextAlign.Center)
                                .borderRadius(10)
                                .backgroundColor(0xFFFFFF)
                        },
                        keyGeneratorFunc: {item: String, idx: Int64 => idx.toString()}
                    )
                }
                    .width(100.percent)
                    .height(100.percent)
                Flex(justifyContent: FlexAlign.SpaceAround, alignItems: ItemAlign.Center) {
                    Text('联系人').fontSize(16)
                    Text('设置').fontSize(16)
                    Text('短信').fontSize(16)
                }
                    .width(50.percent)
                    .height(50)
                    .backgroundColor(0x16302e2e)
                    .margin(bottom: 15)
                    .borderRadius(15)
            }
                .width(100.percent)
                .height(100.percent)
                .backgroundColor(0xCFD0CF)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/bkdRGsCySyaRLCN3lj3bBA/zh-cn_image_0000002701819302.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=25DD87111A412C8590C4993A10AE9C6F746E0D1E52336FE51F90E100A5EC01A9)
