---
name: document/cn/doc-references/audioswiftsession-0000001091873890
title: AudioSwiftSession
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/audioswiftsession-0000001091873890
source: portal
---

AudioSwiftSession java.lang.Object |---ohos.media.audio.AudioSwiftSession
    
    public class AudioSwiftSession
    extends java.lang.Object  
  
---  
Represents a low-latency and high-performance session for applications to play pulse-code modulation (PCM) audio. Currently, this class is available for smart TVs only and supports only 16-bit, 48000 Hz, and dual-channel PCM data. **Since:** 5Method Summary Modifier and Type | Method | Description  
---|---|---  
boolean | [close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__close--)​() |  Closes this AudioSwiftSession instance to release audio resources.   
static [AudioSwiftSession](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890) | [create](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__create-ohos_media_audio_AudioStreamInfo-)​(ohos.media.audio.AudioStreamInfo info) |  Creates an AudioSwiftSession instance based on a specified AudioStreamInfo instance.   
[AudioSwiftTrack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswifttrack-0000001138576093) | [getTrack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__getTrack--)​() |  Obtains the [AudioSwiftTrack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswifttrack-0000001138576093) instance as the audio input track, which is used for PCM data writing.   
boolean | [open](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__open--)​() |  Opens this AudioSwiftSession instance and initializes audio resources.   
boolean | [start](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__start--)​() |  Starts this AudioSwiftSession instance.   
boolean | [stop](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__stop--)​() |  Stops this AudioSwiftSession instance.   
protected boolean | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__write-byte:A-int-int-)​(byte[] data, int offset, int size) |  Writes PCM data.   
Methods inherited from class java.lang.Object  
---  
clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait  
Method Detail [h2]create public static [AudioSwiftSession](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890) create​(ohos.media.audio.AudioStreamInfo info) throws java.lang.IllegalArgumentException Creates an AudioSwiftSession instance based on a specified AudioStreamInfo instance. **Parameters:** Parameter Name | Parameter Description  
---|---  
info  |  Indicates the AudioStreamInfo instance, which stores information about the audio stream to play, such as the sampling rate, PCM type, and channels.  
**Returns:** Returns the created AudioSwiftSession instance. **Throws:** Throw Name | Throw Description  
---|---  
java.lang.IllegalArgumentException  |  Throws this exception if info is invalid.  
**Since:** 5 [h2]getTrack public [AudioSwiftTrack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswifttrack-0000001138576093) getTrack​() Obtains the [AudioSwiftTrack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswifttrack-0000001138576093) instance as the audio input track, which is used for PCM data writing. **Returns:** Returns the obtained [AudioSwiftTrack](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswifttrack-0000001138576093) instance. **Since:** 5 [h2]open public boolean open​() Opens this AudioSwiftSession instance and initializes audio resources. **Returns:** Returns true if the operation is successful; returns false otherwise. **Since:** 5 [h2]start public boolean start​() Starts this AudioSwiftSession instance. PCM data can be written only after the session is started. **Returns:** Returns true if the operation is successful; returns false otherwise. **Since:** 5 [h2]stop public boolean stop​() Stops this AudioSwiftSession instance. PCM data writing fails after the session is stopped. You can write data again after calling [start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__start--). **Returns:** Returns true if the operation is successful; returns false otherwise. **Since:** 5 [h2]close public boolean close​() Closes this AudioSwiftSession instance to release audio resources. **Returns:** Returns true if the operation is successful; returns false otherwise. **Since:** 5 [h2]write protected boolean write​(byte[] data, int offset, int size) Writes PCM data. This method can be called only after the session is started by [AudioSwiftSession#start()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/audioswiftsession-0000001091873890#ZH-CN_TOPIC_0000001091873890__start--). Currently, only 16-bit, 48000 Hz, and dual-channel PCM data is supported. **Parameters:** Parameter Name | Parameter Description  
---|---  
data  |  Indicates the PCM data to write.  
offset  |  Indicates the offset (in bytes) where the data writing starts.  
size  |  Indicates the length (in bytes) of the PCM data to write.  
**Returns:** Returns true if the operation is successful; returns false otherwise. **Since:** 5
