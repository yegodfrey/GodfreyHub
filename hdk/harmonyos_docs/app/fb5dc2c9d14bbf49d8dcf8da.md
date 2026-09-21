---
name: document/cn/app/agc-help-apms-appterminate-indicator-details-0000002577660550
title: 指标详情
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-appterminate-indicator-details-0000002577660550
---

# 指标详情

应用终止是因为系统资源管控原因而导致的应用被系统终止。通常是因为系统已经处于被资源管控的临界点，而当前应用的运行过程中越过临界点而导致应用被系统终止。这些应用终止问题会上报并呈现到应用终止指标页面。开发者可以在该页面查看应用终止次数、应用终止率等趋势、维度分布与应用终止原因分布。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中找到对应项目，在项目下的应用列表中点击对应应用/元服务。
3. 左侧导航栏选择"质量 > APMS > 故障指标"，进入故障指标主界面。
4. 选择"应用终止"页签，进入应用终止页面。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1b/v3/QLnlOTZDQ-uDDZTF4iFhhQ/zh-cn_image_0000002624665371.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=C5E2471C5BE8FED7E1C28A720CE40B0DF8E3517AA631FAB9B146C534B7BA0047)

   以下为应用终止指标图表对应的筛选条件说明：

   |筛选条件|说明|
   |:-----|:------------------------------------------------------------------------------------|
   |应用版本|应用的版本标识|
   |系统版本|应用适配的系统版本|
   |设备型号|唯一标识设备硬件规格和版本的代码，例如：ALN-AL00|
   |时间范围|筛选数据的时间段，支持以下数据聚合粒度： * 天：最长跨度30天，时间支持按天调整 * 小时：最长跨度7天，时间支持按小时调整 * 分钟：最长跨度2天，时间支持按分钟调整|
   |系统发布类型|鸿蒙OS系统的发布类型，候选值如下： * Canary：早期预览版本 * Beta：公开发布的测试版本 * Release：正式发布版本|
   |ROM版本|设备终端当前运行的操作系统固件版本。|
   |应用在前台|故障发生时，应用是否处于前台|
   |故障原因|应用终止原因分类，详见"应用终止常见原因表"|

5. 点击右下角"展开"按钮可以展开全部的条件筛选区，点击"收起"按钮则将条件筛选区折叠为两行。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/lx_fduT0SjaTH1qt4yLgkw/zh-cn_image_0000002624545511.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=870177B66C667CA5A0D2B9DA6E4B02F38FD3F914DA23BE96A08585D3AAE4C0AE)

## 应用终止趋势分析

应用终止趋势分析呈现应用终止数据随时间的变化情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/nURTvr9iSk6KBRkGYB3Ceg/zh-cn_image_0000002583149712.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=772280DEC8831C7A4DDC40931E783072E6EF38455C9EC1C77AF0326FA880F25E)

* 点击左上角的"应用终止率"、"应用终止次数"、"应用终止设备数"按钮，可以切换应用终止数据的指标计算方式。
* 点击右上角的"↓"按钮，可以下载当前趋势图表的指标数据。 说明
  >
  > 指标统计方式：
  > * 应用终止次率：应用终止次数 / 启动次数。
  > * 应用终止次数：因系统管控而导致的前台PROCESS_KILL次数。
  > * 应用终止次设备数：应用终止次数基于设备标识符（系统升级会重置）去重得到。

## 版本对比

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/fXX-AInvTZ2jgxWJH6J74A/zh-cn_image_0000002583149970.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=F3B725EFFC2B72F3DAE00FED7EB5E44787B2CFD3435143EE9D840DE076B3DB10)

* 趋势图表默认开启版本对比功能，使用该功能可以对比当前版本与对比版本间的崩溃趋势变化。鼠标悬停在趋势图上时，会展示当前位置的对应时间段的对比数据与优劣化百分比。

> 说明
>
> 当前版本为筛选区指定的应用版本，若筛选区未选择，则为全部版本。

* 通过选择 "对比版本"与"对比时间"，可以指定所需对比的应用版本与时间段，点击"开始对比"按钮，则应用该对比条件并更新图表数据。
* 如暂不需要该功能，可点击 "退出对比"按钮，退出版本对比功能。

## 维度分布

应用终止维度分析呈现应用终止数据与应用版本等维度的集中分布关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/2-MMyY8aSWOYL5lXOSn6pw/zh-cn_image_0000002612072573.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=384959BB56EBC9155A06B6B84710327AA5E6C863966E178F64DEF4822F1D1F8D)

* 维度分布图表默认展示应用终止的"发生次数"在"应用版本"、"系统版本"、"设备型号"三个维度上的Top5分布情况，展示对应维度值与占比。
* 切换右上角下拉筛选可以更新维度分布的计算依据，支持"发生次数"与"影响设备数"。

## 应用终止分布

应用终止分布呈现应用终止数据与应用终止原因（图中为应用终止原因说明）的集中分布关系。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/cHxRS3PgTT6JZ7zfC3CvCA/zh-cn_image_0000002583310188.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=0520DAA61ADEBC480588BA0063AC16C4873DD9375778EA725D8B77E3C0CC623B)

* 应用终止分布图表默认展示应用终止的"发生次数"在"应用终止原因"上的分布情况，展示对应的应用终止次数与占比。左侧饼图展示Top 10应用终止原因，右侧表格展示全部应用终止原因。
* 切换右上角下拉筛选可以更新应用终止分布的计算依据，支持"发生次数"与"影响设备数"。

> 说明
>
> 关于应用终止常见原因，请参见"[App Killed（应用终止）检测](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/appkilled-guidelines)"。

