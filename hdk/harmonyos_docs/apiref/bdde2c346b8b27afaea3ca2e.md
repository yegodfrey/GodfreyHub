---
name: document/cn/apiref/sensor__agent_8h-0000001081852208
title: sensor_agent.h
uri: https://developer.huawei.com/consumer/cn/doc/apiref/sensor__agent_8h-0000001081852208
source: portal
---

# sensor_agent.h

#### Overview

**Related Modules:**

[PanSensor](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278)

**Description:**

Declares common APIs for sensor management, such as APIs for subscribing to and obtaining sensor data, enabling a sensor, and setting the sensor data reporting mode. 

**Since:**

5

#### Summary

#### [h2]Functions

Function | Description  
---|---  
[GetAllSensors](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga80e9bca91aaba251c7073d61ed3e000d) ([SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997) **sensorInfo, int32_t *count) | int32_t  Obtains information about all sensors in the system.   
[SubscribeSensor](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabc0c98339e66acfb4b8355dbf591660f) (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) *user) | int32_t  Subscribes to sensor data. The system will report the obtained sensor data to the subscriber.   
[UnsubscribeSensor](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gac31558fa2460ebfe6f42654eac1230b6) (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) *user) | int32_t  Unsubscribes from sensor data.   
[SetBatch](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga771399088e72ae0dea6d3873029c9065) (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) *user, int64_t samplingInterval, int64_t reportInterval) | int32_t  Sets the data sampling interval and data reporting interval for the specified sensor.   
[ActivateSensor](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga49c49682e754240208d75d0e9fcc0da0) (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) *user) | int32_t  Enables the sensor that has been subscribed to. The subscriber can obtain the sensor data only after the sensor is enabled.   
[DeactivateSensor](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabfd9ee8e024cd149eea156f66465dd04) (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) *user) | int32_t  Disables an enabled sensor.   
[SetMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gab235b2dc01db50646b4a4fd356d72f9c) (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) *user, int32_t mode) | int32_t  Sets the data reporting mode for the specified sensor. 
