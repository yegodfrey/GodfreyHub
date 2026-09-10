---
name: cangjie-references/cj-animation-geometrytransition
title: 组件内隐式共享元素转场（geometryTransition）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-geometrytransition
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 动画 / 组件内隐式共享元素转场（geometryTransition）
---

# 组件内隐式共享元素转场（geometryTransition）

在视图切换过程中提供丝滑的上下文传承过渡。通用transition机制提供了[opacity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#static-func-opacityfloat64)、[scale](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-transition#static-func-scalescaleoptions)等转场效果，geometryTransition通过安排绑定的in/out组件(in指新视图、out指旧视图)的frame、position使得原本独立的transition动画在空间位置上发生联系，将视觉焦点由旧视图位置引导到新视图位置。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func geometryTransition(?String, ?Bool)
    
    
    func geometryTransition(id: ?String, follow!: ?Bool): T

**功能：** 组件内隐式共享元素转场。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/xEB_9p8nTTezivSJQ7tfkQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=0F803FF197D363FE6408E0E1BCD15C6E31C6F7035EEC8458DC88BC58C08FB81E)

geometryTransition必须配合[animateTo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-animatetoanimateparam-voidcallback)使用才有动画效果，动效时长、曲线跟随[animateTo](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-uicontext#func-animatetoanimateparam-voidcallback)中的配置，不支持[animation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-animation)隐式动画。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
id | ?String | 是 | - | 用于设置绑定关系，id置空字符串清除绑定关系避免参与共享行为，id可更换重新建立绑定关系。同一个id只能有两个组件绑定且是in/out不同类型角色，不能多个组件绑定同一个id。 初始值：""。  
follow | ?Bool | 是 | - | **命名参数。** 仅用于if范式下标记始终在组件树上的组件是否跟随做共享动画。 初始值：false。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
#### 示例代码
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var isShow: Bool = false
        func build() {
            Stack(alignContent: Alignment.Center) {
                if (this.isShow) {
                    Image(@r(app.media.startIcon))
                        .autoResize(false)
                        .clip(true)
                        .width(350)
                        .height(500)
                        .offset(x: 20, y: 100)
                        .geometryTransition("picture")
                        .transition(TransitionEffect.OPACITY)
                } else {
                    Column() {
                        Column() {
                            Image(@r(app.media.startIcon))
                                .width(100.percent)
                                .height(100.percent)
                        }
                            .width(100.percent)
                            .height(100.percent)
                    }
                        .width(80)
                        .height(80)
                        .offset(x: 10, y: 10)
                        .borderRadius(20)
                        .clip(true)
                        .geometryTransition("picture")
                        .transition(TransitionEffect.OPACITY)
                }
            }.onClick({
                event => getUIContext().animateTo(AnimateParam(duration: 1000), ({=> this.isShow = !this.isShow}))
            })
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/nhHW7qc7R5GWh9h-L1kdzA/zh-cn_image_0000002713398986.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=A5C7926CF4C3E9E335606ADC40A33328AE874083519289B96255E87EEE8AE049)
