---
name: cangjie-references/cj-universal-event-hover
title: 悬浮事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-hover
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用事件 / 悬浮事件
---

# 悬浮事件  
  
光标滑动或手写笔在屏幕上悬浮移动扫过组件时触发。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/HSbvDC1uQjm9Jc0LswhvaA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090144Z&HW-CC-Expire=86400&HW-CC-Sign=C4CD2F05D9F8A7257F8C0ADA7DC162014ED1E87B00A532797FDB4C536825768A)

目前支持通过外接鼠标、手写笔以及触控板触发。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func onHover(?(Bool) -> Unit)
    
    
    func onHover(event: ?(Bool) -> Unit): T

**功能：** 鼠标进入或退出组件时，触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?(Bool) -> Unit | 是 | - | 回调函数，鼠标进入或退出组件时触发的回调。 鼠标进入时为true，退出时为false。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
