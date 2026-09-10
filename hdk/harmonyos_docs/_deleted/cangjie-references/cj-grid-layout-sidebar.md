---
name: cangjie-references/cj-grid-layout-sidebar
title: SideBarContainer
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-sidebar
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 栅格与分栏 / SideBarContainer
---

# SideBarContainer

提供可以显示和隐藏的侧边栏容器，通过子组件定义侧边栏和内容区，第一个子组件表示侧边栏，第二个子组件表示内容区。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含子组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/dYkFGhZHTVSqKIWuOMoPfQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=2938B47700FC238E93EE8763E5ECB5DD8CDDEEED897AF00774D689765C457D08)

  * 子组件类型：系统组件和自定义组件，不支持渲染控制类型（[if/else](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-ifelse)、[ForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-foreach)、[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach)）。
  * 子组件个数：必须且仅包含2个子组件。
  * 子组件个数异常时：3个或以上子组件，显示第一个和第二个。1个子组件，显示侧边栏，内容区为空白。



#### 创建组件

#### [h2]init(?SideBarContainerType, () -> Unit)
    
    
    public init(sideBarType!: ?SideBarContainerType = None, child!: () -> Unit = {=>})

**功能：** 创建一个侧边栏容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
sideBarType | ?[SideBarContainerType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-sidebarcontainertype) | 否 | None |  **命名参数。** 设置侧边栏的显示类型。 初始值：SideBarContainerType.Embed。  
child | () -> Unit | 否 | {=>} | **命名参数。** 定义侧边栏和内容区。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func autoHide(?Bool)
    
    
    public func autoHide(value: ?Bool): This

**功能：** 设置当侧边栏拖拽到小于最小宽度后，是否自动隐藏。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/7fFy6mAaT_KWDUYke8hepA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=AB9DA7574FE2AC506CE2FE8CE60C82D9C9A26FFF3AFCFEE05603709A4E0620B5)

  * 受minSideBarWidth属性方法影响，当该属性方法未设置值时使用初始值。
  * 拖拽过程中判断是否要自动隐藏。小于最小宽度时需要阻尼效果触发隐藏（越界一段距离）。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  侧边栏拖拽到小于最小宽度后，是否自动隐藏。 true：会自动隐藏。 false：不会自动隐藏。 初始值：true。  
  
#### [h2]func controlButton(?ButtonStyle)
    
    
    public func controlButton(value: ?ButtonStyle): This

**功能：** 设置侧边栏控制按钮的属性。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?ButtonStyle | 是 | - | 侧边栏控制按钮的属性。  
  
#### [h2]func divider(?DividerStyle)
    
    
    public func divider(value: ?DividerStyle): This

**功能：** 设置分割线的样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?DividerStyle | 是 | - |  分割线的样式，默认显示分割线。 初始值：DividerStyle(strokeWidth: 1.vp)  
  
#### [h2]func maxSideBarWidth(?Length)
    
    
    public func maxSideBarWidth(value: ?Length): This

**功能：** 设置侧边栏最大宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/C2ELRbQnSA6k6Sp2dufxvw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=2437010B4F3C89F3AE4D17061445D3DE524EC66EDF5D9E65B6478374DF584B20)

  * 设置为小于0的值时按默认值显示。值不能超过侧边栏容器本身宽度，超过使用侧边栏容器本身宽度。
  * maxSideBarWidth优先于侧边栏子组件maxWidth，maxSideBarWidth未设置时默认值优先级高于侧边栏子组件maxWidth。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  设置侧边栏最大宽度。 单位：vp。 初始值：280.vp。  
  
#### [h2]func minContentWidth(?Length)
    
    
    public func minContentWidth(value: ?Length): This

**功能：** 设置SideBarContainer组件内容区可显示的最小宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/teSjGN4hRWehK-ueD__uBA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=6AB6885F2C7A3B73E2762BE01C2DF43331D11AEB3E051217C0E2196A1FFCCCFD)

  * 当最小宽度设置为小于0，内容区显示的最小宽度为360.vp；未设置该属性时，组件内容区的可缩小到0。

  * Embed场景下，增大组件尺寸时仅增大内容区的尺寸。

  * 缩小组件尺寸时，先缩小内容区的尺寸至minContentWidth。继续缩小组件尺寸时，保持内容区宽度minContentWidth不变，优先缩小侧边栏的尺寸。当缩小侧边栏的尺寸至minSideBarWidth后，继续缩小组件尺寸时：

    * 如果autoHide属性为false，则会保持侧边栏宽度minSideBarWidth和内容区宽度minContentWidth不变，但内容区会被截断显示；
    * 如果autoHide属性为true，则会优先隐藏侧边栏，然后继续缩小至内容区宽度minContentWidth后，内容区宽度保持不变，但内容区会被截断显示。
  * minContentWidth优先于侧边栏的maxSideBarWidth与sideBarWidth属性，minContentWidth未设置时，默认值优先级低于设置的minSideBarWidth与maxSideBarWidth属性。




**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  SideBarContainer组件内容区可显示的最小宽度。 单位：vp。 初始值：360.vp。  
  
#### [h2]func minSideBarWidth(?Length)
    
    
    public func minSideBarWidth(value: ?Length): This

**功能：** 设置侧边栏最小宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/pEycFsFYQp2kSVRt71Q9tA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=CD92C01F2D79BB021384D7BAD802C0D23C9414F2EB2C1F1FAA3917A197FA3061)

  * 设置为小于0的值时按默认值显示。值不能超过侧边栏容器本身宽度，超过使用侧边栏容器本身宽度。
  * minSideBarWidth优先于侧边栏子组件minWidth，minSideBarWidth未设置时默认值优先级高于侧边栏子组件minWidth。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  侧边栏最小宽度。 初始值：240.vp。  
  
#### [h2]func showControlButton(?Bool)
    
    
    public func showControlButton(value: ?Bool): This

**功能：** 设置是否显示控制按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  是否显示控制按钮。 true：显示控制按钮。 false：不显示控制按钮。 初始值：true。  
  
#### [h2]func showSideBar(?Bool)
    
    
    public func showSideBar(value: ?Bool): This

**功能：** 设置是否显示侧边栏。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  是否显示侧边栏。 true：显示侧边栏。 false：不显示侧边栏。 初始值：true。  
  
#### [h2]func sideBarPosition(?SideBarPosition)
    
    
    public func sideBarPosition(value: ?SideBarPosition): This

**功能：** 设置侧边栏显示位置。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[SideBarPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-sidebarposition) | 是 | - |  侧边栏显示位置。 初始值：SideBarPosition.Start。  
  
#### [h2]func sideBarWidth(?Length)
    
    
    public func sideBarWidth(value: ?Length): This

**功能：** 设置侧边栏的宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/IAJmuYVeS0edmBU2tlHypQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=6974BAC57583E8353B42C6B1B4F72D6253BF5BA92827D7F88013B61DD4C05D9D)

设置为小于0的值时按默认值显示。受最小宽度和最大宽度限制，不在限制区域内取最近的点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  侧边栏的宽度。 单位：vp。 初始值：240.vp。  
  
#### 组件事件

#### [h2]func onChange(?(Bool) -> Unit)
    
    
    public func onChange(callback: ?(Bool) -> Unit): This

**功能：** 当侧边栏的状态在显示和隐藏之间切换时触发该事件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/bG7MQSAWSD6R_QtUmRRgyw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=9E99299B6524CF791A1D70F37FD2BAFB13B834809D767E554DBF4454FC1AE05E)

满足以下任意条件时触发该事件：

  * showSideBar属性值变换时。
  * showSideBar属性自适应行为变化时。
  * 分割线拖拽触发autoHide时。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?(Bool)->Unit | 是 | - |  回调函数，当侧边栏的状态由隐藏变为显示时，参数值为true；当侧边栏的状态由显示变为隐藏时，参数值为false。 初始值：{ _ => }。  
  
#### 基础类型定义

#### [h2]class ButtonIconOptions
    
    
    public class ButtonIconOptions {
        public var shown: ?ResourceStr
        public var hidden: ?ResourceStr
        public var switching: ?ResourceStr
        public init(shown!: ?ResourceStr, hidden!: ?ResourceStr, switching!: ?ResourceStr = None)
    }

**功能：** 表示图标类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var shown**
    
    
    public var shown: ?ResourceStr

**功能：** 侧边栏显示时控制按钮的图标。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var hidden**
    
    
    public var hidden: ?ResourceStr

**功能：** 侧边栏隐藏时控制按钮的图标。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var switching**
    
    
    public var switching: ?ResourceStr

**功能：** 侧边栏显示和隐藏状态切换时控制按钮的图标。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?ResourceStr, ?ResourceStr, ?ResourceStr)**
    
    
    public init(shown!: ?ResourceStr, hidden!: ?ResourceStr, switching!: ?ResourceStr = None)

**功能：** 构造 ButtonIconOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
shown | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 设置侧边栏显示时控制按钮的图标。  
hidden | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 设置侧边栏隐藏时控制按钮的图标。  
switching | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None |  **命名参数。** 设置侧边栏显示和隐藏状态切换时控制按钮的图标。 初始值：""  
  
#### [h2]class ButtonStyle
    
    
    public class ButtonStyle {
        public var left: ?Float64
        public var top: ?Float64
        public var width: ?Float64
        public var height: ?Float64
        public var icons: ?ButtonIconOptions
        public init(
            left!: ?Float64 = None,
            top!: ?Float64 = None,
            width!: ?Float64 = None,
            height!: ?Float64 = None,
            icons!: ?ButtonIconOptions = None
        )
    }

**功能：** 侧边栏控制按钮属性类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var left**
    
    
    public var left: ?Float64

**功能：** 设置侧边栏控制按钮距离容器左界限的间距。

单位：vp。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var top**
    
    
    public var top: ?Float64

**功能：** 设置侧边栏控制按钮距离容器上界限的间距。

单位：vp。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var width**
    
    
    public var width: ?Float64

**功能：** 设置侧边栏控制按钮的宽度。

单位：vp。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var height**
    
    
    public var height: ?Float64

**功能：** 设置侧边栏控制按钮的高度。

单位：vp。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var icons**
    
    
    public var icons: ?ButtonIconOptions

**功能：** 设置侧边栏控制按钮的图标。

**类型：** ?ButtonIconOptions

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**读写能力：** 可读写

**起始版本：** 22

**init(?Float64, ?Float64, ?Float64, ?Float64, ?ButtonIconOptions)**
    
    
    public init(
        left!: ?Float64 = None,
        top!: ?Float64 = None,
        width!: ?Float64 = None,
        height!: ?Float64 = None,
        icons!: ?ButtonIconOptions = None
    )

**功能：** 构造ButtonStyle对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
left | ?Float64 | 否 | None |  **命名参数。** 设置侧边栏控制按钮距离容器左界限的间距。 单位：vp。 初始值：16.0。  
top | ?Float64 | 否 | None |  **命名参数。** 设置侧边栏控制按钮距离容器上界限的间距。 单位：vp。 初始值：48.0。  
width | ?Float64 | 否 | None |  **命名参数。** 设置侧边栏控制按钮的宽度。 单位：vp。 初始值：24.0。  
height | ?Float64 | 否 | None |  **命名参数。** 设置侧边栏控制按钮的高度。 单位：vp。 初始值：24.0。  
icons | ?ButtonIconOptions | 否 | None |  **命名参数。** 设置侧边栏控制按钮的图标。 初始值：ButtonIconOptions(shown: "", hidden: "")。  
  
#### [h2]class DividerStyle
    
    
    public class DividerStyle {
        public var strokeWidth: ?Length
        public var color: ?ResourceColor
        public var startMargin: ?Length
        public var endMargin: ?Length
        public init(strokeWidth!: ?Length, color!: ?ResourceColor = None, startMargin!: ?Length = None,
            endMargin!: ?Length = None)
    }

**功能：** SideBar分割线样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/KKf06_V1T3m7Yn1lz5nFeA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=0C842821F3E99EF67ED23F94F2BAE3D655B417EC467395960E78AE9C660C520A)

针对侧边栏内容区设置[通用属性宽高](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size)时，宽高都不生效，默认占满SideBarContainer的剩余空间。

当showSideBar属性未设置时，依据组件大小进行自动显示：

  * 小于minSideBarWidth + minContentWidth：默认不显示侧边栏。
  * 大于等于minSideBarWidth + minContentWidth：默认显示侧边栏。



**var strokeWidth**
    
    
    public var strokeWidth: ?Length

**功能：** 分割线的线宽。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var color**
    
    
    public var color: ?ResourceColor

**功能：** 分割线的颜色。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var startMargin**
    
    
    public var startMargin: ?Length

**功能：** 分割线与侧边栏顶端的距离。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var endMargin**
    
    
    public var endMargin: ?Length

**功能：** 分割线与侧边栏底端的距离。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Length, ?ResourceColor, ?Length, ?Length)**
    
    
    public init(strokeWidth!: ?Length, color!: ?ResourceColor = None, startMargin!: ?Length = None,
        endMargin!: ?Length = None)

**功能：** 构造DividerStyle对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
strokeWidth | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - |  **命名参数。** 分割线的线宽。 初始值：1.vp。  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | None |  **命名参数。** 分割线的颜色。 初始值：0x08000000。  
startMargin | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** 分割线与侧边栏顶端的距离。 初始值：0.vp。  
endMargin | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None |  **命名参数。** 分割线与侧边栏底端的距离。 初始值：0.vp。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        @State
        var arr: Array<Int64> = [1, 2, 3]
        @State
        var current: Int64 = 1
        var normalIcon: AppResource = @r(app.media.startIcon)
        let ctrlButton: ButtonStyle = ButtonStyle(left: 17.0, top: 49.0, width: 20.0, height: 31.0,
            icons: ButtonIconOptions(shown: "", hidden: "", switching: ""))
        func build() {
            SideBarContainer() {
                Column() {
                    ForEach(
                        this.arr,
                        itemGeneratorFunc: {
                            item: Int64, idx: Int64 => Column() {
                                Image(this.normalIcon)
                                    .width(50)
                                    .height(50)
                                Text("Index${item}")
                                    .fontSize(25)
                                    .fontColor(0x0A59F7)
                                    .fontFamily("source-sans-pro,cursive,sans-serif")
                            }.onClick({
                                event => this.current = idx
                            })
                        }
                    )
                }
                    .width(100.percent)
                    .justifyContent(FlexAlign.SpaceEvenly)
                    .backgroundColor(0x19000000)
                Column() {
                    Text('SideBarContainer content text1').fontSize(20)
                    Text('SideBarContainer content text2').fontSize(20)
                }
            }
                .id("SideBarDefault")
                .showSideBar(true)
                .showControlButton(true)
                .showControlButton(true)
                .autoHide(false)
                .sideBarWidth(150.vp)
                .minSideBarWidth(50.vp)
                .maxSideBarWidth(300.vp)
                .minContentWidth(1.vp)
                .sideBarPosition(SideBarPosition.Start)
                .controlButton(ctrlButton)
                .width(90.percent)
                .height(85.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/l50QfKFkT--i7poayoWwUw/zh-cn_image_0000002731538817.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=BC1A8A43EB531CC84AA9F6499861966EFF95802ADB7A241A182F1FC1F28867BD)
