---
name: document/cn/HMS-References/ads-api-adparam-errorcode
title: AdParam.ErrorCode
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/ads-api-adparam-errorcode
source: portal
---

interface info  
---  
public static interface AdParam.ErrorCode  
广告请求错误码。  
  
## Constant Summary

Type| Name| Desc  
---|---|---  
int| INNER| 内部错误。  
int| INVALID_REQUEST| 无效的广告请求，如未设置广告位ID、Banner广告尺寸无效等。  
int| NETWORK_ERROR| 由于网络连接错误导致广告请求失败。  
int| NO_AD| 广告请求成功，但是服务器没有返回可用的广告素材。  
int| AD_LOADING| 广告正在请求中，不能重复发起请求。  
int| LOW_API| API版本不在广告服务支持范围内。  
int| BANNER_AD_EXPIRE| 横幅广告过期。  
int| BANNER_AD_CANCEL| 横幅广告任务下架。  
  
## Constants

Constant  
---  
public static final int INNER  
内部发生了一些事情；例如，从广告服务器收到无效的响应。常量值: 0  
Constant  
---  
public static final int INVALID_REQUEST  
无效的广告请求，如未设置广告位ID、Banner广告尺寸无效等。常量值: 1  
Constant  
---  
public static final int NETWORK_ERROR  
由于网络连接错误导致广告请求失败。常量值: 2  
Constant  
---  
public static final int NO_AD  
广告请求成功，但是服务器没有返回可用的广告素材。常量值: 3  
Constant  
---  
public static final int AD_LOADING  
广告正在请求中，不能重复发起请求。常量值: 4  
Constant  
---  
public static final int LOW_API  
API版本不在广告服务支持范围内。常量值: 5  
Constant  
---  
public static final int BANNER_AD_EXPIRE  
横幅广告过期。常量值: 6  
Constant  
---  
public static final int BANNER_AD_CANCEL  
横幅广告任务下架。常量值: 7
