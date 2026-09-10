---
name: document/cn/FASP-by-Template-develop-References/recordal-order-detail-0000002489083858
title: 查询备案订单详情
uri: https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-order-detail-0000002489083858
---

# 查询备案订单详情

#### 功能介绍

此接口用于查询备案订单的详情信息，以支持预览备案订单详情。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|服务商服务器 -\> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/icp-manage/v1/order/detail|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|
|-----|-------------------------------------------------------------------|

#### 请求参数

<br />

#### Header

|参数|必选(M)/可选(O)|类型|说明|
|:------------|:----------|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台"开发配置 \> 开发资料设置"页面中获取，详情请参见[获取平台访问凭据](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/obtain-development-infor-0000002523235520#section3986829135420)。|
|Authorization|M|String|认证信息。 格式为"Authorization: Bearer ${access_token}"。 其中，${access_token}为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-token-0000001569170877)中获取的access_token。|
|appId|M|String(32)|应用ID。 元服务则为元服务的应用ID。 应用ID可以调用[获取指定授权账号详情](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-authorization-info-0000001501417588)接口从authorizerAppId字段获取。|

#### Query

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------|:----------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|orderId|M|Integer(64)|备案订单ID。 此入参值可以在调用[备案订单创建](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-subject-website-0000002489243844)、或[查询备案订单列表](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-order-infos-0000002521243661)接口时，从orderId字段中获取。|

#### 请求示例

```
GET /api/icp-manage/v1/order/detail?orderId=122025112000**25 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
appId: 10*****57
Content-Type: application/json
Authorization: Bearer *******
```

#### 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:----------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|ret|M|[BaseRet](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-baseret-0000002521363669)|包含返回码及描述信息的结果。|
|orderDetail|O|[OrderDetailInfo](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-orderdetailinfo-0000002521243683)|备案订单的详细信息。|

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "orderDetail": {
        "status": 3,
        "orderId": 122025****017136,
        "clientType": 0,
        "orderType": 0,
        "customerId": "97f3335bb9b****698582016c67b10d0",
        "customerLevelId": "15fe93904****16d74d3f7",
        "subjectId": 10202****7017137,
        "curtainAuditStatus": 1,
        "currentHandlerId": "y00****68",
        "creatorId": "97f3335bb9b****698582016c67b10d0",
        "createTime": 1764248538000,
        "submitTime": 1764249748000,
        "updateTime": 1764249748000,
        "subjectInfo": {
            "status": 0,
            "remarks": "",
            "subjectId": 10202****7017137,
            "provinceId": 320000,
            "provinceName": "江苏省",
            "cityId": 320100,
            "cityName": "南京市",
            "countryId": 320101,
            "countryName": "市辖区",
            "recordRegion": "江苏省南京市市辖区",
            "unitPropertyId": 4,
            "unitPropertyName": "企业",
            "certificateTypeId": 1,
            "certificateTypeName": "营业执照（个人或企业）",
            "certificateNo": "3101****4A0N",
            "certificateAddr": "上海市浦市新区****129号16楼1008室",
            "subjectName": "上海****科技有限公司",
            "regionAddr": "江苏省南京市",
            "detailAddr": "雨花华为研究所",
            "contactAddr": "江苏省南京市雨花华为研究所",
            "leadingOfficial": {
                "name": "金阳",
                "email": "hga****d@136.com",
                "watermark": 0,
                "reuse": false,
                "officialId": 16202****7017138,
                "officialCertificateTypeId": 2,
                "officialCertificateTypeName": "居民身份证",
                "officialCertificateNo": "522322199****74617",
                "phoneNum": "1994****468",
                "phoneCity": "",
                "emergencyTel": "1391****247",
                "emergencyTelCity": "江苏省南通市",
                "phoneValidStatus": 1,
                "checkStatus": 3,
                "checkResultDesc": "证件照与真实性核验照片、证件照与权威库、真实性核验照片与权威库比对都失败",
                "accessories": [
                    {
                        "id": "7ccde6fb1afa****99c5bd8a0676081b",
                        "type": 2,
                        "side": 1,
                        "relationId": "16202****7017138",
                        "accessoryId": "5be12d089a7e4****bd6d325c120ea9e",
                        "valid": true,
                        "initialAccessoryId": "5be12d089a****32abd6d325c120ea9e",
                        "accessoryLength": 773984,
                        "allowModify": false,
                        "updateTime": "2025-11-27T13:19:42.000Z"
                    },
                    {
                        "id": "bf52c64743ab****b048579152ef7687",
                        "type": 2,
                        "side": 0,
                        "relationId": "16202****7017138",
                        "accessoryId": "2660c8246b****c287fac753366167fd",
                        "valid": true,
                        "initialAccessoryId": "2660c82****443c287fac753366167fd",
                        "accessoryLength": 704931,
                        "allowModify": false,
                        "updateTime": "2025-11-27T13:19:21.000Z"
                    }
                ],
                "certificatePeriod": "2004.10.27-长期"
            },
            "accessories": [
                {
                    "id": "16772f7c044****190a19c7a0a6a1a23",
                    "type": 1005,
                    "side": 0,
                    "relationId": "10202****7017137",
                    "accessoryId": "58993f76613145****4a445db16306a8",
                    "valid": true,
                    "initialAccessoryId": "58993f76613****bba4a445db16306a8",
                    "accessoryLength": 202927,
                    "riskType": "0",
                    "allowModify": false,
                    "updateTime": "2025-11-27T13:03:01.000Z"
                },
                {
                    "id": "465b8d92c4b84d9****5b60d906ff4a8",
                    "type": 2013,
                    "side": 0,
                    "relationId": "10202511****7137",
                    "accessoryId": "82211be7c4a04b28****adf6b3d4d5df",
                    "valid": true,
                    "initialAccessoryId": "82211be7c4a04****602adf6b3d4d5df",
                    "accessoryLength": 202927,
                    "riskType": "0",
                    "allowModify": false,
                    "updateTime": "2025-11-27T13:03:27.000Z"
                },
                {
                    "id": "805d43af5b41****86a1095edb993817",
                    "type": 1,
                    "side": 0,
                    "relationId": "10202****7017137",
                    "accessoryId": "3f02c10f33cd****b688f8ca7b58cd04",
                    "valid": true,
                    "initialAccessoryId": "3f02c10f3****38fb688f8ca7b58cd04",
                    "accessoryLength": 788880,
                    "riskType": "0",
                    "allowModify": false,
                    "updateTime": "2025-11-27T12:53:40.000Z"
                },
                {
                    "id": "9a54ae3e2d7d42****c72bd44371eb3f",
                    "type": 2043,
                    "side": 0,
                    "relationId": "10202511****7137",
                    "accessoryId": "879516f421664****18115ed8896f8b6",
                    "valid": true,
                    "initialAccessoryId": "879516f421664****18115ed8896f8b6",
                    "accessoryLength": 202927,
                    "riskType": "0",
                    "allowModify": false,
                    "updateTime": "2025-11-27T13:03:33.000Z"
                }
            ],
            "auditStatus": 0,
            "websiteList": [],
            "isLegalPerson": 0,
            "checkStatus": 3,
            "verifySubjectResultsJson": "[{\"fieldName\":\"legalPersonVerify\",\"subjectInfo\":null,\"ocrInfo\":null,\"checkPlatformInfo\":null,\"checkResult\":\"待确认\",\"confirmStatus\":1},{\"fieldName\":\"certificateValidityPeriod\",\"subjectInfo\":null,\"ocrInfo\":\"2014年09月19日至2004年09月16日\",\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"adminDepart\",\"subjectInfo\":null,\"ocrInfo\":null,\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"businessStatus\",\"subjectInfo\":null,\"ocrInfo\":null,\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"legalPerson\",\"subjectInfo\":\"金阳\",\"ocrInfo\":\"文圣鑫\",\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"businessScope\",\"subjectInfo\":null,\"ocrInfo\":\"从事网络科技，，技术*备、技卡C、询（）会业服务，皮电广制售、办公用品。包装材料、泰用电器、工艺礼品、机械设备、建筑装满五金电、计算机及配件（除计集机信息系安金专产品）的侧【依法须经批准的项目，经相关部门批准后方可开展经营活动】\",\"checkPlatformInfo\":null,\"checkResult\":\"正常\",\"confirmStatus\":0},{\"fieldName\":\"subjectName\",\"subjectInfo\":\"上海****科技有限公司\",\"ocrInfo\":\"上海****科技有限公司\",\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"certificateAddress\",\"subjectInfo\":\"上海市浦市新区****129号16楼1008室\",\"ocrInfo\":\"上海市浦市新区****129号16楼1008室\",\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"unitProperty\",\"subjectInfo\":\"企业\",\"ocrInfo\":null,\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1},{\"fieldName\":\"validTime\",\"subjectInfo\":null,\"ocrInfo\":\"2014年♥月10日\",\"checkPlatformInfo\":null,\"checkResult\":\"待人工确认\",\"confirmStatus\":1}]",
            "includedSensitiveWord": false
        },
        "websiteInfos": [
            {
                "status": 0,
                "remarks": "",
                "websiteId": 11202****7017139,
                "websiteName": "元服务001",
                "homePage": "",
                "auditStatus": 0,
                "websiteRecordId": "",
                "curtainAuditStatus": 1,
                "ipInfos": [],
                "domains": [],
                "serviceContentIds": [
                    "33",
                    "34",
                    "35"
                ],
                "serviceTypeId": 8,
                "serviceTypeName": "快应用",
                "languageId": "1",
                "languageName": "中文简体",
                "preApproveInfos": [],
                "websiteAppletInfo": {
                    "appletId": 50202****7017140,
                    "appletFeature": "com.atomicservice.69175906****6132200"
                },
                "leadingOfficial": {
                    "name": "金阳",
                    "email": "hga****gd@136.com",
                    "watermark": 0,
                    "reuse": false,
                    "officialId": 16202****7017138,
                    "officialCertificateTypeId": 2,
                    "officialCertificateTypeName": "居民身份证",
                    "officialCertificateNo": "52232****611274617",
                    "phoneNum": "19****26468",
                    "phoneCity": "",
                    "emergencyTel": "139****1247",
                    "emergencyTelCity": "江苏省南通市",
                    "phoneValidStatus": 1,
                    "checkStatus": 3,
                    "checkResultDesc": "证件照与真实性核验照片、证件照与权威库、真实性核验照片与权威库比对都失败",
                    "accessories": [
                        {
                            "id": "7ccde6fb1afa****99c5bd8a0676081b",
                            "type": 2,
                            "side": 1,
                            "relationId": "16202****7017138",
                            "accessoryId": "5be12d089a7****2abd6d325c120ea9e",
                            "valid": true,
                            "initialAccessoryId": "5be12d08****4832abd6d325c120ea9e",
                            "accessoryLength": 773984,
                            "allowModify": false,
                            "updateTime": "2025-11-27T13:19:42.000Z"
                        },
                        {
                            "id": "bf52c64743ab4****048579152ef7687",
                            "type": 2,
                            "side": 0,
                            "relationId": "16202****7017138",
                            "accessoryId": "2660c8246b****c287fac753366167fd",
                            "valid": true,
                            "initialAccessoryId": "2660c8246b****c287fac753366167fd",
                            "accessoryLength": 704931,
                            "allowModify": false,
                            "updateTime": "2025-11-27T13:19:21.000Z"
                        }
                    ],
                    "certificatePeriod": "2004.10.27-长期"
                },
                "accessories": [
                    {
                        "id": "18aa52bbb13f****bfbad858fb4990a1",
                        "type": 1007,
                        "side": 0,
                        "relationId": "112025****017139",
                        "accessoryId": "3f9b641e9f1f4****f1ccf6bc57576db",
                        "valid": true,
                        "initialAccessoryId": "3f9b641e****42a38f1ccf6bc57576db",
                        "checked": 0,
                        "checkRemark": "",
                        "accessoryLength": 55078,
                        "allowModify": false,
                        "updateTime": "2025-11-27T13:22:27.000Z"
                    },
                    {
                        "id": "4629a4d51bd****98aae90e87ae00bb9",
                        "type": 1002,
                        "side": 0,
                        "relationId": "112025****017139",
                        "accessoryId": "3d073e5346****4fa948236bddf41729",
                        "valid": true,
                        "initialAccessoryId": "3d073e534****b4fa948236bddf41729",
                        "checked": 0,
                        "checkRemark": "",
                        "accessoryLength": 48845,
                        "allowModify": false,
                        "updateTime": "2025-11-27T13:22:28.000Z"
                    },
                    {
                        "id": "903f77dab9c34****cb3e8424fad19c2",
                        "type": 1008,
                        "side": 0,
                        "relationId": "11202****7017139",
                        "accessoryId": "08599bbd7****8aabeb22faa9daef581",
                        "valid": true,
                        "initialAccessoryId": "08599bbd7****8aabeb22faa9daef581",
                        "checked": 0,
                        "checkRemark": "",
                        "accessoryLength": 456054,
                        "allowModify": false,
                        "updateTime": "2025-11-27T13:21:03.000Z"
                    },
                    {
                        "id": "9be6f05a034e447****22d1e0e891ed8",
                        "type": 1004,
                        "side": 0,
                        "relationId": "11202****7017139",
                        "accessoryId": "dd7b9f38eea****69294c9d85b7a23ae",
                        "valid": true,
                        "initialAccessoryId": "dd7b9f38eea****69294c9d85b7a23ae",
                        "checked": 0,
                        "checkRemark": "",
                        "accessoryLength": 176683,
                        "allowModify": false,
                        "updateTime": "2025-11-27T13:21:03.000Z"
                    }
                ],
                "signStatus": 0,
                "includedSensitiveWord": false,
                "domainVerifyStatus": 0,
                "domainIncludedSensitiveWord": false
            }
        ],
        "accessories": [],
        "orderChangeLogs": [],
        "ispMark": 1
    }
}
```

