---
name: cangjie-guides/cj-shape-drawing
title: 绘制几何图形（Shape）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-shape-drawing
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 几何图形绘制 / 绘制几何图形（Shape）
---

# 绘制几何图形（Shape）

绘制组件用于在页面绘制图形，Shape组件是绘制组件的父组件，父组件中会描述所有绘制组件均支持的通用属性。具体用法请参考[Shape](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-shape)。

#### 创建绘制组件

绘制组件可以由以下两种形式创建：

  * 绘制组件使用Shape作为父组件，实现类似SVG的效果。接口调用为以下形式：
        
        init()
        
        init(target: PixelMap)

该接口用于创建带有父组件的绘制组件，其中target用于设置绘制目标，可将图形绘制在指定的PixelMap对象中，若未设置，则在当前绘制目标中进行绘制。
        
        Shape() {
            Rect().width(300).height(50)
        }

  * 绘制组件单独使用，用于在页面上绘制指定的图形。有7种绘制类型，分别为[Circle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-circle)（圆形）、[Ellipse](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-ellipse)（椭圆形）、[Line](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-line)（直线）、[Path](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-path)（路径）、[Rect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-rect)（矩形）。以Circle的接口调用为例：
        
        Circle()
        
        Circle(width!: Length, height!: Length)

该接口用于在页面绘制圆形，其中width用于设置圆形的宽度，height用于设置圆形的高度，圆形直径由宽高最小值确定。
        
        Circle(width: 150, height: 150)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/FDnHsFLOS8GfS36KvdrX2g/zh-cn_image_0000002731538687.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=9028A99CFEA17F984B7E87ED7E797FA049383C7B2CADF531D7C8F277DB56219C)




#### 形状视口viewport
    
    
    viewPort(x!: Length, y!: Length, width!: Length, height!: Length)

形状视口viewport指定用户空间中的一个矩形，该矩形映射到为关联的SVG元素建立的视区边界。viewport属性的值包含x、y、width和height四个可选参数，x和y表示视区的左上角坐标，width和height表示其尺寸。

以下3个示例讲解viewport具体用法：

  * 通过形状视口对图形进行放大与缩小。


    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Row() {
                    Column {
                        // 画一个宽高都为75的圆
                        Text('原始尺寸Circle组件')
                        Circle(width: 75, height: 75).fill(0XE87361)
                    }
                }
                Row() {
                    Column {
                        // 创建一个宽高都为150的shape组件，背景色为黄色，一个宽高都为75的viewport。用一个蓝色的矩形来填充viewport，在viewport中绘制一个直径为75的圆。
                        // 绘制结束，viewport会根据组件宽高放大两倍
                        Text('shape内放大的Circle组件')
                        Shape() {
                            Rect()
                                .width(100.percent)
                                .height(100.percent)
                                .fill(0X0097D4)
                            Circle(width: 75, height: 75).fill(0XE87361)
                        }
                            .viewPort(x: 0, y: 0, width: 75, height: 75)
                            .width(150)
                            .height(150)
                            .backgroundColor(0XF5DC62)
                    }
                    Column {
                        // 创建一个宽高都为150的shape组件，背景色为黄色，一个宽高都为300的viewport。用一个绿色的矩形来填充viewport，在viewport中绘制一个直径为75的圆。
                        // 绘制结束，viewport会根据组件宽高缩小两倍。
                        Text('Shape内缩小的Circle组件')
                        Shape() {
                            Rect()
                                .width(100.percent)
                                .height(100.percent)
                                .fill(0XBDDB69)
                            Circle(width: 75, height: 75).fill(0XE87361)
                        }
                            .viewPort(x: 0, y: 0, width: 300, height: 300)
                            .width(150)
                            .height(150)
                            .backgroundColor(0XF5DC62)
                    }
                }
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/EPfIWVrxQQCF4Oae15b8hQ/zh-cn_image_0000002701659496.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=614C2E1BA8717047D2ADC4144FC273A889187144DDF5765B3821E7DF9CBD2B36)

  * 创建一个宽高都为300的shape组件，背景色为黄色，一个宽高都为300的viewport。用一个蓝色的矩形来填充viewport，在viewport中绘制一个半径为75的圆。


    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Shape() {
                    Rect()
                        .width(100.percent)
                        .height(100.percent)
                        .fill(0X0097D4)
                    Circle(width: 150, height: 150).fill(0XE87361)
                }
                    .viewPort(x: 0, y: 0, width: 300, height: 300)
                    .width(300)
                    .height(300)
                    .backgroundColor(0XF5DC62)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/yrCY0rxFSsK5J40P8ZMngQ/zh-cn_image_0000002731378711.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=6076187CE82EFDC09049029076A11FDC2C08C9BDC5095A3503CAA0BB0804BB45)

  * 创建一个宽高都为300的shape组件，背景色为黄色，创建一个宽高都为300的viewport。用一个蓝色的矩形来填充viewport，在viewport中绘制一个半径为75的圆，将viewport向右方和下方各平移150。


    
    
    package ohos_app_cangjie_entry
    
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Shape() {
                    Rect()
                        .width(100.percent)
                        .height(100.percent)
                        .fill(0X0097D4)
                    Circle(width: 150, height: 150).fill(0XE87361)
                }
                    .viewPort(x: -150, y: -150, width: 300, height: 300)
                    .width(300)
                    .height(300)
                    .backgroundColor(0XF5DC62)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/BrmlH5ScS5CqfW2SEhbHYQ/zh-cn_image_0000002701819408.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=83B6FCF65DCBC95317A51D2C59FA0AAB5670B7D961FD4A67EEF174CAC334FC70)

#### 自定义样式

绘制组件支持通过各种属性对组件样式进行更改。

  * 通过[fill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-fillresourcecolor)可以设置组件填充区域颜色。
        
        Path()
            .width(100)
            .height(100)
            .commands('M150 0 L300 300 L0 300 Z')
            .fill(0xE87361)
            .strokeWidth(0)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d6/v3/MZ0s8Q25Ss-H71TrfJH5Ag/zh-cn_image_0000002731538689.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=CC37C4E85190BC665BA9029CF0A560E3186C5C240F99B01AAE383ACD41699881)

  * 通过[stroke](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-strokeresourcecolor)可以设置组件边框颜色。
        
        Path()
            .width(100)
            .height(100)
            .fillOpacity(0.0)
            .commands('M150 0 L300 300 L0 300 Z')
            .stroke(Color.Red)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/qwbBLYi0RHGIhydTuddygg/zh-cn_image_0000002701659498.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=64DCCDFFC7A728F5777462B63AEED46EF142EC0928098E5DBD936E553CD3517A)

  * 通过[strokeOpacity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-strokeopacityappresource)可以设置边框透明度。
        
        Path()
            .width(100)
            .height(100)
            .fillOpacity(0.0)
            .commands('M150 0 L300 300 L0 300 Z')
            .stroke(Color.Red)
            .strokeWidth(10)
            .strokeOpacity(0.2)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/wIk4kor7TLqQH27kRnjeug/zh-cn_image_0000002731378713.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=63903A456E13976E1A4785C29E22CFA84AD49719EC167E434C36E430543587CB)

  * 通过[antiAlias](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-antialiasbool)设置是否开启抗锯齿，默认值为true（开启抗锯齿）。
        
        // 开启抗锯齿
        Circle()
            .width(150)
            .height(200)
            .fillOpacity(0.0)
            .strokeWidth(5)
            .stroke(Color.Black)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/SwA8iMhuRoOMQSEviABkng/zh-cn_image_0000002701819410.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=80C7CFAE5D6BD36288ECEC7F4FA46642861B1BAE7384E68BCB0FDCE0F0E1EC3D)
        
        // 关闭抗锯齿
        Circle()
            .width(150)
            .height(200)
            .fillOpacity(0.0)
            .strokeWidth(5)
            .stroke(Color.Black)
            .antiAlias(false)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/1HTr5_XgSzy73ZuArCEBOQ/zh-cn_image_0000002731538691.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=C672B1A368E45B5E725F6BB4816B68D28F541C73CF7F24EB6D043344E8AF5732)




#### 场景示例

#### [h2]绘制封闭路径

在Shape的(-80, -5)点绘制一个封闭路径，填充颜色0x317AF7，线条宽度3，边框颜色红色，拐角样式锐角（默认值）。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 10) {
                Shape() {
                    Path()
                        .width(200)
                        .height(60)
                        .commands('M0 0 L400 0 L400 150 Z')
                }
                    .viewPort(x: -80, y: -5, width: 500, height: 300)
                    .fill(0x317AF7)
                    .stroke(Color.Red)
                    .strokeWidth(3)
                    .strokeLineJoin(LineJoinStyle.Miter)
                    .strokeMiterLimit(5.0)
            }
                .width(100.percent)
                .margin(top: 15)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/KdSVlGDbShaBwR5sJzxnTg/zh-cn_image_0000002701659500.jpg?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=9498652D2FFB0E2B679F11137910346BB7E41F6E98673E694F8805FF47076002)

#### [h2]绘制圆和圆环

绘制一个直径为150的圆，和一个直径为150、线条为红色虚线的圆环（宽高设置不一致时以短边为直径）。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 10) {
                //绘制一个直径为150的圆
                Circle(width: 150, height: 150)
                //绘制一个直径为150、线条为红色虚线的圆环
                Circle()
                    .width(150)
                    .height(200)
                    .fillOpacity(0.0)
                    .strokeWidth(3)
                    .stroke(Color.Red)
                    .strokeDashArray([1, 2])
            }
                .width(100.percent)
                .margin(top: 15)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/30/v3/Go7ydVzPRWy_gN40DqJ2fA/zh-cn_image_0000002731378715.png?HW-CC-KV=V1&HW-CC-Date=20260903T111602Z&HW-CC-Expire=86400&HW-CC-Sign=BBAEBFE9861828E1631F5CD8FA1B8C6B09EB4867C04E0115BB12470FFC61D225)
