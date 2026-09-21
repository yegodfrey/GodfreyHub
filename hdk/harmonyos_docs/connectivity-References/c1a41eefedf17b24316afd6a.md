---
name: document/cn/connectivity-References/sensorreadcallback-0000001060099095
title: SensorReadCallback
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/sensorreadcallback-0000001060099095
---

# SensorReadCallback

|-----------------------------------|
|public interface SensorReadCallback|

传感器返回的数据的回调接口。

## Method Summary

|Modifier and Type|Method and Description|
|:----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[onReadResult](https://developer.huawei.com/consumer/cn/doc/connectivity-References/sensorreadcallback-0000001060099095#ZH-CN_TOPIC_0000001920110405__onReadResult-int-com_huawei_wearengine_sensor_DataResult-)(int errorCode, [DataResult](https://developer.huawei.com/consumer/cn/doc/connectivity-References/dataresult-0000001060330670) dataResult) 读传感器数据的回调函数。|

## Method Detail

### onReadResult

void onReadResult(int errorCode, [DataResult](https://developer.huawei.com/consumer/cn/doc/connectivity-References/dataresult-0000001060330670) dataResult)

读传感器数据的回调函数。

**Parameters:**

|Parameter Name|Parameter Description|
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------|
|errorCode|返回码，具体的值参见 [WearEngineErrorCode](https://developer.huawei.com/consumer/cn/doc/connectivity-References/wearengineerrorcode-0000001059980969)|
|dataResult|传感器返回的数据|

**Since:**

API level 2 (SDK 5.0.1.300)

