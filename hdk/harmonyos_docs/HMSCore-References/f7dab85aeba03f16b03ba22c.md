---
name: document/cn/HMSCore-References/query-health-trends-0000002039289036
title: 查询健康趋势
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/query-health-trends-0000002039289036
---

# 查询健康趋势

#### 功能介绍

查询特定健康数据类型对应的数据项的趋势统计结果。  

#### 场景描述

针对特定健康数据类型，返回其可统计趋势的数据项的趋势统计结果。  

#### 使用约束

* 联盟卡片申请数据类型对应的权限。
* 仅支持部分开发者使用，如有需要，可[提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)或者发送邮件至[hihealth@huawei.com](mailto:hihealth@huawei.com)进行咨询。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者应用-\>Health Service Kit云|
|接口URL|https://health-api.cloud.huawei.com/healthkit/v2/healthTrends?dataType=\*\*\*\&lang=\*\*\*\&timeZone=\*\*\*|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|-----------------------------------------------------------------------------------------------------------|

#### 查询参数

|参数|参数类型|是否必选|描述|
|:-------|:-----|:---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|dataType|String|是|数据类型的名称。支持的数据类型和可统计趋势项如下： * com.huawei.continuous.steps.delta：步数 * com.huawei.continuous.calories.burnt：热量 * com.huawei.instantaneous.resting_heart_rate：静息心率 * com.huawei.instantaneous.spo2：血氧饱和度 * com.huawei.instantaneous.stress：压力 * com.huawei.continuous.sleep.fragment：睡眠时长 * com.huawei.continuous.exercise_intensity.v2：中高强度活动时长 * com.huawei.active_hours：活动小时数|
|lang|String|是|语言。目前只支持 zh-CN|
|timeZone|String|是|时区。格式为 +0800|

#### 请求参数

Request Header  

|参数|参数类型|是否必选|描述|
|:----------------|:-----|:---|:-----------------------------------------------------------------------------------------------------------------------------------------|
|Content-type|String|是|取值为：application/json; charset=UTF-8|
|Authorization|String|是|请参见[认证鉴权](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058)。 说明： Bearer后面拼接空格，再拼接获取的access_token。|
|x-client-id|String|否|开放联盟分配的应用标识。服务端可以基于其进行灰度路由，建议携带。|
|x-version|String|否|接口调用方的软件版本号。即当前客户端版本号，服务端可以基于其进行灰度，建议携带。|
|x-caller-trace-id|String|否|请求跟踪ID。用于串联服务调用方与服务端整体请求链条，建议携带。|

Request Body

无  

#### 请求示例

```
GET
https://health-api.cloud.huawei.com/healthkit/v2/healthTrends?dataType=com.huawei.instantaneous.resting_heart_rate&lang=zh-CN&timeZone=+0800
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
```

#### 响应参数

状态码为200时：

Response Header  

|参数|参数类型|是否必选|描述|
|:-----------|:-----|:---|:----------------------------------|
|Content-Type|String|是|取值为：application/json; charset=UTF-8|

Response Body  

|参数|参数类型|是否必选|描述|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------|:---|:---|
|healthTrendReports|List\<[HealthTrend](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section8936145565217)\>|是|趋势报告|

#### 响应示例

```
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
{
    "resultCode": 0,
    "healthTrendReports": [
        {
            "dataType": "com.huawei.instantaneous.resting_heart_rate",
            "trendPeriod": 2,
            "item": "RestingHeartRate",
            "startDate": 20240318,
            "endDate": 20240915,
            "statValues": [
                {
                    "startDate": 20240819,
                    "avgValue": "31"
                },
                {
                    "startDate": 20240826,
                    "avgValue": "35"
                },
                {
                    "startDate": 20240902,
                    "avgValue": "42"
                },
                {
                    "startDate": 20240909,
                    "avgValue": "49"
                }
            ],
            "format": 1,
            "statistical": false
        },
        {
            "dataType": "com.huawei.instantaneous.resting_heart_rate",
            "trendPeriod": 1,
            "item": "RestingHeartRate",
            "startDate": 20240823,
            "endDate": 20240921,
            "daysNeed": 0,
            "trendConclusion": 1,
            "trendResult": 3,
            "trendSplitPosition": 20240906,
            "statValues": [
                {
                    "startDate": 20240824,
                    "avgValue": "30"
                },
                {
                    "startDate": 20240825,
                    "avgValue": "31"
                },
                {
                    "startDate": 20240826,
                    "avgValue": "32"
                },
                {
                    "startDate": 20240827,
                    "avgValue": "33"
                },
                {
                    "startDate": 20240828,
                    "avgValue": "34"
                },
                {
                    "startDate": 20240829,
                    "avgValue": "35"
                },
                {
                    "startDate": 20240830,
                    "avgValue": "36"
                },
                {
                    "startDate": 20240831,
                    "avgValue": "37"
                },
                {
                    "startDate": 20240901,
                    "avgValue": "38"
                },
                {
                    "startDate": 20240902,
                    "avgValue": "39"
                },
                {
                    "startDate": 20240903,
                    "avgValue": "40"
                },
                {
                    "startDate": 20240904,
                    "avgValue": "41"
                },
                {
                    "startDate": 20240905,
                    "avgValue": "42"
                },
                {
                    "startDate": 20240906,
                    "avgValue": "43"
                },
                {
                    "startDate": 20240907,
                    "avgValue": "44"
                },
                {
                    "startDate": 20240908,
                    "avgValue": "45"
                },
                {
                    "startDate": 20240909,
                    "avgValue": "46"
                },
                {
                    "startDate": 20240910,
                    "avgValue": "47"
                },
                {
                    "startDate": 20240911,
                    "avgValue": "48"
                },
                {
                    "startDate": 20240912,
                    "avgValue": "49"
                },
                {
                    "startDate": 20240913,
                    "avgValue": "50"
                },
                {
                    "startDate": 20240914,
                    "avgValue": "51"
                },
                {
                    "startDate": 20240915,
                    "avgValue": "52"
                },
                {
                    "startDate": 20240916,
                    "avgValue": "53"
                },
                {
                    "startDate": 20240917,
                    "avgValue": "54"
                },
                {
                    "startDate": 20240918,
                    "avgValue": "55"
                },
                {
                    "startDate": 20240919,
                    "avgValue": "56"
                },
                {
                    "startDate": 20240920,
                    "avgValue": "57"
                },
                {
                    "startDate": 20240921,
                    "avgValue": "58"
                }
            ],
            "format": 1,
            "frontValue": "36",
            "backValue": "51",
            "diffValue": "15",
            "trendDescText": "您过去 16 天的日均静息心率有所上升。",
            "statistical": true
        }
    ]
}
```

#### 错误码

请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。  
