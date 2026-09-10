---
name: cangjie-guides/cj-code-debug-preparation
title: 调试准备
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-preparation
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 调试准备
---

# 调试准备

#### 创建工程

创建仓颉工程可以参照工程管理的[创建一个新的工程](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-project-create-new-project)。

#### 设置调试代码类型

单击**Run > Edit Configurations > Debugger**，选择相应模块，在调试配置中将 **Debug type** 选择为 **Dual (ArkTS/JS + Cangjie)** 、**Cangjie** 或 **Detect Automatically** ，在启动调试前进行配置并在下一次调试生效。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/ONLttMSVRdO1bwgQsE9VXQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=6322CF9C1586D5C186E7F1DE8BADB6330CE86EAC2B569B5A75934C8A898ED840)

Detect Automatically 类型会根据当前工程类型启动对应的调试器，如果是纯仓颉工程（[Cangjie]）启动 Cangjie 调试，如果是ArkTS+仓颉混合工程（[Cangjie] Hybrid Ability）启动 Dual (ArkTS/JS + Cangjie) 调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/gqsXjDfNRrOdIt082HApbg/zh-cn_image_0000002731538913.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=5085B7CFEF7045A576FE458FE8F4E9F25E4BC3FFD2BB8FEEB06DF76E5B32CDE6)

检查设备连接状态正常，即可开始调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/kY9P0qrHRPeDLXMCe0B0dg/zh-cn_image_0000002731378945.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=4080F578D2D41E1946116E5290A2FD84582B6B26C9708658D247232BBBEE4C52)
