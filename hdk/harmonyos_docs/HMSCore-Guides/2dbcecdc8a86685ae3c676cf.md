---
name: document/cn/HMSCore-Guides/basketball-scene-0000001212612301
title: 篮球运动记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/basketball-scene-0000001212612301
---

# 篮球运动记录

## 写入篮球活动数据场景

将篮球活动数据写入ActivityRecord，并关联明细数据。

**HTTP请求，** 请参见[创建运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecords_update-0000001050116813#section25059172122)接口

```screen
PUT
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords/{activityRecordId}
```

**请求示例**

```screen
PUT 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords/1592905552721
```

**请求体**

```screen
Content-Type: application/json
Authorization: Bearer ***
x-client-id: ***
x-version: ***
x-caller-trace-id: ***
{
    "id": "1592905552721",
    "desc": "basketball",
    "startTime": 1592905552721,
    "endTime": 1592906207222,
    "timeZone": "+0800",
    "modifyTime": 1592911122916,
    "activitySummary":{
        "activityFeature": {
	    "dataTypeName": "com.huawei.activity.feature.basketball",
	    "startTime": 1592905552721000000,
	    "endTime": 1592906207222000000,
	    "value": [
	        {
		    "fieldName": "overall_score",
		    "integerValue": 50
		},
	        {
		    "fieldName": "burst_score",
		    "integerValue": 77
		},
	        {
		    "fieldName": "jump_score",
		    "integerValue": 42
		},
	        {
		    "fieldName": "run_score",
		    "integerValue": 60
		},
	        {
		    "fieldName": "breakthrough_score",
		    "integerValue": 32
		},
	        {
		    "fieldName": "sport_intensity_score",
		    "integerValue": 37
		}
	    ]
	},
        "dataSummary": [
            {
                "startTime": 1592905552721000000,
                "endTime": 1592906207222000000,
                "dataTypeName": "com.huawei.continuous.calories.burnt.total",
                "value": [
                    {
                        "floatValue": 16,
                        "fieldName": "calories_total"
                    }
                ]
            },
            {
                "startTime": 1592905552721000000,
                "endTime": 1592906207222000000,
                "dataTypeName": "com.huawei.continuous.jump.statistics",
                "value": [
                    {
                        "integerValue": 1,
                        "fieldName": "jump_times"
                    },
                    {
                        "floatValue": 0.35,
                        "fieldName": "avg_jump_height"
                    },
                    {
                        "floatValue": 0.35,
                        "fieldName": "max_jump_height"
                    },
                    {
                        "floatValue": 0.35,
                        "fieldName": "min_jump_height"
                    },
                    {
                        "integerValue": 500,
                        "fieldName": "avg_passage_duration"
                    },
                    {
                        "integerValue": 500,
                        "fieldName": "max_passage_duration"
                    },
                    {
                        "integerValue": 500,
                        "fieldName": "min_passage_duration"
                    }
                ]
            },
            {
                "startTime": 1592905552721000000,
                "endTime": 1592906207222000000,
                "dataTypeName": "com.huawei.continuous.exercise_heart_rate.statistics",
                "value": [
                    {
                        "floatValue": 120,
                        "fieldName": "avg"
                    },
                    {
                        "floatValue": 120,
                        "fieldName": "max"
                    },
                    {
                        "floatValue": 120,
                        "fieldName": "min"
                    }
                ]
            }
        ]
    },
    "details": [
        {
            "startTime": 1592905552721000000,
            "endTime": 1592905552721000000,
            "samplePoints": [
                {
                    "startTime": 1592905552722000000,
                    "endTime": 1592905552722000000,
                    "dataTypeName": "com.huawei.continuous.jump",
                    "value": [
                        {
                            "fieldName": "jump_height",
	                        "floatValue": 0.35
	                    },
                        {
                            "fieldName": "passage_duration",
	                        "integerValue": 500
	                    }
                    ]
                }
            ]
        }
    ],
    "appInfo": {
        "appName": "app9",
        "appVersion": "1",
        "desc": "1",
        "clientId": "101278501"
    },
    "activityType": 5, 
    "activeTime": 654501
}
```

**响应体**

```screen
HTTP/1.1 200 OK
Content-type: application/json;charset=utf-8
{
    "id": "1592905552721",
    "desc": "basketball",
    "startTime": 1592905552721,
    "endTime": 1592906207222,
    "timeZone": "+0800",
    "modifyTime": 1592911122916,
    "activitySummary": {
        "activityFeature": {
	    "dataTypeName": "com.huawei.activity.feature.basketball",
	    "startTime": 1592905552721000000,
	    "endTime": 1592906207222000000,
	    "value": [
	        {
		    "fieldName": "overall_score",
		    "integerValue": 50
		},
	        {
		    "fieldName": "burst_score",
		    "integerValue": 77
		},
	        {
		    "fieldName": "jump_score",
		    "integerValue": 42
		},
	        {
		    "fieldName": "run_score",
		    "integerValue": 60
		},
	        {
		    "fieldName": "breakthrough_score",
		    "integerValue": 32
		},
	        {
		    "fieldName": "sport_intensity_score",
		    "integerValue": 37
		}
	    ]
	},
        "dataSummary": [
            {
                "startTime": 1592905552721000000,
                "endTime": 1592906207222000000,
                "dataTypeName": "com.huawei.continuous.calories.burnt.total",
                "value": [
                    {
                        "floatValue": 16,
                        "fieldName": "calories_total"
                    }
                ]
            },
            {
                "startTime": 1592905552721000000,
                "endTime": 1592906207222000000,
                "dataTypeName": "com.huawei.continuous.jump.statistics",
                "value": [
                    {
                        "integerValue": 1,
                        "fieldName": "jump_times"
                    },
                    {
                        "floatValue": 0.35,
                        "fieldName": "avg_jump_height"
                    },
                    {
                        "floatValue": 0.35,
                        "fieldName": "max_jump_height"
                    },
                    {
                        "floatValue": 0.35,
                        "fieldName": "min_jump_height"
                    },
                    {
                        "integerValue": 500,
                        "fieldName": "avg_passage_duration"
                    },
                    {
                        "integerValue": 500,
                        "fieldName": "max_passage_duration"
                    },
                    {
                        "integerValue": 500,
                        "fieldName": "min_passage_duration"
                    }
                ]
            },
            {
                "startTime": 1592905552721000000,
                "endTime": 1592906207222000000,
                "dataTypeName": "com.huawei.continuous.exercise_heart_rate.statistics",
                "value": [
                    {
                        "floatValue": 120,
                        "fieldName": "avg"
                    },
                    {
                        "floatValue": 120,
                        "fieldName": "max"
                    },
                    {
                        "floatValue": 120,
                        "fieldName": "min"
                    }
                ]
            }
        ]
    },
    "details": [
        {
            "startTime": 1592905552721000000,
            "endTime": 1592905552721000000,
            "dataCollectorId": "cmF3OmNvbnRpbnVvdXMuanVtcAEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
            "samplePoints": [
                {
                    "startTime": 1592905552722000000,
                    "endTime": 1592905552722000000,
                    "dataTypeName": "com.huawei.continuous.jump",
                    "value": [
                        {
                            "fieldName": "jump_height",
	                        "floatValue": 0.35
	                    },
                        {
                            "fieldName": "passage_duration",
	                        "integerValue": 500
	                    }
                    ]
                }
            ]
        }
    ],
    "subDataRelation": [{
        "startTime": 1592905552721000000,
        "endTime": 1592906207222000000,
        "dataTypeName": "com.huawei.continuous.jump",
        "dataCollectorId": "cmF3OmNvbnRpbnVvdXMuanVtcAEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg"
    }],
    "appInfo": {
        "appName": "app9",
        "appVersion": "1",
        "desc": "1",
        "clientId": "101278501"
    },
    "activityType": 5,
    "activeTime": 654501
}
```

## 读取篮球活动数据

通过ActivityRecord读取用户已创建的运动记录列表，activityType值为5表示篮球活动，用户可以设置查询条件，如活动开始时间、结束时间、活动类型、关联原子数据类型等。

**HTTP请求** **，** 请参见[查询运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/activityrecords_list-0000001050114862#section984123664716)接口

```screen
GET 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?startTime=***&endTime=***&activityType=***&detailDataType=***
```

**请求示例**

```screen
GET 
https://health-api.cloud.huawei.com/healthkit/v2/activityRecords?startTime=1592934352000&endTime=1592935007000&activityType=5&detailDataType=com.huawei.continuous.jump
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
    "activityRecord": [
        {
            "id": "1592905552721",
            "desc": "basketball",
            "startTime": 1592905552721,
            "endTime": 1592906207222,
            "timeZone": "+0800",
            "modifyTime": 1599290412916,
            "activitySummary": {
                "activityFeature": {
	            "dataTypeName": "com.huawei.activity.feature.basketball",
	            "startTime": 1592905552721000000,
	            "endTime": 1592906207222000000,
	            "value": [
	                {
		            "fieldName": "overall_score",
		            "integerValue": 50
		        },
	                {
		            "fieldName": "burst_score",
		            "integerValue": 77
		        },
	                {
		            "fieldName": "jump_score",
		            "integerValue": 42
		        },
	                {
		            "fieldName": "run_score",
		            "integerValue": 60
		        },
	                {
		            "fieldName": "breakthrough_score",
		            "integerValue": 32
		        },
	                {
		            "fieldName": "sport_intensity_score",
		            "integerValue": 37
		        }
	            ]
	        },
                "dataSummary": [
                    {
                        "startTime": 1592905552721000000,
                        "endTime": 1592906207222000000,
                        "dataTypeName": "com.huawei.continuous.calories.burnt.total",
                        "value": [
                            {
                                "floatValue": 16,
                                "fieldName": "calories_total"
                            }
                        ]
                    },
                    {
                        "startTime": 1592905552721000000,
                        "endTime": 1592906207222000000,
                        "dataTypeName": "com.huawei.continuous.jump.statistics",
                        "value": [
                            {
                                "integerValue": 1,
                                "fieldName": "jump_times"
                            },
                            {
                                "floatValue": 0.35,
                                "fieldName": "avg_jump_height"
                            },
                            {
                                "floatValue": 0.35,
                                "fieldName": "max_jump_height"
                            },
                            {
                                "floatValue": 0.35,
                                "fieldName": "min_jump_height"
                            },
                            {
                                "integerValue": 500,
                                "fieldName": "avg_passage_duration"
                            },
                            {
                                "integerValue": 500,
                                "fieldName": "max_passage_duration"
                            },
                            {
                                "integerValue": 500,
                                "fieldName": "min_passage_duration"
                            }
                        ]
                    },
                    {
                        "startTime": 1592905552721000000,
                        "endTime": 1592906207222000000,
                        "dataTypeName": "com.huawei.continuous.exercise_heart_rate.statistics",
                        "value": [
                            {
                                "floatValue": 120,
                                "fieldName": "avg"
                            },
                            {
                                "floatValue": 120,
                                "fieldName": "max"
                            },
                            {
                                "floatValue": 120,
                                "fieldName": "min"
                            }
                        ]
                    }
                ]
            },
            "details": [
                {
                    "startTime": 1592905552721000000,
                    "endTime": 1592905552721000000,
                    "dataCollectorId": "cmF3OmNvbnRpbnVvdXMuanVtcAEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
                    "samplePoints": [
                        {
                            "startTime": 1592905552722000000,
                            "endTime": 1592905552722000000,
                            "dataTypeName": "com.huawei.continuous.jump",
                            "value": [
                                {
                                    "fieldName": "jump_height",
	                            "floatValue": 0.35
	                        },
                                {
                                    "fieldName": "passage_duration",
	                            "integerValue": 500
	                        }
                            ]
                        }
                    ]
                }
            ],
            "appInfo": {
                "appName": "app9",
                "appVersion": "1",
                "desc": "1",
                "clientId": "101278501"
            },
            "activityType": 5,
            "activeTime": 654501
        }
    ],
    "deletedActivityRecord": []
}
```

