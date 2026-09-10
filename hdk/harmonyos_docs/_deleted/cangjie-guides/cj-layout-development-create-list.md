---
name: cangjie-guides/cj-layout-development-create-list
title: 创建列表（List）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-list
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 组件布局 / 构建布局 / 创建列表（List）
---

# 创建列表（List）

#### 概述

列表是一种复杂的容器，当列表项达到一定数量，内容超过屏幕大小时，可以自动提供滚动功能。它适合用于呈现同类数据类型或数据类型集，例如图片和文本。在列表中显示数据集合是许多应用程序中的常见要求（如通讯录、音乐列表、购物清单等）。

使用列表可以轻松高效地显示结构化、可滚动的信息。通过在[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)组件中按垂直或者水平方向线性排列子组件[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listgroup)或[ListItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listitem)，为列表中的行或列提供单个视图，或使用[循环渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)迭代一组行或列，或混合任意数量的单个视图和ForEach结构，构建一个列表。List组件支持使用条件渲染、循环渲染、懒加载等渲染控制方式生成子组件。

#### 布局与约束

列表作为一种容器，会自动按其滚动方向排列子组件，向列表中添加组件或从列表中移除组件会重新排列子组件。

如下图1所示，在垂直列表中，List按垂直方向自动排列ListItemGroup或ListItem。

ListItemGroup用于列表数据的分组展示，其子组件也是ListItem。ListItem表示单个列表项，可以包含单个子组件。

**图1** List、ListItemGroup和ListItem组件关系

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/sweILnvVQdSEEWgbAUl2uA/zh-cn_image_0000002731378635.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=0E013F116C43AD2DA577C3540839F9C288B7C6B08B5659BC86F8A59D6E4DC8A8)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/FQSIUEE5TYyTJ865l3Fmjw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=8AA5CFB9BB1B414EFB19E1865793A1613DAF5B33B5E4530F7F26FCB8AEAAF5DB)

List的子组件必须是ListItemGroup或ListItem，ListItem和ListItemGroup必须配合List来使用。

#### [h2]布局

List除了提供垂直和水平布局能力、超出屏幕时可以滚动的自适应延伸能力之外，还提供了自适应交叉轴方向上排列个数的布局能力。

利用垂直布局能力可以构建单列或者多列垂直滚动列表，如下图2所示。

**图2** 垂直滚动列表（左：单列；右：多列）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/qOoDBtXCQIewdQwiIgk8FQ/zh-cn_image_0000002701819332.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=06DF761EEB09A6DE144A87DADD3FFF66C8F09BEAEF8AB0BCED2340D2EAF48CFE)

利用水平布局能力可以构建单行或多行水平滚动列表，如下图3所示。

**图3** 水平滚动列表（左：单行；右：多行）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/LW7h4HGSTZOCCuA5cHeu0w/zh-cn_image_0000002731538613.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=282862840E6890E8AFB5B7FCC54074E938C57215FB8946EBB931C337B21534AC)

Grid也可以实现单列、多列布局，如果布局每列等宽，且不需要跨行跨列布局，相比Grid，则更推荐使用List。

#### [h2]约束

列表的主轴方向是指子组件列的排列方向，也是列表的滚动方向。垂直于主轴的轴称为交叉轴，其方向与主轴方向相互垂直。

如下图4所示，垂直列表的主轴是垂直方向，交叉轴是水平方向；水平列表的主轴是水平方向，交叉轴是垂直方向。

**图4** 列表的主轴与交叉轴

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/-1y7Opp9Tpqn4IBVph7OnA/zh-cn_image_0000002701659422.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=C150033E5B027C86B0DC6EDC2D66A1C575937F0E15AB780AD3528AB188423F44)

如果List组件主轴或交叉轴方向设置了尺寸，则其对应方向上的尺寸为设置值。

如果List组件主轴方向没有设置尺寸，当List子组件主轴方向总尺寸小于List的父组件尺寸时，List主轴方向尺寸自动适应子组件的总尺寸。

如下图5所示，一个垂直列表B没有设置高度时，其父组件A高度为200.vp，若其所有子组件C的高度总和为150.vp，则此时列表B的高度为150.vp。

**图5** 列表主轴高度约束示例1（**A** : List的父组件; **B** : List组件; **C** : List的所有子组件）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/MNZPc3WdSn-dxlSRXCNlqw/zh-cn_image_0000002731378637.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=F6D2A50ECB37888BCC0DF615710E19C672BC89183699881B0A9C92D4FCCD8DC3)

如果子组件主轴方向总尺寸超过List父组件尺寸时，List主轴方向尺寸适应List的父组件尺寸。

如下图6所示，同样是没有设置高度的垂直列表B，其父组件A高度为200.vp，若其所有子组件C的高度总和为300.vp，则此时列表B的高度为200.vp。

**图6** 列表主轴高度约束示例2（**A** : List的父组件; **B** : List组件; **C** : List的所有子组件）

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5/v3/RS8XFJ1rRgiLlXlak7WZZQ/zh-cn_image_0000002701819334.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7AB79335085AE37279711C62E3BBFA6FEFE5DF349CFA1C4FC3FDFE0D0C3C0C74)

List组件交叉轴方向在没有设置尺寸时，其尺寸默认自适应父组件尺寸。

#### 开发布局

#### [h2]设置主轴方向

List组件主轴默认是垂直方向，即默认情况下不需要手动设置List方向，就可以构建一个垂直滚动列表。

若是水平滚动列表场景，将List的listDirection属性设置为Axis.Horizontal即可实现。listDirection默认为Axis.Vertical，即主轴默认是垂直方向。
    
    
    List() {
      // ...
    }
    .listDirection(Axis.Horizontal)

#### [h2]设置交叉轴布局

List组件的交叉轴布局可以通过lanes和alignListItem属性进行设置，lanes属性用于确定交叉轴排列的列表项数量，alignListItem用于设置子组件在交叉轴方向的对齐方式。

List组件的lanes属性通常用于在不同尺寸的设备自适应构建不同行数或列数的列表，即一次开发、多端部署的场景。lanes属性的声明方式见[声明方式](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list#func-lanesint32)。以垂直列表为例，如果将lanes属性设为2，表示构建的是一个两列的垂直列表，如图2中右图所示。lanes的默认值为1，即默认情况下，垂直列表的列数是1。
    
    
    List() {
      // ...
    }
    .lanes(2)

当使用".lanes(minLength: Length, maxLength: Length)"声明属性时，表示会根据minLength和maxLength与List组件的尺寸自适应决定行或列数。
    
    
    List() {
      // ...
    }
    .lanes(minLength: 200, maxLength: 300)

例如，假设在垂直列表中设置了lanes的值为minLength: 200, maxLength: 300。此时：

  * 当List组件宽度为300.vp时，由于minLength为200.vp，此时列表为一列。

  * 当List组件宽度变化至400.vp时，符合两倍的minLength，则此时列表自适应为两列。




同样以垂直列表为例，当alignListItem属性设置为ListItemAlign.Center表示列表项在水平方向上居中对齐。alignListItem的默认值是ListItemAlign.Start，即列表项在列表交叉轴方向上默认按首部对齐。
    
    
    List() {
      // ...
    }
    .alignListItem(ListItemAlign.Center)

#### 在列表中显示数据

列表视图垂直或水平显示项目集合，在行或列超出屏幕时提供滚动功能，使其适合显示大型数据集合。在最简单的列表形式中，List静态地创建其列表项ListItem的内容。

**图7** 城市列表

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/w63exgdMTmaylGfbrZcf1w/zh-cn_image_0000002731538615.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=69845A4F4B307DEAE1821C1A1000864E5223987D8EFCFB5801DF3D52DB7DECDC)
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    public class EntryView {
        func build() {
            List() {
                ListItem() {
                    Text('北京').fontSize(24)
                }
    
                ListItem() {
                    Text('杭州').fontSize(24)
                }
    
                ListItem() {
                    Text('上海').fontSize(24)
                }
            }
                .backgroundColor(0xfff1f3f5)
                .alignListItem(ListItemAlign.Center)
        }
    }

由于在ListItem中只能有一个根节点组件，不支持以平铺形式使用多个组件。因此，若列表项是由多个组件元素组成的，则需要将这多个元素组合到一个容器组件内或组成一个自定义组件。

**图8** 联系人列表项示例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/GCGyUCDETZelJrppEnWWNg/zh-cn_image_0000002701659424.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2DB3D0D51A84669281A539998695E86B41E3016177F8DBE06706338C5C06119F)

如上图8所示，联系人列表的列表项中，每个联系人都有头像和名称。此时，需要将Image和Text封装到一个Row容器内。
    
    
    List() {
        ListItem() {
            Row() {
                Image(@r(app.media.startIcon))
                    .width(40)
                    .height(40)
                    .margin(10)
                Text('小明').fontSize(20)
            }
        }
        ListItem() {
            Row() {
                Image(@r(app.media.startIcon))
                    .width(40)
                    .height(40)
                    .margin(10)
                Text('小红').fontSize(20)
            }
        }
    }

#### 迭代列表内容

通常，应用通过数据集合动态地创建列表。使用[循环渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)可从数据源中迭代获取数据，并在每次迭代过程中创建相应的组件，降低代码复杂度。

仓颉通过[ForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)提供了组件的循环渲染能力。以简单形式的联系人列表为例，将联系人名称和头像数据以Contact类结构存储到contacts数组，使用ForEach中嵌套ListItem的形式来代替多个平铺的、内容相似的ListItem，从而减少重复代码。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    public class Contact {
        var name: String
        var icon: AppResource
    
        public init(name: String, icon: AppResource) {
            this.name = name
            this.icon = icon
        }
    }
    
    @Entry
    @Component
    public class EntryView {
        private var contacts: Array<Contact> = [Contact('小明', @r(app.media.startIcon)),
            Contact('小红', @r(app.media.startIcon))]
        func build() {
            List() {
                ForEach(
                    this.contacts,
                    itemGeneratorFunc: {
                        item: Contact, _: Int64 => ListItem() {
                            Row() {
                                Image(item.icon)
                                    .width(40)
                                    .height(40)
                                    .margin(10)
                                Text(item.name).fontSize(20)
                            }
                                .width(100.percent)
                                .justifyContent(FlexAlign.Start)
                        }
                    },
                    keyGeneratorFunc: {item: Contact, idx: Int64 => idx.toString()}
                )
            }.width(100.percent)
        }
    }

在List组件中，ForEach除了可以用来循环渲染ListItem，也可以用来循环渲染ListItemGroup。ListItemGroup的循环渲染详细使用请参见[ListItemGroup](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-list#支持分组列表)

#### 自定义列表样式

#### [h2]设置内容间距

在初始化列表时，如需在列表项之间添加间距，可以使用space参数。例如，在每个列表项之间沿主轴方向添加10.vp的间距：
    
    
    List(space: 10) {
      // ...
    }

#### [h2]添加分隔线

分隔线用来将界面元素隔开，使单个元素更加容易识别。如下图9所示，当列表项左边有图标（如蓝牙图标），由于图标本身就能很好的区分，此时分隔线从图标之后开始显示即可。

**图9** 设置列表分隔线样式

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/MKLqxM_ATp6PWF4L6YSbmQ/zh-cn_image_0000002731378639.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=AF16C5E9772FA6AE7A35219298AD8ADE7166267EAFC8C409CC7CF18A8BBBDEBA)

List提供了divider属性用于给列表项之间添加分隔线。在设置divider属性时，可以通过strokeWidth和color属性设置分隔线的粗细和颜色。

startMargin和endMargin属性分别用于设置分隔线距离列表侧边起始端的距离和距离列表侧边结束端的距离。
    
    
    List() {
      // ...
    }
    .divider(strokeWidth: 1, color: 0xffe9f0f0, startMargin: 60, endMargin: 10)

此示例表示从距离列表侧边起始端60.vp开始到距离结束端10.vp的位置，画一条粗细为1.vp的分割线，可以实现图9设置列表分隔线的样式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/j3taI9VgQ1m02vi08yceKg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7124B1931F915928A4415F3B9DC5B5113C188DBA1F84AF3840870544803A2E1A)

  * 分隔线的宽度会使ListItem之间存在一定间隔，当List设置的内容间距小于分隔线宽度时，ListItem之间的间隔会使用分隔线的宽度。

  * 当List存在多列时，分割线的startMargin和endMargin作用于每一列上。

  * List组件的分隔线画在两个ListItem之间，第一个ListItem上方和最后一个ListItem下方不会绘制分隔线。




#### [h2]添加滚动条

当列表项高度（宽度）超出屏幕高度（宽度）时，列表可以沿垂直（水平）方向滚动。在页面内容很多时，若用户需快速定位，可拖拽滚动条，如下图10所示。

**图10** 列表的滚动条

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/HIKKQUyWSYyYNgYNOHmHwA/zh-cn_image_0000002701819336.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=EF999570C0C22B2801B010E308B39176AED3039A07BA02475DD27573ABA1E727)

在使用List组件时，可通过scrollBar属性控制列表滚动条的显示。scrollBar的取值类型为[BarState](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-barstate)，当取值为BarState.Auto表示按需显示滚动条。此时，当触摸到滚动条区域时显示控件，可上下拖拽滚动条快速浏览内容，拖拽时会变粗。若不进行任何操作，2秒后滚动条自动消失。
    
    
    List() {
        // ...
    }
    .scrollBar(BarState.Auto)

#### 支持分组列表

在列表中支持数据的分组展示，可以使列表显示结构清晰，查找方便，从而提高使用效率。分组列表在实际应用中十分常见，如下图11所示联系人列表。

**图11** 联系人分组列表

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/YMPOgfFgTre4zO63yzYBcg/zh-cn_image_0000002731538617.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=31CAD551A00B37DA62D465AEA0736AB50A6E6921548D12C62A1F1155EE3BA31C)

在List组件中使用ListItemGroup对项目进行分组，可以构建二维列表。

在List组件中可以直接使用一个或者多个ListItemGroup组件，ListItemGroup的宽度默认充满List组件。在初始化ListItemGroup时，可通过header参数设置列表分组的头部组件。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    public class EntryView {
        @Builder
        public func itemHead(text: String) {
            // 列表分组的头部组件，对应联系人分组A、B等位置的组件
            Text(text)
                .fontSize(20)
                .backgroundColor(0xfff1f3f5)
                .width(100.percent)
                .padding(5)
        }
    
        func build() {
            List() {
                ListItemGroup(header: this.itemHead("a")) {
                    =>
                    // 循环渲染分组A的ListItem
                }
    
                ListItemGroup(header: this.itemHead("b")) {
                    =>
                    // 循环渲染分组A的ListItem
                }
            }
        }
    }

如果多个ListItemGroup结构类似，可以将多个分组的数据组成数组，然后使用ForEach对多个分组进行循环渲染。例如在联系人列表中，将每个分组的联系人数据contacts（可参考迭代列表内容章节）和对应分组的标题title数据进行组合，定义为数组contactsGroups。然后在ForEach中对contactsGroups进行循环渲染，即可实现多个分组的联系人列表。可参考添加粘性标题章节示例代码。

#### 添加粘性标题

粘性标题是一种常见的标题模式，常用于定位字母列表的头部元素。如下图12所示，在联系人列表中滚动A部分时，B部分开始的头部元素始终处于A的下方。而在开始滚动B部分时，B的头部会固定在屏幕顶部，直到所有B的项均完成滚动后，才被后面的头部替代。

粘性标题不仅有助于阐明列表中数据的表示形式和用途，还可以帮助用户在大量信息中进行数据定位，从而避免用户在标题所在的表的顶部与感兴趣区域之间反复滚动。

**图12** 粘性标题

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/48/v3/8YHMhCBSRj2ufnu1TYUGAA/zh-cn_image_0000002701659426.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7FC4A10741381579F5CE7F37C594F4026CADFE03EE8D723091946C7500B953DA)

List组件的sticky属性配合ListItemGroup组件使用，用于设置ListItemGroup中的头部组件是否呈现吸顶效果或者尾部组件是否呈现吸底效果。

通过给List组件设置sticky属性为StickyStyle.Header，即可实现列表的粘性标题效果。如果需要支持吸底效果，可以通过footer参数初始化ListItemGroup的底部组件，并将sticky属性设置为StickyStyle.Footer。
    
    
    package ohos_app_cangjie_entry
    
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    import kit.ArkUI.*
    
    public class Contact {
        var name: String
        var icon: AppResource
    
        public init(name: String, icon: AppResource) {
            this.name = name
            this.icon = icon
        }
    }
    
    public class ContactGroup {
        var title: String
        var contacts: Array<Contact>
    
        public init(title: String, contacts: Array<Contact>) {
            this.title = title
            this.contacts = contacts
        }
    }
    
    @Entry
    @Component
    public class EntryView {
        // 定义分组联系人数据集合contactsGroups数组
        private var contactsGroups: Array<ContactGroup> = [
            ContactGroup('A',
                [Contact('艾佳', @r(app.media.startIcon)), Contact('安安', @r(app.media.startIcon)),
                    Contact('Angela', @r(app.media.startIcon))]),
            ContactGroup('B', [Contact('白叶', @r(app.media.startIcon)), Contact('伯明', @r(app.media.startIcon))])
        ]
    
        @Builder
        func itemHead(text: String) {
            // 列表分组的头部组件，对应联系人分组A、B等位置的组件
            Text(text)
                .fontSize(20)
                .backgroundColor(0xfff1f3f5)
                .width(100.percent)
                .padding(5)
        }
    
        @Builder
        func footertest(itemGroup: ContactGroup) {
            ForEach(
                itemGroup.contacts,
                itemGeneratorFunc: {
                    item: Contact, _: Int64 => ListItem() {
                        Row() {
                            Image(item.icon)
                                .width(36)
                                .height(36)
                                .margin(8)
                            itemHead(item.name)
                        }
                    }.backgroundColor(Color(0XFFFFFFFF))
                }
            )
        }
    
        func build() {
            List() {
                // 循环渲染ListItemGroup，contactsGroups为多个分组联系人contacts和标题title的数据集合
                ForEach(
                    this.contactsGroups,
                    itemGeneratorFunc: {
                        itemGroup: ContactGroup, _: Int64 => ListItemGroup(header: this.itemHead(itemGroup.title)) {
                            this.footertest(itemGroup)
                        }.divider(ListDividerOptions(strokeWidth: 1, color: Color(0X08000000), startMargin: 48,
                            endMargin: 48))
                    },
                    keyGeneratorFunc: {item: ContactGroup, idx: Int64 => idx.toString()}
                )
            }
                .backgroundColor(Color(0X08000000))
                .divider(ListDividerOptions(strokeWidth: 1, color: Color(0X08000000), startMargin: 48, endMargin: 48))
                .sticky(StickyStyle.Header) // 设置吸顶，实现粘性标题效果
        }
    }

#### 控制滚动位置

控制滚动位置在实际应用中十分常见，例如当新闻页列表项数量庞大，用户滚动列表到一定位置时，希望快速滚动到列表底部或返回列表顶部。此时，可以通过控制滚动位置来实现列表的快速定位，如下图13所示。

**图13** 返回列表顶部

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c0/v3/AJQdVTpNT82_fgt3q4cdDw/zh-cn_image_0000002731378641.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=E63FE05017E10F9CBA54FC0512661A4E2B5D9BC34E7E75EF773CD89C9BF00064)

List组件初始化时，可以通过scroller参数绑定一个[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)对象，进行列表的滚动控制。例如，用户在新闻应用中，点击新闻页面底部的返回顶部按钮时，就可以通过Scroller对象的scrollToIndex方法使列表滚动到指定的列表项索引位置。

首先，需要创建一个Scroller的对象listScroller。
    
    
    var listScroller: Scroller = Scroller()

然后，通过将listScroller用于初始化List组件的scroller参数，完成listScroller与列表的绑定。在需要跳转的位置指定scrollToIndex的参数为0，表示返回列表顶部。
    
    
    Stack(alignContent: Alignment.Bottom) {
        List(space: 20, scroller: this.listScroller) {
            // ...
        }
    }
    
    Button() {
        // ...
    }
    .onClick({ event =>
        this.listScroller.scrollToIndex(0)
    })

#### 响应滚动位置

许多应用需要监听列表的滚动位置变化并作出响应。例如，在联系人列表滚动时，如果跨越了不同字母开头的分组，则侧边字母索引栏也需要更新到对应的字母位置。

除了字母索引之外，滚动列表结合多级分类索引在应用开发过程中也很常见，例如购物应用的商品分类页面，多级分类也需要监听列表的滚动位置。

**图14** 字母索引响应联系人列表滚动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/CBQ-_7vkS-S-EiG-l2Ey9w/zh-cn_image_0000002701819338.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=B170C68F9C3F565EAE182CF74D2E342A386D18E5F8FE4F39A66545CA0345F20F)

如上图14所示，当联系人列表从A滚动到B时，右侧索引栏也需要同步从选中A状态变成选中B状态。此场景可以通过监听List组件的onScrollIndex事件来实现，右侧索引栏需要使用字母表索引组件[AlphabetIndexer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-alphabetindexer)。

在列表滚动时，根据列表此时所在的索引值位置firstIndex，重新计算字母索引栏对应字母的位置selectedIndex。由于AlphabetIndexer组件通过selected属性设置了选中项索引值，当selectedIndex变化时会触发AlphabetIndexer组件重新渲染，从而显示为选中对应字母的状态。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    
    @Entry
    @Component
    public class EntryView {
        let alphabets = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        @State
        var selectedIndex: Int32 = 0;
        private var listScroller: Scroller = Scroller()
    
        func build() {
            Stack(alignContent: Alignment.End) {
                List(scroller: this.listScroller) {}.onScrollIndex({
                    firstIndex, scrollState, _ =>
                // 根据列表滚动到的索引值，重新计算对应联系人索引栏的位置this.selectedIndex
                })
    
                // 字母表索引组件
                AlphabetIndexer(arrayValue: this.alphabets, selected: 0).selected(this.selectedIndex)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/cbWMNaFRRp60AJPQVGw0RQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=703F1A94373185AE1B8EA5C6F21933FA3393A7CD142E290B915560302A3AF629)

计算索引值时，ListItemGroup作为一个整体占一个索引值，不计算ListItemGroup内部ListItem的索引值。

#### 响应列表项侧滑

侧滑菜单在许多应用中都很常见。例如，通讯类应用通常会给消息列表提供侧滑删除功能，即用户可以通过向左侧滑列表的某一项，再点击删除按钮删除消息，如下图15所示。其中，列表项头像右上角标记设置参考给列表项添加标记。

**图15** 侧滑删除列表项

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/CDl5T8jIQL-dKoIDp8Nh4w/zh-cn_image_0000002731538619.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=14F7BB23C8DF371EE0018E8249497F0788FC1F9FACBAC72EC394DDF02D91A91A)

ListItem的[swipeAction属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listitem#func-swipeactioncustombuilder-custombuilder-swipeedgeeffect-float64---unit)可用于实现列表项的左右滑动功能。swipeAction属性方法初始化时有必填参数SwipeActionOptions，其中，start参数表示设置列表项右滑时起始端滑出的组件，end参数表示设置列表项左滑时尾端滑出的组件。

在消息列表中，end参数表示设置ListItem左滑时尾端滑出自定义组件，即删除按钮。在初始化end方法时，将滑动列表项的索引传入删除按钮组件，当用户点击删除按钮时，可以根据索引值来删除列表项对应的数据，从而实现侧滑删除功能。

  * 实现尾端滑出组件的构建。
        
        @Builder
        func itemEnd(index: Int64) {
          // 构建尾端滑出组件
          Button(ButtonOptions(shape: ButtonType.Circle)) {
            Image(@r(app.media.ic_public_delete_filled))
              .width(20)
              .height(20)
          }
          .onClick({ event =>
            // this.messages为列表数据源，可根据实际场景构造。点击后从数据源删除指定数据项。
            this.message.remove(index)
          })
        }

  * 绑定swipeAction属性到可左滑的ListItem上。
        
        // 构建List时，通过ForEach基于数据源this.messages循环渲染ListItem。
        ListItem(){
            Text('1111').height(20)
        }
        .swipeAction(end: this.itemEnd(index)) // index为该ListItem在List中的索引值




#### 给列表项添加标记

添加标记是一种无干扰性且直观的方法，用于显示通知或将注意力集中到应用内的某个区域。例如，当消息列表接收到新消息时，通常对应的联系人头像的右上方会出现标记，提示有若干条未读消息，如下图16所示。

**图16** 给列表项添加标记

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/XoFZ-uCuTIqWqzqFyaW4rQ/zh-cn_image_0000002701659428.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=5A409A364E50C5142F7CEA2D2A50AF5481DFCE91F7D2EEFEB5A415420848A5BA)

在ListItem中使用[Badge](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-information-display-badge)组件可实现给列表项添加标记功能。Badge是可以附加在单个组件上用于信息标记的容器组件。

在消息列表中，若希望在联系人头像右上角添加标记，可在实现消息列表项ListItem的联系人头像时，将头像Image组件作为Badge的子组件。

在Badge组件中，count和position参数用于设置需要展示的消息数量和提示点显示位置，还可以通过style参数灵活设置标记的样式。
    
    
    ListItem(){
      Badge(
        count: 1, style: BadgeStyle(color: 0xfa2a2d, badgeSize: 16),
            position: BadgePosition.RightTop,
            child: { =>
                Image(@r(app.media.startIcon))
            }
        )
    }

#### 下拉刷新与上拉加载

页面的下拉刷新与上拉加载功能在移动应用中十分常见，例如，新闻页面的内容刷新和加载。这两种操作的原理都是通过响应用户的[触摸事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-event-touch)，在顶部或者底部显示一个刷新或加载视图，完成后再将此视图隐藏。

以下拉刷新为例，其实现主要分成三步：

  1. 监听手指按下事件，记录其初始位置的值。

  2. 监听手指按压移动事件，记录并计算当前移动的位置与初始值的差值，大于0表示向下移动，同时设置一个允许移动的最大值。

  3. 监听手指抬起事件，若此时移动达到最大值，则触发数据加载并显示刷新视图，加载完成后将此视图隐藏。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/JSQomZY4RZuzKXYdZDgg4w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=57CCE44771B1DF3959F811BBB3710DE3D76B70D720F2DF754C3938B6A6BE708F)

页面的下拉刷新操作推荐使用[Refresh](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-refresh)组件实现。

#### 编辑列表

列表的编辑模式用途十分广泛，常见于待办事项管理、文件管理、备忘录的记录管理等应用场景。在列表的编辑模式下，新增和删除列表项是最基础的功能，其核心是对列表项对应的数据集合进行数据添加和删除。

#### 长列表的处理

[循环渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)适用于短列表，当构建具有大量列表项的长列表时，如果直接采用循环渲染方式，会一次性加载所有的列表元素，会导致页面启动时间过长，影响用户体验。因此，推荐使用[数据懒加载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-lazyforeach)（LazyForEach）方式实现按需迭代加载数据，从而提升列表性能。

关于长列表按需加载优化的具体实现可参考[数据懒加载](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-lazyforeach)章节中的示例。

当使用懒加载方式渲染列表时，为了更好的列表滚动体验，减少列表滑动时出现白块，List组件提供了cachedCount参数用于设置列表项缓存数，只在懒加载LazyForEach中生效。
    
    
    List() {
      // ...
    }.cachedCount(3)

以垂直列表为例：

  * 若懒加载是用于ListItem，当列表为单列模式时，会在List显示的ListItem前后各缓存cachedCount个ListItem；若是多列模式下，会在List显示的ListItem前后各缓存cachedCount * 列数个ListItem。

  * 若懒加载是用于ListItemGroup，无论单列模式还是多列模式，都是在List显示的ListItem前后各缓存cachedCount个ListItemGroup。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/Pa4VYpJBSP-R7pUeTx6Cfw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=EEB64E938BA4450D5313862807CE8430F37CD1136B86906B59336167B2F43CCE)

cachedCount的增加会增大UI的CPU、内存开销。使用时需要根据实际情况，综合性能和用户体验进行调整。

列表使用数据懒加载时，除了显示区域的列表项和前后缓存的列表项，其他列表项会被销毁。

#### 折叠与展开

列表项的折叠与展开用途广泛，常用于信息清单的展示、填写等应用场景。

**图17** 列表项的折叠与展开

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/8LFa6jaeQaqjKWGaXtaU4Q/zh-cn_image_0000002731378643.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=2620D3E17021AF2851C1AE887F37EFF301CCCECADDD8F2196AF4BA043C824DCF)

列表项折叠与展开效果实现主要流程如下：

  1. 定义列表项数据结构。
         
         open class ItemInfo {
             var index: Int64
             var name: String
             var label: String
             var `type`: String = ''
         
             init(index: Int64, name: String, label: String, `type`: String) {
                 this.index = index
                 this.name = name
                 this.label = label
                 this.`type` = `type`
             }
         }
         
         public class ItemGroupInfo <: ItemInfo {
             var children: Array<ItemInfo>
         
             init(index: Int64, name: String, label: String, children: Array<ItemInfo>) {
                 super(index, name, label, '')
                 this.children = children
             }
         }

  2. 构造列表结构。
         
         @State
         var routes: Array<ItemGroupInfo> = [
             ItemGroupInfo(
                 0,
                 'basicInfo',
                 '个人基本资料',
                 [
                     ItemInfo(0, '昵称', 'xxxx', 'Text'),
                     ItemInfo(1, '头像', "resource://rawfile/startIcon.png", 'Image'),
                     ItemInfo(2, '年龄', 'xxxx', 'Text'),
                     ItemInfo(3, '生日', 'xxxxxxxx', 'Text'),
                     ItemInfo(4, '性别', 'xxxxxx', 'Text')
                 ]
             ),
             ItemGroupInfo(1, 'equipInfo', '设备信息', []),
             ItemGroupInfo(2, 'appInfo', '应用使用信息', []),
             ItemGroupInfo(3, 'uploadInfo', '您主动上传的数据', []),
             ItemGroupInfo(4, 'tradeInfo', '交易与资产信息', []),
             ItemGroupInfo(5, 'otherInfo', '其他资料', [])
         ]
         
         @State
         var expandedItems: ObservedArrayList<Float32> = ObservedArrayList<Float32>([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])
         
         func build() {
             Column() {
                 // ...
                 List(space: 10) {
                     ForEach(
                         this.routes,
                         itemGeneratorFunc: {
                             itemGroup: ItemGroupInfo, _: Int64 => ListItemGroup(header: this.ListItemGroupHeader(itemGroup),
                                 footer: {=>}, space: 0, style: ListItemGroupStyle.Card) {
                                 if (this.expandedItems[itemGroup.index] == 180.0) {
                                     ForEach(itemGroup.children, itemGeneratorFunc: {
                                         item: ItemInfo, _: Int64 => ListItem() {
                                             Row() {
                                                 Text(item.name)
                                                 Blank()
                                                 if (item.`type` == 'Image') {
                                                     Image(item.label)
                                                         .height(20)
                                                         .width(20)
                                                 } else {
                                                     Text(item.label)
                                                 }
                                                 Image(@r(sys.media.ohos_ic_public_arrow_right))
                                                     .fillColor(@r(sys.color.ohos_id_color_fourth))
                                                     .height(30)
                                                     .width(30)
                                             }.width(100.percent)
                                         }.width(100.percent)
                                     })
                                 }
                             }
                         }
                     )
                 }.width(100.percent)
             }
                 .width(100.percent)
                 .height(100.percent)
                 .justifyContent(FlexAlign.Start)
                 .backgroundColor(@r(sys.color.ohos_id_color_sub_background))
         }

  3. 通过改变ListItem的状态，来控制每个列表项是否展开，并通过animation和animateTo来实现展开与折叠过程中的动效效果。
         
         @Builder
         func ListItemGroupHeader(itemGroup: ItemGroupInfo) {
             Row() {
                 Text(itemGroup.label)
                 Blank()
                 Image(@r(sys.media.ohos_ic_public_arrow_down))
                     .fillColor(@r(sys.color.ohos_id_color_fourth))
                     .height(30)
                     .width(30)
                     .rotate(x: this.expandedItems[itemGroup.index])
                     .animation(AnimateParam(curve: Curve.EaseInOut, duration: 500))
             }
                 .width(100.percent)
                 .padding(10)
                 .onClick({
                     event => this.expandedItems[itemGroup.index] = 180.0 - this.expandedItems[itemGroup.index]
                 })
         }



