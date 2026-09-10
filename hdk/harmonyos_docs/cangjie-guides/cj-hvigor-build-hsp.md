---
name: cangjie-guides/cj-hvigor-build-hsp
title: 构建HSP
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-build-hsp
nodePath: 构建应用 / 配置构建流程 / 构建HSP
---

# 构建HSP

支持构建ArkTS + Cangjie的HSP，HSP的创建可以参照[模块管理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-management)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/FRE2tW68RuKcH97uQCSSrA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=3FA11FF640C0E8DD0634CCCF47FDF1FD7AEF05D0FDD86A1C6684CA2A7A194AC3)

当前只支持ArkTS + Cangjie的HSP，不支持纯仓颉的HSP。

选中HSP模块名，然后通过DevEco Studio菜单栏的Build > Make Module ${libraryName}进行编译构建，生成HSP。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/17/v3/bodSeal8R2iMhUkMdxOpvA/zh-cn_image_0000002713559032.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=9FE1F39D887F3412E4E4A8D6601E2AA416F321C80982E0154A998AB96358355C)

打包HSP时，会同时默认打包出HAR，在模块下build目录下可以看到*.har和*.hsp。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/fVI7YHqNT-WO8zrPIYpAag/zh-cn_image_0000002743197945.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=1B94AD454D6A6843D3DB303C3318F8B6ECB3261668095764C850C28B16559094)

如需在应用内共享HSP，请先按以下操作编译生成*.tgz包，随后将HSP共享包上传至私仓（请参见将[三方库发布到 ohpm-repo](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-quickstart#zh-cn_topic_0000001792256157_从ohpm-repo获取三方库)）。

  1. 单击工具栏![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/JfohRsLbRju-wTEX1v7ZdQ/zh-cn_image_0000002713399064.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=63F5475734B1A3655641A67747C2078ED5255E012DA23762DBDAB59BC03B402B)图标将编译模式切换成release模式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/5bUvRCkuTDu0hpYFRJGt2A/zh-cn_image_0000002743077995.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=9D3310A2DF9197CF1427287BD155C02EA097A5715E517E7DD62767DEA884CAC0)

  2. 选中HSP模块的根目录，单击Build > Make Module ${libraryName}启动构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/e9-Vs2PFTripNX6HrUu6lA/zh-cn_image_0000002713559032.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=6BAAFBDA8B4ACD07BD9B84CA06B67236675D76D252A1E8168D6F7D7BC5E41AFF)




构建完成后，build目录下生成HSP包产物，其中*.tgz用来上传至私仓。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/h-k7Vj4dT7KIAXHwIiqE4Q/zh-cn_image_0000002713559034.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=E4EFDFD72A21385FE80851468244DBDC0B0CDB4FC4949C1B0CB2500826C9B4AA)
