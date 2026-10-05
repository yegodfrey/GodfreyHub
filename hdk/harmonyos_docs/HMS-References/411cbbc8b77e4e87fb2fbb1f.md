---
name: document/cn/HMS-References/activityconversioninfo
title: ActivityConversionInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/activityconversioninfo
source: portal
---

CLASS info  
---  
public class ActivityConversionInfo implements Parcelable, IMessageEntity  
活动转换。  
  
# Field Summary

Name| Desc|   
  
---|---|---  
Creator<ActivityConversionInfo>| CREATOR| 用以反序列化活动转换信息时使用。  
  
# Nested Class Summary

Type| Name| Desc  
---|---|---  
Class| ActivityConversionInfo.Builder| 构建ActivityConversionInfo实例。  
  
# Constant Summary

Type| Name| Desc  
---|---|---  
int| ENTER_ACTIVITY_CONVERSION| 活动转换进入，取值为0。  
int| EXIT_ACTIVITY_CONVERSION| 活动转换退出，取值为1。  
  
# Member Variable Summary

Type| Name| Desc  
---|---|---  
int| activityType| 活动类型。  
int| conversionType| 活动转换类型。  
  
# Public Method Summary

Return type| Method name  
---|---  
int| [getActivityType](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/activityconversioninfo#1)()  
int| [getConversionType](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/activityconversioninfo#2)()  
  
# Constants

Constant  
---  
public static final int ENTER_ACTIVITY_CONVERSION  
活动转换进入。  
默认值: 0  
Constant  
---  
public static final int EXIT_ACTIVITY_CONVERSION  
活动转换退出。  
默认值: 1  
  
# Public Methods

Method  
---  
public int getConversionType()  
获取当前活动转换实例的转换类型。  
  
**Return**

type| desc  
---|---  
int| 转换类型：ENTER_ACTIVITY_CONVERSION；EXIT_ACTIVITY_CONVERSION；  
Method  
---  
public int getActivityType()  
获取当前活动转换实例的活动类型。  
  
**Return**

type| desc  
---|---  
int| 活动类型
