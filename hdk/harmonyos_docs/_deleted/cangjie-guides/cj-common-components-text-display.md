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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/ZAsr8GTQTBCIsvBnTB0o9Q/zh-cn_image_0000002731538641.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=D613A7553902E8C53A1D19C6FD01CD0A54378F256A87909F60D209EC841F590B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/A_7a-c_0SJi8dvP5Linwkg/zh-cn_image_0000002701659450.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=E7116F2959388C9CF0AE726C3F54E2AEFC484378DF6CBC9EE3D9C0EF2AF875FA)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/qkMoQkRrQ2qpptmAck3ncA/zh-cn_image_0000002731378665.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=6921159C13CBF5AD6249B0CFEDB39BF927F4219F9D2C2010FFBAA12A5275084A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/tzCKstu2QH-UPVrPJmkAEQ/zh-cn_image_0000002701819362.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=C5AEC4726A0588DDD96BA6ED927CC71DF4FB10E8E83D3988E08FB813951ADECD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/gQBmUGy3RsSrXPg_ycecFA/zh-cn_image_0000002731538643.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=F8E2E85A28C3576935098E0A9F5C3B8138E15ED01E527F2F8A62C17652D9E128)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/Wu_RMlnrQKuSH8e4SvweAA/zh-cn_image_0000002701659452.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=AC7677FE3C779BF2907A269C94B6D061F4A0297B9D5EF82A43431820295A0ED8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/ZtSPhzgZSWabkjPrdm2Nkg/zh-cn_image_0000002731378667.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=E90C7116484E108158AA137B599E7C1CDC9170BA1BA559BBB2CF2E0E0136E4ED)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/YrkYRaj2QOSD2OpZSTYVyQ/zh-cn_image_0000002701819364.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=CE85E0557C01DBC562C2FC9602B90848B6632EEB87561A3FCB5936771269F1E5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/Vx_MaReNQrizvxiWVUqP-Q/zh-cn_image_0000002731538645.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=2F9F53224A502B30F6C0346E6859D4D71F48B8195E6C439E529EFD16A6E5D5BF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/hK80dnlyQWW19KVXs2HwsA/zh-cn_image_0000002701659454.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=130F60297F771834BC79C995587B8BAB403FEF858A1F9AAB24871A231741D39E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/7wqpiH3ESPasPTA-zjrPWw/zh-cn_image_0000002731378669.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=412F9928385D47AB917231281A12D3CA3C5A03DABD745EEB49B2C55FD801E69E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/la3lL_apSE-fQ1-T8KgR3A/zh-cn_image_0000002701819366.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=E61886AD907BD21601D62E570A49C4DF7DDE45744D72C5AFE836AD6F984D310D)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/iheak3pgS8az1_aQibSbSA/zh-cn_image_0000002731538647.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=E4105066D8C88017CEDBF972C43BA121BD1C89ABF37350FBEAD00ECAF5EF1A92)
