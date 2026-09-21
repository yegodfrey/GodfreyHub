---
name: document/cn/HMSCore-References/requestcallback-0000001150529860
title: RequestCallback
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/requestcallback-0000001150529860
---

# RequestCallback

|Interface Info|
|:------------------------------------------|
|public interface RequestCallback 广告加载结果的回调。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onAdsLoadedSuccess](#section1736916283124)([AdsData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adsdata-0000001162703100) adsData) 广告加载成功回调。|
|void|[onAdsLoadFailed](#section1388383452211)() 广告加载失败回调。|

## Public Methods

### onAdsLoadedSuccess

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|public void onAdsLoadedSuccess([AdsData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adsdata-0000001162703100) adsData) 广告加载成功回调。|

**Parameters**

|Name|Description|
|:------|:----------|
|adsData|广告的数据。|

### onAdsLoadFailed

|Method|
|:--------------------------------------|
|public void onAdsLoadFailed() 广告加载失败回调。|

