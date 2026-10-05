---
name: document/cn/HMS-3-References/HMS_3_0_SafetyDetect
title: SafetyDetect
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/HMS_3_0_SafetyDetect
source: portal
---

CLASS info  
---  
public class SafetyDetect extends java.lang.Object  
允许您的应用获取 Safety Detect 的主入口  
  
## Public Method Summary

Return type| Method name  
---|---  
static SafetyDetectClient| **getClient**(android.content.Context context)返回一个 SafetyDetectClient 对象，这个对象用于调用 Safety Detect API。  
  
## Public Methods

Method  
---  
public static SafeteDetectClient getClient (android.content.Context context)  
返回一个 SafetyDetectClient 对象，这个对象用于调用 Safety Detect API。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 安卓应用的 Context  
  
  
**Return**  


type| desc  
---|---  
SafetyDetectClient| Safety Detect API 的主入口
