---
name: document/cn/HMSCore-References/query-personal-scores-0000002048084148
title: 查询个人成绩单
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/query-personal-scores-0000002048084148
---

# 查询个人成绩单

#### 功能介绍

查询用户活动记录的最佳成绩单、累计成绩单。  

#### 场景描述

查询指定活动的成绩单。  

#### 使用约束

* 仅支持部分开发者使用，如有需要，可[提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)或者发送邮件至[hihealth@huawei.com](mailto:hihealth@huawei.com)进行咨询。
* 联盟卡片申请的权限名称：日常活动 \> 个人成绩单
* OAuth读权限：<https://www.huawei.com/healthkit/sportachievement.read>  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者应用-\>Health Service Kit云|
|接口URL|https://health-api.cloud.huawei.com/healthkit/v2/sportReports?activityType=\*\*\*\&timeZone=\*\*\*|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|--------------------------------------------------------------------------------------------------|

#### 查询参数

|参数|参数类型|是否必选|描述|
|:-----------|:-------------|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|activityType|list\<String\>|是|查询的具体运动数据类型，包括： * walking：步行 * running：跑步 * cycling：骑行 * jumping：跳绳 * cumulative：公共累计项（总天数、总距离、总步数、总消耗的卡路里等） 获取步行、骑行、跑步、跳绳的个人成绩单时，activityType可以同时传一个或多个。 如果不传或者传参数据不在上述范围内，参数校验失败。|
|timeZone|String|否|客户端时区，仅用于结果的时间戳转换，用给定时区将日期转为时间戳。 格式为 +0800|

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
https://health-api.cloud.huawei.com/healthkit/v2/sportReports?activityType=running&activityType=cumulative
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
|:-------------------|:------|:---|:--------------------------------------------------------------------|
|Content-Type|String|是|取值为：application/json; charset=UTF-8|
|x-health-app-privacy|Integer|是|用户隐私标记取值为： * 1：用户在运动健康App已授权 * 2：用户在运动健康App未授权 * 3：非华为运动健康App用户（无需授权）|

Response Body  

|参数|参数类型|是否必选|描述||
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------|:---|:-|-|
|resultCode|Integer|是|正常返回code码，返回值0。||
|sportReports|List\<[SportReports](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section730716434398)\>|是|返回个人步行、骑行、跑步、跳绳最佳成绩单。||
|cumulative|List\<[AccumulatedSportReports](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section75015301419)\>|否|返回公共项的成绩单，包括总步数，总卡路里等等。||

#### 响应示例

```
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
x-health-app-privacy: 1
{
    "resultCode": 0,
    "cumulative": [
        {
            "name": "accumulatedDistance",
            "value": 84.0
        },
        {
            "name": "accumulatedStep",
            "value": 21000.0
        },
        {
            "name": "accumulatedCalorie",
            "value": 6993.0
        },
        {
            "name": "accumulatedDay",
            "value": 11.0,
            "startDate": 20210527,
            "endDate": 20210606
        }
    ],
    "sportReports": [
        {
            "activityType": "running",
            "personalBest": [
                {
                    "name": "bestRunDistance",
                    "value": 5000.0,
                    "startTime": 1622080800000,
                    "endTime": 1622080800000
                },
                {
                    "name": "bestRunPartTime3KM",
                    "value": 750.0,
                    "startTime": 1622080800000,
                    "endTime": 1622080800000
                },
                {
                    "name": "bestRunPartTime5KM",
                    "value": 1500.0,
                    "startTime": 1622080800000,
                    "endTime": 1622080800000
                },
                {
                    "name": "bestRunPace",
                    "value": 200.0,
                    "startTime": 1622080800000,
                    "endTime": 1622080800000
                }
            ],
            "accumulate": [
                {
                    "name": "accumulatedRunDistance",
                    "value": 50000.0
                }
            ]
        }
    ]
}
```

#### 错误码

请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。  
