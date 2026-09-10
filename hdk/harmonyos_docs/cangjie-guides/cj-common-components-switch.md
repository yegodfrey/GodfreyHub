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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/McoL2AuKRsWHijOgDXrLIw/zh-cn_image_0000002743197667.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=0ABC8AB5E88E26C0593D65F3556C2B2AF9963CD716E5317E582337DEDD1FB7A0)
        
        Toggle(ToggleType.Switch, isOn: false)
        Toggle(ToggleType.Switch, isOn: true)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/fjE3WpMeTYuWaEr8jabMGw/zh-cn_image_0000002713398786.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=1A0EB3C43B64DC048D7D2938FAFF331896C2163FD1DACA15ACE8633D68E3D3A7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/xQco2pglQUGzA0h_am1lTA/zh-cn_image_0000002743077717.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=61A40CB5B1996CE06D1C7F306A0BF117A47E0B70EDF9450F20DDA902546CB60C)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/S-9UoTKdRFKzCn31Z1cjYA/zh-cn_image_0000002713558756.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=684741C3D004F64115679196F05D99BACC9A51F5A480D84A1D734C9B9128A4AC)

  * 通过switchPointColor属性设置Switch类型的圆形滑块颜色，仅对toggleType为ToggleType.Switch生效。
        
        Toggle(ToggleType.Switch, isOn: false).switchPointColor(0xFEC0CD)
        Toggle(ToggleType.Switch, isOn: true).switchPointColor(0xFEC0CD)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/HhcNbI-uQs-UZYnjpsOFeg/zh-cn_image_0000002743197669.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=4F0BA2B071A09B261BA52C3A1C511B84FAF014B8344678880EF6EC0B85808382)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/r53PR0WWShCOcLROQNypww/zh-cn_image_0000002713398788.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=C447093E7D4717E015125972CEE7B303B3FC2B5AF28307BBE5ADE29F033F1938)
