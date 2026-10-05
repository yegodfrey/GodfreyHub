---
name: document/cn/doc-references/maskfilter-0000001060388814
title: MaskFilter
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/maskfilter-0000001060388814
source: portal
---

# MaskFilter

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.render.MaskFilter
    
    public class MaskFilter
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Represents the mask filter of a paint. 

This class enables you to create a blur or an emboss mask filter.

**Since:**

3

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static class  | [MaskFilter.Blur](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter_blur-0000001060411167) |  Enumerates blur styles for a MaskFilter instance.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[MaskFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter-0000001060388814#ZH-CN_TOPIC_0000001060388814__MaskFilter-byte:A-)​(byte[] table) |  A constructor used to create a table MaskFilter instance.   
[MaskFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter-0000001060388814#ZH-CN_TOPIC_0000001060388814__MaskFilter-float:A-float-float-float-)​(float[] direction, float ambient, float specular, float blurRadius) |  A constructor used to create an emboss MaskFilter instance based on the specified direction, ambient intensity, coefficient and radius of the light.   
[MaskFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter-0000001060388814#ZH-CN_TOPIC_0000001060388814__MaskFilter-float-ohos_agp_render_MaskFilter_Blur-)​(float radius, [MaskFilter.Blur](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter_blur-0000001060411167) style) |  A constructor used to create a blur MaskFilter instance based on the specified radius and style.   
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]MaskFilter

public MaskFilter​(float radius, [MaskFilter.Blur](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter_blur-0000001060411167) style)

A constructor used to create a blur MaskFilter instance based on the specified radius and style. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
radius  |  Indicates the radius of the circle defining the area to blur.  
style  |  Indicates the blur style to use. For details about available values, see [Blur](https://developer.harmonyos.com/cn/docs/documentation/doc-references/maskfilter_blur-0000001060411167).  
  
**Since:**

3

#### [h2]MaskFilter

public MaskFilter​(float[] direction, float ambient, float specular, float blurRadius)

A constructor used to create an emboss MaskFilter instance based on the specified direction, ambient intensity, coefficient and radius of the light. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
direction  |  Indicates the direction of the light source.  
ambient  |  Indicates the intensity of ambient light.  
specular  |  Indicates the coefficient for specular highlights.  
blurRadius  |  Indicates the scope to blur before applying light.  
  
**Since:**

3

#### [h2]MaskFilter

public MaskFilter​(byte[] table)

A constructor used to create a table MaskFilter instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
table  |  Indicates the table.  
  
**Since:**

3
