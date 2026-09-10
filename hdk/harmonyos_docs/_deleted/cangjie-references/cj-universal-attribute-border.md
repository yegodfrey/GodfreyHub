---
name: cangjie-references/cj-universal-attribute-border
title: 边框设置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-border
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 边框设置
---

# 边框设置  
  
设置组件边框样式。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func border(?Length, ?ResourceColor, ?Length, ?BorderStyle)
    
    
    func border(width!: ?Length, color!: ?ResourceColor, radius!: ?Length,
        style!: ?BorderStyle): T

**功能：** 设置组件的边框样式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/4vdeRNjYRuG3eV1u0KeYkQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=233DD3CC34F4CE57EB1F2E387FEDFCA6CCCF727A5B2BBB6B846842A201BC7617)

当color、radius缺省时，为了保证borderColor、borderRadius设置生效，需要将borderColor、borderRadius设置在border后。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 边框宽度。初始值：0.vp  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | **命名参数。** 边框颜色。初始值：Color.Black  
radius | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 边框圆角半径。初始值：0.vp  
style | ?[BorderStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-borderstyle) | 是 | - | **命名参数。** 边框样式。初始值：BorderStyle.Solid  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func borderColor(?ResourceColor)
    
    
    func borderColor(value: ?ResourceColor): T

**功能：** 设置组件的边框颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 边框颜色。初始值：Color.Black  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func borderRadius(?Length)
    
    
    func borderRadius(value: ?Length): T

**功能：** 设置组件的圆角半径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 圆角半径。初始值：0.0.vp  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func borderRadius(?Length, ?Length, ?Length, ?Length)
    
    
    func borderRadius(topLeft!: ?Length, topRight!: ?Length, bottomLeft!: ?Length,
        bottomRight!: ?Length): T

**功能：** 设置组件的四个角的圆角半径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
topLeft | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 左上角圆角半径。初始值：0.vp  
topRight | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 右上角圆角半径。初始值：0.vp  
bottomLeft | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 左下角圆角半径。初始值：0.vp  
bottomRight | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 右下角圆角半径。初始值：0.vp  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func borderStyle(?BorderStyle)
    
    
    func borderStyle(value: ?BorderStyle): T

**功能：** 设置组件的边框样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[BorderStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-borderstyle) | 是 | - | 边框样式值。初始值：BorderStyle.Solid  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func borderWidth(?EdgeWidths)
    
    
    func borderWidth(value: ?EdgeWidths): T

**功能：** 设置组件的边框宽度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[EdgeWidths](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-edgewidths) | 是 | - | 边缘宽度。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func borderWidth(?Length)
    
    
    func borderWidth(value: ?Length): T

**功能：** 设置组件的边框宽度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 边框宽度。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
