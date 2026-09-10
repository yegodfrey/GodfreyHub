---
name: cangjie-references/cj-animation-sharedtransition
title: 共享元素转场（sharedTransition）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-sharedtransition
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 动画 / 共享元素转场（sharedTransition）
---

# 共享元素转场（sharedTransition）

可以通过设置组件的 sharedTransition 属性将该元素标记为共享元素并设置对应的共享元素转场动效。sharedTransition仅发生在页面路由（[router](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-router#class-router)）跳转时。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func sharedTransition(String, ?SharedTransitionOptions)
    
    
    func sharedTransition(id: String, options!: ?SharedTransitionOptions): T

**功能：** 设置共享元素转场动效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/rFDeePcwS7eVfgKCKse8ZQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=513023B4CC04AE14D2C45758D5CC9749E9A41CECF900301C5FE865100AA57C6F)

effectType为SharedTransitionEffectType.Exchange时motionPath才会生效。effectType为SharedTransitionEffectType.Exchange时，效果为对匹配的共享元素产生位置、大小的过渡（可通过配置组件的border观察），不支持内容的过渡效果。例如，Text组件在两个页面上使用不同的fontSize属性值，即绘制内容有大小差异，在sharedTransition动画结束后的最后一帧，Text的fontSize效果会突变为跳转目标页fontSize的效果。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | String | 是 | - | 两个页面中id值相同且不为空字符串的组件即为共享元素，在页面转场时可显示共享元素转场动效。  
options | ?[SharedTransitionOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-sharedtransitionoptions) | 是 | - | **命名参数。** 共享元素转场动画参数。 初始值：SharedTransitionOptions()。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### 示例代码

示例代码为点击图片跳转页面时，显示共享元素图片的自定义转场动效。
    
    
    // index.cj
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class EntryView {
        @State
        var active: Bool = false
        func build() {
            Column() {
                Image(@r(app.media.startIcon))
                    .width(50)
                    .height(50)
                    .onClick({
                        e => getUIContext().getRouter().pushUrl(url:"Page")
                    })
                    .sharedTransition("sharedImage",
                        options: SharedTransitionOptions(duration: 800, curve: Curve.Linear, delay: 100))
            }
        }
    }
    
    
    // Page.cj
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.__GenerateResource__
    
    @Entry
    @Component
    class Page {
        func build() {
            Stack() {
                Image(@r(app.media.startIcon))
                    .width(150)
                    .height(150)
                    .sharedTransition(
                        "sharedImage",
                        options: SharedTransitionOptions(duration: 800, curve: Curve.Linear, delay: 100)
                    )
            }
                .width(100.percent)
                .height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/k79cMC8GQbCxvVAceBt0Dg/zh-cn_image_0000002743197867.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=18096EEC475653F51438344926BB664D97B01726134B27881E91AAB21E5C5B00)
