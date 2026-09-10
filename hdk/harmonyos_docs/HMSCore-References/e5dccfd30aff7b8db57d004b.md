---
name: document/cn/HMSCore-References/savemultiplehealthdata-0000001057695282
title: saveMultipleHealthData：将多条设备测量数据存储到运动健康平台
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/savemultiplehealthdata-0000001057695282
---

# saveMultipleHealthData：将多条设备测量数据存储到运动健康平台

接口原型

public void saveMultipleHealthData(String data, String function)

方法描述：将多条设备测量数据存储到运动健康平台。当前支持JS将体温、血氧、血糖、体重、血压数据存储到运动健康。

请求参数  

|参数名称|参数类型|参数描述|可选选项|
|:-------|:-----|:-----------------------------------|:---|
|data|String|测量数据，参考下方举例。|M|
|function|String|运动健康返回存储结果的回调函数，该回调函数有一个参数，详情参见响应参数。|M|
[表1 请求参数]

data参数是一个json字符串，是设备测量的结果

数据举例：

比如设备上的血糖测量结果有多条，需要同步到运动健康App里，则构造以下json字符串传递给参数data  
体温数据：

```
{
"type"：2104,
"dataTypeName": "com.huawei.instantaneous.body.temperature",
data:[
{
    "startTime":1488297600000,
    "endTime":1488297600000,
    "value":{
        "temp":36.5,
     }
 },
{
    "startTime":1513820991528,
    "endTime":1513820991528,
    "value":{
        "temp": 38.5,
    }
},
{ 
    "startTime":1513907361528,
    "endTime":1513907361528,
    "value":{
        "temp": 35.5,
    }
},
{ 
    "startTime":1513993721528,
    "endTime":1513993721528,
    "value":{
        "temp": 37.6,
    }
}
]}
```

多条血氧数据：

```
{
"type"：2103,
"dataTypeName": "com.huawei.instantaneous.spo2",
data:[{
    "startTime":1488297600000,
    "endTime":1488297600000,
    "value":{
        "SpO2":98,
    }
},
{
    "startTime":1488297700000,
    "endTime":1488297700000,
    "value":{
        "SpO2":94,
    }
},
{
    "startTime":1488297200000,
    "endTime":1488297200000,
    "value":{
        "SpO2":88,
    }
}
]}
```

多条血糖数据：

```
{
"type"：10001,
"dataTypeName": "com.huawei.instantaneous.blood_glucose",
"data":[{
    "startTime":1513820981528,
    "endTime":1513820981528,
    "isConfirmed": false,
    "value":{
        "beforeBreakfast": 4.5
    }
},
{ 
    "startTime":1513907181528,
    "endTime":1513907181528,
    "isConfirmed": false,
    "value":{
        "beforeBreakfast": 5.0
    }
},
{ 
    "startTime":1513993731528,
    "endTime":1513993781528,
    "isConfirmed": false,
    "value":{
        "beforeBreakfast": 4.7
    }
},
{ 
    "startTime":1514080131528,
    "endTime":1514080181528,
    "isConfirmed": false,
    "value":{
        "beforeBreakfast": 6.5
    }
},
{ 
    "startTime":1514166881528,
    "endTime":1514166881528,
    "isConfirmed": false,
    "value":{
        "beforeBreakfast": 17.5
    }
}
]}
```

多条体重数据：

```
{
"type"：10006,
"dataTypeName": "com.huawei.instantaneous.body_weight",
"data":[{
    "startTime":1488291600000,
    "endTime":1488291600000,
    "value":{
        "weight": 74.5,
        "bmi": 20,
        "muscleMass": 12,
        "basalMetabolism": 23,
        "moisture": 25.6,
        "visceralFatLevel": 44,
        "boneSalt": 4.1,
        "proteinRate": 22,
        "bodyScore": 16,
        "bodyAge": 23,
        "bodyFatRate": 17.5,
        "impedance": 23,5,
        "moistureRate": 35.3,
        "skeletalMuscleMass": 22.4
    }
},
{
    "startTime":1488297600000,
    "endTime":1488297600000,
    "value":{
        "weight": 74.5,
        "bmi": 20,
        "muscleMass": 4.3,
        "basalMetabolism": 4.24,
        "moisture": 22,
        "visceralFatLevel": 11,
        "boneSalt": 3.5,
        "proteinRate": 14,
        "bodyScore": 15,
        "bodyAge": 28,
        "bodyFatRate": 17,
        "impedance": 18,
        "moistureRate": 22,
        "skeletalMuscleMass": 33
    }
},
{
    "startTime":1488297900000,
    "endTime":1488297900000,
    "value":{
        "weight": 74.5,
        "bmi": 20,
        "muscleMass": 4.8,
        "basalMetabolism": 22,
        "moisture": 11,
        "visceralFatLevel": 33,
        "boneSalt": 4.3,
        "proteinRate": 24,
        "bodyScore": 25,
        "bodyAge": 35,
        "bodyFatRate": 26,
        "impedance": 27,
        "moistureRate": 28,
        "skeletalMuscleMass": 29
    }
},
{
    "startTime":1488297300000,
    "endTime":1488297300000,
    "value":{
        "weight": 74.5,
        "bmi": 20,
        "muscleMass": 35,
        "basalMetabolism": 36,
        "moisture": 23.4,
        "visceralFatLevel": 33.5,
        "boneSalt": 4.6,
        "proteinRate": 12.4,
        "bodyScore": 18.6,
        "bodyAge": 44,
        "bodyFatRate": 16.9,
        "impedance": 33,
        "moistureRate": 24,
        "skeletalMuscleMass": 19
    }
}
]}
```

多条血压数据：

```
{
"type"：10002,
"dataTypeName": " com.huawei.instantaneous.blood_pressure",
data:[{
    "startTime":1488297600000,
    "endTime":1488297600000,
    "value":{
        "diastolic": 66,     
        "systolic ": 99,
        "pulse": 110
    }
},
{
    "startTime":1488297600000,
    "endTime":1488297600000,
    "value":{
        "diastolic": 87,     
        "systolic ": 98,
        "pulse": 109
    }
},
{
    "startTime":1488297600000,
    "endTime":1488297600000,
    "value":{
        "diastolic": 84,     
        "systolic ": 96,
        "pulse": 115
    }
}
]}
```

多条跳绳数据：

```
{
"type"：30029,
"dataTypeName": "com.huawei.instantaneous.rope_skipping",(可选）
data:[{
    "startTime":1588297600000L,
    "endTime":1688297600000L,
    "value":{
        "sportType":283,
        "totalCalories":2000,
        "totalTime":17000L,
        "mExtendTrackDataMap":{"skipSpeed":"226","skipNum":"64","stumblingRope":"1"（可选）,"maxSkippingTimes":"55"（可选）},
        }
     },
    {
    "startTime":1788297600000L,
    "endTime":1888297600000L,
    "value":{
        "sportType":283,
        "totalCalories":3000,
        "totalTime":18000L,
        "mExtendTrackDataMap":{"skipSpeed":"236","skipNum":"84","stumblingRope":"2","maxSkippingTimes":"85"},
        }
    }
]
```

<br />

响应参数  

|参数名称|参数类型|参数描述|可选选项|
|:---------|:-----|:-----------------------------------------------------------------------------------------------------------------------------|:---|
|resultCode|Number|0，表示存储成功。 0以外表示存储失败，具体错误信息参见[错误码清单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/errcode-0000001058135271)。|M|
[表2 响应参数]

