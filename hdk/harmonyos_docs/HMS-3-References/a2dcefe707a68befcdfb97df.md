---
name: document/cn/HMS-3-References/ConsumePurchaseReq
title: ConsumePurchaseReq
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/ConsumePurchaseReq
source: portal
---

CLASS info  
---  
public class ConsumePurchaseReq implements IMessageEntity  
[consumePurchase()](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/IapClient#consumePurchase "consumePurchase\(\)")接口的请求信息。  
  
## Public Constructor Summary

Public Constructor SummaryConstructor name  
---  
ConsumePurchaseReq ()  
构造一个ConsumePurchaseReq对象。  
  
## Public Field Summary

Type| Name| Desc  
---|---|---  
String| purchaseToken| 用户购买商品的标识，在支付商品时由支付服务器生成并在InAppPurchaseData中返回给应用。应用传入此参数供支付服务器对订单状态进行更新后再发放商品。  
String| developerChallenge| 开发者自定义的挑战字，唯一标识此次消耗请求。消耗成功后此挑战字会记录在购买信息中并返回。如果挑战字与已有挑战字重复，表示重复消耗，同样会原样返回该挑战字。注意：该参数长度限制为(0, 64)。
