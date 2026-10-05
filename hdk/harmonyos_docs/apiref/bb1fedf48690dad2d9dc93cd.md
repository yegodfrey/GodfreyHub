---
name: document/cn/apiref/audiocapture-0000001055358098
title: AudioCapture
uri: https://developer.huawei.com/consumer/cn/doc/apiref/audiocapture-0000001055358098
source: portal
---

# AudioCapture

#### Overview

**Related Modules:**

[Audio](https://device.harmonyos.com/cn/docs/develop/apiref/audio-0000001054479511)

**Description:**

Provides capabilities for audio capturing, including controlling the capturing, setting audio attributes, scenes, and volume, and capturing audio frames. 

See also 
    [AudioControl](https://device.harmonyos.com/cn/docs/develop/apiref/audiocontrol-0000001055078129)
     [AudioAttribute](https://device.harmonyos.com/cn/docs/develop/apiref/audioattribute-0000001055198120)
     [AudioScene](https://device.harmonyos.com/cn/docs/develop/apiref/audioscene-0000001054718117)
     [AudioVolume](https://device.harmonyos.com/cn/docs/develop/apiref/audiovolume-0000001054598153)

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Data Fields

Variable Name | Description  
---|---  
control  |  struct [AudioControl](https://device.harmonyos.com/cn/docs/develop/apiref/audiocontrol-0000001055078129) Defines the audio control. For details, see [AudioControl](https://device.harmonyos.com/cn/docs/develop/apiref/audiocontrol-0000001055078129).   
attr  |  struct [AudioAttribute](https://device.harmonyos.com/cn/docs/develop/apiref/audioattribute-0000001055198120) Defines the audio attribute. For details, see [AudioAttribute](https://device.harmonyos.com/cn/docs/develop/apiref/audioattribute-0000001055198120).   
scene  |  struct [AudioScene](https://device.harmonyos.com/cn/docs/develop/apiref/audioscene-0000001054718117) Defines the audio scene. For details, see [AudioScene](https://device.harmonyos.com/cn/docs/develop/apiref/audioscene-0000001054718117).   
volume  |  struct [AudioVolume](https://device.harmonyos.com/cn/docs/develop/apiref/audiovolume-0000001054598153) Defines audio volume. For details, see [AudioVolume](https://device.harmonyos.com/cn/docs/develop/apiref/audiovolume-0000001054598153).   
[CaptureFrame](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098#ZH-CN_TOPIC_0000001055358098__a89f1baf4b6177f91b9135e86cc8681da) )(struct [AudioCapture](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098) *capture, void *frame, uint64_t requestBytes, uint64_t *replyBytes) | int32_t(*  Reads a frame of input data (uplink data) from the audio driver for capturing.   
[GetCapturePosition](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098#ZH-CN_TOPIC_0000001055358098__ad307fd1eca38f257f865c1316db6e5d5) )(struct [AudioCapture](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098) *capture, uint64_t *frames, struct [AudioTimeStamp](https://device.harmonyos.com/cn/docs/develop/apiref/audiotimestamp-0000001055198122) *[time](https://device.harmonyos.com/cn/docs/develop/apiref/time-0000001055108017#ZH-CN_TOPIC_0000001055108017__gae7841e681c8c9d59818568d39553642c)) | int32_t(*  Obtains the last number of input audio frames.   
  
#### Details

#### Field

#### [h2]CaptureFrame
    
    int32_t(* AudioCapture::CaptureFrame) (struct [AudioCapture](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098) *capture, void *frame, uint64_t requestBytes, uint64_t *replyBytes)

**Description:**

Reads a frame of input data (uplink data) from the audio driver for capturing. 

**Parameters:**

Name | Description  
---|---  
capture | Indicates the pointer to the **[AudioCapture](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098)** object to operate.   
frame | Indicates the pointer to the input data to read.   
requestBytes | Indicates the size of the input data, in bytes.   
replyBytes | Indicates the pointer to the actual length (in bytes) of the audio data to read.   
  
**Returns:**

Returns **0** if the input data is read successfully; returns a negative value otherwise. 

#### [h2]GetCapturePosition
    
    int32_t(* AudioCapture::GetCapturePosition) (struct [AudioCapture](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098) *capture, uint64_t *frames, struct [AudioTimeStamp](https://device.harmonyos.com/cn/docs/develop/apiref/audiotimestamp-0000001055198122) *[time](https://device.harmonyos.com/cn/docs/develop/apiref/time-0000001055108017#ZH-CN_TOPIC_0000001055108017__gae7841e681c8c9d59818568d39553642c))

**Description:**

Obtains the last number of input audio frames. 

**Parameters:**

Name | Description  
---|---  
capture | Indicates the pointer to the **[AudioCapture](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098)** object to operate.   
frames | Indicates the pointer to the last number of input audio frames.   
time | Indicates the pointer to the timestamp associated with the frame.   
  
**Returns:**

Returns **0** if the last number is obtained; returns a negative value otherwise. 

**See also:**

[CaptureFrame](https://device.harmonyos.com/cn/docs/develop/apiref/audiocapture-0000001055358098#ZH-CN_TOPIC_0000001055358098__a89f1baf4b6177f91b9135e86cc8681da)
