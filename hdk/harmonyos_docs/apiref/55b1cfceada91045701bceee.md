---
name: document/cn/apiref/videotrackinfo-0000001055678134
title: VideoTrackInfo
uri: https://developer.huawei.com/consumer/cn/doc/apiref/videotrackinfo-0000001055678134
source: portal
---

# VideoTrackInfo

#### Overview

**Related Modules:**

[Format](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056)

**Description:**

Defines video track information. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
[format](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__a6c1972b11cd0dccb6dcfb5a5f9be960f) | [CodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__gaf7ed135f15d4b218d41705bac0122ba7)  
[profile](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__ae88938813de34933b48a0bf4c784d13e) | uint16_t   
[width](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__aeb35e568d32f0e62ff156cd0add506e5) | uint16_t   
[height](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__a6f23a6eb3e140c8d5c88067a9517ccad) | uint16_t   
[fpsNum](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__a2534734c1e6fd5aeaa598fb697bdce16) | uint16_t   
[fpsDen](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__ac2340827ee1c6faac89fec69deb1f909) | uint16_t   
[bitrate](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__a62bf491fa162c1b41c8ab3f8034c78a4) | uint32_t   
[rotate](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__a075619b83522eb991e8349bafe042455) | uint32_t   
[durationMs](https://device.harmonyos.com/cn/docs/develop/apiref/videotrackinfo-0000001055678134#ZH-CN_TOPIC_0000001055678134__ade7b28ac81909b6578a5b7df05f0a57c) | int64_t   
  
#### Details

#### Field

#### [h2]bitrate
    
    uint32_t VideoTrackInfo::bitrate

**Description:**

<Video bit rate, in bit/s 

#### [h2]durationMs
    
    int64_t VideoTrackInfo::durationMs

**Description:**

Track duration, in milliseconds 

#### [h2]format
    
    [CodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__gaf7ed135f15d4b218d41705bac0122ba7) VideoTrackInfo::format

**Description:**

Video encoding format. For details, see [CodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/format-0000001055358056#ZH-CN_TOPIC_0000001055358056__gaf7ed135f15d4b218d41705bac0122ba7). 

#### [h2]fpsDen
    
    uint16_t VideoTrackInfo::fpsDen

**Description:**

Denominator of the frame rate 

#### [h2]fpsNum
    
    uint16_t VideoTrackInfo::fpsNum

**Description:**

Numerator of the frame rate 

#### [h2]height
    
    uint16_t VideoTrackInfo::height

**Description:**

Height, in pixels 

#### [h2]profile
    
    uint16_t VideoTrackInfo::profile

**Description:**

Profile 

#### [h2]rotate
    
    uint32_t VideoTrackInfo::rotate

**Description:**

Video rotation angle. The value can be **90** , **180** , or **270**. The default value is **0**. 

#### [h2]width
    
    uint16_t VideoTrackInfo::width

**Description:**

Width, in pixels 
