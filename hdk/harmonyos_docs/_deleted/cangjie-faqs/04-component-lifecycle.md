---
name: cangjie-faqs/04-component-lifecycle
title: 仓颉自定义组件的生命周期是怎样的
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/04-component-lifecycle
nodePath: FAQ / UI开发 / 仓颉自定义组件的生命周期是怎样的
---

# 仓颉自定义组件的生命周期是怎样的

仓颉语言的自定义组件具有完整的生命周期回调机制，开发者可以在组件的不同阶段执行相应逻辑。

#### 生命周期回调

回调函数 | 调用时机 | 用途  
---|---|---  
aboutToAppear() | 组件即将出现，在build之前调用 | 初始化数据、订阅事件  
build() | 组件构建UI | 定义组件界面  
onDidBuild() | 组件构建完成后调用 | 获取组件尺寸等构建后信息  
aboutToDisappear() | 组件即将销毁 | 清理资源、取消订阅  
onPageShow() | 页面显示时调用 | 页面级事件处理  
onPageHide() | 页面隐藏时调用 | 暂停操作  
onBackPress() | 用户按下返回键时调用 | 自定义返回逻辑  
  
#### 生命周期流程

组件创建时依次调用：aboutToAppear → build → onDidBuild

组件销毁时调用：aboutToDisappear

#### 示例代码
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.Hilog
    import std.time.*
    
    @Component
    public class LifecycleDemoPage {
        @State
        var message: String = "Loading..."
    
        func aboutToAppear(): Unit {
            Hilog.info(0, "Cangjie Test", "aboutToAppear called")
            spawn {
                sleep(Duration.second * 2)
                launch({=> this.message = "Loaded!"})
            }
        }
    
        func onDidBuild(): Unit {
            Hilog.info(0, "Cangjie Test", "onDidBuild called")
        }
    
        func aboutToDisappear(): Unit {
            Hilog.info(0, "Cangjie Test", "aboutToDisappear called")
        }
    
        func build() {
            Column {
                Text(this.message)
                    .fontSize(20)
                    .padding(20)
            }
        }
    }

**UI效果** ：组件创建时显示"Loading..."，约2秒后自动变为"Loaded!"，模拟异步数据加载场景。日志依次输出：aboutToAppear called → onDidBuild called →（2秒后）→ Loaded!。

#### 组件复用回调

当使用@Reusable宏标记组件时，还有以下复用相关回调：

回调函数 | 调用时机  
---|---  
aboutToReuse(params) | 组件从缓存中复用时  
aboutToRecycle() | 组件移入缓存时  
      
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.Hilog
    
    @Reusable
    @Component
    public class ReusableItemDemo {
        @State
        var data: String = ""
    
        func aboutToReuse(params: String): Unit {
            this.data = params
            Hilog.info(0, "Cangjie Test", "aboutToReuse: ${params}")
        }
    
        func aboutToRecycle(): Unit {
            Hilog.info(0, "Cangjie Test", "aboutToRecycle")
        }
    
        func build() {
            Text(this.data).fontSize(18)
        }
    }

**UI效果** ：列表滚动时组件复用，日志输出aboutToReuse和aboutToRecycle回调。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/Iq84zIYER-CbZzlKHolQ4Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120411Z&HW-CC-Expire=86400&HW-CC-Sign=717F3CE6D494DF1D81393CCDC5D3E27C47C406358DAAF56BE5DA14263261EAE6)

  1. 避免在aboutToAppear中修改状态变量后立即依赖其更新，状态更新是异步的。
  2. 避免在aboutToDisappear中执行耗时操作。
  3. @Reusable组件可减少创建销毁开销，适合列表场景。
  4. 被@Component修饰的类若需跨包导入，须使用public修饰符。



更多自定义组件生命周期的使用方法，详情请参见[自定义组件的生命周期](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-custom-component-lifecycle)。
