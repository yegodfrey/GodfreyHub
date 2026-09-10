---
name: cangjie-references/cj-apis-uicontext-contextmenucontroller
title: ContextMenuController
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-contextmenucontroller
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉API / UI界面 / ohos.arkui.ui_context（UIContext） / ContextMenuController
---

# ContextMenuController

提供控制菜单关闭的能力。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/qNzWeQKdQbisd3oLdug1YA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090143Z&HW-CC-Expire=86400&HW-CC-Sign=1EB1C0935E95934E7BE67BA627495EC595581B1EA5E8E771FB00BA8557D95DE2)

以下API需先使用[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)中的[getContextMenuController()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getcontextmenucontroller)方法获取ContextMenuController实例，再通过此实例调用对应方法。

#### 导入模块
    
    
    import kit.ArkUI.*

#### class ContextMenuController
    
    
    public class ContextMenuController {}

**功能：** 菜单控制器类。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func close()
    
    
    public func close(): Unit

**功能：** 关闭菜单。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22
