---
name: document/cn/HMS-References/hms-map-cameraposition
title: CameraPosition
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-cameraposition
source: portal
---

**public class CameraPosition**  
  
一个封装了相机所有属性的不可变类。

## Public Fields

Name| Type| Description  
---|---|---  
bearing| public final float| 相机指向的方向。  
target| public final [LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)| 相机指向的经纬度坐标。  
tilt| public final float| 相机角度与垂直于地球表面的线的夹角。  
zoom| public final float| 屏幕中心附近的缩放级别。  
  
## Constructor

Construction Method  
---  
CameraPosition([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) target, float zoom, float tilt, float bearing)  
  
## Public Method Summary

Return type| Method name  
---|---  
static [CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)| builder()  
static [CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)| builder(CameraPosition camera)  
static CameraPosition| createFromAttributes(Context context, AttributeSet attrs)  
boolean| equals(Object o)  
static CameraPosition| fromLatLngZoom([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) target, float zoom)。  
int| hashCode()  
String| toString()  
void| writeToParcel(Parcel out, int flags)  
  
## Exception

Exception Type| Scenario  
---|---  
NullPointerException| 当传入的target为null时。  
IllegalArgumentException| 当传入的tilt不在0到90度之间时。  
  
## Nested Class Summary

Class| Function  
---|---  
[CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)| 用于创建CameraPosition对象  
  
## Public Methods

Method  
---  
public static CameraPosition.Builder builder()  
开发者调用此API可以获取一个[CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)对象，用于修改相机参数。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
[CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)| CameraPosition.Builder对象。  
Method  
---  
public static CameraPosition.Builder builder(CameraPosition camera)  
开发者调用此API可以通过指定的CameraPosition创建一个[CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)对象。  
  
  
**Parameters：**  


Parameter name| Parameter desc  
---|---  
camera| 用于初始化Builder的CameraPosition对象。  
  
**Return：**

Return type| Parameter desc  
---|---  
[CameraPosition.Builder](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-camerapositionb)| CameraPosition.Builder对象。  
Method  
---  
public static CameraPosition createFromAttributes(Context context, AttributeSet attrs)  
开发者调用此API可以自定义CameraPosition对象属性。  
  
  
**Parameters：**  


Parameter name| Parameter desc  
---|---  
context| 上下文。  
attrs| 用于指定CameraPosition的属性。  
  
**Return：**

Return type| Parameter desc  
---|---  
CameraPosition| CameraPosition对象。  
Method  
---  
public static CameraPosition fromLatLngZoom(LatLng target, float zoom)  
开发者调用此API可以通过指定的经纬度和缩放级别来创建CameraPosition对象。  
  
  
**Parameters：**  


Parameter name| Parameter desc  
---|---  
target| 经纬度。  
zoom| 缩放级别。  
  
**Return：**

Return type| Parameter desc  
---|---  
CameraPosition| CameraPosition对象。
