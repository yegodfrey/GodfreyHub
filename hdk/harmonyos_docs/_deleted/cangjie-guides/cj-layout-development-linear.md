---
name: cangjie-guides/cj-layout-development-linear
title: 线性布局（Row/Column）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-linear
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 线性布局（Row/Column）
---

# 线性布局（Row/Column）

#### 概述

线性布局（LinearLayout）是开发中最常用的布局，通过线性容器[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)和[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)构建。线性布局是其他布局的基础，其子元素在线性方向上（水平方向和垂直方向）依次排列。线性布局的排列方向由所选容器组件决定，Column容器内子元素按照垂直方向排列，Row容器内子元素按照水平方向排列。根据不同的排列方向，开发者可选择使用Row或Column容器创建线性布局。

**图1** Column容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/8Uy81Yo1QxaX4shkBpBpJg/zh-cn_image_0000002731378585.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=3809A000C16B543DB851447F12FC1EE264FCA0F92F1EDEF39156F30A851F16E8)

**图2** Row容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/q5yUI4i3RD-RZ7w6dseKyg/zh-cn_image_0000002701819282.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7BFA44DEFC512E986D2DDE684B531C21A68745506A44E7CDEBEF5191F6FE79B4)

#### 基本概念

  * 布局容器：具有布局能力的组件容器，可以承载其他元素作为其子元素，布局容器会对其子元素进行尺寸计算和布局排列。

  * 布局子元素：布局容器内部的元素。

  * 主轴：线性布局容器在布局方向上的轴线，子元素默认沿主轴排列。Row容器主轴为水平方向，Column容器主轴为垂直方向。

  * 交叉轴：垂直于主轴方向的轴线。Row容器交叉轴为垂直方向，Column容器交叉轴为水平方向。

  * 间距：布局子元素的间距。




#### 布局子元素在排列方向上的间距

在布局容器内，可以通过space属性设置排列方向上子元素的间距，使各子元素在排列方向上有等间距效果。

#### [h2]Column容器内排列方向上的间距

**图3** Column容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/HaQ1937PRCmntkcYtv9bdA/zh-cn_image_0000002731538563.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=01CBD934D5D89887F787F3C2D789902EC2D8E423AAA29EF54FE223781F618CDF)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 20) {
                Text('space: 20')
                    .fontSize(15)
                    .fontColor(Color.Gray)
                    .width(90.percent)
                Row()
                    .width(90.percent)
                    .height(50)
                    .backgroundColor(0xF5DEB3)
                Row()
                    .width(90.percent)
                    .height(50)
                    .backgroundColor(0xD2B48C)
                Row()
                    .width(90.percent)
                    .height(50)
                    .backgroundColor(0xF5DEB3)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/8ArYLpWOR0ulXuqx88t7qg/zh-cn_image_0000002701659372.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=C48673B1642DBD4984F762974B7EE39AD1F7A2AB987EACB062820707F5B771E4)

#### [h2]Row容器内排列方向上的间距

**图4** Row容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/-LwWS_iuSMyrXy0v0BpTqg/zh-cn_image_0000002731378587.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=6F03DAEFE24B5E74255D4809B29124CD77F9E1EF8CA67FA88BD6828FB2948B68)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row(space: 35) {
                Text('space: 35')
                    .fontSize(15)
                    .fontColor(Color.Gray)
                Row()
                    .width(10.percent)
                    .height(150)
                    .backgroundColor(0xF5DEB3)
                Row()
                    .width(10.percent)
                    .height(150)
                    .backgroundColor(0xD2B48C)
                Row()
                    .width(10.percent)
                    .height(150)
                    .backgroundColor(0xF5DEB3)
            }.width(90.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/G5xVQDEERpCmGlfPtRu-rA/zh-cn_image_0000002701819284.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=D44233135AE3DFC27E58232F455ECE97D3C28FCCA7163D3245EAD244A443913C)

#### 布局子元素在交叉轴上的对齐方式

在布局容器内，可以通过alignItems属性设置子元素在交叉轴（排列方向的垂直方向）上的对齐方式。且在各类尺寸屏幕中，表现一致。其中，交叉轴为垂直方向时，取值为[VerticalAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-verticalalign)类型，水平方向取值为[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-horizontalalign)类型。

alignSelf属性用于控制单个子元素在容器交叉轴上的对齐方式，其优先级高于alignItems属性，如果设置了alignSelf属性，则在单个子元素上会覆盖alignItems属性。

#### [h2]Column容器内子元素在水平方向上的排列

**图5** Column容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/j4XghRkcRzSePLeDJcW2yA/zh-cn_image_0000002731538565.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=F0BFBF62A99F722D5EB63C9FE6BCA7767675DB06326F7AC2A5129C7A7AA4D3B9)

  * HorizontalAlign.Start：子元素在水平方向左对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .alignItems(HorizontalAlign.Start)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/p4LrqYsGQFiquwX0IBl_UQ/zh-cn_image_0000002701659374.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=9C59C02A0C4E65794760D8707C9AB5AEB9B80B9B63CA23C01C08E3E016C717E6)

  * HorizontalAlign.Center：子元素在水平方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .alignItems(HorizontalAlign.Center)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/k_xW2-ieTTqA5XMB3YLfUA/zh-cn_image_0000002731378589.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=98E23AEC3A26C32D89A7786BBFFBB40C94E16F636DA932113B841886347E675F)

  * HorizontalAlign.End：子元素在水平方向右对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .alignItems(HorizontalAlign.End)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/KkyU5hLuS6KH-0e7fzkjLQ/zh-cn_image_0000002701819286.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=16A9AD9FDA3A83F79A006E8F83371B20F9581A6589D904D1CCAED068CE92817B)




#### [h2]Row容器内子元素在垂直方向上的排列

**图6** Row容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/9lCSWoSaTW2gm8zqKmNamQ/zh-cn_image_0000002731538567.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=3F71EDBE8823B5D7ED341D3768FA4CAB41D965F385ACF71C3B69CA12735C15DA)

  * VerticalAlign.Top：子元素在垂直方向顶部对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .alignItems(VerticalAlign.Top)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/dIWCkumfRNOBCZfRUnL6MQ/zh-cn_image_0000002701659376.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=4485EDD4A874B7819D3EF31A1F4798B319E294A6EE8467EE0A117742FC6C5588)

  * VerticalAlign.Center：子元素在垂直方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .alignItems(VerticalAlign.Center)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/gM3W6tI_R5SGPdcnaTa5eg/zh-cn_image_0000002731378591.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=47110FF9E3B400C3E9B23B2B749C25372D9EA17BA311D035540B554677B8EADE)

  * VerticalAlign.Bottom：子元素在垂直方向底部对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .alignItems(VerticalAlign.Bottom)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/0MV08scMS0u5fL8umU69OQ/zh-cn_image_0000002701819288.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=40F01C1D8350E378C5D3C31E63CB6DD50C9B4998F7F6237982F96AE9409246BA)




#### 布局子元素在主轴上的排列方式

在布局容器内，可以通过justifyContent属性设置子元素在容器主轴上的排列方式。可以从主轴起始位置开始排布，也可以从主轴结束位置开始排布，或者均匀分割主轴的空间。

#### [h2]Column容器内子元素在垂直方向上的排列

**图7** Column容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/GglCXynZTyCSUTvKaMVsAw/zh-cn_image_0000002731538569.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=EB93BA789CED765824C0DA140E6B1BC258C4EE15487E0B8F3F48F989AF9399E2)

  * justifyContent(FlexAlign.Start)：元素在垂直方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Start)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/p-ZHa2_8SD-wDLM0438ZeQ/zh-cn_image_0000002701659378.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=A86125650D42971688CCDE5354481D4EAE94F4422EBE458A23D0602036BD2803)

  * justifyContent(FlexAlign.Center)：元素在垂直方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Center)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/aWLnbZ6MTpK05y0_XGSUOw/zh-cn_image_0000002731378593.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=8CEDCB002F66D020EF1774CEE727219495E6D819D6947E9DDBA57601E70EBF44)

  * justifyContent(FlexAlign.End)：元素在垂直方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.End)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/uir9qQUhTOmrc-Tu3hN3QA/zh-cn_image_0000002701819290.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=77DD0075043BC8EB198A75E191D5B186CC81E9B034D4E7DE6F87199473801843)

  * justifyContent(FlexAlign.SpaceBetween)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceBetween)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/KWxXH4dDQiOgKBq5fW9i8A/zh-cn_image_0000002731538571.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=916A00CDC4952A6B377A3418B09FB542B8A02F7F5DDED3F91732CA29EA959517)

  * justifyContent(FlexAlign.SpaceAround)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceAround)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/iqhsl-_rSHuAV8Be7eyurA/zh-cn_image_0000002701659380.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=94DFA89EBC4AC56B8D06796CC55DF2077AC27EB9A174394087A8D16A1BC32286)

  * justifyContent(FlexAlign.SpaceEvenly)：垂直方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceEvenly)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/H93QlG9uRgC7q13cbqts1g/zh-cn_image_0000002731378595.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7F33BF6E44FBF045CE16DD1676F119A36C55AB6CF17A63A5E7A24D9F7940531E)




#### [h2]Row容器内子元素在水平方向上的排列

**图8** Row容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/nvARuKD4TR6-_MTYqrFoOw/zh-cn_image_0000002701819292.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=0835BDFB50ED5904F3019339B48B5A9A35442CD4B37A5F7B737438558A74F38E)

  * justifyContent(FlexAlign.Start)：元素在水平方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Start)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/GeuUwVE5QoePBHMOq8toQQ/zh-cn_image_0000002731538573.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2967E5DBEF733DCA5D119E56D5859FF4941063B9FE02DCBB3C89BE4C95E942C4)

  * justifyContent(FlexAlign.Center)：元素在水平方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Center)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/fj5QkJQHRlakiiVMLQGsYg/zh-cn_image_0000002701659382.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=6089F09C53E092A0E6961DEEADEB2039CD96CF79918E4EE1372737BB5C5DCF9F)

  * justifyContent(FlexAlign.End)：元素在水平方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.End)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/S-3lQ5EwTKSm6sHp-FN-8A/zh-cn_image_0000002731378597.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=27C73694D829BEDBC1F40ECC13D62435F37B0BA98130F97F25C96C52639464D1)

  * justifyContent(FlexAlign.SpaceBetween)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceBetween)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/LtALNFqYQKqij4VJvf1ySA/zh-cn_image_0000002701819294.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=226ACF4A2AAC953512C8705D6CC3B67B1A21BD6687FB96C2E51868EEA5DEB791)

  * justifyContent(FlexAlign.SpaceAround)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceAround)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/AzsxVhNYQBikDLXHc0ycJQ/zh-cn_image_0000002731538575.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=F5362A5B480DCFC9159EAE841940A185392434EDE0B3F58723F27965F5757756)

  * justifyContent(FlexAlign.SpaceEvenly)：水平方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceEvenly)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/ruSikX8RRLyUW5PqF54egg/zh-cn_image_0000002701659384.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=FB4DFFB033E2062A2455A856E8F793B568C405549D0785C6D8699CAEDD012D25)




#### 自适应拉伸

在线性布局下，常用空白填充组件[Blank](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-blank-divider-blank)，在容器主轴方向自动填充空白空间，达到自适应拉伸效果。Row和Column作为容器，只需要添加宽高为百分比，当屏幕宽高发生变化时，会产生自适应效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Row() {
                    Text('Bluetooth').fontSize(18)
                    Blank()
                    Toggle(ToggleType.Switch, isOn: true)
                }
                    .backgroundColor(0xFFFFFF)
                    .borderRadius(15)
                    .padding(left: 12)
                    .width(100.percent)
            }
                .backgroundColor(0xEFEFEF)
                .padding(20)
                .width(100.percent)
        }
    }

**图9** 自适应拉伸下的竖屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/9PxmuCMlST2h-_gPcewZFg/zh-cn_image_0000002731378599.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=9523DEBC1E2AB92046639E58DC2AA51BE67D9FE9561652EDE79A70FF23BC953B)

**图10** 自适应拉伸下的横屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/q8XZuPM_SGSHm27eP_SCOQ/zh-cn_image_0000002701819296.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=29E1FABE9D7EF2F470E874A070A6797E1B37ED884A07386F85E476F7101D32C0)

#### 自适应缩放

自适应缩放是指子元素随容器尺寸的变化而按照预设的比例自动调整尺寸，适应各种不同大小的设备。在线性布局中，可以使用以下两种方法实现自适应缩放。

  * 父容器尺寸确定时，使用layoutWeight属性设置子元素和兄弟元素在主轴上的权重，忽略元素本身尺寸设置，使它们在任意尺寸的设备下自适应占满剩余空间。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Text('1:2:3').width(100.percent)
                    Row() {
                        Column() {
                            Text('layoutWeight(1)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(1)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(2)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(2)
                            .backgroundColor(0xD2B48C)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(3)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(3)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                    }
                        .backgroundColor(0xffd306)
                        .height(30.percent)
                    Text('2:5:3').width(100.percent)
                    Row() {
                        Column() {
                            Text('layoutWeight(2)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(2)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(5)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(5)
                            .backgroundColor(0xD2B48C)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(3)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(3)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                    }
                        .backgroundColor(0xffd306)
                        .height(30.percent)
                }
            }
        }

**图11** 自定义缩放下使用layoutWeight属性设置的横屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/ei5qZjK1TS2C_qIlEJLFnA/zh-cn_image_0000002731538577.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=1836A3BAE5AE069DCEE48B7C057DA26B9ED976C571044B10EC268201A24FCAA6)

**图12** 自定义缩放下使用layoutWeight属性设置的竖屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/vBg9ejYET62m2gycvgvqWw/zh-cn_image_0000002701659386.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=500372C87EC1CCA1C7210689B75F1125E3BE9251C663EA17EA5554F4E6600ED7)

  * 父容器尺寸确定时，使用百分比设置子元素和兄弟元素的宽度，使之在任意尺寸的设备下保持固定的自适应占比。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Row() {
                        Column() {
                            Text('left width 20%').textAlign(TextAlign.Center)
                        }
                            .width(20.percent)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                        Column() {
                            Text('center width 50%').textAlign(TextAlign.Center)
                        }
                            .width(50.percent)
                            .backgroundColor(0xD2B48C)
                            .height(100.percent)
                        Column() {
                            Text('right width 30%').textAlign(TextAlign.Center)
                        }
                            .width(30.percent)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                    }
                        .backgroundColor(0xffd306)
                        .height(30.percent)
                }
            }
        }

**图13** 自定义缩放下使用百分比设置的横屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/T7Q6bCr9SsGjQO6Tdxv8XQ/zh-cn_image_0000002731378601.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=37702E279F10D48945CBA16EA51421ADDF1CD8BF742E4497B5E5F1EC1CFBD0F8)

**图14** 自定义缩放下使用百分比设置的竖屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6e/v3/kFNRehPjSNC3pSvl2cDGwQ/zh-cn_image_0000002701819298.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=436CBC61715A7DFC739D139434B3029DB53944FEA711DB4B86548C92B4D8EEB6)




#### 自适应延伸

自适应延伸是指在不同尺寸设备下，当页面的内容超出屏幕大小而无法完全显示时，可以通过滚动条进行拖动展示。这种方法适用于线性布局中内容无法一屏展示的场景。通常有以下两种实现方式。

  * [在List中添加滚动条](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-list)：当List子项过多一屏放不下时，可以将每一项子元素放置在不同的组件中，通过滚动条进行拖动展示。可以通过scrollBar属性设置滚动条的常驻状态。

  * 使用Scroll组件：在线性布局中，开发者可以进行垂直方向或者水平方向的布局。当一屏无法完全显示时，可以在Column或Row组件的外层包裹一个可滚动的容器组件Scroll来实现可滑动的线性布局。

垂直方向布局中使用Scroll组件：
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            let scroller: Scroller = Scroller()
            private var arr: Array<Int64> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            func build() {
                Scroll(this.scroller) {
                    Column() {
                        ForEach(
                            this.arr,
                            itemGeneratorFunc: {
                                item: Int64, idx: Int64 => Text(item.toString())
                                    .width(90.percent)
                                    .height(150)
                                    .backgroundColor(0xFFFFFF)
                                    .borderRadius(15)
                                    .fontSize(16)
                                    .textAlign(TextAlign.Center)
                                    .margin(top: 10)
                            },
                            keyGeneratorFunc: {item: Int64, idx: Int64 => idx.toString()}
                        )
                    }.width(100.percent)
                }
                    .backgroundColor(0xDCDCDC)
                    .scrollable(ScrollDirection.Vertical) // 滚动方向为垂直方向
                    .scrollBar(BarState.On) // 滚动条常驻显示
                    .scrollBarColor(Color.Gray) // 滚动条颜色
                    .scrollBarWidth(8.vp) // 滚动条宽度
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/wXc4l0V0RlmLU98FOtxMWw/zh-cn_image_0000002731538579.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=6FBD53E90D90C395856965FB44CAE1A2DA2CF52AA4EC99F7B3AFC8481FA8291A)

水平方向布局中使用Scroll组件：
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            let scroller: Scroller = Scroller()
            private var arr: Array<Int64> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            func build() {
                Scroll(this.scroller) {
                    Row() {
                        ForEach(
                            this.arr,
                            itemGeneratorFunc: {
                                item: Int64, idx: Int64 => Text(item.toString())
                                    .width(150)
                                    .height(90.percent)
                                    .backgroundColor(0xFFFFFF)
                                    .borderRadius(15)
                                    .fontSize(16)
                                    .textAlign(TextAlign.Center)
                                    .margin(left: 10)
                            }
                        )
                    }.height(100.percent)
                }
                    .backgroundColor(0xDCDCDC)
                    .scrollable(ScrollDirection.Horizontal) // 滚动方向为水平方向
                    .scrollBar(BarState.On) // 滚动条常驻显示
                    .scrollBarColor(Color.Gray) // 滚动条颜色
                    .scrollBarWidth(8.vp) // 滚动条宽度
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/gf_4WkPzQ0Wni5ZXV33O8Q/zh-cn_image_0000002701659388.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=0458B38E6AF26104073EE0EDE3D57B3969208B7F64B09C5900AA511B41C14B33)



