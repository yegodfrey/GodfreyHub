---
name: cangjie-guides/cj-layout-development-flex-layout
title: 弹性布局（Flex）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-flex-layout
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 弹性布局（Flex）
---

# 弹性布局（Flex）

#### 概述

弹性布局（[Flex](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex)）提供更加有效的方式对容器中的子元素进行排列、对齐和分配剩余空间。常用于页面头部导航栏的均匀分布、页面框架的搭建、多行数据的排列等。

容器默认存在主轴与交叉轴，子元素默认沿主轴排列，子元素在主轴方向的尺寸称为主轴尺寸，在交叉轴方向的尺寸称为交叉轴尺寸。

**图1** 主轴为水平方向的Flex容器示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/-LpIE6H5Rn2Krpskd2PR3A/zh-cn_image_0000002713398700.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=9286EEB8E95ED73E18BFC8605740C7CE18A2D3F0DABA3AA1D16D3C4BDCDD66C4)

#### 基本概念

  * 主轴：Flex组件布局方向的轴线，子元素默认沿着主轴排列。主轴开始的位置称为主轴起始点，结束位置称为主轴结束点。

  * 交叉轴：垂直于主轴方向的轴线。交叉轴开始的位置称为交叉轴起始点，结束位置称为交叉轴结束点。




#### 布局方向

在弹性布局中，容器的子元素可以按照任意方向排列。通过设置参数direction，可以决定主轴的方向，从而控制子元素的排列方向。

弹性布局方向图如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/PPdRykPPQRWsiq5zkIt1Jg/zh-cn_image_0000002743077631.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=94825C961993BB046518E9FC6D71C56267796DF27232EF06E108771438AC864C)

  * FlexDirection.Row（默认值）：主轴为水平方向，子元素从起始端沿着水平方向开始排布。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(direction: FlexDirection.Row) {
                    Text('1')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .height(70)
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/fjk58YmITTKLPMvgmdl7Hg/zh-cn_image_0000002713558670.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B1BF12AFC8B758CBD3032A803527F59B454678B82F4ADE086A5010683BC2CB9E)

  * FlexDirection.RowReverse：主轴为水平方向，子元素从终点端沿着FlexDirection. Row相反的方向开始排布。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(direction: FlexDirection.RowReverse) {
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('1')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .height(70)
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/pTqubJkWT0mjwBw9_QfOYQ/zh-cn_image_0000002713558670.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=BCF6E7F35054C69D59E841D282064AF978376F4ADB0FCB1D06959F514B9655FC)

  * FlexDirection.Column：主轴为垂直方向，子元素从起始端沿着垂直方向开始排布。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(direction: FlexDirection.Column) {
                    Text('1')
                        .width(100.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(100.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(100.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .height(70)
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/03xju3wTS8OXf4O8Y9M1EQ/zh-cn_image_0000002743197583.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B10DD1132C6E2335F0F7B2BBAFA00C026A36D219091C13516D7386E5D98EF62F)

  * FlexDirection.ColumnReverse：主轴为垂直方向，子元素从终点端沿着FlexDirection. Column相反的方向开始排布。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(direction: FlexDirection.ColumnReverse) {
                    Text('1')
                        .width(100.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(100.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(100.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .height(70)
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/DDD66agOTeaEPi5f3dD5Eg/zh-cn_image_0000002713398702.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E2B1706D58771399E276F9AFC6207C040292B58D97C1B8279483349065BC4B6A)




#### 布局换行

弹性布局分为单行布局和多行布局。默认情况下，Flex容器中的子元素都排在一条线（又称“轴线”）上。wrap属性控制当子元素主轴尺寸之和大于容器主轴尺寸时，Flex是单行布局还是多行布局。在多行布局时，通过交叉轴方向，确认新行排列方向。

  * FlexWrap.NoWrap（默认值）：不换行。如果子元素的宽度总和大于父元素的宽度，则子元素会被压缩宽度。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(wrap: FlexWrap.NoWrap) {
                    Text('1')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/F9Vv07PKSdytegg11o_QAA/zh-cn_image_0000002743077633.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=81F1CF2F6DA20E3B15D63BCB2944A2FDEF2C371D66B242714352CA91E8A10F9F)

  * FlexWrap.Wrap：换行，每一行子元素按照主轴方向排列。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(wrap: FlexWrap.Wrap) {
                    Text('1')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/QSmNzGykT8mdXU_F17XM-A/zh-cn_image_0000002713558672.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=91F985F3095C04E8F8137F8CDD4DC961426D2C54CA1A6BF2BA8361E074F53E11)

  * FlexWrap.WrapReverse：换行，每一行子元素按照主轴反方向排列。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(wrap: FlexWrap.WrapReverse) {
                    Text('1')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(50.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/bRuAJAFAQIKA-GX-u8wK3A/zh-cn_image_0000002743197585.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B87531A6A7A460164EF64627A71532EE0E9112DA6FE0A36BF60769C1C580349B)




#### 主轴对齐方式

通过justifyContent参数设置子元素在主轴方向的对齐方式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/THbaMclTRRiUA1Ho74AE9Q/zh-cn_image_0000002713398704.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=27B7A1FD09927414CB0ED55D2BA2AF0C6D69C01B4EDD2BB5115C6A16DE2C1409)

  * FlexAlign.Start（默认值）：子元素在主轴方向起始端对齐，第一个子元素与父元素边沿对齐，其他元素与前一个元素对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.Start) {
                    Text('1')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(top: 10, bottom: 10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/DAv2yMs_SumRjV0ZRiQvYg/zh-cn_image_0000002743077635.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=74926718E9AFB74B1001B111ACD5A03FBC34A3C687241D3CFF8A7C1D8C294112)

  * FlexAlign.Center：子元素在主轴方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.Center) {
                    Text('1')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(top: 10, bottom: 10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/sD3e8ZAmTCWIKdkTRQPX4w/zh-cn_image_0000002713558674.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=A86BD98B7AFA50F08AB70F51D2C920198D504FE46B82AE9C5EF0CA4AE06FD285)

  * FlexAlign.End：子元素在主轴方向终点端对齐，最后一个子元素与父元素边沿对齐，其他元素与后一个元素对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.End) {
                    Text('1')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(top: 10, bottom: 10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/ulWrHxkmTxeWREabgfVWWQ/zh-cn_image_0000002743197587.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=3C66B55139AA6FB8C3B82CD3DB8C358EB37DD0354D9B7B2E1B281C5F0652AF46)

  * FlexAlign.SpaceBetween：Flex主轴方向均匀分配弹性元素，相邻子元素之间距离相同。第一个子元素和最后一个子元素与父元素边沿对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween) {
                    Text('1')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(top: 10, bottom: 10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/vqAaC99mSfeMx0Mi9I-MkA/zh-cn_image_0000002713398706.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=2E6D6BCCBD43D7529730E9AF45AFD9018B23BDBF7F5CDBA84D57B840DE1F2F36)

  * FlexAlign.SpaceAround：Flex主轴方向均匀分配弹性元素，相邻子元素之间距离相同。第一个子元素到主轴起始端的距离和最后一个子元素到主轴终点端的距离是相邻元素之间距离的一半。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceAround) {
                    Text('1')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(top: 10, bottom: 10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/YyafLNiwTraH7g5a8kjMzg/zh-cn_image_0000002743077637.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=98EDF81E7CE8C78D02C626D639B5A2AA7AD1BEC8066CADCA1626F19ED9603F98)

  * FlexAlign.SpaceEvenly：Flex主轴方向元素等间距布局，相邻子元素之间的间距、第一个子元素与主轴起始端的间距、最后一个子元素到主轴终点端的间距均相等。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceEvenly) {
                    Text('1')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(20.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(90.percent)
                    .padding(top: 10, bottom: 10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/2bTFIwxRQbawf36S58YuZA/zh-cn_image_0000002713558676.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=349BFE256EC95B5A3386243760B22DB127C48D0D50DDB12C0C7EB4199D89D9DB)




#### 交叉轴对齐方式

容器和子元素都可以设置交叉轴对齐方式，且子元素设置的对齐方式优先级较高。

#### [h2]容器组件设置交叉轴对齐

可以通过Flex组件的alignItems参数设置子元素在交叉轴的对齐方式。

  * ItemAlign.Auto：使用Flex容器中默认配置。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(alignItems: ItemAlign.Auto) {
                    Text('1')
                        .width(33.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(40)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .size(width: 90.percent, height: 80)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/HiIfZxLnSNqIjtf8a4RewA/zh-cn_image_0000002743197589.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=D89497B8DB6307482FBAF1283E9CA9F672BEA30EE451196A35934152FE37CE0C)

  * ItemAlign.Start：交叉轴方向首部对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(alignItems: ItemAlign.Start) {
                    Text('1')
                        .width(33.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(40)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .size(width: 90.percent, height: 80)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/2I_LnWLtR2u5OCNWXiUofQ/zh-cn_image_0000002713398708.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=C24522869B057FBA3B108E8791E0064418741AFD266CF0D64F07D41F6EC1ED3B)

  * ItemAlign.Center：交叉轴方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(alignItems: ItemAlign.Center) {
                    Text('1')
                        .width(33.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(40)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .size(width: 90.percent, height: 80)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/4ex1c6RtQBmWLZsg_iRYHA/zh-cn_image_0000002743077639.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=E4B121349F6C4AC21A8A05C01853B19B3942F5CAF667CB0661B87BCD66E4DB8C)

  * ItemAlign.End：交叉轴方向底部对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(alignItems: ItemAlign.End) {
                    Text('1')
                        .width(33.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(40)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .size(width: 90.percent, height: 80)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/X9hgkhrkTFe3u8xguG0Oiw/zh-cn_image_0000002713558678.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=418DFBA79FC8991A2597715234C472DD679905D0ED9A5D6373F4F23CFA4B5E02)

  * ItemAlign.Stretch：交叉轴方向拉伸填充，在未设置尺寸时，拉伸到容器尺寸。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(alignItems: ItemAlign.Stretch) {
                    Text('1')
                        .width(33.percent)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .backgroundColor(0xF5DEB3)
                }
                    .size(width: 90.percent, height: 80)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/jMW6DXrsSiy5ZTFgd3ijrA/zh-cn_image_0000002743197591.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=A43A25908BA480394ABF81BFEEA17A9EE5512F2D86B3437433F6BD014AF8F907)

  * ItemAlign.Baseline：交叉轴方向文本基线对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(alignItems: ItemAlign.Baseline) {
                    Text('1')
                        .width(33.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(33.percent)
                        .height(40)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(33.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .size(width: 90.percent, height: 80)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/p6V5L2RTSNmA6Ug4952YgQ/zh-cn_image_0000002713398710.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=6A6ADB28881CFF8490E36CD9EED0B13049AB2AF7D5C082FFFE827B10401E386F)




#### [h2]子元素设置交叉轴对齐

子元素的[alignSelf](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout#func-alignselfitemalign)属性也可以设置子元素在父容器交叉轴的对齐格式，且会覆盖Flex布局容器中alignItems配置。如下例所示：
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Flex(direction: FlexDirection.Row, alignItems: ItemAlign.Center) { // 容器组件设置子元素居中
                Text('alignSelf Start')
                    .width(25.percent)
                    .height(80)
                    .alignSelf(ItemAlign.Start)
                    .backgroundColor(0xF5DEB3)
                Text('alignSelf Baseline')
                    .alignSelf(ItemAlign.Baseline)
                    .width(25.percent)
                    .height(80)
                    .backgroundColor(0xD2B48C)
                Text('alignSelf Baseline')
                    .width(25.percent)
                    .height(100)
                    .backgroundColor(0xF5DEB3)
                    .alignSelf(ItemAlign.Baseline)
                Text('no alignSelf')
                    .width(25.percent)
                    .height(100)
                    .backgroundColor(0xD2B48C)
                Text('no alignSelf')
                    .width(25.percent)
                    .height(100)
                    .backgroundColor(0xF5DEB3)
            }
                .width(90.percent)
                .height(220)
                .backgroundColor(0xAFEEEE)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/cNZJMwLsQQa9bhElAaQGlQ/zh-cn_image_0000002743077641.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=C8B05F58FF8B26A8836674F6385D7A78B2DC31484525D5808CA4ED19F554FEEE)

上例中，Flex容器中alignItems设置交叉轴子元素的对齐方式为居中，子元素自身设置了alignSelf属性的情况，覆盖父组件的alignItems值，表现为alignSelf的定义。

#### [h2]内容对齐

可以通过[alignContent](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex#initflexdirection-flexwrap-flexalign-itemalign-flexalign----unit)参数设置子元素各行在交叉轴剩余空间内的对齐方式，只在多行的Flex布局中生效，可选值有：

  * FlexAlign.Start：子元素各行与交叉轴起点对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.Start) {
                    Text('1')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(60.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(40.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('4')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('5')
                        .width(20.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(100)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/scPoybKOQ1ORi7yPu5_dSw/zh-cn_image_0000002713558680.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=AD957E6FA22C2538A29AE82EACDFC0907A9781C13B50479F992A9BBDB0B33572)

  * FlexAlign.Center：子元素各行在交叉轴方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.Center) {
                    Text('1')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(60.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(40.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('4')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('5')
                        .width(20.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(100)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/oycrVtWJQx-Hh22eFP-ijA/zh-cn_image_0000002743197593.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=6A708092FAE9F39951360E0E32F05538BF7F2660D8AB5A32209DB4AAFC474076)

  * FlexAlign.End：子元素各行与交叉轴终点对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.End) {
                    Text('1')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(60.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(40.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('4')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('5')
                        .width(20.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(100)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/aa/v3/uJQ1y8AcQACFl5DHpeHYIw/zh-cn_image_0000002713398712.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=21897844791A14211C6D6C5E04D024F9D8A60C51B31E9527ACDCD875B04F7C21)

  * FlexAlign.SpaceBetween：子元素各行与交叉轴两端对齐，各行间垂直间距平均分布。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceBetween) {
                    Text('1')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(60.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(40.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('4')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('5')
                        .width(20.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(100)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/66lfFVpKTSGJgPPionOm0A/zh-cn_image_0000002743077643.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=6E5C3CB67FD24A745ABE0B3AA23F461E41ADE67DE83DA75D0D6A1B580D0F00C6)

  * FlexAlign.SpaceAround：子元素各行间距相等，是元素首尾行与交叉轴两端距离的两倍。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceAround) {
                    Text('1')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(60.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(40.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('4')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('5')
                        .width(20.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(100)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/tdBw8ppyRZmU1Xvbg3HsKA/zh-cn_image_0000002713558682.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=2A829C9D5CF8A8E7DCDD042D36BB917F3B19DC2B0A49DCBB26F2E43CBD40D7E8)

  * FlexAlign.SpaceEvenly: 子元素各行间距，子元素首尾行与交叉轴两端距离都相等。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(justifyContent: FlexAlign.SpaceBetween, wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceEvenly) {
                    Text('1')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('2')
                        .width(60.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('3')
                        .width(40.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                    Text('4')
                        .width(30.percent)
                        .height(20)
                        .backgroundColor(0xF5DEB3)
                    Text('5')
                        .width(20.percent)
                        .height(20)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(100)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/KVlgt0BKTeiD4wSWkQQrbw/zh-cn_image_0000002743197595.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=0CBB93369A8711037D0381A0F2BD17A32CA2BD03EF2535EFF5A0FD0DB3458C9F)




#### 自适应拉伸

在弹性布局父组件尺寸过小时，通过子元素的以下属性设置其在父容器的占比，达到自适应布局。

  * [flexBasis](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout#func-flexbasislength)：设置子元素在父容器主轴方向上的基准尺寸。如果设置了该属性，则子项占用的空间为该属性所设置的值；如果没设置该属性，那子项的空间为width/height的值。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex() {
                    Text('flexBasis("auto")')
                        .flexBasis(LengthMetrics.AUTO) // 未设置width以及flexBasis值为LengthMetrics.AUTO，内容自身宽度
                        .height(100)
                        .backgroundColor(0xF5DEB3)
                    Text('flexBasis("auto")' + ' width("40%")')
                        .width(40.percent)
                        .flexBasis(LengthMetrics.AUTO) //设置width以及flexBasis值为LengthMetrics.AUTO，使用width的值
                        .height(100)
                        .backgroundColor(0xD2B48C)
        
                    Text('flexBasis(100)') // 未设置width以及flexBasis值为100，宽度为100.vp
                        .flexBasis(100)
                        .height(100)
                        .backgroundColor(0xF5DEB3)
        
                    Text('flexBasis(100)')
                        .flexBasis(100)
                        .width(200) // flexBasis值为100，覆盖width的设置值，宽度为100.vp
                        .height(100)
                        .backgroundColor(0xD2B48C)
                }
                    .width(90.percent)
                    .height(120)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/q5AcZYncRVWcYbbffEcOEw/zh-cn_image_0000002713398714.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=C3CD51FEA443D8D98455331041276FBDF4DB399149D14FC7094244C48416E954)

  * [flexGrow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout#func-flexgrowfloat64)：设置父容器的剩余空间分配给此属性所在组件的比例。用于分配父组件的剩余空间。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex() {
                    Text('flexGrow(2)')
                        .flexGrow(2)
                        .width(100)
                        .height(100)
                        .backgroundColor(0xF5DEB3)
                    Text('flexGrow(3)')
                        .flexGrow(3)
                        .width(100)
                        .height(100)
                        .backgroundColor(0xD2B48C)
        
                    Text('no flexGrow')
                        .width(100)
                        .height(100)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(380)
                    .height(120)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/vbt2g6PHTkGlTe5RDsd3Vw/zh-cn_image_0000002743077645.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=7F331D933E287EEA4CA8D69FE3C578C2A8F41D501961AE2AD0D7166296DD3F68)

父容器宽度420.vp，三个子元素原始宽度为100.vp，左右padding为20.vp，总和320.vp，剩余空间100.vp根据flexGrow值的占比分配给子元素，未设置flexGrow的子元素不参与分配。

第一个元素以及第二个元素以2:3分配剩下的100.vp。第一个元素为100.vp+100.vp * 2/5=140.vp，第二个元素为100.vp+100.vp* 3/5=160.vp。

  * [flexShrink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-flexlayout#func-flexshrinkfloat64): 当父容器空间不足时，子元素的压缩比例。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Flex(direction: FlexDirection.Row) {
                    Text('flexShrink(3)')
                        .flexShrink(3)
                        .width(200)
                        .height(100)
                        .backgroundColor(0xF5DEB3)
        
                    Text('no flexShrink')
                        .width(200)
                        .height(100)
                        .backgroundColor(0xD2B48C)
        
                    Text('flexShrink(2)')
                        .flexShrink(2)
                        .width(200)
                        .height(100)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(380)
                    .height(120)
                    .padding(10)
                    .backgroundColor(0xAFEEEE)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/Pjmo9vW4RlK-H-lQedBoiw/zh-cn_image_0000002713558684.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=DE9CBC531BA4C6EC156EDD239E17BDC32BEC4E90F34C4C0800C0EF70DA03D31C)




#### 场景示例

使用弹性布局，可以实现子元素沿水平方向排列，两端对齐，子元素间距平分，垂直方向上子元素居中的效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Column(space: 5) {
                    Flex(direction: FlexDirection.Row, wrap: FlexWrap.NoWrap, justifyContent: FlexAlign.SpaceBetween,
                        alignItems: ItemAlign.Center) {
                        Text('1')
                            .width(30.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text('2')
                            .width(30.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text('3')
                            .width(30.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                    }
                        .height(70)
                        .width(90.percent)
                        .backgroundColor(0xAFEEEE)
                }
                    .width(100.percent)
                    .margin(top: 5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/t_lcQwvGSQyWFs4MVO8Zgw/zh-cn_image_0000002743197597.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4F4106807EC137FF8B76BFD3849E7E3AC8C3A578B009254FE43145D19573DDF3)
