---
name: cangjie-references/cj-navigation-switching-stepperitem
title: StepperItem
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-stepperitem
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 导航与切换 / StepperItem
---

# StepperItem

用作[Stepper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-stepper)组件的页面子组件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

支持单个子组件。

#### 创建组件

#### [h2]init(() -> Unit)
    
    
    public init(child: () -> Unit)

**功能：** 创建[Stepper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-stepper)组件的页面子组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | () -> Unit | 是 | - | StepperItem的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func nextLabel(?String)
    
    
    public func nextLabel(value: ?String): This

**功能：** 设置右侧文本按钮内容，最后一页默认值为"开始"，其余页默认值为"下一步"。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?String | 是 | - | 右侧文本按钮内容。字符串超长时，先缩小再换行（2行）最后截断。 初始值：""。  
  
#### [h2]func prevLabel(?String)
    
    
    public func prevLabel(value: ?String): This

**功能：** 设置左侧文本按钮内容，第一页没有左侧文本按钮，当步骤导航器大于一页时，除第一页外默认值都为"返回"。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?String | 是 | - | 左侧文本按钮内容。字符串超长时，先缩小再换行（2行）最后截断。 初始值：""。  
  
#### [h2]func status(?ItemState)
    
    
    public func status(status!: ?ItemState = None): This

**功能：** 设置步骤导航器nextLabel的显示状态。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
status | ?[ItemState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-itemstate) | 否 | None | **命名参数。** 步骤导航器nextLabel的显示状态。 初始值：ItemState.Normal。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/jqGl5P0SRbu04iLn63ZJUg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=BDB083F4CBF7F1857683222DC4AFF5269D80CD1D45F15F166F494094979271A9)

  * StepperItem组件不支持设置通用宽度属性，其宽度默认撑满Stepper父组件。
  * StepperItem组件不支持设置通用高度属性，其高度由Stepper父组件高度减去label按钮组件高度。



#### 示例代码

见[Stepper](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-stepper)
