---
name: cangjie-references/cj-animation-animation
title: 属性动画（animation）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-animation-animation
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 动画 / 属性动画（animation）
---

# 属性动画（animation）

组件的某些通用属性变化时，可以通过属性动画实现渐变过渡效果，提升用户体验。支持的属性包括[width](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-widthoptionlength)、[height](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-heightoptionlength)、[backgroundColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-background#func-backgroundcolorresourcecolor)、[opacity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-opacity#func-opacityfloat64)、[scale](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-transform#func-scalefloat32-float32-float32-length-length)、[rotate](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-transform#func-rotatefloat32-float32-float32-float32-length-length)、[translate](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-transform#func-translatelength-length-length)等。对于改变布局类属性（如宽高）的动画，内容通常会直接跳转到最终状态，例如文字或[Canvas](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-canvas-drawing-canvas)的内容等，如果要内容跟随宽高变化，可以使用[renderFit](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-renderfit)属性配置。

#### 导入模块
    
    
    import kit.ArkUI.*

#### func animation(?AnimateParam)
    
    
    public func animation(value: ?AnimateParam): T

**功能：** 设置组件的属性动画。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[AnimateParam](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-animateparam) | 是 | - | 设置动画效果相关参数。  
  
**返回值：**

类型 | 说明  
---|---  
T | 返回组件实例。  
  
属性动画只对写在animation前面的属性生效，且对组件构造器的属性不生效。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.Hilog
    
    @Entry
    @Component
    class EntryView {
        @State
        var widthSize: Length = 250.vp
        @State
        var heightSize: Length = 100.vp
        @State
        var rotateAngle: Float32 = 0.0
        @State
        var flag: Bool = true
        @State
        var space: Length = 10.vp
        func build() {
            Column(space: this.space) // 改变Column构造器中的space动画不生效
                .onClick(
                    {
                        evt =>
                            if (this.flag) {
                                this.widthSize = 150.vp
                                this.heightSize = 60.vp
                                this.space = 20.vp // 改变this.space动画不生效
                            } else {
                                this.widthSize = 250.vp
                                this.heightSize = 100.vp
                                this.space = 10.vp // 改变this.space动画不生效
                            }
                            this.flag = !this.flag
                    }
                )
                .backgroundColor(Color.Black)
                .margin(30)
                .width(this.widthSize) // 只有写在animation前面才生效
                .height(this.heightSize) // 只有写在animation前面才生效
                .animation(
                    AnimateParam(
                        duration: 2000,
                        curve: Curve.EaseOut,
                        iterations: 3,
                        playMode: PlayMode.Normal
                    )
                )
                // .width(this.widthSize) // 动画不生效
                // .height(this.heightSize) // 动画不生效
        }
    }

#### 示例代码

该示例通过animation实现了组件的属性动画。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.hilog.*
    
    let animateOpt1 = AnimateParam(
        duration: 1200,
        curve: Curve.EaseOut,
        delay: 500,
        iterations: 3,
        playMode: PlayMode.Normal,
        onFinish: {
            => Hilog.info(0, "cangjie", "onfinish")
        },
        expectedFrameRateRange: ExpectedFrameRateRange(
            min: 20,
            max: 120,
            expected: 90
        )
    )
    let animateOpt2 = AnimateParam(
        duration: 1200,
        curve: Curve.Friction,
        delay: 500,
        iterations: -1, // 设置-1表示动画无限循环
        playMode: PlayMode.Alternate,
        onFinish: {
            => Hilog.info(0, "cangjie", "onfinish")
        },
        expectedFrameRateRange: ExpectedFrameRateRange(
            min: 20,
            max: 120,
            expected: 90
        )
    )
    
    @Entry
    @Component
    class EntryView {
        @State
        var widthSize: Length = 250.vp
        @State
        var heightSize: Length = 100.vp
        @State
        var rotateAngle: Float32 = 0.0
        @State
        var flag: Bool = true
        func build() {
            Column() {
                Button("change size")
                    .onClick(
                        {
                            evt =>
                                if (this.flag) {
                                    this.widthSize = 150.vp
                                    this.heightSize = 60.vp
                                } else {
                                    this.widthSize = 250.vp
                                    this.heightSize = 100.vp
                                }
                                this.flag = !this.flag
                        }
                    )
                    .margin(30)
                    .width(this.widthSize)
                    .height(this.heightSize)
                    .animation(animateOpt1)
                Button('change rotate angle')
                    .onClick({
                        evt => this.rotateAngle = 90.0
                    })
                    .margin(50)
                    .rotate(angle: this.rotateAngle)
                    .animation(animateOpt2)
            }
                .width(100.percent)
                .margin(top: 20)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/itMEEIiZTa-3eNKGU98EGA/zh-cn_image_0000002743077913.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090152Z&HW-CC-Expire=86400&HW-CC-Sign=E4197E0A24308A631378279910E028558CF5F374C52D2F152B7531FF38F2912C)
