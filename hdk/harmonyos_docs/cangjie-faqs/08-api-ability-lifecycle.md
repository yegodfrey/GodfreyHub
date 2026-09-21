---
name: cangjie-faqs/08-api-ability-lifecycle
title: 仓颉如何管理UIAbility生命周期
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/08-api-ability-lifecycle
nodePath: FAQ / HarmonyOS API / 仓颉如何管理UIAbility生命周期
---

# 仓颉如何管理UIAbility生命周期

仓颉语言开发HarmonyOS应用时，UIAbility是应用的基本单元，其生命周期管理直接影响应用的运行状态和用户体验。仓颉可以直接定义UIAbility类并实现生命周期回调。

#### UIAbility生命周期回调

回调 | 调用时机 | 用途  
---|---|---  
onCreate(want, launchParam) | Ability创建时 | 初始化应用全局资源  
onWindowStageCreate(windowStage) | 窗口阶段创建时 | 设置主界面内容  
onForeground() | Ability切到前台 | 申请系统资源  
onBackground() | Ability切到后台 | 释放不需要的资源  
onWindowStageDestroy() | 窗口阶段销毁时 | 清理窗口相关资源  
onDestroy() | Ability销毁时 | 释放全局资源  
onNewWant(want, launchParam) | singleton模式下再次启动 | 更新资源和数据  
  
#### 生命周期流程
    
    
    onCreate → onWindowStageCreate → onForeground
                                            ↓
                                   onBackground ←→ onForeground
                                            ↓
                                 onWindowStageDestroy → onDestroy

#### 实际实现示例

在main_ability.cj中定义MainAbility类并实现生命周期回调：
    
    
    package ohos_app_cangjie_entry
    
    import kit.PerformanceAnalysisKit.Hilog
    import kit.AbilityKit.{Want, UIAbility, LaunchParam, LaunchReason}
    import kit.ArkUI.WindowStage
    
    class MainAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            Hilog.info(0, "Cangjie Test", "onCreate: ${want.abilityName}")
            match (launchParam.launchReason) {
                case LaunchReason.StartAbility => Hilog.info(0, "Cangjie Test", "START_ABILITY")
                case _ => ()
            }
        }
    
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            Hilog.info(0, "Cangjie Test", "onWindowStageCreate")
            windowStage.loadContent("EntryView")
        }
    
        public override func onForeground(): Unit {
            Hilog.info(0, "Cangjie Test", "onForeground")
        }
    
        public override func onBackground(): Unit {
            Hilog.info(0, "Cangjie Test", "onBackground")
        }
    
        public override func onWindowStageDestroy(): Unit {
            Hilog.info(0, "Cangjie Test", "onWindowStageDestroy")
        }
    
        public override func onDestroy(): Unit {
            Hilog.info(0, "Cangjie Test", "onDestroy")
        }
    }

应用启动后，日志输出结果：
    
    
    onCreate: EntryAbility
    START_ABILITY
    onWindowStageCreate
    onForeground

应用退到后台后，日志输出结果：
    
    
    onBackground

应用销毁后，日志输出结果：
    
    
    onWindowStageDestroy
    onDestroy

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/W3Imd85URi2uLAapwTnzXw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085445Z&HW-CC-Expire=86400&HW-CC-Sign=D46B2AD0DC820297EEDA9CF9F16317F7FD9CCCD4270377CDDF2AF9D829B51862)

  1. UIAbility的生命周期回调在主线程上执行，避免执行耗时操作。
  2. onBackground中应释放不需要的资源以降低内存占用。
  3. windowStage.loadContent("EntryView")加载的页面名需与@Entry组件类名一致。



更多UIAbility的使用方法，详情请参见[UIAbility组件生命周期](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-lifecycle)。
