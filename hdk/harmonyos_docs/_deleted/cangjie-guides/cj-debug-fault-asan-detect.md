---
name: cangjie-guides/cj-debug-fault-asan-detect
title: 使用ASan检测内存错误
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-debug-fault-asan-detect
nodePath: 编写与调试应用 / 日志与故障分析 / 故障分析 / 使用ASan检测内存错误
---

# 使用ASan检测内存错误

为追求仓颉的极致性能，编译器和OS(Windows/Linux/macOS)运行框架不会对内存操作进行安全检测。针对该场景仓颉Asan（Address-Sanitizer）为开发者提供了仓颉代码与 C 代码互操作过程中，可能出现的内存安全问题的检测能力，并通过FaultLog展示错误的堆栈详情。

#### 使能ASan

可通过以下两种方式使能ASan。

#### [h2]方式一

单击**Run > Edit Configurations > Diagnostics**，勾选**Address Sanitizer** 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/cX2blYIGT_eR6oz5Nf7b7A/zh-cn_image_0000002701659744.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=4D9FF9E342D259A7F52A1A8D3DA6630C277A95ACFCA3F8FF0F87F0596885D92E)

#### [h2]方式二

修改工程目录下AppScope/app.json5，添加ASan配置开关。
    
    
    "asanEnabled": true

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/35/v3/IH59kq8PQKCOLj2kFx8NXg/zh-cn_image_0000002731378959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=EDB7E39406A012FF1FB37ADE24362A9218E2E389A03B63C76E047CF78FB4B1B5)

#### 启用ASan

  1. 运行或调试当前应用。

  2. 当程序出现内存错误时，弹出ASan log，可以查看详细报错信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/6g7hP81AQ1GL4IHUGvJjng/zh-cn_image_0000002701819654.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=6069624871FCA9F615DFEE735061691407D62FA96780989AFCEE703D03246347)



