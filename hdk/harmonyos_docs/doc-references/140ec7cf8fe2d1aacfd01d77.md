---
name: document/cn/doc-references/avcontrollercallback-0000001054678928
title: AVControllerCallback
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/avcontrollercallback-0000001054678928
source: portal
---

# AVControllerCallback

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.common.sessioncore.AVControllerCallback
    
    public abstract class AVControllerCallback
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides callbacks to receive changes, for example, of playback states or media metadata from [AVSession](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avsession-0000001054838902),You can use [AVController.setAVControllerCallback(AVControllerCallback)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontroller-0000001054238947#ZH-CN_TOPIC_0000001054238947__setAVControllerCallback-ohos_media_common_sessioncore_AVControllerCallback-),to register a callback with the media session.

**Since:**

3

#### Constructor Summary

Constructor | Description  
---|---  
[AVControllerCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__AVControllerCallback--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [onAVMetadataChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onAVMetadataChanged-ohos_media_common_AVMetadata-)​([AVMetadata](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avmetadata-0000001054358903) metadata) |  Called when media metadata changes.   
void | [onAVPlaybackStateChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onAVPlaybackStateChanged-ohos_media_common_sessioncore_AVPlaybackState-)​([AVPlaybackState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avplaybackstate-0000001054238927) state) |  Called when the playback state changes.   
void | [onAVQueueChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onAVQueueChanged-java_util_List-)​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[AVQueueElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avqueueelement-0000001054120257)> queue) |  Called when the playback queue changes.   
void | [onAVQueueTitleChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onAVQueueTitleChanged-java_lang_CharSequence-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) title) |  Called when the playback queue title changes.   
void | [onAVSessionDestroyed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onAVSessionDestroyed--)​() |  Called when a request to destroy the media session is received.   
void | [onAVSessionEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onAVSessionEvent-java_lang_String-ohos_utils_PacMap-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) event, [PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) options) |  Called when an event sent by the media session through [AVSession.sendAVSessionEvent(java.lang.String, ohos.utils.PacMap)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avsession-0000001054838902#ZH-CN_TOPIC_0000001054838902__sendAVSessionEvent-java_lang_String-ohos_utils_PacMap-) is received.   
void | [onOptionsChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avcontrollercallback-0000001054678928#ZH-CN_TOPIC_0000001054678928__onOptionsChanged-ohos_utils_PacMap-)​([PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) options) |  Called when additional information about the media session changes.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]AVControllerCallback

public AVControllerCallback​()

#### Method Detail

#### [h2]onAVSessionDestroyed

public void onAVSessionDestroyed​()

Called when a request to destroy the media session is received. You need to override this callback to process the request 

**Since:**

3

#### [h2]onAVSessionEvent

public void onAVSessionEvent​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) event, [PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) options)

Called when an event sent by the media session through [AVSession.sendAVSessionEvent(java.lang.String, ohos.utils.PacMap)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avsession-0000001054838902#ZH-CN_TOPIC_0000001054838902__sendAVSessionEvent-java_lang_String-ohos_utils_PacMap-) is received. You need to override this callback to handle the event 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
event  |  Indicates the name of the event that has been sent  
options  |  Indicates additional information about the event  
  
**Since:**

3

#### [h2]onAVPlaybackStateChanged

public void onAVPlaybackStateChanged​([AVPlaybackState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avplaybackstate-0000001054238927) state)

Called when the playback state changes. You need to override this callback to handle the change 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
state  |  Indicates the new playback state, which is one defined in [AVPlaybackState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avplaybackstate-0000001054238927)  
  
**Since:**

3

#### [h2]onAVMetadataChanged

public void onAVMetadataChanged​([AVMetadata](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avmetadata-0000001054358903) metadata)

Called when media metadata changes. You need to override this callback to handle the change 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
metadata  |  Indicates the new media metadata. For details, see [AVMetadata](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avmetadata-0000001054358903)  
  
**Since:**

3

#### [h2]onAVQueueChanged

public void onAVQueueChanged​([List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[AVQueueElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avqueueelement-0000001054120257)> queue)

Called when the playback queue changes. You need to override this callback to handle the change 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
queue  |  Indicates the updated playback queue. For details, see [AVQueueElement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avqueueelement-0000001054120257)  
  
**Since:**

3

#### [h2]onAVQueueTitleChanged

public void onAVQueueTitleChanged​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) title)

Called when the playback queue title changes. You need to override this callback to handle the change 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
title  |  Indicates the new title of the playback queue  
  
**Since:**

3

#### [h2]onOptionsChanged

public void onOptionsChanged​([PacMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pacmap-0000001054440291) options)

Called when additional information about the media session changes. You need to override this callback to handle the change 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
options  |  Indicates the updated additional information about the [AVSession](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avsession-0000001054838902) instance  
  
**Since:**

3
