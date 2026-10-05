---
name: document/cn/HiCar-References/connect-gps-service-0000001058357883
title: connectGpsService
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-References/connect-gps-service-0000001058357883
---

# connectGpsService

|Function|
|:--------------------------------------------------------------------------------------------------|
|void connectGpsService(Context context, ServiceConnectCallback callback)|
|绑定GPS数据采集Service，绑定成功后调用ServiceConnectCallback的onServiceConnected方法，异常断开后调用onServiceDisconnected方法。|

**Parameters**

|**Parameter name**|**Parameter type**|Parameter desc|
|:-----------------|:---------------------|:-------------|
|context|Context|上下文|
|callback|ServiceConnectCallback|绑定成功或断开时回调函数。|

