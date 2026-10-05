---
name: document/cn/HMS-Guides/hms-map-drawonthemap
title: 在地图上绘制
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/hms-map-drawonthemap
source: portal
---

# 1 概览

本章节将向您介绍如何在地图上绘制标记、覆盖物以及形状等，参考示例代码工程中的MarkerDemoActivity.java、GroundOverlayDemoActivity.java、PolylineDemoActivity.java、PolygonDemoActivity.java、CircleDemoActivity.java、TileOverlayDemoActivity.java等文件，[示例代码下载](https://developer.huawei.com/consumer/cn/doc/development/HMS-Examples/hms-map-v4-example)。

# 2 标记

用户可以在地图的指定位置添加标记以标识位置、商家、建筑等，并可以通过信息窗口展示详细信息。

## 2.1 添加标记

下面的代码段使用默认图标在地图上添加一个简单的标记。
      
      1. private Marker mMarker;
        2. public void addMarker(View view) {
        3.     if (null != mMarker) {
        4.         mMarker.remove();
        5.     }
        6.     MarkerOptions options = new MarkerOptions() 
        7.             .position(new LatLng(48.893478, 2.334595)) 
        8.             .title("Hello Huawei Map") 
        9.             .snippet("This is a snippet!");
        10.     mMarker = hMap.addMarker(options);
        11. }
    
    

开发者可以自定义图像代替默认图标，还可以设置标记属性来改变图标。标记的以下属性支持自定义：

属性| 含义  
---|---  
position([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) latlng)| 标记在地图上的经纬度，这是[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker)对象唯一必需的属性。  
rotation(float rotation)| 标记在地图上的旋转角度。  
[title](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#title\(String\))(String title)| 用户点按标记时在信息窗口中显示的字符串。  
[snippet](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#snippet\(String\))(String snippet)| 标题文本框显示的其他文字。  
[icon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#icon\(BitmapDescriptor\))([BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptor) iconDescriptor)| 代替默认标记图像。  
[visible](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#visible\(boolean\))(boolean visible)| 标记的可见性，默认为true。  
[zIndex](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#zIndex\(float\))(float zIndex)| 标记的z指数。  
[anchorMarker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#anchorMarker\(float,float\))(float u, float v)| 标记的锚点位置。  
[draggable](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#draggable\(boolean\))(boolean draggable)| 如果想允许用户移动标记，设置为true，默认为false。  
[alpha](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#alpha\(float\))(float alpha)| 标记的透明度，范围为[0，1]，0表示完全透明的，1表示完全不透明。  
[flat](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#flat\(boolean\))(boolean flat)| 标记是否平贴地图。  
[infoWindowAnchor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#infoWindowAnchor\(float,float\))(float u, float v)| 标记信息窗口的锚点坐标。  
  
## 2.2 自定义标记  


**自定义标记图像**

开发者可以使用自定义图像（通常称为图标）修改默认标记图标，通过调用[BitmapDescriptorFactory](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf)类中的静态方法生成[BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptor)对象(图片描述文件)。

方法| 功能  
---|---  
[fromAsset](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf#fromAsset\(String\))(String assetName)| 使用assets目录中的Bitmap图像创建自定义图标。  
[fromBitmap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf#fromBitmap\(Bitmap\))(Bitmap image)| 通过位图图像创建自定义标记图标。  
[fromFile](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf#fromFile\(String\))(String fileName)| 使用位于内部存储中的位图文件创建自定义图标。  
[fromPath](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf#fromPath\(String\))(String absolutePath)| 通过位图的绝对文件路径创建自定义标记图标。  
[fromResource](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf#fromResource\(int\))(int resourceId)| 使用位图图像的资源创建自定义标记。  
  
  


下面的代码段会创建一个带有自定义图标的标记。
      
      1. private Marker mMarker;
        2. mMarker = hMap.addMarker(new MarkerOptions()
        3.         .position(new LatLng(48.893478, 2.334595))
        4.         .icon(BitmapDescriptorFactory.fromResource(R.drawable.badge_ph)));
    
    

## 2.3 修改标记

华为地图SDK支持在添加标记之后，修改已经设置的标记属性。
      
      1. //Modify the icon attribute value
        2. if (mMarker != null) {
        3.     Bitmap bitmap = ResourceBitmapDescriptor.drawableToBitmap(this, ContextCompat.getDrawable(this, R.drawable.badge_ph));
        4.     BitmapDescriptor bitmapDescriptor = BitmapDescriptorFactory.fromBitmap(bitmap);
        5.     mMarker.setIcon(bitmapDescriptor);
        6. }
        7. //Modify the title attribute value
        8. if (mMarker != null) {
        9.     mMarker.setTitle("Marker title");
        10. }
        11. ...
        12. //Modify the draggable attribute value
        13. if (mMarker != null) {
        14.     mMarker .setDraggable(true);
        15. }
        16. //Modify the anchor attribute value
        17. if (mMarker != null) {
        18.     mMarker.setMarkerAnchor(0.9F, 0.9F);
        19. }
    
    

关于锚点设置的具体介绍，请参考[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker).[setAnchor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker#setAnchor\(float,float\))(float anchorU, float anchorV)方法。

## 2.4 聚合标记

华为地图SDK支持聚合标记功能，该功能可以有效地管理在地图不同缩放级别情况下的多个标记。当以高缩放级别查看地图时，各个标记会显示在地图上；以较低级别查看地图时，标记会聚集成集群，从而使标记的呈现更有序。

可以参考以下示例代码实现标记聚合功能：
      
      1.  @Override
        2.     public void onMapReady(HuaweiMap map) {
        3.         hMap = map;
        4.         hMap.moveCamera(CameraUpdateFactory.newLatLngZoom(
        5.             new LatLng(48.893478, 2.334595),10));
        6.         hMap.addMarker(new MarkerOptions().position(new LatLng(48.891478, 2.334595)).title("Marker1").clusterable(true));
        7.         hMap.addMarker(new MarkerOptions().position(new LatLng(48.892478, 2.334595)).title("Marker2").clusterable(true));
        8.         hMap.addMarker(new MarkerOptions().position(new LatLng(48.893478, 2.334595)).title("Marker3").clusterable(true));
        9.         hMap.addMarker(new MarkerOptions().position(new LatLng(48.894478, 2.334595)).title("Marker4").clusterable(true));
        10.         hMap.addMarker(new MarkerOptions().position(new LatLng(48.895478, 2.334595)).title("Marker5").clusterable(true));
        11.         hMap.addMarker(new MarkerOptions().position(new LatLng(48.896478, 2.334595)).title("Marker6").clusterable(true));
        12.         hMap.setMarkersClustering(true);
        13.     }
    
    

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200414213100.34074290975553890715619566516870:50510629073514:2800:FC43DD3703F740DD205E4C084DC4B696E72B868E8ADF168FD2573CF0670300DF.jpg?needInitFileName=true?needInitFileName=true)

图1：低缩放级别下多Marker展示

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200414213059.79131964888836874318913215642065:50510629073514:2800:AFC2B805944B83ECE4CA4D7DAA423EED4A23BB4B0531A1D50611EEACDEC74EE5.jpg?needInitFileName=true?needInitFileName=true)

图2：高缩放级别下多Marker展示

## 2.5 标记事件

**标记点击事件**

可以使用[HuaweiMap.OnMarkerClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onmarkerclickl)来监听标记上的点击事件。要在地图上设置此监听器，请调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的 [setOnMarkerClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setOnMarkerClickListener\(HuaweiMap.OnMarkerClickListener\))(this)方法。当用户点击标记时，[onMarkerClick](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onmarkerclickl#onMarkerClick\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))将调用该标记并将标记作为参数传递。标记单击事件的默认行为是显示其信息窗口（如果可用），使标记在地图上居中。
      
      1. hMap.setOnMarkerClickListener(new HuaweiMap.OnMarkerClickListener() { 
        2.     @Override 
        3.     public boolean onMarkerClick(Marker marker) { 
        4.         Toast.makeText(getApplicationContext(), "onMarkerClick：" + marker.getTitle(), Toast.LENGTH_SHORT).show(); 
        5.         return false; 
        6.     } 
        7. });
    
    

**标记拖动事件**  


可以使用[HuaweiMap.OnMarkerDragListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onmarkerdragl)来监听标记上的拖动事件，前提是该[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker)标记已设置拖拽属性为true。要在地图上设置此监听器，请调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[setOnMarkerDragListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setOnMarkerDragListener\(HuaweiMap.OnMarkerDragListener\))(this)方法。要拖动标记，用户必须长按标记。当用户将手指从屏幕上移开时，标记将保持在该位置。拖动标记时，[onMarkerDragStart](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onmarkerdragl#onMarkerDragStart\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))最初调用。当标记被拖动时，[onMarkerDrag](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onmarkerdragl#onMarkerDrag\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))不断调用。在拖动结束时[onMarkerDragEnd](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onmarkerdragl#onMarkerDragEnd\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))调用。您可以随时通过调用[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker)的[getPosition](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker#getPosition\(\))()接口获取标记的位置。
      
      1. /** 
        2.  * Set Marker to be draggable 
        3.  */ 
        4. mMarker.setDraggable(true); 
        5. hMap.setOnMarkerDragListener(new HuaweiMap.OnMarkerDragListener() { 
        6.     @Override 
        7.     public void onMarkerDragStart(Marker marker) { 
        8.         Log.i(TAG, "onMarkerDragStart: "); 
        9.     } 
        10.     @Override 
        11.     public void onMarkerDrag(Marker marker) { 
        12.         Log.i(TAG, "onMarkerDrag: "); 
        13.     } 
        14.     @Override 
        15.     public void onMarkerDragEnd(Marker marker) { 
        16.         Log.i(TAG, "onMarkerDragEnd: "); 
        17.     } 
        18. });
    
    

## 2.6 信息窗

信息窗在标记上方的弹出窗口中显示文本或图像，为标记提供详细信息。

**添加信息窗**

添加信息窗的最简单方法是设置相应[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker)对象的[title](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#title\(String\))()和[snippet](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-markeroptions#snippet\(String\))()方法。设置这些属性将导致在单击该标记时显示信息窗。
      
      1. public void addMarker(View view) { 
        2.     if (null != mMarker) { 
        3.         mMarker.remove(); 
        4.     } 
        5.     MarkerOptions options = new MarkerOptions().position(new LatLng(48.893478, 2.334595)); 
        6.     options.title("Hello Huawei Map"); 
        7.     options.snippet("This is a snippet!"); 
        8.     mMarker = hMap.addMarker(options); 
        9. }
    
    

**显示/隐藏信息窗**

信息窗旨在响应用户触摸事件。可以通过调用[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker)对象的[showInfoWindow](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker#showInfoWindow\(\))()显示信息窗，可以通过调用[Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker)对象的[hideInfoWindow](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker#hideInfoWindow\(\))()隐藏信息窗。
      
      1. /** 
        2.  * Get the display status of the infoWindow 
        3.  */ 
        4. boolean isInfoWindowShown = mMarker.isInfoWindowShown(); 
        5. if (isInfoWindowShown) { 
        6.     mMarker.hideInfoWindow(); 
        7. } else { 
        8.     mMarker.showInfoWindow(); 
        9. }
    
    

**自定义信息窗**

可以自定义信息窗的内容。为此，您必须创建[InfoWindowAdapter](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa)接口的具体实现， 然后[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的 [setInfoWindowAdapter](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setInfoWindowAdapter\(HuaweiMap.InfoWindowAdapter\))()使用您的实现进行调用 。该接口包含两种实现方法：[getInfoWindow](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa#getInfoWindow\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))和[getInfoContents](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa#getInfoContents\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))。API将首先调用[getInfoWindow](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa#getInfoWindow\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))，如果返回null，则会调用[getInfoContents](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa#getInfoContents\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))。如果这也返回null，则将使用默认信息窗口。设计自定义信息窗的步骤如下：

  * 设置窗口或者内容的布局文件custom_info_window.xml或custom_info_contents.xml，实例代码仅演示[getInfoWindow](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa#getInfoWindow\(Marker\))([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))方法的实现。



      
      1. <?xml version="1.0" encoding="utf-8"?> 
        2. <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
        3.     android:layout_width="wrap_content" 
        4.     android:layout_height="wrap_content" 
        5.     android:background="@drawable/bg" 
        6.     android:orientation="horizontal"> 
        7.     <ImageView 
        8.         android:layout_width="wrap_content" 
        9.         android:layout_height="wrap_content" 
        10.         android:layout_marginRight="5dp" 
        11.         android:adjustViewBounds="true" 
        12.         android:src="@drawable/orange" /> 
        13.     <LinearLayout 
        14.         android:layout_width="wrap_content" 
        15.         android:layout_height="wrap_content" 
        16.         android:orientation="vertical"> 
        17.         <TextView 
        18.             android:id="@+id/txtv_titlee" 
        19.             android:layout_width="wrap_content" 
        20.             android:layout_height="wrap_content" 
        21.             android:layout_gravity="center_horizontal" 
        22.             android:ellipsize="end" 
        23.             android:singleLine="true" 
        24.             android:textColor="#ff000000" 
        25.             android:textSize="14sp" 
        26.             android:textStyle="bold" /> 
        27.         <TextView 
        28.             android:id="@+id/txtv_snippett" 
        29.             android:layout_width="wrap_content" 
        30.             android:layout_height="wrap_content" 
        31.             android:ellipsize="end" 
        32.             android:singleLine="true" 
        33.             android:textColor="#ff7f7f7f" 
        34.             android:textSize="14sp" /> 
        35.     </LinearLayout> 
        36. </LinearLayout>
    
    

  * 实现[HuaweiMap.InfoWindowAdapter](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimapinfowindowa)，样例如下：



      
      1. class CustomInfoWindowAdapter implements HuaweiMap.InfoWindowAdapter { 
        2.     private final View mWindow; 
        3.     CustomInfoWindowAdapter() { 
        4.         mWindow = getLayoutInflater().inflate(R.layout.custom_info_window, null); 
        5.     } 
        6.     @Override 
        7.     public View getInfoWindow(Marker marker) { 
        8.         TextView txtvTitle = mWindow.findViewById(R.id.txtv_titlee); 
        9.         TextView txtvSnippett = mWindow.findViewById(R.id.txtv_snippett); 
        10.         txtvTitle.setText("Paris"); 
        11.         txtvSnippett.setText("hello"); 
        12.         return mWindow; 
        13.     } 
        14.     @Override 
        15.     public View getInfoContents(Marker marker) { 
        16.         return null; 
        17.     } 
        18. } 
        19. /** 
        20.  * Method for setting custom information window. 
        21.  */ 
        22. hMap.setInfoWindowAdapter(new CustomInfoWindowAdapter());
    
    

华为地图SDK支持两种信息窗口，默认信息窗口，自定义信息窗口，如下图所示。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165407.86906373283257372165407105463841:50510629073514:2800:02F24F27699F8961CF4CB9291B02AB2EE042B808F93FE90F5A414BA17B9434C8.png?needInitFileName=true?needInitFileName=true)

图3：默认信息窗

  


![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165434.35946690763834649349594942713747:50510629073514:2800:DD8DD29D0FB378F06E4FD4E76EA3FAE347A131D81D3FFAEB79DF4FD40F90CE44.png?needInitFileName=true?needInitFileName=true)

图4：自定义信息窗

# 3 覆盖物

地图覆盖物是固定在地图上的图片 。

## 3.1 添加覆盖物

1\. 通过[BitmapDescriptorFactory](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptorf)来创建[BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptor)对象，创建方式包括：
      
      1. BitmapDescriptor descriptor = BitmapDescriptorFactory.fromAsset("images/avocado.jpg"); 
        2. BitmapDescriptor descriptor = BitmapDescriptorFactory.fromBitmap(bitmap); 
        3. BitmapDescriptor descriptor = BitmapDescriptorFactory.fromFile(fileName); 
        4. BitmapDescriptor descriptor = BitmapDescriptorFactory.fromPath(path); 
        5. BitmapDescriptor descriptor = BitmapDescriptorFactory.fromResource(R.drawable.makalong);
    
    

2. 创建一个[GroundOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo)对象来确定图像和位置：
      
      1. GroundOverlayOptions options = 
        2.     new GroundOverlayOptions().position(new LatLng(31.97480, 118.75682), 60, 30).image(descriptor);
    
    

3. 通过[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[addGroundOverlay](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#addGroundOverlay\(GroundOverlayOptions\))([GroundOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo) options)方法添加地图覆盖物，如下图所示，该方法将返回该[GroundOverlay](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlay)对象。
      
      1. private GroundOverlay mGroundOverlay; 
        2. //Add a groundoverlay to this map. 
        3. mGroundOverlay = hMap.addGroundOverlay(options);
    
    

在地图上添加覆盖物如图3所示：

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165501.00416740671293687410989573090268:50510629073514:2800:C48643F797F0A0181C8191A972366B818E1C1EDC21BCAD8603954E43F892C3A6.png?needInitFileName=true?needInitFileName=true)

图5：覆盖物

4. 修改和移除
      
      1. if (null != mGroundOverlay) { 
        2.     //Modify groundoverlay 
        3.     mGroundOverlay.setImage(BitmapDescriptorFactory.fromResource(R.drawable.makalong)); 
        4. } 
        5. if (null != mGroundOverlay) { 
        6.     //Remove groundoverlay 
        7.     mGroundOverlay.remove(); 
        8. }
    
    

5. 设置覆盖物位置的多种方式

①：public [GroundOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo) [position](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo#position\(LatLng,float\))([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) location, float width)

此方法会根据经纬度位置和图片宽度width参数（以米为单位）设置覆盖物。在显示时，图片的高度根据图片的宽高比例和width参数自动计算匹配。

②：public [GroundOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo) [position](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo#position\(LatLng,float,float\))([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) location, float width, float height)

此方法会根据经纬度位置、图片宽度width参数和图片高度height参数（均以米为单位）设置覆盖物。在显示时，图片会被缩放来适应指定的尺寸，图片可能会变形。

③：public [GroundOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo) [positionFromBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo#positionFromBounds\(LatLngBounds\))([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds) bounds)

此方法会指定一个[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)对象，该对象由两个[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)对象形成一个矩形区域，分别为西南角southwest和东北角northeast，此方法会根据该矩形区域设置覆盖物的位置。

  


注意：[position](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo#position\(LatLng,float\))([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) location, float width)和[position](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo#position\(LatLng,float,float\))([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) location, float width, float height)不可与[positionFromBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlayo#positionFromBounds\(LatLngBounds\))([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds) bounds)同时使用，否则会抛出IllegalStateException异常。

## 3.2 覆盖物事件

**覆盖物点击事件**

可以使用[HuaweiMap.OnGroundOverlayClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-ongroundoverlayclickl)来监听覆盖物上的点击事件。要在地图上设置此监听器，请调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[setOnGroundOverlayClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setOnGroundOverlayClickListener\(HuaweiMap.OnGroundOverlayClickListener\))(this)方法。当用户点击覆盖物时，[onGroundOverlayClick](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-ongroundoverlayclickl#onGroundOverlayClick\(GroundOverlay\))([GroundOverlay](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-groundoverlay))将调用该覆盖物并将覆盖物作为参数传递。如以下代码示例所示：
      
      1. hMap.setOnGroundOverlayClickListener(new HuaweiMap.OnGroundOverlayClickListener() { 
        2.     @Override 
        3.     public void onGroundOverlayClick(GroundOverlay groundOverlay) { 
        4.         Toast.makeText(getApplicationContext(), "GroundOverlay is clicked.", Toast.LENGTH_LONG).show(); 
        5.     } 
        6. });
    
    

# 4 形状

Huawei地图SDK支持为地图添加形状，主要包括三种形状：[Polyline](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline)、[Polygon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon)、[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)。

## 4.1 折线

[Polyline](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline)由若干个[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)对象连接形成的折线。

1\. 创建折线对象

代码样例：
      
      1. if (null == hMap) { 
        2.     return; 
        3. } 
        4. if (null != mPolyline) { 
        5.     mPolyline.remove(); 
        6.     mPolyline = null; 
        7. } 
        8. mPolyline = hMap.addPolyline(new PolylineOptions() 
        9.     .add(new LatLng(31.97480, 118.75682), new LatLng(31.97846, 118.76454), new LatLng(31.98559, 118.76613)) 
        10.     .color(Color.BLUE) 
        11.     .width(3));
    
    

如果您要在添加折线后更改折线的形状，可以调用[Polyline](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline)对象的[setPoints](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline#setPoints\(List<LatLng>\))()方法并为折线提供新的点列表。

2\. 折线点击事件

可以通过调用[Polyline](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline)对象的[setClickable](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline#setClickable\(boolean\))(boolean)方法来启用和禁用可点击性。要在地图上设置此监听器，请调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[setOnPolylineClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setOnPolylineClickListener\(HuaweiMap.OnPolylineClickListener\))([OnPolylineClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onpolylineclickl))方法。如以下代码示例所示：
      
      1. mPolyline.setClickable(true);   //Set polyline clickable 
        2. hMap.setOnPolylineClickListener(new HuaweiMap.OnPolylineClickListener() { 
        3.     @Override 
        4.     public void onPolylineClick(Polyline polyline) { 
        5.         Toast.makeText(getApplicationContext(), "Polyline is clicked.", Toast.LENGTH_LONG).show(); 
        6.     } 
        7. });
    
    

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165548.25601685463298060337164523568768:50510629073514:2800:8DD84D90CB0EEC7DDBA01E871552E8B2B2283EACF3970E098DD0E3AB8339403D.png?needInitFileName=true?needInitFileName=true)

图6：折线

## 4.2 多边形

[Polygon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon)对象与[Polyline](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline)对象类似，因为它们都是由一系列有序坐标组成，但是不同的是，多边形是内部填充的封闭形状。

1\. 创建多边形对象。

代码样例：
      
      1. if (null == hMap) { 
        2.     return; 
        3. } 
        4. if (null != mPolygon) { 
        5.     mPolygon.remove(); 
        6. } 
        7. mPolygon = hMap 
        8.     .addPolygon(new PolygonOptions().addAll(createRectangle(new LatLng(48.893478, 2.334595), 0.1, 0.1)) 
        9.         .fillColor(Color.GREEN) 
        10.         .strokeColor(Color.BLACK));
    
    

其中createRectangle()方法的实现如下：
      
      1. private List<LatLng> createRectangle(LatLng center, double halfWidth, double halfHeight) {
        2.     return Arrays.asList(new LatLng(center.latitude - halfHeight, center.longitude - halfWidth),
        3.         new LatLng(center.latitude - halfHeight, center.longitude + halfWidth),
        4.         new LatLng(center.latitude + halfHeight, center.longitude + halfWidth),
        5.         new LatLng(center.latitude + halfHeight, center.longitude - halfWidth));
        6. }
    
    

要在添加多边形后更改多边形的形状，可以调用 [Polygon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon)对象的[setPoints](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon#setPoints\(List<LatLng>\))()方法并为多边形的轮廓提供新的点列表。

2\. 多边形点击事件

默认情况下，多边形不可点击。可以通过调用[Polygon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon)对象的[setClickable](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon#setClickable\(boolean\))(boolean)方法来启用和禁用可点击性。要在地图上设置此监听器，需调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[setOnPolygonClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setOnPolygonClickListener\(HuaweiMap.OnPolygonClickListener\))([OnPolygonClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-onpolygonclickl))方法。如以下代码示例所示：
      
      1. mPolygon.setClickable(true);   //Set polygon clickable 
        2. hMap.setOnPolygonClickListener(new HuaweiMap.OnPolygonClickListener() { 
        3.     @Override 
        4.     public void onPolygonClick(Polygon polygon) { 
        5.         Toast.makeText(getApplicationContext(), "Polygon is clicked.", Toast.LENGTH_LONG).show(); 
        6.     } 
        7. });
    
    

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165643.37777391815581337484284778363398:50510629073514:2800:0A8452F904C20D71FD8A9BF61BEFE144A8E012430A9BC9CF2140D03B5BECBC46.png?needInitFileName=true?needInitFileName=true)

图7：多边形

## 4.3 圆

圆包括两种情况，一种是实心圆，一种是空心圆。默认是实心圆，可以用Circle属性进行控制。

1.创建圆对象

代码样例：
      
      1.  if (null == hMap) { 
        2.      return; 
        3.  } 
        4.  if (null != mCircle) { 
        5.      mCircle.remove(); 
        6.  } 
        7. mCircle = hMap.addCircle(new CircleOptions() 
        8.         .center(new LatLng(31.97846, 118.76454)) 
        9.         .radius(500) 
        10.         .fillColor(Color.GREEN));
    
    

如果开发者需要在添加[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)后更改[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)，可以调用[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)对象的[setCenter](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle#setCenter\(LatLng\))()、[setRadius](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle#setRadius\(double\))()等方法进行重新设置。

2\. 圆点击事件

默认情况下，[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)不可点击。 您可以通过使用[CircleOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circleoptions).[clickable](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circleoptions#clickable\(boolean\))(boolean)然后调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap).[addCircle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#addCircle\(CircleOptions\))([CircleOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circleoptions))方法，或通过调用[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle).[setClickable](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle#setClickable\(boolean\))(boolean)来启用和禁用圆的可点击性。

可以使用[OnCircleClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncircleclickl)监听可点击圆上的点击事件。 要在地图上设置此监听器，请调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[setOnCircleClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#setOnCircleClickListener\(HuaweiMap.OnCircleClickListener\))([OnCircleClickListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncircleclickl))方法。

用户点击圆时，您将收到[onCircleClick](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-oncircleclickl#onCircleClick\(Circle\))([Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle))方法的回调，代码示例所示：
      
      1. if (null != mCircle) { 
        2.     mCircle.setClickable(true);  //Set circle clickable 
        3.     hMap.setOnCircleClickListener(new HuaweiMap.OnCircleClickListener() { 
        4.         @Override 
        5.         public void onCircleClick(Circle circle) { 
        6.             if (circle.equals(mCircle)) { 
        7.                 Toast.makeText(getApplicationContext(), "Circle is clicked.", Toast.LENGTH_LONG).show(); 
        8.             } 
        9.         } 
        10.     }); 
        11. }
    
    

3\. 设置空心圆的方法：
      
      1. mCircle.setFillColor(Color.TRANSPARENT);  //Set the fill color of the circle to transparent 
        2. mCircle.setStrokeColor(int strokeColor);  //Set the stroke color of the circle 
        3. mCircle.setStrokeWidth(float strokeWidth); //Set the stroke width of the circle
    
    

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200330165718.91253700956531689457832140990203:50510629073514:2800:A1DBFA4ACF0DCEB9BF828B0D754DA431FFB0E0B771D47A7691BECD5AC3AF9D0B.png?needInitFileName=true?needInitFileName=true)

图8：圆

## 4.4 修改外观

**线条颜色**

华为地图SDK中支持设置[Polyline](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polyline)、[Polygon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon)、[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)的颜色。

示例代码：

1\. 多边形：
      
      1. Polygon mPolygon = hMap.addPolygon(new PolygonOptions().add(new LatLng(48.793478, 2.234595), new LatLng(48.793478, 2.434595), new LatLng(48.993478, 2.434595), new LatLng(48.993478, 2.234595)));
        2. mPolygon.setStrokeColor(Color.RED);
    
    

2\. 圆：
      
      1. Circle mCircle = hMap.addCircle(new CircleOptions().center(new LatLng(48.893478, 2.334595)).radius(500)); 
        2. mCircle.setStrokeColor(Color.RED);
    
    

3\. 折线：
      
      1. Polyline mPolyline = hMap.addPolyline(new PolylineOptions().add(new LatLng(31.97846, 118.76454), new LatLng(31.98559, 118.76613), new LatLng(31.97846, 118.75682))); 
        2. mPolyline.setColor(Color.RED); 
        3. mPolyline.setWidth(10);
    
    

**填充颜色**

可设置[Polygon](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-polygon)和[Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle)的填充颜色。

1\. 多边形：
      
      1. Polygon mPolygon = hMap.addPolygon(new PolygonOptions().add(new LatLng(48.793478, 2.234595), new LatLng(48.793478, 2.434595), new LatLng(48.993478, 2.434595), new LatLng(48.993478, 2.234595))); 
        2. mPolygon.setFillColor(Color.GREEN);
    
    

2\. 圆形：
      
      1. Circle mCircle = hMap.addCircle(new CircleOptions().center(new LatLng(48.893478, 2.334595)).radius(500)); 
        2. mCircle.setFillColor(Color.GREEN);
    
    

**线条样式**

华为地图SDK支持设置边框样式，下面代码以设置折线样式为例：
      
      1. List<PatternItem> linePattern = new ArrayList<>();
        2. PatternItem patternItemDash = new PatternItem(PatternItem.TYPE_DASH, 200);
        3. linePattern.add(patternItemDash);
        4. PatternItem patternItemDot = new PatternItem(PatternItem.TYPE_DOT, 10);
        5. linePattern.add(patternItemDot);
        6. PatternItem patternItemGap = new PatternItem(PatternItem.TYPE_GAP, 10);
        7. linePattern.add(patternItemGap);
        8. mPolyline = hMap.addPolyline(new PolylineOptions().add(new LatLng(47.893478, 2.334595),
        9.     new LatLng(48.993478, 3.434595), new LatLng(48.693478, 2.134595), new LatLng(48.793478, 2.334595)));
        10. mPolyline.setPattern(linePattern);
    
    

# 5 瓦片图层

瓦片图层是显示在基础地图瓦片上方的图像集合 。

## 5.1 添加瓦片图层

1\. 创建[TileProvider](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-tileprovider)对象并重写[getTile](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-tileprovider#getTile\(int,int,int\))()方法以构造瓦片图层。
      
      1. final List<Point> mPoints = new ArrayList<Point>(); 
        2. int mTileSize = 256; 
        3. final int mScale = 1; 
        4. final int mDimension = mScale * mTileSize; 
        5. TileProvider mTileProvider = new TileProvider() { 
        6.     @Override 
        7.     public Tile getTile(int x, int y, int zoom) { 
        8.         Log.e(TAG, "getTile enter!"); 
        9.         Matrix matrix = new Matrix(); 
        10.         float scale = (float) Math.pow(2, zoom) * mScale; 
        11.         matrix.postScale(scale, scale); 
        12.         matrix.postTranslate(-x * mDimension, -y * mDimension); 
        13.         final Bitmap bitmap = Bitmap.createBitmap(mDimension, mDimension, Bitmap.Config.RGB_565); 
        14.         bitmap.eraseColor(Color.parseColor("#024CFF")); 
        15.         Canvas c = new Canvas(bitmap); 
        16.         c.setMatrix(matrix); 
        17.         for (Point p : mPoints) { 
        18.             c.drawCircle((float) p.x, (float) p.y, 1, new Paint()); 
        19.         } 
        20.         ByteArrayOutputStream baos = new ByteArrayOutputStream(); 
        21.         bitmap.compress(Bitmap.CompressFormat.PNG, 100, baos); 
        22.         Log.e(TAG, "getTile exit!"); 
        23.         return new Tile(mDimension, mDimension, baos.toByteArray()); 
        24.     } 
        25. };
    
    

2\. 创建[TileOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-tileoverlayo)对象来确定瓦片图层、透明度、透明度更改时淡入淡出动画等属性。
      
      1. TileOverlayOptions options = 
        2.     new TileOverlayOptions().tileProvider(mTileProvider).transparency(0.5f).fadeIn(true);
    
    

3\. 通过[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)对象的[addTileOverlay](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap#addTileOverlay\(TileOverlayOptions\))([TileOverlayOptions](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-tileoverlayo) options)方法添加瓦片图层，如下图所示，该方法将返回该[TileOverlay](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-tileoverlay)对象。
      
      1. mTileOverlay = hMap.addTileOverlay(options);
    
    

## 5.2 修改瓦片图层

华为地图SDK支持在添加瓦片图层之后，修改已经设置的瓦片图层属性。
      
      1. //Modify transparency 
        2. if (null != mTileOverlay) { 
        3.     mTileOverlay.setTransparency(0.3f); 
        4. } 
        5. //Fade animation on or off 
        6. if (null != mTileOverlay) { 
        7.     mTileOverlay.setFadeIn(false); 
        8. } 
        9. //Set tile layer visibility 
        10. if (null != mTileOverlay) { 
        11.     mTileOverlay.setVisible(false); 
        12. }
    
    

## 5.3 移除瓦片图层

当不需要瓦片图层时，你可以调用以下方法移除图层：
      
      1. if (null != mTileOverlay) { 
        2.     mTileOverlay.remove(); 
        3. }
    
    

如果瓦片图层指示的图块变得“陈旧”，例如图块改变，您可以调用[clearTileCache](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-tileoverlay#clearTileCache\(\))()强制刷新，重新加载此瓦片图层上的所有图块。
      
      1. if (null != mTileOverlay) { 
        2.     mTileOverlay.clearTileCache(); 
        3. }
    
    

  

