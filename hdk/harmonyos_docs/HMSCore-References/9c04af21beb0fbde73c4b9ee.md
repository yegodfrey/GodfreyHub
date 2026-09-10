---
name: document/cn/HMSCore-References/activityrecords_list-0000001050114862
title: 查询已创建的运动记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecords_list-0000001050114862
---

# 查询已创建的运动记录

#### 功能介绍

查询用户已创建的运动记录列表。  

#### 场景描述

* 查询指定时间段内的运动记录。
* 查询删除的运动记录。
* 根据cursor增量查询运动记录。  

#### 使用约束

无。  

#### 接口原型

|承载协议|HTTPS GET|
|接口方向|开发者应用-\>Health Service Kit云|
|接口URL|https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?startTime=\*\*\*\&endTime=\*\*\*\&activityType=\*\*\*\&detailDataType=\*\*\*\&sourceType=\*\*\*|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|
|-----|----------------------------------------------------------------------------------------------------------------------------------------------------------------|

#### 查询参数

|参数|参数类型|是否必选|描述|
|:-------------|:--------------|:---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|startTime|String|是|开始时间。13位整数的时间戳，单位：毫秒。 startTime时间早于endTime时间。 startTime/endTime同时为非空字符串时生效，否则不生效。|
|endTime|String|是|结束时间。13位整数的时间戳，单位：毫秒。 startTime时间早于endTime时间，endTime与startTime时间间隔不能超过31天。|
|activityType|List\<Integer\>|否|待查询的运动类型列表，支持查询的运动类型请参见[运动类型常量定义](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-fitness-record-data-0000001131831088#section18780175925413)。 该参数为空时，返回所有运动类型数据。|
|detailDataType|List\<String\>|否|关联的原子采样明细数据类型名称。|
|sourceType|List\<Integer\>|否|数据来源类型 0：unknown（默认） 1：真实运动 2：用户手动输入 3：课程记录 4：可连接器械 5：自动识别 说明： 不提供sourceType时，除用户手动输入的运动记录不返回，其他都返回。|

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
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?startTime=1623018038263&endTime=1623078058263&activityType=97
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
|:-------------------|:-----|:---|:--------------------------------------------------------------|
|Content-Type|String|是|取值为：application/json; charset=UTF-8|
|x-health-app-privacy|int|是|用户隐私标记取值为： 1：用户在运动健康App已授权 2：用户在运动健康App未授权 3：非华为运动健康App用户（无需授权）|

Response Body  

|参数|参数类型|是否必选|描述||
|:--------------------|:---------------------|:---|:-|-|
|activityRecord|List\<ActivityRecord\>|否|开始/结束时间范围内的运动记录列表。请参见[ActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section141431025151817)数据模型。||
|deletedActivityRecord|List\<ActivityRecord\>|否|已删除的运动记录列表。请参见[ActivityRecord](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section141431025151817)数据模型。||
|hasMoreData|Boolean|否|标识服务端是否有更多数据。 * true：有更多数据 * false：无更多数据 默认为false。||
|cursor|String|否|增量查询运动记录时的标记。||

![](https://media:801784947934110891)  
* 当hasMoreData返回值为true时，通过请求url：https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?cursor=\*\*\*，获取更多用户运动记录。
* 如果需要倒序查询更多用户运动记录，请求url：https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?order=endTimeDesc\&cursor=\*\*\*\&activityType=\*\*\*。  

#### 响应示例

```
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
x-health-app-privacy: 1
{
    "activityRecord": [
        {
            "id": "1623018048263",
            "name": "test",
            "desc": "test",
            "startTime": 1623018048263,
            "endTime": 1623078048263,
            "modifyTime": 1623057750126,
            "activitySummary": {
                "dataSummary": [
                    {
                        "startTime": 1623018048263000000,
                        "endTime": 1623078048263000000,
                        "dataTypeName": "com.huawei.continuous.distance.total",
                        "value": [
                            {
                                "fieldName": "distance",
                                "floatValue": 1786.2
                             }
                        ]
                    },
                    {
                        "startTime": 1623018048263000000,
                        "endTime": 1623078048263000000,
                        "dataTypeName": "com.huawei.continuous.speed.statistics",
                        "value": [
                            {
                                "fieldName": "avg",
                                "floatValue": 13.54
                             },
                            {
                                "fieldName": "max",
                                "floatValue": 15.82
                             },
                            {
                                "fieldName": "min",
                                "floatValue": 12.33
                             }
                        ]
                    }
                ]
            },
            "timeZone": "+0800",
            "appInfo": {
                "appName": "app9",
                "appVersion": "1",
                "desc": "1",
                "clientId": "101278501"
            },
            "activityType": 97,
            "activeTime": 13921000
        }
    ],
    "deletedActivityRecord": []
}
```

#### 错误码

请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。  
