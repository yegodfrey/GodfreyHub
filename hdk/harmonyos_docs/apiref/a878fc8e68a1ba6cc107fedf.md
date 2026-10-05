---
name: document/cn/apiref/ohos_1_1media_1_1streamsource-0000001054879546
title: OHOS::Media::StreamSource
uri: https://developer.huawei.com/consumer/cn/doc/apiref/ohos_1_1media_1_1streamsource-0000001054879546
source: portal
---

# OHOS::Media::StreamSource  
  
#### Overview

**Related Modules:**

[MultiMedia_MediaCommon](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046)

**Description:**

Provides functions related to the stream source for upper-layer applications. 

After the **SetSource** function is called, the player invokes [OnBufferAvailable](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gaaebd4fe9df44b434f410aec32cf23467) to notify your application of the buffer memory block that can be filled with data. The player can invoke [SetStreamCallback](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__ga078516891396a86226c945e02c79c1f5) to register a callback for your application. For example, the **GetBuffer** callback obtains the address of the buffer block and sends the filled buffer memory block to the player. The buffer memory block is allocated and processed on the player. **[StreamSource](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1streamsource-0000001054879546)** is available only for the media source of the **SOURCE_TYPE_STREAM** type. For details, see [SourceType](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__ga3ae727773c367ac1041d72ac770a0ab1). 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Public Member Functions

Function | Description  
---|---  
[OnBufferAvailable](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gaaebd4fe9df44b434f410aec32cf23467) (size_t [index](https://device.harmonyos.com/cn/docs/develop/apiref/utils-0000001055308029#ZH-CN_TOPIC_0000001055308029__ga1d3748ca570dcb09a2fb28e8015107dd), size_t offset, size_t size)=0 | virtual void  Notifies your application of the information about the buffer memory block that can be filled with data.   
[SetStreamCallback](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__ga078516891396a86226c945e02c79c1f5) (const std::shared_ptr< [StreamCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1streamcallback-0000001054479577) > &callback)=0 | virtual void  Sets a callback function for your application. 
