---
name: cangjie-faqs/06-navigation
title: 仓颉如何实现页面导航与路由
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-navigation
nodePath: FAQ / UI开发 / 仓颉如何实现页面导航与路由
---

# 仓颉如何实现页面导航与路由

仓颉语言通过Navigation组件和NavPathStack实现页面导航与路由管理，支持页面跳转、返回和参数传递。

#### Navigation基本用法
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class HomeNavigationDemo {
        public func build() {
            Navigation {
                Column {
                    Text("Home Page").fontSize(24)
                }
            }.title("Navigation Demo")
        }
    }

**UI效果** ：显示带有标题栏"Navigation Demo"的导航容器，内容区域显示"Home Page"文本。

#### 页面跳转

使用NavPathStack管理页面栈，子页面需要使用NavDestination组件，推荐通过@Provide/@Consume共享NavPathStack：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class SecondPageDemo {
        @Consume
        var pathStack: NavPathStack
    
        public func build() {
            NavDestination() {
                Column {
                    Text("Second Page")
                        .fontSize(24)
                        .padding(20)
                    Button("Go Back").onClick({
                        evt => this
                            .pathStack
                            .pop()
                    })
                }
            }.title("Second Page")
        }
    }
    
    @Component
    public class NavigationPageDemo {
        @Provide
        var navPathStack: NavPathStack = NavPathStack()
    
        public func build() {
            Navigation(this.navPathStack) {
                Column {
                    Text("Home").fontSize(20)
                    Button("Go to Second Page").onClick({
                        evt => this
                            .navPathStack
                            .pushPath(NavPathInfo(name: "SecondPage", param: ""))
                    })
                }.padding(20)
            }.navDestination(bind(this.destBuilder, this))
        }
    
        @Builder
        public func destBuilder(name: String, param: Any): Unit {
            if (name == "SecondPage") {
                SecondPageDemo()
            }
        }
    }

**UI效果** ：首页显示"Home"文本和按钮，点击按钮跳转到"Second Page"，点击"Go Back"返回首页。

#### 带参数跳转

当前Navigation不支持通过NavPathInfo.param传递参数，应使用状态变量（如@Provide/@Consume）实现参数传递：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.Hilog
    
    @Component
    public class DetailPageDemo {
        @Consume
        var pathStack: NavPathStack
        @Consume
        var currentItemId: String
    
        public func aboutToAppear(): Unit {
            Hilog.info(0, "Cangjie Test", "DetailPage itemId: ${this.currentItemId}")
        }
    
        public func build() {
            NavDestination() {
                Column {
                    Text("Item ID: ${this.currentItemId}")
                        .fontSize(20)
                        .padding(20)
                    Button("Go Back").onClick({
                        evt => this
                            .pathStack
                            .pop()
                    })
                }
            }.title("Detail Page")
        }
    }
    
    @Component
    public class ParamNavigationDemo {
        @Provide
        var navPathStack: NavPathStack = NavPathStack()
        @Provide
        var currentItemId: String = ""
    
        public func build() {
            Navigation(this.navPathStack) {
                Column {
                    Button("View Item 1").onClick(
                        {
                            evt =>
                                this.currentItemId = "item-001"
                                this
                                    .navPathStack
                                    .pushPath(NavPathInfo(name: "DetailPage", param: ""))
                        }
                    )
                    Button("View Item 2").onClick(
                        {
                            evt =>
                                this.currentItemId = "item-002"
                                this
                                    .navPathStack
                                    .pushPath(NavPathInfo(name: "DetailPage", param: ""))
                        }
                    )
                }.padding(20)
            }.navDestination(bind(this.destBuilder, this))
        }
    
        @Builder
        public func destBuilder(name: String, param: Any): Unit {
            if (name == "DetailPage") {
                DetailPageDemo()
            }
        }
    }

**UI效果** ：点击"View Item 1"跳转到详情页显示"Item ID: item-001"，点击"View Item 2"显示"Item ID: item-002"，通过@Provide/@Consume状态变量实现参数传递。

#### 页面栈操作

方法 | 说明  
---|---  
pushPath(NavPathInfo) | 跳转到新页面  
pop() | 返回上一页  
popToName(name) | 返回到指定名称页面  
clear() | 清空页面栈  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/wy-_maLiRcyXo_xGEG2Z5g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085444Z&HW-CC-Expire=86400&HW-CC-Sign=A4AC4ADE05D989D8CC47EF7FC7AA9667163D2511E9AAE9CB825D49EF7B883E9C)

  1. NavPathStack是页面栈管理器，支持pushPath、pop、clear等操作。
  2. 须通过navDestination注册各页面的构建函数。
  3. 子页面需要使用NavDestination组件包裹，可通过@Consume获取NavPathStack。
  4. 页面跳转和返回操作须在UI线程上执行。
  5. 当前Navigation不支持通过NavPathInfo.param传递参数，应使用@Provide/@Consume等状态变量实现参数传递。



更多导航与路由的使用方法，详情请参见[Navigation](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-navigation-navigation)。
