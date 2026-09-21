---
name: cangjie-faqs/01-cangjie-arkts
title: 已有ArkTS语言的项目如何引入仓颉语言
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cangjie-arkts
nodePath: FAQ / 跨语言互操作 / 已有ArkTS语言的项目如何引入仓颉语言
---

# 已有ArkTS语言的项目如何引入仓颉语言

HarmonyOS 6.0.2及后续版本，仓颉语言相关开发工具已与DevEco Studio融合，开启仓颉相关开发工具需要申请仓颉编程语言Beta权限，申请通过后按照如下步骤操作：

  * 右键**entry** 目录，选择**New > Cangjie(Interop)**：



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/yhsVUosDTDuglZZYQUYAJA/zh-cn_image_0000002659514058.png?HW-CC-KV=V1&HW-CC-Date=20260921T085440Z&HW-CC-Expire=86400&HW-CC-Sign=0CBDF9124CF17CFC6906DB3920773263D1226BCAD40D74950394376D17DECE1D)

  * 在工程的**entry > src > main**目录下会生成仓颉工程目录cangjie：



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/KebnY73MSJa_DXKk2amSrQ/zh-cn_image_0000002659354124.png?HW-CC-KV=V1&HW-CC-Date=20260921T085440Z&HW-CC-Expire=86400&HW-CC-Sign=16AF431BDFAE06879BC96AA6F282AD40E5BDA5AEB5EC29FE747F4E30633C9DDC)
    
    
    ├── entry
    │   └── libs
    │   └── src
    │       ├── main
    │       │   ├── cangjie // 仓颉源码放置在该目录下
    │       │   │   ├── types
    │       │   │   │   └── libohos_app_cangjie_entry // 仓颉接口的ArkTS声明放在该目录下
    │       │   │   │       ├── index.d.ts
    │       │   │   │       └── oh-package.json5
    │       │   │   └── index.cj
    │       │   ├── ets // ArkTS源码放置在该目录下
    │       │   ├── resources
    │       │   └── module.json5
    │       ├── .gitignore
    │       ├── build-profile.json5 // 构建配置文件
    │       ├── cjpm.toml
    │       ├── hivigorfile.ts
    │       ├── obfuscation-rules.txt
    │       ├── oh-package.json5 // 用于存放依赖库的信息，包括所依赖的三方库和共享包
    │       └── oh-package-lock.json5

  * 引入仓颉模块的同时，build-profile.json5文件会自动生成cangjieOptions。为了让本文开发者能够快速掌握互操作调用，可在windows模拟器运行示例工程，增加了abiFilters配置选项：


    
    
    ...
      "buildOption": {
        "cangjieOptions": {
          "path": "./cjpm.toml"
          "abiFilters": [
            "x86_64",
            "arm64-v8a"
          ]
        },
        "nativeLib": {
          "filter": {
            "enableOverride": true
          }
        }
      },
    ...

  * 引入仓颉模块的同时，oh-package.json5文件会自动生成libohos_app_cangjie_entry.so的依赖路径，仓颉开发的接口将从libohos_app_cangjie_entry.so导出


    
    
    ...
      "dependencies": {
        "libohos_app_cangjie_entry.so": "file:src/main/cangjie/types/libohos_app_cangjie_entry"
      }
    ...

  * 以在日志中输出"Hello Cangjie"功能为例，开发仓颉代码，在index.cj文件中添加如下内容：


    
    
    internal import ohos.ark_interop.*
    import kit.PerformanceAnalysisKit.Hilog
    
    func helloCangjie(runtime: JSContext, callInfo: JSCallInfo): JSValue {
        Hilog.info(0, "Cangjie Test", "Hello Cangjie")
        runtime.undefined().toJSValue()
    }
    
    let EXPORT_MODULE = JSModule.registerModule {
        runtime, exports => exports["helloCangjie"] = runtime.function(helloCangjie).toJSValue()
    }

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/bq61k3UnS3KD0LOiZVlBXQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085440Z&HW-CC-Expire=86400&HW-CC-Sign=439D4925FBB1E393AC45F94C8ADDDD817871E154060A7D1361CB25248B8182B2)

  1. JSContext是一个单线程执行的ArkTS互操作上下文。JSContext和ArkTS运行时是一一对应的关系，其主要目标是创建JSValue和安全引用、管理ArkTS侧引用的仓颉对象的生命周期。
  2. JSCallInfo是一次ArkTS函数调用的相关信息。每次ArkTS函数调用会在ArkTS栈上保存参数列表和其他相关信息，JSCallInfo是一个指向这些信息的指针。
  3. JSValue是一个ArkTS变量（弱类型，短生命周期）。JSValue是ArkTS运行时统一类型，也是直接与ArkTS运行时交互的数据类型。
  4. JSModule的目标是提供符号导出能力（导出到ArkTS）。配合自定义静态初始化函数，在动态库被加载时把导出目标注册到全局表，并由ArkTS引擎来执行导出。
  5. 更多仓颉与ArkTS互操作用法，详情请参见[仓颉-ArkTS互操作](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cangjie-arkts)
  6. 仓颉与ArkTS互操作API，详情请参见[仓颉与ArkTS互操作库](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-arkts-api)



  * 在cangjie/types/libohos_app_cangjie_entry/index.d.ts文件中添加如下内容：


    
    
    export declare function helloCangjie(): void

  * 在ets/pages/index.ets 文件中添加如下内容：


    
    
    import { helloCangjie } from "libohos_app_cangjie_entry.so"
    
    @Entry
    @Component
    struct Index {
      @State message: string = 'Hello World';
    
      build() {
        RelativeContainer() {
          Text(this.message)
            .id('HelloWorld')
            .fontSize($r('app.float.page_text_font_size'))
            .fontWeight(FontWeight.Bold)
            .alignRules({
              center: { anchor: '__container__', align: VerticalAlign.Center },
              middle: { anchor: '__container__', align: HorizontalAlign.Center }
            })
            .onClick(() => {
              this.message = 'Welcome';
              helloCangjie();
            })
        }
        .height('100%')
        .width('100%')
      }
    }

在模拟器运行工程，点击Hello World，日志输出：
    
    
    Hello Cangjie
