---
name: document/cn/promotion/ads-15611-0000002560733699
title: 人群包上传
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads-15611-0000002560733699
---

# 人群包上传

【简介】通过API方式在广告DMP上创建人群包，需要您先通过API方式将包含设备ID的文件上传至Ads的OBS中

**请求地址**

https://svc-drcn.ads.huawei.com/opendmp/v1/audience/file/upload

**请求方法**

**POST**

**请求参数**

|------------|-------------------|--------|------|
|**参数名称**|**类型**|**是否必选**|**描述**|
|file|multipart/form-data|是|文件流|
|deviceIDType|String|是|类型|

文件大小及格式要求

文件是zip压缩包

zip文件内是一个txt文件,txt文件不为空

txt文件大小超过1G，行数小于3000万

文件内容说明

示例:

55bde5906cf4c621XXXe81e1fadb58683d7053594a68d

74875906cf4c621XXXe81e1fadb58683d705359474895

说明：

1)Txt文件中，每行代表一个设备ID

2)文件只能包含一种设备ID类型，使用 deviceIDType传参值 标识整个文件的设备ID 类型 （当设备ID类型非3的时候，deviceIDType 必传）

3)目前支持以下几种设备ID及类型：

|-----------|---------------|
|**设备ID**|**设备** **ID类型**|
|OAID-sha256|3|
|GAID-sha256|4|
|OAID-MD5|6|
|GAID-MD5|7|
|手机号-MD5|8|
|手机号-sha256|9|

**请求示例**

POST https://${base_address}/opendmp/v1/audience/file/upload HTTP/1.1 Headers:

Content-Type: application/json

Authorization：Bearer DAEAAIX7ISfTb+NErs*****hPPri5SbmCiZ0g0Hw2PryODiEnUiJkub FRe4TQtxNeGPQphveHdUMACAjDxduayVZWe+FOSsdoNV/H6TRM3g3Pd81PDmWiM1KS 2

Body:

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/NpidVFEBS72nM_0Xf7xCsA/zh-cn_image_0000002529827746.png?HW-CC-KV=V1&HW-CC-Date=20260918T093103Z&HW-CC-Expire=31536000000&HW-CC-Sign=5AA0743A13AAA23552A21C1D105FB0F9146D23ADCA2801F9122475CDA1A86D2D)

**响应字段**

|------------|------|------|--------|------------------------|
|**参数名**|**类型**|**长度**|**是否必填**|**说明**|
|code|int|-|Y|响应码|
|message|String|2048|N|描述|
|value|object|-|N|NA|
|downloadUrls|String|-|Y|人群包地址（格式：dmpid/ 文件名.zip）|

常见状态码

|HTTP状态码|结果码|结果码说明|响应消息|
|:------|:-------|:-------|:-------|
|200|-|-|-|
|400|请参考错误码说明|请参考错误码说明|请参考错误码说明|
|401|请参考错误码说明|请参考错误码说明|请参考错误码说明|

错误码说明

|-------|----------|---------------------------------------------------------------------------|
|HTTP状态码|结果码|结果码说明|
|200|200|成功|
|400|1000009001|参数错误 Parameter request error.|
|400|1000009555|request obtain access token error|
|400|1000009033|Site id is invalid!|
|400|1000009034|Update type is invalid|
|400|1000009035|Scale value is invalid|
|400|1000009036|Site id required|
|400|1000009037|Audiences name is required|
|400|1000009038|Audiences url is required|
|401|1000009020|非法token Invalid client id|
|401|1000009030|非法token Invalid token bearer|
|401|1000009022|No Authorization header exist|
|401|1000009023|Request header does not contain Digest username|
|401|1000009024|App Id could not be determined|
|401|1000009025|User type does not match with version in the dmp-mapping（dmp-mapping没有配置周全）|
|401|1000009027|Algorithm name is invalid|
|401|1000009029|Invalid Realm|
|429|1000009011|请求频率过高 Too many request|
|500|1000009000|系统内部错误 Huawei internal server error (General)|

**应答示例**

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fd/v3/UyPseD_4RkWuHZ6Sx2qDxg/zh-cn_image_0000002529787752.png?HW-CC-KV=V1&HW-CC-Date=20260918T093103Z&HW-CC-Expire=31536000000&HW-CC-Sign=C8E876ED725E3F3029DCCB8647F1896435105D4184D07376484B7377DC2FD144)

