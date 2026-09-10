---
name: cangjie-faqs/01-ui-spawn-main
title: 异步任务执行完如何将数据同步到UI线程
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-ui-spawn-main
nodePath: FAQ / UI开发 / 异步任务执行完如何将数据同步到UI线程
---

# 异步任务执行完如何将数据同步到UI线程

仓颉开发HarmonyOS应用的过程中，代码逻辑主要分为两部分：UI相关逻辑代码和UI无关逻辑代码。UI相关逻辑代码必须运行在UI线程上，UI无关逻辑代码可以运行在其他非UI线程上。用仓颉spawn关键字开启的线程不保证运行在UI线程，如果其中有UI相关代码，容易引发应用卡顿和安全风险等问题。因此仓颉提供launch将UI相关的任务提交到UI线程。详情请参见[线程控制](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-appendix-thread)。

以下示例展示了如何在仓颉线程中使用launch向UI线程提交异步任务：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    class CangjieTestComponent1 {
        @State
        var msg: String = "Hello World"
    
        public func build() {
            Column {
                Text(this.msg)
                Button("Click to change Text").onClick {
                    => spawn {
                        sleep(Duration.second * 5)
                        launch({=> this.msg = "Hello Cangjie"})
                    }
                }
            }
        }
    }

调用CangjieTestComponent1组件，在模拟器运行工程，点击Click to change Text按钮等待五秒钟后，按钮上方文字Hello World变为Hello Cangjie
