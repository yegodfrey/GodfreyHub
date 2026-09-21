---
name: cangjie-guides/cj-uiability-overview
title: UIAbility组件概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-overview
nodePath: 应用框架 / Ability Kit（程序框架服务） / Stage模型开发指导 / Stage模型应用组件 / UIAbility组件 / UIAbility组件概述
---

# UIAbility组件概述

#### 概述

[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)组件是一种包含UI的应用组件，主要用于和用户交互。

UIAbility的设计理念：

  1. 支持应用组件级的跨端迁移和多端协同。

  2. 支持多设备和多窗口形态。




UIAbility划分原则��建议：

UIAbility组���是系统调度的基本单元，为应用提供绘制界面的窗口。一个应用可以包含一个或多个UIAbility组件。例如，在支付应用中，可以将入口功能和收付款功能分别配置为独立的UIAbility。

每一个UIAbility组件实例都会在最近任务列表中显示一个对应的任务。

对于开发者而言，可以根据具体场景选择单个还是多个UIAbility，划分建议如下：

  * 如果开发者希望在任务视图中看到一个任务，建议使用“一个UIAbility+多个页面”的方式，可以避免不必要的资源加载。

  * 如果开发者希望在任务视图中看到多个任务，或者需要同时开启多个窗口，建议使用多个UIAbility实现不同的功能。

例如，即时通讯类应用中的消息列表与音视频通话采用不同的UIAbility进行开发，既可以方便地切换任务窗口，又可以实现应用的两个任务窗口在一个屏幕上分屏显示。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/Z_OK391uSFacIHw2Oyp-Vw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111024Z&HW-CC-Expire=86400&HW-CC-Sign=FD752D499804EFD2853C210849FD777603E5E35110069F4B875861E234D4D787)

任务视图用于快速查看和管理当前设备上运行的所有任务或应用。

#### 声明配置

为使应用能够正常使用UIAbility，需要在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)的[abilities标签](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file#abilities标签)中声明UIAbility的名称、入口、标签等相关信息。
    
    
    {
      "module": {
        // ...
        "abilities": [
          {
            "name": "EntryAbility", // UIAbility组件的名称
            "srcEntry": "ohos_app_cangjie_entry.MainAbility", // UIAbility组件的代码路径
            "description": "$string:EntryAbility_desc", // UIAbility组件的描述信息
            "icon": "$media:startIcon", // UIAbility组件的图标
            "label": "$string:EntryAbility_label", // UIAbility组件的标签
            "startWindowIcon": "$media:startIcon", // UIAbility组件启动页面图标资源文件的索引
            "startWindowBackground": "$color:start_window_background", // UIAbility组件启动页面背景颜色资源文件的索引
            // ...
          }
        ]
      }
    }

同时，需要完成注册。
    
    
    import kit.AbilityKit.UIAbility
    
    let ENTRYABILITY_REGISTER_RESULT = UIAbility.registerCreator("EntryAbility", {=> MainAbility()})
