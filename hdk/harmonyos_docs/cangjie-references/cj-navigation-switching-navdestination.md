---
name: cangjie-references/cj-navigation-switching-navdestination
title: NavDestination
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 导航与切换 / NavDestination
---

# NavDestination

作为子页面的根容器，用于显示[Navigation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation)的内容区。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/07NocXqSTm-PsogwsxjR6g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=C986AAB0812A312CEDFA2061F7F6698436F6D2AD046323B6DF30AE722254D4D7)

  * NavDestination组件必须配合Navigation使用，作为Navigation目的页面的根节点，单独使用只能作为普通容器组件，不具备路由相关属性能力。
  * 如果页面栈中间页面的生命周期发生变化，跳转之前的栈顶Destination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)与跳转之后的栈顶Destination的生命周期(onWillShow, onShown, onHidden, onWillDisappear)均在最后触发。
  * NavDestination未设置主副标题并且没有返回键时，不显示标题栏。



#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含子组件。

#### 创建组件

#### [h2]init(() -> Unit)
    
    
    public init(child!: () -> Unit = { => })

**功能：** 构造一个NavDestination容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | () -> Unit | 否 | { => } | **命名参数。** NavDestination容器的子组件。  
  
#### 通用属性/通用事件

通用属性：支持通用属性。

不推荐设置位置、大小等布局相关属性，可能会造成页面显示异常。

通用事件：全部支持。

#### 组件属性

#### [h2]func hideTitleBar(?Bool)
    
    
    public func hideTitleBar(value: ?Bool): This

**功能：** 指定是否隐藏标题栏。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 是否隐藏标题栏。初始值：false。  
  
#### [h2]func title(?CustomBuilder, ?NavigationTitleOptions)
    
    
    public func title(value: ?CustomBuilder, options!: ?NavigationTitleOptions = None): This

**功能：** 设置页面标题。当NavigationCustomTitle类型用于设置高度时，titleMode属性不生效。当标题字符串过长时：(1)未设置副标题时，字符串会缩小、换两行，再截断加省略号(...); (2)设置副标题时，副标题会缩小再截断加省略号(...)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 是 | - | 页面标题。初始值：{=>}。  
options | ?[NavigationTitleOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#class-navigationtitleoptions) | 否 | None | **命名参数。** 标题栏选项。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/29p-qx3FR9WygwZCvdzitA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=48D8BD45937446B56FEA21564218033C366C72AEBD0B4714548DF4D9FF79E9CD)

传入[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder)类型的参数时，需使用bind管理自定义构建函数的调用，bind使用方式请参见[框架接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework)中的bind函数说明。

#### [h2]func title(?ResourceStr, ?NavigationTitleOptions)
    
    
    public func title(value: ?ResourceStr, options!: ?NavigationTitleOptions = None): This

**功能：** 设置页面标题。当NavigationCustomTitle类型用于设置高度时，titleMode属性不生效。当标题字符串过长时：(1)未设置副标题时，字符串会缩小、换两行，再截断加省略号(...); (2)设置副标题时，副标题会缩小再截断加省略号(...)。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 页面标题。 初始值：{=>}。  
options | ?[NavigationTitleOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#class-navigationtitleoptions) | 否 | None | **命名参数。** 标题栏选项。  
  
#### 组件事件

#### [h2]func onBackPressed(?() -> Bool)
    
    
    public func onBackPressed(callback: ?() -> Bool): This

**功能：** 当与Navigation绑定的页面栈中存在内容时，此回调生效。当点击返回键时，触发该事件。返回值为true时，表示重写返回键逻辑，返回值为false时，表示回退到上一个页面。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?() -> Bool | 是 | - | 回调函数，当点击返回键时，触发该回调。返回值为true时，表示重写返回键逻辑，返回值为false时，表示回退到上一个页面。初始值：{ => true }。  
  
#### [h2]func onReady(?Callback<NavDestinationContext, Unit>)
    
    
    public func onReady(callback: ?Callback<NavDestinationContext, Unit>): This

**功能：** 当NavDestination即将构建子组件之前会触发此事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[Callback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-callbackt-v)<NavDestinationContext, Unit> | 是 | - | 回调函数，即将构建子组件之前会触发此回调。初始值：{ _ => }。  
  
#### 基础类型定义

#### [h2]class NavDestinationContext
    
    
    public class NavDestinationContext {
        public var pathInfo: NavPathInfo
        public var pathStack: NavPathStack
        public var navDestinationId: String
    }

**功能：** NavDestination上下文信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var navDestinationId**
    
    
    public var navDestinationId: String

**功能：** 当前NavDestination的唯一ID，由系统自动生成，和组件通用属性id无关。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var pathInfo**
    
    
    public var pathInfo: NavPathInfo

**功能：** 跳转NavDestination时指定的参数。

**类型：** [NavPathInfo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#class-navpathinfo)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var pathStack**
    
    
    public var pathStack: NavPathStack

**功能：** 当前NavDestination所处的页面栈。

**类型：** [NavPathStack](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#class-navpathstack)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### 示例代码

NavDestination用法可参考[Navigation示例](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation#示例代码)。
