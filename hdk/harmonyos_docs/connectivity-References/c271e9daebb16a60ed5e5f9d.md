---
name: document/cn/connectivity-References/virtual-sensor-data-0000001052890588
title: VirtualSensorData
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/virtual-sensor-data-0000001052890588
---

# VirtualSensorData

|Class Info|
|:-------------------------------------------------------------------------------------|
|public class VirtualSensorData 该类为虚拟sensor的数据定义类，定义了虚拟sensor的数据字段，包括虚拟sensor、数据以及时间戳等。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------|
|float[]|[getValues](#section142241816195216)() 获取传感器的数据。|
|VirtualSensor|[getSensor](#section17951630115216)() 获取传感器对象。|
|int|[getAccuracy](#section11832538125217)() 获取传感器数据的精度。|
|long|[getTimestamp](#section1414384675220)() 获取数据的时间戳。|

## Public Methods

### getValues

|Method|
|:-----------------------------------|
|public float[] getValues() 获取传感器的数据。|

**Return**

|Type|Description|
|:------|:----------|
|float[]|传感器数据。|

### getSensor

|Method|
|:------------------------------------------|
|public VirtualSensor getSensor() 获取虚拟传感器对象。|

**Return**

|Type|Description|
|:------------|:----------|
|VirtualSensor|传感器对象。|

### getAccuracy

|Method|
|:-----------------------------------|
|public int getAccuracy() 获取传感器数据的精度。|

**Return**

|Type|Description|
|:---|:----------|
|int|传感器数据的精度。|

### getTimestamp

|Method|
|:-----------------------------------|
|public long getTimestamp() 获取数据的时间戳。|

**Return**

|Type|Description|
|:---|:----------|
|long|数据的时间戳。|

