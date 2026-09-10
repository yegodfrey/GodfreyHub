---
name: cangjie-references/cj-apis-uicontext-uicontext
title: UIContext
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.ui_context（UIContext） / UIContext
---

# UIContext  
  
提供UI上下文相关功能。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class UIContext
    
    
    public class UIContext {}

**功能：** UI上下文类，提供各种UI相关功能。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func animateTo(AnimateParam, VoidCallback)
    
    
    public func animateTo(value: AnimateParam, event: VoidCallback): Unit

**功能：** 提供animateTo接口来指定由于闭包代码导致的状态变化插入过渡动效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [AnimateParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-animateparam) | 是 | - | 动画参数。  
event | [VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 动画执行的回调函数。  
  
#### [h2]func createAnimator(AnimatorOptions)
    
    
    public func createAnimator(options: AnimatorOptions): AnimatorResult

**功能：** 创建animator动画结果对象（AnimatorResult）。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | [AnimatorOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-animator#class-animatoroptions) | 是 | - | 动画选项。  
  
**返回值：**

类型 | 说明  
---|---  
[AnimatorResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-animator#class-animatorresult) | 动画结果对象。  
  
#### [h2]func fp2px(Length)
    
    
    public func fp2px(value: Length): Option<Length>

**功能：** 将fp单位的值转换为px单位的值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 要转换的值。  
  
**返回值：**

类型 | 说明  
---|---  
Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 转换后的值。  
  
#### [h2]func getContextMenuController()
    
    
    public func getContextMenuController(): ContextMenuController

**功能：** 获取上下文菜单控制器对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[ContextMenuController](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-contextmenucontroller#class-contextmenucontroller) | 上下文菜单控制器对象。  
  
#### [h2]func getFont()
    
    
    public func getFont(): Font

**功能：** 获取字体对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[Font](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-font) | 字体对象。  
  
#### [h2]func getMeasureUtils()
    
    
    public func getMeasureUtils(): MeasureUtils

**功能：** 获取测量工具对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[MeasureUtils](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-measureutils#class-measureutils) | MeasureUtils对象。  
  
#### [h2]func getPromptAction()
    
    
    public func getPromptAction(): PromptAction

**功能：** 获取PromptAction对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[PromptAction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-promptaction#class-promptaction) | PromptAction对象。  
  
#### [h2]func getRouter()
    
    
    public func getRouter(): Router

**功能：** 获取路由对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[Router](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-router#class-router) | 路由对象。  
  
#### [h2]func lpx2px(Length)
    
    
    public func lpx2px(value: Length): Option<Length>

**功能：** 将lpx单位的值转换为px单位的值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 要转换的值。  
  
**返回值：**

类型 | 说明  
---|---  
Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 转换后的值。  
  
#### [h2]func px2fp(Length)
    
    
    public func px2fp(value: Length): Option<Length>

**功能：** 将px单位的值转换为fp单位的值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 要转换的值。  
  
**返回值：**

类型 | 说明  
---|---  
Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 转换后的值。  
  
#### [h2]func px2lpx(Length)
    
    
    public func px2lpx(value: Length): Option<Length>

**功能：** 将px单位的值转换为lpx单位的值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 要转换的值。  
  
**返回值：**

类型 | 说明  
---|---  
Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 转换后的值。  
  
#### [h2]func px2vp(Length)
    
    
    public func px2vp(value: Length): Option<Length>

**功能：** 将px单位的值转换为vp单位的值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 要转换的值。  
  
**返回值：**

类型 | 说明  
---|---  
Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 转换后的值。  
  
#### [h2]func showActionSheet(ActionSheetOptions)
    
    
    public func showActionSheet(value: ActionSheetOptions): Unit

**功能：** 定义列表弹窗并弹出。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [ActionSheetOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-actionsheet#class-actionsheetoptions) | 是 | - | 操作表参数。  
  
#### [h2]func showAlertDialog(AlertDialogParamWithConfirm)
    
    
    public func showAlertDialog(options: AlertDialogParamWithConfirm): Unit

**功能：** 显示警告对话框。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | [AlertDialogParamWithConfirm](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-alertdialog#class-alertdialogparamwithconfirm) | 是 | - | 警告对话框参数。  
  
#### [h2]func showAlertDialog(AlertDialogParamWithButtons)
    
    
    public func showAlertDialog(options: AlertDialogParamWithButtons): Unit

**功能：** 显示警告对话框。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | [AlertDialogParamWithButtons](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-alertdialog#class-alertdialogparamwithbuttons) | 是 | - | 警告对话框参数。  
  
#### [h2]func showAlertDialog(AlertDialogParamWithOptions)
    
    
    public func showAlertDialog(options: AlertDialogParamWithOptions): Unit

**功能：** 显示警告对话框。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | [AlertDialogParamWithOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-dialog-alertdialog#class-alertdialogparamwithoptions) | 是 | - | 警告对话框参数。  
  
#### [h2]func vp2px(Length)
    
    
    public func vp2px(value: Length): Option<Length>

**功能：** 将vp单位的值转换为px单位的值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 要转换的值。  
  
**返回值：**

类型 | 说明  
---|---  
Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 转换后的值。
