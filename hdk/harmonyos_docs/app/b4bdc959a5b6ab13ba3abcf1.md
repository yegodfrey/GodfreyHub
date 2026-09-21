---
name: document/cn/app/agc-help-apms-pages-indicator-details-0000002590413472
title: 指标详情
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-apms-pages-indicator-details-0000002590413472
---

# 指标详情

终端用户使用鸿蒙应用的过程中，可能出现应用页面切换慢的问题，这些问题会上报并呈现到页面切换的指标详情页面。开发者可以在该页面查看页面切换趋势、页面切换分布与TOP问题页面。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中找到对应项目，在项目下的应用列表中点击对应应用/元服务。
3. 左侧导航栏选择"质量 > APMS > 故障指标"，进入故障指标主界面。
4. 选择"页面"页签，点击"Ability页面切换"，进入页面切换指标主页面。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/rHQdCBXORaqrg5Q_XFoUaw/zh-cn_image_0000002594272754.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=27FE10BADD8D3FBAC730E56AD3627E6750F8193F8BE16F58B9639A7E8ADC871E)以下为页面指标图表对应的筛选条件说明：

   |筛选条件|说明|
   |:----|:--------------------------------------------------------------|
   |应用版本|应用的版本标识|
   |系统版本|应用适配的系统版本|
   |设备型号|唯一标识设备硬件规格和版本的代码，例如：ALN-AL00|
   |慢切换阈值|超过阈值的页面切换视为慢切换|
   |时间范围|筛选数据的时间段，支持以下数据聚合粒度： * 天：最长跨度30天，时间支持按天调整 * 小时：最长跨度7天，时间支持按小时调整|

5. 点击"慢切换阈值"右侧的齿轮，可以为当前选中的设备型号（如未选择则是全部设备型号）配置"慢切换"阈值。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/HmMGtF9PTHuLIa2D88WwSQ/zh-cn_image_0000002624672209.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=DE236DD78F99FE2CCC33A5535ACAFD67E2C9459A2D0ABF0058E67D62FECABD1E)

## 趋势分析

页面切换趋势分析呈现页面切换数据随时间的变化情况。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/shdSnHUQSqSPWHKqMZSQcw/zh-cn_image_0000002620855243.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=15E0E7CE31F1BA418553E50B9D6ADD1DCB0D6B50129D0E056CD7BDD3861BAF6D)

* 页面切换的趋势分析默认展示"切换耗时"的平均值与P50、P75、P95、P99分位值随时间的趋势变化。
* 点击左上角的"切换耗时"、"慢切换次数"、"慢切换影响设备数"按钮，可以切换页面切换数据的指标计算方式。

> 说明
>
> 指标统计方式：
>
> * P50分位数：指的是一组数据按升序排列后，处于第50%位置对应的值。P75、P90、P99同理。
> * 切换耗时：如果开发者有调用reportDrawnCompleted()，则采用reportDrawnCompleted()的被调用时间 - 转场动效的开始时间；否则采用转场动效时长，即：转场动效的结束时间 - 转场动效的开始时间。
> * 慢切换次数：切换耗时超过慢切换阈值的次数。
> * 慢切换影响设备数：慢切换次数按照设备标识符（系统升级后会重置）去重。

## 维度分布

页面切换维度分布呈现页面切换数据与应用版本等维度的集中分布关系。

切换右上角下拉筛选可以更新维度分布的计算依据，支持"切换耗时"、"慢切换次数"、"慢切换影响设备数"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/2PeNYWV7TtmrII94R2DUew/zh-cn_image_0000002590418140.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=DB2B35390F5D7CC6D1DDFEC72BCE3CA20E61CE07D9F0C5807ABC4F9404A481AC)

## TOP问题页面

TOP问题页面呈现的是页面切换慢问题出现频率最高的页面集合。

点击操作栏的"查看"，可以跳转"问题页面详情"，查看指定问题页面的切换情况。
> 说明
>
> 问题页面是基于Ability名称、页面URL、页面名称三者标识的。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/Hn8Et-wxRn6D__PrZ-3RFg/zh-cn_image_0000002620778035.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=4532549540F57B99144F681B663EC843EA29C5D1BC56BA9EC02D09F49D76F65A)

|---------------|--------------------------|
|**参数**|**说明**|
|Ability名称|Ability组件的名称|
|页面URL|标识页面位置的唯一路径字符串|
|页面名称|页面本身的标识符，通常是页面文件的名称|
|发生次数|此页面发生慢切换的次数|
|平均|此页面切换耗时的平均值|
|P50、P75、P95、P99|此页面切换耗时的P50、P75、P95、P99分位值|

## 问题页面详情

问题页面详情呈现的是某个问题页面的页面切换趋势与维度分布。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3a/v3/HZSdJoDsT8GgEMDaJuvAmQ/zh-cn_image_0000002620858843.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=7CB4A66061843E16ADD913EA1362FCEB91FE70C8AADF174A94B8CE07D712F1F3)

该页面呈现的"趋势分析"、"维度分布"与页面切换指标主页相同。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/EQITNanBQxaris0Ar5pR1w/zh-cn_image_0000002620778711.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=C23E8ABCE9BDF5552E8B6AAB6D09320920B56EFE7D8E7DE2AA286C0B8E53FFF1)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/DajcgiWPQduO2TquIdr5QQ/zh-cn_image_0000002590259208.png?HW-CC-KV=V1&HW-CC-Date=20260916T033630Z&HW-CC-Expire=31536000000&HW-CC-Sign=2FB135396D4B8953F05AF429D9FCABA194DBD771F0E6A8D8B40EC7A087912705)

