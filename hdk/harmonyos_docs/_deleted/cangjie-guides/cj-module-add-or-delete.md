---
name: cangjie-guides/cj-module-add-or-delete
title: 添加/删除模块
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-module-add-or-delete
nodePath: 开发环境搭建 / 工程创建 / 模块管理 / 添加/删除模块
---

# 添加/删除模块

模块（Module）是应用的基本功能单元，包含了源代码、资源文件、第三方库及应用配置文件，每一个模块都可以独立进行编译和运行。一个应用通常会包含一个或多个模块，因此，可以在工程中创建多个模块，模块分为 Ability 和 Library 两种类型。通用的模块管理（添加/导入/删除模块等操作）可参见[基础的模块管理说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-module-management)。

#### 创建仓颉静态库模块

HAR（Harmony Archive）是静态共享包，通过HAR可以实现多个模块或多个工程共享 ArkUI 组件、资源等相关代码。HAR 不同于 HAP，不能独立安装运行在设备上，只能作为应用模块的依赖项被引用。具体使用方法可参见[开发静态共享包章节](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-har)。

仓颉支持的范围为 API 12及以上，Default类型的纯仓颉和互操作HAR创建。

**模板名称** | **说明**  
---|---  
[Cangjie] Static Library | 用于 phone、tablet 设备的纯仓颉模板，展示基础的 Hello Cangjie 功能。  
  
  1. 按照下图所示，单击左侧目录树的任一文件夹，使光标焦点在目录树中，选择 **File - > New -> Module**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/R1sQEncbRGiwNyU81kK9XQ/zh-cn_image_0000002701659690.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=8A4F668DC2B43E962FE45DD8573A5507674CD80336C7D23D622E46B615F46FE0)

  2. 选择 **[Cangjie] Static Library** 模板

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/r0UpTEj6TaqTOeAVIkAGRw/zh-cn_image_0000002731378903.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=3B7D6ED0851AF72A67BD0AE588FF54160FADB16CC9A2BCB33405E9F79E42A934)

  3. 配置模块名称信息

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/dOF2pZFBRpm8Lr3QjVQCpA/zh-cn_image_0000002701819600.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=1A1EEA8639025E13B538E1B8727BBD499B93C700AADCFC50D0ECC71B83D11AFE)

  4. 完成仓颉静态库模块创建

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/Tf_pZh0sTdq4TyxeVsru-Q/zh-cn_image_0000002731538881.png?HW-CC-KV=V1&HW-CC-Date=20260903T111619Z&HW-CC-Expire=86400&HW-CC-Sign=B375B1EEDFE2C8A7A8E2EBA3D8E4987C796E514DF858DF1D61D5508B8D7F8C92)




#### 在ArkTS （+C++）的HAP、HSP或HAR中创建仓颉模块

创建方法请参见[在ArkTS工程中添加仓颉模块](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-add_cangjie_module)。

#### 删除Module

在工程目录中选中要删除的模块，单击鼠标右键，选中**Delete** ，并在弹出的对话框中单击**Delete** 。
