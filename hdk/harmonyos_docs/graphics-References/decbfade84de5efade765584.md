---
name: document/cn/graphics-References/cloud_service_event-0000001151922480
title: CloudServiceEvent
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/cloud_service_event-0000001151922480
---

# CloudServiceEvent

|Class Info|
|:----------------------------------------------------------------------------|
|public class CloudServiceEvent extends EventObject 云服务状态事件类，适用于2D云图像和3D云物体识别。|

## Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [CloudServiceEvent](#section159488201297)(Object source, [CloudServiceState](https://developer.huawei.com/consumer/cn/doc/graphics-References/cloud_service_state-0000001113700986) cloudServiceState) 构造云服务监听事件。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
|[CloudServiceState](https://developer.huawei.com/consumer/cn/doc/graphics-References/cloud_service_state-0000001113700986)|[getCloudServiceState](#section1429382810409)() 获取云服务状态。|

## Public Constructors

### CloudServiceEvent

|Constructor|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CloudServiceEvent(Object source, [CloudServiceState](https://developer.huawei.com/consumer/cn/doc/graphics-References/cloud_service_state-0000001113700986) cloudServiceState) 构造云服务监听事件。|

**Parameters**

|Name|Description|
|:----------------|:----------|
|source|事件源。|
|cloudServiceState|云服务状态。|

## Public Methods

### getCloudServiceState

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CloudServiceState getCloudServiceState() 获取云服务状态。状态值具体请参见[CloudServiceState](https://developer.huawei.com/consumer/cn/doc/graphics-References/cloud_service_state-0000001113700986)枚举类。|

**Returns**

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------|:----------|
|[CloudServiceState](https://developer.huawei.com/consumer/cn/doc/graphics-References/cloud_service_state-0000001113700986)|云服务状态。|

