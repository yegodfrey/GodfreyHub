---
name: cangjie-guides/cj-common-components-progress-indicator
title: 进度条（Progress）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-common-components-progress-indicator
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 添加组件 / 进度条（Progress）
---

# 进度条（Progress）

Progress是进度条显示组件，显示内容通常为目标操作的当前进度。具体用法请参见[Progress](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-progress)。

#### 创建进度条

Progress通过调用接口来创建，接口调用形式如下：
    
    
    Progress(value!: Float64, total!: Float64 = 100.0, progressType!: ProgressType = ProgressType.Linear)

其中，value用于设置初始进度值，total用于设置进度总长度，ProgressType用于设置ProgressType样式。
    
    
    Progress(value: 24.0, total: 100.0, progressType: ProgressType.Linear) // 创建一个进度总长为100，初始进度值为24的线性进度条

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/0GhP7qXRRP2TqAZ2-2kCCw/zh-cn_image_0000002743077719.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=DD95E53433FEB95C4291E7149F1C33B7348B655580C4815DD2C37F57D4BAE3C8)

#### 设置进度条样式

Progress有5种可选类型，通过ProgressType可以设置进度条样式，ProgressType类型包括：ProgressType.Linear（线性样式）、 ProgressType.Ring（环形无刻度样式）、ProgressType.ScaleRing（环形有刻度样式）、ProgressType.Eclipse（圆形样式）和ProgressType.Capsule（胶囊样式）。

  * 线性样式进度条（默认类型）
        
        Progress(value: 20.0, total: 100.0, progressType: ProgressType.Linear)
            .width(200)
            .height(50)
        Progress(value: 20.0, total: 100.0, progressType: ProgressType.Linear)
            .width(50)
            .height(200)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/v1Mz3dH8ToOwaVo6lIM_Uw/zh-cn_image_0000002713558758.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=906B046FD7DE1ECAB2821BF521682C062F52E542798A5D58D6D315DC9668873A)

  * 环形无刻度样式进度条
        
        // 从左往右，1号环形进度条，默认前景色为蓝色渐变，默认strokeWidth进度条宽度为2.vp
        Progress(value: 40.0, total: 150.0, progressType: ProgressType.Ring)
            .width(100)
            .height(100)
        // 从左往右，2号环形进度条
        Progress(value: 40.0, total: 150.0, progressType: ProgressType.Ring)
            .width(100)
            .height(100)
            .color(Color.Gray) // 进度条前景色为灰色
            .style(strokeWidth: 15.vp) // 设置strokeWidth进度条宽度为15.vp

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/3yhY30mIS3y_B7ga918ltw/zh-cn_image_0000002743197671.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=41AC438E76E21DB7B057EAD252C9DCD3AF6B1580EE5AACD2968743F14685F0F9)

  * 环形有刻度样式进度条
        
        Progress(value: 20.0, total: 150.0, progressType: ProgressType.ScaleRing)
            .width(100)
            .height(100)
            .backgroundColor(Color.Black)
            .style(scaleCount: 20, scaleWidth: 5.vp) // 设置环形有刻度进度条总刻度数为20，刻度宽度为5.vp
        Progress(value: 20.0, total: 150.0, progressType: ProgressType.ScaleRing)
            .width(100)
            .height(100)
            .backgroundColor(Color.Black)
            .style(strokeWidth: 15.vp, scaleCount: 20, scaleWidth: 5.vp) // 设置环形有刻度进度条宽度15.vp，总刻度数为20，刻度宽度为5.vp
        Progress(value: 20.0, total: 150.0, progressType: ProgressType.ScaleRing)
            .width(100)
            .height(100)
            .backgroundColor(Color.Black)
            .style(strokeWidth: 15.vp, scaleCount: 20, scaleWidth: 3.vp) // 设置环形有刻度进度条宽度15.vp，总刻度数为20，刻度宽度为3.vp

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/HNWWkDCPQ8azjW7JJTeIxQ/zh-cn_image_0000002713398790.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=71CBDAC19DF8BEA2025B460FA34263C299E287273051FC9D29A6B39C68DF214C)

  * 圆形样式进度条
        
        // 从左往右，1号圆形进度条，默认前景色为蓝色
        Progress(value: 10.0, total: 150.0, progressType: ProgressType.Eclipse)
            .width(100)
            .height(100)
        // 从左往右，2号圆形进度条，指定前景色为灰色
        Progress(value: 20.0, total: 150.0, progressType: ProgressType.Eclipse)
            .color(Color.Gray)
            .width(100)
            .height(100)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/YPSzbEuiTv63qLpjj2BLoQ/zh-cn_image_0000002743077721.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=026B8A370DAF2E436DD1CE1FEF32EE96B5F350C8F7951619F496969C99DB32D6)

  * 胶囊样式进度条




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/CwB9xZ0qTPiHvjhVPZKA9Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=78F4BC5DD8A609322B77F431AFFC0C32056A999095281DEAB3CCFC434CEA9D9A)

  * 头尾两端圆弧处的进度展示效果与ProgressType.Eclipse样式相同。

  * 中段处的进度展示效果为矩形状长条，与ProgressType.Linear线性样式相似。

  * 组件高度大于宽度的时候自适应垂直显示。



    
    
    Progress(value: 10.0, total: 150.0, progressType: ProgressType.Capsule)
        .width(100)
        .height(50)
    Progress(value: 20.0, total: 150.0, progressType: ProgressType.Capsule)
        .width(50)
        .height(100)
        .color(Color.Gray)
    Progress(value: 50.0, total: 150.0, progressType: ProgressType.Capsule)
        .width(50)
        .height(100)
        .color(Color.Blue)
        .backgroundColor(Color.Black)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/vCRgO1YuTOaR_KoEMPQ5Yg/zh-cn_image_0000002713558760.png?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=9027E8366BB6A16D3A0301C2093AE5932A489AA433C5F0449201AF973C249CB9)

#### 场景示例

更新当前进度值，如应用安装进度条，可通过点击Button增加progressValue，value属性将progressValue设置给Progress组件，进度条组件即会触发刷新，更新当前进度。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var progressValue: Float64 = 0.0 // 设置进度条初始值为0
        func build() {
            Column() {
                Column() {
                    Progress(value: 0.0, total: 100.0, progressType: ProgressType.Capsule)
                        .width(200)
                        .height(50)
                        .value(this.progressValue)
                    Row()
                        .width(100.percent)
                        .height(5)
                    Button("进度条+5").onClick(
                        {
                            evt =>
                                this.progressValue += 5.0
                                if (this.progressValue > 100.0) {
                                    this.progressValue = 0.0
                                }
                        }
                    )
                }
            }
                .width(100.percent)
                .height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/t-PoG1EQQ-Cty2ZjZFmiZw/zh-cn_image_0000002743197673.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090120Z&HW-CC-Expire=86400&HW-CC-Sign=8C98EE4451028037F14718A748F0FBCD055793A036CCC6DFFACE2A8E2C0AF32C)
