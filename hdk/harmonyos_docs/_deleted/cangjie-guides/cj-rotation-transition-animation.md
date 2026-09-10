---
name: cangjie-guides/cj-rotation-transition-animation
title: 旋转屏动画
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rotation-transition-animation
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用动画 / 转场动画 / 旋转屏动画
---

# 旋转屏动画

旋转屏动画主要有布局切换的旋转屏动画。布局切换的旋转屏动画实现较为简便，例如在module.json5中配置自动旋转（或设置窗口显示方向）即可实现。

#### 布局切换的旋转屏动画

布局切换时的旋转屏动画，是在屏幕显示方向改变时，为窗口与应用视图同步旋转而设计的大小和位置过渡动画。这种布局切换的旋转屏动画是系统默认的，便于开发者实现。当屏幕显示方向变化时，系统会生成窗口旋转动画，并自动调整窗口大小以匹配旋转后的尺寸。在此过程中，窗口会通知对应的应用，要求其根据新的窗口大小重新布局，产生与窗口旋转动画参数相同的布局动画。

切换屏幕方向即可实现布局切换的旋转屏动画效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Image(@r(app.media.foreground))
                    .position(x: 220, y: 220)
                    .size(width: 80, height: 80)
                    .id('image1')
                    .backgroundColor(Color.Blue)
            }
        }
    }

需要在项目的module.json5文件中的abilities列表里添加"orientation"，指定为"auto_rotation"。
    
    
    "orientation": "auto_rotation",

布局切换的旋转屏动画，会对同步旋转的窗口与应用视图做大小和位置的过渡。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/DKnjexTJRniUW2NHCWdsvQ/zh-cn_image_0000002701819430.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111603Z&HW-CC-Expire=86400&HW-CC-Sign=97C703C04C70BB8DF3F3F87B83A1FBAE9B665DE4254048F45E0387E2443A79FC)
