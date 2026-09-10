---
name: cangjie-references/cj-common-pixelunits
title: 像素单位
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-pixelunits
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 公共定义 / 像素单位
---

# 像素单位

仓颉提供4种像素单位，采用vp为基准数据单位。

名称 | 描述  
---|---  
px | 屏幕物理像素单位。  
vp | 屏幕密度相关像素，根据屏幕像素密度转换为屏幕物理像素，当数值不带单位时，默认单位vp。在实际宽度为1440物理像素的屏幕上，1vp约等于3px。 **说明：** vp与px的比例与屏幕像素密度有关。  
fp | 字体像素，与vp类似适用屏幕密度变化，随系统字体大小设置变化。  
lpx | 视窗逻辑像素单位，lpx单位为实际屏幕宽度与逻辑宽度（通过designWidth配置）的比值，designWidth默认值为720。当designWidth为720时，在实际宽度为1440物理像素的屏幕上，1lpx为2px大小。  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/B5SqY3_yRYCjrwIjKbDYUA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=4F14A5668B7E50416F38C15060691B6973F9EB2C4D71E15C93B4063EBA59B697)

使用[getUIContext()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework#func-getuicontext)获取[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)实例，再使用[UIContext](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#class-uicontext)下的[vp2px](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-vp2pxlength)/[px2vp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-px2vplength)/[fp2px](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-fp2pxlength)/[px2fp](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-px2fplength)/[lpx2px](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-lpx2pxlength)/[px2lpx](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-px2lpxlength)调用绑定实例的接口。

#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var isShow: Bool = false
        func build() {
            Column() {
                Flex(wrap: FlexWrap.Wrap) {
                    Column() {
                        Text("width(180)")
                            .width(180)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                            .fontSize(22.vp)
                    }.margin(5)
    
                    Column() {
                        Text("width('180px')")
                            .width(180.px)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                    }.margin(5)
    
                    Column() {
                        Text("width('180vp')")
                            .width(180.vp)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                            .fontSize(22.vp)
                    }.margin(5)
    
                    Column() {
                        Text("width('180lpx') designWidth:720")
                            .width(180.lpx)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                            .fontSize(22.vp)
                    }.margin(5)
    
                    Column() {
                        Text("width(vp2px(180) + 'px')")
                            .width(getUIContext().vp2px(180.vp) ?? 180.vp)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                            .fontSize(22.vp)
                    }.margin(5)
    
                    Column() {
                        Text("fontSize('22fp')")
                            .width(180)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                            .fontSize(22.fp)
                    }.margin(5)
    
                    Column() {
                        Text("width(px2vp(180))")
                            .width(getUIContext().px2vp(180.px) ?? 180.px)
                            .height(40)
                            .backgroundColor(0xF9CF93)
                            .textAlign(TextAlign.Center)
                            .fontColor(Color.White)
                            .fontSize(22.fp)
                    }.margin(5)
                }.width(100.percent)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/k_A_bjBGSd68FaPJ5Iyetw/zh-cn_image_0000002731378895.png?HW-CC-KV=V1&HW-CC-Date=20260903T111647Z&HW-CC-Expire=86400&HW-CC-Sign=8E791D9D6F2AD7554EC47FDA6F8DB333131BC625615FF6238C0B63EECCACB960)
