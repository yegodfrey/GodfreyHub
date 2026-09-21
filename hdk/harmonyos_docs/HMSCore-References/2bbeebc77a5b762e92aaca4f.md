---
name: document/cn/HMSCore-References/latest-sampleset-0000001078273166
title: 查询最新采样数据
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latest-sampleset-0000001078273166
---

# 查询最新采样数据

## 功能介绍

查询指定数据类型最新采样数据点。

## 场景描述

指定数据类型，查询指定数据类型最新的采样数据点。若指定的数据类型没有相关的采样数据点，则不返回。

## 使用约束

当前支持的数据类型名称如下：心率、血压、血氧、血糖浓度、体重、身高、压力、最大摄氧量、体温、心电测量明细。

## 接口原型

|**承载协议**|HTTPS GET|
|---------|---------------------------------------------------------------------------------------------------|
|**接口方向**|开发者应用->Health Service Kit云|
|**接口URL**|https://health-api.cloud.huawei.com/healthkit/v2/sampleSets/latestSamplePoint?**dataType** **=*****|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 查询参数

|参数|参数类型|是否必选|描述|
|:-------|:-----------|:---|:---------------------|
|dataType|List<String>|是|数据类型名称。最少查询一个，最多查询20个。|

## 请求参数

**Request Header**

|参数|参数类型|是否必选|描述|
|:----------------|:-----|:---|:--------------------------------------------------------------------------------------------------------------------------------------------|
|Content-type|String|是|取值为：application/json; charset=UTF-8|
|Authorization|String|是|请参见[认证鉴权](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058)。 > 说明 > Bearer后面拼接空格，再拼接获取的access_token。|
|x-client-id|String|否|开放联盟分配的应用标识。服务端可以基于其进行灰度路由，建议携带。|
|x-version|String|否|接口调用方的软件版本号。即当前客户端版本号，服务端可以基于其进行灰度，建议携带。|
|x-caller-trace-id|String|否|请求跟踪ID。用于串联服务调用方与服务端整体请求链条，建议携带。|

**Request Body**

无

## 请求示例

```screen
GET
https://health-api.cloud.huawei.com/healthkit/v2/sampleSets/latestSamplePoint?dataType=com.huawei.instantaneous.body_weight&dataType=com.huawei.instantaneous.blood_glucose
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
```

## 响应参数

**状态码为200时：**

**Response Header**

|参数|参数类型|是否必选|描述|
|:-------------------|:-----|:---|:--------------------------------------------------------------|
|Content-Type|String|是|取值为：application/json; charset=UTF-8|
|x-health-app-privacy|int|是|用户隐私标记取值为： 1：用户在运动健康App已授权 2：用户在运动健康App未授权 3：非华为运动健康App用户（无需授权）|

**Response Body**

|参数|参数类型|是否必选|描述|
|:-----------|:-----------------------|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|samplePoints|Map<String, SamplePoint>|是|每种数据类型对应的采样数据点。请参见[SamplePoint](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section1420111125182)数据模型。|

## 响应示例

```screen
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
x-health-app-privacy: 1
{
    "samplePoints": {
        "com.huawei.instantaneous.body_weight": {
            "startTime": 1611581350203000000,
            "endTime": 1611581350303000000,
            "dataTypeName": "com.huawei.instantaneous.body_weight",
            "originalDataCollectorId": "cmF3Omluc3RhbnRhbmVvdXMuYm9keV93ZWlnaHQEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
            "value": [
                {
                    "fieldName": "body_weight",
                    "floatValue": 56
                },
                {
                    "fieldName": "bmi",
                    "floatValue": 80
                },
                {
                    "fieldName": "body_fat",
                    "floatValue": 27
                },
                {
                    "fieldName": "body_fat_rate",
                    "floatValue": 25
                },
                {
                    "fieldName": "muscle_mass",
                    "floatValue": 35
                },
                {
                    "fieldName": "basal_metabolism",
                    "floatValue": 1200
                },
                {
                    "fieldName": "moisture",
                    "floatValue": 20
                },
                {
                    "fieldName": "moisture_rate",
                    "floatValue": 15
                },
                {
                    "fieldName": "visceral_fat_level",
                    "floatValue": 25
                },
                {
                    "fieldName": "bone_salt",
                    "floatValue": 1.5
                },
                {
                    "fieldName": "protein_rate",
                    "floatValue": 30
                },
                {
                    "fieldName": "body_age",
                    "integerValue": 21
                },
                {
                    "fieldName": "body_score",
                    "floatValue": 85
                },
                {
                    "fieldName": "skeletal_musclel_mass",
                    "floatValue": 70
                },
                {
                    "fieldName": "impedance",
                    "floatValue": 30
                }
            ]
        },
        "com.huawei.instantaneous.blood_glucose": {
            "startTime": 1582347532821000000,
            "endTime": 1582347532821000000,
            "dataTypeName": "com.huawei.instantaneous.blood_glucose",
            "originalDataCollectorId": "cmF3Omluc3RhbnRhbmVvdXMuYmxvb2RfZ2x1Y29zZQEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
            "value": [
                {
                    "fieldName": "level",
                    "floatValue": 9.7
                },
                {
                    "fieldName": "measure_time",
                    "integerValue": 5
                }
            ]
        }
    }
}
```

## 错误码

请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。

