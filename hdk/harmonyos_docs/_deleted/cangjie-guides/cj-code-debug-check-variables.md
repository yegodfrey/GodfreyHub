---
name: cangjie-guides/cj-code-debug-check-variables
title: 检查变量
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-check-variables
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 检查变量
---

# 检查变量

调试时，停在断点或由于其他原因导致程序中断，在堆栈列表展示当前线程状态，在Variable变量列表支持查看全局/静态变量、寄存器变量和局部变量。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/5wY97hLWToOls2I0uAgg5w/zh-cn_image_0000002701659736.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=4D76E2E261A1820EEF888EC188E06EE7D305469CE1FC68337751363EDC37A9E1)

#### 查看全局/静态变量

单击**Run > Edit Configurations > Debugger**，选择相应模块，在 Cangjie 调试配置界面中勾选“Show static/global variables in the Variables Pane”，调试过程中变量列表会展示全局/静态变量。
