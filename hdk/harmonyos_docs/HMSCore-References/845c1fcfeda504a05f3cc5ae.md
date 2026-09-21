---
name: document/cn/HMSCore-References/flutter-plugin-groundoverlay-0000001208344754
title: GroundOverlay
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-groundoverlay-0000001208344754
---

# GroundOverlay

在地图上定义一个图片。

## Properties

|名称|类型|描述|
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
|groundOverlayId|[GroundOverlayId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-groundoverlayid-0000001208504728)|覆盖物唯一的ID。|
|bearing|double|覆盖物从正北顺时针旋转的角度。|
|clickable|bool|表示覆盖物是否可点击。|
|width|double|覆盖物的宽度，单位为米。|
|height|double|覆盖物的高度，单位为米。|
|imageDescriptor|[BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-bitmapdescriptor-0000001208024788)|覆盖物的图像。|
|position|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)?|覆盖物的位置。|
|bounds|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlngbounds-0000001208024790)?|覆盖物的边界。|
|anchor|Offset|覆盖物的锚点。|
|transparency|double|覆盖物的透明度。|
|visible|bool|表示覆盖物是否可见。如果覆盖物不可见，则不会绘制，其他所有状态均保留。|
|zIndex|double|覆盖物的Z-index。z-index表示覆盖物的叠加顺序。Z-index值较大的覆盖物将压盖Z-index较小的覆盖物。具有相同z-index的覆盖物以随机顺序相互压盖。|
|onClick|VoidCallback?|点击覆盖物时调用的函数。|

## Constructor Summary

|构造函数|描述|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
|[GroundOverlay({required GroundOverlayId groundOverlayId, required double width, required double height, required BitmapDescriptor imageDescriptor, double bearing, bool clickable, LatLng? position, LatLngBounds? bounds, Offset anchor, double transparency, bool visible, double zIndex})](#section2675mcpsimp)|创建一个GroundOverlay对象。|

## Constructors

### GroundOverlay

创建一个GroundOverlay对象。

|参数|类型|描述|
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
|groundOverlayId|[GroundOverlayId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-groundoverlayid-0000001208504728)|覆盖物唯一的ID。|
|bearing|double|覆盖物从正北顺时针旋转的角度。|
|clickable|bool|表示覆盖物是否可点击。|
|width|double|覆盖物的宽度，单位为米。|
|height|double|覆盖物的高度，单位为米。|
|imageDescriptor|[BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-bitmapdescriptor-0000001208024788)|覆盖物的图像。|
|position|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)?|覆盖物的位置。|
|bounds|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlngbounds-0000001208024790)?|覆盖物的边界。|
|anchor|Offset|覆盖物的锚点。|
|transparency|double|覆盖物的透明度。|
|visible|bool|表示覆盖物是否可见。如果覆盖物不可见，则不会绘制，其他所有状态均保留。|
|zIndex|double|覆盖物的Z-index。z-index表示覆盖物的叠加顺序。Z-index值较大的覆盖物将压盖Z-index较小的覆盖物。具有相同z-index的覆盖物以随机顺序相互压盖。|
|onClick|VoidCallback?|点击覆盖物时调用的函数。|

## Method Summary

|方法|返回类型|描述|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------|:----------------------------|
|[GroundOverlay.updateCopy({double? bearing, bool? clickable, double? width, double? height, BitmapDescriptor? imageDescriptor, LatLng? position, LatLngBounds? bounds, Offset? anchor, double? transparency, bool? visible, double? zIndex, VoidCallback? onClick})](#section2838mcpsimp)|**GroundOverlay**|复制已有的GroundOverlay对象并更新指定的属性。|
|[GroundOverlay.clone()](#ZH-CN_TOPIC_0000001208344754__section1044782764914)|**GroundOverlay**|克隆一个GroundOverlay对象。|

## Methods

### GroundOverlay.updateCopy

复制已有的GroundOverlay对象并更新指定的属性。

|参数|类型|描述|
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
|bearing|double?|覆盖物从正北顺时针旋转的角度。|
|clickable|bool?|指示覆盖物是否可点击。|
|width|double?|覆盖物的宽度，单位为米。|
|height|double?|覆盖物的高度，单位为米。|
|imageDescriptor|[BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-bitmapdescriptor-0000001208024788)|覆盖物的图像。|
|position|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlng-0000001252864733)?|覆盖物的位置。|
|bounds|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-latlngbounds-0000001208024790)?|覆盖物的边界。|
|anchor|Offset?|覆盖物的锚点。|
|transparency|double?|覆盖物的透明度。|
|visible|bool?|表示覆盖物是否可见。如果覆盖物不可见，则不会绘制，其他所有状态均保留。|
|zIndex|double?|覆盖物的Z-index。z-index表示覆盖物的叠加顺序。Z-index值较大的覆盖物将压盖Z-index较小的覆盖物。具有相同z-index的覆盖物以随机顺序相互压盖。|
|onClick|VoidCallback?|点击覆盖物时调用的函数。|

|返回类型|描述|
|:----------------|:---------------|
|**GroundOverlay**|GroundOverlay对象。|

调用示例：

```screen
// 定义一个GroundOverlay对象。
GroundOverlay groundOverlay; 
 
// 调用updateCopy方法。
groundOverlay = groundOverlay!.updateCopy(clickable: true);
```

### GroundOverlay.clone

克隆一个GroundOverlay对象。

|返回类型|描述|
|:----------------|:---------------|
|**GroundOverlay**|GroundOverlay对象。|

调用示例：

```screen
// 定义一个GroundOverlay对象。
GroundOverlay groundOverlay; 
GroundOverlay groundOverlay2; 
 
// 调用clone方法。
groundOverlay2 = groundOverlay!.clone();
```

