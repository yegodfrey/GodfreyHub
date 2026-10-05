---
name: document/cn/doc-references/codec_icodeclistener-0000001054358901
title: Codec.ICodecListener
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/codec_icodeclistener-0000001054358901
source: portal
---

# Codec.ICodecListener
    
    public static interface Codec.ICodecListener  
  
---  
Receives notifications during encoding or decoding, such as encoded or decoded data and error messages.

**Since:**

1

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [onError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901#ZH-CN_TOPIC_0000001054358901__onError-int-int-int-)​(int errorCode, int act, int trackId) |  Reports an error that occurs during encoding or decoding.   
void | [onReadBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901#ZH-CN_TOPIC_0000001054358901__onReadBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-int-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) outputBuffer, [BufferInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bufferinfo-0000001054238923) info, int trackId) |  Reports encoded or decoded data.   
  
#### Method Detail

#### [h2]onReadBuffer

void onReadBuffer​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) outputBuffer, [BufferInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bufferinfo-0000001054238923) info, int trackId)

Reports encoded or decoded data. After encoding or decoding data in [Codec.writeBuffer(java.nio.ByteBuffer, ohos.media.common.BufferInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__writeBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-), the codec calls this method to asynchronously notify the application of the encoded or decoded data. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
outputBuffer  |  Contains encoded or decoded data.  
info  |  Indicates the outputBuffer parameter.  
trackId  |  Indicates the ID of the track where the data is located in pipeline mode. This parameter is invalid in normal mode.  
  
**Since:**

1

#### [h2]onError

void onError​(int errorCode, int act, int trackId)

Reports an error that occurs during encoding or decoding. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
errorCode  |  Indicates the error type, such as resource insufficiency or reclaimed resources.  
act  |  Indicates the scenario in which the error occurs.  
trackId  |  Indicates the ID of the track where the data is located in pipeline mode. This parameter is invalid in normal mode.  
  
**Since:**

1
