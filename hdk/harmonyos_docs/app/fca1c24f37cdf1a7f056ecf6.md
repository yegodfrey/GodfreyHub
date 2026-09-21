---
name: document/cn/app/agc-help-apms-lag-indicator-details-0000002620717723
title: 指标详情
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-lag-indicator-details-0000002620717723
---

# 指标详情

终端用户使用鸿蒙应用的过程中，可能出现滑动丢帧的卡顿问题，这些问题会上报并呈现到卡顿指标详情页面。开发者可以在该页面查看丢帧趋势、丢帧分布与TOP问题页面。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中找到对应项目，在项目下的应用列表中点击对应应用/元服务。
3. 左侧导航栏选择"质量 > APMS > 故障指标"，进入故障指标主界面。
4. 选择"卡顿"页签，进入卡顿指标主页面。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/DrqFwlHJTguiA-32UP-8UQ/zh-cn_image_0000002620638595.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C8A911B5EFD446D0CCA3D84481FEA2D8617F12624399C98392AF7290CB91605)

   以下为卡顿指标图表对应的筛选条件说明：

   |筛选条件|说明|
   |:---|:--------------------------------------------------------------|
   |应用版本|应用的版本标识|
   |系统版本|应用适配的系统版本|
   |设备型号|唯一标识设备硬件规格和版本的代码，例如：ALN-AL00|
   |时间范围|筛选数据的时间段，支持以下数据聚合粒度： * 天：最长跨度30天，时间支持按天调整 * 小时：最长跨度7天，时间支持按小时调整|

## 丢帧趋势

丢帧趋势呈现滑动丢帧数据随时间的变化情况。

丢帧趋势展示每小时丢帧数趋势（左图）与卡顿影响设备数趋势（右图）。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/IXJhxMhvSCiReLL22MlbTw/zh-cn_image_0000002590202206.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=A57F532BF5F65A79AD93C64DF985C9454D6126F4003B2996E6588924B64620F8)
> 说明
>
> 每小时丢帧数：滑动过程丢帧数量 / 滑动时长。卡顿影响设备数：滑动过程中最大应用单帧耗时 > 33ms的设备数量。

## 维度分布

卡顿维度分布呈现卡顿数据与应用版本等维度的集中分布关系。

维度分布图表默认展示卡顿影响设备数在"应用版本"、"系统版本"、"设备型号"三个维度上的TOP5分布情况，展示对应维度值的占比。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/y_a-L9EQTzi_Ipf96bRiLg/zh-cn_image_0000002620650001.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=3E7BF7A7213880653A53C1EC9FE0179C3667AC101AAE6B601F6F100C9817F112)

## TOP问题页面

TOP问题页面是呈现卡顿问题出现频率最高的页面集合。

点击操作栏的"查看"，可以跳转"问题页面详情"，查看指定问题页面的卡顿情况。
> 说明
>
> 问题页面是基于Ability名称、页面URL、页面名称三者标识。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/IY4ko0KSSpyHdEzgE14Wfg/zh-cn_image_0000002620731621.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=A7CF057CBC919D61393E0821900656E18029DCA738B7CDF6CB7C28238EE84A51)

|---------|-------------------|
|**参数**|**说明**|
|Ability名称|Ability组件的名称|
|页面URL|标识页面位置的唯一路径字符串|
|页面名称|页面本身的标识符，通常是页面文件的名称|
|每小时丢帧数|此页面每小时丢帧数量情况|
|卡顿影响设备数|此页面发生卡顿所影响的设备总数|

## 问题页面详情

问题页面详情主要呈现某个问题页面的"丢帧趋势"与"维度分布"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/d_ihmgbJS4GdwY6CSntxKw/zh-cn_image_0000002620657065.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=FB4FFE52FC19EF9E6C8480EFA2FD22F93F4E3C9C567EA14A28CC2D56B7E267AB)

该页面呈现的"丢帧趋势"、"维度分布"与卡顿指标主页面相同。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/2Frbup-cTfKb0dkFZSfXgg/zh-cn_image_0000002590377358.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=FA7FA2591925BFB289C7F526077C89D96D47D533B72178DA1336AFFEE8F679BD)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/dP8uPhQ1Sleqc5cx2wuSMA/zh-cn_image_0000002590377360.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=887AC521483E425A17EDB5AF37B476151463B347897B0FD202EB21FF7E39619A)

