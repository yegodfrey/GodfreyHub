---
name: cangjie-references/cj-universal-attribute-enable
title: 禁用控制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-enable
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 禁用控制
---

# 禁用控制  
  
组件是否可交互，可交互状态下响应[点击事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click)、[触摸事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-touch)、[按键事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-key)、[焦点事件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-events-focus-event)和[鼠标事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-mouse)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/iOCrQstqS9ugcZ4nUMYDuQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=CE95F9A69D0C8EB4257FA5D916A051E27812B7BDC9801845E13789F417C4E293)

禁用控制属性只能在按下时生效，已经在交互过程中，更改enabled属性不生效。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func enabled(?Bool)
    
    
    func enabled(value: ?Bool): T

**功能：** 设置组件是否启用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - |  值为true表示组件可交互，响应点击等操作。 值为false表示组件不可交互，不响应点击等操作。 初始值：true  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
