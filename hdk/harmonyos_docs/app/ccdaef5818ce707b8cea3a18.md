---
name: document/cn/app/agc-help-provision-api-create-appid-0000002526543939
title: 创建APP ID
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-create-appid-0000002526543939
---

# 创建APP ID

## 功能介绍

此接口用于为HarmonyOS应用/元服务创建APP ID。

## 接口原型

|承载协议|HTTPS POST|
|-----|-------------------------------------------------------------------|
|接口方向|开发者服务器 -> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/publish/v3/app|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|

## 请求参数

### Header

> 说明
>
> 本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account** **方式：**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer *${JWT}* "。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。|

**API客户端方式：**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。|
|Authorization|M|String|认证信息，格式为"Authorization: Bearer *${access_token}* "。access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access_token。|

**OAuth客户端方式：**

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|teamId|M|String(64)|开发者所在团队的团队ID。|
|oauth2Token|M|String|认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。|

### Query

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:--------|:----------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
|projectId|O|String|项目ID，获取方法请参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 如果不传projectId，系统会先在内部创建一个与应用同名的项目，随后再创建应用。|

### Body

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:---------------|:----------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------|
|appName|M|String(64)|应用名称。|
|packageName|O|String(128)|应用包名，必须唯一，且不能与其他应用（包括Android应用）包名相同。 > 说明 > * installationFree取值为0（HarmonyOS应用）时，此参数必填。 > * installationFree取值为1（元服务）时，系统将自动生成包名，此参数无需填写。|
|parentType|M|Integer(32)|应用分类。 取值范围： * 2：游戏 * 13：应用|
|installationFree|M|Integer(32)|应用类型。 取值范围： * 0：HarmonyOS应用 * 1：元服务 默认值：0|

## 请求样例

```screen
POST /api/publish/v3/app?projectId=10****59 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
  "appName": "appName",
  "packageName": "com.xxx.xxx",
  "parentType": 13,
  "installationFree": 0
}
```

## 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----|:----------|:-------------------------------------------------------------------------------------------------------------------|:-------------|
|ret|M|[ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589)|包含返回码及描述信息的结果。|
|appId|O|String|应用ID。|

## 响应示例

```screen
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "appId": "69****117" 
}
```

