---
name: cangjie-guides/cj-insight-profiler-introduction
title: 性能优化过程简介
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-introduction
nodePath: 优化应用性能 / 使用Profiler进行性能调优 / 性能优化过程简介
---

# 性能优化过程简介

#### 流程概览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/2wB8Cp7bQbmqgDQcGplM8A/zh-cn_image_0000002731538971.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=189D60482784D01C1A8726F49473A648728BAF3E1232B39F9ED6144B2F9152B0)

在开发应用时，开发者会对应用的运行情况有一个预期指标。当应用在某些方面不能满足预期的指标或者表现不佳时，意味着应用可能存在性能问题，需要对应用进行性能优化，以达到预期。

应用的性能优化是一个不断持续的周期性的过程，需要在应用开发过程中观察应用的运行表现，来识别性能瓶颈。比如通过运行时数据来定界定位性能问题，定位根因后修复代码并验证优化措施的可行性。循环往复直到应用满足性能指标。

Profiler也遵循以上流程，在使用Profiler进行性能优化时，可以参考以下过程：

  1. 使用“Realtime Monitor”监控设备的各项资源使用情况，识别定界潜在的性能瓶颈及热点区域，例如CPU占用超过预期、内存异常增大等。
  2. 创建深度分析任务，通过详细的应用运行时数据，例如trace等信息，来分析并定位性能问题出现的根因。
  3. 根据性能分析的结果优化代码。
  4. 再次使用“Realtime Monitor”查看各项资源的使用情况是否符合预期，来验证代码修改的可行性。


