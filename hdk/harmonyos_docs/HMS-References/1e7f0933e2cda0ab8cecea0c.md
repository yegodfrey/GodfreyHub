---
name: document/cn/HMS-References/FIDO2_Attachment
title: Attachment
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/FIDO2_Attachment
source: portal
---

ENUM info  
---  
public enum Attachment  
此枚举值用于描述认证器类型。  
  
## Enumeration Summary

Type| Desc  
---|---  
PLATFORM| platform平台认证器，指纹、面容、虹膜等。  
CROSS_PLATFORM| cross-platform跨平台认证器，也称漫游认证，包括蓝牙、NFC、USB。  
  
## Public Methods Summary

Return type| Method name  
---|---  
Attachment| **fromValue**(String value)根据名称生成Attachment实例。  
String| **getValue**()获取Attachment枚举值。  
  
## Public methods

Method  
---  
Attachment fromValue(String value)  
根据名称生成Attachment实例  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
value| Attachment枚举值。  
  
**Return**

type| desc  
---|---  
Attachment| Attachment的实例。  
Method  
---  
String getValue()  
获取Attachment实例当前的枚举值。  
  
**Return**

type| desc  
---|---  
String| Attachment实例当前的枚举值。
