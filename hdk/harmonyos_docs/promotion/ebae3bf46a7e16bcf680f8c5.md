---
name: document/cn/promotion/ads_api56-0000001059204282
title: 查询素材
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads_api56-0000001059204282
---

# 查询素材

通过此接口可以查询素材

请求地址

https://ads.cloud.huawei.com/openapi/v2/tools/creative_asset/query

请求方法

GET

请求参数  

|----------------|-------|----|-------------------------------------------------------------------------------------------------------------------------|
|参数名称|类型|是否必选|描述|
|advertiser_id|long|否|广告主ID，当登录授权的华为账号为如下场景时此字段必填： 1）授权账号关联的是经理账户； 2）授权账号关联的是服务商账户； 3）授权账号关联了多个子客账户。|
|page_num|integer|是|搜索页码 取值范围1\~10000|
|page_size|integer|是|一页展示数量 取值范围 10\~50|
|以下为过滤字段||||
|width|integer|否|素材宽度|
|height|integer|否|素材高度|
|asset_id|long|否|素材ID|
|asset_name|string|否|素材名称|
|asset_type|string|否|素材类型 详见[【素材类型】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section5915534154913)|
|file_hash_sha256|string|否|SHA256摘要，用于端侧校验|
|asset_status|string|否|素材状态 详见[【素材状态】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section148011047164910)|

请求示例

=========================================================================================================

GET openapi/v2/tools/creative_asset/query?page_size=10\&page_num=1\&asset_id=XXXXX HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

=========================================================================================================

响应字段  

|-------|-------|----|----|
|参数名称|类型|是否必选|描述|
|code|string|是|返回码|
|message|string|否|返回描述|
|data|Struct1|否|素材列表|

<br />

data(Struct1)定义  

|--------------------|-------|----|-----|
|参数名称|类型|是否必选|描述|
|total|integer|是|素材总条数|
|creative_asset_infos|Struct2|否|素材列表|

creative_asset_infos(Struct2)定义  

|-------------------|-------|----|-------------------------------------------------------------------------------------------------------------------------|
|参数名称|类型|是否必选|描述|
|asset_id|long|是|素材ID|
|asset_name|string|是|素材名称|
|file_url|string|是|文件url信息|
|width|integer|否|素材宽|
|height|integer|否|素材高|
|video_play_duration|integer|否|播放时长|
|file_size|integer|是|文件大小，单位bytes|
|file_format|string|是|详见[【文件格式】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api72-0000001058086561#section1582713372549)|
|asset_type|string|是|素材类型 详见[【素材类型】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section5915534154913)|
|file_hash_sha256|string|否|文件SHA256摘要|
|asset_status|string|否|素材状态 详见[【素材状态】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section148011047164910)|

应答示例

=========================================================================================================

HTTPS/1.1 200 OK

```
{
"code": "200",
"data": {
"total": "1",
"creative_asset_infos": [{
"asset_id": "10000244",
"asset_name": "XXXXXX",
"file_url": "XXXXXXXX",
"width": "1080",
"height": "170",
"video_play_duration": "0",
"file_size": "3448",
"file_format": "image/png",
"file_hash_sha256": "XXXXX"
}]
}
}
```

=========================================================================================================  
