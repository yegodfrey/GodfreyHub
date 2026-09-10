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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/rtRcRPtTSXW1Gfk7irXMfQ/zh-cn_image_0000002713558666.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=7CE47CEEBACDA276BB58EB2A7CE93BE7DF1697036583D092177DDA9E7A77F62E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/tyLTrkXvSVemPazDu45ZWQ/zh-cn_image_0000002743197579.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=3BC72CA2ED53F87D60C488060014DA4DAAC511D072E2B24E71681F2A0B775069)

#### 对齐方式

Stack组件通过[alignContent参数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-stack#func-aligncontentalignment)实现位置的相对移动。如图2所示，支持九种对齐方式。

**图2** Stack容器内元素的对齐方式

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/5ELy_IKQReWXg_eFkz3hqQ/zh-cn_image_0000002713398698.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=3DDAF11872D10F44A9A54C5F705FA52BA1B16CCB21AD85F55B3EF1FE33D2C53C)
    
    
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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/_oLs13BYQXOaXpUGYoHrQA/zh-cn_image_0000002743077629.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=57533092A78B4C049D3AE52FE848A3876F722EF81426CE2E307F5F3A0FCDCE83)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/zHyqgBDVRzS5kk7UvWyL8Q/zh-cn_image_0000002713558668.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E9ED36A0D53BAE6C8810600D554B9C3B615D55A719BBC6229C95D09A2A1EAE15)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/OVSfXb8eSPm7YzXm98GlXQ/zh-cn_image_0000002743197581.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=ADE5BB52378AF435A847531D63A3B7D8061EC037E03B34B22C1CEC8C7BE530EE)
