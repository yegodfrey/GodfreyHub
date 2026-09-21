---
name: document/cn/HMSCore-References/flutter-plugin-huaweimapcontroller-0000001208504720
title: HuaweiMapController
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimapcontroller-0000001208504720
---

# HuaweiMapController

HuaweiMap的地图控制器。

## Method Summary

|方法|返回类型|描述|
|:-------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|
|[clearTileCache(TileOverlay tileOverlay)](#ZH-CN_TOPIC_0000001208504720__section919365285111)|Future<void>|清除瓦片图层的缓存。|
|[startAnimationOnMarker(Marker marker)](#ZH-CN_TOPIC_0000001208504720__section9933213536)|Future<void>|启动标记动画。|
|[animateCamera(CameraUpdate cameraUpdate)](#ZH-CN_TOPIC_0000001208504720__section986519515542)|Future<void>|以动画模式更新相机位置。|
|[stopAnimation()](#ZH-CN_TOPIC_0000001208504720__section977115215517)|Future<void>|停止相机的当前动画。调用此方法时，相机立即停止移动并停留在当前位置。|
|[moveCamera(CameraUpdate cameraUpdate)](#ZH-CN_TOPIC_0000001208504720__section96891915105416)|Future<void>|更新相机位置。相机移动是瞬时完成的。|
|[setMapStyle(String mapStyle)](#ZH-CN_TOPIC_0000001208504720__section6890522135417)|Future<void>|设置地图样式。|
|[setLocation(LatLng latlng)](#ZH-CN_TOPIC_0000001208504720__section1237471665311)|Future<void>|设置位置源的位置。|
|[setLocationSource()](#ZH-CN_TOPIC_0000001208504720__section15379197536)|Future<void>|设置"我的位置"图层的位置源。|
|[deactivateLocationSource()](#ZH-CN_TOPIC_0000001208504720__section59719586532)|Future<void>|去激活位置源。|
|[getVisibleRegion()](#ZH-CN_TOPIC_0000001208504720__section12810113285416)|Future<[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlngbounds-0000001208024790)>|获取屏幕坐标与经纬度坐标转换后的可见区域。|
|[getScreenCoordinate(LatLng latLng)](#ZH-CN_TOPIC_0000001208504720__section829919383541)|Future<[ScreenCoordinate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-screencoordinate-0000001253024729)>|获取指定经纬度坐标对应的屏幕位置。屏幕上的位置以相对于地图左上角（而不是屏幕左上角）的屏幕像素（而不是显示像素）来指定。|
|[getLatLng(ScreenCoordinate screenCoordinate)](#ZH-CN_TOPIC_0000001208504720__section149234420549)|Future<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)>|获取屏幕上位置的经纬度。屏幕上的位置以相对于地图左上角（而不是屏幕左上角）的屏幕像素（而不是显示像素）来指定。|
|[showMarkerInfoWindow(MarkerId markerId)](#ZH-CN_TOPIC_0000001208504720__section64181498547)|Future<void>|显示标记的信息窗。|
|[hideMarkerInfoWindow(MarkerId markerId)](#ZH-CN_TOPIC_0000001208504720__section17576195418545)|Future<void>|隐藏标记的信息窗。该方法对于不可见的标记无效。|
|[isMarkerInfoWindowShown(MarkerId markerId)](#ZH-CN_TOPIC_0000001208504720__section128990175516)|Future<bool?>|检查当前是否显示了标记的信息窗。此方法不会考虑信息窗是否在屏幕上实际可见。|
|[isMarkerClusterable(MarkerId markerId)](#ZH-CN_TOPIC_0000001208504720__section46019614553)|Future<bool?>|检查标记是否可以聚合。|
|[getZoomLevel()](#ZH-CN_TOPIC_0000001208504720__section17277161135514)|Future<double?>|获取地图的缩放级别。|
|[takeSnapshot()](#ZH-CN_TOPIC_0000001208504720__section75761167556)|Future<Uint8List?>|拍摄地图的快照。|

## Methods

### clearTileCache

清除瓦片图层的缓存。该方法是异步的。

|参数|类型|描述|
|:----------|:-------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
|tileOverlay|[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-tileoverlay-0000001253144701)|[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-tileoverlay-0000001253144701)对象。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController和TileOverlay。
HuaweiMapController mapController; 
TileOverlay tileOverlay; 
 
// 调用clearTileCache接口。
await mapController.clearTileCache(tileOverlay);
```

### startAnimationOnMarker

启动标记动画。该方法是异步的。

|参数|类型|描述|
|:-----|:---------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------|
|marker|[Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)|[Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)对象。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController和一个带有动画的Marker对象。
HuaweiMapController mapController; 
Marker marker; 
 
// 调用startAnimationOnMarker接口。
await mapController.startAnimationOnMarker(marker!);
```

### animateCamera

以动画模式更新相机位置。该方法是异步的。

|参数|类型|描述|
|:-----------|:---------------------------------------------------------------------------------------------------------------------------|:------|
|cameraUpdate|[CameraUpdate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-cameraupdate-0000001253024727)|相机位置变更。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController和CameraUpdate对象。
HuaweiMapController mapController; 
CameraUpdate cameraUpdate; 
 
// 调用animateCamera接口。
await mapController.animateCamera(cameraUpdate);
```

### stopAnimation

停止相机的当前动画。调用此方法时，相机立即停止移动并停留在当前位置。

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用stopAnimation接口。
await mapController.stopAnimation();
```

### moveCamera

以瞬时模式更新相机位置。该方法是异步的。

|参数|类型|描述|
|:-----------|:---------------------------------------------------------------------------------------------------------------------------|:------|
|cameraUpdate|[CameraUpdate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-cameraupdate-0000001253024727)|相机位置变更。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController和CameraUpdate对象。
HuaweiMapController mapController; 
CameraUpdate cameraUpdate; 
 
// 调用moveCamera接口。
await mapController.moveCamera(cameraUpdate);
```

### setMapStyle

设置地图样式。该方法是异步的。

|参数|类型|描述|
|:-------|:-----|:------------|
|mapStyle|String|地图样式的JSON字符串。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用setMapStyle接口。 
await mapController.setMapStyle("YOUR_MAP_STYLE_AS_JSON");
```

### setLocation

设置位置源的位置。

|参数|类型|描述|
|:-----|:---------------------------------------------------------------------------------------------------------------|:----|
|latLng|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)|偏好位置。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用setLocation接口。
await mapController.setLocation(latLng);
```

### setLocationSource

设置"我的位置"图层的位置源。

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用setLocationSource接口。
await mapController.setLocationSource();
```

### deactivateLocationSource

去激活位置源。

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用deactivateLocationSource接口。
await mapController.deactivateLocationSource();
```

### getVisibleRegion

获取屏幕坐标与经纬度坐标转换后的可见区域。该方法是异步的。

|返回类型|描述|
|:-----------------------------------------------------------------------------------------------------------------------------------|:------------|
|Future<[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlngbounds-0000001208024790)>|包含可见区域的最小边界框。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用getVisibleRegion接口。
LatLngBounds bounds = await mapController.getVisibleRegion();
```

### getScreenCoordinate

获取指定经纬度坐标对应的屏幕位置。屏幕上的位置以相对于地图左上角（而不是屏幕左上角）的屏幕像素（而不是显示像素）来指定。该方法是异步的。

|参数|类型|描述|
|:-----|:---------------------------------------------------------------------------------------------------------------|:---------|
|latLng|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)|地图上位置的经纬度。|

|返回类型|描述|
|:-------------------------------------------------------------------------------------------------------------------------------------------|:---------------|
|Future<[ScreenCoordinate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-screencoordinate-0000001253024729)>|位置在屏幕上的坐标，单位为像素。|

调用示例：

```screen
// 定义HuaweiMapController和LatLng对象。
HuaweiMapController mapController; 
LatLng latLng; 
 
// 调用getScreenCoordinate接口。
ScreenCoordinate coordinate = await mapController.getScreenCoordinate(latLng);
```

### getLatLng

获取屏幕上位置的经纬度。屏幕上的位置以相对于地图左上角（而不是屏幕左上角）的屏幕像素（而不是显示像素）来指定。该方法是异步的。

|参数|类型|描述|
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------|:---------------|
|screenCoordinate|[ScreenCoordinate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-screencoordinate-0000001253024729)|位置在屏幕上的坐标，单位为像素。|

|返回类型|描述|
|:-----------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
|Future<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)>|包含对应经纬度的[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)对象。|

调用示例：

```screen
// 定义HuaweiMapController和ScreenCoordinate对象。
HuaweiMapController mapController; 
ScreenCoordinate screenCoordinate; 
 
// 调用getLatLng接口。
LatLng latLng = await mapController.getLatLng(screenCoordinate);
```

### showMarkerInfoWindow

显示标记的信息窗。该方法是异步的。

|参数|类型|描述|
|:-------|:-------------------------------------------------------------------------------------------------------------------|:----|
|markerId|[MarkerId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-markerid-0000001252864735)|标记ID。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController和一个带有信息窗的Marker对象。
HuaweiMapController mapController; 
Marker marker; 
 
// 调用showMarkerInfoWindow接口。
await mapController.showMarkerInfoWindow(marker.markerId);
```

### hideMarkerInfoWindow

隐藏标记的信息窗。此方法是异步的，且对于不可见标记无效。

|参数|类型|描述|
|:-------|:-------------------------------------------------------------------------------------------------------------------|:----|
|markerId|[MarkerId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-markerid-0000001252864735)|标记ID。|

|返回类型|描述|
|:-----------|:------------------|
|Future<void>|无返回值的执行任务的Future结果。|

调用示例：

```screen
// 定义HuaweiMapController和一个带有信息窗的Marker对象。
HuaweiMapController mapController; 
Marker marker; 
 
// 调用hideMarkerInfoWindow接口。
await mapController.hideMarkerInfoWindow(marker.markerId);
```

### isMarkerInfoWindowShown

检查当前是否显示标记的信息窗。此方法是异步的，且不会考虑信息窗是否在屏幕上实际可见。

|参数|类型|描述|
|:-------|:-------------------------------------------------------------------------------------------------------------------|:----|
|markerId|[MarkerId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-markerid-0000001252864735)|标记ID。|

|返回类型|描述|
|:------------|:------------------------------|
|Future<bool?>|如果当前显示标记的信息窗，则返回true；否则返回false。|

调用示例：

```screen
// 定义HuaweiMapController和一个带有信息窗的Marker对象。
HuaweiMapController mapController; 
Marker marker; 
 
// 调用isMarkerInfoWindowShown接口。
bool? status = await mapController.isMarkerInfoWindowShown(marker.markerId);
```

### isMarkerClusterable

检查标记是否可以聚合。该方法是异步的。

|参数|类型|描述|
|:-------|:-------------------------------------------------------------------------------------------------------------------|:----|
|markerId|[MarkerId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-markerid-0000001252864735)|标记ID。|

|返回类型|描述|
|:------------|:--------------------------|
|Future<bool?>|如果标记可以聚合，则返回true；否则返回false。|

调用示例：

```screen
// 定义HuaweiMapController和一个带有clusterable特性的Marker对象。
HuaweiMapController mapController; 
Marker marker; 
 
// 调用isMarkerClusterable接口。
bool? isClusterable = await mapController.isMarkerClusterable(marker.markerId);
```

### getZoomLevel

获取地图的缩放级别。该方法是异步的。

|返回类型|描述|
|:--------------|:----|
|Future<double?>|缩放级别。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用getZoomLevel接口。
double? zoomLevel = await mapController.getZoomLevel();
```

### takeSnapshot

拍摄地图的快照。该方法是异步的。

|返回类型|描述|
|:-----------------|:--------------|
|Future<Uint8List?>|图片的Uint8List数据。|

调用示例：

```screen
// 定义HuaweiMapController。
HuaweiMapController mapController; 
 
// 调用takeSnapshot接口。
Uint8List? imageData = await mapController.takeSnapshot();
```

