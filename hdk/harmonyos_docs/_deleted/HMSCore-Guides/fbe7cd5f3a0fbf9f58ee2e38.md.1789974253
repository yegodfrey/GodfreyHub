---
name: document/cn/HMSCore-Guides/sleep-breathing-record-0000001349063758
title: 睡眠呼吸记录
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sleep-breathing-record-0000001349063758
---

# 睡眠呼吸记录

本章节提供通过华为Health Service Kit服务端REST API写入以及读取用户睡眠呼吸记录的方法示例。

联盟卡片申请的权限名称：健康数据 > 肺功能数据

睡眠呼吸记录数据及关联的明细数据对应的Scope为：

* 读权限：https://www.huawei.com/healthkit/pulmonary.read
* 写权限：https://www.huawei.com/healthkit/pulmonary.write

## 写入睡眠呼吸记录数据

写入睡眠呼吸记录数据有以下几个步骤：

1. 创建睡眠呼吸记录DataCollector。

   **HTTP请求** **，** 请参见[创建数据采集器](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/datacollectors_create-0000001050114852#section984123664716)接口

   ```screen
   POST
   https://health-api.cloud.huawei.com/healthkit/v2/dataCollectors
   ```

   **请求示例**

   ```screen
   POST 
   https://health-api.cloud.huawei.com/healthkit/v2/dataCollectors
   ```

   **请求体**

   ```screen
   Content-Type: application/json
   Authorization: Bearer ***
   x-client-id: ***
   x-version: ***
   x-caller-trace-id: ***
   {
       "appInfo": {
           "appName": "com.huawei.health.cloud.device.{$appName}"  
       },
       "collectorDataType": {
           "name": "com.huawei.health.record.ventilator"
       },
       "deviceInfo": {
           "manufacturer": "Huawei",
           "modelNum": "mp",
           "devType": "Ventilator",
           "uniqueId": "1234567890",
           "version": "1.0",
           "prodId": "****"
       },
       "collectorType": "raw"
   }
   ```

   **响应体**

   ```screen
   HTTP/1.1 200 OK
   Content-type: application/json;charset=utf-8
   {
       "collectorId": "cmF3OmhlYWx0aC5yZWNvcmQudmVudGlsYXRvcgEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
       "collectorType": "raw",
       "collectorDataType": {
           "name": "com.huawei.health.record.ventilator",
           "field": [
               {
                   "name": "sysMode",
                   "format": "integer",
                   "optional": false
               },
               {
                   "name": "sysSessionDate",
                   "format": "long",
                   "optional": false
               },
               {
                   "name": "eventAhi",
                   "format": "float",
                   "optional": false
               },
               {
                   "name": "sysDuration",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "lumisTidvolMedian",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "lumisTidvol95",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "lumisTidvolMax",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "clinicalRespRateMedian",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "clinicalRespRate95",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "clinicalRespRateMax",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "lumisIeratioMedian",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "lumisIeratioQuantile95",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "lumisIeratioMax",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "maskOff",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "hypoventilationIndex",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "obstructiveApneaIndex",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "pressureBelow95",
                   "format": "float",
                   "optional": true
               },
               {
                   "name": "hypoventilationEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "snoringEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "obstructiveApneaEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "centerApneaEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "airflowLimitEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "massiveLeakEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "unknowEventTimes",
                   "format": "integer",
                   "optional": true
               },
               {
                   "name": "allEventTimes",
                   "format": "integer",
                   "optional": true
               }
           ]
       },
       "deviceInfo": {
           "uniqueId": "1234567890",
           "devType": "Ventilator",
           "version": "1.0",
           "modelNum": "mp",
           "manufacturer": "Huawei",
           "prodId": "****"
       },
       "appInfo": {
           "appName": "com.huawei.health.cloud.device.{$appName}",
           "appPackageName": "com.health.demo",
           "clientId": "101278501"
       }
   }
   ```

2. 将睡眠记录数据写入HealthRecord，并关联周期性睡眠呼吸采样数据和非周期性睡眠呼吸采样数据。

   **HTTP请求** ，请参见[上传健康记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/health-record-create-0000001096044054#section4148124910217)接口

   ```screen
   PATCH 
   https://health-api.cloud.huawei.com/healthkit/v2/dataCollectors/{dataCollectorId}/healthRecords
   ```

   **请求示例**

   ```screen
   PATCH 
   https://health-api.cloud.huawei.com/healthkit/v2/dataCollectors/cmF3OmhlYWx0aC5yZWNvcmQudmVudGlsYXRvcgEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg/healthRecords
   ```

   **请求体**

   ```screen
   Content-Type: application/json
   Authorization: Bearer ***
   x-client-id: ***
   x-version: ***
   x-caller-trace-id: ***
   {
       "healthRecords": [
           {
               "dataTypeName": "com.huawei.health.record.ventilator",
               "endTime": 1662366073897000000,
               "startTime": 1662360073897000000,
               "value": [
                   {
                       "fieldName": "sysSessionDate",
                       "longValue": 10
                   },
                   {
                       "fieldName": "sysMode",
                       "integerValue": 1
                   },
                   {
                       "fieldName": "eventAhi",
                       "floatValue": 1
                   }
               ],
               "subData": {
                   "com.huawei.sleep_respiratory_event": {
                       "endTime": 1662366073897000000,
                       "startTime": 1662360073897000000,
                       "samplePoints": [
                           {
                               "dataTypeName": "com.huawei.sleep_respiratory_event",
                               "endTime": 1662360913897000000,
                               "startTime": 1662360733897000000,
                               "value": [
                                   {
                                       "fieldName": "eventName",
                                       "integerValue": 1
                                   }
                               ]
                           }
                       ]
                   },
                   "com.huawei.sleep_respiratory_detail": {
                       "endTime": 1662366073897000000,
                       "startTime": 1662360073897000000,
                       "samplePoints": [
                           {
                               "dataTypeName": "com.huawei.sleep_respiratory_detail",
                               "endTime": 1662362173897000000,
                               "startTime": 1662361873897000000,
                               "value": [
                                   {
                                       "fieldName": "type",
                                       "integerValue": 1
                                   },
                                   {
                                       "fieldName": "value",
                                       "floatValue": 1
                                   }
                               ]
                           }
                       ]
                   }
               }
           }
       ]
   }
   ```

   **响应体**

   ```screen
   HTTP/1.1 200 OK
   Content-type: application/json;charset=utf-8
   {
       "healthRecords": [
           {
               "startTime": 1662360073897000000,
               "endTime": 1662366073897000000,
               "dataTypeName": "com.huawei.health.record.ventilator",
               "value": [
                   {
                       "fieldName": "sysMode",
                       "integerValue": 1
                   },
                   {
                       "fieldName": "eventAhi",
                       "floatValue": 1
                   },
                   {
                       "fieldName": "sysSessionDate",
                       "longValue": 10
                   }
               ],
               "id": "cmF3OmNvbS5odWF3ZWkuaGVhbHRoLnJlY29yZC52ZW50aWxhdG9yOjEwMTI3ODUwMTpIdWF3ZWk6bXA6MTIzNDU2Nzg5MC0xNjYyMzY2MDczODk3MDAwMDAw",
               "subDataRelation": [
                   {
                       "startTime": 1662360073897000000,
                       "endTime": 1662366073897000000,
                       "dataTypeName": "com.huawei.sleep_respiratory_event",
                       "dataCollectorId": "cmF3OnNsZWVwX3Jlc3BpcmF0b3J5X2V2ZW50EwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg"
                   },
                   {
                       "startTime": 1662360073897000000,
                       "endTime": 1662366073897000000,
                       "dataTypeName": "com.huawei.sleep_respiratory_detail",
                       "dataCollectorId": "cmF3OnNsZWVwX3Jlc3BpcmF0b3J5X2RldGFpbAEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg"
                   }
               ]
           }
       ],
       "timeZone": "+0800"
   }
   ```

## 读取睡眠呼吸记录数据

通过HealthRecord读取睡眠呼吸记录数据。

**HTTP请求，** 请参见[数据类型健康记录查询](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/get-health-record-by-datatype-0000001142843917#section9701181322219)接口

```screen
GET 
https://health-api.cloud.huawei.com/healthkit/v2/healthRecords?startTime=***&endTime=***&dataType=***&subDataType=***
```

**请求示例**

```screen
GET 
https://health-api.cloud.huawei.com/healthkit/v2/healthRecords?startTime=1662633695440000000&endTime=1662639695440000000&dataType=com.huawei.health.record.ventilator&dataType=com.huawei.health.record.ventilator&subDataType=com.huawei.sleep_respiratory_detail&subDataType=com.huawei.sleep_respiratory_event
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

{
    "healthRecords": [
        {
            "startTime": 1662633695440000000,
            "endTime": 1662639695440000000,
            "dataTypeName": "com.huawei.health.record.ventilator",
            "originalDataCollectorId": "cmF3OmhlYWx0aC5yZWNvcmQudmVudGlsYXRvcgEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
            "value": [
                {
                    "fieldName": "hypoventilationIndex",
                    "floatValue": 1
                },
                {
                    "fieldName": "clinicalRespRate95",
                    "floatValue": 1
                },
                {
                    "fieldName": "centerApneaEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "snoringEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "lumisIeratioQuantile95",
                    "floatValue": 1
                },
                {
                    "fieldName": "hypoventilationEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "obstructiveApneaEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "sysDuration",
                    "integerValue": 1
                },
                {
                    "fieldName": "maskOff",
                    "integerValue": 1
                },
                {
                    "fieldName": "sysMode",
                    "integerValue": 1
                },
                {
                    "fieldName": "airflowLimitEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "pressureBelow95",
                    "floatValue": 1
                },
                {
                    "fieldName": "lumisTidvolMedian",
                    "floatValue": 1
                },
                {
                    "fieldName": "lumisIeratioMax",
                    "floatValue": 1
                },
                {
                    "fieldName": "clinicalRespRateMedian",
                    "floatValue": 1
                },
                {
                    "fieldName": "lumisTidvol95",
                    "floatValue": 1
                },
                {
                    "fieldName": "unknowEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "lumisIeratioMedian",
                    "floatValue": 1
                },
                {
                    "fieldName": "clinicalRespRateMax",
                    "floatValue": 1
                },
                {
                    "fieldName": "lumisTidvolMax",
                    "floatValue": 1
                },
                {
                    "fieldName": "eventAhi",
                    "floatValue": 1
                },
                {
                    "fieldName": "allEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "massiveLeakEventTimes",
                    "integerValue": 1
                },
                {
                    "fieldName": "sysSessionDate",
                    "longValue": 10
                }
            ],
            "modifyTime": 1662639696166,
            "id": "cmF3OmNvbS5odWF3ZWkuaGVhbHRoLnJlY29yZC52ZW50aWxhdG9yOjEwMTI3ODUwMTpIdWF3ZWk6bXA6MTIzNDU2Nzg5MC0xNjYyNjM5Njk1NDQwMDAwMDAw",
            "subData": {
                "com.huawei.sleep_respiratory_event": {
                    "startTime": 1662633695440000000,
                    "endTime": 1662639695440000000,
                    "dataCollectorId": "cmF3OnNsZWVwX3Jlc3BpcmF0b3J5X2V2ZW50EwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
                    "samplePoints": [
                        {
                            "startTime": 1662634895440000000,
                            "endTime": 1662638495440000000,
                            "dataTypeName": "com.huawei.sleep_respiratory_event",
                            "value": [
                                {
                                    "fieldName": "eventName",
                                    "integerValue": 1
                                }
                            ],
                            "modifyTime": 1662639696092
                        }
                    ]
                },
                "com.huawei.sleep_respiratory_detail": {
                    "startTime": 1662633695440000000,
                    "endTime": 1662639695440000000,
                    "dataCollectorId": "cmF3OnNsZWVwX3Jlc3BpcmF0b3J5X2RldGFpbAEwMTI3ODUwMTpqEF7rB3uBcGykpv6T2TisfTMhfZAvz1BP2Kcz70d1Sg",
                    "samplePoints": [
                        {
                            "startTime": 1662635495440000000,
                            "endTime": 1662637895440000000,
                            "dataTypeName": "com.huawei.sleep_respiratory_detail",
                            "value": [
                                {
                                    "fieldName": "type",
                                    "integerValue": 1
                                },
                                {
                                    "fieldName": "value",
                                    "floatValue": 1
                                }
                            ],
                            "modifyTime": 1662639696128
                        }
                    ]
                }
            }
        }
    ]
}
```

