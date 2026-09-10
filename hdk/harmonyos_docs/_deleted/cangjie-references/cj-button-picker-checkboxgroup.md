---
name: cangjie-references/cj-button-picker-checkboxgroup
title: CheckboxGroup
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-checkboxgroup
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 按钮与选择 / CheckboxGroup
---

# CheckboxGroup

多选框群组，用于控制多选框全选或者不全选状态。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?String)
    
    
    public init(group!: ?String = None)

**功能：** 创建多选框群组，可以控制群组内的Checkbox全选或者不全选，group值相同的Checkbox和CheckboxGroup为同一群组。

在结合带缓存组件使用时(如List)，未被创建的Checkbox选中状态需要应用手动控制。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
group | ?String | 否 | None | **命名参数。** 多选框的群组名称。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func selectAll(?Bool)
    
    
    public func selectAll(value: ?Bool): This

**功能：** 设置是否全选。若同组的[Checkbox](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-checkbox)显式设置了select属性，则Checkbox的优先级高。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 是否全选。初始值：false。 值为true时，多选框群组都被选中。值为false时，多选框群组都不被选中。  
  
#### [h2]func selectedColor(?ResourceColor)
    
    
    public func selectedColor(value: ?ResourceColor): This

**功能：** 设置被选中或部分选中状态的颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 被选中或部分选中状态的颜色。  
  
#### 组件事件

#### [h2]func onChange(?OnCheckboxGroupChangeCallback)
    
    
    public func onChange(callback: ?OnCheckboxGroupChangeCallback): This

**功能：** CheckboxGroup的选中状态或群组内的Checkbox的选中状态发生变化时，触发回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?OnCheckboxGroupChangeCallback | 是 | - | 多选框群组的信息。初始值：{ _ => }  
  
#### 基础类型定义

#### [h2]class CheckboxGroupResult
    
    
    public class CheckboxGroupResult {
        public var name: Array<String>
        public var status: SelectStatus
        public init(
            status: SelectStatus,
            name: Array<String>
        )
    }

**功能：** 多选框群组选中状态信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var name**
    
    
    public var name: Array<String>

**功能：** 群组内所有被选中的多选框名称。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var status**
    
    
    public var status: SelectStatus

**功能：** 选中状态。

**类型：** [SelectStatus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-selectstatus)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(SelectStatus, Array <String>)**
    
    
    public init(
        status: SelectStatus,
        name: Array<String>
    )

**功能：** 构造多选框群组选中状态信息。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
status | [SelectStatus](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-selectstatus) | 是 | - | 选中状态。  
name | Array<String> | 是 | - | 群组内所有被选中的多选框名称。  
  
#### [h2]type OnCheckboxGroupChangeCallback
    
    
    public type OnCheckboxGroupChangeCallback = (CheckboxGroupResult) -> Unit

**功能：** (CheckboxGroupResult) -> Unit 的类型别名。

**类型：** (CheckboxGroupResult) -> Unit

#### 示例代码

#### [h2]示例1（设置多选框群组）

该示例用于控制多选框全选或者不全选状态。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.hilog.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.ArrayList
    
    func loggerInfo(str: String) {
        Hilog.info(0, "CangjieTest", str)
    }
    
    func formatNames(names: Array<String>): String {
        var result = ""
        for (name in names) {
            result += name + ";"
        }
        result
    }
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    CheckboxGroup(group: "checkboxGroup")
                        .size(width: 50.vp, height: 50.vp)
                        .selectedColor(0xed6f21)
                        .selectAll(false)
                        .onChange({
                            val => loggerInfo("checkboxGroup onChange names:" + formatNames(val.name))
                        })
    
                    Text("Select All").fontSize(50)
                }
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    Checkbox(name: "checkbox1", group: "checkboxGroup").size(width: 50.vp, height: 50.vp)
    
                    Text("checkbox1").fontSize(50)
                }
    
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    Checkbox(name: "checkbox2", group: "checkboxGroup").size(width: 50.vp, height: 50.vp)
    
                    Text("checkbox2").fontSize(50)
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/xHXuqBkxSVaR7eWlQ49yeQ/zh-cn_image_0000002701819554.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=6B1425E722DD965332D499747ED6D7DB25BEC75E9730D02C43CBB9131F48D570)

#### [h2]示例2
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.hilog.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.ArrayList
    
    func loggerInfo(str: String) {
        Hilog.info(0, "CangjieTest", str)
    }
    
    func formatNames(names: Array<String>): String {
        var result = ""
        for (name in names) {
            result += name + ";"
        }
        result
    }
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    CheckboxGroup(group: "checkboxGroup1")
                        .size(width: 50.vp, height: 50.vp)
                        .selectedColor(0xed6f21)
                        .selectAll(true)
                        .onChange({
                            val => loggerInfo("checkboxGroup1 onChange names:" + formatNames(val.name))
                        })
    
                    Text("Select All").fontSize(50)
                }
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    Checkbox(name: "checkbox1", group: "checkboxGroup1").size(width: 50.vp, height: 50.vp)
    
                    Text("checkbox1").fontSize(50)
                }
    
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    Checkbox(name: "checkbox2", group: "checkboxGroup1").size(width: 50.vp, height: 50.vp)
    
                    Text("checkbox2").fontSize(50)
                }
    
                Flex(justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center) {
                    Checkbox(name: "checkbox3", group: "checkboxGroup1").size(width: 50.vp, height: 50.vp)
    
                    Text("checkbox3").fontSize(50)
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0/v3/ccedS5BLR_yyAshHTmjJJg/zh-cn_image_0000002731538835.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=753470677A03AF7EAE8EE6ACD64126FD6BA3E20EA6B41593F238A4C0F553C230)
