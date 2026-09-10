---
name: cangjie-guides/cj-popup-and-menu-components-menu
title: 菜单控制（Menu）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-popup-and-menu-components-menu
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 使用弹窗 / 菜单 / 菜单控制（Menu）
---

# 菜单控制（Menu）

Menu是菜单接口，一般用于鼠标右键弹窗、点击弹窗等。具体用法请参见[菜单控制](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu)。

使用[bindContextMenu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu#func-bindcontextmenucustombuilder-responsetype-contextmenuoptions)并设置预览图，菜单弹出时有蒙层，此时为模态。

使用[bindMenu](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-universal-attribute-menu#func-bindmenuarraymenuelement)或bindContextMenu未设置预览图时，菜单弹出无蒙层，此时为非模态。

#### 生命周期

名称 | 类型 | 说明  
---|---|---  
aboutToAppear | () -> Unit | 菜单显示动效前的事件回调。  
onAppear | () -> Unit | 菜单弹出时的事件回调。  
aboutToDisappear | () -> Unit | 菜单退出动效前的事件回调。  
onDisappear | () -> Unit | 菜单消失时的事件回调。  
  
#### 创建默认样式的菜单

菜单需要调用bindMenu接口来实现。bindMenu响应绑定组件的点击事件，绑定组件后手势点击对应组件后即可弹出。
    
    
    Button("click for Menu").bindMenu(
        [
            MenuElement(
                value: 'Menu1',
                action: {
                    => Hilog.info(0, 'cangjie', 'handle Menu1 select')
                }
            )
        ]
    )

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/XKhdTdD0T2ayxSk_xy8qCw/zh-cn_image_0000002713558766.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=4A3DC08A51D2BC4B22A19DC87C87A1B1E8D5AB01251A9D1276D63F6FFAF9D3B4)

#### [h2]创建自定义样式的菜单

当默认样式不满足开发需求时，可使用[@Builder](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-builder)自定义菜单内容，通过bindMenu接口进行菜单的自定义。

**@Builder开发菜单内的内容**
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.resource.*
    import kit.LocalizationKit.*
    
    class Tmp {
        var iconStr2: AppResource = @r(app.media.startIcon)
    
        public func set(val: AppResource) {
            this.iconStr2 = val
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @State
        var select: Bool = true
        private var iconStr: AppResource = @r(app.media.startIcon)
        private var iconStr2: AppResource = @r(app.media.startIcon)
    
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
                MenuItem(startIcon: @r(app.media.startIcon), content: @r(app.string.module_desc),
                    endIcon: @r(app.string.module_desc), labelInfo: @r(app.string.module_desc))
                MenuItem(startIcon: @r(app.media.startIcon), content: @r(app.string.module_desc),
                    endIcon: @r(app.string.module_desc), labelInfo: @r(app.string.module_desc)).enabled(false)
                MenuItem(
                    startIcon: this.iconStr,
                    content: @r(app.string.module_desc),
                    endIcon: @r(app.media.startIcon),
                    labelInfo: @r(app.string.module_desc),
                    // 当builder参数进行配置时，表示与menuItem项绑定了子菜单。鼠标hover在该菜单项时，会显示子菜单。
                    builder: this.SubMenu
                )
                MenuItemGroup(header: "小标题", footer: "") {
                    =>
                        MenuItem(startIcon: "", content: "菜单选项", endIcon: "", labelInfo: "")
                            .selectIcon(true)
                            .selected(this.select)
                            .onChange(
                                {
                                    selected =>
                                        let Str: Tmp = Tmp()
                                        Str.set(@r(app.media.startIcon))
                                }
                            )
                        MenuItem(
                            startIcon: @r(app.media.startIcon),
                            content: @r(app.string.module_desc),
                            endIcon: @r(app.media.startIcon),
                            labelInfo: @r(app.string.module_desc),
                            builder: this.SubMenu
                        )
                }
    
                MenuItem(
                    startIcon: this.iconStr2,
                    content: @r(app.string.module_desc),
                    endIcon: @r(app.media.startIcon),
                    labelInfo: @r(app.string.module_desc)
                )
            }
        }
    
        func build() {
            // ...
        }
    }

#### [h2]bindMenu属性绑定组件
    
    
    Button('click for Menu')
        .bindMenu(builder: this.MyMenu)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/8w5P-gKnQNibCSmqd-6F8A/zh-cn_image_0000002743197679.png?HW-CC-KV=V1&HW-CC-Date=20260908T090121Z&HW-CC-Expire=86400&HW-CC-Sign=B55BF4F70BC4F9BBB413751A71938BDF347E892F7BFCA64C75DF0C8E42B820A2)

#### 创建支持右键或长按的菜单

通过bindContextMenu接口自定义菜单，设置菜单弹出的触发方式，触发方式为右键或长按。使用bindContextMenu弹出的菜单项是在独立子窗口内的，可显示在应用窗口外部。

  * @Builder开发菜单内的内容与上文写法相同。
  * 确认菜单的弹出方式，使用bindContextMenu属性绑定组件。示例中为右键弹出菜单。


    
    
    Button('click for Menu')
        .bindContextMenu(
            builder: this.MyMenu,
            responseType: ResponseType.RightClick
        )
