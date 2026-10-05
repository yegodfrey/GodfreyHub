---
name: document/cn/HiCar-References/gps-sensor-0000001052968765
title: GPSSensor
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/gps-sensor-0000001052968765
---

# GPSSensor

|Function|
|:-------------------------------------------------------------------------------------|
|void (*GPSSensor)(char *sensor, int32_t len)|
|车身传感器数据回传函数，包括加速度、陀螺仪等。 RegisterGpsDataCallBack时开始持续上报，UnRegisterGpsDataCallBack时停止上报。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-----------------|:---------------------------------------------------|
|*sensor|char|传感器数据。例如 $GPACC,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>*<10>|
|len|int32_t|数据长度。|

