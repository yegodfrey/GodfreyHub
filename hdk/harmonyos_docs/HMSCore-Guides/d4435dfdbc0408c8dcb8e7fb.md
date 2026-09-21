---
name: document/cn/HMSCore-Guides/flutter-plugin-version-change-history-0000001252341509
title: 版本更新说明
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/flutter-plugin-version-change-history-0000001252341509
---

# 版本更新说明

## 6.0.1.304（2021-09-30）

* 华为地图SDK版本更新为6.0.1.304。
* 将animation.dart更名为hmsMarkerAnimation.dart。类名[HmsMarkerAnimation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-hmsmarkeranimation-0000001253024733)保持不变。

**新增特性**

* 增加地形图类型。
* 地图支持Lite模式。

## 历史版本

### 5.3.0.301（2021-09-01）

**热补丁**

修改了元数据包来支持Flutter和Dart版本。

### 5.3.0.300（2021-08-31）

* 华为地图SDK版本更新为5.3.0.300。

**重大更改**

* 已将库迁移到空安全（Null Safety）。
* 当refWidth值无效时，[Cap.customCapFromBitmap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-cap-0000001208344748#section8204mcpsimp)方法返回圆帽，不再返回null。

**错误修复**

* 修复了无法将初始填充值设置为华为地图实例的错误。
* 修复了无法通过指定边界来创建地图覆盖物的错误。

**新增特性**

* 新增[PointOfInterest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-pointofinterest-0000001253264699)类。
* 新增[Location](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-location-0000001208184794)类。
* 多边形[Polygon](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-polygon-0000001208024792)相关新特性：
  * 新增holes属性，用于在形状中创建孔洞。
  * 新增strokeJointType属性，用于自定义连接类型。
  * 新增strokePattern属性，用于自定义线条样式。
* 圆形[Circle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-circle-0000001208344752)相关的新特性：
  * 新增strokePattern属性，用于自定义线条样式。
* 信息窗[InfoWindow](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-infowindow-0000001208504722)相关的新特性：
  * 新增onLongClick回调，用于侦听信息窗长按事件。
  * 新增onClose回调，用于侦听信息窗关闭事件。
* 标记[Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)相关的新特性：
  * 新增onDragStart回调，用于侦听拖动开始事件。
  * 新增onDrag回调，用于监听拖动位置事件。
* [HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimap-0000001253024725)相关的新特性：
  * 新增onPoiClick回调，用于侦听兴趣点点击事件。
  * 新增allGestureEnabled属性，用于启用所有手势。
  * 新增isScrollGesturesEnabledDuringRotateOrZoom属性，用于开启旋转或缩放时的滚动手势。
  * 新增pointToCenter属性，用于设置固定屏幕中心点进行缩放。
  * 新增gestureScaleByMapCenter属性，用于指定是否可以设置固定屏幕中心点进行缩放。
  * 新增onMyLocationClick回调，用于侦听我的位置点击事件。
  * 新增onMyLocationButtonClick回调，用于侦听我的位置按钮点击事件。
  * 在HuaweiMapController中新增stopAnimation接口，用于停止相机动画。
  * 新增onCameraMoveCanceled回调，用于侦听相机移动取消事件。
  * onCameraMoveStarted回调新增返回相机移动原因。
  * 新增REASON_API_ANIMATION常量。
  * 新增REASON_DEVELOPER_ANIMATION常量。
  * 新增REASON_GESTURE常量。
  * 新增clusterIconDescriptor属性，用于自定义聚合标记。
  * 新增clusterMarkerColor属性，用于自定义聚合标记的颜色。
  * 新增clusterMarkerTextColor属性，用于自定义聚合标记的文本颜色。
  * 新增logoPosition属性，用于指定Petal Maps图标的位置。
  * 新增logoPadding属性，用于调整Petal Maps图标的位置。
  * 为logoPosition属性新增位置常量。
    * 新增LOWER_LEFT常量。
    * 新增LOWER_RIGHT常量。
    * 新增UPPER_LEFT常量。
    * 新增UPPER_RIGHT常量。
  * 新增styleId属性，用于设置华为地图实例的自定义样式。
  * 新增previewId属性，用于设置华为地图实例的自定义样式。
  * 在HuaweiMapController中新增setLocationSource接口，用于开启位置源特性。
  * 在HuaweiMapController中新增setLocation接口，用于将自定义位置指定为位置源。
  * 在HuaweiMapController中新增deactivateLocationSource接口，用于关闭位置源特性。

### 5.0.3.303（2021-03-31）

* 更新了HMSLogger。
* 修复了华为地图在低版本HMS Core设备上运行时崩溃的错误。
* 修复了点击华为地图实例上Legal按钮时应用崩溃的错误。
* 新增导致demo应用无法运行的缺失权限。

### 5.0.3.302（2020-11-30）

**新增特性**

* 华为地图SDK版本更新为5.0.3.302。
* 新增瓦片图层[TileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-tileoverlay-0000001253144701)以及如下瓦片类型：[Tile](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/tile-0000001208024794)、[UrlTile](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-urltile-0000001208184792)和[RepetitiveTile](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-repetitivetile-0000001253264697)。
* 新增地图覆盖物[GroundOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-groundoverlay-0000001208344754)。
* [Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)对象新增如下动画：
  * [HmsMarkerAlphaAnimation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-hmsmarkeralphaanimation-0000001208344756)
  * [HmsMarkerRotateAnimation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-hmsmarkerrotateanimation-0000001208504730)
  * [HmsMarkerScaleAnimation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-hmsmarkerscaleanimation-0000001253144703)
  * [HmsMarkerTranslateAnimation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-hmsmarkertranslateanimation-0000001252864739)
* 在[HuaweiMapController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimapcontroller-0000001208504720)中新增[startAnimationOnMarker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimapcontroller-0000001208504720#section6471mcpsimp)方法。
* [Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)对象中新增animationSet字段。
* [Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)对象新增标记聚合功能。
  * 在[HuaweiMapController](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimapcontroller-0000001208504720)中新增[isMarkerClusterable](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimapcontroller-0000001208504720#section6989mcpsimp)方法。
  * [HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimap-0000001253024725)中新增markersClusteringEnabled字段。
  * [Marker](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-marker-0000001253144699)对象中新增clusterable字段。
* 工具方法新增[HuaweiMapUtils](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimaputils-0000001208344746)类。
  * 新增HMS Logger，用于Map SDK的使用分析。
    * 新增[enableLogger](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimaputils-0000001208344746#section6184mcpsimp)方法。
    * 新增[disableLogger](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimaputils-0000001208344746#section6163mcpsimp)方法。
  * 新增[distanceCalculator](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/flutter-plugin-huaweimaputils-0000001208344746#section6204mcpsimp)方法。
* 修复了错误并进行了优化。

