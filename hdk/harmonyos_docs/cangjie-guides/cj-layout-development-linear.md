---
name: cangjie-guides/cj-layout-development-linear
title: 线性布局（Row/Column）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-linear
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 线性布局（Row/Column）
---

# 线性布局（Row/Column）

#### 概述

线性布局（LinearLayout）是开发中最常用的布局，通过线性容器[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)和[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)构建。线性布局是其他布局的基础，其子元素在线性方向上（水平方向和垂直方向）依次排列。线性布局的排列方向由所选容器组件决定，Column容器内子元素按照垂直方向排列，Row容器内子元素按照水平方向排列。根据不同的排列方向，开发者可选择使用Row或Column容器创建线性布局。

**图1** Column容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/7BvRL3w-QhqyAUJTVqfN8A/zh-cn_image_0000002713558648.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=AAB3122D9E6F11F2EE5BFCF8702F6E75290F7262F15AEE4B6D30035C9347828C)

**图2** Row容器内子元素排列示意图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/UwDzcH7KSzuFUrc_GcdjRg/zh-cn_image_0000002743197561.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=0316CAA22836E98229BF357638368EB90B99BFCABB08257074347B7C82D88226)

#### 基本概念

  * 布局容器：具有布局能力的组件容器，可以承载其他元素作为其子元素，布局容器会对其子元素进行尺寸计算和布局排列。

  * 布局子元素：布局容器内部的元素。

  * 主轴：线性布局容器在布局方向上的轴线，子元素默认沿主轴排列。Row容器主轴为水平方向，Column容器主轴为垂直方向。

  * 交叉轴：垂直于主轴方向的轴线。Row容器交叉轴为垂直方向，Column容器交叉轴为水平方向。

  * 间距：布局子元素的间距。




#### 布局子元素在排列方向上的间距

在布局容器内，可以通过space属性设置排列方向上子元素的间距，使各子元素在排列方向上有等间距效果。

#### [h2]Column容器内排列方向上的间距

**图3** Column容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/qq9DJ9BnSTGW_bI_QmctRw/zh-cn_image_0000002713398680.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=F7671AF6601AF36AA37478FE10465B67D0BB0CA7DEE0848941AF163DDC32DBF6)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column(space: 20) {
                Text('space: 20')
                    .fontSize(15)
                    .fontColor(Color.Gray)
                    .width(90.percent)
                Row()
                    .width(90.percent)
                    .height(50)
                    .backgroundColor(0xF5DEB3)
                Row()
                    .width(90.percent)
                    .height(50)
                    .backgroundColor(0xD2B48C)
                Row()
                    .width(90.percent)
                    .height(50)
                    .backgroundColor(0xF5DEB3)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/QSYOWd2OTfeOzWjqZjLXHw/zh-cn_image_0000002743077611.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=17192740D7F6E8A5DFFF273AE67EA3587093409DB2C03054724B86A6C07EF601)

#### [h2]Row容器内排列方向上的间距

**图4** Row容器内排列方向的间距图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/a8BFGx1lTAGDlxN2OOfhkg/zh-cn_image_0000002713558650.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=C5C20885A4D88CD12DD9222317B046D545A8D42BA708653DA39367E20733751D)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Row(space: 35) {
                Text('space: 35')
                    .fontSize(15)
                    .fontColor(Color.Gray)
                Row()
                    .width(10.percent)
                    .height(150)
                    .backgroundColor(0xF5DEB3)
                Row()
                    .width(10.percent)
                    .height(150)
                    .backgroundColor(0xD2B48C)
                Row()
                    .width(10.percent)
                    .height(150)
                    .backgroundColor(0xF5DEB3)
            }.width(90.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/HBdbuIPYRUCVei9RFouS8A/zh-cn_image_0000002743197563.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=7CD5FF54C317DA6077EA1E4E6189937B4B4BDE3E84764AFC654733380F4EBB76)

#### 布局子元素在交叉轴上的对齐方式

在布局容器内，可以通过alignItems属性设置子元素在交叉轴（排列方向的垂直方向）上的对齐方式。且在各类尺寸屏幕中，表现一致。其中，交叉轴为垂直方向时，取值为[VerticalAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-verticalalign)类型，水平方向取值为[HorizontalAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-horizontalalign)类型。

alignSelf属性用于控制单个子元素在容器交叉轴上的对齐方式，其优先级高于alignItems属性，如果设置了alignSelf属性，则在单个子元素上会覆盖alignItems属性。

#### [h2]Column容器内子元素在水平方向上的排列

**图5** Column容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/Q7z0dj4tQrCsE6IRSgMFxw/zh-cn_image_0000002713398682.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=514547291B1330732E9D62A4FC6FE21A875219CA9778D9BD8614EDC0B3E55EFB)

  * HorizontalAlign.Start：子元素在水平方向左对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .alignItems(HorizontalAlign.Start)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/yHgHDq6NTF2bEMP8dWciTA/zh-cn_image_0000002743077613.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=EC6CD62C3450C92481732AE9CA59984E629C89DD5FB8017C794AF354D5AC3C20)

  * HorizontalAlign.Center：子元素在水平方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .alignItems(HorizontalAlign.Center)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/D8B7LeirQGi0yc2QlJeuEw/zh-cn_image_0000002713558652.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4154E1933F2144C5C13C441E905E1520D48CC85335147FCE89B0AE9916EBFD0D)

  * HorizontalAlign.End：子元素在水平方向右对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .alignItems(HorizontalAlign.End)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/nI1EzRETR3e8aTJ_qM-W5Q/zh-cn_image_0000002743197565.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=BAF0ADC4222FF35BAC689025B2BAE0635D94E3DB9AD8976272E00806ED84AF41)




#### [h2]Row容器内子元素在垂直方向上的排列

**图6** Row容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/x0t3r_KwTO-wt3XLVPUUtA/zh-cn_image_0000002713398684.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=62BFE4C6937578B59780FAD17BCAC7255581FEC6C4C4BE778FB048D8CB4D142E)

  * VerticalAlign.Top：子元素在垂直方向顶部对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .alignItems(VerticalAlign.Top)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/mB5kmM6jQrqL2TD0u7NBiw/zh-cn_image_0000002743077615.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=F8DA72905F0D9E19CD5A7E64906518C57578B609503508E4373961C0C3399E26)

  * VerticalAlign.Center：子元素在垂直方向居中对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .alignItems(VerticalAlign.Center)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/47Y7kqBxR8i_y7Wj19SMsg/zh-cn_image_0000002713558654.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=ED1217B0F17EE4902B943A60BFB336EE6589606A372E0BFFD636D25F800E8DD9)

  * VerticalAlign.Bottom：子元素在垂直方向底部对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .alignItems(VerticalAlign.Bottom)
                    .backgroundColor(0xF2F2F2)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/NjD8HiWnQnyrHb3RwhlS2g/zh-cn_image_0000002743197567.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=DBAEBB0294AC7D828F41BAC3436F2A89ADDEC9518FC7DDFC29B1A195FCA11F15)




#### 布局子元素在主轴上的排列方式

在布局容器内，可以通过justifyContent属性设置子元素在容器主轴上的排列方式。可以从主轴起始位置开始排布，也可以从主轴结束位置开始排布，或者均匀分割主轴的空间。

#### [h2]Column容器内子元素在垂直方向上的排列

**图7** Column容器内子元素在垂直方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/7qra9plOSc-oGpQooQpHRQ/zh-cn_image_0000002713398686.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=804651B9384CD23D5D59A56A075F57076D072A7776A8352D290EDAB5B20B89FB)

  * justifyContent(FlexAlign.Start)：元素在垂直方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Start)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/n8blXvSHRVeiv7QLrP0VzQ/zh-cn_image_0000002743077617.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=9D7F96446DAA3D2F4422E92CF2D947A14ADA72D935047513E3B3B102D1D0A9EF)

  * justifyContent(FlexAlign.Center)：元素在垂直方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Center)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/0HJEZ-j_Q3CEJSWY9r9fCA/zh-cn_image_0000002713558656.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=F9DF5B2968BE5BB89F90C53FF293F101539E68A072CA6939E803870CA635E8E7)

  * justifyContent(FlexAlign.End)：元素在垂直方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.End)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5f/v3/ZM3qtkshTKe51ByvH78BMA/zh-cn_image_0000002743197569.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=1939CDFE7FE7DF2798E7613F40F7372CF2AAB4FA69E3A31D7A4DA2D5D5D23349)

  * justifyContent(FlexAlign.SpaceBetween)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceBetween)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/1-f1u4CuQjeto2ndqeDdYA/zh-cn_image_0000002713398688.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=57F1B62C21B933998E5DE7989E23947ACFD49FA8F3A6B36C912CA0AD06E2FDEA)

  * justifyContent(FlexAlign.SpaceAround)：垂直方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceAround)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/Zxn1-BO3TWKhKg0QWBVq_A/zh-cn_image_0000002743077619.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=44EE3BA830CCD75F69088F0AFD8C543D4D1A06275A16F4F29FA8C413B9D1573B)

  * justifyContent(FlexAlign.SpaceEvenly)：垂直方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(80.percent)
                        .height(50)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(300)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceEvenly)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/WFnE-kWpQt2pkjtNinnfEQ/zh-cn_image_0000002713558658.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=B2F536DC441305350C2802F3AD5D591FA1C5E9DF9ED50F19B6515FF5642304B6)




#### [h2]Row容器内子元素在水平方向上的排列

**图8** Row容器内子元素在水平方向上的排列图

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/CTH1UD7rSq24zzr7hZDSUg/zh-cn_image_0000002743197571.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=404E2C64AE5966D87DD31AB3255B7761B7FAF685768DC606AB55963E22185317)

  * justifyContent(FlexAlign.Start)：元素在水平方向首端对齐，第一个元素与行首对齐，同时后续的元素与前一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Start)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/GQXLgr5FTeiF_M0oejdlmA/zh-cn_image_0000002713398690.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4C54127604E9A2D2E794A19D242EC1878D9C7A49A457FAB29510146A7A1200EA)

  * justifyContent(FlexAlign.Center)：元素在水平方向中心对齐，第一个元素与行首的距离与最后一个元素与行尾距离相同。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.Center)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/kcZdiEhRQFeV7XAK7JPmKg/zh-cn_image_0000002743077621.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=159AF58CEE2E487EC345138B5DBE66CF268F09547B2B75EBCE060BE69DB23779)

  * justifyContent(FlexAlign.End)：元素在水平方向尾部对齐，最后一个元素与行尾对齐，其他元素与后一个对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.End)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/G4ce4T6bTZ-bpXuX8f6JfQ/zh-cn_image_0000002713558660.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=646BE11397428E460FD618EBA2A6FAA007AF86C11171D45B3D51621958E6301E)

  * justifyContent(FlexAlign.SpaceBetween)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceBetween)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/7YOinBOpQVSInjLngg1KYA/zh-cn_image_0000002743197573.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=888218D1BE66B9A61E12275A7B82AB7FF71ACE47CE5B68334E1135E7B0580FD2)

  * justifyContent(FlexAlign.SpaceAround)：水平方向均匀分配元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceAround)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/tWObHXa4T92miKIStXkHhw/zh-cn_image_0000002713398692.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=C51C278F0D457D625A5A5FA9B756D1D78D35F5A2ED0ED0DA14F3EECFCE0866CB)

  * justifyContent(FlexAlign.SpaceEvenly)：水平方向均匀分配元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距都完全一样。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Row() {
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xD2B48C)
                    Column() {}
                        .width(20.percent)
                        .height(30)
                        .backgroundColor(0xF5DEB3)
                }
                    .width(100.percent)
                    .height(200)
                    .backgroundColor(0xF2F2F2)
                    .justifyContent(FlexAlign.SpaceEvenly)
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/w7mFNfliQpeLavxJSIG_KQ/zh-cn_image_0000002743077623.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=ED701B02B4673C0056396671DDDF560DB3CF3407D1B8BB95E0551A836A12103C)




#### 自适应拉伸

在线性布局下，常用空白填充组件[Blank](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-blank-divider-blank)，在容器主轴方向自动填充空白空间，达到自适应拉伸效果。Row和Column作为容器，只需要添加宽高为百分比，当屏幕宽高发生变化时，会产生自适应效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Row() {
                    Text('Bluetooth').fontSize(18)
                    Blank()
                    Toggle(ToggleType.Switch, isOn: true)
                }
                    .backgroundColor(0xFFFFFF)
                    .borderRadius(15)
                    .padding(left: 12)
                    .width(100.percent)
            }
                .backgroundColor(0xEFEFEF)
                .padding(20)
                .width(100.percent)
        }
    }

**图9** 自适应拉伸下的竖屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/_Tsk4V0eQfuNl4rGhrPfBg/zh-cn_image_0000002713558662.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=95AD593A71C2F9DC626B2D7C91A9BBF6F732FA464296C13B92982265E6ABEBEA)

**图10** 自适应拉伸下的横屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/hh4XxpnkQg2Gw2HGXXP5tw/zh-cn_image_0000002743197575.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=CD8A830E1C5D5A3C0FCC38BBC081FE0DBEC3ED52C73F6E77A469A5C6855F9F27)

#### 自适应缩放

自适应缩放是指子元素随容器尺寸的变化而按照预设的比例自动调整尺寸，适应各种不同大小的设备。在线性布局中，可以使用以下两种方法实现自适应缩放。

  * 父容器尺寸确定时，使用layoutWeight属性设置子元素和兄弟元素在主轴上的权重，忽略元素本身尺寸设置，使它们在任意尺寸的设备下自适应占满剩余空间。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Text('1:2:3').width(100.percent)
                    Row() {
                        Column() {
                            Text('layoutWeight(1)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(1)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(2)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(2)
                            .backgroundColor(0xD2B48C)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(3)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(3)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                    }
                        .backgroundColor(0xffd306)
                        .height(30.percent)
                    Text('2:5:3').width(100.percent)
                    Row() {
                        Column() {
                            Text('layoutWeight(2)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(2)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(5)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(5)
                            .backgroundColor(0xD2B48C)
                            .height(100.percent)
                        Column() {
                            Text('layoutWeight(3)').textAlign(TextAlign.Center)
                        }
                            .layoutWeight(3)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                    }
                        .backgroundColor(0xffd306)
                        .height(30.percent)
                }
            }
        }

**图11** 自定义缩放下使用layoutWeight属性设置的横屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/NCFltYpASQ6cB2MdKReUww/zh-cn_image_0000002713398694.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=FE670E734B75C133FCA35B5896A37101DCB210878C3C0A57D67E27EAB0D60011)

**图12** 自定义缩放下使用layoutWeight属性设置的竖屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/RZEuF5TZQn65WJ0N1DS_GA/zh-cn_image_0000002743077625.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=BA8063F9C222EDD490D1F4D6BBCF1BDC550FA10E31A98FB96F9B1CABF1A92237)

  * 父容器尺寸确定时，使用百分比设置子元素和兄弟元素的宽度，使之在任意尺寸的设备下保持固定的自适应占比。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            func build() {
                Column() {
                    Row() {
                        Column() {
                            Text('left width 20%').textAlign(TextAlign.Center)
                        }
                            .width(20.percent)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                        Column() {
                            Text('center width 50%').textAlign(TextAlign.Center)
                        }
                            .width(50.percent)
                            .backgroundColor(0xD2B48C)
                            .height(100.percent)
                        Column() {
                            Text('right width 30%').textAlign(TextAlign.Center)
                        }
                            .width(30.percent)
                            .backgroundColor(0xF5DEB3)
                            .height(100.percent)
                    }
                        .backgroundColor(0xffd306)
                        .height(30.percent)
                }
            }
        }

**图13** 自定义缩放下使用百分比设置的横屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/e54mXf2ASa2VczEGRQP9Rg/zh-cn_image_0000002713558664.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=6F888864630F2AC4F9A1E289B271D24A25E6BCD1AE36D509BCAE02F5B2663943)

**图14** 自定义缩放下使用百分比设置的竖屏

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/qIqkdCNZQPCTIu3ZJuwgAg/zh-cn_image_0000002743197577.png?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=56A2E7E01367B7B9474A0B00077F77EC2595E9E84852BE3C2A57712EA8782341)




#### 自适应延伸

自适应延伸是指在不同尺寸设备下，当页面的内容超出屏幕大小而无法完全显示时，可以通过滚动条进行拖动展示。这种方法适用于线性布局中内容无法一屏展示的场景。通常有以下两种实现方式。

  * [在List中添加滚动条](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-list)：当List子项过多一屏放不下时，可以将每一项子元素放置在不同的组件中，通过滚动条进行拖动展示。可以通过scrollBar属性设置滚动条的常驻状态。

  * 使用Scroll组件：在线性布局中，开发者可以进行垂直方向或者水平方向的布局。当一屏无法完全显示时，可以在Column或Row组件的外层包裹一个可滚动的容器组件Scroll来实现可滑动的线性布局。

垂直方向布局中使用Scroll组件：
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            let scroller: Scroller = Scroller()
            private var arr: Array<Int64> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            func build() {
                Scroll(this.scroller) {
                    Column() {
                        ForEach(
                            this.arr,
                            itemGeneratorFunc: {
                                item: Int64, idx: Int64 => Text(item.toString())
                                    .width(90.percent)
                                    .height(150)
                                    .backgroundColor(0xFFFFFF)
                                    .borderRadius(15)
                                    .fontSize(16)
                                    .textAlign(TextAlign.Center)
                                    .margin(top: 10)
                            },
                            keyGeneratorFunc: {item: Int64, idx: Int64 => idx.toString()}
                        )
                    }.width(100.percent)
                }
                    .backgroundColor(0xDCDCDC)
                    .scrollable(ScrollDirection.Vertical) // 滚动方向为垂直方向
                    .scrollBar(BarState.On) // 滚动条常驻显示
                    .scrollBarColor(Color.Gray) // 滚动条颜色
                    .scrollBarWidth(8.vp) // 滚动条宽度
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/BwWcTMzEQRaUaBT_KA6GDw/zh-cn_image_0000002713398696.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=4954A5B32CD1EABA2708AA9489A994ED6F096153472FCCFA0E0083B9DA8C3835)

水平方向布局中使用Scroll组件：
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Entry
        @Component
        class EntryView {
            let scroller: Scroller = Scroller()
            private var arr: Array<Int64> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            func build() {
                Scroll(this.scroller) {
                    Row() {
                        ForEach(
                            this.arr,
                            itemGeneratorFunc: {
                                item: Int64, idx: Int64 => Text(item.toString())
                                    .width(150)
                                    .height(90.percent)
                                    .backgroundColor(0xFFFFFF)
                                    .borderRadius(15)
                                    .fontSize(16)
                                    .textAlign(TextAlign.Center)
                                    .margin(left: 10)
                            }
                        )
                    }.height(100.percent)
                }
                    .backgroundColor(0xDCDCDC)
                    .scrollable(ScrollDirection.Horizontal) // 滚动方向为水平方向
                    .scrollBar(BarState.On) // 滚动条常驻显示
                    .scrollBarColor(Color.Gray) // 滚动条颜色
                    .scrollBarWidth(8.vp) // 滚动条宽度
            }
        }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/-pmCeqKkQ2il83uhmoAxtQ/zh-cn_image_0000002743077627.gif?HW-CC-KV=V1&HW-CC-Date=20260908T090119Z&HW-CC-Expire=86400&HW-CC-Sign=32F34C8342CF842076AFEDA5C31B90FB5B0A39C92079E5D0CE308E0FB580218E)



