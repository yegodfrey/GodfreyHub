---
name: cangjie-references/cj-universal-event-mouse
title: 鼠标事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-mouse
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用事件 / 鼠标事件
---

# 鼠标事件  
  
在单个动作触发多个事件时，事件的顺序是固定的，鼠标事件默认透传。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/_pkSqXJsTiOVCpunJ5Y7Wg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111634Z&HW-CC-Expire=86400&HW-CC-Sign=4C01D227534837B50AAA7CAFB3523E4EDEF0FB04F96EA125C2FD2EAC67F861CC)

目前仅支持通过外接鼠标触发。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func onMouse(?(MouseEvent) -> Unit)
    
    
    func onMouse(event: ?(MouseEvent) -> Unit): T

**功能：** 当前组件被鼠标按键点击时或者鼠标在组件上移动时，触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?([MouseEvent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-mouseevent)) -> Unit | 是 | - | 组件被鼠标按键点击时或者鼠标在组件上移动时触发该回调。MouseEvent参数包含触发事件时的时间戳、鼠标按键、动作、点击触点在整个屏幕上的坐标和点击触点相对于当前组件的坐标。 初始值：{ _: MouseEvent => }。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
