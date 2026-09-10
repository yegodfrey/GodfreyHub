---
name: cangjie-references/cj-menu-menuitemgroup
title: MenuItemGroup
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 菜单 / MenuItemGroup
---

# MenuItemGroup

该组件用来展示菜单MenuItem的分组。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

包含[MenuItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitem)子组件。

#### 创建组件

#### [h2]init(?CustomBuilder, ?CustomBuilder, () -> Unit)
    
    
    public init(header!: ?CustomBuilder, footer!: ?CustomBuilder, child!: () -> Unit = {=>})

**功能：** 创建一个用来展示菜单MenuItem的分组。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
header | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 是 | - | **命名参数。** 设置对应group的标题显示信息。初始值：{ => }。  
footer | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 是 | - | **命名参数。** 设置对应group的尾部显示信息。初始值：{ => }。  
child | () -> Unit | 否 | {=>} | **命名参数。** 声明容器内的子组件。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8/v3/C6Q1R_stSXuek5mD7eSyZw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111645Z&HW-CC-Expire=86400&HW-CC-Sign=0E32C974E0A7B95D1D587356137BFA5AE3808819D389D0FA4310013E92E2AD89)

传入[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder)类型的参数时，需使用bind管理自定义构建函数的调用，bind使用方式请参见[框架接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework)中的bind函数说明。

#### [h2]init(?ResourceStr, ?ResourceStr, () -> Unit)
    
    
    public init(header!: ?ResourceStr = None, footer!: ?ResourceStr = None, child!: () -> Unit = {=>})

**功能：** 创建一个用来展示菜单MenuItem的分组。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
header | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 设置对应group的标题显示信息。初始值：""。  
footer | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 设置对应group的尾部显示信息。初始值：""。  
child | () -> Unit | 否 | {=>} | **命名参数。** 声明容器内的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 示例代码

示例代码

详见[Menu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menu#示例代码)组件示例。
