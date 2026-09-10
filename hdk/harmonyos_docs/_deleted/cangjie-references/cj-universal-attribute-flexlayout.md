---
name: cangjie-references/cj-universal-attribute-flexlayout
title: Flex布局
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / Flex布局
---

# Flex布局  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/vApAH405TN6oARLUyOsJfg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=BF7B25F44CBC60F927F01896C7A6BB9192DDE07A50942AFB37D1786164C5FE2D)

仅当父组件是 [Flex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex)、[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)、[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)、[GridRow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow)（仅针对alignSelf）时生效。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func alignSelf(?ItemAlign)
    
    
    func alignSelf(value: ?ItemAlign): T

**功能：** 子组件在父容器交叉轴的对齐格式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ItemAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-itemalign) | 是 | - | 子组件在父容器交叉轴的对齐格式，会覆盖Flex、Column、Row、GridRow布局容器中的alignItems设置。 GridCol可以绑定alignSelf属性来改变它自身在交叉轴方向上的布局。 初始值：ItemAlign.Auto。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func flexBasis(?Length)
    
    
    func flexBasis(value: ?Length): T

**功能：** 设置组件的基准尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 组件在父容器主轴方向上的基准尺寸。 初始值：[LengthMetrics.AUTO](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#static-let-auto)（表示组件在主轴方向上的基准尺寸为组件原本的大小）。 不支持设置percent。 取值范围(0,+∞)，默认单位为vp。 异常值：实际布局效果均与LengthMetrics.AUTO一致。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func flexGrow(?Float64)
    
    
    func flexGrow(value: ?Float64): T

**功能：** 设置组件在父容器的剩余空间所占比例。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Float64 | 是 | - | 父容器在主轴方向上的剩余空间分配给此属性所在组件的比例。 取值范围(0,+∞)，初始值：0.0。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func flexGrow(?Int64)
    
    
    func flexGrow(value: ?Int64): T

**功能：** 设置组件在父容器的剩余空间所占比例。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int64 | 是 | - | 父容器在主轴方向上的剩余空间分配给此属性所在组件的比例。 取值范围(0,+∞)，初始值：0。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func flexShrink(?Float64)
    
    
    func flexShrink(value: ?Float64): T

**功能：** 设置父容器压缩尺寸分配给此属性所在组件的比例。当父容器为Column、Row时，需设置主轴方向的尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Float64 | 是 | - | 父容器压缩尺寸分配给此属性所在组件的比例。 父容器为[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)、[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)时，取值范围(0,+∞)，初始值为0.0。  父容器为[Flex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex)时，初始值：1.0。 [constraintSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-constraintsizelength-length-length-length)限制组件的尺寸范围，[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)和[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)即使设置了[constraintSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-constraintsizelength-length-length-length)，在未设置主轴尺寸（[width](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-widthoptionlength)/[height](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-heightoptionlength)/[size](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-sizelength-length)）时仍遵守默认布局行为，在主轴上自适应子组件尺寸，此时flexShrink不生效。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func flexShrink(?Int64)
    
    
    func flexShrink(value: ?Int64): T

**功能：** 设置父容器压缩尺寸分配给此属性所在组件的比例。当父容器为Column、Row时，需设置主轴方向的尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int64 | 是 | - | 父容器压缩尺寸分配给此属性所在组件的比例。 父容器为Column、Row时，初始值为0。  父容器为Flex时，初始值为1。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
