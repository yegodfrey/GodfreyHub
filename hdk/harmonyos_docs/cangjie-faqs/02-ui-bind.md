---
name: cangjie-faqs/02-ui-bind
title: 仓颉如何通过函数类型实现自定义UI描述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-ui-bind
nodePath: FAQ / UI开发 / 仓颉如何通过函数类型实现自定义UI描述
---

# 仓颉如何通过函数类型实现自定义UI描述

在使用仓颉开发UI时，可以使用bind函数实现自定义UI描述。bind函数文档，详情请参见[框架接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-ui-framework)

#### bind函数介绍

当组件的构造函数或属性方法的参数允许接收() -> Unit类型来定义UI描述时，为达到UI描述特定的效果，需要使用@Builder修饰的函数与自定义组件对象进行绑定，并作为参数传入。

仓颉提供了bind函数，用于将@Builder修饰的函数与自定义组件对象进行绑定。bind第一个参数为@Builder修饰的函数类型，第二个参数为当前的自定义组件对象（一般为this），@Builder修饰函数的参数紧跟在bind调用后，例如：bind(tabBuilder, this)('首页', 0)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/p4-K5U13Rzq8mFpAhzYRsg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085443Z&HW-CC-Expire=86400&HW-CC-Sign=62E5CFF30148C8D4FC77BC6DDC058233A577B60AEEBCC815244CC6857BAB24B5)

bindContentCover，bindSheet，description，bindMenu，bindContextMenu为特殊情况，若上述方法中参数为() -> Unit类型，则不允许使用bind，直接传入@Builder修饰的函数标识符即可。

#### bind函数使用场景示例

  * 示例一：组件的属性方法支持传入() -> Unit类型

TabContent组件中tabBar属性支持传入() -> Unit类型，用于自定义UI描述。public func tabBar(builder: () -> Unit): This

使用全局@Builder修饰的方法传入() -> Unit参数类型。
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Builder
        func tabBuilder(title: String, targetIndex: Int32) {
            Column() {
                Text(title).fontColor(0x1698CE)
            }
            .width(100.percent)
            .height(50)
            .justifyContent(FlexAlign.Center)
        }
        
        @Component
        class CangjieTestComponent2 {
            var currentIndex: Int32 = 0
            var controller: TabsController = TabsController()
        
            public func build() {
                Column {
                    Tabs(barPosition: BarPosition.End, controller: this.controller, index: this.currentIndex) {
                        TabContent() {
                            Column() {
                                Text('内容')
                            }
                            .width(100.percent)
                            .height(100.percent)
                            .backgroundColor(0x00CB87)
                            .justifyContent(FlexAlign.Center)
                        }.tabBar({=> bind(tabBuilder, this)('首页', 0)})
                    }.width(100.percent)
                }
            }
        }

使用局部的@Builder修饰的方法传入() -> Unit参数类型。
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        
        @Component
        class CangjieTestComponent3 {
            var currentIndex: Int32 = 0
            var controller: TabsController = TabsController()
        
            @Builder
            func tabBuilder(title: String, targetIndex: Int32) {
                Column() {
                    Text(title).fontColor(0x1698CE)
                }
                .width(100.percent)
                .height(50)
                .justifyContent(FlexAlign.Center)
            }
        
            public func build() {
                Column {
                    Tabs(barPosition: BarPosition.End, controller: this.controller, index: this.currentIndex) {
                        TabContent() {
                            Column() {
                                Text('内容')
                            }
                            .width(100.percent)
                            .height(100.percent)
                            .backgroundColor(0x00CB87)
                            .justifyContent(FlexAlign.Center)
                        }.tabBar({=> bind(tabBuilder, this)('首页', 0)})
                    }.width(100.percent)
                }
            }
        }

  * 示例二：组件的构造函数支持传入() -> Unit类型

例如：MenuItem组件的构造函数支持传入() -> Unit类型，用于自定义UI描述。

使用局部的@Builder修饰的方法传入构造函数中的() -> Unit参数。
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        import ohos.resource.__GenerateResource__
        
        @Component
        class CangjieTestComponent4 {
            @Builder
            func SubMenu() {
                Menu() {
                    MenuItem(startIcon: " ", content: "复制", endIcon: " ", labelInfo: "ctrl+c").id("Test_Menu_07")
                    MenuItem(startIcon: " ", content: "粘贴", endIcon: " ", labelInfo: "ctrl+v").id("Test_Menu_08")
                }
            }
        
            @Builder
            func MyMenu() {
                Menu() {
                    MenuItem(
                        startIcon: @r(app.media.foreground),
                        content: @r(app.string.app_name),
                        endIcon: @r(app.media.foreground),
                        labelInfo: @r(app.string.app_name),
                        builder: bind(this.SubMenu, this)
                    )
                }
            }
        
            func build() {
                Row() {
                    Column() {
                        Button("click to show menu")
                            .id("showmenu")
                            .fontSize(50)
                            .fontWeight(FontWeight.Bold)
                    }
                    .bindMenu(builder: this.MyMenu)
                    .width(100.percent)
                }.height(100.percent)
            }
        }

使用全局的@Builder修饰的方法传入构造函数中的() -> Unit参数，与局部声明的使用方式无明显差异。




#### bind函数禁用场景示例

  * 示例一：bindMenu
        
        @Builder
        func areaMenu() {}
        
        func build() {
            Column() {
                Text(area).bindMenu(builder: areaMenu) // Ok
                Text(area).bindMenu(builder: bind(areaMenu, this)) // Error
            }
        }

  * 示例二：bindMenu
        
        @Builder
        func menuBuilder() {}
        
        func build() {
            Column() {
                Text(area).bindContextMenu(builder: menuBuilder, responseType: ResponseType.LongPress) // Ok
                Text(area).bindContextMenu(builder: bind(menuBuilder, this), responseType: ResponseType.LongPress) // Error
            }
        }




bindContentCover，bindSheet，description的使用方式与上述示例中的规格一致。
