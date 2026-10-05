---
name: document/cn/HMS-Guides/hms-map-mapinteraction
title: 地图交互
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/hms-map-mapinteraction
source: portal
---

# 1 概览

您可以通过控制内置UI控件的显示以及允许哪些手势来自定义用户与地图交互的方式。参考示例代码工程中的CameraDemoActivity.java、GestureDemoActivity.java、GestureControlsDemoActivity.java等文件，[示例代码下载](https://developer.huawei.com/consumer/cn/doc/development/HMS-Examples/hms-map-v4-example)。

# 2 地图相机

## 2.1 相机属性

相机包含以下4个属性：

属性| 属性描述  
---|---  
target| 地图中心位置的经纬度坐标。  
bearing| 地图以正北方向为0度顺时针旋转的角度。  
tilt| 相机的倾斜角度，即相机角度与垂直于地球表面直线的夹角。  
zoom| 屏幕中心附近的缩放级别。  
  
## 2.2 移动相机

华为地图的移动是通过模拟相机移动的方式实现的，开发者可以通过改变相机位置，来控制地图的可见区域。开发者要更改相机位置时，可以通过[CameraUpdateFactory](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cameraupdatef)创建不同类型的[CameraUpdate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cameraupdate)，然后再去移动相机。

**创建CameraUpdate对象的方式**
      
      1.  //方式1：相机放大级数加1，保持其他属性不变
        2. CameraUpdate cameraUpdate = CameraUpdateFactory.zoomIn();
        3. //方式2：相机放大级数减1，保持其他属性不变
        4. CameraUpdate cameraUpdate1 = CameraUpdateFactory.zoomOut();
        5. //方式3：指定相机缩放级数zoom值，其他属性不变
        6. float zoom = 8.0f;
        7. CameraUpdate cameraUpdate2 = CameraUpdateFactory.zoomTo(zoom);
        8. //方式4：指定相机缩放级别增量amount，开发者调用此方法可以在原来相机的缩放级别之上，进行适当的缩放
        9. float amount = 2.0f;
        10. CameraUpdate cameraUpdate3 = CameraUpdateFactory.zoomBy(amount);
        11. //方式5：指定缩放级别增量和一个中心点，开发者调用此API可以移动相机至中心点位置，并进行缩放
        12. //屏幕坐标点
        13. Point point = new Point(31, 118);
        14. float amount = 2.0f;
        15. CameraUpdate cameraUpdate4 = CameraUpdateFactory.zoomBy(amount, point);
        16. //方式6：设置相机的经纬度，其他参数不变
        17. LatLng latLng1 = new LatLng(31.5, 118.9);
        18. CameraUpdate cameraUpdate5 = CameraUpdateFactory.newLatLng(latLng1);
        19. //方式7：设置相机的可见区域，和到边界的距离
        20. int padding = 100;
        21. LatLng latLng1 = new LatLng(31.5, 118.9);
        22. LatLng latLng2 = new LatLng(32.5, 119.9);
        23. LatLngBounds latLngBounds = new LatLngBounds(latLng1, latLng2);
        24. CameraUpdate cameraUpdate6 = CameraUpdateFactory.newLatLngBounds(latLngBounds, padding);
        25. //方式8：设置相机的中心点位置和缩放级数
        26. float zoom = 0.0f;
        27. LatLng latLng2 = new LatLng(32.5, 119.9);
        28. CameraUpdate cameraUpdate7 = CameraUpdateFactory.newLatLngZoom(latLng2, zoom);
        29. //方式9：滚动相机，将相机按照指定的像素点移动
        30. float x = 100.0f;
        31. float y = 100.0f;
        32. CameraUpdate cameraUpdate8 = CameraUpdateFactory.scrollBy(x, y);
        33. //方式10：指定相机位置
        34. //倾斜度
        35. float tilt = 2.2f;
        36. //方向
        37. float bearing = 31.5f;
        38. CameraPosition cameraPosition = new CameraPosition(latLng1,zoom,tilt,bearing);
        39. CameraUpdate cameraUpdate9 = CameraUpdateFactory.newCameraPosition(cameraPosition);
    
    

**移动相机的方式**

您可以选择以动画方式或非动画方式移动相机。

以动画方式移动相机时，您还可以设置动画停止时的回调接口和动画持续的时间。默认动画持续时间为250毫秒。

以非动画方式移动相机是瞬时完成的。
      
      1. //以动画方式移动地图相机
        2. hMap.animateCamera(CameraUpdate);
        3. //以动画方式移动地图相机，并设置动画停止时的回调接口
        4. hMap.animateCamera(CameraUpdate, CancelableCallback);
        5. //以动画方式移动地图相机，并设置动画停止时的回调接口和动画持续的时间
        6. hMap.animateCamera(CameraUpdate, int, CancelableCallback);
        7. //以非动画方式移动地图相机
        8. hMap.moveCamera(CameraUpdate);
    
    

**设置相机最大/最小偏好缩放级别**  

      
      1.  //设置最小偏好缩放级别
        2. hMap.setMinZoomPreference(float);
        3. //设置最大偏好缩放级别
        4. hMap.setMaxZoomPreference(float);
        5. //重置最大最小缩放级别
        6. hMap.resetMinMaxZoomPreference();
    
    

**![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165206.03563291426833765650118041730688:50510709112554:2800:643A31EE328A8F13DB25940F27B3EC6942147E96443A5C67F962ED009F9044B4.png?needInitFileName=true)**

图1：指定相机位置前  


  


![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165242.11998888635189149486262344910854:50510709112554:2800:E13D01DE655E0D48A0B76AD6F48D038AAED7EF9547DCA67A75AE1EB636E7C708.png?needInitFileName=true)

图2：指定相机位置后

## 2.3 区域限制

华为地图SDK支持设置地图相机的边界。通过[setLatLngBoundsForCameraTarget](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setLatLngBoundsForCameraTarget\(LatLngBounds\))([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds))接口指定一个[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)来约束相机目标，使用户漫游地图时，相机目标不会移出此边界。当设置参数为空时，地图相机的边界清除。

# 3 UI控件和手势

开发者可以通过调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)类中的[getUiSettings](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#getUiSettings\(\))()方法获取到[UiSettings](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-uisettings)对象，该类支持控制UI控件的可见性。UI控件主要包括：缩放控件、指南针、“我的位置”按钮、“地图手势”。

**缩放控制器**

华为地图SDK提供了内置的缩放控件，默认情况下是开启的。
      
      1. //缩放控件控制开关 
        2. hMap.getUiSettings().setZoomControlsEnabled(false);
    
    

**指南针**

华为地图SDK提供了指南针功能，默认显示在地图的右上角。如果启用，当地图不是指向正北方向时，地图右上角会显示一个指南针图标，点击指南针可使地图旋转为正北方向；当地图为正北方向时，指南针图标隐藏。如果禁用，将永远不会显示指南针图标。
      
      1. //指南针控制开关 
        2. hMap.getUiSettings().setCompassEnabled(false);
    
    

**“我的位置”按钮**

启用我的位置按钮之前，您需要确保已经开启了android.permission.ACCESS_FINE_LOCATION和android.permission.ACCESS_COARSE_LOCATION权限，以及开启了“我的位置”图层。当启用了“我的位置”按钮功能时，该按钮才会显示在地图上。
      
      1. //"我的位置"图层开关 
        2. hMap.setMyLocationEnabled(true); 
        3. //"我的位置"按钮显示开关 
        4. hMap.getUiSettings().setMyLocationButtonEnabled(true);
    
    

**地图手势控制**

开发者可以通过[UISettings](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-uisettings)对象来启用或禁止相关的地图手势。

  * 缩放手势：双击可将缩放级别提高1（放大），用两根手指点击可将缩放级别降低1（缩小）。



      
      1. //缩放手势控制开关 
        2. hMap.getUiSettings().setZoomGesturesEnabled(true);
    
    

  * 滚动平移手势：用户可以通过用手指拖动地图来进行移动。



      
      1. //移动手势控制开关 
        2. hMap.getUiSettings().setScrollGesturesEnabled(true);
    
    

  * 倾斜手势：用户可以将两个手指在地图上进行向下或向上移动来改变地图的倾斜度。



      
      1. //倾斜手势控制开关 
        2. hMap.getUiSettings().setTiltGesturesEnabled(true);
    
    

  * 旋转手势：用户可以通过将两个手指放在地图上旋转来旋转地图。



      
      1. //旋转手势控制开关 
        2. hMap.getUiSettings().setRotateGesturesEnabled(true);
    
    

# 4 监听事件

本章节包含地图的点击和长按、相机移动、以及“我的位置”按钮点击等事件监听。

## 4.1 地图事件监听

单击事件监听：
      
      1. hMap.setOnMapClickListener(new HuaweiMap.OnMapClickListener() {
        2.     @Override
        3.     public void onMapClick(LatLng latLng) {
        4.         Toast.makeText(getApplicationContext(), "onMapClick：" + latLng.toString(), Toast.LENGTH_SHORT).show();
        5.     }
        6. });
    
    

长按事件监听：
      
      1. hMap.setOnMapLongClickListener(new HuaweiMap.OnMapLongClickListener() {
        2.     @Override
        3.     public void onMapLongClick(LatLng latLng) {
        4.         Toast.makeText(getApplicationContext(), "onMapLongClick：" + latLng.toString(), Toast.LENGTH_SHORT).show();
        5.     } 
        6. });
    
    

## 4.2 相机移动监听

相机移动时，应用层通过设置监听器，能够对相机移动状态进行监听。

当相机开始移动时，将调用[HuaweiMap.OnCameraMoveStartedListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncameramovestartedl)的[onCameraMoveStarted](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncameramovestartedl#onCameraMoveStarted\(int\))()方法进行回调。

当相机移动或用户与触摸屏交互时，会多次调用[HuaweiMap.OnCameraMoveListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncameramovel)的[onCameraMove](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncameramovel#onCameraMove\(\))()方法。

当相机停止移动时，将调用[HuaweiMap.OnCameraIdleListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimaponcameraidlel)的[OnCameraIdle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimaponcameraidlel#onCameraIdle\(\))()方法。
      
      1. @Override
        2. public void onMapReady(HuaweiMap huaweiMap) {
        3.     Log.i(TAG, "onMapReady: ");
        4.     hMap = huaweiMap;
        5.     hMap.setMyLocationEnabled(true);
        6.     hMap.setOnCameraMoveStartedListener(this);
        7.     hMap.setOnCameraIdleListener(this);
        8.     hMap.setOnCameraMoveListener(this);
        9.     hMap.setOnMapLoadedCallback(new HuaweiMap.OnMapLoadedCallback() {
        10.         @Override
        11.         public void onMapLoaded() {
        12.             Log.i(TAG, "onMapLoaded: successful");
        13.         }
        14.     });
        15. }
        16. //相机开始移动时回调
        17. @Override
        18. public void onCameraMoveStarted(int reason) {
        19.     Log.i(TAG, "onCameraMoveStarted: successful");
        20. }
        21. //相机移动终止时的回调
        22. @Override
        23. public void onCameraIdle() {
        24.     Log.i(TAG, "onCameraIdle: successful");
        25.  }
        26. //相机移动过程中的回调
        27. @Override
        28. public void onCameraMove() {
        29.     Log.i(TAG, "onCameraMove: successful");
        30. }
    
    

## 4.3 其他事件监听

标记点击事件监听：
      
      1. hMap.setOnMarkerClickListener(new HuaweiMap.OnMarkerClickListener() {
        2.     @Override
        3.     public boolean onMarkerClick(Marker marker) {
        4.         Toast.makeText(getApplicationContext(), "onMarkerClick：" + marker.getTitle(), Toast.LENGTH_SHORT).show();
        5.         return false;
        6.     }
        7. });
    
    

窗口点击事件监听:
      
      1. hMap.setOnInfoWindowClickListener(new HuaweiMap.OnInfoWindowClickListener() {
        2.     @Override
        3.     public void onInfoWindowClick(Marker marker) {
        4.         Toast.makeText(getApplicationContext(), "onInfoWindowClick：" + marker.getTitle(), Toast.LENGTH_SHORT).show();
        5.     }
        6. });
    
    

“我的位置”按钮点击事件监听：
      
      1. hMap.setOnMyLocationButtonClickListener(new HuaweiMap.OnMyLocationButtonClickListener() {
        2.     @Override
        3.     public boolean onMyLocationButtonClick() {
        4.         Toast.makeText(getApplicationContext(), "MyLocation button clicked", Toast.LENGTH_SHORT).show();
        5.         return false;
        6.     }
        7. });
    
    

  

