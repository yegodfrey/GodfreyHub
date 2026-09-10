---
name: cangjie-references/cj-universal-attribute-foregroundblurstyle
title: 组件内容模糊
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-foregroundblurstyle
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 组件内容模糊
---

# 组件内容模糊

为当前组件添加内容模糊效果。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func foregroundBlurStyle(?BlurStyle)
    
    
    func foregroundBlurStyle(value: ?BlurStyle): T

**功能：** 为当前组件提供内容模糊能力。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

名称 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 是 | - | 内容模糊样式。  初始值：BlurStyle.None。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。  
  
#### func foregroundBlurStyle(?BlurStyle, ?ForegroundBlurStyleOptions)
    
    
    func foregroundBlurStyle(value: ?BlurStyle, options: ?ForegroundBlurStyleOptions): T

**功能：** 为当前组件提供内容模糊能力。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

名称 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 是 | - | 内容模糊样式。  
options | ?[ForegroundBlurStyleOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-foregroundblurstyleoptions) | 是 | - | 内容模糊选项。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
