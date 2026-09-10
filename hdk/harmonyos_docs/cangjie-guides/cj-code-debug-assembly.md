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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/FRVnnrO9RVOb8WksekG5Mg/zh-cn_image_0000002713559012.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=5E2C117880B115236D04D8F8F9E14406BD1E89BB245849C85045E4A1E178BA07)

支持在汇编视图中展示源码、函数名，可以跳转到对应源代码，汇编视图如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/bJWXrzwiT8SiHadLpKIFSg/zh-cn_image_0000002743197925.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=A9B10E574762B1612429A0455588A30F0280C4268ACC7F0812F54AFCDC613219)

#### 汇编断点

可以在汇编视图设置断点，程序运行到对应地址时中断。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/KCyewOAUQj-6iV2lg_DF3w/zh-cn_image_0000002713399044.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=467E69CFCCAD8D02497CCA421ADDD0BF2210AC98188D859116B0D77344F223D5)

#### 单步调试

汇编视图下，单步按钮默认以汇编指令级别进行单步调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/hKLPYRUHTLOrpJbHf0zJPw/zh-cn_image_0000002743077975.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=F7117ADD6AB5FC9539FAA307445A2B64C2AF7F82A7F2A41A7D53445EE143FAA4)
