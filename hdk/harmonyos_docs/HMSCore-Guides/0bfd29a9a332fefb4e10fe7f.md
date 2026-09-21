---
name: document/cn/HMSCore-Guides/guide-enter-0000001077506760
title: 使用入门
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/guide-enter-0000001077506760
---

# 使用入门

## 快速上手

在您正式开发应用之前，可以通过[codelab](https://developer.huawei.com/consumer/cn/codelabsPortal/carddetails/HMSWalletKit)快速体验一个应用的开发过程。

## 开发环境

* JDK 1.8.211及以上

* 安装Android Studio 3.X及以上
* 您的应用应满足以下条件：

  * minSdkVersion 19
  * targetSdkVersion 30（推荐）
  * compileSdkVersion 31（推荐）
  * Gradle 4.6及以上（推荐）
* 测试应用的设备：EMUI 3.0及以上的华为手机或Android 4.4及以上的非华为手机

## 开发流程

您需要按照如下流程完成应用的开发工作。

|步骤|操作|说明|
|:-|:---------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
|1|[卡券接入场景](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/access_membership-0000001050044329)|选择接入场景（根据需求选择需要接入的卡券）。|
|2|[开发准备](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/guide-agc-overview-0000001050158420)|在开发应用前，需要在AppGallery Connect中配置相关信息，包括：注册成为开发者、创建应用、开通Wallet Kit服务。|
|3|[添加卡券](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/guide-webpage-0000001050042334)|根据卡券接入场景的UI设计来填充代码字段，调用接口添加卡券至华为钱包。|
|4|[更新卡券](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/access-overa-update-0000001050042360)|可选操作，仅用户有更新需求时（如更新用户卡券级别、界面素材）才涉及。|
|5|[集成NFC刷卡能力](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/access-overa-nfc-0000001050042374)|可选操作，当商户卡券有刷卡需求时（如活动门禁刷闸机集成、园区门禁卡、智能门锁接入）才涉及。|
|6|[开发后自检](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/pre-release-check-0000001050185661)|使用华为自检工具在线对应用进行自检，并按照华为提供的自检Checklist进行开发自检。|
|7|[上架申请](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/app-release-0000001050183124)|将完成的应用提交华为方进行审核，审核时间一般为1~2个工作日。|

