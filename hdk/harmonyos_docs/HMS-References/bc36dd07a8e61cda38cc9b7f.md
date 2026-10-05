---
name: document/cn/HMS-References/hms-map-groundoverlay
title: GroundOverlay
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-groundoverlay
source: portal
---

**public final class GroundOverlay**  
  
叠加在地图上的图像类。

## Public Fields

无

## Constructor

无

## Public Method Summary

Return type| Method name  
---|---  
boolean| equals(Object other)  
float| getBearing()  
[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)| getBounds()  
float| getHeight()  
String| getId()  
[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)| getPosition()  
Object| getTag()  
float| getTransparency()  
float| getWidth()  
float| getZIndex()  
int| hashCode()  
boolean| isClickable()  
boolean| isVisible()  
void| remove()  
void| setBearing(float bearing)  
void| setClickable(boolean clickable)  
void| setDimensions(float width, float height)  
void| setDimensions(float width)  
void| setImage([BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptor) imageDescriptor)  
void| setPosition([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) latLng)  
void| setPositionFromBounds([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds) bounds)  
void| setTag(Object tag)  
void| setTransparency(float transparency)  
void| setVisible(boolean visible)  
void| setZIndex(float zIndex)  
  
## Public Methods

Method  
---  
public boolean equals(Object other)  
判断两个覆盖物对象是否相等。  
  
  
**Parameters：**  


Parameter name| Parameter desc  
---|---  
other| 另一对象名称。  
  
  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 覆盖物对象是否相等。true为相等，false为不相等。  
Method  
---  
public float getBearing()  
开发者调用此API可以获取覆盖物的角度。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
float| 覆盖物的角度。  
Method  
---  
public LatLngBounds getBounds()  
开发者调用此API可以获取覆盖物的矩形区域。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds)| 覆盖物的矩形区域。  
Method  
---  
public float getHeight()  
开发者调用此API可以获取覆盖物的高。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
float| 覆盖物的高度，单位：米。  
Method  
---  
public String getId()  
开发者调用此API可以获取覆盖物的id属性，该id在地图上的所有覆盖物中都是唯一的。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
String| 覆盖物的id。  
Method  
---  
public LatLng getPosition()  
开发者调用此API可以获取覆盖物的位置信息。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)| 覆盖物的经纬度。  
Method  
---  
public float getTransparency()  
开发者调用此API可以获取覆盖物的透明度。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
float| 覆盖物的透明度，范围为[0,1]，0为不透明，1为全透明。  
Method  
---  
public Object getTag()  
当开发者已给覆盖物设置tag属性,调用此API将获取该tag属性。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
Object| 如果已设置tag，则返回Object；如果未设置，则返回null。  
Method  
---  
public float getWidth()  
开发者调用此API可以获取覆盖物的宽度。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
float| 覆盖物的宽度，单位：米。  
Method  
---  
public float getZIndex()  
开发者调用此API可以获取覆盖物的z指数。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
float| z指数，即覆盖物的叠加顺序。  
Method  
---  
public int hashCode()  
开发者调用此API可以获取覆盖物的哈希值。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
int| 表示覆盖物的哈希值。  
Method  
---  
public boolean isClickable()  
开发者调用此API可以获取覆盖物的可点击性。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 覆盖物的可点击性，true为可点击，false为不可点击。  
Method  
---  
public boolean isVisible()  
开发者调用此API可以获取覆盖物的可见性。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 覆盖物的可见性，true为可见，false为不可见。  
  
Method  
---  
public void remove()  
开发者调用此API可以将覆盖物从地图上移除。  
  
  
**Parameters：**  
无  
**Return：**  
无

Method  
---  
public void setBearing(float bearing)  
开发者调用此API可以设置覆盖物从正北顺时针的角度。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
bearing| 覆盖物从正北顺时针的角度，范围为[0,360)，默认值为0。  
  
  
**Return：**  
无

Method  
---  
public void setClickable(boolean clickable)  
开发者调用此API可以设置覆盖物的可点击性。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
clickable| 可点击性。  
  
  
**Return：**  
无

Method  
---  
public void setDimensions(float width, float height)  
开发者调用此API可以设置覆盖物的宽高，图片会被拉伸，可能不会保留之前的图片比例。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
width| 覆盖物的宽度，单位：米。  
height| 覆盖物的高度，单位：米。  
  
  
**Return：**  
无

Method  
---  
public void setDimensions(float width)  
开发者调用此API可以设置覆盖物的宽度, 覆盖物的高度根据图片的比例自动变化。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
width| 覆盖物的宽度，单位：米。  
  
  
**Return：**  
无

Method  
---  
public void setImage([BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-bitmapdescriptor) imageDescriptor)  
开发者调用此API可以置覆盖物的图片信息，新图片会使用老图片的矩形区域。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
imageDescriptor| 图片对象。  
  
  
**Return：**  
无

Method  
---  
public void setPosition([LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng) latLng)  
开发者调用此API可以设置覆盖物的位置，覆盖物的其他属性不变。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
latLng| 覆盖物的位置。  
  
  
**Return：**  
无

Method  
---  
public void setPositionFromBounds([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlngbounds) bounds)  
根据矩形区域设置覆盖物的位置。当定位时忽略旋转的角度，但绘制覆盖物时仍会使用它。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
bounds| 覆盖物位置的矩形区域。  
  
  
**Return：**  
无

Method  
---  
public void setTag(Object tag)  
开发者调用此API可以设置覆盖物的tag属性，如果为null，则清除tag。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
tag| 覆盖物的tag属性。  
  
  
**Return：**  
无

Method  
---  
public void setTransparency(float transparency)  
设置覆盖物的透明度，范围为[0,1]，0为不透明，1为全透明，默认为0。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
transparency| 覆盖物的透明度。  
  
  
**Return：**  
无

Method  
---  
public void setVisible(boolean visible)  
开发者调用此方法来设置覆盖物的可见性，如果覆盖物不可见，则不会绘制，其他所有状态均保留。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
visible| 可见性。  
  
  
**Return：**  
无

Method  
---  
public void setZIndex(float zIndex)  
用于设置覆盖物的z指数。z指数指的是覆盖物的叠加顺序，具有较大z指数的覆盖物会绘制在具有较小z指数的覆盖物上，具有相同z指数的叠加顺序是任意的。默认的z指数是0。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
zIndex| z指数，即覆盖物的叠加顺序。  
  
  
**Return：**  
无
