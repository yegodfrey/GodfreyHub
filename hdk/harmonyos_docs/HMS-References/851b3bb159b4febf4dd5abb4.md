---
name: document/cn/HMS-References/hms-map-oncameramovestartedl
title: HuaweiMap.OnCameraMoveStartedListener
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-oncameramovestartedl
source: portal
---

**public interface HuaweiMap.OnCameraMoveStartedListener**

OnCameraMoveStartedListener是[HuaweiMap](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-huaweimap)类的一个内部接口，包含三个公共字段和一个抽象函数onCameraMoveStarted(int reason)。

## Public Fields

Name| Type| Description  
---|---|---  
REASON_API_ANIMATION| int| 响应用户操作而启动的非手势动画，值为2。  
REASON_DEVELOPER_ANIMATION| int| 开发人员启动的动画，值为3。  
REASON_GESTURE| int| 响应用户在地图上的手势而启动的相机动画，值为1。  
  
## Constructor

无

## Public Method Summary

Return type| Method name  
---|---  
abstract void| onCameraMoveStarted(int reason)  
  
## Public Methods

Method  
---  
public abstract void onCameraMoveStarted(int reason)  
闲置的相机开始移动或相机移动原因改变时回调此方法。请勿在此方法中更新相机。必须在主线程中执行。  
  
  
**Parameters：**

Parameter name| Parameter desc  
---|---  
reason| 相机开始移动时原因。  
  
  
**Return：**  
无
