---
name: cangjie-guides/cj-uiability-intra-device-interaction
title: 启动应用内的UIAbility组件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-intra-device-interaction
nodePath: 应用框架 / Ability Kit（程序框架服务） / Stage模型开发指导 / Stage模型应用组件 / UIAbility组件 / 启动应用内的UIAbility组件
---

# 启动应用内的UIAbility组件

[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)是系统调度的最小单元。在设备内的功能模块之间跳转时，会涉及到启动特定的Ability，包括应用内的其他Ability，或其他应用的Ability（例如启动三方支付Ability）。

本章主要介绍启动应用内的Ability组件的方式。

#### 启动应用内的UIAbility

当一个应用内包含多个[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)时，存在应用内启动Ability的场景。例如在支付应用中从入口Ability启动收付款Ability。

假设应用中有两个Ability：EntryAbility和FuncAbility（可以在同一个Module中，也可以在不同的Module中），需要从EntryAbility的页面中启动FuncAbility。

  1. 在EntryAbility中，通过调用[startAbility()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)方法启动Ability，[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)为Ability实例启动的入口参数，其中bundleName为待启动应用的Bundle名称，abilityName为待启动的Ability名称，moduleName在待启动的Ability属于不同的Module时添加，parameters为自定义信息参数。示例中的context的获取方式请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-usage#获取uiability的上下文信息)。
         
         import kit.ArkUI.Button
         import ohos.business_exception.*
         import kit.AbilityKit.{Want, UIAbilityContext, WantValueType}
         import std.collection.HashMap
         import kit.PerformanceAnalysisKit.Hilog
         
         // 见获取UIAbility的上下文信息章节
         func getContext(): UIAbilityContext {
             return globalContext.getOrThrow()
         }
         
         @Entry
         @Component
         class PageAbilityComponentsInteractive {
             func build() {
                 Row {
                     Column {
                         Button().onClick ({
                             evt =>
                             // context为调用方Ability的AbilityContext
                             let context = getContext()
                             let parametersMap = HashMap<String, WantValueType>()
                             parametersMap.add("info", StringValue("来自EntryAbility PageAbilityComponentsInteractive页面"))
                             let want = Want(
                                 deviceId: "", // deviceId为空表示本设备
                                 bundleName: "com.samples.stagemodelabilitydevelop",
                                 abilityName: "FuncAbilityA",
                                 moduleName: "entry", // moduleName非必选
                                 // 自定义信息
                                 parameters: parametersMap
                             )
                             try {
                                 context.startAbility(want)
                             } catch (e: BusinessException) {
                                 Hilog.info(0, "device_interaction", "Failed to start FuncAbility. Code is ${e.code}, message is ${e.message}")
                             }
                         })
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }

  2. 在FuncAbility的[onCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)或者[onNewWant()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onnewwantwant-launchparam)生命周期回调文件中接收EntryAbility传递过来的参数。
         
         import kit.AbilityKit.{UIAbility, UIAbilityContext, LaunchParam, Want}
         
         var globalFuncAbilityAContext: ?UIAbilityContext = None
         class FuncAbilityA <: UIAbility {
             public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
                 globalFuncAbilityAContext = this.context
                 // 接收调用方Ability传过来的参数
                 let funcAbilityWant = want
                 // want.parameters是一个json格式的字符串，用户可通过三方json库解析出info字段的值
             }
             // ...
         }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/QvzeyGOxRzGzOlsttf2M4A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=8C2EC1CC052B37973C91A4C10A696A9074948C453E6565C158DF5424843BBC6C)

在被拉起的FuncAbility中，可以通过获取传递过来的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)参数的parameters来获取拉起方[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)的PID、Bundle Name等信息。

  3. 在FuncAbility业务完成之后，如需要停止当前[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例，在FuncAbility中通过调用[terminateSelf()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-terminateself)方法实现。示例中的context的获取方式请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-usage#获取uiability的上下文信息)。
         
         import ohos.business_exception.*
         import kit.AbilityKit.UIAbilityContext
         import kit.PerformanceAnalysisKit.Hilog
         
         var globalFuncAbilityAContext: ?UIAbilityContext = None
         // 见获取UIAbility的上下文信息章节
         func getFuncAbilityAContext(): UIAbilityContext {
             return globalFuncAbilityAContext.getOrThrow()
         }
         
         @Entry
         @Component
         class PageFromStageModel {
             func build() {
                 Row {
                     Column {
                         Button("FuncAbility").onClick ({
                             evt =>
                             let context = getFuncAbilityAContext()
                             try {
                                 context.terminateSelf()
                             } catch (e: BusinessException) {
                                 Hilog.info(0, "device_interaction", "Failed to start terminate self. Code is ${e.code}, message is ${e.message}")
                             }
                         })
                         // ...
                     }.width(100.percent)
                 }.height(100.percent)
             }
         }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0b/v3/MN4jfB0ZTF2JgbwFNXF8CA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=95517578BAA28C41415CCB0E67DDB899078F58EF08976F3A7ABE4495D3ECF817)

调用terminateSelf()方法停止当前Ability实例时，默认会保留该实例的快照（Snapshot），即在最近任务列表中仍然能查看到该实例对应的任务。如不需要保留该实例的快照，可以在其对应Ability的[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中，将[abilities标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#abilities标签)的removeMissionAfterTerminate字段配置为true。




#### 启动UIAbility的指定页面

#### [h2]概述

一个[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)可以对应多个页面，在不同的场景下启动该UIAbility时需要展示不同的页面，例如从一个UIAbility的页面中跳转到另外一个UIAbility时，希望启动目标UIAbility的指定页面。

UIAbility的启动分为两种情况：UIAbility冷启动和UIAbility热启动。

  * UIAbility冷启动：指的是UIAbility实例处于完全关闭状态下被启动，这需要完整地加载和初始化UIAbility实例的代码、资源等。
  * UIAbility热启动：指的是UIAbility实例已经启动并在前台运行过，由于某些原因切换到后台，再次启动该UIAbility实例，这种情况下可以快速恢复UIAbility实例的状态。



本章主要讲解目标UIAbility冷启动和目标UIAbility热启动两种启动指定页面的场景，以及调用方如何指定启动页面。

#### [h2]调用方UIAbility指定启动页面

调用方[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)启动另外一个UIAbility时，通常需要跳转到指定的页面。例如FuncAbility包含两个页面（Index对应首页，FuncA对应功能A页面），此时需要在传入的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)参数中配置指定的页面信息，可以通过want中的parameters参数增加一个自定义参数传递页面跳转信息。示例中的context的获取方式请参见[获取UIAbility的上下文信息](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-usage#获取uiability的上下文信息)。
    
    
    import kit.ArkUI.Button
    import ohos.business_exception.*
    import kit.AbilityKit.{Want, UIAbilityContext, AbilityResult, WantValueType}
    import std.collection.HashMap
    import kit.PerformanceAnalysisKit.Hilog
    
    // 见获取UIAbility的上下文信息章节
    func getContext(): UIAbilityContext {
        return globalContext.getOrThrow()
    }
    
    @Entry
    @Component
    class PageAbilityComponentsInteractive {
        func build() {
            Row {
                Column {
                    Button().onClick ({
                        evt =>
                        // context为调用方Ability的AbilityContext
                        let context = getContext()
                        let parametersMap = HashMap<String, WantValueType>()
                        parametersMap.add("router", StringValue("FuncA"))
                        let want = Want(
                            deviceId: "", // deviceId为空表示本设备
                            bundleName: "com.samples.stagemodelabilitydevelop",
                            abilityName: "FuncAbilityA",
                            moduleName: "entry", // moduleName非必选
                            // 自定义信息
                            parameters: parametersMap
                        )
                        try {
                            context.startAbility(want)
                        } catch (e: BusinessException) {
                            Hilog.info(0, "device_interaction", "Failed to start FuncAbility. Code is ${e.code}, message is ${e.message}")
                        }
                    })
                }.width(100.percent)
            }.height(100.percent)
        }
    }

#### [h2]目标UIAbility冷启动

目标[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)冷启动时，在目标Ability的[onCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)生命周期回调中，接收调用方传过来的参数。然后在目标Ability的[onWindowStageCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onwindowstagecreatewindowstage)生命周期回调中，解析调用方传递过来的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)参数，获取到需要加载的页面信息url，传入[windowStage.loadContent()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#class-windowstage)方法。
    
    
    import std.collection.HashMap
    import kit.AbilityKit.{UIAbility, LaunchParam, Want}
    import kit.PerformanceAnalysisKit.Hilog
    
    class FuncAbilityA <: UIAbility {
        var router = "Index"
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
            // 接收调用方UIAbility传过来的参数
            let funcAbilityWant = want
            // want.parameters是一个json格式的字符串，用户可通过三方json库解析出router字段的值
        }
    
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            Hilog.info(0, "device_interaction", "FuncAbilityA onWindowStageCreate.")
            windowStage.loadContent(router)
        }
    }

#### [h2]目标UIAbility热启动

在应用开发中，会遇到目标[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例之前已经启动过的场景，这时再次启动目标Ability时，不会重新走初始化逻辑，只会直接触发[onNewWant()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onnewwantwant-launchparam)生命周期方法。为了实现跳转到指定页面，需要在onNewWant()中解析参数进行处理。

例如短信应用和联系人应用配合使用的场景。

  1. 用户先打开短信应用，短信应用的UIAbility实例启动，显示短信应用的主页。
  2. 用户将设备回到桌面界面，短信应用进入后台运行状态。
  3. 用户打开联系人应用，找到联系人张三。
  4. 用户点击联系人张三的短信按钮，会重新启动短信应用的UIAbility实例。
  5. 由于短信应用的UIAbility实例已经启动过了，此时会触发该UIAbility的onNewWant()回调，而不会再执行[onCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)和[onWindowStageCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onwindowstagecreatewindowstage)等初始化逻辑。



**图1** 目标UIAbility热启动

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/_rmT57BqSu6BNv_EpX8V-Q/zh-cn_image_0000002731538519.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=D24C56D0212E7D7DDA6FA43009B7BA170D049F3C93A6C0BAA986F1D30542BD8C)

开发步骤如下所示。

  1. 冷启动短信应用的UIAbility实例。
         
         import std.collection.HashMap
         import kit.AbilityKit.{UIAbility, LaunchParam, Want}
         import kit.PerformanceAnalysisKit.Hilog
         
         var globalFuncAbilityAContext:?UIAbilityContext = None
         class FuncAbilityA <: UIAbility {
             var url = "Index"
             public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
                 // 接收调用方Ability传过来的参数
                 let funcAbilityWant = want
                 let info = "XXX"
                 // want.parameters是一个json格式的字符串，用户可通过三方json库解析出router字段的值，赋给info
                 if (info == "FuncA") {
                     url = "PageColdStartUp"
                 }
             }
         
             public override func onWindowStageCreate(windowStage: WindowStage): Unit {
                 Hilog.info(0, "device_interaction", "FuncAbilityA onWindowStageCreate.")
                 globalFuncAbilityAContext = this.context
                 windowStage.loadContent(url)
             }
         }

  2. 在短信应用UIAbility的[onNewWant()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onnewwantwant-launchparam)回调中解析调用方传递过来的[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)参数，通过[Router](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-uicontext-router#class-router)对象，并进行指定页面的跳转。此时再次启动该短信应用的UIAbility实例时，即可跳转到该短信应用的UIAbility实例的指定页面。
         
         import std.collection.HashMap
         import kit.AbilityKit.{UIAbility, LaunchParam, Want}
         import kit.ArkUI.{launch, Router}
         import kit.PerformanceAnalysisKit.Hilog
         
         class FuncAbilityA <: UIAbility {
             //...
             public override func onNewWant(want: Want, launchParam: LaunchParam): Unit {
                 // 接收调用方Ability传过来的参数
                 let funcAbilityWant = want
                 let info = "XXX"
                 // want.parameters是一个json格式的字符串，用户可通过三方json库解析出router字段的值，赋给info
                 if (info == "FuncA") {
                     url = "PageHotStartUp"
                 }
                 launch {
                     Router.pushUrl(url: "PageHotStartUp", callback: {code => Hilog.error(1, "info", "Failed to push url. Code is ${code}")})
                 }
             }
         }




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/FXJpxCSWTgmHSeGH1ENNwQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111555Z&HW-CC-Expire=86400&HW-CC-Sign=443DC4BADFD00FD653ED5E14239711F75AE0C8F6E52E150E3F26931A4EED3B19)

当被调用方[UIAbility组件启动模式](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-launch-type)设置为multiton启动模式时，每次启动都会创建一个新的实例，那么onNewWant()回调就不会被用到。
