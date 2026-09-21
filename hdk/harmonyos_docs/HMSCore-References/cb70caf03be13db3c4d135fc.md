---
name: document/cn/HMSCore-References/harmonyos-model-overview-0000001101512564
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-model-overview-0000001101512564
---

# Overview

地图服务SDK的模型类。

## Interface Summary

|Interface|Description|
|:----------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|[TileProvider](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileprovider-0000001206790328)|为[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlay-0000001207110294)提供瓦片图像。 调用这个接口的方法可能会存在多线程，所以实现时注意线程安全。|

## Class Summary

|Class|Description|
|:----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[CameraPosition](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-cameraposition-0000001101552568)|一个封装了相机所有属性的类。|
|[CameraUpdateParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-cameraupdateparam-0000001152341382)|用于设置相机状态的参数。|
|[Circle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-circle-0000001101152764)|地图上的圆对象。|
|[CircleOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-circleoptions-0000001148112533)|用于设置[Circle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-circle-0000001101152764)属性的类。|
|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-latlng-0000001148112535)|表示经纬度的类，单位：度。|
|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-latlngbounds-0000001101312590)|表示由一对经纬度定义的矩形区域。|
|[Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-marker-0000001101552572)|地图上指定位置的标记对象。|
|[MarkerOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-markeroptions-0000001101512570)|用于设置[Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-marker-0000001101552572)属性的类。|
|[Point](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-point-0000001149809211)|坐标类。|
|[PointOfInterest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-pointofinterest-0000001251807397)|地图上的兴趣点对象。|
|[Polygon](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-polygon-0000001148112537)|地图上的多边形对象。|
|[PolygonOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-polygonoptions-0000001101312592)|用于设置[Polygon](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-polygon-0000001148112537)属性的类。|
|[Polyline](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-polyline-0000001147992569)|地图上的折线对象。|
|[PolylineOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-polylineoptions-0000001147912411)|用于设置[Polyline](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-polyline-0000001147992569)属性的类。|
|[Tile](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tile-0000001206950318)|瓦片，组成[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlay-0000001207110294)的最小单位。|
|[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlay-0000001207110294)|地图上瓦片图层的相关类。|
|[TileOverlayOptions](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlayoptions-0000001207270268)|用于设置[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlay-0000001207110294)属性的类。|
|[UrlTileProvider](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-urltileprovider-0000001252230247)|瓦片图层[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlay-0000001207110294)的提供者，需要一个URL指向图像。|
|[VisibleRegion](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-visibleregion-0000001206767440)|[VisibleRegion](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-visibleregion-0000001206767440)实现了Parcelable。它包含四个点，这四个点定义了地图相机的四边形可视区域。|

