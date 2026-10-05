---
name: document/cn/doc-references/tonedescriptor-0000001054440193
title: ToneDescriptor
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/tonedescriptor-0000001054440193
source: portal
---

ToneDescriptor [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.audio.ToneDescriptor
    
    public class ToneDescriptor
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Describes a tone.  Tones are described by the high frequency and low frequency, which differ depending on tone types. **Since:** 1Nested Class Summary Modifier and Type | Class | Description  
---|---|---  
static class  | [ToneDescriptor.ToneType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor_tonetype-0000001054120239) |  The ToneType define different dtmf type.   
Constructor Summary Constructor | Description  
---|---  
[ToneDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor-0000001054440193#ZH-CN_TOPIC_0000001054440193__ToneDescriptor-ohos_media_audio_ToneDescriptor_ToneType-)​([ToneDescriptor.ToneType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor_tonetype-0000001054120239) type) |  A constructor used to create a ToneDescriptor instance.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
double | [getHighFrequency](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor-0000001054440193#ZH-CN_TOPIC_0000001054440193__getHighFrequency--)​() |  Obtains the high frequency value.   
double | [getLowFrequency](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor-0000001054440193#ZH-CN_TOPIC_0000001054440193__getLowFrequency--)​() |  Obtains the low frequency value.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]ToneDescriptor public ToneDescriptor​([ToneDescriptor.ToneType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor_tonetype-0000001054120239) type) A constructor used to create a ToneDescriptor instance. **Parameters:** Parameter Name | Parameter Description  
---|---  
type  |  Indicates the tone type, which is defined by [ToneDescriptor.ToneType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tonedescriptor_tonetype-0000001054120239). Different tone types correspond to different frequencies.  
**Since:** 1 Method Detail [h2]getHighFrequency public double getHighFrequency​() Obtains the high frequency value. **Returns:** Returns the high frequency value. **Since:** 1 [h2]getLowFrequency public double getLowFrequency​() Obtains the low frequency value. **Returns:** Returns the low frequency value. **Since:** 1
