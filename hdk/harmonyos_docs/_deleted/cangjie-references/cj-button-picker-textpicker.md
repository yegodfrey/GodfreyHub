---
name: cangjie-references/cj-button-picker-textpicker
title: TextPicker
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-textpicker
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 按钮与选择 / TextPicker
---

# TextPicker

滑动选择文本内容的组件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?Array<String>, ?UInt32, ?String)
    
    
    public init(
        range!: ?Array<String>,
        selected!: ?UInt32 = Option.None,
        value!: ?String = Option.None
    )

**功能：** 根据range指定的选择范围创建文本选择器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
range | ?Array<String> | 是 | - | **命名参数。** 选择器的数据选择列表。  
selected | ?UInt32 | 否 | Option.None | **命名参数。** 设置默认选中项在数组中的索引值。 初始值：0。  
value | ?String | 否 | Option.None | **命名参数。** 设置默认选中项的值，优先级低于selected。 初始值：第一个元素值。 **说明** ：只有显示文本列表时该值有效。显示图片或图片加文本的列表时，该值无效。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func canLoop(?Bool)
    
    
    public func canLoop(value: ?Bool): This

**功能：** 设置是否可循环滚动。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 是否可循环滚动。 true：可循环，false：不可循环。 初始值：true。  
  
#### [h2]func defaultPickerItemHeight(?Length)
    
    
    public func defaultPickerItemHeight(value: ?Length): This

**功能：** 设置Picker各选择项的高度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | Picker各选择项的高度。  
  
#### 组件事件

#### [h2]func onChange(?OnTextPickerChangeCallback)
    
    
    public func onChange(callback: ?OnTextPickerChangeCallback): This

**功能：** 选择器选项发生变化时触发该回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?OnTextPickerChangeCallback | 是 | - | 选择器选项发生变化时的回调函数。 初始值：{ _, _ => }。  
  
#### 基础类型定义

#### [h2]type OnTextPickerChangeCallback
    
    
    public type OnTextPickerChangeCallback = (String, UInt32) -> Unit

**功能：** TextPicker项目被选中事件的回调。

**类型：** (String, UInt32) -> Unit

#### 示例代码

#### [h2]示例1（设置选择器列数）

该示例通过配置range实现单列或多列文本选择器。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    
    func loggerInfo(str: String) {
        Hilog.info(0, "CangjieTest", str)
    }
    
    @Entry
    @Component
    class EntryView {
        var select: UInt32 = 1
        @State
        var fruits: Array<String> = ["apple", "banana", "orange", "peach"]
        func build() {
            Column {
                TextPicker(range: this.fruits, selected: this.select).onChange({
                    value: String, index: UInt32 => loggerInfo("Picker item changed, value: ${index}")
                })
            }
                .width(100.percent)
                .height(100.percent)
                .alignItems(HorizontalAlign.Center)
                .justifyContent(FlexAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/aAEenc2zReCvNqy9Am4Zjg/zh-cn_image_0000002731378859.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=23E3BA3897DB8328B0125D44DB447E5AFFB2F082DC297C6A62BD78E0FC784CBE)
