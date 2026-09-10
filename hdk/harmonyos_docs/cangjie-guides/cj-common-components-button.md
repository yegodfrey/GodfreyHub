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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/0QZqsywtTz6eI89ON04zuw/zh-cn_image_0000002713558748.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=76A6BC1FDB53EFE1727B7F734AF7E681B6F56B9DFA7BD1F3AF54A2A80D1CA0B3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/agm32ZhBSQCKjpWTxh2WTQ/zh-cn_image_0000002743197661.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=AE7D6E3FCD05343E0FF09122BCBBE0179047B665CBFBC8F10259BB85E9BA5C69)




#### 设置按钮类型

Button有四种可选类型，分别为胶囊类型（Capsule）、圆形按钮（Circle）、普通按钮（Normal）和圆角矩形按钮（ROUNDED_RECTANGLE），通过shape进行设置。

  * 胶囊按钮（默认类型）。

此类型按钮的圆角自动设置为高度的一半，不支持通过borderRadius属性重新设置圆角。
        
        Button('Disable', ButtonOptions(shape: ButtonType.Capsule, stateEffect: false))
            .backgroundColor(0x317aff)
            .width(90)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/KPx2xUEHTNWH6D4EXlmsqQ/zh-cn_image_0000002713398780.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E44C92AF12FB327D4BD19A930E6350D1DC321E9417CDE0022434D0417BA97B16)

  * 圆形按钮。

此类型按钮为圆形，不支持通过borderRadius属性重新设置圆角。
        
        Button('Circle', ButtonOptions(shape: ButtonType.Circle, stateEffect: false))
            .backgroundColor(0x317aff)
            .width(90)
            .height(90)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/MD5BXY51QAe0LdcG8O2xrw/zh-cn_image_0000002743077711.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=CF6D2FE3526D960BA4270A12F208DCD2F4E2C8AE714D3B509900CCE91A0BAFBC)

  * 普通按钮。

此类型的按钮默认圆角为0，支持通过[borderRadius](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)属性重新设置圆角。
        
        Button('Ok', ButtonOptions(shape: ButtonType.Normal, stateEffect: true))
            .borderRadius(8)
            .backgroundColor(0x317aff)
            .width(90)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/do8Pl770RnaU4TDpOCQ3JQ/zh-cn_image_0000002713558750.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=563EFDBA356199058058FE3DD44F58B144CD859B64C4DA8031E7D64AD05B2A80)




#### 自定义样式

  * 设置边框弧度。

使用通用属性来自定义按钮样式。例如通过[borderRadius](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses)属性设置按钮的边框弧度。
        
        Button('circle border', ButtonOptions(shape: ButtonType.Normal))
            .borderRadius(20)
            .height(40)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/p0c2RWNlT7CptFp1qa7zEw/zh-cn_image_0000002743197663.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=F349E9F6A9613C9A21EF7F0FE49D64363985304F46E864831FDD8D46F11E8BB1)

  * 设置文本样式。

通过添加文本样式设置按钮文本的展示样式。
        
        Button('font style', ButtonOptions(shape: ButtonType.Normal))
            .fontSize(20)
            .fontColor(0xffffc0cb)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/RwxkuyCqS42UWXptMj20zg/zh-cn_image_0000002713398782.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=CE45AD3C4B05EDB9B33E5BB1341AECD86EAEEAC5A2189859C44FE35FF61701C4)

  * 设置背景颜色。

添加[backgroundColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-background#func-backgroundcolorresourcecolor)属性设置按钮的背景颜色。
        
        Button('background color').backgroundColor(0xF55A42)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/DWxjBRw9S22ENkSuqHRqew/zh-cn_image_0000002743077713.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=733AE41FBC223934529CC3C2AAE79C97272494FD184994AA144C86874138EF43)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/ZgF8vXvmSJmUiw3HS6PPBw/zh-cn_image_0000002713558752.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=15E47B118C3A70A9392F051163BE5F679FDF0F4B91A7C99861844B31AEA20C50)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/jTxBaPp4QkiXfhNGbH9l7A/zh-cn_image_0000002743197665.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B198D13E4A27B4CC35DCBE67E12A2F63C73B0F8398FDEA2B0BAAAEF6ADBB6BF8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/YzjpIqOLTUSMWnX7ggAD6A/zh-cn_image_0000002713398784.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=97F58B09486B91F6D1866497034E8039158B8CC57BFEA2E035AE1D8D64D273CD)



