---
name: cangjie-guides/cj-module-add-page
title: 添加供ArkTS调用的页面组件
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-add-page
nodePath: 开发环境搭建 / 工程创建 / 模块管理 / 添加供ArkTS调用的页面组件
---

# 添加供ArkTS调用的页面组件

在Cangjie + ArkTS（+ C++）互操作工程中，支持添加供ArkTS调用的页面组件模板。该模板内容为ArkTS的[Page页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-add-page)中的一个组件，可作为组件加入到ArkTS声明的一个Page页面中，达到在ArkTS编写的UI界面中，可以引用仓颉UI的混合UI开发效果。

  1. 按照下图所示，在Cangjie + ArkTS （+ C++）互操作模块中的仓颉源码文件存放目录cangjie下单击鼠标右键，选择**New - > Cangjie HybridComponent File**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/d142H8cvRRye6T9va1yefw/zh-cn_image_0000002743077929.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=EC26C819A9F5AD198B135A8FAE4546984D8B9A3AC2CB31076D34A125562FB1EA)

  2. 在弹出框中输入自定义的页面名称，选择需要创建的页面类型，然后单击OK完成添加。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/agab13K8RuaqNSCBKKTZ1Q/zh-cn_image_0000002713398852.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=BE144A01500A3C28CF187C1C1070CCE7B8F7FF9F54935846903E5056E716481A)

其中，两种页面类型说明如下：

     * **With ArkTS Wrapper** ：将在选择的仓颉源代码目录创建Page模板文件（page.cj），并在ArkTS的pages目录下创建调用该仓颉页面的模板文件（page.ets）。
     * **Without ArkTS Wrapper** ：将在选择的仓颉源代码目录创建Page模板文件（page.cj）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/IxliIc5RRQqQQIUAitZcEA/zh-cn_image_0000002713558968.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=FE3F7BAF654E9F6C10933AED03431218E69FC4CC4A7D02477579A3343B2C4F73)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/BGrSRGSwSfS07RtiyLV50A/zh-cn_image_0000002743197881.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=00F39518CA6304F0956798B9F376D8D613B3B588E89744CDA469DE858DEB9659)



