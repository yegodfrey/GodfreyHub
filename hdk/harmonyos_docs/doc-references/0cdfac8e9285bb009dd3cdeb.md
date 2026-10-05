---
name: document/cn/doc-references/icontinuationdevicecallback-0000001091482852
title: IContinuationDeviceCallback
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/icontinuationdevicecallback-0000001091482852
source: portal
---

# IContinuationDeviceCallback
    
    public interface IContinuationDeviceCallback  
  
---  
Provides callbacks for listening for device connection state changes.

**Since:**

5

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
default void | [onConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onConnected-ohos_aafwk_ability_continuation_ContinuationDeviceInfo-)​([ContinuationDeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/continuationdeviceinfo-0000001123694582) deviceInfo) |  Called when the user selects a device from the candidate device list.   
void | [onDeviceConnectDone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onDeviceConnectDone-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceId, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceType) |  Deprecated. This change is effective since API version 6, Replaced by [onConnected(ohos.aafwk.ability.continuation.ContinuationDeviceInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onConnected-ohos_aafwk_ability_continuation_ContinuationDeviceInfo-).   
void | [onDeviceDisconnectDone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onDeviceDisconnectDone-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceId) |  Deprecated. This change is effective since API version 6, Replaced by [onDisconnected(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onDisconnected-java_lang_String-).   
default void | [onDisconnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onDisconnected-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceId) |  Called when a device is disconnected from the hop task management service.   
  
#### Method Detail

#### [h2]onDeviceConnectDone

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) void onDeviceConnectDone​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceId, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceType)

Deprecated. This change is effective since API version 6, Replaced by [onConnected(ohos.aafwk.ability.continuation.ContinuationDeviceInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onConnected-ohos_aafwk_ability_continuation_ContinuationDeviceInfo-).

Called when the user selects a device from the candidate device list. You can implement your own processing logic in this callback to initiate the hop process. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
deviceId  |  Indicates the ID of the selected device.  
deviceType  |  Indicates the type of the selected device, which can be [ExtraParams#DEVICETYPE_SMART_PHONE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/extraparams-0000001091930936#ZH-CN_TOPIC_0000001091930936__DEVICETYPE_SMART_PHONE), [ExtraParams#DEVICETYPE_SMART_PAD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/extraparams-0000001091930936#ZH-CN_TOPIC_0000001091930936__DEVICETYPE_SMART_PAD), [ExtraParams#DEVICETYPE_SMART_WATCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/extraparams-0000001091930936#ZH-CN_TOPIC_0000001091930936__DEVICETYPE_SMART_WATCH), or [ExtraParams#DEVICETYPE_SMART_TV](https://developer.harmonyos.com/cn/docs/documentation/doc-references/extraparams-0000001091930936#ZH-CN_TOPIC_0000001091930936__DEVICETYPE_SMART_TV).  
  
**Since:**

5

#### [h2]onConnected

default void onConnected​([ContinuationDeviceInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/continuationdeviceinfo-0000001123694582) deviceInfo)

Called when the user selects a device from the candidate device list. You can implement your own processing logic in this callback to initiate the hop process. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
deviceInfo  |  Indicates the information about the selected device.  
  
**Since:**

6

#### [h2]onDeviceDisconnectDone

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) void onDeviceDisconnectDone​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceId)

Deprecated. This change is effective since API version 6, Replaced by [onDisconnected(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icontinuationdevicecallback-0000001091482852#ZH-CN_TOPIC_0000001091482852__onDisconnected-java_lang_String-).

Called when a device is disconnected from the hop task management service. You can implement your own processing logic in this callback, such as notifying the user of the disconnection. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
deviceId  |  Indicates the ID of the disconnected device.  
  
**Since:**

5

#### [h2]onDisconnected

default void onDisconnected​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) deviceId)

Called when a device is disconnected from the hop task management service. You can implement your own processing logic in this callback, such as notifying the user of the disconnection. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
deviceId  |  Indicates the ID of the disconnected device.  
  
**Since:**

6
