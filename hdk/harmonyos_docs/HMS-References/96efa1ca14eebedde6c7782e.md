---
name: document/cn/HMS-References/awarenes-awareness
title: Awareness
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/awarenes-awareness
source: portal
---

Class info  
---  
public final class Awareness extends Object  
情景感知服务的主要入口。  
  
## Public Method Summary

Return type| Method name  
---|---  
BarrierClient| public static BarrierClient getBarrierClient(Activity activity)  
BarrierClient| public static BarrierClient getBarrierClient(Context context)  
CaptureClient| public static CaptureClient getCaptureClient(Activity activity)  
CaptureClient| public static CaptureClient getCaptureClient(Context context)  
  
## Public Methods

Method  
---  
public static BarrierClient getBarrierClient(Activity activity)  
利用活动对象创建围栏客户端。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
activity| 活动对象。  
  
**Return**  


type| desc  
---|---  
BarrierClient| 围栏客户端。  
Method  
---  
public static BarrierClient getBarrierClient(Context context)  
利用上下文创建围栏客户端。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 请求上下文。  
  
**Return**  


type| desc  
---|---  
BarrierClient| 围栏客户端。  
Method  
---  
public static CaptureClient getCaptureClient(Activity activity)  
利用活动对象创建快照客户端。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
activity| 活动对象。  
  
**Return**  


type| desc  
---|---  
CaptureClient| 快照客户端。  
Method  
---  
public static CaptureClient getCaptureClient(Context context)  
利用上下文创建快照客户端。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 请求上下文。  
  
**Return**  


type| desc  
---|---  
CaptureClient| 快照客户端。
