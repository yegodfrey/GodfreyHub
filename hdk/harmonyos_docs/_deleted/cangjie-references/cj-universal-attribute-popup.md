---
name: cangjie-references/cj-universal-attribute-popup
title: Popup控制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-popup
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / Popup控制
---

# Popup控制

给组件绑定popup弹窗，并设置弹窗内容，交互逻辑和显示状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/HCUKwJkwSjGqqCcF59p5ww/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=3794200351D43B3E8CEC3CAA6482BB4B7BF4F02757EC12F2A8842A05445CE1BE)

popup弹窗的显示状态在onStateChange事件回调中反馈，其显隐与组件的创建或销毁无强对应关系。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func bindPopup(?Bool, ?PopupOptions)
    
    
    func bindPopup(show: ?Bool, popup: ?PopupOptions): T

**功能：** 给组件绑定Popup弹窗。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
show | ?Bool | 是 | - | 弹窗显示状态。popup弹窗必须等待页面全部构建完成才能展示，因此show不能在页面构建中设置为true，否则会导致popup弹窗显示位置及形状错误。 初始值：false。  
popup | ?[PopupOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-popupoptions) | 是 | - | 配置当前弹窗提示的参数。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func bindPopup(?Bool, ?CustomPopupOptions)
    
    
    func bindPopup(show: ?Bool, popup: ?CustomPopupOptions): T

**功能：** 给组件绑定Popup弹窗。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
show | ?Bool | 是 | - | 弹窗显示状态。popup弹窗必须等待页面全部构建完成才能展示，因此show不能在页面构建中设置为true，否则会导致popup弹窗显示位置及形状错误。 初始值：false。  
popup | ?[CustomPopupOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-custompopupoptions) | 是 | - | 配置当前弹窗提示的参数。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import ohos.base.*
    import ohos.arkui.component.common.Font as CommonFont
    
    @Builder
    func popupBuilder() {
        Column {
            Text("Custom Popup")
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @State
        var msg: String = "State Change Wait"
        @State
        var dismiss: String = "Dismiss Wait"
        @State
        var custom: String = "Custom Wait"
        @State
        var handlePopup: Bool = false
        @State
        var customPopup: Bool = false
    
        public func build() {
            Flex(direction: FlexDirection.Column) {
                Text(msg).margin(left: 100, top: 50)
                Text(dismiss).margin(left: 100)
                Text(custom).margin(left: 100)
                Button('PopupOptions')
                    .margin(left: 100, top: 200)
                    .onClick({
                        e => this.handlePopup = !this.handlePopup
                    })
                    .bindPopup(
                        this.handlePopup,
                        PopupOptions(
                            message: 'This is a popup with PopupOptions',
                            primaryButton: PopupButton(
                                value: 'confirm',
                                action: {
                                    => this.handlePopup = !this.handlePopup
                                }
                            ),
                            secondaryButton: PopupButton(
                                value: 'cancel',
                                action: {
                                    => this.handlePopup = !this.handlePopup
                                }
                            ),
                            onStateChange: {
                                e =>
                                    this.msg = "PopUp"
                                    if (!e.isVisible) {
                                        this.msg = "Wait"
                                        this.handlePopup = false
                                    }
                            },
                            showInSubWindow: false,
                            arrowOffset: 60.0.vp,
                            targetSpace: 20.0.vp,
                            enableArrow: true,
                            arrowHeight: 30.0.vp,
                            arrowWidth: 30.0.vp,
                            radius: 25.0.vp,
                            autoCancel: true,
                            backgroundBlurStyle: BlurStyle.Thick,
                            shadow: ShadowStyle.OuterDefaultSM,
                            offset: Position(x: 50.0, y: 50.0),
                            placement: Placement.Top,
                            arrowPointPosition: ArrowPointPosition.Center,
                            mask: Color(0x33000000),
                            popupColor: Color.Green,
                            messageOptions: PopupMessageOptions(textColor: Color.Blue, font: CommonFont(size: 20.vp)),
                            transition: TransitionEffect.SLIDE_SWITCH,
                            onWillDismiss: {
                                dismissPopupAction: DismissPopupAction =>
                                    dismissPopupAction.dismiss()
                                    match (dismissPopupAction.reason) {
                                        case PRESS_BACK => this.dismiss = "dismissReason: PRESS_BACK"
                                        case TOUCH_OUTSIDE => this.dismiss = "dismissReason: TOUCH_OUTSIDE"
                                        case _ => this.dismiss = "dismissReason: unknown"
                                    }
                            },
                            followTransformOfTarget: true
                        )
                    )
                Button("CustomPopupOptions")
                    .margin(left: 100, top: 10)
                    .onClick({e => customPopup = !customPopup})
                    .bindPopup(
                        customPopup,
                        CustomPopupOptions(
                            builder: popupBuilder,
                            enableArrow: true,
                            placement: Placement.BottomLeft,
                            popupColor: Color.Red,
                            arrowHeight: 24.0.vp,
                            arrowWidth: 24.0.vp,
                            radius: 10.vp,
                            offset: Position(x: 5.0, y: 5.0),
                            width: 300.vp,
                            autoCancel: true,
                            targetSpace: 10.vp,
                            arrowOffset: 5.vp,
                            focusable: true,
                            arrowPointPosition: ArrowPointPosition.Center,
                            transition: TransitionEffect.SLIDE_SWITCH,
                            onStateChange: {
                                evt =>
                                    custom = "stateChange: ${evt.isVisible}"
                                    if (!evt.isVisible) {
                                        customPopup = true
                                    }
                            }
                        )
                    )
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/xlB8DVr8RJ-EHRNEruPaSQ/zh-cn_image_0000002731538805.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=A69BD0C491A19787EE9BD897F436321365BF5649DDDE375971015EB838995BC0)
