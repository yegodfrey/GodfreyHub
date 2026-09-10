---
name: cangjie-faqs/09-foreach
title: 仓颉如何使用ForEach循环渲染
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/09-foreach
nodePath: FAQ / UI开发 / 仓颉如何使用ForEach循环渲染
---

# 仓颉如何使用ForEach循环渲染

仓颉语言通过ForEach组件实现循环渲染，根据数据源数组动态生成UI组件。ForEach须提供keyGenerator参数生成唯一键值，确保列表正确更新。

#### 基本用法
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class ForEachBasicDemo {
        public func build() {
            Column {
                ForEach(["Apple", "Banana", "Cherry"], itemGenerator: {
                    item: String, _: Int64 => Text(item).fontSize(20).padding(10)
                }, keyGenerator: {item: String, _: Int64 => item})
            }
        }
    }

**UI效果** ：显示三个文本项"Apple"、"Banana"、"Cherry"，每项字体大小20，相邻组件间距20像素。

#### 使用索引

itemGenerator可同时接收元素和索引，keyGenerator须为每个项生成唯一键值以确保正确更新：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class ForEachIndexDemo {
        public func build() {
            Column {
                ForEach(["First", "Second", "Third"], itemGenerator: {
                    item: String, index: Int64 => Text("${index}: ${item}").fontSize(18).padding(8)
                }, keyGenerator: {item: String, _: Int64 => item})
            }
        }
    }

**UI效果** ：显示"0: First"、"1: Second"、"2: Third"，索引从0开始。

#### 动态更新数据源

当@State修饰的数据源发生变化时，ForEach会自动重新渲染：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class DynamicForEachDemo {
        @State
        var items: Array<String> = ["Item 1", "Item 2", "Item 3"]
    
        public func build() {
            Column {
                ForEach(this.items, itemGenerator: {
                    item: String, _: Int64 => Text(item).fontSize(20).padding(5)
                }, keyGenerator: {item: String, _: Int64 => item})
    
                Row {
                    Button("Add").onClick({
                        evt => this.items = this.items.concat(["Item ${this.items.size + 1}"])
                    })
                    Button("Remove Last").onClick({
                        evt => if (this.items.size > 0) {
                            this.items = this.items[0..this.items.size - 1]
                        }
                    })
                }.margin(10)
            }.padding(20)
        }
    }

**UI效果** ：初始显示3个文本项，点击"Add"按钮新增一项，点击"Remove Last"按钮删除最后一项，列表实时更新。

#### 使用对象数组
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    public class FruitData {
        public var id: String
        public var name: String
        public var price: Float32
    
        public init(id!: String, name!: String, price!: Float32) {
            this.id = id
            this.name = name
            this.price = price
        }
    }
    
    @Component
    public class ForEachObjectDemo {
        @State
        var fruits: Array<FruitData> = [
            FruitData(id: "f1", name: "Apple", price: Float32(5.0)),
            FruitData(id: "f2", name: "Banana", price: Float32(3.0)),
            FruitData(id: "f3", name: "Cherry", price: Float32(8.0))
        ]
    
        public func build() {
            Column {
                ForEach(this.fruits, itemGenerator: {
                    fruit: FruitData, _: Int64 => Row {
                        Text(fruit.name).fontSize(18).width(100)
                        Text("¥${fruit.price}").fontSize(18)
                    }.padding(10)
                }, keyGenerator: {fruit: FruitData, _: Int64 => fruit.id})
            }
        }
    }

**UI效果** ：显示商品列表，每行显示商品名称和价格，使用对象的id作为唯一键值。

#### 键值生成规则

  1. keyGenerator为每个数组项生成唯一字符串键值
  2. 键值相同时，框架行为未定义，可能导致渲染异常
  3. 推荐使用数据项的唯一ID作为键值，避免使用数组索引



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/7EosbcGgQQKQ6OcxpVtBDg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120411Z&HW-CC-Expire=86400&HW-CC-Sign=ED0858C70C362E9C1FE2EFACC352B8A73B2C152884DE61F598258AEF27BC6EE3)

  1. 键值须保证唯一性，重复键值会导致组件创建异常。
  2. 不推荐在键值中使用索引（index），当数据源发生增删时可能导致渲染错乱。
  3. 对于大数据量列表，推荐使用LazyForEach实现按需加载。
  4. 在List等容器组件中使用ForEach时，不要与LazyForEach混用。



更多ForEach的使用方法，详情请参见[ForEach循环渲染](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-rendering-control-foreach)。
