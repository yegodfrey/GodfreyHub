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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/c3buacaaQz67qylr4t-HrA/zh-cn_image_0000002743077981.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=3F210E919D59DB84641947922E677BDB066A39195D9C33C4E4C33CF743D8CD23)

#### [h2]方式二

修改工程目录下AppScope/app.json5，添加ASan配置开关。
    
    
    "asanEnabled": true

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/L700oi-YQcmvqpmzMGUd4w/zh-cn_image_0000002713559020.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=49CC93A892AC3997726D7C8A3C2ADE530C8432D25444ED513094B417C15FD129)

#### 启用ASan

  1. 运行或调试当前应用。

  2. 当程序出现内存错误时，弹出ASan log，可以查看详细报错信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/xANrP-rZSu2FjCtCRiEbiA/zh-cn_image_0000002743197933.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=2A660267131790D64948C744080C21F24AB35B512EA5CBDC887D203B3C85C3A6)



