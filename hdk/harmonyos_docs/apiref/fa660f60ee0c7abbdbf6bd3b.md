---
name: document/cn/apiref/multimedia__recorder-0000001054799553
title: MultiMedia_Recorder
uri: https://developer.huawei.com/consumer/cn/doc/apiref/multimedia__recorder-0000001054799553
source: portal
---

# MultiMedia_Recorder  
  
#### Overview

**Description:**

Defines the **Recorder** class and provides functions for audio and video recording. 

**Since:**

1.0

**Version:**

1.0

#### Summary

#### [h2]Files

File Name | Description  
---|---  
[recorder.h](https://device.harmonyos.com/cn/docs/develop/apiref/recorder_8h-0000001054479541) | Declares the **Recorder** class for audio and video recording.   
  
#### [h2]Data Structures

Data Structure Name | Description  
---|---  
[OHOS::Media::RecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recordercallback-0000001055078155) | Provides listeners for recording errors and information events.   
[OHOS::Media::Recorder](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recorder-0000001054598177) | Provides functions for audio and video recording.   
  
#### [h2]Enumerations

Enumeration Name | Description  
---|---  
[OHOS::Media::VideoSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gad252d27f9ce4b6ae0756bfeaa5f34490) : int32_t { [OHOS::Media::VIDEO_SOURCE_SURFACE_YUV](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ggad252d27f9ce4b6ae0756bfeaa5f34490ad137c55cd463c87ff8ea66c116da2e57) = 0, [OHOS::Media::VIDEO_SOURCE_SURFACE_RGB](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ggad252d27f9ce4b6ae0756bfeaa5f34490afcca9aba53005db99434c74f62803d6d), [OHOS::Media::VIDEO_SOURCE_SURFACE_ES](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ggad252d27f9ce4b6ae0756bfeaa5f34490a9316951d19d2ed845d2c0ef92c541eb8), [OHOS::Media::VIDEO_SOURCE_BUTT](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ggad252d27f9ce4b6ae0756bfeaa5f34490af19a30a10d95948a7dab0317a4e2447b) } | Enumerates video source types.   
[OHOS::Media::DataSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaccc05bb178cecd760369ea096dceae4c) : int32_t { [OHOS::Media::IMAGE](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ggaccc05bb178cecd760369ea096dceae4ca18ab16c027cd6de93c4e64be806caed0) = 0 } | Enumerates data source types.   
[OHOS::Media::OutputFormatType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga3dfe2e61369bf1c081ce569e235354df) : int32_t { [OHOS::Media::FORMAT_DEFAULT](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga3dfe2e61369bf1c081ce569e235354dfa5f2bb1abd7404320dcd46e7540a22586) = 0, [OHOS::Media::FORMAT_MPEG_4](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga3dfe2e61369bf1c081ce569e235354dfac7e010e743dca6fc60780bb745707d57), [OHOS::Media::FORMAT_TS](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga3dfe2e61369bf1c081ce569e235354dfa2abf22281e8d5a30da1f0700d9bf45a3) } | Enumerates output file formats.   
[OHOS::Media::FileSplitType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8759c7e5a74964a584a716f4ec0b7edb) : int32_t { [OHOS::Media::FILE_SPLIT_POST](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga8759c7e5a74964a584a716f4ec0b7edba9010fd43e012d61772ff5db3a9bdaf02) = 0, [OHOS::Media::FILE_SPLIT_PRE](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga8759c7e5a74964a584a716f4ec0b7edba01981748b792c27773467ea70099be65), [OHOS::Media::FILE_SPLIT_NORMAL](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga8759c7e5a74964a584a716f4ec0b7edbae05fb41e422f91399d2e2efc3e84943b) } | Enumerates file split types.   
[OHOS::Media::RecorderCallback::RecorderInfoType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga0db5cf9cc68d4b468e921a563248ffe0) : int32_t { [OHOS::Media::RecorderCallback::RECORDER_INFO_MAX_DURATION_APPROACHING](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0af47b2244ca5d4a906657ace804c62ab5) = 0, [OHOS::Media::RecorderCallback::RECORDER_INFO_MAX_FILESIZE_APPROACHING](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0ace19eeffeb7bfd809c0eecd831dfc4c8), [OHOS::Media::RecorderCallback::RECORDER_INFO_MAX_DURATION_REACHED](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0aa67fb963e882f4e45405e52a525d617e), [OHOS::Media::RecorderCallback::RECORDER_INFO_MAX_FILESIZE_REACHED](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0ad33be678eb5f4ec5c5db92d324ec0b27), [OHOS::Media::RecorderCallback::RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0ae27acecf4dec639f993091e2b4983d99), [OHOS::Media::RecorderCallback::RECORDER_INFO_FILE_SPLIT_FINISHED](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0a0a2e4851229314e2d019b7418a13ce82), [OHOS::Media::RecorderCallback::RECORDER_INFO_FILE_START_TIME_MS](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga0db5cf9cc68d4b468e921a563248ffe0abd5ed874b180a67a39c0edaa83a9e4d5) } | Enumerates recording information types.   
[OHOS::Media::RecorderCallback::RecorderErrorType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga5132172c298fc1497d12040b6bd511cf) : int32_t { [OHOS::Media::RecorderCallback::RECORDER_ERROR_UNKNOWN](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gga5132172c298fc1497d12040b6bd511cfa0e5cc2daf43191929754b01659128d79) = 0 } | Enumerates recording error types.   
  
#### [h2]Functions

Function | Description  
---|---  
[OHOS::Media::RecorderCallback::OnError](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga822c915f1bfab8c380919f24f2ee4f54) (int32_t errorType, int32_t errorCode)=0 | virtual void  Called when an error occurs during recording. This callback is used to report recording errors.   
[OHOS::Media::RecorderCallback::OnInfo](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac1f8bb191d90aac50119ea7ae4108407) (int32_t type, int32_t extra)=0 | virtual void  Called when an information event occurs during recording. This callback is used to report recording information.   
[OHOS::Media::Recorder::SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) ([VideoSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gad252d27f9ce4b6ae0756bfeaa5f34490) source, int32_t &sourceId) | int32_t  Sets a video source for recording.   
[OHOS::Media::Recorder::SetVideoEncoder](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gad9be6914af57fcf7acb7a5398118c614) (int32_t sourceId, [VideoCodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__ga797e6c5e38e23e730eff5bcc41427d7e) encoder) | int32_t  Sets a video encoder for recording.   
[OHOS::Media::Recorder::SetVideoSize](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga43c0ee5b76f58a12c2c745839184a96b) (int32_t sourceId, int32_t width, int32_t height) | int32_t  Sets the width and height of the video to record.   
[OHOS::Media::Recorder::SetVideoFrameRate](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaeb90d4d75d80040aeaae354abd1d29d7) (int32_t sourceId, int32_t frameRate) | int32_t  Sets the frame rate of the video to record.   
[OHOS::Media::Recorder::SetVideoEncodingBitRate](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga4e05a76b50abf790f29f06a0c1d4ecb8) (int32_t sourceId, int32_t rate) | int32_t  Sets the encoding bit rate of the video to record.   
[OHOS::Media::Recorder::SetCaptureRate](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga4f4a03fe881f48515874a699118fb84a) (int32_t sourceId, double fps) | int32_t  Sets the video capture rate.   
[OHOS::Media::Recorder::GetSurface](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gad633e33fbbd5efcf4057aff3cc6e2b38) (int32_t sourceId) | std::shared_ptr< [OHOS::Surface](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1surface-0000001055039528) > Obtains the surface of the video source.   
[OHOS::Media::Recorder::SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a) ([AudioSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gadc3158e093b995ca7b9b6aa32388ccdd) source, int32_t &sourceId) | int32_t  Sets the audio source for recording.   
[OHOS::Media::Recorder::SetAudioEncoder](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gab37c9385fa1a56f686beb73c7dcc1b1b) (int32_t sourceId, [AudioCodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gaa4ea6f314644ed287e0704be26c768b7) encoder) | int32_t  Sets an audio encoder for recording.   
[OHOS::Media::Recorder::SetAudioSampleRate](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gab2b98616da55ec294053c0c25645c845) (int32_t sourceId, int32_t rate) | int32_t  Sets the audio sampling rate for recording.   
[OHOS::Media::Recorder::SetAudioChannels](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga77d76e5657cb3359e85521e08a456c7d) (int32_t sourceId, int32_t num) | int32_t  Sets the number of audio channels to record.   
[OHOS::Media::Recorder::SetAudioEncodingBitRate](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac21a1a00c40cf58df84f1ba281b79a36) (int32_t sourceId, int32_t bitRate) | int32_t  Sets the encoding bit rate of the audio to record.   
[OHOS::Media::Recorder::SetMaxDuration](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaf2806f0fddd17a3e59eb7c5c740470d6) (int32_t duration) | int32_t  Sets the maximum duration of a recorded file, in seconds.   
[OHOS::Media::Recorder::SetOutputFormat](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaffb7874aae331570ecedfe609a495468) ([OutputFormatType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga3dfe2e61369bf1c081ce569e235354df) format) | int32_t  Sets the output file format.   
[OHOS::Media::Recorder::SetOutputPath](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaa5c898c1ad051b5c9f115ef15d952f18) (const string &path) | int32_t  Sets the output file path.   
[OHOS::Media::Recorder::SetOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga500d2bc895852fe292d7397d8450d091) (int32_t fd) | int32_t  Sets the file descriptor (FD) of the output file.   
[OHOS::Media::Recorder::SetNextOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8545fe87eb4bd399525e4c5fb414d7cb) (int32_t fd) | int32_t  Sets the FD of the next output file.   
[OHOS::Media::Recorder::SetMaxFileSize](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaeed9ee49d9d1ac1497ec79bf9639c0bc) (int64_t size) | int32_t  Sets the maximum size of a recorded file, in bytes.   
[OHOS::Media::Recorder::SetRecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga882585460b0538680954ce6692610376) (const std::shared_ptr< [RecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recordercallback-0000001055078155) > &callback) | int32_t  Registers a recording listener.   
[OHOS::Media::Recorder::Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387) () | int32_t  Prepares for recording.   
[OHOS::Media::Recorder::Start](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac3aaa32627f0799dea65e51356b91bfb) () | int32_t  Starts recording.   
[OHOS::Media::Recorder::Pause](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga71da5cc2720b336f0daadbe09d61c695) () | int32_t  Pauses recording.   
[OHOS::Media::Recorder::Resume](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gafd32ed157821800936a258a73af936be) () | int32_t  Resumes recording.   
[OHOS::Media::Recorder::Stop](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga1253f753cf9ed01dae5d57a37524dfa7) (bool block) | int32_t  Stops recording.   
[OHOS::Media::Recorder::Reset](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaebb808d5dd73b94b769b69e2b464c744) () | int32_t  Resets the recording.   
[OHOS::Media::Recorder::Release](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga116583c0d649f447c2dd272aae465cca) () | int32_t  Releases recording resources.   
[OHOS::Media::Recorder::SetFileSplitDuration](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga952ce2fada10d701e38e4ee29139e2af) ([FileSplitType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8759c7e5a74964a584a716f4ec0b7edb) type, int64_t timestamp, uint32_t duration) | int32_t  Manually splits a video.   
[OHOS::Media::Recorder::SetParameter](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga05cf279a460418b22d267527c83ede15) (int32_t sourceId, const [Format](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1format-0000001055039530) &format) | int32_t  Sets an extended parameter for recording, for example, **RCORDER_PRE_CACHE_DURATION**.   
  
#### Details

#### Enumeration Type

#### [h2]DataSourceType
    
    enum [OHOS::Media::DataSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaccc05bb178cecd760369ea096dceae4c) : int32_t

**Description:**

Enumerates data source types. 

Enumerator | Description  
---|---  
****IMAGE | [Image](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1image-0000001054598179) data source   
  
#### [h2]FileSplitType
    
    enum [OHOS::Media::FileSplitType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8759c7e5a74964a584a716f4ec0b7edb) : int32_t

**Description:**

Enumerates file split types. 

Enumerator | Description  
---|---  
****FILE_SPLIT_POST | Delayed/Backward split   
****FILE_SPLIT_PRE | Advanced/Forward split   
****FILE_SPLIT_NORMAL | Normal split   
  
#### [h2]OutputFormatType
    
    enum [OHOS::Media::OutputFormatType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga3dfe2e61369bf1c081ce569e235354df) : int32_t

**Description:**

Enumerates output file formats. 

Enumerator | Description  
---|---  
****FORMAT_DEFAULT | Default format   
****FORMAT_MPEG_4 | MPEG4 format   
****FORMAT_TS | TS format   
  
#### [h2]RecorderErrorType
    
    enum [OHOS::Media::RecorderCallback::RecorderErrorType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga5132172c298fc1497d12040b6bd511cf) : int32_t

**Description:**

Enumerates recording error types. 

Enumerator | Description  
---|---  
****RECORDER_ERROR_UNKNOWN | Unknown error   
  
#### [h2]RecorderInfoType
    
    enum [OHOS::Media::RecorderCallback::RecorderInfoType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga0db5cf9cc68d4b468e921a563248ffe0) : int32_t

**Description:**

Enumerates recording information types. 

Enumerator | Description  
---|---  
****RECORDER_INFO_MAX_DURATION_APPROACHING | The recording duration is reaching the threshold specified by **SetMaxDuration**. This type of information is reported when only one second or 10% is left to reach the allowed duration.   
****RECORDER_INFO_MAX_FILESIZE_APPROACHING | The recorded file size is reaching the threshold specified by **SetMaxFileSize**. This type of information is reported when only 100 KB or 10% is left to reach the allowed size.   
****RECORDER_INFO_MAX_DURATION_REACHED | The threshold specified by **SetMaxDuration** is reached, and the recording ends. Before calling **SetOutputFile** , you must close the file.   
****RECORDER_INFO_MAX_FILESIZE_REACHED | The threshold specified by **SetMaxFileSize** is reached, and the recording ends. Before calling **SetOutputFile** , you must close the file.   
****RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED | Recording started for the next output file.   
****RECORDER_INFO_FILE_SPLIT_FINISHED | Manual file split completed.   
****RECORDER_INFO_FILE_START_TIME_MS | The start time position of the recording file is not supported.   
  
#### [h2]VideoSourceType
    
    enum [OHOS::Media::VideoSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gad252d27f9ce4b6ae0756bfeaa5f34490) : int32_t

**Description:**

Enumerates video source types. 

Enumerator | Description  
---|---  
****VIDEO_SOURCE_SURFACE_YUV | YUV video data provided through [Surface](https://device.harmonyos.com/cn/docs/develop/apiref/surface-0000001054479515)  
****VIDEO_SOURCE_SURFACE_RGB | RGB video data provided through [Surface](https://device.harmonyos.com/cn/docs/develop/apiref/surface-0000001054479515)  
****VIDEO_SOURCE_SURFACE_ES | Raw encoded data provided through [Surface](https://device.harmonyos.com/cn/docs/develop/apiref/surface-0000001054479515)  
****VIDEO_SOURCE_BUTT | Invalid value   
  
#### Function

#### [h2]GetSurface()
    
    std::shared_ptr<[OHOS::Surface](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1surface-0000001055039528)> OHOS::Media::Recorder::GetSurface (int32_t sourceId)

**Description:**

Obtains the surface of the video source. 

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the video source ID, which can be obtained from [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca).   
  
**Returns:**

Returns the pointer to the surface. 

#### [h2]OnError()
    
    virtual void OHOS::Media::RecorderCallback::OnError (int32_t errorType, int32_t errorCode )

**Description:**

Called when an error occurs during recording. This callback is used to report recording errors. 

**Parameters:**

Name | Description  
---|---  
errorType | Indicates the error type. For details, see [RecorderErrorType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga5132172c298fc1497d12040b6bd511cf).   
errorCode | Indicates the error code.   
  
#### [h2]OnInfo()
    
    virtual void OHOS::Media::RecorderCallback::OnInfo (int32_t type, int32_t extra )

**Description:**

Called when an information event occurs during recording. This callback is used to report recording information. 

**Parameters:**

Name | Description  
---|---  
type | Indicates the information type. For details, see [RecorderInfoType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga0db5cf9cc68d4b468e921a563248ffe0).   
extra | Indicates other information, for example, the start time position of a recording file.   
  
#### [h2]Pause()
    
    int32_t OHOS::Media::Recorder::Pause ()

**Description:**

Pauses recording. 

After [Start](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac3aaa32627f0799dea65e51356b91bfb) is called, you can call this function to pause recording. The audio and video source streams are not paused, and source data is discarded.

**Returns:**

Returns **SUCCESS** if the recording is paused; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]Prepare()
    
    int32_t OHOS::Media::Recorder::Prepare ()

**Description:**

Prepares for recording. 

This function must be called before [Start](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac3aaa32627f0799dea65e51356b91bfb).

**Returns:**

Returns **SUCCESS** if the preparation is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]Release()
    
    int32_t OHOS::Media::Recorder::Release ()

**Description:**

Releases recording resources. 

**Returns:**

Returns **SUCCESS** if recording resources are released; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]Reset()
    
    int32_t OHOS::Media::Recorder::Reset ()

**Description:**

Resets the recording. 

After the function is called, add a recording source by calling [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) or [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a), set related parameters, and call [Start](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac3aaa32627f0799dea65e51356b91bfb) to start recording again after [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387) is called.

**Returns:**

Returns **SUCCESS** if the recording is reset; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]Resume()
    
    int32_t OHOS::Media::Recorder::Resume ()

**Description:**

Resumes recording. 

You can call this function to resume recording after [Pause](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga71da5cc2720b336f0daadbe09d61c695) is called.

**Returns:**

Returns **SUCCESS** if the recording is resumed; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetAudioChannels()
    
    int32_t OHOS::Media::Recorder::SetAudioChannels (int32_t sourceId, int32_t num )

**Description:**

Sets the number of audio channels to record. 

This function must be called after [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the audio source ID, which can be obtained from [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a).   
num | Indicates the number of audio channels to set.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetAudioEncoder()
    
    int32_t OHOS::Media::Recorder::SetAudioEncoder (int32_t sourceId, [AudioCodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gaa4ea6f314644ed287e0704be26c768b7) encoder )

**Description:**

Sets an audio encoder for recording. 

If this function is not called, the output file does not contain the audio track. This function must be called after [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387). 

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the audio source ID, which can be obtained from [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a).   
encoder | Indicates the audio encoder to set.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetAudioEncodingBitRate()
    
    int32_t OHOS::Media::Recorder::SetAudioEncodingBitRate (int32_t sourceId, int32_t bitRate )

**Description:**

Sets the encoding bit rate of the audio to record. 

This function must be called after [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the audio source ID, which can be obtained from [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a).   
bitRate | Indicates the audio encoding bit rate, in bit/s.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetAudioSampleRate()
    
    int32_t OHOS::Media::Recorder::SetAudioSampleRate (int32_t sourceId, int32_t rate )

**Description:**

Sets the audio sampling rate for recording. 

This function must be called after [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the audio source ID, which can be obtained from [SetAudioSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gae287f59da8b3f1b6ca9f1c0e58a6565a).   
rate | Indicates the sampling rate of the audio per second.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetAudioSource()
    
    int32_t OHOS::Media::Recorder::SetAudioSource ([AudioSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gadc3158e093b995ca7b9b6aa32388ccdd) source, int32_t & sourceId )

**Description:**

Sets the audio source for recording. 

If this function is not called, the output file does not contain the audio track.

**Parameters:**

Name | Description  
---|---  
source | Indicates the audio source type. For details, see [AudioSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__gadc3158e093b995ca7b9b6aa32388ccdd).   
sourceId | Indicates the audio source ID. The value **-1** indicates an invalid ID and the setting fails.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetCaptureRate()
    
    int32_t OHOS::Media::Recorder::SetCaptureRate (int32_t sourceId, double fps )

**Description:**

Sets the video capture rate. 

This function must be called after [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387). It is valid when the video source is YUV or RGB.

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the video source ID, which can be obtained from [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca).   
fps | Indicates the rate at which frames are captured per second.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetFileSplitDuration()
    
    int32_t OHOS::Media::Recorder::SetFileSplitDuration ([FileSplitType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8759c7e5a74964a584a716f4ec0b7edb) type, int64_t timestamp, uint32_t duration )

**Description:**

Manually splits a video. 

This function must be called after [Start](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gac3aaa32627f0799dea65e51356b91bfb). After this function is called, the file is split based on the manual split type. After the manual split is complete, the initial split type is used. This function can be called again only after **RECORDER_INFO_FILE_SPLIT_FINISHED** is reported.

**Parameters:**

Name | Description  
---|---  
type | Indicates the file split type. For details, see **FileSplitType**.   
timestamp | Indicates the file split timestamp. This parameter is not supported currently and can be set to **-1**. The recording module splits a file based on the call time.   
duration | Indicates the duration for splitting the file.   
  
**Returns:**

Returns **SUCCESS** if the video is manually split; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetMaxDuration()
    
    int32_t OHOS::Media::Recorder::SetMaxDuration (int32_t duration)

**Description:**

Sets the maximum duration of a recorded file, in seconds. 

This method must be called before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387). If the setting is valid, **RECORDER_INFO_MAX_DURATION_APPROACHING** is reported through **OnInfo** in the [RecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recordercallback-0000001055078155) class when only one second or 10% is left to reach the allowed duration. If the recording output file is set by calling [SetOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga500d2bc895852fe292d7397d8450d091), call [SetNextOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8545fe87eb4bd399525e4c5fb414d7cb) to set the next output file. Otherwise, the current file will be overwritten when the allowed duration is reached. 

**Parameters:**

Name | Description  
---|---  
duration | Indicates the maximum recording duration to set. If the value is **0** or a negative number, a failure message is returned. The default duration is 60s.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetMaxFileSize()
    
    int32_t OHOS::Media::Recorder::SetMaxFileSize (int64_t size)

**Description:**

Sets the maximum size of a recorded file, in bytes. 

This function must be called before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387). If the setting is valid, **RECORDER_INFO_MAX_DURATION_APPROACHING** is reported through **OnInfo** in the [RecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recordercallback-0000001055078155) class when only 100 KB or 10% is left to reach the allowed size. If the recording output file is set by calling [SetOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga500d2bc895852fe292d7397d8450d091), call [SetNextOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga8545fe87eb4bd399525e4c5fb414d7cb) to set the next output file. Otherwise, when the allowed size is reached, the current file will be overwritten. If **MaxDuration** is also set by calling [SetMaxDuration](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gaf2806f0fddd17a3e59eb7c5c740470d6), **MaxDuration** or **MaxFileSize** prevails depending on which of them is first satisfied.

**Parameters:**

Name | Description  
---|---  
size | Indicates the maximum file size to set. If the value is **0** or a negative number, a failure message is returned. By default, the maximum size of a single file supported by the current file system is used as the limit.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetNextOutputFile()
    
    int32_t OHOS::Media::Recorder::SetNextOutputFile (int32_t fd)

**Description:**

Sets the FD of the next output file. 

If [SetOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga500d2bc895852fe292d7397d8450d091) is successful, call this function to set the FD of the next output file after **RECORDER_INFO_MAX_DURATION_APPROACHING** or **RECORDER_INFO_MAX_FILESIZE_APPROACHING** is received.

**Parameters:**

Name | Description  
---|---  
fd | Indicates the FD of the next output file.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetOutputFile()
    
    int32_t OHOS::Media::Recorder::SetOutputFile (int32_t fd)

**Description:**

Sets the file descriptor (FD) of the output file. 

This function must be called before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
fd | Indicates the FD of the file.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetOutputFormat()
    
    int32_t OHOS::Media::Recorder::SetOutputFormat ([OutputFormatType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga3dfe2e61369bf1c081ce569e235354df) format)

**Description:**

Sets the output file format. 

This function must be called before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
format | Indicates the output file format. For details, see **OutputFormatType**.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetOutputPath()
    
    int32_t OHOS::Media::Recorder::SetOutputPath (const string & path)

**Description:**

Sets the output file path. 

This function must be called before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387) and One of them [SetOutputFile](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga500d2bc895852fe292d7397d8450d091) must be set.

**Parameters:**

Name | Description  
---|---  
path | Indicates the output file path.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetParameter()
    
    int32_t OHOS::Media::Recorder::SetParameter (int32_t sourceId, const [Format](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1format-0000001055039530) & format )

**Description:**

Sets an extended parameter for recording, for example, **RCORDER_PRE_CACHE_DURATION**. 

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the data source ID. The value **-1** indicates all sources.   
format | Indicates the string key and value. For details, see [Format](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1format-0000001055039530) and **RCORDER_PRE_CACHE_DURATION**.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetRecorderCallback()
    
    int32_t OHOS::Media::Recorder::SetRecorderCallback (const std::shared_ptr< [RecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recordercallback-0000001055078155) > & callback)

**Description:**

Registers a recording listener. 

This function must be called before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
callback | Indicates the recording listener to register. For details, see [RecorderCallback](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1recordercallback-0000001055078155).   
  
**Returns:**

Returns **SUCCESS** if the listener is registered; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetVideoEncoder()
    
    int32_t OHOS::Media::Recorder::SetVideoEncoder (int32_t sourceId, [VideoCodecFormat](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__mediacommon-0000001055678046#ZH-CN_TOPIC_0000001055678046__ga797e6c5e38e23e730eff5bcc41427d7e) encoder )

**Description:**

Sets a video encoder for recording. 

If this function is not called, the output file does not contain the video track. This function must be called after [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387). 

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the video source ID, which can be obtained from [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca).   
encoder | Indicates the video encoder to set.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetVideoEncodingBitRate()
    
    int32_t OHOS::Media::Recorder::SetVideoEncodingBitRate (int32_t sourceId, int32_t rate )

**Description:**

Sets the encoding bit rate of the video to record. 

This function must be called after [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the video source ID, which can be obtained from [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca).   
rate | Indicates the encoding bit rate to set.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetVideoFrameRate()
    
    int32_t OHOS::Media::Recorder::SetVideoFrameRate (int32_t sourceId, int32_t frameRate )

**Description:**

Sets the frame rate of the video to record. 

This function must be called after [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the video source ID, which can be obtained from [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca).   
frameRate | Indicates the frame rate to set.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetVideoSize()
    
    int32_t OHOS::Media::Recorder::SetVideoSize (int32_t sourceId, int32_t width, int32_t height )

**Description:**

Sets the width and height of the video to record. 

This function must be called after [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca) but before [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Parameters:**

Name | Description  
---|---  
sourceId | Indicates the video source ID, which can be obtained from [SetVideoSource](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga9e12ef9700d06c7620f9e3d7b4d844ca).   
width | Indicates the video width to set.   
height | Indicates the video height to set.   
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]SetVideoSource()
    
    int32_t OHOS::Media::Recorder::SetVideoSource ([VideoSourceType](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__gad252d27f9ce4b6ae0756bfeaa5f34490) source, int32_t & sourceId )

**Description:**

Sets a video source for recording. 

If this function is not called, the output file does not contain the video track.

**Parameters:**

Name | Description  
---|---  
source | Indicates the video source type. For details, see **VideoSourceType**.   
sourceId | Indicates the video source ID. The value **-1** indicates an invalid ID and the setting fails.  
  
**Returns:**

Returns **SUCCESS** if the setting is successful; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]Start()
    
    int32_t OHOS::Media::Recorder::Start ()

**Description:**

Starts recording. 

This function must be called after [Prepare](https://device.harmonyos.com/cn/docs/develop/apiref/multimedia__recorder-0000001054799553#ZH-CN_TOPIC_0000001054799553__ga15d2f3416bb735a0715e1e79be226387).

**Returns:**

Returns **SUCCESS** if the recording is started; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### [h2]Stop()
    
    int32_t OHOS::Media::Recorder::Stop (bool block)

**Description:**

Stops recording. 

**Parameters:**

Name | Description  
---|---  
block | Indicates the stop mode. The value **true** indicates that the processing stops after all caches are processed, and **false** indicates that the processing stops immediately and all caches are discarded.   
  
**Returns:**

Returns **SUCCESS** if the recording is stopped; returns an error code defined in [media_errors.h](https://device.harmonyos.com/cn/docs/develop/apiref/media__errors_8h-0000001055039490) otherwise. 

#### Variable

#### [h2]RCORDER_PRE_CACHE_DURATION
    
    const string OHOS::Media::RCORDER_PRE_CACHE_DURATION = "pre-cache-duration"

**Description:**

This constant can be used as the value of [Format](https://device.harmonyos.com/cn/docs/develop/apiref/ohos_1_1media_1_1format-0000001055039530) in [SetParameter](https://device.harmonyos.com/cn/docs/develop/apiref/parameter-0000001054718083#ZH-CN_TOPIC_0000001054718083__ga2779b5e59d43308c51f7be38b9c98ddb) to configure the duration for storing recorded data in the cache. 
