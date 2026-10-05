---
name: document/cn/doc-references/overview-0000001054678838
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001054678838
source: portal
---

# Overview  
  
Provides a mechanism for pending execution. 

[IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) provides a pending intent mechanism to perform an action only when certain conditions are met or certain events are triggered. For example, after you receive a notification, a new ability will be triggered only if you click this notification. The actions to be performed include abilities and common events. 

When you send an [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) to another application, the application is granted all the permissions you have. 

You can obtain a different [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) only if a different request code is carried in the [IntentAgentInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentinfo-0000001054120167) object or the intents in the previous and new [IntentAgentInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentinfo-0000001054120167) objects are found different by using [Intent.equals(Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intent-0000001054120019#ZH-CN_TOPIC_0000001054120019__equals-java_lang_Object-).

**Since:**

3

#### Interface Summary

Interface | Description  
---|---  
[IntentAgent.OnCompleted](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent_oncompleted-0000001054558839) | A callback for the [IntentAgentHelper#triggerIntentAgent(Context, IntentAgent, IntentAgent.OnCompleted, EventHandler, TriggerInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagenthelper-0000001054358826#ZH-CN_TOPIC_0000001054358826__triggerIntentAgent-ohos_app_Context-ohos_event_intentagent_IntentAgent-ohos_event_intentagent_IntentAgent_OnCompleted-ohos_eventhandler_EventHandler-ohos_event_intentagent_TriggerInfo-) method.  
  
#### Class Summary

Class | Description  
---|---  
[IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) | Provides a pending intent mechanism to perform an action only when certain conditions are met or certain events are triggered.  
[IntentAgentConstant](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentconstant-0000001054838792) | Provides enumerated constants that are used for setting object attributes in the methods provided by [IntentAgentInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentinfo-0000001054120167).  
[IntentAgentHelper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagenthelper-0000001054358826) | A helper class used to obtain, trigger, cancel, and compare [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) objects and to obtain the bundle name, UID, and hash code value of an [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807) object.  
[IntentAgentInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentinfo-0000001054120167) | A parametric class that contains the parameters required by [IntentAgentHelper#getIntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagenthelper-0000001054358826#ZH-CN_TOPIC_0000001054358826__getIntentAgent-ohos_app_Context-ohos_event_intentagent_IntentAgentInfo-).  
[TriggerInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/triggerinfo-0000001054120096) | A parametric class that contains the parameters required by [IntentAgentHelper#triggerIntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagenthelper-0000001054358826#ZH-CN_TOPIC_0000001054358826__triggerIntentAgent-ohos_app_Context-ohos_event_intentagent_IntentAgent-ohos_event_intentagent_IntentAgent_OnCompleted-ohos_eventhandler_EventHandler-ohos_event_intentagent_TriggerInfo-).  
[TriggerInfo.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/triggerinfo_builder-0000001060411175) | A builder class for [TriggerInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/triggerinfo-0000001054120096) objects.  
  
#### Enum Summary

Enum | Description  
---|---  
[IntentAgentConstant.Flags](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentconstant_flags-0000001054200112) | Enumerates flags for using an [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807).  
[IntentAgentConstant.OperationType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagentconstant_operationtype-0000001054518852) | Identifies the operation for using an [IntentAgent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/intentagent-0000001054678807), such as starting an ability or sending a common event.
