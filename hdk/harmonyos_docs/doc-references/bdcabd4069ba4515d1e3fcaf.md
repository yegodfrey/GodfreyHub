---
name: document/cn/doc-references/sensorutils-0000001054120311
title: SensorUtils
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/sensorutils-0000001054120311
source: portal
---

SensorUtils [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.sensor.common.SensorUtils
    
    public class SensorUtils
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides methods for parsing the category, type, and index of a sensor based on the sensor ID.**Since:** 1Method Summary Modifier and Type | Method | Description  
---|---|---  
static int | [parseSensorCategory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sensorutils-0000001054120311#ZH-CN_TOPIC_0000001054120311__parseSensorCategory-int-)​(int sensorId) |  Parses the category of a sensor based on the sensor ID.   
static int | [parseSensorIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sensorutils-0000001054120311#ZH-CN_TOPIC_0000001054120311__parseSensorIndex-int-)​(int sensorId) |  Parses the index of a sensor based on the sensor ID.   
static int | [parseSensorType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sensorutils-0000001054120311#ZH-CN_TOPIC_0000001054120311__parseSensorType-int-)​(int sensorId) |  Parses the type of a sensor based on the sensor ID.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Method Detail [h2]parseSensorCategory public static int parseSensorCategory​(int sensorId) Parses the category of a sensor based on the sensor ID. **Parameters:** Parameter Name | Parameter Description  
---|---  
sensorId  |  Indicates the ID of the sensor.  
**Returns:** Returns the category of the sensor. **Since:** 1 [h2]parseSensorType public static int parseSensorType​(int sensorId) Parses the type of a sensor based on the sensor ID. **Parameters:** Parameter Name | Parameter Description  
---|---  
sensorId  |  Indicates the ID of the sensor.  
**Returns:** Returns the type of the sensor. **Since:** 1 [h2]parseSensorIndex public static int parseSensorIndex​(int sensorId) Parses the index of a sensor based on the sensor ID. If multiple sensors of a specific type are available, this method is used to parse the index of the current sensor. **Parameters:** Parameter Name | Parameter Description  
---|---  
sensorId  |  Indicates the ID of the sensor.  
**Returns:** Returns the index of the sensor. **Since:** 1
