---
name: cangjie-guides/cj-module-add-page
title: 添加供ArkTS调用的页面组件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-add-page
nodePath: 开发环境搭建 / 工程创建 / 模块管理 / 添加供ArkTS调用的页面组件
---

# 添加供ArkTS调用的页面组件

在Cangjie + ArkTS（+ C++）互操作工程中，支持添加供ArkTS调用的页面组件模板。该模板内容为ArkTS的[Page页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-page)中的一个组件，可作为组件加入到ArkTS声明的一个Page页面中，达到在ArkTS编写的UI界面中，可以引用仓颉UI的混合UI开发效果。

  1. 按照下图所示，在Cangjie + ArkTS （+ C++）互操作模块中的仓颉源码文件存放目录cangjie下单击鼠标右键，选择**New - > Cangjie HybridComponent File**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/-ugeVj3PTMKQL7ZCwyh9dg/zh-cn_image_0000002701659692.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=DEF5057779FB04AECA070C40C8E2109D2BC855EA59BFB66BBED1CC1CD49E3E10)

  2. 在弹出框中输入自定义的页面名称，选择需要创建的页面类型，然后单击OK完成添加。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/Nveq3PEzStu4gRYx1YLNdA/zh-cn_image_0000002731538735.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=49B8624AC30A423C9F1E2BD6A118784F1E5F6D29FA2B637912BACA754869815C)

其中，两种页面类型说明如下：

     * **With ArkTS Wrapper** ：将在选择的仓颉源代码目录创建Page模板文件（page.cj），并在ArkTS的pages目录下创建调用该仓颉页面的模板文件（page.ets）。
     * **Without ArkTS Wrapper** ：将在选择的仓颉源代码目录创建Page模板文件（page.cj）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/FHkrcQ9lRO28rfPOCpv-8g/zh-cn_image_0000002731378905.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=463B8AB5FF6D28691F5BBDE24E5E357B508C99BB7CC3A260A0A6FFFBDE4E453A)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/KR0F7ymuSw-Y7l6KAdUCVQ/zh-cn_image_0000002701819602.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=5E7B4042EDCD6AB4AFAF1DEB6255C114803CEFF48982EAE80C1636E6881F1B95)



