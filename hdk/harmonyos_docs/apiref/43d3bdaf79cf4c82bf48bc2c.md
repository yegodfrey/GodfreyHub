---
name: document/cn/apiref/ohos_1_1cancelevent-0000001054799629
title: OHOS::CancelEvent
uri: https://developer.huawei.com/consumer/cn/doc/apiref/ohos_1_1cancelevent-0000001054799629
source: portal
---

# OHOS::CancelEvent  
  
#### Overview

**Related Modules:**

[UI_Events](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595)

**Description:**

Defines a cancel event, which usually occurs when the target view changes due to user sliding. For example, this event is triggered if you, after pressing a button, does not release the button but slides. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Public Member Functions

Function | Description  
---|---  
[CancelEvent](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__gaf3b75ee84a33ffcbc640328b2747b0a1) (const [Point](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1point-0000001054479595) &pos) |  A constructor used to create a **[CancelEvent](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1cancelevent-0000001054799629)** instance.   
[~CancelEvent](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__ga5f8a22ac27c5ffc2b8801b4687a38394) () | virtual  A destructor used to delete the **[CancelEvent](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1cancelevent-0000001054799629)** instance.   
[Event](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__ga89cd09ced5537a3479b7901ba8abc6da) () |  A default constructor used to create an **[Event](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1event-0000001054879562)** instance.   
[Event](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__ga57a9f07c8203c6a60f3b25c4edb526a0) (const [Point](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1point-0000001054479595) &curPos) |  A constructor used to create an **[Event](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1event-0000001054879562)** instance.   
[~Event](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__gabafa07a6393f4757f402bf9437561fa4) () | virtual  A destructor used to delete the **[Event](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1event-0000001054879562)** instance.   
[GetCurrentPos](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__gaea811c661ad416d7f70912ad6fcce269) () const | const [Point](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1point-0000001054479595) & Obtains the position where an event occurs.   
[GetTimeStamp](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__ga7d56c2a99ab2c98eec9ebc03f67b7777) () const | const TimeType & Obtains the timestamp when an event occurs.   
[SetTimeStamp](https://device.harmonyos.com/cn/docs/develop/apiref/ui__events-0000001128602595#ZH-CN_TOPIC_0000001128602595__gabee47ba229e81c44f648cf5b3203010f) (const TimeType &timeStamp) | void  Sets the timestamp when an event occurs.   
[operator new](https://device.harmonyos.com/cn/docs/develop/apiref/ui__utils-0000001128759817#ZH-CN_TOPIC_0000001128759817__ga4854963aa969ee20a6cd174a70f5cd23) (size_t size) | void *  Overrides the **new** function.   
[operator delete](https://device.harmonyos.com/cn/docs/develop/apiref/ui__utils-0000001128759817#ZH-CN_TOPIC_0000001128759817__gadf1997a0f56ac2b220e7f0f8e8e0a6ef) (void *p) | void  Overrides the **delete** function. 
