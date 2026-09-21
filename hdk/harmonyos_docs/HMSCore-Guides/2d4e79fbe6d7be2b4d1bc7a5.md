---
name: document/cn/HMSCore-Guides/harmonyos-sdk-event-listening-0000001101459192
title: 侦听事件
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/harmonyos-sdk-event-listening-0000001101459192
---

# 侦听事件

本章节包含地图的点击和长按、相机移动、以及标记点击等事件侦听。

## 地图事件侦听

### 点击事件侦听

```screen
mHuaweiMap.setOnMapClickListener(new OnMapClickListener() {
    @Override
    public void onMapClick(LatLng latLng) {
        new ToastDialog(CommonContext.getContext()).setText("onMapClick：").show();
    }
});
```

### 长按事件侦听

```screen
mHuaweiMap.setOnMapLongClickListener(new OnMapLongClickListener() {
    @Override
    public void onMapLongClick(LatLng latLng) {
        new ToastDialog(CommonContext.getContext()).setText("onMapLongClick：").show();
    }
});
```

## 相机移动侦听

相机移动时，应用层通过设置侦听器，能够对相机移动状态进行侦听。

* 当相机开始移动时，将调用[OnCameraMoveStartedListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-oncameramovestartedlistener-0000001147992551)的[onCameraMoveStarted](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-oncameramovestartedlistener-0000001147992551#section15331349172613)()方法进行回调。
* 当相机移动或用户与触摸屏交互时，会多次调用[OnCameraMoveListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-oncameramovelistener-0000001101312576)的[onCameraMove](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-oncameramovelistener-0000001101312576#section113245916324)()方法。
* 当相机停止移动时，将调用[OnCameraIdleListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-oncameraidlelistener-0000001101152750)的[onCameraIdle](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-oncameraidlelistener-0000001101152750#section495822616298)()方法。

```java
@Override
public void onMapReady(HuaweiMap huaweiMap) {
    HuaweiMap mHuaweiMap = huaweiMap;
    mHuaweiMap.setOnCameraIdleListener(new OnCameraIdleListener() {
        @Override
        public void onCameraIdle() {
            new ToastDialog(CommonContext.getContext()).setText("onCameraIdle：").show();
        }
    });

    mHuaweiMap.setOnMapLoadedCallback(new OnMapLoadedCallback() {
        @Override
        public void onMapLoaded() {
            new ToastDialog(CommonContext.getContext()).setText("onMapLoaded：").show();
        }
    });

    mHuaweiMap.setOnMapClickListener(new OnMapClickListener() {
        @Override
        public void onMapClick(LatLng latLng) {
            new ToastDialog(CommonContext.getContext()).setText("onMapClick：").show();
        }
    });

    mHuaweiMap.setOnMapLongClickListener(new OnMapLongClickListener() {
        @Override
        public void onMapLongClick(LatLng latLng) {
            new ToastDialog(CommonContext.getContext()).setText("onMapLongClick：").show();
        }
    });

    // 设置最小偏好缩放级别，范围为[3,20]
    mHuaweiMap.setMinZoomPreference(3);
    // 设置最大偏好缩放级别，范围为[3,20]
    mHuaweiMap.setMaxZoomPreference(14);
    // 重置最大最小缩放级别
    mHuaweiMap.resetMinMaxZoomPreference();
}
```

## 其他事件侦听

### 标记点击事件侦听

```screen
mHuaweiMap.setOnMarkerClickListener(new OnMarkerClickListener() {
    @Override
    public boolean onMarkerClick(Marker marker) {
        new ToastDialog(CommonContext.getContext()).setText("onMarkerClick：").show();
        return false;
    }
});
```

### 窗口点击事件侦听

```screen
mHuaweiMap.setOnInfoWindowClickListener(new OnInfoWindowClickListener() {
    @Override
    public void onInfoWindowClick(Marker marker) {
        new ToastDialog(CommonContext.getContext()).setText("onInfoWindowClick：").show();
    }
});
```

