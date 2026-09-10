---
name: document/cn/app/agc-help-test-api-query-test-user-0000002664997773
title: 查询测试群组成员
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-query-test-user-0000002664997773
---

# 查询测试群组成员

#### 功能介绍

此接口用于查询测试群组成员。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。  
![](https://media:201786345709591676)  
"内部群组"为AppTest专属能力，如果您希望体验此能力，但您的应用尚未切换为AppTest邀请测试，可以通过[在线工单系统](https://developer.huawei.com/consumer/cn/support/feedback/#/?channel=ICS0000)与我们联系。工单"问题分类"请选择"上架与运营-应用市场-应用测试"，并在"问题描述"中提供您的开发者名称、开发者ID、应用名称、APP ID。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者服务器 -\> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/app-test/v1/test-user|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|-------------------------------------------------------------------|

#### 请求参数

<br />

#### Header

![](https://media:201786345709617677)  
本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

Service Account方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${JWT}"。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。|
|appId|M|String(32)|应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|

API客户端方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer ${access_token}"。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access_token。|
|appId|M|String(32)|应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|

OAuth客户端方式：  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|teamId|M|Integer(int64)|开发者所在团队的团队ID。|
|oauth2Token|M|String|认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。|
|appId|M|String(32)|应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。|

#### Query

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-------|:----------|:---------|:----------|
|groupId|M|String(32)|测试群组ID。|
|appId|M|String(32)|应用ID。|
|current|O|Integer|当前页。 默认值：1|
|pageSize|O|Integer|每页数。 默认值：25|

#### 请求示例

```
 GET /api/app-test/v1/test-user HTTP/1.1 
 Host: connect-api.cloud.huawei.com 
 client_id: 4141******68 
 Content-Type: application/json 
 Authorization: Bearer ******* 
 appId:69175*******88965
 groupId:3d9b11d5d0774efb9af4f9a807347e49
 current: 1
 pageSize: 25
```

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-----------|:----------|:-----|:-------------------------------------------------------------|
|rtnCode|M|String|返回码。 取值范围： * 0：成功 * 1：参数校验不通过。 * 2：越权错误。 * 3：并发修改错误 * -1：内部异常。|
|rtnDesc|O|String|返回码描述信息。|
|businessCode|O|String|业务错误码。 取值范围： * 100：测试群组已存在生效邀请码。 * 101：测试群用户数量已达上限。|
|testerInfo|O|Object|测试员信息。|
|pageInfo|O|Object|分页信息。|

#### 响应示例

```
{
  "rtnCode": 0,
  "rtnDesc": "string",
  "businessCode": 0,
  "testerInfo": [
    {
      "id": "string",
      "hwAccount": "string",
      "nickName": "string",
      "joinType": 0,
      "joinTime": 0,
      "latestInstallTime": 0,
      "versionName": "string",
      "versionCode": 0,
      "build": "string"
    }
  ],
  "pageInfo": {
    "current": 0,
    "pageSize": 0,
    "totalRecord": 0,
    "totalPage": 0
  }
}
```

