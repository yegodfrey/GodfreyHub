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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/1Rhl4eAOSvKHkOEEYSKsVQ/zh-cn_image_0000002731538583.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=57D6792E5FB5F58F4504C73B0B9A099E5641DB918422D17C3BAA7A7066483609)

#### 基本概念

  * 主轴：Flex组件布局方向的轴线，子元素默认沿着主轴排列。主轴开始的位置称为主轴起始点，结束位置称为主轴结束点。

  * 交叉轴：垂直于主轴方向的轴线。交叉轴开始的位置称为交叉轴起始点，结束位置称为交叉轴结束点。




#### 布局方向

在弹性布局中，容器的子元素可以按照任意方向排列。通过设置参数direction，可以决定主轴的方向，从而控制子元素的排列方向。

弹性布局方向图如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/8UggJanMRiO17P9YVdDvLA/zh-cn_image_0000002701659392.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=782BE559CC7302352F05A13E699C8327227CDEE4314B83F12E245A89BBAD450B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/N2tAGIulT0OxdS74nFTdTQ/zh-cn_image_0000002731378607.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=193A728E284FD45E8636D6E4BB405EBD14C622B41D428C3ABCDD6654CC70FA38)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/WUuxqLraRKK_Pfwtrq23ig/zh-cn_image_0000002731378607.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=CCAC4D98244084499492A1C2070C9DFEE2CF01A557FFD520C179AE8E18E0D2EF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/StNLXaW_TEW1V8u56MbZpw/zh-cn_image_0000002701819304.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=FE72E72A51E7045B2ABB91A65D56C78CC712A273F3C1F0863567AA1A299D784B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/M4jHRp7YRPK-qpmwYp60SQ/zh-cn_image_0000002731538585.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2171CA0C0B5A59ACB60BB8026F33232F1816D326B76B691C51DDAD999B301188)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/eVA-PlPSQry8V4yIF6jgXQ/zh-cn_image_0000002701659394.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=1819E9B7E9F91FD2F249CE093416ECB6A6BDBD1DCE3D385AEAA288449EC758A2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/LUI6M5s3Qqq7yAhfTz-xcw/zh-cn_image_0000002731378609.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=E26E7A3FBF42708D905B4AA9D1058DF15850B8B57870AE0C609BDFC7534783CD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/FEafSdMwRViPAj8bBcWnhg/zh-cn_image_0000002701819306.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=33FE7FE0FF0FDB313E18A26C40BBFD89D2A12F7D29F857A599E68153C8210799)




#### 主轴对齐方式

通过justifyContent参数设置子元素在主轴方向的对齐方式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/KpAv2DtRRhOtf3NjsFTHaA/zh-cn_image_0000002731538587.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=844DB2315C6835850936585E25C7F35194C3D09CBA16B5E69972EE61FC380940)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/0PW8XnKfTV2Q1etmdhE5kQ/zh-cn_image_0000002701659396.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7C51056B80AFC9B5373D626FAAB889C205CB31B8FEFB38190AD82984C7AEA2ED)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/HPlGVXawRHqYljN9dkEpHw/zh-cn_image_0000002731378611.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=28C53F485408A3EB57907A1D7C42C441876269B7C6C64ECEB77BEE1BBD892240)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/n3BXbYOYTfaoXrXbCwLYTQ/zh-cn_image_0000002701819308.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=96385B3AD724738A24DF45425A916EB522D33218C06286A6E813BAD54D9938C8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/c2vxyupvQ7CDnB2QSoOW7g/zh-cn_image_0000002731538589.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=1EF169A50E5360247FC94440D01C3EF61198812EEB367C9CD0D59328D9E98324)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/m36fjPwxRaeSPrQu3S8u7A/zh-cn_image_0000002701659398.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=035065FD5DCAF125001F1C93B8F8733FB2987A21D49FF2D4D24324B9FE2C2C35)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/nfKhCc9bQ2mlMREgNOLc8w/zh-cn_image_0000002731378613.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7BC9965EBA6602855485D3FC5372E1C2033FA8C9174218D836842293F1B0B27B)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/cXHRIqEoQYCOoW-nLZIBiA/zh-cn_image_0000002701819310.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=0570F5661529BB4C83732EBAC57D03236101F0375F441DA533D8C636F83CB956)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/9icng3-rQ_-Nj0s2OQ0yXw/zh-cn_image_0000002731538591.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=0FC037A5D8A5CBA19EFCDB5B75F1F72201687FFC0ADEC80243D5F63FE660B34C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3/v3/PmoNjovYQ7-CyA7JOzzjzg/zh-cn_image_0000002701659400.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7D803F59996A4A99D641B9DB435C5D8339A4852D28893D2D2D93692461548188)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/XRpMKqR9ReGM2WZ6QNudbg/zh-cn_image_0000002731378615.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2C4CD3CBA3B3047592A5E51638AE3F5304911D01E853E1A3456B3D0B7452F24C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b6/v3/JfmAd9IyTGy8QIh4BdfRzw/zh-cn_image_0000002701819312.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=6139CC878FD33C4374CCE77BF25CB404041E06903F46F34FDF47E98D2374DAF9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/549B_bySTlyCj4uZZWqmUQ/zh-cn_image_0000002731538593.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=8F787C79FE4CF013C3795AB966D3F321A6B11AFCA19D1947515BC3B004439066)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/GvudjAZRTI-MfothYKkF0A/zh-cn_image_0000002701659402.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2032639C754C89ADF9D1EFC02172DD2B65AF493B53C555C7199038EB497020A3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a2/v3/vjOFHWkzToOpZ3RCDzOLgg/zh-cn_image_0000002731378617.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=1941F03EC57852FE9AA72D1A2B7C935CE0B9E9FF5848207F7C068DEEEAB70947)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/IHdn6pacQYmI-jPu2321tg/zh-cn_image_0000002701819314.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=316E87473261FB9A04D0E7EADC56FA248A94B71ADD26971B632A54267A986358)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/1Csoc7ttRnO29Ytpw8K9XA/zh-cn_image_0000002731538595.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=5D0BADC7CF36A1A1E0E118BEC542F0A13E2FDB71B3E54AAA711E5DDF0A5F2348)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/5y_6jvIDT-SsIctOm1Z3dQ/zh-cn_image_0000002701659404.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=8EB6CA787B6F88621D66E32740969C79DF82A7ED2FE5B1A6311116AD3D4D0375)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/WpOC3UdIRoKJT7Nf6rP1Fw/zh-cn_image_0000002731378619.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=05FFCCC97E481398573CD10925B0432B3E2BABA9D233384E4E8B7C4230AC3E74)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/iH3TBQ_1Q7uOGlcjLHmJsA/zh-cn_image_0000002701819316.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=5C6D225FEDBA2D087419C83B1461A4D569FE1AF038C7B2777E867D5D5B0727A7)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/EbPzyDlyTbCttxaz-TbRBg/zh-cn_image_0000002731538597.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=85EC4D00E52F8DFA322EB3BF7C57A7D4A3293A4B7FD3BDFAEE93DBB7973E704F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/Ab64tXx0Q-y35_M_PB1mvg/zh-cn_image_0000002701659406.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=6B92557B19884C950B98171F5BDAA3856B6606AE15E00EAA38683AED0E7FEB94)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/QfrLn2jrTiuWIQZ1g7YSgQ/zh-cn_image_0000002731378621.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=A807E6F075E95E95A9F0CAEEA58BFC75C5EA40DBADB2FE4424132566ACA96D30)




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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/eP1lxPkfRHio64ANASJemw/zh-cn_image_0000002701819318.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2016DF8EEEA316A1DEAE010E06FA63FF2B6112251A9DA40683FB94F67EB6E7C4)
