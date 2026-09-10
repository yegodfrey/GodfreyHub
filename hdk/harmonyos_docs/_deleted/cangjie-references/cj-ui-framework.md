---
name: cangjie-references/cj-ui-framework
title: 框架接口
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 框架接口
---

# 框架接口

本页面描述UI框架使用的公开接口。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func bind((CustomView) -> ViewBuilder, CustomView)
    
    
    public func bind(builder: (CustomView) -> ViewBuilder, thisView: CustomView): () -> Unit

**功能：** 用于将@Builder修饰的函数与自定义组件对象进行绑定。详情见bind函数使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | (CustomView)->ViewBuilder | 是 | - | [@Builder](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builder)修饰的函数类型。  
thisView | CustomView | 是 | - | 当前自定义组件对象（一般为this）。  
  
**返回值：**

类型 | 说明  
---|---  
() -> Unit | 返回builder函数。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/tX_Wm8_NTNqY_5bZPXttdQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=4689C33CC3940A2D1AB923C7ADA67841B2496D958D379BEF147FC57325D6164B)

bind推荐在使用属性[title](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination#func-titlecustombuilder-navigationtitleoptions)、[tabBar](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)以及构造[MenuItemGroup对象](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup#initcustombuilder-custombuilder----unit)时使用。

#### func bind<T1>((CustomView,ObservedProperty<T1>) -> ViewBuilder, CustomView)
    
    
    public func bind<T1>(builder: (CustomView, ObservedProperty<T1>) -> ViewBuilder, thisView: CustomView): (T1) -> Unit

**功能：** 用于将@Builder修饰的函数与自定义组件对象进行绑定。详情见bind函数使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | (CustomView,ObservedProperty<T1>)->ViewBuilder | 是 | - | [@Builder](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builder)修饰的函数类型。  
thisView | CustomView | 是 | - | 当前自定义组件对象（一般为this）。  
  
**返回值：**

类型 | 说明  
---|---  
(T1) -> Unit | 返回builder函数。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/09/v3/cgnFgFhOQzKxzLN4-l7oOQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=14EB01CDD30C450DFD78D34EAF6523F5ABDA448404EC9260828C838737C62A4D)

bind推荐在使用属性[title](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination#func-titlecustombuilder-navigationtitleoptions)、[tabBar](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)以及构造[MenuItemGroup对象](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup#initcustombuilder-custombuilder----unit)时使用。

#### func bind<T1, T2>((CustomView,ObservedProperty<T1>,ObservedProperty<T2>) -> ViewBuilder, CustomView)
    
    
    public func bind<T1, T2>(
        builder: (CustomView, ObservedProperty<T1>, ObservedProperty<T2>) -> ViewBuilder,
        thisView: CustomView
    ): (T1, T2) -> Unit

**功能：** 用于将@Builder修饰的函数与自定义组件对象进行绑定。详情见bind函数使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | (CustomView,ObservedProperty<T1>,ObservedProperty<T2>)->ViewBuilder | 是 | - | [@Builder](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builder)修饰的函数类型。  
thisView | CustomView | 是 | - | 当前自定义组件对象（一般为this）。  
  
**返回值：**

类型 | 说明  
---|---  
(T1, T2) -> Unit | 返回builder函数。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/mrNmetNRSXWtA9rQLutENQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=87C2753273C305CB540CE26C21D6674AE3FB591867C19FBEC0D6519BF52BAF3E)

bind推荐在使用属性[title](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination#func-titlecustombuilder-navigationtitleoptions)、[tabBar](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)以及构造[MenuItemGroup对象](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup#initcustombuilder-custombuilder----unit)时使用。

#### func bind<T1, T2, T3>((CustomView,ObservedProperty<T1>,ObservedProperty<T2>,ObservedProperty<T3>) -> ViewBuilder, CustomView)
    
    
    public func bind<T1, T2, T3>(builder: (CustomView, ObservedProperty<T1>, ObservedProperty<T2>,
        ObservedProperty<T3>) -> ViewBuilder, thisView: CustomView)

**功能：** 用于将@Builder修饰的函数与自定义组件对象进行绑定。详情见bind函数使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
builder | (CustomView,ObservedProperty<T1>,ObservedProperty<T2>,ObservedProperty<T3>)->ViewBuilder | 是 | - | [@Builder](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builder)修饰的函数类型。  
thisView | CustomView | 是 | - | 当前自定义组件对象（一般为this）。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/5j4yRH-dSqyqid-RMN86_Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=C63578B4212C832E5B216497AF264CC3B001F17175DD0A3CBAB5AD9422225214)

bind推荐在使用属性[title](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination#func-titlecustombuilder-navigationtitleoptions)、[tabBar](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)以及构造[MenuItemGroup对象](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup#initcustombuilder-custombuilder----unit)时使用。

#### class RemoteView
    
    
    public abstract class RemoteView {
        public init()
    }

**功能：** UI框架使用的组件基础类。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1c/v3/BWb5jvRhRuKd8siq6eIwqg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=9F2B15E0F3C427A02C87ECD3760563826255E58665B95D90355A8F40B0741DC5)

该类型仅供框架内部使用，应用开发者请勿使用，否则可能产生不可预期的行为。

#### [h2]init()
    
    
    public init()

**功能：** 构造一个RemoteView类型的对象，仅在UI框架场景下有效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5c/v3/5O-zXvqDQe-5mlHG6rpSFQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=888BF7CA92F98835FE6BDE2C8410608A694DC8229B2EC75C0557AD04B5864061)

该接口仅供框架内部使用，应用开发者请勿调用，否则可能产生不可预期的行为。

#### [h2]func build()
    
    
    public func build(): Unit

**功能：** 用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### class CustomView
    
    
    public abstract class CustomView <: RemoteView {}

**功能：** UI框架使用的组件基础类。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * RemoteView



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8e/v3/-y9mzfGfQFqGuVCZ-M0JQw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=81F0FD5882FAC8DE849065FA157B24FC2EAEBAAFDDDF620CF4777B97303030CA)

该类型仅供框架内部使用，应用开发者请勿使用，否则可能产生不可预期的行为。

#### [h2]func getLocalStorage()
    
    
    public func getLocalStorage(): LocalStorage

**功能：** 获取LocalStorage实例。仅供UI框架使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[LocalStorage](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-appstatemanagement#class-localstorage) | 持久化存储对象。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/29Wf3DFhSTCWKYvYmTbMGg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=83FC01FA2C31F351783102D17E7283C9D0B079A4D3A1302B02D05AADD45DE6F7)

该接口仅供框架内部使用，应用开发者请勿调用，否则可能产生不可预期的行为。

#### [h2]func build()
    
    
    public func build(): Unit

**功能：** 用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]func aboutToBeDeleted()
    
    
    public func aboutToBeDeleted(): Unit

**功能：** 组件销毁阶段由框架自动触发。仅供UI框架使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/0LTSKACYQi-GgiptRjAzHw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=F988F9EFEA270A71FDD97E08BD275D8DBE28FE09EC59FA9E5FC22EDE59134746)

该接口仅供框架内部使用，应用开发者请勿调用，否则可能产生不可预期的行为。

#### [h2]func getUIContext()
    
    
    public func getUIContext(): UIContext

**功能：** 获取UIContext对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext) | UI上下文。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/uU9MY6mKTRWnlAcHQdx7XQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=78FAA79C615D3FD4829A286DF32AFA4C650FF6B8B22F501ED6981204D24B7516)

该接口仅供框架内部使用，应用开发者请勿调用，否则可能产生不可预期的行为。
