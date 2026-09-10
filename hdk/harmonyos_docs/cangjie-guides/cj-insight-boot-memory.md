---
name: cangjie-guides/cj-insight-boot-memory
title: 分析启动内存
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-boot-memory
nodePath: 优化应用性能 / Native内存泄漏分析：Allocation分析 / 分析启动内存
---

# 分析启动内存

应用在启动过程中对内存资源的占用情况，是开发者较为关心的问题。DevEco Profiler的Allocation分析任务，提供了启动内存分析能力，协助开发者优化启动过程的内存占用。

针对调测应用的当前运行情况，DevEco Profiler对其做如下处理：

  * 如选择的是已安装但未启动的应用，在启动该分析任务时，会自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。
  * 如选择的是正在运行的应用，在启动该分析任务时，会先将应用关停，再自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。



具体操作方法为：在任务列表中单击Allocation任务后的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/0Czm6tNPR2OIKY_HFWC9UQ/zh-cn_image_0000002713399110.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=A17AFFF8CFB2127AED1B0863E89446D9499EE03D9B57C1B0BE72D0169CEF0B4B)按钮。

在分析结束后，呈现出的数据类型以及相应的处理方法，与非启动过程的分析相同。
