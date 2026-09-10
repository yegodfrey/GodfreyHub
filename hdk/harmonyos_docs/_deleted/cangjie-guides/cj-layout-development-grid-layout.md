---
name: cangjie-guides/cj-layout-development-grid-layout
title: 栅格布局（GridRow/GridCol）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-grid-layout
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 栅格布局（GridRow/GridCol）
---

# 栅格布局（GridRow/GridCol）

#### 概述

栅格布局是一种通用的辅助定位工具，对移动设备的界面设计有较好的借鉴作用。主要优势包括：

  1. 提供可循的规律：栅格布局可以为布局提供规律性的结构，解决多尺寸多设备的动态布局问题。通过将页面划分为等宽的列数和行数，可以方便地对页面元素进行定位和排版。

  2. 统一的定位标注：栅格布局可以为系统提供一种统一的定位标注，保证不同设备上各个模块的布局一致性。这可以减少设计和开发的复杂度，提高工作效率。

  3. 灵活的间距调整方法：栅格布局可以提供一种灵活的间距调整方法，满足特殊场景布局调整的需求。通过调整列与列之间和行与行之间的间距，可以控制整个页面的排版效果。

  4. 自动换行和自适应：栅格布局可以完成一对多布局的自动换行和自适应。当页面元素的数量超出了一行或一列的容量时，会自动换到下一行或下一列，并且在不同的设备上自适应排版，使得页面布局更加灵活和适应性强。




[GridRow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow)为栅格容器组件，需与栅格子组件[GridCol](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridcol)在栅格布局场景中联合使用。

#### 栅格容器GridRow

#### [h2]栅格系统断点

栅格系统以设备的水平宽度（[屏幕密度像素值](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-pixelunits)，单位vp）作为断点依据，定义设备的宽度类型，形成了一套断点规则。开发者可根据需求在不同的断点区间实现不同的页面布局效果。

栅格系统默认断点将设备宽度分为xs、sm、md、lg四类，尺寸范围如下：

断点名称 | 取值范围（vp） | 设备描述  
---|---|---  
xs | [0, 320） | 最小宽度类型设备。  
sm | [320, 520) | 小宽度类型设备。  
md | [520, 840) | 中等宽度类型设备。  
lg | [840, +∞) | 大宽度类型设备。  
  
在GridRow栅格组件中，允许开发者使用[breakpoints](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow#class-breakpoints)自定义修改断点的取值范围，最多支持6个断点，除了默认的四个断点外，还可以启用xl，xxl两个断点，支持六种不同尺寸（xs, sm, md, lg, xl, xxl）设备的布局设置。

断点名称 | 设备描述  
---|---  
xs | 最小宽度类型设备。  
sm | 小宽度类型设备。  
md | 中等宽度类型设备。  
lg | 大宽度类型设备。  
xl | 特大宽度类型设备。  
xxl | 超大宽度类型设备。  
  
  * 针对断点位置，开发者根据实际使用场景，通过一个单调递增数组设置。由于[breakpoints](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow#class-breakpoints)最多支持六个断点，单调递增数组长度最大为5。
        
        breakpoints: BreakPoints(value: [100.vp, 200.vp])

表示启用xs、sm、md共3个断点，小于100.vp为xs，100.vp-200.vp为sm，大于200.vp为md。
        
        breakpoints: BreakPoints(value: [320.vp, 520.vp, 840.vp, 1080.vp])

表示启用xs、sm、md、lg、xl共5个断点，小于320.vp为xs，320.vp-520.vp为sm，520.vp-840.vp为 md，840.vp-1080.vp为lg，大于1080.vp为xl。

  * 栅格系统通过监听窗口或容器的尺寸变化进行断点，通过reference设置断点切换参考物。 考虑到应用可能以非全屏窗口的形式显示，以应用窗口宽度为参照物更为通用。

例如，使用栅格的默认列数12列，通过断点设置将应用宽度分成六个区间，在各区间中，每个栅格子元素占用的列数均不同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            func build() {
                GridRow(
                    columns: 12,
                    breakpoints: BreakPoints(
                        value: [200.vp, 300.vp, 400.vp, 500.vp, 600.vp],
                        reference: BreakpointsReference.WindowSize
                    ),
                    direction: GridRowDirection.Row
                ) {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row() {
                                    Text(index.toString())
                                }
                            }
                                .width(100.percent)
                                .height(50.vp)
                                .backgroundColor(color)
                                .span(GridColOptions(xs: 2, sm: 3, md: 4, lg: 6, xl: 8, xxl: 12))
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/epWpw7JUR5uZu4hkwK6aSg/zh-cn_image_0000002701819324.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=4636A37CE62748AE4EDF7C6036D12D7A12094C99700F586CBD4DD842B76B26D1)




#### [h2]布局的总列数

GridRow中通过columns设置栅格布局的总列数。

  * columns默认值为12，即在未设置columns时，任何断点下，栅格布局被分成12列。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33), Color(213, 213, 213),
                Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217)];
            func build() {
                GridRow(columns: GridRowOptions(xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12)) {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row() {
                                    Text(index.toString())
                                }
                                    .width(100.percent)
                                    .height(50)
                            }.backgroundColor(color)
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/KyQe5iwiQpudsPQlw20RqA/zh-cn_image_0000002731538605.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=9D08F8305F6E056CF7E9F407E90B78D529985223AE5B9FE3D25C3DDDC77EC9BB)

  * 当columns为自定义值，栅格布局在任何尺寸设备下都被分为columns列。下面分别设置栅格布局列数为4和8，子元素默认占一列，效果如下：
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            @State
            var currentBp: String = "";
            func build() {
                Column {
                    Text("columns: 4")
                        .fontSize(20)
                        .fontColor(Color.Black)
                        .width(90.percent)
                    Row() {
                        GridRow(columns: 4) {
                            ForEach(
                                bgColors,
                                itemGeneratorFunc: {
                                    color: Color, index: Int64 => GridCol() {
                                        Row() {
                                            Text(index.toString())
                                        }
                                            .width(100.percent)
                                            .height(50)
                                    }.backgroundColor(color)
                                }
                            )
                        }
                            .width(100.percent)
                            .height(100.percent)
                            .onBreakpointChange({bp => currentBp = bp})
                    }
                        .height(160)
                        .border(color: Color.Blue, width: 2)
                        .width(90.percent)
                    Text("columns: 8")
                        .fontSize(20)
                        .fontColor(Color.Black)
                        .width(90.percent)
                    Row() {
                        GridRow(columns: 8) {
                            ForEach(
                                bgColors,
                                itemGeneratorFunc: {
                                    color: Color, index: Int64 => GridCol() {
                                        Row() {
                                            Text(index.toString())
                                        }
                                            .width(100.percent)
                                            .height(50)
                                    }.backgroundColor(color)
                                }
                            )
                        }
                            .width(100.percent)
                            .height(100.percent)
                            .onBreakpointChange({bp => currentBp = bp})
                    }
                        .height(160)
                        .border(color: Color.Blue, width: 2)
                        .width(90.percent)
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/FHEw6o1cSCmrqmpBfNTt0Q/zh-cn_image_0000002701659414.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=991CF0AF0D88182488BBB1E6F93A0FB2F2852C90A57ADAE80C80757D5604B677)

  * 当columns类型为[GridRowOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridrow#class-gridrowoptions)时，支持下面六种不同尺寸（xs, sm, md, lg, xl, xxl）设备的总列数设置，各个尺寸下数值可不同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            func build() {
                GridRow(
                    columns: GridRowOptions(xs: 12, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12),
                    breakpoints: BreakPoints(
                        value: [200.vp, 300.vp, 400.vp, 500.vp, 600.vp], //设置断点位置的单 调递增数组。
                        reference: BreakpointsReference.WindowSize
                    )
                ) {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row() {
                                    Text(index.toString())
                                }
                                    .width(100.percent)
                                    .height(50.vp)
                            }.backgroundColor(color)
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/DM3aQVUSR9Cep3yryg9zJQ/zh-cn_image_0000002731378629.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=65202F352AC575922AA496E7FBBAB47FB00369117EC6606AD4169A8B72B474F1)

若只设置sm, md的栅格总列数，则较小的尺寸使用默认columns值12，较大的尺寸使用前一个尺寸的columns。这里只设置sm:4, md:8，则较小尺寸的xs:12，较大尺寸的参照md的设置，lg:8, xl:8, xxl:8




#### [h2]排列方向

栅格布局中，可以通过设置GridRow的direction属性来指定栅格子组件在栅格容器中的排列方向。该属性可以设置为GridRowDirection.Row（从左往右排列）或GridRowDirection.RowReverse（从右往左排列），以满足不同的布局需求。通过合理的direction属性设置，可以使得页面布局更加灵活和符合设计要求。

  * 子组件默认从左往右排列。
        
        GridRow(direction: GridRowDirection.Row ){}

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/OMH_56Q5RiyaFp7DHqaT1A/zh-cn_image_0000002701819326.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=3E9CA3C3E494B37CF025A7372E2156FB0B43B09168D46A3A79DF6EC82A1D7E14)

  * 子组件从右往左排列。
        
        GridRow(direction: GridRowDirection.RowReverse ){}

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/hcLI7Vb-QMaD1YMCCMxrmg/zh-cn_image_0000002731538607.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=6086FF100AE82546769366138054D67CEA6775F9C1F1FE7D6FFEB77472D5B9FF)




#### [h2]子组件间距

GridRow中通过gutter属性设置子元素在水平和垂直方向的间距。

  * 当gutter类型为Length时，同时设置栅格子组件间水平和垂直方向边距且相等。下例中，设置子组件水平与垂直方向距离相邻元素的间距为10。
        
        GridRow( gutter: 10.vp ){}

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/Z2IQBBVwQn2OCxGPzDVxlg/zh-cn_image_0000002701659416.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=CCBBEF50F39EE1C4A7B621AEA95B9BFC3B6A98CD217040D8621F86E3D1936C88)

  * 当gutter类型为GutterOption时，单独设置栅格子组件水平垂直边距，x属性为水平方向间距，y为垂直方向间距。
        
        GridRow( gutter: GutterOption(x: 20.vp, y: 50.vp) ){}

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/SriSF03FQCqSqkwedPwxfw/zh-cn_image_0000002731378631.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=E07FD3AA0FE7A8E7D162E4D42818BF8B9BD26E09B00779AC7282A587BBFFD0C6)




#### 子组件GridCol

GridCol组件作为GridRow组件的子组件，通过给GridCol传参或者设置属性两种方式，设置span（占用列数），offset（偏移列数），order（元素序号）的值。

  * 设置span。
        
        GridCol( span: 2 ){}
        GridCol(){}.span(2)
        GridCol(){}.span(GridColOptions(xs:1, sm:2, md:3, lg:4, xl:12, xxl: 12))

  * 设置offset。
        
        GridCol( offset: 2 ){}
        GridCol(){}.gridColOffset((GridColOptions(xs:1, sm:2, md:3, lg:4, xl:12, xxl: 12)))

  * 设置order。
        
        GridCol( order: 2 ){}
        GridCol(){}.order(2)
        GridCol(){}.order(GridColOptions(xs:1, sm:2, md:3, lg:4, xl:12, xxl: 12))




#### [h2]span

子组件占栅格布局的列数，决定了子组件的宽度，默认为1。

  * 当类型为Int32时，子组件在所有尺寸设备下占用的列数相同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            func build() {
                GridRow(columns: 8) {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol(span: 2) {
                                Row() {
                                    Text(index.toString())
                                }
                                    .width(100.percent)
                                    .height(50.vp)
                            }.backgroundColor(color)
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/yhzf-K2nQpaAKXaOHLPhow/zh-cn_image_0000002701819328.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=A63304542583EDF1BBCF2E40ACA1AABB20B63411D8D0976866F38C07F4793D05)

  * 当类型为[GridColOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridcol#class-gridcoloptions)时，支持六种不同尺寸（xs, sm, md, lg, xl, xxl）设备中子组件所占列数设置，各个尺寸下数值可不同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            func build() {
                GridRow(columns: 8) {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row() {
                                    Text(index.toString())
                                }
                                    .width(100.percent)
                                    .height(50.vp)
                            }
                                .backgroundColor(color)
                                .span(GridColOptions(xs: 1, sm: 2, md: 3, lg: 4, xl: 12, xxl: 12))
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/9ix4kWmOTXuoC22YFBVmsg/zh-cn_image_0000002731538609.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=E5A3D4039018EA524B510C60903D1DB9A6F591BBCB97BCD05B49D9DE768B4289)




#### [h2]offset

栅格子组件相对于前一个子组件的偏移列数，默认为0。

  * 当类型为Int32时，子组件偏移相同列数。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            func build() {
                GridRow() {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol(offset: 2) {
                                Row() {
                                    Text(index.toString())
                                }
                                    .width(100.percent)
                                    .height(50.vp)
                            }.backgroundColor(color)
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/a3-a2OJtQUaK7eFwp1GzUQ/zh-cn_image_0000002701659418.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=899934C01D4DE528C61551DBB2FB5B39465D55041A1042629E70F4BB21BB8425)

栅格默认分成12列，每一个子组件默认占1列，偏移2列，每个子组件及间距共占3列，一行放四个子组件。

  * 当类型为[GridColOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridcol#class-gridcoloptions)时，支持六种不同尺寸（xs, sm, md, lg, xl, xxl）设备中子组件所占列数设置,各个尺寸下数值可不同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            @State
            var bgColors: Array<Color> = [Color(213, 213, 213), Color(150, 150, 150), Color(0, 74, 175), Color(39, 135, 217),
                Color(61, 157, 180), Color(23, 169, 141), Color(255, 192, 0), Color(170, 10, 33)];
            func build() {
                GridRow() {
                    ForEach(
                        bgColors,
                        itemGeneratorFunc: {
                            color: Color, index: Int64 => GridCol() {
                                Row() {
                                    Text(index.toString())
                                }
                                    .width(100.percent)
                                    .height(50.vp)
                            }
                                .backgroundColor(color)
                                .gridColOffset(GridColOptions(xs: 1, sm: 2, md: 3, lg: 4, xl: 12, xxl: 12))
                        }
                    )
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/qlyL4moLTUCYI46sAqN8wg/zh-cn_image_0000002731378633.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=9861F96B622C96A6524B7CF454DC19A6F4F761C02FB0209C4B2413CCD41C53E7)




#### [h2]order

栅格子组件的序号，决定子组件排列次序。当子组件不设置order或者设置相同的order, 子组件按照代码顺序展示。当子组件设置不同的order时，order较小的组件在前，较大的在后。

当子组件部分设置order，部分不设置order时，未设置order的子组件依次排序靠前，设置了order的子组件按照数值从小到大排列。

  * 当类型为Int32时，子组件在任何尺寸下排序次序一致。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                GridRow() {
                    GridCol(order: 4) {
                        Row() {
                            Text('1')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }.backgroundColor(Color(213, 213, 213))
                    GridCol(order: 3) {
                        Row() {
                            Text('2')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }.backgroundColor(Color(150, 150, 150))
                    GridCol(order: 2) {
                        Row() {
                            Text('3')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }.backgroundColor(Color(0, 74, 175))
                    GridCol(order: 1) {
                        Row() {
                            Text('4')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }.backgroundColor(Color(39, 135, 217))
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/EjiuCHaxTCOuU0OlgDtjkg/zh-cn_image_0000002701819330.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=FCD405D92D033E72209E16C49FF879970CEE1BB773D2023EC25D7D7209C35590)

  * 当类型为[GridColOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-grid-layout-gridcol#class-gridcoloptions)时，支持六种不同尺寸（xs, sm, md, lg, xl, xxl）设备中子组件排序次序设置。在xs设备中，子组件排列顺序为1234，sm为2341，md为3412，lg为2431。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                GridRow() {
                    GridCol() {
                        Row() {
                            Text('1')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }
                        .backgroundColor(Color.Red)
                        .order(GridColOptions(xs: 1, sm: 5, md: 3, lg: 7, xl: 12, xxl: 12))
                    GridCol() {
                        Row() {
                            Text('2')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }
                        .backgroundColor(Color(0xFFA500))
                        .order(GridColOptions(xs: 2, sm: 2, md: 6, lg: 1, xl: 12, xxl: 12))
                    GridCol() {
                        Row() {
                            Text('3')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }
                        .backgroundColor(Color(0xFFFF00))
                        .order(GridColOptions(xs: 3, sm: 3, md: 1, lg: 6, xl: 12, xxl: 12))
                    GridCol() {
                        Row() {
                            Text('4')
                        }
                            .width(100.percent)
                            .height(50.vp)
                    }
                        .backgroundColor(Color.Green)
                        .order(GridColOptions(xs: 4, sm: 4, md: 2, lg: 5, xl: 12, xxl: 12))
                }
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/16/v3/DogPYF-GTo64Jdb4UIdLWQ/zh-cn_image_0000002731538611.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=D412F27F9CABA66EA65469A2473B20369162D2E5336CBBE3AF0DF1FB81D58B7E)




#### 栅格组件的嵌套使用

栅格组件也可以嵌套使用，完成一些复杂的布局。

以下示例中，栅格把整个空间分为12份。第一层GridRow嵌套GridCol，分为中间大区域以及“footer”区域。第二层GridRow嵌套GridCol，分为“left”和“right”区域。子组件空间按照上一层父组件的空间划分，粉色的区域是屏幕空间的12列，绿色和蓝色的区域是父组件GridCol的12列，依次进行空间的划分。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            GridRow() {
                GridCol() {
                    GridRow() {
                        GridCol() {
                            Row() {
                                Text('left').fontSize(24)
                            }
                                .justifyContent(FlexAlign.Center)
                                .height(90.percent)
                        }
                            .backgroundColor(0xff41dbaa)
                            .span(GridColOptions(xs: 12, sm: 2, md: 12, lg: 12, xl: 12, xxl: 12))
                        GridCol() {
                            Row() {
                                Text('right').fontSize(24)
                            }
                                .justifyContent(FlexAlign.Center)
                                .height(90.percent)
                        }
                            .backgroundColor(0xff4168db)
                            .span(GridColOptions(xs: 12, sm: 10, md: 12, lg: 12, xl: 12, xxl: 12))
                    }.backgroundColor(0x19000000)
                }.span(GridColOptions(xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12))
    
                GridCol() {
                    Row() {
                        Text('footer')
                            .width(100.percent)
                            .textAlign(TextAlign.Center)
                    }
                        .width(100.percent)
                        .height(10.percent)
                        .backgroundColor(0xFEC0CD)
                }.span(GridColOptions(xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12))
            }
                .width(100.percent)
                .height(300)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/8UaIP9JaSS6zFq3sbbvmQw/zh-cn_image_0000002701659420.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=74FAFCC958FB8220C940F0ECF979B15FD2A550D508B3779F50B710F75FCFD912)

综上所述，栅格组件提供了丰富的自定义能力，功能异常灵活和强大。只需要明确栅格在不同断点下的Columns、Margin、Gutter及span等参数，即可确定最终布局，无需关心具体的设备类型及设备状态（如横竖屏）等。
