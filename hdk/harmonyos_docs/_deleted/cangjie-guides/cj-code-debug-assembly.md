---
name: cangjie-guides/cj-code-debug-assembly
title: 汇编调试
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-assembly
nodePath: 编写与调试应用 / 应用调试 / 代码调试 / 汇编调试
---

# 汇编调试

仓颉支持查看汇编和汇编代码调试，此外，当程序中断到没有源码的位置时（如 stepin 到一个没有调试信息的函数中），DevEco Studio 会打开汇编视图，让开发者了解程序当前停住的地址及对应的汇编码。

#### 汇编视图

在某一个堆栈处右键，在弹出菜单中选择“Disassemble Frame”，可以查看该栈帧对应的汇编码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/RYJrSo_HT_-rwXUOpK3yBQ/zh-cn_image_0000002731378951.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=5A2E146EB8DDDB061FC6B267A33FB36F5619D972DC1FFC242A7839160093CEF4)

支持在汇编视图中展示源码、函数名，可以跳转到对应源代码，汇编视图如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/m-Y3Nx4FSDmo8haPOduJ4A/zh-cn_image_0000002701819646.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=AEBEEF5FE50061755BFAD3465EBBF54FF4915CC0C1CDE2CEF6E9E1613F8663FF)

#### 汇编断点

可以在汇编视图设置断点，程序运行到对应地址时中断。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/cB_uZooHSyOmvmlPyUbc-g/zh-cn_image_0000002731538927.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=34F8E621952CAC0E16BE75C3F6FF9DD431B5D7291E006A682C2B93A15EF19C80)

#### 单步调试

汇编视图下，单步按钮默认以汇编指令级别进行单步调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/I33-zuKbQJKVgCRMwhUHqg/zh-cn_image_0000002701659738.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=298EB519502531ED31F10940E56260929B9FE4C79E670E1510868705B28F8774)
