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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a5/v3/PtJRl9tHTwKzCtNdUWmlsQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=D66951028AC2B09CA701414B04AACC3A216E2BBCE1FE0EC40D651C627DD66046)

Detect Automatically 类型会根据当前工程类型启动对应的调试器，如果是纯仓颉工程（[Cangjie]）启动 Cangjie 调试，如果是ArkTS+仓颉混合工程（[Cangjie] Hybrid Ability）启动 Dual (ArkTS/JS + Cangjie) 调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/MpNNW4wBT1WVcXvxAwzJJQ/zh-cn_image_0000002713399030.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=2ECF00DAE50D4D121B81051AF8EBEB08AEE7C4BE19472E50927171A267D7F86F)

检查设备连接状态正常，即可开始调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/ggxEtuJbQBKYrO8uKN8ZzQ/zh-cn_image_0000002713559006.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=032BC34235CAE0CFF7AD9E6234DDEB4D735C7C763D78F68DD6FEDCB465ECF542)
