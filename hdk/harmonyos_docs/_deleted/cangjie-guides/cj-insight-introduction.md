---
name: cangjie-guides/cj-insight-introduction
title: 调优工具简介
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction
nodePath: 优化应用性能 / 调优工具简介
---

# 调优工具简介

为了帮助开发者更高效地分析性能问题，DevEco Studio提供了场景化调优工具DevEco Profiler，旨在为开发者带来高效的、可直通代码行的调优体验。

使用DevEco Profiler，开发者可以完成在不同应用模型和场景下的完整性能数据采集，这些数据将帮助开发者洞悉应用在相应场景下的运行细节。

DevEco Profiler工具的整体设计遵循了Top-Down的设计理念和数据展示范式。该工具提供了深入具体函数运行热点、CPU调度细节的分析能力，帮助用户搭建HarmonyOS应用性能模型。被采集的数据经由工具分析，由浅到深地以一条条泳道的形式直观地呈现在界面上。

DevEco Profiler聚焦性能分析靶心，围绕着Top-Down的思路深入展开分析。其各个局部功能具备高度的整体一致性，方便开发者在不同场景下快速上手类似的功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/GAZvYUg2Td6AlbQvB2De8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1F727135A801F7E589E00067965F70440871A5FCE8684612C18B029482DA63DE)

Profiler工具不支持使用模拟器进行调优。

开发者可以通过如下三种方式打开Profiler：

  * 在DevEco Studio顶部菜单栏中选择“View -> Tool Windows -> Profiler”。
  * 在DevEco Studio底部工具栏中单击“Profiler”。
  * 按“Double Shift”或者“Ctrl+Shift+A”打开搜索功能，搜索“Profiler”。



详细介绍请参照：

  * **[整体界面布局及概念](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-concept)**  

  * **[会话区](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-session)**  

  * **[数据区](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction-data)**  



