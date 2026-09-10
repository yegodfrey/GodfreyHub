---
name: cangjie-references/cj-scroll-swipe-listgroup
title: ListItemGroup
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listgroup
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 滚动与滑动 / ListItemGroup
---

# ListItemGroup

该组件用来展示列表item分组，宽度默认充满[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)组件，必须配合List组件来使用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/ahJi6VNzTfSEuIBBCsIrtA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=262AD7871EA767013EB520912D88D8DA653AF27D977C458A69B2F5CF3345B603)

  * 该组件的父组件只能是[List](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-list)。
  * ListItemGroup组件不支持设置[通用属性aspectRatio](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-aspectratiofloat64)。
  * 当ListItemGroup的父组件List的listDirection属性为Axis.Vertical时，设置[通用属性height](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-heightoptionlength)属性不生效。ListItemGroup的高度为header高度、footer高度和所有ListItem布局后总高度之和。
  * 当父组件List的listDirection属性为Axis.Horizontal时，设置[通用属性width](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-widthoptionlength)属性不生效。ListItemGroup的宽度为header宽度、footer宽度和所有ListItem布局后总宽度之和。
  * 当前ListItemGroup内部的ListItem组件不支持编辑、拖拽功能，即ListItem组件的editable属性不生效。
  * ListItemGroup使用direction属性设置布局方向不生效，ListItemGroup组件布局方向跟随父容器List组件的布局方向。



#### 导入模块
    
    
    import kit.ArkUI.*

#### 子组件

包含[ListItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-scroll-swipe-listitem)子组件。

#### 创建组件

#### [h2]init(?CustomBuilder, ?CustomBuilder, ?Length, ?ListItemGroupStyle, () -> Unit)
    
    
    public init(
        header!: ?CustomBuilder = None,
        footer!: ?CustomBuilder = None,
        space!: ?Length = None,
        style!: ?ListItemGroupStyle = Option.None,
        child!: () -> Unit
    )

**功能：** 创建ListItemGroup组件。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
header | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 否 | None | **命名参数。** 设置ListItemGroup头部组件。  
footer | ?[CustomBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#type-custombuilder) | 否 | None | **命名参数。** 设置ListItemGroup尾部组件。  
space | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 列表项间距。只作用于ListItem与ListItem之间，不作用于header与ListItem、footer与ListItem之间。  
style | ?ListItemGroupStyle | 否 | Option.None | **命名参数。** 设置List组件卡片样式。  
child | ()->Unit | 是 | - | 声明容器子组件。  
  
#### 通用属性/通用事件

通用属性：全部支持。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/sy6Z4VqtRaWnvJlyUyGtWg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=7E75D9CEFD5BE39C765AF673ACC74D78CE63ABEA5FBB82240B8893BA9800A1ED)

不支持[设置通用属性aspectRatio](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-aspectratiofloat64)。

通用事件：全部支持。

#### 组件属性

#### [h2]func divider(Option<ListDividerOptions>)
    
    
    public func divider(value: Option<ListDividerOptions>): This

**功能：** 设置ListItem分割线样式，默认无分割线。strokeWidth，startMargin和endMargin不支持设置百分比。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | Option<ListDividerOptions> | 是 | - | ListItem分割线样式。设置为Option.None时表示无分割线。  
  
#### 基础类型定义

#### [h2]class ListDividerOptions
    
    
    public class ListDividerOptions {
        public var strokeWidth: ?Length
        public var color: ?ResourceColor
        public var startMargin: ?Length
        public var endMargin: ?Length
        public init(
            strokeWidth!: ?Length,
            color!: ?ResourceColor = None,
            startMargin!: ?Length = None,
            endMargin!: ?Length = None
        )
    }

**功能：** ListItem分割线样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var color**
    
    
    public var color: ?ResourceColor

**功能：** 设置分割线的颜色。

**类型：** ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var endMargin**
    
    
    public var endMargin: ?Length

**功能：** 设置分割线距离列表侧边结束端的距离。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var startMargin**
    
    
    public var startMargin: ?Length

**功能：** 设置分割线距离列表侧边起始端的距离。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**var strokeWidth**
    
    
    public var strokeWidth: ?Length

**功能：** 设置分割线的线宽。

**类型：** ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length)

**读写能力：** 可读写

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**init(?Length, ?ResourceColor, ?Length, ?Length)**
    
    
    public init(
        strokeWidth!: ?Length,
        color!: ?ResourceColor = None,
        startMargin!: ?Length = None,
        endMargin!: ?Length = None
    )

**功能：** 构造ListItem分割线样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
strokeWidth | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | 分割线的线宽。  
color | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 否 | None | 分割线的颜色。  
startMargin | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | 分割线距离列表侧边起始端的距离。  
endMargin | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | 分割线距离列表侧边结束端的距离。  
  
#### [h2]enum ListItemGroupStyle
    
    
    public enum ListItemGroupStyle <: Equatable<ListItemGroupStyle> {
        | None
        | Card
        | ...
    }

**功能：** 设置List组件卡片样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**父类型：** Equatable<ListItemGroupStyle>

**Card**
    
    
    Card

**功能：** 显示默认卡片样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**None**
    
    
    None

**功能：** 无样式。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**operator func !=(ListItemGroupStyle)**
    
    
    public operator func !=(other: ListItemGroupStyle): Bool

**功能：** 比较两个枚举值是否不相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ListItemGroupStyle | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值不相等则返回true，否则返回false。  
  
**operator func ==(ListItemGroupStyle)**
    
    
    public operator func ==(other: ListItemGroupStyle): Bool

**功能：** 比较两个枚举值是否相等。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
other | ListItemGroupStyle | 是 | - | 待比较的另一个枚举值。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 如果两个枚举值相等则返回true，否则返回false。  
  
#### 示例代码

#### [h2]示例1（设置吸顶/吸底）

该示例实现了Header吸顶和Footer吸底的效果。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    class TimeTable {
        let title: String
        let projects: Array<String>
    
        public init(title: String, projects: Array<String>) {
            this.title = title
            this.projects = projects
        }
    }
    
    @Entry
    @Component
    class EntryView {
         let timeTable = [
            TimeTable("Monday", ["Chinese", "Math", "English"]),
            TimeTable("Tuesday", ["Physics", "Chemistry", "Biology"]),
            TimeTable("Wednesday", ["History", "Geography", "Politics"]),
            TimeTable("Thursday", ["Art", "Music", "PE"])]
    
        @Builder
        func itemHead(text: String) {
            Text(text)
                .fontSize(20)
                .backgroundColor(0xAABBCC)
                .width(100.percent)
                .padding(20)
        }
    
        @Builder
        func itemFoot(num: Int64) {
            Text("Total ${num} classes")
                .fontSize(16)
                .backgroundColor(0xAABBCC)
                .width(100.percent)
                .padding(20)
        }
    
        func build() {
            Column() {
                List(space: 20) {
                    ForEach(this.timeTable, itemGeneratorFunc: {item:TimeTable ,_:Int64 =>
                            ListItemGroup(header: this.itemHead(item.title), footer: this.itemFoot(item.projects.size)){
                                ForEach(item.projects,itemGeneratorFunc: {project:String,_:Int64=>
                                        ListItem(){
                                            Text(project)
                                            .width(100.percent)
                                            .height(100)
                                            .fontSize(20)
                                            .textAlign(TextAlign.Center)
                                            .backgroundColor(0xFFFFFF)
                                        }})
                            }
                            })
                 }
            }
                .height(800.vp)
                .backgroundColor(Color(0XD3D3D3))
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/qAwIETUjSlGsrkGXZ8UYwg/zh-cn_image_0000002731378843.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111637Z&HW-CC-Expire=86400&HW-CC-Sign=35AE82D58D97C1B586D5477C3888B249AEBB5BA1AD5DE20197D98F81540BE7D4)
