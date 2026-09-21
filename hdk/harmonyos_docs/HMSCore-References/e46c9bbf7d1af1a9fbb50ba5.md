---
name: document/cn/HMSCore-References/huaweimapooptions-0000001050150194
title: HuaweiMapOptions
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimapooptions-0000001050150194
---

# HuaweiMapOptions

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class HuaweiMapOptions 是继承自Object的final类，实现了Parcelable接口。为[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757)定义了配置信息，这些属性用于将地图添加到应用程序中。如果使用[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)，可以使用静态工厂方法[newInstance(HuaweiMapOptions options)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294#section2225611183820)传递这些配置。如果使用的是[MapView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapview-0000001050150338)，可以使用构造函数[MapView(Context context, HuaweiMapOptions options)](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapview-0000001050150338#section03591042182)传递这些配置信息。|

## Public Constructor Summary

|Constructor Name|
|:-------------------------------------------|
|HuaweiMapOptions() HuaweiMapOptions类的默认构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HuaweiMapOptions|[camera](#section798402413010)([CameraPosition](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/cameraposition-0000001050152443) cameraPosition) 根据cameraPosition参数指定地图上初始相机的状态。|
|HuaweiMapOptions|[compassEnabled](#section158911641711)(boolean isCompassEnabled) 根据isCompassEnabled参数设置地图上的指南针开启或关闭。|
|static HuaweiMapOptions|[createFromAttributes](#section328210591811)(Context context, AttributeSet attrs) 根据自定义的属性文件创建一个HuaweiMapOptions对象。|
|HuaweiMapOptions|[dark](#section57629468314)(boolean isDark) 设置是否开启深色模式。当开启深色模式后，地图Logo点击弹窗、室内地图控件以及隐私协议弹窗会适配显示深色效果。|
|Boolean|[getDark](#section1447619354125)() 检查是否开启了深色模式。|
|[CameraPosition](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/cameraposition-0000001050152443)|[getCamera](#section810020521830)() 获取当前相机的配置信息。|
|Boolean|[getCompassEnabled](#section1694714242410)() 获取地图中指南针功能启用状态（开启或关闭）。|
|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808)|[getLatLngBoundsForCameraTarget](#section4666175815418)() 获取约束相机目标的边界范围。如果未指定，则无返回值。|
|Boolean|[getLiteMode](#section141801147759)() 获取地图是否开启精简模式。|
|int|[getMapType](#section12521027168)() 获取当前的地图类型。|
|Float|[getMaxZoomPreference](#section78861111672)() 获取当前地图的最大偏好缩放级别。|
|Float|[getMinZoomPreference](#section10719165715713)() 获取当前地图的最小偏好缩放级别。|
|Boolean|[getRotateGesturesEnabled](#section16773144116814)() 获取当前地图的旋转手势是否可用。|
|Boolean|[getScrollGesturesEnabled](#section446415211395)() 获取当前地图的滚动手势是否可用。|
|Boolean|[getTiltGesturesEnabled](#section072675119915)() 获取当前地图中倾斜手势是否可用。|
|Boolean|[getUseViewLifecycleInFragment](#section0818164121012)() 获取当使用[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)时是否指定地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的视图或者[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)本身绑定。|
|Boolean|[getZOrderOnTop](#section2011561881120)() 获取是否设置地图视图的表面放置在地图窗口的顶部。|
|Boolean|[getZoomControlsEnabled](#section15687165511118)() 获取当前地图中缩放功能是否开启。|
|Boolean|[getZoomGesturesEnabled](#section202671951161310)() 获取当前地图中缩放手势是否可用。|
|HuaweiMapOptions|[latLngBoundsForCameraTarget](#section1394012719138)([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808) latLngBounds) 设置一个[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808)来约束相机目标，以便用户移动相机时，相机目标不会移出此边界范围。|
|HuaweiMapOptions|[liteMode](#section29491334161413)(boolean isLiteMode) 指定地图是否以精简模式创建地图。|
|HuaweiMapOptions|[mapType](#section2485024181514)(int mapType) 指定地图的类型。|
|HuaweiMapOptions|[maxZoomPreference](#section88791059160)(float maxZoomLevel) 设置最大偏好缩放级别。|
|HuaweiMapOptions|[minZoomPreference](#section1616415503161)(float minZoomLevel) 设置最小偏好缩放级别。|
|HuaweiMapOptions|[previewId](#section1569752017369)(String previewId) 设置预览ID。|
|HuaweiMapOptions|[rotateGesturesEnabled](#section65033374179)(boolean isRotateGesturesEnabled) 指定地图中的旋转手势是否可用。|
|HuaweiMapOptions|[scrollGesturesEnabled](#section2094318183189)(boolean isScrollGesturesEnabled) 指定地图中的滚动手势是否可用。|
|HuaweiMapOptions|[styleId](#section16612183310174)(String styleId) 设置样式ID。|
|HuaweiMapOptions|[tiltGesturesEnabled](#section1469615401913)(boolean isTiltGesturesEnabled) 指定地图中的倾斜手势是否可用。|
|String|toString() 返回该对象的字符串表示。|
|HuaweiMapOptions|[useViewLifecycleInFragment](#section14526745191913)(boolean isUseViewLifecycleInFragment) 指定是将地图的生命周期绑定到[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的视图上还是[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)本身。|
|void|writeToParcel(Parcel out, int flags) 对数据进行序列化操作。|
|HuaweiMapOptions|[zOrderOnTop](#section17532163552014)(boolean zOrderOnTop) 指定地图视图的表面是否放置在地图窗口的顶部。|
|HuaweiMapOptions|[zoomControlsEnabled](#section937192082118)(boolean isZoomControlsEnabled) 指定是否启用地图中的缩放功能。|
|HuaweiMapOptions|[zoomGesturesEnabled](#section67067692220)(boolean isZoomGesturesEnabled) 指定地图中缩放手势是否可用。|

## Public Methods

### camera

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions camera([CameraPosition](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/cameraposition-0000001050152443) cameraPosition) 您调用此API根据cameraPosition参数指定地图上初始相机的状态。|

**Parameters**

|Name|Description|
|:-------------|:----------|
|cameraPosition|相机配置。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### compassEnabled

|Method|
|:----------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions compassEnabled(boolean isCompassEnabled) 您调用此API根据isCompassEnabled参数设置地图上的指南针开启或关闭。|

**Parameters**

|Name|Description|
|:---------------|:--------------------------------------|
|isCompassEnabled|* true：指南针可用。 * false：指南针不可用。 默认值为true。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### createFromAttributes

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------|
|public static HuaweiMapOptions createFromAttributes(Context context, AttributeSet attrs) 您调用此API可根据自定义的属性文件创建一个HuaweiMapOptions对象。|

**Parameters**

|Name|Description|
|:------|:----------|
|context|上下文。|
|attrs|属性文件目录。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### dark

|Method|
|:-----------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions dark(boolean isDark) 您调用此API可设置是否开启深色模式。当开启深色模式后，地图Logo点击弹窗、室内地图控件以及隐私协议弹窗会适配显示深色效果。|

**Parameters**

|Name|Description|
|:-----|:----------|
|isDark|是否开启深色模式。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### getDark

|Method|
|:---------------------------------------------|
|public Boolean getDark() 您调用此API可以检查是否开启了深色模式。|

**Return** **s**

|Type|Description|
|:------|:--------------------------------------------|
|Boolean|是否开启了深色模式。 * true：启用。 * false：未启用。 默认值为false。|

### getCamera

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [CameraPosition](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/cameraposition-0000001050152443) getCamera() 您调用此API获取当前相机的配置信息。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------|:----------|
|[CameraPosition](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/cameraposition-0000001050152443)|相机配置信息。|

### getCompassEnabled

|Method|
|:---------------------------------------------------------------|
|public Boolean getCompassEnabled() 您调用此API获取地图中指南针功能启用状态（开启或关闭）。|

**Return** **s**

|Type|Description|
|:------|:-------------------------------------------|
|Boolean|* true：启用了指南针功能。 * false：未启用指南针功能。 默认值为true。|

### getLatLngBoundsForCameraTarget

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808) getLatLngBoundsForCameraTarget() 您调用此API获取约束相机目标的边界范围。如果未指定，则无返回值。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:-----------|
|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808)|约束相机目标的边界范围。|

### getLiteMode

|Method|
|:------------------------------------------------|
|public Boolean getLiteMode() 您调用此API获取地图是否开启精简模式。|

**Return** **s**

|Type|Description|
|:------|:------------------------------------------|
|Boolean|* true：开启了精简模式。 * false：未开启精简模式。 默认值为false。|

### getMapType

|Method|
|:----------------------------------------|
|public int getMapType() 您调用此API获取当前的地图类型。|

**Return** **s**

|Type|Description|
|:---|:------------------|
|int|对应的地图类型，如果未指定，返回-1。|

### getMaxZoomPreference

|Method|
|:----------------------------------------------------------|
|public Float getMaxZoomPreference() 您调用此API获取当前地图的最大偏好缩放级别。|

**Return** **s**

|Type|Description|
|:----|:--------------|
|Float|最大偏好缩放级别，默认为20。|

### getMinZoomPreference

|Method|
|:----------------------------------------------------------|
|public Float getMinZoomPreference() 您调用此API获取当前地图的最小偏好缩放级别。|

**Return** **s**

|Type|Description|
|:----|:-------------|
|Float|最小偏好缩放级别，默认为3。|

### getRotateGesturesEnabled

|Method|
|:----------------------------------------------------------------|
|public Boolean getRotateGesturesEnabled() 您调用此API获取当前地图的旋转手势是否可用。|

**Return** **s**

|Type|Description|
|:------|:----------------------------------------|
|Boolean|* true：旋转手势可用。 * false：旋转手势不可用。 默认值为true。|

### getScrollGesturesEnabled

|Method|
|:----------------------------------------------------------------|
|public Boolean getScrollGesturesEnabled() 您调用此API获取当前地图的滚动手势是否可用。|

**Return** **s**

|Type|Description|
|:------|:----------------------------------------|
|Boolean|* true：滚动手势可用。 * false：滚动手势不可用。 默认值为true。|

### getTiltGesturesEnabled

|Method|
|:--------------------------------------------------------------|
|public Boolean getTiltGesturesEnabled() 您调用此API获取当前地图中倾斜手势是否可用。|

**Return** **s**

|Type|Description|
|:------|:----------------------------------------|
|Boolean|* true：倾斜手势可用。 * false：倾斜手势不可用。 默认值为true。|

### getUseViewLifecycleInFragment

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Boolean getUseViewLifecycleInFragment() 您调用此API获取当使用[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)时是否指定地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的视图或者[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)本身绑定。如果未指定则无返回值。|

**Return** **s**

|Type|Description|
|:------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Boolean|* true：指定了地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的视图绑定。 * false：指定了地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)本身绑定。|

### getZOrderOnTop

|Method|
|:--------------------------------------------------------------------------|
|public Boolean getZOrderOnTop() 您调用此API获取是否设置地图视图的表面放置在地图窗口的顶部。如果未设置，则无返回值。|

**Return** **s**

|Type|Description|
|:------|:----------------------------------------------------------|
|Boolean|* true：设置了地图视图的表面放置在地图窗口的顶部。 * false：设置了地图视图的表面不放置在地图窗口的顶部。|

### getZoomControlsEnabled

|Method|
|:--------------------------------------------------------------|
|public Boolean getZoomControlsEnabled() 您调用此API获取当前地图中缩放功能是否开启。|

**Return** **s**

|Type|Description|
|:------|:-----------------------------------------|
|Boolean|* true：开启了缩放控制。 * false：未开启缩放控制。 默认值为true。|

### getZoomGesturesEnabled

|Method|
|:--------------------------------------------------------------|
|public Boolean getZoomGesturesEnabled() 您调用此API获取当前地图中缩放手势是否可用。|

**Return** **s**

|Type|Description|
|:------|:----------------------------------------|
|Boolean|* true：缩放手势可用。 * false：缩放手势不可用。 默认值为true。|

### latLngBoundsForCameraTarget

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions latLngBoundsForCameraTarget([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808) latLngBounds) 您调用此API设置一个[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808)来约束相机目标，以便用户移动相机时，相机目标不会移出此边界范围。|

**Parameters**

|Name|Description|
|:-----------|:-----------|
|latLngBounds|约束相机目标的边界范围。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### liteMode

|Method|
|:---------------------------------------------------------------------------|
|public HuaweiMapOptions liteMode(boolean isLiteMode) 您调用此API指定地图是否以精简模式创建地图。|

**Parameters**

|Name|Description|
|:---------|:-----------------------------------------|
|isLiteMode|* true：开启精简模式。 * false：不开启精简模式。 默认值为false。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### mapType

|Method|
|:---------------------------------------------------------------|
|public HuaweiMapOptions mapType(int mapType) 指定地图的类型。如果未指定，则为-1。|

**Parameters**

|Name|Description|
|:------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|mapType|对应的地图类型。取值包括： * [HuaweiMap.MAP_TYPE_NONE](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section19250192319483) * [HuaweiMap.MAP_TYPE_NORMAL](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section1020623124910) * [HuaweiMap.MAP_TYPE_TERRAIN](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section181324288393)|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### maxZoomPreference

|Method|
|:-------------------------------------------------------------------------------|
|public HuaweiMapOptions maxZoomPreference(float maxZoomLevel) 您调用此API设置最大偏好缩放级别。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|maxZoomLevel|最大缩放级别。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### minZoomPreference

|Method|
|:-------------------------------------------------------------------------------|
|public HuaweiMapOptions minZoomPreference(float minZoomLevel) 您调用此API设置最小偏好缩放级别。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|minZoomLevel|最小缩放级别。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### previewId

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions previewId(String previewId) 您调用此API设置预览ID。预览ID在编辑自定义样式时会重新生成，通过调用该方法可测试自定义样式效果。 具体用法参见开发指南[自定义地图样式](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-map-style-customization-procedure-0000001061781411)。 > 说明 > HuaweiMapOptions.[previewId](#section1569752017369)方法是在创建地图前应用样式，而[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757).[previewId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section1569752017369)方法是在创建地图后应用样式。|

**Parameters**

|Name|Description|
|:--------|:----------|
|previewId|自定义样式的预览ID。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### rotateGesturesEnabled

|Method|
|:---------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions rotateGesturesEnabled(boolean isRotateGesturesEnabled) 您调用此API指定地图中的旋转手势是否可用，默认可用。|

**Parameters**

|Name|Description|
|:----------------------|:----------------------------------------|
|isRotateGesturesEnabled|* true：旋转手势可用。 * false：旋转手势不可用。 默认值为true。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### scrollGesturesEnabled

|Method|
|:---------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions scrollGesturesEnabled(boolean isScrollGesturesEnabled) 您调用此API指定地图中的滚动手势是否可用，默认可用。|

**Parameters**

|Name|Description|
|:----------------------|:----------------------------------------|
|isScrollGesturesEnabled|* true：滚动手势可用。 * false：滚动手势不可用。 默认值为true。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### styleId

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions styleId(String styleId) 您调用此API设置样式ID。样式ID是唯一ID，通过调用该方法可在创建地图前将地图样式设置为自定义样式。 具体用法参见开发指南[自定义地图样式](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-sdk-map-style-customization-procedure-0000001061781411)。 > 说明 > HuaweiMapOptions.[styleId](#section16612183310174)方法是在创建地图前应用样式，而[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757).[setStyleId](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section16612183310174)方法是在创建地图后应用样式。|

**Parameters**

|Name|Description|
|:------|:----------|
|styleId|自定义样式的样式ID。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### tiltGesturesEnabled

|Method|
|:-----------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions tiltGesturesEnabled(boolean isTiltGesturesEnabled) 您调用此API指定地图中的倾斜手势是否可用，默认可用。|

**Parameters**

|Name|Description|
|:--------------------|:----------------------------------------|
|isTiltGesturesEnabled|* true：倾斜手势可用。 * false：倾斜手势不可用。 默认值为true。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### useViewLifecycleInFragment

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions useViewLifecycleInFragment(boolean isUseViewLifecycleInFragment) 您调用此API可以指定是将地图的生命周期绑定到[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的视图上还是[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)本身。默认将地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)绑定在一起。 * 如果使用[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的生命周期，当[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)分离和重新建立连接时能够更快地渲染地图，这样做的代价是[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)分离时不会被破坏，不会释放地图映射的内存。 * 如果使用[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)视图的生命周期，在[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)分离和重新建立连接时，不会重用地图，这将导致地图重新渲染，可能需要几秒的时间。同时意味着当[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)分离时，因为没有视图，[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757)的方法都会抛出NullPointerException异常。|

**Parameters**

|Name|Description|
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|isUseViewLifecycleInFragment|* true：指定地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)的视图绑定。 * false：指定地图的生命周期与[MapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/mapfragment-0000001050150294)本身绑定。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### zOrderOnTop

|Method|
|:-------------------------------------------------------------------------------------|
|public HuaweiMapOptions zOrderOnTop(boolean zOrderOnTop) 您调用此API指定地图视图的表面是否放置在地图窗口的顶部。|

**Parameters**

|Name|Description|
|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|zOrderOnTop|* true：设置地图视图的表面放置在地图窗口的顶部。 * false：设置地图视图的表面不放置在地图窗口的顶部。 如果未设置，则无返回值，效果和false一样。 > 说明 > 不支持基于[TextureMapView](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/texturemapview-0000001051004791)、[TextureMapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/texturemapfragment-0000001050724736)、[TextureSupportMapFragment](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/texturesupportmapfragment-0000001051084710)地图容器设置该属性。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### zoomControlsEnabled

|Method|
|:-----------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions zoomControlsEnabled(boolean isZoomControlsEnabled) 您调用此API指定是否启用地图中的缩放功能，默认启用。|

**Parameters**

|Name|Description|
|:--------------------|:----------------------------------------|
|isZoomControlsEnabled|* true：缩放控制可用。 * false：缩放控制不可用。 默认值为true。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

### zoomGesturesEnabled

|Method|
|:----------------------------------------------------------------------------------------------------|
|public HuaweiMapOptions zoomGesturesEnabled(boolean isZoomGesturesEnabled) 您调用此API指定地图中缩放手势是否可用，默认可用。|

**Parameters**

|Name|Description|
|:--------------------|:----------------------------------------|
|isZoomGesturesEnabled|* true：缩放手势可用。 * false：缩放手势不可用。 默认值为true。|

**Return** **s**

|Type|Description|
|:---------------|:----------|
|HuaweiMapOptions|地图配置项。|

