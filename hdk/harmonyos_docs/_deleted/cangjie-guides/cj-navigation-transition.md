---
name: cangjie-guides/cj-navigation-transition
title: 导航转场
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-navigation-transition
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 设置组件导航和页面路由 / 导航转场
---

# 导航转场

导航转场是页面的路由转场方式，也就是一个界面消失，另外一个界面出现的动画效果。

导航转场推荐使用[Navigation](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navigation)组件实现，可搭配[NavDestination](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-navigation-switching-navdestination)组件实现导航功能。

#### 创建导航页

实现步骤为：

  1. 使用Navigation创建导航主页，并创建路由栈NavPathStack以此来实现不同页面之间的跳转。

  2. 在Navigation中增加List组件，来定义导航主页中不同的一级界面。

  3. 在List内的组件添加onClick方法，并在其中使用路由栈NavPathStack的pushPath方法，使组件可以在点击之后从当前页面跳转到输入参数name在路由表内对应的页面。



    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import ohos.arkui.state_management.*
    
    @Builder
    func pageMap(name: String, param: Any) {
        if (name == "PageOne") {
            PageOne()
        } else {
            PageTwo()
        }
    }
    
    @Entry
    @Component
    class EntryView {
        @Provide
        var pathInfos: NavPathStack = NavPathStack()
        @State
        var listArray1: Array<String> = ['WLAN', 'Bluetooth']
        @State
        var listArray2: Array<String> = ['Personal Hotspot', 'Connect & Share']
        func build() {
            Column() {
                Navigation(this.pathInfos) {
                    // 通过List定义导航的一级界面
                    Search(placeholder: '输入关键字搜索')
                        .width(90.percent)
                        .height(40)
                        .margin(top: 40, bottom: 15)
    
                    List(initialIndex: 0) {
                        ForEach(this.listArray1, itemGeneratorFunc: {
                            item: String, _: Int64 => ListItem() {
                                Row() {
                                    Row() {
                                        Text('${item.split("")[0]}')
                                            .fontColor(Color.White)
                                            .fontSize(14)
                                            .fontWeight(FontWeight.Bold)
                                    }
                                        .width(30)
                                        .height(30)
                                        .backgroundColor(Color.Gray)
                                        .margin(right: 20)
                                        .borderRadius(20)
                                        .justifyContent(FlexAlign.Center)
    
                                    Column() {
                                        Text(item)
                                            .fontSize(16)
                                            .margin(5)
                                    }.alignItems(HorizontalAlign.Start)
    
                                    Blank()
    
                                    Row()
                                        .width(12)
                                        .height(12)
                                        .margin(15)
                                        .border(width: 2.px, color: 0xCCCCCC)
                                }
                                    .borderRadius(15)
                                    .shadow(radius: 100.0, color: 0xededed)
                                    .width(90.percent)
                                    .alignItems(VerticalAlign.Center)
                                    .padding(left: 15, top: 15, bottom: 15)
                                    .backgroundColor(Color.White)
                            }
                                .width(100.percent)
                                .margin(top: 12)
                                .onClick({
                                    evt => this
                                        .pathInfos
                                        .pushPath(NavPathInfo(name: 'PageOne', param: '详情页面参数')) // 将name指定的NaviDestination页面信息入栈,传递的参数为param
                                })
                        })
                        ForEach(this.listArray2, itemGeneratorFunc: {
                            item: String, _: Int64 => ListItem() {
                                Row() {
                                    Row() {
                                        Text('${item.split("")[0]}')
                                            .fontColor(Color.White)
                                            .fontSize(14)
                                            .fontWeight(FontWeight.Bold)
                                    }
                                        .width(30)
                                        .height(30)
                                        .backgroundColor(Color.Gray)
                                        .margin(right: 20)
                                        .borderRadius(20)
                                        .justifyContent(FlexAlign.Center)
    
                                    Column() {
                                        Text(item)
                                            .fontSize(16)
                                            .margin(5)
                                    }.alignItems(HorizontalAlign.Start)
                                    Blank()
                                    Row()
                                        .width(12)
                                        .height(12)
                                        .margin(15)
                                        .border(width: 2.px, color: 0xCCCCCC)
                                }
                                    .borderRadius(15)
                                    .shadow(radius: 100.0, color: 0xededed)
                                    .width(90.percent)
                                    .alignItems(VerticalAlign.Center)
                                    .padding(left: 15, top: 15, bottom: 15)
                                    .backgroundColor(Color.White)
                            }
                            .width(100.percent)
                            .margin(top: 12)
                            .onClick({ evt =>
                                this.pathInfos.pushPath(NavPathInfo(name: 'PageTwo', param: '详情页面参数' )) // 将name指定的NaviDestination页面信息入栈,传递的参数为param
                            })
                        })
                    }
                        .listDirection(Axis.Vertical)
                        .edgeEffect(EdgeEffect.Spring)
                        .sticky(StickyStyle.Header)
                        .chainAnimation(false)
                        .width(100.percent)
                        .height(100.percent)
                        .padding(top: 10)
                }
                    .navDestination(bind<String, Any>(pageMap, this))
                    .width(100.percent)
                    .height(100.percent)
            }
                .size(width: 100.percent, height: 100.percent)
                .backgroundColor(Color.White)
        }
    }

#### 创建导航子页

导航子页1实现步骤为：

  1. 使用NavDestination，来创建导航子页PageOne。

  2. 创建路由栈NavPathStack并在onReady时进行初始化，获取当前所在的页面栈，以此来实现不同页面之间的跳转。

  3. 在子页面内的组件添加onClick，并在其中使用路由栈NavPathStack的pop方法，使组件可以在点击之后弹出路由栈栈顶元素实现页面的返回。



    
    
    @Component
    class PageOne {
        var pathInfos1: NavPathStack = NavPathStack()
        var name: String = ''
        @State
        var value: String = ''
    
        func build() {
            NavDestination() {
                Column() {
                    Text('${this.name}设置页面')
                        .width(100.percent)
                        .fontSize(20)
                        .fontColor(0x333333)
                        .textAlign(TextAlign.Center)
                        .padding(top: 30)
    
                    Text('${(this.value)}')
                        .width(100.percent)
                        .fontSize(18)
                        .fontColor(0x666666)
                        .textAlign(TextAlign.Center)
                        .padding(top: 45)
                    Button('返回')
                    .width(50.percent)
                    .height(40)
                    .margin( top: 50 )
                    .onClick({e =>
                      // 弹出路由栈栈顶元素，返回上个页面
                      this.pathInfos1.pop()
                    })
                }
                .size( width: 100.percent, height: 100.percent )
            }
                .onReady({
                    ctx: NavDestinationContext =>
                    // NavDestinationContext获取当前所在的页面栈
                    this.pathInfos1 = ctx.pathStack
                })
                .padding(top: 40)
        }
    }

导航子页2实现步骤为：

  1. 使用NavDestination，来创建导航子页PageTwo。

  2. 创建路由栈NavPathStack并在onReady时进行初始化，获取当前所在的页面栈，以此来实现不同页面之间的跳转。

  3. 在子页面内的组件添加onClick，并在其中使用路由栈NavPathStack的pushPath方法，使组件可以在点击之后从当前页面跳转到输入参数name在路由表内对应的页面。



    
    
    @Component
    class PageTwo {
        var pathInfos2: NavPathStack = NavPathStack()
        var name: String = ''
        private var listArray: Array<String> = ['Projection', 'Print', 'VPN', 'Private DNS', 'NFC']
    
        func build() {
            NavDestination() {
                Column() {
                    List(initialIndex: 0) {
                        ForEach(this.listArray, itemGeneratorFunc: {
                            item: String, _: Int64 => ListItem() {
                                Row() {
                                    Row() {
                                        Text('${item.split("")[0]}')
                                            .fontColor(Color.White)
                                            .fontSize(14)
                                            .fontWeight(FontWeight.Bold)
                                    }
                                        .width(30)
                                        .height(30)
                                        .backgroundColor(Color.Gray)
                                        .margin(right: 20)
                                        .borderRadius(20)
                                        .justifyContent(FlexAlign.Center)
    
                                    Column() {
                                        Text(item)
                                            .fontSize(16)
                                            .margin(bottom: 5)
                                    }.alignItems(HorizontalAlign.Start)
    
                                    Blank()
    
                                    Row()
                                        .width(12)
                                        .height(12)
                                        .margin(right: 15)
                                        .border(width: 2.px, color: 0xcccccc)
                                }
                                    .borderRadius(15)
                                    .shadow(radius: 100.0, color: 0xededed)
                                    .width(100.percent)
                                    .alignItems(VerticalAlign.Center)
                                    .padding(left: 15, top: 15, bottom: 15)
                                    .backgroundColor(Color.White)
                            }
                            .onClick({ evt =>
                                this.pathInfos2.pushPath(NavPathInfo(name: 'PageOne', param: '详情页面参数'))
                            })
                            .margin(top: 12, left: 20)
                            .width(90.percent)
                        })
                    }
                        .listDirection(Axis.Vertical)
                        .edgeEffect(EdgeEffect.Spring)
                        .sticky(StickyStyle.Header)
                        .width(100.percent)
                        .height(100.percent)
                }.size(width: 100.percent, height: 100.percent)
            }
                .onReady({
                    ctx: NavDestinationContext =>
                    // NavDestinationContext获取当前所在的页面栈
                    this.pathInfos2 = ctx.pathStack
                })
                .padding(top: 40)
                .width(100.percent)
                .height(100.percent)
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/XiNUeI6aTeqz6W8aKS8D4w/zh-cn_image_0000002701819280.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111559Z&HW-CC-Expire=86400&HW-CC-Sign=7950A2BDA630C56369CF40979E8C34490C4649053B0F0DDC701A28700641A64C)
