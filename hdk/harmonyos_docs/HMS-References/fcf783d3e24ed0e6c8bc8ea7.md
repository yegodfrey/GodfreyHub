---
name: document/cn/HMS-References/MLDocumentSetting-4
title: MLDocumentSetting
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MLDocumentSetting-4
source: portal
---

class info  
---  
com.huawei.hms.mlsdk.document.MLDocumentSetting  
文档检测器设置类：用于设置文档检测器（MLDocumentAnalyzer）的属性。  检测器属性包括：1、预置的语种，正确地预置检测器语种，可以使检测更快速更准确。2、是否校验证书指纹，设置为true后只允许能通过校验的已注册应用访问文档检测的云端API接口。3、文本行边界返回格式，可设置为NGON或者ARC。NGON：返回四边形行边界的四个顶点坐标；ARC：返回文本行文字排列为弧形的多边形边界的顶点，最多可返回多达72个顶点的坐标。  
  
# Public Method Summary

Return type| Method name  
---|---  
boolean| equals(Object setting)  
String| getBorderType()  
List| getLanguageList()  
int| hashCode()  
boolean| isEnableFingerprintVerification()  
  
# Public Methods

Method  
---  
public boolean equals(Object setting)  
判断输入实例是否与本实例相等。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
setting| 对比的实例。  
  
**Return**  


Type| desc  
---|---  
boolean| true：表示两个实例相等；false：表示两个实例不相等。  
Method  
---  
public String getBorderType()  
获取文本行边界形式。  
  
**Return**

Type| desc  
---|---  
String| 返回文本行边界形式。NGON：文本行边界为四边形的四个顶点坐标；ARC：文本排列为弧形的多边形边界的顶点，最多可返回多达72个顶点的坐标。  
Method  
---  
public List<String> getLanguageList()  
获取文档检测器预置的语种。  
  
**Return**

Type| desc  
---|---  
List| 返回语种列表，语种使用语言代码表示：“en”（英）, “zh”（中）,“ja”（日）, “ko”（韩）, “ru”（俄）, “de”（德）, “fr”（法）, “it”（意大利）, “pt”（葡萄牙）, “es”（西班牙）,“pl”（波兰）, “no”（挪威）, “sv”（瑞典）, “da”（丹麦）, “tr”（土耳其）, “fi”（芬兰）,“th”（泰语）,“ar”（阿拉伯语）,“hi”（印地语）。  
Method  
---  
public int hashCode()  
获取当前实例的哈希值。  
  
**Return**

Type| desc  
---|---  
int| 返回实例的哈希值。  
Method  
---  
public final boolean isEnableFingerprintVerification()  
判断是否强制校验证书指纹。  
  
**Return**

Type| desc  
---|---  
boolean| true：强制校验证书指纹，只允许能通过校验的已注册应用访问文档检测的云端API接口；false：不校验证书指纹，不限制文档检测云端API接口的访问。
