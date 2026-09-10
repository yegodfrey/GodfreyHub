---
name: cangjie-references/cj-button-picker-select
title: Select
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-select
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 按钮与选择 / Select
---

# Select

提供下拉选择菜单，可以让用户在多个选项之间选择。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?Array<SelectOption>)
    
    
    public init(options: ?Array<SelectOption>)

**功能：** 构造一个下拉选择菜单组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | ?Array<SelectOption> | 是 | - | 设置下拉选项。 初始值：[]。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func selected(?Int32)
    
    
    public func selected(value: ?Int32): This

**功能：** 设置下拉菜单初始选项的索引，第一项的索引为0。当不设置selected属性或设置异常值时，初始选择值为-1，菜单项不选中。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 下拉菜单初始选项的索引。 初始值：0。  
  
#### [h2]func value(?ResourceStr)
    
    
    public func value(value: ?ResourceStr): This

**功能：** 设置下拉按钮本身的文本内容。当菜单选中时默认会替换为菜单项文本内容。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 下拉按钮本身的文本内容。文本长度大于列宽时，文本被截断。 初始值：""。  
  
#### [h2]func font(?FontStyle, ?FontWeight, ?Length, ?ResourceStr)
    
    
    public func font(
        style!: ?FontStyle = None,
        weight!: ?FontWeight = None,
        size!: ?Length = None,
        family!: ?ResourceStr = None
    ): This

**功能：** 设置下拉按钮本身的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照初始值显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
style | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 否 | None | **命名参数。** 用于指定字体样式。 初始值：FontStyle.Normal。  
weight | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 否 | None | **命名参数。** 用于指定字体的粗细。 初始值：FontWeight.Medium。  
size | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 指定字号和行高，不支持百分比设置。 初始值：16.vp。  
family | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 指定字体系列。 初始值："sans-serif"。  
  
#### [h2]func fontColor(?ResourceColor)
    
    
    public func fontColor(value: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉按钮本身的文本颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 下拉按钮本身的文本颜色。 初始值：@r(sys.color.ohos_id_color_text_primary)混合@r(sys.color.ohos_id_alpha_content_primary)的透明度。  
  
#### [h2]func selectedOptionBgColor(?ResourceColor)
    
    
    public func selectedOptionBgColor(value: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉菜单选中项的背景色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 下拉菜单选中项的背景色。 初始值：@r(sys.color.ohos_id_color_component_activated)混合@r(sys.color.ohos_id_alpha_highlight_bg)的透明度。  
  
#### [h2]func selectedOptionFont(?FontStyle, ?FontWeight, ?Length, ?String)
    
    
    public func selectedOptionFont(
        style!: ?FontStyle = None,
        weight!: ?FontWeight = None,
        size!: ?Length = None,
        family!: ?String = None
    ): This

**功能：** 设置下拉菜单选中项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照初始值显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
style | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 否 | None | **命名参数。** 用于指定字体样式。 初始值：FontStyle.Normal。  
weight | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 否 | None | **命名参数。** 用于指定字体的粗细。 初始值：FontWeight.Medium。  
size | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 文本尺寸。不支持百分比设置。 初始值：16.vp。  
family | ?String | 否 | None | **命名参数。** 指定字体列表。 初始值："sans-serif"。  
  
#### [h2]func selectedOptionFontColor(?ResourceColor)
    
    
    public func selectedOptionFontColor(value: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉菜单选中项的文本颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 下拉菜单选中项的文本颜色。 初始值：@r(sys.color.ohos_id_color_text_primary_activated)  
  
#### [h2]func optionBgColor(?ResourceColor)
    
    
    public func optionBgColor(value: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉菜单项的背景色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 下拉菜单项的背景色。 初始值：Color.Transparent。  
  
#### [h2]func optionFont(?FontStyle, ?FontWeight, ?Length, ?ResourceStr)
    
    
    public func optionFont(
        style!: ?FontStyle = None,
        weight!: ?FontWeight = None,
        size!: ?Length = None,
        family!: ?ResourceStr = None
    ): This

**功能：** 设置下拉菜单项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照初始值显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
style | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 否 | None | **命名参数。** 用于指定字体样式。 初始值：FontStyle.Normal。  
weight | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 否 | None | **命名参数。** 用于指定字体的粗细。 初始值：FontWeight.Medium。  
size | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 指定字号和行高，不支持百分比设置。 初始值：16.vp。  
family | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 指定字体系列。 初始值："sans-serif"。  
  
#### [h2]func optionFontColor(?ResourceColor)
    
    
    public func optionFontColor(value: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉菜单项的文本颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 下拉菜单项的文本颜色。 初始值：@r(sys.color.ohos_id_color_text_primary)。  
  
#### [h2]func space(?Length)
    
    
    public func space(value: ?Length): This

**功能：** 根据指定的Length类型值，设置下拉菜单项的文本与箭头之间的间距。不支持设置百分比。设置为小于等于8的值，取初始值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 下拉菜单项的文本与箭头之间的间距。 初始值：8.0.vp。  
  
#### [h2]func arrowPosition(?ArrowPosition)
    
    
    public func arrowPosition(value: ?ArrowPosition): This

**功能：** 设置下拉菜单项的文本与箭头之间的对齐方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ArrowPosition](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-arrowposition) | 是 | - | 下拉菜单项的文本与箭头之间的对齐方式。 初始值：ArrowPosition.End。  
  
#### [h2]func menuAlign(?MenuAlignType, ?Offset)
    
    
    public func menuAlign(alignType!: ?MenuAlignType, offset!: ?Offset): This

**功能：** 设置下拉按钮与下拉菜单间的对齐方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
alignType | ?[MenuAlignType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-menualigntype) | 是 | - | **命名参数。** 对齐方式类型。 初始值：MenuAlignType.Start。  
offset | ?[Offset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-offset) | 是 | - | **命名参数。** 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。 初始值：Offset(0.0.vp, 0.0.vp)。  
  
#### [h2]func optionWidth(?OptionWidthMode)
    
    
    public func optionWidth(value: ?OptionWidthMode): This

**功能：** 设置下拉菜单项的宽度。OptionWidthMode类型为枚举类型，OptionWidthMode决定下拉菜单是否继承下拉按钮宽度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[OptionWidthMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-optionwidthmode) | 是 | - | 下拉菜单项的宽度。  
  
#### [h2]func optionWidth(?Length)
    
    
    public func optionWidth(value: ?Length): This

**功能：** 根据指定的Length类型值，设置下拉菜单项的宽度，不支持设置百分比。

当设置为异常值或小于最小宽度56.vp时，属性不生效，菜单项宽度设为初始值，即菜单初始宽度为2栅格。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 下拉菜单项的宽度。  
  
#### [h2]func optionHeight(?Length)
    
    
    public func optionHeight(value: ?Length): This

**功能：** 根据指定的Length类型值，设置下拉菜单显示的最大高度。下拉菜单的初始最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过初始最大高度。

当设置为负数与零时，属性不生效，下拉菜单最大高度设为初始值，即下拉菜单最大高度默认值为屏幕可用高度的80%。

正常值范围大于0。如果下拉菜单所有选项的实际高度没有设定的高度大，下拉菜单的高度按实际高度显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 下拉菜单显示的最大高度。  
  
#### [h2]func menuBackgroundColor(?ResourceColor)
    
    
    public func menuBackgroundColor(value: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉菜单的背景色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 下拉菜单的背景色。 初始值：Color.Transparent。  
  
#### [h2]func menuBackgroundBlurStyle(?BlurStyle)
    
    
    public func menuBackgroundBlurStyle(value: ?BlurStyle): This

**功能：** 设置下拉菜单的背景模糊材质。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[BlurStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-blurstyle) | 是 | - | 下拉菜单的背景模糊材质。 初始值：BlurStyle.ComponentUltraThick。  
  
#### 组件事件

#### [h2]func onSelect(?OnSelectCallback)
    
    
    public func onSelect(callback: ?OnSelectCallback): This

**功能：** 下拉菜单选中某一项时触发该回调。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?OnSelectCallback | 是 | - | 选中项的索引和值。 初始值：{ _, _ => }。  
  
#### 基础类型定义

#### [h2]class SelectOption
    
    
    public class SelectOption {
        public var value: ?ResourceStr
        public var icon: ?ResourceStr
        public init(value!: ?ResourceStr, icon!: ?ResourceStr = None)
    }

**功能：** 设置下拉菜单组件参数的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var value**
    
    
    public var value: ?ResourceStr

**功能：** 下拉选项内容。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var icon**
    
    
    public var icon: ?ResourceStr

**功能：** 下拉选项图标。

**类型：** ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?ResourceStr, ?ResourceStr)**
    
    
    public init(value!: ?ResourceStr, icon!: ?ResourceStr = None)

**功能：** 构造SelectOptions对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | **命名参数。** 下拉选项内容。初始值：""。  
icon | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 下拉选项图标。初始值：""。  
  
#### [h2]type OnSelectCallback
    
    
    public type OnSelectCallback = (Int32, String) -> Unit

**功能：** 定义选择回调函数类型。

**类型：** (Int32, String) -> Unit

#### 示例代码

#### [h2]示例1（设置下拉菜单）

该示例通过配置SelectOptions实现下拉菜单。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    import ohos.hilog.*
    import ohos.arkui.component.common.Offset as CommonOffset
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        @State
        var text: String = "TTTTT"
        @State
        var index: Int32 = 2
        @State
        var space: Int64 = 8
    
        @State
        var values1: Array<SelectOption> = [SelectOption(value: "aaa", icon: @r(app.media.startIcon)),
            SelectOption(value: "bbb", icon: @r(app.media.startIcon)),
            SelectOption(value: "ccc", icon: @r(app.media.startIcon)),
            SelectOption(value: "ddd", icon: @r(app.media.startIcon))]
    
        @State
        var arrow: ArrowPosition = ArrowPosition.End
    
        func build() {
            Column {
                Select(this.values1)
                    .selected(1)
                    .value(this.text)
                    .font(size: 16.vp, weight: FontWeight.W500)
                    .fontColor(0x182431)
                    .selectedOptionFont(size: 16.vp, weight: FontWeight.W400)
                    .space(this.space)
                    .arrowPosition(this.arrow)
                    .menuAlign(alignType: MenuAlignType.Start, offset: CommonOffset(0, 0))
                    .optionWidth(200)
                    .optionHeight(300)
                    .onSelect(
                        {
                            index: Int32, text: String =>
                                Hilog.info(0, "AppLogCj", " ==================  Select ====================: ${index}")
                                Hilog.info(0, "AppLogCj", " ==================  text ====================: ${text}")
                                this.index = index
                                this.text = text
                        }
                    )
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/sw1jpLd7SDuToDPz-h90Hw/zh-cn_image_0000002713558924.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=47BFAF00A96AFB0891736557FA22DFA9059AEAAA749DF48B3F440E42D537134E)
