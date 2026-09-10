---
name: cangjie-guides/cj-ide-tools-overview
title: 工具概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-tools-overview
nodePath: 开发环境搭建 / 工具概述
---

# 工具概述

#### 概述

该手册是在HUAWEI DevEco Studio使用的基础上，进一步介绍DevEco Studio使用仓颉语言开发仓颉应用。DevEco Studio的基础使用说明请参见[工具概述](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tools-overview)。

DevEco Studio除了具有基本的代码开发、编译构建及调测等功能外，还具有如下特点：

  * 高效智能代码编辑：支持仓颉语言的代码高亮、代码补全、代码错误检查、代码自动跳转、代码格式化、代码查找等功能，提升代码编写效率。更多详细信息，请参见[代码编辑](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-code-edit)。

  * 多端设备模拟仿真：提供HarmonyOS本地模拟器，支持Phone等设备的模拟仿真，便捷获取调试环境。更多详细信息，请参见[使用模拟器运行应用](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-emulator)。

  * DevEco Profiler性能调优：提供实时监控能力和场景化调优模板，便于全方位的设备资源监测，采集数据覆盖多个维度，为开发者带来高效、直通代码行的调优体验，请参见[性能优化概述](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-performance-tuning-overview)。




#### 应用开发流程

使用DevEco Studio，只需要按照如下几步，即可轻松开发一个应用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/gWRfqGFmQs-KPgJxMdPM0Q/zh-cn_image_0000002743197871.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=D58620A17FDBBB54E6EFC93EBD78AFBB7F5EB48615026FD8A8E7FE13B6C618E1)

**一、开发准备**

获取HUAWEI DevEco Studio请单击[链接](https://developer.huawei.com/consumer/cn/download/)下载，完成开发工具的安装。

DevEco Studio开发环境依赖于网络环境，需要连接上网络才能确保工具的正常使用。部分企业网络受限的情况下，需要[配置代理](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-configuring-agents)。

**二、开发应用**

DevEco Studio集成了Phone、Tablet、Car设备的典型场景模板，可以通过工程向导轻松地[创建一个新的工程](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-project-create-new-project)。

接下来还需要定义应用的UI、开发业务功能等编码工作，通过查看[API接口文档](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro)查阅需要调用的API接口。

**三、运行、调试和测试应用**

应用开发完成后，可以[使用真机进行调试](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-debug-app)（需要申请调测证书进行签名），支持单步调试、跨语言调试、变量可视化等调试手段，使得应用调试更加高效。

HarmonyOS应用开发完成后，在发布到应用市场前，还需要[对应用进行测试](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-test-framework)，主要包含Instrument Test、Local Test等，确保HarmonyOS应用纯净、安全，给用户带来更好的使用体验。

**四、发布应用**

HarmonyOS应用开发、测试完成后，需要[将应用发布至应用市场](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-publish-app)，以便应用市场对应用进行分发，普通消费者可以通过应用市场获取到对应的HarmonyOS应用。需要注意的是，发布到华为应用市场的HarmonyOS应用，必须使用应用市场颁发的发布证书进行签名。

#### 文档声明

HUAWEI DevEco Studio使用指南配套DevEco Studio [最新版本](https://developer.huawei.com/consumer/cn/download/deveco-studio)。如使用DevEco Studio其它版本，可能存在文档与产品功能界面、操作不一致的情况，请以实际功能界面为准。
