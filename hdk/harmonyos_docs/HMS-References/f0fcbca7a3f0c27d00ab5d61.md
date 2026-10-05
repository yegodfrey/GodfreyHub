---
name: document/cn/HMS-References/awareness-barrier-barrierstatus
title: BarrierStatus
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/awareness-barrier-barrierstatus
source: portal
---

class info  
---  
public abstract class BarrierStatus extends Object implements Parcelable  
将围栏状态封装在[AwarenessBarrier](https://developer.huawei.com/consumer/cn/doc/awareness-barrier-awarenessbarrier)中。其中，围栏状态包括当前状态、上一次状态以及上一次围栏状态更新的时间。  
  
## Constant Summary

Type| Name| Desc  
---|---|---  
int| FALSE| 围栏状态为FALSE。  
int| TRUE| 围栏状态为TRUE。  
int| UNKNOWN| 围栏状态未知。  
  
## Public Method Summary

Return type| Method name  
---|---  
BarrierStatus| public static BarrierStatus extract(Intent intent)  
int| public abstract int getPresentStatus()  
String| public abstract String getBarrierLabel()  
long| public abstract long getLastBarrierUpdateTime()  
int| public abstract int getLastStatus()  
  
## Constants

Constant  
---  
public static final int FALSE  
围栏状态为false。  
常数：0  
Constant  
---  
public static final int TRUE  
围栏状态为true。  
常数：1  
Constant  
---  
public static final int UNKOWN  
围栏状态未知。  
常数：2  
  
## Public Methods

Method  
---  
public static BarrierStatus extract(Intent intent)  
从Intent中提取围栏状态信息。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
intent| 需要提取围栏状态信息的Intent对象。  
  
  
**Return**  


Type| desc  
---|---  
BarrierStatus| 围栏状态信息。  
Method  
---  
public abstract int getPresentStatus()  
获得当前围栏状态。  
  
**Return**

Type| desc  
---|---  
int| 围栏状态。  
1：围栏状态为TRUE；  
0：围栏状态为FALSE；  
2：围栏状态未知。  
Method  
---  
public abstract String getBarrierLabel()  
获得在AwarenessBarrier中唯一标识此围栏的键值。  
  
**Return**

Type| desc  
---|---  
String| 在AwarenessBarrier中唯一标识此围栏的键值。  
Method  
---  
public abstract long getLastBarrierUpdateTime()  
获得上一次围栏状态变化的时间。  
  
**Return**

Type| desc  
---|---  
long| 上一次围栏状态变化的时间。  
Method  
---  
public abstract int getLastStatus()  
获得上一次围栏状态。  
  
**Return**

Type| desc  
---|---  
int| 围栏状态。  
1：围栏状态为TRUE；  
0：围栏状态为FALSE；  
2：围栏状态为未知。
