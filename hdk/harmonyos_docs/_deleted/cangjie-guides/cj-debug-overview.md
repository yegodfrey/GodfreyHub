---
name: cangjie-guides/cj-debug-overview
title: 调试概述
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-debug-overview
nodePath: 编写与调试应用 / 应用调试 / 调试概述
---

# 调试概述

DevEco Studio提供了丰富的HarmonyOS应用调试能力，支持JS、ArkTS、C/C++、仓颉单语言调试和ArkTS/JS+C/C++、ArkTS/JS+仓颉跨语言调试能力，并且支持三方库源码调试，帮助开发者更方便、高效的调试应用。

仓颉应用调试支持使用真机设备调试。接下来以使用真机设备为例进行说明，详细的调试流程如下图所示：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/IdNavUW8QM-PRm47Ubdezg/zh-cn_image_0000002701819632.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=EDA61019528A9ACBCF6E161A088378FC6377C97F60B9EAB7F29482580CEA7B08)

  1. [配置签名信息](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-ide-signing)：使用真机设备进行调试前需要对HAP进行签名。
  2. [设置调试代码类型](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-debug-configurations#设置调试代码类型)：调试类型默认为ArkTS/JS。
  3. [设置HAP安装方式](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-run-debug-configurations#设置hap安装方式)：选择先卸载应用后再重新安装或覆盖安装。
  4. [启动调试](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-code-debug-start)：启动debug调试或attach调试。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/Yn9PdHxfT02TWr8rc0so7A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111620Z&HW-CC-Expire=86400&HW-CC-Sign=C9FA1985CB43251D05BDBEE89A99B52D5935AB051A06150F9695EAC0D5A3E95C)

启动Native/Cangjie调试（包含“ArkTS/JS + Native”和“ArkTS/JS + Cangjie”混合场景的调试）时，调试功能使用的网络架构模式为Client-Server架构，通过Socket实现客户端与服务端的通信：

  * 客户端会从9995端口开始自动查找可用端口，服务端则在127.0.0.1上启动Socket server，并在此端口等待客户端的连接请求。



单击 “Attach Debugger To Process” 按钮启动“ArkTS/JS + Native”或“ArkTS/JS + Cangjie”混合场景的调试时，ArkTS/JS调试和Native/Cangjie调试并行启动，未就绪的调试器可能因启动延迟无法同步接收停止事件。
