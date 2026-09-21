---
name: cangjie-references/cj-universal-attribute-renderfit
title: 组件内容填充方式
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-renderfit
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 组件内容填充方式
---

# 组件内容填充方式  
  
用于决定在组件的宽高动画过程中，如何将动画最终的组件内容绘制在组件上。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func renderFit(?RenderFit)
    
    
    func renderFit(fitMode: ?RenderFit): T

**功能：** 设置宽高动画过程中的组件内容填充方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fitMode | ?[RenderFit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-renderfit) | 是 | - | 宽高动画过程中的组件内容填充方式。  初始值：RenderFit.TopLeft。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
