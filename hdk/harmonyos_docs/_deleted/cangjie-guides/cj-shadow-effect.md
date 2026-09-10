---
name: cangjie-guides/cj-shadow-effect
title: 阴影
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-shadow-effect
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用动画 / 动画效果 / 阴影
---

# 阴影

阴影接口[shadow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-imageeffect#func-shadowfloat64-resourcecolor-float64-float64)可以为当前组件添加阴影效果，开发者可配置[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-shadowoptions)自定义阴影效果。API version 26之前，当radius小于等于0或者color的透明度为0时，无阴影效果；从API version 26开始，当radius小于0或者color的透明度为0时，无阴影效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row() {
                Column() {
                    Column() {
                        Text('shadowOption').fontSize(12)
                    }
                        .width(100)
                        .aspectRatio(1.0)
                        .margin(10)
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(Color.White)
                        .borderRadius(20)
                        .shadow(radius: 10.0, color: Color.Gray)
    
                    Column() {
                        Text('shadowOption').fontSize(12)
                    }
                        .width(100)
                        .aspectRatio(1.0)
                        .margin(10)
                        .justifyContent(FlexAlign.Center)
                        .backgroundColor(0xF48899)
                        .borderRadius(20)
                        .shadow(radius: 10.0, color: Color.Gray, offsetX: 20.0, offsetY: 20.0)
                }
                    .width(100.percent)
                    .height(100.percent)
                    .justifyContent(FlexAlign.Center)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/Ow8YPiahSiSl3YFDJ3hB9w/zh-cn_image_0000002731538715.png?HW-CC-KV=V1&HW-CC-Date=20260903T111603Z&HW-CC-Expire=86400&HW-CC-Sign=E7434FFC203745F5D1E0FFA0D927A603CE6B26CE2D5DB69E1BBBE9AED3F443C8)
