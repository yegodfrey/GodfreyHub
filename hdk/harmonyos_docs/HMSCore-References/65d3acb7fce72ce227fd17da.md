---
name: document/cn/HMSCore-References/ios-hmapview-0000001191938980
title: HMapView
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapview-0000001191938980
---

# HMapView

|Class Info|
|:------------------------------------------------------------------------|
|@interface HMapView : UIView HMapView是适用于地图服务SDK的主要功能入口类，与地图有关的所有方法从此处接入。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------|
|void|[addAnnotation:](#section88241045217) 向地图添加标注点。|
|void|[addAnnotations:](#section56964652115) 向地图添加一组标注点。|
|void|[addOverlay:](#section6949161362113) 向地图添加Overlay。|
|void|[addOverlays:](#section1530791514212) 向地图添加一组Overlay。|
|void|[deselectAnnotation:animated:](#section1685151217212) 取消指定的标注点的选中状态。|
|void|[removeAnnotation:](#section052997182119) 移除标注点。|
|void|[removeAnnotations:](#section3564198112110) 移除一组标注点。|
|void|[removeOverlay:](#section240201612217) 移除Overlay。|
|void|[removeOverlays:](#section14458151718214) 移除一组Overlay。|
|void|[requestTempPrecisedLocation:purposeKey:completion:](#section8643174620282) 申请临时精确定位权限。|
|void|[selectAnnotation:animated:](#section1573641172114) 选中指定的标注点。|
|void|[setCenterCoordinate:animated:](#section5980101620158) 设置中心点经纬度。|
|void|[setCenterOffset:](#section392918313121) 设置中心点偏移值(x, y)。|
|void|[setCompassOffset:](#section2939195581116) 设置指南针基于默认位置的偏移，右下为正。|
|void|[setForeignLanguage:](#section15410181131211) 指定底图文字的首选语言。|
|void|[setLogoMargin:anchor:](#section1111317410152) 设置地图Logo位置。|
|void|[setLogoScale:](#section107304146158) 设置地图Logo大小。|
|BOOL|[setMapStyle:](#section114762417137) 设置地图样式（本地样式文件）。|
|BOOL|[setMapStyleID:](#section15200135804918) 设置样式ID改变地图样式。|
|BOOL|[setMapPreviewID:](#section1516709507) 设置预览ID改变地图样式。|
|void|[setMinZoomLevel:maxZoomLevel:](#section17902131717155) 设置最小最大缩放级别。|
|void|[setOverlooking:animated:](#section953116207152) 设置地图的倾斜角度。|
|void|[setRegion:animated:](#section1465101182118) 设定当前地图的region。|
|void|[setRegion:edgePadding:animated:](#section156441638211) 设定当前地图的region。|
|void|[setRotation:animated:](#section97311319181514) 设置旋转角度。|
|void|[setScaleViewOffset:](#section1320116141512) 设置地图比例尺偏移。|
|void|[setUserLocationHidden:](#section11801645172815) 在地图中隐藏位置图标。|
|void|[setUserTrackingMode:animated:](#section992813445288) 设置追踪用户位置的模式。|
|double|[setVisibleBounds:](#section65713598203) 根据经纬度边框，获取地图对应的缩放层级。|
|double|[setVisibleBounds:width:height:edgePadding:](#section1667364452012) 设置当前地图可见范围。|
|void|[setVisibleMapRect:animated:](#section73979216152) 设置当前地图可见范围的mapRect。|
|void|[setVisibleMapRect:edgePadding:animated:](#section829715222150) 设置当前地图可见范围的mapRect。|
|void|[setZoomLevel:animated:](#section1683031841520) 设置缩放级别。|
|[HAnnotationView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotationview-0000001188798392) *|[viewForAnnotation:](#section1956549192114) 查找指定标注点对应的视图，如果该标注点尚未显示，返回nil。|
|[HOverlayView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlayview-0000001237437097) *|[viewForOverlay:](#section101694416289) 返回指定overlay对象的OverlayView。|

## Public Property Summary

|Qualifier and Type|Property name and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|
|@property(nonatomic, readonly) CLAccuracyAuthorization|accuracyAuthorization 定位精度权限状态(API_AVAILABLE(ios(14))。|
|@property(assign, nonatomic) BOOL|allowsBackgroundLocationUpdates 以上是否允许后台定位，ios9以上可用。请参考CLLocationManager.allowsBackgroundLocationUpdates。|
|@property(nonatomic, readonly) NSArray *|annotations 当前地图视图的已经添加的标注点数组。|
|@property(nonatomic, readonly) CLAuthorizationStatus|authorizationStatus 定位权限状态(API_AVAILABLE(ios(14))。|
|@property (nonatomic, assign) CLLocationCoordinate2D|centerCoordinate 中心点经纬度。|
|@property (nonatomic, weak) id<[HMapViewDelegate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923)>|delegate 代理对象。|
|@property (nonatomic) CLLocationAccuracy|desiredAccuracy 设定定位精度，默认kCLLocationAccuracyBest。|
|@property (nonatomic) CLLocationDegrees|headingFilter 设定最小更新角度。默认1度，设定为kCLHeadingFilterNone，会提示任何角度改变。|
|@property (nonatomic, assign, getter = isKeepCenterDuringZoom) BOOL|keepCenterDuringZoom 缩放时保持中心点，默认YES。|
|@property (nonatomic, assign, getter=isLocationButtonEnabled) BOOL|locationButtonEnabled 我的位置按钮是否可用，默认YES。|
|@property (nonatomic, assign, getter=isLongGuestureEnabled) BOOL|longGuestureEnabled 是否支持长按手势，默认为YES。|
|@property (nonatomic, assign) HMapType|mapType 显示的地图类型。|
|@property (nonatomic, readonly) CGFloat|maxZoomLevel 最大缩放级别，默认maxZoomLevel=20。|
|@property (nonatomic, readonly) CGFloat|minZoomLevel 最小缩放级别，默认minZoomLevel=3。|
|@property (nonatomic, readonly) NSArray *|overlays 当前地图视图中已经添加的Overlay数组。|
|@property (nonatomic, assign) CGFloat|overlooking 倾斜角度，取值范围：[0, 75]，单位：角度。|
|@property (nonatomic, assign, getter=isOverlookingEnabled) BOOL|overlookingEnabled 是否启用倾斜手势，默认YES。|
|@property(assign, nonatomic) BOOL|pausesLocationUpdatesAutomatically 指定定位是否会被系统自动暂停，默认YES。|
|@property (nonatomic) [HCoordinateRegion](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hcoordinateregion-0000001235968895)|region 当前地图的经纬度范围。|
|@property (nonatomic, assign, getter=isRotateEnabled) BOOL|rotateEnabled 是否支持旋转，默认YES。|
|@property (nonatomic, assign) CGFloat|rotation 旋转角度，正角度向右转，单位：角度。|
|@property(nonatomic, getter=isScrollEnabled) BOOL|scrollEnabled 是否启用滚动手势，默认YES。|
|@property (nonatomic, readonly) NSArray<id<[HAnnotation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotation-0000001234350389)>> *|selectedAnnotations 当前选中的标注点annotations。|
|@property (nonatomic) BOOL|shows3DBuildings 是否显示3D建筑图层，默认YES。|
|@property (nonatomic) BOOL|showsCompass 是否显示指南针，默认NO。|
|@property (nonatomic) BOOL|showsLocationButton 是否显示我的位置按钮，默认NO。|
|@property (nonatomic) BOOL|showsScale 是否显示比例尺，默认YES。|
|@property (nonatomic, assign) BOOL|showsTraffic 是否开启路况图层，默认NO。|
|@property (nonatomic, assign) BOOL|showsUserLocation 是否开启定位并展示位置图标，默认NO。|
|@property (nonatomic) BOOL|showsZoomControl 是否显示缩放控件，默认NO。|
|@property (nonatomic, readonly) [HUserLocation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-huserlocation-0000001237481813) *|userLocation 当前位置信息。|
|@property (nonatomic, readonly, getter=isUserLocationVisible) BOOL|userLocationVisible 当前位置在地图中是否可见。|
|@property (nonatomic) [HUserTrackingMode](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-husertrackingmode-0000001205569558)|userTrackingMode 定位用户位置的模式。|
|@property (nonatomic) [HMapRect](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmaprect-0000001236897459)|visibleMapRect 当前地图可见范围。|
|@property (nonatomic, assign, getter=isZoomControlEnabled) BOOL|zoomControlEnabled 缩放控件是否可用，默认YES。|
|@property(nonatomic, getter=isZoomEnabled) BOOL|zoomEnabled 设置是否允许缩放，默认YES。|
|@property (nonatomic, assign) CGFloat|zoomLevel 地图缩放级别。|

## Public Methods

### addAnnotation:

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)addAnnotation:(id <[HAnnotation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotation-0000001234350389)>)annotation 向地图添加标注点，需要实现[HMapViewDelegate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923)的[mapView:viewForAnnotation:](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923#section79865191491)函数来生成标注对应的视图。|

**Parameters**

|Name|Description|
|:---------|:----------|
|annotation|要添加的标注点。|

### addAnnotations:

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)addAnnotations:(NSArray *)annotations 向地图添加一组标注点，需要实现[HMapViewDelegate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923)的[mapView:viewForAnnotation:](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923#section79865191491)函数来生成标注对应的视图。|

**Parameters**

|Name|Description|
|:----------|:----------|
|annotations|要添加的标注点数组。|

### addOverlay:

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)addOverlay:(id <[HOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlay-0000001192237150)>)overlay 向地图添加Overlay，需要实现[HMapViewDelegate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923)的[mapView:viewForOverlay:](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923#section117015261091)函数来生成标注对应的视图。|

**Parameters**

|Name|Description|
|:------|:-----------|
|overlay|要添加的overlay。|

### addOverlays:

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)addOverlays:(NSArray<id <[HOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlay-0000001192237150)>> *)overlays 向地图添加一组Overlay，需要实现[HMapViewDelegate](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923)的[mapView:viewForOverlay:](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmapviewdelegate-0000001236738923#section117015261091)函数来生成标注对应的视图。|

**Parameters**

|Name|Description|
|:-------|:-------------|
|overlays|要添加的overlay列表。|

### deselectAnnotation:animated:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)deselectAnnotation:(id <[HAnnotation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotation-0000001234350389)>)annotation animated:(BOOL)animated 取消指定的标注点的选中状态。|

**Parameters**

|Name|Description|
|:---------|:------------------------|
|annotation|指定的标注点。|
|animated|是否支持动画。 * YES：支持 * NO：不支持|

### removeAnnotation:

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)removeAnnotation:(id <[HAnnotation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotation-0000001234350389)>)annotation 移除标注点。|

**Parameters**

|Name|Description|
|:---------|:----------|
|annotation|要移除的标注点。|

### removeAnnotations:

|Method|
|:--------------------------------------------------------|
|- (void)removeAnnotations:(NSArray *)annotations 移除一组标注点。|

**Parameters**

|Name|Description|
|:----------|:----------|
|annotations|要移除的标注点数组。|

### removeOverlay:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)removeOverlay:(id <[HOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlay-0000001192237150)>)overlay 移除Overlay。|

**Parameters**

|Name|Description|
|:------|:-----------|
|overlay|要移除的overlay。|

### removeOverlays:

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)removeOverlays:(NSArray<id <[HOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlay-0000001192237150)>> *)overlays 移除一组Overlay。|

**Parameters**

|Name|Description|
|:-------|:-------------|
|overlays|要移除的overlay列表。|

### requestTempPrecisedLocation:purposeKey:completion:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)requestTempPrecisedLocation:(HMapView *)mapView purposeKey:(NSString*)key completion:(void(^)(NSError * error))completion API_AVAILABLE(ios(14)) 申请临时精确定位权限。|

**Parameters**

|Name|Description|
|:---------|:--------------------------------------------------------------|
|mapView|地图对象。|
|key|info.plist中NSLocationTemporaryUsageDescriptionDictionary设置的key。|
|completion|完成回调。|

### selectAnnotation:animated:

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)selectAnnotation:(id <[HAnnotation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotation-0000001234350389)>)annotation animated:(BOOL)animated 选中指定的标注点。|

**Parameters**

|Name|Description|
|:---------|:------------------------|
|annotation|指定的标注点。|
|animated|是否支持动画。 * YES：支持 * NO：不支持|

### setCenterCoordinate:animated:

|Method|
|:-----------------------------------------------------------------------------------------------|
|- (void)setCenterCoordinate:(CLLocationCoordinate2D)coordinate animated:(BOOL)animated 设置中心点经纬度。|

**Parameters**

|Name|Description|
|:---------|:------------------------|
|coordinate|中心点经纬度。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setCenterOffset:

|Method|
|:------------------------------------------------------|
|- (void)setCenterOffset:(CGPoint)offset 设置中心点偏移值(x, y)。|

**Parameters**

|Name|Description|
|:-----|:---------------------------------------------------------------------|
|offset|中心点偏移值(x, y)，正数向右或向下偏移，负数向左或向上偏移。 取值范围：(-0.5～0.5)，基于默认中心点(0.5, 0.5)偏移。|

### setCompassOffset:

|Method|
|:------------------------------------------------------------|
|- (void)setCompassOffset:(CGPoint)offset 设置指南针基于默认位置的偏移，右下为正。|

**Parameters**

|Name|Description|
|:-----|:-----------------|
|offset|指南针基于默认位置的偏移，右下为正。|

### setForeignLanguage:

|Method|
|:-----------------------------------------------------------------|
|- (void)setForeignLanguage:(NSString*)language 指定底图文字的首选语言，默认采用英文。|

**Parameters**

|Name|Description|
|:-------|:----------|
|language|指定的语言。|

### setLogoMargin:anchor:

|Method|
|:------------------------------------------------------------------------------|
|- (void)setLogoMargin:(CGPoint)margin anchor:(HMapLogoAnchor)anchor 设置地图Logo位置。|

**Parameters**

|Name|Description|
|:-----|:------------------------------------|
|margin|基于指定锚点（近边之间）的边距长度值。单位：Point，默认(6, 3)。|
|anchor|基准锚点。|

### setLogoScale:

|Method|
|:----------------------------------------------|
|- (void)setLogoScale:(CGFloat)scale 设置地图Logo大小。|

**Parameters**

|Name|Description|
|:----|:------------------------------|
|scale|地图Logo大小。取值范围：[0.7, 1.3]，默认1.0。|

### setMapStyle:

|Method|
|:-----------------------------------------------------|
|- (BOOL)setMapStyle:(NSString*)stylePath 设置地图样式（本地文件）。|

**Parameters**

|Name|Description|
|:--------|:----------|
|stylePath|资源文件的路径。|

**Return** **s**

|**Type**|**Description**|
|:-------|:---------------------|
|BOOL|是否成功。 * YES：成功 * NO：失败|

### setMapStyleID:

|Method|
|:-----------------------------------------------------|
|- (BOOL)setMapStyleID:(NSString*)styleID 设置样式ID改变地图样式。|

**Parameters**

|Name|Description|
|:------|:--------------------------------------------------------------------------------------------------|
|styleID|在[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)官网配置的自定义样式列表中的样式ID。|

**Return** **s**

|**Type**|**Description**|
|:-------|:---------------------|
|BOOL|是否成功。 * YES：成功 * NO：失败|

### setMapPreviewID:

|Method|
|:---------------------------------------------------------|
|- (BOOL)setMapPreviewID:(NSString*)previewID 设置预览ID改变地图样式。|

**Parameters**

|Name|Description|
|:--------|:---------------------------------------------------------------------------------------------------|
|previewID|在[Petal Maps Studio](https://developer.petalmaps.com/console/studio/StyleEditor)云平台配置的自定义样式列表中的预览ID。|

**Return** **s**

|**Type**|**Description**|
|:-------|:---------------------|
|BOOL|是否成功。 * YES：成功 * NO：失败|

### setMinZoomLevel:maxZoomLevel:

|Method|
|:--------------------------------------------------------------------------------------------------------|
|- (void)setMinZoomLevel:(CGFloat)minZoomLevel maxZoomLevel:(CGFloat)maxZoomLevel 设置最小最大缩放级别，取值范围：[3, 20]。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|minZoomLevel|最小缩放级别。|
|maxZoomLevel|最大缩放级别。|

### setOverlooking:animated:

|Method|
|:-----------------------------------------------------------------------------|
|- (void)setOverlooking:(CGFloat)overlooking animated:(BOOL)animated 设置地图的倾斜角度。|

**Parameters**

|Name|Description|
|:----------|:------------------------|
|overlooking|倾斜角度，取值范围：[0, 75]，单位：角度。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setRegion:animated:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)setRegion:([HCoordinateRegion](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hcoordinateregion-0000001235968895))region animated:(BOOL)animated 设定当前地图的region。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|region|要设定的地图范围，用经纬度的方式表示。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setRegion:edgePadding:animated:

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)setRegion:([HCoordinateRegion](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hcoordinateregion-0000001235968895))region edgePadding:(UIEdgeInsets)insets animated:(BOOL)animated 设定当前地图的region。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|region|要设定的地图范围，用经纬度的方式表示。|
|insets|要嵌入的边界。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setRotation:animated:

|Method|
|:--------------------------------------------------------------------|
|- (void)setRotation:(CGFloat)rotation animated:(BOOL)animated 设置旋转角度。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|rotation|旋转角度，正角度向右转，单位：角度。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setScaleViewOffset:

|Method|
|:----------------------------------------------------|
|- (void)setScaleViewOffset:(CGPoint)offset 设置地图比例尺偏移。|

**Parameters**

|Name|Description|
|:-----|:----------------------------------|
|offset|比例尺的偏移量。如果offset为CGPointZero则为默认位置。|

### setUserLocationHidden:

|Method|
|:-----------------------------------------------------|
|- (void)setUserLocationHidden:(BOOL)hidden 在地图中隐藏位置图标。|

**Parameters**

|Name|Description|
|:-----|:----------------------|
|hidden|是否隐藏。 * YES：隐藏 * NO：不隐藏|

### setUserTrackingMode:animated:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)setUserTrackingMode:([HUserTrackingMode](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-husertrackingmode-0000001205569558))mode animated:(BOOL)animated 设置追踪用户位置的模式。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|mode|要使用的模式。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setVisibleBounds:

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (double)setVisibleBounds:([HCoordinateBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hcoordinatebounds-0000001190537712))bounds 根据经纬度边框，获取地图对应的缩放层级。|

**Parameters**

|Name|Description|
|:-----|:----------|
|bounds|目标bounds。|

**Return** **s**

|**Type**|**Description**|
|:-------|:--------------|
|double|最终地图需要缩放的级别。|

### setVisibleBounds:width:height:edgePadding:

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (double)setVisibleBounds:([HCoordinateBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hcoordinatebounds-0000001190537712))bounds width:(double)width height:(double)height edgePadding:(UIEdgeInsets)insets 设置当前地图可见范围。|

**Parameters**

|Name|Description|
|:-----|:-----------------|
|bounds|目标bounds。|
|width|经纬度边框在屏幕上的宽度。|
|height|经纬度边框在屏幕上的高度。|
|insets|左右顶底四侧实际经纬度与边框的距离。|

**Return** **s**

|**Type**|**Description**|
|:-------|:--------------|
|double|最终地图需要缩放的级别。|

### setVisibleMapRect:animated:

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)setVisibleMapRect:([HMapRect](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmaprect-0000001236897459))mapRect animated:(BOOL)animated 设置当前地图可见范围的mapRect。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|mapRect|目标mapRect。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setVisibleMapRect:edgePadding:animated:

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- (void)setVisibleMapRect:([HMapRect](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hmaprect-0000001236897459))mapRect edgePadding:(UIEdgeInsets)insets animated:(BOOL)animated 设置当前地图可见范围的mapRect。|

**Parameters**

|Name|Description|
|:-------|:------------------------|
|mapRect|目标mapRect。|
|insets|要嵌入的边界。|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### setZoomLevel:animated:

|Method|
|:----------------------------------------------------------------------|
|- (void)setZoomLevel:(CGFloat)zoomLevel animated:(BOOL)animated 设置缩放级别。|

**Parameters**

|Name|Description|
|:--------|:------------------------|
|zoomLevel|缩放级别|
|animated|是否开启动画。 * YES：开启 * NO：不开启|

### viewForAnnotation:

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- ([HAnnotationView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotationview-0000001188798392) *)viewForAnnotation:(id <[HAnnotation](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotation-0000001234350389)>)annotation 查找指定标注点对应的视图，如果该标注点尚未显示，返回nil。|

**Parameters**

|Name|Description|
|:---------|:----------|
|annotation|指定的标注点。|

**Return** **s**

|**Type**|**Description**|
|:------------------------------------------------------------------------------------------------------------------------|:--------------|
|[HAnnotationView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hannotationview-0000001188798392) *|指定标注点对应的视图。|

### viewForOverlay:

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|- ([HOverlayView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlayview-0000001237437097) *)viewForOverlay:(id <[HOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlay-0000001192237150)>)overlay 返回指定overlay对象的OverlayView。|

**Parameters**

|Name|Description|
|:------|:-----------|
|overlay|待查询的overlay。|

**Return** **s**

|**Type**|**Description**|
|:------------------------------------------------------------------------------------------------------------------|:--------------|
|[HOverlayView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-hoverlayview-0000001237437097) *|对应的OverlayView。|

