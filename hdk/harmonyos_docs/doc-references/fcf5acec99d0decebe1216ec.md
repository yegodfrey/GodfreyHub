---
name: document/cn/doc-references/overview-0000001054120313
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001054120313
source: portal
---

# Overview  
  
Provides callbacks for receiving sensor data, including the basic data and accuracy data of sensors. 

The callbacks defined in the package can be called by the application layer to process the sensor data.

**Since:**

1

#### Interface Summary

Interface | Description  
---|---  
[ICategoryBodyDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icategorybodydatacallback-0000001054440271) | Inherits from [ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985) and receives data of body sensors.  
[ICategoryEnvironmentDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icategoryenvironmentdatacallback-0000001054200258) | Inherits from [ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985) and receives data of environment sensors.  
[ICategoryLightDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icategorylightdatacallback-0000001054518998) | Inherits from [ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985) and receives data of light sensors.  
[ICategoryMotionDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icategorymotiondatacallback-0000001054678986) | Inherits from [ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985) and receives data of motion sensors.  
[ICategoryOrientationDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icategoryorientationdatacallback-0000001054358965) | Inherits from [ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985) and receives data of orientation sensors.  
[ICategoryOtherDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icategoryotherdatacallback-0000001054558987) | Inherits from [ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985) and receives data of sensors in the other category.  
[ISensorDataCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/isensordatacallback-0000001054238985)<D extends [SensorData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sensordata-0000001054838938)<S>,S extends [SensorBase](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sensorbase-0000001054238981)> | A parent interface to receive sensor data.
