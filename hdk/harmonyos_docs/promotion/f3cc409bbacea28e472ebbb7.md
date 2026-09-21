---
name: document/cn/promotion/ads_new_api11-0000001456040065
title: 查询定向字典
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads_new_api11-0000001456040065
---

# 查询定向字典

【简介】通过此接口可以查询定向字典

**请求地址**

https://ads.cloud.huawei.com/ads/v1/tools/dictionary/query

**请求方法**

**GET**

**请求参数**

|--------------|--------|--------|--------------------------------------------------------------------------------------------------------------------------------|
|**参数名称**|**类型**|**是否必选**|**描述**|
|advertiser_id|long|否|广告主ID，当登录授权的华为账号为如下场景时此字段必填： 1）授权账号关联的是经理账户； 2）授权账号关联的是服务商账户； 3）授权账号关联了多个子客账户。|
|targeting_list|string[]|是|用户查询哪些定向模板集合 详见[【定向模板集合】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api721-0000001641010849#section14627112788)|
|language|string|否|语言码，支持zh_CN,en_US,ru_RU三种|

**请求示例**

```codeblock
GET /ads/v1/tools/targeting_package/dictionary/query HTTP/1.1
Accept:application/json
Content-Type:application/json
Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=
{
"language": "zh_CN",
"targeting_list": [
"current_dmp_geo",
"current_level_geo",
"gender",
"age",
"app_category",
"app_interest",
"series_type",
"device_price",
"network_type",
"pre_define_audience",
"not_pre_define_audience",
"media_app_category",
"brand"
]
}
```

**响应字段**

|--------|-------|------|
|**参数名称**|**类型**|**描述**|
|code|string|返回码|
|message|string|返回描述|
|data|Struct1|定向字典列表|

data(Struct1)定义

|--------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------|
|**参数名称**|**类型**|**描述**|
|tree_targeting_map|Map<string, Struct2[]>|树状结构定向数据 Map中的Key为： current_dmp_geo、current_level_geo app_category、series_type、 feature_audience|
|linear_targeting_map|Map<string, Struct3[]>|线状结构定向数据 Map中的Key为： gender、age、app_interest、device_price、network_type、pre_define_audience、not_pre_define_audience、media_app_category|

tree_targeting_map (Struct2)定义

|--------|------|-------|
|**参数名称**|**类型**|**描述**|
|id|string|元素ID|
|pid|string|父节点元素ID|
|label|string|显示的内容|
|value|string|元素的值|

linear_targeting_map (Struct3)定义

|----------|------|-----------------------------------------------------------------------|
|**参数名称**|**类型**|**描述**|
|id|string|元素ID|
|label|string|显示的内容|
|value|string|元素的值|
|additional|string|pre_define_audience、not_pre_define_audience定向存在，内容为"公共"、"专属"、"私有"，展示时使用|

**应答示例**

```codeblock
HTTPS/1.1 200 OK

{
"code": "200",
"data": {
"linear_targeting_map": {
"gender": [
{
"label": "男",
"value": "0"
},
{
"label": "女",
"value": "1"
}
],
"age": [
{
"label": "18~23岁",
"value": "1"
},
{
"label": "24~34岁",
"value": "2"
},
{
"label": "35~44岁",
"value": "3"
},
{
"label": "45~54岁",
"value": "4"
},
{
"label": "55岁及以上",
"value": "5"
}
]
}
}
}
```

