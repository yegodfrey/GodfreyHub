---
name: cangjie-references/cj-dialog-actionsheet
title: 列表选择弹窗（ActionSheet）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-actionsheet
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 弹窗 / 列表选择弹窗（ActionSheet）
---

# 列表选择弹窗（ActionSheet）  
  
列表弹窗。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class SheetInfo
    
    
    public class SheetInfo {
        public var title: ?ResourceStr
        public var icon: ?ResourceStr
        public var action: ?VoidCallback
        public init(
            title!: ?ResourceStr,
            icon!: ?ResourceStr = None,
            action!: ?VoidCallback
        )
    }

**功能：** 设置选项内容，每个选择项支持设置图片、文本和选中的回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var action
    
    
    public var action: ?VoidCallback

**功能：** 选项选中的回调。

**类型：** ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var icon
    
    
    public var icon: ?ResourceStr

**功能：** 选项的图标，默认无图标显示。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var title
    
    
    public var title: ?ResourceStr

**功能：** 选项的文本内容。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?ResourceStr, ?ResourceStr, ?VoidCallback)
    
    
    public init(
        title!: ?ResourceStr,
        icon!: ?ResourceStr = None,
        action!: ?VoidCallback
    )

**功能：** SheetInfo类的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 选项的文本内容。 文本超长时会触发滚动条。  
icon | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 选项的图标，默认无图标显示。 string格式可用于加载网络图片和本地图片，常用于加载网络图片。当使用相对路径引用本地图片时，例如Image("common/test.jpg")。  
action | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | **命名参数。** 选项选中时的回调。  
  
#### class ActionSheetButtonOptions
    
    
    public class ActionSheetButtonOptions {
        public var enabled: ?Bool
        public var defaultFocus: ?Bool
        public var style: ?DialogButtonStyle
        public var value: ?ResourceStr
        public var action: ?VoidCallback
        public init(
            enabled!: ?Bool = None,
            defaultFocus!: ?Bool = None,
            style!: ?DialogButtonStyle = None,
            value!: ?ResourceStr,
            action!: ?VoidCallback
        )
    }

**功能：** 弹窗中按钮的样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var action
    
    
    public var action: ?VoidCallback

**功能：** Button选中时的回调。

**类型：** ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var defaultFocus
    
    
    public var defaultFocus: ?Bool

**功能：** 设置Button是否是默认焦点。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var enabled
    
    
    public var enabled: ?Bool

**功能：** 点击Button是否响应。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var style
    
    
    public var style: ?DialogButtonStyle

**功能：** 设置Button的风格样式。

**类型：** ?[DialogButtonStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogbuttonstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var value
    
    
    public var value: ?ResourceStr

**功能：** Button文本内容。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?Bool, ?Bool, ?DialogButtonStyle, ?ResourceStr, ?VoidCallback)
    
    
    public init(
        enabled!: ?Bool = None,
        defaultFocus!: ?Bool = None,
        style!: ?DialogButtonStyle = None,
        value!: ?ResourceStr,
        action!: ?VoidCallback
    )

**功能：** ActionSheetButtonOptions类的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
enabled | ?Bool | 否 | None | **命名参数。** 点击Button是否响应，true表示Button可以响应，false表示Button不可以响应。  
defaultFocus | ?Bool | 否 | None | **命名参数。** 设置Button是否是默认焦点，true表示Button是默认焦点，false表示Button不是默认焦点。  
style | ?[DialogButtonStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogbuttonstyle) | 否 | None | **命名参数。** 设置Button的风格样式。  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** Button文本内容。  
action | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | **命名参数。** Button选中时的回调。  
  
#### class DismissDialogAction
    
    
    public class DismissDialogAction {
        public var reason: DismissReason
        public init(reason: DismissReason)
    }

**功能：** Dialog关闭的信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var reason
    
    
    public var reason: DismissReason

**功能：** Dialog无法关闭原因。根据开发者需要选择不同操作下，Dialog是否需要关闭。

**类型：** [DismissReason](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dismissreason)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(DismissReason)
    
    
    public init(reason: DismissReason)

**功能：** DismissDialogAction类的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
reason | [DismissReason](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dismissreason) | 是 | - | Dialog无法关闭原因。根据开发者需要选择不同操作下，Dialog是否需要关闭。  
  
#### [h2]func dismiss()
    
    
    public func dismiss(): Unit

**功能：** Dialog关闭回调函数。开发者需要退出时调用，不需要退出时无需调用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### class ActionSheetOffset
    
    
    public class ActionSheetOffset {
        public var dx: ?Length
        public var dy: ?Length
        public init(
            dx!: ?Length,
            dy!: ?Length
        )
    }

**功能：** 弹窗的对齐方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var dx
    
    
    public var dx: ?Length

**功能：** 弹出窗口相对于对齐位置dx的偏移量。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var dy
    
    
    public var dy: ?Length

**功能：** 弹出窗口相对于对齐位置dy的偏移量。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?Length, ?Length)
    
    
    public init(
        dx!: ?Length,
        dy!: ?Length
    )

**功能：** ActionSheetOffset类的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
dx | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 弹出窗口相对于对齐位置dx的偏移量。  
dy | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 弹出窗口相对于对齐位置dy的偏移量。  
  
#### class ActionSheetOptions
    
    
    public class ActionSheetOptions {
        public var title: ?ResourceStr
        public var subtitle: ?ResourceStr
        public var message: ?ResourceStr
        public var confirm: ?ActionSheetButtonOptions
        public var cancel: ?VoidCallback
        public var sheets: ?Array<SheetInfo>
        public var autoCancel: ?Bool
        public var alignment: ?DialogAlignment
        public var offset: ?ActionSheetOffset
        public var maskRect: ?Rectangle
        public var showInSubWindow: ?Bool
        public var isModal: ?Bool
        public var backgroundColor: ?ResourceColor
        public var backgroundBlurStyle: ?BlurStyle
        public var onWillDismiss: ?Callback<DismissDialogAction, Unit>
        public var transition: ?TransitionEffect
        public var cornerRadius: ?BorderRadiuses
        public var width: ?Length
        public var height: ?Length
        public var borderWidth: ?Length
        public var borderColor: ?ResourceColor
        public var borderStyle: ?EdgeStyles
        public var shadow: ?ShadowOptions
        public init(
            title!: ?ResourceStr,
            subtitle!: ?ResourceStr = None,
            message!: ?ResourceStr,
            confirm!: ?ActionSheetButtonOptions = None,
            cancel!: ?VoidCallback = None,
            sheets!: ?Array<SheetInfo>,
            autoCancel!: ?Bool = None,
            alignment!: ?DialogAlignment = None,
            offset!: ?ActionSheetOffset = None,
            maskRect!: ?Rectangle = None,
            showInSubWindow!: ?Bool = None,
            isModal!: ?Bool = None,
            backgroundColor!: ?ResourceColor = None,
            backgroundBlurStyle!: ?BlurStyle = None,
            onWillDismiss!: ?Callback<DismissDialogAction, Unit> = None,
            transition!: ?TransitionEffect = None,
            cornerRadius!: ?BorderRadiuses = None,
            width!: ?Length = None,
            height!: ?Length = None,
            borderWidth!: ?Length = None,
            borderColor!: ?ResourceColor = None,
            borderStyle!: ?EdgeStyles = None,
            shadow!: ?ShadowOptions = None
        )
    }

**功能：** ActionSheet弹窗的配置选项。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var title
    
    
    public var title: ?ResourceStr

**功能：** 弹窗标题。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var subtitle
    
    
    public var subtitle: ?ResourceStr

**功能：** 弹窗副标题。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var message
    
    
    public var message: ?ResourceStr

**功能：** 弹窗内容。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var confirm
    
    
    public var confirm: ?ActionSheetButtonOptions

**功能：** 确认Button的使能状态、默认焦点、按钮风格、文本内容和点击回调。在弹窗获焦且未进行tab键走焦时，该按钮默认响应Enter键，且多重弹窗可自动获焦连续响应。

**类型：** ?ActionSheetButtonOptions

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var cancel
    
    
    public var cancel: ?VoidCallback

**功能：** 点击遮障层关闭dialog时的回调。

**类型：** ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var sheets
    
    
    public var sheets: ?Array<SheetInfo>

**功能：** 设置选项内容，每个选择项支持设置图片、文本和选中的回调。

**类型：** ?Array<SheetInfo>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var autoCancel
    
    
    public var autoCancel: ?Bool

**功能：** 点击遮障层时，是否关闭弹窗。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var alignment
    
    
    public var alignment: ?DialogAlignment

**功能：** 弹窗在竖直方向上的对齐方式。

**类型：** ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var offset
    
    
    public var offset: ?ActionSheetOffset

**功能：** 弹窗相对alignment所在位置的偏移量。

**类型：** ?ActionSheetOffset

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var maskRect
    
    
    public var maskRect: ?Rectangle

**功能：** 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。

**类型：** ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var showInSubWindow
    
    
    public var showInSubWindow: ?Bool

**功能：** 某弹框需要显示在主窗口之外时，是否在子窗口显示此弹窗。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var isModal
    
    
    public var isModal: ?Bool

**功能：** 弹窗是否为模态窗口，模态窗口有蒙层，非模态窗口无蒙层。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundColor
    
    
    public var backgroundColor: ?ResourceColor

**功能：** 弹窗背板颜色。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var backgroundBlurStyle
    
    
    public var backgroundBlurStyle: ?BlurStyle

**功能：** 弹窗背板模糊材质。

**类型：** ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var onWillDismiss
    
    
    public var onWillDismiss: ?Callback<DismissDialogAction, Unit>

**功能：** 交互���关闭回调函数。

**类型：** ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<DismissDialogAction, Unit>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var transition
    
    
    public var transition: ?TransitionEffect

**功能：** 设置弹窗显示和退出的过渡效果。

**类型：** ?[TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var cornerRadius
    
    
    public var cornerRadius: ?BorderRadiuses

**功能：** 设置背板的圆角半径。可分别设置4个圆角的半径。

**类型：** ?[BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var width
    
    
    public var width: ?Length

**功能：** 设置弹窗背板的宽度。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var height
    
    
    public var height: ?Length

**功能：** 设置弹窗背板的高度。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var borderWidth
    
    
    public var borderWidth: ?Length

**功能：** 设置弹窗背板的边框宽度。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var borderColor
    
    
    public var borderColor: ?ResourceColor

**功能：** 设置弹窗背板的边框颜色。如果使用borderColor属性，需要和borderWidth属性一起使用。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var borderStyle
    
    
    public var borderStyle: ?EdgeStyles

**功能：** 设置弹窗背板的边框样式。如果使用borderStyle属性，需要和borderWidth属性一起使用。

**类型：** ?[EdgeStyles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgestyles)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]var shadow
    
    
    public var shadow: ?ShadowOptions

**功能：** 设置弹窗背板的阴影。

**类型：** ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(?ResourceStr, ?ResourceStr, ?ResourceStr, ?ActionSheetButtonOptions, ?VoidCallback, ?Array<SheetInfo>, ?Bool, ?DialogAlignment, ?ActionSheetOffset, ?Rectangle, ?Bool, ?Bool, ?ResourceColor, ?BlurStyle, ?Callback<DismissDialogAction, Unit>, ?TransitionEffect, ?BorderRadiuses, ?Length, ?Length, ?Length, ?ResourceColor, ?EdgeStyles, ?ShadowOptions)
    
    
    public init(
        title!: ?ResourceStr,
        subtitle!: ?ResourceStr = None,
        message!: ?ResourceStr,
        confirm!: ?ActionSheetButtonOptions = None,
        cancel!: ?VoidCallback = None,
        sheets!: ?Array<SheetInfo>,
        autoCancel!: ?Bool = None,
        alignment!: ?DialogAlignment = None,
        offset!: ?ActionSheetOffset = None,
        maskRect!: ?Rectangle = None,
        showInSubWindow!: ?Bool = None,
        isModal!: ?Bool = None,
        backgroundColor!: ?ResourceColor = None,
        backgroundBlurStyle!: ?BlurStyle = None,
        onWillDismiss!: ?Callback<DismissDialogAction, Unit> = None,
        transition!: ?TransitionEffect = None,
        cornerRadius!: ?BorderRadiuses = None,
        width!: ?Length = None,
        height!: ?Length = None,
        borderWidth!: ?Length = None,
        borderColor!: ?ResourceColor = None,
        borderStyle!: ?EdgeStyles = None,
        shadow!: ?ShadowOptions = None
    )

**功能：** ActionSheetOptions类的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
title | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 弹窗标题。 当文本内容过长无法显示时，用省略号代替未显示的部分。  
subtitle | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 弹窗副标题。 当文本内容过长无法显示时，用省略号代替未显示的部分。  
message | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 弹窗内容。 文本超长时会触发滚动条。  
confirm | ?ActionSheetButtonOptions | 否 | None | **命名参数。** 确认Button的使能状态、默认焦点、按钮风格、文本内容和点击回调。在弹窗获焦且未进行tab键走焦时，该按钮默认响应Enter键，且多重弹窗可自动获焦连续响应。默认响应Enter键能力在defaultFocus为true时不生效。 enabled：点击Button是否响应，true表示Button可以响应，false表示Button不可以响应。 初始值：true。 defaultFocus：设置Button是否是默认焦点，true表示Button是默认焦点，false表示Button不是默认焦点。 初始值：false。 style：设置Button的风格样式。 初始值：DialogButtonStyle.DEFAULT。 value：Button文本内容。当文本内容过长无法显示时，用省略号代替未显示的部分。 action: Button选中时的回调。  
cancel | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 否 | None | **命名参数。** 点击遮障层关闭dialog时的回调。  
sheets | ?Array<SheetInfo> | 是 | - | **命名参数。** 设置选项内容，每个选择项支持设置图片、文本和选中的回调。  
autoCancel | ?Bool | 否 | None | **命名参数。** 点击遮障层时，是否关闭弹窗。 值为true时，点击遮障层关闭弹窗，值为false时，点击遮障层不关闭弹窗。  
alignment | ?[DialogAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-dialogalignment) | 否 | None | **命名参数。** 弹窗在竖直方向上的对齐方式。  
offset | ?ActionSheetOffset | 否 | None | **命名参数。** 弹窗相对alignment所在位置的偏移量。  
maskRect | ?[Rectangle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-rectangle) | 否 | None | **命名参数。** 弹窗遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。  **说明:** showInSubWindow为true时，maskRect不生效。  
showInSubWindow | ?Bool | 否 | None | **命名参数。** 某弹框需要显示在主窗口之外时，是否在子窗口显示此弹窗。 初始值：false，弹窗显示在应用内，而非独立子窗口。 **说明:** showInSubWindow为true的弹窗无法触发显示另一个showInSubWindow为true的弹窗。  
isModal | ?Bool | 否 | None | **命名参数。** 弹窗是否为模态窗口，模态窗口有蒙层，非模态窗口无蒙层。 初始值：true，此时弹窗有蒙层。  
backgroundColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | None | **命名参数。** 弹窗背板颜色。 **说明:** 当设置了backgroundColor为非透明色时，backgroundBlurStyle需要设置为BlurStyle.NONE，否则颜色显示将不符合预期效果。  
backgroundBlurStyle | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 否 | None | **命名参数。** 弹窗背板模糊材质。 **说明:** 设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。  
onWillDismiss | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<DismissDialogAction, Unit> | 否 | None | **命名参数。** 交互式关闭回调函数。  **说明:** 1.当用户执行点击遮障层关闭、左滑/右滑、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前组件返回的reason中，暂不支持CLOSE_BUTTON的枚举值。 2.在onWillDismiss回调中，不能再做onWillDismiss拦截。  
transition | ?[TransitionEffect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#class-transitioneffect) | 否 | None | **命名参数。** 设置弹窗显示和退出的过渡效果。  **说明:** 1.如果不设置，则使用默认的显示/退出动效。  2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。  
cornerRadius | ?[BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses) | 否 | None | **命名参数。** 设置背板的圆角半径。可分别设置4个圆角的半径。 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。  百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 设置弹窗背板的宽度。 **说明:** 1\. 弹窗宽度默认最大值：400.vp。 2\. 百分比参数方式：弹窗参考宽度为所在窗口的宽度，在此基础上调小或调大。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 设置弹窗背板的高度。 **说明:** 1\. 弹窗高度默认最大值：0.9 *（窗口高度 - 安全区域） 。 2\. 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。  
borderWidth | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 设置弹窗背板的边框宽度。 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。 当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。  
borderColor | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | None | **命名参数。** 设置弹窗背板的边框颜色。如果使用borderColor属性，需要和borderWidth属性一起使用。  
borderStyle | ?[EdgeStyles](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgestyles) | 否 | None | **命名参数。** 设置弹窗背板的边框样式 。 如果使用borderStyle属性，需要和borderWidth属性一起使用。  
shadow | ?[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions) | 否 | None | **命名参数。** 设置弹窗背板的阴影。 初始值： API version 26之前，初始值为ShadowOptions(radius: 0.0)； 从API version 26开始，初始值为ShadowOptions(radius: -1.0)。
