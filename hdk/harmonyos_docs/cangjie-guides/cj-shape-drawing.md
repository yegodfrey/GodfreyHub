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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/g-I5KoeeTfe7MptU_Xp7aw/zh-cn_image_0000002713398804.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=5809C30BD81440B08513355B744B00A90A752E4398F87A16F16B29848BD4AD69)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/DVc92KRKRQC0s-ZyYMTCtA/zh-cn_image_0000002743077735.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=FE275A50D491D006FB51E6488D8DF4B7FBB04F185B07BC406C8548134C5BC0A8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/DZLX6ubrSeajDgJu0nZAhw/zh-cn_image_0000002713558774.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=1A5C4A63D8A8C120D1E8BEFBCA63772C847C6AC6B650D1196E888EB77FCF85F4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/xTp6LerxRcGEsRGZ750Ngw/zh-cn_image_0000002743197687.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=217ABDF2B0475BB620E9817167A7777BB912715EDF2DA7C6310E64F9A13E4E79)

#### 自定义样式

绘制组件支持通过各种属性对组件样式进行更改。

  * 通过[fill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-fillresourcecolor)可以设置组件填充区域颜色。
        
        Path()
            .width(100)
            .height(100)
            .commands('M150 0 L300 300 L0 300 Z')
            .fill(0xE87361)
            .strokeWidth(0)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/NQX4KWarTHqw1lNQHFsOlw/zh-cn_image_0000002713398806.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=BA43DB8C1FAA2DFCB092B8BDEDA722CDF9B104C194ABF545F8400FEBFE851986)

  * 通过[stroke](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-strokeresourcecolor)可以设置组件边框颜色。
        
        Path()
            .width(100)
            .height(100)
            .fillOpacity(0.0)
            .commands('M150 0 L300 300 L0 300 Z')
            .stroke(Color.Red)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/tCfmObG6SIepan5NVrhwpQ/zh-cn_image_0000002743077737.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=951204840C5D9E9B5C77519501C3696379ABF3BE394DDB28FF42F6535B90E54B)

  * 通过[strokeOpacity](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-strokeopacityappresource)可以设置边框透明度。
        
        Path()
            .width(100)
            .height(100)
            .fillOpacity(0.0)
            .commands('M150 0 L300 300 L0 300 Z')
            .stroke(Color.Red)
            .strokeWidth(10)
            .strokeOpacity(0.2)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/87_0wKNdT9WT_1KOZ8O6QQ/zh-cn_image_0000002713558776.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=119F391B37080B506D391A3D2328B38515108DE9D37E6CCE51F9A0E640B98332)

  * 通过[antiAlias](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-graphic-drawing-common#func-antialiasbool)设置是否开启抗锯齿，默认值为true（开启抗锯齿）。
        
        // 开启抗锯齿
        Circle()
            .width(150)
            .height(200)
            .fillOpacity(0.0)
            .strokeWidth(5)
            .stroke(Color.Black)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b0/v3/QlKbsb3yQYi-WDdWgWmfMA/zh-cn_image_0000002743197689.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=67FB18BEB8051F925D5D932DC07F7A16819DAFB3D41E0ABCDFF6620426C08432)
        
        // 关闭抗锯齿
        Circle()
            .width(150)
            .height(200)
            .fillOpacity(0.0)
            .strokeWidth(5)
            .stroke(Color.Black)
            .antiAlias(false)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/VVrd8Y1USXSAsJ1jS1neMA/zh-cn_image_0000002713398808.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=1E5866273C9D3E73B84846C9DB8957C2149583942BA78383A8E4A45066FCBBA6)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/l9XW8mmUTwiocOgSvkEGWA/zh-cn_image_0000002743077739.jpg?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=4100BE124CB9598525C944BE04D569C924D443F12F1D47BD118F33BA31910BA6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/b_eNhizETXKVEf7sJbL2xw/zh-cn_image_0000002713558778.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=D507F828B189CEEBE1BD08003DEA8ED6AB786C811F160238386E7A0092B70371)
