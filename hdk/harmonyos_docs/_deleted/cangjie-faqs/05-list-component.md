---
name: cangjie-faqs/05-list-component
title: 仓颉如何使用List组件展示列表数据
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/05-list-component
nodePath: FAQ / UI开发 / 仓颉如何使用List组件展示列表数据
---

# 仓颉如何使用List组件展示列表数据

仓颉语言通过List组件和ListItem组件展示可滚动的列表数据，支持垂直和水平布局。

#### 基本用法
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class SimpleListDemo {
        var items: Array<String> = [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5",
            "Item 6",
            "Item 7",
            "Item 8",
            "Item 9",
            "Item 10",
            "Item 11",
            "Item 12",
            "Item 13",
            "Item 14",
            "Item 15"
        ]
    
        func build() {
            List {
                ForEach(this.items, itemGenerator: {
                    item: String, _: Int64 => ListItem {
                        Text(item)
                            .fontSize(20)
                            .padding(10)
                    }
                }, keyGenerator: {item: String, _: Int64 => item})
            }
            .width(100.percent)
            .height(300)
        }
    }

**UI效果** ：显示垂直滚动的列表，包含15个文本项，每项高度自适应，整体高度300像素，内容超出后可上下滚动。

#### 设置列表方向

通过listDirection属性设置列表滚动方向：
    
    
    @Component
    public class HorizontalListDemo {
        func build() {
            List {
                ForEach(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], itemGenerator: {
                    item: String, _: Int64 => ListItem {
                        Text(item)
                            .fontSize(18)
                            .width(60)
                            .height(60)
                            .textAlign(TextAlign.Center)
                    }
                }, keyGenerator: {item: String, _: Int64 => item})
            }
            .listDirection(Axis.Horizontal)
            .width(100.percent)
            .height(80)
        }
    }

**UI效果** ：水平滚动的列表，包含10个文本项，每个文本项宽高固定60像素，整体高度80像素横向滚动。

#### 设置分割线
    
    
    @Component
    public class ListWithDivider {
        func build() {
            List {
                ForEach(["Apple", "Banana", "Cherry"], itemGenerator: {
                    item: String, _: Int64 => ListItem {
                        Text(item)
                            .fontSize(20)
                            .padding(10)
                    }
                }, keyGenerator: {item: String, _: Int64 => item})
            }.divider(ListDividerOptions(strokeWidth: 1, color: Color.Gray, startMargin: 10, endMargin: 10))
        }
    }

**UI效果** ：列表项之间显示灰色分割线，分割线左右各留10像素边距。

#### 列表项点击事件
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.Hilog
    
    @Component
    public class ClickableListDemo {
        func build() {
            List {
                ForEach(["Option A", "Option B", "Option C"], itemGenerator: {
                    item: String, _: Int64 => ListItem {
                        Text(item)
                            .fontSize(20)
                            .padding(15)
                    }.onClick({
                        evt => Hilog.info(0, "Cangjie Test", "clicked: ${item}")
                    })
                }, keyGenerator: {item: String, _: Int64 => item})
            }
            .width(100.percent)
            .height(200)
        }
    }

**UI效果** ：点击任意列表项，日志输出对应项名称，如点击"Option B"输出"clicked: Option B"。

#### 下拉刷新与上拉加载
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.Hilog
    
    @Component
    public class RefreshLoadListDemo {
        @State
        var items: Array<String> = [
            "Data 1",
            "Data 2",
            "Data 3",
            "Data 4",
            "Data 5",
            "Data 6",
            "Data 7",
            "Data 8",
            "Data 9",
            "Data 10",
            "Data 11",
            "Data 12",
            "Data 13",
            "Data 14",
            "Data 15"
        ]
    
        func build() {
            List {
                ForEach(this.items, itemGenerator: {
                    item: String, _: Int64 => ListItem {
                        Text(item)
                            .fontSize(20)
                            .padding(10)
                    }
                }, keyGenerator: {item: String, _: Int64 => item})
            }
            .width(100.percent)
            .height(300)
            .onReachStart({
                => Hilog.info(0, "Cangjie Test", "reach start - refresh triggered")
            })
            .onReachEnd({
                => Hilog.info(0, "Cangjie Test", "reach end - load more triggered")
            })
        }
    }

**UI效果** ：滚动到列表顶部触发"refresh triggered"，滚动到底部触发"load more triggered"，可用于实现下拉刷新和上拉加载更多功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/WphTgB-wSi6rcSMe6tMcHg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120411Z&HW-CC-Expire=86400&HW-CC-Sign=044E47AEEB59FA2ED7ACFAC29ED4A252B60B1BE0241237BBB18BF94AFC4702F9)

  1. 每个列表项须使用ListItem组件包裹。
  2. 对于大数据量列表，推荐使用LazyForEach代替ForEach实现按需加载，提升性能。
  3. 使用ForEach时须提供keyGenerator参数生成唯一键值，确保列表正确更新。
  4. divider属性使用ListDividerOptions设置分割线样式。
  5. onReachStart和onReachEnd回调须使用Lambda语法（{ => ... }）。



更多List组件的使用方法，详情请参见[创建列表](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-layout-development-create-list)。
