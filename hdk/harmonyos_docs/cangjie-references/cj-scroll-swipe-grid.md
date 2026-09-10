---
name: cangjie-references/cj-scroll-swipe-grid
title: Grid
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 滚动与滑动 / Grid
---

# Grid

网格容器，由"行"和"列"分割的单元格所组成，通过指定"项目"所在的单元格做出各种各样的布局。

#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

仅支持[GridItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-griditem)子组件，支持渲染控制类型（[if/else](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-ifelse)、[ForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)、[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach)）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/geXds4XtSJiNYhOUibrgjQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090147Z&HW-CC-Expire=86400&HW-CC-Sign=7607790D058ECB219EE8A2149AF867B29334EAB2B20BE9F81855BC9C0D589EBC)

  * Grid子组件的索引值计算规则：
  * 按子组件的顺序依次递增。
  * if/else语句中，只有条件成立分支内的子组件会参与索引值计算，条件不成立分支内的子组件不计算索引值。
  * ForEach/LazyForEach语句中，会计算展开所有子节点索引值。
  * [if/else](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-ifelse)、[ForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)、[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach)发生变化以后，会更新子节点索引值。
  * Grid子组件的visibility属性设置为Hidden或None时依然会计算索引值。
  * Grid子组件的visibility属性设置为None时不显示，但依然会占用子组件对应的网格。
  * Grid子组件设置position属性，会占用子组件对应的网格，子组件将显示在相对Grid左上角偏移position的位置。该子组件不会随其对应网格滚动，在对应网格滑出Grid显示范围外后不显示。
  * 当Grid子组件之间留有空隙时，会根据当前的展示区域尽可能填补空隙，因此GridItem可能会随着网格滚动而改变相对位置。



#### 创建组件

#### [h2]init(?Scroller, () -> Unit)
    
    
    public init(scroller!: ?Scroller = Option.None, child!: () -> Unit = {=>})

**功能：** 创建包含滚动控制器和子组件的网格容器。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
scroller | ?[Scroller](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll#class-scroller) | 否 | Option.None |  **命名参数。** 可滚动组件的控制器，与可滚动组件绑定。 **说明：** 不允许和其他滚动类组件，如：[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)、[Grid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-grid)、[Scroll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-scroll)等绑定同一个滚动控制对象。  
child | () -> Unit | 否 | {=>} | **命名参数。** 网格容器的子组件。  
  
#### 通用属性/通用事件

通用属性：除了支持通用属性外，还支持[滚动组件通用属性](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#组件属性)。

通用事件：除了支持通用事件外，还支持[滚动组件通用事件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-common#组件事件)。

#### 组件属性

#### [h2]func cachedCount(?Int32)
    
    
    public func cachedCount(value: ?Int32): This

**功能：** 设置预加载的GridItem的数量，只在[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach)中生效。

设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。

[LazyForEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-state-rendering-lazyforeach)超出显示和缓存范围的GridItem会被释放。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?Int32 | 是 | - | 预加载的GridItem的数量。初始值：1  
  
#### [h2]func cachedCount(?Int32, ?Bool)
    
    
    public func cachedCount(count: ?Int32, show: ?Bool): This

**功能：** 设置预加载的GridItem数量，并配置是否显示预加载节点。

设置缓存后会在Grid显示区域上下各缓存cachedCount*列数个GridItem。配合[裁剪](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-clipbool)或[内容裁剪](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-shapclip#func-clipbool)属性可以显示出预加载节点。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
count | ?Int32 | 是 | - | 预加载的GridItem的数量。初始值：1  
show | ?Bool | 是 | - | 被预加载的GridItem是否需要显示。初始值：false  
  
#### [h2]func columnsGap(?Length)
    
    
    public func columnsGap(value: ?Length): This

**功能：** 设置列与列的间距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 列与列的间距。初始值：0.vp  
  
#### [h2]func columnsTemplate(?String)
    
    
    public func columnsTemplate(value: ?String): This

**功能：** 设置当前网格布局列的数量、固定列宽或最小列宽值，不设置时默认1列。

例如, '1fr 1fr 2fr' 是将父组件分3列，将父组件允许的宽分为4等份，第一列占1份，第二列占1份，第三列占2份。

columnsTemplate('repeat(auto-fit, track-size)')是设置最小列宽值为track-size，自动计算列数和实际列宽。

columnsTemplate('repeat(auto-fill, track-size)')是设置固定列宽值为track-size，自动计算列数。

columnsTemplate('repeat(auto-stretch, track-size)')是设置固定列宽值为track-size，使用columnsGap为最小列间距，自动计算列数和实际列间距。

其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为列宽，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效列宽。

auto-stretch模式只支持track-size为一个有效列宽值，并且track-size只支持px、vp和有效数字，不支持%。

使用效果可以参考示例3。

设置为'0fr'时，该列的列宽为0，不显示GridItem。设置为其他非法值时，GridItem显示为固定1列。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/dpe-URNBRl2mUQKygJuORw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090147Z&HW-CC-Expire=86400&HW-CC-Sign=4666AE77EF942914BD66CCAD483F6BBEC911D333DD43E5B6B673DDB214FD0078)

设置包含单位的track-size时，需按照数字+单位的格式，如'16vp'、'20%'，与填写Length类型的格式不同。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?String | 是 | - | 当前网格布局列的数量或最小列宽值。初始值："1fr"  
  
#### [h2]func rowsGap(?Length)
    
    
    public func rowsGap(value: ?Length): This

**功能：** 设置行与行的间距。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 用于设置行与行的间距。初始值：0.vp  
  
#### [h2]func rowsTemplate(?String)
    
    
    public func rowsTemplate(value: ?String): This

**功能：** 设置当前网格布局行的数量、固定行高或最小行高值，不设置时默认1行。

例如，'1fr 1fr 2fr'是将父组件分3行，将父组件允许的高分为4等份，第一行占1份，第二行占1份，第三行占2份。

  * rowsTemplate('repeat(auto-fit, track-size)')是设置最小行高值为track-size，自动计算行数和实际行高。
  * rowsTemplate('repeat(auto-fill, track-size)')是设置固定行高值为track-size，自动计算行数。
  * rowsTemplate('repeat(auto-stretch, track-size)')是设置固定行高值为track-size，使用rowsGap为最小行间距，自动计算行数和实际行间距。



其中repeat、auto-fit、auto-fill、auto-stretch为关键字。track-size为行高，支持的单位包括px、vp、%或有效数字，默认单位为vp，track-size至少包括一个有效行高。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/n4iRidiZRySbkLjDX-Z3sQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090147Z&HW-CC-Expire=86400&HW-CC-Sign=222EB050350FD7F09F271BBE704929B1E00E7BECAE737E52985A7E4933DA80B8)

  * auto-stretch模式下只支持track-size为一个有效行高值，并且track-size只支持px、vp和有效数字，不支持%。
  * value设置为'0fr'时，这一行的行宽为0，这一行GridItem不显示。设置为其他非法值时，按固定1行处理。
  * 设置包含单位的track-size时，需按照数字+单位的格式，如'16vp'、'20%'，与填写Length类型的格式不同。



Grid组件根据rowsTemplate、columnsTemplate属性的设置情况，可分为以下三种布局模式：

  1. rowsTemplate、columnsTemplate同时设置：

     * Grid只展示固定行列数的元素，其余元素不展示，且Grid不可滚动。
     * Grid的宽高没有设置时，默认适应父组件尺寸。
     * Grid网格列大小按照Grid自身内容区域大小减去所有行列Gap后按各个行列所占比重分配。
     * GridItem默认填满网格大小。
  2. rowsTemplate、columnsTemplate仅设置其中的一个：

     * 元素按照设置的方向进行排布，超出Grid显示区域后，Grid可通过滚动的方式展示。

     * 如果设置了columnsTemplate，Grid滚动方向为垂直方向，主轴方向为垂直方向，交叉轴方向为水平方向。

     * 如果设置了rowsTemplate，Grid滚动方向为水平方向，主轴方向为水平方向，交叉轴方向为垂直方向。

     * 网格交叉轴方向尺寸根据Grid自身内容区域交叉轴尺寸减去交叉轴方向所有Gap后按所占比重分配。

     * 网格主轴方向尺寸取当前网格交叉轴方向所有GridItem高度最大值。

  3. rowsTemplate、columnsTemplate都不设置：

     * 行数由Grid高度、首个元素高度、rowsGap共同决定。超出行列容纳范围的元素不显示，也不能通过滚动进行展示。
     * 此模式下仅生效以下属性：columnsGap、rowsGap。
     * 当前Grid下面没有GridItem时，Grid的宽高为0。



**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?String | 是 | - | 当前网格布局行的数量或最小行高值。初始值："1fr"  
  
#### 示例代码

#### [h2]示例1（设置自适应列数）

属性columnsTemplate中auto-fill、auto-fit和auto-stretch的使用示例
    
    
    package ohos_app_cangjie_entry
    
    import ohos.arkui.state_macro_manage.Entry
    import ohos.arkui.state_macro_manage.Component
    import ohos.arkui.state_macro_manage.State
    import ohos.arkui.state_macro_manage.r
    import ohos.base.*
    import ohos.arkui.component.*
    import ohos.arkui.state_management.*
    import ohos.arkui.state_macro_manage.*
    import std.collection.{ArrayList, HashMap}
    
    @Entry
    @Component
    class EntryView {
        var data: Array<Int64> = [0, 1, 2, 3, 4, 5]
        var data1: Array<Int64> = [0, 1, 2, 3, 4, 5]
        var data2: Array<Int64> = [0, 1, 2, 3, 4, 5]
    
        func build() {
            Column(space: 10) {
                Text("auto-fill 根据设定的列宽自动计算列数").width(90.percent)
                Grid() {
                    ForEach(
                        this.data,
                        itemGeneratorFunc: {
                            item: Int64, idx: Int64 => GridItem() {
                                Text("N ${item}").height(80)
                            }.backgroundColor(Color.Gray)
                        }
                    )
                }
                    .width(90.percent)
                    .border(width: 1.vp, color: Color.Black)
                    .columnsTemplate("repeat(auto-fill, 70)")
                    .columnsGap(10)
                    .rowsGap(10)
                    .height(150)
    
                Text("auto-fit 先根据设定的列宽计算列数，余下的空间会均分到每一列中").width(90.percent)
                Grid() {
                    ForEach(
                        this.data1,
                        itemGeneratorFunc: {
                            item: Int64, idx: Int64 => GridItem() {
                                Text("N ${item}").height(80)
                            }.backgroundColor(Color.Gray)
                        }
                    )
                }
                    .width(90.percent)
                    .border(width: 1.vp, color: Color.Black)
                    .columnsTemplate("repeat(auto-fit, 70)")
                    .columnsGap(10)
                    .rowsGap(10)
                    .height(150)
    
                Text("auto-stretch 先根据设定的列宽计算列数，余下的空间会均分到每个列间距中").width(90.percent)
                Grid() {
                    ForEach(
                        this.data2,
                        itemGeneratorFunc: {
                            item: Int64, idx: Int64 => GridItem() {
                                Text("N ${item}").height(80)
                            }.backgroundColor(Color.Gray)
                        }
                    )
                }
                    .width(90.percent)
                    .border(width: 1.vp, color: Color.Black)
                    .columnsTemplate('repeat(auto-stretch, 70)')
                    .columnsGap(10)
                    .rowsGap(10)
                    .height(150)
            }
                .width(100.percent)
                .height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/8pxrvPRTQIesd7zhSxZXzA/zh-cn_image_0000002743197819.png?HW-CC-KV=V1&HW-CC-Date=20260908T090147Z&HW-CC-Expire=86400&HW-CC-Sign=1EE9FCB8FB2C9D419F232B7EFEC50A96CA9F982F786F88769587DCC053AC4359)
