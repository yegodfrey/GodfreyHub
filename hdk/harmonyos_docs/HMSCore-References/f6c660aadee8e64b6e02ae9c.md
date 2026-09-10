---
name: document/cn/HMSCore-References/milestone-0000001258444141
title: Milestone
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/milestone-0000001258444141
---

# Milestone

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class Milestone 里程碑对象，路线的里程碑信息列表存储在路线规划结果的实体类[MapNaviPath](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavipath-0000001257187269)中，通过调用[getMilestoneList](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavipath-0000001257187269#section76905376466)()获取。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
|int|[getDistance](#section14934056164)() 获取当前里程碑距离起点的距离。|
|[UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150)|[getUnit](#section208664264506)() 获取距离单位。|
|[NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432)|[getCoordinate](#section97531714175613)() 获取里程碑的坐标位置。|

#### Public Methods

#### getDistance

|Method|
|:----------------------------------------|
|public int getDistance(); 获取当前里程碑距离起点的距离。|

Returns  

|Type|Description|
|:---|:-----------|
|int|里程碑距离起点的距离值。|

<br />

#### getUnit

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------|
|public [UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150) getUnit(); 获取距离值的单位。|

Returns  

|Type|Description|
|:----------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
|[UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150)|距离单位的枚举值，详见[UnitEnum](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/unitenum-0000001212736150)。|

<br />

#### getCoordinate

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public [NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432) getCoordinate(); 获取里程碑的经纬度坐标。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------|
|[NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432)|经纬度坐标的实体类，详见[NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432)。|

