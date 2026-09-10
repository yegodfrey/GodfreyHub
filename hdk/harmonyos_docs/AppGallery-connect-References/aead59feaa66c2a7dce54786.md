---
name: document/cn/AppGallery-connect-References/agcapi-cloudhost-createsite-0000001216061466
title: 创建站点
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-cloudhost-createsite-0000001216061466
---

# 创建站点

#### 功能介绍

此接口用于创建泛域名站点。  

#### 使用约束

无  

#### 接口原型

|承载协议|HTTPS POST|
|接口方向|开发者服务器 -\> 华为服务器|
|接口URL|https://{domain}/api/cloudhosting/web/v1/site/create 其中{domain}依站点区分： * 中国：connect-api.cloud.huawei.com * 德国：connect-api-dre.cloud.huawei.com * 新加坡：connect-api-dra.cloud.huawei.com * 俄罗斯：connect-api-drru.cloud.huawei.com 注意： 调用[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)接口时使用的域名必须与本接口域名保持一致，例如欧洲站点使用"connect-api-dre.cloud.huawei.com"，则调用[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)接口必须使用"https://connect-api-dre.cloud.huawei.com/api/oauth2/v1/token"。|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

#### 请求参数

#### Header

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Authorization|M|String|认证鉴权信息。 认证方式：Bearer token。 格式:"Authorization: Bearer ${access_token}"。 access_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)中获取的access_token。|
|productId|M|String|项目ID，获取方法参考[查询开发者账号ID及项目ID](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-get-developerid-projectid-0000001166543063)。|
|requestid|M|String|自定义的请求字符串，必须唯一标识此请求。|
|client_id|M|String|客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudhost-getstarted-0000001166760172#section59981526588)。|
|service|M|String|API业务标识。固定值：hosting。|

#### Body

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:-----------|:------|
|siteName|M|String(30)|站点名。|
|description|O|String(1000)|站点描述信息。|

#### 请求示例

```
curl --location --request POST 'https://{domain}/api/cloudhosting/web/v1/site/create' \
--header 'productId: 4016977****9908702' \
--header 'requestid: test' \
--header 'client_id: 7261907****1591808' \
--header 'service: hosting' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJraWQiOiI1*************F13GUGkqY' \
--data-raw '{
    "siteName": "fly",
    "description": "1.0.0"
}'
```

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:--------------------------|:----------|:-------------------------------------------------------------|:--------------------------------------------------------------------------------------------|
|ret|O|String|包含返回码及描述信息的JSON字符串，格式为{"code":retcode, "msg": "description"}，retcode为返回码，description为返回码描述信息。|
|site|O|[Site](#ZH-CN_TOPIC_0000001216061466__table1381252211130)|站点信息。|
|siteDomains|O|[siteDomain](#ZH-CN_TOPIC_0000001216061466__table381622281316)|域名模型。|
|rejected|O|Boolean|创建站点是否被拒绝。|
|secondLevelDomainSitesCount|O|Integer|二级域名下子域名数量（泛域名忽略此字段）。|

Site  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-----------|:----------|:------|:------------|
|siteId|M|String|站点ID。|
|siteName|M|String|站点名称。|
|tenantId|M|String|租户ID，与项目ID一致。|
|totalSize|M|Integer|站点内版本压缩包总大小。|
|status|M|Integer|站点状态。|
|curVersion|M|String|当前版本号。|
|description|M|String|描述。|
|createDate|M|Long|创建时间。|
|modifyDate|M|Long|修改时间。|
|businessType|M|Integer|托管类型：0-网站托管。|

siteDomain  

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-------------|:----------|:------|:------------|
|domain|M|String|域名。|
|siteId|M|String|站点ID。|
|siteName|M|String|站点名称。|
|tenantId|M|String|租户ID，与项目ID一致。|
|domainType|M|Integer|域名类型：0-泛域名。|
|createDate|M|Long|创建时间。|
|modifyDate|M|Long|修改时间。|
|certExpireTime|M|Long|域名证书过期时间。|
|businessType|M|Integer|托管类型：0-网站托管。|

#### 响应示例

#### 成功示例

```
{
    "site": {
        "siteId": "7HfJOkoUSIm_RYsfHkljpg",
        "siteName": "fly",
        "tenantId": "401697704419908702",
        "totalSize": 0,
        "optCount": 0,
        "status": 1,
        "description": "1.0.0",
        "createDate": 1646901458642,
        "modifyDate": 1646901458642,
        "versionCount": 0,
        "businessType": 0
    },
    "siteDomains": [
        {
            "domain": "fly.hosting-drcn.agconnect.link",
            "siteId": "7HfJOkoUSIm_RYsfHkljpg",
            "siteName": "fly",
            "tenantId": "401697704419908702",
            "domainType": 0,
            "bandwidth": 0,
            "createDate": 1646901458642,
            "modifyDate": 1646901458642,
            "certExpireTime": 0,
            "businessType": 0
        }
    ],
    "rejected": false,
    "secondLevelDomainSitesCount": 0
}
```

#### 鉴权失败示例

```
{
    "ret": {
        "code": 205524993,
        "msg": "client token auth failed"
    }
}
```

