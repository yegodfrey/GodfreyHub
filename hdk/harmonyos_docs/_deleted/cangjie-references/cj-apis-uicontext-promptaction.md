---
name: cangjie-references/cj-apis-uicontext-promptaction
title: PromptAction
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-promptaction
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.ui_context（UIContext） / PromptAction
---

# PromptAction

创建并显示即时反馈、对话框、操作菜单以及自定义弹窗。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/-DCgxUCOSiCClcT-wnh-1A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=3CD63A0A89C1D6FC70CB9AA0A51DAB5FE10D643E76462D2A9886A438D4B2A19E)

以下API需先使用[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)中的[getPromptAction()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getpromptaction)方法获取PromptAction实例，再通过此实例调用对应方法。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class PromptAction
    
    
    public class PromptAction {}

**功能：** PromptAction类。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func closeCustomDialog(Int32)
    
    
    public func closeCustomDialog(dialogId: Int32): Unit

**功能：** 关闭自定义对话框。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
dialogId | Int32 | 是 | - | 要关闭的对话框ID，由openCustomDialog返回。  
  
#### [h2]func openCustomDialog(CustomDialogOptions, (Int32) -> Unit)
    
    
    public func openCustomDialog(options: CustomDialogOptions, callBack: (Int32) -> Unit): Unit

**功能：** 打开自定义对话框。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | CustomDialogOptions | 是 | - | 自定义对话框选项。  
callBack | (Int32) -> Unit | 是 | - | 回调函数。  
  
#### [h2]func showActionMenu(ActionMenuOptions, ShowActionMenuCallBack)
    
    
    public func showActionMenu(option: ActionMenuOptions, callback!: ShowActionMenuCallBack = defaultCallback)

**功能：** 在给定设置中显示操作菜单。此API使用异步回调返回结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
option | ActionMenuOptions | 是 | - | 操作菜单选项。  
callback | ShowActionMenuCallBack | 否 | defaultCallback | **命名参数。** 用于返回操作菜单响应结果的回调。defaultCallback表示{_: Option<BusinessException>, _: Option<Int32> =>}  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码 | 说明  
---|---  
100001 | Internal error: failed to allocate memory.  
  



#### [h2]func showDialog(ShowDialogOptions, ShowDialogCallBack)
    
    
    public func showDialog(option: ShowDialogOptions, callback!: ShowDialogCallBack = defaultCallback)

**功能：** 在给定设置中显示对话框。此API使用异步回调返回结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
option | ShowDialogOptions | 是 | - | 对话框选项。  
callback | ShowDialogCallBack | 否 | defaultCallback | **命名参数。** 用于返回对话框响应结果的回调。defaultCallback表示{_: Option<BusinessException>, _: Option<Int32> =>}  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码 | 说明  
---|---  
100001 | Internal error: failed to allocate memory.  
  



#### [h2]func showToast(ShowToastOptions)
    
    
    public func showToast(option: ShowToastOptions): Unit

**功能：** 在给定设置中显示Toast。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
option | ShowToastOptions | 是 | - | Toast选项。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[通用错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-universal)。

错误码 | 说明  
---|---  
100001 | Internal error: failed to allocate memory.  
  



#### [h2]func openCustomDialog(CustomDialogConfig, (Int32) -> Unit)
    
    
    public func openCustomDialog(options: CustomDialogConfig, callback: (Int32) -> Unit): Unit

**功能：** 创建并弹出自定义弹窗。使用回调返回对话框的id，可供closeCustomDialog使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | CustomDialogConfig | 是 | - |  自定义弹窗的内容。 **说明：** 如果BaseDialogOptions中的isModal与showInSubWindow同时设置为true，则只生效showInSubWindow = true，此时为非模态弹出框且不会显示蒙层，并在子窗口中显示。  
callback | (Int32) -> Unit | 是 | - | **命名参数。** 回调函数，返回对话框id，可供closeCustomDialog使用。  
  
#### [h2]func showActionMenu(ActionMenuConfig, ShowActionMenuCallBack)
    
    
    public func showActionMenu(option: ActionMenuConfig, callback!: ShowActionMenuCallBack = defaultCallback)

**功能：** 创建并显示操作菜单，通过回调获取菜单的响应结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
option | ActionMenuConfig | 是 | - | 操作菜单选项。  
callback | ShowActionMenuCallBack | 否 | defaultCallback | **命名参数。** 用于返回菜单的响应结果。defaultCallback表示{_: Option[/topic/body/section/table/tgroup/tbody/row/entry/businessexception {""}) , _: Option[/topic/body/section/table/tgroup/tbody/row/entry/businessexception/int32 {""})  =>} (int32] (businessexception]  
  
#### [h2]func showDialog(ShowDialogConfig, ShowDialogCallBack)
    
    
    public func showDialog(option: ShowDialogConfig, callback!: ShowDialogCallBack = defaultCallback)

**功能：** 创建并显示对话框，使用回调获取对话框的响应结果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
option | ShowDialogConfig | 是 | - | 对话框选项。  
callback | ShowDialogCallBack | 否 | defaultCallback | **命名参数。** 用于返回菜单的响应结果。defaultCallback表示{_: Option[/topic/body/section/table/tgroup/tbody/row/entry/businessexception {""}) , _: Option[/topic/body/section/table/tgroup/tbody/row/entry/businessexception/int32 {""})  =>} (int32] (businessexception]  
  
#### class ActionMenuOptions
    
    
    public open class ActionMenuOptions {
        public var title: ResourceStr
        public var buttons: Array<ButtonInfo>
        public var showInSubWindow: Bool
        public var isModal: Bool
        public init(
            title!: ResourceStr = '',
            buttons!: Array<ButtonInfo>,
            showInSubWindow!: Bool = false,
            isModal!: Bool = true
        )
    }

**功能：** 菜单操作选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var buttons
    
    
    public var buttons: Array<ButtonInfo>

**功能：** 对话框中的按钮数组。

**类型：** Array<ButtonInfo>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var isModal
    
    
    public var isModal: Bool

**功能：** 是否为模态对话框。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var showInSubWindow
    
    
    public var showInSubWindow: Bool

**功能：** 是否在子窗口中显示。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var title
    
    
    public var title: ResourceStr

**功能：** 要显示的文本标题。

**类型：** [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(ResourceStr, Array<ButtonInfo>, Bool, Bool)
    
    
    public init(
        title!: ResourceStr = '',
        buttons!: Array<ButtonInfo>,
        showInSubWindow!: Bool = false,
        isModal!: Bool = true
    )

**功能：** 菜单操作选项构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | '' | **命名参数。** 要显示的文本标题。  
buttons | Array<ButtonInfo> | 是 | - | **命名参数。** 按钮数组。  
showInSubWindow | Bool | 否 | false | **命名参数。** 是否在子窗口中显示。  
isModal | Bool | 否 | true | **命名参数。** 是否为模态对话框。  
  
#### class BaseDialogOptions
    
    
    public open class BaseDialogOptions {
        public var maskRect: Rectangle
        public var alignment: DialogAlignment
        public var offset: Offset
        public var isModal: Bool
        public var showInSubWindow: Bool
        public var autoCancel: Bool
        public var maskColor: ResourceColor
        public var transition: TransitionEffect
        public var onDidAppear: () -> Unit
        public var onDidDisappear: () -> Unit
        public var onWillAppear: () -> Unit
        public var onWillDisappear: () -> Unit
        public var keyboardAvoidMode: KeyboardAvoidMode
        public var enableHoverMode: Bool
        public var hoverModeArea: HoverModeAreaType
        public init(
            maskRect!: Rectangle = Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent),
            alignment!: DialogAlignment = DialogAlignment.Default,
            offset!: Offset = Offset(0.vp, 0.vp),
            isModal!: Bool = true,
            showInSubWindow!: Bool = false,
            autoCancel!: Bool = true,
            maskColor!: ResourceColor = Color(0x33000000),
            transition!: TransitionEffect = TransitionEffect.OPACITY,
            onDidAppear!: () -> Unit = {=>},
            onDidDisappear!: () -> Unit = {=>},
            onWillAppear!: () -> Unit = {=>},
            onWillDisappear!: () -> Unit = {=>},
            keyboardAvoidMode!: KeyboardAvoidMode = KeyboardAvoidMode.Default,
            enableHoverMode!: Bool = false,
            hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen
        )
    }

**功能：** 对话框基础选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var alignment
    
    
    public var alignment: DialogAlignment

**功能：** 对话框在屏幕上的对齐方式。

**类型：** [DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var autoCancel
    
    
    public var autoCancel: Bool

**功能：** 是否允许用户点击遮罩层退出。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var enableHoverMode
    
    
    public var enableHoverMode: Bool

**功能：** 是否响应悬停模式。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var hoverModeArea
    
    
    public var hoverModeArea: HoverModeAreaType

**功能：** 悬停模式下对话框的显示区域。

**类型：** HoverModeAreaType

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var isModal
    
    
    public var isModal: Bool

**功能：** 是否为模态对话框。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var keyboardAvoidMode
    
    
    public var keyboardAvoidMode: KeyboardAvoidMode

**功能：** 自定义对话框的键盘避免模式。

**类型：** KeyboardAvoidMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var maskColor
    
    
    public var maskColor: ResourceColor

**功能：** 自定义对话框遮罩颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var maskRect
    
    
    public var maskRect: Rectangle

**功能：** 对话框遮罩区域。大小不能超过主窗口。

**类型：** [Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var offset
    
    
    public var offset: Offset

**功能：** 对话框偏移量。

**类型：** [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var onDidAppear
    
    
    public var onDidAppear: () -> Unit

**功能：** 对话框出现时的回调函数。

**类型：** () -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var onDidDisappear
    
    
    public var onDidDisappear: () -> Unit

**功能：** 对话框消失时的回调函数。

**类型：** () -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var onWillAppear
    
    
    public var onWillAppear: () -> Unit

**功能：** 对话框打开动画开始前的回调函数。

**类型：** () -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var onWillDisappear
    
    
    public var onWillDisappear: () -> Unit

**功能：** 对话框关闭动画开始前的回调函数。

**类型：** () -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var showInSubWindow
    
    
    public var showInSubWindow: Bool

**功能：** 是否在子窗口中显示。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var transition
    
    
    public var transition: TransitionEffect

**功能：** 自定义对话框打开/关闭时的过渡参数。

**类型：** [TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(Rectangle, DialogAlignment, Offset, Bool, Bool, Bool, ResourceColor, TransitionEffect, () -> Unit, () -> Unit, () -> Unit, () -> Unit, KeyboardAvoidMode, Bool, HoverModeAreaType)
    
    
    public init(
        maskRect!: Rectangle = Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent),
        alignment!: DialogAlignment = DialogAlignment.Default,
        offset!: Offset = Offset(0.vp, 0.vp),
        isModal!: Bool = true,
        showInSubWindow!: Bool = false,
        autoCancel!: Bool = true,
        maskColor!: ResourceColor = Color(0x33000000),
        transition!: TransitionEffect = TransitionEffect.OPACITY,
        onDidAppear!: () -> Unit = {=>},
        onDidDisappear!: () -> Unit = {=>},
        onWillAppear!: () -> Unit = {=>},
        onWillDisappear!: () -> Unit = {=>},
        keyboardAvoidMode!: KeyboardAvoidMode = KeyboardAvoidMode.Default,
        enableHoverMode!: Bool = false,
        hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen
    )

**功能：** BaseDialogOptions构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
maskRect | [Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent) | **命名参数。** 对话框遮罩区域。  
alignment | [DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | DialogAlignment.Default | **命名参数。** 对话框在屏幕上的对齐方式。  
offset | [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Offset(0.vp, 0.vp) | **命名参数。** 对话框偏移量。  
isModal | Bool | 否 | true | **命名参数。** 是否为模态对话框。  
showInSubWindow | Bool | 否 | false | **命名参数。** 是否在子窗口中显示。  
autoCancel | Bool | 否 | true | **命名参数。** 是否允许用户点击遮罩层退出。  
maskColor | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color(0x33000000) | **命名参数。** 自定义对话框遮罩颜色。  
transition | [TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect) | 否 | TransitionEffect.OPACITY | **命名参数。** 自定义对话框打开/关闭时的过渡参数。  
onDidAppear | () -> Unit | 否 | {=>} | **命名参数。** 对话框出现时的回调函数。  
onDidDisappear | () -> Unit | 否 | {=>} | **命名参数。** 对话框消失时的回调函数。  
onWillAppear | () -> Unit | 否 | {=>} | **命名参数。** 对话框打开动画开始前的回调函数。  
onWillDisappear | () -> Unit | 否 | {=>} | **命名参数。** 对话框关闭动画开始前的回调函数。  
keyboardAvoidMode | KeyboardAvoidMode | 否 | KeyboardAvoidMode.Default | **命名参数。** 自定义对话框的键盘避免模式。  
enableHoverMode | Bool | 否 | false | **命名参数。** 是否响应悬停模式。  
hoverModeArea | HoverModeAreaType | 否 | HoverModeAreaType.BottomScreen | **命名参数。** 悬停模式下对话框的显示区域。  
  
#### class ButtonInfo
    
    
    public class ButtonInfo {
        public var text: ResourceStr
        public var color: ResourceColor
        public var primary: Bool
        public init(text!: ResourceStr, color!: ResourceColor, primary!: Bool = false)
    }

**功能：** 提供菜单项按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var color
    
    
    public var color: ResourceColor

**功能：** 按钮文本颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var primary
    
    
    public var primary: Bool

**功能：** 定义按钮是否默认响应Enter/Space键。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var text
    
    
    public var text: ResourceStr

**功能：** 按钮中显示的文本。

**类型：** [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(ResourceStr, ResourceColor, Bool)
    
    
    public init(text!: ResourceStr, color!: ResourceColor, primary!: Bool = false)

**功能：** 构造菜单中的菜单项按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
text | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 按钮文本内容。  
color | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | **命名参数。** 按钮文本颜色。  
primary | Bool | 否 | false | **命名参数。** 按钮是否默认响应Enter/Space键。  
  
#### class CustomDialogOptions
    
    
    public class CustomDialogOptions <: BaseDialogOptions {
        public var builder: () -> Unit
        public var backgroundColor: ResourceColor
        public var cornerRadius: BorderRadiuses
        public var borderWidth: EdgeWidths
        public var borderColor: EdgeColors
        public var borderStyle: EdgeStyles
        public var width: Length
        public var height: Length
        public var shadow: ?ShadowOptions
        public var backgroundBlurStyle: BlurStyle
        public init(
            builder!: () -> Unit,
            maskRect!: Rectangle = Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent),
            alignment!: DialogAlignment = DialogAlignment.Default,
            offset!: Offset = Offset(0.vp, 0.vp),
            isModal!: Bool = true,
            showInSubWindow!: Bool = false,
            autoCancel!: Bool = true,
            maskColor!: ResourceColor = Color(0x33000000),
            transition!: TransitionEffect = TransitionEffect.OPACITY,
            onDidAppear!: () -> Unit = {=>},
            onDidDisappear!: () -> Unit = {=>},
            onWillAppear!: () -> Unit = {=>},
            onWillDisappear!: () -> Unit = {=>},
            keyboardAvoidMode!: KeyboardAvoidMode = KeyboardAvoidMode.Default,
            enableHoverMode!: Bool = false,
            hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen,
            backgroundColor!: ResourceColor = Color.Transparent,
            cornerRadius!: BorderRadiuses = BorderRadiuses(topLeft: 32.vp, topRight: 32.vp, bottomLeft: 32.vp,
                bottomRight: 32.vp),
            borderWidth!: EdgeWidths = EdgeWidths(top: 0.vp, right: 0.vp, bottom: 0.vp, left: 0.vp),
            borderColor!: EdgeColors = EdgeColors(top: Color.Black, right: Color.Black, bottom: Color.Black, left: Color.Black),
            borderStyle!: EdgeStyles = EdgeStyles(),
            width!: Length = 400.vp,
            height!: Length = 100.vp,
            shadow!: ?ShadowOptions = None,
            backgroundBlurStyle!: BlurStyle = BlurStyle.ComponentUltraThick
        )
    }

**功能：** 对话框自定义内容选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * BaseDialogOptions



#### [h2]var backgroundColor
    
    
    public var backgroundColor: ResourceColor

**功能：** 自定义对话框的背景颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var borderColor
    
    
    public var borderColor: EdgeColors

**功能：** 自定义对话框的边框颜色。

**类型：** EdgeColors

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var cornerRadius
    
    
    public var cornerRadius: BorderRadiuses

**功能：** 自定义对话框的圆角半径。

**类型：** [BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var borderStyle
    
    
    public var borderStyle: EdgeStyles

**功能：** 自定义对话框的边框样式。

**类型：** [EdgeStyles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgestyles)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var borderWidth
    
    
    public var borderWidth: EdgeWidths

**功能：** 自定义对话框的边框宽度。

**类型：** [EdgeWidths](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgewidths)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var builder
    
    
    public var builder: () -> Unit

**功能：** 允许开发者自定义对话框内容。

**类型：** () -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundBlurStyle
    
    
    public var backgroundBlurStyle: BlurStyle

**功能：** 对话框的背景模糊样式。

**类型：** [BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var height
    
    
    public var height: Length

**功能：** 对话框的高度。

**类型：** [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var shadow
    
    
    public var shadow: ?ShadowOptions

**功能：** 对话框的阴影。

**类型：** ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var width
    
    
    public var width: Length

**功能：** 对话框的宽度。

**类型：** [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(() -> Unit, Rectangle, DialogAlignment, Offset, Bool, Bool, Bool, ResourceColor, TransitionEffect, () -> Unit, () -> Unit, () -> Unit, () -> Unit, KeyboardAvoidMode, Bool, HoverModeAreaType, ResourceColor, BorderRadiuses, EdgeWidths, EdgeColors, EdgeStyles, Length, Length, ?ShadowOptions, BlurStyle)
    
    
    public init(
        builder!: () -> Unit,
        maskRect!: Rectangle = Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent),
        alignment!: DialogAlignment = DialogAlignment.Default,
        offset!: Offset = Offset(0.vp, 0.vp),
        isModal!: Bool = true,
        showInSubWindow!: Bool = false,
        autoCancel!: Bool = true,
        maskColor!: ResourceColor = Color(0x33000000),
        transition!: TransitionEffect = TransitionEffect.OPACITY,
        onDidAppear!: () -> Unit = {=>},
        onDidDisappear!: () -> Unit = {=>},
        onWillAppear!: () -> Unit = {=>},
        onWillDisappear!: () -> Unit = {=>},
        keyboardAvoidMode!: KeyboardAvoidMode = KeyboardAvoidMode.Default,
        enableHoverMode!: Bool = false,
        hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen,
        backgroundColor!: ResourceColor = Color.Transparent,
        cornerRadius!: BorderRadiuses = BorderRadiuses(topLeft: 32.vp, topRight: 32.vp, bottomLeft: 32.vp,
            bottomRight: 32.vp),
        borderWidth!: EdgeWidths = EdgeWidths(top: 0.vp, right: 0.vp, bottom: 0.vp, left: 0.vp),
        borderColor!: EdgeColors = EdgeColors(top: Color.Black, right: Color.Black, bottom: Color.Black, left: Color.Black),
        borderStyle!: EdgeStyles = EdgeStyles(),
        width!: Length = 400.vp,
        height!: Length = 100.vp,
        shadow!: ?ShadowOptions = None,
        backgroundBlurStyle!: BlurStyle = BlurStyle.ComponentUltraThick
    )

**功能：** 对话框构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | () -> Unit | 是 | - |  **命名参数。** 自定义对话框内容。 **说明：** 仅支持接收@Builder修饰的自定义构建函数。  
maskRect | [Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent) | **命名参数。** 对话框遮罩区域。  
alignment | [DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | DialogAlignment.Default | **命名参数。** 对话框在屏幕上的对齐方式。  
offset | [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Offset(0.vp, 0.vp) | **命名参数。** 对话框偏移量。  
isModal | Bool | 否 | true | **命名参数。** 是否为模态对话框。  
showInSubWindow | Bool | 否 | false | **命名参数。** 是否在子窗口中显示。  
autoCancel | Bool | 否 | true | **命名参数。** 是否允许用户点击遮罩层退出。  
maskColor | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color(0x33000000) | **命名参数。** 自定义对话框遮罩颜色。  
transition | [TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect) | 否 | TransitionEffect.OPACITY | **命名参数。** 自定义对话框打开/关闭时的过渡参数。  
onDidAppear | () -> Unit | 否 | {=>} | **命名参数。** 对话框出现时的回调函数。  
onDidDisappear | () -> Unit | 否 | {=>} | **命名参数。** 对话框消失时的回调函数。  
onWillAppear | () -> Unit | 否 | {=>} | **命名参数。** 对话框打开动画开始前的回调函数。  
onWillDisappear | () -> Unit | 否 | {=>} | **命名参数。** 对话框关闭动画开始前的回调函数。  
keyboardAvoidMode | KeyboardAvoidMode | 否 | KeyboardAvoidMode.Default | **命名参数。** 自定义对话框的键盘避免模式。  
enableHoverMode | Bool | 否 | false | **命名参数。** 是否响应悬停模式。  
hoverModeArea | HoverModeAreaType | 否 | HoverModeAreaType.BottomScreen | **命名参数。** 悬停模式下对话框的显示区域。  
backgroundColor | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color.Transparent | **命名参数。** 自定义对话框的背景颜色。  
cornerRadius | [BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses) | 否 | BorderRadiuses(topLeft: 32.vp, topRight: 32.vp, bottomLeft: 32.vp, bottomRight: 32.vp) | **命名参数。** 自定义对话框的圆角半径。  
borderWidth | [EdgeWidths](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgewidths) | 否 | EdgeWidths(top: 0.vp, right: 0.vp, bottom: 0.vp, left: 0.vp) | **命名参数。** 自定义对话框的边框宽度。  
borderColor | EdgeColors | 否 | EdgeColors(top: Color.Black, right: Color.Black, bottom: Color.Black, left: Color.Black) | **命名参数。** 自定义对话框的边框颜色。  
borderStyle | [EdgeStyles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgestyles) | 否 | EdgeStyles() | **命名参数。** 自定义对话框的边框样式。  
width | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 400.vp | **命名参数。** 对话框的宽度。  
height | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 100.vp | **命名参数。** 对话框的高度。  
shadow | ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions) | 否 | None |  **命名参数。** 对话框的阴影。 初始值： API version 26之前，初始值为ShadowOptions(radius: 0.0)； 从API version 26开始，初始值为ShadowOptions(radius: -1.0)。  
backgroundBlurStyle | [BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | BlurStyle.ComponentUltraThick | **命名参数。** 对话框的背景模糊样式。  
  
#### class EdgeColors
    
    
    public class EdgeColors {
        public var top: ResourceColor
        public var right: ResourceColor
        public var bottom: ResourceColor
        public var left: ResourceColor
        public init(
            top!: ResourceColor = Color.Black,
            right!: ResourceColor = Color.Black,
            bottom!: ResourceColor = Color.Black,
            left!: ResourceColor = Color.Black
        )
    }

**功能：** 提供边框颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var bottom
    
    
    public var bottom: ResourceColor

**功能：** 边框的底部颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var left
    
    
    public var left: ResourceColor

**功能：** 边框的左侧颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var right
    
    
    public var right: ResourceColor

**功能：** 边框的右侧颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var top
    
    
    public var top: ResourceColor

**功能：** 边框的顶部颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(ResourceColor, ResourceColor, ResourceColor, ResourceColor)
    
    
    public init(
        top!: ResourceColor = Color.Black,
        right!: ResourceColor = Color.Black,
        bottom!: ResourceColor = Color.Black,
        left!: ResourceColor = Color.Black
    )

**功能：** EdgeColors构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
top | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color.Black | **命名参数。** 顶部边框颜色。  
right | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color.Black | **命名参数。** 右侧边框颜色。  
bottom | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color.Black | **命名参数。** 底部边框颜色。  
left | [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Color.Black | **命名参数。** 左侧边框颜色。  
  
#### class ShowDialogOptions
    
    
    public open class ShowDialogOptions {
        public var title: ResourceStr
        public var message: ResourceStr
        public var buttons: Array<ButtonInfo>
        public var alignment: DialogAlignment
        public var offset: Offset
        public var maskRect: Rectangle
        public var showInSubWindow: Bool
        public var isModal: Bool
        public var backgroundColor: ResourceColor
        public var backgroundBlurStyle: BlurStyle
        public var shadow: ?ShadowOptions
        public var enableHoverMode: Bool
        public var hoverModeArea: HoverModeAreaType
        public init(
            title!: ResourceStr = '',
            message!: ResourceStr = '',
            buttons!: Array<ButtonInfo> = [],
            alignment!: DialogAlignment = DialogAlignment.Default,
            offset!: Offset = Offset(0.vp, 0.vp),
            maskRect!: Rectangle = Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent),
            showInSubWindow!: Bool = false,
            isModal!: Bool = true,
            backgroundColor!: Color = Color.Transparent,
            backgroundBlurStyle!: BlurStyle = BlurStyle.ComponentUltraThick,
            shadow!: ?ShadowOptions = None,
            enableHoverMode!: Bool = false,
            hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen
        )
    }

**功能：** 对话框显示选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var alignment
    
    
    public var alignment: DialogAlignment

**功能：** 对话框在屏幕上的对齐方式。

**类型：** [DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundColor
    
    
    public var backgroundColor: ResourceColor

**功能：** 对话框的背景颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundBlurStyle
    
    
    public var backgroundBlurStyle: BlurStyle

**功能：** 对话框的背景模糊样式。

**类型：** [BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var buttons
    
    
    public var buttons: Array<ButtonInfo>

**功能：** 对话框中的按钮数组。支持多个按钮。

**类型：** Array<ButtonInfo>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var enableHoverMode
    
    
    public var enableHoverMode: Bool

**功能：** 是否响应悬停模式。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var hoverModeArea
    
    
    public var hoverModeArea: HoverModeAreaType

**功能：** 悬停模式下对话框的显示区域。

**类型：** HoverModeAreaType

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var isModal
    
    
    public var isModal: Bool

**功能：** 是否为模态对话框。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var maskRect
    
    
    public var maskRect: Rectangle

**功能：** 对话框遮罩区域。大小不能超过主窗口。

**类型：** [Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var message
    
    
    public var message: ResourceStr

**功能：** 文本主体。

**类型：** [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var offset
    
    
    public var offset: Offset

**功能：** 对话框偏移量。

**类型：** [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var shadow
    
    
    public var shadow: ?ShadowOptions

**功能：** 对话框的阴影选项。

**类型：** ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var showInSubWindow
    
    
    public var showInSubWindow: Bool

**功能：** 是否在子窗口中显示。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var title
    
    
    public var title: ResourceStr

**功能：** 要显示的标题文本。

**类型：** [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(ResourceStr, ResourceStr, Array<ButtonInfo>, DialogAlignment, Offset, Rectangle, Bool, Bool, Color, BlurStyle, ?ShadowOptions, Bool, HoverModeAreaType)
    
    
    public init(
        title!: ResourceStr = '',
        message!: ResourceStr = '',
        buttons!: Array<ButtonInfo> = [],
        alignment!: DialogAlignment = DialogAlignment.Default,
        offset!: Offset = Offset(0.vp, 0.vp),
        maskRect!: Rectangle = Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent),
        showInSubWindow!: Bool = false,
        isModal!: Bool = true,
        backgroundColor!: Color = Color.Transparent,
        backgroundBlurStyle!: BlurStyle = BlurStyle.ComponentUltraThick,
        shadow!: ?ShadowOptions = None,
        enableHoverMode!: Bool = false,
        hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen
    )

**功能：** 对话框显示选项构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | '' | **命名参数。** 标题文本。  
message | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | '' | **命名参数。** 文本主体。  
buttons | Array<ButtonInfo> | 否 | [] | **命名参数。** 对话框中的按钮数组。  
alignment | [DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | DialogAlignment.Default | **命名参数。** 对话框在屏幕上的对齐方式。  
offset | [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Offset(0.vp, 0.vp) | **命名参数。** 对话框偏移量。  
maskRect | [Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent) | **命名参数。** 对话框遮罩区域。  
showInSubWindow | Bool | 否 | false | **命名参数。** 是否在子窗口中显示。  
isModal | Bool | 否 | true | **命名参数。** 是否为模态对话框。  
backgroundColor | [Color](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-color) | 否 | Color.Transparent | **命名参数。** 对话框的背景颜色。  
backgroundBlurStyle | [BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | BlurStyle.ComponentUltraThick | **命名参数。** 对话框的背景模糊样式。  
shadow | ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions) | 否 | None |  **命名参数。** 对话框的阴影选项。 初始值： API version 26之前，初始值为ShadowOptions(radius: 0.0)； 从API version 26开始，初始值为ShadowOptions(radius: -1.0)。  
enableHoverMode | Bool | 否 | false | **命名参数。** 是否响应悬停模式。  
hoverModeArea | HoverModeAreaType | 否 | HoverModeAreaType.BottomScreen | **命名参数。** 悬停模式下对话框的显示区域。  
  
#### class ShowToastOptions
    
    
    public class ShowToastOptions {
        public var message: ResourceStr
        public var duration: UInt32
        public var bottom: Length
        public var showMode: ToastShowMode
        public var alignment: Alignment
        public var offset: Offset
        public var backgroundColor: ResourceColor
        public var textColor: ResourceColor
        public var backgroundBlurStyle: BlurStyle
        public var shadow: ?ShadowOptions = None
        public var enableHoverMode: Bool
        public var hoverModeArea: HoverModeAreaType
        public init(
            message!: ResourceStr,
            duration!: UInt32 = 1500,
            bottom!: Length = 80.vp,
            showMode!: ToastShowMode = ToastShowMode.Default,
            alignment!: Alignment = Alignment.Bottom,
            offset!: Offset = Offset(0.vp, 0.vp),
            backgroundColor!: Color = Color.Transparent,
            textColor!: Color = Color.Black,
            backgroundBlurStyle!: BlurStyle = BlurStyle.ComponentUltraThick,
            shadow!: ?ShadowOptions = None,
            enableHoverMode!: Bool = false,
            hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen
        )
    }

**功能：** Toast显示选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var alignment
    
    
    public var alignment: Alignment

**功能：** Toast在屏幕上的对齐方式。

**类型：** [Alignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-alignment)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundColor
    
    
    public var backgroundColor: ResourceColor

**功能：** Toast的背景颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var bottom
    
    
    public var bottom: Length

**功能：** Toast对话框与屏幕底部的距离。

**类型：** [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var duration
    
    
    public var duration: UInt32

**功能：** Toast对话框的持续时间。

**类型：** UInt32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var enableHoverMode
    
    
    public var enableHoverMode: Bool

**功能：** 是否响应悬停模式。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var hoverModeArea
    
    
    public var hoverModeArea: HoverModeAreaType

**功能：** 悬停模式下Toast的显示区域。

**类型：** HoverModeAreaType

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var message
    
    
    public var message: ResourceStr

**功能：** 要显示的文本。

**类型：** [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var offset
    
    
    public var offset: Offset

**功能：** Toast偏移量。

**类型：** [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundBlurStyle
    
    
    public var backgroundBlurStyle: BlurStyle

**功能：** Toast的背景模糊样式。

**类型：** [BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var shadow
    
    
    public var shadow: ?ShadowOptions = None

**功能：** Toast的阴影选项。

**类型：** ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var showMode
    
    
    public var showMode: ToastShowMode

**功能：** 确定Toast的显示模式。

**类型：** ToastShowMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var textColor
    
    
    public var textColor: ResourceColor

**功能：** Toast的文本颜色。

**类型：** [ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(ResourceStr, UInt32, Length, ToastShowMode, Alignment, Offset, Color, Color, BlurStyle, ?ShadowOptions, Bool, HoverModeAreaType)
    
    
    public init(
        message!: ResourceStr,
        duration!: UInt32 = 1500,
        bottom!: Length = 80.vp,
        showMode!: ToastShowMode = ToastShowMode.Default,
        alignment!: Alignment = Alignment.Bottom,
        offset!: Offset = Offset(0.vp, 0.vp),
        backgroundColor!: Color = Color.Transparent,
        textColor!: Color = Color.Black,
        backgroundBlurStyle!: BlurStyle = BlurStyle.ComponentUltraThick,
        shadow!: ?ShadowOptions = None,
        enableHoverMode!: Bool = false,
        hoverModeArea!: HoverModeAreaType = HoverModeAreaType.BottomScreen
    )

**功能：** Toast显示选项构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
message | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 要显示的文本。  
duration | UInt32 | 否 | 1500 | **命名参数。** Toast对话框的持续时间。  
bottom | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | 80.vp | **命名参数。** Toast对话框与屏幕底部的距离。  
showMode | ToastShowMode | 否 | ToastShowMode.Default | **命名参数。** Toast的显示模式。  
alignment | [Alignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-alignment) | 否 | Alignment.Bottom | **命名参数。** Toast在屏幕上的对齐方式。  
offset | [Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Offset(0.vp, 0.vp) | **命名参数。** Toast偏移量。  
backgroundColor | [Color](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-color) | 否 | Color.Transparent | **命名参数。** Toast的背景颜色。  
textColor | [Color](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-color) | 否 | Color.Black | **命名参数。** Toast的文本颜色。  
backgroundBlurStyle | [BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | BlurStyle.ComponentUltraThick | **命名参数。** Toast的背景模糊样式。  
shadow | ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions) | 否 | None |  **命名参数。** Toast的阴影选项。 初始值： API version 26之前，初始值为ShadowOptions(radius: 0.0)； 从API version 26开始，初始值为ShadowOptions(radius: -1.0)。  
enableHoverMode | Bool | 否 | false | **命名参数。** 是否响应悬停模式。  
hoverModeArea | HoverModeAreaType | 否 | HoverModeAreaType.BottomScreen | **命名参数。** 悬停模式下Toast的显示区域。  
  
#### class BaseDialogConfig
    
    
    public open class BaseDialogConfig {
        public init(
            maskRect!: ?Rectangle = Option.None,
            alignment!: ?DialogAlignment = Option.None,
            offset!: ?Offset = Option.None,
            isModal!: ?Bool = Option.None,
            showInSubWindow!: ?Bool = Option.None,
            autoCancel!: ?Bool = Option.None,
            maskColor!: ?ResourceColor = Option.None,
            transition!: ?TransitionEffect = Option.None,
            onDidAppear!: ?() -> Unit = Option.None,
            onDidDisappear!: ?() -> Unit = Option.None,
            onWillAppear!: ?() -> Unit = Option.None,
            onWillDisappear!: ?() -> Unit = Option.None,
            keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None,
            enableHoverMode!: ?Bool = Option.None,
            hoverModeArea!: ?HoverModeAreaType = Option.None,
            levelMode!: ?LevelMode = Option.None
        )
    }

**功能：** 弹窗的选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop maskRect
    
    
    public mut prop maskRect: ?Rectangle

**功能：** 弹窗遮蔽层区域。初始值：Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/QlC_w7TpRpq3ffvSA6zrww/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=9D03BF3BF098A7101C9D1A19BB02D423324BD1FB73C11D67CBFD5BDB9E8B2535)

  * showInSubWindow为true时，maskRect不生效。
  * maskRect在设置Rectangle中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。



**类型：** ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop alignment
    
    
    public mut prop alignment: ?DialogAlignment

**功能：** 弹窗在竖直方向上的对齐方式。初始值：DialogAlignment.Default。

**类型：** ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop offset
    
    
    public mut prop offset: ?Offset

**功能：** 弹窗相对alignment所在位置的偏移量。初始值：Offset(dx: 0.vp, dy: 0.vp)。

**类型：** ?[Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop isModal
    
    
    public mut prop isModal: ?Bool

**功能：** 弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。初始值：true。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop showInSubWindow
    
    
    public mut prop showInSubWindow: ?Bool

**功能：** 某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。初始值：false，弹窗显示在应用内，而非独立子窗口。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop autoCancel
    
    
    public mut prop autoCancel: ?Bool

**功能：** 点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。初始值：true。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop maskColor
    
    
    public mut prop maskColor: ?ResourceColor

**功能：** 自定义蒙层颜色。初始值: Color(0x33000000)。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop transition
    
    
    public mut prop transition: ?TransitionEffect

**功能：** 设置弹窗显示和退出的过渡效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/22hPV0laQw-e7CusZUtiMw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=4898D4465C1F8A9CB693A77257B5BA3113D14BEC4F137556C1FBD769A1481055)

  * 如果不设置，则使用默认的显示/退出动效。
  * 显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。
  * 退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。



**类型：** ?[TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop onDidAppear
    
    
    public mut prop onDidAppear: ?() -> Unit

**功能：** 弹窗弹出后的事件回调。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/8jR5Z7qDSFKPLU_3qw7nkw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=0563F66A74905C36B8B83FBFCCD83B920A6F8BA0B72ABB0CABB2F5B1758A5922)

  * 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
  * 在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。
  * 快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。
  * 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。



**类型：** ?() -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop onDidDisappear
    
    
    public mut prop onDidDisappear: ?() -> Unit

**功能：** 弹窗消失后的事件回调。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/tKiXWYhKSbu2TCpgz7QfAw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=0030642AA46335423E73365DA6B0E3F110C7EAA1740497627C9132E4B7458765)

  * 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
  * 当弹窗退场动画未完成时（例如：同时触发弹窗关闭和页面切换），该回调不会触发。



**类型：** ?() -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop onWillAppear
    
    
    public mut prop onWillAppear: ?() -> Unit

**功能：** 弹窗显示动效前的事件回调。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/9W5tqn5jR0iJX2Posl9CDQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=C052F625999B8E0121DCB9A9812260490F2833228618E0E9BE0DD8C834FD2444)

  * 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
  * 在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。



**类型：** ?() -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop onWillDisappear
    
    
    public mut prop onWillDisappear: ?() -> Unit

**功能：** 弹窗退出动效前的事件回调。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/HExeAbZDSjyGxemn3w5pFg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=415E510470E5447602A36FFEDADDF41C6106AFF52FEA9962930ECCEA6A5C659D)

  * 正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。
  * 快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。



**类型：** ?() -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop keyboardAvoidMode
    
    
    public mut prop keyboardAvoidMode: ?KeyboardAvoidMode

**功能：** 用于设置弹窗是否在拉起软键盘时进行自动避让。初始值：KeyboardAvoidMode.Default。

**类型：** ?KeyboardAvoidMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop enableHoverMode
    
    
    public mut prop enableHoverMode: ?Bool

**功能：** 是否响应悬停态，值为true时，响应悬停态。初始值：false，默认不响应。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop hoverModeArea
    
    
    public mut prop hoverModeArea: ?HoverModeAreaType

**功能：** 悬停态下弹窗默认展示区域。初始值：HoverModeAreaType.BottomScreen。

**类型：** ?HoverModeAreaType

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]prop levelMode
    
    
    public mut prop levelMode: ?LevelMode

**功能：** 设置弹窗显示层级。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/0wOpGgPhREOq0XAMymDI1A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=992C995A795281EF5E1DC48AF637A4EB357476DD0A00E4049BFD8313CAA6378A)

  * 初始值：LevelMode.Overlay
  * 当且仅当showInSubWindow属性设置为false时生效。



**类型：** ?LevelMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]init(?Rectangle, ?DialogAlignment, ?Offset, ?Bool, ?Bool, ?Bool, ?ResourceColor, ?TransitionEffect, ?() -> Unit, ?() -> Unit, ?() -> Unit, ?() -> Unit, ?KeyboardAvoidMode, ?Bool, ?HoverModeAreaType, ?LevelMode)
    
    
    public init(
        maskRect!: ?Rectangle = Option.None,
        alignment!: ?DialogAlignment = Option.None,
        offset!: ?Offset = Option.None,
        isModal!: ?Bool = Option.None,
        showInSubWindow!: ?Bool = Option.None,
        autoCancel!: ?Bool = Option.None,
        maskColor!: ?ResourceColor = Option.None,
        transition!: ?TransitionEffect = Option.None,
        onDidAppear!: ?() -> Unit = Option.None,
        onDidDisappear!: ?() -> Unit = Option.None,
        onWillAppear!: ?() -> Unit = Option.None,
        onWillDisappear!: ?() -> Unit = Option.None,
        keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None,
        enableHoverMode!: ?Bool = Option.None,
        hoverModeArea!: ?HoverModeAreaType = Option.None,
        levelMode!: ?LevelMode = Option.None
    )

**功能：** 弹窗的选项构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
maskRect | ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | Option.None |  **命名参数。** 弹窗遮蔽层区域。 初始值：Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent) **说明：** showInSubWindow为true时，maskRect不生效。 maskRect在设置Rectangle中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。  
alignment | ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | Option.None | **命名参数。** 弹窗在竖直方向上的对齐方式。初始值：DialogAlignment.Default  
offset | ?[Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Option.None | **命名参数。** 弹窗相对alignment所在位置的偏移量。初始值：Offset(dx: 0.vp, dy: 0.vp)  
isModal | ?Bool | 否 | Option.None | **命名参数。** 弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。初始值：true。  
showInSubWindow | ?Bool | 否 | Option.None | **命名参数。** 某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。初始值：false，弹窗显示在应用内，而非独立子窗口。  
autoCancel | ?Bool | 否 | Option.None | **命名参数。** 点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。初始值：true  
maskColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Option.None | **命名参数。** 自定义蒙层颜色。初始值: Color(0x33000000)  
transition | ?[TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect) | 否 | Option.None |  **命名参数。** 设置弹窗显示和退出的过渡效果。 **说明：** 1.如果不设置，则使用默认的显示/退出动效。 2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。  
onDidAppear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗弹出后的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
onDidDisappear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗消失后的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
onWillAppear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗显示动效前的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
onWillDisappear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗退出动效前的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
keyboardAvoidMode | ?KeyboardAvoidMode | 否 | Option.None | **命名参数。** 用于设置弹窗是否在拉起软键盘时进行自动避让。KeyboardAvoidMode.Default  
enableHoverMode | ?Bool | 否 | Option.None |  **命名参数。** 是否响应悬停态，值为true时，响应悬停态。 初始值：false，默认不响应。  
hoverModeArea | ?HoverModeAreaType | 否 | Option.None | **命名参数。** 悬停态下弹窗默认展示区域。初始值：HoverModeAreaType.BottomScreen  
levelMode | ?LevelMode | 否 | Option.None |  **命名参数。** 设置弹窗显示层级。 **说明：** 初始值：LevelMode.Overlay 当且仅当showInSubWindow属性设置为false时生效。  
  
#### class CustomDialogConfig
    
    
    public class CustomDialogConfig <: BaseDialogConfig {
        public var builder: () -> Unit
        public var backgroundColor: ?ResourceColor
        public var cornerRadius: ?BorderRadiuses
        public var borderWidth: ?EdgeWidths
        public var borderColor: ?EdgeColors
        public var borderStyle: ?EdgeStyles
        public var width: ?Length
        public var height: ?Length
        public var shadow: ?ShadowOptions
        public var backgroundBlurStyle: ?BlurStyle
        public init(
            builder!: () -> Unit,
            maskRect!: ?Rectangle = Option.None,
            alignment!: ?DialogAlignment = Option.None,
            offset!: ?Offset = Option.None,
            isModal!: ?Bool = Option.None,
            showInSubWindow!: ?Bool = Option.None,
            autoCancel!: ?Bool = Option.None,
            maskColor!: ?ResourceColor = Option.None,
            transition!: ?TransitionEffect = Option.None,
            onDidAppear!: ?() -> Unit = Option.None,
            onDidDisappear!: ?() -> Unit = Option.None,
            onWillAppear!: ?() -> Unit = Option.None,
            onWillDisappear!: ?() -> Unit = Option.None,
            keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None,
            enableHoverMode!: ?Bool = Option.None,
            hoverModeArea!: ?HoverModeAreaType = Option.None,
            levelMode!: ?LevelMode = Option.None,
            backgroundColor!: ?ResourceColor = Option.None,
            cornerRadius!: ?BorderRadiuses = Option.None,
            borderWidth!: ?EdgeWidths = Option.None,
            borderColor!: ?EdgeColors = Option.None,
            borderStyle!: ?EdgeStyles = Option.None,
            width!: ?Length = Option.None,
            height!: ?Length = Option.None,
            shadow!: ?ShadowOptions = Option.None,
            backgroundBlurStyle!: ?BlurStyle = Option.None
        )
    }

**功能：** 自定义弹窗的内容，继承自BaseDialogConfig。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**父类型：**

  * BaseDialogConfig



#### [h2]var builder
    
    
    public var builder: () -> Unit

**功能：** 设置自定义弹窗的内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/z-AJNep1TBeWNbxE8gAPnA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=3D8F4D545B258FA21ED217FF7F6B6DD0F7542BF45B0919D1967B325626ED4FF3)

  * builder根节点宽高百分比相对弹窗容器大小。
  * builder非根节点宽高百分比相对父节点大小。



**类型：** () -> Unit

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var backgroundColor
    
    
    public var backgroundColor: ?ResourceColor

**功能：** 设置弹窗背板颜色。初始值：Color.Transparent

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/KWDRTgeeSre4wezV0JpUog/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=776FFD1F992C2EE921C396139D4B44851E60F7DBDAF623E948F53255D21DD86F)

当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则颜色显示将不符合预期效果。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var cornerRadius
    
    
    public var cornerRadius: ?BorderRadiuses

**功能：** 设置背板的圆角半径。可分别设置4个圆角的半径。

初始值：BorderRadiuses(topLeft: 32.vp, topRight: 32.vp, bottomLeft: 32.vp, bottomRight: 32.vp)

圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。

百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。

**类型：** ?[BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var borderWidth
    
    
    public var borderWidth: ?EdgeWidths

**功能：** 设置弹窗背板的边框宽度。

可分别设置4个边框宽度。初始值：EdgeWidths(top: 0.vp, right: 0.vp, bottom: 0.vp, left: 0.vp)

百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。

当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。

**类型：** ?[EdgeWidths](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgewidths)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var borderColor
    
    
    public var borderColor: ?EdgeColors

**功能：** 设置弹窗背板的边框颜色。

初始值：EdgeColors(top: Color.Black, right: Color.Black, bottom: Color.Black, left: Color.Black)。

如果使用borderColor属性，需要和borderWidth属性一起使用。

**类型：** ?EdgeColors

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var borderStyle
    
    
    public var borderStyle: ?EdgeStyles

**功能：** 设置弹窗背板的边框样式。

初始值：EdgeStyles()。

如果使用borderStyle属性，需要和borderWidth属性一起使用。

**类型：** ?[EdgeStyles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgestyles)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var width
    
    
    public var width: ?Length

**功能：** 设置弹窗背板的宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/p2EIs3_KTy66FrdbuEvWxA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=DFC9EAD5853B79D350883DEB1205971F1FFAA7343DABD99D570D00AB188E0BD9)

  * 弹窗宽度默认最大值：400.vp

  * 百分比参数方式：弹窗参考宽度基于所在窗口的宽度的基础上调整。




**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var height
    
    
    public var height: ?Length

**功能：** 设置弹窗背板的高度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/CrxBYTxMQIWxLK2HhUByXQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=F7585D8196DC686B71C9347E16A76A4260EC70199F1ED072C35F61C748C561FB)

  * 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。

  * 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。




**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var shadow
    
    
    public var shadow: ?ShadowOptions

**功能：** 设置弹窗背板的阴影。

**类型：** ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var backgroundBlurStyle
    
    
    public var backgroundBlurStyle: ?BlurStyle

**功能：** 弹窗背板模糊材质。初始值：BlurStyle.ComponentUltraThick

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/EIHzmT_NTnq22bf9DidAmw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=3A1CD8EA88C45A89C357D6E290B9626D675A18533411F80B1CCF0CF7CA772127)

  * 设置为BlurStyle.None即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。



**类型：** ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]init(() -> Unit, ?Rectangle, ?DialogAlignment, ?Offset, ?Bool, ?Bool, ?Bool, ?ResourceColor, ?TransitionEffect, ?() -> Unit, ?() -> Unit, ?() -> Unit, ?() -> Unit, ?KeyboardAvoidMode, ?Bool, ?HoverModeAreaType, ?LevelMode, ?ResourceColor, ?BorderRadiuses, ?EdgeWidths, ?EdgeColors, ?EdgeStyles, ?Length, ?Length, ?ShadowOptions, ?BlurStyle)
    
    
    public init(
        builder!: () -> Unit,
        maskRect!: ?Rectangle = Option.None,
        alignment!: ?DialogAlignment = Option.None,
        offset!: ?Offset = Option.None,
        isModal!: ?Bool = Option.None,
        showInSubWindow!: ?Bool = Option.None,
        autoCancel!: ?Bool = Option.None,
        maskColor!: ?ResourceColor = Option.None,
        transition!: ?TransitionEffect = Option.None,
        onDidAppear!: ?() -> Unit = Option.None,
        onDidDisappear!: ?() -> Unit = Option.None,
        onWillAppear!: ?() -> Unit = Option.None,
        onWillDisappear!: ?() -> Unit = Option.None,
        keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None,
        enableHoverMode!: ?Bool = Option.None,
        hoverModeArea!: ?HoverModeAreaType = Option.None,
        levelMode!: ?LevelMode = Option.None,
        backgroundColor!: ?ResourceColor = Option.None,
        cornerRadius!: ?BorderRadiuses = Option.None,
        borderWidth!: ?EdgeWidths = Option.None,
        borderColor!: ?EdgeColors = Option.None,
        borderStyle!: ?EdgeStyles = Option.None,
        width!: ?Length = Option.None,
        height!: ?Length = Option.None,
        shadow!: ?ShadowOptions = Option.None,
        backgroundBlurStyle!: ?BlurStyle = Option.None
    )

**功能：** 自定义弹窗配置构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | () -> Unit | 是 | - |  **命名参数。** 自定义对话框内容。 **说明：** 仅支持接收@Builder修饰的自定义构建函数。  
maskRect | ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | Option.None |  **命名参数。** 弹窗遮蔽层区域。 初始值：Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent) **说明：** showInSubWindow为true时，maskRect不生效。 maskRect在设置Rectangle中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。  
alignment | ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | Option.None | **命名参数。** 弹窗在竖直方向上的对齐方式。初始值：DialogAlignment.Default  
offset | ?[Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Option.None | **命名参数。** 弹窗相对alignment所在位置的偏移量。初始值：Offset(dx: 0.vp, dy: 0.vp)  
isModal | ?Bool | 否 | Option.None | **命名参数。** 弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。初始值：true。  
showInSubWindow | ?Bool | 否 | Option.None | **命名参数。** 某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。初始值：false，弹窗显示在应用内，而非独立子窗口。  
autoCancel | ?Bool | 否 | Option.None | **命名参数。** 点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。初始值：true  
maskColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Option.None | **命名参数。** 自定义蒙层颜色。初始值: Color(0x33000000)  
transition | ?[TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect) | 否 | Option.None |  **命名参数。** 设置弹窗显示和退出的过渡效果。 **说明：** 1.如果不设置，则使用默认的显示/退出动效。 2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。  
onDidAppear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗弹出后的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
onDidDisappear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗消失后的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
onWillAppear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗显示动效前的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
onWillDisappear | ?() -> Unit | 否 | Option.None |  **命名参数。** 弹窗退出动效前的事件回调。**说明：** 1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 4\. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。  
keyboardAvoidMode | ?KeyboardAvoidMode | 否 | Option.None | **命名参数。** 用于设置弹窗是否在拉起软键盘时进行自动避让。KeyboardAvoidMode.Default  
enableHoverMode | ?Bool | 否 | Option.None |  **命名参数。** 是否响应悬停态，值为true时，响应悬停态。 初始值：false，默认不响应。  
hoverModeArea | ?HoverModeAreaType | 否 | Option.None | **命名参数。** 悬停态下弹窗默认展示区域。初始值：HoverModeAreaType.BottomScreen  
levelMode | ?LevelMode | 否 | Option.None |  **命名参数。** 设置弹窗显示层级。 **说明：** 初始值：LevelMode.Overlay 当且仅当showInSubWindow属性设置为false时生效。  
backgroundColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Option.None |  **命名参数。** 设置弹窗背板颜色。初始值：Color.Transparent **说明：** 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则颜色显示将不符合预期效果。  
cornerRadius | ?[BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses) | 否 | Option.None |  **命名参数。** 设置背板的圆角半径。可分别设置4个圆角的半径。 初始值：BorderRadiuses(topLeft: 32.vp, topRight: 32.vp, bottomLeft: 32.vp, bottomRight: 32.vp) 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。  
borderWidth | ?[EdgeWidths](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgewidths) | 否 | Option.None |  **命名参数。** 设置弹窗背板的边框宽度。 可分别设置4个边框宽度。初始值：EdgeWidths(top: 0.vp, right: 0.vp, bottom: 0.vp, left: 0.vp) 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。 当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。  
borderColor | ?EdgeColors | 否 | Option.None |  **命名参数。** 设置弹窗背板的边框颜色。 初始值：EdgeColors(top: Color.Black, right: Color.Black, bottom: Color.Black, left: Color.Black)。 如果使用borderColor属性，需要和borderWidth属性一起使用。  
borderStyle | ?[EdgeStyles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgestyles) | 否 | Option.None |  **命名参数。** 设置弹窗背板的边框样式。 初始值：EdgeStyles()。 如果使用borderStyle属性，需要和borderWidth属性一起使用。  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | Option.None |  **命名参数。** 设置弹窗背板的宽度。 **说明：** 弹窗宽度默认最大值：400.vp 百分比参数方式：弹窗参考宽度基于所在窗口的宽度的基础上调整。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | Option.None |  **命名参数。** 设置弹窗背板的高度。 **说明：** 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域）。 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。  
shadow | ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions) | 否 | Option.None | **命名参数。** 设置弹窗背板的阴影。  
backgroundBlurStyle | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | Option.None | **命名参数。** 弹窗背板模糊材质。初始值：BlurStyle.ComponentUltraThick  
  
#### class ShowDialogConfig
    
    
    public class ShowDialogConfig {
        public var title: ?ResourceStr
        public var message: ?ResourceStr
        public var buttons: ?Array<ButtonInfo>
        public var alignment: ?DialogAlignment
        public var offset: ?Offset
        public var maskRect: ?Rectangle
        public var showInSubWindow: ?Bool
        public var isModal: ?Bool
        public var backgroundColor: ?ResourceColor
        public var backgroundBlurStyle: ?BlurStyle
        public var shadow: ?ShadowOptions
        public var enableHoverMode: ?Bool
        public var hoverModeArea: ?HoverModeAreaType
        public var levelMode: ?LevelMode
        public init(
            title!: ?ResourceStr = Option.None,
            message!: ?ResourceStr = Option.None,
            buttons!: ?Array<ButtonInfo> = Option.None,
            alignment!: ?DialogAlignment = Option.None,
            offset!: ?Offset = Option.None,
            maskRect!: ?Rectangle = Option.None,
            showInSubWindow!: ?Bool = Option.None,
            isModal!: ?Bool = Option.None,
            backgroundColor!: ?ResourceColor = Option.None,
            backgroundBlurStyle!: ?BlurStyle = Option.None,
            shadow!: ?ShadowOptions = Option.None,
            enableHoverMode!: ?Bool = Option.None,
            hoverModeArea!: ?HoverModeAreaType = Option.None,
            levelMode!: ?LevelMode = Option.None
        )
    }

**功能：** 对话框的选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var title
    
    
    public var title: ?ResourceStr

**功能：** 标题文本。初始值：""，取值为""默认不显示标题。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var message
    
    
    public var message: ?ResourceStr

**功能：** 内容文本。初始值：""，取值为""默认不显示内容。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var buttons
    
    
    public var buttons: ?Array<ButtonInfo>

**功能：** 对话框中按钮的数组，支持大于1个按钮。

**类型：** ?Array<ButtonInfo>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var alignment
    
    
    public var alignment: ?DialogAlignment

**功能：** 对话框在竖直方向上的对齐方式。初始值：DialogAlignment.Default

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/4u3UyJuhQhKEt1X1wzT5SQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=CE85BFC212DEDC3D4E93FB2DD09DF7335847B52E12CAE461F862A0649739ED6F)

若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。

**类型：** ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var offset
    
    
    public var offset: ?Offset

**功能：** 对话框相对alignment所在位置的偏移量。初始值：Offset(dx: 0.vp, dy: 0.vp)

**类型：** ?[Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var maskRect
    
    
    public var maskRect: ?Rectangle

**功能：** 对话框遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。初始值：Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/OsiYzhu3RqabNRx3Ne-teA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=8A719600F647FB4BEEDC5082D7AF8440D97F4078FE81411E1F99DE9AA5712985)

  * showInSubWindow为true时，maskRect不生效。
  * maskRect在设置Rectangle中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。



**类型：** ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var showInSubWindow
    
    
    public var showInSubWindow: ?Bool

**功能：** 某对话框需要显示在主窗口之外时，是否在子窗口显示此对话框。值为true表示在子窗口显示对话框。初始值：false，对话框显示在应用内，而非独立子窗口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/5qsEX4ubQ1ymUpEHAAPgEA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=61D428D7BDB7274C9993CF4CCFAE1BDBE206F3005B0FCF278004A9265FB60BBA)

showInSubWindow为true的对话框无法触发显示另一个showInSubWindow为true的对话框。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var isModal
    
    
    public var isModal: ?Bool

**功能：** 对话框是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与对话框周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与对话框周围其他控件进行交互。初始值：true

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var backgroundColor
    
    
    public var backgroundColor: ?ResourceColor

**功能：** 对话框背板颜色。初始值：Color.Transparent

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/Hrr3brlgTJWzYrAtJFmiEg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=B2BBCFF35ED988B7A603486597122CF4756F66BC7A2816C398D8DE120EE1D8AA)

backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.None，即可取消模糊。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var backgroundBlurStyle
    
    
    public var backgroundBlurStyle: ?BlurStyle

**功能：** 对话框背板模糊材质。初始值：BlurStyle.ComponentUltraThick

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/OL1nu8FES1qBgSI39ys7Ag/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=247110C28019D06CB6F3624F04D0EF2B708C077223B8E1C382EDB80C70B37599)

设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非None值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。

**类型：** ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var shadow
    
    
    public var shadow: ?ShadowOptions

**功能：** 设置对话框背板的阴影。

**类型：** ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var enableHoverMode
    
    
    public var enableHoverMode: ?Bool

**功能：** 是否响应悬停态，值为true时，响应悬停态。初始值：false，默认不响应。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var hoverModeArea
    
    
    public var hoverModeArea: ?HoverModeAreaType

**功能：** 设置悬停态下对话框的默认展示区域。初始值：HoverModeAreaType.BottomScreen

**类型：** ?HoverModeAreaType

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var levelMode
    
    
    public var levelMode: ?LevelMode

**功能：** 设置对话框显示层级。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/8UnV4yNxRGeppZPA77iIrg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=99AD0ECF6F0709CD25436DFF5A98ED726161D03696C10C74973A5C5CBEA285C8)

  * 初始值：LevelMode.Overlay。
  * 当且仅当showInSubWindow属性设置为false时生效。



**类型：** ?LevelMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]init(?ResourceStr, ?ResourceStr, ?Array<ButtonInfo>, ?DialogAlignment, ?Offset, ?Rectangle, ?Bool, ?Bool, ?ResourceColor, ?BlurStyle, ?ShadowOptions, ?Bool, ?HoverModeAreaType, ?LevelMode)
    
    
    public init(
        title!: ?ResourceStr = Option.None,
        message!: ?ResourceStr = Option.None,
        buttons!: ?Array<ButtonInfo> = Option.None,
        alignment!: ?DialogAlignment = Option.None,
        offset!: ?Offset = Option.None,
        maskRect!: ?Rectangle = Option.None,
        showInSubWindow!: ?Bool = Option.None,
        isModal!: ?Bool = Option.None,
        backgroundColor!: ?ResourceColor = Option.None,
        backgroundBlurStyle!: ?BlurStyle = Option.None,
        shadow!: ?ShadowOptions = Option.None,
        enableHoverMode!: ?Bool = Option.None,
        hoverModeArea!: ?HoverModeAreaType = Option.None,
        levelMode!: ?LevelMode = Option.None
    )

**功能：** 对话框显示选项构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | Option.None | **命名参数。** 标题文本。初始值：""，取值为""默认不显示标题。  
message | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | Option.None | **命名参数。** 内容文本。初始值：""，取值为""默认不显示内容。  
buttons | ?Array<ButtonInfo> | 否 | Option.None | **命名参数。** 对话框中按钮的数组，支持大于1个按钮。  
alignment | ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | Option.None |  **命名参数。** 对话框在竖直方向上的对齐方式。初始值：DialogAlignment.Default> **说明：** 若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。  
offset | ?[Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 否 | Option.None |  **命名参数。** 对话框相对alignment所在位置的偏移量。 初始值：Offset(dx: 0.vp, dy: 0.vp)。  
maskRect | ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | Option.None |  **命名参数。** 对话框遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。 初始值：Rectangle(x: 0.vp, y: 0.vp, width: 100.percent, height: 100.percent) **说明：** showInSubWindow为true时，maskRect不生效。 maskRect在设置Rectangle中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。  
showInSubWindow | ?Bool | 否 | Option.None |  **命名参数。** 某对话框需要显示在主窗口之外时，是否在子窗口显示此对话框。值为true表示在子窗口显示对话框。 初始值：false，对话框显示在应用内，而非独立子窗口。 **说明：** showInSubWindow为true的对话框无法触发显示另一个showInSubWindow为true的对话框。  
isModal | ?Bool | 否 | Option.None | **命名参数。** 对话框是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与对话框周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与对话框周围其他控件进行交互。初始值：true。  
backgroundColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | Option.None | **命名参数。** 对话框背板颜色。初始值：Color.Transparent。  
backgroundBlurStyle | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | Option.None | **命名参数。** 对话框背板模糊材质。初始值：BlurStyle.ComponentUltraThick。  
shadow | ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions) | 否 | Option.None | **命名参数。** 设置对话框背板的阴影。  
enableHoverMode | ?Bool | 否 | Option.None | **命名参数。** 是否响应悬停态，值为true时，响应悬停态。初始值：false，默认不响应。  
hoverModeArea | ?HoverModeAreaType | 否 | Option.None | **命名参数。** 设置悬停态下对话框的默认展示区域。初始值：HoverModeAreaType.BottomScreen。  
levelMode | ?LevelMode | 否 | Option.None |  **命名参数。** 设置弹窗显示层级。 **说明：** 初始值：LevelMode.Overlay 当且仅当showInSubWindow属性设置为false时生效。  
  
#### class ActionMenuConfig
    
    
    public class ActionMenuConfig {
        public var title: ?ResourceStr
        public var buttons: ?Array<ButtonInfo>
        public var showInSubWindow: ?Bool
        public var isModal: ?Bool
        public var levelMode: ?LevelMode
        public init(
            title!: ?ResourceStr = Option.None,
            buttons!: ?Array<ButtonInfo> = Option.None,
            showInSubWindow!: ?Bool = Option.None,
            isModal!: ?Bool = Option.None,
            levelMode!: ?LevelMode = Option.None
        )
    }

**功能：** 操作菜单的选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var title
    
    
    public var title: ?ResourceStr

**功能：** 标题文本。初始值：""，取值为""默认不显示标题。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var buttons
    
    
    public var buttons: ?Array<ButtonInfo>

**功能：** 菜单中菜单项按钮的数组，支持1-6个按钮。按钮数量大于6个时，仅显示前6个按钮，之后的按钮不显示。

**类型：** ?Array<ButtonInfo>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var showInSubWindow
    
    
    public var showInSubWindow: ?Bool

**功能：** 某操作菜单需要显示在主窗口之外时，是否在子窗口显示此菜单。值为true表示在子窗口显示菜单。初始值：false，在子窗口不显示菜单。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/VKDr3BUwRkOz8qhw3P-5xA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=8E50140A03016218CE2B307AFCF0A83ED23BCDB97D7F75C0D889757CA5B11AFD)

  * showInSubWindow为true的菜单无法触发显示另一个showInSubWindow为true的菜单。
  * 若在UIExtension中设置showInSubWindow为true, 菜单将基于UIExtension的宿主窗口对齐。



**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var isModal
    
    
    public var isModal: ?Bool

**功能：** 菜单是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与菜单周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与菜单周围其他控件进行交互。初始值：true

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]var levelMode
    
    
    public var levelMode: ?LevelMode

**功能：** 设置菜单显示层级。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/WBtofOBETsKBzon_USnthw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=33001D2A20D37395ED8979BDEBB0E9A8DDEEC731D08C57B275B7AF543B09ED46)

  * 初始值：LevelMode.Overlay。
  * 当且仅当showInSubWindow属性设置为false时生效。



**类型：** ?LevelMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]init(?ResourceStr, ?Array<ButtonInfo>, ?Bool, ?Bool, ?LevelMode)
    
    
    public init(
        title!: ?ResourceStr = Option.None,
        buttons!: ?Array<ButtonInfo> = Option.None,
        showInSubWindow!: ?Bool = Option.None,
        isModal!: ?Bool = Option.None,
        levelMode!: ?LevelMode = Option.None
    )

**功能：** 菜单操作选项构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | Option.None | **命名参数。** 要显示的文本标题。  
buttons | ?Array<ButtonInfo> | 否 | Option.None | **命名参数。** 按钮数组。  
showInSubWindow | ?Bool | 否 | Option.None |  **命名参数。** 某操作菜单需要显示在主窗口之外时，是否在子窗口显示此菜单。值为true表示在子窗口显示菜单。 初始值：false，在子窗口不显示菜单。 **说明：** showInSubWindow为true的菜单无法触发显示另一个showInSubWindow为true的菜单。 若在UIExtension中设置showInSubWindow为true, 菜单将基于UIExtension的宿主窗口对齐。  
isModal | ?Bool | 否 | Option.None | **命名参数。** 菜单是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与菜单周围其他控件进行交互，即蒙层区域无法事件透传。值为false表示为非模态窗口且无蒙层，可以与菜单周围其他控件进行交互。初始值：true。  
levelMode | ?LevelMode | 否 | Option.None |  **命名参数。** 设置弹窗显示层级。 **说明：** 初始值：LevelMode.Overlay 当且仅当showInSubWindow属性设置为false时生效。  
  
#### enum HoverModeAreaType
    
    
    public enum HoverModeAreaType <: Equatable<HoverModeAreaType> {
        | TopScreen
        | BottomScreen
        | ...
    }

**功能：** 提供悬停模式区域类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<HoverModeAreaType>



#### [h2]TopScreen
    
    
    TopScreen

**功能：** 顶部屏幕悬停模式区域类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]BottomScreen
    
    
    BottomScreen

**功能：** 底部屏幕悬停模式区域类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]operator func !=(HoverModeAreaType)
    
    
    public operator func !=(other: HoverModeAreaType): Bool

**功能：** 不等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | HoverModeAreaType | 是 | - | 要比较的另一个HoverModeAreaType实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，不相等时返回true。  
  
#### [h2]operator func ==(HoverModeAreaType)
    
    
    public operator func ==(other: HoverModeAreaType): Bool

**功能：** 相等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | HoverModeAreaType | 是 | - | 要比较的另一个HoverModeAreaType实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，相等时返回true。  
  
#### enum KeyboardAvoidMode
    
    
    public enum KeyboardAvoidMode <: Equatable<KeyboardAvoidMode> {
        | Default
        | None
        | ...
    }

**功能：** 提供键盘避免模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<KeyboardAvoidMode>



#### [h2]Default
    
    
    Default

**功能：** 默认键盘避免模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]None
    
    
    None

**功能：** 无键盘避免模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]operator func !=(KeyboardAvoidMode)
    
    
    public operator func !=(other: KeyboardAvoidMode): Bool

**功能：** 不等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | KeyboardAvoidMode | 是 | - | 要比较的另一个KeyboardAvoidMode实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，不相等时返回true。  
  
#### [h2]operator func ==(KeyboardAvoidMode)
    
    
    public operator func ==(other: KeyboardAvoidMode): Bool

**功能：** 相等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | KeyboardAvoidMode | 是 | - | 要比较的另一个KeyboardAvoidMode实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，相等时返回true。  
  
#### enum ToastShowMode
    
    
    public enum ToastShowMode <: Equatable<ToastShowMode> {
        | Default
        | TopMost
        | ...
    }

**功能：** Toast显示模式枚举。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<ToastShowMode>



#### [h2]Default
    
    
    Default

**功能：** Toast在应用内显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]TopMost
    
    
    TopMost

**功能：** Toast在顶部显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]operator func !=(ToastShowMode)
    
    
    public operator func !=(other: ToastShowMode): Bool

**功能：** 不等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ToastShowMode | 是 | - | 要比较的另一个ToastShowMode实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，不相等时返回true。  
  
#### [h2]operator func ==(ToastShowMode)
    
    
    public operator func ==(other: ToastShowMode): Bool

**功能：** 相等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ToastShowMode | 是 | - | 要比较的另一个ToastShowMode实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，相等时返回true。  
  
#### enum LevelMode
    
    
    public enum LevelMode <: Equatable<LevelMode> {
        | Overlay
        | Embedded
        | ...
    }

**功能：** 弹窗显示层级模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**父类型：**

  * Equatable<LevelMode>



#### [h2]Overlay
    
    
    Overlay

**功能：** 弹窗层级为应用窗口根节点，应用内路由导航切换弹窗不隐藏。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]Embedded
    
    
    Embedded

**功能：** 弹窗节点为页面内路由/导航下的节点，随路由导航切换，弹窗随页面隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/mtB8E3MJTNy4a3AVrDc0Cw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111631Z&HW-CC-Expire=86400&HW-CC-Sign=2C9E82CAA456A98DDBD34F5FAE7B2C47BAB633CD47D161C56E0C653C04285204)

  * 目前只支持挂载在Page或者NavDestination节点上，优先挂载在Page节点下，只支持在这两种页面内顶层显示。
  * 该模式下新起的页面可以覆盖在弹窗上，页面返回后该弹窗依旧存在，弹窗内容不会丢失。

-该模式下需确保目标页面节点如Page节点已挂载上树，再拉起弹窗，否则弹窗将无法挂载到对应的页面节点内。




**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

#### [h2]operator func !=(LevelMode)
    
    
    public operator func !=(other: LevelMode): Bool

**功能：** 不等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | LevelMode | 是 | - | 要比较的另一个LevelMode实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，不相等时返回true。  
  
#### [h2]operator func ==(LevelMode)
    
    
    public operator func ==(other: LevelMode): Bool

**功能：** 相等比较运算符。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 26.0.0

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | LevelMode | 是 | - | 要比较的另一个LevelMode实例。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 比较结果，相等时返回true。  
  
#### type ShowDialogCallBack
    
    
    public type ShowDialogCallBack = AsyncCallback<Int32>

**功能：** ShowDialogCallBack回调函数

**类型：** [AsyncCallback<Int32>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#type-asynccallbackt)

#### type ShowActionMenuCallBack
    
    
    public type ShowActionMenuCallBack = AsyncCallback<Int32>

**功能：** ShowActionMenuCallBack回调函数

**类型：** [AsyncCallback<Int32>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#type-asynccallbackt)
