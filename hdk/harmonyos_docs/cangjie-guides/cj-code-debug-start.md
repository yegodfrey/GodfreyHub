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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/32/v3/gHt1CEA9T92HF2SoGegQBQ/zh-cn_image_0000002743197919.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=3F3E90C0F1145AA80F183A456914531EA95E46C59FD459E866D762B1B1E98550)

调试过程中变量列表会展示全局/静态变量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/eKrgCAoDTbay-r-XMqeq1A/zh-cn_image_0000002713399038.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=1AD32E8680D143C88B6C12CF605F50C07A3945CD5CB11C447BECB6933479DB87)

#### 符号表路径

单击**Run > Edit Configurations > Debugger**，选择相应模块，在调试配置中的**Symbol Directories** 页签，单击“+”，可以添加符号表路径。这里指的是带有调试信息的 so 库。例如，开发者可以先编译带有调试信息的 so 库，然后将其调试信息裁剪掉，在设备侧运行无调试信息的 so 库，调试时将带有调试信息的 so 库路径添加在这里，可以实现对该 so 库的调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2/v3/0pcmvQ_oQtamtTNRuYri8w/zh-cn_image_0000002743077969.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=B821A8F103A26445AF0EB04BEA6A926FA35EF19E44ECA1B33ABB14801030C174)

#### 预设调试器命令

在 Cangjie 调试配置界面中的“LLDB Startup Commands”页签和“LLDB Post Attach Commands”页签中预设cjdb(cli)命令。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e0/v3/Io3eVCauTsC3YEpxz-av5Q/zh-cn_image_0000002743077969.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=57A26659100CA468FC9DECCFB5A03A2A7DA62EAD144944EBF3F7767DF9703B5D)

在 “LLDB Startup Commands”页签中的命令会在 CJDB 调试器启动之后立即执行，在“LLDB Post Attach Commands”页签中的命令会在 CJDB 调试器成功 attach 到进程之后执行。
