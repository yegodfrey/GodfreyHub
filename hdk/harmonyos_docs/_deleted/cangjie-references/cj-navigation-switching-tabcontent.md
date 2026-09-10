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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/E3dJIIpBTKqzmMybm0vT2g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=2B42B84619470BA2FE1EDDCB782AB1C34D5AF57D2DE92B84F906C577E6A37D0E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/q-QiCtx7SGuZbe7plMydxQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=A04FD62406B8435822B8EC0F9AE96CFBB6EF47C4C57D220EE025A62E683DA01F)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/GVUixyPtRri7fd83ZRXQ7g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=5EE4BAB233C3093B23B846311BF8BCA38319F51E54C7E1D4DA89CB92B731716E)

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
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/5aHLmV_dSWaASGFldSGykg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=4A6687C5C73116FEABBDCFA97CF11091F4BA331FD86D1DD57450F594401F3D23)

如果设置的内容超出TabBar提供的空间，则会被裁剪。

#### [h2]func tabBar(?ResourceStr, ?ResourceStr)
    
    
    public func tabBar(icon!: ?ResourceStr = None, text!: ?ResourceStr = None): This

**功能：** 设置TabBar上显示内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/L_ERuOgJQ66W2Qc2TeuSng/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=2D038BDFB21689388B02517C6E72499EE522C9D1BB33FC122658844CA85B1E65)

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
