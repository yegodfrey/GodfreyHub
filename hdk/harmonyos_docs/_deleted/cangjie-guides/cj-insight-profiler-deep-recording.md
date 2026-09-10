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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/2K8_xQ1wSZOWGQIiEGVi-g/zh-cn_image_0000002701659784.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1AFBF7FCFE57233B663CAF1D21DE4690791E878F6CFEB86EB43170E07C9AB7E5)

① ：在设备列表中选择设备。

② ：在进程列表中选择要调测的应用（可以是正在运行的应用，也可以是已安装但未启动的应用）。

③ ：在Profiler主界面的新建任务区域，单击要创建的场景调优分析任务类型，并单击“Create Session”。创建后的分析任务，会显示在界面左侧的任务列表中。

④ ：调优详情，显示具体的调优内容。

  2. 配置并确认会话环境：

在右边录制详情区域，工具控制栏上有很多小图标，鼠标放上去会有一些功能提示，可以添加一些录制选项，各泳道区域也有下拉框选项，下拉选择不同的设置可以调整录制功能。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/FTxEEKOQTNm8CHBh1npgiw/zh-cn_image_0000002731378999.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A7EDF27568170F7B2920F8DD3B6569889967A70F9E086AAA59E8813C68800A1B)

  3. 启动录制，复现性能劣化场景：

单击任务窗口左上角的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/r8IDl98qSiSGiDvfThFvlg/zh-cn_image_0000002701819696.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=79B68EAADFA0B11659FF2C0ED2C402538DD13D361F75F1BE158435A3686C84E9) ，启动录制，也可以选择左侧的任务列表中的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/vrFwfuP8Q3yvwultpuf_zQ/zh-cn_image_0000002701819674.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=0659EAF93D910AC75E051C7C27A21E455A68637D44D8321F0F79D6E121831BB7)，启动录制后，等待任务状态由“initializing”变为“recording”。录制过程中整个Profiler不能再点击其他的模板进行操作，如果想录制其他模板可以结束本次录制重新选择其他模板开始录制。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/5iJ2NoOaRHWVt6VSyfe8JA/zh-cn_image_0000002731538975.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=FC794961E13BDC06CACB48437457789E2DD51D7246A013341720E8B97F467673)

  4. 录制场景结束，停止录制：

在调优设备侧操作APP，执行要验证的操作，复现设备性能问题。单击该任务的停止按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/BEejTHLDQNeAk0SJUKYFOg/zh-cn_image_0000002701659786.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=68B2FBEF1D646C141B642BD5CDDC24F37FDC8098F77097D7513544FECBF48C09) ，进入数据分析阶段，所有泳道任务状态由“analyzing”变为“rendering”，分析结束，右侧调优详情区域显示具体调优内容，分析过程可能包含大量的数据，需要等待一段时间，请耐心等待解析完成。



