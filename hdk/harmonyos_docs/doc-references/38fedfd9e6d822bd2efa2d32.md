---
name: document/cn/doc-references/complicationentity_builder-0000001138568183
title: ComplicationEntity.Builder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/complicationentity_builder-0000001138568183
source: portal
---

# ComplicationEntity.Builder

java.lang.Object |---ohos.wearable.complication.ComplicationEntity.Builder
    
    public static final class ComplicationEntity.Builder
    extends java.lang.Object  
  
---  
A builder class for [ComplicationEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity-0000001091546376) objects.

**Since:**

5

#### Constructor Summary

Constructor | Description  
---|---  
[Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__Builder-ohos_app_Context-int-java_lang_String-)​(ohos.app.Context context, int type, java.lang.String template) |  A constructor used to create a [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[ComplicationEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity-0000001091546376) | [build](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__build--)​() |  Creates a [ComplicationEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity-0000001091546376) object.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setAccessibilityDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setAccessibilityDescription-java_lang_String-)​(java.lang.String description) |  Sets the accessibility description of the complication data for using TalkBack.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setClickEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setClickEvent-ohos_event_intentagent_IntentAgent-)​(ohos.event.intentagent.IntentAgent clickEvent) |  Sets the information about a click event that occurs on this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setDigitValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setDigitValue-float-)​(float value) |  Sets a digital value for this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setIcon](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setIcon-int-)​(int icon) |  Sets the icon resource ID for this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setListValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setListValue-ohos_wearable_complication_ListValue-)​([ListValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listvalue-0000001138482519) value) |  Sets list data for this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setLongText](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setLongText-java_lang_String-)​(java.lang.String value) |  Sets a long text string for this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setRangedValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setRangedValue-ohos_wearable_complication_RangedValue-)​([RangedValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedvalue-0000001138263645) value) |  Sets ranged data for this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setTextValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setTextValue-java_lang_String-)​(java.lang.String value) |  Sets text data for this complication.   
[ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) | [setTitle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183#ZH-CN_TOPIC_0000001138568183__setTitle-java_lang_String-)​(java.lang.String title) |  Sets the complication title.   
  
Methods inherited from class java.lang.Object  
---  
clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait  
  
#### Constructor Detail

#### [h2]Builder

public Builder​(ohos.app.Context context, int type, java.lang.String template)

A constructor used to create a [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
context  |  Indicates the application context.  
type  |  Indicates the complication type, as defined in [Complication](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complication-0000001138263643).  
template  |  Indicates the complication template, as defined in [ComplicationTemplate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationtemplate-0000001091706036).  
  
#### Method Detail

#### [h2]setIcon

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setIcon​(int icon)

Sets the icon resource ID for this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
icon  |  Indicates the complication icon resource ID.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setTitle

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setTitle​(java.lang.String title)

Sets the complication title. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
title  |  Indicates the complication title.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setTextValue

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setTextValue​(java.lang.String value)

Sets text data for this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the text data of this complication.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setDigitValue

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setDigitValue​(float value)

Sets a digital value for this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the digital value of this complication.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setLongText

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setLongText​(java.lang.String value)

Sets a long text string for this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the long text string of this complication.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setRangedValue

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setRangedValue​([RangedValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rangedvalue-0000001138263645) value)

Sets ranged data for this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the ranged data of this complication.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setListValue

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setListValue​([ListValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listvalue-0000001138482519) value)

Sets list data for this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
value  |  Indicates the list data of this complication.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setClickEvent

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setClickEvent​(ohos.event.intentagent.IntentAgent clickEvent)

Sets the information about a click event that occurs on this complication. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
clickEvent  |  Indicates the information about a click event that occurs on this complication.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]setAccessibilityDescription

public [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) setAccessibilityDescription​(java.lang.String description)

Sets the accessibility description of the complication data for using TalkBack. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
description  |  Indicates the accessibility description of the complication data for using TalkBack.  
  
**Returns:**

Returns the [ComplicationEntity.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity_builder-0000001138568183) object.

#### [h2]build

public [ComplicationEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity-0000001091546376) build​()

Creates a [ComplicationEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity-0000001091546376) object. 

**Returns:**

Returns the [ComplicationEntity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/complicationentity-0000001091546376) object.
