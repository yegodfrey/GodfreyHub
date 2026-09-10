---
name: cangjie-references/cj-web-web
title: Web
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / Web / Web
---

# Web

提供具有网页显示能力的Web组件，[@ohos.web.webview](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview)提供web控制能力。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(ResourceStr, WebviewController)
    
    
    public init(
        src!: ResourceStr,
        controller!: WebviewController
    )

**功能：** 创建一个Web组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/fcETKGXqSeuoS8MI3BaJJA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=164C93F045B6DBF33F0F012AFBC4F1C2F34B583F80CDE05719FDB2629807656A)

  * 不支持转场动画。
  * 同一页面的多个Web组件，必须绑定不同的WebviewController。



**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** src不能通过状态变量（例如：@State）动态更改地址。  
controller | [WebviewController](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#class-webviewcontroller) | 是 | - | **命名参数。** 设置Web控制器。  
  
#### 通用属性/通用事件

通用属性：仅支持[aspectRatio](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-aspectratiofloat64)、[backdropBlur](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-imageeffect#func-backdropblurfloat64)、[backgroundColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-background#func-backgroundcolorresourcecolor)、[bindContentCover](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu)、[bindContextMenu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu#func-bindcontextmenucustombuilder-responsetype-contextmenuoptions)、[bindMenu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu#func-bindmenuarraymenuelement) 、[bindSheet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-sheettransition#func-bindsheetbool-custombuilder-sheetoptions)、[borderColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-border#func-bordercolorresourcecolor)、[borderStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-borderstyle)、[borderWidth](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-border#func-borderwidthedgewidths)、[clip](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#clip)、[constraintSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-constraintsizelength-length-length-length)、[defaultFocus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-focus#func-defaultfocusbool)、[focusable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-focus#func-focusablebool)、[tabIndex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-focus#func-tabindexint32)、[groupDefaultFocus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-focus#func-groupdefaultfocusbool)、[displayPriority](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-displaypriorityint32)、[enabled](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-enable#func-enabledbool)、[flexBasis](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout#func-flexbasislength)、[flexShrink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout#func-flexshrinkfloat64)、[layoutWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-layoutweightint32)、[id](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-componentid)、[height](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-heightoptionlength)、[touchable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#var-touchable)、[margin](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-marginlength)、[markAnchor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-location#func-markanchorlength-length)、[offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-componentutils#class-offset)、[width](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-widthoptionlength)、[zIndex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-zorder#func-zindexint32)、[visibility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-visibility)、[scale](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-pagetransition#func-scalefloat32-float32-float32-length-length)、[translate](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-transform#func-translatelength-length-length)、[responseRegion](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-touchtarget#func-responseregionarrayrectangle)、[size](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-sizelength-length)、[opacity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-pagetransition#func-opacityfloat64)、[sharedTransition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-sharedtransition#func-sharedtransitionstring-sharedtransitionoptions)、[transition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#func-transitiontransitioneffect)、[position](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-location#func-positionlength-length)、[direction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-directiondirection)。

通用事件：仅支持[onAppear](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-appear#func-onappear---unit)、[onDisAppear](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-appear#func-ondisappear---unit)、[onBlur](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-focus#func-onblur---unit)、[onFocus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-focus#func-onfocus---unit)、[onHover](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-mouse)、[onMouse](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-mouse#func-onmousemouseevent---unit)、[onKeyEvent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-key#func-onkeyeventkeyevent---unit)、[onTouch](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-touch#func-ontouchtouchevent---unit)、[onVisibleAreaChange](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-visibleareachange#func-onvisibleareachangearrayfloat64-bool-float64---unit)。

#### 组件属性

#### [h2]func darkMode(?WebDarkMode)
    
    
    public func darkMode(mode: ?WebDarkMode): This

**功能：** 设置Web深色模式，默认关闭。当深色模式开启时，Web将启用媒体查询prefers-color-scheme中网页所定义的深色样式，若网页未定义深色样式，则保持原状。如需开启强制深色模式，建议配合forceDarkAccess使用。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
mode | ?[WebDarkMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-webdarkmode) | 是 | - | Web的深色模式为关闭、开启或跟随系统。 初始值：WebDarkMode.Off。  
  
#### [h2]func domStorageAccess(?Bool)
    
    
    public func domStorageAccess(domStorageAccess: ?Bool): This

**功能：** 设置是否开启文档对象模型存储接口（DOM Storage API）权限。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
domStorageAccess | ?Bool | 是 | - | 是否开启文档对象模型存储接口（DOM Storage API）权限。true表示开启，false表示未开启。 初始值：false。  
  
#### [h2]func fileAccess(?Bool)
    
    
    public func fileAccess(fileAccess: ?Bool): This

**功能：** 设置是否开启应用中文件系统的访问，默认启用。rawfile路径的文件不受该属性影响而限制访问。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fileAccess | ?Bool | 是 | - | 是否开启应用中文件系统的访问，默认启用。 初始值：false  
  
#### [h2]func forceDarkAccess(?Bool)
    
    
    public func forceDarkAccess(access: ?Bool): This

**功能：** 设置网页是否开启强制深色模式。默认关闭。该属性仅在darkMode开启深色模式时生效。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
access | ?Bool | 是 | - | 设置网页是否开启强制深色模式。true：开启，false：关闭。 初始值：false。  
  
#### [h2]func geolocationAccess(?Bool)
    
    
    public func geolocationAccess(geolocationAccess: ?Bool): This

**功能：** 设置是否开启获取地理位置权限，默认关闭。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
geolocationAccess | ?Bool | 是 | - | 设置是否开启获取地理位置权限。 初始值：false。  
  
#### [h2]func imageAccess(?Bool)
    
    
    public func imageAccess(imageAccess: ?Bool): This

**功能：** 设置是否允许自动加载图片资源，默认允许。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
imageAccess | ?Bool | 是 | - | 是否允许自动加载图片资源。 初始值：false。  
  
#### [h2]func javaScriptProxy(?Array<(String) -> String>, ?String, ?Array<String>, ?WebviewController)
    
    
    public func javaScriptProxy(funcList!: ?Array<(String) -> String>, name!: ?String, methodList!: ?Array<String>,
        controller!: ?WebviewController): This

**功能：** 注入JavaScript对象到window对象中，并在window对象中调用该对象的方法。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
funcList | ?Array<(String)->String> | 是 | - | **命名参数。** 参与注册的应用侧JavaScript对象的同步方法。 初始值：[]。  
name | ?String | 是 | - | **命名参数。** 注册对象的名称，与window中调用的对象名一致。 初始值：""。  
methodList | ?Array<String> | 是 | - | **命名参数。** 参与注册的应用侧JavaScript对象的异步方法。 初始值：[]。  
controller | ?[WebviewController](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#class-webviewcontroller) | 是 | - | **命名参数。** 设置Web控制器。 初始值：WebviewController()。  
  
#### [h2]func mixedMode(?MixedMode)
    
    
    public func mixedMode(mixedMode: ?MixedMode): This

**功能：** 设置是否允许加载超文本传输协议（HTTP）和超文本传输安全协议（HTTPS）混合内容，默认不允许加载HTTP和HTTPS混合内容。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
mixedMode | ?[MixedMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-mixedmode) | 是 | - | 混合内容。 初始值：MixedMode.None。表示不允许安全来源（secure origin）加载不安全来源（insecure origin）的内容。  
  
#### [h2]func nestedScroll(?NestedScrollMode, ?NestedScrollMode)
    
    
    public func nestedScroll(
        scrollForward!: ?NestedScrollMode,
        scrollBackward!: ?NestedScrollMode
    ): This

**功能：** 设置向前向后两个方向上的嵌套滚动模式，实现与父组件的滚动联动。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
scrollForward | ?[NestedScrollMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-nestedscrollmode) | 是 | - | **命名参数。** 向前滚动模式。 初始值：NestedScrollMode.SelfFirst。  
scrollBackward | ?[NestedScrollMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-nestedscrollmode) | 是 | - | **命名参数。** 向后滚动模式。 初始值：NestedScrollMode.SelfFirst。  
  
#### [h2]func onlineImageAccess(?Bool)
    
    
    public func onlineImageAccess(onlineImageAccess: ?Bool): This

**功能：** 设置是否允许从网络加载图片资源（通过HTTP和HTTPS访问的资源），默认不允许访问。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
onlineImageAccess | ?Bool | 是 | - | 是否允许从网络加载图片资源。true表示设置允许从网络加载图片资源，false表示设置不允许从网络加载图片资源。 初始值：false。  
  
#### [h2]func verticalScrollBarAccess(?Bool)
    
    
    public func verticalScrollBarAccess(verticalScrollBar: ?Bool): This

**功能：** 设置是否显示纵向滚动条，包括系统默认滚动条和用户自定义滚动条。默认不显示。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
verticalScrollBar | ?Bool | 是 | - | 是否显示纵向滚动条。true表示设置显示纵向滚动条，false表示设置不显示纵向滚动条。 初始值：false。  
  
#### [h2]func zoomAccess(?Bool)
    
    
    public func zoomAccess(zoomAccess: ?Bool): This

**功能：** 设置是否支持手势进行缩放，默认不允许执行缩放。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
zoomAccess | ?Bool | 是 | - | 是否支持手势进行缩放。true表示设置支持手势进行缩放，false表示设置不支持手势进行缩放。 初始值：false。  
  
#### 组件事件

#### [h2]func onLoadIntercept(?Callback<OnLoadInterceptEvent, Bool>)
    
    
    public func onLoadIntercept(callback: ?Callback<OnLoadInterceptEvent, Bool>): This

**功能：** 当Web组件加载url之前触发该回调，用于判断是否阻止此次访问。默认允许加载。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?Callback<OnLoadInterceptEvent, Bool> | 是 | - | 回调函数，截获资源加载时触发的回调。返回true表示阻止此次加载，否则允许此次加载。 初始值：{ _ => true}。  
  
#### [h2]func onPageBegin(?Callback<OnPageBeginEvent, Unit>)
    
    
    public func onPageBegin(callback: ?Callback<OnPageBeginEvent, Unit>): This

**功能：** 网页开始加载时触发该回调，且只在主frame触发，iframe或者frameset的内容加载时不会触发此回调。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?Callback<OnPageBeginEvent, Unit> | 是 | - | 回调函数，网页加载开始时触发回调。 初始值：{ _ => }。  
  
#### [h2]func onPageEnd(?Callback<OnPageEndEvent, Unit>)
    
    
    public func onPageEnd(callback: ?Callback<OnPageEndEvent, Unit>): This

**功能：** 网页加载完成时触发该回调，且只在主frame触发。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?Callback<OnPageEndEvent, Unit> | 是 | - | 是否允许从网络加载图片资源。true表示设置允许从网络加载图片资源，false表示设置不允许从网络加载图片资源。 初始值：{ _ => }。  
  
#### 基础类型定义

#### [h2]class Header
    
    
    public class Header {
        public var headerKey: ?String
        public var headerValue: ?String
    }

**功能：** 描述Web组件返回的请求/响应头对象。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**var headerKey**
    
    
    public var headerKey: ?String

**功能：** 请求/响应头的key。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**var headerValue**
    
    
    public var headerValue: ?String

**功能：** 请求/响应头的Value。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

#### [h2]class OnLoadInterceptEvent
    
    
    public class OnLoadInterceptEvent {
        public var data: WebResourceRequest
        public init(data: WebResourceRequest)
    }

**功能：** 当资源加载被拦截时，加载拦截事件。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**var data**
    
    
    public var data: WebResourceRequest

**功能：** 网页请求的封装信息。

**类型：** WebResourceRequest

**读写能力：** 可读写

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**init(WebResourceRequest)**
    
    
    public init(data: WebResourceRequest)

**功能：** 构造函数。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
data | WebResourceRequest | 是 | - | 请求的信息。  
  
#### [h2]class OnPageBeginEvent
    
    
    public class OnPageBeginEvent {
        public var url: String
        public init(url: String)
    }

**功能：** 定义网页加载开始时触发的函数。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**var url**
    
    
    public var url: String

**功能：** 当前加载页面的URL。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**init(String)**
    
    
    public init(url: String)

**功能：** 构造一个OnPageBeginEvent类型的对象。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
url | String | 是 | - | 当前加载页面的URL。  
  
#### [h2]class OnPageEndEvent
    
    
    public class OnPageEndEvent {
        public var url: String
        public init(url: String)
    }

**功能：** 定义网页加载结束时触发的函数。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**var url**
    
    
    public var url: String

**功能：** 当前加载页面的URL。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**init(String)**
    
    
    public init(url: String)

**功能：** OnPageEndEvent的构造函数。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
url | String | 是 | - | 当前加载页面的URL。  
  
#### [h2]class PermissionRequest
    
    
    public class PermissionRequest {}

**功能：** Web组件返回授权或拒绝权限功能的对象。示例代码参考onPermissionRequest事件。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**func deny()**
    
    
    public func deny(): Unit

**功能：** 拒绝网页所请求的权限。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**func getAccessibleResource()**
    
    
    public func getAccessibleResource(): Array<String>

**功能：** 获取网页所请求的权限资源列表。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<String> | 网页所请求的权限资源列表。  
  
**func getOrigin()**
    
    
    public func getOrigin(): String

**功能：** 获取网页来源。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 当前请求权限网页的来源。  
  
**func grant(Array <String>)**
    
    
    public func grant(resources: Array<String>): Unit

**功能：** 对网页访问的屏幕捕获操作进行授权。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
resources | Array<String> | 是 | - | 屏幕捕获配置。  
  
#### [h2]class WebResourceRequest
    
    
    public class WebResourceRequest {}

**功能：** Web组件资源响应对象。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**func getRequestHeader()**
    
    
    public func getRequestHeader(): Array<Header>

**功能：** 获取资源请求头信息。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Array<Header> | 返回资源请求头信息。  
  
**func getRequestMethod()**
    
    
    public func getRequestMethod(): String

**功能：** 获取请求方法。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 返回请求方法。  
  
**func getRequestUrl()**
    
    
    public func getRequestUrl(): String

**功能：** 获取资源请求的URL信息。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 返回资源请求的URL信息。  
  
**func isMainFrame()**
    
    
    public func isMainFrame(): Bool

**功能：** 判断资源请求是否为主frame。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 返回资源请求是否为主frame。true表示返回资源请求为主frame，false表示返回资源请求不为主frame。  
  
**func isRedirect()**
    
    
    public func isRedirect(): Bool

**功能：** 判断资源请求是否被服务端重定向。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 返回资源请求是否被服务端重定向。true表示返回资源请求被服务端重定向，false表示返回资源请求未被服务端重定向。  
  
**func isRequestGesture()**
    
    
    public func isRequestGesture(): Bool

**功能：** 获取资源请求是否与手势（如点击）相关联。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 返回资源请求是否与手势（如点击）相关联。true表示返回资源请求与手势（如点击）相关联，false表示返回资源请求与手势（如点击）不相关联。  
  
#### [h2]class OnPermissionRequestEvent
    
    
    public class OnPermissionRequestEvent {
        public var request: PermissionRequest
        public init(request: PermissionRequest)
    }

**功能：** 描述通知收到获取权限请求的参数结构。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**var request**
    
    
    public var request: PermissionRequest

**功能：** Web组件返回授权或拒绝权限功能的对象。示例代码参考onPermissionRequest事件。

**类型：** PermissionRequest

**读写能力：** 可读写

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**init(PermissionRequest)**
    
    
    public init(request: PermissionRequest)

**功能：** 构造一个OnPermissionRequestEvent类型的对象。

**系统能力：** SystemCapability.Web.Webview.Core

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
request | PermissionRequest | 是 | - | Web组件返回授权或拒绝权限功能的对象。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.web.webview.*
    import ohos.hilog.Hilog
    
    @Entry
    @Component
    class EntryView {
        let webController = WebviewController()
        @State
        var url: String = "www.example.com"
        func build() {
            Column(space: 10) {
                Button("reload")
                    .onClick(
                        {
                            evt =>
                                Hilog.info(0, "AppLogCj", "reload")
                                webController.reload()
                        }
                    )
                    .width(400.px)
                    .height(150.px)
                Button("loadUrl")
                    .onClick(
                        {
                            evt =>
                                Hilog.info(0, "AppLogCj", "loadUrl")
                                webController.loadUrl(this.url)
                        }
                    )
                    .width(400.px)
                    .height(150.px)
                Web(src: "www.example.com", controller: webController)
                    .onPageBegin({
                        evt => Hilog.info(0, "AppLogCj", "page begin url: ${evt.url}")
                    })
                    .onPageEnd({
                        evt => Hilog.info(0, "AppLogCj", "page end url: ${evt.url}")
                    })
            }
        }
    }
