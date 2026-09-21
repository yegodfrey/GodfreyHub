---
name: document/cn/HMSCore-Guides/breath-holding-train-sence-0000001280616476
title: 潜水闭气训练运动记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/breath-holding-train-sence-0000001280616476
---

# 潜水闭气训练运动记录

#### 读取潜水闭气训练活动数据

通过ActivityRecord读取用户已创建的运动记录列表，activityType值为155表示潜水闭气训练活动，用户可以设置查询条件，如活动开始时间、结束时间、活动类型、关联原子数据类型等。

HTTP请求，请参见[查询运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecords_list-0000001050114862#section984123664716)接口

```
GET 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?startTime=***&endTime=***&activityType=***&detailDataType=***
```

请求示例

```
GET 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?
startTime=1653416918000&endTime=1653417106000&activityType=155&detailDataType=com.huawei.instantaneous.exercise_heart_rate
```

请求头

```
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
```

响应体

```
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
x-health-app-privacy: 1
{
    "activityRecord": [{
        "id": "sportHealth1653416918000",
        "name": "sportHealth1653416918000",
        "desc": "sportHealth1653416918000",
        "startTime": 1653416918000,
        "endTime": 1653417106000,
        "modifyTime": 1653417106000,
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
                    "floatValue": 83.0
                },
                {
                    "fieldName": "max",
                    "floatValue": 94.0
                },
                {
                    "fieldName": "min",
                    "floatValue": 75.0
                }]
            }],
            "sectionSummary": [{
                "sectionNum": 1,
                "sectionTime": 90,
                "startTime": 1653416918000,
                "endTime": 1653417008000,
                "sectionDataList": [{
                    "dataTypeName": "com.huawei.breath_holding_train.statistics",
                    "value": [{
                        "fieldName": "breathTime",
                        "integerValue": 30
                    },
                    {
                        "fieldName": "breathHoldingTime",
                        "integerValue": 60
                    }]
                }]
            },
            {
                "sectionNum": 2,
                "sectionTime": 90,
                "startTime": 1653417008000,
                "endTime": 1653417098000,
                "sectionDataList": [{
                    "dataTypeName": "com.huawei.breath_holding_train.statistics",
                    "value": [{
                        "fieldName": "breathTime",
                        "integerValue": 30
                    },
                    {
                        "fieldName": "breathHoldingTime",
                        "integerValue": 60
                    }]
                }]
            },
            {
                "sectionNum": 3,
                "sectionTime": 7,
                "startTime": 1653417098000,
                "endTime": 1653417106000,
                "sectionDataList": [{
                    "dataTypeName": "com.huawei.breath_holding_train.statistics",
                    "value": [{
                        "fieldName": "breathTime",
                        "integerValue": 7
                    },
                    {
                        "fieldName": "breathHoldingTime",
                        "integerValue": 0
                    }]
                }]
            }],
            "activityFeature": {
                "dataTypeName": "com.huawei.activity.feature.breath_holding_train",
                "value": [{
                    "fieldName": "breathTime",
                    "integerValue": 67
                },
                {
                    "fieldName": "breathHoldingTime",
                    "integerValue": 120
                },
                {
                    "fieldName": "breathHoldingTrainRhythm",
                    "integerValue": 3
                }]
            }
        },
        "timeZone": "+0200",
        "details": [{
            "startTime": 1653416918000000000,
            "endTime": 1653417106000000000,
            "dataCollectorId": "cmF3Omluc3RhbnRhbmVvdXMuZXhlcmNpc2VfaGVhcnRfcmF0ZQEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
            "samplePoints": [{
                "startTime": 1653416928000000000,
                "endTime": 1653416928000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 76.0
                }]
            },
            {
                "startTime": 1653416933000000000,
                "endTime": 1653416933000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
            },
            {
                "startTime": 1653416938000000000,
                "endTime": 1653416938000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653416943000000000,
                "endTime": 1653416943000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653416948000000000,
                "endTime": 1653416948000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 81.0
                }]
            },
            {
                "startTime": 1653416953000000000,
                "endTime": 1653416953000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653416958000000000,
                "endTime": 1653416958000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
            },
            {
                "startTime": 1653416963000000000,
                "endTime": 1653416963000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 85.0
                }] 
            },
            {
                "startTime": 1653416968000000000,
                "endTime": 1653416968000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 87.0
                }]
            },
            {
                "startTime": 1653416973000000000,
                "endTime": 1653416973000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 88.0
                }]
            },
            {
                "startTime": 1653416978000000000,
                "endTime": 1653416978000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 91.0
                }]
            },
            {
                "startTime": 1653416983000000000,
                "endTime": 1653416983000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 92.0
                }]
            },
            {
                "startTime": 1653416988000000000,
                "endTime": 1653416988000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 91.0
                }]
            },
            {
                "startTime": 1653416993000000000,
                "endTime": 1653416993000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 92.0
                }]
            },
            {
                "startTime": 1653416998000000000,
                "endTime": 1653416998000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 91.0
                }]
            },
            {
                "startTime": 1653417003000000000,
                "endTime": 1653417003000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 90.0
                }]
            },
            {
                "startTime": 1653417008000000000,
                "endTime": 1653417008000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 94.0
                }]
            },
            {
                "startTime": 1653417013000000000,
                "endTime": 1653417013000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 94.0
                }]
            },
            {
                "startTime": 1653417018000000000,
                "endTime": 1653417018000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 84.0
                }]
            },
            {
                "startTime": 1653417023000000000,
                "endTime": 1653417023000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
            },
            {
                "startTime": 1653417028000000000,
                "endTime": 1653417028000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 78.0
                }]
            },
            {
                "startTime": 1653417033000000000,
                "endTime": 1653417033000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 75.0
                }]
            },
            {
                "startTime": 1653417038000000000,
                "endTime": 1653417038000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 78.0
                }]
            },
            {
                "startTime": 1653417043000000000,
                "endTime": 1653417043000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 80.0
                }]
            },
            {
                "startTime": 1653417048000000000,
                "endTime": 1653417048000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 82.0
                }]
            },
            {
                "startTime": 1653417053000000000,
                "endTime": 1653417053000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
            },
            {
                "startTime": 1653417058000000000,
                "endTime": 1653417058000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 90.0
                }]
            },
            {
                "startTime": 1653417063000000000,
                "endTime": 1653417063000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 92.0
                }]
            },
            {
                "startTime": 1653417068000000000,
                "endTime": 1653417068000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 94.0
                }]
            },
            {
                "startTime": 1653417073000000000,
                "endTime": 1653417073000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                  "fieldName": "bpm",
                  "floatValue": 92.0
                }]
            },
            {
                "startTime": 1653417078000000000,
                "endTime": 1653417078000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 89.0
                }]
            },
            {
                "startTime": 1653417083000000000,
                "endTime": 1653417083000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 79.0
                }]
              
            },
            {
                "startTime": 1653417088000000000,
                "endTime": 1653417088000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653417093000000000,
                "endTime": 1653417093000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 78.0
                }]
            },
            {
                "startTime": 1653417098000000000,
                "endTime": 1653417098000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 77.0
                }]
            },
            {
                "startTime": 1653417103000000000,
                "endTime": 1653417103000000000,
                "dataTypeName": "com.huawei.instantaneous.exercise_heart_rate",
                "value": [{
                    "fieldName": "bpm",
                    "floatValue": 78.0
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
        "activityType": 155,
        "activeTime": 187000
    }],
    "deletedActivityRecord": []
}
```

