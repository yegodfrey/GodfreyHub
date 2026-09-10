---
name: cangjie-references/cj-universal-event-areachange
title: 组件区域变化事件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-areachange
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用事件 / 组件区域变化事件
---

# 组件区域变化事件  
  
组件区域变化事件指组件显示的尺寸、位置等发生变化时触发的事件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/hYRN13iWTluZkvds_tzCuA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090144Z&HW-CC-Expire=86400&HW-CC-Sign=2D7B65384C63A8F7C4C95B1CE7771E911D03A282187E0EE9943B3D6C03A54871)

onAreaChange回调执行仅与本组件有关，对祖先或子孙组件上的onAreaChange的回调没有严格的执行顺序和限制保障。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func onAreaChange(?(Area, Area) -> Unit)
    
    
    func onAreaChange(event: ?(Area, Area) -> Unit): T

**功能：** 组件区域变化时触发该回调。仅会响应由布局变化所导致的组件大小、位置发生变化时的回调。

由绘制变化所导致的渲染属性变化不会响应回调，如translate、offset。若组件自身位置由绘制变化决定也不会响应回调，如bindSheet。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?([Area](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-area), [Area](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-area)) -> Unit | 是 | - | 组件区域变化时触发该回调。 参数一：变化前的组件区域信息。 参数二：变化后的组件区域信息。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回通用方法接口类型。
