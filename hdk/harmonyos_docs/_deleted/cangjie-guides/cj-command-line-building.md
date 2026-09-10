---
name: cangjie-guides/cj-command-line-building
title: 搭建流水线
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-command-line-building
nodePath: 命令行工具 / 搭建流水线
---

# 搭建流水线

使用仓颉语言编写的HarmonyOS应用程序，除了可以在DevEco Studio中一键式构建外，还可以使用命令行工具调用Hvigor任务进行构建。通过命令行的方式构建应用，可用于构筑CI（Continuous Integration）流水线，按照计划时间自动化的构建HAP/APP、签名、安装运行等操作。

通过命令行方式构建应用，可在Windows、Linux和macOS下调用相应命令来执行，本文将以Linux系统为例进行讲解，包括准备构建环境、构建HAP、签名运行等操作。在调用命令行任务上，Windows/macOS系统与Linux系统没有区别，仅在搭建构建环境上存在差异。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/aj0Eg3MXRQKi422irZe4bw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=79826A050622B61479E3DE27E54D50E7D42B9C5864F4BFBF3F41C5925DDF3A3A)

  * 如果开发者所使用的电脑处于完全无网络的环境中，请参见[离线环境配置指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-no-network)。
  * HarmonyOS SDK已嵌入命令行工具中，无需额外下载配置。
  * 仓颉SDK未嵌入命令行工具中，需额外配置仓颉SDK。
  * 请在执行命令行之前，保证当前工程是可信任的，确保安全编译。



#### 系统平台要求

  * Linux：Linux x86 64位操作系统
  * GLIBC：2.28或更高版本
  * 内存：推荐使用16GB及以上，最小8GB
  * 硬盘：100GB及以上



#### 预置条件

#### [h2]配置仓颉SDK

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/CBdulTR2QEiprZ8VINaPSw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=5357B41D0F41A560580B80EC7D7B15214F1E96A256CC51B40866C7A6C98E6896)

本文中x.x.x.x为软件的具体版本号，请根据实际情况修改。

  1. [下载仓颉SDK](https://developer.huawei.com/consumer/cn/download/deveco-studio-cangjie-plugin)。各平台需要下载的软件包如下：

     * Linux平台（x86_64架构）：cangjie-linux-x86-ohos-x.x.x.x.zip
     * Windows平台（x86_64架构）：devecostudio-cangjie-plugin-windows-x.x.x.x.zip
     * macOS平台（ARM架构）：devecostudio-cangjie-plugin-mac-arm-x.x.x.x.zip
     * macOS平台（x86_64架构）：devecostudio-cangjie-plugin-mac-x.x.x.x.zip
  2. 如果是Windows平台或macOS平台，需要解压上述仓颉插件获得仓颉SDK软件包（可以手动解压，也可以在命令行终端参考如下命令解压）。
         
         unzip devecostudio-cangjie-plugin-windows-x.x.x.x.zip

解压后获得如下仓颉SDK软件包：

     * Windows平台（x86_64架构）：harmonyos-cangjie-sdk-windows.zip
     * macOS平台（ARM架构）：harmonyos-cangjie-sdk-mac-arm.zip
     * macOS平台（x86_64架构）：harmonyos-cangjie-sdk-mac.zip
  3. 解压仓颉SDK软件包。假设创建/home/cj目录，并在其下解压仓颉SDK，参考命令如下：
         
         mkdir /home/cj
         cd /home/cj
         unzip cangjie-sdk-linux-x64-x.x.x.x.zip

  4. 配置仓颉SDK环境变量。
         
         export DEVECO_CANGJIE_PATH=/home/cj/cangjie




#### 后续操作

使用命令行工具调用Hvigor任务构建仓颉开发的应用程序，除了需要额外配置上述所说的仓颉SDK，总体流程和构建ArkTS开发的应用相同。其他预置条件、构建应用、运行应用、示例脚本请参见[搭建流水线](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-command-line-building-app)，以完成仓颉应用的构建流水线搭建。
