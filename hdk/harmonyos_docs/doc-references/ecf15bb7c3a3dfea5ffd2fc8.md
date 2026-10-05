---
name: document/cn/doc-references/keyeventhandle-0000001139370709
title: KeyEventHandle
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/keyeventhandle-0000001139370709
source: portal
---

# KeyEventHandle
    
    public interface KeyEventHandle
    extends [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265)  
  
---  
Provides methods for handling standard key events.

**Since:**

5

**See Also:**

[StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [onKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyeventhandle-0000001139370709#ZH-CN_TOPIC_0000001139370709__onKey-ohos_multimodalinput_event_KeyEvent-)​([KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285) event) |  Called when a key event occurs.   
  
#### Method Detail

#### [h2]onKey

boolean onKey​([KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285) event)

Called when a key event occurs. 

A key event refers to the [KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285) that is not consumed by [CommonEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commoneventhandle-0000001139632439), [MediaEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mediaeventhandle-0000001093133062), [SystemEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systemeventhandle-0000001092813454), or [TelephoneEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/telephoneeventhandle-0000001092973128).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
KeyEvent  |  Indicates the event information that contains the key press intent.  
  
**Returns:**

Returns true if the event is handled; returns false otherwise.

**Since:**

5
