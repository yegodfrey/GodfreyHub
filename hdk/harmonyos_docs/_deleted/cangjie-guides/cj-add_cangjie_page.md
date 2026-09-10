---
name: cangjie-guides/cj-add_cangjie_page
title: 增加仓颉页面
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_page
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉-ArkTS 互操作 / 仓颉-ArkTS 互操作场景 / ArkTS 应用中使用仓颉 / 增加仓颉页面
---

# 增加仓颉页面

在 ArkTS 使用仓颉中，支持增加仓颉页面（Page）。在 HarmonyOS 中，页面是应用程序界面的一部分，负责展示用户界面的元素，如文本、按钮、图片等，以及处理用户的交互操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/63/v3/tZFo5A3fTX2hbPEmNpTg1A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=9C1FF67EA817503C92AE8270F12C980DBB59970679C08DFDC0FEE5EED841BF2D)

在仓颉与 ArkTS 混合开发场景中，仓颉页面不是一个真正意义上具有完整生命周期的页面，只能以组件的形式嵌入到 ArkTS 页面中，因此需要在 ArkTS 侧提供一个 @Entry 的页面作为容器，用于加载仓颉页面，以下将这种仓颉页面命名为仓颉页面组件。

在 DevEco Studio 中创建仓颉页面步骤如下：

  1. 在 **Project** 窗口，打开 **entry > src > main**，右键单击 **cangjie** 文件夹，选择 **New > Cangjie HybridComponent File**，命名为 **Second** ，如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/zs-UQRH8TuKYGSjg8azAFw/zh-cn_image_0000002731378761.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=EB97F4DAE290514B26ED84AA37240922E85619D916E2A101E6FC19CA95E03C9D)

  2. 在 Cangjie 目录下便会生成仓颉页面组件的文件：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/eU4chmFXQ8qizUdxgHxIAw/zh-cn_image_0000002701819458.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=8A93EF686C42BAD510085E51768644B704078C46541DF735C69060E355655174)

生成的 second.cj 文件内容如下：
         
         package ohos_app_cangjie_entry // 包名
         
         import ohos.arkui.component.*
         import ohos.arkui.state_macro_manage.*
         import ohos.arkui.state_management.*
         
         // 该页面组件必须由HybridComponentEntry修饰
         @HybridComponentEntry
         @Component
         class Second {
             @State
             var msg: String = "Hello"
             // 仓颉组件构建
             public func build() {
                 Column {
                     Text(msg)
                     Button("click to change Text").onClick({
                         _ => msg = "world"
                     })
                 }
             }
         }

在 **entry- >oh-package.json5** 中会生成页面组件的相关依赖：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/95/v3/3FJzkrgdS2Gr8cJmJMGP7A/zh-cn_image_0000002731538739.png?HW-CC-KV=V1&HW-CC-Date=20260903T111605Z&HW-CC-Expire=86400&HW-CC-Sign=F5B97833B8150AA3126E8DF3DBF7C52AA4EDBEE300D77BD415E5984F560FBF9F)

  3. 在 **entry- >src->main->ets->pages** 中会生成一个 ArkTS 文件，该文件作为容器加载仓颉页面组件（见本章节开头的说明），其名为 second.ets，文件内容如下：
         
         // 在 ArkTS 页面中嵌入仓颉页面组件
         // 导入接口函数
         import { CJHybridComponent } from '@cangjie/cjhybridcomponent';
         
         @Entry
         @Component
         struct Second {
           build() {
             Row() {
               // 通过 CJHybridComponent 接口嵌入仓颉页面
               CJHybridComponent({
                 library: "ohos_app_cangjie_entry", // 仓颉页面所在的 package 名字
                 component: "Second"                // 仓颉页面对应的 class 名字
               })
             }
             .height('100%')
             .width('100%')
           }
         }



