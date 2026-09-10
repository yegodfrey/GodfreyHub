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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/97/v3/hFHK2R5qQ6mHsVJ1AphgEg/zh-cn_image_0000002743078019.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=74C0F06365AB3548B7C7988D540EF813B02B37098B475AE70B210EDBED9B12CF)




当选择完需要监控的应用以及进程之后，Profiler会自动打开实时监控（Realtime Monitor）的页面。

#### 实时监控应用，多维度对比识别性能热区

在实时监控界面上，以泳道图的形式展示了时间维度上设备各项资源的使用情况，提供系统事件、CPU占用等多维度信息，帮助识别性能热区。

#### [h2]面板整体介绍

  * 界面左侧为实时数据展示区域，该区域的数据显示了每一项监测内容的瞬时值，并通过饼图或者仪表盘的形式让开发者更加直观地观察到各项数据的使用占比以及具体数值。
  * 界面右侧则是各项数据随着时间推移的变化趋势，通过不同的图像形式（直方图、柱状图、折线图等）来更加清晰的展示某一项资源在一段时间范围内的变化趋势，以帮助开发者快速判断性能热点区域。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/h5SPpVD6SUycjz2LOK4Kcg/zh-cn_image_0000002713559058.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=083B4509916F28CCE301473EC826B859167CAAF66E93C504398CDC0B8A0DDA23)

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




![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/aRXdpA2DSvW9-1s8vS21Xw/zh-cn_image_0000002743197971.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=AA525AA6E1DB1003CF7D2D5518D62711C3F61EA2CFCC43FBBE4A6ECBC5F89CE0)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/2HzwWGk-SS-4WGTY1mFZ0Q/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=4F14BBCCE4E590309CDA760074DFAE7C7973E5237B028ED2DBF9C4E334C5080B)

FPS、GPU显示的是所使用设备的实时信息，而非当前调优应用的信息。

#### 实时监控页面的常用操作交互方式

实时监控页面除了展示各个维度数据的瞬时值以及时间窗内的变化趋势之外，还提供了多种交互方式以供协助开发者更加便捷、快速、细致地分析数据。

  * 启停控制

点击会话区“Realtime Monitor”页签上的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/CLQ2eDWFSmm0YgK9W0dbgA/zh-cn_image_0000002743197953.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=7454D6DC460633E744BF3FF372DAF625ABCE8CE9C45BADEBF9AC0D45AE2886EF)、![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/yig59iT7T5WDKI4TInxk-w/zh-cn_image_0000002713399072.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=F20457C804ACA76F2ED9A66CAE9B39BF4897F653D11DD47FB68449E211CDF6FF)按钮来即时控制实时监控界面的录制状态。

  * 详细数据展示

将鼠标悬浮于所关心的泳道数据上时，界面上会出现当前时间点的时间标线以及含有当前时间点上泳道详细数据的Tooltips。更进一步，将鼠标悬浮于时间轴之上时，实时监控页面内的所有泳道均会以Tooltips展示出该时刻的数据

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/RHzR7-x_RRebmQgTu_YWUg/zh-cn_image_0000002713399090.png?HW-CC-KV=V1&HW-CC-Date=20260908T090137Z&HW-CC-Expire=86400&HW-CC-Sign=E43C5A7EBB07ED2711DABE4F735B21CFDDB2A48C4DA35C5B10F4E16C9D28502B)

  * 图例选择

实时监控界面部分泳道内的图例均支持选择/反选来增加/去除泳道内这一数据的展示，内容改变后泳道内的数据会自动缩放以适应泳道的高度，能够更加专注地分析所关心的数据。




至此，通过分析实时监控的多维度设备数据，可以了解到当前设备的具体运行情况以及可能出现性能问题的热点区域。接下来，可以通过[深度录制](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-insight-profiler-deep-recording)更加详细的设备侧运行数据来更加详尽地分析应用可能存在的性能问题。
