---
name: document/cn/HMSCore-References/ios-hmultipoint-0000001237317103
title: HMultiPoint
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmultipoint-0000001237317103
---

# HMultiPoint

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|@interface HMultiPoint : [HShape](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hshape-0000001237561851) <[HOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlay-0000001192237150)> 由多个点组成的虚基类，不能直接实例化，要使用其子类[HPolyline](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hpolyline-0000001192237152)、[HPolygon](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hpolygon-0000001192077192)来实例化。|

## Public Property Summary

|Qualifier and Type|Property name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|
|@property (nonatomic, readonly) [HMapPoint](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmappoint-0000001190568918)*|points 坐标点数组。|
|@property (nonatomic, readonly) NSUInteger|pointCount 坐标点个数。|

