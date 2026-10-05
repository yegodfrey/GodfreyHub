---
name: document/cn/HiCar-References/set-gps-data-report-freq-0000001050164529
title: SetGPSDataReportFreq
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/set-gps-data-report-freq-0000001050164529
---

# SetGPSDataReportFreq

|Function|
|:----------------------------------------------------------------------------------------------|
|int32_t (*SetGPSDataReportFreq)( int32_t locationFreq, int32_t drivingFreq, int32_t sensorFreq)|
|动态设置GPS数据上报频率，如设置频率参数大于支持的最大值，返回错误。|

**Parameters**

|**Parameter name**|**Parameter type**|**Parameter desc**|
|:-----------------|:-----------------|:-----------------|
|locationFreq|int32_t|GPS的位置信息上报频率，单位Hz。|
|drivingFreq|int32_t|车身数据上报频率，单位Hz。|
|sensorFreq|int32_t|车的传感器数据上报频率，单位Hz。|

**Return**

|Type|Desc|
|:------|:-------------------|
|int32_t|返回结果： * 0：成功 * <0：失败|

