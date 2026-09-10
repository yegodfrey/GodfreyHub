---
name: document/cn/HMSCore-Guides/publisher-service-js-dev-process-0000001179595231
title: 使用入门
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-dev-process-0000001179595231
---

# 使用入门

#### 快速上手

在您正式开发应用之前，可以通过[codelab](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_PetalAdsSDK-BannerAds-JavaScript)快速体验一个应用的开发过程。  

#### 开发环境

* JDK 1.7及以上
* 安装Android Studio 3.X及以上
  * minSdkVersion 21及以上
  * targetSdkVersion 33（推荐）
  * compileSdkVersion 33（推荐）
  * Gradle 4.1及以上（推荐）
* 测试应用的设备：EMUI 4.0及以上的华为手机

#### 开发流程

您需要按照如下流程完成应用的开发工作。  

|序号|步骤|说明|
|:-|:----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1|[集成鲸鸿动能JavaScript API](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-integrating-sdk-0000001133475862)|您需要将鲸鸿动能JavaScript API集成到您的开发环境中。|
|2|[原生广告](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-native-0000001179595233)|原生广告是与应用内容融于一体的广告形式，包含图片、文字和视频，支持您自由定制界面。原生广告通过组件方式和编程方式来展示广告。|
|2|[横幅广告](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-banner-0000001133635648)|横幅广告是在应用程序顶部、中部或底部占据一个位置的矩形图片。[横幅广告](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-banner-0000001133635648)通过编程方式和组件方式来展示广告。|
|2|[激励广告](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-rewarded-0000001133475864)|激励广告是一种全屏幕的视频广告，用户可以选择点击观看，以换取相应奖励。|
|2|[插屏广告](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/publisher-service-js-interstitial-0000001179475321)|插屏广告是一种在应用开启、暂停或退出时以全屏的形式弹出的广告形式。|
|3|[获取客户端ID和密钥](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/reporting-api-client-id-and-key-0000001050933698)|您调用流量变现报表API前，要先获取客户端ID和密钥。|
|3|[调用流量变现报表API](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/reporting-api-query-0000001051173751)|您可以使用客户端ID和密钥信息发送access_token申请调用流量变现报表API。|
|3|[获取变现报表数据](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/reporting-api-data-0000001070835233)|调用流量变现报表API返回的报表数据请参见[响应示例](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/query-publisher-service-reports-0000001050933546#section495411113385)。|

