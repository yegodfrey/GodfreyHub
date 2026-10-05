---
name: document/cn/HMS-2-References/hmssdk_huaweiiap_api_reference_oversea_c4
title: getPurchaseInfo（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-References/hmssdk_huaweiiap_api_reference_oversea_c4
source: portal
---

# 1\. 接口定义  
  
        
      1. void HMSAgent.Pay.getPurchaseInfo(PurchaseInfoRequest request, GetPurchaseInfoHandler handler);
    
    

# 2\. 接口描述  


查询当前用户的非消耗商品的订单，只有当开发者接入了PMS系统的情况下才需要调用此接口

# 3\. 参数

成员名| 参数类型| 是否必填| 说明  
---|---|---|---  
request| PurchaseInfoRequest| 是| 查询非消耗商品订单的请求参数  
handler| GetPurchaseInfoHandler| 是| 接口调用结果回调  
  
**表5-9       PurchaseInfoRequest说明**

参数| 类型| 是否必填| 是否参与签名| 描述  
---|---|---|---|---  
merchantId| String| 是| 是| 商户id，来源：华为开发者联盟“移动应用详情页”的“支付ID”。  
appId| String| 是| 是| 应用ID。在华为开发者联盟上获取的AppID。  
priceType| String| 是| 是| 价格类型固定值3：应用内非消耗品。  
productId| String| 否| 是| 所购买商品的PMS编码，如果不传该参数，则查询所有的非消耗商品信息。  
ts| long| 是| 是| 时间戳，距离1970年的毫秒数  
pageNo| long| 否| 是| 请求页码，不传默认为1。每页默认查100条记录。  
sign| String| 是| 否| 1、取上述参数字段，按参数名的ASCII码的增序排序，若遇到相同首字母，则看第二个字母，以此类推。  
【注意】：  
a）sign参数不参与签名  
b）没有值的参数，包括null和“”两种情况,都不需要参与签名  
2、排序完成之后，再把所有参数名和参数值的键值对以“&”字符连接起来，得到的字符串即为待签名串。  
3、将待签名字符串使用RSA私钥进行签名，得到的字符串即为sign参数的值。  
  
# 4\. 返回值

查询结果通过GetPurchaseInfoHandler中的onResult方法回调
      
      1. public interface GetPurchaseInfoHandler
        2. {
        3.     /**
        4.      * 查询结果回调
        5.      * @param retCode 结果码
        6.      * @param purchaseInfo查询结果信息
        7.      */
        8.     void onResult(int retCode, PurchaseInfoResult purchaseInfo);
        9. }
    
    

回调参数包括retCode     和purchaseInfo，retCode是查询结果的错误码，融合了各个阶段的错误码，如果只需要判断错误码可直接使用。retCode取值和意义参考“[业务错误码表 retCode说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_huaweiiap_api_reference_errorcode)”。

purchaseInfo是PurchaseInfoResult的实例，包含了查询结果信息，PurchaseInfoResult各字段意义如表5-10所示。

**表5-10       PurchaseInfoResult说明**

名称| 类型| 说明  
---|---|---  
rtnCode| String| 结果码。  
pageCount| long| 页数。  
purchaseInfoList| List<PurchaseInfo>| 查询到的非消耗商品订单列表。  
sign| String| 签名字符串。  
  
**表5-11       PurchaseInfo说明**

名称| 类型| 说明  
---|---|---  
requestId| String| 商户侧订单id。  
merchantId| String| 此订单的商户id。  
appId| String| Appid，应用程序id。  
productId| String| 非消耗商品id。  
tradeTime| String| 支付完成时间，yyyy-MM-dd HH:mm:ss。
