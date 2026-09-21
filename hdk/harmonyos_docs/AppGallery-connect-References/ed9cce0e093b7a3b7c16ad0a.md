---
name: document/cn/AppGallery-connect-References/agcapi-updateproductgroup-harmonyosnext-0000002166670137
title: 更新商品订阅分组信息
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-updateproductgroup-harmonyosnext-0000002166670137
---

# 更新商品订阅分组信息

## 功能介绍

此接口用于更新商品订阅分组信息。

## 使用约束

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

## 接口原型

|承载协议|HTTPS PUT|
|-----|------------------------------------------------------------------------------------------|
|接口方向|开发者服务器->数字商品服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/pms/product-price-service/v2/manage/product/group|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

### Header

> 说明
>
> API Client和OAuth Client区别参见[使用入门](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114)。

**API Client方式**

|参数|必选(M)/可选(O)|类型|描述|
|:------------|:----------|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|
|appId|M|String|应用ID，获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_queryappinfo)。|

**OAuth Client方式**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|oauth2Token|M|String|认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section949717114392)中获取的Access Token。|
|appId|M|String|应用ID，获取方法参考[查询应用信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/appgallery_queryappinfo)。|

### Body

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:--------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|
|requestId|M|String(64)|请求序列，开发者自定义唯一标识符。|
|resource|M|[ProductGroupInfo](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-pms-pgroupinfo-harmonyosnext-0000002131508868)|商品分组信息。|

## 请求示例

以API Client为例：

```screen
PUT https://connect-api.cloud.huawei.com/api/pms/product-price-service/v2/manage/product/group
Content-Type: application/json
client_id: ***
Authorization: Bearer ***
appId: 1000001

{
	"requestId": "123",
	"resource": {
		"groupId": "24D8D29153E64F92BCCBA4CA218108AB",
		"groupName": "product_group_modify_1000003",
		"status": "active"
	}
}
```

## 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
|error|M|[ErrorResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-pms-errorresult-harmonyosnext-0000002131350724)|包含返回码及描述信息的JSON字符串。|

## 响应示例

```screen
{
	"error": {
		"errorCode": 0,
		"errorMsg": null
	}
}
```

## 调用示例

```screen
"Java"
public static ProductGroupUpdateResp updateProductGroupInfo(String domain, String clientId, String authorization, 
    String appId, ProductGroupUpdateReq request) { 
    ProductGroupUpdateResp resp = null;  
    try {  
        String url = domain + "/api/pms/product-price-service/v2/manage/product/group";  
        HttpPut put = new HttpPut(url);  
        put.setHeader(new BasicHeader("Authorization", "Bearer " + authorization));  
        put.setHeader(new BasicHeader("client_id", clientId));  
        put.setHeader(new BasicHeader("appId", appId)); // 使用appId

        StringEntity entity = new StringEntity(JSON.toJSONString(request),  
            ContentType.create("application/json", "UTF-8"));  
        put.setEntity(entity);  

        CloseableHttpClient httpClient = HttpClients.createDefault();  
        HttpResponse response = httpClient.execute(put);  
        int statusCode = response.getStatusLine().getStatusCode();  
        if (statusCode == HttpStatus.SC_OK) {  
            String result = EntityUtils.toString(response.getEntity(), Consts.UTF_8);  
            resp = JSON.parseObject(result, ProductGroupUpdateResp.class);  
        }  
        put.releaseConnection();  
        httpClient.close();  
    } catch (Exception e) {  
        e.printStackTrace(); // 打印异常信息，以便调试
    }  
    return resp;  
}
```

