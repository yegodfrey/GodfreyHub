---
name: cangjie-references/cj-text-input-imagespan
title: ImageSpan
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-imagespan
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 文本与输入 / ImageSpan
---

# ImageSpan

作为[Text](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text)组件的子组件，用于显示行内图片。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?ResourceStr)
    
    
    public init(value: ?ResourceStr)

**功能：** 创建ImageSpan组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 图片的数据源，支持本地图片和网络图片。  
  
#### [h2]init(?PixelMap)
    
    
    public init(value: ?PixelMap)

**功能：** 创建ImageSpan组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[PixelMap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-image#class-pixelmap) | 是 | - | 图片的数据源，支持本地图片和网络图片。  
  
#### 通用属性/通用事件

通用属性：支持[尺寸设置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size)、[背景设置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-background)、[边框设置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-border)。

通用事件：仅支持[点击事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click#func-onclickclickevent---unit)。

#### 组件属性

#### [h2]func colorFilter(?ColorFilter)
    
    
    public func colorFilter(filter: ?ColorFilter): This

**功能：** 设置图像的颜色滤镜效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
filter | ?[ColorFilter](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-image-video-image#class-colorfilter) | 是 | - |  颜色滤镜效果。 初始值：ColorFilter([])。  
  
#### [h2]func objectFit(?ImageFit)
    
    
    public func objectFit(value: ?ImageFit): This

**功能：** 设置图片的缩放类型。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageFit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imagefit) | 是 | - |  图片的缩放类型。 初始值：ImageFit.Cover。  
  
#### [h2]func verticalAlign(?ImageSpanAlignment)
    
    
    public func verticalAlign(value: ?ImageSpanAlignment): This

**功能：** 设置图片基于行高的对齐方式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ImageSpanAlignment](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-imagespanalignment) | 是 | - |  图片基于文本的对齐方式。 初始值：ImageSpanAlignment.Bottom。  
  
#### 组件事件

#### [h2]func onComplete(?ImageCompleteCallback)
    
    
    public func onComplete(callback: ?ImageCompleteCallback): This

**功能：** 图片数据加载成功和解码成功时均触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[ImageCompleteCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-image-video-image#type-imagecompletecallback) | 是 | - |  回调函数，图片数据加载成功和解码成功时触发。参数：成功加载的图片尺寸。 初始值：{ _ => }。  
  
#### [h2]func onError(?ImageErrorCallback)
    
    
    public func onError(callback: ?ImageErrorCallback): This

**功能：** 图片加载异常时触发该事件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
callback | ?[ImageErrorCallback](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-image-video-image#type-imageerrorcallback) | 是 | - |  回调函数，图片加载出现异常时触发。参数：图片加载异常信息。 初始值：{ _ => }。  
  
#### 示例代码

#### [h2]示例1

该示例通过verticalAlign、objectFit属性展示了ImageSpan的对齐方式以及缩放效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Flex(direction: FlexDirection.Column, alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center) {
                    Text() {
                        //以设定大小和排布方式加载图片资源
                        ImageSpan(@r(app.media.startIcon))
                            .width(150.px)
                            .height(250.px)
                            .objectFit(ImageFit.Contain)
                            .verticalAlign(ImageSpanAlignment.Center)
                        //对图片进行文本修饰
                        Span("This is the Span and ImageSpan component")
                            .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red)
                            .fontSize(25)
                        ImageSpan(@r(app.media.startIcon))
                            .width(150.px)
                            .height(50.px)
                            .objectFit(ImageFit.Contain)
                            .verticalAlign(ImageSpanAlignment.Top)
                        Span("I am Underline-span2")
                            .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red)
                            .fontSize(25)
                        ImageSpan(@r(app.media.startIcon))
                            .width(150.px)
                            .height(250.px)
                            .objectFit(ImageFit.Fill)
                            .verticalAlign(ImageSpanAlignment.Baseline)
                        Span("I am Underline-span3")
                            .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red)
                            .fontSize(25)
                        ImageSpan(@r(app.media.startIcon))
                            .width(150.px)
                            .height(50.px)
                            .objectFit(ImageFit.Auto)
                            .verticalAlign(ImageSpanAlignment.Bottom)
                        Span("I am Underline-span4")
                            .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red)
                            .fontSize(25)
                    }.textAlign(TextAlign.Center)
                }
            }
                .height(720)
                .width(360)
                .padding(left: 0, right: 0, top: 0)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/wFhQnFZgRKeh39oi9myj3A/zh-cn_image_0000002713558928.png?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=281A04CAB1E460F80289C0FA40CFCF289A04C3C79D741AC5A82F710CE5126FCF)

#### [h2]示例2（图像设置颜色滤镜效果）

该示例通过colorFilter实现了给图像设置颜色滤镜效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        let blueColor = ColorFilter([0.38, 0.0, 0.0, 0.0, 0.0,
                                    0.0, 0.81, 0.0, 0.0, 0.0,
                                    0.0, 0.0, 0.43, 0.0, 0.0,
                                    0.0, 0.0, 0.0, 1.0, 0.0])
        let colorFilter = ColorFilter([1.0, 0.0, 1.0, 0.0, 1.0,
                                       0.0, 0.0, 0.0, 1.0, 0.0,
                                       1.0, 0.0, 1.0, 0.0, 0.0,
                                       0.0, 1.0, 0.0, 1.0, 0.0])
    
        @State
        var DrawingColorFilterFirst: ColorFilter = blueColor
        @State
        var DrawingColorFilterSecond: ColorFilter = colorFilter
    
        func build() {
            Column(space: 5) {
                Text {
                    ImageSpan(@r(app.media.startIcon))
                        .width(100)
                        .height(100)
                        .colorFilter(this.DrawingColorFilterFirst)
                        .onClick({
                            evt => this.DrawingColorFilterFirst = colorFilter
                        })
                }
                Text {
                    ImageSpan(@r(app.media.startIcon))
                        .width(110)
                        .height(110)
                        .margin(15)
                        .colorFilter(this.DrawingColorFilterSecond)
                        .onClick({
                            evt => this.DrawingColorFilterSecond = blueColor
                        })
                }
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/W63_ql4XSB2ocwA2SQvFPQ/zh-cn_image_0000002743197841.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090149Z&HW-CC-Expire=86400&HW-CC-Sign=8962C8BCF82DD83F220C8E25AD84869A54F06351A66D982BFDC95ED14FB3B836)
