---
name: cangjie-guides/cj-common-components-button
title: 按钮（Button）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-button
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 表单选择 / 按钮（Button）
---

# 按钮（Button）

Button是按钮组件，通常用于响应用户的点击操作，其类型包括胶囊按钮、圆形按钮、普通按钮。Button作为容器使用时可以通过添加子组件实现包含文字、图片等元素的按钮。具体用法请参见[Button](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-button)。

#### 创建按钮

Button通过调用接口来创建，接口调用有以下两种形式：

  * 通过label和[ButtonOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-button#class-buttonoptions)创建不包含子组件的按钮。以ButtonOptions中的shape和stateEffect为例。
        
        init(label: String, options: ButtonOptions)

其中，label用来设置按钮文字，type用于设置Button类型，stateEffect属性设置Button是否开启点击效果。
        
        Button('Ok', ButtonOptions(shape: ButtonType.Normal, stateEffect: true))
            .borderRadius(8)
            .backgroundColor(0x317aff)
            .width(90)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/Bk_JOk_GQIOptiL1Z1XdzQ/zh-cn_image_0000002731378685.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=8C9CD984CFDC93AF306A9DF4478A45816BCB2C7618A4E496D02782EC8EB467CA)

  * 通过[ButtonOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-button#class-buttonoptions)创建包含子组件的按钮。以ButtonOptions中的shape和stateEffect为例。
        
        init(options: ButtonOptions, content: () -> Unit)

只支持包含一个子组件，子组件可以是基础组件或者容器组件。
        
        Button(ButtonOptions(shape: ButtonType.Normal, stateEffect: true)){
            Row() {
                Image(@r(app.media.loading)).width(20).height(40).margin(left: 12)
                Text('loading').fontSize(12).fontColor(0xffffff).margin(left: 5, right: 12)
            }.alignItems(VerticalAlign.Center)
        }
        .borderRadius(8)
        .backgroundColor(0x317aff)
        .width(90)
        .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/x16T5HAxTlSRfeDnmrUO0g/zh-cn_image_0000002701819382.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=68AC08C8F516D3553CF693CDA7DD1F023F8EB6509C94359821BA27F336EE14F2)




#### 设置按钮类型

Button有四种可选类型，分别为胶囊类型（Capsule）、圆形按钮（Circle）、普通按钮（Normal）和圆角矩形按钮（ROUNDED_RECTANGLE），通过shape进行设置。

  * 胶囊按钮（默认类型）。

此类型按钮的圆角自动设置为高度的一半，不支持通过borderRadius属性重新设置圆角。
        
        Button('Disable', ButtonOptions(shape: ButtonType.Capsule, stateEffect: false))
            .backgroundColor(0x317aff)
            .width(90)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/n_CubPfWRKu0yvuD0FMlxw/zh-cn_image_0000002731538663.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=ACB8CBFA526E86A98EF652D74ABC0E8852406602F58DA033A13BC25562078944)

  * 圆形按钮。

此类型按钮为圆形，不支持通过borderRadius属性重新设置圆角。
        
        Button('Circle', ButtonOptions(shape: ButtonType.Circle, stateEffect: false))
            .backgroundColor(0x317aff)
            .width(90)
            .height(90)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/Us5UUeRUTEmTw2tY-EWK7A/zh-cn_image_0000002701659472.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=DDFA145D00DD9442E269D8466334A67006A16210F044DE1E6563CBA96A3D9A78)

  * 普通按钮。

此类型的按钮默认圆角为0，支持通过[borderRadius](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)属性重新设置圆角。
        
        Button('Ok', ButtonOptions(shape: ButtonType.Normal, stateEffect: true))
            .borderRadius(8)
            .backgroundColor(0x317aff)
            .width(90)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/YmcO4BHnRQyn8Aeu2_2zyw/zh-cn_image_0000002731378687.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=20BCE4129516CC562D5CB77D9CDEA9ABD70654E2FB2F8510017203874B8C5D69)




#### 自定义样式

  * 设置边框弧度。

使用通用属性来自定义按钮样式。例如通过[borderRadius](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)属性设置按钮的边框弧度。
        
        Button('circle border', ButtonOptions(shape: ButtonType.Normal))
            .borderRadius(20)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/cLvLOQFbSKyTP1pzuLDdPA/zh-cn_image_0000002701819384.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=F4DB173541DAC12E46EC1E90BFB717B701F1378295EB6F283B4FE9441542A2EE)

  * 设置文本样式。

通过添加文本样式设置按钮文本的展示样式。
        
        Button('font style', ButtonOptions(shape: ButtonType.Normal))
            .fontSize(20)
            .fontColor(0xffffc0cb)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/PpfsJZsFRuadfVfbq9_dAg/zh-cn_image_0000002731538665.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=A926143B43DE8BED1F3A744F89D1629FBBFE4A1191EBCAF0C3C43822885B4E00)

  * 设置背景颜色。

添加[backgroundColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-background#func-backgroundcolorresourcecolor)属性设置按钮的背景颜色。
        
        Button('background color').backgroundColor(0xF55A42)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/rdiXRGLQSDu2rOFZIIcFwg/zh-cn_image_0000002701659474.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=CAFBAB0022D20A1089A07779E633175BAF57584FDA58FC4E06333E104D8FD25F)

  * 创建功能型按钮。

为删除操作创建一个按钮。
        
        Button(ButtonOptions(shape: ButtonType.Circle, stateEffect: true)) {
            Image(@r(app.media.ic_public_delete_filled))
              .width(30)
              .height(30)
        }
        .width(55)
        .height(55)
        .margin(left:20)
        .backgroundColor(0xF55A42)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/HosKhqSkQn68rvSBCuJ3yQ/zh-cn_image_0000002731378689.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=8F1683818441C0FCD92AF33A21EED0B55341F6D3D1A41DCF011563089403D861)




#### 添加事件

Button组件通常用于触发某些操作，可以绑定[onClick](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click#func-onclickclickevent---unit)事件来响应点击操作后的自定义行为。
    
    
    Button('Ok', ButtonOptions(shape: ButtonType.Normal, stateEffect: true))
        .onClick({ evt =>
        Hilog.info(0, '', 'Button onClick')
    })

#### 场景示例

  * 用于提交表单。

在用户登录/注册页面，使用按钮进行登录或注册操作。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    TextInput(placeholder: 'input your username').margin(top: 20)
                    TextInput(placeholder: 'input your password').margin(top: 20)
                    Button('Register')
                        .width(300)
                        .margin(top: 20)
                        .onClick({
                            evt =>
                              // 需要执行的操作
                        })
                }.padding(20)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/PY93LoQMQPORwXY3ZtcBKA/zh-cn_image_0000002701819386.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=58A06D16F9ED26CD511A20F793C105793CB28CCF86EE8A34A594A3795B499BB2)

  * 悬浮按钮。

在可以滑动的界面，滑动时按钮始终保持悬浮状态。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        import kit.LocalizationKit.AppResource
        import ohos.resource.__GenerateResource__
        
        @Entry
        @Component
        class EntryView {
            private var arr: Array<Int64> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            func build() {
                Stack() {
                    List(space: 20, initialIndex: 0) {
                        ForEach(
                            this.arr,
                            itemGeneratorFunc: {
                                item: Int64, _: Int64 => ListItem() {
                                    Text("${item}")
                                        .width(100.percent)
                                        .height(100)
                                        .fontSize(16)
                                        .textAlign(TextAlign.Center)
                                        .borderRadius(10)
                                        .backgroundColor(0xFFFFFF)
                                }
                            }
                        )
                    }.width(90.percent)
        
                    Button() {
                        Image(@r(app.media.startIcon))
                            .width(50)
                            .height(50)
                    }
                        .shape(ButtonType.Circle)
                        .width(60)
                        .height(60)
                        .position(x: 80.percent, y: 600)
                        .shadow(radius: 10.0)
                        .onClick({
                            evt =>
                              // 需要执行的操作
                        })
                }
                    .width(100.percent)
                    .height(100.percent)
                    .backgroundColor(0xDCDCDC)
                    .padding(top: 5)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/iisWCF7CTxK58GGi61Xm_Q/zh-cn_image_0000002731538667.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=4851B07768CACA284702A9B56D9E1E25765232087174D717B48DF8341BE75216)



