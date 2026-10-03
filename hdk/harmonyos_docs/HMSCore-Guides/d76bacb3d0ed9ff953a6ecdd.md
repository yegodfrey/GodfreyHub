---
name: document/cn/HMSCore-Guides/harmonyos-sdk-ui-controls-and-gestures-0000001147859039
title: UI控件和手势
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-sdk-ui-controls-and-gestures-0000001147859039
---

# UI控件和手势

您可以通过调用[HuaweiMap.getUiSettings](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-huaweimap-0000001101312582#section86721421145920)()方法获取到[UiSettings](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-uisettings-0000001147912403)对象，该类支持控制UI控件的可见性，以及设置地图手势开关。UI控件主要包括：缩放控件、指南针。

## 缩放控件

地图SDK提供了内置的缩放控件，默认情况下是开启的。

```java
// 缩放控件控制开关
mHuaweiMap.getUiSettings().setZoomControlsEnabled(true);
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7a/v3/3fxyJUcfTXaH9JoIZYAFCA/zh-cn_image_0000001307724730.png?HW-CC-KV=V1&HW-CC-Date=20260922T085431Z&HW-CC-Expire=31536000000&HW-CC-Sign=C55A01497AB1931148E18F09A46B117845DF363844FEB39923F1437DADDA8925 "点击放大")

## 指南针

地图SDK提供了指南针功能，默认显示在地图的右上角。如果启用，当地图不是指向正北方向时，地图右上角会显示一个指南针图标，点击指南针可使地图旋转为正北方向；当地图为正北方向时，指南针图标隐藏。如果禁用，将不会显示指南针图标。

```java
// 指南针控制开关
mHuaweiMap.getUiSettings().setCompassEnabled(true);
```

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/zZpvu2-ORXemRCL1lkL70Q/zh-cn_image_0000001360164801.png?HW-CC-KV=V1&HW-CC-Date=20260922T085431Z&HW-CC-Expire=31536000000&HW-CC-Sign=35303BDF9F398BA88D41001AA7AB90E794C347CE40ED7DDE4B20D307602B4152 "点击放大")

## 地图手势控制

您可以通过[UiSettings](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-uisettings-0000001147912403)对象来启用或禁止相关的地图手势。

* 缩放手势：
  1. 双击可将缩放级别提高1（放大）层级，用两根手指点击可将缩放级别降低1（缩小）层级。
  2. 双指张合，实现放大缩小。
  3. 双击实现单指缩放，第二次点时按住，然后上划缩小，或下划放大。

  ```java
  // 缩放手势控制开关
  mHuaweiMap.getUiSettings().setZoomGesturesEnabled(true);
  ```

* 滚动平移手势：用户可以通过用手指拖动地图来进行移动。

  ```java
  // 移动手势控制开关
  mHuaweiMap.getUiSettings().setScrollGesturesEnabled(true);
  ```

* 倾斜手势：用户可以将两个手指在地图上进行向下或向上移动来改变地图的倾斜度。

  ```java
  // 倾斜手势控制开关
  mHuaweiMap.getUiSettings().setTiltGesturesEnabled(true);
  ```

* 旋转手势：用户可以通过将两个手指放在地图上旋转来旋转地图。

  ```java
  // 旋转手势控制开关
  mHuaweiMap.getUiSettings().setRotateGesturesEnabled(true);
  ```

