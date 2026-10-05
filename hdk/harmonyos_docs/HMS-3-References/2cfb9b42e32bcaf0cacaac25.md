---
name: document/cn/HMS-3-References/SkuDetailResult
title: SkuDetailResult
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/SkuDetailResult
source: portal
---

CLASS info  
---  
class SkuDetailResult extends Result  
请求[getPurchases()](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/IapClient#getPurchases "getPurchases\(\)")或[getPurchaseHistory()](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/IapClient#getPurchaseHistory "getPurchaseHistory\(\)")接口成功时返回的信息。  
  
## Inherited Method Summary

From class| Return type| Method name  
---|---|---  
[com.huawei.hms.support.api.client.Result](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/result)| [Status](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/status)| public Status getStatus()  
  
## Public Constructor Summary

Public Constructor SummaryConstructor name  
---  
SkuDetailResult()  
构造一个SkuDetailResult对象。  
  
## Public Method Summary

Return| Method  
---|---  
int| getReturnCode()  
String| getErrMsg()  
List< [SkuDetail](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/SkuDetail) >| getSkuList()  
  
注意：以下方法开发者无需关注。  


Return| Method  
---|---  
void| setReturnCode(int returnCode)  
void| setErrMsg(String errMsg)  
void| setSkuList(List< [SkuDetail](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/SkuDetail) > skuList)  
  
## Public Methods

Method  
---  
public int getReturnCode()  
获取查询结果的返回码。  
  
**Return**

type| desc  
---|---  
int| 查询结果的返回码。  
0：查询成功。  
Method  
---  
public String getErrMsg();  
获取返回码描述信息。  
  
**Return**

type| desc  
---|---  
String| 返回码描述信息。  
Method  
---  
public List< [SkuDetail](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/SkuDetail) > getSkuList()  
该方法返回成功查询到的商品信息列表。  
  
**Return**

type| desc  
---|---  
List< [SkuDetail](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/SkuDetail) >| 成功查询到的商品信息列表。
