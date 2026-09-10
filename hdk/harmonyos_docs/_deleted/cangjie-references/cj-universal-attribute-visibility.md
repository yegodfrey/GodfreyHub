---
name: cangjie-references/cj-universal-attribute-visibility
title: 显隐控制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-visibility
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 显隐控制
---

# 显隐控制

控制组件是否可见。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func visibility(?Visibility)
    
    
    func visibility(value: ?Visibility): T

**功能：** 设置组件的可见性。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Visibility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-visibility) | 是 | - | 控制当前组件显示或隐藏。根据具体场景需要，可使用条件渲染代替。初始值: Visibility.Visible  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
