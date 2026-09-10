---
name: cangjie-references/cj-universal-attribute-bindcontentcover
title: 全屏模态转场
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-bindcontentcover
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 模态转场设置 / 全屏模态转场
---

# 全屏模态转场  
  
通过bindContentCover属性为组件绑定全屏模态页面，在组件插入和删除时可通过设置转场参数ModalTransition显示过渡动效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/lxZp1BZHQ0-Sb6GrZF-V7g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=C4142C8CB9851FC9145F3DBCD925006BECC18959C502F4EE2A8A304B05E0E4C6)

  * 不支持横竖屏切换。
  * 不支持路由跳转。



#### 导入模块
    
    
    import kit.ArkUI.*

#### func bindContentCover(?Bool, ?CustomBuilder, ?ContentCoverOptions)
    
    
    func bindContentCover(isShow: ?Bool, builder: ?CustomBuilder, options!: ?ContentCoverOptions): T

**功能：** 给组件绑定全屏模态页面，点击后显示模态页面。模态页面内容自定义，显示方式可设置无动画过渡，上下切换过渡以及透明渐变过渡方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
isShow | ?Bool | 是 | - | 是否显示全屏模态页面。 初始值：false。  
builder | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 是 | - | 配置全屏模态页面内容。 初始值：{ => }。  
options | ?[ContentCoverOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-contentcoveroptions) | 是 | - | **命名参数。** 配置全屏模态页面的可选属性。 初始值：ContentCoverOptions()。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回调用此接口的组件实例本身。
