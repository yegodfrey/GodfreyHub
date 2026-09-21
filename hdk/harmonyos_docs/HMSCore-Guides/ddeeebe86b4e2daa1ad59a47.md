---
name: document/cn/HMSCore-Guides/user-behavior-0000001050745157
title: 事件分析
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/user-behavior-0000001050745157
---

# 事件分析

|-----------------------------------------------------|--|
|事件分析视频分为基础篇和进阶篇，基础篇讲述了事件分析的基本功能使用，包含如何查看事件报告。| |
|  |  |
|进阶篇讲述了事件分析的进阶功能使用，包含如何添加预置事件和自定义事件、如何与人群洞察结合，助力精细化运营。| |

## 功能概述

**事件**：描述的是用户基于产品作出的种种行为，简单说是指用户在某个时间点、某个地方、以某种方式完成了某个具体的事情。以大家熟悉的电商产品为例，"用户点击注册"是一个事件，"用户进入商品详情页后又退出页面"也是一个事件，对于事件的监控与分析实际就是对用户在App内使用行为的分析。

**事件分析**：揭示用户某个行为事件背后的动机与规律，帮助从多维度洞察用户特征，以便更精准地制定用户促活、留存与召回策略。

## 典型应用场景

* 多维度深入洞察用户行为特征。
* 针对细分人群，深度下钻分析行为数据。
* 敏捷捕捉用户行为变化，及时发现增长点。
* 结合用户属性灵活定义受众，进行精准触达、精益运营。
* 以用户、会话和事件，多层次结构来分析归因信息。

## 功能详述

### 案例

某游戏App已上架，需要查看一个月的运行状态，并且制定相应的运营策略。

需求：需要查看某游戏App一个月内付费商品消耗的渠道占比情况。

### 操作指导

1. 登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"我的项目"图标。
2. 选择需要查看分析数据的应用。
3. 选择"华为分析 > 管理 > 事件管理"，新建预置事件"支付完成"，添加对应参数。详情请参见[事件管理](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/meta-manage-0000001050985177)。
4. 选择"华为分析 > 行为分析 > 事件分析"，查看"支付完成"事件分析报告。详情请参见[查看事件分析报告](#section8489182606)。 说明
   >
   > 由于预置事件"支付完成"中包含渠道占比参数，所以可通过该事件查看相应数据。
5. 查看事件报告详情，深入分析数据。详情请参见[查看事件报告详情](#section3491121008)。

> 说明
>
> * 华为分析服务支持三类事件：[自动采集事件](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-automatic-event-collection-0000001051757143)、[预置事件](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-usage-guide-0000001135571462)、[自定义事件](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/javascript-custom-events-0000001051597159)。
> * 需等待事件上报成功，才可查看对应事件分析报告。

### 查看事件分析报告

1. 进入报告页面。

   该页面包含项目下所有事件数据，包括事件名称、事件ID、分组情况、事件数、用户数、人均次数。

   可通过点击"添加过滤器"筛选事件分析报告，过滤器条件属性详情请参见[添加过滤器组件](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/filter-introduction-0000001123199087)。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103603.41349679229556091964162488287168:50001231000000:2800:DFA0A20E1ECF578B404449A7212ED1CE0070E1A616D6C61F3D0C0B85CCC99C69.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
2. 在事件选择框中，输入事件名称或事件ID，找到需要查询的事件。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103604.80642832468376191316596150367564:50001231000000:2800:DE22A15F8F44CF6FB0E64F1D84892C7E7F9641CAE4FDC67B4CB09D1F99EFC07F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
3. 点击需要查看的事件名称，即可查看事件分析报告。

### 查看事件报告详情

1. 点击事件名称，进入事件报告详情页。

   该页面包括：实时趋势、历史趋势、事件分布分析（事件参数分布、时段分布、应用版本分布、位置分布、操作系统版本分布、机型与品牌）和自定义参数分布。
   > 说明
   > * 点击事件选择框可快速选取不同事件，点击过滤器控件可选择不同数据维度，点击日期控件选择时间范围。事件选择框、过滤器及时间控件支持页面下滑时吸附顶部展示。
   > * 实时趋势卡片仅对部分邀请伙伴开放。支持查看近30分钟内每分钟事件数的变化趋势，对比每分钟事件数与30分钟前事件数的变化情况，点击"查看详情"可对该事件进行实时分析，详情请参见[实时概览](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/real-time-dashboard-new-0000001159732343)。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103604.32839687757150956369804801283584:50001231000000:2800:9B82DC2BBD708AFB56FDFDC8232CEA93CB6DF847717D8F8BD8B327EA8ACB3291.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
2. 查看历史趋势分析。

   该卡片支持查看所选时间段内以下指标数据：
   1. 事件数、用户数、人均次数、会话平均事件数的变化趋势，以及环比增加率或环比减少率。
   2. 事件次数、用户数、人均次数、会话平均事件数几项指标的每日明细。 说明
      > * 点击"下载"可将事件明细数据按csv格式导出到本地。
      > * 事件次数详细数据趋势图和事件明细表格支持按日/周/月维度查询。

      ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103604.12795956757458289717221429682710:50001231000000:2800:A37621A99CECD3782066C4198E3C7648098174889E8023704489DC6A8E55187F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true "点击放大")
3. 查看事件分布分析。

   事件分布分析提供了以下几个分析指标，包括：事件参数分布、时段分布、应用版本分布、位置分布、操作系统版本分布和机型与品牌。
   > 说明
   > * 事件参数需完成注册后方可查看分析报告，注册方法请参见[添加或修改事件参数](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/meta-manage-0000001050985177#section1373122610113)。
   > * 注册事件参数时，如果参数类型选择了字符串型，查看事件分布分析报告时，在查看维度分析中选择对应参数后进行分析；如果参数类型选择了数字，则在事件分布分析下方可直接查看卡片数据报告。
   * 事件参数分析支持从不同参数维度进行分析，点击![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103604.49126204442061005158529952695912:50001231000000:2800:30E0E31E47CBF73167A69164E05E28E94479C5AFB2EC27465DBC616A17CD93E0.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)可以添加参数。查看维度最多支持两个。

     ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103604.10676213439077307604756469624155:50001231000000:2800:244189F22765AEFA523B544738AB84BA4BEC42773FB2EE75626D589B91A4867D.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
   * 支持查看时段分布、应用版本、位置、操作系统版本和机型与品牌分布情况。您可以在事件分布分析下方通过切换页签查看对应的报告。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231018103604.57769659611958552572566612228729:50001231000000:2800:DF3A1E3805F54F553CDCAEC85446742BD7281082AD05E078F06E0633AC68E8E5.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)

## 规格说明

|名称|说明|
|:------|:------------------|
|事件数|统计日当日，用户访问App的事件总数。|
|用户数|统计日当日，访问App的去重用户数。|
|人均次数|事件数/用户数。|
|会话平均事件数|事件数/会话数。|

## FAQ

### 不想查看某个事件的分析报告，该怎么删除呢？

点击"华为分析 > 管理 > 事件管理"进入事件管理页面，点击对应事件关闭按钮即可。详情请参加[事件管理](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/meta-manage-0000001050985177)。

### 打点之前的数据可以在事件分析报告中查看吗？

打点之后上报成功的数据才可以在事件报告中查看。
