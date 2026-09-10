---
name: cangjie-references/cj-text-input-text
title: Text
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 文本与输入 / Text
---

# Text

显示一段文本的组件。

文本在组件区域显示效果与字体资源相关，默认字体排印可见[字体排印视觉指引](https://developer.huawei.com/consumer/cn/doc/design-guides/font-0000001828772001)。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含[Span](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-span)、[ImageSpan](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-imagespan)子组件。

#### 创建组件

#### [h2]init(?ResourceStr, ?TextController, () -> Unit)
    
    
    public init(content: ?ResourceStr, controller!: ?TextController = None, child!: () -> Unit = { =>})

**功能：** 创建一个包含文本内容、控制器和子组件的Text对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
content | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 文本内容。  
controller | ?TextController | 否 | None | **命名参数。** 给组件绑定一个控制器。  
child | () -> Unit | 否 | {=>} | **命名参数。** Text容器的子组件。  
  
#### [h2]init(?TextController, () -> Unit)
    
    
    public init(controller!: ?TextController = None, child!: () -> Unit)

**功能：** 创建一个包含控制器和子组件的Text对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
controller | ?TextController | 否 | None | **命名参数。** 给组件绑定一个控制器。  
child | () -> Unit | 是 | - | **命名参数。** Text容器的子组件。  
  
#### [h2]init(?TextController)
    
    
    public init(controller!: ?TextController = None)

**功能：** 创建一个包含控制器的Text对象。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
controller | ?TextController | 否 | None | **命名参数。** 给组件绑定一个控制器。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func baselineOffset(?Length)
    
    
    public func baselineOffset(value: ?Length): This

**功能：** 设置文本基线的偏移量。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 文本基线的偏移量。 初始值：0.0.px。  
  
#### [h2]func decoration(?TextDecorationType, ?ResourceColor, ?TextDecorationStyle)
    
    
    public func decoration(decorationType!: ?TextDecorationType, color!: ?ResourceColor,
        decorationStyle!: ?TextDecorationStyle = None): This

**功能：** 设置文本的装饰线样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
decorationType | ?[TextDecorationType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textdecorationtype) | 是 | - | **命名参数。** 装饰线类型。 初始值：TextDecorationType.None。  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | **命名参数。** 装饰线颜色。 初始值：Color.Black。  
decorationStyle | ?[TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textdecorationstyle) | 否 | None | **命名参数。** 装饰线样式。 初始值：TextDecorationStyle.Solid。  
  
#### [h2]func fontColor(?ResourceColor)
    
    
    public func fontColor(value: ?ResourceColor): This

**功能：** 设置文本的颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 文本的颜色。  
  
#### [h2]func fontFamily(?ResourceStr)
    
    
    public func fontFamily(value: ?ResourceStr): This

**功能：** 设置文本的字体族。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 文本的字体族。 初始值："HarmonyOS Sans"。  
  
#### [h2]func fontSize(?Length)
    
    
    public func fontSize(value: ?Length): This

**功能：** 设置文本的字体大小。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 文本的字体大小。 初始值：16.fp。  
  
#### [h2]func fontStyle(?FontStyle)
    
    
    public func fontStyle(value: ?FontStyle): This

**功能：** 设置文本的字体样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 是 | - | 文本的字体样式。 初始值：FontStyle.Normal。  
  
#### [h2]func fontWeight(?FontWeight)
    
    
    public func fontWeight(value: ?FontWeight): This

**功能：** 设置文本的字体粗细。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 是 | - | 文本的字体粗细。  
  
#### [h2]func lineHeight(?Length)
    
    
    public func lineHeight(value: ?Length): This

**功能：** 设置文本的行高。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 文本的行高。 初始值：0.0.px。  
  
#### [h2]func lineSpacing(?Length)
    
    
    public func lineSpacing(value: ?Length): This

**功能：** 设置文本的行间距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 文本的行间距。 初始值：0.0.vp。  
  
#### [h2]func maxFontSize(?Length)
    
    
    public func maxFontSize(value: ?Length): This

**功能：** 设置文本的最大字体大小。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 文本的最大字体大小。  
  
#### [h2]func maxLines(?Int32)
    
    
    public func maxLines(value: ?Int32): This

**功能：** 设置文本的最大行数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 文本的最大行数。 初始值：Int32.Max。  
  
#### [h2]func minFontSize(?Length)
    
    
    public func minFontSize(value: ?Length): This

**功能：** 设置文本的最小字体大小。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 文本的最小字体大小。  
  
#### [h2]func textCase(?TextCase)
    
    
    public func textCase(value: ?TextCase): This

**功能：** 设置文本的大小写格式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[TextCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textcase) | 是 | - | 文本的大小写格式。 初始值：TextCase.Normal。  
  
#### [h2]func textAlign(?TextAlign)
    
    
    public func textAlign(value: ?TextAlign): This

**功能：** 设置文本的水平对齐方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[TextAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textalign) | 是 | - | 文本的水平对齐方式。 初始值：TextAlign.Start。  
  
#### [h2]func textOverflow(?TextOverflow)
    
    
    public func textOverflow(value: ?TextOverflow): This

**功能：** 设置文本的溢出处理方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[TextOverflow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-textoverflow) | 是 | - | 文本的溢出处理方式。 初始值：TextOverflow.None。  
  
#### 基础类型定义

#### [h2]class TextController
    
    
    public class TextController {
        public init()
    }

**功能：** TextController是Text组件的控制器，可以定义该类型的对象并绑定至Text组件，实现对Text组件的控制。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init()**
    
    
    public init()

**功能：** TextController的构造函数。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**func closeSelectionMenu()**
    
    
    public func closeSelectionMenu(): Unit

**功能：** 关闭选择菜单。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.i18n.*
    import ohos.resource.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    import ohos.arkui.component.CopyOptions as MyCopyOptions
    import std.collection.ArrayList
    import std.ast.Block
    
    @Entry
    @Component
    class EntryView {
        @State
        var message: String = "Hello"
        let controller: TextController = TextController()
        @State var shadowOptionsArray: Array<ShadowOptions> = [ShadowOptions(radius: 10.0), ShadowOptions(radius: 10.0, shadowType: ShadowType.Blur, color: Color.Red, offsetX: 1.0, offsetY: 1.0, fill: true)]
        @Builder func LongPressTextCustomMenu() {
            Column() {
                Button('LongPress')
            }
        }
    
        @Builder func RightClickTextCustomMenu() {
            Column() {
                Button('RightClick')
            }
        }
    
        @Builder func SelectTextCustomMenu() {
            Column() {
                Button('Select')
            }
        }
    
        func build() {
            Scroll() {
                Column {
                    //展示设置的文本样式效果
                    Text(message)
                        // @r(app.string.fontFamily)需替换为开发者所需的资源
                        .fontFamily(@r(app.string.fontFamily))
                        .height(100.vp)
                        .width(100.vp)
                        .id("textComponent1")
                    Text(message)
                        .fontSize(20)
                        .fontColor(0XFFFF0000)
                        .fontStyle(FontStyle.Italic)
                        .fontWeight(FontWeight.W900)
                        .id("textComponent2")
                    //设置文本行高
                    Blank(min: 10)
                    Text(message)
                        .textAlign(TextAlign.End).baselineOffset(10.vp)
                        .id("textComponent3")
                        // @r(app.string.font_size)需替换为开发者所需的资源
                        .minFontSize(@r(app.string.font_size))
                        // @r(app.string.line_height)需替换为开发者所需的资源
                        .lineHeight(@r(app.string.line_height))
    
                    Text(message)
                        .decoration(decorationType: TextDecorationType.None, color: Color.Red)
                        .id("textComponent4")
                    //设置文本基线偏移
                    Text(
                        "This is the text with the height adaptive policy set.This is the text with the height adaptive policy set."
                    )
                        .minFontSize(10.fp)
                        .maxFontSize(30.fp)
                        .maxLines(1).id("textComponent5")
                        // @r(app.string.baselineOffset)需替换为开发者所需的资源
                        .baselineOffset(@r(app.string.baselineOffset))
                        // @r(app.string.blue_23C452)需替换为开发者所需的资源
                        .fontColor(@r(app.color.blue_23C452))
                    //设置文本超长时的显示方式
                    Text(
                        "This is the text with the height adaptive policy set.This is the text with the height adaptive policy set"
                    )
                        .fontSize(24.vp)
                        .maxLines(1)
                        .textOverflow(TextOverflow.Ellipsis)
                        .id("textComponent6")
                    //设置文本全大写显示
                    Text("Hello")
                        .textCase(TextCase.UpperCase)
                        .id("textComponent7")
                        // @r(app.string.font_size)需替换为开发者所需的资源
                        .maxFontSize(@r(app.string.font_size))
                    //设置文本全小写显示
                    Text("Hello")
                        .foregroundColor(Color.Blue)
                        .id("textComponent8")
                        // @r(app.string.font_size)需替换为开发者所需的资源
                        .fontSize(@r(app.string.font_size))
                        .textOverflow(TextOverflow.None)
                        .textCase(TextCase.LowerCase)
                    //触摸热区设置
                    Text("Hello")
                        .responseRegion(Rectangle(x: 100.percent, y: 0.vp, width: 50.percent, height: 100.percent))
                        .responseRegion([Rectangle(x: 0.vp, y: 100.percent, width: 100.percent, height: 100.percent),Rectangle(x: 100.percent, y: 0.vp, width: 50.percent, height: 100.percent)])
                    Text('This is the text content with given settings. This is the text content with given settings')
                        .baselineOffset(10)
                        .decoration(decorationType: TextDecorationType.Underline, color: Color.Red, decorationStyle: TextDecorationStyle.Dotted)
                        .fontColor(Color.Red)
                        .fontFamily("HarmonyOS Sans")
                        .fontSize(10.fp)
                        .fontStyle(FontStyle.Italic)
                        .fontWeight(FontWeight.Bolder)
                        .lineHeight(40)
                        .lineSpacing(20)
                        .maxLines(1)
                        .textAlign(TextAlign.Center)
                        .textCase(TextCase.LowerCase)
                        .textOverflow(TextOverflow.None)
                        .id("TextGivenSetting")
                    //展示文本设置样式的效果
                    Text('This is the text content with given font settings.')
                        .size(width:15, height: 15)
                        .fontWeight(FontWeight.Bolder)
                        .fontFamily('HarmonyOS Sans')
                        .fontStyle(FontStyle.Italic)
                        .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red, decorationStyle: TextDecorationStyle.Dashed)
                        .textCase(TextCase.UpperCase)
                        .id("TextGivenFont")
                    //以资源调用的形式设置文本效果并展示，@r(app.string.module_desc)需替换为开发者所需的资源
                    Text(@r(app.string.module_desc))
                        // @r(app.string.font_size)需替换为开发者所需的资源
                        .fontSize(@r(app.string.font_size))
                        // @r(app.string.font_size)需替换为开发者所需的资源
                        .maxFontSize(@r(app.string.font_size))
                        // @r(app.string.font_size)需替换为开发者所需的资源
                        .minFontSize(@r(app.string.font_size))
                        // @r(app.string.fontFamily)需替换为开发者所需的资源
                        .fontFamily(@r(app.string.fontFamily))
                        // @r(app.string.line_height)需替换为开发者所需的资源
                        .lineHeight(@r(app.string.line_height))
                        // @r(app.string.baselineOffset)需替换为开发者所需的资源
                        .baselineOffset(@r(app.string.baselineOffset))
                        // @r(app.string.blue_23C452)需替换为开发者所需的资源
                        .fontColor(@r(app.color.blue_23C452))
                        .id("TextResource")
    
                    Text('邮箱：xxx@xxxxxx.com')
                        .textOverflow(TextOverflow.None)
                        .id("TextDetectConfig4")
                    //展示默认样式的字体效果
                    Text('This is the text content with default settings.')
                        .id("TextDefault1")
                    //设置文本偏移
                    Text('This is the text content with percent baselineOffset.')
                        .baselineOffset(10.percent)
                        .decoration(decorationType: TextDecorationType.Overline, color: Color.Red, decorationStyle: TextDecorationStyle.Double)
                        .id("TextBoundaryValue1")
                    //展示用百分比设置文字大小的效果
                    Text('This is the text content with percent fontSize.')
                        .fontSize(10.percent)
                        .id("TextBoundaryValue4")
                    //展示文本行高为负值时的效果
                    Text('This is the text content with -10 lineHeight.')
                        .lineHeight(-10)
                        .fontSize(20)
                        .id("TextBoundaryValue6")
                    Text('This is the text content with -10 lineSpacing.')
                        .lineSpacing(-10)
                        .id("TextBoundaryValue7")
                    //设置文本超长时显示不下的文本用省略号代替
                    Text("textOverflow line line line line line line line line line line line line line line line line line.")
                        .textOverflow(TextOverflow.Ellipsis)
                        .maxLines(1)
                        .id("TextCombine1")
                    Text("This is the setting of textOverflow to Clip text content This is the setting of textOverflow to None text content. ")
                        .minFontSize(10)
                        .maxFontSize(30)
                        .maxLines(1)
                        .fontSize(50)
                        .id("TextCombine6")
                    Text("This is the setting of textOverflow to Clip text content This is the setting of textOverflow to None text content. ")
                        .minFontSize(-10)
                        .maxFontSize(30)
                        .maxLines(1)
                        .id("TextCombine7")
                }
            }.height(100.percent).width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/NFh0U6lXRzOwscLBQ0CX7A/zh-cn_image_0000002713398956.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=D330C1A916248835081DAD7659422C4DE43F467B1741E059E2ADC1EACC497177)
