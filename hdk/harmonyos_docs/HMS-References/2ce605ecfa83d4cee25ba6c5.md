---
name: document/cn/HMS-References/hms-map-polyline
title: Polyline
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-polyline
source: portal
---

**public final class Polyline**  
  
折线是一个点列表，其中线段在连续点之间绘制。折线具有以下属性：

Name| Description  
---|---  
Points| 线的端点，以实现在连续的点之间绘制线段。折线默认不闭合; 要形成闭合折线，起点和终点必须相同。  
Width| 屏幕像素中的线段宽度。宽度是固定的，与相机的缩放级别无关。默认值为10。  
Color| ARGB格式的线段颜色。默认值为黑色（0xff000000）。  
Visibility| 指示折线是可见还是不可见，即是否在地图上绘制。不绘制不可见的折线，但保留其所有其他属性。默认值是true，即可见。  
Clickability| 如果要处理用户单击折线时触发的事件，请将此属性设置为true。可以随时更改此值，默认是 false。  
Tag| 一个与折线相关的对象。例如，它可以包含有关折线表示的内容的数据。这比存储单独的Map更容易。  
  
## Public Fields

无

## Constructor

无

## Public Method Summary

Return type| Method name  
---|---  
boolean| equals(Object other)  
int| getColor()  
[Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap)| getEndCap()  
String| getId()  
int| getJointType()  
List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-patternitem)>| getPattern()  
List<[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)>| getPoints()  
[Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap)| getStartCap()  
Object| getTag()  
float| getWidth()  
float| getZIndex()  
int| hashCode()  
boolean| isClickable()  
boolean| isGeodesic()  
boolean| isVisible()  
void| remove()  
void| setClickable(boolean clickable)  
void| setColor(int color)  
void| setEndCap([Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap) endCap)  
void| setGeodesic(boolean geodesic)  
void| setJointType(int jointType)  
void| setPattern(List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-patternitem)> pattern)  
void| setPoints(List<[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)> points)  
void| setStartCap([Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap) startCap)  
void| setTag(Object tag)  
void| setVisible(boolean visible)  
void| setWidth(float width)  
void| setZIndex(float zIndex)  
  
## Public Methods

Method  
---  
public boolean equals(Object other)  
判断两个折线对象是否相等。  
  
  
**Parameters：**  


Parameter name| Parameter desc  
---|---  
other| 另一对象名称。  
  
  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 折线对象是否相等。true为相等，false为不相等。  
Method  
---  
public int getColor()  
开发者调用此API可以获取折线的颜色。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
int| ARGB格式颜色值。  
Method  
---  
public Cap getEndCap()  
开发者调用此API可以获取折线的末尾端点。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
[Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap)| 折线的末尾端点。  
Method  
---  
public String getId()  
开发者调用此API可以获取折线id，该id在地图上的所有标记中都是唯一的。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
String| 折线的id。  
Method  
---  
public int getJointType()  
开发者调用此API可以获取折线除起始和结束顶点之外的所有顶点的节点类型。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
int| 表示折线的节点类型，默认值为DEFAULT。  
Method  
---  
public List<PatternItem> getPattern()  
开发者调用此API可以获取折线的样式。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-patternitem)>| 折线的样式。  
Method  
---  
public List<LatLng> getPoints()  
开发者调用此API可以获取折线顶点的集合。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
List<[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)>| 一组折线的顶点的集合。  
Method  
---  
public Cap getStartCap()  
开发者调用此API可以获取折线的起始端点。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
[Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap)| 折线的起始端点。  
Method  
---  
public Object getTag()  
当开发者已给折线设置tag属性,调用此API将获取该tag属性(如果已设置)。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
Object| 如果已设置tag，则返回Object；如果未设置，则返回null。  
Method  
---  
public float getWidth()  
开发者调用此API可以获取折线的宽度。  
  
  
  
**Parameters：**

无

**Return：**  


Return type| Parameter desc  
---|---  
float| 表示折线的宽度，以像素为单位。注意：此接口返回的折线宽度为实际宽度的1/3。  
Method  
---  
public float getZIndex()  
开发者调用此API可以获取折线的z指数。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
float| z指数，即折线的叠加顺序。  
Method  
---  
public int hashCode()  
开发者调用此API可以获取折线的哈希值。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
int| 表示折线的哈希值。  
Method  
---  
public boolean isClickable()  
开发者调用此API可以获取折线的可点击性。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 折线的可点击性，true为可点击，false为不可点击。  
Method  
---  
public boolean isGeodesic()  
开发者调用此API可以获取是否将折线的每个线段绘制为大地线。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 如果每条线段都绘制为大地线，则返回true；反之，则返回false。  
Method  
---  
public boolean isVisible()  
开发者调用此API可以获取折线的可见性。  
  
  
**Parameters：**  
无  
**Return：**  


Return type| Parameter desc  
---|---  
boolean| 折线的可见性，true为可见，false为不可见。  
Method  
---  
public void remove()  
从地图中删除此折线。删除折线后，其所有方法的行为都会消失。  
  
  
**Parameters：**  
无  
**Return：**  
无

Method  
---  
public void setClickable(boolean clickable)  
开发者调用此API可以设置折线的可点击性。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
clickable| 可点击性，默认值为false。  
  
  
**Return：**  
无

Method  
---  
public void setColor(int color)  
开发者调用此API可以设置折线的颜色。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
color| ARGB格式颜色值，默认值为黑色（0xff000000）。  
  
  
**Return：**  
无

Method  
---  
public void setEndCap([Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap) endCap)  
开发者调用此API可以设置折线的末尾端点，默认末尾端点为[ButtCap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-buttcap)。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
endCap| 末尾端点。  
  
  
**Return：**  
无

Method  
---  
public void setGeodesic(boolean geodesic)  
开发者调用此API可以设置是否将折线的每个线段绘制为大地线。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
geodesic| 如果为true，则每段绘制为大地线；如果为false，则不是大地线。  
  
  
**Return：**  
无

Method  
---  
public void setJointType(int jointType)  
设置折线除起始和结束顶点之外的所有顶点的节点类型，有关允许的值，请参见[JointType](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-jointtype)。如果节点类型未定义或不是允许值之一，则将使用默认值DEFAULT。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
jointType| 节点类型，默认值为DEFAULT。  
  
  
**Return：**  
无

Method  
---  
public void setPattern(List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-patternitem)> pattern)  
开发者调用此API可以设置折线的样式，默认的样式为实心，用null表示 。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
pattern| [PatternItem](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-patternitem)对象的集合。  
  
  
**Return：**  
无

Method  
---  
public void setPoints(List<[LatLng](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-latlng)> points)  
开发者调用此API可以设置折线的顶点坐标。  
  
  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
points| 折线顶点的集合。  
  
  
**Return：**  
无

Method  
---  
public void setStartCap([Cap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-cap) startCap)  
开发者调用此API可以设置折线的起始端点，默认起始端点为[ButtCap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-buttcap)。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
startCap| 起始端点。  
  
  
**Return：**  
无

Method  
---  
public void setTag(Object tag)  
开发者调用此API可以设置折线的tag属性，如果为null，则清除tag。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
tag| 折线的tag属性。  
  
  
**Return：**  
无

Method  
---  
public void setVisible(boolean visible)  
设置折线的可见性。如果折线不可见，则不会绘制，其他所有状态均保留。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
visible| 折线的可见性，默认为true。  
  
  
**Return：**  
无

Method  
---  
public void setWidth(float width)  
开发者调用此API可以设置折线的宽度。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
width| 折线的宽度，以像素为单位，默认值为10像素。注意：为兼容性考虑，此接口设置的折线实际宽度为设置值width的三倍。  
  
  
**Return：**  
无

Method  
---  
public void setZIndex(float zIndex)  
用于设置折线的z指数。z指数指的是折线的叠加顺序，具有较大z指数的折线会绘制在具有较小z指数的折线上，具有相同z指数的叠加顺序是任意的。默认的z指数是0。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
zIndex| z指数，即折线的叠加顺序。  
  
  
**Return：**  
无
