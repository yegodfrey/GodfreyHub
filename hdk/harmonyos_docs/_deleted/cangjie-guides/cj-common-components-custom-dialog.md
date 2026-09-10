---
name: cangjie-guides/cj-common-components-custom-dialog
title: 基础自定义弹出框（CustomDialog）（不推荐）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-custom-dialog
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 弹出框（Dialog） / 基础自定义弹出框（CustomDialog）（不推荐）
---

# 基础自定义弹出框（CustomDialog）（不推荐）

CustomDialog是自定义弹出框，可用于广告、中奖、警告、软件更新等与用户交互响应操作。开发者可以通过CustomDialogController类显示自定义弹出框。具体用法请参见[自定义弹出框](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-customdialog)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/rbqgtt9eTHSLy5EHeWkNpA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=E22C789A004BB00454A7A556D862A5F0A0B446248AC6939752FAB00C35EAE394)

ArkUI弹出框默认为非页面级弹出框，在页面路由跳转时，如果开发者未调用close方法将其关闭，弹出框将不会自动关闭。

弹出框（CustomDialog）可以通过配置[isModal](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-customdialog#var-ismodal)来实现模态和非模态弹窗。isModal为true时，弹出框为模态弹窗。isModal为false时，弹出框为非模态弹窗。

#### 创建自定义弹出框

  1. 使用@CustomDialog宏装饰自定义弹出框，可在此宏内自定义弹出框内容。CustomDialogController需在@CustomDialog内定义。
         
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @CustomDialog
         class MyDialog {
             var controller: Option<CustomDialogController> = Option.None
             func build() {
                 Column() {
                     Text("我是内容").fontSize(20)
                 }
                     .height(60)
                     .justifyContent(FlexAlign.Center)
             }
         }

  2. 创建构造器，与宏呼应相连。点击与onClick事件绑定的组件使弹出框弹出。
         
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @CustomDialog
         class MyDialog {
             var controller: Option<CustomDialogController> = Option.None
             func build() {
                 Column() {
                     Text("我是内容").fontSize(20)
                 }
                     .height(60)
                     .justifyContent(FlexAlign.Center)
             }
         }
         
         @Entry
         @Component
         class EntryView {
             var dialogController: CustomDialogController = CustomDialogController(
                 CustomDialogControllerOptions(builder: MyDialog()))
             func build() {
                 Column {
                     Button("click me")
                         .onClick({
                             evt => dialogController.openDialog()
                         })
                         .position(x: 30.percent, y: 20.percent)
                         .width(40.percent)
                         .height(15.percent)
                 }
             }
         }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/fCoyeq8nTyisHCS_LMR93A/zh-cn_image_0000002701659484.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=7C0453CD2FA8C49538FF92D778AA2734A9B4773571FC65405983E59903FC042E)




#### 弹出框的交互

弹出框可用于数据交互，完成用户一系列响应操作。

  1. 在@CustomDialog宏内添加按钮，同时添加数据函数。
         
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @CustomDialog
         class MyDialog {
             var controller: Option<CustomDialogController> = Option.None
             func build() {
                 Flex(justifyContent: FlexAlign.SpaceEvenly, alignItems: ItemAlign.Center) {
                     Text("我是内容").fontSize(20)
         
                     Button("cancel").onClick({
                         evt => controller?.closeDialog()
                     })
                     Button("confirm").onClick({
                         evt => controller?.closeDialog()
                     })
                 }.height(500.px)
             }
         }

  2. 弹出框页面需要在构造器内进行接收，同时创建相应的函数操作。
         
         package ohos_app_cangjie_entry
         
         import kit.ArkUI.*
         import ohos.arkui.state_macro_manage.*
         
         @CustomDialog
         class MyDialog {
             var controller: Option<CustomDialogController> = Option.None
             func build() {
                 Flex(justifyContent: FlexAlign.SpaceEvenly, alignItems: ItemAlign.Center) {
                     Text("我是内容").fontSize(20)
         
                     Button("cancel").onClick({
                         evt => controller?.closeDialog()
                     })
                     Button("confirm").onClick({
                         evt => controller?.closeDialog()
                     })
                 }.height(500.px)
             }
         }
         
         @Entry
         @Component
         class EntryView {
             var dialogController: CustomDialogController = CustomDialogController(
                 CustomDialogControllerOptions(builder: MyDialog()))
             func build() {
                 Column {
                     Button("click me").onClick({
                         evt => dialogController.openDialog()
                     })
                 }
             }
         }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/_rEo-IvtSCCo4z-biK-Xkw/zh-cn_image_0000002731378699.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=C4F077FCDDFAA5C71823600997700EF464D2B27E7CEA82706418B3F2F325132C)




#### 弹出框的样式

弹出框通过定义宽度、高度、背景色、阴影等参数来控制样式。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.arkui.component.common.Offset as CommonOffset
    
    @CustomDialog
    class MyDialog {
        var controller: Option<CustomDialogController> = Option.None
        func build() {
            Row(space: 40) {
                Text("我是内容")
                    .fontSize(20)
                    .margin(top: 4, right: 4, bottom: 4, left: 4)
            }.height(500.px)
        }
    }
    
    @Entry
    @Component
    class EntryView {
        var dialogController: CustomDialogController = CustomDialogController(
            CustomDialogControllerOptions(
                builder: MyDialog(),
                autoCancel: true,
                alignment: DialogAlignment.Center,
                offset: CommonOffset(0.vp, 0.vp),
                gridCount: 4,
                customStyle: false,
                backgroundColor: 0xd9ffffff,
                cornerRadius: 20,
                width: 120,
                height: 120,
                borderWidth: 1,
                borderStyle: EdgeStyles(), // 使用borderStyle属性，需要和borderWidth属性一起使用
                borderColor: Color.Blue, // 使用borderColor属性，需要和borderWidth属性一起使用
                shadow: Option<ShadowOptions>.None,
            )
        )
        func build() {
            Column {
                Button("click me").onClick({
                    evt => dialogController.openDialog()
                })
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/RfcXjD53Q86wA0cNSm4D_Q/zh-cn_image_0000002701819396.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=C157EDB5785228676DDAC6ACF44C6FA41042A349CDD04C44076424BE9131238E)

#### 嵌套自定义弹出框

通过第一个弹出框打开第二个弹出框时，最好将第二个弹出框定义在第一个弹出框的父组件处，通过父组件传给第一个弹出框的回调来打开第二个弹出框。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.arkui.component.common.Offset as CommonOffset
    
    @CustomDialog
    class CustomDialogExampleTwo {
        var controllerTwo: Option<CustomDialogController> = Option.None
        @State
        var message: String = "I'm the second dialog box."
        @State
        var showIf: Bool = false
        func build() {
            Column() {
                if (this.showIf) {
                    Text("Text")
                        .fontSize(30)
                        .height(100)
                }
                Text(this.message)
                    .fontSize(30)
                    .height(100)
                Button("Create Text").onClick({
                    evt => this.showIf = true
                })
                Button("Close Second Dialog Box")
                    .onClick({
                        evt => if (let Some(v) <- this.controllerTwo) {
                            v.closeDialog()
                        }
                    })
                    .margin(20)
            }
        }
    }
    
    @CustomDialog
    class MyDialog {
        var openSecondBox: () -> Unit
        var controller: Option<CustomDialogController> = Option.None
        func build() {
            Row(space: 600) {
                Button("Open Second Box")
                    .onClick(
                        {
                            evt =>
                                this.controller?.closeDialog()
                                this.openSecondBox()
                        }
                    )
                    .margin(20)
            }.borderRadius(10)
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @State
        var inputValue: String = "Click Me"
        var dialogController: CustomDialogController = CustomDialogController(
            CustomDialogControllerOptions(
                builder: MyDialog(openSecondBox: {
                    => this
                        .dialogControllerTwo
                        .openDialog()
                }),
                autoCancel: true,
                alignment: DialogAlignment.Bottom,
                offset: CommonOffset(0, -20),
                gridCount: 4,
                customStyle: false
            )
        )
        var dialogControllerTwo: CustomDialogController = CustomDialogController(
            CustomDialogControllerOptions(
                builder: CustomDialogExampleTwo(),
                autoCancel: true,
                alignment: DialogAlignment.Bottom,
                offset: CommonOffset(0, -25)
            )
        )
    
        func build() {
            Column() {
                Button(this.inputValue)
                    .onClick({
                        evt => this
                            .dialogController
                            .openDialog()
                    })
                    .backgroundColor(0x317aff)
            }
                .width(100.percent)
                .margin(top: 20)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/Wbr9RpFRQ9CNDbk6WDL9mQ/zh-cn_image_0000002731538677.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=90BFDCD90CDFA11C819F8774470E87709754936EB2694F69D9CB8C24728F440B)

由于自定义弹出框在状态管理侧有父子关系，如果将第二个弹出框定义在第一个弹出框内，那么当父组件（第一个弹出框）被销毁（关闭）时，子组件（第二个弹出框）内无法再继续创建新的组件。
