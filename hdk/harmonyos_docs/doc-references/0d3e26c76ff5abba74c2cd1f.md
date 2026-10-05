---
name: document/cn/doc-references/multimodaleventhandle-0000001139632441
title: MultimodalEventHandle
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/multimodaleventhandle-0000001139632441
source: portal
---

# MultimodalEventHandle

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.multimodalinput.standard.MultimodalEventHandle
    
    public class MultimodalEventHandle
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides methods for handling standard events, including registering and deregistering a standard event.

**Since:**

5

**See Also:**

[StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static int | [registerStandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodaleventhandle-0000001139632441#ZH-CN_TOPIC_0000001139632441__registerStandardizedEventHandle-ohos_aafwk_ability_Ability-ohos_multimodalinput_standard_StandardizedEventHandle-)​([Ability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007) ability, [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265) standardizedEventHandle) |  Registers a standard event.   
static int | [unregisterStandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodaleventhandle-0000001139632441#ZH-CN_TOPIC_0000001139632441__unregisterStandardizedEventHandle-ohos_aafwk_ability_Ability-ohos_multimodalinput_standard_StandardizedEventHandle-)​([Ability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007) ability, [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265) standardizedEventHandle) |  Deregisters a standard event.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]registerStandardizedEventHandle

public static int registerStandardizedEventHandle​([Ability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007) ability, [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265) standardizedEventHandle)

Registers a standard event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
ability  |  Indicates the object that creates the standard event.  
standardizedEventHandle  |  Indicates a standard event, which can be [CommonEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commoneventhandle-0000001139632439), [KeyEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyeventhandle-0000001139370709), [MediaEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mediaeventhandle-0000001093133062), [SystemEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systemeventhandle-0000001092813454), [TelephoneEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/telephoneeventhandle-0000001092973128), or [TouchEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/toucheventhandle-0000001092684974).  
  
**Returns:**

the registration result, [MultimodalErrorCode.MMI_STANDARD_EVENT_INVALID_PARAMETER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalerrorcode-0000001139715263#ZH-CN_TOPIC_0000001139715263__MMI_STANDARD_EVENT_INVALID_PARAMETER), [MultimodalErrorCode.MMI_STANDARD_EVENT_SUCCESS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalerrorcode-0000001139715263#ZH-CN_TOPIC_0000001139715263__MMI_STANDARD_EVENT_SUCCESS), or [MultimodalErrorCode.MMI_STANDARD_EVENT_EXIST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalerrorcode-0000001139715263#ZH-CN_TOPIC_0000001139715263__MMI_STANDARD_EVENT_EXIST).

**Since:**

5

#### [h2]unregisterStandardizedEventHandle

public static int unregisterStandardizedEventHandle​([Ability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ability-0000001054120007) ability, [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265) standardizedEventHandle)

Deregisters a standard event. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
ability  |  Indicates the object that creates the standard event.  
standardizedEventHandle  |  Indicates a standard event, which can be [CommonEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commoneventhandle-0000001139632439), [KeyEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyeventhandle-0000001139370709), [MediaEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mediaeventhandle-0000001093133062), [SystemEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systemeventhandle-0000001092813454), [TelephoneEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/telephoneeventhandle-0000001092973128), or [TouchEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/toucheventhandle-0000001092684974).  
  
**Returns:**

the deregistration result, [MultimodalErrorCode.MMI_STANDARD_EVENT_INVALID_PARAMETER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalerrorcode-0000001139715263#ZH-CN_TOPIC_0000001139715263__MMI_STANDARD_EVENT_INVALID_PARAMETER), [MultimodalErrorCode.MMI_STANDARD_EVENT_SUCCESS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalerrorcode-0000001139715263#ZH-CN_TOPIC_0000001139715263__MMI_STANDARD_EVENT_SUCCESS), or [MultimodalErrorCode.MMI_STANDARD_EVENT_NOT_EXIST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalerrorcode-0000001139715263#ZH-CN_TOPIC_0000001139715263__MMI_STANDARD_EVENT_NOT_EXIST).

**Since:**

5
