---
name: cangjie-faqs/03-state-decorator
title: 仓颉开发UI时@State、@Prop、@Link等状态宏如何使用
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/03-state-decorator
nodePath: FAQ / UI开发 / 仓颉开发UI时@State、@Prop、@Link等状态宏如何使用
---

# 仓颉开发UI时@State、@Prop、@Link等状态宏如何使用

仓颉语言通过状态管理宏实现数据与UI的联动，当状态变量发生变化时，框架自动刷新关联的UI组件。

#### @State

@State装饰的变量为组件内状态，变化时触发组件重新渲染：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    class CounterDemo {
        @State
        var count: Int64 = 0
    
        func build() {
            Column {
                Text("count: ${this.count}").fontSize(20)
                Button("Add").onClick({evt => this.count += 1})
            }.padding(20)
        }
    }

调用示例：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class TestStateDecorator {
        func build() {
            Column {
                CounterDemo()
            }
            .width(100.percent)
            .height(100.percent)
        }
    }

**UI效果** ：显示一个计数器，初始值为0，点击"Add"按钮后计数增加，UI实时更新显示新值。

#### @Prop

@Prop装饰的变量从父组件单向同步数据，父组件修改会同步到子组件，但子组件修改不会影响父组件：
    
    
    @Component
    class ChildComponent {
        @Prop
        var title: String = ""
    
        func build() {
            Column {
                Text("子组件: ${this.title}").fontSize(18)
                Button("子组件修改").onClick({evt => this.title = "Child"})
            }
        }
    }
    
    @Component
    class ParentComponent {
        @State
        var message: String = "Hello"
    
        func build() {
            Column {
                Text("父组件: ${this.message}").fontSize(18)
                ChildComponent(title: this.message)
                Button("父组件修改").onClick({evt => this.message = "Parent"})
            }.padding(20)
        }
    }

调用示例：
    
    
    @Entry
    @Component
    class TestPropDecorator {
        func build() {
            ParentComponent()
        }
    }

**UI效果** ：

  * 初始状态：父组件显示"Hello"，子组件显示"Hello"
  * 点击"父组件修改"按钮：父组件变为"Parent"，子组件同步变为"Parent"
  * 点击"子组件修改"按钮：子组件变为"Child"，但父组件仍为"Parent"（子组件修改不影响父组件）



#### @Link

@Link装饰的变量与父组件双向同步，父子组件任一方修改都会同步到另一方：
    
    
    @Component
    class ChildLink {
        @Link
        var count: Int64
    
        func build() {
            Button("Child add").onClick({evt => this.count += 1})
        }
    }
    
    @Component
    class ParentLink {
        @State
        var count: Int64 = 0
    
        func build() {
            Column {
                Text("count: ${this.count}").fontSize(20)
                Button("Parent add").onClick({evt => this.count += 1})
                ChildLink(count: this.count)
            }.padding(20)
        }
    }

调用示例：
    
    
    @Entry
    @Component
    class TestLinkDecorator {
        func build() {
            ParentLink()
        }
    }

**UI效果** ：显示计数器，点击"Parent add"或"Child add"按钮都能增加计数，父子组件数据双向同步。

#### @Provide / @Consume

跨层级组件间双向同步状态，避免逐层传递，任一层级组件修改都会同步到其他组件：
    
    
    @Component
    class GrandChildConsume {
        @Consume
        var theme: String
    
        func build() {
            Column {
                Text("孙组件: ${this.theme}").fontSize(16)
                Button("孙组件切换").onClick({
                    evt => this.theme = if (this.theme == "dark") {
                        "light"
                    } else {
                        "dark"
                    }
                })
            }
        }
    }
    
    @Component
    class MiddleLayer {
        func build() {
            Column {
                GrandChildConsume()
            }
        }
    }
    
    @Component
    class ProvideDemo {
        @Provide
        var theme: String = "dark"
    
        func build() {
            Column {
                Text("顶层组件: ${this.theme}").fontSize(16)
                MiddleLayer()
                Button("顶层切换").onClick({
                    evt => this.theme = if (this.theme == "dark") {
                        "light"
                    } else {
                        "dark"
                    }
                })
            }.padding(20)
        }
    }

调用示例：
    
    
    @Entry
    @Component
    class TestProvideConsume {
        func build() {
            ProvideDemo()
        }
    }

**UI效果** ：

  * 初始状态：顶层组件显示"dark"，孙组件显示"dark"
  * 点击"顶层切换"按钮：顶层变为"light"，孙组件同步变为"light"
  * 点击"孙组件切换"按钮：孙组件变为"dark"，顶层同步变为"dark"（跨层级双向同步）



#### @Observed / @Publish

当状态变量为class类型时，@State只能观察到变量本身的赋值变化，无法观察到class内部属性的变化。使用@Observed修饰class定义，@Publish修饰class内部属性，可使属性变化触发UI刷新：
    
    
    @Observed
    class ModelData {
        @Publish
        public var value: String
    }
    
    @Component
    class ObservedDemo {
        @State
        var title: ModelData = ModelData(value: "Hello")
    
        func build() {
            Column {
                Text("${this.title.value}").fontSize(20)
                Button("Change").onClick({ evt => this.title.value = "World" })
            }.padding(20)
        }
    }

调用示例：
    
    
    @Entry
    @Component
    class TestObservedDecorator {
        func build() {
            ObservedDemo()
        }
    }

**UI效果** ：显示"Hello"，点击按钮后变为"World"，嵌套对象属性变化触发UI刷新。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/llWpGWNVRzmC85I3WiroJw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120408Z&HW-CC-Expire=86400&HW-CC-Sign=84044C819ED608C6674315F15AA4C36B71E49723E2829601DB882C6EBA4BAB43)

  1. 父组件向子组件传递@Link变量时直接传递，如ChildLink(count: this.count)。
  2. @Observed和@Publish变量名和变量别名相同时能关联。
  3. @Provide和@Consume须成对使用，名称相同才能关联。
  4. @Component宏应单独一行，与class分开写。



更多状态管理的使用方法，详情请参见[状态管理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-state-management-overview)。
