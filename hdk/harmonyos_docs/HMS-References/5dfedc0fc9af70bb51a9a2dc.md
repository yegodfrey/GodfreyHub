---
name: document/cn/HMS-References/wallet-api-client-3
title: Wallet
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/wallet-api-client-3
source: portal
---

CLASS info  
---  
public final class Wallet extends Object  
该类主要作用是对钱包卡劵相关业务提供统一的入口。  
  
## Public Method Summary

Return type| Method name  
---|---  
WalletPassClient| getWalletPassClient(Activity activity)获取WalletPassClient实例。  
  
## Public Methods

Method  
---  
public static WalletPassClient getWalletPassClient(Activity activity)  
获取WalletPassClient实例。  
  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
activity| Activity层的引用,因为涉及到返回ui层回调,需要传入activity。
