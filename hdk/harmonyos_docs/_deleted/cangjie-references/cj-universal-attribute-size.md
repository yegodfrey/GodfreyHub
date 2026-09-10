---
name: cangjie-references/cj-universal-attribute-size
title: 尺寸设置
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 尺寸设置
---

# 尺寸设置  
  
设置组件的宽度、高度、尺寸、内边距、外边距等尺寸相关属性。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func width(Option<Length>)
    
    
    func width(value: Option<Length>): T

**功能：** 设置组件的宽度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/-0hSu-isStWUfk3vnwE1Yw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=03A4214F4B9F0A85EEB0A3858A39C9DE90F99E9B4F4849BDDDA96D5A5E9B986B)

  * 在[TextInput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-textinput)组件中，width设置[LengthMetrics.AUTO](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#static-let-auto)表示自适应文本宽度。
  * 在[AlphabetIndexer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-alphabetindexer)组件中，width设置[LengthMetrics.AUTO](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#static-let-auto)表示自适应宽度最大索引项的宽度。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 是 | - | 组件的宽度  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func height(Option<Length>)
    
    
    func height(value: Option<Length>): T

**功能：** 设置组件的高度。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/3x2nkCsOTA2ikJtpVLmPZA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=BA0733AB35E4F43EBAEE9C04AAEC8CB6F5987F95B7E6E8C1EFA93BC420E3991C)

在[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)、[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)、[RelativeContainer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-relativecontainer)组件中，width、height设置[LengthMetrics.AUTO](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#static-let-auto)表示自适应子组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | Option<[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)> | 是 | - | 组件的高度  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func size(?Length, ?Length)
    
    
    func size(width!: ?Length, height!: ?Length): T

**功能：** 设置组件的尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
width | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 组件的宽度 初始值：0.0.vp。  
height | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 组件的高度 初始值：0.0.vp。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func padding(?Length)
    
    
    func padding(value: ?Length): T

**功能：** 设置组件的内边距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 组件的内边距  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func padding(?Length, ?Length, ?Length, ?Length)
    
    
    func padding(top!: ?Length, right!: ?Length, bottom!: ?Length, left!: ?Length): T

**功能：** 分别设置组件四个方向的内边距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
top | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 上内边距 初始值：0.vp。  
right | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 右内边距 初始值：0.vp。  
bottom | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 下内边距 初始值：0.vp。  
left | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 左内边距 初始值：0.vp。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func margin(?Length)
    
    
    func margin(value: ?Length): T

**功能：** 设置组件的外边距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 组件的外边距  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func margin(?Length, ?Length, ?Length, ?Length)
    
    
    func margin(top!: ?Length, right!: ?Length, bottom!: ?Length, left!: ?Length): T

**功能：** 分别设置组件四个方向的外边距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
top | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 上外边距 初始值：0.vp。  
right | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 右外边距 初始值：0.vp。  
bottom | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 下外边距 初始值：0.vp。  
left | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | **命名参数。** 左外边距 初始值：0.vp。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func layoutWeight(?Int32)
    
    
    func layoutWeight(value: ?Int32): T

**功能：** 设置组件的布局权重。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 组件的布局权重 初始值：0。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func aspectRatio(Float64)
    
    
    func aspectRatio(value: Float64): T

**功能：** 设置组件的宽高比。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | Float64 | 是 | - | 组件的宽高比  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func displayPriority(?Int32)
    
    
    func displayPriority(value: ?Int32): T

**功能：** 设置组件的显示优先级。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 组件的显示优先级 初始值：1。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
