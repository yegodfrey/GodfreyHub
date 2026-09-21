---
name: document/cn/Media-Guides/c-create-0000001332642197
title: 使用入门
uri: https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-create-0000001332642197
---

# 使用入门

## 开发环境

* JDK 1.8.211及以上


* 安装[Android Studio](https://developer.android.com/studio) 3.6.1及以上

  * minSdkVersion 24及以上
  * targetSdkVersion 34（推荐）
  * compileSdkVersion 34（推荐）
  * Gradle 5.4.1及以上（推荐）

  如果同时使用多个HMS Core的服务，则需要使用各个Kit对应的最大值


* 测试应用的设备

  * 支持HDR Vivid格式视频解码能力的Android 7.0及以上的手机或平板

    > 说明
    >
    > 判断设备是否支持HDR Vivid视频解码能力，参见[准备工作](https://developer.huawei.com/consumer/cn/doc/Media-Guides/android-hdr-0000001276893212#section8786756981)。

## 开发流程

您需要按照如下流程完成应用的开发工作。

|序号|步骤|说明|
|:-|:--------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1|[配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-appgallery-0000001332992281)|在开发应用前，需要在AppGallery Connect中配置相关信息。包括：[注册成为开发者](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-appgallery-0000001332992281#section1464519554325)、[创建应用](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-appgallery-0000001332992281#section15850522183317)、[生成签名证书指纹](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-appgallery-0000001332992281#section147011294331)、[生成签名证书指纹](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-appgallery-0000001332992281#section147011294331)。|
|2|[集成HMS Core SDK](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-dependent-0000001280672266)|在开发应用前，您需要将HMS Core SDK集成到您的开发环境中。|
|3|[应用开发](https://developer.huawei.com/consumer/cn/doc/Media-Guides/c-vivid-development-0000001280442212)|创建[HdrVividRender](https://developer.huawei.com/consumer/cn/doc/Media-References/c-hdrvividrender-0000001276546000)实例，实现HDR Vivid渲染转码能力。|

