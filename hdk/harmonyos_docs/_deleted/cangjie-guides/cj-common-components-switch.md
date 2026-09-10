---
name: cangjie-guides/cj-common-components-switch
title: 切换按钮（Toggle）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-switch
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 表单选择 / 切换按钮（Toggle）
---

# 切换按钮（Toggle）

Toggle组件提供状态按钮样式、勾选框样式和开关样式，一般用于两种状态之间的切换。具体用法请参见[Toggle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-toggle)。

#### 创建切换按钮

Toggle通过调用接口来创建，接口调用形式如下：
    
    
    Toggle(toggleType: ToggleType, isOn!: Bool = false)

其中，ToggleType为开关类型，包括Button、Checkbox和Switch，isOn为切换按钮的状态。

接口调用有以下两种形式：

  * 创建不包含子组件的Toggle。

当ToggleType为Checkbox或者Switch时，用于创建不包含子组件的Toggle：
        
        Toggle(ToggleType.Checkbox, isOn: false)
        Toggle(ToggleType.Checkbox, isOn: true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/V0t30F9fSKGgxj8rRzQkQQ/zh-cn_image_0000002701819388.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=662C156691A36E0561ABDC08E9F440E145949C6646F3FA8D0AA3CBB1AA299AFA)
        
        Toggle(ToggleType.Switch, isOn: false)
        Toggle(ToggleType.Switch, isOn: true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/6rHkfzenSraGN4EQ44_1Hw/zh-cn_image_0000002731538669.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=23717735D909AE119114C182FAAED0CB864FF1038EC61BE3E2FB8A1F59F42B5B)

  * 创建包含子组件的Toggle。

当ToggleType为Button时，只能包含一个子组件，如果子组件有文本设置，则相应的文本内容会显示在按钮上。
        
        Toggle(ToggleType.Button, false) {
            Text('status button')
                .fontColor(0x182431)
                .fontSize(12)
        }.width(100)
        Toggle(ToggleType.Button, true) {
            Text('status button')
                .fontColor(0x182431)
                .fontSize(12)
        }.width(100)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/H2mwUI-uQr-vTR5SrzajQA/zh-cn_image_0000002701659478.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=5A7B0EDE2BD3A1AE9C5130FE736C194C8D97106A7430563963774C905B6706C8)




#### 自定义样式

  * 通过selectedColor属性设置Toggle打开选中后的背景颜色。
        
        Toggle(ToggleType.Button, true) {
            Text('status button')
                .fontColor(0x182431)
                .fontSize(12)
        }
            .width(100)
            .selectedColor(0xFEC0CD)
        Toggle(ToggleType.Checkbox, isOn: true).selectedColor(0xFEC0CD)
        Toggle(ToggleType.Switch, isOn: true).selectedColor(0xFEC0CD)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/uMAGHhnMQn2_wqHnA7wgEg/zh-cn_image_0000002731378693.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=4981EB1B19EBD07B500D65678E062AF7DB2A478EA4E78B5C747D6065994A1778)

  * 通过switchPointColor属性设置Switch类型的圆形滑块颜色，仅对toggleType为ToggleType.Switch生效。
        
        Toggle(ToggleType.Switch, isOn: false).switchPointColor(0xFEC0CD)
        Toggle(ToggleType.Switch, isOn: true).switchPointColor(0xFEC0CD)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/nKptl0F4S6-M5jqxHmmdOw/zh-cn_image_0000002701819390.png?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=1373A03A6A4D1C6C717E30AED172EC41640377EBBFF85E83D597566F526CAC22)




#### 添加事件

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-events)外，Toggle还用于选中和取消选中后触发某些操作，可以绑定onChange事件来响应操作后的自定义行为。
    
    
    Toggle(ToggleType.Switch, isOn: false)
        .onChange ({
            isOn => if (isOn) {
                // 需要执行的操作
            }
        })

#### 场景示例

Toggle用于切换蓝牙开关状态。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.ui_context.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Row() {
                    Text("Bluetooth Mode")
                        .height(50)
                        .fontSize(16)
                }
                Row() {
                    Text("Bluetooth")
                        .height(50)
                        .padding(left: 10)
                        .fontSize(16)
                        .textAlign(TextAlign.Start)
                        .backgroundColor(0xFFFFFF)
                    Toggle(ToggleType.Switch)
                        .margin(left: 200, right: 10)
                        .onChange({
                            isOn => if (isOn) {
                                getUIContext()
                                    .getPromptAction()
                                    .showToast(ShowToastOptions(message: 'Bluetooth is on.'))
                            } else {
                                getUIContext()
                                    .getPromptAction()
                                    .showToast(ShowToastOptions(message: 'Bluetooth is off.'))
                            }
                        })
                }.backgroundColor(0xFFFFFF)
            }
                .padding(10)
                .backgroundColor(0xDCDCDC)
                .width(100.percent)
                .height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/oYLkdA_HS1KE6ucpBw1FWA/zh-cn_image_0000002731538671.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111601Z&HW-CC-Expire=86400&HW-CC-Sign=F603708D639674C9358D66189D4DDF246554ACB0D92E17467B88AAD587F6D859)
