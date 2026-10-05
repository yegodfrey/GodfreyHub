---
name: document/cn/HMSCore-Guides/android-dev-process-0000001050163813
title: 使用入门
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-dev-process-0000001050163813
source: portal
---

# 使用入门

#### 快速上手

在您正式开发应用之前，可以通过[codelab](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/HMSAnalyticsKit)快速体验一个应用的开发过程。

#### 开发环境

    * [JDK](https://www.oracle.com/java/technologies/javase-downloads.html) 1.8及以上

    * 安装[Android Studio](https://developer.android.com/studio) 3.6.1及以上

      * minSdkVersion 18及以上

      * targetSdkVersion 33（推荐） 
      * compileSdkVersion 33（推荐） 
      * Gradle 5.4.1及以上（推荐） 
    * 测试应用的设备：EMUI 3.0及以上的华为手机或Android 4.3及以上的非华为手机

#### 开发流程

您需要按照如下流程完成应用的开发工作。 

开发步骤 | 说明  
---|---  
[配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-config-agc-0000001050163815) | 在开发应用前，需要在AppGallery Connect中配置相关信息，包括：注册成为开发者、创建应用、开通华为分析服务。  
[_集成SDK_](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-integrating-sdk-0000001050161876) | 在开发应用前，您需要将HMS Core SDK集成到您的开发环境中。  
[配置混淆脚本](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-appendix-d-0000001445762876) | 编译APK前需要配置混淆配置文件，避免混淆HMS Core SDK导致功能异常。  
[_接入Analytics_](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-accessing-0000001050161888) | 请参见[ _API参考_](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/android-api-analytics-overview-0000001051067140)中的API，实现数据上报功能。  
[_开发后自检_](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-pre-release-check-0000001050420841) | 使用华为自检工具在线对应用进行自检，并按照华为提供的自检Checklist进行开发自检。  
[_上架申请_](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/android-app-release-0000001051065094) | 将完成的应用提交华为方进行审核，审核时间一般为1~2个工作日。  
  
华为还为您提供了高效的集成开发工具[HMS Toolkit](https://developer.huawei.com/consumer/cn/doc/development/Tools-Guides/overview-0000001050060881)，该工具提供了包括开发接入、免费真机调测、版本发布等端到端的接入HMS Core的工具链，助力您以更高的开发效率和更低的开发成本集成HMS Core服务，并打造出色的应用。
