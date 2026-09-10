---
name: cangjie-references/cj-row-column-stack-relativecontainer
title: RelativeContainer
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-relativecontainer
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 行列与堆叠 / RelativeContainer
---

# RelativeContainer

相对布局组件，用于复杂场景中元素对齐的布局。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/aW5eWhYBRjKKudbnwV1_4A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=BBFA643BA09748C4F2ABC3E9F9E516A73355B1B3CBAC1BAE9FC3A52912123A57)

相对布局容器内的子组件的margin含义不同于通用属性的[margin](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-marginlength)，其含义为到该方向上的锚点的距离。若该方向上没有锚点，则该方向的margin不生效。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

支持多个子组件。

#### 创建组件

#### [h2]init(() -> Unit)
    
    
    public init(child!: () -> Unit = {=>})

**功能：** 创建一个RelativeContainer组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | () -> Unit | 否 | {=>} | **命名参数。** 声明容器子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func barrier(?Array<BarrierStyle>)
    
    
    public func barrier(value: ?Array<BarrierStyle>): This

**功能：** 设置RelativeContainer容器内的屏障，Array中每个项目即为一条barrier。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Array<BarrierStyle> | 是 | - | RelativeContainer容器内的屏障。初始值：[]。  
  
#### [h2]func guideLine(?Array<GuideLineStyle>)
    
    
    public func guideLine(value: ?Array<GuideLineStyle>): This

**功能：** 设置RelativeContainer容器内的辅助线，Array中每个项目即为一条guideline。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Array<GuideLineStyle> | 是 | - | RelativeContainer容器内的辅助线。初始值：[]。  
  
#### 基础类型定义

#### [h2]class BarrierStyle
    
    
    public class BarrierStyle {
        public var id: ?String
        public var direction: ?BarrierDirection
        public var referencedId: ?Array<String>
        public init(id: ?String, direction: ?BarrierDirection, referencedId: ?Array<String>)
    }

**功能：** barrier参数，用于定义一条barrier的id、方向和生成时所依赖的组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var id**
    
    
    public var id: ?String

**功能：** barrier的id，必须是唯一的并且不可与容器内组件重名。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var direction**
    
    
    public var direction: ?BarrierDirection

**功能：** 指定barrier的方向。垂直方向（Top，Bottom）的barrier仅能作为组件的水平方向锚点，用作垂直方向锚点时值为0；水平方向（Left，Right）的barrier仅能作为组件的垂直方向锚点，用作水平方向锚点时值为0。

**类型：** ?[BarrierDirection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-barrierdirection)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var referencedId**
    
    
    public var referencedId: ?Array<String>

**功能：** 指定生成barrier所依赖的组件。

**类型：** ?Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?String, ?BarrierDirection, ?Array <String>)**
    
    
    public init(id: ?String, direction: ?BarrierDirection, referencedId: ?Array<String>)

**功能：** 创建一个BarrierStyle类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | ?String | 是 | - | barrier的id，必须是唯一的并且不可与容器内组件重名。初始值：""。  
direction | ?[BarrierDirection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-barrierdirection) | 是 | - | 指定barrier的方向。垂直方向（TOP，BOTTOM）的barrier仅能作为组件的水平方向锚点，用作垂直方向锚点时值为0；水平方向（LEFT，RIGHT）的barrier仅能作为组件的垂直方向锚点，用作水平方向锚点时值为0。初始值：BarrierDirection.LEFT。  
referencedId | ?Array<String> | 是 | - | 指定生成barrier所依赖的组件。初始值：[]。  
  
#### [h2]class GuideLinePosition
    
    
    public class GuideLinePosition {
        public var start: ?Length
        public var end: ?Length
        public init(start!: ?Length = None, end!: ?Length = None)
    }

**功能：** guideLine位置参数，用于定义guideline的位置。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var start**
    
    
    public var start: ?Length

**功能：** guideline距离容器左侧或者顶部的距离。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var end**
    
    
    public var end: ?Length

**功能：** guideline距离容器右侧或者底部的距离。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Length, ?Length)**
    
    
    public init(start!: ?Length = None, end!: ?Length = None)

**功能：** 创建一个GuideLinePosition类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
start | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** guideline距离容器左侧或者顶部的距离。  
end | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** guideline距离容器右侧或者底部的距离。  
  
#### [h2]class GuideLineStyle
    
    
    public class GuideLineStyle {
        public var id: ?String
        public var direction: ?Axis
        public var position: ?GuideLinePosition
        public init(id: ?String, direction: ?Axis, position: ?GuideLinePosition)
    }

**功能：** guideLine参数，用于定义一条guideline的id、方向和位置。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var id**
    
    
    public var id: ?String

**功能：** guideline的id，必须是唯一的并且不可与容器内组件重名。

**类型：** ?String

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var direction**
    
    
    public var direction: ?Axis

**功能：** 指定guideline的方向。垂直方向的guideline仅能作为组件水平方向的锚点，作为垂直方向的锚点时值为0；水平方向的guideline仅能作为组件垂直方向的锚点，作为水平方向的锚点时值为0。

**类型：** ?[Axis](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-axis)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var position**
    
    
    public var position: ?GuideLinePosition

**功能：** 指定guideline的位置。当未声明或声明异常值（如undefined）时，guideline的位置默认为start: 0。start和 end两种声明方式选择一种即可。若同时声明，仅start生效。若容器在某个方向的size被声明为"auto"，则该方向上guideline的位置只能使用start方式声明（不允许使用百分比）。

**类型：** ?GuideLinePosition

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?String, ?Axis, ?GuideLinePosition)**
    
    
    public init(id: ?String, direction: ?Axis, position: ?GuideLinePosition)

**功能：** 创建一个GuideLineStyle类型的对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | ?String | 是 | - | guideline的id，必须是唯一的并且不可与容器内组件重名。初始值：""。  
direction | ?[Axis](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-axis) | 是 | - | 指定guideline的方向。垂直方向的guideline仅能作为组件水平方向的锚点，作为垂直方向的锚点时值为0；水平方向的guideline仅能作为组件垂直方向的锚点，作为水平方向的锚点时值为0。初始值：Axis.Vertical。  
position | ?GuideLinePosition | 是 | - | 指定guideline的位置。当未声明或声明异常值时，guideline的位置初始值为start: 0。start和end两种声明方式选择一种即可。若同时声明，仅start生效。初始值：{start: 0}。  
  
#### 示例代码

#### [h2]示例1（以容器和容器内组件作为锚点进行布局）

本示例通过alignRules接口实现了以容器和容器内组件作为锚点进行布局的功能。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xff3333)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xFFCC00)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                right: HorizontalAlignParam("__container__", HorizontalAlign.End)
                            )
                        )
                        .id("row2")
                    Row()
                        .height(100)
                        .backgroundColor(0xFF6633)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row1", HorizontalAlign.End),
                                right: HorizontalAlignParam("row2", HorizontalAlign.Start)
                            )
                        )
                        .id("row3")
                    Row()
                        .backgroundColor(0xFF9966)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row1", HorizontalAlign.End)
                            )
                        )
                        .id("row4")
                    Row()
                        .backgroundColor(0xff3333)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row2", HorizontalAlign.Start),
                                right: HorizontalAlignParam("__container__", HorizontalAlign.End)
                            )
                        )
                        .id("row5")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50.vp)
                    .border(width: 2.vp, color: Color(0x6699ff))
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/vQAZmK4VTQSpsGqGn7lXqg/zh-cn_image_0000002713398930.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=5D49FFF395490153E60D6619B2317D2AF3CB79688D19AFC0F95980FE3EB02E35)

#### [h2]示例2（子组件设置外边距）

本示例展示了容器内子组件设置外边距的用法。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xff3333)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
                        .margin(10)
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xFFCC00)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Top),
                                left: HorizontalAlignParam("row1", HorizontalAlign.End)
                            )
                        )
                        .id("row2")
                    Row()
                        .height(100)
                        .width(100)
                        .backgroundColor(0xFF6633)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row1", HorizontalAlign.Start)
                            )
                        )
                        .id("row3")
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xFF9966)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row2", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row3", HorizontalAlign.End),
                            )
                        )
                        .id("row4")
                        .margin(10)
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50.vp)
                    .border(width: 2.vp, color: Color(0x6699ff))
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/9jtnJ4MTQU2wwx5Xbjg8_w/zh-cn_image_0000002743077861.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=01E584B4796F85472632518C9FF4E3CC3333AD61013D9620D03FF77BB3C720F4)

#### [h2]示例3（设置偏移）

本示例通过[Bias](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-bias)实现子组件的位置在竖直方向的两个锚点间偏移的效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xff3333)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start),
                                right: HorizontalAlignParam("__container__", HorizontalAlign.End),
                                bias: Bias(vertical: 0.3)
                            )
                        )
                        .id("row1")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50.vp)
                    .border(width: 2.vp, color: Color(0x6699ff))
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/0ceWIbCNSkaIoOI46Cn6wg/zh-cn_image_0000002713558900.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=81E7F58E995B99E3DE7CB413F40B330A466F8B834F09A31EA28AA767E5D6C5C5)

#### [h2]示例4（设置辅助线）

本示例展示了相对布局组件通过guideLine接口设置辅助线，子组件以辅助线为锚点的功能。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xff3333)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("guideline2", VerticalAlign.Top),
                                left: HorizontalAlignParam("guideline1", HorizontalAlign.End),
                            )
                        )
                        .id("row1")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50.vp)
                    .border(width: 2.vp, color: Color(0x6699ff))
                    .guideLine(
                        [GuideLineStyle("guideline1", Axis.Vertical, GuideLinePosition(start: 50.vp)),
                            GuideLineStyle("guideline2", Axis.Horizontal, GuideLinePosition(start: 50.vp))])
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/o-8U-QiyS1qkX_FNLO7ayQ/zh-cn_image_0000002743197813.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=390B0507D07FB4989298A0C32AAB20B9A21888162B32854D0B0D8C272E289371)

#### [h2]示例5（设置屏障）

本示例展示了相对布局组件通过barrier接口设置屏障，子组件以屏障为锚点的用法。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xff3333)
                        .id("row1")
    
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xFFCC00)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                middle: HorizontalAlignParam("row1", HorizontalAlign.End)
                            )
                        )
                        .id("row2")
    
                    Row()
                        .height(100)
                        .width(100)
                        .backgroundColor(0xFF6633)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Top),
                                left: HorizontalAlignParam("barrier1", HorizontalAlign.End)
                            )
                        )
                        .id("row3")
    
                    Row()
                        .width(50)
                        .height(50)
                        .backgroundColor(0xFF9966)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("barrier2", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row1", HorizontalAlign.Start),
                            )
                        )
                        .id("row4")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50.vp)
                    .border(width: 2.vp, color: Color(0x6699ff))
                    .barrier(
                        [BarrierStyle("barrier1", BarrierDirection.Right, ["row1", "row2"]),
                            BarrierStyle("barrier2", BarrierDirection.Bottom, ["row1", "row2"])])
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/VKRn61f7SmqdAeyq6pTVrQ/zh-cn_image_0000002713398932.png?HW-CC-KV=V1&HW-CC-Date=20260908T090146Z&HW-CC-Expire=86400&HW-CC-Sign=4A8D7FD38C5196DF8FF105007ECFF91C9F1C8C7AE1AD29895E9F7E8FDB8FAFCE)
