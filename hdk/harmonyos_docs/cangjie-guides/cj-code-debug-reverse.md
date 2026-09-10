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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/XIMTgAcsRK-JI0nHfq3xiQ/zh-cn_image_0000002743197927.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=560C9D5F345D5981BF5ADCB0EB21B7210BDD678D085D8DB517EFAD066E9D1DB1)




#### 操作步骤

  1. 设置断点，进入调试模式。

  2. 开启反向调试开关后，在 Debugger 中会出现反向调试相关按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/HDdcg49aRn6pI5VGd73WmA/zh-cn_image_0000002713399046.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=5BDF4E12BE05887D25478875969012A1D208AF791E8C7D776C723B4773320888)




需要查看历史调试信息时，单击Open Time Travel Debug按钮 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/C036oljVT8O4SjlkCGUy9A/zh-cn_image_0000002743077977.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=21AFAC1D88AD4702A08F06DECDDD0E1413C0D4B8B5C8377A73A6196B027DC981) 进入反向调试模式，可以在此模式下进行调试。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/cvQHaJbuTeS2MwpVaGUpvw/zh-cn_image_0000002713559016.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=B674D9DBE2AFD72CDE2A86AAA685D867694B4A7CCF4A64EA3696131186F5819C)

其中，操作按钮说明如下：

  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7/v3/kJwKHcc_TP-dUyczg9viGQ/zh-cn_image_0000002743197929.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=67AA751CE26AD768A89FF538C8C8825B6D3BA7E41CBEF4F80C170823C00D7614): 进入/退出反向调试模式。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/03/v3/UeQAXw6fT6Si_AObS1k41Q/zh-cn_image_0000002713399048.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=A8EB36DDE416E3C7D9A84F3DA005BFCFA874394FD9185331FA776D6C7D7F9C87): 切换当前高亮行到下一个历史断点，并显示断点相关信息。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/ON5JFKOeTyuSCGTjx5FQ4w/zh-cn_image_0000002743077979.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=0549D71C404B2A6574184CE9561E411EE899F5EA5CDCE1ED211E40B5A62042EC): 切换当前高亮行到上一个历史断点，并显示断点相关信息。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/TY9umR5QQROhWHwW_Eu4xQ/zh-cn_image_0000002713559018.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=8E5E5C2C1A13DA1A69320C535DAD2608D0C411461D73ABBAED66A2D97854AA13): 切换当前高亮行到下一个历史行，并显示历史行相关信息。
  * ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/GSF6HQQIRNGrCq1OuBoQvQ/zh-cn_image_0000002743197931.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=041D413D37BC935CA8D50C63B06F6E509AB693A92AFFE82DF103095F22CE2463): 切换当前高亮行到上一个历史行，并显示历史行相关信息。



#### 时间线

在 Cangjie 调试窗口中，单击 Layout Settings ，勾选 Debug Timeline，打开时间线视图。

时间线视图可以展示反向调试模式下记录的所有停止点（断点+单步），通过时间线拖拽，查看历史停止点信息。

  * 拖动时间线上左右游标可修改选中区域。

  * 在时间线上长按鼠标左键拖动可修改选中区域。

  * 拖动时间线上半部分滑块可修改选择区域。

  * 使用 Ctrl + 鼠标滚轮的方式，放大和缩小选中区域。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/pclAFDVBQPmmcRmW7zNqGQ/zh-cn_image_0000002713399050.png?HW-CC-KV=V1&HW-CC-Date=20260908T090135Z&HW-CC-Expire=86400&HW-CC-Sign=3F05F38E38E438719B204BD78AC7537FA0FFE307E07C1E19D38FD082F119E6E3)




开发者可以单击时间线上的记录点，回到历史停止点位置。鼠标悬浮在停止点上，也可查看停止点的详细信息。
