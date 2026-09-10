---
name: cangjie-guides/cj-insight-launch
title: Launch模板基本操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-launch
nodePath: 优化应用性能 / 冷启动分析：Launch分析 / Launch模板基本操作
---

# Launch模板基本操作

开发应用过程中，启动速度是很重要的一个指标。如果开发者需要分析启动过程的耗时瓶颈，优化应用的冷启动速度，可使用DevEco Profiler提供的Launch场景分析能力，录制启动过程中的关键数据进行分析，从而识别出导致启动缓慢的原因所在。此外，Launch任务窗口还集成了Time、CPU、Frame场景分析任务的功能，方便开发者在分析启动耗时的过程中同步对比同一时段的其他资源占用情况。

此处仅介绍“Launch”泳道相关内容，集成的Time、CPU、Frame场景分析任务的功能请参考对应任务的章节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/x2EvV3c0T1KKOA7r9Y5wCA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=80D63667BA062943807E2C7E901BD5DBD6E6FE0FB53E5242C42263920C8AC451)

  * 不支持命令拉起的release应用不能进行Launch分析。
  * 锁屏状态下可进行Launch录制。



#### 启动模式

启动模式分为![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/jJxt3UaXRMGVJIM9hlcdWQ/zh-cn_image_0000002743078073.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=18C031EDFD10EF0A0962A4A66F90082F5B9832D694A9EB9E75D7AE130A636AAA)自动启动和![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e9/v3/S0RJXefBQZCRZyfysybuiQ/zh-cn_image_0000002713559112.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=1A215ECFDE8B1115C91654AE57457636CD34B87085A26F0209E1E2159901BC2E)手动启动，可点击图标切换两种不同模式：

  * 若选择自动启动模式，当开发者使用Launch模板并开始录制时，将主动重启所选应用；
  * 手动启动模式在开始录制时，只会主动终止所选应用，等待界面出现弹窗提示启动应用后，开发者需要手动启动应用。



#### 查看启动过程中各阶段的耗时情况

  1. 创建Launch场景调优分析任务并录制相关数据，操作方法可参见[性能问题定位：深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

在任务分析窗口，可以通过“Ctrl+鼠标滚轮”缩放时间轴，通过“Shift+鼠标滚轮”左右移动时间轴，或使用快捷键W/S放大或缩小时间轴，使用A键/D键可以左右移动时间轴。

将鼠标悬停在泳道任意位置，可以通过M键添加单点时间标签。

鼠标框选要关注的时间段，可以通过“Shift+M”添加时间段时间标签。

在任务分析窗口，可以通过“Ctrl+, ”向前选中单点时间标签，通过“Ctrl+. ”向后选中单点时间标签。

在任务分析窗口，可以通过“Ctrl+[ ”向前选中时间段时间标签，通过“Ctrl+]”向后选中时间段时间标签。

Launch分析支持离线符号解析能力，请参见[离线符号解析](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-time#离线符号解析)。

Launch分析支持动效场景调优，请参见[支持动效场景调优](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-frame#支持动效场景调优)。

Launch分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/vpL_95f-RGGSuRSqOj8f1A/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=E4A942D9DCECDBD40A965984740879182596AC2985FB5B2BB5587313D7AB61F3)指定要录制的泳道。

针对调测应用的当前运行情况，DevEco Profiler对其做如下处理：

     * 如选择的是已安装但未启动的应用，在启动该分析任务时，会自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。
     * 如选择的是正在运行的应用，在启动该分析任务时，会先将应用关停，再自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。

“Launch”泳道显示启动生命周期各阶段的耗时分布情况。

  2. 单击“Launch”泳道上的单个阶段，或框选多个阶段，在下方的“Details”区域中，可查看到所选阶段的耗时统计情况。

展开各阶段的统计信息折叠表，可以看到各个任务的具体耗时信息。单击跳转按钮，可直接跳转至相关线程打点任务中。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/Nvk-9_tkTPaTBUTTIswikQ/zh-cn_image_0000002743198025.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=596F3A726C44B3E11BC1A00110F15475454ED47EEE1ECD5AA413EE14DC09B188)




#### 分析静态资源库加载耗时

  1. 展开“Launch”泳道，其中的“Static Initialization”子泳道展示启动过程中各静态资源库的加载耗时。

  2. 单击单个静态资源库色块，或框选多个静态资源库，下方的“Details”区域展示所选对象的耗时统计信息。

针对耗时超过预期的加载任务，可单击跳转按钮，跳转至相关线程打点任务中进行深度分析。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/P3mgKnAlSxS-nEbWUUEA1w/zh-cn_image_0000002713399144.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=33F136E7D80BE263224043AADFC94BBDD23D4D177EFC235BF5388A377259DD30)




#### 查看核心线程在CPU Core的运行情况

  1. 展开“Launch”泳道，其中的“Running CPU Cores”子泳道展示启动过程中的关键线程具体运行在哪个CPU核心。

  2. 单击单个进程色块，或框选多个进程，下方的“Details”区域展示所选对象的运行情况统计信息。

单击对应CPU的跳转按钮，可进一步跳转到CPU Core泳道查看详细的调度信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/pV2UFPjbS66Q-mbM0qAb9Q/zh-cn_image_0000002743078075.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=699864C7F0DC817E406127C4965071ED900C0E722C3EAF7A354E80B4C72442ED)




#### 查看启动过程相关的线程Trace数据

  1. 展开“Launch”泳道，除“Static Initialization”、“Running CPU Cores”外，还包含启动过程的关键线程的状态和Trace数据。

  2. 单击单个切片色块，或框选多个切片，可查看所选对象的详情。



  * “Details”区域对所选对象进行树状统计，显示任务的名称、起始时间以及耗时信息。

  * “Thread States”区域展示线程的状态统计信息。

  * “Thread Usage”区域展示线程的使用情况。

  * “Slice List”区域展示所选对象的切片统计信息。

  * “Load Statistics”区域展示所选对象的中载重载信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/aIF5J3MhR4SektmuvOuiGA/zh-cn_image_0000002713559114.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=7422226B3DE8C4003C659D633F80E32866BC2C98D02D8E76B44203F3507814A1)



