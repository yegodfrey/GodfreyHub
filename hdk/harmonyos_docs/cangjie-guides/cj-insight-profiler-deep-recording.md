---
name: cangjie-guides/cj-insight-profiler-deep-recording
title: 性能问题定位：深度录制
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording
nodePath: 优化应用性能 / 使用Profiler进行性能调优 / 性能问题定位：深度录制
---

# 性能问题定位：深度录制

开发者可针对不同的性能问题场景选择不同模式的分析任务，对应用进行深度分析。下文主要介绍了如何创建深度分析任务并进行录制。

当前支持CPU调优场景，通过深度采集CPU内核相关数据，直观地呈现出当前选择调优应用进程的CPU使用率、CPU各核心时间片调度信息、CPU各核心频率信息、CPU各核心使用率信息、系统各进程的CPU使用情况、线程状态及Trace信息等。详细步骤如下：

  1. 选择场景模板，创建会话：

新建任务的入口，Profiler提供CPU场景化分析任务类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/76/v3/UExXudZfQOCY9EEad8IYVA/zh-cn_image_0000002743078021.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=0673655C757CE5EC8851BF360537E3B5DA292E44560929B5AF382583F4FCB327)

① ：在设备列表中选择设备。

② ：在进程列表中选择要调测的应用（可以是正在运行的应用，也可以是已安装但未启动的应用）。

③ ：在Profiler主界面的新建任务区域，单击要创建的场景调优分析任务类型，并单击“Create Session”。创建后的分析任务，会显示在界面左侧的任务列表中。

④ ：调优详情，显示具体的调优内容。

  2. 配置并确认会话环境：

在右边录制详情区域，工具控制栏上有很多小图标，鼠标放上去会有一些功能提示，可以添加一些录制选项，各泳道区域也有下拉框选项，下拉选择不同的设置可以调整录制功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/0B4g_NiiT2ae8qnakvsU1Q/zh-cn_image_0000002713559060.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=F6D79A5DA014D3E2FB27D531BF133C6BED64858A647CA7B5B3B05EE12CF3CE04)

  3. 启动录制，复现性能劣化场景：

单击任务窗口左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dd/v3/HXPs1fgAQjCDx-q7me8hyw/zh-cn_image_0000002743197973.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=78C03A7C4933E24FA569D66EB5792673F477D8E1F9035EEBA80DA514ADAF52C6) ，启动录制，也可以选择左侧的任务列表中的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/ybyQmAVfRwaJzgo7cVFOcA/zh-cn_image_0000002743197953.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=CD52452C25CC27065149349C28D040CF367BAFABA112CE949E1203BF7EB22F02)，启动录制后，等待任务状态由“initializing”变为“recording”。录制过程中整个Profiler不能再点击其他的模板进行操作，如果想录制其他模板可以结束本次录制重新选择其他模板开始录制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/gqy_orbFT6uK_zT5FuXFxQ/zh-cn_image_0000002713399092.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=DB11EE4E78FD0A1705A7E690AD1692AA79BEDFF455CEAC1AAFC3B87E8216512E)

  4. 录制场景结束，停止录制：

在调优设备侧操作APP，执行要验证的操作，复现设备性能问题。单击该任务的停止按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/o9_-uzu-S4OKaQ8sQDbBdg/zh-cn_image_0000002743078023.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=8A9FD761491D4D11CC3737310587D7A08998A994E216CA02424C2D6E2AC54B66) ，进入数据分析阶段，所有泳道任务状态由“analyzing”变为“rendering”，分析结束，右侧调优详情区域显示具体调优内容，分析过程可能包含大量的数据，需要等待一段时间，请耐心等待解析完成。



