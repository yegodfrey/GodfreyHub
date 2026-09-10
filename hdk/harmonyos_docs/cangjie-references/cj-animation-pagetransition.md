---
name: cangjie-references/cj-animation-pagetransition
title: 页面间转场（pageTransition）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-pagetransition
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 动画 / 页面间转场（pageTransition）
---

# 页面间转场（pageTransition）

当路由（[Router](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-router)）进行切换时，可以通过在[pageTransition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-custom-component-lifecycle#func-pagetransition)函数中自定义页面入场和页面退场的转场动效。详细指导请参考[页面转场动画](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-page-transition-animation)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/wOcvAUg_RGmihJcLZzb-gQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=97B078E71F94A49CF9B3BC4BED9FA8D902AC55A43399231ACE5AD6D434D319FE)

为了实现更好的转场效果，推荐使用Navigation组件和[模态转场](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-modal-transition)。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class CommonTransition
    
    
    sealed abstract class CommonTransition {}

**功能：** 页面转场通用动效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func slide(SlideEffect)
    
    
    public func slide(value: SlideEffect): This

**功能：** 设置页面转场时的滑入滑出效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | SlideEffect | 是 | - | 页面转场时的滑入滑出效果。  
  
#### [h2]func translate(?Length, ?Length, ?Length)
    
    
    public func translate(x!: ?Length = None, y!: ?Length = None, z!: ?Length = None): This

**功能：** 设置页面转场时的平移效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** x轴的平移距离。 取值范围为(-∞, +∞)。 初始值：0.0.vp。  
y | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** y轴的平移距离。 取值范围为(-∞, +∞)。 初始值：0.0.vp。  
z | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** z轴的平移距离。 取值范围为(-∞, +∞)。 初始值：0.0.vp。  
  
#### [h2]func scale(?Float32, ?Float32, ?Float32, ?Length, ?Length)
    
    
    public func scale(
        x!: ?Float32 = None,
        y!: ?Float32 = None,
        z!: ?Float32 = None,
        centerX!: ?Length = None,
        centerY!: ?Length = None
    ): This

**功能：** 设置页面转场时的缩放效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | ?Float32 | 否 | None |  **命名参数。** x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x<0时沿x轴反向并缩放。 初始值：1.0。  
y | ?Float32 | 否 | None |  **命名参数。** y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y<0时沿y轴反向并缩放。 初始值：1.0。  
z | ?Float32 | 否 | None |  **命名参数。** z轴的缩放倍数。z>1时以z轴方向放大，0<z<1时以z轴方向缩小，z<0时沿z轴反向并缩放。 初始值：1.0。  
centerX | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** 变换中心点x轴坐标。 初始值：50.percent。  
centerY | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** 变换中心点y轴坐标。 初始值：50.percent。  
  
#### [h2]func opacity(Float64)
    
    
    public func opacity(value: Float64): This

**功能：** 设置入场的起点透明度值或者退场的终点透明度值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | Float64 | 是 | - | 设置入场的起点透明度值或者退场的终点透明度值。取值范围[0.0, 1.0]，0.0表示完全透明，1.0表示完全不透明。  
  
#### class PageTransitionEnter
    
    
    public class PageTransitionEnter <: CommonTransition {
        public init(
            routeType!: ?RouteType = Option.None,
            duration!: ?Int32 = None,
            curve!: ?Curve = None,
            delay!: ?Int32 = None
        )
    }

**功能：** 当前页面的自定义入场动效类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * CommonTransition



#### [h2]init(?RouteType, ?Int32, ?Curve, ?Int32)
    
    
    public init(
        routeType!: ?RouteType = Option.None,
        duration!: ?Int32 = None,
        curve!: ?Curve = None,
        delay!: ?Int32 = None
    )

**功能：** 创建当前页面的自定义入场动效对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
routeType | ?RouteType | 否 | Option.None |  **命名参数。** 页面转场效果生效的路由类型。 初始值：RouteType.None。  
duration | ?Int32 | 否 | None |  **命名参数。** 动画的时长。 单位：毫秒。 取值范围：[0, +∞)。 初始值：1000。  
curve | ?[Curve](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-curve) | 否 | None |  **命名参数。** 动画曲线。 Curve.Linear  
delay | ?Int32 | 否 | None |  **命名参数。** 动画延迟时长。 单位：毫秒。 初始值：1000。  
  
#### [h2]func onEnter(?PageTransitionCallback)
    
    
    public func onEnter(event: ?PageTransitionCallback)

**功能：** 逐帧回调，直到入场动画结束，转场进度从0变化到1。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?PageTransitionCallback | 是 | - | 入场动画的逐帧回调直到入场动画结束，转场进度从0变化到1。  
  
#### class PageTransitionExit
    
    
    public class PageTransitionExit <: CommonTransition {
        public init(
            routeType!: ?RouteType = Option.None,
            duration!: ?Int32 = None,
            curve!: ?Curve = None,
            delay!: ?Int32 = None
        )
    }

**功能：** 当前页面的自定义退场动效类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * CommonTransition



#### [h2]init(?RouteType, ?Int32, ?Curve, ?Int32)
    
    
    public init(
        routeType!: ?RouteType = Option.None,
        duration!: ?Int32 = None,
        curve!: ?Curve = None,
        delay!: ?Int32 = None
    )

**功能：** 创建当前页面的自定义退场动效对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
routeType | ?RouteType | 否 | Option.None |  **命名参数。** 页面转场效果生效的路由类型。 初始值：RouteType.None。  
duration | ?Int32 | 否 | None |  **命名参数。** 动画的时长。 单位：毫秒。 取值范围：[0, +∞)。 初始值：1000。  
curve | ?[Curve](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-curve) | 否 | None |  **命名参数。** 动画曲线。 Curve.Linear  
delay | ?Int32 | 否 | None |  **命名参数。** 动画延迟时长。 单位：毫秒。 初始值：1000。  
  
#### [h2]func onExit(?PageTransitionCallback)
    
    
    public func onExit(event: ?PageTransitionCallback)

**功能：** 逐帧回调，直到出场动画结束，转场进度从0变化到1。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?PageTransitionCallback | 是 | - | 出场动画的逐帧回调直到出场动画结束，转场进度从0变化到1。  
  
#### enum RouteType
    
    
    public enum RouteType <: Equatable<RouteType> {
        | None
        | Push
        | Pop
        | ...
    }

**功能：** 页面转场类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<RouteType>



#### [h2]None
    
    
    None

**功能：** 页面未重定向。如Push和Pop描述中RouteType为None的情形，即页面进场时PageTransitionEnter的转场效果生效；退场时PageTransitionExit的转场效果生效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]Push
    
    
    Push

**功能：** 跳转到下一页面。PageA跳转到下一个新的界面PageB。对于PageA，指定RouteType为None或者Push的PageTransitionExit组件样式生效，对于PageB，指定RouteType为None或者Push的PageTransitionEnter组件样式生效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]Pop
    
    
    Pop

**功能：** 重定向指定页面。从PageB回退到之前的页面PageA。对于PageB，指定RouteType为None或者Pop的PageTransitionExit组件样式生效，对于PageA，指定RouteType为None或者Pop的PageTransitionEnter组件样式生效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]operator func !=(RouteType)
    
    
    public operator func !=(other: RouteType): Bool

**功能：** 比较两个枚举值是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | RouteType | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
#### [h2]operator func ==(RouteType)
    
    
    public operator func ==(other: RouteType): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | RouteType | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### enum SlideEffect
    
    
    public enum SlideEffect <: Equatable<SlideEffect> {
        | Left
        | Right
        | Top
        | Bottom
        | ...
    }

**功能：** 页面转场时的滑入滑出效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<SlideEffect>



#### [h2]Left
    
    
    Left

**功能：** 入场时表示从左边滑入，出场时表示滑出到左边。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]Right
    
    
    Right

**功能：** 入场时表示从右边滑入，出场时表示滑出到右边。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]Top
    
    
    Top

**功能：** 入场时表示从上边滑入，出场时表示滑出到上边。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]Bottom
    
    
    Bottom

**功能：** 入场时表示从下边滑入，出场时表示滑出到下边。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]operator func !=(SlideEffect)
    
    
    public operator func !=(other: SlideEffect): Bool

**功能：** 比较两个枚举值是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | SlideEffect | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
#### [h2]operator func ==(SlideEffect)
    
    
    public operator func ==(other: SlideEffect): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | SlideEffect | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### type PageTransitionCallback
    
    
    public type PageTransitionCallback = (RouteType, Float64) -> Unit

**功能：** 页面转场事件回调。

**类型：** (RouteType , Float64) -> Unit

类型参数 | 说明  
---|---  
RouteType | 页面转场类型。  
Float64 | 转场进度，从0变化到1。  
  
#### 示例代码

#### [h2]示例代码1(设置退入场动画)

通过不同的退入场类型配置不同的退场，入场动画。
    
    
    //index.cj
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var scale: Float32 = 1.0
        @State
        var opacity: Float64 = 1.0
    
        func build() {
            Column() {
                Image(@r(app.media.background))
                    .width(100.percent)
                    .height(100.percent)
            }
            .width(100.percent)
            .height(100.percent)
            .scale(x: scale, y: 1.0)
            .opacity(this.opacity)
            .onClick({
                    e => getUIContext().getRouter().pushUrl(url: "Page")
                })
        }
    
        protected func pageTransition(): Unit {
            PageTransitionEnter(duration: 1200, curve: Curve.Linear,).onEnter({
                ty: RouteType, progress: Float64 => 
                    if (ty == RouteType.Push || ty ==  RouteType.Pop) {
                        scale = Float32(progress)
                        opacity = progress
                    }
            })
            PageTransitionExit(duration: 1200, curve: Curve.Ease, ).onExit({
                ty: RouteType, progress: Float64 =>
                    if (ty == RouteType.Push) {
                        this.scale = Float32(1.0 - progress)
                        this.opacity = 1.0 - progress
                    }
            })
        }
    }
    
    
    //page.cj
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    class Page {
        @State
        var scale: Float32 = 1.0
        @State
        var opacity: Float64 = 1.0
    
        func build() {
            Column() {
                Image(@r(app.media.background))
                    .width(50.percent)
                    .height(50.percent)
            }
            .width(100.percent)
            .height(100.percent)
            .scale(x: scale, y: 1.0)
            .opacity(opacity)
            .onClick({
                    e => getUIContext().getRouter().pushUrl(url: "EntryView")
                })
        }
    
        protected func pageTransition(): Unit {
            PageTransitionEnter(duration: 1200, curve: Curve.Linear).onEnter({
                ty: RouteType, progress: Float64 => 
                    if (ty == RouteType.Push || ty ==  RouteType.Pop) {
                        scale = Float32(progress)
                        opacity = progress
                    }
            })
            PageTransitionExit(duration: 1200, curve: Curve.Ease).onExit({
                ty: RouteType, progress: Float64 => 
                    if (ty == RouteType.Push) {
                        this.scale = Float32(1.0 - progress)
                        this.opacity = 1.0 - progress
                    }
            })
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/f606dD4IRAafTGYEnrgMkg/zh-cn_image_0000002713558952.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=0C00E7CB5E55F92EC9FCBF61B7B4622DA36C4FC9FD252B92D9938794BD4F1D94)

#### [h2]示例代码2（设置退入场平移效果）

配置提供的不同退入场平移效果，将系统语言排版模式改为RTL。
    
    
    //index.cj
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var scale: Float32 = 1.0
        @State
        var opacity: Float64 = 1.0
    
        func build() {
            Column() {
                Button("Page").onClick({
                    e => getUIContext().getRouter().pushUrl(url: "Page")
                })
                    .width(200)
                    .height(60)
                    .fontSize(36)
                Text("START")
                    .fontSize(36)
                    .textAlign(TextAlign.Center)
            }
                .width(100.percent)
                .height(100.percent)
                .scale(x: scale, y: 1.0)
                .opacity(this.opacity)
                .justifyContent(FlexAlign.Center)
        }
    
        protected func pageTransition(): Unit {
            PageTransitionEnter(duration: 1200, curve: Curve.Linear).slide(SlideEffect.Left)
            PageTransitionExit(duration: 1200, curve: Curve.Ease).slide(SlideEffect.Left)
        }
    }
    
    
    //page.cj
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class Page {
        @State
        var scale1: Float32 = 1.0
        @State
        var opacity1: Float64 = 1.0
    
        func build() {
            Column() {
                Button("Page2").onClick({
                    e => getUIContext().getRouter().pushUrl(url: "EntryView")
                })
                    .width(200)
                    .height(60)
                    .fontSize(36)
                Text("END")
                    .fontSize(36)
                    .textAlign(TextAlign.Center)
            }
                .width(100.percent)
                .height(100.percent)
                .scale(x: scale1, y: 1.0)
                .opacity(this.opacity1)
                .justifyContent(FlexAlign.Center)
        }
    
        protected func pageTransition(): Unit {
            PageTransitionEnter(duration: 1200).slide(SlideEffect.Right)
            PageTransitionExit(duration: 1200).slide(SlideEffect.Right)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/lsS2xsdkTzmq88FsZfXsXw/zh-cn_image_0000002743197865.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=7CF78EB1155805E659B186CD083DADA4C20796F3EF8090906A2FD99B04B8384F)
