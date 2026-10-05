---
name: document/cn/doc-references/toucheventhandle-0000001092684974
title: TouchEventHandle
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/toucheventhandle-0000001092684974
source: portal
---

TouchEventHandle  
      
    public interface TouchEventHandle
    extends [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265)  
  
---  
Provides methods for handling standard touch events.**Since:** 5**See Also:** [StandardizedEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/standardizedeventhandle-0000001139715265)Method Summary Modifier and Type | Method | Description  
---|---|---  
boolean | [onTouch](https://developer.harmonyos.com/cn/docs/documentation/doc-references/toucheventhandle-0000001092684974#ZH-CN_TOPIC_0000001092684974__onTouch-ohos_multimodalinput_event_TouchEvent-)​([TouchEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/touchevent-0000001054558959) event) |  Called when a touch event occurs.   
Method Detail [h2]onTouch boolean onTouch​([TouchEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/touchevent-0000001054558959) event) Called when a touch event occurs. A touch event refers to the [ManipulationEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/manipulationevent-0000001054120214) or [CompositeEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/compositeevent-0000001054838910) that is not consumed by [CommonEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/commoneventhandle-0000001139632439), [MediaEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mediaeventhandle-0000001093133062), [SystemEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/systemeventhandle-0000001092813454), or [TelephoneEventHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/telephoneeventhandle-0000001092973128). **Parameters:** Parameter Name | Parameter Description  
---|---  
TouchEvent  |  Indicates the event information that contains the touch intent.  
**Returns:** Returns true if the event is handled; returns false otherwise. **Since:** 5
