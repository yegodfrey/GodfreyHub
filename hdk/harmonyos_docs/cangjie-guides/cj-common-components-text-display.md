---
name: cangjie-guides/cj-common-components-text-display
title: 文本显示（Text/Span）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-text-display
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用文本 / 文本显示（Text/Span）
---

# 文本显示（Text/Span）

Text是文本组件，通常用于展示用户视图，如显示文章的文字内容，支持绑定自定义文本选择菜单，用户可根据需要选择不同功能，同时还可以扩展自定义菜单，丰富可用选项，进一步提升用户体验。Span则用于呈现显示行内文本。具体用法请参见[Text](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text)和[Span](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-span)组件的使用说明。

#### 创建文本

Text可通过以下两种方式来创建：

  * string字符串。
        
        Text('我是一段文本')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/ImIGfbiISBy8Ttwhs6Wa6A/zh-cn_image_0000002713398758.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=5520FE68FF132826334F1BA072012B0B7D2150A3B640D91B8BD828DB391FA9DE)

  * 引用AppResource资源。

资源引用类型可以通过@r创建AppResource类型对象，文件位置为/resources/base/element/string.json，具体内容如下：
        
        {
          "string": [
            {
              "name": "module_desc",
              "value": "模块描述"
            }
          ]
        }
        
        Text(@r(app.string.module_desc))
          .baselineOffset(0)
          .fontSize(30)
          .border(width: 1)
          .padding(10)
          .width(300)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/vbOiYlQOS3i6GFyJxMZ8zQ/zh-cn_image_0000002743077689.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=348A505DE98C500E58E6F879D0D4927DC17FAABE4C64577E00DB97F29ED2CB6A)




#### 添加子组件

[Span](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-span)只能作为[Text](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text)和[RichEditor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-richeditor)组件的子组件显示文本内容。可以在一个Text内添加多个Span来显示一段信息，例如产品说明书、承诺书等。

  * 创建Span。

Span组件必须嵌入在Text组件中才能显示，单独的Span组件不会呈现任何内容。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        import ohos.resource_manager.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Text() {
                        Span("我是Span")
                    }
                        .padding(10)
                        .borderWidth(1)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/HkwoNDKDS_GVsvW8rHA24A/zh-cn_image_0000002713558728.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=52D51BCC2CF1B855ACFE1F1EF97F40DC7D5596CAE2F3CF31C21A234C1B30979A)

  * 设置文本装饰线及颜色。

通过[decoration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-span#func-decorationtextdecorationtype-resourcecolor)设置文本装饰线及颜色。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text() {
                            Span('我是Span1，')
                                .fontSize(16)
                                .fontColor(Color.Gray)
                                .decoration(decorationType: TextDecorationType.LineThrough, color: Color.Red)
                            Span('我是Span2')
                                .fontColor(Color.Blue)
                                .fontSize(16)
                                .fontStyle(FontStyle.Italic)
                                .decoration(decorationType: TextDecorationType.Underline, color: Color.Black)
                            Span('，我是Span3')
                                .fontSize(16)
                                .fontColor(Color.Gray)
                                .decoration(decorationType: TextDecorationType.Overline, color: Color.Green)
                        }
                            .borderWidth(1)
                            .padding(10)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/LFIxLLWwRbOMO5iYAd2vsQ/zh-cn_image_0000002743197641.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=FD752AE2FD55D01F4E83E087868FB31F242A2C8B7955D2F3CCF244DA98FFA17E)

  * 通过[textCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-span#func-textcasetextcase)设置文字一直保持大写或者小写状态。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text() {
                            Span('I am Upper-span')
                                .fontSize(12)
                                .textCase(TextCase.UpperCase)
                        }
                            .borderWidth(1)
                            .padding(10)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/ErHd9YMiTAWNccTVgfbCDw/zh-cn_image_0000002713398760.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=300E4A09CE89B205AC05ECF87214168C8B78E5E9A23A1B2C7C459E588BED7C9E)

  * 添加事件。

由于Span组件无尺寸信息，事件仅支持添加点击事件[onClick](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click#func-onclickclickevent---unit)。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        import ohos.resource_manager.*
        import ohos.hilog.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll() {
                    Column() {
                        Text() {
                            Span('I am Upper-span')
                                .fontSize(12)
                                .textCase(TextCase.UpperCase)
                                .onClick({
                                    evt => Hilog.info(1, '1', 'test', 'Span——onClick')
                                })
                        }
                    }
                }
                    .height(100.percent)
                    .width(100.percent)
            }
        }




#### 自定义文本样式

  * 通过[textAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-textaligntextalign)属性设置文本对齐样式。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text('左对齐')
                            .width(300)
                            .textAlign(TextAlign.Start)
                            .border(width: 1)
                            .padding(10)
                        Text('中间对齐')
                            .width(300)
                            .textAlign(TextAlign.Center)
                            .border(width: 1)
                            .padding(10)
                        Text('右对齐')
                            .width(300)
                            .textAlign(TextAlign.End)
                            .border(width: 1)
                            .padding(10)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0c/v3/PuGk179oTu-uv6ZopFtb2w/zh-cn_image_0000002743077691.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=303EB7190989418205AB16FCB4AB64808F3B8C97F8523BD166E3BA16298F337E)

  * 通过[textOverflow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-textoverflowtextoverflow)属性控制文本超长处理，textOverflow需配合[maxLines](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-maxlinesint32)一起使用（默认情况下文本自动折行）。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text(
                            'This is the setting of textOverflow to Clip text content This is the setting of textOverflow to None text content. This is the setting of textOverflow to Clip text content This is the setting of textOverflow to None text content.')
                            .width(250)
                            .textOverflow(TextOverflow.None)
                            .maxLines(1)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                        Text(
                            '我是超长文本，超出的部分显示省略号。I am an extra long text, with ellipses displayed for any excess。')
                            .width(250)
                            .textOverflow(TextOverflow.Ellipsis)
                            .maxLines(1)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/-um9_vTcQj-CxorzCUo_6A/zh-cn_image_0000002713558730.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B9DCA8563A42CDE4B54A6BC9C1826A110BE45445E18E8A9DF05E48C8624149B8)

  * 通过[lineHeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-lineheightlength)属性设置文本行高。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text('This is the text with the line height set. This is the text with the line height set.')
                            .width(300)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                        Text('This is the text with the line height set. This is the text with the line height set.')
                            .width(300)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                            .lineHeight(20)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/FiYQkRBGQFymeaCoSKB2ew/zh-cn_image_0000002743197643.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=56C948BABB0829864A6269F4CE36DBB67349EAF8401327E2D947D9FA245294F8)

  * 通过[decoration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-decorationtextdecorationtype-resourcecolor-textdecorationstyle)属性设置文本装饰线样式及其颜色。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text('This is the text')
                            .decoration(
                                decorationType: TextDecorationType.LineThrough,
                                color: Color.Red
                            )
                            .borderWidth(1)
                            .padding(10)
                            .margin(5)
                        Text('This is the text')
                            .decoration(
                                decorationType: TextDecorationType.Overline,
                                color: Color.Red
                            )
                            .borderWidth(1)
                            .padding(10)
                            .margin(5)
                        Text('This is the text')
                            .decoration(
                                decorationType: TextDecorationType.Underline,
                                color: Color.Red
                            )
                            .borderWidth(1)
                            .padding(10)
                            .margin(5)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/9n-Bon49R0yVB-XUB4lOvA/zh-cn_image_0000002713398762.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=5B765DD375C913DB80606A70FBAC0F799CBCE94121E1ACB1B172A2321CD85F92)

  * 通过[baselineOffset](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-baselineoffsetlength)属性设置文本基线的偏移量。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text('This is the text content with baselineOffset 0.')
                            .baselineOffset(0)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                            .width(100.percent)
                            .margin(5)
                        Text('This is the text content with baselineOffset 30.')
                            .baselineOffset(30)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                            .width(100.percent)
                            .margin(5)
                        Text('This is the text content with baselineOffset -20.')
                            .baselineOffset(-20)
                            .fontSize(12)
                            .border(width: 1)
                            .padding(10)
                            .width(100.percent)
                            .margin(5)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/XIvBkGhJRhSg0zRlgAbvsQ/zh-cn_image_0000002743077693.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=95E00F2FD3D3881A99C7F4AC9029B0FAA330347419C639D9EA21439C5568B275)

  * 通过[minFontSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-minfontsizelength)与[maxFontSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-maxfontsizelength)自适应字体大小。

minFontSize用于设置文本的最小显示字号，maxFontSize用于设置文本的最大显示字号。这两个属性必须同时设置才能生效，并且需要与[maxLines](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-maxlinesint32)属性或布局大小限制配合使用，单独设置任一属性将不会产生效果。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text('我的最大字号为30，最小字号为5，宽度为250，maxLines为1')
                            .width(250)
                            .maxLines(1)
                            .maxFontSize(30)
                            .minFontSize(5)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                        Text('我的最大字号为30，最小字号为5，宽度为250，maxLines为2')
                            .width(250)
                            .maxLines(2)
                            .maxFontSize(30)
                            .minFontSize(5)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                        Text('我的最大字号为30，最小字号为15，宽度为250,高度为50')
                            .width(250)
                            .height(50)
                            .maxFontSize(30)
                            .minFontSize(15)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                        Text('我的最大字号为30，最小字号为15，宽度为250,高度为100')
                            .width(250)
                            .height(100)
                            .maxFontSize(30)
                            .minFontSize(15)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/eSOVB0GPRUmj-QWvrDT-Ow/zh-cn_image_0000002713558732.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=59FC4196C7DE9B8B134D5C1338A1B6427AE7DACAADC63877263F4B078AE13022)

  * 通过[textCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-text#func-textcasetextcase)属性设置文本大小写。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Scroll {
                    Column {
                        Text('This is the text content with textCase set to Normal.')
                            .textCase(TextCase.Normal)
                            .padding(10)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                        // 文本全小写展示
                        Text('This is the text content with textCase set to LowerCase.')
                            .textCase(TextCase.LowerCase)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                        // 文本全大写展示
                        Text('This is the text content with textCase set to UpperCase.')
                            .textCase(TextCase.UpperCase)
                            .border(width: 1)
                            .padding(10)
                            .margin(5)
                    }
                        .height(100.percent)
                        .width(100.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/HopBPsfmRkSC8x45xkzsjA/zh-cn_image_0000002743197645.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=7FC6D84C3ECA4DC48B2765F997D7E262418A8DF86A31355ADEFC2EB587720B06)




#### 添加事件

Text组件可以添加通用事件，可以绑定[onClick](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click#func-onclickclickevent---unit)、[onTouch](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-touch#func-ontouchtouchevent---unit)等事件来响应操作。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Scroll {
                Column {
                    Text('点我').onClick({
                        evt => Hilog.info(1, '1', 'test', 'Text的点击响应事件')
                    })
                }
                    .height(100.percent)
                    .width(100.percent)
            }
        }
    }

#### 场景示例

该示例通过maxLines、textOverflow、textAlign、constraintSize属性展示了热搜榜的效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Row() {
                    Text("1")
                        .fontSize(14)
                        .fontColor(Color.Red)
                        .margin(left: 10, right: 10)
                    Text("我是热搜词条1")
                        .fontSize(12)
                        .fontColor(Color.Blue)
                        .maxLines(1)
                        .textOverflow(TextOverflow.Ellipsis)
                        .fontWeight(W300)
                    Text("爆")
                        .margin(left: 6)
                        .textAlign(TextAlign.Center)
                        .fontSize(10)
                        .fontColor(Color.White)
                        .fontWeight(W600)
                        .backgroundColor(0x770100)
                        .borderRadius(5)
                        .width(15)
                        .height(14)
                }
                    .width(100.percent)
                    .margin(5)
    
                Row() {
                    Text("2")
                        .fontSize(14)
                        .fontColor(Color.Red)
                        .margin(left: 10, right: 10)
                    Text("我是热搜词条2 我是热搜词条2 我是热搜词条2 我是热搜词条2 我是热搜词条2")
                        .fontSize(12)
                        .fontColor(Color.Blue)
                        .fontWeight(W300)
                        .constraintSize(maxWidth: 200)
                        .maxLines(1)
                        .textOverflow(TextOverflow.Ellipsis)
                    Text("热")
                        .margin(left: 6)
                        .textAlign(TextAlign.Center)
                        .fontSize(10)
                        .fontColor(Color.White)
                        .fontWeight(W600)
                        .backgroundColor(0xCC5500)
                        .borderRadius(5)
                        .width(15)
                        .height(14)
                }
                    .width(100.percent)
                    .margin(5)
    
                Row() {
                    Text("3")
                        .fontSize(14)
                        .fontColor(Color(0xFFA500))
                        .margin(left: 10, right: 10)
                    Text("我是热搜词条3")
                        .fontSize(12)
                        .fontColor(Color.Blue)
                        .fontWeight(W300)
                        .maxLines(1)
                        .constraintSize(maxWidth: 200)
                        .textOverflow(TextOverflow.Ellipsis)
                    Text("热")
                        .margin(left: 6)
                        .textAlign(TextAlign.Center)
                        .fontSize(10)
                        .fontColor(Color.White)
                        .fontWeight(W600)
                        .backgroundColor(0xCC5500)
                        .borderRadius(5)
                        .width(15)
                        .height(14)
                }
                    .width(100.percent)
                    .margin(5)
    
                Row() {
                    Text("4")
                        .fontSize(14)
                        .fontColor(Color.Gray)
                        .margin(left: 10, right: 10)
                    Text("我是热搜词条4 我是热搜词条4 我是热搜词条4 我是热搜词条4 我是热搜词条4")
                        .fontSize(12)
                        .fontColor(Color.Blue)
                        .fontWeight(W300)
                        .constraintSize(maxWidth: 200)
                        .maxLines(1)
                        .textOverflow(TextOverflow.Ellipsis)
                }
                    .width(100.percent)
                    .margin(5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/HUkoXInvT_C_5AcUlJ4ueQ/zh-cn_image_0000002713398764.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=F33EE8750D97EE3DF6C397071B2F8C3A363CACE7DA5C6D6F831B06AFBC75AF00)
