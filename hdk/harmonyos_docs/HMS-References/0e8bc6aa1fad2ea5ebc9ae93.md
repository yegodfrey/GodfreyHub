---
name: document/cn/HMS-References/ads-api-rewardadloadlistener
title: RewardAdLoadListener
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/ads-api-rewardadloadlistener
source: portal
---

CLASS info  
---  
public class RewardAdLoadListener extends Object  
激励广告加载监听器。  
  
## Public Constructor Summary

Constructor name  
---  
RewardAdLoadListener()  
激励广告加载监听器构造方法。  
  
## Public Method Summary

Return| Method  
---|---  
void| onRewardAdFailedToLoad (int errorCode)  
激励广告加载失败。  
void| onRewardedLoaded()  
激励广告加载成功。  
  
## Public Constructors

constructor  
---  
public RewardAdLoadListener()  
激励广告加载监听器构造方法。  
  
## Public Methods

Method  
---  
public void onRewardAdFailedToLoad(int errorCode)  
当激励广告请求失败时调用。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
errorCode| 错误码，有效值为：[AdParam.ErrorCode.INNER](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam-errorcode#INNER)[AdParam.ErrorCode.INVALID_REQUEST](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam-errorcode#INVALID_REQUEST)[AdParam.ErrorCode.NETWORK_ERROR](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam-errorcode#NETWORK_ERROR)[AdParam.ErrorCode.NO_AD](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam-errorcode#NO_AD)[AdParam.ErrorCode.AD_LOADING](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam-errorcode#AD_LOADING)[AdParam.ErrorCode.LOW_API](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam-errorcode#LOW_API)  
  
Method  
---  
public void onRewardedLoaded()  
成功加载奖励广告后调用的方法。
