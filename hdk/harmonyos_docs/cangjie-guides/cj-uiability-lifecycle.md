---
name: cangjie-guides/cj-uiability-lifecycle
title: UIAbility组件生命周期
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-lifecycle
nodePath: 应用框架 / Ability Kit（程序框架服务） / Stage模型开发指导 / Stage模型应用组件 / UIAbility组件 / UIAbility组件生命周期
---

# UIAbility组件生命周期

#### 概述

当用户打开、切换和返回到对应应用时，应用中的[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例会在其生命周期的不同状态之间转换。UIAbility类提供了一系列回调，通过这些回调可以知道当前UIAbility实例的某个状态发生改变，会经过UIAbility实例的创建和销毁，或者UIAbility实例发生了前后台的状态切换。

UIAbility的生命周期包括Create、Foreground、Background、Destroy四个状态，如下图所示。

**图1** UIAbility生命周期状态

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/MJKQfr9GRT26OOMHST_qiA/zh-cn_image_0000002713398634.png?HW-CC-KV=V1&HW-CC-Date=20260908T090115Z&HW-CC-Expire=86400&HW-CC-Sign=D125898B085FC33CCD90BBB90A44132330197D47404E0913DBDB80BED7A76616)

#### 生命周期状态说明

#### [h2]Create状态

Create状态为在应用加载过程中，[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例创建完成时触发，系统会调用[onCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)回调。可以在该回调中进行页面初始化操作，例如变量定义资源加载等，用于后续的UI展示。
    
    
    import kit.AbilityKit.UIAbility
    import kit.AbilityKit.Want
    
    class MainAbility <: UIAbility {
        public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
          // 页面初始化
        }
        // ...
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/hj2wfycjQta89aw0mtBkzg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090115Z&HW-CC-Expire=86400&HW-CC-Sign=87B97C7FCF1E5168A6B2A041B331071FCAF32B167189DB3AA56887ADC8482B89)

[Want](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-want#class-want)是对象间信息传递的载体，可以用于应用组件间的信息传递。Want的详细介绍请参见[信息传递载体Want](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-want-overview)。

#### [h2]WindowStageCreate和WindowStageDestroy状态

[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例创建完成之后，在进入Foreground之前，系统会创建一个WindowStage。WindowStage创建完成后会进入[onWindowStageCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onwindowstagecreatewindowstage)回调，可以在该回调中设置UI加载、设置WindowStage的事件订阅。

**图2** WindowStageCreate和WindowStageDestroy状态

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/04/v3/DFR1DwocSW6d44j6s-EDrw/zh-cn_image_0000002743077565.png?HW-CC-KV=V1&HW-CC-Date=20260908T090115Z&HW-CC-Expire=86400&HW-CC-Sign=A73150D14854E3E00F58D9750AB8E1A7CEB39CD0F2019E89F11E34BA3F4BF721)

在onWindowStageCreate()回调中通过[loadContent()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-window#func-loadcontentstring)方法设置应用要加载的页面。
    
    
    import kit.AbilityKit.UIAbility
    import kit.ArkUI.WindowStage
    
    class MainAbility <: UIAbility {
        // ...
        public override func onWindowStageCreate(windowStage: WindowStage): Unit {
            // 设置UI加载
            windowStage.loadContent("EntryView")
        }
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/2vAQWMsAR12Fb4CYU5evaQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090115Z&HW-CC-Expire=86400&HW-CC-Sign=CBC2562D0B3DECA804461A23ADE7B470826372906F98465584DDF7A3D9D32937)

WindowStage的相关使用请参见[窗口开发指导](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-application-window-stage)。

#### [h2]Foreground和Background状态

Foreground和Background状态分别在[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例切换至前台和切换至后台时触发，对应于[onForeground()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onforeground)回调和[onBackground()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onbackground)回调。

onForeground()回调，在UIAbility的UI可见之前，如UIAbility切换至前台时触发。可以在onForeground()回调中申请系统需要的资源，或者重新申请在onBackground()中释放的资源。

onBackground()回调，在UIAbility的UI完全不可见之后，如UIAbility切换至后台时候触发。可以在onBackground()回调中释放UI不可见时无用的资源，或者在此回调中执行较为耗时的操作，例如状态保存等。

例如应用在使用过程中需要使用用户定位时，假设应用已获得用户的定位权限授权。在UI显示之前，可以在onForeground()回调中开启定位功能，从而获取到当前的位置信息。

当应用切换到后台状态，可以在onBackground()回调中停止定位功能，以节省系统的资源消耗。
    
    
    import kit.AbilityKit.UIAbility
    
    class MainAbility <: UIAbility {
        // ...
    
        public override func onForeground(): Unit {
            // 申请系统需要的资源，或者重新申请在onBackground()中释放的资源
        }
    
        public override func onBackground(): Unit {
            // 释放UI不可见时无用的资源，或者在此回调中执行较为耗时的操作
            // 例如状态保存等
        }
    }

当应用的UIAbility实例已创建，且UIAbility配置为[singleton](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-launch-type#singleton启动模式)启动模式时，再次调用[startAbility()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)方法启动该UIAbility实例时，只会进入该UIAbility的[onNewWant()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onnewwantwant-launchparam)回调，不会进入其[onCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)和[onWindowStageCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onwindowstagecreatewindowstage)生命周期回调。应用可以在该回调中更新要加载的资源和数据等，用于后续的UI展示。
    
    
    import kit.AbilityKit.{UIAbility, Want, LaunchParam}
    
    class MainAbility <: UIAbility {
        // ...
        public override func onNewWant(want: Want, launchParam: LaunchParam): Unit {
            // 更新资源、数据
        }
    }

#### [h2]Destroy状态

Destroy状态在[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例销毁时触发。可以在onDestroy()回调中进行系统资源的释放、数据的保存等操作。

例如，调用[terminateSelf()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-terminateself)方法停止当前UIAbility实例，执行onDestroy()回调，并完成UIAbility实例的销毁。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/iDS0DHiZQ2mrOY6vXJrOaQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090115Z&HW-CC-Expire=86400&HW-CC-Sign=7384957F93D486FF062E592462C63D2429FB4DF48628510962CC867154B54D15)

  * 用户在最近任务列表中使用一键清理来关闭应用，对于无实况窗的应用将不会触发onDestroy()回调，而是会直接终止进程；对于有实况窗的应用会继续触发onDestroy()回调。
  * 当在开发者模式下调试某个应用时，如果用户从最近任务列表中移除了该调试应用的一个任务，则该调试应用的进程会被强制销毁，不会触发onDestroy()回调。


    
    
    import kit.AbilityKit.UIAbility
    
    class MainAbility <: UIAbility {
        // ...
    
        public override func onDestroy(): Unit {
            // 系统资源的释放、数据的保存等
        }
    }
