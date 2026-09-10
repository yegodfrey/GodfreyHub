---
name: cangjie-guides/cj-code-debug-reverse
title: 反向调试
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-reverse
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 反向调试
---

# 反向调试

针对 Cangjie 开发场景，DevEco Studio 在提供基础调试能力的基础上，同时提供反向调试能力，帮助开发者更好地理解代码并迅速定位问题。

反向调试是指在调试过程中可以回退到历史行和历史断点，查看历史调试信息，包括线程、堆栈和变量信息。支持的调试操作为：

  * 进入/退出反向调试模式
  * 反向 Step Over 回退到历史行
  * 反向 Resume 执行到历史断点
  * 在程序执行历史的记录点上查看全局、静态、局部变量值
  * 时间线查看历史停止点信息



#### 前提条件

  1. 在 **File > Settings > Build,Execution,Deployment > Debugger > Cangjie Debugger** 设置界面，勾选**Enable time travel debug** 开启 Cangjie 反向调试开关。

  2. 配置自动记录的线程数、堆栈个数、变量作用域、复杂类型变量子变量的展开层数和子变量个数，配置修改后，需要重新启动调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e5/v3/5BTnElcyQkydUmKA25e6WQ/zh-cn_image_0000002701819648.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=BBFA406B5F542A7BBC3D33881B44E4B92B1F36DFC78F97625D13D7394B323810)




#### 操作步骤

  1. 设置断点，进入调试模式。

  2. 开启反向调试开关后，在 Debugger 中会出现反向调试相关按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/IlHLYSYNRNGrMvR8vC8naQ/zh-cn_image_0000002731538929.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=FF39EF3E25C939EA70C3300C02DAD0FBC462B307C671C90899FC04C8B2D86497)




需要查看历史调试信息时，单击Open Time Travel Debug按钮 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/WhbRgJkUT6mednZUvCe4FQ/zh-cn_image_0000002701659740.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C728FA11BC292E1649042486BE5EA570377D4F9C7CFEE2B0A4ACFD9D4E7FC02E) 进入反向调试模式，可以在此模式下进行调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/dexX6-GLQ8qQyh57ZK0qRw/zh-cn_image_0000002731378955.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=E71435F39F8A0EDCDBABFE850F677A3907B4AA0C1F75BB8083E24AE0D40D5195)

其中，操作按钮说明如下：

  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/DvMuLlvyRwW3gN_cBJ8czw/zh-cn_image_0000002701819650.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=3D4FC821058682A4545C843AD531042AD72298B4C701C1FD0C3ACA2507BD2940): 进入/退出反向调试模式。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/AileQfFmQJahabLo42iQ8A/zh-cn_image_0000002731538931.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=11016E59E46AD647065FFE5C8F632BD4ECE1F964E72C897E25778D3FE7B8DDBB): 切换当前高亮行到下一个历史断点，并显示断点相关信息。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/mylFt31MTYu2BlZvLKz2EQ/zh-cn_image_0000002701659742.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=14788C8B6B8F0B21A7FF425CC94DF1E9DCC3DA7CCDC0427ED7005533B4102C2C): 切换当前高亮行到上一个历史断点，并显示断点相关信息。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/2bmJS-b0RKCgNrTPNyLv4Q/zh-cn_image_0000002731378957.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=E45C56B1C9A155286C0097BBEC17879CB870A5D6651370F111AD3562CE4CD0AF): 切换当前高亮行到下一个历史行，并显示历史行相关信息。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/QP1iAAsSTHCJ_91tZJskcQ/zh-cn_image_0000002701819652.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=009DFF5568380CD415F102449286A0F507C2F06EFBA45604D44769D909E0C504): 切换当前高亮行到上一个历史行，并显示历史行相关信息。



#### 时间线

在 Cangjie 调试窗口中，单击 Layout Settings ，勾选 Debug Timeline，打开时间线视图。

时间线视图可以展示反向调试模式下记录的所有停止点（断点+单步），通过时间线拖拽，查看历史停止点信息。

  * 拖动时间线上左右游标可修改选中区域。

  * 在时间线上长按鼠标左键拖动可修改选中区域。

  * 拖动时间线上半部分滑块可修改选择区域。

  * 使用 Ctrl + 鼠标滚轮的方式，放大和缩小选中区域。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/y-qPkIU8SxWll-jPH_Lj0g/zh-cn_image_0000002731538933.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C539D5086458FEA4A762BAFBBB964A5C7751E65FDEC0B189FC9F394369C1D24D)




开发者可以单击时间线上的记录点，回到历史停止点位置。鼠标悬浮在停止点上，也可查看停止点的详细信息。
