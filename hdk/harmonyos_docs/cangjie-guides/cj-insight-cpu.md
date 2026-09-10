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

CPU分析任务支持在录制前单击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/67/v3/AHN2mF73Sxan_W0wVip7UQ/zh-cn_image_0000002713399076.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=429776D2B162D1F8EEDB27FFB6F2C79327E0289B6602F66467EB2E6EA86B3B52)指定要录制的泳道。

  2. “CPU Core”泳道显示当前选择调优应用的CPU的使用率。

可在“CPU Core”右侧的options下拉列表中选择显示内容：

     * Slice and Frequency：每个子泳道包含时间片和频率两部分，时间片显示占用该CPU核心的进程、线程。

     * Usage and Frequency：每个子泳道包含CPU核心使用率和频率两部分。

框选主泳道，可对所选时间段内的CPU使用情况进行汇总统计，可查询多时间片的进程维度统计信息、线程维度状态统计信息、线程状态统计信息，以及所有时间片的数据统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/uYnenmOHR8mbGmRurIpsCw/zh-cn_image_0000002713559090.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=5F46A3007BDD8A32663DB5E7ADC302CFD2E8DAB1C0F932CA3F8859C989C775E6)

  3. 将其展开，子泳道显示各CPU核心调度信息(Slice)、各CPU核心频率信息(Frequency)以及各CPU核心使用率信息(Usage)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/W7xj31goRdSS0QpeVCvOOg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=0CC49AB0C6048D751C84E4DD53435F46B92537501574777BD8E9C6EDA8ADE789)

将鼠标悬浮在某时间片上时，能够置灰非同进程时间片，通过此方法可以确定时间片的关联性。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/cwcmga-yTcq9YpymAcWdig/zh-cn_image_0000002743198003.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=1814E29ADCE7A7013E29B7AD9BF0EA46A6A0DA1BF3FECE44441AAB25A59B75B7)

  4. 指定时间片，查看统计信息。

     * 单击某个运行状态的时间片，可查询这个时间片的基本运行信息及调度时延信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e7/v3/uGvKYfRiTZ-3ujDO2Juicg/zh-cn_image_0000002713399122.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=AFC96EBC0D8C062720B49962F2601C5D3CC1672A6F99FD0B112C655A8641B9B6)

     * 框选多个时间片，则可查询多时间片的进程维度统计信息以及所有时间片的数据统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/KaDcBkojSbqHZGe8ezXQCg/zh-cn_image_0000002743078053.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=2DCBD3E038933A9533524D701513659FE4BE58AE70CCA610399ADFE4E8D6567F)

     * 开启"View Integrated Scheduling Chain"后，点击CPU时间片泳道的节点可以查看某一个CPU运行线程的完整唤醒调度链。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/ExsHBOW5ShKuEzPDaj_rKA/zh-cn_image_0000002713559092.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=A0AF1E86AF24EE9DD5920A3DE9EA89554A2C8CFED48533CB9B8922ACBF047D63)




#### 查询进程详情

进程泳道显示进程对各CPU核心的占用情况。展开进程泳道，显示进程下的线程列表以及线程的运行状态。

  * 单击运行状态的时间片，显示线程在该片段的运行详情，包括起始时间(Start Time)、持续时长(Duration)、运行状态(State)、所属进程(Process)，支持跳转到上个或者下个线程运行状态(Next State)，支持跳转到唤醒线程(WakeUp Tid)等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/5M0xPTeNTtqFpraoifheLw/zh-cn_image_0000002743198005.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=05DF76519CE3EC6C73C98C370E856CBB793A851D9BFB1C594A5F80D99DE18C9F)

  * 框选Thread泳道中多个运行状态的时间片，可查看此时间段内的不同运行状态的线程的统计信息，包括总耗时时长、最大耗时、最小耗时、平均耗时、处于当前状态的线程数量以及线程中的中载重载数据统计。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/MFO5CJ66SVmOXJoJH-iJXQ/zh-cn_image_0000002713399124.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=70C31BA8B906435ACC1AC3E7D38EE285A9D4832F6FB12BAF5FF29572EFDE989C)

  * 框选中应用进程Process主泳道，可查看此时间段内该进程下的线程并行度统计信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/r6yH7JYxSEW6ixaLhA8cSQ/zh-cn_image_0000002743078055.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=D30DC83F4CCB4088659EB308DB3992D5C5204247494A61D392FAD6C5EF840158)




#### 查看Trace详情

当存在Trace任务时，可在对应的线程泳道查看到当前线程已触发的Trace任务层叠图。选择待查询的Trace。

  * 点选泳道中的Trace片段，可查看单个Trace详情，包括名称(Name)、起始时间(Start Time)、持续时长(Duration)、深度(Depth)等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/qqtWRVeoTw-Sk-610gaELw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=C25B05FBE68D6E4A030D71C231A522C023CBB1C3BAF87B5E05AAD81C6F2B5F14)

    * 如果开发者对线程进行了自定义打点，在此处亦可查看到对应的User Trace打点信息。
    * 从所在线程名称可分辨当前Trace的类型，系统Trace对应的线程名称为“线程名+线程号”，User Trace对应的线程名称为“打点任务名”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/55UPIe0aToS-E3w13GMNbw/zh-cn_image_0000002713559094.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=476ED786E33382A22730A581B0B7E23D00E824B958AD913F3533D9F0A9EF0172)

  * 框选多个Trace片段，可查看到Trace统计信息列表，包括Trace名称(Name)、此类Trace的总耗时(Total Duration)、单个Trace的平均耗时(Avg Duration)以及该时间段内该类Trace的触发次数(Occurrences)等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/l-zo7CyPQo6t2fKNxXEDFg/zh-cn_image_0000002743198007.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=00E2C0CEA15E128DF4C02154F3A59A0AC2C35735ACA79F6A643A3083FFF49A4D)




#### 全局搜索指定CPU数据

Profiler为CPU分析数据提供了全局搜索能力。可选择的搜索类型如下：

  * 首层搜索类型为“ALL”时，可输入任何字符串进行搜索。

  * 首层搜索类型为“CPU Core”时，可结合二层搜索类型（进程名、进程ID、线程名、线程ID），输入对应的目标进行搜索。

  * 首层搜索类型为“Process”时，可输入任务名称进行搜索。

使用搜索框的 "<"、">" 按键可依次显示返回结果的详细内容。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/47WhPcObQnuIxcuCnMQ09A/zh-cn_image_0000002713399126.png?HW-CC-KV=V1&HW-CC-Date=20260908T090138Z&HW-CC-Expire=86400&HW-CC-Sign=4D5A905148A53B3CB8329D2885046FE43E9C1495BD6857FC4AEB2D8F0B32C2FA)



