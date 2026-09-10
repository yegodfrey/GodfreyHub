---
name: document/cn/HMSCore-References/ios-hpolygon-0000001192077192
title: HPolygon
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hpolygon-0000001192077192
---

# HPolygon

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|@interface HPolygon : [HMultiPoint](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmultipoint-0000001237317103) 地球表面的多边形。多边形可以是凸面或凹面，它可以跨越180子午线并且可以具有未填充的孔。通常polygon是polygonView中持有的对象。|

#### Public Constructor Summary

|Constructor Name|
|:------------------------------------------------------------------------------|
|(id) - [initWithPoints:count:](#section146118694) 根据mapPoint数据生成多边形。|
|(id) - [initWithWithCoordinates:count:](#section114762417137) 根据经纬度坐标数据生成闭合多边形。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------------------------|
|HPolygon \*|[polygonWithCoordinates:count:](#section490110481519) 根据经纬度坐标数据生成闭合多边形。|
|HPolygon \*|[polygonWithPoints:count:](#section182218621011) 根据mapPoint数据生成多边形。|

#### Public Property Summary

|Qualifier and Type|Property name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------|
|@property(nonatomic, readonly) [HMapRect](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmaprect-0000001236897459)|boundingMapRect 区域外接矩形。此类用于定义一个由多个点组成的闭合多边形，点与点之间按顺序尾部相连，第一个点与最后一个点相连。|

#### Public Constructors

#### initWithPoints:count:

|Constructor|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (id)initWithPoints:([HMapPoint](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmappoint-0000001190568918) \*)points count:(NSUInteger)count 根据mapPoint数据生成多边形。|

Parameters  

|Name|Description|
|:-----|:-------------------------------------|
|points|mapPoint数据，points对应的内存会拷贝，调用者负责该内存的释放。|
|count|点的个数。|

Returns  

|Type|Description|
|:---|:----------|
|id|生成的多边形。|

#### initWithWithCoordinates:count:

|Constructor|
|:-------------------------------------------------------------------------------------------------------|
|-(id)initWithWithCoordinates:(CLLocationCoordinate2D \*)coords count:(NSUInteger)count 根据经纬度坐标数据生成闭合多边形。|

Parameters  

|Name|Description|
|:-----|:-----------------------------------|
|coords|经纬度坐标点数据，coords对应的内存会拷贝，调用者负责该内存的释放。|
|count|经纬度坐标点数组个数。|

Returns  

|Type|Description|
|:---|:----------|
|id|生成的多边形。|

#### Public Methods

#### polygonWithCoordinates:count:

|Method|
|:----------------------------------------------------------------------------------------------------------------|
|+ (HPolygon \*)polygonWithCoordinates:(CLLocationCoordinate2D \*)coords count:(NSUInteger)count 根据经纬度坐标数据生成闭合多边形。|

Parameters  

|Name|Description|
|:-----|:-----------------------------------|
|coords|经纬度坐标点数据，coords对应的内存会拷贝，调用者负责该内存的释放。|
|count|经纬度坐标点数组个数。|

Returns  

|Type|Description|
|:----------|:----------|
|HPolygon \*|生成的多边形。|

#### polygonWithPoints:count:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|+ (HPolygon \*)polygonWithPoints:([HMapPoint](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmappoint-0000001190568918) \*)points count:(NSUInteger)count 根据mapPoint数据生成多边形。|

Parameters  

|Name|Description|
|:-----|:-------------------------------------|
|points|mapPoint数据，points对应的内存会拷贝，调用者负责该内存的释放。|
|count|点的个数。|

Returns  

|Type|Description|
|:----------|:----------|
|HPolygon \*|生成的多边形。|

