---
name: cangjie-guides/cj-hvigor-build-hsp
title: 构建HSP
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-build-hsp
nodePath: 构建应用 / 配置构建流程 / 构建HSP
---

# 构建HSP

支持构建ArkTS + Cangjie的HSP，HSP的创建可以参照[模块管理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-management)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/pEMDdzLOQ5u8Qz8KHWJVUg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=9608A271EDD471E89690B2E86148980A817DF12D2DC1A270CAD82F5896409FA2)

当前只支持ArkTS + Cangjie的HSP，不支持纯仓颉的HSP。

选中HSP模块名，然后通过DevEco Studio菜单栏的Build > Make Module ${libraryName}进行编译构建，生成HSP。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/sb63niXmSQWLJwvHb9gltQ/zh-cn_image_0000002731378971.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=290B573C6AD29863FE9F2787FDD400353A6EB9FAC699F66E3CC6032798334AAB)

打包HSP时，会同时默认打包出HAR，在模块下build目录下可以看到*.har和*.hsp。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/d757aa19QsKKdj9ID5n5gw/zh-cn_image_0000002701819666.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=33EEFA4CC1078CE6435DFB7305D912641B361C363175CF155062DF99B3290235)

如需在应用内共享HSP，请先按以下操作编译生成*.tgz包，随后将HSP共享包上传至私仓（请参见将[三方库发布到 ohpm-repo](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-ohpm-repo-quickstart#zh-cn_topic_0000001792256157_从ohpm-repo获取三方库)）。

  1. 单击工具栏![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/j7ozGu1wRQaXUw9Il0gy_Q/zh-cn_image_0000002731538947.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=73CFB5B5672E77F1128A714528F2CDC26998A9A3D8377A60C891F67F7E11160F)图标将编译模式切换成release模式。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/i69_bGqcQDGAN4uMZsg6Nw/zh-cn_image_0000002701659758.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=F72E75A2E4C08E3034FD43C489C273E9F6228971A87B95E1262DCA5CE2A56890)

  2. 选中HSP模块的根目录，单击Build > Make Module ${libraryName}启动构建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/JleOCZy1RuGPbLAFz9Zciw/zh-cn_image_0000002731378971.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=8C74B18B9D68AF0A02C38CA2B85913CBD91255B8F26AF2C373E8400EB7FA0923)




构建完成后，build目录下生成HSP包产物，其中*.tgz用来上传至私仓。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/fADVkj3aS7KqmT_atMGBnQ/zh-cn_image_0000002731378973.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=BF3EBCE48D30EA671D871D11192504418585EDF6A8EC20FD45CAEA56E11732EA)
