---
name: cangjie-faqs/07-cangjie-applicable-scenarios
title: 仓颉语言适用于哪些HarmonyOS应用开发场景
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/07-cangjie-applicable-scenarios
nodePath: FAQ / 概览 / 仓颉语言适用于哪些HarmonyOS应用开发场景
---

# 仓颉语言适用于哪些HarmonyOS应用开发场景

仓颉语言作为HarmonyOS生态的原生开发语言，适用于以下HarmonyOS应用开发场景：

#### 性能敏感场景

仓颉语言采用静态编译至机器码的方式，具有"编译前端+编译后端+运行时"的全栈垂直优化能力，适合对性能有较高要求的场景，如音视频编解码与处理、大规模数据计算与科学计算、实时数据处理与流式计算等。仓颉运行时采用轻量化设计，具有较低的基础开销；通过低时延高效率的自动内存管理，支持应用以更高帧率、更少内存流畅运行，降低设备功耗。

#### 需要并发处理的场景

仓颉语言采用内存共享的并发模型，提供轻量用户态线程和易用的无锁并发数据结构，适合需要高并发处理的应用场景，如高并发网络服务、多线程密集型IO操作等。

#### 安全敏感场景

仓颉通过静态类型系统和自动内存管理，确保程序内存安全；同时提供多种编译时和运行时检查，包括数组下标越界检查、类型转换检查、数值计算溢出检查、字符串编码合法性检查等，能够及时发现程序运行中的错误。仓颉还通过标准库提供丰富的安全能力，如通过std.crypto支持摘要算法（SHA、SM3等）、非对称加密与签名（RSA、ECDSA、SM2等）、数字证书等加解密能力，适合对安全性有较高要求的场景。

#### 三方库生态支持

仓颉语言提供开箱即用的三方库，覆盖常见开发需求，如通过[markdown4cj](https://gitcode.com/Cangjie-TPC/markdown4cj)实现Markdown解析与渲染、通过[charset4cj](https://gitcode.com/Cangjie-TPC/charset4cj)实现字符集编解码、通过[cangjieJSON](https://gitcode.com/Cangjie-TPC/cangjieJSON)实现JSON编解码、通过[avif-ffi](https://gitcode.com/Cangjie-TPC/avif-ffi)实现avif格式图片解析渲染等，开发者可以直接复用这些三方库加速业务开发。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/KG6YM_3ESnm8NKitu2Dd4w/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120340Z&HW-CC-Expire=86400&HW-CC-Sign=463B39F5D9E152F10C5CAB5F4A091F76497EFEA09E10A684D8EA38497528514E)

  1. 仓颉语言的跨平台能力（Android、iOS等）尚在规划中，当前主要面向HarmonyOS应用开发。
  2. 更多仓颉语言在HarmonyOS应用开发方面的定位与介绍，详情请参见[《鸿蒙编程语言白皮书》](https://developer.huawei.com/consumer/cn/doc/guidebook/programming-language-0000002323920052)。


