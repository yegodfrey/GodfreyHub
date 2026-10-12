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
4. 选择"卡顿"页签，进入卡顿指标主页面。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/DrqFwlHJTguiA-32UP-8UQ/zh-cn_image_0000002620638595.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=E71A0474F7F6DFB4DC0FCE03517B9A8AE3878A83B34FD213D2FA23A6BC46D325)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/IXJhxMhvSCiReLL22MlbTw/zh-cn_image_0000002590202206.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=C60F2BCFF257E4CCAFC35F5F265DCB596BE0126B2687EED67133E4843D1BA9AC)
> 说明
>
> 每小时丢帧数：滑动过程丢帧数量 / 滑动时长。卡顿影响设备数：滑动过程中最大应用单帧耗时 > 33ms的设备数量。

## 维度分布

卡顿维度分布呈现卡顿数据与应用版本等维度的集中分布关系。

维度分布图表默认展示卡顿影响设备数在"应用版本"、"系统版本"、"设备型号"三个维度上的TOP5分布情况，展示对应维度值的占比。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/y_a-L9EQTzi_Ipf96bRiLg/zh-cn_image_0000002620650001.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=D46253658670AADAC97AD1065FF0D61471912449C0E2FFC0FB2F80F6EC884531)

## TOP问题页面

TOP问题页面是呈现卡顿问题出现频率最高的页面集合。

点击操作栏的"查看"，可以跳转"问题页面详情"，查看指定问题页面的卡顿情况。
> 说明
>
> 问题页面是基于Ability名称、页面URL、页面名称三者标识。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/IY4ko0KSSpyHdEzgE14Wfg/zh-cn_image_0000002620731621.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=562A785E46F04DC31D1178561015A362C7675A8C427D342441C67BE6F3DF05B4)

|---------|-------------------|
|**参数**|**说明**|
|Ability名称|Ability组件的名称|
|页面URL|标识页面位置的唯一路径字符串|
|页面名称|页面本身的标识符，通常是页面文件的名称|
|每小时丢帧数|此页面每小时丢帧数量情况|
|卡顿影响设备数|此页面发生卡顿所影响的设备总数|

## 问题页面详情

问题页面详情主要呈现某个问题页面的"丢帧趋势"与"维度分布"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/d_ihmgbJS4GdwY6CSntxKw/zh-cn_image_0000002620657065.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=31F4061163C584C51BA549019F14EC3046CA895616E7F2AF08C1BC0F9770B77B)

该页面呈现的"丢帧趋势"、"维度分布"与卡顿指标主页面相同。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/2Frbup-cTfKb0dkFZSfXgg/zh-cn_image_0000002590377358.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=3BE4E80EF61B3ACEBFD136896F0594823B2CDB924F01D03326859C50DE77A932)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a4/v3/dP8uPhQ1Sleqc5cx2wuSMA/zh-cn_image_0000002590377360.png?HW-CC-KV=V1&HW-CC-Date=20261008T144449Z&HW-CC-Expire=31536000000&HW-CC-Sign=4C349FFF898C2CC59B48F83C21B1FA85294CE3CF74D185303683B3776E039D92)

