---
name: cangjie-references/cj-universal-attribute-gradientcolor
title: 颜色渐变
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-gradientcolor
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 通用属性 / 颜色渐变
---

# 颜色渐变

设置组件的颜色渐变效果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/KCzm4kLMT1yPNzsJwweLeQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=2AD78ED92101417CEFE55BF2B54455AD139DE18F5DA6A8D1F0AA2541ECC5D30A)

  * 颜色渐变属于组件内容，绘制在背景上方。
  * 颜色渐变不支持宽高显式动画，执行宽高动画时颜色渐变会直接过渡到终点。



#### 导入模块
    
    
    import kit.ArkUI.*

#### func linearGradient(?Float64, ?GradientDirection, ?Array<(ResourceColor, Float64)>, ?Bool)
    
    
    func linearGradient(angle!: ?Float64, direction!: ?GradientDirection,
        colors!: ?Array<(ResourceColor, Float64)>, repeating!: ?Bool): T

**功能：** 设置线性渐变。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
angle | ?Float64 | 是 | - | **命名参数。** 线性渐变的起始角度。0点方向顺时针旋转为正向角度。  
direction | ?[GradientDirection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-gradientdirection) | 是 | - | **命名参数。** 线性渐变的方向，设置angle后不生效。 初始值：GradientDirection.Bottom。  
colors | ?Array<([ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor), Float64)> | 是 | - | **命名参数。** 指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。 初始值：[(Color.Transparent, 0.0)]。  
repeating | ?Bool | 是 | - | **命名参数。** 为渐变的颜色重复着色。  初始值：false。  
  
#### func sweepGradient(?(Length, Length), ?Float64, ?Float64, ?Float64, ?Array<(ResourceColor, Float64)>, ?Bool)
    
    
    func sweepGradient(center: ?(Length, Length), start!: ?Float64, end!: ?Float64 ,
        rotation!: ?Float64, colors!: ?Array<(ResourceColor, Float64)>,
        repeating!: ?Bool): T

**功能：** 设置角度渐变。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
center | ?([Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length), [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)) | 是 | - | 中心点坐标，相对于当前组件左上角的坐标。  初始值：(0.0.vp, 0.0.vp)。  
start | ?Float64 | 是 | - | **命名参数。** 角度渐变的起点。  初始值：0.0。  
end | ?Float64 | 是 | - | **命名参数。** 角度渐变的终点。  初始值：0.0。  
rotation | ?Float64 | 是 | - | **命名参数。** 角度渐变的旋转角度。  初始值：0.0。  
colors | ?Array<([ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor), Float64)> | 是 | - | **命名参数。** 指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。  初始值：[(Color.Transparent, 0.0)]。  
repeating | ?Bool | 是 | - | **命名参数。** 为渐变的颜色重复着色。  初始值：false。  
  
#### func radialGradient(?(Length, Length), ?Length, ?Array<(ResourceColor, Float64)>, ?Bool)
    
    
    func radialGradient(center: ?(Length, Length), radius: ?Length, colors: ?Array<(ResourceColor, Float64)>,
        repeating!: ?Bool): T

**功能：** 设置径向渐变。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
center | ?([Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length), [Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)) | 是 | - | 中心点坐标，相对于当前组件左上角的坐标。  初始值：(0.0.px, 0.0.px)。  
radius | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 径向渐变的半径。  
colors | ?Array<([ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor), Float64)> | 是 | - | 指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。  初始值：[]。  
repeating | ?Bool | 是 | - | **命名参数。** 为渐变的颜色重复着色。  初始值：false。  
  
#### 示例代码

#### [h2]示例1（颜色从右向左线性渐变）

该示例通过linearGradient来实现组件颜色线性渐变。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Text("linearGradient")
                    .fontSize(24.px)
                    .width(90.percent)
                    .fontColor(Color(0xCCCCCC))
                Row()
                    .width(100.percent)
                    .height(100.px)
                    .linearGradient(
                        angle: 90.0,
                        colors: [(Color(0x0000ff), 0.0), (Color(0xff0000), 0.3), (Color(0xffff00), 1.0)],
                        repeating: false
                    )
    
                Text("linearGradient Repeat")
                    .fontSize(24.px)
                    .width(90.percent)
                    .fontColor(Color(0xCCCCCC))
                Row()
                    .width(100.percent)
                    .height(100.px)
                    .linearGradient(
                        colors: [(Color(0x0000ff), 0.0), (Color(0xff0000), 0.3), (Color(0xffff00), 0.5)],
                        direction: GradientDirection.Left,
                        repeating: true
                    )
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/12/v3/O78GJ9h7Qbi_PAnRsGkGFw/zh-cn_image_0000002701659612.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=49D089FAD5E6254A097A65416DFF298E64F9A252B8EE92E7B4DC14C9BE527D59)

#### [h2]示例2（颜色按旋转角度渐变）

该示例通过sweepGradient来实现组件颜色旋转角度渐变。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Text("sweepGradient")
                    .fontSize(24.px)
                    .width(30.percent)
                    .fontColor(Color(0xCCCCCC))
                Row()
                    .width(200.px)
                    .height(200.px)
                    .sweepGradient(
                        (100.0.px, 100.0.px),
                        start: 0.0,
                        end: 359.0,
                        colors: [(Color(0xff0000), 0.0), (Color(0x0000ff), 0.3), (Color(0xffff00), 1.0)],
                        repeating: false
                    )
    
                Text("sweepGradient Reapeat")
                    .fontSize(24.px)
                    .width(30.percent)
                    .fontColor(Color(0xCCCCCC))
                Row()
                    .width(200.px)
                    .height(200.px)
                    .sweepGradient(
                        (100.0.px, 100.0.px),
                        start: 0.0,
                        end: 359.0,
                        rotation: 45.0,
                        colors: [(Color(0xff0000), 0.0), (Color(0x0000ff), 0.3), (Color(0xffff00), 0.5)],
                        repeating: true
                    )
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/suMkWsQpRvSEWSaKs8wCRw/zh-cn_image_0000002731378827.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=5ED78E6E6CE268E28CF5682E67EF05A85A76C16F7D5CFCB7E70787736F574311)

#### [h2]示例3（颜色按径向渐变）

该示例通过radialGradient来实现组件颜色径向渐变。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Text("radialGradient")
                    .fontSize(24.px)
                    .width(30.percent)
                    .fontColor(Color(0xCCCCCC))
                Row()
                    .width(200.px)
                    .height(200.px)
                    .radialGradient(
                        (100.0.px, 100.0.px),
                        120.0,
                        [(Color(0xff0000), 0.0), (Color(0x0000ff), 0.3), (Color(0xffff00), 1.0)]
                    )
    
                Text("radialGradient Repeat")
                    .fontSize(24.px)
                    .width(30.percent)
                    .fontColor(Color(0xCCCCCC))
                Row()
                    .width(200.px)
                    .height(200.px)
                    .radialGradient(
                        (100.0.px, 100.0.px),
                        120.0,
                        [(Color(0xff0000), 0.0), (Color(0x0000ff), 0.3), (Color(0xffff00), 0.5)],
                        repeating: true
                    )
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/oaXL457rT5KMQM2x2EaAYA/zh-cn_image_0000002701819524.png?HW-CC-KV=V1&HW-CC-Date=20260903T111635Z&HW-CC-Expire=86400&HW-CC-Sign=766D216EB36FCD161FBCD57A643D66DDBBE8ED220A1D986548459B5AC900798E)
