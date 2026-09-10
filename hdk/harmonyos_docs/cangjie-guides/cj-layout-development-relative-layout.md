---
name: cangjie-guides/cj-layout-development-relative-layout
title: 相对布局（RelativeContainer）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-relative-layout
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 相对布局（RelativeContainer）
---

# 相对布局（RelativeContainer）

#### 概述

在应用的开发过程中，经常需要设计复杂界面，此时涉及到多个相同或不同组件之间的嵌套。如果布局组件嵌套深度过深，或者嵌套组件数过多，会带来额外的开销。如果在布局的方式上进行优化，就可以有效的提升性能，减少时间开销。

RelativeContainer是一种采用相对布局的容器，支持容器内部的子元素设置相对位置关系，适用于界面复杂场景的情况，对多个子组件进行对齐和排列。子元素支持指定兄弟元素作为锚点，也支持指定父容器作为锚点，基于锚点做相对位置布局。下图1是一个RelativeContainer的概念图，图中的虚线表示位置的依赖关系。

**图1** 相对布局示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/Fydbtim5RSSJO--4QqlQxw/zh-cn_image_0000002713398716.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=6BE90C2EDC8F757FC1505D86F3EA90051C75E4632C2148D26EF2C02B1B010D65)

子元素并不完全是上图中的依赖关系。比如，Item4可以以Item2为依赖锚点，也可以以RelativeContainer父容器为依赖锚点。

#### 基本概念

  * 参考边界：设置当前组件的哪个边界对齐到锚点。

  * 锚点：通过锚点设置当前元素基于哪个元素确定位置。

  * 对齐方式：通过对齐方式，设置当前元素是基于锚点的上中下对齐，还是基于锚点的左中右对齐。




#### 设置依赖关系

#### [h2]设置参考边界

设置当前组件的哪个边界对齐到锚点。容器内子组件的参考边界区分水平方向和垂直方向。

  * 在水平方向上，可以按照起始（left）、居中（middle）或尾端（right）的组件边界与锚点对齐。当设置三个边界时，仅起始（left）和居中（middle）的边界设置生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/wMkUzkGkQTOLeDaYFV8P6Q/zh-cn_image_0000002743077647.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=A75FD1051AA2C235E60E9BFF1E53EF9EB908579BCCB7C0B9BC39719F80E6FD1F)

  * 在垂直方向上，可以设置组件边界与锚点对齐，具体包括顶部（top）、居中（center）和底部（bottom）。当设置三个边界时，仅顶部（top）和居中（center）生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e/v3/HTR722JFQAuN7iWLv2SD3w/zh-cn_image_0000002713558686.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=D430C1EF4AB1A946F63A1E390A13E59411C91F72E93F682F13155A5F550CE0DD)




#### [h2]设置锚点

锚点设置涉及子元素相对于其父元素或兄弟元素的位置依赖关系。具体而言，子元素可以将其位置锚定到相对布局容器（RelativeContainer）、辅助线（guideline）、屏障（barrier）或其他子元素上。

为了准确定义锚点，RelativeContainer的子元素必须拥有唯一的组件标识（id），用于指定锚点信息。父元素RelativeContainer的标识默认为“_container_”，其他子元素的组件标识（id）则通过[id](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-componentid)属性设置。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/xeVywqY1SOGfxUf4A5Sxdg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=45D81242E246B1782F148993AC9D33767F7CA42515FFA808D56BB1D80AC74357)

  * 未设置组件标识（id）的组件虽可显示，但无法被其他组件引用为锚点。相对布局容器会为其拼接组件标识，但组件标识（id）的规律无法被应用感知。辅助线（guideline）与屏障（barrier）的组件标识（id）需确保唯一，避免与任何组件冲突。若有重复，遵循组件 > guideline > barrier 的优先级。
  * 组件间设置锚点时应避免形成依赖循环（组件之间设置链除外），依赖循环将导致子组件缺乏定位基准，最终无法绘制。



  * RelativeContainer父组件为锚点，__container__代表容器的组件标识（id）。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                RelativeContainer() {
                    Row() {
                        Text('row1')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .height(100)
                        .backgroundColor(0xa3cf62)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
        
                    Row() {
                        Text('row2')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .height(100)
                        .backgroundColor(0x00ae9d)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                right: HorizontalAlignParam("__container__", HorizontalAlign.End)
                            )
                        )
                        .id("row2")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 20)
                    .border(width: 2, color: 0x6699FF)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/zhaqd4Z0TVuccZxKhIfsfg/zh-cn_image_0000002743197599.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=F3055C8CC6FF63F0C8CBBD56037DCE6DED123C2FEDD9E55537B706087A810ACC)

  * 以兄弟元素为锚点。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                RelativeContainer() {
                    Row() {
                        Text('row1')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .height(100)
                        .backgroundColor(0x00ae9d)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
        
                    Row() {
                        Text('row2')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .height(100)
                        .backgroundColor(0xa3cf62)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row1", HorizontalAlign.Start)
                            )
                        )
                        .id("row2")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 20)
                    .border(width: 2, color: 0x6699FF)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/e_4wkYVBTFC019K-DEW4zA/zh-cn_image_0000002713398718.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=00E26278ED8BCF747060D7D74E54E1A4ACC972CDBE874306BB96B6C6D8E087D2)

  * 子组件锚点可以任意选择，但需注意不要相互依赖。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    RelativeContainer() {
                        Row() {Text('row1')}
                            .justifyContent(FlexAlign.Center)
                            .width(100)
                            .height(100)
                            .backgroundColor(0xa3cf62)
                            .alignRules(
                                AlignRuleOption(
                                    top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                    left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                                )
                            )
                            .id("row1")
                        Row() {Text('row2')}
                            .justifyContent(FlexAlign.Center)
                            .width(100)
                            .backgroundColor(0x00ae9d)
                            .alignRules(
                                AlignRuleOption(
                                    top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                    right: HorizontalAlignParam("__container__", HorizontalAlign.End),
                                    bottom: VerticalAlignParam("row1", VerticalAlign.Center),
                                )
                            )
                            .id("row2")
                        Row() {Text('row3')}
                            .justifyContent(FlexAlign.Center)
                            .height(100)
                            .backgroundColor(0x0a59f7)
                            .alignRules(
                                AlignRuleOption(
                                    top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                    left: HorizontalAlignParam("row1", HorizontalAlign.Start),
                                    right: HorizontalAlignParam("row2", HorizontalAlign.Start)
                                )
                            )
                            .id("row3")
                        Row() {Text('row4')}
                            .justifyContent(FlexAlign.Center)
                            .backgroundColor(0x2ca9e0)
                            .alignRules(
                                AlignRuleOption(
                                    top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                    left: HorizontalAlignParam("row1", HorizontalAlign.Center),
                                    right: HorizontalAlignParam("row2", HorizontalAlign.End)
                                )
                            )
                            .id("row4")
                    }
                        .width(300)
                        .height(300)
                        .margin(left: 50)
                        .border(width: 2, color: 0x6699FF)
                }.height(100.percent)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/8VLU1bxZR5ud8wMWJt_3dg/zh-cn_image_0000002743077649.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=1D79078D633646C540873CB4C5884D852A60B43895CDD6ACFF409B5E69B5F775)




#### [h2]设置相对于锚点的对齐位置

设置了锚点之后，可以通过[alignRules](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-location#func-alignrulesalignruleoption)属性设置相对于锚点的对齐位置。

在水平方向上，对齐位置可以设置为HorizontalAlign.Start、HorizontalAlign.Center、HorizontalAlign.End。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/h8awREb0SJqXwP_8KPZjew/zh-cn_image_0000002713558688.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=3A99EC0AF19DD1F21A2DE63A99E4AF734FD25131B4AF235FF0217136F28A2587)

在竖直方向上，对齐位置可以设置为VerticalAlign.Top、VerticalAlign.Center、VerticalAlign.Bottom。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/HSqnXvozTbOqDIV0ygjHfg/zh-cn_image_0000002743197601.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=9741104BD2EBF53DD72A34FD0825F806FEB37B2E95B3043AC3583BEFD8335AA6)

#### [h2]子组件位置偏移

子组件经过相对位置对齐后，位置可能还不是目标位置，开发者可根据需要设置额外偏移（offset）。当使用offset调整位置的组件作为锚点时，对齐位置为设置offset之前的位置。建议使用[bias](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-bias)来设置额外偏移。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row() {
                        Text('row1')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .height(100)
                        .backgroundColor(0xa3cf62)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
    
                    Row() {
                        Text('row2')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .backgroundColor(0x00ae9d)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                right: HorizontalAlignParam("__container__", HorizontalAlign.End),
                                bottom: VerticalAlignParam("row1", VerticalAlign.Center)
                            )
                        )
                        .offset(x: -40, y: -20)
                        .id("row2")
    
                    Row() {
                        Text('row3')
                    }
                        .justifyContent(FlexAlign.Center)
                        .height(100)
                        .backgroundColor(0x0a59f7)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row1", HorizontalAlign.End),
                                right: HorizontalAlignParam("row2", HorizontalAlign.Start)
                            )
                        )
                        .offset(x: -10, y: -20)
                        .id("row3")
    
                    Row() {
                        Text('row4')
                    }
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0x2ca9e0)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row1", HorizontalAlign.End)
                            )
                        )
                        .offset(x: -10, y: -30)
                        .id("row4")
                    Row() {
                        Text('row5')
                    }
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0x30c9f7)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row2", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row2", HorizontalAlign.End)
                            )
                        )
                        .offset(x: 10, y: 20)
                        .id("row5")
                    Row() {
                        Text('row6')
                    }
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0xff33ffb5)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("row4", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row3", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row3", HorizontalAlign.End)
                            )
                        )
                        .offset(x: -15, y: 10)
                        .backgroundImagePosition(Alignment.Bottom)
                        .backgroundImageSize(ImageSize.Cover)
                        .id("row6")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50)
                    .border(width: 2, color: 0x6699FF)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/LvC34TbHQ0SQSa1-4Ww62g/zh-cn_image_0000002713398720.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B9821E91397947DDDE664E546926E2E12329D34BB59D9FB1C2663ADB0F93FF51)

#### 多种组件的对齐布局

Row、Column、Flex、Stack等多种布局组件，可按照RelativeContainer组件规则进行对齐排布。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row()
                        .width(100)
                        .height(100)
                        .backgroundColor(0xa3cf62)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
                    Column()
                        .width(50.percent)
                        .height(30)
                        .backgroundColor(0x00ae9d)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Center)
                            )
                        )
                        .id("row2")
    
                    Flex(direction: FlexDirection.Row) {
                        Text('1')
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0x0a59f7)
                        Text('2')
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0x2ca9e0)
                        Text('3')
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0x0a59f7)
                        Text('4')
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0x2ca9e0)
                    }
                        .padding(10)
                        .backgroundColor(0x30c9f7)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row2", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Center),
                                right: HorizontalAlignParam("row2", HorizontalAlign.Center)
                            )
                        )
                        .id("row3")
    
                    Stack(alignContent: Alignment.Bottom) {
                        Text('First child, show in bottom')
                            .width(90.percent)
                            .height(100.percent)
                            .backgroundColor(0xa3cf62)
                            .align(Alignment.Top)
                        Text('Second child, show in top')
                            .width(70.percent)
                            .height(60.percent)
                            .backgroundColor(0x00ae9d)
                            .align(Alignment.Top)
                    }
                        .margin(top: 5)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                right: HorizontalAlignParam("row3", HorizontalAlign.End)
                            )
                        )
                        .id("row4")
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50)
                    .border(width: 2, color: 0x6699FF)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/vdLx-mooT3abIz3UDA5kXA/zh-cn_image_0000002743077651.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=5E8C0AFC3E050504660C9167CEE9B6DA53D531BF467A45B503844B5D1E51CCCF)

#### 组件尺寸

当同时存在前端页面设置的子组件尺寸和相对布局规则时，子组件的绘制尺寸依据约束规则确定。子组件自身设置的尺寸优先级高于相对布局规则中的对齐锚点尺寸。因此，若要使子组件与锚点严格对齐，应仅使用alignRules，避免使用[尺寸设置](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/hvX6Hq5zR4aGpf21r25dyg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=04111E2A1BE5C7CC5FC5D08393BCD557113896232096073E376E526E04C66A0E)

  * 根据约束条件和子组件自身的size属性无法确定子组件的大小，此时，不绘制该子组件。
  * 在同一方向上设置两个或更多锚点时，若这些锚点的位置顺序有误，该子组件将被视为大小为0而不予绘制。


    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                RelativeContainer() {
                    Row() {
                        Text('row1')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .height(100)
                        .backgroundColor(0xa3cf62)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start)
                            )
                        )
                        .id("row1")
    
                    Row() {
                        Text('row2')
                    }
                        .justifyContent(FlexAlign.Center)
                        .width(100)
                        .backgroundColor(0x00ae9d)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("__container__", VerticalAlign.Top),
                                right: HorizontalAlignParam("__container__", HorizontalAlign.End),
                                bottom: VerticalAlignParam("row1", VerticalAlign.Center)
                            )
                        )
                        .id("row2")
    
                    Row() {
                        Text('row3')
                    }
                        .justifyContent(FlexAlign.Center)
                        .height(100)
                        .backgroundColor(0x0a59f7)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row1", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row1", HorizontalAlign.End),
                                right: HorizontalAlignParam("row2", HorizontalAlign.Start),
                            )
                        )
                        .id("row3")
    
                    Row() {
                        Text('row4')
                    }
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0x2ca9e0)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("__container__", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row1", HorizontalAlign.End)
                            )
                        )
                        .id("row4")
    
                    Row() {
                        Text('row5')
                    }
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0x30c9f7)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("__container__", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row2", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row2", HorizontalAlign.End)
                            )
                        )
                        .id("row5")
    
                    Row() {
                        Text('row6')
                    }
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0xff33ffb5)
                        .alignRules(
                            AlignRuleOption(
                                top: VerticalAlignParam("row3", VerticalAlign.Bottom),
                                bottom: VerticalAlignParam("row4", VerticalAlign.Bottom),
                                left: HorizontalAlignParam("row3", HorizontalAlign.Start),
                                right: HorizontalAlignParam("row3", HorizontalAlign.End)
                            )
                        )
                        .id("row6")
                        .backgroundImagePosition(Alignment.Bottom)
                        .backgroundImageSize(ImageSize.Cover)
                }
                    .width(300)
                    .height(300)
                    .margin(left: 50)
                    .border(width: 2, color: 0x6699FF)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/9eRsEPtZRem7LbQ_rjEBUw/zh-cn_image_0000002713558690.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=44B95FF0B00E250ADDC968AF9A0B8AAE7B2B53430EAB81DCE506EC9298D1413F)
