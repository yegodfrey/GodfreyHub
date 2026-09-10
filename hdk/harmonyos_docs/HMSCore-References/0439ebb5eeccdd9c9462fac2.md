---
name: document/cn/HMSCore-References/running-batch-course-import-0000002524377452
title: 跑步课程批量导入
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/running-batch-course-import-0000002524377452
---

# 跑步课程批量导入

#### 功能介绍

将自定义的跑步课程批量导入到华为运动健康App中。  

#### 场景描述

在华为账号授权之后，用户将三方平台的跑步课程批量导入到华为运动健康中，并能够在华为运动健康App上展示。  

#### 使用约束

* 当前只支持500条自定义课程的导入功能。
* 单次最多导入500个。  

#### 接口原型

|承载协议|HTTPS POST|
|接口方向|开发者应用-\>Health Service Kit云|
|接口URL|https://health-api.cloud.huawei.com/healthkit/v2/trainingplan/workouts:batchCreate|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|----------------------------------------------------------------------------------|

#### 路径参数

无  

#### 请求参数

Request Header  

|参数|参数类型|是否必选|描述|
|:----------------|:-----|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Content-type|String|是|取值为：application/json|
|Authorization|String|是|请参见[认证鉴权](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/auth-example-0000001054581058)。 说明： Bearer后面拼接空格，再拼接获取的access_token。 需要有"https://www.huawei.com/healthkit/healthplan.write"权限信息|
|x-client-id|String|否|开放联盟分配的应用标识。服务端可以基于其进行灰度路由，建议携带。|
|x-version|String|否|接口调用方的软件版本号。即当前客户端版本号，服务端可以基于其进行灰度，建议携带。|
|x-caller-trace-id|String|否|请求跟踪ID。用于串联服务调用方与服务端整体请求链条，建议携带。|

Request Body  

|参数|参数类型|是否必选|描述|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|:---|:---------------|
|workouts|List\<[Workout](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section10735163818221)\>|是|课程详情，单次最多导入500个。|

#### 请求示例

```
POST
https://health-api.cloud.huawei.com/healthkit/v2/trainingplan/workouts:batchCreate
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
[
    {
        "name": "乳酸阈值00121",
        "description": "强化身体代谢乳酸的能力",
        "actionCombine": [
            {
                "actionList": [
                    {
                        "name": "Warm up",
                        "describe": "暖身",
                        "target": {
                            "name": "time",
                            "value": 900
                        },
                        "strength": {
                            "name": "pace",
                            "valueH": 447600,
                            "valueL": 447600
                        }
                    }
                ],
                "repeatTimes": 1
            }
        ]
    },
    {
        "name": "乳酸阈值15412",
        "description": "强化身体代谢乳酸的能力111121242314214",
        "actionCombine": [
            {
                "actionList": [
                    {
                        "name": "Relax",
                        "describe": "放松",
                        "target": {
                            "name": "time",
                            "value": 900
                        },
                        "strength": {
                            "name": "pace",
                            "valueH": 447600,
                            "valueL": 447600
                        }
                    }
                ],
                "repeatTimes": 1
            }
        ]
    }
]
```

#### 响应参数

状态码为200时：

Response Header  

|参数|参数类型|是否必选|描述|
|:-----------|:-----|:---|:----------------------------------|
|Content-Type|String|是|取值为：application/json; charset=UTF-8|

Response Body  

|参数|参数类型|是否必选|描述|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------|:---|:---|
|workouts|List\<[Workout](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section10735163818221)\>|是|课程详情|

#### 响应示例

```
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
[
    {
        "workoutId": "1772476979870",
        "name": "乳酸阈值00121",
        "description": "强化身体代谢乳酸的能力",
        "actionCombine": [
            {
                "repeatTimes": 1,
                "actionList": [
                    {
                        "name": "Warm up",
                        "describe": "暖身",
                        "target": {
                            "name": "time",
                            "value": 900.0
                        },
                        "strength": {
                            "name": "pace",
                            "valueH": 447600.0,
                            "valueL": 447600.0
                        }
                    }
                ]
            }
        ],
        "createTime": 1772476979870
    },
    {
        "workoutId": "1772476979871",
        "name": "乳酸阈值15412",
        "description": "强化身体代谢乳酸的能力111121242314214",
        "actionCombine": [
            {
                "repeatTimes": 1,
                "actionList": [
                    {
                        "name": "Relax",
                        "describe": "放松",
                        "target": {
                            "name": "time",
                            "value": 900.0
                        },
                        "strength": {
                            "name": "pace",
                            "valueH": 447600.0,
                            "valueL": 447600.0
                        }
                    }
                ]
            }
        ],
        "createTime": 1772476979871
    }
]
```

#### 错误码

请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。  
