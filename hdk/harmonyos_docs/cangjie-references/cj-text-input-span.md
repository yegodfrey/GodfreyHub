---
name: cangjie-references/cj-text-input-span
title: Span
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-span
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 文本与输入 / Span
---

# Span

作为[Text](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text)组件的子组件，用于显示行内文本的组件。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?ResourceStr)
    
    
    public init(value: ?ResourceStr)

**功能：** 创建Span组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 文本内容。 初始值：""。  
  
#### 通用属性/通用事件

通用属性：不支持。

通用事件：仅支持点击事件onClick。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/unr1IprJSsq-MfdY14TJWA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=81BD1F32FBF17333A50D1FE27B70A3CEB8849139FC16339395C01FDD2FC577E8)

由于Span组件无尺寸信息，因此点击事件返回的ClickEvent对象的target属性无效。

#### 组件属性

#### [h2]func decoration(?TextDecorationType, ?ResourceColor)
    
    
    public func decoration(decorationType!: ?TextDecorationType, color!: ?ResourceColor = None): This

**功能：** 设置文本装饰线样式及其颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
decorationType | ?[TextDecorationType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textdecorationtype) | 是 | - | **命名参数。** 文本装饰线样式。 初始值：TextDecorationType.None。  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | None | **命名参数。** 文本装饰线颜色。 初始值：Color.Black。  
  
#### [h2]func fontColor(?ResourceColor)
    
    
    public func fontColor(value: ?ResourceColor): This

**功能：** 设置字体颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 字体颜色。  
  
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
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 字体大小。  
  
#### [h2]func fontStyle(?FontStyle)
    
    
    public func fontStyle(value: ?FontStyle): This

**功能：** 设置字体样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 是 | - | 字体样式。 初始值：FontStyle.Normal。  
  
#### [h2]func fontWeight(?FontWeight)
    
    
    public func fontWeight(value: ?FontWeight): This

**功能：** 设置文本的字体粗细，设置过大可能会在不同字体下有截断。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 是 | - | 文本的字体粗细，设置过大可能会在不同字体下有截断。 初始值：FontWeight.Normal。  
  
#### [h2]func letterSpacing(?Length)
    
    
    public func letterSpacing(value: ?Length): This

**功能：** 设置文本字符间距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 字符间距。 初始值：0.0.px。  
  
#### [h2]func textCase(?TextCase)
    
    
    public func textCase(value: ?TextCase): This

**功能：** 设置文本大小写。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[TextCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textcase) | 是 | - | 文本大小写。 初始值：TextCase.Normal。  
  
#### 组件事件

#### [h2]func onClick(?(ClickEvent) -> Unit)
    
    
    public func onClick(event: ?(ClickEvent) -> Unit): This

**功能：** 点击事件回调函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
event | ?([ClickEvent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-clickevent)) -> Unit | 是 | - | 点击事件回调函数，点击事件回调。 初始值：{ _ => }。  
  
#### 基础类型定义

#### [h2]class BaseSpan
    
    
    public abstract class BaseSpan {}

**功能：** Span组件的基类。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### 示例代码

#### [h2]示例1

decoration、textCase、letterSpacing属性接口使用示例。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Start, justifyContent: FlexAlign.SpaceBetween) {
                Text("Basic Usage")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Text() {
                    Span("This is the Span component")
                        .fontSize(12)
                        //设置文本大小写为保持文本原有大小写
                        .textCase(TextCase.Normal)
                        //行内文字无修饰
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                }
                //文本划线添加
                Text("Text Decoration")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Text() {
                    Span("I am Underline-span")
                        //行内文字由红色下划线修饰
                        .decoration(decorationType: TextDecorationType.Underline, color: Color.Red)
                        .fontSize(12)
                }
                Text() {
                    Span("I am LineThrough-span")
                        //行内文字由中间红色划线修饰
                        .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red)
                        .fontSize(12)
                }
                Text() {
                    Span("I am Overline-span")
                        //行内文字由红色上划线修饰
                        .decoration(decorationType: TextDecorationType.Overline, color: Color.Red)
                        .fontSize(12)
                }
                //文本大小写展示
                Text("Text Case")
                    .fontSize(9)
                    .fontColor(0xCCCCCC)
                Text() {
                    Span("I am Lower-span")
                        //设置文本大小写为全小写
                        .textCase(TextCase.LowerCase)
                        .fontSize(12)
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                }
                Text() {
                    Span("I am Upper-span")
                        //设置文本大小写为全大写
                        .textCase(TextCase.UpperCase)
                        .fontSize(12)
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                }
                //文本字符间距展示
                Text() {
                    Span("I am LetterSpacing")
                        .fontSize(20)
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                        //设置文本字符间距为10.fp
                        .letterSpacing(10)
                }
                Text() {
                    Span("I am Span1")
                        .fontSize(30)
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                    Span("I am Span2")
                        .fontSize(30)
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                }
            }
                .width(100.percent)
                .height(250)
                .padding(left: 35, right: 35, top: 35)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/cRCRX7_BTJGXENtFcU-_cw/zh-cn_image_0000002743077889.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=0EC47A8DA57FCDB03AABE9A2D3BE2BB8EE62089A4163DCA49A2EBB18450D01BC)
