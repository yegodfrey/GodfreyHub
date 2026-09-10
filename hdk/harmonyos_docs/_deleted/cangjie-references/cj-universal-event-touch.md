---
name: cangjie-references/cj-universal-event-touch
title: 触摸事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-touch
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用事件 / 触摸事件
---

# 触摸事件  
  
当手指在组件上按下、滑动、抬起时触发。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func onTouch(?(TouchEvent) -> Unit)
    
    
    func onTouch(event: ?(TouchEvent) -> Unit): T

**功能：** 手指触摸动作触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?([TouchEvent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-touchevent)) -> Unit | 是 | - | 回调函数，手指触摸动作触发该回调。 初始值：{ _: TouchEvent => }。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
