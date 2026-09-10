---
name: cangjie-references/cj-menu-menu
title: Menu
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menu
nodePath: 应用框架 / ArkUI（方舟UI框架） / 仓颉组件 / 菜单 / Menu
---

# Menu

以垂直列表形式显示的菜单。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/nfEkzLnfStOu5YbprDbIJA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111645Z&HW-CC-Expire=86400&HW-CC-Sign=CBF452B02FDB23876F345E78CD05C72232117DF3DF6F6D80283D5A829AD1AD8F)

Menu组件需配合[bindMenu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu#func-bindmenuarraymenuelement)或[bindContextMenu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu#func-bindcontextmenucustombuilder-responsetype-contextmenuoptions)方法使用，不支持作为普通组件单独使用。

#### 导入模块
    
    
    import ohos.arkui.component.menu

#### 子组件

包含[MenuItem](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitem)、[MenuItemGroup](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-menu-menuitemgroup)子组件。

#### 创建组件

#### [h2]init(() -> Unit)
    
    
    public init(child!: () -> Unit = {=>})

**功能：** 创建一个存在子组件的菜单。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/CHR7JkRSSmKEDVodtMaB9Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111645Z&HW-CC-Expire=86400&HW-CC-Sign=A43ABB962A49C148886AD115F1774A0BFBBD91D6BEEF76A644B8128444562BF9)

菜单和菜单项宽度计算规则：

布局过程中，期望每个菜单项的宽度一致。若子组件设置了宽度，则以[尺寸计算规则](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-layoutconstraints#func-constraintsizelength-length-length-length)为准。

不设置宽度的情况：菜单组件会对子组件MenuItem、MenuItemGroup设置默认2栅格的宽度，若菜单项内容区比2栅格宽，则会自适应撑开。

设置宽度的情况：菜单组件会对子组件MenuItem、MenuItemGroup设置减去padding后的固定宽度。

设置Menu边框[width](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-size#func-widthoptionlength)时，支持设置的最小宽度为64vp。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
child | () -> Unit | 否 | {=>} | **命名参数。** 声明容器内的子组件。  
  
#### 通用属性/通用事件

通用属性：除[shadow](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-imageeffect#func-shadowfloat64-resourcecolor-float64-float64)外，其余全部支持。

通用事件：全部支持。

#### 组件属性

#### [h2]func font(?Length, ?FontWeight, ?ResourceStr, ?FontStyle)
    
    
    public func font(
        size!: ?Length = None,
        weight!: ?FontWeight = None,
        family!: ?ResourceStr = None,
        style!: ?FontStyle = None
    ): This

**功能：** 设置Menu中所有文本的尺寸。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
size | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 否 | None | **命名参数。** 设置文本尺寸，Length为Int64、Float64类型时，使用fp单位。不支持百分比设置。初始值：16.vp。  
weight | ?[FontWeight](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontweight) | 否 | None | **命名参数。** 设置文本的字体粗细。初始值：FontWeight.Normal。  
family | ?[ResourceStr](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcestr) | 否 | None | **命名参数。** 设置文本的字体列表。使用多个字体，使用','进行分割，优先级按顺序生效。例如：'Arial, HarmonyOS Sans'。当前支持'HarmonyOS Sans'字体和[注册自定义字体](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-font)。初始值："HarmonyOS Sans"。  
style | ?[FontStyle](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#enum-fontstyle) | 否 | None | **命名参数。** 设置文本的字体样式。初始值：FontStyle.Normal。  
  
#### [h2]func fontColor(?ResourceColor)
    
    
    public func fontColor(value: ?ResourceColor): This

**功能：** 统一设置Menu中所有文本的颜色。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[ResourceColor](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-resourcecolor) | 是 | - | Menu中所有文本的颜色。初始值：0x99000000。  
  
#### [h2]func radius(?BorderRadiuses)
    
    
    public func radius(value: ?BorderRadiuses): This

**功能：** 设置Menu边框圆角半径。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#class-borderradiuses) | 是 | - | Menu边框圆角半径。  
  
#### [h2]func radius(?Length)
    
    
    public func radius(value: ?Length): This

**功能：** 设置Menu边框圆角半径。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/gpyDdHtsRAO2B5e2xoQeBw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111645Z&HW-CC-Expire=86400&HW-CC-Sign=63A6948E5914AE29881626E74D4A64B82F924690FBEDA14CD48BDBF65B0F2E64)

水平方向两个圆角半径之和的最大值大于菜单宽度，或垂直方向两个圆角半径之和的最大值大于菜单高度时，菜单四个圆角均采用菜单默认圆角半径值。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
value | ?[Length](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-common-types#interface-length) | 是 | - | Menu边框圆角半径。  
  
#### 示例代码

该示例通过配置MenuItem中的builder参数实现多级菜单。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.i18n.*
    import ohos.resource_manager.*
    import ohos.resource.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var select: Bool = true
        let iconStr: AppResource = @r(app.media.startIcon)
        var iconStr2: AppResource = @r(app.media.right)
    
        @Builder
        func SubMenu() {
            Menu() {
                MenuItem(startIcon: "", content: "复制", endIcon: "", labelInfo: "Ctrl+C")
                MenuItem(startIcon: "", content: "粘贴", endIcon: "", labelInfo: "Ctrl+V")
            }
        }
    
        @Builder
        func MyMenu() {
            Menu() {
                MenuItem(startIcon: @r(app.media.startIcon), content: @r(app.string.contentName),
                    endIcon: @r(app.media.blank), labelInfo: @r(app.string.emptyName))
                MenuItem(startIcon: @r(app.media.startIcon), content: @r(app.string.contentName),
                    endIcon: @r(app.media.blank), labelInfo: @r(app.string.emptyName)).enabled(false)
                MenuItem(
                    startIcon: this.iconStr,
                    content: @r(app.string.contentName),
                    endIcon: this.iconStr,
                    labelInfo: @r(app.string.emptyName),
                    builder: this.SubMenu
                )
                MenuItemGroup(header: "小标题", footer: "") {
                    =>
                        MenuItem(
                            startIcon: this.iconStr,
                            content: @r(app.string.contentName),
                            endIcon: @r(app.string.emptyName),
                            labelInfo: @r(app.string.emptyName),
                            builder: this.SubMenu
                        )
                        MenuItem(
                            startIcon: @r(app.media.startIcon),
                            content: @r(app.string.contentName),
                            endIcon: @r(app.media.right),
                            labelInfo: @r(app.string.emptyName),
                            builder: this.SubMenu
                        )
                        MenuItem(
                            startIcon: "",
                            content: "菜单选项",
                            endIcon: "",
                            labelInfo: "",
                        )
                            .selectIcon(true)
                            .selected(select)
                            .onChange({
                                selected => iconStr2 = @r(app.media.foreground)
                            })
                }
            }
        }
    
        func build() {
            Row() {
                Column() {
                    Text("click to show menu")
                        .fontSize(50)
                        .fontWeight(FontWeight.Bold)
                }
                    .bindMenu(builder: this.MyMenu)
                    .width(50.percent)
            }.height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/LiccC0qURpmkK33l4xkDXQ/zh-cn_image_0000002731538865.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111645Z&HW-CC-Expire=86400&HW-CC-Sign=B11ED698682945EC0578A2D3C3458B85A76786A4B444C807F9F68C6A86D05237)
