---
name: document/cn/AppGallery-connect-Guides/adx_dsp_api_overview-0000001221310154
title: 业务介绍
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/adx_dsp_api_overview-0000001221310154
---

# 业务介绍

本接口提供了获取⼴告、获取应用详情信息、获取更新信息、上报打点能力，详细介绍了ADX（即广告交易平台 AD exchange）如何通过调用这些能力实现接入华为应用市场进行推广服务。  

#### 接入流程

主要接入流程如下：  

|序号|步骤|详情|
|:-|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1|接入准备|您需要先完成开发者帐号注册，并与运营对接申请广告展示位，详情请参考[接入准备](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_get-start-0000001265631645#ZH-CN_TOPIC_0000001265631645__li13245743482)。|
|2|获取广告|ADX需要[调用请求广告接口](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-open-query-0000001265753497)，获取广告。|
|3|获取应用详情页信息|ADX需要[调用获取应用详情页信息接口](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-appinfo-query-0000001220833634)，供用户点击后在应用市场展示（适用于应用市场原生场景）。|
|4|获取应用更新|ADX需要[调用获取应用更新接口](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-appinfo-update-0000001221153582)，以便及时更新推广应用（适用于应用市场原生场景）。|
|5|用户事件上报|通过事件上报接口上报广告展示、点击、下载等用户行为事件，详情请参考[调试事件上报](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_event-rpt-0000001223256328)。|
|6|获取安装应用列表|ADX需要[调用获取安装应用列表接口](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-installed-app-list-0000001386006892)，用于查询用户已安装应用列表的数据。|
|7|获取数据报表|ADX需要[调用获取报表接口](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-report-0000001431077570)，以便向媒体按天提供推广、下载、收益等统计数据。|

#### 广告形态说明

当前支持应用搜索和应用推荐两类广告形态，具体如下：

* 应用推荐：开机必备、精品推荐、关联推荐、分类榜单、排行榜等。
* 应用搜索：快捷联想（搜索sug）、搜索结果。
