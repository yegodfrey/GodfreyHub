---
name: cangjie-guides/cj-create-custom-components
title: 创建自定义组件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-create-custom-components
nodePath: 应用框架 / ArkUI（方舟UI框架） / UI开发（仓颉声明式开发范式） / 学习UI范式基本语法 / 自定义组件 / 创建自定义组件
---

# 创建自定义组件

在ArkUI中，UI显示的内容均为组件，由框架直接提供的称为系统组件，由开发者定义的称为自定义组件。在进行 UI 界面开发时，通常不是简单的将系统组件进行组合使用，而是需要考虑代码可复用性、业务逻辑与UI分离，后续版本演进等因素。因此，将UI和部分业务逻辑封装成自定义组件是不可或缺的能力。

自定义组件具有以下特点：

  * 可组合：允许开发者组合使用系统组件、及其属性和方法。

  * 可重用：自定义组件可以被其他组件重用，并作为不同的实例在不同的父组件或容器中使用。

  * 数据驱动UI更新：通过状态变量的改变，来驱动UI的刷新。




#### 自定义组件的基本用法

以下示例展示了自定义组件的基本用法。
    
    
    @Component
    class HelloComponent {
        @State
        var message: String = "Hello, World!"
        func build() {
            // HelloComponent自定义组件组合系统组件Row和Text
            Row() {
                Text(this.message)
                    // 状态变量message的改变驱动UI刷新，UI从"Hello, World!"刷新为"Hello, Cangjie!"
                    .onClick({etv => this.message = "Hello, Cangjie!"})
            }
        }
    }

HelloComponent可以在其他自定义组件中的build()函数中多次创建，实现自定义组件的重用。
    
    
    @Entry
    @Component
    class EntryView {
        func build() {
            Column() {
                Text("ArkUI message")
                HelloComponent(message: "Hello, World!")
                Divider()
                HelloComponent(message: "你好，世界!")
            }
        }
    }

要完全理解上面的示例，需要了解自定义组件的以下概念定义，本文将在后面的小节中介绍：

  * 自定义组件的基本结构

  * 成员函数/变量

  * 自定义组件的参数规定

  * build()函数

  * 自定义组件通用样式




#### 自定义组件的基本结构

#### [h2]class

自定义组件基于class实现，class + 自定义组件名 + {...}的组合构成自定义组件，不能有继承关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/50/v3/VrHoIUhqSHW6echZL8YhxQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111556Z&HW-CC-Expire=86400&HW-CC-Sign=05FF8692E8210C76475AEBAD1575CFE339B2FFA53B9C4CD2161477F3A7A3AD1D)

自定义组件名、类名、函数名不能和系统组件名相同。

#### [h2]@Component

@Component宏修饰的class为自定义组件，可以使用状态管理宏的能力。
    
    
    @Component
    class MyComponent {}

#### [h2]build()函数

build()函数用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。
    
    
    @Component
    class MyComponent {
        func build() {
        }
    }

#### [h2]@Entry

@Entry装饰的自定义组件将作为UI页面的入口。在单个UI页面中，最多可以使用@Entry装饰一个自定义组件。@Entry可以接受一个可选的[LocalStorage](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-localstorage)的参数。
    
    
    @Entry
    @Component
    class MyComponent {}

**EntryOptions**

名称 | 类型 | 必填 | 说明  
---|---|---|---  
storage | [LocalStorage](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-localstorage) | 否 | 页面级的UI状态存储。  
  
#### [h2]@Reusable

@Reusable装饰的自定义组件具备可复用能力。详细请参见：[@Reusable宏：组件复用](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-reusable#使用场景)。
    
    
    @Reusable
    @Component
    class MyComponent {}

#### 成员函数/变量

自定义组件除了必须要实现build()函数外，还可以实现其他成员函数，成员函数具有以下约束：

  * 自定义组件的成员函数为私有的，且不建议声明成静态函数。



自定义组件可以包含成员变量，成员变量具有以下约束：

  * 自定义组件的成员变量为私有的，且不建议声明成静态变量。

  * 自定义组件的成员变量本地初始化有些是可选的，有些是必选的。具体是否需要本地初始化，是否需要从父组件通过参数传递初始化子组件的成员变量，请参见[状态管理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-state-management-overview)。




#### 自定义组件的参数规定

从上文的示例中了解到，可以在build方法里创建自定义组件，在创建自定义组件的过程中，根据宏的规则来初始化自定义组件的参数。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    class MyComponent {
        private var countDownFrom: Int64 = 0
        private var color: Color = Color.Blue
        func build() {
        }
    }
    
    @Entry
    @Component
    class EntryView {
        private var someColor: Color = Color.Red
        func build() {
            Column() {
                // 创建MyComponent实例，并将创建MyComponent成员变量countDownFrom初始化为10，将成员变量color初始化为this.someColor
                MyComponent(countDownFrom: 10, color: this.someColor)
            }
        }
    }

下面的示例代码将父组件中的函数传递给子组件，并在子组件中调用。
    
    
    package ohos_app_cangjie_entry
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Entry
    @Component
    class EntryView {
        @State
        var cnt: Int64 = 0
        func submit(): UInt {
            this.cnt++
            return 0
        }
        func build() {
            Column() {
                Text("${this.cnt}")
                Child(Childsubmit: this.submit)
            }
        }
    }
    
    @Component
    class Child {
        let Childsubmit: () -> UInt
        func build() {
            Row() {
                Button("add")
                    .width(80)
                    .onClick({etv => this.Childsubmit()})
            }
        }
    }

#### build()函数

所有声明在build()函数的语句统称为UI描述，需要遵循以下规则：

  * @Entry装饰的自定义组件，其build()函数下的根节点唯一且必要，且必须为容器组件，其中ForEach禁止作为根节点。

  * @Component装饰的自定义组件，其build()函数下的根节点唯一且必要，可以为非容器组件，其中ForEach禁止作为根节点。
        
        package ohos_app_cangjie_entry
        
        import kit.ArkUI.*
        import ohos.arkui.state_macro_manage.*
        import kit.LocalizationKit.*
        import ohos.resource.__GenerateResource__
        
        @Entry
        @Component
        class EntryView {
            func build() {
                // 根节点唯一且必要，必须为容器组件
                Row() {
                    ChildComponent()
                }
            }
        }
        
        @Component
        class ChildComponent {
            func build() {
                // 根节点唯一且必要，可为非容器组件
                Image(@r(app.media.startIcon))
            }
        }

  * 不允许声明本地变量，反例如下。
        
        func build() {
            let num: Int64 = 0
        }

  * 不允许在UI描述里直接使用Hilog.info，但允许在方法或者函数里使用，反例如下。
        
        func build() {
            //反例：不允许Hilog.info
            Hilog.info(0, "HilogCj", "print debug log")
        }

  * 不允许创建本地的作用域，反例如下。
        
        func build() {
            // 反例：不允许本地作用域
            {
                // ...
            }
        }

  * 不允许调用没有用@Builder装饰的方法，允许系统组件的参数是CJ方法的返回值。
        
        @Component
        class EntryView {
            func doSomeCalculations() {
            }
            func calcTextValue(): String {
                return "Hello World"
            }
            @Builder
            func doSomeRender() {
                Text("Hello World")
            }
            func build() {
                Column() {
                    // 反例：不能调用没有用@Builder装饰的方法
                    this.doSomeCalculations()
                    // 正例：可以调用
                    this.doSomeRender()
                    // 正例：参数可以为调用CJ方法的返回值
                    Text(this.calcTextValue())
                }
            }
        }

  * 不允许使用match语法，如果需要使用条件判断，请使用[if](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-ifelse)。示例如下。
        
        func build() {
            Column() {
                // 反例：不允许使用match语法
                match (expression) {
                    case 0 => Text("...")
                    case 1 => Text("...")
                    case _ => Text("...")
                }
                // 正例：使用if
                if (expression == 1) {
                    Text("...")
                } else if (expression == 2) {
                    Button("...")
                } else {
                    Text("...")
                }
            }
        }

  * 不允许直接改变状态变量，反例如下。详细分析见[@State常见问题：不允许在build里改状态变量](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-macro-state#不允许在build里改状态变量)。
        
        @Component
        class EntryView {
            @State
            var textColor: Color = Color(0xFFFF00)
            @State
            var columnColor: Color = Color.Green
            @State
            var count: Int64 = 1
            func build() {
                Column() {
                    // 不允许直接在Text组件内改变count的值
                    Text("${this.count++}")
                        .width(50)
                        .height(50)
                        .fontColor(this.textColor)
                        .onClick({etv => this.columnColor = Color.Red})
                    Button("change textColor").onClick({etv => this.textColor = Color.Blue})
                }.backgroundColor(this.columnColor)
            }
        }




#### 自定义组件通用样式

自定义组件通过“.”链式调用设置通用样式。
    
    
    @Component
    class ChildComponent {
        func build() {
            Button("Hello World")
        }
    }
    
    @Entry
    @Component
    class MyComponent {
        func build() {
            Row() {
                ChildComponent()
                    .width(200)
                    .height(300)
                    .backgroundColor(Color.Red)
            }
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/lOHcGOKUS1KFNUOK2gxJtw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111556Z&HW-CC-Expire=86400&HW-CC-Sign=A56F397F74BD8445D19B2B7315CAD36F5938227B3BE92055CCDEA24DAB456FF4)

ArkUI给自定义组件设置样式时，相当于给ChildComponent套了一个不可见的容器组件，这些样式是设置在容器组件上，而非直接设置给ChildComponent的Button组件。渲染结果显示，背景颜色红色并没有直接设置到Button上，而是设置在Button所在的不可见容器组件上。
