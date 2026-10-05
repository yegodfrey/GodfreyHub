---
name: document/cn/doc-references/horizontalscalerichstyle-0000001217996541
title: HorizontalScaleRichStyle
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/horizontalscalerichstyle-0000001217996541
source: portal
---

# HorizontalScaleRichStyle

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.text.richstyles.RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007) |---|---ohos.agp.text.richstyles.HorizontalScaleRichStyle
    
    public class HorizontalScaleRichStyle
    extends [RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007)  
  
---  
Implements horizontal scale ratios for the text. This class must be used in a [RichText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706) instance.

**Since:**

7

**See Also:**

[RichText.setRichStyle(RichStyle, int, int, RangedRichStyle.Flag)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richtext-0000001054838706#ZH-CN_TOPIC_0000001054838706__setRichStyle-ohos_agp_text_richstyles_RichStyle-int-int-ohos_agp_text_richstyles_RangedRichStyle_Flag-)

#### Nested Class Summary

Nested classes/interfaces inherited from class ohos.agp.text.richstyles.[RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007)  
---  
[RichStyle.Capability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_capability-0000001217877971), [RichStyle.TypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle_typeid-0000001172716668)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[HorizontalScaleRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/horizontalscalerichstyle-0000001217996541#ZH-CN_TOPIC_0000001217996541__HorizontalScaleRichStyle-float-)​(float ratio) |  A constructor used to create a [HorizontalScaleRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/horizontalscalerichstyle-0000001217996541) instance based on the specified ratio.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
float | [getRatio](https://developer.harmonyos.com/cn/docs/documentation/doc-references/horizontalscalerichstyle-0000001217996541#ZH-CN_TOPIC_0000001217996541__getRatio--)​() |  Obtains the horizontal scale ratio of the text in this [HorizontalScaleRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/horizontalscalerichstyle-0000001217996541) instance.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class ohos.agp.text.richstyles.[RichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007)  
---  
[getCapability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007#ZH-CN_TOPIC_0000001218158007__getCapability--), [getRichStyleTypeId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/richstyle-0000001218158007#ZH-CN_TOPIC_0000001218158007__getRichStyleTypeId--)  
  
#### Constructor Detail

#### [h2]HorizontalScaleRichStyle

public HorizontalScaleRichStyle​(float ratio)

A constructor used to create a [HorizontalScaleRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/horizontalscalerichstyle-0000001217996541) instance based on the specified ratio. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
ratio  |  Indicates the horizontal scale ratio of the text.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the specified ratio is less than 0.  
  
**Since:**

7

#### Method Detail

#### [h2]getRatio

public float getRatio​()

Obtains the horizontal scale ratio of the text in this [HorizontalScaleRichStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/horizontalscalerichstyle-0000001217996541) instance. 

**Returns:**

Returns the horizontal scale ratio.

**Since:**

7
