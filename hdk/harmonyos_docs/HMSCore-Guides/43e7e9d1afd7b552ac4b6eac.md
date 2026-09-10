---
name: document/cn/HMSCore-Guides/android-sdk-use-0000001258389521
title: 使用入门
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-use-0000001258389521
---

# 使用入门

#### 快速上手

在您正式开发应用之前，可以通过[codelab](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/tutorials_HMSNaviKit)快速体验一个应用的开发过程。  

#### 开发环境

* JDK 1.8及以上
* 安装[Android Studio](https://developer.android.com/studio) 3.6.1及以上

  * minSdkVersion 24及以上
  * targetSdkVersion 34（推荐）
  * compileSdkVersion 34（推荐）
  * Gradle 5.6.4及以上（推荐） Android Gradle插件3.6.0及以上

* 测试应用的设备：EMUI 5.0及以上的华为手机、平板或Android 7.0及以上的非华为手机。

#### 开发流程

您需要按照如下流程完成应用的开发工作。  

|序号|步骤|说明|
|:-:|:----------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|1|[配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910)|在开发应用前，需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)中配置相关信息。包括：[注册成为开发者](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910#section47264296)、[创建项目](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910#section83893131911)、[创建应用](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910#section0592162815915)、[生成签名证书指纹](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910#section147011294331)、[配置签名证书指纹](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910#section4972271336)、[打开相关服务](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-agc-0000001214231910#section58097464)。|
|2|[集成SDK](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-integrating-sdk-0000001258751817)|在开发应用前，您需要将SDK集成到您的开发环境中。|
|3|[配置混淆脚本](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-config-obfuscation-scripts-0000001258391871)|编译APK前需要配置混淆配置文件，避免混淆SDK导致功能异常。|
|4|[路径规划](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-path-planning-0000001214234296)|请求路径规划以获取路线信息。|
|4|[开始导航](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-start-navigation-0000001258754203)|当请求路线规划信息完成后，开发者可以通过调用引导计算接口开启导航。|
|5|[上架申请](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/app-release-0000001270133625)|开发完成后需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)中将应用信息补充完整并提交上架申请。|

