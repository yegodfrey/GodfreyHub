---
name: document/cn/HMSCore-References/harmonyos-tileoverlay-0000001207110294
title: TileOverlay
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-tileoverlay-0000001207110294
---

# TileOverlay

|Class Info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public final class TileOverlay TileOverlay是瓦片图层的相关类。瓦片图层是显示在地图上的一组图像。这些瓦片可以是透明的，允许您增加一些新的功能到现有的地图上。在调用[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-huaweimap-0000001101312582)类的[addTileOverlay](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-huaweimap-0000001101312582#section12241957204519)方法时会返回该类型的实例。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------|
|void|[clearTileCache](#section1976495145817)() 清空瓦片图层的缓存。|
|void|[remove](#section354412291830)() 将瓦片图层从地图上移除。|
|void|[setFadeIn](#section9414160649)(boolean fadeIn) 设置瓦片图层是否是淡入。|
|void|[setTransparency](#section10412133211419)(float transparency) 设置瓦片图层的透明度。|
|void|[setVisible](#section933417218519)(boolean visible) 设置瓦片图层的可见性。|
|void|[setZIndex](#section182617531253)(float zIndex) 设置瓦片图层的z指数。|

#### Public Methods

#### clearTileCache

|Method|
|:-----------------------------------------------|
|public void clearTileCache() 您调用此API可以清空瓦片图层的缓存。|

#### remove

|Method|
|:-----------------------------------------|
|public void remove() 您调用此API可以将瓦片图层从地图上移除。|

#### setFadeIn

|Method|
|:----------------------------------------------------------|
|public void setFadeIn(boolean fadeIn) 您调用此API可以设置瓦片图层是否是淡入。|

Parameters  

|Name|Description|
|:-----|:-------------------------------------|
|fadeIn|是否是淡入。 * true：淡入 * false：不淡入 默认值为true。|

#### setTransparency

|Method|
|:-------------------------------------------------------------------|
|public void setTransparency(float transparency) 您调用此API可以设置瓦片图层的透明度。|

Parameters  

|Name|Description|
|:-----------|:------------------------------------------------|
|transparency|瓦片图层的透明度，取值范围：\[0, 1\]。 * 0：不透明。 * 1：完全透明。 默认值为0。|

#### setVisible

|Method|
|:----------------------------------------------------------------------------------------------|
|public void setVisible(boolean visible) 您调用此方法来设置瓦片图层的可见性，如果瓦片图层不可见，则不会绘制，其他所有状态均保留，瓦片图层默认是可见的。|

Parameters  

|Name|Description|
|:------|:-----------------------------------|
|visible|可见性。 * true：可见 * false：不可见 默认值为true。|

#### setZIndex

|Method|
|:---------------------------------------------------------------------------------------------------------------------|
|public void setZIndex(float zIndex) 用于设置瓦片图层的z指数。z指数指的是瓦片图层的叠加顺序，具有较大z指数的瓦片图层会绘制在具有较小z指数的瓦片图层上，具有相同z指数的叠加顺序为元素添加的先后顺序。|

Parameters  

|Name|Description|
|:-----|:-----------------------|
|zIndex|z指数，即瓦片图层的叠加顺序。默认的z指数是0。|

