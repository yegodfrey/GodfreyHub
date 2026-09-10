---
name: cangjie-references/cj-information-display-counter
title: Counter
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-counter
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 信息展示 / Counter
---

# Counter

计数器组件，提供相应的增加或者减少的计数操作。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含子组件。

#### 创建组件

#### [h2]init(() -> Unit)
    
    
    public init(content: () -> Unit)

**功能：** 创建计数器组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
content | () -> Unit | 是 | - | 定义计数器组件和内容区。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func enableDec(?Bool)
    
    
    public func enableDec(value: ?Bool): This

**功能：** 设置减少按钮禁用或使能。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 减少按钮禁用或使能。初始值: true true表示按钮使能。 false表示按钮禁用。  
  
#### [h2]func enableInc(?Bool)
    
    
    public func enableInc(value: ?Bool): This

**功能：** 设置增加按钮禁用或使能。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 增加按钮禁用或使能。初始值: true true表示+按钮使能。 false表示+按钮禁用。  
  
#### 组件事件

#### [h2]func onDec(?VoidCallback)
    
    
    public func onDec(event: ?VoidCallback): This

**功能：** 监听数值减少时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 回调函数，Counter数值减少时触发。初始值: { => }  
  
#### [h2]func onInc(?VoidCallback)
    
    
    public func onInc(event: ?VoidCallback): This

**功能：** 监听数值增加触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?[VoidCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-voidcallback) | 是 | - | 回调函数，Counter数值增加时触发。初始值: { => }  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var value: Int64 = 0
        func build() {
            Column {
                Counter() {
                    Text(this
                        .value
                        .toString())
                }
                    .margin(100.0)
                    .height(10.percent)
                    .onInc({
                        => this.value++
                    })
                    .onDec({
                        => this.value--
                    })
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/fGpr8eVUSBCUM0KepCTf5A/zh-cn_image_0000002743077905.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=C8C31CB62695D948E09A495EA29C6BEC1167F568030373DBDF5AC65CBE6254E4)
