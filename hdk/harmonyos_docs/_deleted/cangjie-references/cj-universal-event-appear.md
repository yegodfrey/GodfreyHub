---
name: cangjie-references/cj-universal-event-appear
title: 挂载卸载事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-appear
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用事件 / 挂载卸载事件
---

# 挂载卸载事件  
  
挂载卸载事件指组件从组件树上挂载、卸载时触发的事件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func onAppear(?() -> Unit)
    
    
    func onAppear(event: ?() -> Unit): T

**功能：** 组件挂载显示时触发此回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - | 组件挂载显示回调函数，回调的调用时机有可能发生在组件布局渲染后。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。  
  
#### func onDisAppear(?() -> Unit)
    
    
    func onDisAppear(event: ?() -> Unit): T

**功能：** 组件卸载消失时触发此回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?() -> Unit | 是 | - | 组件卸载消失回调函数，回调的调用时机有可能发生在组件布局渲染后。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
