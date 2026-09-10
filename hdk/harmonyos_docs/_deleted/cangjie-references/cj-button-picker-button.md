---
name: cangjie-references/cj-button-picker-button
title: Button
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-button
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 按钮与选择 / Button
---

# Button

按钮组件，可快速创建不同样式的按钮。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含单个子组件。

#### 创建组件

#### [h2]init()
    
    
    public init()

**功能：** 创建按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### [h2]init(() -> Unit)
    
    
    public init(child: () -> Unit)

**功能：** 创建包含子组件的按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | () -> Unit | 是 | - | 按钮包含的子组件。  
  
#### [h2]init(ResourceStr)
    
    
    public init(label: ResourceStr)

**功能：** 使用文本内容创建相应的按钮组件，此时Button无法包含子组件。

文本内容默认单行显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
label | [ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 按钮文本内容。当文本字符的长度超过按钮本身的宽度时，文本将会被截断。  
  
#### [h2]init(?ButtonOptions)
    
    
    public init(options: ?ButtonOptions)

**功能：** 使用文本内容创建相应的按钮组件，此时Button无法包含子组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | ?ButtonOptions | 是 | - | 配置按钮的显示样式。  
  
#### [h2]init(?ButtonOptions, () -> Unit)
    
    
    public init(options: ?ButtonOptions, child: () -> Unit)

**功能：** 创建可以包含子组件且有显示样式的按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
options | ?ButtonOptions | 是 | - | 配置按钮的显示样式。  
child | () -> Unit | 是 | - | 按钮包含的子组件。  
  
#### [h2]init(?ResourceStr, ?ButtonOptions)
    
    
    public init(label: ?ResourceStr, options: ?ButtonOptions)

**功能：** 使用文本内容创建相应的按钮组件，此时Button无法包含子组件。

文本内容默认单行显示。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
label | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 设置文本内容。当文本字符的长度超过按钮本身的宽度时，文本将会被截断。  
options | ?ButtonOptions | 是 | - | 配置按钮的显示样式。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func buttonStyle(?ButtonStyleMode)
    
    
    public func buttonStyle(value: ?ButtonStyleMode): This

**功能：** 设置Button组件的样式和重要程度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?ButtonStyleMode | 是 | - | Button组件的样式和重要程度。 初始值：ButtonStyleMode.Emphasized。  
  
#### [h2]func fontColor(?ResourceColor)
    
    
    public func fontColor(color: ?ResourceColor): This

**功能：** 根据指定的Color，设置下拉按钮本身的文本颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 按钮文本颜色。 初始值：Color(0xFFFFFF)。  
  
#### [h2]func fontFamily(?ResourceStr)
    
    
    public func fontFamily(value: ?ResourceStr): This

**功能：** 设置字体列表。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 字体列表。 初始值："HarmonyOS Sans"。  
  
#### [h2]func fontSize(?Length)
    
    
    public func fontSize(value: ?Length): This

**功能：** 设置字体大小。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 按钮文本大小。 当controlSize为ControlSize.NORMAL时，默认值为@r(sys.float.Body_L)。 当controlSize为ControlSize.SMALL时，默认值为@r(sys.float.Body_S)。  
  
#### [h2]func fontStyle(?FontStyle)
    
    
    public func fontStyle(value: ?FontStyle): This

**功能：** 设置字体样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 是 | - | 按钮文本样式。 初始值：FontStyle.Normal。  
  
#### [h2]func fontWeight(?FontWeight)
    
    
    public func fontWeight(value: ?FontWeight): This

**功能：** 设置文本的字体粗细，设置过大可能会在不同字体下有截断。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 是 | - | 按钮文本粗细。 初始值：FontWeight.W500。  
  
#### [h2]func shape(?ButtonType)
    
    
    public func shape(value: ?ButtonType): This

**功能：** 设置Button组件的形状。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?ButtonType | 是 | - | 按键形状类型。 初始值：ButtonType.RoundedRectangle。  
  
#### [h2]func stateEffect(?Bool)
    
    
    public func stateEffect(value: ?Bool): This

**功能：** 设置是否开启按压态显示效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Bool | 是 | - | 按钮按下时是否开启按压态显示效果，当设置为false时，按压效果关闭。 初始值：true。  
  
#### 基础类型定义

#### [h2]class ButtonOptions
    
    
    public class ButtonOptions {
        public var shape: ?ButtonType
        public var stateEffect: ?Bool
        public var buttonStyle: ?ButtonStyleMode
        public var controlSize: ?ControlSize
        public var role: ?ButtonRole
        public init(
            shape!: ?ButtonType = None,
            stateEffect!: ?Bool = None,
            buttonStyle!: ?ButtonStyleMode = None,
            controlSize!: ?ControlSize = None,
            role!: ?ButtonRole = None
        )
    }

**功能：** 配置按钮的显示样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var buttonStyle**
    
    
    public var buttonStyle: ?ButtonStyleMode

**功能：** 描述按钮的样式和重要程度。

**类型：** ?ButtonStyleMode

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var controlSize**
    
    
    public var controlSize: ?ControlSize

**功能：** 描述按钮的尺寸。

**类型：** ?[ControlSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-controlsize)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var role**
    
    
    public var role: ?ButtonRole

**功能：** 描述按钮的角色。

**类型：** ?ButtonRole

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var shape**
    
    
    public var shape: ?ButtonType

**功能：** 描述按钮的形状。

**类型：** ?ButtonType

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var stateEffect**
    
    
    public var stateEffect: ?Bool

**功能：** 按钮按下时是否开启按压态显示效果。

**类型：** ?Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?ButtonType, ?Bool, ?ButtonStyleMode, ?ControlSize, ?ButtonRole)**
    
    
    public init(
        shape!: ?ButtonType = None,
        stateEffect!: ?Bool = None,
        buttonStyle!: ?ButtonStyleMode = None,
        controlSize!: ?ControlSize = None,
        role!: ?ButtonRole = None
    )

**功能：** 创建ButtonOptions类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
shape | ?ButtonType | 否 | None | **命名参数。** 按钮的形状。初始值：ButtonType.Capsule  
stateEffect | ?Bool | 否 | None | **命名参数。** 按钮按下时是否开启按压态显示效果，当设置为false时，按压效果关闭。初始值：true  
buttonStyle | ?ButtonStyleMode | 否 | None | **命名参数。** 描述按钮的样式和重要程度。初始值：ButtonStyleMode.Emphasized  
controlSize | ?[ControlSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-controlsize) | 否 | None | **命名参数。** 描述按钮的尺寸。初始值：ControlSize.Normal  
role | ?ButtonRole | 否 | None | **命名参数。** 描述按钮的角色。初始值：ButtonRole.Normal  
  
#### [h2]enum ButtonRole
    
    
    public enum ButtonRole <: Equatable<ButtonRole> {
        | Normal
        | Error
        | ...
    }

**功能：** 按钮的角色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<ButtonRole>



**Error**
    
    
    Error

**功能：** 警示按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Normal**
    
    
    Normal

**功能：** 正常按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(ButtonRole)**
    
    
    public operator func !=(other: ButtonRole): Bool

**功能：** 判断两个ButtonRole是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ButtonRole | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(ButtonRole)**
    
    
    public operator func ==(other: ButtonRole): Bool

**功能：** 判断两个ButtonRole是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ButtonRole | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### [h2]enum ButtonStyleMode
    
    
    public enum ButtonStyleMode <: Equatable<ButtonStyleMode> {
        | Normal
        | Emphasized
        | Textual
        | ...
    }

**功能：** 按钮的重要程度。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<ButtonStyleMode>



**Emphasized**
    
    
    Emphasized

**功能：** 强调按钮（用于强调当前操作）。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Normal**
    
    
    Normal

**功能：** 普通按钮（一般界面操作）。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Textual**
    
    
    Textual

**功能：** 文本按钮（纯文本，无背景颜色）。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(ButtonStyleMode)**
    
    
    public operator func !=(other: ButtonStyleMode): Bool

**功能：** 判断两个ButtonStyleMode是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ButtonStyleMode | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(ButtonStyleMode)**
    
    
    public operator func ==(other: ButtonStyleMode): Bool

**功能：** 判断两个ButtonStyleMode是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ButtonStyleMode | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### [h2]enum ButtonType
    
    
    public enum ButtonType <: Equatable<ButtonType> {
        | Normal
        | Capsule
        | Circle
        | RoundedRectangle
        | ...
    }

**功能：** 按键形状类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：**

  * Equatable<ButtonType>



**Normal**
    
    
    Normal

**功能：** 普通按钮（默认不带圆角）。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Capsule**
    
    
    Capsule

**功能：** 胶囊型按钮（圆角默认为高度的一半）。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**Circle**
    
    
    Circle

**功能：** 圆形按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**RoundedRectangle**
    
    
    RoundedRectangle

**功能：** 圆角矩形按钮。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(ButtonType)**
    
    
    public operator func !=(other: ButtonType): Bool

**功能：** 判断两个ButtonType是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ButtonType | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(ButtonType)**
    
    
    public operator func ==(other: ButtonType): Bool

**功能：** 判断两个ButtonType是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ButtonType | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### 示例代码

#### [h2]示例1（设置按钮的显示样式）

该示例实现了两种创建按钮的方式，包含子组件或使用文本内容创建相应的按钮。
    
    
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
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween) {
                Text("Common button")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
    
                Flex(alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween) {
                    Button("Ok")
                        .shape(ButtonType.Normal)
                        .stateEffect(true)
                        .borderRadius(8)
                        .width(90)
                    Button(ButtonOptions()) {
                        Row() {
                            LoadingProgress()
                                .width(20)
                                .height(20)
                                .color(Color.White)
                            Text("loading")
                                .fontSize(12)
                                .fontColor(0xffffff)
                                .margin(left: 5, right: 12)
                        }
                            .alignItems(VerticalAlign.Center)
                            .width(90)
                            .height(40)
                    }
                        .shape(ButtonType.Normal)
                        .stateEffect(true)
                        .borderRadius(8)
                        .width(90)
                    Button("Disable")
                        .shape(ButtonType.Normal)
                        .stateEffect(true)
                        .opacity(0.5)
                        .borderRadius(8)
                        .width(90)
                        .backgroundColor(0xF55A42)
                }
    
                Text("Capsule button")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
    
                Flex(alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween) {
                    Button("Ok")
                        .shape(ButtonType.Capsule)
                        .stateEffect(true)
                        .borderRadius(8)
                        .width(90)
                    Button(ButtonOptions()) {
                        Row() {
                            LoadingProgress()
                                .width(20)
                                .height(20)
                                .color(Color.White)
                            Text("loading")
                                .fontSize(12)
                                .fontColor(0xffffff)
                                .margin(left: 5, right: 12)
                        }
                            .alignItems(VerticalAlign.Center)
                            .width(90)
                            .height(40)
                    }
                        .shape(ButtonType.Capsule)
                        .stateEffect(true)
                        .borderRadius(8)
                        .width(90)
                        .onClick({
                            evt => loggerInfo("The login is successful")
                        })
                    Button("Disable")
                        .shape(ButtonType.Capsule)
                        .stateEffect(true)
                        .opacity(0.5)
                        .borderRadius(8)
                        .width(90)
                        .backgroundColor(0xF55A42)
                }
    
                Text("Circle button")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
    
                Flex(alignItems: ItemAlign.Center, wrap: FlexWrap.Wrap) {
                    Button("YES")
                        .shape(ButtonType.Circle)
                        .stateEffect(true)
                        .width(55)
                        .height(55)
                    Button("NO")
                        .shape(ButtonType.Capsule)
                        .stateEffect(true)
                        .width(55)
                        .height(55)
                        .margin(left: 20)
                        .fontSize(15)
                        .backgroundColor(0xF55A42)
                }
            }
                .height(400)
                .padding(left: 35, right: 35, top: 35)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/RwtUuTknT8Ozmwy29ZkY2A/zh-cn_image_0000002701819550.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=25DCB61DE7E24B3A77DD269072D9C110BCA6885A26F5F1A540C6C91F3435907E)

#### [h2]示例2（为按钮添加渲染控制）

该示例通过if/else控制按钮的显示文本。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var count: UInt32 = 0
        func build() {
            Column() {
                Text('${this.count}')
                    .fontSize(30)
                    .onClick({
                        evt => this.count++
                    })
                if (this.count <= 0) {
                    Button('count is negative')
                        .fontSize(30)
                        .height(50)
                } else if (this.count % 2 == 0) {
                    Button('count is even')
                        .fontSize(30)
                        .height(50)
                } else {
                    Button('count is odd')
                        .fontSize(30)
                        .height(50)
                }
            }
                .height(100.percent)
                .width(100.percent)
                .justifyContent(FlexAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/5rgmqAYPTOyC0m308xs6QA/zh-cn_image_0000002731538831.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=A0D7919D71FE7F0C83716EA7FC68854587918549557CE2920CBDCC1A3D931E6A)

#### [h2]示例3（设置不同尺寸按钮的重要程度）

该示例通过配置controlSize、buttonStyle实现不同尺寸按钮的重要程度。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var txt: String = 'overflowTextOverlengthTextOverflow.Clip'
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween) {
                Text('Normal size button')
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Flex(alignItems: ItemAlign.Center, wrap: FlexWrap.Wrap) {
                    Button('Emphasized').buttonStyle(ButtonStyleMode.Emphasized)
                    Button('Normal').buttonStyle(ButtonStyleMode.Normal)
                    Button('Textual').buttonStyle(ButtonStyleMode.Textual)
                }
    
                Text('Small size button')
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Flex(alignItems: ItemAlign.Center, wrap: FlexWrap.Wrap) {
                    Button('Emphasized', ButtonOptions(controlSize: ControlSize.Small)).buttonStyle(
                        ButtonStyleMode.Emphasized)
                    Button('Normal', ButtonOptions(controlSize: ControlSize.Small)).buttonStyle(ButtonStyleMode.Normal)
                    Button('Textual', ButtonOptions(controlSize: ControlSize.Small)).buttonStyle(ButtonStyleMode.Textual)
                }
            }
                .height(400)
                .padding(left: 35, right: 35, top: 35)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2b/v3/4qdPy2V7REK8RXFFeldoQA/zh-cn_image_0000002701659640.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=AC52C80862ADC55615EB043B3F17A26FBABC8DC4BAA6C13A213F8FE0DC67DAA9)

#### [h2]示例4（设置按钮的角色）

该示例通过配置role实现按钮的角色。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var txt: String = 'overflowTextOverlengthTextOverflow.Clip'
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween) {
                Text('Role is Normal button')
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Flex(alignItems: ItemAlign.Center, wrap: FlexWrap.Wrap) {
                    Button('Emphasized', ButtonOptions(role: ButtonRole.Normal)).buttonStyle(ButtonStyleMode.Emphasized)
                    Button('Normal', ButtonOptions(role: ButtonRole.Normal)).buttonStyle(ButtonStyleMode.Normal)
                    Button('Textual', ButtonOptions(role: ButtonRole.Normal)).buttonStyle(ButtonStyleMode.Textual);
                }
    
                Text('Role is Error button')
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Flex(alignItems: ItemAlign.Center, wrap: FlexWrap.Wrap) {
                    Button('Emphasized', ButtonOptions(role: ButtonRole.Error)).buttonStyle(ButtonStyleMode.Emphasized)
                    Button('Normal', ButtonOptions(role: ButtonRole.Error)).buttonStyle(ButtonStyleMode.Normal)
                    Button('Textual', ButtonOptions(role: ButtonRole.Error)).buttonStyle(ButtonStyleMode.Textual);
                }
            }
                .height(400)
                .padding(left: 35, right: 35, top: 35)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/FZRkOFhCToayJLbX90DTBg/zh-cn_image_0000002731378855.png?HW-CC-KV=V1&HW-CC-Date=20260903T111639Z&HW-CC-Expire=86400&HW-CC-Sign=6B55D95384E35E8EC755745D934D1320662A037BA5539B2DE4AED3323EA93DB2)
