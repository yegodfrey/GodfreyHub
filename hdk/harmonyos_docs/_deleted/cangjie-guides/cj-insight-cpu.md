---
name: cangjie-guides/cj-insight-cpu
title: CPU活动分析：CPU分析
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-cpu
nodePath: 优化应用性能 / CPU活动分析：CPU分析
---

# CPU活动分析：CPU分析

开发者可使用DevEco Profiler的CPU场景调优分析。在应用运行时，实时显示CPU使用率和线程的运行状态，了解指定时间段内的CPU资源消耗情况，查看系统的关键打点（例如图形系统打点、应用服务框架打点等），进行更具针对性的优化。

#### 查看各CPU使用情况

  1. 创建CPU分析任务并录制相关数据，操作方法请参见性能问题定位：[深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)，或在会话区选择**Open File** ，导入历史数据。

CPU分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/ApZxjCC3QWS0v4oCIXOrLQ/zh-cn_image_0000002731538959.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=7CE769B446C191CBB1F390491C974F791E26492A524CEA5C3A7E8A94C9F7BB1D)指定要录制的泳道。

  2. “CPU Core”泳道显示当前选择调优应用的CPU的使用率。

可在“CPU Core”右侧的options下拉列表中选择显示内容：

     * Slice and Frequency：每个子泳道包含时间片和频率两部分，时间片显示占用该CPU核心的进程、线程。

     * Usage and Frequency：每个子泳道包含CPU核心使用率和频率两部分。

框选主泳道，可对所选时间段内的CPU使用情况进行汇总统计，可查询多时间片的进程维度统计信息、线程维度状态统计信息、线程状态统计信息，以及所有时间片的数据统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/LQ4S0LcZT2u31N0ZAkpPGg/zh-cn_image_0000002731379029.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=97123CF62EB78DB9A61619840119C56496557FED36D21E70A079F8E8C94A43BE)

  3. 将其展开，子泳道显示各CPU核心调度信息(Slice)、各CPU核心频率信息(Frequency)以及各CPU核心使用率信息(Usage)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/4DYec6GATKeb16h3fOVSZA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=21421A19D979771A6FD786CC76A272E8C107D773CDC693481824E127065A8846)

将鼠标悬浮在某时间片上时，能够置灰非同进程时间片，通过此方法可以确定时间片的关联性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f5/v3/lIt56xAeQWmln0KFgger5w/zh-cn_image_0000002701819726.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A25077013C485C8EF6EBA3A4630D4C4BB3B243FB6413781264DF46039B1EE5C5)

  4. 指定时间片，查看统计信息。

     * 单击某个运行状态的时间片，可查询这个时间片的基本运行信息及调度时延信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/KcK_yZ2IQzqa1mf5f4zWEw/zh-cn_image_0000002731539005.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=697BFAEFE71BE7B6850EBD858637932005E856962BBAA0CE5B9D99FC055D6EAB)

     * 框选多个时间片，则可查询多时间片的进程维度统计信息以及所有时间片的数据统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/xI7VtEqHT4yPqQ-bc9RuKw/zh-cn_image_0000002701659816.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=A69D7D59E062575EC0E0E545BF1BFE230AAFF3B6AD67461E7485F385B3F7C864)

     * 开启"View Integrated Scheduling Chain"后，点击CPU时间片泳道的节点可以查看某一个CPU运行线程的完整唤醒调度链。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/ScGEEI4fQsWrHwyxdMoKNg/zh-cn_image_0000002731379031.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=1A90DE1CE1F0B63B5FF9699861D1782FD70D8A0539840BF0C470781965FAD6E1)




#### 查询进程详情

进程泳道显示进程对各CPU核心的占用情况。展开进程泳道，显示进程下的线程列表以及线程的运行状态。

  * 单击运行状态的时间片，显示线程在该片段的运行详情，包括起始时间(Start Time)、持续时长(Duration)、运行状态(State)、所属进程(Process)，支持跳转到上个或者下个线程运行状态(Next State)，支持跳转到唤醒线程(WakeUp Tid)等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/uTeZRZRbTNK7CjhR8mJh4w/zh-cn_image_0000002701819728.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=C57FE5B6DEB68B5BD89DAF6E52F198C2585318A222A8384CE9D98E42F3E52C9C)

  * 框选Thread泳道中多个运行状态的时间片，可查看此时间段内的不同运行状态的线程的统计信息，包括总耗时时长、最大耗时、最小耗时、平均耗时、处于当前状态的线程数量以及线程中的中载重载数据统计。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/08/v3/tN93QfW9RJGvSJWZ7HLysQ/zh-cn_image_0000002731539007.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=390314E9141BD1715E9AE7CE4F38720BF900FAFE5A33091AEA21E04A6872C18F)

  * 框选中应用进程Process主泳道，可查看此时间段内该进程下的线程并行度统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/DFD6mD_bQiKe2HRpjc6DRA/zh-cn_image_0000002701659818.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=0CB8AD4621FE1AEDE79F70DE27C72909394939E6CB0DC69FA3324B2E69F9A9C9)




#### 查看Trace详情

当存在Trace任务时，可在对应的线程泳道查看到当前线程已触发的Trace任务层叠图。选择待查询的Trace。

  * 点选泳道中的Trace片段，可查看单个Trace详情，包括名称(Name)、起始时间(Start Time)、持续时长(Duration)、深度(Depth)等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c1/v3/hr_JZxYXTs-O_0gf3dgeBQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=0DB0F8B0899F7497B6A1581CEF4FA77D4E61D9AC4712EA2B621A2241563CAA53)

    * 如果开发者对线程进行了自定义打点，在此处亦可查看到对应的User Trace打点信息。
    * 从所在线程名称可分辨当前Trace的类型，系统Trace对应的线程名称为“线程名+线程号”，User Trace对应的线程名称为“打点任务名”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/wB8b7vR1RICl3DIgIHGmPw/zh-cn_image_0000002731379033.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=40FBA5876C3C91983748E8D6684308571A3C938B383430B7CF018C932EA2406A)

  * 框选多个Trace片段，可查看到Trace统计信息列表，包括Trace名称(Name)、此类Trace的总耗时(Total Duration)、单个Trace的平均耗时(Avg Duration)以及该时间段内该类Trace的触发次数(Occurrences)等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/pFdm0AmCRF25pNDCU-adOA/zh-cn_image_0000002701819730.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=009329556B798E6D8A8EEB0957673CD4387D5B7577C3DC51943F9DE4B9B5E9E3)




#### 全局搜索指定CPU数据

Profiler为CPU分析数据提供了全局搜索能力。可选择的搜索类型如下：

  * 首层搜索类型为“ALL”时，可输入任何字符串进行搜索。

  * 首层搜索类型为“CPU Core”时，可结合二层搜索类型（进程名、进程ID、线程名、线程ID），输入对应的目标进行搜索。

  * 首层搜索类型为“Process”时，可输入任务名称进行搜索。

使用搜索框的 "<"、">" 按键可依次显示返回结果的详细内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/gbbo5z2TRYmA2ngsunxcIQ/zh-cn_image_0000002731539009.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=11E7C2AB090B386793D841D11B9753C01833E00924D7A1816C27218B96E87321)



