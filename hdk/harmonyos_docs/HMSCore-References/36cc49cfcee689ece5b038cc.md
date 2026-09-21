---
name: document/cn/HMSCore-References/groundoverlay-0000001050150678
title: GroundOverlay
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/groundoverlay-0000001050150678
---

# GroundOverlay

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class GroundOverlay 叠加在地图上的图像类，在调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757)类的[addGroundOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/huaweimap-0000001050151757#section374112486409)方法时会返回该类型的实例。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[equals](#section1631196204012)(Object other) 判断两个覆盖物对象是否相等。|
|float|[getBearing](#section47162554391)() 获取覆盖物的角度。|
|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808)|[getBounds](#section1437364753911)() 获取覆盖物的矩形区域。|
|float|[getHeight](#section1786016343394)() 获取覆盖物的高。|
|String|[getId](#section5514162863912)() 获取覆盖物的ID属性。|
|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)|[getPosition](#section1422515195398)() 获取覆盖物的位置信息。|
|Object|[getTag](#section182571159123818)() 获取tag属性。|
|float|[getTransparency](#section176028810392)() 获取覆盖物的透明度。|
|float|[getWidth](#section10294105218386)() 获取覆盖物的宽度。|
|float|[getZIndex](#section1132764615389)() 获取覆盖物的z指数。|
|int|[hashCode](#section10415133293811)() 获取覆盖物的哈希值。|
|boolean|[isClickable](#section4812182453810)() 获取覆盖物的可点击性。|
|boolean|[isVisible](#section1931111673818)() 获取覆盖物的可见性。|
|void|[remove](#section137601858123719)() 将覆盖物从地图上移除。|
|void|[setBearing](#section1239854733712)(float bearing) 设置覆盖物从正北顺时针的角度。|
|void|[setClickable](#section45409352378)(boolean clickable) 设置覆盖物的可点击性。|
|void|[setDimensions](#section6919112773713)(float width, float height) 设置覆盖物的宽高。|
|void|[setDimensions](#section0141102153714)(float width) 设置覆盖物的宽度。|
|void|[setImage](#section1281711313376)([BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/bitmapdescriptor-0000001050152403) imageDescriptor) 置覆盖物的图片信息，新图片会使用老图片的矩形区域。|
|void|[setPosition](#section141766412377)([LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800) latLng) 设置覆盖物的位置，覆盖物的其他属性不变。|
|void|[setPositionFromBounds](#section977685511362)([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808) bounds) 根据矩形区域设置覆盖物的位置。|
|void|[setTag](#section85441446203618)(Object tag) 设置覆盖物的tag属性。|
|void|[setTransparency](#section497274010365)(float transparency) 设置覆盖物的透明度。|
|void|[setVisible](#section312643417368)(boolean visible) 设置覆盖物的可见性。|
|void|[setZIndex](#section61641226133617)(float zIndex) 设置覆盖物的z指数。|

## Public Methods

### equals

|Method|
|:-------------------------------------------------|
|public boolean equals(Object other) 判断两个覆盖物对象是否相等。|

**Parameters**

|Name|Description|
|:----|:----------|
|other|另一对象。|

**Return** **s**

|Type|Description|
|:------|:-------------------------------|
|boolean|覆盖物对象是否相等。 * true：相等 * false：不相等|

### getBearing

|Method|
|:-------------------------------------------|
|public float getBearing() 您调用此API可以获取覆盖物的角度。|

**Return** **s**

|Type|Description|
|:----|:----------|
|float|覆盖物的角度。|

### getBounds

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|public [LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808) getBounds() 您调用此API可以获取覆盖物的矩形区域。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808)|覆盖物的矩形区域。|

### getHeight

|Method|
|:-----------------------------------------|
|public float getHeight() 您调用此API可以获取覆盖物的高。|

**Return** **s**

|Type|Description|
|:----|:-----------|
|float|覆盖物的高度，单位：米。|

### getId

|Method|
|:-------------------------------------------------------------|
|public String getId() 您调用此API可以获取覆盖物的ID属性，该ID在地图上的所有覆盖物中都是唯一的。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|覆盖物的ID。|

### getPosition

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------|
|public [LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800) getPosition() 您调用此API可以获取覆盖物的位置信息。|

**Return** **s**

|Type|Description|
|:------------------------------------------------------------------------------------------------|:----------|
|[LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800)|覆盖物的经纬度。|

### getTag

|Method|
|:-----------------------------------------------------|
|public Object getTag() 当您已给覆盖物设置tag属性，调用此API将获取该tag属性。|

**Return** **s**

|Type|Description|
|:-----|:--------------------------------|
|Object|如果已设置tag，则返回Object；如果未设置，则返回null。|

### getTransparency

|Method|
|:-------------------------------------------------|
|public float getTransparency() 您调用此API可以获取覆盖物的透明度。|

**Return** **s**

|Type|Description|
|:----|:-------------------------------|
|float|覆盖物的透明度，取值范围：[0, 1]，0为不透明，1为全透明。|

### getWidth

|Method|
|:-----------------------------------------|
|public float getWidth() 您调用此API可以获取覆盖物的宽度。|

**Return** **s**

|Type|Description|
|:----|:-----------|
|float|覆盖物的宽度，单位：米。|

### getZIndex

|Method|
|:-------------------------------------------|
|public float getZIndex() 您调用此API可以获取覆盖物的z指数。|

**Return** **s**

|Type|Description|
|:----|:-------------|
|float|z指数，即覆盖物的叠加顺序。|

### hashCode

|Method|
|:----------------------------------------|
|public int hashCode() 您调用此API可以获取覆盖物的哈希值。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|表示覆盖物的哈希值。|

### isClickable

|Method|
|:------------------------------------------------|
|public boolean isClickable() 您调用此API可以获取覆盖物的可点击性。|

**Return** **s**

|Type|Description|
|:------|:--------------------------------|
|boolean|覆盖物的可点击性。 * true：可点击 * false：不可点击|

### isVisible

|Method|
|:---------------------------------------------|
|public boolean isVisible() 您调用此API可以获取覆盖物的可见性。|

**Return** **s**

|Type|Description|
|:------|:-----------------------------|
|boolean|覆盖物的可见性。 * true：可见 * false：不可见|

### remove

|Method|
|:----------------------------------------|
|public void remove() 您调用此API可以将覆盖物从地图上移除。|

### setBearing

|Method|
|:-------------------------------------------------------------|
|public void setBearing(float bearing) 您调用此API可以设置覆盖物从正北顺时针的角度。|

**Parameters**

|Name|Description|
|:------|:-------------------------------------------------------------------------------------------------------------|
|bearing|覆盖物从正北顺时针的角度，正北方向为0度。取值说明： * [0, 360)：顺时针增加，默认为0。 * 负数：逆时针增加。例如：-90，逆时针旋转90度。 * 大于360：顺时针循环增加。例如：450，顺时针旋转90度。|

### setClickable

|Method|
|:---------------------------------------------------------------|
|public void setClickable(boolean clickable) 您调用此API可以设置覆盖物的可点击性。|

**Parameters**

|Name|Description|
|:--------|:------------|
|clickable|可点击性。默认为不可点击。|

### setDimensions(float width, float height)

|Method|
|:-------------------------------------------------------------------------------------------|
|public void setDimensions(float width, float height) 您调用此API可以设置覆盖物的宽高，图片会被拉伸，可能不会保留之前的图片比例。|

**Parameters**

|Name|Description|
|:-----|:-----------|
|width|覆盖物的宽度，单位：米。|
|height|覆盖物的高度，单位：米。|

### setDimensions(float width)

|Method|
|:--------------------------------------------------------------------------|
|public void setDimensions(float width) 您调用此API可以设置覆盖物的宽度，覆盖物的高度根据图片的比例自动变化。|

**Parameters**

|Name|Description|
|:----|:-----------|
|width|覆盖物的宽度，单位：米。|

### setImage

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setImage([BitmapDescriptor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/bitmapdescriptor-0000001050152403) imageDescriptor) 您调用此API可以置覆盖物的图片信息，新图片会使用老图片的矩形区域。|

**Parameters**

|Name|Description|
|:--------------|:----------|
|imageDescriptor|图片对象。|

### setPosition

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
|public setPosition([LatLng](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlng-0000001050150800) latLng) 您调用此API可以设置覆盖物的位置，覆盖物的其他属性不变。|

**Parameters**

|Name|Description|
|:-----|:--------------------------------|
|latLng|覆盖物的位置。默认情况下，锚点在距离图像顶部和图像左侧一半的位置。|

### setPositionFromBounds

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setPositionFromBounds([LatLngBounds](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/latlngbounds-0000001050150808) bounds) 根据矩形区域设置覆盖物的位置。当定位时忽略旋转的角度，但绘制覆盖物时仍会使用它。|

**Parameters**

|Name|Description|
|:-----|:----------|
|bounds|覆盖物位置的矩形区域。|

### setTag

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------|
|public void setTag(Object tag) 您调用此API可以设置覆盖物的tag属性，tag属性可以是任意对象，如果设置为空，则清除tag。当您不再需要使用tag时，您可以调用setTag(null)清除tag，以防止应用程序发生内存泄漏。|

**Parameters**

|Name|Description|
|:---|:----------|
|tag|覆盖物的tag属性。|

### setTransparency

|Method|
|:---------------------------------------------------------|
|public void setTransparency(float transparency) 设置覆盖物的透明度。|

**Parameters**

|Name|Description|
|:-----------|:--------------------------------------------|
|transparency|覆盖物的透明度，取值范围：[0, 1]。 * 0：不透明。 * 1：全透明。 默认值为0。|

### setVisible

|Method|
|:---------------------------------------------------------------------------------|
|public void setVisible(boolean visible) 您调用此方法来设置覆盖物的可见性，如果覆盖物不可见，则不会绘制，其他所有状态均保留。|

**Parameters**

|Name|Description|
|:------|:----------|
|visible|可见性。默认为可见。|

### setZIndex

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setZIndex(float zIndex) 用于设置覆盖物的z指数。z指数指的是覆盖物的叠加顺序，具有较大z指数的覆盖物会绘制在具有较小z指数的覆盖物上，具有相同z指数的叠加顺序为元素添加的先后顺序。 > 说明 > 数量限制：添加Circle和Polygon的总数乘以2加上添加Polyline和GroundOverlay的总数不超过1450，否则会出现图形叠加错误。|

**Parameters**

|Name|Description|
|:-----|:----------------------|
|zIndex|z指数，即覆盖物的叠加顺序。默认的z指数是0。|

