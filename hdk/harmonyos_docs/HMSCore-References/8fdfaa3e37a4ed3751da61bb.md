---
name: document/cn/HMSCore-References/ios-htexturepolylineview-0000001237721835
title: HTexturePolylineView
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-htexturepolylineview-0000001237721835
---

# HTexturePolylineView

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|@interface HTexturePolylineView : [HPolylineView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hpolylineview-0000001237677117) 纹理折线视图。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------------------------------------------------------------|
|void|[eraseFromStartToCurrentPoint:searchFrom:toColor:](#section114762417137) 路线擦除功能，将从起点开始到coordinate坐标的路线颜色置灰。|

## Public Property Summary

|Qualifier and Type|Property name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------|
|@property (nonatomic, assign, getter=isDrawSymbol) BOOL|drawSymbol 是否绘制箭头图标。|
|@property (nonatomic, copy) NSArray<[HSegmentColor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hsegmentcolor-0000001237721833) *> *|segmentColor 定义了各子线段的颜色。当HTextureLineDrawType_ColorLine有效，支持实时修改，目前仅支持15种不同的颜色对。|

## Public Methods

### eraseFromStartToCurrentPoint:searchFrom:toColor:

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)eraseFromStartToCurrentPoint:(CLLocationCoordinate2D)coordinate searchFrom:(int)pointIndex toColor:(BOOL)clearColor 路线擦除功能，将从起点开始到coordinate坐标的路线颜色置灰。当HTextureLineDrawType_SliceAsBackground和HTextureLineDrawType_ColorLine时有效。|

**Parameters**

|Name|Description|
|:---------|:---------------------|
|coordinate|被擦除的终点坐标。|
|pointIndex|终点所在子线段起点的下标。|
|clearColor|* YES，擦除（暂不支持） * NO，置灰|

