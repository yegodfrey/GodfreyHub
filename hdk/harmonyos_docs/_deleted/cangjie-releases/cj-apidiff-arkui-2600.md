---
name: cangjie-releases/cj-apidiff-arkui-2600
title: ArkUI
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-releases/cj-apidiff-arkui-2600
nodePath: 版本说明 / HarmonyOS 26.0.0-仓颉 / OS平台能力 / API变更清单 / ArkUI
---

# ArkUI

操作 | 旧版本 | 新版本 | cj.d文件  
---|---|---|---  
新增API | NA | 类名：LengthMetrics API声明：public static let AUTO: Length = LengthMetrics(0.0, unit: LengthUnit.Auto) 差异内容：public static let AUTO: Length = LengthMetrics(0.0, unit: LengthUnit.Auto) | ohos.base.cj.d  
新增API | NA | 类名：LevelMode API声明：public enum LevelMode 差异内容：public enum LevelMode | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var shadow: ?ShadowOptions 差异内容：public var shadow: ?ShadowOptions | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var backgroundBlurStyle: ?BlurStyle 差异内容：public var backgroundBlurStyle: ?BlurStyle | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var message: ?ResourceStr 差异内容：public var message: ?ResourceStr | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop offset: ?Offset 差异内容：public mut prop offset: ?Offset | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var backgroundColor: ?ResourceColor 差异内容：public var backgroundColor: ?ResourceColor | ohos.arkui.ui_context  
新增API | NA | 类名：LevelMode API声明：public operator func ==(other: LevelMode): Bool 差异内容：public operator func ==(other: LevelMode): Bool | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop maskRect: ?Rectangle 差异内容：public mut prop maskRect: ?Rectangle | ohos.arkui.ui_context  
新增API | NA | 类名：PromptAction API声明：public func showActionMenu(option: ActionMenuConfig, callback!: ShowActionMenuCallBack = defaultCallback) 差异内容：public func showActionMenu(option: ActionMenuConfig, callback!: ShowActionMenuCallBack = defaultCallback) | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop onDidDisappear: ?() -> Unit 差异内容：public mut prop onDidDisappear: ?() -> Unit | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop autoCancel: ?Bool 差异内容：public mut prop autoCancel: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop isModal: ?Bool 差异内容：public mut prop isModal: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明：public class ActionMenuConfig 差异内容：public class ActionMenuConfig | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var offset: ?Offset 差异内容：public var offset: ?Offset | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var levelMode: ?LevelMode 差异内容：public var levelMode: ?LevelMode | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明：public var showInSubWindow: ?Bool 差异内容：public var showInSubWindow: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var backgroundBlurStyle: ?BlurStyle 差异内容：public var backgroundBlurStyle: ?BlurStyle | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop onWillDisappear: ?() -> Unit 差异内容：public mut prop onWillDisappear: ?() -> Unit | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop hoverModeArea: ?HoverModeAreaType 差异内容：public mut prop hoverModeArea: ?HoverModeAreaType | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var hoverModeArea: ?HoverModeAreaType 差异内容：public var hoverModeArea: ?HoverModeAreaType | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop enableHoverMode: ?Bool 差异内容：public mut prop enableHoverMode: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：PromptAction API声明：public func showDialog(option: ShowDialogConfig, callback!: ShowDialogCallBack = defaultCallback) 差异内容：public func showDialog(option: ShowDialogConfig, callback!: ShowDialogCallBack = defaultCallback) | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var builder: () -> Unit 差异内容：public var builder: () -> Unit | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var borderWidth: ?EdgeWidths 差异内容：public var borderWidth: ?EdgeWidths | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var alignment: ?DialogAlignment 差异内容：public var alignment: ?DialogAlignment | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop alignment: ?DialogAlignment 差异内容：public mut prop alignment: ?DialogAlignment | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明：public var buttons: ?Array<ButtonInfo> 差异内容：public var buttons: ?Array<ButtonInfo> | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop onDidAppear: ?() -> Unit 差异内容：public mut prop onDidAppear: ?() -> Unit | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var width: ?Length 差异内容：public var width: ?Length | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明：public var title: ?ResourceStr 差异内容：public var title: ?ResourceStr | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var backgroundColor: ?ResourceColor 差异内容：public var backgroundColor: ?ResourceColor | ohos.arkui.ui_context  
新增API | NA | 类名：PromptAction API声明：public func openCustomDialog(options: CustomDialogConfig, callback: (Int32) -> Unit): Unit 差异内容：public func openCustomDialog(options: CustomDialogConfig, callback: (Int32) -> Unit): Unit | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop keyboardAvoidMode: ?KeyboardAvoidMode 差异内容：public mut prop keyboardAvoidMode: ?KeyboardAvoidMode | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public class CustomDialogConfig <: BaseDialogConfig 差异内容：public class CustomDialogConfig <: BaseDialogConfig | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明： public init( title!: ?ResourceStr = Option.None, buttons!: ?Array<ButtonInfo> = Option.None, showInSubWindow!: ?Bool = Option.None, isModal!: ?Bool = Option.None, levelMode!: ?LevelMode = Option.None ) 差异内容： public init( title!: ?ResourceStr = Option.None, buttons!: ?Array<ButtonInfo> = Option.None, showInSubWindow!: ?Bool = Option.None, isModal!: ?Bool = Option.None, levelMode!: ?LevelMode = Option.None ) | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明： public init( maskRect!: ?Rectangle = Option.None, alignment!: ?DialogAlignment = Option.None, offset!: ?Offset = Option.None, isModal!: ?Bool = Option.None, showInSubWindow!: ?Bool = Option.None, autoCancel!: ?Bool = Option.None, maskColor!: ?ResourceColor = Option.None, transition!: ?TransitionEffect = Option.None, onDidAppear!: ?() -> Unit = Option.None, onDidDisappear!: ?() -> Unit = Option.None, onWillAppear!: ?() -> Unit = Option.None, onWillDisappear!: ?() -> Unit = Option.None, keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None, enableHoverMode!: ?Bool = Option.None, hoverModeArea!: ?HoverModeAreaType = Option.None, levelMode!: ?LevelMode = Option.None ) 差异内容： public init( maskRect!: ?Rectangle = Option.None, alignment!: ?DialogAlignment = Option.None, offset!: ?Offset = Option.None, isModal!: ?Bool = Option.None, showInSubWindow!: ?Bool = Option.None, autoCancel!: ?Bool = Option.None, maskColor!: ?ResourceColor = Option.None, transition!: ?TransitionEffect = Option.None, onDidAppear!: ?() -> Unit = Option.None, onDidDisappear!: ?() -> Unit = Option.None, onWillAppear!: ?() -> Unit = Option.None, onWillDisappear!: ?() -> Unit = Option.None, keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None, enableHoverMode!: ?Bool = Option.None, hoverModeArea!: ?HoverModeAreaType = Option.None, levelMode!: ?LevelMode = Option.None ) | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var showInSubWindow: ?Bool 差异内容：public var showInSubWindow: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var cornerRadius: ?BorderRadiuses 差异内容：public var cornerRadius: ?BorderRadiuses | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop showInSubWindow: ?Bool 差异内容：public mut prop showInSubWindow: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var maskRect: ?Rectangle 差异内容：public var maskRect: ?Rectangle | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var title: ?ResourceStr 差异内容：public var title: ?ResourceStr | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop maskColor: ?ResourceColor 差异内容：public mut prop maskColor: ?ResourceColor | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var enableHoverMode: ?Bool 差异内容：public var enableHoverMode: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop onWillAppear: ?() -> Unit 差异内容：public mut prop onWillAppear: ?() -> Unit | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明： public init( title!: ?ResourceStr = Option.None, message!: ?ResourceStr = Option.None, buttons!: ?Array<ButtonInfo> = Option.None, alignment!: ?DialogAlignment = Option.None, offset!: ?Offset = Option.None, maskRect!: ?Rectangle = Option.None, showInSubWindow!: ?Bool = Option.None, isModal!: ?Bool = Option.None, backgroundColor!: ?ResourceColor = Option.None, backgroundBlurStyle!: ?BlurStyle = Option.None, shadow!: ?ShadowOptions = Option.None, enableHoverMode!: ?Bool = Option.None, hoverModeArea!: ?HoverModeAreaType = Option.None, levelMode!: ?LevelMode = Option.None ) 差异内容： public init( title!: ?ResourceStr = Option.None, message!: ?ResourceStr = Option.None, buttons!: ?Array<ButtonInfo> = Option.None, alignment!: ?DialogAlignment = Option.None, offset!: ?Offset = Option.None, maskRect!: ?Rectangle = Option.None, showInSubWindow!: ?Bool = Option.None, isModal!: ?Bool = Option.None, backgroundColor!: ?ResourceColor = Option.None, backgroundBlurStyle!: ?BlurStyle = Option.None, shadow!: ?ShadowOptions = Option.None, enableHoverMode!: ?Bool = Option.None, hoverModeArea!: ?HoverModeAreaType = Option.None, levelMode!: ?LevelMode = Option.None ) | ohos.arkui.ui_context  
新增API | NA | 类名：LevelMode API声明：Embedded 差异内容：Embedded | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明： public init( builder!: () -> Unit, maskRect!: ?Rectangle = Option.None, alignment!: ?DialogAlignment = Option.None, offset!: ?Offset = Option.None, isModal!: ?Bool = Option.None, showInSubWindow!: ?Bool = Option.None, autoCancel!: ?Bool = Option.None, maskColor!: ?ResourceColor = Option.None, transition!: ?TransitionEffect = Option.None, onDidAppear!: ?() -> Unit = Option.None, onDidDisappear!: ?() -> Unit = Option.None, onWillAppear!: ?() -> Unit = Option.None, onWillDisappear!: ?() -> Unit = Option.None, keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None, enableHoverMode!: ?Bool = Option.None, hoverModeArea!: ?HoverModeAreaType = Option.None, levelMode!: ?LevelMode = Option.None, backgroundColor!: ?ResourceColor = Option.None, cornerRadius!: ?BorderRadiuses = Option.None, borderWidth!: ?EdgeWidths = Option.None, borderColor!: ?EdgeColors = Option.None, borderStyle!: ?EdgeStyles = Option.None, width!: ?Length = Option.None, height!: ?Length = Option.None, shadow!: ?ShadowOptions = Option.None, backgroundBlurStyle!: ?BlurStyle = Option.None ) 差异内容： public init( builder!: () -> Unit, maskRect!: ?Rectangle = Option.None, alignment!: ?DialogAlignment = Option.None, offset!: ?Offset = Option.None, isModal!: ?Bool = Option.None, showInSubWindow!: ?Bool = Option.None, autoCancel!: ?Bool = Option.None, maskColor!: ?ResourceColor = Option.None, transition!: ?TransitionEffect = Option.None, onDidAppear!: ?() -> Unit = Option.None, onDidDisappear!: ?() -> Unit = Option.None, onWillAppear!: ?() -> Unit = Option.None, onWillDisappear!: ?() -> Unit = Option.None, keyboardAvoidMode!: ?KeyboardAvoidMode = Option.None, enableHoverMode!: ?Bool = Option.None, hoverModeArea!: ?HoverModeAreaType = Option.None, levelMode!: ?LevelMode = Option.None, backgroundColor!: ?ResourceColor = Option.None, cornerRadius!: ?BorderRadiuses = Option.None, borderWidth!: ?EdgeWidths = Option.None, borderColor!: ?EdgeColors = Option.None, borderStyle!: ?EdgeStyles = Option.None, width!: ?Length = Option.None, height!: ?Length = Option.None, shadow!: ?ShadowOptions = Option.None, backgroundBlurStyle!: ?BlurStyle = Option.None ) | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var borderColor: ?EdgeColors 差异内容：public var borderColor: ?EdgeColors | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明：public var isModal: ?Bool 差异内容：public var isModal: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：ActionMenuConfig API声明：public var levelMode: ?LevelMode 差异内容：public var levelMode: ?LevelMode | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop levelMode: ?LevelMode 差异内容：public mut prop levelMode: ?LevelMode | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var borderStyle: ?EdgeStyles 差异内容：public var borderStyle: ?EdgeStyles | ohos.arkui.ui_context  
新增API | NA | 类名：CustomDialogConfig API声明：public var height: ?Length 差异内容：public var height: ?Length | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var shadow: ?ShadowOptions 差异内容：public var shadow: ?ShadowOptions | ohos.arkui.ui_context  
新增API | NA | 类名：LevelMode API声明：public operator func !=(other: LevelMode): Bool 差异内容：public operator func !=(other: LevelMode): Bool | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var isModal: ?Bool 差异内容：public var isModal: ?Bool | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public var buttons: ?Array<ButtonInfo> 差异内容：public var buttons: ?Array<ButtonInfo> | ohos.arkui.ui_context  
新增API | NA | 类名：LevelMode API声明：Overlay 差异内容：Overlay | ohos.arkui.ui_context  
新增API | NA | 类名：ShowDialogConfig API声明：public class ShowDialogConfig 差异内容：public class ShowDialogConfig | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public open class BaseDialogConfig 差异内容：public open class BaseDialogConfig | ohos.arkui.ui_context  
新增API | NA | 类名：BaseDialogConfig API声明：public mut prop transition: ?TransitionEffect 差异内容：public mut prop transition: ?TransitionEffect | ohos.arkui.ui_context
