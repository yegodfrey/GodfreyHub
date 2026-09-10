---
name: cangjie-guides/cj-fixes-style-dialog
title: 固定样式弹出框
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-fixes-style-dialog
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 弹出框（Dialog） / 固定样式弹出框
---

# 固定样式弹出框

固定样式弹出框采用固定的布局格式，这使得开发者无需关心具体的显示布局细节，只需输入所需显示的文本内容，从而简化了使用流程，提升了便捷性。

#### 使用约束

  * 操作菜单（showActionMenu）、对话框（showDialog）需先使用[getPromptAction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getpromptaction)方法获取到PromptAction对象，再通过该对象调用对应方法。

  * 操作菜单（showActionMenu）、对话框（showDialog）、列表选择弹出框（ActionSheet）、警告弹出框（AlertDialog）可以设置isModal为false，变成非模态弹窗。




#### 操作菜单（showActionMenu）

操作菜单通过[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)中的[getPromptAction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getpromptaction)方法获取到PromptAction对象，支持在回调或开发者自定义类中使用。

创建并显示操作菜单后，菜单的响应结果会异步返回选中按钮在buttons数组中的索引。
    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    import ohos.arkui.ui_context.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var index1: Int32 = 0
        func build() {
            Column {
                Button("showActionMenu").onClick(
                    {
                        evt =>
                            let buttons: Array<ButtonInfo> = [ButtonInfo(text: "item1", color: Color.Gray),
                                ButtonInfo(text: "item2", color: Color.Black)]
                            getUIContext()
                                .getPromptAction()
                                .showActionMenu(ActionMenuOptions(title: "showActionMenu Title Info", buttons: buttons),
                                    callback: {
                                        err: Option<BusinessException>, i: Option<Int32> => try {
                                            match (err) {
                                                case Some(e) => Hilog.info(0, "cangjie", "error: errcode is ${e.code}")
                                                case _ => index1 = i.getOrThrow()
                                            }
                                        } catch (e: Exception) {
                                            Hilog.info(0, "cangjie", e.toString())
                                        }
                                    })
                    }
                )
            }
                .width(100.percent)
                .padding(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a/v3/4C0BV3SrRQez4-HOmUE5PQ/zh-cn_image_0000002701659486.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=0B0301A15FEEBD1CEE890B0C794C7AC3C5934C81484A3CC046A617CC5E06D0A8)

#### 对话框（showDialog）

对话框通过[getPromptAction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getpromptaction)方法获取到PromptAction对象，支持在回调或开发者自定义类中使用。
    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    import ohos.arkui.ui_context.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var index1: Int32 = 0
        func build() {
            Column {
                Button("showDialog").onClick({
                    evt => getUIContext()
                        .getPromptAction()
                        .showDialog(
                            ShowDialogOptions(
                                title: "showDialog Title Info",
                                buttons: [
                                    ButtonInfo(text: 'button1', color: Color(0X000000)),
                                    ButtonInfo(text: 'button2', color: Color(0X000000))
                                ]
                            ),
                            callback: {
                                err: Option<BusinessException>, i: Option<Int32> => try {
                                    match (err) {
                                        case Some(e) => Hilog.info(0, "cangjie", "error: errcode is ${e.code}")
                                        case _ => ()
                                    }
                                } catch (e: Exception) {
                                    Hilog.info(0, "cangjie", e.toString())
                                }
                            }
                        )
                })
            }
                .width(100.percent)
                .padding(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/ENfBMyixRQSCTUFQkmnBhw/zh-cn_image_0000002731378701.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=C726EC52FB38B585F4D0850366B5C6EFC6574D67D993647E4AA6331A3A529699)

#### 列表选择弹窗（ActionSheet）

列表选择器弹窗适用于呈现多个操作选项，尤其当界面中仅需展示操作列表而无其他内容时。

列表选择器弹窗通过[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)的[showActionSheet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-showactionsheetactionsheetoptions)接口实现。

该示例通过配置width、height、transition等接口定义了弹窗的样式以及弹出动效。
    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.ui_context.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Button('showActionSheet').onClick(
                    {
                        e =>
                            let confirm: ActionSheetButtonOptions = ActionSheetButtonOptions(value: "Confirm button",
                                action: {=> Hilog.info(0, "cangjie", "Get Alert Dialog handled")}, defaultFocus: true,
                                style: DialogButtonStyle.Default)
                            let sheets: Array<SheetInfo> = [SheetInfo(title: "apple",
                                action: {=> Hilog.info(0, "cangjie", "apple")}),
                                SheetInfo(title: "banana", action: {=> Hilog.info(0, "cangjie", "banana")}),
                                SheetInfo(title: "pears", action: {=> Hilog.info(0, "cangjie", "pears")})]
                            getUIContext().showActionSheet(
                                ActionSheetOptions(
                                    title: 'ActionSheet title',
                                    message: 'message',
                                    sheets: sheets,
                                    autoCancel: false,
                                    confirm: confirm,
                                    width: 300,
                                    height: 300,
                                    cornerRadius: BorderRadiuses(topLeft: 20.vp, topRight: 20.vp, bottomLeft: 20.vp,
                                        bottomRight: 20.vp),
                                    borderWidth: 1.vp,
                                    borderStyle: EdgeStyles(),
                                    borderColor: Color.Blue,
                                    backgroundColor: Color.White,
                                    transition: TransitionEffect.asymmetric(
                                        TransitionEffect
                                            .OPACITY
                                            .animation(AnimateParam(duration: 3000, curve: Curve.Sharp))
                                            .combine(
                                                TransitionEffect
                                                    .scale(ScaleOptions(x: 1.5, y: 1.5))
                                                    .animation(AnimateParam(duration: 3000, curve: Curve.Sharp))),
                                        TransitionEffect
                                            .OPACITY
                                            .animation(AnimateParam(duration: 100, curve: Curve.Smooth))
                                            .combine(
                                                TransitionEffect
                                                    .scale(ScaleOptions(x: 0.5, y: 0.5))
                                                    .animation(AnimateParam(duration: 100, curve: Curve.Smooth)))
                                    ),
                                    alignment: DialogAlignment.Center,
                                )
                            )
                    }
                )
            }
                .width(100.percent)
                .margin(top: 5)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/KRq-BBLtQvmbkaMmCt1FnA/zh-cn_image_0000002701819398.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=33E3E5008BA642C0AFB907A8B688336926AA1D490C90A704E7AD9221A3665E3B)

#### 警告弹窗（AlertDialog）

需要向用户提问或得到用户的许可时，可使用警告弹窗。

  * 警告弹窗用来提示重要信息，但会中断当前任务，尽量提供必要的信息和有用的操作。
  * 避免仅使用警告弹窗提供信息，用户不喜欢被信息丰富但不可操作的警告打断。



该示例通过配置width、height、transition等接口定义了多个按钮弹窗的样式以及弹出动效。
    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.ui_context.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Button('showAlertDialog')
                    .onClick(
                        {
                            evt =>
                                let primaryButton = AlertDialogButtonOptions(
                                    value: 'cancel',
                                    action: {
                                        => Hilog.info(0, "cangjie", 'Callback when the first button is clicked')
                                    }
                                )
                                let secondaryButton = AlertDialogButtonOptions(
                                    enabled: true,
                                    defaultFocus: true,
                                    style: DialogButtonStyle.Highlight,
                                    value: 'ok',
                                    action: {
                                        => Hilog.info(0, "cangjie", 'Callback when the second button is clicked')
                                    }
                                )
                                getUIContext().showAlertDialog(
                                    AlertDialogParamWithButtons(
                                        message: 'text',
                                        title: 'title',
                                        autoCancel: true,
                                        alignment: DialogAlignment.Center,
                                        offset: Offset(0.0, -20.0),
                                        gridCount: 3,
                                        transition: TransitionEffect.asymmetric(
                                            TransitionEffect
                                                .OPACITY
                                                .animation(AnimateParam(duration: 3000, curve: Curve.Sharp))
                                                .combine(TransitionEffect.scale(ScaleOptions(x: 1.5, y: 1.5)))
                                                .animation(AnimateParam(duration: 3000, curve: Curve.Sharp)),
                                            TransitionEffect
                                                .OPACITY
                                                .animation(AnimateParam(duration: 100, curve: Curve.Smooth))
                                                .combine(
                                                    TransitionEffect
                                                        .scale(ScaleOptions(x: 0.5, y: 0.5))
                                                        .animation(AnimateParam(duration: 100, curve: Curve.Smooth)))
                                        ),
                                        primaryButton: primaryButton,
                                        secondaryButton: secondaryButton
                                    )
                                )
                        }
                    )
                    .width(100.percent)
                    .margin(top: 5)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/7WRPPyopS52mRinGYFRLQw/zh-cn_image_0000002731538679.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=48E114DBC3A1582521F27A67F93EB0B2F3A7273A8D0B406E09C38F587A8F1B3A)
