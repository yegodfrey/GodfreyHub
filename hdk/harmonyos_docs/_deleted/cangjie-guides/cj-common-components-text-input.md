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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/Pp53m-zqRaqq3qYJ55akBQ/zh-cn_image_0000002701659456.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=6F865940D0DFBC75A04626C5CE59CD86EDBBE71A9227EF4D533C448E1FB09823)

  * 多行输入框。
        
        TextArea()

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/Ojnb02DqQbqjHC1ScxbFeA/zh-cn_image_0000002731378671.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=94A8B6D3A7D96ACCD34D1A07FD0005F56A884E2758A6DDD1413AE808BDC74FFC)

  * 多行输入框文字超出一行时会自动折行。
        
        TextArea(text: "我是TextArea我是TextArea我是TextArea我是TextArea" ).width(300)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/Q3DnpJslTfWPFdvfsMJfBQ/zh-cn_image_0000002701819368.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=C3DBE8B2A906E0AE26050345E6CF51C61CEFB4801B28044D6673B2D4D817D319)




#### 自定义样式

  * 设置无输入时的提示文本。
        
        TextInput(placeholder: '我是提示文本')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/RLE7xSlvSkekM47JmUnseg/zh-cn_image_0000002731538649.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=F3D4D1B941AD537A200403C5B667C1C6B7443F2A7BC810BD2ACFC2D131886CC8)

  * 设置输入框当前的文本内容。
        
        TextInput( placeholder: '我是提示文本', text: '我是当前文本内容' )

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/LhhbmKjHRVSa5Opmlr8aFQ/zh-cn_image_0000002701659458.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=B6CFBA25823B98FDB5097C3197CF64082D67000639289B4FFD3E7ECBCE488EF4)

  * 添加backgroundColor改变输入框的背景颜色。
        
        TextInput( placeholder: '我是提示文本', text: '我是当前文本内容' )
        .backgroundColor(0x4D0A59F7)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/xL3liE5ZQqmX4igYWltvJA/zh-cn_image_0000002731378673.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=724D2E7B71C3206909B7994EE949DD516E02994F3DA87137F57B7086898C6884)

更丰富的样式可以结合[通用属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attributes)实现。




#### 选中菜单

输入框中的文字被选中时会弹出包含剪切、复制、翻译的菜单。

TextInput:
    
    
    TextInput( text: '这是一段文本，用来展示选中菜单')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/BRzu-c6iShqwbBy8K2QhXQ/zh-cn_image_0000002701819370.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=8B6EEB28D4D33EECEDE18C51874E208AF4854377206FF985C8E3C16164409873)

TextArea:
    
    
    TextArea( text: '这是一段文本，用来展示选中菜单')

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/fStrMT7qQAy9AhsmE1AZcg/zh-cn_image_0000002701819370.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=2C8193CD7914FF4E96AB14D8A9ABE56E848E7E6975A12DE40399809EBE09A8A6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/2oww3GD2QcaTipih5BxRiQ/zh-cn_image_0000002731538651.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=3CD0E1C83B0DFD5202274486BA071B40D7A4B218BDDABC070FE6965075E4770C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/z5G4udkVQTufCtWSa3ngZw/zh-cn_image_0000002701659460.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=D0E545B30A66E38013501A035DBAA5F59F373625830A4E3FA9856BBFF87D1999)
