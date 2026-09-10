---
name: cangjie-guides/cj-component-animation
title: 组件动画
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-component-animation
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用动画 / 组件动画
---

# 组件动画

ArkUI为组件提供了通用的属性动画和转场动画能力的同时，还为一些组件提供了默认的动画效果。例如，[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)的滑动动效、[Button](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-button-picker-button)的点击动效，是组件自带的默认动画效果。在组件默认动画效果的基础上，开发者还可以通过属性动画和转场动画对容器组件内的子组件动效进行定制。

#### 使用组件默认动画

组件默认动效具备以下功能：

  * 提示用户当前状态，例如用户点击Button组件时，Button组件默认变灰，用户即确定完成选中操作。

  * 提升界面精致程度和生动性。

  * 减少开发者工作量，例如列表滑动组件自带滑动动效，开发者直接调用即可。




更多效果请参见[组件说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex)。

示例代码如下：
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row {
                Checkbox(name: 'checkbox1', group: "checkboxGroup")
                    .select(true)
                    .shape(CheckBoxShape.Circle)
                    .size(width: 50, height: 50)
            }
                .width(100.percent)
                .height(100.percent)
                .justifyContent(FlexAlign.Center)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/bamzduVHRS-lu9qRzMlniw/zh-cn_image_0000002731378735.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111603Z&HW-CC-Expire=86400&HW-CC-Sign=290BAB284BAE39B9D106019628EF35A4174D7902CA4A428ACD1689CFB4297C0C)

#### 打造组件定制化动效

部分组件支持通过[属性动画](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-attribute-animation-overview)和[转场动画](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-transition-overview)自定义组件子Item的动效，实现定制化动画效果。例如，[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)组件中可对各个子组件在滑动时的动画效果进行定制。

  * 在滑动或者点击操作时通过改变各个Scroll子组件的仿射属性来实现各种效果。

  * 如果要在滑动过程中定制动效，可在滑动回调onScroll中监控滑动距离，并计算每个组件的仿射属性。也可以自己定义手势，通过手势监控位置，手动调用ScrollTo改变滑动位置。

  * 在滑动回调onScrollStop或手势结束回调中对滑动的最终位置进行微调。



