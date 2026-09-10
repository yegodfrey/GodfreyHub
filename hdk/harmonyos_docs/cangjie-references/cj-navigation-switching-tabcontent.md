---
name: cangjie-references/cj-navigation-switching-tabcontent
title: TabContent
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabcontent
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 导航与切换 / TabContent
---

# TabContent

仅在Tabs中使用，对应一个切换页签的内容视图。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

支持单个子组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/ZbxnLmkgQgSHRb7idqHcqg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=4DB773F6146067801096589FA0DCA0241C12048E5B720928A48AE504FAF3BBD3)

可内置系统组件和自定义组件，支持渲染控制类型（[if/else](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-ifelse)、[ForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-foreach)和[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach)）。

#### 创建组件

#### [h2]init()
    
    
    public init()

**功能：** 创建一个不包含子组件的TabContent容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(() -> Unit)
    
    
    public init(child: () -> Unit)

**功能：** 创建一个包含子组件的TabContent容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | ()->Unit | 是 | - | 声明容器内的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/U1ntmmu2T3GIw6FSSnzE9g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=B0BDB476A39D153F7C57F516AC4681C21CBBF43DA67DB47B1C5483A76648B6FB)

  * TabContent组件不支持设置通用宽度属性，其宽度默认撑满Tabs父组件。
  * TabContent组件不支持设置通用高度属性，其高度由Tab父组件与TabBar组件高度决定。
  * vertical属性为false值，交换上述2个限制。
  * TabContent组件不支持内容过长时页面的滑动，如需页面滑动，可嵌套List使用。
  * 建议对Tabs组件的所有TabContent子组件的tabBar属性，采用统一的参数类型。
  * 若TabContent内部有可获焦组件，Tabs组件内TabContent组件和TabBar组件之间的走焦，仅支持通过键盘的方向键控制。



通用事件：全部支持。

#### 组件属性

#### [h2]func tabBar(?CustomBuilder)
    
    
    public func tabBar(content: ?CustomBuilder): This

**功能：** 设置TabBar上显示内容。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
content | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 是 | - | TabBar上显示内容。初始值：{ => }。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/qevgOnhJQZGv643ud1OVWw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=563A73117591424D9F5E2CE4B3A496D8EC86E56D29406D88458EE26692A563AC)

  * 如果设置的内容超出TabBar提供的空间，则会被裁剪。
  * 传入[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder)类型的参数时，需使用bind管理自定义构建函数的调用，bind使用方式请参见[框架接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework)中的bind函数说明。



#### [h2]func tabBar(?ResourceStr)
    
    
    public func tabBar(content: ?ResourceStr): This

**功能：** 设置TabBar上显示内容。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
content | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | TabBar上显示内容。初始值：""。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/T_qnOVW6QqyJmPmNrhLrnA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=4B8ADCCD0889E24EDCF071EB212C1039F38164D37008A9FFDDD52ECDAB477AF8)

如果设置的内容超出TabBar提供的空间，则会被裁剪。

#### [h2]func tabBar(?ResourceStr, ?ResourceStr)
    
    
    public func tabBar(icon!: ?ResourceStr = None, text!: ?ResourceStr = None): This

**功能：** 设置TabBar上显示内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/8HzvS2HGReuG1IWO1FMmGA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090148Z&HW-CC-Expire=86400&HW-CC-Sign=200EE912A3F37E73EF3850C39E9D7831DC5BE633D6A510E7A836E43938137DEE)

  * 底部标签样式不包含指示器。
  * 当图标显示错误时，会显示灰色空白块。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
icon | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** TabBar图标。初始值：""。  
text | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** TabBar文本。初始值：""。  
  
#### 示例代码

见[tabs](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-tabs)
