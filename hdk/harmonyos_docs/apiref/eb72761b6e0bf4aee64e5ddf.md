---
name: document/cn/apiref/pansensor-0000001082300278
title: PanSensor
uri: https://developer.huawei.com/consumer/cn/doc/apiref/pansensor-0000001082300278
source: portal
---

# PanSensor

#### Overview

**Description:**

Provides standard open APIs for you to use common capabilities of sensors. 

For example, you can call these APIs to obtain sensor information, subscribe to or unsubscribe from sensor data, enable or disable a sensor, and set the sensor data reporting mode.

**Since:**

5

#### Summary

#### [h2]Files

File Name | Description  
---|---  
[sensor_agent.h](https://device.harmonyos.com/cn/docs/develop/apiref/sensor__agent_8h-0000001081852208) | Declares common APIs for sensor management, such as APIs for subscribing to and obtaining sensor data, enabling a sensor, and setting the sensor data reporting mode.   
[sensor_agent_type.h](https://device.harmonyos.com/cn/docs/develop/apiref/sensor__agent__type_8h-0000001129018071) | Defines the basic data used by the sensor agent to manage sensors.   
  
#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997) | Defines sensor information.   
[SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/sensorevent-0000001082300290) | Defines the data reported by the sensor.   
[UserData](https://device.harmonyos.com/cn/docs/develop/apiref/userdata-0000001082300292) | Defines a reserved field for the sensor data subscriber.   
[SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) | Defines information about the sensor data subscriber.   
  
#### [h2]Macros

Macro Name and Value | Description  
---|---  
[SENSOR_NAME_MAX_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga4d85ccd1dc1681bcfc7a779b6c76f3b8) 16 |   
[SENSOR_USER_DATA_SIZE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gad291eae550f7bbbc471cfa885047e517) 104 |   
[VERSION_MAX_LEN](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga9cbcbbb32c4fc8c999f4c2a37f14ba50) 16 |   
  
#### [h2]Typedefs

Typedef Name | Description  
---|---  
[SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22) | typedef enum [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga70f453372b856b8281738e3306641a0e) Enumerates sensor types.   
[SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gab075b7008a69a31ffa018c7837df1d89) | typedef struct [SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997) Defines sensor information.   
[SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga4a18181e6abeaa72eade9601e9f1417e) | typedef struct [SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/sensorevent-0000001082300290) Defines the data reported by the sensor.   
[RecordSensorCallback](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga727d85478f9b849431543c02e07f40a4)) ([SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/sensorevent-0000001082300290) *event) | typedef void(*  Defines the callback for data reporting by the sensor agent.   
[UserData](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gad4e379c11597df71d266b7ece8919a5f) | typedef struct [UserData](https://device.harmonyos.com/cn/docs/develop/apiref/userdata-0000001082300292) Defines a reserved field for the sensor data subscriber.   
[SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaa41eb2fce29e8c5f3c792d5ab56b1d87) | typedef struct [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) Defines information about the sensor data subscriber.   
[SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga9c31c6b4b758aee32647d94b84494aa9) | typedef enum [SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabc47929dd59afff19be8147ebe8fa684) Enumerates data reporting modes of sensors.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga70f453372b856b8281738e3306641a0e) { [SENSOR_TYPE_ID_NONE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea958079625be2ccc998c4ade83707066b) = 0, [SENSOR_TYPE_ID_ACCELEROMETER](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eab4e15fe3397001cc85cd2e7422a4b81b) = 1, [SENSOR_TYPE_ID_GYROSCOPE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eaef508e7eb64f4ace3d17321d42400ad0) = 2, [SENSOR_TYPE_ID_PHOTOPLETHYSMOGRAPH](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eac9de925c05cc7258e74d9bc75195f8da) = 3, [SENSOR_TYPE_ID_ELECTROCARDIOGRAPH](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea907518c67f62e3a31e2959aaff28284c) = 4, [SENSOR_TYPE_ID_AMBIENT_LIGHT](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea7b4830fbb2fdd86adfab8f22e2ac2829) = 5, [SENSOR_TYPE_ID_MAGNETIC_FIELD](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea065ec056e806ea2874b5b918a9ee1e07) = 6, [SENSOR_TYPE_ID_CAPACITIVE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea6cea7d83da9b8ad80dd979ca7604b018) = 7, [SENSOR_TYPE_ID_BAROMETER](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea53afb1f6037cf7d004949db454a815af) = 8, [SENSOR_TYPE_ID_TEMPERATURE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea0bc311c491148f622f992a51494efe11) = 9, [SENSOR_TYPE_ID_HALL](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eaf71d3a5f6d5c03ac1d64130d168cafa9) = 10, [SENSOR_TYPE_ID_GESTURE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea66ff7c48d6c5da5bf213cf665cf950f9) = 11, [SENSOR_TYPE_ID_PROXIMITY](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea1ee4c2ba0e4b1a4df690b7ae7bb6e1d9) = 12, [SENSOR_TYPE_ID_HUMIDITY](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eace1c1e270006b30e28b51f39df274896) = 13, [SENSOR_TYPE_ID_PHYSICAL_MAX](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea8f57b6d30af1794af4552085df3dea81) = 0xFF, [SENSOR_TYPE_ID_ORIENTATION](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea6ef9f185559e1a2445fb7abd13900654) = 256, [SENSOR_TYPE_ID_GRAVITY](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea197de9b0c4b13d44693d2f810a418616) = 257, [SENSOR_TYPE_ID_LINEAR_ACCELERATION](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea67a3a1dc339dd8232fc3db3adda1cad0) = 258, [SENSOR_TYPE_ID_ROTATION_VECTOR](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea938c33aa6f1cce6a613120cd12415a79) = 259, [SENSOR_TYPE_ID_AMBIENT_TEMPERATURE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eaa9a05f67561e41396f50198f5b7616e0) = 260, [SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea60dcb5e64e426c85e9bc3f11f5de6c32) = 261, [SENSOR_TYPE_ID_GAME_ROTATION_VECTOR](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea8b9e79915c9c2697262e88963d3215fb) = 262, [SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eab78e6aa6a73e1f55c876cdab7c4b38d3) = 263, [SENSOR_TYPE_ID_SIGNIFICANT_MOTION](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea1f3843a0646b73af61ce6f66b7044407) = 264, [SENSOR_TYPE_ID_PEDOMETER_DETECTION](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea27de3cc4dd7b7d2f481c9a67819fbb64) = 265, [SENSOR_TYPE_ID_PEDOMETER](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea09eb0db14fe588824c3d1cd6015d51ae) = 266, [SENSOR_TYPE_ID_GEOMAGNETIC_ROTATION_VECTOR](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea65abdbb4a36d69ee352b1712f22f3620) = 277, [SENSOR_TYPE_ID_HEART_RATE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eac0a5a479f83316e2ae0a388b657c8f84) = 278, [SENSOR_TYPE_ID_DEVICE_ORIENTATION](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eae8222e838edfc8aff8b15549d23a1175) = 279, [SENSOR_TYPE_ID_WEAR_DETECTION](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea10c9986dc843350f151205f035410709) = 280, [SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0ea392d7319c179d7fd6d2c4efca78d1026) = 281, [SENSOR_TYPE_ID_MAX](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gga70f453372b856b8281738e3306641a0eab7ea282a7e0a45c29f7b8538d46519bc) = 30 } | Enumerates sensor types.   
[SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabc47929dd59afff19be8147ebe8fa684) { [SENSOR_DEFAULT_MODE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ggabc47929dd59afff19be8147ebe8fa684a453e34bc1f4d71b386e9ae46ddb22a5f) = 0, [SENSOR_REALTIME_MODE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ggabc47929dd59afff19be8147ebe8fa684ad4428f4f11643fa9263204f54d7f35d3) = 1, [SENSOR_ON_CHANGE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ggabc47929dd59afff19be8147ebe8fa684afe1d7837ce97e28d9adcf8f57256b285) = 2, [SENSOR_ONE_SHOT](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ggabc47929dd59afff19be8147ebe8fa684a6a7ddc5d12b2d3e6d64ad6ab04a987a0) = 3, [SENSOR_FIFO_MODE](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ggabc47929dd59afff19be8147ebe8fa684ac8d9e00362dee4e4822ddca7ea58fba7) = 4, [SENSOR_MODE_MAX](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ggabc47929dd59afff19be8147ebe8fa684aafef39964591a0d59a7a68a631a344c4) } | Enumerates data reporting modes of sensors.   
  
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
  
#### Details

#### Macro Definition

#### [h2]SENSOR_NAME_MAX_LEN
    
    #define SENSOR_NAME_MAX_LEN   16

**Description:**

Maximum length of the sensor name 

#### [h2]SENSOR_USER_DATA_SIZE
    
    #define SENSOR_USER_DATA_SIZE   104

**Description:**

Size of sensor data 

#### [h2]VERSION_MAX_LEN
    
    #define VERSION_MAX_LEN   16

**Description:**

Maximum length of the sensor version 

#### Typedef

#### [h2]RecordSensorCallback
    
    typedef void(* RecordSensorCallback) ([SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/sensorevent-0000001082300290) *event)

**Description:**

Defines the callback for data reporting by the sensor agent. 

#### [h2]SensorEvent
    
    typedef struct [SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/sensorevent-0000001082300290) [SensorEvent](https://device.harmonyos.com/cn/docs/develop/apiref/sensorevent-0000001082300290)

**Description:**

Defines the data reported by the sensor. 

#### [h2]SensorInfo
    
    typedef struct [SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997) [SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997)

**Description:**

Defines sensor information. 

#### [h2]SensorMode
    
    typedef enum [SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabc47929dd59afff19be8147ebe8fa684) [SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabc47929dd59afff19be8147ebe8fa684)

**Description:**

Enumerates data reporting modes of sensors. 

#### [h2]SensorTypeId
    
    typedef enum [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga70f453372b856b8281738e3306641a0e) [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga70f453372b856b8281738e3306641a0e)

**Description:**

Enumerates sensor types. 

#### [h2]SensorUser
    
    typedef struct [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829)

**Description:**

Defines information about the sensor data subscriber. 

#### [h2]UserData
    
    typedef struct [UserData](https://device.harmonyos.com/cn/docs/develop/apiref/userdata-0000001082300292) [UserData](https://device.harmonyos.com/cn/docs/develop/apiref/userdata-0000001082300292)

**Description:**

Defines a reserved field for the sensor data subscriber. 

#### Enumeration Type

#### [h2]SensorMode
    
    enum [SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gabc47929dd59afff19be8147ebe8fa684)

**Description:**

Enumerates data reporting modes of sensors. 

Enumerator | Description  
---|---  
****SENSOR_DEFAULT_MODE | Default data reporting mode   
****SENSOR_REALTIME_MODE | Real-time data reporting mode to report a group of data each time   
****SENSOR_ON_CHANGE | Real-time data reporting mode to report data upon status changes   
****SENSOR_ONE_SHOT | Real-time data reporting mode to report data only once   
****SENSOR_FIFO_MODE | FIFO-based data reporting mode to report data based on the **BatchCnt** setting   
****SENSOR_MODE_MAX | Maximum sensor data reporting mode   
  
#### [h2]SensorTypeId
    
    enum [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga70f453372b856b8281738e3306641a0e)

**Description:**

Enumerates sensor types. 

Enumerator | Description  
---|---  
****SENSOR_TYPE_ID_NONE | None   
****SENSOR_TYPE_ID_ACCELEROMETER | Acceleration sensor   
****SENSOR_TYPE_ID_GYROSCOPE | Gyroscope sensor   
****SENSOR_TYPE_ID_PHOTOPLETHYSMOGRAPH | Photoplethysmography sensor   
****SENSOR_TYPE_ID_ELECTROCARDIOGRAPH | Electrocardiogram (ECG) sensor   
****SENSOR_TYPE_ID_AMBIENT_LIGHT | Ambient light sensor   
****SENSOR_TYPE_ID_MAGNETIC_FIELD | Magnetic field sensor   
****SENSOR_TYPE_ID_CAPACITIVE | Capacitive sensor   
****SENSOR_TYPE_ID_BAROMETER | Barometric pressure sensor   
****SENSOR_TYPE_ID_TEMPERATURE | Temperature sensor   
****SENSOR_TYPE_ID_HALL | Hall effect sensor   
****SENSOR_TYPE_ID_GESTURE | Gesture sensor   
****SENSOR_TYPE_ID_PROXIMITY | Proximity sensor   
****SENSOR_TYPE_ID_HUMIDITY | Humidity sensor   
****SENSOR_TYPE_ID_PHYSICAL_MAX | Maximum type ID of a physical sensor   
****SENSOR_TYPE_ID_ORIENTATION | Orientation sensor   
****SENSOR_TYPE_ID_GRAVITY | Gravity sensor   
****SENSOR_TYPE_ID_LINEAR_ACCELERATION | Linear acceleration sensor   
****SENSOR_TYPE_ID_ROTATION_VECTOR | Rotation vector sensor   
****SENSOR_TYPE_ID_AMBIENT_TEMPERATURE | Ambient temperature sensor   
****SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED | Uncalibrated magnetic field sensor   
****SENSOR_TYPE_ID_GAME_ROTATION_VECTOR | Game rotation vector sensor   
****SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED | Uncalibrated gyroscope sensor   
****SENSOR_TYPE_ID_SIGNIFICANT_MOTION | Significant motion sensor   
****SENSOR_TYPE_ID_PEDOMETER_DETECTION | Pedometer detection sensor   
****SENSOR_TYPE_ID_PEDOMETER | Pedometer sensor   
****SENSOR_TYPE_ID_GEOMAGNETIC_ROTATION_VECTOR | Geomagnetic rotation vector sensor   
****SENSOR_TYPE_ID_HEART_RATE | Heart rate sensor   
****SENSOR_TYPE_ID_DEVICE_ORIENTATION | Device orientation sensor   
****SENSOR_TYPE_ID_WEAR_DETECTION | Wear detection sensor   
****SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED | Uncalibrated acceleration sensor   
****SENSOR_TYPE_ID_MAX | Maximum number of sensor type IDs   
  
#### Function

#### [h2]ActivateSensor()
    
    int32_t ActivateSensor (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) * user )

**Description:**

Enables the sensor that has been subscribed to. The subscriber can obtain the sensor data only after the sensor is enabled. 

**Parameters:**

Name | Description  
---|---  
sensorTypeId | Indicates the ID of a sensor type. For details, see [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22).   
user | Indicates the pointer to the sensor subscriber that requests sensor data. For details, see [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829). A subscriber can obtain data from only one sensor.   
  
**Returns:**

Returns **0** if the sensor is successfully enabled; returns a non-zero value otherwise.

#### [h2]DeactivateSensor()
    
    int32_t DeactivateSensor (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) * user )

**Description:**

Disables an enabled sensor. 

**Parameters:**

Name | Description  
---|---  
sensorTypeId | Indicates the ID of a sensor type. For details, see [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22).   
user | Indicates the pointer to the sensor subscriber that requests sensor data. For details, see [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829). A subscriber can obtain data from only one sensor.   
  
**Returns:**

Returns **0** if the sensor is successfully disabled; returns a non-zero value otherwise.

#### [h2]GetAllSensors()
    
    int32_t GetAllSensors ([SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997) ** sensorInfo, int32_t * count )

**Description:**

Obtains information about all sensors in the system. 

**Parameters:**

Name | Description  
---|---  
sensorInfo | Indicates the double pointer to the information about all sensors in the system. For details, see [SensorInfo](https://device.harmonyos.com/cn/docs/develop/apiref/sensorinfo-0000001128996997).   
count | Indicates the pointer to the total number of sensors in the system.   
  
**Returns:**

Returns **0** if the information is obtained; returns a non-zero value otherwise.

#### [h2]SetBatch()
    
    int32_t SetBatch (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) * user, int64_t samplingInterval, int64_t reportInterval )

**Description:**

Sets the data sampling interval and data reporting interval for the specified sensor. 

**Parameters:**

Name | Description  
---|---  
sensorTypeId | Indicates the ID of a sensor type. For details, see [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22).   
user | Indicates the pointer to the sensor subscriber that requests sensor data. For details, see [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829). A subscriber can obtain data from only one sensor.   
samplingInterval | Indicates the sensor data sampling interval to set, in nanoseconds.   
reportInterval | Indicates the sensor data reporting interval, in nanoseconds.   
  
**Returns:**

Returns **0** if the setting is successful; returns a non-zero value otherwise.

#### [h2]SetMode()
    
    int32_t SetMode (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) * user, int32_t mode )

**Description:**

Sets the data reporting mode for the specified sensor. 

**Parameters:**

Name | Description  
---|---  
sensorTypeId | Indicates the ID of a sensor type. For details, see [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22).   
user | Indicates the pointer to the sensor subscriber that requests sensor data. For details, see [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829). A subscriber can obtain data from only one sensor.   
mode | Indicates the data reporting mode to set. For details, see [SensorMode](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__ga9c31c6b4b758aee32647d94b84494aa9).   
  
**Returns:**

Returns **0** if the sensor data reporting mode is successfully set; returns a non-zero value otherwise.

#### [h2]SubscribeSensor()
    
    int32_t SubscribeSensor (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) * user )

**Description:**

Subscribes to sensor data. The system will report the obtained sensor data to the subscriber. 

**Parameters:**

Name | Description  
---|---  
sensorTypeId | Indicates the ID of a sensor type. For details, see [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22).   
user | Indicates the pointer to the sensor subscriber that requests sensor data. For details, see [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829). A subscriber can obtain data from only one sensor.   
  
**Returns:**

Returns **0** if the subscription is successful; returns a non-zero value otherwise.

#### [h2]UnsubscribeSensor()
    
    int32_t UnsubscribeSensor (int32_t sensorTypeId, [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829) * user )

**Description:**

Unsubscribes from sensor data. 

**Parameters:**

Name | Description  
---|---  
sensorTypeId | Indicates the ID of a sensor type. For details, see [SensorTypeId](https://device.harmonyos.com/cn/docs/develop/apiref/pansensor-0000001082300278#ZH-CN_TOPIC_0000001082300278__gaebb1ce31a381b192f73927d910302f22).   
user | Indicates the pointer to the sensor subscriber that requests sensor data. For details, see [SensorUser](https://device.harmonyos.com/cn/docs/develop/apiref/sensoruser-0000001128759829). A subscriber can obtain data from only one sensor.   
  
**Returns:**

Returns **0** if the unsubscription is successful; returns a non-zero value otherwise.
