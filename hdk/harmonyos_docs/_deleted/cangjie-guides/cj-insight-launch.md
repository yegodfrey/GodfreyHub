---
name: cangjie-guides/cj-insight-launch
title: Launch模板基本操作
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-launch
nodePath: 优化应用性能 / 冷启动分析：Launch分析 / Launch模板基本操作
---

# Launch模板基本操作

开发应用过程中，启动速度是很重要的一个指标。如果开发者需要分析启动过程的耗时瓶颈，优化应用的冷启动速度，可使用DevEco Profiler提供的Launch场景分析能力，录制启动过程中的关键数据进行分析，从而识别出导致启动缓慢的原因所在。此外，Launch任务窗口还集成了Time、CPU、Frame场景分析任务的功能，方便开发者在分析启动耗时的过程中同步对比同一时段的其他资源占用情况。

此处仅介绍“Launch”泳道相关内容，集成的Time、CPU、Frame场景分析任务的功能请参考对应任务的章节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/OBRPyb7pSbapbNRl9XqQbQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=9079F4B0C69CDD759FF252293CA61EE3695EEC8C2979AAFDAFD2FE3728ACA30A)

  * 不支持命令拉起的release应用不能进行Launch分析。
  * 锁屏状态下可进行Launch录制。



#### 启动模式

启动模式分为![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/eR8vgJlrTm6t9NRcsj_A2w/zh-cn_image_0000002701659836.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=2D050B2717627F43DF9333C3D1655FB67B0E2004654664CDBECF15A6F72A38A8)自动启动和![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/-Ml4wJokRhmMzhHaAv6haw/zh-cn_image_0000002731379051.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=C152EE930EFBDCBBE43CB4BCBDD9245B9C290FD2DF8B608E7A595C2B07A4EB39)手动启动，可点击图标切换两种不同模式：

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

Launch分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/snUKL0O2RjiCEjo820Sn9Q/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=89F6956B3987B3D6EF1DC59AB9152D87922832244D777E41A98B88E270128871)指定要录制的泳道。

针对调测应用的当前运行情况，DevEco Profiler对其做如下处理：

     * 如选择的是已安装但未启动的应用，在启动该分析任务时，会自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。
     * 如选择的是正在运行的应用，在启动该分析任务时，会先将应用关停，再自动拉起应用，进行数据录制，结束录制后可正常进入解析阶段。

“Launch”泳道显示启动生命周期各阶段的耗时分布情况。

  2. 单击“Launch”泳道上的单个阶段，或框选多个阶段，在下方的“Details”区域中，可查看到所选阶段的耗时统计情况。

展开各阶段的统计信息折叠表，可以看到各个任务的具体耗时信息。单击跳转按钮，可直接跳转至相关线程打点任务中。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/HpReTOgJRNelvRj1V-Bydw/zh-cn_image_0000002701819748.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=0BA236070FA59BD2C9419702F389DE8DF609179BE98F2C80766267750210D4C9)




#### 分析静态资源库加载耗时

  1. 展开“Launch”泳道，其中的“Static Initialization”子泳道展示启动过程中各静态资源库的加载耗时。

  2. 单击单个静态资源库色块，或框选多个静态资源库，下方的“Details”区域展示所选对象的耗时统计信息。

针对耗时超过预期的加载任务，可单击跳转按钮，跳转至相关线程打点任务中进行深度分析。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/HkaspuvAQ_GIRTV9_8EEDw/zh-cn_image_0000002731539027.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=7327029EC0CF073E4E140CBDD41588ED0437476A042E191B19DFA1F2D96963EC)




#### 查看核心线程在CPU Core的运行情况

  1. 展开“Launch”泳道，其中的“Running CPU Cores”子泳道展示启动过程中的关键线程具体运行在哪个CPU核心。

  2. 单击单个进程色块，或框选多个进程，下方的“Details”区域展示所选对象的运行情况统计信息。

单击对应CPU的跳转按钮，可进一步跳转到CPU Core泳道查看详细的调度信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/MiZzfK7sSPWnNjiffPV81g/zh-cn_image_0000002701659838.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=AB1CA356D01BC2CD63C2177E199E65AB6D8CE04104AAFDFA1FBB7F5F1C36C207)




#### 查看启动过程相关的线程Trace数据

  1. 展开“Launch”泳道，除“Static Initialization”、“Running CPU Cores”外，还包含启动过程的关键线程的状态和Trace数据。

  2. 单击单个切片色块，或框选多个切片，可查看所选对象的详情。



  * “Details”区域对所选对象进行树状统计，显示任务的名称、起始时间以及耗时信息。

  * “Thread States”区域展示线程的状态统计信息。

  * “Thread Usage”区域展示线程的使用情况。

  * “Slice List”区域展示所选对象的切片统计信息。

  * “Load Statistics”区域展示所选对象的中载重载信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7/v3/J4roczwZS_ea6PjZm0Gh1A/zh-cn_image_0000002731379053.png?HW-CC-KV=V1&HW-CC-Date=20260903T111624Z&HW-CC-Expire=86400&HW-CC-Sign=DAD1EBEAAFBCC18A5D59D49F79A68441ABC927E00BC83ECA7F9FFAC106B1327B)



