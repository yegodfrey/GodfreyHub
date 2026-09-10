---
name: cangjie-guides/cj-create-toast
title: 即时反馈（Toast）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-create-toast
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 即时反馈（Toast）
---

# 即时反馈（Toast）

即时反馈（Toast）是一种临时性的消息提示框，用于向用户显示简短的操作反馈或状态信息。​它通常在屏幕的底部或顶部短暂弹出，随后在一段时间后自动消失。即时反馈的主要目的是提供简洁、不打扰的信息反馈，避免干扰用户当前的操作流程。

可以通过使用[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext)中的[getPromptAction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-getpromptaction)方法获取当前UI上下文关联的[PromptAction](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-promptaction)对象，再通过该对象调用[showToast](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-promptaction#func-showtoastshowtoastoptions)创建并显示文本提示框。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/eTAvS15jQXuB7eRPJYYLDQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=6F76139E71402597F914FE3091C485E188060CCA63FF667B18BB5D42DDFD8185)

为了安全考虑，例如Toast恶意遮挡其他页面，Toast只能显示在当前的UI实例中，应用退出后，不会单独显示在桌面上。

#### 使用建议

  * 合理使用弹出场景，而不是频繁的提醒用户。

可以针对以下常用场景使用即时反馈操作。例如，当用户执行某个操作时及时结果反馈，用来提示用户操作是否成功或失败；或是当应用程序的状态发生变化时提供状态更新等。

  * 注意文本的信息密度，即时反馈展示时间有限，应当避免长文本的出现。

Toast控件的文本应该清晰可读，字体大小和颜色应该与应用程序的主题相符。除此之外，即时反馈控件本身不应该包含任何可交互的元素，如按钮或链接。

  * 杜绝强制占位和密集弹出的提示。

即时反馈作为应用内的轻量通知，应当避免内容布局占用界面内的其他元素信息，如遮盖弹出框的展示内容，从而迷惑用户弹出的内容是否属于弹出框。再或者频繁性的弹出信息内容，且每次弹出之间无时间间隔，影响用户的正常使用。也不要在短时间内频繁弹出新的即时反馈替代上一个。即时反馈的单次显示时长不要超过 3 秒钟，避免影响用户正常的行为操作。

  * 遵从系统默认弹出位置。

即时反馈在系统中默认从界面底部弹出，距离底部有一定的安全间距，作为系统性的应用内提示反馈，请遵守系统默认效果，避免与其他弹出类组件内容重叠。特殊场景下可对内容布局进行规避。

  * 弹框字体最大放大倍数限制。

即时反馈中，字体的最大放大倍数为2。




#### 即时反馈模式对比

即时反馈提供了两种显示模式，分别为Default（显示在应用内）、TopMost（显示在应用之上）。

在TopMost类型的Toast显示前，会创建一个全屏大小的子窗（终端上子窗大小和主窗大小一致），然后在该子窗上计算Toast的布局位置，最后显示在该子窗上。具体和Default模式Toast的差异如下：

差异点 | Default | TopMost  
---|---|---  
是否创建子窗 | 否 | 是  
层级 | 显示在主窗内，层级和主窗一致，一般比较低 | 显示在子窗中，一般比主窗层级高，比其他弹窗类组件层级高，比软键盘和权限弹窗层级低。  
是否避让软键盘 | 软键盘抬起时，必定上移软键盘的高度。 | 软键盘抬起时，只有toast被遮挡时，才会避让，且避让后toast底部距离软键盘高度为80.vp。  
      
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.ui_context.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Blank().height(10.percent)
                Button() {
                    Text("Default类型Toast")
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                        .fontColor(Color.White)
                }
                    .onClick({
                        evt => getUIContext()
                            .getPromptAction()
                            .showToast(
                                ShowToastOptions(
                                    message: "ok，我是Default toast",
                                    duration: 2000,
                                    bottom: 72.percent,
                                    showMode: ToastShowMode.Default
                                )
                            )
                    })
                    .align(Alignment.Center)
                    .backgroundColor(0x0a59f7)
                    .width(80.percent)
                    .height(30.vp)
    
                Blank().height(2.percent)
                Button() {
                    Text("TopMost类型Toast")
                        .fontSize(20)
                        .fontWeight(FontWeight.Bold)
                        .fontColor(Color.White)
                }
                    .onClick({
                        evt => getUIContext()
                            .getPromptAction()
                            .showToast(
                                ShowToastOptions(
                                    message: "ok，我是TopMost toast",
                                    duration: 2000,
                                    bottom: 70.percent,
                                    showMode: ToastShowMode.TopMost
                                )
                            )
                    })
                    .backgroundColor(0x0a59f7)
                    .width(80.percent)
                    .height(30.vp)
            }
                .size(width: 100.percent, height: 100.percent)
                .alignItems(HorizontalAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1e/v3/5e8nwUriTiWtj-6ujPgU6Q/zh-cn_image_0000002731378709.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=6A8ADBED4C0ED7184FE62CE0B4880F135B4F11A73B9BC213E597D19736558D94)

#### 创建即时反馈

适用于短时间内提示框自动消失的场景。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.ui_context.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Button("Show toast")
                    .fontSize(20)
                    .onClick({
                        evt => getUIContext()
                            .getPromptAction()
                            .showToast(
                                ShowToastOptions(
                                    message: "Hello World",
                                    bottom: 35.percent,
                                    duration: 2000
                                )
                            )
                    })
            }
                .size(width: 100.percent, height: 100.percent)
                .justifyContent(FlexAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/ThVdSJGIRNekk65Qgt-uYQ/zh-cn_image_0000002701819406.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=3EB4BCC355D978403D1498BF24D84176C32DCD1788CF58531C9EBEB42E64899D)
