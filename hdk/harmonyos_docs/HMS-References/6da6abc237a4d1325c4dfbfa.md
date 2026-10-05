---
name: document/cn/HMS-References/MLDetectedLang-4
title: MLDetectedLang
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLDetectedLang-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.langdetect.MLDetectedLang  
语种检测结果。  
  
## Public Constructor Summary

Constructor name  
---  
MLDetectedLang(float probability, String langCode)创建语种检测结果实例。  
  
## Public Method Summary

Return type| Method name  
---|---  
boolean| equals(Object obj)  
String| getLangCode()  
float| getProbability()  
int| hashCode()  
String| toString()  
  
## Public Constructors

Method  
---  
public MLDetectedLang(float probability, String langCode)  
创建语种检测结果实例。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
probability| 置信度。  
langCode| 语言编码（ISO 639-1标准编码）。  
  
## Public Methods

Method  
---  
public boolean equals(Object obj)  
比较两个语种检测结果实例是否相等。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
obj| 需要比较的语种检测结果实例。  
  
  
**Return**  


Type| desc  
---|---  
boolean| 返回true 表示两个语种检测结果实例相同；返回false 表示两个语种检测结果实例不同。  
Method  
---  
public String getLangCode()  
获取语种检测结果的语言编码。  
  
**Return**

Type| desc  
---|---  
String| 语种检测结果的语言编码（ISO 639-1标准编码）。  
Method  
---  
public float getProbability()  
获取语种检测结果的置信度。  
  
**Return**

Type| desc  
---|---  
float| 语种检测结果的置信度。  
Method  
---  
public int hashCode()  
计算语种检测结果实例的哈希值。  
  
**Return**

Type| desc  
---|---  
int| 语种检测结果实例的哈希值。  
Method  
---  
public String toString()  
语种检测结果实例转换为字符串。  
  
**Return**

Type| desc  
---|---  
String| 语种检测结果实例转换的字符串。
