---
name: cangjie-guides/cj-cross_compilation
title: 交叉编译
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-cross_compilation
nodePath: 基础入门 / 学习仓颉语言 / 编译和构建 / 交叉编译
---

# 交叉编译

开发者编码的仓颉程序通过交叉编译将其运行于不同体系架构平台上，仓颉支持交叉编译的场景：

编译平台 | 目标平台 | 常用场景/工具 | 对应 SDK 安装包  
---|---|---|---  
Windows (x64) | OpenHarmony/HarmonyOS | OpenHarmony/HarmonyOS 设备或模拟器 | 请至鸿蒙开发者官网进一步了解。  
macOS (aarch64) | OpenHarmony/HarmonyOS | OpenHarmony/HarmonyOS 设备或模拟器 | 请至鸿蒙开发者官网进一步了解。  
Linux (x64) | OpenHarmony/HarmonyOS | OpenHarmony/HarmonyOS 设备或模拟器 | 请至鸿蒙开发者官网进一步了解。  
  
#### 支持的编译目标和目标三元组名称

目标三元组名称是通用的用于指定编译平台或目标的名称，通常由架构、供应商、系统三部分组成，供应商在不具备二义性的情况下通常可以省略。当前仓颉编译器支持以下编译目标，可以通过使用 cjc 的 --target 选项指定特定的三元组名称来为指定平台生成二进制程序（需要使用支持的 SDK 安装包）。

编译目标名称 | 其他别名 | 编译目标说明  
---|---|---  
x86_64-linux-gnu | x86_64-unknown-linux-gnu | x86_64 架构 Linux 平台  
aarch64-linux-gnu | aarch64-unknown-linux-gnu, arm64-unknown-linux-gnu, arm64-linux-gnu | aarch64 架构 Linux 平台  
x86_64-windows-gnu | x86_64-pc-windows-gnu, x86_64-unknown-windows-gnu, x86_64-pc-w64-mingw32, x86_64-w64-mingw32 | x86_64 架构 Windows 平台  
aarch64-apple-darwin | arm64-apple-darwin | arm64 架构 macOS 平台  
x86_64-apple-darwin | - | x86_64 架构 macOS 平台  
x86_64-linux-ohos | x86_64-unknown-linux-ohos | x86_64 架构 OpenHarmony/HarmonyOS 平台  
aarch64-linux-ohos | aarch64-unknown-linux-ohos, arm64-unknown-linux-ohos, arm64-linux-ohos | aarch64 架构 OpenHarmony/HarmonyOS 平台
