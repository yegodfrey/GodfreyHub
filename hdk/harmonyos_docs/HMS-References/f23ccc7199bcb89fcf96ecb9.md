---
name: document/cn/HMS-References/hms-map-oncircleclickl
title: HuaweiMap.OnCircleClickListener
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-oncircleclickl
source: portal
---

**public interface HuaweiMap.OnCircleClickListener**

OnCircleClickListener是[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)类的一个内部接口，包含一个抽象函数onCircleClick([Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle))。

## Public Fields

无

## Constructor

无

## Public Method Summary

Return type| Method name  
---|---  
abstract void| onCircleClick([Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle) circle)  
  
## Public Methods

Method  
---  
public abstract void onCircleClick([Circle](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-circle) circle)  
点击圆时回调此方法。必须在主线程中执行。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
circle| 被点击的圆。  
  
  
**Return：**  
无
