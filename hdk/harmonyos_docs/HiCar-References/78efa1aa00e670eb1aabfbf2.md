---
name: document/cn/HiCar-References/on-data-receive-0000001057607421
title: onDataReceive
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/on-data-receive-0000001057607421
---

# onDataReceive

|Function|
|:-------------------------------------------------------------|
|void onDataReceive(string deviceId, int dataType, byte[] data)|
|HiCar SDK接收到远端设备发来的数据，通过此接口回调给车机应用。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:-----------------|:------------------------------------------------------------------------|
|deviceId|string|远端设备标识。|
|dataType|int|数据类型如下：HiCar SDK收到的数据类型范围为500-599，数据类型由HiCar定义，车机应用根据数据类型进行处理，该类型后续会不断扩展。|
|data|byte[]|接收到的数据内容。|

