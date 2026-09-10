---
name: cangjie-guides/cj-insight-real-monitor
title: 性能问题定界：实时监控
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-real-monitor
nodePath: 优化应用性能 / 使用Profiler进行性能调优 / 性能问题定界：实时监控
---

# 性能问题定界：实时监控

为了提升性能，首先需对当前应用的运行情况以及设备的资源消耗进行监测，以初步确定可能存在的性能问题以及问题出现的位置。

Profiler提供实时监控（Realtime Monitor）能力，全方位地监测设备资源，覆盖了系统事件、异常报告、CPU占用、内存占用、实时帧率、GPU使用率、温度、电流以及能耗等多维度数据，帮助开发者初步识别性能瓶颈，定界问题。

#### 配置并确认设备环境

为了能够正确地监测设备资源，首先需要通过USB完成设备连接。打开设备上的“开发者模式”，并选择允许“USB调试”，然后通过DevEco Studio将开发的应用安装到设备上。随后开发者可以通过如下步骤来查看应用的实时资源使用情况：

  1. 通过[调优工具简介](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-introduction)中介绍的三种方式打开Profiler。

  2. 在设备上启动想要监测的应用。

  3. 在Profiler界面左上角的设备、应用及进程列表中，选择调优设备及待调优的应用进程。如果设备不止有一个主进程（还存在Extension或者Render进程），那么需要再手动选择一个想要监控的进程。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/b8ozw_x6TYuLZLrMmWAkWA/zh-cn_image_0000002701659782.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=292A1B765E45EFF833D6F3DE771379723FF739F9460D17312E3A1208DC7D2988)




当选择完需要监控的应用以及进程之后，Profiler会自动打开实时监控（Realtime Monitor）的页面。

#### 实时监控应用，多维度对比识别性能热区

在实时监控界面上，以泳道图的形式展示了时间维度上设备各项资源的使用情况，提供系统事件、CPU占用等多维度信息，帮助识别性能热区。

#### [h2]面板整体介绍

  * 界面左侧为实时数据展示区域，该区域的数据显示了每一项监测内容的瞬时值，并通过饼图或者仪表盘的形式让开发者更加直观地观察到各项数据的使用占比以及具体数值。
  * 界面右侧则是各项数据随着时间推移的变化趋势，通过不同的图像形式（直方图、柱状图、折线图等）来更加清晰的展示某一项资源在一段时间范围内的变化趋势，以帮助开发者快速判断性能热点区域。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/aY_PiAd2Sga8f3kBpw_6tw/zh-cn_image_0000002731378997.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=DDAFF21DD7C38D52C18B94933C2529FFE718F730FB85931509BCE500D9A8617F)

整个实时监控页面从上到下，依次展示了系统事件、异常事件、前台应用、CPU占用、内存占用、帧率、GPU使用率、温度、电流以及能耗等各个维度的数据，帮助开发者从多个维度来对比识别当前应用的性能热区。下面依次介绍每一条泳道的数据内容。

#### [h2]泳道简介

  1. System Events泳道：该泳道展示了时间窗内系统事件的起始、终止等状态的统计情况。泳道内存在三种形状的标识：

     * 菱形：表示事件开始。
     * 正方形：表示事件结束。
     * 圆形：表示当前为时间点事件，无持续时间。
  2. Anomaly泳道：用于展示设备侧上报的各种异常事件。

  3. Foreground Ability泳道：用于展示应用的Ability状态。当Ability在前台运行时，会在此时间段内显示该Ability的名称；若当前无前台运行的Ability，则此时间段内显示“Background”。

  4. CPU泳道：左侧饼图展示了当前时刻应用的CPU使用率、其他进程的CPU使用率以及空闲情况。右侧的泳道图则展示了时间窗内的整体CPU使用情况，其中灰色的部分代表系统中其他进程的CPU占用，蓝色部分则展示了当前应用的CPU占用情况。

  5. Memory泳道：左侧饼图展示了当前时刻应用的内存占用、其他进程的内存占用以及未使用的内存。右侧的泳道图则展示了时间窗内的整体内存使用情况，其中灰色的部分代表系统中其他进程的内存占用，蓝色部分则展示了当前应用的内存占用情况。

  6. FPS泳道：左侧仪表盘展示了当前设备屏幕的帧率瞬时值，红色、黄色、绿色区域则代表当前屏幕帧率是否达标理想状态。右侧柱状图则展示了每一次采集设备帧率时的数值。

  7. GPU泳道：左侧仪表盘展示了当前设备GPU使用率的瞬时值，右侧泳道则展示了时间窗内的整体GPU使用率。

  8. Temperature泳道：左侧温度计显示了当前设备温度信息，右侧泳道的数据采集周期为3秒，展示了时间窗内的设备温度信息以及温度等级。

  9. Device Current泳道：左侧展示了当前设备最大电流、平均电流以及最新的电流值，右侧泳道则展示了时间窗内的设备电流信息。

  10. Energy泳道：该泳道包含了各项部件（包括CPU、Display、GPU、Location、Camera、Bluetooth、Flashlight、Audio、Wifi、Modem）的周期内平均功耗占比。通过图例上方的下拉多选框则可以勾选想要监控的功耗使用情况的应用，选择多个应用后，该泳道会展示所有选择应用的功耗总和。右侧区域柱状图则展示了时间窗内各部件资源的实时使用情况，柱状图的颜色代表每种部件的功耗占比。




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/QYqQz_SkQW-uGPKyAkBPUQ/zh-cn_image_0000002701819694.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8267761AEE3B65DE5A537D213582A166C56A463CC2F6BE505D58EB5732BDA8A3)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/82_utxTGSiC1KCbOXb5uMw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8713BA750AF41618A725624A22CC52F03154429F6C9B60CDE1925696CEDA0F14)

FPS、GPU显示的是所使用设备的实时信息，而非当前调优应用的信息。

#### 实时监控页面的常用操作交互方式

实时监控页面除了展示各个维度数据的瞬时值以及时间窗内的变化趋势之外，还提供了多种交互方式以供协助开发者更加便捷、快速、细致地分析数据。

  * 启停控制

点击会话区“Realtime Monitor”页签上的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/PAPibUxpSX-MQ2lA1Hzg0w/zh-cn_image_0000002701819674.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=8AC7782BF13BCB42A627E601C8D79F8066E7BA868B504536007ADCABDBA112A1)、![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/YRr7_JYVQAKB9b-n1cfX0w/zh-cn_image_0000002731538955.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=B5C2EF8F1BFF4B7C84C63D0D9A04DC86A461DB087A2B7CD858F5AE83C1B57BEB)按钮来即时控制实时监控界面的录制状态。

  * 详细数据展示

将鼠标悬浮于所关心的泳道数据上时，界面上会出现当前时间点的时间标线以及含有当前时间点上泳道详细数据的Tooltips。更进一步，将鼠标悬浮于时间轴之上时，实时监控页面内的所有泳道均会以Tooltips展示出该时刻的数据

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/9gzO8DVYT6KPC1tDIECs9Q/zh-cn_image_0000002731538973.png?HW-CC-KV=V1&HW-CC-Date=20260903T111623Z&HW-CC-Expire=86400&HW-CC-Sign=63731E34417D23EFC488D8D6CF5499E77C997F0CB3F396017854AEA34CBF3AD2)

  * 图例选择

实时监控界面部分泳道内的图例均支持选择/反选来增加/去除泳道内这一数据的展示，内容改变后泳道内的数据会自动缩放以适应泳道的高度，能够更加专注地分析所关心的数据。




至此，通过分析实时监控的多维度设备数据，可以了解到当前设备的具体运行情况以及可能出现性能问题的热点区域。接下来，可以通过[深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)更加详细的设备侧运行数据来更加详尽地分析应用可能存在的性能问题。
