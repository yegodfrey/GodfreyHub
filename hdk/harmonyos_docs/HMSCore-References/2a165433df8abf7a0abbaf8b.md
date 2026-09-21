---
name: document/cn/HMSCore-References/query-historical-running-data-0000002091538021
title: 查询历史运动表现
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/query-historical-running-data-0000002091538021
---

# 查询历史运动表现

## 功能介绍

查询用户的历史运动表现，最多支持查询31天。

## 场景描述

查询用户的历史运动表现，最多支持查询31天，可查询用户历史的跑力指数、状况指数、体能指数、疲劳指数。

## 使用约束

* 仅支持部分开发者使用，如有需要，可[提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)或者发送邮件至[hihealth@huawei.com](mailto:hihealth@huawei.com)进行咨询。
* 联盟卡片申请的权限名称：锻炼记录 > 运动能力
* OAuth读权限：https://www.huawei.com/healthkit/sportsability.read

## 接口原型

|**承载协议**|HTTPS GET|
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
|**接口方向**|开发者应用->Health Service Kit云|
|**接口URL**|https://health-api.cloud.huawei.com/healthkit/v2/athleticPerformance?**types=***** &**types=***** &**startDay=***** &**endDay=***** &**timeZone=*****|
|数据格式|请求消息：Content-Type: application/json 响应消息：Content-Type: application/json|

## 请求参数

**Request Header**

|参数|参数类型|是否必选|描述|
|:-------|:-------|:---|:-------------------------------------------------------------------------------------------------|
|timeZone|String|是|时区。其中的特殊字符需要进行URL编码。 例如待设置的时区为+0800时，需要输入"%2b0800"。|
|startDay|int|是|查询开始日期，格式yyyyMMdd。|
|endDay|int|是|查询结束日期，格式yyyyMMdd。从开始日期算起最大支持查询的时间间隔为31天。|
|types|String[]|否|需要查询的运动能力指数： * runningAbility：跑力指数 * condition：状况指数 * fitness：体能指数 * fatigue：疲劳指数 如果不传值，则查询以上四种指数。|

**Request Body**

无

## 请求示例

```screen
GET https://health-api.cloud.huawei.com/healthkit/v2/athleticPerformance?types=runningAbility&types=condition&startDay=20241020&endDay=20241024&timeZone=%2b0800
Content-Type: application/json
Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 响应参数

**状态码为200时：**

**Response Header**

|参数|参数类型|是否必选|描述|
|:-----------|:-----|:---|:----------------------------------|
|Content-Type|String|是|取值为：application/json; charset=UTF-8|

**Response Body**

|参数|参数类型|是否必选|描述|
|:--------------------------------|:---|:---|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|Map<Integer, AthleticPerformance>|Map|是|历史跑力数据，请参见[AthleticPerformance](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/data-model-0000001054556973#section185102221495)数据模型。|

## 响应示例

```screen
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
{
        20241020: {
            "runningAbility": 20,
            "fitness": 0.0814,
            "fatigue": 0.0001,
            "condition": 0.0832
        },
        20241021: {
            "runningAbility": 20,
            "fitness": 0.0795,
            "fatigue": 0.0001,
            "condition": 0.0812
        },
        20241022: {
            "runningAbility": 20,
            "fitness": 0.0776,
            "fatigue": 0.0001,
            "condition": 0.0794
        },
        20241023: {
            "runningAbility": 20,
            "fitness": 0.0758,
            "fatigue": 0.0001,
            "condition": 0.0775
        },
        20241024: {
            "runningAbility": 20,
            "fitness": 0.074,
            "fatigue": 0.0001,
            "condition": 0.0757
        }
}
```

## 错误码

请参见[错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/error-code-0000001054236973)。

