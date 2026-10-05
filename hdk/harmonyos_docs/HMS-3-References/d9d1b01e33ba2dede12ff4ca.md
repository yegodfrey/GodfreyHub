---
name: document/cn/HMS-3-References/activitytransition-builder
title: ActivityTransition.Builder
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/activitytransition-builder
source: portal
---

CLASS info  
---  
public static class Builder  
构建ActivityTransition实例。  
  
## Public Constructor Summary

Constructor name  
---  
Builder()  
ActivityTransition.Builder构造函数。  
  
## Public Method Summary

Return type| Method name  
---|---  
ActivityTransition.Builder| setActivityTransition(int transition)  
ActivityTransition.Builder| setActivityType(int activityType)  
ActivityTransition| build()  
  
## Public Constructors

constructor  
---  
public ActivityTransition.Builder ActivityTransition.Builder()  
ActivityTransition.Builder构造函数。  
  
**Return**

type| desc  
---|---  
ActivityTransition.Builder| ActivityTransition.Builder实例。  
  
## Public Methods

Method  
---  
public ActivityTransition.Builder setActivityTransition(int transition)  
设置活动过渡条件。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
transition| 活动过渡信息，取值为ACTIVITY_TRANSITION_ENTER或者ACTIVITY_TRANSITION_EXIT。  
  
**Return**

type| desc  
---|---  
ActivityTransition.Builder| 内部类，构建ActivityTransition实例。  
Method  
---  
public ActivityTransition.Builder setActivityType (int activityType)  
设置活动过渡类型。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
activityType| 活动类型，取值为[DetectedActivity](https://developer.huawei.com/consumer/cn/doc/development/HMS-3-References/detectedactivity)常量之一。  
  
**Return**

type| desc  
---|---  
ActivityTransition.Builder| 内部类，构建ActivityTransition实例。  
Method  
---  
public ActivityTransition build()  
构造对应的活动过渡实例。  
  
**Return**

type| desc  
---|---  
ActivityTransition| 活动过渡实例。
