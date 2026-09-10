---
name: cangjie-references/cj-scroll-swipe-common
title: 滚动组件通用API
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 滚动与滑动 / 滚动组件通用API
---

# 滚动组件通用API  
  
滚动组件通用属性和事件目前只支持[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)、[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)。

#### 组件属性

#### [h2]func scrollBar(?BarState)
    
    
    public func scrollBar(barState: ?BarState): T

**功能：** 设置滚动条状态。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
barState | ?[BarState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-barstate) | 是 | - | 滚动条状态。 初始值： List、Grid、Scroll组件初始值为：BarState.Auto。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func scrollBarColor(?ResourceColor)
    
    
    public func scrollBarColor(color: ?ResourceColor): T

**功能：** 设置滚动条的颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 滚动条的颜色。 初始值：0x182431（40%不透明度）。为HEX格式颜色，支持rgb或者argb，示例：0xffffff。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func scrollBarWidth(?Length)
    
    
    public func scrollBarWidth(value: ?Length): T

**功能：** 设置滚动条的宽度，不支持百分比设置。宽度设置后，滚动条正常状态和按压状态宽度均为滚动条的宽度值。如果滚动条的宽度超过滚动组件主轴方向的高度，则滚动条的宽度会变为初始值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 滚动条的宽度。 初始值：4  单位：vp  取值范围：设置为小于0的值时，按初始值处理。设置为0时，不显示滚动条。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func clipContent(?ContentClipMode)
    
    
    public func clipContent(clip: ?ContentClipMode): T

**功能：** 设置滚动容器的内容层裁剪区域。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
clip | ?[ContentClipMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#enum-contentclipmode) | 是 | - | 裁剪只针对滚动容器的内容，即其子节点，背景不受影响。 初始值：Grid、Scroll的初始值为ContentClipMode.Boundary，List的初始值为ContentClipMode.ContentOnly。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func clipContent(?RectShape)
    
    
    public func clipContent(clip: ?RectShape): T

**功能：** 设置滚动容器的内容层裁剪区域。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
clip | ?[RectShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-shape#class-rectshape) | 是 | - | 裁剪只针对滚动容器的内容，即其子节点，背景不受影响。通过RectShape传入自定义矩形区域时仅支持设置宽高和相对于组件左上角的[offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-location#func-offsetlength-length)，不支持圆角。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func enableScrollInteraction(?Bool)
    
    
    public func enableScrollInteraction(value: ?Bool): T

**功能：** 设置是否支持滚动手势。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 是否支持滚动手势，当设置为false时，无法通过手指或者鼠标滚动，但不影响控制器[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller)的滚动接口。 初始值：true。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func fadingEdge(Option<Bool>)
    
    
    public func fadingEdge(enabled: Option<Bool>): T

**功能：** 设置是否开启边缘渐隐效果及设置边缘渐隐长度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
enabled | Option<Bool> | 是 | - | fadingEdge生效时，会覆盖原组件的.overlay()属性。 fadingEdge生效时，建议不在该组件上设置background相关属性，会影响渐隐的显示效果。 fadingEdge生效时，组件会裁剪到边界，设置组件的clip属性为false不生效。 初始值：false，不开启边缘渐隐效果。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func fadingEdge(Option<Bool>,?FadingEdgeOptions)
    
    
    public func fadingEdge(enabled: Option<Bool>, options: ?FadingEdgeOptions): T

**功能：** 设置是否开启边缘渐隐效果及设置边缘渐隐长度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
enabled | Option<Bool> | 是 | - | fadingEdge生效时，会覆盖原组件的.overlay()属性。 fadingEdge生效时，建议不在该组件上设置background相关属性，会影响渐隐的显示效果。 fadingEdge生效时，组件会裁剪到边界，设置组件的clip属性为false不生效。 初始值：false，不开启边缘渐隐效果。  
options | ?[FadingEdgeOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-fadingedgeoptions) | 是 | - | 边缘渐隐参数对象。可以通过该对象定义边缘渐隐效果属性，比如设置渐隐长度。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func flingSpeedLimit(?Float64)
    
    
    public func flingSpeedLimit(speedLimit: ?Float64): T

**功能：** 限制跟手滑动结束后，Fling动效开始时的最大初始速度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
speedLimit | ?Float64 | 是 | - | Fling动效开始时的最大初始速度。 初始值：9000.0  单位：vp/s  取值范围：(0, +∞)，设置为小于等于0的值时，按初始值处理。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func friction(?Float64)
    
    
    public func friction(value: ?Float64): T

**功能：** 设置摩擦系数，手动划动滚动区域时生效，只对惯性滚动过程有影响，对惯性滚动过程中的链式效果有间接影响。设置为小于等于0的值时，按初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Float64 | 是 | - | 摩擦系数。 初始值：非可穿戴设备为0.75，可穿戴设备为0.9。 取值范围：(0, +∞)，设置为小于等于0的值时，按初始值处理。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func friction(?AppResource)
    
    
    public func friction(value: ?AppResource): T

**功能：** 设置摩擦系数，手动划动滚动区域时生效，只对惯性滚动过程有影响，对惯性滚动过程中的链式效果有间接影响。设置为小于等于0的值时，按初始值处理。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[AppResource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-resource#class-appresource) | 是 | - | 摩擦系数。 初始值：非可穿戴设备为0.75，可穿戴设备为0.9。 取值范围：(0, +∞)，设置为小于等于0的值时，按初始值处理。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func nestedScroll(?NestedScrollOptions)
    
    
    public func nestedScroll(value: ?NestedScrollOptions): T

**功能：** 设置向前和向后两个方向上的嵌套滚动模式，实现与父组件的滚动联动。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[NestedScrollOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-nestedscrolloptions) | 是 | - | 嵌套滚动选项。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### 组件事件

#### [h2]func onDidScroll(?OnScrollCallBack)
    
    
    public func onDidScroll(handler: ?OnScrollCallBack): T

**功能：** 滚动组件滑动时触发，返回当前帧滑动的偏移量和当前滑动状态。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
handler | ?[OnScrollCallBack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#type-onscrollcallback) | 是 | - | 滚动组件滑动时触发的回调。 参数一：每帧滚动的偏移量，滚动组件的内容向上滚动时偏移量为正，向下滚动时偏移量为负。单位vp。  参数二：当前滑动状态。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func onReachEnd(?() -> Unit)
    
    
    public func onReachEnd(event: ?() -> Unit): T

**功能：** 滚动组件到达末尾位置时触发。滚动组件边缘效果为弹簧效果时，划动经过末尾位置时触发一次，回弹回末尾位置时再触发一次。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - | 回调函数，滚动组件到达末尾位置时触发。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func onReachStart(?() -> Unit)
    
    
    public func onReachStart(event: ?() -> Unit): T

**功能：** 滚动组件到达起始位置时触发。滚动组件初始化时会触发一次，滚动到起始位置时触发一次。边缘效果为弹簧效果时，划动经过起始位置时触发一次，回弹回起始位置时再触发一次。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - | 回调函数，滚动组件到达起始位置时触发。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func onScrollStart(?() -> Unit)
    
    
    public func onScrollStart(event: ?() -> Unit): T

**功能：** 滚动开始时触发。手指拖动滚动组件或拖动滚动组件的滚动条触发的滚动开始时，会触发该事件。使用[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller)滚动控制器触发的带动画的滚动，动画开始时会触发该事件。

触发该事件的条件：

1、滚动组件开始滚动时触发，支持键鼠操作等其他触发滚动的输入设备。

2、通过滚动控制器API接口调用后开始，带过渡动效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - | 回调函数，滚动开始时触发。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func onScrollStop(?() -> Unit)
    
    
    public func onScrollStop(event: ?() -> Unit): T

**功能：** 滚动停止时触发。手拖动滚动组件或拖动滚动组件的滚动条触发的滚动，手离开屏幕并且滚动停止时会触发该事件。使用[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller)滚动控制器触发的带动画的滚动，动画停止时会触发该事件。

触发该事件的条件：

1、滚动组件触发滚动后停止，支持键鼠操作等其他触发滚动的输入设置。

2、通过滚动控制器API接口调用后开始，带过渡动效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - | 回调函数，滚动停止时触发。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func onWillScroll(Option<(Float64,ScrollState,ScrollSource) -> ScrollResult>)
    
    
    public func onWillScroll(handler: Option<(Float64, ScrollState, ScrollSource) -> ScrollResult>): T

**功能：** 滚动事件回调，滚动组件滚动前触发。回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。可以通过该回调返回值指定滚动组件将要滚动的偏移。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
handler | Option<(Float64, [ScrollState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-scrollstate), [ScrollSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-scrollsource)) -> [ScrollResult](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scrollresult)> | 是 | - | 滚动组件滑动前触发的回调。 参数一：每帧滑动的偏移量，滚动组件的内容向上滚动时偏移量为正，向下滚动时偏移量为负，单位vp。  参数二：当前滑动状态。  参数三：当前滑动操作的来源。 返回值：将要滑动偏移量，单位vp。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/WqUJsnaPTtyHbz-OiIyYAA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111638Z&HW-CC-Expire=86400&HW-CC-Sign=7AF1F520317A7F3E70A9D906C2167946E9E70286D3834B2939AA90408C255BE2)

调用scrollEdge和不带动画的scrollToIndex时，不触发onWillScroll。

**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### [h2]func onWillScroll(Option<(Float64,ScrollState,ScrollSource) -> Unit>)
    
    
    public func onWillScroll(handler: Option<(Float64, ScrollState, ScrollSource) -> Unit>): T

**功能：** 滚动事件回调，滚动组件滚动前触发。回调当前帧将要滚动的偏移量和当前滚动状态和滚动操作来源，其中回调的偏移量为计算得到的将要滚动的偏移量值，并非最终实际滚动偏移。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b5/v3/Wgzc81u5SAOQjhm0zHZF9Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111638Z&HW-CC-Expire=86400&HW-CC-Sign=7ECC889489D3777D3744BB8D621A7B6FCE9F41159661D52408A5878F68FDE31C)

调用scrollEdge和不带动画的scrollToIndex时，不触发onWillScroll。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
handler | Option<(Float64, [ScrollState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-scrollstate), [ScrollSource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-scrollsource)) -> Unit> | 是 | - | 滚动组件滑动前触发的回调。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。
