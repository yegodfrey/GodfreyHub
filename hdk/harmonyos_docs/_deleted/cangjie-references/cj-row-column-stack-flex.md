---
name: cangjie-references/cj-row-column-stack-flex
title: Flex
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-flex
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 行列与堆叠 / Flex
---

# Flex

Flex是以弹性方式布局子组件的容器组件，提供更加有效的方式对容器内的子元素进行排列、对齐和分配剩余空间。

具体指南请参考[弹性布局](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-flex-layout)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/aUsXG_wVRx2funCPRT17YA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=D7FD8F51C35EF83FB2D396C17F09B594D55DFBD95F0930A0513E8A03E8EB3B67)

  * Flex组件在渲染时存在二次布局过程，因此在对性能有严格要求的场景下建议使用[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)、[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)代替。
  * Flex组件主轴默认不设置时撑满父容器，[Column](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-column)、[Row](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-row-column-stack-row)组件主轴不设置时默认是跟随子节点大小。
  * 主轴长度可设置为[LengthMetrics.AUTO](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#static-let-auto)使Flex自适应子组件布局，自适应时，Flex长度受[constraintSize](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-constraintsizelength-length-length-length)属性以及父容器传递的最大最小长度限制且constraintSize属性优先级更高。



#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

可以包含子组件。

#### 创建组件

#### [h2]init(?FlexDirection, ?FlexWrap, ?FlexAlign, ?ItemAlign, ?FlexAlign, () -> Unit)
    
    
    public init(direction!: ?FlexDirection = None, wrap!: ?FlexWrap = None,
        justifyContent!: ?FlexAlign = None, alignItems!: ?ItemAlign = None,
        alignContent!: ?FlexAlign = None, child!: () -> Unit = {=>})

**功能：** 创建一个Flex容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
direction | ?[FlexDirection](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-flexdirection) | 否 | None | **命名参数。** 初始值: FlexDirection.Row 子组件在Flex容器上排列的方向，即主轴的方向。  
wrap | ?[FlexWrap](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-flexwrap) | 否 | None | **命名参数。** 初始值: FlexWrap.NoWrap Flex容器是单行/列还是多行/列排列。  
justifyContent | ?[FlexAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-flexalign) | 否 | None | **命名参数。** 初始值: FlexAlign.Start 所有子组件在Flex容器主轴上的对齐格式。  
alignItems | ?[ItemAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-itemalign) | 否 | None | **命名参数。** 初始值: ItemAlign.Start 所有子组件在Flex容器交叉轴上的对齐格式。  
alignContent | ?[FlexAlign](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-flexalign) | 否 | None | **命名参数。** 初始值: FlexAlign.Start 交叉轴中有额外的空间时，多行内容的对齐方式。仅在wrap为Wrap或WrapReverse下生效。  
child | ()->Unit | 否 | {=>} | **命名参数。** 声明容器内的子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

通用事件：全部支持。

#### 示例代码

#### [h2]示例1（子组件排列方向）

该示例通过设置direction实现不同的子组件排列方向效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Column(space: 5) {
                    Text("direction:Row")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
    
                    // 子组件在容器主轴上行布局
                    Flex(direction: FlexDirection.Row) {
                        Text("1")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("4")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                    }
                        .height(70)
                        .width(90.percent)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
    
                    Text("direction:RowReverse")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器主轴上反向行布局
                    Flex(direction: FlexDirection.RowReverse) {
                        Text("1")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("4")
                            .width(20.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                    }
                        .height(70)
                        .width(90.percent)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
    
                    Text("direction:Column")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器主轴上列布局
                    Flex(direction: FlexDirection.Column) {
                        Text("1")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("4")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                    }
                        .width(90.percent)
                        .height(160)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
                    Text("direction:ColumnReverse")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器主轴上反向列布局
                    Flex(direction: FlexDirection.ColumnReverse) {
                        Text("1")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("4")
                            .width(100.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                    }
                        .width(90.percent)
                        .height(160)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
                }
                    .width(100.percent)
                    .margin(top: 5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/lNYoaiCkQxipOIjw-qUBQg/zh-cn_image_0000002701819528.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=E45CD58DB545C3285842F5B11B5601876F59301F449ED03F9547F93279ABD2B4)

#### [h2]示例2（子组件单/多行排列）

该示例通过设置wrap实现子组件单行或多行的排列效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Column(space: 5) {
                    Text("Wrap")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    Flex(wrap: FlexWrap.Wrap) {
                        Text("1")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                    }
                        .width(90.percent)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
    
                    Text("NoWrap")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    Flex(wrap: FlexWrap.NoWrap) {
                        Text("1")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                    }
                        .width(90.percent)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
    
                    Text("WrapReverse")
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    Flex(wrap: FlexWrap.WrapReverse, direction: FlexDirection.Row) {
                        Text("1")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xF5DEB3)
                        Text("2")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                        Text("3")
                            .width(50.percent)
                            .height(50)
                            .backgroundColor(0xD2B48C)
                    }
                        .width(90.percent)
                        .height(120)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
                }
                    .width(100.percent)
                    .margin(top: 5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/UKeR6MPZSRG3mw6rNM9m8Q/zh-cn_image_0000002731538809.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=9E1E5C7EC51A9816E1E21F255D53216105BE5D23F9003AAD76219A24605757D4)

#### [h2]示例3（子组件在主轴上的对齐格式）

该示例通过设置justifyContent实现子组件在主轴上不同的对齐效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Component
    class JustifyContentFlex {
        // 初始化对齐方式：子组件在容器主轴上首端对齐
        var justifyContent: FlexAlign = FlexAlign.Start
    
        func build() {
            Flex(justifyContent: this.justifyContent) {
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
                .padding(10)
                .backgroundColor(0xAFEEEE)
        }
    }
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Column(space: 5) {
                    Text('justifyContent:Start')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    JustifyContentFlex() // 子组件在容器主轴上首端对齐
                    Text('justifyContent:Center')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    JustifyContentFlex(justifyContent: FlexAlign.Center) // 子组件在容器主轴上居中对齐
                    Text('justifyContent:End')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    JustifyContentFlex(justifyContent: FlexAlign.End) // 子组件在容器主轴上尾端对齐
                    Text('justifyContent:SpaceBetween')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器主轴上均分容器布局，第一个子组件与行首对齐，最后一个子组件与行尾对齐。
                    JustifyContentFlex(justifyContent: FlexAlign.SpaceBetween)
                    Text('justifyContent:SpaceAround')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器主轴上均分容器布局，第一个子组件与行首对齐，最后一个子组件与行尾对齐。
                    JustifyContentFlex(justifyContent: FlexAlign.SpaceAround)
                    Text('justifyContent:SpaceEvenly')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器主轴上均分容器布局，子组件之间的距离与第一子组件到行首、最后一个子组件到行尾的距离相等
                    JustifyContentFlex(justifyContent: FlexAlign.SpaceEvenly)
                }
                    .width(100.percent)
                    .margin(top: 5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/fKCB0LeRRRi36khkWbFZQw/zh-cn_image_0000002701659618.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=7FDC6339859107C1E5FC7C58E93104CE3401890B388EC77816F4586F6BB78AB3)

#### [h2]示例4（子组件在交叉轴上的对齐方式）

该示例通过设置alignItems实现子组件在主轴上的不同的对齐效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Component
    class AlignItemsFlex {
        // 初始化对齐方式：子组件在容器交叉轴上首部对齐
        var alignItems: ItemAlign = ItemAlign.Auto
    
        func build() {
            Flex(alignItems: this.alignItems) {
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
                .width(90.percent)
                .height(80)
                .padding(10)
                .backgroundColor(0xAFEEEE)
        }
    }
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Column(space: 5) {
                    Text('alignItems:Auto')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器交叉轴上首部对齐
                    AlignItemsFlex()
                    Text('alignItems:Start')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器交叉轴上首部对齐
                    AlignItemsFlex(alignItems: ItemAlign.Start)
                    Text('alignItems:Center')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器交叉轴上居中对齐
                    AlignItemsFlex(alignItems: ItemAlign.Center)
                    Text('alignItems:End')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器交叉轴上尾部对齐
                    AlignItemsFlex(alignItems: ItemAlign.End)
                    Text('alignItems:Stretch')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器交叉轴上拉伸填充
                    AlignItemsFlex(alignItems: ItemAlign.Stretch)
                    Text('alignItems:Baseline')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 子组件在容器交叉轴上与文本基线对齐
                    AlignItemsFlex(alignItems: ItemAlign.Baseline)
                }
                    .width(100.percent)
                    .margin(top: 5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/99/v3/6a7fz8saTBuoMnBpf8EGIQ/zh-cn_image_0000002731378833.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=6A12C7AA24CBB23A9F65F590FF7ECE3A9F1CB5544B4AE34E410BAA8D0424673D)

#### [h2]示例5（多行内容的对齐方式）

该示例通过设置alignContent实现多行内容的不同对齐效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.*
    
    @Component
    class AlignContentFlex {
        // 初始化对齐方式：多行布局下子组件首部对齐
        var alignContent: FlexAlign = FlexAlign.Start
    
        func build() {
            Flex(wrap: FlexWrap.Wrap, alignContent: this.alignContent) {
                Text('1')
                    .width(50.percent)
                    .height(20)
                    .backgroundColor(0xF5DEB3)
                Text('2')
                    .width(50.percent)
                    .height(20)
                    .backgroundColor(0xD2B48C)
                Text('3')
                    .width(50.percent)
                    .height(20)
                    .backgroundColor(0xD2B48C)
            }
                .width(90.percent)
                .height(90)
                .padding(10)
                .backgroundColor(0xAFEEEE)
        }
    }
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column {
                Column(space: 5) {
                    Text('alignContent:Start')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 多行布局下子组件首部对齐
                    AlignContentFlex()
                    Text('alignContent:Center')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 多行布局下子组件居中对齐
                    AlignContentFlex(alignContent: FlexAlign.Center)
                    Text('alignContent:End')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 多行布局下子组件尾部对齐
                    AlignContentFlex(alignContent: FlexAlign.End)
                    Text('alignContent:SpaceBetween')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 多行布局下第一行子组件与列首对齐，最后一行子组件与列尾对齐
                    AlignContentFlex(alignContent: FlexAlign.SpaceBetween)
                    Text('alignContent:SpaceAround')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 多行布局下第一行子组件到列首的距离和最后一行子组件到列尾的距离是相邻行之间距离的一半
                    AlignContentFlex(alignContent: FlexAlign.SpaceAround)
                    Text('alignContent:SpaceEvenly')
                        .fontSize(9)
                        .fontColor(0xCCCCCC)
                        .width(90.percent)
                    // 多行布局下相邻行之间的距离与第一行子组件到列首的距离、最后一行子组件到列尾的距离完全一样
                    Flex(wrap: FlexWrap.Wrap, alignContent: FlexAlign.SpaceEvenly) {
                        Text('1')
                            .width(50.percent)
                            .height(20)
                            .backgroundColor(0xF5DEB3)
                        Text('2')
                            .width(50.percent)
                            .height(20)
                            .backgroundColor(0xD2B48C)
                        Text('3')
                            .width(50.percent)
                            .height(20)
                            .backgroundColor(0xF5DEB3)
                        Text('4')
                            .width(50.percent)
                            .height(20)
                            .backgroundColor(0xD2B48C)
                        Text('5')
                            .width(50.percent)
                            .height(20)
                            .backgroundColor(0xF5DEB3)
                    }
                        .width(90.percent)
                        .height(90)
                        .padding(10)
                        .backgroundColor(0xAFEEEE)
                }
                    .width(100.percent)
                    .margin(top: 5)
            }.width(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/F1hH_PyRQyy2VFcBGiPAFA/zh-cn_image_0000002701819530.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=199D6FB288DB6E3C018699CE2B566819DBCB10BB120B8C23A1BFC8268CB2DA2B)

#### [h2]示例6（宽度自适应的Flex容器）

该示例实现了Flex在宽度设置LengthMetrics.AUTO后可以自适应子组件布局的能力。
    
    
    package ohos_app_cangjie_entry
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    class Demo {
        @Prop var text: String
    
        func build() {
            Button() {
                Flex() {
                    Image(@r(app.media.startIcon))
                    .width(16)
                    .height(16)
    
                    Row() {
                        Text(this.text)
                        .margin(
                            left: 6,
                            right: 6
                        )
                        .fontSize(14)
                        .maxLines(1)
                        .textOverflow(overflow: TextOverflow.Ellipsis)
                    }
    
                    Image(@r(app.media.startIcon))
                    .width(16)
                    .height(16)
                }.width(LengthMetrics.AUTO)
            }
            .backgroundColor(0xAFEEEE)
            .height(36)
            .padding(left: 16, right: 16)
            .constraintSize(maxWidth: 156)
            .width(LengthMetrics.AUTO)
        }
    }
    
    @Entry
    @Component
    class EntryView {
        build() {
            Column(space: 12 ) {
                Text('Width does not reach max length').fontSize(11).fontColor(0XCCCCCC).width(50.percent)
                Demo(text: '123' )
                Text('Width reaches max length').fontSize(11).fontColor(0XCCCCCC).width(50.percent)
                Demo(text: '1234567890-1234567890-1234567890-1234567890')
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/tqVElnnVQ0qw7L6ysnoj8Q/zh-cn_image_0000002731538811.png?HW-CC-KV=V1&HW-CC-Date=20260903T111636Z&HW-CC-Expire=86400&HW-CC-Sign=5DABADF07930CE41AB7965E7B0F855DACB99B1077DD978EE742C71C03A59DA11)
