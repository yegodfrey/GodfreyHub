---
name: document/cn/HMS-References/mllocaltranslatesetting-factory
title: MLLocalTranslateSetting.Factory
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/mllocaltranslatesetting-factory
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.translate.local.MLLocalTranslateSetting.Factory  
本地离线文本翻译配置器的构造工厂。  
  
## Public Method Summary

Return type| Method name  
---|---  
MLLocalTranslateSetting| create()  
MLLocalTranslateSetting.Factory| setSourceLangCode(String language)  
MLLocalTranslateSetting.Factory| setTargetLangCode(String language)  
  
## Public Methods

Method  
---  
public MLLocalTranslateSetting create()  
创建本地离线文本翻译器的配置器实例。  
  
**Return**

Type| desc  
---|---  
MLLocalTranslateSetting| 本地离线文本翻译器的配置器实例。  
Method  
---  
public MLLocalTranslateSetting.Factory setSourceLangCode(String sourceLangCode)  
设置源语言编码（ISO 639-1标准编码）。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
sourceLangCode| 源语言编码（ISO 639-1标准编码）。  
  
**Return**  


Type| desc  
---|---  
MLLocalTranslateSetting.Factory| 本地离线文本翻译器配置器实例。  
Method  
---  
public MLLocalTranslateSetting.Factory setTargetLangCode(String targetLangCode)  
设置目标语言编码（ISO 639-1标准编码）。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
targetLangCode| 目标语言编码（ISO 639-1标准编码）。  
  
**Return**  


Type| desc  
---|---  
MLLocalTranslateSetting.Factory| 本地离线文本翻译器配置器实例。
