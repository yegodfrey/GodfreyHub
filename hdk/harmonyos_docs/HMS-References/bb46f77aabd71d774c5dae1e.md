---
name: document/cn/HMS-References/awareness-barrier-awarenessbarrier
title: AwarenessBarrier
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/awareness-barrier-awarenessbarrier
source: portal
---

class info  
---  
public abstract class AwarenessBarrier implements Parcelable  
围栏基础类，支持围栏的逻辑运算。  
  
## Public Method Summary

Return type| Method name  
---|---  
AwarenessBarrier| public static AwarenessBarrier and(AwarenessBarrier… barriers)  
AwarenessBarrier| public static AwarenessBarrier and(Collection<AwarenessBarrier> barriers)  
AwarenessBarrier| public static AwarenessBarrier not(AwarenessBarrier barrier)  
AwarenessBarrier| public static AwarenessBarrier or(AwarenessBarrier… barriers)  
AwarenessBarrier| public static AwarenessBarrier or(Collection<AwarenessBarrier> barriers)  
  
## Public Methods

Method  
---  
public static AwarenessBarrier and(AwarenessBarrier… barriers)  
逻辑“与”运算，此方法会返回这组围栏经过逻辑与运算后的综合围栏。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
barriers| 围栏集合。  
  
  
**Return**  


Type| desc  
---|---  
AwarenessBarrier| 经过逻辑与运算后的综合围栏。  
  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
IllegalArgumentException| 参数不合法（barriers为null或不存在）异常。  
Method  
---  
public static AwarenessBarrier and(Collection<AwarenessBarrier> barriers)  
逻辑“与”运算，此方法会返回这组围栏经过逻辑与运算后的综合围栏。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
barriers| 围栏集合。  
  
  
**Return**  


Type| desc  
---|---  
AwarenessBarrier| 经过逻辑与运算后的综合围栏。  
  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
IllegalArgumentException| 参数不合法（barriers为null或不存在）异常。  
Method  
---  
public static AwarenessBarrier not(AwarenessBarrier barrier)  
逻辑“非”运算，此方法会返回围栏经过逻辑非运算后的围栏。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
barrier| 围栏。  
  
  
**Return**  


Type| desc  
---|---  
AwarenessBarrier| 经过逻辑非运算后的围栏。  
  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
IllegalArgumentException| 参数不合法（barriers为null或不存在）异常。  
Method  
---  
public static AwarenessBarrier or(AwarenessBarrier… barriers)  
逻辑“或”运算，此方法会返回这组围栏经过逻辑或运算后的综合围栏。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
barriers| 围栏集合。  
  
  
**Return**  


Type| desc  
---|---  
AwarenessBarrier| 经过逻辑或运算后的围栏。  
  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
IllegalArgumentException| 参数不合法（barriers为null或不存在）异常。  
Method  
---  
public static AwarenessBarrier or(Collection<AwarenessBarrier> barriers)  
逻辑“或”运算，此方法会返回这组围栏经过逻辑或运算后的综合围栏。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
barriers| 围栏集合。  
  
  
**Return**  


Type| desc  
---|---  
AwarenessBarrier| 经过逻辑或运算后的围栏。  
  
  
**Throws**  


Parameter name| Parameter desc  
---|---  
IllegalArgumentException| 参数不合法（barriers为null或不存在）异常。
