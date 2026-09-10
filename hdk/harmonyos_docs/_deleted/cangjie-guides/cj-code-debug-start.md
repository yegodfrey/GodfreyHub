---
name: cangjie-guides/cj-code-debug-start
title: 启动调试
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-start
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 启动调试
---

# 启动调试

开发者可以直接启动debug调试会话，也可以通过将调试程序attach到已运行的应用进行调试。

Attach Debugger和Debug的区别在于，Attach Debugger to Process可以先运行应用，然后再启动调试，或者直接启动设备上已安装的应用进行调试；而Debug是直接运行应用后立即启动调试。

对应的调试方式可参见[debug启动调试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-debug)或[attach启动调试](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-attach)章节。

Cangjie 调试配置界面如下：

#### 查看全局变量

单击**Run > Edit Configurations > Debugger**，选择相应模块，在调试配置中勾选**Show static/global variables in the Variables Pane** 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2f/v3/A3IP1Qk9T1efI3kR-r3d4w/zh-cn_image_0000002701819640.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=515FB96B328A7DEB9995EE36A078835C870FD9AF3DE65F218A8DDE0CF0617B33)

调试过程中变量列表会展示全局/静态变量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/1pdwd2d0QDyPJ3SRWmRxHw/zh-cn_image_0000002731538921.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=2557AAFE7E8307B619C670FB8662792CC288FA0D5835F769A7B1393393B3D4E0)

#### 符号表路径

单击**Run > Edit Configurations > Debugger**，选择相应模块，在调试配置中的**Symbol Directories** 页签，单击“+”，可以添加符号表路径。这里指的是带有调试信息的 so 库。例如，开发者可以先编译带有调试信息的 so 库，然后将其调试信息裁剪掉，在设备侧运行无调试信息的 so 库，调试时将带有调试信息的 so 库路径添加在这里，可以实现对该 so 库的调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/mtgpQT9VTIywvnmvSVPkxQ/zh-cn_image_0000002701659732.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C6AB7C5D98903AE10F531D6002F6769B63CD5300A292E4F4D408DBB6CAB54271)

#### 预设调试器命令

在 Cangjie 调试配置界面中的“LLDB Startup Commands”页签和“LLDB Post Attach Commands”页签中预设cjdb(cli)命令。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/vymy4N8GRL6pPv1WODLClQ/zh-cn_image_0000002701659732.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=00598294F8EDD0A401FEAEA0BF45480CDA637724065BC5209245E7563C25D5EB)

在 “LLDB Startup Commands”页签中的命令会在 CJDB 调试器启动之后立即执行，在“LLDB Post Attach Commands”页签中的命令会在 CJDB 调试器成功 attach 到进程之后执行。
