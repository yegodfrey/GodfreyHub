---
name: cangjie-references/cj-apis-shape
title: ohos.arkui.shape（形状）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-shape
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.shape（形状）
---

# ohos.arkui.shape（形状）  
  
提供绘制图形的基础能力。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class BaseShape
    
    
    public abstract class BaseShape {}

**功能：** 图形基类，提供图形的基本属性和方法。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func fill(?ResourceColor)
    
    
    public func fill(color: ?ResourceColor): This

**功能：** 设置填充区域的颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 填充区域的颜色。  
  
#### [h2]func height(?Length)
    
    
    public func height(height: ?Length): This

**功能：** 设置图形高度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 图形高度。  
  
#### [h2]func offset(?Length, ?Length)
    
    
    public func offset(x!: ?Length, y!: ?Length): This

**功能：** 设置图形偏移。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
x | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** x轴偏移。 初始值：0.0.px。  
y | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** y轴偏移。 初始值：0.0.px。  
  
#### [h2]func size(?Length, ?Length)
    
    
    public func size(width!: ?Length, height!: ?Length): This

**功能：** 设置图形尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 图形宽度。 初始值：0.0.vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 图形高度。 初始值：0.0.vp。  
  
#### [h2]func width(?Length)
    
    
    public func width(width: ?Length): This

**功能：** 设置图形宽度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 图形宽度。  
  
#### class CircleShape
    
    
    public class CircleShape <: BaseShape {
        public init(width!: ?Length = None, height!: ?Length = None)
    }

**功能：** 用于[clipShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-clipshapebaseshape)和[maskShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-maskshapebaseshape)接口的圆形形状。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * BaseShape



#### [h2]init(?Length, ?Length)
    
    
    public init(width!: ?Length = None, height!: ?Length = None)

**功能：** CircleShape的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 圆形宽度。 初始值：0.vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 圆形高度。 初始值：0.vp。  
  
#### class EllipseShape
    
    
    public class EllipseShape <: BaseShape {
        public init(width!: ?Length = None, height!: ?Length = None)
    }

**功能：** 用于[clipShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-clipshapebaseshape)和[maskShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-maskshapebaseshape)接口的椭圆形状。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * BaseShape



#### [h2]init(?Length, ?Length)
    
    
    public init(width!: ?Length = None, height!: ?Length = None)

**功能：** EllipseShape的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 椭圆形宽度。 初始值：0.vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 椭圆形高度。 初始值：0.vp。  
  
#### class PathShape
    
    
    public class PathShape <: BaseShape {
        public init(commands!: ?ResourceStr = None)
        public init(width!: ?Length, height!: ?Length, commands!: ?ResourceStr = None)
    }

**功能：** 用于[clipShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-clipshapebaseshape)和[maskShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-maskshapebaseshape)接口的路径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * BaseShape



#### [h2]init(?ResourceStr)
    
    
    public init(commands!: ?ResourceStr = None)

**功能：** PathShape的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
commands | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 路径的绘制指令。 初始值：""。 更多说明请参考commands支持的[绘制命令](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-path#func-commandsresourcestr)。  
  
#### [h2]init(?Length, ?Length, ?ResourceStr)
    
    
    public init(width!: ?Length, height!: ?Length, commands!: ?ResourceStr = None)

**功能：** PathShape的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 路径宽度。 初始值：0.vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 路径高度。 初始值：0.vp。  
commands | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 路径命令。 初始值：""。 更多说明请参考commands支持的[绘制命令](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-path#func-commandsresourcestr)。  
  
#### class RectShape
    
    
    public class RectShape <: BaseShape {
        public init(width!: ?Length = None, height!: ?Length = None)
    }

**功能：** 用于[clipShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-clipshapebaseshape)和[maskShape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-maskshapebaseshape)接口的矩形形状。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * BaseShape



#### [h2]init(?Length, ?Length)
    
    
    public init(width!: ?Length = None, height!: ?Length = None)

**功能：** RectShape的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 矩形宽度。 初始值：0.vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 矩形高度。 初始值：0.vp。  
  
#### [h2]func radius(?Length)
    
    
    public func radius(value: ?Length): This

**功能：** 设置矩形圆角半径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 矩形圆角半径。 初始值：0.vp。  
  
#### [h2]func radiusHeight(?Length)
    
    
    public func radiusHeight(value: ?Length): This

**功能：** 设置矩形垂直圆角半径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 矩形垂直圆角半径。 初始值：0.vp。  
  
#### [h2]func radiusWidth(?Length)
    
    
    public func radiusWidth(value: ?Length): This

**功能：** 设置矩形水平圆角半径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 矩形水平圆角半径。 初始值：0.vp。
