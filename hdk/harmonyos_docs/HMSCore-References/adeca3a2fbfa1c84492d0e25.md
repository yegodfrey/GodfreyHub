---
name: document/cn/HMSCore-References/harmonyos-uisettings-0000001147912403
title: UiSettings
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-uisettings-0000001147912403
---

# UiSettings

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class UiSettings 地图内置UI及手势控制器，在调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-huaweimap-0000001101312582)类的[getUiSettings](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-huaweimap-0000001101312582#section86721421145920)方法时会返回该类型的实例。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------|
|void|[setCompassEnabled](#section129811026105811)(boolean enabled) 设置地图指南针功能是否可用。|
|void|[setLogoPosition](#section6873133122718)(int gravity) 调整Petal Maps Logo位置。|
|void|[setLogoPadding](#section42189513611)(int paddingStart, int paddingTop, int paddingEnd, int paddingBottom) 设置地图摄像头区域边界与Logo之间的间距。|
|void|[setLogoVisible](#section69141143171619)(boolean visible) 设置是否显示Logo。|
|void|[setRotateGesturesEnabled](#section6840881108)(boolean enabled) 设置是否启用旋转手势。|
|void|[setScrollGesturesEnabled](#section1923864410016)(boolean enabled) 设置是否启用滚动手势。|
|void|[setTiltGesturesEnabled](#section11471236212)(boolean enabled) 设置是否启用倾斜手势。|
|void|[setZoomControlsEnabled](#section185278164314)(boolean enabled) 设置是否启用缩放控制器。|
|void|[setZoomGesturesEnabled](#section12131521337)(boolean enabled) 设置是否启用缩放手势。|

## Public Methods

### setCompassEnabled

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setCompassEnabled(boolean enabled) 您调用此API可以设置地图指南针功能是否启用。 * 启用状态，当地图不是指向正北方向时，地图右上角会显示一个指南针图标，点击指南针可使地图旋转为正北方向；当地图为正北方向时，指南针图标隐藏。 * 禁用状态，将不会显示指南针图标。 * 默认情况下，指南针功能处于启用状态。|

**Parameters**

|Name|Description|
|:------|:-----------------------------------------|
|enabled|* true：启用指南针功能。 * false：禁用指南针功能。 默认值为true。|

### setLogoPosition

|Method|
|:------------------------------------------------------------|
|public void setLogoPosition(int gravity) 调整Petal Maps Logo位置。|

**Parameters**

|Name|Description|
|:------|:----------------------------------------------------------------|
|gravity|Petal Maps Logo位置。取值包括： * 1：左下角 * 2：右下角 * 3：左上角 * 4：右上角 默认显示在左下角。|

### setLogoPadding

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setLogoPadding(int paddingStart, int paddingTop, int paddingEnd, int paddingBottom) 设置地图摄像头区域边界与Logo之间的间距。Logo不随横竖屏而改变，大小固定不随地图缩放变化。 * 当您设置的任意padding值超出范围（例如：负值，或超出mapview的边界）时被认为非法，Logo位置不变化。 * 当Logo位置在左下角时paddingStart、paddingBottom生效。 * 当Logo位置在右上角时paddingEnd、paddingTop生效，以此类推。 > 说明 > 在调整设置地图摄像头区域边界与Logo之间的间距时，请不要隐藏或遮盖Logo。|

**Parameters**

|Name|Description|
|:------------|:------------------------------|
|paddingStart|距离地图边框的左边距的距离。单位：px，取值范围：大于等于0。|
|paddingTop|距离地图边框的上边距的距离。单位：px，取值范围：大于等于0。|
|paddingEnd|距离地图边框的右边距的距离。单位：px，取值范围：大于等于0。|
|paddingBottom|距离地图边框的下边距的距离。单位：px，取值范围：大于等于0。|

### setLogoVisible

|Method|
|:-------------------------------------------------------------|
|public void setLogoVisible(boolean visible) 设置是否显示Logo（仅手表支持）。|

**Parameters**

|Name|Description|
|:------|:----------------------------------------|
|visible|是否显示Logo。 * true：显示 * false：不显示 默认值为true。|

### setRotateGesturesEnabled

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setRotateGesturesEnabled(boolean enabled) 您调用此API可以设置是否启用旋转手势。 * 启用状态，用户可以使用两指旋转手势旋转相机。 * 禁用状态，用户将无法通过手势旋转相机。此设置不限制用户点击指南针图标以重置相机方向，也不限制通过接口移动相机和相机动画。 * 默认情况下，旋转手势处于启用状态。|

**Parameters**

|Name|Description|
|:------|:---------------------------------------|
|enabled|* true：启用旋转手势。 * false：禁用旋转手势。 默认值为true。|

### setScrollGesturesEnabled

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setScrollGesturesEnabled(boolean enabled) 您调用此API可以设置是否启用滚动手势。 * 启用状态，用户可以通过滑动来平移相机。 * 禁用状态，滑动无效。此设置不限制通过接口移动相机和相机动画。 * 默认情况下，滚动手势处于启用状态。|

**Parameters**

|Name|Description|
|:------|:---------------------------------------|
|enabled|* true：启用滚动手势。 * false：禁用滚动手势。 默认值为true。|

### setTiltGesturesEnabled

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public void setTiltGesturesEnabled(boolean enabled) 您调用此API可以设置是否启用倾斜手势。 * 启用状态，用户可以使用两指垂直向上滑动来倾斜相机。 * 禁用状态，用户无法通过手势来倾斜相机。 * 默认情况下，倾斜手势处于启用状态。|

**Parameters**

|Name|Description|
|:------|:---------------------------------------|
|enabled|* true：启用倾斜手势。 * false：禁用倾斜手势。 默认值为true。|

### setZoomControlsEnabled

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setZoomControlsEnabled(boolean enabled) 您调用此API可以设置是否启用缩放控制器。 * 启用状态，地图上会出现一对按钮的缩放控件（用于缩放地图）。点击按钮时，会使相机放大（或缩小）一个缩放级别。 * 禁用状态，不会显示缩放控件。 * 默认情况下，缩放控件处于启用状态。|

**Parameters**

|Name|Description|
|:------|:-----------------------------------------|
|enabled|* true：启用缩放控制器。 * false：禁用缩放控制器。 默认值为true。|

### setZoomGesturesEnabled

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setZoomGesturesEnabled(boolean enabled) 您调用此API可以设置是否启用缩放手势。 * 启用状态，用户可以使用以下手势缩放相机： 1. 双击可将缩放级别提高1（放大）层级，用两根手指点击可将缩放级别降低1（缩小）层级。 2. 双指张合，实现放大缩小。 3. 双击实现单指缩放，第二次点时按住，然后上划缩小，或下划放大。 * 禁用状态，缩放手势无效。此设置不影响缩放按钮，也不限制通过接口移动相机和相机动画。 * 默认情况下，缩放手势处于启用状态。|

**Parameters**

|Name|Description|
|:------|:---------------------------------------|
|enabled|* true：启用缩放手势。 * false：禁用缩放手势。 默认值为true。|

