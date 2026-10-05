---
name: document/cn/HiCar-References/device-service-change-0000001051637050
title: DeviceServiceChange
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/device-service-change-0000001051637050
---

# DeviceServiceChange

|Function|
|:----------------------------------------------------------------------------|
|void (*DeviceServiceChange)(const char* serviceId, uint32_t idLen, int state)|
|HiCar服务状态上报。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-----------------|:-----------------------------------------------------------------------------------------------------------------|
|*serviceId|char|手机侧虚拟服务ID。|
|idLen|uint32_t|ID长度。|
|state|int|设备事件类型，详见[HiCarEvent](https://developer.huawei.com/consumer/cn/doc/HiCar-References/hicar-event-0000001052556437)。|

