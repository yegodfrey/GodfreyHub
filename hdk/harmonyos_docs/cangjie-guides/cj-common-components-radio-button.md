---
name: cangjie-guides/cj-common-components-radio-button
title: 单选框（Radio）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-radio-button
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 表单选择 / 单选框（Radio）
---

# 单选框（Radio）

Radio是单选框组件，通常用于提供相应的用户交互选择项，同一组的Radio中只有一个可以被选中。具体用法请参见[Radio](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-radio)。

#### 创建单选框

Radio通过调用接口来创建，接口调用形式如下：
    
    
    init(value!: String, group!: String, indicatorType!: RadioIndicatorType = RadioIndicatorType.TICK,
    indicatorBuilder!: Option<() -> Unit> = Option.None)

其中，value是单选框的名称，group是单选框的所属群组名称，indicatorType是单选框的选中样式，indicatorBuilder表示配置单选框的选中样式为自定义组件。

checked属性可以设置单选框的状态，状态分别为false和true，设置为true时表示单选框被选中。

Radio支持设置选中状态和非选中状态的样式。
    
    
    Radio(value: 'Radio1', group: 'radioGroup')
        .checked(false)
    Radio(value: 'Radio2', group: 'radioGroup')
        .checked(true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/uv0wOSMuRhaAMcbtOTLM5A/zh-cn_image_0000002743077715.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=40B17D35F57D90C700FE62B47B9E7B81E921171A68A3938BDDB03D37BA527479)

#### 添加事件

除支持[通用事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click)外，Radio还用于选中后触发某些操作，可以绑定onChange事件来响应选中操作后的自定义行为。
    
    
    Radio(value: 'Radio1', group: 'radioGroup')
        .onChange({ isChecked =>
            if(isChecked) {
            //需要执行的操作
            }
        })
    Radio(value: 'Radio2', group: 'radioGroup')
        .onChange({ isChecked =>
            if(isChecked) {
            //需要执行的操作
            }
        })

#### 场景示例

通过点击Radio切换声音模式。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.arkui.ui_context.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                Column() {
                    Radio(value: 'Radio1', group: 'radioGroup')
                        .checked(true)
                        .height(50)
                        .width(50)
                        .onChange({
                            isChecked => if (isChecked) {
                                // 切换为响铃模式
                                getUIContext()
                                    .getPromptAction()
                                    .showToast(ShowToastOptions(message: 'Ringing mode.'))
                            }
                        })
                    Text('Ringing')
                }
                Column() {
                    Radio(value: 'Radio2', group: 'radioGroup')
                        .height(50)
                        .width(50)
                        .onChange({
                            isChecked => if (isChecked) {
                                // 切换为振动模式
                                getUIContext()
                                    .getPromptAction()
                                    .showToast(ShowToastOptions(message: 'Vibration mode.'))
                            }
                        })
                    Text('Vibration')
                }
                Column() {
                    Radio(value: 'Radio3', group: 'radioGroup')
                        .height(50)
                        .width(50)
                        .onChange({
                            isChecked => if (isChecked) {
                                // 切换为静音模式
                                getUIContext()
                                    .getPromptAction()
                                    .showToast(ShowToastOptions(message: 'Silent mode.'))
                            }
                        })
                    Text('Silent')
                }
            }
                .height(100.percent)
                .width(100.percent)
                .justifyContent(FlexAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/HohNY6UES_GxCeTUIlsepw/zh-cn_image_0000002713558754.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=3C1F85D3D2D7EC16CA0C72BFD2A679DF3E6D7AEC430E6F8274DC23BC7638013F)
