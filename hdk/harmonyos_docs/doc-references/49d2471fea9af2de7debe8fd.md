---
name: document/cn/doc-references/idisplayeventcallback-0000001217877975
title: IDisplayEventCallback
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/idisplayeventcallback-0000001217877975
source: portal
---

# IDisplayEventCallback
    
    public interface IDisplayEventCallback  
  
---  
Provide callbacks to report events of a display device. 

You can invoke the callbacks provided in this class to report an event when a display device is connected, removed, or the information about the display device changes.

**Since:**

5

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [onDisplayChanged](https://developer.harmonyos.com/cn/docs/documentation/doc-references/idisplayeventcallback-0000001217877975#ZH-CN_TOPIC_0000001217877975__onDisplayChanged-int-)​(int displayId) |  Called when the display device information such as the display size or density changes.   
void | [onDisplayConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/idisplayeventcallback-0000001217877975#ZH-CN_TOPIC_0000001217877975__onDisplayConnected-int-)​(int displayId) |  Called when a display device is connected.   
void | [onDisplayDisconnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/idisplayeventcallback-0000001217877975#ZH-CN_TOPIC_0000001217877975__onDisplayDisconnected-int-)​(int displayId) |  Called when a display device is disconnected.   
  
#### Method Detail

#### [h2]onDisplayConnected

void onDisplayConnected​(int displayId)

Called when a display device is connected. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
displayId  |  Indicate the display device ID.  
  
**Since:**

5

#### [h2]onDisplayDisconnected

void onDisplayDisconnected​(int displayId)

Called when a display device is disconnected. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
displayId  |  Indicate the display device ID.  
  
**Since:**

5

#### [h2]onDisplayChanged

void onDisplayChanged​(int displayId)

Called when the display device information such as the display size or density changes. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
displayId  |  Indicate the display device ID.  
  
**Since:**

5
