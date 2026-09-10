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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/jKH9eZnjSxWs2B31ox3OIg/zh-cn_image_0000002701659820.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=D814AB2DFE7140668E3EAD900F5DD7C9D4AB58F63F8E5C8174A124A01600D402)

  3. 将“Counters”泳道展开，子泳道显示GPU各项活动信息，包括性能指标采集视图（counters_gather）、GPU执行命令的频率（GPU Frequency）、GPU执行命令的持续时间（GPU Duration）等。除counters_gather外，其他子泳道信息可参考[GPU Counters](https://developer.huawei.com/consumer/cn/doc/Tools-Guides/gpu-counters-0000001886127538)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/m3gA3I6JTk2fHOy9nUSwNw/zh-cn_image_0000002731379035.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=F102DFD69891C4C38F38140A9A93F8908559C5C80C7B994956CCFA7F137FE58C)

  4. counters_gather泳道显示线程对各CPU核心的占用情况。单击运行状态的时间片段，显示线程在该时间片段的起始时间（Start Time）、持续时长（Duration）、运行状态（State）、频率（Freq）、线程优先级（Priority）、所属进程（Process）、所属线程（Thread）、上一运行状态（Previous State）、下一运行状态（Next State），并且支持跳转到上个或者下个线程运行状态。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/aRxor1YsQDy8XSe0qxG8vw/zh-cn_image_0000002701819732.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5DDED5D3B662CBA8EEB132C3DEE8087B831A13BD6504E0F0B265719349743D0D)

  5. 框选counters_gather泳道，可查看此时间段内的统计信息，包括线程状态统计信息（Thread States）、CPU单线程使用情况（Thread Usage）、线程中的中载重载数据统计（Load Statistics）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/qhFlbUMsRTWIZMUctnQ93Q/zh-cn_image_0000002731539011.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=5B7A663BE3879B815502967D2B4127EA14EAD7AA3ABA08C127C76E3D9A842A05)



