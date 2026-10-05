---
name: document/cn/doc-references/channel-0000001054558965
title: Channel
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/channel-0000001054558965
source: portal
---

Channel [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.nfc.oma.Channel  
      
    public final class Channel
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides interfaces to create Channel objects and obtain Channel information. The interfaces can be used to check whether a channel is disabled or whether a channel is a basic one, disable a channel, send an APDU command, and obtain the response of a secure element. **Since:** 1Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [closeChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054558965#ZH-CN_TOPIC_0000001054558965__closeChannel--)​() |  Disables a channel.   
byte[] | [getSelectResponse](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054558965#ZH-CN_TOPIC_0000001054558965__getSelectResponse--)​() |  Obtains the response to the command to select a secure element.   
boolean | [isBasicChannel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054558965#ZH-CN_TOPIC_0000001054558965__isBasicChannel--)​() |  Checks whether a channel is a basic one.   
boolean | [isClosed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054558965#ZH-CN_TOPIC_0000001054558965__isClosed--)​() |  Checks whether a channel is disabled.   
byte[] | [transmit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/channel-0000001054558965#ZH-CN_TOPIC_0000001054558965__transmit-byte:A-)​(byte[] command) |  Sends an APDU command to a secure element.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Method Detail [h2]isClosed public boolean isClosed​() Checks whether a channel is disabled. A channel must have been enabled before an APDU command is sent through the channel. **Returns:** Returns true if the channel is disabled; returns false otherwise. **Since:** 1 [h2]isBasicChannel public boolean isBasicChannel​() Checks whether a channel is a basic one. **Returns:** Returns true if the channel is a basic one; returns false otherwise. **Since:** 1 [h2]transmit public byte[] transmit​(byte[] command) Sends an APDU command to a secure element. **Parameters:** Parameter Name | Parameter Description  
---|---  
command  |  Indicates the APDU command.  
**Returns:** Returns the response code. **Since:** 1 [h2]getSelectResponse public byte[] getSelectResponse​() Obtains the response to the command to select a secure element. The response is in byte array format. **Returns:** Returns the response to the command to select a secure element. **Since:** 1 [h2]closeChannel public void closeChannel​() Disables a channel. **Since:** 1
