---
name: document/cn/SmartTravel-References/set-param-0000001052610834
title: SetParam
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/set-param-0000001052610834
source: portal
---

# SetParam  
  
Function  
---  
int (*SetParam)(SetParamsType paramType, const void *paramValue)  
Sets driver parameters after the **Init** function is executed.  
  
**Parameters**

**Name** | **Type** | Description  
---|---|---  
paramType | [SetParamsType](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-References/set-params-type-0000001052890840) | Parameter type.  
*paramValue | const void | Data structure pointer. The void * is used to represent the data structure differences between different devices.  
  
**Return**

Type | Description  
---|---  
int | Operation result.
     * **0** : success
     * Other values: failure
