---
name: document/cn/AppGallery-connect-References/agcapi-getpromotioninfo-harmonyosnext-0000002166748617
title: 查询商品促销详情
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-getpromotioninfo-harmonyosnext-0000002166748617
---

# 查询商品促销详情

#### 功能介绍

此接口用于查询商品促销信息。  

#### 使用约束

接口调用者的角色：账号持有者、管理员、APP管理员、运营。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者服务器-\>数字商品服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/pms/product-price-service/v2/manage/product/promotion?promotionId={promotionId}|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|------------------------------------------------------------------------------------------------------------------------|

#### 请求参数

#### Query

|参数|必选(M)/可选(O)|参数类型|描述|
|:----------|:----------|:-----|:-------------------------------------------------------------------------------|
|promotionId|M|String|促销优惠活动唯一ID。 获取来源： * 调用创建商品促销信息接口，返回promotionId。 * 调用按条件查询商品促销信息接口，返回promotionId。|

#### Header

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250806180217.05379059835979044180482309335623:50001231000000:2800:0E24050F3BF9C665C923A5649435EBDC3379F93AD9F1AEEBAF8C2C58C8EFAACE.png)  
API Client和OAuth Client区别参见[使用入门](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114)。

API Client方式  

|参数|必选(M)/可选(O)|类型|描述|
|:------------|:----------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|
|appId|M|String|应用ID，获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_queryappinfo)。|

OAuth Client方式  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|oauth2Token|M|String|认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section949717114392)中获取的Access Token。|
|appId|M|String|应用ID，获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_queryappinfo)。|

#### 请求示例

以API Client为例：

```
GET https://connect-api.cloud.huawei.com/api/pms/product-price-service/v2/manage/product/promotion?promotionId=26881C5204E7285EFE6E8A7CF955AAA2
Content-Type: application/json
client_id: ***
Authorization: Bearer ***
appId: 1000001
```

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:--------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|error|M|[ErrorResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-pms-errorresult-harmonyosnext-0000002131350724)|包含返回码及描述信息的JSON字符串。|
|promotion|O|[ProductPromotionDetailInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-pms-ppdetailinfo-harmonyosnext-0000002131350732)|促销详情信息。|

#### 响应示例

```
{ 
    "error": { 
        "errorCode": 0, 
        "errorMsg": null 
    }, 
    "promotion": { 
        "defaultTier": "null", 
        "createId": "wwh_xn", 
        "createTime": "2019-12-06 16:28:56", 
        "defaultLocale": "zh-CN", 
        "defaultPrice": "null", 
        "endDate": 1975269862000, 
        "introductory": [], 
        "languages": [], 
        "numberOfUnits": null, 
        "periodUnit": null, 
        "productId": "9C1B4C23702341ACA3F51A9FA1B36BF0", 
        "promotionDesc": "default desc", 
        "promotionId": "26B62881C5204E7285EFE6E8A7CF9552", 
        "promotionTitle": "postman创建13535", 
        "startDate": 1975010662000, 
        "country": null, 
        "currency": null, 
        "status": 1, 
        "promotionStatus": "active", 
        "strategy": "introductory", 
        "prices": [], 
        "updateId": null, 
        "updateTime": null  ,
        "promotionType": 4,
        "betweenOffersNumOfUnits": 5,
        "betweenOffersPeriodUnit": "M"
    } 
}
```

#### 调用示例

```
"Java"
public static ProductPromotionDetailQueryResp getPromotionDetail(String domain, String clientId, 
    String authorization, String appId, String promotionId) { 
    ProductPromotionDetailQueryResp resp = null;  
    try {  
        String url = domain + "/api/pms/product-price-service/v2/manage/product/promotion";  
        HttpGet get = new HttpGet(url + "?promotionId=" + promotionId);  
        get.setHeader(new BasicHeader("Authorization", "Bearer " + authorization));  
        get.setHeader(new BasicHeader("client_id", clientId));  
        get.setHeader(new BasicHeader("appId", appId)); // 使用appId

        CloseableHttpClient httpClient = HttpClients.createDefault();  
        HttpResponse response = httpClient.execute(get);  
        int statusCode = response.getStatusLine().getStatusCode();  
        if (statusCode == HttpStatus.SC_OK) {  
            String result = EntityUtils.toString(response.getEntity(), Consts.UTF_8);  
            if (StringUtils.isNotEmpty(result)) { 
                resp = JSON.parseObject(result, ProductPromotionDetailQueryResp.class);  
            }  
        }  
        get.releaseConnection();  
        httpClient.close();  
    } catch (Exception e) {  
        e.printStackTrace(); // 打印异常信息，以便调试
    }  
    return resp;  
}
```

