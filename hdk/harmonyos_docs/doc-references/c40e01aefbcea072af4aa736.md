---
name: document/cn/doc-references/codec-0000001054238921
title: Codec
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/codec-0000001054238921
source: portal
---

# Codec

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.codec.Codec
    
    public class Codec
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides the audio/video encoding and decoding functions. It has two working modes: normal and pipeline. 

In normal mode, applications must manually transfer source data to the codec continuously. 

In pipeline mode, applications only need to set the data source using the Source class. The codec automatically reads source data from the data source and parses the data. 

Applications are notified of the encoded or decoded data through the registered listener. 

The following describes how to use the decoder. 

To use the decoder in normal mode, perform the following steps: 

    1. Call [createDecoder()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createDecoder--) to create a decoder instance. 
    2. Call [setCodecFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setCodecFormat-ohos_media_common_Format-) to set the data source format. 
    3. Call [registerCodecListener(ohos.media.codec.Codec.ICodecListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__registerCodecListener-ohos_media_codec_Codec_ICodecListener-) to register a listener. 
    4. Call [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--) to start decoding. 
    5. Call [getAvailableBuffer(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getAvailableBuffer-long-) and [writeBuffer(java.nio.ByteBuffer, ohos.media.common.BufferInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__writeBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-) to transfer source data to the decoder instance. 
    6. Call [stop()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__stop--) to stop decoding. 

To use the decoder in pipeline mode, perform the following steps: 

    1. Call [createDecoder()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createDecoder--) to create a decoder instance. 
    2. Call [setSource(ohos.media.common.Source, ohos.media.codec.TrackInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSource-ohos_media_common_Source-ohos_media_codec_TrackInfo-) to set the data source. 
    3. Call [registerCodecListener(ohos.media.codec.Codec.ICodecListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__registerCodecListener-ohos_media_codec_Codec_ICodecListener-) to register a listener. 
    4. Call [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--) to start decoding. 

The following describes how to use the encoder. 

To use the encoder in normal mode, perform the following steps: 

    1. Call [createEncoder()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createEncoder--) to create an encoder instance. 
    2. Call [setCodecFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setCodecFormat-ohos_media_common_Format-) to set the output data format. 
    3. Call [registerCodecListener(ohos.media.codec.Codec.ICodecListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__registerCodecListener-ohos_media_codec_Codec_ICodecListener-) to register a listener. 
    4. Call [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--) to start encoding. 
    5. Call [getAvailableBuffer(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getAvailableBuffer-long-) and [writeBuffer(java.nio.ByteBuffer, ohos.media.common.BufferInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__writeBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-) to transfer source data to the encoder instance. 
    6. Call [stop()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__stop--) to stop encoding. 

The encoder in pipeline mode applies only to videos. To use the encoder in pipeline mode, perform the following steps: 

    1. Call [createEncoder()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createEncoder--) to create an encoder instance. 
    2. Call [setSource(ohos.media.common.Source, ohos.media.codec.TrackInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSource-ohos_media_common_Source-ohos_media_codec_TrackInfo-) to set the data source. 
    3. Call [setSourceFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSourceFormat-ohos_media_common_Format-) to set the data source format and encoding parameters. 
    4. Call [registerCodecListener(ohos.media.codec.Codec.ICodecListener)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__registerCodecListener-ohos_media_codec_Codec_ICodecListener-) to register a listener. 
    5. Call [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--) to start encoding. 

**Since:**

1

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static interface  | [Codec.ICodecListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901) |  Receives notifications during encoding or decoding, such as encoded or decoded data and error messages.   
  
#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [VIDEO_SCALE_TYPE_CROP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__VIDEO_SCALE_TYPE_CROP) |  Indicates that the aspect ratio of the video remains unchanged.   
static int | [VIDEO_SCALE_TYPE_FIT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__VIDEO_SCALE_TYPE_FIT) |  Indicates that the video is stretched in the rendering surface.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [Codec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921) | [createDecoder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createDecoder--)​() |  Creates a decoder instance.   
static [Codec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921) | [createEncoder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createEncoder--)​() |  Creates an encoder instance.   
[Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) | [createLastingVideoSurface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__createLastingVideoSurface--)​() |  Creates a lasting Surface object for this encoder.   
protected void | [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__finalize--)​() |  Called by the garbage collector on an object when garbage collection determines that there are no more references to the object.   
boolean | [flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__flush--)​() |  Flush all buffers.   
[ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) | [getAvailableBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getAvailableBuffer-long-)​(long timeout) |  Obtains a ByteBuffer in normal mode.   
[Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) | [getBufferFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getBufferFormat-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) buffer) |  Obtains the output data format.   
int | [getInputBufferIndex](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getInputBufferIndex-long-)​(long timeout) |  Obtains a dequeued input buffer index.   
[CodecDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codecdescription-0000001061156872) | [obtainCodecDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__obtainCodecDescription--)​() |  Obtains the [CodecDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codecdescription-0000001061156872) object.   
[Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702),[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [obtainCodecName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__obtainCodecName--)​() |  Obtains the codec name.   
[PixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap-0000001172716678) | [obtainInputPixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__obtainInputPixelMap-int-)​(int index) |  Obtains a writable pixel map for a dequeued input buffer.   
[Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) | [obtainInputSurface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__obtainInputSurface--)​() |  Obtains a Surface object created for this encoder.   
[PixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap-0000001172716678) | [obtainOutputPixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__obtainOutputPixelMap-int-)​(int index) |  Obtains a read-only pixel map for a dequeued output buffer.   
boolean | [registerCodecListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__registerCodecListener-ohos_media_codec_Codec_ICodecListener-)​([Codec.ICodecListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901) listener) |  Registers a listener to asynchronously receive encoded or decoded data.   
boolean | [release](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__release--)​() |  Releases all resources, including the memory applied by the native layer.   
boolean | [setCodecFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setCodecFormat-ohos_media_common_Format-)​([Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) format) |  Sets encoding or decoding parameters in normal mode.   
boolean | [setLastingVideoSurface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setLastingVideoSurface-ohos_agp_graphics_Surface-)​([Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) lastingSurface) |  Sets a lasting Surface object for this encoder.   
boolean | [setProperty](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setProperty-ohos_media_common_Format-)​([Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) format) |  Sets encoding or decoding properties.   
boolean | [setSource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSource-ohos_media_common_Source-ohos_media_codec_TrackInfo-)​([Source](https://developer.harmonyos.com/cn/docs/documentation/doc-references/source-0000001054358912) source, [TrackInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trackinfo-0000001054838876) trackInfo) |  Sets the data source.   
boolean | [setSourceFormat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSourceFormat-ohos_media_common_Format-)​([Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) format) |  Sets the data source format and encoding parameters.   
boolean | [setVideoScaleType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setVideoScaleType-int-)​(int type) |  Sets the video scaling type.   
boolean | [setVideoSurface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setVideoSurface-ohos_agp_graphics_Surface-)​([Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) surface) |  Sets the surface for the decoder to display decoded video data.   
boolean | [start](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--)​() |  Starts encoding or decoding after the preparation is complete.   
boolean | [stop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__stop--)​() |  Stops encoding or decoding.   
boolean | [stopVideoSurface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__stopVideoSurface--)​() |  Informs the encoder of the end of input and stops encoding.   
boolean | [writeBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__writeBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) buffer, [BufferInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bufferinfo-0000001054238923) info) |  Pushes source data to the encoder or decoder.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]VIDEO_SCALE_TYPE_CROP

public static final int VIDEO_SCALE_TYPE_CROP

Indicates that the aspect ratio of the video remains unchanged. 

If the aspect ratio of the video differs from that of the surface, the video will be cropped to fit the surface.

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_codec_Codec_VIDEO_SCALE_TYPE_CROP)

#### [h2]VIDEO_SCALE_TYPE_FIT

public static final int VIDEO_SCALE_TYPE_FIT

Indicates that the video is stretched in the rendering surface. 

If the aspect ratio of the video differs from that of the surface, the original aspect ratio will not be retained during video rendering.

**Since:**

3

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_codec_Codec_VIDEO_SCALE_TYPE_FIT)

#### Method Detail

#### [h2]createDecoder

public static [Codec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921) createDecoder​()

Creates a decoder instance. 

**Returns:**

Returns a decoder instance.

**Since:**

1

#### [h2]createEncoder

public static [Codec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921) createEncoder​()

Creates an encoder instance. 

**Returns:**

Returns an encoder instance.

**Since:**

1

#### [h2]registerCodecListener

public boolean registerCodecListener​([Codec.ICodecListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901) listener)

Registers a listener to asynchronously receive encoded or decoded data. 

To use the Codec class for encoding or decoding, a listener must be registered. If registerCodecListener is called multiple times, the codec records only the last registered listener. 

If null is transferred, the codec clears the previous listener. 

The current method must be called prior to [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
listener  |  Indicates a codec listener instance. For details, see [ICodecListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901).  
  
**Returns:**

Returns true if the listener is registered; returns false otherwise.

**Since:**

1

#### [h2]setSource

public boolean setSource​([Source](https://developer.harmonyos.com/cn/docs/documentation/doc-references/source-0000001054358912) source, [TrackInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trackinfo-0000001054838876) trackInfo)

Sets the data source. 

If you set the data source by calling this method, the pipeline mode is used. The codec automatically parses source data in the background and notifies your application of the parsed data through the listener. 

For an encoder, you must also call [setSourceFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSourceFormat-ohos_media_common_Format-) to set the data source format and encoding parameters. 

The current method must be called prior to [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
source  |  Indicates the data source. For details, see [Source](https://developer.harmonyos.com/cn/docs/documentation/doc-references/source-0000001054358912).  
trackInfo  |  Indicates the source track information for a decoder. This parameter is invalid for an encoder. The value null indicates that no track information is available.  
  
**Returns:**

Returns true if the setting is successful; returns false otherwise.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if a parameter is invalid.  
  
**Since:**

1

#### [h2]setSourceFormat

public boolean setSourceFormat​([Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) format)

Sets the data source format and encoding parameters. 

After the data source is set for an encoder, you must call this method to set the data source format and encoding parameters.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
format  |  Indicates the data source format and encoding parameters.  
  
**Returns:**

Returns true if the setting is successful; returns false otherwise.

**Since:**

1

#### [h2]setCodecFormat

public boolean setCodecFormat​([Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) format)

Sets encoding or decoding parameters in normal mode. 

If the normal mode is used, you must call this method to set the source data format and encoding or decoding parameters. 

For an encoder, this method is used to set the source data format and encoding parameters. 

For a decoder, this method is used to set the source data format. 

The current method must be called prior to [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--). 

If [setSource(ohos.media.common.Source, ohos.media.codec.TrackInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSource-ohos_media_common_Source-ohos_media_codec_TrackInfo-) is called for the decoder, the decoder automatically analyzes the source data format. You do not need to call the current method.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
format  |  Indicates the data format.  
  
**Returns:**

Returns true if the setting is successful; returns false otherwise.

**Since:**

1

#### [h2]setProperty

public boolean setProperty​([Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) format)

Sets encoding or decoding properties. 

In normal mode, this method must be called after [setCodecFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setCodecFormat-ohos_media_common_Format-). 

In pipeline mode, this method can only used for encoding and must be called after [setSource(ohos.media.common.Source, ohos.media.codec.TrackInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSource-ohos_media_common_Source-ohos_media_codec_TrackInfo-).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
format  |  Indicates the data format.  
  
**Returns:**

Returns true if the setting is successful; returns false otherwise.

**Since:**

1

#### [h2]obtainInputSurface

public [Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) obtainInputSurface​()

Obtains a Surface object created for this encoder. 

The Surface object is used for the input of the encoder. 

This method must be called after #SetCodecFormat(ohos.media.common.Format) or [setSourceFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSourceFormat-ohos_media_common_Format-) and before [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Returns:**

Returns the created Surface object.

**Since:**

4

#### [h2]setVideoSurface

public boolean setVideoSurface​([Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) surface)

Sets the surface for the decoder to display decoded video data. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
surface  |  Indicates a surface instance.  
  
**Returns:**

Returns true if the setting is successful; returns false otherwise.

**Since:**

1

#### [h2]setVideoScaleType

public boolean setVideoScaleType​(int type)

Sets the video scaling type. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  Indicates the way the video will be scaled. The value must be one of the following: 
    * [VIDEO_SCALE_TYPE_FIT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__VIDEO_SCALE_TYPE_FIT)
    * [VIDEO_SCALE_TYPE_CROP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__VIDEO_SCALE_TYPE_CROP)  
  
**Returns:**

Returns true if the operation is successful; returns false otherwise.

**Since:**

3

#### [h2]getAvailableBuffer

public [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) getAvailableBuffer​(long timeout)

Obtains a ByteBuffer in normal mode. 

This method applies only to the normal mode and is invalid in the pipeline mode. In normal mode, you must manually transfer source data to the codec. Specifically, call getAvailableBuffer to obtain a ByteBuffer, then fill the source data in the ByteBuffer, and finally call [writeBuffer(java.nio.ByteBuffer, ohos.media.common.BufferInfo)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__writeBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-) to pass the source data from the ByteBuffer to the codec. 

The current method must be called after [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
timeout  |  Indicates the duration that the codec can wait for a ByteBuffer, in milliseconds. If there is no available ByteBuffer after the specified duration is reached, the value null is returned. If this parameter is set to -1, the method is blocked until it obtains a byte buffer or an error occurs.  
  
**Returns:**

Returns a ByteBuffer; returns null if a timeout or error occurs.

**Since:**

1

#### [h2]writeBuffer

public boolean writeBuffer​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) buffer, [BufferInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bufferinfo-0000001054238923) info)

Pushes source data to the encoder or decoder. 

This method applies only to the normal mode and is invalid in the pipeline mode. The ByteBuffer parameter must be set to that obtained by calling [getAvailableBuffer(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getAvailableBuffer-long-). 

The current method must be called after [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buffer  |  Indicates the ByteBuffer returned by [getAvailableBuffer(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getAvailableBuffer-long-).  
info  |  Indicates the BufferInfo type. For details, see [BufferInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bufferinfo-0000001054238923).  
  
**Returns:**

Returns true if the source data is pushed to the encoder or decoder; returns false otherwise.

**Since:**

1

#### [h2]getBufferFormat

public [Format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/format-0000001054678893) getBufferFormat​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) buffer)

Obtains the output data format. 

This function is used to obtain the format of output data after encoding or decoding. The output data is carried in the ByteBuffer parameter in [ICodecListener#onReadBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901#ZH-CN_TOPIC_0000001054358901__onReadBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-int-).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buffer  |  Indicates the ByteBuffer returned by [ICodecListener#onReadBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901#ZH-CN_TOPIC_0000001054358901__onReadBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-int-).  
  
**Returns:**

Returns the output data format if obtained; returns null otherwise.

**Since:**

1

#### [h2]start

public boolean start​()

Starts encoding or decoding after the preparation is complete. 

**Returns:**

Returns true if the task is started; returns false otherwise.

**Since:**

1

#### [h2]stop

public boolean stop​()

Stops encoding or decoding. 

**Returns:**

Returns true if the task is stopped; returns false otherwise.

**Since:**

1

#### [h2]release

public boolean release​()

Releases all resources, including the memory applied by the native layer. After this method is called, the Codec instance will not have the encoding or decoding capability. 

**Returns:**

Returns true if the resources are released; returns false otherwise.

**Since:**

1

#### [h2]flush

public boolean flush​()

Flush all buffers. 

**Returns:**

Returns true if flush succeed; returns false otherwise.

**Since:**

5

#### [h2]stopVideoSurface

public boolean stopVideoSurface​()

Informs the encoder of the end of input and stops encoding. 

**Returns:**

Returns true if the encoder input ends normally; returns false otherwise.

**Since:**

6

#### [h2]obtainCodecName

public [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[Integer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702),[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> obtainCodecName​()

Obtains the codec name. 

**Returns:**

Returns the codec name.

**Since:**

6

#### [h2]obtainCodecDescription

public [CodecDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codecdescription-0000001061156872) obtainCodecDescription​()

Obtains the [CodecDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codecdescription-0000001061156872) object. 

**Returns:**

Returns the [CodecDescription](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codecdescription-0000001061156872) object.

**Since:**

6

#### [h2]obtainOutputPixelMap

public [PixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap-0000001172716678) obtainOutputPixelMap​(int index)

Obtains a read-only pixel map for a dequeued output buffer. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index  |  Indicates the index of a dequeued output buffer returned by [ICodecListener#onReadBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec_icodeclistener-0000001054358901#ZH-CN_TOPIC_0000001054358901__onReadBuffer-java_nio_ByteBuffer-ohos_media_common_BufferInfo-int-).  
  
**Returns:**

Returns the output pixel map if obtained; returns null otherwise.

**Since:**

6

#### [h2]obtainInputPixelMap

public [PixelMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pixelmap-0000001172716678) obtainInputPixelMap​(int index)

Obtains a writable pixel map for a dequeued input buffer. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
index  |  Indicates the index of a dequeued input buffer returned by [getInputBufferIndex(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__getInputBufferIndex-long-).  
  
**Returns:**

Returns the input pixel map if obtained; returns null otherwise.

**Since:**

6

#### [h2]createLastingVideoSurface

public [Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) createLastingVideoSurface​()

Creates a lasting Surface object for this encoder. 

The lasting Surface object is used for the input of the encoder. 

This method must be called after #SetCodecFormat(ohos.media.common.Format) or [setSourceFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSourceFormat-ohos_media_common_Format-) and before [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Returns:**

Returns the created lasting Surface object.

**Since:**

6

#### [h2]setLastingVideoSurface

public boolean setLastingVideoSurface​([Surface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/surface-0000001054120059) lastingSurface)

Sets a lasting Surface object for this encoder. 

The lasting Surface object is used for the input of the encoder. 

This method must be called after #SetCodecFormat(ohos.media.common.Format) or [setSourceFormat(ohos.media.common.Format)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__setSourceFormat-ohos_media_common_Format-) and before [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codec-0000001054238921#ZH-CN_TOPIC_0000001054238921__start--).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
lastingSurface  |  Indicates the lasting surface used for input.  
  
**Returns:**

Returns true if the setting is successful; returns false otherwise.

**Since:**

6

#### [h2]getInputBufferIndex

public int getInputBufferIndex​(long timeout)

Obtains a dequeued input buffer index. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
timeout  |  Indicates the duration that the codec can wait for a dequeued input buffer index, in milliseconds.  
  
**Returns:**

Returns the index if obtained; returns -1 otherwise.

**Since:**

6

#### [h2]finalize

protected void finalize​() throws [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)

Description copied from class: [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--)

Called by the garbage collector on an object when garbage collection determines that there are no more references to the object. A subclass overrides the finalize method to dispose of system resources or to perform other cleanup. 

The general contract of finalize is that it is invoked if and when the Java™ virtual machine has determined that there is no longer any means by which this object can be accessed by any thread that has not yet died, except as a result of an action taken by the finalization of some other object or class which is ready to be finalized. The finalize method may take any action, including making this object available again to other threads; the usual purpose of finalize, however, is to perform cleanup actions before the object is irrevocably discarded. For example, the finalize method for an object that represents an input/output connection might perform explicit I/O transactions to break the connection before the object is permanently discarded. 

The finalize method of class Object performs no special action; it simply returns normally. Subclasses of Object may override this definition. 

The Java programming language does not guarantee which thread will invoke the finalize method for any given object. It is guaranteed, however, that the thread that invokes finalize will not be holding any user-visible synchronization locks when finalize is invoked. If an uncaught exception is thrown by the finalize method, the exception is ignored and finalization of that object terminates. 

After the finalize method has been invoked for an object, no further action is taken until the Java virtual machine has again determined that there is no longer any means by which this object can be accessed by any thread that has not yet died, including possible actions by other objects or classes which are ready to be finalized, at which point the object may be discarded. 

The finalize method is never invoked more than once by a Java virtual machine for any given object. 

Any exception thrown by the finalize method causes the finalization of this object to be halted, but is otherwise ignored.

**Overrides:**

[finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Throws:**

Throw Name | Throw Description  
---|---  
[Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436) |  the Exception raised by this method  
  
**See Also:**

[WeakReference](https://developer.harmonyos.com/cn/docs/documentation/doc-references/weakreference-0000001054678435), [PhantomReference](https://developer.harmonyos.com/cn/docs/documentation/doc-references/phantomreference-0000001054678466)
