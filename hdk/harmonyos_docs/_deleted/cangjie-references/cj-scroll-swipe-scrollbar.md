---
name: cangjie-references/cj-scroll-swipe-scrollbar
title: ScrollBar
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scrollbar
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 滚动与滑动 / ScrollBar
---

# ScrollBar

滚动条组件ScrollBar，用于配合可滚动组件使用。如[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)、[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/Ed_88MUVT_a2aiWPxMlGIQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=9E38DD12E838037EBD63BDEE460F67D21834016756AA12616FD817EBC9E8A800)

ScrollBar主轴方向不设置大小时，采用父组件[布局约束](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints)中的maxSize作为主轴方向大小。如果ScrollBar的父组件存在可滚动组件，如[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)、[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)，建议设置ScrollBar主轴方向大小，否则ScrollBar主轴方向大小可能为无穷大。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含单个子组件。

#### 创建组件

#### [h2]init(?Scroller, ?ScrollBarDirection, ?BarState, () -> Unit)
    
    
    public init(
        scroller!: ?Scroller,
        direction!: ?ScrollBarDirection = None,
        state!: ?BarState = None,
        child!: () -> Unit
    )

**功能：** 创建滚动条组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/AcXQXenWSgmuQX7__bdNlg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=DD2FB03CE4CD0BA0125838B384FB29C1961CE6062BE9CEDD2949A99C4107B709)

  * ScrollBar组件负责定义可滚动区域的行为样式，ScrollBar的子节点负责定义滚动条的行为样式。
  * 滚动条组件与可滚动组件通过Scroller进行绑定，且只有当两者方向相同时，才能联动，ScrollBar与可滚动组件仅支持一对一绑定。
  * ScrollBar组件没有子节点时，支持显示默认样式的滚动条。
  * ScrollBar组件的显隐通过BarState设置，组件内部会自动根据BarState设置调整opacity控制显隐，因此ScrollBar组件设置[opacity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-opacity#func-opacityfloat64)属性不生效。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
scroller | ?[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller) | 是 | - | **命名参数。** 可滚动组件的控制器。用于与可滚动组件进行绑定。  
direction | ?[ScrollBarDirection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-scrollbardirection) | 否 | None | **命名参数。** 滚动条的方向，控制可滚动组件对应方向的滚动。初始值：ScrollBarDirection.Vertical。  
state | ?[BarState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-barstate) | 否 | None | **命名参数。** 滚动条状态。初始值：BarState.Auto。  
child | () -> Unit | 是 | - | **命名参数。** 容器内的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持

通用事件：全部支持

#### 示例代码

#### [h2]示例1 （设置子节点）

该示例为ScrollBar组件有子节点时的滚动条样式。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.ArrayList
    
    @Entry
    @Component
    class EntryView {
        var arr: ArrayList<Int64> = ArrayList<Int64>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
        let scroller = Scroller()
        func build() {
            Column() {
                Stack(alignContent: Alignment.End) {
                    Scroll(this.scroller) {
                        Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start) {
                            ForEach(this.arr, itemGeneratorFunc: { item: Int64, idx: Int64 =>
                                Row() {
                                    Text(item.toString())
                                        .width(80.percent)
                                        .height(60)
                                        .backgroundColor(0x3366CC)
                                        .borderRadius(15)
                                        .fontSize(16)
                                        .textAlign(TextAlign.Center)
                                        .margin(top: 5)
                                }
                            })
                        }.margin(right: 15)
                    }
                        .width(90.percent)
                        .scrollBar(BarState.Off)
                        .scrollable(ScrollDirection.Vertical)
                    ScrollBar(scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto) {
                        Text("")
                            .width(20)
                            .height(100)
                            .borderRadius(10)
                            .backgroundColor(0xC0C0C0)
                    }
                        .width(20)
                        .backgroundColor(0xededed)
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/Iwf30GO2QlGLeeTmgWWJLg/zh-cn_image_0000002701819546.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=18E7AF05A301F80F12C80E7FD72CC6197AC670CFB564C2165DB9A05AFC5D7116)

#### [h2]示例2 （不设置子节点）

该示例为ScrollBar组件没有子节点时的滚动条样式。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.ArrayList
    
    @Entry
    @Component
    class EntryView {
        var arr: ArrayList<Int64> = ArrayList<Int64>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
        let scroller = Scroller()
        func build() {
            Column() {
                Stack(alignContent: Alignment.End) {
                    Scroll(this.scroller) {
                        Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start) {
                            ForEach(
                                this.arr,
                                itemGeneratorFunc: {
                                    item: Int64, idx: Int64 => Row() {
                                        Text(item.toString())
                                            .width(80.percent)
                                            .height(60)
                                            .backgroundColor(0x3366CC)
                                            .borderRadius(15)
                                            .fontSize(16)
                                            .textAlign(TextAlign.Center)
                                            .margin(top: 5)
                                    }
                                }
                            )
                        }.margin(right: 15)
                    }
                        .width(90.percent)
                        .scrollBar(BarState.Off)
                        .scrollable(ScrollDirection.Vertical)
                    ScrollBar(scroller: this.scroller, direction: ScrollBarDirection.Vertical, state: BarState.Auto) {}
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/38/v3/VGW8AsrSSYeKK2JlrJkWGA/zh-cn_image_0000002731538827.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=BEB770DB82043C0712A34BC50434D6E7ECE89E8A640452F22E4D96CB03C462B3)
