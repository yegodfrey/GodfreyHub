---
name: document/cn/HMS-References/hms-map-oninfowindowlongclickl
title: HuaweiMap.OnInfoWindowLongClickListener
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-oninfowindowlongclickl
source: portal
---

**public interface HuaweiMap.OnInfoWindowLongClickListener**

OnInfoWindowLongClickListener是[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)类的一个内部接口，包含一个抽象函数onInfoWindowLongClick([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker))。

## Public Fields

无

## Constructor

无

## Public Method Summary

Return type| Method name  
---|---  
abstract void| onInfoWindowLongClick([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker) marker)  
  
## Public Methods

Method  
---  
public abstract void onInfoWindowLongClick([Marker](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-marker) marker)  
长按地图标记信息窗口时回调此方法。必须在主线程中执行。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
marker| 长按的标记。  
  
  
**Return：**  
无
