---
name: cangjie-guides/cj-build-profile-guided-optimization
title: PGO性能优化
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-build-profile-guided-optimization
nodePath: 构建应用 / PGO性能优化
---

# PGO性能优化

PGO (Profile Guided Optimization) 是一种自适应的编译优化手段。通过采集代码在真实场景下的运行数据，辅助编译器更准确地决策哪些代码热的，以达到更好的优化效果。本章节旨在指导开发者如何在 DevEco Studio 中使用仓颉提供的性能优化功能，通过插桩、采集性能数据并进行再编译，以生成更优化的应用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/uBj5BWoATgOo5tCz-tCaEA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=1E4AD0BF7761D116C68C042D5DCF3008FB6EB0CB8C293D20B6A9E98D4C517831)

  * 当前PGO性能优化只支持ArkTS+仓颉混合工程，不支持纯仓颉工程。
  * 当前PGO性能优化不支持模拟器。



#### 生成优化配置（Generate Optimization Profile）

此步骤用于准备性能数据采集环境或直接使用已有的性能数据。

  1. 打开生成优化配置界面： 在DevEco Studio顶部菜单栏中，单击**Run > Generate Optimization Profile**按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/vWnVU_0nS928yH7aUfyuww/zh-cn_image_0000002701819670.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=C99E41FC9276E30979C536D3C2A8C6435E1CEB6351198F27EC6194E298F23119)

此时将弹出一个**Generate Optimization Profile** 配置界面。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f6/v3/ZSJFuwJTQFuWKI8DXchq1Q/zh-cn_image_0000002731538951.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=4D0EFECFCA6CF332E56FA845883D6D73834D61A33AF2E220119AF14F4A00C7B0)

  2. 选择性能数据来源：

方式一：使用 Run action 采集新数据： 选择**Use Run action** ，然后单击界面中的**Run** 按钮。此操作会触发DevEco Studio的常规运行流程（包括编译构建、推送应用到设备并运行）。请注意，如果 DevEco Studio 的**Run** 按钮当前禁用，或正在编译 release 版本的应用，系统将报错提示。

方式二：使用已有的 .profdata 文件： 选择**Use existed profdata file** ，然后单击输入框旁边的文件夹图标按钮，浏览并选择已有的 .profdata 文件路径。此选项必须选择一个有效的 .profdata 文件，否则系统将提示错误。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/SY47wXygRDWSGfx-bF-C9g/zh-cn_image_0000002701659762.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=88A815B2E1BE5FB3D0BD88E1FBFFD342406D47ABB4574DF799F593C2D573A4C2)

  3. 确认并启用 Release 优化（如果未启用）： 当开发者单击**Generate Optimization Profile** 界面中的"Run"（对于 "Use Run action" 方式）或"OK"（对于 "Use existed profdata file" 方式）按钮时，系统会检查仓颉优化配置。如果**File > Settings > Languages & Frameworks > Cangjie(Experiment) > Use Optimization Profile > Release**未勾选，系统将弹出提示。单击"Enable"，系统将自动勾选该配置并继续执行后续操作；单击"Cancel"，则不会修改配置，仅继续执行后续操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/qYYRBeTMQZ2IhWUlUQ4TKQ/zh-cn_image_0000002731378977.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=4371715A199157C491420DA141547B72713750260F9E8B580DCD5B20F1E1DD72)




#### 采集性能数据 (仅适用于**Use Run action** 方式)

  1. 如果开发者在生成优化配置（Generate Optimization Profile）中选择了**Use Run action** ，应用将在设备上运行，此时开发者需要手动触发应用场景以采集数据。

  2. 停止采集并生成 .profdata 文件： 在DevEco Studio主界面的工具栏中，单击**Stop** 按钮。此操作会触发仓颉自动处理设备上的原始性能数据，最终在开发者的项目路径下生成一个 .profdata 文件。




#### 使用Optimization Profile进行再编译

在完成性能数据采集或准备好 .profdata 文件后，开发者可以配置DevEco Studio在编译时使用这些优化数据。

  1. 配置仓颉优化选项： 在DevEco Studio菜单栏中，单击**File > Settings**（macOS 系统为**DevEco Studio > Preferences**）。在弹出的设置窗口中，导航到**Languages & Frameworks > Cangjie(Experiment)**。找到**Use Optimization Profile** 配置项，然后勾选希望进行优化的编译类型（"Debug" 和/或 "Release"）。默认情况下，这两个选项都是未勾选的。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/WQywovYwS5aa3wBsdx7NNg/zh-cn_image_0000002701819672.png?HW-CC-KV=V1&HW-CC-Date=20260903T111622Z&HW-CC-Expire=86400&HW-CC-Sign=24F5DBEB94824DA4A68F20840FE3F10DDC4947AF85B2B8C89AEE11F96A71FEDB)

  2. 触发再编译： 配置完成后，当单击 DevEco Studio 中的**Build Hap(s)/APP(s)** 、**Run** 或其他涉及编译 Hap 模块的按钮时，系统将根据仓颉优化配置进行编译。



  * 如果选择了 "Use Run action" 方式： 若对应模块在工程下存在对应的 .profdata 文件，则编译时会使用该文件进行优化；否则，不会使用 PGO (Profile-Guided Optimization) 相关的优化选项。

  * 如果选择了 "Use existed profdata file" 方式： 编译时会直接使用在生成优化配置（Generate Optimization Profile）步骤中选择的 .profdata 文件路径进行优化。



