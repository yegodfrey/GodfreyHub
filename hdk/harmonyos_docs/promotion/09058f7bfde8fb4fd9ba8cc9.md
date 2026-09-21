---
name: document/cn/promotion/ads_api33-0000001058204671
title: 查询应用详情
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads_api33-0000001058204671
---

# 查询应用详情

通过此接口可以查询应用详情。新建任务时，可以通过此接口查询应用详情在界面展示给用户。

**请求地址**

https://ads.cloud.huawei.com/openapi/v2/promotion/adgroup/app_detail/query

**请求方法**

**GET**

**请求参数**

|-------------|------|--------|------------------------------------------------------------------------------|
|**参数名称**|**类型**|**是否必选**|**描述**|
|advertiser_id|long|否|广告主ID，当登录授权的华为账号为如下场景时此字段必填： 1）授权账号关联的是经理账户； 2）授权账号关联的是服务商账户； 3）授权账号关联了多个子客账户。|
|store_app_id|string|是|华为应用市场的App ID|

**请求示例**

==========================================================================================================GET openapi/v2/promotion/adgroup/app_detail/query?store_app_id=C3000075007 HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

==========================================================================================================

**响应字段**

|--------|-------|--------|------|
|**参数名称**|**类型**|**是否必选**|**描述**|
|code|string|是|返回码|
|message|string|否|返回描述|
|data|Struct1|否|应用详情|

Struct1定义

|------------|------|--------|------------|
|**参数名称**|**类型**|**是否必选**|**描述**|
|store_app_id|string|是|华为应用市场App ID|
|package_name|string|是|包名|
|product_name|string|是|应用名称|
|icon_url|string|是|应用图标|
|description|string|是|描述/介绍|

**应答示例**

=========================================================================================================

HTTPS/1.1 200 OK

    {
    "code": "200",
    "data": {
    "icon_url": "https://appimg.dbankcdn.com/hwmarket/files/application/icon144/fc5e43d094,
    "package_name": "com.zjxnkj.countrysidecommunity",
    "description": "村支书便民服务平台",
    "store_app_id": "C100643361",
    "package_name": "村支书",
    "devunion_app_id": "300075007"
    }
    }

=========================================================================================================

