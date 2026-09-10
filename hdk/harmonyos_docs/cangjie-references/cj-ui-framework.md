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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/EP_3F2tZTjuCyNavMtSgmQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=081F533F900EC760FE413C6AF19E7D8A3A34AA9B1EBAD91D2616618727B47152)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/ND0htZtwQD6YKTXTFXGPlQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=8FA9378A51332ABEED13F900BB95C3A57E9748416CA4AFF468E10146715B2EB9)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ef/v3/lWcHr7mMRYuNof_nrEP3Yw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=A740654CFC23EDD79DB6A3385CB8B52E1BF7813AC8138DE2D780265F23614511)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/xOyvtcIQQ6WA53CLb3kf4Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=D241EF2E248E09C83CA8897A5A470830DB323EEB03DDD49A60B3919F533D2859)

bind推荐在使用属性[title](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination#func-titlecustombuilder-navigationtitleoptions)、[tabBar](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent#func-tabbarcustombuilder)以及构造[MenuItemGroup对象](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup#initcustombuilder-custombuilder----unit)时使用。

#### class RemoteView
    
    
    public abstract class RemoteView {
        public init()
    }

**功能：** UI框架使用的组件基础类。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/T-qOLsETS2idrUrJ-pof6g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=90CAACD16C6E5FA6C8F0E4E92FF50F4465A419D8CDD9719C8DDCE47E53F20242)

该类型仅供框架内部使用，应用开发者请勿使用，否则可能产生不可预期的行为。

#### [h2]init()
    
    
    public init()

**功能：** 构造一个RemoteView类型的对象，仅在UI框架场景下有效。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/8jF-GJDHS6u4BP_ry-XZ0Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=163EBBDD23EA28E8CCB874779D4B3133494EDC689A672541277010A4B4710589)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a/v3/7I17nEEJT0mp738h_nXBEw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=51C1DC3F81E3A887A3DB609A1E3A9356AD4892C4496B5B7492CC8490845DE73B)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/xuPqSXfURH2VuTmpHkw8UQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=31CE6A94B2FD3F768FD837168ACFFF28DB4912C72F30512031410C8CBC5A7691)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/I6LLRCUCR3u0jZCJ_1O7Yw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=742D3C1B4A4911883A27D4FA854AFF3FC376F0097CC02D7B4784CB0A25A298E2)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/2VJzIbzDSbiSAogizgOz8A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090153Z&HW-CC-Expire=86400&HW-CC-Sign=ED324EF9657F9603C6D3B3910593DDFE2C15D3752C4FE7DA009653E066AD298D)

该接口仅供框架内部使用，应用开发者请勿调用，否则可能产生不可预期的行为。
