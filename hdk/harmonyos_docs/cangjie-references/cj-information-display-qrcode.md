---
name: cangjie-references/cj-information-display-qrcode
title: QRCode
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-qrcode
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 信息展示 / QRCode
---

# QRCode

一个用于显示单个二维码的组件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/twyTrx3XTRyNhKKoKGfojA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=D3E8F98BFCEF205B052097E4B60F49115FA8A1649CC132ED1779C178A3064C5B)

二维码组件的像素点数量与内容有关。当组件尺寸过小时，可能出现无法展示内容的情况，此时需要适当调整组件尺寸。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

无

#### 创建组件

#### [h2]init(?ResourceStr)
    
    
    public init(value: ?ResourceStr)

**功能：** 创建用于显示单个二维码组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 是 | - | 二维码内容字符串。最大支持512个字符，若超出，则截取前512个字符。初始值："undefined"。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：支持[点击事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-click)、[触摸事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-touch)、[挂载卸载事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-appear)。

#### 组件属性

#### [h2]func color(?ResourceColor)
    
    
    public func color(value: ?ResourceColor): This

**功能：** 设置二维码颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | 二维码颜色。初始值：0xff000000，且不跟随系统深浅色模式切换而修改。  
  
#### [h2]func contentOpacity(?Float64)
    
    
    public func contentOpacity(value: ?Float64): This

**功能：** 设置二维码内容颜色的不透明度。不透明度最小值为0.0，最大值为1.0。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Float64 | 是 | - | 二维码内容颜色的不透明度。初始值：1.0。取值范围：[0.0, 1.0]，超出取值范围按初始值处理。  
  
#### [h2]func contentOpacity(?AppResource)
    
    
    public func contentOpacity(value: ?AppResource): This

**功能：** 设置二维码内容颜色的不透明度。不透明度最小值为0，最大值为1。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[AppResource](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-resource#class-appresource) | 是 | - | 二维码内容颜色的不透明度。 初始值：1.0。  
  
#### 示例代码

该示例展示了QRCode组件的基本使用方法，通过color属性设置二维码颜色、backgroundColor属性设置二维码背景颜色、contentOpacity属性设置二维码不透明度。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        var value: String = "hello world";
    
        func build() {
            Scroll() {
                Column(space: 5) {
                    Text("normal")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .width(140)
                        .height(140)
    
                    // 设置二维码颜色
                    Text("color")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .color(0xF7CE00)
                        .width(140)
                        .height(140)
    
                    // 设置二维码背景色
                    Text("backgroundColor")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .width(140)
                        .height(140)
                        .backgroundColor(Color.Red)
    
                    // 设置二维码不透明度
                    Text("contentOpacity")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .width(140)
                        .height(140)
                        .color(Color.Black)
                        .contentOpacity(0.1)
    
                    // 设置二维码不透明度
                    Text("contentOpacity")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .width(140)
                        .height(140)
                        .color(Color.Black)
                        .contentOpacity(0.1)
    
                    // 设置二维码不透明度
                    Text("contentOpacity int")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .width(140)
                        .height(140)
                        .color(Color.Black)
                        .contentOpacity(0.0)
    
                    // 设置二维码不透明度
                    Text("contentOpacity resource")
                        .fontSize(9)
                        .width(90.percent)
                        .fontColor(0xCCCCCC)
                        .fontSize(30)
                    QRCode(this.value)
                        .width(140)
                        .height(140)
                        .color(Color.Black)
                        .contentOpacity(@r(sys.float.alpha_40))
                }
                    .width(100.percent)
                    .margin(top: 5)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/U1atuAivSROpswNj5Xxshw/zh-cn_image_0000002713558940.png?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=A90285F3E8E858D2637B74148814A3FA15A1528F546DD87078E479BEF976E209)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/urCnkzKBSre41ALG3PEHDg/zh-cn_image_0000002743197853.png?HW-CC-KV=V1&HW-CC-Date=20260908T090150Z&HW-CC-Expire=86400&HW-CC-Sign=ADA8AE05369DB0F061B34FBCF628361B0A0111AC3CA920537ECE844CC50C1A6D)
