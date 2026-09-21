---
name: document/cn/connectivity-References/monitordata-0000001060779124
title: MonitorData
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124
---

# MonitorData

|-------------------------------------------------------------------------------------------------------------------------------------------------|
|java.lang.Object |---com.huawei.wearengine.monitor.MonitorData public class MonitorData extends java.lang.Object implements android.os.Parcelable|

监测指标转换为可操作的数据，如：boolean、int、String、HashMap数据。

## Method Summary

|Modifier and Type|Method and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[asBool](https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124#ZH-CN_TOPIC_0000001920110433__asBool--)() 获取布尔类型数据。|
|int|[asInt](https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124#ZH-CN_TOPIC_0000001920110433__asInt--)() 获取整数类型数据。|
|java.util.HashMap<java.lang.String,[MonitorData](https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124)>|[asMap](https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124#ZH-CN_TOPIC_0000001920110433__asMap--)() 获取键值对类型数据。|
|java.lang.String|[asString](https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124#ZH-CN_TOPIC_0000001920110433__asString--)() 获取字符串类型数据。|

## Method Detail

### asBool

public boolean asBool()

获取布尔类型数据。

**Returns:**

布尔值

**Since:**

API level 0 (SDK 5.0.0.301)

### asInt

public int asInt()

获取整数类型数据。

**Returns:**

整数值

**Since:**

API level 0 (SDK 5.0.0.301)

### asString

public java.lang.String asString()

获取字符串类型数据。

**Returns:**

字符串

**Since:**

API level 0 (SDK 5.0.0.301)

### asMap

public java.util.HashMap<java.lang.String,[MonitorData](https://developer.huawei.com/consumer/cn/doc/connectivity-References/monitordata-0000001060779124)> asMap()

获取键值对类型数据。

**Returns:**

键值对

**Since:**

API level 0 (SDK 5.0.0.301)

