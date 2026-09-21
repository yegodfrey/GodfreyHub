---
name: document/cn/HMSCore-Guides/breath-holding-test-scene-0000001280296596
title: 潜水闭气测试运动记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/breath-holding-test-scene-0000001280296596
---

# 潜水闭气测试运动记录

## 读取潜水闭气测试活动数据

通过ActivityRecord读取用户已创建的运动记录列表，activityType值为156表示潜水闭气测试活动，用户可以设置查询条件，如活动开始时间、结束时间、活动类型、关联原子数据类型等。

**HTTP请求** **，** 请参见[查询运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecords_list-0000001050114862#section984123664716)接口

```screen
GET 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?startTime=***&endTime=***&activityType=***&detailDataType=***
```

**请求示例**

```screen
GET 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?
startTime=1653416795000&endTime=1653416870000&activityType=156&detailDataType=com.huawei.instantaneous.exercise_heart_rate
```

**请求头**

```screen
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
```

**响应体**

```screen
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
x-health-app-privacy: 1
{
    "activityRecord": [{
        "id": "sportHealth1653416795000",
        "name": "sportHealth1653416795000",
        "desc": "sportHealth1653416795000",
        "startTime": 1653416795000,
        "endTime": 1653416870000,
        "modifyTime": 1653416870000,
        "activitySummary": {
            "paceSummary": {
                "paceMap": {},
                "partTimeMap": {},
                "avgPace": 0.0,
                "bestPace": 0.0
            },
            "dataSummary": [{
                "dataTypeName": "com.huawei.continuous.exercise_heart_rate.statistics",
                "value": [{
                    "fieldName": "avg",
                    "floatValue": 81.0
                },
                {
                    "fieldName": "max",
                    "floatValue": 88.0
                },
                {
                    "fieldName": "min",
                    "floatValue": 77.0
                }]
            }],
            "activityFeature": {
                "dataTypeName": "com.huawei.activity.feature.breath_holding_test",
                "value": [{
                    "fieldName": "diaphragmTime",
                    "integerValue": 71
                }]
            }
        },
        "timeZone": "+0200",
        "details": [{
            "startTime": 1653416795000000000,
            "endTime": 1653416870000000000,
            "dataCollectorId": "cmF3Omluc3RhbnRhbmVvdXMuZXhlcmNpc2VfaGVhcnRfcmF0ZQEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
            "samplePoints": [{
                "startTime": 1653416810000000000,
                "endTime": 1653416810000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 83.0
                }]
            },
            {
                "startTime": 1653416815000000000,
                "endTime": 1653416815000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 82.0
                }]
            },
            {
                "startTime": 1653416820000000000,
                "endTime": 1653416820000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 84.0
                }]
            },
            {
                "startTime": 1653416825000000000,
                "endTime": 1653416825000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 87.0
                }]
            },
            {
                "startTime": 1653416830000000000,
                "endTime": 1653416830000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 88.0
                }]
            },
            {
                "startTime": 1653416835000000000,
                "endTime": 1653416835000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 87.0
                }]
            },
            {
                "startTime": 1653416840000000000,
                "endTime": 1653416840000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
            },
            {
                "startTime": 1653416845000000000,
                "endTime": 1653416845000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653416850000000000,
                "endTime": 1653416850000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 80.0
                }]
            },
            {
                "startTime": 1653416855000000000,
                "endTime": 1653416855000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653416860000000000,
                "endTime": 1653416860000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
            },
            {
                "startTime": 1653416865000000000,
                "endTime": 1653416865000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 80.0
                }]
            }]
        }],
        "deviceInfo": {
            "uniqueId": "1000",
            "devType": "Phone",
            "modelNum": "HUAWEI Health",
            "manufacturer": "HUAWEI Health"
        },
        "appInfo": {
            "appPackageName": "com.huawei.health",
            "clientId": "101050500"
        },
        "activityType": 156,
        "activeTime": 72000
    }],
    "deletedActivityRecord": []
}
```

