---
name: cangjie-guides/cj-page-level-dialog
title: 页面级弹出框
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-page-level-dialog
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 弹出框（Dialog） / 页面级弹出框
---

# 页面级弹出框

弹出框默认设置为全局级别，弹窗节点作为页面根节点的子节点，显示层级高于应用中的所有路由/导航页面。当页面内进行路由跳转时，如果应用未主动调用close方法关闭弹出框，弹出框不会自动关闭，并且会在下一个跳转页面上继续显示。

如果开发者希望在路由跳转后，弹出框能够随前一个路由页面的切换而消失，并在路由返回后弹出框能够继续正常显示，可以通过页面级弹出框来实现。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/WstTIONwSoybenqMJZdDTA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=A9D6AB5D272CD96DD8ECA859E24A750B904769CA49BC90AF1A5FE57F7FF6EF43)

  * 当且仅当弹出框为非子窗模式时，页面级能力才会生效。即showInSubWindow参数不设置或设置为false。
  * 页面级弹出框通常与导航路由能力结合使用，可以参考[组件导航和页面路由概述](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-navigation-introduction)了解相关术语。
  * 页面级弹出框的使用方式是在当前弹出框的入参之中新增了相关属性能力，使用前可以通过[弹出框概述](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-dialog-base-overview)了解基础的弹出框使用方法。



#### 设置参数

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/flLdpTecSKypW7II0CCOdg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=D2F00B1B36A8F01FDE19515846A30D3C9C89FFBED59788BB9E94AD60E70693F9)

详细变量定义请参考完整示例。

在弹出框的options入参中设置[levelMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-promptaction#enum-levelmode)属性，值为LevelMode.Embedded表示开启页面级弹出框能力。

当弹出框弹出时，会自动获取当前显示的Page页面并将弹出框节点挂载在此页面下。此时弹出框的显示层级高于此Page页面下的所有Navigation页面。
    
    
    this.getUIContext().getPromptAction().openCustomDialog(
        CustomDialogOptions(
            builder: bind(this.CustomDialogBuilder, this)
            levelMode: LevelMode.Embedded, // 启用页面级弹出框
            // ···
        )
    )

#### 交互说明

页面内弹出框在部分交互逻辑上依然遵循部分弹出框指定的交互策略：

  1. 侧滑时先关闭弹出框。通过侧滑手势返回上一页时，如果页面上存在弹出框，弹出框会优先关闭并结束本次手势行为。如果期望返回上一页，需要再次触发侧滑手势。

  2. 点击弹出框的蒙层，默认会关闭弹出框，点击蒙层以外的区域则不会。




#### 完整示例

下述示例为基于Router路由模式下的页面级弹出框。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var message: String = 'Hello World'
        @State
        var customDialogId: Int32 = 0
    
        @Builder
        func customDialogBuilder() {
            Column() {
                Text('Custom dialog Message')
                    .fontSize(20)
                    .height(100)
                Row() {
                    Button('Next').onClick({
                        evt =>
                        // 在弹窗内部进行路由跳转。
                        this
                            .getUIContext()
                            .getRouter()
                            .pushUrl(url: 'Next')
                    })
                    Blank().width(50)
                    Button('Close').onClick({
                        evt => this
                            .getUIContext()
                            .getPromptAction()
                            .closeCustomDialog(customDialogId)
                    })
                }
            }.padding(20)
        }
    
        func build() {
            NavDestination() {
                Row() {
                    Column() {
                        Text(this.message)
                            .id('test_text')
                            .fontSize(50)
                            .fontWeight(FontWeight.Bold)
                            .onClick({
                                evt => this
                                    .getUIContext()
                                    .getPromptAction()
                                    .openCustomDialog(
                                        CustomDialogConfig(
                                            builder: bind(this.customDialogBuilder, this),
                                            levelMode: LevelMode.Embedded, // 启用页面级弹出框
                                        ),
                                        {
                                            id => customDialogId = id
                                        }
                                    )
                            })
                    }.width(100.percent)
                }.height(100.percent)
            }
        }
    }
    
    
    // Next.cj
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class Next {
        @State
        var message: String = 'Back'
    
        func build() {
            Row() {
                Column() {
                    Button(this.message)
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                        .onClick({
                            evt => this
                                .getUIContext()
                                .getRouter()
                                .back()
                        })
                }.width(100.percent)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/XNSMYYhGQbaZrUrwlC0MMg/zh-cn_image_0000002701659488.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=C4E891B6D133EC9C879823F6353F498FE5AC2D152E2EF43EC5CACA248D1F5DA2)
