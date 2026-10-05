---
name: document/cn/HMS-3-References/activitytransitionresult
title: ActivityTransitionResult
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/activitytransitionresult
source: portal
---

CLASS info  
---  
public class ActivityTransitionResult implements Parcelable  
活动过渡结果。  
  
## Field Summary

Name| Desc|   
  
---|---|---  
Creator<ActivityTransitionResult>| CREATOR| 反序列化ActivityTransitionResult时使用。  
  
## Public Constructor Summary

Constructor name  
---  
ActivityTransitionResult(List<[ActivityTransitionEvent](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activitytransitionevent)> transitionEvents)  
ActivityTransitionResult构造函数。  
  
## Public Method Summary

Return type| Method name  
---|---  
static ActivityTransitionResult| extractResult(Intent intent)  
List<[ActivityTransitionEvent](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activitytransitionevent)>| getTransitionEvents()  
static boolean| hasResult(Intent intent)  
  
## Public Constructors

constructor  
---  
public ActivityTransitionResult(List<[ActivityTransitionEvent](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activitytransitionevent)> transitionEvents)  
ActivityTransitionResult构造函数。  
  
**Parameters**  

Parameter name| Parameter desc  
---|---  
transitionEvents| 活动过渡事件列表。  
  
## Public Methods

Method  
---  
public static ActivityTransitionResult extractResult(Intent intent)  
从Intent中获取ActivityTransitionResult。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
intent| 调用[requestActivityTransitionUpdates](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activityrecognitionclient)接口，传递给服务端的Intent。  
  
**Return**

type| desc  
---|---  
ActivityTransitionResult| 如果intent不包含ActivityTransitionResult则返回null。  
Method  
---  
public List<[ActivityTransitionEvent](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activitytransitionevent)> getTransitionEvents()  
获取此结果中所有活动过渡事件。获取的列表中的事件按时间升序排列。  
  
**Return**

type| desc  
---|---  
List<[ActivityTransitionEvent](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activitytransitionevent)>| 活动过渡事件列表。  
Method  
---  
public static boolean hasResult(Intent intent)  
检查Intent是否包含ActivityTransitionResult。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
intent| 调用[requestActivityTransitionUpdates](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/activityrecognitionclient)接口，传递给服务端的Intent。  
  
**Return**

type| desc  
---|---  
boolean| Intent包含ActivityTransitionResult返回true，否则返回false。
