---
name: document/cn/HMSCore-References/api-hms-wallet-overview-0000001050147715
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-overview-0000001050147715
---

# Overview

开发者可通过集成[CreateWalletPassRequest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-create-walletpass-0000001050145782)等接口组装卡券数据，然后将卡劵数据推送给华为服务器来实现卡劵添加操作。

## Interface Summary

|Interface|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------|:----------|
|[IResolvableTaskResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-ireslovable-0000001050147719)|返回Task结果。|

## Class Summary

|Class|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
|[Wallet](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-wallet-0000001050145778)|该类主要作用是对钱包卡劵相关业务提供统一的入口。|
|[CreateWalletPassRequest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-create-walletpass-0000001050145782)|组装卡劵请求数据操作类，目前建议开发者使用JWE方式有参构造器实例化该CreateWalletPassRequest。|
|[CreateWalletPassRequest.Builder](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-createwalletpasss-0000001050145792)|创建[CreateWalletPassRequest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-create-walletpass-0000001050145782)对象。|
|[WalletPassClient](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-walletpassclient-0000001050147747)|通过HMS CORE添加卡劵的Client操作类，该类封装了对接HMS Core相关的配置。并且提供了发起请求的方法createWalletPass()。|
|[AutoResolvableForegroundIntentResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-auto-0000001050145804)|实现Task任务回调的类。|
|[ResolveTaskHelper](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-resolnetaskhelper-0000001050145808)|处理Task任务的辅助类。|

