---
name: cangjie-guides/cj-layout-development-create-grid
title: 创建网格（Grid/GridItem）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-grid
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 创建网格（Grid/GridItem）
---

# 创建网格（Grid/GridItem）

#### 概述

网格布局是由“行”和“列”分割的单元格所组成，通过指定“项目”所在的单元格做出各种各样的布局。网格布局具有较强的页面均分能力，子组件占比控制能力，是一种重要自适应布局，其使用场景有九宫格图片展示、日历、计算器等。

ArkUI提供了[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)容器组件和子组件[GridItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-griditem)，用于构建网格布局。Grid用于设置网格布局相关参数，GridItem定义子组件相关特征。Grid组件支持使用[条件渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-ifelse)、[循环渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)、[懒加载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-lazyforeach)等方式生成子组件。

#### 布局与约束

Grid组件为网格容器，其中容器内各条目对应一个GridItem组件，如下图1所示。

**图1** Grid与GridItem组件关系

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/ODVG9bMUTue1pIC2h2z3hA/zh-cn_image_0000002701819340.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=9F6E120D4AC2E1140B51F3D83F2769189A5B46BEEA830F7721EC1CBE2B7E3BAF)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/6IEA3oJ1TXmRC9y2mEjzrw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=715D10A1D366BB3EFA72A7D7C4C576ABCEB7FC8EA4659DDC2B2658DFF1F6C530)

Grid的子组件必须是GridItem组件。

网格布局是一种二维布局。Grid组件支持自定义行列数和每行每列尺寸占比、设置子组件横跨几行或者几列，同时提供了垂直和水平布局能力。当网格容器组件尺寸发生变化时，所有子组件以及间距会等比例调整，从而实现网格布局的自适应能力。根据Grid的这些布局能力，可以构建出不同样式的网格布局，如下图2所示。

**图2** 网格布局

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/cOg6c_IfRRycLKKQ-1lt8Q/zh-cn_image_0000002731538621.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=974AB38E69723FA6E5B843CDD3D0EC3752498028480A595AD6FE932A6F8B1E8F)

如果Grid组件设置了宽高属性，则其尺寸为设置值。如果没有设置宽高属性，Grid组件的尺寸默认适应其父组件的尺寸。

Grid组件根据行列数量与占比属性的设置，可以分为三种布局情况：

  * 行、列数量与占比同时设置：Grid只展示固定行列数的元素，其余元素不展示，且Grid不可滚动。（推荐使用该种布局方式）

  * 只设置行、列数量与占比中的一个：元素按照设置的方向进行排布，超出的元素可通过滚动的方式展示。

  * 行列数量与占比都不设置：元素在布局方向上排布，其行列数由布局方向、单个网格的宽高等多个属性共同决定。超出行列容纳范围的元素不展示，且Grid不可滚动。




#### 设置排列方式

#### [h2]设置行列数量与占比

通过设置行列数量与尺寸占比可以确定网格布局的整体排列方式。Grid组件提供了rowsTemplate和columnsTemplate属性用于设置网格布局行列数量与尺寸占比。

rowsTemplate和columnsTemplate属性值是一个由多个空格和'数字+fr'间隔拼接的字符串，fr的个数即网格布局的行或列数，fr前面的数值大小，用于计算该行或列在网格布局宽度上的占比，最终决定该行或列宽度。

**图3** 行列数量占比示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/qI21E8SIRdWvD6eKN8Re5A/zh-cn_image_0000002701659430.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=6509E7D75D3CF4E0CBB6FBF8DDCE054A375A623A816CE0E1E3DF55F18FF94E4B)

如上图3所示，构建的是一个三行三列的网格布局，其在垂直方向上分为三等份，每行占一份；在水平方向上分为四等份，第一列占一份，第二列占两份，第三列占一份。

只要将rowsTemplate的值为"1fr 1fr 1fr"，同时将columnsTemplate的值为"1fr 2fr 1fr"，即可实现上述网格布局。
    
    
    Grid() {
      // ...
    }
    .rowsTemplate("1fr 1fr 1fr")
    .columnsTemplate("1fr 2fr 1fr")

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/ySowV924TNG-Xy758X2b9w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=A0CC6F48E3823BC7379592BF00DFDBC8474D24504F9B02491261455C774E0134)

当Grid组件设置了rowsTemplate或columnsTemplate时，Grid的layoutDirection、cellLength属性不生效，属性说明可参考[Grid-属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid#组件属性)。

#### 在网格布局中显示数据

网格布局采用二维布局的方式组织其内部元素，如下图5所示。

**图5** 通用办公服务

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/A052_KbuQESfy3IVjrwoqQ/zh-cn_image_0000002731378645.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=2A898793CC55AC5E8E0FA02D45EFE0998004D8EE83329FF8ECF6CFE79ACBED0E)

Grid组件可以通过二维布局的方式显示一组GridItem子组件。
    
    
    Grid() {
        GridItem() {
            Text("会议")
            //  ...
        }
    
        GridItem() {
            Text("签到")
            //  ...
        }
    
        GridItem() {
            Text("投票")
            //  ...
        }
    
        GridItem() {
            Text("打印")
            //  ...
        }
    }
    .rowsTemplate("1fr 1fr")
    .columnsTemplate("1fr 1fr")

对于内容结构相似的多个GridItem，通常更推荐使用ForEach语句中嵌套GridItem的形式，来减少重复代码。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource_manager.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var services: Array<String> = ["会议", "投票", "签到", "打印"]
        func build() {
            Column() {
                Grid() {
                    ForEach(
                        this.services,
                        itemGeneratorFunc: {
                            service: String, _: Int64 => GridItem() {
                                Text(service)
                            }
                        }
                    )
                }
                    .rowsTemplate("1fr 1fr")
                    .columnsTemplate("1fr 1fr")
            }
        }
    }

#### 设置行列间距

在两个网格单元之间的网格横向间距称为行间距，网格纵向间距称为列间距，如下图6所示。

**图6** 网格的行列间距

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/jsiosXd8Rry3jVAXvftK5A/zh-cn_image_0000002701819342.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=D6DF8AC990153CD34DAA05BBE9F05CA8E3532FF0AE645BE041ABDB9767431439)

通过Grid的rowsGap和columnsGap可以设置网格布局的行列间距。在图5所示的计算器中，行间距为15.vp，列间距为10.vp。
    
    
    Grid() {
      // ...
    }
    .columnsGap(10)
    .rowsGap(15)

#### 构建可滚动的网格布局

可滚动的网格布局常用在文件管理、购物或视频列表等页面中，如下图7所示。在设置Grid的行列数量与占比时，如果仅设置行、列数量与占比中的一个，即仅设置rowsTemplate或仅设置columnsTemplate属性，网格单元按照设置的方向排列，超出Grid显示区域后，Grid拥有可滚动能力。

**图7** 横向可滚动网格布局

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/sg6Z1SHkQ7y5Afmi0CtzQA/zh-cn_image_0000002731538623.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=097CF4F33FE95D07C99C8EDCF6C227300175E2E5C95DA9B8E9D5158E45AF43B9)

如果设置的是columnsTemplate，Grid的滚动方向为垂直方向；如果设置的是rowsTemplate，Grid的滚动方向为水平方向。

如上图7所示的横向可滚动网格布局，只要设置rowsTemplate属性的值且不设置columnsTemplate属性，当内容超出Grid组件宽度时，Grid可横向滚动进行内容展示。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource_manager.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var services: Array<String> = ["直播", "进口"]
        func build() {
            Column(space: 5) {
                Grid() {
                    ForEach(
                        this.services,
                        itemGeneratorFunc: {
                            service: String, _: Int64 => GridItem() {
                            // 添加内容
                            }.width(25.percent)
                        }
                    )
                }
                    .rowsTemplate("1fr 1fr")
                    .rowsGap(15)
            }
        }
    }

#### 控制滚动位置

与新闻列表的返回顶部场景类似，控制滚动位置功能在网格布局中也很常用，例如下图8所示日历的翻页功能。

**图8** 日历翻页

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/sjbEBwlVQjufdut-lVBchQ/zh-cn_image_0000002701659432.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=722BCA74650F92E27F3A280045D1DD00442FD06084952992080D4C1D735034B9)

Grid组件初始化时，可以绑定一个[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)对象，用于进行滚动控制，例如通过Scroller对象的scrollPage方法进行翻页。
    
    
    var scroller: Scroller = Scroller()

在日历页面中，用户在点击“下一页”按钮时，应用响应点击事件，通过指定scrollPage方法的参数next为true，滚动到下一页。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource_manager.*
    
    @Entry
    @Component
    class EntryView {
        var scroller: Scroller = Scroller()
        func build() {
            Column() {
                Grid(scroller: this.scroller) {
                    // 添加内容
                }
                    .columnsTemplate("1fr 1fr 1fr 1fr 1fr 1fr 1fr")
                    .height(85.percent)
    
                Row() {
                    Row() {
                        Button("上一页")
                            .onClick({
                                evt => this
                                    .scroller
                                    .scrollPage(false, animation: false)
                            })
                            .width(100)
                    }
                        .width(50.percent)
                        .justifyContent(FlexAlign.Center)
    
                    Row() {
                        Button("下一页")
                            .onClick({
                                evt => this
                                    .scroller
                                    .scrollPage(true, animation: false)
                            })
                            .width(100)
                    }
                        .width(50.percent)
                        .justifyContent(FlexAlign.Center)
                }.height(15.percent)
            }.height(100.percent)
        }
    }

#### 性能优化

与[长列表的处理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-list#长列表的处理)类似，[循环渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)适用于数据量较小的布局场景，当构建具有大量网格项的可滚动网格布局时，推荐使用[数据懒加载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-lazyforeach)方式实现按需迭代加载数据，从而提升列表性能。

关于按需加载优化的具体实现可参考[数据懒加载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-lazyforeach)章节中的示例。

当使用懒加载方式渲染网格时，为了更好的滚动体验，减少滑动时出现白块，Grid组件中也可通过cachedCount属性设置GridItem的预加载数量，只在懒加载LazyForEach中生效。

设置预加载数量后，会在Grid显示区域前后各缓存cachedCount*列数个GridItem，超出显示和缓存范围的GridItem会被释放。
    
    
    Grid() {
        LazyForEach(this.dataSource, itemGeneratorFunc: {dataSource: T, _: Int64 =>
            GridItem() {
            }
        })
    }
    .cachedCount(3)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/I9XT79heTliaPU7AUTVq6g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111600Z&HW-CC-Expire=86400&HW-CC-Sign=FAE8B32C4822700BAB31F8EEF67A9ED32FE63AD9FA169FDD4463CB66F14E0761)

cachedCount的增加会增大UI的CPU、内存开销。使用时需要根据实际情况，综合性能和用户体验进行调整。
