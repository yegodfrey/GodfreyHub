---
name: cangjie-guides/cj-add_cangjie_module
title: 增加仓颉模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 仓颉-ArkTS 互操作场景 / ArkTS 应用中使用仓颉 / 增加仓颉模块
---

# 增加仓颉模块

该章节介绍如何在 DevEco Studio 的 ArkTS 工程中添加仓颉模块，主要分为在同一个 module 中添加仓颉模块及添加仓颉静态库模块，然后进行互操作调用。

#### 在同一个 module 中添加仓颉模块

  1. 按照下图所示，选中 ArkTS 的 entry 目录中的任意文件，单击右键，选择 **New - > Cangjie(Interop)**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/gAvgdBOtQ7SjT6DJi508lA/zh-cn_image_0000002743077787.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=211320C3042C5BF6D2163EA7E84EB8D6ADAEF832A1F78C67F279685BEB6ECE29)

  2. 点击 **Cangjie(Interop)** 按钮后，在选中的 ArkTS 模块下，自动创建 cjpm 的配置文件 cjpm.toml 和名为 cangjie 的文件夹。文件夹内包含模板代码文件 index.cj、用于存放仓颉的互操作接口声明文件 types 文件夹。如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/UEsVhGTQRKKCyQ5Sw-frkw/zh-cn_image_0000002713558826.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=5F17D3465D9DAB4A8E6AFAF718B481C6D3249889C84074E6390BB4EFD01DE641)

并在 **entry - > oh-package.json5** 中自动生成仓颉的依赖：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/vyyZWyXJQY27M-jIpr0doQ/zh-cn_image_0000002743197739.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=437DFB2748295982D70B3C6A55F7A6A19C470591AA12B8EC13448560184DE243)

  3. 仓颉互操作模块实现后，在 ArkTS 代码中导入仓颉 ohos_app_cangjie_entry 模块，即可加载自定义的仓颉互操作模块，并调用相关的接口。
         
         // 加载自定义的仓颉互操作模块
         import testCJ from "libohos_app_cangjie_entry.so"

  4. 自定义的仓颉互操作模块加载成功后，即可在 ArkTS 工程中调用仓颉互操作模块提供的接口。




在 ArkTS 应用中调用仓颉互操作模块提供的 testCJ 函数示例如下：
    
    
    // 调用仓颉接口
    console.log(testCJ("Cangjie"))

#### 添加仓颉静态库模块

  1. 右键单击工程名，然后选择 **New- >Module** 添加仓颉静态库模块。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/Vmi9xz1ESx2E2Wlzi4zFrw/zh-cn_image_0000002713398858.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=47DB86F0F1A6DC5EF0A9EC13071EB326A9369C028ECCB769EC499563CD79A5B4)

  2. 选择 **[Cangjie] Static Library** ，单击 **Next** ，在弹出窗口中将 **Module name** 改为 **cangjielib** 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/FxTQqVppQUyugnlhUcZ8aA/zh-cn_image_0000002743077789.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=5853FF1D038D684F1700B9936E8603C49B0A7B1CAFB80756A93B703F85ED10A3)

  3. 然后会生成一个 **cangjielib** 文件夹，其中内容为仓颉源码文件及配置文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/nvc9N842T5Gmj6nXGJuCYw/zh-cn_image_0000002713558828.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=26D8EF906B3CF1CC5B010F1C4212BC06B818ECA6DB84F032026384D3D7FEC653)

  4. 在 **cangjielib- >src->main->cangjie->index.cj** 文件中，添加互操作代码，以如下代码为例：
         
         // 包名
         package ohos_app_cangjie_cangjielib
         
         // 导入文件
         internal import ohos.ark_interop.JSModule
         internal import ohos.ark_interop.JSContext
         internal import ohos.ark_interop.JSCallInfo
         internal import ohos.ark_interop.JSValue
         
         // 互操作函数
         func sayHelloCJ(runtime: JSContext, callInfo: JSCallInfo): JSValue {
             let result = "cangjie har arkts use "
             runtime.string(result).toJSValue()
         }
         
         let EXPORT_MODULE = JSModule.registerModule {
             runtime, exports => exports["sayHelloCJ"] = runtime.function(sayHelloCJ).toJSValue()
         }

  5. 在 **cangjielib- >src->main->cangjie** 下创建互操作文件夹，命名为 **types** ，并在 **types** 下创建 **libohos_app_cangjie_entry** 文件夹。

  6. 在 **types- >libohos_app_cangjie_entry** 下创建 **Index.d.ts** 文件，实现上述 index.cj 中 sayHelloCJ 相对应的 ArkTS 函数：
         
         export declare function sayHelloCJ(s: string): string

  7. 在 **types- >libohos_app_cangjie_entry** 下创建 **oh-package.json5** 文件，内容如下。其中 **name** 字段为互操作代码中对应的包名，该包名需要和 **cangjielib- >cjpm.toml** 中配置的包名一致，此处设置 **name** 为 libohos_app_cangjie_cangjielib.so。
         
         {
           "name": "libohos_app_cangjie_cangjielib.so",
           "types": "./Index.d.ts",
           "version": "1.0.0",
           "description": ""
         }

  8. 在 ArkTS 使用仓颉静态库模块时，在 **entry/oh-package.json5** 的 **dependencies** 中，增加对上述包的依赖：
         
         // ...
           "dependencies": {
             "cangjielib": "file:../cangjielib",
             "libohos_app_cangjie_cangjielib.so": "file:../cangjielib/src/main/cangjie/types/libohos_app_cangjie_entry"
           }
         // ...

  9. 然后在 **entry- >src->main->ets** 中，正常使用该函数，以如下 **Index.ets** 为例：
         
         // 导入仓颉函数
         import { sayHelloCJ } from 'libohos_app_cangjie_cangjielib.so'
         
         @Entry
         @Component
         struct Index {
           @State message: string = 'Hello World';
         
           build() {
             RelativeContainer() {
               Text(this.message)
                 .fontSize(40)
                 .fontWeight(FontWeight.Bold)
                 .alignRules({
                   center: { anchor: '__container__', align: VerticalAlign.Center },
                   middle: { anchor: '__container__', align: HorizontalAlign.Center }
                 })
                 .onClick(() => {
                   // 使用仓颉函数
                   this.message = sayHelloCJ("Cangjie")
                 })
             }
             .height('100%')
             .width('100%')
           }
         }




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/gdZ_ha3LR4WkKkwO3weL7g/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090124Z&HW-CC-Expire=86400&HW-CC-Sign=4949A3A17B3573C63014633297787ED81981303B9E0AE51A84F5C4FCB9D5BD7F)

禁止仓颉互操作模块被其他模块导入，否则在ArkTS导入互操作模块时，导入的内容可能缺失。
