---
name: cangjie-guides/cj-common-components-text-input
title: 文本输入（TextInput/TextArea）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-text-input
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用文本 / 文本输入（TextInput/TextArea）
---

# 文本输入（TextInput/TextArea）

TextInput、TextArea是输入框组件，通常用于响应用户的输入操作，比如评论区的输入、聊天框的输入、表格的输入等，也可以结合其它组件构建功能页面，例如登录注册页面。具体用法请参见[TextInput](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-textinput)、[TextArea](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-text-input-textarea)。

#### 创建输入框

TextInput为单行输入框、TextArea为多行输入框。通过以下接口来创建。
    
    
    init(placeholder!: ?ResourceStr = None, text!: ?ResourceStr = None, controller!: ?TextInputController = None)
    
    
    init(placeholder!: ?ResourceStr = None, text!: ?ResourceStr = None,controller!: ?TextAreaController = None)

  * 单行输入框。
        
        TextInput()

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/olJoPqUuQGSFuXgj2C1oew/zh-cn_image_0000002743077695.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=D12444A0F56E12142DF41CCE2CFDCF1FCFF4874008227F0A3A28083515B37382)

  * 多行输入框。
        
        TextArea()

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/Zuliov9-TkqrygFEoZrQRQ/zh-cn_image_0000002713558734.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4243A4902BE06ED1B2E87940EA15978DAC57BE16512E1DD316EEAB1543A449BD)

  * 多行输入框文字超出一行时会自动折行。
        
        TextArea(text: "我是TextArea我是TextArea我是TextArea我是TextArea" ).width(300)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/8XvopEO0TsaFrGCe8KNc9w/zh-cn_image_0000002743197647.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=2B56270787A929157574FD9F1378B14899DAF4BA6CA4912B888F27E350F2CCE2)




#### 自定义样式

  * 设置无输入时的提示文本。
        
        TextInput(placeholder: '我是提示文本')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/SfGwCynITxeCzfwN2VoQsg/zh-cn_image_0000002713398766.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=04DB1EDEB529BB486B9AA9FBB1679F777C334AA2A4638963B1E148927DB97C89)

  * 设置输入框当前的文本内容。
        
        TextInput( placeholder: '我是提示文本', text: '我是当前文本内容' )

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/nAglEjdAT3C2XIyTJaQmVw/zh-cn_image_0000002743077697.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=73B90373ABA59D58F4EA77ECF90DBD4593E1C618F24A385515FD50153275FCD0)

  * 添加backgroundColor改变输入框的背景颜色。
        
        TextInput( placeholder: '我是提示文本', text: '我是当前文本内容' )
        .backgroundColor(0x4D0A59F7)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/U6qDI-fIR5G4R9WRlqkPBw/zh-cn_image_0000002713558736.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=344E0204FF76845799FD0BFD4DBB227DE3A6F1FC73B2899E479107A5D79F4149)

更丰富的样式可以结合[通用属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attributes)实现。




#### 选中菜单

输入框中的文字被选中时会弹出包含剪切、复制、翻译的菜单。

TextInput:
    
    
    TextInput( text: '这是一段文本，用来展示选中菜单')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/Xf9IXXYwRaCXIu2fmStIWQ/zh-cn_image_0000002743197649.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=80A3F1A625A8D1B6709262595E2D2E4A5B07EA133E5800B8C406E48B9A7B7832)

TextArea:
    
    
    TextArea( text: '这是一段文本，用来展示选中菜单')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/Hv_PgS1MSxKfonRQRTFTcQ/zh-cn_image_0000002743197649.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4BB3C444D686DBE5FCAC902AC670BB0BA53CF291D858EA33CB39A185C18BA54B)

#### 键盘避让

键盘抬起后，具有滚动能力的容器组件在横竖屏切换时，才会生效键盘避让，若希望无滚动能力的容器组件也生效键盘避让，建议在组件外嵌套一层具有滚动能力的容器组件，比如[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)、[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        var placeHolderArr: Array<String> = ["1", "2", "3", "4", "5", "6", "7"];
        func build() {
            Scroll() {
                Column {
                    ForEach(
                        this.placeHolderArr,
                        itemGeneratorFunc: {
                            placeholder: String, _: Int64 => TextInput(placeholder: 'TextInput ' + placeholder).margin(30)
                        }
                    )
                }
            }
                .height(100.percent)
                .width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/tg2pz55UTDK05GwgHFhRQA/zh-cn_image_0000002713398768.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=807B63D07E533402FC81C9F117BA96A9B823F814C5F65D19684AA9BF0F1A9344)

#### 常见问题

#### [h2]如何设置TextArea的文本最少展示行数并自适应高度

**问题现象**

设置TextArea的初始高度来控制最少文本展示行数，当输入文本超过初始高度时，TextArea的高度自适应。

**解决措施**

设置height为LengthMetrics.AUTO，并使用constraintSize自行计算高度。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        let textAreaPadding = 12.0
        let setMaxLines = 3.0
        let changeText = "Add TextArea \n"
        @State var fullText: String = this.changeText
        @State var originText: String = this.changeText
    
        func build() {
            Column() {
                TextArea(text: 'constraintSize: ' + this.fullText)
                .fontSize(18)
                .padding(this.textAreaPadding)
                .width(300)
                .height(LengthMetrics.AUTO)
                .constraintSize(
                    // 结合padding计算，设置至少显示this.setMaxLines行文本
                    // 若涉及适老化字号缩放，需要监听并调整高度
                    minHeight: (this.textAreaPadding * 2.0 + this.setMaxLines * 21.0)
                )
    
                Blank(min: 50)
                Button("Input something")
                .onClick({ evt =>
                    this.fullText += this.changeText
                })
            }
            .justifyContent(FlexAlign.Center)
            .width(100.percent)
            .padding(top: 30)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/QVDrUX0ZQmeBKLasyzojHw/zh-cn_image_0000002743077699.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=53F7A62B9B505D8E06513D9DEEA7BCAF6B9ED5889E3246A2C5FA467944631854)
