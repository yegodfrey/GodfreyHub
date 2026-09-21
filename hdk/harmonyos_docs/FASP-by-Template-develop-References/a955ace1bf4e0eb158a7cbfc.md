---
name: document/cn/FASP-by-Template-develop-References/get-authorization-list-0000001552377409
title: 获取已授权账号信息
uri: https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-authorization-list-0000001552377409
---

# 获取已授权账号信息

## 功能介绍

此接口用于获取授权列表，使用该接口可以获取当前所有已授权的账号基本信息。

## 接口原型

|**承载协议**|HTTPS POST|
|---------|-----------------------------------------------------------------------|
|**接口方向**|服务商服务器 -> 华为服务器|
|**接口URL**|https://connect-api.cloud.huawei.com/api/auth/v1/get-authorizer-list|
|**数据格式**|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

### Header

|**参数**|必选(M)/可选(O)|**类型**|**说明**|
|:------------|:----------|:-----|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台"开发配置 > 开发资料设置"页面中获取，详情请参见[获取平台访问凭据](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/obtain-development-infor-0000002523235520#section3986829135420)。|
|Authorization|M|String|认证信息。 格式为"Authorization: Bearer *${access_token}*"。 其中，*${access_token}* 为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-token-0000001569170877)中获取的access_token。|

### Body

|参数|必选(M)/可选(O)|类型|说明|
|:-----|:----------|:------|:----------------|
|count|M|Integer|每页返回记录的数量，最大100条。|
|offset|M|Integer|查询的页数，最小填1，表示第1页。|

## 请求示例

```screen
{
  "count": 10,
  "offset": 1
}
```

## 响应参数

|**参数**|**类型**|**说明**|
|:---------|:----------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
|ret|[CodeAndMsg](#ZH-CN_TOPIC_0000002095034916__p4532204018325)|包含返回码及描述信息。 返回码详情请参见[错误码](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/error-code-information-0000001556590441)。|
|totalCount|Long|授权的账号总数。|
|list|[GrantResourceListPojo []](#ZH-CN_TOPIC_0000002095034916__p58320555254)|当前查询的账号基本信息列表。|

**CodeAndMsg**

|**参数**|**类型**|**说明**|
|:-----|:------|:-------|
|code|Integer|返回码。|
|msg|String|返回码描述信息。|

**GrantResourceListPojo**

|**参数**|**类型**|**说明**|
|:--------------|:-----|:----------------|
|authorizerAppId|String|已授权账号的应用ID。|
|authTime|Long|授权时间，返回最后更新授权的时间。|

## 响应示例

```screen
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "totalCount": 2,
    "list": [
        {
            "authorizerAppId": "112****3",
            "authTime": 1679925391000
        },
        {
            "authorizerAppId": "****",
            "authTime": 1679991913000
        }
    ]
}
```

