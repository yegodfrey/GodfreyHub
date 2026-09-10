---
name: cangjie-guides/cj-uiability-launch-type
title: UIAbility组件启动模式
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-uiability-launch-type
nodePath: 应用框架 / Ability Kit（程序框架服务） / Stage模型开发指导 / Stage模型应用组件 / UIAbility组件 / UIAbility组件启动模式
---

# UIAbility组件启动模式

[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)的启动模式是指UIAbility实例在启动时的不同呈现状态。针对不同的业务场景，系统提供了两种启动模式：

  * singleton启动模式
  * multiton启动模式



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/rq0qDNIzSX64rnwG3hywwA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111554Z&HW-CC-Expire=86400&HW-CC-Sign=7C9F0A8865A0943818CA715BC53A97D5314463DA4F4947B55923EE0289D3F6D9)

standard是multiton的曾用名，效果与多实例模式一致。

#### singleton启动模式

singleton启动模式为单实例模式，也是默认情况下的启动模式。

每次调用[startAbility()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)方法时，如果应用进程中该类型的[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例已经存在，则复用系统中的UIAbility实例。系统中只存在唯一一个该UIAbility实例，即在最近任务列表中只存在一个该类型的UIAbility实例。

**图1** 单实例模式演示效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/hxWGzUW7Tj2Y_Nv4Oda11A/zh-cn_image_0000002731378541.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111554Z&HW-CC-Expire=86400&HW-CC-Sign=A9C2B0CED0AC7E7BDAC65B1C004B7A3656A3C1256F9EDEE06186891BEA1B1544)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/ByALhCtkSxSVWbIfLtVpxA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111554Z&HW-CC-Expire=86400&HW-CC-Sign=C13581F550B41E36654A36E4285A7869C4EBA6B1D09295E0E67D4F64106CCADA)

应用的UIAbility实例已创建，该UIAbility配置为单实例模式，再次调用[startAbility()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)方法启动该UIAbility实例。由于启动的还是原来的Ability实例，并未重新创建一个新的UIAbility实例，此时只会进入该UIAbility的[onNewWant()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onnewwantwant-launchparam)回调，不会进入其[onCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-oncreatewant-launchparam)和[onWindowStageCreate()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-onwindowstagecreatewindowstage)生命周期回调。如果已经创建的实例仍在启动过程中，调用startAbility接口启动该实例，将收到错误码16000082。

如果需要使用singleton启动模式，在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中的launchType字段配置为singleton即可。
    
    
    {
      "module": {
        // ...
        "abilities": [
          {
            "launchType": "singleton",
            // ...
          }
        ]
      }
    }

#### multiton启动模式

multiton启动模式为多实例模式，每次调用[startAbility()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#func-startabilitywant-startoptions)方法时，都会在应用进程中创建一个新的该类型[UIAbility](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-uiability)实例。即在最近任务列表中可以看到有多个该类型的UIAbility实例。这种情况下可以将UIAbility配置为multiton（多实例模式）。

**图2** 多实例模式演示效果

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/-_HXXI0ARv6UcH8mltLaOA/zh-cn_image_0000002701819238.gif?HW-CC-KV=V1&HW-CC-Date=20260903T111554Z&HW-CC-Expire=86400&HW-CC-Sign=ABD10F03E927056BF49AE6D0690C6F5997BFDDC52B2DCF2BA79483472ED9F29F)

multiton启动模式的开发使用，在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-configuration-file)中的launchType字段配置为multiton即可。
    
    
    {
      "module": {
        // ...
        "abilities": [
          {
            "launchType": "multiton",
            // ...
          }
        ]
      }
    }
