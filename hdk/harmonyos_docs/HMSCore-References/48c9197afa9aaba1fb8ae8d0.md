---
name: document/cn/HMSCore-References/zoompoint-0000001212912474
title: ZoomPoint
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/zoompoint-0000001212912474
---

# ZoomPoint

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class ZoomPoint 比例尺缩放点对象，在调用[MapNaviListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavilistener-0000001212215832)类的[onAutoZoomUpdate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapnavilistener-0000001212215832#section15934380316)方法时会返回该类型的实例。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
|float|[getCircumference](#section89641722155617)() 环岛周长。|
|int|[getManeuverId](#section118498121711)() 机动点id。|
|[ManeuverType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/maneuvertype-0000001257368667)|[getManeuverType](#section1625517241520)() 机动点类型。|
|[NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432)|[getPoint](#section11894529115514)() 坐标点。|
|int|[getType](#section7603022114010)() 缩放类型。|

#### Public Methods

#### getCircumference

|Method|
|:--------------------------------------|
|public float getCircumference() 获取环岛周长。|

Returns  

|Type|Description|
|:----|:----------|
|float|环岛周长。|

#### getManeuverId

|Method|
|:----------------------------------|
|public int getManeuverId() 获取机动点标识。|

Returns  

|Type|Description|
|:---|:----------|
|int|机动点标识。|

#### getManeuverType

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------|
|public [ManeuverType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/maneuvertype-0000001257368667) getManeuverType() 获取机动点类型。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[ManeuverType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/maneuvertype-0000001257368667)|机动点类型。|

#### getPoint

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------|
|public [NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432) getPoint() 获取坐标点。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------|:----------|
|[NaviLatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navilatlng-0000001212527432)|坐标点。|

#### getType

|Method|
|:------------------------------|
|public String getType() 获取缩放类型。|

Returns  

|Type|Description|
|:-----|:----------|
|String|缩放类型。|

