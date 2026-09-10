---
name: cangjie-references/cj-universal-event-click
title: 点击事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用事件 / 点击事件
---

# 点击事件

点击事件指组件被点击时触发的事件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func onClick(?(ClickEvent) -> Unit)
    
    
    func onClick(event: ?(ClickEvent) -> Unit): T

**功能：** 组件被点击时触发的事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?([ClickEvent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-clickevent)) -> Unit | 是 | - | 回调函数，组件被点击时触发该回调。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
