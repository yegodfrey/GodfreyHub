---
name: cangjie-references/cj-grid-layout-gridrow
title: GridRow
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 栅格与分栏 / GridRow
---

# GridRow

栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题，保证不同设备上各个模块的布局一致性。

栅格容器组件，仅可以和栅格子组件([GridCol](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridcol))在栅格布局场景中使用。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

([GridCol](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridcol))在栅格布局场景中使用。

#### 创建组件

#### [h2]init(?Int32, ?Length, ?BreakPoints, ?GridRowDirection, () -> Unit)
    
    
    public init(
        columns!: ?Int32,
        gutter!: ?Length = None,
        breakpoints!: ?BreakPoints = Option.None,
        direction!: ?GridRowDirection = Option.None,
        child!: () -> Unit = {=>}
    )

**功能：** 创建一个可包含子组件的GridRow容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
columns | ?Int32 | 是 | - | **命名参数。** 布局列数设置。  
gutter | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 栅格布局间距。 初始值：0.vp。  
breakpoints | ?BreakPoints | 否 | Option.None | **命名参数。** 断点值的断点数组以及基于窗口或容器尺寸的相应参照。 初始值：BreakPoints()。  
direction | ?GridRowDirection | 否 | Option.None | **命名参数。** 栅格布局排列方向。 初始值：GridRowDirection.Row。  
child | () -> Unit | 否 | {=>} | **命名参数。** GridRow容器的子组件。  
  
#### [h2]init(?GridRowOptions, ?Length, ?BreakPoints, ?GridRowDirection, () -> Unit)
    
    
    public init(
        columns!: ?GridRowOptions = None,
        gutter!: ?Length = None,
        breakpoints!: ?BreakPoints = Option.None,
        direction!: ?GridRowDirection = Option.None,
        child!: () -> Unit = {=>}
    )

**功能：** 创建一个可包含子组件的GridRow容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
columns | ?GridRowOptions | 否 | None | **命名参数。** 布局列数设置。 初始值：GridRowOptions()  
gutter | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 栅格布局间距。 初始值：0.vp  
breakpoints | ?BreakPoints | 否 | Option.None | **命名参数。** 断点值的断点数组以及基于窗口或容器尺寸的相应参照。 初始值：BreakPoints()  
direction | ?GridRowDirection | 否 | Option.None | **命名参数。** 栅格布局排列方向。 初始值：GridRowDirection.Row  
child | () -> Unit | 否 | {=>} | **命名参数。** GridRow 容器的子组件。  
  
#### [h2]init(?Int32, ?GutterOption, ?BreakPoints, ?GridRowDirection, () -> Unit)
    
    
    public init(
        columns!: ?Int32,
        gutter!: ?GutterOption,
        breakpoints!: ?BreakPoints = Option.None,
        direction!: ?GridRowDirection = Option.None,
        child!: () -> Unit = {=>}
    )

**功能：** 创建一个可包含子组件的GridRow容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
columns | ?Int32 | 是 | - | **命名参数。** 布局列数设置。  
gutter | ?GutterOption | 是 | - | **命名参数。** 栅格布局间距。  
breakpoints | ?BreakPoints | 否 | Option.None | **命名参数。** 断点值的断点数列以及基于窗口或容器尺寸的相应参照。 初始值：BreakPoints()  
direction | ?GridRowDirection | 否 | Option.None | **命名参数。** 栅格布局排列方向。 初始值：GridRowDirection.Row  
child | () -> Unit | 否 | {=>} | **命名参数。** GridRow 容器的子组件。  
  
#### [h2]init(?GridRowOptions, ?GutterOption, ?BreakPoints, ?GridRowDirection, () -> Unit)
    
    
    public init(
        columns!: ?GridRowOptions = None,
        gutter!: ?GutterOption,
        breakpoints!: ?BreakPoints = Option.None,
        direction!: ?GridRowDirection = Option.None,
        child!: () -> Unit = {=>})

**功能：** 创建一个可包含子组件的GridRow容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
columns | ?GridRowOptions | 否 | None | **命名参数。** 布局列数设置。 初始值：GridRowOptions()。  
gutter | ?GutterOption | 是 | - | **命名参数。** 栅格布局间距。  
breakpoints | ?BreakPoints | 否 | Option.None | **命名参数。** 断点值的断点数列以及基于窗口或容器尺寸的相应参照。 初始值：BreakPoints()。  
direction | ?GridRowDirection | 否 | Option.None | **命名参数。** 栅格布局排列方向。 初始值：GridRowDirection.Row。  
child | () -> Unit | 否 | {=>} | **命名参数。** GridRow容器的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func alignItems(?ItemAlign)
    
    
    public func alignItems(value: ?ItemAlign): This

**功能：** 设置GridRow中的GridCol垂直主轴方向对齐方式。GridCol本身也可通过alignSelf([ItemAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-itemalign))设置自身对齐方式。当上述两种对齐方式都设置时，以GridCol自身设置为准。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ItemAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-itemalign) | 是 | - | GridRow中的GridCol垂直主轴方向对齐方式。 初始值：ItemAlign.Start。  
  
#### 组件事件

#### [h2]func onBreakpointChange(?(String) -> Unit)
    
    
    public func onBreakpointChange(callback: ?(String) -> Unit): This

**功能：** 断点发生变化时触发回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?(String)->Unit | 是 | - | 断点发生变化时触发回调取值为"xs"、"sm"、"md"、"lg"、"xl"、"xxl" 初始值：{ res: String => }。  
  
#### 基础类型定义

#### [h2]class BreakPoints
    
    
    public class BreakPoints {
        public var value: ?Array<Length>
        public var reference: ?BreakpointsReference
        public init(value!: ?Array<Length> = None,
            reference!: ?BreakpointsReference = None
        )
    }

**功能：** 构建栅格容器组件的断点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var reference**
    
    
    public var reference: ?BreakpointsReference

**功能：** 断点切换参照物。

**类型：** ?BreakpointsReference

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var value**
    
    
    public var value: ?Array<Length>

**功能：** 断点位置的单调递增数组设置。

**类型：** ?Array<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Array <Length>, ?BreakpointsReference)**
    
    
    public init(value!: ?Array<Length> = None,
        reference!: ?BreakpointsReference = None
    )

**功能：** 构造一个BreakPoints对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Array<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 否 | None | **命名参数。** 断点位置的单调递增数组设置 初始值：[320.vp, 600.vp, 840.vp]  
reference | ?BreakpointsReference | 否 | None | **命名参数。** 断点切换参照物。 初始值：BreakpointsReference.WindowSize  
  
#### [h2]class GridRowSizeOption
    
    
    public class GridRowSizeOption {
        public var xs: ?Length
        public var sm: ?Length
        public var md: ?Length
        public var lg: ?Length
        public var xl: ?Length
        public var xxl: ?Length
        public init(
            xs!: ?Length = None,
            sm!: ?Length = None,
            md!: ?Length = None,
            lg!: ?Length = None,
            xl!: ?Length = None,
            xxl!: ?Length = None
        )
        public init(value: ?Length)
    }

**功能：** 栅格在不同宽度设备类型下，gutter的大小。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var lg**
    
    
    public var lg: ?Length

**功能：** 大宽度类型设备。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var md**
    
    
    public var md: ?Length

**功能：** 中等宽度类型设备。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var sm**
    
    
    public var sm: ?Length

**功能：** 小宽度类型设备。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var xl**
    
    
    public var xl: ?Length

**功能：** 特大宽度类型设备。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var xs**
    
    
    public var xs: ?Length

**功能：** 最小宽度类型设备。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var xxl**
    
    
    public var xxl: ?Length

**功能：** 超大宽度类型设备。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Length, ?Length, ?Length, ?Length, ?Length, ?Length)**
    
    
    public init(
        xs!: ?Length = None,
        sm!: ?Length = None,
        md!: ?Length = None,
        lg!: ?Length = None,
        xl!: ?Length = None,
        xxl!: ?Length = None
    )

**功能：** 构造一个GridRowSizeOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
xs | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 在栅格大小为xs的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
sm | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 在栅格大小为sm的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
md | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 在栅格大小为md的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
lg | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 在栅格大小为lg的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
xl | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 在栅格大小为xl的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
xxl | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 在栅格大小为xxl的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
  
**init(?Length)**
    
    
    public init(value: ?Length)

**功能：** 构造一个GridRowSizeOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 在任意栅格大小的设备上，栅格子组件占据的列数或偏移的列数。 初始值：0.vp  
  
#### [h2]class GutterOption
    
    
    public class GutterOption {
        public init(x!: ?Length = None, y!: ?Length = None)
        public init(x!: ?GridRowSizeOption, y!: ?GridRowSizeOption)
    }

**功能：** 栅格布局间距类型，用于描述栅格子组件不同方向的间距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Length, ?Length)**
    
    
    public init(x!: ?Length = None, y!: ?Length = None)

**功能：** 构造一个GutterOptions类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 栅格子组件x方向的间距。 初始值：0.vp  
y | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 栅格子组件y方向的间距。 初始值：0.vp  
  
**init(?GridRowSizeOption, ?GridRowSizeOption)**
    
    
    public init(x!: ?GridRowSizeOption, y!: ?GridRowSizeOption)

**功能：** 构造一个GutterOptions类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | ?GridRowSizeOption | 是 | - | **命名参数。** 栅格子组件x方向的间距。 初始值：GridRowSizeOption()  
y | ?GridRowSizeOption | 是 | - | **命名参数。** 栅格子组件y方向的间距。 初始值：GridRowSizeOption()  
  
#### [h2]class GridRowOptions
    
    
    public class GridRowOptions {
        public var xs: ?Int32
        public var sm: ?Int32
        public var md: ?Int32
        public var lg: ?Int32
        public var xl: ?Int32
        public var xxl: ?Int32
        public init(
            xs!: ?Int32 = None,
            sm!: ?Int32 = None,
            md!: ?Int32 = None,
            lg!: ?Int32 = None,
            xl!: ?Int32 = None,
            xxl!: ?Int32 = None
        )
        public init(value: ?Int32)
    }

**功能：** 栅格在不同宽度设备类型下，栅格列数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var lg**
    
    
    public var lg: ?Int32

**功能：** **命名参数。** 在栅格大小为lg的设备上，栅格子组件占据的列数或偏移的列数。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var md**
    
    
    public var md: ?Int32

**功能：** **命名参数。** 在栅格大小为md的设备上，栅格子组件占据的列数或偏移的列数。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var sm**
    
    
    public var sm: ?Int32

**功能：** **命名参数。** 在栅格大小为sm的设备上，栅格子组件占据的列数或偏移的列数。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var xl**
    
    
    public var xl: ?Int32

**功能：** **命名参数。** 在栅格大小为xl的设备上，栅格子组件占据的列数或偏移的列数。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var xs**
    
    
    public var xs: ?Int32

**功能：** **命名参数。** 在栅格大小为xs的设备上，栅格子组件占据的列数或偏移的列数。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var xxl**
    
    
    public var xxl: ?Int32

**功能：** **命名参数。** 在栅格大小为xxl的设备上，栅格子组件占据的列数或偏移的列数。

**类型：** ?Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Int32, ?Int32, ?Int32, ?Int32, ?Int32, ?Int32)**
    
    
    public init(
        xs!: ?Int32 = None,
        sm!: ?Int32 = None,
        md!: ?Int32 = None,
        lg!: ?Int32 = None,
        xl!: ?Int32 = None,
        xxl!: ?Int32 = None
    )

**功能：** 构造一个GridRowOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
xs | ?Int32 | 否 | None | **命名参数。** 在栅格大小为xs的设备上，栅格子组件占据的列数或偏移的列数。 初始值：2  
sm | ?Int32 | 否 | None | **命名参数。** 在栅格大小为sm的设备上，栅格子组件占据的列数或偏移的列数。 初始值：4  
md | ?Int32 | 否 | None | **命名参数。** 在栅格大小为md的设备上，栅格子组件占据的列数或偏移的列数。 初始值：8  
lg | ?Int32 | 否 | None | **命名参数。** 在栅格大小为lg的设备上，栅格子组件占据的列数或偏移的列数。 初始值：12  
xl | ?Int32 | 否 | None | **命名参数。** 在栅格大小为xl的设备上，栅格子组件占据的列数或偏移的列数。 初始值：12  
xxl | ?Int32 | 否 | None | **命名参数。** 在栅格大小为xxl的设备上，栅格子组件占据的列数或偏移的列数。 初始值：12  
  
**init(?Int32)**
    
    
    public init(value: ?Int32)

**功能：** 构造一个GridRowOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 在任意栅格大小的设备上，栅格子组件占据的列数或偏移的列数。 初始值：12  
  
#### [h2]enum BreakpointsReference
    
    
    public enum BreakpointsReference <: Equatable<BreakpointsReference> {
        | WindowSize
        | ComponentSize
        | ...
    }

**功能：** 设置以窗口为参照或以容器为参照。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：** Equatable<BreakpointsReference>

**ComponentSize**
    
    
    ComponentSize

**功能：** 以容器为参照。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**WindowSize**
    
    
    WindowSize

**功能：** 以窗口为参照。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(BreakpointsReference)**
    
    
    public operator func !=(other: BreakpointsReference): Bool

**功能：** 比较两个枚举值是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | BreakpointsReference | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(BreakpointsReference)**
    
    
    public operator func ==(other: BreakpointsReference): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | BreakpointsReference | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### [h2]enum GridRowDirection
    
    
    public enum GridRowDirection <: Equatable<GridRowDirection> {
        | Row
        | RowReverse
        | ...
    }

**功能：** 栅格元素按照行或列方向排列。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：** Equatable<GridRowDirection>

**Row**
    
    
    Row

**功能：** 主轴与行方向一致作为布局模式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**RowReverse**
    
    
    RowReverse

**功能：** 与Row方向相反方向进行布局。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(GridRowDirection)**
    
    
    public operator func !=(other: GridRowDirection): Bool

**功能：** 比较两个枚举值是否不相等

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | GridRowDirection | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(GridRowDirection)**
    
    
    public operator func ==(other: GridRowDirection): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | GridRowDirection | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        var bgColors: Array<Color> = [Color.Red, Color.Green, Color.Blue, Color.Gray, Color.Red, Color.Green, Color.Blue,
            Color.Gray]
        var currentBp: String = ""
        func build() {
            Column {
                GridRow(
                    //设置栅格在不同宽度设备类型下对应的显示栅格列数。
                    //xs:最小宽度类型设备   sm:小宽度类型设备    md:中等宽度类型设备。
                    //lg:大宽度类型设备     xl:特大宽度类型设备  xxl:超大宽度类型设备。
                    columns: GridRowOptions(xs: 6, sm: 7, md: 8, lg: 9, xl: 10, xxl: 11),
                    //设置栅格布局间距，x代表水平方向，y代表垂直方向。
                    gutter: GutterOption(x: 5.vp, y: 10.vp),
                    //设置断点值的断点数列以及基于窗口或容器尺寸的相应参照。
                    breakpoints: BreakPoints(
                        //启用xs,sm,md,lg四个断点
                        value: [200.vp, 300.vp, 400.vp], //设置断点位置的单调递增数组。
                        reference: BreakpointsReference.WindowSize
                    ), //设置为以窗口为参照。
                    //设置栅格布局排列方向,按照行方向排列。
                    direction: GridRowDirection.Row
                ) {
                    //循环渲染出bgColors对应颜色的栅格
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row()
                                    .width(100.percent)
                                    .height(20.vp)
                            }
                                .borderWidth(2.vp)
                                .borderColor(color)
                                .span(1)
                        }
                    )
                }
                    .width(100.percent)
                    .height(200)
                    .onBreakpointChange({bp => currentBp = bp})
                    .alignItems(ItemAlign.Center) //设置GridRow中的GridCol垂直主轴方向对齐方式。这里设置为居中对齐。
    
                GridRow(
                    //设置布局列数为5列
                    columns: 5,
                    //设置栅格布局间距，水平方向为5vp，垂直方向10vp。
                    gutter: GutterOption(x: 5.vp, y: 10.vp),
                    //设置断点值的断点数列以及基于窗口或容器尺寸的相应参照。
                    breakpoints: BreakPoints(
                        //启用xs,sm,md,lg四个断点
                        value: [400.vp, 600.vp, 800.vp], //设置断点位置的单调递增数组。
                        reference: BreakpointsReference.WindowSize //设置为以窗口为参照。
                    ),
                    direction: GridRowDirection.Row
                ) {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row()
                                    .width(100.percent)
                                    .height(20.vp)
                            }
                                .borderWidth(2.vp)
                                .borderColor(color)
                                .span(GridColOptions(xs: 2, sm: 3, md: 4, lg: 5, xl: 6, xxl: 7))
                        }
                    )
                }
                    .width(100.percent)
                    .height(100.percent)
                    .onBreakpointChange({bp => currentBp = bp})
                    .alignItems(ItemAlign.Center)
            }
                .margin(left: 10, right: 10, top: 5, bottom: 5)
                .height(400)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/uHJzC1zyQdyns1DWip1AYA/zh-cn_image_0000002743077863.png?HW-CC-KV=V1&HW-CC-Date=20260908T090147Z&HW-CC-Expire=86400&HW-CC-Sign=C51429FC8ADCE7BC64898AC80C184355E1BD2DD22D847F40EE4AE3B1F99E41CD)
