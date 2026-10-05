---
name: document/cn/HMS-References/hms-map-latlngboundsb
title: LatLngBounds.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-latlngboundsb
source: portal
---

**public static final class LatLngBounds.Builder**  
  
LatLngBounds.Builder是[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)的内部接口，包含了build()、include([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) point)两个方法。

## Public Fields

无

## Constructor

无

## Public Method Summary

Return type| Method name  
---|---  
[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)| build()  
LatLngBounds.Builder| include([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) point)  
  
## Public Methods

Method  
---  
public LatLngBounds build()  
用户调用此API可以构建一个[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)对象对象。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)| LatLngBounds对象。  
  
  
**Exception：**  


Exception type| Scenario  
---|---  
IllegalStateException| 当[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)没有包含任何点坐标。  
Method  
---  
public LatLngBounds.Builder include([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) point)  
开发者调用此API可以获得一个以最小方式扩展并包含指定位置的[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)对象。  
  
  
**Parameters：**  


Parameter name| Parameter desc  
---|---  
point| 需要被包含的位置。  
  
  
**Return：**  


Return type| Parameter desc  
---|---  
LatLngBounds.Builder| 包含指定位置的[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)对象。
