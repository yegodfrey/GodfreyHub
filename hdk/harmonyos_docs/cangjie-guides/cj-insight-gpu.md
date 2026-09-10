---
name: cangjie-guides/cj-insight-gpu
title: GPU活动分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-gpu
nodePath: 优化应用性能 / GPU活动分析
---

# GPU活动分析

DevEco Profiler提供GPU模板展示不同GPU硬件模块利用率的详细信息，这些信息可用于识别GPU利用率低、执行图形和计算工作负载性能瓶颈的根本原因。

#### 操作步骤

  1. 创建GPU分析任务并录制相关数据，操作方法请参见性能问题定位：[深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)。

GPU分析任务支持在录制前单击指定要录制的泳道。单击工具控制栏中的按钮，可以设置采样时间间隔（Sampling Interval），可设置范围为1ms~1000ms，默认为10ms。

  2. “Counters”泳道显示当前设备GPU的使用率，“CJ Callstack”、“Callstack”、“CPU Core”等泳道信息请参考[基础耗时：Time分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time)和[CPU活动分析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-cpu)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/kYF_LYRjSG29kRISOvQKMQ/zh-cn_image_0000002743078057.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=7BAB6AF11AFC6650F7435B0F370D706E428529667DAD9E92AA05D3B963EA207A)

  3. 将“Counters”泳道展开，子泳道显示GPU各项活动信息，包括性能指标采集视图（counters_gather）、GPU执行命令的频率（GPU Frequency）、GPU执行命令的持续时间（GPU Duration）等。除counters_gather外，其他子泳道信息可参考[GPU Counters](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/gpu-counters-0000001886127538)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/mV0OYub4Riy3frVXdPpROA/zh-cn_image_0000002713559096.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=EA54732EA1F3795BCAB98B86B225AE517AECC9ECFE70DB1F4A59045CFB58E2B8)

  4. counters_gather泳道显示线程对各CPU核心的占用情况。单击运行状态的时间片段，显示线程在该时间片段的起始时间（Start Time）、持续时长（Duration）、运行状态（State）、频率（Freq）、线程优先级（Priority）、所属进程（Process）、所属线程（Thread）、上一运行状态（Previous State）、下一运行状态（Next State），并且支持跳转到上个或者下个线程运行状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/D1wKYJ7xRlWFXPhHpEiH-w/zh-cn_image_0000002743198009.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=8B7E81B272EC753F4560B8FD4FA52BC8BD96036D82ABE8E821D38BA64F3C1C2E)

  5. 框选counters_gather泳道，可查看此时间段内的统计信息，包括线程状态统计信息（Thread States）、CPU单线程使用情况（Thread Usage）、线程中的中载重载数据统计（Load Statistics）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/Fk9aHTOjRia1Dg-gss0nJQ/zh-cn_image_0000002713399128.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D48A818BABFC3EBF35A6DF3A57F79619621F955960630FA3DFE1A701BFA2041C)



