---
name: document/cn/HMSCore-References/polygonoptions-0000001050153037
title: PolygonOptions
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/polygonoptions-0000001050153037
---

# PolygonOptions

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------|
|public class PolygonOptions 用于描述[Polygon](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/polygon-0000001050151020)属性的类。|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------|
|PolygonOptions() PolygonOptions类的默认构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:----------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|PolygonOptions|[add](#section16654164445112)([LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)... points) 设置多边形的多个顶点。|
|PolygonOptions|[add](#section1019721914520)([LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800) point) 使多边形包含某个顶点。|
|PolygonOptions|[addAll](#section11151141725712)(Iterable<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)> points) 使某个多边形包含一组顶点。|
|PolygonOptions|[addHole](#section874319100586)(Iterable<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)> points) 使某个多边形包含一组空心洞。|
|PolygonOptions|[clickable](#section12764124915819)(boolean clickable) 设置多边形的可点击性。|
|PolygonOptions|[fillColor](#section129413288114)(int color) 设置多边形的填充色。|
|PolygonOptions|[geodesic](#section01622087214)(boolean geodesic) 设置是否将多边形的每个线段绘制为大地线。|
|List<List<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)>>|[getHoles](#section1110712151531)() 获取地图上多边形的空心洞。|
|List<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)>|[getPoints](#section915202713413)() 获取多边形的所有顶点位置。|
|List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/patternitem-0000001050152951)>|[getStrokePattern](#section1473217443519)() 获取多边形的边框样式。|
|PolygonOptions|[strokeColor](#section147551851285)(int color) 设置多边形的边框颜色。|
|PolygonOptions|[strokeJointType](#section590852719910)(int jointType) 设置多边形的节点类型。|
|PolygonOptions|[strokePattern](#section55016211102)(List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/patternitem-0000001050152951)> pattern) 设置多边形的边框样式。|
|PolygonOptions|[strokeWidth](#section208221238141011)(float width) 设置多边形的边框宽度。|
|PolygonOptions|[visible](#section128711841191217)(boolean visible) 设置多边形的可见性。|
|PolygonOptions|[zIndex](#section98173041518)(float zIndex) 设置多边形的z指数。|

## Public Methods

### add(LatLng... points)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public PolygonOptions add([LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)... points) 您调用此API可以设置多边形的多个顶点。|

**Parameters**

|Name|Description|
|:-----|:----------|
|points|数个顶点的经纬度坐标。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|包含指定的一些顶点的PolygonOptions对象。|

### add(LatLng point)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|public PolygonOptions add([LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800) point) 您调用此API可以使多边形包含某个顶点。|

**Parameters**

|Name|Description|
|:----|:----------|
|point|顶点坐标。|

**Return** **s**

|Type|Description|
|:-------------|:-----------------------|
|PolygonOptions|包含某个顶点的PolygonOptions对象。|

### addAll

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public PolygonOptions addAll(Iterable<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)> points) 您调用此API可以使某个多边形包含一组顶点。|

**Parameters**

|Name|Description|
|:-----|:----------|
|points|一组顶点。|

**Return** **s**

|Type|Description|
|:-------------|:-----------------------|
|PolygonOptions|包含一组顶点的PolygonOptions对象。|

### addHole

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public PolygonOptions addHole(Iterable<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)> points) 您调用此API可以使某个多边形包含一组空心洞。|

**Parameters**

|Name|Description|
|:-----|:----------|
|points|一组空心洞。|

**Return** **s**

|Type|Description|
|:-------------|:------------------------|
|PolygonOptions|包含一组空心洞的PolygonOptions对象。|

### clickable

|Method|
|:----------------------------------------------------------------------|
|public PolygonOptions clickable(boolean clickable) 您调用此API可以设置多边形的可点击性。|

**Parameters**

|Name|Description|
|:--------|:---------------------------------------|
|clickable|可点击性。 * true：可点击 * false：不可点击 默认值为false。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|设置新可点击属性后的PolygonOptions对象。|

### fillColor

|Method|
|:-------------------------------------------------------------|
|public PolygonOptions fillColor(int color) 您调用此API可以设置多边形的填充色。|

**Parameters**

|Name|Description|
|:----|:-------------------------------|
|color|ARGB格式颜色值，默认填充色为透明色（0x00000000）。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|设置新的填充颜色后的PolygonOptions对象。|

### geodesic

|Method|
|:-----------------------------------------------------------------------------|
|public PolygonOptions geodesic(boolean geodesic) 您调用此API可以设置是否将多边形的每个线段绘制为大地线。|

**Parameters**

|Name|Description|
|:-------|:-----------------------------------------|
|geodesic|* true：每段绘制为大地线。 * false：不是大地线。 默认值为false。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------------|
|PolygonOptions|设置新的geodesic属性后的PolygonOptions对象。|

### getHoles

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<List<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)>> getHoles() 您调用此API可以获取地图上多边形的空心洞。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|List<List<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)>>|多边形的空心洞。|

### getPoints

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)> getPoints() 您调用此API可以获取多边形的所有顶点位置。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------|:----------|
|List<[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)>|多边形所有顶点的集合。|

### getStrokePattern

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/patternitem-0000001050152951)> getStrokePattern() 您调用此API可以获取多边形的边框样式。|

**Return** **s**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------|:----------|
|List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/patternitem-0000001050152951)>|多边形的边框样式。|

### strokeColor

|Method|
|:----------------------------------------------------------------|
|public PolygonOptions strokeColor(int color) 您调用此API可以设置多边形的边框颜色。|

**Parameters**

|Name|Description|
|:----|:---------------------------|
|color|ARGB格式颜色值，默认为黑色（0xff000000）。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|设置新的边框颜色后的PolygonOptions对象。|

### strokeJointType

|Method|
|:------------------------------------------------------------------------|
|public PolygonOptions strokeJointType(int jointType) 您调用此API可以设置多边形的节点类型。|

**Parameters**

|Name|Description|
|:--------|:----------------------------------------------------------------------------------------------------------------------------------|
|jointType|节点类型，默认值为[DEFAULT](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/jointtype-0000001050152743#section103572813326)。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|设置新的节点类型后的PolygonOptions对象。|

### strokePattern

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public PolygonOptions strokePattern(List<[PatternItem](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/patternitem-0000001050152951)> pattern) 您调用此API可以设置多边形的边框样式。|

**Parameters**

|Name|Description|
|:------|:-----------------------------------------------------------------------------------------------------------------------------------|
|pattern|[PatternItem](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/patternitem-0000001050152951)对象的集合。默认的边框样式为实心，用null表示。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|设置新的边框样式后的PolygonOptions对象。|

### strokeWidth

|Method|
|:------------------------------------------------------------------|
|public PolygonOptions strokeWidth(float width) 您调用此API可以设置多边形的边框宽度。|

**Parameters**

|Name|Description|
|:----|:----------------------|
|width|多边形的边框宽度，单位：像素，默认为10像素。|

**Return** **s**

|Type|Description|
|:-------------|:--------------------------|
|PolygonOptions|设置新的边框宽度后的PolygonOptions对象。|

### visible

|Method|
|:------------------------------------------------------------------------------------------|
|public PolygonOptions visible(boolean visible) 您调用此API可以设置多边形的可见性，如果多边形不可见，则不会绘制，其他所有状态均保留。|

**Parameters**

|Name|Description|
|:------|:--------------|
|visible|多边形的可见性，默认值为可见。|

**Return** **s**

|Type|Description|
|:-------------|:-------------------------|
|PolygonOptions|设置新的可见性后的PolygonOptions对象。|

### zIndex

|Method|
|:------------------------------------------------------------------------------------------------------------------------|
|public PolygonOptions zIndex(float zIndex) 用于设置多边形的z指数。z指数指的是多边形的叠加顺序，具有较大z指数的多边形会绘制在具有较小z指数的多边形上，具有相同z指数的叠加顺序为元素添加的先后顺序。|

**Parameters**

|Name|Description|
|:-----|:----------------------|
|zIndex|z指数，即多边形的叠加顺序。默认的z指数是0。|

**Return** **s**

|Type|Description|
|:-------------|:-------------------------|
|PolygonOptions|设置新的z指数后的PolygonOptions对象。|

